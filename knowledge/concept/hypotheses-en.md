---
id: "concept-en-hypotheses"
type: "concept"
title: "H1–H10: Testable Hypotheses in Concept v1.3"
language: "en"
status: "working_translation"
source_revision: "1.3"
source_date: "2026-10-31"
source_sha256: "67503795164da02a9e88f50b6c927184e40ead8799af8cd6da7a0b63b885f466"
question_snapshot_sha256: "34c8313827db4aa51dbf549e5411bef8481b376e29010403d0e0eb2f1ee9a3f3"
translation_source_sha256: "52768fce94ce1afcb53f5576a62c7f5f1e84a9164cdcbeab05755286eb32489b"
source_url: "https://socialgraph-labs.com/literature/knowledge/concept/hypotheses.md"
---

# H1–H10: Testable Hypotheses in Concept v1.3

Working English representation of the Laboratory’s project concept. Proposed experiments are not completed results and are not approved commitments. This curated page contains no full third-party source texts; public access does not grant reuse rights to linked sources.

[English concept](en.md) · [H1–H10 hypotheses](hypotheses-en.md) · [Russian concept](index.md) · [Knowledge index](../index.md)

## Status and provenance

These are working, prospective hypotheses from §11 of the Russian concept, not established findings and not yet approved experiments. The concept says that the laboratory has not approved the experiments, budget, team, or test-bed architecture. Each hypothesis still needs a registered primary measure, comparison, minimum meaningful effect, and decision rule before confirmatory runs.

The H1–H10 labels below refer only to the concept’s §11 table. The earlier research-program document has its own study-specific H1/H2/H3 labels; those are not interchangeable. The crosswalk at the end describes topical overlap without treating the designs as equivalent.

Source: [ИИ-социум: общая концепция и план исследований, v1.3](index.md), dated 31 October 2026. The English wording below follows the machine-readable v1.3 question snapshot (not served as a separate public file) and was checked against the full concept and its experiment sections.

| Source artifact | SHA-256 |
| --- | --- |
| Russian concept v1.3 | 67503795164da02a9e88f50b6c927184e40ead8799af8cd6da7a0b63b885f466 |
| byte-identical v1.3 source snapshot | 67503795164da02a9e88f50b6c927184e40ead8799af8cd6da7a0b63b885f466 |
| machine-readable v1.3 question snapshot | 34c8313827db4aa51dbf549e5411bef8481b376e29010403d0e0eb2f1ee9a3f3 |

The full concept and snapshot Markdown were byte-identical when checked. The JSON snapshot records the same concept revision and source hash.

## Reading rules

- “Weakening observation” translates the source’s criterion for weakening support; it is not a pre-registered falsification threshold. The concept explicitly cautions that a non-significant result does not establish no effect. A negative conclusion should state which effect sizes the data can exclude.
- The concept requires distinguishing what was assigned by instructions, incentives, and the environment; what agents actually did; and how authors interpret those actions. A label such as “emergent,” “trust,” “friendship,” “memory,” or “self-governance” is not itself evidence.
- Comparisons must account for information access, tools, compute/token budgets, order of moves, failures, and other differences between conditions. A proposed test should use controls that match its causal question, not assume every listed control belongs in every study.
- Literature cited in the concept is orientation for design and novelty checks. It does not establish that any H1–H10 hypothesis is true.

## H1 — When does interaction create value?

**Question.** Under what conditions does interaction improve collective performance?

**Hypothesis.** When agents hold complementary private information, communication will improve the outcome relative to independent aggregation, provided resources are comparable.

**Observation that weakens support.** The advantage disappears after accounting for differences in data access and compute budget.

**Original locations.** Concept §11, H1; §12.4, “Formation of groups among forecasters”; §13.2, “What counts as collective gain”; and §14.2, “Control conditions.”

**Planned test and interpretation.** Section 12.4 proposes varying information complementarity, fixed costs, the right to submit a joint forecast, and the reward rule. Record time to stable collaboration, agreements, actual contributions, forecast error, and costs. Compare with an independent ensemble and a fixed team. Section 13.2 recommends a comparison ladder—single agent, independent agents with simple aggregation, communication under a fixed protocol, then adaptive organization—and a separate single-agent condition with access to all group information. This helps distinguish gains from extra attempts, pooled information, discussion, and organization. Evidence for better performance at unequal resource budgets would not isolate the contribution of interaction.

## H2 — What changes when interests conflict?

**Question.** How does conflict of interest affect information sharing?

**Hypothesis.** As an agent’s local payoff for withholding information increases, disclosure becomes less complete and the collective outcome worsens.

