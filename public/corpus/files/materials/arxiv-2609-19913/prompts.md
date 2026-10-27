---
id: arxiv-2609-19913-prompts
type: material
title: 'Опубликованные разделы о промптах: Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social
  Networks'
source_id: arxiv-2609-19913
source_url: https://arxiv.org/html/2609.19913v1
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: ebe061594a9057988def7984867e8fa295527ac188cd0c29315a892d7b3e2804
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

#### IV-C2 Prompt Structure

$F\_{\text{LLM}}$ conditions the model on the agent’s full internal state and social context through a structured prompt (Fig. [2](https://arxiv.org/html/2609.19913v1#S4.F2 "Fig. 2 ‣ IV-D Simulation Procedure ‣ IV Proposed Digital Twin Construction ‣ Digital Twins for Opinion Dynamics: A Generative LLM Framework for Social Networks")). The ordering is deliberate. Agent identity and persona appear first, anchoring the model’s behavioral profile before any external signal is introduced. Structural and behavioral features follow, establishing how active and influential the agent is within the network. The current opinion state appears immediately before the memory block, so the model processes its present position and historical trajectory together. Neighbor exposure appears last, reflecting the natural cognitive order: an agent consolidates its own prior beliefs before processing incoming social signals. The prompt instructs the model to return an updated opinion consistent with the agent’s persona, prior beliefs, and observed interactions. A heuristic extraction rule parses the response that retrieves the first numeric value in the output and projects it onto $[-1,1]$. This is simple and consistent with all agents
