---
id: arxiv-2509-05396-prompts
type: material
title: 'Опубликованные разделы о промптах: Talk Isn''t Always Cheap: Understanding Failure Modes in Multi-Agent
  Debate'
source_id: arxiv-2509-05396
source_url: https://arxiv.org/html/2509.05396v2
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: c53b7884ef49b8c6a170d254912155e40b73d76a1c9d3bcac5a8637073a7978a
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

### 4.3 Prompts

We provide prompts on an example question for each task below:

- •

  CommonSenseQA: Can you answer the following question as accurately as possible? If a product doesn’t last, what does it have a reputation of doing?: A) disintegrating, B) wearing out, C) dissolving, D) falling apart, E) dissipating Explain your answer by providing a bullet point summary of your reasoning, putting the answer in the form (X) at the end of your response.
- •

  MMLU: Can you answer the following question as accurately as possible? What is the value of p in 24 = 2p?: A) p = 4, B) p = 8, C) p = 12, D) p = 24 Explain your answer by providing a bullet point summary of your reasoning, putting the answer in the form (X) at the end of your response.
- •

  GSM8K: Can you solve the following math problem? Mark is trying to choose between two venues for a surprise party for his wife. The first venue charges a flat fee of $200, regardless of how many guests attend; the second charges $25 per person who attends. However, the first venue does not include food, which Mark estimates will cost $5 for each person who attends. At the second venue, food for each guest is already included in the price. How many guests are necessary for the two venues to be equal in cost? Provide a bullet point summary of your reasoning. Your final answer should be a single numerical number, in the form a​n​s​w​e​r, at the end of your response.

For all models and tasks, we provide the following system prompt, $\mathcal{P}\_{\text{system}}$:

System prompt, $\mathcal{P}\_{\text{system}}$

You are a helpful assistant that can answer questions and provide helpful information.

For multi-agent debate, we additionally use the following prompt as $\mathcal{P}\_{\text{debate}}$ for each round of debate, adjusted to the answer format of each task (following [Du et al. (2023)](https://arxiv.org/html/2509.05396v2#bib.bib8)):

Debate prompt, $\mathcal{P}\_{\text{debate}}$

These are the solutions to the problem from other agents: {AGENT\_RESPONSES} Using the reasoning from other agents as additional advice, can you give an updated answer? Explain your reasoning. Examine your solution and that of other agents. Put your answer in the form (X) at the end of your response.

#### Correctness payoff prompt.

Political scientists have found that partisan bias effects on question-answering accuracy ([Bartels, 2002](https://arxiv.org/html/2509.05396v2#bib.bib3)) are significantly reduced when respondents are offered a monetary bonus for correct answers ([Bullock et al., 2015](https://arxiv.org/html/2509.05396v2#bib.bib5); [Prior et al., 2015](https://arxiv.org/html/2509.05396v2#bib.bib27)). Inspired by these results, we design a new experiment intended to encourage LLM agents to prefer correctness over agreement with other agents, countering the sycophancy bias. In particular, we define a payoff function scoring the models based on the correctness of their answers and explicitly instruct them to maximize this payoff. We modify our prompts as follows:

System prompt, $\mathcal{P}\_{\text{system}}$

You are a helpful assistant that can answer questions and complete tasks. You will receive a fixed payoff $p$ for each question given your response $X$ and the true answer $Y$, $p=I[X==Y]$, where $I[condition]$ represents an indicator function which equals 1 if the condition is satisfied (i.e. your answer matches the true answer) and 0 otherwise. Your goal is to maximize your total payoff.

System prompt, $\mathcal{P}\_{\text{debate}}$

These are the solutions to the problem from other agents: {AGENT\_RESPONSES} Analyze your solution and that of other agents, provide an updated answer to maximize your payoff $p=I[X==Y]$, and explain your reasoning. Put your answer in the form (X) at the end of your response.

We then investigate whether LLM agents are less likely to flip from correct to incorrect answers when they are prompted to maximize rewards for correct answers.

Results. We present results in Fig. [5](https://arxiv.org/html/2509.05396v2#S6.F5 "Figure 5 ‣ 6.3 Are agents sycophantic? ‣ 6 Failure Modes of Debate ‣ Talk Isn’t Always Cheap: Understanding Failure Modes in Multi-Agent Debate"). We find that adding a payoff for correctness in the model prompt does not significantly reduce the likelihood that LLM agents flip their answers from correct to incorrect, regardless of the number of other agents that agree with them. In fact, we find that in many cases, the number of correct $\rightarrow$ incorrect transitions actually increases when using the correctness-payoff prompt – a counter-intuitive result that seems to suggest that asking models to prioritize correctness may not help resolve the issues observed in multi-agent debate.
