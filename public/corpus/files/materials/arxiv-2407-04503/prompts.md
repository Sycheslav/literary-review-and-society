---
id: arxiv-2407-04503-prompts
type: material
title: 'Опубликованные разделы о промптах: When LLMs Play the Telephone Game: Cultural Attractors as Conceptual
  Tools to Evaluate LLMs in Multi-turn Settings'
source_id: arxiv-2407-04503
source_url: https://arxiv.org/html/2407.04503v4
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: 79c9bb4ec77a26de762aa5a068ebabc0a3f0a688664214420633761af4fc9677
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

##### Prompts used

In our experiments, each task was induced by a specific instruction (prompt), which is given to each agent in the chain.
For the Rephrase task, the instruction is: “You will receive a text. Your task is to rephrase this text without modifying its meaning. Just output your new text, nothing else. Here is the text:”, for the Inspiration task, the instruction is: “You will receive a text. Your task is to create a new original text by taking inspiration from this text. Just output your new text, nothing else. Here is the text:”, and for the Continue task, the instruction is: “You will receive a text. Your task is to continue this text. Just output your new text, nothing else. Here is the text:”.

#### B.2.2 Different phrasing of the instructions prompts

To verify that the results presented in the main text hold when using different phrasings of the initial prompts, we ran additional experiments with Llama-3-8B using 5 different phrasings of instructions prompts for each of the three. Those exact prompts are as follows:

##### Rephrase

- •

  "You will be given a text. Your job is to reword this text without changing its meaning. Only provide your revised text, nothing else. Here is the text:"
- •

  "A text will be provided to you. Your task is to rephrase it, keeping its meaning intact. Only output the rephrased text, and nothing additional. Here is the text:"
- •

  "You’ll receive a text, and your job is to rephrase it without altering its meaning. Just output your new version, nothing more. Here is the text:"
- •

  "A text will be sent to you. Your role is to rephrase it while keeping the meaning the same. Only display your new text, with nothing extra. Here is the text:"
- •

  "You will be provided with a text. Your task is to reword it without changing the intended meaning. Output just your rephrased text, nothing else. Here is the text:"

##### Inspiration

- •

  "You’ll be given a text, and your task is to craft a new, original text inspired by it. Only provide your new version, with nothing additional. Here is the text:"
- •

  "A text will be provided to you. Your task is to create an original text based on this inspiration. Just output your new version, nothing extra. Here is the text:"
- •

  "You will receive a text. Your job is to generate an original text inspired by it. Only show your new version, without adding anything else. Here is the text:"
- •

  "You’ll receive a text, and your task is to create a new text inspired by it. Simply display your new version, with no additional output. Here is the text:"
- •

  "You will be sent a text. Your role is to produce an original text inspired by it. Only present your new text, nothing more. Here is the text:"

##### Continue

- •

  "You’ll be provided with a text. Your job is to extend this text. Only output your continuation, nothing additional. Here is the text:"
- •

  "A text will be given to you. Your task is to carry on from this text. Just display your new continuation, with nothing extra. Here is the text:"
- •

  "You’ll receive a text. Your role is to continue from where this text ends. Only present your extension, with no additional output. Here is the text:"
- •

  "A text will be sent to you, and your job is to complete it by continuing from its end. Only output your continuation, nothing more. Here is the text:"
- •

  "You will get a text. Your task is to extend it further. Just display your continuation, without adding anything else. Here is the text:"

This revealed that our results are robust to different paraphrasing of the same prompt: indeed, the interval of the standard deviations over the 5 paraphrased prompts always contains – or almost contains – the values estimated with the original prompt in the main experiment. (Figure [S4](https://arxiv.org/html/2407.04503v4#A2.F4 "Figure S4 ‣ Continue ‣ B.2.2 Different phrasing of the instructions prompts ‣ B.2 Robustness check and controls ‣ Appendix B Additional figures and analyses ‣ When LLMs Play the Telephone Game:Cultural Attractors as Conceptual Tools to Evaluate LLMs in Multi-turn Settings"))

Figure S4: Attractor strenghts and positions for different phrasings of the intruction prompts Attractor position (first row) and strength (second row) for four text properties (column) and three tasks (colors). The height of the bars represent the average position and strength of the attractors over the five different phrasings. Individual dots correspond to each different phrasing. The red crosses indicate the values estimated in the main experiment using a set of 20 initial texts (Section [4.3](https://arxiv.org/html/2407.04503v4#S4.SS3 "4.3 What influences the presence, strength, and position of attractors? ‣ 4 Results ‣ When LLMs Play the Telephone Game:Cultural Attractors as Conceptual Tools to Evaluate LLMs in Multi-turn Settings")). This reveals that our results are robust to increasing the sample size of the initial texts dataset.
