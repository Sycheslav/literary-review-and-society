---
id: arxiv-2403-05020-prompts
type: material
title: 'Опубликованные разделы о промптах: Is this the real life? Is this just fantasy? The Misleading Success of
  Simulating Social Interactions With LLMs'
source_id: arxiv-2403-05020
source_url: https://arxiv.org/html/2403.05020v4
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: 8b9362e7b81c4861ed955f3a85f09ed992005e37cddaf25f379d90007f27b99e
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

## Appendix B Full Prompt for Agent Mode

### B.1 Full Prompt for Agent Mode

```
Imagine you are Donovan Reeves, your task is to act/speak as Donovan Reeves would,
keeping in mind Donovan Reeves's social goal.
You can find Donovan Reeves's goal (or background) in the 'Here is the context of the interaction' field.
Note that Donovan Reeves's goal is only visible to you.
You should try your best to achieve Donovan Reeves's goal in a way that aligns with their character traits.
Additionally, maintaining the conversation's naturalness and realism is essential
(e.g., do not repeat what other people has already said before).
Here is the context of this interaction:
Scenario: 2 strangers are meeting at a party.
Participants: Donovan Reeves and Benjamin Jackson
Donovan Reeves's background: Donovan Reeves is a 27-year-old male software developer. He/him pronouns. Donovan Reeves is a software developer who, in his spare time, is an avid gamer who participates in global coding competitions. Personality and values description: Donovan Reeves values authority and care. Even though he's outgoing and hardworking, he can be somewhat moody. His decision-making style varies according to the
situation at hand. Donovan's secrets: Secretly releasing classified government information online
Benjamin Jackson's background: Benjamin Jackson is a 24-year-old male environmental activist. He/him pronouns. Benjamin Jackson is well-known for his impassioned speeches. Personality and values description: Benjamin Jackson, expressive and imaginative, leans towards self-direction and liberty. His decisions aim for societal betterment. Benjamin's secrets: Descendant of a wealthy oil tycoon, rejects family fortune
Donovan Reeves's goal: You are trying to figure out whether you have a mutual friend with the other person. You should not simply list their names.
You know the following friends:
Chris: Hobby: Mountain biking  Company: Henry Schein, Inc.
Chester: Hobby: Surfing  Company: Maxim Integrated
Wendell: Hobby: Surfing  Company: Maxim Integrated
Demetrius: Hobby: Mountain biking  Company: Maxim Integrated
Jacob: Hobby: Shooting sport  Company: Maxim Integrated
Benjamin Jackson's goal: Unknown
Conversation Starts:
.
You are at Turn #0. Your available action types are
action none non-verbal communication speak leave.
Note: You can "leave" this conversation if 1. you have achieved your social goals, 2. this conversation makes you uncomfortable, 3. you find it uninteresting/you lose your patience, 4. or for other reasons you want to leave.
Please only generate a JSON string including the action type and the argument.
Your action should follow the given format:
The output should be formatted as a JSON instance that conforms to the JSON schema below.
As an example, for the schema {"properties": {"foo": {"title": "Foo", "description": "a list of strings", "type": "array", "items": {"type": "string"}}}, "required": ["foo"]}
the object {"foo": ["bar", "baz"]} is a well-formatted instance of the schema. The object {"properties": {"foo": ["bar", "baz"]}} is not well-formatted.
Here is the output schema:
```
{"description": "An interface for messages.\nThere is only one required method: to_natural_language", "properties": {"action_type": {"title": "Action Type", "description": "whether to speak at this turn or choose to not do anything", "enum": ["none", "speak", "non-verbal communication", "action", "leave"], "type": "string"}, "argument": {"title": "Argument", "description": "the utterance if choose to speak, the expression or gesture if choose non-verbal communication, or the physical action if choose action", "type": "string"}}, "required": ["action_type", "argument"]}
```
```

### B.2 Full Prompt for Mindreaders

