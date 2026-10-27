---
id: arxiv-2404-04286-prompts
type: material
title: 'Опубликованные разделы о промптах: Bias Amplification in Language Model Evolution: An Iterated Learning
  Perspective'
source_id: arxiv-2404-04286
source_url: https://arxiv.org/html/2404.04286v2
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: b403c927d77a2b45a699044cadd043683dee551646e05850b151471c074cade7
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

### D.3 The Prompt Design for ACRE Task ([Figures 14](https://arxiv.org/html/2404.04286v2#A4.F14 "In D.3 The Prompt Design for ACRE Task (, and ) ‣ Appendix D More on GPT-based ACRE Experiments ‣ Bias Amplification in Language Model Evolution:An Iterated Learning Perspective"), [15](https://arxiv.org/html/2404.04286v2#A4.F15 "Figure 15 ‣ D.3 The Prompt Design for ACRE Task (, and ) ‣ Appendix D More on GPT-based ACRE Experiments ‣ Bias Amplification in Language Model Evolution:An Iterated Learning Perspective") and [16](https://arxiv.org/html/2404.04286v2#A4.F16 "Figure 16 ‣ D.3 The Prompt Design for ACRE Task (, and ) ‣ Appendix D More on GPT-based ACRE Experiments ‣ Bias Amplification in Language Model Evolution:An Iterated Learning Perspective"))

Please also refer to the three figures and the log.txt file in our code base.

![Refer to caption](https://arxiv.org/html/2404.04286v2/Prompt_design_imitation_only.png)

Figure 14: Prompt design and an example dialogue for the imitation-only iterated learning on the ACRE dataset.
The shaded region and arrows represent that we copy specific text to form the message.
The messages starting with the role of system and user are sent to GPT,
while those starting with assistant are the feedback from GPT.
For this multi-round chat,
we will feed all historical information to API,
see our code for more details.


![Refer to caption](https://arxiv.org/html/2404.04286v2/Prompt_design_self_refine.png)

Figure 15: Prompt design for iterated learning with self-refine ([Madaan et al., 2023](https://arxiv.org/html/2404.04286v2#bib.bibx35)) as the interaction phase.
The text in gray is the same as the default imitation-only setting.
Note that the format of the examples might be changed (like the examples in Gen-1: assistant),
which doesn’t influence the experimental results.


![Refer to caption](https://arxiv.org/html/2404.04286v2/Prompt_design_hyp_search.png)

Figure 16: Prompt design for iterated learning with hypothesis search ([Qiu et al., 2024](https://arxiv.org/html/2404.04286v2#bib.bibx48)) as the interaction phase.
Compared with self-refine, it introduces an external interpreter to refine $h$ proposed by the model,
where $\mathcal{H}\_{\text{eff}}$ is the ground-truth one.
