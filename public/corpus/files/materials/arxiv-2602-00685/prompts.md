---
id: arxiv-2602-00685-prompts
type: material
title: 'Опубликованные разделы о промптах: HumanStudy-Bench: Towards AI Agent Design for Participant Simulation'
source_id: arxiv-2602-00685
source_url: https://arxiv.org/html/2602.00685v2
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: 4adb3003876c481568bfc535976015077646eb1277391e643eaf334fdcd7076e
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

#### D.3.1 System Prompt Template

A3 System Prompt Template

You are participating in a psychology experiment as a human participant.
YOUR IDENTITY:
  
- Age: {age} years old
  
- Gender: {gender}
  
- Education: {education}
Follow the experimenter’s instructions and answer each task in the requested format.
  
Be concise. Do not add extra explanations unless explicitly asked.

#### D.4.2 System Prompt Template

The generated background is incorporated into the following system prompt template:

A4 System Prompt Template

You are participating in a psychology experiment as a human participant.
YOUR BACKGROUND AND MEMORIES:
  
{generated\_background}
Based on your background and memories above, respond as this participant would in the experiment.
  
Follow the experimenter’s instructions and answer each task in the requested format.
  
Be concise. Do not add extra explanations unless explicitly asked.
  
Your responses should reflect your background, experiences, and characteristics as described above.

### F.7 Prompt Sensitivity Ablation

To verify that our metrics capture meaningful agent design differences rather than surface-level prompt variation, we conducted a prompt sensitivity ablation on the A3 (Demographic) specification. We created two paraphrased variants by rewriting all three components—role-playing framing, demographic formatting, and task instructions—while preserving informational content (Table [11](https://arxiv.org/html/2602.00685v2#A6.T11 "Table 11 ‣ F.7 Prompt Sensitivity Ablation ‣ Appendix F Complementary Experimental Results ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation")). We measured within-paraphrase PAS variation (max–min range across the three A3 variants) on Study 2 ($N=256$) and Study 8 ($N=468$), selected for their moderate sample sizes (Table [12](https://arxiv.org/html/2602.00685v2#A6.T12 "Table 12 ‣ F.7 Prompt Sensitivity Ablation ‣ Appendix F Complementary Experimental Results ‣ HumanStudy-Bench: Towards AI Agent Design for Participant Simulation")).

Table 11: Prompt paraphrase design. Three A3 variants with equivalent information but different surface forms.

|  | Role frame | Demographics | Task instructions |
| --- | --- | --- | --- |
| A3 | “You are participating…” | Bullet list | “Follow the experimenter’s…” |
| Para. A | “Imagine you are a person…” | Inline | “Respond to each task…” |
| Para. B | “You have been recruited…” | Indented block | “Answer every question…” |


Table 12: Prompt sensitivity results. PAS variation from paraphrasing is negligible ($\leq 8.8$ pp) compared to cross-agent variation ($>32$ pp).

| Model | Study | PAS variation (pp) |
| --- | --- | --- |
| Mistral Nemo | Study 2 ($N{=}256$) | 2.5 |
| Mistral Nemo | Study 8 ($N{=}468$) | 1.9 |
| DeepSeek V3.2 | Study 2 ($N{=}256$) | 8.8 |
| DeepSeek V3.2 | Study 8 ($N{=}468$) | 4.1 |

Across all four model–study combinations, PAS variation from paraphrasing is consistently small ($\leq 8.8$ percentage points), while cross-agent variation (A1–A4) exceeds 32 percentage points. This confirms that inference-level conclusions are robust to prompt surface form, and that the benchmark reliably distinguishes meaningful agent design differences from superficial wording changes.
