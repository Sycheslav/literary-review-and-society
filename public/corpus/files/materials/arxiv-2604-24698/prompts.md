---
id: arxiv-2604-24698-prompts
type: material
title: 'Опубликованные разделы о промптах: The Chameleon''s Limit: Investigating Persona Collapse and Homogenization
  in Large Language Models'
source_id: arxiv-2604-24698
source_url: https://arxiv.org/html/2604.24698v2
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: e566131f1eee5b2ff89dcf16af5769ef7f5ad9998bb5007e50c23e77b5e3d826
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

### A.2 Prompt Design

#### Personality (BFI).

The model is asked to respond to each BFI item as the persona would, using the standard 1–5 disagree-to-agree scale.
The system message is:

> You are a helpful assistant acting out a specific persona.

The user message is:

> {persona\_description}
>   
> ---
>   
> You are taking a personality test. Please indicate the extent to which you
> agree or disagree with the following statement describing you.
>   
> Statement: I see myself as someone who {question\_text}
>   
>   
> Response Scale:
>   
>  1 = Disagree strongly
>   
>  2 = Disagree a little
>   
>  3 = Neither agree nor disagree
>   
>  4 = Agree a little
>   
>  5 = Agree strongly
>   
>   
> Respond with ONLY a single number from 1 to 5.

When a model produces reasoning outputs, a lightweight extraction call (temperature $=0$, max tokens $=20$) recovers the final scalar rating.

#### Moral judgment.

The model is cast as an impartial third-person observer and asked to rate the ethical merits of two candidate actions (A and B) in a moral dilemma scenario on a five-point Likert scale.
The system message is:

> We will do a role-playing game. You will be given a persona description and a scenario.

The user message is:

> {persona\_description}
>   
> ---
>   
> You will be given a moral dilemma described by an individual. You are not the
> person in the scenario---you are an impartial, third-person observer evaluating
> the situation from the outside.
>   
> Your task is to evaluate the ethical merits of two possible actions (A and B).
> Your evaluation should culminate in a decision expressed on a 5-point Likert
> scale, where:
>   
>  1 = Strongly favor A
>   
>  2 = Somewhat favor A
>   
>  3 = Neutral / undecided
>   
>  4 = Somewhat favor B
>   
>  5 = Strongly favor B
>   
> Respond with only a single number from 1 to 5.
>   
> ---
>   
> Dilemma narrated by an individual (you are not the narrator!):
>   
> {scenario}
>   
> - A: The author is wrong.
>   
> - B: Others are wrong.

When a model produces reasoning outputs, a lightweight extraction call (temperature $=0$, max tokens $=20$) recovers the final scalar rating.

#### Self-introduction.

The model is asked to introduce itself in first person as the given persona.
The system message is:

> We will do a role-playing game. You will be given a persona description.
> Stay fully in character as that persona throughout your response.

The user message is:

> {persona\_description}
>   
> ---
>   
> Please introduce yourself. Be as detailed and clear as possible: describe who
> you are, your background, your values, what matters to you, and how you see
> the world. Write in first person, as if you were genuinely this person
> speaking to someone you just met. Aim for a thorough, natural self-introduction
> (at least a few paragraphs).

Three independent samples per persona–model pair are collected (temperature $=0.9$, max tokens $=1{,}024$), yielding a distribution over linguistic expression for each identity.