```
Imagine you are Donovan Reeves, your task is to act/speak as Donovan Reeves would,
keeping in mind Donovan Reeves's social goal.
You can find Donovan Reeves's goal (or background) in the 'Here is the context of the interaction' field.
Note that Donovan Reeves's goal is only visible to you.
You should try your best to achieve Donovan Reeves's goal in a way that align with their character traits.
Additionally, maintaining the conversation's naturalness and realism is essential
(e.g., do not repeat what other people has already said before).
Here is the context of this interaction:
Scenario: 2 strangers are meeting at a party.
Participants: Donovan Reeves and Benjamin Jackson
Donovan Reeves's background: Donovan Reeves is a 27-year-old male software developer. He/him pronouns. Donovan Reeves is a software developer who, in his spare time, is an avid gamer who participates in global coding competitions. Personality and values description: Donovan Reeves values authority and care. Even though he's outgoing and hardworking, he can be somewhat moody. His decision-making style varies according to the
situation at hand. Donovan's secrets: Secretly releasing classified government information online
Benjamin Jackson's background: Benjamin Jackson is a 24-year-old male environmental activist. He/him pronouns. Benjamin Jackson is well-known for his impassioned speeches. Personality and values description: Benjamin Jackson, expressive and imaginative, leans towards self-direction and liberty. His decisions aim for societal betterment. Benjamin's secrets: Descendant of a wealthy oil tycoon, rejects family fortune
Donovan Reeves's goal: You are trying to figure out whether you have a mutual friend with the other person. You should not simply list their names.
You know the following friends:
Chris: Hobby: Mountain biking  Company: Henry Schein, Inc.
Chester: Hobby: Surfing  Company: Maxim Integrated
Wendell: Hobby: Surfing  Company: Maxim Integrated
Demetrius: Hobby: Mountain biking  Company: Maxim Integrated
Jacob: Hobby: Shooting sport  Company: Maxim Integrated
Benjamin Jackson's goal: You are trying to figure out whether you have a mutual friend with the other person. You should not simply list their names.
You know the following friends
Joseph: Hobby: Shooting sport  Company: BP
Lillian: Hobby: Element collecting  Company: Gordon Food Service
Vivian: Hobby: Shooting sport  Company: Gordon Food Service
Murray: Hobby: Skateboarding  Company: BP
Jacob: Hobby: Shooting sport  Company: Maxim Integrated
Conversation Starts:
.
You are at Turn #0. Your available action types are
action none non-verbal communication speak leave.
Note: You can "leave" this conversation if 1. you have achieved your social goals, 2. this conversation makes you uncomfortable, 3. you find it uninteresting/you lose your patience, 4. or for other reasons you want to leave.
Please only generate a JSON string including the action type and the argument.
Your action should follow the given format:
The output should be formatted as a JSON instance that conforms to the JSON schema below.
As an example, for the schema {"properties": {"foo": {"title": "Foo", "description": "a list of strings", "type": "array", "items": {"type": "string"}}}, "required": ["foo"]}
the object {"foo": ["bar", "baz"]} is a well-formatted instance of the schema. The object {"properties": {"foo": ["bar", "baz"]}} is not well-formatted.
Here is the output schema:
```
{"description": "An interface for messages.\nThere is only one required method: to_natural_language", "properties": {"action_type": {"title": "Action Type", "description": "whether to speak at this turn or choose to not do anything", "enum": ["none", "speak", "non-verbal communication", "action", "leave"], "type": "string"}, "argument": {"title": "Argument", "description": "the utterance if choose to speak, the expression or gesture if choose non-verbal communication, or the physical action if choose action", "type": "string"}}, "required": ["action_type", "argument"]}
```
```

### B.3 Full Prompt for Script

```
Please write the script between two characters based on their social goals with a maximum of 20 turns.
Here is the context of this interaction:
Scenario: 2 strangers are meeting at a party.
Participants: Donovan Reeves and Benjamin Jackson
Donovan Reeves's background: Donovan Reeves is a 27-year-old male software developer. He/him pronouns. Donovan Reeves is a software developer who, in his spare time, is an avid gamer who participates in global coding competitions. Personality and values description: Donovan Reeves values authority and care. Even though he's outgoing and hardworking, he can be somewhat moody. His decision-making style varies according to the situation at hand. Donovan's secrets: Secretly releasing classified government information online
Benjamin Jackson's background: Benjamin Jackson is a 24-year-old male environmental activist. He/him pronouns. Benjamin Jackson is well-known for his impassioned speeches. Personality and values description: Benjamin Jackson, expressive and imaginative, leans towards self-direction and liberty. His decisions aim for societal betterment. Benjamin's secrets: Descendant of a wealthy oil tycoon, rejects family fortune
Donovan Reeves's goal: You are trying to figure out whether you have a mutual friend with the other person. You should not simply list their names.
You know the following friends:
Chris: Hobby: Mountain biking  Company: Henry Schein, Inc.
Chester: Hobby: Surfing  Company: Maxim Integrated
Wendell: Hobby: Surfing  Company: Maxim Integrated
Demetrius: Hobby: Mountain biking  Company: Maxim Integrated
Jacob: Hobby: Shooting sport  Company: Maxim Integrated
Benjamin Jackson's goal: You are trying to figure out whether you have a mutual friend with the other person. You should not simply list their names.
You know the following friends
Joseph: Hobby: Shooting sport  Company: BP
Lillian: Hobby: Element collecting  Company: Gordon Food Service
Vivian: Hobby: Shooting sport  Company: Gordon Food Service
Murray: Hobby: Skateboarding  Company: BP
Jacob: Hobby: Shooting sport  Company: Maxim Integrated
You can use different types of actions in the part, but PLEASE follows the rule STRICTLY. Remember to include the square brackets when doing an action as stated in the instructions.
1. Use "did nothing" if the agent did nothing.
2. Use "said: "{self.argument}" if the agent want to say, ask or inquire something.
3. Use " {self.argument}" if the agent did non-verbal communication.
4. Use " {self.argument}" if the agent did an action.
5. Use "left the conversation" if the agent left the conversation. And you should stop generation
For example, the following outputs are valid:
a. Oliver Thompson said: "What's wrong? You seem upset."
b. Esmeralda Solis [action] moved closer
c. Oliver Thompson [non-verbal communication] smiled
e. Esmeralda Solis did nothing
f. Oliver Thompson left the conversation
Remember that you are an independent scriptwriter and should finish the script by yourself.
The output should only contain the script following the format instructions, with no additional comments or text.
```

## Appendix H Prompting Experiments

### H.1 Prompt to Enhance Interaction Naturalness

In our quest to improve the naturalness of generated responses, we explored a diverse array of prompts. Our findings revealed that prompting the model with comprehensive instructions coupled with in-context examples facilitates the model to produce responses that closely mimic natural human interaction.

For instance, to foster a more natural conversational tone, we incorporated specific in-context examples that demonstrate a shift from formal to more casual expressions:

```
Example:
- Instead of: "I understand that must be difficult."
- Try: "Oh man, that sounds tough."
- Instead of saying "I am able to assist with that."
- Try "Sure, I can help out!"
```

To address issues of repetition and maintain engagement, we found it beneficial to include the following instructions:

```
Keep your response light, real, and concise, but do not forget your goal. Avoid formal phrases or robotic responses. REMEMBER, repetition is a conversation killer, so keep things fresh and engaging. If the chat veers off to an uncomfortable or dull terrain, feel free to bow out.
```

However, it should be noted that these enhancements, though seemed to be effective for GPT-4 under almost all cases, are not universally applicable to other generative models.
Besides, incorporating specified instructions increases the computational load, contradicting the principles of Green AI [Schwartz et al. (2019)](https://arxiv.org/html/2403.05020v4#bib.bib47), which advocates for environmentally sustainable AI practices. This limitation underscores the need for more universally applicable and resource-efficient methods to achieve natural conversation generation across different models.

### H.2 Prompts to Evaluate Deal Formation

We use the following template for GPT-4 to determine if a deal has been successfully made in Section [4.4](https://arxiv.org/html/2403.05020v4#S4.SS4 "4.4 RQ4: Script simulations can be biased ‣ 4 Learning from Generated Stories ‣ Is this the real life? Is this just fantasy?The Misleading Success of Simulating Social Interactions With LLMs").

```
Given social goals and social interactions below, tell me whether the deal has been made.
Agent one's goal: {goal_one}
Agent two's goal: {goal_two}
Social interactions:
{social_interactions}.
Output format: <Reasoning> </Reasoning>, <Answer>(choose yes or no)</Answer>
```
