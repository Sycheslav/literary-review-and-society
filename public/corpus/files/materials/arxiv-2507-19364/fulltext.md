---
id: arxiv-2507-19364-text
type: material
title: 'From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social
  Simulation'
work_id: arxiv-2507-19364
source_url: https://arxiv.org/html/2507.19364v4
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять
  с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.
language: original
sha256_text: c4a81499cb863578fc49e846b87d6e12682758a16748dd7961a5f379f6e7e400
---

> Источник: [https://arxiv.org/html/2507.19364v4](https://arxiv.org/html/2507.19364v4). Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.

# From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social SimulationThanks: This manuscript has been submitted for peer review to Frontiers in Artificial Intelligence.

Patrick Taillandier
Affiliation: UR MIAT, University of Toulouse, INRAE, Castanet-Tolosan, France
  
Jean Daniel Zucker
Affiliation: UMI UMMISCO, IRD, Sorbonne University, Bondy, France
  
Arnaud Grignard
Affiliation: UMI UMMISCO, IRD, Sorbonne University, Bondy, France
  
Benoit Gaudou
Affiliation: UMR IRIT, University Toulouse Capitole, Toulouse, France
  
Nghi Quang Huynh
Affiliation: CICT, Can Tho University, Can Tho, Vietnam
  
Haojia Kong
Affiliation: UR MIAT, University of Toulouse, INRAE, Castanet-Tolosan, France
  
Alexis Drogoul
Affiliation: UMI UMMISCO, IRD, Sorbonne University, Bondy, France
Affiliation: IJL ACROSS, IRD, University of Thuyloi, Hanoi, Vietnam

###### Abstract

The integration of Large Language Models (LLMs) into social simulation has generated considerable enthusiasm, but also raises substantial methodological and epistemological challenges. This critical review examines the use of LLMs as cognitive or decision-making components of simulated agents from a computational social science perspective. Rather than treating the psychological evaluation of LLMs as separate from simulation mechanics, we argue that their behavioral and epistemic limitations can become systemic vulnerabilities when scaled to multi-agent societies. We first map the rapidly evolving landscape of LLM-driven platforms, ranging from small narrative sandboxes to population-scale and spatially structured simulations. We then develop a unified critical framework for analyzing the Micro-to-Macro Validity Gap: the propagation, nonlinear amplification, or convergent contraction of micro-level limitations—including hallucinations, stochastic inconsistency, representational biases, and alignment effects—into agent-level distortions (such as average persona convergence) and macro-level risks (such as artificial consensus and behavioral homogenization), while exposing evaluators to epistemic vulnerabilities such as the Fluency Fallacy and automation bias. We identify contexts in which LLM-based agents offer genuine operational value, including serious games, participatory environments, and exploratory modeling, while distinguishing these uses from confirmatory research with unconstrained models and precise social forecasting. Finally, we examine theory-driven hybrid architectures that embed LLMs within explicit, mechanistic, and reproducible Agent-Based modeling (ABM) frameworks. We argue that such architectures offer a promising but not sufficient path toward improving epistemic control: their validity depends on multi-level evaluation of environmental dynamics, individual behavior, cross-level interactions, and aggregate outcomes, and they remain vulnerable to the risk of physics washing.

keywords: Large Language Models, Social Simulation, Agent-Based Modelling, Human behaviour modelling, Epistemology, Computational Social Science

## 1 Introduction

Large Language Models (LLMs) have emerged as a transformative class of deep learning architectures capable of generating human-like text across a wide range of domains. Built upon the transformer architecture, which employs parallelized attention mechanisms rather than sequential processing, these models are pre-trained on massive corpora comprising web data, encyclopedic content, and code repositories ([Vaswani et al. 2017](https://arxiv.org/html/2507.19364v4#bib.bib65); [Devlin et al. 2019](https://arxiv.org/html/2507.19364v4#bib.bib64); [Brown et al. 2020](https://arxiv.org/html/2507.19364v4#bib.bib63)). Through unsupervised or self-supervised learning, LLMs acquire syntactic, semantic, and pragmatic language competencies, enabling them to perform a broad array of downstream tasks such as question answering, summarization, translation, and code generation ([Wang et al. 2024b](https://arxiv.org/html/2507.19364v4#bib.bib1)).

Importantly, the magnitude of these training corpora means that LLMs have effectively absorbed an immense statistical imprint of human language use. However, this imprint is far from universally representative; from the outset, the training data exhibits profound structural imbalances, meaning that certain languages and cultures—predominantly Western and English-speaking—are significantly overrepresented compared to others. This goes far beyond learning grammar or syntax: LLMs encode traces of how people reason, argue, empathize, hesitate, and make decisions — all embedded in the linguistic fabric of their training data. Subsequently, these models are fine-tuned via instruction tuning, a supervised process in which models learn to follow natural language commands across a wide range of tasks. This is typically achieved using curated instruction datasets ([Sanh et al. 2021](https://arxiv.org/html/2507.19364v4#bib.bib80); [Wei et al. 2021](https://arxiv.org/html/2507.19364v4#bib.bib78)), sometimes augmented with human feedback to better align model outputs with user intent ([Ouyang et al. 2022](https://arxiv.org/html/2507.19364v4#bib.bib79)).

Given this capability to emulate human-like reasoning patterns, LLMs have naturally attracted significant attention within the Agent-Based modeling (ABM) community. However, as their integration into this field accelerates, it is crucial to distinguish between two emerging uses of Large Language Models in computational social science. The first involves using LLMs as coding assistants to facilitate the technical implementation of simulation models (e.g., generating NetLogo or GAMA code). The second, which is the sole focus of this paper, is the use of LLMs as the internal decision-making architecture of the agents themselves—often termed Generative Agents ([Park et al. 2023](https://arxiv.org/html/2507.19364v4#bib.bib31)). We examine how LLMs can replace or augment traditional rule-based cognition to simulate human-like decision-making, social interaction, and reasoning, rather than how they assist in the software engineering process.

Focusing specifically on this role as an internal decision engine—defined here as the computational mechanism that processes perceptions, maintains memory states, and formulates goal-directed actions, tasks traditionally governed by symbolic architectures such as BDI (Belief–Desire–Intention) or SOAR—a critical area of investigation concerns whether LLM outputs can authentically replicate human behavior.

One classical benchmark in this domain is the Turing Test, proposed by Alan Turing in 1950 as the imitation game, which evaluates whether a machine can produce conversational behavior indistinguishable from that of a human interlocutor ([Jones and Bergen 2026](https://arxiv.org/html/2507.19364v4#bib.bib17)). Recent empirical findings suggest that state-of-the-art LLMs, notably Llama-3.1 and GPT-4.5, have demonstrated convincing performance on a three-party version of this test. In these evaluations, Llama-3.1 was identified as the human participant in 56% of cases, compared with 73% for GPT-4.5 ([Jones and Bergen 2026](https://arxiv.org/html/2507.19364v4#bib.bib17)). By applying a standardized three-party design, these results mark a clear departure from classical conversational architectures and rule-based chatbots, which had historically only achieved partial success under less constrained, two-party conditions. These findings underscore the impressive ability of modern LLMs to adopt complex linguistic styles and behavioral nuances, particularly when guided by carefully crafted persona prompts, a form of behavioral prompt engineering that remains a highly precise and non-trivial technique requiring expert design and task sensitivity.

The apparent success of LLMs in the Turing Test has naturally prompted speculation about their suitability for simulating human agents within computational social systems ([Park et al. 2023](https://arxiv.org/html/2507.19364v4#bib.bib31); [Anthis et al. 2025](https://arxiv.org/html/2507.19364v4#bib.bib26); [Kirkeby-Hinrup and Stenseke 2025](https://arxiv.org/html/2507.19364v4#bib.bib62)). However, the capacity of LLMs to produce believable human-like dialogue does not establish construct validity or mechanistic fidelity as a model of human decision-making. Rather, their performance reflects statistical pattern recognition, i.e., the capacity to reproduce linguistic structures without representing the causal cognitive states of human decision-makers ([Jones and Bergen 2026](https://arxiv.org/html/2507.19364v4#bib.bib17)). Within the philosophy of mind, [Dennett (1987)](https://arxiv.org/html/2507.19364v4#bib.bib2) characterized the intentional stance as an operational, predictive strategy wherein an observer treats an entity as an intentional agent governed by beliefs and desires, without necessitating that the underlying computational machinery instantiates those internal mental states. While this stance is pragmatic for human-computer interaction, scientific agent-based modeling demands structural and construct validity: mistaking functional behavioral plausibility for mechanistic fidelity risks producing simulations that fail under counterfactual conditions. This distinction between functional imitation and authentic comprehension is particularly salient for social simulation. If LLMs merely replicate surface-level features of human behavior, their utility for generating novel insights into social processes, rather than reproducing known patterns, is fundamentally limited. Moreover, their use as proxies for human agents in scientific studies raises questions about external validity, representational fidelity, and psychological realism. These concerns constitute a central theme of this paper and inform our critical assessment of LLMs as generative agents in artificial societies.

Epistemological Stance: A Stratified Typology of Valid Uses. To avoid ambivalence between categorical critique and uncritical adoption, this review articulates an explicit, four-tier epistemological boundary governing LLM deployment in social simulation:

1. 1.

   Interactive Environments and Serious Games (High Operational Value): Generative agents excel where narrative plausibility, contextual engagement, and qualitative role-playing take precedence over mechanistic empirical correspondence, provided factual hallucination guardrails are maintained.
2. 2.

   Exploratory modeling (Conditionally Defensible): LLMs function legitimately as qualitative reasoning pumps to explore generative assumptions and formulate candidate hypotheses, but only if simulations meet minimum validity criteria (qualitative pattern stability across seeds, invariance under prompt paraphrasing, cross-model portability, and empirical decoupling/falsifiability).
3. 3.

   Explanatory and Confirmatory Research (Restricted to Theory-Driven Hybrids): Investigating causal mechanisms requires hybrid architectures that embed generative components as delimited subroutines within mechanistic, inspectable ABM engines. Epistemic validity here demands multi-level empirical falsification and demonstrable explanatory gain over minimal, non-generative heuristics to preclude physics washing.
4. 4.

   Precise Quantitative Point-Prediction (Methodologically Unsupported): Direct empirical forecasting (e.g., fine-grained electoral prediction or precise policy impact estimation) via unconstrained next-token prediction architectures currently exceeds the methodological guarantees of generative models due to prompt sensitivity, stochastic drift, and latent distributional skews.

Unlike previous surveys ([Gao et al. 2024](https://arxiv.org/html/2507.19364v4#bib.bib42)) and early opportunity mappings ([Gürcan 2024](https://arxiv.org/html/2507.19364v4#bib.bib43)), which primarily organize the technical possibilities and application areas of LLM-augmented simulation, this review focuses on how limitations observed at the level of individual LLM outputs can affect the validity of multi-agent simulations. We argue that the psychological and linguistic evaluation of LLMs cannot be considered independently of the simulation mechanisms through which their outputs are transformed into actions, interactions, and aggregate dynamics.

The review proceeds as follows. Section 2 describes the literature-selection strategy. Section 3 maps the emerging landscape of LLM-based social simulation platforms and identifies recurring architectural patterns, including memory, reflection, planning, communication, and population specialization. Section 4 develops a unified critical framework for the Micro-to-Macro Validity Gap. It examines how hallucinations, stochastic inconsistency, representational biases, alignment effects, and computational constraints may be amplified at the population level, producing risks such as the Fluency Fallacy, convergence toward an average persona, automation bias, and weak longitudinal reproducibility. Section 4 also distinguishes application contexts in which LLM-based agents may provide operational value—such as serious games, participatory environments, exploratory modeling, and narrative interpretation—from applications requiring stronger explanatory or predictive validity. Importantly, we clarify that for off-the-shelf, unconstrained foundation models, confirmatory scientific inference and precise quantitative point-predictions (such as electoral forecasting) currently exceed the methodological guarantees of generative architectures. While hybrid frameworks offer essential guardrails, hybridization serves to bound and contain these epistemic uncertainties within explicit state spaces rather than eliminating them entirely. Determining whether this boundary reflects an intrinsic limitation of next-token prediction or a contingent constraint of current models remains an open empirical question that systematic simulation benchmarks must resolve.

Finally, Section 5 examines theory-driven hybrid architectures as a promising, but not sufficient, methodological direction. It discusses alternative coupling modes, including LLM-as-Subroutine and LLM-as-Policy, as well as the integration of behavioral theories and smaller language models into explicit ABM frameworks. We argue that hybridization can improve environmental grounding, computational control, and the explicitness of behavioral assumptions, but does not by itself establish cognitive or social validity. Hybrid systems therefore require multi-level validation of environmental dynamics, individual decisions, interactions between model components, and aggregate outcomes. The section concludes by identifying physics washing as a central open challenge: the possibility that a formally rigorous simulation environment may lend unwarranted credibility to an insufficiently validated behavioral layer.

## 2 Methodology for Literature Selection

To structure this critical review, literature was assembled through a two-stage screening procedure combining a structured database search with targeted exploratory retrieval.

First, a structured query was executed in Scopus on 21 August 2026 restricted to records from 2023 to 2026 using the Boolean expression:

> TITLE-ABS-KEY (("Large Language Model\*" OR "Generative Agent\*")
>   
> AND ("Social Simulation" OR "Agent-Based"))

This search retrieved 1,266 records (comprising 738 conference papers, 388 journal articles, 55 reviews, and 85 other contributions). Removal of duplicate entries yielded 1,258 unique Scopus records. Second, given the rapid growth of preprint literature and cross-disciplinary intersections with cognitive psychology, an exploratory discovery step was conducted using Gemini 3 Pro (November 2025 release) alongside continuous monitoring of preprint repositories (arXiv, PsyArXiv). This channel served strictly as an index discovery heuristic—not as an evidential source—and surfaced 64 candidate contributions. All candidate items suggested by exploratory retrieval were independently verified against publisher repositories; unverified citations were excluded.

The combined pool of 1,322 records was evaluated against explicit inclusion and exclusion criteria. Studies were included if they: (i) employed LLMs as internal cognitive, deliberative, or decision-making engines for simulated agents rather than auxiliary tools; (ii) investigated social interactions, collective dynamics, or population-level emergence; and (iii) presented verifiable implementations or empirical evaluations. Conversely, studies were excluded if: (i) LLMs were utilized solely as programming or code-generation assistants (e.g., generating NetLogo or GAMA code); (ii) models addressed purely technical multi-agent optimization without behavioral, social, or cognitive depth; or (iii) simulation mechanics were restricted to static question-answering without dynamic agent interactions.

During the title and abstract screening phase, 1,185 records were excluded (1,127 from Scopus and 58 from exploratory retrieval). The remaining 137 publications underwent full-text assessment, resulting in the exclusion of 63 additional Scopus records applying the aforementioned criteria (specifically: purely technical software focus, absence of interactive multi-agent dynamics, or lack of behavioral decision depth). This yielded an analyzed corpus of 74 contemporary studies (2023–2026), comprising 68 empirical and architectural implementations identified via Scopus alongside 6 verified preprint contributions surfaced through exploratory monitoring. This core corpus is complemented by 20 foundational references that provide theoretical and epistemological grounding in agent-based modeling, cognitive architectures, and complex systems (yielding 94 references cited in total).

Screening and qualitative categorization were conducted by the lead investigator following a predetermined, structured protocol, with borderline eligibility cases resolved through consensus discussion among the co-authors. However, several methodological limitations must be acknowledged: (i) title/abstract and full-text screening was performed by a single primary investigator without formal inter-rater reliability metrics (such as Cohen’s $\kappa$); (ii) while the core Boolean search in Scopus was designed to capture foundational agent-based and generative simulation contributions, it represents a single curated database query; and (iii) the supplementary exploratory discovery step conducted via Gemini 3 Pro serves as an informal heuristic that is not fully reproducible across time due to model updates and stochastic generation. To ensure research auditability despite these inherent constraints, the complete retrieval queries, date parameters, and operational exclusion criteria were documented and held invariant across screening stages.

## 3 The State of LLM-Based Social Simulation: A Transversal Analysis

The application of LLMs to social simulation builds upon a long trajectory of integrating machine learning into multi-agent systems ([Drogoul and Zucker 1998](https://arxiv.org/html/2507.19364v4#bib.bib16)). However, rather than viewing contemporary platforms merely as independent software packages, an epistemological assessment requires analyzing them through their underlying architectural choices and the systemic tensions they introduce. This transversal perspective makes it possible to compare systems that differ substantially in scale and domain but rely on recurring design choices for memory, planning, interaction, population synthesis, and validation.

To map this landscape, Table [1](https://arxiv.org/html/2507.19364v4#S3.T1 "Table 1 ‣ 3 The State of LLM-Based Social Simulation: A Transversal Analysis ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation") provides a comparative synthesis of prominent platforms across scale, application domain, empirical validation strategy, peer-review publication status, and identified methodological vulnerabilities. Beyond these platform-level implementations, current research reveals recurrent architectural strategies that attempt to operationalize social agency through language models. The following analysis describes these strategies and the trade-offs they create between contextual flexibility, behavioral traceability, environmental grounding, computational tractability, and empirical validation. These trade-offs motivate the micro-to-macro validity gap examined in Section [4](https://arxiv.org/html/2507.19364v4#S4 "4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").

Table 1: Comparison of state-of-the-art LLM-based Social Simulation Platforms, detailing scale, target domain, validation methodology, publication status, and core methodological vulnerabilities.

| Platform | Scale | Domain | Validation Strategy | Status | Identified Methodological Vulnerabilities |
| --- | --- | --- | --- | --- | --- |
| Generative Agents ([Park et al. 2023](https://arxiv.org/html/2507.19364v4#bib.bib31)) | 25 agents | General interaction | Face validity, emergent coherence | Peer-reviewed Conference (ACM UIST) | Vulnerable to evaluator projection (Fluency Fallacy); lacks empirical benchmark comparison, counterfactual testing, or bounded ground truth. |
| AgentSociety ([Piao et al. 2025](https://arxiv.org/html/2507.19364v4#bib.bib32)) | 10,000+ | Urban & social dynamics | Survey matching (GSS, WVS) | Preprint (arXiv:2502.08691) | Aggregate statistical convergence relies on a shared base model prior, risking systemic sycophancy and unverified micro-level decision validity. |
| GenSim ([Tang et al. 2025](https://arxiv.org/html/2507.19364v4#bib.bib34)) | Tens of thousands | General social simulation | behavioral replication | Peer-reviewed Conference (NAACL Demo) | Prone to long-horizon memory degradation, context truncation drift, and high inference costs that preclude extensive parameter sweeps. |
| $S^{3}$ ([Gao et al. 2025](https://arxiv.org/html/2507.19364v4#bib.bib89)) | Variable | Social networks | Population empirical data | Preprint (arXiv:2307.14984) | Purely linguistic state-transition loop: absence of ground-truth state conservation risks spurious belief propagation insulated from institutional friction. |
| AgentTorch ([Chopra et al. 2023](https://arxiv.org/html/2507.19364v4#bib.bib11)) | Millions | General (GPU-accelerated) | Statistical robustness | Peer-reviewed Workshop (ALOE) | Stationary distilled policies cannot adapt to feedback, risking frozen micro-rules that mask adaptation-driven macro-dynamics. |
| SocioVerse ([Zhang et al. 2025b](https://arxiv.org/html/2507.19364v4#bib.bib23)) | 10 million | Policy testing | Empirical distributions | Preprint (arXiv:2504.10157) | Profile-diversity illusion: demographic heterogeneity at initialization risks collapsing into generic normative behaviors during prolonged interaction. |
| NetLogo Toolchain ([Jimenez-Romero et al. 2025](https://arxiv.org/html/2507.19364v4#bib.bib59)) | Variable | Multi-agent ABM | Hybrid grounding | Peer-reviewed Journal (Front. Artif. Intell.) | Reactive spatial actuation lacks explicit deliberative cognitive architecture, risking ungrounded state drift in complex socio-institutional environments. |
| Land System Models ([Zeng et al. 2025](https://arxiv.org/html/2507.19364v4#bib.bib35)) | Regional | Environment | Scenario comparison | Peer-reviewed Journal (Earth Syst. Dynam.) | Potential equifinality: aggregate land-use patterns may align with observed trends despite uncertain institutional decision heuristics. |
| TrajLLM ([Ju et al. 2025](https://arxiv.org/html/2507.19364v4#bib.bib5)) | Scalable | Human trajectory | Trajectory comparisons | Peer-reviewed Companion (ACM WebConf) | Disconnect between discrete high-level textual goals and continuous spatial movement; vulnerable to spatial incoherence over long horizons. |
| Elicitron ([Ataei et al. 2025](https://arxiv.org/html/2507.19364v4#bib.bib6)) | Micro | Design engineering | Expert evaluation | Peer-reviewed Journal (ASME JCISE) | Rigid task prompting restricts generative freedom, confounding true emergent coordination with scripted task fulfillment. |

### 3.1 Platform Paradigms and the Scaling Trade-off

Current platforms instantiate three broad methodological paradigms, reflecting distinct compromises between narrative expressivity, demographic scale, and environmental fidelity:

1. 1.

   Narrative and Sandbox Paradigms: Foundational frameworks prioritize open-ended social interaction, character role-playing, and emergent storytelling. Generative Agents ([Park et al. 2023](https://arxiv.org/html/2507.19364v4#bib.bib31)), whose demonstration environment is commonly known as Smallville, instantiates twenty-five agents in a sandbox environment where they maintain daily routines, form relationships, retrieve memories, and generate plans. General-purpose environments such as GenSim ([Tang et al. 2025](https://arxiv.org/html/2507.19364v4#bib.bib34)) extend this orientation through modular abstractions for social routines, memory orchestration, scheduling, and large-scale interaction. These architectures offer rich qualitative interaction and face plausibility, but remain exposed to temporal inconsistency and memory-management challenges over extended runs, particularly when identity, long-term state, and spatial reasoning depend heavily on retrieved textual context rather than explicit simulation state.
2. 2.

   Population-Scale and Demographic Paradigms: A second family emphasizes demographic coverage, population synthesis, and large-scale behavioral mirroring. AgentSociety ([Piao et al. 2025](https://arxiv.org/html/2507.19364v4#bib.bib32)) simulates urban and social dynamics with more than 10,000 LLM-based agents, incorporating mobility, social interaction, and economic activity. SocioVerse ([Zhang et al. 2025b](https://arxiv.org/html/2507.19364v4#bib.bib23)) uses a pool of profiles associated with 10 million real-world users to construct a heterogeneous synthetic population to explore policy interventions. In social-network simulation, $S^{3}$ ([Gao et al. 2025](https://arxiv.org/html/2507.19364v4#bib.bib89)) models the propagation of information, attitudes, and emotions, while related work investigates opinion dynamics and polarization in networks of LLM-based agents ([Chuang et al. 2024a](https://arxiv.org/html/2507.19364v4#bib.bib27)). These approaches increase the scale and empirical diversity of initial conditions. However, demographic diversity in initialization does not by itself establish sustained behavioral diversity in the resulting simulation. Foundation-model priors and alignment procedures may still encourage convergence toward socially normative responses, a possibility that requires direct empirical evaluation rather than being inferred from the diversity of input profiles alone ([Wu et al. 2026](https://arxiv.org/html/2507.19364v4#bib.bib86); [La Cava and Tagarelli 2025](https://arxiv.org/html/2507.19364v4#bib.bib12)).
3. 3.

   Spatially Constrained and Scalable Paradigms: A third family prioritizes explicit environmental structure and computational tractability. GATSim ([Liu et al. 2026](https://arxiv.org/html/2507.19364v4#bib.bib52)) models urban mobility through agents that formulate daily travel plans under transportation-network constraints. MobiVerse ([Liu et al. 2025b](https://arxiv.org/html/2507.19364v4#bib.bib47)) combines LLMs with lightweight domain-specific generators to reduce the cost of city-scale mobility simulation. TrajLLM ([Ju et al. 2025](https://arxiv.org/html/2507.19364v4#bib.bib5)) combines continuous trajectory generation with discrete LLM reasoning, whereas LLM-AIDSim ([Zhang et al. 2025a](https://arxiv.org/html/2507.19364v4#bib.bib60)) applies LLM-based agents to influence diffusion within social networks. In specialized socio-technical settings, Elicitron ([Ataei et al. 2025](https://arxiv.org/html/2507.19364v4#bib.bib6)) models interactions involved in engineering design-requirement elicitation. Related work also integrates LLMs into established ABM platforms: a NetLogo toolchain connects prompt-driven agents to an explicit simulation environment ([Jimenez-Romero et al. 2025](https://arxiv.org/html/2507.19364v4#bib.bib59)), while land-system models explore LLM representations of institutional agency in human-environment systems ([Zeng et al. 2025](https://arxiv.org/html/2507.19364v4#bib.bib35)). These approaches increase environmental grounding and scalability, while often restricting the scope or autonomy of language-model-based decision-making.

### 3.2 Transversal Architecture Dimensions: Solutions and Structural Limits

Across these platforms, LLM-based agents are commonly implemented as separate model instances or sessions conditioned through prompt engineering. Their cognitive architecture typically combines memory, reflection or summarization, planning, and communication modules ([Park et al. 2023](https://arxiv.org/html/2507.19364v4#bib.bib31); [Wang et al. 2024a](https://arxiv.org/html/2507.19364v4#bib.bib20)). These modules are often implemented as chained or nested prompts, with external retrieval systems and orchestration layers providing persistent context and regulating agent interactions. Frameworks such as h-ABM ([Atchade et al. 2024](https://arxiv.org/html/2507.19364v4#bib.bib88)) make this decomposition explicit by proposing modular cognitive and emotional layers for integration within agent-based simulations.

#### 3.2.1 Memory Systems: Retrieval-Augmented Memory and Long-Horizon Consistency

To support episodic recall and long-term context, many generative-agent architectures use external memory stores, vector databases, and embedding-based retrieval pipelines ([Park et al. 2023](https://arxiv.org/html/2507.19364v4#bib.bib31); [Piao et al. 2025](https://arxiv.org/html/2507.19364v4#bib.bib32)). In these designs, agent observations and interactions are stored as textual traces; a subset of those traces is subsequently retrieved according to relevance, recency, or importance and inserted into the context used for reflection, planning, and action generation. Reflection modules may further summarize recent events, extract higher-level intentions, or prompt agents to generate inferences about the mental states of other agents.These mechanisms operationalize selected aspects of episodic and semantic memory and are sometimes explicitly related to multi-store memory models or theory-of-mind constructs ([Wang et al. 2024a](https://arxiv.org/html/2507.19364v4#bib.bib20); [Calderón et al. 2025](https://arxiv.org/html/2507.19364v4#bib.bib76)).

This modular organization resembles classical symbolic cognitive architectures, including SOAR ([Laird 2012](https://arxiv.org/html/2507.19364v4#bib.bib67)) and ACT-R ([Anderson et al. 2004](https://arxiv.org/html/2507.19364v4#bib.bib68)), which distinguish forms of knowledge and organize the relation between memory, goals, and action selection. However, semantic-similarity retrieval does not by itself encode causal relevance, role-specific priority, or durable commitments. Over extended simulations, the selective retrieval, summarization, and reinterpretation of stored traces can therefore complicate the maintenance of coherent identity, goals, and behavioral history.

#### 3.2.2 Action Planning: In-Context Reasoning and Reproducibility

Planning modules typically condition LLM outputs on agent-specific goals, environmental affordances, retrieved memories, and social context. In many systems, structured prompt templates or multi-step reasoning procedures are used to translate these inputs into action plans without specifying an explicit utility function or reward model ([Junprung 2023](https://arxiv.org/html/2507.19364v4#bib.bib77)). Other implementations combine LLMs with formal optimization or learning components. For example, LGC-MARL couples an LLM-based planner with graph-structured multi-agent reinforcement learning: the language model decomposes high-level instructions into executable subtasks and proposes collaborative strategies, whereas the reinforcement-learning component selects or optimizes final actions ([Jia et al. 2025](https://arxiv.org/html/2507.19364v4#bib.bib69)).

This design enables flexible, context-sensitive action generation, but decisions may remain sensitive to prompt formulation, retrieval context, sampling settings, and model version. Semantically similar situations can consequently yield materially different actions, complicating reproducibility, sensitivity analysis, and counterfactual evaluation.

#### 3.2.3 Agent Persona: Demographic Prompting and behavioral Diversity

behavioral diversity is commonly introduced through synthetic-population generation methods and agent-specific prompts. Agents may be initialized with demographic attributes, socioeconomic characteristics, beliefs, occupations, cultural backgrounds, or personality descriptors sampled from survey distributions or human belief networks ([Chapuis et al. 2022](https://arxiv.org/html/2507.19364v4#bib.bib7); [Chuang et al. 2024b](https://arxiv.org/html/2507.19364v4#bib.bib18)). Role-specific memory structures and specialized prompt templates may further differentiate communication styles, goals, and decision heuristics.

These techniques increase descriptive variation in agent inputs, but do not by themselves ensure sustained behavioral heterogeneity. Empirical evaluations suggest that models may revert toward generic or socially normative response patterns despite distinct persona prompts ([La Cava and Tagarelli 2025](https://arxiv.org/html/2507.19364v4#bib.bib12)). Conversely, stronger attempts to force distinctive roles can lead to exaggerated, stereotypical, or toxic caricatures rather than calibrated behavioral variation ([Nudo et al. 2026](https://arxiv.org/html/2507.19364v4#bib.bib40)). The challenge is therefore not only to initialize diverse profiles, but also to maintain and validate theoretically meaningful behavioral differences throughout simulation runs.

#### 3.2.4 Inter-Agent Communication: Natural Language and Information Propagation

Simulation time-stepping and inter-agent communication are typically regulated by an orchestration layer. Interaction may occur through direct messages, simulated surveys, public broadcasts, shared memory, or blackboard-style routines.
Platforms such as Generative Agents and AgentSociety commonly use orchestration layers that sequence perception, memory retrieval, reflection, planning, and action, whereas GenSim incorporates structured social routines and dynamic scheduling. At the software-architecture level, SALLMA separates operational processes, such as intention formation and task execution, from knowledge-level components including agent profiles, shared memory, and workflows ([Becattini et al. 2025](https://arxiv.org/html/2507.19364v4#bib.bib8)). Agents may also be connected to external tools, such as search systems, databases, and calculators, to augment particular deliberative steps ([Wang et al. 2024a](https://arxiv.org/html/2507.19364v4#bib.bib20)).

These mechanisms enable flexible social interaction, but also create channels through which hallucinated, misleading, or adversarial content may enter subsequent agent contexts and influence later decisions. In interconnected populations, such information can be retrieved, retransmitted, or incorporated into shared state, making the effects of local errors difficult to isolate and evaluate.

#### 3.2.5 Environmental Grounding: Generative Proposals and Feasibility Constraints

LLM-based agents typically express intentions and proposed actions in natural language, whereas an agent-based simulation must translate those proposals into state transitions within an explicit environment. In purely text-based architectures, the language model may therefore be responsible both for proposing an action and for implicitly representing whether the action is spatially, physically, institutionally, or economically feasible. Without an external mechanism that verifies preconditions and updates world state, agents may propose actions incompatible with available resources, network topology, environmental conditions, or scenario rules.

Several recent frameworks address this issue by coupling generative decision-making to explicit simulation environments. In mobility and evacuation applications, transportation networks, spatial accessibility, hazards, and resource constraints can determine which plans are executable ([Liu et al. 2026](https://arxiv.org/html/2507.19364v4#bib.bib52); [Yang et al. 2026](https://arxiv.org/html/2507.19364v4#bib.bib41)). In land-system modeling, LLM-based institutional agents are embedded within a land-use model whose environmental and economic dynamics constrain the consequences of proposed policy actions ([Zeng et al. 2025](https://arxiv.org/html/2507.19364v4#bib.bib35)). More generally, architectures such as Concordia distinguish between an agent’s language-mediated action proposal and an environmental component that interprets the proposal, checks its feasibility, and applies its consequences to the simulated world ([Vezhnevets et al. 2023](https://arxiv.org/html/2507.19364v4#bib.bib56)).

Environmental grounding can therefore improve the internal consistency of state transitions and make feasibility assumptions explicit. It does not, however, establish that the cognitive or social reasoning that produced a feasible action is psychologically valid. This distinction motivates the theory-driven hybrid architectures and multi-level validation requirements discussed in Section [5](https://arxiv.org/html/2507.19364v4#S5 "5 Towards Theory-Driven Hybrid Architectures ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").

#### 3.2.6 Model Adaptation and Computational Execution

Most LLM-based social simulations rely on frozen foundation models used through in-context learning and prompt engineering. Agent profiles, goals, instructions, retrieved memories, and scenario-specific constraints are supplied at inference time, often together with reflection loops and retrieval-augmented memory. Full parameter adaptation through supervised fine-tuning, preference optimization, or related methods remains less common in narrative simulation settings, partly because suitable behavioral data are limited and because adaptation introduces additional computational and methodological requirements. It is nevertheless used in targeted cognitive modeling to improve correspondence with experimental patterns of human behavior ([Binz et al. 2025](https://arxiv.org/html/2507.19364v4#bib.bib30)).

A separate challenge concerns execution cost. Repeated calls to a large language model can become expensive when many agents interact over long horizons. Scalable approaches may therefore reduce the frequency of online LLM calls, use lighter domain-specific generators, execute compact policy representations, or rely on smaller task-specific language models. Differentiable and GPU-accelerated ABM frameworks such as AgentTorch illustrate the broader value of lightweight policy execution at scale ([Chopra et al. 2023](https://arxiv.org/html/2507.19364v4#bib.bib11)). These choices improve tractability, but may alter the degree of contextual adaptation and behavioral variation available during a simulation run.

### 3.3 The Validation Landscape: From Face Validity to Multi-Level Evaluation

Validation remains a central methodological bottleneck for LLM-based social simulation because the field must move beyond plausible interaction toward evidence that agents, mechanisms, and aggregate outcomes correspond to the intended empirical or theoretical target ([Larooij and Törnberg 2025](https://arxiv.org/html/2507.19364v4#bib.bib51); [Adornetto et al. 2025](https://arxiv.org/html/2507.19364v4#bib.bib45)). Current practice combines empirical benchmarking, human judgment, statistical comparison, sensitivity analysis, and task-specific datasets, but these approaches remain only partially integrated.

#### 3.3.1 Empirical Validation and Benchmarking

Some platforms compare simulated outputs with observed social indicators, including survey-derived attitudinal distributions, economic behavior, voter turnout, or network-level diffusion patterns. For example, AgentSociety evaluates simulations against social indicators and survey instruments such as the General Social Survey and the World Values Survey ([Piao et al. 2025](https://arxiv.org/html/2507.19364v4#bib.bib32)). Other studies reproduce experimental paradigms, including public-goods games or rumor-propagation settings, and assess whether simulated outcomes correspond to established empirical regularities.

Such benchmarking provides useful external reference points, although agreement at the aggregate level does not by itself demonstrate that the model generates those patterns through valid individual-level mechanisms. This dilemma is well-established in the classical ABM literature under the rubric of equifinality: multiple distinct micro-level rule sets can generate macro-level patterns that are statistically indistinguishable. To address this challenge, agent-based modeling has historically relied on structural validation, multi-criteria calibration, and the Pattern-Oriented modeling (POM) framework ([Grimm et al. 2005](https://arxiv.org/html/2507.19364v4#bib.bib4)). POM mitigates equifinality by requiring an architecture to simultaneously reproduce multiple observed empirical patterns across distinct organization levels and spatio-temporal scales, thereby filtering out structurally inadequate behavioral sub-models.

However, the integration of LLMs introduces a qualitative departure from this classical framework. In conventional ABMs, candidate micro-mechanisms are formulated as explicit, inspectable equations or rule sets whose parameters can be constrained through sensitivity analysis and parameter-space rejection filtering. In LLM-driven agents, by contrast, the generative decision mechanism is parameterized within opaque, uninspectable foundation model weights conditioned by natural-language prompts. Consequently, equifinality is no longer merely a problem of parameter indeterminacy among explicit heuristics; it becomes an epistemic barrier where structurally flawed cognitive models can generate statistically plausible aggregate distributions while remaining insulated from direct mechanistic falsification.

#### 3.3.2 Human-in-the-Loop Evaluation

Expert judgment remains widely used to assess the believability, internal coherence, and sociological plausibility of agent behaviors. Structured expert protocols may improve inter-rater reliability, while crowdsourced evaluation can provide broader assessments of interaction realism or diversity. Human evaluators may also assess whether agents conditioned on survey-based profiles resemble the intended population ([Zhang et al. 2025b](https://arxiv.org/html/2507.19364v4#bib.bib23)). However, these methods are vulnerable to judgment biases, as linguistic fluency, assertiveness, and perceived authority can lead evaluators to overestimate factual or analytical quality ([Chen et al. 2024](https://arxiv.org/html/2507.19364v4#bib.bib19)).

#### 3.3.3 Robustness and Specialized Evaluation

Validation can also include exploratory model-behavior analysis, statistical correspondence tests, and sensitivity analysis. The latter examines the stability of results under variation in initial conditions, parameter values, random seeds, prompts, or other design choices. For long-horizon generative simulations, longitudinal consistency is particularly important: researchers must assess whether agents preserve relevant commitments and whether collective outcomes remain reproducible under small perturbations ([Wu et al. 2026](https://arxiv.org/html/2507.19364v4#bib.bib86)). Systems such as $S^{3}$ compare simulated information, attitude, and emotion propagation against patterns observed in social-network data ([Gao et al. 2025](https://arxiv.org/html/2507.19364v4#bib.bib89)).

#### 3.3.4 Data Sources and Comparative Benchmarks

Task-specific benchmarks complement simulation-level validation. SocialIQA evaluates commonsense social reasoning; CrowS-Pairs and Bias in Bios assess particular forms of social and demographic bias; and
the EPITOME battery evaluates a range of theory-of-mind tasks in humans and language models ([Sap et al. 2019](https://arxiv.org/html/2507.19364v4#bib.bib25); [Nangia et al. 2020](https://arxiv.org/html/2507.19364v4#bib.bib73); [De-Arteaga et al. 2019](https://arxiv.org/html/2507.19364v4#bib.bib74); [Karra et al. 2024](https://arxiv.org/html/2507.19364v4#bib.bib87)). Robustness benchmarks also test whether semantically equivalent inputs produce stable model responses ([Zhang et al. 2022](https://arxiv.org/html/2507.19364v4#bib.bib75)). These resources are informative for evaluating relevant capabilities and failure modes, but they generally assess isolated tasks rather than the long-horizon, interactive feedback processes characteristic of multi-agent social simulation.

### 3.4 Synthesis

In summary, current LLM-based simulation architectures provide increasingly expressive behavioral proxies and new ways to construct social scenarios at scale. At the same time, each design choice introduces trade-offs and potential sources of error that require explicit examination. When these limitations interact across large populations, they may propagate or be amplified, motivating the Micro-to-Macro Validity Gap examined in Section [4](https://arxiv.org/html/2507.19364v4#S4 "4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").

## 4 The Micro-to-Macro Validity Gap: Critical Challenges

Moving from the technical frameworks described above to rigorous scientific investigation raises fundamental epistemological challenges. While current platforms demonstrate that large-scale LLM-based simulations are technically feasible, technical feasibility should not be conflated with scientific validity ([Lu et al. 2024](https://arxiv.org/html/2507.19364v4#bib.bib46)).

To conceptualize how limitations at the model level may affect the scientific validity of multi-agent simulations, we define the Micro-to-Macro Validity Gap as:

> The gap that arises when limitations and artifacts at the LLM level are translated into individual agent behaviors and subsequently propagated through interactions, potentially producing aggregate dynamics that appear socially plausible while lacking sufficient causal, construct, or external validity.

As illustrated in Figure [1](https://arxiv.org/html/2507.19364v4#S4.F1 "Figure 1 ‣ 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"), this gap can be understood as a four-level propagation framework:

1. 1.

   LLM-Level Properties: Model-level characteristics such as stochastic generation, factual hallucinations, alignment effects, contextual instability, and demographic or cultural biases in training data.
2. 2.

   Agent-Level Manifestations: The translation of these properties into agent behaviors, including convergence toward generic personas, generative variability, sycophancy, longitudinal persona drift, and inconsistent social reasoning.
3. 3.

   Interaction-Level Propagation: Mechanisms through which individual-level artifacts can propagate, reinforce, or transform through social interactions, including information exchange, shared memory, peer influence, and iterative feedback loops.
4. 4.

   Macro-Level Consequences: Aggregate patterns that may emerge from these interactions, including artificial consensus, behavioral homogenization, spurious polarization, unstable collective patterns, and other potentially distorted macro-dynamics.

The potential consequence of this cascade is an epistemic risk: researchers may draw policy or theoretical conclusions from simulations that exhibit convincing surface realism while providing limited evidence that the underlying generative mechanisms correspond to those operating in the target social system. To structure this critical evaluation, Table [2](https://arxiv.org/html/2507.19364v4#S4.T2 "Table 2 ‣ 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation") summarizes the main failure modes across cognitive, epistemic, and technical dimensions and maps them to potential hybrid design responses discussed in Section [5](https://arxiv.org/html/2507.19364v4#S5 "5 Towards Theory-Driven Hybrid Architectures ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").

Diagnostic: PAS, refusal, frame-break rates

Diagnostic: DHI (variance contraction)

Diagnostic: Null-model ablation (TOST)

Level 1
  
LLM Limitations & Biases 

•

Stochastic generation
•

Factual hallucinations
•

Training-data imbalances
•

Alignment & safety tuning
•

Context-window drift

Level 2
  
Agent Manifestations 

•

“Average persona” bias
•

Uncontrolled variability
•

Sycophancy & compliance
•

Temporal persona drift
•

Generative caricature

Level 3
  
Interaction Propagation 

•

Inter-agent dialogue
•

Memory contamination
•

Conformism & peer effects
•

Iterative feedback loops
•

Endogenous normative drift

Level 4
  
Macro Consequences 

•

Artificial consensus
•

Variance homogenization
•

Spurious polarization
•

Path-dependent drift
•

Unstable macro-equilibria
manifests aspropagatesthroughAmplification:Cascades, ThresholdsContraction:Attractor collapsefeedback on context


EPISTEMIC RISK: CONFUSING SURFACE LINGUISTIC REALISM WITH CAUSAL VALIDITY
Evaluator Biases: Fluency Fallacy (Discrimination Failure) $\;\bullet\;$ Automation Bias (Uncritical Reliance)
Systemic Consequences: Emergent Artifacts Mistaken for Empirical Regularities $\;\bullet\;$ Unfalsifiable Policy Prescriptions


Figure 1: The Micro-to-Macro Validity Gap conceptual framework and diagnostic protocol.
Individual model-level characteristics (Level 1) manifest as behavioral patterns in simulated agents (Level 2). Through interaction networks, shared memory, and conversational feedback (Level 3), individual errors can undergo divergent nonlinear amplification (via information cascades or threshold phase transitions) or convergent contraction (attractor collapse toward dominant model priors), yielding distorted macro-level dynamics (Level 4). Concrete diagnostics ($PAS$, $DHI$, and null-model ablation via TOST) monitor transitions between successive levels. The framework highlights that human evaluators face epistemic vulnerabilities (the Fluency Fallacy and automation bias), risking mistaking superficial narrative coherence for causal empirical validity.


Table 2: Taxonomy of methodological challenges in LLM-based social simulation and potential hybrid design responses. The final column identifies architectural directions discussed in Section 5; these approaches may improve epistemic control or computational tractability, but do not by themselves establish the validity of the resulting simulation.

| Category | Challenge & Mechanism | Impact on Social Simulation | Potential Hybrid Design Response (Sec. 5) |
| --- | --- | --- | --- |
| Cognitive & behavioral | The Average Persona Risk   Statistical regression toward the mean driven by pre-training corpus distributions ([Wang et al. 2025](https://arxiv.org/html/2507.19364v4#bib.bib85); [Wu et al. 2026](https://arxiv.org/html/2507.19364v4#bib.bib86)). | Replicant Effect: Loss of population diversity; erasure of minority distributions and extreme behaviors. | Theory-Grounded Agent States: Represent selected demographic distributions, beliefs, and behavioral rules explicitly within the ABM rather than relying solely on prompt-defined personas. |
|  | Alignment-Induced Sycophancy   Post-training preference optimization (RLHF/DPO) inadvertently inducing compliant, conflict-averse responses ([Sharma et al. 2023](https://arxiv.org/html/2507.19364v4#bib.bib54); [Li et al. 2025a](https://arxiv.org/html/2507.19364v4#bib.bib44)). | Synthetic Harmony: Agents refuse realistic conflict, partisan polarization, or non-normative decisions, yielding artificial consensus. | Domain-Specific / SLMs without conversational preference tuning: Deploy local, task-specialized language models free from post-hoc safety conversational tuning, combined with theory-guided prompt scaffolding. |
|  | Generative Exaggeration   Tendency to caricature specific roles when prompted away from the mean ([Nudo et al. 2026](https://arxiv.org/html/2507.19364v4#bib.bib40)). | Toxic Caricature: Agents exhibit stereotypical or extreme behaviors rather than nuanced human decision-making. | Theory and Environment Constraints: Combine environmental feasibility checks with explicit behavioral assumptions and validation criteria to identify implausible or stereotyped outputs. |
| Methodological & Epistemic | The Fluency Fallacy   Evaluator discrimination failure: high linguistic plausibility masking underlying causal invalidity ([Steyvers et al. 2024](https://arxiv.org/html/2507.19364v4#bib.bib90)). | Surface Realism: Simulations appear valid to human evaluators but lack causal veridicality. | Structural Evaluation Safeguards (Sec. 4.2): Deploy (i) ablation of narrative traces to evaluate symbolic logs directly, (ii) deterministic ledger and invariant verification, and (iii) adversarial counterfactual auditing. |
|  | Epistemic Opacity   Implicit behavioral rules hidden in billions of parameters ([Bommasani et al. 2022](https://arxiv.org/html/2507.19364v4#bib.bib50)). | Unverifiable Emergence: Inability to trace unexpected macroscopic behaviors back to explicit agent decision rules. | Traceable Hybrid Architecture: Assign explicit state variables, environmental checks, and specified action-selection mechanisms to the ABM, while restricting LLM use to clearly delimited functions. |
|  | Data Scarcity Wall   Lack of training data for non-WEIRD populations ([Atari et al. 2023](https://arxiv.org/html/2507.19364v4#bib.bib29); [Abdurahman et al. 2024](https://arxiv.org/html/2507.19364v4#bib.bib48)). | Cultural Erasure: Inability to simulate specific marginalized groups via pure fine-tuning. | Theory-Driven Alignment: Use explicit behavioral theories to structure assumptions and expose uncertainties where representative empirical data are sparse. |
| Technical & Operational | Temporal Instability   Context window limits and stochastic drift over long horizons ([Wu et al. 2026](https://arxiv.org/html/2507.19364v4#bib.bib86)). | Longitudinal Incoherence: Agents forget their history or change personality during long simulations. | Externalized State Management: Store selected identities, commitments, social ties, and memory summaries in explicit ABM-managed state rather than relying solely on the LLM context window. |
|  | Computational Bottleneck   High inference costs preventing large-scale iterative runs. | No Sensitivity Analysis: Inability to perform rigorous statistical validation (1000+ runs). | Offline Policies and Lightweight Models: Distil, approximate, or execute selected policies offline, and use task-specific SLMs where appropriate to reduce repeated inference costs. |
|  | Adversarial & Misuse Risks   Susceptibility to prompt injection and emergent normative drift observed in exploratory testbeds ([Akkil et al. 2026](https://arxiv.org/html/2507.19364v4#bib.bib91)). | Systemic Pollution: Compromised behavior spreads through shared memory, distorting the collective reasoning of the population. | Constrained Interaction Protocols (Sec. 4.7): Define typed, permissioned, monitored, and auditable communication channels to prevent unconstrained natural-language prompt injection from entering shared agent memory. |

### 4.1 Formalizing Amplification and Diagnostic Evaluation

To complement the qualitative analysis, the following quantities and protocols are formulated as conceptual diagnostic proposals to guide future experimental validation, rather than empirical estimates computed within this review. A critical distinction must be maintained between linear error propagation and nonlinear distortion across the four levels. Let $\epsilon$ denote the magnitude of a controlled micro-level perturbation (e.g., the fraction of corrupted memory entries or injected hallucinated assertions) and $E(T;\epsilon)$ the divergence at horizon $T$ between perturbed and unperturbed macro-trajectories across paired seeds. We formally distinguish three operational regimes:

1. 1.

   Linear propagation. $E(T;\epsilon)\propto\epsilon$ (scaling exponent $\alpha=1$) and underlying transition rules remain unaltered. In this baseline regime, micro-level artifacts enter collective state additively without altering the surrounding decision landscape.
2. 2.

   Divergent amplification (cascades, threshold transitions). Two distinct criteria must be reported separately, as they are not mathematically equivalent:

   - •

     *Amplitude nonlinearity*: $E(T;\epsilon)\propto\epsilon^{\alpha}$ with $\alpha>1$, estimated by log–log regression across multiple perturbation magnitudes $\epsilon$;
   - •

     *Temporal instability*: a positive growth rate $\lambda=\lim\_{T\to\infty}\tfrac{1}{T}\log E(T;\epsilon)>0$ (a finite-horizon divergence rate analogous to a Lyapunov exponent, corresponding in the linearized state formulation $e\_{t+1}=\mathbf{G}e\_{t}+\xi\_{t}$ to a spectral radius $\rho(\mathbf{G})>1$). Formal estimation of a true Lyapunov exponent would require additional assumptions concerning state representation, coupling, stochasticity, and local dynamical smoothness.

   A linear system with $\rho(\mathbf{G})>1$ is dynamically unstable yet maintains $\alpha=1$, whereas a threshold network mechanism can yield $\alpha>1$ without sustained exponential growth. Divergent amplification in the strict sense requires $\alpha>1$ and/or $\lambda>0$.
3. 3.

   Convergent contraction (attractor collapse). Let $d\_{t}=\tfrac{1}{N}\sum\_{i}\lVert x\_{i,t}-x^{\ast}\rVert$ denote the mean distance of agent states to the base model’s default normative prior $x^{\ast}$. Attractor collapse corresponds to $d\_{t}\to 0$ (in the linearization around $x^{\ast}$, $\rho(\mathbf{G})<1$) and $DHI(t)\to 1$. This is contraction rather than divergent amplification: the error relative to the *human target* does not diverge, but converges to a persistent non-zero bias (the distance between $x^{\ast}$ and the empirical target distribution), explaining why it systematically eludes conventional temporal instability diagnostics.

Outside these explicit dynamic and contraction regimes, the four-level framework operates as a structured diagnostic heuristic. To empirically detect these regimes and monitor error propagation across successive stages of the modeling pipeline, targeted diagnostic metrics should be deployed across each inter-level transition:

- •

  Level 1 $\rightarrow$ Level 2 (Model to Agent): Track the composite Persona Adherence Score ($PAS$), defined multiplicatively across prompt iterations to prevent double-counting:

  |  |  |  |  |
  | --- | --- | --- | --- |
  |  | $$PAS=(1-R\_{\text{refusal}})(1-R\_{\text{frame-break}})\,R\_{\text{adherence}\mid\text{valid}}\in[0,1]$$ |  | (1) |

  where $R\_{\text{refusal}}\in[0,1]$ indexes refusal rates driven by alignment guardrails, $R\_{\text{frame-break}}$ records the frequency of meta-linguistic persona breaks (e.g., reverting to “As an AI language model…”), and $R\_{\text{adherence}\mid\text{valid}}\in[0,1]$ measures semantic and behavioral alignment with assigned persona descriptors evaluated strictly over valid, non-refused responses. Importantly, $PAS$ measures fidelity to the assigned persona, not correspondence with a human population; $\tau\_{1/2}(PAS)$ is therefore a persona-fidelity horizon, to be complemented by an independently defined distance to the empirical target.
- •

  Level 2 $\rightarrow$ Level 3 (Agent to Interaction): We propose a Dynamic Homogenization Index ($DHI$), formalizing the cumulative contraction of between-agent attitudinal variance across interaction steps $t$:

  |  |  |  |  |
  | --- | --- | --- | --- |
  |  | $$DHI(t)=1-\frac{\mathrm{Var}(X\_{t})}{\mathrm{Var}(X\_{0})},\quad\text{with }\mathrm{Var}(X\_{0})>0$$ |  | (2) |

  where $X\_{t}$ denotes continuous behavioral choices or projection embeddings along specific ideological or value dimensions. A step-wise rate of contraction can be monitored via $\Delta DHI(t)=DHI(t)-DHI(t-1)$. $DHI$ is dimension-specific and should be interpreted only relative to a pre-specified behavioral or attitudinal projection. Negative values indicate increased dispersion rather than a measurement failure.
- •

  Level 3 $\rightarrow$ Level 4 (Interaction to Macro): Conduct interaction-ablation tests using a distribution-matched null model ($\mathcal{N}\_{1}$). Researchers simulate the identical macro-structural interaction topology, replacing generative LLM cognitive engines with non-interactive agents whose static micro-level choice probabilities are empirically matched to the marginal distributions produced by the LLM agents. If macro-level patterns (e.g., consensus formation, polarization regimes) under the generative model and the $\mathcal{N}\_{1}$ null model exhibit statistical equivalence under two one-sided tests (TOST) within an a priori equivalence margin calibrated to inter-seed variance, this strongly suggests that complex inter-agent generative deliberation provides no identifiable causal explanatory power over static choice distributions in the evaluated regime.

### 4.2 Epistemic Risks: Hallucinations and the Fluency Fallacy

At the micro-level, evaluating LLMs as agent decision mechanisms reveals a fragile correspondence with human psychological processes ([Strachan et al. 2024](https://arxiv.org/html/2507.19364v4#bib.bib21); [Ullman 2023](https://arxiv.org/html/2507.19364v4#bib.bib22); [Karra et al. 2024](https://arxiv.org/html/2507.19364v4#bib.bib87)). In addition, LLMs are fundamentally constrained by stochastic inconsistency and hallucinations—generating baseless outputs while maintaining a coherent linguistic structure ([Wang et al. 2024b](https://arxiv.org/html/2507.19364v4#bib.bib1)).

When these micro-level flaws are embedded in multi-agent populations, they generate or amplify an epistemic vulnerability that we term the Fluency Fallacy. We conceptualize this phenomenon fundamentally as an evaluator discrimination failure: the systematic inability of human evaluators to distinguish causally valid from invalid agent decisions when masked by fluent narrative justifications. While intuitive, this concept directly builds upon established traditions in cognitive psychology and human-computer interaction regarding processing fluency heuristics, epistemic trust, and automation bias ([Cummings 2012](https://arxiv.org/html/2507.19364v4#bib.bib66); [Steyvers et al. 2024](https://arxiv.org/html/2507.19364v4#bib.bib90)). In cognitive science, the fluency heuristic posits that subjective ease of processing serves as an implicit proxy for truth and validity ([Alter and Oppenheimer 2009](https://arxiv.org/html/2507.19364v4#bib.bib83); [Reber and Schwarz 1999](https://arxiv.org/html/2507.19364v4#bib.bib84)); similarly, in HCI authority bias research, perceived articulateness systematically inflates an automated system’s perceived competence. As discussed by [Li et al. (2026)](https://arxiv.org/html/2507.19364v4#bib.bib13), this concern reflects a broader methodological problem and a recurring neo-behaviorist dilemma in computational psychology: researchers frequently mistake surface-level linguistic performance for internal cognitive or social validity.

Operational Definition and Measurement. Operationally, while a simple heuristic expression of the Fluency Fallacy measures the elevated subjective plausibility granted to objectively invalid decisions, $\mathbb{E}[S\_{\text{plausibility}}(\text{Trace})\mid V\_{\text{causal}}(\text{Decision})=0]$, this metric alone cannot separate evaluator leniency from true cognitive illusion. To formally capture this diagnostic breakdown across continuous populations of evaluation traces, we propose an operational index of the Fluency Fallacy based on the Area Under the Receiver Operating Characteristic Curve (AUC) of subjective plausibility scores $S\in[0,1]$ predicting objective validity $V\in\{0,1\}$ (evaluated against explicit ground-truth rules, ledger conservation, or counterfactual stability within the ABM environment):

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$FF\_{\text{AUC}}=1-\text{AUC}\left(S\_{\text{plausibility}}\rightarrow V\_{\text{causal}}\right)$$ |  | (3) |

Under this formulation, $\text{AUC}(S\rightarrow V)\approx 0.50$ would indicate that evaluators perform no better than chance in distinguishing valid from invalid decisions under the specified evaluation protocol, while $\text{AUC}<0.50$ indicates that subjective plausibility is systematically misleading (in the absence of score-direction reversal or coding artifacts).

Trigger Conditions and Vulnerable Populations. This fallacy is most pronounced under three conditions: (i) high semantic complexity with sparse factual feedback (e.g., policy deliberations where outcome delays prevent immediate error detection); (ii) long conversational horizons where local linguistic coherence remains intact while global causal continuity drifts; and (iii) scenarios lacking strict physical or ledger constraints. We hypothesize that domain experts without simulation modeling background (who focus primarily on qualitative persona realism) may be particularly susceptible to this evaluative trap. Furthermore, this vulnerability may be amplified in individuals exhibiting high cognitive dependence on automated conversational agents, a construct formalized by the LLM dependence scale of [Li et al. (2025b)](https://arxiv.org/html/2507.19364v4#bib.bib15).

Methodological Safeguards. To mitigate the Fluency Fallacy, simulation frameworks must incorporate structural safeguards that decouple behavioral evaluation from surface-level linguistic narratives:

1. 1.

   Ablation of Narrative Traces during Validation: Evaluating simulated agents based strictly on symbolic, numerical, and state-transition logs rather than generated discursive justifications. Evaluators inspect state vectors directly—such as resource transfers, spatial coordinates, time-budget allocations, or voting tallies—using conventional agent-based validation methods (e.g., transition matrices, trajectory clustering, and time-series divergence). By removing the linguistic framing, this blind-evaluation protocol prevents human evaluators from projecting rational intentionality onto causally inconsistent behavior.
2. 2.

   Ledger and Deterministic Environmental Verification: Enforcing independent conservation laws, budget balances, and physical invariants directly within the ABM engine rather than accepting textual declarations at face value. As demonstrated in preliminary evaluations of multi-agent environments such as Emergence World ([Akkil et al. 2026](https://arxiv.org/html/2507.19364v4#bib.bib91)), generative agents can maintain conversational plausibility and strictly adhere to dialogue constraints while simultaneously issuing baseless or fabricated claims regarding resource possession. A deterministic ledger layer verifies whether proposed transactions or material actions satisfy feasibility preconditions prior to state commitment, thereby preventing ungrounded hallucinations from polluting the persistent simulation state.
3. 3.

   Adversarial Counterfactual Auditing: Systematically perturbing antecedent parameters to test the stability and falsifiability of the underlying decision heuristic. Language models can generate post-hoc rationalizations that fit an observed scenario by retrieving standard linguistic patterns rather than executing a causal decision process. By executing micro-interventions on localized input variables (e.g., inverting price incentives, shifting regulatory constraints, or modifying social cues) and comparing agent responses across parallel seeds, researchers can verify whether decisions exhibit theoretically consistent directional shifts or degenerate into arbitrary stochastic variance.

### 4.3 Representational Risks: Cognitive Bias, Average Persona, and Alignment

#### 4.3.1 Pre-training Distributional Biases and the Average Persona

While foundational studies frequently invoke the general concept of Western, Educated, Industrialized, Rich, and Democratic (WEIRD) bias ([Atari et al. 2023](https://arxiv.org/html/2507.19364v4#bib.bib29); [Abdurahman et al. 2024](https://arxiv.org/html/2507.19364v4#bib.bib48)), recent empirical benchmarks have begun to systematically quantify both the magnitude and directionality of these representational skews across standardized value frameworks and demographic strata.
Using large-scale survey instruments such as the Pew Research surveys (OpinionQA), [Santurkar et al. (2023)](https://arxiv.org/html/2507.19364v4#bib.bib71) demonstrated that instruction-tuned and RLHF-aligned models exhibit marked baseline skews: default responses align predominantly with liberal, college-educated, and secular demographics in the United States. [Durmus et al. (2023)](https://arxiv.org/html/2507.19364v4#bib.bib70) also reported systematic differences between model outputs and subjective-opinion distributions across countries and demographic groups, highlighting the difficulty of treating general-purpose models as culturally representative populations. Similarly, psychometric probing across Hofstede’s cultural dimensions and Moral Foundations Theory reveals that pre-training corpora under-represent traditional, conservative, and collectivistic moral matrices, skewing disproportionately toward individualistic fairness and harm reduction ([Atari et al. 2023](https://arxiv.org/html/2507.19364v4#bib.bib29)).

In a social simulation context, these pre-training distributional imbalances generate systemic homogenization. While classical ABMs intentionally employ simplified, homogeneous agents (the KISS paradigm ([Axelrod 1997](https://arxiv.org/html/2507.19364v4#bib.bib9))), LLM-driven architectures aspire to the KIDS (Keep It Descriptive, Stupid) paradigm ([Edmonds and Moss 2005](https://arxiv.org/html/2507.19364v4#bib.bib10)) to model richly diversified human populations. However, the underlying statistical mechanics of next-token prediction actively undermine this goal, triggering an Average Persona Convergence ([Wang et al. 2025](https://arxiv.org/html/2507.19364v4#bib.bib85)) whose severity is modulated by identifiable conditions:

1. 1.

   Conditioning Depth and Prompting Regimes: Behavioral convergence toward the population mean is particularly pronounced under minimal demographic conditioning, such as relying solely on coarse socioeconomic labels (e.g., “You are a 55-year-old rural factory worker”). In low-context configurations, model outputs consistently revert to default statistical priors. While elaborate narrative backstories introduce lexical diversity, empirical evaluations indicate that agents frequently converge on homogeneous moral and operational decisions during extended multi-agent interactions, a dynamic termed the Replicant Effect ([Wu et al. 2026](https://arxiv.org/html/2507.19364v4#bib.bib86); [Li et al. 2025a](https://arxiv.org/html/2507.19364v4#bib.bib44), cf.).
2. 2.

   Asymmetric Impact across Populations: Behavioral homogenization varies systematically across demographic strata ([Wang et al. 2025](https://arxiv.org/html/2507.19364v4#bib.bib85)). Sub-populations that are extensively documented in digital English-language corpora (such as urban, educated Western cohorts) typically retain greater behavioral variance under persona conditioning. In contrast, under-represented demographic groups—such as non-Western or traditional rural communities—are particularly vulnerable to representational attenuation, where localized decision-making patterns are systematically replaced by the model’s dominant normative baselines ([Wang et al. 2025](https://arxiv.org/html/2507.19364v4#bib.bib85); [Atari et al. 2023](https://arxiv.org/html/2507.19364v4#bib.bib29)).

Furthermore, attempting to force models away from this statistical average persona via aggressive prompt engineering frequently triggers Generative Exaggeration: rather than calibrating authentic psychological variance, agents drift into toxic caricatures and stereotypical extremes, replacing statistical homogenization with sociological parody ([Nudo et al. 2026](https://arxiv.org/html/2507.19364v4#bib.bib40)).

#### 4.3.2 Safety Alignment, Preference Tuning, and Modeler Dependence

A critical distinction must be drawn between statistical regression to the mean arising from pre-training corpus distributions and the active behavioral compression induced by post-training alignment procedures (e.g., supervised instruction tuning, RLHF, and DPO).

First, as documented by [La Cava and Tagarelli (2025)](https://arxiv.org/html/2507.19364v4#bib.bib12) across multiple open-weights model architectures, supervised instruction tuning and preference optimization consistently constrict downstream behavioral variance, causing diverse base models to converge toward restricted, normative behavioral repertoires.

Second, while deliberate safety alignment is intended to suppress toxic, harmful, or illegal outputs, it inadvertently fosters an emergent sycophancy bias—an unprompted tendency to agree with user cues and avoid confrontational positions ([Sharma et al. 2023](https://arxiv.org/html/2507.19364v4#bib.bib54)). When deployed in social simulation, safety-tuned agents frequently suppress realistic partisan, conflictual, or non-normative behaviors ([Sharma et al. 2023](https://arxiv.org/html/2507.19364v4#bib.bib54); [Li et al. 2025a](https://arxiv.org/html/2507.19364v4#bib.bib44)), defaulting instead to polite and artificially compliant consensus. As demonstrated by [Li et al. (2025a)](https://arxiv.org/html/2507.19364v4#bib.bib44), these post-training alignment artifacts do not merely affect surface textual dialogue but directly skew the operational choices and downstream actions agents execute within the simulated environment.

This post-training compression interacts directly with modeler trust and reliance. As highlighted by the psychometric framework of [Li et al. (2025b)](https://arxiv.org/html/2507.19364v4#bib.bib15), researchers can develop cognitive dependence on LLMs, which may attenuate scrutiny of model-generated content. In simulation design, an over-reliance on automated outputs risks reducing critical inspection during prompt engineering and validation: investigators may be more inclined to interpret aligned, cooperative dialogue as plausible human social dynamics rather than as an artifact of safety tuning. Consequently, post-training alignment artifacts and unchecked evaluator reliance can mutually reinforce an artificial consensus, potentially obscuring more contentious, polarized, or heterogeneous population dynamics.

### 4.4 Interpretability Risks: Opacity and Automation Bias

The opacity of LLMs can also contribute to automation bias ([Cummings 2012](https://arxiv.org/html/2507.19364v4#bib.bib66)), whereby users tend to place undue trust in automated systems and accept their outputs with limited scrutiny. This risk is amplified by the ability of LLMs to produce plausible but unsupported or incorrect explanations while maintaining a high level of linguistic confidence, making erroneous outputs difficult to identify without external verification ([Simhi et al. 2025](https://arxiv.org/html/2507.19364v4#bib.bib72)).

This issue contrasts with the more explicit behavioral specification traditionally used in agent-based modeling. In conventional ABMs, researchers define behavioral rules, assumptions, and decision mechanisms explicitly, and these can be inspected and calibrated against empirical observations. In LLM-driven agents, by contrast, much of the behavioral specification is implicit in the model’s parameters and learned representations ([Bommasani et al. 2022](https://arxiv.org/html/2507.19364v4#bib.bib50); [Larooij and Törnberg 2025](https://arxiv.org/html/2507.19364v4#bib.bib51)). Consequently, when an LLM-based agent produces an unexpected decision-for example, by deviating from an expected economic strategy or displaying a socially biased response-it can be difficult to identify the mechanisms responsible for that behavior. Researchers may therefore struggle to determine whether an observed pattern reflects a meaningful emergent phenomenon at the population level or an artifact of the model’s stochasticity, training data, or latent representations.

This limitation is particularly consequential when simulations are used to inform policy or other high-stakes decisions. Decision-support systems in such contexts require not only predictive or behavioral performance, but also sufficient transparency, robustness, and accountability to support the interpretation and scrutiny of their outputs ([Ju et al. 2024](https://arxiv.org/html/2507.19364v4#bib.bib38)). When the computational mechanisms underlying simulated agent decisions remain largely opaque, biases or artifacts originating from the underlying LLM may be propagated through the simulation without being readily identifiable. This can undermine the interpretability and epistemic validity of simulation-based analyses and, consequently, the reliability of policy recommendations derived from them ([Echterhoff et al. 2024](https://arxiv.org/html/2507.19364v4#bib.bib24)).

### 4.5 Temporal Dynamics: Degradation Regimes and Characteristic Timescales

In classical ABMs, long-term behaviors, asymptotic tendencies, and system sensitivity are typically characterized through extensive Monte Carlo simulations and structured sensitivity analyses over invariant, well-defined state spaces. In LLM-driven simulations, by contrast, evaluating temporal stability faces two interrelated barriers: the high computational cost of running sufficient replications, and the non-stationary nature of agent cognition, which is continuously mediated through accumulating textual history, selective memory retrieval, and recursive summarization ([Wu et al. 2026](https://arxiv.org/html/2507.19364v4#bib.bib86)). We hypothesize that this temporal degradation is not uniform but unfolds conceptually across three successive phases:

1. 1.

   Early-Phase In-Context Coherence: During initial interaction cycles, agents closely adhere to their prompted personas and operational guidelines. Decisions remain directly anchored in system-level prompts, with behavioral variance reflecting stochastic sampling rather than structural drift.
2. 2.

   Mid-Phase Retrieval and Contextual Drift: As interaction histories exceed operational context windows, architectures rely on embedding-based retrieval (RAG) and periodic reflection mechanisms ([Park et al. 2023](https://arxiv.org/html/2507.19364v4#bib.bib31); [Tang et al. 2025](https://arxiv.org/html/2507.19364v4#bib.bib34)). Because semantic similarity does not track temporal hierarchies or causal necessity, agents retrieve fragmented anecdotes. Behavioral consistency progressively weakens: initial commitments are reinterpreted, and contextual personas experience uncalibrated drift.
3. 3.

   Late-Phase Recursive Compaction and Attractor Collapse: Over extended horizons, agents generate secondary reflections based on previously summarized memories and prior ungrounded statements. Under unconstrained conversational dynamics, this recursive compression leads to compounding information loss, where diverse individual personas risk collapsing toward the baseline normative prior of the underlying foundation model ([Wu et al. 2026](https://arxiv.org/html/2507.19364v4#bib.bib86), cf.), driving aggregate trajectories toward artificial consensus or unreproducible fluctuations.

Characteristic Timescales and Operational Half-Life. To transition from a qualitative description to an empirical benchmark, we formalize the operational reliability timescale via the persona adherence half-life, $\tau\_{1/2}(PAS)$. Building upon the Persona Adherence Score defined in Section [4.1](https://arxiv.org/html/2507.19364v4#S4.SS1 "4.1 Formalizing Amplification and Diagnostic Evaluation ‣ 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"), $\tau\_{1/2}(PAS)$ denotes the characteristic simulation horizon (measured in discrete time-steps $t$ or interaction rounds) at which persona fidelity decays to half its baseline level:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\tau\_{1/2}(PAS)=\min\left\{t\;\middle|\;\mathbb{E}[PAS(t)]\leq\frac{1}{2}\mathbb{E}[PAS(0)]\right\}$$ |  | (4) |

We hypothesize that in purely conversational, prompt-based architectures, this characteristic timescale is tightly bounded by the effective uncompressed context capacity before recursive summarization dilutes behavioral fidelity ([Wu et al. 2026](https://arxiv.org/html/2507.19364v4#bib.bib86)). Simulations extending beyond $\tau\_{1/2}(PAS)$ are expected to lose longitudinal construct validity unless stabilized by hybrid architectures (Section [5](https://arxiv.org/html/2507.19364v4#S5 "5 Towards Theory-Driven Hybrid Architectures ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation")) that externalize persistent state variables, commitments, and structural constraints directly within the ABM environment.

### 4.6 Computational Constraints and Scalability

Although LLMs may offer logistical advantages over large-scale human experiments, they introduce substantial computational constraints compared with traditional Agent-Based Models (ABMs). Their resource requirements can be considerable, particularly for local deployment, which may require substantial GPU resources, or for cloud-based inference, where large-scale simulations generate a high volume of API requests ([Costa 2025](https://arxiv.org/html/2507.19364v4#bib.bib37); [Xia et al. 2024](https://arxiv.org/html/2507.19364v4#bib.bib39)). When thousands of narrative agents interact repeatedly over extended simulation periods, inference latency and computational or API costs can quickly become significant, limiting the practical scalability of such approaches.

This computational overhead has methodological implications beyond runtime and infrastructure requirements. Many forms of analysis used to assess the robustness of stochastic social simulations rely on repeated model executions under different parameter settings and initial conditions. Such experiments are essential for characterizing parameter sensitivity, exploring boundary conditions, and quantifying the variability of simulation outcomes ([Piao et al. 2025](https://arxiv.org/html/2507.19364v4#bib.bib32); [Wu et al. 2026](https://arxiv.org/html/2507.19364v4#bib.bib86)). While lightweight rule-based agents can often support extensive parameter sweeps and replications on standard CPUs, the substantially higher cost of LLM inference can make comparable experimental designs impractical. Researchers may therefore face a trade-off between the behavioral richness afforded by LLM-based agents and the number of simulations that can be feasibly performed.

Several strategies can mitigate this constraint, including reducing the number of agents or interactions, limiting the frequency of LLM calls, and replacing online inference with offline or distilled policies ([Chopra et al. 2023](https://arxiv.org/html/2507.19364v4#bib.bib11)). However, these strategies may themselves affect the properties being studied. Reducing population size can constrain the analysis of macro-level patterns and emergent phenomena, while replacing online inference with distilled policies may alter the behavioral variability and contextual adaptation of the original LLM. Consequently, computational scalability is not simply an engineering consideration: it can directly constrain the experimental designs required to rigorously analyze and validate LLM-based social simulations.

### 4.7 Behavioral Perturbation, Adversarial Dynamics, and Scientific Instability

Beyond technical and computational limitations, LLM-driven simulations introduce acute risks when agents or their environments are exposed to communicative or adversarial perturbations. In classical rule-based ABMs, agent behavioral repertoires are bounded by explicit state-transition logic, meaning that external perturbations induce responses strictly within the parameter space defined by the modeler. In contrast, LLM-based agents operate over an open-ended, context-sensitive behavioral manifold. While this enables expressive social role-play, it creates an attack surface where prompt injection ([Greshake et al. 2023](https://arxiv.org/html/2507.19364v4#bib.bib92)) and jailbreaking techniques ([Zou et al. 2023](https://arxiv.org/html/2507.19364v4#bib.bib93)) can manipulate decision heuristics by exploiting conflicts between system-level directives and conversational context. This vulnerability is particularly present for agents conditioned to sustain detailed social personas, as misleading cues embedded in ongoing dialogues become incorporated into persistent context and alter subsequent reasoning ([Mou et al. 2026](https://arxiv.org/html/2507.19364v4#bib.bib94)).

Systemic Contamination and Endogenous Normative Drift. When deployed within populations, such vulnerabilities cease to be isolated anomalies and can manifest as systemic dynamics. Recent exploratory evaluations in sandbox testbeds such as Emergence World suggest that simulated prompt-injection and phishing events may propagate across agent societies: when agents exchange messages, maintain shared memories, or consult common ledgers, compromised inputs produced by a single agent can be retrieved by neighboring peers, potentially contaminating collective memory and altering population-level behavior ([Akkil et al. 2026](https://arxiv.org/html/2507.19364v4#bib.bib91)).

This vulnerability may also manifest without deliberate external manipulation. Preliminary multi-agent experiments indicate that agents exhibiting aligned, cooperative behavior in isolation or within homogeneous groups can undergo endogenous normative drift when interacting with agents powered by alternative model architectures ([Akkil et al. 2026](https://arxiv.org/html/2507.19364v4#bib.bib91)). While these exploratory findings warrant systematic replication across diverse platforms, they illustrate how peer-to-peer influence and iterative feedback loops can dynamically modify behavioral baselines, showing that safety and behavioral stability cannot be assessed solely through isolated single-agent benchmark testing.

Epistemic Consequences: Falsifiability and Path-Dependent Irreproducibility. These perturbation dynamics carry direct epistemological consequences that distinguish generative simulations from traditional complex systems models:

1. 1.

   Rupture of Counterfactual Falsifiability: When an agent adopts non-normative or unpredicted choices following a social exchange, researchers cannot reliably determine whether this represents genuine emergent social behavior or an unconstrained linguistic drift triggered by semantic perturbations in the prompt history. The lack of bounded state invariants leaves behavioral hypotheses largely insulated from rigorous falsification.
2. 2.

   Path-Dependent Irreproducibility: Because semantic shifts in inter-agent communication enter subsequent context windows, minor conversational fluctuations can trigger discontinuous phase shifts across the agent network. This produces high longitudinal path-dependency, preventing the stable replication of macro-trajectories across parallel stochastic seeds.

Adversarial and conversational sensitivity is therefore not merely a cybersecurity concern, but a structural vulnerability within the Micro-to-Macro Validity Gap: local linguistic instability directly undermines the replicability, interpretability, and scientific defensibility of aggregate simulation findings. This instability further underscores the need for explicitly bounded, theory-driven hybrid architectures (Section [5](https://arxiv.org/html/2507.19364v4#S5 "5 Towards Theory-Driven Hybrid Architectures ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation")) capable of regulating inter-agent communication channels.

### 4.8 Ethics in Application: Serious Games vs. Predictive Science

Given the methodological limitations discussed above, it is important to distinguish between application domains in which LLM-based agents can provide practical value and those in which their limitations may compromise scientific validity. In particular, the requirements for an interactive learning environment differ substantially from those of a simulation intended to support empirical claims or quantitative predictions.

#### 4.8.1 Interactive Environments and Serious Games

In educational games, training environments, and participatory simulations ([Taillandier et al. 2019b](https://arxiv.org/html/2507.19364v4#bib.bib81)), LLMs can provide substantial benefits. In these settings, the primary objective is often to create engaging, adaptive, and plausible interactions rather than to reproduce social behavior with strict empirical fidelity ([Costa 2025](https://arxiv.org/html/2507.19364v4#bib.bib37)). LLMs can dynamically adapt dialogue and scenarios to individual users, enabling personalized learning pathways and richer narrative interactions ([Hu et al. 2025](https://arxiv.org/html/2507.19364v4#bib.bib36)). They can also be combined with traditional machine-learning methods to monitor player behavior and identify indicators of cognitive difficulty or disengagement during educational activities ([Liu et al. 2025a](https://arxiv.org/html/2507.19364v4#bib.bib61)).

These benefits do not eliminate the need for safeguards. In educational and training contexts, incorrect or misleading outputs can have direct consequences for learning. Unlike a rule-based simulator in which the space of possible outcomes can be explicitly specified and validated, an LLM-based agent may generate plausible but factually incorrect information. Such outputs can contribute to superficial learning or excessive reliance on the system ([Delikoura et al. 2025](https://arxiv.org/html/2507.19364v4#bib.bib55)). Biases in the underlying model can introduce additional problems, particularly when agents are expected to portray different social roles or perspectives. For example, [Arana et al. (2025)](https://arxiv.org/html/2507.19364v4#bib.bib33) report inconsistencies in role-play behavior and the reproduction of stereotypical patterns in personalized educational simulations. Consequently, the use of LLMs in educational or training environments should combine their flexibility with mechanisms for factual grounding, systematic evaluation, and adversarial testing. Retrieval-augmented generation (RAG), constrained prompting, and human oversight can help reduce, although not necessarily eliminate, these risks.

#### 4.8.2 From Prediction to Exploratory modeling: Minimum Validity Standards

For social simulations intended as scientific instruments, the epistemic limitations detailed in Sections [4.2](https://arxiv.org/html/2507.19364v4#S4.SS2 "4.2 Epistemic Risks: Hallucinations and the Fluency Fallacy ‣ 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation") and [4.4](https://arxiv.org/html/2507.19364v4#S4.SS4 "4.4 Interpretability Risks: Opacity and Automation Bias ‣ 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation") mean that deploying LLM-based agents for direct confirmatory empirical research or fine-grained point-predictions (such as precise electoral forecasting) currently exceeds the methodological guarantees of generative architectures. Given their sensitivity to contextualization, prompt semantics, and stochasticity, establishing a stable, verifiable correspondence with real-world target populations remains a major challenge. Even when supported by architectural scaffolding, generative components in high-stakes explanatory settings should be adopted conditionally: their scientific value depends on demonstrating independent empirical falsifiability and measurable explanatory gains over minimal, non-generative baseline rules.

A more defensible role for LLM-based agents is therefore exploratory modeling ([Lu et al. 2024](https://arxiv.org/html/2507.19364v4#bib.bib46)), where simulations function as computational reasoning pumps to explore the consequences of alternative behavioral assumptions ([Wu et al. 2026](https://arxiv.org/html/2507.19364v4#bib.bib86)). However, treating a model as exploratory cannot serve as an escape clause that exempts it from methodological scrutiny. Unconstrained exploratory claims risk producing behavioral patterns that reflect artifacts of model pre-training or prompt phrasing rather than genuine socio-behavioral dynamics.

This tension is formalized by [Li and Wu (2025)](https://arxiv.org/html/2507.19364v4#bib.bib14) as the structural dilemma of prompt engineering in generative agent-based modeling: balancing prompt-level control against emergent behavioral freedom. At one extreme, highly prescriptive prompting rigidly predetermines agent actions, reducing the simulation to a scripted demonstration with zero generative autonomy. At the other extreme, unconstrained prompting leaves agents vulnerable to stochastic drift and hallucinations, yielding scientifically vacuous outputs.

For exploratory simulation to be methodologically defensible, it must satisfy minimum validity criteria:

1. 1.

   Qualitative Pattern Robustness Across Seeds: While numerical outputs in generative systems vary, exploratory hypotheses are defensible only if macroscopic qualitative regimes (e.g., segregation thresholds, polarization, or cooperation dynamics) persist reliably across multiple random seeds and temperature settings.
2. 2.

   Prompt-Sensitivity Invariance: Exploratory insights must not depend on fragile phrasing. As highlighted in architectural and robustness evaluations (Sections [3](https://arxiv.org/html/2507.19364v4#S3 "3 The State of LLM-Based Social Simulation: A Transversal Analysis ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation") and [4.2](https://arxiv.org/html/2507.19364v4#S4.SS2 "4.2 Epistemic Risks: Hallucinations and the Fluency Fallacy ‣ 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation")), candidate hypotheses must demonstrate stability under semantic paraphrasing of instructions and persona descriptors.
3. 3.

   Cross-Model and Version Portability: Emergent dynamics should be evaluated across distinct model families (e.g., contrasting open-weight architectures). An emergent pattern observable in only one proprietary model checkpoint may reflect idiosyncratic alignment artifacts rather than a generalizable social dynamic.
4. 4.

   Empirical Decoupling and Falsifiability: Exploratory modeling must conclude with structured, testable propositions that can be decoupled from the generative software environment and submitted to independent empirical evaluation (e.g., via behavioral experiments, surveys, or field observations).

#### 4.8.3 Narrative Generation and Results Interpretation

A further application of LLMs is to use them not as the decision-making mechanism of simulated agents, but as tools for interpreting simulation outputs. In this approach, LLMs operate either post-hoc or alongside the simulation to transform complex model outputs into qualitative descriptions, scenarios, or narratives that can be more readily examined by researchers and stakeholders (e.g. ([Arnejo et al. 2026](https://arxiv.org/html/2507.19364v4#bib.bib28))). This can facilitate the interpretation and communication of macro-level patterns by connecting quantitative simulation results with human-readable descriptions of possible trajectories and social dynamics. This use is methodologically distinct from employing an LLM as the primary decision-making mechanism of each simulated agent. Because the underlying simulation remains responsible for generating the quantitative results, the LLM primarily acts as an interface for interpretation and communication. Nevertheless, this separation does not remove the risk of introducing unsupported interpretations. Generated narratives may attribute causal relationships that are not present in the simulation or emphasize patterns that are not statistically supported. LLM-based interpretation should therefore remain grounded in the underlying model outputs, with explicit constraints on the information available to the model and, where possible, systematic verification of generated claims. This separation between simulation and interpretation may offer a comparatively low-risk way of exploiting LLMs’ language capabilities while preserving the transparency and reproducibility of the underlying scientific model.

## 5 Towards Theory-Driven Hybrid Architectures

The limitations of purely generative approaches suggest that LLMs may be most useful when embedded within structured Agent-Based Models (ABMs) and informed by explicit behavioral or cognitive theories ([Taillandier et al. 2019a](https://arxiv.org/html/2507.19364v4#bib.bib82); [Jimenez-Romero et al. 2025](https://arxiv.org/html/2507.19364v4#bib.bib59)). In such architectures, the ABM provides an explicit representation of the simulated environment—including spatial, physical, institutional, and resource constraints—while the language model supports selected aspects of agent deliberation. This structural separation addresses an essential vulnerability of purely generative frameworks: an LLM may propose an action based on textual context, but the ABM deterministically evaluates whether that action is compatible with the physical state and regulatory invariants of the simulated world. Compatibility with environmental constraints should not, however, be confused with the empirical or construct validity of the generative decision mechanism itself.

Beyond environmental grounding, hybrid systems provide an architectural framework for decomposing human deliberation into intermediate processes informed by cognitive psychology and behavioral economics, rather than relying on monolithic end-to-end prompting. Such scaffolding constrains generative variability, renders behavioral assumptions inspectable, and retains the contextual interpretability of language models.

However, hybridization does not eliminate the stochasticity or representational limits of language models; rather, it bounds them within explicit and inspectable state spaces. By delegating physical invariants, resource ledgers, and institutional rules to the deterministic simulation engine, hybrid designs can prevent some proposed actions from violating explicit environmental or accounting constraints, while restricting language models to modular cognitive subroutines.

### 5.1 Coupling Modes: LLM-as-Subroutine vs. LLM-as-Policy

Current integrations of LLMs into simulation engines can broadly be organized into two operational paradigms:

In the LLM-as-Subroutine configuration, the ABM engine executes core system mechanics (spatial motion, physical flows, baseline accounting), while the language model is queried synchronously for complex social or qualitative reasoning tasks. This separation maintains deterministic environmental tracking while leveraging contextual deliberation in domains where closed-form mathematical heuristics are unavailable ([Yang et al. 2026](https://arxiv.org/html/2507.19364v4#bib.bib41); [Shi et al. 2026](https://arxiv.org/html/2507.19364v4#bib.bib57)).

The second configuration, LLM-as-Policy, shifts language model computation offline. Rather than executing iterative calls during runtime, model outputs are compiled or distilled into parameterized behavioral policies executed deterministically by the simulation engine ([Chopra et al. 2023](https://arxiv.org/html/2507.19364v4#bib.bib11)). This design drastically reduces computational overhead, permitting extensive parameter sensitivity testing, albeit at the expense of runtime conversational adaptation.

An operational compromise is offered by Small Language Models (SLMs) ([Belcak et al. 2025](https://arxiv.org/html/2507.19364v4#bib.bib58)). When fine-tuned for specialized decision tasks, localized SLMs run within simulation loops at substantially lower latency, facilitating replication while eliminating external API dependencies. However, as evaluated in our concluding research agenda (Section [6](https://arxiv.org/html/2507.19364v4#S6 "6 Conclusion ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation")), whether task-specialized SLMs can preserve authentic behavioral heterogeneity without succumbing to variance constriction remains an open empirical question that must be validated independently of their computational advantages. Furthermore, hybrid designs externalize persistent state: agent memory, social ties, and material endowments are maintained and updated directly within explicit ABM data structures rather than entrusted to a drifting context window ([Park et al. 2023](https://arxiv.org/html/2507.19364v4#bib.bib31); [Piao et al. 2025](https://arxiv.org/html/2507.19364v4#bib.bib32)).

### 5.2 behavioral Alignment with Empirical Data and Theory-Driven Scaffolding

A prominent strategy for improving agent realism involves aligning models with empirical psychological datasets ([Binz et al. 2025](https://arxiv.org/html/2507.19364v4#bib.bib30)). However, empirical alignment faces a fundamental boundary: the availability of high-resolution behavioral data is sparse for many demographic groups and decision contexts, and general-purpose corpora remain skewed toward WEIRD populations ([Atari et al. 2023](https://arxiv.org/html/2507.19364v4#bib.bib29); [Abdurahman et al. 2024](https://arxiv.org/html/2507.19364v4#bib.bib48)). Sole reliance on observed datasets therefore risks reinforcing existing sampling blind spots.

To address this scarcity wall, hybrid architectures introduce explicit theoretical scaffolding. Rather than generating unstructured behavioral outputs, language model queries are constrained by established behavioral frameworks, such as the Theory of Planned behavior (TPB) ([Ajzen 1991](https://arxiv.org/html/2507.19364v4#bib.bib53); [Scalco et al. 2018](https://arxiv.org/html/2507.19364v4#bib.bib49)). Under this framework, models estimate intermediate, theory-specified constructs—attitudes, subjective norms, and perceived behavioral control—which are stored as explicit state variables before intention is translated into action. This structural scaffolding renders causal assumptions inspectable, limits generative drift, and creates intermediate targets for empirical calibration.

### 5.3 Conceptual Example: Theory-Driven Coupling in Agricultural Irrigation

This subsection outlines a conceptual blueprint to examine how these theoretical scaffolds and coupling mechanisms operate in practice. Specifically, we consider a stylized scenario of agricultural irrigation under drought-induced water restrictions.

While established socio-hydrological platforms such as MAELIA ([Thérond et al. 2014](https://arxiv.org/html/2507.19364v4#bib.bib3)) model physical catchment dynamics (streamflow deficits, groundwater storage, crop evapotranspiration) and institutional governance rules (prefectural restriction tiers) deterministically without relying on language models, we examine here a hypothetical hybrid architecture where generative components are embedded within such a grounded environment. In this conceptual implementation, agent deliberation is structured across three sequential phases:

1. 1.

   Environmental Tracking and Externalized State (ABM Engine): The simulation engine deterministically computes biophysical balances (e.g., daily soil moisture deficits modeled through mechanistic crop modules) and tracks statutory irrigation quotas and regulatory restriction stages (e.g., partial or total irrigation bans). Each farmer agent maintains an explicit, inspectable state vector outside the language model, including historical crop yields, operating debt, and irrigation withdrawal allowances.
2. 2.

   Theory-Structured Cognitive Deliberation (SLM Component): Rather than deploying an unconstrained prompt (e.g., “Decide whether to irrigate your maize field today”), deliberation is structured through the Theory of Planned behavior ([Ajzen 1991](https://arxiv.org/html/2507.19364v4#bib.bib53)). A local Small Language Model (SLM) is queried via modular prompts solely to evaluate intermediate psychological constructs:

   - •

     Attitude ($A\in[0,1]$): Evaluated against expected crop economic loss versus the perceived risk and penalty of non-compliance fines under current restriction alerts.
   - •

     Subjective Norms ($SN\in[0,1]$): Conditioned on the observed compliance or defiance behaviors of neighboring peers within the farmer’s social network.
   - •

     Perceived Behavioral Control ($PBC\in[0,1]$): Evaluated strictly as the agent’s subjective self-efficacy (e.g., perceived ability to implement alternative scheduling or manage bureaucratic restriction exceptions). This subjective construct is decoupled from hard physical constraints to avoid double-counting with subsequent deterministic ledger checks.

   To prevent uninspectable heuristic aggregation by the language model, the SLM is restricted to estimating separate numerical scores for each construct. The ABM engine then computes the behavioral intention score via an explicit, calibrated weighting equation:

   |  |  |  |  |
   | --- | --- | --- | --- |
   |  | $$I=w\_{A}A+w\_{SN}SN+w\_{PBC}PBC,\quad\text{with }w\_{A}+w\_{SN}+w\_{PBC}=1$$ |  | (5) |

   The ABM deterministically maps this intention score $I\in[0,1]$ to an operational irrigation volume proposal $V\_{\text{prop}}$:

   |  |  |  |  |
   | --- | --- | --- | --- |
   |  | $$V\_{\text{prop}}=I\cdot V\_{\text{agronomic}}$$ |  | (6) |

   where $V\_{\text{agronomic}}$ denotes the objective daily water requirement estimated mechanistically by the crop-growth module. The linear mapping from intention to volume is itself a behavioral assumption and must be calibrated against metered withdrawals; it is a potential locus of physics washing. The additive intention equation and the linear mapping from intention to water volume are illustrative formalizations rather than direct empirical consequences of the TPB. Their parameters and functional forms would require independent calibration and comparison with alternative specifications.
3. 3.

   Feasibility Verification and Biophysical Feedback (ABM Engine): The proposed volume $V\_{\text{prop}}$ is returned to the ABM engine, which executes deterministic boundary verification: irrigation is capped if the pumping station exceeds legal hourly flow thresholds, if farm pond reserves are exhausted, or if water rights are legally suspended. The verified withdrawal $V\_{\text{exec}}\leq V\_{\text{prop}}$ is subtracted from hydrological catchment storage, updating downstream streamflow and generating biophysical feedback for subsequent simulation steps.

Multi-Level Validation Protocol. This hybrid decomposition enables systematic evaluation across four connected structural levels, mirroring the analytical architecture of the validity gap:

- •

  $V\_{1}$: Biophysical and Environmental Grounding: Mechanistic hydrological equations (evapotranspiration, river discharge, groundwater depletion) are validated independently against physical benchmark data (e.g., historical hydrological gauging stations and meteorological time series).
- •

  $V\_{2}$: Micro-Level Cognitive Calibration: Intermediate psychological scores ($A,SN,PBC$) estimated by the SLM are calibrated against agricultural survey datasets, discrete choice experiments, and post-drought qualitative interviews.
- •

  $V\_{3}$: Cross-Level Interaction and Face Validity: To verify decision heuristics without narrative distortion, stylized decision logs (soil moisture status, alert stage, neighbor decisions, and executed withdrawal) are audited via stakeholder-in-the-loop panels (farmers and watershed managers) using blind operational timelines decoupled from generated linguistic justifications.
- •

  $V\_{4}$: Macro-Level Socio-Hydrological Trajectories: Aggregate seasonal withdrawal curves and catchment-scale depletion rates are benchmarked against regional water-metering records and satellite observations of crop greenness. It is at this level ($V\_{4}$) that the minimal heuristic substitution test ($\mathcal{N}\_{2}$) is formally evaluated to ensure the generative layer delivers demonstrable explanatory gain over parsimonious baseline rules.

By decoupling the biophysical ledger from cognitive reasoning, this framework helps mitigate the risk of physics washing, supporting that individual decisions remain causally traceable and falsifiable without mistaking environmental rigor for behavioral validity.

### 5.4 Open Challenges: The Validation Trap and Physics Washing

As illustrated by the need for multi-level calibration in socio-environmental systems, hybrid architectures do not eliminate epistemic challenges; rather, they redistribute them across distinct model components. A persistent vulnerability is that explicit and deterministic components of an ABM may create an impression of overall rigor that is not warranted for the underlying behavioral or generative components. We refer to this risk as physics washing: an epistemic distortion whereby the mathematical, spatial, or physical precision of the environment confers unwarranted scientific credibility onto an unvalidated or speculative behavioral layer.

Conceptual Lineage and Analogy with Greenwashing. The term draws a deliberate analogy with greenwashing. In greenwashing, superficial environmental claims mask unsustainable operational practices; similarly, in physics washing, rigorous physical conservation laws, high-resolution GIS topographies, or mechanistic equations serve as a methodological veneer that obscures the epistemic opacity of prompt-driven decision heuristics. The risk is particularly acute in interdisciplinary modeling teams, where domain specialists from natural or physical sciences may assume that because the physical layer is calibrated against empirical benchmark datasets, the coupled socio-behavioral dynamics inherit equivalent validity.

A Typology of Physics Washing Scenarios. We propose three recurring conceptual configurations in which physics washing may arise:

1. 1.

   Spatial and GIS Dressing: Simulations deploying high-resolution topographic or urban road networks (e.g., in mobility and evacuation modeling) where spatial routing, collision avoidance, and network capacities are modeled with formal accuracy, but destination choice, panic thresholds, or risk perception are governed by uncalibrated conversational prompts.
2. 2.

   Biophysical Interface Masking: Socio-ecological architectures (e.g., agricultural hydrology, epidemiological models) in which mechanistic physical balances (soil water retention, pathogen transmission matrices) are coupled to LLM agents whose compliance, risk tolerance, or resource-use heuristics are sensitive to unverified prompt phrasing.
3. 3.

   Formal Ledger Camouflage: Economic or market simulations where double-entry financial ledgers, strict clearinghouses, and conservation of money enforce mechanical accounting validity, concealing the fact that agent bidding, utility estimation, or negotiation strategies fail basic axioms of consumer rationality.

Diagnostic Criteria and Auditing Guidelines. While the safeguards detailed in Section [4.2](https://arxiv.org/html/2507.19364v4#S4.SS2 "4.2 Epistemic Risks: Hallucinations and the Fluency Fallacy ‣ 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation") protect evaluators against deceptive linguistic narratives, auditing a simulation against physics washing requires diagnostics targeted specifically at the structural coupling between physical and behavioral layers:

1. 1.

   Decoupled Layer Calibration: Behavioral decision heuristics must be calibrated against independent empirical human data prior to integration into the physical simulation environment. High goodness-of-fit metrics in the biophysical or spatial layer (e.g., matching regional hydrological discharge or traffic network flows) must not be accepted as evidence that the behavioral sub-model is valid.
2. 2.

   Cross-Layer Sensitivity Analysis: Conducting systematic stress tests to evaluate how perturbations propagate across the interface. A scientifically sound hybrid model must demonstrate bidirectional responsiveness: significant biophysical changes (e.g., severe resource scarcity) should induce non-trivial behavioral adjustments, while minor prompt variations must not trigger disproportionate, chaotic phase transitions in the physical environment.
3. 3.

   Explanatory Gain via Minimal Heuristic Substitution: Re-running the integrated simulation after replacing the generative LLM component with a minimal baseline rule ($\mathcal{N}\_{2}$) calibrated on the same empirical source data (treating uniform random draws strictly as sanity checks rather than competing baselines). If aggregate socio-environmental trajectories remain statistically equivalent under two one-sided tests (TOST) with an a priori equivalence margin accounting for stochastic variance, the generative agent layer provides no identifiable explanatory gain and functions merely as decorative complexity. While decorative generative complexity is not identical to physics washing per se, it becomes an instance of physics washing when the formal rigor of the biophysical engine is leveraged to claim scientific validity for the unvalidated generative layer.

## 6 Conclusion

Large Language Models have demonstrated remarkable capabilities in natural language interaction and achieve strong performance across standardized reasoning tasks ([Jones and Bergen 2026](https://arxiv.org/html/2507.19364v4#bib.bib17); [Ullman 2023](https://arxiv.org/html/2507.19364v4#bib.bib22)). However, the literature reviewed here indicates that linguistic fluency should not be taken as evidence of causal cognitive mechanisms. The resulting divergence between verbal coherence and behavioral validity produces the Fluency Fallacy: an evaluator discrimination failure whereby human judges mistake surface-level linguistic plausibility for authentic causal social agency ([Steyvers et al. 2024](https://arxiv.org/html/2507.19364v4#bib.bib90); [Larooij and Törnberg 2025](https://arxiv.org/html/2507.19364v4#bib.bib51)). In computational social science, this distinction is fundamental, as articulate narrative traces frequently mask hallucinated assertions, ungrounded heuristics, and latent demographic skews.

As generative simulation scales from sandbox environments ([Park et al. 2023](https://arxiv.org/html/2507.19364v4#bib.bib31)) toward large populations ([Piao et al. 2025](https://arxiv.org/html/2507.19364v4#bib.bib32)) and spatially explicit frameworks ([Liu et al. 2026](https://arxiv.org/html/2507.19364v4#bib.bib52)), these micro-level vulnerabilities become systemic. Individual persona convergence, prompt sensitivity, and training-set distributional biases propagate through inter-agent interactions, amplifying into the Micro-to-Macro Validity Gap: aggregate outcomes can exhibit superficial realism while remaining causally disconnected from the target social system ([Wu et al. 2026](https://arxiv.org/html/2507.19364v4#bib.bib86); [La Cava and Tagarelli 2025](https://arxiv.org/html/2507.19364v4#bib.bib12)). Furthermore, opacity, non-stationary temporal drift, and high inference costs make the direct deployment of unconstrained LLM agents problematic for confirmatory science and predictive policy analysis.

These limitations do not negate the utility of language models in simulation; rather, they clarify their methodological boundaries. Generative agents provide immediate operational value in interactive learning environments, serious games, and participatory simulations where narrative expressiveness and contextual engagement take precedence over empirical correspondence ([Costa 2025](https://arxiv.org/html/2507.19364v4#bib.bib37)). Similarly, within exploratory modeling, language models serve as computational reasoning pumps to examine alternative behavioral scenarios and generate qualitative hypotheses under explicit prompt constraints ([Lu et al. 2024](https://arxiv.org/html/2507.19364v4#bib.bib46); [Li and Wu 2025](https://arxiv.org/html/2507.19364v4#bib.bib14)).

For explanatory research, the evidence reviewed points toward theory-driven hybrid architectures that embed language models within explicit, mechanistic ABM platforms ([Taillandier et al. 2019a](https://arxiv.org/html/2507.19364v4#bib.bib82); [Chopra et al. 2023](https://arxiv.org/html/2507.19364v4#bib.bib11)). Yet hybridization does not automatically resolve epistemic vulnerability. A formally rigorous environmental engine can enforce spatial, physical, or accounting constraints while leaving the generative behavioral layer uncalibrated, creating the risk of physics washing.

To prevent hybrid modeling from remaining an abstract design concept and anchor it in empirical falsification, we propose three concrete, forward-looking research benchmarks for future evaluation:

1. Standardized Counterfactual Benchmarking for Behavioral Fidelity.
Evaluating whether persona-conditioned agents exhibit genuine causal reasoning or merely stochastic paraphrasing under situational change.
Protocol: Deploy an open benchmark where simulated agents are subjected to controlled micro-interventions on incentive structures (e.g., changes in taxation, resource costs, or regulatory sanctions) while holding the environmental baseline constant.
Success Criterion: The simulated standardized effect size $d\_{\text{sim}}$ preserves the directional sign predicted by behavioral theory across all stochastic seeds and prompt paraphrasings, and falls within a pre-specified equivalence margin $\delta\_{d}$ of the empirical human reference effect size $d\_{\text{hum}}$ for the identical intervention.
Falsifiable Failure Criterion: Systematic sign reversals across paraphrases, failure to achieve theoretically consistent directional shifts, or inter-seed variance exceeding $\delta\_{d}$ demonstrates an absence of causal grounding, restricting the architecture to exploratory scenario generation.

2. Stress-Testing the Decoupling Barrier to Prevent Physics Washing.
Establishing whether coupling an LLM to an explicit environmental engine provides demonstrable explanatory gain over non-generative heuristics.
Protocol: Systematic baseline-substitution experiments using an empirically calibrated minimal rule baseline ($\mathcal{N}\_{2}$) within identical biophysical environments (such as the agricultural irrigation setup in Section [5.3](https://arxiv.org/html/2507.19364v4#S5.SS3 "5.3 Conceptual Example: Theory-Driven Coupling in Agricultural Irrigation ‣ 5 Towards Theory-Driven Hybrid Architectures ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation")). To ensure a fair comparison, $\mathcal{N}\_{2}$ must be calibrated on the same empirical source data as the generative layer (e.g., a threshold or fixed-construct TPB decision rule fitted to survey or choice-experiment data, with its number of free parameters explicitly reported), whereas uniform random draws serve strictly as sanity checks rather than competing baselines. Let $\Delta=\mathrm{RMSE}\_{\mathcal{N}\_{2}}-\mathrm{RMSE}\_{\text{LLM}}$ denote the paired difference in macro-level misfit across seeds, and $\delta>0$ the minimum substantively meaningful improvement.
Success Criterion: A one-sided superiority test rejects $H\_{0}:\Delta\leq\delta$, confirming that generative deliberation contributes measurable explanatory value beyond parsimonious rules.
Falsifiable Failure Criterion: If two one-sided tests (TOST) establish statistical equivalence within a predefined margin, $|\Delta|<\delta\_{\text{eq}}$, the generative component provides no causal explanatory gain and operates merely as decorative complexity—constituting physics washing whenever the formal rigor of the biophysical engine is leveraged to claim unearned validity for the coupled cognitive layer. (Runs failing both superiority and equivalence remain inconclusive).

3. Empirical Calibration of Small Language Models without Conversational Preference Tuning.
Evaluating whether localized SLMs without conversational preference tuning can serve as calibrated cognitive subroutines free from the consensus bias and conflict suppression induced by safety tuning.
Protocol: Fine-tune open-weights SLMs strictly on domain-specific behavioral datasets (e.g., attitudinal survey batteries, choice-experiment records) bounded by intermediate psychological constructs, explicitly bypassing conversational RLHF/DPO layers. To mitigate post-training variance constriction (Section [4.3.2](https://arxiv.org/html/2507.19364v4#S4.SS3.SSS2 "4.3.2 Safety Alignment, Preference Tuning, and Modeler Dependence ‣ 4.3 Representational Risks: Cognitive Bias, Average Persona, and Alignment ‣ 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation")), models should be fine-tuned on target response distributions rather than deterministic modal answers, sampled stochastically, and verified for baseline distributional calibration prior to multi-agent interaction.
Success Criterion: The Wasserstein distance between simulated and empirical human attitude distributions (as well as polarization indices) remains within an equivalence margin bounded by observed between-sample human variability across successive interaction rounds. The Dynamic Homogenization Index ($DHI$) is evaluated as a secondary diagnostic against empirical human trajectories, accommodating settings where human populations naturally polarize ($DHI<0$).
Falsifiable Failure Criterion: If specialized, theory-scaffolded SLMs undergo artificial variance collapse ($DHI\to 1$) or fail to sustain observed empirical heterogeneity, this would provide systematic evidence of an operational boundary in current autoregressive architectures, demarcating where statistical next-token prediction cannot substitute for explicit mechanistic agent modeling.

Addressing these empirical challenges will enable the computational social science community to systematically demarcate where generative agents genuinely enhance simulation science and where classical mechanistic modeling remains methodologically irreplaceable.

## Conflict of Interest Statement

The authors declare that the research was conducted in the absence of any commercial or financial relationships that could be construed as a potential conflict of interest.

## Author Contributions

PT conceived the original structure and wrote the first draft of the manuscript. JDZ, AG, BG, NQH, HK and AD substantially contributed to the conceptualization, provided critical feedback, and improved the manuscript. All authors discussed the concepts, read, and approved the final manuscript.

## Funding

This work was supported by the French National Research Agency (Agence Nationale de la Recherche, ANR) under the project RL-MAT.

## Data Availability Statement

No new datasets were generated or analyzed in this study. All literature analyzed is referenced within the article.

## References

- Abdurahman et al. (2024)
  S. Abdurahman, M. Atari, F. Karimi-Malekabadi, M. J. Xue, J. Trager, P. S. Park, P. Golazizian, A. Omrani, and M. Dehghani
  Perils and opportunities in using large language models in psychological research.
  PNAS Nexus 3 (7), pp. pgae245.
  External Links: ISSN 2752-6542,
  [Document](https://dx.doi.org/10.1093/pnasnexus/pgae245),
  [Link](https://doi.org/10.1093/pnasnexus/pgae245),
  https://academic.oup.com/pnasnexus/article-pdf/3/7/pgae245/58645406/pgae245.pdf
  Cited by: [§4.3.1](https://arxiv.org/html/2507.19364v4#S4.SS3.SSS1.p1.1 "4.3.1 Pre-training Distributional Biases and the Average Persona ‣ 4.3 Representational Risks: Cognitive Bias, Average Persona, and Alignment ‣ 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [Table 2](https://arxiv.org/html/2507.19364v4#S4.T2.2.7.2.1.1 "In 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [§5.2](https://arxiv.org/html/2507.19364v4#S5.SS2.p1.1 "5.2 behavioral Alignment with Empirical Data and Theory-Driven Scaffolding ‣ 5 Towards Theory-Driven Hybrid Architectures ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Adornetto et al. (2025)
  C. Adornetto, A. Mora, K. Hu, L. I. Garcia, P. Atchade-Adelomou, G. Greco, L. A. A. Pastor, and K. Larson
   Generative Agents in Agent-Based Modeling: Overview, Validation, and Emerging Challenges .
  IEEE Transactions on Artificial Intelligence 6 (12), pp. 3165–3183.
  External Links: ISSN 2691-4581,
  [Document](https://dx.doi.org/10.1109/TAI.2025.3566362),
  [Link](https://doi.ieeecomputersociety.org/10.1109/TAI.2025.3566362)
  Cited by: [§3.3](https://arxiv.org/html/2507.19364v4#S3.SS3.p1.1 "3.3 The Validation Landscape: From Face Validity to Multi-Level Evaluation ‣ 3 The State of LLM-Based Social Simulation: A Transversal Analysis ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Ajzen (1991)
  I. Ajzen
  The theory of planned behavior.
  Organizational behavior and human decision processes 50 (2), pp. 179–211.
  Cited by: [item 2](https://arxiv.org/html/2507.19364v4#S5.I1.i2.p1.1 "In 5.3 Conceptual Example: Theory-Driven Coupling in Agricultural Irrigation ‣ 5 Towards Theory-Driven Hybrid Architectures ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [§5.2](https://arxiv.org/html/2507.19364v4#S5.SS2.p2.1 "5.2 behavioral Alignment with Empirical Data and Theory-Driven Scaffolding ‣ 5 Towards Theory-Driven Hybrid Architectures ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Akkil et al. (2026)
  D. Akkil, R. Kokku, K. Vikram, T. Abuelsaad, A. Vempaty, and S. Nitta
  Emergence world: a platform for evaluating long-horizon multi-agent autonomy.
  arXiv preprint.
  External Links: 2606.08367,
  [Link](https://arxiv.org/abs/2606.08367)
  Cited by: [item 2](https://arxiv.org/html/2507.19364v4#S4.I8.i2.p1.1 "In 4.2 Epistemic Risks: Hallucinations and the Fluency Fallacy ‣ 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [§4.7](https://arxiv.org/html/2507.19364v4#S4.SS7.p2.1 "4.7 Behavioral Perturbation, Adversarial Dynamics, and Scientific Instability ‣ 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [§4.7](https://arxiv.org/html/2507.19364v4#S4.SS7.p3.1 "4.7 Behavioral Perturbation, Adversarial Dynamics, and Scientific Instability ‣ 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [Table 2](https://arxiv.org/html/2507.19364v4#S4.T2.2.10.2.1.1 "In 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Alter and Oppenheimer (2009)
  A. L. Alter and D. M. Oppenheimer
  Uniting the tribes of fluency to form a metacognitive nation.
  Personality and Social Psychology Review 13 (3), pp. 219–235.
  External Links: [Document](https://dx.doi.org/10.1177/1088868309341564)
  Cited by: [§4.2](https://arxiv.org/html/2507.19364v4#S4.SS2.p2.1 "4.2 Epistemic Risks: Hallucinations and the Fluency Fallacy ‣ 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Anderson et al. (2004)
  J. R. Anderson, D. Bothell, M. D. Byrne, S. Douglass, C. Lebiere, and Y. Qin
  An integrated theory of the mind.
  Psychological Review 111 (4), pp. 1036–1060.
  Cited by: [§3.2.1](https://arxiv.org/html/2507.19364v4#S3.SS2.SSS1.p2.1 "3.2.1 Memory Systems: Retrieval-Augmented Memory and Long-Horizon Consistency ‣ 3.2 Transversal Architecture Dimensions: Solutions and Structural Limits ‣ 3 The State of LLM-Based Social Simulation: A Transversal Analysis ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Anthis et al. (2025)
  J. R. Anthis, R. Liu, S. M. Richardson, A. C. Kozlowski, B. Koch, J. Evans, E. Brynjolfsson, and M. Bernstein
  LLM social simulations are a promising research method.
  arXiv preprint arXiv:2504.02234.
  External Links: [Link](https://arxiv.org/abs/2504.02234)
  Cited by: [§1](https://arxiv.org/html/2507.19364v4#S1.p6.1 "1 Introduction ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Arana et al. (2025)
  J. M. Arana, K. A. M. Carandang, E. R. Casin, C. Alis, D. S. Tan, E. F. Legara, and C. Monterola
  Foundations of PEERS: assessing LLM role performance in educational simulations.
  In Proceedings of the 63rd Annual Meeting of the Association for Computational Linguistics (Volume 4: Student Research Workshop),
  pp. 908–918.
  External Links: [Document](https://dx.doi.org/10.18653/v1/2025.acl-srw.66)
  Cited by: [§4.8.1](https://arxiv.org/html/2507.19364v4#S4.SS8.SSS1.p2.1 "4.8.1 Interactive Environments and Serious Games ‣ 4.8 Ethics in Application: Serious Games vs. Predictive Science ‣ 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Arnejo et al. (2026)
  Z. Arnejo, B. Gaudou, M. Saqalli, and N. Bantayan
  Automatic generation of abm narratives using simulation traces and llm.
  In Multi-Agent-Based Simulation XXVI,
  Cham, pp. 28–42.
  External Links: ISBN 978-3-032-16328-8
  Cited by: [§4.8.3](https://arxiv.org/html/2507.19364v4#S4.SS8.SSS3.p1.1 "4.8.3 Narrative Generation and Results Interpretation ‣ 4.8 Ethics in Application: Serious Games vs. Predictive Science ‣ 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Ataei et al. (2025)
  M. Ataei, H. Cheong, D. Grandi, Y. Wang, N. Morris, and A. Tessier
  Elicitron: a large language model agent-based simulation framework for design requirements elicitation.
  Journal of Computing and Information Science in Engineering 25 (2), pp. 021012.
  External Links: [Document](https://dx.doi.org/10.1115/1.4067388),
  [Link](https://doi.org/10.1115/1.4067388)
  Cited by: [item 3](https://arxiv.org/html/2507.19364v4#S3.I1.i3.p1.1 "In 3.1 Platform Paradigms and the Scaling Trade-off ‣ 3 The State of LLM-Based Social Simulation: A Transversal Analysis ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [Table 1](https://arxiv.org/html/2507.19364v4#S3.T1.2.11.1.1.1 "In 3 The State of LLM-Based Social Simulation: A Transversal Analysis ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Atari et al. (2023)
  M. Atari, M. Xue, P. Park, D. E. Blasi, and J. Henrich
  Which humans?.
  PsyArXiv preprint.
  External Links: [Document](https://dx.doi.org/10.31234/osf.io/5b26t),
  [Link](https://doi.org/10.31234/osf.io/5b26t)
  Cited by: [item 2](https://arxiv.org/html/2507.19364v4#S4.I9.i2.p1.1 "In 4.3.1 Pre-training Distributional Biases and the Average Persona ‣ 4.3 Representational Risks: Cognitive Bias, Average Persona, and Alignment ‣ 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [§4.3.1](https://arxiv.org/html/2507.19364v4#S4.SS3.SSS1.p1.1 "4.3.1 Pre-training Distributional Biases and the Average Persona ‣ 4.3 Representational Risks: Cognitive Bias, Average Persona, and Alignment ‣ 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [Table 2](https://arxiv.org/html/2507.19364v4#S4.T2.2.7.2.1.1 "In 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [§5.2](https://arxiv.org/html/2507.19364v4#S5.SS2.p1.1 "5.2 behavioral Alignment with Empirical Data and Theory-Driven Scaffolding ‣ 5 Towards Theory-Driven Hybrid Architectures ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Atchade et al. (2024)
  P. Atchade, A. Mora, L. Alonso-Pastor, A. Grignard, A. Noyman, L. Izquierdo, C. Adornetto, K. Hu, F. Fernandez, H. Rahnama, M. Church, M. ElKatsha, and K. Larson
  Humanized agent-based models: a framework.
  TechRxiv preprint.
  External Links: [Document](https://dx.doi.org/10.36227/techrxiv.172349445.53365209/v1)
  Cited by: [§3.2](https://arxiv.org/html/2507.19364v4#S3.SS2.p1.1 "3.2 Transversal Architecture Dimensions: Solutions and Structural Limits ‣ 3 The State of LLM-Based Social Simulation: A Transversal Analysis ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Axelrod (1997)
  R. Axelrod
  Advancing the art of simulation in the social sciences.
  In Simulating social phenomena,
  pp. 21–40.
  Cited by: [§4.3.1](https://arxiv.org/html/2507.19364v4#S4.SS3.SSS1.p2.1 "4.3.1 Pre-training Distributional Biases and the Average Persona ‣ 4.3 Representational Risks: Cognitive Bias, Average Persona, and Alignment ‣ 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Becattini et al. (2025)
  M. Becattini, R. Verdecchia, and E. Vicario
  SALLMA: a software architecture for llm-based multi-agent systems.
  In 2025 IEEE/ACM International Workshop New Trends in Software Architecture (SATrends),
  pp. 5–8.
  Cited by: [§3.2.4](https://arxiv.org/html/2507.19364v4#S3.SS2.SSS4.p1.1 "3.2.4 Inter-Agent Communication: Natural Language and Information Propagation ‣ 3.2 Transversal Architecture Dimensions: Solutions and Structural Limits ‣ 3 The State of LLM-Based Social Simulation: A Transversal Analysis ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Belcak et al. (2025)
  P. Belcak, G. Heinrich, S. Diao, Y. Fu, X. Dong, S. Muralidharan, Y. C. Lin, and P. Molchanov
  Small language models are the future of agentic ai.
  arXiv preprint arXiv:2506.02153.
  External Links: [Link](https://arxiv.org/abs/2506.02153)
  Cited by: [§5.1](https://arxiv.org/html/2507.19364v4#S5.SS1.p4.1 "5.1 Coupling Modes: LLM-as-Subroutine vs. LLM-as-Policy ‣ 5 Towards Theory-Driven Hybrid Architectures ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Binz et al. (2025)
  M. Binz, E. Akata, M. Bethge, F. Brändle, F. Callaway, J. Coda-Forno, P. Dayan, C. Demircan, M. K. Eckstein, N. Éltető, et al.
  A foundation model to predict and capture human cognition.
  Nature 644 (8078), pp. 1002–1009.
  Cited by: [§3.2.6](https://arxiv.org/html/2507.19364v4#S3.SS2.SSS6.p1.1 "3.2.6 Model Adaptation and Computational Execution ‣ 3.2 Transversal Architecture Dimensions: Solutions and Structural Limits ‣ 3 The State of LLM-Based Social Simulation: A Transversal Analysis ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [§5.2](https://arxiv.org/html/2507.19364v4#S5.SS2.p1.1 "5.2 behavioral Alignment with Empirical Data and Theory-Driven Scaffolding ‣ 5 Towards Theory-Driven Hybrid Architectures ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Bommasani et al. (2022)
  R. Bommasani, D. A. Hudson, E. Adeli, R. Altman, S. Arora, S. von Arx, M. S. Bernstein, J. Bohg, A. Bosselut, E. Brunskill, E. Brynjolfsson, S. Buch, D. Card, R. Castellon, N. Chatterji, A. Chen, K. Creel, J. Q. Davis, D. Demszky, C. Donahue, M. Doumbouya, E. Durmus, S. Ermon, J. Etchemendy, K. Ethayarajh, L. Fei-Fei, C. Finn, T. Gale, L. Gillespie, K. Goel, N. Goodman, S. Grossman, N. Guha, T. Hashimoto, P. Henderson, J. Hewitt, D. E. Ho, J. Hong, K. Hsu, J. Huang, T. Icard, S. Jain, D. Jurafsky, P. Kalluri, S. Karamcheti, G. Keeling, F. Khani, O. Khattab, P. W. Koh, M. Krass, R. Krishna, R. Kuditipudi, A. Kumar, F. Ladhak, M. Lee, T. Lee, J. Leskovec, I. Levent, X. L. Li, X. Li, T. Ma, A. Malik, C. D. Manning, S. Mirchandani, E. Mitchell, Z. Munyikwa, S. Nair, A. Narayan, D. Narayanan, B. Newman, A. Nie, J. C. Niebles, H. Nilforoshan, J. Nyarko, G. Ogut, L. Orr, I. Papadimitriou, J. S. Park, C. Piech, E. Portelance, C. Potts, A. Raghunathan, R. Reich, H. Ren, F. Rong, Y. Roohani, C. Ruiz, J. Ryan, C. Ré, D. Sadigh, S. Sagawa, K. Santhanam, A. Shih, K. Srinivasan, A. Tamkin, R. Taori, A. W. Thomas, F. Tramèr, R. E. Wang, W. Wang, B. Wu, J. Wu, Y. Wu, S. M. Xie, M. Yasunaga, J. You, M. Zaharia, M. Zhang, T. Zhang, X. Zhang, Y. Zhang, L. Zheng, K. Zhou, and P. Liang
  On the opportunities and risks of foundation models.
  arXiv preprint.
  External Links: 2108.07258,
  [Link](https://arxiv.org/abs/2108.07258)
  Cited by: [§4.4](https://arxiv.org/html/2507.19364v4#S4.SS4.p2.1 "4.4 Interpretability Risks: Opacity and Automation Bias ‣ 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [Table 2](https://arxiv.org/html/2507.19364v4#S4.T2.2.6.2.1.1 "In 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Brown et al. (2020)
  T. Brown, B. Mann, N. Ryder, M. Subbiah, J. D. Kaplan, P. Dhariwal, A. Neelakantan, P. Shyam, G. Sastry, A. Askell, et al.
  Language models are few-shot learners.
  Advances in Neural Information Processing Systems 33, pp. 1877–1901.
  Cited by: [§1](https://arxiv.org/html/2507.19364v4#S1.p1.1 "1 Introduction ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Calderón et al. (2025)
  C. Calderón, P. Martí, J. Jordán, J. Palanca, and V. Julian
  Cognitive agents in urban mobility: integrating llm reasoning into multi-agent simulations.
  Sensors 25 (18), pp. 5688.
  External Links: [Document](https://dx.doi.org/10.3390/s25185688)
  Cited by: [§3.2.1](https://arxiv.org/html/2507.19364v4#S3.SS2.SSS1.p1.1 "3.2.1 Memory Systems: Retrieval-Augmented Memory and Long-Horizon Consistency ‣ 3.2 Transversal Architecture Dimensions: Solutions and Structural Limits ‣ 3 The State of LLM-Based Social Simulation: A Transversal Analysis ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Chapuis et al. (2022)
  K. Chapuis, P. Taillandier, and A. Drogoul
  Generation of synthetic populations in social simulations: a review of methods and practices.
  Journal of Artificial Societies and Social Simulation 25 (2), pp. 6.
  External Links: [Document](https://dx.doi.org/10.18564/jasss.4762),
  [Link](http://jasss.soc.surrey.ac.uk/25/2/6.html)
  Cited by: [§3.2.3](https://arxiv.org/html/2507.19364v4#S3.SS2.SSS3.p1.1 "3.2.3 Agent Persona: Demographic Prompting and behavioral Diversity ‣ 3.2 Transversal Architecture Dimensions: Solutions and Structural Limits ‣ 3 The State of LLM-Based Social Simulation: A Transversal Analysis ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Chen et al. (2024)
  G. H. Chen, S. Chen, Z. Liu, F. Jiang, and B. Wang
  Humans or llms as the judge? a study on judgement biases.
  arXiv preprint arXiv:2402.10669.
  External Links: [Link](https://arxiv.org/abs/2402.10669)
  Cited by: [§3.3.2](https://arxiv.org/html/2507.19364v4#S3.SS3.SSS2.p1.1 "3.3.2 Human-in-the-Loop Evaluation ‣ 3.3 The Validation Landscape: From Face Validity to Multi-Level Evaluation ‣ 3 The State of LLM-Based Social Simulation: A Transversal Analysis ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Chopra et al. (2023)
  A. Chopra, J. Subramanian, B. Krishnamurthy, and R. Raskar
  AgentTorch: agent-based modeling with automatic differentiation.
  In Second Agent Learning in Open-Endedness Workshop,
  pp. 1–12.
  External Links: [Link](https://openreview.net/forum?id=JlBBoZBOeF)
  Cited by: [§3.2.6](https://arxiv.org/html/2507.19364v4#S3.SS2.SSS6.p2.1 "3.2.6 Model Adaptation and Computational Execution ‣ 3.2 Transversal Architecture Dimensions: Solutions and Structural Limits ‣ 3 The State of LLM-Based Social Simulation: A Transversal Analysis ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [Table 1](https://arxiv.org/html/2507.19364v4#S3.T1.2.6.1.1.1 "In 3 The State of LLM-Based Social Simulation: A Transversal Analysis ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [§4.6](https://arxiv.org/html/2507.19364v4#S4.SS6.p3.1 "4.6 Computational Constraints and Scalability ‣ 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [§5.1](https://arxiv.org/html/2507.19364v4#S5.SS1.p3.1 "5.1 Coupling Modes: LLM-as-Subroutine vs. LLM-as-Policy ‣ 5 Towards Theory-Driven Hybrid Architectures ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [§6](https://arxiv.org/html/2507.19364v4#S6.p4.1 "6 Conclusion ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Chuang et al. (2024a)
  Y. Chuang, A. Goyal, N. Harlalka, S. Suresh, R. Hawkins, S. Yang, D. Shah, J. Hu, and T. T. Rogers
  Simulating opinion dynamics with networks of llm-based agents.
  arXiv preprint arXiv:2311.09618.
  External Links: [Link](https://arxiv.org/abs/2311.09618)
  Cited by: [item 2](https://arxiv.org/html/2507.19364v4#S3.I1.i2.p1.1 "In 3.1 Platform Paradigms and the Scaling Trade-off ‣ 3 The State of LLM-Based Social Simulation: A Transversal Analysis ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Chuang et al. (2024b)
  Y. Chuang, K. Nirunwiroj, Z. Studdiford, A. Goyal, V. V. Frigo, S. Yang, D. V. Shah, J. Hu, and T. T. Rogers
  Beyond demographics: aligning role-playing llm-based agents using human belief networks.
  In Findings of the Association for Computational Linguistics: EMNLP 2024,
  pp. 14010–14026.
  Cited by: [§3.2.3](https://arxiv.org/html/2507.19364v4#S3.SS2.SSS3.p1.1 "3.2.3 Agent Persona: Demographic Prompting and behavioral Diversity ‣ 3.2 Transversal Architecture Dimensions: Solutions and Structural Limits ‣ 3 The State of LLM-Based Social Simulation: A Transversal Analysis ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Costa (2025)
  C. J. Costa
  Integrating llms in gamified systems.
  arXiv preprint arXiv:2503.11458.
  External Links: [Link](https://arxiv.org/abs/2503.11458)
  Cited by: [§4.6](https://arxiv.org/html/2507.19364v4#S4.SS6.p1.1 "4.6 Computational Constraints and Scalability ‣ 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [§4.8.1](https://arxiv.org/html/2507.19364v4#S4.SS8.SSS1.p1.1 "4.8.1 Interactive Environments and Serious Games ‣ 4.8 Ethics in Application: Serious Games vs. Predictive Science ‣ 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [§6](https://arxiv.org/html/2507.19364v4#S6.p3.1 "6 Conclusion ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Cummings (2012)
  M. L. Cummings
  Automation bias in intelligent systems.
  IEEE Intelligent Systems 27 (3), pp. 88–92.
  Cited by: [§4.2](https://arxiv.org/html/2507.19364v4#S4.SS2.p2.1 "4.2 Epistemic Risks: Hallucinations and the Fluency Fallacy ‣ 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [§4.4](https://arxiv.org/html/2507.19364v4#S4.SS4.p1.1 "4.4 Interpretability Risks: Opacity and Automation Bias ‣ 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- De-Arteaga et al. (2019)
  M. De-Arteaga, N. Sharma, E. Kiciman, B. Meeder, L. Schmidt, B. Lutz, and E. Gilbert
  Bias in bios: a case study of semantic representation bias in a high-stakes setting.
  Proceedings of the Conference on Fairness, Accountability, and Transparency (FAccT).
  Cited by: [§3.3.4](https://arxiv.org/html/2507.19364v4#S3.SS3.SSS4.p1.1 "3.3.4 Data Sources and Comparative Benchmarks ‣ 3.3 The Validation Landscape: From Face Validity to Multi-Level Evaluation ‣ 3 The State of LLM-Based Social Simulation: A Transversal Analysis ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Delikoura et al. (2025)
  I. Delikoura, Y. R. Fung, and P. Hui
  From superficial outputs to superficial learning: risks of large language models in education.
  arXiv preprint arXiv:2509.21972.
  External Links: [Link](https://arxiv.org/abs/2509.21972)
  Cited by: [§4.8.1](https://arxiv.org/html/2507.19364v4#S4.SS8.SSS1.p2.1 "4.8.1 Interactive Environments and Serious Games ‣ 4.8 Ethics in Application: Serious Games vs. Predictive Science ‣ 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Dennett (1987)
  D. C. Dennett
  The intentional stance.
   MIT Press.
  Cited by: [§1](https://arxiv.org/html/2507.19364v4#S1.p6.1 "1 Introduction ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Devlin et al. (2019)
  J. Devlin, M. Chang, K. Lee, and K. Toutanova
  BERT: pre-training of deep bidirectional transformers for language understanding.
  In Proceedings of NAACL-HLT 2019,
  pp. 4171–4186.
  Cited by: [§1](https://arxiv.org/html/2507.19364v4#S1.p1.1 "1 Introduction ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Drogoul and Zucker (1998)
  A. Drogoul and J. Zucker
  Methodological Issues for Designing Multi-Agent Systems with Machine Learning Techniques: Capitalizing Experiences from the RoboCup Challenge.
  Research Report
  Technical Report lip6.1998.041, LIP6.
  External Links: [Link](https://hal.science/hal-02547805)
  Cited by: [§3](https://arxiv.org/html/2507.19364v4#S3.p1.1 "3 The State of LLM-Based Social Simulation: A Transversal Analysis ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Durmus et al. (2023)
  E. Durmus, K. Nguyen, T. I. Liao, N. Schiefer, A. Askell, A. Bakhtin, C. Chen, Z. Hatfield-Dodds, D. Hernandez, N. Joseph, et al.
  Towards measuring the representation of subjective global opinions in language models.
  arXiv preprint arXiv:2306.16388.
  Cited by: [§4.3.1](https://arxiv.org/html/2507.19364v4#S4.SS3.SSS1.p1.1 "4.3.1 Pre-training Distributional Biases and the Average Persona ‣ 4.3 Representational Risks: Cognitive Bias, Average Persona, and Alignment ‣ 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Echterhoff et al. (2024)
  J. Echterhoff, Y. Liu, A. Alessa, J. McAuley, and Z. He
  Cognitive bias in decision-making with llms.
  In Findings of the Association for Computational Linguistics: EMNLP 2024,
  pp. 12640–12653.
  External Links: [Link](https://aclanthology.org/2024.findings-emnlp.739)
  Cited by: [§4.4](https://arxiv.org/html/2507.19364v4#S4.SS4.p3.1 "4.4 Interpretability Risks: Opacity and Automation Bias ‣ 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Edmonds and Moss (2005)
  B. Edmonds and S. Moss
  From kiss to kids–an ’anti-simplistic’ modelling approach.
  Joint workshop on multi-agent and multi-agent-based simulation, pp. 130–144.
  Cited by: [§4.3.1](https://arxiv.org/html/2507.19364v4#S4.SS3.SSS1.p2.1 "4.3.1 Pre-training Distributional Biases and the Average Persona ‣ 4.3 Representational Risks: Cognitive Bias, Average Persona, and Alignment ‣ 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Gao et al. (2024)
  C. Gao, X. Lan, N. Li, Y. Yuan, J. Ding, Z. Zhou, F. Xu, and Y. Li
  Large language models empowered agent-based modeling and simulation: a survey and perspectives.
  Humanities and Social Sciences Communications.
  Cited by: [§1](https://arxiv.org/html/2507.19364v4#S1.p9.1 "1 Introduction ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Gao et al. (2025)
  C. Gao, X. Lan, Z. Lu, J. Mao, J. Piao, H. Wang, D. Jin, and Y. Li
  S${}^{3}$: social-network simulation system with large language model-empowered agents.
  arXiv preprint arXiv:2307.14984.
  External Links: [Link](https://arxiv.org/abs/2307.14984)
  Cited by: [item 2](https://arxiv.org/html/2507.19364v4#S3.I1.i2.p1.1 "In 3.1 Platform Paradigms and the Scaling Trade-off ‣ 3 The State of LLM-Based Social Simulation: A Transversal Analysis ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [§3.3.3](https://arxiv.org/html/2507.19364v4#S3.SS3.SSS3.p1.1 "3.3.3 Robustness and Specialized Evaluation ‣ 3.3 The Validation Landscape: From Face Validity to Multi-Level Evaluation ‣ 3 The State of LLM-Based Social Simulation: A Transversal Analysis ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [Table 1](https://arxiv.org/html/2507.19364v4#S3.T1.2.5.1.1.1 "In 3 The State of LLM-Based Social Simulation: A Transversal Analysis ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Greshake et al. (2023)
  K. Greshake, S. Abdelnabi, S. Mishra, C. Endres, T. Holz, and M. Fritz
  Not what you’ve signed up for: compromising real-world llm-integrated applications with indirect prompt injection.
  arXiv preprint.
  External Links: 2302.12173,
  [Link](https://arxiv.org/abs/2302.12173)
  Cited by: [§4.7](https://arxiv.org/html/2507.19364v4#S4.SS7.p1.1 "4.7 Behavioral Perturbation, Adversarial Dynamics, and Scientific Instability ‣ 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Grimm et al. (2005)
  V. Grimm, E. Revilla, U. Berger, F. Jeltsch, W. M. Mooij, S. F. Railsback, H. Thulke, J. Weiner, T. Wiegand, and D. L. DeAngelis
  Pattern-oriented modeling of agent-based complex systems: lessons from ecology.
  Science 310 (5750), pp. 987–991.
  External Links: [Document](https://dx.doi.org/10.1126/science.1116681)
  Cited by: [§3.3.1](https://arxiv.org/html/2507.19364v4#S3.SS3.SSS1.p2.1 "3.3.1 Empirical Validation and Benchmarking ‣ 3.3 The Validation Landscape: From Face Validity to Multi-Level Evaluation ‣ 3 The State of LLM-Based Social Simulation: A Transversal Analysis ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Gürcan (2024)
  Ö. Gürcan
  Llm-augmented agent-based modelling for social simulations: challenges and opportunities.
  In HHAI 2024: Hybrid Human AI Systems for the Social Good: Proceedings of the Third International Conference on Hybrid Human-Artificial Intelligence,
  pp. 134–144.
  Cited by: [§1](https://arxiv.org/html/2507.19364v4#S1.p9.1 "1 Introduction ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Hu et al. (2025)
  B. Hu, J. Zhu, Y. Pei, and X. Gu
  Exploring the potential of llm to enhance teaching plans through teaching simulation.
  npj Science of Learning 10 (1), pp. 7.
  Cited by: [§4.8.1](https://arxiv.org/html/2507.19364v4#S4.SS8.SSS1.p1.1 "4.8.1 Interactive Environments and Serious Games ‣ 4.8 Ethics in Application: Serious Games vs. Predictive Science ‣ 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Jia et al. (2025)
  Z. Jia, J. Li, X. Qu, and J. Wang
  Enhancing multi-agent systems via reinforcement learning with llm-based planner and graph-based policy.
  In 2025 IEEE International Conference on Robotics and Automation (ICRA),
  pp. 1240–1246.
  Cited by: [§3.2.2](https://arxiv.org/html/2507.19364v4#S3.SS2.SSS2.p1.1 "3.2.2 Action Planning: In-Context Reasoning and Reproducibility ‣ 3.2 Transversal Architecture Dimensions: Solutions and Structural Limits ‣ 3 The State of LLM-Based Social Simulation: A Transversal Analysis ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Jimenez-Romero et al. (2025)
  C. Jimenez-Romero, A. Yegenoglu, and C. Blum
  Multi-agent systems powered by large language models: applications in swarm intelligence.
  Frontiers in Artificial Intelligence 8, pp. 1593017.
  Cited by: [item 3](https://arxiv.org/html/2507.19364v4#S3.I1.i3.p1.1 "In 3.1 Platform Paradigms and the Scaling Trade-off ‣ 3 The State of LLM-Based Social Simulation: A Transversal Analysis ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [Table 1](https://arxiv.org/html/2507.19364v4#S3.T1.2.8.1.1.1 "In 3 The State of LLM-Based Social Simulation: A Transversal Analysis ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [§5](https://arxiv.org/html/2507.19364v4#S5.p1.1 "5 Towards Theory-Driven Hybrid Architectures ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Jones and Bergen (2026)
  C. R. Jones and B. K. Bergen
  Large language models pass a standard three-party turing test.
  Proceedings of the National Academy of Sciences 123 (21), pp. e2524472123.
  Cited by: [§1](https://arxiv.org/html/2507.19364v4#S1.p5.1 "1 Introduction ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [§1](https://arxiv.org/html/2507.19364v4#S1.p6.1 "1 Introduction ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [§6](https://arxiv.org/html/2507.19364v4#S6.p1.1 "6 Conclusion ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Ju et al. (2025)
  C. Ju, J. Liu, S. Sinha, H. Xue, and F. Salim
  Trajllm: a modular llm-enhanced agent-based framework for realistic human trajectory simulation.
  In Companion Proceedings of the ACM on Web Conference 2025,
  pp. 2847–2850.
  Cited by: [item 3](https://arxiv.org/html/2507.19364v4#S3.I1.i3.p1.1 "In 3.1 Platform Paradigms and the Scaling Trade-off ‣ 3 The State of LLM-Based Social Simulation: A Transversal Analysis ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [Table 1](https://arxiv.org/html/2507.19364v4#S3.T1.2.10.1.1.1 "In 3 The State of LLM-Based Social Simulation: A Transversal Analysis ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Ju et al. (2024)
  D. Ju, A. Williams, B. Karrer, and M. Nickel
  Sense and sensitivity: evaluating the simulation of social dynamics via large language models.
  arXiv preprint arXiv:2412.05093.
  External Links: [Link](https://arxiv.org/abs/2412.05093)
  Cited by: [§4.4](https://arxiv.org/html/2507.19364v4#S4.SS4.p3.1 "4.4 Interpretability Risks: Opacity and Automation Bias ‣ 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Junprung (2023)
  E. Junprung
  Exploring the intersection of large language models and agent-based modeling via prompt engineering.
  arXiv preprint arXiv:2308.07411.
  Cited by: [§3.2.2](https://arxiv.org/html/2507.19364v4#S3.SS2.SSS2.p1.1 "3.2.2 Action Planning: In-Context Reasoning and Reproducibility ‣ 3.2 Transversal Architecture Dimensions: Solutions and Structural Limits ‣ 3 The State of LLM-Based Social Simulation: A Transversal Analysis ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Karra et al. (2024)
  S. Karra, T. Nguyen, T. Ullman, R. Evans, and N. Zaslavsky
  Comparing humans and large language models on an experimental battery of theory of mind tasks.
  In Transactions of the Association for Computational Linguistics,
  pp. 803–819.
  Cited by: [§3.3.4](https://arxiv.org/html/2507.19364v4#S3.SS3.SSS4.p1.1 "3.3.4 Data Sources and Comparative Benchmarks ‣ 3.3 The Validation Landscape: From Face Validity to Multi-Level Evaluation ‣ 3 The State of LLM-Based Social Simulation: A Transversal Analysis ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [§4.2](https://arxiv.org/html/2507.19364v4#S4.SS2.p1.1 "4.2 Epistemic Risks: Hallucinations and the Fluency Fallacy ‣ 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Kirkeby-Hinrup and Stenseke (2025)
  A. Kirkeby-Hinrup and J. Stenseke
  The psychology of llm interactions: the uncanny valley and other minds.
  Journal of Psychology and AI 1 (1), pp. 2457627.
  External Links: [Document](https://dx.doi.org/10.1080/29974100.2025.2457627)
  Cited by: [§1](https://arxiv.org/html/2507.19364v4#S1.p6.1 "1 Introduction ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- La Cava and Tagarelli (2025)
  L. La Cava and A. Tagarelli
  Open models, closed minds? on agents capabilities in mimicking human personalities through open large language models.
  In Proceedings of the AAAI Conference on Artificial Intelligence,
  Vol. 39, pp. 1355–1363.
  Cited by: [item 2](https://arxiv.org/html/2507.19364v4#S3.I1.i2.p1.1 "In 3.1 Platform Paradigms and the Scaling Trade-off ‣ 3 The State of LLM-Based Social Simulation: A Transversal Analysis ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [§3.2.3](https://arxiv.org/html/2507.19364v4#S3.SS2.SSS3.p2.1 "3.2.3 Agent Persona: Demographic Prompting and behavioral Diversity ‣ 3.2 Transversal Architecture Dimensions: Solutions and Structural Limits ‣ 3 The State of LLM-Based Social Simulation: A Transversal Analysis ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [§4.3.2](https://arxiv.org/html/2507.19364v4#S4.SS3.SSS2.p2.1 "4.3.2 Safety Alignment, Preference Tuning, and Modeler Dependence ‣ 4.3 Representational Risks: Cognitive Bias, Average Persona, and Alignment ‣ 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [§6](https://arxiv.org/html/2507.19364v4#S6.p2.1 "6 Conclusion ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Laird (2012)
  J. E. Laird
  The soar cognitive architecture.
   MIT Press.
  Cited by: [§3.2.1](https://arxiv.org/html/2507.19364v4#S3.SS2.SSS1.p2.1 "3.2.1 Memory Systems: Retrieval-Augmented Memory and Long-Horizon Consistency ‣ 3.2 Transversal Architecture Dimensions: Solutions and Structural Limits ‣ 3 The State of LLM-Based Social Simulation: A Transversal Analysis ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Larooij and Törnberg (2025)
  M. Larooij and P. Törnberg
  Validation is the central challenge for generative social simulation: a critical review of llms in agent-based modeling.
  Artificial Intelligence Review 59 (1), pp. 15.
  External Links: ISSN 1573-7462,
  [Document](https://dx.doi.org/10.1007/s10462-025-11412-6),
  [Link](https://doi.org/10.1007/s10462-025-11412-6)
  Cited by: [§3.3](https://arxiv.org/html/2507.19364v4#S3.SS3.p1.1 "3.3 The Validation Landscape: From Face Validity to Multi-Level Evaluation ‣ 3 The State of LLM-Based Social Simulation: A Transversal Analysis ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [§4.4](https://arxiv.org/html/2507.19364v4#S4.SS4.p2.1 "4.4 Interpretability Risks: Opacity and Automation Bias ‣ 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [§6](https://arxiv.org/html/2507.19364v4#S6.p1.1 "6 Conclusion ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Li et al. (2025a)
  Y. Li, H. Shirado, and S. Das
  Actions speak louder than words: agent decisions reveal implicit biases in language models.
  In Proceedings of the 2025 ACM Conference on Fairness, Accountability, and Transparency,
  pp. 3303–3325.
  Cited by: [item 1](https://arxiv.org/html/2507.19364v4#S4.I9.i1.p1.1 "In 4.3.1 Pre-training Distributional Biases and the Average Persona ‣ 4.3 Representational Risks: Cognitive Bias, Average Persona, and Alignment ‣ 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [§4.3.2](https://arxiv.org/html/2507.19364v4#S4.SS3.SSS2.p3.1 "4.3.2 Safety Alignment, Preference Tuning, and Modeler Dependence ‣ 4.3 Representational Risks: Cognitive Bias, Average Persona, and Alignment ‣ 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [Table 2](https://arxiv.org/html/2507.19364v4#S4.T2.2.3.2.1.1 "In 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Li et al. (2026)
  Z. Li, Y. Wang, and Q. Wu
  The ghost of behaviorism: critical reflections on methodological limitations in the research of large language models psychology.
  Cognitive Systems Research, pp. 101445.
  External Links: [Document](https://dx.doi.org/10.1016/j.cogsys.2025.101445)
  Cited by: [§4.2](https://arxiv.org/html/2507.19364v4#S4.SS2.p2.1 "4.2 Epistemic Risks: Hallucinations and the Fluency Fallacy ‣ 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Li and Wu (2025)
  Z. Li and Q. Wu
  Let it go or control it all? the dilemma of prompt engineering in generative agent-based models.
  System Dynamics Review 41 (3), pp. e70008.
  External Links: [Document](https://dx.doi.org/10.1002/sdr.70008)
  Cited by: [§4.8.2](https://arxiv.org/html/2507.19364v4#S4.SS8.SSS2.p3.1 "4.8.2 From Prediction to Exploratory modeling: Minimum Validity Standards ‣ 4.8 Ethics in Application: Serious Games vs. Predictive Science ‣ 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [§6](https://arxiv.org/html/2507.19364v4#S6.p3.1 "6 Conclusion ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Li et al. (2025b)
  Z. Li, Z. Zhang, M. Wang, and Q. Wu
  From assistance to reliance: development and validation of the large language model dependence scale.
  International Journal of Information Management 83, pp. 102888.
  External Links: [Document](https://dx.doi.org/10.1016/j.ijinfomgt.2025.102888)
  Cited by: [§4.2](https://arxiv.org/html/2507.19364v4#S4.SS2.p5.1 "4.2 Epistemic Risks: Hallucinations and the Fluency Fallacy ‣ 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [§4.3.2](https://arxiv.org/html/2507.19364v4#S4.SS3.SSS2.p4.1 "4.3.2 Safety Alignment, Preference Tuning, and Modeler Dependence ‣ 4.3 Representational Risks: Cognitive Bias, Average Persona, and Alignment ‣ 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Liu et al. (2026)
  Q. Liu, C. Li, and W. Ma
  Generative agents for urban mobility: a cognitive framework for realistic travel behavior simulation.
  Simulation Modelling Practice and Theory 147, pp. 103234.
  External Links: ISSN 1569-190X,
  [Document](https://dx.doi.org/https%3A//doi.org/10.1016/j.simpat.2025.103234),
  [Link](https://www.sciencedirect.com/science/article/pii/S1569190X25001698)
  Cited by: [item 3](https://arxiv.org/html/2507.19364v4#S3.I1.i3.p1.1 "In 3.1 Platform Paradigms and the Scaling Trade-off ‣ 3 The State of LLM-Based Social Simulation: A Transversal Analysis ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [§3.2.5](https://arxiv.org/html/2507.19364v4#S3.SS2.SSS5.p2.1 "3.2.5 Environmental Grounding: Generative Proposals and Feasibility Constraints ‣ 3.2 Transversal Architecture Dimensions: Solutions and Structural Limits ‣ 3 The State of LLM-Based Social Simulation: A Transversal Analysis ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [§6](https://arxiv.org/html/2507.19364v4#S6.p2.1 "6 Conclusion ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Liu et al. (2025a)
  X. Liu, Z. Wei, R. S. Baker, S. J. Metcalf, J. Zhang, A. Barany, S. Slater, L. Swanson, and D. J. Gagnon
  Integrating large language models and machine learning to detect struggle in educational games.
  In International Conference on Artificial Intelligence in Education,
  pp. 398–405.
  Cited by: [§4.8.1](https://arxiv.org/html/2507.19364v4#S4.SS8.SSS1.p1.1 "4.8.1 Interactive Environments and Serious Games ‣ 4.8 Ethics in Application: Serious Games vs. Predictive Science ‣ 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Liu et al. (2025b)
  Y. Liu, X. Liao, H. Ma, J. Liu, R. Jadhav, and J. Ma
  MobiVerse: scaling urban mobility simulation with hybrid lightweight domain-specific generator and large language models.
  In 2025 IEEE 28th International Conference on Intelligent Transportation Systems (ITSC),
  pp. 1547–1553.
  Cited by: [item 3](https://arxiv.org/html/2507.19364v4#S3.I1.i3.p1.1 "In 3.1 Platform Paradigms and the Scaling Trade-off ‣ 3 The State of LLM-Based Social Simulation: A Transversal Analysis ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Lu et al. (2024)
  Y. Lu, A. Aleta, C. Du, L. Shi, and Y. Moreno
  LLMs and generative agent-based models for complex systems research.
  Physics of Life Reviews.
  Cited by: [§4.8.2](https://arxiv.org/html/2507.19364v4#S4.SS8.SSS2.p2.1 "4.8.2 From Prediction to Exploratory modeling: Minimum Validity Standards ‣ 4.8 Ethics in Application: Serious Games vs. Predictive Science ‣ 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [§4](https://arxiv.org/html/2507.19364v4#S4.p1.1 "4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [§6](https://arxiv.org/html/2507.19364v4#S6.p3.1 "6 Conclusion ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Mou et al. (2026)
  X. Mou, X. Ding, Q. He, L. Wang, J. Liang, X. Zhang, L. Sun, J. Lin, J. Zhou, H. Xuanjing, and Z. Wei
  From individual to society: a survey on social simulation driven by large language model-based agents.
  ACM Comput. Surv. 58 (11).
  External Links: ISSN 0360-0300,
  [Link](https://doi.org/10.1145/3800683),
  [Document](https://dx.doi.org/10.1145/3800683)
  Cited by: [§4.7](https://arxiv.org/html/2507.19364v4#S4.SS7.p1.1 "4.7 Behavioral Perturbation, Adversarial Dynamics, and Scientific Instability ‣ 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Nangia et al. (2020)
  N. Nangia, C. Andrus, and S. R. Bowman
  Crows-pairs: a challenge dataset for measuring social biases in masked language models.
  In Proceedings of the 2020 Conference on Empirical Methods in Natural Language Processing (EMNLP),
  pp. 1953–1967.
  Cited by: [§3.3.4](https://arxiv.org/html/2507.19364v4#S3.SS3.SSS4.p1.1 "3.3.4 Data Sources and Comparative Benchmarks ‣ 3.3 The Validation Landscape: From Face Validity to Multi-Level Evaluation ‣ 3 The State of LLM-Based Social Simulation: A Transversal Analysis ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Nudo et al. (2026)
  J. Nudo, M. E. Pandolfo, E. Loru, M. Samory, M. Cinelli, and W. Quattrociocchi
  Generative exaggeration in llm social agents: consistency, bias, and toxicity.
  Online Social Networks and Media 51, pp. 100344.
  External Links: ISSN 2468-6964,
  [Document](https://dx.doi.org/https%3A//doi.org/10.1016/j.osnem.2025.100344),
  [Link](https://www.sciencedirect.com/science/article/pii/S246869642500045X)
  Cited by: [§3.2.3](https://arxiv.org/html/2507.19364v4#S3.SS2.SSS3.p2.1 "3.2.3 Agent Persona: Demographic Prompting and behavioral Diversity ‣ 3.2 Transversal Architecture Dimensions: Solutions and Structural Limits ‣ 3 The State of LLM-Based Social Simulation: A Transversal Analysis ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [§4.3.1](https://arxiv.org/html/2507.19364v4#S4.SS3.SSS1.p3.1 "4.3.1 Pre-training Distributional Biases and the Average Persona ‣ 4.3 Representational Risks: Cognitive Bias, Average Persona, and Alignment ‣ 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [Table 2](https://arxiv.org/html/2507.19364v4#S4.T2.2.4.2.1.1 "In 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Ouyang et al. (2022)
  L. Ouyang, J. Wu, X. Jiang, D. Almeida, C. Wainwright, P. Mishkin, C. Zhang, S. Agarwal, K. Slama, A. Ray, et al.
  Training language models to follow instructions with human feedback.
  Advances in Neural Information Processing Systems 35, pp. 27730–27744.
  Cited by: [§1](https://arxiv.org/html/2507.19364v4#S1.p2.1 "1 Introduction ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Park et al. (2023)
  J. S. Park, J. O’Brien, C. J. Cai, M. R. Morris, P. Liang, and M. S. Bernstein
  Generative agents: interactive simulacra of human behavior.
  In Proceedings of the 36th Annual ACM Symposium on User Interface Software and Technology,
  pp. 1–22.
  Cited by: [§1](https://arxiv.org/html/2507.19364v4#S1.p3.1 "1 Introduction ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [§1](https://arxiv.org/html/2507.19364v4#S1.p6.1 "1 Introduction ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [item 1](https://arxiv.org/html/2507.19364v4#S3.I1.i1.p1.1 "In 3.1 Platform Paradigms and the Scaling Trade-off ‣ 3 The State of LLM-Based Social Simulation: A Transversal Analysis ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [§3.2.1](https://arxiv.org/html/2507.19364v4#S3.SS2.SSS1.p1.1 "3.2.1 Memory Systems: Retrieval-Augmented Memory and Long-Horizon Consistency ‣ 3.2 Transversal Architecture Dimensions: Solutions and Structural Limits ‣ 3 The State of LLM-Based Social Simulation: A Transversal Analysis ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [§3.2](https://arxiv.org/html/2507.19364v4#S3.SS2.p1.1 "3.2 Transversal Architecture Dimensions: Solutions and Structural Limits ‣ 3 The State of LLM-Based Social Simulation: A Transversal Analysis ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [Table 1](https://arxiv.org/html/2507.19364v4#S3.T1.2.2.1.1.1 "In 3 The State of LLM-Based Social Simulation: A Transversal Analysis ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [item 2](https://arxiv.org/html/2507.19364v4#S4.I10.i2.p1.1 "In 4.5 Temporal Dynamics: Degradation Regimes and Characteristic Timescales ‣ 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [§5.1](https://arxiv.org/html/2507.19364v4#S5.SS1.p4.1 "5.1 Coupling Modes: LLM-as-Subroutine vs. LLM-as-Policy ‣ 5 Towards Theory-Driven Hybrid Architectures ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [§6](https://arxiv.org/html/2507.19364v4#S6.p2.1 "6 Conclusion ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Piao et al. (2025)
  J. Piao, Y. Yan, J. Zhang, N. Li, J. Yan, X. Lan, Z. Lu, Z. Zheng, J. Y. Wang, D. Zhou, et al.
  AgentSociety: large-scale simulation of llm-driven generative agents advances understanding of human behaviors and society.
  arXiv preprint arXiv:2502.08691.
  External Links: [Link](https://arxiv.org/abs/2502.08691)
  Cited by: [item 2](https://arxiv.org/html/2507.19364v4#S3.I1.i2.p1.1 "In 3.1 Platform Paradigms and the Scaling Trade-off ‣ 3 The State of LLM-Based Social Simulation: A Transversal Analysis ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [§3.2.1](https://arxiv.org/html/2507.19364v4#S3.SS2.SSS1.p1.1 "3.2.1 Memory Systems: Retrieval-Augmented Memory and Long-Horizon Consistency ‣ 3.2 Transversal Architecture Dimensions: Solutions and Structural Limits ‣ 3 The State of LLM-Based Social Simulation: A Transversal Analysis ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [§3.3.1](https://arxiv.org/html/2507.19364v4#S3.SS3.SSS1.p1.1 "3.3.1 Empirical Validation and Benchmarking ‣ 3.3 The Validation Landscape: From Face Validity to Multi-Level Evaluation ‣ 3 The State of LLM-Based Social Simulation: A Transversal Analysis ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [Table 1](https://arxiv.org/html/2507.19364v4#S3.T1.2.3.1.1.1 "In 3 The State of LLM-Based Social Simulation: A Transversal Analysis ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [§4.6](https://arxiv.org/html/2507.19364v4#S4.SS6.p2.1 "4.6 Computational Constraints and Scalability ‣ 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [§5.1](https://arxiv.org/html/2507.19364v4#S5.SS1.p4.1 "5.1 Coupling Modes: LLM-as-Subroutine vs. LLM-as-Policy ‣ 5 Towards Theory-Driven Hybrid Architectures ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [§6](https://arxiv.org/html/2507.19364v4#S6.p2.1 "6 Conclusion ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Reber and Schwarz (1999)
  R. Reber and N. Schwarz
  Effects of perceptual fluency on judgments of truth.
  Consciousness and Cognition 8 (3), pp. 338–342.
  External Links: [Document](https://dx.doi.org/10.1006/ccog.1999.0386)
  Cited by: [§4.2](https://arxiv.org/html/2507.19364v4#S4.SS2.p2.1 "4.2 Epistemic Risks: Hallucinations and the Fluency Fallacy ‣ 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Sanh et al. (2021)
  V. Sanh, A. Webson, C. Raffel, S. H. Bach, L. Sutawika, Z. Alyafeai, A. Chaffin, A. Stiegler, T. L. Scao, A. Raja, et al.
  Multitask prompted training enables zero-shot task generalization.
  arXiv preprint arXiv:2110.08207.
  Cited by: [§1](https://arxiv.org/html/2507.19364v4#S1.p2.1 "1 Introduction ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Santurkar et al. (2023)
  S. Santurkar, E. Durmus, F. Ladhak, C. Lee, P. Liang, and T. Hashimoto
  Whose opinions do language models reflect?.
  In Proceedings of the 40th International Conference on Machine Learning, A. Krause, E. Brunskill, K. Cho, B. Engelhardt, S. Sabato, and J. Scarlett (Eds.),
  Proceedings of Machine Learning Research, Vol. 202, pp. 29971–30004.
  External Links: [Link](https://proceedings.mlr.press/v202/santurkar23a.html)
  Cited by: [§4.3.1](https://arxiv.org/html/2507.19364v4#S4.SS3.SSS1.p1.1 "4.3.1 Pre-training Distributional Biases and the Average Persona ‣ 4.3 Representational Risks: Cognitive Bias, Average Persona, and Alignment ‣ 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Sap et al. (2019)
  M. Sap, S. Gabriel, Y. Choi, Y. Boureau, and C. D. Manning
  Social iqa: commonsense reasoning about social interactions.
  In Proceedings of the 2019 Conference on Empirical Methods in Natural Language Processing and the 9th International Joint Conference on Natural Language Processing (EMNLP-IJCNLP),
  pp. 4465–4476.
  Cited by: [§3.3.4](https://arxiv.org/html/2507.19364v4#S3.SS3.SSS4.p1.1 "3.3.4 Data Sources and Comparative Benchmarks ‣ 3.3 The Validation Landscape: From Face Validity to Multi-Level Evaluation ‣ 3 The State of LLM-Based Social Simulation: A Transversal Analysis ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Scalco et al. (2018)
  A. Scalco, A. Ceschi, and R. Sartori
  Application of psychological theories in agent-based modeling: the case of the theory of planned behavior.
  Nonlinear Dynamics, Psychology, and Life Sciences 22 (1), pp. 15–33.
  Cited by: [§5.2](https://arxiv.org/html/2507.19364v4#S5.SS2.p2.1 "5.2 behavioral Alignment with Empirical Data and Theory-Driven Scaffolding ‣ 5 Towards Theory-Driven Hybrid Architectures ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Sharma et al. (2023)
  M. Sharma, M. Tong, T. Korbak, D. Duvenaud, A. Askell, S. R. Bowman, N. Cheng, E. Durmus, Z. Hatfield-Dodds, S. R. Johnston, et al.
  Towards understanding sycophancy in language models.
  arXiv preprint arXiv:2310.13548.
  Cited by: [§4.3.2](https://arxiv.org/html/2507.19364v4#S4.SS3.SSS2.p3.1 "4.3.2 Safety Alignment, Preference Tuning, and Modeler Dependence ‣ 4.3 Representational Risks: Cognitive Bias, Average Persona, and Alignment ‣ 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [Table 2](https://arxiv.org/html/2507.19364v4#S4.T2.2.3.2.1.1 "In 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Shi et al. (2026)
  J. Shi, C. K. Frantz, C. Kimmich, S. Siddiki, and A. Sarkar
  LLM-augmented empirical game theoretic simulation for socio-ecological systems.
  In Proceedings of the 25th International Conference on Autonomous Agents and Multiagent Systems (AAMAS 2026),
  pp. 1601–1609.
  External Links: [Document](https://dx.doi.org/10.65109/SEWU4006)
  Cited by: [§5.1](https://arxiv.org/html/2507.19364v4#S5.SS1.p2.1 "5.1 Coupling Modes: LLM-as-Subroutine vs. LLM-as-Policy ‣ 5 Towards Theory-Driven Hybrid Architectures ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Simhi et al. (2025)
  A. Simhi, I. Itzhak, F. Barez, G. Stanovsky, and Y. Belinkov
  Trust me, i’m wrong: high-certainty hallucinations in llms.
  arXiv preprint arXiv:2502.12964.
  Cited by: [§4.4](https://arxiv.org/html/2507.19364v4#S4.SS4.p1.1 "4.4 Interpretability Risks: Opacity and Automation Bias ‣ 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Steyvers et al. (2024)
  M. Steyvers, H. Tejeda, A. Kumar, et al.
  What large language models know and what people think they know.
  Nature Machine Intelligence.
  Cited by: [§4.2](https://arxiv.org/html/2507.19364v4#S4.SS2.p2.1 "4.2 Epistemic Risks: Hallucinations and the Fluency Fallacy ‣ 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [Table 2](https://arxiv.org/html/2507.19364v4#S4.T2.2.5.2.1.1 "In 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [§6](https://arxiv.org/html/2507.19364v4#S6.p1.1 "6 Conclusion ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Strachan et al. (2024)
  J. W. A. Strachan, D. Albergo, G. Borghini, O. Pansardi, E. Scaliti, S. Gupta, K. Saxena, A. Rufo, S. Panzeri, G. Manzi, et al.
  Testing theory of mind in large language models and humans.
  Nature Human Behaviour 8 (7), pp. 1285–1295.
  External Links: [Document](https://dx.doi.org/10.1038/s41562-024-01882-z)
  Cited by: [§4.2](https://arxiv.org/html/2507.19364v4#S4.SS2.p1.1 "4.2 Epistemic Risks: Hallucinations and the Fluency Fallacy ‣ 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Taillandier et al. (2019a)
  P. Taillandier, B. Gaudou, A. Grignard, Q. Huynh, N. Marilleau, P. Caillou, D. Philippon, and A. Drogoul
  Building, composing and experimenting complex spatial models with the gama platform.
  GeoInformatica 23, pp. 299–322.
  Cited by: [§5](https://arxiv.org/html/2507.19364v4#S5.p1.1 "5 Towards Theory-Driven Hybrid Architectures ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [§6](https://arxiv.org/html/2507.19364v4#S6.p4.1 "6 Conclusion ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Taillandier et al. (2019b)
  P. Taillandier, A. Grignard, N. Marilleau, D. Philippon, Q. N. Huynh, B. Gaudou, and A. Drogoul
  Participatory modeling and simulation with the gama platform.
  Journal of Artificial Societies and Social Simulation 22 (2).
  External Links: [Document](https://dx.doi.org/10.18564/jasss.3993)
  Cited by: [§4.8.1](https://arxiv.org/html/2507.19364v4#S4.SS8.SSS1.p1.1 "4.8.1 Interactive Environments and Serious Games ‣ 4.8 Ethics in Application: Serious Games vs. Predictive Science ‣ 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Tang et al. (2025)
  J. Tang, H. Gao, X. Pan, L. Wang, H. Tan, D. Gao, Y. Chen, X. Chen, Y. Lin, Y. Li, et al.
  GenSim: a general social simulation platform with large language model based agents.
  In Proceedings of the 2025 Conference of the Nations of the Americas Chapter of the Association for Computational Linguistics: Human Language Technologies (System Demonstrations),
  pp. 143–150.
  Cited by: [item 1](https://arxiv.org/html/2507.19364v4#S3.I1.i1.p1.1 "In 3.1 Platform Paradigms and the Scaling Trade-off ‣ 3 The State of LLM-Based Social Simulation: A Transversal Analysis ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [Table 1](https://arxiv.org/html/2507.19364v4#S3.T1.2.4.1.1.1 "In 3 The State of LLM-Based Social Simulation: A Transversal Analysis ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [item 2](https://arxiv.org/html/2507.19364v4#S4.I10.i2.p1.1 "In 4.5 Temporal Dynamics: Degradation Regimes and Characteristic Timescales ‣ 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Thérond et al. (2014)
  O. Thérond, C. Sibertin-Blanc, R. Lardy, B. Gaudou, M. Balestrat, Y. Hong, T. Louail, D. Panzoli, J. Sanchez-Perez, S. Sauvage, P. Taillandier, M. Vavasseur, and P. Mazzega
  Integrated modelling of social-ecological systems: the MAELIA high-resolution multi-agent platform for water management assessment.
  Environmental Modelling & Software 54, pp. 140–158.
  External Links: [Document](https://dx.doi.org/10.1016/j.envsoft.2013.12.014)
  Cited by: [§5.3](https://arxiv.org/html/2507.19364v4#S5.SS3.p2.1 "5.3 Conceptual Example: Theory-Driven Coupling in Agricultural Irrigation ‣ 5 Towards Theory-Driven Hybrid Architectures ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Ullman (2023)
  T. Ullman
  Large language models fail on trivial alterations to theory-of-mind tasks.
  arXiv preprint arXiv:2302.08399.
  External Links: [Link](https://arxiv.org/abs/2302.08399)
  Cited by: [§4.2](https://arxiv.org/html/2507.19364v4#S4.SS2.p1.1 "4.2 Epistemic Risks: Hallucinations and the Fluency Fallacy ‣ 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [§6](https://arxiv.org/html/2507.19364v4#S6.p1.1 "6 Conclusion ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Vaswani et al. (2017)
  A. Vaswani, N. Shazeer, N. Parmar, J. Uszkoreit, L. Jones, A. N. Gomez, Ł. Kaiser, and I. Polosukhin
  Attention is all you need.
  Advances in Neural Information Processing Systems 30.
  Cited by: [§1](https://arxiv.org/html/2507.19364v4#S1.p1.1 "1 Introduction ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Vezhnevets et al. (2023)
  A. S. Vezhnevets, J. P. Agapiou, A. Aharon, R. Ziv, J. Matyas, E. A. Duéñez-Guzmán, W. A. Cunningham, S. Osindero, D. Karmon, and J. Z. Leibo
  Generative agent-based modeling with actions grounded in physical, social, or digital space using concordia.
  arXiv preprint arXiv:2312.03664.
  External Links: 2312.03664,
  [Link](https://arxiv.org/abs/2312.03664)
  Cited by: [§3.2.5](https://arxiv.org/html/2507.19364v4#S3.SS2.SSS5.p2.1 "3.2.5 Environmental Grounding: Generative Proposals and Feasibility Constraints ‣ 3.2 Transversal Architecture Dimensions: Solutions and Structural Limits ‣ 3 The State of LLM-Based Social Simulation: A Transversal Analysis ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Wang et al. (2025)
  A. Wang, J. Morgenstern, and J. P. Dickerson
  Large language models that replace human participants can harmfully misportray and flatten identity groups.
  Nature Machine Intelligence 7 (3), pp. 400–411.
  Cited by: [item 2](https://arxiv.org/html/2507.19364v4#S4.I9.i2.p1.1 "In 4.3.1 Pre-training Distributional Biases and the Average Persona ‣ 4.3 Representational Risks: Cognitive Bias, Average Persona, and Alignment ‣ 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [§4.3.1](https://arxiv.org/html/2507.19364v4#S4.SS3.SSS1.p2.1 "4.3.1 Pre-training Distributional Biases and the Average Persona ‣ 4.3 Representational Risks: Cognitive Bias, Average Persona, and Alignment ‣ 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [Table 2](https://arxiv.org/html/2507.19364v4#S4.T2.2.2.2.1.1 "In 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Wang et al. (2024a)
  L. Wang, C. Ma, X. Feng, Z. Zhang, H. Yang, J. Zhang, Z. Chen, J. Tang, X. Chen, Y. Lin, et al.
  A survey on large language model based autonomous agents.
  Frontiers of Computer Science 18 (6), pp. 186345.
  Cited by: [§3.2.1](https://arxiv.org/html/2507.19364v4#S3.SS2.SSS1.p1.1 "3.2.1 Memory Systems: Retrieval-Augmented Memory and Long-Horizon Consistency ‣ 3.2 Transversal Architecture Dimensions: Solutions and Structural Limits ‣ 3 The State of LLM-Based Social Simulation: A Transversal Analysis ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [§3.2.4](https://arxiv.org/html/2507.19364v4#S3.SS2.SSS4.p1.1 "3.2.4 Inter-Agent Communication: Natural Language and Information Propagation ‣ 3.2 Transversal Architecture Dimensions: Solutions and Structural Limits ‣ 3 The State of LLM-Based Social Simulation: A Transversal Analysis ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [§3.2](https://arxiv.org/html/2507.19364v4#S3.SS2.p1.1 "3.2 Transversal Architecture Dimensions: Solutions and Structural Limits ‣ 3 The State of LLM-Based Social Simulation: A Transversal Analysis ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Wang et al. (2024b)
  Y. Wang, M. Wang, M. A. Manzoor, F. Liu, G. N. Georgiev, R. J. Das, and P. Nakov
  Factuality of large language models: a survey.
  In Proceedings of the 2024 Conference on Empirical Methods in Natural Language Processing,
  pp. 19519–19529.
  Cited by: [§1](https://arxiv.org/html/2507.19364v4#S1.p1.1 "1 Introduction ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [§4.2](https://arxiv.org/html/2507.19364v4#S4.SS2.p1.1 "4.2 Epistemic Risks: Hallucinations and the Fluency Fallacy ‣ 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Wei et al. (2021)
  J. Wei, M. Bosma, V. Y. Zhao, K. Guu, A. W. Yu, B. Lester, N. Du, A. M. Dai, and Q. V. Le
  Finetuned language models are zero-shot learners.
  arXiv preprint arXiv:2109.01652.
  Cited by: [§1](https://arxiv.org/html/2507.19364v4#S1.p2.1 "1 Introduction ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Wu et al. (2026)
  Z. Wu, R. Peng, T. Ito, M. Onizuka, and C. Xiao
  LLM-based social simulations require a boundary.
  In Proceedings of the 43rd International Conference on Machine Learning (ICML 2026),
  Proceedings of Machine Learning Research, Vol. 306, pp. 172625–172648.
  Cited by: [item 2](https://arxiv.org/html/2507.19364v4#S3.I1.i2.p1.1 "In 3.1 Platform Paradigms and the Scaling Trade-off ‣ 3 The State of LLM-Based Social Simulation: A Transversal Analysis ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [§3.3.3](https://arxiv.org/html/2507.19364v4#S3.SS3.SSS3.p1.1 "3.3.3 Robustness and Specialized Evaluation ‣ 3.3 The Validation Landscape: From Face Validity to Multi-Level Evaluation ‣ 3 The State of LLM-Based Social Simulation: A Transversal Analysis ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [item 3](https://arxiv.org/html/2507.19364v4#S4.I10.i3.p1.1 "In 4.5 Temporal Dynamics: Degradation Regimes and Characteristic Timescales ‣ 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [item 1](https://arxiv.org/html/2507.19364v4#S4.I9.i1.p1.1 "In 4.3.1 Pre-training Distributional Biases and the Average Persona ‣ 4.3 Representational Risks: Cognitive Bias, Average Persona, and Alignment ‣ 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [§4.5](https://arxiv.org/html/2507.19364v4#S4.SS5.p1.1 "4.5 Temporal Dynamics: Degradation Regimes and Characteristic Timescales ‣ 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [§4.5](https://arxiv.org/html/2507.19364v4#S4.SS5.p3.2 "4.5 Temporal Dynamics: Degradation Regimes and Characteristic Timescales ‣ 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [§4.6](https://arxiv.org/html/2507.19364v4#S4.SS6.p2.1 "4.6 Computational Constraints and Scalability ‣ 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [§4.8.2](https://arxiv.org/html/2507.19364v4#S4.SS8.SSS2.p2.1 "4.8.2 From Prediction to Exploratory modeling: Minimum Validity Standards ‣ 4.8 Ethics in Application: Serious Games vs. Predictive Science ‣ 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [Table 2](https://arxiv.org/html/2507.19364v4#S4.T2.2.2.2.1.1 "In 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [Table 2](https://arxiv.org/html/2507.19364v4#S4.T2.2.8.2.1.1 "In 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [§6](https://arxiv.org/html/2507.19364v4#S6.p2.1 "6 Conclusion ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Xia et al. (2024)
  Y. Xia, J. Kim, Y. Chen, H. Ye, S. Kundu, C. C. Hao, and N. Talati
  Understanding the performance and estimating the cost of llm fine-tuning.
  In 2024 IEEE International Symposium on Workload Characterization (IISWC),
  pp. 210–223.
  Cited by: [§4.6](https://arxiv.org/html/2507.19364v4#S4.SS6.p1.1 "4.6 Computational Constraints and Scalability ‣ 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Yang et al. (2026)
  S. Yang, L. Ceferino, Y. Zhang, C. Gu, T. Guo, and G. Kondo
  When agents learn to think: large language model-enhanced agent-based modeling for crowd evacuation in disaster scenarios.
  Reliability Engineering & System Safety 269, pp. 112056.
  External Links: [Document](https://dx.doi.org/10.1016/j.ress.2025.112056)
  Cited by: [§3.2.5](https://arxiv.org/html/2507.19364v4#S3.SS2.SSS5.p2.1 "3.2.5 Environmental Grounding: Generative Proposals and Feasibility Constraints ‣ 3.2 Transversal Architecture Dimensions: Solutions and Structural Limits ‣ 3 The State of LLM-Based Social Simulation: A Transversal Analysis ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [§5.1](https://arxiv.org/html/2507.19364v4#S5.SS1.p2.1 "5.1 Coupling Modes: LLM-as-Subroutine vs. LLM-as-Policy ‣ 5 Towards Theory-Driven Hybrid Architectures ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Zeng et al. (2025)
  Y. Zeng, C. Brown, J. Raymond, M. Byari, R. Hotz, and M. Rounsevell
  Exploring the opportunities and challenges of using large language models to represent institutional agency in land system modelling.
  Earth System Dynamics 16 (2), pp. 423–449.
  External Links: [Document](https://dx.doi.org/10.5194/esd-16-423-2025)
  Cited by: [item 3](https://arxiv.org/html/2507.19364v4#S3.I1.i3.p1.1 "In 3.1 Platform Paradigms and the Scaling Trade-off ‣ 3 The State of LLM-Based Social Simulation: A Transversal Analysis ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [§3.2.5](https://arxiv.org/html/2507.19364v4#S3.SS2.SSS5.p2.1 "3.2.5 Environmental Grounding: Generative Proposals and Feasibility Constraints ‣ 3.2 Transversal Architecture Dimensions: Solutions and Structural Limits ‣ 3 The State of LLM-Based Social Simulation: A Transversal Analysis ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [Table 1](https://arxiv.org/html/2507.19364v4#S3.T1.2.9.1.1.1 "In 3 The State of LLM-Based Social Simulation: A Transversal Analysis ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Zhang et al. (2022)
  J. Zhang, M. Wiegand, and J. Hogan
  Evaluating consistency and robustness of state-of-the-art language models.
  Transactions of the Association for Computational Linguistics 10, pp. 203–219.
  Cited by: [§3.3.4](https://arxiv.org/html/2507.19364v4#S3.SS3.SSS4.p1.1 "3.3.4 Data Sources and Comparative Benchmarks ‣ 3.3 The Validation Landscape: From Face Validity to Multi-Level Evaluation ‣ 3 The State of LLM-Based Social Simulation: A Transversal Analysis ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Zhang et al. (2025a)
  L. Zhang, Y. Hu, W. Li, Q. Bai, and P. Nand
  LLM-aidsim: llm-enhanced agent-based influence diffusion simulation in social networks.
  Systems 13 (1), pp. 29.
  External Links: [Document](https://dx.doi.org/10.3390/systems13010029)
  Cited by: [item 3](https://arxiv.org/html/2507.19364v4#S3.I1.i3.p1.1 "In 3.1 Platform Paradigms and the Scaling Trade-off ‣ 3 The State of LLM-Based Social Simulation: A Transversal Analysis ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Zhang et al. (2025b)
  X. Zhang, J. Lin, X. Mou, S. Yang, X. Liu, L. Sun, H. Lyu, Y. Yang, W. Qi, Y. Chen, G. Li, L. Yan, Y. Hu, S. Chen, Y. Wang, X. Huang, J. Luo, S. Tang, L. Wu, B. Zhou, and Z. Wei
  SocioVerse: a world model for social simulation powered by llm agents and a pool of 10 million real-world users.
  arXiv preprint arXiv:2504.10157.
  External Links: [Link](https://arxiv.org/abs/2504.10157)
  Cited by: [item 2](https://arxiv.org/html/2507.19364v4#S3.I1.i2.p1.1 "In 3.1 Platform Paradigms and the Scaling Trade-off ‣ 3 The State of LLM-Based Social Simulation: A Transversal Analysis ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [§3.3.2](https://arxiv.org/html/2507.19364v4#S3.SS3.SSS2.p1.1 "3.3.2 Human-in-the-Loop Evaluation ‣ 3.3 The Validation Landscape: From Face Validity to Multi-Level Evaluation ‣ 3 The State of LLM-Based Social Simulation: A Transversal Analysis ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation"),
  [Table 1](https://arxiv.org/html/2507.19364v4#S3.T1.2.7.1.1.1 "In 3 The State of LLM-Based Social Simulation: A Transversal Analysis ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
- Zou et al. (2023)
  A. Zou, Z. Wang, N. Carlini, M. Nasr, J. Z. Kolter, and M. Fredrikson
  Universal and transferable adversarial attacks on aligned language models.
  arXiv preprint.
  External Links: 2307.15043,
  [Link](https://arxiv.org/abs/2307.15043)
  Cited by: [§4.7](https://arxiv.org/html/2507.19364v4#S4.SS7.p1.1 "4.7 Behavioral Perturbation, Adversarial Dynamics, and Scientific Instability ‣ 4 The Micro-to-Macro Validity Gap: Critical Challenges ‣ From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities and Pitfalls of LLMs in Social Simulation").
