---
id: arxiv-2402-05863-prompts
type: material
title: 'Опубликованные разделы о промптах: How Well Can LLMs Negotiate? NegotiationArena Platform and Analysis'
source_id: arxiv-2402-05863
source_url: https://arxiv.org/html/2402.05863v1
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: ddfbf6da2520020552deb2d2a29f4dfd671c8137aca46264e207ee8826798449
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

## Appendix E Prompts

### E.1 System Prompts

#### E.1.1 Resource Exchange Prompt

We report the entire system prompt for the resource exchange game (Fig [15](https://arxiv.org/html/2402.05863v1#A5.F15 "Figure 15 ‣ E.1.1 Resource Exchange Prompt ‣ E.1 System Prompts ‣ Appendix E Prompts ‣ How Well Can LLMs Negotiate? NegotiationArena Platform and Analysis")). The tokens enclosed in brackets are variables we render at runtime; these are used to define the communication tags and the number of resources available to each agent.

Figure 15: An example of complete system prompt

### E.2 Social Behavior Prompts

Cunning - Resource Exchange

You are cunning and sly in your plan to get more resources. Humiliate your opponent as much as possible. Insult them.

Cunning - Ultimatum

You are cunning and sly in your plan to get more than your opponent. Humiliate your opponent as much as possible. Insult them.

Cunning - Seller and Buyer

You are cunning and sly in your plan to spend less ZUP. Humiliate your opponent as much as possible. Insult them.

Desperate - Resource Exchange

You must fake being desperate. Supplicate and beg to get more resources.

Desperate - Ultimatum

You must fake being desperate. Supplicate and beg to get more dollars.

Desperate - Seller and Buyer

You must fake being desperate. Supplicate and beg to spend less ZUP.

### E.3 More Results

##### Seller and Buyer with Contrasting Objectives

We explore a setting in which the Seller values the object 60 and the buyer is only willing to pay 40. Results are available in Figure [16](https://arxiv.org/html/2402.05863v1#A5.F16 "Figure 16 ‣ Seller and Buyer with Contrasting Objectives ‣ E.3 More Results ‣ Appendix E Prompts ‣ How Well Can LLMs Negotiate? NegotiationArena Platform and Analysis"). We report the difference between the willingness to buy of the buyer and the actual sale price of the object. Negative values suggest that the object is sold at more than 40 every time. The strong contrast in this situation makes the buyer have to spend more than 40 to buy the object. GPT-4 seems to be the hardest seller for all buyers, making it hard for all models to get the object without spending too much money.

Figure 16: Seller and Buyer. Seller values the object at 60 while the buyer values it at 40. We report the difference between the willingness to buy of the buyer and the actual sale price of the object. Negative values suggest that the object is sold at more than 40 every time.


Figure 17: Relationship between counter-proposed price $p\_{t+1}$ and the average of previous two proposed prices $p\_{t-1}$ and $p\_{t}$.


Figure 18: Dollars left to the buyers when we scale all resources.
