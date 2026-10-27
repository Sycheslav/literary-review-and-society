---
id: arxiv-2301-07543-text
type: material
title: 'Large Language Models as Simulated Economic Agents: What Can We Learn from Homo Silicus?'
work_id: arxiv-2301-07543
source_url: https://arxiv.org/html/2301.07543v2
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять
  с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.
language: original
sha256_text: 2f8ea96699bc593717b9dd6ae89658725ce4c13c655d75043a15e42fddf75b94
---

> Источник: [https://arxiv.org/html/2301.07543v2](https://arxiv.org/html/2301.07543v2). Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.

# Large Language Models as Simulated Economic Agents: What Can We Learn from *Homo Silicus*? Thanks:  Thanks to the MIT Center for Collective Intelligence, Tyler Cowen, and the Mercatus Center for their generous funding. Thanks to Daron Acemoglu, David Autor, Mohammed Alsobay, Jimbo Brand, Elliot Lipnowski, Shakked Noy, Paul Röttger, Daniel Rock, Charlotte Siegmann, and Hong-Yi TuYe for their helpful conversations and comments. Special thanks to Yo Shavit, who has been extremely generous with his time and thinking. All authors contributed equally to this work. Author contact information, code, and data are currently or will be available at <https://benjaminmanning.io>. Horton is an economic advisor to Anthropic; all authors have a financial interest in [www.expectedparrot.com](https://www.expectedparrot.com). In preparing this paper, the authors utilized generative AI models extensively as tools to assist with editing and evaluation. The authors retain full responsibility for all content and conclusions presented herein.

John J. Horton
Affiliation: MIT & NBER
  
Apostolos Filippas
Affiliation: Fordham
  
Benjamin S. Manning
Affiliation: MIT

August 24, 2026

###### Abstract

We argue that newly-developed large language models (LLMs), because of how they are trained and designed, are implicit computational models of humans—a *Homo silicus*.
LLMs can be used like economists use *Homo economicus*: they can be given endowments, information, preferences, and so on, and then their behavior can be explored in scenarios via simulation.
Experiments using this approach, derived from [Charness and Rabin (2002)](https://arxiv.org/html/2301.07543v2#bib.bib78), [Kahneman et al. (1986)](https://arxiv.org/html/2301.07543v2#bib.bib76), [Samuelson and Zeckhauser (1988)](https://arxiv.org/html/2301.07543v2#bib.bib94), [Oprea (2024b)](https://arxiv.org/html/2301.07543v2#bib.bib23), and [Horton (2025)](https://arxiv.org/html/2301.07543v2#bib.bib92), show qualitatively similar results to the original, and when they differ, it is often generative for future research.
We discuss potential applications, conceptual issues, and why this approach can inform the study of humans.

## 1 Introduction

Most economic research takes one of two forms: (a) “What would *Homo economicus* do?” and (b) “What did *Homo sapiens* actually do?”
The (a)-type research takes a maintained model of humans, *Homo economicus*, endows it with different resources, preferences, information, and so on, subjects it to various economic scenarios, and then deduces its behavior.
This behavior can then be compared to that of actual humans in (b)-type research.

In this paper, we argue that large language models (LLMs)—because of how they are trained and designed—can be thought of as implicit computational models of humans—a *Homo silicus*.
These models can be used the same way economists use *Homo economicus*: they can be given endowments, put in scenarios, and then their behavior can be explored—though in the case of *Homo silicus*, through computational simulation, not a mathematical
deduction.1
This is possible because LLMs can now respond realistically to a wide range of textual inputs, giving responses similar to what we might expect from a human ([Aher et al., 2022](https://arxiv.org/html/2301.07543v2#bib.bib74); [Bowman, 2023](https://arxiv.org/html/2301.07543v2#bib.bib39)).

Like all models, any particular *Homo silicus* is wrong, but that judgment is separate from a decision about usefulness.
Of course, each *Homo silicus* is a flawed model and can often give responses far away from what is rational or even sensical.
Yet unlike mathematical economic models with fixed input parameters, AI agents can be flexibly applied to simulate any scenario expressed in natural language.
Such flexibility means that agent fidelity to human responses is not fixed: the underlying instructions or “prompts,” which control their behavior can always be adjusted—even in ways that incorporate conventional economic theory.
Indeed, recently developed methods can dramatically improve agent fidelity, and as we will show, the process of better matching human responses can itself be generative.

We consider the reasons why AI simulations might be helpful in understanding actual humans.
The core of the argument is that LLMs—by nature of their training and design—are (i) computational models of humans and (ii) possess a great deal of social information.
For (i), the creators of LLMs have designed them to respond in ways similar to how a human would react to prompts ([Bai et al., 2022](https://arxiv.org/html/2301.07543v2#bib.bib53); [Ouyang et al., 2022](https://arxiv.org/html/2301.07543v2#bib.bib37))—including prompts that are economic scenarios.
For (ii), these models capture two rich sources of social information.
The first is latent in the form of economic activities, decision-making heuristics, and common social preferences that the LLM implicitly learns from its training data.
These massive corpora contain a great deal of written text where people reason about and discuss economic matters: what to buy, how to bargain, how to shop, how to negotiate a job offer, how many hours to work, what to do when prices increase, and so on.
Second, LLMs have also been trained on the majority, if not all, of published social scientific research.
This comprises the facts, theory, and empirical results codified by researchers; welfare theorems, prospect theory’s account of loss aversion, the income returns to education, and so on.

It is essential to note that the sources of social information in the LLM’s training data are not perfect ingredients for simulating human behavior.
For instance, directly applying insights from published research may enhance the realism of simulations.
But it can also make brittle simulations appear robust because models may simply regurgitate problematic and memorized results ([Sarkar and Vafa, 2024](https://arxiv.org/html/2301.07543v2#bib.bib90); [Ludwig et al., 2025](https://arxiv.org/html/2301.07543v2#bib.bib11)).
We address such tensions along with other conceptual issues related to LLMs’ training corpora, opacity, and the generalizability of simulations.

While conceptual issues are important, what ultimately matters is whether these AI simulations are practically valuable for generating insights.
As such, the majority of this paper is devoted to presenting and discussing five simulated experiments.
We selected these experiments because they are simple to describe and implement.
They also have clear qualitative results that can be compared to the AI outcomes.

We begin with experiments motivated by [Kahneman et al. (1986)](https://arxiv.org/html/2301.07543v2#bib.bib76), which reports survey responses to economic scenarios.
In the paper, there is an example where subjects imagine a hardware store raising the price of snow shovels following a snowstorm, and are asked to state whether doing this was fair or unfair.
Illustrating a benefit of AI agents, unlike [Kahneman et al. (1986)](https://arxiv.org/html/2301.07543v2#bib.bib76), we also vary the amount by which the store increases the price, and the political leanings of the respondent.
We show that large gouging is viewed more negatively and that endowed political views matter, with predictable effects—right-leaning AI agents are more sanguine about gouging.
The effects are robust to dozens of permutations of the original experiment.

Next, we simulate the simple unilateral dictator games from [Charness and Rabin (2002)](https://arxiv.org/html/2301.07543v2#bib.bib78).
We show that endowing AI agents with various social preferences affects play.
Instructing the AI agent that it only cares about equity causes it to choose the equitable outcomes; telling the agent it cares about efficiency causes the selection of the payoff maximizing outcomes; telling the agent it is self-interested causes it to select allocations that maximize narrow self-interest.
Interestingly, without any endowment, some models choose efficiently while others tend to be selfish.
We use these results to generate new samples of agents that respond increasingly like human subjects in more complicated two-stage games.

In a study of framing, we next present the AI agents with a decision-making scenario introduced by [Samuelson and Zeckhauser (1988)](https://arxiv.org/html/2301.07543v2#bib.bib94).
In the paper, the respondent has to allocate a federal budget between highway safety and car safety.
The original results show that humans are subject to a status quo bias, preferring budget options that are presented as the status quo.
We recapitulate this result by endowing AI agents with baseline views about the relative importance of car or highway safety.
We then put those agents through various scenarios, with each possible allocation taking a turn as the status quo.
Some LLMs exhibit a strong bias towards any option presented as the status quo, while others barely do.

In the fourth set of simulations, we explore the experiments in [Oprea (2024b)](https://arxiv.org/html/2301.07543v2#bib.bib23), where participants were asked to supply certainty equivalents for a series of binary choice lottery-type questions.
This research challenges conventional interpretations of prospect theory by showing that the classic “fourfold pattern” of risk attitudes emerges even when participants face no risk.
Rather, the paper posits that the pattern emerges because cognitively constrained participants are heuristically responding to complexity.
We simulate the experiment across an expanded set of questions with five different models serving as the AI agents.
Even though the paper is recent and contrasts decades of research, our simulated results provide suggestive evidence in support of [Oprea](https://arxiv.org/html/2301.07543v2#bib.bib23)’s complexity-driven interpretation.

Finally, we explore a hiring scenario motivated by [Horton (2025)](https://arxiv.org/html/2301.07543v2#bib.bib92), which shows in a field experiment that employers facing a minimum wage substitute towards higher-wage workers.
We create a scenario where an employer is trying to hire a worker as a dishwasher and faces a collection of applicants that differ in their experience and wage asks, which are chosen randomly.
The AI agent makes an experience-wage tradeoff.
We then impose a minimum wage that forces applicants bidding below that minimum to bid up.
We run these scenarios across LLMs with varying capabilities.
On average, the results are directionally consistent with [Horton](https://arxiv.org/html/2301.07543v2#bib.bib92): the minimum wage increase causes a shift in the AI’s hiring of more experienced applicants and higher hourly wages.

The first draft of this paper featured versions of the now-deprecated Gpt-3 as the underlying models in our experiments.
Results from these now woefully out-of-date models appear in Appendix [A](https://arxiv.org/html/2301.07543v2#A1 "Appendix A Figures from the original draft ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
We now employ dozens of contemporary LLMs—both open-source and proprietary—and introduce methodological improvements that can increase realism and test robustness of the simulations.
However, as newer models are inevitably released, even our updated experiments will become dated.
Because this pattern will continue to repeat, and access to proprietary systems is uncertain, we emphasize the importance of simulations that are easy to design, replicate, and scale.

This paper is now accompanied by an open-source Python package that enables researchers to replicate our experiments on new models or explore their own ideas with minimal technical overhead, often using only a fraction of the code required for the simulations in the initial draft.2
Using this package, all experiments in this paper are now button-push reproducible with almost any LLM, and the software is actively maintained as methods, models, and prompts improve.
We include links to code, prompts, and tutorials for all simulations throughout the manuscript.
Whether or not researchers choose to employ this software, or something else, it is essential—and now feasible—for AI simulations to have the features we have highlighted in the package: to be nearly costless to replicate, share, and update.
These are precisely the features social scientists should desire from any experimental method.

Ultimately, we care about the behavior of actual humans, and so results from AI experiments will still require empirical confirmation ([Ludwig et al., 2025](https://arxiv.org/html/2301.07543v2#bib.bib11)).3
As such, what is the value of these experiments?
The most obvious use is to pilot experiments in silico first to gain insights.
They could cheaply and easily explore a parameter space, test whether behaviors seem sensitive to the precise wording of various questions, generate data that will ‘‘look like’’ the actual data, and inform power calculations.4
The advantages in terms of speed and cost are enormous—the experiments in this paper were run in minutes for a trivial amount of money.
As relationships are identified, they could guide actual empirical work—or interesting effects could be captured in more traditional theory models.
Indeed, by endowing AI agents with prompts grounded in social science theory, their predictive capabilities can improve dramatically ([Manning and Horton, 2025](https://arxiv.org/html/2301.07543v2#bib.bib22))—precisely what researchers seek from a good theory.
This use of simulation as an engine of discovery is similar to what many economists do when building a “toy model”—a tool not meant to be reality but rather a tool to help us think and identify promising patterns.

Since the first draft of this paper in 2023, an extensive and rapidly growing literature testing AI agents has emerged.
This work, including thousands of experiments, now spans every social scientific discipline ([Brand et al., 2023](https://arxiv.org/html/2301.07543v2#bib.bib65); [Chang et al., 2024](https://arxiv.org/html/2301.07543v2#bib.bib62); [Shah et al., 2025](https://arxiv.org/html/2301.07543v2#bib.bib64); [Wang et al., 2025](https://arxiv.org/html/2301.07543v2#bib.bib63); [Fish et al., 2025](https://arxiv.org/html/2301.07543v2#bib.bib61); [Qian et al., 2025](https://arxiv.org/html/2301.07543v2#bib.bib20)), with some studies building on these simulations to study humans in ways previously infeasible ([Manning et al., 2024](https://arxiv.org/html/2301.07543v2#bib.bib40); [Xie et al., 2025](https://arxiv.org/html/2301.07543v2#bib.bib10); [Bybee, 2025](https://arxiv.org/html/2301.07543v2#bib.bib21)).
In a growing number of cases, AI agents put in simulations of the relevant settings can even predict human behavior in never-before-seen surveys and experiments ([Li et al., 2024](https://arxiv.org/html/2301.07543v2#bib.bib42); [Hewitt et al., 2024](https://arxiv.org/html/2301.07543v2#bib.bib28); [Tranchero et al., 2024](https://arxiv.org/html/2301.07543v2#bib.bib68); [Park et al., 2024](https://arxiv.org/html/2301.07543v2#bib.bib86); [Binz et al., 2025](https://arxiv.org/html/2301.07543v2#bib.bib48); [Suh et al., 2025](https://arxiv.org/html/2301.07543v2#bib.bib13)).

Given this rapid expansion, the contributions of this paper are now twofold.
First, we aim to help economists effectively incorporate AI simulations into their methodological toolkit, utilizing the most up-to-date practices, and ensuring these tools remain useful as models and methods continue to evolve.
Second, the relative—and original—contribution of this paper is drawing the connection to the common research paradigm of economics and the role a foundational assumption (or model) like rationality plays in research.
LLM experimentation is more akin to the practice of economic theory, despite superficially looking like empirical research.

The remainder of this paper is structured as follows.
In Section [2](https://arxiv.org/html/2301.07543v2#S2 "2 Experiments ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"), we describe and analyze five simulated experiments.
Section [3](https://arxiv.org/html/2301.07543v2#S3 "3 Why and when we can learn from Homo silicus ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?") discusses why LLMs can often predict human behavior and when they are likely to be useful.
In Section [4](https://arxiv.org/html/2301.07543v2#S4 "4 Conceptual issues ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"), we address conceptual critiques related to the use of LLMs for social science.
The paper concludes in Section [5](https://arxiv.org/html/2301.07543v2#S5 "5 Conclusion ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").

## 2 Experiments

We conduct five experiments with LLMs.
We recapitulate and extend four laboratory experiments and then one field experiment from the economics literature.
Our use of the term “recapitulate” in lieu of “replicate” is intentional: we do not view LLM experiments as direct copies of the originals.
The goal is not to just reproduce results.
Rather, we aim to see how simulations behave in empirical scenarios where we already understand the analogous human behavior.
Then, by contrasting with the originals, we demonstrate key features of simulations that researchers can manipulate to better explore new ideas.

The first experiment demonstrates how we can use LLMs to easily extend experiments and search for new insights.
In the second, we show that LLMs respond reasonably to prompts and follow instructions effectively.
We also show how to leverage these responses and conventional economic theory to construct samples of AI agents that respond increasingly like human subjects.
The third experiment shows that LLMs exhibit well-established human decision-making biases.
The fourth shows that LLMs can be used to study subtle elements of human decision-making and induce experimental variation in new ways.
The fifth experiment demonstrates that researchers can use AI agents to study realistic field-like decision-making scenarios.

For readers unfamiliar with LLMs, we provide a brief primer in Appendix [B](https://arxiv.org/html/2301.07543v2#A2 "Appendix B A brief primer on large language models ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
Other introductory resources include [Bowman (2023)](https://arxiv.org/html/2301.07543v2#bib.bib39) and [Ouyang et al. (2022)](https://arxiv.org/html/2301.07543v2#bib.bib37), while [Zhao et al. (2025)](https://arxiv.org/html/2301.07543v2#bib.bib58) provide a comprehensive and technical survey of the field.
In addition, [Korinek (2023)](https://arxiv.org/html/2301.07543v2#bib.bib59) and [Charness et al. (2025)](https://arxiv.org/html/2301.07543v2#bib.bib60) examine how LLMs can be used across the full spectrum of experimental economics research.

### 2.1 Fairness as a constraint on profit-seeking ([Kahneman et al., 1986](https://arxiv.org/html/2301.07543v2#bib.bib76))

[Kahneman et al. (1986)](https://arxiv.org/html/2301.07543v2#bib.bib76) conducted experiments designed to study people’s fairness perceptions in market transactions.
In their price gouging scenario, they asked subjects to respond to the following vignette:

> A hardware store has been selling snow shovels for $15.
> The morning after a large snowstorm, the store raises the price to $20.
> Rate this action as: (1) Very Unfair, (2) Unfair, (3) Acceptable, (4) Completely Fair.

About 82% of subjects responded either “Unfair”
or “Very Unfair.”

We use AI agents to explore two natural follow-up questions:
(i) whether the subjects’ political preferences and associated attitudes toward markets affect their views, and
(ii) whether there exists a dose-response relationship, with more aggressive price hikes seen as more egregious.
To do so, we create AI agents endowed with “personas” or “types,” by prepending a description of the persona in the prompt.
We endow AI agents with political views ranging from “You are a socialist” to “You are a libertarian,” and ask each to independently assess the fairness of price increases to $16, $20, $40, and $100.
We use Gpt-4 with the model temperature at 1, and collect 100 responses to each combination of price hikes and political views, which generates 2,400 observations.

Figure [1](https://arxiv.org/html/2301.07543v2#S2.F1.fig1 "Figure 1 ‣ 2.1 Fairness as a constraint on profit-seeking ( , ) ‣ 2 Experiments ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?") reports the results of our experiment and details on how we constructed the prompts can be found in the notes via the linked Jupyter notebook.
To get a sense of the structure and content of the code, see Figure [A4](https://arxiv.org/html/2301.07543v2#A3.F4 "Figure A4 ‣ Appendix C Additional Figures and Tables ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"), which provides a screenshot of the notebook in the appendix.
We provide such notebooks, which are accompanied by extensive documentation and instructions, for all experiments throughout this paper in their respective figure or table notes.
Columns of this figure correspond to different price increase scenarios and rows to different political bents of the AI agents.
The x-axis shows the possible responses, and the y-axis shows the proportion of agents who choose each option.

  

*Notes:* 
This figure reports the results of our experiment recapitulating and extending the price gouging experiment from [Kahneman et al. (1986)](https://arxiv.org/html/2301.07543v2#bib.bib76).
Each column corresponds to a different price hike scenario, and each row to the AI agents’ political leanings.
The x-axis shows the possible responses, and the y-axis shows the proportion of AI agents choosing each option.
Error bars represent 95% multinomial Wilson confidence intervals.
AI agents use Gpt-4 with the temperature set to 1.
We collect 100 responses for each AI agent persona and scenario combination.
See [www.expectedparrot.com/content/0e39f555-fe34-4911-b516-46638d1640ca](https://www.expectedparrot.com/content/0e39f555-fe34-4911-b516-46638d1640ca) for more details on prompt construction.

Figure 1: Recapitulation and extension of [Kahneman et al. (1986)](https://arxiv.org/html/2301.07543v2#bib.bib76)’s price gouging experiment.

The AI agents’ political beliefs affect their views about the price hikes: Socialist and Leftist agents judge the hikes to be “Unfair” or “Very unfair,” and subjects with more Conservative or Libertarian views find price hikes more morally permissible.
There is also a clear dose-response relationship, with larger price hikes generally viewed as less fair than smaller ones—even a few of the Conservative AI agents judge the $100 price hike as “Unfair” or “Very Unfair”.
The answers of the AI agents are also fairly consistent within political view-price gouge combinations: in about half of the panels, we get the same response in all 100 observations.

[Kahneman et al.](https://arxiv.org/html/2301.07543v2#bib.bib76) report little about the composition of their original study, making it difficult to know which combination of political views is representative.
They do note that the sample consisted of Canadians from Toronto and Vancouver, with an approximately even split between males and females.
While we have no way to know the political leanings of the participants, it is plausible that the original sample was skewed left-leaning, given their urban origins.
Directionally consistent with this speculative view and the results in [Kahneman et al.](https://arxiv.org/html/2301.07543v2#bib.bib76), AI agents endowed with left-leaning views always judge the original price hike to be “Unfair” or “Very Unfair.”

#### 2.1.1 Testing generalizability and possible memorization

One concern with our fairness simulations is that the AI agents may have memorized both the original study and other texts describing the relationships between political labels and fiscal views.
If true, our results might be brittle—an artifact unique to the snow shovel example that does not generalize to other related scenarios.
We next show how to better evaluate the robustness of AI simulations.

We conduct three follow-up sets of simulations of the price-gouging study.
First, we translate the original prompt into 10 different languages and run the experiment in each language.5
Second, we ask Gpt-4 to generate ten alternative versions of the original phrasing, varying the item being sold, the location, the event, or a combination of all three.
For the full list of alternatives, see the accompanying Jupyter notebook in the Figure [2](https://arxiv.org/html/2301.07543v2#S2.F2.fig1 "Figure 2 ‣ 2.1.1 Testing generalizability and possible memorization ‣ 2.1 Fairness as a constraint on profit-seeking ( , ) ‣ 2 Experiments ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?") notes.
One example is:

> A bakery has been selling artisan bread loaves for $15.
> The morning before a major holiday, the bakery raises the price to $20.
> Rate this action as: (1) Very Unfair, (2) Unfair, (3) Acceptable, or (4) Completely Fair.

Others include a bookstore selling novels after an author announces a signing event, a convenience store selling sunscreen right before a heatwave, etc.
Third, we ask GPT-4 to generate ten “adversarial” versions of the original phrasing, that is, to generate a vignette which would result in AI agents responding differently than in our original experiment.
Specifically, we prompted the LLM to make the 10 adversarial versions “as diverse as possible such that the same combination of variables will get people to answer differently.”
The adversarial examples are the same format as the alternative examples and are also provided in the same notebook.
We conduct all three of these additional experiments 10 times for each of the 10 prompt variations within every political view-price gouge combination, with the temperature parameter set to 1.
With four price gouges, six political leanings, and 10 variations for each permutation, we collect 2,400 observations for each of the additional experiments.

To measure responsiveness to price gouging, we regress the AI agents’ choices, measured as a continuous variable ranging from 1 (“Very Unfair”) to 4 (“Completely Fair”), on the price change and the AI agents’ political endowments.
Figure [2](https://arxiv.org/html/2301.07543v2#S2.F2.fig1 "Figure 2 ‣ 2.1.1 Testing generalizability and possible memorization ‣ 2.1 Fairness as a constraint on profit-seeking ( , ) ‣ 2 Experiments ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?") reports dummy regression coefficients for different political endowments across the four experimental permutations, using “Moderate” as the excluded reference category.
Each row represents a different political belief, with the x-axis showing estimated differences from the reference class.
Values for the reference OLS constant are shown in red in the top panel for each experimental permutation.

For interpretation, the translated permutation’s Moderate intercept of 2.35 indicates that, on average, AI agents endowed with moderate political views in this permutation rate price increases as roughly one third of the way from “Unfair” to “Acceptable.”
The Socialist coefficient of -0.60 for the translated permutation in the top panel means Socialist AI agents, on average, rate price increases as one quarter of the way from “Unfair” to “Very Unfair” (2.35 + (-0.60) = 1.75).

  

*Notes:* 
This figure reports regression coefficients for political belief indicators, with Moderate as the omitted reference group, controlling for price gouging.
The dependent variable is the fairness rating (1 = Very Unfair, 4 = Completely Fair).
Full specifications appear in Table [A2](https://arxiv.org/html/2301.07543v2#A3.T2.fig1 "Table A2 ‣ Appendix C Additional Figures and Tables ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
The x-axis shows estimated differences from the Moderates; the y-axis shows the experimental permutation.
Each row corresponds to a different political belief.
The center of the top panel reports the reference intercepts for each permutation—the mean fairness rating for Moderates.
All other estimates are the difference from these values.
See [www.expectedparrot.com/content/6b9ca070-bf21-4887-b68d-060c9177650f](https://www.expectedparrot.com/content/6b9ca070-bf21-4887-b68d-060c9177650f) for simulation code and all experimental variations.

Figure 2: Coefficients of the effects of political beliefs on AI agents’ fairness assessments in four permutations of the [Kahneman et al. (1986)](https://arxiv.org/html/2301.07543v2#bib.bib76) experiment.

As in the original simulations, agents with more right-leaning political orientations generally rate price gouging as increasingly fair across all permutations.
This pattern is evident in the diagonal trend of coefficients from the upper left to the lower right.
Notably, the adversarial and alternative examples yield strikingly similar results.
We were unable to invert the relationship—agents with more left-leaning orientations never rated price gouging as fairer than those on the right.
At a high level, the original pattern appears quite robust.

The translated permutation, however, exhibits a few small differences.
Liberal AI agents show positive coefficients, suggesting they are more right-leaning than the Moderate reference group. Conversely, the Conservative agents in this permutation appear nearly indistinguishable from the Moderates. This variation may reflect different definitions of ‘‘Conservative’’ and ‘‘Liberal’’ political views outside English-speaking contexts.6

Although not visualized here, higher price increases are viewed as increasingly unfair, consistent with results in Figure [1](https://arxiv.org/html/2301.07543v2#S2.F1.fig1 "Figure 1 ‣ 2.1 Fairness as a constraint on profit-seeking ( , ) ‣ 2 Experiments ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
Table [A2](https://arxiv.org/html/2301.07543v2#A3.T2.fig1 "Table A2 ‣ Appendix C Additional Figures and Tables ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?") in the appendix reports the full specifications with these values.
Across the four permutations, including the original, a $1 price hike causes between a 0.004 and 0.009 point decrease in the Likert fairness assessment.

### 2.2 A social preferences experiment ([Charness and Rabin, 2002](https://arxiv.org/html/2301.07543v2#bib.bib78))

[Charness and Rabin (2002)](https://arxiv.org/html/2301.07543v2#bib.bib78) ask experimental subjects to choose between allocations that involve trade-offs between efficiency and equity.
We focus on their unilateral dictator games, where the dictator (Person B) chooses between two allocations of money between herself and the other player (Person A).
For example, in the following game:

> |  |  |
> | --- | --- |
> | “Left”: | Person A gets 400 and Person B gets 600 |
> | “Right”: | Person A gets 700 and Person B gets 300, |

the dictator chooses between the “Left” and “Right” allocations.
We can write this game as:

> Person B Chooses: $\underbrace{(\underbrace{400}\_{\mbox{to A}}\>,\>\underbrace{600}\_{\mbox{to B}})}\_{\mbox{``Left''}}$   vs.   $\underbrace{(\underbrace{700}\_{\mbox{to A}}\>,\>\underbrace{300}\_{\mbox{to B}})}\_{\mbox{``Right''}}$.

We recapitulate this experiment using AI agents.
First, we prompt LLMs with descriptions for each game, and ask them to respond with their preferred allocation without any additional information.
Second, we construct three AI agents with the following personas: (i) inequity-averse (*“You only care about fairness between players”*), (ii) efficient (*“You only care about the total payoff of both players”*), and (iii) self-interested (*“You only care about your own payoff”*).
We have each AI agent play each game 100 times with the temperature set to one.
We use Gpt-4o, Claude-Sonnet-3.5, Llama-3-70B, and Deepseek as the underlying models.

Figure [3](https://arxiv.org/html/2301.07543v2#S2.F3.fig1 "Figure 3 ‣ 2.2 A social preferences experiment ( , ) ‣ 2 Experiments ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?") plots the results of our experiment with the notebook to run the simulations linked in the notes.
Each column corresponds to a different persona, and each row to a different game.
The x-axis shows the fraction of agents choosing the “Left” option.
The white bars show the AI agents’ choices, and the gold bars show either the choice of the human subjects in [Charness and Rabin](https://arxiv.org/html/2301.07543v2#bib.bib78) (leftmost column) or the choice that a perfectly adherent AI agent would make with the given persona (all other columns).
For example, in the Barc2 game, 52% of the human subjects chose “Left” (400,400), and the efficient choice, with the maximum total payout, would be to always select “Right.”

  

*Notes:*
This figure reports the recapitulation of unilateral dictator games from [Charness and Rabin (2002)](https://arxiv.org/html/2301.07543v2#bib.bib78) with AI agents.
The columns correspond to personas with which we endow AI agents, and the rows to different games.
Each AI agent plays each game 100 times.
The x-axis shows the percentage of agents choosing “Left.”
The y-axis shows both the AI agents’ responses and the “Expected” proportion for each column’s given persona.
White bars depict the AI agents’ choices, and gold bars depict either the choice of the human subjects in [Charness and Rabin](https://arxiv.org/html/2301.07543v2#bib.bib78) (leftmost column) or the choice that a perfectly aligned AI agent would make with the given persona (all other columns).
Error bars report 95% Wilson confidence intervals.
See [www.expectedparrot.com/content/6bc88957-c346-46a3-910a-e63ec2d77035](https://www.expectedparrot.com/content/6bc88957-c346-46a3-910a-e63ec2d77035) for simulation walkthroughs.

Figure 3: Recapitulation of single-stage dictator games from [Charness and Rabin (2002)](https://arxiv.org/html/2301.07543v2#bib.bib78).

The choices of the persona-less AI agents are quite different from those of the human participants in the original experiment, despite the fact that the original experiment is almost certainly included in the training data for all models (as is true for most well-known economics papers).
These responses are also different across models, although consistent within: Llama-3-70B is seemingly more selfish, and Gpt-4o, Claude-Sonnet-3.5, and Deepseek are more efficiency-minded.
Despite this baseline heterogeneity, AI agents endowed with personas respond consistently in line with those personas.
Except for a few cases—such as Deepseek and Llama-3-70B failing to choose the inequity-averse option in the spiteful Berk23 scenario—efficiency-endowed agents generally chose the option with the highest combined payoff, inequity-averse agents selected the option with the smallest difference between payoffs, and self-interested agents maximized their own payoff.

#### 2.2.1 Constructing a calibrated sample of AI agents

If we wanted to use these off-the-shelf LLMs without personas to predict behavior in new allocation games, the evidence above suggests their accuracy would be poor.
Such agents might suffice for low-stakes applications—like stress-testing experimental designs or checking data pipelines—where fidelity to human distributions is not the primary concern.
But if the goal is to employ AI agents as credible guides for empirical work—a far more valuable use case and promising application of AI simulations—then this lack of predictive reliability becomes a serious limitation.

By contrast, the AI agents endowed with personas exhibited high fidelity: they followed the instructions tied to their assigned type almost perfectly.
This disciplined behavior provides a foundation for building calibrated samples of agents that can better predict human responses.
We adopt the approach from [Manning and Horton (2025)](https://arxiv.org/html/2301.07543v2#bib.bib22), who show that by optimizing mixtures of theory-grounded agents to match human responses in one setting, one can improve their predictive power in other related settings.
Here, “theory-grounded” means the personas are motivated by some theory that we generally understand, can clearly evaluate, and reasonably expect to predict the relevant human behavior—like how fairness, self-interest, and efficiency agents reflect the original economic model laid out in [Charness and Rabin](https://arxiv.org/html/2301.07543v2#bib.bib78).

We implement the approach and construct an optimized mixture of AI agents as follows.
Intuitively, we choose the “recipe” of agent types—self-interested, inequity-averse, and efficient—whose combined choices best reproduce the aggregate choices of human subjects.
Each persona is represented by a vector $v=(p\_{Barc2},\ldots,p\_{Berk29})$, where $p\_{g}$ is the proportion of AI agents with this persona that chose “Left” in game $g$ from Figure [3](https://arxiv.org/html/2301.07543v2#S2.F3.fig1 "Figure 3 ‣ 2.2 A social preferences experiment ( , ) ‣ 2 Experiments ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
For example, the “efficient” Gpt-4o AI agents only chose “Left” in the Berk23 scenario, so they are represented by $v\_{\text{E}}=(0,0,0,1,0,0)$; the population of [Charness and Rabin](https://arxiv.org/html/2301.07543v2#bib.bib78) is represented by $v\_{CR}=(.52,.67,.27,1,.78,.68)$.
For each LLM, we then compute the weights $w=(w\_{E},w\_{I},w\_{S})$ that minimize the mean-squared error (MSE) $||w\_{E}v\_{E}+w\_{I}v\_{I}+w\_{S}v\_{S}-v\_{CR}||^{2}$, subject to $w\_{E}+w\_{I}+w\_{S}=1$ and $w\_{E},w\_{I},w\_{S}\geq 0$.7
The optimal weights for each LLM are $(0.49,0.00,0.51)$ for Llama-3-70B, $(0.44,0.00,0.56)$ for Claude-Sonnet-3.5, $(0.37,0.10,0.53)$ for Gpt-4o, and $(0.44,0.00,0.56)$ for Deepseek.
We use these weights to randomly sample personas for each LLM.

Having calibrated these mixture weights on the unilateral games, we now evaluate whether they generalize to new settings.
We use the two-stage games from [Charness and Rabin](https://arxiv.org/html/2301.07543v2#bib.bib78) for this out-of-sample evaluation.
These games have a different structure, but are theoretically similar to the unilateral dictator games in the sense that we might reasonably expect some combination of efficiency, fairness, and self-interest to influence human responses in both.
If our calibrated agents can better predict responses in these new games than the persona-less LLMs, this provides evidence that they can generalize across structurally distinct data-generating processes.

In the sequential games, monetary allocations depend on both players’ decisions.
In the first stage, Person A chooses either a given allocation or to let Person B choose one of two other known allocations.
Person B is asked to choose an allocation but is not informed of Person A’s choice—until the payoffs are realized.
For example,

> Stage 1 (Person A chooses): $\underbrace{(\underbrace{500}\_{\mbox{To A}}\>,\>\underbrace{500}\_{\mbox{To B}})}\_{\mbox{``Left''}}$   vs.   $\underbrace{\underbrace{(400\>\>,\>600)\>\text{ vs. }(700\>\>,\>300)}\_{\mbox{Let Person B choose}}}\_{\mbox{``Right''}}$.

> Stage 2 (Person B chooses): $\underbrace{(\underbrace{400}\_{\mbox{To A}}\>,\>\underbrace{600}\_{\mbox{To B}})}\_{\mbox{``Left''}}$   vs.   $\underbrace{(\underbrace{700}\_{\mbox{To A}}\>,\>\underbrace{300}\_{\mbox{To B}})}\_{\mbox{``Right''}}$.

We write this game as:

(500, 500)

(400, 600), (700, 300)

We conduct our experiment as follows.
For each LLM, we sample randomly 100 AI agents according to the computed weights $w$.
Each AI agent plays each game scenario 5 times, both as Person A and Person B.
We also have “control” persona-less AI agents play each game and role 100 times.

Figure [4](https://arxiv.org/html/2301.07543v2#S2.F4.fig1 "Figure 4 ‣ 2.2.1 Constructing a calibrated sample of AI agents ‣ 2.2 A social preferences experiment ( , ) ‣ 2 Experiments ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?") plots the results of the experiment, and its notes contain a linked notebook with the code for the simulations.
The y-axis is the absolute difference between the fraction of AI agents and humans choosing “Left.”
For each model, the white bar shows the responses of the persona-less AI agents, and the grey bar shows the responses of the calibrated sample.
The differences are substantial: across all models, the responses of the weighted AI agent samples are much closer to those of the human subjects.
The MSE of the calibrated samples ($0.094$) is about half of the persona-less control MSE ($0.182$).
This improvement suggests that theory-grounded persona mixtures can indeed capture meaningful patterns in human decision-making that transfer across game formats.

  

*Notes:*
This figure compares the performance of persona-less and calibrated samples of AI agents using sequential games from [Charness and Rabin](https://arxiv.org/html/2301.07543v2#bib.bib78).
Rows correspond to different game scenarios, and columns to different roles (Person A or Person B).
The x-axis shows different LLMs, and the y-axis shows the absolute difference between the fraction of AI agents and the fraction of human subjects choosing “Left” in the original experiment.
White bars correspond to the persona-less AI agents, and the grey bars correspond to the calibrated AI agents.
Error bars show 95% Wilson confidence intervals for the AI proportion, symmetrically shifted to the absolute difference from the human proportion.
See [www.expectedparrot.com/content/9ff43614-2726-440b-a745-f325555eab4b](https://www.expectedparrot.com/content/9ff43614-2726-440b-a745-f325555eab4b) for simulation code.

Figure 4: Out-of-sample evaluations of calibrated samples of AI agents.

These results show that we are not limited to whether off-the-shelf AI agents respond like humans.
Instead, we can construct AI agents that respond more like humans in particular settings using personas based on some relevant theory.
We can then use these calibrated agents to explore new scenarios plausibly governed by the same theory with more confidence that their responses will predict the relevant human responses.
Indeed, [Manning and Horton](https://arxiv.org/html/2301.07543v2#bib.bib22) show that by constructing and then validating agents in this way (on some of these very games), we can substantially improve their ability to predict human responses in novel settings where no prior human data exists.

### 2.3 *Status quo* bias in decision-making ([Samuelson and Zeckhauser, 1988](https://arxiv.org/html/2301.07543v2#bib.bib94))

[Samuelson and Zeckhauser (1988)](https://arxiv.org/html/2301.07543v2#bib.bib94) demonstrated in several decision-making scenarios that people are more likely to select an option if it is presented as the status quo.
In one scenario, they asked subjects to allocate a safety budget between automobiles and highways.
The instructions were:

> “The National Highway Safety Commission is deciding how to allocate its budget between two safety research programs:
> (i) improving automobile safety (bumpers, body, gas tank configurations, seatbelts), and
> (ii) improving the safety of interstate highways (guard rails, grading, highway interchanges, and implementing selectively reduced speed limits).”

Subjects were then asked to choose between four funding allocations: ($70\%$ auto, $30\%$ highways), ($60\%,40\%$), ($50\%,50\%$), or ($30\%,70\%$).
The main experimental manipulation was to present the options relative to different status quo allocations.8

We recapitulate [Samuelson and Zeckhauser](https://arxiv.org/html/2301.07543v2#bib.bib94)’s experiment.
First, we endow each AI agent with one of twelve beliefs about the importance of car and highway safety.
For each belief, we create a “car owner” and a “non-car owner” AI agent.
We then have each of the 24 agents choose one of four funding allocations in four scenarios: each one phrased to indicate a different option as the *status quo*.
We run this experiment across all five LLMs with temperature set to 1, generating multiple choice occasions per agent-scenario combination.
We use Gpt-4, Gpt-4o, Claude-Sonnet-3.5, Claude-Sonnet-3.7, and Deepseek.
Using this combination of models allows us to compare the AI agents’ responses as the capabilities of LLMs progress, as well as between different LLM providers.
We provide further simulation details inside the notebook linked in the Table [1](https://arxiv.org/html/2301.07543v2#S2.T1.fig1 "Table 1 ‣ 2.3 Status quo bias in decision-making ( , ) ‣ 2 Experiments ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?") notes.

It is worth noting that this within-subject experimental design is possible because AI agents have no memory unless we explicitly provide them with information about their previous decisions.
This would be impossible with human subjects.
They would likely become aware of the experimental manipulation after exposure to each status quo framing.

We model the AI agents’ responses as discrete choices over the four allocations using a conditional logit specification and report the results in Table [1](https://arxiv.org/html/2301.07543v2#S2.T1.fig1 "Table 1 ‣ 2.3 Status quo bias in decision-making ( , ) ‣ 2 Experiments ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
We pool data across all five LLMs but allow coefficients to vary by model using model-specific interactions.
Each observation is one choice occasion (an agent choosing among four alternatives in a given scenario), and the model estimates the probability of choosing each alternative conditional on the choice set.

  

*Notes:*
This table reports the results from our replication of [Samuelson and Zeckhauser (1988)](https://arxiv.org/html/2301.07543v2#bib.bib94) with Gpt-4, Gpt-4o, Claude-Sonnet-3.5, Claude-Sonnet-3.7, and Deepseek.
Columns show logit discrete choice models estimating the probability of choosing each of the four allocations.
Observations represent one funding allocation choice—excluding one observation with missing data.
Each choice occasion is expanded to four rows (one per alternative), with the dependent variable indicating the selected option.
We pool data across all five LLMs but estimate model-specific coefficients through interactions with model indicators.
Independent variables are the proportion of funds allocated to automobile safety for each option, an indicator of whether or not the option was framed as the status quo, and the absolute distance between each option and the status quo.
See [www.expectedparrot.com/content/0bacba4d-91fa-4005-8f7d-abd34a4a1f52](https://www.expectedparrot.com/content/0bacba4d-91fa-4005-8f7d-abd34a4a1f52) for prompts and code.
Significance Indicator: ∗p$<$0.05.

Table 1: Recapitulation of [Samuelson and Zeckhauser (1988)](https://arxiv.org/html/2301.07543v2#bib.bib94) with AI agents

|  |  |  |  |
| --- | --- | --- | --- |
|  | Dependent variable: | | |
|  | Choice of Allocation | | |
|  | (1) | (2) | (3) |
| Claude-3.5: AutoShare | $-0.010^{\*}(0.002)$ | $-0.011^{\*}(0.002)$ | $-0.015^{\*}(0.002)$ |
| Claude-3.7: AutoShare | $-0.004^{\*}(0.002)$ | $-0.005^{\*}(0.002)$ | $-0.007^{\*}(0.002)$ |
| Deepseek: AutoShare | $0.017^{\*}(0.002)$ | $0.018^{\*}(0.002)$ | $0.017^{\*}(0.002)$ |
| GPT-4: AutoShare | $-0.008^{\*}(0.002)$ | $-0.009^{\*}(0.002)$ | $-0.014^{\*}(0.002)$ |
| GPT-4o: AutoShare | $-0.004^{\*}(0.002)$ | $-0.004^{\*}(0.002)$ | $-0.008^{\*}(0.002)$ |
| Claude-3.5: I(StatusQuo) |  | $0.911^{\*}(0.054)$ |  |
| Claude-3.7: I(StatusQuo) |  | $0.703^{\*}(0.055)$ |  |
| Deepseek: I(StatusQuo) |  | $0.762^{\*}(0.055)$ |  |
| GPT-4: I(StatusQuo) |  | $0.931^{\*}(0.054)$ |  |
| GPT-4o: I(StatusQuo) |  | $0.316^{\*}(0.058)$ |  |
| Claude-3.5: $|$DistStatusQuo$|$ |  |  | $-0.032^{\*}(0.002)$ |
| Claude-3.7: $|$DistStatusQuo$|$ |  |  | $-0.020^{\*}(0.002)$ |
| Deepseek: $|$DistStatusQuo$|$ |  |  | $-0.029^{\*}(0.002)$ |
| GPT-4: $|$DistStatusQuo$|$ |  |  | $-0.040^{\*}(0.002)$ |
| GPT-4o: $|$DistStatusQuo$|$ |  |  | $-0.023^{\*}(0.002)$ |
| Observations | 6,999 | 6,999 | 6,999 |
| Log Likelihood | -9,630.112 | -9,173.293 | -9,188.728 |

In Column (1), we see that AI agents, with the exception of Deepseek, are less likely to choose an alternative as more funds are allocated to highway safety (AutoShare).
In Column (2), we add a variable indicating whether an allocation was framed as the status quo.
All AI agents exhibit considerable status quo bias, although Gpt-4o does so to a lesser extent.
In Column (3), we replace the indicator variable with a variable measuring the absolute distance between each allocation’s auto share and the status quo allocation’s auto share.
We see that allocations “farther” from the status quo are, on average, less likely to be chosen for all models.
Both specifications (Columns 2 and 3) show strong evidence of status quo bias, with Column (2) fitting the data slightly better.
Overall, our results suggest that AI agents shift their preferences toward the status quo allocation—similar to human subjects.
Even with substantial post-training fine-tuning, possibly suboptimal heuristic features of human choice remain relevant to LLM behavior.

### 2.4 A complexity view of prospect theory ([Oprea, 2024b](https://arxiv.org/html/2301.07543v2#bib.bib23))

Prospect theory predicts that when making risky choices, people overweight small probabilities, underweight large probabilities, are risk-averse over gains, and risk-seeking over losses ([Kahneman and Tversky, 1979](https://arxiv.org/html/2301.07543v2#bib.bib18)).
This gives rise to the classic “fourfold pattern” of risk attitudes.
[Oprea (2024b)](https://arxiv.org/html/2301.07543v2#bib.bib23) examined if this fourfold pattern can emerge in the absence of uncertainty.
In a novel design, participants were given endowments and faced sets of 100 closed boxes, each containing either a gain or a loss with probability $p\in\{0.1,0.25,0.75,0.9\}$.
In the “gain” framing, some boxes contained $25 and the rest $0; in the “loss” framing, some contained $-\$25$ and the rest $0.

In the “lottery” condition, for each probability $p$ and each framing (gain or loss), certainty equivalents were elicited by asking participants to choose between a sure amount and the outcome from one randomly selected box.
This lottery condition is equivalent to a standard binary-choice lottery.
As expected, participants’ certainty equivalents collectively displayed the fourfold pattern.

A second, “mirror” condition used the same box setup, probabilities, framings, and dollar amounts, but altered the payoff rule.
Instead of randomly choosing one box, all boxes were opened and participants received the average payoff across them.
Unlike the lottery condition, this decision involves no risk: the payoff is deterministic and always equals the expected value ($\pm 25\times p$).
The rational certainty equivalent is therefore the expected value.
The subjects’ responses to risk should not matter, and the fourfold pattern should not appear.

[Oprea](https://arxiv.org/html/2301.07543v2#bib.bib23) finds that participant responses in the mirror condition still displayed the pattern in the aggregate.
This suggests the pattern does not arise solely from probability weighting or reference dependence, and that prospect theory is not just a theory of uncertainty.
Instead, [Oprea](https://arxiv.org/html/2301.07543v2#bib.bib23) argues it reflects systematic responses to complexity under cognitive constraints.
These findings have sparked some debate.
[Banki et al. (2025)](https://arxiv.org/html/2301.07543v2#bib.bib17) contend that the fourfold pattern appears in the mirror condition because subjects are confused about the instructions, and interpret the condition as a risky lottery—likely because of prior exposure to conventional certainty equivalent tasks.

AI agents may offer a unique perspective to help us understand features of this debate.
In simulations, we can systematically vary features of their personas that might indicate which perspective is correct.
This would otherwise be difficult, if not impossible, to do with human subjects.

We extend [Oprea](https://arxiv.org/html/2301.07543v2#bib.bib23)’s central experiment using AI agents.
We endow each agent with $\$50$, and then ask it to provide certainty equivalents for 100 box sets with probabilities $p\in\{0.05,0.10,\dots,0.95\}$, adding 14 probability conditions beyond those in the original experiment for each condition-framing combination.
We construct three personas with the goal of manipulating the LLMs as if they had varying levels of available cognitive resources—a well-established method for identifying complexity effects ([Oprea, 2024a](https://arxiv.org/html/2301.07543v2#bib.bib5)).
The personas are: (i) “you are very bad at math,” (ii) “you are average at math,” and (iii) “you are a mathematical genius.”
If the fourfold pattern reflects behavior under complexity rather than under risk, not only should the lottery and mirror conditions be similar, but we should also expect larger deviations from expected utility—toward prospect-theoretic predictions—among the lower-math ability personas.
We run simulations for each agent, including a baseline agent without any persona, 10 times on five LLMs (Gpt-3.5-Turbo, Gpt-4o, Claude-Haiku-3, Claude-Sonnet-3.5, and Deepseek), all at temperature 1.
This generates 15,200 observations.9

Figure [5](https://arxiv.org/html/2301.07543v2#S2.F5.fig1 "Figure 5 ‣ 2.4 A complexity view of prospect theory ( , ) ‣ 2 Experiments ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?") displays the simulation results.
The x-axis shows the probability of winning (or losing) $50, and the y-axis shows the deviation of each agent’s certainty equivalent from the lottery’s (or mirror’s) expected value.
Columns correspond to different models, and rows indicate the AI agent’s assigned mathematical ability.
Colors represent condition-framing combinations.
Each point is the mean certainty equivalent across 10 runs of a persona at a given probability, with 95% confidence intervals.
Lines show OLS fits regressing deviation from expected value on probability for each condition independently for losses and gains.

Across models, the lottery and mirror conditions generally move in lockstep: either both show the characteristic X-shape or both are flat at the expected value.
There are no instances where the lottery displays the fourfold pattern but the mirror does not.
Notably, there are also no panels where the slopes are reversed: under gains, all regression lines are weakly decreasing in $p$, and under losses, all regression lines are weakly increasing in $p$.
Less advanced models—Gpt-3.5-Turbo and Claude-Haiku-3—show pronounced deviations between small and large probabilities.
By contrast, more capable models—Gpt-4o, Claude-Sonnet-3.5, and Deepseek—more often select expected values as a baseline, particularly when endowed with stronger mathematical abilities, but most clearly exhibit the fourfold pattern when prompted as “very bad at math.”

  

*Notes:*
This figure shows the results of our recapitulation and extension of [Oprea (2024b)](https://arxiv.org/html/2301.07543v2#bib.bib23) with AI agents.
The x-axis is the probability of winning or losing $50, and the y-axis is the deviation from the lottery’s (or mirror’s) expected value.
Columns correspond to different LLMs, and rows to whether different agents were endowed with different mathematical abilities.
Each dot is the mean certainty equivalent across AI agents (with 95% confidence intervals), and the solid lines are OLS fits within each framing-condition combination.
Colors represent condition-framing combinations.
See [www.expectedparrot.com/content/05009e7a-84e8-4c14-bc5d-de0408df89a2](https://www.expectedparrot.com/content/05009e7a-84e8-4c14-bc5d-de0408df89a2) for simulation code.

Figure 5: Recapitulation and extension of [Oprea (2024b)](https://arxiv.org/html/2301.07543v2#bib.bib23)

On its face, our recapitulation supports [Oprea](https://arxiv.org/html/2301.07543v2#bib.bib23)’s claim that the fourfold pattern is not a special phenomenon of risk.
However, it is worth considering systematically the plausible explanations for these AI responses—both for exposition of *Homo silicus* and as commentary on the results.

Could our findings reflect mere noise or rote memorization by the LLMs?
Pure noise seems implausible, given the consistency of the fourfold pattern across five separate models and thousands of simulations.
We would expect to see at least one regression line with an inverted slope relative to the prospect-theoretic predictions if this were the case.
Memorization of [Oprea](https://arxiv.org/html/2301.07543v2#bib.bib23) is also unlikely.
Early drafts may be in training data, but the paper only gained broad visibility in 2024, and its deterministic mirror condition is novel.
We also vary probabilities and payoffs beyond the original, so a narrow script tailored to those exact experiments would not suffice.
It would represent a remarkable degree of transfer learning.

Another possible explanation is that LLMs may have ingested decades of lottery literature, so they default to a standard prospect-theoretic response.
This is similar to [Banki et al.](https://arxiv.org/html/2301.07543v2#bib.bib17)’s argument that [Oprea](https://arxiv.org/html/2301.07543v2#bib.bib23)’s subjects may have reverted to familiar responses because they misunderstood the payoff structure.
The variation in responses across personas suggests that the ‘‘confusion with lotteries’’ perspective is unlikely.
The more capable models largely select the expected value in all conditions when assigned a high, medium, or unspecified mathematical ability, but generate responses corresponding to an increasingly pronounced fourfold pattern when they are ‘‘very bad at math.’’
All three of the more capable LLMs---each independently developed with its own training data and fine-tuning processes---appear to have learned some relationship between stated mathematical ability and deviation away from expected utility theory in a way that aligns precisely with prospect theory.
After an extensive search of the literature, we found no such robustly reported relationship for an LLM to have learned to apply by default.10

The most plausible explanation in our view is that LLMs, having ingested innumerable examples of humans solving problems and demonstrating their preferences over possible states of the world—one of the implicit sources of latent social information that we discussed in the introduction—learned systematic relationships about how humans trade off features of decision-making problems under complexity.
This view is consistent with both the similarity between lottery and mirror conditions, and the increasingly prospect-theoretic responses as the agents get worse at math.
Of course, this does not provide definitive evidence on whether [Oprea](https://arxiv.org/html/2301.07543v2#bib.bib23) or [Banki et al.](https://arxiv.org/html/2301.07543v2#bib.bib17) are correct.
For now, real human data are necessary to shed light on such a question.
But these findings highlight the power of using LLMs to study subtle behavioral patterns likely present in their training corpora.

### 2.5 Labor-labor substitution under a minimum wage ([Horton, 2025](https://arxiv.org/html/2301.07543v2#bib.bib92))

[Horton (2025)](https://arxiv.org/html/2301.07543v2#bib.bib92) reports the results of an experiment where employers were randomly assigned minimum wages in an online labor market: when applying for a job, applicants had to bid up to meet the employer’s randomly assigned minimum wage.
A key finding of this experiment was that there was little reduction in hiring but a substantial shift towards more productive workers, as proxied by past worker earnings and experience.
The possibility of this labor-labor substitution margin had been noted in the literature, but had been difficult to pin down empirically in less controlled settings.

We explore the labor-labor substitution margin with AI agents.
We create scenarios where we ask agents (employers) to select from pairs of applicants that vary in their work experience and requested wages.
In our scenario, employers are hiring for the role of dishwasher, and we inform them of the typical wage for this role.
The scenario in the prompt is:

> You are hiring for the role of “Dishwasher.”
> You have 2 candidates.
>   
> Person 1: Has 1 year(s) of experience in this role. Requests $[wage\_ask\_1]/hour.
>   
> Person 2: Has 0 year(s) of experience in this role. Requests $[wage\_ask\_2]/hour.
>   
> Who are you hiring? You must fill this role.

In our setup, Person 1 is the “experienced” worker and Person 2 is the “inexperienced” worker.
The inexperienced worker always asks for $13/hour, and the experienced worker asks for a wage between $12 and $17/hour.
The employer is unknowingly and randomly assigned to either no minimum wage or a minimum wage of $15/hour.
With a minimum wage, wage asks below the minimum wage threshold are forced up to $15/hour for both workers.

We repeat our experiment twice: once when we tell the employer that the typical wage ask for the position is $12/hour, and once when we provide no information about the typical wage.
We elicit the AI agents’ hiring decisions in 24 scenarios with 43 different models five times each at a temperature of 0.5.11
We ask the employer to always hire a candidate.
Our empirical approach is to regress the hired worker’s wage and experience on an indicator for the minimum wage treatment status.

  

*Notes:* This table shows regressions where the independent variable indicates whether a minimum wage was imposed on the AI employer.
Dependent variables are (1) and (2) the hired worker’s hourly wage and
(3) and (4) their years of experience.
Columns (1) and (3) show results without a reference wage, and Columns (2) and (4) with a reference wage.
Employer-level observations are sampled from 43 different models.
See [www.expectedparrot.com/content/15eb59ad-f7c8-4c9b-87d1-a58cfecc13ec](https://www.expectedparrot.com/content/15eb59ad-f7c8-4c9b-87d1-a58cfecc13ec) for prompt details and the list of models.
Significance Indicator: ∗p$<$0.05.

Table 2: Effects of minimum wage on observed wage and hired worker attributes

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  | Dependent variable: | | | |
|  | Hire wage | | Hire experience | |
|  | (1) | (2) | (3) | (4) |
| I(Minimum Wage) | 1.314∗ | 1.984∗ | 0.081∗ | 0.265∗ |
|  | (0.067) | (0.053) | (0.018) | (0.023) |
| Reference Wage | No | Yes | No | Yes |
| Model FE | Yes | Yes | Yes | Yes |
| Observations | 2,580 | 2,579 | 2,580 | 2,579 |
| R2 | 0.273 | 0.628 | 0.226 | 0.179 |

Table [2](https://arxiv.org/html/2301.07543v2#S2.T2.fig1 "Table 2 ‣ 2.5 Labor-labor substitution under a minimum wage ( , ) ‣ 2 Experiments ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?") reports the regression estimates; the notes include a linked notebook with the list of models and all simulation details.
All specifications include model fixed effects, and standard errors are clustered at the model level.
Column (1) shows that without a reference wage, the minimum wage caused an increase of about $1.3/hour in the wage of the hired worker.
Column (2) shows that when a reference wage is provided, this effect grows by nearly 50%.
Positive coefficients are expected because hiring was mandatory for the AI employer.

When we regress the hired worker’s experience on the presence of a minimum wage, we see similarly substantial effects.
Column (3) shows that without a reference wage, the minimum wage increased the hired worker’s years of experience by about a month.
With a reference wage, Column (4) shows that the introduction of the minimum wage caused the employer to hire workers with roughly three more months of experience on average.
We return to why the reference wage matters in Section [4](https://arxiv.org/html/2301.07543v2#S4 "4 Conceptual issues ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"), but even across simulations of dozens of independently developed models, these increases in wage and experience are directionally consistent with [Horton](https://arxiv.org/html/2301.07543v2#bib.bib92)’s findings.

## 3 Why and when we can learn from *Homo silicus*

In the previous section, we demonstrated that AI agents can simulate features of human behavior in experiments along with various methods to facilitate such simulations.
Next, we examine why LLMs possess these capabilities in the first place, which can inform when the approach is most likely to be useful.
We begin by describing the data that enables highly general AI simulations, and then discuss how economists can conceptualize them in their methodological toolkit.

### 3.1 Why LLMs can simulate human behavior

Good predictions start with good training data.
LLMs can flexibly predict human responses because their training data contain rich information about the social world, and their architectures and post-training processes allow them to learn and apply generalizable human behavioral patterns from that data.

Figure [6](https://arxiv.org/html/2301.07543v2#S3.F6 "Figure 6 ‣ 3.1 Why LLMs can simulate human behavior ‣ 3 Why and when we can learn from Homo silicus ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?") depicts the data pipeline from the social world to LLM predictions about the social world.
LLMs gather informative signals about the social world through two distinct paths:
(i) explicitly, by memorizing findings and theories from the social science literature and
(ii) implicitly, by ingesting text that captures aspects of the social world, such as news articles, social media content, books, and so on.

Figure 6: Why LLMs are good predictive models of the social world

Social world

Non-scholarly human
texts about social world

Social science
literature

Training data

Fitted model
(LLM)

Predictions about
the social world
(ii) Everything written/recorded(i) Everything thatgets researchedand publishedSome unclearselection processSome unclear selection processNeural networkarchitectureand post-trainingPrompting

*Notes:* This figure is a simplified depiction of the data pipeline from the social world to the LLM’s training data, and then to the LLM’s predictions about the social world.
It highlights that LLM simulations can match human behavior in the real world through two distinct paths: (i) by acting in accordance with explicit theories and findings in the social science literature, or (ii) implicitly by ingesting elements of human behavior “in action” captured in non-scholarly human-generated text.

The social science literature path contains records of generalizable patterns, processes, relationships, and theories about human behavior—precisely the kinds of insights we would like LLMs to internalize and apply more broadly.
Consider that at the core of economic analysis is the idea that humans are goal-oriented agents maximizing some objective under constraints ([von Neumann and Morgenstern, 1944](https://arxiv.org/html/2301.07543v2#bib.bib82)), or the empirical evidence that humans often derive utility with diminishing marginal returns to consumption ([Samuelson, 1937](https://arxiv.org/html/2301.07543v2#bib.bib84)) and exhibit strong social preferences by valuing fairness, reciprocity, and others’ welfare alongside their own ([Fehr and Schmidt, 1999](https://arxiv.org/html/2301.07543v2#bib.bib83)).
These concepts do not just magically exist in the ether.
They have been codified through decades of research, dramatically improving economists’ understanding of human behavior.
These are the essential ideas that any “general” human model should take into account.
And while learning from the social science literature comes with distinct challenges, which we discuss in more detail in Section [4](https://arxiv.org/html/2301.07543v2#S4 "4 Conceptual issues ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"), it is a necessary ingredient for LLMs to effectively simulate human responses in many settings.

In contrast to the social science literature path, the non-scholarly, human-generated text path provides LLMs with true aspects of the social world “in action:” how people communicate, make decisions, interact with each other, and perceive the world.
We might be skeptical that a language model could, say, represent physics we have yet to theorize, but it surely has internalized relevant knowledge about the social world that has never been written down in academic work.
This is not to say that the data are the social world or a perfect representation of it.
Rather, it contains countless examples that reiterate basic economic relationships across a wide range of contexts.

Consider the observation that people prefer lower prices and greater quantities, all else equal.
Any economic textbook would contain this observation either in some written form or with the condition $\frac{\partial}{\partial p}\bigl(u(x^{\*})-px^{\*}\bigr)<0$.
But the same observation also appears in widely-read, pre-social science sources.
In the Book of Amos, the prophet denounces unfair traders: “*And the Sabbath, that we may offer wheat for sale, that we may make the ephah small* [a weight to put on a balance] *and the shekel great and deal deceitfully with false balances.*”

What about more subtle knowledge, such as the literature on cheap talk in bargaining games?
There, we would not expect the LLM to learn every detail and figure out all implications of [Crawford and Sobel (1982)](https://arxiv.org/html/2301.07543v2#bib.bib66), but its data contain sources that capture some of the basic ideas and tensions.
For example, “*‘It’s no good, it’s no good!’ says the buyer—then goes off and boasts about the purchase*” (Proverbs 20:14) captures the idea that in bargaining, the buyer and seller are not always forthright.

Modern non-scholarly sources echo these dynamics as well.
Over the past three decades, an increasing share of economic activity has occurred online, creating an extensive record of transactions, reviews, negotiations, and market interactions.
These digital traces provide ample raw material from which LLMs learn realistic representations of human decision-making in many settings.

Importantly, both the implicit and explicit paths are shaped by distinct and often opaque selection mechanisms.
Peer review determines which studies enter the formal literature, and individual self-presentation—what people choose to write, post, or record—filters the broader corpus of human text.
Model developers then apply a further layer of curation when assembling the final training data, excluding or weighting sources according to proprietary criteria.

Neither stream of information is complete or representative, which is why AI simulations should not be treated as unequivocal evidence about human behavior.
Over time, however, we expect that the models most frequently used for simulation will converge toward greater transparency and openness, with clear data inclusion standards, explanations of post-training processes, and documentation.
While open models are not yet as advanced as the most capable models and not viable for many AI experiments, they are improving rapidly.
When possible, we fully endorse the use of open models.
For now, there remain trade-offs between model capability and openness, though these have narrowed considerably even since the first release of ChatGPT.

While training data are key to the ability of LLMs to simulate human behavior, these information sources alone do not create a coherent model.
LLMs’ architectures and post-training processes translate rich training data into useful predictions about human behavior.
Modern transformer LLMs are flexible sequence-to-sequence estimators: they can approximate complex mappings from contextual variables such as prices, payoffs, and information sets to a distribution of actions in their textual responses ([Yun et al., 2019](https://arxiv.org/html/2301.07543v2#bib.bib3)).
Their training objective rewards outputting empirically truthful conditional probabilities over their data ([Gneiting and Raftery, 2007](https://arxiv.org/html/2301.07543v2#bib.bib1))—minimizing log loss is a strictly proper scoring rule.

Post-training methods (like instruction tuning or reinforcement learning with human feedback) steer models away from brittle responses driven by spurious patterns in their training data and toward cooperative, instruction-following behavior—we exploit this property when we endow agents with roles and preferences.
The most advanced frontier models even have specific reasoning capabilities which allow them to better “think through” how a human would respond based on a given set of characteristics.
Together, massive training corpora combined with these architectural and training innovations enable LLMs to capture generalizable patterns of human behavior that can be used to generate predictions in a wide range of settings.

### 3.2 *Homo silicus* as theory

In Section [2](https://arxiv.org/html/2301.07543v2#S2 "2 Experiments ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"), we used elements of the research processes traditionally associated with empirical work to construct and analyze our AI simulations.
We designed experiments, collected data, and used statistical analyses to summarize the results.
Despite these ostensible similarities to applied work, many of the most valuable use cases and insights gained are more akin to the practice of economic theory.

To see why, consider an economist who is trying to understand the following puzzle: why do large firms pay higher wages than observationally equivalent small firms?
The researcher begins by trying to create a model where such a gap exists in equilibrium.
If she assumes perfectly competitive labor markets and costless mobility, her model would likely predict no firm-size wage differences—workers are simply paid their marginal product.
Of course, this disappointing first step does not prove that theorizing is worthless.
Instead, it highlights that the baseline model omits important features of real labor markets.

The next step in the researcher’s journey is to create richer models.
With each new theory direction, she would attempt to formalize a different real-world mechanism.
At each step, the researcher must draw on domain knowledge and the literature to specify a new model, work out the equilibrium (often painfully), and derive useful, testable predictions.

With *Homo silicus*, we can easily construct a large number of AI simulations—based on a world model informed by empirical data—that might bear on the firm-size premium.
For example, suppose we simulate a job seeker weighing offers from a small startup and a large incumbent.
If an AI agent spontaneously emphasizes differences in layoff risk and promotion timelines—and accepts a lower starting wage at the larger firm because it anticipates faster wage growth and insurance value—this suggests a mechanism and maybe even an empirical design: measure expected wage paths and mobility frictions by firm size.

Similar to modeling, simulations can lead us in the wrong direction.
But they likely make expensive data collection more useful by helping us target efforts where the marginal value of information is highest.
Economists have long been aware of how seemingly simple micro-decision making can lead to surprising and subtle equilibrium implications ([Akerlof and Yellen, 1985](https://arxiv.org/html/2301.07543v2#bib.bib49)).
It is not hard to imagine how the ability to easily conduct rich, complex simulations might lead to surprising and generative insights.
Indeed, this is one of the major differences between the physical and social sciences: the ability to iterate and run follow-up experiments.
Given the differences in predictive power between physical and social scientific theories, there is reason to believe a low-cost and high-speed approach to “learning by doing” ([Arrow, 1962](https://arxiv.org/html/2301.07543v2#bib.bib8)) at speeds closer to the lab bench could be a powerful tool for progress.

While the many parallels with economic theory are clear, a key difference—and an advantage—of *Homo silicus* is its flexibility.
We can use AI simulations to generate predictions in virtually any setting described in natural language.
This is often not possible with conventional economic theory because it generally requires fixed input parameters and structural assumptions.

To make concrete what we mean by flexibility, and why economic models are relatively inflexible, consider the model in [Charness and Rabin](https://arxiv.org/html/2301.07543v2#bib.bib78) used to estimate the impact of social preferences on participant allocation decisions.
For the unilateral dictator games we studied in Section [2](https://arxiv.org/html/2301.07543v2#S2 "2 Experiments ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"), they model the utility player B derives from a given allocation $\bm{\pi}=(\pi\_{A},\pi\_{B})$ as:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$U\_{B}(\pi\_{A},\pi\_{B})=(\rho\cdot r+\sigma\cdot s)\cdot\pi\_{A}+(1-\rho\cdot r-\sigma\cdot s)\cdot\pi\_{B},$$ |  | (1) |

where $r=1$ if $\pi\_{B}\geq\pi\_{A}$ and $r=0$ otherwise; $s=1$ if $\pi\_{B}\leq\pi\_{A}$ and $s=0$ otherwise.
Here $\pi\_{A}$ and $\pi\_{B}$ are the payouts for players A and B in allocation $\bm{\pi}$, respectively.
$\rho$ and $\sigma$ are free parameters representing distributional preferences which [Charness and Rabin](https://arxiv.org/html/2301.07543v2#bib.bib78) estimate from their human data.

With values for the free parameters, Equation [1](https://arxiv.org/html/2301.07543v2#S3.E1 "In 3.2 Homo silicus as theory ‣ 3 Why and when we can learn from Homo silicus ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?") could be used to predict dictator preferences over a range of two-player allocations.
However, this model is fundamentally limited in two ways.
First, it cannot incorporate any additional information from a given setting that may be relevant to the dictator’s decision.
Suppose that after running their experiment, [Charness and Rabin](https://arxiv.org/html/2301.07543v2#bib.bib78) learn that about half of the participants are friends and believe this might strongly interact with baseline social preferences.
To use this information to improve the model’s predictions, say, as an extra variable, one must make additional assumptions and re-estimate all parameter values.
Second, this model cannot make predictions in structurally distinct games—even if these games share similar underlying motivations.
Equation [1](https://arxiv.org/html/2301.07543v2#S3.E1 "In 3.2 Homo silicus as theory ‣ 3 Why and when we can learn from Homo silicus ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?") is useless for predicting the dictator’s choice over allocations for any number of players greater than two.

Traditional machine learning models, which have become increasingly relevant in predicting human behavior in economics ([Fudenberg and Liang, 2019](https://arxiv.org/html/2301.07543v2#bib.bib33); [Peterson et al., 2021](https://arxiv.org/html/2301.07543v2#bib.bib54); [Hirasawa et al., 2022](https://arxiv.org/html/2301.07543v2#bib.bib34); [Zhu et al., 2025a](https://arxiv.org/html/2301.07543v2#bib.bib32); [Andrews et al., 2025](https://arxiv.org/html/2301.07543v2#bib.bib31)), have similar limitations.
It is not possible to simply add new features to these models to make predictions in structurally distinct settings.
For example, if a regression model is trained to predict earnings linearly from education and age, but a new observation comes along that also includes cognitive ability, the linear model’s estimated coefficients offer no information about the relationship between cognitive ability and earnings.
This extra column of data must either be ignored by the model or the model must be retrained from scratch using data from all three covariates.
In short, most economic and machine learning models cannot function outside the domain for which they were built.

AI simulations, however, are not subject to the same structural limitations.
In the parlance of the machine learning literature, we may think of LLMs as those models with a strong “inductive bias” for social science prediction problems.
We can simply adjust the setting provided in a prompt (literally rewriting the natural language description of the setting), and the LLM will predict a response based on the relationships it has learned from its training data.
While we cannot directly apply Equation [1](https://arxiv.org/html/2301.07543v2#S3.E1 "In 3.2 Homo silicus as theory ‣ 3 Why and when we can learn from Homo silicus ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?") to three-player dictator games, we could supply the model with the parameters estimated in two-player games to an LLM and prompt it to extend the mapping in a reasonable, explicitly described way to games with any number of players.

This is possible, in part, because LLMs can reasonably impute missing information necessary to make a coherent prediction.
Since they are next-token predictors, they can accommodate the functional form of any model written in a prompt.
Such flexibility is well-embodied in the ‘‘P’’ in ChatGPT (Generative Pre-trained Transformer)---the idea that by pretraining on a massive corpus of text, the model can generalize well.12

Flexibility is not without its drawbacks.
LLMs are black boxes that can fail to generalize in unexpected ways ([Vafa et al., 2024b](https://arxiv.org/html/2301.07543v2#bib.bib14)).
But viewing AI agents as vessels to apply interpretable economic theory to new settings is a powerful way to mitigate this risk.
Because instruction following is the central post-training objective of modern LLMs ([Ouyang et al., 2022](https://arxiv.org/html/2301.07543v2#bib.bib37); [Bai et al., 2022](https://arxiv.org/html/2301.07543v2#bib.bib53)), a more reliable way to steer them is to express our assumptions as explicit instructions.
Economic theory maps naturally into such instructions: it declares state variables and constraints, specifies an objective, and implies decision rules.
When we write those elements clearly in the prompt (e.g., “You only care about efficiency”), the model can apply the rule across new settings without retraining—and we can audit whether it did so.
As we discuss in Section [4](https://arxiv.org/html/2301.07543v2#S4 "4 Conceptual issues ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"), explicit, unambiguous instructions are valuable because they require far less from the LLM’s underlying world model.
They also make behavior checkable in simple test cases and reveal where extrapolation fails before scaling simulations up in complexity.
Put differently, economic theory supplies the instructions; LLMs supply the capacity to execute them flexibly.

We applied a version of this theory-as-flexible-instruction approach when calibrating our sample for the two-stage allocation games in Section [2](https://arxiv.org/html/2301.07543v2#S2 "2 Experiments ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
For the unilateral dictator games, we endowed “efficient” agents to maximize total payoff, “inequity-averse” agents to minimize payoff differences, and “self-interested” agents to maximize their own payoff.
In each of the six allocation decisions, there is a clear mathematical mapping from the instruction to the preferred allocation; only Berk26 is equivocal for the efficiency persona because both allocations are equally efficient.
After calibrating on the unilateral tasks, we applied the same agents to the two-stage games, where “efficient,” “inequity-averse,” and “self-interested” become more ambiguous.
For example, in Berk27, should the self-interested Player A choose “Left” (certain 500) or “Right” (either 800 or 0 depending on B’s move)? Although 800 seems more likely than the spiteful 0, there is no guarantee B cooperates.
Still, the calibrated agents predicted human responses far better than persona-less LLMs, suggesting that even this imperfect theoretical mapping was relevant.

A natural question raised by these results is what they teach us about humans rather than models.
Are we actually learning that human dictators behave like mixtures of efficient, inequity-averse, and self-interested types?
More broadly, whenever an interpretable prompt improves a simulation’s fit to human data, should we take that as evidence that the theoretical idea associated with that prompt is literally true of people and should anchor our economic models?
This echoes the broader idea of reverse-engineering predictive power from machine learning models as a tool for hypothesis generation ([Ludwig and Mullainathan, 2024](https://arxiv.org/html/2301.07543v2#bib.bib57)).
For now, that inference is too strong.
LLMs remain black boxes: we do not yet know why a given prompt improves performance or how the internal representations that drive these gains relate to human behavior.
The nascent field of mechanistic interpretability is beginning to shed light on these questions ([Olah et al., 2020](https://arxiv.org/html/2301.07543v2#bib.bib24); [Elhage et al., 2021](https://arxiv.org/html/2301.07543v2#bib.bib25)), but it does not yet let us map prompts cleanly onto interpretable features that explain human responses.

Even so, these patterns of improved predictive accuracy provide compelling—and increasingly abundant—evidence that LLMs have internalized meaningful relationships between interpretable theory and human behavior ([Zhu et al., 2025b](https://arxiv.org/html/2301.07543v2#bib.bib9)).13
That conclusion is reinforced by the opposite pattern: prompts that endow AI agents with atheoretical or scientifically meaningless traits generally do not improve predictive accuracy.
[Manning and Horton (2025)](https://arxiv.org/html/2301.07543v2#bib.bib22), for example, show that giving agents hobbies or favorite TV shows does little to improve fit on [Charness and Rabin](https://arxiv.org/html/2301.07543v2#bib.bib78)’s games, either in-sample or in new settings, while theory-based social-preference personas do.
Of course, there are surely settings where the correct theory does not improve fidelity, or meaningless prompts do.
But the fact that we cannot yet make precise inferences about human behavior from which prompts improve predictive fidelity does not mean these patterns lack value.
They may still provide structured signals about which theoretical ideas are promising for modeling and exploration, even if the mechanisms underlying those gains are not yet fully understood.

### 3.3 Using *Homo silicus* to navigate uncharted territory

Figure [7](https://arxiv.org/html/2301.07543v2#S3.F7 "Figure 7 ‣ 3.3 Using Homo silicus to navigate uncharted territory ‣ 3 Why and when we can learn from Homo silicus ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?") shows how we can think about the relationship between the social world, the social science literature, and AI simulations.
The green oval (upper left) depicts the set of true propositions about the social world.
The black oval (upper right) depicts the set of propositions that have been studied and recorded in the social science literature—regardless of the findings.
These may or may not have been labeled true, which is why the oval is dashed, but they have been evaluated by researchers.
The blue oval (bottom center) depicts the propositions that simulations of a given set of AI agents powered by a particular LLM would predict to be true.
The blue “feet” protruding from the black oval represent how new AI results from the given agent set would expand on the existing social science literature.

Figure 7: How AI simulations may help or hurt social science research on new propositions

![Refer to caption](https://arxiv.org/html/2301.07543v2/images/diagram_ovals.png)

*Notes:* This figure displays the predictions made by simulations of AI agents (bottom center blue oval) relative to the true social world (upper left green oval).
The black dashed oval in the upper right offers the propositions that have been evaluated by social scientists—it is agnostic as to whether such propositions are recorded as true or false.
The blue “feet” show how AI results could expand the existing literature.
The Venn diagram implicitly offers a confusion matrix for where AI simulations can either help or hinder researchers as they explore novel ideas.

Along with Figure [6](https://arxiv.org/html/2301.07543v2#S3.F6 "Figure 6 ‣ 3.1 Why LLMs can simulate human behavior ‣ 3 Why and when we can learn from Homo silicus ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"), this diagram shows how AI simulations show a selective and noisy slice of the social world.
They are not yet an adjudication of truth but a navigation aid: a disciplined way to mark the types of propositions that appear promising.
Read as a confusion matrix, Figure [7](https://arxiv.org/html/2301.07543v2#S3.F7 "Figure 7 ‣ 3.3 Using Homo silicus to navigate uncharted territory ‣ 3 Why and when we can learn from Homo silicus ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?") implies four possible cases:
(i) *AI True Positives*: true propositions supported by AI simulations,
(ii) *AI True Negatives*: false propositions rejected by AI simulations,
(iii) *AI False Positives*: false propositions supported by AI simulations, and
(iv) *AI False Negatives*: true propositions rejected by AI simulations.
Researchers stand to gain when AI simulations fall in the true positive and true negative regions.
On the other hand, AI simulations may amplify errors when they generate false positives or neglect well-established results.
This underscores that simulations can be either helpful when they corroborate good social science or refuse to imitate bad social science, or harmful when they introduce spurious results or fail to predict legitimate findings.

Notably, humans are not necessarily strong benchmarks for predicting the results of social science research.
A growing literature shows that even trained social scientists are surprisingly poor at forecasting the outcomes of interventions and experiments ([DellaVigna et al., 2019](https://arxiv.org/html/2301.07543v2#bib.bib55); [Milkman et al., 2021](https://arxiv.org/html/2301.07543v2#bib.bib51); [Gandhi et al., 2025](https://arxiv.org/html/2301.07543v2#bib.bib38); [Gandhi et al., 2024](https://arxiv.org/html/2301.07543v2#bib.bib26); [Duckworth et al., 2025](https://arxiv.org/html/2301.07543v2#bib.bib46)).
This implies that the “bar” for a useful predictive tool may be lower than we often assume.
AI simulations need not be perfect to be informative—they may only need to improve on human judgment.

Still, how would we know in which of the four regions we are likely to find ourselves when using AI simulations?
Without a correct causal model, no statistical procedure can, ex ante, guarantee performance in novel settings ([Pearl, 2009](https://arxiv.org/html/2301.07543v2#bib.bib67)).
To get unbiased estimates of economic parameters or to make predictions with guaranteed statistical bounds, one needs at least some representative data or sufficient statistics.
Only then, with the appropriate statistical frameworks, can researchers use AI agents’ responses as data to draw unequivocal inferences about human behavior ([Ludwig et al., 2025](https://arxiv.org/html/2301.07543v2#bib.bib11)).
In other words, researchers generally need some sort of ground truth or gold standard dataset to compare against.
In general, ground truth is the analogous human subjects’ data for a given set of simulations.

One such case where ground truth is available is when researchers have already committed to collecting a human sample and want to stretch it further.
For these settings, prediction-powered inference is especially useful.
The method starts with a ground truth sample, trains a model to predict the outcome from observed covariates, and then combines those predictions with inputs lacking outcome labels to form estimators that remain unbiased for the target parameter ([Angelopoulos et al., 2023](https://arxiv.org/html/2301.07543v2#bib.bib47); [Egami et al., 2023](https://arxiv.org/html/2301.07543v2#bib.bib45)).
The more accurate the predictive model, the more precise the resulting estimates and the lower the cost of achieving a desired level of precision.
Intuitively, the machine learning model’s predictions act like additional observations that are corrected using the ground truth sample.
AI simulations can be particularly effective in this role ([Broska et al., 2025](https://arxiv.org/html/2301.07543v2#bib.bib88); [Ludwig et al., 2025](https://arxiv.org/html/2301.07543v2#bib.bib11)), in no small part because of their flexibility.

Ground truth, however, is often unavailable for another one of the most useful applications of AI simulations: exploring new settings where no prior data, and therefore no guarantees, exist.
In such cases, we are not generally interested in unbiased inference, but instead in exploration and hypothesis generation—hence our continued emphasis on theory comparison.
The evidentiary burden for such research tasks is far lower than for unbiased inference.
Still, researchers should not want to explore blindly.

The key is to construct a set of AI agents that are more likely to perform well in a given setting, even if perfect fidelity cannot be guaranteed.
One way to do so, as we have shown, is to design theory-grounded agents and test them in settings where human ground truth is available and theoretically related to the target domain of interest.
If these agents can accurately predict human responses in such benchmark settings, we gain confidence that they will generalize effectively to nearby, unlabeled settings.
Conceptually, there are many distinct blue ovals in Figure [7](https://arxiv.org/html/2301.07543v2#S3.F7 "Figure 7 ‣ 3.3 Using Homo silicus to navigate uncharted territory ‣ 3 Why and when we can learn from Homo silicus ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"), each representing predictions of simulations from a different set of AI agents.
These could be different models, prompts, or a combination of both.
The goal is to identify those that can be shifted closest to the green oval—the set of true propositions—especially for those propositions where the black oval provides reliable labels.
When the new settings lie close to these correctly labeled regions, we might expect similar predictive success—illustrated by the green “AI helpful” feet in the figure.

Our experiments with [Charness and Rabin](https://arxiv.org/html/2301.07543v2#bib.bib78)’s unilateral and two-stage allocation games provide an example of this approach.
We used agents grounded in social preferences to match human responses in the unilateral dictator games, then applied them to the related two-stage games where we presumed the same underlying theory (various social preferences) drove behavior.
[Manning and Horton (2025)](https://arxiv.org/html/2301.07543v2#bib.bib22) provide a full elucidation of this approach and demonstrate that the method can substantially improve the predictive power of AI simulations in entirely novel settings where no prior human data exists.14

Designing theory-grounded agents helps us improve fidelity, but their effectiveness ultimately depends on what the underlying LLM already knows about the world.
In practice, this means that some domains will be more conducive to reliable simulation than others.
Certain types of settings may therefore inspire greater confidence that AI simulations will be effective—specifically, those we would expect to be well-represented in the LLM’s training data.
This follows a simple machine learning principle: models are most accurate in domains richly represented in their training data.
Indeed, evidence shows that LLMs perform far better on problems and questions drawn from well-covered settings ([McCoy et al., 2024](https://arxiv.org/html/2301.07543v2#bib.bib50)).

Perhaps unsurprisingly, two of the largest experimental papers in terms of participant sample size and number of distinct experiments demonstrating that LLMs have broadly applicable predictive power in novel settings focus on domains that are likely to be richly represented in digital text: laboratory experiments in psychology ([Binz et al., 2025](https://arxiv.org/html/2301.07543v2#bib.bib48)) and digital marketing experiments ([Hewitt et al., 2024](https://arxiv.org/html/2301.07543v2#bib.bib28)).
Although we cannot know the boundaries of what is in the training corpus without open models—and even then, the sheer volume of data may obscure clear boundaries—trusting results from simulations of settings well-captured by text on the internet is likely a sound heuristic.

## 4 Conceptual issues

Critiques of *Homo silicus* question the suitability of using LLMs for social science.
One potential response mirrors the argument of [Friedman (1953)](https://arxiv.org/html/2301.07543v2#bib.bib70) that the realism of *Homo economicus* and our assumptions more generally do not matter, and instead we should evaluate an approach on whether it can generate useful results.
The proof of the pudding is in the eating, and “eating” for our purposes is whether AI simulations can help us to expand the frontiers of human knowledge more quickly.
For example, suppose that the primary use of *Homo silicus* is to simulate experiments before we try them in the real world, and this method is adopted.
In that case, these debates are somewhat moot.
Nevertheless, it is helpful to consider non-Friedman responses to common critiques of AI simulations.

### 4.1 The “garbage in, garbage out” critique

One critique of using LLMs for social science is that their training data is too large to be carefully curated, and this may create a “garbage in, garbage out” problem.
This critique rests partly on the incorrect notion that the responses of LLMs are a sort of weighted average.
However, LLMs are more like random number generators than estimators.
If an LLM is trained on millions of people reporting random draws from $U[0,1]$, it would not always respond with approximately $0.5$, but rather it would be more or less equally likely to return any number in $[0,1]$.
LLM developers also have strong incentives to curate the training data carefully ([Brown et al., 2020](https://arxiv.org/html/2301.07543v2#bib.bib36); [MetaAI, 2024](https://arxiv.org/html/2301.07543v2#bib.bib27)), and post-training methods act as an additional layer of filtering.

Even great data may disproportionately represent the highly selected pool of ‘‘humans creating public writing.’’
One advantage economists have in using LLMs is that they tend to pose questions that place few demands on the sample.
We do not think of demand curves sloping downward as a ‘‘Western, Educated, Industrialized, Rich, and Democratic’’ phenomenon but rather as a result of rational goal-seeking that all humans engage in.15
The willingness of economists to use undergraduates at elite four-year universities for laboratory experiments is partially a convenience—but also consistent with a disciplinary point of view we share with psychologists that it is not likely to matter much.

A more subtle problem is that LLMs are trained on what humans choose to say—not on what they choose to do.
Economists have historically taken a dim view of the economic content of mere statements rather than behaviors.
This would seem to be a damning critique of a model literally trained on statements.
However, this “stated versus revealed preference” critique is only superficially persuasive.
As we have discussed and illustrated in Figure [6](https://arxiv.org/html/2301.07543v2#S3.F6 "Figure 6 ‣ 3.1 Why LLMs can simulate human behavior ‣ 3 Why and when we can learn from Homo silicus ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"), the internet contains both implicit and explicit sources of social information.
The training data is not millions of lines of people lying about their reservation values in bargaining scenarios.
Instead, much of it is text about people reasoning how to approach various economic questions, including ‘‘stage whispers’’ about their true intentions, explaining how they would deal with a situation, or recording economic decisions such as purchases and ratings.16

### 4.2 “Memorization” and “performativity” problems

With billions of parameters and a massive training corpus, one worry is that LLMs are parroting back to us what they have “read” somewhere in their training data.
This view is not entirely correct.
First, it is inconsistent with the fact that LLMs can “hallucinate” and make up new facts.
Second, our findings in Section [2](https://arxiv.org/html/2301.07543v2#S2 "2 Experiments ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?") contradict this view: the AI and human subjects’ responses differ in scenarios that are in the training data.
Moreover, memorization is not intrinsically bad.

Memorization would be problematic if the LLM’s predictions were so “shallow” as to be brittle.
To make an analogy, consider an economics student studying for a game theory exam.
A bad student has memorized that {Defect, Defect} is the unique pure strategy Nash equilibrium for the prisoner’s dilemma game, and then selects that prediction when it appears on the midterm.
This shallow memorization is problematic because it does not generalize to games with different payoffs or action spaces.
A better student would memorize that a Nash equilibrium is a strategy profile where every player best-responds to every other player, and would be able to apply this concept to identify equilibria in novel settings.
The usefulness and flexibility of LLMs suggests that their predictions are often more like the good student’s.

Another related concern is a potential “performativity” problem, in the sense that AI agents may behave following the theories and empirical results in their training data ([MacKenzie, 2007](https://arxiv.org/html/2301.07543v2#bib.bib91)).
However, as with the “good” game theory student, performativity may be a desirable feature of AI simulations—assuming the underlying theory is correct.
More generally, a critical view of memorization and performativity overshadows their important benefits.
If our goal is to have a “realistic enough” model of human behavior, rather than to make unequivocal inference about human behavior, and we believe that the cumulative body of social science is useful in predicting actual human behavior, then internalizing and applying these facts is beneficial.

### 4.3 Black boxes with incoherent world models

We do not fully “understand” the behavior of LLMs today, including how training data, model architectures, and prompts affect model outputs.
A deeper understanding would certainly be useful, but it is not necessary to use LLMs for social science.
To do economics, we do not have to study neurons and parts of the brain.
Instead, we advance our body of knowledge by studying how humans respond in different scenarios and by developing theories, one study at a time.
Similarly, what matters is not that we fully understand how LLMs work, but rather that they are systems created for some understandable purpose with an explicit goal of optimization.
As [Simon (1996)](https://arxiv.org/html/2301.07543v2#bib.bib80) notes, “sciences of the artificial” can usefully abstract away from the micro-details of construction so long as the created object is viewed as trying to maximize something subject to the constraints of the environment.

A related concern is that LLMs may have incoherent world models, which can undermine their credibility.
An interesting case in point is [Vafa et al. (2024a)](https://arxiv.org/html/2301.07543v2#bib.bib12).
They train a language model to predict paths between points in New York City based on rides from taxi drivers.
To do this, they label every single intersection in the city with a unique identifier.
Each ride is then tokenized as an initial intersection, an ending intersection, and a series of actions---‘‘left,’’ ‘‘right,’’ ‘‘straight,’’ etc.---between them.
When trained on thousands of these rides, the model can predict the correct sequence of actions to get between hold-out sets of starting and ending intersections with high accuracy.
Yet, the authors show that the inferred map of New York City omits streets, invents others, and the predictions are far less accurate when street detours are introduced.
The language model’s world model is brittle.
It is not explicitly designed to be a map of the city.17

While a perfectly coherent world model would be a boon to AI simulations, it is not strictly necessary to have credible predictions in many contexts.
Effective simulations can rely on what the LLM was designed to do—follow instructions.
Consider an LLM being used to predict how humans might navigate some city.
Given a perfect GPS, this would be trivial.
However, the LLM might still navigate well if given a broadly applicable set of instructions and updated information about the immediate environment.
If it were endowed with *“Stop at stop signs. Stay on the right side of the road. Follow the speed limit.”* and intermittent updates about the immediate environment, it could move around reasonably.
Navigating with those instructions is a far simpler task---and requires a far simpler world model---than reconstructing the entire street grid from scratch, and it is robust to many small perturbations.18

### 4.4 Are these “just simulations?”

An objection to AI-based experiments is that they are just simulations or agent-based models.
Economists generally take a dim view of simulation-based approaches because the researcher is both judge and jury: you program the agents and then see what they do.
Rather than “What would *Homo economicus* do?” simulation-based approaches often ask “What would this model [that does what I tell it to do] do?”—a far less scientifically interesting question.
This is arguably why [Schelling (1971)](https://arxiv.org/html/2301.07543v2#bib.bib93) is the exception that proves the rule.
His model was so simple and obvious that readers knew there was no card up his sleeve, no trick to ensure the surprising emergent phenomenon.

In contrast to conventional agent-based models, *Homo silicus* is not under direct researcher control.
We can influence *Homo silicus* with endowments of beliefs, experiences, and so on (see Section [2](https://arxiv.org/html/2301.07543v2#S2 "2 Experiments ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?")).
But we remain constrained by the fact that what determines behavior is the underlying model, not our direct programming.

*Homo silicus* also gives researchers a much greater degree of flexibility than agent-based models in the past.
With LLMs, we can map preferences, beliefs, and so on, to purposeful actions in the simulated social world;
we can “program” complex simulations only using natural language;
and we can often parse the LLMs’ responses to study the reasoning behind their choices.
These factors expand greatly the scope of AI simulations.

The flexibility of *Homo silicus* makes it less susceptible to one of the core criticisms of both conventional agent-based models and economic theory itself: the Lucas critique ([Lucas, 1976](https://arxiv.org/html/2301.07543v2#bib.bib71)).19
At its core, the Lucas critique emphasizes that behavioral rules guiding agents cannot be treated as fixed parameters but as endogenous responses shaped by the prevailing policy environment.
LLM-based agents mitigate this concern because they can engage in flexible reasoning about environmental changes rather than following hard-coded behavioral rules.

### 4.5 It is easy to “prompt hack” AI experiments

The technical requirements of AI simulations are minimal.
This low barrier to entry, however, comes with the risk of researchers iterating through many prompts until they get a desired response and report only favorable results.
This is conceptually similar to the problem of p-hacking in traditional experimental work.

There are two easily implementable solutions to this problem.
First is to require researchers to present their results under many different partially controlled permutations of the prompt as a robustness check.
For example, in the [Kahneman et al. (1986)](https://arxiv.org/html/2301.07543v2#bib.bib76) experiment, we repeated the experiment with different temperatures, translated the prompt into other languages and then back to English, and varied the context of the experiment.
These manipulations varied the data-generating process in a way that is partially but not entirely within our control.
The second solution, which we have implemented in all experiments throughout this paper, is to make all simulation code public.
Then anyone can inspect the exact data-generation process underlying any analysis.
Indeed, this transparency and portability are major advantages of AI relative to human subjects.
Replicating experiments often only requires a few dollars and the click of a button.

Both solutions require little of the researcher beyond a willingness to share their work—a willingness they should have anyway.
Coding up alternative simulations is straightforward.
It requires a few minutes of additional prompting and some minor code changes.
Sharing results is also easy.
Frontier LLMs can clean up code syntax and provide comprehensive documentation for an entire codebase with a single prompt.

### 4.6 Causal inference with AI simulations is challenging

Two features of LLM experiments ostensibly make causal analysis difficult.
First, an LLM is a single model, and so it would seem that we can only get one “observation.”
Unlike the one *Homo economicus* that is rational, there are many *Homo silici*.
We demonstrated in Section [2](https://arxiv.org/html/2301.07543v2#S2 "2 Experiments ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?") that we can induce LLMs to play different agents via prompts, leading to varying responses.20
This agent “programming” is not unlike the experimental economics practice of giving a subject a card that says their marginal cost of producing a widget is 15 tokens.
Additional sources of variation may come from setting the temperature parameter and from using different LLMs.

Which set of *Homo silici* to use depends on the researcher’s question of interest.
Researchers should not just use off-the-shelf LLMs to conduct simulations, but rather construct a set of agents relevant to their domain of study.
This may require matching simulations to existing data or grounding the agents on existing theories.

A second challenge concerns identification.
Even with perfect randomization, all else may not be equal when comparing treatment groups in AI experiments ([Gui and Toubia, 2023](https://arxiv.org/html/2301.07543v2#bib.bib69)).
The core challenge is that editing a prompt to change one factor may inadvertently cause other factors to change; the experiment may then not manage to isolate a single cause.
However, such a problem is a question of external validity—whether a given randomized manipulation generalizes to environments with other downstream variables, variables that may influence outcomes in ways the original controlled experiment did not capture.

External validity is a problem for experiments both with human and AI agents.
Consider the prompt parameterized by the wage asks of the two applicants in our dishwashing experiment.
The experimental design iterated over combinations of the two wage asks, with an externally imposed minimum wage forcing up the wage asks when they were below $15/hour.
We first ran the experiment without a reference wage.
When we repeated the experiment with a reference wage of $12, the effect of the minimum wage on both the wage and experience of the hired worker increased.

The critique is an explanation for this difference.
Without a reference wage, the LLM may impute values for the reference wage as a function of the wage asks learned during training.
And if the LLM’s response distribution changes with the reference wage, then treatment assignment could influence the potential outcomes of the hired worker’s wage and experience.
Instead of the experiment generating the LLM’s response based on the hiring prompt with no reference wage, the experiment is actually based on the hiring prompt with an imputed reference wage that depends on the wage asks.
Conversely, when the reference wage is $12, the reference wage is specified, so there is no value to impute.

Now, suppose we repeated the [Horton (2025)](https://arxiv.org/html/2301.07543v2#bib.bib92) experiment with people—with and without a reference wage.
It seems plausible, even likely, that if unspecified, the hiring manager would presume some sort of reference wage for applicants based on their wage asks.
As with the LLM experiment, human subjects may impute values for unspecified information that depend on the treatment and their past experiences.
This imputation may affect the potential outcomes.

Stepping back, both the AI and the hypothetical human subjects’ experiments are perfectly randomized.
We can always estimate the downstream causal effects of such exogenous manipulations.
But if we hope to generalize these results to other settings, to claim that the results are externally valid, we must be careful; unspecified information may be relevant to the causal relationships under investigation.

In human-subjects experiments, we deal with questions of external validity in a few ways.
If the experiment is executed in the field (e.g., in a labor market with real employers), it operates in the exact environment of interest, and all possible information is, by definition, specified.
This is not the norm.
Many experiments are much less naturalistic—they are conducted in a lab or a lab-in-the-field and surely only specify some of the information that might be relevant to the outcome of interest ([Levitt and List, 2007](https://arxiv.org/html/2301.07543v2#bib.bib29)).
In these cases, it is incumbent upon the researcher to justify the generalizability of the results ([Camerer, 2015](https://arxiv.org/html/2301.07543v2#bib.bib30)).
They can do this through theory, robustness checks, additional experiments, etc.
We can use AI simulations to help here, to think deeply about the potential sparsity in our experiments and how it might affect the results—just as we do with human-subjects experiments.
We can run robustness checks and, most importantly, run additional simulations quickly at negligible marginal cost ([Shahidi et al., 2025](https://arxiv.org/html/2301.07543v2#bib.bib4)).
*Homo silicus* can provide a powerful check on the assumptions researchers may often take for granted and help us identify possible threats to generalizability.

## 5 Conclusion

This paper reports the results of several experiments using dozens of LLMs as simulated experimental subjects.
We recover core qualitative patterns observed in the analogous human-subjects experiments and surface deviations that are themselves likely informative for future research.
These demonstrations highlight our essential conceptual contribution: *Homo silicus* is best understood as theory in flexibly executable form.
AI simulations can also be a fast, low-cost way to explore ideas, stress-test experimental designs, and calibrate power calculations before committing to costly human data collection.

We make a practical contribution by releasing open-source software that standardizes the design and implementation of AI experiments.
It allows researchers to switch in any model to run an experiment, making it easy to update results even as models evolve.
All experiments in this paper are now button-push reproducible, with extensive documentation.
Our view is that open, reproducible research can be facilitated by pushing the costs of replication, transparency, and distribution toward zero.

In terms of future work, the most pressing task is to better understand when AI simulations are high-fidelity: to sketch the families of settings and assumptions where they track *Homo sapiens*, and to be candid about where they do not.
This missing map is the key limitation today.
However, there is already progress on this front.
For now, we can say that AI simulations are most informative when mechanisms can be written as clear instructions, the domain is well represented in digital text, and researchers can benchmark on related tasks with human data when possible.
As we improve our mapping, future opportunities will emerge.
One particularly promising direction is automated scientific loops: systems that propose hypotheses, instantiate agents, run and score simulations, and iterate ([Manning et al., 2024](https://arxiv.org/html/2301.07543v2#bib.bib40)).
Such systems could dramatically accelerate research productivity.

## References

- Aher et al. (2022)
  G. Aher, R. I. Arriaga, and A. T. Kalai
  Using large language models to simulate multiple humans.
  arXiv preprint arXiv:2208.10264.
  Cited by: [§1](https://arxiv.org/html/2301.07543v2#S1.p2.1 "1 Introduction ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Akerlof and Yellen (1985)
  G. A. Akerlof and J. L. Yellen
  Can small deviations from rationality make significant differences to economic equilibria?.
  The American Economic Review 75 (4), pp. 708–720.
  External Links: [Link](http://www.jstor.org/stable/1821349)
  Cited by: [§3.2](https://arxiv.org/html/2301.07543v2#S3.SS2.p5.1 "3.2 Homo silicus as theory ‣ 3 Why and when we can learn from Homo silicus ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Alberti et al. (2019)
  C. Alberti, K. Lee, and M. Collins
  A bert baseline for the natural questions.
  arXiv preprint arXiv:1901.08634.
  Cited by: [footnote 3](https://arxiv.org/html/2301.07543v2#footnote3 "In 1 Introduction ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Andrews et al. (2025)
  I. Andrews, D. Fudenberg, L. Lei, A. Liang, and C. Wu
  The transfer performance of economic models.
  External Links: 2202.04796,
  [Link](https://arxiv.org/abs/2202.04796)
  Cited by: [§3.2](https://arxiv.org/html/2301.07543v2#S3.SS2.p9.1 "3.2 Homo silicus as theory ‣ 3 Why and when we can learn from Homo silicus ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Angelopoulos et al. (2023)
  A. N. Angelopoulos, S. Bates, C. Fannjiang, M. I. Jordan, and T. Zrnic
  Prediction-powered inference.
  Science 382 (6671), pp. 669–674.
  External Links: https://www.science.org/doi/pdf/10.1126/science.adi6000
  Cited by: [§3.3](https://arxiv.org/html/2301.07543v2#S3.SS3.p5.1 "3.3 Using Homo silicus to navigate uncharted territory ‣ 3 Why and when we can learn from Homo silicus ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Argyle et al. (2023)
  L. P. Argyle, E. C. Busby, N. Fulda, J. R. Gubler, C. Rytting, and D. Wingate
  Out of one, many: using language models to simulate human samples.
  Political Analysis 31 (3), pp. 337–351.
  External Links: [Document](https://dx.doi.org/10.1017/pan.2023.2)
  Cited by: [footnote 20](https://arxiv.org/html/2301.07543v2#footnote20 "In 4.6 Causal inference with AI simulations is challenging ‣ 4 Conceptual issues ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Arrow (1962)
  K. J. Arrow
  The economic implications of learning by doing.
  The Review of Economic Studies 29 (3), pp. 155–173.
  External Links: [Document](https://dx.doi.org/10.2307/2295952),
  [Link](https://doi.org/10.2307/2295952)
  Cited by: [§3.2](https://arxiv.org/html/2301.07543v2#S3.SS2.p5.1 "3.2 Homo silicus as theory ‣ 3 Why and when we can learn from Homo silicus ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Atari et al. (2023)
  M. Atari, M. J. Xue, P. S. Park, D. E. Blasi, and J. Henrich
  Which humans?.
  Technical report
   Arxiv.
  Note: https://doi.org/10.31234/osf.io/5b26t
  External Links: [Link](https://doi.org/10.31234/osf.io/5b26t)
  Cited by: [footnote 18](https://arxiv.org/html/2301.07543v2#footnote18 "In 4.3 Black boxes with incoherent world models ‣ 4 Conceptual issues ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Bai et al. (2022)
  Y. Bai, A. Jones, K. Ndousse, A. Askell, A. Chen, N. DasSarma, D. Drain, S. Fort, D. Ganguli, T. Henighan, N. Joseph, S. Kadavath, J. Kernion, T. Conerly, S. El-Showk, N. Elhage, Z. Hatfield-Dodds, D. Hernandez, T. Hume, S. Johnston, S. Kravec, L. Lovitt, N. Nanda, C. Olsson, D. Amodei, T. Brown, J. Clark, S. McCandlish, C. Olah, B. Mann, and J. Kaplan
  Training a helpful and harmless assistant with reinforcement learning from human feedback.
  External Links: 2204.05862,
  [Link](https://arxiv.org/abs/2204.05862)
  Cited by: [§1](https://arxiv.org/html/2301.07543v2#S1.p4.1 "1 Introduction ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [§3.2](https://arxiv.org/html/2301.07543v2#S3.SS2.p12.1 "3.2 Homo silicus as theory ‣ 3 Why and when we can learn from Homo silicus ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Banki et al. (2025)
  D. Banki, U. Simonsohn, R. Walatka, and G. Wu
  Decisions under risk are decisions under complexity: comment.
  SSRN Electronic Journal.
  Note: Available at SSRN: <https://ssrn.com/abstract=5127515>
  External Links: [Link](https://ssrn.com/abstract=5127515),
  [Document](https://dx.doi.org/10.2139/ssrn.5127515)
  Cited by: [§2.4](https://arxiv.org/html/2301.07543v2#S2.SS4.p11.1 "2.4 A complexity view of prospect theory ( , ) ‣ 2 Experiments ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [§2.4](https://arxiv.org/html/2301.07543v2#S2.SS4.p12.1 "2.4 A complexity view of prospect theory ( , ) ‣ 2 Experiments ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [§2.4](https://arxiv.org/html/2301.07543v2#S2.SS4.p4.1 "2.4 A complexity view of prospect theory ( , ) ‣ 2 Experiments ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Binz et al. (2025)
  M. Binz, E. Akata, M. Bethge, F. Brändle, F. Callaway, J. Coda-Forno, P. Dayan, C. Demircan, M. K. Eckstein, N. Éltető, T. L. Griffiths, S. Haridi, A. K. Jagadish, L. Ji-An, A. Kipnis, S. Kumar, T. Ludwig, M. Mathony, M. Mattar, A. Modirshanechi, S. S. Nath, J. C. Peterson, M. Rmus, E. M. Russek, T. Saanum, N. Scharfenberg, J. A. Schubert, L. M. Schulze Buschoff, N. Singhi, X. Sui, M. Thalmann, F. J. Theis, V. Truong, V. Udandarao, K. Voudouris, R. Wilson, K. Witte, S. Wu, D. U. Wulff, H. Xiong, and E. Schulz
  A foundation model to predict and capture human cognition.
  Nature 644 (8078), pp. 1002–1009.
  External Links: [Document](https://dx.doi.org/10.1038/s41586-025-09215-4)
  Cited by: [§1](https://arxiv.org/html/2301.07543v2#S1.p15.1 "1 Introduction ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [§3.3](https://arxiv.org/html/2301.07543v2#S3.SS3.p10.1 "3.3 Using Homo silicus to navigate uncharted territory ‣ 3 Why and when we can learn from Homo silicus ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [footnote 14](https://arxiv.org/html/2301.07543v2#footnote14 "In 3.3 Using Homo silicus to navigate uncharted territory ‣ 3 Why and when we can learn from Homo silicus ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Binz and Schulz (2023)
  M. Binz and E. Schulz
  Turning large language models into cognitive models.
  External Links: 2306.03917
  Cited by: [footnote 3](https://arxiv.org/html/2301.07543v2#footnote3 "In 1 Introduction ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Bowman (2023)
  S. R. Bowman
  Eight things to know about large language models.
  External Links: 2304.00612
  Cited by: [§1](https://arxiv.org/html/2301.07543v2#S1.p2.1 "1 Introduction ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [§2](https://arxiv.org/html/2301.07543v2#S2.p3.1 "2 Experiments ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Brand et al. (2023)
  J. Brand, A. Israeli, and D. Ngwe
  Using gpt for market research.
  Harvard Business School Marketing Unit Working Paper 23-062.
  External Links: [Link](https://ssrn.com/abstract=4395751),
  [Document](https://dx.doi.org/10.2139/ssrn.4395751)
  Cited by: [§1](https://arxiv.org/html/2301.07543v2#S1.p15.1 "1 Introduction ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Broska et al. (2025)
  D. Broska, M. Howes, and A. van Loon
  The mixed subjects design: treating large language models as potentially informative observations.
  MIT Sloan Research Paper No. 7154-24
   MIT Sloan School of Management.
  Note: Available at SSRN: <https://ssrn.com/abstract=5133034> or <http://dx.doi.org/10.2139/ssrn.5133034>
  Cited by: [§3.3](https://arxiv.org/html/2301.07543v2#S3.SS3.p5.1 "3.3 Using Homo silicus to navigate uncharted territory ‣ 3 Why and when we can learn from Homo silicus ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Brown et al. (2020)
  T. Brown, B. Mann, N. Ryder, M. Subbiah, J. D. Kaplan, P. Dhariwal, A. Neelakantan, P. Shyam, G. Sastry, A. Askell, S. Agarwal, A. Herbert-Voss, G. Krueger, T. Henighan, R. Child, A. Ramesh, D. Ziegler, J. Wu, C. Winter, C. Hesse, M. Chen, E. Sigler, M. Litwin, S. Gray, B. Chess, J. Clark, C. Berner, S. McCandlish, A. Radford, I. Sutskever, and D. Amodei
  Language models are few-shot learners.
  In Advances in Neural Information Processing Systems,
  Vol. 33.
  Cited by: [§4.1](https://arxiv.org/html/2301.07543v2#S4.SS1.p1.1 "4.1 The “garbage in, garbage out” critique ‣ 4 Conceptual issues ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [footnote 17](https://arxiv.org/html/2301.07543v2#footnote17 "In 4.3 Black boxes with incoherent world models ‣ 4 Conceptual issues ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Bui et al. (2025)
  N. Bui, H. T. Nguyen, S. Kumar, J. Theodore, W. Qiu, V. A. Nguyen, and R. Ying
  Mixture-of-personas language models for population simulation.
  External Links: 2504.05019,
  [Link](https://arxiv.org/abs/2504.05019)
  Cited by: [footnote 7](https://arxiv.org/html/2301.07543v2#footnote7 "In 2.2.1 Constructing a calibrated sample of AI agents ‣ 2.2 A social preferences experiment ( , ) ‣ 2 Experiments ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Bybee (2025)
  J. L. Bybee
  The ghost in the machine: generating beliefs with large language models.
  Working Paper
   University of Chicago Booth School of Business.
  Cited by: [§1](https://arxiv.org/html/2301.07543v2#S1.p15.1 "1 Introduction ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Camerer (2015)
  C. F. Camerer
  The promise and success of lab-field generalizability in experimental economics: a critical reply to levitt and list.
  In Handbook of Experimental Economic Methodology,
  External Links: ISBN 9780195328325,
  [Document](https://dx.doi.org/10.1093/acprof%3Aoso/9780195328325.003.0016),
  [Link](https://doi.org/10.1093/acprof:oso/9780195328325.003.0016),
  https://academic.oup.com/book/0/chapter/159288428/chapter-ag-pdf/44932392/book\_10978\_section\_159288428.ag.pdf
  Cited by: [§4.6](https://arxiv.org/html/2301.07543v2#S4.SS6.p8.1 "4.6 Causal inference with AI simulations is challenging ‣ 4 Conceptual issues ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Capra et al. (2024)
  C. M. Capra, A. Gonzalez-Bonorino, and E. Pantoja
  LLMs Model Non-WEIRD Populations: Experiments with Synthetic Cultural Agents.
  Note: SSRN Electronic Journal
  External Links: [Document](https://dx.doi.org/10.2139/ssrn.5082714)
  Cited by: [footnote 15](https://arxiv.org/html/2301.07543v2#footnote15 "In 4.1 The “garbage in, garbage out” critique ‣ 4 Conceptual issues ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Chang et al. (2024)
  S. Chang, A. Chaszczewicz, E. Wang, M. Josifovska, E. Pierson, and J. Leskovec
  LLMs generate structurally realistic social networks but overestimate political homophily.
  External Links: 2408.16629,
  [Link](https://arxiv.org/abs/2408.16629)
  Cited by: [§1](https://arxiv.org/html/2301.07543v2#S1.p15.1 "1 Introduction ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Charness et al. (2025)
  G. Charness, B. Jabarian, and J. A. List
  The next generation of experimental research with llms.
  Nature Human Behaviour 9, pp. 833–835.
  External Links: [Document](https://dx.doi.org/10.1038/s41562-025-02137-1),
  [Link](https://doi.org/10.1038/s41562-025-02137-1)
  Cited by: [§2](https://arxiv.org/html/2301.07543v2#S2.p3.1 "2 Experiments ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Charness and Rabin (2002)
  G. Charness and M. Rabin
  Understanding social preferences with simple tests.
  The quarterly journal of economics 117 (3), pp. 817–869.
  Cited by: [Figure A1](https://arxiv.org/html/2301.07543v2#A1.F1 "In Appendix A Figures from the original draft ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [§1](https://arxiv.org/html/2301.07543v2#S1.p8.1 "1 Introduction ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [Figure 3](https://arxiv.org/html/2301.07543v2#S2.F3.fig1 "In 2.2 A social preferences experiment ( , ) ‣ 2 Experiments ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [Figure 3](https://arxiv.org/html/2301.07543v2#S2.F3.fig1.3.2 "In 2.2 A social preferences experiment ( , ) ‣ 2 Experiments ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [Figure 3](https://arxiv.org/html/2301.07543v2#S2.F3.fig1.5 "In 2.2 A social preferences experiment ( , ) ‣ 2 Experiments ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [Figure 4](https://arxiv.org/html/2301.07543v2#S2.F4.fig1.3.2 "In 2.2.1 Constructing a calibrated sample of AI agents ‣ 2.2 A social preferences experiment ( , ) ‣ 2 Experiments ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [§2.2](https://arxiv.org/html/2301.07543v2#S2.SS2 "2.2 A social preferences experiment ( , ) ‣ 2 Experiments ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [§2.2.1](https://arxiv.org/html/2301.07543v2#S2.SS2.SSS1.p2.1 "2.2.1 Constructing a calibrated sample of AI agents ‣ 2.2 A social preferences experiment ( , ) ‣ 2 Experiments ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [§2.2.1](https://arxiv.org/html/2301.07543v2#S2.SS2.SSS1.p3.1 "2.2.1 Constructing a calibrated sample of AI agents ‣ 2.2 A social preferences experiment ( , ) ‣ 2 Experiments ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [§2.2.1](https://arxiv.org/html/2301.07543v2#S2.SS2.SSS1.p4.1 "2.2.1 Constructing a calibrated sample of AI agents ‣ 2.2 A social preferences experiment ( , ) ‣ 2 Experiments ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [§2.2](https://arxiv.org/html/2301.07543v2#S2.SS2.p1.1 "2.2 A social preferences experiment ( , ) ‣ 2 Experiments ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [§2.2](https://arxiv.org/html/2301.07543v2#S2.SS2.p3.1 "2.2 A social preferences experiment ( , ) ‣ 2 Experiments ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [§3.2](https://arxiv.org/html/2301.07543v2#S3.SS2.p15.1 "3.2 Homo silicus as theory ‣ 3 Why and when we can learn from Homo silicus ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [§3.2](https://arxiv.org/html/2301.07543v2#S3.SS2.p7.1 "3.2 Homo silicus as theory ‣ 3 Why and when we can learn from Homo silicus ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [§3.2](https://arxiv.org/html/2301.07543v2#S3.SS2.p7.2 "3.2 Homo silicus as theory ‣ 3 Why and when we can learn from Homo silicus ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [§3.2](https://arxiv.org/html/2301.07543v2#S3.SS2.p8.1 "3.2 Homo silicus as theory ‣ 3 Why and when we can learn from Homo silicus ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [§3.3](https://arxiv.org/html/2301.07543v2#S3.SS3.p8.1 "3.3 Using Homo silicus to navigate uncharted territory ‣ 3 Why and when we can learn from Homo silicus ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [Abstract](https://arxiv.org/html/2301.07543v2#abstract1.1 "Abstract ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Cheng et al. (2023)
  M. Cheng, T. Piccardi, and D. Yang
  CoMPosT: characterizing and evaluating caricature in llm simulations.
  ArXiv abs/2310.11501.
  External Links: [Link](https://api.semanticscholar.org/CorpusID:264288848)
  Cited by: [footnote 18](https://arxiv.org/html/2301.07543v2#footnote18 "In 4.3 Black boxes with incoherent world models ‣ 4 Conceptual issues ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Crawford and Sobel (1982)
  V. P. Crawford and J. Sobel
  Strategic information transmission.
  Econometrica 50 (6), pp. 1431–1451.
  External Links: ISSN 00129682, 14680262,
  [Link](http://www.jstor.org/stable/1913390)
  Cited by: [§3.1](https://arxiv.org/html/2301.07543v2#S3.SS1.p6.1 "3.1 Why LLMs can simulate human behavior ‣ 3 Why and when we can learn from Homo silicus ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- DellaVigna et al. (2019)
  S. DellaVigna, D. Pope, and E. Vivalt
  Predict science to improve science.
  Science 366 (6464), pp. 428–429.
  External Links: [Document](https://dx.doi.org/10.1126/science.aaz1704),
  [Link](https://www.science.org/doi/abs/10.1126/science.aaz1704),
  https://www.science.org/doi/pdf/10.1126/science.aaz1704
  Cited by: [§3.3](https://arxiv.org/html/2301.07543v2#S3.SS3.p3.1 "3.3 Using Homo silicus to navigate uncharted territory ‣ 3 Why and when we can learn from Homo silicus ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Dohmen et al. (2010)
  T. Dohmen, A. Falk, D. Huffman, and U. Sunde
  Are risk aversion and impatience related to cognitive ability?.
  American Economic Review 100 (3), pp. 123–60.
  External Links: [Document](https://dx.doi.org/10.1257/aer.100.3.1238),
  [Link](https://www.aeaweb.org/articles?id=10.1257/aer.100.3.1238)
  Cited by: [footnote 10](https://arxiv.org/html/2301.07543v2#footnote10 "In 2.4 A complexity view of prospect theory ( , ) ‣ 2 Experiments ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Duckworth et al. (2025)
  A. L. Duckworth, A. Ko, K. L. Milkman, J. S. Kay, E. Dimant, D. M. Gromet, A. Halpern, Y. Jung, M. K. Paxson, R. A. S. Zumaran, R. Berman, I. Brody, C. F. Camerer, E. A. Canning, H. Dai, M. Gallo, H. E. Hershfield, M. D. Hilchey, A. Kalil, K. M. Kroeper, A. Lyon, B. S. Manning, N. Mazar, M. Michelini, S. E. Mayer, M. C. Murphy, P. Oreopoulos, S. E. Parker, R. Rondina, D. Soman, and C. V. den Bulte
  A national megastudy shows that email nudges to elementary school teachers boost student math achievement, particularly when personalized.
  Proceedings of the National Academy of Sciences 122 (13), pp. e2418616122.
  External Links: [Document](https://dx.doi.org/10.1073/pnas.2418616122),
  [Link](https://www.pnas.org/doi/abs/10.1073/pnas.2418616122),
  https://www.pnas.org/doi/pdf/10.1073/pnas.2418616122
  Cited by: [§3.3](https://arxiv.org/html/2301.07543v2#S3.SS3.p3.1 "3.3 Using Homo silicus to navigate uncharted territory ‣ 3 Why and when we can learn from Homo silicus ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Egami et al. (2023)
  N. Egami, M. Hinck, B. Stewart, and H. Wei
  Using imperfect surrogates for downstream inference: design-based supervised learning for social science applications of large language models.
  In Advances in Neural Information Processing Systems, A. Oh, T. Naumann, A. Globerson, K. Saenko, M. Hardt, and S. Levine (Eds.),
  Vol. 36, pp. 68589–68601.
  External Links: [Link](https://proceedings.neurips.cc/paper_files/paper/2023/file/d862f7f5445255090de13b825b880d59-Paper-Conference.pdf)
  Cited by: [§3.3](https://arxiv.org/html/2301.07543v2#S3.SS3.p5.1 "3.3 Using Homo silicus to navigate uncharted territory ‣ 3 Why and when we can learn from Homo silicus ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Elhage et al. (2021)
  N. Elhage, N. Nanda, C. Olsson, T. Henighan, N. Joseph, B. Mann, A. Askell, Y. Bai, A. Chen, T. Conerly, N. DasSarma, D. Drain, D. Ganguli, Z. Hatfield-Dodds, D. Hernandez, A. Jones, J. Kernion, L. Lovitt, K. Ndousse, D. Amodei, T. Brown, J. Clark, J. Kaplan, S. McCandlish, and C. Olah
  A mathematical framework for transformer circuits.
  Transformer Circuits Thread.
  External Links: [Link](https://transformer-circuits.pub/2021/framework/index.html)
  Cited by: [§3.2](https://arxiv.org/html/2301.07543v2#S3.SS2.p14.1 "3.2 Homo silicus as theory ‣ 3 Why and when we can learn from Homo silicus ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Enke and Shubatt (2023)
  B. Enke and C. Shubatt
  Quantifying lottery choice complexity.
  Working Paper
  Technical Report 31677, Working Paper Series, National Bureau of Economic Research.
  External Links: [Document](https://dx.doi.org/10.3386/w31677),
  [Link](http://www.nber.org/papers/w31677)
  Cited by: [footnote 12](https://arxiv.org/html/2301.07543v2#footnote12 "In 3.2 Homo silicus as theory ‣ 3 Why and when we can learn from Homo silicus ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- et al. (2022)
  V. S. et al.
  Multitask prompted training enables zero-shot task generalization.
  In International Conference on Learning Representations,
  External Links: [Link](https://openreview.net/forum?id=9Vrb9D0WI4)
  Cited by: [footnote 17](https://arxiv.org/html/2301.07543v2#footnote17 "In 4.3 Black boxes with incoherent world models ‣ 4 Conceptual issues ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Fehr and Schmidt (1999)
  E. Fehr and K. M. Schmidt
  A theory of fairness, competition, and cooperation.
  Quarterly Journal of Economics 114 (3), pp. 817–868.
  External Links: [Document](https://dx.doi.org/10.1162/003355399556151)
  Cited by: [§3.1](https://arxiv.org/html/2301.07543v2#S3.SS1.p3.1 "3.1 Why LLMs can simulate human behavior ‣ 3 Why and when we can learn from Homo silicus ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Fish et al. (2025)
  S. Fish, Y. A. Gonczarowski, and R. I. Shorrer
  Algorithmic collusion by large language models.
  External Links: 2404.00806,
  [Link](https://arxiv.org/abs/2404.00806)
  Cited by: [§1](https://arxiv.org/html/2301.07543v2#S1.p15.1 "1 Introduction ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Friedman (1953)
  M. Friedman
  The methodology of positive economics.
   University of Chicago Press, Chicago.
  Cited by: [§4](https://arxiv.org/html/2301.07543v2#S4.p1.1 "4 Conceptual issues ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Fudenberg and Liang (2019)
  D. Fudenberg and A. Liang
  Predicting and understanding initial play.
  American Economic Review 109 (12), pp. 4112–41.
  External Links: [Document](https://dx.doi.org/10.1257/aer.20180654),
  [Link](https://www.aeaweb.org/articles?id=10.1257/aer.20180654)
  Cited by: [§3.2](https://arxiv.org/html/2301.07543v2#S3.SS2.p9.1 "3.2 Homo silicus as theory ‣ 3 Why and when we can learn from Homo silicus ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Gandhi et al. (2024)
  L. Gandhi, A. L. Duckworth, and B. S. Manning
  Effect size magnification: no variable is as important as the one you’re thinking about—while you’re thinking about it.
  Current Directions in Psychological Science.
  Cited by: [§3.3](https://arxiv.org/html/2301.07543v2#S3.SS3.p3.1 "3.3 Using Homo silicus to navigate uncharted territory ‣ 3 Why and when we can learn from Homo silicus ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Gandhi et al. (2025)
  L. Gandhi, A. Kiyawat, C. Camerer, and D. J. Watts
  Hypothetical nudges provide directional but noisy estimates of real behavior change.
  Communications Psychology 3, pp. 158.
  External Links: [Document](https://dx.doi.org/10.1038/s44271-025-00339-x)
  Cited by: [§3.3](https://arxiv.org/html/2301.07543v2#S3.SS3.p3.1 "3.3 Using Homo silicus to navigate uncharted territory ‣ 3 Why and when we can learn from Homo silicus ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Gneiting and Raftery (2007)
  T. Gneiting and A. E. Raftery
  Strictly proper scoring rules, prediction, and estimation.
  Journal of the American statistical Association 102 (477), pp. 359–378.
  Cited by: [§3.1](https://arxiv.org/html/2301.07543v2#S3.SS1.p10.1 "3.1 Why LLMs can simulate human behavior ‣ 3 Why and when we can learn from Homo silicus ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Gui and Toubia (2023)
  G. Gui and O. Toubia
  The challenge of using llms to simulate human behavior: a causal inference perspective.
  SSRN Electronic Journal.
  External Links: ISSN 1556-5068,
  [Link](http://dx.doi.org/10.2139/ssrn.4650172),
  [Document](https://dx.doi.org/10.2139/ssrn.4650172)
  Cited by: [§4.6](https://arxiv.org/html/2301.07543v2#S4.SS6.p3.1 "4.6 Causal inference with AI simulations is challenging ‣ 4 Conceptual issues ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Hewitt et al. (2024)
  L. Hewitt, A. Ashokkumar, I. Ghezae, and R. Willer
  Predicting results of social science experiments using large language models.
  Preprint.
  Note: \*Equal contribution, order randomized
  External Links: [Link](https://docsend.com/view/ity6yf2dansesucf)
  Cited by: [§1](https://arxiv.org/html/2301.07543v2#S1.p15.1 "1 Introduction ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [§3.3](https://arxiv.org/html/2301.07543v2#S3.SS3.p10.1 "3.3 Using Homo silicus to navigate uncharted territory ‣ 3 Why and when we can learn from Homo silicus ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Hirasawa et al. (2022)
  T. Hirasawa, M. Kandori, and A. Matsushita
  Using big data and machine learning to uncover how players choose mixed strategies.
   UCLA and University of Tokyo.
  Note: Preliminary
  Cited by: [§3.2](https://arxiv.org/html/2301.07543v2#S3.SS2.p9.1 "3.2 Homo silicus as theory ‣ 3 Why and when we can learn from Homo silicus ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Horton (2025)
  J. J. Horton
  Price floors and employer preferences: evidence from a minimum wage experiment.
  American Economic Review 115 (1), pp. 117–46.
  External Links: [Document](https://dx.doi.org/10.1257/aer.20170637),
  [Link](https://www.aeaweb.org/articles?id=10.1257/aer.20170637)
  Cited by: [§1](https://arxiv.org/html/2301.07543v2#S1.p11.1 "1 Introduction ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [§2.5](https://arxiv.org/html/2301.07543v2#S2.SS5 "2.5 Labor-labor substitution under a minimum wage ( , ) ‣ 2 Experiments ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [§2.5](https://arxiv.org/html/2301.07543v2#S2.SS5.p1.1 "2.5 Labor-labor substitution under a minimum wage ( , ) ‣ 2 Experiments ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [§2.5](https://arxiv.org/html/2301.07543v2#S2.SS5.p5.1 "2.5 Labor-labor substitution under a minimum wage ( , ) ‣ 2 Experiments ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [§4.6](https://arxiv.org/html/2301.07543v2#S4.SS6.p6.1 "4.6 Causal inference with AI simulations is challenging ‣ 4 Conceptual issues ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [Abstract](https://arxiv.org/html/2301.07543v2#abstract1.1 "Abstract ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Kahneman et al. (1986)
  D. Kahneman, J. L. Knetsch, and R. Thaler
  Fairness as a constraint on profit seeking: entitlements in the market.
  The American economic review, pp. 728–741.
  Cited by: [Figure A2](https://arxiv.org/html/2301.07543v2#A1.F2 "In Appendix A Figures from the original draft ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [Figure A4](https://arxiv.org/html/2301.07543v2#A3.F4.5.2 "In Appendix C Additional Figures and Tables ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [Table A2](https://arxiv.org/html/2301.07543v2#A3.T2.fig1 "In Appendix C Additional Figures and Tables ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [Table A2](https://arxiv.org/html/2301.07543v2#A3.T2.fig1.5 "In Appendix C Additional Figures and Tables ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [§1](https://arxiv.org/html/2301.07543v2#S1.p7.1 "1 Introduction ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [Figure 1](https://arxiv.org/html/2301.07543v2#S2.F1.fig1 "In 2.1 Fairness as a constraint on profit-seeking ( , ) ‣ 2 Experiments ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [Figure 1](https://arxiv.org/html/2301.07543v2#S2.F1.fig1.3.2 "In 2.1 Fairness as a constraint on profit-seeking ( , ) ‣ 2 Experiments ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [Figure 1](https://arxiv.org/html/2301.07543v2#S2.F1.fig1.5 "In 2.1 Fairness as a constraint on profit-seeking ( , ) ‣ 2 Experiments ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [Figure 2](https://arxiv.org/html/2301.07543v2#S2.F2.fig1 "In 2.1.1 Testing generalizability and possible memorization ‣ 2.1 Fairness as a constraint on profit-seeking ( , ) ‣ 2 Experiments ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [Figure 2](https://arxiv.org/html/2301.07543v2#S2.F2.fig1.5 "In 2.1.1 Testing generalizability and possible memorization ‣ 2.1 Fairness as a constraint on profit-seeking ( , ) ‣ 2 Experiments ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [§2.1](https://arxiv.org/html/2301.07543v2#S2.SS1 "2.1 Fairness as a constraint on profit-seeking ( , ) ‣ 2 Experiments ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [§2.1](https://arxiv.org/html/2301.07543v2#S2.SS1.p1.1 "2.1 Fairness as a constraint on profit-seeking ( , ) ‣ 2 Experiments ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [§2.1](https://arxiv.org/html/2301.07543v2#S2.SS1.p5.1 "2.1 Fairness as a constraint on profit-seeking ( , ) ‣ 2 Experiments ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [§4.5](https://arxiv.org/html/2301.07543v2#S4.SS5.p2.1 "4.5 It is easy to “prompt hack” AI experiments ‣ 4 Conceptual issues ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [Abstract](https://arxiv.org/html/2301.07543v2#abstract1.1 "Abstract ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Kahneman and Tversky (1979)
  D. Kahneman and A. Tversky
  Prospect theory: an analysis of decision under risk.
  Econometrica 47 (2), pp. 263–291.
  Note: Accessed: 18 Oct. 2024
  External Links: [Document](https://dx.doi.org/10.2307/1914185),
  [Link](https://doi.org/10.2307/1914185)
  Cited by: [§2.4](https://arxiv.org/html/2301.07543v2#S2.SS4.p1.1 "2.4 A complexity view of prospect theory ( , ) ‣ 2 Experiments ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Kaplan et al. (2020)
  J. Kaplan, S. McCandlish, T. Henighan, T. B. Brown, B. Chess, R. Child, S. Gray, A. Radford, J. Wu, and D. Amodei
  Scaling laws for neural language models.
  External Links: 2001.08361,
  [Link](https://arxiv.org/abs/2001.08361)
  Cited by: [footnote 17](https://arxiv.org/html/2301.07543v2#footnote17 "In 4.3 Black boxes with incoherent world models ‣ 4 Conceptual issues ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Korinek (2023)
  A. Korinek
  Generative ai for economic research: use cases and implications for economists.
  Journal of Economic Literature 61 (4), pp. 1281–1317.
  External Links: [Document](https://dx.doi.org/10.1257/jel.20231736),
  [Link](https://www.aeaweb.org/articles?id=10.1257/jel.20231736)
  Cited by: [§2](https://arxiv.org/html/2301.07543v2#S2.p3.1 "2 Experiments ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Kuhlman et al. (2003)
  B. Kuhlman, G. Dantas, G. C. Ireton, G. Varani, B. L. Stoddard, and D. Baker
  Design of a novel globular protein fold with atomic-level accuracy.
  science 302 (5649), pp. 1364–1368.
  Cited by: [footnote 4](https://arxiv.org/html/2301.07543v2#footnote4 "In 1 Introduction ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Leng et al. (2024)
  Y. Leng, Y. Sang, and A. Agarwal
  Reduce disparity between llms and humans: optimal llm sample calibration.
  Note: Available at SSRN: <https://ssrn.com/abstract=4802019> or <http://dx.doi.org/10.2139/ssrn.4802019>
  External Links: [Link](https://ssrn.com/abstract=4802019),
  [Document](https://dx.doi.org/10.2139/ssrn.4802019)
  Cited by: [footnote 7](https://arxiv.org/html/2301.07543v2#footnote7 "In 2.2.1 Constructing a calibrated sample of AI agents ‣ 2.2 A social preferences experiment ( , ) ‣ 2 Experiments ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Levitt and List (2007)
  S. D. Levitt and J. A. List
  What Do Laboratory Experiments Measuring Social Preferences Reveal About the Real World?.
  Journal of Economic Perspectives 21 (2), pp. 153–174 (en).
  External Links: ISSN 0895-3309,
  [Link](https://pubs.aeaweb.org/doi/10.1257/jep.21.2.153),
  [Document](https://dx.doi.org/10.1257/jep.21.2.153)
  Cited by: [§4.6](https://arxiv.org/html/2301.07543v2#S4.SS6.p8.1 "4.6 Causal inference with AI simulations is challenging ‣ 4 Conceptual issues ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Li et al. (2024)
  P. Li, N. Castelo, Z. Katona, and M. Sarvary
  Frontiers: determining the validity of large language models for automated perceptual analysis.
  Marketing Science 0 (0), pp. null.
  External Links: [Document](https://dx.doi.org/10.1287/mksc.2023.0454),
  [Link](https://doi.org/10.1287/mksc.2023.0454),
  https://doi.org/10.1287/mksc.2023.0454
  Cited by: [§1](https://arxiv.org/html/2301.07543v2#S1.p15.1 "1 Introduction ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Lilleholt (2019)
  L. Lilleholt
  Cognitive ability and risk aversion: a systematic review and meta analysis.
  Judgment and Decision Making 14 (3), pp. 234–279.
  External Links: [Document](https://dx.doi.org/10.1017/S1930297500004307)
  Cited by: [footnote 10](https://arxiv.org/html/2301.07543v2#footnote10 "In 2.4 A complexity view of prospect theory ( , ) ‣ 2 Experiments ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Lucas (1976)
  R. E. Lucas
  Econometric policy evaluation: a critique.
  Carnegie-Rochester Conference Series on Public Policy 1 (1), pp. 19–46.
  Cited by: [§4.4](https://arxiv.org/html/2301.07543v2#S4.SS4.p4.1 "4.4 Are these “just simulations?” ‣ 4 Conceptual issues ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Lucas (1980)
  R. E. Lucas
  Methods and problems in business cycle theory.
  Journal of Money, Credit and Banking 12 (4), pp. 696–715.
  External Links: ISSN 00222879, 15384616,
  [Link](http://www.jstor.org/stable/1992030)
  Cited by: [footnote 1](https://arxiv.org/html/2301.07543v2#footnote1 "In 1 Introduction ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Ludwig et al. (2025)
  J. Ludwig, S. Mullainathan, and A. Rambachan
  Large language models: an applied econometric framework.
  Working Paper
  Technical Report 33344, Working Paper Series, National Bureau of Economic Research.
  External Links: [Document](https://dx.doi.org/10.3386/w33344),
  [Link](http://www.nber.org/papers/w33344)
  Cited by: [§1](https://arxiv.org/html/2301.07543v2#S1.p14.1 "1 Introduction ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [§1](https://arxiv.org/html/2301.07543v2#S1.p5.1 "1 Introduction ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [§3.3](https://arxiv.org/html/2301.07543v2#S3.SS3.p4.1 "3.3 Using Homo silicus to navigate uncharted territory ‣ 3 Why and when we can learn from Homo silicus ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [§3.3](https://arxiv.org/html/2301.07543v2#S3.SS3.p5.1 "3.3 Using Homo silicus to navigate uncharted territory ‣ 3 Why and when we can learn from Homo silicus ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Ludwig and Mullainathan (2024)
  J. Ludwig and S. Mullainathan
  Machine Learning as a Tool for Hypothesis Generation.
  The Quarterly Journal of Economics, pp. qjad055.
  Note: \_eprint: https://academic.oup.com/qje/advance-article-pdf/doi/10.1093/qje/qjad055/56324173/qjad055.pdf
  External Links: ISSN 0033-5533,
  [Link](https://doi.org/10.1093/qje/qjad055),
  [Document](https://dx.doi.org/10.1093/qje/qjad055)
  Cited by: [§3.2](https://arxiv.org/html/2301.07543v2#S3.SS2.p14.1 "3.2 Homo silicus as theory ‣ 3 Why and when we can learn from Homo silicus ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Luo et al. (2023)
  Y. Luo, Z. Yang, F. Meng, Y. Li, J. Zhou, and Y. Zhang
  An empirical study of catastrophic forgetting in large language models during continual fine-tuning.
  IEEE Transactions on Audio, Speech and Language Processing 33, pp. 3776–3786.
  External Links: [Link](https://api.semanticscholar.org/CorpusID:261031244)
  Cited by: [footnote 14](https://arxiv.org/html/2301.07543v2#footnote14 "In 3.3 Using Homo silicus to navigate uncharted territory ‣ 3 Why and when we can learn from Homo silicus ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- MacKenzie (2007)
  D. MacKenzie
  Do economists make markets?: on the performativity of economics.
   Princeton University Press.
  External Links: ISBN 9780691130163,
  [Link](http://www.jstor.org/stable/j.ctv10vm29m)
  Cited by: [§4.2](https://arxiv.org/html/2301.07543v2#S4.SS2.p3.1 "4.2 “Memorization” and “performativity” problems ‣ 4 Conceptual issues ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Manning and Horton (2025)
  B. S. Manning and J. J. Horton
  General social agents.
  External Links: 2508.17407,
  [Link](https://arxiv.org/abs/2508.17407)
  Cited by: [§1](https://arxiv.org/html/2301.07543v2#S1.p14.1 "1 Introduction ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [§2.2.1](https://arxiv.org/html/2301.07543v2#S2.SS2.SSS1.p2.1 "2.2.1 Constructing a calibrated sample of AI agents ‣ 2.2 A social preferences experiment ( , ) ‣ 2 Experiments ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [§2.2.1](https://arxiv.org/html/2301.07543v2#S2.SS2.SSS1.p8.1 "2.2.1 Constructing a calibrated sample of AI agents ‣ 2.2 A social preferences experiment ( , ) ‣ 2 Experiments ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [§3.2](https://arxiv.org/html/2301.07543v2#S3.SS2.p15.1 "3.2 Homo silicus as theory ‣ 3 Why and when we can learn from Homo silicus ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [§3.3](https://arxiv.org/html/2301.07543v2#S3.SS3.p8.1 "3.3 Using Homo silicus to navigate uncharted territory ‣ 3 Why and when we can learn from Homo silicus ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Manning et al. (2024)
  B. S. Manning, K. Zhu, and J. J. Horton
  Automated social science: language models as scientist and subjects.
  NBER Working Paper
  Technical Report 32381, National Bureau of Economic Research.
  External Links: [Document](https://dx.doi.org/10.3386/w32381),
  [Link](https://doi.org/10.3386/w32381)
  Cited by: [§1](https://arxiv.org/html/2301.07543v2#S1.p15.1 "1 Introduction ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [§5](https://arxiv.org/html/2301.07543v2#S5.p3.1 "5 Conclusion ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- McCoy et al. (2024)
  R. T. McCoy, S. Yao, D. Friedman, M. D. Hardy, and T. L. Griffiths
  Embers of autoregression show how large language models are shaped by the problem they are trained to solve.
  Proceedings of the National Academy of Sciences 121 (41), pp. e2322420121.
  External Links: [Document](https://dx.doi.org/10.1073/pnas.2322420121),
  [Link](https://www.pnas.org/doi/abs/10.1073/pnas.2322420121),
  https://www.pnas.org/doi/pdf/10.1073/pnas.2322420121
  Cited by: [§3.3](https://arxiv.org/html/2301.07543v2#S3.SS3.p9.1 "3.3 Using Homo silicus to navigate uncharted territory ‣ 3 Why and when we can learn from Homo silicus ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- MetaAI (2024)
  MetaAI
  Introducing llama 3.
  Note: Accessed: 2024-08-29
  External Links: [Link](https://ai.meta.com/blog/meta-llama-3/)
  Cited by: [§4.1](https://arxiv.org/html/2301.07543v2#S4.SS1.p1.1 "4.1 The “garbage in, garbage out” critique ‣ 4 Conceptual issues ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Milkman et al. (2021)
  K. L. Milkman, D. Gromet, H. Ho, J. S. Kay, T. W. Lee, P. Pandiloski, Y. Park, A. Rai, M. Bazerman, J. Beshears, L. Bonacorsi, C. Camerer, E. Chang, G. Chapman, R. Cialdini, H. Dai, L. Eskreis-Winkler, A. Fishbach, J. J. Gross, S. Horn, A. Hubbard, S. J. Jones, D. Karlan, T. Kautz, E. Kirgios, J. Klusowski, A. Kristal, R. Ladhania, G. Loewenstein, J. Ludwig, B. Mellers, S. Mullainathan, S. Saccardo, J. Spiess, G. Suri, J. H. Talloen, J. Taxer, Y. Trope, L. Ungar, K. G. Volpp, A. Whillans, J. Zinman, and A. L. Duckworth
  Megastudies improve the impact of applied behavioural science.
  Nature 600 (7889), pp. 478–483.
  External Links: ISSN 1476-4687,
  [Link](https://doi.org/10.1038/s41586-021-04128-4),
  [Document](https://dx.doi.org/10.1038/s41586-021-04128-4)
  Cited by: [§3.3](https://arxiv.org/html/2301.07543v2#S3.SS3.p3.1 "3.3 Using Homo silicus to navigate uncharted territory ‣ 3 Why and when we can learn from Homo silicus ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Olah et al. (2020)
  C. Olah, N. Cammarata, L. Schubert, G. Goh, S. Carter, and M. Petrov
  Zoom in: an introduction to circuits.
  Distill.
  External Links: [Document](https://dx.doi.org/10.23915/distill.00024),
  [Link](https://distill.pub/2020/circuits/)
  Cited by: [§3.2](https://arxiv.org/html/2301.07543v2#S3.SS2.p14.1 "3.2 Homo silicus as theory ‣ 3 Why and when we can learn from Homo silicus ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- OpenAI (2024)
  OpenAI
  GPT-4 technical report.
  External Links: 2303.08774,
  [Link](https://arxiv.org/abs/2303.08774)
  Cited by: [footnote 17](https://arxiv.org/html/2301.07543v2#footnote17 "In 4.3 Black boxes with incoherent world models ‣ 4 Conceptual issues ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Oprea (2024a)
  R. Oprea
  Complexity and its measurement.
  Note: Prepared for the *Handbook of Experimental Methods in the Social Sciences*<https://roprea.github.io/papers/measuring_complexity.pdf>
  Cited by: [§2.4](https://arxiv.org/html/2301.07543v2#S2.SS4.p6.1 "2.4 A complexity view of prospect theory ( , ) ‣ 2 Experiments ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Oprea (2024b)
  R. Oprea
  Decisions under risk are decisions under complexity.
  American Economic Review.
  Note: Available online at <https://www.aeaweb.org/journals/aer/forthcoming>
  Cited by: [§1](https://arxiv.org/html/2301.07543v2#S1.p10.1 "1 Introduction ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [Figure 5](https://arxiv.org/html/2301.07543v2#S2.F5.fig1 "In 2.4 A complexity view of prospect theory ( , ) ‣ 2 Experiments ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [Figure 5](https://arxiv.org/html/2301.07543v2#S2.F5.fig1.3.2 "In 2.4 A complexity view of prospect theory ( , ) ‣ 2 Experiments ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [Figure 5](https://arxiv.org/html/2301.07543v2#S2.F5.fig1.5 "In 2.4 A complexity view of prospect theory ( , ) ‣ 2 Experiments ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [§2.4](https://arxiv.org/html/2301.07543v2#S2.SS4 "2.4 A complexity view of prospect theory ( , ) ‣ 2 Experiments ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [§2.4](https://arxiv.org/html/2301.07543v2#S2.SS4.p1.1 "2.4 A complexity view of prospect theory ( , ) ‣ 2 Experiments ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [§2.4](https://arxiv.org/html/2301.07543v2#S2.SS4.p10.1 "2.4 A complexity view of prospect theory ( , ) ‣ 2 Experiments ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [§2.4](https://arxiv.org/html/2301.07543v2#S2.SS4.p11.1 "2.4 A complexity view of prospect theory ( , ) ‣ 2 Experiments ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [§2.4](https://arxiv.org/html/2301.07543v2#S2.SS4.p12.1 "2.4 A complexity view of prospect theory ( , ) ‣ 2 Experiments ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [§2.4](https://arxiv.org/html/2301.07543v2#S2.SS4.p4.1 "2.4 A complexity view of prospect theory ( , ) ‣ 2 Experiments ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [§2.4](https://arxiv.org/html/2301.07543v2#S2.SS4.p6.1 "2.4 A complexity view of prospect theory ( , ) ‣ 2 Experiments ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [§2.4](https://arxiv.org/html/2301.07543v2#S2.SS4.p9.1 "2.4 A complexity view of prospect theory ( , ) ‣ 2 Experiments ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [Abstract](https://arxiv.org/html/2301.07543v2#abstract1.1 "Abstract ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Ouyang et al. (2022)
  L. Ouyang, J. Wu, X. Jiang, D. Almeida, C. L. Wainwright, P. Mishkin, C. Zhang, S. Agarwal, K. Slama, A. Ray, J. Schulman, J. Hilton, F. Kelton, L. Miller, M. Simens, A. Askell, P. Welinder, P. Christiano, J. Leike, and R. Lowe
  Training language models to follow instructions with human feedback.
  In Advances in Neural Information Processing Systems,
  Cited by: [§1](https://arxiv.org/html/2301.07543v2#S1.p4.1 "1 Introduction ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [§2](https://arxiv.org/html/2301.07543v2#S2.p3.1 "2 Experiments ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [§3.2](https://arxiv.org/html/2301.07543v2#S3.SS2.p12.1 "3.2 Homo silicus as theory ‣ 3 Why and when we can learn from Homo silicus ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Park et al. (2024)
  J. S. Park, C. Q. Zou, A. Shaw, B. M. Hill, C. Cai, M. R. Morris, R. Willer, P. Liang, and M. S. Bernstein
  Generative agent simulations of 1,000 people.
  External Links: 2411.10109,
  [Link](https://arxiv.org/abs/2411.10109)
  Cited by: [§1](https://arxiv.org/html/2301.07543v2#S1.p15.1 "1 Introduction ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [footnote 18](https://arxiv.org/html/2301.07543v2#footnote18 "In 4.3 Black boxes with incoherent world models ‣ 4 Conceptual issues ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Pearl (2009)
  J. Pearl
  Causality: models, reasoning and inference.
  2nd edition, Cambridge University Press, USA.
  External Links: ISBN 052189560X
  Cited by: [§3.3](https://arxiv.org/html/2301.07543v2#S3.SS3.p4.1 "3.3 Using Homo silicus to navigate uncharted territory ‣ 3 Why and when we can learn from Homo silicus ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Peterson et al. (2021)
  J. C. Peterson, D. D. Bourgin, M. Agrawal, D. Reichman, and T. L. Griffiths
  Using large-scale experiments and machine learning to discover theories of human decision-making.
  Science 372 (6547), pp. 1209–1214.
  External Links: [Document](https://dx.doi.org/10.1126/science.abe2629),
  [Link](https://www.science.org/doi/abs/10.1126/science.abe2629),
  https://www.science.org/doi/pdf/10.1126/science.abe2629
  Cited by: [§3.2](https://arxiv.org/html/2301.07543v2#S3.SS2.p9.1 "3.2 Homo silicus as theory ‣ 3 Why and when we can learn from Homo silicus ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [footnote 12](https://arxiv.org/html/2301.07543v2#footnote12 "In 3.2 Homo silicus as theory ‣ 3 Why and when we can learn from Homo silicus ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Qian et al. (2025)
  C. Qian, K. Zhu, J. J. Horton, B. S. Manning, V. Tsai, J. Wexler, and N. Thain
  Strategic tradeoffs between humans and ai in multi-agent bargaining.
  External Links: 2509.09071,
  [Link](https://arxiv.org/abs/2509.09071)
  Cited by: [§1](https://arxiv.org/html/2301.07543v2#S1.p15.1 "1 Introduction ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Röttger et al. (2024)
  P. Röttger, V. Hofmann, V. Pyatkin, M. Hinck, H. Kirk, H. Schuetze, and D. Hovy
  Political compass or spinning arrow? towards more meaningful evaluations for values and opinions in large language models.
  In Proceedings of the Association for Computational Linguistics, L. Ku, A. Martins, and V. Srikumar (Eds.),
  External Links: [Link](https://aclanthology.org/2024.acl-long.816),
  [Document](https://dx.doi.org/10.18653/v1/2024.acl-long.816)
  Cited by: [footnote 18](https://arxiv.org/html/2301.07543v2#footnote18 "In 4.3 Black boxes with incoherent world models ‣ 4 Conceptual issues ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Samuelson (1937)
  P. A. Samuelson
  A note on measurement of utility.
  The Review of Economic Studies 4 (2), pp. 155–161.
  External Links: [Document](https://dx.doi.org/10.2307/2967612)
  Cited by: [§3.1](https://arxiv.org/html/2301.07543v2#S3.SS1.p3.1 "3.1 Why LLMs can simulate human behavior ‣ 3 Why and when we can learn from Homo silicus ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Samuelson and Zeckhauser (1988)
  W. Samuelson and R. Zeckhauser
  Status quo bias in decision making.
  Journal of risk and uncertainty 1 (1), pp. 7–59.
  Cited by: [§1](https://arxiv.org/html/2301.07543v2#S1.p9.1 "1 Introduction ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [§2.3](https://arxiv.org/html/2301.07543v2#S2.SS3 "2.3 Status quo bias in decision-making ( , ) ‣ 2 Experiments ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [§2.3](https://arxiv.org/html/2301.07543v2#S2.SS3.p1.1 "2.3 Status quo bias in decision-making ( , ) ‣ 2 Experiments ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [§2.3](https://arxiv.org/html/2301.07543v2#S2.SS3.p2.1 "2.3 Status quo bias in decision-making ( , ) ‣ 2 Experiments ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [Table 1](https://arxiv.org/html/2301.07543v2#S2.T1.fig1 "In 2.3 Status quo bias in decision-making ( , ) ‣ 2 Experiments ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [Table 1](https://arxiv.org/html/2301.07543v2#S2.T1.fig1.3.2 "In 2.3 Status quo bias in decision-making ( , ) ‣ 2 Experiments ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [Table 1](https://arxiv.org/html/2301.07543v2#S2.T1.fig1.5 "In 2.3 Status quo bias in decision-making ( , ) ‣ 2 Experiments ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [Abstract](https://arxiv.org/html/2301.07543v2#abstract1.1 "Abstract ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Santurkar et al. (2023)
  S. Santurkar, E. Durmus, F. Ladhak, C. Lee, P. Liang, and T. Hashimoto
  Whose opinions do language models reflect?.
  In Proceedings of the 40th International Conference on Machine Learning,
  ICML’23.
  Cited by: [footnote 18](https://arxiv.org/html/2301.07543v2#footnote18 "In 4.3 Black boxes with incoherent world models ‣ 4 Conceptual issues ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Sarkar and Vafa (2024)
  S. Sarkar and K. Vafa
  Lookahead bias in pretrained language models.
  SSRN Electronic Journal.
  External Links: [Link](https://ssrn.com/abstract=4754678),
  [Document](https://dx.doi.org/10.2139/ssrn.4754678)
  Cited by: [§1](https://arxiv.org/html/2301.07543v2#S1.p5.1 "1 Introduction ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Schelling (1971)
  T. C. Schelling
  Dynamic models of segregation.
  Journal of mathematical sociology 1 (2), pp. 143–186.
  Cited by: [§4.4](https://arxiv.org/html/2301.07543v2#S4.SS4.p1.1 "4.4 Are these “just simulations?” ‣ 4 Conceptual issues ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Shah et al. (2025)
  A. Shah, K. Zhu, Y. Jiang, J. G. Wang, A. K. Dayi, J. J. Horton, and D. C. Parkes
  Learning from synthetic labs: language models as auction participants.
  External Links: 2507.09083,
  [Link](https://arxiv.org/abs/2507.09083)
  Cited by: [§1](https://arxiv.org/html/2301.07543v2#S1.p15.1 "1 Introduction ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Shahidi et al. (2025)
  P. Shahidi, G. Rusak, B. S. Manning, A. Fradkin, and J. J. Horton
  The coasean singularity: demand, supply, and market design with AI agents.
   University of Chicago Press.
  External Links: [Link](https://www.nber.org/books-and-chapters/economics-transformative-ai/coasean-singularity-demand-supply-and-market-design-ai-agents)
  Cited by: [§4.6](https://arxiv.org/html/2301.07543v2#S4.SS6.p8.1 "4.6 Causal inference with AI simulations is challenging ‣ 4 Conceptual issues ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Simon (1996)
  H. A. Simon
  The Sciences of the Artificial, 3rd Edition.
   edition, MIT Press Books, The MIT Press.
  External Links: [Document](https://dx.doi.org/),
  ISBN ARRAY(0x500bad18),
  [Link](https://ideas.repec.org/b/mtp/titles/0262691914.html)
  Cited by: [§4.3](https://arxiv.org/html/2301.07543v2#S4.SS3.p1.1 "4.3 Black boxes with incoherent world models ‣ 4 Conceptual issues ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Suh et al. (2025)
  J. Suh, E. Jahanparast, S. Moon, M. Kang, and S. Chang
  Language model fine-tuning on scaled survey data for predicting distributions of public opinions.
  External Links: 2502.16761,
  [Link](https://arxiv.org/abs/2502.16761)
  Cited by: [§1](https://arxiv.org/html/2301.07543v2#S1.p15.1 "1 Introduction ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [footnote 14](https://arxiv.org/html/2301.07543v2#footnote14 "In 3.3 Using Homo silicus to navigate uncharted territory ‣ 3 Why and when we can learn from Homo silicus ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Tranchero et al. (2024)
  M. Tranchero, C. Brenninkmeijer, A. Murugan, and A. Nagaraj
  Theorizing with large language models.
  Working Paper
  Technical Report 33033, Working Paper Series, National Bureau of Economic Research.
  External Links: [Document](https://dx.doi.org/10.3386/w33033),
  [Link](http://www.nber.org/papers/w33033)
  Cited by: [§1](https://arxiv.org/html/2301.07543v2#S1.p15.1 "1 Introduction ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Vafa et al. (2025)
  K. Vafa, P. G. Chang, A. Rambachan, and S. Mullainathan
  What has a foundation model found? using inductive bias to probe for world models.
  External Links: 2507.06952,
  [Link](https://arxiv.org/abs/2507.06952)
  Cited by: [footnote 17](https://arxiv.org/html/2301.07543v2#footnote17 "In 4.3 Black boxes with incoherent world models ‣ 4 Conceptual issues ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Vafa et al. (2024a)
  K. Vafa, J. Y. Chen, J. Kleinberg, S. Mullainathan, and A. Rambachan
  Evaluating the world model implicit in a generative model.
  External Links: 2406.03689,
  [Link](https://arxiv.org/abs/2406.03689)
  Cited by: [§4.3](https://arxiv.org/html/2301.07543v2#S4.SS3.p2.1 "4.3 Black boxes with incoherent world models ‣ 4 Conceptual issues ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [footnote 17](https://arxiv.org/html/2301.07543v2#footnote17 "In 4.3 Black boxes with incoherent world models ‣ 4 Conceptual issues ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Vafa et al. (2024b)
  K. Vafa, A. Rambachan, and S. Mullainathan
  Do large language models perform the way people expect? measuring the human generalization function.
  External Links: 2406.01382,
  [Link](https://arxiv.org/abs/2406.01382)
  Cited by: [§3.2](https://arxiv.org/html/2301.07543v2#S3.SS2.p12.1 "3.2 Homo silicus as theory ‣ 3 Why and when we can learn from Homo silicus ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- von Neumann and Morgenstern (1944)
  J. von Neumann and O. Morgenstern
  Theory of games and economic behavior.
   Princeton University Press, Princeton, NJ.
  Cited by: [§3.1](https://arxiv.org/html/2301.07543v2#S3.SS1.p3.1 "3.1 Why LLMs can simulate human behavior ‣ 3 Why and when we can learn from Homo silicus ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Wang et al. (2025)
  M. Wang, D. J. Zhang, and H. Zhang
  Large language models for market research: a data-augmentation approach.
  External Links: 2412.19363,
  [Link](https://arxiv.org/abs/2412.19363)
  Cited by: [§1](https://arxiv.org/html/2301.07543v2#S1.p15.1 "1 Introduction ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Westby and Riedl (2022)
  S. Westby and C. Riedl
  Collective intelligence in human-ai teams: a bayesian theory of mind approach.
   arXiv.
  External Links: [Document](https://dx.doi.org/10.48550/ARXIV.2208.11660),
  [Link](https://arxiv.org/abs/2208.11660)
  Cited by: [footnote 3](https://arxiv.org/html/2301.07543v2#footnote3 "In 1 Introduction ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Xie et al. (2025)
  Y. Xie, Q. Mei, W. Yuan, and M. O. Jackson
  Using language models to decipher the motivation behind human behaviors.
  External Links: 2503.15752,
  [Link](https://arxiv.org/abs/2503.15752)
  Cited by: [§1](https://arxiv.org/html/2301.07543v2#S1.p15.1 "1 Introduction ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [footnote 13](https://arxiv.org/html/2301.07543v2#footnote13 "In 3.2 Homo silicus as theory ‣ 3 Why and when we can learn from Homo silicus ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [footnote 7](https://arxiv.org/html/2301.07543v2#footnote7 "In 2.2.1 Constructing a calibrated sample of AI agents ‣ 2.2 A social preferences experiment ( , ) ‣ 2 Experiments ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Yun et al. (2019)
  C. Yun, S. Bhojanapalli, A. S. Rawat, S. J. Reddi, and S. Kumar
  Are transformers universal approximators of sequence-to-sequence functions?.
  arXiv preprint arXiv:1912.10077.
  Cited by: [§3.1](https://arxiv.org/html/2301.07543v2#S3.SS1.p10.1 "3.1 Why LLMs can simulate human behavior ‣ 3 Why and when we can learn from Homo silicus ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Zhao et al. (2025)
  W. X. Zhao, K. Zhou, J. Li, T. Tang, X. Wang, Y. Hou, Y. Min, B. Zhang, J. Zhang, Z. Dong, Y. Du, C. Yang, Y. Chen, Z. Chen, J. Jiang, R. Ren, Y. Li, X. Tang, Z. Liu, P. Liu, J. Nie, and J. Wen
  A survey of large language models.
  External Links: 2303.18223,
  [Link](https://arxiv.org/abs/2303.18223)
  Cited by: [§2](https://arxiv.org/html/2301.07543v2#S2.p3.1 "2 Experiments ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Zhu et al. (2025a)
  J. Zhu, J. C. Peterson, B. Enke, and T. L. Griffiths
  Capturing the complexity of human strategic decision-making with machine learning.
  Nature Human Behaviour.
  External Links: [Document](https://dx.doi.org/10.1038/s41562-025-02230-5),
  [Link](https://doi.org/10.1038/s41562-025-02230-5)
  Cited by: [§3.2](https://arxiv.org/html/2301.07543v2#S3.SS2.p9.1 "3.2 Homo silicus as theory ‣ 3 Why and when we can learn from Homo silicus ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").
- Zhu et al. (2025b)
  J. Zhu, H. Xie, D. Arumugam, R. C. Wilson, and T. L. Griffiths
  Using reinforcement learning to train large language models to explain human decisions.
  External Links: 2505.11614,
  [Link](https://arxiv.org/abs/2505.11614)
  Cited by: [§3.2](https://arxiv.org/html/2301.07543v2#S3.SS2.p15.1 "3.2 Homo silicus as theory ‣ 3 Why and when we can learn from Homo silicus ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?"),
  [footnote 12](https://arxiv.org/html/2301.07543v2#footnote12 "In 3.2 Homo silicus as theory ‣ 3 Why and when we can learn from Homo silicus ‣ Large Language Models as Simulated Economic Agents:What Can We Learn from Homo Silicus?").

## Appendix A Figures from the original draft

Figure A1: [Charness and Rabin (2002)](https://arxiv.org/html/2301.07543v2#bib.bib78) Simple Tests choices by model type and endowed “personality”

![Refer to caption](https://arxiv.org/html/2301.07543v2/images/original_charness_rabin.png)

*Notes:* This shows the fraction of AI agents choosing each option, by framing.


Figure A2: [Kahneman et al. (1986)](https://arxiv.org/html/2301.07543v2#bib.bib76) price gouging snow shovel question, with endowed political views

![Refer to caption](https://arxiv.org/html/2301.07543v2/images/original_kkt.png)

*Notes:* This shows the fraction of AI agents choosing each opinion, by scenario.


Figure A3: Distribution of preferred car safety budgets, by status quo framing

![Refer to caption](https://arxiv.org/html/2301.07543v2/images/original_zeckhauser.png)

*Notes:* This shows the fraction of AI agents choosing each option by framing.


Table A1: Effects of minimum wage on observed wage and hired worker attributes

![[Uncaptioned image]](https://arxiv.org/html/2301.07543v2/images/original_horton.png)

*Notes:* This reports the results of imposing a minimum wage on the (1) hired worker wage and (2) hired worker experience.

## Appendix B A brief primer on large language models

LLMs are neural networks with complex architectures and large numbers of parameters, estimated (trained) using massive amounts of text.
Broadly speaking, they function as follows.
Given an input prompt, an LLM generates a response by first predicting the most likely next word, and then using the prompt and the words predicted so far to predict subsequent words.21

Training an LLM consists of a “pre-training” phase and a “reinforcement learning with human feedback” (RLHF) phase.
In the pre-training phase, the LLM learns to predict the next word in sequences of text in its training data.
A pre-trained LLM estimates a conditional probability distribution over its training data; the exact estimated distribution depends on design choices such as the architecture and hyperparameters of the LLM.

After pre-training, the model may undergo one or more post-training stages.
The most common post-training step is reinforcement learning with human feedback (RLHF), in which human evaluators rate model outputs, their judgments are used to train a reward model, and the LLM’s parameters are adjusted so that its responses receive higher predicted rewards.
Other post-training steps include supervised fine-tuning (or instruction-tuning), where human-written examples ‘‘teach’’ the model to follow prompts or exhibit a desired style.
In the RLHF phase, the pre-trained LLM is trained further using human feedback.
First, human evaluators prompt the LLM and evaluate its responses.22
The human evaluation data is then used to estimate a separate “reward model,” which predicts human feedback given a prompt and an LLM response.
The LLM’s parameters are updated through a form of reinforcement learning so that its responses receive favorable feedback from the reward model.
The fully trained LLM’s responses are hence optimized toward both accurately predicting the likely next words in sequences of text and receiving high feedback scores from the reward model.
An LLM can always undergo further fine-tuning to make its responses more consistent with a particular persona or writing style.

Users can adjust how the LLM responds to input prompts by changing its “temperature” parameter.
The temperature parameter controls how the LLM samples from its response distribution.
At temperature zero, the LLM is deterministic: it always outputs the highest-probability response.
Increasing the temperature makes the output stochastic and the response distribution more uniform.

## Appendix C Additional Figures and Tables

Figure A4: Example screenshot of linked Jupyter notebooks for running AI simulations

![Refer to caption](https://arxiv.org/html/2301.07543v2/images/edsl_screenshot.png)

*Notes:* This figure shows a screenshot of the Jupyter notebook for the [Kahneman et al. (1986)](https://arxiv.org/html/2301.07543v2#bib.bib76) experiment.
All notebooks in this paper share a similar structure, with instructions and comments throughout the code.
Each also includes links to share or download the notebooks so others can easily replicate the experiments or explore their own ideas.


  

*Notes:*
This table reports regressions where the independent variables are the snow shovel dollar price change relative to its original $15 price, and the AI agents’ political beliefs.
We use “Moderate” as the reference class.
The dependent variable is the fairness assessment of the subjects, which we measure as a continuous variable ranging from 1 (“Very Unfair”) to 4 (“Completely Fair”).
The $\Delta$ Price coefficient represents the change in fairness rating (on the 1–4 scale) for each $1 increase in price above the $15 baseline.
Columns (1-3) show the results for the baseline experiment;
Column (4) for the translated prompts experiment;
Column (5) for the prompt variations experiment; and
Column (6) for the adversarial prompt experiment.
Significance Indicator: ∗p$<$0.05.

Table A2: Estimates of the effects of political beliefs and price hike levels on AI agents’ fairness assessments in four permutations of the [Kahneman et al. (1986)](https://arxiv.org/html/2301.07543v2#bib.bib76) experiment.

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
|  | Dependent variable: | | | | | |
|  | Choice as Numeric from 1 (Very Unfair) to 4 (Completely Fair)) | | | | | |
|  | (1) | (2) | (3) | (4) | (5) | (6) |
| $\Delta$ Price | $-$0.006∗ |  | $-$0.006∗ | $-$0.004∗ | $-$0.009∗ | $-$0.007∗ |
|  | (0.001) |  | (0.0002) | (0.0003) | (0.0002) | (0.0003) |
| Socialist |  | $-$1.438∗ | $-$1.437∗ | $-$0.598∗ | $-$1.005∗ | $-$1.172∗ |
|  |  | (0.030) | (0.027) | (0.038) | (0.027) | (0.030) |
| Leftist |  | $-$1.383∗ | $-$1.383∗ | $-$0.536∗ | $-$1.065∗ | $-$1.113∗ |
|  |  | (0.030) | (0.027) | (0.038) | (0.027) | (0.030) |
| Liberal |  | $-$0.733∗ | $-$0.733∗ | 0.115∗ | $-$0.453∗ | $-$0.653∗ |
|  |  | (0.030) | (0.027) | (0.038) | (0.027) | (0.030) |
| Conservative |  | 0.307∗ | 0.307∗ | 0.008 | 0.422∗ | 0.522∗ |
|  |  | (0.030) | (0.027) | (0.038) | (0.027) | (0.030) |
| Libertarian |  | 0.860∗ | 0.860∗ | 0.847∗ | 1.223∗ | 1.205∗ |
|  |  | (0.030) | (0.027) | (0.038) | (0.027) | (0.030) |
| Constant | 2.462∗ | 2.687∗ | 2.860∗ | 2.352∗ | 2.734∗ | 2.576∗ |
|  | (0.025) | (0.021) | (0.020) | (0.029) | (0.020) | (0.022) |
| Experiment | Baseline | Baseline | Baseline | Translated | Variations | Adversarial |
| Observations | 2,400 | 2,400 | 2,400 | 2,397 | 2,400 | 2,400 |
| R2 | 0.043 | 0.802 | 0.846 | 0.460 | 0.834 | 0.823 |
