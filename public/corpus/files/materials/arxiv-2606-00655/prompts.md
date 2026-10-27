---
id: arxiv-2606-00655-prompts
type: material
title: 'Опубликованные разделы о промптах: Scaling Behavior of Single LLM-Driven Multi-Agent Systems'
source_id: arxiv-2606-00655
source_url: https://arxiv.org/html/2606.00655v1
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: 1f5bbae5c894a4cb5a806b2e7f5bf4f32eabb8cb8bd7d30484b07db1e9f71f92
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

### E.1 CoT Prompts

This section details the three Chain-of-Thought (CoT) prompt templates used in our experiments. The placeholders (e.g., {problem.question}) are replaced with concrete content during execution.

1. Simple CoT

This template guides the model to produce step-by-step reasoning followed by a structured final answer, suitable for objective questions (e.g., multiple-choice, short-answer).

Prompt

System Instruction:
  
You are {self.name}. Please solve the following problem in a reasoning manner.
  
{message.content}
Output Format Requirement:
  
Please structure your response as (without ’[]’ in your response):
