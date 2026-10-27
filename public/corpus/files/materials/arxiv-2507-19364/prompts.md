---
id: arxiv-2507-19364-prompts
type: material
title: 'Опубликованные разделы о промптах: From the Fluency Fallacy to the Micro-to-Macro Validity Gap: Opportunities
  and Pitfalls of LLMs in Social Simulation'
source_id: arxiv-2507-19364
source_url: https://arxiv.org/html/2507.19364v4
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: 5ffea976869b6b35bda971322a94564b66651130c76e5bc311508e1620540ffc
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

#### 3.2.3 Agent Persona: Demographic Prompting and behavioral Diversity

behavioral diversity is commonly introduced through synthetic-population generation methods and agent-specific prompts. Agents may be initialized with demographic attributes, socioeconomic characteristics, beliefs, occupations, cultural backgrounds, or personality descriptors sampled from survey distributions or human belief networks ([Chapuis et al. 2022](https://arxiv.org/html/2507.19364v4#bib.bib7); [Chuang et al. 2024b](https://arxiv.org/html/2507.19364v4#bib.bib18)). Role-specific memory structures and specialized prompt templates may further differentiate communication styles, goals, and decision heuristics.

These techniques increase descriptive variation in agent inputs, but do not by themselves ensure sustained behavioral heterogeneity. Empirical evaluations suggest that models may revert toward generic or socially normative response patterns despite distinct persona prompts ([La Cava and Tagarelli 2025](https://arxiv.org/html/2507.19364v4#bib.bib12)). Conversely, stronger attempts to force distinctive roles can lead to exaggerated, stereotypical, or toxic caricatures rather than calibrated behavioral variation ([Nudo et al. 2026](https://arxiv.org/html/2507.19364v4#bib.bib40)). The challenge is therefore not only to initialize diverse profiles, but also to maintain and validate theoretically meaningful behavioral differences throughout simulation runs.
