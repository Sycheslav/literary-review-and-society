# AI Society: General Concept and Research Plan

**Social organization of AI agents, collective problem solving, and an experimental programme for Laboratory No. 57 “Active Systems,” Institute of Control Sciences, Russian Academy of Sciences**

**Version:** 1.3 · 31 October 2026  
**Status:** Working basis for discussion with colleagues. The laboratory has not approved the experiments, budget, team composition, or testbed architecture.

This document is a substantive English representation of every chapter in the Russian concept. It preserves the concept’s proposed definitions, questions, designs, limits, and open decisions; it does not turn them into approved laboratory commitments. The literature claims and novelty statements below are those recorded in the source concept and have not been independently rechecked for this English rendering. The concept’s terminology about “society,” “friendship,” and a “verhum” is operational or metaphorical; it is not evidence of human-like feeling or consciousness.

The source is Литературный обзор граф/site/content/concept.md. Its byte-identical v1.3 snapshot is Литературный обзор граф/site/content/analyses/schema/concept-v1.3.snapshot.md (SHA-256: 67503795164da02a9e88f50b6c927184e40ead8799af8cd6da7a0b63b885f466). The question snapshot concept-questions-v1.3.json records H1–H10 from §11. The separate metadata file concept-v1.3.snapshot.meta.json describes the snapshot as literal and says the questions and chapters are not approved hypotheses.

## Navigation