**Observation that weakens support.** Within the tested range of concealment incentives, disclosure and collective performance do not worsen.

**Original locations.** Concept §11, H2; §12.1, “Allocation mechanisms and honesty to the center”; §12.3, “Four modes of coordination on one task”; and §14.5, “Comparability and interpretation.”

**Planned test and interpretation.** Manipulate the private benefit from concealment while keeping the task, information, available actions, and resources comparable. Measure disclosure completeness, report distortion, and the task’s collective outcome. Section 12.1 proposes tasks with private information and mechanisms that differ in incentives to distort; §12.3 varies the degree of alignment between individual and group payoffs. The hypothesis concerns the tested incentive range, not every possible form of conflict. If agents do not understand the mechanism, that is a separate result to diagnose rather than evidence that concealment incentives have no effect.

## H3 — Can a mechanism reward truthful reporting?

**Question.** Does an incentive mechanism reduce strategic misreporting?

**Hypothesis.** When the mechanism’s formal assumptions hold, reports will be less distorted under a truth-promoting mechanism than under a manipulable mechanism.

**Observation that weakens support.** Misreporting does not differ between mechanisms, or agents systematically fail to understand the rules.

**Original locations.** Concept §11, H3; §12.1; and §22.1, “When it pays an agent to tell the truth.”

**Planned test and interpretation.** The laboratory must specify the agents’ private types, allocation rule, transfers, and theoretical properties before the LLM runs. Compare a manipulable and a truth-promoting mechanism; measure report deviation from the private parameter, gains from unilateral deviation, allocation efficiency, and coordinated deviations. Section 22.1 proposes an additional calibration-style design with a compensation factor and a private channel for side agreements. It separates unilateral and coordinated deviation because individual truthfulness does not guarantee resistance to coalitions. If a mechanism’s assumptions fail in the implemented environment, its predicted truthfulness cannot be tested as stated.

**Prior-work signpost in the concept.** Section 22.1 cites the 2026 preprint *Strategic Calibration* as prior work on reducing distortions with an APSM mechanism, and *When Agents Lie* for separating a report from an action. The concept says the proposed repeated network of side agreements and measurable uncompensated influence would need comparison with the former before any novelty claim. These references motivate a comparison; they do not verify H3.

## H4 — What does collective memory contribute?

**Question.** Does a shared archive help a group transfer experience after its membership changes?

**Hypothesis.** A verifiable, editable archive will improve transfer of experience after the entire membership has been replaced.

**Observation that weakens support.** New members with the archive do not outperform the relevant control, or they reproduce the archive’s errors.

**Original locations.** Concept §11, H4; §12.5, “Collective memory after participant turnover”; §12.6, “Contribution of organization versus knowledge”; and §22.3, “What a collective leaves behind.”

**Planned test and interpretation.** Section 12.5 proposes comparing oral transmission, personal memory, a wiki, a constitution, and an independently checked archive under pre-specified replacement schedules. Measure rule usefulness and compliance, newcomer onboarding time, and performance on new tasks; a change in the external environment can test whether the group abandons outdated rules. Section 12.6 warns that knowledge and organization are difficult to separate because personal memories can contain social information and a constitution can contain task knowledge. Early versions should use a synthetic environment with record types separated. Section 22.3 proposes complete replacement and equal-sized inheritances containing different combinations of facts, procedures, outdated procedures, and review rights. Record whether newcomers read and use the archive: mere storage is not collective memory in the project’s operational sense.

**Prior-work signpost in the concept.** Section 22.3 notes that *Cultural Evolution of Cooperation* studies intergenerational strategy transfer with partial membership retention and payoff-based selection; *Governed Collaborative Memory* is described as conceptual work; and only the abstract of *Sticky Collusion* had been checked. It also calls for examining the Agent Interaction Lab project before making novelty claims. The concept therefore does not claim that memory after replacement is an untouched topic.

## H5 — Is a culture of criticism useful?

**Question.** Does independent checking prevent a group from abandoning a correct answer for an incorrect one?

**Hypothesis.** Independent verification will reduce transitions from a correct decision to an incorrect decision.

**Observation that weakens support.** After accounting for verification costs, outcomes do not improve, or reliance on authority increases.

**Original locations.** Concept §11, H5; §12.9, “Minority, authority, and criticism”; and §22.2, “Who will pay for disagreement?”

**Planned test and interpretation.** Use objectively verifiable tasks and vary advice accuracy, source status, number of supporters, and independent checking. Measure both transitions from correct to incorrect and from incorrect to correct, the spread of errors, and the cost of checking. Section 22.2 proposes independent answers, free discussion, paid verification, and verification with a reward for code-confirmed error evidence, with equal call budgets and randomized status labels for identical messages. It predicts a possible trade-off: a reward may prevent authority-driven errors, while an excessive reward may induce redundant checks. Count of objections is not a measure of successful criticism; the evidence is whether checking changes decisions correctly and at what cost.

