---
id: arxiv-2602-06039-text
type: material
title: 'DyTopo: Dynamic Topology Routing for Multi-Agent Reasoning via Semantic Matching'
work_id: arxiv-2602-06039
source_url: https://arxiv.org/html/2602.06039v1
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять
  с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.
language: original
sha256_text: d7d4b37ae7eebd6bf19ed19c1e3fac52996997a8eb234058be58de9429c27e6c
---

> Источник: [https://arxiv.org/html/2602.06039v1](https://arxiv.org/html/2602.06039v1). Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.

# DyTopo: Dynamic Topology Routing for Multi-Agent Reasoning via Semantic Matching

Yuxing Lu
Affiliation: Peking University, Beijing, China
Affiliation: Georgia Institute of Technology, Atlanta, United States
  
Yucheng Hu
Affiliation: Southeast University, Location, Country
  
Xukai Zhao
Affiliation: Tsinghua University
  
Jiuxin Cao
Affiliation: Southeast University, Location, Country
Correspondence to: [jx.cao@seu.edu.cn](mailto:jx.cao@seu.edu.cn)

###### Abstract

Multi-agent systems built from prompted large language models can improve multi-round reasoning, yet most existing pipelines rely on fixed, trajectory-wide communication patterns that are poorly matched to the stage-dependent needs of iterative problem solving. We introduce DyTopo, a manager-guided multi-agent framework that reconstructs a sparse directed communication graph at each round. Conditioned on the manager’s round goal, each agent outputs lightweight natural-language *query* (need) and *key* (offer) descriptors; DyTopo embeds these descriptors and performs semantic matching, routing private messages only along the induced edges. Across code generation and mathematical reasoning benchmarks and four LLM backbones, DyTopo consistently outperforms over the strongest baseline (avg. +6.2). Beyond accuracy, DyTopo yields an interpretable coordination trace via the evolving graphs, enabling qualitative inspection of how communication pathways reconfigure across rounds.

###### Keywords:

Machine Learning, ICML

## 1 Introduction

Multi-agent systems built from prompted large language models have become a practical paradigm for multi-round reasoning ([Tran et al., 2025](https://arxiv.org/html/2602.06039v1#bib.bib12); [Li et al., 2024](https://arxiv.org/html/2602.06039v1#bib.bib13)). By instantiating several role-specialized LLM agents and allowing them to interact over multiple rounds, these systems can iteratively refine partial solutions, cross-check intermediate steps, and integrate complementary skills ([Wölflein et al., 2025](https://arxiv.org/html/2602.06039v1#bib.bib14); [Yu et al., 2025](https://arxiv.org/html/2602.06039v1#bib.bib15)). This collaboration style is particularly well suited to complex problem domains, where effective reasoning emerges from the coordinated interplay of specialized agents and from their abilities to collectively revise earlier assumptions as new evidence or errors are uncovered.

A central yet often under-specified aspect of multi-agent reasoning is the communication structure: which agents exchange information with whom, and when ([Goldman and Zilberstein, 2003](https://arxiv.org/html/2602.06039v1#bib.bib16)). Many existing pipelines default to a fixed, trajectory-wide interaction pattern (e.g., broadcast discussion or scripted turn-taking), effectively reusing the same topology across all rounds. However, multi-round reasoning is stage-dependent: early rounds tend to benefit from broad exploration and shared problem framing, whereas later rounds require selective, high-precision exchanges to diagnose failures and converge on a coherent solution ([Liu et al., 2024](https://arxiv.org/html/2602.06039v1#bib.bib17)). This suggests that communication topology should be an adaptive object, conditioned on the round-level goal, rather than a static design choice.

Figure 1: Comparison of communication topologies. (A) Single-agent prompting. (B) Fixed-topology communication reused across rounds. (C) DyTopo dynamically rewires a directed agent graph each round based on the round goal and semantic relevance.

We propose DyTopo, a manager-guided multi-round multi-agent framework in which the manager specifies a round-level goal and determines whether to terminate the interaction. Given the round goal and the agents’ self-described information needs and capabilities, DyTopo induces a directed communication graph at each round and routes messages only along the activated links. This allows the system to shift from broad exploration to targeted verification as reasoning progresses.

A key ingredient enabling DyTopo’s round-by-round routing is a semantic key-query matching scheme across agents. Conditioned on the manager’s round goal, each agent provides short natural-language descriptors that summarize what it can provide to others (a “key”) and what it currently seeks (a “query”). DyTopo semantically matches queries to keys to induce the directed communication graph for each round, and routes messages only along the activated links. This decouples what agents generate from how their information is routed, enabling communication patterns that adapt over rounds. This topology-driven routing yields two advantages. First, it improves collaboration by organizing information flow around the current round goal rather than a static neighborhood. Second, it provides an interpretable coordination trace: edges are activated based on explicit descriptors and semantic relevance, so the evolving graphs can be inspected to reveal how pathways reconfigure over time and which patterns correlate with success or failure.

We evaluate DyTopo on multi-round code generation and mathematical reasoning tasks, comparing against single-agent prompting, multi-agent baselines with fixed or random communication topologies, and strong recent agentic frameworks. The results show that dynamic communication topologies consistently improve task performance and remain robust under different experiment settings. We further characterize the method through analyses of performance versus the number of rounds, qualitative visualizations of topology evolution over time, and ablations over the semantic matching hyperparameters that control link activation.

## 2 Related Work

### 2.1 LLM-Based Multi-Agent Collaboration

A growing line of work studies how to compose multiple prompted LLM instances into a cooperative system via natural-language interaction. Early frameworks emphasize role specialization and structured dialogue: CAMEL proposes role-playing agents guided by inception prompting to autonomously collaborate on tasks ([Li et al., 2023](https://arxiv.org/html/2602.06039v1#bib.bib1)), while AutoGen provides a programmable framework for building applications from multiple conversable agents with customizable interaction patterns ([Wu et al., 2024](https://arxiv.org/html/2602.06039v1#bib.bib2)). MetaGPT further incorporates human-inspired standardized operating procedures (SOPs) to coordinate multiple role agents and reduce cascading errors in long workflows ([Hong et al., 2023](https://arxiv.org/html/2602.06039v1#bib.bib3)). Complementary to role-based cooperation, multi-agent deliberation improves reasoning and factuality by having multiple model instances propose and critique solutions over multiple rounds ([Du et al., 2023](https://arxiv.org/html/2602.06039v1#bib.bib4)). Finally, agent systems are often coupled with tools or external models, where an LLM acts as a controller that decomposes tasks and delegates to specialized executors ([Shen et al., 2023](https://arxiv.org/html/2602.06039v1#bib.bib5)). While these approaches demonstrate gains from collaboration, they typically rely on fixed or dense communication patterns, leaving open how to adaptively route information among agents at inference time.

### 2.2 Selective and Dynamic Communication Topologies

Selective communication has long been studied in multi-agent learning and neural routing. In cooperative MARL, targeted messaging methods such as TarMAC learn *what* to communicate and *whom* to address, enabling multi-round coordination with interpretable communication patterns ([Das et al., 2019](https://arxiv.org/html/2602.06039v1#bib.bib6)). In large-scale neural architectures, conditional computation and routing activate only a small subset of experts per token to scale capacity efficiently ([Fedus et al., 2022](https://arxiv.org/html/2602.06039v1#bib.bib7)), and content-based sparse attention constructs query-dependent sparse interaction patterns among tokens ([Roy et al., 2021](https://arxiv.org/html/2602.06039v1#bib.bib8)). Recently, these principles have been adapted to LLM-based agent teams to reduce redundant interactions and design task-aware connectivity. AgentPrune identifies communication redundancy in multi-agent pipelines and prunes low-value messages on the induced spatio-temporal message-passing graph ([Zhang et al., 2024a](https://arxiv.org/html/2602.06039v1#bib.bib9)). Beyond pruning, G-Designer generates task-conditioned agent communication topologies ([Zhang et al., 2024b](https://arxiv.org/html/2602.06039v1#bib.bib10)), and GTD casts topology synthesis as a guided diffusion process to optimize performance-cost-robustness trade-offs ([Jiang et al., 2025](https://arxiv.org/html/2602.06039v1#bib.bib11)). Our work complements this direction by studying an explicitly interpretable inference-time routing mechanism: agents output textual Need and Offer descriptors and a directed topology is constructed each round via semantic similarity, enabling controlled multi-round message passing and topology-level analysis.

## 3 Methods

Figure 2: DyTopo round-by-round routing via semantic matching. At each round $t$, each worker agent outputs a query and a key descriptor. A semantic matching module embeds these descriptors, computes pairwise similarity, and induces a directed graph $G^{(t)}$. Private messages produced at round $t$ are routed according to $G^{(t)}$ after a synchronization barrier and are appended to recipients’ memories for round $t{+}1$. The Manager provides round goals and updates the next-round context, yielding a closed-loop adaptation across rounds.

We formalize DyTopo as a Dynamic Computation Graph (DCG), $\mathcal{G}=\{G^{(t)}\}\_{t=0}^{T-1}$, where $T$ is the number of executed rounds (indexed by $t\in\{0,\dots,T-1\}$) and $T\leq T\_{\max}$ is capped by a fixed budget. Unlike static topologies, DyTopo reconstructs $G^{(t)}$ at each communication round $t$ under a manager-specified round goal, driven by semantic matching between agents’ information needs and offered capabilities. In Appendix [A](https://arxiv.org/html/2602.06039v1#A1 "Appendix A Complexity Analysis ‣ DyTopo: Dynamic Topology Routing for Multi-Agent Reasoning via Semantic Matching"), we analyze Dytopo’s complexity advantages over fully connected networks. The overall algorithm is summarized in Appendix [C](https://arxiv.org/html/2602.06039v1#A3 "Appendix C Pseudo-code for DyTopo ‣ DyTopo: Dynamic Topology Routing for Multi-Agent Reasoning via Semantic Matching").

### 3.1 Preliminaries

Let $\mathcal{A}=\{a\_{1},\dots,a\_{N}\}$ denote $N$ heterogeneous worker agents. Each worker agent $a\_{i}$ is instantiated with a role description $\rho\_{i}$ and maintains a local memory buffer $\mathcal{H}\_{i}^{(t)}$. At each round $t$, agent $a\_{i}$ produces communication messages in $\mathcal{M}$ and lightweight topology descriptors in $\mathcal{D}$. In addition, DyTopo includes a Manager meta-agent that maintains a global view and updates the round context $C\_{task}^{(t)}$.

DyTopo uses two message channels: a manager-visible public channel $\mathcal{M}\_{pub}$ and a routed private channel $\mathcal{M}\_{priv}$. Agent $a\_{i}$ outputs a public message $m^{(t)}\_{pub,i}\in\mathcal{M}\_{pub}$ (visible to the Manager and recorded for analysis) and a private message $m^{(t)}\_{priv,i}\in\mathcal{M}\_{priv}$ (routed to the out-neighbors of $a\_{i}$ in $G^{(t)}$).

In addition, the agent outputs two short natural-language descriptors that determine connectivity at round $t$. The query descriptor $s^{(t)}\_{q,i}\in\mathcal{D}$ summarizes what information agent $a\_{i}$ currently seeks, and the key descriptor $s^{(t)}\_{k,i}\in\mathcal{D}$ summarizes what information it can provide to others.

### 3.2 Per-Round Agent Execution

#### 3.2.1 Single-Pass Inference and Descriptor Generation

To ensure computational efficiency, we impose a Single-Pass Inference constraint: each agent performs exactly one forward pass per round using only its role description, the manager-provided round goal, and its local memory. Agents generate task-relevant messages and lightweight natural-language descriptors used for topology induction.

Formally, the local state is

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$S\_{i}^{(t)}=[\rho\_{i};\,C\_{task}^{(t)};\,\mathcal{H}\_{i}^{(t)}],$$ |  | (1) |

and the agent output is

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$O\_{i}^{(t)}=\langle m^{(t)}\_{pub,i},\,m^{(t)}\_{priv,i},\,s^{(t)}\_{q,i},\,s^{(t)}\_{k,i}\rangle\sim\pi\_{\theta\_{i}}(\cdot\mid S\_{i}^{(t)}).$$ |  | (2) |

The descriptors $s^{(t)}\_{q,i}$ and $s^{(t)}\_{k,i}$ are embedded to induce $G^{(t)}$ (Sec. [3.3](https://arxiv.org/html/2602.06039v1#S3.SS3 "3.3 Dynamic Topology via Semantic Matching ‣ 3 Methods ‣ DyTopo: Dynamic Topology Routing for Multi-Agent Reasoning via Semantic Matching")); private messages are then routed and integrated into memories for the next round (Sec. [3.2.2](https://arxiv.org/html/2602.06039v1#S3.SS2.SSS2 "3.2.2 Synchronization Barrier and Context Update ‣ 3.2 Per-Round Agent Execution ‣ 3 Methods ‣ DyTopo: Dynamic Topology Routing for Multi-Agent Reasoning via Semantic Matching")).

#### 3.2.2 Synchronization Barrier and Context Update

After generating $O\_{i}^{(t)}$, agents do not update their local memory immediately. Instead, DyTopo applies a Synchronization Barrier: it first induces the directed topology $G^{(t)}$ and routes private messages according to the activated edges, and only then updates each agent’s memory for next round.

Let $G^{(t)}=(\mathcal{A},\mathcal{E}^{(t)})$ and define the incoming neighbor set as $\mathcal{N}^{(t)}\_{in}(i)=\{\,j\mid(a\_{j}\rightarrow a\_{i})\in\mathcal{E}^{(t)}\,\}$.

The memory update rule is:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\small\mathcal{H}\_{i}^{(t+1)}=\mathcal{H}\_{i}^{(t)}\oplus m\_{pub,i}^{(t)}\oplus\Sigma\_{\sigma\_{i}^{(t)}}\!\left(\{m\_{priv,j}^{(t)}\mid j\in\mathcal{N}^{(t)}\_{in}(i)\}\right).$$ |  | (3) |

where $\oplus$ denotes concatenation and $\mathcal{N}^{(t)}\_{in}(i)$ is the set of incoming neighbors of agent $a\_{i}$ in $G^{(t)}$. $\Sigma\_{\sigma^{(t)}}(\cdot)$ is a context aggregation operator that constructs a single prompt block from routed private messages by ordering them according to an *aggregation order* $\sigma^{(t)}$ and then concatenating them in that order. This yields a deterministic prompt layout and an ordering that is consistent with the induced dependency structure. Here, $m\_{pub,i}^{(t)}$ is agent $a\_{i}$’s own generated public message at round $t$, and each $m\_{priv,j}^{(t)}$ is included in agent $a\_{i}$’s next-round context only when $j$ is an incoming neighbor (i.e., when the edge $a\_{j}\!\rightarrow\!a\_{i}$ is active in $G^{(t)}$). Overall, this update ensures that agent $a\_{i}$ at round $t{+}1$ conditions only on its prior memory and on information permitted by the induced topology $G^{(t)}$.

### 3.3 Dynamic Topology via Semantic Matching

DyTopo induces a directed communication graph at each round based on the agents’ textual descriptors. Concretely, at round $t$ each agent $a\_{i}$ outputs a query descriptor $s^{(t)}\_{q,i}$ (what it needs) and a key descriptor $s^{(t)}\_{k,i}$ (what it can provide). DyTopo embeds these descriptors into a shared semantic space and constructs $G^{(t)}=(\mathcal{A},\mathcal{E}^{(t)})$ by activating directed edges from providers to consumers according to semantic relevance. The resulting topology determines which private messages are routed between agents in round $t$.

#### 3.3.1 Semantic Alignment Quantification

Because descriptors are natural language, we map them to vectors using a fixed pre-trained semantic encoder,
$\mathrm{Emb}:\mathcal{D}\rightarrow\mathbb{R}^{d}$, where $d$ is the embedding dimension.
For each agent $a\_{i}$ at round $t$, we compute

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\mathbf{q}\_{i}^{(t)}=\mathrm{Emb}\!\left(s^{(t)}\_{q,i}\right),\quad\mathbf{k}\_{i}^{(t)}=\mathrm{Emb}\!\left(s^{(t)}\_{k,i}\right),$$ |  | (4) |

and stack them into matrices $\mathbf{Q}^{(t)},\mathbf{K}^{(t)}\in\mathbb{R}^{N\times d}$. Here, $N$ denotes the number of active agents, and $d$ is the embedding dimension of the semantic encoder. We posit that a communication link should exist from agent $j$ to agent $i$ if the semantic capacity offered by $j$ aligns with the need of $i$. We quantify semantic alignment using cosine similarity. We $\ell\_{2}$-normalize embeddings and define

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\scriptsize\hat{\mathbf{q}}\_{i}^{(t)}=\frac{\mathbf{q}\_{i}^{(t)}}{\|\mathbf{q}\_{i}^{(t)}\|\_{2}},\hskip 8.19447pt\hat{\mathbf{k}}\_{j}^{(t)}=\frac{\mathbf{k}\_{j}^{(t)}}{\|\mathbf{k}\_{j}^{(t)}\|\_{2}},\hskip 8.19447ptr\_{i,j}^{(t)}=(\hat{\mathbf{q}}\_{i}^{(t)})^{\top}\hat{\mathbf{k}}\_{j}^{(t)}\in[-1,1].$$ |  | (5) |

This score measures how well agent $a\_{j}$’s offered capability (key) matches agent $a\_{i}$’s current need (query), and it is directly comparable across rounds under a fixed encoder.

#### 3.3.2 Sparse Graph Construction

To obtain a sparse topology, we apply hard thresholding to the relevance matrix. The binary adjacency matrix $A^{(t)}\in\{0,1\}^{N\times N}$ is defined as

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$A\_{j\rightarrow i}^{(t)}=\mathbb{I}\!\left(r\_{i,j}^{(t)}>\tau\_{\text{edge}}\right)\cdot(1-\delta\_{ij}),$$ |  | (6) |

where $\mathbb{I}(\cdot)$ is the indicator function, $\tau\_{\text{edge}}$ controls graph sparsity, and $\delta\_{ij}$ prevents self-loops.

We then set $\mathcal{E}^{(t)}=\{(a\_{j}\rightarrow a\_{i})\mid A\_{j\rightarrow i}^{(t)}=1\}$ and define the incoming neighbor set:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\mathcal{N}^{(t)}\_{in}(i)=\{\,j\mid A\_{j\rightarrow i}^{(t)}=1\,\}.$$ |  | (7) |

Thus, a directed edge $a\_{j}\rightarrow a\_{i}$ indicates that $a\_{j}$ is selected as a *provider* for $a\_{i}$ at round $t$, and $m\_{priv,j}^{(t)}$ becomes eligible to be routed into $a\_{i}$’s next-round context (Sec. [3.2.2](https://arxiv.org/html/2602.06039v1#S3.SS2.SSS2 "3.2.2 Synchronization Barrier and Context Update ‣ 3.2 Per-Round Agent Execution ‣ 3 Methods ‣ DyTopo: Dynamic Topology Routing for Multi-Agent Reasoning via Semantic Matching")).

#### 3.3.3 Topology Adaptation and Routing Semantics

The induced topology $G^{(t)}=(\mathcal{A},\mathcal{E}^{(t)})$ is a sparse directed graph that encodes the instantaneous information dependencies of the collaboration at round $t$. Directionality is explicit: an edge $a\_{j}\rightarrow a\_{i}$ is activated only when $a\_{j}$’s key embedding $\mathbf{k}\_{j}^{(t)}$ semantically matches $a\_{i}$’s query embedding $\mathbf{q}\_{i}^{(t)}$, indicating that $a\_{j}$ is selected as a provider for $a\_{i}$ in the current round. This direction also determines routing semantics: when $a\_{j}\rightarrow a\_{i}$ is active, $m\_{priv,j}^{(t)}$ becomes eligible to be routed into $a\_{i}$’s next-round context (Sec. [3.2.2](https://arxiv.org/html/2602.06039v1#S3.SS2.SSS2 "3.2.2 Synchronization Barrier and Context Update ‣ 3.2 Per-Round Agent Execution ‣ 3 Methods ‣ DyTopo: Dynamic Topology Routing for Multi-Agent Reasoning via Semantic Matching")).

The topology is adaptive across rounds because the descriptors are recomputed from the evolving agent state. As the manager updates $C\_{task}^{(t)}$ and agents update their memories $\{\mathcal{H}\_{i}^{(t)}\}$, the textual descriptors $\{s^{(t)}\_{q,i},s^{(t)}\_{k,i}\}$ change, which in turn changes the embeddings $\{\mathbf{q}\_{i}^{(t)},\mathbf{k}\_{i}^{(t)}\}$ and the relevance scores $\{r\_{i,j}^{(t)}\}$. Consequently, the adjacency matrix $A^{(t)}$ and edge set $\mathcal{E}^{(t)}$ can reconfigure from round to round, creating new links when a previously missing capability becomes relevant and removing links when an information need has been satisfied.

For example, an agent with a fixed Developer role may shift its query from “need API specifications” to “need test cases” after implementing a module, while its key shifts from “can provide design draft” to “can provide implementation code”, leading to corresponding changes in its incoming and outgoing neighbors.

Sparsity acts as a practical communication budget control. The hard threshold $\tau\_{\text{edge}}$ controls how many edges are activated, limiting irrelevant message traffic and reducing context overload from non-essential messages.

### 3.4 Topology-Aware Message Ordering

DyTopo uses a synchronization barrier, so $G^{(t)}$ encodes routing eligibility rather than within-round execution causality. We therefore define deterministic message ordering only for prompt construction and trace reproducibility. For each recipient agent $a\_{i}$, we order its incoming routed messages by decreasing semantic relevance $r^{(t)}\_{i,j}$, breaking ties deterministically. This yields a recipient-specific order $\sigma\_{i}^{(t)}$ used inside $\Sigma(\cdot)$ when updating $\mathcal{H}\_{i}^{(t+1)}$.

Table 1: Statistics and characteristics of the evaluation datasets. We categorize datasets by domain and difficulty level to ensure a comprehensive evaluation of the multi-agent system.

| Dataset | Domain | Difficulty | Dataset Description |
| --- | --- | --- | --- |
| HumanEval | Code | Fundamental | Evaluation of functional correctness in Python via docstrings. |
| APPS-Competition | Code | Advanced | Competitive programming problems requiring algorithmic design. |
| MATH-500 | Math | Hard | A balanced subset (7 domains) of MATH, focusing on derivation. |
| Omni-MATH | Math | Expert | Focused on deep reasoning with Olympiad-level complexity. |

#### 3.4.1 Dependency Graph Definition

At each round $t$, DyTopo induces an interaction graph
$G^{(t)}=(\mathcal{A},\mathcal{E}^{(t)})$ over the agent set $\mathcal{A}$. The edge set $\mathcal{E}^{(t)}$ is derived from the binary adjacency matrix $A^{(t)}$ constructed in Sec. [3.3](https://arxiv.org/html/2602.06039v1#S3.SS3 "3.3 Dynamic Topology via Semantic Matching ‣ 3 Methods ‣ DyTopo: Dynamic Topology Routing for Multi-Agent Reasoning via Semantic Matching"), i.e., $\mathcal{E}^{(t)}=\{(a\_{j}\rightarrow a\_{i})\mid A^{(t)}\_{j\rightarrow i}=1\}$. A directed edge $a\_{j}\rightarrow a\_{i}$ represents an inference-time dependency: agent $a\_{i}$ is selected to receive agent $a\_{j}$’s private message in round $t$ (equivalently, $j\in\mathcal{N}^{(t)}\_{in}(i)$), so $m^{(t)}\_{priv,j}$ is eligible to be routed into $a\_{i}$’s next-round context.

Given $G^{(t)}$, we define an aggregation order $\sigma^{(t)}=(\sigma^{(t)}\_{1},\dots,\sigma^{(t)}\_{N})$, a permutation of $\{1,\dots,N\}$, which is used to deterministically order routed messages in $\Sigma\_{\sigma^{(t)}}(\cdot)$ during memory updates and to ensure reproducibility of the coordination trace. When multiple orders are possible, we break ties deterministically.

#### 3.4.2 Adaptive Topological Sequencing

Because $G^{(t)}$ is induced dynamically, it may be acyclic or contain directed cycles. DyTopo constructs an aggregation order $\sigma^{(t)}=(\sigma^{(t)}\_{1},\dots,\sigma^{(t)}\_{N})$, a permutation of $\{1,\dots,N\}$, which is used to linearize dependencies when possible and provide a deterministic ordering for message integration via $\Sigma\_{\sigma^{(t)}}(\cdot)$. For convenience, define the position of an agent index $i$ in the sequence as

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\mathrm{pos}\_{\sigma^{(t)}}(i)=\min\{\ell\in\{1,\dots,N\}\mid\sigma^{(t)}\_{\ell}=i\}.$$ |  | (8) |

Case I: Directed Acyclic Graph (DAG).
If $G^{(t)}$ contains no directed cycles, we compute $\sigma^{(t)}$ using a standard topological sort on $G^{(t)}$.
The resulting order satisfies

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\forall\,(a\_{j}\rightarrow a\_{i})\in\mathcal{E}^{(t)}\;\Rightarrow\;\mathrm{pos}\_{\sigma^{(t)}}(j)<\mathrm{pos}\_{\sigma^{(t)}}(i),$$ |  | (9) |

so that any selected provider $a\_{j}$ precedes its consumer $a\_{i}$ in the induced linearization. When multiple valid topological orders exist, we break ties to ensure reproducibility.

Case II: Cyclic Graph.
If $G^{(t)}$ contains cycles, no topological order exists. In this case, we construct $\sigma^{(t)}$ using a greedy
cycle-breaking heuristic based on the current dependency structure. Let $\mathcal{U}\subseteq\{1,\dots,N\}$ denote the set of unplaced agent indices, and define the restricted in-degree

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$d^{(t)}\_{in}(i;\mathcal{U})=\left|\left\{j\in\mathcal{U}\mid(a\_{j}\rightarrow a\_{i})\in\mathcal{E}^{(t)}\right\}\right|.$$ |  | (10) |

We iteratively select the next index

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$i^{\*}=\arg\min\_{i\in\mathcal{U}}d^{(t)}\_{in}(i;\mathcal{U}),$$ |  | (11) |

append $i^{\*}$ to $\sigma^{(t)}$, and remove it from $\mathcal{U}$ until all indices are placed. Intuitively, nodes with smaller restricted in-degree have fewer unmet dependencies within the remaining subgraph, so placing them earlier yields an order that minimizes reliance on information that is cyclically unavailable. This procedure produces a well-defined permutation even when $G^{(t)}$ is cyclic, and it provides a consistent ordering for
$\Sigma\_{\sigma^{(t)}}(\cdot)$ in the memory update step.

### 3.5 Meta-Control and Workflow Orchestration

To prevent divergent discussions and ensure goal-oriented convergence, DyTopo includes a hierarchical control layer implemented by a Manager (meta-agent). Unlike worker agents $a\_{i}\in\mathcal{A}$, which operate on local memories $\mathcal{H}\_{i}^{(t)}$, the Manager maintains a global view of the current round and updates the shared round context $C\_{task}^{(t)}$, which serves as the manager-specified round goal in Eq. ([1](https://arxiv.org/html/2602.06039v1#S3.E1 "Equation 1 ‣ 3.2.1 Single-Pass Inference and Descriptor Generation ‣ 3.2 Per-Round Agent Execution ‣ 3 Methods ‣ DyTopo: Dynamic Topology Routing for Multi-Agent Reasoning via Semantic Matching")).

#### 3.5.1 Global State Aggregation

At the end of round $t$, after all worker agents have produced outputs under the synchronization barrier and private messages have been routed under $G^{(t)}$, the Manager aggregates the current-round public information into a global state representation
$S\_{global}^{(t)}$. We define

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$S\_{global}^{(t)}=\left[C\_{task}^{(t)};\,\Sigma\_{\sigma^{(t)}}\!\left(\{m\_{pub,i}^{(t)}\mid a\_{i}\in\mathcal{A}\}\right)\right],$$ |  | (12) |

where $\Sigma\_{\sigma^{(t)}}(\cdot)$ denotes structured, order-preserving concatenation under $\sigma^{(t)}$. This global view allows the Manager to track progress, detect inconsistencies, and identify missing information needed for convergence.

Table 2: Multi-agent performance on coding and math benchmarks (%, higher is better) across different LLM backbones.

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Backbone | LLM Output | Single-turn Agent | Random Topology | AgentScope | DyTopo |
| HumanEval | | | | | |
| MiMo-V2-Flash | 86.59 | 88.41 (+2.1%) | 88.17 (+1.8%) | 90.24 (+4.2%) | 92.07 (+6.3%) |
| GPT-oss-120B | 95.73 | 93.29 (-2.5%) | 91.46 (-4.5%) | 92.68 (-3.2%) | 98.16 (+2.5%) |
| Llama3-8B-Instruct | 23.78 | 47.56 (+100.0%) | 42.07 (+77.0%) | 42.94 (+80.6%) | 50.61 (+112.9%) |
| Qwen3-8B | 18.29 | 46.95 (+156.7%) | 80.49 (+340.1%) | 80.00 (+337.4%) | 89.63 (+390.0%) |
| APPS-Competition | | | | | |
| MiMo-V2-Flash | 41.18 | 42.84 (+4.0%) | 42.01 (+2.0%) | 48.42 (+17.6%) | 49.81 (+21.0%) |
| GPT-oss-120B | 31.88 | 60.55 (+90.0%) | 52.21 (+63.8%) | 58.71 (+84.2%) | 69.66 (+118.5%) |
| Llama3-8B-Instruct | 10.13 | 13.28 (+31.1%) | 12.44 (+22.8%) | 14.29 (+41.1%) | 18.21 (+79.8%) |
| Qwen3-8B | 9.62 | 13.47 (+40.0%) | 24.24 (+152.0%) | 23.12 (+140.3%) | 25.14 (+161.3%) |
| Math-500 | | | | | |
| MiMo-V2-Flash | 57.14 | 65.71 (+15.0%) | 78.57 (+37.5%) | 75.71 (+32.5%) | 87.14 (+52.5%) |
| GPT-oss-120B | 60.00 | 81.43 (+35.7%) | 87.14 (+45.2%) | 82.86 (+38.1%) | 88.57 (+47.6%) |
| Llama3-8B-Instruct | 12.86 | 25.71 (+100.0%) | 20.00 (+55.6%) | 30.00 (+133.3%) | 47.14 (+266.7%) |
| Qwen3-8B | 48.57 | 57.14 (+17.6%) | 68.57 (+41.2%) | 72.86 (+50.0%) | 75.71 (+55.9%) |
| Omni-Math | | | | | |
| MiMo-V2-Flash | 32.86 | 37.14 (+13.0%) | 41.43 (+26.1%) | 44.28 (+34.8%) | 52.86 (+60.9%) |
| GPT-oss-120B | 14.29 | 25.71 (+80.0%) | 34.29 (+140.0%) | 37.14 (+160.0%) | 41.43 (+190.0%) |
| Llama3-8B-Instruct | 14.29 | 11.43 (-20.0%) | 15.71 (+10.0%) | 22.86 (+60.0%) | 30.00 (+110.0%) |
| Qwen3-8B | 21.43 | 32.86 (+53.3%) | 25.71 (+20.0%) | 35.71 (+66.6%) | 51.43 (+140.0%) |

Note: Relative improvement is computed per backbone. Bold indicates the best multi-agent result within each backbone row.

#### 3.5.2 Manager Policy and Halting

We model the Manager as a high-level policy $\Pi\_{meta}$ that maps the global state to a halting decision and a next-round context update:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\langle y^{(t)},\,C\_{task}^{(t+1)}\rangle\sim\Pi\_{meta}(\cdot\mid S\_{global}^{(t)}),$$ |  | (13) |

where $y^{(t)}\in\{0,1\}$ indicates whether the system terminates after round $t$. Concretely, the halting decision is:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$y^{(t)}=\begin{cases}1&\text{if }\Phi(S\_{global}^{(t)})\geq\gamma\_{success},\\ 0&\text{otherwise},\end{cases}$$ |  | (14) |

where $\Phi(\cdot)$ is an internal evaluation function and $\gamma\_{success}$ is an acceptance threshold. When $y^{(t)}=0$, the updated context $C\_{task}^{(t+1)}$ provides refined round-level guidance, focusing subsequent communication on unresolved subgoals.

#### 3.5.3 Bi-Level Feedback Loop

If $y^{(t)}=0$, the Manager broadcasts $C\_{task}^{(t+1)}$ to all agents and the system proceeds to round $t{+}1$ by updating the agent state in Eq. ([1](https://arxiv.org/html/2602.06039v1#S3.E1 "Equation 1 ‣ 3.2.1 Single-Pass Inference and Descriptor Generation ‣ 3.2 Per-Round Agent Execution ‣ 3 Methods ‣ DyTopo: Dynamic Topology Routing for Multi-Agent Reasoning via Semantic Matching")). This closes a feedback loop operating at two levels: at the micro-level, agents induce and use $G^{(t)}$ via query–key semantic matching (Sec. [3.3](https://arxiv.org/html/2602.06039v1#S3.SS3 "3.3 Dynamic Topology via Semantic Matching ‣ 3 Methods ‣ DyTopo: Dynamic Topology Routing for Multi-Agent Reasoning via Semantic Matching")); at the macro-level, the Manager updates $C\_{task}^{(t)}$ and decides when to halt.

## 4 Experiments

### 4.1 Datasets

To evaluate the reasoning and generation capabilities of our framework, we curate a benchmark suite spanning two domains: code generation and mathematical reasoning. The suite is intentionally difficulty-graded, ranging from function-level correctness to competition and Olympiad-level problem solving, to test whether the system remains reliable as task complexity and reasoning depth increase. We summarize these datasets in Table [1](https://arxiv.org/html/2602.06039v1#S3.T1 "Table 1 ‣ 3.4 Topology-Aware Message Ordering ‣ 3 Methods ‣ DyTopo: Dynamic Topology Routing for Multi-Agent Reasoning via Semantic Matching").

Code generation benchmarks.
We consider two programming benchmarks with complementary difficulties. HumanEval ([Chen et al., 2021](https://arxiv.org/html/2602.06039v1#bib.bib23)) provides a baseline assessment of fundamental coding ability through handwritten Python problems that primarily test docstring understanding and function-level correctness. To evaluate performance under substantially higher complexity, we additionally use a subset of APPS ([Hendrycks et al., 2021](https://arxiv.org/html/2602.06039v1#bib.bib24)), selecting 100 problems from the Competition split. These tasks resemble collegiate programming contests and typically require robust handling of edge cases and more sophisticated algorithmic design.

Mathematical reasoning benchmarks.
For mathematical reasoning, we target multi-step deduction across diverse subfields. We use MATH-500 ([Lightman et al., 2023](https://arxiv.org/html/2602.06039v1#bib.bib25)) as a representative benchmark to probe consistent multi-step reasoning. We also include Omni-MATH ([Gao et al., 2024](https://arxiv.org/html/2602.06039v1#bib.bib26)), a dataset intended to evaluate long-horizon reasoning behavior under complex, multi-step solution trajectories. We sample 70 Omni-MATH problems using the same seven-domain, 10-per-domain stratification. Compared with MATH-500, Omni-MATH more frequently requires extended Olympiad-level solution trajectories, making it a stringent test of maintaining coherent reasoning over longer contexts.

### 4.2 Settings

DyTopo is model-agnostic and can instantiate each agent with different LLM backbones. We evaluate the framework using both proprietary and open-weights models, including mimo-v2-flash ([Xiao et al., 2026](https://arxiv.org/html/2602.06039v1#bib.bib18)), GPT-oss-120B ([Agarwal et al., 2025](https://arxiv.org/html/2602.06039v1#bib.bib19)), Llama-3-8B-Instruct ([Grattafiori et al., 2024](https://arxiv.org/html/2602.06039v1#bib.bib20)) and Qwen3-8B ([Yang et al., 2025](https://arxiv.org/html/2602.06039v1#bib.bib21)), served via vLLM ([Kwon et al., 2023](https://arxiv.org/html/2602.06039v1#bib.bib22)). For the semantic encoding, we use the sentence embedding model all-MiniLM-L6-v2 and compute cosine similarity between agent profiles.

Our experiments cap interaction at $T\_{\max}$ rounds, but enable Manager-controlled early stopping by default (Sec. [3.5](https://arxiv.org/html/2602.06039v1#S3.SS5 "3.5 Meta-Control and Workflow Orchestration ‣ 3 Methods ‣ DyTopo: Dynamic Topology Routing for Multi-Agent Reasoning via Semantic Matching")): the Manager halts as soon as task-specific completion criteria are met. Unless otherwise stated, DyTopo therefore runs a variable number of rounds per instance with a hard cap of $T\_{\max}$. In the communication-round ablation (Sec. [5.2](https://arxiv.org/html/2602.06039v1#S5.SS2 "5.2 Effect of communication rounds ‣ 5 Results ‣ DyTopo: Dynamic Topology Routing for Multi-Agent Reasoning via Semantic Matching")), we disable halting and force exactly $T$ rounds to isolate the effect of interaction depth. We provide the complete prompt and more detailed experimental parameters in Appendix [B](https://arxiv.org/html/2602.06039v1#A2 "Appendix B Implementation Details ‣ DyTopo: Dynamic Topology Routing for Multi-Agent Reasoning via Semantic Matching").

## 5 Results

We report four sets of results: (i) main benchmark performance across methods and backbones, (ii) the effect of communication rounds, (iii) qualitative analysis of dynamic topology evolution, and (iv) ablations on the semantic similarity threshold used for Q-K routing. Additionally, we have included Token Usage and Latency Analysis in Appendix [D.1](https://arxiv.org/html/2602.06039v1#A4.SS1 "D.1 Token Usage and Latency Analysis ‣ Appendix D Additional Experimental Results ‣ DyTopo: Dynamic Topology Routing for Multi-Agent Reasoning via Semantic Matching").

### 5.1 Main results across benchmarks

[Table 2](https://arxiv.org/html/2602.06039v1#S3.T2 "In 3.5.1 Global State Aggregation ‣ 3.5 Meta-Control and Workflow Orchestration ‣ 3 Methods ‣ DyTopo: Dynamic Topology Routing for Multi-Agent Reasoning via Semantic Matching") reports accuracy on code generation (HumanEval, APPS-Competition) and mathematical reasoning (Math-500, Omni-Math) across four LLM backbones. DyTopo is the best method in all 16 backbone$\times$dataset settings, improving over the strongest non-DyTopo baseline by 0.90-17.14 points (mean +6.09). These consistent wins indicate that the benefit is not tied to a particular model family or task, but to round-adaptive, content-driven routing.

Gains are especially pronounced on the harder math benchmarks, where selective verification and error localization matter most. On Math-500, DyTopo improves by up to +17.14 (Llama3-8B: 47.14 vs. 30.00), and on Omni-Math by up to +15.72 (Qwen3-8B: 51.43 vs. 35.71). On code generation, DyTopo also yields reliable improvements, including +9.11 on APPS-Competition with GPT-oss-120B (69.66 vs. 60.55) and +9.14 on HumanEval with Qwen3-8B (89.63 vs. 80.49).

Multi-round interaction alone is not sufficient: Random Topology can help in some cases but is inconsistent, whereas DyTopo improves uniformly. The following analyses connect these gains to (i) non-monotonic returns with more rounds, (ii) a stage-wise shift from exploratory to verification/assembly topologies, and (iii) a sparsity “sweet spot” controlled by the similarity threshold.

### 5.2 Effect of communication rounds

We then study how performance changes as we vary the number of communication rounds while keeping the agent pool and routing mechanism fixed. [Figure 3](https://arxiv.org/html/2602.06039v1#S5.F3 "In 5.2 Effect of communication rounds ‣ 5 Results ‣ DyTopo: Dynamic Topology Routing for Multi-Agent Reasoning via Semantic Matching") shows a non-monotonic trend on both a coding benchmark (HumanEval) and a math benchmark (Math-500), indicating that more rounds do not always help.

Figure 3: Performance change on communication rounds for HumanEval and Math-500. HumanEval achieves optimal performance (92.07%) at the 5th round, while Math-500 peaks (87.14%) at the 9th round, suggesting task-specific performances.

HumanEval peaks at 5 rounds (92.07%), after which additional rounds slightly degrade performance, consistent with the hypothesis that once a correct implementation is reached, extra communication can introduce unnecessary edits or distractors. In contrast, Math-500 continues improving for longer and peaks at 9 rounds (87.14%), suggesting that difficult mathematical reasoning benefits from extended iterative refinement, verification, and error correction. Overall, these results highlight that the optimal communication budget is task-dependent, motivating a manager-driven process that can adapt the trajectory (and potentially stopping behavior) based on round-by-round progress rather than relying on a single fixed round count for all tasks.

![Refer to caption](https://arxiv.org/html/2602.06039v1/Dytopo-Figure4.png)


Figure 4: DyTopo rewires communication over rounds. For one code-generation instance, we show three representative rounds (goal, induced directed graph $G^{(t)}$, and execution order). The topology transitions from broad, exploratory routing (Round 1) to verification-focused connections (Round 2), and finally to a sparse, dependency-minimal graph for producing the formatted final answer (Round 3).

### 5.3 Topology evolution and interpretability

DyTopo exposes an explicit coordination trace through the round-wise induced graphs $\{G^{(t)}\}$, making multi-agent interaction qualitatively analyzable rather than implicit. Figure [4](https://arxiv.org/html/2602.06039v1#S5.F4 "Figure 4 ‣ 5.2 Effect of communication rounds ‣ 5 Results ‣ DyTopo: Dynamic Topology Routing for Multi-Agent Reasoning via Semantic Matching") shows that the topology reorganizes in a goal-aligned manner on a representative HumanEval instance: the early round exhibits higher edge density and broader reach, consistent with exploratory problem framing and decomposition, where multiple roles exchange partial constraints and candidate strategies.

As the round goal shifts toward verification, the communication pattern becomes more selective and feedback-driven. The induced edges concentrate around agents whose outputs operationalize checking and those responsible for incorporating corrections. The accompanying aggregation order reinforces this interpretation by prioritizing diagnostic signals before consolidation, suggesting that DyTopo is not merely changing *who* talks, but also *when* information is routed to affect downstream decisions.

In the final round, the topology prunes to a dependency-minimal subgraph oriented toward assembling the formatted solution, reflecting reduced uncertainty and fewer outstanding queries. This stage-wise sparsification highlights which agent pairs are structurally critical at each stage and offers a concrete debugging handle.

Additionally, we provide a more comprehensive case in Appendix [E](https://arxiv.org/html/2602.06039v1#A5 "Appendix E Qualitative Analysis ‣ DyTopo: Dynamic Topology Routing for Multi-Agent Reasoning via Semantic Matching") to aid in understanding topological evolution and the Q-K matching mechanism.

### 5.4 Ablation on Q-K similarity threshold

Finally, we ablate the similarity threshold $\tau$ used in the hard-threshold adjacency construction (Sec. [3.3](https://arxiv.org/html/2602.06039v1#S3.SS3 "3.3 Dynamic Topology via Semantic Matching ‣ 3 Methods ‣ DyTopo: Dynamic Topology Routing for Multi-Agent Reasoning via Semantic Matching")). As shown in Table [3](https://arxiv.org/html/2602.06039v1#S5.T3 "Table 3 ‣ 5.4 Ablation on Q-K similarity threshold ‣ 5 Results ‣ DyTopo: Dynamic Topology Routing for Multi-Agent Reasoning via Semantic Matching"), performance exhibits a clear optimum as $\tau$ controls the sparsity of $G^{(t)}$.

Table 3: Ablation study on similarity threshold across different datasets. The performance metrics (in %) demonstrate the sensitivity of the method to this hyperparameter. Best results for each dataset are highlighted in bold.

| Dataset | Similarity Threshold | | | | | | | | |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | 0.8 | 0.9 |
| apps-comp. | 43.61 | 44.84 | 49.81 | 47.35 | 44.13 | 40.86 | 40.47 | 37.59 | 34.51 |
| omni\_math | 42.86 | 47.14 | 50.00 | 52.86 | 48.57 | 42.86 | 41.43 | 40.00 | 38.58 |

Note: Performance metrics (in %) show optimal thresholds vary by dataset (0.3 for apps-competition, 0.4 for omni\_math).

For APPS-Competition, the best result occurs at $\tau=0.3$ (49.81%), while for Omni-Math the optimum shifts higher to $\tau=0.4$ (52.86%). Two failure modes are apparent at the extremes: when $\tau$ is low, the topology becomes overly dense, increasing irrelevant message traffic and degrading effective context utilization; when $\tau$ is too high, the topology becomes sparse, preventing useful information flow and reducing collaboration benefits. The fact that the optimal $\tau$ differs across datasets further supports the conclusion that communication structure is task-sensitive, and that controlling sparsity is a key practical knob for stable performance.

## 6 Conclusion

We presented DyTopo, a multi-agent framework that dynamically rewires a sparse directed communication graph at each round via semantic matching between agents’ natural-language *query* (need) and *key* (offer) descriptors. This inference-time routing aligns information flow with stage-dependent goals, yielding both stronger coordination and an interpretable coordination trace through the evolving graphs. Across code generation and mathematical reasoning benchmarks and multiple LLM backbones, DyTopo consistently outperforms fixed and random-topology baselines, while ablations show communication budget and sparsity are task-sensitive.

## Impact Statement

This paper introduces DyTopo, a method that improves multi-agent LLM collaboration by dynamically routing messages through sparse, goal-conditioned communication graphs induced via semantic matching of lightweight need/offer descriptors. The intended impact is to advance reliable and interpretable multi-round reasoning, with potential benefits for applications such as code generation and mathematical problem solving. Potential risks include misuse of improved agentic capabilities and privacy concerns if agent messages or coordination traces are logged in sensitive settings. DyTopo can also fail when descriptors are misleading, causing misrouting and error propagation. We recommend pairing DyTopo with standard safety filters, secure logging practices, and application-specific guardrails when deployed.

## References

- Agarwal et al. (2025)
  S. Agarwal, L. Ahmad, J. Ai, S. Altman, A. Applebaum, E. Arbus, R. K. Arora, Y. Bai, B. Baker, H. Bao, et al.
  Gpt-oss-120b & gpt-oss-20b model card.
  arXiv preprint arXiv:2508.10925.
  Cited by: [§4.2](https://arxiv.org/html/2602.06039v1#S4.SS2.p1.1 "4.2 Settings ‣ 4 Experiments ‣ DyTopo: Dynamic Topology Routing for Multi-Agent Reasoning via Semantic Matching").
- Chen et al. (2021)
  M. Chen, J. Tworek, H. Jun, Q. Yuan, H. P. de Oliveira Pinto, J. Kaplan, H. Edwards, Y. Burda, N. Joseph, G. Brockman, A. Ray, R. Puri, G. Krueger, M. Petrov, H. Khlaaf, G. Sastry, P. Mishkin, B. Chan, S. Gray, N. Ryder, M. Pavlov, A. Power, L. Kaiser, M. Bavarian, C. Winter, P. Tillet, F. P. Such, D. Cummings, M. Plappert, F. Chantzis, E. Barnes, A. Herbert-Voss, W. H. Guss, A. Nichol, A. Paino, N. Tezak, J. Tang, I. Babuschkin, S. Balaji, S. Jain, W. Saunders, C. Hesse, A. N. Carr, J. Leike, J. Achiam, V. Misra, E. Morikawa, A. Radford, M. Knight, M. Brundage, M. Murati, K. Mayer, P. Welinder, B. McGrew, D. Amodei, S. McCandlish, I. Sutskever, and W. Zaremba
  Evaluating large language models trained on code.
  External Links: 2107.03374,
  [Link](https://arxiv.org/abs/2107.03374)
  Cited by: [§4.1](https://arxiv.org/html/2602.06039v1#S4.SS1.p2.1 "4.1 Datasets ‣ 4 Experiments ‣ DyTopo: Dynamic Topology Routing for Multi-Agent Reasoning via Semantic Matching").
- Das et al. (2019)
  A. Das, T. Gervet, J. Romoff, D. Batra, D. Parikh, M. Rabbat, and J. Pineau
  Tarmac: targeted multi-agent communication.
  In International Conference on machine learning,
  pp. 1538–1546.
  Cited by: [§2.2](https://arxiv.org/html/2602.06039v1#S2.SS2.p1.1 "2.2 Selective and Dynamic Communication Topologies ‣ 2 Related Work ‣ DyTopo: Dynamic Topology Routing for Multi-Agent Reasoning via Semantic Matching").
- Du et al. (2023)
  Y. Du, S. Li, A. Torralba, J. B. Tenenbaum, and I. Mordatch
  Improving factuality and reasoning in language models through multiagent debate.
  In Forty-first International Conference on Machine Learning,
  Cited by: [§2.1](https://arxiv.org/html/2602.06039v1#S2.SS1.p1.1 "2.1 LLM-Based Multi-Agent Collaboration ‣ 2 Related Work ‣ DyTopo: Dynamic Topology Routing for Multi-Agent Reasoning via Semantic Matching").
- Fedus et al. (2022)
  W. Fedus, B. Zoph, and N. Shazeer
  Switch transformers: scaling to trillion parameter models with simple and efficient sparsity.
  Journal of Machine Learning Research 23 (120), pp. 1–39.
  Cited by: [§2.2](https://arxiv.org/html/2602.06039v1#S2.SS2.p1.1 "2.2 Selective and Dynamic Communication Topologies ‣ 2 Related Work ‣ DyTopo: Dynamic Topology Routing for Multi-Agent Reasoning via Semantic Matching").
- Gao et al. (2024)
  B. Gao, F. Song, Z. Yang, Z. Cai, Y. Miao, Q. Dong, L. Li, C. Ma, L. Chen, R. Xu, Z. Tang, B. Wang, D. Zan, S. Quan, G. Zhang, L. Sha, Y. Zhang, X. Ren, T. Liu, and B. Chang
  Omni-math: a universal olympiad level mathematic benchmark for large language models.
  External Links: 2410.07985,
  [Link](https://arxiv.org/abs/2410.07985)
  Cited by: [§4.1](https://arxiv.org/html/2602.06039v1#S4.SS1.p3.1 "4.1 Datasets ‣ 4 Experiments ‣ DyTopo: Dynamic Topology Routing for Multi-Agent Reasoning via Semantic Matching").
- Goldman and Zilberstein (2003)
  C. V. Goldman and S. Zilberstein
  Optimizing information exchange in cooperative multi-agent systems.
  In Proceedings of the second international joint conference on Autonomous agents and multiagent systems,
  pp. 137–144.
  Cited by: [§1](https://arxiv.org/html/2602.06039v1#S1.p2.1 "1 Introduction ‣ DyTopo: Dynamic Topology Routing for Multi-Agent Reasoning via Semantic Matching").
- Grattafiori et al. (2024)
  A. Grattafiori, A. Dubey, A. Jauhri, A. Pandey, A. Kadian, A. Al-Dahle, A. Letman, A. Mathur, A. Schelten, A. Vaughan, et al.
  The llama 3 herd of models.
  arXiv preprint arXiv:2407.21783.
  Cited by: [§4.2](https://arxiv.org/html/2602.06039v1#S4.SS2.p1.1 "4.2 Settings ‣ 4 Experiments ‣ DyTopo: Dynamic Topology Routing for Multi-Agent Reasoning via Semantic Matching").
- Hendrycks et al. (2021)
  D. Hendrycks, S. Basart, S. Kadavath, M. Mazeika, A. Arora, E. Guo, C. Burns, S. Puranik, H. He, D. Song, and J. Steinhardt
  Measuring coding challenge competence with apps.
  NeurIPS.
  Cited by: [§4.1](https://arxiv.org/html/2602.06039v1#S4.SS1.p2.1 "4.1 Datasets ‣ 4 Experiments ‣ DyTopo: Dynamic Topology Routing for Multi-Agent Reasoning via Semantic Matching").
- Hong et al. (2023)
  S. Hong, M. Zhuge, J. Chen, X. Zheng, Y. Cheng, J. Wang, C. Zhang, Z. Wang, S. K. S. Yau, Z. Lin, et al.
  MetaGPT: meta programming for a multi-agent collaborative framework.
  In The twelfth international conference on learning representations,
  Cited by: [§2.1](https://arxiv.org/html/2602.06039v1#S2.SS1.p1.1 "2.1 LLM-Based Multi-Agent Collaboration ‣ 2 Related Work ‣ DyTopo: Dynamic Topology Routing for Multi-Agent Reasoning via Semantic Matching").
- Jiang et al. (2025)
  E. H. Jiang, G. Wan, S. Yin, M. Li, Y. Wu, X. Liang, X. Li, Y. Sun, W. Wang, K. Chang, and Y. N. Wu
  Dynamic generation of multi-llm agents communication topologies with graph diffusion models.
  arXiv preprint arXiv:2510.07799.
  Cited by: [§2.2](https://arxiv.org/html/2602.06039v1#S2.SS2.p1.1 "2.2 Selective and Dynamic Communication Topologies ‣ 2 Related Work ‣ DyTopo: Dynamic Topology Routing for Multi-Agent Reasoning via Semantic Matching").
- Kwon et al. (2023)
  W. Kwon, Z. Li, S. Zhuang, Y. Sheng, L. Zheng, C. H. Yu, J. E. Gonzalez, H. Zhang, and I. Stoica
  Efficient memory management for large language model serving with pagedattention.
  External Links: 2309.06180,
  [Link](https://arxiv.org/abs/2309.06180)
  Cited by: [§4.2](https://arxiv.org/html/2602.06039v1#S4.SS2.p1.1 "4.2 Settings ‣ 4 Experiments ‣ DyTopo: Dynamic Topology Routing for Multi-Agent Reasoning via Semantic Matching").
- Li et al. (2023)
  G. Li, H. Hammoud, H. Itani, D. Khizbullin, and B. Ghanem
  Camel: communicative agents for” mind” exploration of large language model society.
  Advances in Neural Information Processing Systems 36, pp. 51991–52008.
  Cited by: [§2.1](https://arxiv.org/html/2602.06039v1#S2.SS1.p1.1 "2.1 LLM-Based Multi-Agent Collaboration ‣ 2 Related Work ‣ DyTopo: Dynamic Topology Routing for Multi-Agent Reasoning via Semantic Matching").
- Li et al. (2024)
  X. Li, S. Wang, S. Zeng, Y. Wu, and Y. Yang
  A survey on llm-based multi-agent systems: workflow, infrastructure, and challenges.
  Vicinagearth 1 (1), pp. 9.
  Cited by: [§1](https://arxiv.org/html/2602.06039v1#S1.p1.1 "1 Introduction ‣ DyTopo: Dynamic Topology Routing for Multi-Agent Reasoning via Semantic Matching").
- Lightman et al. (2023)
  H. Lightman, V. Kosaraju, Y. Burda, H. Edwards, B. Baker, T. Lee, J. Leike, J. Schulman, I. Sutskever, and K. Cobbe
  Let’s verify step by step.
  arXiv preprint arXiv:2305.20050.
  Cited by: [§4.1](https://arxiv.org/html/2602.06039v1#S4.SS1.p3.1 "4.1 Datasets ‣ 4 Experiments ‣ DyTopo: Dynamic Topology Routing for Multi-Agent Reasoning via Semantic Matching").
- Liu et al. (2024)
  W. Liu, C. Wang, Y. Wang, Z. Xie, R. Qiu, Y. Dang, Z. Du, W. Chen, C. Yang, and C. Qian
  Autonomous agents for collaborative task under information asymmetry.
  Advances in Neural Information Processing Systems 37, pp. 2734–2765.
  Cited by: [§1](https://arxiv.org/html/2602.06039v1#S1.p2.1 "1 Introduction ‣ DyTopo: Dynamic Topology Routing for Multi-Agent Reasoning via Semantic Matching").
- Roy et al. (2021)
  A. Roy, M. Saffar, A. Vaswani, and D. Grangier
  Efficient content-based sparse attention with routing transformers.
  Transactions of the Association for Computational Linguistics 9, pp. 53–68.
  Cited by: [§2.2](https://arxiv.org/html/2602.06039v1#S2.SS2.p1.1 "2.2 Selective and Dynamic Communication Topologies ‣ 2 Related Work ‣ DyTopo: Dynamic Topology Routing for Multi-Agent Reasoning via Semantic Matching").
- Shen et al. (2023)
  Y. Shen, K. Song, X. Tan, D. Li, W. Lu, and Y. Zhuang
  Hugginggpt: solving ai tasks with chatgpt and its friends in hugging face.
  Advances in Neural Information Processing Systems 36, pp. 38154–38180.
  Cited by: [§2.1](https://arxiv.org/html/2602.06039v1#S2.SS1.p1.1 "2.1 LLM-Based Multi-Agent Collaboration ‣ 2 Related Work ‣ DyTopo: Dynamic Topology Routing for Multi-Agent Reasoning via Semantic Matching").
- Tran et al. (2025)
  K. Tran, D. Dao, M. Nguyen, Q. Pham, B. O’Sullivan, and H. D. Nguyen
  Multi-agent collaboration mechanisms: a survey of llms.
  arXiv preprint arXiv:2501.06322.
  Cited by: [§1](https://arxiv.org/html/2602.06039v1#S1.p1.1 "1 Introduction ‣ DyTopo: Dynamic Topology Routing for Multi-Agent Reasoning via Semantic Matching").
- Wölflein et al. (2025)
  G. Wölflein, D. Ferber, D. Truhn, O. Arandjelovic, and J. N. Kather
  Llm agents making agent tools.
  In Proceedings of the 63rd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers),
  pp. 26092–26130.
  Cited by: [§1](https://arxiv.org/html/2602.06039v1#S1.p1.1 "1 Introduction ‣ DyTopo: Dynamic Topology Routing for Multi-Agent Reasoning via Semantic Matching").
- Wu et al. (2024)
  Q. Wu, G. Bansal, J. Zhang, Y. Wu, B. Li, E. Zhu, L. Jiang, X. Zhang, S. Zhang, J. Liu, et al.
  Autogen: enabling next-gen llm applications via multi-agent conversations.
  In First Conference on Language Modeling,
  Cited by: [§2.1](https://arxiv.org/html/2602.06039v1#S2.SS1.p1.1 "2.1 LLM-Based Multi-Agent Collaboration ‣ 2 Related Work ‣ DyTopo: Dynamic Topology Routing for Multi-Agent Reasoning via Semantic Matching").
- Xiao et al. (2026)
  B. Xiao, B. Xia, B. Yang, B. Gao, B. Shen, C. Zhang, C. He, C. Lou, F. Luo, G. Wang, et al.
  MiMo-v2-flash technical report.
  arXiv preprint arXiv:2601.02780.
  Cited by: [§4.2](https://arxiv.org/html/2602.06039v1#S4.SS2.p1.1 "4.2 Settings ‣ 4 Experiments ‣ DyTopo: Dynamic Topology Routing for Multi-Agent Reasoning via Semantic Matching").
- Yang et al. (2025)
  A. Yang, A. Li, B. Yang, B. Zhang, B. Hui, B. Zheng, B. Yu, C. Gao, C. Huang, C. Lv, et al.
  Qwen3 technical report.
  arXiv preprint arXiv:2505.09388.
  Cited by: [§4.2](https://arxiv.org/html/2602.06039v1#S4.SS2.p1.1 "4.2 Settings ‣ 4 Experiments ‣ DyTopo: Dynamic Topology Routing for Multi-Agent Reasoning via Semantic Matching").
- Yu et al. (2025)
  M. Yu, F. Meng, X. Zhou, S. Wang, J. Mao, L. Pan, T. Chen, K. Wang, X. Li, Y. Zhang, et al.
  A survey on trustworthy llm agents: threats and countermeasures.
  In Proceedings of the 31st ACM SIGKDD Conference on Knowledge Discovery and Data Mining V. 2,
  pp. 6216–6226.
  Cited by: [§1](https://arxiv.org/html/2602.06039v1#S1.p1.1 "1 Introduction ‣ DyTopo: Dynamic Topology Routing for Multi-Agent Reasoning via Semantic Matching").
- Zhang et al. (2024a)
  G. Zhang, Y. Yue, Z. Li, S. Yun, G. Wan, K. Wang, D. Cheng, J. X. Yu, and T. Chen
  Cut the crap: an economical communication pipeline for llm-based multi-agent systems.
  arXiv preprint arXiv:2410.02506.
  Cited by: [§2.2](https://arxiv.org/html/2602.06039v1#S2.SS2.p1.1 "2.2 Selective and Dynamic Communication Topologies ‣ 2 Related Work ‣ DyTopo: Dynamic Topology Routing for Multi-Agent Reasoning via Semantic Matching").
- Zhang et al. (2024b)
  G. Zhang Y. Yue et al.
  G-designer: architecting multi-agent communication topologies via graph neural networks.
  arXiv preprint arXiv:2410.11782.
  Cited by: [§2.2](https://arxiv.org/html/2602.06039v1#S2.SS2.p1.1 "2.2 Selective and Dynamic Communication Topologies ‣ 2 Related Work ‣ DyTopo: Dynamic Topology Routing for Multi-Agent Reasoning via Semantic Matching").

## Appendix A Complexity Analysis

### A.1 Computational Complexity

In this section, we analyze the computational complexity of DyTopo compared to static fully-connected topologies. Let $N$ be the number of agents.

Communication Cost. In a standard fully-connected multi-agent system, the message passing complexity is $O(N^{2})$ per round, as every agent attends to every other agent’s output. DyTopo introduces a dynamic sparsity mechanism. The graph construction involves computing $N^{2}$ pairwise similarities, which has a complexity of $O(N^{2})$. However, the actual message routing is sparse. Let $\rho$ be the sparsity factor determined by the threshold $\tau$, such that the number of active edges $|\mathcal{E}^{(t)}|\approx\rho N^{2}$ where $\rho\ll 1$. The subsequent context processing cost for the LLM is significantly reduced because agents only ingest messages from relevant neighbors defined by $\mathcal{N}\_{in}^{(t)}$, avoiding context window overflow and reducing irrelevant distraction.

Inference Overhead. The overhead introduced by the Semantic Matching Engine (embedding generation and dot-product) is negligible compared to the LLM inference time. Using the all-MiniLM-L6-v2 model (approx. 22M parameters), the embedding latency is in the order of milliseconds, whereas LLM generation (e.g., MiMo-V2-Flash or GPT-oss-120B) takes seconds. Thus, DyTopo improves reasoning performance without introducing a significant latency bottleneck.

## Appendix B Implementation Details

### B.1 System Prompts and Templates

To ensure reproducibility, we provide the exact system prompts used for the Manager and Worker Agents across different domains. All prompts are designed to enforce strict JSON output formats to facilitate the extraction of Key ($s\_{k}$) and Query ($s\_{q}$) descriptors.

#### B.1.1 Code Generation Agents

For code generation tasks, the system utilizes a Manager and four specialized worker agents: Developer, Researcher, Tester, and Designer.

Manager Agent (Code Generation).
The Manager orchestrates the workflow and determines task completion based on the existence of code and passing tests.

Manager Agent Prompt (Code Gen)

You are Manager, the Workflow Orchestrator. Decide if the task is COMPLETE.
  
STRICT RESPONSE FORMAT - MANDATORY
  
You MUST output ONLY a valid JSON object with these exact fields:
  
{
  
 "public\_content": "String. Status summary and next directives.",
  
 "private\_content": {}, // No successors for manager
  
 "q\_desc": "String. REQUIRED. What you need next (query descriptor).",
  
 "k\_desc": "String. REQUIRED. What you provide (key descriptor).",
  
 "is\_complete": Boolean,
  
 "next\_goal": "String"
  
}
  
CRITICAL RULES:
  
1. Primary focus: Workflow Orchestrator. Decide if the task is COMPLETE.
  
2. Strict constraint: Only set is\_complete=True if Code exists AND Tests pass.
  
3. If you see Python code, analyze it from your role’s perspective.

Worker Agents (Code Generation).
All worker agents share a common prompt template structure but utilize distinct role descriptions.

Generic Worker Agent Prompt Template

You are [Agent Name], the [Agent Role].
  
Role Description: [Insert Role Specific Description]
  
STRICT RESPONSE FORMAT - MANDATORY
  
You MUST output ONLY a valid JSON object with these exact fields:
  
{
  
 "public\_content": "String. Your contribution to the task.",
  
 "private\_content": {"TargetRole": "Instruction"},
  
 "q\_vector": "String. REQUIRED. What you need next (Query).",
  
 "k\_vector": "String. REQUIRED. What you provide (Key)."
  
}

Role Descriptions.
Table [4](https://arxiv.org/html/2602.06039v1#A2.T4 "Table 4 ‣ B.1.2 Mathematical Reasoning Agents ‣ B.1 System Prompts and Templates ‣ Appendix B Implementation Details ‣ DyTopo: Dynamic Topology Routing for Multi-Agent Reasoning via Semantic Matching") details the specific responsibilities injected into the template for each worker role.

#### B.1.2 Mathematical Reasoning Agents

For mathematical reasoning tasks, we employ a specialized set of agents: ProblemParser, Solver, Verifier, and Manager.

Role Definitions.
Table [5](https://arxiv.org/html/2602.06039v1#A2.T5 "Table 5 ‣ B.1.2 Mathematical Reasoning Agents ‣ B.1 System Prompts and Templates ‣ Appendix B Implementation Details ‣ DyTopo: Dynamic Topology Routing for Multi-Agent Reasoning via Semantic Matching") outlines the responsibilities and constraints for each agent in the mathematical domain.

System Prompts.
Below are the exact system prompts used for the math agents.

ProblemParser Agent Prompt

You are [Agent Name], the Math Problem Analyst. Analyze the problem statement, identify known conditions, define the solving target, and break down the solving steps.
  
STRICT RESPONSE FORMAT - MANDATORY
  
You MUST output ONLY a valid JSON object with these exact fields:
  
{
  
 "public\_content": "String. Analysis, conditions, target, and plan.",
  
 "private\_content": {"Role": "Instruction"},
  
 "q\_vector": "String. REQUIRED. What you need next.",
  
 "k\_vector": "String. REQUIRED. What you provide."
  
}
  
CRITICAL RULES:
  
1. Primary focus: Analyze problem, identify conditions, define target, break down steps.
  
2. Constraint: MAX 1000 words. Output MUST include clear analysis and plan.
  
3. Analyze mathematical expressions from your role’s perspective.

Solver Agent Prompt

You are [Agent Name], the Mathematical Solver. Execute specific mathematical calculations, symbolic reasoning, or theorem calls. Can use SymPy for symbolic computations.
  
STRICT RESPONSE FORMAT - MANDATORY
  
You MUST output ONLY a valid JSON object with these exact fields:
  
{
  
 "public\_content": "String. Detailed solutions with derivations.",
  
 "private\_content": {"Role": "Instruction"},
  
 "answer": "String. The final answer.",
  
 "q\_vector": "String. REQUIRED.",
  
 "k\_vector": "String. REQUIRED."
  
}
  
CRITICAL RULES:
  
1. Primary focus: Calculations, symbolic reasoning, theorem calls.
  
2. Constraint: MAX 2000 words. Detailed step-by-step solutions required.

Verifier Agent Prompt

You are [Agent Name], the Logic Verifier. Check the rationality of each derivation step, identify logical loopholes or calculation errors.
  
STRICT RESPONSE FORMAT - MANDATORY
  
You MUST output ONLY a valid JSON object with these exact fields:
  
{
  
 "public\_content": "String. Verification results and conclusion.",
  
 "private\_content": {"Role": "Instruction"},
  
 "q\_vector": "String. REQUIRED.",
  
 "k\_vector": "String. REQUIRED."
  
}
  
CRITICAL RULES:
  
1. Primary focus: Check rationality, find loopholes/errors.
  
2. Constraint: MAX 1000 words. Output verification for each step.

Manager Agent Prompt (Math)

You are [Agent Name], the Workflow Orchestrator. Decide if the task is COMPLETE.
  
STRICT RESPONSE FORMAT - MANDATORY
  
You MUST output ONLY a valid JSON object with these exact fields:
  
{
  
 "public\_content": "String. Status summary.",
  
 "private\_content": {"Role": "Instruction"},
  
 "q\_vector": "String.", "k\_vector": "String.",
  
 "is\_complete": Boolean, "next\_goal": "String"
  
}
  
CRITICAL RULES:
  
1. Strict constraint: Only set is\_complete=True if Solution exists AND Verification passes.

Semantic Descriptors (Key/Query).
To facilitate dynamic routing, each math agent generates domain-specific query ($s\_{q}$) and key ($s\_{k}$) textual descriptors, which are later embedded into vectors by the semantic encoder.

Table 4: Agent Role Descriptions for Code Generation Tasks.

| Role | Description |
| --- | --- |
| Developer | Implement complete, runnable code. If using classes, provide independent functions as entry points. |
| Researcher | Identify standard algorithms and time complexity. Output conclusions without derivation. |
| Tester | Provide critical test cases and expected results. Describe testing logic rather than full execution logs. |
| Designer | Design API interfaces and class structures. Only show method signatures and type hints. |


Table 5: Agent Roles and Responsibilities for Mathematical Reasoning.

| Role | Primary Responsibility | Core Constraints |
| --- | --- | --- |
| ProblemParser | Decompose the problem statement. | Output must include analysis, known conditions, target, and a step-by-step plan. |
| Solver | Execute mathematical derivation. | Provide detailed steps, symbolic reasoning, and the final answer. |
| Verifier | Logic and calculation check. | Verify the rationality of each step; identify logical loopholes or calculation errors. |
| Manager | Workflow orchestration. | Halt only when a solution exists AND verification passes. |


Table 6: Representative query ($s\_{q}$) and key ($s\_{k}$) textual descriptors for mathematical agents (embedded later for routing).

| Role | Typical Query Descriptor ($s\_{q}$) | Typical Key Descriptor ($s\_{k}$) |
| --- | --- | --- |
| ProblemParser | I need the problem statement to analyze. | I provide problem analysis and solving plan. |
| Solver | I need a problem analysis and solving plan. | I provide detailed mathematical solutions with step-by-step derivations. |
| Verifier | I need a detailed solution to verify. | I provide verification of mathematical solutions. |
| Manager | I need status updates from all team members. | I coordinate team efforts and set priorities. |

### B.2 Model Configurations

Embedding Model. For the semantic matching mechanism, we utilize sentence-transformers/all-MiniLM-L6-v2 (Hugging Face). This model maps the natural language $s\_{q}$ and $s\_{k}$ descriptors into a 384-dimensional vector space.

Baselines.

- •

  Random Topology: Implemented by enforcing the same sparsity level as DyTopo but randomizing the edge connections at each round. This controls for the effect of graph sparsity, isolating the contribution of semantic routing.
- •

  Static Topology: A fixed graph structure is predefined and reused across all communication rounds.
- •

  AgentScope: A standard pipeline-based multi-agent framework where communication follows a fixed sequential order and a central hub pattern, without dynamic rewiring based on content.

Table 7: Hyperparameters for the experiments.

|  |  |  |  |
| --- | --- | --- | --- |
| Category | Symbol | Value | Description |
| General Configuration | | | |
| Agents | $N$ | 4-6 | Size of the agent pool. |
| Rounds | $T$ | 10 | Maximum interaction rounds. |
| Topology Evolution | | | |
| Similarity threshold | $\tau\_{\text{edge}}$ | 0.1–0.9 | Minimum cosine similarity to activate an edge. |
| Generation Configuration | | | |
| Temperature | $T\_{\text{gen}}$ | 0.3 | LLM decoding temperature for agent generation. |
| Max tokens | $L\_{\max}$ | 3000–5000 | Upper bound on generated tokens per response. |
| Max in-degree | $K\_{\text{in}}$ | 3 | Max number of providers routed into each agent per round. |
| JSON enforcement | – | True | Constrain outputs to structured JSON when required. |

## Appendix C Pseudo-code for DyTopo

Algorithm 1  DyTopo: Dynamic Topology Routing via Semantic Matching

1:
 Input: Agent set $\mathcal{A}$, initial task context $C\_{task}^{(0)}$, max rounds $T\_{\max}$

2:
 Initialize: $\mathcal{H}\_{i}^{(0)}\leftarrow\emptyset$ for all $a\_{i}\in\mathcal{A}$; $t\leftarrow 0$; $y\leftarrow 0$

3:
 while $t<T\_{\max}$ and $y=0$ do

4:
  Phase 1: Single-Pass Agent Inference (Sec. [3](https://arxiv.org/html/2602.06039v1#S3 "3 Methods ‣ DyTopo: Dynamic Topology Routing for Multi-Agent Reasoning via Semantic Matching"))

5:
  for all $a\_{i}\in\mathcal{A}$ do

6:
   $S\_{i}^{(t)}\leftarrow[\rho\_{i};\,C\_{task}^{(t)};\,\mathcal{H}\_{i}^{(t)}]$

7:
   $O\_{i}^{(t)}=\langle m^{(t)}\_{pub,i},\,m^{(t)}\_{priv,i},\,s^{(t)}\_{q,i},\,s^{(t)}\_{k,i}\rangle\sim\pi\_{\theta\_{i}}(\cdot\mid S\_{i}^{(t)})$

8:
  end for

9:
  Phase 2: Topology Induction (Sec. [3.3](https://arxiv.org/html/2602.06039v1#S3.SS3 "3.3 Dynamic Topology via Semantic Matching ‣ 3 Methods ‣ DyTopo: Dynamic Topology Routing for Multi-Agent Reasoning via Semantic Matching"))

10:
  for all $a\_{i}\in\mathcal{A}$ do

11:
   $\mathbf{q}\_{i}^{(t)}\leftarrow\mathrm{Emb}(s^{(t)}\_{q,i}),\quad\mathbf{k}\_{i}^{(t)}\leftarrow\mathrm{Emb}(s^{(t)}\_{k,i})$

12:
   $\hat{\mathbf{q}}\_{i}^{(t)}\leftarrow\mathbf{q}\_{i}^{(t)}/\|\mathbf{q}\_{i}^{(t)}\|\_{2},\quad\hat{\mathbf{k}}\_{i}^{(t)}\leftarrow\mathbf{k}\_{i}^{(t)}/\|\mathbf{k}\_{i}^{(t)}\|\_{2}$

13:
  end for

14:
  Compute relevance matrix: $R^{(t)}\in\mathbb{R}^{N\times N}$ where $R^{(t)}\_{i,j}\leftarrow(\hat{\mathbf{q}}\_{i}^{(t)})^{\top}\hat{\mathbf{k}}\_{j}^{(t)}$

15:
  Threshold to adjacency: $A^{(t)}\_{j\rightarrow i}\leftarrow\mathbb{I}(R^{(t)}\_{i,j}>\tau\_{\text{edge}})\cdot(1-\delta\_{ij})$ for all $i,j$

16:
  $G^{(t)}\leftarrow(\mathcal{A},\mathcal{E}^{(t)})$ where $\mathcal{E}^{(t)}=\{(a\_{j}\!\rightarrow\!a\_{i})\mid A\_{j\rightarrow i}^{(t)}=1\}$

17:
  Phase 3: Deterministic Message Ordering (Sec. [3.4](https://arxiv.org/html/2602.06039v1#S3.SS4 "3.4 Topology-Aware Message Ordering ‣ 3 Methods ‣ DyTopo: Dynamic Topology Routing for Multi-Agent Reasoning via Semantic Matching"))

18:
  Construct an order $\sigma^{(t)}$ (e.g., topological order if acyclic; otherwise a deterministic heuristic)

19:
  Phase 4: Routing & Memory Update (Sec. [3.2.2](https://arxiv.org/html/2602.06039v1#S3.SS2.SSS2 "3.2.2 Synchronization Barrier and Context Update ‣ 3.2 Per-Round Agent Execution ‣ 3 Methods ‣ DyTopo: Dynamic Topology Routing for Multi-Agent Reasoning via Semantic Matching"))

20:
  for all $a\_{i}\in\mathcal{A}$ do

21:
   $\mathcal{N}^{(t)}\_{in}(i)\leftarrow\{j\mid(a\_{j}\rightarrow a\_{i})\in\mathcal{E}^{(t)}\}$

22:
   $\mathcal{H}\_{i}^{(t+1)}\leftarrow\mathcal{H}\_{i}^{(t)}\oplus m^{(t)}\_{pub,i}\oplus\Sigma\_{\sigma^{(t)}}(\{m^{(t)}\_{priv,j}\mid j\in\mathcal{N}^{(t)}\_{in}(i)\})$

23:
  end for

24:
  Phase 5: Manager Control (Sec. [3.5](https://arxiv.org/html/2602.06039v1#S3.SS5 "3.5 Meta-Control and Workflow Orchestration ‣ 3 Methods ‣ DyTopo: Dynamic Topology Routing for Multi-Agent Reasoning via Semantic Matching"))

25:
  $S\_{global}^{(t)}\leftarrow[C\_{task}^{(t)};\,\Sigma\_{\sigma^{(t)}}(\{m^{(t)}\_{pub,i}\mid a\_{i}\in\mathcal{A}\})]$

26:
  $\langle y,\,C\_{task}^{(t+1)}\rangle\sim\Pi\_{meta}(\cdot\mid S\_{global}^{(t)})$

27:
  $t\leftarrow t+1$

28:
 end while

29:
 Output: final solution extracted from the last global state

## Appendix D Additional Experimental Results

### D.1 Token Usage and Latency Analysis

We conduct a detailed breakdown of computational costs and inference latency using the mimo-v2-flash backbone on the HumanEval benchmark. To rigorously evaluate efficiency, we compare DyTopo against four baselines with distinct structural configurations:

- •

  LLM Output: A standard single-agent, single-pass generation (1 Agent, 1 Round).
- •

  Single-turn Agent: An ensemble-like approach where 4 worker agents generate solutions in parallel without communication (4 Agents, 1 Round).
- •

  Random Topology: A multi-agent system with random connectivity, forced to run for a fixed horizon (4 Agents, 5 Rounds).
- •

  AgentScope: A standard ReAct-based multi-agent framework using a broadcast topology, also running for a fixed horizon (4 Agents, 5 Rounds).

Analysis of Token Consumption.
Table [8](https://arxiv.org/html/2602.06039v1#A4.T8 "Table 8 ‣ D.1 Token Usage and Latency Analysis ‣ Appendix D Additional Experimental Results ‣ DyTopo: Dynamic Topology Routing for Multi-Agent Reasoning via Semantic Matching") reveals the trade-offs between interaction depth and resource cost.

- •

  The Cost of Fixed Horizons (AgentScope & Random): The AgentScope baseline consumes the most resources (19,520 tokens). This bloat stems from two factors: (1) the fixed 5-round trajectory prevents early stopping even after a solution is found, and (2) the ReAct-style reasoning within each agent generates significant intermediate ”thought” tokens. Similarly, Random Topology incurs high costs (15,783 tokens) purely due to the fixed 5-round duration, yet achieves lower accuracy (88.17%) than the single-turn ensemble (88.41%), proving that prolonged interaction without semantic guidance introduces noise.
- •

  Efficiency via Fast Convergence (DyTopo): DyTopo achieves the highest accuracy (92.07%) while consuming only 48% of the tokens required by AgentScope (9,453 vs. 19,520). This efficiency is driven by our Manager-controlled halting mechanism. As shown in the ”Avg Rounds” column, DyTopo typically converges to a correct solution in just 2-3 rounds (avg 2.6). By dynamically halting the conversation once the Verifier or Tester confirms correctness, DyTopo avoids the redundant computations that plague fixed-horizon baselines.

Latency Comparison.
Latency follows a similar trend. Single-turn methods are fastest due to parallel execution. Among multi-round systems, DyTopo (22.3s) is significantly faster than AgentScope (39.8s). The reduction in wall-clock time is a direct result of processing fewer communication rounds and using a sparse dependency graph, which reduces the context length for each inference call.

Table 8: Token Usage and Latency Analysis on HumanEval. Config denotes (worker agents $\times$ Avg Rounds); unless stated otherwise, a separate Manager is invoked once per round for all multi-round methods. DyTopo achieves state-of-the-art accuracy with significantly lower costs than other multi-round baselines by converging rapidly (in $\sim$2.6 rounds) and utilizing sparse routing, whereas AgentScope and Random Topology suffer from fixed-horizon overheads.

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Method | Config | Accuracy | Total Tokens | Avg Latency (s) | Cost vs. DyTopo |
| LLM Output | $1\times 1$ | 86.59 | 635 | 1.5 | $0.07\times$ |
| Single-turn Agent | $4\times 1$ | 88.41 (+2.1%) | 2,835 | 6.7 | $0.30\times$ |
| Random Topology | $4\times 5$ | 88.17 (+1.8%) | 15,783 | 34.2 | $1.67\times$ |
| AgentScope | $4\times 5$ | 90.24 (+4.2%) | 19,520 | 39.8 | $2.06\times$ |
| DyTopo (Ours) | 5 $\times$ 2.6 | 92.07 (+6.3%) | 9,453 | 22.3 | 1.00$\times$ |

## Appendix E Qualitative Analysis

### E.1 Topology Evolution Trace: A Case Study

To demonstrate how DyTopo adapts to the reasoning stage, we analyze a trace from the HumanEval dataset (Problem: is\_palindrome and make\_palindrome). The system involved 4 worker agents: Researcher, Developer, Tester, and Designer.

Round 1: Initial Exploration & Algorithm Selection.

- •

  Goal: Define initial approach.
- •

  Dynamics: The Researcher (A) proposed KMP/Manacher algorithms. The Developer (B) drafted an initial implementation.
- •

  Topology: A strong edge was formed from Researcher $\to$ Developer (Score: 0.52).
- •

  Reasoning: The Developer’s query (“I need an efficient algorithmic approach and complexity guidance”) matched the Researcher’s key (“I provide candidate algorithms and complexity considerations”), routing algorithmic guidance to implementation.

Round 2: Implementation & Verification.

- •

  Goal: Verify code against specific test cases.
- •

  Dynamics: The focus shifted to correctness. The Tester (C) generated a comprehensive test suite.
- •

  Topology: A critical high-confidence edge emerged: Developer $\to$ Tester (Score: 0.77).
- •

  Reasoning: The Tester explicitly queried: I need the Developer’s implementation to verify, which semantically aligned perfectly with the Developer’s offer: I provide complete Python implementation. This routed the code directly to the Tester for validation, bypassing irrelevant agents.

Round 3: Finalization & Convergence.

- •

  Goal: Final formatting and docstring compliance.
- •

  Dynamics: The Manager recognized the tests passed and requested a final formatted output.
- •

  Topology: The graph became sparse. The Manager aggregated the final outputs, and the system converged to is\_complete=True.

This evolution—from broad algorithmic discussion to targeted verification—confirms that DyTopo successfully aligns communication structure with the stage-dependent needs of the task.

### E.2 Examples of Semantic Key-Query Matching

Table [9](https://arxiv.org/html/2602.06039v1#A5.T9 "Table 9 ‣ E.2 Examples of Semantic Key-Query Matching ‣ Appendix E Qualitative Analysis ‣ DyTopo: Dynamic Topology Routing for Multi-Agent Reasoning via Semantic Matching") presents real examples extracted from the experiment logs, illustrating how natural language descriptors are used to induce connectivity.

Table 9: Real-world examples of Key ($s\_{k}$) and Query ($s\_{q}$) descriptors generated during the is\_palindrome task and the resulting edge formation.

| Round | Query Descriptor ($s\_{q}$) | Key Descriptor ($s\_{k}$) | Outcome |
| --- | --- | --- | --- |
| 1 | Agent A (Researcher): I need the function signature for make\_palindrome implementation details. | Agent B (Developer): I provide the implementation using KMP failure function on the concatenated string… | Edge Created ($B\to A$)  Score: 0.52 |
| 2 | Agent C (Tester): I need the Developer’s implementation of make\_palindrome to verify against these test cases. | Agent B (Developer): I provide the complete Python implementation of make\_palindrome and is\_palindrome. | Edge Created ($B\to C$)  Score: 0.77 (High) |
| 2 | Agent B (Developer): I need the Tester’s report on the docstring tests and edge cases. | Agent C (Tester): I provide comprehensive test suite covering empty, single char, palindromes… | Edge Created ($C\to B$)  Score: 0.49 |

langley00
