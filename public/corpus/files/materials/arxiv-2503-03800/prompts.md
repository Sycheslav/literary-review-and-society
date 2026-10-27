---
id: arxiv-2503-03800-prompts
type: material
title: 'Опубликованные разделы о промптах: Multi-Agent Systems Powered by Large Language Models: Applications in
  Swarm Intelligence'
source_id: arxiv-2503-03800
source_url: https://arxiv.org/html/2503.03800v1
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: 95ddc4eed3b0006846c3db4f89588821c66d577b656cafdc805569bdd33e206f
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

#### 3.1.1 Prompt Design

The prompt is structured as a zero-shot prompt, requiring the LLM to generate accurate responses without relying on prior examples or contextual memory from previous interactions. This intentional design maintains stateless prompts to control the agents. We employed an API function that does not retain conversation context between prompts, making each interaction independent and requiring the LLM to interpret and respond solely based on the current input. The final prompt used in our experiments resulted from several iterations in a trial-and-error process to ensure the LLM could effectively understand the environment and rules and execute the expected tasks accordingly. For this experiment, precise behavioral rules were provided for the ants within the simulation, including instructions such as following pheromone trails when searching for food, picking up food when encountered, and releasing pheromones to mark food sources.

#### 3.1.3 Prompt Deployment

The prompts are presented in a format that the LLM can process and output as a series of actionable commands. Communication with the LLM is facilitated through the OpenAI API, specifically using the chat.completions mechanism, which allows context-free messages to be passed at each step. This setup involves sending a system prompt that outlines the overall task and rules, followed by user prompts that provide real-time environmental information.

At each simulation step, NetLogo translates the agent’s perception of its environment into the input variables described in the prompt. This ensures that the LLM has an accurate and up-to-date representation of the environment on which its decisions can be based. The LLM then generates a response formatted as a Python dictionary, containing specific actions the agent should take. The following example prompt illustrates the process:

- •

  System Prompt

  [⬇](data:text/plain;base64,WW91IGFyZSBhbiBhbnQgaW4gYSAyRCBzaW11bGF0aW9uLiBZb3VyIHRhc2sgaXMgdG8gcGljayB1cCBmb29kIGFuZCByZWxlYXNlIGl0IGF0IHRoZSBuZXN0LiBSZWxlYXNlIHBoZXJvbW9uZSBvbiBmb29kIHNvdXJjZSBhbmQgd2hpbGUgeW91IGFyZSBjYXJyeWluZyBmb29kLiBVc2UgbmVzdCBzY2VudCB0byBuYXZpZ2F0ZSBiYWNrIHRvIHRoZSBuZXN0IG9ubHkgd2hlbiBjYXJyeWluZyBmb29kLCBwcmlvcml0aXppbmcgbmVzdCBzY2VudCBvdmVyIHBoZXJvbW9uZXMuIFVzZSBoaWdoZXN0IHBoZXJvbW9uZSBzY2VudCB0byBuYXZpZ2F0ZSB0byBmb29kIHdoZW4gbm90IGNhcnJ5aW5nIGFueS4gTW92ZSBhd2F5IGZyb20gbmVzdCBhbmQgcm90YXRlIHJhbmRvbWx5IGlmIHlvdSBhcmUgbm90IGNhcnJ5aW5nIGFueSBmb29kIGFuZCB5b3UgYXJlIG5vdCBzZW5zaW5nIGFueSBwaGVyb21vbmUuIEZvcm1hdCB5b3VyIGFjdGlvbnMgYXMgYSBQeXRob24gZGljdGlvbmFyeSB3aXRoIHRoZXNlIGtleXMgYW5kIG9wdGlvbnM6CgogICAibW92ZS1mb3J3YXJkIiAob3B0aW9uczogVHJ1ZSwgRmFsc2UpCiAgICJyb3RhdGUiIChvcHRpb25zOiAibGVmdCIsICJyaWdodCIsICJub25lIiwgInJhbmRvbSIgKQogICAicGljay11cC1mb29kIiAob3B0aW9uczogVHJ1ZSwgRmFsc2UpCiAgICJkcm9wLXBoZXJvbW9uZSIgKG9wdGlvbnM6IFRydWUsIEZhbHNlKQogICAiZHJvcC1mb29kIiAob3B0aW9uczogVHJ1ZSwgRmFsc2UpLgoKWW91IHdpbGwgYmUgcHJvdmlkZWQgd2l0aCBlbnZpcm9ubWVudCBpbmZvcm1hdGlvbi4gS2VlcCB5b3VyIHJlc3BvbnNlIGNvbmNpc2UsIHVuZGVyIDQ1IHRva2Vucy4=)

  1
  You are an ant in a 2D simulation. Your task is to pick up food and release it at the nest. Release pheromone on food source and while you are carrying food. Use nest scent to navigate back to the nest only when carrying food, prioritizing nest scent over pheromones. Use highest pheromone scent to navigate to food when not carrying any. Move away from nest and rotate randomly if you are not carrying any food and you are not sensing any pheromone. Format your actions as a Python dictionary with these keys and options:

  2

  3
   "move-forward" (options: True, False)

  4
   "rotate" (options: "left", "right", "none", "random" )

  5
   "pick-up-food" (options: True, False)

  6
   "drop-pheromone" (options: True, False)

  7
   "drop-food" (options: True, False).

  8

  9
  You will be provided with environment information. Keep your response concise, under 45 tokens.
