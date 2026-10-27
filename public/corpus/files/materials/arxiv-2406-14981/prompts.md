---
id: arxiv-2406-14981-prompts
type: material
title: 'Опубликованные разделы о промптах: Human-AI collectives produce the most accurate differential diagnoses'
source_id: arxiv-2406-14981
source_url: https://arxiv.org/html/2406.14981v1
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: 14015c493cf35143484ca8581e3298d30e77848fab90f1b815836d4daf77dace
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

#### 9.2 LLMs: Prompt engineering and post-processing of responses

Prompt engineering can markedly affect the quality and format of LLM responses. There is no established framework for prompt engineering, and which wording produces the desired response typically depends on the LLM used.
Some studies have found that shorter prompts work better [Zhang et al. (2022)](https://arxiv.org/html/2406.14981v1#bib.bib73); others that complex prompts yield better responses [Fu et al. (2022)](https://arxiv.org/html/2406.14981v1#bib.bib74). In practice, prompts are generally engineered by trial and error [Fu et al. (2022)](https://arxiv.org/html/2406.14981v1#bib.bib74).

We took a systematic, semi-exhaustive approach, building up prompts in a modular fashion by concatenating several text blocks (Extended Data Fig. [S1](https://arxiv.org/html/2406.14981v1#S15.F1 "Figure S1 ‣ 15 Extended data figures and tables ‣ 9.4 Weighted aggregation of LLMs and/or human inputs ‣ 9 Methods ‣ Human-AI collectives produce the most accurate differential diagnoses")). The most basic block feeds the case vignette to the LLM verbatim. The case vignette describes the patient’s symptoms, test results, and medical record. The LLM is then asked to provide the five most probable diagnoses ordered by their likelihood of being correct (i.e., a differential diagnosis). We included several additional text blocks in the prompt and tested whether these additions increased diagnostic accuracy. The prompt that performed best in a training fold of cases was then used for the analysis in the remaining folds.
Specifically, the additional text blocks assign
the LLM the role of a medical expert (impersonation [Salewski et al. (2023)](https://arxiv.org/html/2406.14981v1#bib.bib75)), advise it to check that the proposed diagnoses are consistent with the case description (self-consistency), advise the LLM to report diagnoses in SNOMED CT terminology (answer format SCT) or in common shorthand (answer format common), or offer five examples of case vignettes with their correct diagnoses (a technique known as few-shot prompting; [Brown et al. (2020)](https://arxiv.org/html/2406.14981v1#bib.bib76)). In selecting the few-shot examples, we sought to ensure variety in patients’ age (5 months to 89 years) and gender (3 female, 2 male) and the medical specialty.
The resulting LLM responses constitute the basis of the results reported here.
For details of the exact wording of prompts and results of the validation process, see Extended Data Fig. [S1](https://arxiv.org/html/2406.14981v1#S15.F1 "Figure S1 ‣ 15 Extended data figures and tables ‣ 9.4 Weighted aggregation of LLMs and/or human inputs ‣ 9 Methods ‣ Human-AI collectives produce the most accurate differential diagnoses") and SI.

Our general validation approach is as follows: We used five-fold cross-validation on the whole set of cases, using one fold of cases to select the best prompt and calculate the weights for humans and LLMs (see “[9.4 Weighted aggregation of LLMs and/or human inputs](https://arxiv.org/html/2406.14981v1#S9.SS4 "In 9 Methods ‣ Human-AI collectives produce the most accurate differential diagnoses")”). The other four folds were used for assessing out-of-sample performance. We report results averaged across the five cross-validation outcomes.

The raw LLM responses required some additional post-processing (which was not needed for the human responses). Even when explicitly instructed to provide answers in a specific format, some LLMs did not always comply and occasionally returned verbose responses. However, these responses follow typical patterns that are easy to recognize. Some LLMs, for example, start the response with an introductory sentence before parsing the differential diagnosis in the requested format. We therefore removed the response until the first line break if the response started with “Sure,…,” “Here is the…,” “Here are…,” “### Response:…,” “The probable…,” “The differential…,” “The most probable…,” or “Based on…”. Furthermore, we removed various forms of list numbering.

#### 16.2 Verbatim text of LLM prompts

Below we list the text of the building blocks used to construct prompts for eliciting differential diagnoses. For all LLMs, we tested all feasible combinations of these building blocks. Diagnostic accuracies for each LLM and each prompt combination on the whole dataset of 2133 cases are presented in Extended Data Table [S2](https://arxiv.org/html/2406.14981v1#S16.T2 "Table S2 ‣ 16 Supplementary information ‣ 9.4 Weighted aggregation of LLMs and/or human inputs ‣ 9 Methods ‣ Human-AI collectives produce the most accurate differential diagnoses").

Base task:  Provide only the most probable differential diagnosis, no explanation, no recapitulation of the case information or task. Give a maximum of 5 answers, sorted by probability of being the correct diagnosis, most probable first, remove list numbering, and respond with each answer on a new line. Be as concise as possible, no need to be polite.

Impersonation: You are a medical expert diagnosing a patient.

Response format: common shorthand: In your answer use common shorthand non-abbreviated diagnoses.

Response format: SCT: In your answer provide only the appropriate SNOMED CT fully specified name, no id.

Self-consistency: Check that each differential diagnosis in your answer is consistent with each finding in the case description.

Few-shot prompt: Here are some examples of cases and their correct answers:
  
Case description: {case vignette}
  
Answer: {example solution} (5x)

The prompt used to have Anthropic Claude 3 Opus  assign a medical specialty to a case vignette was as follows:
  
In the list of medical specialties within the following <SP>\<SP>tags <SP>{specialties\_one\_line}<\SP>, each specialty is separated by a comma. You are given the following case in the <case>\<case>tags: <case>{case\_text}<\case>. Follow the steps provided: 1. Determine the top 3 choices for which specialties best fit the case. 2. Give your answer in an ordered numbered list starting with the most confident answer first. Only answer with the list. Do not provide any additional explanation.
