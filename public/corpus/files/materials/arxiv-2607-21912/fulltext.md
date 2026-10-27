---
id: arxiv-2607-21912-text
type: material
title: Reliability-Contagion Feasibility in LLM Multi-Agent Networks
work_id: arxiv-2607-21912
source_url: https://arxiv.org/html/2607.21912v1
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять
  с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.
language: original
sha256_text: 6328cec9816fb7a9d3da00d19f78f7da0e1980b60858175f110c5d16ad82625c
---

> Источник: [https://arxiv.org/html/2607.21912v1](https://arxiv.org/html/2607.21912v1). Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.

# Reliability–Contagion Feasibility in LLM Multi-Agent Networks

Ruiwu Niu
Affiliation: 

Department of Applied Data Science, Hong Kong Shue Yan University, Hong Kong SAR, China
  
  
Xincheng Shu
Affiliation: Computational Communication Research Center, Beijing Normal University, Zhuhai 519087, China
Affiliation: School of Journalism and Communication, Beijing Normal University, Beijing 100875, China
  
Ying Zhao
Affiliation: Department of Electrical Engineering, City University of Hong Kong, Kowloon, Hong Kong SAR, China
  
Emails: rniu@hksyu.edu (R. Niu); yzhao396-c@my.cityu.edu.hk (Y. Zhao)

Draft of July 23, 2026

###### Abstract

Communication allows large language model agents to pool evidence, but it also creates paths along which an erroneous claim can spread. We formulate a correction-aware network model that tracks susceptible, exposed, infectious, and corrected agents and derive its early-invasion condition for heterogeneous communication networks. We then couple this propagation model to an analytic majority-vote benchmark in which a clean-task reliability target imposes a minimum connectivity requirement. Under fixed exposure per communication edge, reliability and error control impose opposing graph constraints. We characterize when their intersection is empty and when it contains an intermediate connectivity range, and identify regular graphs that attain the smallest invasion factor within the reliable graph class when such graphs exist. Under a fixed sender budget, the homogeneous first-order threshold is independent of network density, showing that the communication-budget convention determines whether added edges increase early propagation risk. Finite-network simulations on 21,000 trajectories illustrate these directional predictions. A controlled grok-4.3 experiment then evaluates three six-node topologies on 36 new closed-world tasks, with a balanced 12-task subset continued to full cascades. Mean first-generation offspring increased from 0.667 to 1.333 and 1.667 as degree increased from 2 to 4 and 5, while the adoption fraction among exposed neighbours remained 0.333. Mean non-seed erroneous adoption in the full-cascade subset was 0.200, 0.333, and 0.333. Together, these results provide a tractable basis for selecting connectivity under explicit reliability and propagation constraints.

## 1 Introduction

Large language models are increasingly organized as multi-agent systems in which several model instances propose answers, exchange intermediate reasoning, critique one another, and aggregate a final decision. Communication can improve reasoning and factuality by exposing an agent to evidence or solution paths that it did not produce independently [[4](https://arxiv.org/html/2607.21912v1#bib.bib1), [10](https://arxiv.org/html/2607.21912v1#bib.bib3)]. The gain depends on the interaction protocol. Multi-agent debate does not consistently outperform voting, ensembling, or self-consistency across tasks and hyperparameter choices [[17](https://arxiv.org/html/2607.21912v1#bib.bib2), [2](https://arxiv.org/html/2607.21912v1#bib.bib4)]. These findings make the communication graph part of the model design.

Communication also couples agent failures. An agent can conform to an incorrect peer or retain an unsupported premise across later rounds [[1](https://arxiv.org/html/2607.21912v1#bib.bib5)]. Adversarial work shows related propagation mechanisms. Agent Smith demonstrated infectious jailbreak behavior under randomized pairwise interaction among multimodal agents [[6](https://arxiv.org/html/2607.21912v1#bib.bib12)], and communication attacks can alter messages in established multi-agent workflows [[7](https://arxiv.org/html/2607.21912v1#bib.bib13)]. These settings differ from ordinary factual errors, yet they establish that an interaction channel can amplify a failure after it enters the network.

Topology has consequently become an explicit design variable. Sparse debate graphs can reduce token cost while retaining task accuracy in the evaluated settings [[9](https://arxiv.org/html/2607.21912v1#bib.bib6)]. GPTSwarm represents language-agent systems as optimizable computational graphs [[24](https://arxiv.org/html/2607.21912v1#bib.bib7)]; AgentPrune removes redundant or harmful messages [[21](https://arxiv.org/html/2607.21912v1#bib.bib8)]; and G-Designer learns task-dependent communication graphs [[22](https://arxiv.org/html/2607.21912v1#bib.bib9)]. This literature primarily optimizes task accuracy, robustness, or cost for a given evaluation distribution.

The closest empirical antecedents study error propagation directly. Shen et al. [[16](https://arxiv.org/html/2607.21912v1#bib.bib10)] use counterfactual interventions to measure how an injected correct or incorrect agent output changes the final system decision across communication topologies. They find that moderately sparse graphs can suppress errors while preserving useful information and introduce a learned topology design. Their contribution is empirical causal analysis and topology optimization; it does not derive an epidemic threshold or a graph-class feasibility boundary. NetSafe reports that topology and connectivity also affect vulnerability under several multi-agent attacks [[20](https://arxiv.org/html/2607.21912v1#bib.bib11)]. These studies establish empirical links among sparsity, information flow, and robustness. The remaining question is analytic: at fixed node count, when does a graph exist that meets both a clean-reliability requirement and a subcritical error-propagation requirement?

Network epidemiology provides a natural language for the propagation side. Next-generation operators define reproduction ratios in heterogeneous compartmental systems [[3](https://arxiv.org/html/2607.21912v1#bib.bib14), [18](https://arxiv.org/html/2607.21912v1#bib.bib15)], and node-level network mean-field models relate invasion conditions to the spectral radius of an interaction matrix [[19](https://arxiv.org/html/2607.21912v1#bib.bib16)]. Our earlier SEIHR studies provide part of the methodological background for the present work. A deterministic SEIHR model treated exposed individuals as infectious, represented hospitalization explicitly, incorporated human migration, and derived a basic reproduction number for studying control measures [[15](https://arxiv.org/html/2607.21912v1#bib.bib23)]. A stochastic extension described daily fluctuations in infections and hospitalizations and established sufficient conditions for stochastic stability of the disease-free equilibrium [[14](https://arxiv.org/html/2607.21912v1#bib.bib24)]. The present SEICS formulation retains interpretable compartments and threshold analysis while assigning states to observable claim-handling events on an explicit agent communication network.

Rumor models have also adapted epidemic tools to information diffusion on heterogeneous networks [[13](https://arxiv.org/html/2607.21912v1#bib.bib18)]. They include memory loss, denial, and correction. The SIHR model represents forgetting and remembering [[23](https://arxiv.org/html/2607.21912v1#bib.bib19)]. Liu et al. [[11](https://arxiv.org/html/2607.21912v1#bib.bib20)] give a population-level four-compartment model in which network structure is compressed into an effective contact parameter. Their rumor-neutral, rumor-received, rumor-believed, and rumor-denied populations include correction and forgetting, and the model yields a next-generation threshold. These results are mathematical precedents for a correction-aware claim process.

The LLM setting adds two operational requirements. First, a state must be assigned from message traces rather than from a latent belief. We therefore follow one pre-specified claim and record its reception, use, retransmission, and explicit correction. Second, topology changes communication volume unless the budget convention is fixed. With constant exposure per edge, adding links increases a sender’s total influence. With a fixed sender budget, the same exposure is divided among more outgoing links. Contact-based epidemic models already show that reactive and degree-normalized contact processes have different spectral thresholds [[5](https://arxiv.org/html/2607.21912v1#bib.bib17)]. This distinction is equally important in agent systems.

Recent preprints have proposed mathematical descriptions of multi-agent error propagation. Collective Hallucination studies dynamic network effects and defenses for unsupported claims [[8](https://arxiv.org/html/2607.21912v1#bib.bib21)]. Contagion Networks models evaluator-preference transmission with an empirically estimated cross-agent contagion matrix and spectral propagation regimes [[12](https://arxiv.org/html/2607.21912v1#bib.bib22)]. Its propagated variable and operator differ from the claim-state SEICS process considered here, and it does not impose a clean-reliability degree constraint.

This paper develops a compact theory around three results. First, a heterogeneous claim-level SEICS model yields a next-generation operator that separates exposure, adoption, pre-transmission rejection, reactive correction, and correction retention. Second, an independent-signal majority benchmark converts a clean-reliability target into a minimum-degree condition. Combining it with the spectral invasion condition gives graph-class existence and impossibility results and defines an explicit feasibility problem for LLM-agent communication. Third, a fixed-sender analysis shows exactly where the density effect disappears from the homogeneous spectral threshold. The normalized-threshold identity has a classical contact-process precedent; its role here is to expose the communication-budget assumption behind the LLM topology trade-off.

The empirical scope is deliberately small. We use finite-network Gillespie simulations to check implementation consistency and the direction of cascade risk under the stated process. A controlled real-model network experiment then measures first-generation propagation on 36 new tasks and full-cascade reach on a balanced 12-task subset along a nested edge-addition path. The analytic reliability benchmark and the propagation experiments remain separate pieces of evidence.

## 2 Claim-level network SEICS model

Let $G=(V,E)$ contain $N$ agents. We use the convention $A\_{ij}=1$ when agent $j$ can send to agent $i$. The analysis follows one externally checkable false claim. Each node occupies one observable state:

- •

  $S$: the claim is absent from the active trace and no retained correction is present;
- •

  $E$: the claim has been received, but the agent has not asserted or retransmitted it;
- •

  $I$: the agent asserts, uses, or retransmits the claim as true;
- •

  $C$: the agent explicitly rejects the claim while correction evidence remains available.

[Figure 1](https://arxiv.org/html/2607.21912v1#S2.F1 "In 2 Claim-level network SEICS model ‣ Reliability–Contagion Feasibility in LLM Multi-Agent Networks") summarizes the observable transition pipeline. Incoming messages carrying the claim move a susceptible node from S to E; adoption then moves it to I, and explicit correction moves it to C. Two correction routes bypass retransmission: an exposed node can reject the claim before entering I, and a susceptible node can verify the claim prophylactically. Loss of retained correction returns C to S.

Figure 1: Claim-level SEICS transition pipeline. The main path is S$\rightarrow$E through incoming exposure at rate $\lambda\_{i}=\sum\_{j}T\_{ij}x\_{j}$, E$\rightarrow$I through adoption at rate $\sigma\_{i}$, and I$\rightarrow$C through reactive correction at rate $\gamma\_{i}$. An exposed node can reject the claim before retransmission through E$\rightarrow$C at rate $\nu\_{i}$, and prophylactic verification moves S$\rightarrow$C at rate $v\_{i}$. Correction loss returns C$\rightarrow$S at rate $\omega\_{i}$. States are assigned from observable message traces. The diagram represents the deterministic node-level mean-field mechanism in ([1](https://arxiv.org/html/2607.21912v1#S2.E1 "Equation 1 ‣ 2 Claim-level network SEICS model ‣ Reliability–Contagion Feasibility in LLM Multi-Agent Networks")); it is not an empirical result.

Let $T\_{ij}\geq 0$ be the instantaneous exposure rate from $j$ to $i$. For node probabilities $s\_{i},e\_{i},x\_{i},c\_{i}$, define $\lambda\_{i}=\sum\_{j}T\_{ij}x\_{j}$. The deterministic quenched mean-field model is

|  |  |  |  |
| --- | --- | --- | --- |
|  | $\displaystyle\dot{s}\_{i}$ | $\displaystyle=-s\_{i}\lambda\_{i}-v\_{i}s\_{i}+\omega\_{i}c\_{i},$ |  |
|  |  |  |  |
| --- | --- | --- | --- |
|  | $\displaystyle\dot{e}\_{i}$ | $\displaystyle=s\_{i}\lambda\_{i}-(\sigma\_{i}+\nu\_{i})e\_{i},$ |  |
|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  | $\displaystyle\dot{x}\_{i}$ | $\displaystyle=\sigma\_{i}e\_{i}-\gamma\_{i}x\_{i},$ |  | (1) |
|  |  |  |  |
| --- | --- | --- | --- |
|  | $\displaystyle\dot{c}\_{i}$ | $\displaystyle=\nu\_{i}e\_{i}+\gamma\_{i}x\_{i}+v\_{i}s\_{i}-\omega\_{i}c\_{i}.$ |  |

Here $\sigma\_{i}$ is adoption, $\nu\_{i}$ is rejection before retransmission, $\gamma\_{i}$ is reactive correction, $\omega\_{i}$ is correction loss, and $v\_{i}$ is prophylactic verification. Equation ([1](https://arxiv.org/html/2607.21912v1#S2.E1 "Equation 1 ‣ 2 Claim-level network SEICS model ‣ Reliability–Contagion Feasibility in LLM Multi-Agent Networks")) uses the closure $\Pr(S\_{i},I\_{j})\approx s\_{i}x\_{j}$. The exact finite stochastic process has joint node states and is treated separately in [section 6](https://arxiv.org/html/2607.21912v1#S6 "6 Finite-network stochastic illustration ‣ Reliability–Contagion Feasibility in LLM Multi-Agent Networks").

At the claim-free equilibrium,

|  |  |  |
| --- | --- | --- |
|  | $$s\_{i}^{0}=\frac{\omega\_{i}}{v\_{i}+\omega\_{i}},\qquad c\_{i}^{0}=\frac{v\_{i}}{v\_{i}+\omega\_{i}}.$$ |  |

Define

|  |  |  |
| --- | --- | --- |
|  | $$P=\operatorname{diag}\!\left(s\_{i}^{0}\frac{\sigma\_{i}}{\sigma\_{i}+\nu\_{i}}\right),\qquad\Gamma=\operatorname{diag}(\gamma\_{i}),\qquad L=T\Gamma^{-1}.$$ |  |

The matrix $L$ records expected lifetime exposure during one infectious episode.

###### Theorem 1 (Heterogeneous early-invasion condition).

Assume $T\geq 0$, $\sigma\_{i},\gamma\_{i}>0$, $\nu\_{i},v\_{i},\omega\_{i}\geq 0$, and $v\_{i}+\omega\_{i}>0$. The claim-level next-generation matrix is

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$K=PL=PT\Gamma^{-1},\qquad R\_{\mathrm{err}}=\rho(K).$$ |  | (2) |

On the invariant product of node probability simplices, the claim-free equilibrium of ([1](https://arxiv.org/html/2607.21912v1#S2.E1 "Equation 1 ‣ 2 Claim-level network SEICS model ‣ Reliability–Contagion Feasibility in LLM Multi-Agent Networks")) is locally asymptotically stable when $R\_{\mathrm{err}}<1$ and unstable when $R\_{\mathrm{err}}>1$, subject to the usual irreducibility condition.

###### Proof.

Let $S^{0}=\operatorname{diag}(s\_{i}^{0})$, $\Sigma=\operatorname{diag}(\sigma\_{i})$, and $N\_{\nu}=\operatorname{diag}(\nu\_{i})$. The linearized infected subsystem $(e,x)$ has the standard decomposition

|  |  |  |
| --- | --- | --- |
|  | $$F=\begin{pmatrix}0&S^{0}T\\ 0&0\end{pmatrix},\qquad V=\begin{pmatrix}\Sigma+N\_{\nu}&0\\ -\Sigma&\Gamma\end{pmatrix}.$$ |  |

The nonzero next-generation block of $FV^{-1}$ is

|  |  |  |
| --- | --- | --- |
|  | $$S^{0}T\Gamma^{-1}\Sigma(\Sigma+N\_{\nu})^{-1}.$$ |  |

The matrices $AB$ and $BA$ have the same nonzero eigenvalues. Since the diagonal factors commute, the spectral radius equals that of

|  |  |  |
| --- | --- | --- |
|  | $$\Sigma(\Sigma+N\_{\nu})^{-1}S^{0}T\Gamma^{-1}=PT\Gamma^{-1}.$$ |  |

The local result follows from the next-generation criterion [[18](https://arxiv.org/html/2607.21912v1#bib.bib15)]. At equality the linearization is non-hyperbolic.
∎

Theorem [1](https://arxiv.org/html/2607.21912v1#Thmtheorem1 "Theorem 1 (Heterogeneous early-invasion condition). ‣ 2 Claim-level network SEICS model ‣ Reliability–Contagion Feasibility in LLM Multi-Agent Networks") is exact for the deterministic system ([1](https://arxiv.org/html/2607.21912v1#S2.E1 "Equation 1 ‣ 2 Claim-level network SEICS model ‣ Reliability–Contagion Feasibility in LLM Multi-Agent Networks")). In a finite continuous-time Markov chain, extinction remains possible above one and finite cascade probabilities vary smoothly with parameters. We use $R\_{\mathrm{err}}$ as a mean-field early-invasion factor.

## 3 Clean reliability benchmark

This benchmark is a fully specified analytic test rather than a task dataset or a fitted model-accuracy curve. It holds the network size $N$ fixed and varies a node’s degree $d$. Each node receives one private signal and one signal from each of its $d$ neighbours; all $m=d+1$ signals are independent, have the same probability $p>1/2$ of being correct, and are combined once by majority vote. A strict majority is selected, and an even tie is broken fairly. The benchmark excludes repeated discussion, source weighting, cross-agent correlation, and attention limits. Its outputs are a degree-to-accuracy curve and the minimum degree needed to reach a target accuracy. In plain terms, it asks how many independent opinions a node needs before a simple majority reaches the required accuracy. Define

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$B\_{m}(p)=\Pr\!\left[\operatorname{Bin}(m,p)>\frac{m}{2}\right]+\frac{1}{2}\Pr\!\left[\operatorname{Bin}(m,p)=\frac{m}{2}\right],\qquad Q(d;p)=B\_{d+1}(p).$$ |  | (3) |

###### Lemma 1 (Monotonicity).

For $p\geq 1/2$, $B\_{m}(p)$ is non-decreasing in $m$. In particular,

|  |  |  |
| --- | --- | --- |
|  | $$B\_{2r}(p)=B\_{2r-1}(p),$$ |  |

and

|  |  |  |
| --- | --- | --- |
|  | $$B\_{2r+1}(p)-B\_{2r}(p)=\left(p-\frac{1}{2}\right)\binom{2r}{r}[p(1-p)]^{r}\geq 0.$$ |  |

###### Proof.

Condition on the final Bernoulli signal and separate the central binomial event. Terms outside the central event cancel, yielding the two identities.
∎

For a target $Q\_{\min}$, let

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$k\_{\star}=\min\{d\in\{0,\ldots,N-1\}:Q(d;p)\geq Q\_{\min}\}.$$ |  | (4) |

When this set is nonempty, every node meets the reliability target exactly when the graph satisfies $\delta(G)\geq k\_{\star}$. Equation ([3](https://arxiv.org/html/2607.21912v1#S3.E3 "Equation 3 ‣ 3 Clean reliability benchmark ‣ Reliability–Contagion Feasibility in LLM Multi-Agent Networks")) is an analytic surrogate. Correlated agent messages, shared model errors, and attention limits can change the empirical reliability curve. Figure [2](https://arxiv.org/html/2607.21912v1#S4.F2 "Figure 2 ‣ 4 Reliable and subcritical graph classes ‣ Reliability–Contagion Feasibility in LLM Multi-Agent Networks")a plots this benchmark for the illustrative parameter choice used below; it is separate from the real-model experiment.

## 4 Reliable and subcritical graph classes

Consider homogeneous effective susceptibility $q=s^{0}\sigma/(\sigma+\nu)$ and lifetime exposure $L=\tau A$, where $\tau\geq 0$ is fixed per edge. Then

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$K=q\tau A,\qquad R\_{\mathrm{err}}(G)=q\tau\rho(A).$$ |  | (5) |

###### Theorem 2 (Reliability–contagion feasibility boundary).

Fix $N$, $p>1/2$, and a finite $k\_{\star}\in\{1,\ldots,N-1\}$ from ([4](https://arxiv.org/html/2607.21912v1#S3.E4 "Equation 4 ‣ 3 Clean reliability benchmark ‣ Reliability–Contagion Feasibility in LLM Multi-Agent Networks")). Let $q,\tau\geq 0$. Over connected, simple, unweighted, undirected graphs on $N$ nodes, every graph meeting the per-node reliability target satisfies

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$R\_{\mathrm{err}}(G)\geq q\tau k\_{\star}.$$ |  | (6) |

Consequently:

1. 1.

   if $q\tau k\_{\star}\geq 1$, no graph in the reliable class is strictly subcritical;
2. 2.

   if $q\tau k\_{\star}<1$ and a connected simple $k\_{\star}$-regular graph exists, that graph is reliable, strictly subcritical, and minimizes $R\_{\mathrm{err}}$ over the reliable graph class.

###### Proof.

For an undirected graph, the Rayleigh quotient at the all-ones vector gives

|  |  |  |
| --- | --- | --- |
|  | $$\rho(A)\geq\bar{d}\geq\delta(G)\geq k\_{\star}.$$ |  |

Substitution into ([5](https://arxiv.org/html/2607.21912v1#S4.E5 "Equation 5 ‣ 4 Reliable and subcritical graph classes ‣ Reliability–Contagion Feasibility in LLM Multi-Agent Networks")) proves ([6](https://arxiv.org/html/2607.21912v1#S4.E6 "Equation 6 ‣ Theorem 2 (Reliability–contagion feasibility boundary). ‣ 4 Reliable and subcritical graph classes ‣ Reliability–Contagion Feasibility in LLM Multi-Agent Networks")). A $k\_{\star}$-regular graph has $\rho(A)=k\_{\star}$, attains the lower bound, and is strictly subcritical under the second condition.
∎

In plain terms, accuracy requires enough links for agents to compare independent answers, while error control requires few enough effective links to keep a mistake from multiplying; a usable network exists only when both requirements can be met. This interpretation retains the graph-class, homogeneity, and fixed-per-edge assumptions stated in the theorem.

The constructive part is conditional on the usual degree and parity requirements for a connected regular graph. When $q\tau>0$, the feasible degrees in a regular density sweep satisfy

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$k\_{\star}\leq k<\frac{1}{q\tau}.$$ |  | (7) |

This interval is the precise intermediate-connectivity region in the homogeneous benchmark. If $q\tau=0$, the propagation constraint is vacuous and every feasible regular degree $k\geq k\_{\star}$ is subcritical.

For illustration, set $N=32$, $p=0.65$, $Q\_{\min}=0.90$, and $\tau=0.12$. Equation ([4](https://arxiv.org/html/2607.21912v1#S3.E4 "Equation 4 ‣ 3 Clean reliability benchmark ‣ Reliability–Contagion Feasibility in LLM Multi-Agent Networks")) gives $k\_{\star}=16$, and the critical susceptibility at the lower bound is $q\_{\mathrm{crit}}=1/(0.12\times 16)=0.5208$. With $q=1/6$, every simple 32-node graph is subcritical and reliability selects the graph. With $q=1/3$, reliable and subcritical graphs exist, but they require $\rho(A)<25$. With $q=2/3$, every reliable graph is supercritical under the model. Figure [2](https://arxiv.org/html/2607.21912v1#S4.F2 "Figure 2 ‣ 4 Reliable and subcritical graph classes ‣ Reliability–Contagion Feasibility in LLM Multi-Agent Networks") assembles the calculation: panel a gives the clean-reliability curve, panel b shows how the per-edge invasion factor rises with regular degree, panel c displays the intersection of the two constraints, and panel d previews the fixed-sender contrast developed in [section 5](https://arxiv.org/html/2607.21912v1#S5 "5 Fixed sender budget ‣ Reliability–Contagion Feasibility in LLM Multi-Agent Networks"). These values are illustrative inputs.

![Refer to caption](https://arxiv.org/html/2607.21912v1/fig_2_threshold_frontier.png)


Figure 2: Illustrative fixed-$N$ reliability–contagion calculation. (a) The independent-signal benchmark reaches $Q\_{\min}=0.90$ at $k\_{\star}=16$. (b) Under fixed per-edge lifetime exposure, $R\_{\mathrm{err}}=q\tau k$ grows with degree. Open symbols mark the largest tested degree satisfying $R\_{\mathrm{err}}<1$ for each susceptibility level. (c) Intersecting the analytic reliability requirement and strict subcriticality gives a feasible degree range for two susceptibility levels and no feasible degree for the highest level. (d) Under a fixed sender budget, the homogeneous spectral threshold is constant across positive regular degrees. The three effective-susceptibility values $q\in\{1/6,1/3,2/3\}$ are illustrative inputs.

## 5 Fixed sender budget

Let each infectious sender have total lifetime exposure budget $b$, divided across its outgoing edges. With column $j$ denoting sender $j$, let

|  |  |  |
| --- | --- | --- |
|  | $$D\_{\mathrm{out}}=\operatorname{diag}(d\_{j}^{\mathrm{out}}),\qquad L=bAD\_{\mathrm{out}}^{-1}.$$ |  |

###### Theorem 3 (Sender-normalized spectral threshold).

If $b\geq 0$, every node has positive out-degree, and susceptibility is homogeneous, then

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$R\_{\mathrm{err}}(G)=qb$$ |  | (8) |

for every directed topology, including reducible and irregular graphs.

###### Proof.

The matrix $M=AD\_{\mathrm{out}}^{-1}$ is column stochastic. Thus $1$ is an eigenvalue and its induced one-norm is one, giving $\rho(M)=1$. Therefore $\rho(qbM)=qb$.
∎

In plain terms, if every sender splits the same total communication allowance among its recipients, adding recipients weakens each individual link, so network density alone does not change how easily a newly introduced error starts to multiply.

This result is the direct matrix analogue of the degree-normalized contact-process limit [[5](https://arxiv.org/html/2607.21912v1#bib.bib17)]. Figure [2](https://arxiv.org/html/2607.21912v1#S4.F2 "Figure 2 ‣ 4 Reliable and subcritical graph classes ‣ Reliability–Contagion Feasibility in LLM Multi-Agent Networks")d shows the resulting degree-invariant line for the homogeneous example. The theorem concerns the linear spectral threshold. Seed reachability, finite cascade size, extinction time, and transient amplification can remain topology-dependent. A density effect in the linear spectral invasion factor under a fixed sender budget points to heterogeneity or another departure from the homogeneous normalized model; topology-dependent finite-cascade statistics do not by themselves contradict the theorem.

## 6 Finite-network stochastic illustration

### 6.1 Design

We implemented the finite-state continuous-time SEICS process with an exact Gillespie algorithm on $N=32$ circulant regular graphs. Degrees were $k\in\{8,12,16,20,24,28,30\}$, susceptibilities were $q\in\{1/6,1/3,2/3\}$, and communication used either lifetime exposure $\tau=0.12$ per edge or lifetime sender budget $b=1.8$. The rates were $\gamma=1$ and $\omega=0.1$; $\sigma=q$ and $\nu=1-q$, so $\sigma/(\sigma+\nu)=q$. Each of the 42 cells contained 500 independently derived random-number streams, for 21,000 trajectories. A cascade was recorded when at least seven distinct nodes entered I. Wilson intervals summarize this binary endpoint.

The clean reliability curve was evaluated separately from ([3](https://arxiv.org/html/2607.21912v1#S3.E3 "Equation 3 ‣ 3 Clean reliability benchmark ‣ Reliability–Contagion Feasibility in LLM Multi-Agent Networks")). The Gillespie process does not generate the clean signals or their majority vote. The experiment therefore combines an analytic reliability constraint with a stochastic contagion illustration.

### 6.2 Results

Under fixed per-edge exposure, the analytic invasion factor increased with degree and outbreak probability increased overall. At $q=1/3$, the reliability-qualified cells moved from $R\_{\mathrm{err}}=0.64$ and outbreak probability 0.046 at $k=16$ to $R\_{\mathrm{err}}=1.20$ and probability 0.196 at $k=30$. At $q=2/3$, every reliability-qualified degree was analytically supercritical; outbreak probability rose from 0.266 at $k=16$ to 0.584 at $k=30$.

Under the fixed sender budget, the analytic factors were 0.3, 0.6, and 1.2 at every tested degree, as required by [theorem 3](https://arxiv.org/html/2607.21912v1#Thmtheorem3 "Theorem 3 (Sender-normalized spectral threshold). ‣ 5 Fixed sender budget ‣ Reliability–Contagion Feasibility in LLM Multi-Agent Networks"). Finite outbreak probabilities still varied with degree. For $q=2/3$, they ranged from 0.158 to 0.282. This difference illustrates the gap between a linear threshold and a complete finite-cascade statistic. The maximum probability that a run still contained an E or I node at the horizon was 0.01; extending the horizon could therefore revise the reported ever-I outbreak probability by at most one percentage point in any cell.

Figure [3](https://arxiv.org/html/2607.21912v1#S6.F3 "Figure 3 ‣ 6.2 Results ‣ 6 Finite-network stochastic illustration ‣ Reliability–Contagion Feasibility in LLM Multi-Agent Networks")a shows the degree trend under fixed per-edge exposure, including the separately computed reliability-qualified region. Figure [3](https://arxiv.org/html/2607.21912v1#S6.F3 "Figure 3 ‣ 6.2 Results ‣ 6 Finite-network stochastic illustration ‣ Reliability–Contagion Feasibility in LLM Multi-Agent Networks")b shows the sender-budget case, where the analytic factor is degree-invariant but finite cascade probabilities are not. Figure [3](https://arxiv.org/html/2607.21912v1#S6.F3 "Figure 3 ‣ 6.2 Results ‣ 6 Finite-network stochastic illustration ‣ Reliability–Contagion Feasibility in LLM Multi-Agent Networks")c places both regimes against the analytic invasion factor and marks the deterministic mean-field boundary.

Figure 3: Finite-network stochastic illustration. Points show outbreak probabilities from 500 Gillespie trajectories per cell; error bars are two-sided 95% Wilson intervals. (a) With fixed exposure per edge, outbreak probability increases overall with degree, particularly when the analytic factor crosses one. The green region marks degrees that meet the separate analytic reliability requirement. (b) With a fixed sender budget, the spectral factor remains constant within each susceptibility level while finite cascade probabilities retain degree dependence. (c) Outbreak probability plotted against the analytic invasion factor. The dashed line marks the deterministic mean-field boundary, rather than an exact finite-network transition.

## 7 Controlled real-model network experiment

### 7.1 Design

We conducted a controlled real-model experiment to check whether added edges increase error spread under a frozen communication protocol. Six stateless instances of grok-4.3 occupy three nested graphs: a cycle $G\_{2}$, a degree-four circulant graph $G\_{4}$, and the complete graph $G\_{5}$. The experiment uses 36 new fictional closed-world binary tasks, with 18 correct A answers and 18 correct B answers. None of the four pilot tasks used in protocol development was retained.

Node private-source reliabilities use the fixed multiset $(0.74,0.78,0.80,0.82,0.86,0.90)$, while each erroneous peer report has displayed reliability 0.80. The 36 tasks form a complete six-by-six crossing of seed node and cyclic reliability rotation. The six topology execution orders follow a Latin-square schedule, so each order occurs six times. The controller injects one exogenous false seed in every trial.

Propagation uses synchronous frozen generations. Each node is queried once, at first exposure, with all newly infectious neighbours listed separately. A false answer enters I, a correct answer enters C, and UNSURE is the observed E endpoint. Only I nodes transmit in the next generation. The primary endpoint is first-generation seed offspring $Z\_{1}$, measured for all 36 tasks under all three topologies. In plain terms, it counts how many immediate neighbours accept the seeded false claim. A pre-registered 12-task subset continues to full cascades; this subset contains each seed node, reliability rotation, and topology execution order twice. Its secondary endpoint is the fraction $Y$ of the five non-seed nodes that ever enter I, which records how far the false claim eventually reaches.

The remaining 24 tasks stop after the first generation by design and are not treated as complete cascades. The protocol permits at most 444 logical decisions and 520 HTTP attempts, including retries. All comparisons are paired within task and reported descriptively.

### 7.2 Results

All 108 task-topology trial units completed. The realized cascades required 420 logical decisions and 422 HTTP attempts, including two successful retries and no failed decision record. All 420 response identifiers were present and unique. Recorded usage was 221,120 input tokens and 205,822 output tokens, for 426,942 tokens in total. The frozen-manifest, append-only-ledger, balance, cascade-scope, and budget checks passed.

The model followed the displayed source-reliability rule in all 420 decisions. It selected the erroneous peer report when reliability 0.80 exceeded private reliability 0.74 or 0.78, returned UNSURE at the 0.80 tie, and retained the correct private report at reliabilities 0.82, 0.86, and 0.90. This exact compliance confirms execution of the controlled mechanism; it does not estimate unconstrained hallucination susceptibility.

The topology summaries are shown in [table 1](https://arxiv.org/html/2607.21912v1#S7.T1 "In 7.2 Results ‣ 7 Controlled real-model network experiment ‣ Reliability–Contagion Feasibility in LLM Multi-Agent Networks"). Mean seed offspring increased from 0.667 on $G\_{2}$ to 1.333 on $G\_{4}$ and 1.667 on $G\_{5}$. The corresponding mean fraction of exposed neighbours that entered I was 0.333 under every topology. The absolute increase therefore came from exposing more neighbours under the fixed per-edge protocol, rather than from a change in per-exposure adoption.

Table 1: Controlled real-model outcomes. The primary endpoint $Z\_{1}$ uses all 36 tasks; the secondary non-seed ever-I fraction $Y$ and infection depth use the pre-registered 12-task full-cascade subset. Values are arithmetic means over the indicated paired tasks.

| Topology | $k$ | $n\_{Z\_{1}}$ | Mean $Z\_{1}$ | Adopted/exposed | $n\_{Y}$ | Mean $Y$ | Mean depth |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Cycle | 2 | 36 | 0.667 | 0.333 | 12 | 0.200 | 1.000 |
| Circulant | 4 | 36 | 1.333 | 0.333 | 12 | 0.333 | 1.333 |
| Complete | 5 | 36 | 1.667 | 0.333 | 12 | 0.333 | 1.000 |

For the paired primary contrasts, $G\_{4}-G\_{2}$ was positive for 24 tasks, zero for 12, and negative for none; $G\_{5}-G\_{4}$ was positive for 12, zero for 24, and negative for none. The mean differences were 0.667 and 0.333, respectively. The direct $G\_{5}-G\_{2}$ comparison had mean 1.000, with 24 positive, 12 zero, and no negative task-level differences.

In the 12-task full-cascade subset, mean non-seed ever-I fraction increased from 0.200 on $G\_{2}$ to 0.333 on $G\_{4}$ and remained 0.333 on $G\_{5}$. Four paired $G\_{4}-G\_{2}$ values increased by 0.4 and eight were unchanged. All 12 $G\_{5}-G\_{4}$ differences were zero. Cumulative reach therefore increased between the sparse and intermediate graphs and then saturated on the complete graph.

Figure [4](https://arxiv.org/html/2607.21912v1#S7.F4 "Figure 4 ‣ 7.2 Results ‣ 7 Controlled real-model network experiment ‣ Reliability–Contagion Feasibility in LLM Multi-Agent Networks")a shows the nested edge-addition path. Panel b reports all 36 paired first-generation outcomes and their means; panel c counts positive, zero, and negative paired changes; panel d reports all 12 paired full-cascade outcomes. The points and lines are descriptive task-level values, not uncertainty intervals.

Figure 4: Controlled grok-4.3 network experiment. (a) Nested edge-addition path on six nodes; highlighted edges are added at each step. (b) First-generation seed offspring for all $n=36$ paired tasks. Thin lines connect the same task across degrees; black diamonds give arithmetic means. Mean adoption among exposed neighbours is 0.333 at every degree. (c) Counts of paired increases, no changes, and decreases for the degree $4-2$, $5-4$, and $5-2$ contrasts. (d) Non-seed ever-I fraction for the pre-registered $n=12$ full-cascade subset, with black diamonds showing arithmetic means. Raw markers use small horizontal offsets for visibility. No interval in this figure is an inferential confidence interval.

## 8 Discussion

The feasibility theorem gives a direct answer to the sparsity question for fixed-size networks under stated assumptions. Connectivity below $k\_{\star}$ fails the clean majority target. Connectivity above the spectral boundary permits early error invasion under fixed exposure per edge. A nonempty interval between these constraints is the candidate operating region. Its location depends on signal accuracy, verification, correction, and lifetime exposure.

The communication budget changes the mechanism. A per-edge comparison increases total exposure when edges are added, so degree enters the invasion factor. A fixed sender budget removes this degree dependence from the homogeneous first-order threshold. Reporting topology without reporting message allocation leaves the causal interpretation incomplete.

The controlled model run gives a protocol-level mechanism check. Added edges increased first-generation offspring across the three graphs: 24 of 36 direct $G\_{5}-G\_{2}$ task comparisons increased and none decreased. The unchanged one-third adoption fraction per exposure identifies the immediate mechanism as a larger exposed neighbourhood under fixed per-edge communication. Cumulative reach increased from the cycle to the degree-four graph in four of 12 full-cascade task blocks and then plateaued in every $G\_{5}-G\_{4}$ comparison. The experiment therefore supports a propagation cost from additional exposure opportunities, while providing no evidence for a smooth density response or an interior empirical optimum.

Several limits define the present contribution. The clean-reliability curve assumes independent equal-quality signals and local majority aggregation. Real LLM outputs can be correlated and can exhibit conformity or shared training errors. The deterministic SEICS equations use a node-level closure, while finite agent networks have stochastic, path-dependent cascades. The real-model experiment uses 36 fictional tasks, one model endpoint, controlled source reliabilities, one-shot decisions, one nested graph family, and only 12 pre-registered full cascades. Exact compliance with the displayed rule makes it a controlled instruction-following test rather than an estimate of spontaneous hallucination contagion. The topology sequence changes degree, path length, clustering, and exposure multiplicity together. A broader study should estimate heterogeneous pairwise operators on naturally occurring held-out claims, compare graph families at matched edge count, and measure clean reliability and corrupted-message propagation within the same agent workflow.

Correction provides a direct extension. In ([2](https://arxiv.org/html/2607.21912v1#S2.E2 "Equation 2 ‣ Theorem 1 (Heterogeneous early-invasion condition). ‣ 2 Claim-level network SEICS model ‣ Reliability–Contagion Feasibility in LLM Multi-Agent Networks")), prophylactic verification reduces $s\_{i}^{0}$, pre-transmission rejection reduces the probability of reaching I, and reactive correction shortens infectious duration through $\gamma\_{i}$. These factors enter different sides of $K$, which permits node-specific intervention design. Optimizing their allocation under a fixed verification budget is left for subsequent work.

## 9 Conclusion

We formulated a correction-aware network model for one traceable error in an LLM multi-agent system and coupled its spectral invasion condition to a clean-reliability requirement. The resulting graph-class theorem identifies when reliable and strictly subcritical communication graphs exist, when they are impossible, and when an intermediate connectivity range is available. A sender-normalized analysis shows that this range depends on how communication exposure scales with degree. Finite stochastic simulations support the directional mechanism. In the controlled real-model experiment, added edges increased first-generation offspring across 36 paired tasks, while cumulative erroneous adoption increased from degree 2 to degree 4 and then plateaued in the 12-task full-cascade subset. The constant adoption fraction per exposed neighbour ties the immediate increase to the number of exposure opportunities under the frozen protocol. The theory provides the separate reliability constraint needed to define an intermediate region and keeps its assumptions explicit.

## Reproducibility statement

The arXiv source archive contains the theorem calculations, unit tests, Gillespie simulator, plotting scripts, figure source tables, controlled xAI protocol, the 36 held-out tasks, and the audited v0.3 real-model summaries, manifest, response records, and attempt ledger. The numerical design is reproducible from the recorded base entropy and cell indices. The integer seed column in the trajectory table is an audit identifier and is not, by itself, a direct RNG reconstruction key.

## References

- [1]
  R. Baltaji, B. Hemmatian, and L. Varshney (2024)
  Conformity, confabulation, and impersonation: persona inconstancy in multi-agent LLM collaboration.
  In Proceedings of the 2nd Workshop on Cross-Cultural Considerations in NLP,
  pp. 17–31.
  External Links: [Document](https://dx.doi.org/10.18653/v1/2024.c3nlp-1.2),
  [Link](https://aclanthology.org/2024.c3nlp-1.2/)
  Cited by: [§1](https://arxiv.org/html/2607.21912v1#S1.p2.1 "1 Introduction ‣ Reliability–Contagion Feasibility in LLM Multi-Agent Networks").
- [2]
  H. K. Choi, X. Zhu, and S. Li (2025)
  Debate or vote: which yields better decisions in multi-agent large language models?.
  In Advances in Neural Information Processing Systems 38,
  External Links: [Link](https://papers.nips.cc/paper_files/paper/2025/hash/934252acd87f254d5d4672fbde283bd2-Abstract-Conference.html)
  Cited by: [§1](https://arxiv.org/html/2607.21912v1#S1.p1.1 "1 Introduction ‣ Reliability–Contagion Feasibility in LLM Multi-Agent Networks").
- [3]
  O. Diekmann, J. A. P. Heesterbeek, and J. A. J. Metz (1990)
  On the definition and the computation of the basic reproduction ratio $r\_{0}$ in models for infectious diseases in heterogeneous populations.
  Journal of Mathematical Biology 28 (4), pp. 365–382.
  External Links: [Document](https://dx.doi.org/10.1007/BF00178324)
  Cited by: [§1](https://arxiv.org/html/2607.21912v1#S1.p5.1 "1 Introduction ‣ Reliability–Contagion Feasibility in LLM Multi-Agent Networks").
- [4]
  Y. Du, S. Li, A. Torralba, J. B. Tenenbaum, and I. Mordatch (2024)
  Improving factuality and reasoning in language models through multiagent debate.
  In Proceedings of the 41st International Conference on Machine Learning,
  Proceedings of Machine Learning Research, Vol. 235, pp. 11733–11763.
  External Links: [Link](https://proceedings.mlr.press/v235/du24e.html)
  Cited by: [§1](https://arxiv.org/html/2607.21912v1#S1.p1.1 "1 Introduction ‣ Reliability–Contagion Feasibility in LLM Multi-Agent Networks").
- [5]
  S. Gómez, A. Arenas, J. Borge-Holthoefer, S. Meloni, and Y. Moreno (2010)
  Discrete-time markov chain approach to contact-based disease spreading in complex networks.
  EPL (Europhysics Letters) 89 (3), pp. 38009.
  External Links: [Document](https://dx.doi.org/10.1209/0295-5075/89/38009)
  Cited by: [§1](https://arxiv.org/html/2607.21912v1#S1.p7.1 "1 Introduction ‣ Reliability–Contagion Feasibility in LLM Multi-Agent Networks"),
  [§5](https://arxiv.org/html/2607.21912v1#S5.p4.1 "5 Fixed sender budget ‣ Reliability–Contagion Feasibility in LLM Multi-Agent Networks").
- [6]
  X. Gu, X. Zheng, T. Pang, C. Du, Q. Liu, Y. Wang, J. Jiang, and M. Lin (2024)
  Agent smith: a single image can jailbreak one million multimodal LLM agents exponentially fast.
  In Proceedings of the 41st International Conference on Machine Learning,
  Proceedings of Machine Learning Research, Vol. 235, pp. 16647–16672.
  External Links: [Link](https://proceedings.mlr.press/v235/gu24e.html)
  Cited by: [§1](https://arxiv.org/html/2607.21912v1#S1.p2.1 "1 Introduction ‣ Reliability–Contagion Feasibility in LLM Multi-Agent Networks").
- [7]
  P. He, Y. Lin, S. Dong, H. Xu, Y. Xing, and H. Liu (2025)
  Red-teaming LLM multi-agent systems via communication attacks.
  In Findings of the Association for Computational Linguistics: ACL 2025,
  pp. 6726–6747.
  External Links: [Document](https://dx.doi.org/10.18653/v1/2025.findings-acl.349),
  [Link](https://aclanthology.org/2025.findings-acl.349/)
  Cited by: [§1](https://arxiv.org/html/2607.21912v1#S1.p2.1 "1 Introduction ‣ Reliability–Contagion Feasibility in LLM Multi-Agent Networks").
- [8]
  S. Jamshidi (2026)
  Collective hallucination in multi-agent LLMs: modeling and defense.
  arXiv preprint arXiv:2606.07941.
  Note: Version 1, 6 June 2026
  External Links: 2606.07941,
  [Document](https://dx.doi.org/10.48550/arXiv.2606.07941),
  [Link](https://arxiv.org/abs/2606.07941)
  Cited by: [§1](https://arxiv.org/html/2607.21912v1#S1.p8.1 "1 Introduction ‣ Reliability–Contagion Feasibility in LLM Multi-Agent Networks").
- [9]
  Y. Li, Y. Du, J. Zhang, L. Hou, P. Grabowski, Y. Li, and E. Ie (2024)
  Improving multi-agent debate with sparse communication topology.
  In Findings of the Association for Computational Linguistics: EMNLP 2024,
  pp. 7281–7294.
  External Links: [Document](https://dx.doi.org/10.18653/v1/2024.findings-emnlp.427),
  [Link](https://aclanthology.org/2024.findings-emnlp.427/)
  Cited by: [§1](https://arxiv.org/html/2607.21912v1#S1.p3.1 "1 Introduction ‣ Reliability–Contagion Feasibility in LLM Multi-Agent Networks").
- [10]
  T. Liang, Z. He, W. Jiao, X. Wang, Y. Wang, R. Wang, Y. Yang, S. Shi, and Z. Tu (2024)
  Encouraging divergent thinking in large language models through multi-agent debate.
  In Proceedings of the 2024 Conference on Empirical Methods in Natural Language Processing,
  pp. 17889–17904.
  External Links: [Document](https://dx.doi.org/10.18653/v1/2024.emnlp-main.992),
  [Link](https://aclanthology.org/2024.emnlp-main.992/)
  Cited by: [§1](https://arxiv.org/html/2607.21912v1#S1.p1.1 "1 Introduction ‣ Reliability–Contagion Feasibility in LLM Multi-Agent Networks").
- [11]
  W. Liu, X. Wu, W. Yang, X. Zhu, and S. Zhong (2019)
  Modeling cyber rumor spreading over mobile social networks: a compartment approach.
  Applied Mathematics and Computation 343, pp. 214–229.
  External Links: [Document](https://dx.doi.org/10.1016/j.amc.2018.09.048)
  Cited by: [§1](https://arxiv.org/html/2607.21912v1#S1.p6.1 "1 Introduction ‣ Reliability–Contagion Feasibility in LLM Multi-Agent Networks").
- [12]
  Z. Liu (2026)
  Contagion networks: evaluator preference propagation in multi-agent LLM systems.
  arXiv preprint arXiv:2606.20493.
  Note: Version 2, 26 June 2026
  External Links: 2606.20493,
  [Document](https://dx.doi.org/10.48550/arXiv.2606.20493),
  [Link](https://arxiv.org/abs/2606.20493)
  Cited by: [§1](https://arxiv.org/html/2607.21912v1#S1.p8.1 "1 Introduction ‣ Reliability–Contagion Feasibility in LLM Multi-Agent Networks").
- [13]
  M. Nekovee, Y. Moreno, G. Bianconi, and M. Marsili (2007)
  Theory of rumour spreading in complex social networks.
  Physica A: Statistical Mechanics and its Applications 374 (1), pp. 457–470.
  External Links: [Document](https://dx.doi.org/10.1016/j.physa.2006.07.017)
  Cited by: [§1](https://arxiv.org/html/2607.21912v1#S1.p6.1 "1 Introduction ‣ Reliability–Contagion Feasibility in LLM Multi-Agent Networks").
- [14]
  R. Niu, Y. Chan, E. W. M. Wong, M. A. van Wyk, and G. Chen (2021)
  A stochastic SEIHR model for COVID-19 data fluctuations.
  Nonlinear Dynamics 106 (2), pp. 1311–1323.
  External Links: [Document](https://dx.doi.org/10.1007/s11071-021-06631-9),
  [Link](https://doi.org/10.1007/s11071-021-06631-9)
  Cited by: [§1](https://arxiv.org/html/2607.21912v1#S1.p5.1 "1 Introduction ‣ Reliability–Contagion Feasibility in LLM Multi-Agent Networks").
- [15]
  R. Niu, E. W. M. Wong, Y. Chan, M. A. Van Wyk, and G. Chen (2020)
  Modeling the COVID-19 pandemic using an SEIHR model with human migration.
  IEEE Access 8, pp. 195503–195514.
  External Links: [Document](https://dx.doi.org/10.1109/ACCESS.2020.3032584),
  [Link](https://doi.org/10.1109/ACCESS.2020.3032584)
  Cited by: [§1](https://arxiv.org/html/2607.21912v1#S1.p5.1 "1 Introduction ‣ Reliability–Contagion Feasibility in LLM Multi-Agent Networks").
- [16]
  X. Shen, Y. Liu, Y. Dai, Y. Wang, R. Miao, Y. Tan, S. Pan, and X. Wang (2025)
  Understanding the information propagation effects of communication topologies in LLM-based multi-agent systems.
  In Proceedings of the 2025 Conference on Empirical Methods in Natural Language Processing,
  pp. 12347–12361.
  External Links: [Document](https://dx.doi.org/10.18653/v1/2025.emnlp-main.623),
  [Link](https://aclanthology.org/2025.emnlp-main.623/)
  Cited by: [§1](https://arxiv.org/html/2607.21912v1#S1.p4.1 "1 Introduction ‣ Reliability–Contagion Feasibility in LLM Multi-Agent Networks").
- [17]
  A. P. Smit, N. Grinsztajn, P. Duckworth, T. D. Barrett, and A. Pretorius (2024)
  Should we be going MAD? a look at multi-agent debate strategies for LLMs.
  In Proceedings of the 41st International Conference on Machine Learning,
  Proceedings of Machine Learning Research, Vol. 235, pp. 45883–45905.
  External Links: [Link](https://proceedings.mlr.press/v235/smit24a.html)
  Cited by: [§1](https://arxiv.org/html/2607.21912v1#S1.p1.1 "1 Introduction ‣ Reliability–Contagion Feasibility in LLM Multi-Agent Networks").
- [18]
  P. van den Driessche and J. Watmough (2002)
  Reproduction numbers and sub-threshold endemic equilibria for compartmental models of disease transmission.
  Mathematical Biosciences 180 (1–2), pp. 29–48.
  External Links: [Document](https://dx.doi.org/10.1016/S0025-5564%2802%2900108-6)
  Cited by: [§1](https://arxiv.org/html/2607.21912v1#S1.p5.1 "1 Introduction ‣ Reliability–Contagion Feasibility in LLM Multi-Agent Networks"),
  [§2](https://arxiv.org/html/2607.21912v1#S2.p6.4.1 "Proof. ‣ 2 Claim-level network SEICS model ‣ Reliability–Contagion Feasibility in LLM Multi-Agent Networks").
- [19]
  P. Van Mieghem, J. Omic, and R. Kooij (2009)
  Virus spread in networks.
  IEEE/ACM Transactions on Networking 17 (1), pp. 1–14.
  External Links: [Document](https://dx.doi.org/10.1109/TNET.2008.925623)
  Cited by: [§1](https://arxiv.org/html/2607.21912v1#S1.p5.1 "1 Introduction ‣ Reliability–Contagion Feasibility in LLM Multi-Agent Networks").
- [20]
  M. Yu, S. Wang, G. Zhang, J. Mao, C. Yin, Q. Liu, K. Wang, Q. Wen, and Y. Wang (2025)
  NetSafe: exploring the topological safety of multi-agent system.
  In Findings of the Association for Computational Linguistics: ACL 2025,
  pp. 2905–2938.
  External Links: [Document](https://dx.doi.org/10.18653/v1/2025.findings-acl.150),
  [Link](https://aclanthology.org/2025.findings-acl.150/)
  Cited by: [§1](https://arxiv.org/html/2607.21912v1#S1.p4.1 "1 Introduction ‣ Reliability–Contagion Feasibility in LLM Multi-Agent Networks").
- [21]
  G. Zhang, Y. Yue, Z. Li, S. Yun, G. Wan, K. Wang, D. Cheng, J. Yu, and T. Chen (2025)
  Cut the crap: an economical communication pipeline for LLM-based multi-agent systems.
  In International Conference on Learning Representations,
  External Links: [Link](https://proceedings.iclr.cc/paper_files/paper/2025/hash/bbc461518c59a2a8d64e70e2c38c4a0e-Abstract-Conference.html)
  Cited by: [§1](https://arxiv.org/html/2607.21912v1#S1.p3.1 "1 Introduction ‣ Reliability–Contagion Feasibility in LLM Multi-Agent Networks").
- [22]
  G. Zhang, Y. Yue, X. Sun, G. Wan, M. Yu, J. Fang, K. Wang, T. Chen, and D. Cheng (2025)
  G-designer: architecting multi-agent communication topologies via graph neural networks.
  In Proceedings of the 42nd International Conference on Machine Learning,
  Proceedings of Machine Learning Research, Vol. 267, pp. 76678–76692.
  External Links: [Link](https://proceedings.mlr.press/v267/zhang25cu.html)
  Cited by: [§1](https://arxiv.org/html/2607.21912v1#S1.p3.1 "1 Introduction ‣ Reliability–Contagion Feasibility in LLM Multi-Agent Networks").
- [23]
  L. Zhao, J. Wang, Y. Chen, Q. Wang, J. Cheng, and H. Cui (2012)
  SIHR rumor spreading model in social networks.
  Physica A: Statistical Mechanics and its Applications 391 (7), pp. 2444–2453.
  External Links: [Document](https://dx.doi.org/10.1016/j.physa.2011.12.008)
  Cited by: [§1](https://arxiv.org/html/2607.21912v1#S1.p6.1 "1 Introduction ‣ Reliability–Contagion Feasibility in LLM Multi-Agent Networks").
- [24]
  M. Zhuge, W. Wang, L. Kirsch, F. Faccio, D. Khizbullin, and J. Schmidhuber (2024)
  GPTSwarm: language agents as optimizable graphs.
  In Proceedings of the 41st International Conference on Machine Learning,
  Proceedings of Machine Learning Research, Vol. 235, pp. 62743–62767.
  External Links: [Link](https://proceedings.mlr.press/v235/zhuge24a.html)
  Cited by: [§1](https://arxiv.org/html/2607.21912v1#S1.p3.1 "1 Introduction ‣ Reliability–Contagion Feasibility in LLM Multi-Agent Networks").
