---
id: arxiv-2301-07543-prompts
type: material
title: 'Опубликованные разделы о промптах: Large Language Models as Simulated Economic Agents: What Can We Learn
  from Homo Silicus?'
source_id: arxiv-2301-07543
source_url: https://arxiv.org/html/2301.07543v2
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: 8af3101b3436a0e61bdafe78bf9e0dc7daed4bae81e3765f5fe748a10802cc88
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

### 4.5 It is easy to “prompt hack” AI experiments

The technical requirements of AI simulations are minimal.
This low barrier to entry, however, comes with the risk of researchers iterating through many prompts until they get a desired response and report only favorable results.
This is conceptually similar to the problem of p-hacking in traditional experimental work.

There are two easily implementable solutions to this problem.
First is to require researchers to present their results under many different partially controlled permutations of the prompt as a robustness check.
For example, in the [Kahneman et al. (1986)](https://arxiv.org/html/2301.07543v2#bib.bib76) experiment, we repeated the experiment with different temperatures, translated the prompt into other languages and then back to English, and varied the context of the experiment.
These manipulations varied the data-generating process in a way that is partially but not entirely within our control.
The second solution, which we have implemented in all experiments throughout this paper, is to make all simulation code public.
Then anyone can inspect the exact data-generation process underlying any analysis.
Indeed, this transparency and portability are major advantages of AI relative to human subjects.
Replicating experiments often only requires a few dollars and the click of a button.

Both solutions require little of the researcher beyond a willingness to share their work—a willingness they should have anyway.
Coding up alternative simulations is straightforward.
It requires a few minutes of additional prompting and some minor code changes.
Sharing results is also easy.
Frontier LLMs can clean up code syntax and provide comprehensive documentation for an entire codebase with a single prompt.
