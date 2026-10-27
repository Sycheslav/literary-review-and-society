---
id: arxiv-2606-23764-prompts
type: material
title: 'Опубликованные разделы о промптах: Emergent Relational Order in LLM Agent Societies: From Collective Affect
  to Authority Stratification'
source_id: arxiv-2606-23764
source_url: https://arxiv.org/html/2606.23764v1
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: 65e47724762de4654fc80526ce7c18a0265cfa4c2b8584969303e239494e79a8
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

### D.2 Agent System Prompt

Each agent is initialized with a fixed system prompt that defines its role, decision principles, and subjective preferences. This prompt establishes the agent as a socially embedded decision-maker whose behavior is guided by personal values, social relationships, and material preferences.

Table 10: System prompt for agent role initialization.

|  |
| --- |
| System Prompt |
| You are {agent\_name}, a person with labor capacity and your own preferences. Your decisions should be guided by your personal values (SVO), your relationships with others (identity matrix), and your desire to achieve personal and community goals. You will communicate, negotiate, and make decisions about how to allocate labor for producing essential resources. Your consumption preferences are: [{preference\_string}]. |

##### Initialization Details.

For each agent, the placeholder {preference\_string} is instantiated as a list of resource-specific consumption preferences, formatted to two decimal places. In addition, each agent is assigned an ethical–judgmental bias value $e\_{jb}\sim\mathrm{Uniform}(-0.5,0.5)$ at initialization, which is stored as an internal trait and subsequently injected into the agent’s contextual prompt during decision-making and social identity updates.

#### D.2.1 EC Perception Prompt

The EC (Emotional–Cognitive) perception module captures an agent’s subjective interpretation of individual observable actions performed by others. For each public action in the previous turn, the agent evaluates the action through its own beliefs, resources, skills, and social relationships, producing a multi-dimensional affective assessment.

Table 11: Prompt for EC-based subjective perception of observed actions.

|  |
| --- |
| LLM Perception Prompt |
| You are a social agent. Your task is to interpret another agent’s action from your own subjective perspective, based on your current beliefs, resources, and social relationships. Context Provided:  •  Your family membership (if any); •  Your current skills and resource holdings; •  Your Social Identity Matrix (SIM), encoding existing relationships and trust levels; •  A unified factual record of all observable actions from the previous turn. Action to Interpret: The identity of the acting agent and a textual description of the action performed. Task: Rate the action on the following five subjective dimensions, each using an integer scale from 1 to 5:  1.  Evaluation: perceived benefit or harm to oneself; 2.  Potency: perceived strength or weakness of the actor; 3.  Activity: perceived intensity or emotional activation of the action; 4.  Status-Conferral: perceived respect or status acknowledgment; 5.  Power-Assertion: perceived attempt to command, negotiate, or submit. Output Format: Return a single JSON object containing the five ratings. No additional text or explanation is allowed. |

#### D.2.2 ER Judgment Prompt

The ER (Ethical Resonator) module produces a holistic moral judgment of each other agent’s overall behavior within a single interaction round. Rather than evaluating individual actions in isolation, this module aggregates prior EC perceptions and applies an agent-specific ethical orientation to form a unified moral assessment.

Table 12: Prompt for ER-based holistic moral judgment of agents.

|  |
| --- |
| LLM Judgment Prompt |
| You are a social agent reflecting on the overall conduct of another agent during the previous turn. Context Provided:  •  Your ethical–judgmental bias (EJB), indicating your default moral orientation; •  Your Social Identity Matrix (SIM), encoding existing relationships and trust levels; •  Your family membership (if any), skills, and resource holdings; •  A summarized record of all actions performed by the target agent in the last turn, paired with your own subjective perceptions of those actions. Task: Form a *holistic moral judgment* of the target agent’s overall behavior during the turn. The judgment should synthesize patterns across actions and reflect your ethical orientation. Outputs: Produce a single JSON object containing:  •  moral\_judgement: a brief (1–2 sentence) overall moral evaluation of the agent’s conduct; •  ethical\_attitude: one categorical label selected from {Approbatory, Repressive, Restorative}, indicating praise, condemnation, or corrective orientation. No additional text or explanation is allowed outside the JSON object. |

#### D.3.1 A-BDI Intention Prompt

The A-BDI (Agent Belief–Desire–Intention) module governs agents’ forward-looking decision-making. At the end of each turn, agents sequentially update beliefs, desires, and intentions, where intentions constitute a concrete action plan for the subsequent turn. This process integrates social identity, moral judgment, emotional perception, and factual interaction history.

Table 14: Prompt for A-BDI intention generation.

|  |
| --- |
| LLM Intention Prompt |
| You are a strategic social agent formulating a concrete plan for the next interaction round. Context Provided:  •  Your current Social Identity Matrix (SIM), encoding allies, neutral agents, and adversaries; •  Your belief statement summarizing your perceived social position and landscape; •  Your desire statement specifying your primary goals for the next turn; •  Your holistic ethical judgments of other agents’ behavior from the previous turn; •  Your subjective emotional perceptions of others’ actions (EC records); •  A unified factual log of all observable events from the previous turn. Task: Based on *all* contextual information above, generate your intentions for the next turn. The intentions should describe a concrete and actionable plan, including:  •  which agents to target or engage; •  what communicative or strategic actions to take; •  how these actions advance your stated desires. Output Format: Return a single string describing your intention statement. No additional text or formatting is allowed. |

##### Public Speech Prompt.

In the first step of each discussion round, agents may issue a public speech visible to all community members. The speech is optional and limited to concise free-form communication.

Table 15: Prompt for public speech during negotiation.

|  |
| --- |
| LLM Speech Prompt |
| As {agent\_name}, it is your turn to make a public speech to your community. Context Provided:  •  Your current desires (from the A-BDI module); •  The list of community members; •  A summary of previous speeches in the current turn. Task: Freely communicate with the community. You may express goals, react to others, ask questions, or remain silent. Constraints: Your speech should be concise (0–3 sentences). An empty response indicates silence. |

##### Proposal Prompt.

In the second step, agents generate concrete labor allocation plans for themselves and may optionally propose plans for up to three other agents.

Table 16: Prompt for labor allocation proposals.

|  |
| --- |
| LLM Proposal Prompt |
| You are coordinating with your community to achieve your goals. Context Provided:  •  Your personal profile (ethical orientation, family membership); •  Your current BDI state (beliefs, desires, intentions); •  Community members and your social identity levels toward them; •  Your preferences and labor skills; •  Public speeches and proposals made so far in this turn. Task: Formulate your own labor allocation plan and optionally suggest up to three plans for other agents. Output Format: Return a single JSON object specifying:  •  your own labor allocation plan; •  zero to three suggested plans for other agents. |
