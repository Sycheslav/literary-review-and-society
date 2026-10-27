---
id: web-ojs-aaai-org-05ecebb82a-text
type: material
title: Gu et al., Language-Grounded Co-evolution of Opinions and Ties
work_id: web-ojs-aaai-org-05ecebb82a
source_url: https://ojs.aaai.org/index.php/ICWSM/article/download/42677/50237/46778
retrieved_at: '2026-10-27'
conversion: pdf_text_extraction
quality_note: Текст извлечён из PDF с сохранением номеров страниц. Порядок колонок,
  таблицы, формулы и подписи могут быть искажены; рисунки доступны по ссылке на PDF.
  Это текстовая конверсия, не визуально эквивалентный оригинал.
language: original
sha256_text: 425c1c7c1f21d1cf2d3199590ca1884e52fcca6ec615aa968a24837bc38e3030
---

> Источник: [https://ojs.aaai.org/index.php/ICWSM/article/download/42677/50237/46778](https://ojs.aaai.org/index.php/ICWSM/article/download/42677/50237/46778). Текст извлечён из PDF с сохранением номеров страниц. Порядок колонок, таблицы, формулы и подписи могут быть искажены; рисунки доступны по ссылке на PDF. Это текстовая конверсия, не визуально эквивалентный оригинал.

## Страница 1

                 Proceedings of the Twentieth International AAAI Conference on Web and Social Media (ICWSM 2026)




  Language-Grounded Co-evolution of Opinions and Ties: Paired Rewiring with
                      Large Language Model Agents

           Chenhao Gu1, Ling Luo1, Zainab Razia Zaidi2, Shanika Karunasekera1
                                   1The University of Melbourne, Australia
                                            2Federation University, Australia
                       {chenhao.gu1, ling.luo, karus}@unimelb.edu.au, z.zaidi@federation.edu.au



                      Abstract                              cohesive groups, fragmented neighborhoods, or polarized
                                                                regions separated by sparse connections. Consequently, the
  Modeling how user opinions and social ties co-evolve is cen-         evolving topology of the network provides a concrete lens
   tral to understanding polarization and community formation                                                            through which opinion–network co-evolution can be studied
   in online platforms, yet existing approaches often sacrifice
                                                       and quantified.   either linguistic realism or network structure. We propose a
   simulation framework for studying the co-evolution of on-          Decades of work in opinion dynamics and network sci-
   line networks and opinions, in which large language mod-        ence show that homophily, triadic closure, and selective
   els (LLMs) handle opinion updating, content generation, and        exposure jointly shape how communities form and harden
  network rewiring. This design integrates linguistic signals         (Kossinets and Watts 2006; McPherson, Smith-Lovin, and
   into structural change under real-world constraints, enabling       Cook 2001; Flaxman, Goel, and Rao 2016). In practice,
   systematic comparison across LLMs and empirical validation         these processes are mediated by platform mechanisms such
  on three real-world datasets. Results show that LLM-based         as feeds, recommendation systems, and limited “attention
   simulations consistently outperform equation-based baselines                                                         budgets”—that constrain what users see and when they
   across key network metrics and better reproduce observed
                                                          choose to maintain or drop ties. As a result, the same piece   stance shifts. Analysis of the reasoning behind model de-
                                                                of content can drive different structural outcomes depending   cisions reveals systematic differences in rewiring motives
  and highlights distinct tendencies across models, offering in-       on what alternatives are surfaced and how often users are
   terpretive insight into the network structures they produce.        nudged to reconsider their neighborhoods.
   In addition, varying rewiring probabilities and  strategies            Traditional equation-based models offer clear abstrac-
   demonstrate how platform-like controls shape polarization          tions and identifiable mechanisms such as homophily, in-
  and cohesion. Together, these findings establish a language-         fluence strength, and tie-formation rules, but they represent
  grounded, empirically validated approach to modeling net-         opinions as numbers and tie decisions as parametric func-
  work–opinion co-evolution with greater accuracy and inter-                                                                         tions, leaving out the semantics that actually govern online
   pretability.
                                                                       interaction. Recent LLM-driven simulations move in the op-
                                                                   posite direction: they capture linguistic nuance and can gen-
                Introduction                             erate realistic posts, yet they often leave network evolution
                                                              unconstrained and are rarely validated against real structural
Online social networks are inherently dynamic systems in                                                                      data. What is missing is a unified treatment in which lan-
which both user opinions and the surrounding network struc-                                                        guage both explains and drives the coupled evolution of con-
ture continuously evolve. Users generate and share content                                                                            tent, opinions, and ties—and is assessed against empirical
that reflects their views, while at the same time adjusting                                                          networks rather than only narrative plausibility.
their social ties by unfollowing, following, or forming new                                                          These considerations motivate four central research ques-
connections. This interplay between opinion evolution and                                                                        tions:
network rewiring drives many of the emergent phenomena
                                               RQ1: Can LLMs be used to generate realistic simulations
observed in online communities, ranging from the spread of
                                                                of network interactions, capturing the co-evolution of opin-
information to the formation of polarized groups.
                                                                ions and social ties within a single framework, rather than
  Rather than occurring in isolation, this co-evolutionary                                                            only generating text content?
process manifests through observable structural outcomes
                                               RQ2: Do different LLMs exhibit systematic differences
at the network level. As users update their opinions based
                                                                     in their network-level decision-making, leading to distinct
on the content they encounter and reassess their social con-
                                                                       structural outcomes?
nections accordingly, individual-level changes in language,
                                               RQ3: Can we introduce network-level controls by tuningbeliefs, and ties accumulate over time. These dynamics can
                                                                global interaction parameters in the simulation to generategive rise to diverse community structures, including highly
                                                              reasonable community structures?
Copyright © 2026, Association for the Advancement of Artificial         In this paper, we propose a unified framework in which
Intelligence (www.aaai.org). All rights reserved.               LLMs update user opinions from textual context, generate


                                                   972

## Страница 2

new posts that reflect those updates, and execute paired un-      both structural and opinion dynamics, our approach high-
follow/follow decisions that conserve edge counts while re-       lights how different base LLMs lead to systematically dif-
shaping topology. This design lets us study how users adapt       ferent co-evolution trajectories under the same protocol.
their opinions and connections in response to linguistic and       Opinion Dynamic Modeling The study of opinion dy-
contextual cues, under real-world constraints on exposure      namics in social networks has a rich history, with many clas-
and rewiring frequency. Our contributions can be summa-       sical approaches taking the form of equation-based models.
rized as:                                                     Foundational examples include the Friedkin-Johnson Dy-
  Language-grounded co-evolution. We design a unified      namics Model (Friedkin and Johnsen 1990), which simu-
framework where LLMs simultaneously handle opinion up-       lates opinion evolution based on intrinsic beliefs and so-
dating, content generation, and rewiring, coupling semantic        cial influence, and the Bounded Confidence Model (Def-
interpretation with structural adaptation.                          fuant et al. 2000), which restricts interactions to individuals
  Empirical validation across three domains. Using real-      within a confidence range. More recent works, such as Sasa-
world datasets, we quantitatively compare simulated and ob-      hara et al. (Sasahara et al. 2021), emphasize the dynamic
served networks on multiple network metrics, and evaluate       interplay of opinion polarization and structural adjustments,
stance dynamics among users. These comparisons establish      such as unfollowing, and demonstrate how these behaviors
that LLM-driven simulations reproduce structural regulari-       accelerate the formation of echo chambers. Our work builds
ties more faithfully than equation-based baselines.             on these models by incorporating LLMs to simulate user be-
  Interpretable motives. By examining the explanations      havior and opinion dynamics, leveraging advanced natural
that LLMs provide for their unfollow–follow decisions, we      language understanding to provide deeper insights into the
uncover consistent categories of motives. These patterns are      opinion dynamics.
stable across datasets, offering interpretable insights into
why different models evolve networks in distinct ways.            Problem Statement and Definitions
  Controllability of network evolution. We show that the                                               Problem Statement
global rewiring probability and the choice of rewiring strat-
egy function as explicit control parameters that can be tuned    We study the co-evolution of user opinions and network
to fit simulations to empirical data, thus providing practical       structure in online social systems. Formally, the system at
guidance for applying the framework across domains.            time t is represented as a directed graph G(t) = (V, E(t)),
  Together, these contributions move social simulation be-      where V  is the set of users and E(t) is the set of social
yond rule-driven approximations toward language-driven,      edges (e.g., follow or retweet relations). For each user i,
validated co-evolution, demonstrating that LLMs can cap-     we denote the set of its outgoing neighbors at time t by
ture key structural regularities while providing interpretable      Ni(t) = {j | (i, j) ∈E(t)} . Each user i ∈V holds a dy-
mechanisms that connect model behavior to both empirical      namic opinion Oi(t) that evolves over time, while the edge
validation and governance choices.                                  set E(t) also changes to reflect follow and unfollow events.
                                                   Our goal is to simulate the joint evolution of {Oi(t)} and
                                                       {E(t)} so that the generated stance distributions and net-
               Related Work                                                    work structures better fit real-world observations.
LLM-Driven Social Simulation Leveraging LLMs for so-     Opinion Evolution. Each user’s opinion evolves accord-
cial simulation has recently attracted growing attention, en-      ing to an influence function f, which maps user i’s current
abling researchers to model complex social behaviors and       state and the information from neighbors into a new opinion
population-level phenomena using language-driven agents.       value:
Early  studies predominantly  rely on prompt-based  ap-
proaches to elicit socially plausible behaviors, exemplified            Oi(t + 1) = f Oi(t), {Oj(t) | j ∈Ni(t)}  .
by Generative Agents (Park et al. 2023) and subsequent sys-                                                   The exact form of f depends on the modeling approach.
tems that simulate emotions, attitudes, and interactions to                                                  Network Rewiring. The network structure evolves through
study information or emotion propagation (Gao et al. 2023).                                                            a compatibility function g, which evaluates the suitability of
More recent work applies similar agent-based paradigms to                                                                connections. At each time step, with a global rewiring prob-
opinion-related settings, including the simulation of polar-                                                                         ability p ∈[0, 1], a user i may reconfigure one of its links;
ization and echo chamber effects in online networks (Wang                                                                otherwise, the network remains unchanged. If rewiring is
et al. 2025; Zheng and Tang 2024).                                                                     triggered, the user unfollows one neighbor and follows one
  Our work differs from prior LLM-based social simula-                                                 new candidate:
tions in both focus and evaluation. Rather than centering on
prompt design or explicitly targeting echo chamber forma-           j−= arg min  g Oi(t), Oj(t)  ,
tion (Wang et al. 2025; Chuang et al. 2024), we treat echo                              j∈Ni(t)
chambers as one possible outcome of a broader co-evolution               j+ = arg max g Oi(t), Oj(t)  .
process between network structure and user opinions. To en-                                j∈Ci(t)
able controlled comparison across models, we adopt a mini-                                                       where Ni(t) is the current neighbor set and Ci(t) is the can-
mal and uniform prompting strategy for all LLMs, reducing                                                                 didate set of non-neighbors. The edge set is then updated by
prompt-induced variability. By grounding the simulation in
real-world social network data and quantitatively evaluating           E(t + 1) = E(t) ∪{(i, j+)} \ {(i, j−)}.


                                                   973

## Страница 3

Equation-based Method                                      also generates new content that reflects user i’s opinion and
                                                                     social context:Generally, each user is associated with a numerical opinion
score Oi(t) ∈[−1, 1], where −1 indicates complete opposi-
                                                                            yi(t) ∼LLM Tg(Ci, {Cj | j ∈Ni(t)})  ,tion and +1 indicates strong support. Under this setting, the
abstract functions f and g are instantiated as follows.
                                                       where Tg (generation template) integrates  i’s past posts  The influence function f updates user i’s opinion by ag-
                                                            with those of its neighbors. In this way, opinion dynamics,gregating neighbor information:
                                                                  rewiring, and content generation are unified within a single
                 1                                      framework.
    f = Oi(t) +   X  wij  Oj(t) −Oi(t)  ,
                  |Ni(t)|
                          j∈Ni(t)                               Model Framework
where wij ≥0 denotes the weight of neighbor j’s influence.     The objective of this study is to design a simulation frame-
  The compatibility function g measures the similarity be-     work that closely reflects real-world social network dynam-
tween two users:                                                           ics, where both user opinions and network structures evolve
                                                             over time. The framework models these dynamics through        g Oi(t), Oj(t) = 1 −|Oi(t) −Oj(t)|.
                                                             opinion updates, rewiring of social ties, and language-based
Based on this rule, the neighbor to be unfollowed and the      content generation, as illustrated in Figure 1.
new candidate to be followed are given by
                                               Data Preparation
       j−= arg min  g Oi(t), Oj(t)  ,
                       j∈Ni(t)                            Our framework is designed for online social data that pro-
          j+ = arg max g Oi(t), Oj(t)  .                   vide two essential components: (i) user-generated textual
                         j∈Ci(t)                                     content, which serves as input for opinion inference and con-
                                                                       tent generation, and (ii) explicit interaction signals between
At each rewiring step (triggered with probability p), user i                                                                 users (e.g., retweets or reposts), which are used to construct
unfollows j−and follows j+.                                                                 the underlying user network. No platform-specific metadata
                                                                or proprietary features are required, making the framework
LLM-enhanced Approach                                                                 applicable to a wide range of social platforms.
Building on the same co-evolutionary formulation defined         In this study, we primarily instantiate the framework us-
above, we introduce an LLM-enhanced instantiation of the      ing data from X (Twitter), due to its historical accessibility
influence and compatibility functions. Instead of repre-      and well-established interaction formats. In addition, we in-
senting user opinions solely as low-dimensional numerical      clude a Bluesky dataset with comparable post-level content
variables, this approach models opinions and interactions      and interaction structures to demonstrate that the framework
through textual content and leverages large language mod-       generalizes beyond a single platform. The framework itself
els to evaluate opinion change and rewiring decisions. Im-        is not tied to X and can be readily applied to other platforms
portantly, this formulation is complementary to traditional       that provide similar textual content and interaction signals.
equation-based models rather than a replacement. Each user       To ensure computational  feasibility while preserving
is associated with a content history Ci, and the abstract func-      meaningful network structure, we focus on a subset of
tions f and g are instantiated through prompted LLM evalu-      highly active users rather than simulating the full network.
ations. The influence function f updates user i’s opinion by      Conceptually, active users can be identified using various
considering its own history and that of a neighbor:                   criteria, such as posting frequency, interaction volume, or
                                                         network centrality. In our experiments, we operationalize
               f = LLM(To(Ci, Cj)) ,
                                                                          this selection using a k-core decomposition of the interac-
where To (opinion dynamics template) instructs the model to       tion network and retain users in the maximal k-core. The
assess how user j’s content influences i’s stance. Unlike the      value of k is adjusted per dataset to control the resulting
purely numerical aggregation in equation-based models, this      network size, yielding a subgraph of approximately 1,000
process can incorporate the semantic context of text, such as       users.
references to recent events, new arguments, or shifts in dis-       The resulting network consists of nodes representing
course that go beyond simple averaging. The compatibility       users with inferred opinions and directed edges representing
function g evaluates whether two users are suitable connec-       social interactions (e.g., retweets or reposts). Both opinions
tion partners:                                            and edges evolve over time to reflect the dynamic nature of
                                                                online social interactions.
               g = LLM(Tr(Ci, Cj)) ,
                                                    Simulation Processwhere Tr (rewiring template) guides the model to judge
compatibility based on their historical content. Importantly,     The simulation captures the dynamic evolution of user opin-
different LLMs may provide different rationales for these      ions and network connections in social networks. At each it-
decisions—for instance, prioritizing topical alignment, emo-       eration, a randomly selected user refreshes their feed, view-
tional tone, or information quality—rather than relying      ing a limited subset of posts from connected “friends” or rec-
solely on numerical opinion similarity. Finally, the LLM     ommended content. This process, referred to as the screen,


                                                   974

## Страница 4

Figure 1: The framework is divided into three main components: (1) Data Preparation, where social network data is collected
and used to build a user network; (2) Simulation Process, where an LLM generates user posts and adjusts connections dynam-
ically; and (3) Analysis and Validation, which analyzes the simulated network structure and user’s stance.


represents the information accessible to users via social me-      Validation Process
dia and simulates their finite cognitive capacity in real-world     To assess the credibility and applicability of the simulation,
interactions. Based on the screen and the user’s historical ac-       the framework incorporates a validation process that com-
tivity, the LLM generates a new post that reflects the user’s      pares the simulated network with real-world social network
updated opinion.                                                    data. Validation operates on two complementary levels: Net-
                                                    work structural validation and content/opinion validation.  Subsequently, the user evaluates their network connec-
                                                            For Network structural validation, the simulated networktions and, with a probability p, engages in a rewiring pro-
                                                                                is evaluated against the real-world network using establishedcess. This probabilistic design captures the fact that users do
                                                         network science metrics. These include measures of com-not reconsider their social ties at every interaction, but only
                                                        munity structure, global connectivity, and assortativity (pref-intermittently. When rewiring is activated, the user reviews
                                                             erence for homophily in connections). By comparing thesethe most recent posts of their current friends and selects at
                                                                   metrics, we assess whether the emergent structural patternsmost one connection to sever.
                                                                     in the simulation approximate those observed in empirical
 A candidate set of potential new connections is then gen-       social networks. The subsequent experiments will provide a
erated according to a specified strategy. In the simplest set-     more detailed explanation of the specific metrics employed.
ting, five non-friend users are randomly sampled as candi-        For content and opinion validation, the framework ex-
dates. The user examines the recent posts of these candidates      amines opinion dynamics through stance-based evaluation.
and selects one new connection based on alignment with       Specifically, the distribution of simulated opinions is com-
their historical posts. Abstractly, this process captures a ten-      pared with real-world opinion distributions (e.g., pro/anti
dency toward opinion-aware tie adjustment, rather than en-       stance ratios), and stance transitions are evaluated against
forcing systematic disconnection from opposing views, and      ground-truth labels. These comparisons ensure that the sim-
allows for heterogeneous user behaviors, including selective       ulation not only reproduces structural properties but also
engagement with differing opinions.                             captures realistic patterns of opinion evolution.
                                                                   Together, these validation steps provide a rigorous bench-
  To maintain a stable network scale and facilitate compari-                                                          mark, ensuring that the simulated dynamics approximate
son with real-world data, each rewiring event consists of one                                                                real-world social interactions both in terms of network struc-
edge removal followed by one edge addition, keeping the                                                                     ture and language-based opinion processes.
total number of edges approximately constant. Similar as-
sumptions are commonly adopted in adaptive network mod-               Prompt Templates
els to study opinion-network co-evolution (Sasahara et al.
                                                    To ensure reproducibility and enable systematic exploration2021; Holme and Newman 2006; Kozma and Barrat 2008).
                                                                of different prompt designs, the framework employs stan-Under this mechanism, rewiring primarily reshapes network
                                                              dardized prompting mechanisms. These prompts guide thestructure rather than network size, leading to gradual com-
                                      LLM to model user behaviors effectively while maintainingmunity merging or fragmentation over time.
                                                               consistency across tasks. The prompt design adheres to two
  Over time, the network exhibits clustering among users      key principles: Standardization. Prompts follow a consis-
with similar opinions, while those with conflicting views be-       tent format with explicitly defined tasks and output specifi-
come increasingly isolated. The simulation terminates either       cations. This ensures clarity and reproducibility across sim-
when the network reaches a stable state—characterized by       ulations. Chain-of-Thought Reasoning (Wei et al. 2022).
stabilized opinions and connections—or after a predefined      Prompts encourage step-by-step reasoning to enhance the
number of iterations. The Simulation Process component in       interpretability and reliability of the generated outputs.
Figure 1 illustrates how historical data and network infor-      An example prompt template for generating a new post
mation jointly drive opinion updates and connection adjust-      based on a user’s historical content and surrounding tweets
ments.                                                                        is provided in the Appendix. The same template structure


                                                   975

## Страница 5

is reused across different simulation tasks, such as opin-      and 1, which are then mapped into corresponding texts by
ion updating and network rewiring—by modifying only the       the LLM. This approach is commonly used in related lit-
task, specific instructions and input contexts. This consistent      erature—either scoring with LLMs or directly representing
use of structured prompts enables systematic exploration of      agent states with numerical scores. However, in our exper-
prompt designs and facilitates controlled analysis of how      iments, Gemini clearly struggles to map scores into realis-
prompt variations affect simulation outcomes.                         tic tweets. Even when instructed to generate negative (−1)
                                                                   content, Gemini often attempted to produce neutral or even
               Experiments                           supportive statements about COVID-19 vaccines. This lim-
                                                                         itation is the main reason why our framework abandons di-Stand-Alone Simulation
                                                                       rect use of opinion scores and instead relies on providing
One important application of simulating social network dy-                                                                        historical tweets to guide LLM reasoning.
namics is to model the formation of echo chambers. In                                                              This  experiment  demonstrates  that when combining
this section, we present a pure simulation experiment us-                                           LLMs with the rewiring process, the formation of echo
ing ChatGPT and Gemini to explore how echo chambers                                                        chambers can be effectively illustrated, both through the
emerge. At the beginning of the experiment, each agent is                                                              evolving network structure and the generation of new, natu-
assigned an opinion score drawn from a normal distribution.                                                                            ral language posts. However, it still lacks a clear benchmark
As a result, most agents start with opinions close to neu-                                                                     for determining which simulation is more accurate or realis-
tral, while only a few occupy extreme positions. The sim-                                                                                     tic. This limitation highlights the importance of incorporat-
ulation topic is the COVID-19 vaccine, where −1 denotes                                                               ing real-world data to validate and strengthen the credibility
an anti-vaccine stance and 1 denotes a pro-vaccine stance.                                                                of LLM-driven simulations.
This feasibility test aims to illustrate how LLMs simulate
the evolution and divergence of opinions, ultimately leading                                                  Real Data-Driven Simulation
to clusters of like-minded users.
                                                                In this section, we outline the experimental setup designed
                                                                     to evaluate our proposed framework for modeling network
                                                        dynamics formation using real-world data. We provide a de-
                                                                        tailed description of the datasets, simulation parameters and
                                                                 evaluation metrics employed to analyze opinion dynamics
                                                       and network dynamics across different contexts.
                                                     The experiments are conducted on three datasets:

                                                                       1. COVID-19 Vaccination  Dataset:  This  dataset was
                                                                      collected from global English-language tweets using
                                                            COVID-19-related keywords  . Details about the key-
                                                         words and the collection process can be found in (Lamsal
                                                                 2021). The dataset includes tweets with stances catego-
                                                                      rized as favoring vaccination, opposing vaccination, or
                                                                        neutral, focusing on the topic of vaccine hesitancy (Zaidi
Figure 2: Simulation results using ChatGPT and Gemini.           et al. 2023).
Opinion dynamics at different time steps illustrate the grad-                                                                       2. Ukraine War  Dataset:  Introduced  in  (Perera and
ual formation of echo chambers.                                                             Karunasekera  2024),  this  dataset  includes  1  mil-
                                                                        lion English-language tweets collected using a key-
  Figure 2 presents the simulation results, where node col-        word search between August 1 and August 31, 2022.
ors represent opinion states: shades range from orange (−1)        Each tweet’s stance was labeled as pro-Russian, pro-
to deep blue (1), with intensity reflecting the degree of oppo-         Ukrainian, or neutral, providing a rich resource for
sition or support. Initially, opinions are randomly distributed         studying polarized discourse.
across the network. Over time, the influence of neighboring                                                                       3. PolitiSky24: U.S. Election 2024 Bluesky Dataset: This
nodes causes opinions to cluster, gradually transforming the                                                                      dataset was recently introduced in (Rostami et al. 2025).
network structure into distinct echo chambers.                                                                                           It is the first stance detection dataset focusing on the 2024
   It is noteworthy that in the simulations, ChatGPT tends                                                               U.S. presidential election and was collected from the de-
to produce highly polarized outcomes, with opinions split-                                                                      centralized social platform Bluesky. Stances were deter-
ting into opposing clusters. In contrast, Gemini exhibits a                                                        mined using a carefully designed pipeline that integrates
stronger tendency toward consensus, often generating more                                                     LLM-based classification.
uniformly positive sentiment. These observations reveal po-
tential biases in LLMs, likely influenced by differences in     Model Selection and Experimental Setup  To evaluate
training methods and datasets. Since this study focuses on       the simulation of opinion dynamics, we employed five gen-
COVID-19 vaccines, it is plausible that Gemini has been       erative models alongside a traditional numerical simulation
fine-tuned to produce more positive attitudes toward the      method, enabling a comparison between LLM-driven and
topic. Moreover, because this is a purely simulated exper-       rule-based approaches. The selected LLMs originate from
iment, all initial data consist of opinion scores between −1       different companies and countries, with distinct training pro-


                                                   976

## Страница 6

cesses that likely introduce performance variations. Evalu-      compare different LLMs under the same protocol (RQ2),
ating and benchmarking LLMs remains an active area of re-      and test controllability via p and rewiring strategies (RQ3).
search, and within the context of social simulations, no con-
sensus has yet been reached. We hope this study can serve     Overall Result Analysis
as an initial exploration and provide useful insights.              Table 1 reports MAE values for key network metrics to-
  The LLMs considered include both closed-source and       gether with stance accuracy across three datasets that dif-
open-source models, reflecting a diversity of capabilities.       fer in ideological orientation and structural properties. The
The closed-source group consists of GPT4o- Mini (Ope-      Bluesky dataset, centered on the 2024 U.S. election, is dom-
nAI) and Gemini (Google), while the open-source group in-       inated by left-leaning discourse opposing Donald Trump,
cludes Mistral (Mistral AI), DeepSeek (DeepSeek-V3), and       yielding a relatively rigid and homogeneous network. The
Qwen (Qwen2-72B-Instruct). These models differ in their     COVID-19 dataset contains both pro- and anti-vaccine com-
architectures and training paradigms, with strengths ranging       munities, with a majority supporting vaccination but ex-
from contextual reasoning to domain adaptability.                 hibiting higher volatility and more dynamic interactions.
  For all models, we adopt generic generation settings to     The Ukraine dataset, based largely on English tweets, re-
ensure stable and comparable outputs. In particular, we use        flects a strong pro-Ukraine orientation and occupies a mid-
the default decoding configurations provided by each API       dle ground between the structural rigidity of Bluesky and the
(e.g., temperature = 1.0 and top-p p = 1.0), without any     dynamism of COVID-19.
model-specific tuning. These settings are chosen intention-     A first and overarching finding is that LLM-based sim-
ally as conventional defaults rather than optimized hyperpa-      ulations consistently outperform the equation baseline
rameters, so as to isolate model-level behavior from prompt     on the majority of structural metrics across datasets,
or parameter engineering effects.                                   particularly on modularity and assortativity, which are cen-
  As a baseline, we employ a traditional equation-based        tral to characterizing community separation and homophily.
simulation (Sasahara et al. 2021), which relies on prede-      Equation-based methods tend to produce inflated modular-
fined mathematical rules to model opinion interactions. This        ity values and unrealistic clustering in more volatile and
baseline serves as a control for highlighting the added value      contested settings such as COVID-19 and Ukraine, thereby
of LLM-driven agents in capturing semantic and contextual      exaggerating polarization or underestimating local connec-
nuances. We further include a Random-Rewire baseline,        tivity. In contrast, LLMs reproduce structural patterns with
where rewiring and opinion updates are both performed uni-       substantially lower error, indicating their superior ability to
formly at random, providing a stochastic lower bound.           approximate how echo chambers and information diffusion
  Given the stochastic nature of both the models and the      emerge in real-world settings.
text generated by LLMs, each simulation was run five times        Looking more  closely  at  the  individual  metrics  re-
per model, and the results were averaged. The experiments       veals complementary strengths across models. Assortativ-
were initialized with approximately 6,000 tweets, with vari-         ity, which reflects homophily in tie formation, is most faith-
ations across different datasets. The number of active users       fully reproduced by Gemini and DeepSeek, while clus-
was controlled at around 1,000, and after 2,000 simulated       tering coefficients, capturing the intensity of local triadic
steps, we evaluated the resulting network state and inspected       closure, are best modeled by Qwen and Mistral. Aver-
the distribution of opinions.                                  age path length, which indexes efficiency of global dif-
                                                                    fusion,  is accurately reproduced by Gemini and Mistral
Evaluation Metrics  We evaluate model performance us-
                                                                     in the more dynamic COVID-19 and Ukraine datasets,
ing five complementary metrics: Modularity (Newman and
                                                         whereas the equation method performs competitively on
Girvan 2004): Captures the strength of community struc-
                                                                     certain global statistics in the more rigid Bluesky setting,
ture, where higher values indicate more distinct clusters
                                                              suggesting that in homogeneous and stable networks, sim-
and stronger echo-chamber effects. Average Clustering Co-
                                                                 ple rule-based processes can occasionally approximate spe-
efficient (Botte, Ryckebusch, and Rocha 2022): Measures
                                                                             cific structural properties. Modularity, a canonical indica-
the tendency of users to form tightly interconnected  tri-
                                                                        tor of echo chambers, is best aligned with ground truth in
ads, reflecting local cohesion in the network. Average Path
                                             Qwen and DeepSeek, which represent strong community
Length (Watts and Strogatz 1998): Quantifies the typical
                                                                 separation without over-amplifying polarization. These dis-
distance between pairs of users, indicating efficiency of in-
                                                                      tinctions underscore that each metric captures a distinct so-
formation diffusion and global connectivity. Assortativity
                                                                          cial mechanism—homophily, local clustering, diffusion ef-
(Newman 2003): Evaluates homophily in tie formation, i.e.,
                                                                        ficiency, and echo chamber intensity—and that LLMs are
the extent to which users with similar opinions are more
                                                                       flexible enough to approximate these mechanisms across
likely to be connected. Stance Accuracy: Compares sim-
                                                                  contrasting contexts.
ulated opinion distributions with real-world stance labels,
                                                                                           It is therefore unsurprising that no single LLM domi-
focusing on users who change stance, to assess how well
                                                                 nates across all datasets. The three domains differ substan-
models capture opinion dynamics.
                                                                              tially in both topical orientation and structural configuration:
                                                         Bluesky reflects a left-leaning, rigid community; COVID-
       Experimental Result Analysis                                                     19 discourse exhibits more volatile and contested dynam-
Our experiments are structured to answer RQ1–RQ3: we        ics; and Ukraine discussions are dominated by pro-Ukraine
validate LLM-based co-evolution against real data (RQ1),      voices but retain moderate structural division. That differ-


                                                   977

## Страница 7

           Dataset     Model            Modularity   Avg. Clustering   Avg. Path Length   Assortativity   Stance (%)

         COVID-19   Random-Rewire     0.1160         0.0281           0.4286          0.1061        33.21
                        Equation           0.0643         0.0212           0.2952          0.0696        33.65
                     Gemini             0.0263         0.0095           0.2495          0.0288        38.21
                          Mistral             0.0278         0.0098           0.2580          0.0321        40.49
                    OpenAI            0.0272         0.0091           0.2525          0.0312        36.12
                  Qwen              0.0259         0.0071           0.2576          0.0332        33.84
                     DeepSeek          0.0291         0.0109           0.2479          0.0312        37.45

           Ukraine     Random-Rewire     0.0301         0.0298           0.2081          0.1908        33.17
                        Equation           0.0347         0.0141           0.1317          0.0906        40.95
                     Gemini             0.0231         0.0170           0.0568          0.0768        39.37
                          Mistral             0.0193         0.0072           0.0511          0.0842        41.21
                    OpenAI            0.0212         0.0163           0.0641          0.0786        40.32
                  Qwen              0.0194         0.0069           0.0681          0.0806        45.71
                     DeepSeek          0.0204         0.0164           0.0617          0.0844        42.31

           Bluesky     Random-Rewire     0.0560         0.0292           0.0256          0.1007        33.16
                        Equation           0.0264         0.0154           0.0165          0.0023        39.58
                     Gemini             0.0194         0.0041           0.0408          0.0102        44.83
                          Mistral             0.0238         0.0038           0.0394          0.0128        38.57
                    OpenAI            0.0191         0.0025           0.0441          0.0132        39.01
                  Qwen              0.0159         0.0077           0.0358          0.0089        36.97
                     DeepSeek          0.0165         0.0026           0.0365          0.0063        39.71

Table 1: Mean Absolute Error (MAE) of different models across datasets, reported for Modularity, Average Clustering, Average
Path Length, and Assortativity. Stance is reported separately as classification accuracy (%). Lowest values per MAE metric and
highest values for stance accuracy are highlighted in bold.


ent models excel on different dimensions reflects not a lim-     Cross-Model Consistency in Rewiring
itation, but rather the dataset-specific adaptability of LLMs.     Decision-Making
This adaptability moves beyond the view of LLMs as opaque
                                             When comparing the rewiring outcomes produced by dif-
black boxes, instead opening a pathway to interpret how dif-
                                                                     ferent LLMs, our first step is to examine the extent to which
ferent models emphasize particular structural mechanisms
                                                                         their decisions overlap. In our simulation framework, we en-
depending on context.
                                                                 force the constraint that the total number of edges in the net-
                                                    work remains constant. This reflects the realistic assumption
                                                                       that users’ social attention capacity is limited: forming a new  Stance prediction offers an even stricter evaluation. If
                                                             connection typically comes at the cost of abandoning an oldcomputed across all users, global stance accuracy typically
                                                               one. Therefore, each rewiring step consists of a paired op-falls in the 80–90% range, since most users do not change
                                                                      eration, where one unfollow action is immediately followedstance and models can achieve high scores simply by pre-
                                                     by one follow action.serving inertia. Because real-world networks already ex-
hibit some degree of echo chamber effect, actual stance       To enable a fair comparison across models, we extract
shifts are rare. We therefore compute accuracy only among       the complete set of rewiring prompts from a single simula-
users who change stance, highlighting model sensitivity       tion run. All models are exposed to the same sequence of
to these minority transitions. Under this stricter criterion,      prompts under an identical initial network structure. This
LLMs achieve meaningful performance across all datasets,      design controls for network drift: if different rewiring de-
with Gemini, Qwen, and Mistral each excelling in different       cisions were allowed to propagate, the networks would
contexts. By contrast, the equation baseline exhibits highly      quickly diverge and comparability would be lost. By fixing
context-dependent performance: while it can achieve moder-       the developmental trajectory and only allowing variation in
ate stance accuracy in rigid environments, it largely defaults       the choices at each step, we isolate the decision-making ten-
to inertia and fails to reliably capture minority stance transi-      dencies of the models themselves.
tions across diverse settings.                               The analysis shows that the probability of two models
                                                              agreeing on both the unfollow and follow targets in the
                                                    same step is only about 30%. In most cases, models di-
  Taken together, these findings demonstrate that LLM-       verge, indicating that their decisions are not simply random
based simulations are more accurate on key structural      but reflect systematic differences in how they interpret so-
metrics and better reflect underlying social mechanisms        cial signals. As illustrated in Figure 3, agreement is consis-
than equation-based methods. While no single model       tently higher on unfollow actions (0.58–0.74 across pairs)
dominates across all metrics, their complementary strengths      than on follow actions (0.44–0.55). This suggests that mod-
suggest the promise of ensemble strategies.                         els converge more easily on identifying connections to re-


                                                   978

## Страница 8

Figure 3: Pairwise agreement among LLMs when aligning decisions on Unfollow and Follow actions. The three panels compare
overlap in (left) combined Unfollow+Follow, (middle) Unfollow-only, and (right) Follow-only decisions. Results show that
models exhibit substantially higher overlap on Unfollow targets than on Follow targets, indicating that unfollowing is a more
consistent decision across LLMs.


move—likely because redundancy or irrelevance provides       ories of social tie formation, affective communication, uses-
clearer cues—whereas selecting new connections introduces       and-gratifications, moral foundations, and information qual-
greater variability, since the set of plausible follow candi-        ity (Granovetter 1973; Haidt and Graham 2007).
dates is broader and more context-dependent.                                                             Tie captures relational considerations such as reciprocity
  The pairwise agreement heatmaps also reveal emergent       or lack of interaction; Affect reflects emotional tone, includ-
clusters of model behavior. DeepSeek and Qwen form the      ing both positive resonance and negative hostility; UGT de-
tightest pair, showing the highest overlap on both unfol-      notes instrumental or informational value, such as novelty
low (0.737) and follow (0.550) decisions. Gemini and Ope-       or contextual relevance; Moral encodes value-laden frames
nAI constitute a moderate but consistent cluster, with mid-       tied to policy, accountability, or rights; and InfoQuality con-
level agreement in both tasks (around 0.47–0.59). Mis-      cerns judgments about the reliability, redundancy, or clarity
tral, by contrast, remains comparatively unstable: while it       of information.
aligns reasonably well with other models in unfollow de-
                                                                  In practice, these dimensions are operationalized via a
cisions (0.57–0.63), its follow choices are more dispersed
                                                                    transparent, rule-based tagging pipeline. We first apply a
(0.44–0.57), indicating weaker consistency in tie forma-
                                                                lightweight keyword-based detector to the free-text ratio-
tion. Interestingly, the observed clusters also align with the
                                                                 nales produced by the LLMs, yielding fine-grained mo-
geographic and institutional origins of the models (e.g.,
                                                                         tive tags (e.g., off-topic content, low information quality,
DeepSeek and Qwen from China; Gemini and OpenAI from
                                                         extremism tone, novelty, policy or rights-related framing).
the U.S.). While this correlation may reflect shared training
                                                        These fine-grained tags are then grouped into the five higher-
pipelines or alignment practices, it also raises the possibil-
                                                                      level dimensions above. For example, Tie is often associated
ity that national or cultural context embedded in the training
                                                            with relational cues such as “reciprocal” or “inactive” Af-
data contributes to systematic differences in social decision-
                                                                          fect with affective terms such as “toxic” “hopeful” or “in-
making.
                                                                     spiring”. This two-stage mapping provides a transparent and
  Taken together, these findings suggest that unfollowing                                                               reproducible link from free-text rationales to theoretically
reflects a more determinate process that elicits higher cross-                                                        grounded motivational dimensions. Importantly, the relative
model consensus, while following is a more ambiguous and                                                               ordering of provider profiles induced by these dimensions is
heterogeneous process that highlights the diverse inductive                                                                   consistent across datasets, indicating that the observed ten-
biases of LLMs. The divergence across models is therefore                                                              dencies reflect stable model-level biases rather than dataset-
not noise, but evidence of distinct reasoning patterns in eval-                                                                      specific artifacts.
uating social relevance and structural adjustment.
                                                  As shown  in  Figure  4,  these  motivational  dimen-
                                                                 sions  reveal  systematic  cross-model  differences.  Mis-Rationales Behind Rewiring Decisions
                                                                                tral strongly emphasizes utility- and value-driven frames
Beyond the structural accuracy reported in Table 1 and the     (UGT and  Moral), OpenAI  highlights  emotional  tone
agreement patterns in Figure 3, we further examine the moti-       (Affect), DeepSeek and Qwen adopt relatively balanced
vational rationales provided by LLMs when explaining their      profiles—with Qwen showing  a marked  emphasis on
rewiring choices. To the best of our knowledge, no prior     Tie—while Gemini maintains a uniformly conservative pro-
work has systematically proposed a quantitative scheme for         file, consistent with a general concern for fairness rather than
categorizing rewiring motives. We therefore introduce a five-      dominance in any single motive. These differences com-
dimensional taxonomy—Tie, Affect, UGT (uses and gratifi-      plement the MAE results in Table 1, which demonstrate
cations), Moral, and InfoQuality—drawing on classical the-       that different models excel in reproducing different network


                                                   979

## Страница 9

mechanisms: Gemini and DeepSeek most accurately capture       of rewiring is controlled by a global parameter p, adapted
assortativity, Qwen and Mistral best reproduce clustering      from equation-based approaches. This design reflects an im-
(local cohesion), Gemini and Mistral minimize error in path       portant distinction: while LLMs are responsible for gener-
length for the dynamic COVID-19 and Ukraine datasets,       ating linguistically and contextually grounded social deci-
while Qwen and DeepSeek achieve the lowest modularity       sions, the parameter p regulates the frequency of structural
error. Stance accuracy further underscores this heterogene-      change at the network level. In practice, this allows us to
ity: Qwen leads in Ukraine, Gemini in Bluesky, and Mistral      simulate a variety of network environments and to test po-
in COVID-19. Model performance is therefore shaped not        tential mitigation strategies.
only by dataset structure but also by inductive biases em-
bedded in training pipelines.





                                                             Figure 5: Modularity dynamics under different rewiring
                                                                     probabilities p in COVID-19 dataset. Higher values of p gen-
                                                                      erally lead to a faster decline in modularity, indicating re-
Figure 4: Radar plot of averaged rewiring motives across                                                        duced community polarization as the network structure be-
datasets (normalized to  [0.2,  1.2]), highlighting  distinct                                                    comes more fluid.
model tendencies.
                                                  As shown in Figure 5, increasing p accelerates the rate
  Motivational analysis clarifies how inductive biases shape        at which modularity declines, indicating that more frequent
model reasoning. Mistral’s reliance on UGT and Moral jus-      rewiring reduces the persistence of polarized clusters. Con-
tifications prioritizes cohesive, value-driven ties and aligns       versely, lower values of p preserve structural rigidity and
with  its strength in  clustering. OpenAI’s focus on Af-      thus sustain stronger echo chambers. Interpreted in real-
fect corresponds to  its advantage in affective dynamics,      world terms, different policy or platform-level interventions
while the balanced profiles of DeepSeek and Qwen sup-      can be mapped onto variations in p: more aggressive inter-
port their stability on modularity and assortativity. Dataset      ventions correspond to higher rewiring probabilities, which
contexts further amplify these tendencies: partisan discourse      promote mixing and reduce polarization, while more con-
in Bluesky heightens the role of moral and affective cues,       servative settings maintain stability but risk reinforcing divi-
the contested COVID-19 environment foregrounds informa-       sion. Importantly, even with LLMs driving individual-level
tion quality and utility, and Ukraine’s moderately divided       reasoning, the parameter p continues to play a crucial role,
but pro-Ukraine structure sharpens the trade-off between ho-      ensuring that global patterns of structural adaptation remain
mophily and diffusion efficiency.                                tunable and interpretable.
  Taken together, structural metrics and motivational pro-         Empirically, we find that the optimal p value for repro-
files indicate that LLMs differ not only in statistical ac-      ducing the most faithful network structures differs across
curacy but also in the interpretive frames guiding their       datasets: Bluesky aligns best at p = 0.03, COVID-19 at p =
rewiring decisions. These dual perspectives—quantitative       0.2, and Ukraine at p = 0.5. These differences mirror the
fit to network structures and qualitative rationales—reveal       structural characteristics discussed earlier: Bluesky’s rigid
distinct  inductive  biases  rooted  in  training and  align-      and homogeneous discourse requires only minimal rewiring
ment  pipelines. They  also echo  the agreement  analy-       to approximate reality, COVID-19’s volatile and contested
sis in Figure 3 unfollowing is often attributed to redun-      environment demands a moderate level of rewiring, while
dancy or low information  quality, yielding high cross-      Ukraine’s dynamic but moderately divided structure is best
model consensus, whereas following draws on heteroge-      captured under high rewiring probability.
neous motives—novelty, moral alignment, or affective res-        These findings highlight that p is not merely a techni-
onance—resulting in greater divergence.                           cal parameter but a proxy for governance strategies. Low
                                                     p resembles laissez-faire environments where ties remain
Impact of p on Network Dynamics                              static and echo chambers harden, while high p approxi-
In our framework, large language models determine who to      mates strong interventions such as active recommendation
follow or unfollow, but they do not independently decide       reshuffling or enforced exposure to diverse viewpoints. In-
when such rewiring occurs. Instead, the overall probability      termediate values of p reflect softer nudges that allow net-


                                                   980

## Страница 10

works to adapt without disrupting stability. Framing p in
this way bridges simulation outcomes with broader norma-
tive debates on polarization, user autonomy, and the role of
platforms in shaping public discourse. Due to space con-
straints, we report modularity here, but other structural met-
rics (e.g., clustering, assortativity) also display consistent
trends of polarization decline—an expected outcome, since
more frequent rewiring naturally destabilizes rigid commu-
nity boundaries and fosters structural reconfiguration.

Effects of Rewiring Strategies on Network and
Polarization
We further examine the impact of different rewiring strate-
gies. While our framework enables LLMs to make linguis-
tically grounded decisions, users’ exposure to information
is ultimately bounded by platform-level recommendation                                                             Figure 6: Stance polarization in COVID-19 dataset. Bars re-
mechanisms. In practice, recommendation systems act as                                                                  port the mean ∆P across time bins, with 95% confidence
a screen that determines which candidates are presented to                                                                         intervals.
users. To capture this constraint, we implement and com-
pare five strategies: Random, where candidates are drawn
uniformly at random; FoF, which recommends friends-of-                                                                          tion, highlighting the risk that friend-of-friend recommenda-
friends; Structural-farthest, which recommends the most                                                                     tions amplify homogeneity and reinforce echo chambers. In
distant user in the network (a counterfactual opposite to FoF,                                                                      contrast, text-based recommendations (TF-nearest and TF-
and rarely realizable in real platforms); TF nearest, which                                                                        farthest) exert only weak influence on stance polarization,
recommends the textually closest user; and TF farthest,                                                              suggesting that content similarity alone does not strongly
which recommends the most textually distant user.                                                                           shift opinion alignment. Most strikingly, structural-farthest
                                                               achieves the greatest reduction in stance polarization, in-
    Strategy           Modularity   Avg. Clustering           dicating that exposing users to structurally distant connec-
                                                                     tions is highly effective for mitigating echo chamber effects.   FoF                  0.711         0.0557
                                                     Between the two text-based strategies, TF-nearest shows a   TF farthest           0.694         0.0374
                                                     somewhat larger reduction in polarization but with high vari-   TF nearest            0.745         0.0670
                                                          ance and instability, whereas TF-farthest remains closer to   Random              0.689         0.0287
                                                                      neutral, producing only mild and more stable depolarizing     Structural-farthest     0.679         0.0288
                                                                          effects.
                                                         Taken together, these findings underscore that the design
Table 2: Final network metrics in COVID-19 dataset under
                                                                of recommendation strategies has a dual effect: it not only
different rewiring strategies.
                                                            shapes structural features of the network but also strongly
                                                                conditions opinion polarization. Strategies grounded in local
  Table 2 shows that the choice of strategy significantly      reinforcement (FoF) risk entrenching divisions, while strate-
shapes structural outcomes. TF-nearest maximizes modu-       gies that connect distant parts of the network (structural-
larity and clustering, producing the most pronounced echo-       farthest) offer a promising path toward depolarization.
chamber structure with longer path lengths. By contrast,
structural-farthest minimizes modularity and clustering, re-      Visualization of COVID-19 Network Dynamics
sulting in a more diffuse and less polarized network. Ran-
                                         We compare the simulated network dynamics produceddom rewiring serves as a neutral baseline, with moderate
                                                     by GPT-4o Mini with the ground truth across three timemodularity and clustering. FoF falls between these extremes,
                                                                   steps (Figure 7). At the macro level, GPT-4o Mini capturespreserving moderate modularity and clustering.
                                                                 the overall emergence of polarized communities and, by
Stance polarization.  At each time step, we parse gener-      T=2000, produces two major clusters that echo the multi-
ated posts into discrete stance labels (FAVOR, AGAINST,       polar structure observed in the real network. This suggests
None) and compute their proportions within each time bin.       that the model is able to approximate community formation
We operationalize stance polarization as the absolute imbal-       trends even without explicit behavioral rules.
ance between pro and anti stances, P(t) = |pF (t) −pA(t)|.         Nevertheless, notable differences remain. The simulated
To isolate strategy effects, we report polarization relative to       trajectories produced by GPT-4o Mini tend to reduce dis-
the Random baseline, and summarize results by the mean       tances between major communities over time, resulting in
∆P with 95% confidence intervals across  all time bins     more compact network structures and a stronger tendency
over the 2,000-step simulation horizon. Figure 6 evaluates      toward structural smoothing or partial de-polarization. By
stance polarization relative to the random baseline. Interest-       contrast, the ground truth exhibits more clearly separated
ingly, FoF produces the strongest increase in stance polariza-      communities, with inter-community boundaries remaining


                                                   981

## Страница 11

                                                             Figure 8: Mean opinion trajectories under different news
                                                         shock scenarios. An exogenous news event is injected at
Figure 7: Comparison of network evolution between GPT-      time step t=500 (dashed line).
4o Mini (top) and the ground truth (bottom) at T=0, 1000,
and 2000.
                                                                   Metric           None     Positive   Negative

                                                                       Modularity          0.560   −0.0034   −0.0055
stable and homophily persisting at the community level            Avg. Clustering      0.041   +0.0038   +0.0052
throughout the evolution.                                            Avg. Path Length     3.948   +0.0125   +0.0305
  Beyond structure, GPT-4o Mini also generates new nat-              Assortativity      −0.272   +0.0024   +0.0004
ural language posts associated with evolving nodes. These
outputs provide additional textual material for subsequent      Table 3: Global network structure during the shock window.
analysis, allowing us to study not only how networks evolve      Values for the None report averages, while positive and neg-
but also how opinions and linguistic styles shift in tandem       ative show changes relative to the None baseline.
with structural dynamics. This dual capability—simulating
network structure while producing interpretable text—opens
opportunities for multi-layered investigations of social sys-       jority group tends to respond more actively by amplifying
tems.                                                           supportive narratives, thereby offsetting the direct influence
                                                                of negative framing at the aggregate level.
  Application: Simulation Response to News         Beyond opinion dynamics, we further examine changes
                 Shocks                                 in the global network structure during the shock window.
                                                             Table 3 summarizes the average values of key network
We present a case study of news shocks in a COVID-19                                                                       structural indicators over this period. Compared to the no-
discussion network to demonstrate the applicability of the                                                         shock baseline, both positive and negative news shocks lead
proposed simulation model for analyzing collective behav-                                                                     to a decrease in network modularity, indicating a tempo-
ioral responses under exogenous information interventions.                                                                  rary weakening of community boundaries during the inter-
Starting from identical initial network structures and opin-                                                                  vention. Meanwhile, the average clustering coefficient in-
ion configurations, we inject an external news event at time                                                                    creases, suggesting that local interaction patterns become
step t=500 and compare three scenarios: no shock, positive                                                                   denser. Across all metrics, negative news induces stronger
news, and negative news. Positive news emphasizes the ef-                                                                       structural perturbations than positive news, manifested as
fectiveness and protective role of vaccines, whereas negative                                                                 the formation of more tightly connected local communities.
news highlights risk-oriented narratives, such as severe ad-                                                        However, the magnitude of these effects remains moderate
verse reactions or reported deaths. After the shock is intro-                                                       and does not result in a fundamental reorganization of the
duced, the news content is exposed to agents in the network                                                                    overall network structure.
in the same manner within a fixed time window, while all                                                                    Overall, this case study demonstrates that the simulation
other simulation settings remain unchanged.                                                     model can characterize, under a unified experimental setting,
  Figure 8 illustrates the temporal evolution of the aver-                                                                 the joint impact of exogenous information shocks on col-
age opinion under the three scenarios. In the absence of ex-                                                                       lective opinion evolution and network structural adjustment.
ogenous intervention, the overall opinion level remains rel-                                                            This provides a controllable analytical tool for studying pub-
atively stable. In contrast, both positive and negative news                                                                                lic opinion dynamics and network behavior in the context of
shocks induce clear and persistent opinion changes. Positive                                                        sudden external events.
news leads to a pronounced upward shift in the average opin-
ion following the intervention. Notably, negative news does
                                                              Conclusionnot drive the overall opinion toward an anti-vaccine direc-
tion; instead, it also results in an upward trend in the mean    We presented a language-driven simulation framework that
opinion. This counterintuitive outcome arises because pro-       integrates LLMs into both opinion updating and network
vaccine views constitute the majority in the initial network       rewiring, and validated it on three real-world datasets. Com-
state. When confronted with negative information, this ma-      pared to an equation-based baseline, LLMs consistently re-


                                                   982

## Страница 12

duce MAE on key structural metrics while producing stance     Holme,  P.; and Newman, M. E. 2006.  Nonequilibrium
dynamics that are closer to real-world observations. For ex-      phase transition in the coevolution of networks and opinions.
ample, on the COVID-19 dataset, Qwen reduces the MAE of      Physical Review E—Statistical, Nonlinear, and Soft Matter
modularity by more than half (0.064→0.026), while Gemini       Physics, 74(5): 056108.
achieves lower MAE on average path length (0.295→0.250).       Kossinets, G.; and Watts, D. J. 2006. Empirical analysis of
On the Ukraine dataset, Mistral reduces path length MAE      an evolving social network. science, 311(5757): 88–90.
by nearly two-thirds (0.132→0.051), and Qwen achieves the
                                                    Kozma, B.; and Barrat, A. 2008. Consensus formation on
highest stance accuracy (45.7% vs. 40.9%). In the Bluesky
                                                             coevolving networks: groups’ formation and structure. Jour-
dataset, Qwen attains the lowest modularity MAE (0.0159
                                                               nal of Physics A: Mathematical and Theoretical, 41(22):
vs. 0.0264), while Gemini leads in stance accuracy (44.8%
                                                         224020.
vs. 39.6%).
  Across datasets, no single model dominates all metrics;      Lamsal, R. 2021.  Design and analysis of a large-scale
instead, models exhibit complementary strengths, suggest-     COVID-19 tweets dataset.   Applied Intelligence, 51(5):
ing the potential value of ensemble or hybrid approaches.      2790–2804.
Our study further demonstrates that platform-level regula-      McPherson, M.; Smith-Lovin, L.; and Cook, J. M. 2001.
tion is equally critical: a simple global rewiring probabil-      Birds of a feather: Homophily in social networks. Annual
ity p and the choice of candidate-screening strategy system-      review of sociology, 27(1): 415–444.
atically influence polarization outcomes, thereby providing     Newman, M. E. 2003. Mixing patterns in networks. Physical
a transparent bridge between simulation parameters and pol-      review E, 67(2): 026126.
icy interventions.
                                                 Newman, M. E.; and Girvan, M. 2004. Finding and evalu-
  Overall, these results show that LLM-based simulations
                                                                   ating community structure in networks. Physical review E,
are more accurate in terms of absolute structural devia-
                                                                 69(2): 026113.
tion and more interpretable than traditional equation-based
models. By minimizing MAE through explicit and control-       Park, J. S.; O’Brien, J.; Cai, C. J.; Morris, M. R.; Liang, P.;
lable mechanisms such as the rewiring probability p and      and Bernstein, M. S. 2023.  Generative agents: Interactive
candidate-screening strategies, the framework captures net-      simulacra of human behavior.  In Proceedings of the 36th
work evolution with quantitative fidelity. This establishes      annual acm symposium on user interface software and tech-
language-driven simulation as a practical tool for studying      nology, 1–22.
and mitigating online polarization in computational social       Perera, K.; and Karunasekera, S. 2024. Quantifying Opinion
science.                                                         Rejection: A Method to Detect Social Media Echo Cham-
                                                                      bers. In PAKDD, 57–69. Springer.
                References                           Rostami, P.; Rahimzadeh, V.; Adibi, A.; and Shakery, A.
Botte, N.; Ryckebusch, J.; and Rocha, L. E. 2022. Clustering      2025. PolitiSky24: US Political Bluesky Dataset with User
and stubbornness regulate the formation of echo chambers in      Stance Labels. arXiv preprint arXiv:2506.07606.
personalised opinion dynamics. Physica A: Statistical Me-                                                               Sasahara, K.; Chen, W.; Peng, H.; Ciampaglia, G. L.; Flam-
chanics and its Applications, 599: 127423.                                                                mini, A.; and Menczer, F. 2021. Social influence and unfol-
Chuang, Y.-S.; Goyal, A.; Harlalka, N.; Suresh, S.; Hawkins,      lowing accelerate the emergence of echo chambers. Journal
R.; Yang, S.; Shah, D.; Hu, J.; and Rogers, T. 2024. Simu-       of Computational Social Science, 4(1): 381–402.
lating opinion dynamics with networks of llm-based agents.                                                    Wang, C.; Liu, Z.; Yang, D.; and Chen, X. 2025. Decoding
In Findings of NAACL 2024, 3326–3346.                                                        echo chambers: LLM-powered simulations revealing polar-
Deffuant, G.; Neau, D.; Amblard, F.; and Weisbuch, G.       ization in social networks. In COLING 2026, 3913–3923.
2000. Mixing beliefs among interacting agents. Advances
                                                                Watts, D. J.; and Strogatz, S. H. 1998. Collective dynamics
in Complex Systems, 3(1-4): 87–98.
                                                                of ‘small-world’networks. nature, 393(6684): 440–442.
Flaxman, S.; Goel, S.; and Rao, J. M. 2016. Filter bubbles,
                                                          Wei, J.; Wang, X.; Schuurmans, D.; Bosma, M.; Xia, F.;echo chambers, and online news consumption. Public opin-
                                                               Chi, E.; Le, Q. V.; Zhou, D.;  et  al. 2022.   Chain-of-ion quarterly, 80(S1): 298–320.
                                                             thought prompting elicits reasoning in large language mod-
Friedkin, N. E.; and Johnsen, E. C. 1990. Social influence
                                                                              els. Advances in neural information processing systems, 35:
and opinions. Journal of Mathematical Sociology, 15(3-4):
                                                        24824–24837.
193–206.
                                                                    Zaidi, Z.; Ye, M.; Samon, F.; Jama, A.; Gopalakrishnan, B.;Gao, C.; Lan, X.; Lu, Z.; Mao, J.; Piao, J.; Wang, H.; Jin, D.;
                                                      Gu, C.; Karunasekera, S.; Evans, J.; and Kashima, Y. 2023.and Li, Y. 2023. S3: Social-network Simulation System with
                                                             Topics in antivax and provax discourse: yearlong synopticLarge Language Model-Empowered Agents. arXiv preprint
                                                             study of COVID-19 vaccine tweets. Journal of Medical In-arXiv:2307.14984.
                                                                     ternet Research, 25: e45069.
Granovetter, M. S. 1973. The Strength of Weak Ties. Amer-
                                                         Zheng, W.; and Tang, X. 2024. Simulating social networkican Journal of Sociology, 78(6): 1360–1380.
                                                            with llm agents: An analysis of information propagation and
Haidt, J.; and Graham, J. 2007. When morality opposes jus-
                                                        echo chambers. In International Symposium on Knowledge
tice: Conservatives have moral intuitions that liberals may
                                                     and Systems Sciences, 63–77. Springer.
not recognize. Social justice research, 20(1): 98–116.


                                                   983

## Страница 13

             Paper Checklist                             (b) Have you provided justifications for all theoretical re-
                                                                            sults? NA1. For most authors...
                                                                          (c) Did you discuss competing hypotheses or theories that
  (a) Would answering this research question advance sci-                                                              might challenge or complement your theoretical re-
     ence without violating social contracts, such as violat-                                                                            sults? NA
     ing privacy norms, perpetuating unfair profiling, exac-
                                                                      (d) Have you considered alternative mechanisms or expla-     erbating the socio-economic divide, or implying dis-
                                                                      nations that might account for the same outcomes ob-      respect to societies or cultures? We use public, ag-
                                                                   served in your study? NA     gregated social media datasets with no new personal
     data collection; analyses are reported at aggregate/net-         (e) Did you address potential biases or limitations in your
    work level with mitigation steps (Section Ethics and             theoretical framework? NA
     Responsible Use).                                                      (f) Have you related your theoretical results to the existing
  (b) Do your main claims in the abstract and introduction              literature in social science? NA
     accurately reflect the paper’s contributions and scope?         (g) Did you discuss the implications of your theoretical
     Claims are limited to network–opinion co-evolution             results for policy, practice, or further research in the
     simulation and empirical fit vs. an equation baseline             social science domain? NA
     across three datasets (Abstract; Introduction; Experi-       3. Additionally, if you are including theoretical proofs...
     ments).
                                                                          (a) Did you state the full set of assumptions of all theoret-
  (c) Do you  clarify how the proposed methodological                                                                                ical results? NA
     approach is appropriate for the claims made? Sec-
                                                                      (b) Did you include complete proofs of all theoretical re-      tion LLM approach and Model Framework justify
                                                                            sults? NA     language-grounded updates/rewiring under platform-
      like exposure constraints and validate against empiri-       4. Additionally, if you ran machine learning experiments...
      cal networks.                                                                          (a) Did you include  the code,  data, and  instructions
  (d) Do you clarify what are possible artifacts in the data           needed to reproduce the main experimental results (ei-
     used, given population-specific distributions? Datasets             ther in the supplemental material or as a URL)? We
      section notes sampling biases, platform/domain skew,           have added extensive implementation details to the
      stance-label uncertainty, and time-window effects; we          Appendix to facilitate reproducibility.
      interpret results comparatively rather than absolutely.          (b) Did you specify all the training details (e.g., data splits,
  (e) Did you describe the limitations of your work? We dis-            hyperparameters, how they were chosen)? We report
     cuss lack of user-level ground-truth linking dynamics,             datasets, active-user selection, p values, candidate-
    prompt/LLM sensitivity, dataset coverage, and gover-            screening strategies, number of steps (2,000), and 5-
     nance externalities (Limitations in Ethics and Respon-           run averages.
      sible Use).                                                        (c) Did you report error bars (e.g., with respect to the ran-
  (f) Did you discuss any potential negative societal im-        dom seed after running experiments multiple times)?
     pacts of your work? We note risks such as misuse        We average over  five runs; intervals are provided
      for manipulation, over-fitting interventions to specific          where space permits.
     communities, and model bias propagation, with sug-         (d) Did you include the total amount of compute and the
     gested safeguards.                                             type of resources used (e.g., type of GPUs, internal
  (g) Did you discuss any potential misuse of your work?              cluster, or cloud provider)? The compute footprint sec-
   We caution against using the framework to optimize             tion has been added to the Appendix.
      persuasion/astroturfing and recommend access con-         (e) Do you justify how the proposed evaluation is suffi-
      trols and aggregate-only releases.                                  cient and appropriate to the claims made? Evaluation
  (h) Did you describe steps taken to prevent or mitigate po-             aligns with claimed mechanisms via modularity, clus-
      tential negative outcomes of the research, such as data              tering, assortativity, path length, and stance dynamics
     and model documentation, data anonymization, re-            against empirical networks.
     sponsible release, access control, and the reproducibil-           (f) Do you discuss what is “the cost” of misclassification
      ity of findings? We use public data, avoid releasing          and fault (in)tolerance? We focus on structural fit; mis-
     raw personal content, propose releasing prompt tem-             classification costs depend on downstream application
      plates and synthetic/aggregate artifacts, and document          and are out of scope.
     parameters for reproducibility.
                                                                       5. Additionally, if you are using existing assets (e.g., code,
   (i) Have you read the ethics review guidelines and en-                                                                         data, models) or curating/releasing new assets, without
     sured that your paper conforms to them?                                                       compromising anonymity...
2. Additionally, if your study involves hypotheses testing...          (a)  If your work uses existing assets, did you cite the
  (a) Did you clearly state the assumptions underlying all            creators? Citations include COVID-19, Ukraine, and
      theoretical results? No formal hypothesis testing with            PolitiSky24 datasets and related stance resources.
       statistical theory beyond empirical comparisons.               (b) Did you mention the license of the assets? NA


                                                   984

## Страница 14

  (c) Did you include any new assets in the supplemental     Design Principles
      material or as a URL? We include prompt templates;
                                         We adopt a consistent prompting scheme across datasets and     no new raw datasets are released.
                                                       models to isolate the effects of model capability rather than
  (d) Did you discuss whether and how consent was ob-                                                       prompt engineering. The prompt design follows three prin-
      tained from people whose data you’re using/curating?                                                                       ciples:
    We use public social media data collected under plat-                                                              (P1) Standardization  across models.  All  evaluated
     forms’ terms; no new human subjects data were col-                                           LLMs receive the same prompt structure, the same input
      lected.                                                                             fields, and the same output format. This reduces prompt-
  (e) Did you discuss whether the data you are using/cu-      induced variability and ensures that observed differences
      rating contains personally identifiable information or     more plausibly reflect model-level inductive biases.
      offensive content? Public posts may contain PII/offen-                                                              (P2) Minimal but sufficient context. Each prompt uses
      sive content; we report only aggregate statistics and                                                            a bounded window of historical posts for the focal user and
     avoid re-distribution of raw personal content.                                                            a bounded window of contextual posts from neighbors or
  (f)  If you are curating or releasing new datasets, did you       candidates. This reflects realistic attention constraints and
      discuss how you intend to make your datasets FAIR       also keeps the simulation cost stable.
      (see ?)? NA                                              (P3) Parseable outputs. Each prompt requests structured
  (g)  If you are curating or releasing new datasets, did you      outputs (e.g., a discrete stance label or a single selected user
      create a Datasheet for the Dataset (see ?)? NA              ID), so that decisions can be extracted deterministically for
                                                       downstream evaluation. Free-text rationales are optional and6. Additionally, if you used crowdsourcing or conducted
                                                          used only for interpretability analysis (e.g., motive taxon-   research with human subjects, without compromising
                                                        omy), not for driving the network update itself.   anonymity...
  (a) Did you include the full text of instructions given to     Input Construction and Notation
      participants and screenshots? NA
                                                          For each user i, we maintain a content history Ci that stores  (b) Did you describe any potential participant risks, with
                                                                 the most recent posts of that user. At time step t, user i is     mentions of Institutional Review Board (IRB) ap-
                                                         exposed to a limited set of posts through a screen:     provals? NA
  (c) Did you include the estimated hourly wage paid to                                                                Si(t) ⊆{Cj | j ∈Ni(t)}∪(optional recommended content).
      participants and the total amount spent on participant
     compensation? NA                                The screen is the only information channel used for opinion
  (d) Did you discuss how data is stored, shared, and dei-      updating and post generation at that step, modeling finite
      dentified? NA                                          exposure under platform constraints.
                                                            For rewiring, we form:  (i) a neighbor set Ni(t) from
       A  Prompt Templates                  which one existing edge may be removed, and (ii) a can-
                                                                 didate set Ci(t) consisting of non-neighbors from which one
This appendix provides a detailed description of the prompt                                                 new edge may be added. As described in the main paper, we
templates used in our LLM-enhanced simulation. The goal is                                                              enforce paired rewiring (one removal plus one addition) so
to make the implementation fully reproducible and to clarify                                                                       that edge counts remain approximately constant.
how the prompts operationalize the abstract functions intro-
duced in the main paper.
                                                 Template Tg: New Post Generation
Templates as Operational Instantiations of f and g      The generation template Tg produces a new post for user i
In Section  , we define an LLM-enhanced instantiation of      given (a) the user’s recent history and (b) the current expo-
the co-evolutionary model, where the influence function and       sure screen. The post is expected to reflect the user’s current
compatibility function are realized via prompted LLM eval-       stance and conversational context.
uations:                                                     Inputs: (1) user profile identifier (optional), (2) recent his-
                                                                  tory Ci, (3) screen posts Si(t), and (4) topic description.
      f = LLM(To(·)) ,     g = LLM(Tr(·)) ,            Output: one short post yi(t).
                                                        Template:and the content generation step is:
                                                          You are simulating a social media user.
                   yi(t) ∼LLM(Tg(·)) .                               Topic: {TOPIC}.
                                                                Your recent posts: {HISTORY}.
Accordingly, the prompt templates in this section should be
                                                                          Posts you just saw: {SCREEN}.
understood as the executable realization of these theoreti-                                                                        Task: Write one new post that you would realistically post
cal mappings. That is, the prompts instantiate how textual         now.
histories and contextual exposures are transformed into (i)           Constraints: Keep it short; do not mention that you are an
updated stance judgments (To), (ii) rewiring decisions (Tr),          AI; do not list steps.
and (iii) newly generated posts (Tg).                                  Output: {ONE POST}.


                                                   985

## Страница 15

Template To: Opinion Update / Stance Inference           to determine the network update. It is stored only for down-
The opinion update template To produces a stance value for      stream tagging and aggregation. This separation ensures that
user i after exposure. In our implementation, stances are dis-       the simulation dynamics are driven by explicit structural ac-
cretized into three classes (e.g., pro, neutral, anti), or mapped       tions, while explanations serve as analyzable artifacts.
to a scalar in [−1, 1] depending on the dataset annotation
scheme.                                B  Stance Accuracy (changing users)
Inputs: (1) recent history Ci, (2) current screen Si(t), and     To avoid inflated accuracy caused by stance inertia (most
(3) stance label definition.                                       users keep the same stance), we compute stance accuracy
Output: a single stance label (or scalar score) for Oi(t+1).      only on users whose stance changes over time. We repre-
Template:                                                       sent opinions as discrete stance labels (FAVOR, AGAINST,
   Topic: {TOPIC}.                                    NEUTRAL). A user is considered “changing” if their inferred
   Stance labels: {LABELS} (with definitions).                      stance label differs between two consecutive evaluation time
   User’s recent posts: {HISTORY}.                                  points, i.e., si(t+1) ̸= si(t), and no additional numerical
   Posts the user just saw: {SCREEN}.                             threshold is applied.
   Task: Infer the user’s updated stance after reading the           Let Uchg = {i | si(t+1) ̸= si(t)} denote the set of chang-
    screen.                                                               ing users. We report stance accuracy on Uchg as
   Output format: Return exactly one label from {LABELS}.
                                                                     1
Template Tr: Paired Rewiring Decision                       Accchg =  X  1[ˆsi(t+1) = si(t+1)] .                                                                                   |Uchg|
The rewiring template Tr is used only when rewiring is trig-                                i∈Uchg
gered (with probability p). It is executed in two sub-steps:                                                          For simulations,  ˆsi(·)  is obtained by parsing the LLM-
  (R1) Unfollow step. Given user i and a bounded list of                                                              generated outputs into stance labels using the same label set;
current neighbors with their recent posts, select at most one                                                                     for the ground truth, si(·) is taken from the dataset annota-
neighbor to unfollow.                                                                     tions at the aligned time points.
  (R2) Follow step. Given the same user i and a bounded
candidate set of non-neighbors with their recent posts, select                                C  Operationalizing Rewiring Rationales
exactly one user to follow.
  We separate the two decisions to make the update rule      This appendix clarifies how the five motivational dimen-
explicit and parseable. The resulting paired update imple-       sions  (Tie, Affect, UGT, Moral, InfoQuality) are opera-
ments:                                                             tionalized from the free-text rationales produced by LLMs.
                                                   Our goal is to provide a procedure that is reproducible,
      E(t+1) = E(t) ∪{(i, j+)} \ {(i, j−)}.               auditable, and theory-grounded, without introducing addi-
                                                                      tional learned classifiers.Inputs: (1) user history Ci, (2) short summaries or recent
posts of each neighbor/candidate, and (3) topic/stance con-
                                    Why a Five-Dimensional Taxonomy?text.
Outputs: a single selected user ID for unfollow (or a special     The objective of analyzing rewiring rationales  is not to
token indicating “no unfollow”), and a single selected user       infer hidden psychological states, but to summarize how
ID for follow.                              LLM agents justify tie changes in natural language. Across
Template (Unfollow):                                            datasets and providers, we observe that explanations con-
                                                                        sistently cluster around five recurring themes. We therefore   You are user {USER}. Topic: {TOPIC}.
   Your recent posts: {HISTORY}.                               adopt a minimal, theory-grounded cover that supports ag-
   Current connections (ID and recent posts):                        gregation and cross-model comparison while remaining in-
  {NEIGHBOR LIST}                                               terpretable.
   Task: Choose at most one connection to unfollow.                  Tie captures relationship-specific considerations  (reci-
   Output format: Return exactly one ID from the  list, or           procity, interaction frequency, inactivity, one-sided engage-
   “NONE”.                                                   ment), consistent with classical accounts of tie maintenance
Template (Follow):                                       and dissolution in social networks (Granovetter 1973).
                                                                Affect summarizes emotion- and tone-related cues (hos-   You are user {USER}. Topic: {TOPIC}.
                                                                             tility/toxicity versus positive resonance). This dimension is   Your recent posts: {HISTORY}.
   Candidate users to follow (ID and recent posts):                      distinct from information quality: content may be accurate
  {CANDIDATE LIST}                                          yet emotionally aversive, or emotionally appealing yet unin-
   Task: Choose exactly one user to follow.                          formative.
   Output format: Return exactly one ID from the candidate       UGT (Uses and Gratifications) represents instrumental
     list.                                                      motives such as novelty, complementarity, or relevance to
                                                                 the user’s interests. This captures why a tie is worth forming
Rationale Collection (Optional)                         beyond ideology.
For interpretability analysis (Section on rewiring motives),       Moral aggregates value-laden frames related to policy,
we optionally ask the model to provide a short rationale af-       accountability, rights, or justice. Moralized language is espe-
ter selecting an ID. Importantly, this rationale is not used       cially salient in polarized discourse and frequently appears


                                                   986

## Страница 16

in justifications for following or disengaging (Haidt and Gra-       the SuperTags used in our main analysis. Because both the
ham 2007).                                             keyword dictionary and the SubTag→SuperTag mapping are
  InfoQuality captures epistemic judgments (redundancy,       fixed, the entire rationale analysis is reproducible and does
lack of substance, off-topic content, or misinformation).      not rely on learned annotators.
Separating InfoQuality from UGT allows us to distinguish
                                                        Step 4: Aggregate to provider-level profiles.  For each
“high-quality but irrelevant” from “relevant but low-quality”
                                                               provider (model) and dataset, we compute the prevalence
content.
                                                                of each SuperTag as the mean of binary indicators over all
  Together, these dimensions cover relational, emotional,
                                                            tagged reasoning units. These shares form the basis of the
instrumental, normative, and epistemic aspects of social fil-
                                                                 radar plots in Figure 4. To facilitate visualization, we lin-
tering, and are compact enough to yield stable provider pro-
                                                                   early rescale the shares within each dataset to a common
files across datasets.
                                                            range (shown in the figure caption), which does not affect
                                                                 the rank ordering of providers within the same dataset.
Keyword-Based Tagging Procedure
LLMs output rewiring rationales as unconstrained text, often      Interpretability and Reproducibility
containing multiple bullet points that mix reasons for unfol-     The tagging pipeline is deliberately rule-based for trans-
low and follow. To make these rationales comparable, we ap-      parency.  All  steps—segmentation,  keyword  matching,
ply a transparent keyword-based tagging pipeline with two      action-aware filtering, and deterministic mapping— can be
layers: SubTag (fine-grained cues) and SuperTag (the five di-       replicated using only the recorded LLM outputs and the pub-
mensions).                                                        lished rule tables. This design allows readers to (i) audit
                                                       which phrases lead to which tags, (ii) modify the dictionaryStep 1: Segment rationales into action-specific blocks.
                                                                                       if additional rationale patterns emerge, and (iii) reproduceGiven a raw rationale string, we first split it into short rea-
                                                                   provider-level motive profiles without retraining any com-soning units (typically bullet points; if bullets are absent, the
                                                               ponents.entire text is treated as one unit). Each unit is assigned an
                                                         While keyword tagging cannot capture every nuance ofaction label (follow, unfollow, or unknown) by detecting ex-
                                                                   natural language, it provides an auditable abstraction thatplicit action markers (e.g., “follow”, “unfollow”) in the text.
                                                                     links free-text rationales to theoretically grounded motiva-This action-aware parsing reduces ambiguity when a single
                                                                      tional dimensions. The stability of provider profiles acrossexplanation contains mixed decisions.
                                                                   datasets supports the interpretation that the extracted dimen-
Step 2: Match SubTags via regular-expression keywords.       sions reflect consistent model-level inductive biases rather
Each reasoning unit is then matched against a pre-defined      than dataset-specific artifacts.
dictionary of lexical patterns. A SubTag is triggered if any
associated pattern is found. The SubTags are intentionally        D  Polarization computation
fine-grained and surface-level, designed to capture recurring                     (implementation).
phrases that LLMs use when justifying rewiring. Examples
                                                          For each strategy and each time bin, we extract stance labelsinclude:
                                                       from the LLM output and count nF , nA, nN occurrences of   (i) OffTopic / LowInfo / Redundant (information-quality
                                                 FAVOR, AGAINST, and NEUTRAL, respectively. Let n =concerns)
                                                nF + nA + nN. We compute pF = nF /n, pA = nA/n, and   (ii) ExtremismTone or HopePositivity (affective tone)
                                               pN = nN/n. We define stance polarization as   (iii) NoveltyComplement or UserContextAlign  (instru-
mental value)                                              P = |pF −pA|.
   (iv) PolicyInstitution  / MinorityRights  / Accountability                                                          For cross-strategy comparison, we align time bins with the
(moral framing)                                               Random strategy and compute
   (v) relational cues such as TieReciprocity or TieInactivity
(tie-based reasons).                                  ∆P (s) = P (s) −P (rand).
  To improve robustness, we apply a lightweight negation                                (s)                                          (s)                                         We summarize ∆P   over bins by its sample mean ∆P
check: patterns appearing under explicit negation (e.g., “not                                                       and estimate 95% confidence intervals using a normal ap-
toxic”) are not counted as matches. We also apply an action-                                                              proximation:
aware preference filter: certain SubTags are more plausible
                                                                                                          (s)       σ∆P (s)   followfor            (e.g.,                 reciprocity,                               positivity,                                      novelty),                                        whereas                                                       oth-             ∆P  ± 1.96 · √n   ,ers    are more              plausible                        for                         unfollow (e.g.,                                                inactivity,                                              spam,
misinformation). When an action label is available, Sub-      where σ∆P (s) is the sample standard deviation over aligned
Tags that strongly contradict the action preference are down-      bins and n is the number of bins.
weighted by exclusion. This step is conservative: it does not
force a single label, but reduces obvious false positives in     E  Implementation Details of News Shock
mixed or noisy rationales.                                            Experiments
Step 3: Map SubTags to the five SuperTags.   Finally,    We provide additional implementation details for the news
each SubTag is deterministically mapped to exactly one of      shock case study to facilitate reproducibility. All experi-
the five dimensions using a fixed lookup table. This yields      ments start from identical initial network structures, agent


                                                   987

## Страница 17

opinion states, and random seeds. The only difference across          adults dying within hours of injection. Influential
scenarios is the presence and semantic polarity of the in-          posts accuse governments and pharmaceutical com-
jected news content.                                               panies of deliberate data suppression, calling the roll-
                                                                  out a “catastrophic human experiment”. Several hos-
Shock injection mechanism.  The news shock is imple-
                                                                             pitals are reported to have suspended vaccination pro-
mented as a platform-level news post that appears in agents’
                                                         grams amid staff walkouts and protests, while panic
information screens during a fixed time window. The in-
                                                                 spreads online with mass appointment cancellations
jected news is treated as a standard textual item in the feed
                                                          and calls for an immediate nationwide halt. Officials
and is processed by agents through the same language-based
                                                          deny proven causality and urge calm, but public trust
perception and decision mechanisms as ordinary posts. No
                                                                                    is rapidly deteriorating as investigations lag behind
additional rules or parameters are introduced specifically for
                                                                       events.
the shock.
                                                             Interaction with network rewiring.  The news shock
Timing and exposure.  In all shock experiments, the news
                                                          does not directly alter the rewiring process. Agents decide
intervention starts at time step t = 500 and lasts for a
                                                          whether to rewire and which connections to modify using
fixed window of 1000 simulation steps. Within this window,
                                                                 the same LLM-based decision mechanism as in the no-shock
agents are exposed to the news with a fixed probability at
                                                                         setting. Any structural changes arise indirectly from agents’
each update. Outside the shock window, no external news is
                                                              responses to the altered informational environment.
injected. All other simulation parameters remain unchanged.
News content.  Two types of exogenous news are consid-      Ethics and Responsible Use
ered. Both news items are synthetically constructed and do      Experiments use public, aggregated datasets, applying the
not correspond to specific real-world events. The positive      framework to finer-grained settings would require stronger
news emphasizes vaccine effectiveness, reduced hospitaliza-      anonymization and minimal disclosure (e.g., releasing only
tion and mortality, and endorsements from authoritative in-      aggregate statistics and essential synthetic artifacts) with
stitutions, while the negative news highlights risk-oriented       explicit data-use boundaries. Because LLMs carry induc-
narratives, including alleged severe adverse reactions, re-       tive biases, we complement structural results with a mo-
ported deaths, and claims of institutional misconduct. To       tive taxonomy to increase decision transparency; future
enhance narrative plausibility and linguistic realism, both     work should add group-wise slices, fairness probes, and
news texts include concrete numerical details and references       counterfactual evaluations, and treat stance metrics as rel-
to institutional actors, reflecting common stylistic patterns       ative across models. Long-standing transparency–privacy
observed in real-world public health reporting and online       tensions persist: language-driven simulation offers a prag-
discourse. The full text of each news item is fixed through-      matic middle ground by releasing synthetic trajectories that
out the shock window and identical for all agents. The news      match statistical and structural properties without expos-
texts used in the experiments are reported verbatim below.        ing personal data. Synthetic corpora cannot fully substitute
                                                                       real audits—especially for cultural nuance or multilingualPositive news text.
                                                     dynamics—yet they improve reproducibility at lower pri-
  GLOBAL ALERT: Historic vaccine success — an                                                          vacy risk; extensions include multilingual contexts, local-
   unprecedented Phase III trial spanning 12 countries                                                                ized prompts, and cross-platform comparisons.
   (N≈68,000) reports 96.4% efficacy against symp-
   tomatic infection and a 99.1% reduction in severe and        Cost and Compute Footprint
    critical cases. Within one month of emergency rollout,
                                                   Our framework is practical at research scale. Using official
   COVID-related hospitalisations fell by 72% nation-
                                                  API endpoints, a full 2,000-step run is affordable under cur-
   wide, ICU occupancy dropped by 61%, and excess
                                                                     rent pricing with moderate context windows and concise ra-
   mortality returned to pre-pandemic levels for the first
                                                                       tionales. Each step averages a few thousand input tokens
   time in three years. Independent safety boards report
                                                                    (screen, history, instructions) and roughly one thousand out-
   serious adverse events at fewer than 1 per 250,000
                                                               put tokens (decision, rationale, post). Costs scale approxi-
   doses, with no confirmed causal links. The WHO and
                                                           mately linearly with the number of on-screen agents, the ver-
   national regulators jointly declare the vaccine “a de-
                                                                 bosity of rationales, and the number of parallel models. On
   cisive turning point” and recommend immediate, uni-
                                                            a A100 GPU, a quantized 30–70B model completes 2,000
   versal deployment, calling vaccine hesitancy “the pri-
                                                                   steps in ∼4–5 hours with batching and KV caching. These
   mary remaining threat to public health”.
                                                                     figures are not hardware- or vendor-agnostic; they serve as
Negative news text.                                       an empirical yardstick for reproductions and for budgeting
                                                                     larger ablations. To stabilize costs, we cap screen length,  EMERGENCY: Vaccine  crisis erupts — viral re-
                                                        compress history via extractive summaries, and cache re-   ports claim an explosive surge in life-threatening re-
                                                             peated judgments when underlying texts are unchanged.   actions following recent vaccination, alleging over
   3,800 emergency hospitalisations and at least 94 sud-
   den deaths across multiple regions in just ten days.
   Graphic personal accounts describe cardiac collapse,
   seizures,  paralysis, and previously healthy young


                                                   988