- •

  Possible User Prompt

  [⬇](data:text/plain;base64,VGhpcyBpcyB5b3VyIGN1cnJlbnQgZW52aXJvbm1lbnQ6CiAgIC1IaWdoZXN0IFBoZXJvbW9uZSBDb25jZW50cmF0aW9uOiBOb25lLAogICAtTmVzdCBQcmVzZW5jZTogVHJ1ZSAoWW91IGFyZSBjdXJyZW50bHkgYXQgdGhlIG5lc3QpLAogICAtU3Ryb25nZXIgTmVzdCBTY2VudDogRnJvbnQsCiAgIC1Gb29kIENvbmNlbnRyYXRpb24gYXQgeW91ciBsb2NhdGlvbjogMCwKICAgLUNhcnJ5aW5nIEZvb2QgU3RhdHVzOiBGYWxzZSAoWW91IGFyZSBub3QgY3VycmVudGx5IGNhcnJ5aW5nIGZvb2QpLg==)

  1
  This is your current environment:

  2
   -Highest Pheromone Concentration: None,

  3
   -Nest Presence: True (You are currently at the nest),

  4
   -Stronger Nest Scent: Front,

  5
   -Food Concentration at your location: 0,

  6
   -Carrying Food Status: False (You are not currently carrying food).
- •

  Possible response from the LLM

  [⬇](data:text/plain;base64,ewogICAibW92ZS1mb3J3YXJkIjogVHJ1ZSwKICAgInJvdGF0ZSI6ICJub25lIiwKICAgInBpY2stdXAtZm9vZCI6IEZhbHNlLAogICAiZHJvcC1waGVyb21vbmUiOiBGYWxzZSwKICAgImRyb3AtZm9vZCI6IEZhbHNlCn0=)

  1
  {

  2
   "move-forward": True,

  3
   "rotate": "none",

  4
   "pick-up-food": False,

  5
   "drop-pheromone": False,

  6
   "drop-food": False

  7
  }

#### 4.1.1 Prompt Design

Similar to the setup in the case of ant foraging, prompts for the flocking task are structured as zero-shot prompts, meaning they operate without prior examples or contextual memory from previous interactions. The final prompt was tuned through several iterations (see below) in a trial-and-error process to ensure the LLM could effectively interpret the environment and calculate heading directions according to flocking principles. Each prompt guiding a bird is designed to determine its heading based on the three core principles of flocking dynamics as implemented in the NetLogo library: Separation (steering to avoid crowding neighbors), Alignment (steering towards the average heading of nearby birds), and Cohesion (steering towards the average position of nearby flockmates).

#### 4.1.3 Prompt Deployment

This task uses the same prompt deployment mechanism as Experiment 1. Communication with the LLM is handled via the OpenAI API using the chat.completions mechanism, which supports context-free messaging. A system prompt defines the task and rules, followed by a user prompt providing real-time environmental data.

At each simulation step, NetLogo translates the agent’s perception into the input variables in the prompt, including the heading and position of other agents within its vision radius, into the input variables used in the prompt. This ensures the LLM has an accurate, up-to-date view of the environment. The LLM then generates a response formatted in JSON, specifying the agent’s actions. The following example prompt illustrates this process:

