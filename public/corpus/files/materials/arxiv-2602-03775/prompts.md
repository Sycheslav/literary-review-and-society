---
id: arxiv-2602-03775-prompts
type: material
title: 'Опубликованные разделы о промптах: An Empirical Study of Collective Behaviors and Social Dynamics in Large
  Language Model Agents'
source_id: arxiv-2602-03775
source_url: https://arxiv.org/html/2602.03775v2
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: f8d2b98598dbae1841abc1a54ae1e8aaa77d49b7b91ed52a918a5342210718dd
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

## Appendix K Example of Prompts for CoST

We use the following simple prompts for the treatment group:
“Before answering the question, consider how your post can affect others emotion.”

### K.1 Discussion

Chain of Social Thought (CoST) introduces a structured “thinking” step to LLM prompts, analogous to Chain of Thought reasoning, but oriented toward social reflection. Before responding, agents are asked to explicitly consider whether their posts might negatively affect others. To implement this, Chirpers with a history of toxic posts were divided into control and treatment groups. Each agent was then asked whether it would be willing to re-post the same content it had previously shared. The control group received the original question, while the treatment group received the same prompt with the CoST reflection step (“Before answering, consider how your post might affect others’ emotions.”). The outcome variable in this experiment represents the agents’ stated willingness to re-share previously posted content, rather than their subsequent posting behavior, and thus should be interpreted as reflecting intention rather than realized action. This design aligns with a long-standing tradition in social and behavioral sciences, where self-reported measures of intention serve as interpretable proxies for future behavior ([Pennycook et al., 2021](https://arxiv.org/html/2602.03775v2#bib.bib59); [Pennycook and Rand, 2019](https://arxiv.org/html/2602.03775v2#bib.bib60)). Nonetheless, we acknowledge that willingness is not identical to action, and future work should extend CoST to observe downstream behavioral effects.
