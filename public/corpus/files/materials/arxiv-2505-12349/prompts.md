---
id: arxiv-2505-12349-prompts
type: material
title: 'Опубликованные разделы о промптах: Wisdom from Diversity: Bias Mitigation Through Hybrid Human-LLM Crowds'
source_id: arxiv-2505-12349
source_url: https://arxiv.org/html/2505.12349v1
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: 083ec213a8a5220bae60f73df5ae88cc4ed9a7b74a89cbfe3a68a86eff365e43
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

### S1.1 Prompt

[Figure S3](https://arxiv.org/html/2505.12349v1#A1.F3 "Figure S3 ‣ S1.1 Prompt ‣ Appendix S1 Supplementary Information ‣ Wisdom from Diversity: Bias Mitigation Through Hybrid Human-LLM Crowds") shows the prompt we presented to the LLMs:

```
How likely is it that this headline is {target_str}.

 Choose one of the following options and return only the number of that option:
1. very unlikely, 2. unlikely, 3. undecided, 4. likely, 5. very likely.

<examples>
"{example_headline1}"
Response: {expected_response1}
"{example_headline2}"
Response: {expected_response2}
"{example_headline3}"
Response: {expected_response3}
"{example_headline4}"
Response: {expected_response4}
</examples>

"{response_headline}"
Response:
```

Figure S3: The prompt presented to the LLMs.

Where, like in the prompt presented to human participants in [[Abels et al., 2024](https://arxiv.org/html/2505.12349v1#bib.bib2)], `target_str` is “true” unless specified otherwise. For [Figure 1](https://arxiv.org/html/2505.12349v1#S4.F1 "Figure 1 ‣ LLMs are less susceptible to framing effects ‣ 4.1 LLM Performance ‣ 4 Results ‣ Wisdom from Diversity: Bias Mitigation Through Hybrid Human-LLM Crowds") we explore different values for `target_str`.

As multi-shot learning [[Brown et al., 2020](https://arxiv.org/html/2505.12349v1#bib.bib15)] has been shown to improve accuracy and compliance with instructions (here, the expected answer format), we include for each headline 4 example headline-response sequences. Example headlines are sampled randomly from the same category (i.e., age headlines will be presented with examples on age headlines) and are balanced across the different statuses (genuine or altered) and sentiments (positive or negative). Since the dataset contains both genuine and altered variants of the same headline, we ensured that the examples never contained the alternative version of the queried headline.
To reduce variability across models, we fixed the temperature to $0$, such that the most likely token was returned.
The responses are then parsed to extract the label ([1-5]), which, as in [[Abels et al., 2024](https://arxiv.org/html/2505.12349v1#bib.bib2)], are then mapped to numeric values $\{0,0.25,0.5,0.75,1\}$.

Responses which failed to answer the query, such as those containing system-level disclaimers (“As an AI model, I…”) were re-queried for consistency.