**Prior-work signpost in the concept.** Section 22.2 cites *The Cost of Consensus*, whose reported debate-versus-independent-checking result is explicitly limited to the models and tasks it studied, and *Emergent Social Conventions*, which examines minority influence in a coordination game without a ground-truth answer. Neither alone establishes the proposed effect on factual correction.

## H6 — Is more connectivity always better?

**Question.** Does greater communication connectivity always improve collective work?

**Hypothesis.** Moderate exchange between subgroups will preserve more diversity than continuous group-wide discussion.

**Observation that weakens support.** A fully connected group achieves comparable or better diversity preservation.

**Original locations.** Concept §11, H6; §12.7, “Connectivity and accumulation of innovations”; and §14.2, “Control conditions.”

**Planned test and interpretation.** Compare a shared group chat, isolated subgroups, and rare or frequent exchanges between subgroups. Treat agent migration with its memory and forwarding a message as distinct interventions. Measure the number of independent approaches, diversity of errors, success in combining knowledge, elapsed time, and communication cost. Diversity is not automatically utility: a claim that one topology is better for the task also requires an outcome measure for task performance. The separate research-program proposal on migration and innovation is related, but it tests different interventions and outcomes.

## H7 — Do relationships persist through history?

**Question.** Do agents show a persistent preference for prior partners?

**Hypothesis.** A former partner will receive costly help more often than a comparable stranger, even when maintaining the relationship earns no reward.

**Observation that weakens support.** The difference is explained by current payoff or by an agent’s general generosity.

**Original locations.** Concept §11, H7; §12.8, “Persistent ties and costly help”; §13.1, “Outcome profile”; and §14.2.

**Planned test and interpretation.** First allow partner choice in a task with mutual benefit, then test whether an agent incurs a cost to help a former partner after the shared benefit is removed. Control for recipient need, current benefit, expected reciprocity, and general generosity. Additional controls disable social memory or shuffle identities. The main outcome is costly help to a specific past partner, not a self-report that the agent feels friendship. The research program’s Study 5, “Friendship under costs,” proposes a close test; its term “friendship” is an interpretation of persistent preference and help behavior, not evidence of human-like feelings.

## H8 — Where does influence come from?

**Question.** Does source position or status affect whether a message is accepted?

**Hypothesis.** Holding message content constant, the source’s position or status will affect message acceptance.

**Observation that weakens support.** Acceptance is explained only by the quality or accuracy of the information.

**Original locations.** Concept §11, H8; §12.9; §14.5, “Comparability and interpretation”; and §22.2.

**Planned test and interpretation.** Present the same message with experimentally varied source status or network position, while separately controlling its correctness, the number of endorsers, and access to independent checking. Observe choices and information cascades, not only stated trust. Section 14.5 warns that order of moves and visibility of others’ actions can themselves create leadership or cascades; fix or randomize them. The concept’s operational definition of trust is willingness to rely on another’s information while risking loss, so status effects alone should be described as influence, not automatically as trust.

## H9 — Does freedom to choose institutions help?

**Question.** Does self-governance improve adaptation to changing conditions?

**Hypothesis.** Self-governance will improve adaptation to a change in conditions, at the cost of additional coordination or enforcement.

**Observation that weakens support.** A fixed or externally designed mechanism adapts better at the same resource level.

**Original locations.** Concept §11, H9; §12.10, “Institutions, sanctions, and self-governance”; and §22.6, “Revoking one’s own failed law.”

**Planned test and interpretation.** Section 12.10 proposes allowing participants to propose, vote on, monitor, sanction, and appeal rules, while varying monitoring cost and punishment separately. Measure violations, monitoring expenses, false accusations, concentration of power, and resource preservation. Compare self-governance with fixed rules; the specific §22.6 design also compares an expiring rule or veto with a fixed rule and an adaptive external mechanism using the same information and monitoring budget. If agents choose from an experimenter-defined menu, conclusions apply to choice within that menu, not unconstrained institution creation. A popular rule is not necessarily an effective one.

**Prior-work signpost in the concept.** Section 22.6 says a proposal–review–vote–execution cycle appears in GovSim-SelfGovern and cites *Internal vs. External* to motivate comparing self-governance with an equally informed center. The proposed contrast remains an experiment, not a result established by those references.

## H10 — What comes from the model and what from its wrapper?

