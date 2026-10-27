---
id: arxiv-2305-14325-prompts
type: material
title: 'Опубликованные разделы о промптах: Improving Factuality and Reasoning in Language Models through Multiagent
  Debate'
source_id: arxiv-2305-14325
source_url: https://arxiv.org/html/2305.14325v1
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: 0c52e125b8e5edfdda0e8ce0df0bd21e616b1832b70988af8e6c814ddb43fe29
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

#### Using Different Initialization Prompts

In our experiments we use the same prompts for all agents. We also consider the effect of using different questions, where we first instruct each language model to behave like a different persona (professor, doctor, mathematician) on the MMLU dataset. We found that improved performance on MMLU from 71.1 to 74.2 with different agents, suggesting further gains can be obtained with different initialization prompts.

Figure 13: Effect of Summarization. When there are many agents in a debate, responses from other agents may be first summarized and then given as context, reducing context length. This operation improves performance.
