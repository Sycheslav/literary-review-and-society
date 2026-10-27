---
id: arxiv-2508-14918-prompts
type: material
title: 'Опубликованные разделы о промптах: Disentangling the Drivers of LLM Social Conformity: An Uncertainty-Moderated
  Dual-Process Mechanism'
source_id: arxiv-2508-14918
source_url: https://arxiv.org/html/2508.14918v1
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: a200a976083a8a179857eb6d29ed7729ba2bf2416b06aa7425a8667d64e34f67
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

### 6.1 Prompt Engineering

To ensure the rigor and consistency of our experiment, we implemented several prompt engineering strategies. First, we utilized the prompt templating, ensuring that the core instructional structure remained similar, with only the scenario-specific content varying. Second, before prompting for a final decision, we explicitly incorporated a Chain of Thought (CoT) instruction, requiring the agent to “first reason step-by-step, and then give your answer.” As established in prior research (e.g., [[19](https://arxiv.org/html/2508.14918v1#bib.bib19)]), this technique not only improves the reasoning performance of LLMs but also elicits a rationale for the decision, providing valuable qualitative data for understanding the underlying mechanisms at play. For all the task design and prompts, please refer to Supplementary Materials.

We systematically manipulated four primary independent variables. First, to examine whether social conformity in LLMs is driven by informational influence, we varied the number of information pieces provided. In each trial, the LLM received one piece of private information and between one to three pieces of public information (decisions made by either human or AI advisors). These combinations resulted in four different posterior probability levels across three tasks. For example, in the medical decision-making task, varying the pieces of information led to four distinct posterior probabilities: $0.50$, $0.67$, $0.80$, and $0.89$. This design allows us to assess whether LLMs increasingly align their decisions with the majority as the strength of evidence grows, which would indicate a tendency toward informational influence.

Second, we manipulated the information types by explicitly labeling the sources of information as either private signals, advice from humans, or advice from AIs in our prompts. This manipulation allows us to quantitatively examine whether LLMs assign different weights to each source. According to rational Bayesian principles, a decision-maker who integrates information optimally should assign weights equal to one, ignoring the information sources. A weight less than one indicates underweighting, while a weight greater than one suggests overweighting. If LLMs disproportionately overweight public information—whether from humans or AIs—it may reflect a tendency toward normative influence rather than purely informational influence.

Third, to examine information uncertainty as a moderator, we varied the degree of uncertainty in all information by adjusting the probabilistic accuracy ($q$) of both private and public signals. We implemented different levels of information uncertainty across the three tasks. Specifically, in the medical task (medium uncertainty), private signals (e.g., symptoms like vomiting, with a $66.7\%$ chance of correctly predicting appendicitis and $33.3\%$ chance of predicting sigmoid diverticulitis, or abdominal pain with the reverse probabilities) and each external expert’s prediction (in the absence of other information) had a $66.7\%$ accuracy rate ($q=0.667$). In the legal task (high uncertainty), private signals (e.g., lack of direct evidence, with a $55\%$ chance of correctly predicting acquittal and $45\%$ chance of conviction, or presence of circumstantial evidence with the reverse) and experts’ predictions had a $55\%$ accuracy rate ($q=0.55$). In the investment task (low uncertainty), private signals (e.g., disruptive potential, with a $70\%$ chance of correctly predicting venture capital investment and $30\%$ chance of conservative, or lack of management experience with the reverse) and experts’ predictions had a $70\%$ accuracy rate ($q=0.70$). This manipulation enables testing the moderating role of information uncertainty on the balance between informational and normative influences, with lower ($q$) values expected to amplify normative conformity by overweighting public information more than one.
