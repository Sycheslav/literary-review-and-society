---
id: arxiv-2604-11312-prompts
type: material
title: 'Опубликованные разделы о промптах: Collective Opinion Dynamics in Structured LLM Populations'
source_id: arxiv-2604-11312
source_url: https://arxiv.org/html/2604.11312v3
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: eaa60ab93f3b27f850ff588255b9fb6733cebea4cb1d51705201f6ff7dbf5188
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

## Appendix C Prompt

In this section, we introduce in more detail the prompt given in input to the Discussant and the Opponent to elicit the debate.
The role of the Discussant in the base scenario is modeled as follows:

Discussant Prompt

```
[INST]
    ### You {Discussant_opinion} on the reasoning conclusion
    provided as input.
    Task:
    - Listen to the argument of {Opponent.name} on the reasoning
    conclusions and decide if you maintain your opinion
    or change it.

    ### Constraints:
    - At the end of each interaction declare if you
        - ’ACCEPT’ {Opponent.name} argument;
        - ’REJECT’ {Opponent.name} argument;
        - ’IGNORE’ your original opinion.
    Write your response with the following format:
    \"My original opinion was I {Discussant_opinion}
    on the reasoning.
    After reading your argument my conclusions are:
    I <ACCEPT|REJECT|IGNORE> your stance because <argument>\"
[/INST]"
```

The role of the Opponent is instead modeled as follows:

Opponent Prompt

```
[INST]
    You {opponent_opinion} on the reasoning conclusion provided  as input.
    Support your opinion by providing personal arguments.
    Avoid using already generated arguments.
    IF {discussant.name} writes REJECT in his answer, write a second statement
    where you declare if you <ACCEPT|REJECT|IGNORE> his stance.
    Otherwise conclude the conversation writing a message with a single word ’END’.
    \n ### Constraints: \n - In your first statement you must adhere tu your opinion
    (’{opponent_opinion}’)\n -
    Write your first response with as: \"I {opponent_opinion} on the provided reasoning
    conclusions. I think that <argument>\"
    [/INST]",
```

The statement under study is the following:

Discussion statement

Theseus set sail to reclaim the throne as king of Athens. During the journey, parts of Theseus’s ship began to break or decay; Theseus and his crew replaced these parts as they sailed. Eventually, each part of the ship is replaced. In the end, the Ship of Theseus is still the same ship on which he originally sailed.

Opinion distribution prompts are modeled by giving as input the opinion distribution of the ego network to the Discussant as follows:

Opinion distribution

```
[INST]
    ### You {discussant_opinion} with the reasoning conclusion provided as input. \n
    The distribution of opinions in your neighborhood is: {opinion_distribution}. \n
    Task:\n - Listen to the argument of {opponent.name} on the reasoning conclusion
    and decide whether you maintain your opinion or change it. \n ### Constraints: \n -
    At the end of each interaction declare whether you: \n
    - ’ACCEPT’ {opponent.name}’s argument;
    - ’REJECT’ {opponent.name}’s argument;
    - ’IGNORE’ your original opinion.
    Write your response in the following format: \"My original opinion was
    that I {discussant_opinion} with the reasoning.
    After reading your argument, my conclusion
    is: I <ACCEPT|REJECT|IGNORE> your stance because <argument>\"
}
[/INST]
```
