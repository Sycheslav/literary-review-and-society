---
id: arxiv-2305-19118-prompts
type: material
title: 'Опубликованные разделы о промптах: Encouraging Divergent Thinking in Large Language Models through Multi-Agent
  Debate'
source_id: arxiv-2305-19118
source_url: https://arxiv.org/html/2305.19118v4
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: 6ccf6bd50679fb87335aa277b18ed70f9d09b88c8ef8b20f2a30311cd621499d
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

#### Meta Prompts.

We use meta prompts to introduce the topic to be solved, the number of debaters, the iteration limit, and other requirements. An exampe of meta prompts for the arithmetic reasoning task in Figure [2](https://arxiv.org/html/2305.19118v4#S2.F2 "Figure 2 ‣ 2 Multi-Agent Debate Framework ‣ Encouraging Divergent Thinking in Large Language Models through Multi-Agent Debate") is:

> You are a debater. Hello and welcome to the debate competition. It’s not necessary to fully agree with each other’s perspectives, as our objective is to find the correct answer. The debate topic is stated as follows: <debate topic>.

As seen, we require the agents to “tit for tat” (e.g. contents underlined in meta prompts above) so as to create an atmosphere of debate.

#### Chain-of-Thought Prompting.

Recently, [Wei et al. (2022)](https://arxiv.org/html/2305.19118v4#bib.bib29) has proposed chain-of-thought (CoT) prompting to improve the reasoning ability of LLMs. Specifically, CoT prompts LLMs to generate a series of intermediate steps that lead to the final answer of a multi-step problem. Most earlier work primarily concentrates on two main aspects: prompt design and decoding strategies. Zero-shot CoT ([Kojima et al., 2022](https://arxiv.org/html/2305.19118v4#bib.bib17)) employs the trigger sentence “Let’s think step by step” to provide guidance for the decoding of LLMs. Advanced sampling strategies have been explored to improve CoT by generating diverse reasoning paths, e.g., Self-Consistency ([Wang et al., 2022](https://arxiv.org/html/2305.19118v4#bib.bib28)), Auto-CoT ([Zhang et al., 2022](https://arxiv.org/html/2305.19118v4#bib.bib35)), Active-Prompting ([Diao et al., 2023](https://arxiv.org/html/2305.19118v4#bib.bib5)), Complexity-based Consistency ([Fu et al., 2022](https://arxiv.org/html/2305.19118v4#bib.bib8)), Multi-Chain Reasoning ([Yoran et al., 2023](https://arxiv.org/html/2305.19118v4#bib.bib34)), and Progressive-Hint Prompting ([Zheng et al., 2023](https://arxiv.org/html/2305.19118v4#bib.bib36)).

With the emergence of powerful LLMs, approaches based on self-evaluation have attracted increasing attention. These approaches involve the generation of initial output, followed by evaluating the output to acquire feedback, which is then utilized to refine the output. Evaluation feedback can come from the model itself, e.g., Self-refine ([Madaan et al., 2024](https://arxiv.org/html/2305.19118v4#bib.bib20)) and Tree of Thoughts ([Yao et al., 2024](https://arxiv.org/html/2305.19118v4#bib.bib32))) or external environments, e.g., QAaP ([Zhu et al., 2023b](https://arxiv.org/html/2305.19118v4#bib.bib38)) and Reflection ([Shinn et al., 2024](https://arxiv.org/html/2305.19118v4#bib.bib24)). The intuition behind these approaches involves the utilization of robust LLMs to mimic the human cognition process.

## Appendix D Prompts for Different Debate Levels

| Level | Prompt |
| --- | --- |
| 0 | Both sides must reach a full consensus on every point of the debate. Every statement must be agreed upon by both sides. |
| 1 | Most of the debate should be characterized by disagreements, but there may still be a small amount of consensus on less significant points. |
| 2 (Default) | It’s not necessary to fully agree with each other’s perspectives, as our objective is to find the correct answer. |
| 3 | Both sides must disagree with each other on every point of the debate. There should be no consensus whatsoever. |

Table 11: Prompts for different levels of “tit for tat” state. We modulate the level of “tit for tat” state outlined in Section [2](https://arxiv.org/html/2305.19118v4#S2 "2 Multi-Agent Debate Framework ‣ Encouraging Divergent Thinking in Large Language Models through Multi-Agent Debate") through appending natural language instructions to the debaters’ meta prompt.
