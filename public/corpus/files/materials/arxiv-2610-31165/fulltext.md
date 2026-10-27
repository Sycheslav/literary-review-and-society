---
id: arxiv-2610-31165-text
type: material
title: Network topology shapes consensus and vulnerability in LLM populations
work_id: arxiv-2610-31165
source_url: https://arxiv.org/html/2610.31165v1
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять
  с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.
language: original
sha256_text: 351f4d853dfc80ef791a59bbcada93e56c4bce356565b3099bfe86e4ff3b2b5b
---

> Источник: [https://arxiv.org/html/2610.31165v1](https://arxiv.org/html/2610.31165v1). Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.

# Network topology shapes consensus and vulnerability in LLM populations

Roberto Passaro
Affiliation: IT University of Copenhagen, Denmark.
Affiliation: Pioneer Centre for AI, Copenhagen, Denmark.
  
Ariel Flint
Affiliation: Department of Mathematics, City St George’s, University of London, UK.
  
Romualdo Pastor-Satorras
Affiliation: Departament de Física, Universitat Politècnica de Catalunya, Barcelona, Spain.\*Corresponding author: [a.baronchelli.work@gmail.com](mailto:a.baronchelli.work@gmail.com)
  
Andrea Baronchelli
Affiliation: Department of Mathematics, City St George’s, University of London, UK.
  
Luca Maria Aiello
Affiliation: IT University of Copenhagen, Denmark.
Affiliation: Pioneer Centre for AI, Copenhagen, Denmark.

October 2026

###### Abstract

As large language models (LLMs) are deployed in interacting populations, their collective behaviour depends not only on the models but also on who interacts with whom. Studies of convention formation in LLM populations have mainly tested well-mixed interactions. We place policies extracted from four LLMs on fully connected, random regular, and heterogeneous networks, with $10^{3}$ to $10^{5}$ agents playing the naming game. Topology affects how quickly consensus emerges, sometimes whether it emerges at all, and, in rare cases, which convention wins. Sparsest networks slow consensus up to twelvefold. Yet, by preserving correlations between persistent neighbours, they restore consensus in some cases that fail to converge under well-mixed interactions. Networks also govern vulnerability to adversarial attack. We measure the critical mass of committed agents needed to overturn an established convention. Tipping thresholds follow the same ordering across models and conditions: hubs $\leq$ random $\leq$ low-degree nodes. On the most heterogeneous topology, median critical masses are 3%, 16%, and 35%, respectively; targeting hubs requires one-sixth as many committed agents as random placement. For most models, networked populations are easier to tip than well-mixed ones, so well-mixed estimates can overstate robustness. Assessing the safety of multi-agent AI requires mapping who interacts with whom.

Keywords: large language models; multi-agent systems; naming game; social conventions; consensus dynamics; complex networks; committed minorities; AI safety

## 1 Introduction

AI agents are moving from isolated tools to interacting populations [[1](https://arxiv.org/html/2610.31165v1#bib.bib37), [2](https://arxiv.org/html/2610.31165v1#bib.bib19)]. Multi-agent systems based on large language models (LLMs) already operate in finance [[3](https://arxiv.org/html/2610.31165v1#bib.bib38), [4](https://arxiv.org/html/2610.31165v1#bib.bib20)], defence [[5](https://arxiv.org/html/2610.31165v1#bib.bib39)], social media [[6](https://arxiv.org/html/2610.31165v1#bib.bib22)], and personal assistance [[7](https://arxiv.org/html/2610.31165v1#bib.bib40)]. The collective behaviour of these populations is becoming directly observable at multiple scales. In Emergence World, a continuously running multi-agent environment, groups of dozens of agents have been observed cooperating to create and maintain shared institutions [[8](https://arxiv.org/html/2610.31165v1#bib.bib54)]. In July 2026, about $1200$ agents at OpenAI exchanged more than $70\,000$ messages and files and coordinated collective projects to tamper with the scorer of the benchmark they were working on, resulting in a successful cyberattack on Hugging Face’s digital infrastructure [[9](https://arxiv.org/html/2610.31165v1#bib.bib29)]. On Moltbook, an agent-only social platform, hundreds of thousands of agents organise into communities with a highly hierarchical interaction structure [[10](https://arxiv.org/html/2610.31165v1#bib.bib28), [11](https://arxiv.org/html/2610.31165v1#bib.bib21)].

Many interactions in these systems aim to reach agreement on *conventions*: shared behaviours that help achieve common goals without a central coordinating authority [[12](https://arxiv.org/html/2610.31165v1#bib.bib42), [13](https://arxiv.org/html/2610.31165v1#bib.bib41), [14](https://arxiv.org/html/2610.31165v1#bib.bib45), [15](https://arxiv.org/html/2610.31165v1#bib.bib46)]. The centrality of conventions has motivated experimental work on their emergence in AI multi-agent systems, often based on minimal models that capture the core coordination mechanisms. One such model is the *naming game*, in which pairs of agents try to coordinate on a name [[16](https://arxiv.org/html/2610.31165v1#bib.bib48)]. Theoretical studies [[17](https://arxiv.org/html/2610.31165v1#bib.bib1), [18](https://arxiv.org/html/2610.31165v1#bib.bib8), [19](https://arxiv.org/html/2610.31165v1#bib.bib9)] and laboratory experiments with humans [[20](https://arxiv.org/html/2610.31165v1#bib.bib47), [21](https://arxiv.org/html/2610.31165v1#bib.bib10), [22](https://arxiv.org/html/2610.31165v1#bib.bib44), [23](https://arxiv.org/html/2610.31165v1#bib.bib43)] have shown that, in the naming game, conventions can emerge spontaneously from repeated local interactions.

Recent simulations with populations of LLM-based agents have revealed similar patterns. AI agents playing the naming game can reach global conventions through local interactions, although these interactions can produce collective biases absent in individual agents [[24](https://arxiv.org/html/2610.31165v1#bib.bib3)]. The strength and form of these biases vary with population size in nonlinear, model-dependent ways [[25](https://arxiv.org/html/2610.31165v1#bib.bib17)]. Established conventions can also be overturned. A committed minority, a group of agents that always promote an alternative, can tip the whole population once it exceeds a critical fraction [[26](https://arxiv.org/html/2610.31165v1#bib.bib11), [21](https://arxiv.org/html/2610.31165v1#bib.bib10)]. This critical mass is key to the stability of these systems because it measures a social attack surface: the number of adversarial agents needed to overturn a convention a population has already settled on [[27](https://arxiv.org/html/2610.31165v1#bib.bib18)]. Critical mass has been measured at $25\%$ in experiments with human groups [[21](https://arxiv.org/html/2610.31165v1#bib.bib10)], ranges from $10\%$ to $40\%$ in theoretical models depending on their assumptions [[26](https://arxiv.org/html/2610.31165v1#bib.bib11), [28](https://arxiv.org/html/2610.31165v1#bib.bib15)], and spans $2\%$ to $67\%$ in AI populations depending on the underlying LLM [[24](https://arxiv.org/html/2610.31165v1#bib.bib3)].

All these studies of coordination in AI multi-agent systems share one simplification: the population is *well mixed*, so every agent can interact with every other [[24](https://arxiv.org/html/2610.31165v1#bib.bib3), [25](https://arxiv.org/html/2610.31165v1#bib.bib17), [27](https://arxiv.org/html/2610.31165v1#bib.bib18)]. This is rarely true in real-world deployments, where the communication network among agents can be shaped by top-down architectural design [[29](https://arxiv.org/html/2610.31165v1#bib.bib27)], adaptive partner discovery to optimise task delegation [[30](https://arxiv.org/html/2610.31165v1#bib.bib25)], and uneven activity levels across agents [[10](https://arxiv.org/html/2610.31165v1#bib.bib28)].

In the classical naming game, interaction structure has well-known effects. On low-dimensional lattices, consensus proceeds through the slow coarsening of local domains [[31](https://arxiv.org/html/2610.31165v1#bib.bib6)]. On heterogeneous networks, high-degree nodes act as spreaders of conventions [[32](https://arxiv.org/html/2610.31165v1#bib.bib4)], and on sparse random networks the tipping point shifts [[33](https://arxiv.org/html/2610.31165v1#bib.bib12)]. In human experiments, a global convention emerged in homogeneously mixing populations but not on one-dimensional lattices or random networks of degree $4$ [[20](https://arxiv.org/html/2610.31165v1#bib.bib47)]. LLM-derived policies, however, are biased, rely on bounded memory, and exhibit asymmetric critical masses and mixed states absent from the classical model [[24](https://arxiv.org/html/2610.31165v1#bib.bib3), [25](https://arxiv.org/html/2610.31165v1#bib.bib17)]. To our knowledge, networked LLM populations playing the naming game have been studied only in groups of $16$ agents [[34](https://arxiv.org/html/2610.31165v1#bib.bib5)], and the critical mass of an LLM population has never been measured on a network.

Here, we study how network topology shapes the formation of conventions in LLM populations and their robustness to committed minorities. We use the policies extracted from four LLMs by [Flint et al. [25]](https://arxiv.org/html/2610.31165v1#bib.bib17), which allow simulations of up to $10^{5}$ agents. We place them on four topologies: a fully connected network, equivalent to the well-mixed setting; two uncorrelated networks with power-law degree distributions [[35](https://arxiv.org/html/2610.31165v1#bib.bib55)], one heterogeneous and one nearly homogeneous; and a random regular network.
We find that networks change how fast consensus is reached and, for some word pairs, which convention wins and whether it is reached at all.
For three of the four models, the fully connected network is the fastest and the random regular network the slowest. In two cases, the networks with the lowest mean degree also reverse which convention wins. Networks homogeneous and low average degree restore restore consensus for one of the two word pairs that fail to converge when well-mixed,
requiring the presence of dynamical correlations between neighbouring agents. Hubs reach a given level of coordination earlier than low-degree nodes, spreading the consensus to the rest of the network. Yet they are the cheapest place from which to overturn a convention. In every condition we tested, the critical fraction is lowest when the committed agents occupy the hubs and highest when they occupy the low-degree nodes. Overall, our work extends the study of LLM populations from well-mixed to networked settings, and identifies the structure of interactions as a key factor in how the collective behaviour of multi-agent AI systems emerges and how it can be exposed to adversarial attack.

## 2 Methods

### 2.1 Naming game and agent model

We study the emergence of linguistic conventions using the minimal naming game, in which pairs of agents repeatedly interact and attempt to coordinate on one of $W=2$ competing conventions [[17](https://arxiv.org/html/2610.31165v1#bib.bib1), [24](https://arxiv.org/html/2610.31165v1#bib.bib3)]. At each interaction, an agent produces a candidate word informed by its memory of the outcomes of its $H$ most recent interactions. Memories are empty at the start of a simulation. When two interacting agents produce the same word, the interaction is scored as successful and both agents’ scores increase; a mismatch is scored as a failure, with the reward for success exceeding the penalty for failure. This incentivises local coordination between interacting pairs, but agents are never given an explicit incentive towards population-wide consensus.

In this study, an agent’s behaviour is represented by a probabilistic policy over the $W$ candidate words, conditioned on its current memory state. Rather than querying a live language model at every interaction, which is computationally prohibitive at the population sizes explored here, we reuse policies extracted from four instruction-tuned large language models by [Flint et al. [25]](https://arxiv.org/html/2610.31165v1#bib.bib17): Meta Llama 3.1 70B Instruct (denoted as Llama), OpenAI GPT-4o (GPT), Qwen QwQ-32B (QwQ), and Microsoft Phi-4 (Phi). In [Flint et al. [25]](https://arxiv.org/html/2610.31165v1#bib.bib17), each model was prompted with a textual description of a given memory state, and its output probabilities over the two candidate words were extracted to give a complete stochastic policy for every reachable memory state. This representation was validated against direct LLM-based simulation and reproduces its dynamics closely. We adopt the eleven word pairs used in that study, drawn from the CrowS-Pairs stereotype benchmark [[36](https://arxiv.org/html/2610.31165v1#bib.bib7)] and spanning gender, age, sexual orientation, race and socioeconomic stereotypes: {her, his}, {straight, gay}, {he, she}, {Black, White}, {less, more}, {old, young}, {White, African}, {American, Mexican}, {short, tall}, {man, woman}, {husband, wife}. We adopt the memory window $H=5$ used there.

The naming game for each populations of $N$ agents lasts for up to $T\_{\max}=$100\,000$$ population rounds, where one round comprises $N$ pairwise interactions. A population is judged to have reached consensus once its rolling coordination-success rate exceeds $0.98$; the round at which this occurs is recorded as the convergence time. Populations that do not cross this threshold within $T\_{\max}$ are classified as non-converged. We call a pair of words that does not reach convergence a “mixed-state pair”.

### 2.2 Networks and parameters

Well-mixed populations lie on a fully connected network (FC): every agent can interact with any other agent in the population. We compare FC with two other topologies: (i) uncorrelated networks with a power-law degree distribution [[35](https://arxiv.org/html/2610.31165v1#bib.bib55)], $P(k)\propto k^{-\gamma}$, generated, using the uncorrelated configuration model (UCM) [[37](https://arxiv.org/html/2610.31165v1#bib.bib2)], at two exponents, $\gamma=2.5$ (heterogeneous; UCM2.5 from now on) and $\gamma=5.0$ (near-homogeneous; UCM5.0), and (ii) a random regular network (RRN), in which every node has the same degree. In UCM, each of the $N$ nodes is assigned a degree drawn from $P(k)\propto k^{-\gamma}$, and restricted to $k\in[k\_{\min},\sqrt{N}]$. The resulting stubs are then joined uniformly at random, rejecting self-loops or repeated edges. The exponent $\gamma$ controls the tail of the degree distribution. At $\gamma=2.5$ the distribution of the topology is heavy-tailed, and is characterised by the presence of high-degree nodes called *hubs*. Conversely, at $\gamma=5$, the degree distribution decays rapidly, leading to a more homogeneous topology.
Table [1](https://arxiv.org/html/2610.31165v1#S2.T1 "Table 1 ‣ 2.2 Networks and parameters ‣ 2 Methods ‣ Network topology shapes consensus and vulnerability in LLM populations") reports the resulting degree statistics at $N=$10\,000$$. Both UCM configurations share a minimum degree $k\_{\min}=4$, which is also the fixed degree of the RRN.

Table 1: Network topologies and their degree statistics at $N=10000$.

| Topology | Full name | Degree distribution | $\langle k\rangle$ |
| --- | --- | --- | --- |
| FC | Fully Connected | regular, $k=N-1$ | $N-1$ |
| UCM2.5 | Uncorrelated Configuration Model | power-law, $\gamma=2.5$ | 8.64 |
| UCM5.0 | Uncorrelated Configuration Model | power-law, $\gamma=5.0$ | 4.76 |
| RRN | Random Regular Network | regular, $k=4$ | 4.00 |

We test four population sizes, $N\in\{$1000$,$5000$,$10\,000$,$100\,000$\}$, keeping all other parameters fixed. At each interaction we consider two rules for selecting which pair of agents interacts: an *edge-activation rule*, in which a uniformly random edge of the network is selected and both endpoints interact; and a *node-activation rule*, in which a node is first selected uniformly at random and then one of its neighbours is drawn uniformly to interact with it. The two rules differ in how strongly an agent’s degree determines its chance of being drawn into an interaction, and we use the comparison as a control in Section [3.1.1](https://arxiv.org/html/2610.31165v1#S3.SS1.SSS1 "3.1.1 Speed of consensus ‣ 3.1 Consensus dynamics across topologies ‣ 3 Results ‣ Network topology shapes consensus and vulnerability in LLM populations"). The two selection rules coincide in FC and RRN because every node has the same degree (see Appendix [A1.5](https://arxiv.org/html/2610.31165v1#A1.SS5 "A1.5 Random regular networks ‣ Appendix A1 Mean-field theory of the naming game on networks ‣ Network topology shapes consensus and vulnerability in LLM populations")).

Each condition, defined by a model, a word pair, a topology, an activation rule and a population size, is simulated $1000$ times at $N=1000$, $5000$ and $10\,000$, and $300$ times at $N=$100\,000$$. For every combination of topology and population size we generate $200$ independent network realisations ($50$ for $N=$100\,000$$). [Code and data](https://github.com/robertopassaro/llm-naming-game-networks) are publicly available.

In Sections [2.3](https://arxiv.org/html/2610.31165v1#S2.SS3 "2.3 Degree-resolved success on UCM ‣ 2 Methods ‣ Network topology shapes consensus and vulnerability in LLM populations") and [3.1.3](https://arxiv.org/html/2610.31165v1#S3.SS1.SSS3 "3.1.3 Topology effect on mixed-state pairs ‣ 3.1 Consensus dynamics across topologies ‣ 3 Results ‣ Network topology shapes consensus and vulnerability in LLM populations"), we use *annealed networks* as a control to isolate the effects of correlations in agents’ memory states caused by repeated interactions [[38](https://arxiv.org/html/2610.31165v1#bib.bib50)]. An annealed network keeps the degree of every node but rewires its edges, so that agents no longer interact persistently with the same individuals. We simulate it in the limit of infinitely fast rewiring, in which all edges are reshuffled before every interaction. In this limit the network structure, and with it every correlation of the memory states between neighbours, is lost. The only remaining property is the network degree sequence. By comparing annealed networks to the standard “quenched” (fixed) networks, we can determine whether an observed effect is driven by the correlations that build up between neighbours’ states over time.

### 2.3 Degree-resolved success on UCM

To resolve coordination by degree we record the number of interactions involving a degree-$k$ node and the number of them that succeeded. Their ratio is the cumulative degree-resolved success rate

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$S\_{k}=\frac{\text{successful interactions involving a degree-}k\text{ node}}{\text{total interactions involving a degree-}k\text{ node}}.$$ |  | (1) |

$S\_{k}$ is cumulative and increases with the population round $t$. For this analysis we considered only UCM2.5 at $N=$10\,000$$. Since nodes with high degrees are rare, we divide the vertices into five degree bins, $k=4$–5, 6–9, 10–17, 18–35 and 36–100, holding from $49.6\%$ down to $2.5\%$ of the population; we call the nodes in the lowest bin *low-degree nodes* and the ones in the highest bin *hubs*.

For each bin we then locate the crossing point $(t^{\*},n^{\*})$ at which $S\_{k}$ first reaches three target success levels: $0.6$, $0.7$ and $0.8$. Here $t^{\*}$ is measured in population rounds and $n^{\*}$ is the mean number of interactions a node of that bin has had by that point. The crossings of the five degree bins form an iso-success contour, which we summarise by its *tilt*, $t^{\*}(\text{low-degree nodes})/t^{\*}(\text{hub})$, greater than $1$ when hubs reach the level in fewer population rounds than low-degree nodes. We report the tilt on the normalised scale $\tau$ defined in Section [3.1.2](https://arxiv.org/html/2610.31165v1#S3.SS1.SSS2 "3.1.2 Degree-resolved success on UCM ‣ 3.1 Consensus dynamics across topologies ‣ 3 Results ‣ Network topology shapes consensus and vulnerability in LLM populations").

### 2.4 Committed minorities

To probe the robustness of an established convention against a committed minority, we seed a fixed fraction $p$ of the population with agents that always produce one target convention and never update their state, while the remaining agents begin in the steady consensus state on the competing convention, implemented by initialising them with a full memory of agreeing interactions in that convention. For each fraction $p$, we execute 200 independent runs to estimate the probability that the population flips to the committed convention within the simulation horizon, and we locate the critical fraction $p^{\*}$, the smallest committed fraction at which the flip probability reaches $0.5$, by bisection on the committed count to a resolution of $\Delta p\leq 0.01$. Within each pair, we called strong the convention preferred by the population in FC during convergence, and weak the other. Both commitment directions are tested for every word pair. On the UCM networks we rank the nodes by their degree, and we place the committed set either at the top of the ranking, at the bottom, or at random.

## 3 Results

The consensus-dynamics analysis spans four population sizes, four topologies, eleven word pairs and four models under edge activation. In Section [3.1.1](https://arxiv.org/html/2610.31165v1#S3.SS1.SSS1 "3.1.1 Speed of consensus ‣ 3.1 Consensus dynamics across topologies ‣ 3 Results ‣ Network topology shapes consensus and vulnerability in LLM populations") node activation is also tested, on the same population sizes and word pairs. The committed-minority analyses (Section [3.2](https://arxiv.org/html/2610.31165v1#S3.SS2 "3.2 Committed minorities ‣ 3 Results ‣ Network topology shapes consensus and vulnerability in LLM populations")) and the degree-resolved success analyses (Section [3.1.2](https://arxiv.org/html/2610.31165v1#S3.SS1.SSS2 "3.1.2 Degree-resolved success on UCM ‣ 3.1 Consensus dynamics across topologies ‣ 3 Results ‣ Network topology shapes consensus and vulnerability in LLM populations")) are run for $N=$10\,000$$.

### 3.1 Consensus dynamics across topologies

Network structure can potentially change which of the two conventions the population selects. We therefore compared, across topologies, the fraction of runs in which the established convention differs from that on FC. Excluding the two mixed-state Llama pairs {young/old} and {more/less}, $42$ model $\times$ word-pair combinations reach consensus in every run across all topologies, values of $N$, and activation rules. In $40$ of them, the same word wins most runs under all conditions. The two exceptions are GPT pairs. For {she/he}, *she* wins $95\%$ of FC runs at $N=$1000$$ and all runs at larger $N$, whereas *he* wins $71\%$, $95\%$, and $100\%$ of RRN runs at $N=$1000$$, $10\,000$, and $100\,000$, respectively (edge activation). For {tall/short}, *tall* wins at least $99.5\%$ of FC runs, whereas *short* wins $94.5$–$100\%$ on RRN and $54$–$88\%$ on UCM5.0. Node activation yields the same pattern. In both pairs, the reversal grows with $N$, ruling out finite-size fluctuations.

#### 3.1.1 Speed of consensus

![Refer to caption](https://arxiv.org/html/2610.31165v1/figs/fig_slopegraph_mode_edge_N10000.png)


Figure 1: Mode convergence time under edge activation at $N=10000$, one panel per model. Each line connects the four topology values FC, UCM2.5, UCM5.0, RRN; colour and marker shape jointly identify the word pair and are consistent across panels.

To test whether topology systematically changes how fast a population reaches consensus, we compared the mode of the convergence time of every combination of word pair. We use the mode because it is less sensitive to outliers, but repeating the analysis on the mean gives the same results (Table [A1](https://arxiv.org/html/2610.31165v1#A2.T1 "Table A1 ‣ A2.1 Statistical tests for speed of consensus across topologies ‣ Appendix A2 Additional figures and tables ‣ Network topology shapes consensus and vulnerability in LLM populations"), Figure [A1](https://arxiv.org/html/2610.31165v1#A2.F1 "Figure A1 ‣ A2.1 Statistical tests for speed of consensus across topologies ‣ Appendix A2 Additional figures and tables ‣ Network topology shapes consensus and vulnerability in LLM populations")).
For QwQ, GPT, and Phi, the four topologies differ significantly. Their speeds consistently rank as FC < UCM2.5 < UCM5.0 < RRN across all tested conditions (Figure [1](https://arxiv.org/html/2610.31165v1#S3.F1 "Figure 1 ‣ 3.1.1 Speed of consensus ‣ 3.1 Consensus dynamics across topologies ‣ 3 Results ‣ Network topology shapes consensus and vulnerability in LLM populations"); Table [A1](https://arxiv.org/html/2610.31165v1#A2.T1 "Table A1 ‣ A2.1 Statistical tests for speed of consensus across topologies ‣ Appendix A2 Additional figures and tables ‣ Network topology shapes consensus and vulnerability in LLM populations")). However, Llama does not follow this pattern for eight pairs: two have FC as the fastest topology with the rest statistically indistinguishable, three show no resolvable topology effect at all, and three entirely invert the global ordering.

Overall, denser topologies support faster consensus in three of the four models. To further investigate the role of density, we analysed the convergence time of RRN at $N=$10\,000$$ with edge activation, across increasing values of average degree (Figure [A2](https://arxiv.org/html/2610.31165v1#A2.F2 "Figure A2 ‣ A2.3 Speed of consensus on increasing values of K for RRN ‣ Appendix A2 Additional figures and tables ‣ Network topology shapes consensus and vulnerability in LLM populations")). The results, supported by statistical tests (Table [A2](https://arxiv.org/html/2610.31165v1#A2.T2 "Table A2 ‣ A2.2 Statistical tests for speed of consensus on increasing values of K for RRN ‣ Appendix A2 Additional figures and tables ‣ Network topology shapes consensus and vulnerability in LLM populations")), show that for QwQ, GPT, and Phi, RRN convergence time decreases with $K$, asymptotically approaching that of FC. For instance, at $K=4$, every one of the eleven QwQ pairs converges between $1.3$ ({Mexican/American}) and $12.2$ ({she/he}) times slower than on FC; but by $K=16$ no pair is more than $1.8$ times slower than FC, and by $K=256$ none is more than $1.05$ times slower. RRN convergence time in Llama also approaches that of FC asymptotically, but at low $K$ it can be higher or lower than FC depending on the word pair.

#### 3.1.2 Degree-resolved success on UCM

Now we ask whether hubs on UCM2.5 reach coordination faster than low-degree nodes, which first requires knowing how many interactions a node of degree $k$ accumulates over time.
In the symmetric edge update version of the naming game, one interaction is given by selecting an edge, and both nodes at the extremes of the edge take part in the interaction. A network of $N$ nodes with mean degree $\langle k\rangle$ has $E=N\langle k\rangle/2$ edges. Therefore, a node of degree $k$ takes part in any single interaction with probability $k/E$. Since a population round is $N$ interactions, the expected number of interactions a node with degree $k$ has accumulated after $t$ rounds is [[39](https://arxiv.org/html/2610.31165v1#bib.bib49)]

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$n\_{k}(t)\;=\;\frac{k}{E}\,Nt\;=\;\frac{2kt}{\langle k\rangle}.$$ |  | (2) |

Because Eq. [2](https://arxiv.org/html/2610.31165v1#S3.E2 "In 3.1.2 Degree-resolved success on UCM ‣ 3.1 Consensus dynamics across topologies ‣ 3 Results ‣ Network topology shapes consensus and vulnerability in LLM populations") is proportional to $t$, the exposure ratio between two degree classes is $k/k^{\prime}$ at every moment and never changes with time. The number of interactions of a given node is therefore a function of its degree and the population rounds.

To investigate the interaction between success, population rounds and a node’s own interactions, we place the point at which each degree bin first reaches a given success level in the $(t,n)$ plane defined by Eq. [2](https://arxiv.org/html/2610.31165v1#S3.E2 "In 3.1.2 Degree-resolved success on UCM ‣ 3.1 Consensus dynamics across topologies ‣ 3 Results ‣ Network topology shapes consensus and vulnerability in LLM populations"). Figure [2](https://arxiv.org/html/2610.31165v1#S3.F2 "Figure 2 ‣ 3.1.2 Degree-resolved success on UCM ‣ 3.1 Consensus dynamics across topologies ‣ 3 Results ‣ Network topology shapes consensus and vulnerability in LLM populations") shows linear regressions, each connecting the points at which the degree bins reach a given success level. Their orientation distinguishes two possible regimes. If the contours are vertical, all degree bins reach the same success level at the same population round, even though hubs have taken part in many more interactions than low-degree nodes. In this regime, success depends on the age of the population. If the contours are horizontal, each degree bin reaches the same success level after the same number of its own interactions, regardless of when this happens in population time. In this regime, success depends on individual experience. The tilt measures this orientation, and its two extreme values follow directly from Eq. [2](https://arxiv.org/html/2610.31165v1#S3.E2 "In 3.1.2 Degree-resolved success on UCM ‣ 3.1 Consensus dynamics across topologies ‣ 3 Results ‣ Network topology shapes consensus and vulnerability in LLM populations"). For a vertical contour $t^{\*}$ (population rounds at which a given success level is reached) is the same for every bin, so the tilt is $1$. For a horizontal contour $n^{\*}$ (number of interactions in which a given success level is reached) is the same for every bin, so the tilt is $k\_{\text{hub}}/k\_{\text{low}}$. For UCM2.5 and $N=10000$, this is $12.56$, the ratio between the mean degrees of the two bins ($54.81$ and $4.36$).

To make the tilt easier to read, we map it onto a normalised scale,

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\tau\;=\;\frac{\ln(\text{tilt})}{\ln(k\_{\text{hub}}/k\_{\text{low}})},$$ |  | (3) |

so that a tilt of $1$ (vertical contour) corresponds to $\tau=0$ and a tilt of $12.56$ (horizontal contour) corresponds to $\tau=1$. A negative $\tau$ means that hubs reach the level later than low-degree nodes in population time.

![Refer to caption](https://arxiv.org/html/2610.31165v1/figs/fig1e_isosuccess_gpt-4o_ucm_2.5_N10000.png)


Figure 2: Exposure and success by degree for GPT on UCM2.5 at $N=10000$, one panel per word pair. Axes are population rounds $t$ and the node’s own cumulative interaction count $n$. The straight grey lines mark the range of possible values for nodes in each of the five degree bins, according to Eq. [2](https://arxiv.org/html/2610.31165v1#S3.E2 "In 3.1.2 Degree-resolved success on UCM ‣ 3.1 Consensus dynamics across topologies ‣ 3 Results ‣ Network topology shapes consensus and vulnerability in LLM populations"). Markers are the mean across runs at which each bin’s cumulative success rate $S\_{k}$ first reaches $0.6$, $0.7$ and $0.8$: red circles for the quenched network, blue squares for the annealed control. The line between the markers is a linear fit (solid quenched, dashed annealed). The top-left corner of each panel reports the tilt of the quenched contour at the three levels, given by the ratio $t^{\*}(\text{low-degree nodes})/t^{\*}(\text{hubs})$ between the population rounds at which the lowest ($k=4$–5) and the highest ($k=36$–100) degree bins first reach $0.6$, $0.7$ and $0.8$. The bottom-right panel shows the distribution of the tilts across word pairs, one row per success level $S$ (labelled on the left), for the quenched (red circles) and the annealed network (blue squares), with the median as a vertical bar; the bottom axis gives the tilt, the top axis the normalised tilt $\tau$ (Eq. [3](https://arxiv.org/html/2610.31165v1#S3.E3 "In 3.1.2 Degree-resolved success on UCM ‣ 3.1 Consensus dynamics across topologies ‣ 3 Results ‣ Network topology shapes consensus and vulnerability in LLM populations")), and the dashed lines mark the vertical ($\tau=0$) and horizontal ($\tau=1$) contours, the dotted line their midpoint ($\tau=0.5$).

In Figure [2](https://arxiv.org/html/2610.31165v1#S3.F2 "Figure 2 ‣ 3.1.2 Degree-resolved success on UCM ‣ 3.1 Consensus dynamics across topologies ‣ 3 Results ‣ Network topology shapes consensus and vulnerability in LLM populations") the contours are close to vertical in all eleven word pairs and at all three levels: $\tau$ of GPT goes from $-0.002$ to $0.24$. The same holds for the word pairs of the other models (Figures [A5](https://arxiv.org/html/2610.31165v1#A2.F5 "Figure A5 ‣ A2.6 Iso-success contours for Llama, QwQ and Phi ‣ Appendix A2 Additional figures and tables ‣ Network topology shapes consensus and vulnerability in LLM populations"), [A6](https://arxiv.org/html/2610.31165v1#A2.F6 "Figure A6 ‣ A2.6 Iso-success contours for Llama, QwQ and Phi ‣ Appendix A2 Additional figures and tables ‣ Network topology shapes consensus and vulnerability in LLM populations"), and [A7](https://arxiv.org/html/2610.31165v1#A2.F7 "Figure A7 ‣ A2.6 Iso-success contours for Llama, QwQ and Phi ‣ Appendix A2 Additional figures and tables ‣ Network topology shapes consensus and vulnerability in LLM populations")). Excluding the mixed-state conditions and those in which the initial success is above the thresholds, the normalised tilt across conditions has median $0.16$ (interquartile range $0.07$–$0.24$) and is below $0.5$ in $113$ of the $115$ conditions. The only two exceptions are Phi {she/he} ($0.55$) and {woman/man} ($0.54$), both at $S=0.6$.

However, hubs still reach a given success level first: $\tau$ is above $0$ in $109$ of the $115$ conditions. This is consistent with the picture known for the naming game and other consensus dynamics on heterogeneous networks [[32](https://arxiv.org/html/2610.31165v1#bib.bib4), [18](https://arxiv.org/html/2610.31165v1#bib.bib8)]. Hubs settle on a convention early in the dynamics, and their nearest neighbours tend to share it. Moving away from the hubs this agreement is lost, and nodes remain in mixed states. The six conditions with a negative $\tau$ are all at $S=0.6$ (Table [A5](https://arxiv.org/html/2610.31165v1#A2.T5 "Table A5 ‣ A2.6 Iso-success contours for Llama, QwQ and Phi ‣ Appendix A2 Additional figures and tables ‣ Network topology shapes consensus and vulnerability in LLM populations")). At this level the population is still disordered: a hub interacts with many neighbours holding conflicting conventions and cannot yet settle, while a low-degree node can reach an agreement with its few neighbours. All six have a positive $\tau$ at $S=0.8$ ($0.04$–$0.15$).

The lead of the hubs comes from the fact that they interact more: at the median $\tau=0.16$, hubs have taken part in $\approx 8.4$ times as many interactions as low-degree nodes. This is analogous to epidemic spreading, where hubs keep the infection alive because they take part in more transmission events [[40](https://arxiv.org/html/2610.31165v1#bib.bib53)].

To test whether the advantage of the hubs depends on correlations between the states of neighbouring agents, and not only on their higher exposure, we repeat every simulation on the annealed networks described in Section [2.2](https://arxiv.org/html/2610.31165v1#S2.SS2 "2.2 Networks and parameters ‣ 2 Methods ‣ Network topology shapes consensus and vulnerability in LLM populations"). The annealed network preserves the degree of every node, but draws new edges at every interaction, so that no correlation between neighbours can build up. For each model–word pair and success level we compute the difference $\Delta\tau=\tau\_{\text{annealed}}-\tau\_{\text{quenched}}$, which equals $0$ when removing persistent neighbourhoods leaves the contour unchanged. At $S=0.8$, $\Delta\tau$ has median $0.005$ (interquartile range from $-0.004$ to $0.013$). At this level, the advantage of the hubs is therefore accounted by their exposure alone. At $S=0.6$, instead, $\Delta\tau$ is positive in $34$ of $38$ conditions (median $0.05$), because the annealed network delays $t^{\*}$ of the lowest degree bin by $15\%$ and that of the highest by only $4\%$ (medians). In the six conditions in which hubs arrive last on the quenched network (Table [A5](https://arxiv.org/html/2610.31165v1#A2.T5 "Table A5 ‣ A2.6 Iso-success contours for Llama, QwQ and Phi ‣ Appendix A2 Additional figures and tables ‣ Network topology shapes consensus and vulnerability in LLM populations")), the delay is $8\%$ to $200\%$ for low-degree nodes and $-17\%$ to $+12\%$ for hubs. Therefore, in the disordered phase, a low-degree node can reach agreement with its few persistent neighbours, and this early advantage disappears once its partners are reshuffled.

Removing persistent neighbourhoods also changes the speed of consensus. For each of the 42 model $\times$ word-pair conditions in which all runs reach consensus on both networks, we compare the median convergence time on the annealed network with that on the quenched network. The annealed network is faster in 31 conditions, equally fast in 8, and slower in 3. Median convergence time on the annealed network is $14\%$ faster overall (median across conditions; range from $55\%$ faster to $27\%$ slower; Wilcoxon signed-rank test on log times, $p=2\times 10^{-6}$), and the reduction grows with the quenched convergence time (Spearman $\rho=-0.69$, $p<10^{-6}$): for the ten slowest conditions (quenched median $21$-$281$ rounds), consensus time drops by $45\%$. Together with the tilt, these results suggest that persistent neighbourhoods sustain local agreements that conflict with the rest of the population. This helps low-degree nodes early on but delays global consensus, and increasingly so the slower consensus already is.

#### 3.1.3 Topology effect on mixed-state pairs

In the well-mixed population, the Llama pairs {young, old} and {more, less} reach consensus at small system size $N$ but, above a critical size, freeze in a mixed state in which neither convention ever wins [[25](https://arxiv.org/html/2610.31165v1#bib.bib17)]. Adding network structure rescues this failure, but only for the two topologies with the most homogeneous degree distributions: UCM5.0 and RRN (Table [2](https://arxiv.org/html/2610.31165v1#S3.T2 "Table 2 ‣ 3.1.3 Topology effect on mixed-state pairs ‣ 3.1 Consensus dynamics across topologies ‣ 3 Results ‣ Network topology shapes consensus and vulnerability in LLM populations")). The rescue is slower on UCM5.0, and its cost grows with $N$: the median convergence time rises from $108$ to $267$ rounds between $N=$1000$$ and $100\,000$, against $64$ to $79$ on RRN (Table [A3](https://arxiv.org/html/2610.31165v1#A2.T3 "Table A3 ‣ A2.5 Convergence time on RRN at increasing K for the mixed-state Llama pairs ‣ Appendix A2 Additional figures and tables ‣ Network topology shapes consensus and vulnerability in LLM populations")). No topology rescues the pair {more/less} at any size tested except RRN at $N=1000$ ($0.10$, median $508$ rounds), which fails at all larger sizes.

To investigate further the cause of the rescued consensus, we run UCM5.0 and RRN using annealed network controls, which preserve every node’s degree while removing persistent neighbourhoods. A stable pair {african/white} was run alongside as a negative control and reaches consensus in every condition, confirming the annealing itself is not the source of any failure to converge. Under annealing, both UCM5.0 and RRN fail to rescue either mixed-state pair at any population size: the consensus fraction is exactly $0.00$ for {young/old} and {more/less} on both topologies at every $N\in\{1000,5000,10000,100000\}$ (300 runs per condition). For RRN this is expected: in the annealed network approximation, the dynamics on an RRN of any degree $K$ reduces to FC (Appendix [A1](https://arxiv.org/html/2610.31165v1#A1 "Appendix A1 Mean-field theory of the naming game on networks ‣ Network topology shapes consensus and vulnerability in LLM populations")). This shows that the rescue in networks with homogeneous degree requires the dynamical correlations between the states of neighbours.

Table 2: Consensus fraction for the two mixed-state Llama pairs across topologies and population sizes. 1000 rounds for condition.

| Pair | Topology | $N=1000$ | $N=5000$ | $N=10000$ | $N=100000$ |
| --- | --- | --- | --- | --- | --- |
| young/old | FC (well-mixed) | 0.00 | 0.00 | 0.00 | 0.00 |
|  | UCM2.5 | 0.07 | 0.00 | 0.00 | 0.00 |
|  | UCM5.0 | 1.00 | 1.00 | 1.00 | 1.00 |
|  | RRN | 1.00 | 1.00 | 1.00 | 1.00 |
| more/less | FC (well-mixed) | 0.00 | 0.00 | 0.00 | 0.00 |
|  | UCM2.5 | 0.00 | 0.00 | 0.00 | 0.00 |
|  | UCM5.0 | 0.00 | 0.00 | 0.00 | 0.00 |
|  | RRN | 0.10 | 0.00 | 0.00 | 0.00 |


Table 3: Mean / median critical fraction $p^{\*}$ by placement strategy, UCM only, $N=10000$. Both commitment directions pooled (88 values per cell).

| Topology | Placement | Mean | Median |
| --- | --- | --- | --- |
| UCM2.5 | hub | 0.090 | 0.026 |
|  | random | 0.211 | 0.160 |
|  | low-degree | 0.366 | 0.349 |
| UCM5.0 | hub | 0.145 | 0.064 |
|  | random | 0.190 | 0.128 |
|  | low-degree | 0.213 | 0.154 |

### 3.2 Committed minorities

#### 3.2.1 Degree-dependent placement on UCM

On a heterogeneous network, the ability of a committed minority to overturn an established convention may depend not only on its size but also on the position of its members. We therefore compare the critical fraction $p^{\*}$ on UCM when the committed agents occupy the hubs, randomly chosen nodes, or the low-degree nodes. The ordering $p^{\*}(\text{hub})\leq p^{\*}(\text{random})\leq p^{\*}(\text{low-degree nodes})$ holds in all conditions on both UCM exponents (Figure [3(a)](https://arxiv.org/html/2610.31165v1#S3.F3.sf1 "In Figure 3 ‣ 3.2.1 Degree-dependent placement on UCM ‣ 3.2 Committed minorities ‣ 3 Results ‣ Network topology shapes consensus and vulnerability in LLM populations"); Table [3](https://arxiv.org/html/2610.31165v1#S3.T3 "Table 3 ‣ 3.1.3 Topology effect on mixed-state pairs ‣ 3.1 Consensus dynamics across topologies ‣ 3 Results ‣ Network topology shapes consensus and vulnerability in LLM populations")). To test whether this ordering is systematic, we compared $p^{\*}$ of every word pair across the three placements, separately for each model, direction and UCM exponent (Table [A6](https://arxiv.org/html/2610.31165v1#A2.T6 "Table A6 ‣ A2.7 Statistical tests for committed minorities ‣ Appendix A2 Additional figures and tables ‣ Network topology shapes consensus and vulnerability in LLM populations")).
The three placements differ significantly for every model and direction on both exponents ($W\geq 0.85$), with the ranks ordered as hub $<$ random $<$ low-degree nodes. The only exception is Llama in the weak direction (the one not preferred when reaching consensus on FC). There, in six of the nine pairs the weak convention is overturned by $1$ to $32$ committed agents out of $10\,000$, below the resolution of the bisection: the resulting ties make the tests non-significant, although the ordering holds in all nine pairs. The degree exponent changes the size of the placement effect: the gap $p^{\*}(\text{low-degree nodes})-p^{\*}(\text{hub})$ is larger on $\gamma=2.5$ than on the near-homogeneous $\gamma=5.0$ in 83 of the 86 pairs, as expected since $83.6\%$ of nodes lie at $k\leq 5$ on $\gamma=5.0$, against $49.5\%$ on $\gamma=2.5$.

In 15 conditions $p^{\*}=0$: the established consensus does not hold even with zero committed agents. These are systematic: all Llama, on the pairs {her, his} and {short, tall}, always in the direction starting from consensus on *her* and *short*, and present on every topology and placement (both UCMs at all three placements, RRN, and FC for {short, tall}). Because $p^{\*}=0$ denotes the absence of a convention to overturn rather than a small critical mass, these conditions are omitted from Figures [3(a)](https://arxiv.org/html/2610.31165v1#S3.F3.sf1 "In Figure 3 ‣ 3.2.1 Degree-dependent placement on UCM ‣ 3.2 Committed minorities ‣ 3 Results ‣ Network topology shapes consensus and vulnerability in LLM populations") and [3(b)](https://arxiv.org/html/2610.31165v1#S3.F3.sf2 "In Figure 3 ‣ 3.2.1 Degree-dependent placement on UCM ‣ 3.2 Committed minorities ‣ 3 Results ‣ Network topology shapes consensus and vulnerability in LLM populations"). At the opposite extreme, 27 conditions require $p^{\*}\geq 0.95$, and in 7 of them it is exactly $1.00$, meaning the convention flips only when the entire population is committed. All seven occur under low-degree nodes placement.

![Refer to caption](https://arxiv.org/html/2610.31165v1/figs/fig3b_placement.png)


(a) Placement (hub / random / low-degree nodes) on UCM2.5).

![Refer to caption](https://arxiv.org/html/2610.31165v1/figs/fig3a_topology.png)


(b) Topology (FC, UCM2.5, UCM5.0, RRN) under random placement.

Figure 3: Critical committed fraction $p^{\*}$ at $N=10000$, by model and commitment direction. (a) $p^{\*}$ by placement of the committed minority on UCM2.5. (b) $p^{\*}$ by topology under random placement. In both panels, large symbols are the median over the 11 word pairs and small symbols the individual pairs; the $p^{\*}=0$ conditions are excluded from the plot.

#### 3.2.2 Topology effects on the critical mass

The weak and strong conventions of a given pair exhibit unequal robustness: displacing the strong convention requires a larger $p^{\*}$ than displacing the weak one in 34 of the 44 pairs on FC (4 ties), and under random placement in 37 on UCM2.5 and 38 on both UCM5.0 and RRN. This reproduces the directional asymmetry reported by [[25](https://arxiv.org/html/2610.31165v1#bib.bib17)].

To test whether topology systematically changes the critical mass, we compared $p^{\*}$ of every word pair under random placement across FC, UCM2.5, UCM5.0 and RRN, separately for each model and direction (Figure [3(b)](https://arxiv.org/html/2610.31165v1#S3.F3.sf2 "In Figure 3 ‣ 3.2.1 Degree-dependent placement on UCM ‣ 3.2 Committed minorities ‣ 3 Results ‣ Network topology shapes consensus and vulnerability in LLM populations"); Table [4](https://arxiv.org/html/2610.31165v1#S3.T4 "Table 4 ‣ 3.2.2 Topology effects on the critical mass ‣ 3.2 Committed minorities ‣ 3 Results ‣ Network topology shapes consensus and vulnerability in LLM populations") reports the median $p^{\*}$ of each combination).
For GPT and Phi the four topologies differ significantly in both directions, with the ranks in the predicted order; the same trend holds for QwQ in the weak direction (Table [A7](https://arxiv.org/html/2610.31165v1#A2.T7 "Table A7 ‣ A2.7 Statistical tests for committed minorities ‣ Appendix A2 Additional figures and tables ‣ Network topology shapes consensus and vulnerability in LLM populations")).
There are three exceptions. For Llama in the strong direction the four topologies differ significantly ($W=0.64$), but the ordering is *reversed*: RRN requires the largest committed minority and FC the smallest (rank sums $38.5$, $32.5$, $25.0$, $14.0$ for RRN, UCM5.0, UCM2.5 and FC). For QwQ in the strong direction the four topologies differ ($W=0.32$, $p<.05$) but without a trend (Page’s $L$ not significant). Finally, for Llama in the weak direction topology has no significant effect ($p=.11$). Therefore, the predicted ordering is supported for three models in the weak direction and for two in the strong direction.

Table 4: Median critical fraction $p^{\*}$ over the word pairs, by model, commitment direction and topology under random placement, $N=10000$. Strong and weak as in Figure [3](https://arxiv.org/html/2610.31165v1#S3.F3 "Figure 3 ‣ 3.2.1 Degree-dependent placement on UCM ‣ 3.2 Committed minorities ‣ 3 Results ‣ Network topology shapes consensus and vulnerability in LLM populations"); the $p^{\*}=0$ conditions are excluded. Statistical tests are in Table [A7](https://arxiv.org/html/2610.31165v1#A2.T7 "Table A7 ‣ A2.7 Statistical tests for committed minorities ‣ Appendix A2 Additional figures and tables ‣ Network topology shapes consensus and vulnerability in LLM populations").

| Model | Direction | RRN | UCM5.0 | UCM2.5 | FC |
| --- | --- | --- | --- | --- | --- |
| Llama-3.1-70B | strong | 0.307 | 0.282 | 0.256 | 0.237 |
|  | weak | 0.003 | 0.002 | 0.001 | 0.002 |
| GPT-4o | strong | 0.122 | 0.134 | 0.154 | 0.166 |
|  | weak | 0.051 | 0.064 | 0.090 | 0.102 |
| QwQ-32B | strong | 0.422 | 0.378 | 0.371 | 0.435 |
|  | weak | 0.070 | 0.083 | 0.141 | 0.230 |
| Phi-4 | strong | 0.128 | 0.147 | 0.211 | 0.288 |
|  | weak | 0.102 | 0.122 | 0.186 | 0.262 |

## 4 Discussion

We embedded populations of LLM agents playing the minimal naming game in networks of controlled degree structure and measured how they converge on a convention and how easily a committed minority can overturn it. Three main results emerge.

First, denser topologies support faster consensus: for most word pairs, convergence time is ordered FC $<$ UCM2.5 $<$ UCM5.0 $<$ RRN. Because they interact more often, hubs reach a given success level slightly earlier than low-degree nodes, consistent with classical naming game experiments in which agreement forms around hubs and spreads outward [[32](https://arxiv.org/html/2610.31165v1#bib.bib4)]. Persistent neighbourhoods matter mainly in the disordered phase, where low-degree nodes can settle local agreements with their few fixed partners, echoing the known tension between locally stabilising structure and global convergence [[31](https://arxiv.org/html/2610.31165v1#bib.bib6), [41](https://arxiv.org/html/2610.31165v1#bib.bib13), [42](https://arxiv.org/html/2610.31165v1#bib.bib14)]. These results parallel human systems, where topology is known to affect convergence [[31](https://arxiv.org/html/2610.31165v1#bib.bib6), [32](https://arxiv.org/html/2610.31165v1#bib.bib4), [18](https://arxiv.org/html/2610.31165v1#bib.bib8)].

Second, topology occasionally changes which convention wins (Section [3.1](https://arxiv.org/html/2610.31165v1#S3.SS1 "3.1 Consensus dynamics across topologies ‣ 3 Results ‣ Network topology shapes consensus and vulnerability in LLM populations")) and whether consensus emerges at all, rescuing a pair that never converges in a well-mixed population. The rescue vanishes when neighbours are reshuffled, showing that dynamical correlations between persistent neighbours are necessary for it. Unlike density leading to faster consensus, these effects have not been observed in human populations.

Third, the critical fraction $p^{\*}$ needed to overturn an established convention follows $p^{\*}(\text{hub})\leq p^{\*}(\text{random})\leq p^{\*}(\text{low-degree nodes})$ in all conditions. The most cost-effective attack on a multi-agent LLM system is thus to target its hubs [[43](https://arxiv.org/html/2610.31165v1#bib.bib23), [44](https://arxiv.org/html/2610.31165v1#bib.bib24)], mirroring degree-targeted attacks [[45](https://arxiv.org/html/2610.31165v1#bib.bib16)]. Unlike prompt injection, jailbreaks, or manipulated knowledge propagating between agents [[46](https://arxiv.org/html/2610.31165v1#bib.bib34), [47](https://arxiv.org/html/2610.31165v1#bib.bib35), [48](https://arxiv.org/html/2610.31165v1#bib.bib36)], this attack compromises neither the agents nor the content they exchange: it merely places ordinary, persistently opinionated agents at well-connected positions. For randomly placed committed minorities, the ordering RRN $<$ UCM5.0 $<$ UCM2.5 $<$ FC holds in only five of the eight model-direction combinations tested, highlighting variability across models. In the minimal naming game, the tipping point is known to shift with mean degree and connectivity [[33](https://arxiv.org/html/2610.31165v1#bib.bib12)], and committed agents at central or highly active positions are far more effective than randomly placed ones [[41](https://arxiv.org/html/2610.31165v1#bib.bib13), [42](https://arxiv.org/html/2610.31165v1#bib.bib14)]. We show that these effects persist, and sharpen, in LLMs.

Our work has limitations. First, results are model dependent: Llama departs from the majority pattern in speed ordering, in the topology dependence of $p^{\*}$, and in having mixed-state pairs, so more models are needed before generalising. Second, the minimal naming game makes collective properties testable at population sizes beyond the reach of direct LLM querying, but it is a simplified task; future work should test more ecological scenarios with richer interactions [[49](https://arxiv.org/html/2610.31165v1#bib.bib30), [50](https://arxiv.org/html/2610.31165v1#bib.bib31), [51](https://arxiv.org/html/2610.31165v1#bib.bib57)]. Third, we fixed memory at $H=5$ and the number of competing conventions at $W=2$. Consensus in LLM populations depends on memory [[34](https://arxiv.org/html/2610.31165v1#bib.bib5)], and larger convention sets open indirect routes between equilibria that change the cost of an attack [[27](https://arxiv.org/html/2610.31165v1#bib.bib18)].

Despite these limitations, our results bear directly on the safety of multi-agent systems, where heterogeneous topologies are increasingly common [[30](https://arxiv.org/html/2610.31165v1#bib.bib25), [44](https://arxiv.org/html/2610.31165v1#bib.bib24), [10](https://arxiv.org/html/2610.31165v1#bib.bib28)]. In most of our settings, well-mixed populations reach consensus faster and require larger committed minorities to be overturned than networked ones, so well-mixed estimates can overstate robustness. In a few cases, topology even changes which convention is established and whether consensus is reached. Moreover, because all agents in a well-mixed population are equivalent, the effect of committed-agent placement cannot be observed there. This matters because the conventions agent populations adopt can have tangible consequences, from prices set by autonomous pricing agents [[52](https://arxiv.org/html/2610.31165v1#bib.bib32), [53](https://arxiv.org/html/2610.31165v1#bib.bib33)] to narratives amplified by agent swarms [[6](https://arxiv.org/html/2610.31165v1#bib.bib22)]. The safety of multi-agent systems depends on these collective outcomes as much as on individual model behaviour [[2](https://arxiv.org/html/2610.31165v1#bib.bib19), [54](https://arxiv.org/html/2610.31165v1#bib.bib26)]. As agents are increasingly deployed in networks, assessing their safety will require mapping who interacts with whom, alongside testing the agents themselves.

##### Funding:

L.M.A. acknowledges the support from the Horizon-CL4 project MINGLE (EU grant: 101341932), and from the Carlsberg Foundation through the COCOONS project (CF21-0432). R.P.-S. acknowledges financial support from project PID2022-137505NB-C21/AEI/10.13039/501100011033/FEDER UE and the Acadèmia d’Excel·lència Award, funded by the Generalitat de Catalunya.

## References

- [1]
  Y. Bengio, S. Clare, C. Prunkl, M. Andriushchenko, B. Bucknall, M. Murray, R. Bommasani, S. Casper, T. Davidson, R. Douglas, et al. (2026)
  International ai safety report 2026.
  arXiv preprint arXiv:2602.21012.
  Cited by: [§1](https://arxiv.org/html/2610.31165v1#S1.p1.1 "1 Introduction ‣ Network topology shapes consensus and vulnerability in LLM populations").
- [2]
  L. Hammond, A. Chan, J. Clifton, J. Hoelscher-Obermaier, A. Khan, E. McLean, C. Smith, W. Barfuss, J. Foerster, T. Gavenčiak, et al. (2025)
  Multi-agent risks from advanced ai.
  arXiv preprint arXiv:2502.14143.
  Cited by: [§1](https://arxiv.org/html/2610.31165v1#S1.p1.1 "1 Introduction ‣ Network topology shapes consensus and vulnerability in LLM populations"),
  [§4](https://arxiv.org/html/2610.31165v1#S4.p6.1 "4 Discussion ‣ Network topology shapes consensus and vulnerability in LLM populations").
- [3]
  F. G. D. C. Ferreira, A. H. Gandomi, and R. T. N. Cardoso (2021)
  Artificial intelligence applied to stock market trading: a review.
  IEEE Access 9, pp. 30898–30917.
  Cited by: [§1](https://arxiv.org/html/2610.31165v1#S1.p1.1 "1 Introduction ‣ Network topology shapes consensus and vulnerability in LLM populations").
- [4]
  S. Sun, R. Wang, and B. An (2023)
  Reinforcement learning for quantitative trading.
  ACM Transactions on Intelligent Systems and Technology 14 (3), pp. 1–29.
  Cited by: [§1](https://arxiv.org/html/2610.31165v1#S1.p1.1 "1 Introduction ‣ Network topology shapes consensus and vulnerability in LLM populations").
- [5]
  J. Black, M. Eken, J. Parakilas, S. Dee, C. Ellis, K. Suman-Chauhan, et al. (2024)
  Strategic competition in the age of AI: emerging risks and opportunities from military use of artificial intelligence.
   RAND Corporation.
  Cited by: [§1](https://arxiv.org/html/2610.31165v1#S1.p1.1 "1 Introduction ‣ Network topology shapes consensus and vulnerability in LLM populations").
- [6]
  D. T. Schroeder, M. Cha, A. Baronchelli, N. Bostrom, N. A. Christakis, D. Garcia, et al. (2026)
  How malicious AI swarms can threaten democracy.
  Science 391 (6783), pp. 354–357.
  External Links: [Document](https://dx.doi.org/10.1126/science.adz1697)
  Cited by: [§1](https://arxiv.org/html/2610.31165v1#S1.p1.1 "1 Introduction ‣ Network topology shapes consensus and vulnerability in LLM populations"),
  [§4](https://arxiv.org/html/2610.31165v1#S4.p6.1 "4 Discussion ‣ Network topology shapes consensus and vulnerability in LLM populations").
- [7]
  Y. Li, H. Wen, W. Wang, X. Li, Y. Yuan, G. Liu, et al. (2024)
  Personal LLM agents: insights and survey about the capability, efficiency and security.
  arXiv preprint arXiv:2401.05459.
  Cited by: [§1](https://arxiv.org/html/2610.31165v1#S1.p1.1 "1 Introduction ‣ Network topology shapes consensus and vulnerability in LLM populations").
- [8]
  D. Akkil, T. Abuelsaad, K. Vikram, M. Pace, A. Vempaty, S. Beotra, R. Kokku, and S. Nitta (2026)
  Emergence world: adversarial stress-testing of long-horizon multi-agent systems.
  arXiv preprint arXiv:2609.17320.
  Cited by: [§1](https://arxiv.org/html/2610.31165v1#S1.p1.1 "1 Introduction ‣ Network topology shapes consensus and vulnerability in LLM populations").
- [9]
  R. Greenblatt, A. Cotra, and H. Wijk (2026)
  Brief independent investigation of agents’ behavior, reasoning and collaboration in the OpenAI / Hugging Face hacking incident.
  Note: METR and Redwood ResearchPublished 26 August 2026. <https://metr.org/blog/2026-08-26-openai-hugging-face-incident-investigation/>
  Cited by: [§1](https://arxiv.org/html/2610.31165v1#S1.p1.1 "1 Introduction ‣ Network topology shapes consensus and vulnerability in LLM populations").
- [10]
  H. C. Price, H. AlMuhanna, P. Bassani, M. Ho, and T. Evans (2026)
  Let there be claws: an early social network analysis of ai agents on moltbook.
  arXiv preprint arXiv:2602.20044.
  Cited by: [§1](https://arxiv.org/html/2610.31165v1#S1.p1.1 "1 Introduction ‣ Network topology shapes consensus and vulnerability in LLM populations"),
  [§1](https://arxiv.org/html/2610.31165v1#S1.p4.1 "1 Introduction ‣ Network topology shapes consensus and vulnerability in LLM populations"),
  [§4](https://arxiv.org/html/2610.31165v1#S4.p6.1 "4 Discussion ‣ Network topology shapes consensus and vulnerability in LLM populations").
- [11]
  L. Li, R. Ma, C. Chen, Z. Lu, and Y. Zhang (2026)
  The rise of ai agent communities: large-scale analysis of discourse and interaction on moltbook.
  arXiv preprint arXiv:2602.12634.
  Cited by: [§1](https://arxiv.org/html/2610.31165v1#S1.p1.1 "1 Introduction ‣ Network topology shapes consensus and vulnerability in LLM populations").
- [12]
  L. Wittgenstein (1953)
  Philosophical investigations. blackwells.
  Locus classicus for linguistic analysis, pp. 232.
  Cited by: [§1](https://arxiv.org/html/2610.31165v1#S1.p2.1 "1 Introduction ‣ Network topology shapes consensus and vulnerability in LLM populations").
- [13]
  D. Lewis (2008)
  Convention: a philosophical study.
   John Wiley & Sons.
  Cited by: [§1](https://arxiv.org/html/2610.31165v1#S1.p2.1 "1 Introduction ‣ Network topology shapes consensus and vulnerability in LLM populations").
- [14]
  H. P. Young (1993)
  The evolution of conventions.
  Econometrica 61 (1), pp. 57–84.
  Cited by: [§1](https://arxiv.org/html/2610.31165v1#S1.p2.1 "1 Introduction ‣ Network topology shapes consensus and vulnerability in LLM populations").
- [15]
  C. Bicchieri (2005)
  The grammar of society: the nature and dynamics of social norms.
   Cambridge University Press.
  Cited by: [§1](https://arxiv.org/html/2610.31165v1#S1.p2.1 "1 Introduction ‣ Network topology shapes consensus and vulnerability in LLM populations").
- [16]
  L. Steels (1995)
  A self-organizing spatial vocabulary.
  Artificial Life 2 (3), pp. 319–332.
  Cited by: [§1](https://arxiv.org/html/2610.31165v1#S1.p2.1 "1 Introduction ‣ Network topology shapes consensus and vulnerability in LLM populations").
- [17]
  A. Baronchelli, M. Felici, V. Loreto, E. Caglioti, and L. Steels (2006)
  Sharp transition towards shared vocabularies in multi-agent systems.
  Journal of Statistical Mechanics: Theory and Experiment 2006 (06), pp. P06014–P06014.
  Cited by: [§1](https://arxiv.org/html/2610.31165v1#S1.p2.1 "1 Introduction ‣ Network topology shapes consensus and vulnerability in LLM populations"),
  [§2.1](https://arxiv.org/html/2610.31165v1#S2.SS1.p1.1 "2.1 Naming game and agent model ‣ 2 Methods ‣ Network topology shapes consensus and vulnerability in LLM populations").
- [18]
  C. Castellano, S. Fortunato, and V. Loreto (2009)
  Statistical physics of social dynamics.
  Reviews of Modern Physics 81 (2), pp. 591–646.
  External Links: [Document](https://dx.doi.org/10.1103/RevModPhys.81.591)
  Cited by: [§1](https://arxiv.org/html/2610.31165v1#S1.p2.1 "1 Introduction ‣ Network topology shapes consensus and vulnerability in LLM populations"),
  [§3.1.2](https://arxiv.org/html/2610.31165v1#S3.SS1.SSS2.p6.1 "3.1.2 Degree-resolved success on UCM ‣ 3.1 Consensus dynamics across topologies ‣ 3 Results ‣ Network topology shapes consensus and vulnerability in LLM populations"),
  [§4](https://arxiv.org/html/2610.31165v1#S4.p2.1 "4 Discussion ‣ Network topology shapes consensus and vulnerability in LLM populations").
- [19]
  A. Baronchelli (2018)
  The emergence of consensus: a primer.
  Royal Society open science 5 (2), pp. 172189.
  Cited by: [§1](https://arxiv.org/html/2610.31165v1#S1.p2.1 "1 Introduction ‣ Network topology shapes consensus and vulnerability in LLM populations").
- [20]
  D. Centola and A. Baronchelli (2015)
  The spontaneous emergence of conventions: an experimental study of cultural evolution.
  Proceedings of the National Academy of Sciences 112 (7), pp. 1989–1994.
  External Links: [Document](https://dx.doi.org/10.1073/pnas.1418838112)
  Cited by: [§1](https://arxiv.org/html/2610.31165v1#S1.p2.1 "1 Introduction ‣ Network topology shapes consensus and vulnerability in LLM populations"),
  [§1](https://arxiv.org/html/2610.31165v1#S1.p5.1 "1 Introduction ‣ Network topology shapes consensus and vulnerability in LLM populations").
- [21]
  D. Centola, J. Becker, D. Brackbill, and A. Baronchelli (2018)
  Experimental evidence for tipping points in social convention.
  Science 360 (6393), pp. 1116–1119.
  Cited by: [§1](https://arxiv.org/html/2610.31165v1#S1.p2.1 "1 Introduction ‣ Network topology shapes consensus and vulnerability in LLM populations"),
  [§1](https://arxiv.org/html/2610.31165v1#S1.p3.1 "1 Introduction ‣ Network topology shapes consensus and vulnerability in LLM populations").
- [22]
  S. Ehret, S. M. Constantino, E. U. Weber, C. Efferson, and S. Vogt (2022)
  Group identities can undermine social tipping after intervention.
  Nature human behaviour 6 (12), pp. 1669–1679.
  Cited by: [§1](https://arxiv.org/html/2610.31165v1#S1.p2.1 "1 Introduction ‣ Network topology shapes consensus and vulnerability in LLM populations").
- [23]
  J. Andreoni, N. Nikiforakis, and S. Siegenthaler (2021)
  Predicting social tipping and norm change in controlled experiments.
  Proceedings of the National Academy of Sciences 118 (16), pp. e2014893118.
  Cited by: [§1](https://arxiv.org/html/2610.31165v1#S1.p2.1 "1 Introduction ‣ Network topology shapes consensus and vulnerability in LLM populations").
- [24]
  A. F. Ashery, L. M. Aiello, and A. Baronchelli (2025)
  Emergent social conventions and collective bias in LLM populations.
  Science Advances 11 (20), pp. eadu9368.
  Cited by: [§1](https://arxiv.org/html/2610.31165v1#S1.p3.1 "1 Introduction ‣ Network topology shapes consensus and vulnerability in LLM populations"),
  [§1](https://arxiv.org/html/2610.31165v1#S1.p4.1 "1 Introduction ‣ Network topology shapes consensus and vulnerability in LLM populations"),
  [§1](https://arxiv.org/html/2610.31165v1#S1.p5.1 "1 Introduction ‣ Network topology shapes consensus and vulnerability in LLM populations"),
  [§2.1](https://arxiv.org/html/2610.31165v1#S2.SS1.p1.1 "2.1 Naming game and agent model ‣ 2 Methods ‣ Network topology shapes consensus and vulnerability in LLM populations").
- [25]
  A. Flint, L. M. Aiello, R. Pastor-Satorras, and A. Baronchelli (2026)
  Group size effects and collective misalignment in LLM multi-agent systems.
  Proceedings of the National Academy of Sciences 123 (34), pp. e2531697123.
  Cited by: [§A1.3](https://arxiv.org/html/2610.31165v1#A1.SS3.p2.1 "A1.3 Quenched mean-field theory ‣ Appendix A1 Mean-field theory of the naming game on networks ‣ Network topology shapes consensus and vulnerability in LLM populations"),
  [§1](https://arxiv.org/html/2610.31165v1#S1.p3.1 "1 Introduction ‣ Network topology shapes consensus and vulnerability in LLM populations"),
  [§1](https://arxiv.org/html/2610.31165v1#S1.p4.1 "1 Introduction ‣ Network topology shapes consensus and vulnerability in LLM populations"),
  [§1](https://arxiv.org/html/2610.31165v1#S1.p5.1 "1 Introduction ‣ Network topology shapes consensus and vulnerability in LLM populations"),
  [§1](https://arxiv.org/html/2610.31165v1#S1.p6.1 "1 Introduction ‣ Network topology shapes consensus and vulnerability in LLM populations"),
  [§2.1](https://arxiv.org/html/2610.31165v1#S2.SS1.p2.1 "2.1 Naming game and agent model ‣ 2 Methods ‣ Network topology shapes consensus and vulnerability in LLM populations"),
  [§3.1.3](https://arxiv.org/html/2610.31165v1#S3.SS1.SSS3.p1.1 "3.1.3 Topology effect on mixed-state pairs ‣ 3.1 Consensus dynamics across topologies ‣ 3 Results ‣ Network topology shapes consensus and vulnerability in LLM populations"),
  [§3.2.2](https://arxiv.org/html/2610.31165v1#S3.SS2.SSS2.p1.1 "3.2.2 Topology effects on the critical mass ‣ 3.2 Committed minorities ‣ 3 Results ‣ Network topology shapes consensus and vulnerability in LLM populations").
- [26]
  J. Xie, S. Sreenivasan, G. Korniss, W. Zhang, C. Lim, and B. K. Szymanski (2011)
  Social consensus through the influence of committed minorities.
  Physical Review E—Statistical, Nonlinear, and Soft Matter Physics 84 (1), pp. 011130.
  Cited by: [§1](https://arxiv.org/html/2610.31165v1#S1.p3.1 "1 Introduction ‣ Network topology shapes consensus and vulnerability in LLM populations").
- [27]
  A. Flint, L. M. Aiello, S. M. Constantino, R. Pastor-Satorras, and A. Baronchelli (2026)
  Indirect tipping: a social attack surface in AI agent populations.
  arXiv preprint arXiv:2609.25194.
  External Links: 2609.25194
  Cited by: [§1](https://arxiv.org/html/2610.31165v1#S1.p3.1 "1 Introduction ‣ Network topology shapes consensus and vulnerability in LLM populations"),
  [§1](https://arxiv.org/html/2610.31165v1#S1.p4.1 "1 Introduction ‣ Network topology shapes consensus and vulnerability in LLM populations"),
  [§4](https://arxiv.org/html/2610.31165v1#S4.p5.1 "4 Discussion ‣ Network topology shapes consensus and vulnerability in LLM populations").
- [28]
  X. Niu, C. Doyle, G. Korniss, and B. K. Szymanski (2017)
  The impact of variable commitment in the naming game on consensus formation.
  Scientific reports 7 (1), pp. 41750.
  Cited by: [§1](https://arxiv.org/html/2610.31165v1#S1.p3.1 "1 Introduction ‣ Network topology shapes consensus and vulnerability in LLM populations").
- [29]
  C. Qian, Z. Xie, Y. Wang, W. Liu, K. Zhu, H. Xia, Y. Dang, Z. Du, W. Chen, C. Yang, et al. (2025)
  Scaling large language model-based multi-agent collaboration.
  In International Conference on Learning Representations,
  Vol. 2025, pp. 41488–41505.
  Cited by: [§1](https://arxiv.org/html/2610.31165v1#S1.p4.1 "1 Introduction ‣ Network topology shapes consensus and vulnerability in LLM populations").
- [30]
  A. Ehtesham, A. Singh, G. K. Gupta, and S. Kumar (2025)
  A survey of agent interoperability protocols: model context protocol (mcp), agent communication protocol (acp), agent-to-agent protocol (a2a), and agent network protocol (anp).
  arXiv preprint arXiv:2505.02279.
  Cited by: [§1](https://arxiv.org/html/2610.31165v1#S1.p4.1 "1 Introduction ‣ Network topology shapes consensus and vulnerability in LLM populations"),
  [§4](https://arxiv.org/html/2610.31165v1#S4.p6.1 "4 Discussion ‣ Network topology shapes consensus and vulnerability in LLM populations").
- [31]
  A. Baronchelli, L. Dall’Asta, A. Barrat, and V. Loreto (2006)
  Topology-induced coarsening in language games.
  Physical Review E 73 (1), pp. 015102.
  External Links: [Document](https://dx.doi.org/10.1103/PhysRevE.73.015102)
  Cited by: [§1](https://arxiv.org/html/2610.31165v1#S1.p5.1 "1 Introduction ‣ Network topology shapes consensus and vulnerability in LLM populations"),
  [§4](https://arxiv.org/html/2610.31165v1#S4.p2.1 "4 Discussion ‣ Network topology shapes consensus and vulnerability in LLM populations").
- [32]
  L. Dall’Asta, A. Baronchelli, A. Barrat, and V. Loreto (2006)
  Nonequilibrium dynamics of language games on complex networks.
  Physical Review E—Statistical, Nonlinear, and Soft Matter Physics 74 (3), pp. 036105.
  Cited by: [§1](https://arxiv.org/html/2610.31165v1#S1.p5.1 "1 Introduction ‣ Network topology shapes consensus and vulnerability in LLM populations"),
  [§3.1.2](https://arxiv.org/html/2610.31165v1#S3.SS1.SSS2.p6.1 "3.1.2 Degree-resolved success on UCM ‣ 3.1 Consensus dynamics across topologies ‣ 3 Results ‣ Network topology shapes consensus and vulnerability in LLM populations"),
  [§4](https://arxiv.org/html/2610.31165v1#S4.p2.1 "4 Discussion ‣ Network topology shapes consensus and vulnerability in LLM populations").
- [33]
  W. Zhang, C. Lim, and B. K. Szymanski (2012)
  Analytic treatment of tipping points for social consensus in large random networks.
  Physical Review E—Statistical, Nonlinear, and Soft Matter Physics 86 (6), pp. 061134.
  Cited by: [§1](https://arxiv.org/html/2610.31165v1#S1.p5.1 "1 Introduction ‣ Network topology shapes consensus and vulnerability in LLM populations"),
  [§4](https://arxiv.org/html/2610.31165v1#S4.p4.1 "4 Discussion ‣ Network topology shapes consensus and vulnerability in LLM populations").
- [34]
  A. Mehdizadeh and M. Hilbert (2026)
  Exploring the topology and memory of consensus: how LLM agents agree, fragment, or settle when forming conventions.
  arXiv preprint arXiv:2606.04197.
  Cited by: [§1](https://arxiv.org/html/2610.31165v1#S1.p5.1 "1 Introduction ‣ Network topology shapes consensus and vulnerability in LLM populations"),
  [§4](https://arxiv.org/html/2610.31165v1#S4.p5.1 "4 Discussion ‣ Network topology shapes consensus and vulnerability in LLM populations").
- [35]
  A. Barabási and R. Albert (1999)
  Emergence of scaling in random networks.
  Science 286, pp. 509–512.
  Cited by: [§1](https://arxiv.org/html/2610.31165v1#S1.p6.1 "1 Introduction ‣ Network topology shapes consensus and vulnerability in LLM populations"),
  [§2.2](https://arxiv.org/html/2610.31165v1#S2.SS2.p1.1 "2.2 Networks and parameters ‣ 2 Methods ‣ Network topology shapes consensus and vulnerability in LLM populations").
- [36]
  N. Nangia, C. Vania, R. Bhalerao, and S. Bowman (2020)
  CrowS-pairs: a challenge dataset for measuring social biases in masked language models.
  In Proceedings of the 2020 conference on empirical methods in natural language processing (EMNLP),
  pp. 1953–1967.
  Cited by: [§2.1](https://arxiv.org/html/2610.31165v1#S2.SS1.p2.1 "2.1 Naming game and agent model ‣ 2 Methods ‣ Network topology shapes consensus and vulnerability in LLM populations").
- [37]
  M. Catanzaro, M. Boguná, and R. Pastor-Satorras (2005)
  Generation of uncorrelated random scale-free networks.
  Physical Review E—Statistical, Nonlinear, and Soft Matter Physics 71 (2), pp. 027103.
  Cited by: [§2.2](https://arxiv.org/html/2610.31165v1#S2.SS2.p1.1 "2.2 Networks and parameters ‣ 2 Methods ‣ Network topology shapes consensus and vulnerability in LLM populations").
- [38]
  S. N. Dorogovtsev, A. V. Goltsev, and J. .F. F. Mendes (2008)
  Critical phenomena in complex networks.
  Reviews of Modern Physics 80, pp. 1275–1335.
  External Links: [Document](https://dx.doi.org/10.1103/RevModPhys.80.1275)
  Cited by: [§A1.4](https://arxiv.org/html/2610.31165v1#A1.SS4.p1.1 "A1.4 Annealed network approximation ‣ Appendix A1 Mean-field theory of the naming game on networks ‣ Network topology shapes consensus and vulnerability in LLM populations"),
  [§2.2](https://arxiv.org/html/2610.31165v1#S2.SS2.p4.1 "2.2 Networks and parameters ‣ 2 Methods ‣ Network topology shapes consensus and vulnerability in LLM populations").
- [39]
  M. Newman (2010)
  Networks: an introduction.
   Oxford University Press, Inc., New York, NY, USA.
  Cited by: [§A1.2](https://arxiv.org/html/2610.31165v1#A1.SS2.p1.1 "A1.2 The naming game in complex networks ‣ Appendix A1 Mean-field theory of the naming game on networks ‣ Network topology shapes consensus and vulnerability in LLM populations"),
  [§3.1.2](https://arxiv.org/html/2610.31165v1#S3.SS1.SSS2.p1.1 "3.1.2 Degree-resolved success on UCM ‣ 3.1 Consensus dynamics across topologies ‣ 3 Results ‣ Network topology shapes consensus and vulnerability in LLM populations").
- [40]
  R. Pastor-Satorras, C. Castellano, P. Van Mieghem, and A. Vespignani (2015)
  Epidemic processes in complex networks.
  Reviews of Modern Physics 87, pp. 925–979.
  External Links: [Document](https://dx.doi.org/10.1103/RevModPhys.87.925)
  Cited by: [§A1.3](https://arxiv.org/html/2610.31165v1#A1.SS3.p1.1 "A1.3 Quenched mean-field theory ‣ Appendix A1 Mean-field theory of the naming game on networks ‣ Network topology shapes consensus and vulnerability in LLM populations"),
  [§3.1.2](https://arxiv.org/html/2610.31165v1#S3.SS1.SSS2.p7.1 "3.1.2 Degree-resolved success on UCM ‣ 3.1 Consensus dynamics across topologies ‣ 3 Results ‣ Network topology shapes consensus and vulnerability in LLM populations").
- [41]
  Q. Lu, G. Korniss, and B. K. Szymanski (2009)
  The naming game in social networks: community formation and consensus engineering.
  Journal of Economic Interaction and Coordination 4 (2), pp. 221–235.
  Cited by: [§4](https://arxiv.org/html/2610.31165v1#S4.p2.1 "4 Discussion ‣ Network topology shapes consensus and vulnerability in LLM populations"),
  [§4](https://arxiv.org/html/2610.31165v1#S4.p4.1 "4 Discussion ‣ Network topology shapes consensus and vulnerability in LLM populations").
- [42]
  D. Mistry, Q. Zhang, N. Perra, and A. Baronchelli (2015)
  Committed activists and the reshaping of status-quo social consensus.
  Physical Review E 92 (4), pp. 042805.
  Cited by: [§4](https://arxiv.org/html/2610.31165v1#S4.p2.1 "4 Discussion ‣ Network topology shapes consensus and vulnerability in LLM populations"),
  [§4](https://arxiv.org/html/2610.31165v1#S4.p4.1 "4 Discussion ‣ Network topology shapes consensus and vulnerability in LLM populations").
- [43]
  A. Chan, C. Ezell, M. Kaufmann, K. Wei, L. Hammond, H. Bradley, E. Bluemke, N. Rajkumar, D. Krueger, N. Kolt, et al. (2024)
  Visibility into ai agents.
  In Proceedings of the 2024 ACM conference on fairness, accountability, and transparency,
  pp. 958–973.
  Cited by: [§4](https://arxiv.org/html/2610.31165v1#S4.p4.1 "4 Discussion ‣ Network topology shapes consensus and vulnerability in LLM populations").
- [44]
  A. Chan, K. Wei, S. Huang, N. Rajkumar, E. Perrier, S. Lazar, G. K. Hadfield, and M. Anderljung (2025)
  Infrastructure for AI agents.
  arXiv preprint arXiv:2501.10114.
  External Links: 2501.10114
  Cited by: [§4](https://arxiv.org/html/2610.31165v1#S4.p4.1 "4 Discussion ‣ Network topology shapes consensus and vulnerability in LLM populations"),
  [§4](https://arxiv.org/html/2610.31165v1#S4.p6.1 "4 Discussion ‣ Network topology shapes consensus and vulnerability in LLM populations").
- [45]
  R. Albert, H. Jeong, and A. Barabási (2000)
  Error and attack tolerance of complex networks.
  nature 406 (6794), pp. 378–382.
  Cited by: [§4](https://arxiv.org/html/2610.31165v1#S4.p4.1 "4 Discussion ‣ Network topology shapes consensus and vulnerability in LLM populations").
- [46]
  X. Gu, X. Zheng, T. Pang, C. Du, Q. Liu, Y. Wang, J. Jiang, and M. Lin (2024)
  Agent smith: a single image can jailbreak one million multimodal llm agents exponentially fast.
  arXiv preprint arXiv:2402.08567.
  Cited by: [§4](https://arxiv.org/html/2610.31165v1#S4.p4.1 "4 Discussion ‣ Network topology shapes consensus and vulnerability in LLM populations").
- [47]
  D. Lee, M. Tiwari, and B. Miranda (2025)
  Prompt infection: llm-to-llm prompt injection within multi-agent systems.
  In European Symposium on Research in Computer Security,
  pp. 511–520.
  Cited by: [§4](https://arxiv.org/html/2610.31165v1#S4.p4.1 "4 Discussion ‣ Network topology shapes consensus and vulnerability in LLM populations").
- [48]
  T. Ju, Y. Wang, Y. Hua, X. Ma, P. Cheng, H. Zhao, Y. Wang, L. Liu, J. Xie, Z. Zhang, et al. (2026)
  Flooding spread of manipulated knowledge in llm-based multi-agent communities.
  Science China Information Sciences 69 (7), pp. 172103.
  Cited by: [§4](https://arxiv.org/html/2610.31165v1#S4.p4.1 "4 Discussion ‣ Network topology shapes consensus and vulnerability in LLM populations").
- [49]
  J. S. Park, J. O’Brien, C. J. Cai, M. R. Morris, P. Liang, and M. S. Bernstein (2023)
  Generative agents: interactive simulacra of human behavior.
  In Proceedings of the 36th Annual ACM Symposium on User Interface Software and Technology,
  pp. 1–22.
  External Links: [Document](https://dx.doi.org/10.1145/3586183.3606763)
  Cited by: [§4](https://arxiv.org/html/2610.31165v1#S4.p5.1 "4 Discussion ‣ Network topology shapes consensus and vulnerability in LLM populations").
- [50]
  J. Perez, C. Léger, M. Ovando-Tellez, C. Foulon, J. Dussauld, P. Oudeyer, and C. Moulin-Frier (2024)
  Cultural evolution in populations of large language models.
  arXiv preprint arXiv:2403.08882.
  External Links: 2403.08882
  Cited by: [§4](https://arxiv.org/html/2610.31165v1#S4.p5.1 "4 Discussion ‣ Network topology shapes consensus and vulnerability in LLM populations").
- [51]
  F. Nøhr Laustsen, M. Haahr Petersen, V. Popa, A. Flint, R. Pastor-Satorras, A. Baronchelli, and L. M. Aiello (2026)
  Peer influence across heterogeneous ai models.
  arXiv e-prints, pp. arXiv–2610.
  Cited by: [§4](https://arxiv.org/html/2610.31165v1#S4.p5.1 "4 Discussion ‣ Network topology shapes consensus and vulnerability in LLM populations").
- [52]
  E. Calvano, G. Calzolari, V. Denicolò, and S. Pastorello (2020)
  Artificial intelligence, algorithmic pricing, and collusion.
  American Economic Review 110 (10), pp. 3267–3297.
  External Links: [Document](https://dx.doi.org/10.1257/aer.20190623)
  Cited by: [§4](https://arxiv.org/html/2610.31165v1#S4.p6.1 "4 Discussion ‣ Network topology shapes consensus and vulnerability in LLM populations").
- [53]
  S. Fish, Y. A. Gonczarowski, and R. I. Shorrer (2024)
  Algorithmic collusion by large language models.
  arXiv preprint arXiv:2404.00806.
  External Links: 2404.00806
  Cited by: [§4](https://arxiv.org/html/2610.31165v1#S4.p6.1 "4 Discussion ‣ Network topology shapes consensus and vulnerability in LLM populations").
- [54]
  L. Brinkmann, F. Baumann, J. Bonnefon, M. Derex, T. F. Müller, A. Nussberger, A. Czaplicka, A. Acerbi, T. L. Griffiths, J. Henrich, et al. (2023)
  Machine culture.
  Nature Human Behaviour 7 (11), pp. 1855–1868.
  Cited by: [§4](https://arxiv.org/html/2610.31165v1#S4.p6.1 "4 Discussion ‣ Network topology shapes consensus and vulnerability in LLM populations").
- [55]
  D. Chakrabarti, Y. Wang, C. Wang, J. Leskovec, and C. Faloutsos (2008)
  Epidemic thresholds in real networks.
  ACM Transactions on Information and System Security (TISSEC) 10, pp. 1–26.
  External Links: [Document](https://dx.doi.org/10.1145/1284680.1284681)
  Cited by: [§A1.3](https://arxiv.org/html/2610.31165v1#A1.SS3.p1.1 "A1.3 Quenched mean-field theory ‣ Appendix A1 Mean-field theory of the naming game on networks ‣ Network topology shapes consensus and vulnerability in LLM populations").
- [56]
  A. S. Mata and S. C. Ferreira (2013)
  Pair quenched mean-field theory for the susceptible-infected-susceptible model on complex networks.
  Europhysics Letters 103 (4), pp. 48003.
  External Links: [Link](http://stacks.iop.org/0295-5075/103/i=4/a=48003)
  Cited by: [§A1.3](https://arxiv.org/html/2610.31165v1#A1.SS3.p1.3 "A1.3 Quenched mean-field theory ‣ Appendix A1 Mean-field theory of the naming game on networks ‣ Network topology shapes consensus and vulnerability in LLM populations").
- [57]
  M. Boguñá, C. Castellano, and R. Pastor-Satorras (2009)
  Langevin approach for the dynamics of the contact process on annealed scale-free networks..
  Physical Review E 79, pp. 036110.
  External Links: [Document](https://dx.doi.org/10.1103/PhysRevE.79.036110)
  Cited by: [§A1.4](https://arxiv.org/html/2610.31165v1#A1.SS4.p1.1 "A1.4 Annealed network approximation ‣ Appendix A1 Mean-field theory of the naming game on networks ‣ Network topology shapes consensus and vulnerability in LLM populations").

## APPENDIX

## Appendix A1 Mean-field theory of the naming game on networks

### A1.1 Mean-field naming game for LLMs

We consider a population composed by agents (LLMs) playing the naming game with
the same vocabulary (same words $0$ and $1$). The state of the agents is given
by the set of words proposed and received in the previous interactions. Thus, a
state can be represented as a string of bits of the form

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$S=\{a\_{1},b\_{1},a\_{2},b\_{2},\ldots,a\_{h},b\_{h}\},$$ |  | (A1) |

where $h\leq H$ is the length of the state, $a\_{i}$ are the last words proposed by the agent and $b\_{i}$ are the last words received by interacting partners. $H$ is the maximum length of the state, corresponding to the maximum memory of the agents. Agents start from the empty state $S\_{\emptyset}=\emptyset$ (empty memory stack before any interaction). The total number of states is

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$M=\frac{1}{3}(4^{H+1}-1)$$ |  | (A2) |

Agents are characterised by a probability policy $q(S)$ defined as the
probability that an agent in state $S$ will select the word $0$ as output of an
interaction with another agent (irrespective of the state of the second agent),
selecting word $1$ with probability $1-q(S))$. At the mean field level (everybody interacting with everybody else), the dynamics of the system is given by the following rules:

1. 1.

   Two agents are randomly selected to interact.
2. 2.

   The first agent, in state $S$, proposes a word $a$ according to its probability policy $q(S)$.
3. 3.

   The second agent, in state $S^{\prime}$, receives the word $a$ and responds with a word $b$ according to its probability policy $q(S^{\prime})$.
4. 4.

   The states of both agents are updated by adding the pair words uttered and received to their respective histories.

If an agent in state $S$ proposes the word $a$ and receives the word $b$, its state is updated according to the following rule:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$S\to\Gamma\_{(a,b)}(S),$$ |  | (A3) |

where the shift function $\Gamma\_{(a,b)}(S)$ is defined as

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\Gamma\_{(a,b)}(\{a\_{1},b\_{1},a\_{2},b\_{2},\ldots,a\_{h},b\_{h}\})=\left\{\begin{array}[]{ll}\{a\_{1},b\_{1},a\_{2},b\_{2},\ldots,a\_{h},b\_{h},a,b\}&\;\mathrm{if}\;h<H\\ &\\ \{a\_{2},b\_{2},a\_{3},b\_{3},\ldots,a\_{H},b\_{H},a,b\}&\;\mathrm{if}\;h=H\\ \end{array}\right..$$ |  | (A4) |

At the mean field level, the state of the system is given by the state vector $\vec{x}$, where $x\_{k}$ is the fraction of agents in state $k$. The state vector is normalised as $\sum\_{k}x\_{k}=1$, such that the state of the system is represented by a point in a $M$-dimensional simplex. The state vectors fulfill the following rate equations:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\frac{dx\_{k}}{dt}=-2x\_{k}+2\sum\_{i}\sum\_{j}x\_{i}x\_{j}P(k|i,j),$$ |  | (A5) |

where the kernel $P(k|i,j)$, the probability that an agent in state $i$ will transition to state $k$ when interacting with an agent in state $j$, is computed in terms of the possible transitions of $i$ and the probability policy $q(i)$ as:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$P(k|i,j)=\left\{\begin{array}[]{ll}q(i)q(j)&\mathrm{if}\;k=\Gamma\_{(0,0)}(i),\\ q(i)(1-q(j))&\mathrm{if}\;k=\Gamma\_{(0,1)}(i),\\ (1-q(i))q(j)&\mathrm{if}\;k=\Gamma\_{(1,0)}(i),\\ (1-q(i))(1-q(j))&\mathrm{if}\;k=\Gamma\_{(1,1)}(i),\\ 0&\mathrm{otherwise}\end{array}\right.,$$ |  | (A6) |

Notice that we have kept a factor of $2$ in the rate equation, usually absorbed in a time rescaling, in order to keep the same time scale as in the networked version of the model.

### A1.2 The naming game in complex networks

We consider now a population of $N$ agents placed on the nodes of a complex network. The network is characterised by its adjacency matrix $A\_{nm}$ [[39](https://arxiv.org/html/2610.31165v1#bib.bib49)], where $A\_{nm}=1$ if nodes $n$ and $m$ are connected by means of an edge and $A\_{nm}=0$ otherwise. The degree of node $n$ is given by $k\_{n}=\sum\_{m}A\_{nm}$, representing the number of nearest neighbours directly connected to node $n$.

We consider two different update dynamics:

1. 1.

   Symmetric node update: We choose at random a node $n$ in the network, and then we choose at random one of its nearest neighbours $m$. Both nodes propose a word according to their respective state. We update the state of both nodes $n$ and $m$.
2. 2.

   Edge update: We choose at random an edge $(n,m)$ in the network. Both nodes propose a word according to their respective state. We update the state of both nodes $n$ and $m$.

We assume that the probability policies are not affected by the network structure, in such a way that the update of any node depends only on its own state and the state of node with which it is interacting.

### A1.3 Quenched mean-field theory

In order to proceed to a mathematical formulation, we consider the so-called quenched mean-field theory (QMF) [[55](https://arxiv.org/html/2610.31165v1#bib.bib52), [40](https://arxiv.org/html/2610.31165v1#bib.bib53)], in which we represent the state of each node $n$ in the network with a variable $x\_{i}^{n}$, representing the probability that the agent placed in node $n$ is in state $i$. Since each agent is in one of the $M$ possible states, we have the normalisation condition

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\sum\_{i}x\_{i}^{n}=1,\quad\forall n=1,2,\ldots,N.$$ |  | (A7) |

That is, the state of each node is represented by a point in the $M$-dimensional simplex. The mean-field approximation consists in assuming that the state of each node is independent of the state of its neighbours, in such a way that the probability that a node $n$ in state $i$ and another node $m$ in state $j$ are joined by and edge, $P(n,i;m,j)$ is given by

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$P(n,i;m,j)=P(n,i)P(m,j)=x\_{i}^{n}x\_{j}^{m}.$$ |  | (A8) |

Notice that this lack of dynamical correlations is an approximation, since the state of a node is correlated with the state of its neighbours, due to the interactions between them. It can be improved by considering higher-order dynamical correlations in a pair approximation [[56](https://arxiv.org/html/2610.31165v1#bib.bib56)].

Since the state-transition kernel is independent of the network structure, the gain-loss contribution associated with an interaction between nodes $n$ and $m$ has the structure [[25](https://arxiv.org/html/2610.31165v1#bib.bib17)]:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$-x\_{\ell}^{n}+\sum\_{i,j}x\_{i}^{n}x\_{j}^{m}P(\ell|i,j),$$ |  | (A9) |

The effects of topology are incorporated in the mean-field equations by considering the different probabilities to choose nodes $n$ and $m$ in the network. Let us consider the different update rules in turn.

#### A1.3.1 Symmetric node update

At each elementary time step, we choose a node $n$, with probability $1/N$, that will be in state $i$ with probability $x\_{i}^{n}$. We then select a nearest neighbour $m$ of node $n$ with probability $A\_{nm}/k\_{n}$, where $k\_{n}$ is the degree of node $n$. Combining these probabilities with the gain-loss structure in Eq. ([A9](https://arxiv.org/html/2610.31165v1#A1.E9 "In A1.3 Quenched mean-field theory ‣ Appendix A1 Mean-field theory of the naming game on networks ‣ Network topology shapes consensus and vulnerability in LLM populations")), we obtain the following mean-field equations for symmetric node update:

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
|  | $\displaystyle\frac{dx\_{\ell}^{n}}{dt}$ | $\displaystyle=$ | $\displaystyle\frac{1}{N}\sum\_{m}\frac{A\_{nm}}{k\_{n}}\left[-x\_{\ell}^{n}+\sum\_{i,j}x\_{i}^{n}x\_{j}^{m}P(\ell|i,j)\right]+\frac{1}{N}\sum\_{m}\frac{A\_{nm}}{k\_{m}}\left[-x\_{\ell}^{n}+\sum\_{i,j}x\_{i}^{n}x\_{j}^{m}P(\ell|i,j)\right]$ |  | (A10) |
|  |  | $\displaystyle=$ | $\displaystyle\frac{1}{N}\left[-x\_{\ell}^{n}\left(1+\sum\_{m}\frac{A\_{nm}}{k\_{m}}\right)+\sum\_{m}A\_{nm}\left(\frac{1}{k\_{n}}+\frac{1}{k\_{m}}\right)\sum\_{i,j}x\_{i}^{n}x\_{j}^{m}P(\ell|i,j)\right].$ |  |

The two terms on the rhs of the first equation represent the contributions from the node $n$ and its neighbours, respectively. Absorbing a factor of $1/N$ in a time rescaling, we can write the mean-field equations for the symmetric node update as

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\frac{dx\_{\ell}^{n}}{dt}=-x\_{\ell}^{n}\left(1+\sum\_{m}\frac{A\_{nm}}{k\_{m}}\right)+\sum\_{m}A\_{nm}\left(\frac{1}{k\_{n}}+\frac{1}{k\_{m}}\right)\sum\_{i,j}x\_{i}^{n}x\_{j}^{m}P(\ell|i,j).$$ |  | (A11) |

#### A1.3.2 Symmetric edge update

At each elementary time step, we choose an edge $(n,m)$ in the network with probability $A\_{nm}/E$, where $E=\sum\_{n,m}A\_{nm}/2$ is the total number of edges in the network. The gain-loss structure in Eq. ([A9](https://arxiv.org/html/2610.31165v1#A1.E9 "In A1.3 Quenched mean-field theory ‣ Appendix A1 Mean-field theory of the naming game on networks ‣ Network topology shapes consensus and vulnerability in LLM populations")) leads to the following mean-field equations for the symmetric edge update:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\frac{dx\_{\ell}^{n}}{dt}=\sum\_{m}\frac{A\_{nm}}{E}\left[-x\_{\ell}^{n}+\sum\_{i,j}x\_{i}^{n}x\_{j}^{m}P(\ell|i,j)\right].$$ |  | (A12) |

Absorbing a factor of $1/N$ in a time rescaling, and considering that $E=N\langle{k}\rangle/2$, where $\langle{k}\rangle$ is the average degree of the network, we can write the mean-field equations for the symmetric edge update as

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\frac{dx\_{\ell}^{n}}{dt}=\frac{2}{\langle{k}\rangle}\left[-k\_{n}x\_{\ell}^{n}+\sum\_{m}A\_{nm}\sum\_{i,j}x\_{i}^{n}x\_{j}^{m}P(\ell|i,j)\right]$$ |  | (A13) |

### A1.4 Annealed network approximation

The annealed network approximation [[38](https://arxiv.org/html/2610.31165v1#bib.bib50), [57](https://arxiv.org/html/2610.31165v1#bib.bib51)] consists in replacing the adjacency matrix $A\_{nm}$ by its expected value, given by the connection probability $p\_{nm}$ between nodes $n$ and $m$. For an uncorrelated configuration-model network, in the sparse-network limit, we replace the adjacency matrix by [[57](https://arxiv.org/html/2610.31165v1#bib.bib51)]

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$A\_{nm}\to p\_{nm}=\frac{k\_{n}k\_{m}}{2E}=\frac{k\_{n}k\_{m}}{\langle{k}\rangle N},$$ |  | (A14) |

where $\langle{k}\rangle$ is the average degree of the network. An annealed network is a network in which the edges are randomly rewired, at a rate much faster than the dynamics of the nodes, while keeping the degree of each node fixed. The annealed network approximation is interesting because, due to the edge rewiring, it renders exact the hypothesis of lack of dynamical correlations between the states of neighbouring nodes, which is an approximation in the quenched mean field theory. Thus, we expect that numerical simulations in annealed networks will be exactly described by the annealed network approximation, while in quenched networks we can have deviations from the theory, either QMF or the annealed network approximation, due to the presence of dynamical correlations. In any case, the annealed network approximation renders simplex equations that sometimes capture the scaling behaviour of the dynamics.

Within the annealed network approximation, the mean-field equations for the symmetric node update reduce to

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\frac{dx\_{\ell}^{n}}{dt}=-x\_{\ell}^{n}\left(1+\frac{k\_{n}}{\langle{k}\rangle}\right)+\sum\_{m}\frac{k\_{n}+k\_{m}}{\langle{k}\rangle N}\sum\_{i,j}x\_{i}^{n}x\_{j}^{m}P(\ell|i,j),$$ |  | (A15) |

while the equations for the symmetric edge update reduce to

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\frac{dx\_{\ell}^{n}}{dt}=\frac{2}{\langle{k}\rangle}\left[-k\_{n}x\_{\ell}^{n}+\sum\_{m}\frac{k\_{n}k\_{m}}{\langle{k}\rangle N}\sum\_{i,j}x\_{i}^{n}x\_{j}^{m}P(\ell|i,j)\right]$$ |  | (A16) |

### A1.5 Random regular networks

Consider a random regular network (RRN), in which all nodes have the same degree $k\_{n}=K$, that is $\sum\_{m}A\_{nm}=K$ for all nodes $n$. In this case, the QMF equations for the symmetric node update reduce to

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\frac{dx\_{\ell}^{n}}{dt}=-2x\_{\ell}^{n}+\frac{2}{K}\sum\_{m}A\_{nm}\sum\_{i,j}x\_{i}^{n}x\_{j}^{m}P(\ell|i,j),$$ |  | (A17) |

while the equations for the symmetric edge update reduce to

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\frac{dx\_{\ell}^{n}}{dt}=-2x\_{\ell}^{n}+\frac{2}{K}\sum\_{m}A\_{nm}\sum\_{i,j}x\_{i}^{n}x\_{j}^{m}P(\ell|i,j).$$ |  | (A18) |

Thus, for random regular networks, the QMF equations for both update rules are identical.

Within the annealed network approximation, the equations for both symmetric node update and symmetric edge update reduce to

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\frac{dx\_{\ell}^{n}}{dt}=-2x\_{\ell}^{n}+\frac{2}{N}\sum\_{m}\sum\_{i,j}x\_{i}^{n}x\_{j}^{m}P(\ell|i,j),$$ |  | (A19) |

which is independent of the degree $K$ of the network. Thus, for RRN, the annealed network approximation predicts that the dynamics is independent of the degree of the network.

Moreover, if we define the average state vector $\rho\_{i}=\sum\_{n}x\_{i}^{n}/N$, we can write the mean-field equations for the average state vector as

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\frac{d\rho\_{\ell}}{dt}=-2\rho\_{\ell}+2\sum\_{i,j}\rho\_{i}\rho\_{j}P(\ell|i,j),$$ |  | (A20) |

which is identical to the mean-field equations for the fully connected network. Thus, the annealed network approximation predicts that the dynamics of the naming game in RRN is identical to the dynamics in the fully connected network for any value of $K$.

## Appendix A2 Additional figures and tables

In Tables [A1](https://arxiv.org/html/2610.31165v1#A2.T1 "Table A1 ‣ A2.1 Statistical tests for speed of consensus across topologies ‣ Appendix A2 Additional figures and tables ‣ Network topology shapes consensus and vulnerability in LLM populations"), [A2](https://arxiv.org/html/2610.31165v1#A2.T2 "Table A2 ‣ A2.2 Statistical tests for speed of consensus on increasing values of K for RRN ‣ Appendix A2 Additional figures and tables ‣ Network topology shapes consensus and vulnerability in LLM populations"),
[A6](https://arxiv.org/html/2610.31165v1#A2.T6 "Table A6 ‣ A2.7 Statistical tests for committed minorities ‣ Appendix A2 Additional figures and tables ‣ Network topology shapes consensus and vulnerability in LLM populations"), and [A7](https://arxiv.org/html/2610.31165v1#A2.T7 "Table A7 ‣ A2.7 Statistical tests for committed minorities ‣ Appendix A2 Additional figures and tables ‣ Network topology shapes consensus and vulnerability in LLM populations"), we present the results of Friedman and Page tests. The Friedman test asks whether the four topologies differ in convergence time, comparing them within each word pair; Page’s $L$ asks whether they follow the specific ordering FC $<$ UCM2.5 $<$ UCM5.0 $<$ RRN.

### A2.1 Statistical tests for speed of consensus across topologies

Table A1: Friedman and Page’s $L$ tests on the mode of reached consensus of the topology ordering
FC $<$ UCM2.5 $<$ UCM5.0 $<$ RRN. Performed by model, activation rule and population size.

| Model | $N$ | Rule | $Q$ | $p$ | $W$ | $L$ | $p(L)$ |
| --- | --- | --- | --- | --- | --- | --- | --- |
| QwQ-32B | 1000 | Edge | 31.4 | $<.001$ | 0.953 | 327 | $<.001$ |
| QwQ-32B | 1000 | Node | 31.4 | $<.001$ | 0.953 | 327 | $<.001$ |
| QwQ-32B | 5000 | Edge | 30.7 | $<.001$ | 0.930 | 326 | $<.001$ |
| QwQ-32B | 5000 | Node | 31.4 | $<.001$ | 0.950 | 327 | $<.001$ |
| QwQ-32B | 10000 | Edge | 30.7 | $<.001$ | 0.930 | 326 | $<.001$ |
| QwQ-32B | 10000 | Node | 31.4 | $<.001$ | 0.950 | 327 | $<.001$ |
| QwQ-32B | 100000 | Edge | 30.7 | $<.001$ | 0.930 | 326 | $<.001$ |
| QwQ-32B | 100000 | Node | 32.2 | $<.001$ | 0.975 | 328 | $<.001$ |
| GPT-4o | 1000 | Edge | 32.7 | $<.001$ | 0.992 | 330 | $<.001$ |
| GPT-4o | 1000 | Node | 32.7 | $<.001$ | 0.992 | 330 | $<.001$ |
| GPT-4o | 5000 | Edge | 31.9 | $<.001$ | 0.967 | 329 | $<.001$ |
| GPT-4o | 5000 | Node | 31.7 | $<.001$ | 0.962 | 328 | $<.001$ |
| GPT-4o | 10000 | Edge | 31.7 | $<.001$ | 0.962 | 328 | $<.001$ |
| GPT-4o | 10000 | Node | 31.9 | $<.001$ | 0.967 | 329 | $<.001$ |
| GPT-4o | 100000 | Edge | 31.4 | $<.001$ | 0.953 | 328 | $<.001$ |
| GPT-4o | 100000 | Node | 31.0 | $<.001$ | 0.938 | 328 | $<.001$ |
| Phi-4 | 1000 | Edge | 26.7 | $<.001$ | 0.810 | 320 | $<.001$ |
| Phi-4 | 1000 | Node | 26.7 | $<.001$ | 0.810 | 320 | $<.001$ |
| Phi-4 | 5000 | Edge | 26.7 | $<.001$ | 0.810 | 320 | $<.001$ |
| Phi-4 | 5000 | Node | 26.7 | $<.001$ | 0.810 | 320 | $<.001$ |
| Phi-4 | 10000 | Edge | 26.7 | $<.001$ | 0.810 | 320 | $<.001$ |
| Phi-4 | 10000 | Node | 26.7 | $<.001$ | 0.810 | 320 | $<.001$ |
| Phi-4 | 100000 | Edge | 26.7 | $<.001$ | 0.810 | 320 | $<.001$ |
| Phi-4 | 100000 | Node | 26.7 | $<.001$ | 0.810 | 320 | $<.001$ |
| Llama-3.1-70B | 1000 | Edge | 1.7 | 0.644 | 0.062 | 224 | 0.568 |
| Llama-3.1-70B | 1000 | Node | 0.8 | 0.857 | 0.028 | 224 | 0.568 |
| Llama-3.1-70B | 5000 | Edge | 5.9 | 0.114 | 0.220 | 222 | 0.655 |
| Llama-3.1-70B | 5000 | Node | 1.0 | 0.801 | 0.037 | 224 | 0.612 |
| Llama-3.1-70B | 10000 | Edge | 7.5 | 0.058 | 0.277 | 220 | 0.734 |
| Llama-3.1-70B | 10000 | Node | 1.0 | 0.801 | 0.037 | 224 | 0.612 |
| Llama-3.1-70B | 100000 | Edge | 9.0 | 0.029 | 0.335 | 218 | 0.804 |
| Llama-3.1-70B | 100000 | Node | 1.3 | 0.737 | 0.047 | 224 | 0.612 |

![Refer to caption](https://arxiv.org/html/2610.31165v1/figs/fig_slopegraph_mean_edge_N10000.png)


Figure A1: Same as Figure [1](https://arxiv.org/html/2610.31165v1#S3.F1 "Figure 1 ‣ 3.1.1 Speed of consensus ‣ 3.1 Consensus dynamics across topologies ‣ 3 Results ‣ Network topology shapes consensus and vulnerability in LLM populations"), but for the mean convergence time under edge activation at $N=10000$.

### A2.2 Statistical tests for speed of consensus on increasing values of K for RRN

Table A2: Friedman and Page’s $L$ tests of convergence time on RRN as a function of mode degree $K\in\{4,6,8,10,12,16,20,24,32,48,64,96,128,192,256\}$ against the FC baseline, $N=10000$, edge activation. $n=11$ word pairs for QwQ-32B, GPT-4o and Phi-4; $n=9$ for Llama-3.1-70B, whose two mixed-state pairs (§[3.1.3](https://arxiv.org/html/2610.31165v1#S3.SS1.SSS3 "3.1.3 Topology effect on mixed-state pairs ‣ 3.1 Consensus dynamics across topologies ‣ 3 Results ‣ Network topology shapes consensus and vulnerability in LLM populations")) are excluded.

| Model | $n$ | $Q$ | $p$ | $W$ | $L$ | $p(L)$ |
| --- | --- | --- | --- | --- | --- | --- |
| QwQ-32B | 11 | 154.8 | $<.001$ | 0.938 | 16170 | $<.001$ |
| GPT-4o | 11 | 138.0 | $<.001$ | 0.837 | 15456 | $<.001$ |
| Phi-4 | 11 | 123.4 | $<.001$ | 0.748 | 15427 | $<.001$ |
| Llama-3.1-70B | 9 | 2.0 | 1.000 | 0.015 | 10420 | 0.477 |

### A2.3 Speed of consensus on increasing values of K for RRN

![Refer to caption](https://arxiv.org/html/2610.31165v1/figs/fig_density_rrn_mode.png)


Figure A2: Convergence time on random regular networks (RRN) as a function of the degree $K$, relative to the fully connected (FC) population. For every model–word-pair combination, we take the mode of the convergence time of RRN at degree $K$, $T(K)$, and divide it by $T\_{\mathrm{FC}}$. A ratio above $1$ means the network is slower than FC. The dashed line at $1$ marks the FC baseline. $N=10000$, edge activation, $K\in\{4,6,8,10,12,16,20,24,32,48,64,96,128,192,256\}$.

### A2.4 Convergence time at increasing N for the mixed-state Llama pairs

![Refer to caption](https://arxiv.org/html/2610.31165v1/figs/T_vs_N_log.png)


Figure A3: Mean convergence time as a function of $N$ for the two mixed-state Llama-3.1-70B pairs {young/old} (left) and {more/less} (right), edge activation, on FC (black diamonds), UCM2.5, UCM5.0 (blue open squares) and RRN with $K=4$ (orange circles). Error bars are $95\%$ bootstrap confidence intervals over $200$ runs per point, with a fresh network per run. Runs last at most $t\_{\mathrm{max}}=10000$ rounds. Each curve starts at $N=10$ ($N=25$ for UCM2.5 and UCM5.0), and stops at the last $N$ at which all runs reach consensus within $t\_{\mathrm{max}}$.

### A2.5 Convergence time on RRN at increasing K for the mixed-state Llama pairs

![Refer to caption](https://arxiv.org/html/2610.31165v1/figs/T_vs_K.png)


Figure A4: Mean convergence time on RRN as a function of the degree $K$, for the two mixed-state Llama-3.1-70B pairs {young/old} (left) and {more/less} (right), at $N=100$ (top) and $N=200$ (bottom), edge activation. Orange circles are quenched networks, blue open squares the annealed control; error bars are $95\%$ bootstrap confidence intervals over $200$ runs per condition. The dashed line and the grey band give the FC mean and its confidence interval at the same $N$. Note the logarithmic vertical axis, and that the rightmost point of each panel, $K=N-1$, is the fully connected graph.

Table A3: Median convergence time (population rounds) of the two mixed-state Llama-3.1-70B pairs, edge activation; consensus fraction in parentheses when below $1$. A dash marks conditions in which no run reaches consensus. Consensus fractions for every topology are in Table [2](https://arxiv.org/html/2610.31165v1#S3.T2 "Table 2 ‣ 3.1.3 Topology effect on mixed-state pairs ‣ 3.1 Consensus dynamics across topologies ‣ 3 Results ‣ Network topology shapes consensus and vulnerability in LLM populations").

| Pair | Topology | $N=$1000$$ | $N=$5000$$ | $N=$10\,000$$ | $N=$100\,000$$ |
| --- | --- | --- | --- | --- | --- |
| young/old | UCM2.5 | 593.5 (0.07) | – | – | – |
|  | UCM5.0 | 108 | 167 | 193.5 | 267 |
|  | RRN | 64 | 75 | 77 | 79 |
| more/less | RRN | 508 (0.10) | – | – | – |


Table A4: RRN degree sweep for the two mixed-state Llama-3.1-70B pairs, edge activation, $200$ runs per condition. Tested degrees: $K\in\{4,6,8,12,16,24,32,48,64,80,96,99\}$ at $N=100$ and $K\in\{4,6,8,12,16,24,32,48,64,96,128,160,199\}$ at $N=200$. $T(4)$ and $T\_{\mathrm{FC}}$ are mean convergence times (population rounds) at $K=4$ and on FC. $K\_{50}$ and $K\_{90}$ are the degrees at which $50\%$ and $90\%$ of the increase from $\log T(4)$ to $\log T\_{\mathrm{FC}}$ is covered. $K\_{\mathrm{FC}}$ is the smallest $K$ from which the RRN mean stays inside the $95\%$ confidence interval of FC.

| Pair | $N$ | $T(4)$ | $T\_{\mathrm{FC}}$ | $T\_{\mathrm{FC}}/T(4)$ | $K\_{50}$ | $K\_{90}$ | $K\_{\mathrm{FC}}$ |
| --- | --- | --- | --- | --- | --- | --- | --- |
| young/old | 100 | 37.5 | 186.8 | 5.0 | 10.5 | 36.3 | 80 |
| more/less | 100 | 41.7 | 954.5 | 22.9 | 8.1 | 35.7 | 48 |
| young/old | 200 | 51.1 | 2160 | 42.3 | 13.2 | 45.6 | 128 |
| more/less | 200 | 87.0 | 188700 | 2170 | 8.8 | 34.3 | 199 |

### A2.6 Iso-success contours for Llama, QwQ and Phi

Table A5: The six conditions in which hubs reach the success level later than low-degree nodes on the quenched UCM2.5 ($\tau<0$ at $S=0.6$), $N=$10\,000$$. $\Delta t^{\*}$ is the relative delay of $t^{\*}$ on the annealed network with respect to the quenched one, at $S=0.6$, for the lowest ($k=4$–5) and highest ($k=36$–100) degree bins.

| Model | Pair | $\tau$ ($S=0.6$) | $\tau$ ($S=0.8$) | $\Delta t^{\*}\_{\text{low}}$ | $\Delta t^{\*}\_{\text{hub}}$ |
| --- | --- | --- | --- | --- | --- |
| QwQ-32B | White/Black | $-0.18$ | $0.08$ | $+108\%$ | $-17\%$ |
| QwQ-32B | she/he | $-0.27$ | $0.08$ | $+160\%$ | $-6\%$ |
| QwQ-32B | wife/husband | $-0.18$ | $0.14$ | $+200\%$ | $+12\%$ |
| QwQ-32B | woman/man | $-0.03$ | $0.15$ | $+111\%$ | $+5\%$ |
| Phi-4 | African/White | $-0.03$ | $0.15$ | $+98\%$ | $+4\%$ |
| GPT-4o | woman/man | $-0.002$ | $0.04$ | $+8\%$ | $-7\%$ |

![Refer to caption](https://arxiv.org/html/2610.31165v1/figs/fig1e_isosuccess_llama31_70B_ucm_2.5_N10000.png)


Figure A5: Exposure and success by degree for Llama-3.1-70B on UCM2.5 at $N=10000$, one panel per word pair. Axes, markers and the bottom-right panel as in Figure [2](https://arxiv.org/html/2610.31165v1#S3.F2 "Figure 2 ‣ 3.1.2 Degree-resolved success on UCM ‣ 3.1 Consensus dynamics across topologies ‣ 3 Results ‣ Network topology shapes consensus and vulnerability in LLM populations"); the top-left corner of each panel reports the quenched tilt at $S=0.6$, $0.7$ and $0.8$, with a dash for a level that the word pair does not cross. The mixed-state pairs {young/old} and {more/less} are omitted, as is {Mexican/American}, whose initial success ($0.82$) lies above all three levels; for {gay/straight} (initial success $0.76$) only $S=0.8$ is shown.

![Refer to caption](https://arxiv.org/html/2610.31165v1/figs/fig1e_isosuccess_QWQ_32B_ucm_2.5_N10000.png)


Figure A6: Exposure and success by degree for QwQ-32B on UCM2.5 at $N=10000$, one panel per word pair. Axes, markers and the bottom-right panel as in Figure [2](https://arxiv.org/html/2610.31165v1#S3.F2 "Figure 2 ‣ 3.1.2 Degree-resolved success on UCM ‣ 3.1 Consensus dynamics across topologies ‣ 3 Results ‣ Network topology shapes consensus and vulnerability in LLM populations"); the top-left corner of each panel reports the quenched tilt at $S=0.6$, $0.7$ and $0.8$, with a dash for a level that the word pair does not cross.

![Refer to caption](https://arxiv.org/html/2610.31165v1/figs/fig1e_isosuccess_phi_4_ucm_2.5_N10000.png)


Figure A7: Exposure and success by degree for Phi-4 on UCM2.5 at $N=10000$, one panel per word pair. Axes, markers and the bottom-right panel as in Figure [2](https://arxiv.org/html/2610.31165v1#S3.F2 "Figure 2 ‣ 3.1.2 Degree-resolved success on UCM ‣ 3.1 Consensus dynamics across topologies ‣ 3 Results ‣ Network topology shapes consensus and vulnerability in LLM populations"); the top-left corner of each panel reports the quenched tilt at $S=0.6$, $0.7$ and $0.8$, with a dash for a level that the word pair does not cross. The pairs {gay/straight} and {more/less} are omitted, since their initial success ($1.00$ and $0.94$) lies above all three levels.

### A2.7 Statistical tests for committed minorities

Table A6: Friedman and Page’s $L$ tests on the critical fraction $p^{\*}$ of the placement ordering hub $<$ random $<$ low-degree nodes, by UCM exponent, model and commitment direction, $N=10000$. The block is the word pair; $p^{\*}$ is rounded to the bisection resolution ($0.01$) before ranking. Pairs with $p^{\*}=0$ in any placement are excluded ($n=9$ for Llama-3.1-70B in the weak direction).

|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Model | Direction | $n$ | $Q$ | $p$ | $W$ | $L$ | $p(L)$ |
| *UCM2.5* | | | | | | | |
| QwQ-32B | strong | 11 | 22.0 | $<.001$ | 1.000 | 154 | $<.001$ |
|  | weak | 11 | 20.0 | $<.001$ | 0.909 | 152 | $<.001$ |
| GPT-4o | strong | 11 | 22.0 | $<.001$ | 1.000 | 154 | $<.001$ |
|  | weak | 11 | 22.0 | $<.001$ | 1.000 | 154 | $<.001$ |
| Phi-4 | strong | 11 | 22.0 | $<.001$ | 1.000 | 154 | $<.001$ |
|  | weak | 11 | 22.0 | $<.001$ | 1.000 | 154 | $<.001$ |
| Llama-3.1-70B | strong | 11 | 22.0 | $<.001$ | 1.000 | 154 | $<.001$ |
|  | weak | 9 | 5.6 | 0.060 | 0.313 | 114 | 0.147 |
| *UCM5.0* | | | | | | | |
| QwQ-32B | strong | 11 | 18.9 | $<.001$ | 0.858 | 150.5 | $<.001$ |
|  | weak | 11 | 20.1 | $<.001$ | 0.916 | 152 | $<.001$ |
| GPT-4o | strong | 11 | 22.0 | $<.001$ | 1.000 | 154 | $<.001$ |
|  | weak | 11 | 21.5 | $<.001$ | 0.979 | 154 | $<.001$ |
| Phi-4 | strong | 11 | 22.0 | $<.001$ | 1.000 | 154 | $<.001$ |
|  | weak | 11 | 21.1 | $<.001$ | 0.961 | 153 | $<.001$ |
| Llama-3.1-70B | strong | 11 | 21.5 | $<.001$ | 0.979 | 154 | $<.001$ |
|  | weak | 9 | 3.7 | 0.156 | 0.206 | 112 | 0.281 |


Table A7: Friedman and Page’s $L$ tests on the critical fraction $p^{\*}$ of the topology ordering RRN $<$ UCM5.0 $<$ UCM2.5 $<$ FC under random placement, by model and commitment direction, $N=10000$. The block is the word pair; $p^{\*}$ is rounded to the bisection resolution ($0.01$) before ranking. Pairs with $p^{\*}=0$ on any topology are excluded ($n=9$ for Llama-3.1-70B in the weak direction). Page’s $L$ is one-sided in the predicted direction, so $p(L)=1.000$ for Llama-3.1-70B in the strong direction reflects the reversed ordering.

| Model | Direction | $n$ | $Q$ | $p$ | $W$ | $L$ | $p(L)$ |
| --- | --- | --- | --- | --- | --- | --- | --- |
| QwQ-32B | strong | 11 | 10.5 | 0.015 | 0.319 | 286 | 0.138 |
|  | weak | 11 | 13.1 | 0.004 | 0.396 | 305 | $<.001$ |
| GPT-4o | strong | 11 | 32.4 | $<.001$ | 0.982 | 329 | $<.001$ |
|  | weak | 11 | 33.0 | $<.001$ | 1.000 | 330 | $<.001$ |
| Phi-4 | strong | 11 | 30.4 | $<.001$ | 0.921 | 327 | $<.001$ |
|  | weak | 11 | 33.0 | $<.001$ | 1.000 | 330 | $<.001$ |
| Llama-3.1-70B | strong | 11 | 21.1 | $<.001$ | 0.640 | 234 | 1.000 |
|  | weak | 9 | 6.0 | 0.112 | 0.222 | 235 | 0.139 |


Table A8: Critical fraction $p^{\*}$ for the three QwQ-32B pairs whose convention is overturned only by a near-complete committed minority, by topology and placement, $N=$10\,000$$. For each pair, the first row is the direction requiring $p^{\*}\geq 0.95$, the second the opposite direction.

|  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  | FC | RRN | UCM2.5 | | | UCM5.0 | | |
| Pair | random | random | hub | random | low | hub | random | low |
| gay/straight | 0.992 | 0.992 | 0.977 | 0.992 | 1.000 | 0.992 | 0.992 | 1.000 |
|  | 0.013 | 0.013 | 0.001 | 0.013 | 0.019 | 0.003 | 0.013 | 0.013 |
| young/old | 0.992 | 0.992 | 0.977 | 0.992 | 1.000 | 0.992 | 0.992 | 1.000 |
|  | 0.003 | 0.006 | $<0.001$ | 0.001 | 0.002 | 0.001 | 0.003 | 0.006 |
| wife/husband | 0.992 | 0.992 | 0.977 | 0.992 | 1.000 | 0.992 | 0.992 | 1.000 |
|  | 0.275 | 0.326 | 0.070 | 0.218 | 0.390 | 0.250 | 0.288 | 0.314 |
