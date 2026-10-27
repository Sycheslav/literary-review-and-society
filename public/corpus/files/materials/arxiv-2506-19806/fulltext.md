---
id: arxiv-2506-19806-text
type: material
title: LLM-Based Social Simulations Require a Boundary
work_id: arxiv-2506-19806
source_url: https://arxiv.org/html/2506.19806v3
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять
  с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.
language: original
sha256_text: 81695911b8a9ec6d3be8fc8688ed9403b0dc7f78e6821ff6c1c1370f263f903f
---

> Источник: [https://arxiv.org/html/2506.19806v3](https://arxiv.org/html/2506.19806v3). Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.

# LLM-Based Social Simulations Require a Boundary

Zengqing Wu
Affiliation: University of Osaka
Correspondence to: [zengqing.wu@ist.osaka-u.ac.jp](mailto:zengqing.wu@ist.osaka-u.ac.jp)
  
Run Peng
Affiliation: University of Michigan
  
Takayuki Ito
Affiliation: Kyoto University
  
Makoto Onizuka
Affiliation: University of Osaka
  
Chuan Xiao
Affiliation: University of Osaka
Affiliation: Nagoya University
Correspondence to: [chuanx@ist.osaka-u.ac.jp](mailto:chuanx@ist.osaka-u.ac.jp)

###### Abstract

This position paper argues that LLM-based social simulations require clear boundaries to make meaningful contributions to social science. While Large Language Models (LLMs) offer promising capabilities for simulating human behavior, their tendency to produce homogeneous outputs, acting as an “average persona”, fundamentally limits their ability to capture the behavioral diversity essential for complex social dynamics. We examine why heterogeneity matters for social simulations and how current LLMs fall short, analyzing the relationship between mean alignment and variance in LLM-generated behaviors. Through a systematic review of representative studies, we find that validation practices often fail to match the heterogeneity requirements of research questions: while most papers include ground truth comparisons, fewer than half explicitly assess behavioral variance, and most that do report lower variance than human populations. We propose that researchers should: (1) match validation depth to the heterogeneity demands of their research questions, (2) explicitly report variance alongside mean alignment, and (3) constrain claims to collective-level qualitative patterns when variance is insufficient. Rather than dismissing LLM-based simulations, we advocate for a boundary-aware approach that ensures these methods contribute genuine insights to social science.

###### Keywords:

social simulation, agent-based modeling, agent heterogeneity, behavioral alignment

## 1 Introduction

Social simulation is a modeling tool that employs computational methods to understand social phenomena. Computational methods, particularly those modeling interactions between individuals, demonstrate advantages in capturing the complex and nonlinear behaviors typically inherent in social phenomena ([Eidelson, 1997](https://arxiv.org/html/2506.19806v3#bib.bib14); [Remondino et al., 2010](https://arxiv.org/html/2506.19806v3#bib.bib15); [San Miguel et al., 2012](https://arxiv.org/html/2506.19806v3#bib.bib13)). Among these, Agent-Based Modeling (ABM) is a widely used technique in this area, simulating how individual behaviors and local rules give rise to macro-level patterns ([Bonabeau, 2002](https://arxiv.org/html/2506.19806v3#bib.bib8); [Epstein, 1999](https://arxiv.org/html/2506.19806v3#bib.bib9); [Schelling, 1971](https://arxiv.org/html/2506.19806v3#bib.bib10)). ABM offers a bottom-up modeling approach, supports heterogeneity among agents, allows for the exploration of emergent phenomena, and provides researchers with interpretable mechanisms linking micro- and macro-level behaviors ([Jackson et al., 2017](https://arxiv.org/html/2506.19806v3#bib.bib96); [Page, 2012](https://arxiv.org/html/2506.19806v3#bib.bib97); [Reeves et al., 2022](https://arxiv.org/html/2506.19806v3#bib.bib24)). Meanwhile, it is controversial due to its reliance on simplification ([Edmonds and Moss, 2004](https://arxiv.org/html/2506.19806v3#bib.bib25)), limited adaptability ([Wu et al., 2023](https://arxiv.org/html/2506.19806v3#bib.bib23)), sensitivity to initial conditions ([Manzo and Matthews, 2014](https://arxiv.org/html/2506.19806v3#bib.bib115)), and challenges in representing subjective or human-like behaviors ([Ma et al., 2024](https://arxiv.org/html/2506.19806v3#bib.bib38); [Puig et al., 2021](https://arxiv.org/html/2506.19806v3#bib.bib116)), diminishing the contribution of social simulation methods to social science ([Reeves et al., 2022](https://arxiv.org/html/2506.19806v3#bib.bib24)).

Recently, LLM agents and social simulations have attracted growing attention. Existing studies have applied LLM agents to domains such as economics ([Han et al., 2023](https://arxiv.org/html/2506.19806v3#bib.bib29); [Li et al., 2024](https://arxiv.org/html/2506.19806v3#bib.bib28)), education ([Zhang et al., 2024c](https://arxiv.org/html/2506.19806v3#bib.bib31)), game theory ([Sreedhar and Chilton, 2024](https://arxiv.org/html/2506.19806v3#bib.bib30)), and social networks ([Wang et al., 2023](https://arxiv.org/html/2506.19806v3#bib.bib32); [Yang et al., 2024c](https://arxiv.org/html/2506.19806v3#bib.bib33); [Zhang et al., 2025a](https://arxiv.org/html/2506.19806v3#bib.bib34)), with claimed advantages like handling natural language, enabling flexible behaviors, and showing human-like reasoning. However, concerns have also been raised: LLMs may carry social and cognitive biases ([Mohammadi, 2024](https://arxiv.org/html/2506.19806v3#bib.bib4); [Navigli et al., 2023](https://arxiv.org/html/2506.19806v3#bib.bib2)), lack behavioral diversity ([Ma et al., 2025](https://arxiv.org/html/2506.19806v3#bib.bib3)), and are hard to validate or explain ([Larooij and Törnberg, 2025](https://arxiv.org/html/2506.19806v3#bib.bib1); [Ma et al., 2024](https://arxiv.org/html/2506.19806v3#bib.bib38)). Whether or not using LLMs is a good protocol for social simulations remains an open question—or may not even be the central question to ask. Many existing studies focus primarily on the simulation itself, while we argue that this narrow focus limits the method’s contribution to advancing social science. Before moving forward with more LLM-based social simulations, two critical questions remain:

1. 1.

   How can LLM-based social simulations benefit studies of social science?
2. 2.

   Can we draw a line to identify what types of problems are suitable for LLM-based simulations to solve?

Figure 1: Overview of our claims. We value the goal of social simulations as a means to advance social science, e.g. by explaining social patterns, instead of focusing on “perfect” replication of real-world societies. We further examine possible simulation scenarios (e.g., aligned or misaligned means and variances) and advocate for a stronger emphasis on qualitative analysis of collective patterns.

Throughout this paper, we use “boundary” to refer to the *methodological scope conditions* of LLM-based social simulations: the limits of what research claims can be reliably supported given current LLM capabilities, particularly in generating behaviorally diverse agent populations. This usage is distinct from other senses of “boundary”, such as decision boundaries or safety guardrails, and instead aligns with how validity boundaries are discussed in the social simulation literature ([Edmonds et al., 2019](https://arxiv.org/html/2506.19806v3#bib.bib127)).

In this paper, we take the viewpoint that social simulation benefits social science primarily through uncovering social patterns and generating hypotheses. Achieving this requires simulations with sufficient fidelity, particularly in capturing behavioral heterogeneity. We examine how alignment and heterogeneity shape social dynamics, and how the limited behavioral diversity of current LLM agents, i.e., their tendency to act as an “average persona,” constrains their effectiveness in representing complex, multi-agent societies ([Ma et al., 2025](https://arxiv.org/html/2506.19806v3#bib.bib3); [Shrestha et al., 2024](https://arxiv.org/html/2506.19806v3#bib.bib45)). We analyze common issues in LLM-based simulations through a variance-mean framework (Figure [1](https://arxiv.org/html/2506.19806v3#S1.F1 "Figure 1 ‣ 1 Introduction ‣ LLM-Based Social Simulations Require a Boundary")) and systematically review current studies to assess current validation practices. We also situate our work within the broader debate by discussing alternative perspectives from optimistic views of LLMs as transformative research tools to skeptical critiques of their fundamental validity. Our central position is that LLM-based social simulations require clear boundaries, in terms of validation requirements and claim levels, to make meaningful contributions to social science. We argue this as a general checklist for evaluating the use of LLMs in social simulations, rather than a how-to guide for conducting such studies.

Our Contributions. This work makes four key contributions. (1) We systematically analyze the boundary problems of LLM-based social simulations, which are the inherent limitations that fundamentally determine their reliability for social pattern discovery, focusing on the “average persona” phenomenon where LLMs exhibit insufficient behavioral variance. (2) We discuss simulation fidelity through the concept of agent heterogeneity, indicating why LLMs’ tendency to converge towards common patterns fundamentally limits their capacity to simulate complex social dynamics. (3) We conduct a systematic review of 21 recent LLM-based social simulation studies, revealing a gap between the heterogeneity demands of research questions and the depth of validation conducted. While most papers check mean alignment, fewer assess variance, and when they do, LLM behaviors typically show lower diversity than human populations. (4) We provide heuristic boundaries and recommendations for when and how LLM-based simulations can make real contributions to social science research, emphasizing the need to match validation depth to research question requirements. We expect that these boundaries would help bridge the gap between AI and social science communities and contribute to more rigorous findings in social science research.

## 2 LLM-Based Social Simulations

### 2.1 Objectives of Social Simulations

The primary objective of social simulations is not to *replicate* reality in fine detail, but to serve as a research tool for explaining social patterns, constructing theories, and providing interpretable foundations for hypothesis generation ([Axelrod, 1997](https://arxiv.org/html/2506.19806v3#bib.bib126); [Silverman and Bryden, 2007](https://arxiv.org/html/2506.19806v3#bib.bib100); [Silverman and Bryden, 2018](https://arxiv.org/html/2506.19806v3#bib.bib98)).
A clear modeling objective is essential for guiding methodological choices. When objectives are poorly defined, effective validation becomes difficult, particularly when testing alignment with reality and ensuring reproducibility ([Arnold, 2014](https://arxiv.org/html/2506.19806v3#bib.bib128); [Axelrod, 1997](https://arxiv.org/html/2506.19806v3#bib.bib126); [Edmonds and Hales, 2003](https://arxiv.org/html/2506.19806v3#bib.bib129); [Edmonds et al., 2019](https://arxiv.org/html/2506.19806v3#bib.bib127)).
To clarify the boundaries of social simulation, we examine two objectives frequently declared in LLM-based simulations: replication and prediction. We argue that while both have their place, neither should constitute the primary goal of social simulation.

Replication-oriented work is common in LLM-based simulation literature, while studies achieving novel, valuable social science discoveries through this approach remain limited. Critics note that replication merely repeats known behaviors without revealing new social dynamics or mechanisms ([Cheng et al., 2023](https://arxiv.org/html/2506.19806v3#bib.bib73)), which contradicts social simulation’s core purpose. Schelling’s model exemplifies the alternative ([Schelling, 1971](https://arxiv.org/html/2506.19806v3#bib.bib10)): through simple, verifiable interaction rules, it demonstrates universal mechanisms of community segregation without replicating any specific community, revealing broadly applicable social patterns. This suggests that *reproducing* real-world social patterns through simple rules requires no precise *replication* to provide explanatory insights and causal understanding. Furthermore, pursuing exact replication increases parameters and artificial assumptions, risking data overfitting and reducing model verifiability ([Larooij and Törnberg, 2025](https://arxiv.org/html/2506.19806v3#bib.bib1); [Silverman and Bryden, 2018](https://arxiv.org/html/2506.19806v3#bib.bib98)). Computational constraints and complexity of sensitivity analysis further obstruct precise replication ([Borgonovo et al., 2022](https://arxiv.org/html/2506.19806v3#bib.bib134); [Surve et al., 2023](https://arxiv.org/html/2506.19806v3#bib.bib133)). Hence, social simulations should focus on reproducing and validating key behavioral patterns consistent with real social phenomena ([Casti, 1996](https://arxiv.org/html/2506.19806v3#bib.bib99); [Edmonds et al., 2019](https://arxiv.org/html/2506.19806v3#bib.bib127); [Silverman and Bryden, 2018](https://arxiv.org/html/2506.19806v3#bib.bib98)).

Another misconception involves emphasizing *predictive* capabilities through detailed replication performance. Evidence shows limited performance in predicting social dynamics without oracle information, and few effective methods for prediction improvement have been discovered ([Gui and Toubia, 2023](https://arxiv.org/html/2506.19806v3#bib.bib137); [Yang et al., 2024a](https://arxiv.org/html/2506.19806v3#bib.bib102); [Ziems et al., 2024](https://arxiv.org/html/2506.19806v3#bib.bib75)). A fundamental concern is that social simulation predictions often constitute mere retrodictions of existing patterns, lacking effective generalization to future scenarios ([Edmonds, 2023](https://arxiv.org/html/2506.19806v3#bib.bib106); [Polhill et al., 2021](https://arxiv.org/html/2506.19806v3#bib.bib101)). For instance, using retrodictive tests to claim predictive capabilities ([Wang et al., 2025e](https://arxiv.org/html/2506.19806v3#bib.bib138)) may introduce data leakage, as retrospective scenarios could already be contained within the LLM’s training data. Such bias is hard to eliminate because LLMs could infer scenarios and implicitly use their knowledge to make “predictions,” even when identifying information is removed from prompts ([Nguyen et al., 2025a](https://arxiv.org/html/2506.19806v3#bib.bib175); [Zhou et al., 2025](https://arxiv.org/html/2506.19806v3#bib.bib168)).
Many simulation works’ predictive claims thus exceed actual model capabilities ([Ball et al., 2024](https://arxiv.org/html/2506.19806v3#bib.bib135); [Cao et al., 2025](https://arxiv.org/html/2506.19806v3#bib.bib104); [Chuang et al., 2024b](https://arxiv.org/html/2506.19806v3#bib.bib131); [Orlikowski et al., 2025](https://arxiv.org/html/2506.19806v3#bib.bib132); [von der Heyde et al., 2024](https://arxiv.org/html/2506.19806v3#bib.bib103); [Wang et al., 2025c](https://arxiv.org/html/2506.19806v3#bib.bib130); [Yang et al., 2024a](https://arxiv.org/html/2506.19806v3#bib.bib102); [Zhang et al., 2025a](https://arxiv.org/html/2506.19806v3#bib.bib34)), and few studies establish reliable validation methods ([Chatterjee et al., 2024](https://arxiv.org/html/2506.19806v3#bib.bib136)).
Moreover, some works claim that simulations reflect real social dynamics ([Yang et al., 2024c](https://arxiv.org/html/2506.19806v3#bib.bib33); [Zhang et al., 2025a](https://arxiv.org/html/2506.19806v3#bib.bib34)) based on LLMs’ explanation of their own decision-making process, which raises endogeneity issues. While creating comprehensive frameworks for simulating social phenomena at unprecedented scales is valuable, researchers need to be cautious with their objectives and findings.

In sum, social simulation’s limitations stem from both LLMs’ inherent capabilities and simulation framework design issues ([Wang et al., 2025d](https://arxiv.org/html/2506.19806v3#bib.bib86)). We advocate for greater focus on simulation alignment with key social patterns and rigorous validation, rather than treating replication or prediction as core objectives as the foundation of this paper.

### 2.2 Challenges that LLM-Based Simulations Face

We categorize the challenges that LLM-based social simulations are now facing into two areas: (1) usage problems, which pertain to how researchers apply LLMs and whether these applications align with effective simulation practices; and (2) boundary problems, which relate to the inherent capabilities and limitations of LLMs themselves. This paper focuses primarily on the latter. The rationale behind this distinction is to identify the root cause of problems in LLM-based social simulations, specifically, whether they arise from experimental design flaws that can be rectified, or from fundamental issues related to the underlying nature of LLMs.

#### Usage Problems

Usage problems arise from simulation design choices. A common issue is the tendency to aim for perfect replication of reality, which can undermine meaningful social pattern discovery ([Edmonds, 2023](https://arxiv.org/html/2506.19806v3#bib.bib106); [Hassan et al., 2013](https://arxiv.org/html/2506.19806v3#bib.bib105)). Other problems include imprecise prompt engineering leading to distortion ([Mannekote et al., 2025](https://arxiv.org/html/2506.19806v3#bib.bib108); [Ronanki et al., 2024](https://arxiv.org/html/2506.19806v3#bib.bib107)), overly large action spaces resulting in invalid behaviors ([Guo et al., 2024](https://arxiv.org/html/2506.19806v3#bib.bib109); [Liu et al., 2024b](https://arxiv.org/html/2506.19806v3#bib.bib110); [Liu et al., 2024d](https://arxiv.org/html/2506.19806v3#bib.bib112); [Yim et al., 2024](https://arxiv.org/html/2506.19806v3#bib.bib111)), and frameworks introducing excessive researcher assumptions ([Silverman and Bryden, 2007](https://arxiv.org/html/2506.19806v3#bib.bib100)). While these usage issues significantly impact simulation effectiveness, they could in principle be mitigated by better practices, and are not the primary focus of this paper.

#### Boundary Problems

Boundary problems represent the inherent limitations of current LLM technology when applied to social simulations. Clarifying these boundaries is essential for understanding where LLM-based simulations can reliably contribute to social science.

Among boundary problems, this paper focuses specifically on the alignment problem: whether simulated agents’ behaviors and collective dynamics align with real societal patterns. We prioritize alignment because it directly determines whether simulations can genuinely inform our understanding of real social phenomena, i.e., if simulated behaviors systematically diverge from human behaviors, any patterns discovered may reflect LLM artifacts rather than social dynamics.
The alignment problem is also closely tied to fundamental characteristics of LLMs, specifically their tendency towards homogeneous outputs that lack the behavioral diversity observed in human populations. In the following sections, we examine why heterogeneity matters for social simulations (Section [3](https://arxiv.org/html/2506.19806v3#S3 "3 Alignment and Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary")), how current LLMs fall short in this regard (Section [4](https://arxiv.org/html/2506.19806v3#S4 "4 LLM-Based Simulations Lack Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary")), and what this implies for the boundaries of claims that can be reliably made.

We focus on heterogeneity because it directly determines whether simulations can produce the behavioral diversity needed for complex collective dynamics, making it a prerequisite for meaningful social pattern discovery. Beyond alignment, other boundary conditions also affect simulation reliability, including temporal consistency, robustness to perturbations, interaction structure, and environment design. We discuss these additional considerations in Appendix [B](https://arxiv.org/html/2506.19806v3#A2 "Appendix B Other Potential Boundaries ‣ LLM-Based Social Simulations Require a Boundary").

## 3 Alignment and Heterogeneity

The degree of alignment between LLM-based simulations and real-world behavior is key to determining the reliability of insights drawn from social pattern discovery. This alignment can be examined at two levels: individual-level alignment, concerning whether each agent behaves in a human-like manner, and collective-level alignment, concerning whether agent interactions reproduce realistic social dynamics and emergent phenomena. Understanding the relationship between these two levels is essential before applying LLMs to social simulations.

### 3.1 From Individual to Collective Alignment

While individual-level alignment is often desirable, perfectly capturing individual behavioral patterns is not always essential for social simulations. Social phenomena emerge primarily from interactions between individuals rather than from individual behaviors alone. As [Durkheim (2023)](https://arxiv.org/html/2506.19806v3#bib.bib139) argued, collective phenomena possess properties that cannot be reduced to individual psychological states. The emergent properties of social systems cannot be fully predicted from knowledge of individual components alone ([Holland, 2000](https://arxiv.org/html/2506.19806v3#bib.bib140); [Louth, 2011](https://arxiv.org/html/2506.19806v3#bib.bib48); [Squazzoni et al., 2014](https://arxiv.org/html/2506.19806v3#bib.bib19)).

Studies in computational social science demonstrate that weak individual alignment can still produce complex collective behaviors. [Granovetter (1978)](https://arxiv.org/html/2506.19806v3#bib.bib141)’s threshold models show how simple individual decision rules can produce unpredictable collective outcomes, while [Reynolds (1987)](https://arxiv.org/html/2506.19806v3#bib.bib142)’ boids model demonstrates how complex flocking behaviors emerge from just three simple rules. An LLM-based simulation reproducing Schelling’s model demonstrated that segregated societies emerge even with simple behavior settings and a degree of individual homogeneity ([Cheng et al., 2024](https://arxiv.org/html/2506.19806v3#bib.bib49)), illustrating that collective patterns can be relatively insensitive to individual-level modeling imperfections.

However, this does not mean that individual-level characteristics are irrelevant to collective alignment. A crucial distinction must be made: individual alignment (whether each agent can exhibit human-like behavior under specific tasks) differs from heterogeneity (whether agents differ from each other). While perfect individual alignment may be unnecessary, collective alignment often depends critically on whether the population exhibits sufficient behavioral diversity ([Mou et al., 2024](https://arxiv.org/html/2506.19806v3#bib.bib35); [Lu et al., 2021](https://arxiv.org/html/2506.19806v3#bib.bib148); [Squazzoni et al., 2014](https://arxiv.org/html/2506.19806v3#bib.bib19)). Individual behaviors, through interaction, create feedback loops and emergent effects that constitute collective patterns ([Miller and Page, 2009](https://arxiv.org/html/2506.19806v3#bib.bib63)). When agents respond heterogeneously to similar situations, their interactions can produce the non-linear dynamics characteristic of real social systems; when agents respond homogeneously, collective outcomes tend to be predictable ([Mondani and Swedberg, 2022](https://arxiv.org/html/2506.19806v3#bib.bib20)).

This insight reframes the question for LLM-based simulations: the key issue is not whether individual agents “pass” as human-like, but whether the *population of agents* exhibits sufficient behavioral diversity to enable realistic collective dynamics. We therefore focus on output heterogeneity in this paper’s context, i.e., the diversity of behaviors agents actually produced through simulations, rather than input heterogeneity (the diversity of assigned personas), since the setup of diverse personas by means including prompt engineering and fine-tuning do not guarantee diverse behavioral outputs.

### 3.2 Homogeneity and Heterogeneity

#### Homogeneity and Its Limitations

Homogeneity, characterized by agents sharing similar behaviors, can in certain cases lead to emergent social patterns. As noted, Schelling’s model produces segregation even with uniform agent preferences. However, when agents are highly homogeneous in their decision-making, collective behaviors tend to converge to predictable equilibrium states that can be analytically characterized. In voter models where all agents follow identical imitation rules, the system predictably converges to consensus with mathematically derivable convergence rates ([Castellano et al., 2009](https://arxiv.org/html/2506.19806v3#bib.bib144); [Holley and Liggett, 1975](https://arxiv.org/html/2506.19806v3#bib.bib143)). Similarly, in simple contagion models with uniform transmission probabilities, spread patterns follow predictable epidemic trajectories ([Hodas and Lerman, 2014](https://arxiv.org/html/2506.19806v3#bib.bib145); [Sprague and House, 2017](https://arxiv.org/html/2506.19806v3#bib.bib146)). Due to this limited complexity, collective behaviors from homogeneous agents can often be characterized through aggregate statistical analyses without complex simulations ([Galla et al., 2006](https://arxiv.org/html/2506.19806v3#bib.bib125); [Galstyan et al., 2005](https://arxiv.org/html/2506.19806v3#bib.bib123); [Helfmann et al., 2021](https://arxiv.org/html/2506.19806v3#bib.bib124)). This raises the question: if outcomes from homogeneous agents are analytically tractable, what is the added value of simulations?

#### The Critical Role of Heterogeneity

Heterogeneity is widely recognized as a fundamental driver of complex social dynamics and emergent phenomena. Existing works consistently report that certain emergent phenomena only occur with sufficient diversity among agents ([Deter and Sayama, 2024](https://arxiv.org/html/2506.19806v3#bib.bib50); [Gao et al., 2024](https://arxiv.org/html/2506.19806v3#bib.bib51)). The importance of heterogeneity has been emphasized across computational simulations, including social network modeling ([Ojer et al., 2025](https://arxiv.org/html/2506.19806v3#bib.bib53)), epidemic intervention ([Lorig et al., 2021](https://arxiv.org/html/2506.19806v3#bib.bib54); [Reeves et al., 2022](https://arxiv.org/html/2506.19806v3#bib.bib24)), climate policy ([Mercure et al., 2016](https://arxiv.org/html/2506.19806v3#bib.bib57)), and wealth formation ([Wang et al., 2010](https://arxiv.org/html/2506.19806v3#bib.bib58)), as well as problem-solving applications such as multi-agent cooperation ([Chen et al., 2024](https://arxiv.org/html/2506.19806v3#bib.bib56)) and software development ([Hong et al., 2024](https://arxiv.org/html/2506.19806v3#bib.bib55); [Qian et al., 2024](https://arxiv.org/html/2506.19806v3#bib.bib52)).

From a complex systems perspective, when individual differences exist, interactions create feedback mechanisms that amplify these differences, producing emergent phenomena that cannot be predicted from average individual characteristics ([Miller and Page, 2009](https://arxiv.org/html/2506.19806v3#bib.bib63)). While heterogeneity enables rich interactions that generate intricate patterns ([Amin et al., 2018](https://arxiv.org/html/2506.19806v3#bib.bib59)), homogeneity tends to average out behaviors, limiting emergent complexity ([Maciejewski et al., 2014](https://arxiv.org/html/2506.19806v3#bib.bib60)). The Condorcet Paradox illustrates this: diverse preferences produce collective voting cycles that cannot be understood by averaging individual preferences ([Gehrlein, 1983](https://arxiv.org/html/2506.19806v3#bib.bib61)). Conversely, assuming perfect homogeneity (identical rationality in “Homo economicus”) leads to immediate market equilibrium with zero profits, precluding the dynamics that define real economic systems ([Grossman and Stiglitz, 1980](https://arxiv.org/html/2506.19806v3#bib.bib62)).
We also note that not all research questions require high heterogeneity; when simulations focus on equilibrium existence rather than path dynamics, or on central tendencies rather than distributional properties, requirements may be lower (Appendix [E](https://arxiv.org/html/2506.19806v3#A5 "Appendix E When Is Heterogeneity Less Critical? ‣ LLM-Based Social Simulations Require a Boundary")).

### 3.3 Implications for LLM-Based Simulations

These considerations show that neither perfect individual alignment nor homogeneous interactions alone suffice for capturing complex social dynamics. The ability of social simulations to discover novel, complex patterns depends substantially on agent heterogeneity. Whether LLM agent collectives exhibit sufficient heterogeneity therefore becomes a critical indicator of simulation validity. Here, “sufficient” means comparable to the behavioral distribution observed in real human populations, which serves as the ground truth for the phenomenon under study. Even when complete ground truth data is unavailable, researchers should compare against whatever empirical benchmarks exist to assess simulation fidelity.

If the phenomena under investigation require heterogeneity for their emergence, but LLMs produce insufficient diversity, conclusions may not reliably apply to real-world situations. The following section examines how heterogeneity is lacking in LLM-based simulations and what this implies for the boundaries of research claims.

## 4 LLM-Based Simulations Lack Heterogeneity

### 4.1 “Average Persona”: Origin of Limited Heterogeneity

As established above, sufficient heterogeneity is important for social simulations aiming to reveal complex dynamics. Current LLM agents fall short in generating such diversity. They tend to act as an “average persona,” producing responses that reflect population-typical behaviors while suppressing the variation observed in real human populations.

We analyze this limitation through two behavioral dimensions: variance (the diversity and spread of behaviors) and mean (the central tendency and its alignment with real human behaviors). This variance-mean framework helps diagnose alignment problems: variance captures whether LLMs generate sufficient behavioral diversity for complex dynamics, while mean alignment determines whether the central tendency corresponds to real human populations. When characterizing variance as “high” or “low,” we refer to comparisons against available ground truth, i.e., empirically observed human behavioral distributions for the phenomenon under study. Even when the data is limited, comparing against existing benchmarks (e.g., from human experiments or surveys) provides a basis for assessing whether LLM-generated behaviors exhibit realistic diversity.

This “average persona” phenomenon stems from training processes. Language model training maximizes conditional probability of predicting text through likelihood-driven loss functions over vast human expression data. This objective inherently rewards high-frequency, mainstream expressions and suppresses marginal ones, fostering an “average persona” that aggregates group thinking and limits distributional representativeness ([Nguyen et al., 2025b](https://arxiv.org/html/2506.19806v3#bib.bib87); [Trott, 2024](https://arxiv.org/html/2506.19806v3#bib.bib74); [Wang et al., 2025a](https://arxiv.org/html/2506.19806v3#bib.bib79)). Subgroup heterogeneity is consequently erased, causing behavior to concentrate on dominant patterns that often reflect social biases and demographic stereotypes, even when prompts attempt to elicit alternative perspectives ([Liu et al., 2024a](https://arxiv.org/html/2506.19806v3#bib.bib80); [Taubenfeld et al., 2024](https://arxiv.org/html/2506.19806v3#bib.bib78)). This results in difficulty capturing long-tail patterns ([Taubenfeld et al., 2024](https://arxiv.org/html/2506.19806v3#bib.bib78); [Wang et al., 2025a](https://arxiv.org/html/2506.19806v3#bib.bib79)). We delineate two primary cases based on variance and mean, each with distinct consequences.

### 4.2 Applicability and Claim Boundaries

#### Case 1: Low Variance, Mean Aligned

In this case, LLM agents exhibit low behavioral variance, with strategies and actions concentrated rather than displaying the diversity observed in human populations. However, their mean behavior aligns reasonably well with human averages.

Figure 2: Distribution of chosen numbers by GPT-4 (blue) vs. humans (red), adapted from KBC ([Wu et al., 2024](https://arxiv.org/html/2506.19806v3#bib.bib69)). The LLM reproduces peak values (33, 50, 66) aligning with human choices, indicating aligned mean. However, the frequency of non-peak values is markedly lower than humans, highlighting low variance.

Existing works consistently note that LLMs generate insufficient diversity and exhibit overly homogeneous behavior, often missing human randomness and error patterns ([Aher et al., 2023](https://arxiv.org/html/2506.19806v3#bib.bib72); [Anthis et al., 2025](https://arxiv.org/html/2506.19806v3#bib.bib37); [Cheng et al., 2023](https://arxiv.org/html/2506.19806v3#bib.bib73); [Lau et al., 2024](https://arxiv.org/html/2506.19806v3#bib.bib67)). In economic market simulations, while LLM agents replicate macroscopic patterns, they demonstrate significantly less behavioral variance than human participants ([del Rio-Chanona et al., 2025](https://arxiv.org/html/2506.19806v3#bib.bib68); [Han et al., 2023](https://arxiv.org/html/2506.19806v3#bib.bib29)). In the Keynesian Beauty Contest (KBC, guessing 2/3 of the average), LLM simulations reproduced peak guess values consistent with human experiments, but frequencies on non-peak values were markedly lower (Figure [2](https://arxiv.org/html/2506.19806v3#S4.F2 "Figure 2 ‣ Case 1: Low Variance, Mean Aligned ‣ 4.2 Applicability and Claim Boundaries ‣ 4 LLM-Based Simulations Lack Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary")) ([Wu et al., 2024](https://arxiv.org/html/2506.19806v3#bib.bib69)). In evacuation simulations, despite group-level differences based on personas, individual agent trajectories were surprisingly similar ([Wu et al., 2023](https://arxiv.org/html/2506.19806v3#bib.bib23)).

When collective behavioral patterns are meaningful and consistent with real-world outcomes, insufficient variance does not always undermine macroscopic simulation purposes. However, this mandates strict examination of claim boundaries at three levels as shown in Figure [1](https://arxiv.org/html/2506.19806v3#S1.F1 "Figure 1 ‣ 1 Introduction ‣ LLM-Based Social Simulations Require a Boundary"). Researchers can focus on collective behavior and qualitative patterns, as these may be well-reflected despite low individual variance. Conversely, analyzing collective behavior quantitatively requires greater caution. As illustrated in Figure [2](https://arxiv.org/html/2506.19806v3#S4.F2 "Figure 2 ‣ Case 1: Low Variance, Mean Aligned ‣ 4.2 Applicability and Claim Boundaries ‣ 4 LLM-Based Simulations Lack Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary"), the overall distribution shape can differ substantially from human data; claims about precise frequencies, proportions, or distributional statistics may therefore be unreliable even when qualitative patterns align. In addition, interpreting individual “behavioral trajectories,” such as specific decisions or paths, can lead to “interpretive overfitting,” as individual decisions may not align with reality ([Wang et al., 2024a](https://arxiv.org/html/2506.19806v3#bib.bib147)) and are difficult to verify or distinguish from hallucination ([Singh et al., 2024](https://arxiv.org/html/2506.19806v3#bib.bib5)). While exploring agent decision logic may enhance AI/ML understanding (e.g., k-level reasoning ([Gandhi et al., 2023](https://arxiv.org/html/2506.19806v3#bib.bib77); [Zhang et al., 2025b](https://arxiv.org/html/2506.19806v3#bib.bib76))), its significance for social science is limited when individual variance is constrained.

#### Case 2: Low Variance, Mean Deviated

The more critical case arises when LLM agents exhibit not only low variance but also mean behavior that deviates significantly from human values, meaning the aggregated LLM behavior does not reflect the central tendency of the targeted human population.

Unlike the Case 1 proposed, where insights into collective patterns might still be obtained, this scenario can render simulations problematic or inapplicable for deriving insights into real human societies. Research finds that LLMs perform significantly differently when simulating population subgroups, often exhibiting biases not present in intended populations ([Ma et al., 2025](https://arxiv.org/html/2506.19806v3#bib.bib3)). In public opinion surveys, models trained with human feedback tend towards liberal views and polarized attitudes, difficult to debias through role-play ([Bernardelle et al., 2024](https://arxiv.org/html/2506.19806v3#bib.bib88); [Bisbee et al., 2024](https://arxiv.org/html/2506.19806v3#bib.bib71); [Santurkar et al., 2023](https://arxiv.org/html/2506.19806v3#bib.bib70)). Generated dialogues often differ from real conversations in linguistic features ([Lin et al., 2024](https://arxiv.org/html/2506.19806v3#bib.bib64)).

Moreover, training processes that debias or rationalize LLM behaviors can paradoxically compromise social simulation utility. When research requires understanding how biases contribute to social patterns, their elimination becomes problematic. Humans exhibit response biases to survey wording that models may not capture ([Tjuatja et al., 2024](https://arxiv.org/html/2506.19806v3#bib.bib95)). Cultural deviations are also evident; multilingual simulations show LLM agents making moral judgments inconsistent with cultural values of those language communities ([Jin et al., 2024](https://arxiv.org/html/2506.19806v3#bib.bib91); [Naous and Xu, 2025](https://arxiv.org/html/2506.19806v3#bib.bib92); [Zhang et al., 2024b](https://arxiv.org/html/2506.19806v3#bib.bib93)).

When mean deviation exists, researchers must check for such deviations. If the average LLM behavior diverges from actual human population behavior, the simulation’s applicability is significantly compromised. Achieving alignment often requires extensive socio-demographic conditions ([Argyle et al., 2023](https://arxiv.org/html/2506.19806v3#bib.bib44); [Hu et al., 2025](https://arxiv.org/html/2506.19806v3#bib.bib149)), and reasons for deviations can remain unknown ([Nguyen et al., 2025b](https://arxiv.org/html/2506.19806v3#bib.bib87)).

Across both cases, researchers must verify both diversity (variance) and alignment (mean), determining whether observed limitations represent insufficient diversity or deviation from real-world behavior. While various methods have been proposed to enhance agent diversity, significant challenges remain; we discuss existing approaches, their limitations, and potential directions in Appendix [G](https://arxiv.org/html/2506.19806v3#A7 "Appendix G Challenges and Directions for Improving Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").

## 5 Reviewing Current LLM-Based Social Simulations through the Lens of Our Methodology

Table 1: Systematic review of validation practices in LLM-based social simulation research. Het. Req.: Heterogeneity Requirement based on research question type. GT: Ground Truth availability and sample size. Mean: Whether mean alignment was checked. Var.: Whether variance was checked. Sens.: Sensitivity analysis conducted. Symbols: ✓ = checked, ✗ = not checked. For Mean/Variance results when checked: Aligned = consistent with human baseline; Deviated/Lower = inconsistent; Mixed = partial alignment. GT Size indicators: (L) = Large, (M) = Medium, (S) = Small. Coll.-Qual. = Collective-Qualitative; Coll.-Quant. = Collective-Quantitative.

|  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- |
| Paper | Domain | Het. Req. | Ground Truth | Mean | Var. | Claim Level | Sens. |
| High Heterogeneity Requirement | | | | | | | |
| [Lopez-Lira (2025)](https://arxiv.org/html/2506.19806v3#bib.bib152) | Economics | High | None | ✗ | ✗ | Coll.-Qual. | Yes |
| [Chuang et al. (2024a)](https://arxiv.org/html/2506.19806v3#bib.bib42) | Social Net. | High | None | ✗ | ✗ | Coll.-Qual. | Yes |
| [Wang et al. (2025b)](https://arxiv.org/html/2506.19806v3#bib.bib157) | Social Net. | High | Literature | ✓Align | ✓ | Coll.-Qual. | Part |
| [Liu et al. (2024c)](https://arxiv.org/html/2506.19806v3#bib.bib158) | Politics | High | Literature | ✓Align | ✓Low | Coll.-Qual. | Part |
| [Hua et al. (2023)](https://arxiv.org/html/2506.19806v3#bib.bib43) | Politics | High | Obs. Data (S) | ✓Mix | ✗ | Coll.-Qual. | Yes |
| [Yang et al. (2024c)](https://arxiv.org/html/2506.19806v3#bib.bib33) | Social Net. | High | Obs./Exp. (L) | ✓Mix | ✓Low | Coll.-Qual. | Yes |
| [Gao et al. (2023)](https://arxiv.org/html/2506.19806v3#bib.bib150) | Social Net. | High | Obs. Data (L) | ✓Align | ✗ | Coll.-Quant. | No |
| [Li et al. (2024)](https://arxiv.org/html/2506.19806v3#bib.bib28) | Economics | High | Obs. Data (M) | ✓Align | ✗ | Coll.-Qual. | Part |
| [Tang et al. (2025a)](https://arxiv.org/html/2506.19806v3#bib.bib151) | General | High | Obs. Data (L) | ✓Align | ✓ | Coll.-Quant. | Part |
| Medium Heterogeneity Requirement | | | | | | | |
| [Huynh et al. (2025)](https://arxiv.org/html/2506.19806v3#bib.bib156) | Game | Med | None | ✗ | ✗ | Coll.-Qual. | Yes |
| [Zhang et al. (2023)](https://arxiv.org/html/2506.19806v3#bib.bib162) | Soc. Psych. | Med | None | ✗ | ✗ | Coll.-Qual. | Yes |
| [Zhou et al. (2023)](https://arxiv.org/html/2506.19806v3#bib.bib160) | Game | Med | Human Exp. (M) | ✓Dev | ✓Low | Coll.-Qual. | Part |
| [Chen et al. (2024)](https://arxiv.org/html/2506.19806v3#bib.bib56) | General | Med | None | ✗ | ✗ | Coll.-Qual. | Part |
| [Ren et al. (2024)](https://arxiv.org/html/2506.19806v3#bib.bib161) | Culture | Med | None | ✗ | ✗ | Coll.-Qual. | Part |
| [Piatti et al. (2024)](https://arxiv.org/html/2506.19806v3#bib.bib172) | Game | Med | None | ✗ | ✗ | Coll.-Qual. | Yes |
| [Xie et al. (2024)](https://arxiv.org/html/2506.19806v3#bib.bib159) | Psychology | Med | Human Exp. (L) | ✓Mix | ✓Low | Coll.-Qual. | Part |
| Low Heterogeneity Requirement | | | | | | | |
| [Horton et al. (2023)](https://arxiv.org/html/2506.19806v3#bib.bib153) | Economics | Low | Human Exp. (M) | ✓Align | ✓Low | Coll.-Qual. | Part |
| [Wu et al. (2024)](https://arxiv.org/html/2506.19806v3#bib.bib69) | Economics | Low | Human Exp. (L) | ✓Align | ✓Low | Coll.-Qual. | Yes |
| [Fontana et al. (2025)](https://arxiv.org/html/2506.19806v3#bib.bib154) | Game | Low | Human Exp. (L) | ✓Dev | ✗ | Coll.-Qual. | Yes |
| [Akata et al. (2025)](https://arxiv.org/html/2506.19806v3#bib.bib40) | Game | Low | Human Exp. (M) | ✓Mix | ✗ | Coll.-Qual. | Yes |
| [Mozikov et al. (2024)](https://arxiv.org/html/2506.19806v3#bib.bib155) | Game | Low | Human Exp. (M) | ✓Mix | ✓Low | Coll.-Quant. | Yes |

To assess how current research aligns with the boundary considerations outlined in previous sections, we reviewed current LLM-based social simulation studies. We selected 21 papers from 2023 to 2025 published at top AI/NLP venues and highly-cited papers that have demonstrated significant influence in the field. Our selection spans diverse domains including economics, social networks, game theory, politics, psychology, and culture. For each paper, we evaluated: (1) the type of research question and its theoretical heterogeneity requirement, (2) whether and how ground truth comparisons were conducted, (3) whether mean alignment and variance were checked, (4) the level of claims made, and (5) whether sensitivity analysis was performed. The detailed criteria for each dimension are provided in Appendix [D](https://arxiv.org/html/2506.19806v3#A4 "Appendix D Review Criteria for Systematic Analysis ‣ LLM-Based Social Simulations Require a Boundary"). Detailed experimental design factors for these selected works are further examined in Appendix [C](https://arxiv.org/html/2506.19806v3#A3 "Appendix C Review of Experimental Design Factors of Current Works ‣ LLM-Based Social Simulations Require a Boundary").

### 5.1 Key Observations

#### Ground Truth Availability Varies by Domain

Of the 21 papers reviewed, 14 (67%) included some form of ground truth comparison, while 7 (33%) conducted simulations without human behavioral baselines. Papers studying game theory and economic behavior tend to have better access to ground truth, as these domains have accumulated extensive human experimental data that can serve as benchmarks. In contrast, studies on social network dynamics and cultural phenomena often lack direct human baselines, relying instead on qualitative comparisons with literature or observational patterns. This disparity suggests that certain research domains are currently better suited for validated LLM-based simulations than others.

#### Mean Alignment Is More Commonly Checked Than Variance

Among papers with ground truth, all of them (14 of 14) examined mean alignment, but fewer explicitly assessed variance (9 of 14). This pattern is concerning given our earlier analysis: even when mean behavior aligns with human averages, low variance can fundamentally limit what conclusions can be drawn. Notably, among papers that did check variance, the majority found LLM-generated behaviors exhibited *lower* variance than human populations, which is consistent with the “average persona” phenomenon discussed in Section [4](https://arxiv.org/html/2506.19806v3#S4 "4 LLM-Based Simulations Lack Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary"). Only one study clearly reported the relationship between agent scale and variance, with large-scale observational data serving as a reference basis ([Tang et al., 2025a](https://arxiv.org/html/2506.19806v3#bib.bib151)). Another study’s variance metric was primarily aimed at examining the robustness of the simulation framework, but it was not directly compared with real data ([Wang et al., 2025b](https://arxiv.org/html/2506.19806v3#bib.bib157)).

#### Heterogeneity Requirements Often Exceed Validation Depth

A notable pattern emerges when comparing research question types with validation practices. Nine papers address research questions with high heterogeneity requirements (e.g., distributional properties, tipping points, path-dependent dynamics), yet only four of these ([Wang et al., 2025b](https://arxiv.org/html/2506.19806v3#bib.bib157); [Liu et al., 2024c](https://arxiv.org/html/2506.19806v3#bib.bib158); [Yang et al., 2024c](https://arxiv.org/html/2506.19806v3#bib.bib33); [Tang et al., 2025a](https://arxiv.org/html/2506.19806v3#bib.bib151)) checked both mean and variance against ground truth. Several high-requirement studies ([Lopez-Lira, 2025](https://arxiv.org/html/2506.19806v3#bib.bib152); [Chuang et al., 2024a](https://arxiv.org/html/2506.19806v3#bib.bib42)) conducted no ground truth comparison, despite investigating phenomena (market dynamics, opinion polarization) that theoretically depend on behavioral diversity for their emergence. This gap between the heterogeneity demands of research questions and the depth of validation represents a systematic concern in the field. No work explicitly claimed consistency with human baselines at the variance level in their simulation results. Some works, while having partially comparable results, commendably acknowledged discrepancies between simulation results and real distributions in specific contexts. For example,  [Liu et al. (2024c)](https://arxiv.org/html/2506.19806v3#bib.bib158) stated that the “belief variance” they tracked could “quickly form a firm opinion” on certain topics such as political issues; [Yang et al. (2024c)](https://arxiv.org/html/2506.19806v3#bib.bib33) noted that in their social network simulations, agents were more susceptible to conformity effects than humans. A better practice is Figure 2 of  [Zhou et al. (2023)](https://arxiv.org/html/2506.19806v3#bib.bib160)’s work, which clearly illustrates the difference of distribution between simulation results and human data. Honest and accurate characterization of this lower variance can actually help readers better identify the paper’s useful findings and the boundaries of their applicability.

#### Claim Levels Are Generally Appropriate

Encouragingly, most papers (18 of 21) limited their claims to collective-level patterns rather than individual trajectories or quantitative claims, which aligns with our recommendation in Section [4.2](https://arxiv.org/html/2506.19806v3#S4.SS2 "4.2 Applicability and Claim Boundaries ‣ 4 LLM-Based Simulations Lack Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary"). Only three papers made strong collective-quantitative claims ([Gao et al., 2023](https://arxiv.org/html/2506.19806v3#bib.bib150); [Tang et al., 2025a](https://arxiv.org/html/2506.19806v3#bib.bib151); [Mozikov et al., 2024](https://arxiv.org/html/2506.19806v3#bib.bib155)), and included ground truth comparisons. This suggests that the community currently maintains a certain level of rigor regarding what claims research can make at top AI/NLP venues, though the distinction between qualitative and quantitative collective claims deserves more attention in future work. However, a small number of studies potentially overstated their claims. For instance,  [Lopez-Lira (2025)](https://arxiv.org/html/2506.19806v3#bib.bib152) stated that it “presents a realistic simulated stock market” yet lacks comparison with ground truth. Similarly,  [Chen et al. (2024)](https://arxiv.org/html/2506.19806v3#bib.bib56) claimed to simulate certain human group behaviors without comparing them with a human baseline. While these works have the potential to contribute to social science discoveries, the claims could be framed with greater rigor.

#### Sensitivity Analysis Adoption Is Increasing

The majority of papers (20 of 21) conducted at least partial sensitivity analysis, testing robustness to prompt variations, model choices, or parameter settings. This is a positive trend, as sensitivity analysis helps establish the reliability of simulation findings. However, practices vary considerably: some studies systematically varied multiple factors, while others tested only a single dimension (9 of 21). Standardized sensitivity analysis protocols would benefit the field.

### 5.2 Navigating Contradictory Findings

A critical yet underexplored challenge in LLM-based social simulation research is the existence of contradictory findings across studies examining similar phenomena. These inconsistencies underscore the need for researchers to actively engage with work that may challenge their own conclusions. Here we evaluate two groups of contradictory findings, one in game-theoretic simulations and one in silicon sampling.

#### The Cooperation Paradox in Game-Theoretic Simulations

Consider the divergent findings regarding LLM cooperative behavior.  [Fontana et al. (2025)](https://arxiv.org/html/2506.19806v3#bib.bib154) reported that LLMs such as Llama 2 and GPT-3.5 exhibit hyper cooperative behavior in iterated Prisoner’s Dilemma games, forgiving defection rates up to 30% and maintaining cooperation far beyond human baseline levels.
They attributed this to an intrinsic preference for positive constructs in these models.
However, this finding appears to conflict with  [Akata et al. (2025)](https://arxiv.org/html/2506.19806v3#bib.bib40), who observed that LLMs can be particularly unforgiving, permanently defecting after experiencing betrayal.
Further complicating matters,  [Piatti et al. (2024)](https://arxiv.org/html/2506.19806v3#bib.bib172) demonstrated in their framework that most LLMs fail to achieve sustainable cooperation in common-pool resource games. Their findings suggest that LLMs exhibit short-sighted, greedy resource extraction patterns rather than the cooperative tendencies reported elsewhere.
These contradictions may stem from differences in game structure (dyadic vs. multi-agent), resource framing (abstract payoffs vs. tangible resources), model versions, or prompting strategies. Notably,  [Fontana et al. (2025)](https://arxiv.org/html/2506.19806v3#bib.bib154) themselves observed that Llama 3 exhibits markedly different, more exploitative behavior, highlighting how rapidly evolving model architectures can invalidate prior behavioral characterizations.

#### The Fidelity Paradox in Silicon Sampling

A parallel tension exists in research evaluating LLMs as synthetic survey respondents.
 [Argyle et al. (2023)](https://arxiv.org/html/2506.19806v3#bib.bib44) introduced the concept of “algorithmic fidelity,” defined as the degree to which the complex patterns of relationships between ideas, attitudes, and socio-cultural contexts within a model accurately mirror those within human sub-populations. By conditioning GPT-3 on socio-demographic profiles constructed from thousands of real survey respondents, they reported that the model could reproduce nuanced association patterns, such as relationships between demographics, attitudes, and voting behavior, that closely matched human survey data across multiple subgroups. This concept represents one of the most systematic validity criteria for LLM-based social simulation to date. However, although the original operationalization compared several aggregate distributions and association patterns, it did not make variance matching an explicit or systematic validity requirement. In particular, it remained unclear whether LLM-generated respondents reproduce the within-subgroup dispersion of human responses, rather than merely matching subgroup-conditioned averages or relational patterns.
 [Bisbee et al. (2024)](https://arxiv.org/html/2506.19806v3#bib.bib71) sharpened this concern by showing that, although ChatGPT-generated responses can approximate aggregate opinion averages, they exhibit substantially less variation than ANES responses and often fail to support the same conditional inferences. Their analysis further showed that synthetic data often produced divergent regression-based inferences from the ANES benchmark, sometimes even reversing substantive conclusions, and that the same prompt could yield different response distributions over time, raising concerns about reproducibility. Together, these findings suggest that fidelity in subgroup-conditioned averages or association patterns does not guarantee distributional fidelity, reinforcing the need to validate variance alongside relational alignment.

These contradictions suggest that validation success in one dimension (e.g., mean alignment) may mask failures in another (e.g., distribution collapse). Therefore, we argue that reporting positive validation results is insufficient; researchers must actively investigate potential conflicts with existing literature to define the validity scope of their simulations.

This review reveals both progress and gaps in current validation practices. While the field has developed awareness of ground truth comparison and appropriate claim levels, systematic variance checking remains underutilized, and there is often a mismatch between the heterogeneity demands of research questions and the depth of validation conducted. These findings reinforce our central argument that the value of LLM-based social simulations depends critically on researchers understanding and respecting the boundaries imposed by limited behavioral heterogeneity. We provide detailed recommendations for future validation practices in Appendix [F](https://arxiv.org/html/2506.19806v3#A6 "Appendix F Recommendations for Future Research ‣ LLM-Based Social Simulations Require a Boundary").

## 6 Alternative Views

The rapidly expanding application of LLMs to social simulations has ignited a polarized debate regarding their validity and epistemic status. While our work advocates for a boundary-aware approach, where utility is contingent upon meeting specific fidelity criteria, perspectives in the broader community generally oscillate between viewing LLMs as transformative “silicon subjects” and dismissing them as fundamentally unreliable surrogates.

The Optimistic Perspective Efficiency and Emergence Proponents of LLM-based simulations argue that these models offer a transformative solution to the scalability and cost constraints of traditional human subject research.  [Anthis et al. (2025)](https://arxiv.org/html/2506.19806v3#bib.bib37) asserted that LLM simulations are a “promising research method” capable of overcoming logistical barriers in data collection, provided that challenges such as diversity and bias are managed. This optimism is shared by  [Grossmann et al. (2023)](https://arxiv.org/html/2506.19806v3#bib.bib163) and  [Bail (2024)](https://arxiv.org/html/2506.19806v3#bib.bib166), who envisioned LLMs as powerful instruments for reverse engineering social dynamics and testing interventions in high-stakes environments. Expanding on this potential,  [Ashery et al. (2025)](https://arxiv.org/html/2506.19806v3#bib.bib7) provided empirical evidence that decentralized LLM populations can autonomously develop social conventions and collective biases. Their findings suggest that these models are not merely stochastic parrots, but are capable of reproducing the spontaneous emergence of complex societal structures without explicit programming, thereby validating the generative potential of AI agents. That said, a question remains: does the emergence of collective conventions in LLM populations necessarily reflect real social dynamics, or could it instead reflect regularities inherited from training distributions? Furthermore, scalability is valuable only insofar as fidelity is maintained; it is worth asking whether simulating large numbers of agents with limited behavioral diversity genuinely advances our understanding of inherently diverse populations.

The Skeptical Perspective Fundamental Invalidity and Bias Conversely, a critical body of work questions the fundamental validity of using LLMs as proxies for human behavior.  [Gao et al. (2025)](https://arxiv.org/html/2506.19806v3#bib.bib164) presented empirical evidence that LLMs consistently fail to replicate human behavior distributions in economic games, warning that their reliance on probabilistic pattern matching lacks the embodied survival objectives that shape human cognition. This skepticism is deeply reinforced by  [Li et al. (2025a)](https://arxiv.org/html/2506.19806v3#bib.bib170), who characterized current persona-based simulations as a “promise with a catch.” Through large-scale experiments, they revealed that prevailing ad hoc generation techniques introduce systematic biases, leading to significant deviations in downstream tasks like election forecasting, and often fail to capture the multi-dimensional attributes of human subjects. Similarly,  [Larooij and Törnberg (2025)](https://arxiv.org/html/2506.19806v3#bib.bib1) argued that the black-box nature of LLMs may exacerbate rather than resolve historical modeling challenges, making it difficult to disentangle genuine social phenomena from artifacts of the training data. However, wholesale dismissal may overlook evidence that, under appropriate conditions, simulations can reproduce meaningful collective-level patterns (as in the Case 1 analysis in Section [4.2](https://arxiv.org/html/2506.19806v3#S4.SS2 "4.2 Applicability and Claim Boundaries ‣ 4 LLM-Based Simulations Lack Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary")). The challenge may therefore be better characterized as one of conditional validity rather than fundamental invalidity, which is precisely the boundary our framework seeks to establish.

The Conditional Perspective. Methodological Rigor as a Prerequisite Bridging these extremes, a growing cohort of researchers aligns with our position that LLM-based simulations are feasible but require strict structural and methodological constraints.  [Demszky et al. (2023)](https://arxiv.org/html/2506.19806v3#bib.bib171) cautioned that LLMs are “not yet ready” for unsupervised application, a sentiment formalized by  [Zhou et al. (2025)](https://arxiv.org/html/2506.19806v3#bib.bib168) through the PIMMUR (Profile, Interaction, Memory, Minimal-Control, Unawareness, and Realism) principles, which demonstrate that violations of design standards lead to simulation failure.

Furthermore, [Sreedhar et al. (2025)](https://arxiv.org/html/2506.19806v3#bib.bib167) highlighted that validity is often a function of architectural design rather than inherent model capability; they demonstrated that enabling authentic social behaviors (e.g., cheating or cooperation) requires specific simulation mechanisms, such as private communication channels and stake-prompting, without which models fail to capture the complexity of human decision-making. This aligns with  [Li et al. (2025b)](https://arxiv.org/html/2506.19806v3#bib.bib169) and  [Kozlowski and Evans (2024)](https://arxiv.org/html/2506.19806v3#bib.bib165), who advocated for cognitively grounded agents and a “validation then simulation” approach. Collectively, these works underscore that valid simulation demands not just behavioral mimicry but the careful engineering of cognitive structures and interaction mechanisms, reinforcing the urgent need for a structured approach to validity. It is within this third, conditional paradigm that we situate our work. By establishing a clear boundary, we aim to move the field beyond the dichotomy of hype and skepticism, ensuring that LLM-based simulations are deployed only where their methodological validity can be rigorously substantiated.

## 7 Conclusion

This paper argues that the primary goal of LLM-based social simulations is to explain social patterns, construct theories, and generate hypotheses. Misunderstandings about these goals in current research have limited their contributions to social science. To better address social science problems, we highlight the need to focus on collective alignment and enhance agent heterogeneity to more accurately reflect real societies. Additionally, other well-established boundaries including individual temporal consistency and simulation robustness are equally essential for applying insights from simulated societies to real-world contexts.

Our core standpoint is to emphasize the necessity of regulating simulation boundaries, including the scope of claims and simulated problems. We urge the community to treat these boundaries as a general checklist for evaluating the use of LLMs in social simulations, thereby ensuring their positive contributions to social science research. Meanwhile, we emphasize advancing the standardization of systematic validation methods for social simulations, as well as enhancing the capability to identify potential biases in simulations, to avoid neglect or bias towards marginalized groups and phenomena.

## Acknowledgements

This work is supported by JSPS Kakenhi JP23K17456, JP23K25157, JP23K28096, JP25H01117, JP26K03246, JST CREST JPMJCR22M2, and JST BOOST JPMJBS2402.

## References

- Abell and Reyniers (2000)
  P. Abell and D. Reyniers
  On the failures of social theory.
  British Journal of Sociology 51 (4), pp. 739–750.
  Cited by: [§A.1](https://arxiv.org/html/2506.19806v3#A1.SS1.p1.1 "A.1 Computational Social Science ‣ Appendix A Related Works ‣ LLM-Based Social Simulations Require a Boundary").
- Abels and Lenaerts (2025)
  A. Abels and T. Lenaerts
  Wisdom from diversity: bias mitigation through hybrid human-llm crowds.
  In Proceedings of the Thirty-Fourth International Joint Conference on Artificial Intelligence,
  pp. 321–329.
  Cited by: [§G.2](https://arxiv.org/html/2506.19806v3#A7.SS2.p3.1 "G.2 Potential Directions ‣ Appendix G Challenges and Directions for Improving Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").
- Achintalwar et al. (2024)
  S. Achintalwar, I. Baldini, D. Bouneffouf, J. Byamugisha, M. Chang, P. Dognin, E. Farchi, N. Makondo, A. Mojsilović, M. Nagireddy, et al.
  Alignment studio: aligning large language models to particular contextual regulations.
  IEEE Internet Computing 28 (5), pp. 28–36.
  Cited by: [§G.2](https://arxiv.org/html/2506.19806v3#A7.SS2.p3.1 "G.2 Potential Directions ‣ Appendix G Challenges and Directions for Improving Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").
- Adornetto et al. (2025)
  C. Adornetto, A. Mora, K. Hu, L. I. Garcia, P. Atchade-Adelomou, G. Greco, L. A. A. Pastor, and K. Larson
  Generative agents in agent-based modeling: overview, validation, and emerging challenges.
  IEEE Transactions on Artificial Intelligence.
  Cited by: [§A.3](https://arxiv.org/html/2506.19806v3#A1.SS3.p1.1 "A.3 LLMs in Social Simulations ‣ Appendix A Related Works ‣ LLM-Based Social Simulations Require a Boundary"),
  [Appendix H](https://arxiv.org/html/2506.19806v3#A8.p2.1 "Appendix H Challenges and Future Directions ‣ LLM-Based Social Simulations Require a Boundary").
- Aher et al. (2023)
  G. V. Aher, R. I. Arriaga, and A. T. Kalai
  Using large language models to simulate multiple humans and replicate human subject studies.
  In International Conference on Machine Learning,
  pp. 337–371.
  Cited by: [§4.2](https://arxiv.org/html/2506.19806v3#S4.SS2.SSS0.Px1.p2.1 "Case 1: Low Variance, Mean Aligned ‣ 4.2 Applicability and Claim Boundaries ‣ 4 LLM-Based Simulations Lack Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").
- Akata et al. (2025)
  E. Akata, L. Schulz, J. Coda-Forno, S. J. Oh, M. Bethge, and E. Schulz
  Playing repeated games with large language models.
  Nature Human Behaviour 9 (7), pp. 1380–1390.
  Cited by: [Table 2](https://arxiv.org/html/2506.19806v3#A3.T2.5.1.24.1 "In Appendix C Review of Experimental Design Factors of Current Works ‣ LLM-Based Social Simulations Require a Boundary"),
  [§5.2](https://arxiv.org/html/2506.19806v3#S5.SS2.SSS0.Px1.p1.1 "The Cooperation Paradox in Game-Theoretic Simulations ‣ 5.2 Navigating Contradictory Findings ‣ 5 Reviewing Current LLM-Based Social Simulations through the Lens of Our Methodology ‣ LLM-Based Social Simulations Require a Boundary"),
  [Table 1](https://arxiv.org/html/2506.19806v3#S5.T1.10.24.1.1.1 "In 5 Reviewing Current LLM-Based Social Simulations through the Lens of Our Methodology ‣ LLM-Based Social Simulations Require a Boundary").
- Amin et al. (2018)
  E. Amin, M. Abouelela, and A. Soliman
  The role of heterogeneity and the dynamics of voluntary contributions to public goods: an experimental and agent-based simulation analysis.
  Journal of Artificial Societies and Social Simulation 21 (1).
  Cited by: [§3.2](https://arxiv.org/html/2506.19806v3#S3.SS2.SSS0.Px2.p2.1 "The Critical Role of Heterogeneity ‣ 3.2 Homogeneity and Heterogeneity ‣ 3 Alignment and Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").
- Anthis et al. (2025)
  J. R. Anthis, R. Liu, S. M. Richardson, A. C. Kozlowski, B. Koch, E. Brynjolfsson, J. Evans, and M. S. Bernstein
  Position: llm social simulations are a promising research method.
  In Forty-second International Conference on Machine Learning Position Paper Track,
  Cited by: [§A.3](https://arxiv.org/html/2506.19806v3#A1.SS3.p1.1 "A.3 LLMs in Social Simulations ‣ Appendix A Related Works ‣ LLM-Based Social Simulations Require a Boundary"),
  [§4.2](https://arxiv.org/html/2506.19806v3#S4.SS2.SSS0.Px1.p2.1 "Case 1: Low Variance, Mean Aligned ‣ 4.2 Applicability and Claim Boundaries ‣ 4 LLM-Based Simulations Lack Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary"),
  [§6](https://arxiv.org/html/2506.19806v3#S6.p2.1 "6 Alternative Views ‣ LLM-Based Social Simulations Require a Boundary").
- Argyle et al. (2023)
  L. P. Argyle, E. C. Busby, N. Fulda, J. R. Gubler, C. Rytting, and D. Wingate
  Out of one, many: using language models to simulate human samples.
  Political Analysis 31 (3), pp. 337–351.
  Cited by: [§4.2](https://arxiv.org/html/2506.19806v3#S4.SS2.SSS0.Px2.p4.1 "Case 2: Low Variance, Mean Deviated ‣ 4.2 Applicability and Claim Boundaries ‣ 4 LLM-Based Simulations Lack Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary"),
  [§5.2](https://arxiv.org/html/2506.19806v3#S5.SS2.SSS0.Px2.p1.1 "The Fidelity Paradox in Silicon Sampling ‣ 5.2 Navigating Contradictory Findings ‣ 5 Reviewing Current LLM-Based Social Simulations through the Lens of Our Methodology ‣ LLM-Based Social Simulations Require a Boundary").
- Arnold (2014)
  E. Arnold
  What’s wrong with social simulations?.
  The Monist 97 (3), pp. 359–377.
  Cited by: [§2.1](https://arxiv.org/html/2506.19806v3#S2.SS1.p1.1 "2.1 Objectives of Social Simulations ‣ 2 LLM-Based Social Simulations ‣ LLM-Based Social Simulations Require a Boundary").
- Ashery et al. (2025)
  A. F. Ashery, L. M. Aiello, and A. Baronchelli
  Emergent social conventions and collective bias in llm populations.
  Science Advances 11 (20), pp. eadu9368.
  Cited by: [§A.3](https://arxiv.org/html/2506.19806v3#A1.SS3.p2.1 "A.3 LLMs in Social Simulations ‣ Appendix A Related Works ‣ LLM-Based Social Simulations Require a Boundary"),
  [§6](https://arxiv.org/html/2506.19806v3#S6.p2.1 "6 Alternative Views ‣ LLM-Based Social Simulations Require a Boundary").
- Axelrod (1997)
  R. Axelrod
  Advancing the art of simulation in the social sciences.
  In Simulating social phenomena,
  pp. 21–40.
  Cited by: [§2.1](https://arxiv.org/html/2506.19806v3#S2.SS1.p1.1 "2.1 Objectives of Social Simulations ‣ 2 LLM-Based Social Simulations ‣ LLM-Based Social Simulations Require a Boundary").
- Bail (2024)
  C. A. Bail
  Can generative ai improve social science?.
  Proceedings of the National Academy of Sciences 121 (21), pp. e2314021121.
  Cited by: [§6](https://arxiv.org/html/2506.19806v3#S6.p2.1 "6 Alternative Views ‣ LLM-Based Social Simulations Require a Boundary").
- Ball et al. (2024)
  T. Ball, S. Chen, and C. Herley
  Can we count on llms? the fixed-effect fallacy and claims of gpt-4 capabilities.
  arXiv preprint arXiv:2409.07638.
  Cited by: [§2.1](https://arxiv.org/html/2506.19806v3#S2.SS1.p3.1 "2.1 Objectives of Social Simulations ‣ 2 LLM-Based Social Simulations ‣ LLM-Based Social Simulations Require a Boundary").
- Bernardelle et al. (2024)
  P. Bernardelle, L. Fröhling, S. Civelli, R. Lunardi, K. Roitero, and G. Demartini
  Mapping and influencing the political ideology of large language models using synthetic personas.
  arXiv preprint arXiv:2412.14843.
  Cited by: [§4.2](https://arxiv.org/html/2506.19806v3#S4.SS2.SSS0.Px2.p2.1 "Case 2: Low Variance, Mean Deviated ‣ 4.2 Applicability and Claim Boundaries ‣ 4 LLM-Based Simulations Lack Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").
- Bisbee et al. (2024)
  J. Bisbee, J. D. Clinton, C. Dorff, B. Kenkel, and J. M. Larson
  Synthetic replacements for human survey data? the perils of large language models.
  Political Analysis 32 (4), pp. 401–416.
  Cited by: [§4.2](https://arxiv.org/html/2506.19806v3#S4.SS2.SSS0.Px2.p2.1 "Case 2: Low Variance, Mean Deviated ‣ 4.2 Applicability and Claim Boundaries ‣ 4 LLM-Based Simulations Lack Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary"),
  [§5.2](https://arxiv.org/html/2506.19806v3#S5.SS2.SSS0.Px2.p1.1 "The Fidelity Paradox in Silicon Sampling ‣ 5.2 Navigating Contradictory Findings ‣ 5 Reviewing Current LLM-Based Social Simulations through the Lens of Our Methodology ‣ LLM-Based Social Simulations Require a Boundary").
- Bonabeau (2002)
  E. Bonabeau
  Agent-based modeling: methods and techniques for simulating human systems.
  Proceedings of the national academy of sciences 99 (suppl\_3), pp. 7280–7287.
  Cited by: [§A.2](https://arxiv.org/html/2506.19806v3#A1.SS2.p1.1 "A.2 Agent-Based Modeling in Computational Social Science ‣ Appendix A Related Works ‣ LLM-Based Social Simulations Require a Boundary"),
  [§1](https://arxiv.org/html/2506.19806v3#S1.p1.1 "1 Introduction ‣ LLM-Based Social Simulations Require a Boundary").
- Borgonovo et al. (2022)
  E. Borgonovo, M. Pangallo, J. Rivkin, L. Rizzo, and N. Siggelkow
  Sensitivity analysis of agent-based models: a new protocol.
  Computational and Mathematical Organization Theory 28 (1), pp. 52–94.
  Cited by: [§2.1](https://arxiv.org/html/2506.19806v3#S2.SS1.p2.1 "2.1 Objectives of Social Simulations ‣ 2 LLM-Based Social Simulations ‣ LLM-Based Social Simulations Require a Boundary").
- Bragues (2011)
  G. Bragues
  The financial crisis and the failure of modern social science.
  Qualitative Research in Financial Markets 3 (3), pp. 177–192.
  Cited by: [§A.1](https://arxiv.org/html/2506.19806v3#A1.SS1.p1.1 "A.1 Computational Social Science ‣ Appendix A Related Works ‣ LLM-Based Social Simulations Require a Boundary").
- Cao et al. (2025)
  Y. Cao, H. Liu, A. Arora, I. Augenstein, P. Röttger, and D. Hershcovich
  Specializing large language models to simulate survey response distributions for global populations.
  arXiv preprint arXiv:2502.07068.
  Cited by: [§2.1](https://arxiv.org/html/2506.19806v3#S2.SS1.p3.1 "2.1 Objectives of Social Simulations ‣ 2 LLM-Based Social Simulations ‣ LLM-Based Social Simulations Require a Boundary").
- Castellano et al. (2009)
  C. Castellano, S. Fortunato, and V. Loreto
  Statistical physics of social dynamics.
  Reviews of modern physics 81 (2), pp. 591–646.
  Cited by: [§3.2](https://arxiv.org/html/2506.19806v3#S3.SS2.SSS0.Px1.p1.1 "Homogeneity and Its Limitations ‣ 3.2 Homogeneity and Heterogeneity ‣ 3 Alignment and Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").
- Casti (1996)
  J. L. Casti
  Would-be worlds: how simulation is changing the frontiers of science.
   John Wiley & Sons, Inc..
  Cited by: [§2.1](https://arxiv.org/html/2506.19806v3#S2.SS1.p2.1 "2.1 Objectives of Social Simulations ‣ 2 LLM-Based Social Simulations ‣ LLM-Based Social Simulations Require a Boundary").
- Chatterjee et al. (2024)
  A. Chatterjee, H. K. Renduchintala, S. Bhatia, and T. Chakraborty
  POSIX: a prompt sensitivity index for large language models.
  In Findings of the Association for Computational Linguistics: EMNLP 2024,
  pp. 14550–14565.
  Cited by: [§2.1](https://arxiv.org/html/2506.19806v3#S2.SS1.p3.1 "2.1 Objectives of Social Simulations ‣ 2 LLM-Based Social Simulations ‣ LLM-Based Social Simulations Require a Boundary").
- Chen et al. (2025)
  R. Chen, Y. Li, J. Yang, Y. Feng, J. T. Zhou, J. Wu, and Z. Liu
  Identifying and mitigating social bias knowledge in language models.
  In Findings of the Association for Computational Linguistics: NAACL 2025,
  pp. 651–672.
  Cited by: [§G.1](https://arxiv.org/html/2506.19806v3#A7.SS1.p1.1 "G.1 Challenges in Existing Approaches ‣ Appendix G Challenges and Directions for Improving Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary"),
  [§G.1](https://arxiv.org/html/2506.19806v3#A7.SS1.p2.1 "G.1 Challenges in Existing Approaches ‣ Appendix G Challenges and Directions for Improving Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").
- Chen et al. (2024)
  W. Chen, Y. Su, J. Zuo, C. Yang, C. Yuan, C. Chan, H. Yu, Y. Lu, Y. Hung, C. Qian, et al.
  AgentVerse: facilitating multi-agent collaboration and exploring emergent behaviors.
  In ICLR,
  Cited by: [Table 2](https://arxiv.org/html/2506.19806v3#A3.T2.5.1.16.1 "In Appendix C Review of Experimental Design Factors of Current Works ‣ LLM-Based Social Simulations Require a Boundary"),
  [§3.2](https://arxiv.org/html/2506.19806v3#S3.SS2.SSS0.Px2.p1.1 "The Critical Role of Heterogeneity ‣ 3.2 Homogeneity and Heterogeneity ‣ 3 Alignment and Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary"),
  [§5.1](https://arxiv.org/html/2506.19806v3#S5.SS1.SSS0.Px4.p1.1 "Claim Levels Are Generally Appropriate ‣ 5.1 Key Observations ‣ 5 Reviewing Current LLM-Based Social Simulations through the Lens of Our Methodology ‣ LLM-Based Social Simulations Require a Boundary"),
  [Table 1](https://arxiv.org/html/2506.19806v3#S5.T1.10.16.1.1.1 "In 5 Reviewing Current LLM-Based Social Simulations through the Lens of Our Methodology ‣ LLM-Based Social Simulations Require a Boundary").
- Cheng et al. (2023)
  M. Cheng, T. Piccardi, and D. Yang
  CoMPosT: characterizing and evaluating caricature in llm simulations.
  In Proceedings of the 2023 Conference on Empirical Methods in Natural Language Processing,
  pp. 10853–10875.
  Cited by: [§2.1](https://arxiv.org/html/2506.19806v3#S2.SS1.p2.1 "2.1 Objectives of Social Simulations ‣ 2 LLM-Based Social Simulations ‣ LLM-Based Social Simulations Require a Boundary"),
  [§4.2](https://arxiv.org/html/2506.19806v3#S4.SS2.SSS0.Px1.p2.1 "Case 1: Low Variance, Mean Aligned ‣ 4.2 Applicability and Claim Boundaries ‣ 4 LLM-Based Simulations Lack Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").
- Cheng et al. (2024)
  Y. Cheng, X. Qu, T. Goldsack, C. Lin, and C. Chen
  Observing micromotives and macrobehavior of large language models.
  arXiv preprint arXiv:2412.10428.
  Cited by: [§3.1](https://arxiv.org/html/2506.19806v3#S3.SS1.p2.1 "3.1 From Individual to Collective Alignment ‣ 3 Alignment and Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").
- Chuang et al. (2024a)
  Y. Chuang, A. Goyal, N. Harlalka, S. Suresh, R. Hawkins, S. Yang, D. Shah, J. Hu, and T. Rogers
  Simulating opinion dynamics with networks of llm-based agents.
  In Findings of the Association for Computational Linguistics: NAACL 2024,
  pp. 3326–3346.
  Cited by: [§A.3](https://arxiv.org/html/2506.19806v3#A1.SS3.p2.1 "A.3 LLMs in Social Simulations ‣ Appendix A Related Works ‣ LLM-Based Social Simulations Require a Boundary"),
  [Table 2](https://arxiv.org/html/2506.19806v3#A3.T2.5.1.4.1 "In Appendix C Review of Experimental Design Factors of Current Works ‣ LLM-Based Social Simulations Require a Boundary"),
  [§5.1](https://arxiv.org/html/2506.19806v3#S5.SS1.SSS0.Px3.p1.1 "Heterogeneity Requirements Often Exceed Validation Depth ‣ 5.1 Key Observations ‣ 5 Reviewing Current LLM-Based Social Simulations through the Lens of Our Methodology ‣ LLM-Based Social Simulations Require a Boundary"),
  [Table 1](https://arxiv.org/html/2506.19806v3#S5.T1.10.4.1.1.1 "In 5 Reviewing Current LLM-Based Social Simulations through the Lens of Our Methodology ‣ LLM-Based Social Simulations Require a Boundary").
- Chuang et al. (2024b)
  Y. Chuang, K. Nirunwiroj, Z. Studdiford, A. Goyal, V. Frigo, S. Yang, D. Shah, J. Hu, and T. Rogers
  Beyond demographics: aligning role-playing llm-based agents using human belief networks.
  In Findings of the Association for Computational Linguistics: EMNLP 2024,
  pp. 14010–14026.
  Cited by: [§2.1](https://arxiv.org/html/2506.19806v3#S2.SS1.p3.1 "2.1 Objectives of Social Simulations ‣ 2 LLM-Based Social Simulations ‣ LLM-Based Social Simulations Require a Boundary").
- del Rio-Chanona et al. (2025)
  R. M. del Rio-Chanona, M. Pangallo, and C. Hommes
  Can generative ai agents behave like humans? evidence from laboratory market experiments.
  arXiv preprint arXiv:2505.07457.
  Cited by: [§4.2](https://arxiv.org/html/2506.19806v3#S4.SS2.SSS0.Px1.p2.1 "Case 1: Low Variance, Mean Aligned ‣ 4.2 Applicability and Claim Boundaries ‣ 4 LLM-Based Simulations Lack Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").
- Demszky et al. (2023)
  D. Demszky, D. Yang, D. S. Yeager, C. J. Bryan, M. Clapper, S. Chandhok, J. C. Eichstaedt, C. Hecht, J. Jamieson, M. Johnson, et al.
  Using large language models in psychology.
  Nature Reviews Psychology 2 (11), pp. 688–701.
  Cited by: [§6](https://arxiv.org/html/2506.19806v3#S6.p4.1 "6 Alternative Views ‣ LLM-Based Social Simulations Require a Boundary").
- Deter and Sayama (2024)
  W. Deter and H. Sayama
  Behavioral and topological heterogeneities in network versions of schelling’s segregation model.
  arXiv preprint arXiv:2408.05623.
  Cited by: [§3.2](https://arxiv.org/html/2506.19806v3#S3.SS2.SSS0.Px2.p1.1 "The Critical Role of Heterogeneity ‣ 3.2 Homogeneity and Heterogeneity ‣ 3 Alignment and Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").
- Durkheim (2023)
  E. Durkheim
  The rules of sociological method.
  In Social theory re-wired,
  pp. 9–14.
  Cited by: [§3.1](https://arxiv.org/html/2506.19806v3#S3.SS1.p1.1 "3.1 From Individual to Collective Alignment ‣ 3 Alignment and Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").
- Edmonds and Hales (2003)
  B. Edmonds and D. Hales
  Replication, replication and replication: some hard lessons from model alignment.
  Journal of Artificial Societies and Social Simulation 6 (4).
  Cited by: [§2.1](https://arxiv.org/html/2506.19806v3#S2.SS1.p1.1 "2.1 Objectives of Social Simulations ‣ 2 LLM-Based Social Simulations ‣ LLM-Based Social Simulations Require a Boundary").
- Edmonds et al. (2019)
  B. Edmonds, C. Le Page, M. Bithell, E. Chattoe-Brown, V. Grimm, R. Meyer, C. Montañola-Sales, P. Ormerod, H. Root, and F. Squazzoni
  Different modelling purposes.
  JASSS 22 (3), pp. 6.
  Cited by: [§D.1](https://arxiv.org/html/2506.19806v3#A4.SS1.p1.1 "D.1 Research Question Type and Heterogeneity Requirement ‣ Appendix D Review Criteria for Systematic Analysis ‣ LLM-Based Social Simulations Require a Boundary"),
  [§1](https://arxiv.org/html/2506.19806v3#S1.p4.1 "1 Introduction ‣ LLM-Based Social Simulations Require a Boundary"),
  [§2.1](https://arxiv.org/html/2506.19806v3#S2.SS1.p1.1 "2.1 Objectives of Social Simulations ‣ 2 LLM-Based Social Simulations ‣ LLM-Based Social Simulations Require a Boundary"),
  [§2.1](https://arxiv.org/html/2506.19806v3#S2.SS1.p2.1 "2.1 Objectives of Social Simulations ‣ 2 LLM-Based Social Simulations ‣ LLM-Based Social Simulations Require a Boundary").
- Edmonds and Moss (2004)
  B. Edmonds and S. Moss
  From kiss to kids–an ‘anti-simplistic’ modelling approach.
  In International workshop on multi-agent systems and agent-based simulation,
  pp. 130–144.
  Cited by: [§A.2](https://arxiv.org/html/2506.19806v3#A1.SS2.p2.1 "A.2 Agent-Based Modeling in Computational Social Science ‣ Appendix A Related Works ‣ LLM-Based Social Simulations Require a Boundary"),
  [§1](https://arxiv.org/html/2506.19806v3#S1.p1.1 "1 Introduction ‣ LLM-Based Social Simulations Require a Boundary").
- Edmonds (2023)
  B. Edmonds
  The practice and rhetoric of prediction–the case in agent-based modelling.
  International Journal of Social Research Methodology 26 (2), pp. 157–170.
  Cited by: [§2.1](https://arxiv.org/html/2506.19806v3#S2.SS1.p3.1 "2.1 Objectives of Social Simulations ‣ 2 LLM-Based Social Simulations ‣ LLM-Based Social Simulations Require a Boundary"),
  [§2.2](https://arxiv.org/html/2506.19806v3#S2.SS2.SSS0.Px1.p1.1 "Usage Problems ‣ 2.2 Challenges that LLM-Based Simulations Face ‣ 2 LLM-Based Social Simulations ‣ LLM-Based Social Simulations Require a Boundary").
- Eidelson (1997)
  R. J. Eidelson
  Complex adaptive systems in the behavioral and social sciences.
  Review of General Psychology 1 (1), pp. 42–71.
  Cited by: [§A.1](https://arxiv.org/html/2506.19806v3#A1.SS1.p1.1 "A.1 Computational Social Science ‣ Appendix A Related Works ‣ LLM-Based Social Simulations Require a Boundary"),
  [§1](https://arxiv.org/html/2506.19806v3#S1.p1.1 "1 Introduction ‣ LLM-Based Social Simulations Require a Boundary").
- Epstein (1999)
  J. M. Epstein
  Agent-based computational models and generative social science.
  Complexity 4 (5), pp. 41–60.
  Cited by: [§A.2](https://arxiv.org/html/2506.19806v3#A1.SS2.p1.1 "A.2 Agent-Based Modeling in Computational Social Science ‣ Appendix A Related Works ‣ LLM-Based Social Simulations Require a Boundary"),
  [§1](https://arxiv.org/html/2506.19806v3#S1.p1.1 "1 Introduction ‣ LLM-Based Social Simulations Require a Boundary").
- Epstein (2023)
  J. M. Epstein
  Inverse generative social science: backward to the future.
  Journal of artificial societies and social simulation: JASSS 26 (2), pp. 9.
  Cited by: [§A.3](https://arxiv.org/html/2506.19806v3#A1.SS3.p1.1 "A.3 LLMs in Social Simulations ‣ Appendix A Related Works ‣ LLM-Based Social Simulations Require a Boundary").
- Fontana et al. (2025)
  N. Fontana, F. Pierri, and L. M. Aiello
  Nicer than humans: how do large language models behave in the prisoner’s dilemma?.
  In Proceedings of the International AAAI Conference on Web and Social Media,
  Vol. 19, pp. 522–535.
  Cited by: [Table 2](https://arxiv.org/html/2506.19806v3#A3.T2.5.1.23.1 "In Appendix C Review of Experimental Design Factors of Current Works ‣ LLM-Based Social Simulations Require a Boundary"),
  [§G.1](https://arxiv.org/html/2506.19806v3#A7.SS1.p1.1 "G.1 Challenges in Existing Approaches ‣ Appendix G Challenges and Directions for Improving Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary"),
  [§G.2](https://arxiv.org/html/2506.19806v3#A7.SS2.p3.1 "G.2 Potential Directions ‣ Appendix G Challenges and Directions for Improving Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary"),
  [§5.2](https://arxiv.org/html/2506.19806v3#S5.SS2.SSS0.Px1.p1.1 "The Cooperation Paradox in Game-Theoretic Simulations ‣ 5.2 Navigating Contradictory Findings ‣ 5 Reviewing Current LLM-Based Social Simulations through the Lens of Our Methodology ‣ LLM-Based Social Simulations Require a Boundary"),
  [Table 1](https://arxiv.org/html/2506.19806v3#S5.T1.10.23.1.1.1 "In 5 Reviewing Current LLM-Based Social Simulations through the Lens of Our Methodology ‣ LLM-Based Social Simulations Require a Boundary").
- Galla et al. (2006)
  T. Galla, G. Mosetti, and Y. Zhang
  Anomalous fluctuations in minority games and related multi-agent models of financial markets.
  arXiv preprint physics/0608091.
  Cited by: [§3.2](https://arxiv.org/html/2506.19806v3#S3.SS2.SSS0.Px1.p1.1 "Homogeneity and Its Limitations ‣ 3.2 Homogeneity and Heterogeneity ‣ 3 Alignment and Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").
- Galstyan et al. (2005)
  A. Galstyan, T. Hogg, and K. Lerman
  Modeling and mathematical analysis of swarms of microscopic robots.
  In Proceedings 2005 IEEE Swarm Intelligence Symposium, 2005. SIS 2005.,
  pp. 201–208.
  Cited by: [§3.2](https://arxiv.org/html/2506.19806v3#S3.SS2.SSS0.Px1.p1.1 "Homogeneity and Its Limitations ‣ 3.2 Homogeneity and Heterogeneity ‣ 3 Alignment and Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").
- Gandhi et al. (2023)
  K. Gandhi, D. Sadigh, and N. D. Goodman
  Strategic reasoning with language models.
  arXiv preprint arXiv:2305.19165.
  Cited by: [§4.2](https://arxiv.org/html/2506.19806v3#S4.SS2.SSS0.Px1.p3.1 "Case 1: Low Variance, Mean Aligned ‣ 4.2 Applicability and Claim Boundaries ‣ 4 LLM-Based Simulations Lack Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").
- Gao et al. (2024)
  C. Gao, X. Lan, N. Li, Y. Yuan, J. Ding, Z. Zhou, F. Xu, and Y. Li
  Large language models empowered agent-based modeling and simulation: a survey and perspectives.
  Humanities and Social Sciences Communications 11 (1), pp. 1–24.
  Cited by: [§3.2](https://arxiv.org/html/2506.19806v3#S3.SS2.SSS0.Px2.p1.1 "The Critical Role of Heterogeneity ‣ 3.2 Homogeneity and Heterogeneity ‣ 3 Alignment and Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").
- Gao et al. (2023)
  C. Gao, X. Lan, Z. Lu, J. Mao, J. Piao, H. Wang, D. Jin, and Y. Li
  S3: social-network simulation system with large language model-empowered agents.
  arXiv preprint arXiv:2307.14984.
  Cited by: [Table 2](https://arxiv.org/html/2506.19806v3#A3.T2.5.1.9.1 "In Appendix C Review of Experimental Design Factors of Current Works ‣ LLM-Based Social Simulations Require a Boundary"),
  [§5.1](https://arxiv.org/html/2506.19806v3#S5.SS1.SSS0.Px4.p1.1 "Claim Levels Are Generally Appropriate ‣ 5.1 Key Observations ‣ 5 Reviewing Current LLM-Based Social Simulations through the Lens of Our Methodology ‣ LLM-Based Social Simulations Require a Boundary"),
  [Table 1](https://arxiv.org/html/2506.19806v3#S5.T1.10.9.1.1.1 "In 5 Reviewing Current LLM-Based Social Simulations through the Lens of Our Methodology ‣ LLM-Based Social Simulations Require a Boundary").
- Gao et al. (2025)
  Y. Gao, D. Lee, G. Burtch, and S. Fazelpour
  Take caution in using llms as human surrogates.
  Proceedings of the National Academy of Sciences 122 (24), pp. e2501660122.
  Cited by: [§6](https://arxiv.org/html/2506.19806v3#S6.p3.1 "6 Alternative Views ‣ LLM-Based Social Simulations Require a Boundary").
- Ge et al. (2024)
  T. Ge, X. Chan, X. Wang, D. Yu, H. Mi, and D. Yu
  Scaling synthetic data creation with 1,000,000,000 personas.
  arXiv preprint arXiv:2406.20094.
  Cited by: [§G.1](https://arxiv.org/html/2506.19806v3#A7.SS1.p1.1 "G.1 Challenges in Existing Approaches ‣ Appendix G Challenges and Directions for Improving Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").
- Gehrlein (1983)
  W. V. Gehrlein
  Condorcet’s paradox.
  Theory and decision 15 (2), pp. 161–197.
  Cited by: [§3.2](https://arxiv.org/html/2506.19806v3#S3.SS2.SSS0.Px2.p2.1 "The Critical Role of Heterogeneity ‣ 3.2 Homogeneity and Heterogeneity ‣ 3 Alignment and Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").
- Gerring (2001)
  J. Gerring
  Social science methodology: a criterial framework.
   Cambridge University Press.
  Cited by: [§A.2](https://arxiv.org/html/2506.19806v3#A1.SS2.p1.1 "A.2 Agent-Based Modeling in Computational Social Science ‣ Appendix A Related Works ‣ LLM-Based Social Simulations Require a Boundary").
- Giddens (1986a)
  A. Giddens
  Sociology: a brief but critical introduction.
   Bloomsbury Publishing.
  Cited by: [§A.1](https://arxiv.org/html/2506.19806v3#A1.SS1.p1.1 "A.1 Computational Social Science ‣ Appendix A Related Works ‣ LLM-Based Social Simulations Require a Boundary").
- Giddens (1986b)
  A. Giddens
  The constitution of society: outline of the theory of structuration.
  Vol. 349, Univ of California Press.
  Cited by: [§A.1](https://arxiv.org/html/2506.19806v3#A1.SS1.p1.1 "A.1 Computational Social Science ‣ Appendix A Related Works ‣ LLM-Based Social Simulations Require a Boundary").
- Granovetter (1978)
  M. Granovetter
  Threshold models of collective behavior.
  American journal of sociology 83 (6), pp. 1420–1443.
  Cited by: [§3.1](https://arxiv.org/html/2506.19806v3#S3.SS1.p2.1 "3.1 From Individual to Collective Alignment ‣ 3 Alignment and Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").
- Grieve et al. (2025)
  J. Grieve, S. Bartl, M. Fuoli, J. Grafmiller, W. Huang, A. Jawerbaum, A. Murakami, M. Perlman, D. Roemling, and B. Winter
  The sociolinguistic foundations of language modeling.
  Frontiers in Artificial Intelligence 7, pp. 1472411.
  Cited by: [§G.2](https://arxiv.org/html/2506.19806v3#A7.SS2.p2.1 "G.2 Potential Directions ‣ Appendix G Challenges and Directions for Improving Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").
- Grossman and Stiglitz (1980)
  S. J. Grossman and J. E. Stiglitz
  On the impossibility of informationally efficient markets.
  The American economic review 70 (3), pp. 393–408.
  Cited by: [§3.2](https://arxiv.org/html/2506.19806v3#S3.SS2.SSS0.Px2.p2.1 "The Critical Role of Heterogeneity ‣ 3.2 Homogeneity and Heterogeneity ‣ 3 Alignment and Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").
- Grossmann et al. (2023)
  I. Grossmann, M. Feinberg, D. C. Parker, N. A. Christakis, P. E. Tetlock, and W. A. Cunningham
  AI and the transformation of social science research.
  Science 380 (6650), pp. 1108–1109.
  Cited by: [§6](https://arxiv.org/html/2506.19806v3#S6.p2.1 "6 Alternative Views ‣ LLM-Based Social Simulations Require a Boundary").
- Gui and Toubia (2023)
  G. Gui and O. Toubia
  The challenge of using llms to simulate human behavior: a causal inference perspective.
  arXiv preprint arXiv:2312.15524.
  Cited by: [§2.1](https://arxiv.org/html/2506.19806v3#S2.SS1.p3.1 "2.1 Objectives of Social Simulations ‣ 2 LLM-Based Social Simulations ‣ LLM-Based Social Simulations Require a Boundary").
- Guo et al. (2024)
  H. Guo, Z. Liu, Y. Zhang, and Z. Wang
  Can large language models play games? a case study of a self-play approach.
  arXiv preprint arXiv:2403.05632.
  Cited by: [§B.4](https://arxiv.org/html/2506.19806v3#A2.SS4.p1.1 "B.4 Environment Design ‣ Appendix B Other Potential Boundaries ‣ LLM-Based Social Simulations Require a Boundary"),
  [§2.2](https://arxiv.org/html/2506.19806v3#S2.SS2.SSS0.Px1.p1.1 "Usage Problems ‣ 2.2 Challenges that LLM-Based Simulations Face ‣ 2 LLM-Based Social Simulations ‣ LLM-Based Social Simulations Require a Boundary").
- Han et al. (2023)
  X. Han, Z. Wu, and C. Xiao
  ”Guinea pig trials” utilizing gpt: a novel smart agent-based modeling approach for studying firm competition and collusion.
  arXiv preprint arXiv:2308.10974.
  Cited by: [§1](https://arxiv.org/html/2506.19806v3#S1.p2.1 "1 Introduction ‣ LLM-Based Social Simulations Require a Boundary"),
  [§4.2](https://arxiv.org/html/2506.19806v3#S4.SS2.SSS0.Px1.p2.1 "Case 1: Low Variance, Mean Aligned ‣ 4.2 Applicability and Claim Boundaries ‣ 4 LLM-Based Simulations Lack Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").
- Hassan et al. (2013)
  S. Hassan, J. Arroyo, J. M. Galán Ordax, L. Antunes, J. Pavón Mestras, et al.
  Asking the oracle: introducing forecasting principles into agent-based modelling.
  Journal of artificial societies and social simulation 16 (3), pp. 13.
  Cited by: [§2.2](https://arxiv.org/html/2506.19806v3#S2.SS2.SSS0.Px1.p1.1 "Usage Problems ‣ 2.2 Challenges that LLM-Based Simulations Face ‣ 2 LLM-Based Social Simulations ‣ LLM-Based Social Simulations Require a Boundary").
- Helfmann et al. (2021)
  L. Helfmann, J. Heitzig, P. Koltai, J. Kurths, and C. Schütte
  Statistical analysis of tipping pathways in agent-based models.
  The European Physical Journal Special Topics 230 (16), pp. 3249–3271.
  Cited by: [§3.2](https://arxiv.org/html/2506.19806v3#S3.SS2.SSS0.Px1.p1.1 "Homogeneity and Its Limitations ‣ 3.2 Homogeneity and Heterogeneity ‣ 3 Alignment and Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").
- Hodas and Lerman (2014)
  N. O. Hodas and K. Lerman
  The simple rules of social contagion.
  Scientific reports 4 (1), pp. 4343.
  Cited by: [§3.2](https://arxiv.org/html/2506.19806v3#S3.SS2.SSS0.Px1.p1.1 "Homogeneity and Its Limitations ‣ 3.2 Homogeneity and Heterogeneity ‣ 3 Alignment and Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").
- Holland (2000)
  J. H. Holland
  Emergence: from chaos to order.
   OUP Oxford.
  Cited by: [§3.1](https://arxiv.org/html/2506.19806v3#S3.SS1.p1.1 "3.1 From Individual to Collective Alignment ‣ 3 Alignment and Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").
- Holley and Liggett (1975)
  R. A. Holley and T. M. Liggett
  Ergodic theorems for weakly interacting infinite systems and the voter model.
  The annals of probability, pp. 643–663.
  Cited by: [§3.2](https://arxiv.org/html/2506.19806v3#S3.SS2.SSS0.Px1.p1.1 "Homogeneity and Its Limitations ‣ 3.2 Homogeneity and Heterogeneity ‣ 3 Alignment and Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").
- Hong et al. (2024)
  S. Hong, M. Zhuge, J. Chen, X. Zheng, Y. Cheng, J. Wang, C. Zhang, Z. Wang, S. K. S. Yau, Z. Lin, et al.
  MetaGPT: meta programming for a multi-agent collaborative framework.
  In ICLR,
  Cited by: [§3.2](https://arxiv.org/html/2506.19806v3#S3.SS2.SSS0.Px2.p1.1 "The Critical Role of Heterogeneity ‣ 3.2 Homogeneity and Heterogeneity ‣ 3 Alignment and Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").
- Horton et al. (2023)
  J. J. Horton, A. Filippas, and B. S. Manning
  Large language models as simulated economic agents: what can we learn from homo silicus?.
  Technical report
   National Bureau of Economic Research.
  Cited by: [2nd item](https://arxiv.org/html/2506.19806v3#A3.I1.i2.p1.1 "In Appendix C Review of Experimental Design Factors of Current Works ‣ LLM-Based Social Simulations Require a Boundary"),
  [4th item](https://arxiv.org/html/2506.19806v3#A3.I1.i4.p1.1 "In Appendix C Review of Experimental Design Factors of Current Works ‣ LLM-Based Social Simulations Require a Boundary"),
  [Table 2](https://arxiv.org/html/2506.19806v3#A3.T2.5.1.21.1 "In Appendix C Review of Experimental Design Factors of Current Works ‣ LLM-Based Social Simulations Require a Boundary"),
  [Table 1](https://arxiv.org/html/2506.19806v3#S5.T1.10.21.1.1.1 "In 5 Reviewing Current LLM-Based Social Simulations through the Lens of Our Methodology ‣ LLM-Based Social Simulations Require a Boundary").
- Hosseini and Horbach (2023)
  M. Hosseini and S. P. Horbach
  Fighting reviewer fatigue or amplifying bias? considerations and recommendations for use of chatgpt and other large language models in scholarly peer review.
  Research integrity and peer review 8 (1), pp. 4.
  Cited by: [§B.2](https://arxiv.org/html/2506.19806v3#A2.SS2.p2.1 "B.2 Robustness ‣ Appendix B Other Potential Boundaries ‣ LLM-Based Social Simulations Require a Boundary").
- Hu et al. (2025)
  Z. Hu, J. Lian, Z. Xiao, M. Xiong, Y. Lei, T. Wang, K. Ding, Z. Xiao, N. J. Yuan, and X. Xie
  Population-aligned persona generation for llm-based social simulation.
  arXiv preprint arXiv:2509.10127.
  Cited by: [§4.2](https://arxiv.org/html/2506.19806v3#S4.SS2.SSS0.Px2.p4.1 "Case 2: Low Variance, Mean Deviated ‣ 4.2 Applicability and Claim Boundaries ‣ 4 LLM-Based Simulations Lack Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").
- Hua et al. (2023)
  W. Hua, L. Fan, L. Li, K. Mei, J. Ji, Y. Ge, L. Hemphill, and Y. Zhang
  War and peace (waragent): large language model-based multi-agent simulation of world wars.
  arXiv preprint arXiv:2311.17227.
  Cited by: [§A.3](https://arxiv.org/html/2506.19806v3#A1.SS3.p2.1 "A.3 LLMs in Social Simulations ‣ Appendix A Related Works ‣ LLM-Based Social Simulations Require a Boundary"),
  [Table 2](https://arxiv.org/html/2506.19806v3#A3.T2.5.1.7.1 "In Appendix C Review of Experimental Design Factors of Current Works ‣ LLM-Based Social Simulations Require a Boundary"),
  [Table 1](https://arxiv.org/html/2506.19806v3#S5.T1.10.7.1.1.1 "In 5 Reviewing Current LLM-Based Social Simulations through the Lens of Our Methodology ‣ LLM-Based Social Simulations Require a Boundary").
- Huang et al. (2024)
  Y. Huang, Z. Yuan, Y. Zhou, K. Guo, X. Wang, H. Zhuang, W. Sun, L. Sun, J. Wang, Y. Ye, et al.
  Social science meets llms: how reliable are large language models in social simulations?.
  arXiv preprint arXiv:2410.23426.
  Cited by: [§B.1](https://arxiv.org/html/2506.19806v3#A2.SS1.p1.1 "B.1 Temporal Consistency ‣ Appendix B Other Potential Boundaries ‣ LLM-Based Social Simulations Require a Boundary").
- Huynh et al. (2025)
  T. Huynh, D. Dao-Sy, T. Cao, P. Le, H. Nguyen, P. Nguyen-Lam, M. Nguyen-Vo, H. Pham, P. Pham, T. Than, et al.
  Understanding llm agent behaviours via game theory: strategy recognition, biases and multi-agent dynamics.
  arXiv preprint arXiv:2512.07462.
  Cited by: [Table 2](https://arxiv.org/html/2506.19806v3#A3.T2.5.1.13.1 "In Appendix C Review of Experimental Design Factors of Current Works ‣ LLM-Based Social Simulations Require a Boundary"),
  [Table 1](https://arxiv.org/html/2506.19806v3#S5.T1.10.13.1.1.1 "In 5 Reviewing Current LLM-Based Social Simulations through the Lens of Our Methodology ‣ LLM-Based Social Simulations Require a Boundary").
- Jackson et al. (2017)
  J. C. Jackson, D. Rand, K. Lewis, M. I. Norton, and K. Gray
  Agent-based modeling: a guide for social psychologists.
  Social Psychological and Personality Science 8 (4), pp. 387–395.
  Cited by: [§1](https://arxiv.org/html/2506.19806v3#S1.p1.1 "1 Introduction ‣ LLM-Based Social Simulations Require a Boundary").
- Jin et al. (2024)
  Z. Jin, M. Kleiman-Weiner, G. Piatti, S. Levine, J. Liu, F. G. Adauto, F. Ortu, A. Strausz, M. Sachan, R. Mihalcea, et al.
  Multilingual trolley problems for language models.
  In Pluralistic Alignment Workshop at NeurIPS 2024,
  Cited by: [§4.2](https://arxiv.org/html/2506.19806v3#S4.SS2.SSS0.Px2.p3.1 "Case 2: Low Variance, Mean Deviated ‣ 4.2 Applicability and Claim Boundaries ‣ 4 LLM-Based Simulations Lack Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").
- Jung et al. (2025)
  S. Jung, J. Salminen, K. K. Aldous, and B. J. Jansen
  PersonaCraft: leveraging language models for data-driven persona development.
  International Journal of Human-Computer Studies 197, pp. 103445.
  Cited by: [§G.1](https://arxiv.org/html/2506.19806v3#A7.SS1.p1.1 "G.1 Challenges in Existing Approaches ‣ Appendix G Challenges and Directions for Improving Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").
- Klein et al. (2014)
  R. A. Klein, K. A. Ratliff, M. Vianello, R. B. Adams Jr, Š. Bahník, M. J. Bernstein, K. Bocian, M. J. Brandt, B. Brooks, C. C. Brumbaugh, et al.
  Investigating variation in replicability.
  Social psychology.
  Cited by: [item 3](https://arxiv.org/html/2506.19806v3#A6.I1.i3.p1.1 "In Appendix F Recommendations for Future Research ‣ LLM-Based Social Simulations Require a Boundary").
- Kozlowski and Evans (2024)
  A. Kozlowski and J. Evans
  Simulating subjects: the promise and peril of ai stand-ins for social agents and interactions.
   SocArXiv.
  Cited by: [§6](https://arxiv.org/html/2506.19806v3#S6.p5.1 "6 Alternative Views ‣ LLM-Based Social Simulations Require a Boundary").
- Larooij and Törnberg (2025)
  M. Larooij and P. Törnberg
  Do large language models solve the problems of agent-based modeling? a critical review of generative social simulations.
  arXiv preprint arXiv:2504.03274.
  Cited by: [§A.3](https://arxiv.org/html/2506.19806v3#A1.SS3.p2.1 "A.3 LLMs in Social Simulations ‣ Appendix A Related Works ‣ LLM-Based Social Simulations Require a Boundary"),
  [§B.2](https://arxiv.org/html/2506.19806v3#A2.SS2.p1.1 "B.2 Robustness ‣ Appendix B Other Potential Boundaries ‣ LLM-Based Social Simulations Require a Boundary"),
  [§1](https://arxiv.org/html/2506.19806v3#S1.p2.1 "1 Introduction ‣ LLM-Based Social Simulations Require a Boundary"),
  [§2.1](https://arxiv.org/html/2506.19806v3#S2.SS1.p2.1 "2.1 Objectives of Social Simulations ‣ 2 LLM-Based Social Simulations ‣ LLM-Based Social Simulations Require a Boundary"),
  [§6](https://arxiv.org/html/2506.19806v3#S6.p3.1 "6 Alternative Views ‣ LLM-Based Social Simulations Require a Boundary").
- Lau et al. (2024)
  G. K. R. Lau, W. Hu, L. Diwen, C. Jizhuo, S. Ng, and B. K. H. Low
  Dipper: diversity in prompts for producing large language model ensembles in reasoning tasks.
  In MINT: Foundation Model Interventions,
  Cited by: [§4.2](https://arxiv.org/html/2506.19806v3#S4.SS2.SSS0.Px1.p2.1 "Case 1: Low Variance, Mean Aligned ‣ 4.2 Applicability and Claim Boundaries ‣ 4 LLM-Based Simulations Lack Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").
- Li et al. (2025a)
  A. Li, H. Chen, H. Namkoong, and T. Peng
  LLM generated persona is a promise with a catch.
  arXiv preprint arXiv:2503.16527.
  Cited by: [§6](https://arxiv.org/html/2506.19806v3#S6.p3.1 "6 Alternative Views ‣ LLM-Based Social Simulations Require a Boundary").
- Li et al. (2025b)
  C. J. Li, J. Wu, Z. Mo, A. Qu, Y. Tang, K. I. Zhao, Y. Gan, J. Fan, J. Yu, J. Zhao, et al.
  Simulating society requires simulating thought.
  In The Thirty-Ninth Annual Conference on Neural Information Processing Systems Position Paper Track,
  Cited by: [§6](https://arxiv.org/html/2506.19806v3#S6.p5.1 "6 Alternative Views ‣ LLM-Based Social Simulations Require a Boundary").
- Li et al. (2025c)
  J. Li, J. Guan, S. Wu, W. Wu, and R. Yan
  From 1,000,000 users to every user: scaling up personalized preference for user-level alignment.
  arXiv preprint arXiv:2503.15463.
  Cited by: [§G.1](https://arxiv.org/html/2506.19806v3#A7.SS1.p1.1 "G.1 Challenges in Existing Approaches ‣ Appendix G Challenges and Directions for Improving Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary"),
  [§G.2](https://arxiv.org/html/2506.19806v3#A7.SS2.p2.1 "G.2 Potential Directions ‣ Appendix G Challenges and Directions for Improving Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").
- Li et al. (2024)
  N. Li, C. Gao, M. Li, Y. Li, and Q. Liao
  EconAgent: large language model-empowered agents for simulating macroeconomic activities.
  In Proceedings of the 62nd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers),
  pp. 15523–15536.
  Cited by: [Table 2](https://arxiv.org/html/2506.19806v3#A3.T2.5.1.10.1 "In Appendix C Review of Experimental Design Factors of Current Works ‣ LLM-Based Social Simulations Require a Boundary"),
  [§1](https://arxiv.org/html/2506.19806v3#S1.p2.1 "1 Introduction ‣ LLM-Based Social Simulations Require a Boundary"),
  [Table 1](https://arxiv.org/html/2506.19806v3#S5.T1.10.10.1.1.1 "In 5 Reviewing Current LLM-Based Social Simulations through the Lens of Our Methodology ‣ LLM-Based Social Simulations Require a Boundary").
- Lin et al. (2024)
  X. Lin, X. Yu, A. Aich, S. Giorgi, and L. Ungar
  DiverseDialogue: a methodology for designing chatbots with human-like diversity.
  arXiv preprint arXiv:2409.00262.
  Cited by: [§4.2](https://arxiv.org/html/2506.19806v3#S4.SS2.SSS0.Px2.p2.1 "Case 2: Low Variance, Mean Deviated ‣ 4.2 Applicability and Claim Boundaries ‣ 4 LLM-Based Simulations Lack Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").
- Liu et al. (2024a)
  A. Liu, M. Diab, and D. Fried
  Evaluating large language model biases in persona-steered generation.
  In Findings of the Association for Computational Linguistics ACL 2024,
  pp. 9832–9850.
  Cited by: [§4.1](https://arxiv.org/html/2506.19806v3#S4.SS1.p3.1 "4.1 “Average Persona”: Origin of Limited Heterogeneity ‣ 4 LLM-Based Simulations Lack Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").
- Liu et al. (2024b)
  X. Liu, H. Yu, H. Zhang, Y. Xu, X. Lei, H. Lai, Y. Gu, H. Ding, K. Men, K. Yang, et al.
  AgentBench: evaluating llms as agents.
  In ICLR,
  Cited by: [§B.4](https://arxiv.org/html/2506.19806v3#A2.SS4.p1.1 "B.4 Environment Design ‣ Appendix B Other Potential Boundaries ‣ LLM-Based Social Simulations Require a Boundary"),
  [§2.2](https://arxiv.org/html/2506.19806v3#S2.SS2.SSS0.Px1.p1.1 "Usage Problems ‣ 2.2 Challenges that LLM-Based Simulations Face ‣ 2 LLM-Based Social Simulations ‣ LLM-Based Social Simulations Require a Boundary").
- Liu et al. (2023)
  Y. Liu, Y. Yao, J. Ton, X. Zhang, R. Guo, H. Cheng, Y. Klochkov, M. F. Taufiq, and H. Li
  Trustworthy llms: a survey and guideline for evaluating large language models’ alignment.
  arXiv preprint arXiv:2308.05374.
  Cited by: [§G.2](https://arxiv.org/html/2506.19806v3#A7.SS2.p3.1 "G.2 Potential Directions ‣ Appendix G Challenges and Directions for Improving Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").
- Liu et al. (2024c)
  Y. Liu, X. Chen, X. Zhang, X. Gao, J. Zhang, and R. Yan
  From skepticism to acceptance: simulating the attitude dynamics toward fake news.
  arXiv preprint arXiv:2403.09498.
  Cited by: [1st item](https://arxiv.org/html/2506.19806v3#A3.I1.i1.p1.1 "In Appendix C Review of Experimental Design Factors of Current Works ‣ LLM-Based Social Simulations Require a Boundary"),
  [2nd item](https://arxiv.org/html/2506.19806v3#A3.I1.i2.p1.1 "In Appendix C Review of Experimental Design Factors of Current Works ‣ LLM-Based Social Simulations Require a Boundary"),
  [4th item](https://arxiv.org/html/2506.19806v3#A3.I1.i4.p1.1 "In Appendix C Review of Experimental Design Factors of Current Works ‣ LLM-Based Social Simulations Require a Boundary"),
  [Table 2](https://arxiv.org/html/2506.19806v3#A3.T2.5.1.6.1 "In Appendix C Review of Experimental Design Factors of Current Works ‣ LLM-Based Social Simulations Require a Boundary"),
  [§5.1](https://arxiv.org/html/2506.19806v3#S5.SS1.SSS0.Px3.p1.1 "Heterogeneity Requirements Often Exceed Validation Depth ‣ 5.1 Key Observations ‣ 5 Reviewing Current LLM-Based Social Simulations through the Lens of Our Methodology ‣ LLM-Based Social Simulations Require a Boundary"),
  [Table 1](https://arxiv.org/html/2506.19806v3#S5.T1.10.6.1.1.1 "In 5 Reviewing Current LLM-Based Social Simulations through the Lens of Our Methodology ‣ LLM-Based Social Simulations Require a Boundary").
- Liu et al. (2024d)
  Z. Liu, X. Yang, Z. Liu, Y. Xia, W. Jiang, Y. Zhang, L. Li, G. Fan, L. Song, and B. Jiang
  Knowing what not to do: leverage language model insights for action space pruning in multi-agent reinforcement learning.
  arXiv preprint arXiv:2405.16854.
  Cited by: [§2.2](https://arxiv.org/html/2506.19806v3#S2.SS2.SSS0.Px1.p1.1 "Usage Problems ‣ 2.2 Challenges that LLM-Based Simulations Face ‣ 2 LLM-Based Social Simulations ‣ LLM-Based Social Simulations Require a Boundary").
- Lopez-Lira (2025)
  A. Lopez-Lira
  Can large language models trade? testing financial theories with llm agents in market simulations.
  arXiv preprint arXiv:2504.10789.
  Cited by: [Table 2](https://arxiv.org/html/2506.19806v3#A3.T2.5.1.3.1 "In Appendix C Review of Experimental Design Factors of Current Works ‣ LLM-Based Social Simulations Require a Boundary"),
  [§5.1](https://arxiv.org/html/2506.19806v3#S5.SS1.SSS0.Px3.p1.1 "Heterogeneity Requirements Often Exceed Validation Depth ‣ 5.1 Key Observations ‣ 5 Reviewing Current LLM-Based Social Simulations through the Lens of Our Methodology ‣ LLM-Based Social Simulations Require a Boundary"),
  [§5.1](https://arxiv.org/html/2506.19806v3#S5.SS1.SSS0.Px4.p1.1 "Claim Levels Are Generally Appropriate ‣ 5.1 Key Observations ‣ 5 Reviewing Current LLM-Based Social Simulations through the Lens of Our Methodology ‣ LLM-Based Social Simulations Require a Boundary"),
  [Table 1](https://arxiv.org/html/2506.19806v3#S5.T1.10.3.1.1.1 "In 5 Reviewing Current LLM-Based Social Simulations through the Lens of Our Methodology ‣ LLM-Based Social Simulations Require a Boundary").
- Lorè and Heydari (2024)
  N. Lorè and B. Heydari
  Strategic behavior of large language models and the role of game structure versus contextual framing.
  Scientific Reports 14 (1), pp. 18490.
  Cited by: [§A.3](https://arxiv.org/html/2506.19806v3#A1.SS3.p2.1 "A.3 LLMs in Social Simulations ‣ Appendix A Related Works ‣ LLM-Based Social Simulations Require a Boundary").
- Lorig et al. (2021)
  F. Lorig, E. Johansson, and P. Davidsson
  Agent-based social simulation of the covid-19 pandemic: a systematic review.
  JASSS: Journal of Artificial Societies and Social Simulation 24 (3).
  Cited by: [§3.2](https://arxiv.org/html/2506.19806v3#S3.SS2.SSS0.Px2.p1.1 "The Critical Role of Heterogeneity ‣ 3.2 Homogeneity and Heterogeneity ‣ 3 Alignment and Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").
- Louth (2011)
  J. Louth
  From newton to newtonianism: reductionism and the development of the social sciences..
  Emergence: Complexity & Organization 13 (4).
  Cited by: [§3.1](https://arxiv.org/html/2506.19806v3#S3.SS1.p1.1 "3.1 From Individual to Collective Alignment ‣ 3 Alignment and Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").
- Lu et al. (2021)
  A. Lu, H. Ling, and Z. Ding
  How does the heterogeneity of members affect the evolution of group opinions?.
  Discrete Dynamics in Nature and Society 2021 (1), pp. 8827048.
  Cited by: [§3.1](https://arxiv.org/html/2506.19806v3#S3.SS1.p3.1 "3.1 From Individual to Collective Alignment ‣ 3 Alignment and Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").
- Lu (2024)
  S. E. Lu
  Strategic interactions between large language models-based agents in beauty contests.
  arXiv preprint arXiv:2404.08492.
  Cited by: [§G.1](https://arxiv.org/html/2506.19806v3#A7.SS1.p1.1 "G.1 Challenges in Existing Approaches ‣ Appendix G Challenges and Directions for Improving Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary"),
  [§G.2](https://arxiv.org/html/2506.19806v3#A7.SS2.p3.1 "G.2 Potential Directions ‣ Appendix G Challenges and Directions for Improving Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").
- Ma et al. (2024)
  Q. Ma, X. Xue, D. Zhou, X. Yu, D. Liu, X. Zhang, Z. Zhao, Y. Shen, P. Ji, J. Li, et al.
  Computational experiments meet large language model based agents: a survey and perspective.
  arXiv preprint arXiv:2402.00262.
  Cited by: [§A.3](https://arxiv.org/html/2506.19806v3#A1.SS3.p1.1 "A.3 LLMs in Social Simulations ‣ Appendix A Related Works ‣ LLM-Based Social Simulations Require a Boundary"),
  [§A.3](https://arxiv.org/html/2506.19806v3#A1.SS3.p2.1 "A.3 LLMs in Social Simulations ‣ Appendix A Related Works ‣ LLM-Based Social Simulations Require a Boundary"),
  [§1](https://arxiv.org/html/2506.19806v3#S1.p1.1 "1 Introduction ‣ LLM-Based Social Simulations Require a Boundary"),
  [§1](https://arxiv.org/html/2506.19806v3#S1.p2.1 "1 Introduction ‣ LLM-Based Social Simulations Require a Boundary").
- Ma et al. (2025)
  X. Ma, R. Zhu, Z. Wang, J. Xiong, Q. Chen, H. Tang, L. J. Camp, and L. Ohno-Machado
  Enhancing patient-centric communication: leveraging llms to simulate patient perspectives.
  arXiv preprint arXiv:2501.06964.
  Cited by: [§A.3](https://arxiv.org/html/2506.19806v3#A1.SS3.p2.1 "A.3 LLMs in Social Simulations ‣ Appendix A Related Works ‣ LLM-Based Social Simulations Require a Boundary"),
  [§1](https://arxiv.org/html/2506.19806v3#S1.p2.1 "1 Introduction ‣ LLM-Based Social Simulations Require a Boundary"),
  [§1](https://arxiv.org/html/2506.19806v3#S1.p5.1 "1 Introduction ‣ LLM-Based Social Simulations Require a Boundary"),
  [§4.2](https://arxiv.org/html/2506.19806v3#S4.SS2.SSS0.Px2.p2.1 "Case 2: Low Variance, Mean Deviated ‣ 4.2 Applicability and Claim Boundaries ‣ 4 LLM-Based Simulations Lack Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").
- Ma et al. (2023)
  Z. Ma, J. Sansom, R. Peng, and J. Chai
  Towards a holistic landscape of situated theory of mind in large language models.
  arXiv preprint arXiv:2310.19619.
  Cited by: [§A.3](https://arxiv.org/html/2506.19806v3#A1.SS3.p1.1 "A.3 LLMs in Social Simulations ‣ Appendix A Related Works ‣ LLM-Based Social Simulations Require a Boundary").
- Maciejewski et al. (2014)
  W. Maciejewski, F. Fu, and C. Hauert
  Evolutionary game dynamics in populations with heterogenous structures.
  PLoS computational biology 10 (4), pp. e1003567.
  Cited by: [§3.2](https://arxiv.org/html/2506.19806v3#S3.SS2.SSS0.Px2.p2.1 "The Critical Role of Heterogeneity ‣ 3.2 Homogeneity and Heterogeneity ‣ 3 Alignment and Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").
- Mannekote et al. (2025)
  A. Mannekote, A. Davies, J. Kang, and K. E. Boyer
  Can llms reliably simulate human learner actions? a simulation authoring framework for open-ended learning environments.
  In Proceedings of the AAAI Conference on Artificial Intelligence,
  Vol. 39, pp. 29044–29052.
  Cited by: [§2.2](https://arxiv.org/html/2506.19806v3#S2.SS2.SSS0.Px1.p1.1 "Usage Problems ‣ 2.2 Challenges that LLM-Based Simulations Face ‣ 2 LLM-Based Social Simulations ‣ LLM-Based Social Simulations Require a Boundary").
- Manzo and Matthews (2014)
  G. Manzo and T. Matthews
  Potentialities and limitations of agent-based simulations.
  Revue française de sociologie 55 (4), pp. 653–688.
  Cited by: [§1](https://arxiv.org/html/2506.19806v3#S1.p1.1 "1 Introduction ‣ LLM-Based Social Simulations Require a Boundary").
- Mercure et al. (2016)
  J. Mercure, H. Pollitt, A. M. Bassi, J. E. Viñuales, and N. R. Edwards
  Modelling complex systems of heterogeneous agents to better design sustainability transitions policy.
  Global environmental change 37, pp. 102–115.
  Cited by: [§3.2](https://arxiv.org/html/2506.19806v3#S3.SS2.SSS0.Px2.p1.1 "The Critical Role of Heterogeneity ‣ 3.2 Homogeneity and Heterogeneity ‣ 3 Alignment and Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").
- Miller and Page (2009)
  J. H. Miller and S. E. Page
  Complex adaptive systems: an introduction to computational models of social life.
   Princeton university press.
  Cited by: [§3.1](https://arxiv.org/html/2506.19806v3#S3.SS1.p3.1 "3.1 From Individual to Collective Alignment ‣ 3 Alignment and Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary"),
  [§3.2](https://arxiv.org/html/2506.19806v3#S3.SS2.SSS0.Px2.p2.1 "The Critical Role of Heterogeneity ‣ 3.2 Homogeneity and Heterogeneity ‣ 3 Alignment and Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").
- Mohammadi (2024)
  B. Mohammadi
  Explaining large language models decisions using shapley values.
  arXiv preprint arXiv:2404.01332.
  Cited by: [§A.3](https://arxiv.org/html/2506.19806v3#A1.SS3.p2.1 "A.3 LLMs in Social Simulations ‣ Appendix A Related Works ‣ LLM-Based Social Simulations Require a Boundary"),
  [§1](https://arxiv.org/html/2506.19806v3#S1.p2.1 "1 Introduction ‣ LLM-Based Social Simulations Require a Boundary").
- Mondani and Swedberg (2022)
  H. Mondani and R. Swedberg
  What is a social pattern? rethinking a central social science term.
  Theory and society 51 (4), pp. 543–564.
  Cited by: [§A.1](https://arxiv.org/html/2506.19806v3#A1.SS1.p1.1 "A.1 Computational Social Science ‣ Appendix A Related Works ‣ LLM-Based Social Simulations Require a Boundary"),
  [§A.2](https://arxiv.org/html/2506.19806v3#A1.SS2.p1.1 "A.2 Agent-Based Modeling in Computational Social Science ‣ Appendix A Related Works ‣ LLM-Based Social Simulations Require a Boundary"),
  [§3.1](https://arxiv.org/html/2506.19806v3#S3.SS1.p3.1 "3.1 From Individual to Collective Alignment ‣ 3 Alignment and Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").
- Mou et al. (2024)
  X. Mou, X. Ding, Q. He, L. Wang, J. Liang, X. Zhang, L. Sun, J. Lin, J. Zhou, X. Huang, et al.
  From individual to society: a survey on social simulation driven by large language model-based agents.
  arXiv preprint arXiv:2412.03563.
  Cited by: [§A.3](https://arxiv.org/html/2506.19806v3#A1.SS3.p1.1 "A.3 LLMs in Social Simulations ‣ Appendix A Related Works ‣ LLM-Based Social Simulations Require a Boundary"),
  [§G.1](https://arxiv.org/html/2506.19806v3#A7.SS1.p1.1 "G.1 Challenges in Existing Approaches ‣ Appendix G Challenges and Directions for Improving Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary"),
  [Appendix H](https://arxiv.org/html/2506.19806v3#A8.p2.1 "Appendix H Challenges and Future Directions ‣ LLM-Based Social Simulations Require a Boundary"),
  [§3.1](https://arxiv.org/html/2506.19806v3#S3.SS1.p3.1 "3.1 From Individual to Collective Alignment ‣ 3 Alignment and Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").
- Mozikov et al. (2024)
  M. Mozikov, N. Severin, V. Bodishtianu, M. Glushanina, I. Nasonov, D. Orekhov, P. Vladislav, I. Makovetskiy, M. Baklashkin, V. Lavrentyev, et al.
  EAI: emotional decision-making of llms in strategic games and ethical dilemmas.
  Advances in Neural Information Processing Systems 37, pp. 53969–54002.
  Cited by: [2nd item](https://arxiv.org/html/2506.19806v3#A3.I1.i2.p1.1 "In Appendix C Review of Experimental Design Factors of Current Works ‣ LLM-Based Social Simulations Require a Boundary"),
  [3rd item](https://arxiv.org/html/2506.19806v3#A3.I1.i3.p1.1 "In Appendix C Review of Experimental Design Factors of Current Works ‣ LLM-Based Social Simulations Require a Boundary"),
  [Table 2](https://arxiv.org/html/2506.19806v3#A3.T2.5.1.25.1 "In Appendix C Review of Experimental Design Factors of Current Works ‣ LLM-Based Social Simulations Require a Boundary"),
  [§5.1](https://arxiv.org/html/2506.19806v3#S5.SS1.SSS0.Px4.p1.1 "Claim Levels Are Generally Appropriate ‣ 5.1 Key Observations ‣ 5 Reviewing Current LLM-Based Social Simulations through the Lens of Our Methodology ‣ LLM-Based Social Simulations Require a Boundary"),
  [Table 1](https://arxiv.org/html/2506.19806v3#S5.T1.10.25.1.1.1 "In 5 Reviewing Current LLM-Based Social Simulations through the Lens of Our Methodology ‣ LLM-Based Social Simulations Require a Boundary").
- Naous and Xu (2025)
  T. Naous and W. Xu
  On the origin of cultural biases in language models: from pre-training data to linguistic phenomena.
  arXiv preprint arXiv:2501.04662.
  Cited by: [§4.2](https://arxiv.org/html/2506.19806v3#S4.SS2.SSS0.Px2.p3.1 "Case 2: Low Variance, Mean Deviated ‣ 4.2 Applicability and Claim Boundaries ‣ 4 LLM-Based Simulations Lack Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").
- Navigli et al. (2023)
  R. Navigli, S. Conia, and B. Ross
  Biases in large language models: origins, inventory, and discussion.
  ACM Journal of Data and Information Quality 15 (2), pp. 1–21.
  Cited by: [§A.3](https://arxiv.org/html/2506.19806v3#A1.SS3.p2.1 "A.3 LLMs in Social Simulations ‣ Appendix A Related Works ‣ LLM-Based Social Simulations Require a Boundary"),
  [§1](https://arxiv.org/html/2506.19806v3#S1.p2.1 "1 Introduction ‣ LLM-Based Social Simulations Require a Boundary").
- Nguyen et al. (2025a)
  J. Nguyen, H. H. Khiem, C. L. Attubato, and F. Hofstätter
  Probing evaluation awareness of language models.
  In ICML Workshop on Technical AI Governance (TAIG),
  Cited by: [§2.1](https://arxiv.org/html/2506.19806v3#S2.SS1.p3.1 "2.1 Objectives of Social Simulations ‣ 2 LLM-Based Social Simulations ‣ LLM-Based Social Simulations Require a Boundary").
- Nguyen et al. (2025b)
  T. D. Nguyen, D. J. Watts, and M. E. Whiting
  Empirically evaluating commonsense intelligence in large language models with large-scale human judgments.
  arXiv preprint arXiv:2505.10309.
  Cited by: [§4.1](https://arxiv.org/html/2506.19806v3#S4.SS1.p3.1 "4.1 “Average Persona”: Origin of Limited Heterogeneity ‣ 4 LLM-Based Simulations Lack Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary"),
  [§4.2](https://arxiv.org/html/2506.19806v3#S4.SS2.SSS0.Px2.p4.1 "Case 2: Low Variance, Mean Deviated ‣ 4.2 Applicability and Claim Boundaries ‣ 4 LLM-Based Simulations Lack Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").
- Ojer et al. (2025)
  J. Ojer, M. Starnini, and R. Pastor-Satorras
  Social network heterogeneity promotes depolarization of multidimensional correlated opinions.
  Physical Review Research 7 (1), pp. 013207.
  Cited by: [§3.2](https://arxiv.org/html/2506.19806v3#S3.SS2.SSS0.Px2.p1.1 "The Critical Role of Heterogeneity ‣ 3.2 Homogeneity and Heterogeneity ‣ 3 Alignment and Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").
- Open Science Collaboration (2015)
  Open Science Collaboration
  Estimating the reproducibility of psychological science.
  Science 349 (6251), pp. aac4716.
  Cited by: [item 3](https://arxiv.org/html/2506.19806v3#A6.I1.i3.p1.1 "In Appendix F Recommendations for Future Research ‣ LLM-Based Social Simulations Require a Boundary").
- Orlikowski et al. (2025)
  M. Orlikowski, J. Pei, P. Röttger, P. Cimiano, D. Jurgens, and D. Hovy
  Beyond demographics: fine-tuning large language models to predict individuals’ subjective text perceptions.
  arXiv preprint arXiv:2502.20897.
  Cited by: [§2.1](https://arxiv.org/html/2506.19806v3#S2.SS1.p3.1 "2.1 Objectives of Social Simulations ‣ 2 LLM-Based Social Simulations ‣ LLM-Based Social Simulations Require a Boundary").
- Page (2012)
  S. E. Page
  Aggregation in agent-based models of economies.
  The Knowledge Engineering Review 27 (2), pp. 151–162.
  Cited by: [§1](https://arxiv.org/html/2506.19806v3#S1.p1.1 "1 Introduction ‣ LLM-Based Social Simulations Require a Boundary").
- Park et al. (2023)
  J. S. Park, J. O’Brien, C. J. Cai, M. R. Morris, P. Liang, and M. S. Bernstein
  Generative agents: interactive simulacra of human behavior.
  In Proceedings of the 36th annual acm symposium on user interface software and technology,
  pp. 1–22.
  Cited by: [§A.3](https://arxiv.org/html/2506.19806v3#A1.SS3.p1.1 "A.3 LLMs in Social Simulations ‣ Appendix A Related Works ‣ LLM-Based Social Simulations Require a Boundary").
- Park et al. (2022)
  J. S. Park, L. Popowski, C. Cai, M. R. Morris, P. Liang, and M. S. Bernstein
  Social simulacra: creating populated prototypes for social computing systems.
  In Proceedings of the 35th Annual ACM Symposium on User Interface Software and Technology,
  pp. 1–18.
  Cited by: [§G.1](https://arxiv.org/html/2506.19806v3#A7.SS1.p1.1 "G.1 Challenges in Existing Approaches ‣ Appendix G Challenges and Directions for Improving Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").
- Park et al. (2024)
  J. S. Park, C. Q. Zou, J. Kamphorst, N. Egan, A. Shaw, B. M. Hill, C. Cai, M. R. Morris, P. Liang, R. Willer, and M. S. Bernstein
  LLM agents grounded in self-reports enable general-purpose simulation of individuals.
  arXiv preprint arXiv:2411.10109.
  Cited by: [§G.1](https://arxiv.org/html/2506.19806v3#A7.SS1.p1.1 "G.1 Challenges in Existing Approaches ‣ Appendix G Challenges and Directions for Improving Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").
- Piatti et al. (2024)
  G. Piatti, Z. Jin, M. Kleiman-Weiner, B. Schölkopf, M. Sachan, and R. Mihalcea
  Cooperate or collapse: emergence of sustainable cooperation in a society of llm agents.
  Advances in Neural Information Processing Systems 37, pp. 111715–111759.
  Cited by: [Table 2](https://arxiv.org/html/2506.19806v3#A3.T2.5.1.18.1 "In Appendix C Review of Experimental Design Factors of Current Works ‣ LLM-Based Social Simulations Require a Boundary"),
  [§D.1](https://arxiv.org/html/2506.19806v3#A4.SS1.p6.1 "D.1 Research Question Type and Heterogeneity Requirement ‣ Appendix D Review Criteria for Systematic Analysis ‣ LLM-Based Social Simulations Require a Boundary"),
  [§5.2](https://arxiv.org/html/2506.19806v3#S5.SS2.SSS0.Px1.p1.1 "The Cooperation Paradox in Game-Theoretic Simulations ‣ 5.2 Navigating Contradictory Findings ‣ 5 Reviewing Current LLM-Based Social Simulations through the Lens of Our Methodology ‣ LLM-Based Social Simulations Require a Boundary"),
  [Table 1](https://arxiv.org/html/2506.19806v3#S5.T1.10.18.1.1.1 "In 5 Reviewing Current LLM-Based Social Simulations through the Lens of Our Methodology ‣ LLM-Based Social Simulations Require a Boundary").
- Polhill et al. (2021)
  J. G. Polhill, M. Hare, T. Bauermann, D. Anzola, E. Palmer, D. Salt, and P. Antosz
  Using agent-based models for prediction in complex and wicked systems.
  Journal of Artificial Societies and Social Simulation 24 (3).
  Cited by: [§2.1](https://arxiv.org/html/2506.19806v3#S2.SS1.p3.1 "2.1 Objectives of Social Simulations ‣ 2 LLM-Based Social Simulations ‣ LLM-Based Social Simulations Require a Boundary").
- Popper (2005)
  K. Popper
  The logic of scientific discovery.
   Routledge.
  Cited by: [Appendix H](https://arxiv.org/html/2506.19806v3#A8.p5.1 "Appendix H Challenges and Future Directions ‣ LLM-Based Social Simulations Require a Boundary").
- Prama et al. (2025)
  T. T. Prama, C. M. Danforth, and P. S. Dodds
  Misalignment of llm-generated personas with human perceptions in low-resource settings.
  arXiv preprint arXiv:2512.02058.
  Cited by: [§G.2](https://arxiv.org/html/2506.19806v3#A7.SS2.p4.1 "G.2 Potential Directions ‣ Appendix G Challenges and Directions for Improving Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").
- Puig et al. (2021)
  X. Puig, T. Shu, S. Li, Z. Wang, Y. Liao, J. B. Tenenbaum, S. Fidler, and A. Torralba
  Watch-and-help: a challenge for social perception and human-ai collaboration.
  In International Conference on Learning Representations,
  Cited by: [§1](https://arxiv.org/html/2506.19806v3#S1.p1.1 "1 Introduction ‣ LLM-Based Social Simulations Require a Boundary").
- Qian et al. (2024)
  C. Qian, W. Liu, H. Liu, N. Chen, Y. Dang, J. Li, C. Yang, W. Chen, Y. Su, X. Cong, et al.
  ChatDev: communicative agents for software development.
  In Proceedings of the 62nd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers),
  pp. 15174–15186.
  Cited by: [§3.2](https://arxiv.org/html/2506.19806v3#S3.SS2.SSS0.Px2.p1.1 "The Critical Role of Heterogeneity ‣ 3.2 Homogeneity and Heterogeneity ‣ 3 Alignment and Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").
- Reeves et al. (2022)
  D. C. Reeves, N. Willems, V. Shastry, and V. Rai
  Structural effects of agent heterogeneity in agent-based models: lessons from the social spread of COVID-19.
  Journal of Artificial Societies and Social Simulation 25 (3).
  Cited by: [§A.2](https://arxiv.org/html/2506.19806v3#A1.SS2.p2.1 "A.2 Agent-Based Modeling in Computational Social Science ‣ Appendix A Related Works ‣ LLM-Based Social Simulations Require a Boundary"),
  [§D.1](https://arxiv.org/html/2506.19806v3#A4.SS1.p4.1 "D.1 Research Question Type and Heterogeneity Requirement ‣ Appendix D Review Criteria for Systematic Analysis ‣ LLM-Based Social Simulations Require a Boundary"),
  [§1](https://arxiv.org/html/2506.19806v3#S1.p1.1 "1 Introduction ‣ LLM-Based Social Simulations Require a Boundary"),
  [§3.2](https://arxiv.org/html/2506.19806v3#S3.SS2.SSS0.Px2.p1.1 "The Critical Role of Heterogeneity ‣ 3.2 Homogeneity and Heterogeneity ‣ 3 Alignment and Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").
- Remondino et al. (2010)
  M. Remondino, A. M. Bruno, N. Miglietta, et al.
  Learning action selection strategies in complex social systems..
  In ICAART (2),
  pp. 274–281.
  Cited by: [§1](https://arxiv.org/html/2506.19806v3#S1.p1.1 "1 Introduction ‣ LLM-Based Social Simulations Require a Boundary").
- Ren et al. (2024)
  S. Ren, Z. Cui, R. Song, Z. Wang, and S. Hu
  Emergence of social norms in generative agent societies: principles and architecture.
  arXiv preprint arXiv:2403.08251.
  Cited by: [Table 2](https://arxiv.org/html/2506.19806v3#A3.T2.5.1.17.1 "In Appendix C Review of Experimental Design Factors of Current Works ‣ LLM-Based Social Simulations Require a Boundary"),
  [Table 1](https://arxiv.org/html/2506.19806v3#S5.T1.10.17.1.1.1 "In 5 Reviewing Current LLM-Based Social Simulations through the Lens of Our Methodology ‣ LLM-Based Social Simulations Require a Boundary").
- Reynolds (1987)
  C. W. Reynolds
  Flocks, herds and schools: a distributed behavioral model.
  In Proceedings of the 14th annual conference on Computer graphics and interactive techniques,
  pp. 25–34.
  Cited by: [§3.1](https://arxiv.org/html/2506.19806v3#S3.SS1.p2.1 "3.1 From Individual to Collective Alignment ‣ 3 Alignment and Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").
- Riaz et al. (2025)
  H. Riaz, S. S. Bhabesh, V. Arannil, M. Ballesteros, and G. Horwood
  MetaSynth: meta-prompting-driven agentic scaffolds for diverse synthetic data generation.
  In Findings of the Association for Computational Linguistics: ACL 2025,
  pp. 18770–18803.
  Cited by: [§G.2](https://arxiv.org/html/2506.19806v3#A7.SS2.p2.1 "G.2 Potential Directions ‣ Appendix G Challenges and Directions for Improving Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").
- Ronanki et al. (2024)
  K. Ronanki, B. Cabrero-Daniel, and C. Berger
  Prompt smells: an omen for undesirable generative ai outputs.
  In Proceedings of the IEEE/ACM 3rd International Conference on AI Engineering-Software Engineering for AI,
  pp. 286–287.
  Cited by: [§2.2](https://arxiv.org/html/2506.19806v3#S2.SS2.SSS0.Px1.p1.1 "Usage Problems ‣ 2.2 Challenges that LLM-Based Simulations Face ‣ 2 LLM-Based Social Simulations ‣ LLM-Based Social Simulations Require a Boundary").
- San Miguel et al. (2012)
  M. San Miguel, J. H. Johnson, J. Kertesz, K. Kaski, A. Díaz-Guilera, R. S. MacKay, V. Loreto, P. Erdi, and D. Helbing
  Challenges in complex systems science.
  The European Physical Journal Special Topics 214, pp. 245–271.
  Cited by: [§A.1](https://arxiv.org/html/2506.19806v3#A1.SS1.p1.1 "A.1 Computational Social Science ‣ Appendix A Related Works ‣ LLM-Based Social Simulations Require a Boundary"),
  [§1](https://arxiv.org/html/2506.19806v3#S1.p1.1 "1 Introduction ‣ LLM-Based Social Simulations Require a Boundary").
- Santurkar et al. (2023)
  S. Santurkar, E. Durmus, F. Ladhak, C. Lee, P. Liang, and T. Hashimoto
  Whose opinions do language models reflect?.
  In International Conference on Machine Learning,
  pp. 29971–30004.
  Cited by: [§4.2](https://arxiv.org/html/2506.19806v3#S4.SS2.SSS0.Px2.p2.1 "Case 2: Low Variance, Mean Deviated ‣ 4.2 Applicability and Claim Boundaries ‣ 4 LLM-Based Simulations Lack Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").
- Schelling (1971)
  T. C. Schelling
  Dynamic models of segregation.
  Journal of mathematical sociology 1 (2), pp. 143–186.
  Cited by: [§A.2](https://arxiv.org/html/2506.19806v3#A1.SS2.p1.1 "A.2 Agent-Based Modeling in Computational Social Science ‣ Appendix A Related Works ‣ LLM-Based Social Simulations Require a Boundary"),
  [§1](https://arxiv.org/html/2506.19806v3#S1.p1.1 "1 Introduction ‣ LLM-Based Social Simulations Require a Boundary"),
  [§2.1](https://arxiv.org/html/2506.19806v3#S2.SS1.p2.1 "2.1 Objectives of Social Simulations ‣ 2 LLM-Based Social Simulations ‣ LLM-Based Social Simulations Require a Boundary").
- Serapio-García et al. (2023)
  G. Serapio-García, M. Safdari, C. Crepy, L. Sun, S. Fitz, P. Romero, M. Abdulhai, A. Faust, and M. Matarić
  Personality traits in large language models.
  arXiv preprint arXiv:2307.00184.
  Cited by: [§G.1](https://arxiv.org/html/2506.19806v3#A7.SS1.p1.1 "G.1 Challenges in Existing Approaches ‣ Appendix G Challenges and Directions for Improving Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").
- Shrestha et al. (2024)
  P. Shrestha, D. Krpan, F. Koaik, R. Schnider, D. Sayess, and M. S. Binbaz
  Beyond weird: can synthetic survey participants substitute for humans in global policy research?.
  Behavioral Science & Policy 10 (2), pp. 26–45.
  Cited by: [§A.3](https://arxiv.org/html/2506.19806v3#A1.SS3.p2.1 "A.3 LLMs in Social Simulations ‣ Appendix A Related Works ‣ LLM-Based Social Simulations Require a Boundary"),
  [§1](https://arxiv.org/html/2506.19806v3#S1.p5.1 "1 Introduction ‣ LLM-Based Social Simulations Require a Boundary").
- Silverman and Bryden (2007)
  E. Silverman and J. Bryden
  From artificial societies to new social science theory.
  In European Conference on Artificial Life,
  pp. 565–574.
  Cited by: [§2.1](https://arxiv.org/html/2506.19806v3#S2.SS1.p1.1 "2.1 Objectives of Social Simulations ‣ 2 LLM-Based Social Simulations ‣ LLM-Based Social Simulations Require a Boundary"),
  [§2.2](https://arxiv.org/html/2506.19806v3#S2.SS2.SSS0.Px1.p1.1 "Usage Problems ‣ 2.2 Challenges that LLM-Based Simulations Face ‣ 2 LLM-Based Social Simulations ‣ LLM-Based Social Simulations Require a Boundary").
- Silverman and Bryden (2018)
  E. Silverman and J. Bryden
  Modelling for the social sciences.
  In Methodological Investigations in Agent-Based Modelling: With Applications for the Social Sciences,
  pp. 85–106.
  External Links: [Document](https://dx.doi.org/10.1007/978-3-319-72408-9%5F5)
  Cited by: [§2.1](https://arxiv.org/html/2506.19806v3#S2.SS1.p1.1 "2.1 Objectives of Social Simulations ‣ 2 LLM-Based Social Simulations ‣ LLM-Based Social Simulations Require a Boundary"),
  [§2.1](https://arxiv.org/html/2506.19806v3#S2.SS1.p2.1 "2.1 Objectives of Social Simulations ‣ 2 LLM-Based Social Simulations ‣ LLM-Based Social Simulations Require a Boundary").
- Singh et al. (2024)
  C. Singh, J. P. Inala, M. Galley, R. Caruana, and J. Gao
  Rethinking interpretability in the era of large language models.
  arXiv preprint arXiv:2402.01761.
  Cited by: [§4.2](https://arxiv.org/html/2506.19806v3#S4.SS2.SSS0.Px1.p3.1 "Case 1: Low Variance, Mean Aligned ‣ 4.2 Applicability and Claim Boundaries ‣ 4 LLM-Based Simulations Lack Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").
- Sprague and House (2017)
  D. A. Sprague and T. House
  Evidence for complex contagion models of social contagion from observational data.
  PloS one 12 (7), pp. e0180802.
  Cited by: [§3.2](https://arxiv.org/html/2506.19806v3#S3.SS2.SSS0.Px1.p1.1 "Homogeneity and Its Limitations ‣ 3.2 Homogeneity and Heterogeneity ‣ 3 Alignment and Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").
- Squazzoni et al. (2014)
  F. Squazzoni, W. Jager, and B. Edmonds
  Social simulation in the social sciences: a brief overview.
  Social Science Computer Review 32 (3), pp. 279–294.
  Cited by: [§A.1](https://arxiv.org/html/2506.19806v3#A1.SS1.p1.1 "A.1 Computational Social Science ‣ Appendix A Related Works ‣ LLM-Based Social Simulations Require a Boundary"),
  [§D.1](https://arxiv.org/html/2506.19806v3#A4.SS1.p1.1 "D.1 Research Question Type and Heterogeneity Requirement ‣ Appendix D Review Criteria for Systematic Analysis ‣ LLM-Based Social Simulations Require a Boundary"),
  [§3.1](https://arxiv.org/html/2506.19806v3#S3.SS1.p1.1 "3.1 From Individual to Collective Alignment ‣ 3 Alignment and Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary"),
  [§3.1](https://arxiv.org/html/2506.19806v3#S3.SS1.p3.1 "3.1 From Individual to Collective Alignment ‣ 3 Alignment and Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").
- Sreedhar et al. (2025)
  K. Sreedhar, A. Cai, J. Ma, J. V. Nickerson, and L. B. Chilton
  Simulating cooperative prosocial behavior with multi-agent llms: evidence and mechanisms for ai agents to inform policy decisions.
  In Proceedings of the 30th International Conference on Intelligent User Interfaces,
  pp. 1272–1286.
  Cited by: [§B.3](https://arxiv.org/html/2506.19806v3#A2.SS3.p1.1 "B.3 Interaction Structure ‣ Appendix B Other Potential Boundaries ‣ LLM-Based Social Simulations Require a Boundary"),
  [§6](https://arxiv.org/html/2506.19806v3#S6.p5.1 "6 Alternative Views ‣ LLM-Based Social Simulations Require a Boundary").
- Sreedhar and Chilton (2024)
  K. Sreedhar and L. Chilton
  Simulating human strategic behavior: comparing single and multi-agent llms.
  External Links: 2402.08189
  Cited by: [§1](https://arxiv.org/html/2506.19806v3#S1.p2.1 "1 Introduction ‣ LLM-Based Social Simulations Require a Boundary").
- Surve et al. (2023)
  A. Surve, A. Rathod, M. Surana, G. Malpani, A. Shamraj, S. R. Sankepally, R. Jain, and S. S. Mehta
  Multiagent simulators for social networks.
  arXiv preprint arXiv:2311.14712.
  Cited by: [§2.1](https://arxiv.org/html/2506.19806v3#S2.SS1.p2.1 "2.1 Objectives of Social Simulations ‣ 2 LLM-Based Social Simulations ‣ LLM-Based Social Simulations Require a Boundary").
- Tang et al. (2025a)
  J. Tang, H. Gao, X. Pan, L. Wang, H. Tan, D. Gao, Y. Chen, X. Chen, Y. Lin, Y. Li, et al.
  Gensim: a general social simulation platform with large language model based agents.
  In Proceedings of the 2025 Conference of the Nations of the Americas Chapter of the Association for Computational Linguistics: Human Language Technologies (System Demonstrations),
  pp. 143–150.
  Cited by: [1st item](https://arxiv.org/html/2506.19806v3#A3.I1.i1.p1.1 "In Appendix C Review of Experimental Design Factors of Current Works ‣ LLM-Based Social Simulations Require a Boundary"),
  [Table 2](https://arxiv.org/html/2506.19806v3#A3.T2.5.1.11.1 "In Appendix C Review of Experimental Design Factors of Current Works ‣ LLM-Based Social Simulations Require a Boundary"),
  [§D.1](https://arxiv.org/html/2506.19806v3#A4.SS1.p6.1 "D.1 Research Question Type and Heterogeneity Requirement ‣ Appendix D Review Criteria for Systematic Analysis ‣ LLM-Based Social Simulations Require a Boundary"),
  [§5.1](https://arxiv.org/html/2506.19806v3#S5.SS1.SSS0.Px2.p1.1 "Mean Alignment Is More Commonly Checked Than Variance ‣ 5.1 Key Observations ‣ 5 Reviewing Current LLM-Based Social Simulations through the Lens of Our Methodology ‣ LLM-Based Social Simulations Require a Boundary"),
  [§5.1](https://arxiv.org/html/2506.19806v3#S5.SS1.SSS0.Px3.p1.1 "Heterogeneity Requirements Often Exceed Validation Depth ‣ 5.1 Key Observations ‣ 5 Reviewing Current LLM-Based Social Simulations through the Lens of Our Methodology ‣ LLM-Based Social Simulations Require a Boundary"),
  [§5.1](https://arxiv.org/html/2506.19806v3#S5.SS1.SSS0.Px4.p1.1 "Claim Levels Are Generally Appropriate ‣ 5.1 Key Observations ‣ 5 Reviewing Current LLM-Based Social Simulations through the Lens of Our Methodology ‣ LLM-Based Social Simulations Require a Boundary"),
  [Table 1](https://arxiv.org/html/2506.19806v3#S5.T1.10.11.1.1.1 "In 5 Reviewing Current LLM-Based Social Simulations through the Lens of Our Methodology ‣ LLM-Based Social Simulations Require a Boundary").
- Tang et al. (2025b)
  Y. Tang, Y. Yang, and A. Abbasi
  PersonaFuse: a personality activation-driven framework for enhancing human-llm interactions.
  arXiv preprint arXiv:2509.07370.
  Cited by: [§G.2](https://arxiv.org/html/2506.19806v3#A7.SS2.p4.1 "G.2 Potential Directions ‣ Appendix G Challenges and Directions for Improving Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").
- Taubenfeld et al. (2024)
  A. Taubenfeld, Y. Dover, R. Reichart, and A. Goldstein
  Systematic biases in llm simulations of debates.
  In Proceedings of the 2024 Conference on Empirical Methods in Natural Language Processing,
  pp. 251–267.
  Cited by: [§4.1](https://arxiv.org/html/2506.19806v3#S4.SS1.p3.1 "4.1 “Average Persona”: Origin of Limited Heterogeneity ‣ 4 LLM-Based Simulations Lack Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").
- Tjuatja et al. (2024)
  L. Tjuatja, V. Chen, T. Wu, A. Talwalkwar, and G. Neubig
  Do llms exhibit human-like response biases? a case study in survey design.
  Transactions of the Association for Computational Linguistics 12, pp. 1011–1026.
  Cited by: [§4.2](https://arxiv.org/html/2506.19806v3#S4.SS2.SSS0.Px2.p3.1 "Case 2: Low Variance, Mean Deviated ‣ 4.2 Applicability and Claim Boundaries ‣ 4 LLM-Based Simulations Lack Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").
- Trott (2024)
  S. Trott
  Large language models and the wisdom of small crowds.
  Open Mind 8, pp. 723–738.
  Cited by: [§4.1](https://arxiv.org/html/2506.19806v3#S4.SS1.p3.1 "4.1 “Average Persona”: Origin of Limited Heterogeneity ‣ 4 LLM-Based Simulations Lack Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").
- Turner (1988)
  J. H. Turner
  A theory of social interaction.
   Stanford University Press.
  Cited by: [§A.2](https://arxiv.org/html/2506.19806v3#A1.SS2.p1.1 "A.2 Agent-Based Modeling in Computational Social Science ‣ Appendix A Related Works ‣ LLM-Based Social Simulations Require a Boundary").
- Venkit et al. (2026)
  P. N. Venkit, Y. Li, Y. Pruksachatkun, and C. Wu
  The need for a socially-grounded persona framework for user simulation.
  arXiv preprint arXiv:2601.07110.
  Cited by: [§G.2](https://arxiv.org/html/2506.19806v3#A7.SS2.p4.1 "G.2 Potential Directions ‣ Appendix G Challenges and Directions for Improving Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").
- von der Heyde et al. (2024)
  L. von der Heyde, A. Haensch, and A. Wenz
  United in diversity? contextual biases in llm-based predictions of the 2024 european parliament elections.
  arXiv preprint arXiv:2409.09045.
  Cited by: [§2.1](https://arxiv.org/html/2506.19806v3#S2.SS1.p3.1 "2.1 Objectives of Social Simulations ‣ 2 LLM-Based Social Simulations ‣ LLM-Based Social Simulations Require a Boundary").
- Wang et al. (2025a)
  A. Wang, J. Morgenstern, and J. P. Dickerson
  Large language models that replace human participants can harmfully misportray and flatten identity groups.
  Nature Machine Intelligence 7 (3), pp. 400–411.
  Cited by: [§4.1](https://arxiv.org/html/2506.19806v3#S4.SS1.p3.1 "4.1 “Average Persona”: Origin of Limited Heterogeneity ‣ 4 LLM-Based Simulations Lack Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").
- Wang et al. (2025b)
  C. Wang, Z. Liu, D. Yang, and X. Chen
  Decoding echo chambers: llm-powered simulations revealing polarization in social networks.
  In Proceedings of the 31st international conference on computational linguistics,
  pp. 3913–3923.
  Cited by: [1st item](https://arxiv.org/html/2506.19806v3#A3.I1.i1.p1.1 "In Appendix C Review of Experimental Design Factors of Current Works ‣ LLM-Based Social Simulations Require a Boundary"),
  [Table 2](https://arxiv.org/html/2506.19806v3#A3.T2.5.1.5.1 "In Appendix C Review of Experimental Design Factors of Current Works ‣ LLM-Based Social Simulations Require a Boundary"),
  [§5.1](https://arxiv.org/html/2506.19806v3#S5.SS1.SSS0.Px2.p1.1 "Mean Alignment Is More Commonly Checked Than Variance ‣ 5.1 Key Observations ‣ 5 Reviewing Current LLM-Based Social Simulations through the Lens of Our Methodology ‣ LLM-Based Social Simulations Require a Boundary"),
  [§5.1](https://arxiv.org/html/2506.19806v3#S5.SS1.SSS0.Px3.p1.1 "Heterogeneity Requirements Often Exceed Validation Depth ‣ 5.1 Key Observations ‣ 5 Reviewing Current LLM-Based Social Simulations through the Lens of Our Methodology ‣ LLM-Based Social Simulations Require a Boundary"),
  [Table 1](https://arxiv.org/html/2506.19806v3#S5.T1.10.5.1.1.1 "In 5 Reviewing Current LLM-Based Social Simulations through the Lens of Our Methodology ‣ LLM-Based Social Simulations Require a Boundary").
- Wang et al. (2024a)
  J. Wang, R. Jiang, C. Yang, Z. Wu, M. Onizuka, R. Shibasaki, N. Koshizuka, C. Xiao, et al.
  Large language models as urban residents: an llm agent framework for personal mobility generation.
  Advances in Neural Information Processing Systems 37, pp. 124547–124574.
  Cited by: [§4.2](https://arxiv.org/html/2506.19806v3#S4.SS2.SSS0.Px1.p3.1 "Case 1: Low Variance, Mean Aligned ‣ 4.2 Applicability and Claim Boundaries ‣ 4 LLM-Based Simulations Lack Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").
- Wang et al. (2010)
  J. Wang, F. Fu, and L. Wang
  Effects of heterogeneous wealth distribution on public cooperation with collective risk.
  Physical Review E—Statistical, Nonlinear, and Soft Matter Physics 82 (1), pp. 016102.
  Cited by: [§3.2](https://arxiv.org/html/2506.19806v3#S3.SS2.SSS0.Px2.p1.1 "The Critical Role of Heterogeneity ‣ 3.2 Homogeneity and Heterogeneity ‣ 3 Alignment and Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").
- Wang et al. (2023)
  L. Wang, J. Zhang, H. Yang, Z. Chen, J. Tang, Z. Zhang, X. Chen, Y. Lin, R. Song, W. X. Zhao, et al.
  User behavior simulation with large language model based agents.
  arXiv preprint arXiv:2306.02552.
  Cited by: [§1](https://arxiv.org/html/2506.19806v3#S1.p2.1 "1 Introduction ‣ LLM-Based Social Simulations Require a Boundary").
- Wang et al. (2025c)
  Q. Wang, Z. Tang, and B. He
  From chatgpt to deepseek: can llms simulate humanity?.
  arXiv preprint arXiv:2502.18210.
  Cited by: [§2.1](https://arxiv.org/html/2506.19806v3#S2.SS1.p3.1 "2.1 Objectives of Social Simulations ‣ 2 LLM-Based Social Simulations ‣ LLM-Based Social Simulations Require a Boundary").
- Wang et al. (2025d)
  Q. Wang, J. Wu, Z. Tang, B. Luo, N. Chen, W. Chen, and B. He
  What limits llm-based human simulation: llms or our design?.
  arXiv preprint arXiv:2501.08579.
  Cited by: [§2.1](https://arxiv.org/html/2506.19806v3#S2.SS1.p4.1 "2.1 Objectives of Social Simulations ‣ 2 LLM-Based Social Simulations ‣ LLM-Based Social Simulations Require a Boundary").
- Wang et al. (2024b)
  Y. Wang, Y. Chen, F. Zhong, L. Ma, and Y. Wang
  Simulating human-like daily activities with desire-driven autonomy.
  arXiv preprint arXiv:2412.06435.
  Cited by: [§A.3](https://arxiv.org/html/2506.19806v3#A1.SS3.p1.1 "A.3 LLMs in Social Simulations ‣ Appendix A Related Works ‣ LLM-Based Social Simulations Require a Boundary").
- Wang et al. (2025e)
  Z. Wang, D. Wang, Y. Xu, L. Zhou, and Y. Zhou
  Intelligent computing social modeling and methodological innovations in political science in the era of large language models.
  Journal of Chinese Political Science, pp. 1–36.
  Cited by: [§2.1](https://arxiv.org/html/2506.19806v3#S2.SS1.p3.1 "2.1 Objectives of Social Simulations ‣ 2 LLM-Based Social Simulations ‣ LLM-Based Social Simulations Require a Boundary").
- Warnakulasuriya et al. (2025)
  K. Warnakulasuriya, P. Dissanayake, N. De Silva, S. Cranefield, B. T. R. Savarimuthu, S. Ranathunga, and N. de Silva
  Evolution of cooperation in llm-agent societies: a preliminary study using different punishment strategies.
  arXiv preprint arXiv:2504.19487.
  Cited by: [§A.3](https://arxiv.org/html/2506.19806v3#A1.SS3.p2.1 "A.3 LLMs in Social Simulations ‣ Appendix A Related Works ‣ LLM-Based Social Simulations Require a Boundary").
- Watts (2017)
  D. J. Watts
  Should social science be more solution-oriented?.
  Nature Human Behaviour 1 (1), pp. 0015.
  Cited by: [Appendix H](https://arxiv.org/html/2506.19806v3#A8.p5.1 "Appendix H Challenges and Future Directions ‣ LLM-Based Social Simulations Require a Boundary").
- Wheeler-Brooks (2009)
  J. Wheeler-Brooks
  Structuration theory and critical consciousness: potential applications for social work practice.
  J. Soc. & Soc. Welfare 36, pp. 123.
  Cited by: [§A.1](https://arxiv.org/html/2506.19806v3#A1.SS1.p1.1 "A.1 Computational Social Science ‣ Appendix A Related Works ‣ LLM-Based Social Simulations Require a Boundary").
- Williams et al. (2022)
  T. G. Williams, D. G. Brown, S. D. Guikema, T. M. Logan, N. R. Magliocca, B. Müller, and C. E. Steger
  Integrating equity considerations into agent-based modeling: a conceptual framework and practical guidance.
  Journal of Artificial Societies and Social Simulation 25 (3).
  Cited by: [§A.2](https://arxiv.org/html/2506.19806v3#A1.SS2.p2.1 "A.2 Agent-Based Modeling in Computational Social Science ‣ Appendix A Related Works ‣ LLM-Based Social Simulations Require a Boundary").
- Wu et al. (2023)
  Z. Wu, R. Peng, X. Han, S. Zheng, Y. Zhang, and C. Xiao
  Smart agent-based modeling: on the use of large language models in computer simulations.
  arXiv preprint arXiv:2311.06330.
  Cited by: [§A.2](https://arxiv.org/html/2506.19806v3#A1.SS2.p2.1 "A.2 Agent-Based Modeling in Computational Social Science ‣ Appendix A Related Works ‣ LLM-Based Social Simulations Require a Boundary"),
  [§1](https://arxiv.org/html/2506.19806v3#S1.p1.1 "1 Introduction ‣ LLM-Based Social Simulations Require a Boundary"),
  [§4.2](https://arxiv.org/html/2506.19806v3#S4.SS2.SSS0.Px1.p2.1 "Case 1: Low Variance, Mean Aligned ‣ 4.2 Applicability and Claim Boundaries ‣ 4 LLM-Based Simulations Lack Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").
- Wu et al. (2024)
  Z. Wu, R. Peng, S. Zheng, Q. Liu, X. Han, B. Kwon, M. Onizuka, S. Tang, and C. Xiao
  Shall we team up: exploring spontaneous cooperation of competing llm agents.
  In Findings of the Association for Computational Linguistics: EMNLP 2024,
  pp. 5163–5186.
  Cited by: [2nd item](https://arxiv.org/html/2506.19806v3#A3.I1.i2.p1.1 "In Appendix C Review of Experimental Design Factors of Current Works ‣ LLM-Based Social Simulations Require a Boundary"),
  [3rd item](https://arxiv.org/html/2506.19806v3#A3.I1.i3.p1.1 "In Appendix C Review of Experimental Design Factors of Current Works ‣ LLM-Based Social Simulations Require a Boundary"),
  [4th item](https://arxiv.org/html/2506.19806v3#A3.I1.i4.p1.1 "In Appendix C Review of Experimental Design Factors of Current Works ‣ LLM-Based Social Simulations Require a Boundary"),
  [Table 2](https://arxiv.org/html/2506.19806v3#A3.T2.5.1.22.1 "In Appendix C Review of Experimental Design Factors of Current Works ‣ LLM-Based Social Simulations Require a Boundary"),
  [Figure 2](https://arxiv.org/html/2506.19806v3#S4.F2 "In Case 1: Low Variance, Mean Aligned ‣ 4.2 Applicability and Claim Boundaries ‣ 4 LLM-Based Simulations Lack Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary"),
  [Figure 2](https://arxiv.org/html/2506.19806v3#S4.F2.8 "In Case 1: Low Variance, Mean Aligned ‣ 4.2 Applicability and Claim Boundaries ‣ 4 LLM-Based Simulations Lack Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary"),
  [§4.2](https://arxiv.org/html/2506.19806v3#S4.SS2.SSS0.Px1.p2.1 "Case 1: Low Variance, Mean Aligned ‣ 4.2 Applicability and Claim Boundaries ‣ 4 LLM-Based Simulations Lack Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary"),
  [Table 1](https://arxiv.org/html/2506.19806v3#S5.T1.10.22.1.1.1 "In 5 Reviewing Current LLM-Based Social Simulations through the Lens of Our Methodology ‣ LLM-Based Social Simulations Require a Boundary").
- Xie et al. (2024)
  C. Xie, C. Chen, F. Jia, Z. Ye, S. Lai, K. Shu, J. Gu, A. Bibi, Z. Hu, D. Jurgens, et al.
  Can large language model agents simulate human trust behavior?.
  Advances in neural information processing systems 37, pp. 15674–15729.
  Cited by: [1st item](https://arxiv.org/html/2506.19806v3#A3.I1.i1.p1.1 "In Appendix C Review of Experimental Design Factors of Current Works ‣ LLM-Based Social Simulations Require a Boundary"),
  [3rd item](https://arxiv.org/html/2506.19806v3#A3.I1.i3.p1.1 "In Appendix C Review of Experimental Design Factors of Current Works ‣ LLM-Based Social Simulations Require a Boundary"),
  [Table 2](https://arxiv.org/html/2506.19806v3#A3.T2.5.1.19.1 "In Appendix C Review of Experimental Design Factors of Current Works ‣ LLM-Based Social Simulations Require a Boundary"),
  [Table 1](https://arxiv.org/html/2506.19806v3#S5.T1.10.19.1.1.1 "In 5 Reviewing Current LLM-Based Social Simulations through the Lens of Our Methodology ‣ LLM-Based Social Simulations Require a Boundary").
- Xu et al. (2014)
  B. Xu, R. Liu, and W. Liu
  Individual bias and organizational objectivity: an agent-based simulation.
  Journal of Artificial Societies and Social Simulation 17 (2), pp. 2.
  Cited by: [Appendix H](https://arxiv.org/html/2506.19806v3#A8.p3.1 "Appendix H Challenges and Future Directions ‣ LLM-Based Social Simulations Require a Boundary").
- Yang et al. (2024a)
  K. Yang, H. Li, H. Wen, T. Peng, J. Tang, and H. Liu
  Are large language models (llms) good social predictors?.
  In Findings of the Association for Computational Linguistics: EMNLP 2024,
  pp. 2718–2730.
  Cited by: [§2.1](https://arxiv.org/html/2506.19806v3#S2.SS1.p3.1 "2.1 Objectives of Social Simulations ‣ 2 LLM-Based Social Simulations ‣ LLM-Based Social Simulations Require a Boundary").
- Yang et al. (2024b)
  Y. Yang, H. Duan, J. Liu, and K. Y. Tam
  LLM-measure: generating valid, consistent, and reproducible text-based measures for social science research.
  arXiv preprint arXiv:2409.12722.
  Cited by: [§B.2](https://arxiv.org/html/2506.19806v3#A2.SS2.p2.1 "B.2 Robustness ‣ Appendix B Other Potential Boundaries ‣ LLM-Based Social Simulations Require a Boundary").
- Yang et al. (2024c)
  Z. Yang, Z. Zhang, Z. Zheng, Y. Jiang, Z. Gan, Z. Wang, Z. Ling, J. Chen, M. Ma, B. Dong, et al.
  Oasis: open agents social interaction simulations on one million agents.
  arXiv preprint arXiv:2411.11581.
  Cited by: [1st item](https://arxiv.org/html/2506.19806v3#A3.I1.i1.p1.1 "In Appendix C Review of Experimental Design Factors of Current Works ‣ LLM-Based Social Simulations Require a Boundary"),
  [2nd item](https://arxiv.org/html/2506.19806v3#A3.I1.i2.p1.1 "In Appendix C Review of Experimental Design Factors of Current Works ‣ LLM-Based Social Simulations Require a Boundary"),
  [4th item](https://arxiv.org/html/2506.19806v3#A3.I1.i4.p1.1 "In Appendix C Review of Experimental Design Factors of Current Works ‣ LLM-Based Social Simulations Require a Boundary"),
  [Table 2](https://arxiv.org/html/2506.19806v3#A3.T2.5.1.8.1 "In Appendix C Review of Experimental Design Factors of Current Works ‣ LLM-Based Social Simulations Require a Boundary"),
  [§1](https://arxiv.org/html/2506.19806v3#S1.p2.1 "1 Introduction ‣ LLM-Based Social Simulations Require a Boundary"),
  [§2.1](https://arxiv.org/html/2506.19806v3#S2.SS1.p3.1 "2.1 Objectives of Social Simulations ‣ 2 LLM-Based Social Simulations ‣ LLM-Based Social Simulations Require a Boundary"),
  [§5.1](https://arxiv.org/html/2506.19806v3#S5.SS1.SSS0.Px3.p1.1 "Heterogeneity Requirements Often Exceed Validation Depth ‣ 5.1 Key Observations ‣ 5 Reviewing Current LLM-Based Social Simulations through the Lens of Our Methodology ‣ LLM-Based Social Simulations Require a Boundary"),
  [Table 1](https://arxiv.org/html/2506.19806v3#S5.T1.10.8.1.1.1 "In 5 Reviewing Current LLM-Based Social Simulations through the Lens of Our Methodology ‣ LLM-Based Social Simulations Require a Boundary").
- Yao et al. (2023)
  J. Yao, K. Ning, Z. Liu, M. Ning, Y. Liu, and L. Yuan
  Llm lies: hallucinations are not bugs, but features as adversarial examples.
  arXiv preprint arXiv:2310.01469.
  Cited by: [§B.1](https://arxiv.org/html/2506.19806v3#A2.SS1.p1.1 "B.1 Temporal Consistency ‣ Appendix B Other Potential Boundaries ‣ LLM-Based Social Simulations Require a Boundary").
- Yim et al. (2024)
  Y. Yim, C. Chan, T. Shi, Z. Deng, W. Fan, T. Zheng, and Y. Song
  Evaluating and enhancing llms agent based on theory of mind in guandan: a multi-player cooperative game under imperfect information.
  arXiv preprint arXiv:2408.02559.
  Cited by: [§2.2](https://arxiv.org/html/2506.19806v3#S2.SS2.SSS0.Px1.p1.1 "Usage Problems ‣ 2.2 Challenges that LLM-Based Simulations Face ‣ 2 LLM-Based Social Simulations ‣ LLM-Based Social Simulations Require a Boundary").
- Yuan et al. (2024)
  Y. Yuan, K. Tang, J. Shen, M. Zhang, and C. Wang
  Measuring social norms of large language models.
  In Findings of the Association for Computational Linguistics: NAACL 2024,
  pp. 650–699.
  Cited by: [§G.2](https://arxiv.org/html/2506.19806v3#A7.SS2.p2.1 "G.2 Potential Directions ‣ Appendix G Challenges and Directions for Improving Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").
- Zhang et al. (2023)
  J. Zhang, X. Xu, N. Zhang, R. Liu, B. Hooi, and S. Deng
  Exploring collaboration mechanisms for llm agents: a social psychology view.
  arXiv preprint arXiv:2310.02124.
  Cited by: [Table 2](https://arxiv.org/html/2506.19806v3#A3.T2.5.1.14.1 "In Appendix C Review of Experimental Design Factors of Current Works ‣ LLM-Based Social Simulations Require a Boundary"),
  [Table 1](https://arxiv.org/html/2506.19806v3#S5.T1.10.14.1.1.1 "In 5 Reviewing Current LLM-Based Social Simulations through the Lens of Our Methodology ‣ LLM-Based Social Simulations Require a Boundary").
- Zhang et al. (2024a)
  M. Zhang, J. He, T. Ji, and C. Lu
  Don’t go to extremes: revealing the excessive sensitivity and calibration limitations of llms in implicit hate speech detection.
  In Proceedings of the 62nd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers),
  pp. 12073–12086.
  Cited by: [§B.2](https://arxiv.org/html/2506.19806v3#A2.SS2.p2.1 "B.2 Robustness ‣ Appendix B Other Potential Boundaries ‣ LLM-Based Social Simulations Require a Boundary").
- Zhang et al. (2025a)
  X. Zhang, J. Lin, X. Mou, S. Yang, X. Liu, L. Sun, H. Lyu, Y. Yang, W. Qi, Y. Chen, et al.
  SocioVerse: a world model for social simulation powered by llm agents and a pool of 10 million real-world users.
  arXiv preprint arXiv:2504.10157.
  Cited by: [§1](https://arxiv.org/html/2506.19806v3#S1.p2.1 "1 Introduction ‣ LLM-Based Social Simulations Require a Boundary"),
  [§2.1](https://arxiv.org/html/2506.19806v3#S2.SS1.p3.1 "2.1 Objectives of Social Simulations ‣ 2 LLM-Based Social Simulations ‣ LLM-Based Social Simulations Require a Boundary").
- Zhang et al. (2025b)
  Y. Zhang, S. Mao, T. Ge, X. Wang, Y. Xia, M. Lan, and F. Wei
  K-level reasoning: establishing higher order beliefs in large language models for strategic reasoning.
  In Proceedings of the 2025 Conference of the Nations of the Americas Chapter of the Association for Computational Linguistics: Human Language Technologies (Volume 1: Long Papers),
  pp. 7212–7234.
  Cited by: [§4.2](https://arxiv.org/html/2506.19806v3#S4.SS2.SSS0.Px1.p3.1 "Case 1: Low Variance, Mean Aligned ‣ 4.2 Applicability and Claim Boundaries ‣ 4 LLM-Based Simulations Lack Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").
- Zhang et al. (2024b)
  Z. Zhang, F. Hu, J. Lee, F. Shi, P. Kordjamshidi, J. Chai, and Z. Ma
  Do vision-language models represent space and how? evaluating spatial frame of reference under ambiguities.
  arXiv preprint arXiv:2410.17385.
  Cited by: [§4.2](https://arxiv.org/html/2506.19806v3#S4.SS2.SSS0.Px2.p3.1 "Case 2: Low Variance, Mean Deviated ‣ 4.2 Applicability and Claim Boundaries ‣ 4 LLM-Based Simulations Lack Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").
- Zhang et al. (2024c)
  Z. Zhang, D. Zhang-Li, J. Yu, L. Gong, J. Zhou, Z. Hao, J. Jiang, J. Cao, H. Liu, Z. Liu, et al.
  Simulating classroom education with llm-empowered agents.
  arXiv preprint arXiv:2406.19226.
  Cited by: [§1](https://arxiv.org/html/2506.19806v3#S1.p2.1 "1 Introduction ‣ LLM-Based Social Simulations Require a Boundary").
- Zheng et al. (2024)
  M. Zheng, J. Pei, L. Logeswaran, M. Lee, and D. Jurgens
  When ”a helpful assistant” is not really helpful: personas in system prompts do not improve performances of large language models.
  In Findings of the Association for Computational Linguistics: EMNLP 2024,
  pp. 15126–15154.
  Cited by: [§G.1](https://arxiv.org/html/2506.19806v3#A7.SS1.p2.1 "G.1 Challenges in Existing Approaches ‣ Appendix G Challenges and Directions for Improving Heterogeneity ‣ LLM-Based Social Simulations Require a Boundary").
- Zhou et al. (2025)
  J. Zhou, J. Huang, X. Zhou, M. H. Lam, X. Wang, H. Zhu, W. Wang, and M. Sap
  The pimmur principles: ensuring validity in collective behavior of llm societies.
  arXiv preprint arXiv:2509.18052.
  Cited by: [§2.1](https://arxiv.org/html/2506.19806v3#S2.SS1.p3.1 "2.1 Objectives of Social Simulations ‣ 2 LLM-Based Social Simulations ‣ LLM-Based Social Simulations Require a Boundary"),
  [§6](https://arxiv.org/html/2506.19806v3#S6.p4.1 "6 Alternative Views ‣ LLM-Based Social Simulations Require a Boundary").
- Zhou et al. (2023)
  X. Zhou, H. Zhu, L. Mathur, R. Zhang, H. Yu, Z. Qi, L. Morency, Y. Bisk, D. Fried, G. Neubig, et al.
  Sotopia: interactive evaluation for social intelligence in language agents.
  arXiv preprint arXiv:2310.11667.
  Cited by: [2nd item](https://arxiv.org/html/2506.19806v3#A3.I1.i2.p1.1 "In Appendix C Review of Experimental Design Factors of Current Works ‣ LLM-Based Social Simulations Require a Boundary"),
  [3rd item](https://arxiv.org/html/2506.19806v3#A3.I1.i3.p1.1 "In Appendix C Review of Experimental Design Factors of Current Works ‣ LLM-Based Social Simulations Require a Boundary"),
  [4th item](https://arxiv.org/html/2506.19806v3#A3.I1.i4.p1.1 "In Appendix C Review of Experimental Design Factors of Current Works ‣ LLM-Based Social Simulations Require a Boundary"),
  [Table 2](https://arxiv.org/html/2506.19806v3#A3.T2.5.1.15.1 "In Appendix C Review of Experimental Design Factors of Current Works ‣ LLM-Based Social Simulations Require a Boundary"),
  [§5.1](https://arxiv.org/html/2506.19806v3#S5.SS1.SSS0.Px3.p1.1 "Heterogeneity Requirements Often Exceed Validation Depth ‣ 5.1 Key Observations ‣ 5 Reviewing Current LLM-Based Social Simulations through the Lens of Our Methodology ‣ LLM-Based Social Simulations Require a Boundary"),
  [Table 1](https://arxiv.org/html/2506.19806v3#S5.T1.10.15.1.1.1 "In 5 Reviewing Current LLM-Based Social Simulations through the Lens of Our Methodology ‣ LLM-Based Social Simulations Require a Boundary").
- Zhu et al. (2023)
  K. Zhu, J. Wang, J. Zhou, Z. Wang, H. Chen, Y. Wang, L. Yang, W. Ye, Y. Zhang, N. Gong, et al.
  Promptrobust: towards evaluating the robustness of large language models on adversarial prompts.
  In Proceedings of the 1st ACM Workshop on Large AI Systems and Models with Privacy and Safety Analysis,
  pp. 57–68.
  Cited by: [§B.1](https://arxiv.org/html/2506.19806v3#A2.SS1.p1.1 "B.1 Temporal Consistency ‣ Appendix B Other Potential Boundaries ‣ LLM-Based Social Simulations Require a Boundary").
- Ziems et al. (2024)
  C. Ziems, W. Held, O. Shaikh, J. Chen, Z. Zhang, and D. Yang
  Can large language models transform computational social science?.
  Computational Linguistics 50 (1), pp. 237–291.
  Cited by: [§B.2](https://arxiv.org/html/2506.19806v3#A2.SS2.p2.1 "B.2 Robustness ‣ Appendix B Other Potential Boundaries ‣ LLM-Based Social Simulations Require a Boundary"),
  [§2.1](https://arxiv.org/html/2506.19806v3#S2.SS1.p3.1 "2.1 Objectives of Social Simulations ‣ 2 LLM-Based Social Simulations ‣ LLM-Based Social Simulations Require a Boundary").

## Appendix A Related Works

### A.1 Computational Social Science

Social phenomena typically arise from the interactions of intelligent, adaptive agents under dynamic conditions ([Eidelson, 1997](https://arxiv.org/html/2506.19806v3#bib.bib14); [San Miguel et al., 2012](https://arxiv.org/html/2506.19806v3#bib.bib13)). Even when we fully understand behavior at a small scale (e.g., personal behavior), we may not necessarily understand social phenomena at the macro scale ([Squazzoni et al., 2014](https://arxiv.org/html/2506.19806v3#bib.bib19)). This complexity presents enormous challenges for social science research, including interpreting causal relationships, determining the applicable scope of problems, and ensuring reproducibility of conclusions. This aligns with sociologist Giddens’ proposition that social structures and social practices are interrelated and difficult to find cause-and-effect relationships ([Giddens, 1986b](https://arxiv.org/html/2506.19806v3#bib.bib17); [Giddens, 1986a](https://arxiv.org/html/2506.19806v3#bib.bib16); [Wheeler-Brooks, 2009](https://arxiv.org/html/2506.19806v3#bib.bib18)). Therefore, traditional social science methods, such as surveys and laboratory experiments, struggle to capture the nonlinear and emergent dynamics of real-world social systems. Consequently, they are prone to deriving erroneous patterns from data (known as “apophenia”), and may overlook failure modes not incorporated into the patterns ([Abell and Reyniers, 2000](https://arxiv.org/html/2506.19806v3#bib.bib22); [Bragues, 2011](https://arxiv.org/html/2506.19806v3#bib.bib21); [Mondani and Swedberg, 2022](https://arxiv.org/html/2506.19806v3#bib.bib20)). These challenges have driven the rise of computational social science, which attempts to use algorithmic, data-driven, and simulation-based approaches to model and interpret complex social behaviors at scale.

### A.2 Agent-Based Modeling in Computational Social Science

ABM has been a foundational method in computational social science, enabling researchers to simulate macro-level outcomes from simple micro-level behavioral rules ([Bonabeau, 2002](https://arxiv.org/html/2506.19806v3#bib.bib8)). Classic examples include Sugarscape ([Epstein, 1999](https://arxiv.org/html/2506.19806v3#bib.bib9)) and Schelling’s segregation model ([Schelling, 1971](https://arxiv.org/html/2506.19806v3#bib.bib10)), which illustrate how wealth gaps or segregation patterns can emerge from individual interactions. Despite disagreements and inconsistencies within social science theories, many works agree that social interaction is the fundamental unit of sociological analysis and plays a crucial role in research, rather than focusing solely on individual behavior or macro structures ([Gerring, 2001](https://arxiv.org/html/2506.19806v3#bib.bib11); [Mondani and Swedberg, 2022](https://arxiv.org/html/2506.19806v3#bib.bib20); [Turner, 1988](https://arxiv.org/html/2506.19806v3#bib.bib12)). By ABM, the modeling of social interaction can fill the gap in this micro-macro linkage.

ABM provides explanatory power through controlled simulations, but its limitations are widely acknowledged. These include reliance on hard-coded rules or heuristics, difficulty in encoding subjective behaviors, poor agent adaptability, and simplification of heterogeneity ([Edmonds and Moss, 2004](https://arxiv.org/html/2506.19806v3#bib.bib25); [Reeves et al., 2022](https://arxiv.org/html/2506.19806v3#bib.bib24); [Wu et al., 2023](https://arxiv.org/html/2506.19806v3#bib.bib23)). Moreover, the need for handcrafted agent behavior risks introducing researcher bias, and limits the scalability and generalizability of such models to real-world complexity ([Williams et al., 2022](https://arxiv.org/html/2506.19806v3#bib.bib121)).

### A.3 LLMs in Social Simulations

Recently, the emergence of LLMs has reignited interest in agent-based simulation by enabling more natural, flexible, and human-like behavioral modeling. LLM agents demonstrate powerful capabilities in understanding ambiguous instructions, simulating subjective decision-making, and generating explanations in natural language ([Adornetto et al., 2025](https://arxiv.org/html/2506.19806v3#bib.bib27); [Ma et al., 2024](https://arxiv.org/html/2506.19806v3#bib.bib38); [Park et al., 2023](https://arxiv.org/html/2506.19806v3#bib.bib26)). They show potential across various social science domains: (1) From the technical perspective, LLMs’ powerful natural language capabilities and theory of mind (ToM) capabilities expand the boundaries of traditional simulations. For example, the use of LLM agents enables subjective behavioral modeling and the ability to understand ambiguous natural language instructions ([Wang et al., 2024b](https://arxiv.org/html/2506.19806v3#bib.bib36)), allows simulation of theory of mind capabilities ([Ma et al., 2023](https://arxiv.org/html/2506.19806v3#bib.bib41)), enhances interpretability through generative explanations ([Epstein, 2023](https://arxiv.org/html/2506.19806v3#bib.bib39); [Ma et al., 2024](https://arxiv.org/html/2506.19806v3#bib.bib38)), and offers ethical and cost advantages compared to human subject experiments ([Mou et al., 2024](https://arxiv.org/html/2506.19806v3#bib.bib35)). (2) From the modeling perspective, LLM agents’ generalization capabilities can be leveraged to test various scenarios, creating value across interdisciplinary fields ([Mou et al., 2024](https://arxiv.org/html/2506.19806v3#bib.bib35)) and improving the fidelity of complex behaviors such as interaction, collaboration, and gaming ([Ma et al., 2024](https://arxiv.org/html/2506.19806v3#bib.bib38)). (3) Exploratory studies have demonstrated human-like behavior, with performance approaching that of humans in certain experiments ([Anthis et al., 2025](https://arxiv.org/html/2506.19806v3#bib.bib37)).

However, recent criticisms have highlighted significant limitations. LLM agents may inherit and amplify social biases present in their training data ([Ashery et al., 2025](https://arxiv.org/html/2506.19806v3#bib.bib7); [Mohammadi, 2024](https://arxiv.org/html/2506.19806v3#bib.bib4); [Navigli et al., 2023](https://arxiv.org/html/2506.19806v3#bib.bib2)), lack sufficient behavioral heterogeneity ([Ma et al., 2025](https://arxiv.org/html/2506.19806v3#bib.bib3)), lack human characteristics such as the ability to learn independently and memory ([Ma et al., 2024](https://arxiv.org/html/2506.19806v3#bib.bib38)), and lack transparency and interpretability due to their black-box nature ([Larooij and Törnberg, 2025](https://arxiv.org/html/2506.19806v3#bib.bib1)). Furthermore, they tend to collapse to high-probability responses, which limits their ability to simulate the diversity of real human behavior, particularly in contexts with high subjectivity or cultural variability ([Shrestha et al., 2024](https://arxiv.org/html/2506.19806v3#bib.bib45)). Validating simulation results and their generalizability to real-world phenomena remains a major open question ([Chuang et al., 2024a](https://arxiv.org/html/2506.19806v3#bib.bib42); [Hua et al., 2023](https://arxiv.org/html/2506.19806v3#bib.bib43); [Lorè and Heydari, 2024](https://arxiv.org/html/2506.19806v3#bib.bib47); [Warnakulasuriya et al., 2025](https://arxiv.org/html/2506.19806v3#bib.bib46)). These situations pose challenges in translating the potentials discovered in existing works into findings.

## Appendix B Other Potential Boundaries

Beyond the alignment and heterogeneity issues discussed in the main text, other boundary conditions affect the reliability of LLM-based social simulations. We briefly discuss four additional considerations: temporal consistency, robustness, interaction structure, and environment design.

### B.1 Temporal Consistency

In multi-round social simulations, LLM agents may fail to maintain cognitive consistency in their roles during extended interactions ([Huang et al., 2024](https://arxiv.org/html/2506.19806v3#bib.bib6)). Unlike single-round Q&A, long-term simulations require agents to behave consistently over time. However, LLMs lack continuous memory capabilities and respond passively to context. Each API call produces independent responses related only to current input, even when previous actions are reprompted to simulate memory. Slight differences in context across rounds may cause the same agent to produce inconsistent reactions ([Yao et al., 2023](https://arxiv.org/html/2506.19806v3#bib.bib90); [Zhu et al., 2023](https://arxiv.org/html/2506.19806v3#bib.bib89)).

When an agent’s behavioral traits significantly influence other agents’ behaviors, inconsistency-induced trait changes may alter macro patterns in the simulation. Without verification of temporal consistency, researchers might misinterpret pattern changes as emergent phenomena rather than recognizing them as artifacts of LLM limitations.

Implications for researchers: For long-term simulations, researchers are suggested to verify that key agent characteristics remain stable across rounds, and distinguish between genuine emergent dynamics and artifacts of persona drift.

### B.2 Robustness

Robustness refers to whether simulation conclusions remain stable and reproducible under different parameter settings, conditions, and perturbations. The difficulty of LLMs in providing repeatable results is a major challenge, and necessary sensitivity analysis practices are rarely implemented ([Larooij and Törnberg, 2025](https://arxiv.org/html/2506.19806v3#bib.bib1)).

In LLM-based simulations, robustness is primarily verified through sensitivity analysis: examining whether qualitative patterns are sensitive to minor differences in context or prompts ([Hosseini and Horbach, 2023](https://arxiv.org/html/2506.19806v3#bib.bib113); [Yang et al., 2024b](https://arxiv.org/html/2506.19806v3#bib.bib114); [Ziems et al., 2024](https://arxiv.org/html/2506.19806v3#bib.bib75)). LLM sensitivity varies significantly; in some situations, LLMs display excessive sensitivity towards certain groups or topics, while in others they achieve better balance ([Zhang et al., 2024a](https://arxiv.org/html/2506.19806v3#bib.bib120)). Whether simulations maintain discovered patterns under perturbations constitutes one boundary of the simulatable range.

Recommended sensitivity checks: Researchers should test robustness across multiple dimensions: prompt wording (do minor rephrasings change outcomes?), persona descriptions (are results stable across paraphrased definitions?), initial conditions (do different starting configurations yield consistent patterns?), and model parameters (how do temperature and other settings affect conclusions?).

### B.3 Interaction Structure

The design of interaction mechanisms can substantially affect what social behaviors emerge in simulation. [Sreedhar et al. (2025)](https://arxiv.org/html/2506.19806v3#bib.bib167) demonstrated that enabling authentic social behaviors such as cheating or cooperation requires specific simulation mechanisms (e.g., private communication channels and stake-prompting), without which models fail to capture the complexity of human decision-making. This suggests that validity is often a function of architectural design choices in the simulation framework, not solely of the underlying model’s capability. Researchers should therefore consider whether their interaction structure (pairwise, group, network) adequately supports the social phenomena under investigation, and report how structural choices may constrain or enable the behaviors observed.

### B.4 Environment Design

The action space and environmental constraints of a simulation shape the range of possible agent behaviors. Overly large action spaces can lead to invalid or implausible behaviors ([Guo et al., 2024](https://arxiv.org/html/2506.19806v3#bib.bib109); [Liu et al., 2024b](https://arxiv.org/html/2506.19806v3#bib.bib110)), while overly constrained environments may prevent the emergence of the very phenomena researchers seek to study. Environment design also includes how information is made available to agents (full observability vs. partial), how time progresses (synchronous vs. asynchronous updates), and what feedback agents receive from their actions. These choices interact with LLM capabilities in non-trivial ways and can independently affect simulation outcomes.

## Appendix C Review of Experimental Design Factors of Current Works

Table 2: Experimental design factors across the 21 reviewed LLM-based social simulation studies, ordered by heterogeneity requirement (same as Table [1](https://arxiv.org/html/2506.19806v3#S5.T1 "Table 1 ‣ 5 Reviewing Current LLM-Based Social Simulations through the Lens of Our Methodology ‣ LLM-Based Social Simulations Require a Boundary")). Persona: D=Demographic, P=Personality-based, DD=Data-driven, M=Minimal/None, Auto.=Automated. Prompting is characterized along two axes: reasoning depth (Zero-shot / CoT / Multi-step) and memory mechanism (None / History / Reflection). Temp.: temperature setting; NR=Not Reported. Var.: variance comparison result from Table [1](https://arxiv.org/html/2506.19806v3#S5.T1 "Table 1 ‣ 5 Reviewing Current LLM-Based Social Simulations through the Lens of Our Methodology ‣ LLM-Based Social Simulations Require a Boundary"); Comp.=Comparable to human, Low=Lower than human, –=Not reported.

|  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- |
| Paper | Het. | Persona | Prompting | Model(s) | Temp. | Agents | Interaction | Var. |
| High Heterogeneity Requirement | | | | | | | | |
| [Lopez-Lira (2025)](https://arxiv.org/html/2506.19806v3#bib.bib152) | High | P | CoT; history | GPT-4o | NR | 8–10 | Group | – |
| [Chuang et al. (2024a)](https://arxiv.org/html/2506.19806v3#bib.bib42) | High | D | CoT; reflection | GPT-3.5/4; Vicuna | 0.7 | 10–20 | Pairwise | – |
| [Wang et al. (2025b)](https://arxiv.org/html/2506.19806v3#bib.bib157) | High | D+P | Multi-step; reflection | GPT-4o-mini | NR | 50 | Network | Comp. |
| [Liu et al. (2024c)](https://arxiv.org/html/2506.19806v3#bib.bib158) | High | D+P | Multi-step; reflection | GPT-3.5 | NR | 30 | Network | Low |
| [Hua et al. (2023)](https://arxiv.org/html/2506.19806v3#bib.bib43) | High | DD+P | Multi-step; history | GPT-3.5/4; Claude-2 | NR | 7–8 | Group | – |
| [Yang et al. (2024c)](https://arxiv.org/html/2506.19806v3#bib.bib33) | High | DD+D+P | CoT; history | Llama3-8B (+others) | NR | $\sim$1M | Network | Low |
| [Gao et al. (2023)](https://arxiv.org/html/2506.19806v3#bib.bib150) | High | DD+D | Zero-shot; history | GPT-3.5; ChatGLM | NR | 8.5K–18K | Network | – |
| [Li et al. (2024)](https://arxiv.org/html/2506.19806v3#bib.bib28) | High | D+DD | Multi-step; reflection | GPT-3.5 | NR | 100–300 | Group | – |
| [Tang et al. (2025a)](https://arxiv.org/html/2506.19806v3#bib.bib151) | High | D | Zero-shot; history | LLaMA3-8B; GPT-4o | NR | $\sim$100K | Hybrid | Comp. |
| Medium Heterogeneity Requirement | | | | | | | | |
| [Huynh et al. (2025)](https://arxiv.org/html/2506.19806v3#bib.bib156) | Med | P | Zero-shot; history | GPT-4o; Claude; Mistral; Llama | NR | 2–3 | Pairwise/Group | – |
| [Zhang et al. (2023)](https://arxiv.org/html/2506.19806v3#bib.bib162) | Med | P | Multi-step; reflection | GPT-3.5; LLaMA2; Qwen | 0.0–0.75 | 2–10 | Group | – |
| [Zhou et al. (2023)](https://arxiv.org/html/2506.19806v3#bib.bib160) | Med | D+P | Zero-shot; history | GPT-4/3.5; LLaMA2; MPT | 1.0 | 2 | Pairwise | Low |
| [Chen et al. (2024)](https://arxiv.org/html/2506.19806v3#bib.bib56) | Med | Auto. | CoT; reflection | GPT-3.5/4 | NR | 2–4 | Group | – |
| [Ren et al. (2024)](https://arxiv.org/html/2506.19806v3#bib.bib161) | Med | P | CoT; reflection | GPT-3.5/4 | NR | 10 | Group | – |
| [Piatti et al. (2024)](https://arxiv.org/html/2506.19806v3#bib.bib172) | Med | M | CoT; history | 15 models | 0.0 | 5 | Group | – |
| [Xie et al. (2024)](https://arxiv.org/html/2506.19806v3#bib.bib159) | Med | D | CoT; reflection | GPT-3.5/4; LLaMA2; Vicuna | 1.0 | 53 | Pairwise | Low |
| Low Heterogeneity Requirement | | | | | | | | |
| [Horton et al. (2023)](https://arxiv.org/html/2506.19806v3#bib.bib153) | Low | P+D | Zero-shot; none | GPT-3 | NR | $\sim$100 | Single | Low |
| [Wu et al. (2024)](https://arxiv.org/html/2506.19806v3#bib.bib69) | Low | M | Multi-step; history | GPT-4; Claude-3; GPT-3.5 | 0.0–1.2 | 2–400 | Hybrid | Low |
| [Fontana et al. (2025)](https://arxiv.org/html/2506.19806v3#bib.bib154) | Low | M | Zero-shot; history | LLaMA2/3-70B; GPT-3.5 | 0.7 | 1 (scripted) | Pairwise | – |
| [Akata et al. (2025)](https://arxiv.org/html/2506.19806v3#bib.bib40) | Low | M | CoT; history | GPT-4; davinci; Claude-2; LLaMA2 | 0.0 | 2 | Pairwise | – |
| [Mozikov et al. (2024)](https://arxiv.org/html/2506.19806v3#bib.bib155) | Low | M | CoT; history | GPT-3.5/4/4o; Claude; +others | 0.0–1.0 | 2+ (varied) | Pairwise/Group | Low |

Table [2](https://arxiv.org/html/2506.19806v3#A3.T2 "Table 2 ‣ Appendix C Review of Experimental Design Factors of Current Works ‣ LLM-Based Social Simulations Require a Boundary") documents the experimental design choices across the 21 reviewed studies in Section [5](https://arxiv.org/html/2506.19806v3#S5 "5 Reviewing Current LLM-Based Social Simulations through the Lens of Our Methodology ‣ LLM-Based Social Simulations Require a Boundary"). A key observation is that lower-than-human variance appears across highly diverse design configurations. Among the 9 papers that explicitly assessed variance:

- •

  Persona construction does not reliably predict variance outcomes. Both comparable-variance studies used demographic-based personas ([Wang et al. (2025b)](https://arxiv.org/html/2506.19806v3#bib.bib157): D+P; [Tang et al. (2025a)](https://arxiv.org/html/2506.19806v3#bib.bib151): D), but the same persona types also appear in lower-variance studies (e.g., [Liu et al. (2024c)](https://arxiv.org/html/2506.19806v3#bib.bib158): D+P; [Xie et al. (2024)](https://arxiv.org/html/2506.19806v3#bib.bib159): D with 53 personas). Even the most richly specified construction, which combines data-driven, demographic, and personality-based approaches ([Yang et al., 2024c](https://arxiv.org/html/2506.19806v3#bib.bib33)), still produced lower-than-human variance.
- •

  Model choice shows no clear association. Lower variance was observed across GPT-3 ([Horton et al., 2023](https://arxiv.org/html/2506.19806v3#bib.bib153)), GPT-3.5 ([Liu et al., 2024c](https://arxiv.org/html/2506.19806v3#bib.bib158)), GPT-4 ([Wu et al., 2024](https://arxiv.org/html/2506.19806v3#bib.bib69)), Llama ([Yang et al., 2024c](https://arxiv.org/html/2506.19806v3#bib.bib33)), and multi-model comparisons ([Mozikov et al., 2024](https://arxiv.org/html/2506.19806v3#bib.bib155); [Zhou et al., 2023](https://arxiv.org/html/2506.19806v3#bib.bib160)). The two comparable-variance studies used GPT-4o-mini and LLaMA3-8B/GPT-4o, both of which also appeared in lower-variance contexts.
- •

  Temperature settings do not resolve the issue. Lower variance persists at both $T{=}0.0$ ([Mozikov et al., 2024](https://arxiv.org/html/2506.19806v3#bib.bib155)) (for its main experiment) and $T{=}1.0$ ([Zhou et al., 2023](https://arxiv.org/html/2506.19806v3#bib.bib160); [Xie et al., 2024](https://arxiv.org/html/2506.19806v3#bib.bib159)), and [Wu et al. (2024)](https://arxiv.org/html/2506.19806v3#bib.bib69) explicitly tested 0.0–1.2 while still reporting lower variance.
- •

  Interaction structure and scale are similarly inconclusive. Lower variance appears in pairwise ([Zhou et al., 2023](https://arxiv.org/html/2506.19806v3#bib.bib160)), network ([Liu et al., 2024c](https://arxiv.org/html/2506.19806v3#bib.bib158); [Yang et al., 2024c](https://arxiv.org/html/2506.19806v3#bib.bib33)), hybrid ([Wu et al., 2024](https://arxiv.org/html/2506.19806v3#bib.bib69)), and single-agent ([Horton et al., 2023](https://arxiv.org/html/2506.19806v3#bib.bib153)) settings, spanning 2 to $\sim$1M agents.

This cross-cutting pattern suggests that insufficient behavioral heterogeneity is not primarily attributable to any particular design decision, but rather reflects a more fundamental characteristic of current LLMs. This supports the distinction between usage problems and boundary problems in Section [2.2](https://arxiv.org/html/2506.19806v3#S2.SS2 "2.2 Challenges that LLM-Based Simulations Face ‣ 2 LLM-Based Social Simulations ‣ LLM-Based Social Simulations Require a Boundary"): while design choices can influence heterogeneity, they do not appear sufficient to overcome the inherent tendency of LLMs toward behavioral homogeneity.

## Appendix D Review Criteria for Systematic Analysis

This appendix details the criteria used to evaluate papers in Table [1](https://arxiv.org/html/2506.19806v3#S5.T1 "Table 1 ‣ 5 Reviewing Current LLM-Based Social Simulations through the Lens of Our Methodology ‣ LLM-Based Social Simulations Require a Boundary").

### D.1 Research Question Type and Heterogeneity Requirement

Our classification draws on established frameworks in computational
social science and ABM literature. Following [Squazzoni et al. (2014)](https://arxiv.org/html/2506.19806v3#bib.bib19) and  [Edmonds et al. (2019)](https://arxiv.org/html/2506.19806v3#bib.bib127), we recognize
that different modeling purposes impose different requirements on
agent heterogeneity. We adapt this idea to categorize research
questions by the degree to which behavioral variance (rather than
just central tendency) is essential to the phenomenon under study.

We classified research questions into the following types:

- •

  Equilibrium: Whether a system can reach a particular stable state.
- •

  Central Tendency: How average or typical behavior evolves over time.
- •

  Distribution: Properties concerning the full distribution of behaviors (inequality, polarization, and diversity).
- •

  Tipping Point: Critical thresholds, phase transitions, or cascade phenomena.
- •

  Path-dependent: Outcomes that depend on the sequence or history of actions.

Based on these types, we assigned heterogeneity requirements following the principle that *research questions whose answers depend on distributional properties (not just averages) require higher agent heterogeneity*  ([Reeves et al., 2022](https://arxiv.org/html/2506.19806v3#bib.bib24))

- •

  Low: Questions primarily concerning equilibrium existence or central tendency dynamics, where the specific distribution shape matters less.
- •

  Medium: Questions involving some distributional aspects but where central tendencies remain important.
- •

  High: Questions fundamentally concerning distribution shape, tails, subgroup differences, tipping points, or path-dependent dynamics.

We acknowledge that this classification involves judgment calls. The primary criterion was: *“Would the research question still be answerable if all agents behaved identically at the population mean?”* If yes, heterogeneity requirement was coded as Low; if partially, Medium; if no, High. For instance, the primary question in  [Piatti et al. (2024)](https://arxiv.org/html/2506.19806v3#bib.bib172) is to investigate collective survival phenomena, while this work also measured inequality using the Gini coefficient. In this case, we regard this as a Medium case. Another example is  [Tang et al. (2025a)](https://arxiv.org/html/2506.19806v3#bib.bib151). It is a High case as the paper indicated “a small number of individuals may lead to very large fluctuations of the simulation results”. For borderline cases (e.g., studies that examine both equilibrium existence and distributional properties), heterogeneity requirement was coded based on the primary research question as stated by the authors.

### D.2 Ground Truth Categories

- •

  Human Experiment: Controlled experimental data from human participants.
- •

  Observational Data: Real-world behavioral records (e.g., social media data and transaction logs).
- •

  Literature: Qualitative comparison with established findings in prior research.
- •

  None: No human behavioral baseline provided.

Sample size indicators: Large (L) = thousands of data points or participants; Medium (M) = hundreds; Small (S) = fewer than 100.

### D.3 Alignment Assessment

Mean Alignment was marked as checked (✓) if the paper explicitly compared average LLM agent behavior against human baselines. Results were categorized as:

- •

  Aligned: LLM mean behavior is statistically or qualitatively consistent with human average.
- •

  Deviated: LLM mean behavior significantly differs from human average.
- •

  Mixed: Alignment varies across conditions or measures.

Variance was marked as checked (✓) if the paper explicitly examined the spread or diversity of LLM agent behaviors. If real human data is available for comparison, the results are further classified as:

- •

  Comparable: LLM behavioral variance is similar to human population variance.
- •

  Lower: LLM behavioral variance is notably less than human population variance.
- •

  (None): The variance of the simulation data was reported, but was not directly compared with the ground truth.

### D.4 Claim Level

- •

  Individual Trajectory: Claims about specific agent behaviors or decision paths.
- •

  Collective-Qualitative: Claims about qualitative collective patterns or trends.
- •

  Collective-Quantitative: Claims about precise quantitative metrics matching human data.

### D.5 Sensitivity Analysis

- •

  Yes: Systematic testing across multiple dimensions (prompt variations, model choices, parameters, initial conditions).
- •

  Partial: Testing on at least one dimension but not comprehensive.
- •

  No: No sensitivity analysis reported.

## Appendix E When Is Heterogeneity Less Critical?

While we emphasize heterogeneity’s importance, not all research questions have equal requirements for behavioral diversity.

#### Lower Heterogeneity Requirements

The following research question examples may tolerate lower agent heterogeneity:

- •

  Equilibrium existence: When research asks whether a system *can* reach a particular state (e.g., “Can markets clear?”), the specific path or distribution may matter less than the qualitative outcome.
- •

  Central tendency dynamics: When studying how average behavior evolves (e.g., “Which direction does mean opinion shift?”), the distribution spread may be less critical.
- •

  Structural effects: When outcomes are driven primarily by network structure or spatial arrangement rather than agent diversity.
- •

  Robustness demonstrations: When showing that a pattern emerges “even under” simplified conditions, homogeneous agents can serve as a conservative test.

#### Higher Heterogeneity Requirements

Conversely, these research questions fundamentally require heterogeneity and may be unsuitable for current LLM-based simulations:

- •

  Distributional properties: Studying inequality, polarization, or outcomes where distribution *shape* matters (not just the mean).
- •

  Tipping points: Understanding when systems undergo phase transitions often depends on heterogeneous distributions of thresholds or sensitivities.
- •

  Path-dependent outcomes: When the sequence of who acts first matters, heterogeneity in timing and responsiveness is essential.
- •

  Minority influence: Studying how small groups or rare behaviors affect collective outcomes requires capturing distribution tails.
- •

  Subgroup-specific dynamics: Research targeting specific demographic or social subgroups, especially marginalized groups likely underrepresented in LLM training data.

#### Decision Heuristic

As a practical heuristic: “If I replaced every agent with the population mean, would my research question still be answerable?” If yes, heterogeneity requirements are likely lower. If no, because the question concerns variance, tails, or subgroup differences, current LLM-based simulations may not be appropriate.

## Appendix F Recommendations for Future Research

Based on the observations from our systematic review (Section [5](https://arxiv.org/html/2506.19806v3#S5 "5 Reviewing Current LLM-Based Social Simulations through the Lens of Our Methodology ‣ LLM-Based Social Simulations Require a Boundary")), we offer the following recommendations:

1. 1.

   Match validation depth to research questions. Studies investigating distributional properties, tipping points, or path-dependent phenomena should prioritize variance validation, not just mean alignment.
2. 2.

   Report variance explicitly. Even when variance appears lower than human baselines, documenting this limitation helps readers appropriately scope the findings. Future work should establish threshold values for “acceptable” divergence from human baselines, potentially through community consensus or meta-analytic benchmarks.
3. 3.

   Leverage existing human data. Domains with accumulated experimental data offer more tractable starting points for validated simulation research. Also, initiatives such as Many Labs ([Klein et al., 2014](https://arxiv.org/html/2506.19806v3#bib.bib174)) and the Reproducibility Project ([Open Science Collaboration, 2015](https://arxiv.org/html/2506.19806v3#bib.bib173)) provide pre-registered, multi-site human data that can serve as robust benchmarks.
4. 4.

   Develop domain-specific benchmarks. For domains where ground truth is difficult to obtain (e.g., large-scale social network dynamics), the community would benefit from shared benchmark datasets and evaluation protocols.
5. 5.

   Conduct contradiction analysis. Researchers may actively search for and document existing studies that report findings potentially contradicting their own. This “contradiction audit” should examine whether observed LLM behaviors (e.g., cooperation levels, opinion distributions, and decision-making patterns) align with or diverge from related works using different models, prompting strategies, or experimental designs. When contradictions are identified, researchers can explicitly discuss possible sources of divergence, including model version differences, task-framing variations, and temporal instability, rather than treating the findings in isolation. This practice will help establish the boundary conditions under which specific LLM behavioral patterns hold and prevent the spread of incompatible claims in the literature.

## Appendix G Challenges and Directions for Improving Heterogeneity

### G.1 Challenges in Existing Approaches

Various methods aim to construct diverse agents, including prompt engineering ([Park et al., 2022](https://arxiv.org/html/2506.19806v3#bib.bib65)), personality-based prompting ([Serapio-García et al., 2023](https://arxiv.org/html/2506.19806v3#bib.bib66)), character modeling from interviews ([Jung et al., 2025](https://arxiv.org/html/2506.19806v3#bib.bib84); [Park et al., 2024](https://arxiv.org/html/2506.19806v3#bib.bib81)), and large-scale data alignment ([Ge et al., 2024](https://arxiv.org/html/2506.19806v3#bib.bib83); [Li et al., 2025c](https://arxiv.org/html/2506.19806v3#bib.bib82)). However, these approaches face limitations. Prompt engineering often cannot eliminate bias, especially for minority groups. Large-scale alignment is costly, with scarce high-quality data and anonymity issues affecting generalization ([Li et al., 2025c](https://arxiv.org/html/2506.19806v3#bib.bib82)). As simulation scale increases, detailed modeling costs rise dramatically, forcing trade-offs between precision and scale ([Chen et al., 2025](https://arxiv.org/html/2506.19806v3#bib.bib85); [Mou et al., 2024](https://arxiv.org/html/2506.19806v3#bib.bib35)). Multi-LLM approaches still show behaviors concentrating on few strategies ([Fontana et al., 2025](https://arxiv.org/html/2506.19806v3#bib.bib154); [Lu, 2024](https://arxiv.org/html/2506.19806v3#bib.bib119)).

Furthermore, individual-level alignment does not guarantee collective alignment. Bias removal may weaken knowledge maintenance and performance ([Chen et al., 2025](https://arxiv.org/html/2506.19806v3#bib.bib85)). Standardized methods to confirm which approaches achieve both diverse and aligned heterogeneity remain lacking, and effects of adding personas can be inconsistent across contexts ([Zheng et al., 2024](https://arxiv.org/html/2506.19806v3#bib.bib94)). Prompting may capture only superficial personas, struggling to represent deep beliefs and decision-making processes.

### G.2 Potential Directions

Several research directions may help address these limitations, though none has yet been demonstrated to fully resolve them.

From a *data* perspective, curating training corpora that better represent social and cultural diversity, informed by sociolinguistic theories of language variation ([Yuan et al., 2024](https://arxiv.org/html/2506.19806v3#bib.bib176); [Li et al., 2025c](https://arxiv.org/html/2506.19806v3#bib.bib82); [Grieve et al., 2025](https://arxiv.org/html/2506.19806v3#bib.bib179)), may help preserve distributional tails that current training objectives suppress. Meta-prompting-driven approaches for generating diverse synthetic data ([Riaz et al., 2025](https://arxiv.org/html/2506.19806v3#bib.bib184)) suggest that carefully mixing real-world and synthetic data may mitigate long-tail collapse, though their applicability to social simulation remains to be tested.

From a *feedback* perspective, designing reward signals that value response diversity beyond average preferences could reduce homogenization during alignment ([Achintalwar et al., 2024](https://arxiv.org/html/2506.19806v3#bib.bib178); [Liu et al., 2023](https://arxiv.org/html/2506.19806v3#bib.bib177)). *Hybrid aggregation* strategies that combine human and LLM sources show promise for mitigating bias through complementary strengths in accuracy and diversity ([Abels and Lenaerts, 2025](https://arxiv.org/html/2506.19806v3#bib.bib180)). *Multi-model ensembles* using multiple LLMs may increase population-level diversity, though existing evidence suggests that even multi-LLM approaches can concentrate on few strategies ([Fontana et al., 2025](https://arxiv.org/html/2506.19806v3#bib.bib154); [Lu, 2024](https://arxiv.org/html/2506.19806v3#bib.bib119)).

At the *architecture* level, approaches such as diversity-constrained decoding and Mixture-of-Experts (MoE) with persona-specific routing ([Tang et al., 2025b](https://arxiv.org/html/2506.19806v3#bib.bib181)) represent intriguing directions, but remain largely unexplored for social simulation. Recent work continues to identify significant bottlenecks in capturing complex human heterogeneity, cultural depth, and dynamic preferences through current intervention methods ([Prama et al., 2025](https://arxiv.org/html/2506.19806v3#bib.bib182); [Venkit et al., 2026](https://arxiv.org/html/2506.19806v3#bib.bib183)), suggesting that a boundary-aware framework remains a necessary complement to technical improvements.

## Appendix H Challenges and Future Directions

The boundaries of LLM-based simulations present several challenges and areas for improvement.

(1) Validation. While validation of LLM individual behavior and dynamic interactions is more difficult compared to traditional ABM methods, there is currently a lack of good evaluation methods, with heavy reliance on manual or LLMs’ self-report approaches for validation ([Adornetto et al., 2025](https://arxiv.org/html/2506.19806v3#bib.bib27); [Mou et al., 2024](https://arxiv.org/html/2506.19806v3#bib.bib35)). In response, the simulation community needs to promote systematic evaluation standards to examine whether LLM-based simulations can yield conclusions beneficial for understanding real society.

(2) Conditions of claims. Social simulation research needs to more rigorously consider the proper claims of simulation conclusions, including clearly defining the conditions under which conclusions hold, their scope of applicability, and their generalization ability in real-world contexts, avoiding overclaims that reduce the credibility and applicability of simulation conclusions. For instance, while simulations with constrained heterogeneity can produce findings consistent with general patterns, as demonstrated by case studies showing that organizational diversity typically does not improve collective performance, researchers must meticulously bound their claims, as these simulations may fail to capture specific conditions (e.g., extreme individual bias) where the opposite effect occurs ([Xu et al., 2014](https://arxiv.org/html/2506.19806v3#bib.bib122)), and dramatically increased heterogeneity may reveal emergent phenomena beyond the original scope.

(3) Bias and ethical concerns. Close attention needs to be paid to bias issues in LLM-based simulations. Limited by the lack of heterogeneity in LLMs, simulations may lead to neglecting marginalized groups or generating stereotypes and negative biases towards specific populations or phenomena. It is necessary to confirm whether LLMs capture biased “averages” and conduct moral and ethical considerations.

(4) Empirical research. Considering that our ultimate goal is to contribute to society, applying findings from social simulations to empirical solutions to real-world problems to confirm or refute the reliability of conclusions may be the next step the community needs to actively take to enhance the credibility and importance of simulation methods in research ([Popper, 2005](https://arxiv.org/html/2506.19806v3#bib.bib118); [Watts, 2017](https://arxiv.org/html/2506.19806v3#bib.bib117)).
