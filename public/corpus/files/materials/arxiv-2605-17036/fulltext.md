---
id: arxiv-2605-17036-text
type: material
title: Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management
work_id: arxiv-2605-17036
source_url: https://arxiv.org/html/2605.17036v4
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять
  с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.
language: original
sha256_text: 82cf760dc82198a4298433b1711d7fdc825c80e0bfedb862230df0e4e6b074cd
---

> Источник: [https://arxiv.org/html/2605.17036v4](https://arxiv.org/html/2605.17036v4). Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.

# Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management

Carol Xuan Long
Affiliation: Harvard University/ ETH AI Center
  
David Simchi-Levi
Affiliation: MIT/Purdue
  
Feng Zhu
Affiliation: MIT
  
Huangyuan Su
Affiliation: Harvard University/Kempner Institute
  
Andre P. Calmon
Affiliation: Georgia Tech
  
Flavio P. Calmon
Affiliation: Harvard University

###### Abstract

This paper studies the performance and reliability of autonomous generative AI agents in multi-echelon supply chains using the MIT Beer Game. We examine how model choice, operational guardrails, centralized data sharing, and prompt design affect system performance. In our best-performing configuration, GenAI agents reduce total supply-chain costs by up to 80% relative to human teams.
Despite strong average performance, autonomous agents can exhibit substantial run-to-run instability, generating volatile procurement decisions and large tail costs. We characterize this phenomenon as agent bullwhip, the amplification of decision instability in autonomous multi-agent systems. We show that this instability can propagate across echelons and compound over time, even when the underlying demand path is held fixed.
We then evaluate two approaches for improving reliability: reinforcement-learning post-training and operational guardrails. Both reduce tail events and mitigate agent bullwhip, but they operate through different mechanisms and require different levels of information and model access. Reinforcement-learning post-training delivers the largest gains in reliability and system performance when system-level feedback is available, while guardrails provide a simple training-free alternative for constraining extreme decisions.

A Preprint

|  |
| --- |
|  |

## 1 Introduction1

Experts suggest that a fully autonomous supply chain, where AI makes all inventory and logistics decisions, may be close at hand. They predict that autonomous supply chains will soon deliver significant gains in productivity, efficiency, and responsiveness. Fueling this excitement is the rapid progress in Large Language Models (LLMs), the engine behind modern Generative AI (GenAI), which can now handle tasks ranging from procurement decisions and revenue management to logistics.
So far, however, most LLM applications in supply chains have focused on narrow tasks, using a single model for a specific task, such as demand forecasting or replenishment decisions ([Menache et al., 2025](https://arxiv.org/html/2605.17036v4#bib.bib39)). The broader vision is more ambitious: a fully autonomous supply chain in which multiple LLM agents collaborate, each executing distinct responsibilities across the network.
But how close are we to this reality? To find out, we reimagined the Beer Game — a classic supply chain management simulation developed in the 1960s and used by countless management education programs — by replacing every human player with a GenAI agent. This setup allows us to analyze the supply-chain management capabilities of GenAI agents and the impact of lead time, information sharing, and financial constraints on agent performance. Our self-contained supply-chain simulation serves as a testbed for benchmarking GenAI agents against human experts, anticipating integration challenges, and identifying strategies for using this technology effectively in supply-chain management.

We show that making an autonomous, GenAI-managed supply chain work depends on mastering four critical levers: the model you choose, the policies and guardrails you set, the information you share, and the instructions you give. We benchmarked AI performance against that of humans: we used data from 12 Georgia Tech cohorts with more than 100 students in total who played the Beer Game over the past three years, all operating under the same system conditions as the GenAI testbed. In our best-performing setup — using Qwen-3 4B with optimized prompts, data-sharing rules, and guardrails — the AI agents reduced average costs across 30 replications of the game by as much as 80% relative to the student teams. While the use of students rather than experienced supply chain managers as a benchmark may raise concerns, a substantial body of prior research demonstrates that experimental outcomes in the Beer Game are comparable between the two groups ([Ancarani et al., 2016](https://arxiv.org/html/2605.17036v4#bib.bib6); [Croson and Donohue, 2006](https://arxiv.org/html/2605.17036v4#bib.bib13); [Machuca and Barajas, 2004](https://arxiv.org/html/2605.17036v4#bib.bib14)).

Of course, average performance alone is insufficient to justify operational deployment in real-world applications. Supply chain practitioners must evaluate not only expected cost outcomes but also system reliability. An autonomous policy that yields low average costs but occasionally produces highly volatile procurement, production, or ordering decisions is practically unviable. This is especially true in multi-echelon supply chain networks, where localized errors can rapidly propagate, compounding single deviations into distorted demand signals for upstream agents over time.

Standard evaluations of LLM agents often emphasize average task performance or aggregate cost, but supply-chain deployment also requires consistency across repeated executions of the same operational environment.
The reliability issue of autonomous agents is especially salient because the underlying LLMs are stochastic and can produce inconsistent decisions across repeated runs of the same prompt. Our analysis reveals that out-of-the-box GenAI agents can be efficient on average yet unreliable: occasional ordering decisions can lead to high total supply-chain costs. We show that post-training the agents on synthetic supply-chain data dramatically improves reliability while maintaining a significant cost advantage over human decision makers.

To capture the unreliability risk in using LLM agents for decision-making, we introduce the concept of the *agent bullwhip* effect: the amplification of decision instability and unreliability across runs in multi-agent systems. This instability manifests along two dimensions. First, at a fixed point in time, decision variance increases across facilities as one moves upstream: retailers tend to produce relatively stable orders, while wholesalers, distributors, and factories exhibit progressively larger dispersion and more severe tail decisions. Second, within the same facility, decision variance can grow over time as early ordering differences alter inventory positions, backlogs, and shipment pipelines, causing small behavioral deviations to compound through delayed feedback and increasing the risk of erratic ordering policies over time. We further distinguish the *decision bullwhip*: the component of agent bullwhip that remains after conditioning on the demand path. This framing separates variability inherited from external demand from variability generated by the agent’s own policy, and it explains why a system can be efficient on average yet unreliable across repeated executions. Because repeated sampling does not eliminate this decision-driven component, we develop two reliability interventions to address agent bullwhip: GRPO-based post-training and inference-time guardrails.

These findings point toward a future in which AI handles routine operational decisions while offering cost efficiency and flexible availability, thereby creating capacity for human experts to pursue higher-level strategic challenges in supply chains.

The main contributions of this paper are threefold:

1. 1.

   We develop the GenAI Beer Game as a controlled testbed for autonomous multi-echelon supply-chain decision making and benchmark LLM agents against human teams. We identify four key levers—model selection, policies and guardrails, information sharing, and prompt engineering—with model capability emerging as the dominant factor. In our best-performing configuration, GenAI agents reduce costs by up to 80% relative to human teams.
2. 2.

   We introduce *agent bullwhip* and *decision bullwhip* to characterize and isolate reliability risks in autonomous supply chains. We show that decision instability can amplify both across facilities and over time, even under an identical demand path.
3. 3.

   We develop two approaches to improve reliability. GRPO-based post-training uses system-level supply-chain rewards to learn more stable and coordinated decision policies, substantially reducing bullwhip and tail events while improving efficiency. When system-level rewards are unavailable, inference-time guardrails provide a practical training-free alternative that can be applied directly to the base model to constrain extreme actions. Both approaches reduce tail events and mitigate agent bullwhip.

## 2 Setup and Related Work

### 2.1 The Beer Game: A Timeless Lesson in Supply Chain Dynamics

The Beer Distribution Game is a canonical system-dynamics environment for studying feedback, delay, and boundedly rational decision-making in supply chains ([Forrester, 1961](https://arxiv.org/html/2605.17036v4#bib.bib19); [Sterman, 1989](https://arxiv.org/html/2605.17036v4#bib.bib20)). Its enduring lesson is that local decisions can generate system-level instability even when each participant is trying to behave rationally. The Beer Game is therefore a useful testbed for autonomous AI agents because it turns a simple decision interface into a dynamic coordination problem with delayed feedback.

In the Beer Game, four players operate a simple, serial supply chain with a retailer, a wholesaler, a distributor, and a factory. Each week, every player makes one decision: how much to order from their upstream partner. The setup is straightforward, but the constraints are revealing. Players must balance the cost of holding excess inventory against the penalty for backorders — unfulfilled orders that must be shipped later. The structure of the beer supply chain complicates this central trade-off. Players operate in silos and cannot communicate, and only the retailer sees the actual end-customer demand. Significant built-in delays exist for both orders and shipments, and it typically takes two weeks for a shipment to arrive. This creates "pipeline inventory" — beer that has been ordered but is not yet on hand — which many players fail to account for. The players’ shared goal is to meet demand at the lowest possible total cost for the entire supply chain.

This structure produces the classical bullwhip effect: order signals become distorted and amplified as demand information moves upstream. A small, temporary fluctuation in customer demand creates wild swings in upstream agents’ orders.
A longstanding literature studies the bullwhip effect as the upstream amplification of order variability caused by information distortion in supply chains. Lee et al. ([Lee et al., 1997b](https://arxiv.org/html/2605.17036v4#bib.bib21); [Lee et al., 1997a](https://arxiv.org/html/2605.17036v4#bib.bib7)) introduce the phenomenon and identify key drivers, including demand signal processing, order batching, price fluctuations, and rationing behavior. Chen et al. ([Chen et al., 2000a](https://arxiv.org/html/2605.17036v4#bib.bib42)) quantify how forecasting rules, lead times, and information sharing affect the magnitude of bullwhip in a simple supply chain, and show that exponential smoothing forecasts can further amplify order variability depending on lead times and forecasting parameters ([Chen et al., 2000b](https://arxiv.org/html/2605.17036v4#bib.bib1)). Building on this literature, we study an agent-driven bullwhip from the perspective of across-run reliability: autonomous LLM agents can introduce decision variability even when demand paths and operational states are held fixed.

### 2.2 GenAI in Supply Chains and the Beer Game

Recent work on Generative AI (GenAI) in supply chain management studies language models for demand forecasting, procurement support, replenishment planning, and managerial decision support ([Menache et al., 2025](https://arxiv.org/html/2605.17036v4#bib.bib39)). A related stream examines LLM-based or foundation-model agents for inventory management and autonomous supply chains, emphasizing natural-language interfaces, interpretable coordination, and flexible decision support across organizational boundaries ([Simchi-Levi et al., 2025a](https://arxiv.org/html/2605.17036v4#bib.bib17); [Quan and Liu, 2024](https://arxiv.org/html/2605.17036v4#bib.bib27); [Xu et al., 2024a](https://arxiv.org/html/2605.17036v4#bib.bib28); [Xu et al., 2024b](https://arxiv.org/html/2605.17036v4#bib.bib29); [Zheng et al., 2025](https://arxiv.org/html/2605.17036v4#bib.bib16); [Qi et al., 2026](https://arxiv.org/html/2605.17036v4#bib.bib31)). Much of this literature, however, focuses on specialized applications or architectures that assume substantial system design around the model.

Our setting is closer to how firms are likely to deploy frontier models: through standard interfaces, with limited ability to retrain closed-weight models. We therefore ask whether off-the-shelf GenAI agents can manage a dynamic multi-echelon supply chain when each agent controls one role in the Beer Game.

The setup of this paper is based on a recent implementation of an AI-powered version of the Beer Game ([Long et al., 2025b](https://arxiv.org/html/2605.17036v4#bib.bib41); [Long et al., 2025a](https://arxiv.org/html/2605.17036v4#bib.bib38)). The GenAI Beer Game is similar to the classic version, but replaces human players with LLM agents (e.g., GPT-5). Each agent takes on a single role, such as the wholesaler, and makes ordering decisions autonomously. Like human players, AI agents manage inventory, respond to downstream orders, and submit upstream orders. In contrast to many AI benchmarks that test a single LLM’s performance on a task, the GenAI Beer Game examines the agents’ ability to coordinate as a group.

In Section [3](https://arxiv.org/html/2605.17036v4#S3 "3 Inference-time Methods: Lessons Learned Using GenAI as Autonomous Agents without Training ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management"), we focus on "inference-time methods" to improve the effectiveness of off-the-shelf LLMs. We consider approaches that optimize how these models are used rather than changing the models themselves. Inference-time methods include crafting better instruction prompts for the agents, orchestrating information flow between agents, and designing simple rules or policies that limit what actions agents can take. Unlike existing work ([Boussioux et al., 2025](https://arxiv.org/html/2605.17036v4#bib.bib3)) that studies prompting-based reasoning interventions for improving LLM decisions in the Beer Game, we focus on fully autonomous agent deployment, evaluating both inference-time methods and a reinforcement-learning post-training framework.

### 2.3 Scaling Test-Time Compute

We consider scaling test-time compute in the form of repeated sampling to enhance the reliability of the LLM agents and reduce tail risks. Our inference-time analysis connects to work on test-time compute, where LLM performance is improved by sampling multiple candidate responses, applying self-consistency or voting, or allocating more inference compute to harder instances ([Wang et al., 2022](https://arxiv.org/html/2605.17036v4#bib.bib40); [Wu et al., 2024](https://arxiv.org/html/2605.17036v4#bib.bib32); [Snell et al., 2024](https://arxiv.org/html/2605.17036v4#bib.bib34); [Brown et al., 2024](https://arxiv.org/html/2605.17036v4#bib.bib33)). These methods are attractive because they are computationally efficient, requiring no post-training of LLMs. A Beer Game decision differs from a static response to a self-contained prompt: it is a context-dependent decision whose consequences propagate through inventories, backlogs, and shipment pipelines. This distinction motivates our empirical test of repeated sampling in Section [4.3](https://arxiv.org/html/2605.17036v4#S4.SS3 "4.3 Repeated Sampling Fails to Improve Reliability ‣ 4 Reliability Issues of Autonomous AI Agents: the Agent Bullwhip Effect ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management"). If instability primarily reflects decoding noise, aggregation should stabilize decisions; if it reflects a weakness in the underlying policy, improving reliability requires a stronger intervention.

### 2.4 Reinforcement Learning Post-training for Reliable Agents

The reliability problem also connects to reinforcement-learning post-training for LLMs. Policy-gradient methods such as Proximal Policy Optimization provide a general framework for improving stochastic policies through reward feedback ([Schulman et al., 2017](https://arxiv.org/html/2605.17036v4#bib.bib35)). Group Relative Policy Optimization (GRPO) replaces a learned value critic with relative comparisons across sampled outputs, making it attractive when reward evaluation is easier than value estimation ([Shao et al., 2024](https://arxiv.org/html/2605.17036v4#bib.bib36)). Recent reasoning models show that reinforcement learning can induce more reliable behavior when rewards are aligned with the task objective ([Guo et al., 2025](https://arxiv.org/html/2605.17036v4#bib.bib37)). In supply chains, rewards are operationally observable through holding cost, backlog cost, and total system cost. Therefore, the Beer Game provides a useful post-training environment in which local actions have delayed consequences and system-level rewards measure coordination across echelons.

### 2.5 Decision Reliability and Tail Risk in Autonomous Supply Chains

There is growing interest in evaluating decision-making policies beyond expected performance, including their distributional behavior, tail outcomes, and realized sample paths ([Simchi-Levi et al., 2025b](https://arxiv.org/html/2605.17036v4#bib.bib4); [Simchi-Levi et al., 2023](https://arxiv.org/html/2605.17036v4#bib.bib5); [Zhu and Simchi-Levi, 2026](https://arxiv.org/html/2605.17036v4#bib.bib15)). This perspective is especially important in supply chains, where decisions are sequential, coupled across facilities, and exposed to demand uncertainty and lead-time delays. A policy with low expected cost may still generate unacceptable realized trajectories, such as inventory depletion, backlog accumulation, excessive order volatility, or persistent service failures.

This concern has roots in robust and risk-aware inventory theory. Classical distribution-free inventory models protect against poor realizations when the demand distribution is only partially known ([Scarf, 1958](https://arxiv.org/html/2605.17036v4#bib.bib43); [Gallego and Moon, 1993](https://arxiv.org/html/2605.17036v4#bib.bib44)), while robust optimization approaches extend this logic to dynamic inventory and supply-chain systems ([Bertsimas and Thiele, 2006](https://arxiv.org/html/2605.17036v4#bib.bib45)). A parallel literature in sequential decision-making studies tail-sensitive and constraint-aware policies, including CVaR optimization ([Rockafellar and Uryasev, 2000](https://arxiv.org/html/2605.17036v4#bib.bib46); [Chow et al., 2015](https://arxiv.org/html/2605.17036v4#bib.bib47)), safe reinforcement learning ([García and Fernández, 2015](https://arxiv.org/html/2605.17036v4#bib.bib48)), and constrained policy optimization ([Achiam et al., 2017](https://arxiv.org/html/2605.17036v4#bib.bib49)). Our setting differs from this work in that reliability risk is generated not only by exogenous demand uncertainty or model misspecification, but also by stochastic LLM decisions that interact through multi-echelon feedback.

This paper surfaces the unreliability risks of autonomous AI agents arising from stochasticity that can produce inconsistent decisions across repeated runs of the same task. Standard evaluations of LLM agents often emphasize average task performance or aggregate cost. However, deployment of LLM agents in supply chains requires consistency across repeated executions of the same operational environment. Because LLM decisions are stochastic, the same state can induce different actions across runs; in a multi-echelon network, those differences can propagate upstream and compound over time. We refer to this amplification of run-to-run decision instability as the agent bullwhip effect. It links decision reliability to the structure of the supply chain: reliability risk is not only a property of an individual model response, but also an emergent property of delayed, decentralized coordination. This framing motivates both our empirical reliability analysis and our use of post-training to learn more stable supply-chain policies.

## 3 Inference-time Methods: Lessons Learned Using GenAI as Autonomous Agents without Training

In this section, we evaluate various types of LLMs and examine inference-time methods that can improve the performance of LLM agents in supply-chain decision-making. Here, inference-time strategies reflect how most people interact with GenAI agents: by submitting natural-language queries. Because LLMs are trained on heterogeneous data sources, they can generate meaningful responses with little or no task-specific customization. This raises two central questions: Can these models be deployed “as is” to manage complex supply-chain tasks effectively? If not, are there generalizable inference-time strategies that firms can use to steer GenAI models toward better performance?

We first note the generational gap between earlier and more recent LLMs. Recent models are increasingly equipped with reasoning capabilities that enable them to decompose complex decision problems into smaller, more tractable steps and use explicit intermediate reasoning to guide action selection. This capability is particularly relevant in supply-chain settings, where local ordering decisions interact dynamically with inventory positions, backlogs, delays, and upstream amplification. We report the performance of various LLMs in the Beer Game and benchmark them against human teams. Our results show that more advanced models with stronger reasoning capabilities substantially outperform earlier model generations. At the same time, earlier models can perform effectively when supported by appropriate inference-time interventions, particularly curated information sharing and coordination through a central orchestrator.

Our experiments identify four inference-time levers that are critical to the autonomous use of GenAI in supply chains: (1) model selection, (2) policies and guardrails, (3) data sharing through a centralized orchestrator, and (4) prompt engineering. The most important lever is the selection of a capable model. However, even the most advanced models require careful deployment and guidance. Performance can be substantially improved by sharing the right data through a centralized orchestrator to enhance coordination and by using appropriately designed prompts. Together, these four levers determine whether the integration of autonomous agents succeeds or fails.

Using all four levers, we demonstrate that GenAI agents outperform human teams operating under identical conditions, providing evidence for their potential integration into real-world supply-chain operations.

### 3.1 Generational Leap of LLMs

The choice of LLM used for the agents is the single most important determinant of performance because an agent’s underlying reasoning capability directly affects supply chain costs and system stability. Less advanced models can amplify system noise into costly bullwhip effects, whereas more advanced models can attenuate such amplification. To evaluate reliability, we conducted multiple identical Beer Game runs for each model. In our decentralized setup — that is, a setting in which no information is shared across agents — we found that many earlier-generation models were highly inefficient, producing pronounced bullwhip effects and generating costs an order of magnitude higher than those of human teams. These models were also unreliable: across identical runs, total costs varied substantially, ranging from 13% to 46% of the mean.

More concerningly, some models failed to follow instructions, leading to systemic breakdowns. In our trials, models such as Microsoft’s Phi-4 and DeepSeek-R1-0528 violated basic ordering rules in more than 25% of cases.

However, recent models with advanced reasoning capabilities demonstrate a clear improvement in performance. For example, upgrading agents from GPT-4o mini to GPT-5 mini reduced total supply chain costs by 70%. Similarly, the newer and more lightweight Llama 4 Maverick 17B model substantially outperformed its much larger predecessor, Llama 3.3 70B, reducing costs by 82%, although its results remained unstable. Among the reasoning models evaluated, Qwen-3 4B delivers the strongest performance, achieving more than a 65% reduction in total supply-chain costs relative to both GPT-5 mini and Llama 4 Maverick 17B. These findings indicate that firms should prioritize reasoning ability and instruction-following when selecting a model; subsequent interventions should be viewed as performance optimizations.

### 3.2 Policies and Guardrails to Limit Costly Errors

Policies and guardrails are most valuable not because they make agents inherently better at solving the underlying decision problem, but because they prevent agents from taking high-cost actions when their reasoning or forecasts fail. Constraints on an agent’s range of possible actions can therefore materially improve both efficiency and reliability. This is particularly important in supply-chain settings, where simple guardrails can prevent panic-induced over-ordering that triggers costly bullwhip cascades across upstream suppliers. In our experiments, a simple budget constraint proved especially effective. Each agent was assigned a fixed budget, and orders were not allowed to exceed available funds. This hard constraint operates as a brake on panic buying: when an agent experiences a stockout and attempts to place an excessively large order, the budget limit forces a more measured response, reducing demand amplification and limiting the propagation of shocks upstream.

The effects were substantial: total costs decreased by 25% for GPT-5 mini, 39% for GPT-4o mini, and 41% for Llama 4 Maverick 17B. For capable but less stable models such as Llama 4 Maverick 17B, the improvement in reliability was also pronounced, with cross-run variation in performance declining from 46% to 37%. Although Qwen-3 4B already performs strongly out of the box, imposing a budget constraint yields an additional 3% reduction in total supply-chain costs. These findings suggest that, once a sufficiently capable model has been selected, firms should adopt targeted operational policies to limit erratic behavior. A hard budget constraint represents a particularly high-leverage intervention, as it directly restricts the excessive ordering behavior that contributes to instability.

### 3.3 Information Orchestration: Share Curated Data Through a Central Orchestrator

To evaluate how information sharing affects agent performance, we introduced a central “orchestrator”: an agent with full visibility across the supply chain and responsibility for sharing specific, curated information with the agents participating in the game. This design reflects an important distinction between human and LLM-based decision-making. Information that is useful to human teams may distract an AI agent, resulting in poorer decisions and higher costs. Accordingly, we evaluated two information-sharing strategies in which the orchestrator shared information but did not make decisions. The results indicate that more data is not necessarily better.

In the first scenario, the orchestrator shared only real-time customer demand. When agents received the current week’s customer demand, performance improved across all models. Total costs decreased by approximately 18% for GPT-5 mini, 25% for Llama 4 Maverick 17B, 7% for Qwen-3 4B, and 38% for GPT-4o mini.

In the second scenario, agents received both demand history and analysis. Specifically, we provided a five-week demand history and volatility analysis. The results were mixed. This richer information significantly improved performance for less advanced models, with costs for GPT-4o mini decreasing by 69%. However, for more advanced models, the additional information appeared to act as a distraction, and performance was worse than when agents received only real-time demand.

Notably, other data elements that typically benefit human decision makers — such as inventory position or pipeline inventory — provided limited benefits and often exacerbated the bullwhip effect. These findings suggest that firms should be selective and empirically test which data are shared with AI agents. For more advanced models, less information is often more effective.

### 3.4 Prompt Design

Because LLMs are probabilistic systems, task framing matters. Prompt design can substantially improve the performance of less advanced models, although it may provide limited benefits for more advanced models. In our experiments, reframing the objective — the instruction provided to the LLM — from the general goal of “minimize total costs” to the more specific objective of “minimize the weighted average of backlog and holding costs” generated large gains for less advanced models. This prompt revision reduced costs by 44% for GPT-4o mini and 33% for GPT-4.1 mini. For more advanced models, the effect of rephrasing the task objective was negligible.

These results indicate that prompt design should be used as a secondary performance lever. It can unlock meaningful improvements in less advanced models, but it is not a substitute for strong reasoning capabilities, robust guardrails, and curated data sharing.

### 3.5 Summary: Reasoning Models and Critical Design Levers Achieve Above-Human Performance

Benchmarking against human performance is a critical test for autonomous systems. Demonstrating competitiveness with trained professionals validates the potential for integrating AI agents into real-world supply chain operations. This competitive performance, together with AI agents’ inherent advantages in cost efficiency and continuous availability, provides a clear motivation for adoption.

Our most significant finding is that GenAI agents powered by state-of-the-art models can manage a supply chain at a level of proficiency that not only rivals, but can exceed, that of human experts. We benchmarked multiple GenAI agent configurations against historical performance data from 12 Georgia Tech cohorts, comprising more than 100 students operating the same Beer Game. The results were striking. As illustrated in Figure [1](https://arxiv.org/html/2605.17036v4#S3.F1 "Figure 1 ‣ 3.5 Summary: Reasoning Models and Critical Design Levers Achieve Above-Human Performance ‣ 3 Inference-time Methods: Lessons Learned Using GenAI as Autonomous Agents without Training ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management") (Left), earlier-generation models exhibit suboptimal performance out of the box, roughly doubling the supply-chain costs achieved by humans. However, when provided with appropriate information through an orchestrator, they can outperform human teams by reducing costs by 32%.

More advanced models with reasoning capabilities, by contrast, achieve competitive performance even when deployed out of the box. As shown in Figure [1](https://arxiv.org/html/2605.17036v4#S3.F1 "Figure 1 ‣ 3.5 Summary: Reasoning Models and Critical Design Levers Achieve Above-Human Performance ‣ 3 Inference-time Methods: Lessons Learned Using GenAI as Autonomous Agents without Training ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management"), Qwen-3 4B and GPT-5 mini achieved a 77% and 33% cost reduction relative to human teams when operated out of the box. Most notably, when these models are optimized using additional strategic levers — specifically enhanced information sharing and policy constraints such as budget limitations — AI agents powered by GPT-5 mini, Llama 4 Maverick 17B, and Qwen-3 4B achieved 50% to 80% reductions in total supply-chain costs relative to their human counterparts, as shown in Figure [1](https://arxiv.org/html/2605.17036v4#S3.F1 "Figure 1 ‣ 3.5 Summary: Reasoning Models and Critical Design Levers Achieve Above-Human Performance ‣ 3 Inference-time Methods: Lessons Learned Using GenAI as Autonomous Agents without Training ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management") (Right).

Figure 1: Comparisons of AI setups against human teams in supply-chain cost performance. Massive leapt in performance between new-generation reasoning models compared to non-reasoning models. The out-of-the-box
reasoning model (left, GPT-5 mini) exceeded human-level performance, while its non-reasoning predecessor (GPT-4o mini)
required policy constraints, orchestration, and prompt engineering to close the gap with humans. Optimized with the same techniques, reasoning models (right, GPT-5 mini, Llama 4 Maverick 17B, and Qwen-3 4B) achieved up to a 80% cost reduction relative to human teams in the MIT Beer Game.

This finding has important implications. It demonstrates that autonomous AI agents are already capable of handling the complex, dynamic decision-making required for core supply chain functions. By delegating such operational tasks to reliable GenAI agents, human managers can redirect their attention from day-to-day operational routines toward higher-value activities, such as strategic network design, supplier relationship management, navigating major disruptions, and breaking down the functional silos that currently separate supply chain, finance, sales, and trade. In this setting, the role of the supply chain professional evolves from operator to strategist.

Overall, these findings suggest that GenAI agents, when deployed with state-of-the-art models and appropriate configuration, can achieve decision-making quality comparable to that of human experts. This represents a pivotal opportunity to accelerate the transition toward autonomous supply chains and to redeploy human expertise toward more strategic and creative supply chain challenges.

Although the results in Figure [1](https://arxiv.org/html/2605.17036v4#S3.F1 "Figure 1 ‣ 3.5 Summary: Reasoning Models and Critical Design Levers Achieve Above-Human Performance ‣ 3 Inference-time Methods: Lessons Learned Using GenAI as Autonomous Agents without Training ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management") are encouraging, they report average costs over identical simulation runs and therefore obscure a reliability question that is central to real-world deployment: do agents perform consistently well across runs? To examine this issue, Table [1](https://arxiv.org/html/2605.17036v4#S3.T1 "Table 1 ‣ 3.5 Summary: Reasoning Models and Critical Design Levers Achieve Above-Human Performance ‣ 3 Inference-time Methods: Lessons Learned Using GenAI as Autonomous Agents without Training ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management") reports detailed statistics across 30 runs of the 25-week beer game for each AI setup, including mean total supply-chain cost, standard deviation, and coefficient of variation. The results reveal substantial variability. All three models exhibit high coefficients of variation, ranging from 26% to 45% of the mean. This level of run-to-run instability poses a significant operational risk: even when an agent performs well on average, firms may still face occasional but costly failures that disrupt inventory planning, amplify upstream orders, and undermine trust in autonomous supply-chain management.

We investigate the reliability of autonomous supply-chain agents through a range of interventions in the next section. When system-level supply-chain cost signals are available for training, reinforcement-learning post-training combined with operational guardrails provides the strongest improvement in reliability. When such global feedback is unavailable, inference-time guardrails offer a particularly practical alternative: they require no additional model training, can be layered directly onto an existing model, and still provide an effective mechanism for constraining unstable or high-cost actions.

Table 1: Supply Chain Cost and Coefficient of Variation of 25-week Beer Game Across Runs by Model Type

Decision-Maker
Total Costs
Max Costs across Runs
Standard Deviation
Coefficient of Variation


GPT-5 mini default
3927
8644
1772
45%

Llama 4 Maverick 17B default
4026
8912
2103
52%

Qwen-3 4B default
1585
2847
406
26%

## 4 Reliability Issues of Autonomous AI Agents: the Agent Bullwhip Effect

As demonstrated in the preceding sections, autonomous GenAI agents, when optimally configured, can achieve strong average performance in supply-chain settings, potentially surpassing human teams. However, mean performance alone is insufficient to justify operational deployment in real-world applications. Supply-chain practitioners must evaluate not only expected cost outcomes but also system consistency, robustness, and exposure to tail risks. An autonomous policy that yields low expected costs but occasionally produces highly volatile procurement, production, or replenishment decisions is practically unviable.

This concern becomes particularly salient when the same autonomous supply-chain system is run repeatedly under identical conditions. Because LLMs are inherently probabilistic, even advanced models generate different decisions across identical runs. In our experiments, we ran LLM-powered GenAI agents on the same GenAI Beer Game environment across 30 repeated trials. If the agents used a stable inventory policy, one would expect these repeated runs to produce similar ordering trajectories. Instead, as shown in Table [1](https://arxiv.org/html/2605.17036v4#S3.T1 "Table 1 ‣ 3.5 Summary: Reasoning Models and Critical Design Levers Achieve Above-Human Performance ‣ 3 Inference-time Methods: Lessons Learned Using GenAI as Autonomous Agents without Training ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management"), there is significant run-to-run variation in agents’ orders, even though the environment, prompts, and system structure are all held fixed. This variability should not be dismissed as a mere technical artifact of language models; rather, it constitutes a critical operational vulnerability.

The risk is especially pronounced in multi-echelon networks, where localized ordering errors can propagate rapidly and compound over time, transforming isolated deviations into distorted demand signals for upstream agents. Instability at a single node can therefore cascade through the network, generating costly tail outcomes for the supply chain as a whole.

### 4.1 Agent Bullwhip Effect

As described in Section [2](https://arxiv.org/html/2605.17036v4#S2 "2 Setup and Related Work ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management"), the classical bullwhip effect refers to the amplification of order quantities as one moves upstream in the supply chain. Let $q\_{k,t}^{(r)}$ denote the order placed by facility $k$ in period $t$ during simulation run $r$. The classical bullwhip effect can be expressed as an increase in order variance across echelons:

|  |  |  |
| --- | --- | --- |
|  | $$\mathcal{B}\_{i}^{(r)}=\frac{\operatorname{Var}\_{t}\!\left(q\_{k,t}^{(r)}\right)}{\operatorname{Var}\_{t}\!\left(q\_{k-1,t}^{(r)}\right)}>1;$$ |  |

when downstream variance is zero, any positive upstream variance is likewise classified as bullwhip.
In the Beer Game, a modest change in customer demand can therefore turn into much larger order swings at the wholesaler, distributor, and factory.
Our findings suggest that when autonomous LLM agents make these decisions, there is a second layer of amplification. Not only do order levels amplify upstream, but the dispersion and tail risk of the decision itself also amplify across otherwise identical runs.

###### Definition 1 (Agent bullwhip).

Consider a discrete-time serial supply chain with $n$ echelons indexed by $k=1,\dots,n$, where tier $0$ represents external customer demand. Consider repeated runs $r=1,\ldots,R$ of the same supply-chain environment under an identical demand path, system configuration, and agent setup. Let $q\_{k,t}^{(r)}$ denote the order placed by echelon $k$ in period $t$ during run $r$. Define the run-to-run variance of echelon $k$’s order in period $t$ as

|  |  |  |
| --- | --- | --- |
|  | $$\sigma\_{k,t}^{2}=\operatorname{Var}\_{r}\!\left(q\_{k,t}^{(r)}\right).$$ |  |

We say that *agent bullwhip* occurs when decision instability, measured across repeated runs, is amplified by the supply-chain system. This amplification can manifest along two dimensions: across echelons within a fixed time period, and over time within a fixed echelon.
First, run-to-run decision variance increases upstream at a fixed period $t$:

|  |  |  |
| --- | --- | --- |
|  | $$\sigma\_{k,t}^{2}>\sigma\_{k-1,t}^{2}.$$ |  |

Equivalently, for adjacent echelons, define

|  |  |  |
| --- | --- | --- |
|  | $$\Psi\_{k}(t)=\frac{\operatorname{Var}\_{r}\!\left(q\_{k,t}^{(r)}\right)}{\operatorname{Var}\_{r}\!\left(q\_{k-1,t}^{(r)}\right)}.$$ |  |

A value of $\Psi\_{k}(t)>1$ indicates that run-to-run decision variance is amplified as orders move from echelon $k-1$ to echelon $k$. Because fixed-demand experiments can have zero run-to-run variance at tier $0$, we avoid normalizing by $\operatorname{Var}\_{r}(q\_{0,t}^{(r)})$. Instead, when adjacent denominators are positive, cumulative adjacent-tier amplification can be summarized by

|  |  |  |
| --- | --- | --- |
|  | $$C\_{j}(t)=\prod\_{k=1}^{j}\Psi\_{k}(t).$$ |  |

Second, *intertemporal agent bullwhip* occurs when run-to-run decision variance increases over time within the same echelon:

|  |  |  |
| --- | --- | --- |
|  | $$\sigma\_{k,t+1}^{2}>\sigma\_{k,t}^{2}.$$ |  |

Equivalently, define the within-echelon amplification ratio

|  |  |  |
| --- | --- | --- |
|  | $$\Phi\_{k}(t)=\frac{\operatorname{Var}\_{r}\!\left(q\_{k,t+1}^{(r)}\right)}{\operatorname{Var}\_{r}\!\left(q\_{k,t}^{(r)}\right)},$$ |  |

with $\Phi\_{k}(t)>1$ indicating that decision instability accumulates over time for facility $k$.

![Refer to caption](https://arxiv.org/html/2605.17036v4/figures/order_variation_qwen3-4b-instruct-2507_default.png)


Figure 2: Agent bullwhip: order variability across agents and time.
For each week and facility, the colored box captures the middle 50% of orders across repeated runs, the center line denotes the median, the whiskers show the non-outlier range beyond the interquartile range, and circles represent outlier orders. The amplification of decision unreliability across echelons manifests along two dimensions: decision variance increases across facilities at a fixed point in time and within each facility over time.

### 4.2 Agent Bullwhip in Action

To demonstrate the agent bullwhip effect in practice, we analyze order quantities across 30 runs of the GenAI Beer Game driven by Qwen-3 4B under the same demand path, game structure, and prompt. We plot the resulting order variability across facilities and weeks in Figure [2](https://arxiv.org/html/2605.17036v4#S4.F2 "Figure 2 ‣ 4.1 Agent Bullwhip Effect ‣ 4 Reliability Issues of Autonomous AI Agents: the Agent Bullwhip Effect ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management"). Because demand is identical across runs, the dispersion in the figure reflects conditional decision instability rather than demand variability. Across all weeks, the retailer exhibits minor volatility in order quantities, but this variation becomes substantially larger for the wholesaler and most pronounced for the distributor and the factory.

We can analyze the agent bullwhip along *two dimensions*, as run-to-run order variance compounds across agents and time. First, holding a given week fixed, such as Week 15 in Figure [2](https://arxiv.org/html/2605.17036v4#S4.F2 "Figure 2 ‣ 4.1 Agent Bullwhip Effect ‣ 4 Reliability Issues of Autonomous AI Agents: the Agent Bullwhip Effect ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management"), order variability is barely visible for the retailer but increases as one moves upstream to the wholesaler, distributor, and factory.
Second, agent bullwhip accumulates intertemporally within a fixed facility. For a given facility, such as the distributor shown in green, order variability increases over time as early decision shocks perturb inventory positions, backlogs, and pipeline inventories. These perturbed states then feed into later ordering decisions, allowing small differences across runs to persist and compound through lead times and delayed feedback. Thus, even under identical customer demand paths and system configurations, instability compounds both across agents and over time.

This result is counter to a common intuition about autonomous AI agents: agents do not become more reliable merely by interacting with the environment and making repeated decisions. The second dimension of agent bullwhip, order variability over time within a fixed facility, shows that decisions can become increasingly unstable across repeated interactions, even when the environment and agent configuration are held fixed and cost feedback is provided. This suggests that explicit intervention mechanisms are needed to support reliable autonomous supply-chain decision-making.

The traditional bullwhip effect captures amplification in realized order patterns. It shows that, in a given game, upstream nodes may order more aggressively than downstream nodes in response to demand shocks. However, it does not capture whether an agent’s decisions are stable across repeated exposure to the same environment. Agent bullwhip captures this missing component. The variance of decisions across repeated runs reflects uncertainty in the task as perceived and processed by the agent. When that variance grows upstream and over time, it indicates that the autonomous system is not merely reacting strongly to demand; it is becoming less reliable in how it interprets and responds to the same operational state.

This result raises an important caution: a supply chain governed by autonomous LLM agents may appear effective when judged by average cost alone, yet remain operationally fragile if it exhibits high decision variability. In practice, reliability is a first-order performance criterion. Firms are unlikely to delegate planning decisions to an agent that occasionally makes unreasonable choices, even if its average performance is strong.

Firms must be able to trust that a planning system will produce similar recommendations when faced with the same inputs, particularly in settings where supply-chain decisions create downstream financial commitments and upstream production responses. The presence of agent bullwhip suggests that reliability risk is endogenous to the multi-agent supply-chain structure: uncertainty is not only present at the individual-agent level, but is also amplified by the network and by time delays. This creates a new class of tail risk for autonomous operations and complicates the case for deploying off-the-shelf LLM agents without additional safeguards or specialized training.

The central challenge, therefore, is to identify mechanisms that improve agent reliability. We begin with a training-free approach commonly used to reduce unreliability arising from model stochasticity: repeated sampling at test time.

### 4.3 Repeated Sampling Fails to Improve Reliability

![Refer to caption](https://arxiv.org/html/2605.17036v4/figures/order_variation_qwen3-4b-instruct-2507_10_samples.png)

![Refer to caption](https://arxiv.org/html/2605.17036v4/figures/order_variation_qwen3-4b-instruct-2507_100_samples.png)

Figure 3: Effect of repeated sampling on agent bullwhip. The top panel reports results in which each order decision is determined by majority vote over 10 independent samples, while the bottom panel uses 100 samples. Increasing test-time sampling does not reduce run-to-run variability, indicating that decision instability requires policy-level intervention, such as reinforcement-learning post-training of LLM agents.

A common approach in the computer science literature to address model unreliability at test time, without model post-training, is to introduce redundancy by drawing multiple outputs and aggregating them, often via majority voting ([Wang et al., 2022](https://arxiv.org/html/2605.17036v4#bib.bib40)). If order instability were driven primarily by random decoding noise, such ensembling should induce policy convergence and stabilize performance. To test this hypothesis, we compare the default single-sample baseline (Figure [2](https://arxiv.org/html/2605.17036v4#S4.F2 "Figure 2 ‣ 4.1 Agent Bullwhip Effect ‣ 4 Reliability Issues of Autonomous AI Agents: the Agent Bullwhip Effect ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management")) with majority-voting schemes based on 10 and 100 samples.

Figure [3](https://arxiv.org/html/2605.17036v4#S4.F3 "Figure 3 ‣ 4.3 Repeated Sampling Fails to Improve Reliability ‣ 4 Reliability Issues of Autonomous AI Agents: the Agent Bullwhip Effect ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management") shows that repeated sampling fails to mitigate unreliability. Here, we report results based on the mode across multiple samples, with the median across decisions producing similar results. Substantial run-to-run variation persists, and tail events remain pronounced. This reflects a deeper issue: instability arises from suboptimal decision policies rather than incidental randomness. Off-the-shelf models lack a stable inventory-control policy and exhibit systematic errors, such as overreacting to backlogs or neglecting pipeline inventory. When the model is structurally uncertain, additional samples can simply reproduce the same deficient reasoning.

More broadly, test-time ensembling is insufficient for dynamic operational settings. While redundancy can reduce incidental noise, supply-chain management requires structured decision rules that account for delayed information and intertemporal trade-offs.

The next subsection sharpens this intuition by separating demand-driven variability from decision-driven variability. This distinction clarifies why repeated sampling may leave substantial residual instability: it can average over some local randomness, but it does not teach the agent a stable replenishment policy. Achieving reliability therefore requires modifying the underlying policy, which motivates our reinforcement-learning post-training approach.

### 4.4 Understanding Agent Bullwhip

This subsection explains how the agent bullwhip effect arises and why repeated sampling fails to mitigate it. The goal is not to claim that LLM decisions follow a particular inventory-control formula. Rather, the goal is to separate two sources of order variability that are confounded in realized trajectories: variability inherited from customer demand and variability created by the agent’s own decision policy.

##### Agent bullwhip decomposition.

We distinguish two sources of randomness that contribute to the agent bullwhip effect. The first is the external demand path $D=\{D\_{t}\}\_{t\geq 0}$. The second is the agent’s decision randomness $\epsilon=\{\epsilon\_{k,t}\}$, which summarizes run-specific variation in how tier $k$ interprets the same operational state and converts it into an order. We use $\epsilon$ as a reduced-form representation of stochastic LLM behavior; it need not correspond to an explicit perturbation chosen by the model. Consider a discrete-time serial supply chain with $n$ echelons indexed by $k=1,\dots,n$, where tier $0$ represents external customer demand and $q\_{0,t}=D\_{t}$. When conditioning on a realized demand path, we write $D=d$.

The distinction matters because the classical bullwhip effect concerns the propagation of demand uncertainty, whereas autonomous agents can also introduce decision uncertainty even when the demand path and operational state are held fixed. In LLM decision-making, repeated sampling or best-of-$n$ selection can reduce some output noise, but any residual policy-level variation still enters the supply-chain dynamics. The law of total variance separates these two channels. For each tier and period,

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\operatorname{Var}(q\_{k,t})=\underbrace{\operatorname{Var}\_{D}\!\left(\mathbb{E}\_{\epsilon}[q\_{k,t}\mid D]\right)}\_{V^{D}\_{k,t}}+\underbrace{\mathbb{E}\_{D}\!\left[\operatorname{Var}\_{\epsilon}(q\_{k,t}\mid D)\right]}\_{V^{\epsilon}\_{k,t}}.$$ |  | (1) |

##### A two-facet perspective.

The first term, $V^{D}\_{k,t}$, is the demand-driven component: it measures how external demand fluctuations propagate upstream after averaging over the agent’s internal randomness. The second term, $V^{\epsilon}\_{k,t}$, is the decision-driven component: it measures run-to-run instability generated by autonomous agents when the demand path is held fixed. We call upstream amplification of $V^{D}\_{k,t}$ the *demand bullwhip*, and upstream amplification of $V^{\epsilon}\_{k,t}$ the *decision bullwhip*.

This distinction is important for intervention design. Classical bullwhip mitigation mechanisms, such as demand smoothing, order coordination, and information sharing, primarily target the demand-driven component $V^{D}\_{k,t}$. They can reduce the variability inherited from external demand, but they do not eliminate the decision-driven component $V^{\epsilon}\_{k,t}$, which is generated by the agent’s own policy even after conditioning on a fixed demand path. In the context of LLM agents, this means that two runs with the same demand realization and the same operational state may still produce different order-up-to targets, and these residual differences are then propagated upstream by the supply-chain feedback loop.

##### Decision bullwhip may dominate.

Decision bullwhip can dominate in regimes where agents are tuned for prediction stability. In [Appendix C](https://arxiv.org/html/2605.17036v4#A3 "Appendix C A Theoretical Model for Agent Bullwhip ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management"), we discuss a stylized inventory model following ([Chen et al., 2000a](https://arxiv.org/html/2605.17036v4#bib.bib42); [Chen et al., 2000b](https://arxiv.org/html/2605.17036v4#bib.bib1)). Our results ([Theorem 1](https://arxiv.org/html/2605.17036v4#Thmtheorem1 "Theorem 1 (Demand bullwhip). ‣ C.3.1 Demand bullwhip ‣ C.3 Agent Bullwhip and Decomposition ‣ Appendix C A Theoretical Model for Agent Bullwhip ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management") and [Theorem 2](https://arxiv.org/html/2605.17036v4#Thmtheorem2 "Theorem 2 (Decision bullwhip). ‣ C.3.2 Decision Bullwhip ‣ C.3 Agent Bullwhip and Decomposition ‣ Appendix C A Theoretical Model for Agent Bullwhip ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management")) show that when forecasts change smoothly, demand-driven amplification can be relatively mild over a moderate number of tiers. By contrast, residual decision variance can still accumulate across tiers. If decision variances are of comparable magnitude across facilities, then agent-level randomness can become a major source of order variability even when demand itself is stable.

This also highlights why repeated sampling is an incomplete remedy. Majority voting may reduce the local decision variance, but unless it drives this variance very close to zero, the remaining decision noise continues to enter the feedback system and propagate upstream. The structural source of the agent bullwhip is therefore not merely stochasticity at a single decision point; it is the *interaction* between decision variability, lead times, information delays, and decentralized replenishment decisions inherent in autonomous supply chains.

##### Example: LLM performance under constant demands.

We next isolate the decision channel empirically by running the same LLM-powered supply chain under constant customer demand across repeated trials. In this experiment, exogenous demand contributes no run-to-run variability, so any dispersion in orders comes from the agent policy and from how early decision differences propagate through inventories, backlogs, and pipeline shipments. Figure [4](https://arxiv.org/html/2605.17036v4#S4.F4 "Figure 4 ‣ Example: LLM performance under constant demands. ‣ 4.4 Understanding Agent Bullwhip ‣ 4 Reliability Issues of Autonomous AI Agents: the Agent Bullwhip Effect ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management") shows that substantial order dispersion remains even in this fixed-demand setting. The pattern mirrors the agent bullwhip documented above: variability is modest near the retailer but becomes more pronounced upstream and over time. This provides direct evidence of decision bullwhip, because the instability cannot be attributed to changes in customer demand.

![Refer to caption](https://arxiv.org/html/2605.17036v4/figures/order_variation_constant_demand.png)


Figure 4: Decision bullwhip: order variability across agents and time under constant demands.
Customer demand is held constant as $4$ across repeated runs, so order dispersion measures conditional decision instability rather than demand variability. Persistent dispersion across facilities and weeks indicates that stochastic LLM decisions can generate a decision bullwhip even in the absence of demand shocks.

##### Implication for LLM deployment.

In practical deployments of LLM agents for multi-echelon supply-chain management, the observed agent bullwhip effect should therefore be understood as the combined outcome of demand-driven and decision-driven amplification. The demand channel captures how external uncertainty propagates through the system, while the decision channel captures how run-to-run instability in agent policies is generated and amplified even under a fixed demand path. Addressing the latter requires changing the decision policy itself, rather than merely averaging over its outputs. This motivates our subsequent section, which explores various policy intervention mechanisms.

## 5 Policy Interventions for Reliable Autonomous Supply Chains

The reliability analysis above indicates that agent bullwhip is not merely a surface-level sampling artifact. The fixed-demand experiment isolates a decision-driven component of order variability, and the failure of repeated sampling shows that averaging outputs is not enough to produce a stable replenishment policy. The problem lies deeper, in the absence of a decision policy that can reliably coordinate across echelons and optimize system-level outcomes.

We study two complementary approaches that differ in implementation overhead: first, we propose a reinforcement learning framework that trains supply-chain-specialized agents using Group Relative Policy Optimization (GRPO), which learns more stable and coordinated inventory-management policies; second, we revisit training-free guardrails that directly constrain the agents’ feasible actions.

### 5.1 Training Supply-Chain-Specialized Agents with Group Relative Policy Optimization (GRPO)

This pattern is consistent with the nature of the task. Off-the-shelf, general-purpose LLMs exhibit broad linguistic competence and strong generalized reasoning, but they are not explicitly trained to internalize the dynamics of inventory replenishment, including lead times, delayed feedback loops, multi-echelon coordination, and system-wide cost trade-offs. This challenge is analogous to robotics, where models often require task-specific training before they can operate reliably in unfamiliar environments. In the supply-chain setting, the absence of such specialization leads to erratic heuristic responses, substantial run-to-run variability, and severe tail risks.

The natural way to turn a general-purpose LLM into an inventory-management agent is reinforcement-learning post-training. In this framing, the LLM is a stochastic policy whose input is the supply-chain state observed by a player and whose output is that player’s ordering decision. Post-training refines the LLM’s parameters so that an agent using the LLM produces effective decisions on the trajectories the policy itself induces.

This motivates the central question: can reinforcement-learning post-training transform a general-purpose LLM from a capable but volatile decision-maker into a reliable inventory-management agent? More specifically, can feedback from realized supply-chain performance induce a replenishment policy that is both cost-effective and robust across runs?

Applying standard reinforcement-learning algorithms to the Beer Game is difficult. Most modern policy-gradient methods, such as actor-critic algorithms, rely on a learned value function that maps states to expected discounted returns, and several features of this environment make such a value function unreliable: each agent’s state includes inventory, backlog, pipeline, and recent orders; each agent sees only its local state and the orders and shipments from its immediate neighbors; rewards are delayed by lead times; and the relevant horizon spans many weeks.

We therefore use Group Relative Policy Optimization (GRPO), which avoids learning an explicit value function. At each training step, GRPO samples a group of trajectories under the current policy and computes a baseline from the realized costs of the group. Trajectories that outperform the baseline are reinforced; trajectories that underperform are discouraged. This relative comparison provides a stable learning signal in a high-dimensional, multi-agent, delayed-feedback environment where value estimation would be unreliable.

Our GRPO-based framework trains a single shared LLM backbone across the four tiers using system-level rewards, so that the shared model learns how local ordering decisions interact across echelons. After post-training, we deploy independent instances of this shared backbone at each tier, with each agent acting on its own local state but using the shared learned policy. The trained LLM therefore carries a global view of how every tier should behave under system-level cost, even though each deployed instance acts only on local information. This is the centralized-training, decentralized-execution paradigm from multi-agent reinforcement learning: coordination is built into the policy through training rather than into runtime communication or orchestration.

##### Environment and global post-training setup.

We consider the GenAI Beer Game described in Section [2](https://arxiv.org/html/2605.17036v4#S2 "2 Setup and Related Work ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management"), a four-echelon supply chain consisting of a retailer, wholesaler, distributor, and factory. All four agents share the same LLM policy $\pi\_{\theta}$ but operate at different positions in the supply chain. The system evolves over $T$ weeks. Every week, every LLM-powered agent observes its local state (inventory, backlog, incoming shipments, etc.) and outputs an order quantity.

Training is performed over multiple simulated episodes. Each episode corresponds to one full beer game trajectory of length $T$. For each training step, we run $G$ independent episodes (rollouts) using the current policy.

##### Demand curriculum.

To expose the model to diverse dynamics, we train under synthetic demand distributions:

- •

  Curriculum 1 (Poisson): Demand is drawn i.i.d. from $\mathrm{Poisson}(\lambda)$, where $\lambda\sim\mathcal{U}(5,20)$ is resampled per episode.
- •

  Curriculum 2 (Truncated Normal): Demand is drawn i.i.d. from a truncated normal distribution:
  $D\_{t}\sim\mathrm{TruncNormal}(\mu,\sigma^{2};[0,50]),\quad\mu\sim\mathcal{U}(8,20),\ \sigma\sim\mathcal{U}(2,6)$.

In practice, training may use either distribution or a curriculum that switches between them across training steps.

Cost structure and reward signals.

Let $c\_{k,t}$ denote the cost incurred by agent $k\in\{\text{retailer},\text{wholesaler},\text{distributor},\text{factory}\}$ at week $t$. This cost consists of holding and backorder components:

|  |  |  |
| --- | --- | --- |
|  | $$c\_{k,t}=c\_{\mathrm{hold}}I\_{k,t}+c\_{\mathrm{back}}B\_{k,t}.$$ |  |

Here, $I\_{k,t}$ and $B\_{k,t}$ denote on-hand inventory and backlog, respectively. Aggregating across agents, the total system cost at week $t$ is $c\_{t}^{\mathrm{sys}}=\sum\_{a}c\_{t}^{(a)}$, and the cumulative system cost over an episode across $T$ weeks is

|  |  |  |
| --- | --- | --- |
|  | $$C^{\mathrm{sys}}=\sum\_{t=1}^{T}c\_{t}^{\mathrm{sys}}.$$ |  |

Similarly, each agent incurs a cumulative cost:

|  |  |  |
| --- | --- | --- |
|  | $$C\_{k}=\sum\_{t=1}^{T}c\_{k,t}.$$ |  |

The reward signal is defined along two dimensions: reward scope and reward attribution. The reward scope determines whether performance is measured at the system level or at the level of individual agents. Under a system-level objective, the reward is given by $r=-C^{\mathrm{sys}}$, so that all agents share a common signal reflecting total supply chain efficiency. Under an agent-level objective, each agent $a$ is evaluated using its own cumulative cost, $r\_{k}=-C\_{k}$, which emphasizes decentralized performance.

The reward attribution determines how costs are assigned to individual decisions over time. Under episode-level attribution, a single scalar reward is assigned uniformly to all actions taken within a trajectory, so that each decision receives the same signal $r$ (or $r\_{k}$). In contrast, under rollout (return-to-go) attribution, each decision taken at week $t$ is assigned the cumulative downstream cost incurred from that point onward:

|  |  |  |
| --- | --- | --- |
|  | $$r\_{t}=-\sum\_{\tau=t}^{T}c\_{\tau},$$ |  |

where $c\_{\tau}$ corresponds to either $c\_{\tau}^{\mathrm{sys}}$ or $c\_{k,\tau}$ depending on the chosen reward scope. This formulation attributes credit to actions based on their long-term impact on future costs, allowing earlier decisions to be evaluated according to the downstream consequences they induce.

##### Group relative policy optimization (GRPO).

Group Relative Policy Optimization (GRPO) is well-suited to the supply-chain setting because it avoids the need to learn a separate value function or critic over a high-dimensional, partially observed, and multi-agent state space. Instead, it uses the group of sampled trajectories as an implicit baseline. At each training step, multiple episodes are generated under the same environment, and their realized costs are compared. Trajectories that achieve lower costs than their peers are reinforced, while those with higher costs are discouraged. This relative evaluation provides a stable learning signal without requiring explicit value estimation.

##### Advantage construction.

This comparison is formalized through a group-normalized advantage, which we denote by $\mathrm{Adv}\_{k,t}^{(i)}$, where $i$ indexes the episode, $t$ indexes the week, and $k\in\mathcal{A}$ indexes the agent. Let $r\_{k,t}^{(i)}$ denote the reward assigned to agent $k$ at week $t$ in episode $i$. The advantage is computed by normalizing this reward across the $G$ episodes collected in the same training step:

|  |  |  |
| --- | --- | --- |
|  | $$\mathrm{Adv}\_{k,t}^{(i)}=\frac{r\_{k,t}^{(i)}-\frac{1}{G}\sum\_{j=1}^{G}r\_{k,t}^{(j)}}{\sqrt{\frac{1}{G}\sum\_{j=1}^{G}\left(r\_{k,t}^{(j)}-\frac{1}{G}\sum\_{h=1}^{G}r\_{k,t}^{(h)}\right)^{2}}+\varepsilon\_{\mathrm{norm}}}.$$ |  |

The small constant $\varepsilon\_{\mathrm{norm}}>0$ prevents division by zero and is distinct from the decision-shock notation in Section [C](https://arxiv.org/html/2605.17036v4#A3 "Appendix C A Theoretical Model for Agent Bullwhip ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management"). This normalization ensures that learning depends on relative performance within the group rather than the absolute scale of realized costs. For reward-to-go signals, normalization is performed separately for each week and agent, so that a decision is compared only with decisions made by the same agent at the same temporal position across episodes. Episode-level and system-level rewards are recovered as special cases: under episode-level attribution, $r\_{k,t}^{(i)}$ is constant across $t$, while under system-level scope, the same system reward is shared across agents.

##### Policy representation.

The LLM defines a stochastic policy $\pi\_{\theta}$ that maps supply-chain contexts to ordering decisions. Each episode $i$ produces a sequence of weekly decisions $y^{(i)}=(y\_{1}^{(i)},\ldots,y\_{T}^{(i)})$, where each $y\_{t}^{(i)}$ is a vector of actions across the four agents,
$y\_{t}^{(i)}=\big(y\_{r,t}^{(i)},\,y\_{w,t}^{(i)},\,y\_{d,t}^{(i)},\,y\_{f,t}^{(i)}\big)$.
Each component corresponds to the order quantity placed at week $t$ by the retailer, wholesaler, distributor, and factory, respectively. The four agents make separate decisions based on their local supply-chain contexts. Conditional on these contexts, the joint likelihood factorizes across weeks and agents:

|  |  |  |
| --- | --- | --- |
|  | $$\log\pi\_{\theta}(y\_{i}\mid x)=\sum\_{t=1}^{T}\sum\_{k\in\mathcal{A}}\log\pi\_{\theta}\big(y\_{k,t}^{(i)}\mid x\_{k,t}^{(i)}\big),$$ |  |

where $\mathcal{A}=\{\text{retailer, wholesaler, distributor, factory}\}$ and $x\_{a,t}^{(i)}$ denotes the context available to agent $a$ at week $t$ in episode $i$. Each term is computed from the token-level log-probabilities of the generated response for that agent.

##### Objective function.

GRPO updates the shared policy by reinforcing agent-week decisions that perform well relative to comparable decisions in the same training group. The corresponding objective is

|  |  |  |  |
| --- | --- | --- | --- |
|  | $\displaystyle\mathcal{J}\_{\mathrm{GRPO}}(\theta)=\mathbb{E}\left[\frac{1}{G}\sum\_{i=1}^{G}\frac{1}{T|\mathcal{A}|}\sum\_{t=1}^{T}\sum\_{k\in\mathcal{A}}\mathrm{Adv}\_{k,t}^{(i)}\log\pi\_{\theta}\big(y\_{k,t}^{(i)}\mid x\_{k,t}^{(i)}\big)-\beta D\_{\mathrm{KL}}(\pi\_{\theta}\|\pi\_{\mathrm{ref}})\right].$ |  | (2) |

Thus, positive advantages increase the likelihood of the corresponding agent decisions, while negative advantages decrease it. Since all agents share the same LLM backbone, gradients from all agents and all weeks are aggregated into a single parameter update. The KL penalty stabilizes training by constraining the updated policy to remain close to the frozen reference model.

##### Model update.

Each training step consists of two phases: data collection and policy optimization. First, $G$ beer game episodes are simulated using the current policy with stochastic sampling, producing trajectories of decisions and associated cost signals. Based on the chosen reward scope and attribution scheme, advantages are computed either at the episode level or as reward-to-go signals and normalized across the group.

Second, the model parameters are updated via stochastic gradient ascent on the GRPO objective. In practice, for each trajectory $i$, we compute the mean token-level log-probability and weight it by the corresponding advantage:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $\displaystyle\nabla\_{\theta}\mathcal{J}\approx\frac{1}{GT|\mathcal{A}|}\sum\_{i=1}^{G}\sum\_{t=1}^{T}\sum\_{k\in\mathcal{A}}\mathrm{Adv}\_{k,t}^{(i)}\nabla\_{\theta}\log\pi\_{\theta}\big(y\_{k,t}^{(i)}\mid x\_{k,t}^{(i)}\big)-\beta\nabla\_{\theta}D\_{\mathrm{KL}}\big(\pi\_{\theta}\|\pi\_{\mathrm{ref}}\big).$ |  | (3) |

Gradients are accumulated across all trajectories, optionally regularized with a KL penalty against a frozen reference model, clipped to control variance, and applied using an optimizer such as AdamW. This procedure iteratively shifts the policy toward generating decisions that achieve lower supply-chain costs relative to competing episodes.

###### Remark 1 (Pooling reward information across agents).

Importantly, the model update pools reward information from all four agents, as shown in equation ([3](https://arxiv.org/html/2605.17036v4#S5.E3 "Equation 3 ‣ Model update. ‣ 5.1 Training Supply-Chain-Specialized Agents with Group Relative Policy Optimization (GRPO) ‣ 5 Policy Interventions for Reliable Autonomous Supply Chains ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management")). Although agents are deployed independently at different echelons, they share a common base model during training. As a result, the update is not based on the experience of a single facility in isolation; instead, it aggregates learning signals from the retailer, wholesaler, distributor, and factory. This allows the shared policy to internalize how local ordering decisions affect system-wide outcomes across the supply chain, while preserving decentralized execution at deployment.

##### Evaluation protocol.

After training, the learned policy is evaluated on the standard MIT Beer Game demand pattern:

|  |  |  |
| --- | --- | --- |
|  | $$D\_{t}=(4,4,4,4,8,\ldots,8).$$ |  |

Performance is measured over 30 independent simulation runs, and we report the average total supply chain cost as well as per-agent costs.

### 5.2 Global GRPO Post-training Results

![Refer to caption](https://arxiv.org/html/2605.17036v4/figures/order_variation_finetuned_step_0025_after_training.png)


Figure 5: Impact of post-training on order reliability. Post-training significantly compresses decision variance across all facilities and mitigates outlier events. Note: The y-axis scale is held constant with Figures 2 and 3 to facilitate direct comparison.

A central design choice in our GRPO framework is the reward function used for training and model updates. We consider four reward formulations that vary along two dimensions. The first is the level of aggregation: rewards can be based either on total system cost or on the cost incurred by the individual agent. The second is the attribution window: rewards can assign the same episode-level outcome to all actions in an episode, or use rollout-based attribution, where each action is evaluated using the cumulative cost from that week through the end of the game. The latter better captures delayed feedback in supply-chain systems. Among the four formulations, agent-level rollout rewards provide the most granular training signal and yield the strongest empirical performance. We therefore report the main results below using the agent-level rollout reward formulation.

Post-training substantially improves the reliability of LLM agents in inventory management. Across 30 identical runs of the MIT Beer Game under the original demand pattern, the default setting in Figure [2](https://arxiv.org/html/2605.17036v4#S4.F2 "Figure 2 ‣ 4.1 Agent Bullwhip Effect ‣ 4 Reliability Issues of Autonomous AI Agents: the Agent Bullwhip Effect ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management") exhibits wide interquartile ranges, long whiskers, and numerous extreme tail events in the distribution of orders. By contrast, after post-training the model through reinforcement learning on the training curriculum using the GRPO algorithm described above, Figure [5](https://arxiv.org/html/2605.17036v4#S5.F5 "Figure 5 ‣ 5.2 Global GRPO Post-training Results ‣ 5 Policy Interventions for Reliable Autonomous Supply Chains ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management") shows that the colored boxes representing the upper and lower percentiles largely disappear. This indicates that variation across repeated runs becomes minimal. The trained model therefore produces much more stable ordering decisions, both over time and across all four echelons of the supply chain.

Equally important, post-training sharply reduces tail risk. In the post-training evaluation, the maximum order observed across all facilities and weeks remains below 100, despite the absence of either an explicit budget constraint or a centralized orchestration layer. This result is especially notable because the earlier analysis showed that out-of-the-box agents often required external guardrails and carefully curated information to prevent panic-induced over-ordering. By contrast, post-training appears to enable the model to internalize a more disciplined and reliable decision policy, thereby reducing the need for external controls.

Figure [6](https://arxiv.org/html/2605.17036v4#S5.F6 "Figure 6 ‣ 5.2 Global GRPO Post-training Results ‣ 5 Policy Interventions for Reliable Autonomous Supply Chains ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management") extends the analysis from decision behavior to system-level performance by examining total supply chain costs across repeated runs of the 25-week Beer Game. Consistent with the stabilization in ordering decisions, post-training yields a substantial improvement in both efficiency and robustness. For Qwen-3 4B, average total supply chain cost declines from 1,585 without training to 952 after post-training, while the coefficient of variation falls from 26% to 13%. Tail risk also contracts sharply, with the maximum realized cost across 30 identical runs decreasing from 2,847 to 1,353. By comparison, other out-of-the-box models exhibit both higher average costs and greater variability, including GPT-5 mini at 3,927 with a 45% coefficient of variation and a maximum of 8,644, and Llama 4 Maverick 17B at 4,026 with a 52% coefficient of variation and a maximum of 8,912. These results indicate that post-training not only lowers mean cost, but also substantially narrows the distribution of outcomes across identical runs and reduces exposure to high-cost realizations.

Figure 6: Global post-training improves agent reliability across multiple dimensions. It reduces total supply chain costs, lowers variability across repeated runs, and mitigates worst-case outcomes, thereby improving robustness to tail risks.

These findings shed light on the source of unreliability in autonomous supply chains. The instability we document does not appear to be an inherent consequence of the stochasticity of language models. Rather, it arises from deploying general-purpose models that have not received specialized training for inventory management. Once the agent is exposed to a curriculum of supply chain tasks with synthetic demand and optimized using realized cost feedback, much of the apparent randomness in its supply chain behavior disappears. The trained agent is both more reliable and more efficient: it makes more consistent decisions across runs, exhibits fewer extreme overreactions, and achieves lower average system-wide costs. This suggests that unreliability is, to a considerable extent, a consequence of insufficient domain specialization rather than irreducible stochasticity, and that specialized post-training can improve both the stability and the economic performance of autonomous supply chain agents.

### 5.3 Local Post-Training Fails to Recover System-Level Coordination

The preceding results show that GRPO post-training can substantially improve the reliability of autonomous supply-chain agents when learning is coordinated across the supply chain. However, system-level cost information may not always be available in practice, particularly when different facilities or firms operate independently. We therefore examine whether GRPO post-training can remain effective under fully decentralized learning, where each echelon trains on its own local cost signals rather than on total supply-chain costs.

This setting differs from the global framework in Section 5.1 along two dimensions. First, each agent is trained using only its own holding and backlog costs, rather than a system-level objective that aggregates costs across the supply chain. Second, instead of updating a shared LLM backbone using experience from all four echelons, we train a separate model for the retailer, wholesaler, distributor, and factory. In the global framework, gradients from all agents are pooled into a common policy update, allowing the model to internalize cross-echelon interactions while still operating with local information at deployment. In the decentralized setting, neither rewards nor model updates are shared across agents.

![Refer to caption](https://arxiv.org/html/2605.17036v4/figures/local_finetuning_reliability.png)


Figure 7: Impact of local post-training on order reliability. Local post-training enables a mild decrease in decision variance across facilities but fail to mitigate outlier events. Note: The y-axis scale is held constant with Figures 2-5 to facilitate direct comparison.

This design provides a direct test of whether local optimization is sufficient for system-level coordination. Figure [7](https://arxiv.org/html/2605.17036v4#S5.F7 "Figure 7 ‣ 5.3 Local Post-Training Fails to Recover System-Level Coordination ‣ 5 Policy Interventions for Reliable Autonomous Supply Chains ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management") answers in the negative: substantial decision instability remains under decentralized post-training, with wide dispersion and extreme orders appearing in later periods. The result suggests that improving each agent with respect to its own local objective does not converge to a globally stable supply-chain policy.

The comparison therefore highlights an important distinction between decentralized execution and decentralized learning. Global GRPO preserves decentralized execution but uses shared training signals to internalize system-wide interactions. Fully decentralizing the learning process removes this coordination mechanism and leads to substantially weaker reliability. This motivates the next question: whether simple operational guardrails can provide a more robust reliability intervention when coordinated post-training is unavailable.

### 5.4 Guardrails and Global Post-Training Offer Distinct Reliability Interventions

We revisit guardrails as a policy-level intervention that is both effective and easy to implement. Rather than retraining the model, guardrails impose explicit operational constraints on the agent’s feasible actions to prevent extreme actions. This makes guardrails particularly attractive when post-training is costly or infeasible, especially for closed-weight models for which the underlying parameters are not accessible (e.g., GPT models). In our experiment, we impose a simple guardrail that limits agents’ total expenditures to twice the total customer demand. As discussed in Section [3.2](https://arxiv.org/html/2605.17036v4#S3.SS2 "3.2 Policies and Guardrails to Limit Costly Errors ‣ 3 Inference-time Methods: Lessons Learned Using GenAI as Autonomous Agents without Training ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management"), a simple budget constraint substantially reduced average supply-chain costs by 3% to 41% across the models we evaluated.
Importantly, guardrail design is itself a non-trivial operational problem. When the underlying demand is well understood, appropriate limits can be calibrated relatively easily; in practice, however, demand is uncertain and evolving. Overly permissive constraints provide limited protection against tail events, while overly restrictive constraints can impair performance.

We now examine how guardrails interact with progressively stronger policy interventions — from the default model to decentralized and global post-training — and whether layering explicit operational constraints on top of learned policies yields further reductions in tail risk and improvements in reliability.

Figure [8](https://arxiv.org/html/2605.17036v4#S5.F8 "Figure 8 ‣ 5.4 Guardrails and Global Post-Training Offer Distinct Reliability Interventions ‣ 5 Policy Interventions for Reliable Autonomous Supply Chains ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management") compares several levels of intervention for Qwen-3 4B: the default model, decentralized post-training using local objectives, and global post-training, each with and without guardrails. The comparison reveals a clear hierarchy. Decentralized post-training performs poorly despite the additional training, indicating that optimizing agents independently on local costs does not recover effective system-level coordination. By contrast, global post-training substantially reduces both average cost and tail risk, consistent with the value of learning from coordinated supply-chain objectives. Importantly, adding guardrails further improves reliability across all three model configurations. For the default model, the guardrail reduces average cost by 22%, lowers the coefficient of variation from 26% to 12%, and reduces the maximum observed cost by 45%.

Figure 8: A clear performance hierarchy emerges across policy interventions. Global post-training with guardrails performs best, followed by the default model with guardrails, while decentralized post-training under local objectives underperforms the untrained default model. Mean total supply-chain costs of the 25-week Beer Game are shown for human teams and Qwen-3 4B under default, decentralized post-training, and global post-training, with and without guardrails. Parentheses report coefficients of variation, and diamonds mark maximum observed costs across 30 runs. Guardrails reduce tail risk across all model configurations, while decentralized post-training with local objectives performs substantially worse than both global post-training and the default model.

These results highlight the contrasting pathways of global post-training and guardrails. Guardrails provide a simple, training-free mechanism for improving reliability and limiting extreme outcomes, making them a practical intervention even when model training is unavailable. GRPO-based post-training delivers the most substantial gains, but its effectiveness depends critically on whether centralized cost information is available.

### 5.5 Summary of Results

Our results point to two practical frameworks for improving the reliability of autonomous supply-chain agents: training-free guardrails and global post-training. Guardrails impose explicit operational limits on agent actions, such as budget or ordering constraints, and can be applied directly to an existing model without retraining. Global post-training instead modifies the underlying decision policy using system-wide supply-chain feedback, allowing the model to internalize more stable and coordinated behavior across echelons. These approaches address the same reliability problem through different mechanisms: guardrails restrict extreme actions, whereas post-training enables agents to learn a coordinated decision policy.

Guardrails are the easier of the two approaches to deploy, but their design should not be viewed as trivial. Their effectiveness depends on selecting constraints that are sufficiently tight to prevent extreme actions without unduly restricting the agents’ state space. An overly permissive guardrail provides little protection, whereas an overly restrictive one may prevent the agent from responding effectively to genuine demand or supply shocks. Thus, although guardrails require no model training and minimal runtime computation, identifying appropriate operational limits is non-trivial.

The empirical results reveal a clear hierarchy across interventions. Decentralized post-training, with or without guardrails, does not provide an effective substitute for coordinated learning. Training each echelon separately using only its local cost fails to converge to an effective policy and leads to substantially weaker system-level performance. By contrast, applying a guardrail directly to the untrained default model provides a simple and effective intervention: relative to the default model without guardrails, the budget constraint reduces total supply-chain cost by approximately 22% and cuts the coefficient of variation from 26% to 12%, effectively halving run-to-run variability. This result is particularly important because it demonstrates that meaningful reliability improvements can be achieved without any task-specific model training.

Table 2: Comparison of Guardrails and Global Post-Training

|  | Guardrail (Budget Constraint) | Global Post-Training |
| --- | --- | --- |
| How it works | Sets explicit limits on agent actions, such as spending or order caps. | Trains agents to learn a coordinated supply-chain policy. |
| Upfront requirements | No model training required. | Compute for LLM post-training; System-wide supply chain costs info |
| At deployment | Each action is checked against predefined limits; minimal additional compute. | No additional control step required. |
| Key challenge | Choosing appropriate limits without overly constraining decisions. | Accessing system-wide data and supporting model post-training. |
| Best suited for | Fast, low-complexity deployment; when model retraining is unavailable. | Organizations with sufficient data, compute, and ability to retrain models. |
| Observed impact | Improves performance and materially reduces tail risk. | Delivers the strongest gains in performance and reliability. |

Global post-training delivers the strongest overall performance and reliability, reflecting the value of learning from system-wide cost information and coordinating behavior across echelons during training. The key challenges lie in training compute as well as the availability of system-wide cost information. In settings where these requirements can be met, global post-training is the preferred intervention. Where they cannot, guardrails provide an effective and substantially easier-to-implement alternative.

Importantly, our results suggest that firms do not need to deploy both mechanisms simultaneously. Adding guardrails on top of a globally post-trained model yields only incremental gains. The more consequential choice is therefore between global post-training, when centralized information and training capabilities are available, and guardrails when they are not. Guardrails offer the lowest barrier to adoption, while global post-training provides the strongest reliability gains when the necessary infrastructure and information are available.

## 6 Conclusion: New Paradigm for Supply Chain Management

GenAI has brought supply chain management to an inflection point: a fully autonomous supply chain is moving rapidly from theory to practice. Early AI models lacked the reasoning required for complex, strategic supply-chain decisions; new-generation models have closed that gap.
We show that GenAI agents can exceed human decision-making in planning and replenishment — state-of-the-art models outperform human teams operating the same system. With the right combination of model selection, prompts, guardrails, and orchestrated information sharing, autonomous agents reduce total costs by up to 80%.

However, out-of-the-box agents remain unreliable in critical ways. They can exhibit high order volatility both across facilities and over time, even under the same demand path. Repeated sampling does not meaningfully reduce it, indicating that reliability requires changing the underlying decision policy rather than simply averaging model outputs.

We address this challenge with two complementary interventions. GRPO-based post-training substantially improves both performance and reliability by adapting a shared base model toward more stable and coordinated inventory policies. When system-level rewards are unavailable, inference-time guardrails provide a training-free alternative that constrains extreme actions. Both interventions reduce tail events and mitigate agent bullwhip, with GRPO delivering the largest overall gains.

These findings suggest that advancing autonomous supply chains requires more than increasing LLM reasoning capability: it requires developing agents that make consistently reliable decisions as uncertainty and interdependencies unfold over time. For firms evaluating GenAI for planning and replenishment, average performance is therefore not enough: operational readiness requires both strong expected performance and stable tail behavior.
As AI adoption advances, supply-chain leaders will shift from hands-on management to strategically orchestrating GenAI agents by selecting appropriate models, curating information, and designing effective training and safeguards for reliability. Mastering these is the new playbook for autonomous supply chains.

## Acknowledgements

The paper expands and provides more technical details on the concepts and framework described in a recent article: Long, C., Simchi-Levi, D., Calmon, A. P., & Calmon, F. P. When supply chains become autonomous. Harvard Business Review ([Long et al., 2025a](https://arxiv.org/html/2605.17036v4#bib.bib38)).

This material is based upon work supported by the National Science Foundation
under Grant No FAI 2040880, CIF 2231707, and CIF 2312667. F. P. Calmon and C. Long would also like to acknowledge support from Coefficient Giving and JPMorgan Chase. F.P. Calmon is also affiliated with Google Research as a Visiting Faculty Researcher. This research was also supported by the ETH AI Center through an ETH AI Center postdoctoral fellowship to C. Long.

The authors would like to acknowledge support from Harvard Information Theory Lab, MIT Data Science Lab, Microsoft Accelerating AI Academic Research (AAAR) program, the Kempner Institute at Harvard University, and the Ray C. Anderson Center for Sustainable Business at Georgia Tech.

## References

- Achiam et al. (2017)
  J. Achiam, D. Held, A. Tamar, and P. Abbeel
  Constrained policy optimization.
  In Proceedings of the 34th International Conference on Machine Learning,
  Proceedings of Machine Learning Research, Vol. 70, pp. 22–31.
  Cited by: [§2.5](https://arxiv.org/html/2605.17036v4#S2.SS5.p2.1 "2.5 Decision Reliability and Tail Risk in Autonomous Supply Chains ‣ 2 Setup and Related Work ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management").
- Ancarani et al. (2016)
  A. Ancarani, C. Di Mauro, and D. D’Urso
  Measuring overconfidence in inventory management decisions.
  Journal of Purchasing and Supply Management 22 (3), pp. 171–180.
  Cited by: [§1](https://arxiv.org/html/2605.17036v4#S1.p2.1 "1 Introduction 1 footnote 1 footnote Footnote footnotes Footnotes 1 footnote 1 The paper expands and provides more technical details on the concepts and framework described in a recent article, Long, C., Simchi-Levi, D., Calmon, A. P., & Calmon, F. P. When supply chains become autonomous. Harvard Business Review ( , ). ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management").
- Bertsimas and Thiele (2006)
  D. Bertsimas and A. Thiele
  A robust optimization approach to inventory theory.
  Operations Research 54 (1), pp. 150–168.
  External Links: [Document](https://dx.doi.org/10.1287/opre.1050.0238)
  Cited by: [§2.5](https://arxiv.org/html/2605.17036v4#S2.SS5.p2.1 "2.5 Decision Reliability and Tail Risk in Autonomous Supply Chains ‣ 2 Setup and Related Work ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management").
- Boussioux et al. (2025)
  L. Boussioux, A. Chen, M. Fan, and A. Jain
  Socratic iterative reasoning: enhancing llm decision-making in the beer game supply chain.
  Cited by: [§2.2](https://arxiv.org/html/2605.17036v4#S2.SS2.p4.1 "2.2 GenAI in Supply Chains and the Beer Game ‣ 2 Setup and Related Work ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management").
- Brown et al. (2024)
  B. Brown, J. Juravsky, R. Ehrlich, R. Clark, Q. V. Le, C. Ré, and A. Mirhoseini
  Large language monkeys: scaling inference compute with repeated sampling.
  arXiv preprint arXiv:2407.21787.
  Cited by: [§2.3](https://arxiv.org/html/2605.17036v4#S2.SS3.p1.1 "2.3 Scaling Test-Time Compute ‣ 2 Setup and Related Work ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management").
- Cachon et al. (2007)
  G. P. Cachon, T. Randall, and G. M. Schmidt
  In search of the bullwhip effect.
  Manufacturing & Service Operations Management 9 (4), pp. 457–479.
  Cited by: [Appendix A](https://arxiv.org/html/2605.17036v4#A1.SS0.SSS0.Px2.p1.1 "Sources of Bullwhip Effect ‣ Appendix A Additional Related Works ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management").
- Chen et al. (2000a)
  F. Chen, Z. Drezner, J. K. Ryan, and D. Simchi-Levi
  Quantifying the bullwhip effect in a simple supply chain: the impact of forecasting, lead times, and information.
  Management science 46 (3), pp. 436–443.
  Cited by: [§C.3.1](https://arxiv.org/html/2605.17036v4#A3.SS3.SSS1.p2.1 "C.3.1 Demand bullwhip ‣ C.3 Agent Bullwhip and Decomposition ‣ Appendix C A Theoretical Model for Agent Bullwhip ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management"),
  [§2.1](https://arxiv.org/html/2605.17036v4#S2.SS1.p3.1 "2.1 The Beer Game: A Timeless Lesson in Supply Chain Dynamics ‣ 2 Setup and Related Work ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management"),
  [§4.4](https://arxiv.org/html/2605.17036v4#S4.SS4.SSS0.Px3.p1.1 "Decision bullwhip may dominate. ‣ 4.4 Understanding Agent Bullwhip ‣ 4 Reliability Issues of Autonomous AI Agents: the Agent Bullwhip Effect ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management").
- Chen et al. (2000b)
  F. Chen, J. K. Ryan, and D. Simchi-Levi
  The impact of exponential smoothing forecasts on the bullwhip effect.
  Naval Research Logistics 47 (4), pp. 269–286.
  Cited by: [§C.1](https://arxiv.org/html/2605.17036v4#A3.SS1.SSS0.Px1.p1.1 "Demand prediction and order-up-to-level. ‣ C.1 A General Operational Inventory Model ‣ Appendix C A Theoretical Model for Agent Bullwhip ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management"),
  [§C.1](https://arxiv.org/html/2605.17036v4#A3.SS1.SSS0.Px1.p2.2 "Demand prediction and order-up-to-level. ‣ C.1 A General Operational Inventory Model ‣ Appendix C A Theoretical Model for Agent Bullwhip ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management"),
  [§C.3.1](https://arxiv.org/html/2605.17036v4#A3.SS3.SSS1.p2.1 "C.3.1 Demand bullwhip ‣ C.3 Agent Bullwhip and Decomposition ‣ Appendix C A Theoretical Model for Agent Bullwhip ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management"),
  [§2.1](https://arxiv.org/html/2605.17036v4#S2.SS1.p3.1 "2.1 The Beer Game: A Timeless Lesson in Supply Chain Dynamics ‣ 2 Setup and Related Work ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management"),
  [§4.4](https://arxiv.org/html/2605.17036v4#S4.SS4.SSS0.Px3.p1.1 "Decision bullwhip may dominate. ‣ 4.4 Understanding Agent Bullwhip ‣ 4 Reliability Issues of Autonomous AI Agents: the Agent Bullwhip Effect ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management").
- Chen and Lee (2009)
  L. Chen and H. L. Lee
  Information sharing and order variability control under a generalized demand model.
  Management science 55 (5), pp. 781–797.
  Cited by: [Appendix A](https://arxiv.org/html/2605.17036v4#A1.SS0.SSS0.Px2.p1.1 "Sources of Bullwhip Effect ‣ Appendix A Additional Related Works ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management").
- Chow et al. (2015)
  Y. Chow, A. Tamar, S. Mannor, and M. Pavone
  Risk-sensitive and robust decision-making: a CVaR optimization approach.
  In Advances in Neural Information Processing Systems,
  Vol. 28.
  Cited by: [§2.5](https://arxiv.org/html/2605.17036v4#S2.SS5.p2.1 "2.5 Decision Reliability and Tail Risk in Autonomous Supply Chains ‣ 2 Setup and Related Work ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management").
- Croson et al. (2014)
  R. Croson, K. Donohue, E. Katok, and J. Sterman
  Order stability in supply chains: coordination risk and the role of coordination stock.
  Production and Operations Management 23 (2), pp. 176–196.
  Cited by: [Appendix A](https://arxiv.org/html/2605.17036v4#A1.SS0.SSS0.Px2.p1.1 "Sources of Bullwhip Effect ‣ Appendix A Additional Related Works ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management").
- Croson and Donohue (2006)
  R. Croson and K. Donohue
  Behavioral causes of the bullwhip effect and the observed value of inventory information.
  Management science 52 (3), pp. 323–336.
  Cited by: [Appendix A](https://arxiv.org/html/2605.17036v4#A1.SS0.SSS0.Px2.p1.1 "Sources of Bullwhip Effect ‣ Appendix A Additional Related Works ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management"),
  [§1](https://arxiv.org/html/2605.17036v4#S1.p2.1 "1 Introduction 1 footnote 1 footnote Footnote footnotes Footnotes 1 footnote 1 The paper expands and provides more technical details on the concepts and framework described in a recent article, Long, C., Simchi-Levi, D., Calmon, A. P., & Calmon, F. P. When supply chains become autonomous. Harvard Business Review ( , ). ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management").
- Forrester (1961)
  J. W. Forrester
  Industrial dynamics.
   MIT Press, Cambridge, MA.
  Cited by: [§2.1](https://arxiv.org/html/2605.17036v4#S2.SS1.p1.1 "2.1 The Beer Game: A Timeless Lesson in Supply Chain Dynamics ‣ 2 Setup and Related Work ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management").
- Fox et al. (2000)
  M. S. Fox, M. Barbuceanu, and R. Teigen
  Agent-oriented supply-chain management.
  International Journal of Flexible Manufacturing Systems 12 (2), pp. 165–188.
  External Links: [Document](https://dx.doi.org/10.1023/A%3A1008195614074)
  Cited by: [Appendix A](https://arxiv.org/html/2605.17036v4#A1.SS0.SSS0.Px1.p1.1 "Multi-Agent Collaboration ‣ Appendix A Additional Related Works ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management").
- Gallego and Moon (1993)
  G. Gallego and I. Moon
  The distribution free newsboy problem: review and extensions.
  Journal of the Operational Research Society 44 (8), pp. 825–834.
  External Links: [Document](https://dx.doi.org/10.1057/jors.1993.141)
  Cited by: [§2.5](https://arxiv.org/html/2605.17036v4#S2.SS5.p2.1 "2.5 Decision Reliability and Tail Risk in Autonomous Supply Chains ‣ 2 Setup and Related Work ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management").
- García and Fernández (2015)
  J. García and F. Fernández
  A comprehensive survey on safe reinforcement learning.
  Journal of Machine Learning Research 16 (42), pp. 1437–1480.
  Cited by: [§2.5](https://arxiv.org/html/2605.17036v4#S2.SS5.p2.1 "2.5 Decision Reliability and Tail Risk in Autonomous Supply Chains ‣ 2 Setup and Related Work ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management").
- Guo et al. (2025)
  D. Guo, D. Yang, H. Zhang, J. Song, R. Zhang, R. Xu, Q. Zhu, S. Ma, P. Wang, X. Bi, et al.
  DeepSeek-r1 incentivizes reasoning in llms through reinforcement learning.
  Nature 645, pp. 633–638.
  External Links: [Document](https://dx.doi.org/10.1038/s41586-025-09422-z)
  Cited by: [§2.4](https://arxiv.org/html/2605.17036v4#S2.SS4.p1.1 "2.4 Reinforcement Learning Post-training for Reliable Agents ‣ 2 Setup and Related Work ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management").
- Jannelli et al. (2026)
  V. Jannelli, S. Schoepf, M. Bickel, T. Netland, and A. Brintrup
  Agentic llms in the supply chain: towards autonomous multi-agent consensus-seeking.
  International Journal of Production Research, pp. 1–31.
  Cited by: [Appendix A](https://arxiv.org/html/2605.17036v4#A1.SS0.SSS0.Px1.p2.1 "Multi-Agent Collaboration ‣ Appendix A Additional Related Works ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management").
- Julka et al. (2002)
  N. Julka, R. Srinivasan, and I. A. Karimi
  Agent-based supply chain management–1: framework.
  Computers & Chemical Engineering 26 (12), pp. 1755–1769.
  External Links: [Document](https://dx.doi.org/10.1016/S0098-1354%2802%2900150-3)
  Cited by: [Appendix A](https://arxiv.org/html/2605.17036v4#A1.SS0.SSS0.Px1.p1.1 "Multi-Agent Collaboration ‣ Appendix A Additional Related Works ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management").
- Kim et al. (2024)
  B. Kim, J. G. Kim, and S. Lee
  A multi-agent reinforcement learning model for inventory transshipments under supply chain disruption.
  IISE Transactions 56 (7), pp. 715–728.
  External Links: [Document](https://dx.doi.org/10.1080/24725854.2023.2217248)
  Cited by: [Appendix A](https://arxiv.org/html/2605.17036v4#A1.SS0.SSS0.Px1.p2.1 "Multi-Agent Collaboration ‣ Appendix A Additional Related Works ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management").
- Kotecha and del Rio Chanona (2025)
  N. Kotecha and A. del Rio Chanona
  Leveraging graph neural networks and multi-agent reinforcement learning for inventory control in supply chains.
  Computers & Chemical Engineering 199, pp. 109111.
  Cited by: [Appendix A](https://arxiv.org/html/2605.17036v4#A1.SS0.SSS0.Px1.p2.1 "Multi-Agent Collaboration ‣ Appendix A Additional Related Works ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management").
- Lee et al. (1997a)
  H. L. Lee, V. Padmanabhan, and S. Whang
  Information distortion in a supply chain: the bullwhip effect.
  Management science 43 (4), pp. 546–558.
  Cited by: [§2.1](https://arxiv.org/html/2605.17036v4#S2.SS1.p3.1 "2.1 The Beer Game: A Timeless Lesson in Supply Chain Dynamics ‣ 2 Setup and Related Work ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management").
- Lee et al. (1997b)
  H. L. Lee, V. Padmanabhan, and S. Whang
  The bullwhip effect in supply chains.
  Sloan Management Review 38 (3), pp. 93–102.
  Cited by: [Appendix A](https://arxiv.org/html/2605.17036v4#A1.SS0.SSS0.Px2.p1.1 "Sources of Bullwhip Effect ‣ Appendix A Additional Related Works ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management"),
  [§2.1](https://arxiv.org/html/2605.17036v4#S2.SS1.p3.1 "2.1 The Beer Game: A Timeless Lesson in Supply Chain Dynamics ‣ 2 Setup and Related Work ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management").
- Long et al. (2025a)
  C. Long, D. Simchi-Levi, A. P. Calmon, and F. P. Calmon
  When supply chains become autonomous.
  Harvard Business Review. Online article.
  Cited by: [§2.2](https://arxiv.org/html/2605.17036v4#S2.SS2.p3.1 "2.2 GenAI in Supply Chains and the Beer Game ‣ 2 Setup and Related Work ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management"),
  [Acknowledgements](https://arxiv.org/html/2605.17036v4#Sx1.p1.1 "Acknowledgements ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management"),
  [footnote 1](https://arxiv.org/html/2605.17036v4#footnote1 "In 1 Introduction 1 footnote 1 footnote Footnote footnotes Footnotes 1 footnote 1 The paper expands and provides more technical details on the concepts and framework described in a recent article, Long, C., Simchi-Levi, D., Calmon, A. P., & Calmon, F. P. When supply chains become autonomous. Harvard Business Review ( , ). ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management").
- Long et al. (2025b)
  C. Long, D. Simchi-Levi, A. P. Calmon, and F. P. Calmon
  The genai beer game.
  Note: [Online]. Available: <https://infotheorylab.github.io/beer-game/>Accessed: December 15, 2025
  Cited by: [§2.2](https://arxiv.org/html/2605.17036v4#S2.SS2.p3.1 "2.2 GenAI in Supply Chains and the Beer Game ‣ 2 Setup and Related Work ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management").
- Machuca and Barajas (2004)
  J. A. Machuca and R. P. Barajas
  The impact of electronic data interchange on reducing bullwhip effect and supply chain inventory costs.
  Transportation Research Part E: Logistics and Transportation Review 40 (3), pp. 209–228.
  Cited by: [§1](https://arxiv.org/html/2605.17036v4#S1.p2.1 "1 Introduction 1 footnote 1 footnote Footnote footnotes Footnotes 1 footnote 1 The paper expands and provides more technical details on the concepts and framework described in a recent article, Long, C., Simchi-Levi, D., Calmon, A. P., & Calmon, F. P. When supply chains become autonomous. Harvard Business Review ( , ). ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management").
- Menache et al. (2025)
  I. Menache, J. Pathuri, D. Simchi-Levi, and T. Linton
  How generative ai improves supply chain management.
  Harvard Business Review 104 (1-2), pp. 86–95.
  Cited by: [§1](https://arxiv.org/html/2605.17036v4#S1.p1.1 "1 Introduction 1 footnote 1 footnote Footnote footnotes Footnotes 1 footnote 1 The paper expands and provides more technical details on the concepts and framework described in a recent article, Long, C., Simchi-Levi, D., Calmon, A. P., & Calmon, F. P. When supply chains become autonomous. Harvard Business Review ( , ). ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management"),
  [§2.2](https://arxiv.org/html/2605.17036v4#S2.SS2.p1.1 "2.2 GenAI in Supply Chains and the Beer Game ‣ 2 Setup and Related Work ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management").
- Moritz et al. (2022)
  B. B. Moritz, A. Narayanan, and C. Parker
  Unraveling behavioral ordering: relative costs and the bullwhip effect.
  Manufacturing & Service Operations Management 24 (3), pp. 1733–1750.
  Cited by: [Appendix A](https://arxiv.org/html/2605.17036v4#A1.SS0.SSS0.Px2.p1.1 "Sources of Bullwhip Effect ‣ Appendix A Additional Related Works ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management").
- Nissen (2001)
  M. E. Nissen
  Agent-based supply chain integration.
  Information Technology and Management 2 (3), pp. 289–312.
  Cited by: [Appendix A](https://arxiv.org/html/2605.17036v4#A1.SS0.SSS0.Px1.p1.1 "Multi-Agent Collaboration ‣ Appendix A Additional Related Works ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management").
- Qi et al. (2026)
  Z. Qi, H. Su, A. Qu, C. Wang, Y. Yao, H. Zheng, K. Chattopadhyay, G. Xu, Z. Wang, W. Ye, et al.
  Economy of minds: emerging multi-agent intelligence with economic interactions.
  arXiv preprint arXiv:2606.02859.
  Cited by: [§2.2](https://arxiv.org/html/2605.17036v4#S2.SS2.p1.1 "2.2 GenAI in Supply Chains and the Beer Game ‣ 2 Setup and Related Work ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management").
- Quan and Liu (2024)
  Y. Quan and Z. Liu
  Invagent: a large language model based multi-agent system for inventory management in supply chains.
  arXiv preprint arXiv:2407.11384.
  Cited by: [Appendix A](https://arxiv.org/html/2605.17036v4#A1.SS0.SSS0.Px1.p2.1 "Multi-Agent Collaboration ‣ Appendix A Additional Related Works ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management"),
  [§2.2](https://arxiv.org/html/2605.17036v4#S2.SS2.p1.1 "2.2 GenAI in Supply Chains and the Beer Game ‣ 2 Setup and Related Work ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management").
- Rockafellar and Uryasev (2000)
  R. T. Rockafellar and S. Uryasev
  Optimization of conditional value-at-risk.
  Journal of Risk 2 (3), pp. 21–41.
  External Links: [Document](https://dx.doi.org/10.21314/JOR.2000.038)
  Cited by: [§2.5](https://arxiv.org/html/2605.17036v4#S2.SS5.p2.1 "2.5 Decision Reliability and Tail Risk in Autonomous Supply Chains ‣ 2 Setup and Related Work ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management").
- Scarf (1958)
  H. E. Scarf
  A min-max solution of an inventory problem.
  In Studies in the Mathematical Theory of Inventory and Production, K. J. Arrow, S. Karlin, and H. E. Scarf (Eds.),
  pp. 201–209.
  Cited by: [§2.5](https://arxiv.org/html/2605.17036v4#S2.SS5.p2.1 "2.5 Decision Reliability and Tail Risk in Autonomous Supply Chains ‣ 2 Setup and Related Work ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management").
- Schulman et al. (2017)
  J. Schulman, F. Wolski, P. Dhariwal, A. Radford, and O. Klimov
  Proximal policy optimization algorithms.
  arXiv preprint arXiv:1707.06347.
  Cited by: [§2.4](https://arxiv.org/html/2605.17036v4#S2.SS4.p1.1 "2.4 Reinforcement Learning Post-training for Reliable Agents ‣ 2 Setup and Related Work ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management").
- Shao et al. (2024)
  Z. Shao, P. Wang, Q. Zhu, R. Xu, J. Song, X. Bi, H. Zhang, M. Zhang, Y. K. Li, Y. Wu, and D. Guo
  DeepSeekMath: pushing the limits of mathematical reasoning in open language models.
  arXiv preprint arXiv:2402.03300.
  Cited by: [§2.4](https://arxiv.org/html/2605.17036v4#S2.SS4.p1.1 "2.4 Reinforcement Learning Post-training for Reliable Agents ‣ 2 Setup and Related Work ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management").
- Silver et al. (1998)
  E. A. Silver, D. F. Pyke, and R. Peterson
  Inventory management and production planning and scheduling.
  3 edition, John Wiley & Sons, New York.
  Cited by: [§C.1](https://arxiv.org/html/2605.17036v4#A3.SS1.SSS0.Px1.p2.2 "Demand prediction and order-up-to-level. ‣ C.1 A General Operational Inventory Model ‣ Appendix C A Theoretical Model for Agent Bullwhip ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management").
- Simchi-Levi et al. (2025a)
  D. Simchi-Levi, K. Mellou, I. Menache, and J. Pathuri
  Large language models for supply chain decisions.
  arXiv preprint arXiv:2507.21502.
  Cited by: [§2.2](https://arxiv.org/html/2605.17036v4#S2.SS2.p1.1 "2.2 GenAI in Supply Chains and the Beer Game ‣ 2 Setup and Related Work ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management").
- Simchi-Levi et al. (2023)
  D. Simchi-Levi, Z. Zheng, and F. Zhu
  Regret distribution in stochastic bandits: optimal trade-off between expectation and tail risk.
  arXiv preprint arXiv:2304.04341.
  Cited by: [§2.5](https://arxiv.org/html/2605.17036v4#S2.SS5.p1.1 "2.5 Decision Reliability and Tail Risk in Autonomous Supply Chains ‣ 2 Setup and Related Work ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management").
- Simchi-Levi et al. (2025b)
  D. Simchi-Levi, Z. Zheng, and F. Zhu
  A simple and optimal policy design with safety against heavy-tailed risk for stochastic bandits.
  Management Science 71 (7), pp. 6298–6318.
  Cited by: [§2.5](https://arxiv.org/html/2605.17036v4#S2.SS5.p1.1 "2.5 Decision Reliability and Tail Risk in Autonomous Supply Chains ‣ 2 Setup and Related Work ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management").
- Snell et al. (2024)
  C. Snell, J. Lee, K. Xu, and A. Kumar
  Scaling llm test-time compute optimally can be more effective than scaling model parameters.
  arXiv preprint arXiv:2408.03314.
  Cited by: [§2.3](https://arxiv.org/html/2605.17036v4#S2.SS3.p1.1 "2.3 Scaling Test-Time Compute ‣ 2 Setup and Related Work ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management").
- Sterman (1989)
  J. D. Sterman
  Modeling managerial behavior: misperceptions of feedback in a dynamic decision making experiment.
  Management Science 35 (3), pp. 321–339.
  External Links: [Document](https://dx.doi.org/10.1287/mnsc.35.3.321)
  Cited by: [§2.1](https://arxiv.org/html/2605.17036v4#S2.SS1.p1.1 "2.1 The Beer Game: A Timeless Lesson in Supply Chain Dynamics ‣ 2 Setup and Related Work ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management").
- Swaminathan et al. (1998)
  J. M. Swaminathan, S. F. Smith, and N. M. Sadeh
  Modeling supply chain dynamics: a multiagent approach.
  Decision Sciences 29 (3), pp. 607–632.
  External Links: [Document](https://dx.doi.org/10.1111/j.1540-5915.1998.tb01356.x)
  Cited by: [Appendix A](https://arxiv.org/html/2605.17036v4#A1.SS0.SSS0.Px1.p1.1 "Multi-Agent Collaboration ‣ Appendix A Additional Related Works ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management").
- Wang et al. (2022)
  X. Wang, J. Wei, D. Schuurmans, Q. Le, E. Chi, S. Narang, A. Chowdhery, and D. Zhou
  Self-consistency improves chain of thought reasoning in language models.
  arXiv preprint arXiv:2203.11171.
  Cited by: [§2.3](https://arxiv.org/html/2605.17036v4#S2.SS3.p1.1 "2.3 Scaling Test-Time Compute ‣ 2 Setup and Related Work ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management"),
  [§4.3](https://arxiv.org/html/2605.17036v4#S4.SS3.p1.1 "4.3 Repeated Sampling Fails to Improve Reliability ‣ 4 Reliability Issues of Autonomous AI Agents: the Agent Bullwhip Effect ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management").
- Warburton (2004)
  R. D. Warburton
  An analytical investigation of the bullwhip effect.
  Production and operations management 13 (2), pp. 150–160.
  Cited by: [Appendix A](https://arxiv.org/html/2605.17036v4#A1.SS0.SSS0.Px2.p1.1 "Sources of Bullwhip Effect ‣ Appendix A Additional Related Works ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management").
- Wu et al. (2024)
  Y. Wu, Z. Sun, S. Li, S. Welleck, and Y. Yang
  Inference scaling laws: an empirical analysis of compute-optimal inference for problem-solving with language models.
  arXiv preprint arXiv:2408.00724.
  Cited by: [§2.3](https://arxiv.org/html/2605.17036v4#S2.SS3.p1.1 "2.3 Scaling Test-Time Compute ‣ 2 Setup and Related Work ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management").
- Xu et al. (2024a)
  L. Xu, S. Almahri, S. Mak, and A. Brintrup
  Multi-agent systems and foundation models enable autonomous supply chains: opportunities and challenges.
  IFAC-PapersOnLine 58 (19), pp. 795–800.
  Cited by: [§2.2](https://arxiv.org/html/2605.17036v4#S2.SS2.p1.1 "2.2 GenAI in Supply Chains and the Beer Game ‣ 2 Setup and Related Work ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management").
- Xu et al. (2024b)
  L. Xu, S. Mak, M. Minaricova, and A. Brintrup
  On implementing autonomous supply chains: a multi-agent system approach.
  Computers in Industry 161, pp. 104120.
  Cited by: [Appendix A](https://arxiv.org/html/2605.17036v4#A1.SS0.SSS0.Px1.p2.1 "Multi-Agent Collaboration ‣ Appendix A Additional Related Works ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management"),
  [§2.2](https://arxiv.org/html/2605.17036v4#S2.SS2.p1.1 "2.2 GenAI in Supply Chains and the Beer Game ‣ 2 Setup and Related Work ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management").
- Zheng et al. (2025)
  G. Zheng, S. Almahri, L. Xu, M. Minaricova, and A. Brintrup
  LLMs in supply chain management: opportunities and a case study.
  IFAC-PapersOnLine 59 (10), pp. 2951–2956.
  Cited by: [§2.2](https://arxiv.org/html/2605.17036v4#S2.SS2.p1.1 "2.2 GenAI in Supply Chains and the Beer Game ‣ 2 Setup and Related Work ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management").
- Zhu and Simchi-Levi (2026)
  F. Zhu and D. Simchi-Levi
  Adaptive variance inflation in thompson sampling: efficiency, safety, robustness, and beyond.
  Advances in Neural Information Processing Systems 38, pp. 50466–50484.
  Cited by: [§2.5](https://arxiv.org/html/2605.17036v4#S2.SS5.p1.1 "2.5 Decision Reliability and Tail Risk in Autonomous Supply Chains ‣ 2 Setup and Related Work ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management").

## Appendix A Additional Related Works

##### Multi-Agent Collaboration

Multi-agent collaboration has long been studied in supply-chain management. Early agent-based work treated supply chains as networks of autonomous but interdependent entities and focused on modeling, coordination, and decision support. Swaminathan et al. [[Swaminathan et al., 1998](https://arxiv.org/html/2605.17036v4#bib.bib22)] develop a reusable multi-agent framework in which supply-chain models are built from agent types, control elements, and interaction protocols. Fox et al. [[Fox et al., 2000](https://arxiv.org/html/2605.17036v4#bib.bib23)] propose an agent-oriented architecture for tactical and operational supply-chain management, emphasizing autonomous software agents that coordinate through communication protocols. Nissen et al. [[Nissen, 2001](https://arxiv.org/html/2605.17036v4#bib.bib24)] study intelligent agents for supply-chain integration, focusing on agents that conduct business on behalf of buyers, vendors, and users. Julka et al. [[Julka et al., 2002](https://arxiv.org/html/2605.17036v4#bib.bib25)] apply an agent-based decision-support framework to refinery supply-chain management, where coordination across departments and dynamic data sources is central.

More recent work extends this tradition using learning-based and foundation-model approaches. Multi-agent reinforcement-learning studies train decentralized or partially decentralized policies for inventory control and transshipment, often using centralized training to improve coordination while preserving decentralized execution [[Kotecha and del Rio Chanona, 2025](https://arxiv.org/html/2605.17036v4#bib.bib30), [Kim et al., 2024](https://arxiv.org/html/2605.17036v4#bib.bib26)]. A parallel stream explores LLM-based agents for supply-chain tasks: Quan et al. [[Quan and Liu, 2024](https://arxiv.org/html/2605.17036v4#bib.bib27)] introduce InvAgent, a zero-shot LLM-based multi-agent system for inventory management; Jannelli et al. [[Jannelli et al., 2026](https://arxiv.org/html/2605.17036v4#bib.bib18)] study autonomous LLM agents for consensus-seeking in supply-chain coordination; and Xu et al. [[Xu et al., 2024b](https://arxiv.org/html/2605.17036v4#bib.bib29)] examine autonomous supply chains through a multi-agent systems approach. Our work builds on these streams but shifts the focus from modeling architectures, average performance, or task automation to reliability. We study autonomous LLM agents whose decisions interact dynamically through inventories, backlogs, orders, and shipment pipelines, and show that these interactions can amplify decision instability across repeated runs even when demand paths and operational states are held fixed.

##### Sources of Bullwhip Effect

For completeness, we briefly review the established literature on the sources of the bullwhip effect, which has been the focus of extensive prior research. Although these mechanisms are not the focus of this paper, they provide useful background on the factors that can give rise to the bullwhip effect in supply chains managed by human decision-makers.
The literature identifies both operational and behavioral mechanisms underlying the bullwhip effect. From an operational perspective, demand-signal processing, order batching, price fluctuations, and rationing incentives can amplify order variability as demand information propagates upstream[Lee et al. [1997b]](https://arxiv.org/html/2605.17036v4#bib.bib21).
Forecasting and replenishment policies can further amplify variability, with the magnitude of the effect depending on demand dynamics, lead times, and the structure of the ordering policy[[Chen and Lee, 2009](https://arxiv.org/html/2605.17036v4#bib.bib8), [Warburton, 2004](https://arxiv.org/html/2605.17036v4#bib.bib11)].
Empirical evidence further shows that the prevalence and magnitude of the bullwhip effect vary across operating environments[[Cachon et al., 2007](https://arxiv.org/html/2605.17036v4#bib.bib9)]. Beyond these structural mechanisms, experimental studies identify systematic behavioral sources of amplification. [Croson and Donohue [2006]](https://arxiv.org/html/2605.17036v4#bib.bib13) show that bullwhip persists even when conventional operational causes are removed and attribute part of the effect to decision makers’ underweighting of the supply line. [Croson et al. [2014]](https://arxiv.org/html/2605.17036v4#bib.bib10) show that coordination risk, the uncertainty about other supply-chain members’ decisions, can increase order oscillation and amplification. [Moritz et al. [2022]](https://arxiv.org/html/2605.17036v4#bib.bib12) further distinguish between rational and behavioral ordering and examine how each contribute to the bullwhip effect.

## Appendix B Additional Information for Section [3](https://arxiv.org/html/2605.17036v4#S3 "3 Inference-time Methods: Lessons Learned Using GenAI as Autonomous Agents without Training ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management")

### B.1 Detailed Experimental Results

The following tables present the underlying numerical data that support the findings
discussed in the main text. Table [3](https://arxiv.org/html/2605.17036v4#A2.T3 "Table 3 ‣ Choice of Time Horizon for Different Analyses ‣ B.1 Detailed Experimental Results ‣ Appendix B Additional Information for Section ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management") reports the total supply chain costs recorded across eleven runs of the Beer Game played by
human student teams (4-8 students per team, 100+ students in total) from two academic years in Georgia Tech (April 2025 and April 2024),
together with the average cost of $3,207 for 20-week and $6,739 for 25-week that serves as the human performance
benchmark throughout the study.

##### Choice of Time Horizon for Different Analyses

Because half of the cohorts play a 25-week game and the other half play a 20-week game, we use all cohorts (excluding one anomalous cohort) when comparing average performance across human and AI teams. However, because reliability risks become more pronounced over longer time horizons, we use the 25-week games separately to evaluate the effectiveness of the two reliability intervention frameworks. This longer horizon is also more representative of real-world supply chain decision-making, which typically extends well beyond the time horizon considered in our stylized experimental setting. Although the available human data for the 25-week games are limited, we include these observations as a reference point.

Table [4](https://arxiv.org/html/2605.17036v4#A2.T4 "Table 4 ‣ Choice of Time Horizon for Different Analyses ‣ B.1 Detailed Experimental Results ‣ Appendix B Additional Information for Section ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management") summarizes the
aggregate performance of all gen AI configurations tested under the classical Beer Game setting played by students (20-week, 2-2-2 lead times), listing total costs and normalized costs relative to the human benchmark
for each combination of model type and inference-time technique; values below 100 indicate that the agent outperformed the average human team. Table [5](https://arxiv.org/html/2605.17036v4#A2.T5 "Table 5 ‣ Choice of Time Horizon for Different Analyses ‣ B.1 Detailed Experimental Results ‣ Appendix B Additional Information for Section ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management") identifies the specific model comparisons underlying the numerical results reported in the main text, together with the corresponding percentage changes in total supply chain costs and differences in the coefficient of variance.

Table 3: Human Teams: Total Costs per Run. Brackets indicate anomaly that are dropped from the mean calculation.

| Human Teams | Total Costs 20 Weeks | Total Costs 25 Weeks |
| --- | --- | --- |
| 4/6/2025, 50 students | 867.5 | - |
|  | 854.0 | - |
|  | 1091.0 | - |
|  | 8784.5 | - |
|  | (208920) | - |
| 4/3/2024, 60 students | 1049.5 | 2201 |
|  | 695.5 | 1582.5 |
|  | 4732.5 | 14755 |
|  | 7182.5 | 11840.5 |
|  | 6258.5 | (79878.5) |
|  | 2024.5 | 3317.5 |
|  | 1735.0 | 3738.5 |
| Average Costs | 3206.82 | 6739.3 |


Table 4: Supply Chain Performance: 20-Week Beer Game

Scenario
Model/Human
Total Costs
Normalized Costs


Human
Human Teams
3207
100.00

Reasoning Model
GPT-5 mini default
2142
66.79

Reasoning + Orchestrator
GPT-5 mini demand
1765
55.04

Reasoning + Policy
GPT-5 mini budget
1608
50.14

Reasoning + Prompt
GPT-5 mini prompt
2620
81.70

Reasoning + Orchestrator + Policy
GPT-5 mini demand+budget
1596
49.77

Reasoning Model
Llama 4 Maverick 17B default
2080
64.86

Reasoning + Orchestrator
Llama 4 Maverick 17B demand
1559
48.61

Reasoning + Policy
Llama 4 Maverick 17B budget
1235
38.51

Reasoning + Prompt
Llama 4 Maverick 17B prompt
1758
54.82

Reasoning + Orchestrator + Policy
Llama 4 Maverick 17B demand+budget
1063
33.15

Reasoning Model
Qwen2.5 3B Instruct default
728
22.70

Reasoning + Orchestrator
Qwen2.5 3B Instruct demand
678
21.14

Reasoning + Policy
Qwen2.5 3B Instruct budget
708
22.07

Reasoning + Prompt
Qwen2.5 3B Instruct prompt
1236
38.54

Reasoning + Orchestrator + Policy
Qwen2.5 3B Instruct demand+budget
652
20.33

Non-Reasoning Model
GPT-4o mini default
7093
221.17

Non-Reasoning + Orchestrator
GPT-4o mini demand+volatility
2171
67.70

Non-Reasoning + Policy
GPT-4o mini budget
4351
135.67

Non-Reasoning + Prompt
GPT-4o mini prompt
3956
123.36

Non-Reasoning + Orchestrator
GPT-4o mini demand
4383
136.67

Non-Reasoning Model
GPT-4.1 mini default
7093
221.17

Non-Reasoning + Prompt
GPT-4.1 mini prompt
4734
147.61

Non-Reasoning Model
Llama 3.3 70B default
11743
366.17


Table 5: Supply Chain Analysis Summary

Analysis
Comparison
Numbers
Note


Human vs AI + Orchestration
Llama 4 Maverick 17B demand+budget vs Human Teams
$-67\%$
Percentage Change in Total Costs

Stability in Runs
Min: GPT-4o mini default; Max: Llama 4 Maverick 17B default
13%, 46%
Coefficient of Variation

Reasoning vs Non-Reasoning
GPT-4o mini default vs GPT-5 mini default
$-70\%$
Percentage Change in Total Costs


Llama 3.3 70B default vs Llama 4 Maverick 17B default
$-82\%$
Percentage Change in Total Costs

Effect of Guardrail
GPT-5 mini default vs GPT-5 mini budget
$-25\%$
Percentage Change in Total Costs


GPT-4o mini default vs GPT-4o mini budget
$-39\%$
Percentage Change in Total Costs


Llama 4 Maverick 17B default vs Llama 4 Maverick 17B budget
$-41\%$
Percentage Change in Total Costs

Improvement in Stability
Llama 4 Maverick 17B default vs Llama 4 Maverick 17B budget
46%, 37%
Coefficient of Variation

Orchestration: Demand Sharing
GPT-5 mini default vs GPT-5 mini demand
$-18\%$
Percentage Change in Total Costs


Llama 4 Maverick 17B default vs Llama 4 Maverick 17B demand
$-25\%$
Percentage Change in Total Costs


GPT-4o mini default vs GPT-4o mini demand
$-38\%$
Percentage Change in Total Costs

Orchestration: Demand Sharing + Analysis
GPT-4o mini default vs GPT-4o mini demand+volatility
$-69\%$
Percentage Change in Total Costs

Effect of Prompts
GPT-4o mini default vs GPT-4o mini prompt
$-44\%$
Percentage Change in Total Costs


GPT-4.1 mini default vs GPT-4.1 mini prompt
$-33\%$
Percentage Change in Total Costs

### B.2 LLM Prompts

[⬇](data:text/plain;base64,WW91IGFyZSB0aGUgUmV0YWlsZXIgaW4gdGhlIEJlZXIgRGlzdHJpYnV0aW9uIEdhbWUuCllvdXIgb2JqZWN0aXZlIGlzIHRvIG1pbmltaXplIHlvdXIgdG90YWwgc3VwcGx5IGNoYWluIGNvc3RzIGJ5IG1hbmFnaW5nIHlvdXIgYmVlciBpbnZlbnRvcnkgZWZmaWNpZW50bHkuIFlvdSByZWNlaXZlIG9yZGVycyBmcm9tIGN1c3RvbWVycyBhbmQgc3RvY2sgdXAgeW91ciBpbnZlbnRvcnkgZnJvbSB0aGUgV2hvbGVzYWxlci4KWW91ciBvbmx5IHRhc2sgaXMgdG8gZGVjaWRlLCBiYXNlZCBvbiB5b3VyIGludmVudG9yeSBzdGF0dXMgYW5kIGluY29taW5nIG9yZGVyIChzaG93biBiZWxvdyksIGhvdyBtYW55IG5ldyBjYXNlcyBvZiBiZWVyIHlvdSB3YW50IHRvIGJ1eSB0aGlzIHdlZWsuCgpIZXJlIGFyZSB0aGUgY29zdHMgeW91IGZhY2U6Ci0gSG9sZGluZyBDb3N0OiAwLjUwIHBlciBjYXNlIHBlciB3ZWVrLgotIEJhY2tvcmRlciBDb3N0OiAxLjAwIHBlciBjYXNlIHBlciB3ZWVrLgotIE9yZGVyIExlYWQgVGltZTogMSB3ZWVrICh5b3VyIG9yZGVyIHJlYWNoZXMgdGhlIFdob2xlc2FsZXIgbmV4dCB3ZWVrKS4KLSBTaGlwcGluZyBMZWFkIFRpbWU6IDIgd2Vla3MgKHlvdXIgZGVsaXZlcnkgZnJvbSB0aGUgV2hvbGVzYWxlciBhcnJpdmVzIDIgd2Vla3MgYWZ0ZXIgdGhleSBzaGlwKS4KCioqWW91ciBDdXJyZW50IFNpdHVhdGlvbiAoV2VlayB7d2Vla30pOioqCi0gQ3VycmVudCBJbnZlbnRvcnk6IHtjdXJyZW50X2ludmVudG9yeX0gY2FzZXMKLSBDdXJyZW50IEJhY2tsb2c6IHtjdXJyZW50X2JhY2tsb2d9IGNhc2VzCi0gSW5jb21pbmcgT3JkZXIgZnJvbSBEb3duc3RyZWFtIChDdXN0b21lciBEZW1hbmQpOiB7aW5jb21pbmdfb3JkZXJfdGhpc193ZWVrfSBjYXNlcwotIExhc3QgT3JkZXIgWW91IFBsYWNlZDoge2xhc3Rfb3JkZXJfcGxhY2VkfSBjYXNlcwotIExhc3QgRGVsaXZlcnkgWW91IFJlY2VpdmVkOiB7bGFzdF9kZWxpdmVyeV9yZWNlaXZlZH0gY2FzZXMKe3BpcGVsaW5lX2luZm99e2J1ZGdldF9pbmZvfXtmaXhlZF9jb3N0X2luZm99e29yZGVyX2ZvcmVjYXN0X2luZm99CntmZWVkYmFja19pbmZvfQoKCllvdXIgVGFzazoKRGVjaWRlIGhvdyBtYW55IGNhc2VzIG9mIGJlZXIgdG8gb3JkZXIgZnJvbSB5b3VyIHVwc3RyZWFtIHRoaXMgd2VlayBiYXNlZCBvbiB5b3VyIGN1cnJlbnQgc2l0dWF0aW9uLgoKU3RhcnQgeW91ciByZXNwb25zZSB3aXRoIGEgSlNPTiBvYmplY3QgKipvbiBpdHMgb3duIGxpbmUqKiBpbiB0aGUgZm9sbG93aW5nIGV4YWN0IGZvcm1hdDoKeyJvcmRlcl9xdWFudGl0eSI6IDxudW1iZXJfb2ZfY2FzZXM+fQoKSW1wb3J0YW50OgotIFJlcGxhY2UgYDxudW1iZXJfb2ZfY2FzZXM+YCB3aXRoIHlvdXIgYWN0dWFsIG51bWVyaWMgZGVjaXNpb24uCi0gRG8gbm90IGFkZCBhbnkgdGV4dCwgbm90ZXMsIG9yIHB1bmN0dWF0aW9uIGFmdGVyIHRoZSBKU09OLgotIFRoaXMgd2lsbCBiZSBwYXJzZWQgYnkgYSBwcm9ncmFtLCBzbyB0aGUgZm9ybWF0IG11c3QgYmUgdmFsaWQgYW5kIGV4YWN0LgoKRXhhbXBsZSAoeW91ciByZXNwb25zZSBzaG91bGQgZW5kIGxpa2UgdGhpcyk6Cnsib3JkZXJfcXVhbnRpdHkiOiA1fQoK)

You are the Retailer in the Beer Distribution Game.

Your objective is to minimize your total supply chain costs by managing your beer inventory efficiently. You receive orders from customers and stock up your inventory from the Wholesaler.

Your only task is to decide, based on your inventory status and incoming order (shown below), how many new cases of beer you want to buy this week.

Here are the costs you face:

- Holding Cost: 0.50 per case per week.

- Backorder Cost: 1.00 per case per week.

- Order Lead Time: 1 week (your order reaches the Wholesaler next week).

- Shipping Lead Time: 2 weeks (your delivery from the Wholesaler arrives 2 weeks after they ship).

\*\*Your Current Situation (Week {week}):\*\*

- Current Inventory: {current\_inventory} cases

- Current Backlog: {current\_backlog} cases

- Incoming Order from Downstream (Customer Demand): {incoming\_order\_this\_week} cases

- Last Order You Placed: {last\_order\_placed} cases

- Last Delivery You Received: {last\_delivery\_received} cases

{pipeline\_info}{budget\_info}{fixed\_cost\_info}{order\_forecast\_info}

{feedback\_info}

Your Task:

Decide how many cases of beer to order from your upstream this week based on your current situation.

Start your response with a JSON object \*\*on its own line\*\* in the following exact format:

{"order\_quantity": <number\_of\_cases>}

Important:

- Replace ‘<number\_of\_cases>‘ with your actual numeric decision.

- Do not add any text, notes, or punctuation after the JSON.

- This will be parsed by a program, so the format must be valid and exact.

Example (your response should end like this):

{"order\_quantity": 5}

## Appendix C A Theoretical Model for Agent Bullwhip

The section proceeds in three steps. First, we introduce a general operational model that includes on-hand inventory, backlog, outstanding inventory, shipment constraints, nonnegative ordering, and decision shocks. Second, we specialize this model to a linear benchmark system that admits exact transfer-function analysis for both demand and decision shocks. Third, within the linear benchmark system, we analyze agent bullwhip by decomposing order variability into demand-driven and decision-driven components.

### C.1 A General Operational Inventory Model

Each tier $k=1,\dots,n$ operates under an order-up-to policy with deterministic lead time $\ell\_{k}\geq 0$. For each tier $k$, define the following state variables:

- •

  $OH\_{k,t}$: on-hand inventory at the beginning of period $t$,
- •

  $B\_{k,t}$: backlog owed by tier $k$ to tier $k-1$,
- •

  $O\_{k,t}$: outstanding inventory, i.e., orders already placed by tier $k$ but not yet received,
- •

  $IP\_{k,t}$: inventory position.

The inventory position is defined as

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$IP\_{k,t}=OH\_{k,t}+O\_{k,t}-B\_{k,t},$$ |  | (4) |

where inventory position counts physical inventory currently on hand, plus outstanding inventory, minus outstanding backlog.

##### Demand prediction and order-up-to-level.

Each tier forms an exponentially smoothed forecast of downstream orders observed through period $t-1$, following the timing convention in [[Chen et al., 2000b](https://arxiv.org/html/2605.17036v4#bib.bib1)]:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\hat{q}\_{k,t}=\lambda\_{k}q\_{k-1,t-1}+(1-\lambda\_{k})\hat{q}\_{k,t-1},\qquad\lambda\_{k}\in(0,1].$$ |  | (5) |

The corresponding order-up-to target is

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$S\_{k,t}=\theta\_{k}\hat{q}\_{k,t}+\epsilon\_{k,t},$$ |  | (6) |

where $\epsilon\_{k,t}$ denotes the tier’s decision shock: a safety-stock perturbation, an idiosyncratic residual in the agent policy, or a run-specific interpretation of the same state. $\theta\_{k}$ is a multiplier that controls the inventory target level. Under periodic review, the order-up-to level is typically set to cover expected demand over the protection interval, i.e., the replenishment lead time plus the review period. Hence, when the review period is one period and $\hat{q}\_{k,t}$ is a one-period demand forecast, a common choice is $\theta\_{k}=\ell\_{k}+1$ [[Silver et al., 1998](https://arxiv.org/html/2605.17036v4#bib.bib2), [Chen et al., 2000b](https://arxiv.org/html/2605.17036v4#bib.bib1)].

Thus, the order placed by tier $k$ is given by:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$q\_{k,t}=\left[S\_{k,t}-IP\_{k,t}\right]^{+},$$ |  | (7) |

where $[x]^{+}:=\max\{x,0\}$. The positive-part operator captures the practical constraint that order quantities cannot be negative.

This timing convention means tier $k$ places its period-$t$ order using information observed through period $t-1$. The current downstream order $q\_{k-1,t}$ then enters the inventory-position update after the period-$t$ order is placed. Under this convention, the exact transfer function contains a leading one-period delay. Removing that pure delay gives the classical exponential-smoothing bullwhip filter used for variance-gain calculations, because the lag operator has unit modulus in the frequency domain.

##### System dynamics.

Let $r\_{k,t}$ denote inbound receipts to tier $k$, and let $s\_{k,t}$ denote shipments from tier $k$ to tier $k-1$. For $k<n$, receipts at tier $k$ are delayed shipments from tier $k+1$: $r\_{k,t}=s\_{k+1,t-\ell\_{k}}$. For the most upstream tier, we assume access to an outside supplier with unlimited capacity: $r\_{n,t}=q\_{n,t-\ell\_{n}}$.

The effective demand faced by tier $k$ is the sum of current downstream orders and existing backlog:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\Delta\_{k,t}=q\_{k-1,t}+B\_{k,t}.$$ |  | (8) |

Available inventory at tier $k$ is

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$A\_{k,t}=OH\_{k,t}+r\_{k,t}.$$ |  | (9) |

Actual shipments are constrained by available inventory:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$s\_{k,t}=\min\left\{A\_{k,t},\Delta\_{k,t}\right\}.$$ |  | (10) |

The operational state dynamics are therefore

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  | $\displaystyle OH\_{k,t+1}$ | $\displaystyle=OH\_{k,t}+r\_{k,t}-s\_{k,t},$ |  | (11) |
|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  | $\displaystyle B\_{k,t+1}$ | $\displaystyle=B\_{k,t}+q\_{k-1,t}-s\_{k,t},$ |  | (12) |
|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  | $\displaystyle O\_{k,t+1}$ | $\displaystyle=O\_{k,t}+q\_{k,t}-r\_{k,t}.$ |  | (13) |

The following proposition shows that the detailed operational state equations imply a simple inventory-position balance.

###### Proposition 1 (Inventory-position recursion).

Under the operational dynamics above, the inventory position of tier $k$ satisfies

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$IP\_{k,t+1}=IP\_{k,t}+q\_{k,t}-q\_{k-1,t}.$$ |  | (14) |

The nonlinearity in ([7](https://arxiv.org/html/2605.17036v4#A3.E7 "Equation 7 ‣ Demand prediction and order-up-to-level. ‣ C.1 A General Operational Inventory Model ‣ Appendix C A Theoretical Model for Agent Bullwhip ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management")) makes the full model analytically difficult. We therefore next study a linear benchmark model that preserves the central feedback mechanism while allowing closed-form characterization.

### C.2 Linear Benchmark Model

We now introduce a tractable benchmark system.

###### Assumption 1 (Linear benchmark system).

For the analytical benchmark, assume:

1. 1.

   orders are not truncated at zero;
2. 2.

   lead times are deterministic.

Under Assumption [1](https://arxiv.org/html/2605.17036v4#Thmassumption1 "Assumption 1 (Linear benchmark system). ‣ C.2 Linear Benchmark Model ‣ Appendix C A Theoretical Model for Agent Bullwhip ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management"), the ordering rule becomes linear:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$q\_{k,t}=\theta\_{k}\hat{q}\_{k,t}+\epsilon\_{k,t}-IP\_{k,t},$$ |  | (15) |

where the forecast remains as

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\hat{q}\_{k,t}=\lambda\_{k}q\_{k-1,t-1}+(1-\lambda\_{k})\hat{q}\_{k,t-1}.$$ |  | (16) |

Let the customer demand $\{D\_{t}\}\_{t\geq 0}$ be i.i.d. with mean zero and variance $\sigma\_{D}^{2}$, and suppose all initial conditions are deterministic. Since our focus is variance amplification, centering the demand process entails no loss of generality.

The reduced linear benchmark is therefore

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  | $\displaystyle q\_{k,t}$ | $\displaystyle=\theta\_{k}\hat{q}\_{k,t}+\epsilon\_{k,t}-IP\_{k,t},$ |  | (17) |
|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  | $\displaystyle IP\_{k,t+1}$ | $\displaystyle=IP\_{k,t}+q\_{k,t}-q\_{k-1,t},$ |  | (18) |
|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  | $\displaystyle\hat{q}\_{k,t}$ | $\displaystyle=\lambda\_{k}q\_{k-1,t-1}+(1-\lambda\_{k})\hat{q}\_{k,t-1}.$ |  | (19) |

##### The lag operator.

We work with discrete time series indexed by $t\in\mathbb{Z}$, and use the *lag operator* $\mathcal{L}$ to express linear dynamics compactly. For any time series $x\_{t}$, the lag operator shifts the index back by one period,

|  |  |  |
| --- | --- | --- |
|  | $$\mathcal{L}\,x\_{t}=x\_{t-1}.$$ |  |

Powers of $\mathcal{L}$ iterate this shift, $\mathcal{L}^{j}x\_{t}=x\_{t-j}$, and a polynomial (or rational function) of $\mathcal{L}$ acts on $x\_{t}$ in the obvious way; for example, $(1-\mathcal{L})x\_{t}=x\_{t}-x\_{t-1}$. Throughout the analysis, equalities involving $\mathcal{L}$ are understood to hold for all $t$.

##### The order transfer function.

We now derive the transfer representation that maps downstream orders and local decision shocks into the tier-$k$ order.

###### Proposition 2 (One-tier transfer function with decision shocks).

Under the linear benchmark system, the order process at tier $k$ satisfies

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$q\_{k,t+1}=(1+\theta\_{k}\lambda\_{k})q\_{k-1,t}-(\theta\_{k}\lambda\_{k}+1-\lambda\_{k})q\_{k-1,t-1}+(1-\lambda\_{k})q\_{k,t}+\epsilon\_{k,t+1}-(2-\lambda\_{k})\epsilon\_{k,t}+(1-\lambda\_{k})\epsilon\_{k,t-1}.$$ |  | (20) |

Equivalently, in lag-operator form,

|  |  |  |  |
| --- | --- | --- | --- |
|  | $${\bm{q}}\_{k}=H\_{k}(\mathcal{L}){\bm{q}}\_{k-1}+G(\mathcal{L}){\bm{\epsilon}}\_{k},$$ |  | (21) |

where ${\bm{q}}\_{k}=\{q\_{k,t}\}\_{t\geq 0}$, ${\bm{q}}\_{k-1}=\{q\_{k-1,t}\}\_{t\geq 0}$, ${\bm{\epsilon}}\_{k}=\{\epsilon\_{k,t}\}\_{t\geq 0}$, $\mathcal{L}x\_{t}=x\_{t-1}$, and

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$H\_{k}(\mathcal{L})=\frac{(1+\theta\_{k}\lambda\_{k})\mathcal{L}-(\theta\_{k}\lambda\_{k}+1-\lambda\_{k})\mathcal{L}^{2}}{1-(1-\lambda\_{k})\mathcal{L}}=\mathcal{L}\left[1+\frac{\theta\_{k}\lambda\_{k}(1-\mathcal{L})}{1-(1-\lambda\_{k})\mathcal{L}}\right].$$ |  | (22) |

The local decision-shock filter is

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$G(\mathcal{L})=1-\mathcal{L}.$$ |  | (23) |

### C.3 Agent Bullwhip and Decomposition

We now characterize how the order variance changes as orders propagate upstream. In the stationary benchmark, we drop the time subscript from the variance components and write

|  |  |  |
| --- | --- | --- |
|  | $$V^{D}\_{k}:=\operatorname{Var}\_{D}\!\left(\mathbb{E}\_{\epsilon}[q\_{k,t}\mid D]\right),\qquad V^{\epsilon}\_{k}:=\mathbb{E}\_{D}\!\left[\operatorname{Var}\_{\epsilon}(q\_{k,t}\mid D)\right].$$ |  |

To make the two components explicit, define the demand-driven conditional mean

|  |  |  |
| --- | --- | --- |
|  | $$\bar{q}\_{k,t}(D):=\mathbb{E}\_{\epsilon}[q\_{k,t}\mid D],\qquad\bar{\bm{q}}\_{k}=\{\bar{q}\_{k,t}(D)\}\_{t\geq 0},$$ |  |

and the centered decision-driven deviation

|  |  |  |
| --- | --- | --- |
|  | $$x\_{k,t}(D):=q\_{k,t}-\bar{q}\_{k,t}(D),\qquad{\bm{x}}\_{k}=\{x\_{k,t}(D)\}\_{t\geq 0}.$$ |  |

Thus $V^{D}\_{k}=\operatorname{Var}\_{D}(\bar{q}\_{k,t}(D))$, while $V^{\epsilon}\_{k}=\mathbb{E}\_{D}[\operatorname{Var}\_{\epsilon}(x\_{k,t}(D)\mid D)]$.

For ease of explanation, we impose the following assumption:

###### Assumption 2 (Heterogeneous lower bounds and independent inputs).

For each tier $k$, the order-up-to multiplier and smoothing parameter satisfy

|  |  |  |
| --- | --- | --- |
|  | $$\theta\_{k}\geq\theta>0,\qquad\lambda\_{k}\in[\lambda,1],$$ |  |

where $\lambda>0$. The demand process is centered and independent
across time:

|  |  |  |
| --- | --- | --- |
|  | $$\mathbb{E}[D\_{t}]=0,\qquad D\_{t}\perp D\_{s}\quad\text{for }t\neq s,$$ |  |

with

|  |  |  |
| --- | --- | --- |
|  | $$\operatorname{Var}(D\_{t})\geq\sigma\_{D}^{2}>0\qquad\text{for all }t.$$ |  |

The decision shocks are centered, independent across tiers and time, and
independent of demand:

|  |  |  |
| --- | --- | --- |
|  | $$\mathbb{E}[\epsilon\_{k,t}]=0,\qquad\epsilon\_{k,t}\perp\epsilon\_{j,s}\quad\text{unless }(k,t)=(j,s),$$ |  |

and

|  |  |  |
| --- | --- | --- |
|  | $$\operatorname{Var}(\epsilon\_{k,t})\geq\sigma\_{k}^{2}>0\qquad\text{for all }k,t.$$ |  |

#### C.3.1 Demand bullwhip

Taking the conditional expectation of ([21](https://arxiv.org/html/2605.17036v4#A3.E21 "Equation 21 ‣ Proposition 2 (One-tier transfer function with decision shocks). ‣ The order transfer function. ‣ C.2 Linear Benchmark Model ‣ Appendix C A Theoretical Model for Agent Bullwhip ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management")) over $\epsilon$ gives the demand-channel recursion

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\bar{\bm{q}}\_{k}=H\_{k}(\mathcal{L})\bar{\bm{q}}\_{k-1},\qquad\bar{\bm{q}}\_{0}={\bm{D}}.$$ |  | (24) |

Therefore $\bar{\bm{q}}\_{k}=\left(\prod\_{r=1}^{k}H\_{r}(\mathcal{L})\right){\bm{D}}$, with the product ordered from downstream to upstream.

###### Theorem 1 (Demand bullwhip).

Suppose Assumption [2](https://arxiv.org/html/2605.17036v4#Thmassumption2 "Assumption 2 (Heterogeneous lower bounds and independent inputs). ‣ C.3 Agent Bullwhip and Decomposition ‣ Appendix C A Theoretical Model for Agent Bullwhip ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management") holds. In the
linear benchmark, the demand-driven component satisfies

|  |  |  |
| --- | --- | --- |
|  | $$V^{D}\_{k}\geq\sigma\_{D}^{2}\Gamma^{k},$$ |  |

where

|  |  |  |
| --- | --- | --- |
|  | $$\Gamma=1+2\theta\lambda+\frac{2\theta^{2}\lambda^{2}}{2-\lambda}>1.$$ |  |

When $\theta\_{k}=\theta$, $\lambda\_{k}=\lambda$, and demands are i.i.d. with variance $\sigma\_{D}^{2}$, Theorem [1](https://arxiv.org/html/2605.17036v4#Thmtheorem1 "Theorem 1 (Demand bullwhip). ‣ C.3.1 Demand bullwhip ‣ C.3 Agent Bullwhip and Decomposition ‣ Appendix C A Theoretical Model for Agent Bullwhip ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management") gives the common-parameter white-noise benchmark. The theorem shows the demand bullwhip: uncertainty in customer demand is amplified as it moves upstream through the replenishment rule, and the demand-driven component grows at least exponentially in the tier index. This bullwhip effect is consistent with those documented in the literature [[Chen et al., 2000a](https://arxiv.org/html/2605.17036v4#bib.bib42), [Chen et al., 2000b](https://arxiv.org/html/2605.17036v4#bib.bib1)].

#### C.3.2 Decision Bullwhip

We next isolate the decision-bullwhip component. Conditioning on $D=d$ removes demand randomness, so the only remaining variation is the agent’s run-to-run decision uncertainty. The customer tier has no decision shock, so $V^{\epsilon}\_{0}=0$.

Subtracting ([24](https://arxiv.org/html/2605.17036v4#A3.E24 "Equation 24 ‣ C.3.1 Demand bullwhip ‣ C.3 Agent Bullwhip and Decomposition ‣ Appendix C A Theoretical Model for Agent Bullwhip ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management")) from ([21](https://arxiv.org/html/2605.17036v4#A3.E21 "Equation 21 ‣ Proposition 2 (One-tier transfer function with decision shocks). ‣ The order transfer function. ‣ C.2 Linear Benchmark Model ‣ Appendix C A Theoretical Model for Agent Bullwhip ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management")) gives the decision-channel recursion

|  |  |  |  |
| --- | --- | --- | --- |
|  | $${\bm{x}}\_{k}=H\_{k}(\mathcal{L}){\bm{x}}\_{k-1}+G(\mathcal{L}){\bm{\epsilon}}\_{k},\qquad{\bm{x}}\_{0}=0.$$ |  | (25) |

Thus the decision component is built up from local shocks injected through $G$ and then propagated upstream by the tier-specific filters $H\_{k}$.

###### Theorem 2 (Decision bullwhip).

Suppose Assumption [2](https://arxiv.org/html/2605.17036v4#Thmassumption2 "Assumption 2 (Heterogeneous lower bounds and independent inputs). ‣ C.3 Agent Bullwhip and Decomposition ‣ Appendix C A Theoretical Model for Agent Bullwhip ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management") holds. In the
linear benchmark model, the decision-driven component satisfies

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$V^{\epsilon}\_{k}\geq 2\sum\_{j=1}^{k}\sigma\_{j}^{2}\Gamma^{k-j},$$ |  | (26) |

where

|  |  |  |
| --- | --- | --- |
|  | $$\Gamma=1+2\theta\lambda+\frac{2\theta^{2}\lambda^{2}}{2-\lambda}>1.$$ |  |

Theorem [2](https://arxiv.org/html/2605.17036v4#Thmtheorem2 "Theorem 2 (Decision bullwhip). ‣ C.3.2 Decision Bullwhip ‣ C.3 Agent Bullwhip and Decomposition ‣ Appendix C A Theoretical Model for Agent Bullwhip ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management") characterizes the decision bullwhip: even when the demand path is fixed, local agent-level decision noise accumulates across tiers and is amplified by the same upstream feedback loop that drives the classical demand bullwhip. In the common-parameter benchmark with comparable decision-shock variances, the lower bound becomes a geometric accumulation term; for example, if $\sigma\_{j}^{2}=\sigma\_{\epsilon}^{2}$ for all $j$, then

|  |  |  |
| --- | --- | --- |
|  | $$V^{\epsilon}\_{k}\geq 2\sigma\_{\epsilon}^{2}\sum\_{m=0}^{k-1}\Gamma^{m}.$$ |  |

###### Corollary 1 (Exponential growth from any downstream decision noise).

Suppose Assumption [2](https://arxiv.org/html/2605.17036v4#Thmassumption2 "Assumption 2 (Heterogeneous lower bounds and independent inputs). ‣ C.3 Agent Bullwhip and Decomposition ‣ Appendix C A Theoretical Model for Agent Bullwhip ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management") holds. In the
linear benchmark model, if there exists a fixed tier $j\_{0}$ such that

|  |  |  |
| --- | --- | --- |
|  | $$\sigma\_{j\_{0}}^{2}>0,$$ |  |

then, for all $k\geq j\_{0}$,

|  |  |  |
| --- | --- | --- |
|  | $$V^{\epsilon}\_{k}\geq 2\sigma\_{j\_{0}}^{2}\Gamma^{k-j\_{0}}.$$ |  |

Corollary [1](https://arxiv.org/html/2605.17036v4#Thmcorollary1 "Corollary 1 (Exponential growth from any downstream decision noise). ‣ C.3.2 Decision Bullwhip ‣ C.3 Agent Bullwhip and Decomposition ‣ Appendix C A Theoretical Model for Agent Bullwhip ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management") suggests that any nonzero decision noise source at a fixed downstream tier generates exponential variance growth as it propagates upstream.

#### C.3.3 Discussion

##### Accumulation of decision noise.

Our results also imply that decision bullwhip can dominate in regimes where agents are tuned for prediction stability. When the smoothing parameter $\lambda$ is small, the one-tier gain satisfies

|  |  |  |
| --- | --- | --- |
|  | $$\Gamma=1+2\theta\lambda+O(\lambda^{2}),$$ |  |

so demand-driven amplification can be relatively mild over a moderate number of tiers. By contrast, the decision-driven component still accumulates across tiers. If the decision variances are of comparable magnitude, for example
$\sigma\_{j}^{2}\asymp\sigma\_{\epsilon}^{2}$, then

|  |  |  |
| --- | --- | --- |
|  | $$V^{\epsilon}\_{k}\;\gtrsim\;2\sigma\_{\epsilon}^{2}\sum\_{m=0}^{k-1}\Gamma^{m}.$$ |  |

In the small-$\lambda$ regime, this behaves approximately like $2\sigma\_{\epsilon}^{2}k$ over moderate lead times. Thus even when the propagation gain is close to one, residual agent-level randomness can accumulate across the
supply chain and become a major source of order variability.

These results explain why repeated sampling is an incomplete remedy. Majority
voting or best-of-$n$ sampling may reduce the local decision variance
$\sigma\_{j}^{2}$, but unless it drives this variance very close to zero, the remaining
decision noise continues to enter the feedback system and propagate upstream.
The structural source of the agent bullwhip is therefore not merely stochasticity at a single decision point; it is the *interaction* between residual
decision variability, lead times, information delays, and decentralized
replenishment decisions inherent in autonomous supply chains.

##### Fixed-tier accumulation over time.

Our results describe how decision variability grows across tiers. A complementary time-domain implication is that, for a fixed facility, decision unreliability also accumulates over time in the finite-horizon linear benchmark.

###### Proposition 3 (Intertemporal accumulation of decision unreliability).

Fix a demand path $D=d$ and consider the finite-horizon linear benchmark
initialized from deterministic initial conditions, with zero shock pre-history.
Assume the decision shocks are centered, independent across tiers and time,
and satisfy

|  |  |  |
| --- | --- | --- |
|  | $$\operatorname{Var}(\epsilon\_{j,t})=\sigma\_{j}^{2}<\infty.$$ |  |

For a fixed facility $k$, define

|  |  |  |
| --- | --- | --- |
|  | $$W\_{k,t}(d):=\operatorname{Var}(q\_{k,t}\mid D=d).$$ |  |

Then

|  |  |  |
| --- | --- | --- |
|  | $$W\_{k,t+1}(d)\geq W\_{k,t}(d)\qquad\text{for all }t.$$ |  |

## Appendix D Proof of Section [C](https://arxiv.org/html/2605.17036v4#A3 "Appendix C A Theoretical Model for Agent Bullwhip ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management")

###### Proof of Proposition [1](https://arxiv.org/html/2605.17036v4#Thmproposition1 "Proposition 1 (Inventory-position recursion). ‣ System dynamics. ‣ C.1 A General Operational Inventory Model ‣ Appendix C A Theoretical Model for Agent Bullwhip ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management").

By definition,

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$IP\_{k,t}=OH\_{k,t}+O\_{k,t}-B\_{k,t}.$$ |  | (27) |

Therefore,

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$IP\_{k,t+1}=OH\_{k,t+1}+O\_{k,t+1}-B\_{k,t+1}.$$ |  | (28) |

Using the operational state equations,

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  | $\displaystyle OH\_{k,t+1}$ | $\displaystyle=OH\_{k,t}+r\_{k,t}-s\_{k,t},$ |  | (29) |
|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  | $\displaystyle O\_{k,t+1}$ | $\displaystyle=O\_{k,t}+q\_{k,t}-r\_{k,t},$ |  | (30) |
|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  | $\displaystyle B\_{k,t+1}$ | $\displaystyle=B\_{k,t}+q\_{k-1,t}-s\_{k,t}.$ |  | (31) |

Substituting these three equations into the definition of $IP\_{k,t+1}$ gives

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  | $\displaystyle IP\_{k,t+1}$ | $\displaystyle=\left(OH\_{k,t}+r\_{k,t}-s\_{k,t}\right)+\left(O\_{k,t}+q\_{k,t}-r\_{k,t}\right)-\left(B\_{k,t}+q\_{k-1,t}-s\_{k,t}\right).$ |  | (32) |

Expanding terms,

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  | $\displaystyle IP\_{k,t+1}$ | $\displaystyle=OH\_{k,t}+r\_{k,t}-s\_{k,t}+O\_{k,t}+q\_{k,t}-r\_{k,t}-B\_{k,t}-q\_{k-1,t}+s\_{k,t}.$ |  | (33) |

The receipt terms $r\_{k,t}$ cancel, and the shipment terms $s\_{k,t}$ also cancel. Hence

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  | $\displaystyle IP\_{k,t+1}$ | $\displaystyle=OH\_{k,t}+O\_{k,t}-B\_{k,t}+q\_{k,t}-q\_{k-1,t}.$ |  | (34) |

Using the definition of inventory position,

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$OH\_{k,t}+O\_{k,t}-B\_{k,t}=IP\_{k,t}.$$ |  | (35) |

Therefore,

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$IP\_{k,t+1}=IP\_{k,t}+q\_{k,t}-q\_{k-1,t}.$$ |  | (36) |

This proves the claim.
∎

###### Proof of Proposition [2](https://arxiv.org/html/2605.17036v4#Thmproposition2 "Proposition 2 (One-tier transfer function with decision shocks). ‣ The order transfer function. ‣ C.2 Linear Benchmark Model ‣ Appendix C A Theoretical Model for Agent Bullwhip ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management").

Let $a\_{k}:=1-\lambda\_{k}$, $u\_{t}:=q\_{k-1,t}$, $y\_{t}:=q\_{k,t}$, $f\_{t}:=\hat{q}\_{k,t}$, and $\epsilon\_{t}:=\epsilon\_{k,t}$. The linear order rule gives

|  |  |  |
| --- | --- | --- |
|  | $$IP\_{k,t}=\theta\_{k}f\_{t}+\epsilon\_{t}-y\_{t}.$$ |  |

Using the inventory-position recursion,

|  |  |  |
| --- | --- | --- |
|  | $$IP\_{k,t+1}=\theta\_{k}f\_{t}+\epsilon\_{t}-u\_{t}.$$ |  |

Applying the order rule one period forward yields

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$y\_{t+1}=\theta\_{k}(f\_{t+1}-f\_{t})+u\_{t}+\epsilon\_{t+1}-\epsilon\_{t}.$$ |  | (37) |

Since $f\_{t+1}=\lambda\_{k}u\_{t}+a\_{k}f\_{t}$,

|  |  |  |
| --- | --- | --- |
|  | $$f\_{t+1}-f\_{t}=\lambda\_{k}(u\_{t}-f\_{t}).$$ |  |

Thus

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$y\_{t+1}=(1+\theta\_{k}\lambda\_{k})u\_{t}-\theta\_{k}\lambda\_{k}f\_{t}+\epsilon\_{t+1}-\epsilon\_{t}.$$ |  | (38) |

It remains to eliminate $f\_{t}$. Applying ([37](https://arxiv.org/html/2605.17036v4#A4.E37 "Equation 37 ‣ Proof of Proposition . ‣ Appendix D Proof of Section ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management")) one period earlier gives

|  |  |  |
| --- | --- | --- |
|  | $$y\_{t}=\theta\_{k}(f\_{t}-f\_{t-1})+u\_{t-1}+\epsilon\_{t}-\epsilon\_{t-1}.$$ |  |

Using $f\_{t}-f\_{t-1}=\lambda\_{k}(u\_{t-1}-f\_{t-1})$, we obtain

|  |  |  |
| --- | --- | --- |
|  | $$\theta\_{k}\lambda\_{k}f\_{t-1}=\theta\_{k}\lambda\_{k}u\_{t-1}+u\_{t-1}+\epsilon\_{t}-\epsilon\_{t-1}-y\_{t}.$$ |  |

The forecast recursion $f\_{t}=\lambda\_{k}u\_{t-1}+a\_{k}f\_{t-1}$ then implies

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  | $\displaystyle\theta\_{k}\lambda\_{k}f\_{t}$ | $\displaystyle=\theta\_{k}\lambda\_{k}^{2}u\_{t-1}+a\_{k}\theta\_{k}\lambda\_{k}f\_{t-1}$ |  | (39) |
|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  |  | $\displaystyle=(\theta\_{k}\lambda\_{k}+a\_{k})u\_{t-1}+a\_{k}(\epsilon\_{t}-\epsilon\_{t-1})-a\_{k}y\_{t}.$ |  | (40) |

Substituting ([40](https://arxiv.org/html/2605.17036v4#A4.E40 "Equation 40 ‣ Proof of Proposition . ‣ Appendix D Proof of Section ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management")) into ([38](https://arxiv.org/html/2605.17036v4#A4.E38 "Equation 38 ‣ Proof of Proposition . ‣ Appendix D Proof of Section ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management")) gives

|  |  |  |
| --- | --- | --- |
|  | $$y\_{t+1}=(1+\theta\_{k}\lambda\_{k})u\_{t}-(\theta\_{k}\lambda\_{k}+a\_{k})u\_{t-1}+a\_{k}y\_{t}+\epsilon\_{t+1}-(1+a\_{k})\epsilon\_{t}+a\_{k}\epsilon\_{t-1}.$$ |  |

Returning to the original notation and using $a\_{k}=1-\lambda\_{k}$ proves ([20](https://arxiv.org/html/2605.17036v4#A3.E20 "Equation 20 ‣ Proposition 2 (One-tier transfer function with decision shocks). ‣ The order transfer function. ‣ C.2 Linear Benchmark Model ‣ Appendix C A Theoretical Model for Agent Bullwhip ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management")).

Writing the recurrence at time $t$ in lag-operator form gives

|  |  |  |
| --- | --- | --- |
|  | $$\left[1-a\_{k}\mathcal{L}\right]q\_{k,t}=\left[(1+\theta\_{k}\lambda\_{k})\mathcal{L}-(\theta\_{k}\lambda\_{k}+a\_{k})\mathcal{L}^{2}\right]q\_{k-1,t}+\left[1-a\_{k}\mathcal{L}\right](1-\mathcal{L})\epsilon\_{k,t}.$$ |  |

Dividing by $1-a\_{k}\mathcal{L}$ gives

|  |  |  |
| --- | --- | --- |
|  | $$q^{(k)}=H\_{k}(\mathcal{L})q^{(k-1)}+(1-\mathcal{L})\epsilon^{(k)},$$ |  |

where $H\_{k}$ is ([22](https://arxiv.org/html/2605.17036v4#A3.E22 "Equation 22 ‣ Proposition 2 (One-tier transfer function with decision shocks). ‣ The order transfer function. ‣ C.2 Linear Benchmark Model ‣ Appendix C A Theoretical Model for Agent Bullwhip ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management")). Hence $G(\mathcal{L})=1-\mathcal{L}$, proving ([21](https://arxiv.org/html/2605.17036v4#A3.E21 "Equation 21 ‣ Proposition 2 (One-tier transfer function with decision shocks). ‣ The order transfer function. ‣ C.2 Linear Benchmark Model ‣ Appendix C A Theoretical Model for Agent Bullwhip ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management")) and ([23](https://arxiv.org/html/2605.17036v4#A3.E23 "Equation 23 ‣ Proposition 2 (One-tier transfer function with decision shocks). ‣ The order transfer function. ‣ C.2 Linear Benchmark Model ‣ Appendix C A Theoretical Model for Agent Bullwhip ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management")).
∎

###### Lemma 1 (One-tier gain).

For tier $k$, define

|  |  |  |
| --- | --- | --- |
|  | $$g\_{k}(\omega):=|H\_{k}(e^{-i\omega})|^{2}.$$ |  |

Then

|  |  |  |
| --- | --- | --- |
|  | $$g\_{k}(\omega)=1+\frac{2\theta\_{k}\lambda\_{k}(2-\lambda\_{k}+\theta\_{k}\lambda\_{k})(1-\cos\omega)}{\lambda\_{k}^{2}+2(1-\lambda\_{k})(1-\cos\omega)}\geq 1.$$ |  |

Moreover, the average gain

|  |  |  |
| --- | --- | --- |
|  | $$\Gamma\_{k}:=\frac{1}{2\pi}\int\_{-\pi}^{\pi}g\_{k}(\omega)\,d\omega$$ |  |

is

|  |  |  |
| --- | --- | --- |
|  | $$\Gamma\_{k}=1+2\theta\_{k}\lambda\_{k}+\frac{2\theta\_{k}^{2}\lambda\_{k}^{2}}{2-\lambda\_{k}}.$$ |  |

Consequently,

|  |  |  |
| --- | --- | --- |
|  | $$\Gamma\_{k}\geq\Gamma:=1+2\theta\lambda+\frac{2\theta^{2}\lambda^{2}}{2-\lambda}>1.$$ |  |

###### Proof of Lemma [1](https://arxiv.org/html/2605.17036v4#Thmlemma1 "Lemma 1 (One-tier gain). ‣ Appendix D Proof of Section ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management").

Write $a\_{k}=1-\lambda\_{k}$. Since the leading lag
$\mathcal{L}$ has unit modulus on the unit circle, it does not affect the
frequency gain. Hence

|  |  |  |
| --- | --- | --- |
|  | $$g\_{k}(\omega)=\left|1+\frac{\theta\_{k}\lambda\_{k}(1-e^{-i\omega})}{1-a\_{k}e^{-i\omega}}\right|^{2}.$$ |  |

Combining terms gives

|  |  |  |
| --- | --- | --- |
|  | $$g\_{k}(\omega)=\left|\frac{1+\theta\_{k}\lambda\_{k}-(a\_{k}+\theta\_{k}\lambda\_{k})e^{-i\omega}}{1-a\_{k}e^{-i\omega}}\right|^{2}.$$ |  |

Using

|  |  |  |
| --- | --- | --- |
|  | $$|1-a\_{k}e^{-i\omega}|^{2}=\lambda\_{k}^{2}+2(1-\lambda\_{k})(1-\cos\omega),$$ |  |

a direct expansion yields

|  |  |  |
| --- | --- | --- |
|  | $$g\_{k}(\omega)=1+\frac{2\theta\_{k}\lambda\_{k}(2-\lambda\_{k}+\theta\_{k}\lambda\_{k})(1-\cos\omega)}{\lambda\_{k}^{2}+2(1-\lambda\_{k})(1-\cos\omega)}.$$ |  |

The numerator and denominator of the second term are nonnegative, so
$g\_{k}(\omega)\geq 1$. If $\omega\neq 0$, then $1-\cos\omega>0$, and since
$\theta\_{k}>0$ and $\lambda\_{k}>0$, the inequality is strict.

Next, expand $H\_{k}(\mathcal{L})$ as an impulse-response sequence. We have

|  |  |  |
| --- | --- | --- |
|  | $$H\_{k}(\mathcal{L})=\frac{(1+\theta\_{k}\lambda\_{k})\mathcal{L}-(\theta\_{k}\lambda\_{k}+1-\lambda\_{k})\mathcal{L}^{2}}{1-(1-\lambda\_{k})\mathcal{L}}.$$ |  |

Therefore the impulse coefficients $h\_{k,j}$ of $H\_{k}$ satisfy

|  |  |  |
| --- | --- | --- |
|  | $$h\_{k,0}=0,\qquad h\_{k,1}=1+\theta\_{k}\lambda\_{k},$$ |  |

and, for $j\geq 2$,

|  |  |  |
| --- | --- | --- |
|  | $$h\_{k,j}=-\theta\_{k}\lambda\_{k}^{2}(1-\lambda\_{k})^{j-2}.$$ |  |

By Parseval’s identity,

|  |  |  |
| --- | --- | --- |
|  | $$\Gamma\_{k}=\frac{1}{2\pi}\int\_{-\pi}^{\pi}g\_{k}(\omega)\,d\omega=\sum\_{j=0}^{\infty}h\_{k,j}^{2}.$$ |  |

Thus

|  |  |  |
| --- | --- | --- |
|  | $$\Gamma\_{k}=(1+\theta\_{k}\lambda\_{k})^{2}+\theta\_{k}^{2}\lambda\_{k}^{4}\sum\_{j=0}^{\infty}(1-\lambda\_{k})^{2j}.$$ |  |

Since

|  |  |  |
| --- | --- | --- |
|  | $$\sum\_{j=0}^{\infty}(1-\lambda\_{k})^{2j}=\frac{1}{1-(1-\lambda\_{k})^{2}}=\frac{1}{\lambda\_{k}(2-\lambda\_{k})},$$ |  |

we obtain

|  |  |  |
| --- | --- | --- |
|  | $$\Gamma\_{k}=(1+\theta\_{k}\lambda\_{k})^{2}+\frac{\theta\_{k}^{2}\lambda\_{k}^{3}}{2-\lambda\_{k}}.$$ |  |

Equivalently,

|  |  |  |
| --- | --- | --- |
|  | $$\Gamma\_{k}=1+2\theta\_{k}\lambda\_{k}+\frac{2\theta\_{k}^{2}\lambda\_{k}^{2}}{2-\lambda\_{k}}.$$ |  |

The expression is increasing in both $\theta\_{k}$ and $\lambda\_{k}$ on
$\theta\_{k}>0$, $\lambda\_{k}\in(0,1]$. Therefore

|  |  |  |
| --- | --- | --- |
|  | $$\Gamma\_{k}\geq 1+2\theta\lambda+\frac{2\theta^{2}\lambda^{2}}{2-\lambda}=\Gamma.$$ |  |

Finally, $\Gamma>1$ because
$\theta>0$ and $\lambda>0$.
∎

###### Lemma 2 (Variance lower bound for independent inputs).

Let

|  |  |  |
| --- | --- | --- |
|  | $$A(\mathcal{L})=\sum\_{j=0}^{\infty}a\_{j}\mathcal{L}^{j}$$ |  |

be a square-summable linear filter. Let $\{Z\_{t}\}$ be centered and independent
across time, with

|  |  |  |
| --- | --- | --- |
|  | $$\operatorname{Var}(Z\_{t})\geq\sigma^{2}>0\qquad\text{for all }t.$$ |  |

Define

|  |  |  |
| --- | --- | --- |
|  | $$Y\_{t}=A(\mathcal{L})Z\_{t}=\sum\_{j=0}^{\infty}a\_{j}Z\_{t-j}.$$ |  |

Then

|  |  |  |
| --- | --- | --- |
|  | $$\operatorname{Var}(Y\_{t})\geq\sigma^{2}\sum\_{j=0}^{\infty}a\_{j}^{2}.$$ |  |

Equivalently,

|  |  |  |
| --- | --- | --- |
|  | $$\operatorname{Var}(Y\_{t})\geq\frac{\sigma^{2}}{2\pi}\int\_{-\pi}^{\pi}|A(e^{-i\omega})|^{2}\,d\omega.$$ |  |

###### Proof.

Because the inputs are centered and independent across time,

|  |  |  |
| --- | --- | --- |
|  | $$\operatorname{Var}(Y\_{t})=\operatorname{Var}\left(\sum\_{j=0}^{\infty}a\_{j}Z\_{t-j}\right)=\sum\_{j=0}^{\infty}a\_{j}^{2}\operatorname{Var}(Z\_{t-j}).$$ |  |

Using the lower bound $\operatorname{Var}(Z\_{t-j})\geq\sigma^{2}$, we obtain

|  |  |  |
| --- | --- | --- |
|  | $$\operatorname{Var}(Y\_{t})\geq\sigma^{2}\sum\_{j=0}^{\infty}a\_{j}^{2}.$$ |  |

The frequency-domain expression follows from Parseval’s identity:

|  |  |  |
| --- | --- | --- |
|  | $$\sum\_{j=0}^{\infty}a\_{j}^{2}=\frac{1}{2\pi}\int\_{-\pi}^{\pi}|A(e^{-i\omega})|^{2}\,d\omega.$$ |  |

∎

###### Lemma 3 (Product-gain lower bound).

Let $\Omega$ be uniformly distributed on $[-\pi,\pi]$. Suppose
$f\_{1},\dots,f\_{m}$ are nonnegative functions of $1-\cos\Omega$ that are
nondecreasing in $1-\cos\Omega$. Then

|  |  |  |
| --- | --- | --- |
|  | $$\mathbb{E}\left[\prod\_{r=1}^{m}f\_{r}(\Omega)\right]\geq\prod\_{r=1}^{m}\mathbb{E}[f\_{r}(\Omega)].$$ |  |

In particular,

|  |  |  |
| --- | --- | --- |
|  | $$\frac{1}{2\pi}\int\_{-\pi}^{\pi}\prod\_{r=1}^{m}g\_{r}(\omega)\,d\omega\geq\prod\_{r=1}^{m}\Gamma\_{r}\geq\Gamma^{m}.$$ |  |

###### Proof.

Let $U=1-\cos\Omega$. Each $f\_{r}$ is a nonnegative nondecreasing function
of the same scalar random variable $U$.

For two nondecreasing functions $f$ and $h$, let $U^{\prime}$ be an independent
copy of $U$. Then

|  |  |  |
| --- | --- | --- |
|  | $$\operatorname{Cov}(f(U),h(U))=\frac{1}{2}\mathbb{E}\left[(f(U)-f(U^{\prime}))(h(U)-h(U^{\prime}))\right]\geq 0,$$ |  |

because the two factors always have the same sign. Therefore

|  |  |  |
| --- | --- | --- |
|  | $$\mathbb{E}[f(U)h(U)]\geq\mathbb{E}[f(U)]\mathbb{E}[h(U)].$$ |  |

Applying this argument repeatedly gives

|  |  |  |
| --- | --- | --- |
|  | $$\mathbb{E}\left[\prod\_{r=1}^{m}f\_{r}(U)\right]\geq\prod\_{r=1}^{m}\mathbb{E}[f\_{r}(U)].$$ |  |

By Lemma [1](https://arxiv.org/html/2605.17036v4#Thmlemma1 "Lemma 1 (One-tier gain). ‣ Appendix D Proof of Section ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management"), each $g\_{r}(\omega)$ is a
nonnegative nondecreasing function of $1-\cos\omega$. Hence

|  |  |  |
| --- | --- | --- |
|  | $$\frac{1}{2\pi}\int\_{-\pi}^{\pi}\prod\_{r=1}^{m}g\_{r}(\omega)\,d\omega\geq\prod\_{r=1}^{m}\frac{1}{2\pi}\int\_{-\pi}^{\pi}g\_{r}(\omega)\,d\omega=\prod\_{r=1}^{m}\Gamma\_{r}.$$ |  |

Since each $\Gamma\_{r}\geq\Gamma$, the result follows.
∎

###### Proof of Theorem [1](https://arxiv.org/html/2605.17036v4#Thmtheorem1 "Theorem 1 (Demand bullwhip). ‣ C.3.1 Demand bullwhip ‣ C.3 Agent Bullwhip and Decomposition ‣ Appendix C A Theoretical Model for Agent Bullwhip ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management").

Taking conditional expectation over the decision shocks gives the demand
channel

|  |  |  |
| --- | --- | --- |
|  | $$\bar{\bm{q}}\_{k}=H\_{k}(\mathcal{L})\bar{\bm{q}}\_{k-1},\qquad\bar{\bm{q}}\_{0}={\bm{D}}.$$ |  |

Therefore

|  |  |  |
| --- | --- | --- |
|  | $$\bar{\bm{q}}\_{k}=\left(\prod\_{r=1}^{k}H\_{r}(\mathcal{L})\right){\bm{D}}.$$ |  |

Define the composite demand filter

|  |  |  |
| --- | --- | --- |
|  | $$A\_{k}(\mathcal{L}):=\prod\_{r=1}^{k}H\_{r}(\mathcal{L}).$$ |  |

Then

|  |  |  |
| --- | --- | --- |
|  | $$|A\_{k}(e^{-i\omega})|^{2}=\prod\_{r=1}^{k}g\_{r}(\omega).$$ |  |

By Lemma [2](https://arxiv.org/html/2605.17036v4#Thmlemma2 "Lemma 2 (Variance lower bound for independent inputs). ‣ Appendix D Proof of Section ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management"), since $D\_{t}$ is centered,
independent across time, and satisfies
$\operatorname{Var}(D\_{t})\geq\sigma\_{D}^{2}$,

|  |  |  |
| --- | --- | --- |
|  | $$V^{D}\_{k}=\operatorname{Var}\_{D}(\bar{q}\_{k,t})\geq\frac{\sigma\_{D}^{2}}{2\pi}\int\_{-\pi}^{\pi}\prod\_{r=1}^{k}g\_{r}(\omega)\,d\omega.$$ |  |

By Lemma [3](https://arxiv.org/html/2605.17036v4#Thmlemma3 "Lemma 3 (Product-gain lower bound). ‣ Appendix D Proof of Section ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management"),

|  |  |  |
| --- | --- | --- |
|  | $$\frac{1}{2\pi}\int\_{-\pi}^{\pi}\prod\_{r=1}^{k}g\_{r}(\omega)\,d\omega\geq\prod\_{r=1}^{k}\Gamma\_{r}.$$ |  |

Finally, Lemma [1](https://arxiv.org/html/2605.17036v4#Thmlemma1 "Lemma 1 (One-tier gain). ‣ Appendix D Proof of Section ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management") gives

|  |  |  |
| --- | --- | --- |
|  | $$\Gamma\_{r}\geq\Gamma>1\qquad\text{for all }r.$$ |  |

Hence

|  |  |  |
| --- | --- | --- |
|  | $$V^{D}\_{k}\geq\sigma\_{D}^{2}\prod\_{r=1}^{k}\Gamma\_{r}\geq\sigma\_{D}^{2}\Gamma^{k}.$$ |  |

This proves the claim.
∎

###### Proof of Theorem [2](https://arxiv.org/html/2605.17036v4#Thmtheorem2 "Theorem 2 (Decision bullwhip). ‣ C.3.2 Decision Bullwhip ‣ C.3 Agent Bullwhip and Decomposition ‣ Appendix C A Theoretical Model for Agent Bullwhip ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management").

Fix a demand path $D=d$. Define the centered decision-driven deviation

|  |  |  |
| --- | --- | --- |
|  | $$x\_{k,t}(d)=q\_{k,t}-\mathbb{E}\_{\epsilon}[q\_{k,t}\mid D=d].$$ |  |

Subtracting the demand-channel recursion from the full transfer representation
gives

|  |  |  |
| --- | --- | --- |
|  | $${\bm{x}}\_{k}=H\_{k}(\mathcal{L}){\bm{x}}\_{k-1}+G(\mathcal{L}){\bm{\epsilon}}\_{k},\qquad{\bm{x}}\_{0}=0.$$ |  |

Iterating this recursion gives

|  |  |  |
| --- | --- | --- |
|  | $${\bm{x}}\_{k}=\sum\_{j=1}^{k}\left(\prod\_{r=j+1}^{k}H\_{r}(\mathcal{L})\right)G(\mathcal{L}){\bm{\epsilon}}\_{j},$$ |  |

where the product is interpreted as the identity operator when $j=k$.

Define

|  |  |  |
| --- | --- | --- |
|  | $$A\_{j,k}(\mathcal{L}):=\left(\prod\_{r=j+1}^{k}H\_{r}(\mathcal{L})\right)G(\mathcal{L}).$$ |  |

Then

|  |  |  |
| --- | --- | --- |
|  | $${\bm{x}}\_{k}=\sum\_{j=1}^{k}A\_{j,k}(\mathcal{L}){\bm{\epsilon}}\_{j}.$$ |  |

Because the shock processes are independent across tiers, the summands are
mutually independent. Therefore

|  |  |  |
| --- | --- | --- |
|  | $$V^{\epsilon}\_{k}=\operatorname{Var}\_{\epsilon}(x\_{k,t}\mid D=d)=\sum\_{j=1}^{k}\operatorname{Var}\_{\epsilon}\left([A\_{j,k}(\mathcal{L}){\bm{\epsilon}}\_{j}]\_{t}\right).$$ |  |

For each $j$, since $\{\epsilon\_{j,t}\}$ is centered and independent over
time with variance lower bounded by $\sigma\_{j}^{2}$, the variance of the filtered process is

|  |  |  |
| --- | --- | --- |
|  | $$\operatorname{Var}\_{\epsilon}\left([A\_{j,k}(\mathcal{L}){\bm{\epsilon}}\_{j}]\_{t}\right)\geq\frac{\sigma\_{j}^{2}}{2\pi}\int\_{-\pi}^{\pi}|A\_{j,k}(e^{-i\omega})|^{2}\,d\omega.$$ |  |

Moreover,

|  |  |  |
| --- | --- | --- |
|  | $$|A\_{j,k}(e^{-i\omega})|^{2}=|G(e^{-i\omega})|^{2}\prod\_{r=j+1}^{k}|H\_{r}(e^{-i\omega})|^{2}=b(\omega)\prod\_{r=j+1}^{k}g\_{r}(\omega).$$ |  |

Thus

|  |  |  |
| --- | --- | --- |
|  | $$V^{\epsilon}\_{k}\geq\frac{1}{2\pi}\int\_{-\pi}^{\pi}b(\omega)\sum\_{j=1}^{k}\sigma\_{j}^{2}\prod\_{r=j+1}^{k}g\_{r}(\omega)\,d\omega.$$ |  |

Next, $b(\omega)$ and each $g\_{r}(\omega)$ are nonnegative nondecreasing
functions of $1-\cos\omega$. Hence the product-gain lower-bound lemma gives

|  |  |  |
| --- | --- | --- |
|  | $$\frac{1}{2\pi}\int\_{-\pi}^{\pi}b(\omega)\prod\_{r=j+1}^{k}g\_{r}(\omega)\,d\omega\geq\left(\frac{1}{2\pi}\int\_{-\pi}^{\pi}b(\omega)\,d\omega\right)\prod\_{r=j+1}^{k}\left(\frac{1}{2\pi}\int\_{-\pi}^{\pi}g\_{r}(\omega)\,d\omega\right).$$ |  |

Since

|  |  |  |
| --- | --- | --- |
|  | $$\frac{1}{2\pi}\int\_{-\pi}^{\pi}b(\omega)\,d\omega=\frac{1}{2\pi}\int\_{-\pi}^{\pi}4\sin^{2}(\omega/2)\,d\omega=2,$$ |  |

and since

|  |  |  |
| --- | --- | --- |
|  | $$\Gamma\_{r}=\frac{1}{2\pi}\int\_{-\pi}^{\pi}g\_{r}(\omega)\,d\omega,$$ |  |

we obtain

|  |  |  |
| --- | --- | --- |
|  | $$V^{\epsilon}\_{k}\geq 2\sum\_{j=1}^{k}\sigma\_{j}^{2}\prod\_{r=j+1}^{k}\Gamma\_{r}.$$ |  |

Finally, if

|  |  |  |
| --- | --- | --- |
|  | $$\theta\_{r}\geq\theta>0,\qquad\lambda\_{r}\in[\lambda,1],$$ |  |

then Lemma [1](https://arxiv.org/html/2605.17036v4#Thmlemma1 "Lemma 1 (One-tier gain). ‣ Appendix D Proof of Section ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management") gives

|  |  |  |
| --- | --- | --- |
|  | $$\Gamma\_{r}\geq\Gamma>1$$ |  |

for every $r$. Hence

|  |  |  |
| --- | --- | --- |
|  | $$\prod\_{r=j+1}^{k}\Gamma\_{r}\geq\Gamma^{k-j}.$$ |  |

Therefore

|  |  |  |
| --- | --- | --- |
|  | $$V^{\epsilon}\_{k}\geq 2\sum\_{j=1}^{k}\sigma\_{j}^{2}\Gamma^{k-j}.$$ |  |

This proves ([26](https://arxiv.org/html/2605.17036v4#A3.E26 "Equation 26 ‣ Theorem 2 (Decision bullwhip). ‣ C.3.2 Decision Bullwhip ‣ C.3 Agent Bullwhip and Decomposition ‣ Appendix C A Theoretical Model for Agent Bullwhip ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management")).
∎

###### Proof of Proposition [3](https://arxiv.org/html/2605.17036v4#Thmproposition3 "Proposition 3 (Intertemporal accumulation of decision unreliability). ‣ Fixed-tier accumulation over time. ‣ C.3.3 Discussion ‣ C.3 Agent Bullwhip and Decomposition ‣ Appendix C A Theoretical Model for Agent Bullwhip ‣ Reliability and Effectiveness of Autonomous AI Agents in Supply Chain Management").

Conditional on $D=d$, define

|  |  |  |
| --- | --- | --- |
|  | $$x\_{k,t}(d):=q\_{k,t}-\mathbb{E}[q\_{k,t}\mid D=d].$$ |  |

The deterministic demand path affects only the conditional mean, so

|  |  |  |
| --- | --- | --- |
|  | $$W\_{k,t}(d)=\operatorname{Var}(x\_{k,t}(d)).$$ |  |

The centered linear recursion is

|  |  |  |
| --- | --- | --- |
|  | $$x\_{k,t}(d)=H\_{k}(\mathcal{L})x\_{k-1,t}(d)+G(\mathcal{L})\epsilon\_{k,t},\qquad x\_{0,t}(d)=0.$$ |  |

Iterating this recursion gives

|  |  |  |
| --- | --- | --- |
|  | $$x\_{k,t}(d)=\sum\_{j=1}^{k}B\_{k,j}(\mathcal{L})\epsilon\_{j,t},$$ |  |

where

|  |  |  |
| --- | --- | --- |
|  | $$B\_{k,j}(\mathcal{L}):=\left(\prod\_{h=j+1}^{k}H\_{h}(\mathcal{L})\right)G(\mathcal{L}),$$ |  |

with the empty product equal to one. Write

|  |  |  |
| --- | --- | --- |
|  | $$B\_{k,j}(\mathcal{L})=\sum\_{m=0}^{\infty}b\_{k,j,m}\mathcal{L}^{m}.$$ |  |

Because the system starts from deterministic initial conditions and the
shock pre-history is zero, only shocks from the first $t$ periods contribute
to the period-$t$ deviation. Thus

|  |  |  |
| --- | --- | --- |
|  | $$x\_{k,t}(d)=\sum\_{j=1}^{k}\sum\_{m=0}^{t-1}b\_{k,j,m}\epsilon\_{j,t-m}.$$ |  |

Independence across tiers and time eliminates all covariance terms, so

|  |  |  |
| --- | --- | --- |
|  | $$W\_{k,t}(d)=\sum\_{j=1}^{k}\sigma\_{j}^{2}\sum\_{m=0}^{t-1}b\_{k,j,m}^{2}.$$ |  |

Similarly,

|  |  |  |
| --- | --- | --- |
|  | $$W\_{k,t+1}(d)=\sum\_{j=1}^{k}\sigma\_{j}^{2}\sum\_{m=0}^{t}b\_{k,j,m}^{2}.$$ |  |

Subtracting yields

|  |  |  |
| --- | --- | --- |
|  | $$W\_{k,t+1}(d)-W\_{k,t}(d)=\sum\_{j=1}^{k}\sigma\_{j}^{2}b\_{k,j,t}^{2}\geq 0.$$ |  |

This proves finite-horizon intertemporal accumulation of decision
unreliability.
∎
