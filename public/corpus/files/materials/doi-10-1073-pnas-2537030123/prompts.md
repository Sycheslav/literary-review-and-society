---
id: doi-10-1073-pnas-2537030123-prompts
type: material
title: 'Опубликованные разделы о промптах: AI agents are sensitive to nudges'
source_id: doi-10-1073-pnas-2537030123
source_url: https://www.ebi.ac.uk/europepmc/webservices/rest/PMC13291645/fullTextXML
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: 963fe256591c85a9106d7f2a1263024744d5d4d8fbca1f1082cc3d6f46837c2e
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

### Models and Prompting Conditions.

We evaluated fourteen state-of-the-art LLMs with function-calling capabilities: GPT-3.5 Turbo, GPT-4o Mini, GPT-4o, o3 Mini, o3, GPT-5 Mini, GPT-5 (OpenAI); Claude 3 Haiku, Claude 3.5 Sonnet, and Claude 4.5 Sonnet (Anthropic); and Gemini 1.5 Pro, Gemini 1.5 Flash, Gemini 2.5 Pro, and Gemini 2.5 Flash (Google). All models were run with a temperature of 0.2 if available, or the default behavior otherwise. To examine robustness, we tested three prompting conditions: i) Base, with only task instructions; ii) Chain-of-thought (CoT), with zero-shot reasoning prompts ([43](https://pmc.ncbi.nlm.nih.gov/articles/PMC13291645/#r43), [44](https://pmc.ncbi.nlm.nih.gov/articles/PMC13291645/#r44)); and iii) Few-shot, with demonstrations drawn from human participants, balanced across control and nudge conditions. In total, experiments consumed roughly two billion tokens across models (inputs and outputs).
