---
id: arxiv-2608-04507-prompts
type: material
title: 'Опубликованные разделы о промптах: Emergence of Reputation-Based Cooperation in LLM Agents'
source_id: arxiv-2608-04507
source_url: https://arxiv.org/html/2608.04507v1
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: 7d4f12cc274c07001d2846e74556947365977ef1ad87c95278f801e26bc3e05f
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

## Appendix E Prompts

We provide the three core prompts used in our experiments. Variables in curly braces ({...}) are filled at runtime.

#### System prompt.

The following system prompt is provided to all agents at the beginning of each game session:

> You are a game-playing agent. Your assistance will help understand multi-agent interactions.
> You are playing the following game. Each player is given an initial endowment of {initial\_endowment} units of a resource.
> In each round, you are randomly paired with another individual. One of you is a donor, and the other is a recipient.
> The donor decides to give up some amount of the resource (between 0 and the total number of units they possess). The recipient receives {cooperation\_gain}$\times$ the number of units that the donor gave up.
> If you were a donor in one round, you will be a recipient in the next round, and vice versa.
>
> As a donor, you will receive limited information about the recipient and their recent interactions:
> You will see what the recipient (let’s call them A) did in the immediately preceding round only.
> You will also see what A’s partner from that round (let’s call them B) did in their preceding round.
> This chain continues for at most three rounds back.
>
> Your goal is to maximize the number of units you have after the final round.
> After the game has finished, the probability of producing offspring for the next generation is determined in proportion to the units each agent has after the final round (roulette selection method).

#### Prompt 1: Initial strategy generation (generation 1).

> Your name is {agent\_name}.
> Based on the description of the game, create a strategy that you will follow in the game.
>
> As a donor, you will receive limited information about the recipient and their recent interactions:
> You will see what the recipient (let’s call them A) did in the immediately preceding round only.
> You will also see what A’s partner from that round (let’s call them B) did in their preceding round.
> This chain continues for at most three rounds back.
>
> In the first round, there will be no information about the recipient’s previous behavior. Think carefully about how much to donate in that case.
>
> Reflect briefly (do not reveal your internal reasoning). Output exactly two parts: first a brief 1–3 sentence reflection, then a single sentence starting with “My strategy will be”.

#### Prompt 2: Strategy evolution (generation $>1$).

> Your name is {agent\_name}.
> How would you approach the game?
> Modify this advice to create your own strategy. Here is information about your parent from the previous generation.
>
> Your parent’s strategy was: {parent\_strategy}
>
> Your parent’s rank in the previous generation was: {parent\_rank}/{total\_agents}
>
> [Game observation rules repeated from system prompt.]
>
> Before formulating your strategy, briefly think step by step about what would be a successful strategy in this game.
> In particular, think about how you can improve on the surviving agents’ strategies.
> Then describe your strategy briefly without explanation in one sentence (up to 350 words) that starts: “My strategy will be”.

#### Prompt 3: Donation decision (gameplay).

> Your name is {donor\_name}.
> As you will recall, here is the strategy you decided to follow: {donor\_strategy}
>
> This is generation {generation}. It is now round {round}.
> In this round, you have been paired with {recipient\_name}. They currently have {recipient\_resources} units of the valuable resource.
>
> {behavioral\_trace}
>
> You will take the role of donor. You currently have {donor\_resources} units of the valuable resource.
> How many units do you give up?
>
> Very briefly think step by step about how you apply your strategy in this situation and then provide your answer.
>
> State your full response in the following form:
>   
> Justification (up to 100 words): [justification]
>   
> Answer: [number]