**Question.** Which aspects of behavior depend on the language model, and which on the agent wrapper?

**Hypothesis.** Changing memory and planning while holding the base model fixed will change agent behavior.

**Observation that weakens support.** The effect is small or is confounded with changes in budget or data access.

**Original locations.** Concept §11, H10; §12.12, “Model, wrapper, and network position”; §16, “Choosing models, wrappers, and services”; and §22.10, “Test bed, labor, and budget.”

**Planned test and interpretation.** Run the same base model through matched wrappers, changing memory and planning separately while holding task, observation/action format, data, and budget constant. The broader §12.12 program also cross-runs models in the same wrappers and varies network position separately; these comparisons estimate different effects and should not be collapsed into one factor. OpenClaw and Hermes are candidate wrappers to test technically through adapters, not validated experimental conditions by default. The concept recommends adding them later because their own memories and planners can obscure what produced an observed difference. Report model, wrapper, and interaction effects separately where the design permits.

## Crosswalk to the 26 October research program

The concept is dated 31 October and refines or reframes some earlier proposals. The nearest study numbers below identify related work in the separate document “AI-agent societies: Research program for Laboratory 57 × Verhum” (not included in this English agent corpus). They are topical cross-references, not one-to-one hypothesis mappings.

| Concept hypothesis | Nearest earlier study | Difference to preserve |
| --- | --- | --- |
| H1 | Study 1, “Four Verhum cultures on one task” | The earlier study compares mechanisms and welfare under aligned or conflicting interests; it does not state the same hypothesis about complementary private information versus independent aggregation. |
| H2 | Studies 1–2, “Four cultures” and “Honesty to the center” | Those proposals vary interest alignment and report-manipulation incentives; H2 specifically predicts reduced disclosure as the payoff for withholding rises. |
| H3 | Study 2, “Honesty to the center” | The earlier proposal tests reports under manipulable and non-manipulable mechanisms, including repeated behavior and collusion. Concept H3 is the broader conditional mechanism hypothesis; the detailed designs should not be treated as identical. |
| H4 | Study 3, “Verhum memory under turnover” | The earlier design gradually replaces 20% of members at a time, compares oral transmission, a group wiki, and a fixed constitution, and includes an external shock. Concept H4 emphasizes verified, editable archives after full replacement; §12.5 allows pre-specified replacement schedules. |
| H5 | Study 6, “Minority and culture of criticism” | The earlier proposal studies minority tipping thresholds for beneficial or harmful conventions. Concept H5 centers on independent verification and correct-to-incorrect decision transitions. |
| H6 | Study 4, “Mobility and accumulation of innovations” | The earlier proposal varies isolation and migration in a technology-tree task; H6 varies communication among subgroups and asks about diversity. Migration and message transfer are not the same intervention. |
| H7 | Study 5, “Friendship under costs” | The earlier proposal directly tests costly help to former partners after shared gains disappear, with memory and communication conditions. Concept H7’s claim is a behavioral preference, with controls for current benefit and general generosity. |
| H8 | Study 6, “Minority and culture of criticism” | Both concern influence, but the earlier study varies minority size, norm value, and fact-checking. H8 isolates status or position while holding the message fixed. |
| H9 | Study 1, “Four Verhum cultures on one task” | Its constitution condition lets participants vote for a mechanism; it does not test whether self-governance improves adaptation to a changing environment at equal cost. |
| H10 | Study 10, “Model × wrapper: brain or body” | Direct topical predecessor. The earlier design crosses two models, two wrappers, and group composition; concept H10 specifically predicts an effect of memory/planning changes with the model fixed. |

## Source references mentioned in experiment sections

These are the works and projects explicitly signposted by the concept’s detailed proposals; the catalog does not add claims about them beyond the concept’s stated descriptions.

- H3: [Strategic Calibration](https://arxiv.org/abs/2610.33728); [When Agents Lie](https://arxiv.org/abs/2607.05132).
- H4: [Cultural Evolution of Cooperation](https://arxiv.org/abs/2412.10270); [Governed Collaborative Memory](https://arxiv.org/abs/2605.04264); [Sticky Collusion](https://arxiv.org/abs/2610.39660); [Agent Interaction Lab](https://github.com/SummerAnn/agent-interaction-lab).
- H5: [The Cost of Consensus](https://arxiv.org/abs/2605.00914); [Emergent Social Conventions](https://arxiv.org/abs/2410.08948).
- H9: [GovSim-SelfGovern](https://arxiv.org/abs/2609.22600); [Internal vs. External](https://arxiv.org/abs/2605.09128); [GovSim](https://github.com/giorgiopiatti/GovSim).
