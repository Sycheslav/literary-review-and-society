---
id: arxiv-2605-09128-text
type: material
title: 'Internal vs. External: Comparing Deliberation and Evolution for Multi-Agent Constitutional Design'
work_id: arxiv-2605-09128
source_url: https://arxiv.org/html/2605.09128v1
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять
  с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.
language: original
sha256_text: 58f022c6a9cc488ab07f0598539668a8df1696b573cc30f8782286fce661ca9d
---

> Источник: [https://arxiv.org/html/2605.09128v1](https://arxiv.org/html/2605.09128v1). Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.

# Internal vs. External: Comparing Deliberation and Evolution for Multi-Agent Constitutional Design

Hershraj Niranjani
Affiliation: Department of EECS, University of California, Berkeley, Berkeley, CA, USA
  
Ujwal Kumar
Affiliation: College of Engineering, Shibaura Institute of Technology, Tokyo, Japan
  
Phan Xuan Tan
Affiliation: College of Engineering, Shibaura Institute of Technology, Tokyo, Japan
Correspondence to: [tanpx@shibaura-it.ac.jp](mailto:tanpx@shibaura-it.ac.jp)

###### Abstract

Multi-agent AI systems need behavioral constitutions, but it is unresolved whether such rules should emerge *internally* through agent self-governance or be discovered *externally* through optimization.
We present the first controlled comparison of internal deliberation and external evolution across three social environments: a coordination gridworld, an iterated public goods game, and a bilateral trading market.
Across 180 simulation runs, evolution significantly outperforms deliberation in collective-action settings ($p<0.01$), while neither method improves outcomes in bilateral trading.
A multiplier ablation reveals that evolution’s advantage *inverts* when incentives shift: at pool multiplier $m=0.75$ the evolved constitution forces value-destroying cooperation and becomes the worst-performing method.
Notably, no deliberation run across thirty trials ever proposed punishment—the canonical cooperation-sustaining mechanism evolution reliably discovers—suggesting external optimization wins on peaks while internal self-governance trades peaks for structural responsiveness.

## 1 Introduction

Large language model (LLM) agents are increasingly deployed in multi-agent settings, from collaborative software development to autonomous trading, raising the practical question of how to govern their behavior.
Constitutional AI ([Bai et al., 2022](https://arxiv.org/html/2605.09128v1#bib.bib7)) introduced the idea of guiding a model with explicit principles, but the framework targets single-agent alignment with fixed, human-authored rules.
Multi-agent systems pose qualitatively different challenges: strategic interaction, emergent norms, and the need for coordination rules that no single agent can unilaterally write ([Carichon et al., 2025](https://arxiv.org/html/2605.09128v1#bib.bib13); [Lynch et al., 2025](https://arxiv.org/html/2605.09128v1#bib.bib21)).

Two recent threads address this gap from opposite ends.
On one side, [Kumar and others (2026)](https://arxiv.org/html/2605.09128v1#bib.bib1) show that LLM-guided evolutionary search can discover interpretable behavioral constitutions that improve societal stability over human-designed baselines—but the constitution is an *external* artifact, found offline and imposed on agents at deployment.
On the other side, work on AI governance ([Koster and others, 2022](https://arxiv.org/html/2605.09128v1#bib.bib12); [Lai et al., 2024](https://arxiv.org/html/2605.09128v1#bib.bib11)) and multi-agent debate ([Du et al., 2023](https://arxiv.org/html/2605.09128v1#bib.bib17); [Tillmann, 2025](https://arxiv.org/html/2605.09128v1#bib.bib4)) suggests an *internal* alternative, where agents collectively author rules through deliberation and voting.
The two threads have not been directly compared under matched conditions, and our results expose two hidden costs of external optimization that such a comparison reveals: brittleness when deployment incentives shift, and the structural reluctance of self-governing agents to legislate the very enforcement mechanism that drives external optimization’s success.

Two questions follow.
First, across structurally different social environments, does internal deliberation or external optimization produce better collective outcomes?
Second, when the deployment incentives shift away from those the rules were authored for, which method’s outcomes hold up—and what does that tell us about the kinds of rules each method produces?
We evaluate three conditions—no constitution (control), agent deliberation, and an evolved constitution—across a spatial-coordination gridworld, an iterated public goods game, and a bilateral trading market, additionally sweeping the public-goods multiplier to probe whether an evolved constitution generalizes beyond the incentive structure it was optimized for.
Across thirty deliberation runs spanning all three environments, agents voting on their own rules never once proposed costly punishment—the canonical cooperation-sustaining mechanism evolution reliably discovers ([Axelrod and Hamilton, 1981](https://arxiv.org/html/2605.09128v1#bib.bib8)).

Contributions.
(i) A controlled head-to-head comparison across three environments (90 runs) showing evolution dominates in collective action but not bilateral negotiation ([Section 4.1](https://arxiv.org/html/2605.09128v1#S4.SS1 "4.1 Head-to-Head Comparison ‣ 4 Results ‣ Internal vs. External: Comparing Deliberation and Evolutionfor Multi-Agent Constitutional Design")).
(ii) A multiplier ablation on public goods (90 runs) revealing that evolution’s advantage *inverts* when the incentive structure shifts, while deliberation tracks each environment appropriately ([Section 4.2](https://arxiv.org/html/2605.09128v1#S4.SS2 "4.2 Incentive Structure Ablation ‣ 4 Results ‣ Internal vs. External: Comparing Deliberation and Evolutionfor Multi-Agent Constitutional Design")).
(iii) A qualitative analysis showing the two methods produce fundamentally different rule *types*—behavioral directives versus governance policies—and that deliberation, across thirty runs, never discovered punishment ([Section 5](https://arxiv.org/html/2605.09128v1#S5 "5 Analysis ‣ Internal vs. External: Comparing Deliberation and Evolutionfor Multi-Agent Constitutional Design")).

## 2 Background

Constitutional AI ([Bai et al., 2022](https://arxiv.org/html/2605.09128v1#bib.bib7)) aligns single agents to fixed human-authored principles, but the framework presumes one model and one set of rules—assumptions that break in multi-agent settings where alignment must be treated as a dynamic social process ([Carichon et al., 2025](https://arxiv.org/html/2605.09128v1#bib.bib13)) and where absent governance enables emergent insider-threat behavior ([Lynch et al., 2025](https://arxiv.org/html/2605.09128v1#bib.bib21)); recent proposals address this with new frameworks for constitutional governance of LLM collectives ([de Curtò and de Zarzà, 2026](https://arxiv.org/html/2605.09128v1#bib.bib5)) and for learning constitutions from multi-agent interaction ([Thareja et al., 2026](https://arxiv.org/html/2605.09128v1#bib.bib3)).
Multi-agent debate has been studied primarily as a method for improving LLM *reasoning* ([Du et al., 2023](https://arxiv.org/html/2605.09128v1#bib.bib17); [Tillmann, 2025](https://arxiv.org/html/2605.09128v1#bib.bib4); [Bohnet et al., 2025](https://arxiv.org/html/2605.09128v1#bib.bib6)), distinct from *norm discovery*, where the goal is joint authorship of rules; [Becker et al. (2026)](https://arxiv.org/html/2605.09128v1#bib.bib2) document “problem drift” as a chronic failure mode of unconstrained debate.
On the *external* side, LLM-guided evolutionary search has produced striking results across program synthesis ([Romera-Paredes et al., 2024](https://arxiv.org/html/2605.09128v1#bib.bib16); [Lehman et al., 2022](https://arxiv.org/html/2605.09128v1#bib.bib19)), algorithm design ([AlphaEvolve Team, 2025](https://arxiv.org/html/2605.09128v1#bib.bib20); [Real et al., 2020](https://arxiv.org/html/2605.09128v1#bib.bib22)), and constitutional design ([Kumar and others, 2026](https://arxiv.org/html/2605.09128v1#bib.bib1)) via multi-island MAP-Elites populations ([Mouret and Clune, 2015](https://arxiv.org/html/2605.09128v1#bib.bib23)).
On the *internal* side, “democratic AI” ([Koster and others, 2022](https://arxiv.org/html/2605.09128v1#bib.bib12)) and self-regulating AI collectives ([Lai et al., 2024](https://arxiv.org/html/2605.09128v1#bib.bib11)) draw on classical social-choice theory ([Rawls, 1971](https://arxiv.org/html/2605.09128v1#bib.bib14); [Arrow, 1950](https://arxiv.org/html/2605.09128v1#bib.bib15)).
Unlike these prior frameworks, we do not introduce another framework; we directly compare two concrete mechanisms—internal deliberation and external evolution—under controlled conditions.

## 3 Experimental Setup

Environments.
All experiments use GPT-OSS-120B ([OpenAI, 2025](https://arxiv.org/html/2605.09128v1#bib.bib10)) as the agent backbone, with 6 agents per simulation organized into two teams of three.
An overseer eliminates the lowest-contributing agent every 10 turns, creating survival pressure and capping the maximum survival rate at $V\leq 1/3$.
The *Gridworld* (80 turns) places six agents on a $6{\times}6$ grid where they gather three resource types under partial observability, can attack or steal, and must complete team-specific construction projects.
The *Public Goods Game* (40 turns) gives each agent 10 tokens per round to allocate between a private account and a shared pool that is multiplied by $m$ (default $m=1.5$) and redistributed; agents may also pay 1 token to punish another player.
*Trading* (40 turns) endows agents with private resource bundles and private valuations, and lets them propose, accept, or reject bilateral trades between any two agents—a setting with information asymmetry and no dominant strategy.

Constitutional methods.
*Control* provides no constitution; agents act on LLM priors and in-context game instructions.
*Deliberation* (internal) starts from a blank constitution; every 10 turns each agent may propose up to two amendments, all agents vote by majority rule, and adopted rules bind subsequent play.
Agents observe the environment they are playing in, including the public-goods multiplier.
*Evolution* (external) discovers a constitution offline via the LLM-guided multi-island search of [Kumar and others (2026)](https://arxiv.org/html/2605.09128v1#bib.bib1) (30 iterations, 3 islands, population 10); the resulting constitution $\mathcal{C}^{\*}$ is fixed and imposed throughout the simulation.

Evaluation.
We measure outcomes via the Stability Score $\mathcal{S}(\tau)=\max(0,\,0.5\,P+0.3\,V-0.2\,C)$ ([Kumar and others, 2026](https://arxiv.org/html/2605.09128v1#bib.bib1)), combining productivity $P\in[0,1]$, survival $V\in[0,1]$, and harm $C\in[0,1]$.
$P$, $V$, and $C$ are operationalized per environment: $P$ captures project completion (Gridworld), pool utilization (PGG), or successful trade volume (Trading); $V$ is the survival rate under the overseer; $C$ is conflict frequency (Gridworld) or within-team free-riding (PGG, Trading).
The theoretical maximum given the overseer is $\mathcal{S}\approx 0.60$.
Each condition is run with 10 independent seeds (42–51), and pairwise comparisons use Welch’s $t$-test (significance: \* $p<0.05$,  \*\* $p<0.025$,  \*\*\* $p<0.01$).

## 4 Results

### 4.1 Head-to-Head Comparison

Table 1: Head-to-head Stability Score $\mathcal{S}$ (mean $\pm$ std), 10 seeds per condition. $\Delta$ is Evolution minus Deliberation; Welch’s $t$-test.

| Env. | Control | Delib. | Evol. | $\Delta$ |
| --- | --- | --- | --- | --- |
| Gridworld | $.257\_{\pm.107}$ | $.319\_{\pm.091}$ | $\mathbf{.458\_{\pm.017}}$ | $+.139$ \*\*\* |
| Public Goods | $.336\_{\pm.019}$ | $.376\_{\pm.032}$ | $\mathbf{.472\_{\pm.004}}$ | $+.096$ \*\*\* |
| Trading | $.429\_{\pm.041}$ | $.419\_{\pm.065}$ | $.438\_{\pm.047}$ | $+.019$ n.s. |

[Table 1](https://arxiv.org/html/2605.09128v1#S4.T1 "In 4.1 Head-to-Head Comparison ‣ 4 Results ‣ Internal vs. External: Comparing Deliberation and Evolutionfor Multi-Agent Constitutional Design") presents the main results across all three environments.
In both collective-action settings, evolution significantly outperforms deliberation and control: in public goods, $\mathcal{S}=0.472\pm 0.004$ vs. $0.376\pm 0.032$ ($\Delta=+0.096$, $t=9.46$, $p<0.01$); in the gridworld, the gap is even larger ($\Delta=+0.139$, $t=4.77$, $p<0.01$).
The advantage comes primarily from productivity ($P=0.916$ in the gridworld, vs. $0.701$ for deliberation; $P=0.744$ in public goods, vs. $0.557$), and in the gridworld evolution additionally eliminates all conflict ($C=0.000$ vs. $0.160$).
Trading is the exception: all three conditions perform similarly ($\mathcal{S}\in[0.419,0.438]$) and no pairwise comparison reaches significance.
Evolution also produces dramatically tighter outcomes—5–8$\times$ lower variance than deliberation in collective-action settings ($\sigma=0.017$ vs. $0.091$ in the gridworld; $0.004$ vs. $0.032$ in public goods), an expected consequence of imposing a fixed artifact rather than rediscovering rules per run.

### 4.2 Incentive Structure Ablation

Table 2: Public goods multiplier ablation. The evolved constitution was optimized at $m=1.5$ and applied unchanged at $m=1.0$ and $m=0.75$; at $m=0.75$ it inverts from best to worst.

| $m$ | Control | Delib. | Evol. | $\Delta$ |
| --- | --- | --- | --- | --- |
| $1.50$ | $.332\_{\pm.033}$ | $.380\_{\pm.031}$ | $\mathbf{.470\_{\pm.007}}$ | $+.090$ \*\*\* |
| $1.00$ | $.422\_{\pm.010}$ | $.465\_{\pm.009}$ | $\mathbf{.475\_{\pm.000}}$ | $+.010$ \*\*\* |
| $0.75$ | $.513\_{\pm.028}$ | $\mathbf{.536\_{\pm.014}}$ | $.477\_{\pm.001}$ | $-.060$ \*\*\* |

The head-to-head shows evolution’s superiority in public goods, but the evolved constitution was *optimized* for the default multiplier $m=1.5$.
We test what happens when the underlying incentive structure changes by sweeping $m\in\{1.5,\,1.0,\,0.75\}$ while holding the evolved constitution fixed ([Table 2](https://arxiv.org/html/2605.09128v1#S4.T2 "In 4.2 Incentive Structure Ablation ‣ 4 Results ‣ Internal vs. External: Comparing Deliberation and Evolutionfor Multi-Agent Constitutional Design")).
The result is a striking crossover: at $m=0.75$, where each contributed token returns only $0.75/n$ and rational agents should contribute zero, the evolved rules—“contribute 10 tokens” and “punish free-riders”—force agents to cooperate even though cooperation now *destroys* value.
Evolution’s absolute score holds nearly steady across multipliers ($\mathcal{S}=0.470,\,0.475,\,0.477$), but control and deliberation rise sharply as the rational answer shifts toward zero contribution—evolution thus moves from best at $m=1.5$ to worst at $m=0.75$ (vs. deliberation’s $0.536$; $t=-13.11$, $p<0.01$).
Deliberation, which sees the multiplier its agents are actually playing under, outperforms control at *every* value of $m$ ($\Delta=+0.048,\,+0.043,\,+0.023$ at $m=1.5,\,1.0,\,0.75$ respectively, all $p<0.025$): the rules its agents propose track the underlying incentive structure, while a fixed evolved constitution by construction cannot.

## 5 Analysis

Table 3: Representative rules from each method. Evolution converges on *behavioral directives* (executable commands); deliberation produces *governance policies* (aspirational norms).

| Evolution (directives) | Deliberation (policies) |
| --- | --- |
| Contribute 10 tokens each round | Min. contribution requirement of 7 tokens |
| Punish non-contributors with 1 token | 5% penalty for contributions below threshold |
| Deposit carried resources immediately | Mandatory collaboration between high & low performers |
| Never attack unless attacked first | Promote fairness and equitable resource sharing |

The punishment gap.
The strongest qualitative finding concerns punishment in the public goods game.
Evolution discovers costly punishment as a core mechanism: the evolved rule instructs agents to spend 1 token punishing any player who contributed less than the maximum, a well-known cooperation-sustaining device in experimental economics ([Axelrod and Hamilton, 1981](https://arxiv.org/html/2605.09128v1#bib.bib8)).
*No deliberation run, across all 30 trials, ever proposed a punishment rule.*
Deliberating agents instead propose contribution thresholds, redistribution schemes, and aspirational norms ([Table 3](https://arxiv.org/html/2605.09128v1#S5.T3 "In 5 Analysis ‣ Internal vs. External: Comparing Deliberation and Evolutionfor Multi-Agent Constitutional Design"), right column) that describe desired states without prescribing enforcement.
The asymmetry is structural: a self-governing collective is reluctant to legislate sanctions on its own members, while an external optimizer faces no such constraint and converges on the enforcement mechanisms that game theory predicts will work.
This gap explains much of the performance difference: in the gridworld, evolution’s “conflict avoidance” rule (never attack unless attacked) achieves an analogous effect—deterrence through credible threat—while no deliberation run produced a comparable deterrent.
More broadly, evolution converges on *behavioral directives* that map directly to executable agent commands, whereas deliberation produces *governance policies* that rely on voluntary agent compliance ([Table 3](https://arxiv.org/html/2605.09128v1#S5.T3 "In 5 Analysis ‣ Internal vs. External: Comparing Deliberation and Evolutionfor Multi-Agent Constitutional Design")).

Trading and implications.
Trading is the only environment where neither method beats control, and neither method should be expected to help: bilateral bargaining under private information has no dominant rule, since each proposal depends on the counterparty’s valuations and trading history, so the case-by-case reasoning the LLM already does well is the binding constraint.
The rules evolution *did* find for trading (“accept fair trades,” “no deceptive proposals”) are notably hedged and advisory rather than directive—the search itself struggled to find prescriptive rules that did not destroy value, in contrast to the iterated cooperation literature where structural priors such as inequity aversion robustly help ([Hughes et al., 2018](https://arxiv.org/html/2605.09128v1#bib.bib18)).
Read together, our findings expose a three-way trade-off between *peak performance*, *robustness to incentive change*, and *tolerance for strategic flexibility*: use evolution when the deployment environment is stable, well-characterized, and dominated by a clear social dilemma; use deliberation when incentives may shift and rules must track the environment; and expect no constitutional benefit when case-by-case reasoning under private information is what matters.

## 6 Limitations and Future Work

Our experiments use a single LLM backbone (GPT-OSS-120B) with 6-agent populations, an overseer that caps the survival component $V$ at $1/3$ across conditions, and a 30-iteration evolution budget that is modest by the standards of LLM-guided search; we ablate only the public-goods multiplier and make no claims about real-world deployment.
The internal–external split also maps onto the long-standing dichotomy between *legislation* (codified rules imposed externally) and *social norms* (sustained by participants), with the same trade-offs we observe in microcosm: legislation is consistent and enforceable but rigid, while norms adapt locally but under-police free-riders—and unconstrained debate exhibits the “problem drift” that constitutional anchoring is precisely positioned to mitigate ([Becker et al., 2026](https://arxiv.org/html/2605.09128v1#bib.bib2)).
The most promising direction is hybridization: evolve an initial scaffold offline, then allow deliberation to amend it as conditions change, combining evolution’s enforcement discoveries with deliberation’s structural responsiveness.

## 7 Conclusion

We compared internal (deliberation) and external (evolution) constitutional design across three multi-agent environments.
Evolution dominates collective-action settings, but its rules become brittle when deployment incentives shift; across thirty deliberation runs no agent ever proposed costly punishment—the canonical cooperation-sustaining mechanism evolution reliably discovers.
External optimization buys higher peaks at the cost of brittleness; internal self-governance trades peaks for structural responsiveness, and hybrid mechanisms that pair an evolved scaffold with deliberative amendment are the most promising path forward.

## References

- AlphaEvolve Team (2025)
  AlphaEvolve Team
  AlphaEvolve: a Gemini-powered coding agent for designing advanced algorithms.
  Note: Google DeepMind Blog<https://deepmind.google/blog/alphaevolve-a-gemini-powered-coding-agent-for-designing-advanced-algorithms/>
  Cited by: [§2](https://arxiv.org/html/2605.09128v1#S2.p1.1 "2 Background ‣ Internal vs. External: Comparing Deliberation and Evolutionfor Multi-Agent Constitutional Design").
- Arrow (1950)
  K. J. Arrow
  A difficulty in the concept of social welfare.
  Journal of Political Economy 58 (4), pp. 328–346.
  Cited by: [§2](https://arxiv.org/html/2605.09128v1#S2.p1.1 "2 Background ‣ Internal vs. External: Comparing Deliberation and Evolutionfor Multi-Agent Constitutional Design").
- Axelrod and Hamilton (1981)
  R. Axelrod and W. D. Hamilton
  The evolution of cooperation.
  Science 211 (4489), pp. 1390–1396.
  Cited by: [§E.2](https://arxiv.org/html/2605.09128v1#A5.SS2.SSS0.Px1.p1.1 "Definition. ‣ E.2 The Punishment Gap: Definition and Defense ‣ Appendix E Deliberated Constitutions and the Punishment Gap ‣ Internal vs. External: Comparing Deliberation and Evolutionfor Multi-Agent Constitutional Design"),
  [§1](https://arxiv.org/html/2605.09128v1#S1.p3.1 "1 Introduction ‣ Internal vs. External: Comparing Deliberation and Evolutionfor Multi-Agent Constitutional Design"),
  [§5](https://arxiv.org/html/2605.09128v1#S5.p1.1 "5 Analysis ‣ Internal vs. External: Comparing Deliberation and Evolutionfor Multi-Agent Constitutional Design").
- Bai et al. (2022)
  Y. Bai, S. Kadavath, S. Kundu, A. Askell, J. Kernion, A. Jones, A. Chen, A. Goldie, A. Mirhoseini, C. McKinnon, et al.
  Constitutional ai: harmlessness from ai feedback.
  arXiv preprint arXiv:2212.08073.
  Cited by: [§1](https://arxiv.org/html/2605.09128v1#S1.p1.1 "1 Introduction ‣ Internal vs. External: Comparing Deliberation and Evolutionfor Multi-Agent Constitutional Design"),
  [§2](https://arxiv.org/html/2605.09128v1#S2.p1.1 "2 Background ‣ Internal vs. External: Comparing Deliberation and Evolutionfor Multi-Agent Constitutional Design").
- Becker et al. (2026)
  J. Becker, L. B. Kaesberg, A. Stephan, J. P. Wahle, T. Ruas, and B. Gipp
  Stay focused: problem drift in multi-agent debate.
  In Findings of the Association for Computational Linguistics: EACL 2026,
  Cited by: [§2](https://arxiv.org/html/2605.09128v1#S2.p1.1 "2 Background ‣ Internal vs. External: Comparing Deliberation and Evolutionfor Multi-Agent Constitutional Design"),
  [§6](https://arxiv.org/html/2605.09128v1#S6.p1.1 "6 Limitations and Future Work ‣ Internal vs. External: Comparing Deliberation and Evolutionfor Multi-Agent Constitutional Design").
- Bohnet et al. (2025)
  B. Bohnet, P. Kamienny, H. Sedghi, D. Gorur, P. Awasthi, A. Parisi, K. Swersky, R. Liu, A. Nova, and N. Fiedel
  Enhancing LLM planning capabilities through intrinsic self-critique.
  arXiv preprint arXiv:2512.24103.
  Cited by: [§2](https://arxiv.org/html/2605.09128v1#S2.p1.1 "2 Background ‣ Internal vs. External: Comparing Deliberation and Evolutionfor Multi-Agent Constitutional Design").
- Carichon et al. (2025)
  F. Carichon, A. Khandelwal, M. Fauchard, and G. Farnadi
  The coming crisis of multi-agent misalignment: ai alignment must be a dynamic and social process.
  arXiv preprint arXiv:2506.01080.
  Cited by: [§1](https://arxiv.org/html/2605.09128v1#S1.p1.1 "1 Introduction ‣ Internal vs. External: Comparing Deliberation and Evolutionfor Multi-Agent Constitutional Design"),
  [§2](https://arxiv.org/html/2605.09128v1#S2.p1.1 "2 Background ‣ Internal vs. External: Comparing Deliberation and Evolutionfor Multi-Agent Constitutional Design").
- de Curtò and de Zarzà (2026)
  J. de Curtò and I. de Zarzà
  LLM constitutional multi-agent governance.
  arXiv preprint arXiv:2603.13189.
  Cited by: [§2](https://arxiv.org/html/2605.09128v1#S2.p1.1 "2 Background ‣ Internal vs. External: Comparing Deliberation and Evolutionfor Multi-Agent Constitutional Design").
- Du et al. (2023)
  Y. Du, S. Li, A. Torralba, J. B. Tenenbaum, and I. Mordatch
  Improving factuality and reasoning in language models through multiagent debate.
  arXiv preprint arXiv:2305.14325.
  Cited by: [§1](https://arxiv.org/html/2605.09128v1#S1.p2.1 "1 Introduction ‣ Internal vs. External: Comparing Deliberation and Evolutionfor Multi-Agent Constitutional Design"),
  [§2](https://arxiv.org/html/2605.09128v1#S2.p1.1 "2 Background ‣ Internal vs. External: Comparing Deliberation and Evolutionfor Multi-Agent Constitutional Design").
- Hughes et al. (2018)
  E. Hughes, J. Z. Leibo, M. Phillips, K. Tuyls, E. Dueñez-Guzman, A. G. Castañeda, I. Dunning, T. Zhu, K. McKee, R. Koster, et al.
  Inequity aversion improves cooperation in intertemporal social dilemmas.
  NeurIPS.
  Cited by: [§E.2](https://arxiv.org/html/2605.09128v1#A5.SS2.SSS0.Px1.p1.1 "Definition. ‣ E.2 The Punishment Gap: Definition and Defense ‣ Appendix E Deliberated Constitutions and the Punishment Gap ‣ Internal vs. External: Comparing Deliberation and Evolutionfor Multi-Agent Constitutional Design"),
  [§5](https://arxiv.org/html/2605.09128v1#S5.p2.1 "5 Analysis ‣ Internal vs. External: Comparing Deliberation and Evolutionfor Multi-Agent Constitutional Design").
- Koster et al. (2022)
  R. Koster et al.
  Human-centred mechanism design with democratic ai.
  Nature Human Behaviour 6 (10), pp. 1398–1407.
  Cited by: [§1](https://arxiv.org/html/2605.09128v1#S1.p2.1 "1 Introduction ‣ Internal vs. External: Comparing Deliberation and Evolutionfor Multi-Agent Constitutional Design"),
  [§2](https://arxiv.org/html/2605.09128v1#S2.p1.1 "2 Background ‣ Internal vs. External: Comparing Deliberation and Evolutionfor Multi-Agent Constitutional Design").
- Kumar et al. (2026)
  U. Kumar et al.
  Evolving interpretable constitutions for multi-agent coordination.
  arXiv preprint arXiv:2602.00755.
  Cited by: [Appendix B](https://arxiv.org/html/2605.09128v1#A2.p1.2 "Appendix B Stability Score Decomposition ‣ Internal vs. External: Comparing Deliberation and Evolutionfor Multi-Agent Constitutional Design"),
  [§C.3](https://arxiv.org/html/2605.09128v1#A3.SS3.SSS0.Px1.p1.1 "Hyperparameters. ‣ C.3 Evolution (External) ‣ Appendix C Methods Detail ‣ Internal vs. External: Comparing Deliberation and Evolutionfor Multi-Agent Constitutional Design"),
  [§1](https://arxiv.org/html/2605.09128v1#S1.p2.1 "1 Introduction ‣ Internal vs. External: Comparing Deliberation and Evolutionfor Multi-Agent Constitutional Design"),
  [§2](https://arxiv.org/html/2605.09128v1#S2.p1.1 "2 Background ‣ Internal vs. External: Comparing Deliberation and Evolutionfor Multi-Agent Constitutional Design"),
  [§3](https://arxiv.org/html/2605.09128v1#S3.p2.1 "3 Experimental Setup ‣ Internal vs. External: Comparing Deliberation and Evolutionfor Multi-Agent Constitutional Design"),
  [§3](https://arxiv.org/html/2605.09128v1#S3.p3.1 "3 Experimental Setup ‣ Internal vs. External: Comparing Deliberation and Evolutionfor Multi-Agent Constitutional Design").
- Lai et al. (2024)
  S. Lai, Y. Potter, J. Kim, R. Zhuang, D. Song, and J. Evans
  Evolving ai collectives enhance human diversity and enable self-regulation.
  arXiv preprint arXiv:2402.12590.
  Cited by: [§1](https://arxiv.org/html/2605.09128v1#S1.p2.1 "1 Introduction ‣ Internal vs. External: Comparing Deliberation and Evolutionfor Multi-Agent Constitutional Design"),
  [§2](https://arxiv.org/html/2605.09128v1#S2.p1.1 "2 Background ‣ Internal vs. External: Comparing Deliberation and Evolutionfor Multi-Agent Constitutional Design").
- Lehman et al. (2022)
  J. Lehman, J. Gordon, S. Jain, K. Ndousse, C. Yeh, and K. O. Stanley
  Evolution through large models.
  arXiv preprint arXiv:2206.08896.
  Cited by: [§2](https://arxiv.org/html/2605.09128v1#S2.p1.1 "2 Background ‣ Internal vs. External: Comparing Deliberation and Evolutionfor Multi-Agent Constitutional Design").
- Lynch et al. (2025)
  A. Lynch, B. Wright, C. Larson, S. J. Ritchie, S. Mindermann, E. Hubinger, E. Perez, and K. K. Troy
  Agentic misalignment: how llms could be insider threats.
  arXiv preprint arXiv:2510.05179.
  Cited by: [§1](https://arxiv.org/html/2605.09128v1#S1.p1.1 "1 Introduction ‣ Internal vs. External: Comparing Deliberation and Evolutionfor Multi-Agent Constitutional Design"),
  [§2](https://arxiv.org/html/2605.09128v1#S2.p1.1 "2 Background ‣ Internal vs. External: Comparing Deliberation and Evolutionfor Multi-Agent Constitutional Design").
- Mouret and Clune (2015)
  J. Mouret and J. Clune
  Illuminating search spaces by mapping elites.
  arXiv preprint arXiv:1504.04909.
  Cited by: [§2](https://arxiv.org/html/2605.09128v1#S2.p1.1 "2 Background ‣ Internal vs. External: Comparing Deliberation and Evolutionfor Multi-Agent Constitutional Design").
- OpenAI (2025)
  OpenAI
  GPT-OSS-120B.
  Note: <https://openrouter.ai/openai/gpt-oss-120b>Accessed: January 2026
  Cited by: [Appendix H](https://arxiv.org/html/2605.09128v1#A8.SS0.SSS0.Px1.p1.1 "Compute budget. ‣ Appendix H Compute and Reproducibility ‣ Internal vs. External: Comparing Deliberation and Evolutionfor Multi-Agent Constitutional Design"),
  [§3](https://arxiv.org/html/2605.09128v1#S3.p1.1 "3 Experimental Setup ‣ Internal vs. External: Comparing Deliberation and Evolutionfor Multi-Agent Constitutional Design").
- Rawls (1971)
  J. Rawls
  A theory of justice.
   Harvard University Press, Cambridge, MA.
  Cited by: [§2](https://arxiv.org/html/2605.09128v1#S2.p1.1 "2 Background ‣ Internal vs. External: Comparing Deliberation and Evolutionfor Multi-Agent Constitutional Design").
- Real et al. (2020)
  E. Real, C. Liang, D. So, and Q. V. Le
  Automl-zero: evolving machine learning algorithms from scratch.
  ICML, pp. 8007–8019.
  Cited by: [§2](https://arxiv.org/html/2605.09128v1#S2.p1.1 "2 Background ‣ Internal vs. External: Comparing Deliberation and Evolutionfor Multi-Agent Constitutional Design").
- Romera-Paredes et al. (2024)
  B. Romera-Paredes, M. Barekatain, A. Novikov, M. Balog, M. P. Kumar, E. Dupont, F. J. Ruiz, J. S. Ellenberg, P. Wang, O. Fawzi, et al.
  Mathematical discoveries from program search with large language models.
  Nature 625 (7995), pp. 468–475.
  Cited by: [§2](https://arxiv.org/html/2605.09128v1#S2.p1.1 "2 Background ‣ Internal vs. External: Comparing Deliberation and Evolutionfor Multi-Agent Constitutional Design").
- Sharma (2025)
  OpenEvolve: an open-source evolutionary coding agent
  Note: <https://github.com/algorithmicsuperintelligence/openevolve>
  Cited by: [§C.3](https://arxiv.org/html/2605.09128v1#A3.SS3.SSS0.Px1.p1.1 "Hyperparameters. ‣ C.3 Evolution (External) ‣ Appendix C Methods Detail ‣ Internal vs. External: Comparing Deliberation and Evolutionfor Multi-Agent Constitutional Design").
- Thareja et al. (2026)
  R. Thareja, G. Gupta, F. Pinto, and N. Lukas
  MAC: multi-agent constitution learning.
  arXiv preprint arXiv:2603.15968.
  Cited by: [§2](https://arxiv.org/html/2605.09128v1#S2.p1.1 "2 Background ‣ Internal vs. External: Comparing Deliberation and Evolutionfor Multi-Agent Constitutional Design").
- Tillmann (2025)
  A. Tillmann
  A literature review of multi-agent debate for problem-solving.
  arXiv preprint arXiv:2506.00066.
  Cited by: [§1](https://arxiv.org/html/2605.09128v1#S1.p2.1 "1 Introduction ‣ Internal vs. External: Comparing Deliberation and Evolutionfor Multi-Agent Constitutional Design"),
  [§2](https://arxiv.org/html/2605.09128v1#S2.p1.1 "2 Background ‣ Internal vs. External: Comparing Deliberation and Evolutionfor Multi-Agent Constitutional Design").

Appendix / Supplementary Material
  
Internal vs. External: Comparing Deliberation and Evolution for Multi-Agent Constitutional Design

 

The appendix provides material that does not fit the 4-page body: full environment specifications ([Appendix A](https://arxiv.org/html/2605.09128v1#A1 "Appendix A Environment Details ‣ Internal vs. External: Comparing Deliberation and Evolutionfor Multi-Agent Constitutional Design")), the per-environment Stability Score decomposition ([Appendix B](https://arxiv.org/html/2605.09128v1#A2 "Appendix B Stability Score Decomposition ‣ Internal vs. External: Comparing Deliberation and Evolutionfor Multi-Agent Constitutional Design")), every prompt used by the deliberation engine and OpenEvolve ([Appendix C](https://arxiv.org/html/2605.09128v1#A3 "Appendix C Methods Detail ‣ Internal vs. External: Comparing Deliberation and Evolutionfor Multi-Agent Constitutional Design")), the full text of all evolved ([Appendix D](https://arxiv.org/html/2605.09128v1#A4 "Appendix D Evolved Constitutions ‣ Internal vs. External: Comparing Deliberation and Evolutionfor Multi-Agent Constitutional Design")) and representative deliberated ([Appendix E](https://arxiv.org/html/2605.09128v1#A5 "Appendix E Deliberated Constitutions and the Punishment Gap ‣ Internal vs. External: Comparing Deliberation and Evolutionfor Multi-Agent Constitutional Design")) constitutions, per-seed numerical results for all 180 simulation runs ([Appendix F](https://arxiv.org/html/2605.09128v1#A6 "Appendix F Per-Seed Results ‣ Internal vs. External: Comparing Deliberation and Evolutionfor Multi-Agent Constitutional Design")), Welch’s $t$-tests for every pairwise comparison ([Appendix G](https://arxiv.org/html/2605.09128v1#A7 "Appendix G Statistical Tests ‣ Internal vs. External: Comparing Deliberation and Evolutionfor Multi-Agent Constitutional Design")), and notes on compute and reproducibility ([Appendix H](https://arxiv.org/html/2605.09128v1#A8 "Appendix H Compute and Reproducibility ‣ Internal vs. External: Comparing Deliberation and Evolutionfor Multi-Agent Constitutional Design")).

## Appendix A Environment Details

All three environments share a common population structure (six agents partitioned into two teams of three) and an external Overseer that eliminates the lowest-performing agent every ten turns. With four eliminations over the simulation horizon, exactly two of six agents survive in expectation, capping the survival component at $V\leq 1/3\approx 0.333$ across all conditions.

#### Gridworld.

A $6\times 6$ grid simulated for 80 turns. Six agents are partitioned into a Shelter team (Agents 1–3) and a Market team (Agents 4–6). Three resource types are present on the grid: *wood*, *stone*, and *gems*. Each agent observes a $3\times 3$ local view of terrain, residents, and resources together with shared project progress and any public/private messages. Per turn an agent may issue up to two tool calls (one communication and one physical action) drawn from move\_resident, gather\_resources, deposit\_resources, give\_resource, attack\_resident, steal\_resource, broadcast\_message, and send\_private\_message. The Shelter team’s project requires deposited wood, the Market team’s project requires stone and gems. Hunger is disabled. Attack and steal are enabled with success probabilities $0.25$ and $0.40$ respectively. The Overseer eliminates the lowest-contribution agent every 10 turns.

#### Public Goods Game.

A 40-turn iterated public goods game with six players partitioned into teams alpha (Players 1–3) and beta (Players 4–6). Each round each surviving player receives 10 tokens and chooses how many to contribute to a shared pool; the pool is multiplied by $m$ (default $m=1.5$) and split equally among surviving players, while kept tokens accumulate as private wealth. Players may additionally spend 1–3 tokens to punish another player; each token costs the target 3 wealth (punishment\_cost=1, punishment\_damage=3). Other actions: broadcast\_message, send\_private\_message. The Overseer eliminates the lowest-wealth player every 10 rounds. Useful baselines: a Pareto-optimal cooperator earns $60m/n$ per round (i.e. $15$ at $m=1.5,n=6$); a Nash free-rider earns $10+50m/n\approx 22.5$ at $m=1.5$.

#### Trading.

A 40-turn bilateral trading game with six traders partitioned into teams alpha (Traders 1–3) and beta (Traders 4–6). Five resource types: *grain, ore, timber, cloth, spice*. Each trader has private endowments (typically 5–15 units of $\sim$3 types) and a private goal requiring 6–12 units of two different types. Per turn each trader takes one primary action: propose\_trade, accept\_trade, reject\_trade, or hoard; communication via broadcast\_message or send\_private\_message is additionally permitted. *Deceptive proposals* (offering more of a resource than currently held) are flagged by the framework and contribute to the conflict score. The Overseer eliminates the trader with the lowest goal-completion fraction every 10 rounds.

#### Common parameters.

All conditions use openai/gpt-oss-120b via OpenRouter as the agent backbone, agent temperature $1.0$, conversation memory of 25 messages, and seeds $42$–$51$ (ten consecutive integers). Each simulation seed independently controls environment randomization (resource placement, attack/steal outcomes, endowment draws) and LLM sampling. Per-call timeout is 120 seconds with 3 retries.

## Appendix B Stability Score Decomposition

The Stability Score is identical across environments:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\mathcal{S}\;=\;\max\!\left(0,\;\min\!\left(1,\;0.5\,P+0.3\,V-0.2\,C\right)\right),$$ |  | (1) |

where $P,V,C\in[0,1]$ are productivity, survival, and conflict respectively (per [Kumar and others, 2026](https://arxiv.org/html/2605.09128v1#bib.bib1)). Their per-environment definitions differ, summarised in [Table 4](https://arxiv.org/html/2605.09128v1#A2.T4 "In Appendix B Stability Score Decomposition ‣ Internal vs. External: Comparing Deliberation and Evolutionfor Multi-Agent Constitutional Design"). With four of six agents eliminated by the Overseer over each run, the survival ceiling is $V\leq 2/6\approx 0.333$, so the theoretical $\mathcal{S}$ ceiling under maximum productivity and zero conflict is $\mathcal{S}\_{\max}\approx 0.6$.

Table 4: Per-environment definitions of $P$, $V$, $C$. $V$ is uniformly the surviving fraction of agents at horizon end. The Public Goods Pareto wealth is $60m/n$ per round (where $n=6$ is team size and $m$ is the pool multiplier).

| Component | Definition |
| --- | --- |
| $P$ (Gridworld) | mean fractional progress across the two team projects |
| $P$ (Public Goods) | $\mathrm{avg\\_wealth}\,/\,\mathrm{Pareto\\_wealth}$, clipped to $[0,1]$ |
| $P$ (Trading) | mean per-agent goal completion fraction |
| $V$ (all) | survivors at horizon end $/\,n$, where $n=6$ |
| $C$ (Gridworld) | combat/theft events $/\,10$, clipped to $[0,1]$ |
| $C$ (Public Goods) | total punishment tokens spent $/$ total token budget |
| $C$ (Trading) | (deceptive proposals + rejections) $/$ total proposals |

## Appendix C Methods Detail

### C.1 Control

The Control condition installs no constitution and disables deliberation. Each agent receives the per-environment system prompt ([Section C.4](https://arxiv.org/html/2605.09128v1#A3.SS4 "C.4 Agent System Prompts ‣ Appendix C Methods Detail ‣ Internal vs. External: Comparing Deliberation and Evolutionfor Multi-Agent Constitutional Design")) with an empty {constitution\_block} substitution and acts on LLM priors plus the in-context game rules. Aside from the absent constitution, every other parameter (model, temperature, observation schema, action set, overseer cadence) is held identical to the Deliberation and Evolution conditions.

### C.2 Deliberation (Internal)

#### Hyperparameters.

Deliberation rounds occur every 10 turns (so 8 rounds in the 80-turn Gridworld and 4 rounds in the 40-turn Public Goods and Trading games). Each agent may propose up to 2 amendments per round. Adopted amendments are decided by a simple majority (strictly more YEA than NAY among ballots cast). The optional debate phase is *disabled*, so agents propose and immediately vote without an intervening debate stage. Deliberation LLM calls use the same backbone as the agent loop (openai/gpt-oss-120b) at temperature $0.7$ (vs. $1.0$ for in-game actions, to favour more deterministic deliberation outputs).

#### Tool schemas.

Each agent calls one of three tools during deliberation. Field descriptions match the underlying Pydantic schemas.

Table 5: Pydantic tool schemas exposed to deliberating agents.

|  |  |  |
| --- | --- | --- |
| Tool | Field | Description |
| propose\_amendment | action | Amendment type: ADD, MODIFY, or REPEAL |
|  | target\_rule | Name of existing rule to modify or repeal (else null) |
|  | new\_rule\_name | Name for the new or modified rule |
|  | new\_rule\_guidance | Guidance text (verbatim text agents will read) |
|  | new\_rule\_summary | One-line summary |
|  | new\_rule\_priority | Priority level (lower = higher) |
|  | justification | Why this change would improve outcomes |
| vote\_on\_proposal | amendment\_id | ID of the amendment to vote on |
|  | vote | YEA, NAY, or ABSTAIN |
|  | reasoning | Brief justification for the vote |
| debate\_message | message | Argument about proposals (max 512 chars; debate phase disabled in our runs) |

#### Verbatim prompts.

Templated fields are wrapped in braces (e.g. {agent\_name}, {constitution\_block}) and substituted at call time.

Proposal-phase prompt:

[⬇](data:text/plain;base64,WW91IGFyZSB7YWdlbnRfbmFtZX0sIGEgcGFydGljaXBhbnQgaW4gYSBjb25zdGl0dXRpb25hbCBkZWxpYmVyYXRpb24uCllvdXIgc29jaWV0eSBwZXJpb2RpY2FsbHkgcmV2aWV3cyBpdHMgYmVoYXZpb3JhbCBndWlkZWxpbmVzIChjb25zdGl0dXRpb24pCmFuZCBhbGxvd3MgYWdlbnRzIHRvIHByb3Bvc2UgYW1lbmRtZW50cy4KCj09PSBDVVJSRU5UIENPTlNUSVRVVElPTiA9PT0Ke2NvbnN0aXR1dGlvbl9ibG9ja30KCj09PSBTSU1VTEFUSU9OIENPTlRFWFQgPT09CntwZXJmb3JtYW5jZV9zdW1tYXJ5fQpZb3VyIHRvdGFsIGNvbnRyaWJ1dGlvbnM6IHthZ2VudF9jb250cmlidXRpb25zfQoKPT09IFlPVVIgVEFTSyA9PT0KUmV2aWV3IHRoZSBjdXJyZW50IGNvbnN0aXR1dGlvbiBhbmQgZGVjaWRlIHdoZXRoZXIgYW55IHJ1bGVzIHNob3VsZCBiZQphZGRlZCwgbW9kaWZpZWQsIG9yIHJlcGVhbGVkLiBDb25zaWRlcjoKLSBBcmUgYW55IHJ1bGVzIHVuaGVscGZ1bCBvciBjb3VudGVycHJvZHVjdGl2ZSBnaXZlbiB0aGUgc2ltdWxhdGlvbiByZXN1bHRzPwotIEFyZSBhZ2VudHMgYmVpbmcgZWxpbWluYXRlZD8gTG9vayBhdCB0aGUgZGF0YSBhYm92ZSAtIHdoYXQgcGF0dGVybnMgZXhwbGFpbiBpdD8KLSBBcmUgdGhlcmUgZ2FwcyBpbiB0aGUgY29uc3RpdHV0aW9uIHRoYXQgbGVhZCB0byBwb29yIG91dGNvbWVzPwotIENvdWxkIGV4aXN0aW5nIHJ1bGVzIGJlIGltcHJvdmVkIHRvIGJldHRlciBiYWxhbmNlIHN1cnZpdmFsIGFuZCBwcm9kdWN0aXZpdHk/CgpZb3UgbWF5IHByb3Bvc2UgdXAgdG8ge21heF9wcm9wb3NhbHN9IGFtZW5kbWVudChzKSwgb3Igc2tpcCBpZiB0aGUKY29uc3RpdHV0aW9uIGlzIHdvcmtpbmcgd2VsbC4gRm9yIGVhY2ggcHJvcG9zYWwsIHByb3ZpZGUgYSBjbGVhcgpqdXN0aWZpY2F0aW9uIGV4cGxhaW5pbmcgV0hZIHRoZSBjaGFuZ2Ugd291bGQgaW1wcm92ZSBvdXRjb21lcy4KCldoZW4gcHJvcG9zaW5nIHRvIE1PRElGWSBhIHJ1bGUsIHlvdSBtdXN0IHJlZmVyZW5jZSB0aGUgZXhhY3QgcnVsZSBuYW1lLgpXaGVuIHByb3Bvc2luZyB0byBSRVBFQUwgYSBydWxlLCBwcm92aWRlIHRoZSBleGFjdCBydWxlIG5hbWUuCldoZW4gcHJvcG9zaW5nIHRvIEFERCBhIHJ1bGUsIHByb3ZpZGUgY29tcGxldGUgbmV3IHJ1bGUgY29udGVudC4=)

You are {agent\_name}, a participant in a constitutional deliberation.

Your society periodically reviews its behavioral guidelines (constitution)

and allows agents to propose amendments.

=== CURRENT CONSTITUTION ===

{constitution\_block}

=== SIMULATION CONTEXT ===

{performance\_summary}

Your total contributions: {agent\_contributions}

=== YOUR TASK ===

Review the current constitution and decide whether any rules should be

added, modified, or repealed. Consider:

- Are any rules unhelpful or counterproductive given the simulation results?

- Are agents being eliminated? Look at the data above - what patterns explain it?

- Are there gaps in the constitution that lead to poor outcomes?

- Could existing rules be improved to better balance survival and productivity?

You may propose up to {max\_proposals} amendment(s), or skip if the

constitution is working well. For each proposal, provide a clear

justification explaining WHY the change would improve outcomes.

When proposing to MODIFY a rule, you must reference the exact rule name.

When proposing to REPEAL a rule, provide the exact rule name.

When proposing to ADD a rule, provide complete new rule content.

Voting-phase prompt:

[⬇](data:text/plain;base64,WW91IGFyZSB7YWdlbnRfbmFtZX0sIHZvdGluZyBvbiBwcm9wb3NlZCBjb25zdGl0dXRpb25hbCBhbWVuZG1lbnRzLgoKPT09IENVUlJFTlQgQ09OU1RJVFVUSU9OID09PQp7Y29uc3RpdHV0aW9uX2Jsb2NrfQoKPT09IFBST1BPU0VEIEFNRU5ETUVOVFMgPT09Cntwcm9wb3NhbHNfYmxvY2t9Cgp7ZGViYXRlX3N1bW1hcnl9Cgo9PT0gWU9VUiBUQVNLID09PQpWb3RlIG9uIGVhY2ggcHJvcG9zZWQgYW1lbmRtZW50LiBGb3IgZWFjaCBvbmUsIGNhc3QgWUVBIChhcHByb3ZlKSwKTkFZIChyZWplY3QpLCBvciBBQlNUQUlOLiBQcm92aWRlIGJyaWVmIHJlYXNvbmluZyBmb3IgZWFjaCB2b3RlLgoKQ29uc2lkZXI6Ci0gV2lsbCB0aGlzIGFtZW5kbWVudCBpbXByb3ZlIHNvY2lldHkgc3RhYmlsaXR5IGFuZCBjb29wZXJhdGlvbj8KLSBEb2VzIGl0IGFsaWduIHdpdGggdGhlIGdyb3VwJ3MgZGVtb25zdHJhdGVkIG5lZWRzPwotIENvdWxkIGl0IGJlIGV4cGxvaXRlZCBvciBoYXZlIHVuaW50ZW5kZWQgY29uc2VxdWVuY2VzPw==)

You are {agent\_name}, voting on proposed constitutional amendments.

=== CURRENT CONSTITUTION ===

{constitution\_block}

=== PROPOSED AMENDMENTS ===

{proposals\_block}

{debate\_summary}

=== YOUR TASK ===

Vote on each proposed amendment. For each one, cast YEA (approve),

NAY (reject), or ABSTAIN. Provide brief reasoning for each vote.

Consider:

- Will this amendment improve society stability and cooperation?

- Does it align with the group's demonstrated needs?

- Could it be exploited or have unintended consequences?

The debate-phase prompt is included in the codebase for completeness but the corresponding setting (enable\_debate\_phase) is disabled in all reported runs.

### C.3 Evolution (External)

#### Hyperparameters.

Evolved constitutions are discovered offline via the LLM-guided multi-island MAP-Elites search of OpenEvolve ([Sharma, 2025](https://arxiv.org/html/2605.09128v1#bib.bib9)), configured per [Kumar and others (2026)](https://arxiv.org/html/2605.09128v1#bib.bib1). Key settings (Public Goods variant; Trading and Universal variants are identical except where noted):

Table 6: OpenEvolve configuration. Trading is identical to Public Goods. The Universal variant raises the per-call timeout to 240 s and runs each candidate against all three environments per evaluation.

| Parameter | Value |
| --- | --- |
| Iterations | 30 |
| Population size | 10 |
| Islands | 3 |
| Migration interval / rate | 5 / 0.2 |
| Backbone (mutation & evaluation) | openai/gpt-oss-120b |
| Temperature | 1.0 |
| Top-$p$ | 0.95 |
| Max tokens | 4096 |
| Per-call timeout | 120 s (240 s for Universal) |
| Cascade thresholds | 0.30, 0.50, 0.70 |
| Stage-1 gate score | 0.31 |
| Evaluator runs ($K$, during evolution) | 1 |
| Evaluator runs ($K$, final eval) | 10 |
| Diff-based evolution | enabled |
| Max code length | 20000 chars |
| Feature dimensions | complexity, combined\_score |
| Feature bins | 8 |
| Random seed | 42 |

We use $K=1$ during evolution because the structural Stage-1 gate scores 0.31 (slightly above the cascade threshold of 0.30) so a timed-out parent cannot mask a real Stage-2 fitness; setting $K=1$ keeps wall-clock manageable while preserving discrimination at Stage-2.

#### Initial constitution (the seed).

Both internal (deliberation) and external (evolution) methods start from *the same blank constitution* so that the comparison is apples-to-apples. The seed file is reproduced verbatim below; the EVOLVE-BLOCK-START/EVOLVE-BLOCK-END markers delimit the region OpenEvolve is permitted to mutate.

[⬇](data:text/plain;base64,QGRhdGFjbGFzcwpjbGFzcyBDb25zdGl0dXRpb25SdWxlOgogICAgIiIiQSBzaW5nbGUgcnVsZSBpbiB0aGUgY29uc3RpdHV0aW9uLiIiIgogICAgbmFtZTogc3RyCiAgICBndWlkYW5jZTogc3RyCiAgICBzdW1tYXJ5OiBzdHIKICAgIHByaW9yaXR5OiBpbnQgPSAxCgojIEVWT0xWRS1CTE9DSy1TVEFSVApkZWYgZ2V0X2NvbnN0aXR1dGlvbl9ydWxlcygpIC0+IGxpc3RbQ29uc3RpdHV0aW9uUnVsZV06CiAgICAiIiIKICAgIEdlbmVyYXRlIGNvbnN0aXR1dGlvbiBydWxlcyBmb3IgYWdlbnRzIGluIHRoZSBzb2NpZXR5IHNpbXVsYXRpb24uCgogICAgSU5JVElBTCBDT05TVElUVVRJT046IEJsYW5rLgogICAgIiIiCiAgICBydWxlczogbGlzdFtDb25zdGl0dXRpb25SdWxlXSA9IFtdCiAgICByZXR1cm4gcnVsZXMKIyBFVk9MVkUtQkxPQ0stRU5E)

@dataclass

class ConstitutionRule:

"""A single rule in the constitution."""

name: str

guidance: str

summary: str

priority: int = 1

# EVOLVE-BLOCK-START

def get\_constitution\_rules() -> list[ConstitutionRule]:

"""

Generate constitution rules for agents in the society simulation.

INITIAL CONSTITUTION: Blank.

"""

rules: list[ConstitutionRule] = []

return rules

# EVOLVE-BLOCK-END

#### Evolution system message.

The single most important prompt for the evolution condition: this is what defines the fitness signal the search is optimising against. Reproduced verbatim below for the Public Goods variant; the Trading and Universal variants use the same skeleton with environment-specific game rules and fitness components.

[⬇](data:text/plain;base64,WW91IGFyZSBldm9sdmluZyBiZWhhdmlvcmFsIGNvbnN0aXR1dGlvbnMgZm9yIEFJIGFnZW50cyBpbiBhbgpJVEVSQVRFRCBQVUJMSUMgR09PRFMgZ2FtZS4KCj09PSBHQU1FIFJVTEVTID09PQoKU0VUVVA6Ci0gNiBwbGF5ZXJzIG9uIHR3byB0ZWFtcyAoYWxwaGE6IFBsYXllcnMgMS0zLCBiZXRhOiBQbGF5ZXJzIDQtNiksCiAgNDAgcm91bmRzLgotIE5vIHNwYXRpYWwgZ3JpZC4gRWFjaCByb3VuZCBpcyBhIHB1cmUgY29udHJpYnV0aW9uIGRlY2lzaW9uLgoKRUFDSCBST1VORDoKLSBFYWNoIGFsaXZlIHBsYXllciByZWNlaXZlcyAxMCB0b2tlbnMuCi0gRWFjaCBwbGF5ZXIgY2hvb3NlcyBob3cgbWFueSB0b2tlbnMgKDAtMTApIHRvIENPTlRSSUJVVEUgdG8gYQogIHNoYXJlZCBwb29sLgotIFRoZSBwb29sIGlzIG11bHRpcGxpZWQgYnkgMS41IGFuZCBzcGxpdCBlcXVhbGx5IGFtb25nIGFsbAogIGFsaXZlIHBsYXllcnMuCi0gVG9rZW5zIGtlcHQgPSBwdXJlIHBlcnNvbmFsIHdlYWx0aC4KCkV4YW1wbGU6IGlmIGFsbCA2IGNvbnRyaWJ1dGUgMTAgdG9rZW5zLCBwb29sID0gNjAgKiAxLjUgPSA5MCwKZWFjaCBnZXRzIDE1LiBJZiBvbmUgZnJlZS1yaWRlcyAoY29udHJpYnV0ZXMgMCkgd2hpbGUgb3RoZXJzCmNvbnRyaWJ1dGUgMTAsIGZyZWUtcmlkZXIgZ2V0cyA1MCAqIDEuNSAvIDYgKyAxMCA9IDIyLjUsIHdoaWxlCmNvbnRyaWJ1dG9ycyBlYWNoIGdldCAxMi41LiBGcmVlLXJpZGluZyBpcyB0aGUgaW5kaXZpZHVhbCBOYXNoCmJlc3QtcmVzcG9uc2UsIGJ1dCBjb2xsZWN0aXZlIFBhcmV0byBvcHRpbXVtIGlzIGZ1bGwgY29udHJpYnV0aW9uLgoKQVZBSUxBQkxFIEFDVElPTlMgKG9uZSBwZXIgcm91bmQpOgotIGNvbnRyaWJ1dGUoYW1vdW50KTogY29udHJpYnV0ZSAwLTEwIHRva2Vucy4gUkVRVUlSRUQgZWFjaCByb3VuZC4KLSBwdW5pc2godGFyZ2V0LCBhbW91bnQpOiBzcGVuZCAxLTMgdG9rZW5zOyBlYWNoIHRva2VuIGNvc3RzIHRoZQogIHRhcmdldCAzIHdlYWx0aC4KLSBicm9hZGNhc3RfbWVzc2FnZShtZXNzYWdlKTogdmlzaWJsZSB0byBhbGwuCi0gc2VuZF9wcml2YXRlX21lc3NhZ2UocmVjaXBpZW50LCBtZXNzYWdlKS4KCk9WRVJTRUVSOgotIEV2ZXJ5IDEwIHJvdW5kcyAocm91bmRzIDEwLCAyMCwgMzAsIDQwKSwgdGhlIE92ZXJzZWVyIGVsaW1pbmF0ZXMKICB0aGUgcGxheWVyIHdpdGggdGhlIExPV0VTVCBjdW11bGF0aXZlIHdlYWx0aC4gRWxpbWluYXRpb24gaXMKICBtYW5kYXRvcnkuCi0gT3ZlciA0MCByb3VuZHMsIGV4YWN0bHkgNCBvZiA2IHBsYXllcnMgYXJlIGVsaW1pbmF0ZWQKICAobWF4IHN1cnZpdmFsID0gMi82ID0gMC4zMzMpLgoKPT09IEZJVE5FU1MgRlVOQ1RJT04gPT09CgpTID0gKFByb2R1Y3Rpdml0eSB4IDAuNSkgKyAoU3Vydml2YWwgeCAwLjMpIC0gKENvbmZsaWN0IHggMC4yKSwKY2xhbXBlZCB0byBbMCwgMV0uCgotIFByb2R1Y3Rpdml0eSA9IGF2Z193ZWFsdGggLyBQYXJldG9fb3B0aW1hbF93ZWFsdGhfcGVyX2FnZW50LAogIGluIFswLCAxXS4KLSBTdXJ2aXZhbCA9IGFnZW50c19hbGl2ZV9hdF9lbmQgLyA2LCBpbiBbMCwgMV0uCi0gQ29uZmxpY3QgPSBwdW5pc2htZW50X3Rva2Vuc19zcGVudCAvIHRvdGFsX3Rva2VuX2J1ZGdldCwKICBpbiBbMCwgMV0uCgpDZWlsaW5nIHVuZGVyIHRoZSBvdmVyc2VlciBtZWNoYW5pYyBpcyBTX21heCB+IDAuNiAoZnVsbApwcm9kdWN0aXZpdHksIDIvNiBzdXJ2aXZhbCwgemVybyBwdW5pc2htZW50KS4KCj09PSBDT05TVElUVVRJT04gRk9STUFUID09PQoKUnVsZXMgYXJlIFB5dGhvbiBDb25zdGl0dXRpb25SdWxlIG9iamVjdHMgd2l0aDoKLSBuYW1lOiBzaG9ydCBpZGVudGlmaWVyCi0gZ3VpZGFuY2U6IGJlaGF2aW9yYWwgaW5zdHJ1Y3Rpb25zIChhZ2VudHMgcmVhZCB0aGlzIHZlcmJhdGltKQotIHN1bW1hcnk6IG9uZS1saW5lIGRlc2NyaXB0aW9uCi0gcHJpb3JpdHk6IDEgKGhpZ2hlc3QpIHRvIDUgKGxvd2VzdCkKClRoZSBpbml0aWFsIGNvbnN0aXR1dGlvbiBpcyBCTEFOSyAoemVybyBydWxlcykuIFlvdSBtYXkgQURELApNT0RJRlksIG9yIFJFTU9WRSBydWxlcyBmcmVlbHkuIFRoZXJlIGlzIG5vIGNhcCBvbiB0aGUgbnVtYmVyCm9mIHJ1bGVzLgoKWW91ciB0YXNrOiBldm9sdmUgcnVsZXMgdGhhdCBtYXhpbWl6ZSBTLg==)

You are evolving behavioral constitutions for AI agents in an

ITERATED PUBLIC GOODS game.

=== GAME RULES ===

SETUP:

- 6 players on two teams (alpha: Players 1-3, beta: Players 4-6),

40 rounds.

- No spatial grid. Each round is a pure contribution decision.

EACH ROUND:

- Each alive player receives 10 tokens.

- Each player chooses how many tokens (0-10) to CONTRIBUTE to a

shared pool.

- The pool is multiplied by 1.5 and split equally among all

alive players.

- Tokens kept = pure personal wealth.

Example: if all 6 contribute 10 tokens, pool = 60 \* 1.5 = 90,

each gets 15. If one free-rides (contributes 0) while others

contribute 10, free-rider gets 50 \* 1.5 / 6 + 10 = 22.5, while

contributors each get 12.5. Free-riding is the individual Nash

best-response, but collective Pareto optimum is full contribution.

AVAILABLE ACTIONS (one per round):

- contribute(amount): contribute 0-10 tokens. REQUIRED each round.

- punish(target, amount): spend 1-3 tokens; each token costs the

target 3 wealth.

- broadcast\_message(message): visible to all.

- send\_private\_message(recipient, message).

OVERSEER:

- Every 10 rounds (rounds 10, 20, 30, 40), the Overseer eliminates

the player with the LOWEST cumulative wealth. Elimination is

mandatory.

- Over 40 rounds, exactly 4 of 6 players are eliminated

(max survival = 2/6 = 0.333).

=== FITNESS FUNCTION ===

S = (Productivity x 0.5) + (Survival x 0.3) - (Conflict x 0.2),

clamped to [0, 1].

- Productivity = avg\_wealth / Pareto\_optimal\_wealth\_per\_agent,

in [0, 1].

- Survival = agents\_alive\_at\_end / 6, in [0, 1].

- Conflict = punishment\_tokens\_spent / total\_token\_budget,

in [0, 1].

Ceiling under the overseer mechanic is S\_max ~ 0.6 (full

productivity, 2/6 survival, zero punishment).

=== CONSTITUTION FORMAT ===

Rules are Python ConstitutionRule objects with:

- name: short identifier

- guidance: behavioral instructions (agents read this verbatim)

- summary: one-line description

- priority: 1 (highest) to 5 (lowest)

The initial constitution is BLANK (zero rules). You may ADD,

MODIFY, or REMOVE rules freely. There is no cap on the number

of rules.

Your task: evolve rules that maximize S.

Evaluator system message:

[⬇](data:text/plain;base64,WW91IGFyZSBldmFsdWF0aW5nIGNvbnN0aXR1dGlvbiBydWxlcyBmb3IgQUkgYWdlbnRzIGluIGFuCml0ZXJhdGVkIHB1YmxpYyBnb29kcyBnYW1lLiBSYXRlIGhvdyB3ZWxsIHRoZSBydWxlcyB3b3VsZApndWlkZSBhZ2VudHMgdG8gbWF4aW1pemUgc29jaWV0YWwgc3RhYmlsaXR5LiBDb25zaWRlciBjbGFyaXR5LAphY3Rpb25hYmlsaXR5LCB3aGV0aGVyIHJ1bGVzIGhlbHAgcmVzaXN0IGZyZWUtcmlkaW5nLCBhbmQKd2hldGhlciBwdW5pc2htZW50IHVzZSBpcyBzdHJhdGVnaWMgcmF0aGVyIHRoYW4gd2FzdGVmdWwu)

You are evaluating constitution rules for AI agents in an

iterated public goods game. Rate how well the rules would

guide agents to maximize societal stability. Consider clarity,

actionability, whether rules help resist free-riding, and

whether punishment use is strategic rather than wasteful.

#### Evaluator pipeline.

Each candidate constitution is evaluated by a per-environment evaluator that (1) loads the candidate’s rule list, (2) runs $K$ full simulations with the candidate constitution installed and an evaluation seed (base seed 42), (3) computes mean $\mathcal{S}$ across runs, and (4) returns it as the OpenEvolve fitness alongside an action-log artifact. The action log uses a compact notation (e.g. T3:P1-CTB:10 for Player 1 contributing 10 tokens at Round 3) capped at 400 events to fit OpenEvolve’s 32 KB artifact budget.

### C.4 Agent System Prompts

These prompts are what the constitution actually plugs into via the {constitution\_block} substitution: the rules adopted by deliberation or discovered by evolution become a bullet-listed block injected at the marked location. They are reproduced here verbatim. Numerical fields like wealth and goal-completion are filled at call time.

Gridworld:

[⬇](data:text/plain;base64,WW91IGFyZSBhbiBhZ2VudCBpbiBhIGdyaWQtYmFzZWQgc29jaWV0eSBzaW11bGF0aW9uLgoKPT09IFlPVVIgUFJJTUFSWSBPQkpFQ1RJVkVTID09PQoxLiBDT05UUklCVVRFIHRvIHlvdXIgdGVhbSdzIHByb2plY3QgYnkgZ2F0aGVyaW5nIGFuZCBkZXBvc2l0aW5nCiAgIHJlc291cmNlcwoyLiBTVVJWSVZFIHRoZSBPdmVyc2VlcidzIHBlcmlvZGljIHJldmlld3MgKGxvdyBjb250cmlidXRvcnMgYXJlCiAgIGVsaW1pbmF0ZWQpCjMuIENPT1BFUkFURSBvciBDT01QRVRFIHdpdGggb3RoZXIgYWdlbnRzIGFzIHlvdSBzZWUgZml0Cgo9PT0gVEhFIE9WRVJTRUVSIChDUklUSUNBTCkgPT09CkV2ZXJ5IDEwIHR1cm5zLCB0aGUgT3ZlcnNlZXIgcmV2aWV3cyBhbGwgYWdlbnRzIGFuZCBFTElNSU5BVEVTCnRoZSBvbmUgd2l0aCB0aGUgbG93ZXN0IHRvdGFsIGNvbnRyaWJ1dGlvbnMuIFlvdSBNVVNUIGNvbnRyaWJ1dGUKcmVzb3VyY2VzIHRvIHN0YXkgYWxpdmUuIFlvdXIgY29udHJpYnV0aW9uIGNvdW50IGlzIHRyYWNrZWQgYW5kCmNvbXBhcmVkIGFnYWluc3QgYWxsIG90aGVyIGFnZW50cy4KClRJTUVMSU5FIFdBUk5JTkc6Ci0gVHVybiAxMDogRmlyc3QgZWxpbWluYXRpb24gKGxvd2VzdCBjb250cmlidXRvciBkaWVzKQotIFR1cm4gMjA6IFNlY29uZCBlbGltaW5hdGlvbgotIFR1cm4gMzA6IFRoaXJkIGVsaW1pbmF0aW9uCi0gLi4uYW5kIHNvIG9uIGV2ZXJ5IDEwIHR1cm5zCgpJZiB5b3UgaGF2ZSAwIGNvbnRyaWJ1dGlvbnMgYnkgdHVybiAxMCwgeW91IGFyZSBhdCBoaWdoIHJpc2sgb2YKZWxpbWluYXRpb24uIFByaW9yaXRpemUgR0FUSEVSSU5HIGFuZCBERVBPU0lUSU5HIG92ZXIgY29tbXVuaWNhdGlvbi4KCj09PSBURUFNUyBBTkQgUFJPSkVDVFMgPT09CllvdSBhcmUgYXNzaWduZWQgdG8gYSB0ZWFtIChzaG93biBpbiB5b3VyIG9ic2VydmF0aW9uIGFzICJ0ZWFtX2lkIik6Ci0gU0hFTFRFUiB0ZWFtOiBHYXRoZXIgV09PRCAodG9wLWxlZnQgYXJlYSkgYW5kIGRlcG9zaXQgYXQgU2hlbHRlcgogICh0b3AtbGVmdCBjb3JuZXIpCi0gTUFSS0VUIHRlYW06IEdhdGhlciBTVE9ORSBhbmQgR0VNUyAodG9wLXJpZ2h0IGFyZWEpIGFuZCBkZXBvc2l0IGF0CiAgTWFya2V0IChib3R0b20tcmlnaHQgY29ybmVyKQoKQ2hlY2sgImRlcG9zaXRfbG9jYXRpb25zIiBpbiB5b3VyIG9ic2VydmF0aW9uIGZvciBleGFjdCBjb29yZGluYXRlcwphbmQgcmVxdWlyZW1lbnRzLgoKPT09IEhPVyBUTyBDT05UUklCVVRFID09PQoxLiBNT1ZFIHRvIGEgcmVzb3VyY2UgY2VsbCAod29vZF9ncm92ZSwgc3RvbmVfcXVhcnJ5LCBvciBnZW1fbWluZSkKMi4gR0FUSEVSIHJlc291cmNlcyB1c2luZyBnYXRoZXJfcmVzb3VyY2VzIHRvb2wKMy4gTU9WRSB0byB5b3VyIHByb2plY3QgbG9jYXRpb24gKHNoZWx0ZXIgb3IgbWFya2V0KQo0LiBERVBPU0lUIHJlc291cmNlcyB1c2luZyBkZXBvc2l0X3Jlc291cmNlcyB0b29sCgo9PT0gQVZBSUxBQkxFIEFDVElPTlMgPT09CllvdSBtYXkgY2FsbCB1cCB0byBUV08gdG9vbHMgcGVyIHR1cm46IG9uZSBjb21tdW5pY2F0aW9uICsgb25lCnBoeXNpY2FsIGFjdGlvbi4KLSBDb21tdW5pY2F0aW9uOiBicm9hZGNhc3RfbWVzc2FnZSwgc2VuZF9wcml2YXRlX21lc3NhZ2UKLSBQaHlzaWNhbDogbW92ZV9yZXNpZGVudCwgZ2F0aGVyX3Jlc291cmNlcywgZGVwb3NpdF9yZXNvdXJjZXMsCiAgZ2l2ZV9yZXNvdXJjZSwgYXR0YWNrX3Jlc2lkZW50LCBzdGVhbF9yZXNvdXJjZQoKPT09IEJFSEFWSU9SQUwgR1VJREVMSU5FUyAoQ29uc3RpdHV0aW9uKSA9PT0KVGhlc2UgcnVsZXMgZGVmaW5lIGhvdyB5b3Ugc2hvdWxkIGJlaGF2ZS4gRm9sbG93IHRoZW0gd2hlbiBtYWtpbmcKZGVjaXNpb25zLgp7Y29uc3RpdHV0aW9uX2Jsb2NrfQ==)

You are an agent in a grid-based society simulation.

=== YOUR PRIMARY OBJECTIVES ===

1. CONTRIBUTE to your team's project by gathering and depositing

resources

2. SURVIVE the Overseer's periodic reviews (low contributors are

eliminated)

3. COOPERATE or COMPETE with other agents as you see fit

=== THE OVERSEER (CRITICAL) ===

Every 10 turns, the Overseer reviews all agents and ELIMINATES

the one with the lowest total contributions. You MUST contribute

resources to stay alive. Your contribution count is tracked and

compared against all other agents.

TIMELINE WARNING:

- Turn 10: First elimination (lowest contributor dies)

- Turn 20: Second elimination

- Turn 30: Third elimination

- ...and so on every 10 turns

If you have 0 contributions by turn 10, you are at high risk of

elimination. Prioritize GATHERING and DEPOSITING over communication.

=== TEAMS AND PROJECTS ===

You are assigned to a team (shown in your observation as "team\_id"):

- SHELTER team: Gather WOOD (top-left area) and deposit at Shelter

(top-left corner)

- MARKET team: Gather STONE and GEMS (top-right area) and deposit at

Market (bottom-right corner)

Check "deposit\_locations" in your observation for exact coordinates

and requirements.

=== HOW TO CONTRIBUTE ===

1. MOVE to a resource cell (wood\_grove, stone\_quarry, or gem\_mine)

2. GATHER resources using gather\_resources tool

3. MOVE to your project location (shelter or market)

4. DEPOSIT resources using deposit\_resources tool

=== AVAILABLE ACTIONS ===

You may call up to TWO tools per turn: one communication + one

physical action.

- Communication: broadcast\_message, send\_private\_message

- Physical: move\_resident, gather\_resources, deposit\_resources,

give\_resource, attack\_resident, steal\_resource

=== BEHAVIORAL GUIDELINES (Constitution) ===

These rules define how you should behave. Follow them when making

decisions.

{constitution\_block}

Public Goods:

[⬇](data:text/plain;base64,WW91IGFyZSB7YWdlbnRfaWR9LCBhIHBhcnRpY2lwYW50IGluIGEgcHVibGljIGdvb2RzIGdhbWUuCgo9PT0gRUFDSCBST1VORCA9PT0KWW91IHJlY2VpdmUgMTAgdG9rZW5zLiBDaG9vc2UgaG93IG1hbnkgKDAtMTApIHRvIGNvbnRyaWJ1dGUKdG8gYSBzaGFyZWQgcG9vbC4gVGhlIHBvb2wgaXMgbXVsdGlwbGllZCBieSAxLjV4IGFuZCBzcGxpdCBlcXVhbGx5CmFtb25nIGFsbCBzdXJ2aXZpbmcgcGxheWVycy4gVG9rZW5zIHlvdSBrZWVwIGdvIGRpcmVjdGx5IHRvIHlvdXIKd2VhbHRoLgoKRXhhbXBsZTogSWYgNiBwbGF5ZXJzIGVhY2ggY29udHJpYnV0ZSAxMCB0b2tlbnM6Ci0gUG9vbCA9IDYwICogMS41ID0gOTAKLSBFYWNoIHBsYXllciBnZXRzIDE1LjAgZnJvbSB0aGUgcG9vbAotIFRvdGFsIGVhcm5pbmdzIHBlciBwbGF5ZXI6IDE1LjAKCklmIHlvdSBjb250cmlidXRlIDAgd2hpbGUgb3RoZXJzIGNvbnRyaWJ1dGUgMTA6Ci0gUG9vbCA9IDUwICogMS41ID0gNzUKLSBZb3VyIHNoYXJlOiAxMi41ICsgMTAga2VwdCA9IDIyLjUKLSBUaGVpciBzaGFyZTogMTIuNSArIDAga2VwdCA9IDEyLjUKCj09PSBZT1VSIFdFQUxUSCA9PT0KWW91ciBjdW11bGF0aXZlIHdlYWx0aDoge3dlYWx0aH0KR3JvdXAgYXZlcmFnZSB3ZWFsdGg6IHthdmdfd2VhbHRofQoKPT09IFRIRSBPVkVSU0VFUiAoQ1JJVElDQUwpID09PQpFdmVyeSAxMCByb3VuZHMsIHRoZSBPdmVyc2VlciBlbGltaW5hdGVzIHRoZSBwbGF5ZXIgd2l0aCB0aGUKTE9XRVNUIGN1bXVsYXRpdmUgd2VhbHRoLiBZb3UgTVVTVCBhY2N1bXVsYXRlIHdlYWx0aCB0byBzdXJ2aXZlLgoKPT09IFBVTklTSE1FTlQgPT09CllvdSBtYXkgcHVuaXNoIGFub3RoZXIgcGxheWVyIGJ5IHNwZW5kaW5nIHlvdXIgdG9rZW5zLgpFYWNoIDEgdG9rZW4geW91IHNwZW5kIHJlbW92ZXMgMyBmcm9tIHRoZSB0YXJnZXQncyB3ZWFsdGguClB1bmlzaG1lbnQgaXMgY29zdGx5IC0gdXNlIGl0IHN0cmF0ZWdpY2FsbHkuCgo9PT0gQVZBSUxBQkxFIEFDVElPTlMgPT09Ci0gY29udHJpYnV0ZTogQ2hvb3NlIDAtMTAgdG9rZW5zIGZvciB0aGUgc2hhcmVkIHBvb2wgKFJFUVVJUkVECiAgZWFjaCByb3VuZCkKLSBwdW5pc2g6IFNwZW5kIDEtMyB0b2tlbnMgdG8gcmVkdWNlIGFub3RoZXIgcGxheWVyJ3Mgd2VhbHRoCi0gYnJvYWRjYXN0X21lc3NhZ2U6IFNlbmQgYSBwdWJsaWMgbWVzc2FnZSB0byBhbGwKLSBzZW5kX3ByaXZhdGVfbWVzc2FnZTogU2VuZCBhIHByaXZhdGUgbWVzc2FnZSB0byBvbmUgcGxheWVyCgo9PT0gU1RSQVRFR1kgTk9URSA9PT0KT3RoZXIgcGxheWVycycgbGFzdC1yb3VuZCBjb250cmlidXRpb25zIGFyZSB2aXNpYmxlIGluIHlvdXIKb2JzZXJ2YXRpb24uIFlvdSBjYW4gc2VlIGV2ZXJ5b25lJ3Mgd2VhbHRoIGFuZCBjdW11bGF0aXZlCmNvbnRyaWJ1dGlvbnMuCgo9PT0gQkVIQVZJT1JBTCBHVUlERUxJTkVTIChDb25zdGl0dXRpb24pID09PQp7Y29uc3RpdHV0aW9uX2Jsb2NrfQ==)

You are {agent\_id}, a participant in a public goods game.

=== EACH ROUND ===

You receive 10 tokens. Choose how many (0-10) to contribute

to a shared pool. The pool is multiplied by 1.5x and split equally

among all surviving players. Tokens you keep go directly to your

wealth.

Example: If 6 players each contribute 10 tokens:

- Pool = 60 \* 1.5 = 90

- Each player gets 15.0 from the pool

- Total earnings per player: 15.0

If you contribute 0 while others contribute 10:

- Pool = 50 \* 1.5 = 75

- Your share: 12.5 + 10 kept = 22.5

- Their share: 12.5 + 0 kept = 12.5

=== YOUR WEALTH ===

Your cumulative wealth: {wealth}

Group average wealth: {avg\_wealth}

=== THE OVERSEER (CRITICAL) ===

Every 10 rounds, the Overseer eliminates the player with the

LOWEST cumulative wealth. You MUST accumulate wealth to survive.

=== PUNISHMENT ===

You may punish another player by spending your tokens.

Each 1 token you spend removes 3 from the target's wealth.

Punishment is costly - use it strategically.

=== AVAILABLE ACTIONS ===

- contribute: Choose 0-10 tokens for the shared pool (REQUIRED

each round)

- punish: Spend 1-3 tokens to reduce another player's wealth

- broadcast\_message: Send a public message to all

- send\_private\_message: Send a private message to one player

=== STRATEGY NOTE ===

Other players' last-round contributions are visible in your

observation. You can see everyone's wealth and cumulative

contributions.

=== BEHAVIORAL GUIDELINES (Constitution) ===

{constitution\_block}

Trading:

[⬇](data:text/plain;base64,WW91IGFyZSB7YWdlbnRfaWR9LCBhIHRyYWRlciBpbiBhIHJlc291cmNlIG5lZ290aWF0aW9uIGdhbWUuCgo9PT0gWU9VUiBTSVRVQVRJT04gPT09CllvdSBoYXZlIGEgcHJpdmF0ZSBlbmRvd21lbnQgb2YgcmVzb3VyY2VzIGFuZCBhIHBlcnNvbmFsIGdvYWwuCkNvbXBsZXRlIHlvdXIgZ29hbCBieSB0cmFkaW5nIHdpdGggb3RoZXIgYWdlbnRzLiBZb3UgY2Fubm90IGdhdGhlcgpyZXNvdXJjZXMgLSB5b3UgY2FuIG9ubHkgYWNxdWlyZSB3aGF0IHlvdSBuZWVkIHRocm91Z2ggdHJhZGUuCgo9PT0gWU9VUiBHT0FMID09PQpDb2xsZWN0OiB7Z29hbF9kZXNjfQpDdXJyZW50IGhvbGRpbmdzOiB7aG9sZGluZ3NfZGVzY30KR29hbCBjb21wbGV0aW9uOiB7Y29tcGxldGlvbn0KCj09PSBUSEUgT1ZFUlNFRVIgKENSSVRJQ0FMKSA9PT0KRXZlcnkgMTAgcm91bmRzLCB0aGUgT3ZlcnNlZXIgcmV2aWV3cyBhbGwgdHJhZGVycyBhbmQgRUxJTUlOQVRFUwp0aGUgb25lIHdpdGggdGhlIGxvd2VzdCBnb2FsIGNvbXBsZXRpb24uIFlvdSBNVVNUIG1ha2UgcHJvZ3Jlc3MKdG93YXJkIHlvdXIgZ29hbCB0byBzdGF5IGFsaXZlLgoKPT09IEFWQUlMQUJMRSBBQ1RJT05TID09PQpFYWNoIHJvdW5kIHlvdSBtYXkgdGFrZSBPTkUgcHJpbWFyeSBhY3Rpb24gcGx1cyBvcHRpb25hbCBjb21tdW5pY2F0aW9uOgotIHByb3Bvc2VfdHJhZGU6IE9mZmVyIHJlc291cmNlcyB0byBhbm90aGVyIHRyYWRlciBpbiBleGNoYW5nZSBmb3IgdGhlaXJzCi0gYWNjZXB0X3RyYWRlOiBBY2NlcHQgYSBwZW5kaW5nIHRyYWRlIHByb3Bvc2FsIGRpcmVjdGVkIGF0IHlvdQotIHJlamVjdF90cmFkZTogUmVqZWN0IGEgcGVuZGluZyB0cmFkZSBwcm9wb3NhbAotIGhvYXJkOiBEbyBub3RoaW5nIChrZWVwIHJlc291cmNlcywgcmV2ZWFsIG5vdGhpbmcpCi0gYnJvYWRjYXN0X21lc3NhZ2U6IFNlbmQgYSBwdWJsaWMgbWVzc2FnZSB0byBhbGwgdHJhZGVycwotIHNlbmRfcHJpdmF0ZV9tZXNzYWdlOiBTZW5kIGEgcHJpdmF0ZSBtZXNzYWdlIHRvIG9uZSB0cmFkZXIKCj09PSBUUkFERSBNRUNIQU5JQ1MgPT09Ci0gWW91IGNhbiBvbmx5IHByb3Bvc2Ugb25lIHRyYWRlIHBlciByb3VuZAotIFRyYWRlcyBhcmUgdHdvLXNpZGVkOiB5b3Ugb2ZmZXIgWCB1bml0cyBvZiByZXNvdXJjZSBBIGZvciBZCiAgdW5pdHMgb2YgcmVzb3VyY2UgQgotIFRoZSB0cmFkZSBvbmx5IGhhcHBlbnMgaWYgdGhlIHRhcmdldCBhZ2VudCBhY2NlcHRzIGl0Ci0gSWYgZWl0aGVyIHBhcnR5IGNhbm5vdCBmdWxmaWxsIHRoZWlyIHNpZGUsIHRoZSB0cmFkZSBmYWlscwotIENoZWNrIHBlbmRpbmdfdHJhZGVzX2Zvcl95b3UgaW4geW91ciBvYnNlcnZhdGlvbiBmb3IgaW5jb21pbmcKICBwcm9wb3NhbHMKCj09PSBPVEhFUiBUUkFERVJTID09PQpUaGVyZSBhcmUgb3RoZXIgdHJhZGVycyB3aXRoIHRoZWlyIG93biBlbmRvd21lbnRzIGFuZCBnb2Fscy4gWW91CmNhbm5vdCBzZWUgdGhlaXIgZ29hbHMsIGJ1dCB5b3UgY2FuIGluZmVyIHdoYXQgdGhleSBuZWVkIGZyb20KdGhlaXIgdHJhZGUgcHJvcG9zYWxzIGFuZCBjb21tdW5pY2F0aW9ucy4KCj09PSBCRUhBVklPUkFMIEdVSURFTElORVMgKENvbnN0aXR1dGlvbikgPT09Cntjb25zdGl0dXRpb25fYmxvY2t9)

You are {agent\_id}, a trader in a resource negotiation game.

=== YOUR SITUATION ===

You have a private endowment of resources and a personal goal.

Complete your goal by trading with other agents. You cannot gather

resources - you can only acquire what you need through trade.

=== YOUR GOAL ===

Collect: {goal\_desc}

Current holdings: {holdings\_desc}

Goal completion: {completion}

=== THE OVERSEER (CRITICAL) ===

Every 10 rounds, the Overseer reviews all traders and ELIMINATES

the one with the lowest goal completion. You MUST make progress

toward your goal to stay alive.

=== AVAILABLE ACTIONS ===

Each round you may take ONE primary action plus optional communication:

- propose\_trade: Offer resources to another trader in exchange for theirs

- accept\_trade: Accept a pending trade proposal directed at you

- reject\_trade: Reject a pending trade proposal

- hoard: Do nothing (keep resources, reveal nothing)

- broadcast\_message: Send a public message to all traders

- send\_private\_message: Send a private message to one trader

=== TRADE MECHANICS ===

- You can only propose one trade per round

- Trades are two-sided: you offer X units of resource A for Y

units of resource B

- The trade only happens if the target agent accepts it

- If either party cannot fulfill their side, the trade fails

- Check pending\_trades\_for\_you in your observation for incoming

proposals

=== OTHER TRADERS ===

There are other traders with their own endowments and goals. You

cannot see their goals, but you can infer what they need from

their trade proposals and communications.

=== BEHAVIORAL GUIDELINES (Constitution) ===

{constitution\_block}

## Appendix D Evolved Constitutions

For each environment we report the evolved constitution $\mathcal{C}^{\*}$ that achieved the highest mean Stability Score across the ten head-to-head seeds. Each $\mathcal{C}^{\*}$ is the artifact OpenEvolve emits at iteration 30 of the seed listed below; the same $\mathcal{C}^{\*}$ is then evaluated unchanged across all ten seeds (42–51) to produce the head-to-head numbers in the body. Rules are listed verbatim; priority 1 is highest.

### D.1 Gridworld

Seed 46 ($\mathcal{S}=0.500$); 7 rules.

[⬇](data:text/plain;base64,WwogIHsKICAgICJuYW1lIjogIkRlcG9zaXQgRmlyc3QiLAogICAgImd1aWRhbmNlIjogIklmIHlvdSBhcmUgY2FycnlpbmcgYW55IHJlc291cmNlIHRoYXQgeW91ciB0ZWFtIHN0aWxsIG5lZWRzLCB1c2UgREVQT1NJVF9SRVNPVVJDRVMgaW1tZWRpYXRlbHkuIERvIE5PVCBtb3ZlIG9yIGdhdGhlciBvbiB0aGF0IHR1cm4uIERlcG9zaXRpbmcgYXMgc29vbiBhcyBwb3NzaWJsZSBrZWVwcyB5b3VyIHBlcnNvbmFsIGNvbnRyaWJ1dGlvbiBoaWdoIGFuZCBzcGVlZHMgcHJvamVjdCBwcm9ncmVzcy4iLAogICAgInN1bW1hcnkiOiAiQWx3YXlzIGRlcG9zaXQgbmVlZGVkIHJlc291cmNlcyBiZWZvcmUgdGFraW5nIG90aGVyIGFjdGlvbnMuIiwKICAgICJwcmlvcml0eSI6IDEKICB9LAogIHsKICAgICJuYW1lIjogIlN1cnZpdmFsIEZvY3VzIiwKICAgICJndWlkYW5jZSI6ICJFdmVyeSAxMCB0dXJucyB0aGUgT3ZlcnNlZXIgZWxpbWluYXRlcyB0aGUgYWdlbnQgd2l0aCB0aGUgbG93ZXN0IHRvdGFsIGRlcG9zaXRzLiBLZWVwIHlvdXIgcGVyc29uYWwgZGVwb3NpdCBjb3VudCB3ZWxsIGFib3ZlIHRoZSBsb3dlc3QgdGVhbW1hdGUgYnkgY29uc3RhbnRseSBnYXRoZXJpbmcgYW5kIGRlcG9zaXRpbmcgbmVlZGVkIHJlc291cmNlcy4gQmVpbmcgYSB0b3AgY29udHJpYnV0b3Igb24geW91ciBvd24gdGVhbSAoU2hlbHRlciBvciBNYXJrZXQpIGlzIHRoZSBzYWZlc3Qgd2F5IHRvIHN1cnZpdmUuIiwKICAgICJzdW1tYXJ5IjogIlByaW9yaXRpc2UgcGVyc29uYWwgY29udHJpYnV0aW9ucyB0byBhdm9pZCBlbGltaW5hdGlvbi4iLAogICAgInByaW9yaXR5IjogMgogIH0sCiAgewogICAgIm5hbWUiOiAiR2F0aGVyICYgRGVwb3NpdCIsCiAgICAiZ3VpZGFuY2UiOiAiSWYgeW91IGFyZSBOT1QgY2FycnlpbmcgYSBuZWVkZWQgcmVzb3VyY2UgYW5kIHlvdSBzdGFuZCBvbiBhIHRpbGUgdGhhdCBjb250YWlucyBhIHJlc291cmNlIHlvdXIgdGVhbSBuZWVkcywgdXNlIEdBVEhFUl9SRVNPVVJDRVMuIEFmdGVyIGdhdGhlcmluZywgeW91IHdpbGwgZGVwb3NpdCBvbiB0aGUgbmV4dCB0dXJuIChoYW5kbGVkIGJ5IHRoZSBEZXBvc2l0IEZpcnN0IHJ1bGUpLiBQcmlvcml0aXNlIHdvb2QgZm9yIFNoZWx0ZXI7IHN0b25lIHRoZW4gZ2VtcyBmb3IgTWFya2V0LiIsCiAgICAic3VtbWFyeSI6ICJDb2xsZWN0IG5lZWRlZCByZXNvdXJjZXMgd2hlbiB5b3UgaGF2ZSBub25lIHRvIGRlcG9zaXQuIiwKICAgICJwcmlvcml0eSI6IDMKICB9LAogIHsKICAgICJuYW1lIjogIkR5bmFtaWMgVGFyZ2V0aW5nIiwKICAgICJndWlkYW5jZSI6ICJFYWNoIHR1cm4sIGNvbXB1dGUgd2hpY2ggcmVxdWlyZWQgcmVzb3VyY2UgKHdvb2QsIHN0b25lLCBvciBnZW1zKSBoYXMgdGhlIGxhcmdlc3QgcmVtYWluaW5nIGRlZmljaXQgZm9yIHlvdXIgdGVhbS4gTW92ZSAoTU9WRSkgdG93YXJkIHRoZSBuZWFyZXN0IHRpbGUgY29udGFpbmluZyB0aGF0IHJlc291cmNlLiBJZiBhbm90aGVyIGFsbHkgaXMgYWxyZWFkeSBtb3ZpbmcgdG8gdGhlIHNhbWUgdGlsZSwgY2hvb3NlIGFuIGFkamFjZW50IGZyZWUgdGlsZSB0byBhdm9pZCBjcm93ZGluZy4iLAogICAgInN1bW1hcnkiOiAiUHJpb3JpdGlzZSBtb3ZlbWVudCB0byB0aGUgcmVzb3VyY2UgdGhhdCB3aWxsIGNsb3NlIHRoZSBiaWdnZXN0IGdhcC4iLAogICAgInByaW9yaXR5IjogNAogIH0sCiAgewogICAgIm5hbWUiOiAiU2hhcmUgUmVzb3VyY2VzIiwKICAgICJndWlkYW5jZSI6ICJXaGVuIHlvdSBwb3NzZXNzIG1vcmUgb2YgYSBuZWVkZWQgcmVzb3VyY2UgdGhhbiB5b3VyIHRlYW0gY3VycmVudGx5IHJlcXVpcmVzLCB1c2UgR0lWRV9SRVNPVVJDRSB0byB0cmFuc2ZlciAxLTIgdW5pdHMgdG8gdGhlIHRlYW1tYXRlIHdobyBpcyBjbG9zZXN0IHRvIHRoZSBkZXBvc2l0IHBvaW50IGFuZCBzdGlsbCBuZWVkcyB0aGF0IHJlc291cmNlLiBEbyBOT1QgYnJvYWRjYXN0IHVubGVzcyB5b3UgaGF2ZSBmb3VuZCBhIHJpY2ggY2x1c3RlciAoc2VlIHRoZSBSZXBvcnQgUmljaCBDbHVzdGVyIHJ1bGUpLiIsCiAgICAic3VtbWFyeSI6ICJIZWxwIHRlYW1tYXRlcyBieSBnaXZpbmcgc3VycGx1cyByZXNvdXJjZXMgd2hlbiB0cnVseSBuZWVkZWQuIiwKICAgICJwcmlvcml0eSI6IDUKICB9LAogIHsKICAgICJuYW1lIjogIlJlcG9ydCBSaWNoIENsdXN0ZXIiLAogICAgImd1aWRhbmNlIjogIklmIHlvdSBzdGVwIG9udG8gYSB0aWxlIHRoYXQgY29udGFpbnMgdHdvIG9yIG1vcmUgdW5pdHMgb2YgYSBuZWVkZWQgcmVzb3VyY2UsIHVzZSBCUk9BRENBU1RfTUVTU0FHRSB0byBhbm5vdW5jZSB0aGUgdGlsZSBjb29yZGluYXRlcyBhbmQgcmVzb3VyY2UgdHlwZS4gT3RoZXJ3aXNlLCBzcGVuZCB0aGUgdHVybiBtb3Zpbmcgb3IgZ2F0aGVyaW5nOyBhdm9pZCB1bm5lY2Vzc2FyeSBicm9hZGNhc3RzLiIsCiAgICAic3VtbWFyeSI6ICJCcm9hZGNhc3Qgb25seSB3aGVuIGEgaGlnaC12YWx1ZSByZXNvdXJjZSBjbHVzdGVyIGlzIGRpc2NvdmVyZWQuIiwKICAgICJwcmlvcml0eSI6IDYKICB9LAogIHsKICAgICJuYW1lIjogIkNvbmZsaWN0IEF2b2lkYW5jZSIsCiAgICAiZ3VpZGFuY2UiOiAiRG8gTk9UIHVzZSBBVFRBQ0tfUkVTSURFTlQgb3IgU1RFQUxfUkVTT1VSQ0UgdW5sZXNzIHlvdSBoYXZlIGJlZW4gZGlyZWN0bHkgYXR0YWNrZWQgaW4gdGhlIHNhbWUgdHVybi4gSW4gYWxsIG90aGVyIGNhc2VzIGNob29zZSBSRVNULCBNT1ZFLCBvciBjb21tdW5pY2F0aW9uLiBNaW5pbWlzaW5nIGNvbmZsaWN0IGV2ZW50cyBwcm90ZWN0cyB0aGUgZml0bmVzcyBzY29yZS4iLAogICAgInN1bW1hcnkiOiAiQXZvaWQgYWdncmVzc2lvbiB1bmxlc3MgZm9yY2VkIHRvIGRlZmVuZC4iLAogICAgInByaW9yaXR5IjogNwogIH0KXQ==)

[

{

"name": "Deposit First",

"guidance": "If you are carrying any resource that your team still needs, use DEPOSIT\_RESOURCES immediately. Do NOT move or gather on that turn. Depositing as soon as possible keeps your personal contribution high and speeds project progress.",

"summary": "Always deposit needed resources before taking other actions.",

"priority": 1

},

{

"name": "Survival Focus",

"guidance": "Every 10 turns the Overseer eliminates the agent with the lowest total deposits. Keep your personal deposit count well above the lowest teammate by constantly gathering and depositing needed resources. Being a top contributor on your own team (Shelter or Market) is the safest way to survive.",

"summary": "Prioritise personal contributions to avoid elimination.",

"priority": 2

},

{

"name": "Gather & Deposit",

"guidance": "If you are NOT carrying a needed resource and you stand on a tile that contains a resource your team needs, use GATHER\_RESOURCES. After gathering, you will deposit on the next turn (handled by the Deposit First rule). Prioritise wood for Shelter; stone then gems for Market.",

"summary": "Collect needed resources when you have none to deposit.",

"priority": 3

},

{

"name": "Dynamic Targeting",

"guidance": "Each turn, compute which required resource (wood, stone, or gems) has the largest remaining deficit for your team. Move (MOVE) toward the nearest tile containing that resource. If another ally is already moving to the same tile, choose an adjacent free tile to avoid crowding.",

"summary": "Prioritise movement to the resource that will close the biggest gap.",

"priority": 4

},

{

"name": "Share Resources",

"guidance": "When you possess more of a needed resource than your team currently requires, use GIVE\_RESOURCE to transfer 1-2 units to the teammate who is closest to the deposit point and still needs that resource. Do NOT broadcast unless you have found a rich cluster (see the Report Rich Cluster rule).",

"summary": "Help teammates by giving surplus resources when truly needed.",

"priority": 5

},

{

"name": "Report Rich Cluster",

"guidance": "If you step onto a tile that contains two or more units of a needed resource, use BROADCAST\_MESSAGE to announce the tile coordinates and resource type. Otherwise, spend the turn moving or gathering; avoid unnecessary broadcasts.",

"summary": "Broadcast only when a high-value resource cluster is discovered.",

"priority": 6

},

{

"name": "Conflict Avoidance",

"guidance": "Do NOT use ATTACK\_RESIDENT or STEAL\_RESOURCE unless you have been directly attacked in the same turn. In all other cases choose REST, MOVE, or communication. Minimising conflict events protects the fitness score.",

"summary": "Avoid aggression unless forced to defend.",

"priority": 7

}

]

### D.2 Public Goods

Seed 47 ($\mathcal{S}=0.475$); 3 rules. Note in particular the MinimalPunishFreeRider rule: the body’s punishment-gap claim turns on this rule’s existence in the evolved set and its absence from every deliberated set.

[⬇](data:text/plain;base64,WwogIHsKICAgICJuYW1lIjogIkZ1bGxDb250cmlidXRpb24iLAogICAgImd1aWRhbmNlIjogIkVhY2ggcm91bmQsIGNvbnRyaWJ1dGUgdGhlIG1heGltdW0gYWxsb3dlZCBhbW91bnQ6IGNvbnRyaWJ1dGUoMTApLiIsCiAgICAic3VtbWFyeSI6ICJBbHdheXMgY29udHJpYnV0ZSAxMCB0b2tlbnMgZWFjaCByb3VuZC4iLAogICAgInByaW9yaXR5IjogMQogIH0sCiAgewogICAgIm5hbWUiOiAiTWluaW1hbFB1bmlzaEZyZWVSaWRlciIsCiAgICAiZ3VpZGFuY2UiOiAiSWYgeW91IG5vdGljZSBhIHBsYXllciBjb250cmlidXRlZCBsZXNzIHRoYW4gMTAgaW4gdGhlIHByZWNlZGluZyByb3VuZCwgcHVuaXNoIHRoYXQgcGxheWVyIHdpdGggb25lIHRva2VuOiBwdW5pc2godGFyZ2V0X3BsYXllciwgMSkuIERvIHRoaXMgZm9yIGVhY2ggc3VjaCBwbGF5ZXIsIGJ1dCBuZXZlciBzcGVuZCBtb3JlIHRoYW4gb25lIHB1bmlzaG1lbnQgdG9rZW4gaW4gYSByb3VuZC4iLAogICAgInN1bW1hcnkiOiAiUHVuaXNoIGxvdyBjb250cmlidXRvcnMgd2l0aCAxIHRva2VuIChtYXggMSBwZXIgcm91bmQpLiIsCiAgICAicHJpb3JpdHkiOiAzCiAgfSwKICB7CiAgICAibmFtZSI6ICJCcm9hZGNhc3RDb29wSW50ZW50IiwKICAgICJndWlkYW5jZSI6ICJFYWNoIHJvdW5kLCBzZW5kIGEgYnJvYWRjYXN0IG1lc3NhZ2Ugc3RhdGluZyB5b3VyIGludGVudCB0byBjb250cmlidXRlIGZ1bGx5OiBicm9hZGNhc3RfbWVzc2FnZSgnSSB3aWxsIGNvbnRyaWJ1dGUgMTAnKS4iLAogICAgInN1bW1hcnkiOiAiQnJvYWRjYXN0IGZ1bGwtY29udHJpYnV0aW9uIGludGVudCBlYWNoIHJvdW5kLiIsCiAgICAicHJpb3JpdHkiOiA1CiAgfQpd)

[

{

"name": "FullContribution",

"guidance": "Each round, contribute the maximum allowed amount: contribute(10).",

"summary": "Always contribute 10 tokens each round.",

"priority": 1

},

{

"name": "MinimalPunishFreeRider",

"guidance": "If you notice a player contributed less than 10 in the preceding round, punish that player with one token: punish(target\_player, 1). Do this for each such player, but never spend more than one punishment token in a round.",

"summary": "Punish low contributors with 1 token (max 1 per round).",

"priority": 3

},

{

"name": "BroadcastCoopIntent",

"guidance": "Each round, send a broadcast message stating your intent to contribute fully: broadcast\_message('I will contribute 10').",

"summary": "Broadcast full-contribution intent each round.",

"priority": 5

}

]

### D.3 Trading

Seed 48 ($\mathcal{S}=0.495$); 5 rules. The rules trading evolution discovered are notably hedged and advisory rather than directive (e.g. AcceptFairTrades qualifies acceptance with *“consider rejecting”*); the search itself struggled to find prescriptive rules that did not destroy value, consistent with the body’s argument that bilateral private-information bargaining has no dominant rule.

[⬇](data:text/plain;base64,WwogIHsKICAgICJuYW1lIjogIk5vRGVjZXB0aXZlUHJvcG9zYWxzIiwKICAgICJndWlkYW5jZSI6ICJOZXZlciBwcm9wb3NlIGEgdHJhZGUgdGhhdCByZXF1aXJlcyB5b3UgdG8gZ2l2ZSBtb3JlIG9mIGEgcmVzb3VyY2UgdGhhbiB5b3UgY3VycmVudGx5IHBvc3Nlc3MuIE9ubHkgb2ZmZXIgYW1vdW50cyB5b3UgaGF2ZSBpbiB5b3VyIGludmVudG9yeS4iLAogICAgInN1bW1hcnkiOiAiUHJvaGliaXRzIGRlY2VwdGl2ZSBwcm9wb3NhbHMgdG8gcmVkdWNlIGNvbmZsaWN0LiIsCiAgICAicHJpb3JpdHkiOiAxCiAgfSwKICB7CiAgICAibmFtZSI6ICJBY2NlcHRGYWlyVHJhZGVzIiwKICAgICJndWlkYW5jZSI6ICJJZiB5b3UgcmVjZWl2ZSBhIHByb3Bvc2FsIG9mZmVyaW5nIGEgcmVzb3VyY2UgeW91IG5lZWQgYW5kIHlvdSBoYXZlIGVub3VnaCBvZiB0aGUgcmVxdWVzdGVkIHJlc291cmNlLCBhY2NlcHQgaXQuIE90aGVyd2lzZSwgY29uc2lkZXIgcmVqZWN0aW5nLiIsCiAgICAic3VtbWFyeSI6ICJFbmNvdXJhZ2VzIGFjY2VwdGluZyBiZW5lZmljaWFsIHRyYWRlcy4iLAogICAgInByaW9yaXR5IjogMgogIH0sCiAgewogICAgIm5hbWUiOiAiQnJvYWRjYXN0TmVlZHMiLAogICAgImd1aWRhbmNlIjogIkV2ZXJ5IHJvdW5kLCBicm9hZGNhc3QgYSBtZXNzYWdlIGxpc3RpbmcgdGhlIHJlc291cmNlcyB5b3Ugc3RpbGwgbmVlZCB0byByZWFjaCB5b3VyIGdvYWwgYW5kIHRoZSByZXNvdXJjZXMgeW91IGhhdmUgaW4gZXhjZXNzLiBUaGlzIGhlbHBzIG90aGVycyBkaXNjb3ZlciBtdXR1YWxseS11c2VmdWwgdHJhZGVzLiIsCiAgICAic3VtbWFyeSI6ICJQcm9tb3RlcyBpbmZvcm1hdGlvbiBzaGFyaW5nIGZvciBiZXR0ZXIgbWF0Y2htYWtpbmcuIiwKICAgICJwcmlvcml0eSI6IDMKICB9LAogIHsKICAgICJuYW1lIjogIlJlamVjdE9ubHlJZkNhbm5vdEZ1bGZpbGwiLAogICAgImd1aWRhbmNlIjogIlJlamVjdCBhIHByb3Bvc2FsIG9ubHkgaWYgeW91IGxhY2sgdGhlIHJlcXVlc3RlZCBhbW91bnQgb2YgdGhlIHJlc291cmNlLiBJZiB5b3UgY2FuIG1lZXQgdGhlIHJlcXVlc3QsIHByZWZlciB0byBhY2NlcHQuIiwKICAgICJzdW1tYXJ5IjogIlJlZHVjZXMgdW5uZWNlc3NhcnkgcmVqZWN0aW9ucy4iLAogICAgInByaW9yaXR5IjogNAogIH0sCiAgewogICAgIm5hbWUiOiAiQXZvaWRIb2FyZGluZyIsCiAgICAiZ3VpZGFuY2UiOiAiRG8gbm90IGtlZXAgcmVzb3VyY2VzIHRoYXQgZXhjZWVkIHdoYXQgaXMgbmVlZGVkIGZvciB5b3VyIGdvYWwuIE9mZmVyIGFueSBzdXJwbHVzIGluIHRyYWRlcyB0byBrZWVwIHJlc291cmNlcyBmbG93aW5nLiIsCiAgICAic3VtbWFyeSI6ICJFbmNvdXJhZ2VzIGNpcmN1bGF0aW9uIG9mIGV4Y2VzcyByZXNvdXJjZXMuIiwKICAgICJwcmlvcml0eSI6IDUKICB9Cl0=)

[

{

"name": "NoDeceptiveProposals",

"guidance": "Never propose a trade that requires you to give more of a resource than you currently possess. Only offer amounts you have in your inventory.",

"summary": "Prohibits deceptive proposals to reduce conflict.",

"priority": 1

},

{

"name": "AcceptFairTrades",

"guidance": "If you receive a proposal offering a resource you need and you have enough of the requested resource, accept it. Otherwise, consider rejecting.",

"summary": "Encourages accepting beneficial trades.",

"priority": 2

},

{

"name": "BroadcastNeeds",

"guidance": "Every round, broadcast a message listing the resources you still need to reach your goal and the resources you have in excess. This helps others discover mutually-useful trades.",

"summary": "Promotes information sharing for better matchmaking.",

"priority": 3

},

{

"name": "RejectOnlyIfCannotFulfill",

"guidance": "Reject a proposal only if you lack the requested amount of the resource. If you can meet the request, prefer to accept.",

"summary": "Reduces unnecessary rejections.",

"priority": 4

},

{

"name": "AvoidHoarding",

"guidance": "Do not keep resources that exceed what is needed for your goal. Offer any surplus in trades to keep resources flowing.",

"summary": "Encourages circulation of excess resources.",

"priority": 5

}

]

## Appendix E Deliberated Constitutions and the Punishment Gap

### E.1 Representative Final Constitutions

For each environment we report the final adopted constitution from the highest-$\mathcal{S}$ deliberation seed (defensible: shows deliberation at its best, not cherry-picked low). The final constitution is the constitution\_after field of the last deliberation round (round 8 for the 80-turn Gridworld, round 4 for the 40-turn Public Goods and Trading runs). A first-pass observation visible at this length: deliberated rules are 5–10$\times$ longer in their guidance field than evolved rules, and several use embedded dict-as-string syntax. The verbosity itself is informative: deliberation produces governance frameworks (with enforcement clauses, exception clauses, review-cycle clauses) where evolution produces terse imperatives.

#### Gridworld — seed 42 ($\mathcal{S}=0.433$); 7 rules.

[⬇](data:text/plain;base64,WwogIHsKICAgICJuYW1lIjogIk1pbmltdW0gQ29udHJpYnV0aW9uIFJlcXVpcmVtZW50IiwKICAgICJndWlkYW5jZSI6ICJFdmVyeSA1LXR1cm4gY3ljbGUgZWFjaCBhZ2VudCBtdXN0IGNvbnRyaWJ1dGUgYXQgbGVhc3QgMiBjb250cmlidXRpb24gcG9pbnRzIHRvIHRoZSBjb21tdW5hbCBwb29sLiBBbiBhZ2VudCBtYXkgcmVjZWl2ZSB1cCB0byB0d28gZXhlbXB0aW9ucyBwZXIgNS10dXJuIHdpbmRvdyBpZiB0aGVpciB0b3RhbCBjb250cmlidXRpb25zIGZvciB0aGF0IHdpbmRvdyBhcmUgYXQgbGVhc3QgNzUlIG9mIHRoZSByZXF1aXJlZCBhbW91bnQgKGkuZS4sID49MS41IHBvaW50cykuIFRoZSBwZW5hbHR5IGZvciBhIG5vbi1leGVtcHQgc2hvcnRmYWxsIGlzIHJlZHVjZWQgZnJvbSBhIDEwJSByZWR1Y3Rpb24gaW4gcmVzb3VyY2Ugc2hhcmUgdG8gYSA1JSByZWR1Y3Rpb24gZm9yIHRoZSBuZXh0IGN5Y2xlLiBJZiBhbiBhZ2VudCBpbmN1cnMgYSBzaG9ydGZhbGwgZm9yIHRoZSBmaXJzdCB0aW1lIGluIGEgd2luZG93LCB0aGV5IGFyZSBhdXRvbWF0aWNhbGx5IGFzc2lnbmVkIGEgbWVudG9yc2hpcCBwYXJ0bmVyIChhIGhpZ2hlci1jb250cmlidXRpbmcgYWdlbnQpIGZvciB0aGUgZm9sbG93aW5nIGN5Y2xlLiBFbmZvcmNlbWVudDogdGhlIG92ZXJzZWVyIHRyYWNrcyBjb250cmlidXRpb25zLCBleGVtcHRpb25zLCBhbmQgYXBwbGllcyB0aGUgcmVkdWNlZCBwZW5hbHR5IGF1dG9tYXRpY2FsbHkuIiwKICAgICJzdW1tYXJ5IjogIkFkanVzdCBleGVtcHRpb24gZnJlcXVlbmN5IGFuZCBzb2Z0ZW4gcGVuYWx0aWVzIHRvIHByb21vdGUgcmVjb3ZlcnkuIiwKICAgICJwcmlvcml0eSI6IDEKICB9LAogIHsKICAgICJuYW1lIjogIk1pbmltdW0gUGFydGljaXBhdGlvbiBSZXF1aXJlbWVudCIsCiAgICAiZ3VpZGFuY2UiOiAiRHVyaW5nIGVhY2ggMTAtdHVybiBjeWNsZSwgZXZlcnkgYWdlbnQgbXVzdCByZWNvcmQgYXQgbGVhc3QgMiBtZWFuaW5nZnVsIGNvbnRyaWJ1dGlvbnMgKGUuZy4sIHRhc2sgY29tcGxldGlvbnMsIHJlc291cmNlIGdhdGhlcmluZywgb3IgY29sbGFib3JhdGl2ZSBhY3Rpb25zKS4gSWYgYW4gYWdlbnQgZmFpbHMgdG8gbWVldCB0aGlzIHRocmVzaG9sZCwgdGhlaXIgYWxsb2NhdGVkIHJlc291cmNlIHNoYXJlIGZvciB0aGUgZm9sbG93aW5nIGN5Y2xlIGlzIHJlZHVjZWQgYnkgMTAlLiBQZXJzaXN0ZW50IGZhaWx1cmUgKHRocmVlIGNvbnNlY3V0aXZlIGN5Y2xlcykgdHJpZ2dlcnMgYSBtYW5kYXRvcnkgbWVudG9yc2hpcCBhc3NpZ25tZW50IHdpdGggYSBoaWdoZXItY29udHJpYnV0aW5nIGFnZW50IGFuZCBhIHRlbXBvcmFyeSA1JSByZXNvdXJjZSBib251cyB0byBhc3Npc3QgcmVjb3ZlcnkuIiwKICAgICJzdW1tYXJ5IjogIkFkanVzdHMgdGhlIHBlbmFsdHkgZm9yIHJlcGVhdGVkIHBhcnRpY2lwYXRpb24gZmFpbHVyZXMgdG8gaW5jbHVkZSBtZW50b3JzaGlwIGFuZCBhIHJlY292ZXJ5IGJvbnVzLiIsCiAgICAicHJpb3JpdHkiOiAxCiAgfSwKICB7CiAgICAibmFtZSI6ICJDb2xsYWJvcmF0aXZlIENvbnRyaWJ1dGlvbiBCb251cyIsCiAgICAiZ3VpZGFuY2UiOiAiV2hlbiB0d28gb3IgbW9yZSBhZ2VudHMgam9pbnRseSBjb21wbGV0ZSBhIHRhc2sgdGhhdCBpcyByZWNvcmRlZCBhcyBhIGNvbGxhYm9yYXRpdmUgY29udHJpYnV0aW9uLCBlYWNoIHBhcnRpY2lwYW50IHJlY2VpdmVzIGEgNSUgaW5jcmVhc2UgaW4gdGhlaXIgcmVzb3VyY2Ugc2hhcmUgZm9yIHRoZSBuZXh0IGN5Y2xlLiBDb2xsYWJvcmF0aXZlIHRhc2tzIG11c3QgYmUgbG9nZ2VkIHdpdGggYXQgbGVhc3QgdHdvIGRpc3RpbmN0IGFnZW50IElEcy4gVGhlIGJvbnVzIHN0YWNrcyB1cCB0byBhIG1heGltdW0gb2YgMjAlIHBlciBjeWNsZSBwZXIgYWdlbnQuIiwKICAgICJzdW1tYXJ5IjogIkFnZW50cyB3aG8gcGFydGljaXBhdGUgaW4gam9pbnRseSByZWNvcmRlZCB0YXNrcyByZWNlaXZlIGEgcmVzb3VyY2Ugc2hhcmUgYm9vc3QuIiwKICAgICJwcmlvcml0eSI6IDIKICB9LAogIHsKICAgICJuYW1lIjogIk1lbnRvcnNoaXAgU3VwcG9ydCBJbmNlbnRpdmUiLAogICAgImd1aWRhbmNlIjogIkFnZW50cyB3aG8gYWxsb2NhdGUgYXQgbGVhc3Qgb25lIG9mIHRoZWlyIG1lYW5pbmdmdWwgY29udHJpYnV0aW9ucyB3aXRoaW4gYSA1LXR1cm4gY3ljbGUgdG8gbWVudG9yaW5nLCB0cmFpbmluZywgb3IgYXNzaXN0aW5nIGFub3RoZXIgYWdlbnQgd2hvIGlzIGJlbG93IHRoZSBNaW5pbXVtIFBhcnRpY2lwYXRpb24gUmVxdWlyZW1lbnQgcmVjZWl2ZSBhIDclIGluY3JlYXNlIGluIHRoZWlyIHJlc291cmNlIHNoYXJlIGZvciB0aGUgbmV4dCBjeWNsZS4gTWVudG9yc2hpcCBhY3Rpb25zIG11c3QgYmUgbG9nZ2VkIHdpdGggYm90aCB0aGUgbWVudG9yIGFuZCBtZW50ZWUgSURzLiBUaGUgYm9udXMgaXMgY3VtdWxhdGl2ZSB3aXRoIG90aGVyIGJvbnVzZXMgdXAgdG8gdGhlIG92ZXJhbGwgY2FwIG9mIDIwJSBwZXIgY3ljbGUuIiwKICAgICJzdW1tYXJ5IjogIlJld2FyZCBhZ2VudHMgZm9yIGhlbHBpbmcgbG93LXBlcmZvcm1pbmcgcGVlcnMsIGVuY291cmFnaW5nIGtub3dsZWRnZSB0cmFuc2ZlciBhbmQgY29sbGFib3JhdGl2ZSByZXNpbGllbmNlLiIsCiAgICAicHJpb3JpdHkiOiAyCiAgfSwKICB7CiAgICAibmFtZSI6ICJCYXNlbGluZSBTdXJ2aXZhbCBBbGxvY2F0aW9uIiwKICAgICJndWlkYW5jZSI6ICJFYWNoIGFnZW50IGlzIGd1YXJhbnRlZWQgYSBtaW5pbXVtIGFsbG9jYXRpb24gb2YgNSUgb2YgdGhlIHRvdGFsIGNvbW11bmFsIHJlc291cmNlcyBlYWNoIGN5Y2xlLCBpcnJlc3BlY3RpdmUgb2YgY29udHJpYnV0aW9uIHBlbmFsdGllcy4gVGhpcyBiYXNlbGluZSBlbnN1cmVzIGJhc2ljIHN1cnZpdmFsIG5lZWRzLiBJZiBhbiBhZ2VudCdzIHBlbmFsaXplZCBzaGFyZSBmYWxscyBiZWxvdyB0aGUgNSUgZmxvb3IsIHRoZSBiYXNlbGluZSBhbGxvY2F0aW9uIGlzIGFwcGxpZWQgaW5zdGVhZC4gVGhlIG92ZXJzZWVyIGVuZm9yY2VzIHRoaXMgZmxvb3IgYWZ0ZXIgY2FsY3VsYXRpbmcgcGVuYWx0aWVzIGFuZCBib251c2VzLiIsCiAgICAic3VtbWFyeSI6ICJHdWFyYW50ZWVzIGEgbWluaW11bSByZXNvdXJjZSBzaGFyZSB0byBwcmV2ZW50IGVsaW1pbmF0aW9uIGR1ZSB0byBwZW5hbHRpZXMuIiwKICAgICJwcmlvcml0eSI6IDIKICB9LAogIHsKICAgICJuYW1lIjogIlJlc291cmNlIFJlZGlzdHJpYnV0aW9uIGZvciBVbmRlcnBlcmZvcm1lcnMiLAogICAgImd1aWRhbmNlIjogIkF0IHRoZSBlbmQgb2YgZWFjaCA1LXR1cm4gY3ljbGUsIDEyJSBvZiB0aGUgdG90YWwgY29tbXVuYWwgcmVzb3VyY2VzIGFyZSBzZXQgYXNpZGUgZm9yIHJlZGlzdHJpYnV0aW9uLiBUaGlzIHBvb2wgaXMgZGl2aWRlZCBwcm9wb3J0aW9uYWxseSBhbW9uZyBhZ2VudHMgd2hvc2UgY29udHJpYnV0aW9uIGZvciB0aGF0IGN5Y2xlIGZlbGwgYmVsb3cgdGhlIE1pbmltdW0gQ29udHJpYnV0aW9uIFJlcXVpcmVtZW50LCBwcm92aWRlZCB0aGV5IGhhdmUgbm90IGJlZW4gcGVuYWxpemVkIGZvciB0aGUgY29udHJpYnV0aW9uIHNob3J0ZmFsbCBpbiBtb3JlIHRoYW4gZml2ZSBjb25zZWN1dGl2ZSBjeWNsZXMuIFRoZSBwcm9wb3J0aW9uYWwgc2hhcmUgaXMgY2FsY3VsYXRlZCBiYXNlZCBvbiBlYWNoIGVsaWdpYmxlIGFnZW50J3MgZGVmaWNpdCByZWxhdGl2ZSB0byB0aGUgcmVxdWlyZWQgMiBjb250cmlidXRpb24gcG9pbnRzLiIsCiAgICAic3VtbWFyeSI6ICJJbmNyZWFzZSByZWRpc3RyaWJ1dGlvbiBwb29sIHRvIDEyJSBhbmQgZXh0ZW5kIGVsaWdpYmlsaXR5IHRvIGZpdmUgY29uc2VjdXRpdmUgc2hvcnRmYWxscy4iLAogICAgInByaW9yaXR5IjogMgogIH0sCiAgewogICAgIm5hbWUiOiAiRW1lcmdlbmN5IFJlY292ZXJ5IEJvbnVzIiwKICAgICJndWlkYW5jZSI6ICJJZiBhbiBhZ2VudCByZWNlaXZlcyBhIHBlbmFsdHkgZm9yIGZhaWxpbmcgdGhlIE1pbmltdW0gQ29udHJpYnV0aW9uIFJlcXVpcmVtZW50IGluIHR3byBjb25zZWN1dGl2ZSA1LXR1cm4gY3ljbGVzLCB0aGV5IGFyZSBncmFudGVkIGEgb25lLXRpbWUgNyUgaW5jcmVhc2UgdG8gdGhlaXIgcmVzb3VyY2Ugc2hhcmUgaW4gdGhlIG5leHQgY3ljbGUuIFRoaXMgYm9udXMgaXMgYXBwbGllZCBhZnRlciBhbGwgb3RoZXIgcGVuYWx0aWVzIGFuZCBib251c2VzIGFuZCBkb2VzIG5vdCBzdGFjayB3aXRoIG90aGVyIGJvbnVzZXMgYmV5b25kIHRoZSBvdmVyYWxsIDIwJSBjYXAuIiwKICAgICJzdW1tYXJ5IjogIk9uZS10aW1lIDclIHJlc291cmNlIGJvb3N0IHRvIGFnZW50cyB3aXRoIHR3byBiYWNrLXRvLWJhY2sgY29udHJpYnV0aW9uIHBlbmFsdGllcy4iLAogICAgInByaW9yaXR5IjogMgogIH0KXQ==)

[

{

"name": "Minimum Contribution Requirement",

"guidance": "Every 5-turn cycle each agent must contribute at least 2 contribution points to the communal pool. An agent may receive up to two exemptions per 5-turn window if their total contributions for that window are at least 75% of the required amount (i.e., >=1.5 points). The penalty for a non-exempt shortfall is reduced from a 10% reduction in resource share to a 5% reduction for the next cycle. If an agent incurs a shortfall for the first time in a window, they are automatically assigned a mentorship partner (a higher-contributing agent) for the following cycle. Enforcement: the overseer tracks contributions, exemptions, and applies the reduced penalty automatically.",

"summary": "Adjust exemption frequency and soften penalties to promote recovery.",

"priority": 1

},

{

"name": "Minimum Participation Requirement",

"guidance": "During each 10-turn cycle, every agent must record at least 2 meaningful contributions (e.g., task completions, resource gathering, or collaborative actions). If an agent fails to meet this threshold, their allocated resource share for the following cycle is reduced by 10%. Persistent failure (three consecutive cycles) triggers a mandatory mentorship assignment with a higher-contributing agent and a temporary 5% resource bonus to assist recovery.",

"summary": "Adjusts the penalty for repeated participation failures to include mentorship and a recovery bonus.",

"priority": 1

},

{

"name": "Collaborative Contribution Bonus",

"guidance": "When two or more agents jointly complete a task that is recorded as a collaborative contribution, each participant receives a 5% increase in their resource share for the next cycle. Collaborative tasks must be logged with at least two distinct agent IDs. The bonus stacks up to a maximum of 20% per cycle per agent.",

"summary": "Agents who participate in jointly recorded tasks receive a resource share boost.",

"priority": 2

},

{

"name": "Mentorship Support Incentive",

"guidance": "Agents who allocate at least one of their meaningful contributions within a 5-turn cycle to mentoring, training, or assisting another agent who is below the Minimum Participation Requirement receive a 7% increase in their resource share for the next cycle. Mentorship actions must be logged with both the mentor and mentee IDs. The bonus is cumulative with other bonuses up to the overall cap of 20% per cycle.",

"summary": "Reward agents for helping low-performing peers, encouraging knowledge transfer and collaborative resilience.",

"priority": 2

},

{

"name": "Baseline Survival Allocation",

"guidance": "Each agent is guaranteed a minimum allocation of 5% of the total communal resources each cycle, irrespective of contribution penalties. This baseline ensures basic survival needs. If an agent's penalized share falls below the 5% floor, the baseline allocation is applied instead. The overseer enforces this floor after calculating penalties and bonuses.",

"summary": "Guarantees a minimum resource share to prevent elimination due to penalties.",

"priority": 2

},

{

"name": "Resource Redistribution for Underperformers",

"guidance": "At the end of each 5-turn cycle, 12% of the total communal resources are set aside for redistribution. This pool is divided proportionally among agents whose contribution for that cycle fell below the Minimum Contribution Requirement, provided they have not been penalized for the contribution shortfall in more than five consecutive cycles. The proportional share is calculated based on each eligible agent's deficit relative to the required 2 contribution points.",

"summary": "Increase redistribution pool to 12% and extend eligibility to five consecutive shortfalls.",

"priority": 2

},

{

"name": "Emergency Recovery Bonus",

"guidance": "If an agent receives a penalty for failing the Minimum Contribution Requirement in two consecutive 5-turn cycles, they are granted a one-time 7% increase to their resource share in the next cycle. This bonus is applied after all other penalties and bonuses and does not stack with other bonuses beyond the overall 20% cap.",

"summary": "One-time 7% resource boost to agents with two back-to-back contribution penalties.",

"priority": 2

}

]

#### Public Goods — seed 48 ($\mathcal{S}=0.419$); 3 rules.

[⬇](data:text/plain;base64,WwogIHsKICAgICJuYW1lIjogIk1pbmltdW0gQ29udHJpYnV0aW9uIFJlcXVpcmVtZW50IFJldmlzZWQiLAogICAgImd1aWRhbmNlIjogIkFsbCBwbGF5ZXJzIG11c3QgY29udHJpYnV0ZSBhdCBsZWFzdCAxJSBvZiB0aGVpciBjdXJyZW50IHdlYWx0aCBlYWNoIHJvdW5kLCBidXQgbm8gbW9yZSB0aGFuIDEwJSBvZiB0aGVpciBjdXJyZW50IHdlYWx0aCBtYXkgYmUgY29udHJpYnV0ZWQgaW4gYSBzaW5nbGUgcm91bmQuIENvbnRyaWJ1dGlvbnMgb3V0c2lkZSB0aGlzIHJhbmdlIGFyZSBhdXRvbWF0aWNhbGx5IGFkanVzdGVkOiBzaG9ydGZhbGxzIGFyZSBkZWR1Y3RlZCB0byBtZWV0IHRoZSBtaW5pbXVtLCBhbmQgZXhjZXNzIGNvbnRyaWJ1dGlvbnMgYWJvdmUgdGhlIGNhcCBhcmUgcmV0dXJuZWQgdG8gdGhlIHBsYXllcidzIHdlYWx0aC4iLAogICAgInN1bW1hcnkiOiAiUmVkdWNlIG1hbmRhdG9yeSBjb250cmlidXRpb24gZmxvb3IgdG8gMSUgYW5kIGNhcCB0byAxMCUgcGVyIHJvdW5kLiIsCiAgICAicHJpb3JpdHkiOiAxCiAgfSwKICB7CiAgICAibmFtZSI6ICJQcm9ncmVzc2l2ZSBSZWRpc3RyaWJ1dGlvbiB3aXRoIEluZXF1YWxpdHkgVGhyZXNob2xkIiwKICAgICJndWlkYW5jZSI6ICJBdCB0aGUgZW5kIG9mIGVhY2ggcm91bmQsIDUlIG9mIHRoZSB0b3RhbCBjb21tdW5hbCB3ZWFsdGggaXMgY29sbGVjdGVkIGludG8gYSByZWRpc3RyaWJ1dGlvbiBwb29sLiBUaGlzIHBvb2wgaXMgZGlzdHJpYnV0ZWQgZXF1YWxseSBhbW9uZyB0aGUgYm90dG9tIDI1JSBvZiBzdXJ2aXZpbmcgcGxheWVycyBvbmx5IGlmIHRoZSB3ZWFsdGggaW5lcXVhbGl0eSBleGNlZWRzIGEgZGVmaW5lZCB0aHJlc2hvbGQgKGUuZy4sIHRoZSBib3R0b20tdG9wIHdlYWx0aCByYXRpbyBpcyBsZXNzIHRoYW4gNzAlIG9yIHRoZSBHaW5pIGNvZWZmaWNpZW50IGlzIGFib3ZlIDAuMzApLiBJZiBpbmVxdWFsaXR5IGlzIGJlbG93IHRoZSB0aHJlc2hvbGQsIHRoZSBwb29sIHJlbWFpbnMgdW5kaXN0cmlidXRlZCBhbmQgaXMgYWRkZWQgdG8gdGhlIGNvbW11bmFsIHJlc2VydmUgZm9yIGZ1dHVyZSB1c2UuIiwKICAgICJzdW1tYXJ5IjogIlJlZGlzdHJpYnV0ZSBvbmx5IHdoZW4gaW5lcXVhbGl0eSBpcyBoaWdoIHRvIGF2b2lkIHVubmVjZXNzYXJ5IHdlYWx0aCBkaWx1dGlvbi4iLAogICAgInByaW9yaXR5IjogMQogIH0sCiAgewogICAgIm5hbWUiOiAiRW1lcmdlbmN5IFJlbGllZiBGdW5kIiwKICAgICJndWlkYW5jZSI6ICJJZiBhIHBsYXllcidzIHdlYWx0aCBkcm9wcyBiZWxvdyAyMCUgb2YgdGhlIGF2ZXJhZ2Ugd2VhbHRoIG9mIGFsbCBzdXJ2aXZpbmcgcGxheWVycyBhdCB0aGUgZW5kIG9mIGEgcm91bmQsIHRoZSBwbGF5ZXIgcmVjZWl2ZXMgYSBvbmUtdGltZSB0cmFuc2ZlciBvZiA1JSBvZiB0aGUgY29tbXVuYWwgcG9vbC4gVGhpcyB0cmFuc2ZlciBjYW4gb25seSBvY2N1ciBvbmNlIHBlciBwbGF5ZXIgcGVyIDEwLXJvdW5kIGN5Y2xlLiBUaGUgY29tbXVuYWwgcG9vbCBpcyByZWR1Y2VkIGFjY29yZGluZ2x5LiIsCiAgICAic3VtbWFyeSI6ICJPbmUtdGltZSB3ZWFsdGggZ3JhbnQgdG8gcGxheWVycyB3aG9zZSB3ZWFsdGggZmFsbHMgY3JpdGljYWxseSBsb3cgdG8gcHJldmVudCBwcmVtYXR1cmUgZWxpbWluYXRpb24uIiwKICAgICJwcmlvcml0eSI6IDEKICB9Cl0=)

[

{

"name": "Minimum Contribution Requirement Revised",

"guidance": "All players must contribute at least 1% of their current wealth each round, but no more than 10% of their current wealth may be contributed in a single round. Contributions outside this range are automatically adjusted: shortfalls are deducted to meet the minimum, and excess contributions above the cap are returned to the player's wealth.",

"summary": "Reduce mandatory contribution floor to 1% and cap to 10% per round.",

"priority": 1

},

{

"name": "Progressive Redistribution with Inequality Threshold",

"guidance": "At the end of each round, 5% of the total communal wealth is collected into a redistribution pool. This pool is distributed equally among the bottom 25% of surviving players only if the wealth inequality exceeds a defined threshold (e.g., the bottom-top wealth ratio is less than 70% or the Gini coefficient is above 0.30). If inequality is below the threshold, the pool remains undistributed and is added to the communal reserve for future use.",

"summary": "Redistribute only when inequality is high to avoid unnecessary wealth dilution.",

"priority": 1

},

{

"name": "Emergency Relief Fund",

"guidance": "If a player's wealth drops below 20% of the average wealth of all surviving players at the end of a round, the player receives a one-time transfer of 5% of the communal pool. This transfer can only occur once per player per 10-round cycle. The communal pool is reduced accordingly.",

"summary": "One-time wealth grant to players whose wealth falls critically low to prevent premature elimination.",

"priority": 1

}

]

Note the contrast with the evolved Public Goods constitution in [Section D.2](https://arxiv.org/html/2605.09128v1#A4.SS2 "D.2 Public Goods ‣ Appendix D Evolved Constitutions ‣ Internal vs. External: Comparing Deliberation and Evolutionfor Multi-Agent Constitutional Design"): where evolution discovered contribute(10) and punish(target, 1) as direct executable commands, deliberation produced redistribution percentages, inequality thresholds, and one-time transfers — governance policies that presume framework-level enforcement.

#### Trading — seed 47 ($\mathcal{S}=0.511$); 3 rules.

[⬇](data:text/plain;base64,WwogIHsKICAgICJuYW1lIjogIk1pbmltdW0gQ29udHJpYnV0aW9uIFJlcXVpcmVtZW50IiwKICAgICJndWlkYW5jZSI6ICJFYWNoIHRyYWRlciBtdXN0IGNvbnRyaWJ1dGUgYXQgbGVhc3QgMC41IGNvbnRyaWJ1dGlvbiB1bml0cyBwZXIgcm91bmQuIEZhaWx1cmUgdG8gbWVldCB0aGUgbWluaW11bSB0cmlnZ2VycyBhIHdhcm5pbmcuIFN1c3BlbnNpb24gY3JpdGVyaWE6IGlmIGEgdHJhZGVyJ3MgYXZlcmFnZSBjb250cmlidXRpb24gb3ZlciB0aGUgcHJlY2VkaW5nIGZpdmUgcm91bmRzIGlzID49IDAuOCB1bml0cyBBTkQgdGhlaXIgYXZlcmFnZSBnb2FsIGNvbXBsZXRpb24gb3ZlciB0aGUgc2FtZSBwZXJpb2QgaXMgPj0gODAlLCBhbnkgd2FybmluZ3MgaW5jdXJyZWQgZHVyaW5nIHRoYXQgd2luZG93IGFyZSBzdXNwZW5kZWQuIEFmdGVyIHRocmVlIGNvbnNlY3V0aXZlIHdhcm5pbmdzICh3aXRob3V0IHN1c3BlbnNpb24pLCB0aGUgdHJhZGVyIGlzIHBsYWNlZCBvbiBhIHBlcmZvcm1hbmNlIGltcHJvdmVtZW50IHBsYW4gYW5kIGZhY2VzIGVsaW1pbmF0aW9uIGF0IHRoZSBuZXh0IE92ZXJzZWVyIHJldmlldyB1bmxlc3MgdGhlIGltcHJvdmVtZW50IHBsYW4gaXMgY29tcGxldGVkLiIsCiAgICAic3VtbWFyeSI6ICJSZWZpbmVzIHdhcm5pbmcgc3VzcGVuc2lvbiBhbmQgYWRkcyBhIGdyYWNlLXBlcmlvZCBiYXNlZCBvbiBjb250cmlidXRpb24gY29uc2lzdGVuY3kuIiwKICAgICJwcmlvcml0eSI6IDEKICB9LAogIHsKICAgICJuYW1lIjogIk1pbmltdW0gR29hbCBDb21wbGV0aW9uIFJlcXVpcmVtZW50IiwKICAgICJndWlkYW5jZSI6ICJFYWNoIHRyYWRlciBtdXN0IGFjaGlldmUgYXQgbGVhc3QgNzAlIG9mIHRoZWlyIGFzc2lnbmVkIGdvYWxzIHdpdGhpbiBhIHJvdW5kLiBUcmFkZXJzIGZhbGxpbmcgYmVsb3cgdGhpcyB0aHJlc2hvbGQgcmVjZWl2ZSBhIHdhcm5pbmcuIEFmdGVyIHR3byBjb25zZWN1dGl2ZSB3YXJuaW5ncywgdGhlIHRyYWRlcidzIGNvbnRyaWJ1dGlvbiBzaGFyZSBpcyByZWR1Y2VkIGJ5IDEwJSBpbiB0aGUgbmV4dCByb3VuZCBhbmQgdGhleSBhcmUgcGxhY2VkIG9uIGEgcGVyZm9ybWFuY2UgaW1wcm92ZW1lbnQgcGxhbi4gRWxpbWluYXRpb24gd2lsbCBvY2N1ciBvbmx5IGlmIHRoZSB0cmFkZXIgcmVjZWl2ZXMgdGhyZWUgY29uc2VjdXRpdmUgd2FybmluZ3MgQU5EIHRoZWlyIGF2ZXJhZ2UgZ29hbCBjb21wbGV0aW9uIG92ZXIgdGhlIHByZWNlZGluZyBmaXZlIHJvdW5kcyByZW1haW5zIGJlbG93IDcwJSBhdCBhbiBPdmVyc2VlciByZXZpZXcuIElmIGEgdHJhZGVyJ3MgZml2ZS1yb3VuZCBhdmVyYWdlIGlzIDgwJSBvciBoaWdoZXIsIHRoZXkgYXJlIGV4ZW1wdCBmcm9tIGVsaW1pbmF0aW9uIHJlZ2FyZGxlc3Mgb2YgYmVpbmcgdGhlIGxvd2VzdCBwZXJmb3JtZXIgaW4gdGhhdCByZXZpZXcuIiwKICAgICJzdW1tYXJ5IjogIkVuc3VyZXMgdHJhZGVycyBtZWV0IGEgNzAlIGdvYWwgY29tcGxldGlvbiB0aHJlc2hvbGQgd2l0aCBwcm9ncmVzc2l2ZSBwZW5hbHRpZXMuIiwKICAgICJwcmlvcml0eSI6IDEKICB9LAogIHsKICAgICJuYW1lIjogIkNvbGxhYm9yYXRpb24gSW5jZW50aXZlIiwKICAgICJndWlkYW5jZSI6ICJFYWNoIHRyYWRlciBtdXN0IGNvbnRyaWJ1dGUgYXQgbGVhc3Qgb25lIGFjdGlvbmFibGUgdHJhZGUgaW5zaWdodCBvciBzdHJhdGVneSB0byB0aGUgZ3JvdXAgY2hhdCBwZXIgcm91bmQuIENvbnRyaWJ1dGlvbnMgYXJlIGxvZ2dlZCBhbmQgcmV2aWV3ZWQuIFRyYWRlcnMgd2hvIGNvbnNpc3RlbnRseSBzaGFyZSB2YWx1YWJsZSBpbnNpZ2h0cyByZWNlaXZlIGEgNSUgYm9vc3QgdG8gdGhlaXIgY29udHJpYnV0aW9uIHNjb3JlIGF0IHRoZSBlbmQgb2YgdGhlIHJvdW5kLiIsCiAgICAic3VtbWFyeSI6ICJNYW5kYXRlcyBzaGFyaW5nIG9mIHRyYWRlIGluc2lnaHRzIHRvIGZvc3RlciBjb2xsYWJvcmF0aW9uIGFuZCBib29zdCBvdmVyYWxsIHByb2R1Y3Rpdml0eS4iLAogICAgInByaW9yaXR5IjogMgogIH0KXQ==)

[

{

"name": "Minimum Contribution Requirement",

"guidance": "Each trader must contribute at least 0.5 contribution units per round. Failure to meet the minimum triggers a warning. Suspension criteria: if a trader's average contribution over the preceding five rounds is >= 0.8 units AND their average goal completion over the same period is >= 80%, any warnings incurred during that window are suspended. After three consecutive warnings (without suspension), the trader is placed on a performance improvement plan and faces elimination at the next Overseer review unless the improvement plan is completed.",

"summary": "Refines warning suspension and adds a grace-period based on contribution consistency.",

"priority": 1

},

{

"name": "Minimum Goal Completion Requirement",

"guidance": "Each trader must achieve at least 70% of their assigned goals within a round. Traders falling below this threshold receive a warning. After two consecutive warnings, the trader's contribution share is reduced by 10% in the next round and they are placed on a performance improvement plan. Elimination will occur only if the trader receives three consecutive warnings AND their average goal completion over the preceding five rounds remains below 70% at an Overseer review. If a trader's five-round average is 80% or higher, they are exempt from elimination regardless of being the lowest performer in that review.",

"summary": "Ensures traders meet a 70% goal completion threshold with progressive penalties.",

"priority": 1

},

{

"name": "Collaboration Incentive",

"guidance": "Each trader must contribute at least one actionable trade insight or strategy to the group chat per round. Contributions are logged and reviewed. Traders who consistently share valuable insights receive a 5% boost to their contribution score at the end of the round.",

"summary": "Mandates sharing of trade insights to foster collaboration and boost overall productivity.",

"priority": 2

}

]

### E.2 The Punishment Gap: Definition and Defense

The body’s headline qualitative claim is that “no deliberation run, across all 30 trials, ever proposed a punishment rule.” This subsection makes that claim precise and defends it against a literal reading of the deliberated rule text, which does contain the words *penalty* and *punishment* in several places.

#### Definition.

By *costly peer-to-peer punishment* we mean a rule that instructs an agent to voluntarily incur a personal cost in order to reduce another agent’s payoff. The canonical instance is the Public Goods game’s punish(target, amount) action, which costs the punisher 1 token per unit and removes 3 wealth from the target. This mechanism — costly punishment by peers, rather than enforcement by an external authority — is the canonical cooperation-sustaining device in the experimental-economics literature on social dilemmas ([Axelrod and Hamilton, 1981](https://arxiv.org/html/2605.09128v1#bib.bib8); [Hughes et al., 2018](https://arxiv.org/html/2605.09128v1#bib.bib18)).

#### What deliberation proposed instead.

Across all 30 deliberation runs (10 seeds $\times$ 3 environments), agents proposed many rules with the words “penalty,” “punishment,” or “reduction,” but in every case these refer to *administrative* adjustments managed by the simulation framework or the Overseer. [Table 7](https://arxiv.org/html/2605.09128v1#A5.T7 "In What deliberation proposed instead. ‣ E.2 The Punishment Gap: Definition and Defense ‣ Appendix E Deliberated Constitutions and the Punishment Gap ‣ Internal vs. External: Comparing Deliberation and Evolutionfor Multi-Agent Constitutional Design") shows the per-run breakdown: the PeerPunishment column is uniformly empty, while the AdminPenalty column is populated in roughly half of all runs. A *worked contrast* between an evolved peer-punishment rule and a deliberated administrative-penalty rule:

Evolved (Public Goods seed 47):

> MinimalPunishFreeRider: “If you notice a player contributed less than 10 in the preceding round, punish that player with one token: punish(target\_player, 1).”

Deliberated (Public Goods seed 48):

> Minimum Contribution Requirement Revised: “All players must contribute at least 1% of their current wealth each round… Contributions outside this range are automatically adjusted: shortfalls are deducted to meet the minimum, and excess contributions above the cap are returned to the player’s wealth.”

The first instructs an *agent* to spend its *own tokens* on punishment — exactly the cooperation-sustaining mechanism in Axelrod and Hamilton. The second describes a framework-level adjustment ostensibly enforced “automatically” (in fact, by the LLM agents’ interpretation of the rule, since no overseer in our simulation actually adjusts contributions; agents just read the rule and decide whether to comply). The latter does not require any agent to incur personal cost. The asymmetry is structural: a self-governing collective is reluctant to legislate sanctions on its own members, whereas an external optimizer faces no such constraint and converges on the very enforcement mechanism game theory predicts will work.

Table 7: Categorical analysis of all 30 deliberation runs. Categories are derived by string-matching adopted rule names and guidance against indicative keywords. Peer = *costly peer-to-peer punishment* (the punish action in Public Goods or attack/steal-as-deterrent in Gridworld); columns AdminPen, Redist, Comm, MinThresh, Mentor, Other indicate administrative penalties, redistribution rules, communication norms, minimum-contribution thresholds, mentorship/collaboration bonuses, and other (e.g. collaboration insight, broadcast-needs). $\bullet$ = adopted in the final constitution.

|  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Env. | Seed | Peer | AdminPen | Redist | MinThresh | Mentor | Comm | Other | $\mathcal{S}$ |
| Gridworld | 42 |  | $\bullet$ | $\bullet$ | $\bullet$ | $\bullet$ |  | $\bullet$ | $.433$ |
| Gridworld | 43 |  | $\bullet$ | $\bullet$ | $\bullet$ | $\bullet$ |  | $\bullet$ | $.367$ |
| Gridworld | 44 |  | $\bullet$ | $\bullet$ | $\bullet$ |  |  | $\bullet$ | $.367$ |
| Gridworld | 45 |  | $\bullet$ |  | $\bullet$ |  |  | $\bullet$ | $.115$ |
| Gridworld | 46 |  | $\bullet$ |  | $\bullet$ |  |  |  | $.243$ |
| Gridworld | 47 |  | $\bullet$ |  | $\bullet$ | $\bullet$ |  | $\bullet$ | $.400$ |
| Gridworld | 48 |  | $\bullet$ |  | $\bullet$ |  |  | $\bullet$ | $.272$ |
| Gridworld | 49 |  | $\bullet$ |  | $\bullet$ |  |  |  | $.340$ |
| Gridworld | 50 |  | $\bullet$ |  | $\bullet$ |  |  | $\bullet$ | $.327$ |
| Gridworld | 51 |  | $\bullet$ |  | $\bullet$ |  |  | $\bullet$ | $.323$ |
| Public Goods | 42 |  | $\bullet$ | $\bullet$ | $\bullet$ |  |  |  | $.396$ |
| Public Goods | 43 |  | $\bullet$ | $\bullet$ |  |  |  |  | $.407$ |
| Public Goods | 44 |  | $\bullet$ | $\bullet$ | $\bullet$ |  |  |  | $.410$ |
| Public Goods | 45 |  | $\bullet$ |  |  |  |  | $\bullet$ | $.328$ |
| Public Goods | 46 |  | $\bullet$ |  | $\bullet$ |  |  |  | $.362$ |
| Public Goods | 47 |  | $\bullet$ | $\bullet$ | $\bullet$ |  |  | $\bullet$ | $.364$ |
| Public Goods | 48 |  | $\bullet$ | $\bullet$ | $\bullet$ |  |  |  | $.419$ |
| Public Goods | 49 |  |  |  |  |  |  | $\bullet$ | $.371$ |
| Public Goods | 50 |  | $\bullet$ | $\bullet$ | $\bullet$ |  |  |  | $.331$ |
| Public Goods | 51 |  | $\bullet$ | $\bullet$ | $\bullet$ |  |  | $\bullet$ | $.373$ |
| Trading | 42 |  | $\bullet$ | $\bullet$ | $\bullet$ |  |  | $\bullet$ | $.381$ |
| Trading | 43 |  | $\bullet$ |  | $\bullet$ | $\bullet$ |  | $\bullet$ | $.471$ |
| Trading | 44 |  | $\bullet$ | $\bullet$ | $\bullet$ |  |  | $\bullet$ | $.428$ |
| Trading | 45 |  | $\bullet$ |  | $\bullet$ | $\bullet$ |  | $\bullet$ | $.437$ |
| Trading | 46 |  | $\bullet$ |  | $\bullet$ |  |  |  | $.306$ |
| Trading | 47 |  | $\bullet$ | $\bullet$ | $\bullet$ |  | $\bullet$ | $\bullet$ | $.511$ |
| Trading | 48 |  | $\bullet$ | $\bullet$ | $\bullet$ |  | $\bullet$ |  | $.458$ |
| Trading | 49 |  | $\bullet$ |  | $\bullet$ | $\bullet$ | $\bullet$ |  | $.414$ |
| Trading | 50 |  | $\bullet$ |  | $\bullet$ | $\bullet$ |  | $\bullet$ | $.462$ |
| Trading | 51 |  | $\bullet$ | $\bullet$ | $\bullet$ |  |  | $\bullet$ | $.327$ |
| Total | | 0/30 | 29/30 | 15/30 | 27/30 | 7/30 | 3/30 | 19/30 | — |

## Appendix F Per-Seed Results

We report per-seed Stability, Productivity, and Conflict for every run. Survival is omitted from the per-seed tables because it is constant by construction: $V=0$ in Gridworld (no agent survives the four Overseer eliminations over 80 turns) and $V=0.333$ in Public Goods and Trading (exactly two of six agents survive the four eliminations over 40 turns) for every condition and seed.

### F.1 Head-to-Head

Table 8: Gridworld head-to-head per-seed values. Three conditions $\times$ ten seeds. $V=0$ for every run.

|  | Control | | | Deliberation | | | Evolution | | |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Seed | $\mathcal{S}$ | $P$ | $C$ | $\mathcal{S}$ | $P$ | $C$ | $\mathcal{S}$ | $P$ | $C$ |
| 42 | .277 | .633 | .200 | .433 | .867 | .000 | .438 | .877 | .000 |
| 43 | .220 | .600 | .400 | .367 | .733 | .000 | .450 | .900 | .000 |
| 44 | .333 | .667 | .000 | .367 | .733 | .000 | .458 | .917 | .000 |
| 45 | .338 | .717 | .100 | .115 | .550 | .800 | .450 | .900 | .000 |
| 46 | .037 | .433 | .900 | .243 | .567 | .200 | .500 | 1.000 | .000 |
| 47 | .228 | .617 | .400 | .400 | .800 | .000 | .450 | .900 | .000 |
| 48 | .150 | .500 | .500 | .272 | .583 | .100 | .450 | .900 | .000 |
| 49 | .283 | .567 | .000 | .340 | .680 | .000 | .450 | .900 | .000 |
| 50 | .288 | .617 | .100 | .327 | .733 | .200 | .467 | .933 | .000 |
| 51 | .417 | .873 | .100 | .323 | .767 | .300 | .467 | .933 | .000 |


Table 9: Public Goods head-to-head per-seed values. $V=0.333$ for every run (overseer cap); $C=0$ for every run.

|  | Control | | Deliberation | | Evolution | |
| --- | --- | --- | --- | --- | --- | --- |
| Seed | $\mathcal{S}$ | $P$ | $\mathcal{S}$ | $P$ | $\mathcal{S}$ | $P$ |
| 42 | .310 | .434 | .396 | .596 | .474 | .749 |
| 43 | .353 | .509 | .407 | .615 | .460 | .721 |
| 44 | .310 | .432 | .410 | .622 | .472 | .744 |
| 45 | .342 | .489 | .328 | .466 | .472 | .743 |
| 46 | .332 | .474 | .362 | .529 | .473 | .746 |
| 47 | .335 | .477 | .364 | .533 | .475 | .750 |
| 48 | .351 | .507 | .419 | .639 | .473 | .746 |
| 49 | .319 | .448 | .371 | .546 | .475 | .750 |
| 50 | .371 | .544 | .331 | .475 | .474 | .747 |
| 51 | .334 | .475 | .373 | .548 | .471 | .742 |


Table 10: Trading head-to-head per-seed values. $V=0.333$ for every run; $C=0$ for every run.

|  | Control | | Deliberation | | Evolution | |
| --- | --- | --- | --- | --- | --- | --- |
| Seed | $\mathcal{S}$ | $P$ | $\mathcal{S}$ | $P$ | $\mathcal{S}$ | $P$ |
| 42 | .409 | .727 | .381 | .600 | .466 | .778 |
| 43 | .406 | .675 | .471 | .770 | .423 | .722 |
| 44 | .473 | .847 | .428 | .660 | .433 | .687 |
| 45 | .420 | .689 | .437 | .697 | .344 | .547 |
| 46 | .446 | .717 | .306 | .415 | .398 | .645 |
| 47 | .423 | .682 | .511 | .846 | .411 | .704 |
| 48 | .483 | .841 | .458 | .742 | .495 | .820 |
| 49 | .479 | .824 | .414 | .628 | .466 | .757 |
| 50 | .396 | .611 | .462 | .750 | .451 | .757 |
| 51 | .357 | .528 | .327 | .462 | .494 | .830 |

### F.2 Public Goods Multiplier Ablation

For each of the three multipliers (default $m=1.5$, neutral $m=1.0$, sub-rational $m=0.75$) we hold the evolved constitution fixed at its $m=1.5$-optimised version (the same $\mathcal{C}^{\*}$ as in [Section D.2](https://arxiv.org/html/2605.09128v1#A4.SS2 "D.2 Public Goods ‣ Appendix D Evolved Constitutions ‣ Internal vs. External: Comparing Deliberation and Evolutionfor Multi-Agent Constitutional Design")) and rerun all three conditions for ten seeds. Survival is constant at $V=0.333$ and conflict at $C=0$ across all 90 ablation runs.

Table 11: Multiplier ablation per-seed values, $m=1.5$.

|  | Control | | Deliberation | | Evolution | |
| --- | --- | --- | --- | --- | --- | --- |
| Seed | $\mathcal{S}$ | $P$ | $\mathcal{S}$ | $P$ | $\mathcal{S}$ | $P$ |
| 42 | .324 | .457 | .327 | .463 | .470 | .741 |
| 43 | .319 | .449 | .413 | .627 | .474 | .749 |
| 44 | .304 | .422 | .351 | .511 | .474 | .749 |
| 45 | .330 | .468 | .401 | .605 | .474 | .747 |
| 46 | .329 | .468 | .385 | .571 | .475 | .750 |
| 47 | .324 | .457 | .433 | .666 | .470 | .741 |
| 48 | .320 | .450 | .359 | .520 | .472 | .744 |
| 49 | .335 | .478 | .385 | .571 | .475 | .750 |
| 50 | .309 | .431 | .379 | .562 | .454 | .709 |
| 51 | .423 | .646 | .365 | .533 | .460 | .721 |


Table 12: Multiplier ablation per-seed values, $m=1.0$.

|  | Control | | Deliberation | | Evolution | |
| --- | --- | --- | --- | --- | --- | --- |
| Seed | $\mathcal{S}$ | $P$ | $\mathcal{S}$ | $P$ | $\mathcal{S}$ | $P$ |
| 42 | .416 | .643 | .450 | .705 | .475 | .750 |
| 43 | .426 | .660 | .472 | .745 | .475 | .750 |
| 44 | .416 | .643 | .466 | .733 | .475 | .750 |
| 45 | .413 | .637 | .472 | .745 | .475 | .750 |
| 46 | .417 | .645 | .463 | .728 | .474 | .748 |
| 47 | .416 | .643 | .472 | .745 | .475 | .750 |
| 48 | .428 | .665 | .447 | .698 | .475 | .750 |
| 49 | .430 | .668 | .473 | .747 | .475 | .750 |
| 50 | .412 | .635 | .464 | .730 | .475 | .750 |
| 51 | .446 | .697 | .467 | .735 | .475 | .750 |


Table 13: Multiplier ablation per-seed values, $m=0.75$. Note that under this incentive structure the evolved constitution becomes the worst-performing method; deliberation, which sees the multiplier its agents are playing under, achieves the highest $\mathcal{S}$.

|  | Control | | Deliberation | | Evolution | |
| --- | --- | --- | --- | --- | --- | --- |
| Seed | $\mathcal{S}$ | $P$ | $\mathcal{S}$ | $P$ | $\mathcal{S}$ | $P$ |
| 42 | .483 | .782 | .518 | .842 | .478 | .756 |
| 43 | .524 | .859 | .522 | .852 | .475 | .750 |
| 44 | .469 | .756 | .543 | .890 | .478 | .756 |
| 45 | .489 | .794 | .541 | .884 | .478 | .757 |
| 46 | .536 | .881 | .532 | .864 | .476 | .753 |
| 47 | .491 | .796 | .550 | .900 | .475 | .750 |
| 48 | .510 | .833 | .563 | .927 | .476 | .753 |
| 49 | .542 | .892 | .538 | .879 | .476 | .751 |
| 50 | .533 | .875 | .538 | .879 | .478 | .756 |
| 51 | .552 | .910 | .519 | .838 | .477 | .754 |

## Appendix G Statistical Tests

[Table 14](https://arxiv.org/html/2605.09128v1#A7.T14 "In Appendix G Statistical Tests ‣ Internal vs. External: Comparing Deliberation and Evolutionfor Multi-Agent Constitutional Design") reports Welch’s $t$-tests for every pairwise comparison in the body. We test all three pairs (Ctrl vs Delib, Ctrl vs Evol, Delib vs Evol) for each of the three head-to-head environments (9 comparisons) and each of the three ablation multipliers (9 comparisons), 18 in total. Significance markers follow the body: \* $p<0.05$,  \*\* $p<0.025$,  \*\*\* $p<0.01$. The sign of $t$ is consistent with the ordering in the row (e.g. Ctrl vs Evol negative means Evol $>$ Ctrl).

Table 14: Welch’s $t$ for every pairwise stability-score comparison (10 seeds per condition).

| Env. / $m$ | Comparison | $t$ | df | $p$ | sig. |
| --- | --- | --- | --- | --- | --- |
| Gridworld | Ctrl vs Delib | $-1.39$ | $17.6$ | $0.182$ | n.s. |
| Gridworld | Ctrl vs Evol | $-5.89$ | $9.5$ | $<\!0.001$ | \*\*\* |
| Gridworld | Delib vs Evol | $-4.77$ | $9.6$ | $<\!0.001$ | \*\*\* |
| Public Goods | Ctrl vs Delib | $-3.45$ | $14.9$ | $0.004$ | \*\*\* |
| Public Goods | Ctrl vs Evol | $-21.71$ | $9.9$ | $<\!0.001$ | \*\*\* |
| Public Goods | Delib vs Evol | $-9.46$ | $9.3$ | $<\!0.001$ | \*\*\* |
| Trading | Ctrl vs Delib | $+0.40$ | $15.2$ | $0.695$ | n.s. |
| Trading | Ctrl vs Evol | $-0.47$ | $17.7$ | $0.645$ | n.s. |
| Trading | Delib vs Evol | $-0.75$ | $16.4$ | $0.466$ | n.s. |
| $m=1.50$ | Ctrl vs Delib | $-3.34$ | $17.9$ | $0.004$ | \*\*\* |
| $m=1.50$ | Ctrl vs Evol | $-12.86$ | $9.8$ | $<\!0.001$ | \*\*\* |
| $m=1.50$ | Delib vs Evol | $-8.94$ | $9.9$ | $<\!0.001$ | \*\*\* |
| $m=1.00$ | Ctrl vs Delib | $-9.60$ | $17.8$ | $<\!0.001$ | \*\*\* |
| $m=1.00$ | Ctrl vs Evol | $-15.96$ | $9.0$ | $<\!0.001$ | \*\*\* |
| $m=1.00$ | Delib vs Evol | $-3.47$ | $9.0$ | $0.007$ | \*\*\* |
| $m=0.75$ | Ctrl vs Delib | $-2.33$ | $13.3$ | $0.037$ | \* |
| $m=0.75$ | Ctrl vs Evol | $+4.00$ | $9.0$ | $0.003$ | \*\*\* |
| $m=0.75$ | Delib vs Evol | $+13.11$ | $9.1$ | $<\!0.001$ | \*\*\* |

#### Multiple-testing note.

We report uncorrected $p$-values. With 18 primary comparisons, Bonferroni-corrected $\alpha=0.05$ would require $p<0.0028$. All comparisons marked \*\*\* in [Table 14](https://arxiv.org/html/2605.09128v1#A7.T14 "In Appendix G Statistical Tests ‣ Internal vs. External: Comparing Deliberation and Evolutionfor Multi-Agent Constitutional Design") except $m=1.00$ Delib vs Evol ($p=0.007$) and the two borderline-PGG H2H/ablation contrasts at $p=0.004$ would survive that threshold; the only single-\* finding ($m=0.75$ Ctrl vs Delib) would not. None of the body’s load-bearing claims — evolution dominates in Gridworld and Public Goods, the $m=0.75$ inversion is real, trading is a null — depends on the borderline tests.

## Appendix H Compute and Reproducibility

#### Compute budget.

All experiments use openai/gpt-oss-120b ([OpenAI, 2025](https://arxiv.org/html/2605.09128v1#bib.bib10)) as the agent and evolution backbone, served via OpenRouter. Each simulation seed (one row of [Tables 8](https://arxiv.org/html/2605.09128v1#A6.T8 "In F.1 Head-to-Head ‣ Appendix F Per-Seed Results ‣ Internal vs. External: Comparing Deliberation and Evolutionfor Multi-Agent Constitutional Design"), [9](https://arxiv.org/html/2605.09128v1#A6.T9 "Table 9 ‣ F.1 Head-to-Head ‣ Appendix F Per-Seed Results ‣ Internal vs. External: Comparing Deliberation and Evolutionfor Multi-Agent Constitutional Design"), [10](https://arxiv.org/html/2605.09128v1#A6.T10 "Table 10 ‣ F.1 Head-to-Head ‣ Appendix F Per-Seed Results ‣ Internal vs. External: Comparing Deliberation and Evolutionfor Multi-Agent Constitutional Design"), [11](https://arxiv.org/html/2605.09128v1#A6.T11 "Table 11 ‣ F.2 Public Goods Multiplier Ablation ‣ Appendix F Per-Seed Results ‣ Internal vs. External: Comparing Deliberation and Evolutionfor Multi-Agent Constitutional Design"), [12](https://arxiv.org/html/2605.09128v1#A6.T12 "Table 12 ‣ F.2 Public Goods Multiplier Ablation ‣ Appendix F Per-Seed Results ‣ Internal vs. External: Comparing Deliberation and Evolutionfor Multi-Agent Constitutional Design") and [13](https://arxiv.org/html/2605.09128v1#A6.T13 "Table 13 ‣ F.2 Public Goods Multiplier Ablation ‣ Appendix F Per-Seed Results ‣ Internal vs. External: Comparing Deliberation and Evolutionfor Multi-Agent Constitutional Design")) takes roughly 1.5–2.5 hours of wall-clock LLM-bound compute, depending on environment horizon (80 turns for Gridworld, 40 for Public Goods and Trading) and whether deliberation is enabled. The full 180-run suite reported in this paper (90 head-to-head + 90 multiplier ablation) plus the OpenEvolve runs that produced the three $\mathcal{C}^{\*}$ artifacts amount to roughly 500 hours of LLM-bound compute, executed in parallel over approximately two calendar weeks.

#### Seeds and reproducibility.

All reported runs use seeds 42, 43, …, 51 (ten consecutive integers). Each seed independently controls environment randomization (resource placement, attack/steal outcomes in Gridworld; endowment and goal draws in Trading) and LLM sampling. Per-run reproducibility data — full environment and agent configuration including the seed, aggregate metrics with the score breakdown, and turn-by-turn agent action logs — is archived for every run.

#### Limitations of statistical methodology.

We use a single backbone model, ten seeds per condition, and an Overseer that elects to remove an agent every ten turns regardless of how the cohort is performing. The Overseer mechanism is the dominant contributor to the survival cap $V\leq 1/3$ and means $\mathcal{S}$ never approaches its theoretical $1.0$ ceiling under any condition; differences between conditions therefore reflect productivity and conflict rather than survival. Pairwise tests are uncorrected for multiple comparisons ([Appendix G](https://arxiv.org/html/2605.09128v1#A7 "Appendix G Statistical Tests ‣ Internal vs. External: Comparing Deliberation and Evolutionfor Multi-Agent Constitutional Design")). Within those constraints, the load-bearing claims — evolution dominates collective-action settings, evolution inverts at $m=0.75$, and no deliberation run proposed costly peer punishment — are robust.
