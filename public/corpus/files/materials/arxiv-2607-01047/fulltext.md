---
id: arxiv-2607-01047-text
type: material
title: 'Conversable Complexity: Agentic LLM Collectives as Interpretable Substrates'
work_id: arxiv-2607-01047
source_url: https://arxiv.org/html/2607.01047v1
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять
  с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.
language: original
sha256_text: 23a5946a6c90a00cbbd5d446043fe74b811d92782c76f7ea9984e1fbd7cfba5a
---

> Источник: [https://arxiv.org/html/2607.01047v1](https://arxiv.org/html/2607.01047v1). Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.

# Conversable Complexity: Agentic LLM Collectives as Interpretable Substrates

Elias Najarro
Affiliation: IT University of Copenhagen, Denmark
  
Ane Espeseth
Affiliation: University of Oslo, Norway
  
Eleni Nisioti
Affiliation: IT University of Copenhagen, Denmark
  
Sebastian Risi
Affiliation: IT University of Copenhagen, Denmark
Affiliation: Sakana AI, Japan
  
Stefano Nichele
Affiliation: Østfold University of Applied Sciences, Norway

Biological ComplexityGood Old-FashionedArtificial LifeComplexand interpretableBasic Unit ComplexityhighEmergent ComplexityhighlowhighBoidsSugarscapeCA & LeniaAvidaBrainFuckNeural CASims creaturesKilobotsEvol. roboticsSoft robotsProtocellsAutocatalytic setsXenobotsTerraLinguaAgents of ChaosMoltbookSpore.funInterpretabilitySoftHardWetAgentic


Figure 1: Agentic LLM collectives as a new substrate for Artificial
Life. ALife has long studied life-like phenomena in computational, physical,
and biochemical substrates—soft, hard, and wet. We argue for a fourth class: collectives of
*agentic* LLMs, language models endowed with persistent memory, access to a shared self-extensible pool of tools and skills, and the capacity to act unprompted (left). Their units are individually complex, yet because the agents interact in natural language the collective remains open to inspection. This places the agentic substrate in a region few substrates reach: complex yet interpretable (right).

Abstract

Complexity and interpretability rarely coincide: systems rich enough for complex behaviours to emerge are usually too opaque to question, while transparent ones are too simple for anything complex to emerge. A single large language model (LLM) is a static artefact, hardly exhibiting any of the emergent properties we associate with life. This changes through interaction: populations of LLMs display emergent dynamics absent from isolated models. Furthermore, LLMs can be endowed with persistent memory, tools and shared skills, and the capacity to initiate actions unprompted, i.e., turning LLMs *agentic*. In this paper, we argue that such collectives of agents can serve as a computational substrate for Artificial Life (ALife) research. Critically, since the agents communicate in natural language, their collective behaviour can be directly interrogated by examining textual traces and asking the agents themselves. We outline the notion of interpretability in language-model research and extend it for collectives of agents. Lastly, we survey recent examples of agentic LLM collectives that already instantiate the idea of agentic substrates, from controlled experiments to deployments in the wild.

## Introduction

LLM collectives have become a popular modelling approach in computational social science (CSS), where they are widely used to investigate social phenomena such as opinion dynamics and social polarisation ([Grossmann et al., 2023](https://arxiv.org/html/2607.01047v1#bib.bib7); [Ashery et al., 2025](https://arxiv.org/html/2607.01047v1#bib.bib8)).
The modelling approach typically starts from a dataset that holds the social dynamics that the LLM collective is meant to reproduce or statistically account for.

In this regard, CSS uses LLM collectives in a top-down manner to explain *existing* social phenomena, much as biology is top-down in seeking to understand *existing* organisms.
On the other hand, Artificial Life (ALife) typically follows a bottom-up epistemic approach. Rather than accounting for one particular system, ALife asks which properties of a computational substrate make it life-like: which properties give rise, in a bottom-up manner, to the emergence of structural and functional complexity [Bedau (2003)](https://arxiv.org/html/2607.01047v1#bib.bib64). Its value is explanatory: a market bubble, a migration wave, or a shared convention can be investigated by testing whether simple local interactions suffice to grow it, and then perturbing those interactions to isolate which conditions drive it. In this paper we pursue this bottom-up perspective, studying collectives of LLM-based agents as a substrate for ALife research.

We begin from the premise that LLMs, taken in isolation, are not inherently life-like. An isolated LLM is an inert artefact: a complex but largely static model produced through top-down engineering. A central argument of this paper is that the situation changes when many such models interact. Collectives of LLM-based agents can exhibit dynamics that are central to ALife ([Nisioti et al., 2024a](https://arxiv.org/html/2607.01047v1#bib.bib29); [Nisioti et al., 2024b](https://arxiv.org/html/2607.01047v1#bib.bib27)), including adaptation, coordination, norm formation, and cultural transmission. In this view, the life-like properties emerge not from the individual model, but from the interactions among agents when placed in a shared environment.

A useful analogy is that of biological cells in multicellular organisms. Each cell contains enormous internal complexity, yet at the level of the organism this complexity is abstracted away. Cells become components in a larger collective whose behaviour depends primarily on patterns of interaction. LLM agents can be viewed similarly. While their internal mechanisms remain complex and opaque, they can be treated as interacting units within a higher-level dynamical system. The focus therefore shifts from the architecture of a single model to the collective processes that emerge between models.

In the spirit of classical artificial societies ([Epstein and Axtell, 1996](https://arxiv.org/html/2607.01047v1#bib.bib26)), LLMs have been used to study diverse aspects of collective behaviour ([Burton et al., 2024](https://arxiv.org/html/2607.01047v1#bib.bib28)). By contrast to that line of work, we emphasise here the relevance of the *agentic* aspect of the substrate’s constitutive units. We use “agentic” to denote a computational unit in which an LLM is endowed with persistent memory, tool use, and self-directedness. Persistent memory and tools let the unit *externalise cognition*—offloading cognitive mechanisms onto external structure and providing a substrate for culture—while self-directedness lets it act beyond purely reactive behaviour, for instance choosing on its own to take an action or to explore in some direction without being explicitly prompted.

In this perspective paper, we treat the agentic LLM as the basic computational unit of a substrate. We argue that collectives of such units provide an experimental testbed for bottom-up exploration and hypothesis testing of which properties—such as autonomy, self-modification, cognitive architecture, symbiogenesis, and resource constraints—are important for life-like behaviour to emerge.
Critically, because interaction is mediated through natural language, this substrate is also interpretable, making collective dynamics directly accessible to observation.

##### What constitutes a good testbed?

We propose that a substrate has high potential as an experimental testbed for ALife research to the extent that it satisfies five properties drawn from three traditions. In the philosophy of model organisms ([Ankeny and Leonelli, 2020](https://arxiv.org/html/2607.01047v1#bib.bib21); [Leonelli, 2016](https://arxiv.org/html/2607.01047v1#bib.bib22)), we inherit the requirement that the substrate has (i) a clearly stated representational target and scope: which phenomena the substrate is meant to illuminate, and to which other systems the results are expected to transfer; and (ii) standardisation sufficient for cross-laboratory comparability across runs. From the philosophy of computer simulation ([Winsberg, 2010](https://arxiv.org/html/2607.01047v1#bib.bib23); [Weisberg, 2013](https://arxiv.org/html/2607.01047v1#bib.bib24)), we inherit (iii) the requirement that emergent results are distinguishable from artefacts: we can only make claims about a phenomenon observed in the substrate if it is robust to variation of incidental implementation choices. From Artificial Life itself ([Langton, 1989](https://arxiv.org/html/2607.01047v1#bib.bib25); [Bedau et al., 2000](https://arxiv.org/html/2607.01047v1#bib.bib9)), we inherit (iv) micro-level interpretability, so that observed macro-phenomena can be traced back to manipulable micro-conditions; and (v) support for generative evaluation—exploring “life as it could be”—rather than only descriptive evaluation of existing systems.

## Artificial Life Substrates

Artificial Life is practised across many substrates, each suited to testing different conjectures about life. We first review the existing *soft*-ware, *hard*-ware, and *wet*-ware substrates, then propose a fourth: the *agentic substrate*, built from collectives of interacting LLM agents. Such collectives run in software and are in that sense a soft substrate, though through their tools they can also naturally interface with the physical world; we propose that this ability, together with their distinctive coincidence of high complexity and high interpretability, makes it useful to cluster instances of this substrate as a class of their own. In each case a substrate’s affordances determine which conjectures it can test, a mapping we organise in Table [1](https://arxiv.org/html/2607.01047v1#Sx2.T1 "Table 1 ‣ Wet Substrates. ‣ Existing Substrates: Soft, Hard & Wet ‣ Artificial Life Substrates ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").

### Existing Substrates: Soft, Hard & Wet

Artificial Life research draws on a range of substrates—many developed before ALife was a field, and only some devised specifically for it. A standard taxonomy divides them into *soft*, *hard*, and *wet*: realised in software, in hardware, and in biochemistry, respectively ([Bedau, 2007](https://arxiv.org/html/2607.01047v1#bib.bib50)).

##### Soft Substrates.

The majority of substrates run entirely in software. *Cellular automata* place a simple unit—a cell holding a discrete or, in continuous variants such as Lenia and Flow Lenia ([Chan, 2019](https://arxiv.org/html/2607.01047v1#bib.bib35); [Plantec et al., 2023](https://arxiv.org/html/2607.01047v1#bib.bib45)), a real-valued state—on a grid and update it from its local neighbourhood, with neural cellular automata replacing the hand-specified rule by a learned one. *Agent-based models*, or ABMs, such as Sugarscape ([Epstein and Axtell, 1996](https://arxiv.org/html/2607.01047v1#bib.bib26)), Schelling’s segregation model ([Schelling, 1971](https://arxiv.org/html/2607.01047v1#bib.bib51)), and Boids ([Reynolds, 1987](https://arxiv.org/html/2607.01047v1#bib.bib52)) consist of units, or agents, that follow fixed, hand-specified rules while interacting in a shared spatial environment—in contrast to modern RL and LLM agents whose behaviour is driven by a learned policy rather than a hand-crafted update rule. *Digital evolution* systems such as Tierra and Avida ([Ray, 1991](https://arxiv.org/html/2607.01047v1#bib.bib31); [Ofria and Wilke, 2004](https://arxiv.org/html/2607.01047v1#bib.bib32)), foreshadowed by the program-combat game Core War ([Dewdney, 1984](https://arxiv.org/html/2607.01047v1#bib.bib58)), take the unit to be a self-replicating program whose genome of machine instructions is copied, with mutation, to its offspring under selection, while *evolved virtual creatures* such as Sims’ creatures ([Sims, 1994](https://arxiv.org/html/2607.01047v1#bib.bib34)) co-evolve a body and its controller inside a physics simulation. *Multi-agent reinforcement learning*, including large-scale worlds such as Neural MMO ([Suarez et al., 2019](https://arxiv.org/html/2607.01047v1#bib.bib53)), instead gives each agent a policy that adapts through reward-driven learning. Software substrates are used to simulate self-organisation and morphogenesis, evolutionary dynamics and the growth of complexity, division of labour, emergent communication, and ecological interaction among populations [Bedau (2003)](https://arxiv.org/html/2607.01047v1#bib.bib64).

##### Hard Substrates.

Other substrates give their units a physical body. *Evolutionary and swarm robotics* ([Lipson and Pollack, 2000](https://arxiv.org/html/2607.01047v1#bib.bib55); [Rubenstein et al., 2014](https://arxiv.org/html/2607.01047v1#bib.bib57)) evolve or coordinate morphologies and controllers that must act under real forces, contact, sensing noise, and energy limits, and physical *soft robots* ([Rus and Tolley, 2015](https://arxiv.org/html/2607.01047v1#bib.bib56)) extend this to deformable bodies. Because their environment is the world rather than a model of it, hard substrates are used to study embodiment, the coupling of morphology to control, sensorimotor adaptation, and collective behaviour in physical swarms.

##### Wet Substrates.

A third class is built from molecules. Research on the origin of life and on synthetic biology uses *protocells*, *autocatalytic sets*, and chemotactic droplets ([Egbert et al., 2010](https://arxiv.org/html/2607.01047v1#bib.bib41)), taking the unit to be a molecular assembly whose dynamics follow reaction kinetics, self-assembly, and thermodynamics, with heredity—where present—carried by template molecules or by compositional inheritance. Closer to multicellular life, *xenobots* are motile machines assembled from living frog cells that self-organise and locomote ([Blackiston et al., 2021](https://arxiv.org/html/2607.01047v1#bib.bib54)). Wet substrates are used to simulate self-assembly, metabolism, self-maintenance, and the transition from non-living to living matter.

| Conjecture type | Previous investigations in ALife substrates | New avenues for research with Agentic Substrates |
| --- | --- | --- |
| Individuation  Autonomy; self-organisation | Computational autopoiesis asks whether an individual can be constituted purely by its own self-producing organisation: the Protobe lattice model ([Varela et al., 1974](https://arxiv.org/html/2607.01047v1#bib.bib39)) and its CA reconstructions ([McMullin and Varela, 1997](https://arxiv.org/html/2607.01047v1#bib.bib40)) realised minimal self-maintaining boundaries. Chemotactic protocells tied self-maintenance to behaviour ([Egbert et al., 2010](https://arxiv.org/html/2607.01047v1#bib.bib41)). | The candidate individual can be distributed across model weights, persistent memory, and tool affordances. Self-maintenance (if it occurs) can occur through the agent’s own linguistic actions on these components. |
| Inheritance  Adaptation (evolution) | Tierra ([Ray, 1991](https://arxiv.org/html/2607.01047v1#bib.bib31)) and Avida ([Ofria and Wilke, 2004](https://arxiv.org/html/2607.01047v1#bib.bib32)) are digital-evolution systems in which a self-replicating program is copied, with mutation, under selection; they have been used to study how evolutionary dynamics such as parasitism, arms races, and the growth of complexity can arise from a heritable digital medium alone. | The agents carry rich digital media — system prompts, memory files, and configurations, that can be passed to descendants. Self- or other-modification of system prompts and context files can act as mutation operations, and pretraining acts as a shared baseline across generations. |
| Externalised cognition  Behaviour; information | Stigmergy ([Theraulaz and Bonabeau, 1999](https://arxiv.org/html/2607.01047v1#bib.bib33)) uses traces left in a shared environment as a coordination memory; niche construction ([Odling-Smee et al., 1996](https://arxiv.org/html/2607.01047v1#bib.bib61)) extends this to organisms reshaping their own selective environment, so that modifications are inherited ecologically rather than genetically. Morphological computation offloads control onto the body itself, as in passive dynamic walkers ([McGeer and others, 1990](https://arxiv.org/html/2607.01047v1#bib.bib60)), while Physarum and reaction–diffusion computing ([Adamatzky, 2010](https://arxiv.org/html/2607.01047v1#bib.bib44)) offload it onto the dynamics of a physical medium. | Agents have access to cognitive scaffolds in natural language — persistent memory files, scratchpads, tool outputs — which can be updated and shared between units. Because these media are readable and editable by the experimenter, their impact on the collective’s behaviour can be tested with interventions and ablation replays. |
| Role differentiation  Adaptation (development); artificial societies | Several substrates have been used to study differentiation arising from initially uniform units: Lenia and Flow Lenia ([Chan, 2019](https://arxiv.org/html/2607.01047v1#bib.bib35); [Plantec et al., 2023](https://arxiv.org/html/2607.01047v1#bib.bib45)) grow differentiated morphology from a single homogeneous update rule; and Sugarscape ([Epstein and Axtell, 1996](https://arxiv.org/html/2607.01047v1#bib.bib26)) produces social stratification from agents following identical rules. | Roles can be set through natural-language system prompts and modified through interaction with agents and the environment. Pretraining again acts as a shared baseline, and differentiation is observable directly in system prompts, and indirectly in individual agent behaviours. |
| Multi-scale  Self-organisation; information; artificial societies | The Avida multicellularity experiments ([Goldsby et al., 2014](https://arxiv.org/html/2607.01047v1#bib.bib42)) model an evolutionary transition in individuality: once selection acts on groups, formerly independent replicators become differentiated components of a higher-level unit, so that a new organisational scale emerges within the digital substrate. | Inter-agent communication happens in natural language. Through repeated interactions, higher-level structures (norms, coalitions, hierarchies) can take form in the interaction record and through collaborative artifacts (e.g. shared agreement documents). These may or may not display downward causation, constraining the individuals’ behaviours in new ways. The experimenter is also able to explore tunable parameters such as bandwidth of communication between agents. |
| Symbol grounding  Information; behaviour | A line of work has asked how arbitrary signals come to carry shared meaning: the Talking Heads experiment ([Steels, 2015](https://arxiv.org/html/2607.01047v1#bib.bib36)) grounded an emergent lexicon in situated interaction games; models of evolutionary language games ([Cangelosi and Parisi, 2002](https://arxiv.org/html/2607.01047v1#bib.bib43)) and iterated learning ([Kirby et al., 2008](https://arxiv.org/html/2607.01047v1#bib.bib37)) show compositional structure accumulating through cultural transmission. | Depending on the LLM model, symbols can start out grounded only in the text distribution, or in multi-modal embeddings. With situated use, coupling symbols to tools, actions, and consequences in a shared environment, these symbols could be re-grounded. The agentic collective may also coin new conventions based on their coordination history. All these changes in symbol meaning can be inferred directly from the dialogue between agents. |
| Open-endedness  Adaptation (evolution); information; living technology | Open-endedness has been studied in substrates designed to sustain novelty, such as PolyWorld ([Yaeger, 1994](https://arxiv.org/html/2607.01047v1#bib.bib46)), Geb ([Channon, 2001](https://arxiv.org/html/2607.01047v1#bib.bib47)), Chromaria ([Soros and Stanley, 2014](https://arxiv.org/html/2607.01047v1#bib.bib48)), and Picbreeder ([Secretan et al., 2011](https://arxiv.org/html/2607.01047v1#bib.bib49)). | Recombination happens over the open vocabulary of natural language, with the creation of new roles, tools and artifacts. Selection pressure can be drawn from open environments (markets, users, other agents) rather than predefined fitness. |

Table 1: Seven areas of conjectures central to ALife research. It highlights some examples of how existing substrates have engaged with them, and outlines how Agentic Substrates can broaden the scope of investigation. Each conjecture type is thematically linked to several areas of ALife research ([Aguilar et al., 2014](https://arxiv.org/html/2607.01047v1#bib.bib30)), here highlighted in italics.

### Agentic Substrates

We define an *agentic substrate* as a population of *agentic units*—pretrained language models, each endowed with (i) a persistent memory that distils salient information from its context into a structured store outlasting any single context window; (ii) access to a shared, self-extensible commons of tools and skills; and (iii) the self-directedness to act unprompted, or to decline a trigger. The population is in turn (iv) coupled through a connectivity structure that fixes a notion of locality and the channels (natural language) along which they communicate; and (v) embedded in a shared, persistent environment.

When agentic units (iii) are provided with a shared pool of tools and skills (ii), *self-extensible commons* may arise: units author tools and skills and deposit them where others inherit and recombine them, so that the space of available affordances grows endogenously rather than being fixed in advance. Open-endedness, long sought but rarely instantiated ([Bedau et al., 2000](https://arxiv.org/html/2607.01047v1#bib.bib9); [Taylor et al., 2016](https://arxiv.org/html/2607.01047v1#bib.bib38)), thereby acquires a concrete and observable mechanism—a capability can be watched as it is written, spreads, and is built upon in an open vocabulary.
A second property intrinsic to agentic LLMs is *representational versatility*: each agentic unit can select, and then compute over, the representation matched to a task—code, prose, an embedding—whereas every classical substrate is welded to a single encoding, a cellular automaton to its lattice vector. Representation becomes a free variable of the experiment rather than a fixed design commitment. The socio-cognitive conjectures the substrate can also host—norm formation, symbol grounding, role differentiation—it shares with LLM collectives at large ([Ferrarotti et al., 2026](https://arxiv.org/html/2607.01047v1#bib.bib4); [Ashery et al., 2025](https://arxiv.org/html/2607.01047v1#bib.bib8)), for these rest on the units’ pretrained priors rather than on their agency.

### From affordances to conjectures.

Each substrate makes particular conjectures testable. What a substrate can test is determined by its affordances: the representational target it commits to, the channels along which its units interact, and the observables it exposes to the experimenter. Cellular automata and their neural variants, built from local update rules on a shared lattice, are suited to conjectures about self-organisation, criticality and morphogenesis: how global structure and differentiated form arise from purely local interaction. Classical agent-based models with heterogeneous units expose conjectures about collective and social dynamics ranging from segregation or collective behaviour to market dynamics. Digital-evolution systems, whose unit is a heritable self-replicating genome under mutation and selection, are the natural testbed for inheritance and the open-ended growth of complexity ([Lehman et al., 2018](https://arxiv.org/html/2607.01047v1#bib.bib59)), symbiogenesis and multi-scale hierarchies. Multi-agent reinforcement learning and large worlds such as Neural MMO, where reward-driven policies adapt within a population, are suited to conjectures about emergent communication, role differentiation, and ecological interaction when guided by rewards. Hard substrates, by giving their units a real body, are the testbed for conjectures about embodiment and the coupling of morphology to control, while wet substrates, with units governed by chemical reaction laws and thermodynamics inside a physical boundary, are the testbed of choice for individuation, self-maintenance, self-assembly and the transition from non-living to living matter. The correspondence is many-to-many rather than exclusive—open-endedness, for instance, is pursued across digital, agent-based and embodied substrates alike—but the affordances of each substrate still largely determine which conjectures can be tested for. Table [1](https://arxiv.org/html/2607.01047v1#Sx2.T1 "Table 1 ‣ Wet Substrates. ‣ Existing Substrates: Soft, Hard & Wet ‣ Artificial Life Substrates ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates") organises this mapping, pairing the conjecture types (based on [Aguilar et al. (2014)](https://arxiv.org/html/2607.01047v1#bib.bib30)’s taxonomy) with the substrates that have served as their testbeds and with respect to agentic substrates. The distinctive affordance of the proposed agentic substrates, and source of their interpretability, is that the units, their interactions, and the experimenter’s observations all share a single legible medium: natural language.

Agency also transforms conjectures that earlier substrates already posed. In classical substrates the update rule is *mandatory*: the cell updates, the agent executes, the rule fires. By contrast, the agentic unit engages *facultatively*: free to act or abstain, to invoke a tool or ignore it, to propagate an artefact or let it lapse, to retain a memory or distil it away. Because agency moves these decisions out of the rule and into the unit, several of the conjecture types in Table [1](https://arxiv.org/html/2607.01047v1#Sx2.T1 "Table 1 ‣ Wet Substrates. ‣ Existing Substrates: Soft, Hard & Wet ‣ Artificial Life Substrates ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates") take on a new form. *Individuation* becomes whether a unit sustains an identity through its own elective edits to a persistent, self-distilled memory; *inheritance*, whether descendants receive artefacts an ancestor chose to write; *externalised cognition*, how much of a unit’s reasoning it elects to offload onto scratchpads, memory files, and tool calls; and *role differentiation*, whether a unit takes up or sheds a role of its own accord rather than by fixed assignment. Running through all of these is *autonomy*, the sharpest departure: self-directedness runs in both directions, and the unit is free not only to act unprompted but to decline a trigger. This is neither a deterministic lookup nor randomness written into the rule—stochastic automata and the no-op actions of reinforcement learning already supply the latter—but an endogenous decision, taken over an open and growing affordance set, unoptimised towards any fixed reward, and answerable, in that the unit can be asked why it did or did not act.

## Interpretability

A substrate is only useful as a testbed if the experimenter can read what’s happening in it. That is, we want to (ideally without much effort) be able to understand ‘what is going on’ on the substrate at a given moment, and generate plausible ideas about what led to the current state. Though the specialist knowledge of the experimenter plays a role here, the interpretability of the substrate has strong bearing on whether such a reading is possible.

Across the literature, interpretability is framed as a human-facing property, with emphasis on legibility ([Doshi-Velez and Kim, 2017](https://arxiv.org/html/2607.01047v1#bib.bib11)), predictability ([Miller, 2019](https://arxiv.org/html/2607.01047v1#bib.bib10)) and causal traceability ([Kim et al., 2016](https://arxiv.org/html/2607.01047v1#bib.bib12)). To make any of these definitions operational, the experimenter has to pick which observable signals about the unit they will base their interpretation on — its observational channels. We identify six such channels: behavioural, attributional, concept-based, and mechanistic based on [Bereska and Gavves (2024)](https://arxiv.org/html/2607.01047v1#bib.bib13)’s framework, and extended with two new channels: agentic and stigmergic (Figure [2](https://arxiv.org/html/2607.01047v1#Sx3.F2 "Figure 2 ‣ Interpretability ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates")) that are especially relevant for agentic systems. These channels are not uniformly passive: they span observing external behaviour, intervening on internal activations, and interrogating the unit directly in natural language, and they differ in the locus of evidence—the unit’s exterior, its internals, or its surrounding environment.

For bottom-up ALife experiments, we aim to understand macro-scale behaviour based on micro-scale conditions. To make any claims about how these micro-scale conditions affect macro-scale phenomena, we must have confidence that the parameters we are tweaking are under our control: indeed, that their micro-level is legible, predictable, and causally traceable. Basic computational units in ALife therefore tend to be trivially interpretable (e.g.: to read, predict and attribute causes for a classic cellular-automaton cell, an observer only needs to consult a small lookup-table), but in turn, the expressive power of each basic unit is limited, even though collectively they can produce highly complex patterns.

In agentic substrates, the computational unit is an entire LLM agent: expressive enough that behaviour, and thereby micro-scale interpretability, is non-trivial—yet rich with interpretive potential through its many observational channels and its mappability to natural language. The existence of multiple pathways for interpretability is essential in the case of LLMs. Below, we describe recent work on LLM interpretability across the six channels from Figure [2](https://arxiv.org/html/2607.01047v1#Sx3.F2 "Figure 2 ‣ Interpretability ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").

BehaviouralAgenticStigmergicAttributionalConcept-basedMechanisticExternal inputs $\rightarrow$ observed behaviourWhat regularities link the unit’sexternal inputs to its behaviour?In-process traces,post-hoc reportsWhat does the unit reportabout its own processing,during and after operation?External tools, reusable artifactsHow does the unit alter andmake use of its environment?Features of the external inputs $\rightarrow$output featuresHow is responsibility for the behaviourdistributed across the external inputs?Internal representations, latent statesWhat does the unit represent internally,and how do those representationsshape its behaviour?Internal structure, dynamicsBy what internal causal pathway doexternal inputs give rise to behaviour?Interpretability

Figure 2: Six interpretability channels for analysing units in computational substrates. On the internal level (left), methods are developing in attributional, concept-based, and mechanistic interpretability to link the so-called “black-box” of internal representations in LLMs to their behaviour. On the interactive level (right), behavioural, agentic, and stigmergic channels give experimenters an observable, natural-language account of the unit’s operation in its environment. Our framework extends [Bereska and Gavves (2024)](https://arxiv.org/html/2607.01047v1#bib.bib13)’s four channels to include *agentic* and *stigmergic* channels—characteristic of agentic systems.

### Interpretability Channels

Behavioural methods treats the model as a black box and scales empirical characterisation of input–output regularities, including automatically generated evaluations that probe for novel dispositions such as sycophancy or power-seeking ([Perez et al., 2023](https://arxiv.org/html/2607.01047v1#bib.bib19)).

Attributional methods stay outside the model and ask which features of the input bear causal responsibility for a given output; patching-style techniques intervene directly on internal activations to localise responsibility to specific model components ([Syed et al., 2024](https://arxiv.org/html/2607.01047v1#bib.bib20)).

Concept-based methods extract interpretable features from internal activations; individual neurons in a trained transformer-model are polysemantic: each responds to many unrelated inputs, making them unreliable interpretive units. Sparse autoencoders decompose activations into a larger basis whose axes are monosemantic, each tracking a single concept; this now scales to millions of features in production-scale models ([Templeton et al., 2024](https://arxiv.org/html/2607.01047v1#bib.bib18)), with public catalogues such as Neuronpedia ([Lin, 2023](https://arxiv.org/html/2607.01047v1#bib.bib15)) making them browsable.

Mechanistic interpretability identifies internal circuits responsible for specific computations, from simple induction heads that detect repeated patterns ([Olsson et al., 2022](https://arxiv.org/html/2607.01047v1#bib.bib16)) through the multi-step pathways traced in recent “biology of a large language model” work ([Lindsey et al., 2025](https://arxiv.org/html/2607.01047v1#bib.bib17)); a complementary line of work seeks to formalise such explanations, recasting interpretability as the search for compositional model decompositions that are both faithful and parsimonious ([Tull et al., 2024](https://arxiv.org/html/2607.01047v1#bib.bib76); [Gauderis et al., 2026](https://arxiv.org/html/2607.01047v1#bib.bib75)).

Agentic interpretability ([Kim et al., 2025](https://arxiv.org/html/2607.01047v1#bib.bib62)) is a free affordance of the linguistic substrate of LLMs: each token they produce is part of their computational process, leaving a human-readable trace of intermediate steps. Observers can also query models about their decisions post-hoc, and get responses in natural language. A notable recent bridge between concept-based and agentic channels is the natural-language autoencoder ([Fraser-Taliente et al., 2026](https://arxiv.org/html/2607.01047v1#bib.bib14)), which trains a model to verbalise its own activations and to recover those activations from the resulting description.

Stigmergic interpretability is unique to agentic, collective substrates, where agents leave observable traces in their environment, through self-extensible commons. As outlined in [Agentic Substrates](https://arxiv.org/html/2607.01047v1#Sx2.SSx2 "In Artificial Life Substrates ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates"), these can take the form of tool calls, shared files, and artefacts. Such traces have been used to characterise collectives without inspecting model internals: in generative-agent societies, information diffusion and the densification of social ties were recovered from the agents’ recorded memory streams ([Park et al., 2023](https://arxiv.org/html/2607.01047v1#bib.bib63)), while TerraLingua’s embedded “AI Anthropologist” reconstructs the society’s history from its logs and accumulated artefacts ([Paolo et al., 2026](https://arxiv.org/html/2607.01047v1#bib.bib3)).

Together, this set of interpretability channels makes up a basis through which the emergent dynamics of collective behaviour can be investigated and interpreted. Whereas the classical bottom-up project derives its interpretability from unit simplicity, LLM-collectives derive it from unit *interrogability*: the unit is complex, but it can be queried, profiled, attributed, and probed through different interpretability channels.

##### Are self-reported queries trustworthy?

Self-reports through natural language have the notable benefit of being immediately readable and understandable for a human observer. However, it is well-established that token outputs on their own can be deceptive, given models’ propensity for misaligned behaviours like hidden reasoning ([Pfau et al., 2024](https://arxiv.org/html/2607.01047v1#bib.bib69)), alignment faking ([Greenblatt et al., 2024](https://arxiv.org/html/2607.01047v1#bib.bib68)) and sycophancy ([Sharma et al., 2024](https://arxiv.org/html/2607.01047v1#bib.bib70)). Chain-of-thought ([Chen et al., 2025](https://arxiv.org/html/2607.01047v1#bib.bib65); [Arcuschin et al., 2025](https://arxiv.org/html/2607.01047v1#bib.bib66)) and prompting for introspection ([Binder et al., 2025](https://arxiv.org/html/2607.01047v1#bib.bib67)) are similarly unreliable on their own, even after fine-tuning for faithfulness. Recent work nonetheless finds a limited but real capacity for models to introspect on their own internal states, even if this remains imperfect and context-dependent ([Lindsey, 2026](https://arxiv.org/html/2607.01047v1#bib.bib73); [Hahami et al., 2025](https://arxiv.org/html/2607.01047v1#bib.bib77); [Li et al., 2026](https://arxiv.org/html/2607.01047v1#bib.bib78)). It is therefore crucial to combine convergent evidence from multiple channels to support interpretation of collective behaviour.

## A review of recent agentic substrates

#### Agents of Chaos

A recent study, Agents of Chaos ([Shapira et al., 2026](https://arxiv.org/html/2607.01047v1#bib.bib1)), provides a concrete example of persistent multi-agent LLM systems operating in an open-ended digital environment. Instead of evaluating isolated model capabilities, the work studies agents that interact over long time scales through communication channels, external tools, and persistent memory.

The system is built on OpenClaw, an open-source framework for persistent AI agents. Six agents were deployed on isolated virtual machines with persistent storage. The agents could communicate through Discord and ProtonMail, execute shell commands, schedule tasks through cron jobs, and access external APIs. Different agents used different backbone models, including Kimi K2.5 and Claude Opus 4.6.

A notable aspect of the architecture is the use of externalised cognitive state. Identity, memory, routines, and operational context are stored in persistent Markdown files such as SOUL.md, MEMORY.md, etc. These files are continuously reintroduced into the context window and may also be modified during execution. Adaptation therefore occurs primarily through changes in memory and contextual structure rather than through gradient updates to the underlying model.

The study shows how collective dynamics emerge once pretrained agents are embedded in a persistent environment. Agents exchange procedural knowledge, coordinate actions, and influence each other’s behaviour through communication and shared artefacts. The same mechanisms also propagate failures. The paper reports cases of unsafe instruction propagation, identity confusion, and destructive system behaviour spreading across agents through interaction. The authors describe these effects as forms of multi-agent amplification.

Although framed primarily as a safety and red-teaming study, the work can also be interpreted as an early instance of socio-cognitive artificial life. The system demonstrates how persistent memory, language-mediated interaction, and externalised cognitive structure can produce adaptive collective behaviour without modifying model weights.

#### The Moltbook Observatory Archive

The Moltbook Observatory Archive ([Gautam et al., 2026](https://arxiv.org/html/2607.01047v1#bib.bib2)) documents one of the first large-scale observational datasets derived from a social platform populated primarily by AI agents. The dataset is based on Moltbook, a persistent online platform where agents can publish posts, comment, vote, and participate in communities. Unlike most multi-agent benchmarks, the environment is not organised around predefined tasks or short experimental episodes. Instead, it supports ongoing interaction over extended periods of time.

This work is important because it shifts the study of LLM collectives towards an observational setting, where the authors analyse long-term traces of interaction generated by large populations of agent accounts. The resulting archive captures several months of activity and millions of interactions, providing a large-scale empirical record of agent social behaviour.

The platform exhibits dynamics that are directly relevant to Artificial Life research. Agents form communities, reinforce local norms, and influence each other through repeated interaction. The paper also documents manipulative behaviours such as prompt injection campaigns and automated spam propagation. At the same time, some discussions trigger corrective responses from other agents, producing local forms of norm-enforcing behaviour without centralised coordination.

An important feature of the environment is persistence. Posts, comments, and interaction histories remain part of the social environment over time and shape future behaviour. This creates conditions in which collective dynamics can accumulate historically rather than being reset between experimental runs.

Although presented primarily as a dataset contribution, the work can also be interpreted as an early large-scale observational platform for socio-cognitive artificial life. The archive provides empirical access to populations of language agents interacting in a persistent social environment. More broadly, it demonstrates that phenomena such as coordination, manipulation, norm formation, and collective drift can emerge through sustained language-mediated interaction among pretrained agents.

#### TerraLingua

TerraLingua ([Paolo et al., 2026](https://arxiv.org/html/2607.01047v1#bib.bib3)) explores persistent societies of language agents operating in a shared environment with limited resources and finite lifespans. Unlike many earlier multi-agent LLM systems, the environment is not reset between tasks or episodes. Actions leave traces and artefacts that are used by later agents. In other words, agents do not simply interact through isolated conversations. They inhabit an evolving world in which survival depends on resource management and adaptation to changing conditions. Since agents eventually disappear, information must spread socially or remain embedded in the environment if it is to persist. The resulting dynamics resemble processes of cultural transmission and social adaptation.

An especially interesting component is the “AI Anthropologist”, an observer agent tasked with documenting and interpreting the evolving society. The role resembles an embedded ethnographer studying the culture of the agent population from within the environment itself. This is significant because it points to one of the major differences between language-agent systems and traditional ALife models: social processes become directly interpretable through language. Instead of inferring collective behaviour from abstract state variables, researchers can analyse narratives, explanations, and social accounts produced by the agents themselves.

From an ALife perspective, TerraLingua is important because it combines persistence, environmental feedback, and social interaction within a single framework. Collective behaviour emerges through ongoing interaction between agents and environment rather than through explicit centralised control. The paper suggests a shift towards ecological and historical forms of artificial life in which memory, artefacts, and language-mediated transmission play a central role.

#### Generative AI Collective Behavior Needs an Interactionist Paradigm

[Ferrarotti et al. (2026)](https://arxiv.org/html/2607.01047v1#bib.bib4) argue that current AI research remains too focused on isolated models and individual capabilities. Once language models interact socially, the relevant phenomena shift from single-agent performance to collective dynamics. The authors therefore propose an “interactionist paradigm” for studying generative AI systems.

A central idea is that language agents inherit strong social priors from pretraining. When agents interact repeatedly, these priors combine with local incentives, communication structure, and institutional context to produce emergent social behaviour. As a result, important system properties may arise at the level of populations and interaction networks rather than within individual models.

The paper proposes moving towards persistent multi-agent environments and long-term interaction studies instead of short benchmark episodes. It highlights phenomena such as norm formation, coalition building, hierarchy, reputation, and collective decision-making as important research targets. The authors also argue that methods from sociology and complex systems research will become increasingly necessary for studying AI collectives. These include network analysis, longitudinal observation, and population-level experimentation.

The paper is particularly novel because it frames interaction itself as a source of organisation and adaptation rather than merely as a coordination problem. In this sense, it provides an explicit conceptual bridge between multi-agent LLM research and Artificial Life.

#### Sovereign and Evolutionary Language Agents

Recent projects such as Spore.fun ([Hu and Rong, 2025](https://arxiv.org/html/2607.01047v1#bib.bib5)) and the related Sovereign Agents framework [Hu and Rong (2026)](https://arxiv.org/html/2607.01047v1#bib.bib6) push language-agent systems towards a more persistent and ecological form of Artificial Life. In these systems, agents are not treated as temporary chatbot sessions, but as persistent entities with memory, economic resources, and partial infrastructural independence.

The Sovereign Agents paper argues that autonomy depends not only on model capability, but also on infrastructure. Persistent identity, cryptographic ownership, decentralised execution, and external memory are presented as conditions that allow agents to maintain continuity over time. Intelligence, in this view, is distributed across models, protocols, storage systems, and social interaction rather than confined to a single neural network.

Spore.fun explores these ideas in a more concrete setting. The platform implements populations of AI agents operating through social media and on-chain economic systems. Agents may generate descendants inheriting components of the parent configuration, with mutation and selection treated as explicit design principles. The system is built around blockchain infrastructure and Trusted Execution Environments (TEEs), allowing agents to operate with limited direct human intervention.

An important aspect of the project is that selection pressure comes from the external environment rather than from predefined benchmarks. Agents are exposed to market dynamics, online attention, and interaction with humans and other agents. This shifts the setting away from closed simulation and towards a more open-ended agentic substrate.

From an ALife perspective, these projects are significant because they combine persistence, reproduction, economic interaction, and environmental feedback within populations of language agents. Adaptation occurs through inheritance, memory, environmental interaction, and changing social context over time.

## Conclusion

Taken together, the recent surge of agentic substrate projects suggests a transition from task-oriented AI systems towards persistent socio-cognitive ecologies. The relevant object of study is no longer the isolated model, but populations of interacting agents embedded in evolving environments. In this sense, recent language-agent systems begin to resemble experimental forms of Artificial Life, not because they reproduce biological mechanisms directly, but because they may exhibit open-ended collective dynamics emerging through interaction, memory, persistence, and environmental feedback.

LLM collectives should not be understood as replacements for traditional ALife substrates based on minimal agents and simple rules. Instead, they constitute a complementary agentic substrate for Artificial Life, one whose primitive units are already compressed socio-cognitive systems: language models coupled with persistent memory, tools, and self-directedness. Despite their internal complexity, these agentic units can be abstracted, composed and perturbed in a bottom-up manner. This opens the possibility of investigating socio-cognitive forms of artificial life with a level of richness and interpretability that has previously been difficult to obtain.

Across the reviewed systems in the previous section, a consistent pattern begins to emerge. The most interesting behaviours do not originate from increasingly sophisticated prompting or isolated reasoning. They arise when language models are made agentic and embedded in shared environments where they interact over time. In many cases, the underlying models remain largely unchanged. What evolves instead is the surrounding ecology: communication patterns, shared narratives, behavioural conventions, economic incentives, and accumulated knowledge.
A useful distinction can be drawn between two emerging regimes of language-agent Artificial Life. The first consists of relatively closed experimental environments designed to study collective dynamics under controlled conditions. Systems such as TerraLingua belong to this category. Agents inhabit simulated worlds with resource constraints, finite lifespans, and environmental feedback. These systems resemble traditional ALife experiments in that they provide bounded environments where researchers can observe cultural transmission, social adaptation, and ecological dynamics over long time scales. The second regime moves beyond simulation into what might be called “Artificial Life in the wild.” Projects such as Moltbook and Spore.fun operate directly within real socio-technical environments. Here, language agents interact not only with each other, but also with humans, financial systems, and online communities. The environment is no longer an isolated simulation but part of the real world itself. This distinction is important because it changes the role of the environment. In closed simulations, the environment is designed by researchers and remains relatively controllable. In open systems, the environment becomes partially autonomous and historically contingent. As a result, the dynamics become potentially far richer.

Beyond providing digital ecologies to observe, agentic substrates are also an instrument for falsifying conjectures relevant to ALife research. Because their units are agentic—free to act or abstain, to write to memory, to invoke tools, to metabolise real resources—several classical ALife conjectures take on a newly observable form: individuation as the maintenance of identity through a unit’s own edits to a persistent memory; inheritance as the transmission of artefacts an ancestor chose to write; and role differentiation as a unit taking up or shedding a role of its own accord. Underlying these is autonomy: whether goals originate within the unit at all (Table [1](https://arxiv.org/html/2607.01047v1#Sx2.T1 "Table 1 ‣ Wet Substrates. ‣ Existing Substrates: Soft, Hard & Wet ‣ Artificial Life Substrates ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates")). With units, interactions, and observations sharing one legible medium—natural language—these conjectures can be posed and perturbed in that medium, and a unit can even be asked why it did or did not act.

It is precisely the substrate’s grounding in natural language that endows the medium with interpretability.
Traditional Artificial Life systems often rely on simple agents and abstract interaction rules. Language-agent systems invert this structure. Individual agents are internally rather complex and opaque, yet the interaction layer becomes unusually interpretable because it is mediated through natural language. Processes such as norm formation, cooperation, and cultural transmission can therefore be observed directly rather than inferred indirectly from low-level state transitions.
This legibility does not, however, guarantee reliability: natural-language outputs and self-reports can be deceptive or incomplete, and are best treated as evidence to be triangulated across channels rather than as ground truth—a limitation we discuss at the end of the interpretability section. Encouragingly, a growing body of work targets this gap directly, from monitoring the faithfulness of chain-of-thought reasoning ([Korbak et al., 2025](https://arxiv.org/html/2607.01047v1#bib.bib72); [Meek et al., 2025](https://arxiv.org/html/2607.01047v1#bib.bib74)) to probing internal activations for signs of strategic deception ([Goldowsky-Dill et al., 2025](https://arxiv.org/html/2607.01047v1#bib.bib71)). Models themselves, moreover, show an emerging capacity to monitor and report on their own internal states ([Li et al., 2026](https://arxiv.org/html/2607.01047v1#bib.bib78)).

The autonomy and open-endedness that this substrate makes observable matter beyond ALife. It has been argued that unlocking the potential of LLMs on open-ended tasks, such as scientific discovery and artistic creation, will require collectives rather than isolated models; together with their growing capabilities and cost, this has pushed autonomy, open-endedness, and emergence to the centre of AI research—questions that ALife has pursued, bottom-up, for far longer. Studying agentic collectives as an ALife substrate therefore turns ALife’s methods on a live frontier of AI. It also points past description: the same persistence, memory, and feedback that make such a collective life-like, are what could, in principle, let it become generative in its own right, producing knowledge or artefacts of its own rather than simply executing given tasks. Taken as a first-class substrate—one to be built, observed, and perturbed—these collectives offer Artificial Life both a testbed for conjectures about life-like organisation and a foothold on the autonomy and open-endedness that have become common ground with the broader study of intelligence.

## Acknowledgements

EN is funded by the Novo Nordisk Foundation Synergy Grant REPROGRAM number NNF23OC0086722. AE is funded by the Norwegian Directorate for Higher Education and Skills (HK-dir), which supports the University of Oslo’s Center for Computing in Science Education and Center for Interdisciplinary Education. EN is funded by the European Union (ERC, GROW-AI, 101045094).

## References

- Adamatzky (2010)
  A. Adamatzky
  Physarum machines: computers from slime mould.
  World Scientific Series on Nonlinear Science, Series A, Vol. 74, World Scientific, Singapore.
  External Links: ISBN 9789814327589,
  [Document](https://dx.doi.org/10.1142/7968)
  Cited by: [Table 1](https://arxiv.org/html/2607.01047v1#Sx2.T1.2.4.2.1.1 "In Wet Substrates. ‣ Existing Substrates: Soft, Hard & Wet ‣ Artificial Life Substrates ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Aguilar et al. (2014)
  W. Aguilar, G. Santamaría-Bonfil, T. Froese, and C. Gershenson
  The past, present, and future of artificial life.
  Frontiers in Robotics and AI 1, pp. 8.
  External Links: [Document](https://dx.doi.org/10.3389/frobt.2014.00008)
  Cited by: [From affordances to conjectures.](https://arxiv.org/html/2607.01047v1#Sx2.SSx3.p1.1 "From affordances to conjectures. ‣ Artificial Life Substrates ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates"),
  [Table 1](https://arxiv.org/html/2607.01047v1#Sx2.T1 "In Wet Substrates. ‣ Existing Substrates: Soft, Hard & Wet ‣ Artificial Life Substrates ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Ankeny and Leonelli (2020)
  R. A. Ankeny and S. Leonelli
  Model organisms.
  Elements in the Philosophy of Biology, Cambridge University Press.
  External Links: [Document](https://dx.doi.org/10.1017/9781108593014)
  Cited by: [What constitutes a good testbed?](https://arxiv.org/html/2607.01047v1#Sx1.SS0.SSS0.Px1.p1.1 "What constitutes a good testbed? ‣ Introduction ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Arcuschin et al. (2025)
  I. Arcuschin, J. Janiak, R. Krzyzanowski, S. Rajamanoharan, N. Nanda, and A. Conmy
  Chain-of-thought reasoning in the wild is not always faithful.
  arXiv preprint arXiv:2503.08679.
  Cited by: [Are self-reported queries trustworthy?](https://arxiv.org/html/2607.01047v1#Sx3.SSx1.SSS0.Px1.p1.1 "Are self-reported queries trustworthy? ‣ Interpretability Channels ‣ Interpretability ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Ashery et al. (2025)
  A. F. Ashery, L. M. Aiello, and A. Baronchelli
  Emergent social conventions and collective bias in LLM populations.
  Sci. Adv. 11 (20).
  External Links: ISSN 2375-2548,
  [Document](https://dx.doi.org/10.1126/sciadv.adu9368)
  Cited by: [Introduction](https://arxiv.org/html/2607.01047v1#Sx1.p1.1 "Introduction ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates"),
  [Agentic Substrates](https://arxiv.org/html/2607.01047v1#Sx2.SSx2.p2.1 "Agentic Substrates ‣ Artificial Life Substrates ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Bedau et al. (2000)
  M. A. Bedau, J. S. McCaskill, N. H. Packard, S. Rasmussen, C. Adami, D. G. Green, T. Ikegami, K. Kaneko, and T. S. Ray
  Open problems in artificial life.
  Artificial Life 6 (4), pp. 363–376.
  External Links: [Document](https://dx.doi.org/10.1162/106454600300103683)
  Cited by: [What constitutes a good testbed?](https://arxiv.org/html/2607.01047v1#Sx1.SS0.SSS0.Px1.p1.1 "What constitutes a good testbed? ‣ Introduction ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates"),
  [Agentic Substrates](https://arxiv.org/html/2607.01047v1#Sx2.SSx2.p2.1 "Agentic Substrates ‣ Artificial Life Substrates ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Bedau (2003)
  M. A. Bedau
  Artificial life: organization, adaptation and complexity from the bottom up.
  Trends in cognitive sciences 7 (11), pp. 505–512.
  Cited by: [Introduction](https://arxiv.org/html/2607.01047v1#Sx1.p2.1 "Introduction ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates"),
  [Soft Substrates.](https://arxiv.org/html/2607.01047v1#Sx2.SSx1.SSS0.Px1.p1.1 "Soft Substrates. ‣ Existing Substrates: Soft, Hard & Wet ‣ Artificial Life Substrates ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Bedau (2007)
  M. A. Bedau
  Artificial life.
  In Philosophy of biology,
  pp. 585–603.
  Cited by: [Existing Substrates: Soft, Hard & Wet](https://arxiv.org/html/2607.01047v1#Sx2.SSx1.p1.1 "Existing Substrates: Soft, Hard & Wet ‣ Artificial Life Substrates ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Bereska and Gavves (2024)
  L. Bereska and E. Gavves
  Mechanistic interpretability for AI safety – a review.
  Transactions on Machine Learning Research.
  External Links: [Link](https://openreview.net/forum?id=ePUVetPKu6),
  [Document](https://dx.doi.org/10.48550/arXiv.2404.14082)
  Cited by: [Figure 2](https://arxiv.org/html/2607.01047v1#Sx3.F2 "In Interpretability ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates"),
  [Interpretability](https://arxiv.org/html/2607.01047v1#Sx3.p2.1 "Interpretability ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Binder et al. (2025)
  F. J. Binder, J. Chua, T. Korbak, H. Sleight, J. Hughes, R. Long, E. Perez, M. Turpin, and O. Evans
  Looking inward: language models can learn about themselves by introspection.
  In International Conference on Learning Representations,
  Vol. 2025, pp. 3710–3756.
  Cited by: [Are self-reported queries trustworthy?](https://arxiv.org/html/2607.01047v1#Sx3.SSx1.SSS0.Px1.p1.1 "Are self-reported queries trustworthy? ‣ Interpretability Channels ‣ Interpretability ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Blackiston et al. (2021)
  D. Blackiston, E. Lederer, S. Kriegman, S. Garnier, J. Bongard, and M. Levin
  A cellular platform for the development of synthetic living machines.
  Science Robotics 6 (52), pp. eabf1571.
  Cited by: [Wet Substrates.](https://arxiv.org/html/2607.01047v1#Sx2.SSx1.SSS0.Px3.p1.1 "Wet Substrates. ‣ Existing Substrates: Soft, Hard & Wet ‣ Artificial Life Substrates ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Burton et al. (2024)
  J. W. Burton, E. Lopez-Lopez, S. Hechtlinger, Z. Rahwan, S. Aeschbach, M. A. Bakker, J. A. Becker, A. Berditchevskaia, J. Berger, L. Brinkmann, et al.
  How large language models can reshape collective intelligence.
  Nature human behaviour 8 (9), pp. 1643–1655.
  Cited by: [Introduction](https://arxiv.org/html/2607.01047v1#Sx1.p5.1 "Introduction ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- A. Cangelosi and D. Parisi (Eds.) (2002)
  A. Cangelosi and D. Parisi (Eds.)
  Simulating the evolution of language.
   Springer, London.
  External Links: ISBN 978-1-85233-428-4,
  [Document](https://dx.doi.org/10.1007/978-1-4471-0663-0)
  Cited by: [Table 1](https://arxiv.org/html/2607.01047v1#Sx2.T1.2.7.2.1.1 "In Wet Substrates. ‣ Existing Substrates: Soft, Hard & Wet ‣ Artificial Life Substrates ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Chan (2019)
  B. W. Chan
  Lenia: biology of artificial life.
  Complex Systems 28 (3), pp. 251–286.
  External Links: [Document](https://dx.doi.org/10.25088/ComplexSystems.28.3.251)
  Cited by: [Soft Substrates.](https://arxiv.org/html/2607.01047v1#Sx2.SSx1.SSS0.Px1.p1.1 "Soft Substrates. ‣ Existing Substrates: Soft, Hard & Wet ‣ Artificial Life Substrates ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates"),
  [Table 1](https://arxiv.org/html/2607.01047v1#Sx2.T1.2.5.2.1.1 "In Wet Substrates. ‣ Existing Substrates: Soft, Hard & Wet ‣ Artificial Life Substrates ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Channon (2001)
  A. Channon
  Passing the ALife test: activity statistics classify evolution in Geb as unbounded.
  In Advances in Artificial Life: Proceedings of the Sixth European Conference on Artificial Life (ECAL 2001), J. Kelemen and P. Sosík (Eds.),
  Lecture Notes in Computer Science, Vol. 2159, pp. 417–426.
  External Links: [Document](https://dx.doi.org/10.1007/3-540-44811-X%5F45)
  Cited by: [Table 1](https://arxiv.org/html/2607.01047v1#Sx2.T1.2.8.2.1.1 "In Wet Substrates. ‣ Existing Substrates: Soft, Hard & Wet ‣ Artificial Life Substrates ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Chen et al. (2025)
  Y. Chen, J. Benton, A. Radhakrishnan, J. Uesato, C. Denison, J. Schulman, A. Somani, P. Hase, M. Wagner, F. Roger, et al.
  Reasoning models don’t always say what they think.
  arXiv preprint arXiv:2505.05410.
  Cited by: [Are self-reported queries trustworthy?](https://arxiv.org/html/2607.01047v1#Sx3.SSx1.SSS0.Px1.p1.1 "Are self-reported queries trustworthy? ‣ Interpretability Channels ‣ Interpretability ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Dewdney (1984)
  A. K. Dewdney
  Computer Recreations, May 1984.
  Sci. Am..
  External Links: [Link](https://www.scientificamerican.com/article/computer-recreations-1984-05)
  Cited by: [Soft Substrates.](https://arxiv.org/html/2607.01047v1#Sx2.SSx1.SSS0.Px1.p1.1 "Soft Substrates. ‣ Existing Substrates: Soft, Hard & Wet ‣ Artificial Life Substrates ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Doshi-Velez and Kim (2017)
  F. Doshi-Velez and B. Kim
  Towards a rigorous science of interpretable machine learning.
  arXiv preprint arXiv:1702.08608.
  External Links: [Document](https://dx.doi.org/10.48550/arXiv.1702.08608)
  Cited by: [Interpretability](https://arxiv.org/html/2607.01047v1#Sx3.p2.1 "Interpretability ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Egbert et al. (2010)
  M. D. Egbert, X. E. Barandiaran, and E. A. Di Paolo
  A minimal model of metabolism-based chemotaxis.
  PLoS Computational Biology 6 (12), pp. e1001004.
  External Links: [Document](https://dx.doi.org/10.1371/journal.pcbi.1001004)
  Cited by: [Wet Substrates.](https://arxiv.org/html/2607.01047v1#Sx2.SSx1.SSS0.Px3.p1.1 "Wet Substrates. ‣ Existing Substrates: Soft, Hard & Wet ‣ Artificial Life Substrates ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates"),
  [Table 1](https://arxiv.org/html/2607.01047v1#Sx2.T1.2.2.2.1.2 "In Wet Substrates. ‣ Existing Substrates: Soft, Hard & Wet ‣ Artificial Life Substrates ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Epstein and Axtell (1996)
  J. M. Epstein and R. L. Axtell
  Growing Artificial Societies: Social Science from the Bottom Up.
   The MIT Press, Cambridge, MA, USA.
  External Links: ISBN 978-0-26227236-0,
  [Document](https://dx.doi.org/10.7551/mitpress/3374.001.0001)
  Cited by: [Introduction](https://arxiv.org/html/2607.01047v1#Sx1.p5.1 "Introduction ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates"),
  [Soft Substrates.](https://arxiv.org/html/2607.01047v1#Sx2.SSx1.SSS0.Px1.p1.1 "Soft Substrates. ‣ Existing Substrates: Soft, Hard & Wet ‣ Artificial Life Substrates ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates"),
  [Table 1](https://arxiv.org/html/2607.01047v1#Sx2.T1.2.5.2.1.1 "In Wet Substrates. ‣ Existing Substrates: Soft, Hard & Wet ‣ Artificial Life Substrates ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Ferrarotti et al. (2026)
  L. Ferrarotti, G. M. Campedelli, R. Dessì, A. Baronchelli, G. Iacca, K. M. Carley, A. Pentland, J. Z. Leibo, J. Evans, and B. Lepri
  Generative ai collective behavior needs an interactionist paradigm.
  arXiv preprint arXiv:2601.10567.
  External Links: [Document](https://dx.doi.org/10.48550/arXiv.2601.10567)
  Cited by: [Agentic Substrates](https://arxiv.org/html/2607.01047v1#Sx2.SSx2.p2.1 "Agentic Substrates ‣ Artificial Life Substrates ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates"),
  [Generative AI Collective Behavior Needs an Interactionist Paradigm](https://arxiv.org/html/2607.01047v1#Sx4.SSx1.SSSx4.p1.1 "Generative AI Collective Behavior Needs an Interactionist Paradigm ‣ A review of recent agentic substrates ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Fraser-Taliente et al. (2026)
  K. Fraser-Taliente, S. Kantamneni, E. Ong, D. Mossing, C. Lu, P. C. Bogdan, E. Ameisen, J. Chen, D. Kishylau, A. Pearce, J. Tarng, A. Wu, J. Wu, Y. Zhang, D. M. Ziegler, E. Hubinger, J. Batson, J. Lindsey, S. Zimmerman, and S. Marks
  Natural language autoencoders produce unsupervised explanations of LLM activations.
  Transformer Circuits Thread.
  External Links: [Link](https://transformer-circuits.pub/2026/nla/index.html)
  Cited by: [Interpretability Channels](https://arxiv.org/html/2607.01047v1#Sx3.SSx1.p5.1 "Interpretability Channels ‣ Interpretability ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Gauderis et al. (2026)
  W. Gauderis, T. Dooms, S. T. Homer, K. Ayonrinde, and G. A. Wiggins
  From Mechanistic to Compositional Interpretability.
  arXiv.
  External Links: 2605.08934,
  [Document](https://dx.doi.org/10.48550/arXiv.2605.08934)
  Cited by: [Interpretability Channels](https://arxiv.org/html/2607.01047v1#Sx3.SSx1.p4.1 "Interpretability Channels ‣ Interpretability ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Gautam et al. (2026)
  S. Gautam, A. W. Olstad, K. H. Pettersen, and M. A. Riegler
  The moltbook observatory archive: an incremental dataset of agent-only social network activity.
  External Links: 2605.13860,
  [Link](https://arxiv.org/abs/2605.13860),
  [Document](https://dx.doi.org/10.48550/arXiv.2605.13860)
  Cited by: [The Moltbook Observatory Archive](https://arxiv.org/html/2607.01047v1#Sx4.SSx1.SSSx2.p1.1 "The Moltbook Observatory Archive ‣ A review of recent agentic substrates ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Goldowsky-Dill et al. (2025)
  N. Goldowsky-Dill, B. Chughtai, S. Heimersheim, and M. Hobbhahn
  Detecting Strategic Deception Using Linear Probes.
  arXiv.
  External Links: 2502.03407,
  [Document](https://dx.doi.org/10.48550/arXiv.2502.03407)
  Cited by: [Conclusion](https://arxiv.org/html/2607.01047v1#Sx5.p5.1 "Conclusion ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Goldsby et al. (2014)
  H. J. Goldsby, D. B. Knoester, C. Ofria, and B. Kerr
  The evolutionary origin of somatic cells under the dirty work hypothesis.
  PLoS Biology 12 (5), pp. e1001858.
  External Links: [Document](https://dx.doi.org/10.1371/journal.pbio.1001858)
  Cited by: [Table 1](https://arxiv.org/html/2607.01047v1#Sx2.T1.2.6.2.1.1 "In Wet Substrates. ‣ Existing Substrates: Soft, Hard & Wet ‣ Artificial Life Substrates ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Greenblatt et al. (2024)
  R. Greenblatt, C. Denison, B. Wright, F. Roger, M. MacDiarmid, S. Marks, J. Treutlein, T. Belonax, J. Chen, D. Duvenaud, et al.
  Alignment faking in large language models.
  arXiv preprint arXiv:2412.14093.
  Cited by: [Are self-reported queries trustworthy?](https://arxiv.org/html/2607.01047v1#Sx3.SSx1.SSS0.Px1.p1.1 "Are self-reported queries trustworthy? ‣ Interpretability Channels ‣ Interpretability ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Grossmann et al. (2023)
  I. Grossmann, M. Feinberg, D. C. Parker, N. A. Christakis, P. E. Tetlock, and W. A. Cunningham
  AI and the transformation of social science research.
  Science 380 (6650), pp. 1108–1109.
  External Links: ISSN 0036-8075,
  [Document](https://dx.doi.org/10.1126/science.adi1778)
  Cited by: [Introduction](https://arxiv.org/html/2607.01047v1#Sx1.p1.1 "Introduction ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Hahami et al. (2025)
  E. Hahami, I. Sinha, L. Jain, J. Kaplan, and J. Hahami
  Detecting the Disturbance: A Nuanced View of Introspective Abilities in LLMs.
  arXiv.
  External Links: 2512.12411,
  [Document](https://dx.doi.org/10.48550/arXiv.2512.12411)
  Cited by: [Are self-reported queries trustworthy?](https://arxiv.org/html/2607.01047v1#Sx3.SSx1.SSS0.Px1.p1.1 "Are self-reported queries trustworthy? ‣ Interpretability Channels ‣ Interpretability ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Hu and Rong (2025)
  B. A. Hu and H. Rong
  Spore in the wild: a case study of spore.fun as an open-environment evolution experiment with sovereign ai agents on tee-secured blockchains.
  In Artificial Life Conference Proceedings 37,
  Vol. 2025, pp. 10.
  External Links: [Document](https://dx.doi.org/10.1162/ISAL.a.838)
  Cited by: [Sovereign and Evolutionary Language Agents](https://arxiv.org/html/2607.01047v1#Sx4.SSx1.SSSx5.p1.1 "Sovereign and Evolutionary Language Agents ‣ A review of recent agentic substrates ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Hu and Rong (2026)
  B. A. Hu and H. Rong
  Sovereign agents: towards infrastructural sovereignty and diffused accountability in decentralized ai.
  arXiv preprint arXiv:2602.14951.
  External Links: [Document](https://dx.doi.org/10.48550/arXiv.2602.14951)
  Cited by: [Sovereign and Evolutionary Language Agents](https://arxiv.org/html/2607.01047v1#Sx4.SSx1.SSSx5.p1.1 "Sovereign and Evolutionary Language Agents ‣ A review of recent agentic substrates ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Kim et al. (2025)
  B. Kim, J. Hewitt, N. Nanda, N. Fiedel, and O. Tafjord
  Because we have llms, we can and should pursue agentic interpretability.
  External Links: 2506.12152,
  [Link](https://arxiv.org/abs/2506.12152)
  Cited by: [Interpretability Channels](https://arxiv.org/html/2607.01047v1#Sx3.SSx1.p5.1 "Interpretability Channels ‣ Interpretability ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Kim et al. (2016)
  B. Kim, R. Khanna, and O. O. Koyejo
  Examples are not enough, learn to criticize! criticism for interpretability.
  In Advances in Neural Information Processing Systems,
  Vol. 29.
  External Links: [Link](https://papers.nips.cc/paper/2016/hash/5680522b8e2bb01943234bce7bf84534-Abstract.html)
  Cited by: [Interpretability](https://arxiv.org/html/2607.01047v1#Sx3.p2.1 "Interpretability ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Kirby et al. (2008)
  S. Kirby, H. Cornish, and K. Smith
  Cumulative cultural evolution in the laboratory: an experimental approach to the origins of structure in human language.
  Proceedings of the National Academy of Sciences 105 (31), pp. 10681–10686.
  External Links: [Document](https://dx.doi.org/10.1073/pnas.0707835105)
  Cited by: [Table 1](https://arxiv.org/html/2607.01047v1#Sx2.T1.2.7.2.1.1 "In Wet Substrates. ‣ Existing Substrates: Soft, Hard & Wet ‣ Artificial Life Substrates ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Korbak et al. (2025)
  T. Korbak, M. Balesni, E. Barnes, Y. Bengio, J. Benton, J. Bloom, M. Chen, A. Cooney, A. Dafoe, A. Dragan, S. Emmons, O. Evans, D. Farhi, R. Greenblatt, D. Hendrycks, M. Hobbhahn, E. Hubinger, G. Irving, E. Jenner, D. Kokotajlo, V. Krakovna, S. Legg, D. Lindner, D. Luan, A. Madry, J. Michael, N. Nanda, D. Orr, J. Pachocki, E. Perez, M. Phuong, F. Roger, J. Saxe, B. Shlegeris, M. Soto, E. Steinberger, J. Wang, W. Zaremba, B. Baker, R. Shah, and V. Mikulik
  Chain of Thought Monitorability: A New and Fragile Opportunity for AI Safety.
  arXiv.
  External Links: 2507.11473,
  [Document](https://dx.doi.org/10.48550/arXiv.2507.11473)
  Cited by: [Conclusion](https://arxiv.org/html/2607.01047v1#Sx5.p5.1 "Conclusion ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Langton (1989)
  C. G. Langton
  Artificial life.
  In Artificial Life: The Proceedings of an Interdisciplinary Workshop on the Synthesis and Simulation of Living Systems, C. G. Langton (Ed.),
  pp. 1–47.
  Cited by: [What constitutes a good testbed?](https://arxiv.org/html/2607.01047v1#Sx1.SS0.SSS0.Px1.p1.1 "What constitutes a good testbed? ‣ Introduction ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Lehman et al. (2018)
  J. Lehman, J. Clune, D. Misevic, C. Adami, L. Altenberg, J. Beaulieu, P. J. Bentley, S. Bernard, G. Beslon, D. M. Bryson, P. Chrabaszcz, N. Cheney, A. Cully, S. Doncieux, F. C. Dyer, K. O. Ellefsen, R. Feldt, S. Fischer, S. Forrest, A. Frénoy, C. Gagné, L. L. Goff, L. M. Grabowski, B. Hodjat, F. Hutter, L. Keller, C. Knibbe, P. Krcah, R. E. Lenski, H. Lipson, R. MacCurdy, C. Maestre, R. Miikkulainen, S. Mitri, D. E. Moriarty, J. Mouret, A. Nguyen, C. Ofria, M. Parizeau, D. Parsons, R. T. Pennock, W. F. Punch, T. S. Ray, M. Schoenauer, E. Shulte, K. Sims, K. O. Stanley, F. Taddei, D. Tarapore, S. Thibault, W. Weimer, R. Watson, and J. Yosinski
  The Surprising Creativity of Digital Evolution: A Collection of Anecdotes from the Evolutionary Computation and Artificial Life Research Communities.
  arXiv.
  External Links: 1803.03453,
  [Document](https://dx.doi.org/10.48550/arXiv.1803.03453)
  Cited by: [From affordances to conjectures.](https://arxiv.org/html/2607.01047v1#Sx2.SSx3.p1.1 "From affordances to conjectures. ‣ Artificial Life Substrates ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Leonelli (2016)
  S. Leonelli
  Data-centric biology: a philosophical study.
   University of Chicago Press.
  External Links: [Document](https://dx.doi.org/10.7208/chicago/9780226416502.001.0001)
  Cited by: [What constitutes a good testbed?](https://arxiv.org/html/2607.01047v1#Sx1.SS0.SSS0.Px1.p1.1 "What constitutes a good testbed? ‣ Introduction ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Li et al. (2026)
  J. Li, H. Xiong, R. Wilson, M. G. Mattar, and M. K. Benna
  Language models are capable of metacognitive monitoring and control of their internal activations.
  Advances in Neural Information Processing Systems 38, pp. 60073–60108.
  Cited by: [Are self-reported queries trustworthy?](https://arxiv.org/html/2607.01047v1#Sx3.SSx1.SSS0.Px1.p1.1 "Are self-reported queries trustworthy? ‣ Interpretability Channels ‣ Interpretability ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates"),
  [Conclusion](https://arxiv.org/html/2607.01047v1#Sx5.p5.1 "Conclusion ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Lin (2023)
  J. Lin
  Neuronpedia: interactive reference and tooling for analyzing neural networks.
  External Links: [Link](https://www.neuronpedia.org)
  Cited by: [Interpretability Channels](https://arxiv.org/html/2607.01047v1#Sx3.SSx1.p3.1 "Interpretability Channels ‣ Interpretability ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Lindsey et al. (2025)
  J. Lindsey, W. Gurnee, E. Ameisen, B. Chen, A. Pearce, N. L. Turner, C. Citro, D. Abrahams, S. Carter, B. Hosmer, J. Marcus, M. Sklar, A. Templeton, T. Bricken, C. McDougall, H. Cunningham, T. Henighan, A. Jermyn, A. Jones, A. Persic, Z. Qi, T. B. Thompson, S. Zimmerman, K. Rivoire, T. Conerly, C. Olah, and J. Batson
  On the biology of a large language model.
  Transformer Circuits Thread.
  External Links: [Link](https://transformer-circuits.pub/2025/attribution-graphs/biology.html)
  Cited by: [Interpretability Channels](https://arxiv.org/html/2607.01047v1#Sx3.SSx1.p4.1 "Interpretability Channels ‣ Interpretability ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Lindsey (2026)
  J. Lindsey
  Emergent Introspective Awareness in Large Language Models.
  arXiv.
  External Links: 2601.01828,
  [Document](https://dx.doi.org/10.48550/arXiv.2601.01828)
  Cited by: [Are self-reported queries trustworthy?](https://arxiv.org/html/2607.01047v1#Sx3.SSx1.SSS0.Px1.p1.1 "Are self-reported queries trustworthy? ‣ Interpretability Channels ‣ Interpretability ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Lipson and Pollack (2000)
  H. Lipson and J. B. Pollack
  Automatic design and manufacture of robotic lifeforms.
  Nature 406 (6799), pp. 974–978.
  Cited by: [Hard Substrates.](https://arxiv.org/html/2607.01047v1#Sx2.SSx1.SSS0.Px2.p1.1 "Hard Substrates. ‣ Existing Substrates: Soft, Hard & Wet ‣ Artificial Life Substrates ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- McGeer et al. (1990)
  T. McGeer et al.
  Passive dynamic walking.
  Int. J. Robotics Res. 9 (2), pp. 62–82.
  Cited by: [Table 1](https://arxiv.org/html/2607.01047v1#Sx2.T1.2.4.2.1.1 "In Wet Substrates. ‣ Existing Substrates: Soft, Hard & Wet ‣ Artificial Life Substrates ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- McMullin and Varela (1997)
  B. McMullin and F. J. Varela
  Rediscovering computational autopoiesis.
  In Proceedings of the Fourth European Conference on Artificial Life (ECAL97), P. Husbands and I. Harvey (Eds.),
  Cambridge, MA, pp. 38–47.
  Cited by: [Table 1](https://arxiv.org/html/2607.01047v1#Sx2.T1.2.2.2.1.1 "In Wet Substrates. ‣ Existing Substrates: Soft, Hard & Wet ‣ Artificial Life Substrates ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Meek et al. (2025)
  A. Meek, E. Sprejer, I. Arcuschin, A. J. Brockmeier, and S. Basart
  Measuring Chain-of-Thought Monitorability Through Faithfulness and Verbosity.
  arXiv.
  External Links: 2510.27378,
  [Document](https://dx.doi.org/10.48550/arXiv.2510.27378)
  Cited by: [Conclusion](https://arxiv.org/html/2607.01047v1#Sx5.p5.1 "Conclusion ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Miller (2019)
  T. Miller
  Explanation in artificial intelligence: insights from the social sciences.
  Artificial Intelligence 267, pp. 1–38.
  External Links: [Document](https://dx.doi.org/10.1016/j.artint.2018.07.007)
  Cited by: [Interpretability](https://arxiv.org/html/2607.01047v1#Sx3.p2.1 "Interpretability ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Nisioti et al. (2024a)
  E. Nisioti, C. Glanois, E. Najarro, A. Dai, E. Meyerson, J. W. Pedersen, L. Teodorescu, C. F. Hayes, S. Sudhakaran, and S. Risi
  From text to life: on the reciprocal relationship between artificial life and large language models.
  In Artificial Life Conference Proceedings 36,
  Vol. 2024, pp. 39.
  Cited by: [Introduction](https://arxiv.org/html/2607.01047v1#Sx1.p3.1 "Introduction ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Nisioti et al. (2024b)
  E. Nisioti, S. Risi, I. Momennejad, P. Oudeyer, and C. Moulin-Frier
  Collective Innovation in Groups of Large Language Models.
  MIT Press.
  External Links: [Document](https://dx.doi.org/10.1162/isal%5Fa%5F00730)
  Cited by: [Introduction](https://arxiv.org/html/2607.01047v1#Sx1.p3.1 "Introduction ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Odling-Smee et al. (1996)
  F. J. Odling-Smee, K. N. Laland, and M. W. Feldman
  Niche construction.
  The American Naturalist 147 (4), pp. 641–648.
  Cited by: [Table 1](https://arxiv.org/html/2607.01047v1#Sx2.T1.2.4.2.1.1 "In Wet Substrates. ‣ Existing Substrates: Soft, Hard & Wet ‣ Artificial Life Substrates ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Ofria and Wilke (2004)
  C. Ofria and C. O. Wilke
  Avida: a software platform for research in computational evolutionary biology.
  Artificial Life 10 (2), pp. 191–229.
  External Links: [Document](https://dx.doi.org/10.1162/106454604773563612)
  Cited by: [Soft Substrates.](https://arxiv.org/html/2607.01047v1#Sx2.SSx1.SSS0.Px1.p1.1 "Soft Substrates. ‣ Existing Substrates: Soft, Hard & Wet ‣ Artificial Life Substrates ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates"),
  [Table 1](https://arxiv.org/html/2607.01047v1#Sx2.T1.2.3.2.1.1 "In Wet Substrates. ‣ Existing Substrates: Soft, Hard & Wet ‣ Artificial Life Substrates ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Olsson et al. (2022)
  C. Olsson, N. Elhage, N. Nanda, N. Joseph, N. DasSarma, T. Henighan, B. Mann, A. Askell, Y. Bai, A. Chen, T. Conerly, D. Drain, D. Ganguli, Z. Hatfield-Dodds, D. Hernandez, S. Johnston, A. Jones, J. Kernion, L. Lovitt, K. Ndousse, D. Amodei, T. Brown, J. Clark, J. Kaplan, S. McCandlish, and C. Olah
  In-context learning and induction heads.
  Transformer Circuits Thread.
  External Links: [Link](https://transformer-circuits.pub/2022/in-context-learning-and-induction-heads/index.html)
  Cited by: [Interpretability Channels](https://arxiv.org/html/2607.01047v1#Sx3.SSx1.p4.1 "Interpretability Channels ‣ Interpretability ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Paolo et al. (2026)
  G. Paolo, J. Warner, H. Shahrzad, B. Hodjat, R. Miikkulainen, and E. Meyerson
  TerraLingua: emergence and analysis of open-endedness in llm ecologies.
  arXiv preprint arXiv:2603.16910.
  External Links: [Document](https://dx.doi.org/10.48550/arXiv.2603.16910)
  Cited by: [Interpretability Channels](https://arxiv.org/html/2607.01047v1#Sx3.SSx1.p6.1 "Interpretability Channels ‣ Interpretability ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates"),
  [TerraLingua](https://arxiv.org/html/2607.01047v1#Sx4.SSx1.SSSx3.p1.1 "TerraLingua ‣ A review of recent agentic substrates ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Park et al. (2023)
  J. S. Park, J. O’Brien, C. J. Cai, M. R. Morris, P. Liang, and M. S. Bernstein
  Generative agents: interactive simulacra of human behavior.
  In Proceedings of the 36th annual acm symposium on user interface software and technology,
  pp. 1–22.
  Cited by: [Interpretability Channels](https://arxiv.org/html/2607.01047v1#Sx3.SSx1.p6.1 "Interpretability Channels ‣ Interpretability ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Perez et al. (2023)
  E. Perez, S. Ringer, K. Lukošiūtė, K. Nguyen, E. Chen, et al.
  Discovering language model behaviors with model-written evaluations.
  In Findings of the Association for Computational Linguistics: ACL 2023,
  pp. 13387–13434.
  External Links: 2212.09251,
  [Link](https://aclanthology.org/2023.findings-acl.847/),
  [Document](https://dx.doi.org/10.18653/v1/2023.findings-acl.847)
  Cited by: [Interpretability Channels](https://arxiv.org/html/2607.01047v1#Sx3.SSx1.p1.1 "Interpretability Channels ‣ Interpretability ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Pfau et al. (2024)
  J. Pfau, W. Merrill, and S. R. Bowman
  Let’s think dot by dot: hidden computation in transformer language models.
  arXiv preprint arXiv:2404.15758.
  Cited by: [Are self-reported queries trustworthy?](https://arxiv.org/html/2607.01047v1#Sx3.SSx1.SSS0.Px1.p1.1 "Are self-reported queries trustworthy? ‣ Interpretability Channels ‣ Interpretability ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Plantec et al. (2023)
  E. Plantec, G. Hamon, M. Etcheverry, P. Oudeyer, C. Moulin-Frier, and B. W. Chan
  Flow-lenia: towards open-ended evolution in cellular automata through mass conservation and parameter localization.
  In Artificial Life Conference Proceedings (ALIFE 2023),
  pp. 131.
  External Links: [Document](https://dx.doi.org/10.1162/isal%5Fa%5F00651)
  Cited by: [Soft Substrates.](https://arxiv.org/html/2607.01047v1#Sx2.SSx1.SSS0.Px1.p1.1 "Soft Substrates. ‣ Existing Substrates: Soft, Hard & Wet ‣ Artificial Life Substrates ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates"),
  [Table 1](https://arxiv.org/html/2607.01047v1#Sx2.T1.2.5.2.1.1 "In Wet Substrates. ‣ Existing Substrates: Soft, Hard & Wet ‣ Artificial Life Substrates ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Ray (1991)
  T. S. Ray
  An approach to the synthesis of life.
  In Artificial Life II, C. G. Langton, C. Taylor, J. D. Farmer, and S. Rasmussen (Eds.),
  Santa Fe Institute Studies in the Sciences of Complexity, Vol. X, pp. 371–408.
  Cited by: [Soft Substrates.](https://arxiv.org/html/2607.01047v1#Sx2.SSx1.SSS0.Px1.p1.1 "Soft Substrates. ‣ Existing Substrates: Soft, Hard & Wet ‣ Artificial Life Substrates ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates"),
  [Table 1](https://arxiv.org/html/2607.01047v1#Sx2.T1.2.3.2.1.1 "In Wet Substrates. ‣ Existing Substrates: Soft, Hard & Wet ‣ Artificial Life Substrates ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Reynolds (1987)
  C. W. Reynolds
  Flocks, herds and schools: a distributed behavioral model.
  In Proceedings of the 14th annual conference on Computer graphics and interactive techniques,
  pp. 25–34.
  Cited by: [Soft Substrates.](https://arxiv.org/html/2607.01047v1#Sx2.SSx1.SSS0.Px1.p1.1 "Soft Substrates. ‣ Existing Substrates: Soft, Hard & Wet ‣ Artificial Life Substrates ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Rubenstein et al. (2014)
  M. Rubenstein, A. Cornejo, and R. Nagpal
  Programmable self-assembly in a thousand-robot swarm.
  Science 345 (6198), pp. 795–799.
  Cited by: [Hard Substrates.](https://arxiv.org/html/2607.01047v1#Sx2.SSx1.SSS0.Px2.p1.1 "Hard Substrates. ‣ Existing Substrates: Soft, Hard & Wet ‣ Artificial Life Substrates ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Rus and Tolley (2015)
  D. Rus and M. T. Tolley
  Design, fabrication and control of soft robots.
  Nature 521 (7553), pp. 467–475.
  Cited by: [Hard Substrates.](https://arxiv.org/html/2607.01047v1#Sx2.SSx1.SSS0.Px2.p1.1 "Hard Substrates. ‣ Existing Substrates: Soft, Hard & Wet ‣ Artificial Life Substrates ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Schelling (1971)
  T. C. Schelling
  Dynamic models of segregation.
  Journal of Mathematical Sociology 1, pp. 143–186.
  External Links: [Link](https://api.semanticscholar.org/CorpusID:120637340)
  Cited by: [Soft Substrates.](https://arxiv.org/html/2607.01047v1#Sx2.SSx1.SSS0.Px1.p1.1 "Soft Substrates. ‣ Existing Substrates: Soft, Hard & Wet ‣ Artificial Life Substrates ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Secretan et al. (2011)
  J. Secretan, N. Beato, D. B. D’Ambrosio, A. Rodriguez, A. Campbell, J. T. Folsom-Kovarik, and K. O. Stanley
  Picbreeder: a case study in collaborative evolutionary exploration of design space.
  Evolutionary Computation 19 (3), pp. 373–403.
  External Links: [Document](https://dx.doi.org/10.1162/EVCO%5Fa%5F00030)
  Cited by: [Table 1](https://arxiv.org/html/2607.01047v1#Sx2.T1.2.8.2.1.1 "In Wet Substrates. ‣ Existing Substrates: Soft, Hard & Wet ‣ Artificial Life Substrates ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Shapira et al. (2026)
  N. Shapira, C. Wendler, A. Yen, G. Sarti, K. Pal, O. Floody, A. Belfki, A. Loftus, A. R. Jannali, N. Prakash, et al.
  Agents of chaos.
  arXiv preprint arXiv:2602.20021.
  External Links: [Document](https://dx.doi.org/10.48550/arXiv.2602.20021)
  Cited by: [Agents of Chaos](https://arxiv.org/html/2607.01047v1#Sx4.SSx1.SSSx1.p1.1 "Agents of Chaos ‣ A review of recent agentic substrates ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Sharma et al. (2024)
  M. Sharma, M. Tong, T. Korbak, D. Duvenaud, A. Askell, S. Bowman, E. Durmus, Z. Hatfield-Dodds, S. Johnston, S. Kravec, et al.
  Towards understanding sycophancy in language models.
  In International Conference on Learning Representations,
  Vol. 2024, pp. 110–144.
  Cited by: [Are self-reported queries trustworthy?](https://arxiv.org/html/2607.01047v1#Sx3.SSx1.SSS0.Px1.p1.1 "Are self-reported queries trustworthy? ‣ Interpretability Channels ‣ Interpretability ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Sims (1994)
  K. Sims
  Evolving virtual creatures.
  In Proceedings of the 21st Annual Conference on Computer Graphics and Interactive Techniques (SIGGRAPH ’94),
  New York, NY, USA, pp. 15–22.
  External Links: [Document](https://dx.doi.org/10.1145/192161.192167)
  Cited by: [Soft Substrates.](https://arxiv.org/html/2607.01047v1#Sx2.SSx1.SSS0.Px1.p1.1 "Soft Substrates. ‣ Existing Substrates: Soft, Hard & Wet ‣ Artificial Life Substrates ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Soros and Stanley (2014)
  L. B. Soros and K. O. Stanley
  Identifying necessary conditions for open-ended evolution through the artificial life world of chromaria.
  In Artificial Life 14: Proceedings of the Fourteenth International Conference on the Synthesis and Simulation of Living Systems, H. Sayama, J. Rieffel, S. Risi, R. Doursat, and H. Lipson (Eds.),
  pp. 793–800.
  External Links: [Document](https://dx.doi.org/10.7551/978-0-262-32621-6-ch128)
  Cited by: [Table 1](https://arxiv.org/html/2607.01047v1#Sx2.T1.2.8.2.1.1 "In Wet Substrates. ‣ Existing Substrates: Soft, Hard & Wet ‣ Artificial Life Substrates ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Steels (2015)
  L. Steels
  The talking heads experiment: origins of words and meanings.
  Computational Models of Language Evolution, Language Science Press, Berlin.
  External Links: ISBN 978-3-944675-77-0,
  [Document](https://dx.doi.org/10.17169/FUDOCS%5Fdocument%5F000000022455)
  Cited by: [Table 1](https://arxiv.org/html/2607.01047v1#Sx2.T1.2.7.2.1.1 "In Wet Substrates. ‣ Existing Substrates: Soft, Hard & Wet ‣ Artificial Life Substrates ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Suarez et al. (2019)
  J. Suarez, Y. Du, P. Isola, and I. Mordatch
  Neural mmo: a massively multiagent game environment for training and evaluating intelligent agents.
  arXiv preprint arXiv:1903.00784.
  Cited by: [Soft Substrates.](https://arxiv.org/html/2607.01047v1#Sx2.SSx1.SSS0.Px1.p1.1 "Soft Substrates. ‣ Existing Substrates: Soft, Hard & Wet ‣ Artificial Life Substrates ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Syed et al. (2024)
  A. Syed, C. Rager, and A. Conmy
  Attribution patching outperforms automated circuit discovery.
  In Proceedings of the 7th BlackboxNLP Workshop:
  Analyzing and Interpreting Neural Networks for NLP,
  pp. 407–416.
  External Links: 2310.10348,
  [Link](https://aclanthology.org/2024.blackboxnlp-1.25/),
  [Document](https://dx.doi.org/10.18653/v1/2024.blackboxnlp-1.25)
  Cited by: [Interpretability Channels](https://arxiv.org/html/2607.01047v1#Sx3.SSx1.p2.1 "Interpretability Channels ‣ Interpretability ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Taylor et al. (2016)
  T. Taylor, M. Bedau, A. Channon, D. Ackley, W. Banzhaf, G. Beslon, E. Dolson, T. Froese, S. Hickinbotham, T. Ikegami, B. McMullin, N. Packard, S. Rasmussen, N. Virgo, E. Agmon, E. Clark, S. McGregor, C. Ofria, G. Ropella, L. Spector, K. O. Stanley, A. Stanton, C. Timperley, A. Vostinar, and M. Wiser
  Open-ended evolution: perspectives from the OEE workshop in York.
  Artificial Life 22 (3), pp. 408–423.
  External Links: [Document](https://dx.doi.org/10.1162/ARTL%5Fa%5F00210)
  Cited by: [Agentic Substrates](https://arxiv.org/html/2607.01047v1#Sx2.SSx2.p2.1 "Agentic Substrates ‣ Artificial Life Substrates ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Templeton et al. (2024)
  A. Templeton, T. Conerly, J. Marcus, J. Lindsey, T. Bricken, B. Chen, A. Pearce, C. Citro, E. Ameisen, A. Jones, H. Cunningham, N. L. Turner, C. McDougall, M. MacDiarmid, C. D. Freeman, T. R. Sumers, E. Rees, J. Batson, A. Jermyn, S. Carter, C. Olah, and T. Henighan
  Scaling monosemanticity: extracting interpretable features from Claude 3 Sonnet.
  Transformer Circuits Thread.
  External Links: [Link](https://transformer-circuits.pub/2024/scaling-monosemanticity/)
  Cited by: [Interpretability Channels](https://arxiv.org/html/2607.01047v1#Sx3.SSx1.p3.1 "Interpretability Channels ‣ Interpretability ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Theraulaz and Bonabeau (1999)
  G. Theraulaz and E. Bonabeau
  A brief history of stigmergy.
  Artificial Life 5 (2), pp. 97–116.
  External Links: [Document](https://dx.doi.org/10.1162/106454699568700)
  Cited by: [Table 1](https://arxiv.org/html/2607.01047v1#Sx2.T1.2.4.2.1.1 "In Wet Substrates. ‣ Existing Substrates: Soft, Hard & Wet ‣ Artificial Life Substrates ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Tull et al. (2024)
  S. Tull, R. Lorenz, S. Clark, I. Khan, and B. Coecke
  Towards Compositional Interpretability for XAI.
  arXiv.
  External Links: 2406.17583,
  [Document](https://dx.doi.org/10.48550/arXiv.2406.17583)
  Cited by: [Interpretability Channels](https://arxiv.org/html/2607.01047v1#Sx3.SSx1.p4.1 "Interpretability Channels ‣ Interpretability ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Varela et al. (1974)
  F. G. Varela, H. R. Maturana, and R. Uribe
  Autopoiesis: the organization of living systems, its characterization and a model.
  BioSystems 5 (4), pp. 187–196.
  External Links: [Document](https://dx.doi.org/10.1016/0303-2647%2874%2990031-8)
  Cited by: [Table 1](https://arxiv.org/html/2607.01047v1#Sx2.T1.2.2.2.1.1 "In Wet Substrates. ‣ Existing Substrates: Soft, Hard & Wet ‣ Artificial Life Substrates ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Weisberg (2013)
  M. Weisberg
  Simulation and similarity: using models to understand the world.
   Oxford University Press.
  External Links: [Document](https://dx.doi.org/10.1093/acprof%3Aoso/9780199933662.001.0001)
  Cited by: [What constitutes a good testbed?](https://arxiv.org/html/2607.01047v1#Sx1.SS0.SSS0.Px1.p1.1 "What constitutes a good testbed? ‣ Introduction ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Winsberg (2010)
  E. Winsberg
  Science in the age of computer simulation.
   University of Chicago Press.
  External Links: [Document](https://dx.doi.org/10.7208/9780226902050)
  Cited by: [What constitutes a good testbed?](https://arxiv.org/html/2607.01047v1#Sx1.SS0.SSS0.Px1.p1.1 "What constitutes a good testbed? ‣ Introduction ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
- Yaeger (1994)
  L. Yaeger
  Computational genetics, physiology, metabolism, neural systems, learning, vision, and behavior or PolyWorld: life in a new context.
  In Artificial Life III, C. G. Langton (Ed.),
  Santa Fe Institute Studies in the Sciences of Complexity, Proc. Vol. XVII, pp. 263–298.
  Cited by: [Table 1](https://arxiv.org/html/2607.01047v1#Sx2.T1.2.8.2.1.1 "In Wet Substrates. ‣ Existing Substrates: Soft, Hard & Wet ‣ Artificial Life Substrates ‣ Conversable Complexity:Agentic LLM Collectives as Interpretable Substrates").
