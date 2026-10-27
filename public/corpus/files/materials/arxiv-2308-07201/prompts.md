---
id: arxiv-2308-07201-prompts
type: material
title: 'Опубликованные разделы о промптах: ChatEval: Towards Better LLM-based Evaluators through Multi-Agent Debate'
source_id: arxiv-2308-07201
source_url: https://arxiv.org/html/2308.07201v1
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: 4222ddacba3151a6a0b4872011a49f67b1b7e19ff893230ed7f966b4aed82541
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

### 4.1 The importance of diverse role prompts

Previously in Table [1](https://arxiv.org/html/2308.07201v1#S3.T1 "Table 1 ‣ 3.5 Results for Dialogue Response Generation ‣ 3 Experiments ‣ ChatEval: Towards better LLM-based evaluators through multi-agent debate") and [2](https://arxiv.org/html/2308.07201v1#S3.T2 "Table 2 ‣ 3.5 Results for Dialogue Response Generation ‣ 3 Experiments ‣ ChatEval: Towards better LLM-based evaluators through multi-agent debate"), we demonstrate that ChatEval equipped with diverse role configurations can significantly improve the performance of evaluation. We further consider whether it is necessary to design diverse role prompts for the evaluation system. To answer so, we carry out the experiments by replacing all the role prompt with ”You are now an Annotator, one of the referees in the text evaluation task.” and keeping other prompt unchanged. We experiment with the one-by-one communication strategy and 2 agents with 2 discussion turns. The results in Table [3](https://arxiv.org/html/2308.07201v1#S4.T3 "Table 3 ‣ 4.4 qualitative analysis ‣ 4 Analysis ‣ ChatEval: Towards better LLM-based evaluators through multi-agent debate") illustrate that ChatEval with the same role prompt design underperforms that with diverse role prompt design and cannot effectively enhance the performance compared with single-agent setting, highlighting the cruciality of diverse role prompt design in the multi-agent debate framework.

## Appendix A prompt template and diverse role prompt

The overall prompt template is shown in Table [6](https://arxiv.org/html/2308.07201v1#A1.T6 "Table 6 ‣ Appendix A prompt template and diverse role prompt ‣ ChatEval: Towards better LLM-based evaluators through multi-agent debate"), we draw inspiration from [Wu et al. (2023)](https://arxiv.org/html/2308.07201v1#bib.bib42) and design several different role descriptions as follows.

General Public
You are now General Public, one of the referees in this task. You are interested in the story and looking for updates on the investigation. Please think critically by yourself and note that it’s your responsibility to choose one of which is the better first.

Critic
You are now Critic, one of the referees in this task. You will check fluent writing, clear sentences, and good wording in summary writing. Your job is to question others judgment to make sure their judgment is well-considered and offer an alternative solution if two responses are at the same level.

News Author
You are News Author, one of the referees in this task. You will focus on the consistency with the original article. Please help other people to determine which response is the better one.

Psychologist
You are Psychologist, one of the referees in this task. You will study human behavior and mental processes in order to understand and explain human behavior. Please help other people to determine which response is the better one.

Scientist
You are Scientist, one of the referees in this task. You are a professional engaged in systematic study who possesses a strong background in the scientific method, critical thinking, and problem-solving abilities. Please help other people to determine which response is the better one.

[Question]
{source\_text}
[The Start of Assistant 1’s Answer]
{compared\_text\_one}
[The End of Assistant 1’s Answer]
[The Start of Assistant 2’s Answer]
{compared\_text\_two}
[The End of Assistant 2’s Answer]
[System]
We would like to request your feedback on the performance of two AI assistants in response to the user question displayed above.
Please consider the helpfulness, relevance, accuracy, and level of detail of their responses.
Each assistant receives an overall score on a scale of 1 to 10, where a higher score indicates better overall performance.
There are a few other referees assigned the same task, it’s your responsibility to discuss with them and think critically before you make your final judgment.
Here is your discussion history:
{chat\_history}
{role\_description}
Now it’s your time to talk, please make your talk short and clear,
{agent\_name} !


Table 6: The prompt template for FairEval Dataset. We replace the colored slot with real text before querying the LLMs. Note that we use the same template when conducting single-agent-based experiments and ignore the chat history and role description slot.
