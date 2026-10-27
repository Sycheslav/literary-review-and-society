---
id: arxiv-2504-08640-text
type: material
title: Do LLMs trust AI regulation? Emerging behaviour of game-theoretic LLM agents
work_id: arxiv-2504-08640
source_url: https://arxiv.org/html/2504.08640v1
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять
  с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.
language: original
sha256_text: e676df8d70d5245c7c0b41ebcb566e3e72849940cc3e35c095a7b80a0f3cd5d3
---

> Источник: [https://arxiv.org/html/2504.08640v1](https://arxiv.org/html/2504.08640v1). Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.

# Do LLMs trust AI regulation? Emerging behaviour of game-theoretic LLM agents

Alessio Buscemi1,†
  
Daniele Proverbio2,†
  
Paolo Bova3,†
  
Nataliya Balabanova4
  
Adeela Bashir3
  
Theodor Cimpeanu5
  
Henrique Correia da Fonseca6
  
Manh Hong Duong4
  
Elias Fernández Domingos7,8
  
António M. Fernandes6
  
Marcus Krellner5
  
Ndidi Bianca Ogbo3
  
Simon T. Powers9
  
Fernando P. Santos10
  
Zia Ush Shamszaman3
  
Zhao Song3
  
Alessandro Di Stefano3,‡
  
The Anh Han3,‡,∗

1 Luxembourg Institute of Science and Technology
  
2 Department of Industrial Engineering, University of Trento
  
3 School Computing, Engineering and Digital Technologies, Teesside University
  
4 School of Mathematics, University of Birmingham
  
5 School of Mathematics and Statistics, University of St Andrews
  
6 INESC-ID and Instituto Superior Técnico, Universidade de Lisboa 
  
7 Machine Learning Group, Université libre de Bruxelles
  
8 AI Lab, Vrije Universiteit Brussel
  
9 Division of Computing Science and Mathematics, University of Stirling
  
10 University of Amsterdam

† Equally first authors 
  
‡ Equally last authors 
  
⋆ Corresponding author: The Anh Han (T.Han@tees.ac.uk)

## abstract

There is general agreement that fostering trust and cooperation within the AI development ecosystem is essential to promote the adoption of trustworthy AI systems. By embedding Large Language Model (LLM) agents within an evolutionary game-theoretic framework, this paper investigates the complex interplay between AI developers, regulators and users, modelling their strategic choices under different regulatory scenarios. Evolutionary game theory (EGT) is used to quantitatively model the dilemmas faced by each actor, and LLMs provide additional degrees of complexity and nuances and enable repeated games and incorporation of personality traits. Our research identifies emerging behaviours of strategic AI agents, which tend to adopt more ”pessimistic” (not trusting and defective) stances than pure game-theoretic agents. We observe that, in case of full trust by users, incentives are effective to promote effective regulation; however, conditional trust may deteriorate the ”social pact”. Establishing a virtuous feedback between users’ trust and regulators’ reputation thus appears to be key to nudge developers towards creating safe AI. However, the level at which this trust emerges may depend on the specific LLM used for testing. Our results thus provide guidance for AI regulation systems, and help predict the outcome of strategic LLM agents, should they be used to aid regulation itself.

Keywords: AI governance, AI regulation, trustworthy AI, game theory, LLM, behavioural dynamics.

## I Introduction

As Artificial Intelligence (AI) applications become widespread, debates are taking place about how to regulate it [[1](https://arxiv.org/html/2504.08640v1#bib.bib1), [2](https://arxiv.org/html/2504.08640v1#bib.bib2), [3](https://arxiv.org/html/2504.08640v1#bib.bib3), [4](https://arxiv.org/html/2504.08640v1#bib.bib4), [5](https://arxiv.org/html/2504.08640v1#bib.bib5), [6](https://arxiv.org/html/2504.08640v1#bib.bib6)]. In the ideal scenario, AI systems should be trustworthy and safe, so that users can trust them and enable broad and safe adoption. Regulation is typically viewed as a key way to achieve such desired outcomes [[7](https://arxiv.org/html/2504.08640v1#bib.bib7)], and regulators are developing acts and guidelines, such as the EU AI Act, to balance trustworthiness, safety and access to innovation [[8](https://arxiv.org/html/2504.08640v1#bib.bib8)]. Nonetheless, key questions remain as to which levels of restrictions should be placed upon AI developers, about who should create and enforce such regulations, who may be better suited to perform monitoring, and in general which actions could better drive trust-building among users [[9](https://arxiv.org/html/2504.08640v1#bib.bib9), [10](https://arxiv.org/html/2504.08640v1#bib.bib10), [11](https://arxiv.org/html/2504.08640v1#bib.bib11), [12](https://arxiv.org/html/2504.08640v1#bib.bib12), [13](https://arxiv.org/html/2504.08640v1#bib.bib13)].

Albeit the discourse around the topic is mostly qualitative and limited in its formulation of formal predictions [[14](https://arxiv.org/html/2504.08640v1#bib.bib14), [15](https://arxiv.org/html/2504.08640v1#bib.bib15), [16](https://arxiv.org/html/2504.08640v1#bib.bib16)], recent attempts have been developed to create quantitative and systematic frameworks to analyse the mutual relationships among all involved actors, and to predict the effect of different regulatory systems using game-theoretic principles [[17](https://arxiv.org/html/2504.08640v1#bib.bib17), [18](https://arxiv.org/html/2504.08640v1#bib.bib18), [19](https://arxiv.org/html/2504.08640v1#bib.bib19), [20](https://arxiv.org/html/2504.08640v1#bib.bib20), [21](https://arxiv.org/html/2504.08640v1#bib.bib21)]. The typical framework considers asymmetric games among three actors – regulators, AI developers and users – with different decision-making strategies and dilemmas. In fact, each actor has risk-minimising (or profit-maximising) goals: users can decide whether to trust and adopt AI systems [[22](https://arxiv.org/html/2504.08640v1#bib.bib22), [23](https://arxiv.org/html/2504.08640v1#bib.bib23)], depending on whether they consider them trustworthy or not, and therefore run the risk that such systems do not ensure their users’ interests or may be even malicious [[24](https://arxiv.org/html/2504.08640v1#bib.bib24), [25](https://arxiv.org/html/2504.08640v1#bib.bib25), [26](https://arxiv.org/html/2504.08640v1#bib.bib26)]. This, in turn, derives from AI developers typically working in competition with each other and pursuing their own interest over compliance to regulation and trust-building towards users [[27](https://arxiv.org/html/2504.08640v1#bib.bib27), [28](https://arxiv.org/html/2504.08640v1#bib.bib28), [29](https://arxiv.org/html/2504.08640v1#bib.bib29)]. Regulators also need to balance the protection of users’ rights and the management of resources, e.g., by delegating the monitoring to private audit companies [[30](https://arxiv.org/html/2504.08640v1#bib.bib30), [31](https://arxiv.org/html/2504.08640v1#bib.bib31)]. Using evolutionary game theory enables us to predict long-term behavioural outcome of interactions among the three actors and to estimate the effect of incentives for regulators.

On top of employing well-established methods from evolutionary game-theory, which embed human decision-making processes in a formal and proven domain [[32](https://arxiv.org/html/2504.08640v1#bib.bib32), [33](https://arxiv.org/html/2504.08640v1#bib.bib33)], we may also exploit the newest technologies to obtain complementary models and predictions. Indeed, AI systems themselves have been suggested to enable suitable replicas of human actions [[34](https://arxiv.org/html/2504.08640v1#bib.bib34), [35](https://arxiv.org/html/2504.08640v1#bib.bib35)]: hence they could, in principle, be used to perform strategic games involving complex, non-linear and multi-faceted agents. We thus create a new framework to experiment the regulatory dynamics among AI agents, behaving as three actors (regulators, AI developers and users, as in [[17](https://arxiv.org/html/2504.08640v1#bib.bib17)]) in a regulatory ecosystem. We blend AI agents within a game-theoretic setting: three AI agents interact dynamically, after being prompted in such a way to represent the three desired actors. To this end, we use the new generation of Large Language Models (LLMs) [[36](https://arxiv.org/html/2504.08640v1#bib.bib36)]. As it was observed that different LLMs may produce contrasting results in various tasks [[37](https://arxiv.org/html/2504.08640v1#bib.bib37), [38](https://arxiv.org/html/2504.08640v1#bib.bib38), [39](https://arxiv.org/html/2504.08640v1#bib.bib39)], we employ two different models: GPT-4o from OpenAI’s GPT family [[40](https://arxiv.org/html/2504.08640v1#bib.bib40)] and Mistral Large by Mistral [[41](https://arxiv.org/html/2504.08640v1#bib.bib41)]. The dilemmas that each actor typically faces are then embedded in the form of payoff matrices, in the spirit of evolutionary game theory. This enables direct comparison with previous results and ensure reproducibility and interpretability of the results. We also consider the possibility [[31](https://arxiv.org/html/2504.08640v1#bib.bib31)] that users may condition their trust on the effectiveness of regulators, thereby representing additional incentives for regulators to comply with users’ needs. Moreover, since using LLMs enables greater flexibility for capturing inherent characteristics of individuals [[42](https://arxiv.org/html/2504.08640v1#bib.bib42), [43](https://arxiv.org/html/2504.08640v1#bib.bib43)]—which experimental evidence suggests to significantly impact human behaviours [[44](https://arxiv.org/html/2504.08640v1#bib.bib44)]—we test whether suggesting specific personalities to AI agents modifies significantly the emerging dynamics.

Our experiments have three main purposes. First, to observe the emerging behaviours of strategic AI agents, which are requested to model social interactions in a complex evolutionary game setting. Second, to compare such behaviours with those expected from game-theoretic predictions, so as to validate and interpret them under the lenses of a known theory, thereby improving interpretability of the emerging outcomes. Third, we address the recent deployment of AI agents at all organizational levels: in the scenario where expert AI agents are employed by private organizations and developers to help draft governance guidelines, how may they respond? Our study provides first systematic predictions to such questions, by considering one-shot and repeated games, and by explicitly including personality traits in the AI agents.

We observe that LLMs provide results that are more nuanced and not always aligned to game-theoretic predictions. This may be associated to LLM having additional complexity coming from the training process. Overall, we observe a variety of strategies emerging from combinations of payoffs and scenarios; in general, having conditional trust seems to promote defective stances by developers and regulators, while AI-users tend not to eventually trust them. Instead, full trust by AI-users promote higher chances of virtuous behaviours by the other agents. In general, GPT-4o has a more optimistic attitude than Mistral Large, which highlights potential inconsistencies and sensitivity to payoffs among LLMs – which, in turn, should promote studies to improve the reproducibility of tests.

In the next section, we introduce the game-theoretic payoff settings, the setup of the LLM agents and the characteristics of the tests. Results and discussion for each analysis and research purposes will follow.

## II Methods

### II.1 The three-actors game-theoretic setting

We build our analysis upon the model from [[17](https://arxiv.org/html/2504.08640v1#bib.bib17)], which formalises the multi-party interactions among three actors in a regulatory ecosystem in the form of a game (see Fig. [1](https://arxiv.org/html/2504.08640v1#S2.F1 "Figure 1 ‣ II.1 The three-actors game-theoretic setting ‣ II Methods ‣ Do LLMs trust AI regulation? Emerging behaviour of game-theoretic LLM agents")). The interactions model the simplest form of regulatory ecosystem identified by [[7](https://arxiv.org/html/2504.08640v1#bib.bib7)]: each actor represents the average behaviour of a population of AI users, developers and regulators, which mutually influence one another in a direct and non-mediated fashion. This model is rather simplistic and does not include influences from, e.g., culture or economy, nor the mediating effect of other actors such as scholars or the media [[7](https://arxiv.org/html/2504.08640v1#bib.bib7), [45](https://arxiv.org/html/2504.08640v1#bib.bib45)]; nonetheless, it includes the key elements considered during the development processes, and is similar to typical models of regulations for information systems such as the General Data Protection Regulations (GDPR) and the AI Act of the European Union. Each actor can chose among binary options in an interaction with other actors: Users can trust ($T$) or not ($N$) an AI system; developers either comply ($C$) or not ($D$) with regulations; regulators enforce compliance ($C$) or not ($D$).

![Refer to caption](https://arxiv.org/html/2504.08640v1/figures/scheme_threeagents.png)


Figure 1: Scheme of the core features for the three-player interaction model. Users may trust or not; if they do ($T$), other agents get benefits (blue lines). If they do not ($N$), no adoption is enacted and other agents get no benefits. Developers may comply ($C$) with regulations and develop safe AI which, if adopted, yields benefits for users (green line); however, it may be costly. Instead, developers may create unsafe AI ($D$) which, if adopted, may yield partial or negative payoff to users (red line). Regulators may be strict ($C$), using resources but gaining benefits if they catch defective developers (a), or lenient ($D$). If users have access to regulators’ reputation (b), they can decide whether to trust conditionally.

Each encounter or interaction is framed as a game, whose outcome depends on the strategy of each actor. The strategy is dictated by the weights placed upon each action, summarised in the game payoff matrix. The payoff matrix is built as described in [[17](https://arxiv.org/html/2504.08640v1#bib.bib17)]. The parameters associated with each strategy payoff for each user are described as follows.

- •

  Users: users trust (T) or not (N) an AI system, depending on a combination of their trust in regulators and in developers. If $T$ when both regulators and developers cooperate, users get a benefit $b\_{U}$; if developers defect (do not comply), users use unsafe AI and gain reduced or even negative benefits, that is, $\epsilon\times b\_{u}$, with $\epsilon\in(-\infty;1]$ represents a risk factor.
- •

  Creators: developers may comply with regulations ($C$) or defect ($D$). They gain a benefit $b\_{P}$ from selling the product (i.e. if users trust and adopt AI), and incur an additional cost $c\_{P}$ to create safer AI (while the cost of creating unsafe AI is normalised to $0$). However, if the regulator enforces rules and developers play $D$, they suffer institutional punishment resulting in a payoff loss of $u$.
- •

  Regulators: they can either enforce compliance ($C$) o be lenient ($D$). We assume that regulators earn a benefit $b\_{R}$ when the user trusts and adopts AI, e.g. by being funded by taxes on the sales of AI products, or by increasing investments in regulation by governments when there is higher uptake of AI. On the other hand, creating rules and monitoring technologies is costly; playing $C$ thus requires an extra cost $c\_{R}$, while $D$ has a cost normalised to 0. Finally, administering the punishment is associated with an additional cost $v$, but cooperative regulators are rewarded with a benefit $b\_{fo}$ by governments when finding out a defective developer.

We consider two cases for users to place their trust upon regulators: if regulators’ reputation is publicly available, users can adjust their trust depending on whether the regulators’ reputation is good or not. This leads to a Conditional Trust (CT) scenario. Otherwise, this reputational information may not be available, and thus users place their trust solely depending on their perceived benefits. For each scenarios, we test the influence of $b\_{fo}$ by sampling a subset of the values from [[17](https://arxiv.org/html/2504.08640v1#bib.bib17)], to enable direct comparison while employing reasonable resources (cost and time) when performing the experiments with LLMs.

The payoff matrices, with and without CT, reproduce those in [[17](https://arxiv.org/html/2504.08640v1#bib.bib17)] and are given in Tables [1](https://arxiv.org/html/2504.08640v1#S2.T1 "Table 1 ‣ II.1 The three-actors game-theoretic setting ‣ II Methods ‣ Do LLMs trust AI regulation? Emerging behaviour of game-theoretic LLM agents") and [2](https://arxiv.org/html/2504.08640v1#S2.T2 "Table 2 ‣ II.1 The three-actors game-theoretic setting ‣ II Methods ‣ Do LLMs trust AI regulation? Emerging behaviour of game-theoretic LLM agents"), respectively.

Table 1: AI Governance model with with incentives for regulators and conditional trust. Agents are: User Us., Creator Cr and Regulator Re. Users act conditionally (CT) on the regulators’ reputation, assumed to be publicly available before the game.

| Strategies | | | Payoffs | | |
| --- | --- | --- | --- | --- | --- |
| Us. | Cr | Re | User | Creator | Regulator |
| CT | C | C | $b\_{U}$ | $b\_{P}-c\_{P}$ | $b\_{R}-c\_{R}$ |
| CT | C | D | $0$ | $-c\_{P}$ | $0$ |
| CT | D | C | $\varepsilon b\_{U}$ | $b\_{P}-u$ | $b\_{R}-c\_{R}-v+b\_{fo}$ |
| CT | D | D | $0$ | $0$ | $0$ |
| N | C | C | 0 | $-c\_{P}$ | $-c\_{R}$ |
| N | C | D | 0 | $-c\_{P}$ | 0 |
| N | D | C | 0 | 0 | -$c\_{R}$ |
| N | D | D | 0 | 0 | 0 |


Table 2: AI Governance model with incentives for regulators, but without conditional trust. Agents are: User Us., Creator Cr and Regulator Re). Users trust ($T$) solely based on their payoff and a-priori attitude.

| Strategies | | | Payoffs | | |
| --- | --- | --- | --- | --- | --- |
| Us. | Cr | Re | User | Creator | Regulator |
| T | C | C | $b\_{U}$ | $b\_{P}-c\_{P}$ | $b\_{R}-c\_{R}$ |
| T | C | D | $b\_{U}$ | $b\_{P}-c\_{P}$ | $b\_{R}$ |
| T | D | C | $\varepsilon b\_{U}$ | $b\_{P}-u$ | $b\_{R}-c\_{R}-v{+b\_{fo}}$ |
| T | D | D | $\varepsilon b\_{U}$ | $b\_{P}$ | $b\_{R}$ |
| N | C | C | 0 | $-c\_{P}$ | $-c\_{R}$ |
| N | C | D | 0 | $-c\_{P}$ | 0 |
| N | D | C | 0 | 0 | -$c\_{R}$ |
| N | D | D | 0 | 0 | 0 |

Finally, we consider two settings for the games: a series of one-shot games, where each encounter happens once and delivers a result, and a repeated games, where players interact more than once and may adjust their behaviour depending on past direct interactions.
It has been established in other repeated game settings such as the Prisoner’s Dilemma, the Public Good Games, and the AI race interactions, that when the interaction among the same pair or group of players are repeated, desirable behaviours such as cooperation and safe development become more frequent via direct reciprocity [[46](https://arxiv.org/html/2504.08640v1#bib.bib46), [47](https://arxiv.org/html/2504.08640v1#bib.bib47), [21](https://arxiv.org/html/2504.08640v1#bib.bib21)].
We test if repeated interactions in this three-party game will improve desirable outcomes.

### II.2 AI agents setup

The games are set using LLM agents whose payoffs are given as described above. To setup agents within a game-theoretic framework, we employ the Framework for AI Agents Bias Recognition using Game Theory (FAIRGAME) [[48](https://arxiv.org/html/2504.08640v1#bib.bib48)].
FAIRGAME enables testing of user-defined games, described in textual format and incorporating any desired payoff matrix.
Additionally, it allows for the specification of agent traits that will participate in these games.
The agents can be instantiated using any LLM of choice by invoking the corresponding APIs.

To run, FAIRGAME requires the following inputs:

- •

  Configuration File: A file that defines the setup of both the agents and the game. The default format is JSON. In this study, we use custom files listing the parameters and payoff weights associated with the game, as described above.
- •

  Prompt Template: A text file that defines the instruction template, providing a literal description of the game. It includes placeholders that are dynamically populated with information from the configuration file at each round, ensuring customization for each agent. The template used for all experiments is available in Supplementary Section S1.

Table 3: Parameters provided to FAIRGAME.

| Parameter | Value |
| --- | --- |
| Number of agents | 3 |
| Names of the agents | regulator; developer; user |
| Personalities of the agents | None; None; None |
| Underlying LLM | OpenAI GPT-4o; Mistral Large |
| Number of rounds | 1 (for one-shot games); 10 (for repeated games) |
| Agents communicate | False |
| Agents know the personalities of the others | False |
| Stopping condition | None |

Table [3](https://arxiv.org/html/2504.08640v1#S2.T3 "Table 3 ‣ II.2 AI agents setup ‣ II Methods ‣ Do LLMs trust AI regulation? Emerging behaviour of game-theoretic LLM agents") lists all the parameters used to run the main experiments (see Sections [III.1](https://arxiv.org/html/2504.08640v1#S3.SS1 "III.1 One-shot games with and without conditional trust ‣ III Results ‣ Do LLMs trust AI regulation? Emerging behaviour of game-theoretic LLM agents"), [III.2](https://arxiv.org/html/2504.08640v1#S3.SS2 "III.2 Repeated games ‣ III Results ‣ Do LLMs trust AI regulation? Emerging behaviour of game-theoretic LLM agents")), as defined in the configuration file.
The framework employs three distinct agents, each assigned a specific role: regulator, developer, and user.

The underlying language model for the agents is either OpenAI’s GPT-4o or Mistral Large. Once a model is selected, it remains consistent across all agents in a given simulation. That is, we conduct simulations where all agents are based on GPT-4o and others where all agents are based on Mistral Large, but we do not mix models within the same game.

We conduct both one-shot games, consisting of a single round, and repeated games, which span ten rounds. Notably, the agents operate independently, with no direct communication among them, ensuring that all decisions are made in isolation. Moreover, the agents lack prior knowledge of the personalities or strategic tendencies of the other participants. The games proceed without predefined stopping conditions and continues for the designated number of rounds.

Although the framework supports the specification of agent personalities, in the main experiments, all agents operated without assigned personalities, maintaining their default behaviour.
This guarantees that decisions are made solely according to their respective roles, adhering to the default behaviour of the LLMs without introducing additional factors. We also construct additional experiments to specifically inquire the effect of setting agents’ personalities: in Section [III.3](https://arxiv.org/html/2504.08640v1#S3.SS3 "III.3 Adding personality traits ‣ III Results ‣ Do LLMs trust AI regulation? Emerging behaviour of game-theoretic LLM agents"), we conduct a subset of the main experiments to examine how contrasting personalities influence the outcomes.
Specifically, we test the following personality traits, fully described to LLMs through the prompt template file to avoid ambiguity.

- •

  User: risk-adverse, i.e. you reject new AI systems to avoid uncertainty OR risk-taking, i.e. you adopt new AI systems to benefit from potential advancements.
- •

  Developer: aggressive, i.e. you develop quickly to stay ahead, accepting some risks OR cooperative, i.e. you take a cautious approach to minimize risk.
- •

  Regulator: lenient, i.e. you trust developers to regulate themselves OR strict, i.e. you require verification before deployment to ensure safety.

## III Results

### III.1 One-shot games with and without conditional trust

We first consider the case of a set of one-shot games, and the effect of incentives for regulators ($b\_{fo}$) on the adoption of specific strategies.
We will compare the results with outcomes from evolutionary game dynamics in finite populations, which is known to elicit notable stochastic effects on evolutionary outcomes due to, e.g., errors in social learning and behavioural exploration [[49](https://arxiv.org/html/2504.08640v1#bib.bib49)].
This stochastic approach has proven to be effective in explaining human behaviours in controlled experiments [[50](https://arxiv.org/html/2504.08640v1#bib.bib50), [51](https://arxiv.org/html/2504.08640v1#bib.bib51)].

Using AI agents already embeds stochasticity, due to the very nature of LLMs which always contains a degree of randomness [[52](https://arxiv.org/html/2504.08640v1#bib.bib52)] and a condensation of stochastic outcomes into the output Softmax functions [[53](https://arxiv.org/html/2504.08640v1#bib.bib53)]. In turn, this allows us to directly compare the results with game-theoretic stochastic approaches, which are known to help in explaining empirical observations from human behavioural experiments and have been thoroughly investigated in the literature [[51](https://arxiv.org/html/2504.08640v1#bib.bib51), [50](https://arxiv.org/html/2504.08640v1#bib.bib50)]. As a consequence, we can observe the emergence of preferred strategies in games with three AI agents, and directly compare them with the predictions from evolutionary game theory.

Figs. [2](https://arxiv.org/html/2504.08640v1#S3.F2 "Figure 2 ‣ III.1 One-shot games with and without conditional trust ‣ III Results ‣ Do LLMs trust AI regulation? Emerging behaviour of game-theoretic LLM agents") and [3](https://arxiv.org/html/2504.08640v1#S3.F3 "Figure 3 ‣ III.1 One-shot games with and without conditional trust ‣ III Results ‣ Do LLMs trust AI regulation? Emerging behaviour of game-theoretic LLM agents") summarise the results, for games testing different values of risk scores $\epsilon$ and regulation cost $c\_{R}$, with and without conditional trust ($CT$). Fig. [2](https://arxiv.org/html/2504.08640v1#S3.F2 "Figure 2 ‣ III.1 One-shot games with and without conditional trust ‣ III Results ‣ Do LLMs trust AI regulation? Emerging behaviour of game-theoretic LLM agents") refers to tests conducted with GPT-4o-based LLM agents, while Fig. [3](https://arxiv.org/html/2504.08640v1#S3.F3 "Figure 3 ‣ III.1 One-shot games with and without conditional trust ‣ III Results ‣ Do LLMs trust AI regulation? Emerging behaviour of game-theoretic LLM agents") uses Mistral. We show the frequencies of the eight ($2^{3}$) possible combinations of strategies for the three players, depending on the reward for cooperative regulators $b\_{fo}$. We consider $\epsilon=-0.1$ when defection by the developers results in highly detrimental outcome for the users, and $\epsilon=0.2$ when a lower, but still positive value to the adoption of unsafe AI is assumed (for instance, when it anyway allows access to some services).

![Refer to caption](https://arxiv.org/html/2504.08640v1/OneShotGame_NoPersonality_GPT4o.png)


Figure 2: Results for the one-shot game, using GPT-4o. Left box: low regulation cost ($c\_{R}$ = 0.5). Right box: high regulation cost ($c\_{R}=5$). Each panel corresponds to a different value for $\epsilon$, i.e., the risk for users to adopt unsafe AI ($\epsilon<0$ has higher risk). Conditional trust promotes full trust, cooperative regulation and safe development. Parameters set to: $b\_{U}$ = $b\_{R}$ = $b\_{P}$ = 4, $u$ = 1.5, $v$ = 0.5, $c\_{P}$ = 0.5.

![Refer to caption](https://arxiv.org/html/2504.08640v1/OneShotGame_NoPersonality_Mistral.png)


Figure 3: Results for the one-shot game, using Mistral Large. Left box: low regulation cost ($c\_{R}$ = 0.5). Right box: high regulation cost ($c\_{R}=5$). Each panel corresponds to a different value for $\epsilon$, i.e., the risk for users to adopt unsafe AI ($\epsilon<0$ has higher risk). Conditional trust yields low trust. Parameters set to: $b\_{U}$ = $b\_{R}$ = $b\_{P}$ = 4, $u$ = 1.5, $v$ = 0.5, $c\_{P}$ = 0.5.

When trust is not conditioned on the regulators’ reputation, GPT-based agents tend to prefer a situation where users do not trust AI (except for the case where regulators have a low regulation cost and users still gain some benefit by adopting unsafe AI, upper-left panel of Fig. [2](https://arxiv.org/html/2504.08640v1#S3.F2 "Figure 2 ‣ III.1 One-shot games with and without conditional trust ‣ III Results ‣ Do LLMs trust AI regulation? Emerging behaviour of game-theoretic LLM agents"), where the strategy with full trust and compliance coexists for medium incentives for regulators). Regulators have here the tendency to comply more frequently, especially with a higher benefit for catching unsafe developers, $b\_{fo}$. On the other hand, we observe a mixing of cooperation and defection by developers. Moreover, we typically observe that, if regulators have incentives to catch defective developers, their complying proportion increases when the proportion of defective developers increases, even at higher costs of regulation. This effect thus have the capability of potentially coping with developers’ behaviours. These findings are quite different from what happens in a purely game-theoretic setting (compare with Figs. 6 and 7 of [[17](https://arxiv.org/html/2504.08640v1#bib.bib17)]), where the TDD strategy was usually dominant. Interestingly, this may be explained by the fact that GPT-4o was trained on recent real-world data, which show an overall tendency of users to trust AI only partially [[22](https://arxiv.org/html/2504.08640v1#bib.bib22), [23](https://arxiv.org/html/2504.08640v1#bib.bib23)], of regulators to try and navigate the regulatory landscape with new actions (think e.g. of the EU AI Act), and of developers to display a variety of approaches, ranging from the safety guardrails of OpenAI and Microsoft to the more lax attitude of developers such as xAI with its Grok 3. It thus seems that GPT-based agents mix the pure payoff-based results with statistical outcomes derived from empirical data.

Instead, with Conditional Trust, GPT-based agents tend to be more trusting and complying, both for low and high regulation cost. In the first case, this is in line with game-theoretic results, while in the second case it shows the overall ”positivity” of the LLM towards users’, developers’ (and thus regulators’) behaviour, which tend to become defective only with high cost despite the incentives. Even in this case, we can recognise some effect of the training data on the game’s output, which thus mixes statistical evidence about the real world and payoff-based strategies.

On the other hand, Mistral behaves rather differently from GPT. The scenario without CT and with $c\_{R}=0.5$ is very close to GPT’s one, but then the LLM diverges in its outcome. Differently from GPT, it remains ”optimistic” (preferring the TCC strategy) also when the regulators’ cost is higher, in case of full trust. Instead, conditional trust triggers a NDD scenario; in the case of high $c\_{R}$, it is consistent with observations made using pure game theory (see Fig. 7 in [[17](https://arxiv.org/html/2504.08640v1#bib.bib17)]), while the same occurrence for lower $c\_{R}$ suggests that Mistral views conditional trust as an overall detrimental element. The fact that CT has such a prominent effect on Mistral’s outcomes suggests that the model is very sensitive to the changes made in the payoff matrix to accommodate the CT mechanism.

### III.2 Repeated games

We now consider the possibility of having repeated games, such that the proportion of strategies may evolve over several rounds. This way, agents can update their choices based on other players’ behaviours in previous rounds, thus becoming able to conditional decisions even in the absence of CT (which is a first approximation of history-dependent choices, and whose results are shown in Supplementary Figure S1). Except for the number of rounds, all other parameters are set as above. Fig. [4](https://arxiv.org/html/2504.08640v1#S3.F4 "Figure 4 ‣ III.2 Repeated games ‣ III Results ‣ Do LLMs trust AI regulation? Emerging behaviour of game-theoretic LLM agents") shows the results as the average over 10 repeated rounds, respectively for GPT- and Mistral-based agents. The results over each round, for selected values of $b\_{fo}$, are reported in Fig. [5](https://arxiv.org/html/2504.08640v1#S3.F5 "Figure 5 ‣ III.2 Repeated games ‣ III Results ‣ Do LLMs trust AI regulation? Emerging behaviour of game-theoretic LLM agents") and Fig. [6](https://arxiv.org/html/2504.08640v1#S3.F6 "Figure 6 ‣ III.2 Repeated games ‣ III Results ‣ Do LLMs trust AI regulation? Emerging behaviour of game-theoretic LLM agents") for GPT-4o and Mistral, respectively; results for each round and each $b\_{fo}$ are reported in Supplementary Figs. S3, S4, S6 and S7.

![Refer to caption](https://arxiv.org/html/2504.08640v1/RepeatedGame_NoPersonality.png)


Figure 4: Results for the repeated games over 10 rounds (average over rounds), using GPT-4o and Mistral Large. Left box: low regulation cost ($c\_{R}$ = 0.5). Right box: high regulation cost ($c\_{R}=5$). Each panel corresponds to a different value for $\epsilon$, i.e., the risk for users to adopt unsafe AI ($\epsilon<0$ has higher risk).

![Refer to caption](https://arxiv.org/html/2504.08640v1/RepeatedGame_NoPersonality_GPT4o_rounds.png)


Figure 5: Results for the repeated games over each of the 10 rounds, for different values of $b\_{fo}$, using GPT-4o. Left box: low regulation cost ($c\_{R}$ = 0.5). Right box: high regulation cost ($c\_{R}=5$). Each panel corresponds to a different value for $\epsilon$, i.e., the risk for users to adopt unsafe AI ($\epsilon<0$ has higher risk).

![Refer to caption](https://arxiv.org/html/2504.08640v1/RepeatedGame_NoPersonality_Mistral_rounds.png)


Figure 6: Results for the repeated games over each of the 10 rounds, for different values of $b\_{fo}$, using Mistral Large Left box: low regulation cost ($c\_{R}$ = 0.5). Right box: high regulation cost ($c\_{R}=5$). Each panel corresponds to a different value for $\epsilon$, i.e., the risk for users to adopt unsafe AI ($\epsilon<0$ has higher risk).

We immediately observe that, for GPT-4o, having repeated games changes the outcome. If the game is repeated among the same group of (three) agents, they end up choosing a mix of strategies, with a tendency to trust (TCC) for low regulatory costs ($c\_{R}$), low risk for users $\epsilon$ and low incentives $b\_{fo}$, with higher probability of not trusting if $b\_{fo}$ increases. Instead, if the regulatory cost is high, there is a higher tendency of not trusting, having defective developers and a mix of complying and defective regulators, whose fraction of compliance increases with higher $b\_{fo}$. Overall, the picture that emerges is more in line with what is predicted by game theory using one-shot games (see Figs. 6 and 7 in [[17](https://arxiv.org/html/2504.08640v1#bib.bib17)]): apparently, despite fluctuations given by the stochastic nature of LLMs, repeating the games allows too ”smooth out” the effect of data and to converge towards results primarily driven by the payoff matrix.

In Fig. 5 we show, for GPT-4o, the frequencies of users’ trust and developers’ and regulators’ cooperation over the round, to examine how these players change their behaviour over time.
We observe that across all scenarios, both developers and regulators start with high levels of cooperation, which tend to decrease over time. Instead, users tend to trust less, and maintain similar levels of (low) trust over the rounds. The same patterns can be observed with similar trends over all $b\_{fo}$ and $\epsilon$, while the absolute values change slightly when changing such parameters.

On the other hand, Mistral Large agents maintain an ”optimistic” attitude, preferring to trust as users and to comply as developers and regulators, with high $b\_{fo}$ further incentivising regulators to comply in case their cost is negligible, and to be more lenient if the cost of regulating is high and the other actors are already well-behaving. Even in the case of conditional trust, Mistral Large is less sensitive to having repeated games than GPT-4o is. In fact, Mistral’s results are in line with the one-shot scenario without CT, where an TCC strategy prevails. Like for GPT-4o, we also observe the emergence of an alternative strategy, namely (C)TDD, where users tend to place their trust upon AI even if developers and regulators are defective. These results, which are close to the game-theoretical predictions in case of CT and high $c\_{R}$, are also repeated for low $c\_{R}$, somehow suggesting lower sensitivity of the LLM to this parameter.

In Fig. 6 we show, for Mistral Large, the frequencies of users’ trust and developers’ and regulators’ cooperation over the round.
We observe that across all scenarios, the levels of user trust and both developers and regulators tend to decrease at the beginning and then increase after a few rounds. This is rather in contrast to results obtained with GPT, suggesting that Mistral Large may contain different biases obtained from the training procedure, that tend to prefer cooperative behaviours. These patterns are also in stark contrast to Mistral Large outputs in one-shot games with CT, where a NDD strategy prevails; this suggests that CT, for this LLM, is a poor approximation of updated behaviours due to observation of other agents.

A breakdown on the preferred strategies for each type of agent, average over the various rounds, is also provided in Supplementary Figs. S1 and S4.

### III.3 Adding personality traits

Finally, we exploit the greater flexibility provided by LLM agents, compared to game-theoretic entities, to isolate the effect of the personality associated to each agent. As described in Sec. [II.2](https://arxiv.org/html/2504.08640v1#S2.SS2 "II.2 AI agents setup ‣ II Methods ‣ Do LLMs trust AI regulation? Emerging behaviour of game-theoretic LLM agents"), we prompt the LLMs to play each agent, in one-shot games, according to a set of realistic personalities. We do it for one agent at a time, leaving the other two with personality \*None\* and then changing the combination; this way, we carefully analyse the role of each agent’s personality. This additional set of tests allows us to better interpret the above results by explicitly considering the impact of personalities in the emergent behaviours (recall that, previously, we used the default ”personality” that an LLM statistically associates with each agent, that is unknown) and to predict the impact that specifying a personality has on the strategy choices by AI agents. For each agent, we use the set of personalities described in Sec. [II.2](https://arxiv.org/html/2504.08640v1#S2.SS2 "II.2 AI agents setup ‣ II Methods ‣ Do LLMs trust AI regulation? Emerging behaviour of game-theoretic LLM agents").

Due to resource constraints, we focus on the one-shot game scenario with conditional trust, $c\_{R}=0.5$ and $\epsilon=-0.1$, which showcases the most interesting outcomes according to [[54](https://arxiv.org/html/2504.08640v1#bib.bib54)] and to the findings above. All other parameters are set as previously.

Fig. [7](https://arxiv.org/html/2504.08640v1#S3.F7 "Figure 7 ‣ III.3 Adding personality traits ‣ III Results ‣ Do LLMs trust AI regulation? Emerging behaviour of game-theoretic LLM agents") summarises the results for both GPT-4o and Mistral Large. Additional results are in Supplementary Fig. S7. From Fig. [7](https://arxiv.org/html/2504.08640v1#S3.F7 "Figure 7 ‣ III.3 Adding personality traits ‣ III Results ‣ Do LLMs trust AI regulation? Emerging behaviour of game-theoretic LLM agents"), we immediately see that the personality results align with the repeated games and Mistral one-shot outcomes. Except for when developers cooperate and users are more risk-taking, where conditional trust by users may emerge despite defection by the other players, all the other scenarios maintain NDD as the main strategy. An alternative to promote trust in users is picked by GPT-4o when regulators have their own personality, which may affect users’ trust on top of reputation. In general, GPT-agents are more optimistic than Mistral’s ones, which mostly replicate the ”pessimistic” results obtained without personalities, cf. Fig. [3](https://arxiv.org/html/2504.08640v1#S3.F3 "Figure 3 ‣ III.1 One-shot games with and without conditional trust ‣ III Results ‣ Do LLMs trust AI regulation? Emerging behaviour of game-theoretic LLM agents").

Overall, equipping AI agents with personalities offer an additional array of nuances and possible outcomes, that can inform predictions about trust in AI regulation. When personalities are specified, both LLMs provide similar results, suggesting that fixing this extra parameter is key to increase the chance of repeatable outcomes through LLMs. Moreover, the preset results suggest that AI agents are, overall, aligned towards a rather pessimistic view of current AI regulation, if sustained by conditional trust. This observation may suggest that, when personality is set to \*None\*, the default personality of AI agents is more closely aligned towards ”pessimistic” attitudes. Understanding whether this is systematic, and whether it emerges from training data, is demanded to future studies.

![Refer to caption](https://arxiv.org/html/2504.08640v1/OneShotGame_Personality.png)


Figure 7: Results for the one-shot games with personality traits, using GPT-4o (left) and Mistral Large (right). Each row contains a set of two contrasting personalities, described in [II](https://arxiv.org/html/2504.08640v1#S2 "II Methods ‣ Do LLMs trust AI regulation? Emerging behaviour of game-theoretic LLM agents"). All scenarios are with CT, $c\_{R}=0.5$ and $\epsilon=-0.1$.

## IV Discussion

This work provides a first systematic test of AI agents within a game-theoretic framework, for a game that is not standard in the literature and thus have no data to train the LLMs upon. The obtained results are thus genuinely deriving from the interaction of payoff matrices and any other type of data used for training, while previous results [[42](https://arxiv.org/html/2504.08640v1#bib.bib42), [48](https://arxiv.org/html/2504.08640v1#bib.bib48)] potentially contained pre-cooked outputs deriving from games included in the training of LLMs. Our results thus provide crucial insights according to two perspectives. On the one hand, what can we learn about strategic decisions on AI regulation, from the perspective of AI agents (and predicting how they would behave if they are given access to AI governance decisions as suggested for other industries [[55](https://arxiv.org/html/2504.08640v1#bib.bib55)]). On the other hand, they allow to better interpret LLM responses under the lenses of a well-established theory, thus advancing our capabilities to advance hypotheses about their inner functioning and promoting the development of complex-systems models for AI interpretability.

About the question Do LLM trust AI regulation?, our study provides several key takeaways.

Overall, AI-users place their trust upon developers and regulators depending on their behaviour and, potentially, on their personality (despite the latter seems to play a minor role). Then, trust depends radically on the used LLM: for GPT-based agents, conditional trust promotes overall trust, while Mistral agents experience the exact reverse situation in case of one-shot games. Repeated games make the LLMs more aligned, in that they predict that users would have mixed or relatively high trust if not conditioned by regulators’ reputation, but would not trust in case of CT. Recalling that LLMs likely mix payoff-based games with statistical outcomes deriving from their training upon real data, this may suggest that regulators have relatively low reputations on the data sources, and thus LLM agents tend to trust them less. If the risk of unsafe AI development is significant, regulatory authorities should thus show high dependability to promote trust in users.

When the cost of regulation is low, and regulators tend to regulate more, AI agents suggest that developers would tend to comply more, but may defect otherwise. Instead, regulators are suggested to have the tendency of defecting, unless properly incentivised. Regulatory bodies should thus guarantee manageable regulatory costs and have a high capacity to identify non-compliant, in order to consistently enforce safety measures.

In general, however, the results are less clear-cut than those obtained by pure game theory, but present more nuances, potentially associated with the intrinsic randomness of LLMs, as well as with the presence of biases in the data that may balance payoff-based decisions. These results complement previous calls to urgently develop actions towards AI safety and trustworthiness, and to allocate the necessary resources to monitoring bodies [[56](https://arxiv.org/html/2504.08640v1#bib.bib56), [57](https://arxiv.org/html/2504.08640v1#bib.bib57)]. Also, they suggest the need to include ethical and safety considerations in the governance discourse to enable trustworthy and human-centric AI that can promote trust among users, and warn against attempts to automatise the governance processes, especially for AI development and regulation.

Then, we observe that LLMs are not completely aligned with theoretical game results. This can derive from interferences from training data, from the challenges that LLMs encounter when performing mathematical modelling while primarily working with statistical associations [[58](https://arxiv.org/html/2504.08640v1#bib.bib58)], or by their different sensitivity to elements of the payoff matrix. Nonetheless, this observation opens exciting avenues: identifying the best LLMs to embed elements of empirical data may elicit game studies that also reflect real-world situations and possibly improve predictions. However, this endeavour may be tackled very carefully, to avoid spurious results deriving from the black box nature of LLMs. In fact, the panels in Fig. [7](https://arxiv.org/html/2504.08640v1#S3.F7 "Figure 7 ‣ III.3 Adding personality traits ‣ III Results ‣ Do LLMs trust AI regulation? Emerging behaviour of game-theoretic LLM agents") follow closely the corresponding panels of Fig. [4](https://arxiv.org/html/2504.08640v1#S3.F4 "Figure 4 ‣ III.2 Repeated games ‣ III Results ‣ Do LLMs trust AI regulation? Emerging behaviour of game-theoretic LLM agents"); instead, only the one-shot scenario for GPT-4o (Fig. [2](https://arxiv.org/html/2504.08640v1#S3.F2 "Figure 2 ‣ III.1 One-shot games with and without conditional trust ‣ III Results ‣ Do LLMs trust AI regulation? Emerging behaviour of game-theoretic LLM agents")) yields conditional trust as predicted by game theory. This observation can be interpreted under two hypothesis, whose verification will support the development of future studies: either LLMs are more biased by training data, and have the tendency to capture polarization and mistrust in institutions and developers, or they effectively embed more nuances that game-theoretic models, which would thus constitute best-case scenarios. In both cases, merging game theory and LLM is suggested as a powerful avenue to improve predictions about strategic behaviours.

Finally, this study uncovers a methodological caveat for game theory scholars who approach LLM-based simulations, that is, the selection of one LLM or another has a profound impact in the results, similarly to having different samples of populations to perform human experiments [[59](https://arxiv.org/html/2504.08640v1#bib.bib59)]. To ensure reproducibility and reliable predictions, additional tests on the behaviour of LLMs, and improving their interpretability and selection guidelines, are strongly recommended to blend the best of both disciplines and unlock new research avenues with profound social impact and immediate applications for the development of strategic agents in social, governance and economical ecosystems.

### IV.1 Limitations and avenues for future research

Our model embeds essential mechanisms for strategic decision-making and, thanks to FAIRGAME, ensures the reproducibility of the results. However, several limitations remain, that can promote future research and more refined insights. First, we considered mean-field behaviours for users, developers and regulators – and even mean-field personalities. In reality, users are segmented into market niches that choose which AI system they want to use, and companies may choose to relocate to avoid especially burdensome regulation. On the other hand, compliance with AI safety regulations may become a value proposition for companies, whose cost would be drastically reduced thanks to the competitive advantage gained. Future research could address these limitations by incorporating networks or heterogeneous populations, or partner selection between populations, and potentially considering non-linear cost structures. Moreover, except for the conditional trust argument, we do not include feedback loops between the perception of all agents; state-dependent payoff weights may address this point.

Another area for future developments is to model more explicitly the competition between different regulatory agencies, often racing for resources and group selection [[60](https://arxiv.org/html/2504.08640v1#bib.bib60), [61](https://arxiv.org/html/2504.08640v1#bib.bib61)]. Network-based or agent-based approaches may shed light onto their effects. Similarly, different developers are in fierce competition with one another and, as the market currently stands, pursuing the frontier of AI prowess has higher priority than pursuing AI safety research agendas [[27](https://arxiv.org/html/2504.08640v1#bib.bib27), [29](https://arxiv.org/html/2504.08640v1#bib.bib29)]. However, new market segments are opening, also under the pressure of regulatory bodies, and diversification in the AI products may also include higher attention for safety and transparency (at least, as narratives) as in the case of the startup Anthropic. As suggested earlier, including market competition may enrich the insights.

Moreover, we have simplified the flow of information and regulation across agents. Usually, media and academia assume the role of conveying and interpreting information about sentiment and trust across the actors involved. Similarly, the developers’ job is usually filtered to users through marketing or other vendors, thereby shadowing the hidden content of many AI systems. Regulatory bodies also often rely on agencies and accountants to survey and report. Future studies may explicitly consider these mediating effects by adding a population of multiple LLM agents, assuming each role.

We also comment on the LLMs themselves. Testing the capabilities of AI agents to interpret leading roles in strategic games is crucial to prepare for their use in different applications, and may shed light onto non-linearities and complexities that are necessarily overlooked by simpler modelling approaches. However, the black-box nature of LLMs require careful evaluation and interpretation of the results. As studies to improve their interpretability proceed [[62](https://arxiv.org/html/2504.08640v1#bib.bib62), [63](https://arxiv.org/html/2504.08640v1#bib.bib63)], future research will dig deeper into the determinants of emerging behaviours by AI agents playing games. In this work, we have provided interpretations based on knowledge of LLM training and functioning, but they should be considered hypothesis to be tested with additional tools. Future research should test the predictions of our model and prove evidence of strategic interactions between users, developers, and regulators in the AI domain. As discussed earlier, the cross-talk between LLM research and formal disciplines such as game theory have the potential to uncover hidden biases and stimulate hypotheses. Developing a new LLM-oriented game-theoretic framework, embedding statistics and optimization problems to explain and predict emerging strategic behaviours by AI agents, may further propel this area of research.

In general, despite its modelling limitations, our simple scenario is useful to think about which assumptions should policymakers make, to promote adoption of safely developed AI. Crucially, we have investigated what game-based AI systems would suggest about such assumptions, challenging their trust on the behaviours and strategic decisions of the main actors of the AI landscape. This inception may have value in stimulating reasoning and predictions, as well as to inform strategic decision-making based on complex models.

## Acknowledgement

This work was produced during the workshop ”AI Governance Modelling”, funded through the generous support from the Future of Life institute (T.A.H).
T.A.H. and Z.S. are supported by EPSRC (grant EP/Y00857X/1). M.H.D and N.B. are supported by EPSRC (grant EP/Y008561/1) and a Royal International Exchange Grant IES-R3-223047.
E.F.D. is supported by an F.W.O. Senior Postdoctoral Grant (12A7825N),
A.M.F. and H.C.F. were supported by INESC-ID and the project CRAI C645008882-00000055/510852254 (IAPMEI/PRR). D.P is supported by the European Union through the ERC INSPIRE grant (project number 101076926); views and opinions expressed are however those of the authors only and do not necessarily reflect those of the European Union, the European Research Council Executive Agency or the European Council.

## References

- [1]

  Y. Bengio, G. Hinton, A. Yao, D. Song, P. Abbeel *et al.*, “Managing extreme AI risks amid rapid progress,” *Science*, vol. 384, no. 6698, pp. 842–845, May 2024. [Online]. Available: <https://www.science.org/doi/abs/10.1126/science.adn0117>
- [2]

  L. Floridi, J. Cowls, M. Beltrametti, R. Chatila, P. Chazerand, V. Dignum, C. Luetge, R. Madelin, U. Pagallo, F. Rossi *et al.*, “Ai4people—an ethical framework for a good ai society: opportunities, risks, principles, and recommendations,” *Minds and machines*, vol. 28, pp. 689–707, 2018.
- [3]

  T. Baker, “The Executive Order on Safe, Secure, and Trustworthy AI: Decoding Biden’s AI Policy Roadmap,” Nov. 2023.
- [4]

  G. Finocchiaro, “The regulation of artificial intelligence,” *AI & SOCIETY*, vol. 39, no. 4, pp. 1961–1968, 2024.
- [5]

  L. Hammond, A. Chan, J. Clifton, J. Hoelscher-Obermaier, A. Khan, E. McLean, C. Smith, W. Barfuss, J. Foerster, T. Gavenčiak, T. A. Han, E. Hughes, V. Kovařík, J. Kulveit, J. Z. Leibo, C. Oesterheld, C. S. de Witt, N. Shah, M. Wellman, P. Bova, T. Cimpeanu, C. Ezell, Q. Feuillade-Montixi, M. Franklin, E. Kran, I. Krawczuk, M. Lamparth, N. Lauffer, A. Meinke, S. Motwani, A. Reuel, V. Conitzer, M. Dennis, I. Gabriel, A. Gleave, G. Hadfield, N. Haghtalab, A. Kasirzadeh, S. Krier, K. Larson, J. Lehman, D. C. Parkes, G. Piliouras, and I. Rahwan, “Multi-agent risks from advanced ai,” 2025. [Online]. Available: <https://arxiv.org/abs/2502.14143>
- [6]

  Y. Bengio, S. Mindermann, D. Privitera, T. Besiroglu, R. Bommasani, S. Casper, Y. Choi, P. Fox, B. Garfinkel, D. Goldfarb *et al.*, “International ai safety report,” *arXiv preprint arXiv:2501.17805*, 2025.
- [7]

  S. T. Powers, O. Linnyk, M. Guckert, J. Hannig, J. Pitt, N. Urquhart, A. Ekárt, N. Gumpfer, T. A. Han, P. R. Lewis *et al.*, “The stuff we swim in: regulation alone will not lead to justifiable trust in ai,” *IEEE Technology and Society Magazine*, vol. 42, no. 4, pp. 95–106, 2024.
- [8]

  J. Laux, S. Wachter *et al.*, “Trustworthy artificial intelligence and the European Union AI act: On the conflation of trustworthiness and acceptability of risk,” *Regulation & Governance*, vol. 18, no. 1, pp. 3–32, 2024.
- [9]

  C. Siegmann and M. Anderljung, “The Brussels Effect and Artificial Intelligence,” Oct. 2022.
- [10]

  J. Tallberg, E. Erman *et al.*, “The global governance of artificial intelligence: Next steps for empirical and normative research,” *International Studies Review*, vol. 25, no. 3, p. viad040, 2023, private vs public regulation.
- [11]

  J. Clark and G. K. Hadfield, “Regulatory Markets for AI Safety,” *arXiv*, Dec. 2019.
- [12]

  M. Anderljung, J. Barnhart *et al.*, “Frontier AI Regulation: Managing Emerging Risks to Public Safety,” Jul. 2023.
- [13]

  R. Clarke, “Regulatory alternatives for ai,” *Computer Law & Security Review*, vol. 35, no. 4, pp. 398–409, 2019.
- [14]

  A. Dafoe, “AI Governance: Overview and Theoretical Lenses,” in *The Oxford Handbook of AI Governance*, J. B. Bullock, Y.-C. Chen, J. Himmelreich, V. M. Hudson, A. Korinek, M. M. Young, and B. Zhang, Eds. Oxford University Press, 2023, p. 0.
- [15]

  G. K. Hadfield and J. Clark, “Regulatory Markets: The Future of AI Governance,” Apr. 2023.
- [16]

  E. Zaidan and I. A. Ibrahim, “Ai governance in a complex and rapidly changing regulatory landscape: A global perspective,” *Humanities and Social Sciences Communications*, vol. 11, no. 1, pp. 1–18, 2024.
- [17]

  Z. Alalawi, P. Bova, T. Cimpeanu, A. Di Stefano, M. H. Duong, E. F. Domingos, T. A. Han, M. Krellner, B. Ogbo, S. T. Powers *et al.*, “Trust ai regulation? discerning users are vital to build trust and effective ai regulation,” *arXiv preprint arXiv:2403.09510*, 2024.
- [18]

  D. Kondor, V. Hafez, S. Shankar, R. Wazir, and F. Karimi, “Complex systems perspective in assessing risks in artificial intelligence,” *Philosophical Transactions A*, vol. 382, no. 2285, p. 20240109, 2024.
- [19]

  K. J. D. Chan, G. Papyshev, and M. Yarime, “Balancing the tradeoff between regulation and innovation for artificial intelligence: An analysis of top-down command and control and bottom-up self-regulatory approaches,” *Technology in Society*, vol. 79, p. 102747, 2024.
- [20]

  P. Bova, A. Di Stefano, and T. A. Han, “Both eyes open: Vigilant incentives help auditors improve ai safety,” *Journal of Physics: Complexity*, vol. 5, no. 2, p. 025009, 2024.
- [21]

  T. A. Han, L. M. Pereira *et al.*, “ To Regulate or Not: A Social Dynamics Analysis of an Idealised AI Race ,” *Journal of Artificial Intelligence Research*, vol. 69, pp. 881–921, Nov. 2020.
- [22]

  E. Commission, “Artificial Intelligence and the future of work,” https://europa.eu/eurobarometer/surveys/detail/3222, 2025.
- [23]

  IPSOS, “The Ipsos AI Monitor 2024: Changing attitudes and feelings about AI and the future it will bring,” https://www.ipsos.com/en-uk/ipsos-ai-monitor-2024-changing-attitudes-and-feelings-about-ai-and-future-it-will-bring, 2024.
- [24]

  T. A. Han, C. Perret, and S. T. Powers, “When to (or not to) trust intelligent machines: Insights from an evolutionary game theory analysis of trust in repeated games,” *Cognitive Systems Research*, vol. 68, pp. 111–124, 2021.
- [25]

  A. Buscemi and D. Proverbio, “Roguegpt: dis-ethical tuning transforms chatgpt4 into a rogue ai in 158 words,” *arXiv preprint arXiv:2407.15009*, 2024.
- [26]

  P. Andras, L. Esterle, M. Guckert, T. A. Han, P. R. Lewis, K. Milanovic, T. Payne, C. Perret, J. Pitt, S. T. Powers *et al.*, “Trusting intelligent machines: Deepening trust within socio-technical systems,” *IEEE Technology and Society Magazine*, vol. 37, no. 4, pp. 76–83, 2018.
- [27]

  S. Armstrong, N. Bostrom *et al.*, “ Racing to the Precipice: A Model of Artificial Intelligence Development ,” *Ai & Society*, vol. 31, no. 2, pp. 201–206, May 2016.
- [28]

  A. Askell, M. Brundage *et al.*, “The Role of Cooperation in Responsible AI Development,” *arXiv*, Jul. 2019.
- [29]

  B. Cottier, T. Besiroglu *et al.*, “Who Is Leading in AI? An Analysis of Industry AI Research,” 2024.
- [30]

  P. Cihon, M. J. Kleinaltenkamp *et al.*, “ AI Certification: Advancing Ethical Practice by Reducing Information Asymmetries ,” *IEEE Transactions on Technology and Society*, vol. 2, no. 4, pp. 200–209, Dec. 2021.
- [31]

  D. C. North, *Institutions, institutional change and economic performance*. Cambridge university press, 1990.
- [32]

  J. Hofbauer and K. Sigmund, *Evolutionary games and population dynamics*. Cambridge university press, 1998.
- [33]

  K. Sigmund, “The calculus of selfishness,” in *The Calculus of Selfishness*. Princeton University Press, 2010.
- [34]

  J. S. Park, J. O’Brien, C. J. Cai, M. R. Morris, P. Liang, and M. S. Bernstein, “Generative agents: Interactive simulacra of human behavior,” in *Proceedings of the 36th annual acm symposium on user interface software and technology*, 2023, pp. 1–22.
- [35]

  C. A. Bail, “Can generative ai improve social science?” *Proceedings of the National Academy of Sciences*, vol. 121, no. 21, p. e2314021121, 2024.
- [36]

  W. X. Zhao, K. Zhou, J. Li, T. Tang, X. Wang, Y. Hou, Y. Min, B. Zhang, J. Zhang, Z. Dong *et al.*, “A survey of large language models,” *arXiv preprint arXiv:2303.18223*, vol. 1, no. 2, 2023.
- [37]

  A. Buscemi and D. Proverbio, “Large language models’ detection of political orientation in newspapers,” *arXiv preprint arXiv:2406.00018*, 2024.
- [38]

  ——, “Chatgpt vs gemini vs llama on multilingual sentiment analysis,” *arXiv preprint arXiv:2402.01715*, 2024.
- [39]

  N. Lee, J. Hong, and J. Thorne, “Evaluating the consistency of llm evaluators,” *arXiv preprint arXiv:2412.00543*, 2024.
- [40]

  OpenAI. (2023) Introducing chatgpt. [Online]. Available: <https://openai.com/blog/chatgpt>
- [41]

  M. AI. (2025) Au large. [Online]. Available: <https://mistral.ai/news/mistral-large>
- [42]

  Y. Lu, A. Aleta, C. Du, L. Shi, and Y. Moreno, “Llms and generative agent-based models for complex systems research,” *Physics of Life Reviews*, 2024.
- [43]

  Z. Song and T. A. Han, “On evolution of non-binding commitments,” *Physics of Life Reviews*, vol. 52, pp. 245–247, 2025.
- [44]

  P. A. Van Lange, J. Joireman, C. D. Parks, and E. Van Dijk, “The psychology of social dilemmas: A review,” *Organizational Behavior and Human Decision Processes*, vol. 120, no. 2, pp. 125–141, 2013.
- [45]

  N. Balabanova, A. Bashir, P. Bova, A. Buscemi, T. Cimpeanu, H. C. da Fonseca, A. Di Stefano, M. H. Duong, E. F. Domingos, A. Fernandes *et al.*, “Media and responsible ai governance: a game-theoretic and llm analysis,” *arXiv preprint arXiv:2503.09858*, 2025.
- [46]

  M. A. Nowak, “Five rules for the evolution of cooperation,” *science*, vol. 314, no. 5805, pp. 1560–1563, 2006.
- [47]

  S. Van Segbroeck, J. M. Pacheco, T. Lenaerts, and F. C. Santos, “Emergence of fairness in repeated group interactions,” *Physical review letters*, vol. 108, no. 15, p. 158104, 2012.
- [48]

  A. Buscemi, D. Proverbio, A. Distefano, T. Han, and P. Liò, “Fairgame: a framework for ai agents bias recognition using game theory,” *in preparation*, 2025.
- [49]

  M. A. Nowak, A. Sasaki, C. Taylor, and D. Fudenberg, “Emergence of cooperation and evolutionary stability in finite populations,” *Nature*, vol. 428, no. 6983, pp. 646–650, 2004.
- [50]

  I. Zisis, S. Di Guida, T. A. Han, G. Kirchsteiger, and T. Lenaerts, “Generosity motivated by acceptance-evolutionary analysis of an anticipation game,” *Scientific reports*, vol. 5, no. 1, p. 18076, 2015.
- [51]

  D. G. Rand, C. E. Tarnita, H. Ohtsuki, and M. A. Nowak, “Evolution of fairness in the one-shot anonymous ultimatum game,” *Proceedings of the National Academy of Sciences*, vol. 110, no. 7, pp. 2581–2586, 2013.
- [52]

  A. Vidler and T. Walsh, “Playing games with large language models: Randomness and strategy,” *arXiv preprint arXiv:2503.02582*, 2025.
- [53]

  Y. Deng, Z. Li, S. Mahadevan, and Z. Song, “Zero-th order algorithm for softmax attention optimization,” in *2024 IEEE International Conference on Big Data (BigData)*. IEEE, 2024, pp. 24–33.
- [54]

  Z. Alalawi, T. A. Han, Y. Zeng, and A. Elragig, “Pathways to good healthcare services and patient satisfaction: An evolutionary game theoretical approach,” in *Artificial Life Conference Proceedings*. MIT Press One Rogers Street, Cambridge, MA 02142-1209, USA journals-info …, 2019, pp. 135–142.
- [55]

  H. Chen and J. Hou, “Intelligent data governance: building an enterprise data management system using kg and llm,” in *Proceedings of the 2024 International Conference on Cloud Computing and Big Data*, 2024, pp. 266–271.
- [56]

  M. Kinniment, L. J. K. Sato, H. Du, B. Goodrich, M. Hasin *et al.*, “Evaluating Language-Model Agents on Realistic Autonomous Tasks,” Jan. 2024. [Online]. Available: <http://arxiv.org/abs/2312.11671>
- [57]

  GOV.UK, “Introducing the AI Safety Institute,” https://www.gov.uk/government/publications/ai-safety-institute-overview/introducing-the-ai-safety-institute, 2023.
- [58]

  J. Ahn, R. Verma, R. Lou, D. Liu, R. Zhang, and W. Yin, “Large language models for mathematical reasoning: Progresses and challenges,” *arXiv preprint arXiv:2402.00157*, 2024.
- [59]

  E. H. Hagen and P. Hammerstein, “Game theory and human evolution: A critique of some recent interpretations of experimental games,” *Theoretical population biology*, vol. 69, no. 3, pp. 339–348, 2006.
- [60]

  P. Richerson, R. Baldini, A. V. Bell, K. Demps, K. Frost, V. Hillis, S. Mathew, E. K. Newton, N. Naar, L. Newson *et al.*, “Cultural group selection plays an essential role in explaining human cooperation: A sketch of the evidence,” *Behavioral and Brain Sciences*, vol. 39, p. e30, 2016.
- [61]

  J. C. van den Bergh and J. M. Gowdy, “A group selection perspective on economic behavior, institutions and organizations,” *Journal of Economic Behavior & Organization*, vol. 72, no. 1, pp. 1–20, 2009.
- [62]

  R. Ali, F. Caso, C. Irwin, and P. Liò, “Entropy-lens: The information signature of transformer computations,” *arXiv preprint arXiv:2502.16570*, 2025.
- [63]

  B. El, D. Choudhury, P. Liò, and C. K. Joshi, “Towards mechanistic interpretability of graph transformers via attention graphs,” *arXiv preprint arXiv:2502.12352*, 2025.
