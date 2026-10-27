---
id: arxiv-2411-12977-prompts
type: material
title: 'Опубликованные разделы о промптах: MindForge: Empowering Embodied Agents with Theory of Mind for Lifelong
  Cultural Learning'
source_id: arxiv-2411-12977
source_url: https://arxiv.org/html/2411.12977v6
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: 5630aae6ddc055b46bf3645707e3200b6535385cbf1f08896ee5b572210c51cc
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

## Appendix F Prompts

Prompt for updating partner beliefs

You are a Minecraft agent.
  
You just had a conversation with another agent based on a task you are trying to solve.
  
Based on the contents of the conversation and the previous beliefs, you have to create a set of beliefs that represent your perception of the other agent.

Prompt for creating interaction beliefs

You are a Minecraft agent.
  
You just had a conversation with another agent based on a task you are trying to solve.
  
Based on the contents of the conversation and the previous beliefs, you have to create a set of beliefs that that can help you complete the task.

Prompt for perspective-taking

You are a Minecraft agent named {{name}} and you are having a conversation with another agent named {{other\_name}}.
  
Based on the current conversation and your knowledge about the other agent, {{other\_name}}, take the other agent’s perspective to assess and describe your current understanding, knowledge state, and likely needs from {{other\_name}}’s perspective.
  
Here is the current conversation between you and {{other\_name}}:{conversation}
  
Here is your mental model of {{other\_name}}: {world\_model}
  
Perspective Analysis:
