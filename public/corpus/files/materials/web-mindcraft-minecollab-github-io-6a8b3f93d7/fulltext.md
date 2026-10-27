---
id: web-mindcraft-minecollab-github-io-6a8b3f93d7-text
type: material
title: 'Blocks, Bots, and Bottlenecks: Studying Real-time and Adaptive Multi-Agent
  LLM Collaboration'
work_id: web-mindcraft-minecollab-github-io-6a8b3f93d7
source_url: https://mindcraft-minecollab.github.io/index.html
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: HTML-конверсия страницы источника. Для проекта или блога это текст страницы;
  научный полный текст подтверждается отдельно.
language: original
sha256_text: cc94edfcfa9998548ff08fa5a6d3076de0a60c65be9ab21155faa08af00282cd
---

> Источник: [https://mindcraft-minecollab.github.io/index.html](https://mindcraft-minecollab.github.io/index.html). HTML-конверсия страницы источника. Для проекта или блога это текст страницы; научный полный текст подтверждается отдельно.

# Blocks, Bots, and Bottlenecks: Studying Real-time and Adaptive Multi-Agent LLM Collaboration

## Demo Video

## Abstract

Collaboration is ubiquitous and essential in day-to-day life---from exchanging ideas, to delegating tasks, to generating plans together.
This work studies how LLMs can adaptively collaborate to perform complex embodied reasoning tasks.
To this end we introduce MINDCraft, a easily extensible platform built to enable LLM agents to control characters in the open-world game of Minecraft; and MineCollab, a benchmark to test the different dimensions of embodied and collaborative reasoning.
An experimental study finds that the primary bottleneck in collaborating effectively for current state-of-the-art agents is efficient natural language communication, with agent performance dropping as much as 15% when they are required to communicate detailed task completion plans.
We conclude that existing LLM agents are ill-optimized for multi-agent collaboration, especially in embodied scenarios, and highlight the need to employ methods beyond in-context and imitation learning.

## Overall Performance

Cooking and crafting scores are calculated as the average success rate and
the construction task score is calculated as the average edit distance
between the placed blocks and the true blueprint. The total score is the
average score for each model across each task.

Sort by:

| Rank | Model | Score | Cooking | Crafting | Construction |
| --- | --- | --- | --- | --- | --- |
| 1 | Claude-3.5-Sonnet | 0.49 | 0.63 | 0.47 | 0.36 |
| 2 | GPT-4o | 0.29 | 0.4 | 0.17 | 0.31 |
| 3 | LLaMa-70B | 0.24 | 0.63 | 0.16 | 0.19 |
| 4 | LLaMa-8B-SFT | 0.23 | 0.21 | 0.28 | 0.2 |
| 4 | LLaMa-8B | 0.01 | 0.02 | 0.0 | 0.0 |

## Construction Tasks

In the construction tasks, agents are directed to build structures from procedurally generated blueprints.
Blueprints can also be downloaded from the internet and read into our blueprint format - enabling agents to build anything from pyramids to the Eiffel Tower.
We choose evaluate primarily on our generated blueprints as they provide fine-grained control over task complexity, allowing us to systematically vary the depth of collaboration required---e.g. number of rooms in the interior of palace, or the amount and types of materials required for each room.
At the beginning of each episode, agents are initialized with the blueprint, materials (e.g. stone, wood, doors, carpets) in such a way that no agent has the full resources or the expertise in terms of the types of tools that can be used to process the resources and complete the entire blueprint.
For example, if the blueprint required a stone base and a wooden roof, one agent would be given access and the ability to manipulate stone, the other to wood.
Agents are evaluated via an edit distance based metric that judges how close their constructed building is to the blueprint and the metric reported in the leaderboard is the average of those edit distance scores.

### Timelapse Video

### Communication Showcase

In this video, we showcase the communication between agents during the construction task. The agents talk about what resources they have, and split up the work.

### Church Build

In this video we show the agents building a church.

### Failure Modes

However, we also see a number of failure modes in the multi agent construction tasks.

Here is an example of the agents failing to build a church. One agent builds the foundation and then the other bots completely destroy it.

## Cooking Tasks

At the beginning of a cooking task episode, the agents are initialized with a goal to make a meal, e.g. they need to make cake and bread.
The agents then need to coordinate the collection of ingredients through natural language communication (e.g. Andy collects wheat for the bread while Jill makes the cake) and combine them in a multi-step plan.
To assist them in collecting resources, agents are placed in a "cooking world" that possesses all of the items they need to complete the task, from livestock, to crops, to a smoker, furnace, and crafting table.
Following a popular test of collaboration in humans, we further introduce a ``Hell's Kitchen'' variant of the cooking tasks where each agent is given the recipes for a small subset of the items they need to cook and must communicate the instructions with the other teammates.
For example, if the task is to make a baked potato and a cake, one agent is given recipe for baked potato, but is required to bake the cake to complete the task, forcing them to ask their teammate for help in baking the potato.
Agents are evaluated on whether are successfully able to complete the set requirements to make the recipes.
The locations of these objects, the complexity of the recipe, and the subsets given to each agent are procedurally generated every episode.

### Cooking Showcase

### Cooking Footage and Communication Showcase

The goal of this task is to make a golden apple and rabbit stew.

### Cooking Inside the House

The goal of this task is to make a golden apple and a baked potato. You can see that they share resources to complete the task. All the items need to be present in one agents inventory for the task to be counted as successful.

## Crafting Tasks

Crafting has long been the subject of Minecraft agent research---our crafting tasks encompass the entire breadth of items that are craftable in Minecraft including clothing, furniture, and tools.
At the beginning of each episode, the agents are initialized with a goal (e.g. make a bookshelf), different sets of resources (e.g. books and planks), and access to a crafting recipe, that is occasionally blocked.
To complete the task, the agents must: (1) communicate with each other what items are in their inventory; (2) share with each other the crafting recipe if necessary; and (3) give each other resources to successfully craft the item.
To make the crafting tasks more challenging, agents are given longer crafting objectives (e.g. crafting a compass which requires putting together multiple other objects first).

### Successful Crafting Task Demo

The goal of this task is to make a bookshelf.

### Failure Mode

The agents fail at these tasks when they engage in useless chatter unrelated to their main goal. Such as this one, where they should be sharing resources but instead embark on a hopeless quest to find spiders.
