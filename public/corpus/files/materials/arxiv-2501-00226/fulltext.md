---
id: arxiv-2501-00226-text
type: material
title: 'Generative Emergent Communication: Large Language Model is a Collective World Model'
work_id: arxiv-2501-00226
source_url: https://arxiv.org/html/2501.00226v2
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять
  с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.
language: original
sha256_text: c3a00e20a35bf8d0d7fb32182ee2a105be16c517123a00b531535b8e3cbaf188
---

> Источник: [https://arxiv.org/html/2501.00226v2](https://arxiv.org/html/2501.00226v2). Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.

# Generative Emergent Communication: Large Language Model is a Collective World Model

Tadahiro Taniguchi
Email: [taniguchi@i.kyoto-u.ac.jp](mailto:taniguchi@i.kyoto-u.ac.jp)
Corresponding author: Corresponding author
Affiliation: Graduate School of Informatics, Kyoto University, Japan
  
Ryo Ueda
Affiliation: Graduate School of Engineering, The University of Tokyo, Japan
  
Tomoaki Nakamura
Affiliation: Graduate School of Informatics and Engineering, The University of Electro-Communications, Japan
  
Masahiro Suzuki
Affiliation: Graduate School of Engineering, The University of Tokyo, Japan
  
Akira Taniguchi
Affiliation: College of Information Science and Engineering, Ritsumeikan University, Japan

###### Abstract

Large Language Models (LLMs) have demonstrated a remarkable ability to capture extensive world knowledge, yet how this is achieved without direct sensorimotor experience remains a fundamental puzzle. This study proposes a novel theoretical solution by introducing the Collective World Model hypothesis. We argue that an LLM does not learn a world model from scratch; instead, it learns a statistical approximation of a collective world model that is already implicitly encoded in human language through a society-wide process of embodied, interactive sense-making.
To formalize this process, we introduce generative emergent communication (Generative EmCom), a framework built on the Collective Predictive Coding (CPC). This framework models the emergence of language as a process of decentralized Bayesian inference over the internal states of multiple agents. We argue that this process effectively creates an encoder-decoder structure at a societal scale: human society collectively encodes its grounded, internal representations into language, and an LLM subsequently decodes these symbols to reconstruct a latent space that mirrors the structure of the original collective representations.
This perspective provides a principled, mathematical explanation for how LLMs acquire their capabilities. The main contributions of this paper are: 1) the formalization of the Generative EmCom framework, clarifying its connection to world models and multi-agent reinforcement learning, and 2) its application to interpret LLMs, explaining phenomena such as distributional semantics as a natural consequence of representation reconstruction. This work provides a unified theory that bridges individual cognitive development, collective language evolution, and the foundations of large-scale AI.

###### Keywords:

emergent communication , large language model , world model , generative model , symbol emergence

\CJKencfamily

UTF8mc

## 1 Introduction