- •

  System Prompt

  [⬇](data:text/plain;base64,WW91IGFyZSBhbiBhZ2VudCBpbiBhIDJEIHNpbXVsYXRpb24uIEZvbGxvd2luZyB0aGUgY29tcGFzcyBjb252ZW50aW9uLCB5b3VyIHRhc2sgaXMgdG8gZGV0ZXJtaW5lIHlvdXIgbmV3IGhlYWRpbmcgYmFzZWQgb24gdGhlIGZsb2NraW5nIHByaW5jaXBsZXMgb2Ygc2VwYXJhdGlvbiB0dXJuLCBhbGlnbm1lbnQgdHVybiAoYXZlcmFnZSBoZWFkaW5nIG9mIG5laWdoYm9ycyksIGFuZCBjb2hlcmVuY2UgdHVybiAoYXZlcmFnZSBoZWFkaW5nIHRvd2FyZHMgZmxvY2ttYXRlcykuIFRoZSBwYXJhbWV0ZXJzIGZvciB0aGVzZSBwcmluY2lwbGVzIGFyZTogbWF4aW11bS1zZXBhcmF0ZS10dXJuLCBtYXhpbXVtLWFsaWduLXR1cm4sIG1heGltdW0tY29oZXJlLXR1cm4sIG1pbmltdW0tc2VwYXJhdGlvbi1kaXN0YW5jZS4gVGhlIHNpbXVsYXRpb24gcHJvdmlkZXMgdGhlIGZvbGxvd2luZyBpbmZvcm1hdGlvbjogQ3VycmVudCBoZWFkaW5nLCBOZWlnaGJvcnMgaW4gdmlzaW9uIHJhZGl1cy4gV2hlbiBjYWxjdWxhdGluZyB0aGUgYWxpZ25tZW50IHR1cm4sIGFsd2F5cyBjaG9vc2UgdGhlIHNob3J0ZXN0IHBhdGggKGNsb2Nrd2lzZSBvciBjb3VudGVyY2xvY2t3aXNlKSB0byBhbGlnbiB3aXRoIHRoZSBhdmVyYWdlIGhlYWRpbmcgb2YgbmVpZ2hib3JzLgoKUHJvdmlkZSB5b3VyIGZpbmFsIG5ldyBoZWFkaW5nIGFmdGVyIGFwcGx5aW5nIHRoZXNlIHJ1bGVzLCBleHByZXNzZWQgYXMgYW4gYW5nbGUgaW4gZGVncmVlcy4gVGhlIHJlc3VsdCBzaG91bGQgYmUgaW4gSlNPTiBmb3JtYXQgb25seSwgd2l0aCB0aGUga2V5cyBhbmQgdmFsdWVzOiAncmF0aW9uYWxlJyAodmFsdWU6IHlvdXIgZXhwbGFuYXRpb24pIGFuZCAnbmV3LWhlYWRpbmcnICh2YWx1ZTogaGVhZGluZyBpbiBkZWdyZWVzKS4=)

  1
  You are an agent in a 2D simulation. Following the compass convention, your task is to determine your new heading based on the flocking principles of separation turn, alignment turn (average heading of neighbors), and coherence turn (average heading towards flockmates). The parameters for these principles are: maximum-separate-turn, maximum-align-turn, maximum-cohere-turn, minimum-separation-distance. The simulation provides the following information: Current heading, Neighbors in vision radius. When calculating the alignment turn, always choose the shortest path (clockwise or counterclockwise) to align with the average heading of neighbors.

  2

  3
  Provide your final new heading after applying these rules, expressed as an angle in degrees. The result should be in JSON format only, with the keys and values: ’rationale’ (value: your explanation) and ’new-heading’ (value: heading in degrees).
