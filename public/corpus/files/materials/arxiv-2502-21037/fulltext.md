---
id: arxiv-2502-21037-text
type: material
title: The amplifier effect of artificial agents in social contagion
work_id: arxiv-2502-21037
source_url: https://arxiv.org/html/2502.21037v2
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять
  с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.
language: original
sha256_text: 3931e51ef8b86b1d7cf295c7cee01e648762e59360b179711484dcb6333a9d52
---

> Источник: [https://arxiv.org/html/2502.21037v2](https://arxiv.org/html/2502.21037v2). Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.

# The amplifier effect of artificial agents in social contagion

Eric Hitz, Mingmin Feng, Radu Tanase, René Algesheimer, Manuel S. Mariani
Email: [manuel.mariani@business.uzh.ch](mailto:manuel.mariani@business.uzh.ch)
Affiliation: Department of Business Administration, University of Zurich, Switzerland

###### Abstract

Recent advances in artificial intelligence have led to the proliferation of artificial agents in social contexts, ranging from education to online social media and financial markets, among many others. The increasing rate at which artificial and human agents interact makes it urgent to understand the consequences of human-machine interactions for the propagation of new ideas, products, and behaviors in society.
Across two distinct empirical contexts, we find here that artificial agents lead to significantly faster and wider social contagion.
To this end, we replicate a choice experiment previously conducted with human subjects by using artificial agents powered by large language models (LLMs). We use the experimental results to measure the adoption thresholds of artificial agents and their impact on the spread of social contagion. We find that artificial agents tend to exhibit lower adoption thresholds than humans, which leads to wider network-based social contagions. Our findings suggest that the increased presence of artificial agents in real-world networks may accelerate behavioral shifts, potentially in unforeseen ways.

The increasing role of artificial agents in human activities is not guaranteed to promote more inclusive, healthy, and sustainable societies [[1](https://arxiv.org/html/2502.21037v2#bib.bib1)].
As a result, even before the recent popularization of large language models (LLMs), scholars from multiple disciplines have called for the development of an interdisciplinary
science of machine behavior where the behavior of AI agents is studied with similar tools to those traditionally used to understand human behaviors [[2](https://arxiv.org/html/2502.21037v2#bib.bib2)].
The proliferation of large language models such as ChatGPT and the increased impact of algorithms on large-scale social dynamics makes it urgent to advance in this direction [[1](https://arxiv.org/html/2502.21037v2#bib.bib1), [3](https://arxiv.org/html/2502.21037v2#bib.bib3)]. However, despite some early efforts [[4](https://arxiv.org/html/2502.21037v2#bib.bib4), [5](https://arxiv.org/html/2502.21037v2#bib.bib5)], the impacts of autonomous agents driven by LLMs (hereafter, artificial agents) on social contagion processes have not yet been widely examined.
Here we ask: What role could artificial agents play in the spreading of social contagions?
To answer,
we consider simple artificial agents obtained by prompting popular LLMs (OpenAI’s gpt-3.5-turbo and Google’s gemini-1.5-flash) with the demographic information and political orientation of the human subjects in a previous study [[6](https://arxiv.org/html/2502.21037v2#bib.bib6)].
We perform the first measurement of the artificial agents’ threshold, namely, the level of social reinforcement they need before supporting a new policy or adopting a new technology [[7](https://arxiv.org/html/2502.21037v2#bib.bib7)].
Our findings indicate that across both contexts, compared to human subjects, artificial agents exhibit a lower threshold, which invariably results in wider diffusion. The higher the proportion of artificial agents in a human-LLM network, the wider the diffusion.

![Refer to caption](https://arxiv.org/html/2502.21037v2/result_plot.png)


Fig. 1: Social contagion driven by artificial agents. (A, D) Attribute importance in the PS and AA experiments for human and artificial subjects. The social signal plays a much more important role in both GPT-based and Gemini-based artificial subjects’ choices, whereas the ranking by the importance of the other attributes remains largely unchanged. (B, E) Average threshold of subjects in the PS experiment and the AA experiment for both human and artificial subjects. The error bars represent the 95% confidence intervals (CI) for the averaged thresholds across all energy policies/messaging apps. Artificial subjects tend to exhibit significantly lower thresholds. (C, F) Adoption rate as a function of the proportion of artificial agents in the network, with a seeding rate of 1% for each diffusion, for both the policy support experiment and the app adoption experiment. The error bars represent the 95% CI for the average adoption rate across all energy policies/messaging apps. The higher the proportion of artificial agents in a human-LLM network, the wider the diffusion.

## Comparing human and artificial agents’ thresholds

The literature on social contagion defines the adoption threshold as the minimum level of exposure to a new product or behavior required for an individual to adopt it [[8](https://arxiv.org/html/2502.21037v2#bib.bib8)].
Artificial agents may exhibit higher thresholds than human subjects if, when deciding whether to adopt a new product or behavior, they are less susceptible to social influence [[9](https://arxiv.org/html/2502.21037v2#bib.bib9)] – e.g., by outweighing the product’s attributes compared to social cues.
Conversely, artificial agents may exhibit lower adoption thresholds if:
(1) they integrate social cues into their decision-making more heavily than humans (e.g., as a result of being trained with research articles on social theories); or (2) they perceive the factors that contribute to high thresholds – such as financial costs, potential reputational damage, or uncertainty [[8](https://arxiv.org/html/2502.21037v2#bib.bib8)] – to a lesser extent than humans.

Here, we aim to advance this debate by providing empirical evidence on the artificial agents’ thresholds.
To this end,
we adopt two different LLMs – OpenAI’s gpt-3.5-turbo model (hereafter, GPT) and Google’s gemini-flash-1.5 model (hereafter, Gemini) – to simulate the responses of survey participants to the same two choice-based conjoint experiments performed in ref. [[6](https://arxiv.org/html/2502.21037v2#bib.bib6)] with human subjects.
In conjoint experiments, participants face a set of choice tasks where they need to choose one among several hypothetical products or behaviors (each characterized by a set of attributes) or the status-quo option to not adopt any [[10](https://arxiv.org/html/2502.21037v2#bib.bib10)].
The two experiments cover two choice contexts where the complex contagion theory is expected to apply [[8](https://arxiv.org/html/2502.21037v2#bib.bib8)]: (1) political views support [[11](https://arxiv.org/html/2502.21037v2#bib.bib11)] (where decision-makers choose which energy policy to support, if any; hereafter referred to as PS experiment) and (2) new social technology adoption [[7](https://arxiv.org/html/2502.21037v2#bib.bib7)] (where decision-makers select which instant messaging app to switch to, if any; hereafter referred to as the AA experiment; see Supplementary Note [I.1](https://arxiv.org/html/2502.21037v2#S1.SS1 "I.1 Overview of the original experiments ‣ I Choice-based conjoint experiments with artificial subjects ‣ The amplifier effect of artificial agents in social contagion") for all details).
In our implementation of the surveys with artificial agents, we prompted the LLMs by including the demographic information and political orientation of the human subjects from ref. [[6](https://arxiv.org/html/2502.21037v2#bib.bib6)], which is expected to reduce differences between human participants and LLM agents [[12](https://arxiv.org/html/2502.21037v2#bib.bib12)] (see Supplementary Note [I.2](https://arxiv.org/html/2502.21037v2#S1.SS2 "I.2 Implementation with ChatGPT/Gemini ‣ I Choice-based conjoint experiments with artificial subjects ‣ The amplifier effect of artificial agents in social contagion") for all the implementation details).

We analyze the resulting choice data through the method adopted by ref. [[6](https://arxiv.org/html/2502.21037v2#bib.bib6)] for human subjects, which allows us to estimate the threshold of each artificial agent for each alternative product (see Supplementary Note [I.3](https://arxiv.org/html/2502.21037v2#S1.SS3 "I.3 Choice data analysis ‣ I Choice-based conjoint experiments with artificial subjects ‣ The amplifier effect of artificial agents in social contagion")).
Rooted in random utility theory, the method assumes that an individual’s utility from adopting is linear in the social signal received by the individual about the product. Thus, one can derive a simple formula for the individual threshold [[7](https://arxiv.org/html/2502.21037v2#bib.bib7)], whose parameters can be estimated via a Hierarchical Bayes algorithm as in standard choice-based conjoint analysis [[6](https://arxiv.org/html/2502.21037v2#bib.bib6)].
This procedure places us in an ideal position to directly compare the threshold distribution between human subjects and artificial agents.

In contrast to previous hypotheses [[9](https://arxiv.org/html/2502.21037v2#bib.bib9)], we find that artificial agents exhibit a higher susceptibility to social influence than human subjects. In particular, the social signal has high importance (see Supplementary Note [I.3](https://arxiv.org/html/2502.21037v2#S1.SS3 "I.3 Choice data analysis ‣ I Choice-based conjoint experiments with artificial subjects ‣ The amplifier effect of artificial agents in social contagion") for the importance measurement details) for the artificial agents’ choices even in a context where it was not important for the human subjects’ choices (i.e., in the PS experiment).
Specifically in the AA experiment, the social signal is the most important attribute for both human and artificial agents.
More surprisingly, in the PS experiment, the social signal is the first and second important attribute for the artificial agents driven by GPT and Gemini, respectively [average attribute importance $51.4\%$ (SEM $=0.4\%$) and $32.4\%$ (SEM $=0.2\%$) for GPT and Gemini, respectively], although it was only ranked 6th out of 7th for human subjects (average importance $12.8\%$ (SEM $=0.5\%$), see Fig. [1](https://arxiv.org/html/2502.21037v2#S0.F1 "Fig. 1 ‣ The amplifier effect of artificial agents in social contagion")A).
With minor discrepancies, the rankings of other attributes’ importance are largely consistent across artificial and human subjects (see Figs. [1](https://arxiv.org/html/2502.21037v2#S0.F1 "Fig. 1 ‣ The amplifier effect of artificial agents in social contagion")A, D).
From random utility theory (see Supplementary Note [I.3](https://arxiv.org/html/2502.21037v2#S1.SS3 "I.3 Choice data analysis ‣ I Choice-based conjoint experiments with artificial subjects ‣ The amplifier effect of artificial agents in social contagion")), the threshold of a decision maker for a given alternative decreases with their susceptibility to social influence [[7](https://arxiv.org/html/2502.21037v2#bib.bib7), [6](https://arxiv.org/html/2502.21037v2#bib.bib6)].
Therefore, we expect the higher importance of social signals for the artificial agents’ choices in the PS experiment to translate into a lower threshold, which is confirmed by our results (Fig. [1](https://arxiv.org/html/2502.21037v2#S0.F1 "Fig. 1 ‣ The amplifier effect of artificial agents in social contagion")B, E).

## Contagion amplifiers

The relevance of the threshold distributions for diffusion outcomes [[6](https://arxiv.org/html/2502.21037v2#bib.bib6)] motivates us to examine theoretically whether complex contagions would spread wider in social networks composed of artificial agents compared to networks composed of human subjects.
To answer this question, we perform calibrated simulations of complex contagion on empirical networks, where a proportion $1-q$ of the nodes is occupied by human agents, a proportion $q$ by artificial agents (see Fig. [2](https://arxiv.org/html/2502.21037v2#Sx2.F2 "Fig. 2 ‣ Contagion amplifiers ‣ The amplifier effect of artificial agents in social contagion")); the human and artificial agents make adoption decisions determined by their thresholds estimated in the conjoint experiments with human subjects and artificial agents, respectively (see Supplementary Note [II](https://arxiv.org/html/2502.21037v2#S2 "II Diffusion simulation ‣ The amplifier effect of artificial agents in social contagion")).
For each study and for each LLM, we measure the adoption rate for 36 products/behaviors in 18 empirical networks for 6 values of $q$ under two seeding policies (top degree and random), which leads to 31,104 distinct diffusion simulations (see Supplementary Note [II](https://arxiv.org/html/2502.21037v2#S2 "II Diffusion simulation ‣ The amplifier effect of artificial agents in social contagion")).

Across both contexts, increasing the proportion $q$ of artificial agents widens the reach of the complex contagion.
This holds true both in the PS experiment (Fig. [1](https://arxiv.org/html/2502.21037v2#S0.F1 "Fig. 1 ‣ The amplifier effect of artificial agents in social contagion")C) and the AA experiment (Fig. [1](https://arxiv.org/html/2502.21037v2#S0.F1 "Fig. 1 ‣ The amplifier effect of artificial agents in social contagion")F), both when the contagion originates from central nodes and when it originates from randomly-selected nodes.
These findings indicate that artificial subjects act as “contagion amplifiers”: For example, in a social network comprising $20\%$ GPT agents with 1% randomly seeded nodes, on average, energy policies would receive 1.14 times more support than in a human-only network;
Similarly, under the same conditions, 2.22 times more nodes would decide to switch to a new messaging app compared to a human-only network.

![Refer to caption](https://arxiv.org/html/2502.21037v2/figs/net_illustration.png)


Fig. 2: An illustrative human-LLM social network with $20$ nodes and different proportions of artificial agents. A proportion $1-q$ of the nodes is populated by human agents and a proportion $q$ by artificial agents. For each value of $q$, the positions of artificial and human agents are randomly assigned. The three panels depict one instance for $q=0.1$ (A), $q=0.5$ (B), and $q=0.9$ (C).

## Discussion

Our findings suggest three promising avenues for future research.
One thought-provoking conjecture – supported by the simulated diffusion patterns reported here – is that once artificial agents are injected into a social system, contagion will spread wider.
At the same time, it remains open to testing the amplifier effect on real-world platforms where artificial and human decision-makers interact longitudinally [[13](https://arxiv.org/html/2502.21037v2#bib.bib13)], and to delimit in what conditions we can expect it to occur.
Particularly in high-uncertainty environments, where social signals play a stronger role in guiding behavior [[8](https://arxiv.org/html/2502.21037v2#bib.bib8)], artificial agents may accelerate diffusion in ways that are difficult to anticipate. This raises a crucial question for policymakers: How can the resulting collective behavioral patterns be stewarded toward healthy systemic outcomes? Addressing this challenge will likely require the integration of experimental and simulation techniques [[1](https://arxiv.org/html/2502.21037v2#bib.bib1), [6](https://arxiv.org/html/2502.21037v2#bib.bib6)], ensuring that artificial agents contribute to beneficial rather than destabilizing social dynamics.

A second important conjecture is that using current LLMs to predict the reach of a social contagion process may systematically overestimate the actual size of the contagion.
While pioneering studies have highlighted the LLMs’ ability to mirror human behaviors – including cognitive biases [[14](https://arxiv.org/html/2502.21037v2#bib.bib14)] and troubling stereotypes [[15](https://arxiv.org/html/2502.21037v2#bib.bib15)] – our findings suggest a need for greater scrutiny in contexts where social influence plays a major role. Future research should investigate the conditions under which LLMs can accurately predict collective human behavior and how their design and prompting can be optimized for more realistic simulations.

Finally, an important assumption in the analyzed experiments is that the agents are only influenced by the aggregate social signal they receive about the alternatives, encoded in the fraction of friends who have already adopted it.
Future studies should investigate whether agents’ ability to differentiate between human and artificial counterparts – when such ability is present – influences their decision-making and diffusion processes, thereby refining our understanding of hybrid human-AI systems and their emergent properties.

## References

## References

- [1]

  Joseph B Bak-Coleman, Mark Alfano, Wolfram Barfuss, Carl T Bergstrom, Miguel A Centeno, Iain D Couzin, Jonathan F Donges, Mirta Galesic, Andrew S Gersick, Jennifer Jacquet, et al.
  Stewardship of global collective behavior.
  Proceedings of the National Academy of Sciences, 118(27), 2021.
- [2]

  Iyad Rahwan, Manuel Cebrian, Nick Obradovich, Josh Bongard, Jean-François Bonnefon, Cynthia Breazeal, Jacob W Crandall, Nicholas A Christakis, Iain D Couzin, Matthew O Jackson, et al.
  Machine behaviour.
  Nature, 568(7753):477–486, 2019.
- [3]

  Levin Brinkmann, Fabian Baumann, Jean-François Bonnefon, Maxime Derex, Thomas F Müller, Anne-Marie Nussberger, Agnieszka Czaplicka, Alberto Acerbi, Thomas L Griffiths, Joseph Henrich, et al.
  Machine culture.
  Nature Human Behaviour, 7(11):1855–1868, 2023.
- [4]

  Giordano De Marzo, Luciano Pietronero, and David Garcia.
  Emergence of scale-free networks in social interactions among large language models.
  arXiv preprint arXiv:2312.06619, 2023.
- [5]

  Yikang Lu, Alberto Aleta, Chunpeng Du, Lei Shi, and Yamir Moreno.
  Llms and generative agent-based models for complex systems research.
  Physics of Life Reviews, 2024.
- [6]

  Radu Tanase, René Algesheimer, and Manuel S Mariani.
  Integrating behavioral experimental findings into dynamical models to inform social change interventions.
  arXiv preprint arXiv:2405.13224, 2024.
- [7]

  Jacob Goldenberg, Barak Libai, and Eitan Muller.
  The chilling effects of network externalities.
  International Journal of Research in Marketing, 27(1):4–15, 2010.
- [8]

  Douglas Guilbeault, Joshua Becker, and Damon Centola.
  Complex contagions: A decade in review.
  Complex Spreading Phenomena in Social Systems, pages 3–25, 2018.
- [9]

  Milena Tsvetkova, Taha Yasseri, Niccolo Pescetelli, and Tobias Werner.
  A new sociology of humans and machines.
  Nature Human Behaviour, 8(10):1864–1876, 2024.
- [10]

  Vithala R Rao.
  Applied conjoint analysis.
  Springer Science & Business Media, 2014.
- [11]

  Silvia Pianta, Adrian Rinscheid, and Elke U Weber.
  Carbon capture and storage in the united states: perceptions, preferences, and lessons for policy.
  Energy Policy, 151:112149, 2021.
- [12]

  Lisa P Argyle, Ethan C Busby, Nancy Fulda, Joshua R Gubler, Christopher Rytting, and David Wingate.
  Out of one, many: Using language models to simulate human samples.
  Political Analysis, 31(3):337–351, 2023.
- [13]

  Moshe Glickman and Tali Sharot.
  How human–ai feedback loops alter human perceptual, emotional and social judgements.
  Nature Human Behaviour, pages 1–15, 2024.
- [14]

  Thilo Hagendorff, Sarah Fabi, and Michal Kosinski.
  Human-like intuitive behavior and reasoning biases emerged in large language models but disappeared in chatgpt.
  Nature Computational Science, 3(10):833–838, 2023.
- [15]

  Myra Cheng, Esin Durmus, and Dan Jurafsky.
  Marked personas: Using natural language prompts to measure stereotypes in language models.
  arXiv preprint arXiv:2305.18189, 2023.
- [16]

  Sawtooth Software.
  CBC Questionnaires and Design Strategy, Accessed on May 16th, 2024.
- [17]

  Greg M Allenby and Peter E Rossi.
  Hierarchical bayes models.
  The handbook of marketing research: Uses, misuses, and future advances, pages 418–440, 2006.
- [18]

  Ryan Sermas.
  ChoiceModelR: Choice Modeling in R, 2022.
  R package version 1.3.0.
- [19]

  Kathleen Mullan Harris, Carolyn Tucker Halpern, Eric A. Whitsel, Jon M. Hussey, Ley A. Killeya-Jones, Joyce Tabor, and Sarah C. Dean.
  Cohort Profile: The National Longitudinal Study of Adolescent to Adult Health (Add Health).
  International Journal of Epidemiology, 48(5):1415–1415k, October 2019.
- [20]

  Douglas Guilbeault and Damon Centola.
  Topological measures for identifying and predicting the spread of complex contagions.
  Nature Communications, 12(1):1–9, 2021.
- [21]

  Albert-László Barabási and Márton Pósfai.
  Network Science.
  Cambridge University Press, Cambridge, 1st edition edition, 2016.
- [22]

  Mark Newman.
  Networks.
  Oxford University Press, 2018.

Supplementary Material for: “The amplifier effect of artificial agents in social contagion”

Eric Hitz, Mingmin Feng, Radu Tanase, René Algesheimer, Manuel S. Mariani

## I Choice-based conjoint experiments with artificial subjects

### I.1 Overview of the original experiments

The conjoint studies described in the main article have been conducted by [[6](https://arxiv.org/html/2502.21037v2#bib.bib6)] with human participants recruited from Prolific (296 participants in the PS study; 300 participants in the AA study).
We removed from the original data all participants who had missing demographic data that was needed to prompt artificial agents. This resulted in 277/284 participants in the PS/AA study, whose data was used in this article.

#### I.1.1 The policy support study (PS)

##### Study design and data

In the original study 296 US participants were recruited from Prolific.
The resulting sample was representative for the US population in terms of gender and ethnicity.
Participants were told to imagine that a new environmental policy to capture and store carbon could be implemented in their state.
Participants were presented with 15 choice sets, each consisting of three policies and a none option.
The policies differed in terms of policy type (ban/subsidy/tax), cost ($4/$9/$14/$19), the beginning of policy implementation (2025/2035/2045/2055), required distance to residential areas (2 miles/5 miles/10 miles/50 miles), the organization endorsing the policy (Carbon Capture Coalition/Greenpeace/Democratic Party/Republican Party) and the (hypothetical) percentage of friends endorsing the policy (1%/23%/45%/76%/98%).
Except for the last attribute (percentage of friends endorsing the policy), the policies described closely follow [[11](https://arxiv.org/html/2502.21037v2#bib.bib11)].
Participants had to select from each choice set which policy they would endorse or select the none option.
Each participant received a different set of choice tasks, generated by the Sawtooth software using the balanced overlap method [[16](https://arxiv.org/html/2502.21037v2#bib.bib16)].

##### Estimation

We estimated the individual partworth coefficients using the Hierarchical Bayes [[17](https://arxiv.org/html/2502.21037v2#bib.bib17)] algorithm implemented in the function [choicemodelr](https://choicemodelr) from the R package [ChoiceModelR](https://ChoiceModelR) [[18](https://arxiv.org/html/2502.21037v2#bib.bib18)].
We used 30’000 MCMC iterations, the first 10’000 for burn in and the remaining 20’000 for parameter estimation.
The attribute Percentage of friends who endorse the policy was coded as numeric and all remaining attributes were categorical.
More implementation details and an evaluation of the model quality can be found in the Supplementary Material of [[6](https://arxiv.org/html/2502.21037v2#bib.bib6)].

#### I.1.2 The app adoption study (AA)

##### Study design and data

In the original study 300 US participants have been recruited from a convenience sample on Prolific.
Participants were told to imagine a new instant messaging app available on the market.
Participants were presented with 14 choice sets, each consisting of three instant messaging apps and a none option.
The apps differed in terms of accessibility (mobile/web), authentication (simple/two-factor/multi-factor), customization level (low/medium/high), support for video calls (multi-person/one-to-one), and the (hypothetical) percentage of friends who are already using the app (1%/23%/45%/76%/98%).
Participants had to select from each choice set which app they would use or to select the none option.
Each participant received a different set of choice tasks, generated by the Sawtooth software using the balanced overlap method.

##### Estimation

Similarly to the PS Study, we estimated the individual partworth coefficients using the Hierarchical Bayes algorithm with 30’000 MCMC iterations, the first 10’000 for burn in and the remaining 20’000 for parameter estimation.
The attribute Percentage of friends who already use the app was coded as numeric and all remaining attributes were categorical.
More implementation details and an evaluation of the model quality can be found in the Supplementary Material of [[6](https://arxiv.org/html/2502.21037v2#bib.bib6)].

### I.2 Implementation with ChatGPT/Gemini

We replicated both studies with artificial agents as follows.
We constructed a number of artificial agents equal to the number of participants in the study.
The agent was initialized with a prompt consisting of three sections: demographic information (age, gender, highest education level, education subject, and income; PS experiment also includes political orientation and social media connections) corresponding to one human participant in the survey; (2) description of the study as presented to the human participant; and (3) the attributes describing the options in the choice set, as presented to the human participant.
Subsequently, the artificial agent was presented with the choice sets (same number as in the original experiments) and asked to select which option in the choice set it would choose or to select the none option.
Examples of prompts can be found in Section [I.2.1](https://arxiv.org/html/2502.21037v2#S1.SS2.SSS1 "I.2.1 Prompt example PS Study ‣ I.2 Implementation with ChatGPT/Gemini ‣ I Choice-based conjoint experiments with artificial subjects ‣ The amplifier effect of artificial agents in social contagion") (PS Study) and Section [I.2.2](https://arxiv.org/html/2502.21037v2#S1.SS2.SSS2 "I.2.2 Prompt example AA Study ‣ I.2 Implementation with ChatGPT/Gemini ‣ I Choice-based conjoint experiments with artificial subjects ‣ The amplifier effect of artificial agents in social contagion") (AA Study)

We used the same prompt with two LLMs: GPT-3.5-turbo (thereafter, GPT-3.5) from OpenAI and Gemini Flash-1.5
from Google with the default temperature setting of one.
Additionally, for GPT-3.5 we varied the temperature levels – high (two) and low (zero) —, while for Gemini Flash-1.5 we used the default setting of one.
The temperature parameter controls the randomness in the answers provided by the AI agent.
Higher temperature values result in more diverse answers compared to lower temperature values.
At temperature zero the answers are completely deterministic.
The main article contains the results for the default temperature settings.
We note the results are consistent for all temperature values.

#### I.2.1 Prompt example PS Study

We present below an example of a prompt used in the PS Study. We made minor layout adjustments to enhance readability.

You are a 35-44 years old male, your highest level of school you have completed or the highest degree you have received is Master’s degree, your major subject of study was Science, your total yearly household income before taxes is approximately 75,000 to 99,000 you describe your political orientation as liberal and anti-traditional.

Carbon capture and storage (CCS) is a set of technologies aimed at capturing, transporting, and storing carbon dioxide (CO2) emitted from industrial facilities and power plants that use fossil fuels like coal and natural gas. CO2 emissions are one of the major contributors to climate change. The goal of CCS is to prevent CO2 from reaching the atmosphere by injecting it in suitable underground geological formations - depleted oil and gas fields and deep saline formations - for permanent storage.

Some scientific studies promote CCS as a prospective solution to climate change, as it could significantly contribute to the reduction of CO2 emissions, while other studies emphasize that CCS is a very costly technology and there is a need to investigate its potential risks in order to ensure that its deployment would not have an adverse impact on people and the environment. Political discussions currently focus on how to regulate and implement the use of CCS.

You may or may not agree with scaling up CCS, but if a scale-up were to be implemented in your state, you may still have different preferences as to specific scenarios. In the following, we will sketch out some scenarios for a scale-up of CCS. Please take a look at these scenarios and evaluate them.

The below-mentioned policy scenarios each consist of 6 aspects:

1. 1.

   Policy type: Which policies should be implemented to promote CCS? a) A ban on the construction of new fossil fuel power plants without CCS in your state: According to this policy, no new coal- or gas-fired power stations can be built in your state without including CCS. b) Government subsidies for CCS in your state: Your state government could subsidize CCS projects. This would make deployment of the technology more economically attractive. c) Increase in taxes on fossil fuel power generation without CCS in your state: Such a policy would make fossil fuel power generation with no CCS more expensive.
2. 2.

   Policy cost: All policies to scale up CCS would produce some costs for American consumers. However, the exact amount depends on many factors, such as the concrete policy calibration, economic conditions, etc. Estimates for a scale-up policy currently range between costs of US$ 4 and 19 per household (per month).
3. 3.

   Beginning of policy implementation: When should the policy be implemented? Various scenarios include implementation in 2025, 2035, 2045 or 2055.
4. 4.

   Distance from residential areas: CCS facilities are currently planned in many American states. Some people fear that they could negatively affect buildings and the safety of communities. Different rules regarding the required distance of CCS facilities from residential areas are currently being discussed: 2 miles / 5 miles / 10 miles / 50 miles.
5. 5.

   Policy endorsement: Various stakeholders (e.g., Greenpeace or the U.S.-based Carbon Capture Coalition (ccc)) and political parties (Democrats(dp), Republicans(rp)) have their own opinions on policy proposals to scale up CCS.
6. 6.

   Percentage of your friends who endorse the policy scenario: Think about your friends and imagine you could know if they endorse a policy scenario. This attribute represents the percentage of your friends, out of your total number of friends, who endorse it.

You will repeatedly see three different policy scenarios and I will ask you which one you would prefer. If you think you wouldn’t prefer any, feel free to choose the None option.

- •

  Option 1 is a subsidies policy, costs $9 per household per month, will be implemented in 2035, the required distance to residential areas is 5 miles, is endorsed by dp, and 45% of your friends endorse it.
- •

  Option 2 is a ban policy, costs $14 per household per month, will be implemented in 2045, the required distance to residential areas is 10 miles, is endorsed by greenpeace, and 23% of your friends endorse it.
- •

  Option 3 is a tax policy, costs $4 per household per month, will be implemented in 2025, the required distance to residential areas is 2 miles, is endorsed by ccc, and 76% of your friends endorse it.
- •

  Option 4 is to choose no policy.

Which option do you choose? You have to pick one option. Don’t explain your choice, just name the option you choose.

#### I.2.2 Prompt example AA Study

We present below an example of a prompt used in the AA Study. We made minor layout adjustments to enhance readability.

You are a 35-44 years old male, your highest level of school you have completed or the highest degree you have received is Graduate or professional degree and your total household income during the past 12 months was More than 100,000 pounds.

Imagine there are several new multiple instant messaging apps on the market. All apps are free and are similar to each other in all but the aspects described below. Furthermore, we ask you to imagine several of your friends are already using such an app. We will show you this information as one of the app attributes.

The apps differ in terms of the following attributes:

1. 1.

   Accessibility: Instant messaging apps differ in the way you can access them. They can be:

   - •

     Mobile only: A mobile only app is specifically developed for smartphones and tablets. It takes full advantage of mobile device features such as push notifications, camera integration, and location services. It offers a seamless, on-the-go communication experience, but it’s not accessible on desktop or web browsers.
   - •

     Web accessible: Web-accessible instant messaging apps expand their reach beyond mobile devices. They allow users to access their chats and conversations via web browsers on desktop computers or laptops. This versatility enables seamless transition between devices, convenient typing with a physical keyboard, and the ability to share files and links more easily on a larger screen.
2. 2.

   Authentication: Authentication is important to safeguard your personal information and ensure that your conversations remain private. The apps can use one of the three levels of authentication described below, sorted by the least to the most secure:

   - •

     Simple authentication: Login with username and password.
   - •

     Two-factor authentication: Two-factor authentication (2FA) requires an additional authentication method beyond your username and password. This involves receiving a one-time verification code via SMS or email, which you must enter alongside your password to access your account.
   - •

     Multi-factor authentication: In addition to your username, password, and the SMS or email verification code, you must also verify your identity using a fingerprint scanner or a hardware token (a device connected to your mobile or computer.)
3. 3.

   Customisation level: The customization level determines how much you can personalize your messaging experience. It can take one of the following values:

   - •

     Low: You can adjust the basic settings, like security and notification preferences.
   - •

     Medium: In addition to the basic settings, you have the flexibility to shape your chat organization, such as creating chat lists and pinning important conversations to the top.
   - •

     High: Additionally, you have the option to customize themes and appearance, including elements like color schemes, backgrounds, fonts used and many others.
4. 4.

   Video calls: To make the most of your video communication experience, apps focus either on One-on-one or multi-person video calls.

   - •

     One-on-One: The app provides a straightforward and personal video calling experience designed and optimised for one-on-one interactions. The app does not support video calls between more than two people at once.
   - •

     Multi-person: The app offers a versatile video calling feature, allowing you to connect with multiple participants simultaneously.

I will repeatedly show you three apps which differ in terms of the attributes previously described and ask you to select which one (out of the three) you would use instead of the app you are currently using. If you don’t like any of the options, please feel free to select the None option.

- •

  Option 1 is mobile only, has multi-factor authentication, a high customisation level, and allows one-on-one calls and 98% of your friends are already using the app.
- •

  Option 2 is web accessible, has two-factor authentication, a medium customisation level, and allows multi-person calls and 76% of your friends are already using the app.
- •

  Option 3 is mobile only, has simple authentication, a low customisation level, and allows multi-person calls and 45% of your friends are already using the app.
- •

  Option 4 is to use no app.

Which option do you choose? You have to pick one option. Don’t explain your choice, just name the option you choose.

### I.3 Choice data analysis

##### Threshold estimation.

The threshold estimation follows the methodology described in ref. [[6](https://arxiv.org/html/2502.21037v2#bib.bib6)].
Individual $n$’s utility from adopting product or behavior $i$ ($U\_{ni}$) is the sum of two terms: the utility of the product attributes on $n$ $(U^{(A)}\_{ni})$ and the utility derived from the social signal received by $n$ about $i$ ($U^{(S)}\_{ni}$): $U\_{ni}=U^{(A)}\_{ni}+U^{(S)}\_{ni}$.
The adoption threshold is then defined as the minimal level of the social signal for which the utility of $n$ from adopting $i$ exceeds $n$’s status-quo utility ($U^{(0)}\_{n}$).
Under the assumption that $U\_{n}^{(0)}-U^{(A)}\_{ni}>0$ and the utility from the social signal is linear in the number of adopters ($U^{(S)}\_{ni}=\gamma\_{n}s\_{ni}$, where $s\_{ni}$ denotes the percentage of adopters of $i$ within $n$’s social neighborhood, and $\gamma\_{n}$ represents $n$’s marginal utility of the social signal), the adoption threshold can be expressed as in ref. [[7](https://arxiv.org/html/2502.21037v2#bib.bib7), [6](https://arxiv.org/html/2502.21037v2#bib.bib6)]: $\tau\_{ni}=(U\_{n}^{(0)}-U^{(A)}\_{ni})/\gamma\_{n}$.
Following discrete choice theory [[7](https://arxiv.org/html/2502.21037v2#bib.bib7), [6](https://arxiv.org/html/2502.21037v2#bib.bib6)],
the utility is assumed to be additive in the product’s or behavior’s attributes:
$U^{(A)}\_{ni}=\sum\_{k=1}^{K}\beta\_{nk}\,x\_{ki}$, where $x\_{ki}$ encodes if alternative $i$ has attribute $k$ and $\beta\_{nk}$ is the (partworth) utility of $n$ for attribute $k$.
All parameters ($\beta\_{nk}$, $\gamma\_{n}$, $U\_{n}^{(0)}$) can be estimated with the Hierarchical Bayes (HB) algorithm from observed choices, as in a choice-based conjoint analysis [[17](https://arxiv.org/html/2502.21037v2#bib.bib17)]. As in ref. [[6](https://arxiv.org/html/2502.21037v2#bib.bib6)], we used the R
package [ChoiceModelR](https://ChoiceModelR) [[18](https://arxiv.org/html/2502.21037v2#bib.bib18)] for the HB estimation.
The threshold estimation method adopted here has been validated by ref. [[6](https://arxiv.org/html/2502.21037v2#bib.bib6)] by showing that (1) it reliably reconstructs the ground-truth thresholds in synthetic data and (2) the individual thresholds it produces can be used to make reliable out-of-sample predictions of individual choices.
See ref. [[6](https://arxiv.org/html/2502.21037v2#bib.bib6)] for complete details.

##### Attribute importance measurement.

To measure the importance of attribute $a$ for respondent $n$, we measure the difference between the maximum and minimum marginal utility across all the attribute’s levels; We normalize the obtained attribute importance values so that they sum to one for each individual [[10](https://arxiv.org/html/2502.21037v2#bib.bib10)].

## II Diffusion simulation

### II.1 Data for the diffusion

#### II.1.1 Social network data

The National Longitudinal Study of Adolescent Health (Add Health) study was conducted via an in-school survey over a nationally representative sample of more than 20,000 adolescents in grades 7-12 when in 1994-95 in the United States [[19](https://arxiv.org/html/2502.21037v2#bib.bib19)].
We use the cleaned Add Health network data from <https://github.com/drguilbe/complexpaths> [[20](https://arxiv.org/html/2502.21037v2#bib.bib20)], which contains 85 networks.
To save computational time, we restricted our analysis to the sample of 18 networks used in [[6](https://arxiv.org/html/2502.21037v2#bib.bib6)].
The sample was constructed by dividing the 85 networks into six groups based on the number of nodes and the global transitivity index of the graph [[21](https://arxiv.org/html/2502.21037v2#bib.bib21)].
Each network was classified for each metric into low (metric $<$ 33% quantile), medium (metric lies between the 33% and the 67% quantiles), or high (metric $>$ 67% quantile).
From the resulting nine possible combinations, two networks were selected at random to be part of the sample.

#### II.1.2 Agent sampling

We create two types of agents from the above-described experiments: human and artificial, each with its own specific thresholds estimated from the experiments.
For a given network, we assign to a proportion $1-q$ of the nodes the human agents and to a proportion $q$ the artificial agents.
The agents are randomly sampled with replacements from each type.

#### II.1.3 Product sampling

For simplicity, we use the term product to refer to both products (e.g., instant messaging app in the AA study) and behaviors (e.g., policy support in the PS study).
In both the PS and the AA studies we conducted the simulations using 36 products.
The total number of products that can be generated from a conjoint design is equal to all distinct combinations of attribute levels (not considering the social signal).
Thus, the total number of possible products is 768 ($3\times 4\times 4\times 4\times 4$) in the PS study and 36 ($2\times 2\times 3\times 3$) in the AA study.
To save computational time, in the PS study, we restricted our analysis to the sample of 36 products used in [[6](https://arxiv.org/html/2502.21037v2#bib.bib6)].
The sample was constructed by computing the average adoption threshold over the (human) subjects for each product, setting 6 equally-sized intervals for the range of average threshold, and sampling 6 products from each interval.

### II.2 Seeding policies

Given a certain network and a determined percentage of seeds, we calculate the number of seeds and decide who to seed in each diffusion based on two seeding policies:
(1) random policy
(seeds are chosen at random from all nodes in the network); and
(2) degree policy (the seeds are the nodes with the highest degree centrality – the number of connections to other nodes in the network[[22](https://arxiv.org/html/2502.21037v2#bib.bib22), e.g.,])

### II.3 Diffusion process

For each configuration, identified by the agent type, the network structure, the product spreading through the network, the ratio $q$ of artificial agents in the network, and the selected seeding policy, we simulate a threshold model where agents make adoption decisions based on their thresholds estimated from the two experiments.
At each time step of the simulation, an agent decides to adopt the product if the proportion of neighbors who had adopted the product in the previous stage is greater or equal to the agent’s adoption threshold.
We assume the agents learn about the product from their neighbors and thus an agent can only adopt once it has been exposed to an adopting neighbor (i.e., an agent with threshold zero adopts only once at least one neighbor has adopted).
The diffusion process runs until there are no new adoptions in the network.
We calculate the adoption rate as the total number of adopters in the last step of the simulation divided by the total number of nodes in the network.
