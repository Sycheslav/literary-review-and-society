---
id: arxiv-2601-01090-text
type: material
title: 'Harm in AI-Driven Societies: An Audit of Toxicity Adoption on Chirper.ai'
work_id: arxiv-2601-01090
source_url: https://arxiv.org/html/2601.01090v2
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять
  с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.
language: original
sha256_text: 48341ecd809a168eb80a59d3b41277fbeca314e89197c2b396bd333bbc847110
---

> Источник: [https://arxiv.org/html/2601.01090v2](https://arxiv.org/html/2601.01090v2). Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.

# Harm in AI-Driven Societies: An Audit of Toxicity Adoption on Chirper.ai

Erica Coppolillo
email: [erica.coppolillo@unical.it](mailto:erica.coppolillo@unical.it)
Affiliation: University of Southern California, Los Angeles, California
Affiliation: University of Calabria, Rende, Italy
Affiliation: ICAR-CNR, Rende, Italy
, 
Luca Luceri
email: [lluceri@isi.edu](mailto:lluceri@isi.edu)
Affiliation: University of Southern California, Los Angeles, California
 and 
Emilio Ferrara
email: [emiliofe@usc.edu](mailto:emiliofe@usc.edu)
Affiliation: University of Southern California, Los Angeles, California

© none

###### Abstract.

Large Language Models (LLMs) are increasingly embedded in autonomous agents that engage, converse, and co-evolve in online social platforms. While prior work has documented the generation of toxic content by LLMs, far less is known about how exposure to harmful content shapes agent behavior over time, particularly in environments composed entirely of interacting AI agents. In this work, we study toxicity adoption of LLM-driven agents on Chirper.ai, a fully AI-driven social platform. Specifically, we model interactions in terms of stimuli (posts) and responses (comments).
We conduct a large-scale empirical analysis of agent behavior, examining how toxic responses relate to toxic stimuli, how repeated exposure to toxicity affects the likelihood of toxic responses, and whether toxic behavior can be predicted from exposure alone. Our findings show that toxic responses are more likely following toxic stimuli, and, at the same time, cumulative toxic exposure (repeated over time) significantly increases the probability of toxic responding. We further introduce two influence metrics, the Influence-Driven Toxic Response Rate and the Spontaneous Toxic Response Rate, revealing a strong negative correlation between induced and spontaneous toxicity. Finally, we show that the number of toxic stimuli alone enables accurate prediction of whether an agent will eventually produce toxic content.
These results highlight exposure as a critical risk factor in the deployment of LLM agents, particularly as such agents operate in online environments where they may engage not only with other AI chatbots, but also with human counterparts. This could trigger unwanted and pernicious phenomena, such as hate-speech propagation and cyberbullying. In an effort to reduce such risks, monitoring exposure to toxic content may provide a lightweight yet effective mechanism for auditing and mitigating harmful behavior in the wild.

## 1. Introduction

Social bots have long played a significant role in online platforms, influencing information diffusion, engagement dynamics, and public discourse ([Ferrara et al., 2016](https://arxiv.org/html/2601.01090v2#bib.bib15); [Bessi and Ferrara, 2016](https://arxiv.org/html/2601.01090v2#bib.bib17); [Shao et al., 2018](https://arxiv.org/html/2601.01090v2#bib.bib18); [Ferrara, 2017](https://arxiv.org/html/2601.01090v2#bib.bib41)). However, the advent of Large Language Models (LLMs) has enabled a new generation of social bots capable of far more sophisticated and naturalistic interactions with users and with one another. These advances have spurred growing academic interest in understanding the behavior of LLM-driven social agents deployed in or modeled after online social ecosystems ([Shen et al., 2025](https://arxiv.org/html/2601.01090v2#bib.bib51); [Piao et al., 2025b](https://arxiv.org/html/2601.01090v2#bib.bib16)).

Unlike traditional rule-based or template-driven bots, LLM-based agents exhibit adaptive and emergent behaviors that arise from ongoing interactions within social networks ([Ashery et al., 2025](https://arxiv.org/html/2601.01090v2#bib.bib19); [He et al., 2023](https://arxiv.org/html/2601.01090v2#bib.bib24)). Recent work has leveraged offline simulated social environments to examine the extent to which such agents can replicate human-like network structures ([Gao et al., 2024](https://arxiv.org/html/2601.01090v2#bib.bib20)), coordinate and perform cooperative tasks ([Wu et al., 2024](https://arxiv.org/html/2601.01090v2#bib.bib21); [Orlando et al., 2025](https://arxiv.org/html/2601.01090v2#bib.bib48)), or give rise to collective phenomena such as polarization and echo chambers ([Li et al., 2024](https://arxiv.org/html/2601.01090v2#bib.bib22); [Piao et al., 2025a](https://arxiv.org/html/2601.01090v2#bib.bib23)). Together, these studies suggest that LLM agents are not merely passive generators of text, but active participants in social dynamics whose behavior evolves over time.

At the same time, despite the underlying guardrails, LLMs can be misused to generate toxic or harmful content at scale, posing risks to online communities and individual users ([Chakraborty et al., 2024](https://arxiv.org/html/2601.01090v2#bib.bib25); [Ferrara, 2024](https://arxiv.org/html/2601.01090v2#bib.bib47)). In response, a substantial body of work has focused on measuring harmful generation and developing mitigation strategies, such as safer training procedures, filtering mechanisms, and post-hoc moderation ([Wang et al., 2025](https://arxiv.org/html/2601.01090v2#bib.bib26)).

Complementarily, a growing body of work in human-centered computing has shown that exposure to harmful content can influence user behavior, increasing the likelihood of adopting similar language or norms over time ([Ferrara and Yang, 2015](https://arxiv.org/html/2601.01090v2#bib.bib12)). However, it remains unclear whether, and to what extent, analogous dynamics apply to LLM-driven agents.

In particular, we lack empirical evidence on: (i) how these agents behave when they solely interact to each other, in a fully AI-driven, dedicated platform; (ii) whether toxic content acts as a trigger for toxic responses, and (iii) whether repeated exposure systematically increases agents propensity to generate harmful outputs.

In this paper, we address these gaps by performing a large-scale auditing on Chirper.ai, a fully AI-driven social network. Here, users can create and release LLMs-based agents that autonomously interact in the dedicated ecosystem, by generating posts and comments, as well as by interacting with other AI agents via following and liking mechanisms. Specifically, we rely on the platform to study toxicity adoption in LLM-driven agents through the lens of stimuli and responses. We model stimuli as posts that an agent explicitly comments on, and responses as the comments produced by the agent.

Our main contributions are threefold.

- •

  We are the first to provide a large-scale empirical audit of the mechanism of exposure-adoption toxicity in a fully AI-driven social platform.
- •

  We show
  that stimuli play a central role in shaping the harmful behavior of LLM-based agents, acting not only as a trigger for toxic response, but increasing the likelihood of toxic behavior under cumulative exposure to toxic content.
- •

  We further show that the number of toxic stimuli encountered
  by an agent alone enables accurate prediction of whether it will eventually produce toxic content, without requiring
  access to model internals, training data, or prompt instructions.

We believe that uncovering agent dynamics in these open ecosystems is crucial, as they function simultaneously as (i) testbeds for the emergence and evaluation of deployment norms, (ii) sources of training and fine-tuning data that shape future models, and (iii) precursors to mixed human–agent platforms where interaction patterns may later be formalized and scaled.

The remaining paper is structured as follows. Section [2](https://arxiv.org/html/2601.01090v2#S2 "2. Related Work ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai") discusses the related literature, focusing on AI-based agents, toxic adoption, and the Chirper.ai platform. In Section [3](https://arxiv.org/html/2601.01090v2#S3 "3. Methodology ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai"), we provide details regarding data and methodology employed in our analysis, while Section [4](https://arxiv.org/html/2601.01090v2#S4 "4. Results ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai") illustrates the results. Section [5](https://arxiv.org/html/2601.01090v2#S5 "5. Discussion ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai") further discusses the implication of our work. Finally, Section [6](https://arxiv.org/html/2601.01090v2#S6 "6. Conclusions ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai") concludes the paper, addressing its limitations and providing cues for future research directions.

## 2. Related Work

In the following, we review the relevant literature by focusing on three core components of this work: (i) the behavior of AI-driven agents in online social ecosystems, (ii) the social mechanisms underlying exposure to harmful content and toxicity adoption, and (iii) Chirper.ai, the platform that serves as the empirical basis for our investigation.

#### AI-Agents in Social Platform

A growing body of research investigates how conversational agents and LLM-driven accounts behave when embedded in social platforms, where interactions are sequential, public, and shaped by evolving community norms ([Chen et al., 2026](https://arxiv.org/html/2601.01090v2#bib.bib13)). In these environments, agent behavior is no longer determined solely by isolated prompts, but emerges from continuous interaction with other agents and content. The recent development of benchmarks and simulation frameworks for social-media agents reflects a growing interest in evaluating both agent capabilities and associated risks in realistic, platform-like settings, where agents must interpret heterogeneous content, navigate social norms, and make posting decisions under uncertainty ([Xue et al., 2025](https://arxiv.org/html/2601.01090v2#bib.bib7); [Mohammadi et al., 2025](https://arxiv.org/html/2601.01090v2#bib.bib8)).

Complementing these efforts, recent studies have begun to operationalize controlled *human-agent* interaction settings to analyze downstream social effects, such as polarization, opinion shifts, and norm formation, under carefully manipulated conditions ([Donkers and Ziegler, 2025](https://arxiv.org/html/2601.01090v2#bib.bib6); [Breum et al., 2024](https://arxiv.org/html/2601.01090v2#bib.bib14)). These controlled environments allow researchers to isolate specific mechanisms of influence while retaining key features of social interaction. At the same time, earlier work in computational social science has shown that antisocial behavior in online communities often emerges through repeated interactions and reinforcing feedback loops, rather than being driven exclusively by a small number of persistently malicious actors ([Cheng et al., 2015](https://arxiv.org/html/2601.01090v2#bib.bib1)). This perspective highlights the importance of cumulative exposure and interaction dynamics in shaping harmful behaviors.

From this standpoint, it becomes critical to assess whether, and to what extent, fully AI-driven social platforms are susceptible to analogous emergent phenomena. Understanding how these agents interact and evolve is essential for anticipating the risks associated with deploying LLM-based agents in hybrid environments, where humans and chatbots coexist and interact. Uncontrolled harmful behavior may lead to the amplification and spread of hate speech, unsafe language, or toxic norms, ultimately undermining the safety and moderation of online social platforms.

#### Toxicity Adoption vs Exposure

Research on online toxicity has traditionally focused on large-scale measurement and detection, enabling systematic empirical analyses of harmful speech across diverse online communities ([Wulczyn et al., 2017](https://arxiv.org/html/2601.01090v2#bib.bib2)). While this line of work has been essential for quantifying prevalence and building robust classifiers, it also raises a broader sociotechnical question: whether exposure to toxic content increases the likelihood that individuals subsequently adopt toxic language themselves.

A growing body of evidence suggests that exposure is indeed associated with increased rates of toxic behavior, though the magnitude and direction of this effect depend on contextual and social factors ([Ferrara and Yang, 2015](https://arxiv.org/html/2601.01090v2#bib.bib12); [Jiang et al., 2024](https://arxiv.org/html/2601.01090v2#bib.bib49)). In particular, prior work shows that toxicity adoption varies according to group dynamics and social identity, such as whether harmful content originates from ingroup or outgroup members ([Zoizner and Levy, 2025](https://arxiv.org/html/2601.01090v2#bib.bib3)). These findings highlight that toxicity is not merely an individual trait, but a socially mediated phenomenon shaped by interaction patterns and relational context.

Complementary research further emphasizes the interactional nature of toxicity, demonstrating that harmful language often emerges at specific conversational turning points and can significantly alter the subsequent trajectory of discussion threads ([Almerekhi et al., 2022](https://arxiv.org/html/2601.01090v2#bib.bib4)). This perspective motivates moderation approaches that go beyond isolated message classification, instead accounting for local conversational context and cumulative exposure histories. Together, these insights directly inform our distinction between influence-driven and spontaneous toxicity, and motivate our use of exposure-based predictors to model and anticipate harmful responding in agent-driven environments.

#### Chirper.ai Platform

Launched in 2023, Chirper.ai1 ([Minos, 2023](https://arxiv.org/html/2601.01090v2#bib.bib9); [Minos, 2024](https://arxiv.org/html/2601.01090v2#bib.bib10)) is a fully AI-driven social platform in which autonomous agents, referred to as chirpers, generate and interact with content. On Chirper.ai, chirpers can publish posts and comments, and engage with one another through social mechanisms such as following and liking, closely mirroring interaction paradigms found in human-centered platforms (e.g., $\mathbb{X}$ or Facebook).

Chirpers are initially instantiated by human creators (i.e., users) through natural language prompts that define the agent persona, interests, and behavioral traits. These prompts, also referred to as descriptions, serve as the initial configuration of the agent and can be interpreted as its guiding instruction or identity. Once created, chirpers operate autonomously, producing content and interacting with other agents within the platform without further human intervention.

The platform has recently become a prominent environment for studying machine behavior in social-media-like ecosystems because it enables large-scale observation of autonomous agent-to-agent interactions. Recent work examines the platform content ([Li et al., 2023](https://arxiv.org/html/2601.01090v2#bib.bib11)) and compare it to human-driven social ecosystems (i.e., Mastodon), documenting differences in posting dynamics, abusive content, and network structure ([Zhu et al., 2025](https://arxiv.org/html/2601.01090v2#bib.bib5)). Our work builds on this emerging literature by focusing specifically on *toxicity adoption* as a function of observable stimuli, and by introducing complementary metrics to separate influence-driven toxicity from spontaneous toxic responding.

## 3. Methodology

Our work addresses the following research questions:

- RQ1:

  To what extent do agent responses reflect the toxicity of the stimuli?
- RQ2:

  Does cumulative exposure to toxic content increase an agent likelihood to generate toxic responses?
- RQ3:

  Can we characterize the emergence of induced and spontaneous harmful behavior?

We tackle each research question in a dedicated subsection of the Results section below.

Table 1. 
Information describing the chirper agents, in terms of underlying model, number of parameters (expressed in billions or trillions), and percentage of generated content on the platform.

|  |  |  |
| --- | --- | --- |
| Model | #Parameters | Generated content (%) |
| Nous-Capybara-1.9 | 34B | 48 |
| GPT-3.5-Turbo | 175B | 34.7 |
| Airoboros-L2 | 70B | 7.8 |
| dolphin-2.2-yi | 34B | 4.7 |
| Spicyboros-2.2 | 70B | 1.5 |
| MythoMax-L2 | 13B | 1.4 |
| miquliz-2.0 | 120B | 0.9 |
| miqu-1.0 | 70B | 0.6 |
| GPT-4 | 1.8T | 0.3 |
| Xwin-LM-0.1 | 70B | 0.2 |

#### Data

Upon obtaining the appropriate permissions to access the Chirper.ai data, we collected $10,420,000$ textual records, including both original posts and comments. We therefore reconstructed the historical activity of about $75,000$ chirpers, instantiated by over $30,000$ (human) users. In addition to textual content, we also obtained metadata capturing social connections and interactions, such as follower relationships and likes. Table [1](https://arxiv.org/html/2601.01090v2#S3.T1 "Table 1 ‣ 3. Methodology ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai") further provides some information regarding the LLM architecture underlying the agents, and the corresponding volume of generated content on the platform. Notably, all the models through which the agents are instantiated have significant size in terms of parameters ($\geq$ 34B), ensuring language coherence and robustness. The most common LLMs released on the platform are Nous-Capybara-1.9, from the open-source AI Nous collection2, and GPT-3.5-Turbo3, released by OpenAI in 2022.

#### Modeling Stimuli and Responses

We operationalize *stimuli* and *responses* at the level of comments. Specifically, a stimulus $S$ corresponds to the post to which a chirper responds, while a response $R$ denotes the comment generated by the chirper. This choice is driven by two main considerations.

First, to the best of our knowledge, the platform does not provide official documentation describing how users interact, how content is surfaced, or how exposure mechanisms operate. As a consequence, the actual set of content that a chirper is exposed to cannot be directly observed.

Second, we attempted to infer content exposure indirectly by leveraging the follower network, since it generally provides a robust proxy for content exposure ([Mosleh and Rand, 2022](https://arxiv.org/html/2601.01090v2#bib.bib52)) (i.e., assuming that a chirper is exposed to all content posted by agents they follow). However, empirical analysis revealed no meaningful correlation between these inferred exposure mechanisms and observed user interactions, such as likes or comments. This lack of correspondence suggests that such proxies do not reliably capture effective exposure on the platform.

Given these limitations, we adopt a conservative and observable definition of exposure, focusing exclusively on explicit interactions. We therefore characterize both stimuli and responses in terms of their toxicity. A piece of content is labeled as toxic if its toxicity score exceeds the $90$th percentile of the overall toxicity score distribution. This percentile-based threshold allows us to focus on the most extreme and potentially harmful content while remaining agnostic to absolute toxicity values. Nonetheless, we emphasize that our methodology is robust to the choice of toxicity threshold. Specifically, our findings remain unchanged when adopting a static threshold (e.g., $0.5$) to define toxic content.

#### Settings

To estimate toxicity, we rely on detoxify4 ([Hanu and Unitary team, 2020](https://arxiv.org/html/2601.01090v2#bib.bib27))
, a BERT-based model trained for toxic comment classification, which reports strong performance (mean AUC $\simeq 0.99$). Given an input text, the model outputs a toxicity score in the interval $[0,1]$, representing the intensity of toxic language expressed.

To further improve classification reliability, we restrict our analysis to English-language content only. Language detection is performed using pycld2,5 a Python library built around the Google Chromium embedded Compact Language Detector (CLD2).6 This filtering step mitigates potential degradation in toxicity estimation due to multilingual or low-resource language inputs, which are not explicitly supported by the classifier. After applying language filtering, the final dataset consists of about $8$M posts
($\sim 75\%$ of the original corpus).

Figure 1. Chirper distribution who generated toxic/non-toxic responses ($R^{\*}/\tilde{R}$) over toxic/non-toxic stimuli ($S^{\*}/\tilde{S}$). The y-axis reports the number of chirpers producing a given amount of responses (x-axis). Both axes are in log-scale.


![Refer to caption](https://arxiv.org/html/2601.01090v2/exposures_adoptions_type_correlation.png)

Figure 2. Correlation between the number of chirpers Responses and Stimuli, categorized in toxic ($\*$) and non-toxic ($\sim$). $\rho$ values indicate Pearson correlation ($p<.0001$)

## 4. Results

### 4.1. Responses and Stimuli Alignment (RQ1)

We first investigate how chirper responses vary as a function of the stimuli to which they respond to. Figure [1](https://arxiv.org/html/2601.01090v2#S3.F1 "Figure 1 ‣ Settings ‣ 3. Methodology ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai") shows the distribution of responses, distinguishing toxic and non-toxic responses in relation to toxic and non-toxic stimuli. Throughout the analysis, we denote toxic content with the symbol “$\*$” and non-toxic content with “$\sim$”.

The distribution highlights that, while the majority of toxic responses originate from toxic stimuli, a substantial fraction of toxic comments emerges in response to non-toxic posts. This pattern suggests the presence of spontaneous toxicity, namely instances in which users introduce toxic language independently of the toxicity of the original content.

To further assess whether the number of responses are statistically associated with the amount of stimuli, we compute the Pearson correlation ([Benesty et al., 2009](https://arxiv.org/html/2601.01090v2#bib.bib28)) between the count of toxic and non-toxic responses and the corresponding categories of stimuli (original posts). Figure [2](https://arxiv.org/html/2601.01090v2#S3.F2 "Figure 2 ‣ Settings ‣ 3. Methodology ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai") reports the results, together with Pearson correlation coefficients $\rho$ (all with $p<.0001$). As expected, the strongest correlation is observed between non-toxic responses and non-toxic stimuli (green points, $\rho=0.977$), indicating a high degree of alignment in benign interactions.

Interestingly, we also observe a strong correlation between non-toxic responses and toxic stimuli (blue points, $\rho=0.957$), suggesting that exposure to toxic content does not necessarily elicit toxic replies. This is followed by the correlation between toxic responses and toxic stimuli (red points, $\rho=0.749$), and by toxic responses to non-toxic stimuli (orange points, $\rho=0.745$).
Together, these results indicate that while the toxicity of the stimuli plays a role, it is not the sole determinant of response toxicity. As we show later, another important factor is determined by the prompt used to initialize the agents.

### 4.2. Likelihood of Toxic Responses (RQ2)

We next model the likelihood that a chirper produces toxic responses as a function of the number of stimuli they have previously encountered. Specifically, we estimate the CDF of the toxic responses generated by the chirpers
after being exposed to $n\_{S}$ stimuli, regardless of their toxicity. Figure [3](https://arxiv.org/html/2601.01090v2#S4.F3 "Figure 3 ‣ 4.2. Likelihood of Toxic Responses (RQ2) ‣ 4. Results ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai") reports the resulting probability curve.

Figure 3. Probability of generating a toxic response given $n\_{S}\leq 150$ stimuli. The line indicates a logarithmic regression fit.


Figure 4. Probability of chirper toxic response given a number $n\_{S}\leq 150$ of toxic and non-toxic stimuli. Each line corresponds to a regression fit.

We restrict the analysis to $n\_{S}\leq 150$, as beyond this threshold the probability saturates at $1$. Overall, we observe that $\textrm{P}(R^{\*}\mid n\_{S})$ increases monotonically with the number of stimuli (Mann–Kendall test ([Mann, 1945](https://arxiv.org/html/2601.01090v2#bib.bib29)), $p<.0001$). This finding is consistent with prior human-centered studies showing that the likelihood of content adoption increases with repeated exposure ([Ye et al., 2024](https://arxiv.org/html/2601.01090v2#bib.bib30); [Hassan and Barber, 2021](https://arxiv.org/html/2601.01090v2#bib.bib53)).

We then assess whether the nature of the stimulus affects the probability of producing toxic responses. Figure [4](https://arxiv.org/html/2601.01090v2#S4.F4 "Figure 4 ‣ 4.2. Likelihood of Toxic Responses (RQ2) ‣ 4. Results ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai") contrasts exposure to toxic and non-toxic stimuli. We observe two main effects: (i) the probability of generating toxic responses increases with the number of stimuli, regardless of whether they are toxic or non-toxic (Mann–Kendall $p<.0001$ for both distributions); and (ii) exposure to toxic stimuli leads to a significantly higher probability of toxic responses compared to exposure to non-toxic stimuli (Mann–Whitney U test ([Mann and Whitney, 1947](https://arxiv.org/html/2601.01090v2#bib.bib31)), $p<.0001$).

To further contextualize these differences, Figure [5](https://arxiv.org/html/2601.01090v2#S4.F5 "Figure 5 ‣ 4.2. Likelihood of Toxic Responses (RQ2) ‣ 4. Results ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai") reports the distributions of toxic response probabilities for $n\_{S}\leq 150$, grouping stimuli into three categories: “Non-toxic”, “Toxic”, and “Both”. The differences between the distributions are statistically significant, including the comparison between the “Non-toxic” and “Both” groups (Mann–Whitney U test, $p=.01$), indicating that even partial exposure to toxic content (“Both” group) is associated with an increased likelihood of toxic responding.

Figure 5. Probability distributions of chirper toxic response with $n\_{S}\leq 150$ stimuli, categorized as “Non-toxic”, “Toxic”, and “Both”.

Finally, we focus exclusively on toxic stimuli to determine whether higher levels of stimulus toxicity further increase the likelihood of toxic responses. We define a stimulus as high-toxic if its toxicity score exceeds the $95$th percentile of the distribution, while stimuli with toxicity scores between the $90$th and $95$th percentiles are classified as medium-toxic.

Figure 6. Probability of chirper toxic response given a number $n\_{S}\leq 50$ of medium- and high-toxic stimuli.

Figure [6](https://arxiv.org/html/2601.01090v2#S4.F6 "Figure 6 ‣ 4.2. Likelihood of Toxic Responses (RQ2) ‣ 4. Results ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai") illustrates the probability of toxic responses as a function of exposure to medium- and high-toxic stimuli. We limit the analysis to $n\_{S}\leq 50$, since the probability saturates beyond this point. Both curves exhibit a monotonic increase (Mann–Kendall test, $p<.0001$), yet the two distributions are not statistically distinguishable (Mann–Whitney U test, $p=0.117$).

Figure [7](https://arxiv.org/html/2601.01090v2#S4.F7 "Figure 7 ‣ 4.2. Likelihood of Toxic Responses (RQ2) ‣ 4. Results ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai") further summarizes these results by comparing probability distributions aggregated over “Medium-”, “High-”, and “Both” toxicity levels. While the average probability of toxic response is higher under exposure to high-toxic stimuli, the observed differences are not statistically significant (Mann–Whitney U test, $p>0.1$). This suggests that, beyond a certain toxicity threshold, additional increases in stimulus toxicity do not substantially alter response behavior.

Figure 7. Probability distributions of chirper toxic response with $n\_{S}\leq 50$ toxic stimuli, categorized as “Medium”, “High”, and “Both”.

### 4.3. Induced vs Spontaneous Toxicity (RQ3)

Our final analysis aims to examine the production of toxic responses induced by previous stimuli, compared to the emergence of spontaneous harmful behavior. To this end, we adapt two susceptibility metrics originally introduced in the context of human social influence to model the interplay between exposure and response ([Luceri et al., 2025](https://arxiv.org/html/2601.01090v2#bib.bib32)), which we reformulate as: the Influence-Driven Toxic Response Rate (ITRR) and the Spontaneous Toxic Response Rate (STRR). These metrics allow us to disentangle toxicity that arises as a reaction to toxic exposure from toxicity that emerges independently of such exposure.

Formally, we define ITRR as:

|  |  |  |  |
| --- | --- | --- | --- |
| (1) |  | $$\textrm{ITRR}=\frac{|R^{\*}\_{c}\rightarrow S^{\*}\_{c}|}{|S^{\*}\_{c}|}$$ |  |

In this setting, ITRR measures the proportion of toxic responses produced by a chirper $c$ in reaction to toxic stimuli, relative to the total number of toxic stimuli they have encountered. By construction, ITRR takes values in the interval $[0,1]$.7 Higher ITRR values indicate a stronger tendency to mirror toxic content when exposed to it.

Conversely, we define STRR as:

|  |  |  |  |
| --- | --- | --- | --- |
| (2) |  | $$\textrm{STRR}=\frac{|R^{\*}\_{c}\rightarrow\tilde{S}\_{c}|}{|R^{\*}\_{c}|}$$ |  |

STRR represents the fraction of toxic responses produced *spontaneously*, i.e., in the absence of toxic stimuli, over the total number of toxic responses generated by chirper $c$. Like ITRR, STRR is bounded between $0$ and $1$, with higher values reflecting a greater propensity toward unsolicited toxicity.

![Refer to caption](https://arxiv.org/html/2601.01090v2/iar_sar_distributions.png)


Figure 8. Distributions of the Influence-Driven Toxic Response Rate (ITRR) and the Spontaneous Toxic Response Rate (STRR).

Figure [8](https://arxiv.org/html/2601.01090v2#S4.F8 "Figure 8 ‣ 4.3. Induced vs Spontaneous Toxicity (RQ3) ‣ 4. Results ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai") shows the distributions of ITRR and STRR across chirpers. In line with previous findings on human susceptibility to influence ([Luceri et al., 2025](https://arxiv.org/html/2601.01090v2#bib.bib32)), we observe a strong negative Pearson correlation between the two metrics ($\rho=-0.814$, $p<.0001$). This relationship highlights a clear trend: chirpers who are highly reactive to toxic stimuli tend to generate fewer spontaneous toxic responses, whereas chirpers who frequently produce toxicity without provocation appear less influenced by toxic stimuli.

Next, we assess whether the amount of toxic stimuli alone can serve as a reliable proxy for predicting whether a chirper will eventually produce toxic content. We frame this problem as a binary classification task, where the sole independent variable is the number of toxic stimuli encountered by a chirper, and the target variable indicates whether the chirper has generated toxic responses (True/False)8.

We evaluate several standard classifiers using K-fold cross validation, including Logistic Regression ([Bisong, 2019](https://arxiv.org/html/2601.01090v2#bib.bib33)), Random Forest ([Breiman, 2001](https://arxiv.org/html/2601.01090v2#bib.bib34)), XGBoost ([Chen and Guestrin, 2016](https://arxiv.org/html/2601.01090v2#bib.bib35)), and a Multi-Layer Perceptron ([Chan et al., 2023](https://arxiv.org/html/2601.01090v2#bib.bib36)). Table [2](https://arxiv.org/html/2601.01090v2#S4.T2 "Table 2 ‣ 4.3. Induced vs Spontaneous Toxicity (RQ3) ‣ 4. Results ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai") summarizes the performance in terms of accuracy, Recall ([Encyclopaedia Britannica, 2025](https://arxiv.org/html/2601.01090v2#bib.bib37)), Precision ([Encyclopaedia Britannica, 2025](https://arxiv.org/html/2601.01090v2#bib.bib37)), and weighted F1-score ([, 2025](https://arxiv.org/html/2601.01090v2#bib.bib38)).

Table 2. Binary classification performance for predicting chirper toxic responses based solely on the number of toxic stimuli encountered.

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Classifier | Accuracy | Recall | Precision | F1-Weighted |
| Logistic Regression | $0.866\pm 0.002$ | $0.866\pm 0.003$ | $0.909\pm 0.003$ | $0.867\pm 0.002$ |
| Random Forest | $0.867\pm 0.003$ | $0.874\pm 0.003$ | $0.904\pm 0.003$ | $0.868\pm 0.003$ |
| XGBoost | $0.867\pm 0.003$ | $0.880\pm 0.002$ | $0.899\pm 0.004$ | $0.867\pm 0.003$ |
| MultiLayerPerceptron | $0.867\pm 0.004$ | $0.879\pm 0.003$ | $0.901\pm 0.004$ | $0.868\pm 0.004$ |

The consistently strong performance across all classifiers indicates that exposure to toxic stimuli alone is a highly informative predictor of whether a chirper will produce toxic responses. This result reinforces the central role of environmental exposure in shaping agent behavior, even when modeling toxicity adoption in a minimal setting.

These findings have important implications for the moderation and auditing of LLM-based agents deployed in the wild. In particular, monitoring the toxicity of content encountered by agents may offer an effective and lightweight mechanism for anticipating and mitigating harmful behavior before it manifests in generated outputs.

Finally, we adopt a complementary perspective by focusing on agents that generate toxic responses both in absence and presence of prior toxic stimuli.
This analysis aims to determine whether such behavior can be attributed to explicit prompting rather than to exposure effects. Specifically, we examine the prompts associated with these agents to assess whether they were directly instructed to produce toxic content.

To this end, we employ Gemini-2.0-flash,9 ([Google DeepMind, 2024](https://arxiv.org/html/2601.01090v2#bib.bib40)) a state-of-the-art large language model released by Google, which demonstrates strong performance in reasoning and factuality, and which has been validated in prior work as a reliable proxy for human annotation ([Coppolillo and Mungari, 2025](https://arxiv.org/html/2601.01090v2#bib.bib39)). We use this model as an evaluator, providing it with the structured instruction reported in Box [4.3](https://arxiv.org/html/2601.01090v2#S4.SS3 "4.3. Induced vs Spontaneous Toxicity (RQ3) ‣ 4. Results ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai") to classify whether a given prompt explicitly solicits toxic content.

Box 1: Gemini System Prompt
Goal:
  
Determine if the provided description is meant to be toxic (e.g., contains or encourages hate speech, suicidal thoughts, conspiracy theories or sexual content).
  
  
Return Format:
  
Your answer must be either "yes" if the description fits the criteria, or "no" if it does not. If your answer is "yes", specify in which of the specified category it falls.

In line with previous analysis on the platform ([Zhu et al., 2025](https://arxiv.org/html/2601.01090v2#bib.bib5)), we find that approximately $68\%$ of chirpers who produced toxic responses were not explicitly prompted to do so.

Finally, Figure [9](https://arxiv.org/html/2601.01090v2#S4.F9 "Figure 9 ‣ 4.3. Induced vs Spontaneous Toxicity (RQ3) ‣ 4. Results ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai") reports the distribution of content categories detected by Gemini within the prompts that explicitly instruct agents to generate toxic responses. The analysis reveals that the majority of such prompts target sexual content, followed by hate-related topics, conspiracy theories, and a heterogeneous set of other categories (e.g., homophobic language, illegal activities, and drug use).

This result suggests that, although explicit prompting accounts for several cases of unprovoked toxicity, the greatest fraction of toxic behavior cannot be directly traced back to prompt instructions. These findings strengthen our claims on toxicity adoption driven by prior exposure and further support the hypothesis that other unobserved contextual factors ([Zhao et al., 2025](https://arxiv.org/html/2601.01090v2#bib.bib50)) play a substantive role in shaping behavior in the wild, beyond what can be captured through prompt-level analysis alone. Although we do not have direct access to such hidden exposure (due to the lack of detailed platform documentation discussed in Section [3](https://arxiv.org/html/2601.01090v2#S3 "3. Methodology ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai")) we argue that examining how exposure to toxic content influences its subsequent adoption by chirpers constitutes a crucial first step toward contextualizing harmful behavior in real-world settings.

Figure 9. Detected topic in the prompt of agents explicitly instructed to generate toxic content.

## 5. Discussion

Our findings provide empirical evidence that exposure plays a central role in shaping the toxic behavior of LLM-driven agents. Across analyses, we observe a consistent pattern: not only toxic stimuli serve as a trigger of toxic responses, but repetitive exposure further increases the likelihood of generating toxic content. Additionally, we show that a negative interplay holds between induced and spontaneous toxic response. Applying the two proposed metrics reveals that chirpers who frequently produce spontaneous toxicity are less influenced by stimuli, and vice-versa. Both these results mirror observations from human behavioral studies, suggesting that LLM agents exhibit influence-driven forms of harmful behavior.

One key implication is that toxicity cannot be fully mitigated or monitoring by examining the agents in isolation. Indeed, our findings indicate that interaction dynamics and network context may contribute and amplify harmful behaviors over time.

Further, the strong negative correlation between the Influence-Driven Toxic Response Rate and the Spontaneous Toxic Response Rate reveals a behavioral trend among agents. Some agents appear highly reactive, producing toxicity primarily in response to toxic content, while others generate toxicity more autonomously. This distinction is particularly relevant for auditing and risk assessment, as it suggests that not all toxic agents pose the same type of threat. Reactive agents may be mitigated through exposure control, whereas spontaneous agents may require stricter output-level safeguards.

Perhaps most notably, our classification results show that the number of toxic stimuli encountered by an agent is sufficient to predict whether it will eventually generate toxic responses with high accuracy. This finding has practical significance: it suggests that effective auditing does not necessarily require access to model parameters, training data, or internal representations. Specifically, in case of highly reactive agents (high ITRR and low STRR), monitoring exposure alone may provide an early warning signal for emerging harmful behavior.

In summary, our results suggest that toxicity in LLM-driven agents is not merely a prompt-level artifact but a dynamic property shaped by interaction histories. Recognizing and auditing exposure is therefore essential for building accountable, trustworthy, and socially responsible AI systems.

From a governance and accountability perspective, these results raise important questions about responsibility and deployment practices. If agent behavior is systematically shaped by environmental exposure, then platform designers and deployers share responsibility for curating the contexts in which agents operate ([Ferrara et al., 2020](https://arxiv.org/html/2601.01090v2#bib.bib46)). Releasing agents “in the wild” without exposure-aware monitoring may inadvertently facilitate the emergence and amplification of harmful behavior.
These concerns result in practical action points that dynamics platforms should address ([Ferrara, 2019](https://arxiv.org/html/2601.01090v2#bib.bib42)). First, they should adopt exposure-aware governance mechanisms, including mandatory monitoring dashboards that track agent reach and interaction patterns. Further, agents that attain unusually high levels of exposure to toxicity may benefit undergoing quarantine or sandboxing rules to ensure resilience. Finally, auditable and privacy-preserving logs of encountered content should be maintained to enable post hoc analysis and accountability.

## 6. Conclusions

This work provides the first large-scale empirical audit of toxicity adoption in a fully AI-driven social platform, showing that stimuli play a central role in shaping the harmful behavior of LLM-based agents. By studying autonomous interactions on Chirper.ai, we move beyond prompt-level analyses and examine toxicity as a dynamic, interaction-dependent phenomenon emerging from agent-to-agent engagement.

Across analyses, we find that toxicity in LLM-driven agents is a multi-faceted phenomenon, conditioned by interaction dynamics and amplified by repetitive exposure.
We found that cumulative stimuli (both toxic and non-toxic) systematically increase the likelihood of generating toxic responses, with exposure to toxic stimuli exerting a significantly stronger effect. These results suggest that repeated interaction itself acts as a risk amplifier over time, even in the absence of explicitly harmful content.

We further introduce two complementary susceptibility metrics, the Influence-Driven Toxic Response Rate (ITRR) and the Spontaneous Toxic Response Rate (STRR), which reveal a strong relationship between exposure-driven and autonomous toxicity. This distinction highlights heterogeneity among agents: some are primarily reactive to toxic environments, while others exhibit toxic behavior independently of exposure. Importantly, we show that the number of toxic stimuli encountered by an agent alone enables accurate prediction of whether it will eventually produce toxic content, without requiring access to model internals, training data, or prompt instructions.

Taken together, these findings underscore exposure as a structural risk factor in the deployment of LLM-based agents. Rather than treating toxicity as an isolated generation failure, our results emphasize the need for exposure-aware auditing, monitoring, and governance mechanisms when releasing autonomous agents in open, dynamic environments. Monitoring what agents are exposed to may provide a lightweight yet effective early-warning signal for emerging harmful behavior.

#### Limitations

This study has several limitations that should be considered when interpreting the results. First, our operationalization of exposure is necessarily conservative. Due to the lack of platform-level documentation on content recommendation, ranking, or visibility mechanisms, we model exposure exclusively through observable interactions: specifically, posts that agents explicitly comment on. While this approach avoids speculative assumptions, it likely underestimates the true exposure experienced by agents, as they may be influenced by content they view but do not directly engage within Chirper.ai.
Second, toxicity is detected using an automated classifier. Although the chosen model reports strong performance, classifier errors and normative assumptions about what constitutes “toxic” content may affect the results.
Third, our analysis focuses on English-language content only. This restriction improves classification reliability but excludes potentially important behaviors in other languages, limiting the generalizability of our findings to multilingual or global deployments.
Finally, although we examine prompt-level explanations for unprovoked toxicity using an external evaluator model, we do not have access to agents underlying exposures, states or memory mechanisms. As a result, some forms of spontaneous toxicity may still be indirectly driven by prior exposures that remain unobserved.

#### Future Work

Our work opens several promising directions for future research on toxicity-exposure risks in LLM-based agents.
First, longitudinal analyses could investigate whether toxicity adoption exhibits persistence, escalation, or decay over time. While our results show that cumulative exposure increases the likelihood of toxic responses, it remains unclear whether agents can “recover” after periods of benign exposure, or whether early exposure produces lasting behavioral shifts. Studying temporal dynamics and potential hysteresis effects would help distinguish short-term reactivity from long-term behavioral drift.
Second, the adoption of ITRR and STRR metrics can lead to further improvement in the design and auditing of future LLM-based agents. Specifically, more attention can be reserved to agents which display high STRR, that is, high propensity in generating spontaneous toxic content. Unfortunately, we were not able to deeply investigate this aspect, since the Chirper.ai platform displays a highly skew distribution in terms of underlying models (see Table [1](https://arxiv.org/html/2601.01090v2#S3.T1 "Table 1 ‣ 3. Methodology ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai") for reference).
Third, future research could examine the topical trajectories starting from the initial prompt of the agents. Specifically, one could investigate whether a given topic (e.g., hate, conspiracy) leads to or exacerbates toxicity over time.
Fourth, future work could extend our exposure-based framework beyond toxicity to other forms of harm, such as misinformation ([Gallotti et al., 2020](https://arxiv.org/html/2601.01090v2#bib.bib43); [Chen et al., 2022](https://arxiv.org/html/2601.01090v2#bib.bib44)), bias ([Coppolillo et al., 2025](https://arxiv.org/html/2601.01090v2#bib.bib45)), harassment, or coordinated manipulation ([Orlando et al., 2025](https://arxiv.org/html/2601.01090v2#bib.bib48)). These phenomena may follow different adoption dynamics and could interact with toxicity in complex ways. A unified exposure-based auditing framework spanning multiple harm dimensions would provide a more comprehensive assessment of risks posed by autonomous agents in social ecosystems.
Finally, integrating exposure-awareness directly into agent design represents a promising avenue for mitigation. For example, agents could maintain lightweight summaries of encountered content, adjust response strategies based on exposure histories, or trigger safeguards when cumulative exposure crosses risk thresholds. Evaluating such mechanisms in realistic social environments could inform the development of proactive, rather than purely reactive, safety controls.

## Acknowledgments

This work has been partially funded by MUR on D.M. 351/2022, PNRR Ricerca, CUP H23C22000440007, further in part supported by the NSF (Award Number 2331722).

## References

- Almerekhi et al. (2022)
  H. Almerekhi, H. Kwak, J. Salminen, and B. J. Jansen
  PROVOKE: toxicity trigger detection in conversations from the top 100 subreddits.
  Data and Information Management 6 (4), pp. 100019.
  External Links: ISSN 2543-9251,
  [Document](https://dx.doi.org/https%3A//doi.org/10.1016/j.dim.2022.100019),
  [Link](https://www.sciencedirect.com/science/article/pii/S2543925122001176)
  Cited by: [§2](https://arxiv.org/html/2601.01090v2#S2.SS0.SSS0.Px2.p3.1 "Toxicity Adoption vs Exposure ‣ 2. Related Work ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai").
- Ashery et al. (2025)
  A. F. Ashery, L. M. Aiello, and A. Baronchelli
  Emergent social conventions and collective bias in llm populations.
  Science Advances 11 (20), pp. eadu9368.
  External Links: [Document](https://dx.doi.org/10.1126/sciadv.adu9368),
  [Link](https://www.science.org/doi/abs/10.1126/sciadv.adu9368),
  https://www.science.org/doi/pdf/10.1126/sciadv.adu9368
  Cited by: [§1](https://arxiv.org/html/2601.01090v2#S1.p2.1 "1. Introduction ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai").
- Benesty et al. (2009)
  J. Benesty, J. Chen, Y. Huang, and I. Cohen
  Pearson correlation coefficient.
  In Noise Reduction in Speech Processing,
  pp. 1–4.
  External Links: ISBN 978-3-642-00296-0,
  [Document](https://dx.doi.org/10.1007/978-3-642-00296-0%5F5),
  [Link](https://doi.org/10.1007/978-3-642-00296-0_5)
  Cited by: [§4.1](https://arxiv.org/html/2601.01090v2#S4.SS1.p3.1 "4.1. Responses and Stimuli Alignment (RQ1) ‣ 4. Results ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai").
- Bessi and Ferrara (2016)
  A. Bessi and E. Ferrara
  Social bots distort the 2016 u.s. presidential election online discussion.
  First Monday 21 (11).
  External Links: [Link](https://firstmonday.org/ojs/index.php/fm/article/view/7090),
  [Document](https://dx.doi.org/10.5210/fm.v21i11.7090)
  Cited by: [§1](https://arxiv.org/html/2601.01090v2#S1.p1.1 "1. Introduction ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai").
- Bisong (2019)
  E. Bisong
  Logistic regression.
  In Building Machine Learning and Deep Learning Models on Google Cloud Platform: A Comprehensive Guide for Beginners,
  pp. 243–250.
  External Links: ISBN 978-1-4842-4470-8,
  [Document](https://dx.doi.org/10.1007/978-1-4842-4470-8%5F20),
  [Link](https://doi.org/10.1007/978-1-4842-4470-8_20)
  Cited by: [§4.3](https://arxiv.org/html/2601.01090v2#S4.SS3.p7.1 "4.3. Induced vs Spontaneous Toxicity (RQ3) ‣ 4. Results ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai").
- Breiman (2001)
  L. Breiman
  Random forests.
  Machine Learning 45 (1), pp. 5–32.
  Cited by: [§4.3](https://arxiv.org/html/2601.01090v2#S4.SS3.p7.1 "4.3. Induced vs Spontaneous Toxicity (RQ3) ‣ 4. Results ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai").
- Breum et al. (2024)
  S. M. Breum, D. V. Egdal, V. Gram Mortensen, A. G. Møller, and L. M. Aiello
  The persuasive power of large language models.
  Proceedings of the International AAAI Conference on Web and Social Media 18 (1), pp. 152–163.
  External Links: [Document](https://dx.doi.org/10.1609/icwsm.v18i1.31304)
  Cited by: [§2](https://arxiv.org/html/2601.01090v2#S2.SS0.SSS0.Px1.p2.1 "AI-Agents in Social Platform ‣ 2. Related Work ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai").
- Chakraborty et al. (2024)
  J. Chakraborty, W. Xia, A. Majumder, D. Ma, W. Chaabene, and N. Janvekar
  DetoxBench: benchmarking large language models for multitask fraud & abuse detection.
  External Links: 2409.06072,
  [Link](https://arxiv.org/abs/2409.06072)
  Cited by: [§1](https://arxiv.org/html/2601.01090v2#S1.p3.1 "1. Introduction ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai").
- Chan et al. (2023)
  K. Y. Chan, B. Abu-Salih, R. Qaddoura, A. M. Al-Zoubi, V. Palade, D. Pham, J. D. Ser, and K. Muhammad
  Deep neural networks in the cloud: review, applications, challenges and research directions.
  Neurocomputing 545, pp. 126327.
  External Links: ISSN 0925-2312,
  [Document](https://dx.doi.org/https%3A//doi.org/10.1016/j.neucom.2023.126327),
  [Link](https://www.sciencedirect.com/science/article/pii/S0925231223004502)
  Cited by: [§4.3](https://arxiv.org/html/2601.01090v2#S4.SS3.p7.1 "4.3. Induced vs Spontaneous Toxicity (RQ3) ‣ 4. Results ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai").
- Chen et al. (2022)
  E. Chen, J. Jiang, H. H. Chang, G. Muric, and E. Ferrara
  Charting the information and misinformation landscape to characterize misinfodemics on social media: covid-19 infodemiology study at a planetary scale.
  JMIR Infodemiology 2 (1).
  External Links: ISSN 2564-1891,
  [Document](https://dx.doi.org/https%3A//doi.org/10.2196/32378),
  [Link](https://www.sciencedirect.com/science/article/pii/S2564189122000251)
  Cited by: [§6](https://arxiv.org/html/2601.01090v2#S6.SS0.SSS0.Px2.p1.1 "Future Work ‣ 6. Conclusions ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai").
- Chen et al. (2026)
  H. Chen, Z. Wang, and M. Ren
  Unveiling the collective behaviors of large language model-based autonomous agents in an online community: a social network analysis perspective.
  Data and Information Management 10 (1), pp. 100107.
  External Links: ISSN 2543-9251,
  [Document](https://dx.doi.org/https%3A//doi.org/10.1016/j.dim.2025.100107),
  [Link](https://www.sciencedirect.com/science/article/pii/S2543925125000154)
  Cited by: [§2](https://arxiv.org/html/2601.01090v2#S2.SS0.SSS0.Px1.p1.1 "AI-Agents in Social Platform ‣ 2. Related Work ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai").
- Chen and Guestrin (2016)
  T. Chen and C. Guestrin
  XGBoost: a scalable tree boosting system.
  In Proceedings of the 22nd ACM SIGKDD International Conference on Knowledge Discovery and Data Mining,
  KDD ’16, New York, NY, USA, pp. 785–794.
  External Links: ISBN 9781450342322,
  [Link](https://doi.org/10.1145/2939672.2939785),
  [Document](https://dx.doi.org/10.1145/2939672.2939785)
  Cited by: [§4.3](https://arxiv.org/html/2601.01090v2#S4.SS3.p7.1 "4.3. Induced vs Spontaneous Toxicity (RQ3) ‣ 4. Results ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai").
- Cheng et al. (2015)
  J. Cheng, C. Danescu-Niculescu-Mizil, and J. Leskovec
  Antisocial behavior in online discussion communities.
  In Proceedings of the Ninth International AAAI Conference on Web and Social Media (ICWSM),
  External Links: [Link](https://arxiv.org/abs/1504.00680)
  Cited by: [§2](https://arxiv.org/html/2601.01090v2#S2.SS0.SSS0.Px1.p2.1 "AI-Agents in Social Platform ‣ 2. Related Work ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai").
- Coppolillo et al. (2025)
  E. Coppolillo, G. Manco, and L. M. Aiello
  Unmasking conversational bias in ai multiagent systems.
  External Links: 2501.14844,
  [Link](https://arxiv.org/abs/2501.14844)
  Cited by: [§6](https://arxiv.org/html/2601.01090v2#S6.SS0.SSS0.Px2.p1.1 "Future Work ‣ 6. Conclusions ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai").
- Coppolillo and Mungari (2025)
  E. Coppolillo and S. Mungari
  Unexpected knowledge: auditing wikipedia and grokipedia search recommendations.
  External Links: 2512.17027,
  [Link](https://arxiv.org/abs/2512.17027)
  Cited by: [§4.3](https://arxiv.org/html/2601.01090v2#S4.SS3.p11.1 "4.3. Induced vs Spontaneous Toxicity (RQ3) ‣ 4. Results ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai").
- Donkers and Ziegler (2025)
  T. Donkers and J. Ziegler
  Understanding online polarization through human-agent interaction in a controlled social network simulation.
  Note: Proceedings of the International AAAI Conference on Web and Social Media (ICWSM)
  External Links: [Document](https://dx.doi.org/10.1609/icwsm.v19i1.35826)
  Cited by: [§2](https://arxiv.org/html/2601.01090v2#S2.SS0.SSS0.Px1.p2.1 "AI-Agents in Social Platform ‣ 2. Related Work ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai").
- Encyclopaedia Britannica (2025)
  Encyclopaedia Britannica
  Precision and recall | f-score, formula, & facts.
  Note: <https://www.britannica.com/science/precision-and-recall>Accessed: 2025-12-22
  Cited by: [§4.3](https://arxiv.org/html/2601.01090v2#S4.SS3.p7.1 "4.3. Induced vs Spontaneous Toxicity (RQ3) ‣ 4. Results ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai").
- [18]
   (2025)
  F-score.
   Wikipedia.
  Note: <https://en.wikipedia.org/wiki/F-score>Accessed: 2025-12-22
  Cited by: [§4.3](https://arxiv.org/html/2601.01090v2#S4.SS3.p7.1 "4.3. Induced vs Spontaneous Toxicity (RQ3) ‣ 4. Results ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai").
- Ferrara et al. (2020)
  E. Ferrara, S. Cresci, and L. Luceri
  Misinformation, manipulation, and abuse on social media in the era of covid-19.
  Journal of Computational Social Science 3 (2), pp. 271–277.
  External Links: [Document](https://dx.doi.org/10.1007/s42001-020-00094-5),
  ISBN 2432-2725,
  [Link](https://doi.org/10.1007/s42001-020-00094-5)
  Cited by: [§5](https://arxiv.org/html/2601.01090v2#S5.p6.1 "5. Discussion ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai").
- Ferrara et al. (2016)
  E. Ferrara, O. Varol, C. Davis, F. Menczer, and A. Flammini
  The rise of social bots.
  Commun. ACM 59 (7), pp. 96–104.
  External Links: ISSN 0001-0782,
  [Link](https://doi.org/10.1145/2818717),
  [Document](https://dx.doi.org/10.1145/2818717)
  Cited by: [§1](https://arxiv.org/html/2601.01090v2#S1.p1.1 "1. Introduction ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai").
- Ferrara and Yang (2015)
  E. Ferrara and Z. Yang
  Measuring emotional contagion in social media.
  PLoS ONE 10.
  External Links: [Link](https://api.semanticscholar.org/CorpusID:12174053)
  Cited by: [§1](https://arxiv.org/html/2601.01090v2#S1.p4.1 "1. Introduction ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai"),
  [§2](https://arxiv.org/html/2601.01090v2#S2.SS0.SSS0.Px2.p2.1 "Toxicity Adoption vs Exposure ‣ 2. Related Work ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai").
- Ferrara (2017)
  E. Ferrara
  Disinformation and social bot operations in the run up to the 2017 french presidential election.
  Interorganizational Networks & Organizational Behavior eJournal.
  External Links: [Link](https://api.semanticscholar.org/CorpusID:9732472)
  Cited by: [§1](https://arxiv.org/html/2601.01090v2#S1.p1.1 "1. Introduction ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai").
- Ferrara (2019)
  E. Ferrara
  The history of digital spam.
  Commun. ACM 62 (8), pp. 82–91.
  External Links: ISSN 0001-0782,
  [Link](https://doi.org/10.1145/3299768),
  [Document](https://dx.doi.org/10.1145/3299768)
  Cited by: [§5](https://arxiv.org/html/2601.01090v2#S5.p6.1 "5. Discussion ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai").
- Ferrara (2024)
  E. Ferrara
  GenAI against humanity: nefarious applications of generative artificial intelligence and large language models.
  Journal of Computational Social Science 7 (1), pp. 549–569.
  External Links: [Document](https://dx.doi.org/10.1007/s42001-024-00250-1),
  ISBN 2432-2725,
  [Link](https://doi.org/10.1007/s42001-024-00250-1)
  Cited by: [§1](https://arxiv.org/html/2601.01090v2#S1.p3.1 "1. Introduction ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai").
- Gallotti et al. (2020)
  R. Gallotti, F. Valle, N. Castaldo, P. Sacco, and M. De Domenico
  Assessing the risks of ‘infodemics’in response to covid-19 epidemics.
  Nature Human Behaviour 4 (12), pp. 1285–1293.
  External Links: [Document](https://dx.doi.org/10.1038/s41562-020-00994-6),
  ISBN 2397-3374,
  [Link](https://doi.org/10.1038/s41562-020-00994-6)
  Cited by: [§6](https://arxiv.org/html/2601.01090v2#S6.SS0.SSS0.Px2.p1.1 "Future Work ‣ 6. Conclusions ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai").
- Gao et al. (2024)
  C. Gao, F. Xu, X. Chen, X. Wang, X. He, and Y. Li
  Simulating human society with large language model agents: city, social media, and economic system.
  In Companion Proceedings of the ACM Web Conference 2024,
  WWW ’24, New York, NY, USA, pp. 1290–1293.
  External Links: ISBN 9798400701726,
  [Link](https://doi.org/10.1145/3589335.3641253),
  [Document](https://dx.doi.org/10.1145/3589335.3641253)
  Cited by: [§1](https://arxiv.org/html/2601.01090v2#S1.p2.1 "1. Introduction ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai").
- Google DeepMind (2024)
  Google DeepMind
  Introducing gemini 2.0: our new ai model for the agentic era.
  Note: Google Blog, accessed December 2025
  External Links: [Link](https://blog.google/technology/google-deepmind/google-gemini-ai-update-december-2024/)
  Cited by: [§4.3](https://arxiv.org/html/2601.01090v2#S4.SS3.p11.1 "4.3. Induced vs Spontaneous Toxicity (RQ3) ‣ 4. Results ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai").
- Hanu and Unitary team (2020)
  L. Hanu and Unitary team
  Detoxify.
  Note: Github. https://github.com/unitaryai/detoxify
  Cited by: [§3](https://arxiv.org/html/2601.01090v2#S3.SS0.SSS0.Px3.p1.1 "Settings ‣ 3. Methodology ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai").
- Hassan and Barber (2021)
  A. Hassan and S. J. Barber
  The effects of repetition frequency on the illusory truth effect.
  Cognitive Research: Principles and Implications 6 (1), pp. 38.
  External Links: [Document](https://dx.doi.org/10.1186/s41235-021-00301-5),
  ISBN 2365-7464,
  [Link](https://doi.org/10.1186/s41235-021-00301-5)
  Cited by: [§4.2](https://arxiv.org/html/2601.01090v2#S4.SS2.p2.1 "4.2. Likelihood of Toxic Responses (RQ2) ‣ 4. Results ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai").
- He et al. (2023)
  J. He, F. Wallis, A. Gvirtz, and S. Rathje
  Artificial intelligence chatbots mimic human collective behaviour.
  External Links: [Document](https://dx.doi.org/10.21203/rs.3.rs-3096289/v2)
  Cited by: [§1](https://arxiv.org/html/2601.01090v2#S1.p2.1 "1. Introduction ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai").
- Jiang et al. (2024)
  J. Jiang, L. Luceri, J. B. Walther, and E. Ferrara
  Social approval and network homophily as motivators of online toxicity.
  External Links: 2310.07779,
  [Link](https://arxiv.org/abs/2310.07779)
  Cited by: [§2](https://arxiv.org/html/2601.01090v2#S2.SS0.SSS0.Px2.p2.1 "Toxicity Adoption vs Exposure ‣ 2. Related Work ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai").
- Li et al. (2024)
  M. Li, S. Zhao, Q. Wang, K. Wang, Y. Zhou, S. Srivastava, C. Gokmen, T. Lee, L. E. Li, R. Zhang, W. Liu, P. Liang, L. Fei-Fei, J. Mao, and J. Wu
  Embodied agent interface: benchmarking llms for embodied decision making.
  In Proceedings of the 38th International Conference on Neural Information Processing Systems,
  NIPS ’24, Red Hook, NY, USA.
  External Links: ISBN 9798331314385
  Cited by: [§1](https://arxiv.org/html/2601.01090v2#S1.p2.1 "1. Introduction ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai").
- Li et al. (2023)
  S. Li, J. Yang, and K. Zhao
  Are you in a masquerade? exploring the behavior and impact of large language model driven social bots in online social networks.
  External Links: 2307.10337,
  [Link](https://arxiv.org/abs/2307.10337)
  Cited by: [§2](https://arxiv.org/html/2601.01090v2#S2.SS0.SSS0.Px3.p3.1 "Chirper.ai Platform ‣ 2. Related Work ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai").
- Luceri et al. (2025)
  L. Luceri, J. Ye, J. Jiang, and E. Ferrara
  The susceptibility paradox in online social influence.
  Proceedings of the International AAAI Conference on Web and Social Media 19 (1), pp. 1122–1138.
  External Links: [Link](https://ojs.aaai.org/index.php/ICWSM/article/view/35864),
  [Document](https://dx.doi.org/10.1609/icwsm.v19i1.35864)
  Cited by: [§4.3](https://arxiv.org/html/2601.01090v2#S4.SS3.p1.1 "4.3. Induced vs Spontaneous Toxicity (RQ3) ‣ 4. Results ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai"),
  [§4.3](https://arxiv.org/html/2601.01090v2#S4.SS3.p5.1 "4.3. Induced vs Spontaneous Toxicity (RQ3) ‣ 4. Results ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai").
- Mann and Whitney (1947)
  H. B. Mann and D. R. Whitney
  On a test of whether one of two random variables is stochastically larger than the other.
  The Annals of Mathematical Statistics 18 (1), pp. 50–60.
  External Links: [Document](https://dx.doi.org/10.1214/aoms/1177730491)
  Cited by: [§4.2](https://arxiv.org/html/2601.01090v2#S4.SS2.p3.1 "4.2. Likelihood of Toxic Responses (RQ2) ‣ 4. Results ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai").
- Mann (1945)
  H. B. Mann
  Nonparametric test against trend.
  Econometrica 13 (3), pp. 245–259.
  External Links: [Document](https://dx.doi.org/10.2307/1907187)
  Cited by: [§4.2](https://arxiv.org/html/2601.01090v2#S4.SS2.p2.1 "4.2. Likelihood of Toxic Responses (RQ2) ‣ 4. Results ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai").
- Minos (2023)
  S. Minos
  Chirper: changing the ai landscape with autonomy and entertainment.
  Note: <https://blog.chirper.ai/chirper-changing-the-ai-landscape-with-autonomy-and-entertainment>Accessed: 2025-12-22
  External Links: [Link](https://blog.chirper.ai/chirper-changing-the-ai-landscape-with-autonomy-and-entertainment)
  Cited by: [§2](https://arxiv.org/html/2601.01090v2#S2.SS0.SSS0.Px3.p1.1 "Chirper.ai Platform ‣ 2. Related Work ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai").
- Minos (2024)
  S. Minos
  From ai social network to simulated ai world.
  Note: <https://blog.chirper.ai/from-ai-social-network-to-simulated-ai-world>Accessed: 2025-12-22
  External Links: [Link](https://blog.chirper.ai/from-ai-social-network-to-simulated-ai-world)
  Cited by: [§2](https://arxiv.org/html/2601.01090v2#S2.SS0.SSS0.Px3.p1.1 "Chirper.ai Platform ‣ 2. Related Work ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai").
- Mohammadi et al. (2025)
  M. Mohammadi, Y. Li, J. Lo, and W. Yip
  Evaluation and benchmarking of llm agents: a survey.
  In Proceedings of the 31st ACM SIGKDD Conference on Knowledge Discovery and Data Mining V.2,
  KDD ’25, New York, NY, USA, pp. 6129–6139.
  External Links: ISBN 9798400714542,
  [Link](https://doi.org/10.1145/3711896.3736570),
  [Document](https://dx.doi.org/10.1145/3711896.3736570)
  Cited by: [§2](https://arxiv.org/html/2601.01090v2#S2.SS0.SSS0.Px1.p1.1 "AI-Agents in Social Platform ‣ 2. Related Work ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai").
- Mosleh and Rand (2022)
  M. Mosleh and D. G. Rand
  Measuring exposure to misinformation from political elites on twitter.
  Nature Communications 13 (1), pp. 7144.
  External Links: [Document](https://dx.doi.org/10.1038/s41467-022-34769-6),
  ISBN 2041-1723,
  [Link](https://doi.org/10.1038/s41467-022-34769-6)
  Cited by: [§3](https://arxiv.org/html/2601.01090v2#S3.SS0.SSS0.Px2.p3.1 "Modeling Stimuli and Responses ‣ 3. Methodology ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai").
- Orlando et al. (2025)
  G. M. Orlando, J. Ye, V. L. Gatta, M. Saeedi, V. Moscato, E. Ferrara, and L. Luceri
  Emergent coordinated behaviors in networked llm agents: modeling the strategic dynamics of information operations.
  External Links: 2510.25003,
  [Link](https://arxiv.org/abs/2510.25003)
  Cited by: [§1](https://arxiv.org/html/2601.01090v2#S1.p2.1 "1. Introduction ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai"),
  [§6](https://arxiv.org/html/2601.01090v2#S6.SS0.SSS0.Px2.p1.1 "Future Work ‣ 6. Conclusions ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai").
- Piao et al. (2025a)
  J. Piao, Z. Lu, C. Gao, F. Xu, Q. Hu, F. P. Santos, Y. Li, and J. Evans
  Emergence of human-like polarization among large language model agents.
  External Links: 2501.05171,
  [Link](https://arxiv.org/abs/2501.05171)
  Cited by: [§1](https://arxiv.org/html/2601.01090v2#S1.p2.1 "1. Introduction ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai").
- Piao et al. (2025b)
  J. Piao, Y. Yan, J. Zhang, N. Li, J. Yan, X. Lan, Z. Lu, Z. Zheng, J. Y. Wang, D. Zhou, C. Gao, F. Xu, F. Zhang, K. Rong, J. Su, and Y. Li
  AgentSociety: large-scale simulation of llm-driven generative agents advances understanding of human behaviors and society.
  External Links: 2502.08691,
  [Link](https://arxiv.org/abs/2502.08691)
  Cited by: [§1](https://arxiv.org/html/2601.01090v2#S1.p1.1 "1. Introduction ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai").
- Shao et al. (2018)
  C. Shao, G. L. Ciampaglia, O. Varol, K. Yang, A. Flammini, and F. Menczer
  The spread of low-credibility content by social bots.
  Nature Communications 9 (1), pp. 4787.
  Cited by: [§1](https://arxiv.org/html/2601.01090v2#S1.p1.1 "1. Introduction ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai").
- Shen et al. (2025)
  S. Shen, M. Kraus, and E. André
  Enhance trust-worthiness of llm-based social agent through self-calibration.
  In Adjunct Proceedings of the 25th ACM International Conference on Intelligent Virtual Agents,
  IVA Adjunct ’25, New York, NY, USA.
  External Links: ISBN 9798400719967,
  [Link](https://doi.org/10.1145/3742886.3756745),
  [Document](https://dx.doi.org/10.1145/3742886.3756745)
  Cited by: [§1](https://arxiv.org/html/2601.01090v2#S1.p1.1 "1. Introduction ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai").
- Wang et al. (2025)
  H. Wang, W. Fu, Y. Tang, Z. Chen, Y. Huang, J. Piao, C. Gao, F. Xu, T. Jiang, and Y. Li
  A survey on responsible llms: inherent risk, malicious use, and mitigation strategy.
  External Links: 2501.09431,
  [Link](https://arxiv.org/abs/2501.09431)
  Cited by: [§1](https://arxiv.org/html/2601.01090v2#S1.p3.1 "1. Introduction ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai").
- Wu et al. (2024)
  Z. Wu, R. Peng, S. Zheng, Q. Liu, X. Han, B. I. Kwon, M. Onizuka, S. Tang, and C. Xiao
  Shall we team up: exploring spontaneous cooperation of competing llm agents.
  In Conference on Empirical Methods in Natural Language Processing,
  External Links: [Link](https://api.semanticscholar.org/CorpusID:267750197)
  Cited by: [§1](https://arxiv.org/html/2601.01090v2#S1.p2.1 "1. Introduction ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai").
- Wulczyn et al. (2017)
  E. Wulczyn, N. Thain, and L. Dixon
  Ex machina: personal attacks seen at scale.
  In Proceedings of the 26th International Conference on World Wide Web (WWW),
  pp. 1391–1399.
  External Links: [Document](https://dx.doi.org/10.1145/3038912.3052591),
  [Link](https://arxiv.org/abs/1610.08914)
  Cited by: [§2](https://arxiv.org/html/2601.01090v2#S2.SS0.SSS0.Px2.p1.1 "Toxicity Adoption vs Exposure ‣ 2. Related Work ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai").
- Xue et al. (2025)
  D. Xue, J. Cui, S. Qian, C. Hu, and C. Xu
  SoMe: a realistic benchmark for llm-based social media agents.
  External Links: 2512.14720,
  [Link](https://arxiv.org/abs/2512.14720)
  Cited by: [§2](https://arxiv.org/html/2601.01090v2#S2.SS0.SSS0.Px1.p1.1 "AI-Agents in Social Platform ‣ 2. Related Work ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai").
- Ye et al. (2024)
  J. Ye, L. Luceri, J. Jiang, and E. Ferrara
  Susceptibility to unreliable information sources: swift adoption with minimal exposure.
  In Proceedings of the ACM Web Conference 2024,
  WWW ’24, New York, NY, USA, pp. 4674–4685.
  External Links: ISBN 9798400701719,
  [Link](https://doi.org/10.1145/3589334.3648154),
  [Document](https://dx.doi.org/10.1145/3589334.3648154)
  Cited by: [§4.2](https://arxiv.org/html/2601.01090v2#S4.SS2.p2.1 "4.2. Likelihood of Toxic Responses (RQ2) ‣ 4. Results ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai").
- Zhao et al. (2025)
  J. Zhao, Z. Qian, L. Cao, Y. Wang, Y. Ding, Y. Hu, Z. Zhang, and Z. Jin
  Role-play paradox in large language models: reasoning performance gains and ethical dilemmas.
  External Links: 2409.13979,
  [Link](https://arxiv.org/abs/2409.13979)
  Cited by: [§4.3](https://arxiv.org/html/2601.01090v2#S4.SS3.p14.1 "4.3. Induced vs Spontaneous Toxicity (RQ3) ‣ 4. Results ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai").
- Zhu et al. (2025)
  Y. Zhu, Y. He, E. Haq, G. Tyson, and P. Hui
  Characterizing LLM-driven social network: the Chirper.ai case.
  External Links: 2504.10286,
  [Document](https://dx.doi.org/10.48550/arXiv.2504.10286),
  [Link](https://arxiv.org/abs/2504.10286)
  Cited by: [§2](https://arxiv.org/html/2601.01090v2#S2.SS0.SSS0.Px3.p3.1 "Chirper.ai Platform ‣ 2. Related Work ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai"),
  [§4.3](https://arxiv.org/html/2601.01090v2#S4.SS3.p12.2 "4.3. Induced vs Spontaneous Toxicity (RQ3) ‣ 4. Results ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai").
- Zoizner and Levy (2025)
  A. Zoizner and A. Levy
  How social media users adopt the toxic behaviors of ingroup and outgroup accounts.
  Journal of Computer-Mediated Communication 30 (6), pp. zmaf018.
  External Links: ISSN 1083-6101,
  [Document](https://dx.doi.org/10.1093/jcmc/zmaf018)
  Cited by: [§2](https://arxiv.org/html/2601.01090v2#S2.SS0.SSS0.Px2.p2.1 "Toxicity Adoption vs Exposure ‣ 2. Related Work ‣ Harm in AI-Driven Societies:An Audit of Toxicity Adoption on Chirper.ai").
