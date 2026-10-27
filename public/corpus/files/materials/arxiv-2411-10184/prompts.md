---
id: arxiv-2411-10184-prompts
type: material
title: 'Опубликованные разделы о промптах: Agentic LLMs in the Supply Chain: Towards Autonomous Multi-Agent Consensus-Seeking'
source_id: arxiv-2411-10184
source_url: https://arxiv.org/html/2411.10184v1
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: 136d66368128518e4880df717bded9c9b54a4084d29753f4a25901b39736f949
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

### 4.3 Prompt Engineering for different Consensus-Seeking Frameworks and different Metrics

In this section we discuss the properties of the prompts that we used for different models and metrics. We underline that we undertook manual prompt engineering for our experiments. As a result, the prompts are not fully optimized and largely the same between different foundation models. We will discuss in the Limitations section how model-specific optimization can be achieved in future research.

#### 4.3.1 Zero-shot Prompting

Our benchmarking environment utilizes pre-trained LLMs to tackle inventory management challenges. We use zero-shot learning to query our models, thereby requesting that the agents apply their pre-trained knowledge directly to our inventory management tasks, interpreting information that is supply chain-related based on their insights acquired on large knowledge corpora  ([Kojima et al. 2022](https://arxiv.org/html/2411.10184v1#bib.bib37)).

We exclude in-context learning from our prompts, because its performance is unstable, and subject to many factors  ([Dong et al. 2022](https://arxiv.org/html/2411.10184v1#bib.bib18)). Additionally, we have opted to keep prompts as similar as possible throughout our experiments, even as we compare the performance with different language models.

Moreover, limiting our prompts to zero-shot learning allows us to minimize the amount of changes we make between different metrics. In particular, the optimization functions change between metrics, as well as the formulation of the question, but the formulation of the observation and description of the sequential supply chain setting remain largely unchanged, as illustrated in Appendix [B](https://arxiv.org/html/2411.10184v1#A2 "Appendix B Detailed Prompt for LLM-powered Standalone Agents ‣ Agentic LLMs in the Supply Chain: Towards Autonomous Multi-Agent Consensus-Seeking").

#### 4.3.2 Prompt Engineering between different Supply Chain Metrics

Moving from one metric to the other in our implementation only requires adapting the input prompts that get passed into the consensus-seeking frameworks, without changing the implementation of the frameworks themselves and how the messages are passed between agents, showcasing that our implementation is problem-agnostic. In particular, the information sharing and negotiation frameworks apply to multi-agent interactions tackling cost minimization and bullwhip effect mitigation alike.

#### 4.3.3 Prompt Engineering to introduce Tool Usage

As can be observed in Appendix [B](https://arxiv.org/html/2411.10184v1#A2 "Appendix B Detailed Prompt for LLM-powered Standalone Agents ‣ Agentic LLMs in the Supply Chain: Towards Autonomous Multi-Agent Consensus-Seeking"), the prompts used in our inventory management setting comprise different parts, with details to describe all of the observations and supply chain metrics necessary for each agent to make a decision. As a result, when we want an agent to make a decision based on a tool output, we have to underline the importance of this tool in our prompt. This is achieved by simple means of directives such as inciting the LLM-powered agent through the prompt to give a lot of weight to the tool output in its final decision, as illustrated in Appendix [C](https://arxiv.org/html/2411.10184v1#A3 "Appendix C Introducing Tool Usage ‣ Agentic LLMs in the Supply Chain: Towards Autonomous Multi-Agent Consensus-Seeking"). The optimal prompts to achieved this results were determined experimentally, and we discuss them in the experimental setup.
