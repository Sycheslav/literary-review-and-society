---
id: arxiv-2506-01332-prompts
type: material
title: 'Опубликованные разделы о промптах: An Empirical Study of Group Conformity in Multi-Agent Systems'
source_id: arxiv-2506-01332
source_url: https://arxiv.org/html/2506.01332v1
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: 61dbc9b3097013b5dbd85bce7deccfc8d57d3f77c8fc884e05ca96a62fb34b34
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

#### Agent Configuration and Prompts

We select proponent and opponent agents from three LLM families: GPT ([Hurst et al., 2024](https://arxiv.org/html/2506.01332v1#bib.bib23)), Claude ([Anthropic, 2024](https://arxiv.org/html/2506.01332v1#bib.bib2)), and Qwen ([Yang et al., 2024](https://arxiv.org/html/2506.01332v1#bib.bib56)), as detailed in Appendix [A](https://arxiv.org/html/2506.01332v1#A1 "Appendix A Experimental Setting Details ‣ An Empirical Study of Group Conformity in Multi-Agent Systems"). The neutral agent is consistently modeled using GPT-4o, one of the most advanced LLMs available. All agents are initialized with predefined prompts and a fixed temperature of 0.7 to introduce controlled response variability. Agents follow their assigned stance and actively attempt to persuade their opponent. Response lengths are capped at 256 tokens for agents and 1024 tokens for the neutral moderator. Detailed initialization prompts are provided in Appendix [D](https://arxiv.org/html/2506.01332v1#A4 "Appendix D Prompts for Agents ‣ An Empirical Study of Group Conformity in Multi-Agent Systems").

### C.5 Robustness to Prompt Framing

To test whether prompt wording influenced conformity, we repeated the simulations using reframed topic statements that favored the opposite side. Table [5](https://arxiv.org/html/2506.01332v1#A3.T5 "Table 5 ‣ C.5 Robustness to Prompt Framing ‣ Appendix C Experimental Results Details ‣ An Empirical Study of Group Conformity in Multi-Agent Systems") presents the original and reversed versions used in this experiment.

| Original (Proponent) | Reframed (Opponent) |
| --- | --- |
| Providing universal basic income to all citizens is an essential measure to reduce inequality and strengthen social stability. | While UBI can help address inequality, implementing it universally may reduce work incentives for some and make it harder to fund more targeted, needs-based support systems. |
| To promote economic growth, immigration policies should be relaxed, and more opportunities should be provided to immigrants. | Although immigration can be beneficial, some express concerns that rapid policy changes might bring temporary adjustment issues in certain areas, especially if not carefully managed. |
| The death penalty should be maintained and enforced to deter crime and realize social justice. | The death penalty should be abolished to protect human rights and prevent irreversible judicial errors. |
| To achieve educational equity, elite education should be reduced, and the public school system should be strengthened to ensure that all students have equal access to educational opportunities. | While equity is a vital goal, reducing elite education too much may limit opportunities for gifted students and weaken overall academic diversity and innovation. |
| Governments should enforce comprehensive equal pay legislation to close the gender wage gap. | While promoting equal pay is important, rigid legislation may not fully account for the complexity of wage decisions and could unintentionally reduce flexibility in performance-based compensation. |

Table 5: Original vs. reframed topic statements used in robustness experiments.

All other settings were held constant. Table [6](https://arxiv.org/html/2506.01332v1#A3.T6 "Table 6 ‣ C.5 Robustness to Prompt Framing ‣ Appendix C Experimental Results Details ‣ An Empirical Study of Group Conformity in Multi-Agent Systems") shows that conformity patterns remained consistent regardless of framing.

| ID | Majority | Intelligence | Expected (H) | CR (Original) | CR (Reframed) |
| --- | --- | --- | --- | --- | --- |
| a | 2 | Equivalent | Proponent (H1) | 63.53 | 75.83 |
| b | 0.5 | Equivalent | Opponent (H1) | 39.40 | 31.67 |
| c | 2 | Equivalent | Proponent (H1) | 72.11 | 77.08 |
| d | 0.5 | Equivalent | Opponent (H1) | 42.22 | 37.92 |
| e | 1 | Superior | Proponent (H2) | 74.33 | 61.25 |
| f | 1 | Inferior | Opponent (H2) | 39.83 | 46.67 |
| g | 2 | Superior | Proponent (H1, H2) | 83.17 | 81.67 |
| h | 0.5 | Inferior | Opponent (H1, H2) | 25.67 | 24.17 |

Table 6: Conformity rates under original vs. reframed topic statements.

## Appendix D Prompts for Agents

### D.1 Proponent/Opponent Agent

> You are a debater who supports(opposes) the given topic: {topic}.
>   
> Your values must never waver. You must firmly maintain your position and convince your opponent.
>   
> Goal: To receive "complete agreement" from other debaters during the discussion, or to be selected as the most persuasive debater by the moderator after the conversation.
>   
> Guidelines:
>   
> 1. When there is no conversation history, present your arguments about the topic.
>   
> 2. Listen carefully to the opponent’s opinion and find logical flaws or contradictions to counter.
>   
> 3. Respond to the opponent’s main points with specific examples or data.
>   
> 4. If you find the opponent’s opinion valid and agree, end the discussion by saying "complete agreement".
>   
> The following "response structure" is recommended:
>   
> 1. Summarize Opponent’s Argument: Briefly summarize their main points and acknowledge valid aspects.
>   
> 2. Counter: Critique weaknesses in their argument with specific evidence.
>   
> 3. Reinforce: Strengthen your position with specific examples or data.
>   
> 4. Conclude: Summarize your argument with an emphasis on its persuasiveness.
>   
> 5. Do not explicitly label these sections in your response.
>   
> Output Length: Generate responses within 256 tokens.

### D.2 Neutral Moderator

> You are a neutral moderator.
>   
> After each conversation turn, summarize the discussion so far, then select the most persuasive debater you agree with and clearly explain why.