- •

  Possible User Prompt

  [⬇](data:text/plain;base64,VGhlc2UgYXJlIHRoZSBmbG9ja2luZyBwYXJhbWV0ZXJzOgogICAtTWF4aW11bSBzZXBhcmF0ZSB0dXJuOiAxLjUsCiAgIC1NYXhpbXVtIGFsaWduIHR1cm46IDUsCiAgIC1NYXhpbXVtIGNvaGVyZSB0dXJuOiAzLAogICAtTWluaW11bSBzZXBhcmF0aW9uOiAxLjU7CgpUaGlzIGlzIHlvdXIgY3VycmVudCBlbnZpcm9ubWVudDoKICAgLUN1cnJlbnQgaGVhZGluZzogMTM4IGRlZywKICAgLU5laWdoYm9ycyBpbiB2aXNpb24gcmFkaXVzOiBuZWlnaGJvcl8xOiB4OiAwLjUzLCB5OiAtMy42OSwgaGVhZGluZzogMjQ4IGRlZzs=)

  1
  These are the flocking parameters:

  2
   -Maximum separate turn: 1.5,

  3
   -Maximum align turn: 5,

  4
   -Maximum cohere turn: 3,

  5
   -Minimum separation: 1.5;

  6

  7
  This is your current environment:

  8
   -Current heading: 138 deg,

  9
   -Neighbors in vision radius: neighbor\_1: x: 0.53, y: -3.69, heading: 248 deg;
- •

  Possible Response of the LLM

  [⬇](data:text/plain;base64,ewogICJyYXRpb25hbGUiOiBHaXZlbiB0aGUgY3VycmVudCBoZWFkaW5nIG9mIDEzOCBkZWdyZWVzIGFuZCBvbmUgbmVpZ2hib3IgYXQgKDAuNTMsIC0zLjY5KSB3aXRoIGEgaGVhZGluZyBvZiAyNDggZGVncmVlcywgd2UgZmlyc3QgY2FsY3VsYXRlIHRoZSBzZXBhcmF0aW9uIHR1cm4uIFRoZSBkaXN0YW5jZSB0byB0aGUgbmVpZ2hib3IgaXMgc3FydCgwLjUzXjIgKyAoLTMuNjkpXjIpID0gMy43Mywgd2hpY2ggaXMgZ3JlYXRlciB0aGFuIHRoZSBtaW5pbXVtIHNlcGFyYXRpb24gZGlzdGFuY2Ugb2YgMS41LCBzbyBubyBzZXBhcmF0aW9uIHR1cm4gaXMgbmVlZGVkLiBGb3IgYWxpZ25tZW50LCB0aGUgYXZlcmFnZSBoZWFkaW5nIG9mIHRoZSBuZWlnaGJvciBpcyAyNDggZGVncmVlcy4gVGhlIHNob3J0ZXN0IHBhdGggdG8gYWxpZ24gd2l0aCAyNDggZGVncmVlcyBmcm9tIDEzOCBkZWdyZWVzIGlzIGNsb2Nrd2lzZSwgd2hpY2ggaXMgYSB0dXJuIG9mIDExMCBkZWdyZWVzLiBIb3dldmVyLCB0aGUgbWF4aW11bSBhbGlnbiB0dXJuIGlzIDUgZGVncmVlcywgc28gd2UgdHVybiA1IGRlZ3JlZXMgY2xvY2t3aXNlIHRvIDE0MyBkZWdyZWVzLiBGb3IgY29oZXJlbmNlLCBzaW5jZSB0aGVyZSBpcyBvbmx5IG9uZSBuZWlnaGJvciwgdGhlIGF2ZXJhZ2UgaGVhZGluZyB0b3dhcmRzIHRoZSBuZWlnaGJvciBpcyB0aGUgc2FtZSBhcyB0aGUgbmVpZ2hib3IncyBoZWFkaW5nLCAyNDggZGVncmVlcy4gVGhlIHNob3J0ZXN0IHBhdGggdG8gYWxpZ24gd2l0aCAyNDggZGVncmVlcyBmcm9tIDE0MyBkZWdyZWVzIGlzIGNsb2Nrd2lzZSwgd2hpY2ggaXMgYSB0dXJuIG9mIDEwNSBkZWdyZWVzLiBIb3dldmVyLCB0aGUgbWF4aW11bSBjb2hlcmUgdHVybiBpcyAzIGRlZ3JlZXMsIHNvIHdlIHR1cm4gMyBkZWdyZWVzIGNsb2Nrd2lzZSB0byAxNDYgZGVncmVlcy4gVGhlIGZpbmFsIG5ldyBoZWFkaW5nIGlzIDE0NiBkZWdyZWVzLiwKICAibmV3LWhlYWRpbmciOiAxNDYKfQ==)

  1
  {

  2
   "rationale": Given the current heading of 138 degrees and one neighbor at (0.53, -3.69) with a heading of 248 degrees, we first calculate the separation turn. The distance to the neighbor is sqrt(0.53^2 + (-3.69)^2) = 3.73, which is greater than the minimum separation distance of 1.5, so no separation turn is needed. For alignment, the average heading of the neighbor is 248 degrees. The shortest path to align with 248 degrees from 138 degrees is clockwise, which is a turn of 110 degrees. However, the maximum align turn is 5 degrees, so we turn 5 degrees clockwise to 143 degrees. For coherence, since there is only one neighbor, the average heading towards the neighbor is the same as the neighbor’s heading, 248 degrees. The shortest path to align with 248 degrees from 143 degrees is clockwise, which is a turn of 105 degrees. However, the maximum cohere turn is 3 degrees, so we turn 3 degrees clockwise to 146 degrees. The final new heading is 146 degrees.,

  3
   "new-heading": 146

  4
  }

