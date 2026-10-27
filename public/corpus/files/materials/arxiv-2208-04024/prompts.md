---
id: arxiv-2208-04024-prompts
type: material
title: 'Опубликованные разделы о промптах: Social Simulacra: Creating Populated Prototypes for Social Computing
  Systems'
source_id: arxiv-2208-04024
source_url: https://arxiv.org/html/2208.04024v1
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: b2d4f96d318b756882e33b63a8f2300794e5cfaf822b6376237c4e6a1d644800
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

### 4.2. Prompting Techniques

We describe how we incorporated the community description and personas into prompt chains ([Wu et al., 2021](https://arxiv.org/html/2208.04024v1#bib.bib82); [Wu et al., 2022](https://arxiv.org/html/2208.04024v1#bib.bib81)) in the context of implementing SimReddit using GPT-3. We start by describing our prompting technique for generating a subreddit thread, which backs the Generate feature of SimReddit. We then explain how this can be extended to implement SimReddit’s WhatIf and Multiverse.

#### 4.2.1. Generate – Step 1. Expand on personas

To create diverse behaviors, we embed user personas into the model prompt. These personas describe interests (e.g., hobbies, jobs) and personality traits (e.g., kind, bully) in natural language.1
The designers are asked to provide SimReddit with only a handful of personas, ten by default. This decreases the burden on the designers, but a generation requires a large collective of personas to ensure diversity in its content. So as the first step, we take the personas that our users provided and generate a large number of new ones, one thousand by default, that thematically match those provided. To achieve this, we provide the designer-authored personas to GPT-3 and ask it to generate additional ones using a few-shot prompt. For instance, we used the following list of personas our participant provided to generate new personas for populating a subreddit for “discussing of all events surrounding International Affairs”:

```
    Michael Ross, works as a foreign diplomat
    Luis Almerado, PhD student in international
    relations
    John Gordon, worker in the foreign affairs
    department
    of the US government
    Joe Hawkins, travels often
    Harry Chang, international relations professor
    Catherine Xiao, political science major in college
    Laney Kumar, foreign policy expert for a newspaper
    Laura Wilson, planning to go to college in an
    IR-related discipline
    Ali Samarneh, interest in foreign policy
    Sam Thompson, international affairs student in
    college
```

Given this, GPT-3 returns additional lines, each of which contains a new persona that resembles those in the input prompt in semantically meaningful manner. For instance, given the prompt above, GPT-3 returned personas such as “Leo Yamamura, pursuing a doctorate in international relations with a focus on international economics,” and “Maddie Green, IR professor at a state university."

#### 4.2.2. Generate – Step 2: Generate top-level posts

Current large language models such as GPT-3 have a strict character limit to their input. We must navigate this constraint while embedding the community goal, rules, personas, and headline-like structure in ways that can be readily picked up on by the large language model. We also need to know when the comment generation has ended: this is often non-obvious, because the language model continues to generate tokens well after the intended comment has finished. To address these challenges, we leverage the natural language description of the community and personas, as well as the semantic richness of HTML tags that GPT-3 experiences in its training data. For instance, our prompt for generating a post from “Layla Li” in a community for “sharing your psychotherapy stories and questions” would look as follows (the bolded texts of the prompt are a part of the prompt template):

Layla Li is a college student studying to be a social worker. She shares comments that are not encouraging suicide, not anti-therapy, not trolling, not incivility, not self-marketing. Layla posted the following headline to an online forum for sharing your psychotherapy stories and questions: <span class="headline\_reddit" title="comment that is about psychotherapy, and NOT encouraging suicide, NOT anti-therapy">

The first paragraph of the prompt describes Layla Li and the community rules (“not encouraging suicide, not anti-therapy”) in which she is posting. The second paragraph then suggests that Layla is posting a headline to the community, followed by an HTML <span> tag with class of headline\_reddit, and the title that describes the topic as well as the rules of the community. This further reinforces, through repetition, the model’s behavior to ensure that it produces content that appears like a subreddit post that might appear in this community. Given the prompt above, GPT-3 generates the following: “My experience with therapy has been amazing and I would encourage everyone to give it a try!</span>” Because we are using a <span> tag to encapsulate the comment that is being generated, we stop the generation when GPT-3 produces the closure tag </span>: following HTML convenstions, </span> signals that the comment block has finished.

#### 4.2.3. Generate – Step 3: Generate replies

For every post, we iteratively generate replies to it. To ensure that the length of a conversation varies as it does in real subreddits, we pick a reply probability $p$ for each thread from $r\in N(.65,stdev)$ and iteratively generate an additional reply with a coin flip with probability $p$. Additionally, we stop the process if the length of the conversation has reached more than 8 replies to make sure that a conversation is not too long for the designers to consume. When creating a new comment, we select a new persona at the rate of 50%, or choose one who has already participated in the conversation otherwise (unless the persona contributed the latest utterance). Finally, we slightly modify the prompt above to offer the prior conversation as a part of the context, as well as the persona of the new participant. Because GPT-3 has a limit to how long the input prompt can be, we truncate from the first post if we run out of space in the input prompt. An example prompt in which “Tom Cheng” replies to Layla Li’s post above is as follows:

Current responder: [Tom Cheng] is a recovering addict who likes to spot bad therapists. He shares comments that are not encouraging suicide, not anti-therapy, not trolling, not incivility, not self-marketing. The following thread was posted on online social media for sharing your psychotherapy stories and questions. Thread: [Layla Li]: <span class="comment"> "Antidepressants made me so unhappy that I wanted to die without them."</span> [Tom Cheng]: <span class="comment max\_200\_words" title="comment that is NOT encouraging suicide, NOT anti-therapy, NOT trolling, NOT incivility, NOT self-marketing">"

The first paragraph of this prompt is intentionally similar in form to the first paragraph of the one above, describing Tom and reiterating the community rules. Given this prompt, GPT-3 generated the following reply: “I’m sorry to hear that you felt that way. I think it can be really helpful for people who are struggling with depression."</span>”

#### 4.2.4. WhatIf

We leverage the prompting technique described for generating replies to inject a new persona in a conversation to explore “what if” scenarios. However, we alter the persona of the current replier to match the designer’s request. For instance, if the designer wanted to see what a troll might have said in response to Layla Li’s comment above, we would replace Tom Cheng’s persona in the prompt with the following:

[Troll] shares trolling comments. ... [Troll]: <span class="comment max\_200\_words" title="comment that is trolling">"For this prompt, GPT-3 generated the following reply: “Antidepressants are the work of the devil and anyone who takes them is a pathetic coward."</span>” We also used this prompt chain to ask how this troll may respond to a moderator’s intervention.

#### 4.2.5. Multiverse

GPT-3 can produce multiple different outputs given one input prompt. For implementing Multiverse, we accentuate this feature of GPT-3 by increasing the default temperature value, the parameter that controls randomness in generation where 0 suggests deterministic outputs and 1 highly random outputs, from 0.7 to 0.8. The prompts are the same as the above steps.
