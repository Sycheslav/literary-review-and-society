---
id: arxiv-2412-03563-prompts
type: material
title: 'Опубликованные разделы о промптах: From Individual to Society: A Survey on Social Simulation Driven by Large
  Language Model-based Agents'
source_id: arxiv-2412-03563
source_url: https://arxiv.org/html/2412.03563v1
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: 0c5588cce70e48a8a13a666562bdd5fcd58733c60bed726b5496f045d25796d6
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

#### 3.2.1 Nonparametric Prompting

Nonparametric prompting, i.e. prompt engineering, is a method of interacting with LLMs by designing and optimizing input prompts. In some individual simulations, the description-based profile is implemented by a system prompt. Researchers often create system prompts that begin with “You are a…” to assign models specific demographic features and roles [[77](https://arxiv.org/html/2412.03563v1#bib.bib77)]. Besides, LLM outputs are enhanced in some works through few-shot prompting by providing specific examples to inject detailed information and improve response quality. Moreover, incorporating problem-specific details directly within prompt structures can significantly enhance the effectiveness of the simulation.

Short-term memory is often implemented by nonparametric prompting. For situation-based individual simulations, environment descriptions and behavior rules are typically conveyed through prompt engineering [[121](https://arxiv.org/html/2412.03563v1#bib.bib121)]. Since situational information is generally objective and must be followed, emphasizing this information directly in the input is a rather effective method for constructing simulations. However, due to the context window limitations of LLMs, the quality of the profile prompt significantly restricts prompt-based individual simulations.
Moreover, the preset template configurations as the “assistant” within
LLMs pose a major challenge for prompt engineering in individual simulations [[83](https://arxiv.org/html/2412.03563v1#bib.bib83)].