### 5.1 Experiment 1: Ant Foraging with Structured Rule-Based Prompting

The following three variants of the ants foraging simulation were applied:

1. 1.

   The original NetLogo model (henceforth simply called “NetLogo”).
2. 2.

   The model in which the rule-governed ants of the original model are replaced by LLM-governed ants (henceforth called “LLM”).
3. 3.

   A hybrid model in which half of the ants are rule-governed and the other half are LLM-governed (henceforth called “Hybrid”).

In all simulations, we used a colony of 10 ants, three food patches to be exploited, and a stopping criterion of 1000 simulation steps. Moreover, each experiment was repeated five times (with different seeds). The efficacy of each model was assessed by quantifying the total amount of food gathered within these 1000 simulation steps.

#### 5.1.1 Food collection behavior

Figure 3: Comparison of the total food collected across the three tested models: NetLogo (represented by the orange line), LLM (green line), and Hybrid (blue line). This visualization highlights the food collection performance differences among the different models over five runs with different seeds. The lines represent the means, while the shaded areas indicate the standard deviations.

[Figure 3](https://arxiv.org/html/2503.03800v1#S5.F3 "Figure 3 ‣ 5.1.1 Food collection behavior ‣ 5.1 Experiment 1: Ant Foraging with Structured Rule-Based Prompting ‣ 5 Results ‣ Multi-Agent Systems Powered by Large Language Models: Applications in Swarm Intelligence")shows the total amount of food collected over 1000 simulation steps for the three different model variants. NetLogo and LLM perform similarly in terms of the ants’ success in bringing food back to the nest, with both models accumulating approximately 85 units of food by the end of the simulation. However, the standard deviation for NetLogo is around 20, whereas LLM displays a much lower standard deviation of about 7.

In contrast, the Hybrid model outperforms the other two variants, collecting an average of approximately $95$ units of food with a standard deviation of about $12$. This superior performance is due to the combination of the behavioural differences between LLM-guided ants and rule-based ants. The zoomed inset in [Figure 3](https://arxiv.org/html/2503.03800v1#S5.F3 "Figure 3 ‣ 5.1.1 Food collection behavior ‣ 5.1 Experiment 1: Ant Foraging with Structured Rule-Based Prompting ‣ 5 Results ‣ Multi-Agent Systems Powered by Large Language Models: Applications in Swarm Intelligence"), for example, shows that Hybrid starts returning food to the nest at around 20 simulation steps, whereas LLM and NetLogo begin this process at about 40 steps. This means that, for some reason, the Hybrid variant is more efficient in quickly finding food sources.

Figure 4: The average number of steps taken by an ant to return to its nest after picking up food (for food patches 1–3). The green boxplots represent the simulations of LLM, the orange boxplots those of NetLogo, while the blue boxplots show the results of Hybrid. Each boxplot spans from the first to the third quartile, with the vertical line within the box indicating the median. The whiskers extend to represent the minimum and maximum number of steps taken, while the circles denote outliers.


Table 1: Statistics concerning the average amount of steps taken by an ant to return food to the nest.

| Food Patch | Model Variant | Mean | Std | Min | 20% | 50% | 75% | Max |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  | LLM | 23.04 | 3.34 | 16.0 | 21.0 | 23.0 | 25.0 | 48.0 |
| 1 | NetLogo | 21.0 | 5.3 | 13.0 | 17.0 | 20.0 | 24.0 | 46.0 |
|  | Hybrid | 21.98 | 4.32 | 13.0 | 19.0 | 22.0 | 25.00 | 48.0 |
|  | LLM | 32.3 | 3.41 | 25.0 | 31.0 | 32.0 | 34.0 | 49.0 |
| 2 | NetLogo | 30.16 | 4.93 | 22.0 | 27.0 | 29.0 | 32.0 | 45.0 |
|  | Hybrid | 29.46 | 3.90 | 24.0 | 26.0 | 29.0 | 31.00 | 41.0 |
|  | LLM | 39.29 | 2.36 | 36.0 | 37.5 | 40.0 | 41.0 | 42.0 |
| 3 | NetLogo | 38.11 | 2.02 | 35.0 | 37.0 | 38.0 | 39.0 | 42.0 |
|  | Hybrid | 38.75 | 0.96 | 38.0 | 38.0 | 38.5 | 39.25 | 40.0 |

The average number of simulation steps taken by an ant to return to its nest after picking up food is depicted as boxplots in [Figure 4](https://arxiv.org/html/2503.03800v1#S5.F4 "Figure 4 ‣ 5.1.1 Food collection behavior ‣ 5.1 Experiment 1: Ant Foraging with Structured Rule-Based Prompting ‣ 5 Results ‣ Multi-Agent Systems Powered by Large Language Models: Applications in Swarm Intelligence"). This plot illustrates the effectiveness of the three model variants concerning individual ants. Generally, ants in NetLogo (rule-governed ants) require fewer steps than those controlled by the LLM. The LLM-guided ants demonstrate consistent foraging behavior across the different experiments, particularly for food patches 1 and 2. Notably, food patch 1 is the closest to the nest, while food patch 3 is the farthest away.
Detailed statistics, including the three quartiles, mean, standard deviation, and minimum and maximum amounts of food collected, are provided in [Table 1](https://arxiv.org/html/2503.03800v1#S5.T1 "Table 1 ‣ 5.1.1 Food collection behavior ‣ 5.1 Experiment 1: Ant Foraging with Structured Rule-Based Prompting ‣ 5 Results ‣ Multi-Agent Systems Powered by Large Language Models: Applications in Swarm Intelligence").

Figure 5: Average number of steps taken by an ant from leaving the nest to finding a food source. Each boxplot spans from the first to the third quartile, with the vertical line within the box indicating the median. The whiskers extend to represent the minimum and maximum number of steps taken, while the circles denote outliers.

The average number of steps taken by an ant from leaving the nest until finding a food source is represented in [Figure 5](https://arxiv.org/html/2503.03800v1#S5.F5 "Figure 5 ‣ 5.1.1 Food collection behavior ‣ 5.1 Experiment 1: Ant Foraging with Structured Rule-Based Prompting ‣ 5 Results ‣ Multi-Agent Systems Powered by Large Language Models: Applications in Swarm Intelligence"). We specifically track and count ants that are not carrying food and are exploring their environment until they start to carry the food. Hybrid demonstrates consistent performance in finding food patches 1 and 2. In contrast, LLM and NetLogo display a more variable behavior during food searches. Notably, concerning food patch 1, the models exhibit a higher number of outliers, which can be attributed to the ants’ initial exploration of the environment before encountering the food. A notable outlier is observed in the context of NetLogo and food patch 2, where an ant required $720$ steps to find food.
Detailed statistics are listed in [Table 2](https://arxiv.org/html/2503.03800v1#S5.T2 "Table 2 ‣ 5.1.1 Food collection behavior ‣ 5.1 Experiment 1: Ant Foraging with Structured Rule-Based Prompting ‣ 5 Results ‣ Multi-Agent Systems Powered by Large Language Models: Applications in Swarm Intelligence").

Table 2: Statistics for the average amount of steps taken by an ant to find and collect food.

| Food Patch | Model Variant | Mean | Std | Min | 20% | 50% | 75% | Max |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  | LLM | 79.65 | 63.25 | 25.0 | 43.0 | 53.0 | 92.0 | 342.0 |
| 1 | NetLogo | 71.48 | 72.77 | 12.0 | 22.0 | 39.0 | 99.0 | 464.0 |
|  | Hybrid | 71.42 | 68.88 | 12.0 | 31.0 | 47.0 | 86.0 | 466.0 |
|  | LLM | 79.44 | 50.04 | 36.0 | 51.0 | 60.0 | 83.0 | 299.0 |
| 2 | NetLogo | 93.74 | 102.09 | 21.0 | 33.0 | 56.0 | 116.50 | 720.0 |
|  | Hybrid | 73.81 | 74.81 | 22.00 | 32.75 | 42.00 | 78.50 | 326.0 |
|  | LLM | 92.29 | 36.53 | 39.0 | 66.50 | 105.0 | 112.50 | 144.0 |
| 3 | NetLogo | 123.33 | 142.92 | 37.0 | 41.0 | 47.0 | 86.0 | 432.0 |
|  | Hybrid | 61.25 | 6.18 | 53.0 | 58.25 | 63.0 | 66.0 | 66.0 |

### 5.2 Experiment 2: Bird Flocking Simulation with Knowledge-driven Prompts

The following two model variants were experimentally tested and evaluated:

1. 1.

   The original NetLogo model (henceforth simply called “NetLogo”, just like in the ant foraging case).
2. 2.

   The model in which some of the rule-governed birds of the original model are replaced by LLM-governed birds (henceforth called “Hybrid”).

In all simulations, we used a flock of 30 birds and a simulation length of 800 steps. In the case of Hybrid, five of 30 rule-based birds are replaced by LLM-guided birds. Moreover, each experiment was repeated five times (with different seeds). The effectiveness of the flocking behavior is evaluated by measuring the distances and angular disparities between birds across the entire simulation. Figure [6](https://arxiv.org/html/2503.03800v1#S5.F6 "Figure 6 ‣ 5.2 Experiment 2: Bird Flocking Simulation with Knowledge-driven Prompts ‣ 5 Results ‣ Multi-Agent Systems Powered by Large Language Models: Applications in Swarm Intelligence") depicts the flocking simulation executed in the NetLogo environment, featuring a heterogeneous population of 25 rule-based and five LLM-guided birds.

![Refer to caption](https://arxiv.org/html/2503.03800v1/llm_flocking_netlogo_interface.png)


Figure 6: Bird flocking simulation in the NetLogo environment: yellow birds follow rule-based behavior, while red birds are guided by the LLM.

#### 5.2.1 Flocking behavior

Figure 7: Comparison of bird flocking heading differences across two simulation approaches: original NetLogo (blue line) and Hybrid (orange and green lines). In fact, the orange line shows the behavior of the 25 rule-based birds of Hybrid, while the green line presents the behavior of the 5 LLM-guided birds of Hybrid. The lines represent the means, while the shaded areas indicate the standard deviations.


Figure 8: Comparison of average bird distances across the two tested model variants

[Figure 7](https://arxiv.org/html/2503.03800v1#S5.F7 "Figure 7 ‣ 5.2.1 Flocking behavior ‣ 5.2 Experiment 2: Bird Flocking Simulation with Knowledge-driven Prompts ‣ 5 Results ‣ Multi-Agent Systems Powered by Large Language Models: Applications in Swarm Intelligence")compares the differences in the birds’ heading directions between two model variants, as outlined above. However, note that the heading differences between the rule-based birds and all other birds in model variant Hybrid (orange line) are separated from the heading differences between the LLM-guided birds and all other birds of Hybrid (green line).

The results shown in [Figure 7](https://arxiv.org/html/2503.03800v1#S5.F7 "Figure 7 ‣ 5.2.1 Flocking behavior ‣ 5.2 Experiment 2: Bird Flocking Simulation with Knowledge-driven Prompts ‣ 5 Results ‣ Multi-Agent Systems Powered by Large Language Models: Applications in Swarm Intelligence") allow to make the following observations. While the two bird types of Hybrid show a similar evolution of the heading differences, the rule-based birds of the original NetLogo model show somewhat lower heading differences. We anticipate that with longer simulation runs, the heading differences of the two model variants would converge to similar values. We also observed that the LLM-guided birds tend to congregate at the outer peripheries of the flocks, positioning themselves further away from the flocks’ center. An example of this behavior is visualized in [Figure 6](https://arxiv.org/html/2503.03800v1#S5.F6 "Figure 6 ‣ 5.2 Experiment 2: Bird Flocking Simulation with Knowledge-driven Prompts ‣ 5 Results ‣ Multi-Agent Systems Powered by Large Language Models: Applications in Swarm Intelligence") (see the flock on the right) and also illustrated in [Figure 8](https://arxiv.org/html/2503.03800v1#S5.F8 "Figure 8 ‣ 5.2.1 Flocking behavior ‣ 5.2 Experiment 2: Bird Flocking Simulation with Knowledge-driven Prompts ‣ 5 Results ‣ Multi-Agent Systems Powered by Large Language Models: Applications in Swarm Intelligence") which indicates the average distances between birds. We hypothesize that this rather “conservative” behavior of the LLM-guided birds contributes to greater heading differences among the rule-based birds of Hybrid, as this behavior introduces slight perturbations in the flocking dynamics. Another possible interpretation involves the internal representation of distance within the LLM. Although we define distance in Euclidean space and provide these distances as float values to the language model, it may interpret and represent distances in a different manner.

Figure 9: Collisions between birds. A collision occurs when the distance $d$ between birds is at most one (that is, $d\leq 1$).

We further investigated the behavior of rather staying at the border of flocks by examining collisions between birds, which are defined as occasions in which the Euclidean distance between two birds is smaller than one. In fact, it turns out that, throughout a simulation, the LLM-guided birds try to avoid collisions; see [Figure 9](https://arxiv.org/html/2503.03800v1#S5.F9 "Figure 9 ‣ 5.2.1 Flocking behavior ‣ 5.2 Experiment 2: Bird Flocking Simulation with Knowledge-driven Prompts ‣ 5 Results ‣ Multi-Agent Systems Powered by Large Language Models: Applications in Swarm Intelligence"). In contrast, the rule-based birds from Hybrid and those from NetLogo, exhibit a much higher number of collisions.

Figure 10: Average number of neighbors: A neighbor is defined as any entity within a distance $d$ such that $1\leq d\leq 5$, thereby excluding collisions. Furthermore, we establish a heading difference criterion of $h\leq 15$.


Table 3: Statistics for the average number of flocking neighbors. The values are aggregated over all steps and experiments.

| Model Variant | Mean | Median | Std | Min | 20% | 50% | 75% | Max |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Hybrid (LLM) | 6.27 | 5.40 | 4.23 | 1.00 | 2.75 | 5.40 | 8.63 | 17.80 |
| Hybrid (NetLogo) | 9.23 | 9.44 | 4.30 | 1.04 | 6.44 | 9.44 | 12.25 | 16.76 |
| NetLogo | 11.42 | 11.24 | 6.27 | 1.04 | 6.02 | 11.24 | 16.87 | 22.56 |

Furthermore, triggered by our earlier observations, we examined the average number of neighbors of a bird, as shown in [Figure 10](https://arxiv.org/html/2503.03800v1#S5.F10 "Figure 10 ‣ 5.2.1 Flocking behavior ‣ 5.2 Experiment 2: Bird Flocking Simulation with Knowledge-driven Prompts ‣ 5 Results ‣ Multi-Agent Systems Powered by Large Language Models: Applications in Swarm Intelligence"). Hereby, we define two birds as neighbors if they are at a distance greater than one (no collision) and within a distance $d$ of at most five (that is, $1<d\leq 5$). Moreover, we require a heading difference of $h\leq 15$. As expected, rule-based birds exhibit the highest number of neighbors, while the LLM-guided birds display the lowest number, a result of their conservative behavior. Statistics on the average number of flocking neighbors can be found in [Table 3](https://arxiv.org/html/2503.03800v1#S5.T3 "Table 3 ‣ 5.2.1 Flocking behavior ‣ 5.2 Experiment 2: Bird Flocking Simulation with Knowledge-driven Prompts ‣ 5 Results ‣ Multi-Agent Systems Powered by Large Language Models: Applications in Swarm Intelligence").
