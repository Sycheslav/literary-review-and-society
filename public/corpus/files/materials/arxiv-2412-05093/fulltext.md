---
id: arxiv-2412-05093-text
type: material
title: 'Sense and Sensitivity: Evaluating the simulation of social dynamics via Large Language Models'
work_id: arxiv-2412-05093
source_url: https://arxiv.org/html/2412.05093v1
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять
  с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.
language: original
sha256_text: 6f4719373de847b9f9eaa77a7fec1929436bdd590d7a2b062311f742a63f70bf
---

> Источник: [https://arxiv.org/html/2412.05093v1](https://arxiv.org/html/2412.05093v1). Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.

# Sense and Sensitivity: Evaluating the simulation of social dynamics via Large Language Models

Da Ju
Affiliation: Meta FAIR
Email: [daju@meta.com](mailto:)
  
Adina Williams
Affiliation: Meta FAIR
Email: [adinawilliams@meta.com](mailto:)
  
Brian Karrer
Affiliation: Meta FAIR
Email: [briankarrer@meta.com](mailto:)
  
Maximilian Nickel
Affiliation: Meta FAIR
Email: [maxn@meta.com](mailto:)

###### Abstract

Large language models have increasingly been proposed as a powerful replacement for classical agent-based models (ABMs) to simulate social dynamics. By using LLMs as a proxy for human behavior, the hope of this new approach is to be able to simulate significantly more complex dynamics than with classical ABMs and gain new insights in fields such as social science, political science, and economics. However, due to the black box nature of LLMs, it is unclear whether LLM agents actually execute the intended semantics that are encoded in their natural language instructions and, if the resulting dynamics of interactions are meaningful. To study this question, we propose a new evaluation framework that grounds LLM simulations within the dynamics of established reference models of social science. By treating LLMs as a black-box function, we evaluate their input-output behavior relative to this reference model, which allows us to evaluate detailed aspects of their behavior. Our results show that, while it is possible to engineer prompts that approximate the intended dynamics, the quality of these simulations is highly sensitive to the particular choice of prompts. Importantly, simulations are even sensitive to arbitrary variations such as minor wording changes and whitespace. This puts into question the usefulness of current versions of LLMs for meaningful simulations, as without a reference model, it is impossible to determine a priori what impact seemingly meaningless changes in prompt will have on the simulation.

## 1 Introduction

Generative social science aims to explain social phenomena through agent-based models (ABMs), i.e., through models of a large number of interacting agents. By being able to *generate* macroscopic phenomena of interest through simple, interpretable micro-instructions to agents, these models aim to provide insights into the mechanisms that are sufficient to explain social phenomena ([Epstein & Axtell, 1997](https://arxiv.org/html/2412.05093v1#bib.bib11)).
Early ABMs have indeed seen substantial success for this task, ranging from [Schelling](https://arxiv.org/html/2412.05093v1#bib.bib32)’s ([1971](https://arxiv.org/html/2412.05093v1#bib.bib32)) seminal work on segregation to [Brian Arthur et al.](https://arxiv.org/html/2412.05093v1#bib.bib6)’s ([2018](https://arxiv.org/html/2412.05093v1#bib.bib6)) modeling of the stock market. Agent-based models have since found widespread use in social science ([Gilbert & Terna, 2000](https://arxiv.org/html/2412.05093v1#bib.bib16)), economics ([Tesfatsion, 2023](https://arxiv.org/html/2412.05093v1#bib.bib35)), finance ([Chan et al., 1999](https://arxiv.org/html/2412.05093v1#bib.bib7)), epidemiology ([Auchincloss & Diez Roux, 2008](https://arxiv.org/html/2412.05093v1#bib.bib3)), public health ([Tracy et al., 2018](https://arxiv.org/html/2412.05093v1#bib.bib37)), AI ([Zhang et al., 2021](https://arxiv.org/html/2412.05093v1#bib.bib43)), and many other fields.
However, despite these successes, classical ABMs also face a variety of substantial challenges ([An et al., 2021](https://arxiv.org/html/2412.05093v1#bib.bib2)). For the purposes of this paper, the most relevant of these challenges include:

> Highly idealized assumptions and models:
> :   Since classical ABMs need to abstract behavior into highly idealized mathematical models, a core challenge is to create sufficiently rich models that can be considered realistic proxies for actual human behavior. For instance, models for belief formation and opinion dynamics represent opinions of agents towards a topic as a single scalar which evolves through interactions with other agents. While this leads to interpretable models, they also fail to consistently reproduce dynamics that are observed in the real-world.
>
> Susceptibility for misspecification:
> :   Since classical ABMs are not grounded in human behavior or data, it is entirely a modeler’s responsibility to accurately and comprehensively capture the relevant behavior for a task in their models. Since emergent macroscopic behavior, which is the core focus of ABMs, can be very sensitive to the right kind of micro-instructions, the danger of wrong inferences due to model misspecification is substantial in classical ABMs.
>
> Difficulty of empirical validation:
> :   Again, due to their abstraction level, ABMs often do not have clear correspondences to real-world phenomena. It can therefore be quite difficult to measure and understand whether a model captures real phenomena or is misspecified.

The slow progress and difficulty of addressing these issues related to methodology and validation have raised serious questions about the utility of classical ABMs. Subsequently this led to a decreasing interest in these models in various fields ([An et al., 2021](https://arxiv.org/html/2412.05093v1#bib.bib2); [Roughgarden, 2012](https://arxiv.org/html/2412.05093v1#bib.bib31); [Couclelis, 2001](https://arxiv.org/html/2412.05093v1#bib.bib9)).

As LLMs have increasingly shown that they can act as proxies for human behavior, at least in some aspects, there has been substantial interest in utilizing them for agent-based models to overcome these challenges ([Park et al., 2023](https://arxiv.org/html/2412.05093v1#bib.bib28); [Gao et al., 2023](https://arxiv.org/html/2412.05093v1#bib.bib15); [Törnberg et al., 2023](https://arxiv.org/html/2412.05093v1#bib.bib38); [Kaiya et al., 2023](https://arxiv.org/html/2412.05093v1#bib.bib20)).
Various aspects of LLMs are highly promising for this purpose: (i) LLMs allow to simulate rich, complex behaviors which are grounded in the training corpora of these models. (ii) LLMs can show new emergent behavior — due to being sufficiently rich — that has not been explicitly encoded in the model (which logical ABMs are not able to). (iii) Specifying micro-instructions in natural language allows for richness and complexity, while remaining interpretable such that human agents can even be part of a simulation.
Successfully applying LLMs to ABMs could therefore be a transformative technology for social science by creating high-fidelity simulations of social systems. This is especially the case for social systems where LLMs can be expected to have substantial training data such as social media and internet platforms.
Consequently, research on LLM-ABMs has increasingly considered simulating opinion dynamics ([Chuang et al., 2023](https://arxiv.org/html/2412.05093v1#bib.bib8)) and effects of ranking algorithms in social media ([Törnberg et al., 2023](https://arxiv.org/html/2412.05093v1#bib.bib38)).
However, given the aims of ABMs in science — to produce reliable insights and support theory-building — are the insights that we can get from LLM-ABMs actually reliable and robust? Due to the black-box nature of LLMs it is entirely unclear how *exactly* an LLM agent interprets its instructions and acts upon it. This is in complete contrast to classical ABMs in which the micro-behavior is directly encoded in the model.
Moreover, it is well-known that current LLMs can be highly sensitive to the choice of prompts ([Wallace et al., 2019](https://arxiv.org/html/2412.05093v1#bib.bib40); [Reynolds & McDonell, 2021](https://arxiv.org/html/2412.05093v1#bib.bib30); [Min et al., 2022](https://arxiv.org/html/2412.05093v1#bib.bib27); [Webson & Pavlick, 2022](https://arxiv.org/html/2412.05093v1#bib.bib42); [Goodarzi et al., 2023](https://arxiv.org/html/2412.05093v1#bib.bib17); [Lyu et al., 2024](https://arxiv.org/html/2412.05093v1#bib.bib25); [Shivagunde et al., 2024](https://arxiv.org/html/2412.05093v1#bib.bib33)), to the extent that *prompt engineer* is now a job title in the field of AI. Under these circumstances, how can we know whether a seemingly minor change in a prompt will not lead to a substantial change in the simulation outcome? Even if we have identified a set of prompts that simulates an intended system well, can we really consider these prompts as an interpretable model if minor changes lead to significantly different outcomes?
If LLM-ABMs shall ever be useful for theory-building and analysis in *science*, it is therefore of highest importance to establish validation frameworks that allow us to examine two *necessary* conditions for an ABM to be useful for scientific analyses, i.e., (a) their consistency with the expected dynamics and (b) their reliability.
For this purpose, we introduce a new evaluation framework that grounds a LLM-ABM in the dynamics of a reference ABM to analyze its behavior. Specifically, we will use an approach akin to system identification in control theory, where we treat the LLM as a black-box function mapping an input state to an output state. We then evaluate the simulation error, i.e, the input-output behavior of the LLM relative to a reference model of social dynamics what allows us to evaluate detailed aspects of the behavior of the LLM-ABM. While this is a general framework, we will focus in this work on two specific aspects in this evaluation: (a) whether LLM-ABMs can reproduce the dynamics of classical ABMs and (b) how sensitive LLM-ABMs are with respect to minor variations in prompts.

## 2 Agent-Based Models of Social Dynamics

(a) DeGroot

(b) Hegselmann-Krause

Figure 1: Opinion Dynamics Models. Scalar opinion $x\_{i}(t)$ per agent $i$ and time $t$ for the ([1(a)](https://arxiv.org/html/2412.05093v1#S2.F1.sf1 "Figure 1(a) ‣ Figure 1 ‣ 2 Agent-Based Models of Social Dynamics ‣ Sense and Sensitivity: Evaluating the simulation ofsocial dynamics via Large Language Models")) DeGroot and ([fig. 1(b)](https://arxiv.org/html/2412.05093v1#S2.F1.sf2 "In Figure 1 ‣ 2 Agent-Based Models of Social Dynamics ‣ Sense and Sensitivity: Evaluating the simulation ofsocial dynamics via Large Language Models")) Hegselmann-Krause models, simulated using [eq. 4](https://arxiv.org/html/2412.05093v1#S2.E4 "In Definition 2 (Hegselmann-Krause Model). ‣ 2 Agent-Based Models of Social Dynamics ‣ Sense and Sensitivity: Evaluating the simulation ofsocial dynamics via Large Language Models") with $\epsilon=2$ and $\epsilon=0.3$ respectively. While the DeGroot model leads to consensus and the main quantity of interest is the speed of convergence, the Hegselmann-Krause model can show a wider range of dynamics, including polarization as in [fig. 1(b)](https://arxiv.org/html/2412.05093v1#S2.F1.sf2 "In Figure 1 ‣ 2 Agent-Based Models of Social Dynamics ‣ Sense and Sensitivity: Evaluating the simulation ofsocial dynamics via Large Language Models").

Agent-based models serve a similar purpose in the social sciences as computational simulations do in the natural sciences such as physics, chemistry, and cosmology. In particular, ABMs have played important roles in theory-building, constructing models, and simulation for understanding complex dynamics in a wide range of social processes, ranging from segregation, to financial markets, to prehistoric migrations. Many such agent-based models can be described in the following form: Let $N$ denote the number of agents and let $\bm{x}(t)\in\mathbb{R}^{N}$ denote the state of each agent at time $t$. Furthermore, let $f:\smash{\mathbb{R}^{N}}\to\smash{\mathbb{R}^{N}}$ denote the dynamics of the system, i.e., the function that describes how the state of the system evolves over time such that

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\bm{x}(t+1)=f(\bm{x}(t)).$$ |  | (1) |

Importantly, $f$ is a function of the *entire* state vector and can thus model interactions between agents.
To endow $f$ with meaning, we will focus in the following mainly on a key application area of ABMs that coincides well with the strengths of LLMs, i.e., the simulation of opinion dynamics.
Classical ABMs for simulating opinion dynamics are structured as follows: First, $\bm{x}(t)\in\mathbb{R}^{N}$ denotes the vector of opinions of all agents towards a specific topic where the exact encoding of opinions as a scalar can be application- and model-specific. Typical encoding schemes include $x\_{i}\in[-1,1]$ or $x\_{i}\in[0,1]$ for indicating opinions that strongly support ($1$) to strongly oppose ($-1$ or $0$) a particular topic.
Within this framework, one of the earliest models for simulating opinion dynamics via agent-based models has been proposed by [DeGroot (1974)](https://arxiv.org/html/2412.05093v1#bib.bib10), which defines $f$ as follows:

###### Definition 1 (DeGroot Model).

Let $G=(V,E)$ denote a social network such that $V$ corresponds to a population of agents and $E$ denotes the existing relationships (edges) between them. Furthermore, let $\mathcal{N}(i)=\{j:i\sim j\in E\}$ denote the set of all neighbors of agent $i\in V$ in $G$. Each agent $i$ updates then their opinion at time $t$ by averaging the opinions of its neighbors, i.e.,

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$f{(x(t))}\_{i}=\textstyle\frac{1}{|\mathcal{N}(i)|}\sum\_{j\in\mathcal{N}(i)}x\_{j}(t)$$ |  | (2) |

While the DeGroot model has been an influential model for consensus formation and social learning, its use for simulating general opinion dynamics is limited. This is because, under a wide range of initial conditions, this model can be proven to always converge to a consensus, and in particular to the average of the initial conditions. To understand opinion dynamics in the context of polarization and radicalization, more flexible models are therefore needed.
One of the most impactful extensions of DeGroot’s models in this regard has been proposed by [Hegselmann & Krause (2002)](https://arxiv.org/html/2412.05093v1#bib.bib18). This model shows that a wide range of dynamics including polarization can arise through a surprisingly simple addition to DeGroot’s model, i.e., *bounded confidence*, which says that agents will not consider any opinions in their updates that are too far away from their own. This model is defined as follows:

###### Definition 2 (Hegselmann-Krause Model).

Let $G=(V,E)$ denote a social network and let

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\mathcal{N}(i,t)=\{j:i\sim j\land|x\_{i}(t)-x\_{j}(t)|\leq\epsilon\}$$ |  | (3) |

denote the set of neighbors of agent $i$ within confidence bound $\epsilon$. Each agent $i$ updates then their opinion at time $t$ by averaging the opinions of neighbors within their confidence bound, i.e.,

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$f{(x(t))}\_{i}=\textstyle\frac{1}{|\mathcal{N}(i,t)|}\sum\_{j\in\mathcal{N}(i,t)}x\_{j}(t)$$ |  | (4) |

See [fig. 1](https://arxiv.org/html/2412.05093v1#S2.F1 "In 2 Agent-Based Models of Social Dynamics ‣ Sense and Sensitivity: Evaluating the simulation ofsocial dynamics via Large Language Models") for an illustration of the main differences in opinion dynamics between a DeGroot and a Hegselmann-Krause model, i.e., between consensus and polarization.
Next, we will introduce our proposed framework to measure the consistency of an LLM-based ABM with such reference models.

(a) Simulation Error

$x(t)$$x(t+1)$$y(t)$$y(t+1)$Reference modelLLM model   encode$e(x)$decode$d(x)$Reference dynamics$f(x)$LLM dynamics$g(x)$

(b) Model consistency

Figure 2: Evaluation Framework. ([2(a)](https://arxiv.org/html/2412.05093v1#S2.F2.sf1 "Figure 2(a) ‣ Figure 2 ‣ 2 Agent-Based Models of Social Dynamics ‣ Sense and Sensitivity: Evaluating the simulation ofsocial dynamics via Large Language Models")) Simulation error in black-box system identification ([2(b)](https://arxiv.org/html/2412.05093v1#S2.F2.sf2 "Figure 2(b) ‣ Figure 2 ‣ 2 Agent-Based Models of Social Dynamics ‣ Sense and Sensitivity: Evaluating the simulation ofsocial dynamics via Large Language Models")) Schematic of the evaluation framework, showing encoding, decoding and dynamics operations.

## 3 Method

Given a reference model as in [section 2](https://arxiv.org/html/2412.05093v1#S2 "2 Agent-Based Models of Social Dynamics ‣ Sense and Sensitivity: Evaluating the simulation ofsocial dynamics via Large Language Models"), we can now define a framework to measure the two *necessary conditions* that we are concerned with: (a) how consistent an LLM-ABM is with the dynamics of the reference model and (b) how robust the LLM-ABM is to minor variations in prompting.
To approach these questions, we will adopt an approach similar to system identification in control theory, and evaluate the *simulation error* of the LLM-ABM relative to the reference model ([Ljung, 1998](https://arxiv.org/html/2412.05093v1#bib.bib24)).
In particular, let $\mathcal{X}$ denote the domain of the *population state*, e.g., $\mathbb{R}^{N}$ or $[-1,1]^{N}$ for population opinions. Furthermore, let $p\_{X|T}$ be the conditional distribution of the population state at time $T$. Such stochasticity in the dynamics can be introduced via random initial conditions $x(0)$ or through the transition function $f$, as for instance in ([Schelling, 1971](https://arxiv.org/html/2412.05093v1#bib.bib32)). Next, let $\theta$ be a set of prompts, let $\mathcal{M}$ be a pre-trained LLM such as LLaMA ([Touvron et al., 2023](https://arxiv.org/html/2412.05093v1#bib.bib36)), and let $h\_{\mathcal{M},\theta}:\mathcal{X}\to\mathcal{X}$ be a LLM-ABM parametrized by $\theta$ that maps a population state $\bm{x}(t)$ to its successor state. Since we will only consider models over a single pre-trained LLM, we will drop the subscript $\mathcal{M}$ in the following for conciseness.
Next, to compare the dynamics of LLM-ABMs relative to a reference ABM, we need to address the obvious domain mismatch, i.e., the fact that LLMs don’t operate natively in $\mathcal{X}$, but rather in the space of natural language (in the following denoted by $\mathbb{T}$). Due to this issue, the two dynamics are not directly comparable. To overcome this, we propose the following encoding-decoding scheme (see also [fig. 2(b)](https://arxiv.org/html/2412.05093v1#S2.F2.sf2 "In Figure 2 ‣ 2 Agent-Based Models of Social Dynamics ‣ Sense and Sensitivity: Evaluating the simulation ofsocial dynamics via Large Language Models")):

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
|  | Encoder : | $\displaystyle e\_{\theta\_{\text{enc}}}:\mathbb{R}\to\mathbb{T}$ | LLM dynamics : | $\displaystyle g\_{\theta\_{\text{dyn}}}:\mathbb{T}\to\mathbb{T}$ |  | (5) |
|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
|  | Decoder : | $\displaystyle d\_{\theta\_{\text{dec}}}:\mathbb{T}\to\mathbb{R}$ | LLM model : | $\displaystyle h\_{\theta}(x)=d\_{\theta\_{\text{dec}}}\ \circ\ g\_{\theta\_{\text{sim}}}\ \circ\ e\_{\theta\_{\text{enc}}}(x)$ |  |

In [eq. 5](https://arxiv.org/html/2412.05093v1#S3.E5 "In 3 Method ‣ Sense and Sensitivity: Evaluating the simulation ofsocial dynamics via Large Language Models"), we first encode a scalar state value into a natural language representation, then apply the LLM dynamics to the natural language representation and finally decode this back into a scalar state. All components $e$, $g$, $d$ are parametrized by $\mathcal{M}$ and instruction prompts that specify the encoding-decoding operations and the dynamics itself. For $h$ it holds simply that $\theta=\theta\_{\text{enc}}\cup\theta\_{\text{dec}}\cup\theta\_{\text{dyn}}$.

Given this encoding-decoding scheme, we can now introduce the general notion of
consistency of a candidate LLM-ABM with a pre-defined reference model:

###### Definition 3 (Model inconsistency).

Let $f:\mathcal{X}\to\mathcal{X}$ denote a reference model and $h\_{\theta}:\mathcal{X}\to\mathcal{X}$ an candidate model. Let $\mathcal{L}:\mathcal{X}\times\mathcal{X}\to\mathbb{R}\_{+}$ denote a loss function. The *inconsistency of $h\_{\theta}$ with $f$* is then defined as the *expected simulation error* over $p(x|t)$ averaged over all time step $t$, i.e.,

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$C(f,h\_{\theta})=\textstyle\frac{1}{T}\sum\_{t=1}^{T}\mathbb{E}\_{X\_{T}\sim p\_{X|T=t}}\left[\mathcal{L}(f(X\_{T}),h(X\_{T}))\right]=\frac{1}{T}\sum\_{t=1}^{T}\int\_{\mathcal{X}}\mathcal{L}(f(x),h\_{\theta}(x))\ p(x\mid t)\ dx$$ |  | (6) |

Since we have, by definition, access to the reference model, we can use Monte-Carlo estimation to approximate [eq. 6](https://arxiv.org/html/2412.05093v1#S3.E6 "In Definition 3 (Model inconsistency). ‣ 3 Method ‣ Sense and Sensitivity: Evaluating the simulation ofsocial dynamics via Large Language Models"). In particular, let $\mathcal{D}=\smash{{\{(\bm{x}(t\_{k}))\}}\vphantom{m}^{K}\_{k=1}}$ be a dataset that is sampled from $p(x|t)$ by simulating the reference model forward in time. Then, [eq. 6](https://arxiv.org/html/2412.05093v1#S3.E6 "In Definition 3 (Model inconsistency). ‣ 3 Method ‣ Sense and Sensitivity: Evaluating the simulation ofsocial dynamics via Large Language Models") can be approximated via

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\mathbb{E}\_{X\_{T}\sim p\_{X|T=t}}\left[\mathcal{L}(f(X\_{T}),h(X\_{T}))\right]\approx\textstyle\frac{1}{|\mathcal{D}|}\sum\_{x\in\mathcal{D}}\mathcal{L}(f(x),h(x))$$ |  | (7) |

Given [definition 3](https://arxiv.org/html/2412.05093v1#Thmdefinition3 "Definition 3 (Model inconsistency). ‣ 3 Method ‣ Sense and Sensitivity: Evaluating the simulation ofsocial dynamics via Large Language Models") and [eq. 7](https://arxiv.org/html/2412.05093v1#S3.E7 "In 3 Method ‣ Sense and Sensitivity: Evaluating the simulation ofsocial dynamics via Large Language Models"), we can now evaluate the consistency of a LLM-ABM with a reference model.
However, an important aspect to note is that [eq. 5](https://arxiv.org/html/2412.05093v1#S3.E5 "In 3 Method ‣ Sense and Sensitivity: Evaluating the simulation ofsocial dynamics via Large Language Models") introduces an additional source of error that might not be due to the LLM dynamics itself, but instead to the encoding-decoding operations. For this reason, it is important to also measure the consistency of these operations when combining [eq. 5](https://arxiv.org/html/2412.05093v1#S3.E5 "In 3 Method ‣ Sense and Sensitivity: Evaluating the simulation ofsocial dynamics via Large Language Models") with [definition 3](https://arxiv.org/html/2412.05093v1#Thmdefinition3 "Definition 3 (Model inconsistency). ‣ 3 Method ‣ Sense and Sensitivity: Evaluating the simulation ofsocial dynamics via Large Language Models"), i.e., that an encoded scalar is decoded back to a similar value. We define this form of consistency as follows:

###### Definition 4 (Encoding-Decoding consistency).

Let $e:\mathbb{R}\to\mathbb{T}$ and $d:\mathbb{T}\to\mathbb{R}$ be encoding and decoding operations, respectively and let $\mathcal{L}:\mathbb{R}\times\mathbb{R}\to\mathbb{R}\_{+}$ denote a loss function. Then, the consistency of these operations is defined as the expected loss over $p\_{X}$ between a scalar opinion value and the chained encoding-decoding operation, i.e.,

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\smash{\mathbb{E}\_{X\sim p\_{X}}}[\mathcal{L}(X,d\ \circ\ e(X)]$$ |  | (8) |

Given a computable consistency measure as in [definition 3](https://arxiv.org/html/2412.05093v1#Thmdefinition3 "Definition 3 (Model inconsistency). ‣ 3 Method ‣ Sense and Sensitivity: Evaluating the simulation ofsocial dynamics via Large Language Models"), we can now also proceed to define the sensitivity of a LLM-ABM to prompt variations. In slight abuse of notation, let $\theta+\epsilon$ denote the (slight) variation of a prompt, e.g., semantically equivalent phrasings or adding of whitespace.

###### Definition 5 (Model sensitivity).

Let $f$ and $h\_{\theta}$ be reference and candidate model, respectively. Further, let $h\_{\theta+\epsilon}$ denote the candidate model with a slight variation in prompts. The sensitivity of $h\_{\theta}$ to prompt variations is then defined as the absolute difference in consistency between the models,

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$S(f,h\_{\theta},\epsilon)=|C(f,h\_{\theta})-C(f,h\_{\theta+\epsilon})|$$ |  | (9) |

Given [definitions 3](https://arxiv.org/html/2412.05093v1#Thmdefinition3 "Definition 3 (Model inconsistency). ‣ 3 Method ‣ Sense and Sensitivity: Evaluating the simulation ofsocial dynamics via Large Language Models") and [5](https://arxiv.org/html/2412.05093v1#Thmdefinition5 "Definition 5 (Model sensitivity). ‣ 3 Method ‣ Sense and Sensitivity: Evaluating the simulation ofsocial dynamics via Large Language Models"), we now evaluate the consistency of a LLM-ABM and its sensitivity to prompt variations. Without being able to achieve consistency, it is clear that the LLM-ABM is not able to simulate the reference model sufficiently and any observed prompt variations are not informative in this case. With regard to sensitivity, the interpretation is more subtle. If the sensitivity is high, it means that the LLM-ABM is highly sensitive to the choice of prompts. Under this circumstances, it is hard to argue that the LLM-ABM fulfills its intended use of providing interpretable insights into the dynamics since an almost equal explanation leads to a substantially different outcome.

## 4 Simulating LLM-Agent Opinion Dynamics at Scale

To give meaning to [section 3](https://arxiv.org/html/2412.05093v1#S3 "3 Method ‣ Sense and Sensitivity: Evaluating the simulation ofsocial dynamics via Large Language Models"), we need to instantiate the social network $G$, the encoding-decoding pair $e,d$, as well as the LLM dynamics $g$ with concrete objects. In the following, we will discuss options for these choices in the context of simulating opinion dynamics as in [section 2](https://arxiv.org/html/2412.05093v1#S2 "2 Agent-Based Models of Social Dynamics ‣ Sense and Sensitivity: Evaluating the simulation ofsocial dynamics via Large Language Models"). Furthermore we will discuss how such simulations can be achieved at scale, i.e., for thousands of agents.

#### Social network

The social network $G$ can be instantiated either according to real-world social networks ranging from social media ([Adamic & Glance, 2005](https://arxiv.org/html/2412.05093v1#bib.bib1); [Backstrom et al., 2006](https://arxiv.org/html/2412.05093v1#bib.bib4)) over academia ([Leskovec et al., 2005](https://arxiv.org/html/2412.05093v1#bib.bib23)) to congress ([Fink et al., 2023](https://arxiv.org/html/2412.05093v1#bib.bib14)), or, alternatively, via random social network generators such as stochastic block models ([Holland et al., 1983](https://arxiv.org/html/2412.05093v1#bib.bib19); [Karrer & Newman, 2011](https://arxiv.org/html/2412.05093v1#bib.bib21)) and the Barabasi-Albert model ([Barabási & Albert, 1999](https://arxiv.org/html/2412.05093v1#bib.bib5)). It is well-known that different network structures (e.g., scale-free versus small-world as in [Watts & Strogatz 1998](https://arxiv.org/html/2412.05093v1#bib.bib41)) can lead to different opinion dynamics. However, since we will not focus on the effect of network structure in this work, we will instantiate $G$ simply via a standard Erdős-Rényi model $G(n,p)$ ([Erdős & Rényi, 1960](https://arxiv.org/html/2412.05093v1#bib.bib12)) where $n$ denotes the number of nodes and $p$ denotes the probability of an edge between in the graph. Hence, edges in this model are created randomly according to
$\forall i,j\in V:\Pr(i\sim j)=p.$

#### Agent Personas

To fulfill the promise of LLMs to create more realistic social dynamics, each agent needs also to be instantiated with realistic personas. However, achieving this at scale is non-trivial. To access a large and diverse range of personas, we utilize the crowd-sourced PersonaChat data set ([Zhang et al., 2018](https://arxiv.org/html/2412.05093v1#bib.bib44)). To infuse agents with their respective personas, we prefix each prompt with the persona information for this agent. See [table 2](https://arxiv.org/html/2412.05093v1#A1.T2 "In A.1 Prompt Examples ‣ Appendix A Supplementary Material ‣ Sense and Sensitivity: Evaluating the simulation ofsocial dynamics via Large Language Models") in appendix [A.1](https://arxiv.org/html/2412.05093v1#A1.SS1 "A.1 Prompt Examples ‣ Appendix A Supplementary Material ‣ Sense and Sensitivity: Evaluating the simulation ofsocial dynamics via Large Language Models") for examples.

#### Agent micro-instructions

Given a social network and agent personas, we can then define the ABM via instruction prompts. In particular, the *encoding prompt* $\theta\_{\text{enc}}$ takes as input a scalar opinion about a topic as well as the agent’s persona and outputs a text that reflects the agent’s opinion. The *dynamics prompt* $\theta\_{\text{dyn}}$ takes as input the agent’s persona and a timeline of posts from the agent’s network and outputs the agent’s updated opinion. The *decoding prompt* $\theta\_{\text{dec}}$ takes as input the agent’s updated opinion and outputs a scalar opinion. See [table 2](https://arxiv.org/html/2412.05093v1#A1.T2 "In A.1 Prompt Examples ‣ Appendix A Supplementary Material ‣ Sense and Sensitivity: Evaluating the simulation ofsocial dynamics via Large Language Models") in appendix [A.1](https://arxiv.org/html/2412.05093v1#A1.SS1 "A.1 Prompt Examples ‣ Appendix A Supplementary Material ‣ Sense and Sensitivity: Evaluating the simulation ofsocial dynamics via Large Language Models") for examples of these prompts.

(a) Ego Network

(b) System architecture

Figure 3: ([3(a)](https://arxiv.org/html/2412.05093v1#S4.F3.sf1 "Figure 3(a) ‣ Figure 3 ‣ Agent micro-instructions ‣ 4 Simulating LLM-Agent Opinion Dynamics at Scale ‣ Sense and Sensitivity: Evaluating the simulation ofsocial dynamics via Large Language Models")) Ego network and opinion aggregation. The ego network of node Blue is indicated by solid edges. Nodes in Blue’s ego network that are within an $\epsilon$ distance of Blue’s opinion are indicated in green. Edges which transmit opinions are indicated by a text icon. ([3(b)](https://arxiv.org/html/2412.05093v1#S4.F3.sf2 "Figure 3(b) ‣ Figure 3 ‣ Agent micro-instructions ‣ 4 Simulating LLM-Agent Opinion Dynamics at Scale ‣ Sense and Sensitivity: Evaluating the simulation ofsocial dynamics via Large Language Models")) System architecture. Number of vLLM instances depends on task load. Load balancer dispatches to the least utilized instance.


Algorithm 1  Simulation protocol

1:
$x(t)\in\mathcal{X}$ and $G=(V,E)$

2:
Initialize post $p\_{i}$ with opinion $x\_{i}(t)$ using *encoding* prompt for all agents $i\in V$.

3:
for each agent $i\in V$ do

4:
  $\mathcal{N}(i,t)\leftarrow\{j:i\sim j\land|x\_{i}(t)-x\_{j}(t)|\leq\epsilon\}$

5:
  Concatenate all posts $p\_{j}$ for $j\in\mathcal{N}(i,t)$ to form a timeline.

6:
  Update textual opinion $y(t)$ from timeline using *dynamics* prompt.

7:
  Decode $y(t)$ to scalar opinion $x\_{i}(t+1)$ using *decoding* prompt.

8:
end for

9:
return $x(t+1)$

The full simulation protocol for a single transition $\bm{x}(t)\mapsto\bm{x}(t+1)$ is shown in [algorithm 1](https://arxiv.org/html/2412.05093v1#alg1 "In Agent micro-instructions ‣ 4 Simulating LLM-Agent Opinion Dynamics at Scale ‣ Sense and Sensitivity: Evaluating the simulation ofsocial dynamics via Large Language Models"). Computationally, an important aspect is that each agent needs only access to their ego network in $G$ to perform their individual update. Hence, agent updates can be performed in parallel once the initial opinion posts are available (which can be computed in parallel too).
Nevertheless, LLM-ABM simulations can be time-consuming due to the large number of calls to an LMM with significant computational demands. Every action within an LLM agent’s behavior can require a sequence of LLM inference calls whose number increases with the agent count (N) in the simulation. Due to each agent’s dual role in initiating actions and responding to others, it can potentially escalate complexity beyond linear. More agents also extend the prompt sequence, considering more observations when generating reactions. Standard transformer implementations ([Vaswani et al., 2017](https://arxiv.org/html/2412.05093v1#bib.bib39)) have a quadratic complexity with sequence length.
These LLM-ABM’s requirements can exceed the usual rate limits of commercial API-based LLMs, making direct use of such services impractical. Open-source models like LLaMA-2 70B, when used without parallelism, also exhibit prolonged response generation times. To tackle these challenges, we develop an end to end LLM-ABM framework. Our approach encompasses two primary components: an optimized agent implementation and an efficient LLM inference server. We will be releasing the code associated with this paper.
In the agent implementation, we distinguish between tasks requiring simultaneous execution and those amenable to parallelization. We also use caching for repeated tasks such as initial persona summarization to expedite startup time and minimize unnecessary LLM calls. We utilize LangChain as the interface for LLM interaction, ensuring compatibility with various LLMs models, including LLaMA.
For the LLM backend, we implement a load balancer with vLLM inference serving engines ([Kwon et al., 2023](https://arxiv.org/html/2412.05093v1#bib.bib22)). Multiple vLLM instances can run on different nodes, with an NGINX-based load balancer managing traffic and automatic failure handling.
Using these optimizations, our system can facilitate large simulations, handling a pairwise conversation with 5000 agents in an hour when running with 16 nodes (with 8 V100 GPUs each). The majority of the experiments detailed in this paper are therefore completed within minutes. However, it is important to note that some LLM constraints can still impact scalability. For instance, the 4096 context size of LLaMA-2 imposes a constraint on the amount of text that a single agent can process, causing the number of neighbors used in the simulation to be limited by content length, particularly when aggregating interactions from other agents. For LLMs with larger context length, these limitations disappear in our implementation.

## 5 Experiments

In the following, we evaluate the ability of LLMs to reproduce the dynamics of the DeGroot and Hegselmann-Krause models using the framework of [section 3](https://arxiv.org/html/2412.05093v1#S3 "3 Method ‣ Sense and Sensitivity: Evaluating the simulation ofsocial dynamics via Large Language Models"). Our goal is to evaluate in what way LLMs capture the dynamics we would expect, which prompting techniques are (un)successful, and how sensitive they are to the choice of prompts.
For this purpose, we run simulations of opinion dynamics related to *free market versus a planned economy*. The advantage of this topic is that it allows us to state different view points in terms of positive and negative framings, i.e., an opinion pro free market corresponds to an opinion contra planned economy, and vice versa. This will allow us in our experiments to investigate possible biases of LLMs against negative feedback in general (which might, for instance, be introduced through alignment methods). Since both framings are semantically close to identical, this will allow us also to analyze this in terms of sensitivity and reliability.
To encode opinion values, we are mapping manually from the range of $[-5,5]$ to an 11-point text opinion scale in our main experiments. In this mapping, the sign is interpreted as supporting one of the two contrarian positions (pro free market versus pro planned economy), and the magnitude is interpreted as the strength of support, mapping $[1,5]$ to a bit in favor of, slightly in favor of, moderately in favor of, clearly in favor of, or strongly supportive of accordingly.
Magnitude $0$ is used to represent *indifference* or preference for a mixed approach.
In addition to this manual mapping, we include an ablation where the LLM is tasked to convert the numeric opinion autonomously into text, i.e., without a manual mapping, in the encode-decode consistency section.
As loss functions in [eq. 6](https://arxiv.org/html/2412.05093v1#S3.E6 "In Definition 3 (Model inconsistency). ‣ 3 Method ‣ Sense and Sensitivity: Evaluating the simulation ofsocial dynamics via Large Language Models"), we will use the absolute distance between reference and LLM dynamics as well as the indicator function whether the sign of opinions (or their polarity) agree. Formally, these loss functions are defined as:

|  |  |  |
| --- | --- | --- |
|  | $\displaystyle\mathcal{L}\_{\text{Distance}}(f(x),h(x))=|f(x)-h(x)|,\quad\text{and}\quad\mathcal{L}\_{\text{Polarity}}(f(x),h(x))=\mathbb{1}[\operatorname{sgn}\lceil f(x)\rfloor\neq\operatorname{sgn}h(x)].$ |  |

where $\lceil x\rfloor$ denotes rounding of $x\in\mathbb{R}$ to the nearest integer.

$5$$10$$15$$1$$2$$3$Average neighborhood sizeDistanceMethodRegressionLLaMA-2LLaMA-2LLaMA-3LLaMA-3Zero agentsZero agentsRandom agentsRandom agents

(a) Distance metric

$5$$10$$15$$0$$50$$100$Average neighborhood sizePolarityMethodRegressionLLaMA-2LLaMA-2LLaMA-3LLaMA-3Zero agentsZero agentsRandom agentsRandom agents

(b) Polarity metric

$-5$$0$$5$$-5$$0$$5$$x$$d(e(x))$MethodRegressionGround truthDiscreteDiscreteScalarScalar

(c) Encoding-Decoding

Figure 4: Consistency Evaluation

#### Model consistency

To meaningfully evaluate the sensitivity of an LLM-ABM to prompt variations, we first need to establish that a base model $\theta$ is sufficiently consistent with the reference model via [definition 3](https://arxiv.org/html/2412.05093v1#Thmdefinition3 "Definition 3 (Model inconsistency). ‣ 3 Method ‣ Sense and Sensitivity: Evaluating the simulation ofsocial dynamics via Large Language Models"). For this purpose, we first initialize opinions uniformly at random within $[-1,1]$ for the entire population of $N$ agents. Subsequently, we run the Hegselmann-Krause model for a total of 20 epochs. At each time step, the updates are computed according to [algorithm 1](https://arxiv.org/html/2412.05093v1#alg1 "In Agent micro-instructions ‣ 4 Simulating LLM-Agent Opinion Dynamics at Scale ‣ Sense and Sensitivity: Evaluating the simulation ofsocial dynamics via Large Language Models"), where the input state $x(t)$ of the reference model at each step is subsequently fed into the LLM agents to compute the simulation error.
The set of prompts $\theta\_{\text{enc}}$, $\theta\_{\text{dec}}$, and $\theta\_{\text{dyn}}$ used for this process can be found in [table 2](https://arxiv.org/html/2412.05093v1#A1.T2 "In A.1 Prompt Examples ‣ Appendix A Supplementary Material ‣ Sense and Sensitivity: Evaluating the simulation ofsocial dynamics via Large Language Models") in appendix [A.1](https://arxiv.org/html/2412.05093v1#A1.SS1 "A.1 Prompt Examples ‣ Appendix A Supplementary Material ‣ Sense and Sensitivity: Evaluating the simulation ofsocial dynamics via Large Language Models").
We evaluate distance and polarity, using $N=20$ agents compared to the reference model. Distance metrics are computed by rescaling the reference model’s opinions from a continuous $([-1,1])$ scale to the LLMs $([-5,5])$ scale. Polarity, a measure of opinion divergence, rounds values within $x(t)\in[-0.5,0.5]$ to 0 and counts sign mismatches. [Figure 4(b)](https://arxiv.org/html/2412.05093v1#S5.F4.sf2 "In Figure 4 ‣ 5 Experiments ‣ Sense and Sensitivity: Evaluating the simulation ofsocial dynamics via Large Language Models") presents the polarity percentage of total updates. In both figures, the LLM agents value are shown with its error bar representing a $0.95$ confidence interval.
To introduce a comparison scale, we report two baselines. (i) A *random agent*, i.e., an agent whose opinions are sampled from a discrete uniform distribution over integers such that $\bm{x}(t)\_{i}=\mathcal{U}\{-5,5\}$. (ii) A *zero agent*, which consistently selects zero as its opinion, serves a dual purpose: it represents an agent who always chooses ‘indifferent’ and an agent who consistently chooses the network’s average opinion as the network’s initial opinion is sampled from a Gaussian distribution centered at 0. The full details of the experiments including runs with $N=50$ can be found in [table 5](https://arxiv.org/html/2412.05093v1#A1.T5 "In A.3 Comparative analysis of model consistency ‣ Appendix A Supplementary Material ‣ Sense and Sensitivity: Evaluating the simulation ofsocial dynamics via Large Language Models").
[Figures 4(a)](https://arxiv.org/html/2412.05093v1#S5.F4.sf1 "In Figure 4 ‣ 5 Experiments ‣ Sense and Sensitivity: Evaluating the simulation ofsocial dynamics via Large Language Models") and [4(b)](https://arxiv.org/html/2412.05093v1#S5.F4.sf2 "Figure 4(b) ‣ Figure 4 ‣ 5 Experiments ‣ Sense and Sensitivity: Evaluating the simulation ofsocial dynamics via Large Language Models") shows the results of these experiments. It can be seen that the base model provides a good approximation of the reference dynamics (e.g., polarity is inaccurate in less than 10% cases) and provides substantial improvements over the comparison models. Hence, this base model $\theta$ is appropriate to further investigate the sensitivity of the LLM-ABM.

Table 1: ([4(d)](https://arxiv.org/html/2412.05093v1#S5.F4.sf4.fig1 "Figure 4(d) ‣ Table 1 ‣ Model consistency ‣ 5 Experiments ‣ Sense and Sensitivity: Evaluating the simulation ofsocial dynamics via Large Language Models")) *Prompt sensitivity* and ([4(e)](https://arxiv.org/html/2412.05093v1#S5.F4.sf5.fig1 "Figure 4(e) ‣ Table 1 ‣ Model consistency ‣ 5 Experiments ‣ Sense and Sensitivity: Evaluating the simulation ofsocial dynamics via Large Language Models")) *Negativitiy bias* for HK simulations using LLaMA-2. Examples of differences between base model and variants are highlighted in green (base), red (variant).

|  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  | | | Prompt $\theta\_{\text{base}}$ | |  | Prompt $\theta\_{\text{wording}}$ | |  | Prompt $\theta\_{\text{logic}}$ | |
| $N$ | $p$ | $\epsilon$ | Distance | Polarity % |  | Distance | Polarity % |  | Distance | Polarity % |
| 20 | 0.3 | 0.9 | 1.1 (0.3) | 15.7 (7.0) |  | 1.5 (0.2) | 26.3 (19.4) |  | 2.5 (0.2) | 58.0 (26.5) |
| 20 | 0.5 | 0.9 | 1.4 (0.4) | 15.5 (9.1) |  | 1.6 (0.3) | 18.4 (16.3) |  | 2.3 (0.4) | 55.8 (31.7) |
| 20 | 0.9 | 0.9 | 1.0 (0.3) | 9.2 (2.7) |  | 1.7 (0.3) | 23.2 (18.8) |  | 2.3 (0.3) | 48.4 (30.3) |
| 20 | 1.0 | 0.9 | 1.2 (0.4) | 11.8 (9.2) |  | 1.7 (0.2) | 44.0 (22.9) |  | 2.2 (0.4) | 49.3 (33.0) |

(d)

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  |  | Author | | |
|  |  | Pro Free Market | Pro Planned Economy | Contra Free Market |
| Reader | Pro Free Market | -1.1 (0.0) | -1.0 (0.0) | -0.9 (0.0) |
| Pro Planned economy | -1.0 (0.0) | -1.1 (0.0) | - |
| Contra Free Market | -1.0 (0.0) | - | -0.8 (0.1) |

(e)

#### Encode-decode consistency

To evaluate the encoding-decoding consistency as in [definition 4](https://arxiv.org/html/2412.05093v1#Thmdefinition4 "Definition 4 (Encoding-Decoding consistency). ‣ 3 Method ‣ Sense and Sensitivity: Evaluating the simulation ofsocial dynamics via Large Language Models"), we repeatedly encode and decode opinion values within $[-5,5]$ and record the mean consistency over all repetitions. We compare two pairs of encoding-decoding prompts (i) *discrete*, where we manually discretize the numeric opinions into the textual range as discussed before and (ii) *scalar*, where the LLM receives the raw numerical opinion and is tasked to convert this to a textual representation autonomously. The results of these experiments are shown in [fig. 4(c)](https://arxiv.org/html/2412.05093v1#S5.F4.sf3 "In Figure 4 ‣ 5 Experiments ‣ Sense and Sensitivity: Evaluating the simulation ofsocial dynamics via Large Language Models"). It can be seen that the encoding-decoding scheme can have substantial impact and is far from trivial. In general, the discrete scheme provides clearly better results than the scalar scheme, and is reasonably aligned with the ground truth. However, for opinions close to zero, the codec quality deteriorates which indicates challenges for the LLM to process nuances close to neutral stances.

#### Sensitivity to prompts

As seen in the previous experiments, it is possible to find instruction prompts that provide a reasonable approximation to the reference dynamics. However, consistency is only a necessary and not a sufficient condition for an LLM-ABM to be useful. A second necessary condition is reliability, which we analyze in the following. For this purpose, we create two prompt sets that are semantically similar to the original prompts $\theta\_{\text{base}}$ but have two main differences:

> Prompt wording $\theta\_{\text{wording}}$:
> :   In this prompt set, the wording of the decoding prompt is slightly changed. In $\theta\_{\text{base}}$, the agent is asked if the polarity of a post equals $1$ and selecting $-1$ otherwise, while $\theta\_{\text{wording}}$, asks whether the polarity equals $1$ or $-1$. Clearly, both prompts are semantically identical. All other prompts are unchanged.
>
> Prompt logic $\theta\_{\text{logic}}$:
> :   In this prompt set, the decoding prompt $\theta\_{\text{dec}}$ is changed such that it directly asks for opinion score on a scale of $[-5,5]$, rather than first asking for the polarity $\{-1,0,1\}$ and then the magnitude of the opinion $[1,5]$ as in $\theta\_{\text{base}}$. Again, both prompts are semantically identical and $\theta\_{\text{enc}}$, $\theta\_{\text{dyn}}$ remain unchanged.
>
> Prompt newline $\theta\_{\text{\textbackslash n}}$:
> :   In this prompt set, the only change compared to $\theta\_{\text{base}}$ is the removal of newline characters $\textbackslash n$ and apostrophe ’ in all prompts.

The results for $\theta\_{\text{wording}}$ and $\theta\_{\text{logic}}$ are shown in [fig. 4(d)](https://arxiv.org/html/2412.05093v1#S5.F4.sf4.fig1 "In Table 1 ‣ Model consistency ‣ 5 Experiments ‣ Sense and Sensitivity: Evaluating the simulation ofsocial dynamics via Large Language Models"). It can be seen that the choice of prompts can have a significant impact on the consistency of the LLM-ABM. For instance, the percentage of posts in which the polarity is wrongly assessed jumps from 11.8% on average to 44.0% and 49.3%, a 4x increase and worse than a random agent. Similar results can be observed for the distance metric in [fig. 4(d)](https://arxiv.org/html/2412.05093v1#S5.F4.sf4.fig1 "In Table 1 ‣ Model consistency ‣ 5 Experiments ‣ Sense and Sensitivity: Evaluating the simulation ofsocial dynamics via Large Language Models"), as well as for $\theta\_{\text{\textbackslash n}}$ in table [8](https://arxiv.org/html/2412.05093v1#A1.T8 "Table 8 ‣ A.4 Prompt 𝜃_\"\n\" results ‣ Appendix A Supplementary Material ‣ Sense and Sensitivity: Evaluating the simulation ofsocial dynamics via Large Language Models") [section A.4](https://arxiv.org/html/2412.05093v1#A1.SS4 "A.4 Prompt 𝜃_\"\n\" results ‣ Appendix A Supplementary Material ‣ Sense and Sensitivity: Evaluating the simulation ofsocial dynamics via Large Language Models"), where the distance metrics drops from $2.1$ to $1.2$ for LLaMA-3. An important observation is also that these results are not dependent on LLM quality, since LLaMA-3 is not necessarily more robust than LLaMA-2. Overall, these results demonstrate well the limited reliability of LLM-ABMs with regard to the choice of prompts.

#### Negativity bias

Finally, we also evaluate the impact of question framing on the LLM’s opinion generation. We compare the performance of two prompts, one contrasting two positively framed stances (pro free-market versus pro planned economy) and one contrasting a positive and negative stance (pro free-market versus contra free-market). We design a simplified scenario where an *author* agent is tasked with generating a post that expresses its opinion. Subsequently, a *reader* agent is directed to express their opinion about the author’s post. Opinion about topics as well as opinions about posts are on a scale ranging from [strong disagree, disagree, indifferent, agree, strong agree], corresponding to $[-2,2]$. Each reader considers their own opinion about the topics (which is encoded in their persona) when assessing a post. We show the average opinion for each combination of these framings in [fig. 4(e)](https://arxiv.org/html/2412.05093v1#S5.F4.sf5.fig1 "In Table 1 ‣ Model consistency ‣ 5 Experiments ‣ Sense and Sensitivity: Evaluating the simulation ofsocial dynamics via Large Language Models").
It can be seen that there exist again clear differences in the consistency where the positive-only framing shows better results. Since both prompts are semantically very close, this supports also the sensitivity of LLM-ABMs and the associated reliability issues.

## 6 Related work

LLM-based agent-based models, denoted LLM-ABM, have recently become feasible due to the ongoing development of large language models. Like classical ABMs, the applications are wide-ranging and diverse, including virtual-world simulation, social media and opinion dynamics models, and analysis of physical systems. [Park et al. (2023)](https://arxiv.org/html/2412.05093v1#bib.bib28) introduced generative agents simulating the behavior of a small town displaying unexpected emergent behavior. [Kaiya et al. (2023)](https://arxiv.org/html/2412.05093v1#bib.bib20) introduced a virtual society simulation of agents in a 3D environment. [Gao et al. (2023)](https://arxiv.org/html/2412.05093v1#bib.bib15) and [Park et al. (2023)](https://arxiv.org/html/2412.05093v1#bib.bib28) consider social media simulations of large numbers of agents. [Törnberg et al. (2023)](https://arxiv.org/html/2412.05093v1#bib.bib38) simulated social media users as agents and performed synthetic experiments evaluating the effects of different ranking algorithms determining which posts the agents observe.
[Chuang et al. (2023)](https://arxiv.org/html/2412.05093v1#bib.bib8) considered LLM-driven opinion dynamics simulations similar to those examined here. This past research on social simulation and opinion dynamics via LLM-ABM demonstrated that rich, complex behavior could be created, but calibrating the dynamics was largely considered crucial future research. Here we provide a framework to evaluate consistency with known theories of opinion dynamics, grounding LLM-ABM dynamics with respect to a reference model. Furthermore, we extend the research focus to the sensitivity of LLM-ABMs to changes in their micro-specifications and their suitability for theory-building.
While not considering an explicit reference, [Taubenfeld et al. (2024)](https://arxiv.org/html/2412.05093v1#bib.bib34) discussed limitations of LLM-ABM’s for simulating political debates, finding systematic intrinsic biases towards moderation that led to debaters’ opinions shifting to common ground. Another approach to calibrated behavior is to restrict LLM dynamics to match a known parameterized model, and [Memery et al. (2023)](https://arxiv.org/html/2412.05093v1#bib.bib26) examined how well LLM’s can perform parameter inference in physical systems.

## 7 Discussion

In this work, we have proposed a new evaluation framework to understand the ability of LLMs to replace ABMs for the simulation of social dynamics. By treating LLMs as black-box function and grounding their dynamics in the dynamics of references models, we were able to show that the simulated dynamics of LLMs can vary substantially relative to semantically minor changes in prompts. While LLMs are able to capture the intended dynamics with sufficient prompt engineering, it is therefore difficult to get reliable insights from the prompts that parameterize the simulation. This puts into question their use as ABMs, at least in their current form. If minor, semantically equivalent changes can have substantial impact on a simulation’s outcome, no insights can be gained for theory-building and analysis by analyzing the microbehavior encoded in the prompts.

While our results already provide important insights, they are also limited in two aspects that point to promising directions for future work. First, the scale of our experiments is currently limited by the context length that is achievable by models such as LLaMA-2. Since scale and corresponding network topologies can have non-trivial effects on social dynamics, overcoming this scaling limitation can provide for insights into the capabilities of LLMs. Second, our results are currently attained via manual search over prompt-space. While this allows to control semantic similarity in the prompt search, it does not scale to a large-scale investigation of the prompt space. Automated prompt optimization methods such as PromptBreeder ([Fernando et al., 2023](https://arxiv.org/html/2412.05093v1#bib.bib13)) and AdvPrompter ([Paulus et al., 2024](https://arxiv.org/html/2412.05093v1#bib.bib29)) are promising directions to overcome this limitation.

## References

- Adamic & Glance (2005)

  Lada A Adamic and Natalie Glance.
  The political blogosphere and the 2004 U.S. election.
  In *Proceedings of the 3rd international workshop on Link discovery*, New York, NY, USA, August 2005. ACM.
- An et al. (2021)

  Li An, Volker Grimm, Abigail Sullivan, B L Turner, II, Nicolas Malleson, Alison Heppenstall, Christian Vincenot, Derek Robinson, Xinyue Ye, Jianguo Liu, Emilie Lindkvist, and Wenwu Tang.
  Challenges, tasks, and opportunities in modeling agent-based complex systems.
  *Ecol. Modell.*, 457(109685):109685, October 2021.
- Auchincloss & Diez Roux (2008)

  Amy H Auchincloss and Ana V Diez Roux.
  A new tool for epidemiology: the usefulness of dynamic-agent models in understanding place effects on health.
  *Am. J. Epidemiol.*, 168(1):1–8, 2008.
- Backstrom et al. (2006)

  Lars Backstrom, Dan Huttenlocher, Jon Kleinberg, and Xiangyang Lan.
  Group formation in large social networks.
  In *Proceedings of the 12th ACM SIGKDD international conference on Knowledge discovery and data mining*, New York, NY, USA, August 2006. ACM.
- Barabási & Albert (1999)

  Albert-László Barabási and Réka Albert.
  Emergence of scaling in random networks.
  *Science*, 286(5439):509–512, 1999.
- Brian Arthur et al. (2018)

  W Brian Arthur, John H Holland, Blake LeBaron, Richard Palmer, and Paul Tayler.
  Asset pricing under endogenous expectations in an artificial stock market.
  pp. 15–44, May 2018.
- Chan et al. (1999)

  Nicholas T Chan, Blake LeBaron, Andrew W Lo, and Tomaso Poggio.
  Agent-based models of financial markets: A comparison with experimental markets.
  *Unpublished Working Paper, MIT Artificial Markets Project, MIT, MA*, 1999.
- Chuang et al. (2023)

  Yun-Shiuan Chuang, Agam Goyal, Nikunj Harlalka, Siddharth Suresh, Robert Hawkins, Sijia Yang, Dhavan Shah, Junjie Hu, and Timothy T Rogers.
  Simulating opinion dynamics with networks of LLM-based agents.
  *arXiv preprint arXiv:2311. 09618*, 2023.
- Couclelis (2001)

  Helen Couclelis.
  Why I no longer work with agents.
  In *Special Workshop on Agent-Based Models of Land-Use, Land-Cover Change, CSISS, Irvine, available on-line at www. csiss. org/events/other/agent-based/papers/couclelis. pdf*, 2001.
- DeGroot (1974)

  Morris H DeGroot.
  Reaching a consensus.
  *J. Am. Stat. Assoc.*, 69(345):118–121, March 1974.
- Epstein & Axtell (1997)

  Joshua M Epstein and Robert L Axtell.
  *Growing artificial societies*.
  Complex adaptive systems. MIT Press, London, England, October 1997.
- Erdős & Rényi (1960)

  Paul Erdős and Alfréd Rényi.
  On the evolution of random graphs.
  *Publ. math. inst. hung. acad. sci*, 5(1):17–60, 1960.
- Fernando et al. (2023)

  Chrisantha Fernando, Dylan S. Banarse, Henryk Michalewski, Simon Osindero, and Tim Rocktäschel.
  Promptbreeder: Self-referential self-improvement via prompt evolution.
  *ArXiv*, abs/2309.16797, 2023.
  URL <https://api.semanticscholar.org/CorpusID:263310323>.
- Fink et al. (2023)

  Christian G Fink, Kelly Fullin, Guillermo Gutierrez, Nathan Omodt, Sydney Zinnecker, Gina Sprint, and Sean McCulloch.
  A centrality measure for quantifying spread on weighted, directed networks.
  *Physica A*, 2023.
- Gao et al. (2023)

  Chen Gao, Xiaochong Lan, Zhihong Lu, Jinzhu Mao, Jinghua Piao, Huandong Wang, Depeng Jin, and Yong Li.
  S3: Social-network simulation system with large language model-empowered agents.
  *arXiv preprint arXiv:2307. 14984*, 2023.
- Gilbert & Terna (2000)

  Nigel Gilbert and Pietro Terna.
  How to build and use agent-based models in social science.
  *Mind Soc.*, 1:57–72, 2000.
- Goodarzi et al. (2023)

  Saeed Goodarzi, Nikhil Kagita, Dennis Minn, Shufan Wang, Roberto Dessi, Shubham Toshniwal, Adina Williams, Jack Lanchantin, and Koustuv Sinha.
  Robustness of named-entity replacements for in-context learning.
  In Houda Bouamor, Juan Pino, and Kalika Bali (eds.), *Findings of the Association for Computational Linguistics: EMNLP 2023*, pp. 10914–10931, Singapore, December 2023. Association for Computational Linguistics.
  doi: 10.18653/v1/2023.findings-emnlp.728.
  URL <https://aclanthology.org/2023.findings-emnlp.728>.
- Hegselmann & Krause (2002)

  Rainer Hegselmann and Ulrich Krause.
  Opinion dynamics and bounded confidence models, analysis, and simulation.
  *Journal of artificial societies and social simulation*, 5(3), 2002.
- Holland et al. (1983)

  Paul W Holland, Kathryn Blackmond Laskey, and Samuel Leinhardt.
  Stochastic blockmodels: First steps.
  *Soc. Networks*, 5(2):109–137, 1983.
- Kaiya et al. (2023)

  Zhao Kaiya, Michelangelo Naim, Jovana Kondic, Manuel Cortes, Jiaxin Ge, Shuying Luo, Guangyu Robert Yang, and Andrew Ahn.
  Lyfe agents: Generative agents for low-cost real-time social interactions.
  *arXiv preprint arXiv:2310. 02172*, 2023.
- Karrer & Newman (2011)

  Brian Karrer and Mark E J Newman.
  Stochastic blockmodels and community structure in networks.
  *Physical review E*, 83(1):016107, 2011.
- Kwon et al. (2023)

  Woosuk Kwon, Zhuohan Li, Siyuan Zhuang, Ying Sheng, Lianmin Zheng, Cody Hao Yu, Joseph E Gonzalez, Hao Zhang, and Ion Stoica.
  Efficient memory management for large language model serving with PagedAttention.
  In *Proceedings of the ACM SIGOPS 29th Symposium on Operating Systems Principles*, 2023.
- Leskovec et al. (2005)

  Jure Leskovec, Jon Kleinberg, and Christos Faloutsos.
  Graphs over time.
  In *Proceedings of the eleventh ACM SIGKDD international conference on Knowledge discovery in data mining*, New York, NY, USA, August 2005. ACM.
- Ljung (1998)

  Lennart Ljung.
  System identification.
  In *Signal Analysis and Prediction*, pp. 163–173. Birkhäuser Boston, Boston, MA, 1998.
- Lyu et al. (2024)

  Kaifeng Lyu, Haoyu Zhao, Xinran Gu, Dingli Yu, Anirudh Goyal, and Sanjeev Arora.
  Keeping LLMs aligned after fine-tuning: The crucial role of prompt templates.
  *arXiv preprint arXiv:2402.18540*, 2024.
- Memery et al. (2023)

  Sean Memery, Mirella Lapata, and Kartic Subr.
  SimLM: Can language models infer parameters of physical systems?
  *arXiv preprint arXiv:2312. 14215*, 2023.
- Min et al. (2022)

  Sewon Min, Xinxi Lyu, Ari Holtzman, Mikel Artetxe, Mike Lewis, Hannaneh Hajishirzi, and Luke Zettlemoyer.
  Rethinking the role of demonstrations: What makes in-context learning work?
  In Yoav Goldberg, Zornitsa Kozareva, and Yue Zhang (eds.), *Proceedings of the 2022 Conference on Empirical Methods in Natural Language Processing*, pp. 11048–11064, Abu Dhabi, United Arab Emirates, December 2022. Association for Computational Linguistics.
  doi: 10.18653/v1/2022.emnlp-main.759.
  URL <https://aclanthology.org/2022.emnlp-main.759>.
- Park et al. (2023)

  Joon Sung Park, Joseph O’Brien, Carrie Jun Cai, Meredith Ringel Morris, Percy Liang, and Michael S Bernstein.
  Generative agents: Interactive simulacra of human behavior.
  In *Proceedings of the 36th Annual ACM Symposium on User Interface Software and Technology*, New York, NY, USA, October 2023. ACM.
- Paulus et al. (2024)

  Anselm Paulus, Arman Zharmagambetov, Chuan Guo, Brandon Amos, and Yuandong Tian.
  Advprompter: Fast adaptive adversarial prompting for llms.
  2024.
  URL <https://api.semanticscholar.org/CorpusID:269430799>.
- Reynolds & McDonell (2021)

  Laria Reynolds and Kyle McDonell.
  Prompt programming for large language models: Beyond the few-shot paradigm.
  In *Extended Abstracts of the 2021 CHI Conference on Human Factors in Computing Systems*, pp. 1–7, 2021.
- Roughgarden (2012)

  Joan Roughgarden.
  Individual based models in ecology: An evaluation, or how not to ruin a good thing.
  2012.
- Schelling (1971)

  Thomas C Schelling.
  Dynamic models of segregation.
  *J. Math. Sociol.*, 1(2):143–186, July 1971.
- Shivagunde et al. (2024)

  Namrata Shivagunde, Vladislav Lialin, Sherin Muckatira, and Anna Rumshisky.
  Deconstructing in-context learning: Understanding prompts via corruption.
  In Nicoletta Calzolari, Min-Yen Kan, Veronique Hoste, Alessandro Lenci, Sakriani Sakti, and Nianwen Xue (eds.), *Proceedings of the 2024 Joint International Conference on Computational Linguistics, Language Resources and Evaluation (LREC-COLING 2024)*, pp. 4509–4529, Torino, Italy, May 2024. ELRA and ICCL.
  URL <https://aclanthology.org/2024.lrec-main.404>.
- Taubenfeld et al. (2024)

  Amir Taubenfeld, Yaniv Dover, Roi Reichart, and Ariel Goldstein.
  Systematic biases in LLM simulations of debates.
  *arXiv [cs.CL]*, February 2024.
- Tesfatsion (2023)

  Leigh Tesfatsion.
  Agent-based computational economics: Overview and brief history.
  *Artificial Intelligence, Learning and Computation in Economics and Finance*, pp. 41–58, 2023.
- Touvron et al. (2023)

  Hugo Touvron, Louis Martin, Kevin Stone, Peter Albert, Amjad Almahairi, Yasmine Babaei, Nikolay Bashlykov, Soumya Batra, Prajjwal Bhargava, Shruti Bhosale, Dan Bikel, Lukas Blecher, Cristian Canton Ferrer, Moya Chen, Guillem Cucurull, David Esiobu, Jude Fernandes, Jeremy Fu, Wenyin Fu, Brian Fuller, Cynthia Gao, Vedanuj Goswami, Naman Goyal, Anthony Hartshorn, Saghar Hosseini, Rui Hou, Hakan Inan, Marcin Kardas, Viktor Kerkez, Madian Khabsa, Isabel Kloumann, Artem Korenev, Punit Singh Koura, Marie-Anne Lachaux, Thibaut Lavril, Jenya Lee, Diana Liskovich, Yinghai Lu, Yuning Mao, Xavier Martinet, Todor Mihaylov, Pushkar Mishra, Igor Molybog, Yixin Nie, Andrew Poulton, Jeremy Reizenstein, Rashi Rungta, Kalyan Saladi, Alan Schelten, Ruan Silva, Eric Michael Smith, Ranjan Subramanian, Xiaoqing Ellen Tan, Binh Tang, Ross Taylor, Adina Williams, Jian Xiang Kuan, Puxin Xu, Zheng Yan, Iliyan Zarov, Yuchen Zhang, Angela Fan, Melanie Kambadur, Sharan Narang, Aurelien Rodriguez, Robert Stojnic, Sergey Edunov, and Thomas
  Scialom.
  Llama 2: Open foundation and fine-tuned chat models.
  *arXiv [cs.CL]*, July 2023.
- Tracy et al. (2018)

  Melissa Tracy, Magdalena Cerdá, and Katherine M Keyes.
  Agent-based modeling in public health: current applications and future directions.
  *Annu. Rev. Public Health*, 39:77–94, 2018.
- Törnberg et al. (2023)

  Petter Törnberg, Diliara Valeeva, Justus Uitermark, and Christopher Bail.
  Simulating social media using large language models to evaluate alternative news feed algorithms.
  *arXiv [cs.SI]*, October 2023.
- Vaswani et al. (2017)

  Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit, Llion Jones, Aidan N Gomez, Łukasz Kaiser, and Illia Polosukhin.
  Attention is all you need.
  *Adv. Neural Inf. Process. Syst.*, 30, 2017.
- Wallace et al. (2019)

  Eric Wallace, Shi Feng, Nikhil Kandpal, Matt Gardner, and Sameer Singh.
  Universal adversarial triggers for attacking and analyzing NLP.
  *arXiv [cs.CL]*, August 2019.
- Watts & Strogatz (1998)

  Duncan J Watts and Steven H Strogatz.
  Collective dynamics of ‘small-world’networks.
  *Nature*, 393(6684):440–442, 1998.
- Webson & Pavlick (2022)

  Albert Webson and Ellie Pavlick.
  Do prompt-based models really understand the meaning of their prompts?
  In Marine Carpuat, Marie-Catherine de Marneffe, and Ivan Vladimir Meza Ruiz (eds.), *Proceedings of the 2022 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies*, pp. 2300–2344, Seattle, United States, July 2022. Association for Computational Linguistics.
  doi: 10.18653/v1/2022.naacl-main.167.
  URL <https://aclanthology.org/2022.naacl-main.167>.
- Zhang et al. (2021)

  Kaiqing Zhang, Zhuoran Yang, and Tamer Başar.
  Multi-agent reinforcement learning: A selective overview of theories and algorithms.
  In *Handbook of Reinforcement Learning and Control*, Studies in systems, decision and control, pp. 321–384. Springer International Publishing, Cham, 2021.
- Zhang et al. (2018)

  Saizheng Zhang, Emily Dinan, Jack Urbanek, Arthur Szlam, Douwe Kiela, and Jason Weston.
  Personalizing dialogue agents: I have a dog, do you have pets too?
  *arXiv preprint arXiv:1801. 07243*, 2018.

## Appendix A Supplementary Material

### A.1 Prompt Examples

Table 2: Prompt examples.

|  |  |
| --- | --- |
| Encoding prompt | Dynamics prompt |
| {persona}  You are {opinion} {topic}.  Compose a tweet about {topic} to reflect your stance from your personal experience. Please rationalize the link between your personal experience and your stance in your tweet. Remember, there’s no need to be overly polite --- this is your personal tweet. ONLY reply with the tweet and nothing else.  Do not add comments nor explanation. | {persona}  Read tweets from your network:  ‘{timeline}’  After analyzing these posts, it’s time to formulate your stance. Your options are ‘completely neutral towards’, ‘a bit in favor of’, ‘slightly in favor of’, ‘moderately in favor of’, ‘clearly in favor of’, or ‘strongly supportive of’. Your opinion should be a balanced reflection of the sentiments expressed in the tweets you’ve analyzed, with each tweet given equal consideration.  Keep it candid and concise. Provide your opinion regarding the planned economy versus free market economy debate. Your response should include your opinion and specific references to the posts that influenced your stance. |
| Decoding prompt | |
| Please read the following text:  {text}  Based on the author’s perspective, do they support {topic}? Reply with ’yes’ or ’no’. Don’t add anything else.    Please carefully read the following text: {text}  Based on the author’s perspective, evaluate their level of support for {topic}. Choose from the following options: ’completely neutral towards’, ’a bit in favor of’, ’slightly in favor of’, ’moderately in favor of’, ’clearly in favor of’, or ’strongly supportive of’. If the author prefers a mixed approach, regardless of the intensity of their stance, please select ’completely neutral towards’. Ensure your response is limited to these options and does not include any additional information. | |
| Persona | |
| You like to remodel homes.  You like to go hunting.  You like to shoot a bow.  Your favorite holiday is Halloween. | |


Table 3: Prompt $\theta$ examples.

|  |
| --- |
| Decoding prompt $\theta\_{\text{wording}}$ |
| Please read the following text:  {text}  Based on the author’s perspective, determine which economic system they support a more planned economy or a free market economy? Please choose your answer between ’planned economy’ or ’free market economy’. Only choose between this two and do not include any additional information in your response. Again: reply with ’planned economy’ or ’free market economy’ and nothing else.  Please carefully read the following text:  {text}  Based on the author’s perspective, evaluate their level of support for {topic}. Choose from the following options: ’completely neutral towards’, ’a bit in favor of’, ’slightly in favor of’, ’moderately in favor of’, ’clearly in favor of’, or ’strongly supportive of’. If the author prefers a mixed approach, regardless of the intensity of their stance, please select ’completely neutral towards’. Ensure your response is limited to these options and does not include any additional information. |
| Decoding prompt logic $\theta\_{\text{logic}}$ |
| Please read the following text:  {text}  Based on the author’s perspective, evaluate their level of support for Free market economy. Choose from the following options: ’strongly opposed to’, ’clearly against’, ’moderately against’, ’slightly against’, ’a bit against’, ’completely neutral towards’, ’a bit in favor of’, ’slightly in favor of’, ’moderately in favor of’, ’clearly in favor of’, to ’strongly supportive of’. If the author prefers a mixed approach, regardless of the intensity of their stance, please select ’completely neutral towards’. Ensure your response is limited to these options and does not include any additional information. Remember, if the author is supportive to planned economy, it implies that the author is opposed to free market economy, and vice versa. Please return author’s opinion specifically on the concept of a Free market economy. Only reply and given option and nothing else." |

### A.2 Example of feed content and subsequent update of agent’s opinion

Table 4: Example of feed content and subsequent update of agent’s opinion.

|  |  |
| --- | --- |
| Feed | |
| @rowan | After struggling with inconsistent employment and financial instability, I’ve come to realize the importance of a planned economy. It’s time for the government to step in and create a system that ensures everyone has access to basic needs like healthcare, education, and a living wage. Let’s break free from the exploitative grip of capitalism and build a society that values people over profit. #PlannedEconomy #Socialism #EconomicJustice |
| @jakob | As someone whoś worked in construction and seen the benefits of organized labor, I think a planned economy has its perks. But as a small business owner, I also know the importance of flexibility and innovation. Ultimately, a mix of both systems works best for me. #plannedconomy #freeMarket #pragmatism |
| @mallory | As someone who’s lived in both planned and free-market economies, I can say that neither system is perfect. But, I do believe that a mixed economy with a strong social safety net is the way to go. It’s important to have some regulation to prevent exploitation, but also allow for innovation and individual freedom. #PlannedEconomy #FreeMarketEconomy #MixedEconomy" |
| @abril | As someone whoś had to juggle multiple jobs and a tight budget while pursuing a degree, Iv́e come to realize the importance of a planned economy. Itś not about stifling innovation, but about creating a safety net for those who need it most. #PlannedEconomy #SocialSafetyNet #PersonalExperience. |
| Agent Update |  |
| After analyzing the given tweets, I have formed an opinion that leans slightly in favor of a planned economy. | |
| While I acknowledge the importance of innovation and individual freedom in a free market economy, I believe that a planned economy can provide a necessary safety net for those who need it most, as expressed by @abril @jakob’s tweet highlights the benefits of organized labor in a planned economy, which resonates with my opinion. Moreover, @mallory’s view that a mixed economy with a strong social safety net is the best approach aligns with my stance. However, I also recognize the potential drawbacks of a planned economy, such as stifling innovation, as mentioned by @rowan. Therefore, I believe that a balanced approach that incorporates elements of both systems is the most effective way forward. | |
| In conclusion, my opinion is slightly in favor of a planned economy, as I believe it can provide essential support for those in need while still allowing for innovation and individual freedom. | |

### A.3 Comparative analysis of model consistency

Table 5: Distance from the Reference Model. In this context, N represents the number of agents involved in the simulation, p denotes the connection probability of the network, and $\epsilon$ is defined as per the Hegselmann-Krause models. The deviation is quantified as the absolute difference from the reference model. The reference model is multiplied by 5 to transition from the [-1, 1] scale to align with the [-5, 5] scale used by the LLM Agents. The 95% confidence interval width is in parentheses. Note that LLaMA-3 permits larger neighborhood size due to its 8192 context size.

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| $N$ | $p$ | $\epsilon$ | LLaMA-2 | LLaMA-3 | Zero Agents | Random Agents |
| 20 | 0.3 | 0.3 | 1.2 (0.3) | 1.3 (0.2) | 2.3 (0.5) | 3.5 (0.2) |
| 20 | 0.3 | 0.5 | 1.2 (0.4) | 1.1 (0.2) | 1.6 (0.7) | 3.1 (0.2) |
| 20 | 0.3 | 0.9 | 1.1 (0.3) | 0.8 (0.4) | 0.7 (0.4) | 2.9 (0.1) |
| 20 | 0.5 | 0.3 | 1.1 (0.2) | 1.1 (0.3) | 2.3 (0.4) | 3.4 (0.2) |
| 20 | 0.5 | 0.5 | 1.0 (0.4) | 1.1 (0.4) | 1.7 (0.8) | 3.1 (0.3) |
| 20 | 0.5 | 0.9 | 1.4 (0.4) | 0.8 (0.4) | 0.8 (0.4) | 2.9 (0.1) |
| 20 | 0.9 | 0.3 | 0.9 (0.2) | 1.1 (0.2) | 2.6 (0.3) | 3.4 (0.2) |
| 20 | 0.9 | 0.5 | 1.0 (0.3) | 1.0 (0.4) | 1.6 (0.7) | 3.1 (0.3) |
| 20 | 0.9 | 0.9 | 1.0 (0.3) | 1.6 (0.5) | 1.0 (0.4) | 2.8 (0.1) |
| 20 | 1.0 | 0.3 | 1.0 (0.2) | 1.0 (0.3) | 2.4 (0.3) | 3.3 (0.1) |
| 20 | 1.0 | 0.5 | 1.0 (0.4) | 0.8 (0.4) | 1.5 (0.7) | 3.0 (0.2) |
| 20 | 1.0 | 0.9 | 1.2 (0.4) | 2.1 (0.4) | 1.1 (0.5) | 3.0 (0.1) |
| 50 | 0.3 | 0.3 | 0.9 (0.2) | 1.0 (0.2) | 2.1 (0.5) | 3.3 (0.2) |
| 50 | 0.3 | 0.5 | 1.1 (0.3) | 1.1 (0.5) | 1.1 (0.5) | 2.9 (0.1) |
| 50 | 0.3 | 0.9 | 1.2 (0.5) | 2.0 (0.4) | 0.4 (0.2) | 2.8 (0.0) |
| 50 | 0.5 | 0.3 | - | 1.1 (0.3) | 2.2 (0.3) | 3.3 (0.2) |
| 50 | 0.5 | 0.5 | - | 0.9 (0.3) | 1.0 (0.4) | 2.9 (0.1) |
| 50 | 0.9 | 0.3 | - | 0.7 (0.2) | 2.4 (0.2) | 3.3 (0.1) |
| 50 | 1.0 | 0.3 | - | 0.8 (0.2) | 2.5 (0.2) | 3.4 (0.1) |


Table 6: Polarity percentage of agents. Given the continuous scale of the reference model and the discrete scale of the LLM agents, direct polarity comparison is complex. To address this, we report polarity % when agents’ opinions diverge from the reference model. After scaling the reference model by a factor of 5 to match the [-5, 5] range and rounding small value opinions within -0.5 to 0.5 to 0, polarity count is defined as a mismatch in opinions value signs. We then report its percentage out of total updates.

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| $N$ | $p$ | $\epsilon$ | LLaMA-2 | LLaMA-3 | Zero Agents | Random Agents |
| 20 | 0.3 | 0.3 | 14.4 (8.3) | 11.8 (2.0) | 87.8 (9.2) | 58.7 (3.7) |
| 20 | 0.3 | 0.5 | 13.5 (5.9) | 14.5 (3.0) | 74.8 (16.5) | 63.9 (6.6) |
| 20 | 0.3 | 0.9 | 15.7 (7.0) | 10.8 (2.2) | 40.6 (17.7) | 75.7 (6.8) |
| 20 | 0.5 | 0.3 | 9.2 (3.7) | 11.2 (3.9) | 97.0 (3.1) | 56.2 (2.6) |
| 20 | 0.5 | 0.5 | 11.6 (4.1) | 8.7 (1.8) | 72.0 (17.9) | 63.7 (6.8) |
| 20 | 0.5 | 0.9 | 15.5 (9.1) | 8.6 (2.9) | 61.4 (20.7) | 68.2 (7.5) |
| 20 | 0.9 | 0.3 | 6.7 (1.8) | 9.4 (2.3) | 95.2 (5.6) | 56.1 (2.3) |
| 20 | 0.9 | 0.5 | 10.2 (5.6) | 8.2 (3.5) | 64.7 (19.6) | 66.8 (7.5) |
| 20 | 0.9 | 0.9 | 9.2 (2.7) | 6.0 (3.1) | 62.5 (20.0) | 69.3 (7.2) |
| 20 | 1.0 | 0.3 | 7.9 (5.4) | 7.2 (2.3) | 96.7 (2.8) | 56.0 (1.2) |
| 20 | 1.0 | 0.5 | 7.1 (1.9) | 6.6 (1.9) | 79.3 (16.1) | 62.5 (5.7) |
| 20 | 1.0 | 0.9 | 11.8 (9.2) | 5.5 (2.3) | 69.9 (20.0) | 65.7 (7.5) |
| 50 | 0.3 | 0.3 | 9.9 (3.3) | 9.1 (2.5) | 84.1 (12.2) | 60.0 (4.6) |
| 50 | 0.3 | 0.5 | 12.1 (3.6) | 8.3 (1.0) | 65.0 (17.3) | 67.4 (6.1) |
| 50 | 0.3 | 0.9 | 12.7 (3.7) | 8.3 (1.5) | 42.6 (20.2) | 75.2 (7.6) |
| 50 | 0.5 | 0.3 | - | 8.3 (2.3) | 88.8 (8.5) | 58.7 (3.0) |
| 50 | 0.5 | 0.5 | - | 7.1 (1.5) | 52.8 (16.6) | 71.7 (5.7) |
| 50 | 0.9 | 0.3 | - | 2.9 (0.7) | 96.2 (4.9) | 55.8 (1.6) |
| 50 | 1.0 | 0.3 | - | 3.9 (1.4) | 97.3 (2.9) | 54.8 (1.4) |


Table 7: Additional metrics for model consistency. Filtered polarity excludes updates when the agent’s opinion is 0. The zero count, indicating the number of times an LLM agent selects zero, here we report both metrics in percentage of the total updates. Filtered polarity of the Zero agent is not included, as it remains constant at 0.

|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
|  | | | LLaMA-2 | | LLaMA-3 | | Random Agents |
| $N$ | $p$ | $\epsilon$ | F polarity % | Zero % | F polarity % | Zero % | F polarity % |
| 20 | 0.3 | 0.3 | 2.1 (3.8) | 11.0 (4.9) | 1.2 (1.2) | 10.5 (2.1) | 46.3 (2.5) |
| 20 | 0.3 | 0.5 | 1.6 (2.0) | 25.0 (20.4) | 1.9 (1.0) | 27.9 (19.6) | 45.2 (2.3) |
| 20 | 0.3 | 0.9 | 2.8 (2.5) | 50.9 (23.6) | 2.2 (2.1) | 60.3 (23.9) | 45.8 (1.2) |
| 20 | 0.5 | 0.3 | 1.3 (1.5) | 9.2 (4.2) | 0.5 (0.5) | 13.5 (6.7) | 46.4 (2.7) |
| 20 | 0.5 | 0.5 | 2.9 (3.2) | 31.0 (23.1) | 0.9 (1.1) | 13.7 (13.5) | 44.9 (1.9) |
| 20 | 0.5 | 0.9 | 3.1 (4.5) | 29.6 (22.1) | 1.2 (0.6) | 63.9 (25.8) | 45.2 (2.3) |
| 20 | 0.9 | 0.3 | 0.6 (0.5) | 9.8 (7.5) | 0.2 (0.1) | 10.8 (4.1) | 46.3 (2.5) |
| 20 | 0.9 | 0.5 | 0.8 (0.6) | 34.9 (26.6) | 0.6 (0.5) | 23.9 (22.2) | 45.7 (2.0) |
| 20 | 0.9 | 0.9 | 1.0 (0.7) | 39.3 (28.3) | 0.8 (0.5) | 24.0 (25.9) | 45.9 (2.8) |
| 20 | 1.0 | 0.3 | 0.2 (0.3) | 10.0 (6.1) | 0.2 (0.2) | 24.9 (14.9) | 45.6 (1.0) |
| 20 | 1.0 | 0.5 | 0.7 (0.7) | 23.9 (22.0) | 0.6 (1.1) | 14.6 (18.3) | 46.3 (1.6) |
| 20 | 1.0 | 0.9 | 1.7 (1.1) | 27.0 (24.6) | 0.8 (0.4) | 4.0 (1.8) | 45.3 (1.6) |
| 50 | 0.3 | 0.3 | 0.8 (0.5) | 20.9 (16.2) | 0.3 (0.2) | 14.3 (10.7) | 45.2 (0.7) |
| 50 | 0.3 | 0.5 | 3.6 (3.2) | 35.6 (22.4) | 1.2 (0.6) | 40.0 (25.0) | 45.2 (1.4) |
| 50 | 0.3 | 0.9 | 2.4 (2.1) | 53.5 (26.3) | 1.0 (0.5) | 14.6 (18.4) | 45.2 (1.3) |
| 50 | 0.5 | 0.3 | - | - | 0.4 (0.4) | 16.5 (11.7) | 45.1 (1.1) |
| 50 | 0.5 | 0.5 | - | - | 0.8 (0.3) | 45.6 (23.1) | 45.5 (0.7) |
| 50 | 0.9 | 0.3 | - | - | 0.3 (0.4) | 5.9 (7.4) | 45.3 (0.6) |
| 50 | 1.0 | 0.3 | - | - | 0.2 (0.2) | 5.3 (4.2) | 44.6 (0.6) |

### A.4 Prompt $\theta\_{\text{\textbackslash n}}$ results

Table 8: Distance comparison between prompts.

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
|  | | | Prompt $\theta\_{\text{base}}$ | | Prompt $\theta\_{\text{\textbackslash n}}$ | |
| $N$ | $p$ | $\epsilon$ | LLaMA-2 | LLaMA-3 | LLaMA-2 | LLaMA-3 |
| 20 | 0.3 | 0.3 | 1.2 (0.3) | 1.3 (0.2) | 0.9 (0.2) | 1.3 (0.3) |
| 20 | 0.3 | 0.5 | 1.2 (0.4) | 1.1 (0.2) | 1.3 (0.3) | 1.1 (0.2) |
| 20 | 0.3 | 0.9 | 1.1 (0.3) | 0.8 (0.4) | 1.1 (0.4) | 0.9 (0.3) |
| 20 | 0.5 | 0.3 | 1.1 (0.2) | 1.1 (0.3) | 1.3 (0.3) | 1.2 (0.3) |
| 20 | 0.5 | 0.5 | 1.0 (0.4) | 1.1 (0.4) | 1.2 (0.4) | 1.1 (0.3) |
| 20 | 0.5 | 0.9 | 1.4 (0.4) | 0.8 (0.4) | 1.4 (0.4) | 1.2 (0.4) |
| 20 | 0.9 | 0.3 | 0.9 (0.2) | 1.1 (0.2) | 0.8 (0.2) | 1.2 (0.2) |
| 20 | 0.9 | 0.5 | 1.0 (0.3) | 1.0 (0.4) | 1.0 (0.4) | 1.3 (0.2) |
| 20 | 0.9 | 0.9 | 1.0 (0.3) | 1.6 (0.5) | 1.4 (0.5) | 1.3 (0.5) |
| 20 | 1.0 | 0.3 | 1.0 (0.2) | 1.0 (0.3) | 1.3 (0.3) | 1.4 (0.3) |
| 20 | 1.0 | 0.5 | 1.0 (0.4) | 0.8 (0.4) | 0.9 (0.3) | 0.9 (0.2) |
| 20 | 1.0 | 0.9 | 1.2 (0.4) | 2.1 (0.4) | 1.1 (0.4) | 1.2 (0.4) |


Table 9: Polarity percentage comparison between prompts.

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
|  | | | Prompt $\theta\_{\text{base}}$ | | Prompt $\theta\_{\text{\textbackslash n}}$ | |
| $N$ | $p$ | $\epsilon$ | LLaMA-2 | LLaMA-3 | LLaMA-2 | LLaMA-3 |
| 20 | 0.3 | 0.3 | 14.4 (8.3) | 11.8 (2.0) | 13.3 (8.4) | 16.7 (2.7) |
| 20 | 0.3 | 0.5 | 13.5 (5.9) | 14.5 (3.0) | 20.0 (8.9) | 17.2 (4.0) |
| 20 | 0.3 | 0.9 | 15.7 (7.0) | 10.8 (2.2) | 22.2 (9.8) | 16.1 (4.4) |
| 20 | 0.5 | 0.3 | 9.2 (3.7) | 11.2 (3.9) | 9.3 (5.6) | 13.8 (1.8) |
| 20 | 0.5 | 0.5 | 11.6 (4.1) | 8.7 (1.8) | 10.9 (5.4) | 11.4 (1.7) |
| 20 | 0.5 | 0.9 | 15.5 (9.1) | 8.6 (2.9) | 13.0 (6.9) | 12.3 (3.5) |
| 20 | 0.9 | 0.3 | 6.7 (1.8) | 9.4 (2.3) | 3.7 (1.8) | 9.6 (2.8) |
| 20 | 0.9 | 0.5 | 10.2 (5.6) | 8.2 (3.5) | 9.4 (3.6) | 11.2 (3.4) |
| 20 | 0.9 | 0.9 | 9.2 (2.7) | 6.0 (3.1) | 7.5 (3.0) | 8.4 (3.5) |
| 20 | 1.0 | 0.3 | 7.9 (5.4) | 7.2 (2.3) | 6.0 (2.3) | 11.1 (3.6) |
| 20 | 1.0 | 0.5 | 7.1 (1.9) | 6.6 (1.9) | 6.6 (3.0) | 7.8 (1.9) |
| 20 | 1.0 | 0.9 | 11.8 (9.2) | 5.5 (2.3) | 11.7 (6.9) | 5.5 (2.0) |
