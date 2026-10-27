---
id: arxiv-2508-17536-prompts
type: material
title: 'Опубликованные разделы о промптах: Debate or Vote: Which Yields Better Decisions in Multi-Agent Large Language
  Models?'
source_id: arxiv-2508-17536
source_url: https://arxiv.org/html/2508.17536v2
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: 5db2f5ab47d2f0b0c4cf45f1ceaf7c104fa42123db7df931ecf6d8735265a9e4
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

### Appendix B Prompt Templates

Here, we provide all the prompt templates used for our experiments.

#### B.1 MAD Templates

The following is the prompt template for multi-agent debate.
For brevity, assume 3 agents are in the debate.

These are the recent opinions from other agents:

One of the agents’ response:

<agent 2’s response from the previous round>

One of the agents’ response:

<agent 3’s response from the previous round>

This was your most recent opinion:

<agent 1’s response from the previous round>

Use these opinions carefully as additional advice to revise your recent opinion to give your final answer to the question:

<question>

Make sure to state your final answer in curly brackets at the very end of your response, just like: "{final answer: 12.34}".

For GSM8K, we give a slightly different demonstrative example: “{final answer: 123}", and for the other MCQ datasets, we give: “{final answer: (A)}".
For the CNN/Daily Mail dataset, we instruct the model to ‘Make sure to provide your summary after stating "# Summary #".’

#### B.2 Task Templates

For completeness, we provide the exact input format used for each dataset.
These templates correspond to the <question> field in the MAD prompt structure.
Datasets not listed below follow the original question format as provided in their respective sources without modification.

Arithmetics

What is the result of $a$+$b$\*$c$+$d$-$e$÷$f$?

MMLU Professional Medicine & Formal Logic

<question>

(A) <option 1>

(B) <option 2>

(C) <option 3>

(D) <option 4>

HellaSwag

Can you choose the option that best follows:

"<context>"?

(A) <option 1>

(B) <option 2>

(C) <option 3>

(D) <option 4>

CommonsenseQA

<question>

(A) <option 1>

(B) <option 2>

(C) <option 3>

(D) <option 4>

(E) <option 5>

HH-RLHF

Which of the following is relatively more helpful and/or harmless data?

(A) <chosen> or <rejected>

(B) <rejected> or <chosen>

CNN/DailyMails

Summarize the following in three sentences:

<article>

#### B.3 Persona Prompts

To assign heterogeneous personas to agents, we use a system prompt that specifies the role each agent should assume. We adopt the persona descriptions from [[9](https://arxiv.org/html/2508.17536v2#bib.bib9)], which are provided below:

- •

  Assistant: You are a super-intelligent AI assistant capable of performing tasks more effectively than humans.
- •

  Mathematician: You are a mathematician. You are good at math games, arithmetic calculation, and long-term planning.
- •

  Economist: You are an economist. You are good at economics, finance, and business. You have experience on understanding charts while interpreting the macroeconomic environment prevailing across world economies.
- •

  Programmer: You are a programmer. You are good at computer science, engineering, and physics. You have experience in designing and developing computer software and hardware.
- •

  Lawyer: You are a lawyer. You are good at law, politics, and history.
- •

  Psychologist: You are a psychologist. You are good at psychology, sociology, and philosophy. You give people scientific suggestions that will make them feel better.
- •

  Doctor: You are a doctor and come up with creative treatments for illnesses or diseases. You are able to recommend conventional medicines, herbal remedies and other natural alternatives. You also consider the patient’s age, lifestyle and medical history when providing your recommendations.
