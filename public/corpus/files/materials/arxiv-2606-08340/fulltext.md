---
id: arxiv-2606-08340-text
type: material
title: Benchmarking Open-Ended Multi-Agent Coordination in Language Agents
work_id: arxiv-2606-08340
source_url: https://arxiv.org/html/2606.08340v1
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять
  с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.
language: original
sha256_text: 87e16f28e6e3d9caa78025c7f7158f99b1acfefc7f41ec76262386ebe6e7fc47
---

> Источник: [https://arxiv.org/html/2606.08340v1](https://arxiv.org/html/2606.08340v1). Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.

# Benchmarking Open-Ended Multi-Agent Coordination in Language Agents

Kale-ab Abebe Tessera1
 Andras Szecsenyi1  Cameron Barker1

Alexander Rutherford2  Davide Paglieri3  Aidan Scannell1

Henry Gouk1  Elliot J. Crowley1  Tim Rocktäschel3  Amos Storkey1

1University of Edinburgh  2University of Oxford  3University College London
†

###### Abstract

As language models are increasingly deployed as autonomous agents, they must coordinate with others over long horizons in open-ended interactive tasks. Yet existing evaluations rarely test these demands together, instead emphasising single-agent tasks, short interactions, or highly structured multi-agent settings. We introduce alem, a JAX-based benchmark for open-ended multi-agent coordination built on Craftax-like dynamics. alem embeds procedurally generated coordination tasks, soft specialisation, communication, and controllable coordination difficulty into a long-horizon survival world with exploration, crafting, trading, and combat. We evaluate $13$ modern LLMs zero-shot within homogeneous teams, with trained MARL agents as reference points. Current LLM agents remain far from solving alem, averaging only $\sim 6\%$ normalised return, but their failures are not uniform. On the hardest coordination setting, zero-shot Gemini-3.1-Pro-High approaches MARL agents trained for one billion steps, while GPT-5.4-High achieves strong base-task reward but much lower coordination reward. This contrast shows that individual task competence does not imply coordination competence. Ablations show that communication is the largest contributor to coordination, while memory and reasoning help when used to maintain multi-step plans. Overall, our results identify coordination as a distinct bottleneck for frontier LLM agents, separate from single-agent capabilities. alem makes this bottleneck measurable and provides a controlled testbed for developing agents that communicate, allocate roles, and execute shared plans. Code is available at <https://github.com/alem-world/alem-env>.

## 1 Introduction

Overworld Gnomish Mines Fire Realm

![Refer to caption](https://arxiv.org/html/2606.08340v1/alem_world_overworld.png) ![Refer to caption](https://arxiv.org/html/2606.08340v1/alem_world_gnomish_mines.png) ![Refer to caption](https://arxiv.org/html/2606.08340v1/alem_world_fire_realm.png)

Mining Construction Combat Crafting

![Refer to caption](https://arxiv.org/html/2606.08340v1/alem_zoom_mining.png) ![Refer to caption](https://arxiv.org/html/2606.08340v1/alem_zoom_construction.png) ![Refer to caption](https://arxiv.org/html/2606.08340v1/alem_zoom_combat.png) ![Refer to caption](https://arxiv.org/html/2606.08340v1/alem_zoom_crafting.png)

Figure 1: alem extends Craftax-like open worlds [[37](https://arxiv.org/html/2606.08340v1#bib.bib11), [40](https://arxiv.org/html/2606.08340v1#bib.bib21)] into a controllable multi-agent coordination benchmark.
Top: procedurally generated levels with sampled coordination tasks ($\bullet$ 2-agent sync, $\blacksquare$ all-agent sync, $\blacklozenge$ handover). Bottom: coordinated mining, construction, combat, and crafting examples. By resampling tasks and coordination structure each episode, alem evaluates agents’ ability to infer coordination needs from observation rather than memorise fixed task patterns.

Large Language Models (LLMs) have evolved rapidly, from systems primarily used for text generation [[8](https://arxiv.org/html/2606.08340v1#bib.bib1), [57](https://arxiv.org/html/2606.08340v1#bib.bib2), [13](https://arxiv.org/html/2606.08340v1#bib.bib3)] to agentic systems capable of completing long-horizon, open-ended tasks [[31](https://arxiv.org/html/2606.08340v1#bib.bib4), [62](https://arxiv.org/html/2606.08340v1#bib.bib5), [11](https://arxiv.org/html/2606.08340v1#bib.bib6), [35](https://arxiv.org/html/2606.08340v1#bib.bib7), [39](https://arxiv.org/html/2606.08340v1#bib.bib8), [59](https://arxiv.org/html/2606.08340v1#bib.bib9)]. As these systems are deployed as autonomous agents, they will increasingly operate in multi-agent settings where success depends on coordinating with others [[25](https://arxiv.org/html/2606.08340v1#bib.bib10)]. Yet the mechanisms required for sustained multi-agent coordination remain poorly understood, especially when agents must communicate intent, allocate roles, maintain shared plans, and align actions over long horizons [[23](https://arxiv.org/html/2606.08340v1#bib.bib62)]. This creates a need to evaluate whether LLM agents can coordinate effectively in long-horizon, open-ended multi-agent environments, and to characterise the failures that arise when they cannot.

Existing benchmarks cover only part of this space. MultiAgentBench, Collab-Overcooked, and related multi-agent LLM benchmarks evaluate collaboration, but typically in shorter-horizon and more narrowly specified tasks [[69](https://arxiv.org/html/2606.08340v1#bib.bib25), [53](https://arxiv.org/html/2606.08340v1#bib.bib26), [3](https://arxiv.org/html/2606.08340v1#bib.bib24), [60](https://arxiv.org/html/2606.08340v1#bib.bib28), [22](https://arxiv.org/html/2606.08340v1#bib.bib29), [38](https://arxiv.org/html/2606.08340v1#bib.bib69)]. Others focus on long-horizon task completion in primarily single-agent settings [[42](https://arxiv.org/html/2606.08340v1#bib.bib27), [67](https://arxiv.org/html/2606.08340v1#bib.bib30), [49](https://arxiv.org/html/2606.08340v1#bib.bib31), [61](https://arxiv.org/html/2606.08340v1#bib.bib32), [68](https://arxiv.org/html/2606.08340v1#bib.bib33), [27](https://arxiv.org/html/2606.08340v1#bib.bib34), [20](https://arxiv.org/html/2606.08340v1#bib.bib35)], or include multiple agents but lack explicit coordination tasks or controllable coordination difficulty [[40](https://arxiv.org/html/2606.08340v1#bib.bib21), [65](https://arxiv.org/html/2606.08340v1#bib.bib49), [63](https://arxiv.org/html/2606.08340v1#bib.bib66)]. The community therefore still lacks evaluations that combine long-horizon interaction and open-ended task structure with explicit, procedurally generated, and controllable coordination demands. Games are established testbeds for sequential decision-making [[5](https://arxiv.org/html/2606.08340v1#bib.bib40), [7](https://arxiv.org/html/2606.08340v1#bib.bib36), [47](https://arxiv.org/html/2606.08340v1#bib.bib37), [58](https://arxiv.org/html/2606.08340v1#bib.bib38), [9](https://arxiv.org/html/2606.08340v1#bib.bib39)], and procedural generation is especially useful because it reduces memorisation and contamination while enabling controlled variation across tasks and difficulty levels [[42](https://arxiv.org/html/2606.08340v1#bib.bib27), [48](https://arxiv.org/html/2606.08340v1#bib.bib12)].

To address these gaps, we introduce alem1(Fig. [1](https://arxiv.org/html/2606.08340v1#S1.F1 "Figure 1 ‣ 1 Introduction ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents")), a benchmark for open-ended2 multi-agent coordination built on Craftax-like dynamics [[37](https://arxiv.org/html/2606.08340v1#bib.bib11), [40](https://arxiv.org/html/2606.08340v1#bib.bib21)]. alem procedurally generates complex environments where coordination difficulty is modulated by a single parameter, ranging from loose temporal dependencies and handovers to tightly coupled joint actions (Fig. [2](https://arxiv.org/html/2606.08340v1#S2.F2 "Figure 2 ‣ 2 Background ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents")). Information-theoretic diagnostics show that these mechanics induce genuine inter-agent dependence, not just added single-agent difficulty (App. [B.1](https://arxiv.org/html/2606.08340v1#A2.SS1 "B.1 Probing Environment Changes ‣ Appendix B Environment Details ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents")). Implemented in JAX [[6](https://arxiv.org/html/2606.08340v1#bib.bib41)], the benchmark facilitates scalable and reproducible evaluation of how multi-agent failure modes emerge as coordination demands increase.

Using alem, we evaluate 13 modern LLMs in zero-shot homogeneous teams, with trained MARL agents as reference points. Current LLM agents remain far from solving the benchmark, averaging only $\sim 6\%$ normalised return. Gemini-3.1-Pro-High performs comparably to MARL agents trained for one billion environment steps on the hardest coordination setting ($17.5\%$ vs. $17.6\%$ Coord.%), while GPT-5.4-High achieves strong base-task reward but much lower coordination reward. This contrast shows that individual task competence is not sufficient for coordinated progress. Ablations further show that communication has the largest effect on coordination performance, while memory and reasoning help when they support multi-step planning. Finally, in initial heterogeneous-team experiments, mixed teams perform near the average of their constituent homogeneous baselines rather than matching the strongest member’s performance. Together, these results identify long-horizon, open-ended coordination as a distinct bottleneck for current LLM agents.

Our contributions are: i) alem, a JAX-based benchmark for long-horizon, open-ended multi-agent coordination with procedural tasks, soft specialisation, communication, and controllable difficulty; ii) pixel, symbolic, and text interfaces for evaluating MARL and zero-shot LLM agents under matched coordination demands; and iii) a systematic evaluation of 13 modern LLMs and 4 MARL baselines, showing that coordination remains a distinct bottleneck from base-task competence and exposing failure modes across communication, memory, reasoning, and team composition.

## 2 Background

We model the environment as a partially observable stochastic game (POSG) [[26](https://arxiv.org/html/2606.08340v1#bib.bib60)], denoted as the tuple $\langle I,S,A,O,\Omega,T,R\rangle$. Here, $I=\{1,\dots,n\}$ is the set of agents, $S$ is the set of states, $A=A^{1}\times\dots\times A^{n}$ is the joint action space, and $O=O^{1}\times\dots\times O^{n}$ is the joint observation space. The observation function $\Omega=(\Omega^{1},\dots,\Omega^{n})$ maps states to per-agent observations: at each state $s\in S$, agent $i$ receives an individual observation $o^{i}=\Omega^{i}(s)\in O^{i}$ and selects an action $a^{i}\in A^{i}$. The environment transitions according to $T:S\times A\to\Delta(S)$, where $\Delta(\cdot)$ is the set of probability distributions over a set. Each agent receives an individual reward given by $R^{i}:S\times A\times S\to\mathbb{R}$.

Decreasing temporal separation $\rightarrow$$\left(A^{i}\_{1},A^{i}\_{2},A^{i}\_{3},\ldots,A^{i}\_{T}\right)$$\left(A^{j}\_{1},A^{j}\_{2},A^{j}\_{3},\ldots,A^{j}\_{T}\right)$


Long-range interdependencies
$\left(A^{i}\_{1},A^{i}\_{2},A^{i}\_{3},\ldots,A^{i}\_{T}\right)$$\left(A^{j}\_{1},A^{j}\_{2},A^{j}\_{3},\ldots,A^{j}\_{T}\right)$


Mid-range / handover
$\left(A^{i}\_{1},A^{i}\_{2},A^{i}\_{3},\ldots,A^{i}\_{T}\right)$$\left(A^{j}\_{1},A^{j}\_{2},A^{j}\_{3},\ldots,A^{j}\_{T}\right)$


Tightly coupled (same timestep)

![Refer to caption](https://arxiv.org/html/2606.08340v1/coord_long_range_1_bare.png)

$\rightarrow$ ![Refer to caption](https://arxiv.org/html/2606.08340v1/coord_long_range_2_bare.png)

(a) Long-range

![Refer to caption](https://arxiv.org/html/2606.08340v1/coord_handover_1_bare.png)

$\rightarrow$ ![Refer to caption](https://arxiv.org/html/2606.08340v1/coord_handover_2_bare.png)

(b) Handover

![Refer to caption](https://arxiv.org/html/2606.08340v1/coord_sync_bare.png)


(c) Synchronous

Figure 2: 
Coordination coupling spectrum in alem.
alem tasks vary the temporal separation $\Delta t=|t-t^{\prime}|$ between coupled actions $A^{i}\_{t}$ and $A^{j}\_{t^{\prime}}$. We show representative examples: long-range ([2(a)](https://arxiv.org/html/2606.08340v1#S2.F2.sf1 "In Figure 2 ‣ 2 Background ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents"), large $\Delta t$), where one agent gathers wood used to craft a pickaxe, enabling another agent to mine stone later; handover ([2(b)](https://arxiv.org/html/2606.08340v1#S2.F2.sf2 "In Figure 2 ‣ 2 Background ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents"), small $\Delta t$), where agent $i$ initiates a mining task that agent $j$ must complete within a short window; and synchronous ([2(c)](https://arxiv.org/html/2606.08340v1#S2.F2.sf3 "In Figure 2 ‣ 2 Background ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents"), $\Delta t=0$), where agents act on the same target at the same timestep. Dashed boxes mark the coordination-critical regions.

## 3 alem: An Open-Ended World for Multi-Agent Coordination

We introduce alem, a benchmark for studying coordination in open-ended multi-agent worlds. Built on Craftax-Coop [[40](https://arxiv.org/html/2606.08340v1#bib.bib21)], alem extends prior work along four axes: diverse *coordination types*, *procedural generation* of coordination tasks, *soft specialisation*, and an explicit *communication* channel. Across nine procedurally generated levels, agents explore, trade resources, craft tools, build structures, and fight mobs under controllable coordination demands. By scaling these demands while preserving the underlying world structure, alem enables controlled evaluation of how coordination failures emerge as coordination demands increase. Information-theoretic diagnostics verify that these mechanics require genuine inter-agent dependence rather than added single-agent difficulty [[55](https://arxiv.org/html/2606.08340v1#bib.bib63)] (App. [B.1](https://arxiv.org/html/2606.08340v1#A2.SS1 "B.1 Probing Environment Changes ‣ Appendix B Environment Details ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents")), while our JAX implementation supports billion-step MARL training on a single GPU in under two days (App. [C.3](https://arxiv.org/html/2606.08340v1#A3.SS3 "C.3 Environment Speed ‣ Appendix C Detailed Experimental Results ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents")).

### 3.1 Coordination Types

Following [Malone and Crowston [36]](https://arxiv.org/html/2606.08340v1#bib.bib47), we view coordination as interdependence between activities. In multi-agent systems, these activities correspond to agents’ actions. We characterise the dependencies between coupled actions $A\_{t}^{i}$ and $A\_{t^{\prime}}^{j}$ by their *temporal separation*, $\Delta t=|t-t^{\prime}|$, resulting in a *coordination spectrum* from long-range dependencies to simultaneous joint action (Fig. [2](https://arxiv.org/html/2606.08340v1#S2.F2 "Figure 2 ‣ 2 Background ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents")).

Existing MARL benchmarks typically isolate specific regions of this spectrum: SMAC [[45](https://arxiv.org/html/2606.08340v1#bib.bib48)] emphasises synchronous focus-fire ($\Delta t\approx 0$), Overcooked [[10](https://arxiv.org/html/2606.08340v1#bib.bib14)] tests short-window handovers (small $\Delta t$), and Melting Pot’s Clean Up [[1](https://arxiv.org/html/2606.08340v1#bib.bib15)] targets long-range resource interdependence (large $\Delta t$). alem instantiates this entire spectrum within a single open-ended environment, using procedural generation to vary both the temporal structure of coordination and the number of agents involved (details App. [B.2](https://arxiv.org/html/2606.08340v1#A2.SS2 "B.2 Coordination Tasks ‣ Appendix B Environment Details ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents")).

### 3.2 Procedural Coordination Generation

Existing environments procedurally generate spatial layouts to reduce memorisation and encourage generalisation [[40](https://arxiv.org/html/2606.08340v1#bib.bib21), [37](https://arxiv.org/html/2606.08340v1#bib.bib11), [65](https://arxiv.org/html/2606.08340v1#bib.bib49), [24](https://arxiv.org/html/2606.08340v1#bib.bib46)]. However, if coordination requirements are fixed, agents can still exploit recurring interaction patterns. alem therefore procedurally generates the *coordination structure* itself.

Each episode, eligible entities across tasks such as mining, construction, combat, and crafting (Fig. [1](https://arxiv.org/html/2606.08340v1#S1.F1 "Figure 1 ‣ 1 Introduction ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents")) are independently assigned a coordination type (synchronous or handover) and a required agent count ($2$ to $N$). Synchronous tasks also adopt game-theoretic incentives: *hard* tasks act as pure coordination problems requiring joint action for any reward [[46](https://arxiv.org/html/2606.08340v1#bib.bib50)], while *soft* tasks function as assurance games, balancing a safe solo payoff against a larger joint-action bonus [[50](https://arxiv.org/html/2606.08340v1#bib.bib51)] (details App. [B.2](https://arxiv.org/html/2606.08340v1#A2.SS2 "B.2 Coordination Tasks ‣ Appendix B Environment Details ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents")).

### 3.3 Soft Specialisation and Difficulty Scaling

Instead of enforcing rigid division of labour via hard role gates [[1](https://arxiv.org/html/2606.08340v1#bib.bib15), [40](https://arxiv.org/html/2606.08340v1#bib.bib21)], alem uses *soft specialisation*. Any agent can attempt any role-gated action, but specialists succeed deterministically ($\eta\_{\text{spec}}=1$) while non-specialists succeed with probability $\eta\_{\text{non}}=1-\alpha$. This rewards effective role allocation while preserving the capacity for online adaptation.

We scale overall coordination difficulty with the single scalar $\alpha\in[0,1]$. Because world generation in JAX is deterministic, varying $\alpha$ preserves the spatial layout and frequency of coordination opportunities (Fig. [3](https://arxiv.org/html/2606.08340v1#S3.F3 "Figure 3 ‣ 3.3 Soft Specialisation and Difficulty Scaling ‣ 3 alem: An Open-Ended World for Multi-Agent Coordination ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents")), cleanly isolating execution difficulty from world variation. Higher $\alpha$ tightens execution constraints: it increases the probability of $N$-agent requirements, shortens handover windows, increases solo failure rates on soft tasks, and lowers non-specialist efficiency. We evaluate on Easy ($\alpha=0.3$), Medium ($\alpha=0.6$), and Hard ($\alpha=0.9$) settings (parameters detailed in App. [B.3](https://arxiv.org/html/2606.08340v1#A2.SS3 "B.3 Coordination Difficulty ‣ Appendix B Environment Details ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents")).

![Refer to caption](https://arxiv.org/html/2606.08340v1/alem_diff_easy.png) ![Refer to caption](https://arxiv.org/html/2606.08340v1/alem_diff_medium.png) ![Refer to caption](https://arxiv.org/html/2606.08340v1/alem_diff_hard.png) 
  
Easy ($\alpha{=}0.30$) Medium ($\alpha{=}0.60$) Hard ($\alpha{=}0.90$)

Figure 3: 
alem difficulty settings and MARL baselines.
Left: The same generated world under Easy, Medium, and Hard settings, with coordination sites marked as $\bullet$ 2-agent sync, $\blacksquare$ all-agent sync, and $\blacklozenge$ handover. Increasing $\alpha$ preserves the layout and coordination opportunities, but tightens execution constraints through more all-agent requirements, shorter handover windows, and stronger specialisation. Right: 1B-step trained MARL baseline performance, reported as mean percentage of max achievable reward with 95% CIs and decomposed into coordination (dark) and base (light) reward.

### 3.4 Environment Interface

#### 3.4.1 RL Interface

##### Observation space.

alem exposes both pixel (see Fig. [6](https://arxiv.org/html/2606.08340v1#A2.F6 "Figure 6 ‣ Appendix B Environment Details ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents"), App [B](https://arxiv.org/html/2606.08340v1#A2 "Appendix B Environment Details ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents")) and symbolic observations of the underlying state. Each egocentric observation includes a local map, inventory, and a teammate dashboard (health, specialisation, requested resources, off-screen direction, and recent communications). Beyond Craftax-Coop, alem explicitly embeds communication messages, coordination states, including soft/hard requirements, handover countdowns, and multi-agent mob targets.

##### Action space.

Agents act in a 60-dimensional discrete action space encompassing environment manipulation, crafting, exploration, and combat. To facilitate teamwork, agents can issue persistent resource requests (active for up to 10 timesteps), execute teammate-targeted giving, and broadcast discrete messages. The primary Do action is contextual, it supports both environment interaction and direct agent-to-agent mechanics, such as reviving downed teammates or triggering friendly fire. We apply conservative action masking to filter strictly infeasible choices.

##### Achievements and rewards.

Following prior environments [[37](https://arxiv.org/html/2606.08340v1#bib.bib11), [40](https://arxiv.org/html/2606.08340v1#bib.bib21)], alem pairs a dense health reward with sparse, first-time rewards for completing a hierarchy of achievements. We introduce 27 novel coordination achievements spanning synchronised mining, temporal handovers, cooperative construction, and coordinated combat. Rewards are individual by default; coordination bonuses are awarded only to participating agents by default (details in App. [C.6](https://arxiv.org/html/2606.08340v1#A3.SS6 "C.6 Rewards and Achievements ‣ Appendix C Detailed Experimental Results ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents")).

#### 3.4.2 Text-based Language Interface

To evaluate language agents, we expose a structured text interface mapped directly to the underlying environment (details in App. [C.5](https://arxiv.org/html/2606.08340v1#A3.SS5 "C.5 Text-based Language Interface Details ‣ Appendix C Detailed Experimental Results ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents")). At each timestep, models receive a textual state containing recent observation-action history, teammate messages, a private scratchpad, and visible coordination constraints, together with explicit action affordances. Models must return a structured response containing exactly one valid action and, optionally, reasoning, communication, and scratchpad fields. This parsed action is then mapped to the corresponding discrete environment step. A sample prompt is provided in App. [C.7](https://arxiv.org/html/2606.08340v1#A3.SS7 "C.7 Prompt Examples ‣ Appendix C Detailed Experimental Results ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").

### 3.5 MARL Baselines

We train IPPO [[12](https://arxiv.org/html/2606.08340v1#bib.bib42)], MAPPO [[66](https://arxiv.org/html/2606.08340v1#bib.bib43)], PQN-VDN [[16](https://arxiv.org/html/2606.08340v1#bib.bib44)], and HyperMARL-IPPO [[56](https://arxiv.org/html/2606.08340v1#bib.bib45)] to provide reference points for zero-shot LLM performance and to verify that the difficulty settings meaningfully affect learned policies. Figure [3](https://arxiv.org/html/2606.08340v1#S3.F3 "Figure 3 ‣ 3.3 Soft Specialisation and Difficulty Scaling ‣ 3 alem: An Open-Ended World for Multi-Agent Coordination ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents") reports 1B-step performance (hyperparameter sweeps detailed in App. [C.1](https://arxiv.org/html/2606.08340v1#A3.SS1 "C.1 Algorithm Hyperparameters ‣ Appendix C Detailed Experimental Results ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents")). Performance sharply degrades as coordination difficulty increases; even after 3B environment steps, the strongest baseline reaches only 18% of the maximum total reward on the Hard setting (App. [C.4](https://arxiv.org/html/2606.08340v1#A3.SS4 "C.4 Extended MARL Training ‣ Appendix C Detailed Experimental Results ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents")). These results show that alem remains an unsaturated challenge for current MARL methods.

## 4 Experiments

We evaluate 13 modern LLMs in zero-shot homogeneous teams, with 4 trained MARL baselines as reference points. Our goal is to measure coordination in long-horizon, open-ended environments, while separating coordination difficulty from the difficulty of the underlying world. To calibrate this distinction, we compare alem against a single-agent baseline and find that its multi-agent dynamics result in a drop in performance, showing that coordination introduces a distinct layer of difficulty (App. [E.1](https://arxiv.org/html/2606.08340v1#A5.SS1 "E.1 Environment calibration: multi-agent structure adds difficulty beyond the base game. ‣ Appendix E Additional LLM Experiments and Ablations ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents")).

Our experiments ask three questions:
Q1: How well do LLM agents coordinate zero-shot within homogeneous teams?
Q2: How do communication, memory, and reasoning affect coordination?
Q3: How well do agents coordinate in heterogeneous teams composed of different models?

### 4.1 Experimental Setup

##### Evaluation protocol.

We follow a zero-shot evaluation protocol similar to BALROG [[42](https://arxiv.org/html/2606.08340v1#bib.bib27)]. At each timestep, each agent receives the game rules, environment details, local observation, and legal actions in text form through the interface described in Sec. [3.4.2](https://arxiv.org/html/2606.08340v1#S3.SS4.SSS2 "3.4.2 Text-based Language Interface ‣ 3.4 Environment Interface ‣ 3 alem: An Open-Ended World for Multi-Agent Coordination ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents"). By default, agents have scratchpad memory, broadcast communication, and a text history containing the last eight observations and actions. Success in alem requires spatial reasoning, long-horizon planning, tracking crafting dependencies, memory, effective communication, and coordination under partial observability.

##### Metrics.

Our primary metric is normalised episode return, reported as a percentage of the maximum achievable reward. Following previous Craftax-based environments [[40](https://arxiv.org/html/2606.08340v1#bib.bib21), [37](https://arxiv.org/html/2606.08340v1#bib.bib11)], each agent’s cumulative reward is normalised by the maximum reward for the relevant category and averaged across agents. We report Base%, Coord.%, and Total%, each normalised independently, so Total% is not the sum of Base% and Coord.%. Reward bounds are given in App. [C.2](https://arxiv.org/html/2606.08340v1#A3.SS2 "C.2 Additional Metrics ‣ Appendix C Detailed Experimental Results ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").

##### Models.

We evaluate 13 modern language models. Closed-source models are evaluated via their respective APIs (GPT-5.4 [[41](https://arxiv.org/html/2606.08340v1#bib.bib58)] and Gemini 3.1 Pro [[18](https://arxiv.org/html/2606.08340v1#bib.bib57)]). Open-weight models are served with vLLM [[32](https://arxiv.org/html/2606.08340v1#bib.bib59)] and include Gemma-4-E4B-it/26B-A4B-it/31B-it [[19](https://arxiv.org/html/2606.08340v1#bib.bib55)], Llama-3.1-8B-Instruct and Llama-3.3-70B-Instruct [[21](https://arxiv.org/html/2606.08340v1#bib.bib52)], Qwen-3.5-9B/27B/35B-A3B/122B-A10B [[54](https://arxiv.org/html/2606.08340v1#bib.bib53)], and Qwen-3.6-27B/35B-A3B [[43](https://arxiv.org/html/2606.08340v1#bib.bib54)]. Where applicable, reasoning is enabled, with proprietary models configured to high-reasoning settings. We run 20 seeds per difficulty for open-weight models and 10 for closed-source models (due to API costs), reporting cross-seed means with 95% stratified bootstrap confidence intervals using the rliable library [[2](https://arxiv.org/html/2606.08340v1#bib.bib56)].

##### Agent harness.

Language models are evaluated with the agent harness described in Sec. [3.4.2](https://arxiv.org/html/2606.08340v1#S3.SS4.SSS2 "3.4.2 Text-based Language Interface ‣ 3.4 Environment Interface ‣ 3 alem: An Open-Ended World for Multi-Agent Coordination ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents") and App. [C.5](https://arxiv.org/html/2606.08340v1#A3.SS5 "C.5 Text-based Language Interface Details ‣ Appendix C Detailed Experimental Results ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents"). The harness follows a reason-then-act paradigm similar to ReAct [[64](https://arxiv.org/html/2606.08340v1#bib.bib61)], but generates a new prompt at each step focusing the evaluation on the reasoning and coordination capabilities of the model instead of confounding factors such as context length or compaction strategy.

### 4.2 Results

Table 1: Zero-shot coordination of homogeneous teams in alem.
Performance across Easy, Medium, and Hard difficulties, with trained MARL baselines as reference. Models are ordered by Total% on Hard. We report mean episode return with 95% stratified bootstrap confidence intervals. Base%, Coord.%, and Total% are normalised independently by the maximum achievable reward in their categories (Total% is not a direct sum). MARL 100M and 1B are environment training steps, not model parameters; for each compute budget, we report the best-performing MARL algorithm.

Easy
Medium
Hard


Method
Base%
Coord.%
Total%
Base%
Coord.%
Total%
Base%
Coord.%
Total%


gemini-3.1-pro-high
18.1 [14.2,21.8]
18.0 [12.5,23.9]
18.1 [14.8,21.0]
15.1 [12.3,18.0]
23.4 [20.3,27.0]
18.6 [16.3,21.3]
13.8 [11.2,16.6]
17.5 [13.5,21.5]
15.4 [13.2,17.8]


gpt-5.4-high
14.1 [11.5,16.7]
7.0 [3.6,10.8]
11.1 [9.2,13.0]
10.0 [6.5,13.5]
4.0 [2.1,5.7]
7.4 [4.9,9.8]
11.8 [8.0,15.3]
4.2 [2.0,6.6]
8.6 [5.9,10.8]


gemma-4-31b-it
9.6 [7.4,11.9]
8.6 [6.4,11.0]
9.2 [7.6,10.8]
9.7 [8.0,11.3]
10.6 [8.3,13.0]
10.1 [9.0,11.1]
7.3 [5.9,8.9]
8.8 [6.9,10.9]
8.0 [6.7,9.1]


gemma-4-26b-a4b-it
4.3 [2.6,6.2]
7.3 [5.0,9.6]
5.6 [3.8,7.4]
4.1 [2.8,5.3]
6.1 [3.8,8.3]
4.9 [3.3,6.4]
5.9 [5.3,6.6]
9.5 [7.7,11.3]
7.4 [6.6,8.2]


qwen3.6-27b
5.1 [3.4,6.9]
4.7 [2.9,6.7]
4.9 [3.4,6.5]
7.0 [5.4,8.8]
6.1 [4.3,7.9]
6.6 [5.4,7.9]
7.5 [5.7,9.5]
7.2 [5.4,8.9]
7.4 [6.1,8.8]


qwen3.6-35b-a3b
2.8 [1.4,4.5]
4.4 [2.3,6.7]
3.5 [1.8,5.3]
6.3 [5.0,7.9]
9.7 [7.7,11.6]
7.7 [6.3,9.1]
6.3 [4.8,8.1]
8.7 [6.7,10.7]
7.3 [6.0,8.6]


qwen3.5-27b
4.8 [3.1,6.9]
7.0 [4.9,9.2]
5.7 [4.1,7.4]
4.1 [2.4,6.0]
6.5 [3.8,9.3]
5.1 [3.1,7.2]
5.1 [3.5,7.1]
8.1 [5.8,10.4]
6.4 [4.8,7.9]


qwen3.5-122b-a10b
5.4 [4.3,6.5]
8.4 [6.6,10.0]
6.6 [5.5,7.7]
5.0 [4.6,5.3]
9.6 [7.5,11.5]
6.9 [6.0,7.9]
4.7 [3.9,5.5]
8.3 [6.2,10.6]
6.2 [5.0,7.4]


qwen3.5-35b-a3b
1.9 [1.0,2.9]
4.2 [2.1,6.3]
2.9 [1.6,4.2]
2.2 [1.4,3.1]
4.7 [2.7,6.8]
3.3 [2.0,4.6]
2.9 [2.2,3.7]
5.3 [3.4,7.5]
4.0 [2.7,5.2]


qwen3.5-9b
2.7 [2.0,3.4]
7.0 [4.6,9.5]
4.6 [3.2,5.9]
2.7 [1.6,4.0]
4.7 [2.7,7.1]
3.6 [2.2,4.9]
2.6 [1.7,3.4]
5.0 [2.9,7.1]
3.6 [2.3,4.8]


gemma-4-e4b-it
2.4 [1.9,2.9]
4.6 [3.0,6.3]
3.3 [2.6,4.1]
2.4 [1.9,2.8]
3.1 [1.7,4.5]
2.7 [2.0,3.3]
2.3 [1.9,2.7]
3.2 [1.9,4.5]
2.7 [2.1,3.3]


llama-3.3-70b-instruct
1.6 [1.1,2.3]
5.0 [3.2,6.8]
3.1 [2.2,4.0]
1.1 [0.8,1.5]
2.9 [1.4,4.4]
1.9 [1.3,2.5]
1.4 [1.1,1.7]
4.2 [2.7,5.8]
2.6 [1.8,3.3]


llama-3.1-8b-instruct
1.4 [1.1,1.7]
0.0 [0.0,0.0]
0.8 [0.6,1.0]
1.4 [1.1,1.6]
0.0 [0.0,0.0]
0.8 [0.6,0.9]
1.3 [1.0,1.5]
0.3 [0.0,0.9]
0.9 [0.7,1.2]


Across LLM agents
5.7
6.6
6.1
5.5
7.0
6.1
5.6
6.9
6.2


MARL 100M
11.6 [11.1,12.1]
20.0 [19.0,21.4]
15.1 [14.6,15.6]
12.1 [11.5,12.8]
17.0 [16.2,18.0]
14.2 [13.5,15.0]
12.2 [11.6,12.8]
5.6 [5.1,6.2]
9.4 [8.9,9.9]


MARL 1B
21.0 [19.4,22.6]
22.0 [20.8,23.1]
21.4 [20.9,21.9]
20.1 [19.6,20.7]
19.8 [19.4,20.2]
19.9 [19.5,20.5]
13.6 [12.8,14.2]
17.6 [16.9,18.2]
15.3 [14.9,15.7]

#### 4.2.1 Q1: How well do LLM agents coordinate zero-shot within homogeneous teams?

##### alem is unsolved but separates models.

Table [1](https://arxiv.org/html/2606.08340v1#S4.T1 "Table 1 ‣ 4.2 Results ‣ 4 Experiments ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents") shows that alem remains far from saturated by both zero-shot LLMs and trained MARL baselines, while separating models across a broad performance range. On Easy, Total% spans from $0.8\%$ for Llama-3.1-8B-Instruct to $18.1\%$ for Gemini-3.1-Pro-High; on Hard, LLMs average only $6.2\%$ Total%. Yet the top model, Gemini-3.1-Pro-High, reaches $17.5\%$ Coord.% on Hard, comparable to the $17.6\%$ Coord.% of MARL agents trained for one billion environment steps. Many models also survive for long episodes despite low returns (Fig. [4(c)](https://arxiv.org/html/2606.08340v1#S4.F4.sf3 "In Figure 4 ‣ Most LLM agents do not exploit the difficulty axis. ‣ 4.2.1 Q1: How well do LLM agents coordinate zero-shot within homogeneous teams? ‣ 4.2 Results ‣ 4 Experiments ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents")), suggesting that the main bottleneck is not basic survival or interface parsing (parsing rates in Fig. [13](https://arxiv.org/html/2606.08340v1#A3.F13 "Figure 13 ‣ C.2 Additional Metrics ‣ Appendix C Detailed Experimental Results ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents"), App. [C.2](https://arxiv.org/html/2606.08340v1#A3.SS2 "C.2 Additional Metrics ‣ Appendix C Detailed Experimental Results ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents")), but converting interaction time into coordinated progress.

##### Base competence does not guarantee coordination.

Decomposing performance reveals failures hidden by aggregate scores. GPT-5.4-High illustrates this separation: despite achieving the second-highest Base% across difficulties ($14.1\%,10.0\%,11.8\%$), its Coord.% ($7.0\%,4.0\%,4.2\%$) remains much lower, lagging behind smaller models such as Gemma-4-26B-A4B-it on Hard with non-overlapping $95\%$ CIs. Fig. [4(b)](https://arxiv.org/html/2606.08340v1#S4.F4.sf2 "In Figure 4 ‣ Most LLM agents do not exploit the difficulty axis. ‣ 4.2.1 Q1: How well do LLM agents coordinate zero-shot within homogeneous teams? ‣ 4.2 Results ‣ 4 Experiments ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents") shows that GPT-5.4-High has the highest trade count ($48.9$) but relatively few revives ($3.4$), whereas Gemini-3.1-Pro-High is more balanced ($29.3$ trades, $6.9$ revives). Thus, local cooperative actions and base-task progress do not necessarily translate into sustained coordination. Conversely, Qwen3.5-122B-A10B and Gemma-4-26B-A4B-it achieve higher Coord.% than Base%, indicating that coordination can be exploited even when general competence is limited.

##### Most LLM agents do not exploit the difficulty axis.

Trained MARL agents degrade as coordination difficulty increases (Sec. [3.3](https://arxiv.org/html/2606.08340v1#S3.SS3 "3.3 Soft Specialisation and Difficulty Scaling ‣ 3 alem: An Open-Ended World for Multi-Agent Coordination ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents")), but aggregate LLM Total% remains nearly flat at $\approx 6\%$ across Easy, Medium, and Hard (Tbl. [1](https://arxiv.org/html/2606.08340v1#S4.T1 "Table 1 ‣ 4.2 Results ‣ 4 Experiments ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents")). This suggests that most LLM agents do not coordinate reliably enough for the difficulty parameter to strongly affect aggregate performance. Achievement-tier coverage supports this interpretation (Fig. [9](https://arxiv.org/html/2606.08340v1#A3.F9 "Figure 9 ‣ Hyperparameter sweeps. ‣ C.1 Algorithm Hyperparameters ‣ Appendix C Detailed Experimental Results ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents")), as most LLMs fail to progress beyond Basic achievements regardless of difficulty, whereas stronger agents, such as MARL 1B and Gemini-3.1-Pro-High, show clearer degradation at intermediate and advanced tiers.

![Refer to caption](https://arxiv.org/html/2606.08340v1/main_diagnostic_A_coord_new.png)


(a) Coordination breakdown

![Refer to caption](https://arxiv.org/html/2606.08340v1/main_diagnostic_D_coop_new.png)


(b) Cooperative events

(c) Survival vs. reward

Figure 4: 
Diagnostic breakdown of zero-shot homogeneous team failures in alem.
(A) Coordination reward coverage by coordination type, averaged across difficulties. Cell values report the percentage of the maximum attainable reward within each coordination category.
(B) Local cooperative event counts per evaluation across all difficulties.
(C) Mean episode length versus Total% reward on Medium difficulty, showing that longer survival does not necessarily translate into progression or coordinated achievements. Marker size and shape denote model parameter count and architecture type, respectively. MARL 1B is shown as a separated reference row in (A,B) and as a diamond in (C).

##### Coordination failures differ across task structure.

The task-level breakdown in Fig. [4(a)](https://arxiv.org/html/2606.08340v1#S4.F4.sf1 "In Figure 4 ‣ Most LLM agents do not exploit the difficulty axis. ‣ 4.2.1 Q1: How well do LLM agents coordinate zero-shot within homogeneous teams? ‣ 4.2 Results ‣ 4 Experiments ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents") shows that coordination is not a single axis. Handover tasks are comparatively more accessible because they allow temporal slack, as one agent can initiate an opportunity and another can complete it within a bounded time window. By contrast, Synchronous-Hard tasks require agents to identify a shared target, navigate to compatible positions, communicate intent, and act in the same timestep. This strict synchronisation compounds the spatial reasoning challenges already observed in single-agent LLMs [[42](https://arxiv.org/html/2606.08340v1#bib.bib27)]. The results reflect this difficulty, as Gemini-3.1-Pro-High leads LLMs on synchronous-hard coordination with only $18\%$ coverage, while the next-best tested LLMs, Gemma-4-31B-it and Qwen3.6-35B-A3B, reach $9\%$.

##### Pretrained priors offer advantages in sparse, multi-stage coordination.

Construction tasks require long-horizon planning in addition to coordinated execution. Agents must collect resources, progress through a technology chain, converge on a shared site, and execute a synchronised build. As shown in Fig. [4(a)](https://arxiv.org/html/2606.08340v1#S4.F4.sf1 "In Figure 4 ‣ Most LLM agents do not exploit the difficulty axis. ‣ 4.2.1 Q1: How well do LLM agents coordinate zero-shot within homogeneous teams? ‣ 4.2 Results ‣ 4 Experiments ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents"), construction coverage is at most $2\%$ for every LLM except Gemini-3.1-Pro-High ($7\%$), and $0\%$ for the MARL 1B reference. This suggests that sparse, long-horizon coordination is difficult to discover through trial-and-error at this MARL compute budget, while pretrained priors may give stronger LLMs a limited advantage.

##### Scale alone does not explain coordination performance.

Across open-weight models, performance is not monotonic in parameter count. Even within model families such as Gemma-4 and Qwen-3.5/3.6, coordination performance does not scale linearly across dense and mixture-of-experts variants (Figs. [4(a)](https://arxiv.org/html/2606.08340v1#S4.F4.sf1 "In Figure 4 ‣ Most LLM agents do not exploit the difficulty axis. ‣ 4.2.1 Q1: How well do LLM agents coordinate zero-shot within homogeneous teams? ‣ 4.2 Results ‣ 4 Experiments ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents"), [4(c)](https://arxiv.org/html/2606.08340v1#S4.F4.sf3 "In Figure 4 ‣ Most LLM agents do not exploit the difficulty axis. ‣ 4.2.1 Q1: How well do LLM agents coordinate zero-shot within homogeneous teams? ‣ 4.2 Results ‣ 4 Experiments ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents")). This suggests that coordination depends on factors beyond raw scale, including possibly post-training, reasoning, and how effectively agents use communication.

(a) Gemini-3.1-Pro

(b) Gemma-4-31B

(c) Same-family team

(d) Cross-family team

Figure 5: Harness and team-composition ablations on Hard.
Left: we ablate communication, scratchpad memory, and reasoning for Gemini-3.1-Pro-High and Gemma-4-31B-it. Bars show Coord.% and Base%, each normalised by the maximum achievable reward in that category, with 95% bootstrap confidence intervals. Right: we compare heterogeneous teams against their constituent homogeneous baselines. Bars show mean Total% with 95% stratified bootstrap confidence intervals; the dashed line marks the average homogeneous-team baseline, and the text annotation reports the difference relative to that baseline.

#### 4.2.2 Q2: How do communication, memory, and reasoning affect coordination?

We next ablate three components of the LLM agent harness: scratchpad memory, communication, and reasoning (Sec. [4.1](https://arxiv.org/html/2606.08340v1#S4.SS1.SSS0.Px4 "Agent harness. ‣ 4.1 Experimental Setup ‣ 4 Experiments ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents")). We run these ablations on the strongest closed-source and open-weight models from Sec. [4.2.1](https://arxiv.org/html/2606.08340v1#S4.SS2.SSS1 "4.2.1 Q1: How well do LLM agents coordinate zero-shot within homogeneous teams? ‣ 4.2 Results ‣ 4 Experiments ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents"), Gemini-3.1-Pro-High and Gemma-4-31B-it, on the Hard setting.

##### Communication is critical for coordination.

Removing communication produces the largest drop in coordination performance for both models (Fig. [5](https://arxiv.org/html/2606.08340v1#S4.F5 "Figure 5 ‣ Scale alone does not explain coordination performance. ‣ 4.2.1 Q1: How well do LLM agents coordinate zero-shot within homogeneous teams? ‣ 4.2 Results ‣ 4 Experiments ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents")). Gemini-3.1-Pro-High falls from $17.5$ to $5.3$ Coord.%, while Gemma-4-31B-it falls from $8.8$ to $3.8$ Coord.%. The corresponding changes in Base% are smaller and less consistent (Gemini $13.8\to 11.6$, Gemma $7.3\to 8.3$), suggesting that communication primarily supports coordination rather than general environment progress. Message statistics support this interpretation: agents frequently address specific teammates (Gemini $43.4\%$, Gemma $44.1\%$ of messages) and often use imperative verbs (Gemini $73.7\%$, Gemma $52.2\%$). Agents therefore appear to use communication to broadcast intent, assign actions, and align timing. Without communication, they can still make base progress, but struggle to coordinate effectively (qualitative analysis in App. [I](https://arxiv.org/html/2606.08340v1#A9 "Appendix I Inter-agent communication style ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents")).

##### Scratchpad memory helps when used for planning.

The memory ablation is model-dependent. Removing scratchpad memory lowers Gemini-3.1-Pro-High’s mean Coord.% from $17.5$ to $13.1$, while leaving Base% nearly unchanged ($13.8\to 13.6$). For Gemma-4-31B-it, the mean changes are small in Coord.% ($8.8\to 8.6$) and Base% ($7.3\to 8.6$), with overlapping confidence intervals. This suggests that scratchpad memory is not uniformly useful; its effect depends on how models use it. Qualitative analysis provides a possible explanation (App. [G](https://arxiv.org/html/2606.08340v1#A7 "Appendix G Memory entry usage: detailed analysis ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents")). Gemini uses the scratchpad as a *forward-looking planner*: $71.5\%$ of entries are multi-line, $75.3\%$ contain future-oriented terms such as *will*, *next*, *then*, or *plan*, and $12.4\%$ contain explicit turn-indexed action sequences such as T9:Do, T10:Move West, and T11:Give wood to Agent 1. In contrast, Gemma’s scratchpads are mostly one-line state summaries (average $1.08$ lines), with frequent coordinate references ($98.8\%$) and status information that is often already present in the next observation. These patterns suggest that scratchpad memory appears more helpful when models use it to preserve plans or commitments across turns, rather than to restate the current state.

##### Reasoning supports both coordination and base progress.

Reasoning is the only ablation that lowers both Base% and Coord.% for both models (Fig. [5](https://arxiv.org/html/2606.08340v1#S4.F5 "Figure 5 ‣ Scale alone does not explain coordination performance. ‣ 4.2.1 Q1: How well do LLM agents coordinate zero-shot within homogeneous teams? ‣ 4.2 Results ‣ 4 Experiments ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents")). For Gemini-3.1-Pro-High, the ablation is partial because the API only allows us to reduce reasoning, not disable it. Even so, Coord.% falls from $17.5$ to $9.7$ and Base% from $13.8$ to $10.3$. For Gemma-4-31B-it, disabling reasoning reduces Coord.% from $8.8$ to $5.5$ and Base% from $7.3$ to $4.6$.

Qualitative traces suggest different failure modes (App. [H](https://arxiv.org/html/2606.08340v1#A8 "Appendix H Reasoning ablation: detailed analysis ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents")). For Gemini, reduced reasoning removes much of the planner-like behaviour: scratchpad length falls from $207$ to $69$ characters, turn-indexed plans nearly disappear ($12.4\%\to 0.1\%$), and messages become shorter ($132\to 53$ characters). Gemma instead writes longer scratchpads without reasoning ($153\to 228$ characters), often near the $\sim\!1000$-character cap, suggesting that the scratchpad partly substitutes for the removed reasoning. This compensation is incomplete, as both Base% and Coord.% still decrease.

#### 4.2.3 Q3: How well do agents coordinate in teams composed of different models?

We evaluate heterogeneous teams on Hard in two settings: a same-family Gemma team composed of Gemma-4-E4B-it, Gemma-4-26B-A4B-it, and Gemma-4-31B-it, and a cross-family team composed of the three strongest LLM agents: Gemma-4-31B-it, GPT-5.4-High, and Gemini-3.1-Pro-High.

##### Heterogeneous teams perform near the homogeneous-team average.

Fig. [5](https://arxiv.org/html/2606.08340v1#S4.F5 "Figure 5 ‣ Scale alone does not explain coordination performance. ‣ 4.2.1 Q1: How well do LLM agents coordinate zero-shot within homogeneous teams? ‣ 4.2 Results ‣ 4 Experiments ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents") shows that heterogeneous teams perform close to the average of their corresponding homogeneous teams. The same-family Gemma team is slightly above this average ($+0.1$ Total%), while the cross-family team is slightly below it ($-0.1$ Total%). Thus, in the tested settings, heterogeneous teams neither collapse to the weakest member nor inherit the performance of the strongest one. This suggests that adding a stronger model to a team is not sufficient to lift team performance. Mixed teams may face additional coordination problems, as agents must align their communication conventions, planning horizons, and actions with teammates that reason and communicate differently.

##### Summary.

Overall, alem reveals coordination as a bottleneck distinct from base-task performance. Communication matters most among the ablated harness components, and initial heterogeneous-team experiments suggest that mixed teams do not automatically match their strongest member’s performance.

## 5 Related Work

##### Long-horizon and agentic evaluation.

LLMs are increasingly evaluated as agents in long-horizon, open-ended tasks [[14](https://arxiv.org/html/2606.08340v1#bib.bib23), [31](https://arxiv.org/html/2606.08340v1#bib.bib4), [62](https://arxiv.org/html/2606.08340v1#bib.bib5), [11](https://arxiv.org/html/2606.08340v1#bib.bib6)]. Recent benchmarks test models in complex environments requiring spatial reasoning, exploration, planning, and tool use [[42](https://arxiv.org/html/2606.08340v1#bib.bib27), [67](https://arxiv.org/html/2606.08340v1#bib.bib30), [68](https://arxiv.org/html/2606.08340v1#bib.bib33), [27](https://arxiv.org/html/2606.08340v1#bib.bib34)]. Procedural generation is especially useful because it reduces memorisation, mitigates contamination, and supports scalable variation across tasks [[42](https://arxiv.org/html/2606.08340v1#bib.bib27), [48](https://arxiv.org/html/2606.08340v1#bib.bib12)]. alem brings these principles to multi-agent evaluation, where agents must also infer and satisfy diverse coordination demands.

##### Multi-Agent LLM collaboration.

Multi-agent LLMs have shown promise in code generation, debate, and collaborative reasoning [[28](https://arxiv.org/html/2606.08340v1#bib.bib65), [14](https://arxiv.org/html/2606.08340v1#bib.bib23)]. Recent benchmarks evaluate LLM agents in collaborative settings [[69](https://arxiv.org/html/2606.08340v1#bib.bib25), [53](https://arxiv.org/html/2606.08340v1#bib.bib26), [22](https://arxiv.org/html/2606.08340v1#bib.bib29)], but typically use shorter-horizon tasks where roles, goals, or interaction structure are specified in advance. In contrast, alem tests whether LLM agents can infer and execute changing coordination requirements in a long-horizon open-ended world.

##### MARL and coordination.

MARL benchmarks often focus on particular forms of coordination: SMAC [[45](https://arxiv.org/html/2606.08340v1#bib.bib48)] emphasises synchronous focus-fire, Overcooked [[10](https://arxiv.org/html/2606.08340v1#bib.bib14)] tests short-window handovers, and Melting Pot [[1](https://arxiv.org/html/2606.08340v1#bib.bib15)] includes long-range resource interdependence. alem builds on Craftax-Coop [[40](https://arxiv.org/html/2606.08340v1#bib.bib21)], but turns coordination into an explicit, procedural, and controllable part of the environment: tasks are sampled across a coordination spectrum (Fig. [2](https://arxiv.org/html/2606.08340v1#S2.F2 "Figure 2 ‣ 2 Background ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents")), agents use soft rather than hard specialisation, communication is explicit, and difficulty can be scaled. We further use information-theoretic diagnostics [[55](https://arxiv.org/html/2606.08340v1#bib.bib63)] to verify that our environment demands genuine multi-agent interdependence (App. [B.1](https://arxiv.org/html/2606.08340v1#A2.SS1 "B.1 Probing Environment Changes ‣ Appendix B Environment Details ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents")).

## 6 Conclusions

We introduce alem, a JAX-based benchmark for long-horizon, open-ended multi-agent coordination. Our zero-shot evaluations of 13 LLMs alongside trained MARL baselines show that coordination is a distinct bottleneck for current agents, base-task competence does not guarantee coordinated progress, and communication has the largest effect on coordinated behaviour. By exposing failure modes across communication, memory, reasoning, and team composition, alem makes coordination measurable and provides a controlled testbed for developing agents that coordinate effectively.

##### Limitations and Future Work.

Our evaluation focuses on text-based LLM agents, leaving Vision-Language Models (VLMs) and Claude-family models for future work. API costs limit evaluations of proprietary models (GPT and Gemini) to 10 seeds per difficulty. Future work can use alem to study stronger agent harnesses, cross-episode memory, and lifelong learning in interactive multi-agent worlds.

## 7 Acknowledgements

We thank the Gemini Academic Program, the Edinburgh ELM Platform, and the Edinburgh International Data Facility (EIDF) for their support. We also thank Bassel Al Omari, Samuel Garcin, Raul Steleac, Benjamin Sanati, and Leonard Hinckeldey for insightful discussions and feedback on this work. Aidan Scannell was supported by the UK Engineering and Physical Sciences Research Council (EPSRC, grant EP/W002876/1). Andras Szecsenyi and Cameron Barker were funded by EPSRC through PhD studentships within the CDT in Machine Learning Systems, hosted by the School of Informatics, University of Edinburgh (EP/Y03516X/1). Henry Gouk was supported by the Royal Academy of Engineering under the Research Fellowship programme.

## References

- [1]
  J. P. Agapiou, A. S. Vezhnevets, E. A. Duéñez-Guzmán, J. Matyas, Y. Mao, P. Sunehag, R. Köster, U. Madhushani, K. Kopparapu, R. Comanescu, et al. (2022)
  Melting pot 2.0.
  arXiv preprint arXiv:2211.13746.
  Cited by: [Table 2](https://arxiv.org/html/2606.08340v1#A1.T2.11.1.1.1.1.1.1.6.1 "In Appendix A alem’s Place Among Existing Environments ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents"),
  [§3.1](https://arxiv.org/html/2606.08340v1#S3.SS1.p2.1 "3.1 Coordination Types ‣ 3 alem: An Open-Ended World for Multi-Agent Coordination ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents"),
  [§3.3](https://arxiv.org/html/2606.08340v1#S3.SS3.p1.1 "3.3 Soft Specialisation and Difficulty Scaling ‣ 3 alem: An Open-Ended World for Multi-Agent Coordination ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents"),
  [§5](https://arxiv.org/html/2606.08340v1#S5.SS0.SSS0.Px3.p1.1 "MARL and coordination. ‣ 5 Related Work ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").
- [2]
  R. Agarwal, M. Schwarzer, P. S. Castro, A. Courville, and M. G. Bellemare (2021)
  Deep reinforcement learning at the edge of the statistical precipice.
  Advances in Neural Information Processing Systems.
  Cited by: [§4.1](https://arxiv.org/html/2606.08340v1#S4.SS1.SSS0.Px3.p1.1 "Models. ‣ 4.1 Experimental Setup ‣ 4 Experiments ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").
- [3]
  S. Agashe, Y. Fan, A. Reyna, and X. E. Wang (2025)
  Llm-coordination: evaluating and analyzing multi-agent coordination abilities in large language models.
  In Findings of the Association for Computational Linguistics: NAACL 2025,
  pp. 8038–8057.
  Cited by: [§1](https://arxiv.org/html/2606.08340v1#S1.p2.1 "1 Introduction ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").
- [4]
  N. Bard, J. N. Foerster, S. Chandar, N. Burch, M. Lanctot, H. F. Song, E. Parisotto, V. Dumoulin, S. Moitra, E. Hughes, et al. (2020)
  The hanabi challenge: a new frontier for ai research.
  Artificial Intelligence 280, pp. 103216.
  Cited by: [Table 2](https://arxiv.org/html/2606.08340v1#A1.T2.11.1.1.1.1.1.1.5.1 "In Appendix A alem’s Place Among Existing Environments ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").
- [5]
  M. G. Bellemare, Y. Naddaf, J. Veness, and M. Bowling (2013)
  The arcade learning environment: an evaluation platform for general agents.
  Journal of artificial intelligence research 47, pp. 253–279.
  Cited by: [§1](https://arxiv.org/html/2606.08340v1#S1.p2.1 "1 Introduction ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").
- [6]
  JAX: composable transformations of Python+NumPy programs
  External Links: [Link](http://github.com/jax-ml/jax)
  Cited by: [§1](https://arxiv.org/html/2606.08340v1#S1.p3.1 "1 Introduction ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").
- [7]
  N. Brown and T. Sandholm (2018)
  Superhuman ai for heads-up no-limit poker: libratus beats top professionals.
  Science 359 (6374), pp. 418–424.
  Cited by: [§1](https://arxiv.org/html/2606.08340v1#S1.p2.1 "1 Introduction ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").
- [8]
  T. Brown, B. Mann, N. Ryder, M. Subbiah, J. D. Kaplan, P. Dhariwal, A. Neelakantan, P. Shyam, G. Sastry, A. Askell, et al. (2020)
  Language models are few-shot learners.
  Advances in neural information processing systems 33, pp. 1877–1901.
  Cited by: [§1](https://arxiv.org/html/2606.08340v1#S1.p1.1 "1 Introduction ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").
- [9]
  M. Campbell, A. J. Hoane Jr, and F. Hsu (2002)
  Deep blue.
  Artificial intelligence 134 (1-2), pp. 57–83.
  Cited by: [§1](https://arxiv.org/html/2606.08340v1#S1.p2.1 "1 Introduction ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").
- [10]
  M. Carroll, R. Shah, M. K. Ho, T. Griffiths, S. Seshia, P. Abbeel, and A. Dragan (2019)
  On the utility of learning about humans for human-ai coordination.
  Advances in neural information processing systems 32.
  Cited by: [Table 2](https://arxiv.org/html/2606.08340v1#A1.T2.11.1.1.1.1.1.1.4.1 "In Appendix A alem’s Place Among Existing Environments ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents"),
  [§3.1](https://arxiv.org/html/2606.08340v1#S3.SS1.p2.1 "3.1 Coordination Types ‣ 3 alem: An Open-Ended World for Multi-Agent Coordination ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents"),
  [§5](https://arxiv.org/html/2606.08340v1#S5.SS0.SSS0.Px3.p1.1 "MARL and coordination. ‣ 5 Related Work ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").
- [11]
  J. S. Chan, N. Chowdhury, O. Jaffe, J. Aung, D. Sherburn, E. Mays, G. Starace, K. Liu, L. Maksin, T. Patwardhan, A. Madry, and L. Weng (2025)
  MLE-bench: evaluating machine learning agents on machine learning engineering.
  In The Thirteenth International Conference on Learning Representations,
  External Links: [Link](https://openreview.net/forum?id=6s5uXNWGIh)
  Cited by: [§1](https://arxiv.org/html/2606.08340v1#S1.p1.1 "1 Introduction ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents"),
  [§5](https://arxiv.org/html/2606.08340v1#S5.SS0.SSS0.Px1.p1.1 "Long-horizon and agentic evaluation. ‣ 5 Related Work ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").
- [12]
  C. S. De Witt, T. Gupta, D. Makoviichuk, V. Makoviychuk, P. H. Torr, M. Sun, and S. Whiteson (2020)
  Is independent learning all you need in the starcraft multi-agent challenge?.
  arXiv preprint arXiv:2011.09533.
  Cited by: [§3.5](https://arxiv.org/html/2606.08340v1#S3.SS5.p1.1 "3.5 MARL Baselines ‣ 3 alem: An Open-Ended World for Multi-Agent Coordination ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").
- [13]
  J. Devlin, M. Chang, K. Lee, and K. Toutanova (2019)
  Bert: pre-training of deep bidirectional transformers for language understanding.
  In Proceedings of the 2019 conference of the North American chapter of the association for computational linguistics: human language technologies, volume 1 (long and short papers),
  pp. 4171–4186.
  Cited by: [§1](https://arxiv.org/html/2606.08340v1#S1.p1.1 "1 Introduction ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").
- [14]
  Y. Du, S. Li, A. Torralba, J. B. Tenenbaum, and I. Mordatch (2023)
  Improving factuality and reasoning in language models through multiagent debate.
  In Forty-first International Conference on Machine Learning,
  Cited by: [§5](https://arxiv.org/html/2606.08340v1#S5.SS0.SSS0.Px1.p1.1 "Long-horizon and agentic evaluation. ‣ 5 Related Work ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents"),
  [§5](https://arxiv.org/html/2606.08340v1#S5.SS0.SSS0.Px2.p1.1 "Multi-Agent LLM collaboration. ‣ 5 Related Work ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").
- [15]
  B. Ellis, J. Cook, S. Moalla, M. Samvelyan, M. Sun, A. Mahajan, J. Foerster, and S. Whiteson (2023)
  Smacv2: an improved benchmark for cooperative multi-agent reinforcement learning.
  Advances in Neural Information Processing Systems 36, pp. 37567–37593.
  Cited by: [Table 2](https://arxiv.org/html/2606.08340v1#A1.T2.11.1.1.1.1.1.1.3.1 "In Appendix A alem’s Place Among Existing Environments ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").
- [16]
  M. Gallici, M. Fellows, B. Ellis, B. Pou, I. Masmitja, J. N. Foerster, and M. Martin (2025)
  Simplifying deep temporal difference learning.
  In The Thirteenth International Conference on Learning Representations,
  Cited by: [§3.5](https://arxiv.org/html/2606.08340v1#S3.SS5.p1.1 "3.5 MARL Baselines ‣ 3 alem: An Open-Ended World for Multi-Agent Coordination ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").
- [17]
  T. Gessler, T. Dizdarevic, A. Calinescu, B. Ellis, A. Lupu, and J. N. Foerster (2025)
  OvercookedV2: rethinking overcooked for zero-shot coordination.
  In The Thirteenth International Conference on Learning Representations,
  External Links: [Link](https://openreview.net/forum?id=hlvLM3GX8R)
  Cited by: [Table 2](https://arxiv.org/html/2606.08340v1#A1.T2.11.1.1.1.1.1.1.4.1 "In Appendix A alem’s Place Among Existing Environments ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").
- [18]
  Google DeepMind (2026)
  Gemini 3.1 pro model card.
  Note: <https://deepmind.google/models/model-cards/gemini-3-1-pro/>
  Cited by: [§4.1](https://arxiv.org/html/2606.08340v1#S4.SS1.SSS0.Px3.p1.1 "Models. ‣ 4.1 Experimental Setup ‣ 4 Experiments ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").
- [19]
  Google DeepMind (2026)
  Gemma 4 model card.
  Note: <https://ai.google.dev/gemma/docs/core/model_card_4>Accessed: 2026-04-25
  Cited by: [§4.1](https://arxiv.org/html/2606.08340v1#S4.SS1.SSS0.Px3.p1.1 "Models. ‣ 4.1 Experimental Setup ‣ 4 Experiments ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").
- [20]
  T. Grady, K. Parker, I. Zarov, H. Course, C. Taylor, and R. Taylor (2026)
  KellyBench: a benchmark for long-horizon sequential decision making.
  arXiv preprint arXiv:2604.27865.
  Cited by: [§1](https://arxiv.org/html/2606.08340v1#S1.p2.1 "1 Introduction ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").
- [21]
  A. Grattafiori, A. Dubey, A. Jauhri, A. Pandey, A. Kadian, A. Al-Dahle, A. Letman, A. Mathur, A. Schelten, A. Vaughan, et al. (2024)
  The llama 3 herd of models.
  arXiv preprint arXiv:2407.21783.
  Cited by: [§4.1](https://arxiv.org/html/2606.08340v1#S4.SS1.SSS0.Px3.p1.1 "Models. ‣ 4.1 Experimental Setup ‣ 4 Experiments ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").
- [22]
  F. Grötschla, L. Müller, J. Tönshoff, M. Galkin, and B. Perozzi (2025)
  Agentsnet: coordination and collaborative reasoning in multi-agent llms.
  arXiv preprint arXiv:2507.08616.
  Cited by: [§1](https://arxiv.org/html/2606.08340v1#S1.p2.1 "1 Introduction ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents"),
  [§5](https://arxiv.org/html/2606.08340v1#S5.SS0.SSS0.Px2.p1.1 "Multi-Agent LLM collaboration. ‣ 5 Related Work ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").
- [23]
  T. Guo, X. Chen, Y. Wang, R. Chang, S. Pei, N. V. Chawla, O. Wiest, and X. Zhang (2024)
  Large language model based multi-agents: a survey of progress and challenges.
  In Proceedings of the Thirty-Third International Joint Conference on Artificial Intelligence,
  pp. 8048–8057.
  Cited by: [§1](https://arxiv.org/html/2606.08340v1#S1.p1.1 "1 Introduction ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").
- [24]
  D. Hafner (2022)
  Benchmarking the spectrum of agent capabilities.
  In International Conference on Learning Representations,
  External Links: [Link](https://openreview.net/forum?id=1W0z96MFEoH)
  Cited by: [§3.2](https://arxiv.org/html/2606.08340v1#S3.SS2.p1.1 "3.2 Procedural Coordination Generation ‣ 3 alem: An Open-Ended World for Multi-Agent Coordination ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").
- [25]
  L. Hammond, A. Chan, J. Clifton, J. Hoelscher-Obermaier, A. Khan, E. McLean, C. Smith, W. Barfuss, J. Foerster, T. Gavenčiak, et al. (2025)
  Multi-agent risks from advanced ai.
  arXiv preprint arXiv:2502.14143.
  Cited by: [§1](https://arxiv.org/html/2606.08340v1#S1.p1.1 "1 Introduction ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").
- [26]
  E. A. Hansen, D. S. Bernstein, and S. Zilberstein (2004)
  Dynamic programming for partially observable stochastic games.
  In AAAI,
  Vol. 4, pp. 709–715.
  Cited by: [§2](https://arxiv.org/html/2606.08340v1#S2.p1.1 "2 Background ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").
- [27]
  M. He, A. Jain, A. Kumar, V. Tu, S. Bakshi, S. Patro, and N. Rajani (2026)
  $YC-Bench$: Benchmarking ai agents for long-term planning and consistent execution.
  arXiv preprint arXiv:2604.01212.
  Cited by: [§1](https://arxiv.org/html/2606.08340v1#S1.p2.1 "1 Introduction ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents"),
  [§5](https://arxiv.org/html/2606.08340v1#S5.SS0.SSS0.Px1.p1.1 "Long-horizon and agentic evaluation. ‣ 5 Related Work ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").
- [28]
  S. Hong, M. Zhuge, J. Chen, X. Zheng, Y. Cheng, J. Wang, C. Zhang, Z. Wang, S. K. S. Yau, Z. Lin, et al. (2023)
  MetaGPT: meta programming for a multi-agent collaborative framework.
  In The twelfth international conference on learning representations,
  Cited by: [§5](https://arxiv.org/html/2606.08340v1#S5.SS0.SSS0.Px2.p1.1 "Multi-Agent LLM collaboration. ‣ 5 Related Work ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").
- [29]
  E. Hughes, M. D. Dennis, J. Parker-Holder, F. Behbahani, A. Mavalankar, Y. Shi, T. Schaul, and T. Rocktäschel (2024)
  Position: open-endedness is essential for artificial superhuman intelligence.
  In Proceedings of the 41st International Conference on Machine Learning,
  Proceedings of Machine Learning Research, Vol. 235, pp. 20597–20616.
  External Links: [Link](https://proceedings.mlr.press/v235/hughes24a.html)
  Cited by: [Appendix A](https://arxiv.org/html/2606.08340v1#A1.p1.1 "Appendix A alem’s Place Among Existing Environments ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents"),
  [footnote 2](https://arxiv.org/html/2606.08340v1#footnote2 "In 1 Introduction ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").
- [30]
  S. Kazemkhani, A. Pandya, D. Cornelisse, B. Shacklett, and E. Vinitsky (2025)
  GPUDrive: data-driven, multi-agent driving simulation at 1 million fps.
  In Proceedings of the International Conference on Learning Representations (ICLR),
  External Links: [Link](https://arxiv.org/abs/2408.01584),
  2408.01584
  Cited by: [Table 2](https://arxiv.org/html/2606.08340v1#A1.T2.11.1.1.1.1.1.1.8.1 "In Appendix A alem’s Place Among Existing Environments ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").
- [31]
  T. Kwa, B. West, J. Becker, A. Deng, K. Garcia, M. Hasin, S. Jawhar, M. Kinniment, N. Rush, S. Von Arx, et al. (2025)
  Measuring ai ability to complete long tasks.
  arXiv preprint arXiv:2503.14499 352.
  Cited by: [§1](https://arxiv.org/html/2606.08340v1#S1.p1.1 "1 Introduction ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents"),
  [§5](https://arxiv.org/html/2606.08340v1#S5.SS0.SSS0.Px1.p1.1 "Long-horizon and agentic evaluation. ‣ 5 Related Work ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").
- [32]
  W. Kwon, Z. Li, S. Zhuang, Y. Sheng, L. Zheng, C. H. Yu, J. Gonzalez, H. Zhang, and I. Stoica (2023)
  Efficient memory management for large language model serving with pagedattention.
  In Proceedings of the 29th symposium on operating systems principles,
  pp. 611–626.
  Cited by: [§4.1](https://arxiv.org/html/2606.08340v1#S4.SS1.SSS0.Px3.p1.1 "Models. ‣ 4.1 Experimental Setup ‣ 4 Experiments ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").
- [33]
  J. Z. Leibo, E. A. Dueñez-Guzman, A. Vezhnevets, J. P. Agapiou, P. Sunehag, R. Koster, J. Matyas, C. Beattie, I. Mordatch, and T. Graepel (2021)
  Scalable evaluation of multi-agent reinforcement learning with melting pot.
  In International conference on machine learning,
  pp. 6187–6199.
  Cited by: [Table 2](https://arxiv.org/html/2606.08340v1#A1.T2.11.1.1.1.1.1.1.6.1 "In Appendix A alem’s Place Among Existing Environments ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").
- [34]
  D. Liu, V. Shah, O. Boussif, C. Meo, A. Goyal, T. Shu, M. C. Mozer, N. Heess, and Y. Bengio (2023)
  Stateful active facilitator: coordination and environmental heterogeneity in cooperative multi-agent reinforcement learning.
  In The Eleventh International Conference on Learning Representations,
  External Links: [Link](https://openreview.net/forum?id=B4maZQLLW0_)
  Cited by: [Table 2](https://arxiv.org/html/2606.08340v1#A1.T2.11.1.1.1.1.1.1.7.1 "In Appendix A alem’s Place Among Existing Environments ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").
- [35]
  C. Lu, C. Lu, R. T. Lange, Y. Yamada, S. Hu, J. Foerster, D. Ha, and J. Clune (2026)
  Towards end-to-end automation of ai research.
  Nature 651 (8107), pp. 914–919.
  Cited by: [§1](https://arxiv.org/html/2606.08340v1#S1.p1.1 "1 Introduction ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").
- [36]
  T. W. Malone and K. Crowston (1994)
  The interdisciplinary study of coordination.
  ACM Computing Surveys (CSUR) 26 (1), pp. 87–119.
  Cited by: [§3.1](https://arxiv.org/html/2606.08340v1#S3.SS1.p1.1 "3.1 Coordination Types ‣ 3 alem: An Open-Ended World for Multi-Agent Coordination ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").
- [37]
  M. Matthews, M. Beukman, B. Ellis, M. Samvelyan, M. Jackson, S. Coward, and J. Foerster (2024)
  Craftax: a lightning-fast benchmark for open-ended reinforcement learning.
  In International Conference on Machine Learning (ICML),
  Cited by: [§C.3](https://arxiv.org/html/2606.08340v1#A3.SS3.p1.1 "C.3 Environment Speed ‣ Appendix C Detailed Experimental Results ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents"),
  [Figure 1](https://arxiv.org/html/2606.08340v1#S1.F1.10.1 "In 1 Introduction ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents"),
  [Figure 1](https://arxiv.org/html/2606.08340v1#S1.F1.7.1 "In 1 Introduction ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents"),
  [§1](https://arxiv.org/html/2606.08340v1#S1.p3.1 "1 Introduction ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents"),
  [§3.2](https://arxiv.org/html/2606.08340v1#S3.SS2.p1.1 "3.2 Procedural Coordination Generation ‣ 3 alem: An Open-Ended World for Multi-Agent Coordination ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents"),
  [§3.4.1](https://arxiv.org/html/2606.08340v1#S3.SS4.SSS1.Px3.p1.1 "Achievements and rewards. ‣ 3.4.1 RL Interface ‣ 3.4 Environment Interface ‣ 3 alem: An Open-Ended World for Multi-Agent Coordination ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents"),
  [§4.1](https://arxiv.org/html/2606.08340v1#S4.SS1.SSS0.Px2.p1.1 "Metrics. ‣ 4.1 Experimental Setup ‣ 4 Experiments ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents"),
  [footnote 2](https://arxiv.org/html/2606.08340v1#footnote2 "In 1 Introduction ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").
- [38]
  M. Meireles, N. Lauffer, R. Bhati, and C. Allen (2025)
  The influence of scaffolds on coordination scaling laws in LLM agents.
  In Workshop on Scaling Environments for Agents,
  External Links: [Link](https://openreview.net/forum?id=E9whrbtgUA)
  Cited by: [§1](https://arxiv.org/html/2606.08340v1#S1.p2.1 "1 Introduction ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").
- [39]
  R. Nakano, J. Hilton, S. Balaji, J. Wu, L. Ouyang, C. Kim, C. Hesse, S. Jain, V. Kosaraju, W. Saunders, et al. (2021)
  Webgpt: browser-assisted question-answering with human feedback.
  arXiv preprint arXiv:2112.09332.
  Cited by: [§1](https://arxiv.org/html/2606.08340v1#S1.p1.1 "1 Introduction ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").
- [40]
  B. A. Omari, M. Matthews, A. Rutherford, and J. N. Foerster (2025)
  Multi-agent craftax: benchmarking open-ended multi-agent reinforcement learning at the hyperscale.
  arXiv preprint arXiv:2511.04904.
  Cited by: [Table 2](https://arxiv.org/html/2606.08340v1#A1.T2.11.1.1.1.1.1.1.11.1 "In Appendix A alem’s Place Among Existing Environments ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents"),
  [Appendix A](https://arxiv.org/html/2606.08340v1#A1.p3.1 "Appendix A alem’s Place Among Existing Environments ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents"),
  [§C.3](https://arxiv.org/html/2606.08340v1#A3.SS3.p1.1 "C.3 Environment Speed ‣ Appendix C Detailed Experimental Results ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents"),
  [Figure 1](https://arxiv.org/html/2606.08340v1#S1.F1.10.1 "In 1 Introduction ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents"),
  [Figure 1](https://arxiv.org/html/2606.08340v1#S1.F1.7.1 "In 1 Introduction ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents"),
  [§1](https://arxiv.org/html/2606.08340v1#S1.p2.1 "1 Introduction ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents"),
  [§1](https://arxiv.org/html/2606.08340v1#S1.p3.1 "1 Introduction ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents"),
  [§3.2](https://arxiv.org/html/2606.08340v1#S3.SS2.p1.1 "3.2 Procedural Coordination Generation ‣ 3 alem: An Open-Ended World for Multi-Agent Coordination ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents"),
  [§3.3](https://arxiv.org/html/2606.08340v1#S3.SS3.p1.1 "3.3 Soft Specialisation and Difficulty Scaling ‣ 3 alem: An Open-Ended World for Multi-Agent Coordination ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents"),
  [§3.4.1](https://arxiv.org/html/2606.08340v1#S3.SS4.SSS1.Px3.p1.1 "Achievements and rewards. ‣ 3.4.1 RL Interface ‣ 3.4 Environment Interface ‣ 3 alem: An Open-Ended World for Multi-Agent Coordination ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents"),
  [§3](https://arxiv.org/html/2606.08340v1#S3.p1.1 "3 alem: An Open-Ended World for Multi-Agent Coordination ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents"),
  [§4.1](https://arxiv.org/html/2606.08340v1#S4.SS1.SSS0.Px2.p1.1 "Metrics. ‣ 4.1 Experimental Setup ‣ 4 Experiments ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents"),
  [§5](https://arxiv.org/html/2606.08340v1#S5.SS0.SSS0.Px3.p1.1 "MARL and coordination. ‣ 5 Related Work ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents"),
  [footnote 2](https://arxiv.org/html/2606.08340v1#footnote2 "In 1 Introduction ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").
- [41]
  OpenAI (2026)
  Introducing gpt-5.4.
  Note: <https://openai.com/index/introducing-gpt-5-4/>
  Cited by: [§4.1](https://arxiv.org/html/2606.08340v1#S4.SS1.SSS0.Px3.p1.1 "Models. ‣ 4.1 Experimental Setup ‣ 4 Experiments ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").
- [42]
  D. Paglieri, B. Cupiał, S. Coward, U. Piterbarg, M. Wolczyk, A. Khan, E. Pignatelli, Ł. Kuciński, L. Pinto, R. Fergus, J. N. Foerster, J. Parker-Holder, and T. Rocktäschel (2025)
  BALROG: benchmarking agentic LLM and VLM reasoning on games.
  In The Thirteenth International Conference on Learning Representations,
  External Links: [Link](https://openreview.net/forum?id=fp6t3F669F)
  Cited by: [§1](https://arxiv.org/html/2606.08340v1#S1.p2.1 "1 Introduction ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents"),
  [§4.1](https://arxiv.org/html/2606.08340v1#S4.SS1.SSS0.Px1.p1.1 "Evaluation protocol. ‣ 4.1 Experimental Setup ‣ 4 Experiments ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents"),
  [§4.2.1](https://arxiv.org/html/2606.08340v1#S4.SS2.SSS1.Px4.p1.1 "Coordination failures differ across task structure. ‣ 4.2.1 Q1: How well do LLM agents coordinate zero-shot within homogeneous teams? ‣ 4.2 Results ‣ 4 Experiments ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents"),
  [§5](https://arxiv.org/html/2606.08340v1#S5.SS0.SSS0.Px1.p1.1 "Long-horizon and agentic evaluation. ‣ 5 Related Work ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").
- [43]
  Qwen Team (2026)
  Qwen3.6-Plus: towards real world agents.
  External Links: [Link](https://qwen.ai/blog?id=qwen3.6)
  Cited by: [§4.1](https://arxiv.org/html/2606.08340v1#S4.SS1.SSS0.Px3.p1.1 "Models. ‣ 4.1 Experimental Setup ‣ 4 Experiments ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").
- [44]
  A. Rutherford, B. Ellis, M. Gallici, J. Cook, A. Lupu, G. Ingvarsson, T. Willi, R. Hammond, A. Khan, C. S. de Witt, et al. (2024)
  Jaxmarl: multi-agent rl environments and algorithms in jax.
  Advances in Neural Information Processing Systems 37, pp. 50925–50951.
  Cited by: [Table 2](https://arxiv.org/html/2606.08340v1#A1.T2.11.1.1.1.1.1.1.3.1 "In Appendix A alem’s Place Among Existing Environments ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").
- [45]
  M. Samvelyan, T. Rashid, C. Schroeder de Witt, G. Farquhar, N. Nardelli, T. G. J. Rudner, C. Hung, P. H. S. Torr, J. Foerster, and S. Whiteson (2019)
  The starcraft multi-agent challenge.
  In Proceedings of the 18th International Conference on Autonomous Agents and MultiAgent Systems,
  AAMAS ’19, Richland, SC, pp. 2186–2188.
  Cited by: [Table 2](https://arxiv.org/html/2606.08340v1#A1.T2.11.1.1.1.1.1.1.3.1 "In Appendix A alem’s Place Among Existing Environments ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents"),
  [§3.1](https://arxiv.org/html/2606.08340v1#S3.SS1.p2.1 "3.1 Coordination Types ‣ 3 alem: An Open-Ended World for Multi-Agent Coordination ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents"),
  [§5](https://arxiv.org/html/2606.08340v1#S5.SS0.SSS0.Px3.p1.1 "MARL and coordination. ‣ 5 Related Work ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").
- [46]
  T. C. Schelling (1980)
  The strategy of conflict: with a new preface by the author.
   Harvard university press.
  Cited by: [§3.2](https://arxiv.org/html/2606.08340v1#S3.SS2.p2.1 "3.2 Procedural Coordination Generation ‣ 3 alem: An Open-Ended World for Multi-Agent Coordination ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").
- [47]
  J. Schrittwieser, I. Antonoglou, T. Hubert, K. Simonyan, L. Sifre, S. Schmitt, A. Guez, E. Lockhart, D. Hassabis, T. Graepel, et al. (2020)
  Mastering atari, go, chess and shogi by planning with a learned model.
  Nature 588 (7839), pp. 604–609.
  Cited by: [§1](https://arxiv.org/html/2606.08340v1#S1.p2.1 "1 Introduction ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").
- [48]
  P. Shojaee, S. I. Mirzadeh, K. Alizadeh, M. Horton, S. Bengio, and M. Farajtabar (2026)
  The illusion of thinking: understanding the strengths and limitations of reasoning models via the lens of problem complexity.
  In The Thirty-ninth Annual Conference on Neural Information Processing Systems,
  External Links: [Link](https://openreview.net/forum?id=YghiOusmvw)
  Cited by: [§1](https://arxiv.org/html/2606.08340v1#S1.p2.1 "1 Introduction ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents"),
  [§5](https://arxiv.org/html/2606.08340v1#S5.SS0.SSS0.Px1.p1.1 "Long-horizon and agentic evaluation. ‣ 5 Related Work ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").
- [49]
  A. Sinha, A. Arun, S. Goel, S. Staab, and J. Geiping (2026)
  The illusion of diminishing returns: measuring long horizon execution in LLMs.
  In The Fourteenth International Conference on Learning Representations,
  External Links: [Link](https://openreview.net/forum?id=3lm8lWYxiq)
  Cited by: [§1](https://arxiv.org/html/2606.08340v1#S1.p2.1 "1 Introduction ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").
- [50]
  B. Skyrms (2004)
  The stag hunt and the evolution of social structure.
   Cambridge University Press.
  Cited by: [§3.2](https://arxiv.org/html/2606.08340v1#S3.SS2.p2.1 "3.2 Procedural Coordination Generation ‣ 3 alem: An Open-Ended World for Multi-Agent Coordination ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").
- [51]
  J. Suarez, D. Bloomin, K. W. Choe, H. X. Li, R. Sullivan, N. Kanna, D. Scott, R. Shuman, H. Bradley, L. Castricato, et al. (2023)
  Neural mmo 2.0: a massively multi-task addition to massively multi-agent learning.
  Advances in Neural Information Processing Systems 36, pp. 50094–50104.
  Cited by: [Table 2](https://arxiv.org/html/2606.08340v1#A1.T2.11.1.1.1.1.1.1.9.1 "In Appendix A alem’s Place Among Existing Environments ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").
- [52]
  J. Suarez, Y. Du, P. Isola, and I. Mordatch (2019)
  Neural mmo: a massively multiagent game environment for training and evaluating intelligent agents.
  arXiv preprint arXiv:1903.00784.
  Cited by: [Table 2](https://arxiv.org/html/2606.08340v1#A1.T2.11.1.1.1.1.1.1.9.1 "In Appendix A alem’s Place Among Existing Environments ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").
- [53]
  H. Sun, S. Zhang, L. Niu, L. Ren, H. Xu, H. Fu, F. Zhao, C. Yuan, and X. Wang (2025)
  Collab-overcooked: benchmarking and evaluating large language models as collaborative agents.
  In Proceedings of the 2025 Conference on Empirical Methods in Natural Language Processing,
  pp. 4922–4951.
  Cited by: [§1](https://arxiv.org/html/2606.08340v1#S1.p2.1 "1 Introduction ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents"),
  [§5](https://arxiv.org/html/2606.08340v1#S5.SS0.SSS0.Px2.p1.1 "Multi-Agent LLM collaboration. ‣ 5 Related Work ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").
- [54]
  Q. Team (2026)
  Qwen3.5: accelerating productivity with native multimodal agents.
  External Links: [Link](https://qwen.ai/blog?id=qwen3.5)
  Cited by: [§4.1](https://arxiv.org/html/2606.08340v1#S4.SS1.SSS0.Px3.p1.1 "Models. ‣ 4.1 Experimental Setup ‣ 4 Experiments ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").
- [55]
  K. A. Tessera, L. Hinckeldey, R. Zamboni, D. Abel, and A. Storkey (2026)
  Probing dec-POMDP reasoning in cooperative MARL.
  In The 25th International Conference on Autonomous Agents and Multi-Agent Systems (AAMAS), Oral,
  Cited by: [§B.1](https://arxiv.org/html/2606.08340v1#A2.SS1.p1.1 "B.1 Probing Environment Changes ‣ Appendix B Environment Details ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents"),
  [Table 3](https://arxiv.org/html/2606.08340v1#A2.T3 "In B.1 Probing Environment Changes ‣ Appendix B Environment Details ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents"),
  [Table 3](https://arxiv.org/html/2606.08340v1#A2.T3.7.1 "In B.1 Probing Environment Changes ‣ Appendix B Environment Details ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents"),
  [§3](https://arxiv.org/html/2606.08340v1#S3.p1.1 "3 alem: An Open-Ended World for Multi-Agent Coordination ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents"),
  [§5](https://arxiv.org/html/2606.08340v1#S5.SS0.SSS0.Px3.p1.1 "MARL and coordination. ‣ 5 Related Work ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").
- [56]
  K. A. Tessera, A. Rahman, A. Storkey, and S. V. Albrecht (2025)
  HyperMARL: adaptive hypernetworks for multi-agent rl.
  In The Thirty-ninth Annual Conference on Neural Information Processing Systems,
  External Links: [Link](https://openreview.net/forum?id=56CgYnf9Dr)
  Cited by: [§3.5](https://arxiv.org/html/2606.08340v1#S3.SS5.p1.1 "3.5 MARL Baselines ‣ 3 alem: An Open-Ended World for Multi-Agent Coordination ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").
- [57]
  A. Vaswani, N. Shazeer, N. Parmar, J. Uszkoreit, L. Jones, A. N. Gomez, Ł. Kaiser, and I. Polosukhin (2017)
  Attention is all you need.
  Advances in neural information processing systems 30.
  Cited by: [§1](https://arxiv.org/html/2606.08340v1#S1.p1.1 "1 Introduction ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").
- [58]
  O. Vinyals, I. Babuschkin, W. M. Czarnecki, M. Mathieu, A. Dudzik, J. Chung, D. H. Choi, R. Powell, T. Ewalds, P. Georgiev, et al. (2019)
  Grandmaster level in starcraft ii using multi-agent reinforcement learning.
  nature 575 (7782), pp. 350–354.
  Cited by: [§1](https://arxiv.org/html/2606.08340v1#S1.p2.1 "1 Introduction ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").
- [59]
  G. Wang, Y. Xie, Y. Jiang, A. Mandlekar, C. Xiao, Y. Zhu, L. Fan, and A. Anandkumar (2024)
  Voyager: an open-ended embodied agent with large language models.
  Transactions on Machine Learning Research.
  Note: 
  External Links: ISSN 2835-8856,
  [Link](https://openreview.net/forum?id=ehfRiF0R3a)
  Cited by: [§1](https://arxiv.org/html/2606.08340v1#S1.p1.1 "1 Introduction ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").
- [60]
  W. Wang, D. Zhang, T. Feng, B. Wang, and J. Tang (2024)
  Battleagentbench: a benchmark for evaluating cooperation and competition capabilities of language models in multi-agent systems.
  arXiv preprint arXiv:2408.15971.
  Cited by: [§1](https://arxiv.org/html/2606.08340v1#S1.p2.1 "1 Introduction ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").
- [61]
  W. Wang, D. Han, D. M. Diaz, J. Xu, V. Rühle, and S. Rajmohan (2025)
  Odysseybench: evaluating llm agents on long-horizon complex office application workflows.
  arXiv preprint arXiv:2508.09124.
  Cited by: [§1](https://arxiv.org/html/2606.08340v1#S1.p2.1 "1 Introduction ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").
- [62]
  Y. Yamada, R. T. Lange, C. Lu, S. Hu, C. Lu, J. Foerster, J. Clune, and D. Ha (2025)
  The ai scientist-v2: workshop-level automated scientific discovery via agentic tree search.
  arXiv preprint arXiv:2504.08066.
  Cited by: [§1](https://arxiv.org/html/2606.08340v1#S1.p1.1 "1 Introduction ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents"),
  [§5](https://arxiv.org/html/2606.08340v1#S5.SS0.SSS0.Px1.p1.1 "Long-horizon and agentic evaluation. ‣ 5 Related Work ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").
- [63]
  H. Yang, J. Chen, M. Siew, T. L. Botran, and C. Joe-Wong (2025)
  LLM-powered decentralized generative agents with adaptive hierarchical knowledge graph for cooperative planning.
  In The First MARW: Multi-Agent AI in the Real World Workshop at AAAI 2025,
  External Links: [Link](https://openreview.net/forum?id=l9QUw0oUTa)
  Cited by: [§1](https://arxiv.org/html/2606.08340v1#S1.p2.1 "1 Introduction ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").
- [64]
  S. Yao, J. Zhao, D. Yu, N. Du, I. Shafran, K. R. Narasimhan, and Y. Cao (2023)
  ReAct: synergizing reasoning and acting in language models.
  In The Eleventh International Conference on Learning Representations,
  External Links: [Link](https://openreview.net/forum?id=WE_vluYUL-X)
  Cited by: [§4.1](https://arxiv.org/html/2606.08340v1#S4.SS1.SSS0.Px4.p1.1 "Agent harness. ‣ 4.1 Experimental Setup ‣ 4 Experiments ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").
- [65]
  E. Ye, R. Tao, and N. Jaques (2025)
  An efficient open world environment for multi-agent social learning.
  arXiv preprint arXiv:2508.15679.
  Cited by: [Table 2](https://arxiv.org/html/2606.08340v1#A1.T2.11.1.1.1.1.1.1.10.1 "In Appendix A alem’s Place Among Existing Environments ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents"),
  [Appendix A](https://arxiv.org/html/2606.08340v1#A1.p3.1 "Appendix A alem’s Place Among Existing Environments ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents"),
  [§1](https://arxiv.org/html/2606.08340v1#S1.p2.1 "1 Introduction ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents"),
  [§3.2](https://arxiv.org/html/2606.08340v1#S3.SS2.p1.1 "3.2 Procedural Coordination Generation ‣ 3 alem: An Open-Ended World for Multi-Agent Coordination ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").
- [66]
  C. Yu, A. Velu, E. Vinitsky, J. Gao, Y. Wang, A. Bayen, and Y. Wu (2022)
  The surprising effectiveness of ppo in cooperative multi-agent games.
  Advances in neural information processing systems 35, pp. 24611–24624.
  Cited by: [§3.5](https://arxiv.org/html/2606.08340v1#S3.SS5.p1.1 "3.5 MARL Baselines ‣ 3 alem: An Open-Ended World for Multi-Agent Coordination ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").
- [67]
  Y. Zhang, S. Jiang, R. Li, J. Tu, Y. Su, L. Deng, X. Guo, C. Lv, and J. Lin (2026)
  DeepPlanning: benchmarking long-horizon agentic planning with verifiable constraints.
  arXiv preprint arXiv:2601.18137.
  Cited by: [§1](https://arxiv.org/html/2606.08340v1#S1.p2.1 "1 Introduction ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents"),
  [§5](https://arxiv.org/html/2606.08340v1#S5.SS0.SSS0.Px1.p1.1 "Long-horizon and agentic evaluation. ‣ 5 Related Work ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").
- [68]
  Y. Zhao, B. Yuan, J. Huang, H. Yuan, Z. Yu, H. Xu, L. Hu, A. Shankarampeta, Z. Huang, W. Ni, et al. (2026)
  AMA-bench: evaluating long-horizon memory for agentic applications.
  arXiv preprint arXiv:2602.22769.
  Cited by: [§1](https://arxiv.org/html/2606.08340v1#S1.p2.1 "1 Introduction ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents"),
  [§5](https://arxiv.org/html/2606.08340v1#S5.SS0.SSS0.Px1.p1.1 "Long-horizon and agentic evaluation. ‣ 5 Related Work ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").
- [69]
  K. Zhu, H. Du, Z. Hong, X. Yang, S. Guo, D. Z. Wang, Z. Wang, C. Qian, R. Tang, H. Ji, et al. (2025)
  Multiagentbench: evaluating the collaboration and competition of llm agents.
  In Proceedings of the 63rd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers),
  pp. 8580–8622.
  Cited by: [§1](https://arxiv.org/html/2606.08340v1#S1.p2.1 "1 Introduction ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents"),
  [§5](https://arxiv.org/html/2606.08340v1#S5.SS0.SSS0.Px2.p1.1 "Multi-Agent LLM collaboration. ‣ 5 Related Work ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").

## Appendix A alem’s Place Among Existing Environments

Table [2](https://arxiv.org/html/2606.08340v1#A1.T2 "Table 2 ‣ Appendix A alem’s Place Among Existing Environments ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents") compares alem with representative interactive multi-agent environments. We compare environments using four criteria. *Long horizon* means that success requires maintaining progress over extended trajectories, with rewards delayed by $T$ timesteps where $T$ is typically in the hundreds or thousands. *Bounded open-endedness* means that the environment supports a diverse but finite set of achievable goals $G=\{g\_{1},\dots,g\_{n}\}$. This differs from fully open-ended systems, where $n$ can grow over time through the generation of novel and learnable goals [[29](https://arxiv.org/html/2606.08340v1#bib.bib13)]. *Explicit coordination requirements* means that the environment contains identifiable multi-agent task structures, such as synchronous actions, handovers, role allocation, or long-range interdependence. *Coordination difficulty control* means that the benchmark exposes an explicit parameter or protocol for scaling coordination difficulty.

Table 2: Comparison with representative multi-agent interactive environments.
✓indicates that the property is a central design feature, ✗indicates that it is absent or not a primary design goal, and $\sim$indicates restricted support. For *long horizon*, restricted support means that only some scenarios require extended trajectories or delayed outcomes. For *explicit coordination requirements*, restricted support means that coordination-relevant interactions exist, but are fixed, implicit, narrow in type, or not procedurally generated as explicit task requirements. *Coordination difficulty control* requires an explicit parameter or protocol for scaling coordination difficulty, rather than only changing maps, scenarios, opponents, or task instances.

Environment
Long
Bounded
Explicit coord.
Coord. difficulty


horizon
open-endedness
requirements
control

SMAC / SMACv2/ SMAX [[45](https://arxiv.org/html/2606.08340v1#bib.bib48), [15](https://arxiv.org/html/2606.08340v1#bib.bib67), [44](https://arxiv.org/html/2606.08340v1#bib.bib64)]
✗
✗
$\sim$
✗

Overcooked / Overcookedv2 [[10](https://arxiv.org/html/2606.08340v1#bib.bib14), [17](https://arxiv.org/html/2606.08340v1#bib.bib22)]
✗
✗
$\sim$
✗

Hanabi [[4](https://arxiv.org/html/2606.08340v1#bib.bib68)]
✗
✗
$\sim$
✗

Melting Pot [[1](https://arxiv.org/html/2606.08340v1#bib.bib15), [33](https://arxiv.org/html/2606.08340v1#bib.bib16)]
$\sim$
✗
$\sim$
✗

HECOGrid [[34](https://arxiv.org/html/2606.08340v1#bib.bib17)]
✗
✗
✓
✓

GPUDrive [[30](https://arxiv.org/html/2606.08340v1#bib.bib20)]
✗
✗
✗
✗

Neural MMO [[52](https://arxiv.org/html/2606.08340v1#bib.bib18), [51](https://arxiv.org/html/2606.08340v1#bib.bib19)]
✓
✓
$\sim$
✗

Multi-Agent Craftax v1 [[65](https://arxiv.org/html/2606.08340v1#bib.bib49)]
✓
✓
$\sim$
✗

Craftax-Coop [[40](https://arxiv.org/html/2606.08340v1#bib.bib21)]
✓
✓
$\sim$
✗

alem
✓
✓
✓
✓

Existing environments cover important parts of this space, but not the full combination targeted by alem. Classic MARL benchmarks such as SMAC, Overcooked, and Hanabi isolate useful coordination motifs, but are short-horizon and task-specific. Open-world environments such as Neural MMO and Craftax-Coop provide longer horizons and bounded open-endedness, but do not expose explicit controls for coordination difficulty. alem combines these ingredients by adding procedurally generated coordination tasks, soft specialisation, communication, and a difficulty parameter that scales coordination demands while preserving the underlying world structure.

The closest environments are Multi-Agent Craftax v1 [[65](https://arxiv.org/html/2606.08340v1#bib.bib49)] and Craftax-Coop [[40](https://arxiv.org/html/2606.08340v1#bib.bib21)]. Both inherit Craftax’s long-horizon, bounded open-ended structure, but their coordination demands are mostly implicit. Multi-Agent Craftax v1 places multiple agents in the same open world, but does not introduce explicit coordination tasks, a controllable coordination-difficulty axis, or the full nine-level progression used in Craftax and alem (it is implemented only on the overworld). Craftax-Coop adds roles, creating long-range interdependence through specialisation. However, it does not procedurally generate coordination requirements over entities, require synchronous or handover coordination, provide an explicit communication channel, or expose a parameter that scales coordination difficulty while preserving the same world. alem adds these mechanisms directly: coordination tasks are sampled each episode, span synchronous and handover structures, vary the required number of agents, and are controlled by a single difficulty parameter.

## Appendix B Environment Details

![Refer to caption](https://arxiv.org/html/2606.08340v1/sync_soft_hard_resources_with_inventory.png)


Figure 6: Example pixel-based observation in Alem. Top bar: teammate status: role icon (forager/miner/warrior), health, and a coloured channel badge showing the discrete broadcast message each teammate sent at this step (badge absent when the agent did not communicate). Centre: the agent’s local world view: coordination overlays mark blocks and sites that require joint action, a solid border with an agent-count label denotes a *hard* synchronisation, a dashed border denotes a *soft* requirement, and a timer badge marks an active *handover* window within which a second agent must act. Bottom: the agent’s inventory and attributes (resources, tools, armour, potions, enchantments). Alem also provides a symbolic observation (a structured array of nearby blocks, teammate states, and inventory tensors) and a text-based observation used by the LLM-agent baselines.


![Refer to caption](https://arxiv.org/html/2606.08340v1/world_diversity_seed0.png)

Seed 0

Diversity

![Refer to caption](https://arxiv.org/html/2606.08340v1/world_diversity_seed1.png)

Seed 1

![Refer to caption](https://arxiv.org/html/2606.08340v1/images/world_diversity_seed2.png)

Seed 2

Figure 7: alem procedurally generates diverse worlds and coordination layouts.
Three independently sampled episodes at the same medium difficulty show variation in both terrain layout and the spatial placement of coordination tasks ($\blacksquare$ 2-agent sync,
$\blacksquare$ all-agent sync,
$\blacklozenge$ handover).

### B.1 Probing Environment Changes

We use the information-theoretic diagnostics proposed in [[55](https://arxiv.org/html/2606.08340v1#bib.bib63)] to check whether the design changes in alem introduce the intended behavioural demands. We roll out trained RL policies under the same four settings used in the environment calibration: a single-agent setting, a multi-agent setting without role pressure or coordination tasks, a multi-agent setting with soft specialisation, and full alem (Easy). The diagnostics are reported as behavioural questions in Table [3](https://arxiv.org/html/2606.08340v1#A2.T3 "Table 3 ‣ B.1 Probing Environment Changes ‣ Appendix B Environment Details ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents"), with the corresponding metric acronym shown in parentheses.

All four diagnostic signals increase as multi-agent structure is added. This suggests that full alem induces stronger demands for memory use, hidden teammate information, synchronous coordination, and temporal coordination, rather than simply making the base game harder. We report diagnostic magnitudes rather than Wilcoxon tests because this is a single-environment calibration across settings, not a suite-level comparison across independent scenarios.

Table 3: Behavioural diagnostics across environment settings.
We use the diagnostics of [[55](https://arxiv.org/html/2606.08340v1#bib.bib63)] on the same four settings used in the environment calibration: single-agent, multi-agent without role pressure or coordination tasks, multi-agent with soft specialisation, and full alem (Easy). Signals for memory use, hidden teammate information, synchronous coordination, and temporal coordination increase as these components are added. Higher values indicate stronger statistical dependence between agents’ actions and the corresponding information source or coordination relationship, not higher return. Values are mean $\pm$ standard deviation over seeds.

| Behavioural question | Single-agent | Multiple agent | MA + Soft spec. | alem |
| --- | --- | --- | --- | --- |
| Do agents benefit from memory? (HAR) | $0.355\pm 0.142$ | $0.372\pm 0.022$ | $0.437\pm 0.123$ | $0.641\pm 0.064$ |
| Does teammate info. help predict actions? (PIF) | – | $0.314\pm 0.036$ | $0.384\pm 0.125$ | $0.609\pm 0.148$ |
| Does synchronous coordination emerge? (AA) | – | $0.017\pm 0.004$ | $0.032\pm 0.011$ | $0.061\pm 0.022$ |
| Does temporal coordination emerge? (DAI) | – | $0.319\pm 0.057$ | $0.406\pm 0.128$ | $0.613\pm 0.165$ |

### B.2 Coordination Tasks

#### B.2.1 Coordination Task Categories

We instantiate coordination across four activity categories:

- •

  Mining. Resource blocks (including trees, ores, gems) are sampled for coordination during world generation. Synchronous mining requires the assigned number of agents to act on the same block in the same step. Handover mining requires a second agent to mine the block within $\Delta t\in[\Delta t\_{\min},\Delta t\_{\max}]$ steps of the first agent.
- •

  Construction. Construction sites for shelters, forges, and beacons are placed on valid overworld and mining-floor tiles, independently of mining blocks. Each site receives the same synchronous or handover structure as mining, together with a soft or hard synchronous variant. Building also requires the appropriate resources for the chosen structure. In handover construction, one agent initiates a specific structure, and a second agent must complete that structure type before the deadline, otherwise the site reverts and materials are refunded to the initiator.
- •

  Combat. Mob slots are pre-labelled during world generation as standard or coordinated mobs. Coordinated mobs appear as either elite melee mobs, elite ranged mobs, or large passive mobs, and each is marked as soft or hard and assigned the required agent count.
- •

  Crafting. Diamond pickaxes, swords, and armour require synchronous coordination, i.e. the craft succeeds only when the required number of agents attempt it at the same Epic Forge in the same step. This is a deliberately restricted variant, it is hard coordination only and tied to a specific tool station, and tests whether agents can converge on a shared location for a one-shot joint action.

### B.3 Coordination Difficulty

Table [4](https://arxiv.org/html/2606.08340v1#A2.T4 "Table 4 ‣ B.3 Coordination Difficulty ‣ Appendix B Environment Details ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents") and [5](https://arxiv.org/html/2606.08340v1#A2.T5 "Table 5 ‣ B.3 Coordination Difficulty ‣ Appendix B Environment Details ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents") describe what exactly changes across different difficulty levels.

Table 4: Coordination difficulty parameters controlled by the scalar $\alpha$. Easy, Medium, and Hard correspond to $\alpha\in\{0.3,0.6,0.9\}$. Larger $\alpha$ makes coordination harder to execute, but does not change how many coordination opportunities are sampled. † Only used when scale\_base\_difficulty=True. In the main benchmark, coordination difficulty can be scaled independently of base survival difficulty.

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Parameter | Formula | Easy | Medium | Hard |
| $p\_{\max}$ | $\alpha$ | 0.30 | 0.60 | 0.90 |
| handover\_window\_min | $\max(3,\lceil 12(1-\alpha)\rceil)$ | 9 | 5 | 3 |
| handover\_window\_max | $\max(6,\lceil 24(1-\alpha)\rceil)$ | 17 | 10 | 6 |
| soft\_solo\_fail\_prob | $\alpha$ | 0.30 | 0.60 | 0.90 |
| non\_specialist\_efficiency | $1-\alpha$ | 0.70 | 0.40 | 0.10 |
| mob\_health\_multiplier† | $1+\alpha/3$ | 1.10 | 1.20 | 1.30 |
| starting\_resource\_multiplier† | $1-\alpha/3$ | 0.90 | 0.80 | 0.70 |


Table 5: Coordination opportunity parameters held fixed across difficulty levels. These control how much coordination exists in the world, rather than how hard it is to execute.

|  |  |
| --- | --- |
| Parameter | Value |
| coordination\_enabled | True |
| coordination\_probability | 0.25 |
| soft\_coordination\_ratio | 0.50 |
| handover\_ratio | 0.25 |
| hard\_mob\_probability | 0.50 |
| elite\_mob\_probability | 0.15 |
| large\_passive\_probability | 0.20 |
| construction\_enabled | True |
| num\_construction\_sites | 8 |
| num\_mining\_construction\_sites | 4 |
| soft\_construction\_ratio | 0.50 |
| crafting\_coordination\_enabled | True |
| diamond\_crafting\_agents\_required | 2 |
| soft\_specialization | True |

## Appendix C Detailed Experimental Results

(a) Easy

(b) Medium

(c) Hard

Figure 8: 
Zero-shot homogeneous coordination in ALEM. We evaluate modern LLMs on Easy, Medium, and Hard difficulties, and compare them against RL baselines at 100M and 1B environment steps. Solid bars denote base reward, dashed bars denote coordination reward, and diamonds denote total reward. Values are reported as percentages of the corresponding achievable maximum for each metric and difficulty, with 95% confidence intervals. Total% is separately normalized and should therefore be interpreted independently of Base% and Coord.%.

### C.1 Algorithm Hyperparameters

The hyperparameters for the IPPO, MAPPO, HyperMARL, and PQN-VDN algorithms are summarised in Table [6](https://arxiv.org/html/2606.08340v1#A3.T6 "Table 6 ‣ C.1 Algorithm Hyperparameters ‣ Appendix C Detailed Experimental Results ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents"). These parameters were standardised where applicable to ensure comparable evaluation across multi-agent reinforcement learning baselines.

Table 6: Hyperparameters for Multi-Agent Reinforcement Learning Algorithms.

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Parameter | IPPO | MAPPO | HyperMARL | PQN-VDN |
| Training & Environment | | | | |
| Total Timesteps | $10^{9}$ | $10^{9}$ | $10^{9}$ | $10^{9}$ |
| Number of Environments | $1024$ | $512$ | $1024$ | $512$ |
| Steps per Environment | $64$ | $64$ | $64$ | $128$ |
| Number of Epochs | $4$ | $4$ | $4$ | $4$ |
| Number of Minibatches | $8$ | $8$ | $8$ | $16$ ($4^{\dagger}$) |
| Learning Rate | $2\times 10^{-4}$ | $2\times 10^{-4}$ | $1\times 10^{-4}$ | $5\times 10^{-5}$ |
| Max Gradient Norm | $1.0$ | $1.0$ | $1.0$ | $0.5$ |
| Discount Factor ($\gamma$) | $0.99$ | $0.99$ | $0.99$ | $0.99$ |
| Algorithm-Specific Optimization | | | | |
| GAE / Eligibility $\lambda$ | $0.8$ | $0.8$ | $0.8$ | $0.9$ |
| PPO Clip Ratio ($\epsilon$) | $0.2$ | $0.2$ | $0.2$ | – |
| Entropy Coefficient | $0.01$ | $0.01$ | $0.01$ | – |
| Value Function Coefficient | $0.5$ | $0.5$ | $0.5$ | – |
| $\epsilon$-greedy Start | – | – | – | $1.0$ |
| $\epsilon$-greedy Finish | – | – | – | $0.01$ ($0.005^{\dagger}$) |
| $\epsilon$-greedy Decay | – | – | – | $0.1$ |
| Network Architecture | | | | |
| RNN Hidden Dimension | $512$ | $512$ | $512$ | $1024$ |
| FC Layer Dimension | $128$ | $128$ | $128$ | – |
| Activation Function | tanh | tanh | relu | – |
| Normalization Type | – | – | – | Layer Norm |
| HyperMARL-Specific | | | | |
| Hypernet Embedding Dim | – | – | $64$ | – |
| Hypernet Hidden Dims | – | – | $[64]$ | – |
| Hypernet Init Scale | – | – | $\sqrt{2}$ | – |
| † Denotes alternative configurations used in specific cooperative PQN variants. | | | | |

##### Hyperparameter sweeps.

To ensure a fair comparison, IPPO, MAPPO, and HyperMARL were tuned over an identical grid (Table [7](https://arxiv.org/html/2606.08340v1#A3.T7 "Table 7 ‣ Hyperparameter sweeps. ‣ C.1 Algorithm Hyperparameters ‣ Appendix C Detailed Experimental Results ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents"), top), with $5$ seeds per configuration. PQN-VDN was tuned separately over a normalisation, eligibility-trace, and learning-rate grid with $3$ seeds per configuration (Table [7](https://arxiv.org/html/2606.08340v1#A3.T7 "Table 7 ‣ Hyperparameter sweeps. ‣ C.1 Algorithm Hyperparameters ‣ Appendix C Detailed Experimental Results ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents"),
bottom). All sweeps used Alem-Coop-Symbolic (PPO-family on the Debug variant at hard difficulty; PQN-VDN at easy), non-shared rewards, soft specialisation, and action masking. The configurations selected (in bold) are those used for the main results in Table [6](https://arxiv.org/html/2606.08340v1#A3.T6 "Table 6 ‣ C.1 Algorithm Hyperparameters ‣ Appendix C Detailed Experimental Results ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").

Table 7: Hyperparameter sweep grids and selected values (bold). The PPO-family grid is shared across IPPO, MAPPO, and HyperMARL.

|  |  |
| --- | --- |
| Hyperparameter | Sweep range |
| PPO-family (IPPO / MAPPO / HyperMARL), $5$ seeds per config | |
| Learning rate | $\{4\!\times\!10^{-3},\ 1\!\times\!10^{-3},\ 3\!\times\!10^{-4},\ 1\!\times\!10^{-4}\}$ |
| IPPO/MAPPO - $\mathbf{2\!\times\!10^{-4}}$; HyperMARL - $\mathbf{1\!\times\!10^{-4}}$ |  |
| PPO clip ratio $\epsilon$ | $\{0.1,\ \mathbf{0.2}\}$ |
| Update epochs | $\{2,\ \mathbf{4}\}$ |
| Max gradient norm | $\{0.5,\ \mathbf{1.0}\}$ |
| PQN-VDN, $3$ seeds per config | |
| Learning rate | $\{3\!\times\!10^{-4},\ 1\!\times\!10^{-4},\ \mathbf{5\!\times\!10^{-5}},\ 3\!\times\!10^{-5},\ 1\!\times\!10^{-5}\}$ |
| Number of minibatches | $\{4,\ 8,\ \mathbf{16}\}$ |
| Eligibility trace $\lambda$ | $\{0.5,\ 0.7,\ \mathbf{0.9}\}$ |
| Normalization type | $\{\mathbf{\text{layer\\_norm}},\ \text{batch\\_norm}\}$ |
| Normalize inputs | $\{$true, false$\}$ |
| $\epsilon$-greedy finish | $\{\mathbf{0.01},\ 0.005\}$ |
| Number of epochs | $\{\mathbf{4},\ \text{others}\}$ |
| Recurrent cell | $\{\textbf{LSTM},\ \text{GRU}\}$ |

The PQN-VDN sweep additionally revealed two non-default choices worth flagging: (i) although the original PureJaxQL Craftax recipe enables input normalization,
this consistently degraded performance in our setting and was disabled; and (ii) GRU was substantially worse than LSTM as the recurrent cell, despite GRU being used by all
PPO-family baselines. The cooperative PQN variant († in Table [6](https://arxiv.org/html/2606.08340v1#A3.T6 "Table 6 ‣ C.1 Algorithm Hyperparameters ‣ Appendix C Detailed Experimental Results ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents")) used $4$ minibatches and $\epsilon$-finish $=0.005$.

![Refer to caption](https://arxiv.org/html/2606.08340v1/achievement_tier_coverage.png)


Figure 9: Achievement-tier coverage across coordination difficulty. Each cell reports the mean fraction of achievements completed within a tier by a method; columns group achievement tiers and panels separate coordination settings. Cell values are percentages and colour encodes coverage from 0% to 100%. MARL baselines are separated by a dashed rule, and methods are ordered by their total achievement count on the hard coordination setting.

### C.2 Additional Metrics

Our primary metric is normalised episode return. For each agent, we divide cumulative reward by the maximum reward available in the relevant reward category, then average across agents. We report coordination return normalised by $R\_{\max}^{\mathrm{coord}}=159$, base return by $R\_{\max}^{\mathrm{base}}=217$, and total return by $R\_{\max}^{\mathrm{total}}=376$.

![Refer to caption](https://arxiv.org/html/2606.08340v1/main_diagnostic_C_deaths_new.png)


Figure 10: Different causes of death for different agents, averaged across easy, medium and hard.


Figure 11: Performance vs active model size.


![Refer to caption](https://arxiv.org/html/2606.08340v1/main_diagnostic_G_action_parsing_new.png)


Figure 12: Percentage success rate for parsing actions, averaged across easy, medium and hard.

![Refer to caption](https://arxiv.org/html/2606.08340v1/main_diagnostic_H_specialization_new.png)


Figure 13: Specialisation metrics, averaged across easy, medium and hard.

### C.3 Environment Speed

We benchmark alem’s simulation speed against two baselines: Craftax-Coop [[40](https://arxiv.org/html/2606.08340v1#bib.bib21)], the multi-agent environment we extend, and Craftax [[37](https://arxiv.org/html/2606.08340v1#bib.bib11)], the original single-agent JAX environment. Measurements report steps per second (SPS) for a full IPPO training iteration (rollouts and updates, excluding logging) on a single NVIDIA L40S (48 GB) GPU using JAX 0.4.38. alem is evaluated under its default training configuration (Easy difficulty, four communication channels).

Figure [14](https://arxiv.org/html/2606.08340v1#A3.F14 "Figure 14 ‣ C.3 Environment Speed ‣ Appendix C Detailed Experimental Results ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents") shows throughput scaling efficiently across 1 to 8 agents. The throughput reduction compared to Craftax-Coop directly reflects alem’s expanded mechanics: a richer observation space (coordination tracking and messages), coordination dynamics, additional tasks (building shelter, new passive mobs), soft specialisation, larger action space, and coordination reward logic. Crucially, the environment remains fully JIT-compiled; a 1B-timestep multi-agent training run completes in under two days on a single GPU, ensuring that large-scale experimentation remains highly accessible.

For researchers prioritising execution speed, we also provide alem-lite. This provides the exact same coordination logic, but limits the environment to one level (the overworld), as opposed to the full nine levels. This offers the highest speed across all tested environments.

(a) 1 Agent

(b) 2 Agents

(c) 4 Agents

(d) 8 Agents

Figure 14: 
Simulation throughput (SPS) during a full IPPO training step across 1–8 agents. The single-agent Craftax baseline is included in all panels as a global reference.

Our LLM experiments were carried out on 3 NVIDIA A100 80GB devices and took between 10 and 30 hours per 20 seeds per difficulty level for each model.

### C.4 Extended MARL Training

To test whether alem’s hard coordination setting is solved simply by
running MARL for longer, we extend the strongest RL baseline,
HyperMARL-IPPO, to 3B environment steps with five seeds. Figure [15](https://arxiv.org/html/2606.08340v1#A3.F15 "Figure 15 ‣ C.4 Extended MARL Training ‣ Appendix C Detailed Experimental Results ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents")
shows that the environment is not saturated: base reward improves early and
then plateaus, while coordination and total reward continue to climb steadily through
the end of training. Even after 3B steps, total reward remains far from the
maximum achievable score, indicating that the hard setting retains substantial
headroom for stronger learning algorithms.

(e) Base reward

(f) Coordination reward

(g) Total reward

Figure 15: 
Extended MARL ablation on hard alem. HyperMARL-IPPO is trained
for 3B environment steps across five seeds. Curves show seed means and
shaded bands show 95% bootstrap confidence intervals. Performance does
not saturate: coordination and total reward continue improving late in
training, and total reward remains well below the maximum achievable score.

### C.5 Text-based Language Interface Details

##### Prompt Structure.

At each timestep $t$, the prompt for agent $i$ is assembled from three components: a system prompt, a history of recent observations and actions, and the current observation with instructions.

1. 1.

   System prompt:
   The system prompt is shared across all time steps for an agent and defines the agent identity and role, the team size, the objective, and the rules needed to act in the environment.
   By default it also optionally includes the full action catalogue with natural-language descriptions, game and coordination mechanics.
2. 2.

   Observation and Action History:
   The observation and action history is a rolling sequence of recent messages from the environment and the agent itself.
   The observation messages contain previous observations, labelled as “Observation from $k$ step(s) ago”, and the action messages contain the action previously taken by the agent.
   When memory and communication is enabled, the observation history also includes scratchpad notes and teammate messages, each labelled with the corresponding timestep.
3. 3.

   Current Observation and Action Space:
   The current observation message contains textual descriptions of: achievement progress, current level, nearby terrain, items and enemies, visible coordination opportunities and requirements, teammate status, agent stats, vitals and inventory. The agent is then prompted to respond with an action.
   By default, the call to action prompt also includes current legal action affordances, instructions to think step-by-step before acting, to optionally broadcast a message, and to optionally write a private scratchpad note.

The length of observation, communication, and memory history is independently configurable, and the system prompt can be ablated to control how much information about the game and coordination mechanics is disclosed to the model. The default setting includes all information in the system prompt and current observation with communication and scratchpad history enabled, but we ablate these components to probe their effects on LLM performance in [4.2.2](https://arxiv.org/html/2606.08340v1#S4.SS2.SSS2 "4.2.2 Q2: How do communication, memory, and reasoning affect coordination? ‣ 4.2 Results ‣ 4 Experiments ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").

##### Prompt Disclosure Levels.

In order to reduce the amount of information given to the model, we only reveal specific gameplay information as the team reaches the relevant level.

##### Coordination Information.

The current observation includes explicit natural language descriptions of the current coordination targets and requirements.
For synchronous targets, the prompt states whether the target works solo with a bonus or requires $N$ agents simultaneously, what the required action is, and which side of the target the acting agent currently occupies.
The location and vitals of teammates are included as well as their previous messages.

##### Action Parsing and Execution.

The model response is instructed to respond in a structured format containing exactly one action tag, optionally preceded by a think tag for reasoning, communication tags for teammate messages, and scratchpad tags for private notes.
The required action is parsed from the response and must match one of the legal actions.
If parsing fails, the agent is re-prompted with a format error.
If the model still fails to produce a valid action after the configured retry budget is exhausted, the action defaults to Noop.
The final parsed action is mapped back to the underlying discrete action index before stepping the environment.

### C.6 Rewards and Achievements

Table 8: Complete list of all 93 achievements available in the environment, sorted alphabetically.

| Achievement | Achievement | Achievement | Achievement |
| --- | --- | --- | --- |
| Cast Spell | Coord Mine Coal Hard | Defeat Necromancer | Handover Complete |
| Collect Coal | Coord Mine Coal Soft | Defeat Orc Mage | Learn Spell |
| Collect Diamond | Coord Mine Diamond Hard | Defeat Orc Soldier | Make Arrow |
| Collect Drink | Coord Mine Diamond Soft | Defeat Pigman | Make Diamond Armour |
| Collect Food | Coord Mine Handover | Defeat Skeleton | Make Diamond Pickaxe |
| Collect Iron | Coord Mine Iron Hard | Defeat Troll | Make Diamond Sword |
| Collect Ruby | Coord Mine Iron Soft | Defeat Zombie | Make Iron Armour |
| Collect Sapling | Coord Mine Ruby Hard | Drink Potion | Make Iron Pickaxe |
| Collect Sapphire | Coord Mine Ruby Soft | Eat Bat | Make Iron Sword |
| Collect Stone | Coord Mine Sapphire Hard | Eat Cow | Make Stone Pickaxe |
| Collect Wood | Coord Mine Sapphire Soft | Eat Plant | Make Stone Sword |
| Coord 2 Agents Hard | Coord Mine Stone Hard | Eat Snail | Make Torch |
| Coord 2 Agents Soft | Coord Mine Stone Soft | Enchant Armour | Make Wood Pickaxe |
| Coord 3 Agents Hard | Damage Necromancer | Enchant Sword | Make Wood Sword |
| Coord 3 Agents Soft | Defeat Archer | Enter Dungeon | Open Chest |
| Coord Build Beacon | Defeat Deep Thing | Enter Fire Realm | Place Furnace |
| Coord Build Forge | Defeat Fire Elemental | Enter Gnomish Mines | Place Plant |
| Coord Build Shelter | Defeat Frost Troll | Enter Graveyard | Place Stone |
| Coord Diamond Armour | Defeat Gnome Archer | Enter Ice Realm | Place Table |
| Coord Diamond Pickaxe | Defeat Gnome Warrior | Enter Sewers | Place Torch |
| Coord Diamond Sword | Defeat Ice Elemental | Enter Troll Mines | Wake Up |
| Coord Elite Melee Kill | Defeat Knight | Enter Vault |  |
| Coord Elite Ranged Kill | Defeat Kobold | Find Bow |  |
| Coord Large Passive Kill | Defeat Lizard | Fire Bow |  |

### C.7 Prompt Examples

[⬇](data:text/plain;base64,c3lzdGVtCgpZb3UgYXJlIEFnZW50IDEgKGZvcmFnZXIpIGluIGEgMy1hZ2VudCBjb29wZXJhdGl2ZSBzdXJ2aXZhbCBnYW1lLiBZb3VyIGdvYWwgaXMgdG8gZ2F0aGVyIHJlc291cmNlcywgY3JhZnQgZ2VhciwgZmlnaHQgbW9uc3RlcnMsIGFuZCBkZXNjZW5kIHRocm91Z2ggOSBkdW5nZW9uIGxldmVscywgd2hpbGUgY29vcmRpbmF0aW5nIHdpdGggdGVhbW1hdGVzLiBZb3UgbXVzdCBzdXJ2aXZlIC0tIGlmIHlvdXIgaGVhbHRoIHJlYWNoZXMgemVybywgeW91IGRpZSwgYW5kIGlmIGFsbCBhZ2VudHMgZGllIHRoZSBnYW1lIGVuZHMuIE1heGltaXplIHRoZSBudW1iZXIgb2YgYWNoaWV2ZW1lbnRzIHdoaWxlIHN0YXlpbmcgYWxpdmUuCgo8Z2FtZV9ydWxlcz4KCiMjIEhvdyB0byBwbGF5Ci0gRWFjaCB0dXJuLCBjaG9vc2UgZXhhY3RseSBvbmUgYWN0aW9uLgotICoqTW92ZW1lbnQqKiB1c2VzIGFic29sdXRlIGRpcmVjdGlvbnM6IG5vcnRoLCBzb3V0aCwgZWFzdCwgYW5kIHdlc3QuIEFueSBtb3ZlIGF0dGVtcHQgY2hhbmdlcyB5b3VyIGZhY2luZyB0byB0aGF0IGRpcmVjdGlvbiwgZXZlbiBpZiB0aGUgbW92ZSBpcyBibG9ja2VkIGFuZCB5b3Ugc3RheSBpbiBwbGFjZS4gQSBtb3ZlIGlzIGJsb2NrZWQgaWYgdGhlIHRhcmdldCB0aWxlIGlzIHNvbGlkLCBpbmNsdWRpbmcgdHJlZXMsIHN0b25lLCBvcmUgdmVpbnMsIHdhbGxzLCBjcmFmdGluZyBzdGF0aW9ucywgY2hlc3RzLCBhbmQgcGxhbnRzLCBvciBpZiBpdCBjb250YWlucyB3YXRlciwgbGF2YSwgYSBtb2IsIG9yIGFub3RoZXIgcGxheWVyLiBJZiByZXBlYXRlZCBtb3ZlIGF0dGVtcHRzIGRvIG5vdCBjaGFuZ2UgeW91ciBwb3NpdGlvbiwgdGhhdCBkaXJlY3Rpb24gaXMgYmxvY2tlZC4gWW91IGNhbiBhbHNvIHVzZSBhIGJsb2NrZWQgbW92ZSB0byB0dXJuIGluIHBsYWNlLCBmb3IgZXhhbXBsZSB0byBmYWNlIGFuIGFkamFjZW50IHRyZWUuCi0gKipGYWNpbmcqKjogeW91ciBmYWNpbmcgZGlyZWN0aW9uIGlzIHNldCBieSB5b3VyIGxhc3QgbW92ZW1lbnQgYWN0aW9uIGFuZCBwZXJzaXN0cyB1bnRpbCB5b3UgbW92ZSBhZ2Fpbi4gKipEbyoqIGFsd2F5cyB0YXJnZXRzIHRoZSB0aWxlIGluIHlvdXIgY3VycmVudCBmYWNpbmcgZGlyZWN0aW9uLgotICoqRG8qKiBpcyB5b3VyIG1haW4gaW50ZXJhY3Rpb246IGZhY2UgYSB0aWxlIGFuZCB1c2UgdGhlICoqRG8qKiBhY3Rpb24gb24gZXhhY3RseSB0aGF0IHRpbGUgdG8gY2hvcCB0cmVlcywgbWluZSBvcmUsIGF0dGFjayBjcmVhdHVyZXMsIGRyaW5rIHdhdGVyLCBvcGVuIGNoZXN0cywgb3IgcmV2aXZlIGEgZG93bmVkIHRlYW1tYXRlLiBJZiB0aGUgZmFjZWQgdGlsZSBjb250YWlucyBhIGRvd25lZCB0ZWFtbWF0ZSwgRG8gcmV2aXZlcyB0aGVtLiBJZiB0aGUgZmFjZWQgdGlsZSBjb250YWlucyBhIGxpdmluZyB0ZWFtbWF0ZSwgRG8gdGFyZ2V0cyB0aGF0IHRlYW1tYXRlIGluc3RlYWQgYW5kIGNhbiBjYXVzZSBmcmllbmRseSBmaXJlLiBGb3Igc3luY2hyb25vdXMtc3R5bGUgY29vcmRpbmF0aW9uLCBhbGwgcmVxdWlyZWQgYWdlbnRzIG11c3Qgc3RhbmQgbmV4dCB0byB0aGUgc2FtZSB0YXJnZXQgdGlsZSwgZmFjZSBpdCwgYW5kIGFjdCB0b2dldGhlci4KLSAqKkNyYWZ0aW5nKio6IHN0YW5kIG5leHQgdG8gKGluY2x1ZGluZyBkaWFnb25hbGx5KSB0aGUgcmVxdWlyZWQgc3RhdGlvbiBhbmQgdXNlIHRoZSBjcmFmdCBhY3Rpb247IHlvdSBkbyBOT1QgbmVlZCB0byBmYWNlIGl0LiBEaWFtb25kIGl0ZW1zIGFsd2F5cyByZXF1aXJlIGFuIGFkamFjZW50IGVwaWMgZm9yZ2UsIG5vdCBhIHRhYmxlLgotICoqUGxhY2luZyoqOiBmYWNlIHRoZSB0YXJnZXQgdGlsZSwgdGhlbiB1c2UgdGhlIHBsYWNlIGFjdGlvbi4gVGFibGVzIGFuZCBmdXJuYWNlcyBuZWVkIGFuIGVtcHR5IG5vbi1zb2xpZCB0aWxlIHRoYXQgaXMgbm90IHdhdGVyIG9yIGxhdmE7IHN0b25lIGNhbiBhbHNvIGJlIHBsYWNlZCBpbnRvIHdhdGVyIChjb3N0cyAxIHN0b25lKS4gUGxhY2UgUGxhbnQgcHV0cyBhIHNhcGxpbmcgb24gdGhlIGZhY2VkIHRpbGUuIFBsYWNlIFRvcmNoIGxpZ2h0cyBkYXJrIGFyZWFzLgotICoqUmFuZ2VkIGNvbWJhdCoqOiB1c2UgU2hvb3QgQXJyb3cgd2hpbGUgZmFjaW5nIGEgY3JlYXR1cmUgKHJlcXVpcmVzIGEgYm93ICsgYXJyb3dzKS4gQm93cyBhcmUgZm91bmQgaW4gZHVuZ2VvbiBjaGVzdHMuCi0gKipFbGl0ZSBtb2JzKiogYXJlIHRvdWdoZXIgYW5kIGRlYWwgbW9yZSBkYW1hZ2U7IGNvb3JkaW5hdGluZyB3aXRoIHRlYW1tYXRlcyAobXVsdGlwbGUgYWdlbnRzIGF0dGFja2luZyB0b2dldGhlcikgbWFrZXMgdGhlbSBtdWNoIGVhc2llciB0byBkZWZlYXQuCi0gKipSZXF1ZXN0L0dpdmUqKjogdXNlIFJlcXVlc3QgW1Jlc291cmNlXSB0byBicm9hZGNhc3QgYSByZXNvdXJjZSByZXF1ZXN0IHRvIHRlYW1tYXRlcyBmb3IgMTAgdHVybnM7IHRlYW1tYXRlcyBjYW4gdXNlIEdpdmUgdG8gQWdlbnQgWCB0byB0cmFuc2ZlciBvbmUgdW5pdCBvZiB0aGUgcmVxdWVzdGVkIHJlc291cmNlIGRpcmVjdGx5IC0tIG5vIGFkamFjZW5jeSByZXF1aXJlZCwgd29ya3MgYXQgYW55IGRpc3RhbmNlLiBHaXZlIG9ubHkgYXBwZWFycyBhcyBhbiBhdmFpbGFibGUgYWN0aW9uIHdoZW4gYSB0ZWFtbWF0ZSBoYXMgYW4gYWN0aXZlIFJlcXVlc3QuCgojIyBTdXJ2aXZhbCBzdGF0cwpGb29kLCBkcmluaywgYW5kIGVuZXJneSBkZXBsZXRlIGdyYWR1YWxseSBvdmVyIHRpbWUgLS0gcm91Z2hseSBldmVyeSAyMC0zMCBzdGVwcyB5b3UgbG9zZSAxIHBvaW50IG9mIGVhY2ggKGRleHRlcml0eSBzbG93cyB0aGlzIHJhdGUpLiBXaGVuIGZvb2Qgb3IgZHJpbmsgcmVhY2hlcyAwLCB5b3VyIGhlYWx0aCBzdGFydHMgZHJvcHBpbmcuIFdoZW4gZW5lcmd5IHJlYWNoZXMgMCwgeW91IGF1dG9tYXRpY2FsbHkgZmFsbCBhc2xlZXAgYW5kIGNhbm5vdCBhY3QgdW50aWwgZW5lcmd5IGlzIGZ1bGwuIFdoaWxlIHNsZWVwaW5nLCB5b3UgdGFrZSAyLjV4IGRhbWFnZSBmcm9tIGFsbCBzb3VyY2VzLiBNYW5hIGRvZXMgTk9UIGRlY2F5IC0tIGl0IGlzIG9ubHkgc3BlbnQgYnkgY2FzdGluZyBzcGVsbHMgb3IgZW5jaGFudGluZy4gTWFuYSBzbG93bHkgcmVnZW5lcmF0ZXMgb3ZlciB0aW1lIChmYXN0ZXIgd2hpbGUgc2xlZXBpbmcpLgotICoqU2xlZXAqKjogY2hvb3NlIHRoaXMgdm9sdW50YXJpbHkgdG8gcmVjb3ZlciBlbmVyZ3kgYXQgMnggdGhlIHBhc3NpdmUgcmF0ZS4gRW5kcyBhdXRvbWF0aWNhbGx5IHdoZW4gZW5lcmd5IGlzIGZ1bGwuCi0gKipSZXN0Kio6IGNob29zZSB0aGlzIHRvIHJlY292ZXIgaGVhbHRoIGdyYWR1YWxseS4gUmVxdWlyZXMgZm9vZCwgZHJpbmssIGFuZCBlbmVyZ3kgYWxsID4gMDsgZW5kcyB3aGVuIGhlYWx0aCBpcyBmdWxsIG9yIGEgc3RhdCBydW5zIG91dC4KCiMjIFJvbGVzClJvbGUtcmVzdHJpY3RlZCBhY3Rpb25zIHN1Y2NlZWQgd2l0aCByZWR1Y2VkIHByb2JhYmlsaXR5IGZvciBub24tc3BlY2lhbGlzdHMuIERlcGVuZGluZyBvbiB0aGUgZGlmZmljdWx0eSBjb25maWd1cmF0aW9uLCBub24tc3BlY2lhbGlzdCBzdWNjZXNzIHJhdGVzIGFyZSAxMCUKCi0gKipGb3JhZ2VyKio6IGNvbGxlY3Rpbmcgd2F0ZXIsIHNhcGxpbmdzLCBlYXRpbmcgcGFzc2l2ZSBtb2JzIChlLmcuIGNvd3MvYmF0cy9zbmFpbHMpLiBBbHNvIGhhcyAzeCBiYXNlIGZvb2QgYW5kIGRyaW5rIGNhcGFjaXR5LgotICoqTWluZXIqKjogY3JhZnRpbmcgcGlja2F4ZXMvdG9yY2hlcywgcGxhY2luZyBzdG9uZS4KLSAqKldhcnJpb3IqKjogY3JhZnRpbmcgc3dvcmRzIGFuZCBhcnJvd3MuIEFsc28gZGVhbHMgMnggbWVsZWUgZGFtYWdlLCBhbmQgc3BlY2lhbGl6ZXMgaW4gZW5jaGFudGluZyBzd29yZHMgYW5kIGJvd3MuCi0gTm8gcm9sZSByZXN0cmljdGlvbjogUGxhY2UgVGFibGUsIFBsYWNlIEZ1cm5hY2UsIFdvb2QgU3dvcmQsIElyb24gQXJtb3VyLCBEaWFtb25kIEFybW91cgoKIyMgQ29vcmRpbmF0aW9uClNvbWUgdGFza3MsIHRpbGVzLCBjcmVhdHVyZXMsIGFuZCBzdHJ1Y3R1cmVzIHJlcXVpcmUgbXVsdGlwbGUgYWdlbnRzLiBXaGVuIGNvbGxhYm9yYXRpb24gaXMgcG9zc2libGUgdGhlIG9ic2VydmF0aW9uIHdpbGwgaW5jbHVkZSBhIHNob3J0IGNvb3JkaW5hdGlvbiBoaW50LiBGb2xsb3cgdGhlIHJ1bGVzIGJlbG93IHRvIGNvb3JkaW5hdGUgc2FmZWx5IGFuZCBlZmZpY2llbnRseS4KCi0gKipTeW5jKio6IE4gYWdlbnRzIG11c3QgZWFjaCBzdGFuZCBvbiBhIGRpZmZlcmVudCB0aWxlIGFkamFjZW50IHRvIHRoZSBzaGFyZWQgdGFyZ2V0LCBlYWNoIGZhY2luZyBpdCwgYW5kIGFsbCBjaG9vc2UgdGhlICoqRG8qKiBhY3Rpb24gb24gdGhlIHNhbWUgdHVybi4gQXBwcm9hY2ggZnJvbSBkaWZmZXJlbnQgc2lkZXMgc28gZXZlcnkgYWdlbnQgdGFyZ2V0cyB0aGUgc2hhcmVkIHRpbGUgZGlyZWN0bHkuIElmIGEgdGVhbW1hdGUgaXMgYmV0d2VlbiB5b3UgYW5kIHRoZSB0YXJnZXQsIHlvdXIgKipEbyoqIHdpbGwgaGl0IHRoZSB0ZWFtbWF0ZSBpbnN0ZWFkIGFuZCBjYW4gY2F1c2UgZnJpZW5kbHkgZmlyZS4KLSAqKkhhbmRvdmVyKio6IG9uZSBhZ2VudCBzdGFydHMgdGhlIHRhc2sgd2l0aCAqKkRvKiogKHBheXMgdGhlIHJlc291cmNlcyByZXF1aXJlZCksIGFuZCBhbm90aGVyIGFnZW50IGZpbmlzaGVzIGl0IHdpdGggKipEbyoqIHdpdGhpbiBhIHNtYWxsIHRpbWUgd2luZG93IHNob3duIGluIHRoZSBvYnNlcnZhdGlvbi4gSWYgbm8gYWdlbnQgY29tcGxldGVzIGl0IGluIHRpbWUsIHRoZSBzaXRlIHJlc2V0cyBhbmQgbWF0ZXJpYWxzIGFyZSByZWZ1bmRlZCB0byB0aGUgaW5pdGlhdG9yLiBGb2xsb3cgdGhlIGV4YWN0IGhhbmRvdmVyIHRpbWluZyB3aGVuIHNwZWNpZmllZC4KLSAqKkNvbnN0cnVjdGlvbioqOiBDb25zdHJ1Y3Rpb24gc2l0ZXMgKHNoZWx0ZXJzLCBmb3JnZXMsIGJlYWNvbnMpIG1heSByZXF1aXJlIGVpdGhlciBzeW5jIG9yIGhhbmRvdmVyLiBBbHdheXMgZm9sbG93IHRoZSBjb29yZGluYXRpb24gcnVsZSBzaG93biBpbiB0aGUgb2JzZXJ2YXRpb24gZm9yIHRoYXQgc2l0ZS4KLSAqKkVsaXRlIG1vYnMqKjogc3Ryb25nZXIgZW5lbWllcyBtYXkgYmVuZWZpdCBmcm9tIG9yIHJlcXVpcmUgY29vcmRpbmF0ZWQgYXR0YWNrcy4gQXR0YWNrIGZyb20gZGlmZmVyZW50IHNpZGVzLCBhdm9pZCBzdGFuZGluZyBiZXR3ZWVuIGEgdGVhbW1hdGUgYW5kIHRoZSBtb2IsIGFuZCBhdm9pZCBibG9ja2luZyBhbm90aGVyIGFnZW50J3MgYXR0YWNrLgotICoqUmV2aXZlKio6IEZhY2UgYSBkb3duZWQgdGVhbW1hdGUgYW5kIHVzZSAqKkRvKiogdG8gcmV2aXZlIHRoZW0uCi0gKipFcGljIGZvcmdlIC8gRGlhbW9uZCBjcmFmdGluZyoqOiBEaWFtb25kLXRpZXIgaXRlbXMgcmVxdWlyZSBtdWx0aXBsZSBhZ2VudHMgdG8gY3JhZnQgc2ltdWx0YW5lb3VzbHkgYXQgYW4gYWRqYWNlbnQgZXBpYyBmb3JnZS4gQWxsIHJlcXVpcmVkIGFnZW50cyBtdXN0IGNob29zZSB0aGUgY3JhZnRpbmcgYWN0aW9uIGZvciB0aGUgc2FtZSBpdGVtIG9uIHRoZSBzYW1lIHR1cm4gd2hpbGUgYWRqYWNlbnQgdG8gdGhlIGZvcmdlLgoKIyMgUmVzb3VyY2UgY2hhaW4KVHJlZXMgLT4gd29vZCAobm8gdG9vbCByZXF1aXJlZCkgLT4gU3RvbmUvQ29hbCAobmVlZHMgd29vZCBwaWNrYXhlKSAtPiBJcm9uIChuZWVkcyBzdG9uZSBwaWNrYXhlKSAtPiBEaWFtb25kIChpcm9uIHBpY2theGUpIC0+IFJ1YnkvU2FwcGhpcmUgKGRpYW1vbmQgcGlja2F4ZSkKCiMjIENyYWZ0aW5nIHJlY2lwZXMKQWxsIHJlY2lwZXMgY29uc3VtZSB0aGUgbGlzdGVkIG1hdGVyaWFscy4KU3RhdGlvbnM6IFRhYmxlICgyIHdvb2QpLCBGdXJuYWNlICgxIHN0b25lKQotIFdvb2QgcGlja2F4ZS9zd29yZDogdGFibGUgKyAxIHdvb2QKLSBTdG9uZSBwaWNrYXhlL3N3b3JkOiB0YWJsZSArIDEgd29vZCArIDEgc3RvbmUKLSBJcm9uIHBpY2theGUvc3dvcmQ6IHRhYmxlICsgZnVybmFjZSArIDEgd29vZCArIDEgc3RvbmUgKyAxIGlyb24gKyAxIGNvYWwKLSBJcm9uIGFybW91cjogdGFibGUgKyBmdXJuYWNlICsgMyBpcm9uICsgMyBjb2FsCi0gRGlhbW9uZCBwaWNrYXhlOiBlcGljIGZvcmdlICsgMSB3b29kICsgMyBkaWFtb25kICsgZW5vdWdoIGFnZW50cyBjcmFmdGluZyB0aGUgc2FtZSBpdGVtIHRoZXJlIG9uIHRoZSBzYW1lIHR1cm4KLSBEaWFtb25kIHN3b3JkOiBlcGljIGZvcmdlICsgMSB3b29kICsgMiBkaWFtb25kICsgZW5vdWdoIGFnZW50cyBjcmFmdGluZyB0aGUgc2FtZSBpdGVtIHRoZXJlIG9uIHRoZSBzYW1lIHR1cm4KLSBEaWFtb25kIGFybW91cjogZXBpYyBmb3JnZSArIDMgZGlhbW9uZCArIGVub3VnaCBhZ2VudHMgY3JhZnRpbmcgdGhlIHNhbWUgaXRlbSB0aGVyZSBvbiB0aGUgc2FtZSB0dXJuCi0gQXJyb3dzOiB0YWJsZSArIDEgd29vZCArIDEgc3RvbmUgKHlpZWxkcyAyKQotIFRvcmNoOiB0YWJsZSArIDEgd29vZCArIDEgY29hbCAoeWllbGRzIDQpCgpDb25zdHJ1Y3Rpb24gKGF0IGEgY29uc3RydWN0aW9uIHNpdGUsIGZhY2UgaXQgYW5kIHVzZSBCdWlsZCBhY3Rpb24pOgotIEJ1aWxkIFNoZWx0ZXI6IG5lZWRzIDEwIHdvb2QgKyA1IHN0b25lLiBTaGVsdGVycyByZXN1bHQgaW4gKzUwJQotIEJ1aWxkIEZvcmdlOiBuZWVkcyAxMCBzdG9uZSArIDMgaXJvbiArIDIgY29hbC4gQ3JlYXRlcyBhbiBlcGljIGZvcmdlLCB3aGljaCBlbmFibGVzIGRpYW1vbmQgZ2VhciBjcmFmdGluZy4KLSBCdWlsZCBCZWFjb246IG5lZWRzIDMgaXJvbiArIDIgY29hbC4gRXhwYW5kcyB0aGUgbGl0IGFyZWEgb24gdGhpcyBsZXZlbC4KCiMjIEF0dHJpYnV0ZXMKR2FpbiAxIFhQIGVhY2ggdGltZSB5b3UgZGVzY2VuZCB0byBhIG5ldyBmbG9vci4gU3BlbmQgWFAgd2l0aCBMZXZlbCBVcCBhY3Rpb25zLgotICoqU3RyZW5ndGgqKjogbWF4IGhlYWx0aCA9IDggKyBzdHJlbmd0aAotICoqRGV4dGVyaXR5Kio6IG1heCBmb29kID0gNyArIDIqZGV4dGVyaXR5ICgrMiBleHRyYSBmb3IgZm9yYWdlcnMpOyBtYXggZHJpbmsgPSBzYW1lOyBtYXggZW5lcmd5ID0gNyArIDIqZGV4dGVyaXR5Ci0gKipJbnRlbGxpZ2VuY2UqKjogbWF4IG1hbmEgPSA2ICsgMyppbnRlbGxpZ2VuY2U7IGVuY2hhbnRtZW50IGRhbWFnZSArNSUKCiMjIFByb2dyZXNzaW9uCjEuIEdhdGhlciB3b29kIC0+IHBsYWNlIGEgdGFibGUgLT4gY3JhZnQgYSB3b29kIHBpY2theGU7IGNyYWZ0IGEgd29vZCBzd29yZCBlYXJseSBpZiBjb21iYXQgaXMgbGlrZWx5LgoyLiBNaW5lIHN0b25lIGFuZCBjb2FsIC0+IHBsYWNlIGEgZnVybmFjZSAtPiBjcmFmdCBpcm9uIHRvb2xzIGFuZCBpcm9uIGFybW91ci4KMy4gVG8gZGVzY2VuZDogc3RhbmQgb24gdGhlIGBsYWRkZXJfZG93bmAgdGlsZSAodmlzaWJsZSBpbiB5b3VyIG9ic2VydmF0aW9uIHdoZW4gY2xvc2UpIGFuZCB1c2UgdGhlIERlc2NlbmQgYWN0aW9uLiBUaGUgbGFkZGVyIG9ubHkgYmVjb21lcyB1c2FibGUgYWZ0ZXIgZW5vdWdoIG1vbnN0ZXJzIG9uIHRoYXQgbGV2ZWwgaGF2ZSBiZWVuIGtpbGxlZC4gT25seSBvbmUgYWdlbnQgbmVlZHMgdG8gdXNlIERlc2NlbmQvQXNjZW5kIC0tIGFsbCB0ZWFtbWF0ZXMgYXJlIHRlbGVwb3J0ZWQgd2l0aCB0aGVtLgo8L2dhbWVfcnVsZXM+Cgo8YWNoaWV2ZW1lbnRzPgojIyBBY2hpZXZlbWVudHMKQ29sbGVjdCBXb29kClBsYWNlIFRhYmxlCkVhdCBDb3cKQ29sbGVjdCBTYXBsaW5nCkNvbGxlY3QgRHJpbmsKQ29sbGVjdCBGb29kCk1ha2UgV29vZCBQaWNrYXhlCk1ha2UgV29vZCBTd29yZApQbGFjZSBQbGFudApEZWZlYXQgWm9tYmllCkNvbGxlY3QgU3RvbmUKUGxhY2UgU3RvbmUKRWF0IFBsYW50CkRlZmVhdCBTa2VsZXRvbgpNYWtlIFN0b25lIFBpY2theGUKTWFrZSBTdG9uZSBTd29yZApXYWtlIFVwClBsYWNlIEZ1cm5hY2UKQ29sbGVjdCBDb2FsCkNvbGxlY3QgSXJvbgpDb2xsZWN0IERpYW1vbmQKTWFrZSBJcm9uIFBpY2theGUKTWFrZSBJcm9uIFN3b3JkCk1ha2UgQXJyb3cKTWFrZSBUb3JjaApQbGFjZSBUb3JjaApNYWtlIERpYW1vbmQgUGlja2F4ZQpNYWtlIERpYW1vbmQgU3dvcmQKTWFrZSBJcm9uIEFybW91cgpNYWtlIERpYW1vbmQgQXJtb3VyCkVudGVyIEdub21pc2ggTWluZXMKQ29vcmQgMiBBZ2VudHMgU29mdApDb29yZCBMYXJnZSBQYXNzaXZlIEtpbGwKQ29vcmQgTWluZSBTdG9uZSBTb2Z0CkNvb3JkIE1pbmUgU3RvbmUgSGFyZApDb29yZCBNaW5lIENvYWwgU29mdApDb29yZCBNaW5lIENvYWwgSGFyZApDb29yZCAyIEFnZW50cyBIYXJkCkNvb3JkIDMgQWdlbnRzIFNvZnQKSGFuZG92ZXIgQ29tcGxldGUKQ29vcmQgTWluZSBIYW5kb3ZlcgpDb29yZCBNaW5lIElyb24gU29mdApDb29yZCBNaW5lIElyb24gSGFyZApDb29yZCBNaW5lIERpYW1vbmQgU29mdApDb29yZCBNaW5lIERpYW1vbmQgSGFyZApDb29yZCBCdWlsZCBTaGVsdGVyCkNvb3JkIDMgQWdlbnRzIEhhcmQKQ29vcmQgQnVpbGQgRm9yZ2UKQ29vcmQgQnVpbGQgQmVhY29uCkNvb3JkIERpYW1vbmQgUGlja2F4ZQpDb29yZCBEaWFtb25kIFN3b3JkCkNvb3JkIERpYW1vbmQgQXJtb3VyCkNvb3JkIEVsaXRlIE1lbGVlIEtpbGwKQ29vcmQgRWxpdGUgUmFuZ2VkIEtpbGwKPC9hY2hpZXZlbWVudHM+Cgo8b3V0cHV0X2Zvcm1hdD4KRWFjaCB0dXJuIHlvdSByZWNlaXZlIGFuIG9ic2VydmF0aW9uIHNob3dpbmcgd2hhdCB5b3Ugc2VlLCB5b3VyIGludmVudG9yeSwgdGVhbW1hdGVzLCBhbmQgYXZhaWxhYmxlIGFjdGlvbnMuClRoaW5rIGZpcnN0LCB0aGVuIG91dHB1dCBzdHJpY3RseSBpbiB0aGUgZm9sbG93aW5nIGZvcm1hdDoKMS4gKFJlcXVpcmVkKSBFeGFjdGx5IG9uZSBhY3Rpb24gZnJvbSB0aGUgYXZhaWxhYmxlIGFjdGlvbiBsaXN0Ogo8YWN0aW9uPllPVVJfQ0hPU0VOX0FDVElPTjwvYWN0aW9uPgoyLiAoT3B0aW9uYWwpIEJyb2FkY2FzdCB0byB0ZWFtbWF0ZXMsIHVwIHRvIDQwMCBjaGFycy4gVGVhbW1hdGVzIGNhbiBvbmx5IGFjdCBvbiB3aGF0IHlvdSB0ZWxsIHRoZW0uIEJlIHNwZWNpZmljIChlLmcuICdEaWcgb24gdHJlZSBuZXh0IHR1cm4nLCAnTGFkZGVyIGF0IDVORScsICdOZWVkIDIgd29vZCcpLiBSZXBseSB0byB0ZWFtbWF0ZXMnIHJlcXVlc3RzLgo8Y29tbXVuaWNhdGlvbj5ZT1VSX01FU1NBR0U8L2NvbW11bmljYXRpb24+CjMuIChPcHRpb25hbCkgUHJpdmF0ZSBub3RlcywgdXAgdG8gMTAwMCBjaGFycyAtLSBub3Qgc2hhcmVkIHdpdGggdGVhbW1hdGVzLiBZb3VyIGNvbnRleHQgcmVzZXRzIGVhY2ggdHVybiAtLSB0aGlzIGlzIHlvdXIgb25seSBtZW1vcnkuIERvbid0IHJlcGVhdCB3aGF0J3MgYWxyZWFkeSBpbiB5b3VyIG9ic2VydmF0aW9uOyBzdG9yZSB3aGF0IHlvdSdsbCBuZWVkIGxhdGVyLiBSZWNvcmQgdGVhbW1hdGVzJyBwbGFucyBhbmQgYW55IGZhY3RzIHlvdSdsbCBuZWVkIGFmdGVyIHRoZXkgc2Nyb2xsIG91dCBvZiB2aWV3Lgo8c2NyYXRjaHBhZD5ZT1VSX05PVEVTPC9zY3JhdGNocGFkPgpJbXBvcnRhbnQ6IGV2ZXJ5IHRhZyB5b3Ugb3BlbiBtdXN0IGJlIGNsb3NlZCAoZS5nLiA8Y29tbXVuaWNhdGlvbj4uLi48L2NvbW11bmljYXRpb24+KS4KVG9rZW4gYnVkZ2V0OiA4MTkyIHRva2VucyBmb3IgeW91ciBmdWxsIHJlc3BvbnNlIChpbmNsdWRpbmcgcmVhc29uaW5nKS4gS2VlcCByZWFzb25pbmcgY29uY2lzZSBhbmQgc3RvcCB0aGlua2luZyBlYXJseSBlbm91Z2ggdG8gZW1pdCBldmVyeSByZXF1aXJlZCB0YWcgLS0gaWYgeW91IGV4aGF1c3QgdGhlIGJ1ZGdldCBtaWQtcmVhc29uaW5nLCBubyBhY3Rpb24gaXMgcHJvZHVjZWQgYW5kIHlvdXIgdHVybiBmYWlscy4KPC9vdXRwdXRfZm9ybWF0Pg==)

system

You are Agent 1 (forager) in a 3-agent cooperative survival game. Your goal is to gather resources, craft gear, fight monsters, and descend through 9 dungeon levels, while coordinating with teammates. You must survive – if your health reaches zero, you die, and if all agents die the game ends. Maximize the number of achievements while staying alive.

<game\_rules>

## How to play

- Each turn, choose exactly one action.

- \*\*Movement\*\* uses absolute directions: north, south, east, and west. Any move attempt changes your facing to that direction, even if the move is blocked and you stay in place. A move is blocked if the target tile is solid, including trees, stone, ore veins, walls, crafting stations, chests, and plants, or if it contains water, lava, a mob, or another player. If repeated move attempts do not change your position, that direction is blocked. You can also use a blocked move to turn in place, for example to face an adjacent tree.

- \*\*Facing\*\*: your facing direction is set by your last movement action and persists until you move again. \*\*Do\*\* always targets the tile in your current facing direction.

- \*\*Do\*\* is your main interaction: face a tile and use the \*\*Do\*\* action on exactly that tile to chop trees, mine ore, attack creatures, drink water, open chests, or revive a downed teammate. If the faced tile contains a downed teammate, Do revives them. If the faced tile contains a living teammate, Do targets that teammate instead and can cause friendly fire. For synchronous-style coordination, all required agents must stand next to the same target tile, face it, and act together.

- \*\*Crafting\*\*: stand next to (including diagonally) the required station and use the craft action; you do NOT need to face it. Diamond items always require an adjacent epic forge, not a table.

- \*\*Placing\*\*: face the target tile, then use the place action. Tables and furnaces need an empty non-solid tile that is not water or lava; stone can also be placed into water (costs 1 stone). Place Plant puts a sapling on the faced tile. Place Torch lights dark areas.

- \*\*Ranged combat\*\*: use Shoot Arrow while facing a creature (requires a bow + arrows). Bows are found in dungeon chests.

- \*\*Elite mobs\*\* are tougher and deal more damage; coordinating with teammates (multiple agents attacking together) makes them much easier to defeat.

- \*\*Request/Give\*\*: use Request [Resource] to broadcast a resource request to teammates for 10 turns; teammates can use Give to Agent X to transfer one unit of the requested resource directly – no adjacency required, works at any distance. Give only appears as an available action when a teammate has an active Request.

## Survival stats

Food, drink, and energy deplete gradually over time – roughly every 20-30 steps you lose 1 point of each (dexterity slows this rate). When food or drink reaches 0, your health starts dropping. When energy reaches 0, you automatically fall asleep and cannot act until energy is full. While sleeping, you take 2.5x damage from all sources. Mana does NOT decay – it is only spent by casting spells or enchanting. Mana slowly regenerates over time (faster while sleeping).

- \*\*Sleep\*\*: choose this voluntarily to recover energy at 2x the passive rate. Ends automatically when energy is full.

- \*\*Rest\*\*: choose this to recover health gradually. Requires food, drink, and energy all > 0; ends when health is full or a stat runs out.

## Roles

Role-restricted actions succeed with reduced probability for non-specialists. Depending on the difficulty configuration, non-specialist success rates are 10%

- \*\*Forager\*\*: collecting water, saplings, eating passive mobs (e.g. cows/bats/snails). Also has 3x base food and drink capacity.

- \*\*Miner\*\*: crafting pickaxes/torches, placing stone.

- \*\*Warrior\*\*: crafting swords and arrows. Also deals 2x melee damage, and specializes in enchanting swords and bows.

- No role restriction: Place Table, Place Furnace, Wood Sword, Iron Armour, Diamond Armour

## Coordination

Some tasks, tiles, creatures, and structures require multiple agents. When collaboration is possible the observation will include a short coordination hint. Follow the rules below to coordinate safely and efficiently.

- \*\*Sync\*\*: N agents must each stand on a different tile adjacent to the shared target, each facing it, and all choose the \*\*Do\*\* action on the same turn. Approach from different sides so every agent targets the shared tile directly. If a teammate is between you and the target, your \*\*Do\*\* will hit the teammate instead and can cause friendly fire.

- \*\*Handover\*\*: one agent starts the task with \*\*Do\*\* (pays the resources required), and another agent finishes it with \*\*Do\*\* within a small time window shown in the observation. If no agent completes it in time, the site resets and materials are refunded to the initiator. Follow the exact handover timing when specified.

- \*\*Construction\*\*: Construction sites (shelters, forges, beacons) may require either sync or handover. Always follow the coordination rule shown in the observation for that site.

- \*\*Elite mobs\*\*: stronger enemies may benefit from or require coordinated attacks. Attack from different sides, avoid standing between a teammate and the mob, and avoid blocking another agent’s attack.

- \*\*Revive\*\*: Face a downed teammate and use \*\*Do\*\* to revive them.

- \*\*Epic forge / Diamond crafting\*\*: Diamond-tier items require multiple agents to craft simultaneously at an adjacent epic forge. All required agents must choose the crafting action for the same item on the same turn while adjacent to the forge.

## Resource chain

Trees -> wood (no tool required) -> Stone/Coal (needs wood pickaxe) -> Iron (needs stone pickaxe) -> Diamond (iron pickaxe) -> Ruby/Sapphire (diamond pickaxe)

## Crafting recipes

All recipes consume the listed materials.

Stations: Table (2 wood), Furnace (1 stone)

- Wood pickaxe/sword: table + 1 wood

- Stone pickaxe/sword: table + 1 wood + 1 stone

- Iron pickaxe/sword: table + furnace + 1 wood + 1 stone + 1 iron + 1 coal

- Iron armour: table + furnace + 3 iron + 3 coal

- Diamond pickaxe: epic forge + 1 wood + 3 diamond + enough agents crafting the same item there on the same turn

- Diamond sword: epic forge + 1 wood + 2 diamond + enough agents crafting the same item there on the same turn

- Diamond armour: epic forge + 3 diamond + enough agents crafting the same item there on the same turn

- Arrows: table + 1 wood + 1 stone (yields 2)

- Torch: table + 1 wood + 1 coal (yields 4)

Construction (at a construction site, face it and use Build action):

- Build Shelter: needs 10 wood + 5 stone. Shelters result in +50%

- Build Forge: needs 10 stone + 3 iron + 2 coal. Creates an epic forge, which enables diamond gear crafting.

- Build Beacon: needs 3 iron + 2 coal. Expands the lit area on this level.

## Attributes

Gain 1 XP each time you descend to a new floor. Spend XP with Level Up actions.

- \*\*Strength\*\*: max health = 8 + strength

- \*\*Dexterity\*\*: max food = 7 + 2\*dexterity (+2 extra for foragers); max drink = same; max energy = 7 + 2\*dexterity

- \*\*Intelligence\*\*: max mana = 6 + 3\*intelligence; enchantment damage +5%

## Progression

1. Gather wood -> place a table -> craft a wood pickaxe; craft a wood sword early if combat is likely.

2. Mine stone and coal -> place a furnace -> craft iron tools and iron armour.

3. To descend: stand on the ‘ladder\_down‘ tile (visible in your observation when close) and use the Descend action. The ladder only becomes usable after enough monsters on that level have been killed. Only one agent needs to use Descend/Ascend – all teammates are teleported with them.

</game\_rules>

<achievements>

## Achievements

Collect Wood

Place Table

Eat Cow

Collect Sapling

Collect Drink

Collect Food

Make Wood Pickaxe

Make Wood Sword

Place Plant

Defeat Zombie

Collect Stone

Place Stone

Eat Plant

Defeat Skeleton

Make Stone Pickaxe

Make Stone Sword

Wake Up

Place Furnace

Collect Coal

Collect Iron

Collect Diamond

Make Iron Pickaxe

Make Iron Sword

Make Arrow

Make Torch

Place Torch

Make Diamond Pickaxe

Make Diamond Sword

Make Iron Armour

Make Diamond Armour

Enter Gnomish Mines

Coord 2 Agents Soft

Coord Large Passive Kill

Coord Mine Stone Soft

Coord Mine Stone Hard

Coord Mine Coal Soft

Coord Mine Coal Hard

Coord 2 Agents Hard

Coord 3 Agents Soft

Handover Complete

Coord Mine Handover

Coord Mine Iron Soft

Coord Mine Iron Hard

Coord Mine Diamond Soft

Coord Mine Diamond Hard

Coord Build Shelter

Coord 3 Agents Hard

Coord Build Forge

Coord Build Beacon

Coord Diamond Pickaxe

Coord Diamond Sword

Coord Diamond Armour

Coord Elite Melee Kill

Coord Elite Ranged Kill

</achievements>

<output\_format>

Each turn you receive an observation showing what you see, your inventory, teammates, and available actions.

Think first, then output strictly in the following format:

1. (Required) Exactly one action from the available action list:

<action>YOUR\_CHOSEN\_ACTION</action>

2. (Optional) Broadcast to teammates, up to 400 chars. Teammates can only act on what you tell them. Be specific (e.g. ’Dig on tree next turn’, ’Ladder at 5NE’, ’Need 2 wood’). Reply to teammates’ requests.

<communication>YOUR\_MESSAGE</communication>

3. (Optional) Private notes, up to 1000 chars – not shared with teammates. Your context resets each turn – this is your only memory. Don’t repeat what’s already in your observation; store what you’ll need later. Record teammates’ plans and any facts you’ll need after they scroll out of view.

<scratchpad>YOUR\_NOTES</scratchpad>

Important: every tag you open must be closed (e.g. <communication>…</communication>).

Token budget: 8192 tokens for your full response (including reasoning). Keep reasoning concise and stop thinking early enough to emit every required tag – if you exhaust the budget mid-reasoning, no action is produced and your turn fails.

</output\_format>

[⬇](data:text/plain;base64,VGhlIExMTSByZWNlaXZlcyB0aGUgbGFzdCA4IG9ic2VydmF0aW9uLWFjdGlvbiB0dXJucyBhcyBjb250ZXh0LiBCZWxvdyB3ZSBzaG93IHRoZSBjdXJyZW50IG9ic2VydmF0aW9uIGZyb20gb25lIHR1cm4uCgpTdGVwOiAwLzEwMDAwICgxMDAwMCByZW1haW5pbmcsIGVuZHMgZWFybHkgaWYgYWxsIGFnZW50cyBkaWUpCkN1cnJlbnQgT2JzZXJ2YXRpb246ClBvc2l0aW9uOiAoeD0yNSwgeT0yNCkKUm9sZTogZm9yYWdlcgpMb2NhdGlvbjogT3ZlcndvcmxkIChzdXJmYWNlKQpBY2hpZXZlbWVudHM6IDAvOTMgKDM5IHVubG9jayBsYXRlcikKCkxldmVsIGluZm86Ci0gTGlnaHQ6IGJyaWdodCAoMC44MCkKLSBMZXZlbDogY2xlYXJlZCAtLSB5b3UgY2FuIGZpbmQgdGhlIGxhZGRlciBkb3duIHRpbGUgYW5kIHVzZSBEZXNjZW5kIHRvIGdvIGRlZXBlci4KCllvdSBzZWU6Ci0gdHJlZSAzIHN0ZXBzIG5vcnRoICh4PTI1LCB5PTIxKQotIGNvbnN0cnVjdGlvbl9zaXRlIDEgc3RlcCBub3J0aCAoeD0yNSwgeT0yMykKLSB3YXRlciA1IHN0ZXBzIGVhc3QgKHg9MzAsIHk9MjQpCgpGYWNpbmc6IG5vcnRoLgpEbyB0YXJnZXQ6IGNvbnN0cnVjdGlvbl9zaXRlICh4PTI1LCB5PTIzKS4KCkNvb3JkaW5hdGlvbjoKLSBjb25zdHJ1Y3Rpb25fc2l0ZSAxIHN0ZXAgbm9ydGggKHg9MjUsIHk9MjMpOiByZXF1aXJlcyAyIGFnZW50cyB0byB1c2UgYSBCdWlsZCBhY3Rpb24gc2ltdWx0YW5lb3VzbHkgKGZhaWxzIGFsb25lKS4gWW91IGFyZSBvbiB0aGUgc291dGggc2lkZSwgYWRqYWNlbnQgKGZhY2luZyB0YXJnZXQpLgotIGNvbnN0cnVjdGlvbl9zaXRlIDEgc3RlcCB3ZXN0ICh4PTI0LCB5PTI0KTogd29ya3Mgc29sbyBidXQgZ3JhbnRzIGEgYm9udXMgd2hlbiAzIGFnZW50cyB1c2UgYSBCdWlsZCBhY3Rpb24gc2ltdWx0YW5lb3VzbHkuIFlvdSBhcmUgb24gdGhlIGVhc3Qgc2lkZSwgYWRqYWNlbnQgKGZhY2luZyBub3J0aCkuCi0gdHJlZSAxIHN0ZXAgc291dGggYW5kIDIgc3RlcHMgd2VzdCAoeD0yMywgeT0yNSk6IHdvcmtzIHNvbG8gYnV0IGdyYW50cyBhIGJvbnVzIHdoZW4gMiBhZ2VudHMgc2VsZWN0IERvIHNpbXVsdGFuZW91c2x5LiBZb3UgYXJlIG9uIHRoZSBub3J0aC1lYXN0IHNpZGUsIDMgc3RlcHMgYXdheS4KLSB0cmVlIDIgc3RlcHMgbm9ydGggYW5kIDIgc3RlcHMgZWFzdCAoeD0yNywgeT0yMik6IHJlcXVpcmVzIDMgYWdlbnRzIHRvIHNlbGVjdCBEbyBzaW11bHRhbmVvdXNseSAoZmFpbHMgYWxvbmUpLiBZb3UgYXJlIG9uIHRoZSBzb3V0aC13ZXN0IHNpZGUsIDQgc3RlcHMgYXdheS4KClRlYW1tYXRlczoKQWdlbnQgMCAod2Fycmlvcik6IDEgc3RlcCB3ZXN0ICh4PTI0LCB5PTI0KSwgaGVhbHRoPTkKQWdlbnQgMiAobWluZXIpOiAxIHN0ZXAgc291dGggYW5kIDEgc3RlcCB3ZXN0ICh4PTI0LCB5PTI1KSwgaGVhbHRoPTkKCllvdXIgc3RhdHVzOgotIGhlYWx0aDogOQotIGZvb2Q6IDkKLSBkcmluazogOQotIGVuZXJneTogOQotIG1hbmE6IDkKLSB4cDogMAoKQXR0cmlidXRlczoKLSBkZXh0ZXJpdHk6IDEKLSBzdHJlbmd0aDogMQotIGludGVsbGlnZW5jZTogMQoKWW91IGhhdmUgbm90aGluZyBpbiB5b3VyIGludmVudG9yeS4KCkF2YWlsYWJsZSBhY3Rpb25zOgogLSBOb29wCiAtIE1vdmUgV2VzdAogLSBNb3ZlIEVhc3QKIC0gTW92ZSBOb3J0aAogLSBNb3ZlIFNvdXRoCiAtIERvCiAtIFNsZWVwCiAtIFJlc3QKIC0gUmVxdWVzdCBGb29kCiAtIFJlcXVlc3QgRHJpbmsKIC0gUmVxdWVzdCBXb29kCiAtIFJlcXVlc3QgU3RvbmUKIC0gUmVxdWVzdCBJcm9uCiAtIFJlcXVlc3QgQ29hbAogLSBSZXF1ZXN0IERpYW1vbmQKIC0gUmVxdWVzdCBSdWJ5CiAtIFJlcXVlc3QgU2FwcGhpcmUKCi0tLQpSZXNwb25zZSBmb3JtYXQgKGluIHRoaXMgb3JkZXIpOiA8YWN0aW9uPiAsIDxjb21tdW5pY2F0aW9uPiAsIDxzY3JhdGNocGFkPi4gQ2xvc2UgZXZlcnkgdGFnIHlvdSBvcGVuLg==)

The LLM receives the last 8 observation-action turns as context. Below we show the current observation from one turn.

Step: 0/10000 (10000 remaining, ends early if all agents die)

Current Observation:

Position: (x=25, y=24)

Role: forager

Location: Overworld (surface)

Achievements: 0/93 (39 unlock later)

Level info:

- Light: bright (0.80)

- Level: cleared – you can find the ladder down tile and use Descend to go deeper.

You see:

- tree 3 steps north (x=25, y=21)

- construction\_site 1 step north (x=25, y=23)

- water 5 steps east (x=30, y=24)

Facing: north.

Do target: construction\_site (x=25, y=23).

Coordination:

- construction\_site 1 step north (x=25, y=23): requires 2 agents to use a Build action simultaneously (fails alone). You are on the south side, adjacent (facing target).

- construction\_site 1 step west (x=24, y=24): works solo but grants a bonus when 3 agents use a Build action simultaneously. You are on the east side, adjacent (facing north).

- tree 1 step south and 2 steps west (x=23, y=25): works solo but grants a bonus when 2 agents select Do simultaneously. You are on the north-east side, 3 steps away.

- tree 2 steps north and 2 steps east (x=27, y=22): requires 3 agents to select Do simultaneously (fails alone). You are on the south-west side, 4 steps away.

Teammates:

Agent 0 (warrior): 1 step west (x=24, y=24), health=9

Agent 2 (miner): 1 step south and 1 step west (x=24, y=25), health=9

Your status:

- health: 9

- food: 9

- drink: 9

- energy: 9

- mana: 9

- xp: 0

Attributes:

- dexterity: 1

- strength: 1

- intelligence: 1

You have nothing in your inventory.

Available actions:

- Noop

- Move West

- Move East

- Move North

- Move South

- Do

- Sleep

- Rest

- Request Food

- Request Drink

- Request Wood

- Request Stone

- Request Iron

- Request Coal

- Request Diamond

- Request Ruby

- Request Sapphire

—

Response format (in this order): <action> , <communication> , <scratchpad>. Close every tag you open.

## Appendix D MARL Baselines

Figure 16: MARL 100m Results. MARL baseline performance over 5 training seeds, reported as the mean percentage of max achievable reward with 95% CIs and decomposed into coordination (dark) and base (light) reward.


(a) Base Reward – Easy

(b) Base Reward – Medium

(c) Base Reward – Hard

(d) Coord Reward – Easy

(e) Coord Reward – Medium

(f) Coord Reward – Hard

(g) Total Reward – Easy

(h) Total Reward – Medium

(i) Total Reward – Hard

Figure 17: 
Learning curves during training for MARL baselines across coordination difficulty, trained for 100m steps.
Individual panels (a)-(i) break down performance by environment difficulty (Easy, Medium, Hard) and reward type (Base, Coordination, Total). Curves show the mean across 5 independent training seeds; shaded regions are 95% bootstrap confidence intervals. Base and coordination scores are normalised by their category-specific achievable maxima, while total reward is normalised by the full achievable reward.


(a) Base Reward – Easy

(b) Base Reward – Medium

(c) Base Reward – Hard

(d) Coord Reward – Easy

(e) Coord Reward – Medium

(f) Coord Reward – Hard

(g) Total Reward – Easy

(h) Total Reward – Medium

(i) Total Reward – Hard

Figure 18: 
Learning curves during training for MARL baselines across coordination difficulty, trained for one billion steps.
Individual panels (a)-(i) break down performance by environment difficulty (Easy, Medium, Hard) and reward type (Base, Coordination, Total). Curves show the mean across 5 independent training seeds; shaded regions are 95% bootstrap confidence intervals. Base and coordination scores are normalised by their category-specific achievable maxima, while total reward is normalised by the full achievable reward.

## Appendix E Additional LLM Experiments and Ablations

### E.1 Environment calibration: multi-agent structure adds difficulty beyond the base game.

Figure 19: Environment calibration.
Base reward for Gemma-4-31B-it across settings sharing the same underlying world. Cooperative achievements are excluded so all settings are directly comparable. Error bars show $95\%$ bootstrap CIs.

Before evaluating full alem, we isolate how much difficulty is introduced by the multi-agent structure beyond the underlying open-ended environment dynamics. We evaluate Gemma-4-31B-it in four settings that share the same base world: a single-agent setting, a multi-agent setting without role pressure or coordination tasks, a multi-agent setting with soft specialisation, and full alem at $\alpha=0.9$ (Hard).

Fig. [19](https://arxiv.org/html/2606.08340v1#A5.F19 "Figure 19 ‣ E.1 Environment calibration: multi-agent structure adds difficulty beyond the base game. ‣ Appendix E Additional LLM Experiments and Ablations ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents") shows a steady decline in Base reward, the only reward category directly comparable across all settings: $12.8\%$ in the single-agent setting, $11.4\%$ with multiple agents, $10.1\%$ with soft specialisation, and $7.3\%$ in full alem. The key comparison is the single-agent setting versus full alem: a $43\%$ relative drop on the same underlying world. This calibration suggests that alem’s difficulty is not reducible to the base game. Adding agents changes the dynamics as each agent’s transition depends on the actions of the others, soft specialisation adds role-allocation pressure, and full alem adds explicit coordination requirements. We do not over-interpret the intermediate steps, since adjacent confidence intervals overlap and this calibration uses one open-weight model. Instead, the result serves as a sanity check that full alem introduces multi-agent failure modes absent from single-agent progression.

## Appendix F Qualitative Analysis

Our qualitative analysis of the LLM agents’ memory, reasoning and communication can be found under sections [G.3](https://arxiv.org/html/2606.08340v1#A7.SS3 "G.3 Qualitative examples ‣ Appendix G Memory entry usage: detailed analysis ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents"), [H.3](https://arxiv.org/html/2606.08340v1#A8.SS3 "H.3 Qualitative examples ‣ Appendix H Reasoning ablation: detailed analysis ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents") and [I.3](https://arxiv.org/html/2606.08340v1#A9.SS3 "I.3 Qualitative examples ‣ Appendix I Inter-agent communication style ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents") respectively.

## Appendix G Memory entry usage: detailed analysis

### G.1 Setup

We compare how Gemini 3.1 Pro and Gemma use the persistent memory field across episodes. This is the same trajectory set used in the communication analysis: $10$ Gemini episodes ($34{,}080$ agent-step records) and $20$ Gemma episodes ($24{,}747$ records). Each record contains the persisted scratchpad string, which we refer to as the agent’s *memory entry*, together with the parsed action and local observation. Parse failures are negligible, under $0.5\%$ for both models.

##### Lexical detectors.

Structural features, such as character counts and line counts, are computed directly. The remaining features in Table [9](https://arxiv.org/html/2606.08340v1#A7.T9 "Table 9 ‣ G.2 Quantitative results ‣ Appendix G Memory entry usage: detailed analysis ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents") are simple regular-expression detectors over the raw memory-entry text. These detectors are intended as interpretable proxies rather than full discourse parsers. We define them as follows:

- •

  Multi-line memory entry ($\geq 2$ lines). The memory entry contains at least one newline.
- •

  Turn-indexed plan. The memory entry has at least two lines whose first non-whitespace tokens match
  “T $N$ :” or “Turn $N$ :”
  for an integer $N$. This captures explicit turn-by-turn plans,
  such as “*T9: Do (completes handover …)*”.
- •

  Compact state summary. The memory entry contains at least two
  “Field: value” fields drawn from a fixed vocabulary of status labels
  (*Pos, Position, HP, Health, Inv, Inventory, Energy, Hunger, Thirst, A1, A2, Agent*).
  This captures compact one-line entries that mainly record position, resources, health, or teammate state.
- •

  Plan / future-tense word. *will, going to,
  gonna, plan, planning, next, then, after, once, when*, plus
  future-tense modal forms (*i’ll, we’ll, i will, we
  will*). “Plan terms / entry” counts every match, while
  “% of entries” fires if at least one match is present.
- •

  Past-tense / memory word. *tried, failed, was,
  were, did, didn’t, couldn’t, earlier, before, already, just,
  noticed, saw*.
- •

  Coordinate reference. A token matching
  \(?\s\*-?\d+\s\*,\s\*-?\d+\s\*\)?,
  i.e. a pair of integers, possibly wrapped in parentheses,
  such as “$25,23$” or “$(0,-1)$”.
- •

  Teammate reference. An “Agent $X$” or
  “A$X$” token for $X\in\{0,1,2\}$, optionally
  followed by a comma or a status colon.
- •

  Step-to-step turnover. For every consecutive pair of
  controlled memory entries, we compute (a) the SequenceMatcher
  character similarity ratio and (b) Jaccard similarity over lower-cased
  tokens. Higher values indicate more overlap between consecutive entries.

The absolute values depend on the exact detector definitions, but the qualitative differences below are stable across seeds and robust to reasonable variants of the regexes.

### G.2 Quantitative results

Table [9](https://arxiv.org/html/2606.08340v1#A7.T9 "Table 9 ‣ G.2 Quantitative results ‣ Appendix G Memory entry usage: detailed analysis ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents") shows that the two models use the memory field in different ways. Gemini tends to write longer, multi-line entries with explicit future plans. Gemma writes shorter entries that more often summarise the current state.

Table 9: Memory entry usage on controlled steps (mean $\pm$ std across runs;
Gemini $n=10$, Gemma $n=20$). Top: structural style. Middle: content.
Bottom: step-to-step turnover from one controlled memory entry to the next.

|  |  |  |
| --- | --- | --- |
|  | Gemini 3.1 Pro | Gemma |
| *Structural style* | | |
| entry characters | $206.7\pm 16.4$ | $153.0\pm 9.6$ |
| entry lines | $3.86\pm 0.72$ | $1.08\pm 0.06$ |
| multi-line entry ($\geq 2$ lines), % of entries | $71.5\pm 7.2$ | $2.0\pm 1.3$ |
| turn-indexed plan ($\geq 2$ lines), % of entries | $12.4\pm 9.4$ | $0.2\pm 0.2$ |
| compact state summary ($\geq 2$ status fields), % | $4.7\pm 1.8$ | $16.1\pm 4.3$ |
| *Content* | | |
| plan / future-tense word, % of entries | $75.3\pm 2.5$ | $36.6\pm 5.2$ |
| past-tense / memory word, % of entries | $9.0\pm 1.1$ | $6.7\pm 1.4$ |
| coordinate reference, % of entries | $90.7\pm 3.1$ | $98.8\pm 1.1$ |
| teammate reference, % of entries | $68.0\pm 7.0$ | $70.8\pm 7.1$ |
| coord references / entry | $3.52\pm 0.71$ | $4.01\pm 0.49$ |
| plan terms / entry | $1.60\pm 0.11$ | $0.52\pm 0.08$ |
| *Step-to-step turnover (controlled $\to$ next controlled entry)* | | |
| char similarity (sequence ratio) | $0.44\pm 0.02$ | $0.58\pm 0.04$ |
| Jaccard on tokens | $0.37\pm 0.01$ | $0.47\pm 0.04$ |

Three patterns stand out.

##### Gemini writes plans; Gemma writes state summaries.

The structural differences are large. Gemini writes $3.86$ lines per memory entry on average, compared with $1.08$ for Gemma. Similarly, $71.5\%$ of Gemini entries have at least two lines, compared with $2.0\%$ for Gemma. Gemini also uses explicit turn-indexed plans in $12.4\%$ of entries, while Gemma almost never uses this format ($0.2\%$). Reading the entries gives the same picture: Gemini often lays out the next few turns line by line, whereas Gemma usually writes a compact one-line summary of position, recent obstacles, next movement, and teammate state.

##### Neither model uses the pad as memory.

Both models use the memory entry more for immediate planning or state tracking than for recording past failures or lessons. Past-tense or retrospective tokens, such as *tried*, *failed*, *earlier*, *before*, *already*, and *noticed*, appear in only $9.0\%$ of Gemini entries and $6.7\%$ of Gemma entries. This is notable because the memory entry is one of the few persistent within-episode channels available to the model. It could be used to record facts such as a failed craft attempt, a previous handover, or an already-tested route, but the models rarely use it in this way. This could also be due to the history (last 8 observations and actions) agents receive in each observation.

##### Both models actively rewrite their memory entries.

The memory entries are not simply copied forward unchanged. Consecutive controlled entries have token Jaccard similarity of $0.37$ for Gemini and $0.47$ for Gemma, with character-level similarity of $0.44$ and $0.58$, respectively. This indicates substantial rewriting from one controlled step to the next. Gemini rewrites more than Gemma, consistent with its planning-oriented usage: it often recomputes the next few actions rather than incrementally updating a fixed state summary.

### G.3 Qualitative examples

##### Example selection.

The examples below are illustrative rather than randomly sampled. We hold the role fixed across models by showing agent $0$, the warrior, so that role-gated penalties and action affordances are comparable. We only show controlled steps, since forced Noop steps copy the previous memory entry. The Gemini example is a representative turn-indexed plan from run 02, step 9. The two Gemma examples, from run 00 step 0 and run 06 step 473, illustrate that the compact state-summary format appears both early and later in the episode. We did not search for unusually coherent or unusually successful entries. In our sample, we found no Gemma entries with the turn-indexed planning pattern.

Gemini 3.1 Pro: run 02, agent 0
(warrior), step 9, action: Do

T9: Do (completes handover at 26,23)
  
T10: Move West (towards 21,23)
  
T11: Give wood to Agent 1 (since A1 will Request Wood on T10)
  
T12+: Move West to table, then Make Wood Pickaxe.
  
Since I’m a warrior, pickaxe crafting has a chance to fail (40% or whatever the config is), so I’ll keep trying if it does.

Gemma 4: agent 0 (warrior), runs 00 & 06

Run 00, step 0   action: Move North
  
Starting resource collection. Agent 1 (Forager) is best for wood (25, 23). Agent 2 (Miner) is best for stone (20, 23). I will move to (24, 23) to assist with wood gathering.
Run 06, step 473   action: Move North
  
Current (0, 19). Hit stone at (0, 20) and edge at x=-1. Moving North to (0, 18) to reposition and start searching East. A2 is searching North. A1 still sleeping.

The examples illustrate the quantitative differences in Table [9](https://arxiv.org/html/2606.08340v1#A7.T9 "Table 9 ‣ G.2 Quantitative results ‣ Appendix G Memory entry usage: detailed analysis ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents"). The Gemini entry is an explicit turn-indexed plan: it records the current coordinated action, predicts a teammate request, schedules a resource transfer, and includes a contingency for the warrior crafting penalty. The Gemma entries instead compress the current situation into a short state summary: position, recent obstacle, next movement, and teammate status. These examples reflect the broader pattern: Gemini tends to use memory entries to maintain near-future plans, while Gemma tends to use them to restate the current state.

## Appendix H Reasoning ablation: detailed analysis

### H.1 Setup

The reasoning ablation differs across models because of API constraints. Gemini 3.1 Pro does not allow reasoning to be disabled, so we compare the high-reasoning baseline to a low-reasoning setting, denoted *Gemini-Low*. Gemma allows the reasoning trace to be disabled entirely, denoted *Gemma-No-Reasoning*. Gemini-Low still records $879\pm 44$ characters and $198\pm 20$ tokens of raw\_reasoning per controlled step on average, so it should be interpreted as a partial ablation.

We collected $10$ Gemini-Low episodes and $18$ Gemma-No-Reasoning episodes. We reuse the same metrics as in App. [G](https://arxiv.org/html/2606.08340v1#A7 "Appendix G Memory entry usage: detailed analysis ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents") for memory entries on controlled steps, and App. [I](https://arxiv.org/html/2606.08340v1#A9 "Appendix I Inter-agent communication style ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents") for messages across all records. The lexical detectors are exactly those defined in the corresponding appendices: turn-indexed plans, plan-word and past-word lexicons, coordinate references, imperative verbs, and related markers. The baseline columns in Table [10](https://arxiv.org/html/2606.08340v1#A8.T10 "Table 10 ‣ H.2 Quantitative results ‣ Appendix H Reasoning ablation: detailed analysis ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents") are copied from Tables [9](https://arxiv.org/html/2606.08340v1#A7.T9 "Table 9 ‣ G.2 Quantitative results ‣ Appendix G Memory entry usage: detailed analysis ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents") and [11](https://arxiv.org/html/2606.08340v1#A9.T11 "Table 11 ‣ I.2 Quantitative results ‣ Appendix I Inter-agent communication style ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents").

### H.2 Quantitative results

Table 10: Effect of reducing reasoning on memory-entry and message style
(mean $\pm$ std across runs). Baseline columns are from
Tables [9](https://arxiv.org/html/2606.08340v1#A7.T9 "Table 9 ‣ G.2 Quantitative results ‣ Appendix G Memory entry usage: detailed analysis ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents")–[11](https://arxiv.org/html/2606.08340v1#A9.T11 "Table 11 ‣ I.2 Quantitative results ‣ Appendix I Inter-agent communication style ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents"); ablated columns are
the new runs ($n=10$ Gemini-Low, $n=18$ Gemma-No-Reasoning). The
memory-entry block uses controlled steps only; the message block uses
all records.

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  | Gemini 3.1 Pro | | Gemma | |
|  | Baseline | Low-Reason | Baseline | No-Reason |
| *Memory entries (controlled steps only)* | | | | |
| entry characters | $206.7\pm 16.4$ | $\mathbf{69.2\pm 1.9}$ | $153.0\pm 9.6$ | $\mathbf{228.5\pm 22.4}$ |
| entry lines | $3.86\pm 0.72$ | $\mathbf{1.04\pm 0.01}$ | $1.08\pm 0.06$ | $1.10\pm 0.12$ |
| multi-line entry ($\geq 2$ lines), % | $71.5\pm 7.2$ | $\mathbf{2.1\pm 0.5}$ | $2.0\pm 1.3$ | $1.9\pm 2.3$ |
| turn-indexed plan, % | $12.4\pm 9.4$ | $\mathbf{0.1\pm 0.0}$ | $0.2\pm 0.2$ | $0.2\pm 0.1$ |
| plan / future word, % | $75.3\pm 2.5$ | $\mathbf{35.5\pm 2.5}$ | $36.6\pm 5.2$ | $\mathbf{73.9\pm 5.7}$ |
| past / memory word, % | $9.0\pm 1.1$ | $2.9\pm 0.5$ | $6.7\pm 1.4$ | $\mathbf{18.3\pm 2.8}$ |
| coordinate ref, % | $90.7\pm 3.1$ | $\mathbf{45.5\pm 5.4}$ | $98.8\pm 1.1$ | $96.1\pm 2.5$ |
| teammate ref, % | $68.0\pm 7.0$ | $\mathbf{27.8\pm 6.4}$ | $70.8\pm 7.1$ | $77.2\pm 7.2$ |
| plan terms / entry | $1.60\pm 0.11$ | $\mathbf{0.49\pm 0.04}$ | $0.52\pm 0.08$ | $\mathbf{1.28\pm 0.16}$ |
| *Messages (all records)* | | | | |
| msg characters | $132.4\pm 16.0$ | $\mathbf{52.9\pm 3.4}$ | $104.1\pm 7.9$ | $98.3\pm 13.1$ |
| sentences / msg | $3.22\pm 0.40$ | $\mathbf{1.55\pm 0.09}$ | $2.60\pm 0.16$ | $2.28\pm 0.18$ |
| multi-sentence ($\geq 2$), % | $93.7\pm 2.0$ | $\mathbf{47.3\pm 6.7}$ | $87.9\pm 4.5$ | $88.7\pm 4.9$ |
| imperative verb, % | $73.7\pm 6.6$ | $\mathbf{38.7\pm 5.4}$ | $52.2\pm 7.3$ | $\mathbf{62.2\pm 10.8}$ |
| plan / future word, % | $59.1\pm 5.3$ | $\mathbf{22.1\pm 3.4}$ | $27.0\pm 3.8$ | $\mathbf{37.6\pm 7.2}$ |
| contains coordinate, % | $56.5\pm 10.0$ | $\mathbf{25.6\pm 6.8}$ | $66.8\pm 10.7$ | $67.6\pm 8.7$ |
| politeness (*please/thanks*), % | $14.0\pm 3.1$ | $10.4\pm 3.0$ | $20.9\pm 4.8$ | $\mathbf{27.1\pm 8.8}$ |
| self-refs / msg | $1.65\pm 0.18$ | $\mathbf{0.67\pm 0.12}$ | $0.92\pm 0.17$ | $1.16\pm 0.22$ |

##### Gemini loses much of its planner-like behaviour.

Under low reasoning, the memory-entry features that characterised Gemini in the baseline largely disappear. Entry length falls from $207$ to $69$ characters, multi-line entries from $71.5\%$ to $2.1\%$, and turn-indexed plans from $12.4\%$ to $0.1\%$. The message channel changes in the same direction: messages fall from $132$ to $53$ characters, from $3.22$ to $1.55$ sentences, from $73.7\%$ to $38.7\%$ imperative verb usage, and from $56.5\%$ to $25.6\%$ references to coordinates. In short, the low-reasoning setting appears to remove much of the outward planning and directive communication observed in the baseline.

##### Gemma shifts more deliberation into memory entries.

Gemma shows a different pattern. With reasoning disabled, memory entries become longer rather than shorter ($153\to 228$ characters), often approaching the harness’s $\sim\!1000$-character cap. Their content also becomes more plan-like: plan-word rate rises from $36.6\%$ to $73.9\%$, plan terms per entry from $0.52$ to $1.28$, and past-tense or reflective tokens from $6.7\%$ to $18.3\%$. The entries still average roughly one line ($1.10$ vs. $1.08$), so the change is not toward Gemini-style turn-indexed plans. Instead, Gemma writes longer single-line deliberations inside the memory field. The messages shift modestly in the same direction, with higher imperative usage ($52.2\%\to 62.2\%$) and more plan words ($27.0\%\to 37.6\%$).

##### This compensation is incomplete.

Although Gemma appears to move some deliberation into the memory and message fields, performance still falls in the main ablation results: Coord.% drops by $3.3$ points and Base% by $2.7$ points. Gemini, which does not show the same expansion of memory entries, loses more Coord.% ($-7.8$ points) and also loses Base% ($-3.5$ points). Thus, the behavioural traces match the quantitative ablation: reducing reasoning changes how models use the remaining harness channels, but those changes do not recover the lost performance.

### H.3 Qualitative examples

##### Example selection.

The examples below are illustrative rather than randomly sampled. For Gemini-Low, we show a typical one-line memory entry and a rare surviving turn-indexed plan. For Gemma-No-Reasoning, we show a long single-line deliberation and a reflective debugging entry. We hold the agent role fixed where possible, using agent $0$ as the warrior in three of the four excerpts. We use agent $2$ for the long Gemma deliberation example because that excerpt better illustrates the near-cap memory-entry behaviour. Within these constraints, we selected matching examples from fixed runs rather than searching across runs for the most extreme cases.

Gemini-Low: run 00, agent 0
(warrior)

Step 1   action: Move East   *(typical one-line memory entry)*
  
Memory entry: *“Moving East to reach tree at 27,23 to
coordinate with agents.”*
  
Message: *“Moving to tree at 27,23 for 3-agent
gather.”*
Step 60   action: Move South   *(rare surviving turn-indexed plan)*
  
*Pathing to 29,28 to attack cow at 29,27.
  
Current: 27,26
  
T60: Move South (to 27,27)
  
T61: Move South (to 27,28)
  
T62: Move East (to 28,28)
  
T63: Move East (to 29,28)
  
T64: Do*

Gemma-No-Reasoning: agent 0
(warrior) & agent 2

Run 00, agent 2, step 9   action: Move East
  *(long single-line deliberation)*
  
*Current position (25, 25). Target tree (27, 23).
  
Path: (25, 25) -> (26, 25) -> (26, 24) [facing North] -> Do.
  
Agent 0 is at (26, 23) facing North/West? (Wait, Agent 0 is at 26,23,
tree is at 27,23, so Agent 0 is West of tree and facing East). Agent 1
is at (27, 24) facing North. I will move to (26, 24) and face North
(wait, if I’m at 26, 24 and tree is 27, 23, I should face East).
Correct target: Tree (27, 23). My current pos: (25, 25). Action: Move
East to (26, 25). Next: Move North to (26, 24), then Move East to face
(27, 23)…Actually, if I move to (26, 23) I’d be on top of Agent 0.
I’ll go (26, 25) -> (26, 24) -> face East to target (27, 24)? No, tree
is at (27, 23). […]*
Run 02, agent 0, step 211   action: Move North
  *(reflective debugging)*
  
*[…] Wait, I just tried Move West several times and stayed at
(25, 22). Let me check why. The construction site is at (24, 22).
Construction sites are solid. I must go around. […] Actually,
looking at the observation, my last 5 moves were Move West and I
stayed at (25, 22). This confirms (24, 22) is blocked.*

The examples reflect the quantitative pattern in Table [10](https://arxiv.org/html/2606.08340v1#A8.T10 "Table 10 ‣ H.2 Quantitative results ‣ Appendix H Reasoning ablation: detailed analysis ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents"). Gemini-Low usually writes short memory entries and short messages; the turn-indexed format remains possible, but is rare. Gemma-No-Reasoning, by contrast, keeps the one-line memory format but fills it with path enumeration, corrections, and retrospective debugging. This suggests that disabling the reasoning trace changes not only performance, but also where each model places its intermediate deliberation.

## Appendix I Inter-agent communication style

### I.1 Setup

We analyse the per-step message\_sent field, which is the open communication channel available to agents during an episode. We use the same trajectories as in the scratchpad analysis: $10$ Gemini 3.1 Pro episodes and $20$ Gemma 4 episodes, resulting in $34{,}080$ and $24{,}747$ agent-step records respectively.

##### Lexical detectors.

To characterise how agents use the channel, we compute a small set of lexical features from the raw message text. These are deliberately simple probes rather than discourse parsers. Their purpose is to capture stable differences in communication style, such as whether a message gives an instruction, names a teammate, asks a question, or records a plan. Table [11](https://arxiv.org/html/2606.08340v1#A9.T11 "Table 11 ‣ I.2 Quantitative results ‣ Appendix I Inter-agent communication style ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents") reports the resulting rates. For completeness, the detectors are defined as follows:

- •

  Imperative verb. A sentence-initial base-form verb
  from a fixed action lexicon
  (*move, go, do, place, make, drink, eat, attack, give,
  request, mine, chop, gather, face, wait, stay, build, kill,
  head, bring, get, take, drop, equip, craft, sleep, rest, hold,
  return, follow, stop, switch, prioritize, focus, defend*),
  optionally preceded by an addressee (“*Agent X,*”). We
  also count the same verbs when they immediately follow a
  teammate addressee elsewhere in the message. “Imperatives per
  message” counts all matches; “contains an imperative” is
  binary.
- •

  Broadcast phrasing. A leading first-person plural
  cohortative: *let’s, lets, let us, we should, we will, we
  need to, we must, we’ll*.
- •

  Addresses specific teammate. A token of the form
  “*Agent $X$,*” or “*Agent\_$X$,*” followed by a
  clause, where $X\in\{0,1,2\}$.
- •

  Acknowledgement. *ok, okay, got it, copy,
  acknowledged, agreed, sounds good, on it, will do, roger*.
- •

  Question. A question mark outside coordinate tokens.
- •

  Politeness. *please, thanks, thank you, ty*.
- •

  Urgency. *now, urgent, urgently, immediately,
  asap, critical, critically, hurry, quickly, fast,
  right now*.
- •

  Plan / future-tense word. *will, going to,
  gonna, plan, planning, next, then, after, once, when*, plus
  future-tense modal forms (*i’ll, we’ll, i will, we will*).
- •

  Past-tense / memory word. *tried, failed, was,
  were, did, didn’t, couldn’t, earlier, before, already, just,
  noticed, saw*.
- •

  Coordinate. A token matching
  \(?\s\*-?\d+\s\*,\s\*-?\d+\s\*\)?,
  i.e. a pair of integers possibly wrapped in parentheses,
  such as “$25,23$” or “$(0,-1)$”.
- •

  Self-reference density. Count of *i, my, me,
  i’m, i’ll, mine* tokens, normalised per message.

The absolute values should be interpreted as proxy measurements, since they depend on the chosen lexicons. The main comparisons below are more important: the gaps are stable across seeds and robust to reasonable variants of the detectors.

### I.2 Quantitative results

Table [11](https://arxiv.org/html/2606.08340v1#A9.T11 "Table 11 ‣ I.2 Quantitative results ‣ Appendix I Inter-agent communication style ‣ Benchmarking Open-Ended Multi-Agent Coordination in Language Agents") groups the results into structural style, speech-act and pragmatic markers, and content turnover between consecutive messages.

Table 11: Inter-agent message style across all records (mean $\pm$ std
across runs; Gemini $n=10$, Gemma $n=20$). Top: structural style.
Middle: speech-act and pragmatic markers. Bottom: content and turnover.

|  |  |  |
| --- | --- | --- |
|  | Gemini 3.1 Pro | Gemma |
| *Structural style* | | |
| message characters | $132.4\pm 16.0$ | $104.1\pm 7.9$ |
| message words | $28.2\pm 3.8$ | $20.9\pm 1.5$ |
| sentences / message | $3.22\pm 0.40$ | $2.60\pm 0.16$ |
| multi-sentence ($\geq 2$), % of msgs | $93.7\pm 2.0$ | $87.9\pm 4.5$ |
| *Speech-act and pragmatic markers* | | |
| contains imperative verb, % of msgs | $73.7\pm 6.6$ | $52.2\pm 7.3$ |
| imperative verbs / message | $1.80\pm 0.41$ | $1.06\pm 0.20$ |
| contains broadcast phrasing (let’s / we), % | $12.8\pm 4.0$ | $9.7\pm 3.7$ |
| addresses specific teammate (“Agent $X$,”), % | $43.4\pm 7.0$ | $44.1\pm 8.4$ |
| contains acknowledgement, % | $5.3\pm 1.9$ | $6.1\pm 2.2$ |
| contains a question, % | $1.6\pm 0.4$ | $1.7\pm 0.7$ |
| contains an exclamation mark, % | $57.7\pm 7.1$ | $43.8\pm 7.9$ |
| contains *please/thanks*, % | $14.0\pm 3.1$ | $20.9\pm 4.8$ |
| contains urgency word (*now, urgent,* …), % | $14.1\pm 2.5$ | $21.2\pm 3.2$ |
| *Content and turnover* | | |
| contains coordinate, % of msgs | $56.5\pm 10.0$ | $66.8\pm 10.7$ |
| contains future-tense / plan word, % of msgs | $59.1\pm 5.3$ | $27.0\pm 3.8$ |
| contains past-tense / memory word, % of msgs | $8.5\pm 1.4$ | $6.7\pm 1.7$ |
| self-references (*I, my, me*) / message | $1.65\pm 0.18$ | $0.92\pm 0.17$ |
| char similarity vs. previous message | $0.39\pm 0.02$ | $0.48\pm 0.02$ |
| Jaccard vs. previous message | $0.27\pm 0.01$ | $0.32\pm 0.03$ |
| verbatim same as previous message, % | $0.5\pm 1.0$ | $2.0\pm 2.3$ |

Three patterns emerge.

##### Gemini communicates more like a planner.

Gemini sends longer and more directive messages than Gemma. Its messages contain about $27\%$ more characters, about $24\%$ more sentences, and more imperative verbs per message ($1.80$ vs. $1.06$). They also contain more self-references ($1.65$ vs. $0.92$ per message). In the trajectories, this often looks like a model maintaining a team plan: Gemini states what it is doing, assigns actions to particular teammates, and marks when the next coordinated step should happen. Gemma’s messages are shorter and more often read as local status updates.

##### The channel is mostly used to broadcast intent, not to deliberate.

The two models differ in tone. Gemini uses direct commands and exclamation marks more often. Gemma more often uses polite or urgent language: *please/thanks* appears in $20.9\%$ of Gemma messages compared with $14.0\%$ for Gemini, and urgency words appear in $21.2\%$ compared with $14.1\%$. The shared pattern is equally important. Both models address a specific teammate at similar rates ($43.4\%$ vs. $44.1\%$), while questions are rare for both ($1.6\%$ and $1.7\%$). Thus, agents mainly use communication to announce intent, request help, and assign actions, rather than to conduct back-and-forth discussion.

##### Communication style mirrors scratchpad style.

The message channel reflects the same model-specific tendencies seen in the scratchpads. Planning words appear in $59.1\%$ of Gemini messages but only $27.0\%$ of Gemma messages; in scratchpads, the corresponding rates are $75.3\%$ and $36.6\%$. The channels are not redundant: Gemma’s messages are more coordinate-heavy than its scratchpads, while Gemini’s messages are less coordinate-heavy than its scratchpads. Still, the overall pattern is consistent. Gemini uses its scratchpad as a private plan and its messages as outward-facing instructions. Gemma uses its scratchpad more like a state snapshot and its messages more like status reports or requests for help.

### I.3 Qualitative examples

##### How we sampled the examples.

The excerpts below are illustrative, but we sample them with fixed criteria. We compare the same role in both models, agent $0$ (the warrior), so available actions, crafting penalties, and team responsibilities are held constant. We also distinguish between controlled steps, where the agent has a real action choice, and forced Noop steps, where the agent is asleep, resting, or dead, but the harness still asks for a message.

Given these criteria, we take the first qualifying examples in chronological order from Gemini run 00 and Gemma run 00, rather than choosing messages that best fit the table. The only exception is the late HP-critical Gemma message: run 00 does not contain such a forced step, so we use the first matching example from Gemma run 06 at step 700. The Gemini box contains two controlled steps and one forced step; the Gemma box contains one controlled step and two forced steps.

Gemini 3.1 Pro: run 00, agent 0
(warrior)

Step 1   ctrl   action: Move East
  
*“I chopped 25,23. Let’s do the 3-agent tree at 27,23! I’m moving
to its West side (26,23). Agent 0, go to its North side (27,22). Agent
2, go to its South side (27,24). Face the tree and wait, we will ‘Do’
together when everyone is ready.”*
Step 10   ctrl   action: Make Wood Pickaxe
  
*“My wood pickaxe craft failed due to the warrior penalty! Trying
again this turn. Once I get it, I will make a wood sword and then join
you for the 3-agent stone.”*
Step 230   forced   action: Noop   hp $0$
  
*“Agent 2, your health is 1! You are about to die! Drink a potion
IMMEDIATELY to heal if you have one! Place stone to block the orc!”*

Gemma 4: runs 00 & 06, agent 0
(warrior)

Run 00, step 0   ctrl   action: Move
North
  
*“Agent 1: face North and Do the tree at (25, 23). Agent 2: move
to the stone at (20, 23). I’m moving North to (24, 23) to help gather
wood.”*
Run 00, step 100   forced   hp $5$
  
*“Almost there, thanks for waiting.”*
Run 06, step 700   forced   hp $3$
  
*“Agent 1, please prioritize me for food as well, I am at 0 and
my health is critical (3). Staying put.”*

These examples make the lexical patterns easier to interpret. Gemini’s opening message contains a complete coordination proposal: it names the target, assigns positions to each teammate, and specifies when the joint Do action should happen. Its later messages keep this outward-facing style, either explaining the next step in its own plan or giving urgent instructions to another agent. Gemma’s opening message also assigns roles and locations, showing that it can use the channel for coordination. However, its forced-step messages better reflect its aggregate style: concise status updates, polite acknowledgements, and requests tied to local health or resource needs.
