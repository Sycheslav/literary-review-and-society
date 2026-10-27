---
id: web-cambridge-org-47d8659e3d-prompts
type: material
title: 'Опубликованные разделы о промптах: Synthetic Replacements for Human Survey Data? The Perils of Large Language
  Models'
source_id: web-cambridge-org-47d8659e3d
source_url: https://www.cambridge.org/core/journals/political-analysis/article/synthetic-replacements-for-human-survey-data-the-perils-of-large-language-models/B92267DC26195C7F36E63EA04A47D2FE
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: 86de957b7cf62c0fed1024236ddba186f8c928b0ec8da6d54c8a75a10a5222ea
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

### 3.1 Effect of Different Prompts

One unavoidable issue with using LLMs is that different prompts may affect the accuracy of responses. To investigate, we recollect the synthetic data with two modifications to the description of the persona. The first prompt only describes the nonpolitical profile of the synthetic respondent, including their age, gender, race, marital status, education, and income. The second prompt only includes a description of the synthetic respondent’s political characteristics, including their ideology, partisanship, registration status, and interest in news and politics. By way of comparison, the full prompt used in earlier results includes all attributes in a single description. The raw code for these prompts is given below, where the placeholder text is indicated with a capitalized characteristic in square brackets, which would be replaced with a description for the relevant ANES respondent as described above:[Footnote 23](https://www.cambridge.org/core/journals/political-analysis/article/synthetic-replacements-for-human-survey-data-the-perils-of-large-language-models/B92267DC26195C7F36E63EA04A47D2FE#fn23)

- • Demographics only: “It is [YEAR]. You are a [AGE] year-old [MARST] [RACETH] [GENDER] with [EDUCATION] making [INCOME] per year, living in the United States.”
- • Politics only: “It is [YEAR]. You are [IDEO], [REGIS] [PID] who [INTEREST] pays attention to what’s going on in government and politics, living in the United States.”
- • Combined: “It is [YEAR]. You are a [AGE] year-old, [MARST], [RACETH] [GENDER] with [EDUCATION] making [INCOME] per year, living in the United States. You are [IDEO], [REGIS] [PID] who [INTEREST] pays attention to what’s going on in government and politics.”

We investigate the sensitivity by predicting the mean absolute error (the absolute difference between the ANES feeling thermometer and the LLM’s estimate; MAE) as a function of the prompt type interacted with the target group and the party ID, controlling for all other covariates. As illustrated in Figure [4](https://www.cambridge.org/core/journals/political-analysis/article/synthetic-replacements-for-human-survey-data-the-perils-of-large-language-models/B92267DC26195C7F36E63EA04A47D2FE#fig4), the mean absolute error is basically identical between the full prompt and politics-only prompt. However, failing to include information on the respondent’s politics dramatically inflates the error for certain groups, notably those groups which are more politically salient (the parties, ideological groups, gays and lesbians, and Muslims). Political descriptions do not dramatically change the LLM’s errors when it comes to predicting the feeling thermometers toward racial or religious groups, except for Muslims.

Figure 4

Mean absolute error (MAE; *x*-axes) associated with different target groups (*y*-axes) by partisanship (columns) for different prompts to generate the synthetic data. MAE is calculated as the absolute difference between the human respondent’s feeling thermometer score for a given target group in the ANES data, relative to the average of 30 synthetic respondents drawn who match the human respondent in terms of their demographics only (light gray circles), political attributes only (dark gray triangles), or both demographic and political attributes combined (black squares).

![](data:image/gif;base64,R0lGODlhAQABAIAAAMLCwgAAACH5BAAAAAAALAAAAAABAAEAAAICRAEAOw==)

On one hand, the differences we find are reassuring—the pattern of responses improves when we include information on self-identified partisanship that we know is related to opinions. The fact that accuracy improves when we include information that is known to be associated with public opinion suggests that the responses vary in broadly consistent ways.[Footnote 24](https://www.cambridge.org/core/journals/political-analysis/article/synthetic-replacements-for-human-survey-data-the-perils-of-large-language-models/B92267DC26195C7F36E63EA04A47D2FE#fn24) But even with the partisan prompts, considerable errors remain, and the variation in the changes we observe across various prompts highlights the importance of the prompt being used and the unknown associations that the LLM leverages to generate those responses.[Footnote 25](https://www.cambridge.org/core/journals/political-analysis/article/synthetic-replacements-for-human-survey-data-the-perils-of-large-language-models/B92267DC26195C7F36E63EA04A47D2FE#fn25)

These findings on prompt sensitivity raise important questions for interpreting and extrapolating prompting practices. The variation in accuracy we find when applying similar prompts to different questions and non-U.S. contexts in SI Section 13 reveals how the same prompt can yield different levels of accuracy in ways that raise questions about the ability to develop generalizable prompting practices.[Footnote 26](https://www.cambridge.org/core/journals/political-analysis/article/synthetic-replacements-for-human-survey-data-the-perils-of-large-language-models/B92267DC26195C7F36E63EA04A47D2FE#fn26)
