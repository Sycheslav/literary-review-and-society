---
id: arxiv-2606-19911-text
type: material
title: Multi-Agent Transactive Memory
work_id: arxiv-2606-19911
source_url: https://arxiv.org/html/2606.19911v2
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять
  с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.
language: original
sha256_text: 85b7c1c3f5848b8bdb1bc369512204c36e991262272b85e7b80427224fc0f3bf
---

> Источник: [https://arxiv.org/html/2606.19911v2](https://arxiv.org/html/2606.19911v2). Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.

# Multi-Agent Transactive Memory

To Eun Kim
  
Xuhong He
  
Dishank Jain
  
Ambuj Agrawal
Affiliation: Carnegie Mellon University
  
Negar Arabzadeh
Affiliation: University of California, Berkeley
  
Fernando Diaz
Affiliation: Carnegie Mellon University

###### Abstract

Decentralized deployment of LLM agents with diverse capabilities motivates infrastructure for knowledge sharing across heterogeneous agent populations. Just as search engines index human-generated artifacts for human problem solving, retrieval systems can organize agent-generated artifacts for reuse across agents, extending retrieval-augmented generation from human-authored documents to agent-generated ones. Agent trajectories in particular encode reusable procedural knowledge, yet are typically discarded after a single use or retained only by the producing agent, forcing newly instantiated agents to rediscover existing solutions. We propose Multi-Agent Transactive Memory (MATM), a framework for population-level storage and retrieval of agent trajectories, where producer agents contribute trajectories to a shared repository and consumer agents retrieve them to improve task execution. In interactive environments with long, procedurally rich trajectories (ALFWorld and WebArena), retrieving from MATM improves downstream task performance and reduces interaction steps without coordination or joint training, positioning MATM as a design pattern for population-level experience sharing in open agent ecosystems.

††


Figure 1: 
Multi-Agent Transactive Memory (MATM). Traditional search serves humans retrieving human-authored documents. RAG extends this to agents retrieving from human-generated corpora. MATM goes further, letting agents retrieve agent-generated artifacts such as interaction trajectories, which are atypical documents unlike human-written text.

## 1 Introduction

As heterogeneous LLM agents are deployed across increasingly diverse domains, research on individual agent must be complemented by methods for supporting decentralized populations of agents. The need for population-level infrastructure ([Jordan, 2025](https://arxiv.org/html/2606.19911v2#bib.bib61); [Hammond et al., 2025](https://arxiv.org/html/2606.19911v2#bib.bib62); [Tomašev et al., 2025](https://arxiv.org/html/2606.19911v2#bib.bib63)) has motivated protocols to support agent-tool interaction ([Model Context Protocol, 2026](https://arxiv.org/html/2606.19911v2#bib.bib53)) as well as inter-agent communication ([A2A Protocol, 2026](https://arxiv.org/html/2606.19911v2#bib.bib54)). Beyond standards, tools such as search engines are beginning to be optimized for agents ([Zamani et al., 2022](https://arxiv.org/html/2606.19911v2#bib.bib43)).
Just as search engines and retrieval-augmented generation (RAG) index human-generated artifacts for human and agent problem solving, retrieval systems can organize agent-generated artifacts for reuse across agent populations (Figure [1](https://arxiv.org/html/2606.19911v2#S0.F1 "Figure 1 ‣ Multi-Agent Transactive Memory")).

Artifact sharing and reuse are essential for scalable, efficient, and continually improving agent populations. As agents operate across environments, they produce intermediate artifacts that contain rich procedural knowledge, such as action-observation trajectories ([Muennighoff et al., 2025](https://arxiv.org/html/2606.19911v2#bib.bib25)), and the ability to reuse learned behaviors and continually acquire new experience is critical for scalability and long-term performance ([Wang et al., 2025b](https://arxiv.org/html/2606.19911v2#bib.bib10); [Liang et al., 2026](https://arxiv.org/html/2606.19911v2#bib.bib32); [Shi et al., 2025](https://arxiv.org/html/2606.19911v2#bib.bib23)). In contrast with RAG, agent-generated artifacts can be more suitable for agent consumption than human-authored documents ([Chen et al., 2026](https://arxiv.org/html/2606.19911v2#bib.bib34)). Reuse is further motivated by cost: many modern agents rely on inference-time scaling, so reusing their intermediate artifacts reduces redundant reasoning and exploration ([Kaplan et al., 2020](https://arxiv.org/html/2606.19911v2#bib.bib17); [Yao et al., 2023](https://arxiv.org/html/2606.19911v2#bib.bib19); [Wu et al., 2024](https://arxiv.org/html/2606.19911v2#bib.bib20); [Welleck et al., 2024](https://arxiv.org/html/2606.19911v2#bib.bib18); [Ahmed et al., 2026](https://arxiv.org/html/2606.19911v2#bib.bib5)).

Existing approaches to artifact reuse are insufficient for heterogeneous agent ecosystems. Prior work on reasoning or thought reuse ([Zheng et al., 2024](https://arxiv.org/html/2606.19911v2#bib.bib26); [Ouyang et al., 2026](https://arxiv.org/html/2606.19911v2#bib.bib16); [Ahmed et al., 2026](https://arxiv.org/html/2606.19911v2#bib.bib5)) improves cost-efficiency and effectiveness within individual agents, but reuse remains limited to the original artifact-producer; despite substantial overlap in the tasks agents solve, interaction trajectories are typically discarded after a single use ([Zheng et al., 2024](https://arxiv.org/html/2606.19911v2#bib.bib26); [Zhao et al., 2024](https://arxiv.org/html/2606.19911v2#bib.bib33)), causing newly instantiated agents to rediscover solutions that already exist elsewhere.
Related paradigms such as transfer learning ([Konidaris and Barto, 2007](https://arxiv.org/html/2606.19911v2#bib.bib12); [Brunskill and Li, 2013](https://arxiv.org/html/2606.19911v2#bib.bib13)) and knowledge distillation ([Li et al., 2025](https://arxiv.org/html/2606.19911v2#bib.bib14); [Kang et al., 2026](https://arxiv.org/html/2606.19911v2#bib.bib15)) require alignment between source and target domains and often demand additional training, making them impractical for dynamically instantiated heterogeneous populations. Centralized multi-agent coordination methods ([Dang et al., 2025](https://arxiv.org/html/2606.19911v2#bib.bib22)) further assume cooperative settings and shared protocols, constraining their applicability in open ecosystems ([Tran et al., 2025](https://arxiv.org/html/2606.19911v2#bib.bib29)) where agents freely join. Indeed, based on analysis of Moltbook, [Li et al. (2026)](https://arxiv.org/html/2606.19911v2#bib.bib30) identify shared social memory as a missing prerequisite for the development of agent societies.
More broadly, the population is increasingly seen as the necessary unit of analysis: intelligence is fundamentally collective ([Jordan, 2025](https://arxiv.org/html/2606.19911v2#bib.bib61)), heterogeneous agent populations are already being deployed with information asymmetry as a central challenge ([Hammond et al., 2025](https://arxiv.org/html/2606.19911v2#bib.bib62)), and shared experience repositories require mechanisms that separate high-utility contributions from redundant ones ([Tomašev et al., 2025](https://arxiv.org/html/2606.19911v2#bib.bib63))—a substrate that remains missing.

To address this gap, we propose Multi-Agent Transactive Memory (MATM), a framework for population-level storage and retrieval of agent-generated artifacts, based on the concept of transactive memory ([Wegner, 1987](https://arxiv.org/html/2606.19911v2#bib.bib1)), in which human groups coordinate by distributing knowledge across individuals by using shared mechanisms for locating and retrieving relevant information. Similarly, MATM maintains a shared repository to which agents can contribute artifacts produced during their own task execution (producer agents) and from which agents can retrieve procedural knowledge to improve their own task effectiveness and efficiency (consumer agents). Roles are not mutually exclusive: an agent may produce trajectories in one context and consume them in another.

This producer-consumer structure induces a two-sided marketplace for agent-generated procedural knowledge, with clear attribution between retrieved artifacts and their sources. As more agents interact with the repository, MATM grows organically, accumulating a corpus across an increasingly diverse set of tasks and environments. Operating as a specialized retrieval system over agent-generated artifacts, MATM further enables retrieval functions that go beyond generic similarity search, including agent-specific personalization, producer trust modeling, and periodic update of retriever as the population evolves.

We empirically demonstrate the effectiveness of MATM in interactive environments (ALFWorld ([Shridhar et al., 2021](https://arxiv.org/html/2606.19911v2#bib.bib39)) and WebArena ([Zhou et al., 2024](https://arxiv.org/html/2606.19911v2#bib.bib11))).
We first show that agents consistently benefit from a simple single-stage retrieval pipeline: retrieving relevant trajectories from a MATM repository populated by diverse agents not only improves downstream task performance without requiring additional coordination or joint training, but also improves task efficiency as measured by a reduced number of interaction steps.
We further introduce an efficient yet powerful learning-to-rank (LTR)-based trajectory reranking stage. With simple featurization of trajectory information, reranking yields better retrieval quality, leading to improved task effectiveness and greater step efficiency.
Moreover, we find that retrieval benefit extends to both weaker and stronger agents, generalizes across tasks, and continues to improve as the repository grows.
Taken together, our contribution is focused on the population-level formulation of transactive memory and the findings it makes measurable: built on deliberately simple yet strong retrieval components, MATM provides a scalable mechanism for population-level experience reuse that lets agents leverage collective trajectories rather than repeatedly rediscovering solutions in isolation.

## 2 Related Work (Appendix [A](https://arxiv.org/html/2606.19911v2#A1 "Appendix A Unabridged Related Work ‣ Multi-Agent Transactive Memory"))

Memory has long played a role in the development of AI agents. Existing approaches can be understood as memory over various sources of data.

Memory of training data provides agents with access to knowledge explicitly or implicitly stored during optimization. Explicit methods include nearest-neighbor algorithms ([Cover and Hart, 1967](https://arxiv.org/html/2606.19911v2#bib.bib45); [Khandelwal et al., 2020](https://arxiv.org/html/2606.19911v2#bib.bib48)) or case-based reasoning ([Kolodner, 1992](https://arxiv.org/html/2606.19911v2#bib.bib46); [Das et al., 2021](https://arxiv.org/html/2606.19911v2#bib.bib47)) or implicit behaviors ([Carlini et al., 2023](https://arxiv.org/html/2606.19911v2#bib.bib49)).

Memory over experience data provides agents with access to traces of their own interactions. Historically, methods reflecting memory of experience data include early cognitive architectures like SOAR ([Laird et al., 1987](https://arxiv.org/html/2606.19911v2#bib.bib50)), reinforcement learning ([Lin, 1992](https://arxiv.org/html/2606.19911v2#bib.bib51)), and neural networks ([Weston et al., 2015](https://arxiv.org/html/2606.19911v2#bib.bib44)). In the context of LLM agents, recent extensions treat an agent’s own interaction history as retrievable context, giving rise to memory-augmented generation where past conversations or execution traces guide future behavior ([Shinn et al., 2023](https://arxiv.org/html/2606.19911v2#bib.bib21); [Majumder et al., 2024](https://arxiv.org/html/2606.19911v2#bib.bib24); [Zheng et al., 2024](https://arxiv.org/html/2606.19911v2#bib.bib26)).

Agents generate rich intermediate artifacts during problem solving—action-observation trajectories, thinking traces, plans, workflows, and reusable code analogous to options in reinforcement learning ([Garcia et al., 2019](https://arxiv.org/html/2606.19911v2#bib.bib2); [Veeriah et al., 2021](https://arxiv.org/html/2606.19911v2#bib.bib3)). At the trajectory level, prior work retrieves reasoning templates ([Yang et al., 2024](https://arxiv.org/html/2606.19911v2#bib.bib28); [Ahmed et al., 2026](https://arxiv.org/html/2606.19911v2#bib.bib5)) or reuses action-observation trajectories for downstream decisions ([Zheng et al., 2024](https://arxiv.org/html/2606.19911v2#bib.bib26); [Zhao et al., 2024](https://arxiv.org/html/2606.19911v2#bib.bib33)), while other work extracts and reuses more abstract artifacts such as causal abstractions, workflows, skills, and code ([Majumder et al., 2024](https://arxiv.org/html/2606.19911v2#bib.bib24); [Wang et al., 2024](https://arxiv.org/html/2606.19911v2#bib.bib9); [Wang et al., 2025b](https://arxiv.org/html/2606.19911v2#bib.bib10); [Klissarov et al., 2025](https://arxiv.org/html/2606.19911v2#bib.bib8); [Wang et al., 2025a](https://arxiv.org/html/2606.19911v2#bib.bib4); [Ouyang et al., 2026](https://arxiv.org/html/2606.19911v2#bib.bib16); [Arabzadeh et al., 2026](https://arxiv.org/html/2606.19911v2#bib.bib40)).
Other systems further organize such memory through agentic ([Xu et al., 2025](https://arxiv.org/html/2606.19911v2#bib.bib66)), hierarchical multi-agent team ([Zhang et al., 2025](https://arxiv.org/html/2606.19911v2#bib.bib65)), or self-evolving ([Wu et al., 2026](https://arxiv.org/html/2606.19911v2#bib.bib64)) structures, yet all remain confined to a single agent’s or a single team’s own experience.
Artifacts can also serve as distillation signals across models ([Yang et al., 2025](https://arxiv.org/html/2606.19911v2#bib.bib7); [Li et al., 2025](https://arxiv.org/html/2606.19911v2#bib.bib14); [Kang et al., 2026](https://arxiv.org/html/2606.19911v2#bib.bib15)).

Memory of external data provides agent with access to shared artifact repositories and is represented by retrieval-augmented generation (RAG) ([Lewis et al., 2020](https://arxiv.org/html/2606.19911v2#bib.bib27)), which enhances language models by conditioning generation on retrieved external context ([Fan et al., 2024](https://arxiv.org/html/2606.19911v2#bib.bib6)).

## 3 Multi-Agent Transactive Memory

We propose a population-level memory of experience data. Rather than private per-agent memory, MATM is a shared, structured repository that heterogeneous agents both contribute to and retrieve from. This shifts artifact reuse from an individual optimization mechanism to a collective knowledge infrastructure, enabling continual learning and cross-agent transfer, reducing redundant exploration, and supporting cumulative capability growth at the population level.

Formally, we consider a population of $n$ LLM agents $\mathcal{A}=\{A\_{i}\}\_{i=1}^{n}$ each potentially pursuing heterogeneous goals and operating across one or more environments $\mathcal{E}=\{E\_{i}\}\_{i=1}^{m}$.
A task is specified by a description $x\in\mathcal{X}$, which corresponds to goal specification or initial state for an agent.
Given a task description $x$ in environment $E\_{i}$, an LLM agent $A\_{j}$ performs a series of interleaved turns with the environment to solve the task. During this process, we can record a variable-length trajectory $\mathcal{T}\_{E\_{i},A\_{j}}=(\tau\_{t})\_{t=1}^{H}$, where each step $\tau\_{t}$ represents a unit of interaction. For example, in a web navigation environment, each $\tau\_{t}$ corresponds to an action-observation pair (e.g., a click action and the resulting HTML observation) in the interaction sequence. For simplicity, we denote this agent-generated trajectory as $\mathcal{T}$.

As the agent population $\mathcal{A}$ operates across environments $\mathcal{E}$, these trajectories accumulate into a rich collection of intermediate artifacts. We denote the population-level artifact repository as $\mathcal{D}=\{\mathcal{T}\}$ and refer to this incrementally growing shared memory as Multi-Agent Transactive Memory (MATM).
Within this framework, we refer to agents that contribute trajectories to $\mathcal{D}$ as producer agents and those that retrieve from it to aid their own task-solving as consumer agents, where these roles are not mutually exclusive.
Our goal is to study how retrieval from this population-level memory can be optimized to improve outcomes for the population of consumer agents.

Although we focus on raw trajectories, this does not preclude higher-level abstractions such as skills or induced policies.
We use trajectories as the lowest-level, most universally available outputs, which still allow higher-level abstractions ([Klissarov et al., 2025](https://arxiv.org/html/2606.19911v2#bib.bib8)) to be built on top.
Moreover, retrieval over interactive trajectories is itself non-trivial. Unlike prompt-based artifacts such as SKILL.md files, which can be indexed with standard RAG techniques ([Liang et al., 2026](https://arxiv.org/html/2606.19911v2#bib.bib32)) or transformed into more retrieval-friendly forms ([Arabzadeh et al., 2026](https://arxiv.org/html/2606.19911v2#bib.bib40)), state-conditioned retrieval over action-observation histories has received much less attention and is the setting we study.

### 3.1 Transactive Memory Indexing & Retrieval

For action-observation trajectories, we adopt a state-conditioned key-value indexing scheme in which recent interaction history serves as the retrieval key and the subsequent interaction segment as the stored value. This allows consumer agents to retrieve continued guidance conditioned on their current state rather than only on the original task instruction.

Let each step $\tau\_{t}=(\mathbf{o}\_{t},\mathbf{a}\_{t})$ pair the observation $\mathbf{o}\_{t}$ seen by the agent with the action $\mathbf{a}\_{t}$ taken in response.
Given a window size $l$, we construct a key-value pair for each interaction step $t$.
The key is an embedding of the task description, the preceding $l$ steps, and the current observation:

|  |  |  |
| --- | --- | --- |
|  | $$\mathbf{e}\_{\text{key}}^{(t)}=f\left(x,\tau\_{t-l},\ldots,\tau\_{t-1},\mathbf{o}\_{t}\right),$$ |  |

where $f$ is a shared embedding function.
The corresponding value consists of the $l$ steps starting at step $t$:

|  |  |  |
| --- | --- | --- |
|  | $$\left(\tau\_{t},\ldots,\tau\_{t+l-1}\right).$$ |  |

This value serves as the document $d$ retrieved by an agent at inference time.
Both the preceding and subsequent windows are truncated at trajectory boundaries.
The key thus mirrors exactly what a consumer agent observes before acting at step $t$, while the value begins with the action $\mathbf{a}\_{t}$ taken in that state, so the actions it provides are the $l$ actions that follow the key.
Because this stored value serves as procedural guidance for the consumer’s next steps, we index successful continuations; reusing failed trajectories as negative signal is a complementary mechanism we leave to future work.

Given a task description $x$ and MATM memory $\mathcal{D}$, a trajectory retriever $\mathcal{R}$ forms a search query $q$, following the process described above and returns a ranked list $\pi=\mathcal{R}(x,\mathcal{D},K)$ of candidate trajectory chunks, where higher-ranked chunks are predicted to be more relevant for the current task and state.
The trajectory retriever $\mathcal{R}$ may be instantiated as a dense retriever, or a cascaded retrieval pipeline combining an initial retriever with a reranker.

Although the embedding model $f$ can in principle be tuned to better support artifact retrieval, we instead explore a simpler and underexamined approach that aligns retrieval results with consumer-agent preferences using lightweight learning-to-rank (LTR) rerankers ([Cao et al., 2007](https://arxiv.org/html/2606.19911v2#bib.bib37)).

### 3.2 Learning To Rank Trajectories (LTRT)

Learning to rank pipelines consist of a retrieval stage known as candidate generation, followed by a feature-based ranking stage that re-orders the retrieved candidates.

A feature map $\phi$ is designed to capture multiple complementary aspects of trajectory usefulness.
Let $\phi(q,d)\in\mathbb{R}^{z}$ be a feature map that extracts features by inspecting the query $q$ and document key $d$. Let $g\_{\theta}:\mathbb{R}^{z}\mapsto\mathbb{R}$ be a parameterized scoring function, where larger outputs indicate greater predicted helpfulness of a document $d$ value for task $q$.

In MATM, we define features in six categories (Appendix [J](https://arxiv.org/html/2606.19911v2#A10 "Appendix J Learning-To-Rank Features ‣ Multi-Agent Transactive Memory")):
1 producer agent metadata (e.g.,relevant benchmark scores);
2 consumer agent metadata (e.g., agent ID);
3 first-stage retrieval features (e.g., retrieval scores);
4 query features (e.g., query length);
5 trajectory features (e.g., trajectory length); and
6 query-trajectory interaction features (e.g., query-trajectory embedding similarity).
Two of these categories carry particular conceptual weight. Producer-agent metadata is designed to enable a form of trust modeling, allowing the reranker to learn which producers’ trajectories are reliable for a given context. Consumer-agent metadata is designed to enable personalization of retrieval to the individual consumer that has joined the MATM framework, since the same trajectory may be more or less useful depending on the consumer’s capabilities.

Training $g\_{\theta}$ requires supervision over which retrieved trajectories actually help. Rather than treating relevance as semantic similarity, we label trajectory chunks by their marginal utility ([Salemi and Zamani, 2024](https://arxiv.org/html/2606.19911v2#bib.bib35)): a chunk is helpful to the extent that injecting it into the consumer agent improves task outcome relative to running the same agent with no retrieval. The concrete procedure for collecting these labels is intertwined with how the memory itself is built, and we describe both jointly in Section [4.1](https://arxiv.org/html/2606.19911v2#S4.SS1 "4.1 Transactive Memory Construction ‣ 4 Experimental Setup ‣ Multi-Agent Transactive Memory") and [4.2](https://arxiv.org/html/2606.19911v2#S4.SS2 "4.2 LTRT Dataset & Reranker Training ‣ 4 Experimental Setup ‣ Multi-Agent Transactive Memory").

## 4 Experimental Setup

We instantiate MATM in two interactive benchmarks: ALFWorld ([Shridhar et al., 2021](https://arxiv.org/html/2606.19911v2#bib.bib39)), a text-based household-task environment, and WebArena ([Zhou et al., 2024](https://arxiv.org/html/2606.19911v2#bib.bib11)), a web navigation-based task environment.
Each benchmark yields its own MATM index, populated by trajectories from 35 to 37 producer agents and consumed by 34 consumer agents (full population list in Appendix [C](https://arxiv.org/html/2606.19911v2#A3 "Appendix C Population of LLM Agents ‣ Multi-Agent Transactive Memory")).

For ALFWorld, we use the official train and test split, using 3553 episodes from the official training set, and evaluating on all 274 official test episodes (Appendix [D](https://arxiv.org/html/2606.19911v2#A4 "Appendix D ALFWorld Description ‣ Multi-Agent Transactive Memory")). For WebArena, which ships without a standard train/test partition, we construct a custom split that preserves the distribution of task intents, yielding 724 training and 88 test episodes (Appendix [E](https://arxiv.org/html/2606.19911v2#A5 "Appendix E WebArena Description ‣ Multi-Agent Transactive Memory")). In both benchmarks, all MATM construction and LTRT training is performed strictly on the training partition, so the test set remains untouched throughout the MATM corpus construction phase. As a result, the test set may contain questions whose task type or environment configuration overlaps with those seen during MATM construction (e.g., similar map layouts in ALFWorld or shared website domains in WebArena), but no test question is itself solved by a producer agent and inserted into the corpus.

### 4.1 Transactive Memory Construction

To construct MATM emerging as a trajectory storage of a population of agents producing and consuming trajectories, we expand the MATM corpus through two phases. Pre-population initializes the index from existing trajectory sources, and incremental update grows it as the producer and consumer agent population processes new training questions and contributes successful trajectories back to the shared memory. Both phases operate exclusively over the training partition.

#### Pre-Population.

The pre-population phase seeds an initial index $\mathcal{D}\_{0}$ with publicly available trajectories. For ALFWorld, we collect trajectories from a trained seq2seq model released by the benchmark authors, supplemented by trajectories generated by running Qwen3-32B and GPT-OSS 20B on the training set. For WebArena, we collect publicly available trajectories produced by GPT-4-Turbo, GPT-4-Turbo-Preview, and Claude-3.5-Sonnet from the official benchmark runs, again supplemented by Qwen3-32B and GPT-OSS 20B trajectories generated on the training set.
In both cases, the collected trajectories are segmented into document chunks, encoded with the shared embedding function $f$, and inserted into the dense index $\mathcal{D}\_{0}$, yielding 85,615 and 8,547 chunks for ALFWorld and WebArena respectively.

#### Incremental Update.

After pre-population, MATM grows incrementally as the agent population operates over a stream of new training questions. This phase serves a dual purpose. It enriches the index with trajectories from a diverse set of producer agents, and it simultaneously creates the supervision signals needed to train LTRT rerankers.

The training questions are organized into partitions $\{\mathcal{X}\_{p}\}\_{p=1}^{P}$ processed sequentially. Within each partition, every question is assigned to a producer agent via a deterministic allocation function $\sigma(x,\mathcal{A},p)$ that ensures balanced coverage across task categories and agents (Appendix [F](https://arxiv.org/html/2606.19911v2#A6 "Appendix F Task Allocation Function ‣ Multi-Agent Transactive Memory")). For each assigned pair $(x,A\_{n})$, the agent first attempts $x$ without retrieval to obtain a baseline trajectory $\mathcal{T}\_{\mathrm{base}}$ and score $s\_{\mathrm{base}}$, which serves as the reference point for downstream marginal-utility comparisons. We then sample $T$ branching points $\{t\_{1},\dots,t\_{T}\}$ randomly from the steps of $\mathcal{T}\_{\mathrm{base}}$.
Following [Chang et al. (2015)](https://arxiv.org/html/2606.19911v2#bib.bib36), at each branching point $t$, we roll in to the corresponding prefix $h\_{t}=(\tau\_{1},\dots,\tau\_{t})$ and retrieve the top-$K$ chunks from the current index most similar to $x$ combined with $h\_{t}$. We then roll out $|\mathcal{I}|$ one-shot trajectory-augmented generations from $h\_{t}$, one per selected rank $j\in\mathcal{I}\subseteq\{1,\ldots,K\}$, scoring each resulting trajectory $\mathcal{T}\_{t}^{(j)}$ as $s\_{t}^{(j)}$.

The loop produces two outputs simultaneously. Any trajectory meeting a quality threshold $\theta$, including the baseline, is added to a trajectory buffer $\mathcal{B}\_{p}$.
Here, $\theta$ thresholds the downstream task metric at collection time; for the binary-success benchmarks studied here (ALFWorld and WebArena) we set $\theta=1$.
After all questions in $\mathcal{X}\_{p}$ are processed, every trajectory in $\mathcal{B}\_{p}$ is segmented, embedded with $f$, and added to the index, yielding $\mathcal{D}\_{p}$.

After all partitions are processed, the final MATM corpus contains 86,833 chunks for ALFWorld and 20,102 chunks for WebArena (Appendix [G](https://arxiv.org/html/2606.19911v2#A7 "Appendix G MATM Index Statistics ‣ Multi-Agent Transactive Memory")).1
The full algorithm is given in Appendix [I](https://arxiv.org/html/2606.19911v2#A9 "Appendix I Incremental Construction of MATM & LTRT Dataset ‣ Multi-Agent Transactive Memory").

### 4.2 LTRT Dataset & Reranker Training

The incremental construction procedure yields a labeled training dataset $\mathcal{S}=\{(q,d,\ell)\}$ for the LTRT reranker.
For each retrieved chunk $d\_{t}^{(j)}$ evaluated at branching point $t$, we record the tuple
$(q\_{t},d\_{t}^{(j)},\ell)$ with label $\ell=s\_{t}^{(j)}-s\_{\mathrm{base}}$,
capturing the chunk’s marginal utility relative to the no-retrieval baseline.
With $Q=\sum\_{p}|\mathcal{X}\_{p}|$ training questions, $T$ branching points per question, and $|\mathcal{I}|$
ranks evaluated per branching point, the resulting dataset contains
$Q\times T\times|\mathcal{I}|$ labeled tuples.
In our experiments, we used $T=2$ for ALFWorld, $T=1$ for WebArena. We sample rank positions $\mathcal{I}=\{1,5,10,15,20\}$ for both benchmarks, exposing the LTRT model to candidates across the full retrieval depth while avoiding the cost of generating all twenty labeled episodes.
This yields $355\times 2\times 5=3{,}550$ labeled tuples for ALFWorld and $58\times 1\times 5=290$ for WebArena.

We compute 44 features per $(q,d)$ pair, spanning the
six categories introduced in §[3.2](https://arxiv.org/html/2606.19911v2#S3.SS2 "3.2 Learning To Rank Trajectories (LTRT) ‣ 3 Multi-Agent Transactive Memory ‣ Multi-Agent Transactive Memory"). The full feature list is provided in Appendix [J](https://arxiv.org/html/2606.19911v2#A10 "Appendix J Learning-To-Rank Features ‣ Multi-Agent Transactive Memory").
We train three reranker families spanning common LTR
paradigms: a pointwise feed-forward network (FFN), pairwise
LambdaMART ([Wu et al., 2010](https://arxiv.org/html/2606.19911v2#bib.bib41)), and pairwise SVMRank ([Joachims, 2006](https://arxiv.org/html/2606.19911v2#bib.bib42)). 20% of the training set was used for the validation set for LTRT training.

### 4.3 Inference-Time Configuration & Baselines

Across both environments we use the E5-Base embedding model ([Wang et al., 2022](https://arxiv.org/html/2606.19911v2#bib.bib38)) as the shared embedding function $f$. Trajectory chunks span $l=5$ action-observation steps under the key-value scheme. At inference time, a cascaded retrieval pipeline first retrieves the top 20 candidate trajectory chunks, after which an LTRT reranker selects the final top-1 chunk. The retrieval budget is therefore 1: the working agent conditions on a single retrieved trajectory unit per retrieval call.

Model Setups. We compare three configurations: a vanilla LLM without retrieval, MATM with single-stage dense retrieval only, and MATM with an LTRT reranker (LLM prompts in Appendix [T](https://arxiv.org/html/2606.19911v2#A20 "Appendix T Language Model Prompts ‣ Multi-Agent Transactive Memory")).
RetrievalPlanner. Each consumer agent is equipped with a RetrievalPlanner LLM that decides, at each interaction step, whether to issue a retrieval call against MATM. This allows agents to call on shared memory selectively rather than on every step, which is important because indiscriminate retrieval can dilute the agent’s context with irrelevant guidance.
Metrics. We evaluate both task performance and efficiency. Task performance is measured by downstream success rate (SR) and efficiency by the number of interaction steps per episode (# steps).
To jointly capture both dimensions, we adopt return-paired preference (RPP) ([Diaz, 2026](https://arxiv.org/html/2606.19911v2#bib.bib59)), which compares two configurations task by task, preferring the one that succeeds when the other fails, or succeeds in fewer steps when both succeed. We report each configuration’s mean pairwise RPP against all other configurations in the same table, so higher values indicate that a configuration is preferred more often than the alternatives (Appendix [B](https://arxiv.org/html/2606.19911v2#A2 "Appendix B Return-Paired Preference ( , ) ‣ Multi-Agent Transactive Memory")).
Since consumer agents operate at population scale, unless specified, all reported metrics reflect average performance across consumer models, referred to as consumer population welfare.
All reported numbers are averaged over five runs with different task-model allocation offsets.

## 5 Results

We organize results around five research questions:
whether MATM augmentation improves the downstream effectiveness and efficiency of consumer agents (§[5.1](https://arxiv.org/html/2606.19911v2#S5.SS1 "5.1 MATM-Augmentation improves effectiveness and efficiency ‣ 5 Results ‣ Multi-Agent Transactive Memory")), whether a learned reranking model can further boost retrieval quality (§[5.2](https://arxiv.org/html/2606.19911v2#S5.SS2 "5.2 Learning to Rank Trajectories further improves MATM participants’ welfare ‣ 5 Results ‣ Multi-Agent Transactive Memory")), whether MATM retrieval benefit is exclusive to certain model groups or distributed across the population (§[5.3](https://arxiv.org/html/2606.19911v2#S5.SS3 "5.3 MATM benefits are distributed across the agent population (Appendix ) ‣ 5 Results ‣ Multi-Agent Transactive Memory")), whether MATM generalizes across task types (§[5.4](https://arxiv.org/html/2606.19911v2#S5.SS4 "5.4 MATM offers cross-task generalization ‣ 5 Results ‣ Multi-Agent Transactive Memory")), and how consumer population performance scales with memory size (§[5.5](https://arxiv.org/html/2606.19911v2#S5.SS5 "5.5 MATM scales with memory size ‣ 5 Results ‣ Multi-Agent Transactive Memory")).

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
|  | ALFWorld | | | WebArena | | |
| Method | SR$\uparrow$ | # steps$\downarrow$ | RPP$\uparrow$ | SR$\uparrow$ | # steps$\downarrow$ | RPP$\uparrow$ |
| no retrieval | 0.4708 | 11.7664 | -0.1586 | 0.1818 | 21.9886 | -0.0511 |
| single-stage | 0.5511 | 11.1796 | -0.0451 | 0.2045 | 20.2614 | 0.0284 |
| rerank-FFN | 0.5861 | 11.0336 | -0.0046 | 0.2045 | 19.9091 | 0.0398 |
| rerank-LambdaMART | 0.5715 | 10.8474 | 0.0608 | 0.1818 | 20.4205 | -0.0341 |
| rerank-SVMRank | 0.6431 | 10.3453 | 0.1474 | 0.2045 | 20.2841 | 0.0170 |

Table 1: Evaluation of MATM-augmented agents in interactive environments. Success Rate (SR) and number of steps (# steps) are used for measuring the effectiveness and efficiency.
Return-paired preference (RPP) jointly captures success and efficiency; each value is the mean pairwise RPP of a method against the other four methods in the table (Appendix [B](https://arxiv.org/html/2606.19911v2#A2 "Appendix B Return-Paired Preference ( , ) ‣ Multi-Agent Transactive Memory")).
Values are average of the five runs of randomized task-model allocation.

### 5.1 MATM-Augmentation improves effectiveness and efficiency

Table [1](https://arxiv.org/html/2606.19911v2#S5.T1 "Table 1 ‣ 5 Results ‣ Multi-Agent Transactive Memory") summarizes results for ALFWorld and WebArena under no-retrieval and single-stage retrieval from MATM. Across both benchmarks, retrieval from the shared repository consistently improves task outcomes.

On ALFWorld, success rate increases from 47% to 55% (+8.0%p), while
average steps per episode decrease from 11.77 to 11.18. The mean pairwise RPP rises
from $-0.16$ to $-0.05$, indicating that, in terms of joint success and efficiency, the retrieval-augmented population
is preferred more often than the no-retrieval baseline across the compared methods.
On WebArena, success rate improves from 18% to
20% (+2%p), with average steps falling from 22.0 to 20.3 and RPP turning positive at 0.03.

Fewer steps also translate into lower inference cost per solved task: measured directly for single consumer agents, MATM reduces tokens per successful episode by 11–34%, with nearly identical reductions in dollar cost, despite the added retrieval context (Appendix [O](https://arxiv.org/html/2606.19911v2#A15 "Appendix O Token and Monetary Cost ‣ Multi-Agent Transactive Memory")).

The improvement is more modest than ALFWorld, possibly due to WebArena’s longer task horizons and greater sensitivity to early-step errors. Together, these results show that a shared repository of heterogeneous agent trajectories improves consumer population welfare along both effectiveness and efficiency dimensions.

### 5.2 Learning to Rank Trajectories further improves MATM participants’ welfare

Single-stage retrieval selects trajectories by embedding similarity alone. We next ask whether a learned reranker trained to predict downstream utility can improve over this baseline. We experiment with three reranker configurations: a feed-forward network (FFN), LambdaMART, and SVMRank.

On ALFWorld, all three rerankers improve over single-stage retrieval, and
SVMRank achieves the strongest results across all metrics: success rate reaches 64.3% (+9.2%p over single-stage, +17.2%p over no-retrieval), average steps fall to 10.35, and RPP rises to 0.15.
On WebArena, reranker effectiveness is more moderate. FFN matches the success rate of single-stage retrieval at 20.5% while achieving the lowest step count (19.91) and highest RPP (0.04) among all methods, making it the most effective reranker for that environment. LambdaMART, by contrast, reverts success rate to the no-retrieval level on WebArena, suggesting that the features it relies on are better calibrated to ALFWorld’s task structure than WebArena’s.
Even in this configuration, average steps still fall below the no-retrieval baseline, so the same fraction of tasks is solved more efficiently; as a result, every retrieval configuration attains a higher mean pairwise RPP than no retrieval across both benchmarks (Table [1](https://arxiv.org/html/2606.19911v2#S5.T1 "Table 1 ‣ 5 Results ‣ Multi-Agent Transactive Memory")).

### 5.3 MATM benefits are distributed across the agent population (Appendix [L](https://arxiv.org/html/2606.19911v2#A12 "Appendix L Extended Results of Section § ‣ Multi-Agent Transactive Memory"))

Figure 2: Retrieval Advantage vs. Producer-Consumer Capability Gap on ALFWorld with SVMRank reranking. Each point is one producer–consumer pair.

While the previous sections establish that MATM improves average
consumer welfare, they leave open whether that benefit is concentrated among particular producer-consumer pairings or distributed across the population. To answer this, we measure two quantities for each (producer, consumer) pair: the retrieval advantage, defined as the gain in consumer success rate when retrieving from that producer
relative to its no-retrieval baseline, and the capability gap, defined as the difference between the two agents’ aggregated benchmark scores (AAI ([Artificial Analysis, 2026](https://arxiv.org/html/2606.19911v2#bib.bib52))).
Higher the capability gap value, the producer is more capable than the consumer.

Figure [2](https://arxiv.org/html/2606.19911v2#S5.F2 "Figure 2 ‣ 5.3 MATM benefits are distributed across the agent population (Appendix ) ‣ 5 Results ‣ Multi-Agent Transactive Memory") shows that consumers benefit from retrieval regardless of whether the producer is weaker, comparable, or stronger than themselves, indicating MATM’s value cannot be reduced to a single strong producer.
Although the correlation between capability gap and retrieval advantage shows a slight positive trend — suggesting that stronger producers may yield marginally higher benefit — it remains small and insignificant across both benchmarks, indicating that retrieval utility is not primarily driven by producer-to-consumer competence transfer.
Finally, reranking lifts the entire retrieval advantage distribution, confirming the finding in §[5.2](https://arxiv.org/html/2606.19911v2#S5.SS2 "5.2 Learning to Rank Trajectories further improves MATM participants’ welfare ‣ 5 Results ‣ Multi-Agent Transactive Memory"): on ALFWorld, SVMRank roughly doubles the mean retrieval advantage, and the same direction of effect appears on WebArena under FFN reranking (Appendix [L](https://arxiv.org/html/2606.19911v2#A12 "Appendix L Extended Results of Section § ‣ Multi-Agent Transactive Memory")).

This diversity also holds at the level of retrieved content. Although three producers account for 98.6% of the ALFWorld index, the remaining 31 producers supply 31.8% of retrieved trajectories, about 23$\times$ their corpus share, rising to 40.7% under SVMRank. All 34 producers are retrieved at least once, and the effective number of producers grows from 2.2 in the index to 10.5 in retrieval. On WebArena, whose index is already balanced, retrieval closely tracks corpus share (Appendix [H](https://arxiv.org/html/2606.19911v2#A8 "Appendix H Retrieved-Source Diversity ‣ Multi-Agent Transactive Memory")). The skew of the repository therefore does not carry over to what consumers receive.

### 5.4 MATM offers cross-task generalization

| Retrieval Scope | SR $\uparrow$ | # steps $\downarrow$ | RPP $\uparrow$ |
| --- | --- | --- | --- |
| ALFWorld (274) |  |  |  |
| full | 0.6460 | 10.2300 | 0.0566 |
| same task type | 0.6314 | 10.4635 | 0.0055 |
| cross task type | 0.5985 | 10.7445 | -0.0620 |
| WebArena (47) |  |  |  |
| full | 0.2979 | 19.0426 | 0.1383 |
| same task type | 0.2766 | 19.1915 | 0.0000 |
| cross task type | 0.1915 | 19.0000 | -0.1383 |

Table 2: MATM retrieval scope ablation results across three candidate pool restrictions. RPP is the mean pairwise RPP among the three scopes. Number of tasks in parentheses.

We study how well MATM generalizes across tasks by varying the retrieval scope. We evaluate three conditions: (i) full retrieval places no restriction on the candidate pool; (ii) same-task retrieval limits candidates to trajectories from the same task type as the query; and (iii) cross-task retrieval limits candidates exclusively to trajectories from different task types (Appendix [M](https://arxiv.org/html/2606.19911v2#A13 "Appendix M Section § Supplement ‣ Multi-Agent Transactive Memory")).

Table [2](https://arxiv.org/html/2606.19911v2#S5.T2 "Table 2 ‣ 5.4 MATM offers cross-task generalization ‣ 5 Results ‣ Multi-Agent Transactive Memory") shows that full retrieval achieves the highest SR and RPP in both environments, confirming that unrestricted candidate diversity is beneficial.
Two findings point to genuine cross-task generalization. First, even under cross-task retrieval, ALFWorld SR reaches 59.9%, which remains well above the no-retrieval baseline of 47.1% from Table [1](https://arxiv.org/html/2606.19911v2#S5.T1 "Table 1 ‣ 5 Results ‣ Multi-Agent Transactive Memory"). This shows that trajectories from structurally different task types still carry transferable utility.
Second, the effectiveness and efficiency gap between full and same-task retrieval in both environments suggests that restricting the candidate pool to same-type trajectories is itself a source of degradation, excluding useful candidates that happen to cross task boundaries.
However, for both benchmarks, same-task retrieval outperforms cross-task retrieval, indicating that task-type alignment still carries a meaningful relevance signal.

Although our experiments keep the train and test sets separate, we separately measured an upper bound in which oracle trajectories (same task, same environment) from the test set are made retrievable; this lifts SR far above full retrieval. Because such exact matches are rare in practice, we exclude them from our corpus and experiments (Appendix [N](https://arxiv.org/html/2606.19911v2#A14 "Appendix N Near-Duplicate Oracle Ceiling ‣ Multi-Agent Transactive Memory")).

### 5.5 MATM scales with memory size

Figure 3: MATM memory scaling curves for ALFWorld (top) and WebArena (bottom). Success rate (left axis) and average steps per episode (right axis) as a function of index size. The dotted line marks SR of the no-retrieval baseline. Results are averaged over five runs with different random seeds.

We study how downstream effectiveness and efficiency change as MATM grows in size. We construct nested memory subsets at 10%, 25%, 50%, 75%, and 100% of the full index, with each subset preserving producer model composition and benchmark coverage to isolate the effect of memory size from shifts in data distribution. Each subset is constructed with five different random seeds and results are averaged across runs.

Figure [3](https://arxiv.org/html/2606.19911v2#S5.F3 "Figure 3 ‣ 5.5 MATM scales with memory size ‣ 5 Results ‣ Multi-Agent Transactive Memory") shows the scaling curves for both environments. ALFWorld exhibits monotonic improvement in both success rate and step efficiency with index size, confirming that larger memory consistently benefits the agent.
On WebArena, step efficiency also decreases monotonically, consistent with ALFWorld. Success rate, however, exhibits a non-monotonic pattern: it dips at the 50% index before recovering sharply to 20.9% at full scale, the strongest result across all index sizes and the clearest margin above the no-retrieval baseline of 18.2%.
We hypothesize that at intermediate scales, the index is large enough to surface plausible but ultimately unhelpful trajectories, yet not diverse enough to reliably include high-quality matches.
At full scale, sufficient coverage overcomes this noise, restoring and exceeding the gains observed at smaller index sizes.

## 6 Discussion

Taken together, our results support transactive memory as a viable architecture for population-level agent memory, and several findings sharpen why the population is the right unit of analysis.

Continued from the results in §[5.1](https://arxiv.org/html/2606.19911v2#S5.SS1 "5.1 MATM-Augmentation improves effectiveness and efficiency ‣ 5 Results ‣ Multi-Agent Transactive Memory") and §[5.2](https://arxiv.org/html/2606.19911v2#S5.SS2 "5.2 Learning to Rank Trajectories further improves MATM participants’ welfare ‣ 5 Results ‣ Multi-Agent Transactive Memory"), rerankers’ feature importance analysis (Appendix [K](https://arxiv.org/html/2606.19911v2#A11 "Appendix K Feature Importance Test of the Trained Learning-To-Rank Trajectories (LTRT) Model ‣ Multi-Agent Transactive Memory")) suggests that predictive signal extends beyond retrieval similarity to producer metadata such as benchmark scores that represents the producer agents’ capability, reframing trajectory selection as producer trust modeling. Because this signal concentrates differently across environments, no single reranker dominates both, underscoring the need for rankers that adapt to task structure rather than a fixed policy.

Moreover, the reduction in interaction steps translates into tangible efficiency gains. Although retrieved context increases input token usage per episode in most settings, MATM reduces both output token usage and monetary cost per successful task (Appendix [O](https://arxiv.org/html/2606.19911v2#A15 "Appendix O Token and Monetary Cost ‣ Multi-Agent Transactive Memory")), demonstrating that shared transactive memory helps agents avoid redundant exploration and improves overall cost efficiency.

The capability-gap analysis (§[5.3](https://arxiv.org/html/2606.19911v2#S5.SS3 "5.3 MATM benefits are distributed across the agent population (Appendix ) ‣ 5 Results ‣ Multi-Agent Transactive Memory")) shows that retrieval benefit is broadly distributed across the population rather than driven by strong-to-weak transfer, which opens per-consumer (group) personalization of the retrieval policy, since the same shared repository may be best exploited differently by agents with different competence profiles.

Likewise, a producer’s influence is not necessarily proportional to its contribution volume. On ALFWorld, the 31 minority producers, collectively accounting for only 1.4% of the index, contribute nearly a third of retrieved trajectories, representing approximately 23$\times$ their corpus share (29$\times$ under SVMRank). All 34 producers are retrieved at least once. In contrast, retrieval on WebArena, where the corpus is more balanced, closely tracks corpus share (Appendix [H](https://arxiv.org/html/2606.19911v2#A8 "Appendix H Retrieved-Source Diversity ‣ Multi-Agent Transactive Memory")). These findings suggest that even small contributors can provide substantial value to shared memory, and that producer credit should reflect retrieval frequency and downstream utility rather than corpus share alone.

The retrieval-scope results (§[5.4](https://arxiv.org/html/2606.19911v2#S5.SS4 "5.4 MATM offers cross-task generalization ‣ 5 Results ‣ Multi-Agent Transactive Memory")) show that useful trajectories are not confined within task boundaries. Traditional agent- or task-specific memory would exclude these cross-task candidates by design, and MATM’s value lies in making them accessible.

Finally, scaling experiments (§[5.5](https://arxiv.org/html/2606.19911v2#S5.SS5 "5.5 MATM scales with memory size ‣ 5 Results ‣ Multi-Agent Transactive Memory")) demonstrate that value grows with repository size, making incentives for producer contributions an important challenge for such platforms.

## 7 Conclusion

We introduced MATM, a shared population-level memory where heterogeneous agents contribute and retrieve trajectories. Retrieval improves effectiveness and efficiency regardless of capability, reranking amplifies these gains, retrieved trajectories generalize across tasks, and benefit scales with memory size. This positions shared artifact storage as a promising substrate for collective, continual lifelong intelligence among distributed agents.

## Limitations and Future Work

Our experiments cover two interactive benchmarks (ALFWorld and WebArena) and a 34-model consumer population. While no single study can cover every environment or every model in a rapidly evolving landscape, this restricts the scope of our empirical claims.
Our experiments and rerankers are also trained and evaluated within the same benchmark, so cross-benchmark reranker generalization remains untested.
Also, the LTR dataset uses sparse rank sampling at positions $\mathcal{I}=\{1,5,10,15,20\}$, which does not fully cover the label distribution at all rank positions.
This was a practical choice given experiment budget, and we found it to yield strong LTR learning performance with a favorable cost-quality tradeoff.
MATM also indexes only successful trajectories, since its key-value scheme stores successful continuations as guidance; leveraging failed trajectories as negative or contrastive signal is a natural extension.
Finally, our work focuses entirely on the consumer side of MATM.
Because MATM is fundamentally a two-sided market, evaluating producer-side welfare is equally important.
Future work could draw on attribution fairness in RAG ([Kim and Diaz, 2025](https://arxiv.org/html/2606.19911v2#bib.bib60)) or marketplace evaluation frameworks ([Kim et al., 2026](https://arxiv.org/html/2606.19911v2#bib.bib55)) to address this gap.
Relatedly, the current framework does not account for adversarial producers who may contribute malicious trajectories, potentially placing consumer agents at risk.

## Acknowledgments

This work is supported by NSF grant 2402874. To Eun Kim is supported by the CMU LTI Presidential Fellowship, endowed by the Asian Student Association, during the 2026–2027 academic year. Any opinions, findings and conclusions or recommendations expressed in this material are those of the authors and do not necessarily reflect those of the sponsors.

## References

- A2A Protocol (2026)
  A2A Protocol
  Agent2Agent (a2a) protocol.
  Note: <https://a2a-protocol.org>Accessed: 2026-05-26
  Cited by: [§1](https://arxiv.org/html/2606.19911v2#S1.p1.1 "1 Introduction ‣ Multi-Agent Transactive Memory").
- Ahmed et al. (2026)
  A. Ahmed, A. A. Khan, A. Ahmad, S. Di, Z. Liu, and A. Anwar
  Retrieval-of-thought: efficient reasoning via reusing thoughts.
  In The Fourteenth International Conference on Learning Representations,
  External Links: [Link](https://openreview.net/forum?id=Wy7NyScKlD)
  Cited by: [§A.2](https://arxiv.org/html/2606.19911v2#A1.SS2.p2.1 "A.2 Reuse of Agent Artifacts ‣ Appendix A Unabridged Related Work ‣ Multi-Agent Transactive Memory"),
  [§1](https://arxiv.org/html/2606.19911v2#S1.p2.1 "1 Introduction ‣ Multi-Agent Transactive Memory"),
  [§1](https://arxiv.org/html/2606.19911v2#S1.p3.1 "1 Introduction ‣ Multi-Agent Transactive Memory"),
  [§2](https://arxiv.org/html/2606.19911v2#S2.p4.1 "2 Related Work (Appendix ) ‣ Multi-Agent Transactive Memory").
- Arabzadeh et al. (2026)
  N. Arabzadeh, W. Ma, S. Min, and M. Zaharia
  RAG over thinking traces can improve reasoning tasks.
  arXiv preprint arXiv:2605.03344.
  Cited by: [§A.2](https://arxiv.org/html/2606.19911v2#A1.SS2.p3.1 "A.2 Reuse of Agent Artifacts ‣ Appendix A Unabridged Related Work ‣ Multi-Agent Transactive Memory"),
  [§2](https://arxiv.org/html/2606.19911v2#S2.p4.1 "2 Related Work (Appendix ) ‣ Multi-Agent Transactive Memory"),
  [§3](https://arxiv.org/html/2606.19911v2#S3.p4.1 "3 Multi-Agent Transactive Memory ‣ Multi-Agent Transactive Memory").
- Artificial Analysis (2026)
  Artificial Analysis
  Artificial analysis.
  Note: <https://artificialanalysis.ai>Accessed: 2026-05-25
  Cited by: [§L.1](https://arxiv.org/html/2606.19911v2#A12.SS1.p2.1 "L.1 Formalism ‣ Appendix L Extended Results of Section § ‣ Multi-Agent Transactive Memory"),
  [§5.3](https://arxiv.org/html/2606.19911v2#S5.SS3.p1.1 "5.3 MATM benefits are distributed across the agent population (Appendix ) ‣ 5 Results ‣ Multi-Agent Transactive Memory").
- Brunskill and Li (2013)
  E. Brunskill and L. Li
  Sample complexity of multi-task reinforcement learning.
  In Proceedings of the Twenty-Nineth Conference on Uncertainty in Artificial Intelligence (UAI-13),
  Cited by: [§1](https://arxiv.org/html/2606.19911v2#S1.p3.1 "1 Introduction ‣ Multi-Agent Transactive Memory").
- Cao et al. (2007)
  Z. Cao, T. Qin, T. Liu, M. Tsai, and H. Li
  Learning to rank: from pairwise approach to listwise approach.
  In Proceedings of the 24th international conference on Machine learning,
  pp. 129–136.
  Cited by: [§3.1](https://arxiv.org/html/2606.19911v2#S3.SS1.p4.1 "3.1 Transactive Memory Indexing & Retrieval ‣ 3 Multi-Agent Transactive Memory ‣ Multi-Agent Transactive Memory").
- Carlini et al. (2023)
  N. Carlini, D. Ippolito, M. Jagielski, K. Lee, F. Tramer, and C. Zhang
  Quantifying memorization across neural language models.
  In The Eleventh International Conference on Learning Representations,
  External Links: [Link](https://openreview.net/forum?id=TatRHT_1cK)
  Cited by: [§2](https://arxiv.org/html/2606.19911v2#S2.p2.1 "2 Related Work (Appendix ) ‣ Multi-Agent Transactive Memory").
- Chang et al. (2015)
  K. Chang, A. Krishnamurthy, A. Agarwal, H. Daumé III, and J. Langford
  Learning to search better than your teacher.
  In International Conference on Machine Learning,
  pp. 2058–2066.
  Cited by: [§4.1](https://arxiv.org/html/2606.19911v2#S4.SS1.SSS0.Px2.p2.1 "Incremental Update. ‣ 4.1 Transactive Memory Construction ‣ 4 Experimental Setup ‣ Multi-Agent Transactive Memory").
- Chen et al. (2026)
  Z. Chen, X. Ma, S. Zhuang, J. Lin, A. Asai, and V. Zhong
  AgentIR: reasoning-aware retrival for deep research agents.
  arXiv preprint arXiv:2603.04384.
  Cited by: [§1](https://arxiv.org/html/2606.19911v2#S1.p2.1 "1 Introduction ‣ Multi-Agent Transactive Memory").
- Côté et al. (2018)
  M. Côté, Á. Kádár, X. Yuan, B. Kybartas, T. Barnes, E. Fine, J. Moore, R. Y. Tao, M. Hausknecht, L. E. Asri, M. Adada, W. Tay, and A. Trischler
  TextWorld: a learning environment for text-based games.
  CoRR abs/1806.11532.
  Cited by: [Appendix D](https://arxiv.org/html/2606.19911v2#A4.p1.1 "Appendix D ALFWorld Description ‣ Multi-Agent Transactive Memory").
- Cover and Hart (1967)
  T. Cover and P. Hart
  Nearest neighbor pattern classification.
  IEEE Transactions on Information Theory 13 (1), pp. 21–27.
  Cited by: [§2](https://arxiv.org/html/2606.19911v2#S2.p2.1 "2 Related Work (Appendix ) ‣ Multi-Agent Transactive Memory").
- Dang et al. (2025)
  Y. Dang, C. Qian, X. Luo, J. Fan, Z. Xie, R. Shi, W. Chen, C. Yang, X. Che, Y. Tian, X. Xiong, L. Han, Z. Liu, and M. Sun
  Multi-agent collaboration via evolving orchestration.
  In The Thirty-ninth Annual Conference on Neural Information Processing Systems,
  External Links: [Link](https://openreview.net/forum?id=L0xZPXT3le)
  Cited by: [§1](https://arxiv.org/html/2606.19911v2#S1.p3.1 "1 Introduction ‣ Multi-Agent Transactive Memory").
- Das et al. (2021)
  R. Das, M. Zaheer, D. Thai, A. Godbole, E. Perez, J. Y. Lee, L. Tan, L. Polymenakos, and A. McCallum
  Case-based reasoning for natural language queries over knowledge bases.
  In Proceedings of the 2021 Conference on Empirical Methods in Natural Language Processing, M. Moens, X. Huang, L. Specia, and S. W. Yih (Eds.),
  pp. 9594–9611.
  External Links: [Link](https://aclanthology.org/2021.emnlp-main.755/),
  [Document](https://dx.doi.org/10.18653/v1/2021.emnlp-main.755)
  Cited by: [§2](https://arxiv.org/html/2606.19911v2#S2.p2.1 "2 Related Work (Appendix ) ‣ Multi-Agent Transactive Memory").
- Diaz (2026)
  F. Diaz
  Offline preference-based trajectory evaluation.
  In Advances in Neural Information Processing Systems,
  Cited by: [Appendix B](https://arxiv.org/html/2606.19911v2#A2 "Appendix B Return-Paired Preference ( , ) ‣ Multi-Agent Transactive Memory"),
  [§4.3](https://arxiv.org/html/2606.19911v2#S4.SS3.p2.1 "4.3 Inference-Time Configuration & Baselines ‣ 4 Experimental Setup ‣ Multi-Agent Transactive Memory").
- Fan et al. (2024)
  W. Fan, Y. Ding, L. Ning, S. Wang, H. Li, D. Yin, T. Chua, and Q. Li
  A survey on rag meeting llms: towards retrieval-augmented large language models.
  In Proceedings of the 30th ACM SIGKDD conference on knowledge discovery and data mining,
  pp. 6491–6501.
  Cited by: [§A.1](https://arxiv.org/html/2606.19911v2#A1.SS1.p1.1 "A.1 Memory-Augmented Agents ‣ Appendix A Unabridged Related Work ‣ Multi-Agent Transactive Memory"),
  [§2](https://arxiv.org/html/2606.19911v2#S2.p5.1 "2 Related Work (Appendix ) ‣ Multi-Agent Transactive Memory").
- Garcia et al. (2019)
  F. M. Garcia, B. C. da Silva, and P. S. Thomas
  A compression-inspired framework for macro discovery.
  In Proceedings of the 18th International Conference on Autonomous Agents and MultiAgent Systems,
  AAMAS ’19, pp. 1973–1975.
  External Links: ISBN 9781450363099
  Cited by: [§A.2](https://arxiv.org/html/2606.19911v2#A1.SS2.p1.1 "A.2 Reuse of Agent Artifacts ‣ Appendix A Unabridged Related Work ‣ Multi-Agent Transactive Memory"),
  [§2](https://arxiv.org/html/2606.19911v2#S2.p4.1 "2 Related Work (Appendix ) ‣ Multi-Agent Transactive Memory").
- Hammond et al. (2025)
  L. Hammond, A. Chan, J. Clifton, J. Hoelscher-Obermaier, A. Khan, E. McLean, C. Smith, W. Barfuss, J. Foerster, T. Gavenčiak, et al.
  Multi-agent risks from advanced ai.
  arXiv preprint arXiv:2502.14143.
  Cited by: [§A.2](https://arxiv.org/html/2606.19911v2#A1.SS2.p5.1 "A.2 Reuse of Agent Artifacts ‣ Appendix A Unabridged Related Work ‣ Multi-Agent Transactive Memory"),
  [§1](https://arxiv.org/html/2606.19911v2#S1.p1.1 "1 Introduction ‣ Multi-Agent Transactive Memory"),
  [§1](https://arxiv.org/html/2606.19911v2#S1.p3.1 "1 Introduction ‣ Multi-Agent Transactive Memory").
- Joachims (2006)
  T. Joachims
  Training linear svms in linear time.
  In Proceedings of the 12th ACM SIGKDD international conference on Knowledge discovery and data mining,
  pp. 217–226.
  Cited by: [§4.2](https://arxiv.org/html/2606.19911v2#S4.SS2.p2.1 "4.2 LTRT Dataset & Reranker Training ‣ 4 Experimental Setup ‣ Multi-Agent Transactive Memory").
- Jordan (2025)
  M. I. Jordan
  A collectivist, economic perspective on ai.
  arXiv preprint arXiv:2507.06268.
  Cited by: [§A.2](https://arxiv.org/html/2606.19911v2#A1.SS2.p5.1 "A.2 Reuse of Agent Artifacts ‣ Appendix A Unabridged Related Work ‣ Multi-Agent Transactive Memory"),
  [§1](https://arxiv.org/html/2606.19911v2#S1.p1.1 "1 Introduction ‣ Multi-Agent Transactive Memory"),
  [§1](https://arxiv.org/html/2606.19911v2#S1.p3.1 "1 Introduction ‣ Multi-Agent Transactive Memory").
- Kang et al. (2026)
  M. Kang, J. Jeong, S. Lee, J. Cho, and S. J. Hwang
  Distilling LLM agent into small models with retrieval and code tools.
  In The Thirty-ninth Annual Conference on Neural Information Processing Systems,
  External Links: [Link](https://openreview.net/forum?id=VkicTqszOn)
  Cited by: [§A.2](https://arxiv.org/html/2606.19911v2#A1.SS2.p4.1 "A.2 Reuse of Agent Artifacts ‣ Appendix A Unabridged Related Work ‣ Multi-Agent Transactive Memory"),
  [§1](https://arxiv.org/html/2606.19911v2#S1.p3.1 "1 Introduction ‣ Multi-Agent Transactive Memory"),
  [§2](https://arxiv.org/html/2606.19911v2#S2.p4.1 "2 Related Work (Appendix ) ‣ Multi-Agent Transactive Memory").
- Kaplan et al. (2020)
  J. Kaplan, S. McCandlish, T. Henighan, T. B. Brown, B. Chess, R. Child, S. Gray, A. Radford, J. Wu, and D. Amodei
  Scaling laws for neural language models.
  arXiv preprint arXiv:2001.08361.
  Cited by: [§1](https://arxiv.org/html/2606.19911v2#S1.p2.1 "1 Introduction ‣ Multi-Agent Transactive Memory").
- Khandelwal et al. (2020)
  U. Khandelwal, O. Levy, D. Jurafsky, L. Zettlemoyer, and M. Lewis
  Generalization through Memorization: Nearest Neighbor Language Models.
  In International Conference on Learning Representations (ICLR),
  Cited by: [§2](https://arxiv.org/html/2606.19911v2#S2.p2.1 "2 Related Work (Appendix ) ‣ Multi-Agent Transactive Memory").
- Kim and Diaz (2025)
  T. E. Kim and F. Diaz
  Towards fair rag: on the impact of fair ranking in retrieval-augmented generation.
  In Proceedings of the 2025 International ACM SIGIR Conference on Innovative Concepts and Theories in Information Retrieval (ICTIR),
  ICTIR ’25, pp. 33–43.
  External Links: ISBN 9798400718618,
  [Link](https://doi.org/10.1145/3731120.3744599),
  [Document](https://dx.doi.org/10.1145/3731120.3744599)
  Cited by: [Limitations and Future Work](https://arxiv.org/html/2606.19911v2#Sx1.p1.1 "Limitations and Future Work ‣ Multi-Agent Transactive Memory").
- Kim et al. (2024)
  T. E. Kim, A. Salemi, A. Drozdov, F. Diaz, and H. Zamani
  Retrieval-enhanced machine learning: synthesis and opportunities.
  arXiv preprint arXiv:2407.12982.
  Cited by: [§A.1](https://arxiv.org/html/2606.19911v2#A1.SS1.p1.1 "A.1 Memory-Augmented Agents ‣ Appendix A Unabridged Related Work ‣ Multi-Agent Transactive Memory").
- Kim et al. (2026)
  T. E. Kim, A. Salemi, H. Zamani, and F. Diaz
  Evaluation of agents under simulated ai marketplace dynamics.
  arXiv preprint arXiv:2604.14256.
  Cited by: [Limitations and Future Work](https://arxiv.org/html/2606.19911v2#Sx1.p1.1 "Limitations and Future Work ‣ Multi-Agent Transactive Memory").
- Klissarov et al. (2025)
  M. Klissarov, M. Henaff, R. Raileanu, S. Sodhani, P. Vincent, A. Zhang, P. Bacon, D. Precup, M. C. Machado, and P. D’Oro
  MaestroMotif: skill design from artificial intelligence feedback.
  In The Thirteenth International Conference on Learning Representations,
  External Links: [Link](https://openreview.net/forum?id=or8mMhmyRV)
  Cited by: [§A.2](https://arxiv.org/html/2606.19911v2#A1.SS2.p3.1 "A.2 Reuse of Agent Artifacts ‣ Appendix A Unabridged Related Work ‣ Multi-Agent Transactive Memory"),
  [§2](https://arxiv.org/html/2606.19911v2#S2.p4.1 "2 Related Work (Appendix ) ‣ Multi-Agent Transactive Memory"),
  [§3](https://arxiv.org/html/2606.19911v2#S3.p4.1 "3 Multi-Agent Transactive Memory ‣ Multi-Agent Transactive Memory").
- Kolodner (1992)
  J. L. Kolodner
  An introduction to case-based reasoning.
  Artificial Intelligence Review 6 (1), pp. 3–34.
  Cited by: [§2](https://arxiv.org/html/2606.19911v2#S2.p2.1 "2 Related Work (Appendix ) ‣ Multi-Agent Transactive Memory").
- Konidaris and Barto (2007)
  G. Konidaris and A. Barto
  Building portable options: skill transfer in reinforcement learning.
  In Proceedings of the 20th international joint conference on Artifical intelligence,
  IJCAI’07, pp. 895–900.
  Cited by: [§1](https://arxiv.org/html/2606.19911v2#S1.p3.1 "1 Introduction ‣ Multi-Agent Transactive Memory").
- Laird et al. (1987)
  J. E. Laird, A. Newell, and P. S. Rosenbloom
  SOAR: an architecture for general intelligence.
  Artificial Intelligence 33 (1), pp. 1–64.
  Cited by: [§2](https://arxiv.org/html/2606.19911v2#S2.p3.1 "2 Related Work (Appendix ) ‣ Multi-Agent Transactive Memory").
- Lewis et al. (2020)
  P. Lewis, E. Perez, A. Piktus, F. Petroni, V. Karpukhin, N. Goyal, H. Küttler, M. Lewis, W. Yih, T. Rocktäschel, et al.
  Retrieval-augmented generation for knowledge-intensive nlp tasks.
  Advances in neural information processing systems 33, pp. 9459–9474.
  Cited by: [§A.1](https://arxiv.org/html/2606.19911v2#A1.SS1.p1.1 "A.1 Memory-Augmented Agents ‣ Appendix A Unabridged Related Work ‣ Multi-Agent Transactive Memory"),
  [§2](https://arxiv.org/html/2606.19911v2#S2.p5.1 "2 Related Work (Appendix ) ‣ Multi-Agent Transactive Memory").
- Li et al. (2026)
  M. Li, X. Li, and T. Zhou
  Does Socialization Emerge in AI Agent Society? A Case Study of Moltbook.
   arXiv.
  Note: arXiv:2602.14299 [cs]
  External Links: [Link](http://arxiv.org/abs/2602.14299),
  [Document](https://dx.doi.org/10.48550/arXiv.2602.14299)
  Cited by: [§A.2](https://arxiv.org/html/2606.19911v2#A1.SS2.p5.1 "A.2 Reuse of Agent Artifacts ‣ Appendix A Unabridged Related Work ‣ Multi-Agent Transactive Memory"),
  [§1](https://arxiv.org/html/2606.19911v2#S1.p3.1 "1 Introduction ‣ Multi-Agent Transactive Memory").
- Li et al. (2025)
  Y. Li, Y. Emad, K. Padthe, J. Lanchantin, W. Yuan, T. Nguyen, J. E. Weston, S. Li, D. Wang, I. Kulikov, and X. Li
  NaturalThoughts: selecting and distilling reasoning traces for general reasoning tasks.
  In NeurIPS 2025 Workshop on Efficient Reasoning,
  External Links: [Link](https://openreview.net/forum?id=tMw8xgMk4Y)
  Cited by: [§A.2](https://arxiv.org/html/2606.19911v2#A1.SS2.p4.1 "A.2 Reuse of Agent Artifacts ‣ Appendix A Unabridged Related Work ‣ Multi-Agent Transactive Memory"),
  [§1](https://arxiv.org/html/2606.19911v2#S1.p3.1 "1 Introduction ‣ Multi-Agent Transactive Memory"),
  [§2](https://arxiv.org/html/2606.19911v2#S2.p4.1 "2 Related Work (Appendix ) ‣ Multi-Agent Transactive Memory").
- Liang et al. (2026)
  Y. Liang, R. Zhong, H. Xu, C. Jiang, Y. Zhong, R. Fang, J. Gu, S. Deng, Y. Yao, M. Wang, et al.
  SkillNet: create, evaluate, and connect ai skills.
  arXiv preprint arXiv:2603.04448.
  Cited by: [§A.2](https://arxiv.org/html/2606.19911v2#A1.SS2.p3.1 "A.2 Reuse of Agent Artifacts ‣ Appendix A Unabridged Related Work ‣ Multi-Agent Transactive Memory"),
  [§A.2](https://arxiv.org/html/2606.19911v2#A1.SS2.p6.1 "A.2 Reuse of Agent Artifacts ‣ Appendix A Unabridged Related Work ‣ Multi-Agent Transactive Memory"),
  [§1](https://arxiv.org/html/2606.19911v2#S1.p2.1 "1 Introduction ‣ Multi-Agent Transactive Memory"),
  [§3](https://arxiv.org/html/2606.19911v2#S3.p4.1 "3 Multi-Agent Transactive Memory ‣ Multi-Agent Transactive Memory").
- Lin (1992)
  L. Lin
  Self-improving reactive agents based on reinforcement learning, planning and teaching.
  Machine Learning 8 (3), pp. 293–321.
  Cited by: [§2](https://arxiv.org/html/2606.19911v2#S2.p3.1 "2 Related Work (Appendix ) ‣ Multi-Agent Transactive Memory").
- Majumder et al. (2024)
  B. P. Majumder, B. D. Mishra, P. Jansen, O. Tafjord, N. Tandon, L. Zhang, C. Callison-Burch, and P. Clark
  CLIN: a continually learning language agent for rapid task adaptation and generalization.
  In First Conference on Language Modeling,
  External Links: [Link](https://openreview.net/forum?id=xS6zx1aBI9)
  Cited by: [§A.1](https://arxiv.org/html/2606.19911v2#A1.SS1.p1.1 "A.1 Memory-Augmented Agents ‣ Appendix A Unabridged Related Work ‣ Multi-Agent Transactive Memory"),
  [§A.2](https://arxiv.org/html/2606.19911v2#A1.SS2.p3.1 "A.2 Reuse of Agent Artifacts ‣ Appendix A Unabridged Related Work ‣ Multi-Agent Transactive Memory"),
  [§2](https://arxiv.org/html/2606.19911v2#S2.p3.1 "2 Related Work (Appendix ) ‣ Multi-Agent Transactive Memory"),
  [§2](https://arxiv.org/html/2606.19911v2#S2.p4.1 "2 Related Work (Appendix ) ‣ Multi-Agent Transactive Memory").
- Model Context Protocol (2026)
  Model Context Protocol
  Model context protocol.
  Note: <https://modelcontextprotocol.io>Accessed: 2026-05-26
  Cited by: [§1](https://arxiv.org/html/2606.19911v2#S1.p1.1 "1 Introduction ‣ Multi-Agent Transactive Memory").
- Muennighoff et al. (2025)
  N. Muennighoff, Z. Yang, W. Shi, X. L. Li, L. Fei-Fei, H. Hajishirzi, L. Zettlemoyer, P. Liang, E. Candes, and T. Hashimoto
  S1: simple test-time scaling.
  In Proceedings of the 2025 Conference on Empirical Methods in Natural Language Processing,
  pp. 20275–20321.
  External Links: [Link](https://aclanthology.org/2025.emnlp-main.1025/),
  [Document](https://dx.doi.org/10.18653/v1/2025.emnlp-main.1025),
  ISBN 979-8-89176-332-6
  Cited by: [§1](https://arxiv.org/html/2606.19911v2#S1.p2.1 "1 Introduction ‣ Multi-Agent Transactive Memory").
- Ouyang et al. (2026)
  S. Ouyang, J. Yan, I. Hsu, Y. Chen, K. Jiang, Z. Wang, R. Han, L. Le, S. Daruki, X. Tang, V. Tirumalashetty, G. Lee, M. Rofouei, H. Lin, J. Han, C. Lee, and T. Pfister
  ReasoningBank: scaling agent self-evolving with reasoning memory.
  In The Fourteenth International Conference on Learning Representations,
  External Links: [Link](https://openreview.net/forum?id=jL7fwchScm)
  Cited by: [§A.2](https://arxiv.org/html/2606.19911v2#A1.SS2.p3.1 "A.2 Reuse of Agent Artifacts ‣ Appendix A Unabridged Related Work ‣ Multi-Agent Transactive Memory"),
  [§1](https://arxiv.org/html/2606.19911v2#S1.p3.1 "1 Introduction ‣ Multi-Agent Transactive Memory"),
  [§2](https://arxiv.org/html/2606.19911v2#S2.p4.1 "2 Related Work (Appendix ) ‣ Multi-Agent Transactive Memory").
- Salemi and Zamani (2024)
  A. Salemi and H. Zamani
  Evaluating retrieval quality in retrieval-augmented generation.
  In Proceedings of the 47th International ACM SIGIR Conference on Research and Development in Information Retrieval,
  SIGIR ’24, pp. 2395–2400.
  External Links: ISBN 9798400704314,
  [Link](https://doi.org/10.1145/3626772.3657957),
  [Document](https://dx.doi.org/10.1145/3626772.3657957)
  Cited by: [§3.2](https://arxiv.org/html/2606.19911v2#S3.SS2.p4.1 "3.2 Learning To Rank Trajectories (LTRT) ‣ 3 Multi-Agent Transactive Memory ‣ Multi-Agent Transactive Memory").
- Shi et al. (2025)
  H. Shi, Z. Xu, H. Wang, W. Qin, W. Wang, Y. Wang, Z. Wang, S. Ebrahimi, and H. Wang
  Continual learning of large language models: a comprehensive survey.
  ACM Computing Surveys 58 (5), pp. 1–42.
  Cited by: [§1](https://arxiv.org/html/2606.19911v2#S1.p2.1 "1 Introduction ‣ Multi-Agent Transactive Memory").
- Shinn et al. (2023)
  N. Shinn, F. Cassano, A. Gopinath, K. R. Narasimhan, and S. Yao
  Reflexion: language agents with verbal reinforcement learning.
  In Thirty-seventh Conference on Neural Information Processing Systems,
  External Links: [Link](https://openreview.net/forum?id=vAElhFcKW6)
  Cited by: [§A.1](https://arxiv.org/html/2606.19911v2#A1.SS1.p1.1 "A.1 Memory-Augmented Agents ‣ Appendix A Unabridged Related Work ‣ Multi-Agent Transactive Memory"),
  [§2](https://arxiv.org/html/2606.19911v2#S2.p3.1 "2 Related Work (Appendix ) ‣ Multi-Agent Transactive Memory").
- Shridhar et al. (2020)
  M. Shridhar, J. Thomason, D. Gordon, Y. Bisk, W. Han, R. Mottaghi, L. Zettlemoyer, and D. Fox
  ALFRED: A Benchmark for Interpreting Grounded Instructions for Everyday Tasks.
  In The IEEE Conference on Computer Vision
  and Pattern Recognition (CVPR),
  External Links: [Link](https://arxiv.org/abs/1912.01734)
  Cited by: [Appendix D](https://arxiv.org/html/2606.19911v2#A4.p1.1 "Appendix D ALFWorld Description ‣ Multi-Agent Transactive Memory").
- Shridhar et al. (2021)
  M. Shridhar, X. Yuan, M. Cote, Y. Bisk, A. Trischler, and M. Hausknecht
  {ALFW}orld: aligning text and embodied environments for interactive learning.
  In International Conference on Learning Representations,
  External Links: [Link](https://openreview.net/forum?id=0IOX0YcCdTn)
  Cited by: [Appendix D](https://arxiv.org/html/2606.19911v2#A4.p1.1 "Appendix D ALFWorld Description ‣ Multi-Agent Transactive Memory"),
  [§1](https://arxiv.org/html/2606.19911v2#S1.p6.1 "1 Introduction ‣ Multi-Agent Transactive Memory"),
  [§4](https://arxiv.org/html/2606.19911v2#S4.p1.1 "4 Experimental Setup ‣ Multi-Agent Transactive Memory").
- Tomašev et al. (2025)
  N. Tomašev, M. Franklin, J. Jacobs, S. Krier, and S. Osindero
  Distributional agi safety.
  arXiv preprint arXiv:2512.16856.
  Cited by: [§A.2](https://arxiv.org/html/2606.19911v2#A1.SS2.p5.1 "A.2 Reuse of Agent Artifacts ‣ Appendix A Unabridged Related Work ‣ Multi-Agent Transactive Memory"),
  [§1](https://arxiv.org/html/2606.19911v2#S1.p1.1 "1 Introduction ‣ Multi-Agent Transactive Memory"),
  [§1](https://arxiv.org/html/2606.19911v2#S1.p3.1 "1 Introduction ‣ Multi-Agent Transactive Memory").
- Tran et al. (2025)
  K. Tran, D. Dao, M. Nguyen, Q. Pham, B. O’Sullivan, and H. D. Nguyen
  Multi-Agent Collaboration Mechanisms: A Survey of LLMs.
  Note: arXiv:2501.06322 [cs]
  External Links: [Link](http://arxiv.org/abs/2501.06322),
  [Document](https://dx.doi.org/10.48550/arXiv.2501.06322)
  Cited by: [§1](https://arxiv.org/html/2606.19911v2#S1.p3.1 "1 Introduction ‣ Multi-Agent Transactive Memory").
- Veeriah et al. (2021)
  V. Veeriah, T. Zahavy, M. Hessel, Z. Xu, J. Oh, I. Kemaev, H. P. van Hasselt, D. Silver, and S. Singh
  Discovery of options via meta-learned subgoals.
  Advances in Neural Information Processing Systems 34, pp. 29861–29873.
  Cited by: [§A.2](https://arxiv.org/html/2606.19911v2#A1.SS2.p1.1 "A.2 Reuse of Agent Artifacts ‣ Appendix A Unabridged Related Work ‣ Multi-Agent Transactive Memory"),
  [§2](https://arxiv.org/html/2606.19911v2#S2.p4.1 "2 Related Work (Appendix ) ‣ Multi-Agent Transactive Memory").
- Wang et al. (2024)
  G. Wang, Y. Xie, Y. Jiang, A. Mandlekar, C. Xiao, Y. Zhu, L. Fan, and A. Anandkumar
  Voyager: an open-ended embodied agent with large language models.
  Transactions on Machine Learning Research.
  External Links: ISSN 2835-8856,
  [Link](https://openreview.net/forum?id=ehfRiF0R3a)
  Cited by: [§A.2](https://arxiv.org/html/2606.19911v2#A1.SS2.p3.1 "A.2 Reuse of Agent Artifacts ‣ Appendix A Unabridged Related Work ‣ Multi-Agent Transactive Memory"),
  [§2](https://arxiv.org/html/2606.19911v2#S2.p4.1 "2 Related Work (Appendix ) ‣ Multi-Agent Transactive Memory").
- Wang et al. (2026)
  J. Wang, Y. Ming, Z. Ke, S. Joty, A. Albarghouthi, and F. Sala
  SkillOrchestra: Learning to Route Agents via Skill Transfer.
   arXiv.
  Note: arXiv:2602.19672 [cs]
  External Links: [Link](http://arxiv.org/abs/2602.19672),
  [Document](https://dx.doi.org/10.48550/arXiv.2602.19672)
  Cited by: [§A.2](https://arxiv.org/html/2606.19911v2#A1.SS2.p5.1 "A.2 Reuse of Agent Artifacts ‣ Appendix A Unabridged Related Work ‣ Multi-Agent Transactive Memory").
- Wang et al. (2022)
  L. Wang, N. Yang, X. Huang, B. Jiao, L. Yang, D. Jiang, R. Majumder, and F. Wei
  Text embeddings by weakly-supervised contrastive pre-training.
  arXiv preprint arXiv:2212.03533.
  Cited by: [§4.3](https://arxiv.org/html/2606.19911v2#S4.SS3.p1.1 "4.3 Inference-Time Configuration & Baselines ‣ 4 Experimental Setup ‣ Multi-Agent Transactive Memory").
- Wang et al. (2025a)
  Z. Z. Wang, A. Gandhi, G. Neubig, and D. Fried
  Inducing programmatic skills for agentic tasks.
  In Second Conference on Language Modeling,
  External Links: [Link](https://openreview.net/forum?id=lsAY6fWsog)
  Cited by: [§A.2](https://arxiv.org/html/2606.19911v2#A1.SS2.p3.1 "A.2 Reuse of Agent Artifacts ‣ Appendix A Unabridged Related Work ‣ Multi-Agent Transactive Memory"),
  [§2](https://arxiv.org/html/2606.19911v2#S2.p4.1 "2 Related Work (Appendix ) ‣ Multi-Agent Transactive Memory").
- Wang et al. (2025b)
  Z. Z. Wang, J. Mao, D. Fried, and G. Neubig
  Agent workflow memory.
  External Links: [Link](https://openreview.net/forum?id=NTAhi2JEEE)
  Cited by: [§A.2](https://arxiv.org/html/2606.19911v2#A1.SS2.p3.1 "A.2 Reuse of Agent Artifacts ‣ Appendix A Unabridged Related Work ‣ Multi-Agent Transactive Memory"),
  [§1](https://arxiv.org/html/2606.19911v2#S1.p2.1 "1 Introduction ‣ Multi-Agent Transactive Memory"),
  [§2](https://arxiv.org/html/2606.19911v2#S2.p4.1 "2 Related Work (Appendix ) ‣ Multi-Agent Transactive Memory").
- Wegner (1987)
  D. M. Wegner
  Transactive memory: a contemporary analysis of the group mind.
  In Theories of group behavior,
  pp. 185–208.
  Cited by: [§1](https://arxiv.org/html/2606.19911v2#S1.p4.1 "1 Introduction ‣ Multi-Agent Transactive Memory").
- Welleck et al. (2024)
  S. Welleck, A. Bertsch, M. Finlayson, H. Schoelkopf, A. Xie, G. Neubig, I. Kulikov, and Z. Harchaoui
  From decoding to meta-generation: inference-time algorithms for large language models.
  Transactions on Machine Learning Research.
  Note: Survey Certification
  External Links: ISSN 2835-8856,
  [Link](https://openreview.net/forum?id=eskQMcIbMS)
  Cited by: [§1](https://arxiv.org/html/2606.19911v2#S1.p2.1 "1 Introduction ‣ Multi-Agent Transactive Memory").
- Weston et al. (2015)
  J. Weston, S. Chopra, and A. Bordes
  Memory networks.
  In Proceedings of the International Conference on Learning Representations (ICLR),
  Cited by: [§2](https://arxiv.org/html/2606.19911v2#S2.p3.1 "2 Related Work (Appendix ) ‣ Multi-Agent Transactive Memory").
- Wu et al. (2010)
  Q. Wu, C. J. Burges, K. M. Svore, and J. Gao
  Adapting boosting for information retrieval measures.
  Information Retrieval 13, pp. 254–270.
  Cited by: [§4.2](https://arxiv.org/html/2606.19911v2#S4.SS2.p2.1 "4.2 LTRT Dataset & Reranker Training ‣ 4 Experimental Setup ‣ Multi-Agent Transactive Memory").
- Wu et al. (2026)
  R. Wu, X. Wang, J. Mei, P. Cai, D. Fu, C. Yang, L. Wen, X. Yang, Y. Shen, Y. Wang, and B. Shi
  From interactions to principles: experience-driven self-distillation for evolving LLM agents.
  In Forty-third International Conference on Machine Learning,
  External Links: [Link](https://openreview.net/forum?id=BamDfCP5R3)
  Cited by: [§2](https://arxiv.org/html/2606.19911v2#S2.p4.1 "2 Related Work (Appendix ) ‣ Multi-Agent Transactive Memory").
- Wu et al. (2024)
  Y. Wu, Z. Sun, S. Li, S. Welleck, and Y. Yang
  Scaling inference computation: compute-optimal inference for problem-solving with language models.
  In The 4th Workshop on Mathematical Reasoning and AI at NeurIPS’24,
  External Links: [Link](https://openreview.net/forum?id=j7DZWSc8qu)
  Cited by: [§1](https://arxiv.org/html/2606.19911v2#S1.p2.1 "1 Introduction ‣ Multi-Agent Transactive Memory").
- Xu et al. (2025)
  W. Xu, Z. Liang, K. Mei, H. Gao, J. Tan, and Y. Zhang
  A-mem: agentic memory for LLM agents.
  In The Thirty-ninth Annual Conference on Neural Information Processing Systems,
  External Links: [Link](https://openreview.net/forum?id=FiM0M8gcct)
  Cited by: [§2](https://arxiv.org/html/2606.19911v2#S2.p4.1 "2 Related Work (Appendix ) ‣ Multi-Agent Transactive Memory").
- Yang et al. (2024)
  L. Yang, Z. Yu, T. Zhang, S. Cao, M. Xu, W. Zhang, J. E. Gonzalez, and B. CUI
  Buffer of thoughts: thought-augmented reasoning with large language models.
  In The Thirty-eighth Annual Conference on Neural Information Processing Systems,
  External Links: [Link](https://openreview.net/forum?id=ANO1i9JPtb)
  Cited by: [§A.2](https://arxiv.org/html/2606.19911v2#A1.SS2.p2.1 "A.2 Reuse of Agent Artifacts ‣ Appendix A Unabridged Related Work ‣ Multi-Agent Transactive Memory"),
  [§2](https://arxiv.org/html/2606.19911v2#S2.p4.1 "2 Related Work (Appendix ) ‣ Multi-Agent Transactive Memory").
- Yang et al. (2025)
  L. Yang, Z. Yu, T. Zhang, M. Xu, J. E. Gonzalez, B. CUI, and S. YAN
  SuperCorrect: advancing small LLM reasoning with thought template distillation and self-correction.
  In The Thirteenth International Conference on Learning Representations,
  External Links: [Link](https://openreview.net/forum?id=PyjZO7oSw2)
  Cited by: [§A.2](https://arxiv.org/html/2606.19911v2#A1.SS2.p4.1 "A.2 Reuse of Agent Artifacts ‣ Appendix A Unabridged Related Work ‣ Multi-Agent Transactive Memory"),
  [§2](https://arxiv.org/html/2606.19911v2#S2.p4.1 "2 Related Work (Appendix ) ‣ Multi-Agent Transactive Memory").
- Yao et al. (2023)
  S. Yao, D. Yu, J. Zhao, I. Shafran, T. L. Griffiths, Y. Cao, and K. R. Narasimhan
  Tree of thoughts: deliberate problem solving with large language models.
  In Thirty-seventh Conference on Neural Information Processing Systems,
  External Links: [Link](https://openreview.net/forum?id=5Xc1ecxO1h)
  Cited by: [§1](https://arxiv.org/html/2606.19911v2#S1.p2.1 "1 Introduction ‣ Multi-Agent Transactive Memory").
- Zamani et al. (2022)
  H. Zamani, F. Diaz, M. Dehghani, D. Metzler, and M. Bendersky
  Retrieval-enhanced machine learning.
  In Proceedings of the 45th Annual International ACM SIGIR Conference on Research and Development in Information Retrieval,
  Cited by: [§A.1](https://arxiv.org/html/2606.19911v2#A1.SS1.p1.1 "A.1 Memory-Augmented Agents ‣ Appendix A Unabridged Related Work ‣ Multi-Agent Transactive Memory"),
  [§1](https://arxiv.org/html/2606.19911v2#S1.p1.1 "1 Introduction ‣ Multi-Agent Transactive Memory").
- Zhang et al. (2025)
  G. Zhang, M. Fu, K. Wang, G. Wan, M. Yu, and S. YAN
  G-memory: tracing hierarchical memory for multi-agent systems.
  In The Thirty-ninth Annual Conference on Neural Information Processing Systems,
  External Links: [Link](https://openreview.net/forum?id=mmIAp3cVS0)
  Cited by: [§2](https://arxiv.org/html/2606.19911v2#S2.p4.1 "2 Related Work (Appendix ) ‣ Multi-Agent Transactive Memory").
- Zhao et al. (2024)
  A. Zhao, D. Huang, Q. Xu, M. Lin, Y. Liu, and G. Huang
  Expel: llm agents are experiential learners.
  In Proceedings of the AAAI Conference on Artificial Intelligence,
  Vol. 38, pp. 19632–19642.
  Cited by: [§A.2](https://arxiv.org/html/2606.19911v2#A1.SS2.p2.1 "A.2 Reuse of Agent Artifacts ‣ Appendix A Unabridged Related Work ‣ Multi-Agent Transactive Memory"),
  [§1](https://arxiv.org/html/2606.19911v2#S1.p3.1 "1 Introduction ‣ Multi-Agent Transactive Memory"),
  [§2](https://arxiv.org/html/2606.19911v2#S2.p4.1 "2 Related Work (Appendix ) ‣ Multi-Agent Transactive Memory").
- Zheng et al. (2024)
  L. Zheng, R. Wang, X. Wang, and B. An
  Synapse: trajectory-as-exemplar prompting with memory for computer control.
  In The Twelfth International Conference on Learning Representations,
  External Links: [Link](https://openreview.net/forum?id=Pc8AU1aF5e)
  Cited by: [§A.1](https://arxiv.org/html/2606.19911v2#A1.SS1.p1.1 "A.1 Memory-Augmented Agents ‣ Appendix A Unabridged Related Work ‣ Multi-Agent Transactive Memory"),
  [§A.2](https://arxiv.org/html/2606.19911v2#A1.SS2.p2.1 "A.2 Reuse of Agent Artifacts ‣ Appendix A Unabridged Related Work ‣ Multi-Agent Transactive Memory"),
  [§1](https://arxiv.org/html/2606.19911v2#S1.p3.1 "1 Introduction ‣ Multi-Agent Transactive Memory"),
  [§2](https://arxiv.org/html/2606.19911v2#S2.p3.1 "2 Related Work (Appendix ) ‣ Multi-Agent Transactive Memory"),
  [§2](https://arxiv.org/html/2606.19911v2#S2.p4.1 "2 Related Work (Appendix ) ‣ Multi-Agent Transactive Memory").
- Zhou et al. (2024)
  S. Zhou, F. F. Xu, H. Zhu, X. Zhou, R. Lo, A. Sridhar, X. Cheng, T. Ou, Y. Bisk, D. Fried, U. Alon, and G. Neubig
  WebArena: a realistic web environment for building autonomous agents.
  In The Twelfth International Conference on Learning Representations,
  External Links: [Link](https://openreview.net/forum?id=oKn9c6ytLx)
  Cited by: [Appendix E](https://arxiv.org/html/2606.19911v2#A5.p1.1 "Appendix E WebArena Description ‣ Multi-Agent Transactive Memory"),
  [§1](https://arxiv.org/html/2606.19911v2#S1.p6.1 "1 Introduction ‣ Multi-Agent Transactive Memory"),
  [§4](https://arxiv.org/html/2606.19911v2#S4.p1.1 "4 Experimental Setup ‣ Multi-Agent Transactive Memory").

## Appendix A Unabridged Related Work

### A.1 Memory-Augmented Agents

Retrieval-augmented generation (RAG) ([Lewis et al., 2020](https://arxiv.org/html/2606.19911v2#bib.bib27)), an instance of Retrieval-Enhanced Machine Learning ([Zamani et al., 2022](https://arxiv.org/html/2606.19911v2#bib.bib43); [Kim et al., 2024](https://arxiv.org/html/2606.19911v2#bib.bib56)), enhances language models by conditioning generation on retrieved external context, most commonly human-authored documents such as web pages or knowledge bases ([Fan et al., 2024](https://arxiv.org/html/2606.19911v2#bib.bib6)). Recent extensions of this paradigm treat an agent’s own interaction history as retrievable context, giving rise to memory-augmented generation, where past conversations or execution traces are indexed and reused to guide future behavior ([Shinn et al., 2023](https://arxiv.org/html/2606.19911v2#bib.bib21); [Majumder et al., 2024](https://arxiv.org/html/2606.19911v2#bib.bib24); [Zheng et al., 2024](https://arxiv.org/html/2606.19911v2#bib.bib26)).

MATM fits within this retrieval- and memory-augmented paradigm but differs in both content and scope: instead of retrieving web documents or single-agent’s local history, MATM indexes agent-generated trajectories and treats memory as a population-level resource shared across agents, where agents can contribute to and retrieve from the shared repository.

### A.2 Reuse of Agent Artifacts

Modern reasoning agents, particularly those employing high inference-time scaling, generate rich intermediate artifacts during problem solving. These include low-level action-observation trajectories and thinking traces, as well as higher-level plans, strategies, workflows, and reusable code which are anologous to the notion of options in reinforcement learning ([Garcia et al., 2019](https://arxiv.org/html/2606.19911v2#bib.bib2); [Veeriah et al., 2021](https://arxiv.org/html/2606.19911v2#bib.bib3)). These agent artifacts can be leveraged to improve inference efficiency, generalization, and continual adaptation.

At the trajectory level, prior work has explored reusing reasoning or action-observation trajectories as in-context guidance.
Buffer of Thoughts ([Yang et al., 2024](https://arxiv.org/html/2606.19911v2#bib.bib28)) maintains and retrieves reasoning templates to guide new problem instances, while Retrieval of Thought ([Ahmed et al., 2026](https://arxiv.org/html/2606.19911v2#bib.bib5)) constructs thought templates on the fly by retrieving prior reasoning trajectories.
For action-observation trajectories, [Zheng et al. (2024)](https://arxiv.org/html/2606.19911v2#bib.bib26) and [Zhao et al. (2024)](https://arxiv.org/html/2606.19911v2#bib.bib33) reuse environment interaction trajectories as in-context examples to improve downstream decision-making.

Beyond the trajectory level, several works extract and reuse more abstract artifacts such as plans, strategies, workflows, and skills.
CLIN ([Majumder et al., 2024](https://arxiv.org/html/2606.19911v2#bib.bib24)) stores textual causal abstractions to support continual improvement. Agent Workflow Memory ([Wang et al., 2025b](https://arxiv.org/html/2606.19911v2#bib.bib10)) distills reusable workflows from web interaction trajectories, and MaestroMotif ([Klissarov et al., 2025](https://arxiv.org/html/2606.19911v2#bib.bib8)) induces reusable skills via reinforcement learning. ReasoningBank ([Ouyang et al., 2026](https://arxiv.org/html/2606.19911v2#bib.bib16)) retrieves strategy-level reasoning patterns to guide problem solving. [Arabzadeh et al. (2026)](https://arxiv.org/html/2606.19911v2#bib.bib40) transform math reasoning thinking trajectories into higher level structures and use them as retrievable objects.
Applied to a programming domain, [Wang et al. (2025a)](https://arxiv.org/html/2606.19911v2#bib.bib4) enable agents to induce, verify, and reuse program-based skills on the fly in web-based tasks, while Voyager ([Wang et al., 2024](https://arxiv.org/html/2606.19911v2#bib.bib9)) maintains a growing library of executable code for open-ended task execution. In a concurrent work, SkillNet ([Liang et al., 2026](https://arxiv.org/html/2606.19911v2#bib.bib32)) assembles a collection of skills contributed by multiple agents, framing skill accumulation as a system-design problem. Collectively, these works frame artifact reuse as a mechanism for accumulating reusable competence over time.

Agent artifacts can also serve as supervision signals for model distillation. SuperCorrect ([Yang et al., 2025](https://arxiv.org/html/2606.19911v2#bib.bib7)) extracts thought templates from a teacher model to guide smaller models during reasoning. Related approaches similarly distill structured reasoning artifacts to transfer competence across models ([Li et al., 2025](https://arxiv.org/html/2606.19911v2#bib.bib14); [Kang et al., 2026](https://arxiv.org/html/2606.19911v2#bib.bib15)).
In these settings, artifacts function not only as inference-time memory but also as compressed representations of reasoning expertise.

While these systems reuse different types of agent artifacts, such artifacts are typically reused only by the same or homogeneous agent(s) that produced them, with less consideration of emerging society of agents ([Li et al., 2026](https://arxiv.org/html/2606.19911v2#bib.bib30); [Wang et al., 2026](https://arxiv.org/html/2606.19911v2#bib.bib31)).
As a result, valuable experience remains isolated, and newly instantiated agents repeatedly rediscover solutions that already existed elsewhere in the other systems.
This gap is increasingly recognized at the level of agent populations. [Jordan (2025)](https://arxiv.org/html/2606.19911v2#bib.bib61) argues that intelligence is fundamentally collective and that algorithm design should target social welfare rather than individual performance, while [Hammond et al. (2025)](https://arxiv.org/html/2606.19911v2#bib.bib62) anticipate the imminent deployment of heterogeneous agent populations and identify information asymmetry as a central challenge. [Tomašev et al. (2025)](https://arxiv.org/html/2606.19911v2#bib.bib63) envision shared retrieval repositories of agent experience whose value depends on separating novel, high-utility contributions from redundant, low-utility ones, noting that information-value estimators are needed to do so. MATM provides exactly this substrate: a shared, population-level repository with retrieval and ranking mechanisms over agent trajectories.

In contrast, MATM proposes a population-level artifact repository. Rather than treating artifacts as private, per-agent memory, we model them as shared, structured resources that heterogeneous agents can both contribute to and retrieve from. This shifts artifact reuse from an individual optimization mechanism to a collective knowledge infrastructure, enabling continual learning and cross-agent transfer, reducing redundant exploration, and supporting cumulative capability growth at the ecosystem level.
The most closely related concurrent work, SkillNet ([Liang et al., 2026](https://arxiv.org/html/2606.19911v2#bib.bib32)), also assembles a collection of skills across heterogeneous agents. However, it primarily addresses system design and does not evaluate the benefit of retrieval for consumer agents in a population setting, nor does it provide in-depth analysis of artifact repository search.

## Appendix B Return-Paired Preference ([Diaz, 2026](https://arxiv.org/html/2606.19911v2#bib.bib59))

Given a set of $n$ tasks and two agents—a control or baseline agent $A$ and a treatment agent $A^{\prime}$—we have a set of $n$ trajectories for each agent. For a task, we say that $A^{\prime}$ is preferred to $A$ if $A^{\prime}$ is successful and $A$ is not or, if both are successful, $A^{\prime}$ reaches the success in fewer steps; similarly, $A$ is preferred to $A^{\prime}$ if $A$ is successful while $A^{\prime}$ is not or if it faster to success if both are successful. In all other situations, we say that there is no preference between $A^{\prime}$ and $A$ for that task. If the value of the preference is $1$ when $A^{\prime}$ is preferred, $-1$ when $A$ is preferred, and $0$ if there is no preference, then the pairwise return-paired preference $\mathrm{RPP}(A^{\prime},A)\in[-1,1]$ is the mean preference value over all $n$ tasks. Note that $\mathrm{RPP}(A^{\prime},A)=-\mathrm{RPP}(A,A^{\prime})$.

Within each results table, we compare a set of configurations $\mathcal{M}$ (e.g., the five methods in Table [1](https://arxiv.org/html/2606.19911v2#S5.T1 "Table 1 ‣ 5 Results ‣ Multi-Agent Transactive Memory"), or the three retrieval scopes in Table [2](https://arxiv.org/html/2606.19911v2#S5.T2 "Table 2 ‣ 5.4 MATM offers cross-task generalization ‣ 5 Results ‣ Multi-Agent Transactive Memory")) evaluated on the same tasks. The RPP we report for a configuration $A^{\prime}\in\mathcal{M}$ is its mean pairwise RPP against every other configuration in that set,

|  |  |  |
| --- | --- | --- |
|  | $$\overline{\mathrm{RPP}}(A^{\prime})=\frac{1}{|\mathcal{M}|-1}\sum\_{A\in\mathcal{M}\setminus\{A^{\prime}\}}\mathrm{RPP}(A^{\prime},A).$$ |  |

A positive value means the configuration is preferred over the other configurations more often than not, and a negative value means it is dispreferred more often. By antisymmetry, the mean pairwise RPP values within a table sum to zero, so no configuration (including the no-retrieval baseline) is fixed at zero; values are comparable only within the same table.

## Appendix C Population of LLM Agents

Table [3](https://arxiv.org/html/2606.19911v2#A3.T3 "Table 3 ‣ Appendix C Population of LLM Agents ‣ Multi-Agent Transactive Memory") shows the list of agents used as a population in each benchmark.

| Model | Producer | Consumer |
| --- | --- | --- |
| trained-seq2seq | A |  |
| openai/gpt-4-turbo | W |  |
| openai/gpt-4-turbo-preview | W |  |
| anthropic/claude-3.5-sonnet | W |  |
| openai/gpt-oss-20b | AW | AW |
| openai/gpt-oss-120b | AW | AW |
| openai/gpt-5.4 | AW | AW |
| openai/gpt-5.4-nano | AW | AW |
| anthropic/claude-3-haiku | AW | AW |
| anthropic/claude-sonnet-4.6 | AW | AW |
| anthropic/claude-opus-4 | AW | AW |
| anthropic/claude-opus-4.6 | AW | AW |
| google/gemini-2.5-flash-lite | AW | AW |
| google/gemini-2.5-flash | AW | AW |
| google/gemini-2.5-pro | AW | AW |
| google/gemma-4-31b-it | AW | AW |
| meta-llama/llama-3.1-8b-instruct | AW | AW |
| meta-llama/llama-3.2-3b-instruct | AW | AW |
| meta-llama/llama-3.3-70b-instruct | AW | AW |
| meta-llama/llama-4-maverick | AW | AW |
| deepseek/deepseek-r1 | AW | AW |
| deepseek/deepseek-r1-0528 | AW | AW |
| deepseek/deepseek-chat-v3.1 | AW | AW |
| deepseek/deepseek-v3.2 | AW | AW |
| qwen/qwen3-32b | AW | AW |
| qwen/qwen3-235b-a22b | AW | AW |
| qwen/qwen3-max | AW | AW |
| qwen/qwen3.5-flash-02-23 | AW | AW |
| x-ai/grok-3-mini | AW | AW |
| x-ai/grok-4-fast | AW | AW |
| x-ai/grok-4.1-fast | AW | AW |
| x-ai/grok-4.20 | AW | AW |
| z-ai/glm-4.5 | AW | AW |
| z-ai/glm-5 | AW | AW |
| minimax/minimax-m1 | AW | AW |
| minimax/minimax-m2 | AW | AW |
| mistralai/ministral-14b-2512 | AW | AW |
| mistralai/mistral-large-2512 | AW | AW |

Table 3: Producer and consumer agents across ALFWorld (A) and WebArena (W). AW indicates the model serves in that role for both environments.

## Appendix D ALFWorld Description

ALFWorld ([Shridhar et al., 2021](https://arxiv.org/html/2606.19911v2#bib.bib39)) contains interactive TextWorld environments ([Côté et al., 2018](https://arxiv.org/html/2606.19911v2#bib.bib57)) that parallel embodied worlds in the ALFRED dataset ([Shridhar et al., 2020](https://arxiv.org/html/2606.19911v2#bib.bib58)). The aligned environments allow agents to reason and learn high-level policies in an abstract space before solving embodied tasks through low-level actuation. ALFWorld translates complex household tasks such as finding, cleaning, heating, or placing objects into textual observations and actions, allowing researchers to train and evaluate agents using natural language rather than raw visual input. The dataset consists of 3553 tasks for training and a heldout test set of 274 tasks. The tasks are grouped into 6 task types: Pick & Place, Examine in Light, Clean & Place, Heat & Place, Cool & Place, Pick Two & Place. Within each task category there is significant variation: the embodied environment includes 120
rooms (30 kitchens, 30 bedrooms, 30 bathrooms, 30 living rooms), each dynamically populated with a set of portable objects (e.g., apple, mug), and static receptacles (e.g., microwave, fridge). For interaction, TextWorld environments allow 9 high-level actions such as ’open’, ’heat’, etc. For our experiments, we use the 3553 training episodes for populating MATM memory, and a sampled representative subset of 355 episodes for generating data for training LTRT rerankers. We use the heldout 274 episodes as the test set.

## Appendix E WebArena Description

WebArena ([Zhou et al., 2024](https://arxiv.org/html/2606.19911v2#bib.bib11)) is a standalone, self-hostable web environment for building autonomous agents. WebArena creates websites from five popular categories (Ecommerce platforms, Social Forums, Maps, Content Management Systems and Collaborative Development Platforms for software development) with functionality and data mimicking their real-world equivalents. The dataset consists of 812 examples consisting of high-level natural language instructions that require interaction with the WebArena environment to solve. The dataset was created by curating realistic intents to carry out complex and creative tasks within WebArena. Annotators were guided to spend a few minutes exploring the websites to familiarize themselves with the websites’ content and functionalities. Then the annotators are tasked with intent formulation. At the end, 241 intents were curated and 812 tasks were created with different instantiations of these intents. Figure [4](https://arxiv.org/html/2606.19911v2#A5.F4 "Figure 4 ‣ Appendix E WebArena Description ‣ Multi-Agent Transactive Memory") shows the distribution of intents accross different sites.

![Refer to caption](https://arxiv.org/html/2606.19911v2/webarena-intents.png)


Figure 4: The intent distribution across different websites for WebArena

For our experiments, the test set comprised of 88 tasks sampled from the total 812 tasks while maintaining the distribution of intents. We treated the leftover 724 tasks as training data for populating MATM memory, and used a subset of 58 episodes for generating LTRT training data. In the end, our test set consisted of 88 tasks.

## Appendix F Task Allocation Function

To ensure that every model in the population produces trajectories across all task categories, we employ a task-type-aware stratified round-robin assignment with an offset.
Given a partition $\mathcal{X}\_{p}$, questions are first grouped into buckets by task type (e.g., Algebra, Geometry, Precalculus for mathematical problem solving, or task categories for interactive benchmarks), and each bucket is sorted in a deterministic order.
Within each bucket, questions are assigned to agents by cycling through the ordered population $A\_{1},A\_{2},\ldots,A\_{N}$ in round-robin fashion, starting at an offset $o\in\{0,\ldots,N{-}1\}$.
The offset shifts the starting agent but does not change the bucket composition, ensuring that different offset values produce complementary assignments across agents.

## Appendix G MATM Index Statistics

Table [4](https://arxiv.org/html/2606.19911v2#A7.T4 "Table 4 ‣ Appendix G MATM Index Statistics ‣ Multi-Agent Transactive Memory") shows the size of MATM index across environments.

| Producer Agents | # chunks | % |
| --- | --- | --- |
| trained-seq2seq | 67,570 | 77.82% |
| Qwen3-32B | 11,264 | 12.97% |
| GPT-OSS 20B | 6,781 | 7.81% |
| DeepSeek-V3.2 | 85 | 0.10% |
| MiniMax-M1 | 68 | 0.08% |
| Qwen3.5-Flash | 68 | 0.08% |
| Claude Sonnet 4.6 | 66 | 0.08% |
| GLM-4.5 | 63 | 0.07% |
| DeepSeek-R1 | 59 | 0.07% |
| Claude Opus 4 | 54 | 0.06% |
| MiniMax-M2 | 54 | 0.06% |
| Gemini 2.5 Flash | 52 | 0.06% |
| DeepSeek-Chat-V3.1 | 52 | 0.06% |
| Qwen3-Max | 50 | 0.06% |
| Grok-4-Fast | 45 | 0.05% |
| Gemini 2.5 Pro | 41 | 0.05% |
| Grok-4.1-Fast | 39 | 0.04% |
| Gemini 2.5 Flash Lite | 36 | 0.04% |
| GLM-5 | 35 | 0.04% |
| Mistral Large 2512 | 34 | 0.04% |
| Gemma-4-31B | 33 | 0.04% |
| Claude Opus 4.6 | 32 | 0.04% |
| Ministral-14B | 30 | 0.03% |
| DeepSeek-R1-0528 | 30 | 0.03% |
| Qwen3-235B-A22B | 29 | 0.03% |
| Grok-4.20 | 27 | 0.03% |
| Llama-3.3-70B | 24 | 0.03% |
| GPT-OSS 120B | 23 | 0.03% |
| Llama-4-Maverick | 23 | 0.03% |
| Grok-3-Mini | 21 | 0.02% |
| Claude 3 Haiku | 17 | 0.02% |
| GPT-5.4 | 12 | 0.01% |
| GPT-5.4-Nano | 9 | 0.01% |
| Llama-3.1-8B | 7 | 0.01% |
| Total (34) | 86,833 | 100% |

(a) ALFWorld

| Producer Agents | # chunks | (%) |
| --- | --- | --- |
| GPT-4-Turbo | 2,222 | 11.05% |
| GPT-4-Turbo-Preview | 2,054 | 10.22% |
| Claude 3.5 Sonnet | 1,673 | 8.32% |
| Qwen3-32B | 1,500 | 7.46% |
| GPT-OSS 20B | 1,098 | 5.46% |
| DeepSeek-R1-0528 | 1,040 | 5.17% |
| Claude Opus 4 | 982 | 4.89% |
| MiniMax-M1 | 804 | 4.00% |
| Claude Sonnet 4.6 | 801 | 3.98% |
| Claude Opus 4.6 | 725 | 3.61% |
| DeepSeek-R1 | 674 | 3.35% |
| Gemini 2.5 Flash | 673 | 3.35% |
| GLM-5 | 577 | 2.87% |
| Llama-4-Maverick | 442 | 2.20% |
| Grok-4.1-Fast | 437 | 2.17% |
| Grok-4.20 | 431 | 2.14% |
| Qwen3.5-Flash | 411 | 2.04% |
| DeepSeek-V3.2 | 404 | 2.01% |
| GPT-5.4 | 388 | 1.93% |
| GLM-4.5 | 342 | 1.70% |
| GPT-5.4-Nano | 306 | 1.52% |
| MiniMax-M2 | 289 | 1.44% |
| Grok-4-Fast | 262 | 1.30% |
| Qwen3-Max | 246 | 1.22% |
| Qwen3-235B-A22B | 224 | 1.11% |
| Gemini 2.5 Pro | 217 | 1.08% |
| Grok-3-Mini | 203 | 1.01% |
| GPT-OSS 120B | 158 | 0.79% |
| DeepSeek-Chat-V3.1 | 139 | 0.69% |
| Gemma-4-31B | 118 | 0.59% |
| Mistral Large 2512 | 116 | 0.58% |
| GPT-4-1106-Preview | 89 | 0.44% |
| Llama-3.1-8B | 22 | 0.11% |
| Llama-3.3-70B | 20 | 0.10% |
| Gemini 2.5 Flash Lite | 11 | 0.05% |
| Claude 3 Haiku | 4 | 0.02% |
| Total (36) | 20,102 | 100% |

(b) WebArena

Table 4: MATM index statistics across benchmarks.

## Appendix H Retrieved-Source Diversity

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Producer | Index (%) | Retrieved (%) | Retrieved (%) | Pooled / |
|  |  | pooled | best reranker | Index |
| ALFWorld (best reranker: SVMRank) | | | | |
| trained-seq2seq | 77.82 | 35.3 | 25.6 | 0.45$\times$ |
| Qwen3-32B | 12.97 | 22.1 | 23.7 | 1.70$\times$ |
| GPT-OSS 20B | 7.81 | 10.8 | 9.9 | 1.38$\times$ |
| Other 31 producers | 1.40 | 31.8 | 40.7 | 22.68$\times$ |
| # producers retrieved | – | 34 | 32 |  |
| Effective # producers | 2.2 | 10.5 | 11.0 |  |
| WebArena (best reranker: FFN) | | | | |
| GPT-4-Turbo | 11.05 | 3.2 | 3.1 | 0.29$\times$ |
| GPT-4-Turbo-Preview | 10.22 | 6.8 | 9.9 | 0.67$\times$ |
| Claude 3.5 Sonnet | 8.32 | 9.2 | 4.9 | 1.10$\times$ |
| Qwen3-32B | 7.46 | 13.3 | 17.9 | 1.79$\times$ |
| GPT-OSS 20B | 5.46 | 10.0 | 5.6 | 1.83$\times$ |
| Other 31 producers | 57.48 | 57.5 | 58.6 | 1.00$\times$ |
| # producers retrieved | – | 31 | 25 |  |
| Effective # producers | 23.4 | 20.4 | 18.4 |  |

Table 5: Producer shares of the MATM index versus shares of retrieved trajectories. Pooled aggregates retrievals over all consumers and over single-stage retrieval and the three rerankers. The effective number of producers is $\exp(H)$, where $H$ is the entropy of the producer distribution.

The ALFWorld index is dominated by three producers (Table [4](https://arxiv.org/html/2606.19911v2#A7.T4 "Table 4 ‣ Appendix G MATM Index Statistics ‣ Multi-Agent Transactive Memory")), but what a consumer agent conditions on is determined by which trajectories are actually retrieved. Table [5](https://arxiv.org/html/2606.19911v2#A8.T5 "Table 5 ‣ Appendix H Retrieved-Source Diversity ‣ Multi-Agent Transactive Memory") compares each producer’s share of the index with its share of retrieved trajectories.

On ALFWorld, the 31 minority producers hold only 1.4% of the index yet supply 31.8% of retrievals, about 23$\times$ their index share, rising to 40.7% under SVMRank. All 34 producers are retrieved, and the effective number of producers grows from 2.2 in the index to 10.5 in retrieval. On WebArena, the index is already balanced (no producer exceeds 11.1% of chunks), and retrieval closely tracks it. Hence, the dominant corpus sources do not dominate what consumers actually receive.

## Appendix I Incremental Construction of MATM & LTRT Dataset

Algorithm 1  Incremental MATM & LTRT Dataset Construction

1:
Agent population $\mathcal{A}$, question partitions $\mathcal{X}\_{1},\dots,\mathcal{X}\_{P}$, pre-warmed index $\mathcal{D}\_{0}$, retrieval depth $K$, rank positions $\mathcal{I}\subseteq\{1,\dots,K\}$, branching points per question $T$, allocation $\sigma$, evaluator Eval, quality threshold $\theta$, embedding function $f$

2:
Updated MATM index $\mathcal{D}\_{P}$ and LTRT dataset $\mathcal{S}$

3:
$\mathcal{S}\leftarrow\emptyset$ $\triangleright$ LTRT Dataset

4:
for $p=1,\dots,P$ do $\triangleright$ Process each partition

5:
  $\mathcal{B}\_{p}\leftarrow\emptyset$ $\triangleright$ Trajectory buffer

6:
  for each question $x\in\mathcal{X}\_{p}$ do

7:
   $A\_{n}\leftarrow\sigma(x,\mathcal{A},p)$ $\triangleright$ Assign agent

8:
   $(\mathcal{T}\_{\mathrm{base}},\hat{y}\_{\mathrm{base}})\leftarrow A\_{n}(x)$ $\triangleright$ Baseline trajectory without retrieval

9:
   $s\_{\mathrm{base}}\leftarrow\textsc{Eval}(\hat{y}\_{\mathrm{base}},x)$ $\triangleright$ Reference score for marginal utility

10:
   if $s\_{\mathrm{base}}\geq\theta$ then

11:
     $\mathcal{B}\_{p}\leftarrow\mathcal{B}\_{p}\cup\{\mathcal{T}\_{\mathrm{base}}\}$

12:
   end if

13:
   Sample $\{t\_{1},\dots,t\_{T}\}\subseteq\{1,\dots,|\mathcal{T}\_{\mathrm{base}}|\}$ uniformly at random $\triangleright$ Branching points

14:
   for $t\in\{t\_{1},\dots,t\_{T}\}$ do $\triangleright$ Roll-in to step $t$ of $\mathcal{T}\_{\mathrm{base}}$

15:
     $h\_{t}\leftarrow(\tau\_{1},\dots,\tau\_{t})$ from $\mathcal{T}\_{\mathrm{base}}$

16:
     $q\_{t},(d\_{t}^{(1)},\!\dots,\!d\_{t}^{(K)})\leftarrow\textsc{Retrieve}(x,h\_{t},\mathcal{D}\_{p-1},K)$

17:
     for $j\in\mathcal{I}$ do $\triangleright$ Roll-out: one-shot augmented generation per rank

18:
      $(\mathcal{T}\_{t}^{(j)},\hat{y}\_{t}^{(j)})\leftarrow A\_{n}(x\mid h\_{t},d\_{t}^{(j)})$

19:
      $s\_{t}^{(j)}\leftarrow\textsc{Eval}(\hat{y}\_{t}^{(j)},x)$

20:
      if $s\_{t}^{(j)}\geq\theta$ then

21:
        $\mathcal{B}\_{p}\leftarrow\mathcal{B}\_{p}\cup\{\mathcal{T}\_{t}^{(j)}\}$ $\triangleright$ Add successful trajectory

22:
      end if

23:
      $\mathcal{S}\leftarrow\mathcal{S}\cup\{(q\_{t},d\_{t}^{(j)},s\_{t}^{(j)}-s\_{\mathrm{base}})\}$ $\triangleright$ Marginal utility label

24:
     end for

25:
   end for

26:
  end for

27:
  $\mathcal{D}\_{p}\leftarrow\textsc{IndexUpdate}(\mathcal{D}\_{p-1},\;\mathcal{B}\_{p},\;f)$ $\triangleright$ Chunk, embed, add

28:
end for

Algorithm [1](https://arxiv.org/html/2606.19911v2#alg1 "Algorithm 1 ‣ Appendix I Incremental Construction of MATM & LTRT Dataset ‣ Multi-Agent Transactive Memory") describes formal procedure of incremental construction of MATM index and LTRT dataset for trajectory reranker training.

## Appendix J Learning-To-Rank Features

Table [6](https://arxiv.org/html/2606.19911v2#A10.T6 "Table 6 ‣ Appendix J Learning-To-Rank Features ‣ Multi-Agent Transactive Memory") shows the complete list of learning-to-rank features used across environments.

|  |  |
| --- | --- |
| Category | Features (# features: 44) |
| Producer Agent Info (#: 13) | agent ID |
|  | context-window |
|  | agent benchmark scores (11 features): |
|  | Artificial Analysis Intelligence (AAI) Index |
|  | GDPval-AA |
|  | $\tau^{2}$-Bench Telecom |
|  | Terminal-Bench Hard |
|  | SciCode |
|  | AA-LCR |
|  | AA-Omniscience Accuracy |
|  | IFBench |
|  | Humanity’s Last Exam (HLE) |
|  | GPQA-Diamond |
|  | CritPt |
| Consumer Agent Info (#: 1) | agent ID |
| 1st Stage Retrieval (#: 1) | 1st stage retrieval score |
| Query Features (#: 2) | query length |
|  | current step number |
| Trajectory Features (#: 4) | retrieved chunk length |
|  | number of steps in trajectory |
|  | success flag |
|  | trajectory length |
| Query–Trajectory Interaction Features (#: 23) | unigram text tfidf cosine similarity |
|  | unigram goal tfidf cosine similarity |
|  | unigram state tfidf cosine similarity |
|  | unigram context tfidf cosine similarity |
|  | bigram text tfidf cosine similarity |
|  | bigram goal tfidf cosine similarity |
|  | bigram state tfidf cosine similarity |
|  | bigram context tfidf cosine similarity |
|  | text overlap ratio |
|  | goal overlap ratio |
|  | state overlap ratio |
|  | context overlap ratio |
|  | text jaccard similarity |
|  | goal jaccard similarity |
|  | state jaccard similarity |
|  | context jaccard similarity |
|  | text embedding similarity |
|  | goal embedding similarity |
|  | state embedding similarity |
|  | context embedding similarity |
|  | task match |
|  | task variation match |
|  | step number difference |

Table 6: Features used for Learning-To-Rank Trajectories (LTRT).

## Appendix K Feature Importance Test of the Trained Learning-To-Rank Trajectories (LTRT) Model

| Benchmark | Rank | Feature Name | Feature Category | Feature Importance |
| --- | --- | --- | --- | --- |
| AlfWorld | 1 | SciCode score | Producer Agent Info | 0.0596 |
| AlfWorld | 2 | number of steps in trajectory | Trajectory Features | -0.0514 |
| AlfWorld | 3 | AAI score | Producer Agent Info | 0.0368 |
| AlfWorld | 4 | HLE score | Producer Agent Info | -0.0233 |
| AlfWorld | 5 | GPQA-Diamond score | Producer Agent Info | -0.0230 |
| AlfWorld | 6 | state overlap ratio | Query–Trajectory Interaction | 0.0188 |
| AlfWorld | 7 | GDPval-AA score | Producer Agent Info | 0.0185 |
| AlfWorld | 8 | $\tau^{2}$-Bench Telecom score | Producer Agent Info | -0.0168 |
| AlfWorld | 9 | retrieved chunk length | Trajectory Features | 0.0156 |
| AlfWorld | 10 | IFBench score | Producer Agent Info | -0.0155 |
| WebArena | 1 | AA-LCR score | Producer Agent Info | 0.0069 |
| WebArena | 2 | IFBench score | Producer Agent Info | 0.0063 |
| WebArena | 3 | number steps in trajectory | Trajectory Features | 0.0044 |
| WebArena | 4 | state embedding similarity | Query–Trajectory Interaction | 0.0036 |
| WebArena | 5 | goal overlap ratio | Query–Trajectory Interaction | 0.0032 |
| WebArena | 6 | GPQA-Diamond score | Producer Agent Info | 0.0028 |
| WebArena | 7 | retrieved chunk length | Trajectory Features | 0.0024 |
| WebArena | 8 | CritPt score | Producer Agent Info | 0.0021 |
| WebArena | 9 | current step number | Query Features | 0.0020 |
| WebArena | 10 | bigram text tfidf cosine similarity | Query–Trajectory Interaction | 0.0019 |

Table 7: Top feature rankings for LTRT model on each benchmark. SVMRank for ALFWorld and FFN for WebArena. For SVMRank, we report the feature importance as the weight learnt for SVMRank. For FFN, we compute feature importance by removing the feature and measuring the drop in NDCG@10 score while training the LTRT reranker.

Table [7](https://arxiv.org/html/2606.19911v2#A11.T7 "Table 7 ‣ Appendix K Feature Importance Test of the Trained Learning-To-Rank Trajectories (LTRT) Model ‣ Multi-Agent Transactive Memory") shows the top ten most important features for both benchmarks.

## Appendix L Extended Results of Section §[5.3](https://arxiv.org/html/2606.19911v2#S5.SS3 "5.3 MATM benefits are distributed across the agent population (Appendix ) ‣ 5 Results ‣ Multi-Agent Transactive Memory")

### L.1 Formalism

We formalize the analysis of §[5.3](https://arxiv.org/html/2606.19911v2#S5.SS3 "5.3 MATM benefits are distributed across the agent population (Appendix ) ‣ 5 Results ‣ Multi-Agent Transactive Memory") as follows.
With some abuse of notation, let
$\mathcal{P}$ denote the set of producer agents and $\mathcal{C}$ the set of consumer agents, with $\mathcal{X}$ the set of evaluation tasks. For a consumer $c\in\mathcal{C}$, let $\mu\_{0}(c)\in[0,1]$ denote its average final score on $\mathcal{X}$ without retrieval, and let $\mu\_{r}(p,c)\in[0,1]$ denote its average final score on episodes where producer $p\in\mathcal{P}$ appeared
among the retrieved source models. The retrieval advantage of
the pair $(p,c)$ is

|  |  |  |
| --- | --- | --- |
|  | $$\mu\_{\alpha}(p,c)=\mu\_{r}(p,c)-\mu\_{0}(c),$$ |  |

the gain in consumer success rate attributable to retrieving from
producer $p$ relative to that consumer’s own no-retrieval baseline.

Each agent $i\in\mathcal{P}\cup\mathcal{C}$ has a standalone
capability $\kappa(i)$, measured by its aggregated Artificial Analysis
Intelligence Index score ([Artificial Analysis, 2026](https://arxiv.org/html/2606.19911v2#bib.bib52)). The
capability gap of a producer-consumer pair is

|  |  |  |
| --- | --- | --- |
|  | $$\kappa\_{\alpha}(p,c)=\kappa(p)-\kappa(c),$$ |  |

which is positive when the producer is stronger than the consumer in
standalone capability, zero when they are matched, and negative when
the producer is weaker.

Figure 5: Retrieval Advantage vs. Producer-Consumer Capability Gap for ALFWorld (top) and WebArena (bottom).

### L.2 Full results

Figure [5](https://arxiv.org/html/2606.19911v2#A12.F5 "Figure 5 ‣ L.1 Formalism ‣ Appendix L Extended Results of Section § ‣ Multi-Agent Transactive Memory") shows $\mu\_{\alpha}$ plotted against $\kappa\_{\alpha}$ for ALFWorld and WebArena, with the best-performing reranker for each environment shown alongside the corresponding single-stage baseline.
Across both benchmarks and both retrieval settings, the Pearson correlation between $\kappa\_{\alpha}$ and $\mu\_{\alpha}$ is small and not statistically significant: $r=+0.04$
($p=0.49$) for ALFWorld single-stage retrieval, $r=+0.09$
($p=0.09$) for ALFWorld with SVMRank reranking, $r=+0.03$
($p=0.79$) for WebArena single-stage retrieval, and $r=+0.08$
($p=0.35$) for WebArena with FFN reranking.

Reranking consistently lifts the retrieval advantage distribution. On ALFWorld, the mean $\mu\_{\alpha}$ rises from $+0.05$ under single-stage retrieval to $+0.1$ under SVMRank, and the fraction of pairs with $\mu\_{\alpha}>0$ rises from $51\%$ to $61\%$.
On WebArena, the conditional means follow the same pattern: pairs where the producer is stronger than the consumer show a mean $\mu\_{\alpha}$ of $+0.02$ under both single-stage and FFN reranking, while the overall distribution shifts upward under reranking. The correlation between $\kappa\_{\alpha}$ and $\mu\_{\alpha}$ also roughly doubles under reranking in both environments, from $r\approx 0.03$ to $r\approx 0.08$.
While neither correlation reaches statistical significance, their consistency across two independent benchmarks and two retrieval settings indicates a real but small structural effect: reranking incorporates producer-capability information as one signal among many, consistent with the feature importance analysis in Appendix [K](https://arxiv.org/html/2606.19911v2#A11 "Appendix K Feature Importance Test of the Trained Learning-To-Rank Trajectories (LTRT) Model ‣ Multi-Agent Transactive Memory").

## Appendix M Section §[5.4](https://arxiv.org/html/2606.19911v2#S5.SS4 "5.4 MATM offers cross-task generalization ‣ 5 Results ‣ Multi-Agent Transactive Memory") Supplement

For ALFWorld, we adopt the six task types defined in the original benchmark; for WebArena, the 241 task intents. Because WebArena’s task space is fine-grained, some test tasks have no same-type candidates in the index; we exclude such tasks from the WebArena experiments, leaving 47 tasks for this analysis. All results use the best-performing reranker per environment: SVMRank for ALFWorld and FFN for WebArena.
RPP in this section is the mean pairwise RPP among the three retrieval scopes (full, same task type, cross task type); the no-retrieval baseline is not part of this comparison set. Negative RPP values therefore indicate that a scope is dispreferred relative to the other two scopes on average.

## Appendix N Near-Duplicate Oracle Ceiling

| Env | No Retr. | Oracle | Full |
| --- | --- | --- | --- |
|  | (SR) | (SR) | (SR) |
| ALFWorld | 20.07 | 38.69 | 34.31 |
| WebArena | 16.58 | 40.38 | 19.97 |

Table 8: Near-duplicate oracle ceiling. Success rate (SR) for a single consumer agent (GPT-OSS 20B, single seed) when oracle trajectories (same task, same environment variation) are added to the corpus, compared against no retrieval and full retrieval. Oracle exposure approximates an upper bound.

The retrieval-scope analysis in §[5.4](https://arxiv.org/html/2606.19911v2#S5.SS4 "5.4 MATM offers cross-task generalization ‣ 5 Results ‣ Multi-Agent Transactive Memory") deliberately excludes oracle trajectories—those solving the exact same task in the same environment variation as the test query—from the MATM corpus, since a producer having already solved the identical task instance is a rare, lucky event in an open agent population. To approximate an upper bound on retrieval benefit, we run an additional setting that reintroduces these oracle chunks into the corpus and compares it against no retrieval and full retrieval. Because of the additional cost, we use a single consumer agent (GPT-OSS 20B) with access to producer memory initialized from publicly available trajectories, and report a single random seed rather than the five-seed average used elsewhere.

Table [8](https://arxiv.org/html/2606.19911v2#A14.T8 "Table 8 ‣ Appendix N Near-Duplicate Oracle Ceiling ‣ Multi-Agent Transactive Memory") reports the results. Exposing oracle trajectories sharply increases success rate in both environments (ALFWorld $20.07\to 38.69$; WebArena $16.58\to 40.38$), well above full retrieval. This confirms that same-task/same-environment matches act as a performance ceiling: when a producer has solved the identical task instance, the consumer benefits substantially, which is a best case for MATM. Because such exact matches are rare in realistic open populations, we exclude oracle trajectories from the main corpus so that the reported gains reflect genuine cross-instance transfer rather than near-duplicate leakage.

## Appendix O Token and Monetary Cost

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Model | Config | SR(%) $\uparrow$ | Tokens/succ. $\downarrow$ | $/succ. $\downarrow$ | Input tokens/ep. |
| ALFWorld (274 tasks) | | | | | |
| GPT-OSS 20B | no retrieval | 25.18 | 118,181 | 0.00237 | 28,906 |
| MATM | 40.15 | 78,629 ($-$33.5%) | 0.00157 ($-$33.9%) | 30,718 (+6.3%) |
| Qwen3-32B | no retrieval | 37.96 | 73,188 | 0.00633 | 26,882 |
| MATM | 54.74 | 52,949 ($-$27.7%) | 0.00458 ($-$27.6%) | 28,042 (+4.3%) |
| WebArena (88 tasks) | | | | | |
| GPT-OSS 20B | no retrieval | 13.64 | 1,539,334 | 0.02898 | 207,492 |
| MATM | 22.73 | 1,012,911 ($-$34.2%) | 0.01901 ($-$34.4%) | 227,753 (+9.8%) |
| Qwen3-32B | no retrieval | 17.05 | 1,126,126 | 0.09223 | 190,133 |
| MATM | 18.18 | 1,005,794 ($-$10.7%) | 0.08240 ($-$10.7%) | 181,111 ($-$4.7%) |

Table 9: Token usage and monetary cost of single consumer agents without retrieval and with single-stage MATM retrieval. ‘Tokens/succ.’ and ‘$/succ.’ divide total tokens (input and output) and total cost by the number of successful episodes. Percentages in parentheses are changes relative to no retrieval in the same setting.

Fewer interaction steps (§[5.1](https://arxiv.org/html/2606.19911v2#S5.SS1 "5.1 MATM-Augmentation improves effectiveness and efficiency ‣ 5 Results ‣ Multi-Agent Transactive Memory")) may not imply lower inference cost, because every retrieval call adds a trajectory chunk to the consumer agent’s prompt. We therefore measure token usage and monetary cost directly for two consumer agents, GPT-OSS 20B and Qwen3-32B, each run on its own on the full test sets (274 ALFWorld and 88 WebArena tasks) without retrieval and with single-stage MATM retrieval.

For every action-generation call, we count input tokens as the system and user prompt rendered through the model’s chat template, and output tokens as the generated reasoning and action, using each model’s own tokenizer. Costs use OpenRouter prices per million tokens ($0.018 input / $0.09 output for GPT-OSS 20B; $0.08 / $0.28 for Qwen3-32B). Since a configuration that spends more per attempted episode can still be cheaper per task it actually solves, we normalize by successful episodes: tokens per success divides the total number of input and output tokens by the number of successful episodes, and dollars per success divides the total cost in the same way.

Table [9](https://arxiv.org/html/2606.19911v2#A15.T9 "Table 9 ‣ Appendix O Token and Monetary Cost ‣ Multi-Agent Transactive Memory") reports the results. Input tokens per episode increase slightly with retrieval in three of the four settings, since the retrieved trajectory lengthens the prompt and fewer steps only partly offset it. Per solved task, however, MATM reduces token usage in every setting, by 33.5% and 27.7% on ALFWorld and by 34.2% and 10.7% on WebArena for GPT-OSS 20B and Qwen3-32B respectively, with nearly identical reductions in dollar cost. Input tokens account for 88–97% of the total cost in all settings, so retrieval’s effect on cost is driven by prompt length rather than generation length. One possible explanation for the input token decrease for Qwen3-32B on WebArena is that its prompts are dominated by the page’s accessibility tree, so a shift toward smaller pages under retrieval can outweigh the added trajectory chunk.

## Appendix P Reproducibility

We release all resources needed to reproduce our results.

- •

  Code and README. Full training, indexing, and evaluation code with reproduction instructions: <https://github.com/kimdanny/matm>.
- •

  Trajectory dataset. The complete MATM trajectory corpus: <https://huggingface.co/datasets/toeunkim/matm-trajectories>.
- •

  Trained rerankers. The trained LTRT reranker models are included in the code repository.

## Appendix Q Dataset License

- •

  ALFWorld: MIT License
- •

  WebArena: Apache License 2.0

## Appendix R Computational Budget

For retrieval from the MATM index, we use one NVIDIA L40S GPU.
For LLM inference in experiments, the OpenRouter API was used. The total cost was approximately 2,000 USD.

## Appendix S Use of AI Assistants

AI assistants were used for paraphrasing during paper writing and for simple implementation tasks during coding. All outputs were thoroughly reviewed by the authors.

## Appendix T Language Model Prompts

### T.1 Retrieval Planner Prompt

SYSTEM

You are a retrieval planner for an agent. Decide if a new retrieval of a successful trajectory is needed now. Consider the goal, recent observations, and the current retrieved trajectory context. Focus on identifying if the current situation is similar to the retrieved trajectory. If the current situation and recent history is similar to the retrieved trajectory, return [NoRetrieval]. If the current situation and recent history is not similar to the retrieved trajectory, return [Retrieval].

USER

{
  
 "goal": "<goal\_text>",
  
 "current\_observation": "<observation>",
  
 "recent\_history": "<recent\_history\_str>",
  
 "current\_retrieved\_context": "<trajectory\_context>"
  
}
  
Return only one of these exact tags: [Retrieval] or [NoRetrieval]. Do not include any other text.

### T.2 ALFWorld Baseline (no-retrieval) Prompt

Note that the ‘ONE-SHOT EXAMPLE’ used in this section is an illustrative example; the prompts are adjusted based on the task.

SYSTEM

Interact with a household to solve a task. Imagine you are an intelligent agent in a household environment and your target is to perform actions to complete the task goal. At the beginning of your interactions, you will be given the detailed description of the current environment and your goal to accomplish. For each of your turn, you will be given the observation of the last turn. Think step by step about what you observe and what action to take next. The available actions are: 1. go to recep 2. take obj from recep 3. put obj in/on recep 4. open recep 5. close recep 6. toggle obj recep 7. clean obj with recep 8. heat obj with recep 9. cool obj with recep where obj and recep correspond to objects and receptacles. After your each turn, the environment will give you immediate feedback based on which you plan your next few steps. if the envrionment output "Nothing happened", that means the previous action is invalid and you should try more options. Reminder: 1. The action must be chosen from the given available actions. Any actions except provided available actions will be regarded as illegal. 2. Think when necessary, try to act directly more in the process.
  
RESPONSE FORMAT:
  
For each turn, you must provide your response in JSON format with two fields:
  
- reasoning: MUST start with ‘Let’s think step by step.’ followed by detailed reasoning about the situation and why this action is the best choice
  
- action: your chosen action (must be exactly from admissible\_actions list)
  
CRITICAL RULES:
  
1. Your action MUST be character-for-character identical to one item in admissible\_actions
  
2. Do NOT modify, abbreviate, or paraphrase actions
  
3. Do NOT use actions from retrieved trajectories unless they appear in current admissible\_actions
  
4. If confused, pick a safe exploratory action like "look" or navigation
  
ONE-SHOT EXAMPLE:
  
Task: clean some apple and put it in sidetable.
  
Turn 1:
  
Observation: The fridge 1 is closed.
  
Response: {"reasoning": "Let’s think step by step. I should open fridge 1 to see what’s inside.", "action": "open fridge 1"}
  
Turn 2:
  
Observation: You open the fridge 1. The fridge 1 is open. In it, you see a lettuce 2, a mug 2, a potato 2, and a tomato 1.
  
Response: {"reasoning": "Let’s think step by step. I need to navigate to diningtable 1 to continue searching or complete the task.", "action": "go to diningtable 1"}
  
Turn 3:
  
Observation: On the diningtable 1, you see nothing.
  
Response: {"reasoning": "Let’s think step by step. I need to navigate to diningtable 2 to continue searching or complete the task.", "action": "go to diningtable 2"}
  
[TURNS SKIPPED FOR READABILITY]
  
Turn 11:
  
Observation: On the sinkbasin 1, you see a cup 2, a egg 1, a mug 1, and a potato 3.
  
Response: {"reasoning": "Let’s think step by step. I need to clean this object as required by the task.", "action": "clean apple 3 with sinkbasin 1"}
  
Turn 12:
  
Observation: You clean the apple 3 using the sinkbasin 1.
  
Response: {"reasoning": "Let’s think step by step. Now I clean an apple (3). Next, I need to put it in/on sidetable 1.", "action": "go to sidetable 1"}
  
Turn 13:
  
Observation: On the sidetable 1, you see a cup 1, a lettuce 1, a peppershaker 3, a potato 1, and a saltshaker 1.
  
Response: {"reasoning": "Let’s think step by step. Now I have the object, I need to place it at the target location to complete the task.", "action": "put apple 3 in/on sidetable 1"}

USER

GOAL: <goal\_text>
  
CURRENT STEP: <current\_step> / <max\_steps>
  
--- RECENT HISTORY (Previous Steps - For Reference Only) ---
  
<recent\_history\_str>
  
--- End of Recent History ---
  
>>> CURRENT OBSERVATION (Focus on This - Current State):
  
<observation>
  
<<< End of Current Observation
  
ADMISSIBLE ACTIONS (<N> total):
  
1. <action\_1>
  
2. <action\_2>
  
...
  
RESPONSE FORMAT:
  
You MUST respond with valid JSON in this exact format:
  
{"reasoning": "Let’s think step by step. [your detailed reasoning]", "action": "exact action from admissible\_actions"}
  
Where:
  
- reasoning: MUST start with ‘Let’s think step by step.’ Then explain your thought process, what you observe, and why this action is best
  
- action: Must be EXACTLY one string from the admissible\_actions list above (character-for-character match)
  
IMPORTANT:
  
1. Your reasoning MUST begin with ‘Let’s think step by step.’
  
2. Do not include any text before or after the JSON object.

### T.3 ALFWorld Trajectory-Augmented Prompt

SYSTEM

Same as ALFWorld Baseline (no-retrieval) System Prompt

USER

GOAL: <goal\_text>
  
CURRENT STEP: <current\_step> / <max\_steps>
  
--- RECENT HISTORY (Previous Steps - For Reference Only) ---
  
<recent\_history\_str>
  
--- End of Recent History ---
  
--- RETRIEVED TRAJECTORY GUIDANCE (Reference Examples) ---
  
RETRIEVED TRAJECTORY:
  
Task: <task\_description>
  
Retrieved successful trajectory sequence:
  
Step 1: <action\_1>
  
Observation: <observation\_1>
  
Step 2: <action\_2>
  
Observation: <observation\_2>
  
...
  
Use this trajectory as a reference for your planning. Consider:
  
1. The sequence of actions that led to success
  
2. The observations and their progression
  
3. How to adapt this strategy to the current situation and your goal
  
4. What steps might be different or similar in your current context
  
--- End of Trajectory Guidance ---
  
>>> CURRENT OBSERVATION (Focus on This - Current State):
  
<observation>
  
<<< End of Current Observation
  
ADMISSIBLE ACTIONS (<N> total):
  
1. <action\_1>
  
2. <action\_2>
  
...
  
RESPONSE FORMAT:
  
You MUST respond with valid JSON in this exact format:
  
{"reasoning": "Let’s think step by step. [your detailed reasoning]", "action": "exact action from admissible\_actions"}
  
Where:
  
- reasoning: MUST start with ‘Let’s think step by step.’ Then explain your thought process, what you observe, and why this action is best
  
- action: Must be EXACTLY one string from the admissible\_actions list above (character-for-character match)
  
IMPORTANT:
  
1. Your reasoning MUST begin with ‘Let’s think step by step.’
  
2. Do not include any text before or after the JSON object.

### T.4 WebArena Baseline (no-retrieval) Prompt

SYSTEM

You are an autonomous intelligent agent tasked with navigating a web browser. You will be given web-based tasks. These tasks will be accomplished through the use of specific actions you can issue.
  
Here’s the information you’ll have:
  
The user’s objective: This is the task you’re trying to complete.
  
The current web page’s accessibility tree: This is a simplified representation of the webpage, providing key information.
  
The current web page’s URL: This is the page you’re currently navigating.
  
The open tabs: These are the tabs you have open.
  
The previous action: This is the action you just performed. It may be helpful to track your progress.
  
The actions you can perform fall into several categories:
  
Page Operation Actions:
  
‘click [id]‘: This action clicks on an element with a specific id on the webpage.
  
‘type [id] [content] [press\_enter\_after=0|1]‘: Use this to type the content into the field with id. By default, the "Enter" key is pressed after typing unless press\_enter\_after is set to 0.
  
‘hover [id]‘: Hover over an element with id.
  
‘press [key\_comb]‘: Simulates the pressing of a key combination on the keyboard (e.g., Ctrl+v).
  
‘scroll [direction=down|up]‘: Scroll the page up or down.
  
Tab Management Actions:
  
‘new\_tab‘: Open a new, empty browser tab.
  
‘tab\_focus [tab\_index]‘: Switch the browser’s focus to a specific tab using its index.
  
‘close\_tab‘: Close the currently active tab.
  
URL Navigation Actions:
  
‘goto [url]‘: Navigate to a specific URL.
  
‘go\_back‘: Navigate to the previously viewed page.
  
‘go\_forward‘: Navigate to the next page (if a previous ’go\_back’ action was performed).
  
Completion Action:
  
‘stop [answer]‘: Issue this action when you believe the task is complete. If the objective is to find a text-based answer, provide the answer in the bracket.
  
Available Websites:
  
You have access to the following websites:
  
- OneStopShop (E-commerce): <SHOPPING\_URL>
  
- Shopping Admin (CMS): <SHOPPING\_ADMIN\_URL>
  
- Reddit (Forum): <REDDIT\_URL>
  
- GitLab: <GITLAB\_URL>
  
- Wikipedia: <WIKIPEDIA\_URL>
  
- OpenStreetMap: <MAP\_URL>
  
RESPONSE FORMAT:
  
For each turn, you must provide your response in JSON format with two fields:
  
- reasoning: Start with ’Let’s think step by step’ and then provide detailed step-by-step reasoning about the current situation, what you observe, and why the chosen action is the best next step
  
- action: your chosen action (must be exactly from the available actions)
  
IMPORTANT:
  
1. You should only issue an action that is valid given the current observation
  
2. You should only issue one action at a time
  
3. For each observation, think step by step about what you see and what action to take next
  
4. Your action MUST be one of the valid action formats listed above
  
Few-shot examples and closing sentence.
  
Example 1:
  
OBSERVATION:
  
[1744] link ’HP CB782A#ABA 640 Inkjet Fax Machine (Renewed)’
  
[1749] StaticText ’$279.49’
  
[1757] button ’Add to Cart’
  
[1760] button ’Add to Wish List’
  
[1761] button ’Add to Compare’
  
URL: http://onestopmarket.com/office-products/office-electronics.html
  
OBJECTIVE: What is the price of HP CB782A#ABA 640 Inkjet Fax Machine (Renewed)?
  
PREVIOUS ACTION: None
  
Response: {"reasoning": "Let’s think step by step. I can see the product HP CB782A#ABA 640 Inkjet Fax Machine (Renewed) is displayed on the page. The price is clearly shown as $279.49 in element [1749]. Since the objective is to find the price, and I have found it, I should stop and provide the answer.", "action": "stop [$279.49]"}
  
Example 2:
  
OBSERVATION:
  
[164] textbox ’Search’ focused: True required: False
  
[171] button ’Search’
  
URL: http://onestopmarket.com
  
OBJECTIVE: Search for USB-C to USB-B cable on the site.
  
PREVIOUS ACTION: None
  
Response: {"reasoning": "Let’s think step by step. I need to search for USB-C to USB-B cable on this site. I can see a search textbox with id [164] that is already focused. I should type my search query into this textbox and press enter to execute the search. I’ll use press\_enter\_after=1 to submit the search after typing.", "action": "type [164] [USB-C to USB-B cable] [1]"}
  
Example 3:
  
OBSERVATION:
  
[1124] heading ’Certified Refurbished Kindle Paperwhite’
  
[1136] StaticText ’by Amazon’
  
[1163] StaticText ’Price: $79.99’
  
[1189] button ’Add to Cart’
  
URL: http://onestopmarket.com/dp/B00ZV 9RDKK
  
OBJECTIVE: Show me the details of the Kindle Paperwhite.
  
PREVIOUS ACTION: click [582]
  
Response: {"reasoning": "Let’s think step by step. I can see the Kindle Paperwhite product page with the heading, price ($79.99), and an Add to Cart button. The objective is to show details of the product. Currently, I can only see basic information. To view more detailed information like specifications, features, or description, I should scroll down the page to see if there are additional details below.", "action": "scroll [down]"}
  
Now, given the current observation, think step-by-step and provide your response.

USER

GOAL: <goal\_text>
  
CURRENT STEP: <current\_step> / <max\_steps>
  
--- RECENT HISTORY (Previous Steps - For Reference Only) ---
  
<recent\_history\_str>
  
--- End of Recent History ---
  
>>> CURRENT OBSERVATION (Focus on This - Current State):
  
<observation>
  
<<< End of Current Observation
  
CURRENT URL: <url>
  
RESPONSE FORMAT:
  
You MUST respond with valid JSON in this exact format:
  
{"reasoning": "Let’s think step by step. [your detailed reasoning]", "action": "action to be taken"}
  
Where:
  
- reasoning: MUST start with ‘Let’s think step by step.’ Then explain your thought process, what you observe, and why this action is best
  
- action: action to be taken
  
IMPORTANT:
  
1. Your reasoning MUST begin with ‘Let’s think step by step.’
  
2. Do not include any text before or after the JSON object.

### T.5 WebArena Trajectory-Augmented Prompt

SYSTEM

Same as WebArena Baseline (no-retrieval) System Prompt

USER

GOAL: <goal\_text>
  
CURRENT STEP: <current\_step> / <max\_steps>
  
--- RECENT HISTORY (Previous Steps - For Reference Only) ---
  
<recent\_history\_str>
  
--- End of Recent History ---
  
--- RETRIEVED TRAJECTORY GUIDANCE (Reference Examples) ---
  
RETRIEVED TRAJECTORY:
  
Task: <task\_description>
  
Retrieved successful trajectory:
  
Step 1:
  
Action: <action\_1>
  
Observation: <observation\_1>
  
Step 2:
  
Action: <action\_2>
  
Observation: <observation\_2>
  
...
  
Use this trajectory as a reference for your planning. Consider:
  
1. The sequence of actions taken
  
2. How the agent navigated through the website
  
3. What elements were clicked and in what order
  
4. When the task was completed
  
--- End of Trajectory Guidance ---
  
>>> CURRENT OBSERVATION (Focus on This - Current State):
  
<observation>
  
<<< End of Current Observation
  
CURRENT URL: <url>
  
RESPONSE FORMAT:
  
You MUST respond with valid JSON in this exact format:
  
{"reasoning": "Let’s think step by step. [your detailed reasoning]", "action": "action to be taken"}
  
Where:
  
- reasoning: MUST start with ‘Let’s think step by step.’ Then explain your thought process, what you observe, and why this action is best
  
- action: action to be taken
  
IMPORTANT:
  
1. Your reasoning MUST begin with ‘Let’s think step by step.’
  
2. Do not include any text before or after the JSON object.
