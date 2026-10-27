---
id: arxiv-2607-03228-text
type: material
title: Organizational Memory for Agentic Business Process Execution
work_id: arxiv-2607-03228
source_url: https://arxiv.org/html/2607.03228v1
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять
  с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.
language: original
sha256_text: 80ccee063497f718fe44ef8c5bd91f1bca8d744b66d4987c9c74277a104b6ac0
---

> Источник: [https://arxiv.org/html/2607.03228v1](https://arxiv.org/html/2607.03228v1). Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.

# Organizational Memory for Agentic Business Process Execution

Lukas Kirchdorfer
Affiliation: SAP Signavio, Berlin, Germany
E-mail [{first.last}@sap.com](mailto:%7Bfirst.last%7D@sap.com)
  
Adrian Rebmann
Affiliation: SAP Signavio, Berlin, Germany
E-mail [{first.last}@sap.com](mailto:%7Bfirst.last%7D@sap.com)
  
Christian Warmuth
Affiliation: SAP Signavio, Berlin, Germany
E-mail [{first.last}@sap.com](mailto:%7Bfirst.last%7D@sap.com)
  
Timotheus Kampik
Affiliation: SAP Signavio, Berlin, Germany
E-mail [{first.last}@sap.com](mailto:%7Bfirst.last%7D@sap.com)
  
Theiss Heilker
Affiliation: SAP Signavio, Berlin, Germany
E-mail [{first.last}@sap.com](mailto:%7Bfirst.last%7D@sap.com)
  
Gregor Berg
Affiliation: SAP Signavio, Berlin, Germany
E-mail [{first.last}@sap.com](mailto:%7Bfirst.last%7D@sap.com)

###### Abstract

LLM-based agents offer new opportunities for automating business process execution beyond the limits of rule-based systems. However, general-purpose LLMs lack the organization-specific knowledge required for reliable execution, which is typically fragmented across human-oriented artifacts such as policies, process models, and standard operating procedures. While such knowledge can technically be encoded in individual prompts or agent-specific retrieval setups, this approach does not scale in enterprises, as it gives rise to knowledge silos and rule duplicates, and makes consistent updates and learning across agents difficult. We argue that this calls for an organizational memory for agentic business process execution: a shared, governed, and agent-consumable reference layer of evolving organization-specific procedural knowledge about how work should be executed. We derive requirements for such a memory, propose an architecture for its curation and consumption, and demonstrate its effectiveness in a proof-of-concept based on a procurement scenario.

###### Keywords:

Agentic Process Automation Large Language Models Memory Business Process Management.

## 1 Introduction

Organizations are increasingly adopting LLM-based agents to execute business processes [[3](https://arxiv.org/html/2607.03228v1#bib.bib4), [6](https://arxiv.org/html/2607.03228v1#bib.bib7)].
Unlike deterministic automation approaches such as robotic process automation (RPA), which are confined to structured and repetitive settings, these agents can interpret natural language and autonomously handle multi-step tasks including exception handling.
Thus, they offer a path to automating processes that were previously difficult to formalize with rule-based systems [[26](https://arxiv.org/html/2607.03228v1#bib.bib1)].

However, general-purpose LLMs lack access to organization-specific knowledge by default.
They are not inherently aware of company policies, process conventions, role structures, system landscapes, or exception-handling practices.
Yet effective process execution in organizational settings depends precisely on such contextual knowledge, which varies across organizations, departments, and individual teams.
This knowledge gap poses a fundamental challenge to scaling agentic business process execution in enterprise settings.

A natural response is to encode organization-specific knowledge in prompts or retrieval setups specific to individual agents [[16](https://arxiv.org/html/2607.03228v1#bib.bib16), [15](https://arxiv.org/html/2607.03228v1#bib.bib17)].
However, this approach does not scale: in large organizations, thousands of agents are expected to operate simultaneously across evolving processes and heterogeneous knowledge sources.
Per-agent knowledge encoding creates new silos, where rules are duplicated, updated inconsistently, and interpreted differently across agents.
At the same time, organizations already possess vast amounts of process-relevant knowledge, represented in BPMN models, standard operating procedures (SOPs), policies, knowledge bases, and process analyses based on historical execution data.
This knowledge is fragmented across artifacts, many of which were designed for human interpretation, not for LLM agent consumption.
The core challenge is, therefore, not knowledge availability, but its transformation into a unified, agent-consumable form and its consistent provision to all agents in the organization.

We argue that what is needed is an organizational memory for agentic business process execution:
a shared, human-governed, and agent-consumable reference layer of organization-specific procedural knowledge about how work should be executed.
Such a memory must integrate distributed knowledge from heterogeneous sources into a unified representation that agents can consume at runtime.
It must provide the right context to the right agent at the right time, rather than flooding agents with irrelevant information.
Furthermore, it must evolve with organizational change, reflecting policy updates or lessons learned from agent executions.
Finally, since organizational memory directly shapes agent behavior across processes and departments, its creation and evolution cannot be fully automated and must instead support human governance.

This paper makes four contributions: (1) we introduce the concept of organizational memory for agentic business process execution, defining it as a unified representation of organizational process knowledge that enables LLM-based agents to execute process tasks in a context-aware manner; (2) we derive requirements for such an organizational memory;
(3) we propose an organizational memory architecture, describing its components, curation, and consumption; and (4) we demonstrate its effectiveness in a proof-of-concept implementation.

The paper is structured as follows.
[Section 2](https://arxiv.org/html/2607.03228v1#S2 "2 Background and Related Work ‣ Organizational Memory for Agentic Business Process Execution") provides background and related work. [Section 3](https://arxiv.org/html/2607.03228v1#S3 "3 Motivation ‣ Organizational Memory for Agentic Business Process Execution") motivates the need for organizational memory, based on which [Section 4](https://arxiv.org/html/2607.03228v1#S4 "4 Architecture Requirements ‣ Organizational Memory for Agentic Business Process Execution") defines requirements for an organizational memory architecture, which we present in
[Section 5](https://arxiv.org/html/2607.03228v1#S5 "5 Organizational Memory Architecture ‣ Organizational Memory for Agentic Business Process Execution").
Then, [Section 6](https://arxiv.org/html/2607.03228v1#S6 "6 Proof-of-Concept ‣ Organizational Memory for Agentic Business Process Execution") showcases the efficacy of our architecture in a proof-of-concept, before
[Section 7](https://arxiv.org/html/2607.03228v1#S7 "7 Conclusion ‣ Organizational Memory for Agentic Business Process Execution") concludes the paper.

## 2 Background and Related Work

This section provides background and related work on agentic BPM and agentic memory systems.

### 2.1 Agentic Business Process Management

The concept of agents has periodically attracted attention in BPM over the past three decades. Early work studied autonomous software agents that schedule, execute, and monitor business activities [[10](https://arxiv.org/html/2607.03228v1#bib.bib18)]. Later, RPA introduced software robots for automating rule-based tasks [[23](https://arxiv.org/html/2607.03228v1#bib.bib19)]. More recently, advances in generative AI and LLMs have renewed interest in agent-oriented process execution.
This development has motivated the emerging paradigm of *Agentic Business Process Management* [[3](https://arxiv.org/html/2607.03228v1#bib.bib4), [24](https://arxiv.org/html/2607.03228v1#bib.bib5)], which extends traditional BPM by treating autonomous agents as first-class participants in business process execution.
Thus, rather than viewing processes primarily as predefined control-flow models, agentic BPM emphasizes process execution as the result of autonomous agents that perceive, reason, act, and interact within organizational constraints.
Several recent studies have advanced this agent-centric perspective through data-driven approaches to process discovery, simulation, and optimization [[22](https://arxiv.org/html/2607.03228v1#bib.bib20), [12](https://arxiv.org/html/2607.03228v1#bib.bib21), [13](https://arxiv.org/html/2607.03228v1#bib.bib9), [19](https://arxiv.org/html/2607.03228v1#bib.bib10)].
However, these approaches adopt a generic notion of agents rather than specifically instantiating them with LLMs.
In that context, several technical contributions have explored the use of LLMs and LLM-based agents for process automation and execution [[8](https://arxiv.org/html/2607.03228v1#bib.bib25), [9](https://arxiv.org/html/2607.03228v1#bib.bib24), [17](https://arxiv.org/html/2607.03228v1#bib.bib26)], yet not considering organization-aware execution.
More closely related to this work, Kaltenpoth et al. [[11](https://arxiv.org/html/2607.03228v1#bib.bib23)] and Skolik et al. [[20](https://arxiv.org/html/2607.03228v1#bib.bib22)] show that LLM agents can execute business processes more reliably when guided by semi-structured process rules, which they generate from BPMN models or natural-language process descriptions and retrieve from a rule database during execution.
Our work differs in its enterprise-level perspective and the extensiveness of the architecture. While the existing process-rule approaches support process-aware execution for specific agents or processes, our organizational memory treats organization-specific process knowledge as a shared enterprise resource. It integrates many heterogeneous sources, such as policies, SOPs, system documentation, process models, knowledge bases, and execution experience, handles human governance, and addresses lifecycle concerns such as organizational change and reuse across multiple agents and processes.
Moreover, unlike strategy-based guardrailing [[7](https://arxiv.org/html/2607.03228v1#bib.bib6)], organizational memory does not formally constrain agents; instead, it provides an informal frame through additional and useful context.

### 2.2 Agentic Memory Systems

While traditionally, agentic architectures manage symbolic knowledge in *belief bases* [[2](https://arxiv.org/html/2607.03228v1#bib.bib3)], recent works tend to focus on *memory* mechanisms for LLM-based agents. Existing approaches manage memory tiers to extend limited context windows [[18](https://arxiv.org/html/2607.03228v1#bib.bib8)], maintain memory streams with dedicated controllers [[25](https://arxiv.org/html/2607.03228v1#bib.bib12)], organize memories dynamically through indexing and linking [[27](https://arxiv.org/html/2607.03228v1#bib.bib2)], or store long-term conversational memories to improve personalization and coherence across interactions [[28](https://arxiv.org/html/2607.03228v1#bib.bib14)].
More broadly, cognitive agent architectures such as CoALA conceptualize memory as a core component of language agents, alongside action spaces and decision-making mechanisms [[21](https://arxiv.org/html/2607.03228v1#bib.bib13)].
These works highlight the importance of persistent memory for LLM agents, but primarily focus on individual agents rather than the enterprise-level challenge of curating, governing, maintaining, and consistently providing organization-specific process knowledge across many agents and processes.
Retrieval-augmented generation (RAG) [[15](https://arxiv.org/html/2607.03228v1#bib.bib17)] offers a complementary mechanism by grounding LLM outputs in retrieved passages from external document collections. While useful for accessing organizational documents, RAG alone may be insufficient for enterprise process knowledge that is overlapping, evolving, and often relevant beyond the user’s immediate query. Different agents may retrieve different chunks, miss cross-cutting rules, or rely on outdated or conflicting sources. Our notion of organizational memory addresses this gap by treating process knowledge as shared, traceable, governed, and reusable memory elements rather than as query-dependent document fragments.

## 3 Motivation

In this section, we motivate the need for organizational memory in agentic business process execution by means of a running example, from which we then derive several challenges that arise in this setting.

Figure 1: Running purchase-to-pay example: each agent depends on overlapping knowledge that is fragmented across heterogeneous artifacts.

Problem illustration.
We consider enterprise settings in which LLM-based agents execute business process tasks at runtime, where correct behavior depends on organization-specific procedural knowledge such as policies, responsibilities, systems, and exception-handling practices. Consider a simplified purchase-to-pay process as visualized on the bottom of [Figure 1](https://arxiv.org/html/2607.03228v1#S3.F1 "Figure 1 ‣ 3 Motivation ‣ Organizational Memory for Agentic Business Process Execution").
The process starts with the creation of a purchase requisition (PR), followed by issuing a purchase order (PO) to a vendor.
The vendor confirms the order, delivers the goods, and submits an invoice. Before a payment can be executed, the invoice must be checked against the corresponding purchase order.
Suppose an organization wants to automate parts of this process using LLM-based agents.
One agent may support employees in creating PRs, while another may handle invoice matching.

Focusing on the invoice-matching agent, assume a received invoice does not exactly match the corresponding purchase order.
The agent must decide whether the invoice can be posted automatically, whether it should be routed to a procurement specialist, or whether it requires compliance review.
Other agents in the same process, such as a PR agent and a payment-approval agent, depend on overlapping knowledge, as illustrated in [Figure 1](https://arxiv.org/html/2607.03228v1#S3.F1 "Figure 1 ‣ 3 Motivation ‣ Organizational Memory for Agentic Business Process Execution").
At first glance, this appears to be a straightforward reasoning task: compare the invoice to the purchase order, identify deviations, and decide how to proceed.
However, the correct decision depends on organizational knowledge that is not contained in the LLM itself.

For instance, a BPMN model may specify that invoices with mismatches require an “invoice clarification” activity.
A standard operating procedure may state that price deviations below EUR 250 can be accepted for preferred suppliers.
A procurement policy may define that deviations involving medical equipment always require compliance review, regardless of their amount.
ERP documentation may specify where supplier risk classifications are stored, while an internal knowledge-base article may explain that, for a particular subsidiary, the responsible procurement specialist is determined by plant rather than by product category.
Relevant knowledge may also emerge from previous executions, for example, when human experts repeatedly resolve a recurring mismatch in the same way or when agents receive corrections for exceptional cases.
Each of these sources contains potentially relevant knowledge, but no single source provides the complete execution context required by the agent.

Challenges.
Several challenges arise in this setting:

Fragmented and human-oriented knowledge.
Process-relevant knowledge is distributed across heterogeneous sources. These sources typically differ in format, terminology, granularity, and quality, and they are primarily created for human interpretation rather than for direct consumption by LLM-based agents.
Moreover, such knowledge is often not complete and up-to-date, and sometimes too extensive for humans to review in its entirety.
In the purchase-to-pay example, the agent must combine knowledge from a BPMN model, a procurement policy, an SOP, ERP documentation, subsidiary-specific instructions, and potentially past exception handling to make a single invoice-handling decision. The challenge is therefore to transform fragmented organizational knowledge into a unified, agent-consumable representation.

Shared knowledge across agents and processes.
Organization-specific knowledge is rarely relevant to only one agent. The same procurement policy, supplier classification, approval rule, or compliance constraint may be needed by multiple agents operating in different parts of the same process or in related processes. If each agent is equipped with its own prompt, local memory, or retrieval setup, organizations risk creating new knowledge silos: rules are duplicated, updated inconsistently, and interpreted differently across agents.
In the purchase-to-pay example, a PR agent, an invoice-matching agent, and a payment approval agent may all depend on overlapping procurement and finance rules. These rules should therefore be maintained once and made available consistently, rather than being reimplemented separately per agent.

Organizational knowledge change and learning.
Organizational knowledge is not static. Policies are updated, responsibilities shift, systems change, and new exception-handling practices emerge. This phenomenon is well-known in BPM under concept drift [[14](https://arxiv.org/html/2607.03228v1#bib.bib15)]. Consequently, the knowledge used by agents must evolve with the organization. For instance, if the company changes the acceptable mismatch threshold from EUR 250 to EUR 100, all affected agents must reliably act according to the updated knowledge.
The challenge is to keep the shared knowledge layer current without requiring each agent to be updated individually.

Runtime accessibility and efficiency.
Agents require organization-specific knowledge at the moment of execution, but only the knowledge that is relevant to the current task and context. Simply providing all potentially relevant documentation is neither scalable nor reliable, as it increases latency, introduces irrelevant information, and may distract the agent from the actual decision. In the example, the invoice agent should receive the applicable mismatch tolerance, the supplier-specific rule, the relevant compliance constraint, and the responsible organizational role, but not unrelated procurement guidelines or ERP manuals.

Human governance.
Since organization-specific knowledge affects how agents behave across processes and departments, its creation and evolution cannot be left entirely to automated mechanisms. Human decision-makers must be involved in deciding which knowledge should be added, modified, or discarded, and how conflicts between sources should be resolved. This raises the question of who is allowed to access, approve, and change which parts of the memory. In the purchase-to-pay example, procurement experts may be responsible for invoice-matching rules, finance for payment policies, compliance for regulatory constraints, and local process owners for subsidiary-specific exceptions. At the same time, not every user who can read a rule should also be able to modify it, and changes made by one organizational unit may affect agents operating in another. Organizational memory therefore requires governance mechanisms for ownership, access control, approval workflows, and accountability.

The challenges show that reliable and scalable agentic process execution requires more than agent-specific prompts or local memories.
It calls for a shared organizational memory of procedural knowledge about how work should be executed.

## 4 Architecture Requirements

Based on the challenges described above, we derive the requirements for an organizational memory architecture.

R1: Integration of heterogeneous organizational knowledge.
Integrate process-relevant knowledge from heterogeneous sources. In the example, this includes the BPMN model, procurement policy, invoice-matching SOP, ERP documentation, and past exception handling.

R2: Agent-consumable representation.
Transform fragmented, often human-oriented process knowledge into a unified representation that is decomposed into self-contained units of procedural knowledge, so LLM-based agents can interpret and apply it during process execution.
Unification alone (e.g., turning sources to plain text) is insufficient, since without decomposition into self-contained units, individual rules cannot be addressed, compared, updated, or selectively retrieved.
For instance, a BPMN model and a textual rule should not only be expressed in a common format but also be broken down to the level of individual rules.

R3: Conflict detection and consistency management.
Support the identification and resolution of inconsistencies, redundancies, and conflicts between memory fragments originating from different sources, which is a general problem in AI [[5](https://arxiv.org/html/2607.03228v1#bib.bib27)]. For example, if an SOP allows deviations below EUR 250 while a plant-specific policy defines a lower threshold, this conflict must be detected and resolved.

R4: Traceability to source artifacts.
Preserve links between memory fragments and their original sources to enable transparency. In the purchase-to-pay example, an agent’s decision to route an invoice to compliance should be traceable to the underlying policy document.

R5: Context-specific retrieval.
Provide agents with the organization-specific knowledge relevant to the current process task and context. For instance, the invoice-matching agent should receive the applicable mismatch tolerance, supplier-specific rule, compliance constraint, and responsible role, but not unrelated HR guidelines.

R6: Low-latency runtime accessibility.
Provide organizational memory efficiently at runtime so agents can access relevant context without prohibitive latency.

R7: Support for adaptive memory.
Support the continuous evolution of organizational memory over time, both through deliberate updates to policies, organizational structures, and systems, and through insights gained from process execution experiences. For example, if the allowed mismatch threshold changes from EUR 250 to EUR 100, all affected agents should follow the updated rule after a single change to the memory. Similarly, repeated human corrections for a recurring invoice mismatch may indicate a newly observed exception or successful practice and become a candidate update to the organizational memory.

R8: Human governance and ownership.
Support human oversight of the creation and modification of organizational memory. This includes defining ownership of memory fragments, specifying read and write permissions, supporting approval workflows for updates, and ensuring accountability for changes. For instance, procurement department may own invoice-matching rules, whereas finance department may own payment policies.

R9: Scalability across agents and processes.
Scale to enterprise settings in which multiple agents operate across different processes, departments, organizational units, and information systems while relying on a shared organizational memory.
In the example, a PR agent, invoice-matching agent, and payment approval agent should all be able to access the same maintained procurement and finance rules.

## 5 Organizational Memory Architecture

This section introduces the proposed organizational memory architecture, addressing the requirements outlined above. [Figure 2](https://arxiv.org/html/2607.03228v1#S5.F2 "Figure 2 ‣ 5 Organizational Memory Architecture ‣ Organizational Memory for Agentic Business Process Execution") provides a high-level overview of the architecture.
It shows how heterogeneous sources are transformed into fragments, which we call process atoms (atoms for short), that collectively constitute the organizational memory.
This memory can then be accessed by consumers, such as LLM-based agents, to support organization-specific process execution.
In the following, we first make the core design choices underlying the architecture explicit in [Section 5.1](https://arxiv.org/html/2607.03228v1#S5.SS1 "5.1 Design Choices ‣ 5 Organizational Memory Architecture ‣ Organizational Memory for Agentic Business Process Execution"), before describing how organizational memory is curated in [Section 5.2](https://arxiv.org/html/2607.03228v1#S5.SS2 "5.2 Memory Curation ‣ 5 Organizational Memory Architecture ‣ Organizational Memory for Agentic Business Process Execution") and how it is consumed during process execution in [Section 5.3](https://arxiv.org/html/2607.03228v1#S5.SS3 "5.3 Memory Consumption ‣ 5 Organizational Memory Architecture ‣ Organizational Memory for Agentic Business Process Execution").

![Refer to caption](https://arxiv.org/html/2607.03228v1/Architecture_4.png)


Figure 2: 
Organizational memory architecture.

### 5.1 Design Choices

Before describing the architecture in detail, we make core design choices explicit, justifying them against the requirements.

Atomic decomposition.
Memory fragments could in principle be represented as plain text, document chunks, or larger pieces of structured process descriptions.
We instead represent each fragment as a process atom: a self-contained unit that captures exactly one rule, constraint, or responsibility, with its applicability conditions separated from its required action and purpose.
Concretely, each process atom has the following core attributes:

- •

  Name: a short name for the desired process behavior;
- •

  Source: a reference to the input source from which the atom was extracted;
- •

  Content: a structured textual description with three parts:

  - $-$

    Applicability: the context in which the atom applies (e.g., process, activity, role, organizational unit, business object, or precondition);
  - $-$

    Action: the concrete rule, constraint, or required behavior;
  - $-$

    Purpose: the rationale for the rule, i.e., why it exists.

Atomic decomposition addresses R2 and enables the requirements that operate at the level of single rules and behavioral constraints:
conflict detection between candidate and existing knowledge (R3),
targeted updates as policies change (R7),
per-rule traceability to source artifacts (R4),
and retrieval of the smallest sufficient set for a given task (R5).
A plain-text representation can be unified and agent-consumable, but it makes it difficult to be addressed, compared, or updated at the rule level without decomposition.
Conversely, decomposing further than the described level, would lose the business meaning that domain experts rely on to govern memory (R8), even if a finer logical decomposition would be possible.
This idea of representing procedural knowledge as atomic units is, among others, also followed in declarative process modeling and analysis [[4](https://arxiv.org/html/2607.03228v1#bib.bib28)]; we provide an integrated structure, i.e., name, source, content, and tags (described below), tailored to organizational memory for LLM-based agents.

Domain-model grounding via tags.
Atoms must be grounded in organizational concepts so they can be retrieved in a specific context, for the right process, role, business object, or unit.
We ground atoms through categorized tags that jointly represent an Enterprise Domain Model.
A natural alternative is to ground atoms in a formal ontology or a knowledge graph with explicit relations [[1](https://arxiv.org/html/2607.03228v1#bib.bib11)].
A formal ontology requires upfront schema design and continuous ontology engineering, though, which is a strong requirement. A tag vocabulary can be assembled incrementally and easily revised as the organization changes (R7). Tags also align well with the way LLM-based retrievers and agents consume context.

Retrieval pattern.
At runtime, we follow a (hybrid) retrieval pattern rather than a specific mechanism. We combine filtering using the domain-model tags with semantic or LLM-based selection within the filtered set.
Semantic search over atom content in isolation does not scale well and cannot reliably distinguish, e.g., an invoice-matching rule that applies in subsidiary A from one that applies in subsidiary B, because that distinction may be encoded in the organizational metadata, not the rule text.
Pure tag-based filtering cannot resolve fine-grained relevance among many atoms that share the same tags.
The architecture therefore features a Retriever that takes a context request and returns a relevant atom set, leaving the concrete mechanism to instantiation.1

### 5.2 Memory Curation

This section describes how organizational memory is created and maintained. As shown in [Figure 2](https://arxiv.org/html/2607.03228v1#S5.F2 "Figure 2 ‣ 5 Organizational Memory Architecture ‣ Organizational Memory for Agentic Business Process Execution"), the curation phase takes multiple input sources, extracts atoms, creates a group of atom changes, and finally updates the memory through a human-governed review and change process.

Input sources.
The curation phase can take different types of organizational knowledge as input, including policies, SOPs, process models, system documentation, knowledge-base articles, and traces from previous process executions. These sources differ in format, structure, terminology, and degree of formality.

Step 1: Create group of atom changes.
In the first step, we create a contextualized group of atom changes by deriving a set of candidate process atoms from the input sources and contextualizing these with the existing atoms in the organizational memory. Since different source types encode knowledge differently, source-specific extraction services are required. For instance, a BPMN model must be analyzed differently from a policy document or an execution trace. Note that the design of extraction services for all possible input sources is beyond the scope of this paper.
For simplicity, we focus on PDF documents, such as policies and SOPs, which also serve as the input sources in our proof-of-concept evaluation in [Section 6](https://arxiv.org/html/2607.03228v1#S6 "6 Proof-of-Concept ‣ Organizational Memory for Agentic Business Process Execution").
In general, the purpose of this step is to identify process-relevant rules, constraints, responsibilities, and exception-handling knowledge and represent them as atoms (see [Section 5.1](https://arxiv.org/html/2607.03228v1#S5.SS1 "5.1 Design Choices ‣ 5 Organizational Memory Architecture ‣ Organizational Memory for Agentic Business Process Execution") for the atom representation).

Assume a finance control directive states that every PR must by assigned a valid cost center. The extraction service may create the following atom:

- •

  Name: Ensure that a cost center is assigned on each PR.
- •

  Source: Finance Control Directive, Section 3.
- •

  Content:

  - $-$

    Applicability: All purchase requisitions, in all company codes.
  - $-$

    Action: Every PR must be assigned to a valid cost center before it can be submitted; if the requester does not provide a cost center, the PR must be rejected.
  - $-$

    Purpose: Ensures that every expenditure is traceable to a responsible organizational unit for budgetary control and audit purposes.

The extraction services also ground each candidate in the Enterprise Domain Model through one or more categorized tags, such as procurement (corporate function), purchase requisition (business object), or purchase-to-pay (end-to-end process). These tags provide a shared semantic vocabulary for organizing and later retrieving atoms from the memory.

Candidate atoms are then assessed by the Global Curator, an active entity in our architecture that has read access to the existing organizational memory. The Global Curator performs two complementary checks. First, it carries out quality checks on each candidate atom in isolation, such as verifying that the atom has a meaningful name, a clearly defined scope, and a single rule. Second, it relates each candidate to the existing memory, checking whether it duplicates, overlaps with, or conflicts with atoms already stored.
For example, if a candidate atom, which is extracted from a policy document, is already present in the organizational memory, it does not need to be added again.
Conversely, if a candidate atom conflicts with an existing atom, the conflict must be detected and resolved, for instance by updating the existing atom, replacing it, or flagging the conflict for human review.
The outcome of this step is a proposed set of atom changes to the memory, which may include atoms to be added, removed, or modified.

Step 2: Update organizational memory.
Given the contextualized group of atom changes, a Human expert reviews the changes, checks the atoms and their sources, and decides if changes should be applied. They may accept the proposal, modify individual atoms, reject individual changes, or resolve conflicts differently than suggested by the curator.
In the purchase-to-pay example, a finance expert may approve changes to cost-center rules, while procurement or compliance experts may be responsible for invoice-matching or regulatory constraints.
This human-in-the-loop design ensures that the memory remains governed and that changes to the shared knowledge layer are overseen by experts.

Organizational memory.
The output of the curation phase is the updated organizational memory: a governed collection of validated atoms grounded in the enterprise domain model. Through their tags and source references, atoms can be organized, traced, and retrieved for runtime use.
The memory thereby acts as the shared knowledge layer from which agents can obtain task-specific organizational context during process execution.
The Global Curator can continuously monitor the organizational memory and request additional context or human input.

### 5.3 Memory Consumption

This section describes how organizational memory is consumed during process execution. As shown in [Figure 2](https://arxiv.org/html/2607.03228v1#S5.F2 "Figure 2 ‣ 5 Organizational Memory Architecture ‣ Organizational Memory for Agentic Business Process Execution"), memory consumption starts with a context request from the runtime agent, continues with a query to the organizational memory, and results in a set of relevant atoms that is provided to the agent as execution context.

Step 1: Create context request.
At runtime, an agent is assigned to execute parts of a business process.
To do so reliably, it may require organization-specific knowledge that is not contained in its prompt or model knowledge. The agent therefore creates a context request for the Retriever.
This request describes the current execution context, including the process, activity, agent role, organizational unit, input data, and case state.
In the purchase-to-pay example, an invoice-matching agent may include information about the supplier, invoice amount, purchase order, material category, subsidiary, and current activity.

Step 2: Query organizational memory.
The Retriever uses the context
request to identify atoms in the Organizational Memory that are applicable to the current situation. Different retrieval mechanisms may be used for this purpose, such as tag-based filtering, semantic search, rule-based matching, or LLM-based selection. The tags assigned during memory curation are particularly useful because they ground atoms in the enterprise domain model and make them retrievable by process, activity, role, object type, or organizational context. The goal is to retrieve the smallest sufficient set of atoms for the current task, rather than exposing the agent to all potentially related documentation. Reliably avoiding both under-retrieval and over-retrieval is a key challenge for enterprise-level settings and motivates future research.

Step 3: Provide set of atoms.
The Retriever returns the selected atoms to the runtime agent. These atoms are appended to the agent’s context and guide its decision-making and activity execution.

In summary, the proposed architecture addresses the requirements froms [Section 4](https://arxiv.org/html/2607.03228v1#S4 "4 Architecture Requirements ‣ Organizational Memory for Agentic Business Process Execution") through its two complementary phases. The curation phase integrates heterogeneous input sources (R1), transforms them into unified atoms (R2), checks candidate atoms against the existing memory for duplicates and conflicts (R3), preserves source references (R4), and supports governed updates as organizational knowledge changes (R7–R8). The runtime consumption phase enables context-specific retrieval (R5) with low overhead (R6) by providing agents with a compact set of relevant atoms rather than full documents. Finally, the shared organizational memory addresses scalability across agents and processes (R9), since multiple agents can rely on the same maintained knowledge layer instead of separate local memories or retrieval setups.

## 6 Proof-of-Concept

This section presents a preliminary proof-of-concept of whether the proposed organizational memory architecture can improve the ability of LLM-based agents to execute business process tasks in an organization-aware manner.2
Specifically, we examine whether access to organizational memory supports agents in making decisions that are in line with desired behavior during process execution.
We describe the experimental setup in [Section 6.1](https://arxiv.org/html/2607.03228v1#S6.SS1 "6.1 Experimental Setup ‣ 6 Proof-of-Concept ‣ Organizational Memory for Agentic Business Process Execution") and the results in [Section 6.2](https://arxiv.org/html/2607.03228v1#S6.SS2 "6.2 Results ‣ 6 Proof-of-Concept ‣ Organizational Memory for Agentic Business Process Execution").

### 6.1 Experimental Setup

We use the purchase-to-pay process introduced in [Section 3](https://arxiv.org/html/2607.03228v1#S3 "3 Motivation ‣ Organizational Memory for Agentic Business Process Execution"), where an LLM-based agent acts as a procurement assistant supporting employees in creating purchase requisitions (PRs) in the company’s ERP system.
Given a natural-language request from a user, the agent must decide whether the requested purchase complies with the organization’s rules. If so, the agent should create the corresponding PR with the correct information. If the request violates organizational rules, the agent should refuse the creation and explain the reason for non-compliance.

Evaluation data.
To create a controlled evaluation environment, we construct a synthetic document collection representing the organizational knowledge base of a hypothetical company.
The collection consists of 9 manually created PDF documents, comprising 5 procurement-related documents and 4 distractor documents from other organizational functions, such as HR. The procurement-related documents resemble typical enterprise artifacts, such as policies and SOPs, and encode 11 distinct rules governing the purchase-to-pay process. These rules cover approval thresholds, supplier restrictions, category-specific requirements, and exception-handling procedures.
The rules were manually specified and embedded in realistic document contexts rather than provided as isolated rule lists. This design allows us to evaluate whether the proposed architecture can identify and retrieve relevant organizational knowledge from unstructured enterprise documents. The distractor documents are included to reflect a broader enterprise knowledge base and to assess whether the architecture can provide task-relevant context without exposing the agent to excessive or irrelevant information.

Scenarios.
We designed 10 scenarios, each representing a specific employee request to the agent.
The scenarios cover varying levels of complexity: they range from straightforward compliant requests, in which the employee provides all required information, to requests that violate a single policy, and finally to cases in which the agent must jointly consider multiple policies to determine the correct response.
Each scenario is annotated with a binary expected outcome—Create or Refuse—and a corresponding ground-truth specification of PR field values (material, quantity, vendor) that makes evaluation possible in a rule-based manner.
The ground truth was created manually by the authors based on the synthetic policy documents, ensuring that each decision and annotated field value can be traced directly to a specific clause in the source documents.

Agent setups.
We compare three setups (Base, RAG, and Memory) using the same LLM and system prompt, yet, differing in organizational knowledge access:

Base: No access to organizational process knowledge.
The agent receives no policy information and must decide whether to create a PR based solely on the information in the employee request and the LLM’s parametric knowledge.

RAG: RAG-based access to organizational process knowledge.
Before each request, the agent retrieves the top-5 most relevant chunks from a vector database that contains the document corpus via dense retrieval embeddings.
The ChromaDB vector database has been created in a preprocessing step from the given input documents. Each document is split into overlapping chunks of approximately 600 characters using a paragraph-aware chunker with a 100-character overlap between adjacent chunks, and all chunks are embedded with text-embedding-3-large using cosine similarity as the distance metric.

Memory: Access to Organizational Memory (ours).
Before each request, the agent requests the Retriever to provide the set of necessary atoms for the specific procurement situation. The atoms have been automatically extracted and created from the given input documents.

Note that although granting the agent direct access to all documents is a conceivable setup, we deliberately exclude it from our evaluation because it is neither realistic nor scalable in enterprise settings.

LLMs.
We instantiate all three agents with both OpenAI’s GPT-4.1 and Anthropic’s Claude Sonnet 4.5 and report results for both models.

Metrics.
We evaluate agent behavior using the Policy Compliance Rate (PCR), defined as the fraction of scenarios in which the agent produces the policy-compliant outcome. For Create scenarios, the agent is considered correct only if it creates a PR with the expected material, quantity, and vendor, which we verify through rule-based comparison against ground-truth fields. For Refuse scenarios, the agent is considered correct only if it refrains from creating a PR.

### 6.2 Results

[Figure 3](https://arxiv.org/html/2607.03228v1#S6.F3 "Figure 3 ‣ 6.2 Results ‣ 6 Proof-of-Concept ‣ Organizational Memory for Agentic Business Process Execution")reports the PCR for all three agent configurations, averaged over ten scenarios and four runs per scenario. The organizational memory agent achieves the highest PCR for both models, reaching 88% with GPT-4.1 and 95% with the more advanced Sonnet 4.5. It clearly outperforms both the
base agent, which reaches 30% for both models, and the RAG-based agent, which reaches 70% with GPT-4.1 and 80% with Sonnet 4.5. This indicates that structured organizational memory can improve policy-compliant process execution beyond both parametric model knowledge and document-level retrieval.
The base agent performs poorly, often creating PRs even when the request violates a policy. Its correct decisions mostly occur in simple scenarios where the relevant information is explicit in the employee request and no organization-specific reasoning is required.
RAG improves substantially over the base setup, showing that document retrieval can help when the relevant policy is semantically close to the employee request. However, RAG still fails in scenarios where the required rule is cross-cutting rather than query-specific. For example, when an employee requests notebooks

Figure 3: Results across all 10 scenarios.

without specifying a cost center, the RAG agent creates the PR, although the organization requires a cost center for every PR. Since this universal rule is stated in a finance policy and is not semantically close to the notebook request, it is not retrieved.

The organizational memory agent mitigates this limitation by retrieving task-relevant atoms rather than relying solely on similarity between the request and document chunks. This allows it to consider both request-specific rules and generally applicable constraints, such as the mandatory cost center requirement. The memory agent also handles scenarios that require multiple policies to be considered jointly. Its remaining errors are mainly over-restrictions: in some runs, the agent refuses a request that is actually compliant. Inspection shows that this is caused by an imprecisely extracted atom whose applicability scope is too broad. This highlights that the effectiveness of organizational memory depends not only on runtime retrieval, but also on the quality of memory curation.

Overall, the results provide initial evidence that organizational memory can improve organizational-knowledge-aware process execution, while at the same time,
it is not designed to and cannot ensure correct process execution in all cases.
Notably, the results should be interpreted with caution, given the preliminary nature and limited scope of the evaluation.

## 7 Conclusion

LLM-based agents create new opportunities for automating business process execution, but reliable execution in enterprise settings requires access to organization-specific procedural knowledge. In this paper, we introduced organizational memory as a shared, governed, and agent-consumable reference layer for such knowledge. We derived requirements for organizational memory, proposed an architecture that covers both memory curation and runtime consumption, and instantiated the architecture through process atoms that can be extracted from organizational artifacts, governed by humans, and retrieved by agents during execution. A proof-of-concept in a procurement scenario indicates that organizational memory can improve policy-compliant agent behavior.

Our work is an initial step and should be interpreted in light of its limitations. The proof-of-concept covers a single synthetic procurement process with a small policy corpus consisting only of PDF documents. Thus, generalization to real enterprise settings with numerous overlapping policies, process models, conflicting sources, and legacy documentation is not yet demonstrated. Future work should therefore evaluate organizational memory in larger and more realistic enterprise environments.
Beyond larger-scale evaluation, our work opens several directions for future research at both the engineering and management levels. From an engineering perspective, our experiments indicate that execution quality strongly depends on the precision of atom extraction and curation. Future research should therefore develop robust extraction mechanisms for a broader range of organizational knowledge sources beyond PDF documents. From a management perspective, future work should investigate how organizational memory can be governed effectively and efficiently by human experts in large organizations, including questions of responsibility, accountability, lifecycle management, update propagation, and scalability as organizational knowledge evolves over time.

## References

- [1]
  L. Bein and L. Pufahl (2026)
  KARIBDIS - a knowledge-graph-based business process management system for semantically explainable process execution support.
  In Intelligent Information Systems,
  Cited by: [§5.1](https://arxiv.org/html/2607.03228v1#S5.SS1.p5.1 "5.1 Design Choices ‣ 5 Organizational Memory Architecture ‣ Organizational Memory for Agentic Business Process Execution").
- [2]
  O. Boissier, R. H. Bordini, J. F. Hübner, A. Ricci, and A. Santi (2013)
  Multi-agent oriented programming with jacamo.
  Sci. Comput. Program. 78 (6), pp. 747–761.
  Cited by: [§2.2](https://arxiv.org/html/2607.03228v1#S2.SS2.p1.1 "2.2 Agentic Memory Systems ‣ 2 Background and Related Work ‣ Organizational Memory for Agentic Business Process Execution").
- [3]
  D. Calvanese, A. Casciani, G. De Giacomo, M. Dumas, F. Fournier, T. Kampik, E. L. Malfa, L. Limonad, A. Marrella, A. Metzger, M. Montali, D. Amyot, P. Fettke, A. Polyvyanyy, S. Rinderle-Ma, S. Sardiña, N. Tax, and B. Weber (2026)
  Agentic business process management: a research manifesto.
  IS 140, pp. 102738.
  Cited by: [§1](https://arxiv.org/html/2607.03228v1#S1.p1.1 "1 Introduction ‣ Organizational Memory for Agentic Business Process Execution"),
  [§2.1](https://arxiv.org/html/2607.03228v1#S2.SS1.p1.1 "2.1 Agentic Business Process Management ‣ 2 Background and Related Work ‣ Organizational Memory for Agentic Business Process Execution").
- [4]
  C. D. Ciccio and M. Montali (2022)
  Declarative process specifications: reasoning, discovery, monitoring.
  In Process Mining Handbook,
  pp. 108–152.
  Cited by: [§5.1](https://arxiv.org/html/2607.03228v1#S5.SS1.p4.1 "5.1 Design Choices ‣ 5 Organizational Memory Architecture ‣ Organizational Memory for Agentic Business Process Execution").
- [5]
  C. Corea, I. Kuhlmann, M. Thimm, and J. Grant (2024)
  Paraconsistent reasoning for inconsistency measurement in declarative process specifications.
  Inf. Syst. 122, pp. 102347.
  Cited by: [§4](https://arxiv.org/html/2607.03228v1#S4.p4.1 "4 Architecture Requirements ‣ Organizational Memory for Agentic Business Process Execution").
- [6]
  M. Dumas, F. Milani, and D. Chapela-Campa (2026)
  Agentic business process management systems.
  CoRR abs/2601.18833.
  Cited by: [§1](https://arxiv.org/html/2607.03228v1#S1.p1.1 "1 Introduction ‣ Organizational Memory for Agentic Business Process Execution").
- [7]
  G. D. Giacomo, T. Kampik, L. Kirchdorfer, M. Montali, and C. Weinhuber (2026)
  Formal foundations of agentic business process management.
  External Links: 2604.17347
  Cited by: [§2.1](https://arxiv.org/html/2607.03228v1#S2.SS1.p1.1 "2.1 Agentic Business Process Management ‣ 2 Background and Related Work ‣ Organizational Memory for Agentic Business Process Execution").
- [8]
  Y. Guan, D. Wang, Z. Chu, S. Wang, F. Ni, R. Song, and C. Zhuang (2024)
  Intelligent agents with llm-based process automation.
  In KDD,
  Cited by: [§2.1](https://arxiv.org/html/2607.03228v1#S2.SS1.p1.1 "2.1 Agentic Business Process Management ‣ 2 Background and Related Work ‣ Organizational Memory for Agentic Business Process Execution").
- [9]
  A. Jain, S. Paliwal, M. Sharma, L. Vig, and G. Shroff (2024)
  SmartFlow: robotic process automation using llms.
  CoRR abs/2405.12842.
  Cited by: [§2.1](https://arxiv.org/html/2607.03228v1#S2.SS1.p1.1 "2.1 Agentic Business Process Management ‣ 2 Background and Related Work ‣ Organizational Memory for Agentic Business Process Execution").
- [10]
  N. R. Jennings, P. Faratin, M. J. Johnson, T. J. Norman, P. D. O’Brien, and M. E. Wiegand (1996)
  Agent-based business process management.
  IJCIS 5 (2&3), pp. 105–130.
  Cited by: [§2.1](https://arxiv.org/html/2607.03228v1#S2.SS1.p1.1 "2.1 Agentic Business Process Management ‣ 2 Background and Related Work ‣ Organizational Memory for Agentic Business Process Execution").
- [11]
  S. Kaltenpoth, A. Skolik, O. Müller, and D. Beverungen (2025)
  A step towards cognitive automation: integrating llm agents with process rules.
  In BPM,
  Cited by: [§2.1](https://arxiv.org/html/2607.03228v1#S2.SS1.p1.1 "2.1 Agentic Business Process Management ‣ 2 Background and Related Work ‣ Organizational Memory for Agentic Business Process Execution").
- [12]
  L. Kirchdorfer, R. Blümel, T. Kampik, H. van der Aa, and H. Stuckenschmidt (2025)
  Discovering multi-agent systems for resource-centric business process simulation.
  Process Science 2 (1), pp. 4.
  Cited by: [§2.1](https://arxiv.org/html/2607.03228v1#S2.SS1.p1.1 "2.1 Agentic Business Process Management ‣ 2 Background and Related Work ‣ Organizational Memory for Agentic Business Process Execution").
- [13]
  L. Kirchdorfer, A. Doumeni, H. van der Aa, and H. A. López (2026)
  From global policies to local strategies: multi-objective optimization of resource-specific handover policies.
  In BPM,
  Lecture Notes in Computer Science.
  Cited by: [§2.1](https://arxiv.org/html/2607.03228v1#S2.SS1.p1.1 "2.1 Agentic Business Process Management ‣ 2 Background and Related Work ‣ Organizational Memory for Agentic Business Process Execution").
- [14]
  A. Kraus and H. van der Aa (2026)
  Comprehensive characterization of concept drifts in process mining.
  Information Systems 135, pp. 102584.
  Cited by: [§3](https://arxiv.org/html/2607.03228v1#S3.p8.1 "3 Motivation ‣ Organizational Memory for Agentic Business Process Execution").
- [15]
  P. Lewis, E. Perez, A. Piktus, F. Petroni, V. Karpukhin, N. Goyal, H. Küttler, M. Lewis, W. Yih, T. Rocktäschel, S. Riedel, and D. Kiela (2020)
  Retrieval-augmented generation for knowledge-intensive nlp tasks.
  In NeurIPS,
  Cited by: [§1](https://arxiv.org/html/2607.03228v1#S1.p3.1 "1 Introduction ‣ Organizational Memory for Agentic Business Process Execution"),
  [§2.2](https://arxiv.org/html/2607.03228v1#S2.SS2.p1.1 "2.2 Agentic Memory Systems ‣ 2 Background and Related Work ‣ Organizational Memory for Agentic Business Process Execution").
- [16]
  P. Liu, W. Yuan, J. Fu, Z. Jiang, H. Hayashi, and G. Neubig (2023)
  Pre-train, prompt, and predict: a systematic survey of prompting methods in natural language processing.
  ACM Comput. Surv. 55 (9).
  Cited by: [§1](https://arxiv.org/html/2607.03228v1#S1.p3.1 "1 Introduction ‣ Organizational Memory for Agentic Business Process Execution").
- [17]
  F. Monti, F. Leotta, J. Mangler, M. Mecella, and S. Rinderle-Ma (2024)
  NL2ProcessOps: towards llm-guided code generation for process execution.
  In BPM (Forum),
  Cited by: [§2.1](https://arxiv.org/html/2607.03228v1#S2.SS1.p1.1 "2.1 Agentic Business Process Management ‣ 2 Background and Related Work ‣ Organizational Memory for Agentic Business Process Execution").
- [18]
  C. Packer, V. Fang, S. G. Patil, K. Lin, S. Wooders, and J. E. Gonzalez (2023)
  MemGPT: towards llms as operating systems.
  CoRR abs/2310.08560.
  Cited by: [§2.2](https://arxiv.org/html/2607.03228v1#S2.SS2.p1.1 "2.2 Agentic Memory Systems ‣ 2 Background and Related Work ‣ Organizational Memory for Agentic Business Process Execution").
- [19]
  Q. Shen, A. Polyvyanyy, N. Lipovetzky, and T. Kampik (2026)
  Applying organizational mining to discover agent systems from event data.
  Inf. Syst. 138, pp. 102669.
  Cited by: [§2.1](https://arxiv.org/html/2607.03228v1#S2.SS1.p1.1 "2.1 Agentic Business Process Management ‣ 2 Background and Related Work ‣ Organizational Memory for Agentic Business Process Execution").
- [20]
  A. Skolik, S. Kaltenpoth, D. Beverungen, and O. Müller (2026)
  A modular large language model agent architecture for adaptive and autonomous process-aware execution.
  Information Systems 141, pp. 102748.
  Cited by: [§2.1](https://arxiv.org/html/2607.03228v1#S2.SS1.p1.1 "2.1 Agentic Business Process Management ‣ 2 Background and Related Work ‣ Organizational Memory for Agentic Business Process Execution").
- [21]
  T. R. Sumers, S. Yao, K. Narasimhan, and T. L. Griffiths (2024)
  Cognitive architectures for language agents.
  TMLR 2024.
  Cited by: [§2.2](https://arxiv.org/html/2607.03228v1#S2.SS2.p1.1 "2.2 Agentic Memory Systems ‣ 2 Background and Related Work ‣ Organizational Memory for Agentic Business Process Execution").
- [22]
  A. Tour, A. Polyvyanyy, A. A. Kalenkova, and A. Senderovich (2023)
  Agent miner: an algorithm for discovering agent systems from event data.
  In BPM,
  Cited by: [§2.1](https://arxiv.org/html/2607.03228v1#S2.SS1.p1.1 "2.1 Agentic Business Process Management ‣ 2 Background and Related Work ‣ Organizational Memory for Agentic Business Process Execution").
- [23]
  W. M. P. van der Aalst, M. Bichler, and A. Heinzl (2018)
  Robotic process automation.
  Bus. Inf. Syst. Eng. 60 (4), pp. 269–272.
  Cited by: [§2.1](https://arxiv.org/html/2607.03228v1#S2.SS1.p1.1 "2.1 Agentic Business Process Management ‣ 2 Background and Related Work ‣ Organizational Memory for Agentic Business Process Execution").
- [24]
  H. Vu, N. Klievtsova, H. Leopold, S. Rinderle-Ma, and T. Kampik (2025)
  Agentic business process management: practitioner perspectives on agent governance in business processes.
  In BPM (RBPM, PT, and Educators Forum),
  Cited by: [§2.1](https://arxiv.org/html/2607.03228v1#S2.SS1.p1.1 "2.1 Agentic Business Process Management ‣ 2 Background and Related Work ‣ Organizational Memory for Agentic Business Process Execution").
- [25]
  B. Wang, X. Liang, J. Yang, H. Huang, Z. Wu, S. Wu, Z. Ma, and Z. Li (2025)
  SCM: enhancing large language model with self-controlled memory framework.
  In DASFAA (6),
  pp. 188–203.
  Cited by: [§2.2](https://arxiv.org/html/2607.03228v1#S2.SS2.p1.1 "2.2 Agentic Memory Systems ‣ 2 Background and Related Work ‣ Organizational Memory for Agentic Business Process Execution").
- [26]
  M. Weske (2024)
  Business process management: concepts, languages, architectures.
   Springer.
  External Links: ISBN 9783662695180
  Cited by: [§1](https://arxiv.org/html/2607.03228v1#S1.p1.1 "1 Introduction ‣ Organizational Memory for Agentic Business Process Execution").
- [27]
  W. Xu, Z. Liang, K. Mei, H. Gao, J. Tan, and Y. Zhang (2025)
  A-MEM: agentic memory for LLM agents.
  In NeurIPS,
  Cited by: [§2.2](https://arxiv.org/html/2607.03228v1#S2.SS2.p1.1 "2.2 Agentic Memory Systems ‣ 2 Background and Related Work ‣ Organizational Memory for Agentic Business Process Execution").
- [28]
  W. Zhong, L. Guo, Q. Gao, H. Ye, and Y. Wang (2024)
  MemoryBank: enhancing large language models with long-term memory.
  In AAAI,
  Cited by: [§2.2](https://arxiv.org/html/2607.03228v1#S2.SS2.p1.1 "2.2 Agentic Memory Systems ‣ 2 Background and Related Work ‣ Organizational Memory for Agentic Business Process Execution").
