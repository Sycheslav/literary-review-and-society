---
id: arxiv-2411-12977-text
type: material
title: 'MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning'
work_id: arxiv-2411-12977
source_url: https://arxiv.org/html/2411.12977v6
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять
  с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.
language: original
sha256_text: 583320677723e75a7a1411fc02fb29da076ff22dbadf859ced49ce3c276653aa
---

> Источник: [https://arxiv.org/html/2411.12977v6](https://arxiv.org/html/2411.12977v6). Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.

# MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning

Mircea Lică\*
Affiliation: Delft University of Technology
Email: [mlica@tudelft.nl](mailto:)
  
Ojas Shirekar\*
Affiliation: Delft University of Technology
Email: [o.k.shirekar@tudelft.nl](mailto:)
  
Baptiste Colle
Affiliation: Delft University of Technology
Email: [collebaptiste@gmail.com](mailto:)
  
Chirag Raman
Affiliation: Delft University of Technology
Email: [c.a.raman@tudelft.nl](mailto:)

###### Abstract

Embodied agents powered by large language models (LLMs), such as Voyager, promise open-ended competence in worlds such as Minecraft. However, when powered by open-weight LLMs they still falter on elementary tasks after domain-specific fine-tuning. We propose MindForge, a generative-agent framework for cultural lifelong learning through explicit perspective taking. We introduce three key innovations: (1) a structured theory of mind representation linking percepts, beliefs, desires, and actions; (2) natural inter-agent communication; and (3) a multi-component memory system. Following the cultural learning framework, we test MindForge in both instructive and collaborative settings within Minecraft. In an instructive setting with GPT-4, MindForge agents powered by open-weight LLMs significantly outperform their Voyager counterparts in basic tasks yielding $3\times$ more tech-tree milestones and collecting $2.3\times$ more unique items than the Voyager baseline. Furthermore, in fully collaborative settings, we find that the performance of two underachieving agents improves with more communication rounds, echoing the Condorcet Jury Theorem. MindForge agents demonstrate sophisticated behaviors, including expert-novice knowledge transfer, collaborative problem solving, and adaptation to out-of-distribution tasks through accumulated cultural experiences. The code can be found at <https://github.com/tapri-lab/mindforge>.

\*


![Refer to caption](https://arxiv.org/html/2411.12977v6/Teaser.png)


(a)

![Refer to caption](https://arxiv.org/html/2411.12977v6/mindforge_vs_voyager-8.pdf-6.png)


(b)

Figure 1: MindForge enables agents to (a) collaborate through structured theory-of-mind representations, which (b) leads to improved performance compared to Voyager when powered by open-weight LLMs, averaged across 3 runs.

## 1 Introduction

The development of generally capable agents marks a significant shift in advancing artificial intelligence, transitioning from assimilating data to generating novel knowledge through embodied interactions with open-ended environments [[1](https://arxiv.org/html/2411.12977v6#bib.bib49), [2](https://arxiv.org/html/2411.12977v6#bib.bib50), [3](https://arxiv.org/html/2411.12977v6#bib.bib52), [4](https://arxiv.org/html/2411.12977v6#bib.bib53)]. Classical approaches leveraging reinforcement learning [[5](https://arxiv.org/html/2411.12977v6#bib.bib44), [6](https://arxiv.org/html/2411.12977v6#bib.bib45)] and imitation learning [[7](https://arxiv.org/html/2411.12977v6#bib.bib43)] often struggle with generalization and exploration, as agents tend to converge on repetitive behaviors in static environments [[8](https://arxiv.org/html/2411.12977v6#bib.bib46)]. To address these limitations, researchers have sought to emulate human-like lifelong learning capabilities, developing systems that can continuously acquire, update, and transfer knowledge over extended periods [[9](https://arxiv.org/html/2411.12977v6#bib.bib54), [10](https://arxiv.org/html/2411.12977v6#bib.bib55)].The advent of large language models (LLMs) has accelerated this pursuit, enabling the development of agents such as Voyager [[11](https://arxiv.org/html/2411.12977v6#bib.bib33)] that can apply internet-scale knowledge to continuously explore, plan, and acquire new skills in partially observable, open-ended environments such as Minecraft.

Despite their promise, we argue that state-of-the-art lifelong learning agents like Voyager face a crucial limitation: they learn in isolation, neglecting a fundamental aspect of human intelligence—the social context. So central is the social context to our existence that the Social Intelligence Hypothesis posits that our cognitive capabilities evolved primarily to navigate the complexities of social life [[12](https://arxiv.org/html/2411.12977v6#bib.bib56), [13](https://arxiv.org/html/2411.12977v6#bib.bib57)]. This isolated learning becomes particularly problematic when coupled with these agents’ reliance on closed LLMs like GPT-4. [Wang et al. [11]](https://arxiv.org/html/2411.12977v6#bib.bib33) note that “VOYAGER requires the quantum leap in code generation quality from GPT-4 which GPT-3.5 and open-source LLMs cannot provide”. Our experiments ([Section 5](https://arxiv.org/html/2411.12977v6#S5 "5 Experiments ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning")) corroborate this observation, demonstrating that replacing GPT-4 with open LLMs renders the Voyager agent incapable of even the most rudimentary tasks, such as collecting dirt in Minecraft. We ask: can an open LLM-powered agent, which struggles with basic tasks, improve through collaboration with others?

To address this question, we introduce the MindForge framework, inspired by cultural learning, which contends that individuals internalize skills and strategies by observing others’ perspectives, using Theory of Mind (ToM) to infer goals, beliefs, and intentions and thereby deepen social learning [[14](https://arxiv.org/html/2411.12977v6#bib.bib58), [15](https://arxiv.org/html/2411.12977v6#bib.bib60), [16](https://arxiv.org/html/2411.12977v6#bib.bib61), [17](https://arxiv.org/html/2411.12977v6#bib.bib62), [18](https://arxiv.org/html/2411.12977v6#bib.bib59)].
Our framework reframes knowledge distillation [[19](https://arxiv.org/html/2411.12977v6#bib.bib38)] as a social, test-time process: agents refine their beliefs through multi-turn dialogue with expert peers, without gradient updates. This interactive distillation supports test-time compute scaling [[20](https://arxiv.org/html/2411.12977v6#bib.bib74)], enabling agents to improve performance via communication, memory retrieval and perspective-taking. By structuring communication across turns, MindForge also contributes to multi-turn LLM agent research [[21](https://arxiv.org/html/2411.12977v6#bib.bib19), [22](https://arxiv.org/html/2411.12977v6#bib.bib18)], showing that open models can match GPT-4 through collaboration alone. Moreover, our analysis of weak-weak settings highlights a compute-performance tradeoff at inference, linking collaboration to test-time compute considerations [[20](https://arxiv.org/html/2411.12977v6#bib.bib74)].

[Figure 1(a)](https://arxiv.org/html/2411.12977v6#S0.F1.sf1 "In Figure 1 ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning") provides an overview of our agents in action. Concretely, MindForge extends Voyager by incorporating three key improvements: (1) perspective-taking through a causal ToM template [[23](https://arxiv.org/html/2411.12977v6#bib.bib34)] linking agent percepts, beliefs, desires, and actions; (2) a natural language communication interface between agents; and (3) memory updates following the Soar cognitive architecture [[24](https://arxiv.org/html/2411.12977v6#bib.bib63)], including semantic memory of task and environment-related knowledge and episodic memory.

Empirically, we instantiate MindForge agents in Instructed Learning (mixed-expertise) and Collaborative Learning (matched-expertise) settings within the cultural learning framework [[15](https://arxiv.org/html/2411.12977v6#bib.bib60)]. MindForge agents powered by open-weight LLMs outperform the original Voyager architecture [[11](https://arxiv.org/html/2411.12977v6#bib.bib33)] on two seemingly trivial tasks by more than $40\%$. We identify Voyager’s specific failure cases: (1) false beliefs and (2) code generation, and show how our method overcomes them through communication and perspective-taking. To assess lifelong learning, we run MindForge on the Minecraft tech-tree and find that it surpasses open-weight Voyager variants in both key tech-tree milestones and the number of unique items obtained.  [Section 5.5](https://arxiv.org/html/2411.12977v6#S5.SS5 "5.5 MindForge Collaborative Learning Setting ‣ 5 Experiments ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning") further shows that when both agents begin with the same limited capabilities, a single round of GPT-4 seeding followed by just seven turns of peer-to-peer dialogue lifts the population-level success rate from $62\%$ to $79\%$, revealing a Condorcet-style “many-minds” boost that stems from richer interaction rather than larger models. This generalization in post-collaborative settings paves the way for agents that can continuously adapt through social interaction, reducing the reliance on large-scale computing resources for training and fine-tuning the underlying language models.

## 2 Related Work

#### Theory of Mind in Embodied Agents

Early attempts to equip machines with mental-state reasoning drew on deep learning [[25](https://arxiv.org/html/2411.12977v6#bib.bib28), [26](https://arxiv.org/html/2411.12977v6#bib.bib29), [27](https://arxiv.org/html/2411.12977v6#bib.bib32)], reinforcement learning [[28](https://arxiv.org/html/2411.12977v6#bib.bib31)], and Bayesian models [[29](https://arxiv.org/html/2411.12977v6#bib.bib30)]. These systems were either confined to toy 2-D worlds [[25](https://arxiv.org/html/2411.12977v6#bib.bib28), [26](https://arxiv.org/html/2411.12977v6#bib.bib29)] or failed to generalize to richer environments [[27](https://arxiv.org/html/2411.12977v6#bib.bib32)]. The emergence of large language models (LLMs) reignited interest in ToM, sparking evaluations of their putative capabilities [[30](https://arxiv.org/html/2411.12977v6#bib.bib12), [31](https://arxiv.org/html/2411.12977v6#bib.bib20), [32](https://arxiv.org/html/2411.12977v6#bib.bib27), [23](https://arxiv.org/html/2411.12977v6#bib.bib34)]. Although evidence so far suggests that LLMs lack genuine ToM, their breadth of knowledge has inspired a new wave of prompt-based frameworks [[33](https://arxiv.org/html/2411.12977v6#bib.bib21), [34](https://arxiv.org/html/2411.12977v6#bib.bib24), [35](https://arxiv.org/html/2411.12977v6#bib.bib25), [36](https://arxiv.org/html/2411.12977v6#bib.bib26)]: the first two focus on perspective-taking, while the latter pair ground reasoning in explicit causal models. BIP-ALM remains the sole example that integrates such a framework with an LLM [[37](https://arxiv.org/html/2411.12977v6#bib.bib22), [38](https://arxiv.org/html/2411.12977v6#bib.bib23)].

#### LLM-based Multi-Agent Systems

LLMs have demonstrated overwhelming success in performing a variety of single-agent tasks ranging from question answering and text generation to code synthesis and complex reasoning in embodied settings [[11](https://arxiv.org/html/2411.12977v6#bib.bib33), [39](https://arxiv.org/html/2411.12977v6#bib.bib13), [40](https://arxiv.org/html/2411.12977v6#bib.bib14)]. This success has started a growing interest in developing LLM-based multi-agent systems [[41](https://arxiv.org/html/2411.12977v6#bib.bib36), [21](https://arxiv.org/html/2411.12977v6#bib.bib19), [22](https://arxiv.org/html/2411.12977v6#bib.bib18), [42](https://arxiv.org/html/2411.12977v6#bib.bib37), [43](https://arxiv.org/html/2411.12977v6#bib.bib35)], where language-based communication is a central component. For instance, CoELA [[21](https://arxiv.org/html/2411.12977v6#bib.bib19)] introduce a modular multi-agent framework that integrates memory, perception and execution, while COMBO [[41](https://arxiv.org/html/2411.12977v6#bib.bib36)] present a multi-agent cooperative framework, that deals with collaboration in partial egocentric views of the environment. However, these frameworks lack an explicit belief representation and Theory-of-Mind reasoning. Recently, benchmarks like MineCollab [[44](https://arxiv.org/html/2411.12977v6#bib.bib72)], designed for collaborative reasoning, find that current LLM agents are not suited for multi-agent collaboration in long-horizon embodied scenarios, a gap that MindForge addresses by endowing agents with structured perspective taking capabilities.

#### Single-agent Frameworks

Recent research on long-horizon tasks in single-agent systems differs architecturally from MindForge’s unified collaborative learning framework. For example, ExpeL [[45](https://arxiv.org/html/2411.12977v6#bib.bib1)] and CLIN [[46](https://arxiv.org/html/2411.12977v6#bib.bib5)] emphasize experiential learning through vectorized trajectories or causal abstractions but lack explicit belief graphs and integration across episodic, semantic, and procedural memories. Frameworks like DEPS [[47](https://arxiv.org/html/2411.12977v6#bib.bib2)] and ADaPT [[48](https://arxiv.org/html/2411.12977v6#bib.bib4)] enable in-episode self-correction via iterative refinement, yet insights are often ephemeral, confined to the context window without persistent storage or structured models of others’ beliefs. SSO [[49](https://arxiv.org/html/2411.12977v6#bib.bib3)] provides procedural memory through skill libraries but omits episodic/semantic layers and social reasoning for targeted teaching or belief revision. Similarly, Adam [[50](https://arxiv.org/html/2411.12977v6#bib.bib6)] structures world knowledge as causal graphs in open environments, while Optimus-1 [[51](https://arxiv.org/html/2411.12977v6#bib.bib7)] builds hierarchical semantic graphs from experiences.

## 3 Background

#### Voyager

Voyager agents consist of three main components: (1) an automatic curriculum generator, (2) a skill library, and (3) an iterative prompting mechanism. The automatic curriculum proposes progressively complex tasks, driving continuous learning. The skill library stores and retrieves learned behaviors, facilitating knowledge accumulation and transfer. The iterative prompting mechanism generates and refines executable code based on environmental feedback, allowing for adaptive behavior. Voyager demonstrated significant capabilities in item discovery, technology progression, and skill generalization. This system established a new benchmark in open-world AI agents, showcasing the potential for lifelong learning and adaptation in complex, dynamic environments. The Voyager framework serves as a base for our lifelong collaborative learning agents within Minecraft.

#### BigToM Causal Template

The BigToM causal template [[23](https://arxiv.org/html/2411.12977v6#bib.bib34)], provides a structured framework for representing Theory of Mind (ToM) scenarios as causal graphs. This template comprises key components including context, desire, percept, belief, causal event, and resulting actions. By representing ToM scenarios in this causal structure, the template allows for systematic manipulation of variables such as an agent’s perceptions, beliefs, and actions in response to environmental changes. This approach enables the creation of diverse, well-controlled ToM scenarios, capturing the complex causal relationships between an agent’s mental states and their behavior in social situations. The causal graph representation facilitates a more nuanced and systematic exploration of ToM reasoning, allowing for the examination of various inference patterns such as forward belief, forward action, and backward belief inferences in social cognitive tasks.

![Refer to caption](https://arxiv.org/html/2411.12977v6/MindCraft_Agent.png)


(a) MindForge Architecture

![Refer to caption](https://arxiv.org/html/2411.12977v6/Voyager_Agent.png)


(b) Voyager Architecture

Figure 2: Cognitive architectures of MindForge and Voyager respectively. The Voyager architecture has been re-framed within the scope of our cognitive architecture. MindForge expands the original Voyager framework to enable communication through theory of mind together with additional memory subsystems to enhance the lifelong learning capabilities of the agent.

## 4 Method

To grant MindForge agents the ability to learn through collaborative social interactions, we introduce the following components for communication and perspective-taking:
(i) an explicit structured representation linking percepts, beliefs, desires, and actions ([Section 4.1](https://arxiv.org/html/2411.12977v6#S4.SS1 "4.1 Structured Representation of Own Mental States: Beliefs, Desires, and Intentions ‣ 4 Method ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning")),
(ii) perspective taking so that the agent can reason over self-beliefs and those about its collaborators ([Section 4.2](https://arxiv.org/html/2411.12977v6#S4.SS2 "4.2 Theory of Mind: Modeling Partner Perspectives ‣ 4 Method ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning")),
(iii)
a communication medium that the agents can use to share information in natural language ([Section 4.3](https://arxiv.org/html/2411.12977v6#S4.SS3 "4.3 Communication Medium ‣ 4 Method ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning")),
and (iv) the ability to utilize different types of memory subsystems ([Section 4.4](https://arxiv.org/html/2411.12977v6#S4.SS4 "4.4 Memory Subsystems ‣ 4 Method ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning")).

### 4.1 Structured Representation of Own Mental States: Beliefs, Desires, and Intentions

For MindForge agents to develop effective theory of mind capabilities, they must first possess structured representations of their own mental states.
This explicit modeling of the self is crucial for recursive social reasoning: enabling agents not only to reason about their own beliefs, goals, perceptions, and how these might lead to their actions, but also to form a similar mental model for other agents.
This mirrors findings in developmental psychology, where children first develop an awareness of their own thoughts, feelings, and goals before being able to infer the mental states of others [[52](https://arxiv.org/html/2411.12977v6#bib.bib64), [53](https://arxiv.org/html/2411.12977v6#bib.bib65)]. This is further supported by neuroscientific research that has also identified distinct neural mechanisms for self-cognition and social cognition [[54](https://arxiv.org/html/2411.12977v6#bib.bib66), [55](https://arxiv.org/html/2411.12977v6#bib.bib67)].

We draw on the classical Belief-Desire-Intention (BDI) framework [[56](https://arxiv.org/html/2411.12977v6#bib.bib41)] and operationalize it using the BigToM causal template ([Section 3](https://arxiv.org/html/2411.12977v6#S3 "3 Background ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning")) [[23](https://arxiv.org/html/2411.12977v6#bib.bib34)]. In MindForge, beliefs represent the agent’s current understanding of the world inferred from sensory perception, including interactions with other agents. Desires encode the agent’s goals, both generated by an automatic curriculum and those arising from collaborative interactions. Intentions correspond to concrete executable actions, implemented as generated code—and so, consistent with BigToM [[23](https://arxiv.org/html/2411.12977v6#bib.bib34)], we treat “intentions” and “actions” interchangeably in implementation. However, we note that this equivalence does not always hold conceptually: intentions refer to internal commitments or plans, while actions are observable behaviors that may diverge from intentions. For a deeper treatment of this distinction, see [[57](https://arxiv.org/html/2411.12977v6#bib.bib75)].

#### Belief Structure.

We categorize a MindForge agent’s beliefs into four key categories, illustrated in [Figure 3](https://arxiv.org/html/2411.12977v6#S4.F3 "In 4.2 Theory of Mind: Modeling Partner Perspectives ‣ 4 Method ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning"): i. perception-related beliefs, formed from direct sensory input via the Minecraft API; ii. task-related beliefs, inferred from the agent’s reflection on its upcoming objectives; iii. interaction-related beliefs, derived from chat messages during task execution; and iv. partner-related beliefs, which track others’ mental states. Each belief type is generated via a separate LLM call, with prompts conditioned on current percepts, memory retrievals, and conversation history (see [Appendix F](https://arxiv.org/html/2411.12977v6#A6 "Appendix F Prompts ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning")). This modular belief formation feeds into the causal ToM template [Figure 2(a)](https://arxiv.org/html/2411.12977v6#S3.F2.sf1 "In Figure 2 ‣ BigToM Causal Template ‣ 3 Background ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning"), which governs downstream action generation. Structured self-modeling thus serves as the foundation for cultural learning and perspective-taking.

### 4.2 Theory of Mind: Modeling Partner Perspectives

Building on the structured representation of their own mental states, MindForge extend this modeling to others via Theory of Mind—the capacity to attribute beliefs, desires, and intentions to others.
Each MindForge agent achieves this by maintaining a partner-specific BigToM graph within its own beliefs, allowing it to reason about the internal state of each conversational partner (see [Figure 3](https://arxiv.org/html/2411.12977v6#S4.F3 "In 4.2 Theory of Mind: Modeling Partner Perspectives ‣ 4 Method ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning")). These representations guide how an agent interprets and responds to incoming communication.

During collaboration, an agent uses its internal model of its partner to simulate what the partner knows, believes, or needs. The underlying LLM receives this partner model along with the conversation history to generate responses incorporating the collaborator’s point of view. As interaction proceeds, the partner beliefs are continuously updated using new received through the communication channel ([Figure 6](https://arxiv.org/html/2411.12977v6#S5.F6 "In Using a less constrained communication protocol ‣ 5.3 Introducing Collaboration: MindForge Agents ‣ 5 Experiments ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning")).
This dynamic modeling of partner mental states endows MindForge agents with one of the most crucial abilities within the cultural learning framework: reasoning about partner perspectives [[14](https://arxiv.org/html/2411.12977v6#bib.bib58), [15](https://arxiv.org/html/2411.12977v6#bib.bib60)]. For instance, an expert agent can diagnose a novice’s misconception and tailor its feedback accordingly, while a novice can ask more targeted questions with fewer digressions by simulating what the expert knows. See [Section B.1](https://arxiv.org/html/2411.12977v6#A2.SS1 "B.1 Perspective Taking ‣ Appendix B Additional Ablations ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning") for more details on how perspective-taking is integrated into the communication module, and in-game examples.

![Refer to caption](https://arxiv.org/html/2411.12977v6/beliefs.png)


Figure 3: Each agent maintains a set of internal beliefs that it can exploit as needed. In order to enable ToM capabilities agents also maintain a belief over the beliefs, actions and desires of their collaborative counterparts.

### 4.3 Communication Medium

To take advantage of representations of each other’s mental models and collaborate effectively, agents need to be able to communicate with each other. We operationalize communication in natural language, integrating the MindForge framework’s communication system with Minecraft’s native in-game chat functionality.
Specifically, once a MindForge agent fails to complete a task, it initiates a communication round with its partner where it leverages its BigToM representation to ask for help. This system enables agents to exchange textual information and, crucially, to integrate feedback from collaborators directly into their belief systems. Concretely, we utilize the Mineflayer API [[58](https://arxiv.org/html/2411.12977v6#bib.bib8)] to extract and process chat data from the Minecraft environment. By leveraging the game’s existing chat system, the framework ensures that collaborative interactions occur in a context-appropriate manner, closely mirroring human-to-human communication within Minecraft.

To handle the resulting conversation, we use a dedicated LLM instance within the MindForge agent which is tasked with synthesizing and interpreting the conversation into the structured BigTOM BDI template, generating both interaction beliefs and partner beliefs (see prompts in [Appendix F](https://arxiv.org/html/2411.12977v6#A6 "Appendix F Prompts ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning")). This instance does not directly influence any other parts of the agent.

### 4.4 Memory Subsystems

A MindForge agent’s memory consists of three subsystems drawing on research about human memory: (i) episodic, (ii) semantic, and (iii) procedural memory.

Episodic memory deals with pertinent information about the agent’s past attempts at a task and social interactions with other agents.
Recollections of past episodes serve as context for humans to interpret others’ behaviors, leading to divergent future actions in the same situation in response to different recollections [[59](https://arxiv.org/html/2411.12977v6#bib.bib11)].
Humans also tend to summarize information from their social interactions, but at the same time are capable of preferentially accessing episodes when the credibility of certain summaries is low due to the lack of evidence [[60](https://arxiv.org/html/2411.12977v6#bib.bib68)]. Moreover, findings also suggest that there are processes in the brain for updating these summaries as new episodes transpire [[61](https://arxiv.org/html/2411.12977v6#bib.bib69), [60](https://arxiv.org/html/2411.12977v6#bib.bib68)]. Inspired by complementary learning systems theory, Larimar [[62](https://arxiv.org/html/2411.12977v6#bib.bib10)] enhances LLMs with a distributed episodic memory module, enabling dynamic knowledge updates without any gradient-based learning. Furthermore, Optimus-1 integrates past experiences in a multimodal memory storage mechanism and abstracted experience pool used for summarization of past experiences. For a MindForge agent, the role of episodic memory is twofold. Firstly, it stores details about its partners revealed during previous conversations that can be exploited for perspective-taking in future communication. Secondly, we store past actions that led to failure and retrieve them based on their similarity with the task at hand. Thus, a MindForge agent can track both the progress of its partner and learn from past failures.

Semantic memory constitutes an individual’s store of knowledge about the world. The content of semantic memory is abstracted from the experience and is therefore said to hold summarized generalizations, likely without references to specific experiences [[63](https://arxiv.org/html/2411.12977v6#bib.bib70), [60](https://arxiv.org/html/2411.12977v6#bib.bib68), [61](https://arxiv.org/html/2411.12977v6#bib.bib69)]. For a MindForge agent, the semantic memory stores information related to the task and environment. It stores information relevant to completing a task; for instance, the prerequisites for being able to mine dirt in the game world. Such a piece of information is not necessarily tied to one specific episode. Rather, it is generally useful information about the world and can be distilled from the episodic memory.

Finally, procedural memory stores the skills that the agent learns and is analogous to the skill library present in the original Voyager framework [[11](https://arxiv.org/html/2411.12977v6#bib.bib33)]. The skills stored in the procedural memory are reusable pieces of code that the agent can use for solving problems, allowing the agent to take on more complex tasks while avoiding re-learning elements previously used successfully.
As illustrated in [Figure 2(a)](https://arxiv.org/html/2411.12977v6#S3.F2.sf1 "In Figure 2 ‣ BigToM Causal Template ‣ 3 Background ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning"), episodic and semantic memory stores influence the agent’s beliefs, while procedural memory provides the routines that inform the agent’s next action. Additional information about the memory subsystems can be found in [Section B.2](https://arxiv.org/html/2411.12977v6#A2.SS2 "B.2 Memory Components ‣ Appendix B Additional Ablations ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning"), where we provide implementation details, and an ablation for the episodic memory component, where we show that omitting it from MindForge leads to a drop in success rate.

## 5 Experiments

### 5.1 Experimental Setup

Our MindForge framework introduces three advances that let agents improve continuously through social exchange: (1) explicit theory-of-mind representations for reasoning about peers, (2) Natural-language dialogue for coordination, and (3) integrated semantic and episodic memory to retain experience.
We evaluate these additions in the same Minecraft world used by Voyager [[11](https://arxiv.org/html/2411.12977v6#bib.bib33)], built on MineDojo [[64](https://arxiv.org/html/2411.12977v6#bib.bib47)] with motor control via Mineflayer [[58](https://arxiv.org/html/2411.12977v6#bib.bib8)]. Component LLMs communicate through DSPy [[65](https://arxiv.org/html/2411.12977v6#bib.bib15), [66](https://arxiv.org/html/2411.12977v6#bib.bib16)] and LangChain [[67](https://arxiv.org/html/2411.12977v6#bib.bib9)] for generation and embedding. In the base experimental setting, we follow Voyager [[11](https://arxiv.org/html/2411.12977v6#bib.bib33)] and allow the agent to execute 4 sequential actions to solve a task. MindForge agents that interact (see [Section 5.3](https://arxiv.org/html/2411.12977v6#S5.SS3 "5.3 Introducing Collaboration: MindForge Agents ‣ 5 Experiments ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning")) interleave one communication round (via the in-game chat) between two environmental actions. A snapshot of this setup can be seen in [Figure 4(a)](https://arxiv.org/html/2411.12977v6#S5.F4.sf1 "In Figure 4 ‣ Primary Failure Cases ‣ 5.2 Voyager With Open-Weight LLMs ‣ 5 Experiments ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
For isolated tasks we measure the fraction of successes over $24$ independent trials (one task per trial). In tech-tree experiments we follow Voyager’s protocol, tracking milestone achievements and unique items collected. To ensure comparability, we preserve Voyager’s original prompt structure and workflow throughout.

### 5.2 Voyager With Open-Weight LLMs

To establish non-interactive performance baselines, we replace GPT-4 [[68](https://arxiv.org/html/2411.12977v6#bib.bib48)] with three open-weight LLMs in the Voyager framework [[11](https://arxiv.org/html/2411.12977v6#bib.bib33)]: Mistral-7B [[69](https://arxiv.org/html/2411.12977v6#bib.bib40)], Mixtral-8x7B [[70](https://arxiv.org/html/2411.12977v6#bib.bib39)], and Llama 3.1-8B [[71](https://arxiv.org/html/2411.12977v6#bib.bib17)], selected for their long context windows and manageable size. Testing focuses on two fundamental Minecraft tasks: collecting single blocks of dirt and wood.
Results in [Table 1](https://arxiv.org/html/2411.12977v6#S5.T1 "In 5.2 Voyager With Open-Weight LLMs ‣ 5 Experiments ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning") reveal that while GPT-4 achieves perfect performance, open-weight LLMs struggle significantly even with these basic tasks without collaboration. This aligns with [Wang et al. [11]](https://arxiv.org/html/2411.12977v6#bib.bib33)’s observation that GPT-4’s superior code generation capabilities enable it to obtain $5.7\times$ more unique items than other models, establishing a clear baseline for measuring the impact of our collaborative approach.

Table 1: Voyager [[11](https://arxiv.org/html/2411.12977v6#bib.bib33)] powered by open-weight LLMs (even fine-tuned for Minecraft) struggles with basic tasks. Closed-source models like GPT-4 exhibit perfect accuracy. A single MindForge agent bridges the performance gap between Mistral-7B and GPT-4 on both wood and dirt collection, showing significant gains compared to other learning techniques such as PEFT.

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| Task | Mistral-7B | Mixtral-8x7B | Llama 3.1-8B | Mistral-7B (PEFT) | Mistral-7B (MindForge) | GPT-4 |
| Dirt | $7\%$ | $27\%$ | $4\%$ | $7\%$ | $37.5\%$ | $100\%$ |
| Wood | $4\%$ | $27\%$ | $7\%$ | $12.5\%$ | $33.3\%$ | $100\%$ |

#### Primary Failure Cases

While [Wang et al. [11]](https://arxiv.org/html/2411.12977v6#bib.bib33) only discuss code-generation failures, we find two prominent failure cases for the open-weight Voyager setup: (1) false beliefs and (2) faulty code generation. Importantly, we discover that the critic-based self-improvement component in Voyager fails to recover from initial mistakes and subsequently fails to solve the task. As shown in [Figure 4(b)](https://arxiv.org/html/2411.12977v6#S5.F4.sf2 "In Figure 4 ‣ Primary Failure Cases ‣ 5.2 Voyager With Open-Weight LLMs ‣ 5 Experiments ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning"), a Mistral-7B powered Voyager fails at dirt collection due to incorrect assumptions about tool requirements and lack of basic knowledge pertaining to Minecraft. Similarly, [Figure 4(a)](https://arxiv.org/html/2411.12977v6#S5.F4.sf1 "In Figure 4 ‣ Primary Failure Cases ‣ 5.2 Voyager With Open-Weight LLMs ‣ 5 Experiments ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning") showcases how feedback from a stronger agent can solve code misconceptions about the Mineflayer API [[58](https://arxiv.org/html/2411.12977v6#bib.bib8)].

![Refer to caption](https://arxiv.org/html/2411.12977v6/Failure2.png)


(a)

![Refer to caption](https://arxiv.org/html/2411.12977v6/imrpov_comm2.png)


(b)

Figure 4: Failure mode correction. (a) Communication with an expert agent fixes the code error. (b) A weaker agent’s incorrect task-related belief (initially believing it is mining ‘grass blocks’ and needs tools) is corrected by a stronger agent through communication (e.g., stating ‘dirt blocks’ do not require tools), leading to an updated task understanding.

#### Fine-Tuning Does Not Help

Parameter-efficient tuning often helps LLMs [[72](https://arxiv.org/html/2411.12977v6#bib.bib51)], yet adapting Mistral-7B with GPT-4 execution traces (reasoning + code) and Minecraft manuals (domain knowledge; [Appendix E](https://arxiv.org/html/2411.12977v6#A5 "Appendix E Fine-tuning setup ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning")) produced no benefit. In cultural-learning terms [[14](https://arxiv.org/html/2411.12977v6#bib.bib58), [15](https://arxiv.org/html/2411.12977v6#bib.bib60)] this is imitation learning, but the tuned model still scores $7\%$ on dirt collection ($\pm 0$) and $12.5\%$ on wood collection ($+8.5$) as shown in  [Table 1](https://arxiv.org/html/2411.12977v6#S5.T1 "In 5.2 Voyager With Open-Weight LLMs ‣ 5 Experiments ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning"). Post-hoc analysis shows the tuning makes outputs wordier, blurs decision-making, and erodes instruction-following, indicating that naively imitating unstructured traces is counter-productive.

### 5.3 Introducing Collaboration: MindForge Agents

Having shown that PEFT-based imitation learning fails to improve agent capabilities, we evaluate our proposed MindForge framework. We adopt an instructive learning approach within the cultural learning framework [[15](https://arxiv.org/html/2411.12977v6#bib.bib60)], where an expert agent guides a novice through communication and perspective-taking. This multi-agent collaboration effectively bridges the performance gap between open-weight LLMs and GPT-4, addressing the failure cases identified in [Figure 4](https://arxiv.org/html/2411.12977v6#S5.F4 "In Primary Failure Cases ‣ 5.2 Voyager With Open-Weight LLMs ‣ 5 Experiments ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").

#### Feasibility: Human (Expert) Collaboration Improves Performance

To establish feasibility, we first conduct a wizard-of-oz study where a human expert interacts with an open-weight LLM-powered MindForge agent through the in-game chat. As shown in [Figure 5](https://arxiv.org/html/2411.12977v6#S5.F5 "In Ablations ‣ 5.3 Introducing Collaboration: MindForge Agents ‣ 5 Experiments ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning"), human expert collaboration achieves on average a $+57.85\%$ increase in task completion rate for dirt collection over the non-interactive baselines. This demonstrates both the viability and flexibility of our framework in enabling productive human-agent interactions for collaborative tasks.

#### GPT-4 (Expert) Collaboration Maintains Performance Benefits

We replace the human expert with a GPT-4-powered MindForge agent that collaborates with an open-weight LLM agent. The expert agent infers its partner’s failure cases through perspective-taking based on natural language communication in the game chat. Unlike human collaboration, agents cannot directly access each other’s internal beliefs and must rely on Theory of Mind through communication to model their counterpart’s mental state. This perspective-taking enables the expert to accurately diagnose and address the weaker agent’s misconceptions. Notably, this setup generalizes the classic notion of knowledge distillation beyond logits or model weights: here, distillation unfolds through social interaction, where the expert agent transmits structural knowledge, corrects false beliefs, and shapes the student’s internal representations in real time. As shown in [Figure 5](https://arxiv.org/html/2411.12977v6#S5.F5 "In Ablations ‣ 5.3 Introducing Collaboration: MindForge Agents ‣ 5 Experiments ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning"), this approach significantly improves performance compared to the non-interactive baselines, achieving on average a $16.1\%$ increase in task completion rates for dirt collection and a $13\%$ increase for wood collection tasks respectively. A sample conversation can be found in [Appendix D](https://arxiv.org/html/2411.12977v6#A4 "Appendix D Sample Conversation ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").

#### Ablations

To elucidate the MindForge framework’s components, we conducted targeted ablations. The perspective-taking module, enabling agents to reason over partners’ beliefs, boosts task completion by up to 13%, as evidenced by comparisons across multiple communication rounds (see [Table 7](https://arxiv.org/html/2411.12977v6#A2.T7 "In B.1 Perspective Taking ‣ Appendix B Additional Ablations ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning"), [Section B.1](https://arxiv.org/html/2411.12977v6#A2.SS1 "B.1 Perspective Taking ‣ Appendix B Additional Ablations ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning")). Our structured ToM representation outperforms its unstructured variant in complex Minecraft tasks ([Table 8](https://arxiv.org/html/2411.12977v6#A2.T8 "In B.1 Perspective Taking ‣ Appendix B Additional Ablations ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning")). Additionally, ablating the episodic memory component reveals that retaining past failures enhances performance ([Table 9](https://arxiv.org/html/2411.12977v6#A2.T9 "In B.2 Memory Components ‣ Appendix B Additional Ablations ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning"), [Section B.2](https://arxiv.org/html/2411.12977v6#A2.SS2 "B.2 Memory Components ‣ Appendix B Additional Ablations ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning")).

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Setting | Task | Mistral-7B | Mixtral-8x7B | Llama 3.1-8B |
| w/o interactions | Dirt | $37.5$% | $29.15$% | $12.5\%$ |
| instructive setting, human expert | Dirt | $+45.83$ | $+57.85$ | $+45.83$ |
| instructive setting, GPT-4 expert | Dirt | $+16.16$ | $+37.51$ | $+4.1$ |
| instructive setting, Llama 3.1-70B | Dirt | $+8.33\%$ | - | - |
| collaborative setting, no expert | Dirt | $-4.2$ | $+0$ | $-8.5$ |
| w/o interactions | Wood | $33.3$% | $50\%$ | $7\%$ |
| instructive setting, GPT-4 expert | Wood | $+12.52$ | $+20.8$ | $+5.5$ |
| instructive setting, Llama 3.1-70B | Wood | $+8.36\%$ | - | - |
| collaborative setting, no expert | Wood | $-12.5$ | $-4.15$ | $+0$ |

Table 2: Fraction of successful MindForge agents across $24$ individual trials; dirt and wood collection. Standard Voyager [[11](https://arxiv.org/html/2411.12977v6#bib.bib33)] setup: $4$ attempts per task, with a communication round interleaved where appropriate. See also [Figure 5](https://arxiv.org/html/2411.12977v6#S5.F5 "In Ablations ‣ 5.3 Introducing Collaboration: MindForge Agents ‣ 5 Experiments ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning") and [Figure 7](https://arxiv.org/html/2411.12977v6#S5.F7 "In Using a less constrained communication protocol ‣ 5.3 Introducing Collaboration: MindForge Agents ‣ 5 Experiments ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").

Figure 5: Instructive Setting (GPT-4); Dirt Collection. Performance scales with communication rounds. MindForge w/o interactions as a baseline. Actions are interleaved with communication rounds. Dashed (– –): extra collaboration rounds. $\triangle$ points: cold-start (4 actions) without interactions.

#### More Communication Rounds Improve Performance

Since communication is central to our framework, we examine the benefits of multiple rounds per task trial, assessing communication and perspective-taking amid escalating opportunities. We pair a GPT-4 MindForge expert with a Mixtral-8x7B MindForge weak agent. [Figure 5](https://arxiv.org/html/2411.12977v6#S5.F5 "In Ablations ‣ 5.3 Introducing Collaboration: MindForge Agents ‣ 5 Experiments ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning") demonstrates communication’s value through a sharp rise in task completion rates with additional rounds, while [Figure 6](https://arxiv.org/html/2411.12977v6#S5.F6 "In Using a less constrained communication protocol ‣ 5.3 Introducing Collaboration: MindForge Agents ‣ 5 Experiments ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning") illustrates the expert’s progressively accurate grasp of the partner’s mental state. Further evidence in [Section A.1](https://arxiv.org/html/2411.12977v6#A1.SS1 "A.1 Collaborative Experiments ‣ Appendix A Additional Experimental Results ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning") affirms communication’s importance in instructive and collaborative settings, even for demanding Minecraft tasks (“Craft a pickaxe” and “Mine Iron”) involving MindForge agents.

#### Using a less constrained communication protocol

We introduce the MindForge communication protocol in [Section 4.3](https://arxiv.org/html/2411.12977v6#S4.SS3 "4.3 Communication Medium ‣ 4 Method ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning"), initiating agent conversation only after task failure. To demonstrate the framework’s flexibility, we test two MindForge tasks with a dynamic communication setup, allowing the weak agent to choose whether to initiate communication when uncertain or attempt the task independently. [Table 6](https://arxiv.org/html/2411.12977v6#A1.T6 "In A.3 Alternative Communication Protocols ‣ Appendix A Additional Experimental Results ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning") ([Section A.3](https://arxiv.org/html/2411.12977v6#A1.SS3 "A.3 Alternative Communication Protocols ‣ Appendix A Additional Experimental Results ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning")) reveals comparable task completion rates between the default and flexible protocols, underscoring MindForge’s independence from specific communication designs. Qualitatively, weaker models like Mistral-7B consistently act confidently, never seeking help despite the option, while both models adeptly bypass assistance for tasks aligned with prior experience.

![Refer to caption](https://arxiv.org/html/2411.12977v6/improvements2.png)
  


Figure 6: Partner beliefs of the strong agent progressively improve as the number of communication rounds increase. Subsequently, these beliefs are used to reason throughout the conversation and take perspective.

Figure 7: Collaborative Setting (Mixtral); Dirt Collection. Blue: GPT-4–guided baseline. Dashed (– –): extra collaboration rounds.


Table 3: We follow Voyager’s methodology [[11](https://arxiv.org/html/2411.12977v6#bib.bib33)] for reporting the Minecraft tech-tree results. The reported scores represent the number of prompting iterations until the milestone was accomplished, averaged over three trials. The fewer the iterations, the more efficient the method. $N/A$ represents the agent being unable to solve the task. Best performance in terms of iterations required and number of times milestone is reached (out of $3$ trials).

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Method | Model | Wooden Tool | Stone Tool | Iron Tool |
| Voyager [[2023a](https://arxiv.org/html/2411.12977v6#bib.bib33)] | GPT-4 | $6\pm$ $2$ $(\nicefrac{{3}}{{3}})$ | $11\pm$$2$ $(\nicefrac{{3}}{{3}})$ | $21\pm$$7$ $(\nicefrac{{3}}{{3}})$ |
| ReAct [[2023a](https://arxiv.org/html/2411.12977v6#bib.bib33)] | GPT-4 | N/A $(\nicefrac{{0}}{{3}})$ | N/A $(\nicefrac{{0}}{{3}})$ | N/A $(\nicefrac{{0}}{{3}})$ |
| Reflexion [[2023a](https://arxiv.org/html/2411.12977v6#bib.bib33)] | GPT-4 | N/A $(\nicefrac{{0}}{{3}})$ | N/A $(\nicefrac{{0}}{{3}})$ | N/A $(\nicefrac{{0}}{{3}})$ |
| AutoGPT [[2023a](https://arxiv.org/html/2411.12977v6#bib.bib33)] | GPT-4 | $92\pm$$72$ ${(\nicefrac{{3}}{{3}})}$ | $92\pm$$72$ ${(\nicefrac{{3}}{{3}})}$ | $135\pm$$103$ ${(\nicefrac{{3}}{{3}})}$ |
| Voyager  (open-weight) | Mixtral 8$\times$7B | N/A $(\nicefrac{{0}}{{3}})$ | N/A $(\nicefrac{{0}}{{3}})$ | N/A $(\nicefrac{{0}}{{3}})$ |
| Llama 3.1-8B | N/A $(\nicefrac{{0}}{{3}})$ | N/A $(\nicefrac{{0}}{{3}})$ | N/A $(\nicefrac{{0}}{{3}})$ |
| Llama 3.1-70B | ${\color[rgb]{0.09,0.45,0.27}\mathbf{19\pm 9}}$ ${\color[rgb]{0.09,0.45,0.27}\mathbf{(\nicefrac{{3}}{{3}})}}$ | N/A $(\nicefrac{{0}}{{3}})$ | N/A $(\nicefrac{{0}}{{3}})$ |
| MindForge  (w/o collaboration) | Mixtral 8$\times$7B | $86\pm$$17$${\color[rgb]{0.09,0.45,0.27}\mathbf{(\nicefrac{{3}}{{3}})}}$ | N/A $(\nicefrac{{0}}{{3}})$ | N/A $(\nicefrac{{0}}{{3}})$ |
| Llama 3.1-8B | $120\pm$$0$ ${(\nicefrac{{1}}{{3}})}$ | N/A $(\nicefrac{{0}}{{3}})$ | N/A $(\nicefrac{{0}}{{3}})$ |
| Llama 3.1-70B | ${\color[rgb]{0.09,0.45,0.27}\mathbf{50}}$${\color[rgb]{0.09,0.45,0.27}\mathbf{\pm 17}}$ ${\color[rgb]{0.09,0.45,0.27}\mathbf{(\nicefrac{{3}}{{3}})}}$ | ${\color[rgb]{0.09,0.45,0.27}\mathbf{113}}$${\color[rgb]{0.09,0.45,0.27}\mathbf{\pm 24}}$ ${\color[rgb]{0.09,0.45,0.27}\mathbf{(\nicefrac{{2}}{{3}})}}$ | N/A $(\nicefrac{{0}}{{3}})$ |
| MindForge  (mixed-expertise collaboration) | Mixtral 8$\times$7B | ${\color[rgb]{0.09,0.45,0.27}\mathbf{51}}$${\color[rgb]{0.09,0.45,0.27}\mathbf{\pm 20}}$ ${\color[rgb]{0.09,0.45,0.27}\mathbf{(\nicefrac{{3}}{{3}})}}$ | N/A $(\nicefrac{{0}}{{3}})$ | N/A $(\nicefrac{{0}}{{3}})$ |
| Llama 3.1-8B | ${100}$ ${\pm 30}$ ${\color[rgb]{0.09,0.45,0.27}\mathbf{(\nicefrac{{3}}{{3}})}}$ | N/A $(\nicefrac{{0}}{{3}})$ | N/A $(\nicefrac{{0}}{{3}})$ |
| Llama 3.1-70B | ${62}$${\pm 14}$ ${\color[rgb]{0.09,0.45,0.27}\mathbf{(\nicefrac{{3}}{{3}})}}$ | ${\color[rgb]{0.09,0.45,0.27}\mathbf{79}}$${\color[rgb]{0.09,0.45,0.27}\mathbf{\pm 25}}$${\color[rgb]{0.09,0.45,0.27}\mathbf{(\nicefrac{{3}}{{3}})}}$ | ${\color[rgb]{0.09,0.45,0.27}\mathbf{120}}$${\color[rgb]{0.09,0.45,0.27}\mathbf{\pm 30}}$ ${\color[rgb]{0.09,0.45,0.27}\mathbf{(\nicefrac{{2}}{{3}})}}$ |
| MindForge  (mixed-expertise collab w/ Llama 3.1-70B) | Mixtral 8$\times$7B | ${\color[rgb]{0.09,0.45,0.27}\mathbf{65}}$${\color[rgb]{0.09,0.45,0.27}\mathbf{\pm 12}}$ $(\nicefrac{{3}}{{3}})$ | N/A $(\nicefrac{{0}}{{3}})$ | N/A $(\nicefrac{{0}}{{3}})$ |

### 5.4 MindForge Lifelong Learning

We evaluate MindForge’s lifelong learning capabilities against both GPT-4 and open-weight Voyager [[11](https://arxiv.org/html/2411.12977v6#bib.bib33)] variants. The progression through increasingly complex technological achievements (from wooden to diamond tools) provides a rigorous test-bed for assessing lifelong learning and collaboration abilities of MindForge. We follow the methodology from Voyager and evaluate performance on three key milestones: (1) wooden tools, (2) stone tools and (3) iron tools.

In line with the findings in [Table 1](https://arxiv.org/html/2411.12977v6#S5.T1 "In 5.2 Voyager With Open-Weight LLMs ‣ 5 Experiments ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning"), [Table 3](https://arxiv.org/html/2411.12977v6#S5.T3 "In Using a less constrained communication protocol ‣ 5.3 Introducing Collaboration: MindForge Agents ‣ 5 Experiments ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning") highlights the performance gap between GPT-4 powered Voyager and its open-weight variants, with only Llama 3.1-70B [[71](https://arxiv.org/html/2411.12977v6#bib.bib17)] reaching the wooden tools milestone. On the other hand, MindForge shows substantial improvement across the board both in terms of achieved milestones and efficiency (number of iterations). Notably, Llama 3.1-70B [[71](https://arxiv.org/html/2411.12977v6#bib.bib17)] powered MindForge achieves two additional tech-tree milestones, nearing the performance with the original GPT-4 powered Voyager [[11](https://arxiv.org/html/2411.12977v6#bib.bib33)]. We observe a steady increase in efficiency (number of iterations) as the size of the LLM increases: Llama 3.1-70B [[71](https://arxiv.org/html/2411.12977v6#bib.bib17)] powered MindForge is $1.62\times$ more efficient than its Llama 3.1-8B counterpart for reaching the wooden tools milestone, suggesting that larger models can better utilize the collaborative learning framework. Furthermore, to understand the impact of collaboration in a mixed-expertise collaborative setting, we experiment with a non-collaborative MindForge ablation. Notably, MindForge agents without collaboration require on average $15$ more prompting iterations to reach the wooden tools milestone and $34$ iterations to reach the stone tools milestone. Thus, the collaborative framework not only enhances task completion rates but also enables more efficient acquisition of complex skills. We further test the generalization capabilities of MindForge agents in [Section A.2](https://arxiv.org/html/2411.12977v6#A1.SS2 "A.2 Post-Collaboration and OOD tasks ‣ Appendix A Additional Experimental Results ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning") where we show how even after collaboration finishes, the agents can reuse the knowledge in out-of-distribution tasks.

### 5.5 MindForge Collaborative Learning Setting

While prior sections focused on instructive learning from stronger peers, we now consider a more challenging setup: collaboration between two MindForge agents of matched capabilities, each powered by the same type of open-weight LLM. This setting reflects mutual cultural learning without access to an expert where the agents must bootstrap improvements solely through interaction, thereby mimicking certain qualities of emergence.
Critically, we evaluate not individual trajectories, but instead focus on population-level performance: after $N$ rounds of communication, what fraction of agent pairs from the total pool succeed in completing the task? As shown in [Figure 5](https://arxiv.org/html/2411.12977v6#S5.F5 "In Ablations ‣ 5.3 Introducing Collaboration: MindForge Agents ‣ 5 Experiments ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning"), when agents begin from unprimed states, collaboration often leads to stagnation or even degradation which mirrors the “blind leading the blind” dynamic, where flawed mental models are mutually reinforced.

However, even minimal prior expert instruction—such as a single round of GPT-4–guided collaboration—can prime agents for more effective peer interaction, even if they still fail when acting alone. As shown in [Figure 7](https://arxiv.org/html/2411.12977v6#S5.F7 "In Using a less constrained communication protocol ‣ 5.3 Introducing Collaboration: MindForge Agents ‣ 5 Experiments ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning"), we pair Mixtral-8x7B agents that each received $N$ communication rounds of GPT-4 guided trial before interacting. We observe that the fraction of successful agents steadily increases with additional communication rounds between themselves (Mixtral agents). From a $62\%$ baseline population succeeding, we reach $79\%$ of the population succeeding after seven turns, showing a $17\%$ increment. This result reflects a form of test-time compute scaling, where richer interaction, not larger models, drives the emergent improvements across the group.

This also aligns with the Condorcet Jury Theorem [[73](https://arxiv.org/html/2411.12977v6#bib.bib71)], which predicts that collective decisions improve when individuals exceed a baseline level of competence. Here, we see a distributed variant of this principle in action: once agents cross a minimal competence threshold, the communication induced bootstrapping can yield reliable gains at the population level.

## 6 Conclusion

The MindForge framework demonstrates that cultural learning can overcome the limitations of open-weight LLMs in embodied environments. Integrating theory of mind, natural communication, and structured memory systems enables MindForge agents to learn from both mixed and matched expertise peers and overcome fundamental failure modes in perception and code generation. Our experiments show that collaboration significantly improves performance on lifelong learning scenarios, with agents collecting $2.3\times$ more unique items and achieving $3\times$ more tech-tree milestones when paired with expert agents. Crucially, in the collaborative setting, we show that the fraction of successful agents scales as a function of communication rounds; revealing emergent gains through perspective taking and interaction. These results suggest that social learning could reduce embodied AI’s dependence on large proprietary models, opening new paths for democratized agent development aligned with Green AI principles [[74](https://arxiv.org/html/2411.12977v6#bib.bib73)].

## Acknowledgments and Disclosure of Funding

We thank OpenAI’s Researcher Access Program for providing API credits that enabled more comprehensive experiments. We are also grateful to Dr. Max van Duijn for his constructive critique and insights on Theory of Mind, to Dr. Jesse Krijthe for his thoughtful input on the Condorcet Jury Theorem, and to members of the Pattern Recognition Lab at TU Delft for their valuable feedback.

## References

- [1]
  E. Kolve, R. Mottaghi, D. Gordon, Y. Zhu, A. Gupta, and A. Farhadi (2017)
  AI2-thor: an interactive 3d environment for visual ai.
  arXiv preprint arXiv:1712.05474.
  Cited by: [§1](https://arxiv.org/html/2411.12977v6#S1.p1.1 "1 Introduction ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [2]
  M. Savva, A. Kadian, O. Maksymets, Y. Zhao, E. Wijmans, B. Jain, J. Straub, J. Liu, V. Koltun, J. Malik, et al. (2019)
  Habitat: a platform for embodied ai research.
  In Proceedings of the IEEE/CVF International Conference on Computer Vision,
  pp. 9339–9347.
  Cited by: [§1](https://arxiv.org/html/2411.12977v6#S1.p1.1 "1 Introduction ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [3]
  X. Puig, K. Ra, M. Boben, J. Li, T. Wang, S. Fidler, and A. Torralba (2018)
  VirtualHome: simulating household activities via programs.
  Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition, pp. 8494–8502.
  Cited by: [§1](https://arxiv.org/html/2411.12977v6#S1.p1.1 "1 Introduction ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [4]
  M. Shridhar, J. Thomason, D. Gordon, Y. Bisk, W. Han, R. Mottaghi, L. Zettlemoyer, and D. Fox (2020)
  ALFRED: a benchmark for interpreting grounded instructions for everyday tasks.
  In Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition,
  pp. 10740–10749.
  Cited by: [§1](https://arxiv.org/html/2411.12977v6#S1.p1.1 "1 Introduction ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [5]
  J. Schulman, F. Wolski, P. Dhariwal, A. Radford, and O. Klimov (2017)
  Proximal policy optimization algorithms.
  arXiv preprint arXiv:1707.06347.
  Cited by: [§1](https://arxiv.org/html/2411.12977v6#S1.p1.1 "1 Introduction ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [6]
  D. Hafner, J. Pasukonis, J. Ba, and T. Lillicrap (2023)
  Mastering diverse domains through world models.
  arXiv preprint arXiv:2301.04104.
  Cited by: [§1](https://arxiv.org/html/2411.12977v6#S1.p1.1 "1 Introduction ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [7]
  M. Zare, P. M. Kebria, A. Khosravi, and S. Nahavandi (2024)
  A survey of imitation learning: algorithms, recent developments, and challenges.
  IEEE Transactions on Cybernetics.
  Cited by: [§1](https://arxiv.org/html/2411.12977v6#S1.p1.1 "1 Introduction ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [8]
  K. Cobbe, O. Klimov, C. Hesse, T. Kim, and J. Schulman (2019)
  Quantifying generalization in reinforcement learning.
  In International conference on machine learning,
  pp. 1282–1289.
  Cited by: [§1](https://arxiv.org/html/2411.12977v6#S1.p1.1 "1 Introduction ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [9]
  G. I. Parisi, R. Kemker, J. L. Part, C. Kanan, and S. Wermter (2019)
  Continual lifelong learning with neural networks: a review.
  Neural Networks 113, pp. 54–71.
  Cited by: [§1](https://arxiv.org/html/2411.12977v6#S1.p1.1 "1 Introduction ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [10]
  L. Wang, X. Zhang, H. Su, and J. Zhu (2023)
  A comprehensive survey of continual learning: theory, method and application.
  arXiv preprint arXiv:2302.00487.
  Cited by: [§1](https://arxiv.org/html/2411.12977v6#S1.p1.1 "1 Introduction ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [11]
  G. Wang, Y. Xie, Y. Jiang, A. Mandlekar, C. Xiao, Y. Zhu, L. Fan, and A. Anandkumar (2023)
  Voyager: an open-ended embodied agent with large language models.
  arXiv preprint arXiv:2305.16291.
  Cited by: [§B.2](https://arxiv.org/html/2411.12977v6#A2.SS2.p1.1 "B.2 Memory Components ‣ Appendix B Additional Ablations ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning"),
  [§C.3](https://arxiv.org/html/2411.12977v6#A3.SS3.p1.1 "C.3 Procedural Memory ‣ Appendix C Implementation details ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning"),
  [§C.4](https://arxiv.org/html/2411.12977v6#A3.SS4.p1.1 "C.4 Semantic Memory ‣ Appendix C Implementation details ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning"),
  [§1](https://arxiv.org/html/2411.12977v6#S1.p1.1 "1 Introduction ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning"),
  [§1](https://arxiv.org/html/2411.12977v6#S1.p2.1 "1 Introduction ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning"),
  [§1](https://arxiv.org/html/2411.12977v6#S1.p5.1 "1 Introduction ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning"),
  [§2](https://arxiv.org/html/2411.12977v6#S2.SS0.SSS0.Px2.p1.1 "LLM-based Multi-Agent Systems ‣ 2 Related Work ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning"),
  [§4.4](https://arxiv.org/html/2411.12977v6#S4.SS4.p4.1 "4.4 Memory Subsystems ‣ 4 Method ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning"),
  [§5.1](https://arxiv.org/html/2411.12977v6#S5.SS1.p1.1 "5.1 Experimental Setup ‣ 5 Experiments ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning"),
  [§5.2](https://arxiv.org/html/2411.12977v6#S5.SS2.SSS0.Px1.p1.1 "Primary Failure Cases ‣ 5.2 Voyager With Open-Weight LLMs ‣ 5 Experiments ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning"),
  [§5.2](https://arxiv.org/html/2411.12977v6#S5.SS2.p1.1 "5.2 Voyager With Open-Weight LLMs ‣ 5 Experiments ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning"),
  [§5.4](https://arxiv.org/html/2411.12977v6#S5.SS4.p1.1 "5.4 MindForge Lifelong Learning ‣ 5 Experiments ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning"),
  [§5.4](https://arxiv.org/html/2411.12977v6#S5.SS4.p2.1 "5.4 MindForge Lifelong Learning ‣ 5 Experiments ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning"),
  [Table 1](https://arxiv.org/html/2411.12977v6#S5.T1 "In 5.2 Voyager With Open-Weight LLMs ‣ 5 Experiments ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning"),
  [Table 1](https://arxiv.org/html/2411.12977v6#S5.T1.11 "In 5.2 Voyager With Open-Weight LLMs ‣ 5 Experiments ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning"),
  [Table 2](https://arxiv.org/html/2411.12977v6#S5.T2 "In Figure 5 ‣ Ablations ‣ 5.3 Introducing Collaboration: MindForge Agents ‣ 5 Experiments ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning"),
  [Table 2](https://arxiv.org/html/2411.12977v6#S5.T2.6 "In Figure 5 ‣ Ablations ‣ 5.3 Introducing Collaboration: MindForge Agents ‣ 5 Experiments ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning"),
  [Table 3](https://arxiv.org/html/2411.12977v6#S5.T3 "In Using a less constrained communication protocol ‣ 5.3 Introducing Collaboration: MindForge Agents ‣ 5 Experiments ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning"),
  [Table 3](https://arxiv.org/html/2411.12977v6#S5.T3.13 "In Using a less constrained communication protocol ‣ 5.3 Introducing Collaboration: MindForge Agents ‣ 5 Experiments ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning"),
  [Table 3](https://arxiv.org/html/2411.12977v6#S5.T3.14.2.1.1 "In Using a less constrained communication protocol ‣ 5.3 Introducing Collaboration: MindForge Agents ‣ 5 Experiments ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning"),
  [Table 3](https://arxiv.org/html/2411.12977v6#S5.T3.14.3.1.1 "In Using a less constrained communication protocol ‣ 5.3 Introducing Collaboration: MindForge Agents ‣ 5 Experiments ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning"),
  [Table 3](https://arxiv.org/html/2411.12977v6#S5.T3.14.4.1.1 "In Using a less constrained communication protocol ‣ 5.3 Introducing Collaboration: MindForge Agents ‣ 5 Experiments ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning"),
  [Table 3](https://arxiv.org/html/2411.12977v6#S5.T3.14.5.1.1 "In Using a less constrained communication protocol ‣ 5.3 Introducing Collaboration: MindForge Agents ‣ 5 Experiments ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [12]
  N. K. Humphrey (1976)
  The social function of intellect.
  Growing points in ethology, pp. 303–317.
  Cited by: [§1](https://arxiv.org/html/2411.12977v6#S1.p2.1 "1 Introduction ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [13]
  R. I. Dunbar (1998)
  The social brain hypothesis.
  Evolutionary Anthropology: Issues, News, and Reviews 6 (5), pp. 178–190.
  Cited by: [§1](https://arxiv.org/html/2411.12977v6#S1.p2.1 "1 Introduction ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [14]
  M. Tomasello, A. C. Kruger, and H. H. Ratner (1993)
  Cultural learning.
  Behavioral and brain sciences 16 (3), pp. 495–511.
  Cited by: [§1](https://arxiv.org/html/2411.12977v6#S1.p3.1 "1 Introduction ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning"),
  [§4.2](https://arxiv.org/html/2411.12977v6#S4.SS2.p2.1 "4.2 Theory of Mind: Modeling Partner Perspectives ‣ 4 Method ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning"),
  [§5.2](https://arxiv.org/html/2411.12977v6#S5.SS2.SSS0.Px2.p1.1 "Fine-Tuning Does Not Help ‣ 5.2 Voyager With Open-Weight LLMs ‣ 5 Experiments ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [15]
  M. Tomasello (2016)
  Cultural learning redux.
  Child development 87 (3), pp. 643–653.
  Cited by: [§1](https://arxiv.org/html/2411.12977v6#S1.p3.1 "1 Introduction ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning"),
  [§1](https://arxiv.org/html/2411.12977v6#S1.p5.1 "1 Introduction ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning"),
  [§4.2](https://arxiv.org/html/2411.12977v6#S4.SS2.p2.1 "4.2 Theory of Mind: Modeling Partner Perspectives ‣ 4 Method ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning"),
  [§5.2](https://arxiv.org/html/2411.12977v6#S5.SS2.SSS0.Px2.p1.1 "Fine-Tuning Does Not Help ‣ 5.2 Voyager With Open-Weight LLMs ‣ 5 Experiments ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning"),
  [§5.3](https://arxiv.org/html/2411.12977v6#S5.SS3.p1.1 "5.3 Introducing Collaboration: MindForge Agents ‣ 5 Experiments ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [16]
  D. Premack and G. Woodruff (1978)
  Does the chimpanzee have a theory of mind?.
  Behavioral and brain sciences 1 (4), pp. 515–526.
  Cited by: [§1](https://arxiv.org/html/2411.12977v6#S1.p3.1 "1 Introduction ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [17]
  S. Baron-Cohen (1999)
  The evolution of a theory of mind.
  In The descent of mind: Psychological perspectives on hominid
  evolution (pp, M. C. Corballis (Ed.),
  Vol. 361, pp. 261–277.
  External Links: [Link](https://psycnet.apa.org/record/1999-04113-013)
  Cited by: [§1](https://arxiv.org/html/2411.12977v6#S1.p3.1 "1 Introduction ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [18]
  M. Devaine, G. Hollard, and J. Daunizeau (2014)
  The social bayesian brain: does mentalizing make a difference when we learn?.
  PLoS computational biology 10 (12), pp. e1003992.
  Cited by: [§1](https://arxiv.org/html/2411.12977v6#S1.p3.1 "1 Introduction ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [19]
  G. Hinton (2015)
  Distilling the knowledge in a neural network.
  arXiv preprint arXiv:1503.02531.
  Cited by: [§1](https://arxiv.org/html/2411.12977v6#S1.p3.1 "1 Introduction ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [20]
  C. Snell, J. Lee, K. Xu, and A. Kumar (2024)
  Scaling llm test-time compute optimally can be more effective than scaling model parameters.
  arXiv preprint arXiv:2408.03314.
  Cited by: [§1](https://arxiv.org/html/2411.12977v6#S1.p3.1 "1 Introduction ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [21]
  H. Zhang, W. Du, J. Shan, Q. Zhou, Y. Du, J. B. Tenenbaum, T. Shu, and C. Gan (2023)
  Building cooperative embodied agents modularly with large language models.
  arXiv preprint arXiv:2307.02485.
  Cited by: [§1](https://arxiv.org/html/2411.12977v6#S1.p3.1 "1 Introduction ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning"),
  [§2](https://arxiv.org/html/2411.12977v6#S2.SS0.SSS0.Px2.p1.1 "LLM-based Multi-Agent Systems ‣ 2 Related Work ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [22]
  Y. Du, S. Li, A. Torralba, J. B. Tenenbaum, and I. Mordatch (2023)
  Improving factuality and reasoning in language models through multiagent debate.
  arXiv preprint arXiv:2305.14325.
  Cited by: [§1](https://arxiv.org/html/2411.12977v6#S1.p3.1 "1 Introduction ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning"),
  [§2](https://arxiv.org/html/2411.12977v6#S2.SS0.SSS0.Px2.p1.1 "LLM-based Multi-Agent Systems ‣ 2 Related Work ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [23]
  K. Gandhi, J. Fränken, T. Gerstenberg, and N. Goodman (2024)
  Understanding social reasoning in language models with language models.
  Advances in Neural Information Processing Systems 36.
  Cited by: [§1](https://arxiv.org/html/2411.12977v6#S1.p4.1 "1 Introduction ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning"),
  [§2](https://arxiv.org/html/2411.12977v6#S2.SS0.SSS0.Px1.p1.1 "Theory of Mind in Embodied Agents ‣ 2 Related Work ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning"),
  [§3](https://arxiv.org/html/2411.12977v6#S3.SS0.SSS0.Px2.p1.1 "BigToM Causal Template ‣ 3 Background ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning"),
  [§4.1](https://arxiv.org/html/2411.12977v6#S4.SS1.p2.1 "4.1 Structured Representation of Own Mental States: Beliefs, Desires, and Intentions ‣ 4 Method ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [24]
  J. E. Laird (2019)
  The soar cognitive architecture.
   MIT press.
  Cited by: [§1](https://arxiv.org/html/2411.12977v6#S1.p4.1 "1 Introduction ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [25]
  N. Rabinowitz, F. Perbet, F. Song, C. Zhang, S. A. Eslami, and M. Botvinick (2018)
  Machine theory of mind.
  In International conference on machine learning,
  pp. 4218–4227.
  Cited by: [§2](https://arxiv.org/html/2411.12977v6#S2.SS0.SSS0.Px1.p1.1 "Theory of Mind in Embodied Agents ‣ 2 Related Work ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [26]
  Y. Chuang, H. Hung, E. Gamborino, J. O. S. Goh, T. Huang, Y. Chang, S. Yeh, and L. Fu (2020)
  Using machine theory of mind to learn agent social network structures from observed interactive behaviors with targets.
  In 2020 29th IEEE International Conference on Robot and Human Interactive Communication (RO-MAN),
  pp. 1013–1019.
  Cited by: [§2](https://arxiv.org/html/2411.12977v6#S2.SS0.SSS0.Px1.p1.1 "Theory of Mind in Embodied Agents ‣ 2 Related Work ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [27]
  T. Shu, A. Bhandwaldar, C. Gan, K. Smith, S. Liu, D. Gutfreund, E. Spelke, J. Tenenbaum, and T. Ullman (2021)
  Agent: a benchmark for core psychological reasoning.
  In International conference on machine learning,
  pp. 9614–9625.
  Cited by: [§2](https://arxiv.org/html/2411.12977v6#S2.SS0.SSS0.Px1.p1.1 "Theory of Mind in Embodied Agents ‣ 2 Related Work ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [28]
  F. Grassiotto and P. D. P. Costa (2021)
  CogToM: a cognitive architecture implementation of the theory of mind..
  In ICAART (2),
  pp. 546–553.
  Cited by: [§2](https://arxiv.org/html/2411.12977v6#S2.SS0.SSS0.Px1.p1.1 "Theory of Mind in Embodied Agents ‣ 2 Related Work ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [29]
  C. Baker, R. Saxe, and J. Tenenbaum (2011)
  Bayesian theory of mind: modeling joint belief-desire attribution.
  In Proceedings of the annual meeting of the cognitive science society,
  Vol. 33.
  Cited by: [§2](https://arxiv.org/html/2411.12977v6#S2.SS0.SSS0.Px1.p1.1 "Theory of Mind in Embodied Agents ‣ 2 Related Work ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [30]
  M. Kosinski (2023)
  Theory of mind might have spontaneously emerged in large language models.
  arXiv preprint arXiv:2302.02083.
  Cited by: [§2](https://arxiv.org/html/2411.12977v6#S2.SS0.SSS0.Px1.p1.1 "Theory of Mind in Embodied Agents ‣ 2 Related Work ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [31]
  S. Bubeck, V. Chandrasekaran, R. Eldan, J. Gehrke, E. Horvitz, E. Kamar, P. Lee, Y. T. Lee, Y. Li, S. Lundberg, et al. (2023)
  Sparks of artificial general intelligence: early experiments with gpt-4.
  arXiv preprint arXiv:2303.12712.
  Cited by: [§2](https://arxiv.org/html/2411.12977v6#S2.SS0.SSS0.Px1.p1.1 "Theory of Mind in Embodied Agents ‣ 2 Related Work ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [32]
  T. Ullman (2023)
  Large language models fail on trivial alterations to theory-of-mind tasks.
  arXiv preprint arXiv:2302.08399.
  Cited by: [§2](https://arxiv.org/html/2411.12977v6#S2.SS0.SSS0.Px1.p1.1 "Theory of Mind in Embodied Agents ‣ 2 Related Work ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [33]
  A. Wilf, S. S. Lee, P. P. Liang, and L. Morency (2023)
  Think twice: perspective-taking improves large language models’ theory-of-mind capabilities.
  arXiv preprint arXiv:2311.10227.
  Cited by: [§B.1](https://arxiv.org/html/2411.12977v6#A2.SS1.p3.1 "B.1 Perspective Taking ‣ Appendix B Additional Ablations ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning"),
  [Table 8](https://arxiv.org/html/2411.12977v6#A2.T8 "In B.1 Perspective Taking ‣ Appendix B Additional Ablations ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning"),
  [Table 8](https://arxiv.org/html/2411.12977v6#A2.T8.4 "In B.1 Perspective Taking ‣ Appendix B Additional Ablations ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning"),
  [§2](https://arxiv.org/html/2411.12977v6#S2.SS0.SSS0.Px1.p1.1 "Theory of Mind in Embodied Agents ‣ 2 Related Work ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [34]
  P. Zhou, A. Madaan, S. P. Potharaju, A. Gupta, K. R. McKee, A. Holtzman, J. Pujara, X. Ren, S. Mishra, A. Nematzadeh, et al. (2023)
  How far are large language models from agents with theory-of-mind?.
  arXiv preprint arXiv:2310.03051.
  Cited by: [§2](https://arxiv.org/html/2411.12977v6#S2.SS0.SSS0.Px1.p1.1 "Theory of Mind in Embodied Agents ‣ 2 Related Work ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [35]
  M. Sclar, S. Kumar, P. West, A. Suhr, Y. Choi, and Y. Tsvetkov (2023)
  Minding language models’(lack of) theory of mind: a plug-and-play multi-character belief tracker.
  arXiv preprint arXiv:2306.00924.
  Cited by: [§2](https://arxiv.org/html/2411.12977v6#S2.SS0.SSS0.Px1.p1.1 "Theory of Mind in Embodied Agents ‣ 2 Related Work ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [36]
  S. Hao, Y. Gu, H. Ma, J. J. Hong, Z. Wang, D. Z. Wang, and Z. Hu (2023)
  Reasoning with language model is planning with world model.
  arXiv preprint arXiv:2305.14992.
  Cited by: [§2](https://arxiv.org/html/2411.12977v6#S2.SS0.SSS0.Px1.p1.1 "Theory of Mind in Embodied Agents ‣ 2 Related Work ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [37]
  C. Jin, Y. Wu, J. Cao, J. Xiang, Y. Kuo, Z. Hu, T. Ullman, A. Torralba, J. B. Tenenbaum, and T. Shu (2024)
  Mmtom-qa: multimodal theory of mind question answering.
  arXiv preprint arXiv:2401.08743.
  Cited by: [§2](https://arxiv.org/html/2411.12977v6#S2.SS0.SSS0.Px1.p1.1 "Theory of Mind in Embodied Agents ‣ 2 Related Work ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [38]
  H. Li, Y. Q. Chong, S. Stepputtis, J. Campbell, D. Hughes, M. Lewis, and K. Sycara (2023)
  Theory of mind for multi-agent collaboration via large language models.
  arXiv preprint arXiv:2310.10701.
  Cited by: [§2](https://arxiv.org/html/2411.12977v6#S2.SS0.SSS0.Px1.p1.1 "Theory of Mind in Embodied Agents ‣ 2 Related Work ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [39]
  M. Ahn, A. Brohan, N. Brown, Y. Chebotar, O. Cortes, B. David, C. Finn, C. Fu, K. Gopalakrishnan, K. Hausman, et al. (2022)
  Do as i can, not as i say: grounding language in robotic affordances.
  arXiv preprint arXiv:2204.01691.
  Cited by: [§2](https://arxiv.org/html/2411.12977v6#S2.SS0.SSS0.Px2.p1.1 "LLM-based Multi-Agent Systems ‣ 2 Related Work ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [40]
  K. Lin, C. Agia, T. Migimatsu, M. Pavone, and J. Bohg (2023)
  Text2motion: from natural language instructions to feasible plans.
  Autonomous Robots 47 (8), pp. 1345–1365.
  Cited by: [§2](https://arxiv.org/html/2411.12977v6#S2.SS0.SSS0.Px2.p1.1 "LLM-based Multi-Agent Systems ‣ 2 Related Work ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [41]
  H. Zhang, Z. Wang, Q. Lyu, Z. Zhang, S. Chen, T. Shu, Y. Du, and C. Gan (2024)
  COMBO: compositional world models for embodied multi-agent cooperation.
  arXiv preprint arXiv:2404.10775.
  Cited by: [§2](https://arxiv.org/html/2411.12977v6#S2.SS0.SSS0.Px2.p1.1 "LLM-based Multi-Agent Systems ‣ 2 Related Work ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [42]
  Y. Talebirad and A. Nadiri (2023)
  Multi-agent collaboration: harnessing the power of intelligent llm agents.
  arXiv preprint arXiv:2306.03314.
  Cited by: [§2](https://arxiv.org/html/2411.12977v6#S2.SS0.SSS0.Px2.p1.1 "LLM-based Multi-Agent Systems ‣ 2 Related Work ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [43]
  A. S. Vezhnevets, J. P. Agapiou, A. Aharon, R. Ziv, J. Matyas, E. A. Duéñez-Guzmán, W. A. Cunningham, S. Osindero, D. Karmon, and J. Z. Leibo (2023)
  Generative agent-based modeling with actions grounded in physical, social, or digital space using concordia.
  arXiv preprint arXiv:2312.03664.
  Cited by: [§2](https://arxiv.org/html/2411.12977v6#S2.SS0.SSS0.Px2.p1.1 "LLM-based Multi-Agent Systems ‣ 2 Related Work ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [44]
  I. White, K. Nottingham, A. Maniar, M. Robinson, H. Lillemark, M. Maheshwari, L. Qin, and P. Ammanabrolu (2025)
  Collaborating action by action: a multi-agent llm framework for embodied reasoning.
  arXiv preprint arXiv:2504.17950.
  Cited by: [§2](https://arxiv.org/html/2411.12977v6#S2.SS0.SSS0.Px2.p1.1 "LLM-based Multi-Agent Systems ‣ 2 Related Work ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [45]
  A. Zhao, D. Huang, Q. Xu, M. Lin, Y. Liu, and G. Huang (2024)
  Expel: llm agents are experiential learners.
  In Proceedings of the AAAI Conference on Artificial Intelligence,
  Vol. 38, pp. 19632–19642.
  Cited by: [§2](https://arxiv.org/html/2411.12977v6#S2.SS0.SSS0.Px3.p1.1 "Single-agent Frameworks ‣ 2 Related Work ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [46]
  B. P. Majumder, B. D. Mishra, P. Jansen, O. Tafjord, N. Tandon, L. Zhang, C. Callison-Burch, and P. Clark (2023)
  Clin: a continually learning language agent for rapid task adaptation and generalization.
  arXiv preprint arXiv:2310.10134.
  Cited by: [§2](https://arxiv.org/html/2411.12977v6#S2.SS0.SSS0.Px3.p1.1 "Single-agent Frameworks ‣ 2 Related Work ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [47]
  Z. Wang, S. Cai, G. Chen, A. Liu, X. Ma, and Y. Liang (2023)
  Describe, explain, plan and select: interactive planning with large language models enables open-world multi-task agents.
  arXiv preprint arXiv:2302.01560.
  Cited by: [§2](https://arxiv.org/html/2411.12977v6#S2.SS0.SSS0.Px3.p1.1 "Single-agent Frameworks ‣ 2 Related Work ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [48]
  A. Prasad, A. Koller, M. Hartmann, P. Clark, A. Sabharwal, M. Bansal, and T. Khot (2023)
  Adapt: as-needed decomposition and planning with language models.
  arXiv preprint arXiv:2311.05772.
  Cited by: [§2](https://arxiv.org/html/2411.12977v6#S2.SS0.SSS0.Px3.p1.1 "Single-agent Frameworks ‣ 2 Related Work ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [49]
  K. Nottingham, B. P. Majumder, B. D. Mishra, S. Singh, P. Clark, and R. Fox (2024)
  Skill set optimization: reinforcing language model behavior via transferable skills.
  arXiv preprint arXiv:2402.03244.
  Cited by: [§2](https://arxiv.org/html/2411.12977v6#S2.SS0.SSS0.Px3.p1.1 "Single-agent Frameworks ‣ 2 Related Work ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [50]
  S. Yu and C. Lu (2024)
  ADAM: an embodied causal agent in open-world environments.
  arXiv preprint arXiv:2410.22194.
  Cited by: [§2](https://arxiv.org/html/2411.12977v6#S2.SS0.SSS0.Px3.p1.1 "Single-agent Frameworks ‣ 2 Related Work ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [51]
  Z. Li, Y. Xie, R. Shao, G. Chen, D. Jiang, and L. Nie (2024)
  Optimus-1: hybrid multimodal memory empowered agents excel in long-horizon tasks.
  arXiv preprint arXiv:2408.03615.
  Cited by: [§2](https://arxiv.org/html/2411.12977v6#S2.SS0.SSS0.Px3.p1.1 "Single-agent Frameworks ‣ 2 Related Work ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [52]
  H. M. Wellman and J. D. Woolley (1990)
  From simple desires to ordinary beliefs: the early development of everyday psychology.
  Cognition 35 (3), pp. 245–275 (en).
  External Links: [Document](https://dx.doi.org/10.1016/0010-0277%2890%2990024-e),
  [Link](http://dx.doi.org/10.1016/0010-0277(90)90024-E)
  Cited by: [§4.1](https://arxiv.org/html/2411.12977v6#S4.SS1.p1.1 "4.1 Structured Representation of Own Mental States: Beliefs, Desires, and Intentions ‣ 4 Method ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [53]
  J. Perner (1993)
  Understanding the Representational Mind.
   The MIT Press.
  External Links: [Document](https://dx.doi.org/10.7551/mitpress/6988.001.0001),
  ISBN 9780262316033,
  [Link](https://doi.org/10.7551/mitpress/6988.001.0001)
  Cited by: [§4.1](https://arxiv.org/html/2411.12977v6#S4.SS1.p1.1 "4.1 Structured Representation of Own Mental States: Beliefs, Desires, and Intentions ‣ 4 Method ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [54]
  K. N. Ochsner, R. D. Ray, J. C. Cooper, E. R. Robertson, S. Chopra, J. D. E. Gabrieli, and J. J. Gross (2004)
  For better or for worse: neural systems supporting the cognitive down- and up-regulation of negative emotion.
  Neuroimage 23 (2), pp. 483–499 (en).
  External Links: [Document](https://dx.doi.org/10.1016/j.neuroimage.2004.06.030),
  [Link](http://dx.doi.org/10.1016/j.neuroimage.2004.06.030)
  Cited by: [§4.1](https://arxiv.org/html/2411.12977v6#S4.SS1.p1.1 "4.1 Structured Representation of Own Mental States: Beliefs, Desires, and Intentions ‣ 4 Method ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [55]
  R. Saxe and N. Kanwisher (2003)
  People thinking about thinking people. the role of the temporo-parietal junction in “theory of mind”.
  Neuroimage 19 (4), pp. 1835–1842 (en).
  External Links: [Document](https://dx.doi.org/10.1016/s1053-8119%2803%2900230-1),
  [Link](https://pubmed.ncbi.nlm.nih.gov/12948738/)
  Cited by: [§4.1](https://arxiv.org/html/2411.12977v6#S4.SS1.p1.1 "4.1 Structured Representation of Own Mental States: Beliefs, Desires, and Intentions ‣ 4 Method ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [56]
  A. S. Rao M. P. Georgeff et al. (1995)
  BDI agents: from theory to practice..
  In Icmas,
  Vol. 95, pp. 312–319.
  Cited by: [§4.1](https://arxiv.org/html/2411.12977v6#S4.SS1.p2.1 "4.1 Structured Representation of Own Mental States: Beliefs, Desires, and Intentions ‣ 4 Method ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [57]
  H. Hung, L. Li, J. Molhoek, and J. Zhou (2024)
  The discontent with intent estimation in-the-wild: the case for unrealized intentions.
  In Extended Abstracts of the CHI Conference on Human Factors in Computing Systems,
  pp. 1–9.
  Cited by: [§4.1](https://arxiv.org/html/2411.12977v6#S4.SS1.p2.1 "4.1 Structured Representation of Own Mental States: Beliefs, Desires, and Intentions ‣ 4 Method ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [58]
  PrismarineJS (2021)
  Mineflayer.
  External Links: [Link](https://prismarinejs.github.io/mineflayer/)
  Cited by: [§4.3](https://arxiv.org/html/2411.12977v6#S4.SS3.p1.1 "4.3 Communication Medium ‣ 4 Method ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning"),
  [§5.1](https://arxiv.org/html/2411.12977v6#S5.SS1.p1.1 "5.1 Experimental Setup ‣ 5 Experiments ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning"),
  [§5.2](https://arxiv.org/html/2411.12977v6#S5.SS2.SSS0.Px1.p1.1 "Primary Failure Cases ‣ 5.2 Voyager With Open-Weight LLMs ‣ 5 Experiments ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [59]
  A. M. Bornstein, M. W. Khaw, D. Shohamy, and N. D. Daw (2017)
  Reminders of past choices bias decisions for reward in humans.
  Nature Communications 8 (1), pp. 15958.
  Cited by: [§4.4](https://arxiv.org/html/2411.12977v6#S4.SS4.p2.1 "4.4 Memory Subsystems ‣ 4 Method ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [60]
  S. Klein, L. Cosmides, C. Gangi, B. Jackson, J. Tooby, and K. A. Costabile (2009)
  Evolution and episodic memory: an analysis and demonstration of a social function of episodic recollection.
  Soc. Cogn. 27 (2), pp. 283–319.
  External Links: [Document](https://dx.doi.org/10.1521/SOCO.2009.27.2.283),
  [Link](http://guilfordjournals.com/doi/10.1521/soco.2009.27.2.283)
  Cited by: [§4.4](https://arxiv.org/html/2411.12977v6#S4.SS4.p2.1 "4.4 Memory Subsystems ‣ 4 Method ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning"),
  [§4.4](https://arxiv.org/html/2411.12977v6#S4.SS4.p3.1 "4.4 Memory Subsystems ‣ 4 Method ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [61]
  S. B. Klein, J. Loftus, and J. F. Kihlstrom (1993)
  Self-knowledge of an amnesic patient: toward a neuropsychology of personality and social psychology.
  b; Tulving 1983, pp. 1989.
  Cited by: [§4.4](https://arxiv.org/html/2411.12977v6#S4.SS4.p2.1 "4.4 Memory Subsystems ‣ 4 Method ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning"),
  [§4.4](https://arxiv.org/html/2411.12977v6#S4.SS4.p3.1 "4.4 Memory Subsystems ‣ 4 Method ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [62]
  P. Das, S. Chaudhury, E. Nelson, I. Melnyk, S. Swaminathan, S. Dai, A. Lozano, G. Kollias, V. Chenthamarakshan, S. Dan, et al. (2024)
  Larimar: large language models with episodic memory control.
  arXiv preprint arXiv:2403.11901.
  Cited by: [§4.4](https://arxiv.org/html/2411.12977v6#S4.SS4.p2.1 "4.4 Memory Subsystems ‣ 4 Method ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [63]
  J. R. Binder and R. H. Desai (2011)
  The neurobiology of semantic memory.
  Trends Cogn. Sci. 15 (11), pp. 527–536 (en).
  External Links: [Document](https://dx.doi.org/10.1016/j.tics.2011.10.001),
  [Link](http://dx.doi.org/10.1016/j.tics.2011.10.001)
  Cited by: [§4.4](https://arxiv.org/html/2411.12977v6#S4.SS4.p3.1 "4.4 Memory Subsystems ‣ 4 Method ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [64]
  L. Fan, G. Wang, Y. Jiang, A. Mandlekar, Y. Yang, H. Zhu, A. Tang, D. Huang, Y. Zhu, and A. Anandkumar (2022)
  Minedojo: building open-ended embodied agents with internet-scale knowledge.
  Advances in Neural Information Processing Systems 35, pp. 18343–18362.
  Cited by: [§E.2](https://arxiv.org/html/2411.12977v6#A5.SS2.p1.1 "E.2 Wiki Data and Documentation ‣ Appendix E Fine-tuning setup ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning"),
  [§5.1](https://arxiv.org/html/2411.12977v6#S5.SS1.p1.1 "5.1 Experimental Setup ‣ 5 Experiments ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [65]
  O. Khattab, A. Singhvi, P. Maheshwari, Z. Zhang, K. Santhanam, S. Vardhamanan, S. Haq, A. Sharma, T. T. Joshi, H. Moazam, H. Miller, M. Zaharia, and C. Potts (2024)
  DSPy: compiling declarative language model calls into self-improving pipelines.
  Cited by: [§5.1](https://arxiv.org/html/2411.12977v6#S5.SS1.p1.1 "5.1 Experimental Setup ‣ 5 Experiments ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [66]
  O. Khattab, K. Santhanam, X. L. Li, D. Hall, P. Liang, C. Potts, and M. Zaharia (2022)
  Demonstrate-search-predict: composing retrieval and language models for knowledge-intensive NLP.
  arXiv preprint arXiv:2212.14024.
  Cited by: [§5.1](https://arxiv.org/html/2411.12977v6#S5.SS1.p1.1 "5.1 Experimental Setup ‣ 5 Experiments ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [67]
  LangChain (2024)
  LangChain documentation.
  Note: Accessed: 2024-11-19
  External Links: [Link](https://python.langchain.com/)
  Cited by: [§C.2](https://arxiv.org/html/2411.12977v6#A3.SS2.p1.1 "C.2 Episodic Memory ‣ Appendix C Implementation details ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning"),
  [§5.1](https://arxiv.org/html/2411.12977v6#S5.SS1.p1.1 "5.1 Experimental Setup ‣ 5 Experiments ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [68]
  J. Achiam, S. Adler, S. Agarwal, L. Ahmad, I. Akkaya, F. L. Aleman, D. Almeida, J. Altenschmidt, S. Altman, S. Anadkat, et al. (2023)
  Gpt-4 technical report.
  arXiv preprint arXiv:2303.08774.
  Cited by: [§5.2](https://arxiv.org/html/2411.12977v6#S5.SS2.p1.1 "5.2 Voyager With Open-Weight LLMs ‣ 5 Experiments ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [69]
  A. Q. Jiang, A. Sablayrolles, A. Mensch, C. Bamford, D. S. Chaplot, D. de las Casas, F. Bressand, G. Lengyel, G. Lample, L. Saulnier, L. R. Lavaud, M. Lachaux, P. Stock, T. L. Scao, T. Lavril, T. Wang, T. Lacroix, and W. E. Sayed (2023)
  Mistral 7b.
  External Links: [Link](https://arxiv.org/abs/2310.06825),
  2310.06825
  Cited by: [§5.2](https://arxiv.org/html/2411.12977v6#S5.SS2.p1.1 "5.2 Voyager With Open-Weight LLMs ‣ 5 Experiments ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [70]
  A. Q. Jiang, A. Sablayrolles, A. Roux, A. Mensch, B. Savary, C. Bamford, D. S. Chaplot, D. d. l. Casas, E. B. Hanna, F. Bressand, et al. (2024)
  Mixtral of experts.
  arXiv preprint arXiv:2401.04088.
  Cited by: [§5.2](https://arxiv.org/html/2411.12977v6#S5.SS2.p1.1 "5.2 Voyager With Open-Weight LLMs ‣ 5 Experiments ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [71]
  A. Dubey, A. Jauhri, A. Pandey, A. Kadian, A. Al-Dahle, A. Letman, A. Mathur, A. Schelten, A. Yang, A. Fan, et al. (2024)
  The llama 3 herd of models.
  arXiv preprint arXiv:2407.21783.
  Cited by: [§5.2](https://arxiv.org/html/2411.12977v6#S5.SS2.p1.1 "5.2 Voyager With Open-Weight LLMs ‣ 5 Experiments ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning"),
  [§5.4](https://arxiv.org/html/2411.12977v6#S5.SS4.p2.1 "5.4 MindForge Lifelong Learning ‣ 5 Experiments ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [72]
  Z. Han, C. Gao, J. Liu, S. Q. Zhang, et al. (2024)
  Parameter-efficient fine-tuning for large models: a comprehensive survey.
  arXiv preprint arXiv:2403.14608.
  Cited by: [§5.2](https://arxiv.org/html/2411.12977v6#S5.SS2.SSS0.Px2.p1.1 "Fine-Tuning Does Not Help ‣ 5.2 Voyager With Open-Weight LLMs ‣ 5 Experiments ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [73]
  D. Austen-Smith and J. S. Banks (1996)
  Information aggregation, rationality, and the condorcet jury theorem.
  American political science review 90 (1), pp. 34–45.
  Cited by: [§5.5](https://arxiv.org/html/2411.12977v6#S5.SS5.p3.1 "5.5 MindForge Collaborative Learning Setting ‣ 5 Experiments ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [74]
  R. Schwartz, J. Dodge, N. A. Smith, and O. Etzioni (2019)
  Green AI.
   arXiv.
  External Links: [Document](https://dx.doi.org/10.48550/arXiv.1907.10597),
  1907.10597
  Cited by: [§6](https://arxiv.org/html/2411.12977v6#S6.p1.1 "6 Conclusion ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
- [75]
  E. J. Hu, Y. Shen, P. Wallis, Z. Allen-Zhu, Y. Li, S. Wang, L. Wang, and W. Chen (2021)
  Lora: low-rank adaptation of large language models.
  arXiv preprint arXiv:2106.09685.
  Cited by: [§E.1](https://arxiv.org/html/2411.12977v6#A5.SS1.p1.1 "E.1 Execution Logs ‣ Appendix E Fine-tuning setup ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning"),
  [§E.2](https://arxiv.org/html/2411.12977v6#A5.SS2.p1.1 "E.2 Wiki Data and Documentation ‣ Appendix E Fine-tuning setup ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").

## NeurIPS Paper Checklist

1. 1.

   Claims
2. Question: Do the main claims made in the abstract and introduction accurately reflect the paper’s contributions and scope?
3. Answer: [Yes]
4. Justification: We back up the claims made in the abstract and introduction in [Section 5](https://arxiv.org/html/2411.12977v6#S5 "5 Experiments ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning"), where we run extensive experiments in Minecraft and show the benefits of the proposed framework. Furthermore, we offer qualitative results through various figures and text snippets in the manuscript. These are available in the main paper as well as in the appendix (e.g. [Appendix D](https://arxiv.org/html/2411.12977v6#A4 "Appendix D Sample Conversation ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning")).
5. Guidelines:

   - •

     The answer NA means that the abstract and introduction do not include the claims made in the paper.
   - •

     The abstract and/or introduction should clearly state the claims made, including the contributions made in the paper and important assumptions and limitations. A No or NA answer to this question will not be perceived well by the reviewers.
   - •

     The claims made should match theoretical and experimental results, and reflect how much the results can be expected to generalize to other settings.
   - •

     It is fine to include aspirational goals as motivation as long as it is clear that these goals are not attained by the paper.
6. 2.

   Limitations
7. Question: Does the paper discuss the limitations of the work performed by the authors?
8. Answer: [No]
9. Justification: We acknowledge the limitations of MindForge and we discuss them throughout the paper when necessary. That said we do not have a standalone Limitations section.
10. Guidelines:

    - •

      The answer NA means that the paper has no limitation while the answer No means that the paper has limitations, but those are not discussed in the paper.
    - •

      The authors are encouraged to create a separate "Limitations" section in their paper.
    - •

      The paper should point out any strong assumptions and how robust the results are to violations of these assumptions (e.g., independence assumptions, noiseless settings, model well-specification, asymptotic approximations only holding locally). The authors should reflect on how these assumptions might be violated in practice and what the implications would be.
    - •

      The authors should reflect on the scope of the claims made, e.g., if the approach was only tested on a few datasets or with a few runs. In general, empirical results often depend on implicit assumptions, which should be articulated.
    - •

      The authors should reflect on the factors that influence the performance of the approach. For example, a facial recognition algorithm may perform poorly when image resolution is low or images are taken in low lighting. Or a speech-to-text system might not be used reliably to provide closed captions for online lectures because it fails to handle technical jargon.
    - •

      The authors should discuss the computational efficiency of the proposed algorithms and how they scale with dataset size.
    - •

      If applicable, the authors should discuss possible limitations of their approach to address problems of privacy and fairness.
    - •

      While the authors might fear that complete honesty about limitations might be used by reviewers as grounds for rejection, a worse outcome might be that reviewers discover limitations that aren’t acknowledged in the paper. The authors should use their best judgment and recognize that individual actions in favor of transparency play an important role in developing norms that preserve the integrity of the community. Reviewers will be specifically instructed to not penalize honesty concerning limitations.
11. 3.

    Theory assumptions and proofs
12. Question: For each theoretical result, does the paper provide the full set of assumptions and a complete (and correct) proof?
13. Answer: [N/A]
14. Justification: The manuscript does not include any theoretical result.
15. Guidelines:

    - •

      The answer NA means that the paper does not include theoretical results.
    - •

      All the theorems, formulas, and proofs in the paper should be numbered and cross-referenced.
    - •

      All assumptions should be clearly stated or referenced in the statement of any theorems.
    - •

      The proofs can either appear in the main paper or the supplemental material, but if they appear in the supplemental material, the authors are encouraged to provide a short proof sketch to provide intuition.
    - •

      Inversely, any informal proof provided in the core of the paper should be complemented by formal proofs provided in appendix or supplemental material.
    - •

      Theorems and Lemmas that the proof relies upon should be properly referenced.
16. 4.

    Experimental result reproducibility
17. Question: Does the paper fully disclose all the information needed to reproduce the main experimental results of the paper to the extent that it affects the main claims and/or conclusions of the paper (regardless of whether the code and data are provided or not)?
18. Answer: [Yes]
19. Justification: Since our method relies on LLMs, we provide a full comprehensive list of the models used (via API), the underlying prompts used to query the LLM as well as extensive details in [Section 5](https://arxiv.org/html/2411.12977v6#S5 "5 Experiments ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning") that allows for potential reproducibility. Importantly, our method uses significant scaffolding to enable multi-agent communication in Minecraft. While we do not include code snippets in the manuscript, we provide the full code as part of the Supplementary Materials.
20. Guidelines:

    - •

      The answer NA means that the paper does not include experiments.
    - •

      If the paper includes experiments, a No answer to this question will not be perceived well by the reviewers: Making the paper reproducible is important, regardless of whether the code and data are provided or not.
    - •

      If the contribution is a dataset and/or model, the authors should describe the steps taken to make their results reproducible or verifiable.
    - •

      Depending on the contribution, reproducibility can be accomplished in various ways. For example, if the contribution is a novel architecture, describing the architecture fully might suffice, or if the contribution is a specific model and empirical evaluation, it may be necessary to either make it possible for others to replicate the model with the same dataset, or provide access to the model. In general. releasing code and data is often one good way to accomplish this, but reproducibility can also be provided via detailed instructions for how to replicate the results, access to a hosted model (e.g., in the case of a large language model), releasing of a model checkpoint, or other means that are appropriate to the research performed.
    - •

      While NeurIPS does not require releasing code, the conference does require all submissions to provide some reasonable avenue for reproducibility, which may depend on the nature of the contribution. For example

      1. (a)

         If the contribution is primarily a new algorithm, the paper should make it clear how to reproduce that algorithm.
      2. (b)

         If the contribution is primarily a new model architecture, the paper should describe the architecture clearly and fully.
      3. (c)

         If the contribution is a new model (e.g., a large language model), then there should either be a way to access this model for reproducing the results or a way to reproduce the model (e.g., with an open-source dataset or instructions for how to construct the dataset).
      4. (d)

         We recognize that reproducibility may be tricky in some cases, in which case authors are welcome to describe the particular way they provide for reproducibility. In the case of closed-source models, it may be that access to the model is limited in some way (e.g., to registered users), but it should be possible for other researchers to have some path to reproducing or verifying the results.
21. 5.

    Open access to data and code
22. Question: Does the paper provide open access to the data and code, with sufficient instructions to faithfully reproduce the main experimental results, as described in supplemental material?
23. Answer: [Yes]
24. Justification: We provide the full code repository used to execute any experiment referenced in the manuscript in the Supplementary Material. We anonymize the code and provide adequate instructions inside the README for reproducibility.
25. Guidelines:

    - •

      The answer NA means that paper does not include experiments requiring code.
    - •

      Please see the NeurIPS code and data submission guidelines (<https://nips.cc/public/guides/CodeSubmissionPolicy>) for more details.
    - •

      While we encourage the release of code and data, we understand that this might not be possible, so “No” is an acceptable answer. Papers cannot be rejected simply for not including code, unless this is central to the contribution (e.g., for a new open-source benchmark).
    - •

      The instructions should contain the exact command and environment needed to run to reproduce the results. See the NeurIPS code and data submission guidelines (<https://nips.cc/public/guides/CodeSubmissionPolicy>) for more details.
    - •

      The authors should provide instructions on data access and preparation, including how to access the raw data, preprocessed data, intermediate data, and generated data, etc.
    - •

      The authors should provide scripts to reproduce all experimental results for the new proposed method and baselines. If only a subset of experiments are reproducible, they should state which ones are omitted from the script and why.
    - •

      At submission time, to preserve anonymity, the authors should release anonymized versions (if applicable).
    - •

      Providing as much information as possible in supplemental material (appended to the paper) is recommended, but including URLs to data and code is permitted.
26. 6.

    Experimental setting/details
27. Question: Does the paper specify all the training and test details (e.g., data splits, hyperparameters, how they were chosen, type of optimizer, etc.) necessary to understand the results?
28. Answer: [Yes]
29. Justification: Since the method to interact with LLMs is through text prompts, we provide these artifacts together with how we set up the experiments. These details can be found in [Section 5](https://arxiv.org/html/2411.12977v6#S5 "5 Experiments ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning"). The full details (code) are provided in the Supplementary Material.
30. Guidelines:

    - •

      The answer NA means that the paper does not include experiments.
    - •

      The experimental setting should be presented in the core of the paper to a level of detail that is necessary to appreciate the results and make sense of them.
    - •

      The full details can be provided either with the code, in appendix, or as supplemental material.
31. 7.

    Experiment statistical significance
32. Question: Does the paper report error bars suitably and correctly defined or other appropriate information about the statistical significance of the experiments?
33. Answer: [Yes]
34. Justification: We report error bars where possible throughout this manuscript. Specifically, we provide error bars for the Minecraft tech-tree experiments in [Table 3](https://arxiv.org/html/2411.12977v6#S5.T3 "In Using a less constrained communication protocol ‣ 5.3 Introducing Collaboration: MindForge Agents ‣ 5 Experiments ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning"). Moreover, to ensure proper statistical significance, we perform a large number of individual trials across all the experiments in [Section 5](https://arxiv.org/html/2411.12977v6#S5 "5 Experiments ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning").
35. Guidelines:

    - •

      The answer NA means that the paper does not include experiments.
    - •

      The authors should answer "Yes" if the results are accompanied by error bars, confidence intervals, or statistical significance tests, at least for the experiments that support the main claims of the paper.
    - •

      The factors of variability that the error bars are capturing should be clearly stated (for example, train/test split, initialization, random drawing of some parameter, or overall run with given experimental conditions).
    - •

      The method for calculating the error bars should be explained (closed form formula, call to a library function, bootstrap, etc.)
    - •

      The assumptions made should be given (e.g., Normally distributed errors).
    - •

      It should be clear whether the error bar is the standard deviation or the standard error of the mean.
    - •

      It is OK to report 1-sigma error bars, but one should state it. The authors should preferably report a 2-sigma error bar than state that they have a 96% CI, if the hypothesis of Normality of errors is not verified.
    - •

      For asymmetric distributions, the authors should be careful not to show in tables or figures symmetric error bars that would yield results that are out of range (e.g. negative error rates).
    - •

      If error bars are reported in tables or plots, The authors should explain in the text how they were calculated and reference the corresponding figures or tables in the text.
36. 8.

    Experiments compute resources
37. Question: For each experiment, does the paper provide sufficient information on the computer resources (type of compute workers, memory, time of execution) needed to reproduce the experiments?
38. Answer: [Yes]
39. Justification: While our paper is not based on direct compute resources like GPUs, we do acknowledge in [Appendix G](https://arxiv.org/html/2411.12977v6#A7 "Appendix G LLMs ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning") the cloud providers used throughout the experiments.
40. Guidelines:

    - •

      The answer NA means that the paper does not include experiments.
    - •

      The paper should indicate the type of compute workers CPU or GPU, internal cluster, or cloud provider, including relevant memory and storage.
    - •

      The paper should provide the amount of compute required for each of the individual experimental runs as well as estimate the total compute.
    - •

      The paper should disclose whether the full research project required more compute than the experiments reported in the paper (e.g., preliminary or failed experiments that didn’t make it into the paper).
41. 9.

    Code of ethics
42. Question: Does the research conducted in the paper conform, in every respect, with the NeurIPS Code of Ethics <https://neurips.cc/public/EthicsGuidelines>?
43. Answer: [Yes]
44. Justification: We have followed the NeurIPS Code of Ethics while writing and working at this manuscript.
45. Guidelines:

    - •

      The answer NA means that the authors have not reviewed the NeurIPS Code of Ethics.
    - •

      If the authors answer No, they should explain the special circumstances that require a deviation from the Code of Ethics.
    - •

      The authors should make sure to preserve anonymity (e.g., if there is a special consideration due to laws or regulations in their jurisdiction).
46. 10.

    Broader impacts
47. Question: Does the paper discuss both potential positive societal impacts and negative societal impacts of the work performed?
48. Answer: [No]
49. Justification: While the MindForge framework is designed to work with both humans and agents, we believe there is no foreseeable negative societal impact that can stem from this specific manuscript. However, we do mention that our framework might decrease the dependence on proprietary models and thus affect in a positive way global problems like climate change.
50. Guidelines:

    - •

      The answer NA means that there is no societal impact of the work performed.
    - •

      If the authors answer NA or No, they should explain why their work has no societal impact or why the paper does not address societal impact.
    - •

      Examples of negative societal impacts include potential malicious or unintended uses (e.g., disinformation, generating fake profiles, surveillance), fairness considerations (e.g., deployment of technologies that could make decisions that unfairly impact specific groups), privacy considerations, and security considerations.
    - •

      The conference expects that many papers will be foundational research and not tied to particular applications, let alone deployments. However, if there is a direct path to any negative applications, the authors should point it out. For example, it is legitimate to point out that an improvement in the quality of generative models could be used to generate deepfakes for disinformation. On the other hand, it is not needed to point out that a generic algorithm for optimizing neural networks could enable people to train models that generate Deepfakes faster.
    - •

      The authors should consider possible harms that could arise when the technology is being used as intended and functioning correctly, harms that could arise when the technology is being used as intended but gives incorrect results, and harms following from (intentional or unintentional) misuse of the technology.
    - •

      If there are negative societal impacts, the authors could also discuss possible mitigation strategies (e.g., gated release of models, providing defenses in addition to attacks, mechanisms for monitoring misuse, mechanisms to monitor how a system learns from feedback over time, improving the efficiency and accessibility of ML).
51. 11.

    Safeguards
52. Question: Does the paper describe safeguards that have been put in place for responsible release of data or models that have a high risk for misuse (e.g., pretrained language models, image generators, or scraped datasets)?
53. Answer: [N/A]
54. Justification: Our paper does not pose such risks.
55. Guidelines:

    - •

      The answer NA means that the paper poses no such risks.
    - •

      Released models that have a high risk for misuse or dual-use should be released with necessary safeguards to allow for controlled use of the model, for example by requiring that users adhere to usage guidelines or restrictions to access the model or implementing safety filters.
    - •

      Datasets that have been scraped from the Internet could pose safety risks. The authors should describe how they avoided releasing unsafe images.
    - •

      We recognize that providing effective safeguards is challenging, and many papers do not require this, but we encourage authors to take this into account and make a best faith effort.
56. 12.

    Licenses for existing assets
57. Question: Are the creators or original owners of assets (e.g., code, data, models), used in the paper, properly credited and are the license and terms of use explicitly mentioned and properly respected?
58. Answer: [Yes]
59. Justification: We credit the LLM providers in [Appendix G](https://arxiv.org/html/2411.12977v6#A7 "Appendix G LLMs ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning") both for crediting their work and helping the reader reproduce the results in the paper.
60. Guidelines:

    - •

      The answer NA means that the paper does not use existing assets.
    - •

      The authors should cite the original paper that produced the code package or dataset.
    - •

      The authors should state which version of the asset is used and, if possible, include a URL.
    - •

      The name of the license (e.g., CC-BY 4.0) should be included for each asset.
    - •

      For scraped data from a particular source (e.g., website), the copyright and terms of service of that source should be provided.
    - •

      If assets are released, the license, copyright information, and terms of use in the package should be provided. For popular datasets, [paperswithcode.com/datasets](https://paperswithcode.com/datasets) has curated licenses for some datasets. Their licensing guide can help determine the license of a dataset.
    - •

      For existing datasets that are re-packaged, both the original license and the license of the derived asset (if it has changed) should be provided.
    - •

      If this information is not available online, the authors are encouraged to reach out to the asset’s creators.
61. 13.

    New assets
62. Question: Are new assets introduced in the paper well documented and is the documentation provided alongside the assets?
63. Answer: [N/A]
64. Justification: Since MindForge makes use of existing open-weight LLMs, our paper does not release any new assets.
65. Guidelines:

    - •

      The answer NA means that the paper does not release new assets.
    - •

      Researchers should communicate the details of the dataset/code/model as part of their submissions via structured templates. This includes details about training, license, limitations, etc.
    - •

      The paper should discuss whether and how consent was obtained from people whose asset is used.
    - •

      At submission time, remember to anonymize your assets (if applicable). You can either create an anonymized URL or include an anonymized zip file.
66. 14.

    Crowdsourcing and research with human subjects
67. Question: For crowdsourcing experiments and research with human subjects, does the paper include the full text of instructions given to participants and screenshots, if applicable, as well as details about compensation (if any)?
68. Answer: [N/A]
69. Justification: The manuscript and research process does not involve crowdsourcing nor research with human subjects. While [Figure 5](https://arxiv.org/html/2411.12977v6#S5.F5 "In Ablations ‣ 5.3 Introducing Collaboration: MindForge Agents ‣ 5 Experiments ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning") showcases a feasibility study with a human expert, the human is one of the authors.
70. Guidelines:

    - •

      The answer NA means that the paper does not involve crowdsourcing nor research with human subjects.
    - •

      Including this information in the supplemental material is fine, but if the main contribution of the paper involves human subjects, then as much detail as possible should be included in the main paper.
    - •

      According to the NeurIPS Code of Ethics, workers involved in data collection, curation, or other labor should be paid at least the minimum wage in the country of the data collector.
71. 15.

    Institutional review board (IRB) approvals or equivalent for research with human subjects
72. Question: Does the paper describe potential risks incurred by study participants, whether such risks were disclosed to the subjects, and whether Institutional Review Board (IRB) approvals (or an equivalent approval/review based on the requirements of your country or institution) were obtained?
73. Answer: [N/A]
74. Justification: The manuscript and research process does not involve crowdsourcing nor research with human subjects. While [Figure 5](https://arxiv.org/html/2411.12977v6#S5.F5 "In Ablations ‣ 5.3 Introducing Collaboration: MindForge Agents ‣ 5 Experiments ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning") showcases a feasibility study with a human expert, the human is one of the authors.
75. Guidelines:

    - •

      The answer NA means that the paper does not involve crowdsourcing nor research with human subjects.
    - •

      Depending on the country in which research is conducted, IRB approval (or equivalent) may be required for any human subjects research. If you obtained IRB approval, you should clearly state this in the paper.
    - •

      We recognize that the procedures for this may vary significantly between institutions and locations, and we expect authors to adhere to the NeurIPS Code of Ethics and the guidelines for their institution.
    - •

      For initial submissions, do not include any information that would break anonymity (if applicable), such as the institution conducting the review.
76. 16.

    Declaration of LLM usage
77. Question: Does the paper describe the usage of LLMs if it is an important, original, or non-standard component of the core methods in this research? Note that if the LLM is used only for writing, editing, or formatting purposes and does not impact the core methodology, scientific rigorousness, or originality of the research, declaration is not required.
78. Answer: [Yes]
79. Justification: We do not use LLMs to formulate our research problem however LLMs are being used for the agents that we are proposing.
80. Guidelines:

    - •

      The answer NA means that the core method development in this research does not involve LLMs as any important, original, or non-standard components.
    - •

      Please refer to our LLM policy (<https://neurips.cc/Conferences/2025/LLM>) for what should or should not be described.

MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong
Cultural Learning

Appendices

## Appendix A Additional Experimental Results

### A.1 Collaborative Experiments

We provide an extended set of experiments to reinforce our findings in [Figure 5](https://arxiv.org/html/2411.12977v6#S5.F5 "In Ablations ‣ 5.3 Introducing Collaboration: MindForge Agents ‣ 5 Experiments ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning") and [Figure 7](https://arxiv.org/html/2411.12977v6#S5.F7 "In Using a less constrained communication protocol ‣ 5.3 Introducing Collaboration: MindForge Agents ‣ 5 Experiments ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning"). Specifically, we consider atomic tasks that are significantly harder than dirt and wood collection in order to demonstrate the generality of our framework: (1) mining an iron block and (2) crafting a wooden pickaxe.

Table 4: Agent performance increases as the number of rounds grows in both collaborative and instructive settings. In the instructive setting, we use Llama 3.1-70B as the weak agent and GPT-4 as the strong agent. Similarly, collaborative experiments use Llama 3.1-70B for both MindForge agents.

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Setting | Task | Comm. Round 0 | Comm. Round 1 | Comm. Round 2 | Comm. Round 3 |
| Instructive | Mine Iron | $41\%$ | $50\%$ | $54\%$ | $62\%$ |
| Instructive | Craft a Pickaxe | $20\%$ | $33\%$ | $41\%$ | $45\%$ |
| Collaborative | Craft a Pickaxe | $20\%$ | $25\%$ | $33\%$ | $33\%$ |

As [Table 4](https://arxiv.org/html/2411.12977v6#A1.T4 "In A.1 Collaborative Experiments ‣ Appendix A Additional Experimental Results ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning") shows, extend communication and perspective-taking between MindForge agents enable significant improvements on complex Minecraft tasks that require compositionality ($41\%\rightarrow 62\%$ and $20\%\rightarrow 45\%$). Similarly to [Figure 7](https://arxiv.org/html/2411.12977v6#S5.F7 "In Using a less constrained communication protocol ‣ 5.3 Introducing Collaboration: MindForge Agents ‣ 5 Experiments ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning"), we see that a purely collaborative setting results in smaller performance gains ($20\%\rightarrow 33\%$) than instructive learning, due to reinforcing wrong beliefs and similar thinking patterns.

### A.2 Post-Collaboration and OOD tasks

Do social interactions have long-term effects on agents and help them perform better on different tasks? We consider the impact of interactions in post-collaboration and out-of-distribution scenarios to assess MindForge’s generalization and lifelong learning capabilities. Specifically, we define post-collaboration scenarios as a non-collaborative setting where the MindForge agent tries to complete a task based on prior beliefs formed from a previous collaborative experience stored in the semantic memory. Moreover, we consider scenarios where the agent is tasked with solving a novel task with prior collaborative experience on an adjacent task in the Minecraft tech-tree. As [Table 5](https://arxiv.org/html/2411.12977v6#A1.T5 "In A.2 Post-Collaboration and OOD tasks ‣ Appendix A Additional Experimental Results ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning") shows, collaboration between MindForge agents together with semantic memory showcase an average improvement of $8.33\%$ for in-distribution tasks (dirt collection) together with an average improvement of $8.78\%$ in non-collaborative out-of-distribution scenarios (wood collection). These results showcase the importance of semantic memory in achieving continual learning through collaboration.

Table 5: Post-collaboration and out-of-distribution generalization of the MindForge agent. We report the task completion rates across $24$ individual trials.

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Scenario | Task | Mistral-7B | Mixtral-8x7B | Llama 3.1-8B |
| No Collaboration | Dirt | $37.5\%$ | $29.15\%$ | $12.5\%$ |
| Post-Collaboration | Dirt | $37.5\%$ | $41.66\%$ | $25\%$ |
| No Collaboration | Wood | $33.3\%$ | $50\%$ | $7\%$ |
| OOD post-collaboration | Wood | $41.66\%$ | $58.33\%$ | $16.66\%$ |

### A.3 Alternative Communication Protocols

[Table 6](https://arxiv.org/html/2411.12977v6#A1.T6 "In A.3 Alternative Communication Protocols ‣ Appendix A Additional Experimental Results ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning") shows the performance of MindForge agents when they are allowed to begin a conversation at point compared to when they can only initiate a conversation upon failure.

Table 6: Comparison between the default MindForge communication protocol and a more flexible alternative where agents can initiate the conversation at any point. Both protocols achieve similar results across different model sizes.

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| Model | Task | Setting | Task Completion Rate | | | |
| Round 0 | Round 1 | Round 2 | Round 3 |
| Mixtral-8x7B | Mine dirt | MindForge w/ flexible communication | 37% | 45% | 67% | 67% |
| MindForge | 29% | 42% | 62% | 67% |
| Mine dirt and wood | MindForge w/ flexible communication | 75% | 79% | 79% | 83% |
| MindForge | 75% | 79% | 79% | 83% |
| Mistral-7B | Mine dirt | MindForge w/ flexible communication | 37% | 42% | 45% | 54% |
| MindForge | 37% | 42% | 45% | 54% |
| Mine dirt and wood | MindForge w/ flexible communication | 41% | 45% | 50% | 50% |
| MindForge | 41% | 45% | 50% | 50% |

## Appendix B Additional Ablations

### B.1 Perspective Taking

To quantitatively assess the effect of perspective-taking, we perform an ablation study where we attempt to solve a Minecraft task without perspective-taking during communication in an instructive learning setting. [Table 7](https://arxiv.org/html/2411.12977v6#A2.T7 "In B.1 Perspective Taking ‣ Appendix B Additional Ablations ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning") showcases how the absence of perspective-taking leads to worse performance, irrespective of how much agents communicate. Moreover, as the agents use more communication rounds when trying to solve a task, taking perspective of the other’s agent situation increases task-completion rate.

Table 7: Perspective-taking ablation. We consider the Minecraft task of collecting a dirt block. Improvement is quantified as the fraction of agents that solve the task across 24 individual trials.

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Model Variant | Task Completion Rate | | | |
| Round 0 | Round 1 | Round 2 | Round 3 |
| MindForge w/ perspective-taking | 29% | 42% | 61% | 67% |
| MindForge w/o perspective-taking | 29% | 37% | 50% | 54% |
| Improvement | 0% | +5% | +11% | +13% |

We attribute the positive correlation between performance and usage of perspective-taking during communication to the ability of the MindForge agent to provide more relevant and directed advice. This observation is also supported by the substantial increase in performance in the first two rounds as presented in [Table 7](https://arxiv.org/html/2411.12977v6#A2.T7 "In B.1 Perspective Taking ‣ Appendix B Additional Ablations ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning"), where the teacher agent provides more insightful information as it gets to know the other’s agent situation better.

Additionally, we further ablate our structured representation of Theory of Mind by considering an unstructured perspective-taking 2-step prompt presented in Think Twice [[33](https://arxiv.org/html/2411.12977v6#bib.bib21)]. [Table 8](https://arxiv.org/html/2411.12977v6#A2.T8 "In B.1 Perspective Taking ‣ Appendix B Additional Ablations ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning") showcases that a structured ToM representation provides a meaningful advantage on complex Minecraft tasks.

Table 8: Structured perspective-taking ablation with unstructured alternative. The unstructured ToM approach is inspired from Think Twice [[33](https://arxiv.org/html/2411.12977v6#bib.bib21)]. Using a structured belief-system results in higher performance on complex Minecraft tasks.

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Task | Model Variant | Task Completion Rate | | | |
| Round 0 | Round 1 | Round 2 | Round 3 |
| Craft a Pickaxe | MindForge | 20% | 33% | 41% | 45% |
| Craft a Pickaxe | MindForge w/o structured ToM | 20% | 29% | 33% | 41% |
| Mine Iron | MindForge | 41% | 50% | 54% | 62% |
| Mine Iron | MindForge w/o structured ToM | 41% | 50% | 54% | 58% |

### B.2 Memory Components

MindForge employs three types of memory subsystems, as discussed in [Section 4.4](https://arxiv.org/html/2411.12977v6#S4.SS4 "4.4 Memory Subsystems ‣ 4 Method ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning"). These components ensure that the agent can reuse and recall relevant information about the task it is trying to complete from past experiences and interactions with other agents. The importance of procedural memory with respect to task completion is already studied in [[11](https://arxiv.org/html/2411.12977v6#bib.bib33)], concluding that reusing previous code snippets becomes increasingly important with the difficulty of the tasks. To understand the effect of episodic memory in the MindForge framework, we perform an ablation on the episodic memory component within two Minecraft tasks. [Table 9](https://arxiv.org/html/2411.12977v6#A2.T9 "In B.2 Memory Components ‣ Appendix B Additional Ablations ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning") showcases the drop in completion rate without the use of the episodic memory component. While we do not consider the tech-tree experiments here, we expect that considering past failure episodes leads to increasingly better results.

Table 9: Ablation on the episodic memory component in MindForge on a single task. We report the task completion rates across 24 individual trials.

|  |  |  |  |
| --- | --- | --- | --- |
| Scenario | Task | Mixtral-8x7B | Llama 3.1-8B |
| MindForge w/ episodic memory | Dirt | $\bm{29.15\%}$ | $12.5\%$ |
| MindForge w/o episodic memory | Dirt | $25\%$ | $16.66\%$ |
| MindForge w/ episodic memory | Wood | $\bm{50\%}$ | $\bm{7\%}$ |
| MindForge w/o episodic memory | Wood | $45.83\%$ | $7\%$ |

## Appendix C Implementation details

### C.1 Perspective Taking

Perspective-taking represents a central part of our framework since it allows MindForge agents to take advantage of the internal causal structure of other agents in order to aid more efficient and grounded communication. In practice, perspective-taking corresponds to an LLM call where the prompt contains instructions and relevant information required to understand the internal state of other MindForge agents during communication. [Figure 8](https://arxiv.org/html/2411.12977v6#A3.F8 "In C.1 Perspective Taking ‣ Appendix C Implementation details ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning") showcases how perspective-taking integrates with the overall communication mechanism.

![Refer to caption](https://arxiv.org/html/2411.12977v6/overall-flow.png)


Figure 8: Flow of MindForge communication components used to generate a natural language response. The agents’ internal process consists of two stages: (i) internal representation update and (ii) perspective-taking. Leveraging both processes the agent can then generate a natural language response and send it through the Minecraft chat.

Once the agent receives a message in the Minecraft chat, a first LLM call is executed where the agent updates the stateful internal representation about the agent that sent the message. This update process is shown in [Figure 6](https://arxiv.org/html/2411.12977v6#S5.F6 "In Using a less constrained communication protocol ‣ 5.3 Introducing Collaboration: MindForge Agents ‣ 5 Experiments ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning"). Subsequently, the updated internal representation is used as context together with the rest of the conversation to take perspective of the situation of the other MindForge agent. Similar to the first stage, perspective-taking is implemented as a LLM call, with the following prompt:

Prompt for perspective-taking

You are a Minecraft agent named {{name}} and you are having a conversation with another agent named {{other\_name}}.
  
Based on the current conversation and your knowledge about the other agent, {{other\_name}}, take the other agent’s perspective to assess and describe your current understanding, knowledge state, and likely needs from {{other\_name}}’s perspective.
  
Here is the current conversation between you and {{other\_name}}:{conversation}
  
Here is your mental model of {{other\_name}}: {world\_model}
  
Perspective Analysis:

Below you can find an example of perspective-taking from Minecraft gameplay:

Expert agent taking perspective of weak agent

Weak’s current knowledge state includes understanding the biome they are in, the time of day, and the fact that there are
dark oak logs nearby. Weak knows that a wooden axe is necessary for mining logs, and that crafting this tool will be a
required step before proceeding with the task. Weak’s likely needs from Strong include further assistance in navigating the environment during the night to find a tree
or waiting until the day.

### C.2 Episodic Memory

We implement episodic memory as a Retrieval-Augmented Generation (RAG) using LangChain [[67](https://arxiv.org/html/2411.12977v6#bib.bib9)]. Specifically, we embed all the episodes where the agent failed to complete the task using text-embedding-ada-002. An episode consists of the context used to generate the action, the code itself and the corresponding critic message. Subsequently, when the agent generates a new action, the RAG is queried to retrieve the k=5 most relevant failure episodes with respect to the task at hand. Lastly, to ensure we do not populate the context window with too many tokens, we generate a summary (using an LLM) of the retrieved episodes and feed this summary in the context used to generate the action. Below you can find the corresponding prompts for generating the episodic summary:

System message

You are a helpful assistant tasked with summarizing past experience episodes and pointing out the causes of failure. Create a concise summary.

Prompt message

Please summarize these episodes and why they failed:{combined\_episodes}

### C.3 Procedural Memory

The procedural memory has an identical design and functionality with the skill library introduced in Voyager [[11](https://arxiv.org/html/2411.12977v6#bib.bib33)]. Once a task gets successfully completed, we store the corresponding piece of code such that we can later reference it in adjacent tasks. This becomes increasingly important in tasks that require multiple steps, like crafting a pickaxe: the agent needs to first create a crafting table, create wooden sticks and only then attempt to craft the pickaxe. When we run the MindForge framework in an open-ended setting, the procedural memory allows the agent to continuously evolve and create an increasingly large collection of reusable skills.

### C.4 Semantic Memory

As described in [Section 4.4](https://arxiv.org/html/2411.12977v6#S4.SS4 "4.4 Memory Subsystems ‣ 4 Method ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning"), semantic memory stores certain beliefs the agent has about the environment, coming from experience with the environment and the other MindForge agents. Whenever MindForge attempts a new task, it creates a certain belief about how the task should be solved. For example, the agent might believe it requires tools to mine a block of dirt. This belief is then added to the context of the LLM when the environment action is generated. As highlighted in [Section 1](https://arxiv.org/html/2411.12977v6#S1 "1 Introduction ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning"), one of the primary failure cases of Voyager are the false beliefs that come from this LLM generation. However, compared to Voyager [[11](https://arxiv.org/html/2411.12977v6#bib.bib33)], we leverage the communication with other MindForge agents such that these beliefs get updated and refined. Below we showcase an example of false belief correction when trying to collect a block of wood:

Initial belief inside the semantic memory

{"How to mine 1 wood log in Minecraft?": "Answer: To mine 1 wood log in Minecraft, you need to use an axe."}

Updated belief after communication

{"How to mine 1 wood log in Minecraft?": "Answer: To mine 1 wood log in Minecraft, you need to punch a tree with your bare hands."}

In addition to task-related memory, the MindForge agent maintains a stateful set of beliefs about the other agents in the environment that are constantly updated across episodes. An example of this is presented in [Figure 6](https://arxiv.org/html/2411.12977v6#S5.F6 "In Using a less constrained communication protocol ‣ 5.3 Introducing Collaboration: MindForge Agents ‣ 5 Experiments ‣ MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong Cultural Learning"), where the agent updates its representation based on the contents of the conversation. Thus, keeping track of various information and facts about other MindForge agents acts as a semantic memory retrieval when agents communicate.

## Appendix D Sample Conversation

Each communication round between two MindForge agents comprises of six sending messages in a turn-based manner through the Minecraft build-in chat. Below you can find a sample conversation showcasing how the expert agent (Strong) helps the weak (Weak) agent.

Conversation about completing the task: "Mine 1 wood log"

Weak: Hey, can you help me with Mine 1 wood log?
  
Strong: Absolutely, I can help you with that. Given your current location in the dark forest biome and the presence of dark oak logs around you, you should be able to mine a log without any issues. Here’s the code you can use: ‘mine(’dark\_oak\_log’)‘. This command will make your agent mine a dark oak log. Just make sure you are close enough to the tree when executing this.
  
Weak: Thank you for the helpful guidance, Strong! However, in my case, I am currently in a dark forest biome as well, but I am having trouble finding a tree during the night. Could you suggest a way to find a tree during the day so I can mine the wood log? I also noticed that I don’t have a wooden axe in my inventory, so I may need to craft one before attempting to mine the log. I appreciate your assistance in this matter.
  
Strong: Of course, I understand your predicament. Since it’s currently night time, visibility might be low which makes it challenging to locate a tree. You can wait until daybreak for better visibility. Use the ‘wait\_until\_day()‘ function to wait until it’s daytime. For crafting a wooden axe, you would need 3 wood planks and 2 sticks. You can obtain wood planks from a wood log by using the ‘craft(’wooden\_plank’, wood\_log)‘ command and sticks from 2 wooden planks using the ‘craft(’stick’, wooden\_plank)‘ command. Once you have these, you can craft a wooden axe using the ‘craft(’wooden\_axe’, wooden\_plank, stick)‘ function. Here’s the code:

```
‘‘‘
wait_until_day()
craft(‘wooden_plank’, wood_log)
craft(‘stick’, wooden_plank)
craft(‘wooden_axe’, wooden_plank, stick)
‘‘‘
```

Once you have your axe and it’s day time, you should be able to easily locate and mine a tree for the wood log.
  
Weak: Thank you, Strong. I appreciate your help.

## Appendix E Fine-tuning setup

### E.1 Execution Logs

For the first fine-tuning variant, we use execution logs generated by a Voyager agent powered by GPT-4. Specifically, these logs contain input and output text information obtained from the components specific to the architecture, such as the actor or the critic. We find this to be a meaningful way to transfer knowledge as well as reasoning capabilities from GPT-4 to Mistral-7B. To perform the fine-tuning, we use LoRA [[75](https://arxiv.org/html/2411.12977v6#bib.bib42)] due to its low computational requirements.

### E.2 Wiki Data and Documentation

The second fine-tuning variation we consider builds upon the initial setup presented above and incorporates more structured information about Minecraft by including the Minecraft Wiki [[64](https://arxiv.org/html/2411.12977v6#bib.bib47)] and Minecraft API documentation. Similar to the first variant we use LoRA [[75](https://arxiv.org/html/2411.12977v6#bib.bib42)].

## Appendix F Prompts

Prompt for updating partner beliefs

You are a Minecraft agent.
  
You just had a conversation with another agent based on a task you are trying to solve.
  
Based on the contents of the conversation and the previous beliefs, you have to create a set of beliefs that represent your perception of the other agent.

Prompt for creating interaction beliefs

You are a Minecraft agent.
  
You just had a conversation with another agent based on a task you are trying to solve.
  
Based on the contents of the conversation and the previous beliefs, you have to create a set of beliefs that that can help you complete the task.

Prompt for perspective-taking

You are a Minecraft agent named {{name}} and you are having a conversation with another agent named {{other\_name}}.
  
Based on the current conversation and your knowledge about the other agent, {{other\_name}}, take the other agent’s perspective to assess and describe your current understanding, knowledge state, and likely needs from {{other\_name}}’s perspective.
  
Here is the current conversation between you and {{other\_name}}:{conversation}
  
Here is your mental model of {{other\_name}}: {world\_model}
  
Perspective Analysis:

## Appendix G LLMs

This section details the technical specifications of the Large Language Models (LLMs) and related infrastructure used to implement the MindForge framework and conduct the experiments presented in this paper.

All LLM calls, unless explicitly stated otherwise, were executed via API calls to external services. The exception to this is the fine-tuned model, which was ran and trained locally.

The specific models and their corresponding access methods are outlined below:

- •

  Llama 3.1-8B-Instruct: This model was accessed through the Lambda Inference API.1 This API provided a reliable and efficient interface for interacting with the Llama 3.1-8B-Instruct model, enabling seamless integration within the MindForge framework.
- •

  GPT-4: Accessed via the OpenAI API. The OpenAI API offered access to the advanced capabilities of the GPT-4 model, crucial for establishing performance baselines and for the expert agent in collaborative settings.
- •

  Mistral-7B Instruct v0.2, Mixtral-8x7B Instruct and Llama 3.1-70B: These Mistral models were accessed through the Together AI API.2 The Together AI API provided a platform for utilizing these open-weight models, allowing for a comparative analysis within the Voyager and MindForge frameworks.