Large Language Models (LLMs) have achieved astonishing success, exhibiting a profound capacity for reasoning and knowledge retrieval across countless domains [[12](https://arxiv.org/html/2501.00226v2#bib.bib12), [83](https://arxiv.org/html/2501.00226v2#bib.bib83)]. A central puzzle, however, lies in their apparent grasp of the structure of the physical world. LLMs, trained on vast corpora of text, are not designed to interact with an environment and lack any direct sensorimotor experience [[4](https://arxiv.org/html/2501.00226v2#bib.bib4), [10](https://arxiv.org/html/2501.00226v2#bib.bib10)]. Yet, they seem to possess what could be described as a “world model.” How can an LLM acquire such a rich model of the world without ever having perceived or acted within it? This paper proposes a theoretical solution to this fundamental question.

The debate over whether LLMs truly possess world models is active and ongoing. A growing body of evidence suggests that LLMs acquire surprisingly rich representations of the real world. For instance, some studies show that LLMs implicitly learn representations corresponding to vision and hearing just by reading text [[133](https://arxiv.org/html/2501.00226v2#bib.bib133)], and that specific spatiotemporal representations emerge within their activations [[36](https://arxiv.org/html/2501.00226v2#bib.bib36)]. Furthermore, this internal knowledge proves functionally potent; LLMs can be used as world models for complex planning tasks [[46](https://arxiv.org/html/2501.00226v2#bib.bib46)], and their distributional semantics can be grounded in the physical world to guide robotic perception and action [[93](https://arxiv.org/html/2501.00226v2#bib.bib93), [142](https://arxiv.org/html/2501.00226v2#bib.bib142)]. Conversely, other work has revealed that LLMs are not reliable world simulators, suggesting their internal models are brittle or fundamentally different from those of embodied agents [[136](https://arxiv.org/html/2501.00226v2#bib.bib136)]. This conflicting evidence highlights a deep conceptual gap in our understanding.

To clarify our argument, we distinguish between two concepts of a world model [[119](https://arxiv.org/html/2501.00226v2#bib.bib119), [26](https://arxiv.org/html/2501.00226v2#bib.bib26)]:

1. (1)

   Type 1 World Model (Internal Model): A subjective, internal model that an agent learns through its own sensorimotor interactions with the environment to predict future states and plan actions. This corresponds to the agent’s Umwelt [[135](https://arxiv.org/html/2501.00226v2#bib.bib135)].
2. (2)

   Type 2 World Model (Model of the World): An objective, structured representation of knowledge about the world, its entities, and their relations, which may not be tied to a single agent’s direct experience.

We can frame this distinction as one between a subjective Type 1 World Model and an objective Type 2 World Model. Much of the confusion in current discourse arises from this distinction; while the term "world model" in AI often refers to a Type 1 model, particularly in the context of model-based reinforcement learning and predictive coding [[38](https://arxiv.org/html/2501.00226v2#bib.bib38), [40](https://arxiv.org/html/2501.00226v2#bib.bib40), [39](https://arxiv.org/html/2501.00226v2#bib.bib39), [35](https://arxiv.org/html/2501.00226v2#bib.bib35), [119](https://arxiv.org/html/2501.00226v2#bib.bib119)], discussions about LLMs often imply they possess a Type 2 model. This presents a paradox: it is difficult to see how a disembodied LLM could form a subjective, embodied Type 1 model, yet it is equally unclear how it could acquire an objective Type 2 model without any access to the world.

This paper proposes a solution to this paradox. We argue that the seemingly objective knowledge within an LLM is, in fact, a pseudo-objective structure encoded in the distributional semantics of language. This structure emerges as a result of aggregating countless subjective, Type 1 world models from a society of embodied agents. From the perspective of generative emergent communication (Generative EmCom) an LLM does not model the world directly, but rather models the collective of these Type 1 models as externalized in language. This leads to our central hypothesis:

The Collective World Model Hypothesis

Human language is not merely a communication protocol but serves as an externalized representation of a collective world model, which emerges from the decentralized, interactive sense-making processes of an entire society of embodied agents. LLMs acquire their world knowledge by learning a statistical approximation of this collective world model encoded in text corpora.

To provide a formal basis for this hypothesis, we introduce a new theoretical framework called Generative EmCom. This framework is built upon the Collective Predictive Coding (CPC) [[117](https://arxiv.org/html/2501.00226v2#bib.bib117)], which extends the principles of predictive coding, the free-energy principle (FEP) and the Bayesian brain hypothesis [[50](https://arxiv.org/html/2501.00226v2#bib.bib50), [32](https://arxiv.org/html/2501.00226v2#bib.bib32), [34](https://arxiv.org/html/2501.00226v2#bib.bib34), [27](https://arxiv.org/html/2501.00226v2#bib.bib27)] from individual brains to a societal level. Generative EmCom formalizes how a shared symbol system, i.e., language, emerges as multiple agents collectively seek to minimize their shared prediction errors about the world, a process we model as decentralized Bayesian inference.

However, such an integrative theory has been largely missing. The series of studies on emergent communication (EmCom) and symbol emergence has attempted to explain the formation of language [[98](https://arxiv.org/html/2501.00226v2#bib.bib98), [68](https://arxiv.org/html/2501.00226v2#bib.bib68)]. Yet, these approaches have often failed to bridge the gap between two interdependent aspects: first, the learning of an individual agent’s world model, which is grounded in its embodiment and environmental adaptation [[35](https://arxiv.org/html/2501.00226v2#bib.bib35), [119](https://arxiv.org/html/2501.00226v2#bib.bib119)]; and second, the collective emergence of a language that reflects this grounded knowledge. Our work aims to address this specific challenge by providing a unified framework.

This study, therefore, makes two primary contributions. First, we formalize the Generative EmCom framework, clarifying its relationship with conventional approaches and demonstrating its utility in multi-agent systems. Second, using this framework, we provide a principled, mathematical interpretation of LLMs as collective world models, offering a coherent explanation for their otherwise mysterious capabilities. This unified perspective bridges the gap between EmCom, cognitive development, and the foundations of large-scale AI, opening new frontiers for research. Indeed, the theoretical framework proposed herein has already begun to inspire new concrete models for multi-agent coordination in dynamic environments [[88](https://arxiv.org/html/2501.00226v2#bib.bib88)] and reward-independent communication in multi-agent reinforcement learning (MARL) [[141](https://arxiv.org/html/2501.00226v2#bib.bib141)].

The remainder of this paper is organized as follows: Section 2 reviews the current landscape of EmCom and world models, identifying the theoretical gap our work addresses. Section 3 details the theoretical framework of Generative EmCom. Section 4 explains how a collective world model can emerge from multi-agent interaction and cooperation. Section 5 applies this theory to reinterpret LLMs. Finally, Section 6 discusses the implications and limitations of our work, and Section 7 concludes the paper.

## 2 The Landscape of EmCom and World Models

Language evolves and changes over time as a result of decentralized human communications [[24](https://arxiv.org/html/2501.00226v2#bib.bib24), [98](https://arxiv.org/html/2501.00226v2#bib.bib98), [112](https://arxiv.org/html/2501.00226v2#bib.bib112), [113](https://arxiv.org/html/2501.00226v2#bib.bib113)]. Sentences are generated to describe a wide range of phenomena, including external events, emotions, and intentions. In particular, the system of language is inherently dyanamics rather than static [[137](https://arxiv.org/html/2501.00226v2#bib.bib137), [114](https://arxiv.org/html/2501.00226v2#bib.bib114), [126](https://arxiv.org/html/2501.00226v2#bib.bib126), [123](https://arxiv.org/html/2501.00226v2#bib.bib123)]. As Peirce, the founder of semiotics, suggested, symbols, including language, can be characterized by a triadic relationship of sign, object, and interpretant [[95](https://arxiv.org/html/2501.00226v2#bib.bib95), [96](https://arxiv.org/html/2501.00226v2#bib.bib96), [18](https://arxiv.org/html/2501.00226v2#bib.bib18)]. Here, sign corresponds to words, sentences and other signals. In particular, the correspondence between sign and object, which is signified by a sign (i.e., signifier), is determined by an interpretant. In other words, the meaning of a sign, that is, language, depends on culture and context, and so on.

### 2.1 Conventional Approaches to EmCom and Their Limits

The study of how communication protocols and symbolic language emerge from multi-agent interaction, a field known as EmCom, has been explored through several major approaches, including language games, MARL, and iterated learning models (ILMs) [[97](https://arxiv.org/html/2501.00226v2#bib.bib97), [68](https://arxiv.org/html/2501.00226v2#bib.bib68), [114](https://arxiv.org/html/2501.00226v2#bib.bib114), [146](https://arxiv.org/html/2501.00226v2#bib.bib146), [11](https://arxiv.org/html/2501.00226v2#bib.bib11)]. A central theme in this research, particularly in studies employing language games and powered by deep neural networks [[31](https://arxiv.org/html/2501.00226v2#bib.bib31), [84](https://arxiv.org/html/2501.00226v2#bib.bib84), [55](https://arxiv.org/html/2501.00226v2#bib.bib55)], is the extent to which the resulting protocols, or emergent languages (EmLangs), resemble human language. For instance, questions have been raised about whether EmLangs exhibit compositionality [[65](https://arxiv.org/html/2501.00226v2#bib.bib65), [14](https://arxiv.org/html/2501.00226v2#bib.bib14)], follow well-known statistical properties of natural languages [[15](https://arxiv.org/html/2501.00226v2#bib.bib15), [105](https://arxiv.org/html/2501.00226v2#bib.bib105), [131](https://arxiv.org/html/2501.00226v2#bib.bib131), [129](https://arxiv.org/html/2501.00226v2#bib.bib129)], or can be shaped by cognitive constraints [[104](https://arxiv.org/html/2501.00226v2#bib.bib104), [57](https://arxiv.org/html/2501.00226v2#bib.bib57)].

A foundational paradigm for many of these investigations is the Lewis signaling game [[73](https://arxiv.org/html/2501.00226v2#bib.bib73)]. This approach, often aligned with Shannon’s information theory [[110](https://arxiv.org/html/2501.00226v2#bib.bib110)], can be regarded as a discriminative model for optimizing a communication protocol.

The signaling game is a simple communication model that involves only a sender $S\_{\boldsymbol{\phi}}(m|x)$ and a receiver $R\_{\boldsymbol{\theta}}(x|m)$ and only allows unidirectional communication from the sender to the receiver.
At each play, the signaling game proceeds as follows:

1. 1.

   Observation: Sender $S\_{\boldsymbol{\phi}}$ obtains an observation $x$, that is, $x\sim p(x)$.
2. 2.

   Signaling: Sender $S\_{\boldsymbol{\phi}}$ generates a message $m$ from the observation $x$, that is, $m\sim S\_{\boldsymbol{\phi}}(m|x)$.
3. 3.

   Reconstruction: Receiver $R\_{\boldsymbol{\theta}}$ attempts to reconstruct the original observation $x$ from the message $m$ via $R\_{\boldsymbol{\theta}}(x|m)$.

Sender $S\_{\boldsymbol{\phi}}$ and receiver $R\_{\boldsymbol{\theta}}$ are optimized via a gradient-based method toward successful communication.
Conventionally, the objective function of the signaling game (to be maximized) is defined as follows [[16](https://arxiv.org/html/2501.00226v2#bib.bib16), [106](https://arxiv.org/html/2501.00226v2#bib.bib106)]:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $\displaystyle\mathcal{J}\_{\textup{MI}}(\boldsymbol{\phi},\boldsymbol{\theta})\mathrel{:=}\mathbb{E}\_{p(x),S\_{\boldsymbol{\phi}}(m|x)}[\log R\_{\boldsymbol{\theta}}(x|m)].$ |  | (1) |

We refer to $\mathcal{J}\_{\textup{MI}}$ as the mutual information (MI)-maximizing objective function because it is known to be an evidence lower bound (ELBO) (up to constant) of the following mutual information between $X$ and $M$ [[8](https://arxiv.org/html/2501.00226v2#bib.bib8), [99](https://arxiv.org/html/2501.00226v2#bib.bib99)]:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $\displaystyle I\_{\boldsymbol{\phi}}(X;M)\mathrel{:=}\mathbb{E}\_{p(x),S\_{\boldsymbol{\phi}}(m|x)}\left[\log\frac{S\_{\boldsymbol{\phi}}(m|x)}{\mathbb{E}\_{p(x^{\prime})}[S\_{\boldsymbol{\phi}}(m|x^{\prime})]}\right].$ |  | (2) |

This implies that the conventional signaling game in the field of EmCom has been formulated as a problem of maximizing the mutual information between $X$ and $M$, where $X$ and $M$ denote random variables corresponding to the realizations $x$ and $m$, respectively.

However, from the viewpoint of our paper, it is more fruitful to reinterpret these communication games through the lens of probabilistic generative models. This shift from a discriminative to a generative perspective reveals deeper connections to principles of cognition, learning, and the information-theoretic foundations of frameworks like the Variational Autoencoder (VAE) and the Information Bottleneck (IB) principle [[3](https://arxiv.org/html/2501.00226v2#bib.bib3), [144](https://arxiv.org/html/2501.00226v2#bib.bib144)].

This generative viewpoint reframes the signaling game as a problem of maximizing the ELBO [[130](https://arxiv.org/html/2501.00226v2#bib.bib130)]. The objective function becomes:

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  | $\displaystyle\begin{split}\mathcal{J}\_{\textup{ELBO}}(\boldsymbol{\phi},\boldsymbol{\theta})&\mathrel{:=}\mathbb{E}\_{p(x)}[\mathbb{E}\_{S\_{\boldsymbol{\phi}}(m|x)}[\log R\_{\boldsymbol{\theta}}(m|x)]\\ &\hphantom{\mathrel{:=}\mathbb{E}\_{p(x)}[}-\beta\textrm{KL}(S\_{\boldsymbol{\phi}}(m|x)||p\_{\boldsymbol{\theta}}(m))].\end{split}$ | |  | (3) |

We refer to $\mathcal{J}\_{\textup{ELBO}}$ as the ELBO-maximizing objective function, contrasting it with the MI-maximizing objective $\mathcal{J}\_{\textup{MI}}$.
By adopting the ELBO-maximizing objective function, we can introduce concepts from computational psycholinguistics into signaling games.
To observe this, let us transform the ELBO maximizing objective function as follows:

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  | $\displaystyle\begin{split}\mathcal{J}\_{\textup{ELBO}}(\boldsymbol{\phi},\boldsymbol{\theta})&\mathrel{:=}\mathbb{E}\_{p(x),S\_{\boldsymbol{\phi}}(m|x)}[\underbrace{\log R\_{\theta}(x|m)}\_{\textup{communication}}+\beta\underbrace{\log p\_{\theta}(m)}\_{\begin{subarray}{c}\textup{(negative)}\\ \textup{surprisal}\end{subarray}}]\\ &\phantom{\mathrel{:=}}-\beta\underbrace{\mathbb{E}\_{p(x)}\mathcal{H}(S\_{\phi}(M|x))}\_{\begin{subarray}{c}\textup{entropy}\\ \textup{maximizer}\end{subarray}},\end{split}$ | |  | (4) |

where $\beta$ is a hyperparameter. Here, a term known as surprisal appears, which is a concept commonly used in computational psycholinguistics [[45](https://arxiv.org/html/2501.00226v2#bib.bib45), [72](https://arxiv.org/html/2501.00226v2#bib.bib72), [66](https://arxiv.org/html/2501.00226v2#bib.bib66)].
Surprisal is assumed to represent the cognitive load experienced by a listener/reader (or the receiver in the signaling game) when processing a sentence.
Therefore, the ELBO-maximizing signaling game naturally models the trade-off between information transmission and surprisal.

A similar discussion involves modeling the trade-off between information transmission and efficiency, where studies have used the (variational) information bottleneck (IB, VIB) framework to model communication [[144](https://arxiv.org/html/2501.00226v2#bib.bib144), [17](https://arxiv.org/html/2501.00226v2#bib.bib17), [127](https://arxiv.org/html/2501.00226v2#bib.bib127)].
In fact, VIB is proven to be a generalization of (beta-)VAE [[3](https://arxiv.org/html/2501.00226v2#bib.bib3), [1](https://arxiv.org/html/2501.00226v2#bib.bib1)], resulting in similar models. In addition, a contemporary work [[128](https://arxiv.org/html/2501.00226v2#bib.bib128)] shows that a variant framework known as a referential game can also be reformulated with an ELBO-like objective, analogous in structure to that of a conditional VAE [[62](https://arxiv.org/html/2501.00226v2#bib.bib62), [111](https://arxiv.org/html/2501.00226v2#bib.bib111)].

In relation to discussions in the field of evolutionary linguistics, some studies have also incorporated ILM into the EmCom framework [[103](https://arxiv.org/html/2501.00226v2#bib.bib103)], which is another important research theme.
The ILM is a framework that models generational changes, where supervised learning is repeatedly performed from parent agents to child agents.
In the context of VAE and VIB, however, little discussion exists on modeling generational changes, and this remains a future challenge when considering generative symbol emergence.

The formulation of the signaling game presented in this section, that is, generative model-based re-formulation of conventional EmCom, shares some fundamental connections with the generative frameworks discussed in later sections. All these formulations can be interpreted as representation learning with messages serving as latent variables in generative models when using ELBO-type (or VIB-type) objectives. However, these signaling game-based approaches have inherent limitations: they typically assume a simple two-agent setting with asymmetric sender-receiver roles, and their extension to populated, decentralized settings is not straightforward.

Beyond these foundational models, the field of Semantic Communication (SC) has gained traction, aiming to transmit information based on meaning and effectiveness rather than bit-level fidelity [[100](https://arxiv.org/html/2501.00226v2#bib.bib100)]. This has spurred research into areas such as deep learning-based semantic encoders [[138](https://arxiv.org/html/2501.00226v2#bib.bib138)], contextual reasoning for shared understanding [[109](https://arxiv.org/html/2501.00226v2#bib.bib109)], and learning goal-oriented languages from interaction [[29](https://arxiv.org/html/2501.00226v2#bib.bib29)]. A comprehensive framework, Emergent Semantic Communication (ESC), seeks to integrate many of these threads by using causal reasoning in a neuro-symbolic architecture to create efficient emergent languages [[125](https://arxiv.org/html/2501.00226v2#bib.bib125)]. While these approaches advance the engineering of goal-oriented communication, they do not address how a society-wide, general-purpose language emerges to reflect a collective world model, which is the central question this paper addresses.

### 2.2 World Models for Individual Cognitive Agents

The concept of a world model represents an internal model within an agent that captures the dynamics of environmental states, their responses to the actions of the agent, and their relationships with sensory inputs [[37](https://arxiv.org/html/2501.00226v2#bib.bib37), [35](https://arxiv.org/html/2501.00226v2#bib.bib35), [119](https://arxiv.org/html/2501.00226v2#bib.bib119), [26](https://arxiv.org/html/2501.00226v2#bib.bib26)]. The concept of world model has its origins in the early days of AI and robotics studies [[86](https://arxiv.org/html/2501.00226v2#bib.bib86)]. Initial studies on ML investigated techniques for agents to autonomously construct and adapt their world models [[108](https://arxiv.org/html/2501.00226v2#bib.bib108), [116](https://arxiv.org/html/2501.00226v2#bib.bib116)]. Currently, the term generally refers to predictive frameworks [[39](https://arxiv.org/html/2501.00226v2#bib.bib39)], predominantly implemented using deep neural network architectures.

The concept of world models is closely related to the idea of predictive coding (PC). PC is the idea that the brain constantly predicts sensory information and updates its internal models to minimize prediction errors.
In the context of cognitive robotics and AI, world models provide the structure for representing and reasoning about the environment, whereas PC offers a mechanism for learning and updating these models based on sensory experiences. The free energy principle and active inference further unify these concepts, suggesting that both perception and action can be considered as processes of minimizing prediction errors or free energy. A theoretical connection exists between them [[119](https://arxiv.org/html/2501.00226v2#bib.bib119)] .

Generally, a theory of world models can be based on partially observable Markov decision process (POMDP). In this framework, the state $z\_{t}$ at time $t$ is not directly observable by the agent. Instead, the agent receives an observation $x\_{t}$, which is assumed to be generated from a latent state $z\_{t}$. The agent’s actions $a\_{t}$ influence the transition of states according to a probability distribution $p(z\_{t+1}|z\_{t},a\_{t})$. The observation model is given by $p(x\_{t}|z\_{t})$. The goal of the agent is to learn these probability distributions and use them to make predictions and inferences about the environment. This can be formalized as:

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  | State transition: | $\displaystyle\quad z\_{t+1}\sim p(z\_{t+1}|z\_{t},a\_{t})$ |  | (5) |
|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  | Observation: | $\displaystyle\quad x\_{t}\sim p(x\_{t}|z\_{t})$ |  | (6) |
|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  | Inference: | $\displaystyle\quad z\_{t}\sim q(z\_{t}|x\_{1:t},a\_{1:t-1})$ |  | (7) |

where $q(z\_{t}|x\_{1:t},a\_{1:t-1})$ represents the agent’s belief about the current state given the history of observations and actions. Learning these models enables the agent to construct a comprehensive world model that can be used for planning and decision-making in complex, partially observable environments.

This general framework has been instantiated in numerous influential models [[26](https://arxiv.org/html/2501.00226v2#bib.bib26)]. The “World Models” approach by Ha and Schmidhuber, for instance, demonstrated that an agent could learn a compressed latent dynamics model from pixel inputs and use it to train a controller entirely within its own “dream” [[38](https://arxiv.org/html/2501.00226v2#bib.bib38), [37](https://arxiv.org/html/2501.00226v2#bib.bib37)]. This line of research was significantly advanced by the Dreamer series of models, which successfully applied latent dynamics models to challenging continuous control tasks and even discrete Atari benchmarks and Minecraft [[40](https://arxiv.org/html/2501.00226v2#bib.bib40), [39](https://arxiv.org/html/2501.00226v2#bib.bib39), [41](https://arxiv.org/html/2501.00226v2#bib.bib41), [42](https://arxiv.org/html/2501.00226v2#bib.bib42)]. While many of these models rely on reconstructing observations, alternative approaches have also been explored. For example, some models focus on learning latent dynamics through contrastive learning without reconstruction [[67](https://arxiv.org/html/2501.00226v2#bib.bib67), [89](https://arxiv.org/html/2501.00226v2#bib.bib89), [90](https://arxiv.org/html/2501.00226v2#bib.bib90)], or by incorporating specific physical priors into the latent space, such as in NewtonianVAE [[54](https://arxiv.org/html/2501.00226v2#bib.bib54), [91](https://arxiv.org/html/2501.00226v2#bib.bib91)]. Furthermore, to handle information from multiple viewpoints, which is crucial in multi-agent settings, approaches like Multi-View Dreaming have been proposed to construct a world model from multi-view images using contrastive learning [[63](https://arxiv.org/html/2501.00226v2#bib.bib63)].

A prominent recent approach to learning such world models is the Joint-Embedding Predictive Architecture (JEPA), proposed by LeCun as a key component of a pathway towards autonomous machine intelligence [[70](https://arxiv.org/html/2501.00226v2#bib.bib70)]. Unlike generative approaches that attempt to predict missing information in pixel space, JEPA operates by predicting the representations of missing information in an abstract feature space [[7](https://arxiv.org/html/2501.00226v2#bib.bib7)]. This non-generative, self-supervised method aims to capture the underlying dependencies of the data, encouraging the model to learn semantic and predictive features rather than superficial details. The JEPA framework has proven effective for learning world models from various modalities, including images (I-JEPA) [[7](https://arxiv.org/html/2501.00226v2#bib.bib7)] and videos (V-JEPA) [[9](https://arxiv.org/html/2501.00226v2#bib.bib9)]. This line of research has recently culminated in V-JEPA 2, which extends the framework to enable robotic planning from video, further solidifying JEPA as a state-of-the-art method for an individual agent to develop its internal, predictive model of the world [[6](https://arxiv.org/html/2501.00226v2#bib.bib6)].

In summary, all the approaches discussed in this subsection, from classic POMDP-based models to modern architectures like JEPA, are fundamentally concerned with how a single agent learns a Type 1 World Model through its own interactions.

### 2.3 The Unaddressed Gap: From Individual Experience to Collective Language

The preceding review of research in EmCom (Section 2.1) and individual world models (Section 2.2) highlights a fundamental theoretical gap. On one hand, studies in EmCom have explored how agents can develop shared communication protocols, but these approaches often treat language as an abstract code, detached from the rich, embodied experiences that ground meaning in the real world. On the other hand, computational models and general theories that could provide a comprehensive and integrative understanding of symbol and language emergence [[120](https://arxiv.org/html/2501.00226v2#bib.bib120), [123](https://arxiv.org/html/2501.00226v2#bib.bib123)] are still lacking.

Specifically, these theories must address the critical interdependency between two aspects: first, the world modeling by individual agents, which is grounded in their embodiment and environmental adaptation [[35](https://arxiv.org/html/2501.00226v2#bib.bib35), [119](https://arxiv.org/html/2501.00226v2#bib.bib119)]; and second, the collective emergence of a language whose structure reflects this grounded world knowledge, for instance through distributional semantics [[47](https://arxiv.org/html/2501.00226v2#bib.bib47), [36](https://arxiv.org/html/2501.00226v2#bib.bib36)]. In essence, a crucial question remains unaddressed: What is the theoretical and computational mechanism that bridges the subjective, internal world of the individual with the objective, external world of collective language? Without a clear answer, our understanding of large-scale phenomena, such as the emergence of world knowledge in LLMs, remains incomplete. The need for a theoretical framework that can explain the dynamic and semantic aspects of language emergence in embodied cognitive developmental systems still remains [[79](https://arxiv.org/html/2501.00226v2#bib.bib79), [123](https://arxiv.org/html/2501.00226v2#bib.bib123), [13](https://arxiv.org/html/2501.00226v2#bib.bib13), [117](https://arxiv.org/html/2501.00226v2#bib.bib117)], and this paper aims to provide such a framework.

## 3 Generative EmCom: A Theoretical Framework

These approaches somehow failed to construct a general framework capturing symbol emergence from the viewpoint perspective of general principles of environmental adaptation, such as the FEP, PC, and world modeling.
Recently, world models have garnered significant attention as representation-learning models that incorporate action outputs and temporal dynamics of agent– environment interactions [[38](https://arxiv.org/html/2501.00226v2#bib.bib38), [35](https://arxiv.org/html/2501.00226v2#bib.bib35), [119](https://arxiv.org/html/2501.00226v2#bib.bib119)]. This aligns with broader theoretical frameworks such as PC and the FEP. PC posits that the brain constantly predicts sensory information and updates its internal models to enhance predictability  [[50](https://arxiv.org/html/2501.00226v2#bib.bib50)], whereas FEP provides a more generalized framework explaining the self-organization of biological systems through minimization of free energy [[94](https://arxiv.org/html/2501.00226v2#bib.bib94)], which is associated with the idea of the Bayesian brain [[27](https://arxiv.org/html/2501.00226v2#bib.bib27)]. Notably, FEP extends beyond individual cognition to explain the self-organization of cognitive and biological systems in detail [[64](https://arxiv.org/html/2501.00226v2#bib.bib64), [33](https://arxiv.org/html/2501.00226v2#bib.bib33), [20](https://arxiv.org/html/2501.00226v2#bib.bib20)], making it a promising foundation for understanding symbol emergence at both individual and collective levels.

![Refer to caption](https://arxiv.org/html/2501.00226v2/cpc.png)


Figure 1: 
(Left) probabilistic graphical model (PGM) representation of CPC in symbol emergence, that is, EmCom or language. The top-down generative process corresponds to language understanding and prediction of observations, which is downward causation in the symbol emergence system. The bottom-up inference process corresponds to perception, representation learning, and communication, that is, language game, which is upward causation in the symbol emergence system. (Right) Overview of the CPC in a symbol emergence system illustrating the bidirectional process of language understanding and generation, mediated by inference through language games and representation learning.

### 3.1 The CPC Hypothesis

To address the challenges outlined in Section 2, this paper builds upon the CPC hypothesis [[117](https://arxiv.org/html/2501.00226v2#bib.bib117), [121](https://arxiv.org/html/2501.00226v2#bib.bib121)]. The idea extends the principles of PC and the FEP from the individual cognitive level to a societal level [[122](https://arxiv.org/html/2501.00226v2#bib.bib122)]. CPC posits that the emergence of symbol systems, particularly language, can be modeled as a decentralized Bayesian inference of a shared latent representation. It assumes that not only individual agents but also entire groups engaged in symbolic communication can be modeled as generative systems, aiming to minimize their collective free energy (CFE).

Although PC theory suggests that individual brains constantly predict sensory information and update their internal representations, including world models. CPC suggests that a group of agents, for instance, a human society, predict sensory information of all of the agents and update its external representations, that is, symbol systems.

A question is raised. How can we update the external representations, e.g., language, while our brains are disconnected physically? The CPC hypothesis suggests that a type of language game performs a decentralized Bayesian inference among the group (e.g., [Taniguchi et al. [124]](https://arxiv.org/html/2501.00226v2#bib.bib124), [Hagiwara et al. [44]](https://arxiv.org/html/2501.00226v2#bib.bib44)).
In this framework, language games (such as naming games) can be interpreted as implementing decentralized Bayesian inference of shared representations. A representative example is Metropolis-Hastings Naming Game (MHNG) explained in Section [3.3](https://arxiv.org/html/2501.00226v2#S3.SS3 "3.3 The Naming Game as a Microcosm of Collective Inference ‣ 3 Generative EmCom: A Theoretical Framework ‣ Generative Emergent Communication:Large Language Model is a Collective World Model").
The CPC hypothesis argues that symbol systems emerge as a result of decentralized Bayesian inference performed collaboratively by multiple agents.

Although the encoding of sensory information through internal representations is ensured by the plasticity of neural systems, the plasticity of external representations is guaranteed by the flexibility of our symbol systems. The arbitrariness of symbol systems is a widely recognized characteristic of symbols in semiotics [[18](https://arxiv.org/html/2501.00226v2#bib.bib18)]. Peirce referred to the process by which subjects assign meaning to symbols according to culture and context as the semiosis.
Although our brains are physically and electrically separated, they are informationally connected through communication using a flexible symbol system. Therefore, with appropriate communication and symbol system update algorithms, we can encode information into the symbol system as an external representation. In fact, the CPC hypothesis can consider that humans collectively perform this action in language emergence.

This implies that language collectively encodes information about the world as observed by numerous agents through their sensory-motor systems. The CPC hypothesis study [[117](https://arxiv.org/html/2501.00226v2#bib.bib117)] did not provide a clear and detailed explanation regarding this point while proposing a new perspective on why LLMs seem to possess knowledge about the real world.
This is one of the main topics of this paper.

Essentially, CPC hypothesizes that human language is formed through a process of collective PC, where the symbol system emerges to maximize the predictability of multi-modal sensory-motor information obtained by members of a society, that is, minimize the CFE of a group of agents. This approach provides a unified framework for understanding symbol emergence, language evolution, and the nature of linguistic knowledge from the perspective of environmental adaptation and brain science.

### 3.2 Formalizing Generative EmCom as Decentralized Bayesian Inference

The CPC hypothesis posits that a group of agents, interacting with each other and their environment, can be modeled as a single, large-scale probabilistic generative model. This allows us to formalize the emergence of a shared symbol system, such as language, as a process of decentralized Bayesian inference. For a group of $K$ agents, the generative and inference processes are defined as follows:

|  |  |  |  |
| --- | --- | --- | --- |
|  | Generative Model: | $\displaystyle\quad p(m,\{z\_{k}\}\_{k},\{x\_{k}\}\_{k}|\{a\_{k}\}\_{k})$ |  |
|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  |  | $\displaystyle=p(m)\prod\_{k=1}^{K}p(x\_{k}|z\_{k},a\_{k})p(z\_{k}|m,a\_{k})$ |  | (8) |
|  |  |  |  |
| --- | --- | --- | --- |
|  | Inference Model: | $\displaystyle\quad q(m,\{z\_{k}\}\_{k}|\{x\_{k}\}\_{k},\{a\_{k}\}\_{k})$ |  |
|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  |  | $\displaystyle=q(m|\{z\_{k}\}\_{k})\prod\_{k=1}^{K}q(z\_{k}|x\_{k},a\_{k})$ |  | (9) |

where for each agent $k$, $x\_{k}$ is its observation, $a\_{k}$ is its action, and $z\_{k}$ is its internal representation. The variable $m$ represents the shared, external symbol system (i.e., message) that connects the agents. The inference process $q(z\_{k}|x\_{k},a\_{k})$ corresponds to each agent’s individual representation learning, while $q(m|\{z\_{k}\}\_{k})$ corresponds to the collective process of symbol emergence, which can be instantiated by a language game as discussed in Section 3.3.

Under the free energy principle, the goal of this collective system is to minimize the variational free energy (VFE), which is equivalent to maximizing the ELBO of the log-likelihood of observations. We term this the CFE [[122](https://arxiv.org/html/2501.00226v2#bib.bib122), [118](https://arxiv.org/html/2501.00226v2#bib.bib118)]:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $\displaystyle F$ | $\displaystyle=D\_{\mathrm{KL}}\left[q(m,\{z\_{k}\}\_{k}|\{x\_{k}\}\_{k},\{a\_{k}\}\_{k})\parallel p(m,\{z\_{k}\}\_{k}|\{x\_{k}\}\_{k},\{a\_{k}\}\_{k})\right]$ |  |
|  |  |  |  |
| --- | --- | --- | --- |
|  |  | $\displaystyle=\underbrace{D\_{\mathrm{KL}}\left[q(m|\{z\_{k}\}\_{k})\|p(m)\right]}\_{\text{Collective Regularization}}$ |  |
|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  |  | $\displaystyle\ \ \ +\sum\_{k=1}^{K}\left(\underbrace{\mathbb{E}\_{q}\left[-\log{p(x\_{k}|z\_{k},a\_{k})}\right]}\_{\text{Individual Prediction Error}}+\underbrace{D\_{\mathrm{KL}}\left[q(z\_{k}|x\_{k},a\_{k})\|p(z\_{k}|m,a\_{k})\right]}\_{\text{Individual Regularization}}\right)$ |  | (10) |

This decomposition in Eq. ([10](https://arxiv.org/html/2501.00226v2#S3.E10 "In 3.2 Formalizing Generative EmCom as Decentralized Bayesian Inference ‣ 3 Generative EmCom: A Theoretical Framework ‣ Generative Emergent Communication:Large Language Model is a Collective World Model")) is central to our framework. It demonstrates that minimizing a single, unified objective function, the CFE, naturally gives rise to two distinct processes. The second term corresponds to each agent minimizing its own individual free energy, which involves learning to accurately reconstruct its observations (the prediction error term) while keeping its internal representations regularized (the individual regularization term). The first term, the Collective Regularization, drives the system to form a shared symbol $m$. This term quantifies the cost of encoding the collective internal states $\{z\_{k}\}\_{k}$ into the shared message $m$. The emergence of language is thus framed as a process that optimizes this trade-off between individual predictive accuracy and collective communicative efficiency.

This CFE formulation allows for a clear comparison with the ELBO-maximizing objective of signaling games presented in Section 2.1. While both are founded on the ELBO principle, they differ significantly in scope and structure. The signaling game ELBO typically models a two-agent, one-shot, and often asymmetric (sender/receiver) interaction. In contrast, the CFE provides a formulation for a population of $K$ agents engaged in a continuous, decentralized process of collective sense-making. The CFE’s explicit decomposition into individual and collective terms provides a richer, more structured model of the interplay between individual learning and social language emergence, a distinction that conventional signaling game formulations do not typically make explicit.

Table 1: Nomenclature and parameter details

|  |  |
| --- | --- |
| $m\_{t}$ | Message (shared latent variable) communicated between agents at time $t$ |
| $o^{k}\_{t}$ | Optimality variable for the $k$-th agent (1: optimal, 0: not optimal) |
| $z^{k}\_{t}$ | Internal representation (e.g., state in RL) of the $k$-th agent at time $t$ |
| $a^{k}\_{t}$ | Action of the $k$-th agent at time step $t$ |
| $x^{k}\_{t}$ | Observations (or sensory inputs) of the $k$-th agent at time $t$ |
| $\theta^{k}$ | Global parameters of the internal models of the $k$-th agent, for instance, neural networks |
| $\phi^{k}$ | Parameters of language model of the $k$-th agent. |
| $r^{k}$ | Reward function for the $k$-th agent |
| $p(\cdot)$ | Original probability density function (i.e., a generative model) |
| $q(\cdot)$ | Approximate probability function (i.e., an inference model) |

### 3.3 The Naming Game as a Microcosm of Collective Inference

The hypothetical argument that language game can perform the decentralized Bayesian inference has a computational basis though whether actual language communication can realize such decentralized Bayesian inference in our human society is an open question. The MHNG is an instance of this idea.

The MHNG comprises the following steps:

1. 1.

   Perception: Speaker and listener agents (Sp and Li) observe the $d$-th object, obtain $x^{Sp}\_{d}$, and $x^{Li}\_{d}$, and infer their internal representations $z\_{d}^{Sp}$ and $z\_{d}^{Li}$, respectively.
2. 2.

   MH communication: Speaker mentions the name $m\_{d}^{Sp}$ of the $d$-th object by sampling it from $p(m\_{d}|z\_{d}^{Sp},\phi^{Sp})$. The listener determines whether it accepts the naming with probability $\gamma={\rm min}\left(1,\frac{p(z\_{d}^{Li}|{\phi}^{Li},m\_{d}^{Sp})}{p(z\_{d}^{Li}|{\phi}^{Li},m\_{d}^{Li})}\right)$.
3. 3.

   Learning: After MH communication was performed for every object, the listener updates its global parameters $\theta^{Li}$ and $\phi^{Li}$.
4. 4.

   Turn-taking: The speaker and listener alternate their roles and go back to (1).

It has been demonstrated that the MHNG is equivalent to the Metropolis-Hastings algorithm for inferring latent variables in a probabilistic generative model.
As a result, the MHNG protocol guarantees that the CFE, defined by the KL-divergence between the agents’ collective belief and the true posterior, is monotonically non-increasing in expectation. This is because the underlying distributed Metropolis-Hastings sampler satisfies the detailed balance condition, a well-established result related to the Data Processing Inequality [[21](https://arxiv.org/html/2501.00226v2#bib.bib21)], ensuring convergence towards the target posterior distribution.
This model conditions the internal representations $z^{k}$ of multiple agents, acting as representation learning machines, on a common external representation $m$.
Although the original study assumed two agents and a categorical message $m$, the core probabilistic graphical model (PGM) of generative EmCom underlying this theory does not make these assumptions. Consequently, this fundamental idea can be extended in various ways.

As described, unlike referential games, MHNG assumes a joint attention performed by two agents1. This assumption may seem strange from the game-theoretic approach to EmCom, but it is a deliberate choice made to depart from the feedback-dependent principle of success or failure that underpins many such models. Developmental studies suggest that such explicit feedback interactions are rarely observed in natural language acquisition and are an implausible metaphor for how infants learn [[126](https://arxiv.org/html/2501.00226v2#bib.bib126)]. For human infants, joint attention is not a consequence of a communicative act, but rather a cognitive foundation that is in place before the vocabulary explosion occurs. Furthermore, children engaging in learning presuppose a pedagogical intention from adults [[23](https://arxiv.org/html/2501.00226v2#bib.bib23)], rather than simply testing a communication channel. Therefore, by assuming cooperative behavior grounded in joint attention, MHNG, as an example of generative EmCom, better aligns with empirical findings in human communication behavior than conventional discriminative models.

![Refer to caption](https://arxiv.org/html/2501.00226v2/mhng_.png)

Figure 2: (Top) Overview of the MHNG process. In the game, which two agents (A and B) engage in, the agents perceive a target object with joint attention and form internal representations. One agent (speaker) utters a sign and the other (listener) determines whether to accept it. Thereafter, they take turns. (Bottom) PGM representation, which is assumed in the MHNG. The MHNG is proved to be an inference process in the representation learning in a collective multi-agent system [[124](https://arxiv.org/html/2501.00226v2#bib.bib124)].

The original idea of MH-based EmCom was introduced by [Hagiwara et al. [44]](https://arxiv.org/html/2501.00226v2#bib.bib44) and later generalized and formalized by [Taniguchi et al. [124]](https://arxiv.org/html/2501.00226v2#bib.bib124), who clarified its connection to representation learning. The concept of MHNG has since been extended and validated in various ways. The extension to multimodal sensory information was achieved by [Hagiwara et al. [43]](https://arxiv.org/html/2501.00226v2#bib.bib43), who demonstrated that MHNG can lead to symbol emergence even when agents have different sensory modalities. Their work also showed that modality information possessed by other agents, but not by oneself, can facilitate object category formation.
Similar multimodal extensions have been explored with variational autoencoder (VAE)-based representation learning by [Hoang et al. [48]](https://arxiv.org/html/2501.00226v2#bib.bib48), though their work suggests that the mechanism for integrating multimodal sensory information influences symbol emergence.
Although these MHNG studies involve two agents, a mathematical extension to $N$-agent conditions was developed by [Inukai et al. [52]](https://arxiv.org/html/2501.00226v2#bib.bib52), who introduced a recursive structure in communication while maintaining its characteristics as distributed Bayesian inference. They argued that random partner selection for MHNG can be considered as a one-sample and limited-length approximation of this approach.

The Generative EmCom framework is general, and its core mechanisms are not limited to the exchange of simple categorical signs; they can be readily extended to handle complex, compositional languages. A recent study by [Le Hoang et al. [69]](https://arxiv.org/html/2501.00226v2#bib.bib69) demonstrates that sharing compositional word sequences is possible within the MHNG framework, similar to numerous EmCom studies. Furthermore, [Matsui et al. [80]](https://arxiv.org/html/2501.00226v2#bib.bib80) extended this concept to a full captioning game, where multiple Vision-Language Models interactively generate and refine natural language captions for images. From Peirce’s semiotic perspective, signs include both compositional discrete sequences and continuous signs such as voice pitch and facial expressions. A recent study by [You et al. [143]](https://arxiv.org/html/2501.00226v2#bib.bib143) demonstrated that such continuous signs can emerge within the generative EmCom framework, whereas [Saito et al. [107]](https://arxiv.org/html/2501.00226v2#bib.bib107) modeled the emergence of compositional signs from continuous time-series information as signals.

To verify the CPC hypothesis, examining whether human sign acceptance rates in joint attention naming scenarios match MHNG predictions was necessary. An experimental semiotic study by [Okumura et al. [92]](https://arxiv.org/html/2501.00226v2#bib.bib92) demonstrated that the sign acceptance rate in MHNG effectively predicts human behavior.

MHNG serves as a basic language game to represent symbol emergence by realizing distributed Bayesian inference and inferring latent variables of the generative model, corresponding to language. The critical point is that the inference of the posterior distribution is performed in a decentralized manner through language games. This suggests that being based on the MH method is not a necessary condition. The MHNG-based approach represents an initial step in modeling symbol emergence (or language emergence, EmCom) as decentralized Bayesian inference. Future studies should explore the possibility of constructing generative EmCom models by distributing various inference methods (e.g., [Hoang et al. [49]](https://arxiv.org/html/2501.00226v2#bib.bib49)).

## 4 Emergence of a Collective World Model through Multi-Agent Interaction and Cooperation

The previous section used the MHNG to illustrate decentralized inference under the simplified assumption of joint attention. This section expands upon that principle, turning to more general multi-agent systems where joint attention is not required. Here, the essence of the CPC framework becomes clear: to integrate the diverse, partially observable perspectives of multiple agents through communication. We will explore how an emergent language allows agents to resolve their individual uncertainties and coordinate their actions by inferring a shared understanding of the world. This exploration begins with the application of Generative EmCom to MARL, considering that Type 1 world models are theoretically rooted in reinforcement learning studies.

### 4.1 From Communication to Cooperation in Multi-Agent Systems

Figure 3: Graphical model of generating cooperative actions for two agents.

Communication and language are often considered to emerge to facilitate multi-agent cooperation.
In recent years, studies on MARL with communication channels have been progressing.
Initial methods in multi-agent deep RL include DIAL [[30](https://arxiv.org/html/2501.00226v2#bib.bib30)] and CommNet [[115](https://arxiv.org/html/2501.00226v2#bib.bib115)]. These methods connect the networks of agents through messages, enabling the learning of necessary messages for cooperative behavior through backpropagation. Additionally, multi-agent deep deterministic policy gradient (MADDPG), an extension of the DDPG [[75](https://arxiv.org/html/2501.00226v2#bib.bib75)] for MARL, has been proposed [[78](https://arxiv.org/html/2501.00226v2#bib.bib78)].
In these methods, the agents use messages sent from all other agents to learn their policies.
Methods involving weighting or attention mechanisms have been developed to limit communication to only necessary agents [[59](https://arxiv.org/html/2501.00226v2#bib.bib59), [56](https://arxiv.org/html/2501.00226v2#bib.bib56), [60](https://arxiv.org/html/2501.00226v2#bib.bib60), [53](https://arxiv.org/html/2501.00226v2#bib.bib53)]. To compute efficient messages, graph neural networks (GNNs) are used [[19](https://arxiv.org/html/2501.00226v2#bib.bib19), [76](https://arxiv.org/html/2501.00226v2#bib.bib76), [2](https://arxiv.org/html/2501.00226v2#bib.bib2), [87](https://arxiv.org/html/2501.00226v2#bib.bib87), [101](https://arxiv.org/html/2501.00226v2#bib.bib101)].
In these studies, multiple agents are connected through a network and messages are inferred by making them differentiable variables through backpropagation. In other words, error information computed from the internal states of others is directly transmitted to oneself, which is an unnatural modeling from the perspective of communication among independent individuals.

In contrast, generative EmCom allows us to formulate MARL with EmCom in a Bayesian manner by incorporating the idea of CaI [[71](https://arxiv.org/html/2501.00226v2#bib.bib71)], which is a theory to formulate RL as a PGM [[28](https://arxiv.org/html/2501.00226v2#bib.bib28), [85](https://arxiv.org/html/2501.00226v2#bib.bib85)].
Figure [3](https://arxiv.org/html/2501.00226v2#S4.F3 "Figure 3 ‣ 4.1 From Communication to Cooperation in Multi-Agent Systems ‣ 4 Emergence of a Collective World Model through Multi-Agent Interaction and Cooperation ‣ Generative Emergent Communication:Large Language Model is a Collective World Model") shows a graphical model of cooperative action generation between two agents, and the details of each stochastic variable are listed in Table [1](https://arxiv.org/html/2501.00226v2#S3.T1 "Table 1 ‣ 3.2 Formalizing Generative EmCom as Decentralized Bayesian Inference ‣ 3 Generative EmCom: A Theoretical Framework ‣ Generative Emergent Communication:Large Language Model is a Collective World Model").
The behavior of each agent is generated through a Markov decision process with a prior variable $m\_{t}$.
The state $z^{k}\_{t}$ of an agent at time $t$ is determined according to state $z^{k}\_{t-1}$, action $a^{k}\_{t-1}$, and message $m\_{t}$, which is the shared latent variable:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $\displaystyle z^{k}\_{t}\sim p(z^{k}\_{t}|m\_{t},z^{k}\_{t-1},a^{k}\_{t-1}).$ |  | (11) |

where $k\in\{A,B\}$ denotes an index of agents.
The agent can indirectly infer the state of others through the message $m\_{t}$ in a probabilistic manner.

The optimality variable $o^{k}\_{t}\in\{0,1\}$ represents the state optimality of both agents: $1$ indicates that the state and action pair are on the optimal trajectories, whereas $0$ indicates it is not.
Note that optimality is a type of probabilistic interpretation of reward functions as shown below.
In this model, two types of optimality exist: one for each individual agent and the other for the group of agents.
The probability $p(o^{k}\_{t}=1|z^{k}\_{t},a^{k}\_{t})$ of this optimality variable is computed using reward function $r^{k}(z^{k}\_{t},a^{k}\_{t})$ as follows:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $\displaystyle p(o^{k}\_{t}=1|z^{k}\_{t},a^{k}\_{t})\propto\exp(r(z^{k}\_{t},a^{k}\_{t})).$ |  | (12) |

For the group of agents, the true optimality $o^{AB}\_{t}$ depends on the joint state and actions, with its probability being proportional to a global reward function $r^{AB}$:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $\displaystyle p(o^{AB}\_{t}=1|z^{A}\_{t},a^{A}\_{t},z^{B}\_{t},a^{B}\_{t})\propto\exp(r^{AB}(z^{A}\_{t},a^{A}\_{t},z^{B}\_{t},a^{B}\_{t})).$ |  | (13) |

However, since each agent $k$ cannot observe others’ internal variables, it must learn an approximate model of this group optimality conditioned only on its own state $z^{k}\_{t}$ and action $a^{k}\_{t}$. Agent $k$ therefore learns its own predictive model of group success as:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $\displaystyle p(o^{AB}\_{t}=1|z^{k}\_{t},a^{k}\_{t})\propto\exp(\hat{r}^{AB}\_{k}(z^{k}\_{t},a^{k}\_{t})),$ |  | (14) |

where $\hat{r}^{AB}\_{k}(z^{k}\_{t},a^{k}\_{t})$ is a function learned by agent $k$ that locally approximates the global reward. This formulation eliminates the necessity for an agent to access others’ internal variables to model group success, while still allowing it to contribute to the collective goal.

Following the theory of CaI, the optimal state sequence for both agents can be calculated by inferring state $z\_{t}$ and message $m\_{t}$ under the condition that the value of the optimality variables is always 1, as if the two-agent system acts as a single agent:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $\displaystyle z^{A}\_{t},m\_{t}\sim p(z^{A}\_{t},m\_{t}|z^{B}\_{t},o^{A}\_{1:T}={\mathbf{1}},o^{AB}\_{1:T}={\mathbf{1}}).$ |  | (15) |

However, this equation has two problems: it includes the internal state $z^{B}\_{t}$ of others, which cannot be observed in practice, and deriving this probability distribution analytically is difficult.
We solve these problems by alternately inferring the following two variables:

|  |  |  |
| --- | --- | --- |
|  | $\displaystyle\left.\begin{aligned} z^{A}\_{1:T},a^{A}\_{1:T}&\sim p(z^{A}\_{1:T},a^{A}\_{1:T}|o^{A}\_{1:T}={\mathbf{1}},m\_{1:T})\\ z^{B}\_{1:T},a^{B}\_{1:T}&\sim p(z^{B}\_{1:T},a^{B}\_{1:T}|o^{B}\_{1:T}={\mathbf{1}},m\_{1:T})\end{aligned}~~\right\}{\rm:planning,}$ |  |
|  |  |  |  |
| --- | --- | --- | --- |
|  |  |  | (16) |
|  |  |  |
| --- | --- | --- |
|  | $\displaystyle m\_{1:T}\sim p(m\_{1:T}|z^{A}\_{1:T},z^{B}\_{1:T},o^{AB}\_{1:T}={\mathbf{1}}){\rm:communication.}$ |  |
|  |  |  |  |
| --- | --- | --- | --- |
|  |  |  | (17) |

Equation ([16](https://arxiv.org/html/2501.00226v2#S4.E16 "In 4.1 From Communication to Cooperation in Multi-Agent Systems ‣ 4 Emergence of a Collective World Model through Multi-Agent Interaction and Cooperation ‣ Generative Emergent Communication:Large Language Model is a Collective World Model")) describes state planning, which can be computed based on the CaI framework [[71](https://arxiv.org/html/2501.00226v2#bib.bib71)].
Equation ([17](https://arxiv.org/html/2501.00226v2#S4.E17 "In 4.1 From Communication to Cooperation in Multi-Agent Systems ‣ 4 Emergence of a Collective World Model through Multi-Agent Interaction and Cooperation ‣ Generative Emergent Communication:Large Language Model is a Collective World Model")) describes the inference of the message and can be formulated using the MHNG proposed by [Hagiwara et al. [43]](https://arxiv.org/html/2501.00226v2#bib.bib43) and [Taniguchi et al. [124]](https://arxiv.org/html/2501.00226v2#bib.bib124), which allows both agents to infer messages through communication without observing each other’s internal states. Note that MHNG enables two agents to perform sampling in ([17](https://arxiv.org/html/2501.00226v2#S4.E17 "In 4.1 From Communication to Cooperation in Multi-Agent Systems ‣ 4 Emergence of a Collective World Model through Multi-Agent Interaction and Cooperation ‣ Generative Emergent Communication:Large Language Model is a Collective World Model")) without simultaneous observations of $z^{A}\_{t},z^{B}\_{t}$.

Thus, MHNG can be used not only for multimodal object categorization and naming but also for action coordination among multi-agents using PGM to formulate MARL, that is, modeling EmCom for multi-agent cooperation.
This theoretical connection has been recently instantiated in the MARL-CPC framework, which successfully applies the principles of CPC to on-policy RL algorithms and demonstrates effective communication in non-cooperative settings [[141](https://arxiv.org/html/2501.00226v2#bib.bib141)].

Figure 4: Graphical model of generative EmCom involving world models.

### 4.2 Language as an External Representation for Integrating World Models

As established in Section 2.2, an individual agent’s world model is an internal mechanism used to predict future latent states based on current states and actions, i.e., it learns the state transition dynamics $p(z\_{t+1}|z\_{t},a\_{t})$. In a multi-agent setting where each agent has only partial observations of the environment, each agent learns its own subjective world model. Without a mechanism for exchanging information, these individual world models remain isolated, and the agents lack a way to form a shared, consistent understanding of the global environment.

Our Generative EmCom framework introduces such a mechanism by incorporating a shared latent variable, the message $m$, into the world model of each agent. This fundamentally alters the state transition dynamics. As depicted in the PGM for a single agent with communication (Figure [4](https://arxiv.org/html/2501.00226v2#S4.F4 "Figure 4 ‣ 4.1 From Communication to Cooperation in Multi-Agent Systems ‣ 4 Emergence of a Collective World Model through Multi-Agent Interaction and Cooperation ‣ Generative Emergent Communication:Large Language Model is a Collective World Model")), the world model of agent $k$, parameterized by $\theta^{k}$, now learns the dynamics conditioned on the message: $p(z^{k}\_{t+1}|z^{k}\_{t},a^{k}\_{t},m\_{t})$. Here, the message $m\_{t}$ is not part of the action space; instead, it acts as a conditioning variable that directly influences the agent’s prediction of its future internal state $z^{k}\_{t+1}$. This latent state, in turn, informs the agent’s policy, $\pi^{k}$, which generates the subsequent action.

This architecture creates a powerful feedback loop for knowledge integration. As formalized in our framework (Section 3.2), the message $m\_{t}$ is inferred from the collective internal states of all agents, $\{z^{k}\_{t}\}\_{k}$. In turn, this collectively-informed message influences the future internal state of each individual agent. Therefore, the process of learning to use the language $m$ effectively becomes a process of learning to align these individual world models. Each agent learns to encode its own unique knowledge into the shared language and to decode the language to update its own world model with information it could not observe directly. This perspective aligns with recent works that have demonstrated the effectiveness of message-conditioned world models for improving coordination [[22](https://arxiv.org/html/2501.00226v2#bib.bib22), [77](https://arxiv.org/html/2501.00226v2#bib.bib77), [88](https://arxiv.org/html/2501.00226v2#bib.bib88)].

Through this process, the emergent language $m$ becomes more than just a set of signals for coordinating immediate actions. It becomes the shared, external representation that embodies the integrated knowledge of the individual world models. It is the medium through which a collective of agents, each with a subjective Type 1 World Model, can construct a shared, objective Type 2 World Model (i.e., Model of the World), allowing the group to model the world from a unified perspective that transcends any single agent’s limited view.

![Refer to caption](https://arxiv.org/html/2501.00226v2/3-level-captioning.png)


Figure 5: Three levels of the relationship between language, perceptual, and action information. Left: (A) Image captioning and generation tasks corresponding language to a still image. (B) Video captioning and generation tasks corresponding language to a video, that is, a sequence of visual stimuli. (C) Action-dependent video captioning and generation corresponding language to dynamic perceptual and action information, which corresponds to a world model and a policy conditioned by language. Right: probabilistic generative models corresponding to each of (A) – (C).


Figure 6: PGMs for generative EmCom corresponding to three levels of complexity: (A) image-, (B) video-, and (C) action- and video-based tasks. These models represent instances of the CPC hypothesis and generalizations of MHNG studies.

### 4.3 Collective World Model as an Abstractive Prior over Embodied Experiences

To understand how language integrates individual world models into a collective one, we first consider the hierarchy of experiences that language can represent, as illustrated in Figure [5](https://arxiv.org/html/2501.00226v2#S4.F5 "Figure 5 ‣ 4.2 Language as an External Representation for Integrating World Models ‣ 4 Emergence of a Collective World Model through Multi-Agent Interaction and Cooperation ‣ Generative Emergent Communication:Large Language Model is a Collective World Model"). This hierarchy progresses through three levels of increasing complexity. Level A represents the bidirectional relationship between a static observation, such as an image $x\_{k}$, and a linguistic description $m$. This includes both image captioning (inferring $m$ from $x\_{k}$) and image generation (generating $x\_{k}$ from $m$) [[134](https://arxiv.org/html/2501.00226v2#bib.bib134), [139](https://arxiv.org/html/2501.00226v2#bib.bib139), [102](https://arxiv.org/html/2501.00226v2#bib.bib102)]. Level B extends this to dynamic sequences, where the language $m$ corresponds to a stream of observations over time, $\{x^{k}\_{t}\}\_{t=1:T}$, as seen in video captioning and generation tasks [[132](https://arxiv.org/html/2501.00226v2#bib.bib132), [140](https://arxiv.org/html/2501.00226v2#bib.bib140)]. The hierarchy culminates in Level C, which models the full sensorimotor loop of an embodied agent. Here, language $m$ is grounded in both dynamic perception $\{x^{k}\_{t}\}\_{t=1:T}$ and a sequence of actions $\{a^{k}\_{t}\}\_{t=1:T}$. This final level corresponds to the world models used in modern robotics, often called Vision-Language-Action (VLA) models, which learn from an agent’s own embodied interactions [[5](https://arxiv.org/html/2501.00226v2#bib.bib5), [61](https://arxiv.org/html/2501.00226v2#bib.bib61), [25](https://arxiv.org/html/2501.00226v2#bib.bib25), [145](https://arxiv.org/html/2501.00226v2#bib.bib145), [58](https://arxiv.org/html/2501.00226v2#bib.bib58)].

Crucially, in a collective setting, the shared message $m$ is inferred from the observations of all $K$ agents, e.g., $m\sim q(m|\{x^{k}\_{1:T}\}\_{k})$. This collective inference process itself constitutes a form of (external) representation learning, where the structure of the shared language $m$ comes to reflect the integrated knowledge of the entire group.

The generative process for each of these three levels can be explicitly formulated as a Probabilistic Graphical Model (PGM), as shown in Figure [6](https://arxiv.org/html/2501.00226v2#S4.F6 "Figure 6 ‣ 4.2 Language as an External Representation for Integrating World Models ‣ 4 Emergence of a Collective World Model through Multi-Agent Interaction and Cooperation ‣ Generative Emergent Communication:Large Language Model is a Collective World Model"). At Level A, the PGM captures the relationship between a static image observation $x^{k}$ and a message $m$, mediated by an internal representation $z^{k}$.
At Level B, this model is extended to handle temporal dynamics, where a sequence of video frames $\{x^{k}\_{1:T}\}$ informs a sequence of internal states $\{z^{k}\_{1:T}\}$.
As shown in the PGMs for Level A and Level B (Figure [6](https://arxiv.org/html/2501.00226v2#S4.F6 "Figure 6 ‣ 4.2 Language as an External Representation for Integrating World Models ‣ 4 Emergence of a Collective World Model through Multi-Agent Interaction and Cooperation ‣ Generative Emergent Communication:Large Language Model is a Collective World Model") (A) and (B)), the processes are governed by two sets of parameters for each agent $k$: $\theta^{k}$ represents the parameters of the agent’s internal model (i.e., the VLM), while $\phi^{k}$ denotes the parameters of the prior over the shared message $m$.
Finally, Level C depicts the complete generative model for an embodied agent, where both sensory observations $\{x^{k}\_{1:T}\}$ and actions $\{a^{k}\_{1:T}\}$ jointly determine the agent’s internal state trajectory. The parameters of this comprehensive model, $\bar{\theta}^{k}$, therefore encompass not only the agent’s predictive world model but also its policy. These PGMs represent concrete instances of the overarching CPC hypothesis.

This principle generalizes directly as we move up the hierarchy to a collective of fully embodied VLA agents (Level C). Here, the framework models a population of agents, each possessing its own sophisticated world model for navigating its environment (Figure [6](https://arxiv.org/html/2501.00226v2#S4.F6 "Figure 6 ‣ 4.2 Language as an External Representation for Integrating World Models ‣ 4 Emergence of a Collective World Model through Multi-Agent Interaction and Cooperation ‣ Generative Emergent Communication:Large Language Model is a Collective World Model") (C)). The interactive, decentralized process of these agents developing a shared language to communicate about their sensorimotor experiences $(\{x^{k}\_{1:T}\}\_{k},\{a^{k}\_{1:T}\}\_{k})$ becomes mathematically equivalent to the process of learning a single, abstract, hierarchical world model that spans the entire group. Therefore, we argue that embodied symbol emergence, under the CPC framework, is collective world modeling.

The emergent language $m$ is not merely a tool for this process; it is the very instantiation of the Collective World Model. It functions as a highly abstract structured prior over the entire space of possible embodied experiences within the society. The dynamic, interactive process of collective sense-making described above does not simply vanish; it leaves behind a static artifact in the form of a text corpus. We can think of this corpus as a ‘‘fossil record’’ of a society’s ongoing, collective inference about the world2.
From this perspective, each sentence or document within a corpus can be viewed as a sample from an underlying posterior distribution. More formally, we consider a sentence $m\_{j}^{[i]}$ describing a particular event or situation $j$ to be a sample from the approximate posterior $q(m|\{\{x^{k}\_{t}\}\_{t=1:T},\{a^{k}\_{t}\}\_{t=1:T}\}\_{k})$. It is this product, rich with the implicitly encoded structure of the collective world model, that serves as the training data for LLMs.

## 5 LLM as Collective World models

### 5.1 Language Corpora as Samples from the Collective World Model

The preceding sections have established our central premise: that human language, as a product of CPC, can be understood as a Collective World Model externalized in a shared symbolic system. Building on this foundation, we now connect this theory to the training of LLMs.

As argued in Section 4.3, each sentence $m$ within a text corpus is not an isolated artifact but can be viewed as a sample drawn from a complex posterior distribution, conditioned on the unobserved, collective sensorimotor experiences of the society that generated it:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$m\sim q(m|\{\{x^{k}\_{t}\}\_{t=1:T},\{a^{k}\_{t}\}\_{t=1:T}\}\_{k})$$ |  | (18) |

The vast web-scale corpora used to train modern LLMs, therefore, represent a massive dataset of samples drawn from this collective, world-grounded inference process. The fundamental objective of an LLM during pre-training, typically next-token prediction, is an autoregressive method to learn a model, which we denote as $p\_{\text{LM}}(m)$, that approximates the marginal distribution $p(m)$ of these textual samples. From this perspective, the task of an LLM is not merely to learn statistical correlations in text, but to implicitly model the output of the complex, embodied, and collective process that produced the text in the first place.

### 5.2 The LLM as a Reconstructor of Collective Representation

As established in the previous section, LLMs are trained to model the distribution $P(m)$ of language corpora, which are themselves samples from a collective, world-grounded process. When a trained LLM processes a given sentence $m$, we can posit that it forms a corresponding high-level internal representation or latent state, which we denote as $z\_{\text{LM}}$. This constitutes an inference or recognition process within the LLM: $q\_{\text{LM}}(z\_{\text{LM}}|m)$.

This allows us to frame the end-to-end process\CJK@punctchar\CJK@uniPunct0"80"94from human experience to LLM representation\CJK@punctchar\CJK@uniPunct0"80"94as a two-stage process of representation transformation, as illustrated in Figure [7](https://arxiv.org/html/2501.00226v2#S5.F7 "Figure 7 ‣ 5.2 The LLM as a Reconstructor of Collective Representation ‣ 5 LLM as Collective World models ‣ Generative Emergent Communication:Large Language Model is a Collective World Model").

1. 1.

   Stage 1: Generation by Human Society (Encoding): The collective internal states of all agents $\{z^{k}\}\_{k}$, which are grounded in sensorimotor experience, are compressed and encoded into the discrete, symbolic form of language, $m$.
2. 2.

   Stage 2: Reconstruction by LLM (Inference): The LLM, having learned the statistical structure of language, takes a sentence $m$ as input and infers its own internal, continuous representation $z\_{\text{LM}}$. This can be seen as a reconstruction of a high-dimensional representation from the symbolic code.

![Refer to caption](https://arxiv.org/html/2501.00226v2/wm-reconstruction.png)


Figure 7: A schematic of the representation reconstruction process. Human society acts as a large-scale encoder, transforming embodied experiences (Type 1 World Models) from sensorimotor interactions into an externalized representation, i.e., language ($m$). The LLM then acts as a decoder or reconstructor, inferring its own internal latent state ($z\_{\text{LM}}$) from language. This process allows the LLM to learn an internal model (Type 2 World Model) whose structure mirrors the original collective world model.

The crucial implication of this two-stage process, $\{z^{k}\}\_{k}\rightarrow m\rightarrow z\_{\text{LM}}$, is the resulting structural alignment [[121](https://arxiv.org/html/2501.00226v2#bib.bib121)]. The language $m$ is the sole informational bottleneck between the collective human mind and the LLM. Therefore, for an LLM to effectively model the distribution of $m$, it must develop an internal latent space $z\_{\text{LM}}$ whose relational structure necessarily mirrors the relational structure of the original source space $\{z^{k}\}\_{k}$. While the LLM does not reconstruct the specific values of $\{z^{k}\}\_{k}$, it learns to reconstruct the geometry of the conceptual space that generated the language. This provides a powerful mechanism for transferring world structure from a society of embodied agents to a disembodied language model.

### 5.3 Explaining Distributional Semantics and Representational Alignment

This framework of structural representation reconstruction provides a principled explanation for the otherwise mysterious emergence of world knowledge in LLMs. For decades, it has been observed that language models capture the relational structure of the world, a phenomenon known as distributional semantics [[47](https://arxiv.org/html/2501.00226v2#bib.bib47), [79](https://arxiv.org/html/2501.00226v2#bib.bib79)]. Even before modern LLMs, models like word2vec could perform analogical reasoning, such as computing $"\rm{London}"-"\rm{UK}"+"\rm{France}"\simeq"\rm{Paris}"$ [[81](https://arxiv.org/html/2501.00226v2#bib.bib81), [82](https://arxiv.org/html/2501.00226v2#bib.bib82)], implying that the geometry of their embedding spaces reflects real-world conceptual relationships.
Our framework explains this as a natural consequence of the representation reconstruction process. To be precise, the reason the statistical relationships between words in an LLM’s latent space ($z\_{\text{LM}}$) reflect the structure of the real world is because they are reconstructing the structure of the collective human internal representations ($\{z^{k}\}\_{k}$). It is this set of internal representations that, as a whole, constitutes the collective model used by the society to predict the world. The LLM, in learning to model the distribution of $m$, naturally develops an internal latent space that mirrors the relational structure of the collective human representations that originally encoded that world knowledge. The structure is not learned from a vacuum; it is inherited.

This framework of representation reconstruction provides a principled explanation for the otherwise mysterious emergence of world knowledge in LLMs. For decades, it has been observed that language models capture the relational structure of the world, a phenomenon known as distributional semantics [[47](https://arxiv.org/html/2501.00226v2#bib.bib47), [79](https://arxiv.org/html/2501.00226v2#bib.bib79)]. Even before modern LLMs, models like word2vec could perform analogical reasoning, such as computing $"\rm{London}"-"\rm{UK}"+"\rm{France}"\simeq"\rm{Paris}"$ [[81](https://arxiv.org/html/2501.00226v2#bib.bib81), [82](https://arxiv.org/html/2501.00226v2#bib.bib82)], implying that the geometry of their embedding spaces reflects real-world conceptual relationships. Our framework explains this as a natural consequence of the representation reconstruction process. The reason the statistical relationships between words in an LLM’s latent space ($z\_{\text{LM}}$) reflect the structure of the real world is that the language ($m$) it was trained on was generated by a society of agents collectively trying to predict that world.
The LLM, in learning to model the distribution of $m$, inevitably develops an internal latent space that reconstructs the relational structure of the collective human representations ($\{z^{k}\}\_{k}$) that originally encoded that world knowledge. The structure is not learned from a vacuum; it is inherited. This process is how an LLM acquires a powerful Model of the World (Type 2) by statistically analyzing the linguistic output of a society of agents, each possessing their own subjective World Model as an Internal Model (Type 1).

This perspective also helps situate our hypothesis within the broader landscape of research on world models in LLMs. Several studies have compellingly demonstrated that LLMs can be used as world models for specific tasks, for example in planning [[46](https://arxiv.org/html/2501.00226v2#bib.bib46)] or for modeling game states [[74](https://arxiv.org/html/2501.00226v2#bib.bib74)]. While these works establish that world-like representations can emerge, they primarily focus on how these representations can be leveraged. Our hypothesis, in contrast, provides a more fundamental explanation for why such rich, world-congruent knowledge is present in the first place. Similarly, Andreas argues that LLMs model the beliefs and intentions of agents within the linguistic space [[4](https://arxiv.org/html/2501.00226v2#bib.bib4)]. Our framework complements and grounds this view by proposing that these linguistic agent models emerge precisely because the language itself is a reflection of a collective model formed by embodied agents interacting within a shared physical environment.

Finally, our hypothesis offers a particularly parsimonious explanation for the representational alignment observed between different modalities. Huh et al. introduced the platonic representation hypothesis, proposing that internal representations learned from language ($q\_{L}(z|m)$) and vision ($q\_{V}(z|x)$) converge toward a similar latent structure [[51](https://arxiv.org/html/2501.00226v2#bib.bib51)]. Within the CPC framework, this alignment is not a surprising outcome that requires a pre-existing platonic ideal, but an expected one. Since human language ($m$) emerges as a structured representation of collective observations of the world ($x=\{x^{k}\}\_{k}$), it is natural that a model trained on language ($q\_{L}(z|m)$) would learn a latent space whose structure mirrors that of a model trained on direct observation ($q\_{V}(z|x)$). Our framework thus provides a generative and developmental explanation for this empirically observed alignment, rooted in the principles of collective inference.

## 6 Discussion

This study proposed a theoretical framework that unified EmCom, world models, and LLMs through the lens of CPC. We introduced the concept of generative EmCom as an alternative formulation of the conventional EmCom, which is based on a discriminative model-based language game such as referential games, and described their relationships. The concept, generative EmCom, is based on the CPC hypothesis, which demonstrates the modeling of language emergence as decentralized Bayesian inference of shared latent representations. We showed the application of this framework to MARL and provided a novel perspective on LLMs as collective world models that integrate the diverse experiences and knowledge of multiple agents into a unified representational space.

### 6.1 Implications for Artificial Intelligence and Cognitive Science

The theoretical framework proposed here offers several important insights. First, it provides a principled explanation for how language models can acquire world knowledge without direct sensorimotor experience, by tapping into the accumulated wisdom encoded in human language through CPC. Second, it bridges the gap between individual cognitive development and collective language evolution by showing how both can be comprehended through the lens of representation learning and free energy minimization. Third, it suggests that the success of LLMs may be fundamentally linked to their ability to capture and integrate the collective world models acquired by humans, i.e., through embodied sensorimotor interactions with the world.

### 6.2 Assumptions and Limitations of the Proposed Framework

However, several limitations of the current work should be addressed. First, although we provide a theoretical framework, direct empirical evidence for the collective world model hypothesis remains limited. The relationship between neural representations in language models and human conceptual structures needs further investigation. Second, the proposed framework primarily focuses on the emergence of linguistic structure and meaning but does not fully address the emergence of pragmatic aspects of language use. Third, the current formulation may not fully capture the dynamic, interactive nature of human language evolution, for instance, language evolution over generations and through the interaction of several agents in an open world.

### 6.3 Future Directions

From the perspective of world models, understanding the influence of collective world models on the environmental adaptation of agents is also important. According to the proposed theoretical framework, a language formed by multiple agents with the same embodiment learning in the same environment should serve as an appropriate prior distribution for individual world models. In other words, EmLang should accelerate both world model learning and following environmental adaptation based on RL and other methods. Obtaining constructive evidence for this relationship is also crucial.

Our argument and theoretical framework initiate several promising directions for future studies. Although we have established the basic connections between EmCom, world models, and LLMs, significant work remains to validate and extend these ideas. Key priorities include developing experimental paradigms to test the CPC hypothesis, creating more sophisticated computational models and implementations of generative EmCom, and investigating how language formed by embodied agents sharing similar environments could serve as an effective prior distribution for world model learning.
In fact, recent work has already begun to demonstrate the fruitfulness of this approach; for example, [Nomura et al. [88]](https://arxiv.org/html/2501.00226v2#bib.bib88) have extended CPC to dynamic environments by developing a decentralized collective world model.
From a theoretical perspective, a deeper mathematical formalization of the interaction between individual and collective learning processes will be crucial. In addition, this framework has important practical implications for the development of more capable multi-agent systems, improved human–AI interaction, and embodied AIs that rapidly adapt to their physical worlds and communicate their knowledge using EmLang. By pursuing these directions, we can work toward a more comprehensive understanding of language emergence and its role in environmental adaptation while advancing both the theoretical foundations and practical applications of AI systems.

## 7 Conclusion

This paper addressed the fundamental puzzle of how LLMs acquire world knowledge without embodied experience. We proposed the “Collective World Model” hypothesis, arguing that LLMs learn from a rich representational structure that is the product of a society-wide, interactive sense-making process. We provided a formal foundation for this claim with the framework of Generative EmCom, which models language emergence as a decentralized Bayesian inference process driven by the principles of CPC. This perspective unifies the cognitive processes of the individual with the collective evolution of language, offering a coherent explanation for the remarkable capabilities of modern AI and charting a path toward a deeper integration of communication, perception, and action in intelligent systems.

## Author Contributions

Tadahiro Taniguchi: Conceptualization, Writing – Original Draft, Writing – Review & Editing, Supervision, Funding Acquisition.
Ryo Ueda: Writing – Original Draft, Writing – Review & Editing, Funding Acquisition.
Tomoaki Nakamura: Writing – Original Draft, Writing – Review & Editing, Funding Acquisition.
Masahiro Suzuki: Writing – Original Draft, Writing – Review & Editing, Funding Acquisition.
Akira Taniguchi: Writing – Original Draft, Writing – Review & Editing.

## Declaration of Generative AI and AI-assisted technologies in the writing process

During the preparation of this work the authors used Gemini 2.5 pro (Google) and ChatGPT 4o in order to improve readability and language. After using this tool, the authors reviewed and edited the content as needed and take full responsibility for the content of the publication.

## References

- Achille and Soatto [2018]

  Achille, A., Soatto, S., 2018.
  Information dropout: Learning optimal representations through noisy computation.
  IEEE Trans. Pattern Anal. Mach. Intell. 40, 2897–2905.
  URL: <https://doi.org/10.1109/TPAMI.2017.2784440>, doi:[10.1109/TPAMI.2017.2784440](http://dx.doi.org/10.1109/TPAMI.2017.2784440).
- Agarwal et al. [2020]

  Agarwal, A., Kumar, S., Sycara, K., Lewis, M., 2020.
  Learning transferable cooperative behavior in multi-agent teams, in: Proceedings of the 19th International Conference on Autonomous Agents and MultiAgent Systems, International Foundation for Autonomous Agents and Multiagent Systems, Richland, SC. p. 1741â1743.
- Alemi et al. [2017]

  Alemi, A.A., Fischer, I., Dillon, J.V., Murphy, K., 2017.
  Deep variational information bottleneck, in: 5th International Conference on Learning Representations, ICLR 2017, Toulon, France, April 24-26, 2017, Conference Track Proceedings, OpenReview.net.
  URL: <https://openreview.net/forum?id=HyxQzBceg>.
- Andreas [2022]

  Andreas, J., 2022.
  Language models as agent models, in: Goldberg, Y., Kozareva, Z., Zhang, Y. (Eds.), Findings of the Association for Computational Linguistics: EMNLP 2022, Association for Computational Linguistics, Abu Dhabi, United Arab Emirates. pp. 5769–5779.
  URL: <https://aclanthology.org/2022.findings-emnlp.423>, doi:[10.18653/v1/2022.findings-emnlp.423](http://dx.doi.org/10.18653/v1/2022.findings-emnlp.423).
- Arai et al. [2024]

  Arai, H., Miwa, K., Sasaki, K., Yamaguchi, Y., Watanabe, K., Aoki, S., Yamamoto, I., 2024.
  Covla: Comprehensive vision-language-action dataset for autonomous driving.
  arXiv preprint arXiv:2408.10845 .
- Assran et al. [2025]

  Assran, M., Bardes, A., Fan, D., Garrido, Q., Howes, R., Komeili, M., Muckley, M., Rizvi, A., Roberts, C., Sinha, K., Zholus, A., Arnaud, S., Gejji, A., Martin, A., Hogan, F.R., Dugas, D., Bojanowski, P., Khalidov, V., Labatut, P., Massa, F., Szafraniec, M., Krishnakumar, K., Li, Y., Ma, X., Chandar, S., Meier, F., LeCun, Y., Rabbat, M., Ballas, N., 2025.
  V-JEPA 2: Self-supervised video models enable understanding, prediction and planning.
  arXiv preprint arXiv:2506.09985 .
- Assran et al. [2023]

  Assran, M., Touvron, H., Misra, I., Bojanowski, P., Bordes, A., Tseliakhovich, P., Joulin, A., Le, Q., Lample, G., 2023.
  Self-supervised learning from images with a joint-embedding predictive architecture, in: Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition, pp. 15631–15641.
- Barber and Agakov [2003]

  Barber, D., Agakov, F.V., 2003.
  Information maximization in noisy channels : A variational approach, in: Thrun, S., Saul, L.K., Schölkopf, B. (Eds.), Advances in Neural Information Processing Systems 16 [Neural Information Processing Systems, NIPS 2003, December 8-13, 2003, Vancouver and Whistler, British Columbia, Canada], MIT Press. pp. 201–208.
  URL: <https://proceedings.neurips.cc/paper/2003/hash/a6ea8471c120fe8cc35a2954c9b9c595-Abstract.html>.
- Bardes et al. [2024]

  Bardes, A., Garrido, Q., Ponce, J., Chen, X., Rabbat, M., LeCun, Y., Assran, M., Ballas, N., 2024.
  Revisiting feature prediction for learning visual representations from video.
  arXiv preprint arXiv:2404.08471 .
- Bender et al. [2021]

  Bender, E.M., Gebru, T., McMillan-Major, A., Shmitchell, S., 2021.
  On the dangers of stochastic parrots: Can language models be too big?, in: Proceedings of the 2021 ACM Conference on Fairness, Accountability, and Transparency, Association for Computing Machinery, New York, NY, USA. p. 610â623.
  URL: <https://doi.org/10.1145/3442188.3445922>, doi:[10.1145/3442188.3445922](http://dx.doi.org/10.1145/3442188.3445922).
- Brandizzi [2023]

  Brandizzi, N., 2023.
  Toward more human-like ai communication: A review of emergent communication research.
  IEEE Access 11, 142317–142340.
- Brown et al. [2020]

  Brown, T., Mann, B., Ryder, N., Subbiah, M., Kaplan, J.D., Dhariwal, P., Neelakantan, A., Shyam, P., Sastry, G., Askell, A., Agarwal, S., Herbert-Voss, A., Krueger, G., Henighan, T., Child, R., Ramesh, A., Ziegler, D., Wu, J., Winter, C., Hesse, C., Chen, M., Sigler, E., Litwin, M., Gray, S., Chess, B., Clark, J., Berner, C., McCandlish, S., Radford, A., Sutskever, I., Amodei, D., 2020.
  Language models are few-shot learners, in: Advances in Neural Information Processing Systems, pp. 1877–1901.
  URL: <https://proceedings.neurips.cc/paper_files/paper/2020/file/1457c0d6bfcb4967418bfb8ac142f64a-Paper.pdf>.
- Cangelosi and Schlesinger [2015]

  Cangelosi, A., Schlesinger, M., 2015.
  Developmental robotics: From babies to robots.
  MIT press.
- Chaabouni et al. [2020]

  Chaabouni, R., Kharitonov, E., Bouchacourt, D., Dupoux, E., Baroni, M., 2020.
  Compositionality and generalization in emergent languages, in: Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics, Association for Computational Linguistics, Online. pp. 4427–4442.
  URL: <https://aclanthology.org/2020.acl-main.407>, doi:[10.18653/v1/2020.acl-main.407](http://dx.doi.org/10.18653/v1/2020.acl-main.407).
- Chaabouni et al. [2019a]

  Chaabouni, R., Kharitonov, E., Dupoux, E., Baroni, M., 2019a.
  Anti-efficient encoding in emergent communication, in: Wallach, H., Larochelle, H., Beygelzimer, A., d'Alché-Buc, F., Fox, E., Garnett, R. (Eds.), Advances in Neural Information Processing Systems, Curran Associates, Inc.
  URL: <https://proceedings.neurips.cc/paper_files/paper/2019/file/31ca0ca71184bbdb3de7b20a51e88e90-Paper.pdf>.
- Chaabouni et al. [2019b]

  Chaabouni, R., Kharitonov, E., Dupoux, E., Baroni, M., 2019b.
  Anti-efficient encoding in emergent communication, in: Advances in Neural Information Processing Systems 32: Annual Conference on Neural Information Processing Systems 2019, NeurIPS 2019, December 8-14, 2019, Vancouver, BC, Canada, pp. 6290–6300.
  URL: <https://proceedings.neurips.cc/paper/2019/hash/31ca0ca71184bbdb3de7b20a51e88e90-Abstract.html>.
- Chaabouni et al. [2021]

  Chaabouni, R., Kharitonov, E., Dupoux, E., Baroni, M., 2021.
  Communicating artificial neural networks develop efficient color-naming systems.
  Proceedings of the National Academy of Sciences 118, e2016569118.
  URL: <https://www.pnas.org/doi/abs/10.1073/pnas.2016569118>, doi:[10.1073/pnas.2016569118](http://dx.doi.org/10.1073/pnas.2016569118), [arXiv:https://www.pnas.org/doi/pdf/10.1073/pnas.2016569118](http://arxiv.org/abs/https://www.pnas.org/doi/pdf/10.1073/pnas.2016569118).
- Chandler [2002]

  Chandler, D., 2002.
  Semiotics the Basics.
  Routledge.
- Chu et al. [2020]

  Chu, T., Chinchali, S., Katti, S., 2020.
  Multi-agent reinforcement learning for networked system control, in: International Conference on Learning Representations (ICLR).
  URL: <https://openreview.net/forum?id=Syx7A3NFvH>.
- Constant et al. [2018]

  Constant, A., Ramstead, M.J.D., Veissière, S.P.L., Campbell, J.O., Friston, K.J., 2018.
  A variational approach to niche construction.
  J. R. Soc. Interface 15.
- Cover and Thomas [2006]

  Cover, T.M., Thomas, J.A., 2006.
  Elements of Information Theory.
  2nd ed., Wiley-Interscience.
- Cowen-Rivers and Naradowsky [2020]

  Cowen-Rivers, A.I., Naradowsky, J., 2020.
  Emergent communication with world models.
  NeurIPS Workshop on Emergent Communication .
- Csibra and Gergely [2009]

  Csibra, G., Gergely, G., 2009.
  Natural pedagogy.
  Trends in Cognitive Sciences 13, 148–153.
- Deacon [1998]

  Deacon, T.W., 1998.
  The Symbolic Species: The Co-Evolution of Language and the Brain.
  W. W. Norton & Company.
- Dey et al. [2024]

  Dey, S., Zaech, J.N., Nikolov, N., Van Gool, L., Paudel, D.P., 2024.
  Revla: Reverting visual domain limitation of robotic foundation models.
  arXiv preprint arXiv:2409.15250 .
- Ding et al. [2024]

  Ding, J., Zhang, Y., Shang, Y., Zhang, Y., Zong, Z., Feng, J., Yuan, Y., Su, H., Li, N., Sukiennik, N., et al., 2024.
  Understanding world or predicting future? a comprehensive survey of world models.
  ACM Computing Surveys .
- Doya et al. [2007]

  Doya, K., Ishii, S., Pouget, A., Rao, R.P.N. (Eds.), 2007.
  Bayesian Brain: Probabilistic Approaches to Neural Coding.
  The MIT Press.
- Ebara et al. [2023]

  Ebara, H., Nakamura, T., Taniguchi, A., Taniguchi, T., 2023.
  Multi-agent reinforcement learning with emergent communication using discrete and indifferentiable message, in: 2023 15th International Congress on Advanced Applied Informatics Winter (IIAI-AAI-Winter), pp. 366–371.
- Farshbafan et al. [2022]

  Farshbafan, M.K., Saad, W., Debbah, M., 2022.
  Common language for goal-oriented semantic communications: A curriculum learning framework, in: ICC 2022 - IEEE International Conference on Communications, IEEE. pp. 330–335.
  doi:[10.1109/ICC45855.2022.9839066](http://dx.doi.org/10.1109/ICC45855.2022.9839066).
- Foerster et al. [2016a]

  Foerster, J., Assael, I.A., De Freitas, N., Whiteson, S., 2016a.
  Learning to communicate with deep multi-agent reinforcement learning.
  Advances in Neural Information Processing Systems 29.
- Foerster et al. [2016b]

  Foerster, J.N., Assael, Y.M., de Freitas, N., Whiteson, S., 2016b.
  Learning to communicate to solve riddles with deep distributed recurrent q-networks.
  IJCAI 2016 Deep Learning Workshop URL: <http://arxiv.org/abs/1602.02672>.
- Friston [2010]

  Friston, K., 2010.
  The free-energy principle: a unified brain theory?
  Nature reviews neuroscience 11, 127–138.
- Friston [2013]

  Friston, K., 2013.
  Life as we know it.
  J. R. Soc. Interface 10, 20130475.
- Friston [2019]

  Friston, K., 2019.
  A free energy principle for a particular physics.
  arXiv preprint arXiv:1906.10184 .
- Friston et al. [2021]

  Friston, K., Moran, R.J., Nagai, Y., Taniguchi, T., Gomi, H., Tenenbaum, J., 2021.
  World model learning and inference.
  Neural Networks 144, 573–590.
- Gurnee and Tegmark [2024]

  Gurnee, W., Tegmark, M., 2024.
  Language models represent space and time, in: The Twelfth International Conference on Learning Representations (ICLR).
  URL: <https://openreview.net/forum?id=jE8xbmvFin>.
- Ha and Schmidhuber [2018a]

  Ha, D., Schmidhuber, J., 2018a.
  Recurrent world models facilitate policy evolution, in: NeurIPS.
- Ha and Schmidhuber [2018b]

  Ha, D., Schmidhuber, J., 2018b.
  World models.
  arXiv preprint arXiv:1803.10122 .
- Hafner et al. [2019a]

  Hafner, D., Lillicrap, T., Ba, J., Norouzi, M., 2019a.
  Dream to control: Learning behaviors by latent imagination, in: ICLR.
- Hafner et al. [2019b]

  Hafner, D., Lillicrap, T., Fischer, I., Villegas, R., Ha, D., Lee, H., Davidson, J., 2019b.
  Learning latent dynamics for planning from pixels, in: ICML, PMLR. pp. 2555–2565.
- Hafner et al. [2020]

  Hafner, D., Lillicrap, T., Norouzi, M., Ba, J., 2020.
  Mastering atari with discrete world models.
  arXiv preprint arXiv:2010.02193 .
- Hafner et al. [2025]

  Hafner, D., Pasukonis, J., Ba, J., Lillicrap, T., 2025.
  Mastering diverse control tasks through world models.
  Nature , 1–7.
- Hagiwara et al. [2022]

  Hagiwara, Y., Furukawa, K., Taniguchi, A., Taniguchi, T., 2022.
  Multiagent multimodal categorization for symbol emergence: emergent communication via interpersonal cross-modal inference.
  Advanced Robotics 36, 239–260.
- Hagiwara et al. [2019]

  Hagiwara, Y., Kobayashi, H., Taniguchi, A., Taniguchi, T., 2019.
  Symbol emergence as an interpersonal multimodal categorization.
  Frontiers in Robotics and AI 6, 134.
  URL: <https://www.frontiersin.org/article/10.3389/frobt.2019.00134>, doi:[10.3389/frobt.2019.00134](http://dx.doi.org/10.3389/frobt.2019.00134).
- Hale [2001]

  Hale, J., 2001.
  A probabilistic earley parser as a psycholinguistic model, in: Language Technologies 2001: The Second Meeting of the North American Chapter of the Association for Computational Linguistics, NAACL 2001, Pittsburgh, PA, USA, June 2-7, 2001, The Association for Computational Linguistics.
  URL: <https://aclanthology.org/N01-1021/>.
- Hao et al. [2023]

  Hao, S., Gu, Y., Ma, H., Hong, J.J., Wang, Z., Wang, D.Z., Hu, Z., 2023.
  Reasoning with language model is planning with world model URL: <https://openreview.net/forum?id=VTWWvYtF1R>.
- Harris [1954]

  Harris, Z., 1954.
  Distributional structure.
  Word 10, 146–162.
- Hoang et al. [2024a]

  Hoang, N.L., Taniguchi, T., Hagiwara, Y., Taniguchi, A., 2024a.
  Emergent communication of multimodal deep generative models based on Metropolis-Hastings naming game.
  Frontiers in Robotics and AI 10, 1290604.
- Hoang et al. [2024b]

  Hoang, N.L., Taniguchi, T., Tianwei, F., Taniguchi, A., 2024b.
  Simsiam naming game: A unified approach for representation learning and emergent communication.
  arXiv preprint arXiv:2410.21803 .
- Hohwy [2013]

  Hohwy, J., 2013.
  The predictive mind.
  Oxford University Press.
- Huh et al. [2024]

  Huh, M., Cheung, B., Wang, T., Isola, P., 2024.
  Position: The platonic representation hypothesis, in: Proceedings of the 41st International Conference on Machine Learning, PMLR. pp. 20617–20642.
  URL: <https://proceedings.mlr.press/v235/huh24a.html>.
- Inukai et al. [2023]

  Inukai, J., Taniguchi, T., Taniguchi, A., Hagiwara, Y., 2023.
  Recursive Metropolis-Hastings naming game: Symbol emergence in a multi-agent system based on probabilistic generative models.
  Frontiers in Artificial Intelligence 6.
- Iqbal and Sha [2019]

  Iqbal, S., Sha, F., 2019.
  Actor-attention-critic for multi-agent reinforcement learning, in: International Conference on Machine Learning, pp. 2961–2970.
- Jaques et al. [2021]

  Jaques, M., Burke, M., Hospedales, T.M., 2021.
  NewtonianVAE: Proportional control and goal identification from pixels via physical latent spaces, in: CVPR, pp. 4454–4463.
- Jaques et al. [2019]

  Jaques, N., Lazaridou, A., Hughes, E., Gulcehre, C., Ortega, P., Strouse, D., Leibo, J.Z., De Freitas, N., 2019.
  Social influence as intrinsic motivation for multi-agent deep reinforcement learning, in: Proceedings of the 36th International Conference on Machine Learning (ICML), PMLR. pp. 3040–3049.
  URL: <https://proceedings.mlr.press/v97/jaques19a.html>.
- Jiang and Lu [2018]

  Jiang, J., Lu, Z., 2018.
  Learning attentional communication for multi-agent cooperation.
  Advances in Neural Information Processing Systems 31.
- Kato et al. [2024]

  Kato, D., Ueda, R., Naradowsky, J., Miyao, Y., 2024.
  Emergent communication with stack-based agents.
  Proceedings of the Annual Meeting of the Cognitive Science Society 46.
- Kawaharazuka et al. [2024]

  Kawaharazuka, K., Matsushima, T., Gambardella, A., Guo, J., Paxton, C., Zeng, A., 2024.
  Real-world robot applications of foundation models: a review.
  Advanced Robotics 38, 1232–1254.
  URL: <https://doi.org/10.1080/01691864.2024.2408593>, doi:[10.1080/01691864.2024.2408593](http://dx.doi.org/10.1080/01691864.2024.2408593), [arXiv:https://doi.org/10.1080/01691864.2024.2408593](http://arxiv.org/abs/https://doi.org/10.1080/01691864.2024.2408593).
- Kilinc and Montana [2018]

  Kilinc, O., Montana, G., 2018.
  Multi-agent deep reinforcement learning with extremely noisy observations.
  Advances in Neural Information Processing Systems: Deep Reinforcement Learning Workshop .
- Kim et al. [2019]

  Kim, D., Moon, S., Hostallero, D., Kang, W.J., Lee, T., Son, K., Yi, Y., 2019.
  Learning to schedule communication in multi-agent reinforcement learning.
  International Conference on Representation Learning .
- Kim et al. [2024]

  Kim, M.J., Pertsch, K., Karamcheti, S., Xiao, T., Balakrishna, A., Nair, S., Rafailov, R., Foster, E., Lam, G., Sanketi, P., et al., 2024.
  Openvla: An open-source vision-language-action model.
  8th Conference on Robot Learning (CoRL 2024) .
- Kingma et al. [2014]

  Kingma, D.P., Mohamed, S., Jimenez Rezende, D., Welling, M., 2014.
  Semi-supervised learning with deep generative models, in: Ghahramani, Z., Welling, M., Cortes, C., Lawrence, N., Weinberger, K. (Eds.), Advances in Neural Information Processing Systems, Curran Associates, Inc.
  URL: <https://proceedings.neurips.cc/paper_files/paper/2014/file/d523773c6b194f37b938d340d5d02232-Paper.pdf>.
- Kinose et al. [2023]

  Kinose, A., Okada, M., Okumura, R., Taniguchi, T., 2023.
  Multi-view dreaming: Multi-view world model with contrastive learning.
  Advanced Robotics 37, 1212–1220.
- Kirchhoff et al. [2018]

  Kirchhoff, M., Parr, T., Palacios, E., Friston, K., Kiverstein, J., 2018.
  The markov blankets of life: autonomy, active inference and the free energy principle.
  J. R. Soc. Interface 15.
- Kottur et al. [2017]

  Kottur, S., Moura, J.M.F., Lee, S., Batra, D., 2017.
  Natural language does not emerge ’naturally’ in multi-agent dialog, in: Palmer, M., Hwa, R., Riedel, S. (Eds.), Proceedings of the 2017 Conference on Empirical Methods in Natural Language Processing, EMNLP 2017, Copenhagen, Denmark, September 9-11, 2017, Association for Computational Linguistics. pp. 2962–2967.
  URL: <https://doi.org/10.18653/v1/d17-1321>, doi:[10.18653/V1/D17-1321](http://dx.doi.org/10.18653/V1/D17-1321).
- Kuribayashi et al. [2022]

  Kuribayashi, T., Oseki, Y., Brassard, A., Inui, K., 2022.
  Context limitations make neural language models more human-like, in: Goldberg, Y., Kozareva, Z., Zhang, Y. (Eds.), Proceedings of the 2022 Conference on Empirical Methods in Natural Language Processing, EMNLP 2022, Abu Dhabi, United Arab Emirates, December 7-11, 2022, Association for Computational Linguistics. pp. 10421–10436.
  URL: <https://doi.org/10.18653/v1/2022.emnlp-main.712>, doi:[10.18653/V1/2022.EMNLP-MAIN.712](http://dx.doi.org/10.18653/V1/2022.EMNLP-MAIN.712).
- Laskin et al. [2020]

  Laskin, M., Srinivas, A., Abbeel, P., 2020.
  CURL: Contrastive unsupervised representations for reinforcement learning, in: ICML, PMLR. pp. 5639–5650.
- Lazaridou and Baroni [2020]

  Lazaridou, A., Baroni, M., 2020.
  Emergent multi-agent communication in the deep learning era.
  arXiv preprint arXiv:2006.02419 URL: <https://arxiv.org/abs/2006.02419>, [arXiv:2006.02419](http://arxiv.org/abs/2006.02419).
- Le Hoang et al. [2024]

  Le Hoang, N., Matsui, Y., Hagiwara, Y., Taniguchi, A., Taniguchi, T., 2024.
  Compositionality and generalization in emergent communication using Metropolis-Hastings naming game, in: 2024 IEEE International Conference on Development and Learning (ICDL), IEEE. pp. 1–7.
- LeCun [2022]

  LeCun, Y., 2022.
  A path towards autonomous machine intelligence version 0.9. 2, 2022-06-27.
  OpenReview URL: <https://openreview.net/forum?id=BZ5a1r-kVsf>.
- Levine [2018]

  Levine, S., 2018.
  Reinforcement learning and control as probabilistic inference: Tutorial and review.
  arXiv:1805.00909 .
- Levy [2008]

  Levy, R., 2008.
  Expectation-based syntactic comprehension.
  Cognition 106, 1126–1177.
  URL: <https://www.sciencedirect.com/science/article/pii/S0010027707001436>, doi:[https://doi.org/10.1016/j.cognition.2007.05.006](http://dx.doi.org/https://doi.org/10.1016/j.cognition.2007.05.006).
- Lewis [1969]

  Lewis, D.K., 1969.
  Convention: A Philosophical Study.
  Wiley-Blackwell.
- Li et al. [2023]

  Li, K., Hopkins, A.K., Bau, D., Viégas, F., Pfister, H., Wattenberg, M., 2023.
  Emergent world representations: Exploring a sequence model trained on a synthetic task, in: The Eleventh International Conference on Learning Representations (ICLR).
  URL: <https://openreview.net/forum?id=DeG07_TcZvT>.
- Lillicrap et al. [2015]

  Lillicrap, T.P., Hunt, J.J., Pritzel, A., Heess, N., Erez, T., Tassa, Y., Silver, D., Wierstra, D., 2015.
  Continuous control with deep reinforcement learning.
  arXiv preprint arXiv:1509.02971 .
- Liu et al. [2020]

  Liu, Y., Wang, W., Hu, Y., Hao, J., Chen, X., Gao, Y., 2020.
  Multi-agent game abstraction via graph attention neural network, in: Proceedings of the AAAI Conference on Artificial Intelligence, pp. 7211–7218.
- Lobos-Tsunekawa et al. [2022]

  Lobos-Tsunekawa, K., Srinivasan, A., Spranger, M., 2022.
  Ma-dreamer: Coordination and communication through shared imagination.
  arXiv preprint arXiv:2204.04687 .
- Lowe et al. [2017]

  Lowe, R., Wu, Y.I., Tamar, A., Harb, J., Pieter Abbeel, O., Mordatch, I., 2017.
  Multi-agent actor-critic for mixed cooperative-competitive environments.
  Advances in Neural Information Processing Systems 30.
- Mahowald et al. [2024]

  Mahowald, K., Ivanova, A.A., Blank, I.A., Kanwisher, N., Tenenbaum, J.B., Fedorenko, E., 2024.
  Dissociating language and thought in large language models.
  Trends in Cognitive Sciences 28, 517–540.
  URL: <https://www.sciencedirect.com/science/article/pii/S1364661324000275>, doi:[https://doi.org/10.1016/j.tics.2024.01.011](http://dx.doi.org/https://doi.org/10.1016/j.tics.2024.01.011).
- Matsui et al. [2025]

  Matsui, Y., Yamaki, R., Ueda, R., Shinagawa, S., Taniguchi, T., 2025.
  Metropolis-hastings captioning game: Knowledge fusion of vision language models via decentralized bayesian inference.
  arXiv preprint arXiv:2504.09620 .
- Mikolov et al. [2013a]

  Mikolov, T., Corrado, G., Chen, K., Dean, J., 2013a.
  Efficient Estimation of Word Representations in Vector Space, in: International Conference on Learning Representations (ICLR), pp. 1–12.
- Mikolov et al. [2013b]

  Mikolov, T., Sutskever, I., Chen, K., Corrado, G.S., Dean, J., 2013b.
  Distributed representations of words and phrases and their compositionality, in: Advances in Neural Information Processing Systems (NeurIPS), pp. 3111–3119.
  URL: <https://proceedings.neurips.cc/paper_files/paper/2013/file/9aa42b31882ec039965f3c4923ce901b-Paper.pdf>.
- Min et al. [2023]

  Min, B., Ross, H., Sulem, E., Veyseh, A.P.B., Nguyen, T.H., Sainz, O., Agirre, E., Heintz, I., Roth, D., 2023.
  Recent advances in natural language processing via large pre-trained language models: A survey.
  ACM Comput. Surv. 56, 1–40.
- Mordatch and Abbeel [2018]

  Mordatch, I., Abbeel, P., 2018.
  Emergence of grounded compositional language in multi-agent populations, in: Proceedings of the AAAI conference on artificial intelligence, AAAI Press. pp. 1495–1502.
  URL: <https://doi.org/10.1609/aaai.v32i1.11492>, doi:[10.1609/AAAI.V32I1.11492](http://dx.doi.org/10.1609/AAAI.V32I1.11492).
- Nakamura et al. [2023]

  Nakamura, T., Taniguchi, A., Taniguchi, T., 2023.
  Control as probabilistic inference as an emergent communication mechanism in multi-agent reinforcement learning.
  URL: <https://arxiv.org/abs/2307.05004>, [arXiv:2307.05004](http://arxiv.org/abs/2307.05004).
- Nilsson et al. [1984]

  Nilsson, N.J., et al., 1984.
  Shakey the robot. volume 323.
  Sri International Menlo Park, California.
- Niu et al. [2021]

  Niu, Y., Paleja, R.R., Gombolay, M.C., 2021.
  Multi-agent graph-attention communication and teaming., in: AAMAS, pp. 964–973.
- Nomura et al. [2025]

  Nomura, K., Aoki, T., Taniguchi, T., Horii, T., 2025.
  Decentralized collective world model for emergent communication and coordination.
  arXiv preprint arXiv:2504.03353 .
- Okada and Taniguchi [2021]

  Okada, M., Taniguchi, T., 2021.
  Dreaming: Model-based reinforcement learning by latent imagination without reconstruction, in: ICRA, IEEE. pp. 4209–4215.
- Okada and Taniguchi [2022]

  Okada, M., Taniguchi, T., 2022.
  Dreamingv2: Reinforcement learning with discrete world models without reconstruction, in: IROS.
- Okumura et al. [2022]

  Okumura, R., Nishio, N., Taniguchi, T., 2022.
  Tactile-Sensitive NewtonianVAE for high-accuracy industrial connector-socket insertion, in: IROS.
- Okumura et al. [2023]

  Okumura, R., Taniguchi, T., Hagiwara, Y., Taniguchi, A., 2023.
  Metropolis-Hastings algorithm in joint-attention naming game: experimental semiotics study.
  Frontiers in Artificial Intelligence 6.
  URL: <https://www.frontiersin.org/articles/10.3389/frai.2023.1235231>, doi:[10.3389/frai.2023.1235231](http://dx.doi.org/10.3389/frai.2023.1235231).
- Osada et al. [2024]

  Osada, M., Garcia Ricardez, G.A., Suzuki, Y., Taniguchi, T., 2024.
  Reflectance estimation for proximity sensing by vision-language models: Utilizing distributional semantics for low-level cognition in robotics.
  Advanced Robotics 38, 1287–1306.
- Parr et al. [2022]

  Parr, T., Pezzulo, G., Friston, K.J., 2022.
  Active Inference: The Free Energy Principle in Mind, Brain, and Behavior (English Edition).
  The MIT Press.
  URL: <https://lead.to/amazon/jp/?op=bt&la=ja&key=B096DBD7GX>.
- Peirce [1974]

  Peirce, C.S., 1974.
  Collected papers of charles sanders peirce. volume 5.
  Harvard University Press.
- Peirce [1991]

  Peirce, C.S., 1991.
  Peirce on signs: Writings on semiotic.
  UNC Press Books.
- Peters et al. [2025]

  Peters, J., Waubert de Puiseau, C., Tercan, H., Gopikrishnan, A., Bitter, C., de Carvalho, G.A.L., Meisen, T., 2025.
  Emergent language: a survey and taxonomy.
  Autonomous Agents and Multi-Agent Systems 39, 18.
  doi:[10.1007/s10458-025-09691-y](http://dx.doi.org/10.1007/s10458-025-09691-y).
- Peters et al. [2024]

  Peters, J., de Puiseau, C.W., Tercan, H., Gopikrishnan, A., De Carvalho, G.A.L., Bitter, C., Meisen, T., 2024.
  A survey on emergent language.
  arXiv preprint arXiv:2409.02645 .
- Poole et al. [2019]

  Poole, B., Ozair, S., van den Oord, A., Alemi, A.A., Tucker, G., 2019.
  On variational bounds of mutual information, in: Chaudhuri, K., Salakhutdinov, R. (Eds.), Proceedings of the 36th International Conference on Machine Learning, ICML 2019, 9-15 June 2019, Long Beach, California, USA, PMLR. pp. 5171–5180.
  URL: <http://proceedings.mlr.press/v97/poole19a.html>.
- Popovski et al. [2020]

  Popovski, P., Simeone, O., Boccardi, F., Gündüz, D., Sahin, O., 2020.
  Semantic-effectiveness filtering and control for post-5g wireless connectivity.
  Journal of the Indian Institute of Science 100, 435–443.
- Qu et al. [2020]

  Qu, C., Li, H., Liu, C., Xiong, J., Chu, W., Wang, W., Qi, Y., Song, L., et al., 2020.
  Intention propagation for multi-agent reinforcement learning .
- Ramesh et al. [2021]

  Ramesh, A., Pavlov, M., Goh, G., Gray, S., Voss, C., Radford, A., Chen, M., Sutskever, I., 2021.
  Zero-shot text-to-image generation.
  arXiv preprint arXiv:2102.12092 .
- Ren et al. [2020]

  Ren, Y., Guo, S., Labeau, M., Cohen, S.B., Kirby, S., 2020.
  Compositional languages emerge in a neural iterated learning model, in: 8th International Conference on Learning Representations, ICLR 2020, Addis Ababa, Ethiopia, April 26-30, 2020, OpenReview.net.
  URL: <https://openreview.net/forum?id=HkePNpVKPB>.
- Ri et al. [2023]

  Ri, R., Ueda, R., Naradowsky, J., 2023.
  Emergent communication with attention, in: Goldwater, M.B., Anggoro, F.K., Hayes, B.K., Ong, D.C. (Eds.), Proceedings of the 45th Annual Meeting of the Cognitive Science Society, CogSci 2023, Sydney, NSW, Australia, July 26-29, 2023, cognitivesciencesociety.org.
  URL: <https://escholarship.org/uc/item/7dg8r8zk>.
- Rita et al. [2020]

  Rita, M., Chaabouni, R., Dupoux, E., 2020.
  "lazimpa": Lazy and impatient neural agents learn to communicate efficiently, in: Proceedings of the 24th Conference on Computational Natural Language Learning, CoNLL 2020, Online, November 19-20, 2020, Association for Computational Linguistics. pp. 335–343.
  URL: <https://doi.org/10.18653/v1/2020.conll-1.26>, doi:[10.18653/v1/2020.conll-1.26](http://dx.doi.org/10.18653/v1/2020.conll-1.26).
- Rita et al. [2022]

  Rita, M., Tallec, C., Michel, P., Grill, J., Pietquin, O., Dupoux, E., Strub, F., 2022.
  Emergent communication: Generalization and overfitting in lewis games, in: Koyejo, S., Mohamed, S., Agarwal, A., Belgrave, D., Cho, K., Oh, A. (Eds.), Advances in Neural Information Processing Systems 35: Annual Conference on Neural Information Processing Systems 2022, NeurIPS 2022, New Orleans, LA, USA, November 28 - December 9, 2022.
- Saito et al. [2024]

  Saito, I., Nakamura, T., Taniguchi, A., Taniguchi, T., Hayamizu, Y., Zhang, S., 2024.
  Emergence of continuous signals as shared symbols through emergent communication, in: 2024 IEEE International Conference on Development and Learning (ICDL), IEEE. pp. 1–6.
- Schmidhuber [1990]

  Schmidhuber, J., 1990.
  Making the world differentiable: on using self supervised fully recurrent neural networks for dynamic reinforcement learning and planning in non-stationary environments. volume 126.
  Inst. für Informatik.
- Seo et al. [2022]

  Seo, H.E., Park, J., Bennis, M., Debbah, M., 2022.
  Semantics-native communication with contextual reasoning.
  IEEE Journal on Selected Areas in Communications 40, 2545–2559.
  doi:[10.1109/JSAC.2022.3191299](http://dx.doi.org/10.1109/JSAC.2022.3191299).
- Shannon [1948]

  Shannon, C.E., 1948.
  A mathematical theory of communication.
  The Bell system technical journal 27, 379–423.
- Sohn et al. [2015]

  Sohn, K., Lee, H., Yan, X., 2015.
  Learning structured output representation using deep conditional generative models, in: Cortes, C., Lawrence, N.D., Lee, D.D., Sugiyama, M., Garnett, R. (Eds.), Advances in Neural Information Processing Systems 28: Annual Conference on Neural Information Processing Systems 2015, December 7-12, 2015, Montreal, Quebec, Canada, pp. 3483–3491.
  URL: <https://proceedings.neurips.cc/paper/2015/hash/8d55a249e6baa5c06772297520da2051-Abstract.html>.
- Steels [1997]

  Steels, L., 1997.
  The synthetic modeling of language origins.
  Evolution of Communication Journal 1, 1–34.
  doi:[10.1075/eoc.1.1.02ste](http://dx.doi.org/10.1075/eoc.1.1.02ste).
- Steels [2005]

  Steels, L., 2005.
  The emergence and evolution of linguistic structure: from lexical to grammatical communication systems.
  Connection Science 17, 213–230.
  doi:[10.1080/09540090500269088](http://dx.doi.org/10.1080/09540090500269088).
- Steels [2011]

  Steels, L., 2011.
  Modeling the Cultural Evolution of Language.
  Physics of Life Reviews 8, 339–356.
  URL: <https://www.sciencedirect.com/science/article/pii/S1571064511001060>, doi:[https://doi.org/10.1016/j.plrev.2011.10.014](http://dx.doi.org/https://doi.org/10.1016/j.plrev.2011.10.014).
- Sukhbaatar et al. [2016]

  Sukhbaatar, S., Fergus, R., et al., 2016.
  Learning multiagent communication with backpropagation.
  Advances in Neural Information Processing Systems 29.
- Sutton [1990]

  Sutton, R.S., 1990.
  Integrated architectures for learning, planning, and reacting based on approximating dynamic programming, in: Machine learning proceedings 1990. Elsevier, pp. 216–224.
- Taniguchi [2024]

  Taniguchi, T., 2024.
  Collective predictive coding hypothesis: Symbol emergence as decentralized bayesian inference.
  Frontiers in Robotics and AI 11.
- Taniguchi et al. [2025a]

  Taniguchi, T., Hirai, Y., Suzuki, M., Murata, S., Horii, T., Tanaka, K., 2025a.
  System 0/1/2/3: Quad-process theory for multi-timescale embodied collective cognitive systems.
  arXiv preprint arXiv:2503.06138 .
- Taniguchi et al. [2023a]

  Taniguchi, T., Murata, S., Suzuki, M., Ognibene, D., Lanillos, P., Ugur, E., Jamone, L., Nakamura, T., Ciria, A., Lara, B., Pezzulo, G., 2023a.
  World models and predictive coding for cognitive and developmental robotics: frontiers and challenges.
  Advanced Robotics 37, 780–806.
  URL: <https://doi.org/10.1080/01691864.2023.2225232>, doi:[10.1080/01691864.2023.2225232](http://dx.doi.org/10.1080/01691864.2023.2225232), [arXiv:https://doi.org/10.1080/01691864.2023.2225232](http://arxiv.org/abs/https://doi.org/10.1080/01691864.2023.2225232).
- Taniguchi et al. [2016]

  Taniguchi, T., Nagai, T., Nakamura, T., Iwahashi, N., Ogata, T., Asoh, H., 2016.
  Symbol emergence in robotics: a survey.
  Advanced Robotics 30, 706–728.
- Taniguchi et al. [2024]

  Taniguchi, T., Oizumi, M., Saji, N., Horii, T., Tsuchiya, N., 2024.
  Constructive approach to bidirectional causation between qualia structure and language emergence.
  arXiv preprint arXiv:2409.09413 .
- Taniguchi et al. [2025b]

  Taniguchi, T., Takagi, S., Otsuka, J., Hayashi, Y., Hamada, H.T., 2025b.
  Collective predictive coding as model of science: Formalizing scientific activities towards generative science.
  Royal Society Open Science 12, 241678.
- Taniguchi et al. [2018]

  Taniguchi, T., Ugur, E., Hoffmann, M., Jamone, L., Nagai, T., Rosman, B., Matsuka, T., Iwahashi, N., Oztop, E., Piater, J., et al., 2018.
  Symbol emergence in cognitive developmental systems: a survey.
  IEEE Transactions on Cognitive and Developmental Systems 11, 494–516.
- Taniguchi et al. [2023b]

  Taniguchi, T., Yoshida, Y., Matsui, Y., Hoang, N.L., Taniguchi, A., Hagiwara, Y., 2023b.
  Emergent communication through Metropolis-Hastings naming game with deep generative models.
  Advanced Robotics 37, 1266–1282.
  URL: <https://doi.org/10.1080/01691864.2023.2260856>, doi:[10.1080/01691864.2023.2260856](http://dx.doi.org/10.1080/01691864.2023.2260856), [arXiv:https://doi.org/10.1080/01691864.2023.2260856](http://arxiv.org/abs/https://doi.org/10.1080/01691864.2023.2260856).
- Thomas and Saad [2023]

  Thomas, C.K., Saad, W., 2023.
  Neuro-symbolic causal reasoning meets signaling game for emergent semantic communications.
  IEEE Transactions on Wireless Communications 22, 9101–9116.
  doi:[10.1109/TWC.2023.3283392](http://dx.doi.org/10.1109/TWC.2023.3283392).
- Tomasello [2005]

  Tomasello, M., 2005.
  Constructing a language: A usage-based theory of language acquisition.
  Harvard university press.
- Tucker et al. [2022]

  Tucker, M., Levy, R.P., Shah, J., Zaslavsky, N., 2022.
  Trading off utility, informativeness, and complexity in emergent communication, in: Advances in Neural Information Processing Systems.
  URL: <https://openreview.net/forum?id=O5arhQvBdH>.
- Ueda [2024]

  Ueda, R., 2024.
  Reinterpreting signaling and referential games as generative models, in: Language Gamification - NeurIPS 2024 Workshop.
  URL: <https://openreview.net/forum?id=6dzojDiJpc>.
- Ueda et al. [2023]

  Ueda, R., Ishii, T., Miyao, Y., 2023.
  On the word boundaries of emergent languages based on harris’s articulation scheme, in: The Eleventh International Conference on Learning Representations (ICLR), ICLR 2023, Kigali, Rwanda, May 1-5, 2023, OpenReview.net.
  URL: <https://openreview.net/pdf?id=b4t9_XASt6G>.
- Ueda and Taniguchi [2024]

  Ueda, R., Taniguchi, T., 2024.
  Lewis’s signaling game as beta-vae for natural word lengths and segments, in: The Twelfth International Conference on Learning Representations (ICLR), ICLR 2024, Vienna, Austria, May 7-11, 2024, OpenReview.net.
  URL: <https://openreview.net/forum?id=HC0msxE3sf>.
- Ueda and Washio [2021]

  Ueda, R., Washio, K., 2021.
  On the relationship between Zipf’s law of abbreviation and interfering noise in emergent languages, in: Proceedings of the ACL-IJCNLP 2021 Student Research Workshop, ACL 2021, Online, JUli 5-10, 2021, Association for Computational Linguistics. pp. 60–70.
  URL: <https://doi.org/10.18653/v1/2021.acl-srw.6>, doi:[10.18653/v1/2021.acl-srw.6](http://dx.doi.org/10.18653/v1/2021.acl-srw.6).
- Venugopalan et al. [2015]

  Venugopalan, S., Rohrbach, M., Donahue, J., Mooney, R., Darrell, T., Saenko, K., 2015.
  Sequence to sequence–video to text, in: Proceedings of the IEEE international conference on computer vision, pp. 4534–4542.
- Verma and Pilanci [2025]

  Verma, P., Pilanci, M., 2025.
  Large language models implicitly learn to see and hear just by reading.
  [arXiv:2505.17091](http://arxiv.org/abs/2505.17091).
- Vinyals et al. [2015]

  Vinyals, O., Toshev, A., Bengio, S., Erhan, D., 2015.
  Show and tell: A neural image caption generator, in: Proceedings of the IEEE conference on computer vision and pattern recognition, pp. 3156–3164.
- Von Uexküll [1992]

  Von Uexküll, J., 1992.
  A stroll through the worlds of animals and men: A picture book of invisible worlds.
  Semiotica 89, 319–391.
- Wang et al. [2024]

  Wang, R., Todd, G., Xiao, Z., Yuan, X., Côté, M.A., Clark, P., Jansen, P., 2024.
  Can language models serve as text-based world simulators?, in: Proceedings of the 62nd Annual Meeting of the Association for Computational Linguistics (Volume 2: Short Papers).
- Wittgenstein [2009]

  Wittgenstein, L., 2009.
  Philosophical Investigations.
  John Wiley & Sons.
- Xie et al. [2021]

  Xie, H., Qin, Z., Li, G.Y., Juang, B.H., 2021.
  Deep learning enabled semantic communication systems.
  IEEE Transactions on Signal Processing 69, 2663–2675.
- Xu et al. [2015]

  Xu, K., Ba, J., Kiros, R., Cho, K., Courville, A., Salakhudinov, R., Zemel, R., Bengio, Y., 2015.
  Show, attend and tell: Neural image caption generation with visual attention, in: International conference on machine learning, pp. 2048–2057.
- Yan et al. [2021]

  Yan, W., Zhang, Y., Abbeel, P., Srinivas, A., 2021.
  Videogpt: Video generation using vq-vae and transformers.
  arXiv preprint arXiv:2104.10157 .
- Yoshida and Taniguchi [2025]

  Yoshida, N., Taniguchi, T., 2025.
  Reward-independent messaging for decentralized multi-agent reinforcement learning.
  arXiv preprint arXiv:2505.21985 .
- Yoshida et al. [2025]

  Yoshida, T., Masumori, A., Ikegami, T., 2025.
  From text to motion: grounding gpt-4 in a humanoid robot \CJK@punctchar\CJK@uniPunct0"80"9CAlter3\CJK@punctchar\CJK@uniPunct0"80"9D.
  Frontiers in Robotics and AI 12, 1581110.
- You et al. [2024]

  You, Z., Ebara, H., Nakamura, T., Taniguchi, A., Taniguchi, T., 2024.
  Multimodal continuous symbol emergence using a probabilistic generative model based on gaussian processes, in: 2024 IEEE International Conference on Development and Learning (ICDL), IEEE. pp. 1–6.
- Zaslavsky et al. [2018]

  Zaslavsky, N., Kemp, C., Regier, T., Tishby, N., 2018.
  Efficient compression in color naming and its evolution.
  Proc. Natl. Acad. Sci. USA 115, 7937–7942.
  URL: <https://doi.org/10.1073/pnas.1800521115>, doi:[10.1073/PNAS.1800521115](http://dx.doi.org/10.1073/PNAS.1800521115).
- Zhen et al. [2024]

  Zhen, H., Qiu, X., Chen, P., Yang, J., Yan, X., Du, Y., Hong, Y., Gan, C., 2024.
  3D-VLA: A 3d vision-language-action generative world model.
  Proceedings of the 41 st International Conference on Machine Learning .
- Zhu et al. [2024]

  Zhu, C., Dastani, M., Wang, S., 2024.
  A survey of multi-agent deep reinforcement learning with communication.
  Autonomous Agents and Multi-Agent Systems 38, 4.

## Acknowledgement

This work was supported by JSPS KAKENHI Grant Numbers JP21H04904, JP23H04835, JP23H04974, JP23K28181, and the JST Moonshot R&D Grant Number JPMJMS2011.