- [§0. Terms and definitions](#0-terms-and-definitions)
- [§1. The project in brief](#1-the-project-in-brief)
- [§2. Aims, boundaries, and expected contribution](#2-aims-boundaries-and-expected-contribution)
- [§3. Connecting Verhum and the laboratory](#3-connecting-verhum-and-the-laboratory)
- [§4. General research model](#4-general-research-model)
- [§5. Core scenario: a community of forecasters](#5-core-scenario-a-community-of-forecasters)
- [§6. The economics of the environment](#6-the-economics-of-the-environment)
- [§7. Agent design](#7-agent-design)
- [§8. Associations and collective agency](#8-associations-and-collective-agency)
- [§9. Experimenter and infrastructure roles](#9-experimenter-and-infrastructure-roles)
- [§10. Modes for studying organization](#10-modes-for-studying-organization)
- [§11. Testable questions and hypotheses](#11-testable-questions-and-hypotheses)
- [§12. Portfolio of experiments](#12-portfolio-of-experiments)
- [§13. Measures and evidence](#13-measures-and-evidence)
- [§14. Methodological rules](#14-methodological-rules)
- [§15. Experimental testbed requirements](#15-experimental-testbed-requirements)
- [§16. Choosing models, wrappers, and services](#16-choosing-models-wrappers-and-services)
- [§17. Estimating cost and time](#17-estimating-cost-and-time)
- [§18. Linking the literature review to original research](#18-linking-the-literature-review-to-original-research)
- [§19. Work plan and stage gates](#19-work-plan-and-stage-gates)
- [§20. Project outputs and success criteria](#20-project-outputs-and-success-criteria)
- [§21. Open decisions for discussion](#21-open-decisions-for-discussion)
- [§22. Eight ideas for an initial series](#22-eight-ideas-for-an-initial-series)

## 0. Terms and definitions

The source distinguishes definitions from three traditions: active systems theory (AST), concepts in Georgy Vasiliev’s book *Verhum*, and working definitions introduced for this project. See §0.5 for the cited sources.

### 0.1. Agents and active systems

- **Agent / AI agent.** A participant choosing an action from its available history: aᵢ = πᵢ(hᵢ), where hᵢ is the history of observations and interactions and πᵢ is the choice procedure. For an AI agent, the procedure relies on a language model, while the software environment supplies its identity, memory, and action set. In hierarchical AST models, an agent is a managed subject that chooses an action knowing the centre’s decision.
- **Active element / active system (AST).** An active element chooses its own actions, including which information to disclose. An active system contains at least one active element.
- **Centre (AST).** A participant that first sets rules or a control action and receives responses from agents. The technical operator of the environment is not automatically the centre.
- **Agent type (AST).** A preference parameter in uᵢ(a; θᵢ), where θᵢ is the type, a the joint action, and uᵢ the agent’s utility. A type may be private information. A model name or assigned persona is not a type.

### 0.2. Mechanisms, equilibria, and reflection

- **Functioning and control mechanisms (AST).** A functioning mechanism sets participant interaction rules; a control mechanism sets procedures for control decisions, such as rewards, representative selection, or rule changes.
- **Interest alignment (AST).** A mechanism is aligned when agents acting according to their preferences lead the system to the desired outcome. This can be tested only after preferences and a game solution concept have been specified.
- **Nash equilibrium.** A joint choice from which no participant benefits by unilateral deviation: uᵢ(aᵢ*, a₋ᵢ*) ≥ uᵢ(aᵢ, a₋ᵢ*) for every participant i and every feasible aᵢ. This expression is for pure actions.
- **Reflexive game (Laboratory No. 57 school).** A game with hierarchies of representations: what an agent believes to be true and what it believes others believe. A **phantom agent** is a participant represented in this hierarchy; no separate AI agent is run for it. **Reflection rank** is the depth of representations taken into account.
- **Information equilibrium (Laboratory No. 57 school).** A generalization of Nash equilibrium for a reflexive game: real and phantom agents choose best responses within their representation hierarchies, which are consistent under the model’s conditions.
- **Active forecast (AST).** A statement about the future used for control which may change the outcome through recipients’ actions. In the project’s forecasting scenario it must be distinguished from a forecast of an external event.

### 0.3. Verhum concepts and collective intelligence

- **Society.** In the book, a human community treated as a social organism; in this project, a population of AI agents with stable, reproducible relations and practices of joint activity.
- **Verhum.** In Vasiliev’s narrow sense, the intelligence of a society; in the broader sense, its personality—memory, culture, purposeful action, and a representation of itself. Here it is a framework for testing properties of a collective. Registering a group under the name “verhum” does not mean it has those properties.
- **Meme / meme complex (Verhum).** A unit of cultural content that can be transmitted—an idea, meaning, rule, or method of action—and a related set of such units. Experiments track how content is adopted, changed, and used.
- **Institution / cultural order.** An institution is an operative combination of rules, roles, authority, and procedures. A cultural order is a reproducible organization of institutions and coordination practices. Institutions imposed by the environment and those created by agents must be counted separately.
- **Four cultures (Verhum).** Subordination coordinates through binding decisions and hierarchy; trust through reliance on people and sources; exchange through reciprocal services; participation through voluntary contribution to a common cause. Real collectives combine these modes.
- **Culture of criticism (Verhum).** Practices for checking claims, finding errors, and revising accepted beliefs. It is judged by corrected errors, not the number of objections.
- **Collective memory.** Experience available to a collective through participants, artifacts, and transfer procedures, and which affects later actions. A shared archive alone does not establish collective memory.
- **Distributed / collective intelligence.** In Laboratory No. 57’s work, a collective agent’s ability to perceive, process, and use information for its own goals. The term does not imply superiority over a single agent.
- **Collective agency (project definition).** An association’s ability to make coordinated decisions, fulfil commitments, and act externally in its own name. It is assessed through actions.

### 0.4. Observable properties of an AI society

The protocol for each experiment specifies thresholds and observation duration.

A **social tie** is a reproducible relation visible in partner choice, exchange, help, or delegation. A **role** is a reproducible function performed by a participant; an assigned role, a self-description, and actual specialization are distinct. A **coalition** is a set of participants acting together for shared gain or influence, evidenced by their actions rather than their registration.

A **convention** is an established agreement on how to coordinate. A **norm** adds an expectation of proper conduct and a response to violation. **Trust** is willingness to rely on another’s information while risking a loss. **Reputation** is an assessment of past activity available to others; either may diverge from the source’s actual reliability.

**Self-organization** is the formation and change of ties, roles, and rules during interaction. An **emergent property** is a system-level property arising from interactions. Because the experimenter always defines the choice space, each study must test how much the outcome is explained by instructions, environment design, and incentives.

**Collective gain (project definition):** ΔQ = Q₍collective₎ − Q₍control₎, with comparable resources and information and with larger Q denoting a better outcome (see §13).

**“Agent friendship” (project definition):** a working label for a stable preference for particular partners, mutual help, and continuing a tie when alternatives exist. It must be assessed through actions and costs.

### 0.5. Sources for definitions

1. Georgy Vasiliev, *Verhum*: society versus verhum, pp. 37–38; memes, institutions, and cultural order, ch. 2, pp. 41–87; four cultures, pp. 109–147; collective memory, pp. 155–161; culture of criticism, pp. 168–174; purposefulness and consciousness in the author’s model, pp. 183–207. Page numbers refer to the original book.
2. D. A. Novikov, [Glossary of Organizational Control Systems Theory](https://www.mtas.ru/uploads/file_140.html) (agent, type, mechanism); [AST glossary](https://mtas.ru/Glossary.htm) (active element, active system, centre, active forecast).
3. D. A. Novikov, [Introductory Course in Organizational Control Systems Theory](https://www.mtas.ru/start/vkurs.pdf): formal models of centre–agent interaction, mechanisms, and equilibria.
4. D. A. Novikov and A. G. Chkhartishvili, [Models of Reflexive Decision-Making](https://www.mathnet.ru/rus/pu537), *Control Sciences*, 2004, no. 4, pp. 62–70; [Reflection and Control](https://www.mtas.ru/upload/RC2021_fin_Rus.pdf), 2021: hierarchies of representations, real and phantom agents, information equilibrium.
5. Yu. L. Slovokhotov and D. A. Novikov, [Distributed Intelligence of Multi-Agent Systems. Part I. Main Characteristics and Simplest Forms](https://www.ipu.ru/node/75637), *Control Sciences*, 2023, no. 5, pp. 3–22. DOI: 10.25728/pu.2023.5.1.

## 1. The project in brief

The project asks **under what conditions interacting AI agents form a stable organization and how it affects joint problem solving**. It is concerned with ties, division of labour, roles, coalitions, trust, exchange, norms, collective memory, and ways to change rules. The main case involves agents with their own interests and incomplete information: they may cooperate, but whether cooperation emerges and pays off is an empirical question.

The initial testbed concept is about twenty agents on one PC. Each would have its own state and memory; agents would interact through a shared space such as a forum and, in some conditions, private messages. They could use different language models and wrappers. Population size, memory type, communication channels, and model mix remain experimental parameters.

The main scenario is repeated forecasting with objective verification. Agents receive different information, spend resources, earn rewards for results, exchange services, and may form groups with shared rules, assets, and representatives. The study asks whether such structures emerge, what sustains them, and whether they outperform a single agent, an independent ensemble, and simple algorithms. Controlled synthetic tasks—resource allocation, public goods, and information games—complement the forecasting scenario because interests and information can be specified precisely.

The project operationalizes ideas from *Verhum* about collective thought, cultural order, institutions, and supra-individual memory. From active systems theory it draws the analysis of private information, conflicting interests, control mechanisms, and informational influence.

The near-term outcome is a reasoned choice of a research question and experimental design. The longer-term outcome is a reproducible testbed and a series of studies on **which forms of organization work, for which agents, under which constraints, and at what cost**.

## 2. Aims, boundaries, and expected contribution

### 2.1. Theoretical aim

Understand how social organization in populations of AI agents arises, reproduces, and changes, and how the environment’s design affects system outcomes through participant behaviour. The core questions are:

1. Which opportunities and constraints make agents need to interact?
2. Which ties, roles, and rules do they choose when alternatives are available?
3. When are these structures stable, and when do they dissolve or become merely formal?
4. How can the contribution of organization be separated from model capability, information volume, and extra computation?
5. When does individual gain align with collective outcomes, and when does it lead to collusion, deception, or destruction of a shared resource?

### 2.2. Applied and methodological aims

The applied aim is to test whether an organized community of agents solves repeated forecasting and management tasks more accurately, robustly, or cheaply than alternatives once communication, coordination, and verification costs are counted. A null or negative result is useful if it shows when a multi-agent organization is justified and when one worker or an ordinary ensemble is sufficient.

The methodological aim is a reproducible way to study artificial societies: a formal description of the environment, controlled interventions, observation of actions, objective measures, and complete provenance for each result.

### 2.3. Boundaries of inference

The first-stage object is a specific set of software agents in a specific environment. Extrapolation to people requires separate validation.

“Friendship,” “society,” “life,” “death,” and “verhum” are working concepts or metaphors in this project. Agents’ claims about feelings or consciousness can be analyzed as data but do not establish subjective experience. The project does not assume that a society will form or that a collective will outperform alternatives. Failure to form stable ties or losing to a simple algorithm under a sound design is also a result.

## 3. Connecting Verhum and the laboratory

### 3.1. What the project takes from the idea of verhum

The book’s central idea for this project is that a collective’s capabilities depend on how relations among participants are organized. Memory, knowledge transfer, authority allocation, and criticism procedures may outlast individual members, so their effects can be studied separately from individual abilities. Each idea is translated into observable mechanisms:

| Idea | What the experiment observes |
| --- | --- |
| Thinking among participants | Distributed information is combined into a decision unavailable to any one participant |
| Memes and their movement | The origin, change, and use of claims, solution methods, and labels |
| Institutions | Rules are adopted, applied, violated, revised, and transferred to newcomers |
| Verhum memory | Experience survives participant turnover and changes later actions |
| The collective’s own goals | An association sustains its chosen order and recovers after disruptions |
| A planet of verhums | Groups compete, trade, borrow rules, admit migrants, and form alliances |

The four coordination cultures—subordination, trust, exchange, and participation—become concrete procedures that can be compared on the same task (see §12.3). Culture of criticism is a cross-cutting factor that can be applied to any of them. The project does not assume in advance which culture will be better; the answer depends on the task and participants’ interests.

### 3.2. Where the laboratory contributes

| Laboratory area | Contribution to this project | Testable outcome |
| --- | --- | --- |
| Active systems theory | Formalize centre and participant interests, private information, and allocation mechanisms | Compare LLM actions with mechanism predictions |
| Synthesis of organizational structures | Design allocation of functions and authority | Conditions under which hierarchy, network, market, or hybrid arrangements help |
| Information control and reflection | Control knowledge about the situation and about what others know | Effects of information signals and depth of strategic response |
| Social-network models | Analyze influence of position, connectivity, and reputation | Why centres of influence form and cooperation persists |
| Project management | Tasks with dependencies and conflicting local goals | Work allocation quality, duplication, and coordination losses |
| Integrated evaluation | Separate quality, efficiency, robustness, and distribution of gains | Multi-criteria assessment of organizational choices |
| Evolutionary development | Select and transmit rules under competition and membership change | Whether an institution’s spread tracks its usefulness |

This table is a basis for choosing research problems with colleagues; it does not assign staff obligations.

## 4. General research model

### 4.1. Components of an experiment

Each experiment is described at five levels:

1. **External task:** what must be solved and how the outcome is checked.
2. **Participants:** each participant’s information, capabilities, goals, and resources.
3. **Environment mechanism:** permitted actions, communication, accounting, and enforcement of commitments.
4. **Organization that arises:** actual ties, roles, coalitions, procedures, and artifacts.
5. **Outcome:** quality, costs, distribution of gains, stability, and error correction.

Causal analysis focuses on how the first three levels lead to the last two: observing a group does not show that the group caused a better outcome. A precise mathematical formulation belongs in the protocol for each experiment, together with assumptions behind theoretical predictions, including knowledge of rules, access to information, horizon, and rationality criterion.

### 4.2. Specify interests through consequences

Misaligned interests should be created through consequences of actions: private costs, information access, shares of income, and risk of loss. Calling an agent “selfish” in a prompt is insufficient. A specified payoff also does not guarantee that a model will optimize it, so pilots must first check whether the model understands the rules and responds to simple changes in payoffs.

### 4.3. Self-organization is always conditional

The experimenter specifies language, actions, memory, time, and world rules. The question is therefore: **which elements of organization do participants choose within the specified choice space, and how much does the outcome depend on its design?** Each experiment records separately what was assigned by instruction, incentivized by payment, allowed without being prescribed, and what actually emerged and survived checks.

## 5. Core scenario: a community of forecasters

### 5.1. Why forecasting

Repeated forecasting provides a shared task and external feedback: error is measured against an outcome, not the persuasiveness of an explanation. Access to data can be divided, specializations can be complementary, and information trades can be observed. Candidate domains include energy use, weather, water levels, transport demand, and flight delays. Selection depends on data availability, verification delay, and the strength of a baseline forecast. Data feeds have not yet been connected.

A first task needs many comparable episodes; an unambiguous target, horizon, and forecast lock time; a specified source of truth; a recoverable record of the information available to each agent; several complementary information types; a strong simple baseline; and a held-out evaluation set. If everyone can access all information for free, a collective may be unnecessary. If information is artificially split, any gain may be an artifact of that split.

### 5.2. Three stages of environment

- **Synthetic environment:** researchers generate the process and know its hidden parameters and true outcomes. Mechanisms are easiest to test, but inference is limited to the artificial process.
- **Historical replay:** data are revealed according to simulated time. This is fast for debugging, but the model may have seen outcomes during training, so leakage checks are needed.
- **Prospective forecasting:** forecasts are locked before an event and evaluated later. This is the main way to establish applied value, although it takes calendar time.

### 5.3. Episode cycle and comparisons

The environment publishes a task, horizon, deadline, and scoring rule. Agents receive information according to access rights, with all reads and purchases logged; they communicate, negotiate, and submit individual or collective forecasts that cannot be changed after the deadline. When the outcome becomes available, the environment computes error and payments. Before the next task, participants may update memory, relations, and rules.

The minimum comparison set is a simple domain-specific forecast, a single agent with comparable resources, independent forecasts with mechanical aggregation, and a communicating community. The error function or calibration score is selected in advance. Payment rules are a separate choice: accuracy, honest probability reporting, and winning a tournament require different incentives.

## 6. The economics of the environment

### 6.1. Two budgets

The **internal economy** consists of model coins, income, information prices, assistance, loans, and costs of remaining active; it creates a choice situation for agents. **Real expenses**—API calls, computation, data, and human labour—are paid by the laboratory independently of game accounts. Even if an in-game action cost is tied to token use, the two accounts remain separate.

A basic economy includes starting capital, income for verified results, costs for information and communication, voluntary transfers, and purchased services. Credit, insurance, bankruptcy, and auctions should be added only for a specific research question; otherwise the result becomes hard to explain. Before a run, accounting must be checked for consistency: resource sources and destinations, backing for promises, and the possibility of paying twice for one outcome through duplicate associations.

### 6.2. Do not create cooperation through the payment rule

Both solo work and association must remain viable. If only groups can earn rewards, or a solo agent is unprofitable by definition, group formation follows directly from the rules. A pilot should find a range of costs and rewards in which different strategies can survive. The study should identify whether organization arose from complementary information, lower costs, risk sharing, or a loophole in the payment rules.

### 6.3. Quality, income, and social welfare

These are separate quantities: forecast quality, participant income under the payment rule, and system outcome including real costs. Rank-based payment increases competition; payment for absolute quality can induce different behaviour; and a rule encouraging truthful probability reports may lose that property under limited funds. Transfers among participants are redistribution, not collective gain by themselves.

### 6.4. Ending activity

The initial design deactivates an agent without coins. Compare this condition with one where agents remain active, to separate repeated interaction from survival selection: fewer violations among those still present may mean that violators simply dropped out. Survival and accumulation are assigned goals or possible strategies, not presumed natural desires of a model.

## 7. Agent design

### 7.1. State and memory

An agent has a stable identifier, model and wrapper configuration, initial instructions, private information, memory, resources, access rights, and action history. Its information state is defined by what the environment actually showed it. Calling an agent an “analyst” does not establish skill; a deliberately assigned skill cannot later be reported as emergent specialization.

Memory may be episodic (what happened to the agent), domain-related (knowledge and methods), social (relations, promises, conflicts), or procedural (rules, division of functions, who can do what). A wiki, constitution, forum, and private notebooks serve different purposes. An unused archive is not collective memory. Since memory compression can distort events, original records are retained.

### 7.2. Diversity and change

Participants may differ in model, information, interests, resources, history, wrapper, network position, or assigned persona. The number of identifiers is not the number of independent viewpoints: agents using one model may have correlated errors. Diversity is therefore measured through actions and errors.

In the baseline, only memory, plans, and relations change. Editing one’s own instructions, adding tools, and creating new agents are separate experimental factors. If a group improves through accumulated memory and procedures while model weights remain fixed, that is organizational learning within the testbed.

## 8. Associations and collective agency

### 8.1. Informal and formal associations

An informal group is identified through interaction—repeated trades, joint tasks, or assistance. A formal group appears after registration in the environment. These observations are analyzed separately. Registration may provide a shared account, document space, the right to submit a joint result, and representative selection. Its record specifies founders, membership and exit rules, resources, representation, decision procedure, income distribution, and dissolution procedure. Whether members use these capabilities in a coordinated way is established only through actions.

Allowing an agent to belong to several groups may accelerate knowledge exchange but create conflicts of interest. Comparing allowed with prohibited multiple membership is a separate experiment.

### 8.2. The collective must not be a hidden extra agent

By default, a group acts through its members and an established procedure. A separate LLM making group decisions is extra computational resource and must be counted in budgets and comparisons. A message sent in the group’s name may be a unilateral act by its representative; analysis must show how a proposal became binding, who objected, and whether the decision was carried out.

### 8.3. Assessing autonomy

Measure separately whether an association fulfils commitments, coordinates member actions, retains procedures after a representative changes, uses memory on new tasks, survives the departure of some members, and corrects itself after errors. At an early stage, report a profile of these properties. A single “verhum index” would require a separate methodological justification and defensible weights; it must not be called a measure of consciousness.

## 9. Experimenter and infrastructure roles

The initial concept grouped the support layer under the name “Model Host.” It is separated here into four functions:

- **Deterministic core:** environment code for registries, permissions, structured actions, accounts, deadlines, and objective scoring. The same events must always produce the same outcome. Payments and deactivation should be calculated by code because an LLM administrator would add error and variation.
- **Administrator and arbitration:** in a simple version, the administrator follows fixed procedures. An expanded study may compare dispute resolution by a centre, elected arbiter, or AI mediator. If agents write rules, the conversion of agreement text into an executable procedure must be logged.
- **Analyst:** an AI analyst may find episodes, label roles, and prepare summaries, but people make scientific conclusions. The analyst must not tell participants which organization is expected.
- **Experimenter:** a person sets the question, records the protocol, and evaluates limitations. Any manual help to agents, prompt change, or state edit is logged.

## 10. Modes for studying organization

- **Free formation of structure:** agents have basic actions and resources, but roles and social form are not assigned. Observe what forms and under which conditions.
- **Comparison of specified mechanisms:** implement concrete procedures for the same task—central assignment, reputation-based selection, a market, or a common fund. This estimates the effect of the procedure; resulting roles are not spontaneous.
- **Changeable institutions:** participants propose, adopt, and revise rules within specified authority. Study the cost of agreement, enforceability, and ability to correct a poor decision.

These modes may be combined if the study distinguishes rules selected by participants from those imposed externally. A human-institution handbook or RAG library changes initial conditions; its effect needs a no-library control.

## 11. Testable questions and hypotheses

Before a confirmatory run, each hypothesis needs a primary outcome, comparison conditions, a minimum effect considered meaningful, and a decision rule. H1–H10 are prospective working hypotheses, not findings or approved experiments. Statistical non-significance alone does not show that an effect is absent; a negative conclusion should state which effect sizes the data can rule out. The complete English catalogue, including planned tests and weakening observations, is in [H1–H10](hypotheses-en.md).

| Code | Question | Working hypothesis | Observation that would weaken support |
|---|---|---|---|
| H1 | When does interaction create value? | With complementary private information, communication will improve outcomes over independent aggregation at comparable resources. | The gain disappears after accounting for access to data and compute budget. |
| H2 | What changes when interests conflict? | A larger local benefit from withholding information will reduce disclosure and the collective outcome. | No deterioration appears over the tested range of incentives. |
| H3 | Can a mechanism reward truthful reporting? | When its assumptions hold, a truth-promoting mechanism will reduce distortion relative to a manipulable mechanism. | There is no difference, or agents systematically fail to understand the rules. |
| H4 | What does collective memory contribute? | A verifiable, editable archive will improve transfer after the entire group is replaced. | Newcomers with the archive do not outperform the control or reproduce its errors. |
| H5 | Is a culture of criticism useful? | Independent checking will reduce transitions from a correct decision to an incorrect one. | Outcomes do not improve after costs, or reliance on authority increases. |
| H6 | Is more connectivity always better? | Moderate exchange between subgroups will preserve more diversity than continuous group-wide discussion. | Full connectivity preserves diversity as well or better. |
| H7 | Do relationships persist through history? | A former partner will receive costly help more often than a comparable stranger, without a reward for the tie. | Current benefit or general generosity explains the difference. |
| H8 | Where does influence come from? | Holding message content constant, source position and status will affect acceptance. | Acceptance is determined only by information quality. |
| H9 | Does free choice of institution help? | Self-governance will improve adaptation to changed conditions, at additional cost. | A prescribed mechanism adapts better at the same resource level. |
| H10 | What comes from the model and what from its wrapper? | Changing memory and planning will affect behaviour while the base model is held fixed. | The effect is small or confounded with budget and data access. |

## 12. Portfolio of experiments

The programme is not intended to launch every line at once. Priority goes to questions with a formal setup, available data, a clear control, and acceptable cost. Sections 12.1 and 12.2 are the first pilot candidates; 12.3 is the central comparison across organizational procedures. Eight more concrete proposals are described in [§22](#22-eight-ideas-for-an-initial-series). These are proposals, not completed studies.

| Section | Research question and proposed contrast |
|---|---|
| 12.1 Allocation mechanisms and honesty to a centre | Agents with different needs submit claims to a centre that allocates a resource. Compare mechanisms with different gains from misreporting, with and without communication. Measure report deviation from private type, deviation gains, allocation efficiency, and collusion. The lab must specify the mechanisms and their theoretical properties. This is the first scientific pilot candidate because it uses the laboratory’s mechanism-design expertise and admits objective scoring without requiring a forecasting society. |
| 12.2 Information governance and reflexive games | In one game, vary what participants know about the situation and what they know about each other’s knowledge: common knowledge, private signals, or a centre’s message. Measure distance from predicted outcomes, signal effects, and robustness to rephrasing. Infer reflection rank from behaviour only where model predictions differ; self-reports such as “I think that they think” are not sufficient. This is the second pilot candidate and checks whether the testbed presents distinct information sets correctly. |
| 12.3 Four modes of coordination on one task | Compare concrete procedures operationalizing subordination, trust, exchange, and participation on a project-allocation or forecasting task, while varying interest alignment. Add criticism as a separate factor. Measure outcome, cost, report distortion, inequality, and error robustness. Conclusions concern these implemented procedures, not entire cultures. |
| 12.4 Formation of groups among forecasters | Vary information complementarity, its price, fixed costs, the right to submit a joint forecast, and the reward rule. Observe time to stable collaboration, agreements, actual contributions, error, and cost. Compare against an independent ensemble and a fixed team. A group formed by exploiting a payment loophole shows an effect of the environment, not that organization is beneficial. |
| 12.5 Collective memory after participant turnover | Replace members according to a pre-specified schedule: randomly, beginning with influential members, or all at once. Compare oral transfer, personal memory, a wiki, a constitution, and an independently checked archive. Measure rule usefulness and compliance, newcomer onboarding, and performance on a new task. An external change can test whether the group abandons an obsolete norm. |
| 12.6 Contribution of organization versus knowledge | After a common learning period, preserve everything, only task knowledge, only organization, or neither, then give the group a new task. Clean separation is difficult: personal memory can contain social information and a constitution can encode task knowledge. Initial tests should use a synthetic environment with record types separated. |
| 12.7 Connectivity and accumulation of innovations | Compare a shared chat, isolated subgroups, and rare or frequent exchange. Moving an agent with its memory and forwarding a message are distinct interventions. Measure independent approaches, diversity of errors, successful recombination of knowledge, time, and communication cost. |
| 12.8 Persistent ties and costly help | Let participants first choose partners for a beneficial task, then offer an opportunity to help at a cost after the shared gain disappears. Compare help to former partners and others while controlling for need, current gain, expected reciprocity, and general generosity. Additional controls disable social memory or shuffle identities. Describe observed partner preference or costly help; “friendship” remains an interpretation. |
| 12.9 Minority, authority, and criticism | In a task with a verifiable answer, vary advice accuracy, source status, number of supporters, and independent checking. Examine beneficial and harmful minorities symmetrically. Measure correct-to-incorrect and incorrect-to-correct transitions, error spread, and checking cost. |
| 12.10 Institutions, sanctions, and self-governance | In a common-resource task, allow proposing, voting on, monitoring, sanctioning, and appealing rules; vary monitoring cost and ability to punish separately. Measure violations, monitoring cost, false accusations, concentration of power, and resource preservation. Compare self-governance with fixed rules; popularity does not establish effectiveness. |
| 12.11 Competition and alliances among groups | Let groups with different organizational arrangements compete for tasks, resources, and members while exchanging services, accepting migrants, copying procedures, and forming alliances. Measure migration, income, rule transfer, and system-level outcomes. Growth of the richest group alone cannot establish that its organization is better: initial capital and data access may explain it. |
| 12.12 Model, wrapper, and network position | Cross-run models in matched wrappers, vary memory separately, and in another study randomly place otherwise identical agents at different network positions. If model, wrapper, memory, and budget all change at once, their effects cannot be separated. OpenClaw and Hermes are candidates for technical evaluation, not selected or validated platforms. |
| 12.13 Shared language and the cost of intelligibility | Vary message length limits and communication prices; compare free-form language, a fixed format, and a participant-developed code. An efficient code may help coordination while making audit harder. Measure both coordination and how well newcomers and people can interpret messages. |
| 12.14 People and AI on the same task | Once the environment is stable, compare human, AI, and mixed groups on the same coordination task. Equal averages do not imply equal mechanisms; compare action distributions, errors, and learning. |
| 12.15 Choosing a first set | A **methods-first** sequence is a minimal testbed → a resource mechanism or information game → objective hypothesis checks → organizational extensions. A **substantive-core** sequence is a synthetic forecasting task → baseline and independent ensemble → information exchange → voluntary associations → memory and turnover. The first reduces measurement uncertainty; the second keeps the AI-society question central. They can proceed sequentially on the same testbed. |

## 13. Measures and evidence

### 13.1. Outcome profile

Use a profile rather than a single “sociality” score. Relevant dimensions include task quality (forecast error, calibration, allocation utility); economics (real cost per unit of quality, game income, coordination losses); distribution (contributions, inequality, excluded members); organization (specialization, duplication, concentration of decisions); relationships (reciprocity, duration, repeated partner choice, network modularity); institutions (adoption, compliance, violations, sanctions, revision); memory (retrieval, transfer, accumulated distortion); resilience and correction (loss under shock, recovery, reversal of errors); and social preference (costly help and partner choice). Keep separate graphs for messages, transactions, and trust judgments. Roles are evidenced by activity, while storing, reading, and using a memory are distinct stages. A group may succeed while some members lose.

### 13.2. What counts as collective gain

Use a comparison ladder: a single agent → independent agents with mechanical aggregation → communication under a fixed protocol → adaptive organization. The steps help separate additional attempts, pooling information, discussion, and institutions. Compare at equal resources (quality under comparable data and compute) or equal quality (cost to reach it); when neither can be matched, report quality against cost. A single agent given all information available to the group is a separate information control.

### 13.3. Dialogues and self-reports

Dialogue can show proposals and conflicts, but inference should rest on environment events: what an agent read, chose, transferred, and carried out. Asking for beliefs or recording a “private intention” can itself change model behaviour. Such reports are not direct access to an internal state and need a no-question control.

## 14. Methodological rules

### 14.1. Experiment passport

Before confirmatory runs, record the question and scope; formal environment and private information; assigned versus freely chosen elements; hypotheses and outcomes; factors, controls, and randomization; replication and analysis plan; failure and stopping rules; versions of code, prompts, models, and data; and cost estimate. A hypothesis discovered by reading logs should be tested on new data.

### 14.2. Control conditions

Choose controls for the causal question; every listed control is not required in every experiment.

| Control | What it helps separate |
|---|---|
| One agent with comparable resources | Collective effect from extra computation |
| Independent agents with mechanical aggregation | Communication benefit from a standard ensemble |
| No communication | Effect of exchanging messages |
| No social memory or shared archive | Contribution of relationship history and collective memory |
| Shuffled identities | A tie to a particular partner from general dispositions |
| Simple algorithmic strategies | Whether an LLM is needed |
| Fixed roles and protocol | Value of choosing the organization |
| Rephrased instructions and neutral names | Sensitivity to surface cues |
| Another model or wrapper, or a new task | Limits to generalization |

### 14.3. Do not put the result into the instruction

For free organization, instructions should specify the task, rights, information, and consequences. “Create a society,” “find friends,” or “invent an institution” turns the outcome into compliance with a request; use such wording only as a separately instructed condition. Neutral names do not prevent a model from recognizing a familiar game, so vary parameters and wording too.

### 14.4. Unit of analysis and repetitions

The unit is an independent run of a world. Participants, messages, and groups within one run are dependent; thousands of messages do not replace independent runs. Determine the number of runs from pilot variance and the effect of interest, not from budget convenience. Report effect size and uncertainty interval. Model APIs are stochastic, so the same seed does not guarantee an exact rerun; replay saved actions to test infrastructure.

### 14.5. Comparability and interpretation

Match data access, tools, limits, and error handling across conditions, or account for differences. Fix or randomize move order and visibility of others’ actions because these can create leadership and cascades.

Separate each conclusion into what was **assigned** (instructions, incentives, actions available), what was **observed** (behaviour or outcome), and what is **interpreted** (proposed mechanism). Prefer precise descriptions such as “instructed behaviour,” “effect of an assigned mechanism,” “endogenous choice,” or “an effect robust to checks” over an unexplained “emergence” label.

### 14.6. Coding, failures, and external checks

If an LLM labels roles or norms, record the rubric and evaluator version and independently label a validation sample; where possible, blind the evaluator to the condition. Predefine how to handle invalid actions, refusals, timeouts, and exhausted funds as distinct events. Keep failed runs and report outcome quality together with participant and world attrition. Replicate key effects on new tasks and, if the budget permits, another model family. Claim novelty only after comparison with the closest work’s exact design.

## 15. Experimental testbed requirements

### 15.1. What “about twenty agents on one PC” means

In an API setup, the PC runs the scheduler, state storage, and observation interface while a provider runs the models. Agent state can live in separate folders or database records; a heavyweight process per agent is unnecessary. Running twenty large models locally is a different hardware problem. Thus the original “twenty on one PC” picture is a testable design target, not an established architecture.

### 15.2. Minimal architecture

| Component | Purpose |
|---|---|
| Experiment configuration | World, tasks, participants, mechanisms, parameters |
| Scheduler | Time, action order, concurrency limits |
| Model and agent adapters | API calls, cost accounting, common interface for a custom or external agent |
| State store | Memory, forum, wiki, accounts, registers, commitments |
| Action executor | Permission checks and world changes |
| Task and evaluator | Episode delivery, answers, objective scoring |
| Event log | Configuration, observations, messages, actions, calculations |
| Analysis and monitoring | Recompute metrics, inspect world, stop a run |

A small orchestrator and transactional store are enough for the first testbed. Independent export and recalculation matter more than a large feature set.

### 15.3. Time, communication, and logs

Model time sets rounds and deadlines; wall-clock time tracks call duration and the arrival of events being forecast. In synchronous play, all agents see the same round snapshot. In sequential play, move order is fixed or randomized; this choice affects leadership.

A message is a proposal. A transfer, vote, deal, or submitted forecast is a separate structured action: saying “I transferred the coins” must not change the balance. The environment enforces access rights; direct access to another agent’s folder would destroy private information. Log configuration and versions, exact model request, observations and memory shown, raw response and parsed action, balances and deals, generation parameters, token cost, and time. Record unknowns—such as an undisclosed model version—as unknown.

### 15.4. Readiness checks

Before scientific pilots, the testbed should replay logs, enforce information boundaries, balance accounts, reject unauthorized actions, and stop at the budget limit. Test the core with scripted agents before LLMs so engineering defects are not confused with model variation.

## 16. Choosing models, wrappers, and services

Select the base model, provider and access method, wrapper, memory, and communication protocol as separate factors. Candidate access methods are OpenRouter, direct APIs, and local inference; candidate wrappers are OpenClaw, Hermes, and a minimal custom agent. None is selected in this working concept.

For early causal studies, a minimal custom wrapper makes it easier to inspect what the agent received and why it called a model. A ready-made wrapper is appropriate when its features are reproducible and observable; hidden prompts and automatic actions become part of the experimental configuration.

Choose models through a short testbed pilot. Alongside token price, measure valid-action rate, understanding of private information, robustness to rephrasing, and result variability. Record the exact model ID, provider, check date, price, limits, and pilot results. Study mixed populations after an homogeneous baseline and at comparable resources. Model labels may themselves affect how agents treat each other, so hide them in a separate condition.

## 17. Estimating cost and time

Base estimates on a pilot that measures calls per move, context growth, retries, evaluation, and analysis. “One call per agent per round” is not a safe assumption for a real wrapper. With prices per million tokens:

`call cost = (uncached input × input price + cache-read tokens × cache-read price + cache-write tokens × cache-write price + billable output × output price) / 1,000,000 + other billed operations`.

Do not count overlapping token categories twice—for example, reasoning tokens already included in billable output. Total research cost includes pilot, planned runs, controls, review and annotation, permitted retries, services and storage, and contingency. Report human labour separately.

Prepare minimum, working, and adverse scenarios: short contexts and little communication; pilot medians with all controls; and no cache, long contexts, and repeated failures. A cheap call does not make a cheap study if many conditions and repetitions are needed. Forecasting tasks may take calendar days despite low compute time. Before the main series, prepare a design-to-runs-to-cost-to-cap-to-labour table. If the budget cannot reach useful precision, reduce the number of questions or simplify the design.

## 18. Linking the literature review to original research

The literature graph describes others’ findings; the concept describes our questions. For each candidate transfer, document: (1) the problem and mechanism studied; (2) what authors assigned in advance, such as roles, incentives, memory, or topology; (3) what was observed and measured; (4) relevant controls and limits; (5) what we would reproduce, adapt, or test as a new contribution; (6) which laboratory expertise strengthens the design; (7) required data, tools, and cost; and (8) what would make the idea unsuitable.

Similar titles are not enough to establish relevance: two “memory” studies may test a better single answer versus transfer of an institution to newcomers. The complete graph is not a prerequisite for choosing a study; the closest analogues, their critiques, and available implementations can suffice. Track idea status—idea, analogues found, design ready, pilot run, own data, effect replicated—so external results and project intentions remain distinct.

## 19. Work plan and stage gates

Stages depend on evidence; dates and owners are assigned after assessing team capacity.

| Stage | Main work | Gate to proceed |
|---|---|---|
| 0. Shared frame | Discuss aims, vocabulary, scenario, and laboratory fit | A primary question and formalization owner are selected |
| 1. Closest analogues | Review methods and limits of nearest studies | The team knows what it will reproduce and add |
| 2. Formal setup | Specify task, interests, information, mechanism, and outcomes | An experiment passport and benchmark exist |
| 3. Technical choice | Compare minimal model and wrapper configurations | An observable configuration works |
| 4. Testbed core | State, actions, accounting, logs, replay | Balances, rights, timing, and private information pass checks |
| 5. Exploratory pilot | Rule comprehension, parameter range, variance | Behaviour is interpretable and replication needs can be estimated |
| 6. Main series | Freeze design and run independent worlds | Exceptions and departures are disclosed |
| 7. Robustness checks | Change wording, task, or model | Result boundaries are known |
| 8. Develop the society | Associations, memory, turnover, intergroup interaction | Each extension addresses a distinct question |
| 9. Applied check | Prospective forecasting pilot | Comparison with domain-specific baseline forecasts exists |

### 19.1. Immediate work package

1. Choose the first theoretical pilot: a resource mechanism or an information game.
2. Select a forecasting task and check that its data are available.
3. Specify the minimal agent’s information, memory, actions, objective, and limits.
4. Define baseline conditions and primary measures.
5. Measure a short technical pilot across several candidate models.

### 19.2. Work to defer

Large populations, spatial worlds, free code execution, credit markets, automatic agent creation, and many wrappers should wait until a specific question needs them. Adding these early multiplies possible explanations for any effect.

## 20. Project outputs and success criteria

Expected outputs are a shared vocabulary and formal tasks; a literature graph linked to the lab’s hypotheses; a reproducible testbed; checked baselines and measures; dated model records; and logs with code to recalculate results, including where different organizational forms help and where they do not.

Success has four dimensions. **Research:** a question distinguishes competing explanations. **Methods:** conclusions come from a series of runs, not one striking dialogue, and reproducibility limits are known. **Theory:** it is clear when LLM behaviour matches a formal mechanism and when another explanation is needed. **Application:** new tasks show improvements in quality, cost, or resilience—or show why a multi-agent system is not worthwhile.

### 20.1. Common inference errors

| Observation | Risky inference | Needed check |
|---|---|---|
| Agents often say “we” | Treating speech style as collective agency | Joint decisions, commitments, stable procedures |
| Groups appear | Attributing them to self-organization | Admission rules, payments, registration benefits |
| A collective is more accurate | Ignoring additional data or compute | Independent ensemble, information control, cost curve |
| A norm persists | Treating inertia as learning | New task, erroneous norm, opportunity to correct |
| Members help | Calling it friendship | Current payoff, expected reciprocity, need |
| Violations fall | Missing that violators left | Outcomes for the original population |
| A leader appears | Attributing influence to personal qualities | Move order, network position, status label |
| An effect disappears with another model | Hiding an inconvenient result | Report mechanism-by-model interaction |
| A beneficial rule is not chosen | Declaring theory false | Comprehension, horizon, exact payoff function |

## 21. Open decisions for discussion

These remain questions for colleagues, not settled design choices.

| Decision | Starting point | What must be established |
|---|---|---|
| First scientific question | Private-information mechanism or information game | Which is closer to colleagues’ current work? |
| Applied scenario | Repeated forecasts with external verification | Data, horizon, baseline algorithm, delay to ground truth |
| Initial population | Small homogeneous group, later about twenty participants | Minimum size that preserves the question |
| Interest conflict | Explicit differences in private payoff and information | Can the model understand them? |
| Economics | Simple accounts, rewards, bounded data access | Should the first study allow agents to exit? |
| Associations | Informal cooperation, then registration with limited rights | Which rights are actually needed? |
| Memory | Separate task and social records with a shared log | How to bound context and make clean interventions |
| Wrapper | Minimal agent with observable actions | What do ready-made systems add? |
| Model | Choose from a measured pilot, not token price alone | Rule comprehension, valid actions, cost |
| Effect criterion | One primary measure and a profile of secondary outcomes | Which effect size matters? |
| Human participation | A separate later series | Organizers, sample, and suitable business game |

Record each decision as question → choice → reason → owner → date → conditions for revision. Update prices, model versions, and run results in their own records; change the concept only when the decision changes its design.

## 22. Eight ideas for an initial series

This chapter was prepared on 31 October 2026 for discussion in the laboratory on 2 November. No study here has been run or selected. The proposals specify candidate designs, predictions, nearby work, and limits to novelty; claims of priority were checked only within the selected questions. The suggested starting pair is truthful information exchange (idea 1) and revisable collective memory (idea 3). Use the forecasting frame in §5 with synthetic tasks, known information holdings, and measurable report distortions and losses. “Let agents create a society for the first time” is not a defensible novelty claim: self-organization, conventions, cultural transmission, and agent-written laws have already been described. The proposed contribution is to intervene on organization—membership, incentives, or rule revision—and measure the consequences.

| Idea | Question | Concept link | Risk | Estimated API cost, USD* |
|---|---|---|---|---:|
| 1. When does telling the truth pay? | Does the mechanism remain truthful when participants can coordinate and gain from influence? | 12.1, H3 | Low | 300–700 |
| 2. Who will pay for disagreement? | Does paid checking preserve useful dissent and correct authority-driven errors? | 12.9, H5, H8 | Low | 300–800 |
| 3. What does a collective leave behind? | Does group memory transfer practice after full replacement, and who corrects an inherited error? | 12.5, H4 | Medium | 500–1,200 |
| 4. What organization fits the task? | When do subordination, trust, exchange, or participation help, and how does conflict matter? | 12.3, H2 | Medium | 700–1,500 |
| 5. A forecast that changes the future | Does knowledge that a forecast is public affect coordination or create an incentive to distort it? | 12.2 | Medium | 300–800 |
| 6. Revoking one’s own failed law | Will agents choose a review process that saves the group but limits someone’s authority? | 12.10, H9 | High | 700–1,600 |
| 7. Some made a promise; others must keep it | Will new members fulfil founders’ commitment when refusal pays more? | 12.5, §8 | High | 500–1,300 |
| 8. Does a useful order prevail? | Do rules spread because they work, or because a group retains resources and members? | 12.11 | High | 900–2,000 |

*Per series with pilot and contingency, assuming the testbed is ready; excludes salaries, equipment, and human participation. For high-risk proposals, first run a small exploratory series because the target behaviour may not arise.

### 22.1. When does telling the truth pay?

Twelve forecasters sell information to a centre, while only each owner knows source quality. The environment gives agent i a private probability `q`; it reports `r`, and the report affects access to paid work. Code calculates payments. Use a 2×2 design: a bonus for selection accuracy or its compensation, crossed with whether a private channel for agreements exists. Give no new signals during the agreement phase, so a change in `r` cannot be explained as honest updating.

The prediction is that compensation reduces `|r − q|` under individual choice, but the effect weakens if some benefit from influence remains outside the payment. Measure both unilateral and coordinated deviation by two agents: individual truthfulness does not guarantee resistance to coalitions. A prior preprint, *Strategic Calibration* (Zhou et al., 2026), is described as reducing distortions through an APSM mechanism. Any novelty claim about repeated networks of agreements and measurable uncompensated influence must first be compared with it. *When Agents Lie* is cited for logging messages separately from actions. Proposed scale: 8–12 agents and 30–40 rounds; first analysis 2–3 weeks after the testbed core is ready.

### 22.2. Who will pay for disagreement?

One participant first posts a persuasive conclusion while another holds conflicting evidence. Others may repeat the answer, buy a check, or object. At equal call budgets, compare independent answers, free discussion, discussion with paid checking, and paid checking with a reward for code-confirmed evidence of error. Randomize the author’s status label while keeping message text fixed.

The prediction is that a reward reduces correct-to-incorrect transitions driven by authority, while an excessive reward can prompt redundant checks. Find the range in which corrections justify their cost. If the incentive fails, distinguish failure to purchase checks from failure to heed their results. The concept cites *The Cost of Consensus* (a preprint reporting that free debate by small-model teams underperformed independent rechecking, limited to those models and tasks) and *Emergent Social Conventions* (minority influence in a game without a ground-truth answer). The proposed contribution concerns the costs and conditions of useful criticism with private information.

### 22.3. What does a collective leave behind?

Twelve agents forecast for 30–40 rounds and maintain a shared log. Then replace every member. Newcomers receive one of four equal-sized inheritances: facts only; facts plus procedures; the same with one procedure made obsolete by an environmental change; or the same with a process for checking and revoking records. They face new instances of the task.

The prediction is that procedural memory reduces losses after turnover in a stable environment, delays adaptation after change, and that review rights reduce this harm. The main measure is cumulative error on the first post-turnover tasks. A wiki’s existence proves nothing: record whether newcomers read it and change their actions. The concept notes that *Cultural Evolution of Cooperation* studies intergenerational transfer with partial membership retention and payoff-based selection; *Governed Collaborative Memory* is conceptual; and only the abstract of *Sticky Collusion* had been checked. It explicitly rejects claiming to be first to study memory after replacement and calls for reviewing the Agent Interaction Lab project. A possible contribution is separating facts, procedures, and rights to revise.

### 22.4. What organization fits the task?

Give a group a portfolio of projects, each requiring two pieces of evidence and a check. Information is distributed, actions cost resources, and tasks have deadlines. Compare four executable procedures operationalizing subordination, trust, exchange, and participation under two levels of alignment between individual payoff and project outcome: eight conditions on one model. The coordinator is one of the same participants and receives no extra information. Do not put culture labels in prompts; these operationalizations should be discussed with the book’s author.

The prediction is that centralization reduces duplication when tasks are highly interdependent and interests mostly align, whereas hidden information and strong conflict increase losses from distorted reports. Measure completed project value net of cost; compare simple dispatch and, on small instances, a computable optimum. *Emergent Coordination* and *Emergent Relational Order* are signposts, not validation of this design. Proposed scale: 12–20 agents, 40 rounds, 4–6 weeks after the testbed core.

### 22.5. A forecast that changes the future

Ten agents choose between two channels; congestion creates delays. The environment issues the same forecast under three delivery conditions: to one recipient; to all recipients without telling them that others received it; or to all recipients with a truthful notice that every participant received it. Include a no-message condition. First test whether known public delivery changes traffic; only in a separate series give the forecaster a private interest.

Estimate reflection rank only where models of different rank predict different actions; saying “I considered what they think” is not evidence. The cited theoretical background is work on information and strategic reflection by Novikova and Chkhartishvili, and *Performative Prediction on Games* (AISTATS 2025). A close analogue, *Self-Fulfilling Forecasts in a Minimal LLM Market* (2026), had not been read in full. Do not claim novelty for self-fulfilling forecasts among LLMs; a possible contribution is to separate signal accuracy, publicity, and sender interest.

### 22.6. Revoking one’s own failed law

Agents manage a common fund whose returns initially justify investment and later decline. They can change contribution rates, monitor rewards, office terms, and voting thresholds through a bounded schema enforced by code. Proposal, approval, and veto powers are divided. The intervention is a permanent veto held by someone who benefits from the old rule versus a mandatory sunset clause. Controls are a fixed rule and an adaptive external mechanism with the same information and monitoring budget.

The prediction is that sunset clauses speed removal of a harmful rule but cause unnecessary revision in a stable environment. Whether agents invent protection against future vetoes is open, with no directional prediction. *GovSim-SelfGovern* is cited for a proposal–review–vote–execution cycle; *Internal vs. External* motivates an equally informed-centre control; the GovSim resource environment is a possible base. The first $100–150 is for checking whether meaningful proposals arise. If not, restrict the space to a menu and interpret results as choice among menu options.

### 22.7. Some made a promise; others must keep it

A group receives an advance for a series of checks. After the first part, replace all members. New members may complete the work, return the advance, or keep the money. In the main condition there is no external penalty or future contract. Vary whether the commitment history is available and whether the previous group adopted a succession rule. Controls provide the same rule text from the experimenter and give the same archive to a single agent. If the single agent behaves the same way, the result is an instruction or memory effect, not collective organization.

Refusing an unprofitable contract can be rational; compliance is not automatically “more social.” A familiar morality story may prime the model, so use neutral names, rephrasings, and different contract topics. No outcome implies group consciousness.

### 22.8. Does a useful order prevail?

Three groups of six agents begin with equal capital and use procedures from idea 4. A 2×2 design varies whether members may move groups with personal memory and whether another group’s rule may be copied without moving. Allocate tasks by group size and report totals and per-member outcomes. One arrangement imposes an externality by shifting verification work to a common service.

The prediction is that, when this external cost is unpriced, migration strengthens a group arrangement that benefits members but burdens the system; charging for the shared service should weaken that effect. The world of three groups is the unit of replication. *Super-additive Cooperation* (2025) is a signpost on repeated interaction and intergroup competition, not evidence that competition always selects socially useful institutions. Defer this study until group-level mechanisms have been checked.

### 22.9. Participation of Georgy Vasiliev

Vasiliev might help specify and interpret experiments. The team could define observable criteria, with positive and negative examples, for memory, participation, trust, and criticism—for example, an archive that exists but is not read, or objections that do not change decisions. Record predictions before a study. These would be the project team’s formulations inspired by the book; do not attribute them to its author without agreement. Analyse cases where the metaphor does not fit.

Do not give agents the book in the first experiments, because they could reproduce its typology. Later, access to the book could be a separate condition compared with a neutral guide to the same actions. See [the book’s official site](https://verhum.org/).

### 22.10. Testbed, labour, and budget

All ideas use the core in §15. Start with 8–12 agents; twenty are useful where group structure and networks matter. Add OpenClaw or Hermes later as experimental wrappers because their built-in memory and planners initially make differences harder to explain. The estimate is 2–4 engineer-weeks for a minimal core and another 1–3 weeks for the first setup and analysis, to be refined after a prototype. If $300–$2,000 must also cover development, the proposed scope will not fit; adapting GovSim to one study is a smaller option.

Illustrative calculation: 12 agents × 40 rounds × 2 calls = 960 calls. At 3,000 input and 350 output tokens per call, and assumed prices of $0.50/$2 per million tokens, one world costs about $2.10; 120 worlds plus 30% contingency cost about $330. Pilot variance determines the required number of worlds; thousands of messages within a world do not replace independent runs.

| API budget | Candidate programme | Allocation |
|---:|---|---|
| $300 | Narrow version of idea 1 or 2 | $40 pilot, $180 main series, $80 reserve; one model, and the result may remain exploratory |
| $1,000 | One full line on honesty or memory | $100 pilot, $500 main comparison, $250 second model and new tasks, $150 reserve |
| $2,000 | Main line plus a risky branch on the same testbed | $150 pilot, $800 main study, $400 portability check, $350 exploration of idea 6 or 7, $300 reserve |

### 22.11. Decisions for a meeting

1. **Which question will the laboratory own?** Idea 1 is the most direct entry from active systems theory, idea 3 most directly connects to the book, and idea 4 is the broad comparative programme.
2. **Who owns formalization?** Someone must check utilities, constraints, and predictions before any LLM run.
3. **Is there an engineer?** With one, build a shared core; without one, adapt GovSim to a single mechanism.
4. **Which negative result would be useful?** For example, a condition where an archive harms performance.
5. **What participation should be offered to Vasiliev?**

Two possible sequences on a shared testbed are honesty → criticism → organization comparison, or memory → rule revision → succession of commitments.
