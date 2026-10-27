---
id: arxiv-2508-08242-text
type: material
title: 'Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making'
work_id: arxiv-2508-08242
source_url: https://arxiv.org/html/2508.08242v2
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять
  с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.
language: original
sha256_text: 72d5e63e76806238cd8b06e726046fc65c618b850c9952855a1f157bdbdb1bf9
---

> Источник: [https://arxiv.org/html/2508.08242v2](https://arxiv.org/html/2508.08242v2). Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.

# Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making

Journal: PACMHCIVolume: 106CSCW05910DOI: [10.1145/3816907](https://doi.org/10.1145/3816907)CCS: Human-centered computing Empirical studies in collaborative and social computing

Mohammed Alsobay
email: [malsobay@microsoft.com](mailto:malsobay@microsoft.com)
Affiliation: Microsoft Research, New York, NY, USA
, 
David M. Rothschild
Affiliation: Microsoft Research, New York, NY, USA
email: [davidmr@microsoft.com](mailto:davidmr@microsoft.com)
, 
Jake M. Hofman
Affiliation: Microsoft Research, New York, NY, USA
email: [jmh@microsoft.com](mailto:jmh@microsoft.com)
 and 
Daniel G. Goldstein
Affiliation: Microsoft Research, New York, NY, USA
email: [dgg@microsoft.com](mailto:dgg@microsoft.com)

Received  April 9, 2026

###### Abstract.

Group decision-making often suffers from uneven information sharing, hindering decision quality. While large language models (LLMs) have been widely studied as aids for individuals, their potential to support groups of users, potentially as facilitators, is relatively underexplored. We present a pre-registered randomized experiment with 1,475 participants assigned to 281 live groups completing a hidden profile task—selecting an optimal city for a hypothetical sporting event—under one of four facilitation conditions: no facilitation, a one-time message prompting information sharing, a human facilitator, or an LLM (GPT-4o) facilitator. We find that LLM facilitation increased information shared within a discussion by raising the minimum level of engagement with the task among group members, and that these gains came at limited cost in terms of participants’ attitudes towards the task, their group, or their facilitator. Whether by human or AI, there was no significant effect of facilitation on the final decision outcome, suggesting that even substantial but partial increases in information sharing were insufficient to overcome the hidden profile effect studied. To support the design and evaluation of LLM-mediated group decision-making systems, we release our data and our experimental platform, the Group-AI Interaction Laboratory (GRAIL), as an open-source tool.

###### Keywords:

decision making, human-AI interaction, collective intelligence, experiments

†

## 1. Introduction

From tribal councils to committee meetings, group decision-making is a cornerstone of human societal behavior across eras and cultures. Groups are assembled to make decisions in critical functions such as hiring ([Tavana et al., 1993](https://arxiv.org/html/2508.08242v2#bib.bib59)), patient care ([DiPierro et al., 2022](https://arxiv.org/html/2508.08242v2#bib.bib58)), and crisis response ([Li et al., 2022](https://arxiv.org/html/2508.08242v2#bib.bib57)), and factors moderating the performance of groups have been studied extensively ([Larson and Christensen, 1993](https://arxiv.org/html/2508.08242v2#bib.bib8); [Larson, 2010](https://arxiv.org/html/2508.08242v2#bib.bib10); [Kozlowski and Ilgen, 2006](https://arxiv.org/html/2508.08242v2#bib.bib33); [Almaatouq et al., 2021a](https://arxiv.org/html/2508.08242v2#bib.bib9); [McGrath, 1984](https://arxiv.org/html/2508.08242v2#bib.bib61); [Hackman and Morris, 1975](https://arxiv.org/html/2508.08242v2#bib.bib60)). Although group-based tasks are ubiquitous in work environments, groups face challenges such as social loafing ([Latané et al., 1979](https://arxiv.org/html/2508.08242v2#bib.bib30)), groupthink ([Baron, 2005](https://arxiv.org/html/2508.08242v2#bib.bib43)), and polarization ([Isenberg, 1986](https://arxiv.org/html/2508.08242v2#bib.bib36)), as well as various biases in information sharing, discussion, and evaluation ([Stasser and Titus, 1985](https://arxiv.org/html/2508.08242v2#bib.bib28); [Mojzisch et al., 2010](https://arxiv.org/html/2508.08242v2#bib.bib40); [Schulz-Hardt et al., 2016](https://arxiv.org/html/2508.08242v2#bib.bib31)).

Many efforts have been made to measure group aptitude and to design interventions that improve group performance. One such class of interventions involves the use of algorithms to influence collective behavior, ranging in sophistication from simple, noisy bots that improve coordination in networked groups ([Christakis and Fowler, 2008](https://arxiv.org/html/2508.08242v2#bib.bib7)), to graph neural networks that rewire human networks to promote cooperation ([McKee et al., 2023](https://arxiv.org/html/2508.08242v2#bib.bib16)). With the launch of ChatGPT in November 2022, large language models (LLMs) have entered the public lexicon and become the focus of research exploring how these models can augment human abilities. While a broad body of literature has explored how LLMs can assist individual users in a wide range of domains, including writing, programming, art, and education ([Noy and Zhang, 2023](https://arxiv.org/html/2508.08242v2#bib.bib22); [Mozannar et al., 2025](https://arxiv.org/html/2508.08242v2#bib.bib76); [Wu et al., 2021](https://arxiv.org/html/2508.08242v2#bib.bib23); [Kumar et al., 2025](https://arxiv.org/html/2508.08242v2#bib.bib77)), our current understanding of how these models can assist groups of people using them together is relatively nascent ([Chiang et al., 2024](https://arxiv.org/html/2508.08242v2#bib.bib25); [Lee et al., 2024](https://arxiv.org/html/2508.08242v2#bib.bib37); [Mao et al., 2024](https://arxiv.org/html/2508.08242v2#bib.bib20); [Vanukuru et al., 2025](https://arxiv.org/html/2508.08242v2#bib.bib69)).

Recent work has demonstrated the ability of LLMs to help groups achieve consensus ([Tessler et al., 2024](https://arxiv.org/html/2508.08242v2#bib.bib45); [Small et al., 2023](https://arxiv.org/html/2508.08242v2#bib.bib55)) and discuss divisive topics ([Argyle et al., 2023](https://arxiv.org/html/2508.08242v2#bib.bib78)) through static interventions (i.e., summaries or suggestions delivered to group members). In contrast to post hoc tools such as meeting summaries, integrating LLMs as active participants in discussions offers the opportunity to support groups and increase discussion quality in real-time, by increasing desirable outcomes such as intentionality ([Chen et al., 2025](https://arxiv.org/html/2508.08242v2#bib.bib67)) and inclusion ([Houtti et al., 2025](https://arxiv.org/html/2508.08242v2#bib.bib70)). More specifically, as meeting facilitators, LLMs may excel in aspects of facilitation that would be taxing for their human counterparts, particularly in managing discussions that proceed at a high volume and rapid pace and keeping track of who has and has not participated. In this direction, recent work has addressed the design principles underlying such active LLM-based interventions ([Mao et al., 2024](https://arxiv.org/html/2508.08242v2#bib.bib20)) and empirically studied the effect of LLM-based interventions such as dissent on group decision-making and design processes ([Chiang et al., 2024](https://arxiv.org/html/2508.08242v2#bib.bib25); [Lee et al., 2024](https://arxiv.org/html/2508.08242v2#bib.bib37)). Together, these studies point to a growing design space of LLM facilitation strategies that vary in their timing, target, and interaction style, and in doing so, shape how groups coordinate and deliberate.

In this work, we study the role of LLM-based facilitators in decision-making discussions in which critical information is asymmetrically distributed among group members, requiring effective information sharing to identify the optimal solution. In such settings, groups often fail to surface and effectively integrate uniquely held information, due to a combination of factors including uneven participation, conversational dynamics, and biases in how information is attended to and interpreted. These dynamics can lead to suboptimal decisions, particularly when key information is known to only a subset of participants, or even a single individual.

We introduce LLMs as facilitators to aid groups completing “hidden profile” tasks (HPTs) ([Stasser and Titus, 1985](https://arxiv.org/html/2508.08242v2#bib.bib28)), a well-studied experimental paradigm of decision-making under asymmetric information. By enacting structural interventions that support participation and information synthesis, LLMs may be effective aids to groups facing such decisions. To further our understanding of LLM facilitation in this setting, we ask the following research questions (RQs):

- •

  RQ1: Relative to no facilitation, written guidance, and human facilitation, does LLM facilitation increase information sharing in group decision-making under asymmetric information?
- •

  RQ2: Beyond the volume of information shared, how does LLM facilitation affect the process of information aggregation, and the quality of the decision made?
- •

  RQ3: How do participants subjectively evaluate LLM-facilitated experiences of group decision-making?

To investigate these questions, we conducted a pre-registered randomized experiment ([AsPredicted #192061](https://aspredicted.org/23df-gtys.pdf)) in which 281 groups of five decision makers completed a hidden profile task and were randomly assigned to complete the task either unassisted or with the help of a human facilitator or an LLM facilitator. We find that LLM facilitation increased the volume and breadth of information shared, without negatively impacting self-reported attitudes of group cohesion and productivity. However, despite the increased information sharing, groups still made suboptimal decisions, emphasizing the strength of the biases at play and motivating research into algorithmic facilitation tools that are targeted at overcoming well-documented biases in group discussion and decision making. In support of future research, we also release the full experimental dataset and the Group-AI Interaction Laboratory (GRAIL), an open-source interface for studying group-AI interaction in conversational tasks.

## 2. Related Work

In this work, we study the impact of LLM facilitation on group decision making under asymmetric information. Our research is motivated by the well-documented biases and communication failures exhibited by groups in settings of asymmetric information, and builds upon previous work in the design of group-AI interaction and group decision support technologies. We contribute to these lines of research by complementing existing studies with large-scale, pre-registered experimental evidence describing the impact of LLM facilitation on group behavior while completing a challenging hidden profile task.

### 2.1. The Hidden Profile Task Paradigm of Group Decision-making Research

Since the seminal work of Stasser and Titus ([Stasser and Titus, 1985](https://arxiv.org/html/2508.08242v2#bib.bib28)), hidden profile tasks (HPTs) have been used extensively to study the dynamics of decision making in groups whose members have asymmetric information ([Stasser and Titus, 2003](https://arxiv.org/html/2508.08242v2#bib.bib24); [Lu et al., 2012](https://arxiv.org/html/2508.08242v2#bib.bib3); [Sohrab et al., 2015](https://arxiv.org/html/2508.08242v2#bib.bib1); [Reimer et al., 2010](https://arxiv.org/html/2508.08242v2#bib.bib35); [Brodbeck et al., 2007](https://arxiv.org/html/2508.08242v2#bib.bib32)). In an HPT, a group of decision makers is tasked with selecting one of several predefined options, with information about the options distributed among different group members. Each group member receives a distinct information set (or “profile”) about the various options, typically delivered as a list of facts about each option. The visibility (public/shared/private) and polarity (positive/negative/neutral) of pieces of information and their distribution among group members is deliberately structured such that individually accessible information suggests one alternative as optimal, while the full information set would identify a different option as superior. This information asymmetry creates a decision scenario where optimal group performance requires effective information exchange and integration rather than simple majority voting or averaging of individual preferences.

One familiar with the literature on the wisdom of crowds ([Surowiecki, 2005](https://arxiv.org/html/2508.08242v2#bib.bib38)) and collective intelligence ([Woolley et al., 2010](https://arxiv.org/html/2508.08242v2#bib.bib79)) may intuitively expect groups to outperform individuals in decision making tasks, including HPTs. However, prior research finds that groups typically do not exhaustively share information due to effort and time constraints ([Stasser and Titus, 1985](https://arxiv.org/html/2508.08242v2#bib.bib28)). The distribution of information under the HPT induces two key information sharing biases that hinder group progress. In groups completing an HPT, shared information tends to be surfaced more frequently than private information (shared information bias ([Nicholson et al., 2021](https://arxiv.org/html/2508.08242v2#bib.bib4); [Larson et al., 1996](https://arxiv.org/html/2508.08242v2#bib.bib29))), and participants are more likely to share information that supports the option that is appealing under their personal information set (individual preference bias ([Kelly and Karau, 1999](https://arxiv.org/html/2508.08242v2#bib.bib47); [Schulz-Hardt et al., 2016](https://arxiv.org/html/2508.08242v2#bib.bib31))).

More broadly, these dynamics are amplified by well-documented group processes. For example, social loafing ([Latané et al., 1979](https://arxiv.org/html/2508.08242v2#bib.bib30)) can reduce participation, increasing the chance that privately held information is never shared; communication apprehension ([McCROSKEY, 1977](https://arxiv.org/html/2508.08242v2#bib.bib62); [Nicholson et al., 2021](https://arxiv.org/html/2508.08242v2#bib.bib4)) can discourage individuals from contributing unique or dissenting information; and groupthink ([Baron, 2005](https://arxiv.org/html/2508.08242v2#bib.bib43)) can lead groups to converge prematurely on an initially favored option without fully considering alternatives. Collectively, these factors contribute to a central challenge of the HPT paradigm: groups often fail not because the relevant information is unavailable, but because it is not effectively surfaced and integrated during discussion.

### 2.2. Computational Approaches to Group Facilitation

Broadly put, the role of a facilitator is to enact process and content interventions that help a group achieve its objectives ([Viller, 1991](https://arxiv.org/html/2508.08242v2#bib.bib5); [Miranda and Bostrom, 1999](https://arxiv.org/html/2508.08242v2#bib.bib72)). Process interventions introduce and reinforce structure in a group’s discussion, such as imposing an agenda or by managing specific discussion formats (e.g., the Delphi method and the nominal group technique ([Fink et al., 1984](https://arxiv.org/html/2508.08242v2#bib.bib64))). In conversation, facilitators enacting process interventions typically perform actions such as timekeeping, managing participation, and supporting synthesis, without introducing their own substantive judgments or domain expertise. In contrast, content interventions involve the facilitator contributing their own judgment, interpretations, or recommendations to the discussion at hand, such as advocating for a particular option or introducing new information and perspectives.

Computational approaches to facilitation build on a rich body of work in the CSCW and broader HCI communities on group decision support systems (GDSSs) ([DeSanctis and Gallupe, 1987](https://arxiv.org/html/2508.08242v2#bib.bib73)) and conversational agents (CAs) ([Diederich et al., 2022](https://arxiv.org/html/2508.08242v2#bib.bib74)). In 1993, Phillips & Phillips argued that, while computers could support facilitation as a medium for interaction, “the key functions of the facilitator, observing, attending, maintaining awareness of feelings, and intervening, cannot, of course, be carried out by computers…” ([Phillips and Phillips, 1993](https://arxiv.org/html/2508.08242v2#bib.bib56)). Since then, computational approaches to these functions have arguably progressed to the level of practical utility, and subsequent work has explored technological solutions to enact the structural and conversational roles of the facilitator in group settings. For example, Kim et al. ([Kim et al., 2021](https://arxiv.org/html/2508.08242v2#bib.bib63)) demonstrate the utility of CAs that interactively add structure (e.g., turn-taking) to group debates, while Do et al. ([Do et al., 2022](https://arxiv.org/html/2508.08242v2#bib.bib2)) show how agents can sensitively provide feedback to underperforming group members, and Shamekhi et al. ([Shamekhi et al., 2018](https://arxiv.org/html/2508.08242v2#bib.bib6); [Shamekhi and Bickmore, 2019](https://arxiv.org/html/2508.08242v2#bib.bib19)) examine how embodiment influences perceptions of rapport, trust, intelligence, power, and efficacy of facilitative agents in decision-making groups.

In the context of decision making under asymmetric information, process interventions may, in theory, help groups avoid suboptimal decisions. In hidden profile tasks, group members collectively possess the information required to identify the optimal choice, yet this information is often unevenly shared and insufficiently integrated into the final decision. By eliciting contributions from all members and structuring how information is shared and synthesized, process interventions are well positioned to mitigate these failures of information exchange. This makes hidden profile tasks a natural setting in which to study the effects of process-oriented facilitation. At the same time, while such interventions may be beneficial in theory, it remains an empirical question whether LLM-based systems can implement such facilitation effectively in practice.

Effective LLM facilitators may allow us to easily conduct these facilitatory functions with greater fidelity and scale, and across a wide range of domains, potentially broadening access to facilitative support. Professional facilitators, such as those found on [Find a Facilitator](https://findafacilitator.com/), command fees in the range of $1,500-$3,000/day1, which may be out of reach for groups in a wide range of decision making settings. The comparatively low (and decreasing) marginal cost of LLM-based systems may offer a more scalable and cost-effective alternative.

### 2.3. Group-AI Interaction

A broad range of algorithms have been used to influence group behavior with the goal of overcoming detrimental group processes, ranging in sophistication from simple, noisy bots that improve coordination in networked groups ([Christakis and Fowler, 2008](https://arxiv.org/html/2508.08242v2#bib.bib7)), to graph neural networks that rewire human networks to promote cooperation ([McKee et al., 2023](https://arxiv.org/html/2508.08242v2#bib.bib16)) and variational autoencoders used to influence group dynamics in a hidden profile task ([Pescetelli et al., 2022](https://arxiv.org/html/2508.08242v2#bib.bib80)).

More recently, large language models (LLMs) have been explored as a tool to influence group dynamics and outcomes in a range of settings. One form of such interventions is characterized by static or post-hoc LLM output provided to groups; in these applications, the LLM serves as a tool that provides input to the group in a highly structured format, rather than as an active participant in a group’s interactions. Examples of such interventions include Tessler et al.’s ([Tessler et al., 2024](https://arxiv.org/html/2508.08242v2#bib.bib45)) LLM-based “Habermas Machine” which iteratively generates consensus statements for social and political issues, as well as approaches that use LLMs to help users phrase their messages to increase the sense of feeling understood in divisive conversations ([Argyle et al., 2023](https://arxiv.org/html/2508.08242v2#bib.bib78)) and improve out-group cooperation ([Claggett et al., 2025](https://arxiv.org/html/2508.08242v2#bib.bib65)).

As Mao et al. ([Mao et al., 2024](https://arxiv.org/html/2508.08242v2#bib.bib20)) and Do et al. ([Do et al., 2022](https://arxiv.org/html/2508.08242v2#bib.bib2)) emphasize, transitioning from structured forms of support to an interactive, multi-user chat setting expands the design space from what to say, to include the when and who. To address the added complexity of multi-party interactivity in chat-based settings, frameworks such as those proposed by Mao et al. ([Mao et al., 2024](https://arxiv.org/html/2508.08242v2#bib.bib20)) and Papachristou et al. ([Papachristou et al., 2025](https://arxiv.org/html/2508.08242v2#bib.bib75)) introduce multi-component LLM systems in which each component tackles a single facet of interaction (e.g. timing, content, recipient selection, intent extraction, and coordination), while the “Observe, Ask, Intervene” framework proposed by Houtti et al. ([Houtti et al., 2025](https://arxiv.org/html/2508.08242v2#bib.bib70)) focuses on the process by which such interactive interventions should be delivered.

Within the context of meetings and group discussions, LLMs have been explored as “devil’s advocates” that introduce disconfirmatory opinions ([Chiang et al., 2024](https://arxiv.org/html/2508.08242v2#bib.bib25)), as coordinators of meeting scheduling processes ([Papachristou et al., 2025](https://arxiv.org/html/2508.08242v2#bib.bib75)), and as tools that support temporal work across recurrent meetings ([Vanukuru et al., 2025](https://arxiv.org/html/2508.08242v2#bib.bib69)). We build upon and extend this literature by conducting a pre-registered, large-scale (281 groups), highly interactive (5-6 members per group) experiment studying the role of single LLMs as decision-making facilitators in a setting that is particularly challenging due to its asymmetric and adversarial information landscape.

## 3. Methods

### 3.1. Participants

In this pre-registered experiment ([AsPredicted #192061](https://aspredicted.org/23df-gtys.pdf)), 1,475 participants were recruited from Prolific and randomly assigned into groups of five decision makers (with a sixth participant added as facilitator in one treatment condition). All participants resided in the United States and the mean age was 39 years (SD = 12.5), with 54% identifying as male and 45% as female (the remainder declined to answer).

Participants were compensated a flat amount of $3.75 for full completion of the study, and the median hourly compensation rate was $14.40/hr. The study was approved by the Microsoft Research Institutional Review Board (MSR IRB; Record #10883), and all participants provided explicit consent to participate in this study. For recruitment materials, please see Appendix [A](https://arxiv.org/html/2508.08242v2#A1 "Appendix A Recruitment details and materials ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").

### 3.2. Experiment Design & Implementation

#### 3.2.1. Facilitation

The focal manipulation of this study was the availability of facilitative support to assist groups during deliberation. Each group was randomly assigned to receive one of four facilitation treatments:

1. (1)

   No facilitation (“None”, N=70 groups), in which a group completed the task without any facilitative support.
2. (2)

   A one-time message (“Message”, N=71 groups), in which the group was shown a message saying “People may have different information about what is being discussed in this meeting, so encourage everyone to share all of the relevant information they have.” This notice was shown at the beginning of the group’s deliberation period, and gradually disappeared once the discussion began. As a minimal pre-deliberation prompt, this intervention mirrors active control conditions previously studied by Stasser et al. ([Stasser et al., 1995](https://arxiv.org/html/2508.08242v2#bib.bib54); [Stasser et al., 2000](https://arxiv.org/html/2508.08242v2#bib.bib42)).
3. (3)

   Human facilitation (“Human”, N=70 groups), in which a sixth human participant was added to the group to act as a facilitator. This participant did not receive any private task information, and therefore operated as a neutral, external lay facilitator focused on structuring the group’s discussion rather than contributing substantively to the decision.
4. (4)

   LLM facilitation (“LLM”, N=70 groups), in which an LLM (GPT-4o) acted as a facilitator.

Neither the human nor LLM facilitator was provided with information relevant to any of the options in the hidden profile task, and therefore both functioned as external participants whose role was limited to structuring the group’s deliberation rather than contributing task-relevant content. Both facilitators were presented with the same core prompt to “first, make sure that everyone is heard from and shares what they know and, second, act as a scoreboard and keep track of pros and cons”, and were also given the reminder presented in the “Message” facilitation condition (in the “Human” and “LLM” conditions, the message was only provided to the facilitator, not the participants). If the group was assigned to have an LLM facilitator, the LLM sent a message to the group every 90 seconds, in addition to responding every time it was directly addressed by the group; each request sent to the LLM includes the full timestamped transcript preceding the request, as well as general information about meeting objectives, attendees, and time elapsed/remaining. For implementation details of each facilitative condition, including screenshots, please see Appendix [C](https://arxiv.org/html/2508.08242v2#A3 "Appendix C Screenshots and implementation details for treatment conditions ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making"). The implementation of the LLM facilitator and its prompt structure are further detailed in Appendix [D](https://arxiv.org/html/2508.08242v2#A4 "Appendix D Facilitator LLM Prompting and Prompt Formatting ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").

#### 3.2.2. The Hidden Profile Task

In this experiment’s hidden profile task, groups were tasked with selecting one of three fictional cities—Eldoron, Myloria, and Cragnio—to host an international sporting event akin to the Olympics. Each city was described by 10 different facts, and facts had five categories: weather, tourism, transportation, community, and a miscellaneous category for neutral information that did not plausibly influence the decision to host a sporting event. Each fact about a city had a positive (e.g., “friendly and welcoming residents”), negative (e.g., “higher than average humidity”), or neutral valence (e.g., “considered a hub for biotech in the region”), validated through a pre-experiment survey. The structure of the task, including group size, number of options, and information architecture, was modeled after the “Grogan Air” hidden profile task ([Ames,](https://arxiv.org/html/2508.08242v2#bib.bib44) ), with the content modified for the international sporting event context. For details of the hidden profile task design and valence measurement survey, please see Appendix [E](https://arxiv.org/html/2508.08242v2#A5 "Appendix E Hidden Profile Task Design ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").

Under full information and a unit-weight linear model (UWLM) of utility ([Gigerenzer and Goldstein, 1996](https://arxiv.org/html/2508.08242v2#bib.bib26)) which assigns a score of 1 to positive facts, 0 to neutral facts, and -1 to negative facts, Eldoron is the most favorable option with a total score of 6, followed by Myloria with a score of 2, and Cragnio with a score of 0. However, each group member only had access to a subset of facts; facts could either be public (available to all group members), shared (available to multiple members), or private (available to only one member). To obscure the utility of Eldoron and create the “hidden” profile, the polarity (positive/negative/neutral) and visibility (public/shared/private) of the facts were manipulated such that Myloria was the most appealing option in each individual information set, as detailed in Table [1](https://arxiv.org/html/2508.08242v2#S3.T1 "Table 1 ‣ 3.2.2. The Hidden Profile Task ‣ 3.2. Experiment Design & Implementation ‣ 3. Methods ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making"). For the full list of facts and the distribution of information among the participants, please see Figure [12](https://arxiv.org/html/2508.08242v2#A5.F12 "Figure 12 ‣ Appendix E Hidden Profile Task Design ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making") in the Appendix.

| Information Set | Eldoron | Myloria | Cragnio |
| --- | --- | --- | --- |
| Full | 6 | 2 | 0 |
| Blue | 2 | 3 | 1 |
| Green | 1 | 3 | 2 |
| Orange | 2 | 3 | 2 |
| Pink | 1 | 3 | 2 |
| Red | 1 | 3 | 2 |

Table 1. Utility scores for each city (Eldoron, Myloria, Cragnio) by information set. Under full information, Eldoron has the highest utility, whereas individual participant information sets (Blue, Green, Orange, Pink, Red) were manipulated to create a hidden profile favoring Myloria as the most attractive city. Utility scores reflect the sum of valence values assigned to positive (+1), neutral (0), and negative (-1) facts based on a unit-weight linear model (UWLM).

#### 3.2.3. Experimental flow

During onboarding, participants are informed of the purpose and duration of the meeting, the size of their group, and the availability and type of facilitator supporting their group, if they have been assigned one. After reviewing the instructions and completing a brief comprehension check, each group proceeds through three stages of the experiment, illustrated in Figure [1](https://arxiv.org/html/2508.08242v2#S3.F1 "Figure 1 ‣ 3.2.3. Experimental flow ‣ 3.2. Experiment Design & Implementation ‣ 3. Methods ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making"), using the chat interface illustrated in Figure [2](https://arxiv.org/html/2508.08242v2#S3.F2 "Figure 2 ‣ 3.2.3. Experimental flow ‣ 3.2. Experiment Design & Implementation ‣ 3. Methods ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making"):

1. (1)

   Icebreaker: Groups begin by spending 1 minute introducing themselves to each other, using the same chat interface they will use for the main decision making task. During this stage, participants gain familiarity with the interface, allowing them to immediately begin the decision-making discussion in the next stage. Participants are not shown any task-relevant information during this stage. While human facilitators may participate in the icebreaker stage, the LLM facilitator does not.
2. (2)

   Decision Making Discussion: After the icebreaker stage, each participant is shown their personal information set, and the group is given 10 minutes to discuss the task. Groups must stay for the entirety of the 10 minutes. During this stage, facilitators in the “Human” and “LLM” conditions communicate with their group through the same chat window the group is using for their discussion. Instead of receiving task-specific information, as is shown to the five “decision making” participants, the human facilitator’s interface shows the facilitator’s instructions.
3. (3)

   Post-task Survey: After the decision making discussion, all participants (including human facilitators) complete an exit survey individually. They are asked to report the decision made by the group, as well as their subjective evaluations of the task, their group, and their facilitator (if they were assigned one). For screenshots of the introduction and exit survey, please refer to Appendix [G](https://arxiv.org/html/2508.08242v2#A7 "Appendix G Screenshots of the introduction and exit survey interfaces ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").

![Experimental flow diagram. Participants first completed a 1-minute icebreaker, then engaged in a 10-minute hidden-profile decision-making discussion in groups of five. During decision making, groups were randomly assigned to one of four facilitation conditions: no facilitation, a one-time message encouraging information sharing, a human facilitator, or an LLM facilitator. After the main discussion, participants completed an individual post-task survey reporting their group's decision and their subjective evaluation of the experience.](https://arxiv.org/html/2508.08242v2/figures/experiment_design_modelLabel.png)


Figure 1. Experimental design. After reading an overview of the task and completing a brief comprehension check, participants were divided into groups of 5 decision makers (and a 6th participant member acting as facilitator, if assigned one) to proceed through the 3 stages of the experiment. (A) First, participants completed a 1-minute icebreaker exercise in which they met their group using the same discussion interface they would use for the main task. (B) After the icebreaker, groups had 10 minutes to complete the hidden profile task, and were randomized to either a control condition with no facilitative support, or one of the three facilitative treatments: “Message”, “Human”, or “LLM”. (C) After the main discussion, each participant completed an exit survey individually, in which they reported the group’s decision and their subjective attitudes towards the task, their group, and the facilitator, if they were assigned one.Experimental flow diagram. Participants first completed a 1-minute icebreaker, then engaged in a 10-minute hidden-profile decision-making discussion in groups of five. During decision making, groups were randomly assigned to one of four facilitation conditions: no facilitation, a one-time message encouraging information sharing, a human facilitator, or an LLM facilitator. After the main discussion, participants completed an individual post-task survey reporting their group's decision and their subjective evaluation of the experience.

![Screenshot of the experimental interface. On the left half of the screen, participants can review the general instructions and the unique set of information available to them about each of the 3 cities. On the right half, the group communicates through a shared chat window; participants can use ``@'' tags to directly address others, including the facilitator.](https://arxiv.org/html/2508.08242v2/figures/ui_nonfac.png)


Figure 2. Experiment interface. On the left half of the screen, participants could review the general instructions and the unique set of information available to them about each of the 3 cities. On the right half, the group communicated through a shared chat window; participants could use “@” tags to directly address others, including the facilitator.Screenshot of the experimental interface. On the left half of the screen, participants can review the general instructions and the unique set of information available to them about each of the 3 cities. On the right half, the group communicates through a shared chat window; participants can use ``@'' tags to directly address others, including the facilitator.

Within each group, participants are randomly assigned colors (‘‘Blue’’, ‘‘Pink’’, ‘‘Green’’, ‘‘Orange’’, ‘‘Red’’) as nicknames2; across all groups, each color is associated with an information set (which includes all public information, and any shared or private information assigned to them), presented in “personal briefs”. Through the interface shown in Figure [2](https://arxiv.org/html/2508.08242v2#S3.F2 "Figure 2 ‣ 3.2.3. Experimental flow ‣ 3.2. Experiment Design & Implementation ‣ 3. Methods ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making"), participants can view their personal brief on the left side of the screen, and communicate through a chat window on the right side of the screen. The interface is configured to disable direct copying and pasting of the information presented in the personal brief, preserving the limitations on information sharing that make it necessary to choose which information to share, and preventing participants from easily sharing all available facts or copy-pasting the content into an external LLM to be summarized.

### 3.3. Outcome and Process Measures

To answer RQ1, our pre-registered primary outcome is the volume of information covered within each group, operationalized as the total number of distinct facts mentioned during the group’s discussion, ranging from 0 to a maximum of 30 total facts. To quantify this outcome, each message sent by participants is annotated by GPT-4o to identify all directly or indirectly mentioned facts (for further details, please refer to Appendix [F](https://arxiv.org/html/2508.08242v2#A6 "Appendix F Using an auxiliary LLM to detect fact mentions in group discussion ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making")). Our focus on information coverage is motivated by the fact that information aggregation is a necessary (albeit insufficient, as we discuss in Section [4.3](https://arxiv.org/html/2508.08242v2#S4.SS3 "4.3. Information aggregation did not translate into UWLM-consistent decisions ‣ 4. Results ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making")) condition for effective decision-making not only in our instantiation of the HPT, but across a wide range of HPT designs and group performance evaluation schemes ([Mesmer-Magnus and Dechurch, 2009](https://arxiv.org/html/2508.08242v2#bib.bib17)).

To investigate RQ2, which studies the impact of our facilitative treatments on the discussion dynamics, we measure several process outcomes. Discussion density, defined as the ratio of facts surfaced to the number of messages sent in the discussion (excluding facilitator messages), allows us to differentiate between an increase in fact sharing driven by longer conversations, as opposed to an increase driven by a different discussion focus. To understand the impact of facilitation on option exploration, we measure the Gini coefficient of the facts surfaced for each of the three options within a group, where a lower Gini coefficient implies more even fact coverage of the options.

In settings of asymmetric information, such as the hidden profile task, individual engagement is critical; if a group member does not contribute to the discussion, key information may be locked out of the decision making process. Within each group, we measure the upper and lower bounds of individual engagement by measuring the minimum and maximum number of new facts added to the discussion by an individual group member. A distinct but related measure is whether a group achieves full participation, which we define as whether every member has surfaced at least one new fact not previously mentioned in the discussion.

Finally, we define measures describing the information surfaced, and the decision made by the group. Within each group, we define an option’s “normative score” as the score that would be given to an option on the basis of the facts surfaced by the group, assuming fact polarity were perfectly perceived by the groups as intended, and use these scores to find the decision the group would make under a unit-weight linear model of decision making. We contrast this normative decision to the actual decision made by the group, defined as the option reported to be the group’s decision by a majority of its members, excluding human facilitators. All 281 groups yielded a clear majority, with 19 groups having a 4-1 split of votes, 8 groups having a 3-2 split, and the remaining groups making unanimous decisions.

RQ3 is motivated by the fact that, while a given treatment may lead to outcome or process improvements, such improvements could possibly come at a cost to the subjective experience of decision makers. To study this, we measure individual participants’ subjective evaluation of three dimensions–the task, their group, and their facilitator, if they had one–in a post-task survey. Subjective task experience is measured through the NASA Task Load Index ([Hart and Staveland, 1988](https://arxiv.org/html/2508.08242v2#bib.bib15)), a 6-item instrument capturing perceived workload across mental, physical, and temporal demand, as well as performance, effort, and frustration.

Following the TLX, the subjective evaluation of the group begins with a general, free-text question (“How did you feel about your group in the task?”), followed by four 5-point Likert scale questions intended to capture commonly-studied facets of group decision-making and discussion quality, namely participation and inclusion (“I feel that I was able to contribute to the group discussion”), agency (“I feel that I was able to influence the group’s decision”), productivity (“The group’s discussion felt productive”), and structure (“The group had a structured way of collecting and summarizing information to reach a decision”). The final item of the group evaluation intended to measure group cohesion, by asking a binary question of whether the participant would hypothetically prefer to repeat the task with the same group or a new, random group.

Lastly, following the structure of the group evaluation, the facilitator evaluation begins with a similarly phrased free-text question about the facilitator, followed by four 5-point Likert scale questions to evaluate the performance of the facilitator, along dimensions of information elicitation (“The facilitator encouraged the group to share information”), information synthesis (“The facilitator helped the group summarize the information shared to reach a decision”), task focus (“The facilitator was able to keep the group focused on the task”), and distraction and process interruption (“The facilitator was distracting”). The facilitator evaluation concludes by asking “You completed the task with [no, a human, an AI] facilitator. If you were to repeat the task, which type of facilitation would you prefer?”, with the available options being “None”, “Human”, and “LLM”.

For analysis, TLX and Likert-based responses are aggregated to the group level by taking the mean of individual non-facilitator responses within each group, aligning the unit of analysis with that of treatment assignment. Subjective survey completion rates exceeded 98% for all TLX items, 95% for all group and facilitator Likert and multiple-choice items, and 68% for optional free-text responses.

### 3.4. Statistical Analyses and Data Processing

As pre-registered ([AsPredicted #192061](https://aspredicted.org/23df-gtys.pdf)), we investigate RQ1 through confirmatory, pairwise, one-sided, independent-samples t-tests of the difference in mean fact coverage between experimental treatments, with sample size chosen based on pilot study data to achieve 70% power in detecting a difference of 2 facts shared at a significance level of 5%. In addition to the p-values for these pre-registered analyses, we also report adjusted p-values using the Benjamini-Hochberg procedure ([Benjamini and Hochberg, 1995](https://arxiv.org/html/2508.08242v2#bib.bib66)) as a conservative robustness check. All other analyses in this work are exploratory and reported with unadjusted p-values, and all subsequent t-tests are two-sided. In our exploratory analyses, we employ one-way analysis of variance (ANOVA) and Pearson’s chi-squared test to test for differences between treatments in continuous and binary outcomes, respectively.

To probe the relative weight of facts in a group’s decision, we estimated a multinomial logit model of option selection as a function of normative UWLM scores. Let $Y\_{g}$ denote the option selected by group $g$, and let $S\_{g,E}$, $S\_{g,M}$, and $S\_{g,C}$ denote the surfaced normative scores for Eldoron, Myloria, and Cragnio, respectively. For each non-baseline option $j\in\{\text{Eldoron},\text{Cragnio}\}$, we specify:

|  |  |  |
| --- | --- | --- |
|  | $$\log\frac{\Pr(Y\_{g}=j)}{\Pr(Y\_{g}=\text{Myloria})}=\beta\_{jE}S\_{g,E}+\beta\_{jM}S\_{g,M}+\beta\_{jC}S\_{g,C}$$ |  |

We set Myloria as the reference category, so each coefficient $\beta\_{jk}$ captures the association between the surfaced normative score of option $k$ and the log-odds of choosing option $j$ (relative to Myloria), holding other scores constant. Importantly, because normative scores are themselves shaped by the experimental treatment, these estimates should be interpreted descriptively: they capture how surfaced information and decisions co-vary across groups, rather than isolating the causal effect of additional information holding the decision process fixed. As such, the coefficients reflect a combination of how groups weight information and how treatments jointly influence both information sharing and decision-making.

#### 3.4.1. Data processing

Given the sensitivity of the decision-making task to private information that may be lost to a group if a participant leaves the study, our pre-registered inclusion criteria are that each participant sends at least one message, the group collectively sends at least 10 messages, and that all participants submit the task completion code (displayed at the end of the study) on Prolific. Groups were sampled from Prolific until the pre-registered count of 70 valid groups per experimental condition was met. During data collection, 7 groups in each of the “None”, “Message”, and “LLM” conditions and 15 groups in the “Human” condition failed to satisfy the inclusion criteria; one additional group was sampled in the Message condition as a consequence of ensuring equal-probability assignment across treatments. While the difference in exclusion rates is not statistically significant ($\chi^{2}(3,N=317)$ = 4.56, p = 0.21), the higher exclusion rate in the “Human” condition may reflect its larger group size (6 vs. 5), which mechanically increases the probability that at least one participant causes a group’s exclusion. For more details on pre-registration, please refer to Appendix [B](https://arxiv.org/html/2508.08242v2#A2 "Appendix B Pre-registration details ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").

## 4. Results

### 4.1. LLM facilitation increased information sharing in group discussions under asymmetric information

As illustrated in Figure [3](https://arxiv.org/html/2508.08242v2#S4.F3 "Figure 3 ‣ 4.2. Process-level effects of LLM facilitation on group discussion and information sharing ‣ 4. Results ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making")A, we find that neither the one-time message treatment ($\Delta$ = 1.32, t(139) = 1.52, p = 0.066, Benjamini-Hochberg adjusted p = 0.082) nor human facilitation ($\Delta$ = 0.43, t(138) = 0.51, unadjusted and B-H adjusted p = 0.31) significantly increased the average number of facts shared relative to no facilitation. However, we find that LLM facilitation increased information sharing relative to all other conditions: $\Delta$ = 2.9, t(138) = 3.58, p $<$ 0.001 , B-H adjusted p = 0.001 for “None”; $\Delta$ = 1.58, t(139) = 2.1, p = 0.021, B-H adjusted p = 0.035 for “Message”; and $\Delta$ = 2.47, t(138) = 3.38, p $<$ 0.001 , B-H adjusted p = 0.001 for “Human”. To contextualize the observed increase in information coverage with LLM facilitation relative to no facilitation (“LLM” vs. “None”), the effect size (Cohen’s $d$) is 0.61, indicating a moderate-to-large practical effect of LLM facilitation on information coverage.

### 4.2. Process-level effects of LLM facilitation on group discussion and information sharing

Despite LLM facilitators eliciting more facts from groups, we detect no significant difference in the average number of overall messages sent by the group members (excluding the facilitators) between treatments (F(3,277) = 0.46, p = 0.71), and find that LLM-facilitated discussions were more information dense than unfacilitated discussions on average, where density is defined as the ratio of covered facts to the number of non-facilitator messages in the discussion ($\Delta$ = 0.067, 95% CI [0.025, 0.109], t(138) = 3.17, p = 0.002; see Figure [3](https://arxiv.org/html/2508.08242v2#S4.F3 "Figure 3 ‣ 4.2. Process-level effects of LLM facilitation on group discussion and information sharing ‣ 4. Results ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making")B); together, these findings indicate that the increase in fact coverage is not solely a mechanical consequence of longer discussions. Moreover, the information covered in LLM-facilitated groups may be more evenly distributed among the three candidate cities than in groups with no facilitation, as suggested by the decrease in the average Gini coefficient of covered facts for each city ($\Delta$ = -0.05, 95% CI [-0.091, -0.009], t(138) = -2.42, p = 0.017; Figure [3](https://arxiv.org/html/2508.08242v2#S4.F3 "Figure 3 ‣ 4.2. Process-level effects of LLM facilitation on group discussion and information sharing ‣ 4. Results ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making")C), hinting that LLM facilitation may encourage groups to more holistically evaluate the decision at hand.

LLM facilitation increased the total amount of information shared, increased information density (facts per message), and led to more balanced discussion across the three candidate cities compared with the other facilitation conditions.


Figure 3. LLM facilitation increased fact sharing volume, density, and breadth during discussion.
  
(A) shows the total number of facts surfaced by a group. (B) shows the density of facts in a conversation (# facts surfaced / # messages, excluding facilitator messages). (C) shows the Gini coefficient of each group’s covered information across each of the three options. Error bars indicate 95% confidence intervals, and may be smaller than the marker. Scatter markers each represent a single group. For readability, border markers in panel (A) indicate points out of the y-axis bounds.LLM facilitation increased the total amount of information shared, increased information density (facts per message), and led to more balanced discussion across the three candidate cities compared with the other facilitation conditions.

By the volume and length of their messages, human facilitators appeared to adopt a more conversational style than their LLM counterparts. Human facilitators communicated more frequently, sending 9 messages to their group on average, while the LLM facilitator sent an average of 7 messages (by design, as detailed in Appendix [D](https://arxiv.org/html/2508.08242v2#A4 "Appendix D Facilitator LLM Prompting and Prompt Formatting ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making"); t(138) = 2.74, p = 0.007), yet the average human facilitator message was much shorter with a length of 9 words, compared to the average LLM facilitator message containing 79 words. However, by evaluating the content of the facilitator messages, we find that one potential mechanism driving the increase in information sharing is that of direct engagement with group members to participate in the discussion (e.g., “Red, we haven’t heard from you…”). On average, 25% of a human facilitator’s messages in a discussion directly addressed a group member, while LLM facilitators did so in 68% of the messages they shared within a single discussion; the LLM facilitator directly addressed a group member at least once in every group it interacted with, yet only 77% of human facilitators ever did so.

Consistent with these differences in facilitator behavior, LLM facilitation increased the minimum number of new facts (i.e., not previously covered in the group’s discussion) shared by any member of the group in comparison to no facilitation ($\Delta$ = 0.41, 95% CI [0.145, 0.684], t(138) = 3.04, p = 0.003), but not the maximum number of new facts shared by an individual (as illustrated in Figures [4](https://arxiv.org/html/2508.08242v2#S4.F4 "Figure 4 ‣ 4.2. Process-level effects of LLM facilitation on group discussion and information sharing ‣ 4. Results ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making")A and [4](https://arxiv.org/html/2508.08242v2#S4.F4 "Figure 4 ‣ 4.2. Process-level effects of LLM facilitation on group discussion and information sharing ‣ 4. Results ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making")B, respectively). Such an increase can arise through two mechanisms: an intensive margin effect, in which the least active contributors share more facts, and an extensive margin effect, in which otherwise non-participating members (those contributing no new facts) contribute at least one fact. When restricting to groups in which all members contribute at least one fact, we do not observe differences between treatments in the minimum number of facts shared (F(3,277) = 1.37, p = 0.25), suggesting limited differences in minimum engagement among already-contributing members. However, while only 39%, 44%, and 47% of groups achieved contribution from all members in the “None”, “Message”, and “Human” conditions respectively, 61% of LLM-facilitated groups had all members contribute at least one new fact ($\chi^{2}(3,N=281)$ = 8.10, p = 0.044), providing suggestive evidence that gains in information sharing may arise from the extensive margin.

LLM facilitation increases the minimum number of facts contributed by any individual group member but does not meaningfully change the maximum contribution, suggesting broader participation under LLM facilitation rather than increased participation by already highly active members.


Figure 4. LLM facilitation increased the minimum individual contribution to fact aggregation. (A) and (B) show the minimum and maximum number of distinct facts surfaced by any individual group member, respectively. Error bars indicate 95% confidence intervals, and may be smaller than the marker. Scatter markers each represent a single group. Fact counts are discrete, but vertical jitter is added for visibility.LLM facilitation increases the minimum number of facts contributed by any individual group member but does not meaningfully change the maximum contribution, suggesting broader participation under LLM facilitation rather than increased participation by already highly active members.

### 4.3. Information aggregation did not translate into UWLM-consistent decisions

Defining a group’s collective choice as the option chosen by a majority, Eldoron (the optimal choice) was chosen by 31% of unfacilitated groups, 21% of groups presented with the one-time message, 30% of groups facilitated by a human, and 23% of groups facilitated by an LLM; however, these proportions are not statistically distinguishable from one another ($\chi^{2}(3,N=281)$ = 2.85, p = 0.42). While unaffected by the facilitative treatments, these proportions of optimal outcomes are in line with those reported for the hidden profile task upon which ours is based ([Ames,](https://arxiv.org/html/2508.08242v2#bib.bib44) ). If groups strictly followed UWLM to make their decision, Eldoron would have been chosen by 60% of unfacilitated groups, 48% of groups presented with the one-time message, 47% of groups facilitated by a human, and 63% of groups facilitated by an LLM, yet these differences between treatments are also indistinguishable ($\chi^{2}(3,N=281)$ = 5.6, p = 0.13). Similarly, the proportion of groups who would have chosen Eldoron under UWLM but did not actually do so does not vary significantly across treatments ($\chi^{2}(3,N=281)$ = 7.52, p = 0.057).

Beyond the stringent assumptions of strict UWLM decision-making, differential weighting of information across options may partially explain deviations from UWLM decisions. As estimated by a multinomial logit model with Myloria (the “bait”) as the baseline option, the odds of choosing Eldoron (the optimal option) increased as its score increased ($\beta=0.395$, 95% CI [0.245, 0.545], p $<$ 0.001) and decreased with increasing Myloria score ($\beta=-0.734$, 95% CI [-0.919, -0.548], p $<$ 0.001), while the score of Cragnio did not influence this contrast ($\beta=0.054$, 95% CI [-0.170, 0.279], p = 0.64). Similarly, the odds of choosing Cragnio increased as its score increased ($\beta=0.417$, 95% CI [0.136, 0.698], p = 0.004) and decreased with increasing Myloria score ($\beta=-0.649$, 95% CI [-0.843, -0.455], p $<$ 0.001), while the score of Eldoron did not influence this contrast ($\beta=-0.043$, 95% CI [-0.236, 0.150], p = 0.66). In both comparisons, the magnitude of the effect of Myloria’s score exceeded that of the alternative city by 86% (vs. Eldoron) and 56% (vs. Cragnio), suggesting that group decisions are more strongly associated with information about Myloria than with information about the other options.

Participants report similar workload across all facilitation conditions on all six NASA TLX dimensions, with no meaningful differences in perceived task demand.


Figure 5. NASA Task Load Index (TLX). The TLX measures perceptions of a workload along six dimensions: mental demand (A), physical demand (B), temporal demand (C), performance (D), effort (E), and frustration (F). Participants individually answered each question on a discrete scale of 1 (“very little”) to 7 (“very much”). Responses were averaged within each group, and each scatter marker represents a single group. Error bars indicate 95% confidence intervals, and may be smaller than the marker.Participants report similar workload across all facilitation conditions on all six NASA TLX dimensions, with no meaningful differences in perceived task demand.


Participants rate group dynamics similarly across conditions, while LLM facilitators receive higher ratings than human facilitators for eliciting information and summarizing discussion but are also rated as slightly more distracting.


Figure 6. Subjective evaluations of group dynamics and facilitator effectiveness. Participants were individually asked to evaluate their group (A-D) and facilitator (E-H) by rating their agreement with each statement on a discrete scale of 1 (“strongly disagree”) to 5 (“strongly agree”). Responses were averaged within each group, and each scatter marker represents a single group. Error bars indicate 95% confidence intervals, and may be smaller than the marker.Participants rate group dynamics similarly across conditions, while LLM facilitators receive higher ratings than human facilitators for eliciting information and summarizing discussion but are also rated as slightly more distracting.


When asked about hypothetically repeating the task under various forms of facilitation, participants generally prefer the facilitation style they experienced during the study.


Figure 7. Participant preferences for future facilitation. Participants individually reported their preferred facilitation type if they were to hypothetically repeat the task, grouped in the figure according to their initial facilitation experience (None, Message, Human, or LLM).
When asked about hypothetically repeating the task under various forms of facilitation, participants generally prefer the facilitation style they experienced during the study.

### 4.4. Perceptions of the task, group, and facilitator

As measured by the NASA TLX, group-level mean responses (averaging across members within each group) indicate that sentiment towards the task within groups was generally positive and indistinguishable across experimental conditions, with participants reporting generally low levels of mental, physical, and temporal demand, as well as effort and irritation (Figure [5](https://arxiv.org/html/2508.08242v2#S4.F5 "Figure 5 ‣ 4.3. Information aggregation did not translate into UWLM-consistent decisions ‣ 4. Results ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making")A-C, E-F respectively), and high levels of perceived success in the task assigned to them (Figure [5](https://arxiv.org/html/2508.08242v2#S4.F5 "Figure 5 ‣ 4.3. Information aggregation did not translate into UWLM-consistent decisions ‣ 4. Results ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making")D). Similarly, groups reported high levels of perceived personal contribution, individual influence over the decision, productivity, and structure (Figure [6](https://arxiv.org/html/2508.08242v2#S4.F6 "Figure 6 ‣ 4.3. Information aggregation did not translate into UWLM-consistent decisions ‣ 4. Results ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making")A-D, respectively), with no statistically meaningful differences between conditions. Group cohesion—the mean proportion of group members who said they would want to repeat the task with the same group, as opposed to a random group—ranged from 77% in the “Message” condition to 80% in the “Human” condition, with insignificant differences between conditions (F(3,277) = 0.21, p = 0.89). Taken together, these results suggest that participants experienced the task and group interaction similarly across conditions, despite differences in facilitation.

In both the “Human” and “LLM” conditions, facilitators were rated positively for their ability to elicit information, summarize the discussion, and keep the group on task (Figure [6](https://arxiv.org/html/2508.08242v2#S4.F6 "Figure 6 ‣ 4.3. Information aggregation did not translate into UWLM-consistent decisions ‣ 4. Results ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making")E-G, respectively). The mean group rating of LLM facilitators was higher for both elicitation ($\Delta$ = 0.41, 95% CI [0.22, 0.60], t(138) = 4.18, p $<$ 0.001) and summarization ($\Delta$ = 0.59, 95% CI [0.39, 0.79], t(138) = 5.87, p $<$ 0.001), which was echoed in free-text feedback: 102 participants (across 57 of 70 LLM-facilitated groups) commented positively on elicitation and/or summarization. For example, one participant noted that the facilitator was “good for summarizing the data and prompting participation…”, while another described it as helping the group “stay on goal and make sure we were prgoressing [sic] in an organized manner.”

Both facilitators were rated as generally non-distracting (Figure [6](https://arxiv.org/html/2508.08242v2#S4.F6 "Figure 6 ‣ 4.3. Information aggregation did not translate into UWLM-consistent decisions ‣ 4. Results ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making")H), but the LLM was rated as more distracting ($\Delta$ = 0.38, 95% CI [0.21, 0.56], t(138) = 4.29, p $<$ 0.001), with participants describing recurring issues such as repetitive interventions, disrupted flow, and a sense of being rushed. Direct call-outs were particularly divisive. Some participants found them effective for increasing participation (e.g., “did a good job making people who didn’t talk much try to talk more,” and “it reminded me to start sharing more”), while others experienced them as disruptive (“a little annoying and disruptive to the flow of conversation”) or socially uncomfortable (“it made me feel a bit pressured… like it singled me out”). Overall, participants tended to prefer the facilitation style (or lack thereof) they experienced (Figure [7](https://arxiv.org/html/2508.08242v2#S4.F7 "Figure 7 ‣ 4.3. Information aggregation did not translate into UWLM-consistent decisions ‣ 4. Results ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making")), suggesting that preferences may be shaped by direct experience.

## 5. Discussion

### 5.1. What value did LLM facilitation add to the deliberative process?

#### 5.1.1. Information aggregation

LLM facilitation increased the volume and breadth of information shared within groups, without extending the length of discussions, indicating a shift toward more information-dense deliberation. Importantly, these gains appear to arise, at least partially, from the extensive margin: rather than amplifying already active contributors, the LLM increased the minimum level of participation within groups, reducing instances of non-contribution. This distinction is critical in hidden profile tasks, where uniquely held information may reside with a single participant, and failure to elicit that information can prevent the group from accessing the full set of relevant facts.

By increasing the likelihood of contribution and, consequently, the likelihood that privately held information enters the discussion, the LLM facilitator can improve the reliability of information elicitation. At the same time, this intervention targets availability rather than use: while more information is surfaced, how that information is interpreted, weighted, and integrated into a final decision remains unchanged. As such, LLM facilitation addresses one necessary condition for effective collective decision making—information aggregation—without resolving downstream challenges of information integration.

#### 5.1.2. Decision-making

Despite increased information sharing, LLM-facilitated groups were no more likely to select the UWLM-optimal option, suggesting a disconnect between information availability and use. In one sense, this is not surprising: the model hinges on the strong assumptions that information is perceived as intended, weighted consistently, aggregated linearly, and tabulated exactly to identify the score-maximizing option. However, this disconnect is not necessarily problematic, as the goal of facilitation is not to induce strictly UWLM-consistent decisions. Rather, UWLM serves as a diagnostic benchmark for assessing whether failures arise from insufficient information aggregation or from how that information is ultimately used. In this light, prior work summarized by Lu et al. ([Lu et al., 2012](https://arxiv.org/html/2508.08242v2#bib.bib3)), reviewing 24 empirical HPT studies, shows that groups are substantially more likely to select the correct option when profiles are manifest (i.e., all members begin with access to the full set of information), suggesting that UWLM-consistent behavior may be plausible for this task structure.

In contrast to the manifest condition, hidden profile settings introduce asymmetries in initial information that can generate early impressions, which in turn shape conversational dynamics, attention, and the interpretation of subsequently shared information. As a result, even when an intervention increases information coverage, groups may not fully recover the benefits of a manifest profile, as newly surfaced information is filtered through these initial biases. This perspective is consistent with prior work arguing that HPT performance is driven more by information use than coverage ([Xiao et al., 2016](https://arxiv.org/html/2508.08242v2#bib.bib27)); as Dennis puts it, “you can lead a group to information, but you can’t make it think” ([Dennis, 1996](https://arxiv.org/html/2508.08242v2#bib.bib41)). Notably, while the LLM increased information coverage, this shift remains modest relative to the full information set, leaving groups in a partially hidden regime where early asymmetries can continue to shape how information is interpreted and used.

In our setting, although the information weighting we observe is directionally consistent with UWLM decision-making (higher normative scores increase the odds of selection), we find that information supporting the “bait” option (Myloria) is more strongly associated with selection than information supporting the other options. While our design does not identify the mechanism underlying this asymmetry, this difference may reflect the individual-level preference bias commonly documented in the HPT paradigm ([Faulmüller et al., 2012](https://arxiv.org/html/2508.08242v2#bib.bib39); [Mojzisch et al., 2010](https://arxiv.org/html/2508.08242v2#bib.bib40); [Kelly and Karau, 1999](https://arxiv.org/html/2508.08242v2#bib.bib47); [Schulz-Hardt et al., 2016](https://arxiv.org/html/2508.08242v2#bib.bib31)). Because each participant initially sees Myloria as the most appealing option in their individual information set, they may remain inclined to focus on Myloria in their use of the covered facts, thereby influencing group-level decision making.

#### 5.1.3. Subjective experience

Despite meaningfully altering the structure of group discussions, LLM facilitation did not negatively impact participants’ experience of the task or their group. Across measures of workload and group dynamics, we observe no meaningful differences between conditions, suggesting that the gains in information sharing were not achieved at the expense of increased cognitive burden or reduced group cohesion.

Relative to the human facilitator, the LLM outperformed in eliciting and summarizing information, despite relying on a relatively simple, domain-agnostic setup. However, participant feedback also highlights trade-offs in how these interventions were experienced, particularly around disruption and direct targeting. Taken together, these findings empirically underscore the need for facilitation systems that address not only what to say, but when and to whom–an emphasis reflected in emerging frameworks for group-AI intervention design ([Mao et al., 2024](https://arxiv.org/html/2508.08242v2#bib.bib20); [Do et al., 2022](https://arxiv.org/html/2508.08242v2#bib.bib2); [Papachristou et al., 2025](https://arxiv.org/html/2508.08242v2#bib.bib75)).

### 5.2. Designing more effective LLM facilitators

#### 5.2.1. Process intervention beyond information aggregation

Our findings suggest that while our instance of LLM facilitation improves the availability of information, it may not meaningfully alter how that information is interpreted, weighted, and integrated into a final decision. This gap is, in part, a consequence of our design choices: the LLM intervened at fixed intervals with group-level messages, operating only over the shared transcript and general instructions to elicit and organize information. As a result, the facilitator primarily influenced what information entered the discussion, without shaping how that information was subsequently processed.

One implication is that more targeted process interventions could influence how information is perceived as the discussion unfolds. For example, rather than continuously aggregating information, facilitation could segment deliberation into cycles of aggregation and reflection, enabling groups to periodically synthesize and evaluate what has been shared before introducing additional information. More broadly, the appropriate structure of information aggregation is likely to be context-dependent. While the LLM in our study encouraged more balanced discussion across options, such holistic coverage may be suboptimal in time-constrained settings where dominated alternatives should be quickly eliminated. This suggests value in allowing users to specify or adapt the facilitation process to the demands of the task. Process interventions may also be applied at the decision-making stage. Introducing structured procedures such as staged evaluation, ranking, or variants of the Delphi method, could support more systematic comparison of alternatives and reduce the influence of early impressions on final decisions.

Importantly, we deliberately constrained the LLM to a process-oriented role, avoiding direct recommendations to preserve the group’s sense of ownership over the decision. Future systems that more directly shape the decision-making process (eg., by pointing to critical trade-offs or contributing judgment) may help guide more effective information use, but introduce new risks around bias and over-reliance. The “Deliberative AI” system described by Ma et al. ([Ma et al., 2025](https://arxiv.org/html/2508.08242v2#bib.bib71)) integrates both process and content interventions in a single-user system, and suggests a promising scaffold to be extended to multi-user settings.

#### 5.2.2. Managing coordination

The subjective evaluations of the LLM facilitator point to a trade-off between coordination and attention management in group-AI interactive settings. Although participants appreciated the LLM’s role in aggregating and organizing information, they also perceived it as more distracting than a human facilitator. Feedback describing excessive or disruptive interjections, and a sense of being rushed, suggests that facilitation competes for participant attention within a shared communication channel.

In addition to the content of an LLM intervention, its form may shape this trade-off. In our study, LLM facilitator messages were substantially longer than those written by human facilitators and were delivered repeatedly throughout a fixed 10-minute discussion. This format introduces both attentional and temporal pressure. Longer facilitator messages occupy more of the visible chat window, potentially crowding out participant messages and interrupting conversational flow. They also require more time to process, potentially contributing to the sense of feeling rushed and reducing the time group members have to share, discuss, and interpret information to make a decision.

Design strategies such as constraining message length, adjusting intervention frequency, or shifting toward more conversational, incremental interactions may reduce this burden. However, such changes may also affect the effectiveness of facilitation, introducing a tension between informativeness and intrusiveness that warrants further study. A complementary approach is to diversify the channels through which LLM facilitators engage participants. Rather than addressing the entire group simultaneously, facilitative systems could also interact with participants individually. This would enable the facilitator to privately deliver feedback (as studied by Do et al. ([Do et al., 2022](https://arxiv.org/html/2508.08242v2#bib.bib2))), discuss concerns or motivations, or provide tailored prompts aligned with each participant’s level of engagement, potentially reducing distraction in the shared discussion space while preserving the benefits of targeted process intervention.

#### 5.2.3. Managing emotional tension

Unlike human facilitators, LLMs may more readily directly address individual group members. Because these call-outs are visible to the entire group, they can increase social pressure to participate, potentially reducing social loafing ([Jackson and Williams, 1985](https://arxiv.org/html/2508.08242v2#bib.bib11)). However, participant feedback suggests that these interventions can also induce discomfort. Prior work by Houtti et al. ([Houtti et al., 2025](https://arxiv.org/html/2508.08242v2#bib.bib70)) suggests that when interacting with AI facilitators, group members may respond to such discomfort by rationalizing away or dismissing critical feedback, potentially undermining the effectiveness of the intervention.

This suggests another dynamic trade-off: while direct interventions may boost immediate participation, they may also erode receptivity to future interventions if they generate sufficient discomfort. As a result, the effectiveness of facilitation may depend not only on whether interventions occur, but on how they shape participants’ willingness to engage with subsequent guidance, necessitating careful calibration of when and how individuals are targeted.

### 5.3. Limitations

The effects of LLM facilitation on information sharing, decision-making, and subjective experience are shaped by several design choices in our experimental setting. Beyond the implementation of the LLM facilitator and its interface, as discussed in Section [5.2](https://arxiv.org/html/2508.08242v2#S5.SS2 "5.2. Designing more effective LLM facilitators ‣ 5. Discussion ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making"), contextual factors such as time pressure ([Kelly and Karau, 1999](https://arxiv.org/html/2508.08242v2#bib.bib47); [Kelly and Loving, 2004](https://arxiv.org/html/2508.08242v2#bib.bib46)), group size ([Cruz et al., 1997](https://arxiv.org/html/2508.08242v2#bib.bib48)), and communication modality (chat, video, audio, face-to-face) ([Shirani, 2006](https://arxiv.org/html/2508.08242v2#bib.bib50); [Lam and Schaubroeck, 2000](https://arxiv.org/html/2508.08242v2#bib.bib51); [Kerr and Murthy, 2009](https://arxiv.org/html/2508.08242v2#bib.bib52)) can significantly alter the attentional landscape of the task, in turn influencing the efficacy of LLM facilitation.

Holding the design of the LLM facilitator and task context constant, the characteristics of the hidden profile task itself may further shape these effects. For example, an HPT’s difficulty ([Schulz-Hardt et al., 2006](https://arxiv.org/html/2508.08242v2#bib.bib21); [Brodbeck et al., 2002](https://arxiv.org/html/2508.08242v2#bib.bib53)) and total information load ([Stasser and Titus, 1987](https://arxiv.org/html/2508.08242v2#bib.bib49)) may moderate both a facilitator’s ability to elicit information and the decision-making value of any additional information that is surfaced. More fundamentally, the HPT in our study is a collaborative task in a neutral domain; effectively managing divergent viewpoints and incentives in contentious ([Manata et al., 2019](https://arxiv.org/html/2508.08242v2#bib.bib12)) or competitive ([Wittenbaum et al., 2004](https://arxiv.org/html/2508.08242v2#bib.bib34); [Toma and Butera, 2009](https://arxiv.org/html/2508.08242v2#bib.bib18)) settings may require more sophisticated facilitation strategies than those considered here.

In sum, the range of factors influencing LLM-facilitated group interactions necessitate a systematic and integrative approach to future research ([Almaatouq et al., 2022](https://arxiv.org/html/2508.08242v2#bib.bib14)). By carefully examining these dimensions jointly, the field can advance toward more robust and generalizable insights into effective group-AI facilitation.

### 5.4. Open data and open-source software to support group-AI interaction research

Progress in understanding group-AI interaction is constrained by limited access to shared datasets and experimental infrastructure. While paradigms such as the HPT provide a canonical setting for studying how groups aggregate distributed information, results are often difficult to compare or build upon due to differences in implementation and the lack of accessible, process-level data. Advancing toward a cumulative science of group-AI interaction requires both richly instrumented datasets and reusable experimental platforms.

To this end, we release our dataset capturing 14,343 messages shared by 1,475 participants across 281 groups, providing a rich resource for researchers studying facilitative technologies and group decision-making. Alongside the transcripts, we provide all LLM requests and responses, along with associated metadata and LLM-generated rationales, enabling researchers to conveniently perform post-hoc analyses or simulate alternative facilitation prompts.

In addition to the dataset, we introduce the Group-AI Interaction Laboratory (GRAIL), our open-source experimental platform based on the Empirica framework ([Almaatouq et al., 2021b](https://arxiv.org/html/2508.08242v2#bib.bib13)), joining a growing library of group-AI deliberation research tools such as the Deliberate Lab platform ([Qian et al., 2025](https://arxiv.org/html/2508.08242v2#bib.bib68)). GRAIL is designed to address key practical challenges in conducting group-based behavioral experiments, including coordinating synchronous participation, managing real-time interaction, and integrating LLMs into shared communication environments. By providing a flexible interface for specifying task structure, participant-specific stimuli, and LLM intervention logic, GRAIL allows researchers to prototype and deploy new experimental designs without re-implementing the underlying system.

## 6. Conclusion

Our study demonstrates the practical capacity of LLMs to actively support group decision making discussions by directly engaging group members and prompting participation as a discussion evolves, as well as effectively summarizing rapid, information-dense communication. By raising the minimum level of individual task engagement within groups, the LLM facilitator increased both the breadth of information at a group’s disposal, and the likelihood that all group members contributed information to the decision—an outcome that is critical in settings with asymmetric information, where a single member’s private knowledge may be pivotal.

Decision-making, whether performed individually or collaboratively, is a complex, multi-stage process. Although the increased information sharing observed did not translate directly into better final decisions in our experiment, this outcome highlights the inherent complexity and context dependence of group decision-making. It also underscores the potential value of integrating computational support that focuses distinctly on each stage of the deliberative process, from initial information gathering through to evaluation and consensus formation.

By encouraging broader participation within groups, the LLM facilitator helps groups consider a wider range of perspectives, particularly from group members who might otherwise remain passive. In practical scenarios analogous to hidden profile tasks—such as hiring committees—this form of facilitation may play an important role in mitigating biases through promoting conversational equity. Moreover, continued development of computational facilitation technologies could expand access to these organizational techniques, making them available to communities unable to afford professional facilitation services.

Our work builds upon an extensive body of research within the CSCW and broader HCI communities studying the effectiveness of group decision support systems, which have historically incorporated a wide range of computational methods. The novel affordances of LLMs present an opportunity to increase the fidelity and adaptivity of these systems, and it is our hope that the robust empirical evidence of this potential that we have presented here inspires future work in this direction, and that our open-source experimental platform enables researchers to systematically explore and extend these potential benefits.

## 7. Data, code, and institutional review

Experimental data and analysis code are available on the study’s Open Science Framework repository (<https://doi.org/10.17605/OSF.IO/ERVNB>), and the GRAIL platform is available through its GitHub repository (<https://github.com/microsoft/group_ai_lab>). The study was approved by the Microsoft Research Institutional Review Board (MSR IRB; Record #10883), and all participants provided explicit consent to participate.

###### Acknowledgements.

We are grateful to Daniel Ames for his helpful insight into the hidden profile task paradigm.

## References

- Almaatouq et al. (2021a)
  A. Almaatouq, M. Alsobay, M. Yin, and D. J. Watts
  Task complexity moderates group synergy.
  Proc. Natl. Acad. Sci. U. S. A. 118 (36) (en).
  Cited by: [§1](https://arxiv.org/html/2508.08242v2#S1.p1.1 "1. Introduction ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- Almaatouq et al. (2021b)
  A. Almaatouq, J. Becker, J. P. Houghton, N. Paton, D. J. Watts, and M. E. Whiting
  Empirica: a virtual lab for high-throughput macro-level experiments.
  Behav. Res. Methods 53 (5), pp. 2158–2171 (en).
  Cited by: [§5.4](https://arxiv.org/html/2508.08242v2#S5.SS4.p3.1 "5.4. Open data and open-source software to support group-AI interaction research ‣ 5. Discussion ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- Almaatouq et al. (2022)
  A. Almaatouq, T. L. Griffiths, J. W. Suchow, M. E. Whiting, J. Evans, and D. J. Watts
  Beyond playing 20 questions with nature: integrative experiment design in the social and behavioral sciences.
  Behav. Brain Sci. 47, pp. e33 (en).
  Cited by: [§5.3](https://arxiv.org/html/2508.08242v2#S5.SS3.p3.1 "5.3. Limitations ‣ 5. Discussion ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- [4]
  D. Ames
  Grogan air: team decision exercise.
  (en).
  Note: <https://caseworks.business.columbia.edu/caseworks/grogan-air-team-decision-exercise>Accessed: 2025-3-3
  Cited by: [Appendix E](https://arxiv.org/html/2508.08242v2#A5.p1.1 "Appendix E Hidden Profile Task Design ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making"),
  [§3.2.2](https://arxiv.org/html/2508.08242v2#S3.SS2.SSS2.p1.1 "3.2.2. The Hidden Profile Task ‣ 3.2. Experiment Design & Implementation ‣ 3. Methods ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making"),
  [§4.3](https://arxiv.org/html/2508.08242v2#S4.SS3.p1.1 "4.3. Information aggregation did not translate into UWLM-consistent decisions ‣ 4. Results ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- Argyle et al. (2023)
  L. P. Argyle, C. A. Bail, E. C. Busby, J. R. Gubler, T. Howe, C. Rytting, T. Sorensen, and D. Wingate
  Leveraging AI for democratic discourse: chat interventions can improve online political conversations at scale.
  Proc. Natl. Acad. Sci. U. S. A. 120 (41), pp. e2311627120 (en).
  Cited by: [§1](https://arxiv.org/html/2508.08242v2#S1.p3.1 "1. Introduction ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making"),
  [§2.3](https://arxiv.org/html/2508.08242v2#S2.SS3.p2.1 "2.3. Group-AI Interaction ‣ 2. Related Work ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- Baron (2005)
  R. S. Baron
  So right it’s wrong: groupthink and the ubiquitous nature of polarized group decision making.
  In Advances in Experimental Social Psychology,
  Advances in experimental social psychology, Vol. 37, pp. 219–253.
  Cited by: [§1](https://arxiv.org/html/2508.08242v2#S1.p1.1 "1. Introduction ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making"),
  [§2.1](https://arxiv.org/html/2508.08242v2#S2.SS1.p3.1 "2.1. The Hidden Profile Task Paradigm of Group Decision-making Research ‣ 2. Related Work ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- Benjamini and Hochberg (1995)
  Y. Benjamini and Y. Hochberg
  Controlling the false discovery rate: a practical and powerful approach to multiple testing.
  Journal of the royal statistical society series b-methodological 57 (1), pp. 289–300 (en).
  Cited by: [§3.4](https://arxiv.org/html/2508.08242v2#S3.SS4.p1.1 "3.4. Statistical Analyses and Data Processing ‣ 3. Methods ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- Brodbeck et al. (2002)
  F. C. Brodbeck, R. Kerschreiter, A. Mojzisch, D. Frey, and S. Schulz-Hardt
  The dissemination of critical, unshared information in decision‐making groups: the effects of pre‐discussion dissent.
  Eur. J. Soc. Psychol. 32 (1), pp. 35–56 (en).
  Cited by: [§5.3](https://arxiv.org/html/2508.08242v2#S5.SS3.p2.1 "5.3. Limitations ‣ 5. Discussion ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- Brodbeck et al. (2007)
  F. C. Brodbeck, R. Kerschreiter, A. Mojzisch, and S. Schulz-Hardt
  Group decision making under conditions of distributed knowledge: the information asymmetries model.
  Acad. Manage. Rev. 32 (2), pp. 459–479 (en).
  Cited by: [§2.1](https://arxiv.org/html/2508.08242v2#S2.SS1.p1.1 "2.1. The Hidden Profile Task Paradigm of Group Decision-making Research ‣ 2. Related Work ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- Chen et al. (2025)
  X. Chen, L. Tankelevitch, R. Vanukuru, A. E. Scott, P. Panda, and S. Rintel
  Are we on track? AI-assisted active and passive goal reflection during meetings.
  In Proceedings of the 2025 CHI Conference on Human Factors in
  Computing Systems,
  New York, NY, USA, pp. 1–22 (en).
  Cited by: [§1](https://arxiv.org/html/2508.08242v2#S1.p3.1 "1. Introduction ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- Chiang et al. (2024)
  C. Chiang, Z. Lu, Z. Li, and M. Yin
  Enhancing AI-assisted group decision making through LLM-powered devil’s advocate.
  In Proceedings of the 29th International Conference on Intelligent
  User Interfaces,
  Vol. 1, New York, NY, USA.
  Cited by: [§1](https://arxiv.org/html/2508.08242v2#S1.p2.1 "1. Introduction ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making"),
  [§1](https://arxiv.org/html/2508.08242v2#S1.p3.1 "1. Introduction ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making"),
  [§2.3](https://arxiv.org/html/2508.08242v2#S2.SS3.p4.1 "2.3. Group-AI Interaction ‣ 2. Related Work ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- Christakis and Fowler (2008)
  N. A. Christakis and J. H. Fowler
  The collective dynamics of smoking in a large social network.
  N. Engl. J. Med. 358 (21), pp. 2249–2258 (en).
  Cited by: [§1](https://arxiv.org/html/2508.08242v2#S1.p2.1 "1. Introduction ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making"),
  [§2.3](https://arxiv.org/html/2508.08242v2#S2.SS3.p1.1 "2.3. Group-AI Interaction ‣ 2. Related Work ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- Claggett et al. (2025)
  E. L. Claggett, R. E. Kraut, and H. Shirado
  Relational AI: facilitating intergroup cooperation with socially aware conversational support.
  In Proceedings of the 2025 CHI Conference on Human Factors in
  Computing Systems,
  New York, NY, USA, pp. 1–22 (en).
  Cited by: [§2.3](https://arxiv.org/html/2508.08242v2#S2.SS3.p2.1 "2.3. Group-AI Interaction ‣ 2. Related Work ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- Cruz et al. (1997)
  M. G. Cruz, F. J. Boster, and J. I. Rodríguez
  The impact of group size and proportion of shared information on the exchange and integration of information in groups.
  Communic. Res. 24 (3), pp. 291–313 (en).
  Cited by: [§5.3](https://arxiv.org/html/2508.08242v2#S5.SS3.p1.1 "5.3. Limitations ‣ 5. Discussion ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- Dennis (1996)
  A. R. Dennis
  Information exchange and use in group decision making: you can lead a group to information, but you can’t make it think.
  MIS Q 20 (4), pp. 433 (en).
  Cited by: [§5.1.2](https://arxiv.org/html/2508.08242v2#S5.SS1.SSS2.p2.1 "5.1.2. Decision-making ‣ 5.1. What value did LLM facilitation add to the deliberative process? ‣ 5. Discussion ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- DeSanctis and Gallupe (1987)
  G. DeSanctis and R. B. Gallupe
  A foundation for the study of group decision support systems.
  Manage. Sci. 33 (5), pp. 589–609 (en).
  Cited by: [§2.2](https://arxiv.org/html/2508.08242v2#S2.SS2.p2.1 "2.2. Computational Approaches to Group Facilitation ‣ 2. Related Work ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- Diederich et al. (2022)
  S. Diederich, University of Göttingen, Germany, A. B. Brendel, S. Morana, L. Kolbe, TU Dresden, Germany, Saarland University, Germany, and University of Göttingen, Germany
  On the design of and interaction with conversational agents: an organizing and assessing review of human-computer interaction research.
  J. Assoc. Inf. Syst. 23 (1), pp. 96–138 (en).
  Cited by: [§2.2](https://arxiv.org/html/2508.08242v2#S2.SS2.p2.1 "2.2. Computational Approaches to Group Facilitation ‣ 2. Related Work ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- DiPierro et al. (2022)
  K. DiPierro, H. Lee, K. J. Pain, S. J. Durning, and J. J. Choi
  Groupthink among health professional teams in patient care: a scoping review.
  Med. Teach. 44 (3), pp. 309–318 (en).
  Cited by: [§1](https://arxiv.org/html/2508.08242v2#S1.p1.1 "1. Introduction ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- Do et al. (2022)
  H. J. Do, H. Kong, J. Lee, and B. P. Bailey
  How should the agent communicate to the group? communication strategies of a conversational agent in group chat discussions.
  Proc. ACM Hum. Comput. Interact. 6 (CSCW2), pp. 1–23 (en).
  Cited by: [§2.2](https://arxiv.org/html/2508.08242v2#S2.SS2.p2.1 "2.2. Computational Approaches to Group Facilitation ‣ 2. Related Work ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making"),
  [§2.3](https://arxiv.org/html/2508.08242v2#S2.SS3.p3.1 "2.3. Group-AI Interaction ‣ 2. Related Work ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making"),
  [§5.1.3](https://arxiv.org/html/2508.08242v2#S5.SS1.SSS3.p2.1 "5.1.3. Subjective experience ‣ 5.1. What value did LLM facilitation add to the deliberative process? ‣ 5. Discussion ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making"),
  [§5.2.2](https://arxiv.org/html/2508.08242v2#S5.SS2.SSS2.p3.1 "5.2.2. Managing coordination ‣ 5.2. Designing more effective LLM facilitators ‣ 5. Discussion ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- Faulmüller et al. (2012)
  N. Faulmüller, A. Mojzisch, R. Kerschreiter, and S. Schulz-Hardt
  Do you want to convince me or to be understood? preference-consistent information sharing and its motivational determinants.
  Pers. Soc. Psychol. Bull. 38 (12), pp. 1684–1696 (en).
  Cited by: [§5.1.2](https://arxiv.org/html/2508.08242v2#S5.SS1.SSS2.p3.1 "5.1.2. Decision-making ‣ 5.1. What value did LLM facilitation add to the deliberative process? ‣ 5. Discussion ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- Fink et al. (1984)
  A. Fink, J. Kosecoff, M. Chassin, and R. H. Brook
  Consensus methods: characteristics and guidelines for use.
  Am. J. Public Health 74 (9), pp. 979–983 (en).
  Cited by: [§2.2](https://arxiv.org/html/2508.08242v2#S2.SS2.p1.1 "2.2. Computational Approaches to Group Facilitation ‣ 2. Related Work ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- Gigerenzer and Goldstein (1996)
  G. Gigerenzer and D. G. Goldstein
  Reasoning the fast and frugal way: models of bounded rationality.
  Psychol. Rev. 103 (4), pp. 650–669.
  Cited by: [§3.2.2](https://arxiv.org/html/2508.08242v2#S3.SS2.SSS2.p2.1 "3.2.2. The Hidden Profile Task ‣ 3.2. Experiment Design & Implementation ‣ 3. Methods ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- Hackman and Morris (1975)
  J. R. Hackman and C. G. Morris
  Group tasks, group interaction process, and group performance effectiveness: a review and proposed integration.
  In Advances in Experimental Social Psychology,
  Advances in experimental social psychology, Vol. 8, pp. 45–99.
  Cited by: [§1](https://arxiv.org/html/2508.08242v2#S1.p1.1 "1. Introduction ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- Hart and Staveland (1988)
  S. G. Hart and L. E. Staveland
  Development of NASA-TLX (task load index): results of empirical and theoretical research.
  In Advances in Psychology,
  Advances in psychology, Vol. 382, pp. 139–183.
  Cited by: [§3.3](https://arxiv.org/html/2508.08242v2#S3.SS3.p5.1 "3.3. Outcome and Process Measures ‣ 3. Methods ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- Houtti et al. (2025)
  M. Houtti, M. Zhou, L. Terveen, and S. Chancellor
  Observe, ask, intervene: designing AI agents for more inclusive meetings.
  In Proceedings of the 2025 CHI Conference on Human Factors in
  Computing Systems,
  New York, NY, USA, pp. 1–18.
  Cited by: [§1](https://arxiv.org/html/2508.08242v2#S1.p3.1 "1. Introduction ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making"),
  [§2.3](https://arxiv.org/html/2508.08242v2#S2.SS3.p3.1 "2.3. Group-AI Interaction ‣ 2. Related Work ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making"),
  [§5.2.3](https://arxiv.org/html/2508.08242v2#S5.SS2.SSS3.p1.1 "5.2.3. Managing emotional tension ‣ 5.2. Designing more effective LLM facilitators ‣ 5. Discussion ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- Isenberg (1986)
  D. J. Isenberg
  Group polarization: a critical review and meta-analysis.
  J. Pers. Soc. Psychol. 50 (6), pp. 1141–1151 (en).
  Cited by: [§1](https://arxiv.org/html/2508.08242v2#S1.p1.1 "1. Introduction ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- Jackson and Williams (1985)
  J. M. Jackson and K. D. Williams
  Social loafing on difficult tasks: working collectively can improve performance.
  J. Pers. Soc. Psychol. 49 (4), pp. 937–942.
  Cited by: [§5.2.3](https://arxiv.org/html/2508.08242v2#S5.SS2.SSS3.p1.1 "5.2.3. Managing emotional tension ‣ 5.2. Designing more effective LLM facilitators ‣ 5. Discussion ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- Kelly and Karau (1999)
  J. R. Kelly and S. J. Karau
  Group decision making: the effects of initial preferences and time pressure.
  Pers. Soc. Psychol. Bull. 25 (11), pp. 1342–1354 (en).
  Cited by: [§2.1](https://arxiv.org/html/2508.08242v2#S2.SS1.p2.1 "2.1. The Hidden Profile Task Paradigm of Group Decision-making Research ‣ 2. Related Work ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making"),
  [§5.1.2](https://arxiv.org/html/2508.08242v2#S5.SS1.SSS2.p3.1 "5.1.2. Decision-making ‣ 5.1. What value did LLM facilitation add to the deliberative process? ‣ 5. Discussion ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making"),
  [§5.3](https://arxiv.org/html/2508.08242v2#S5.SS3.p1.1 "5.3. Limitations ‣ 5. Discussion ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- Kelly and Loving (2004)
  J. R. Kelly and T. J. Loving
  Time pressure and group performance: exploring underlying processes in the attentional focus model.
  J. Exp. Soc. Psychol. 40 (2), pp. 185–198 (en).
  Cited by: [§5.3](https://arxiv.org/html/2508.08242v2#S5.SS3.p1.1 "5.3. Limitations ‣ 5. Discussion ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- Kerr and Murthy (2009)
  D. S. Kerr and U. S. Murthy
  Beyond brainstorming: the effectiveness of computer-mediated communication for convergence and negotiation tasks.
  Int. J. Acc. Inf. Syst. 10 (4), pp. 245–262 (en).
  Cited by: [§5.3](https://arxiv.org/html/2508.08242v2#S5.SS3.p1.1 "5.3. Limitations ‣ 5. Discussion ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- Kim et al. (2021)
  S. Kim, J. Eun, J. Seering, and J. Lee
  Moderator chatbot for deliberative discussion: effects of discussion structure and discussant facilitation.
  Proc. ACM Hum. Comput. Interact. 5 (CSCW1), pp. 1–26 (en).
  Cited by: [§2.2](https://arxiv.org/html/2508.08242v2#S2.SS2.p2.1 "2.2. Computational Approaches to Group Facilitation ‣ 2. Related Work ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- Kozlowski and Ilgen (2006)
  S. W. J. Kozlowski and D. R. Ilgen
  Enhancing the effectiveness of work groups and teams.
  Psychol. Sci. Public Interest 7 (3), pp. 77–124 (en).
  Cited by: [§1](https://arxiv.org/html/2508.08242v2#S1.p1.1 "1. Introduction ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- Kumar et al. (2025)
  H. Kumar, D. M. Rothschild, D. G. Goldstein, and J. M. Hofman
  Math education with large language models: peril or promise?.
  In Artificial intelligence in education,
  Lecture Notes in Computer Science, pp. 60–75 (en).
  Cited by: [§1](https://arxiv.org/html/2508.08242v2#S1.p2.1 "1. Introduction ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- Lam and Schaubroeck (2000)
  S. S. K. Lam and J. Schaubroeck
  Improving group decisions by better pooling information: a comparative advantage of group decision support systems.
  J. Appl. Psychol. 85 (4), pp. 565–573 (en).
  Cited by: [§5.3](https://arxiv.org/html/2508.08242v2#S5.SS3.p1.1 "5.3. Limitations ‣ 5. Discussion ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- Larson et al. (1996)
  J. R. Larson, C. Christensen, A. S. Abbott, and T. M. Franz
  Diagnosing groups: charting the flow of information in medical decision-making teams.
  J. Pers. Soc. Psychol. 71 (2), pp. 315–330 (en).
  Cited by: [§2.1](https://arxiv.org/html/2508.08242v2#S2.SS1.p2.1 "2.1. The Hidden Profile Task Paradigm of Group Decision-making Research ‣ 2. Related Work ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- Larson and Christensen (1993)
  J. R. Larson and C. Christensen
  Groups as problem-solving units: toward a new meaning of social cognition.
  Br. J. Soc. Psychol. 32 (1), pp. 5–30.
  Cited by: [§1](https://arxiv.org/html/2508.08242v2#S1.p1.1 "1. Introduction ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- Larson (2010)
  J. R. Larson
  In search of synergy in small group performance.
   Psychology Press, New York, NY, US.
  Cited by: [§1](https://arxiv.org/html/2508.08242v2#S1.p1.1 "1. Introduction ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- Latané et al. (1979)
  B. Latané, K. Williams, and S. Harkins
  Many hands make light the work: the causes and consequences of social loafing.
  J. Pers. Soc. Psychol. 37 (6), pp. 822–832 (en).
  Cited by: [§1](https://arxiv.org/html/2508.08242v2#S1.p1.1 "1. Introduction ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making"),
  [§2.1](https://arxiv.org/html/2508.08242v2#S2.SS1.p3.1 "2.1. The Hidden Profile Task Paradigm of Group Decision-making Research ‣ 2. Related Work ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- Lee et al. (2024)
  S. Lee, S. Hwang, and K. Lee
  Conversational agents as catalysts for critical thinking: challenging design fixation in group design.
  arXiv [cs.HC].
  Cited by: [§1](https://arxiv.org/html/2508.08242v2#S1.p2.1 "1. Introduction ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making"),
  [§1](https://arxiv.org/html/2508.08242v2#S1.p3.1 "1. Introduction ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- Li et al. (2022)
  G. Li, G. Kou, and Y. Peng
  Heterogeneous large-scale group decision making using fuzzy cluster analysis and its application to emergency response plan selection.
  IEEE Trans. Syst. Man Cybern. Syst. 52 (6), pp. 3391–3403.
  Cited by: [§1](https://arxiv.org/html/2508.08242v2#S1.p1.1 "1. Introduction ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- Lu et al. (2012)
  L. Lu, Y. C. Yuan, and P. L. McLeod
  Twenty-five years of hidden profiles in group decision making: a meta-analysis.
  Pers. Soc. Psychol. Rev. 16 (1), pp. 54–75 (en).
  Cited by: [§2.1](https://arxiv.org/html/2508.08242v2#S2.SS1.p1.1 "2.1. The Hidden Profile Task Paradigm of Group Decision-making Research ‣ 2. Related Work ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making"),
  [§5.1.2](https://arxiv.org/html/2508.08242v2#S5.SS1.SSS2.p1.1 "5.1.2. Decision-making ‣ 5.1. What value did LLM facilitation add to the deliberative process? ‣ 5. Discussion ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- Ma et al. (2025)
  S. Ma, Q. Chen, X. Wang, C. Zheng, Z. Peng, M. Yin, and X. Ma
  Towards human-AI deliberation: design and evaluation of LLM-empowered deliberative AI for AI-assisted decision-making.
  In Proceedings of the 2025 CHI Conference on Human Factors in
  Computing Systems,
  New York, NY, USA, pp. 1–23 (en).
  Cited by: [§5.2.1](https://arxiv.org/html/2508.08242v2#S5.SS2.SSS1.p3.1 "5.2.1. Process intervention beyond information aggregation ‣ 5.2. Designing more effective LLM facilitators ‣ 5. Discussion ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- Manata et al. (2019)
  B. Manata, F. J. Boster, G. M. Wittenbaum, and D. E. Bergan
  Assessing the effects of partisan bias at the group level of analysis: a hidden profile experiment.
  American Politics Research 47 (6), pp. 1283–1302.
  Cited by: [§5.3](https://arxiv.org/html/2508.08242v2#S5.SS3.p2.1 "5.3. Limitations ‣ 5. Discussion ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- Mao et al. (2024)
  M. Mao, P. Ting, Y. Xiang, M. Xu, J. Chen, and J. Lin
  Multi-user chat assistant (MUCA): a framework using LLMs to facilitate group conversations.
  arXiv [cs.CL].
  Cited by: [§1](https://arxiv.org/html/2508.08242v2#S1.p2.1 "1. Introduction ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making"),
  [§1](https://arxiv.org/html/2508.08242v2#S1.p3.1 "1. Introduction ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making"),
  [§2.3](https://arxiv.org/html/2508.08242v2#S2.SS3.p3.1 "2.3. Group-AI Interaction ‣ 2. Related Work ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making"),
  [§5.1.3](https://arxiv.org/html/2508.08242v2#S5.SS1.SSS3.p2.1 "5.1.3. Subjective experience ‣ 5.1. What value did LLM facilitation add to the deliberative process? ‣ 5. Discussion ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- McCROSKEY (1977)
  J. C. McCROSKEY
  Oral communication apprehension: a summary of recent theory and research.
  Hum. Commun. Res. 4 (1), pp. 78–96 (en).
  Cited by: [§2.1](https://arxiv.org/html/2508.08242v2#S2.SS1.p3.1 "2.1. The Hidden Profile Task Paradigm of Group Decision-making Research ‣ 2. Related Work ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- McGrath (1984)
  J. E. McGrath
  Groups: interaction and performance.
   Prentice Hall, Old Tappan, NJ (en).
  Cited by: [§1](https://arxiv.org/html/2508.08242v2#S1.p1.1 "1. Introduction ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- McKee et al. (2023)
  K. R. McKee, A. Tacchetti, M. A. Bakker, J. Balaguer, L. Campbell-Gillingham, R. Everett, and M. Botvinick
  Scaffolding cooperation in human groups with deep reinforcement learning.
  Nat Hum Behav 7 (10), pp. 1787–1796 (en).
  Cited by: [§1](https://arxiv.org/html/2508.08242v2#S1.p2.1 "1. Introduction ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making"),
  [§2.3](https://arxiv.org/html/2508.08242v2#S2.SS3.p1.1 "2.3. Group-AI Interaction ‣ 2. Related Work ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- Mesmer-Magnus and Dechurch (2009)
  J. R. Mesmer-Magnus and L. A. Dechurch
  Information sharing and team performance: a meta-analysis.
  J. Appl. Psychol. 94 (2), pp. 535–546 (en).
  Cited by: [§3.3](https://arxiv.org/html/2508.08242v2#S3.SS3.p1.1 "3.3. Outcome and Process Measures ‣ 3. Methods ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- Miranda and Bostrom (1999)
  S. M. Miranda and R. P. Bostrom
  Meeting facilitation: process versus content interventions.
  J. Manag. Inf. Syst. 15 (4), pp. 89–114.
  Cited by: [§2.2](https://arxiv.org/html/2508.08242v2#S2.SS2.p1.1 "2.2. Computational Approaches to Group Facilitation ‣ 2. Related Work ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- Mojzisch et al. (2010)
  A. Mojzisch, L. Grouneva, and S. Schulz-Hardt
  Biased evaluation of information during discussion: disentangling the effects of preference consistency, social validation, and ownership of information.
  Eur. J. Soc. Psychol. 40 (6), pp. 946–956 (en).
  Cited by: [§1](https://arxiv.org/html/2508.08242v2#S1.p1.1 "1. Introduction ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making"),
  [§5.1.2](https://arxiv.org/html/2508.08242v2#S5.SS1.SSS2.p3.1 "5.1.2. Decision-making ‣ 5.1. What value did LLM facilitation add to the deliberative process? ‣ 5. Discussion ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- Mozannar et al. (2025)
  H. Mozannar, V. Chen, M. Alsobay, S. Das, S. Zhao, D. Wei, M. Nagireddy, P. Sattigeri, A. Talwalkar, and D. Sontag
  The RealHumanEval: evaluating large language models’ abilities to support programmers.
  Transact. Mach. Learn. Res. (en).
  Cited by: [§1](https://arxiv.org/html/2508.08242v2#S1.p2.1 "1. Introduction ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- Nicholson et al. (2021)
  D. H. Nicholson, T. Hopthrow, G. R. de Moura, and G. A. Travaglino
  ’I’ve just been pretending I can see this stuff!’: group member voice in decision-making with a hidden profile.
  Br. J. Soc. Psychol. 60 (3), pp. 1096–1124 (en).
  Cited by: [§2.1](https://arxiv.org/html/2508.08242v2#S2.SS1.p2.1 "2.1. The Hidden Profile Task Paradigm of Group Decision-making Research ‣ 2. Related Work ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making"),
  [§2.1](https://arxiv.org/html/2508.08242v2#S2.SS1.p3.1 "2.1. The Hidden Profile Task Paradigm of Group Decision-making Research ‣ 2. Related Work ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- Noy and Zhang (2023)
  S. Noy and W. Zhang
  Experimental evidence on the productivity effects of generative artificial intelligence.
  Science 381 (6654), pp. 187–192 (en).
  Cited by: [§1](https://arxiv.org/html/2508.08242v2#S1.p2.1 "1. Introduction ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- Papachristou et al. (2025)
  M. Papachristou, L. Yang, and C. Hsu
  Leveraging large language models for collective decision-making.
  Proc. ACM Hum. Comput. Interact. 9 (7), pp. 1–44 (en).
  Cited by: [§2.3](https://arxiv.org/html/2508.08242v2#S2.SS3.p3.1 "2.3. Group-AI Interaction ‣ 2. Related Work ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making"),
  [§2.3](https://arxiv.org/html/2508.08242v2#S2.SS3.p4.1 "2.3. Group-AI Interaction ‣ 2. Related Work ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making"),
  [§5.1.3](https://arxiv.org/html/2508.08242v2#S5.SS1.SSS3.p2.1 "5.1.3. Subjective experience ‣ 5.1. What value did LLM facilitation add to the deliberative process? ‣ 5. Discussion ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- Pescetelli et al. (2022)
  N. Pescetelli, P. Reichert, and A. Rutherford
  A variational-autoencoder approach to solve the hidden profile task in hybrid human-machine teams.
  PLoS One 17 (8), pp. e0272168 (en).
  Cited by: [§2.3](https://arxiv.org/html/2508.08242v2#S2.SS3.p1.1 "2.3. Group-AI Interaction ‣ 2. Related Work ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- Phillips and Phillips (1993)
  L. D. Phillips and M. C. Phillips
  Faciliated work groups: theory and practice.
  J. Oper. Res. Soc. 44 (6), pp. 533 (en).
  Cited by: [§2.2](https://arxiv.org/html/2508.08242v2#S2.SS2.p2.1 "2.2. Computational Approaches to Group Facilitation ‣ 2. Related Work ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- Qian et al. (2025)
  C. Qian, V. Tsai, M. Behr, N. Hussein, L. Laugier, N. Thain, and L. Dixon
  Deliberate lab: a platform for real-time human-AI social experiments.
  arXiv [cs.HC].
  Cited by: [§5.4](https://arxiv.org/html/2508.08242v2#S5.SS4.p3.1 "5.4. Open data and open-source software to support group-AI interaction research ‣ 5. Discussion ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- Reimer et al. (2010)
  T. Reimer, A. Reimer, and U. Czienskowski
  Decision-making groups attenuate the discussion bias in favor of shared information: a meta-analysis.
  Commun. Monogr. 77 (1), pp. 121–142 (en).
  Cited by: [§2.1](https://arxiv.org/html/2508.08242v2#S2.SS1.p1.1 "2.1. The Hidden Profile Task Paradigm of Group Decision-making Research ‣ 2. Related Work ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- Schulz-Hardt et al. (2006)
  S. Schulz-Hardt, F. C. Brodbeck, A. Mojzisch, R. Kerschreiter, and D. Frey
  Group decision making in hidden profile situations: dissent as a facilitator for decision quality.
  J. Pers. Soc. Psychol. 91 (6), pp. 1080–1093 (en).
  Cited by: [§5.3](https://arxiv.org/html/2508.08242v2#S5.SS3.p2.1 "5.3. Limitations ‣ 5. Discussion ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- Schulz-Hardt et al. (2016)
  S. Schulz-Hardt, A. Giersiepen, and A. Mojzisch
  Preference-consistent information repetitions during discussion: do they affect subsequent judgments and decisions?.
  J. Exp. Soc. Psychol. 64, pp. 41–49 (en).
  Cited by: [§1](https://arxiv.org/html/2508.08242v2#S1.p1.1 "1. Introduction ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making"),
  [§2.1](https://arxiv.org/html/2508.08242v2#S2.SS1.p2.1 "2.1. The Hidden Profile Task Paradigm of Group Decision-making Research ‣ 2. Related Work ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making"),
  [§5.1.2](https://arxiv.org/html/2508.08242v2#S5.SS1.SSS2.p3.1 "5.1.2. Decision-making ‣ 5.1. What value did LLM facilitation add to the deliberative process? ‣ 5. Discussion ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- Shamekhi and Bickmore (2019)
  A. Shamekhi and T. Bickmore
  A multimodal robot-driven meeting facilitation system for group decision-making sessions.
  In 2019 International Conference on Multimodal Interaction,
  ICMI ’19, New York, NY, USA, pp. 279–290.
  Cited by: [§2.2](https://arxiv.org/html/2508.08242v2#S2.SS2.p2.1 "2.2. Computational Approaches to Group Facilitation ‣ 2. Related Work ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- Shamekhi et al. (2018)
  A. Shamekhi, Q. V. Liao, D. Wang, R. K. E. Bellamy, and T. Erickson
  Face value? exploring the effects of embodiment for a group facilitation agent.
  In Proceedings of the 2018 CHI Conference on Human Factors in
  Computing Systems,
  New York, NY, USA.
  Cited by: [§2.2](https://arxiv.org/html/2508.08242v2#S2.SS2.p2.1 "2.2. Computational Approaches to Group Facilitation ‣ 2. Related Work ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- Shirani (2006)
  A. I. Shirani
  Sampling and pooling of decision-relevant information: comparing the efficiency of face-to-face and GSS supported groups.
  Inf. Manag. 43 (4), pp. 521–529 (en).
  Cited by: [§5.3](https://arxiv.org/html/2508.08242v2#S5.SS3.p1.1 "5.3. Limitations ‣ 5. Discussion ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- Small et al. (2023)
  C. T. Small, I. Vendrov, E. Durmus, H. Homaei, E. Barry, J. Cornebise, T. Suzman, D. Ganguli, and C. Megill
  Opportunities and risks of LLMs for scalable deliberation with polis.
  arXiv [cs.SI].
  Cited by: [§1](https://arxiv.org/html/2508.08242v2#S1.p3.1 "1. Introduction ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- Sohrab et al. (2015)
  S. G. Sohrab, M. J. Waller, and S. Kaplan
  Exploring the hidden-profile paradigm: a literature review and analysis.
  Small Group Research 46 (5), pp. 489–535.
  Cited by: [§2.1](https://arxiv.org/html/2508.08242v2#S2.SS1.p1.1 "2.1. The Hidden Profile Task Paradigm of Group Decision-making Research ‣ 2. Related Work ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- Stasser et al. (1995)
  G. Stasser, D. D. Stewart, and G. M. Wittenbaum
  Expert roles and information exchange during discussion: the importance of knowing who knows what.
  J. Exp. Soc. Psychol. 31 (3), pp. 244–265 (en).
  Cited by: [item 2](https://arxiv.org/html/2508.08242v2#S3.I1.i2.p1.1 "In 3.2.1. Facilitation ‣ 3.2. Experiment Design & Implementation ‣ 3. Methods ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- Stasser and Titus (1985)
  G. Stasser and W. Titus
  Pooling of unshared information in group decision making: biased information sampling during discussion.
  J. Pers. Soc. Psychol. 48 (6), pp. 1467–1478 (en).
  Cited by: [§1](https://arxiv.org/html/2508.08242v2#S1.p1.1 "1. Introduction ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making"),
  [§1](https://arxiv.org/html/2508.08242v2#S1.p5.1 "1. Introduction ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making"),
  [§2.1](https://arxiv.org/html/2508.08242v2#S2.SS1.p1.1 "2.1. The Hidden Profile Task Paradigm of Group Decision-making Research ‣ 2. Related Work ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making"),
  [§2.1](https://arxiv.org/html/2508.08242v2#S2.SS1.p2.1 "2.1. The Hidden Profile Task Paradigm of Group Decision-making Research ‣ 2. Related Work ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- Stasser and Titus (1987)
  G. Stasser and W. Titus
  Effects of information load and percentage of shared information on the dissemination of unshared information during group discussion.
  J. Pers. Soc. Psychol. 53 (1), pp. 81–93 (en).
  Cited by: [§5.3](https://arxiv.org/html/2508.08242v2#S5.SS3.p2.1 "5.3. Limitations ‣ 5. Discussion ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- Stasser and Titus (2003)
  G. Stasser and W. Titus
  Hidden profiles: a brief history.
  Psychol. Inq. 14 (3-4), pp. 304–313.
  Cited by: [§2.1](https://arxiv.org/html/2508.08242v2#S2.SS1.p1.1 "2.1. The Hidden Profile Task Paradigm of Group Decision-making Research ‣ 2. Related Work ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- Stasser et al. (2000)
  G. Stasser, S. I. Vaughan, and D. D. Stewart
  Pooling unshared information: the benefits of knowing how access to information is distributed among group members.
  Organ. Behav. Hum. Decis. Process. 82 (1), pp. 102–116 (en).
  Cited by: [item 2](https://arxiv.org/html/2508.08242v2#S3.I1.i2.p1.1 "In 3.2.1. Facilitation ‣ 3.2. Experiment Design & Implementation ‣ 3. Methods ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- Surowiecki (2005)
  J. Surowiecki
  The wisdom of crowds.
   Anchor Books, New York, NY.
  Cited by: [§2.1](https://arxiv.org/html/2508.08242v2#S2.SS1.p2.1 "2.1. The Hidden Profile Task Paradigm of Group Decision-making Research ‣ 2. Related Work ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- Tavana et al. (1993)
  M. Tavana, D. T. Kennedy, J. Rappaport, and Y. J. Ugras
  An AHP-delphi group decision support system applied to conflict resolution in hiring decisions.
   Journal of Personality and Social Psychology.
  Cited by: [§1](https://arxiv.org/html/2508.08242v2#S1.p1.1 "1. Introduction ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- Tessler et al. (2024)
  M. H. Tessler, M. A. Bakker, D. Jarrett, H. Sheahan, M. J. Chadwick, R. Koster, G. Evans, L. Campbell-Gillingham, T. Collins, D. C. Parkes, M. Botvinick, and C. Summerfield
  AI can help humans find common ground in democratic deliberation.
  Science 386 (6719), pp. eadq2852 (en).
  Cited by: [§1](https://arxiv.org/html/2508.08242v2#S1.p3.1 "1. Introduction ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making"),
  [§2.3](https://arxiv.org/html/2508.08242v2#S2.SS3.p2.1 "2.3. Group-AI Interaction ‣ 2. Related Work ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- Toma and Butera (2009)
  C. Toma and F. Butera
  Hidden profiles and concealed information: strategic information sharing and use in group decision making.
  Pers. Soc. Psychol. Bull. 35 (6), pp. 793–806 (en).
  Cited by: [§5.3](https://arxiv.org/html/2508.08242v2#S5.SS3.p2.1 "5.3. Limitations ‣ 5. Discussion ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- Vanukuru et al. (2025)
  R. Vanukuru, P. Panda, X. Chen, A. E. Scott, L. Tankelevitch, and S. Rintel
  Designing interfaces that support temporal work across meetings with generative AI.
  In Proceedings of the 2025 ACM Designing Interactive Systems
  Conference,
  New York, NY, USA, pp. 3600–3620.
  Cited by: [§1](https://arxiv.org/html/2508.08242v2#S1.p2.1 "1. Introduction ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making"),
  [§2.3](https://arxiv.org/html/2508.08242v2#S2.SS3.p4.1 "2.3. Group-AI Interaction ‣ 2. Related Work ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- Viller (1991)
  S. Viller
  The group facilitator: a CSCW perspective.
  In Proceedings of the Second European Conference on
  Computer-Supported Cooperative Work ECSCW ’91,
  pp. 81–95.
  Cited by: [§2.2](https://arxiv.org/html/2508.08242v2#S2.SS2.p1.1 "2.2. Computational Approaches to Group Facilitation ‣ 2. Related Work ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- Wittenbaum et al. (2004)
  G. M. Wittenbaum, A. B. Hollingshead, and I. C. Botero
  From cooperative to motivated information sharing in groups: moving beyond the hidden profile paradigm.
  Commun. Monogr. 71 (3), pp. 286–310 (en).
  Cited by: [§5.3](https://arxiv.org/html/2508.08242v2#S5.SS3.p2.1 "5.3. Limitations ‣ 5. Discussion ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- Woolley et al. (2010)
  A. W. Woolley, C. F. Chabris, A. Pentland, N. Hashmi, and T. W. Malone
  Evidence for a collective intelligence factor in the performance of human groups.
  Science 330 (6004), pp. 686–688 (en).
  Cited by: [§2.1](https://arxiv.org/html/2508.08242v2#S2.SS1.p2.1 "2.1. The Hidden Profile Task Paradigm of Group Decision-making Research ‣ 2. Related Work ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- Wu et al. (2021)
  Z. Wu, D. Ji, K. Yu, X. Zeng, D. Wu, and M. Shidujaman
  AI creativity and the human-AI co-creation model.
  In Human-Computer Interaction. Theory, Methods and Tools,
  Lecture notes in computer science, pp. 171–190.
  Cited by: [§1](https://arxiv.org/html/2508.08242v2#S1.p2.1 "1. Introduction ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").
- Xiao et al. (2016)
  Y. Xiao, H. Zhang, and T. M. Basadur
  Does information sharing always improve team decision making? an examination of the hidden profile condition in new product development.
  J. Bus. Res. 69 (2), pp. 587–595.
  Cited by: [§5.1.2](https://arxiv.org/html/2508.08242v2#S5.SS1.SSS2.p2.1 "5.1.2. Decision-making ‣ 5.1. What value did LLM facilitation add to the deliberative process? ‣ 5. Discussion ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").

## Appendix A Recruitment details and materials

A total of 1,475 participants were recruited from Prolific through the platform’s standard sample, filtered to those from the United States with self-declared fluency in English, more than 50 previous submissions to Prolific, and a submission acceptance rate greater than 95%; the exact recruitment text is shown in Figure [8](https://arxiv.org/html/2508.08242v2#A1.F8 "Figure 8 ‣ Appendix A Recruitment details and materials ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making"). Participants who completed all steps of the study, including the exit survey, were paid a flat rate of $3.75 USD. Participants were only allowed to participate once. To facilitate simultaneous recruitment of hundreds of participants within minutes, the tasks on Prolific were configured to disable the default “rate limiting” that Prolific imposes on the distribution of tasks to participants.

![A screenshot of the task instructions as presented on Prolific, outlining task expectations and requirements.](https://arxiv.org/html/2508.08242v2/figures/recruitment_text.png)


Figure 8. Prolific recruitment textA screenshot of the task instructions as presented on Prolific, outlining task expectations and requirements.

## Appendix B Pre-registration details

The study design and main analysis of the number of facts shared within groups were pre-registered ([AsPredicted #192061](https://aspredicted.org/23df-gtys.pdf)). We note two slight deviations:

- •

  We pre-registered that we would retain data from groups where every participant sent at least 1 message to the group, the group collectively sent at least 10 messages, and every participant submitted the task completion code. In a slight deviation from the last criterion, we checked that participants’ submissions were accepted on Prolific by the research team, either by submitting the correct completion code or manually by the researchers, as some participants faced technical issues where, for example, the submission code did not appear at the end, or they were unable to submit the code on Prolific.
- •

  As pre-registered, data was collected until the pre-registered count of 70 valid groups per experimental condition was met, with the exception of the “Message” treatment, for which 71 valid groups were collected as a consequence of ensuring that groups could be assigned to any treatment with equal probability.

## Appendix C Screenshots and implementation details for treatment conditions

### C.1. “None” and “Message” treatments

In both the “None” and “Message” treatments, a facilitator is not added to the group. The difference between the two conditions arises in the initial layout of the chat window; in the “Message” condition, the empty chat window shows a reminder to participants to share information (Figure [9](https://arxiv.org/html/2508.08242v2#A3.F9 "Figure 9 ‣ C.1. “None” and “Message” treatments ‣ Appendix C Screenshots and implementation details for treatment conditions ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making")). Once a group in the “Message” condition starts communication, the reminder moves to the top of the screen, before gradually being pushed out of view as the conversation expands (Figure [10](https://arxiv.org/html/2508.08242v2#A3.F10 "Figure 10 ‣ C.1. “None” and “Message” treatments ‣ Appendix C Screenshots and implementation details for treatment conditions ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making")).

![Refer to caption](https://arxiv.org/html/2508.08242v2/figures/cue_1.png)


Figure 9. Initial information sharing message

![Refer to caption](https://arxiv.org/html/2508.08242v2/figures/cue_2.png)


Figure 10. Information sharing message moving to the top of the conversation

### C.2. The “Human” facilitator condition

When a sixth participant was added to the group to act as facilitator, they saw the same chat window as other participants, but rather than receiving an information set, they were provided with the same set of instructions provided to the LLM facilitator, as shown in Figure [11](https://arxiv.org/html/2508.08242v2#A3.F11 "Figure 11 ‣ C.2. The “Human” facilitator condition ‣ Appendix C Screenshots and implementation details for treatment conditions ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making").

![Refer to caption](https://arxiv.org/html/2508.08242v2/figures/facilitator_view.png)


Figure 11. The human facilitator’s interface

## Appendix D Facilitator LLM Prompting and Prompt Formatting

To implement the LLM facilitation condition, we configured the experimental platform to automatically query GPT-4o (gpt-4o-2024-08-06) every 90 seconds during the 10-minute decision-making task (i.e., at the 1.5, 3, 4.5, 6, 7.5, and 9 minute marks, for a total of 6 queries over the duration of the task). Additionally, as they were informed in the task introduction, groups could also choose to manually query the LLM facilitator by explicitly tagging the facilitator in conversation (by typing “@Facilitator”). However, queries to the LLM could also fail, leading to slight variation in the number of messages that LLM-facilitated groups would receive from the LLM.

Automatic queries were only triggered if the group had sent at least one message, and the last message sent to the group was not sent by the LLM facilitator; otherwise, the query was skipped. By contrast, manual queries were always processed. If a query—automated or manual—failed (e.g., due to API failure), this was logged, and the group would not receive a message from the LLM for that query.

Across 70 groups in the “LLM” condition, with an expected total of 420 scheduled queries, only 26 LLM queries were skipped or failed, with 48 groups experiencing 6 LLM interventions (as intended), 18 groups experiencing 5 interventions, and 4 groups experiencing 4 interventions. Of the 26 scheduled LLM interventions that did not occur, 15 were skipped because the last message in the discussion had been sent by the LLM, 6 were skipped because the group had not begun discussing yet, and 5 were due to actual API failure. Out of 114 direct queries made by groups to the LLM, only 1 request had an API failure. No data were excluded as a consequence of scheduled query skipping or API failure.

### D.1. LLM Facilitator Prompt Structure

Each query to the LLM facilitator included the following contents in the order presented:

- •

  System prompt: The full text of the system prompt is included below, and configured as a “system” message following the OpenAI API convention.
- •

  Meeting attendees: “Meeting attendees: [list of connected group member names at time of query]”, configured as a “system” message.
- •

  Time Elapsed: “TIME ELAPSED: X minutes, Y seconds”, configured as a “system” message.
- •

  Time Remaining: “TIME REMAINING: X minutes, Y seconds”, configured as a “system” message.
- •

  Transcript at time of query: The complete group transcript from the beginning of the task to the time of the query, where each message is presented in a new line and formatted as “[X minutes ago] SENDER\_NAME: MESSAGE\_CONTENT”. The transcript is configured as a “user” message for the API.

### D.2. LLM Facilitator System Prompt

The LLM facilitator’s system prompt is as follows:

[⬇](data:text/plain;base64,QSBncm91cCBvZiBkZWNpc2lvbiBtYWtlcnMgYXJlIG1lZXRpbmcgdG8gZGVjaWRlIG9uIHdoaWNoIG9mIHRocmVlIGNpdGllcyAoRWxkb3JvbiwgTXlsb3JpYSwgQ3JhZ25pbykgc2hvdWxkIGhvc3QgYSBsYXJnZSBzcG9ydGluZyBldmVudC4KQXMgYSBmYWNpbGl0YXRvciBmb3IgdGhpcyBtZWV0aW5nLCB5b3VyIHNwZWNpZmljIHJvbGUgaXMgaGVscCB0aGUgZ3JvdXAgbWFrZSBhIGRlY2lzaW9uIGJ5LCBmaXJzdCwgbWFraW5nIHN1cmUgdGhhdCBldmVyeW9uZSBpcyBoZWFyZCBmcm9tIGFuZCBzaGFyZXMgd2hhdCB0aGV5IGtub3cgYW5kLCBzZWNvbmQsIGFjdGluZyBhcyBhIHNjb3JlYm9hcmQgYW5kIGtlZXBpbmcgdHJhY2sgb2YgcHJvcyBhbmQgY29ucy4KUGVvcGxlIG1heSBoYXZlIGRpZmZlcmVudCBpbmZvcm1hdGlvbiBhYm91dCB3aGF0IGlzIGJlaW5nIGRpc2N1c3NlZCBpbiB0aGlzIG1lZXRpbmcsIHNvIGVuY291cmFnZSBldmVyeW9uZSB0byBzaGFyZSBhbGwgb2YgdGhlIHJlbGV2YW50IGluZm9ybWF0aW9uIHRoZXkgaGF2ZS4KWW91IHdpbGwgcGVyaW9kaWNhbGx5IHJlY2VpdmUgdGhlIHRyYW5zY3JpcHQgb2YgdGhlIGdyb3VwJ3MgY29udmVyc2F0aW9uIHNvIGZhciAoYXMgd2VsbCBhcyBhbnkgcHJldmlvdXMgbWVzc2FnZXMgeW91J3ZlIHNlbnQgdGhlIGdyb3VwKSwgYW5kIHlvdSB3aWxsIGJlIGFibGUgdG8gcHJvdmlkZSB5b3VyIGlucHV0LgpNZXNzYWdlcyB5b3UgaGF2ZSBwcmV2aW91c2x5IHNlbnQgdG8gdGhlIGdyb3VwIHdpbGwgYmUgaW5jbHVkZWQgaW4gdGhlIHRyYW5zY3JpcHQgeW91IHJlY2VpdmUsIGFuZCB3aWxsIGJlIHNob3duIGFzIHNlbnQgYnkgdGhlICJGYWNpbGl0YXRvciIuCllvdSdyZSBnaXZlbiB0aGUgdGltZSByZW1haW5pbmcgZm9yIHRoZSBncm91cCB0byBtYWtlIGEgZGVjaXNpb24sIGFuZCBlYWNoIG1lc3NhZ2UgaW4gdGhlIHRyYW5zY3JpcHQgaGFzIGEgdGltZXN0YW1wLgpXaGVuIGdpdmVuIHRoZSB0cmFuc2NyaXB0LCB5b3Ugc2hvdWxkIHJlc3BvbmQgd2l0aCBhIEpTT04gY29udGFpbmluZyB0aGUgZm9sbG93aW5nOgoKTUVTU0FHRTogSW5jbHVkZSB0aGUgdGV4dCBvZiB5b3VyIG1lc3NhZ2UgaGVyZSAtLSBETyBOT1QgVVNFIE1BUktET1dOLCBidXQgeW91IGNhbiBhZGQgbmV3bGluZXMgZm9yIGZvcm1hdHRpbmcuClJBVElPTkFMRTogRXhwbGFpbiB3aHkgeW91IGNob3NlIHRoZSBtZXNzYWdlIHlvdSBkaWQuCgpSZW1lbWJlciB0aGUgZm9sbG93aW5nOgpXaGVuIGludGVydmVuaW5nLCB5b3Ugc2hvdWxkIGFpbSB0byBiZSBhcyBjb25jaXNlIGFzIHBvc3NpYmxlIHdoaWxlIHN0aWxsIHByb3ZpZGluZyBhbGwgdGhlIG5lY2Vzc2FyeSBndWlkYW5jZS4KWW91IGNhbiB0YWcgYSBzcGVjaWZpYyBwZXJzb24gaW4geW91ciBtZXNzYWdlIGJ5IHVzaW5nIHRoZSAiQCIgc3ltYm9sIGZvbGxvd2VkIGJ5IHRoZWlyIG5hbWUgaW4gc3F1YXJlIGJyYWNrZXRzIChlLmcuICJAW05BTUVdIikuIElmIHlvdSBkbyBub3QgdXNlIHRoZSBzcXVhcmUgYnJhY2tldHMsIHRoZSB0YWcgd2lsbCBub3Qgd29yay4KT05MWSBSRVNQT05EIElOIEpTT04gRk9STUFULCBETyBOT1QgUkVTUE9ORCBJTiBQTEFJTiBURVhUIQ==)

A group of decision makers are meeting to decide on which of three cities (Eldoron, Myloria, Cragnio) should host a large sporting event.

As a facilitator for this meeting, your specific role is help the group make a decision by, first, making sure that everyone is heard from and shares what they know and, second, acting as a scoreboard and keeping track of pros and cons.

People may have different information about what is being discussed in this meeting, so encourage everyone to share all of the relevant information they have.

You will periodically receive the transcript of the group’s conversation so far (as well as any previous messages you’ve sent the group), and you will be able to provide your input.

Messages you have previously sent to the group will be included in the transcript you receive, and will be shown as sent by the "Facilitator".

You’re given the time remaining for the group to make a decision, and each message in the transcript has a timestamp.

When given the transcript, you should respond with a JSON containing the following:

MESSAGE: Include the text of your message here -- DO NOT USE MARKDOWN, but you can add newlines for formatting.

RATIONALE: Explain why you chose the message you did.

Remember the following:

When intervening, you should aim to be as concise as possible while still providing all the necessary guidance.

You can tag a specific person in your message by using the "@" symbol followed by their name in square brackets (e.g. "@[NAME]"). If you do not use the square brackets, the tag will not work.

ONLY RESPOND IN JSON FORMAT, DO NOT RESPOND IN PLAIN TEXT!

## Appendix E Hidden Profile Task Design

The hidden profile task used in this study was a modified version of the “Grogan Air” team decision exercise developed by Prof. Daniel Ames at Columbia Business School ([Ames,](https://arxiv.org/html/2508.08242v2#bib.bib44) ), in which groups of 5 members review information about 3 potential candidates for an executive role at a fictional airline. The structure of the individual information sets was preserved (i.e., the polarity and visibility of facts), while the content of the facts in the information set was changed to describe fictional candidate cities to host an international sporting event akin to the Olympics. To direct groups’ focus to the facts at hand, participants were informed that “all three cities are equally qualified and capable of hosting the event from a sports infrastructure perspective, but may differ in non-critical ways” at the beginning of their individual reports.

As in “Grogan Air”, there is a total of 30 facts, with 10 facts describing each of the three options (Eldoron, Myloria, and Cragnio) with each individual group member’s information set including a subset of 14-15 facts. Figure [12](https://arxiv.org/html/2508.08242v2#A5.F12 "Figure 12 ‣ Appendix E Hidden Profile Task Design ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making") shows the content of each city’s fact set, and the distribution of the facts among each of the group’s 5 members (referred to as Pink, Red, Orange, Blue, and Green).

![Refer to caption](https://arxiv.org/html/2508.08242v2/figures/hpt_info.png)


Figure 12. Hidden profile task information distribution: Each of the 3 candidate cities is described by 10 facts. In turn, each fact is defined by its polarity (red for negative, grey for neutral, and green for positive) and visibility, indicated by the check marks showing which group members (Pink, Red, Orange, Blue, Green) it is visible to.

Following the structure of “Grogan Air”, we aimed to phrase facts that would be widely perceived as negatively or positively affecting a city’s ability to host such an event, as well as facts that would not plausibly affect a host city’s eligibility. To validate whether these facts were perceived as intended, 119 Prolific participants (who did not participate in the main experiment) were randomly assigned to one of the five information sets, presented with the same instructions provided in the main experiment, and asked to rate each fact on a Likert scale of 1 (“very negative”) to 7 (“very positive”), with 4 labeled as “Neutral” (see Figure [13](https://arxiv.org/html/2508.08242v2#A5.F13 "Figure 13 ‣ Appendix E Hidden Profile Task Design ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making") below for the exact instructions); the facts were presented by information set so that survey respondents would view them in the same conditions (e.g., adjacent facts) as participants from the main experiment.

As shown in Figure [14](https://arxiv.org/html/2508.08242v2#A5.F14 "Figure 14 ‣ Appendix E Hidden Profile Task Design ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making"), facts about the cities were generally perceived as intended, with the exception of some neutral facts leaning towards positive. Out of 30 facts, 25 were rated as “dealbreakers” by less than 5% of respondents, with the most “dealbreaking” fact being “In the past, residents have complained about noise from large events”, as rated by 17% of respondents; in aggregate, these results suggest the absence of overwhelmingly influential facts.

![Refer to caption](https://arxiv.org/html/2508.08242v2/figures/fact_rating_survey_instructions.png)


Figure 13. Fact rating survey instructions


Figure 14. Fact polarity evaluation survey: Each survey respondent was individually shown one of the five information sets (Pink, Red, Orange, Blue, Green) and rated the facts it contained from 1 (very negative) to 7 (very positive), with 4 being described as “neutral”. Error bars indicate 95% CIs of the given ratings, and the grey vertical line in each cluster of positive/neutral/negative facts indicates the within-cluster average of average fact ratings across information sets.

## Appendix F Using an auxiliary LLM to detect fact mentions in group discussion

The hidden profile task used in the study includes a total of 30 facts. To detect when these facts are mentioned in a group’s discussion, we prompt GPT-4o (gpt-4o-2024-08-06) with instructions for the fact detection task and a list of all 30 facts (as shown in Appendix [F.1](https://arxiv.org/html/2508.08242v2#A6.SS1 "F.1. Fact detection system prompt ‣ Appendix F Using an auxiliary LLM to detect fact mentions in group discussion ‣ Bringing Everyone to the Table: An Experimental Study of LLM-Facilitated Group Decision Making") below). Each group discussion is processed as a single transcript, rather than processing each message individually, to allow the LLM to detect implicit references, e.g., saying “yeah but the parking there is pretty bad” in response to an earlier mention of Cragnio.

The LLM’s fact detection performance was validated against a set of 5 randomly selected group transcripts manually labeled with mentioned facts by the authors; this validation set included a total of 272 messages, 177 of which included no facts, 70 of which included 1 fact, and 25 of which included more than 1 fact. The lists of facts detected by the humans and LLM annotator match exactly in 95% of the 272 test cases; all 14 cases in which the annotators differed involved a single fact that the human annotator detected as an implicit mention, while the LLM annotator did not.

The inclusion of facilitator messages in the annotated transcripts introduces another way to verify the consistency of annotations. Because the facilitators do not have access to an information set, their messages should not introduce new facts to the discussion, and any facts the annotator detects in a facilitator’s message must be detected in a message preceding it in the discussion. Out of 1,133 messages sent by facilitators, only 2 fail this checksum. In the first case, a fact was correctly detected in a facilitator’s summary but was missed in the original participant message where it first appeared. In the second case, the annotator incorrectly attributes two additional facts to a facilitator’s message; while the cause is unclear, these same facts are correctly detected in the immediately following participant message, meaning the error does not affect group-level fact coverage.

In general, these findings suggest that the LLM fact detection measure works acceptably well; any peculiarities in its performance would likely affect conversations across the different experimental treatments similarly, and thus not affect the differences we observe between treatments.

### F.1. Fact detection system prompt

The system prompt used for the auxiliary, post-hoc fact detecting LLM is as follows:

[⬇](data:text/plain;base64,QSBncm91cCBvZiBleGVjdXRpdmVzIG1ldCB0byBkaXNjdXNzIGhvc3RpbmcgYW4gZXZlbnQgaW4gb25lIG9mIHRocmVlIGNpdGllczogRWxkb3JvbiwgTXlsb3JpYSwgYW5kIENyYWduaW8uCkJlbG93IGFyZSBwaWVjZXMgb2YgaW5mb3JtYXRpb24gYWJvdXQgZWFjaCBjaXR5OyB5b3Ugd2lsbCBiZSBnaXZlbiB0aGUgZXhlY3V0aXZlcycgY29udmVyc2F0aW9uLCBhbmQgc2hvdWxkIHJldHVybiBsaXN0cyBvZiB0aGUgcGllY2VzIG9mIGluZm9ybWF0aW9uIHRoYXQgYXJlIG1lbnRpb25lZCBpbiBlYWNoIG1lc3NhZ2UgZnJvbSB0aGUgY29udmVyc2F0aW9uLgoKRm9yIGV4YW1wbGUsIGlmIHRoZSBtZXNzYWdlIHdhcyAnd2VsbCwgeWVhaCwgYnV0IGNyYWduaW8gaGFzIG5vaXNlIGNvbXBsYWludHMgYW5kIGdvb2Qgd2VhdGhlcicsIHRoZSBjb3JyZWN0IHJlc3BvbnNlIHdvdWxkIGJlIHRvIHJldHVybiBbJ0M2JywgJ0MxMCddIGZvciB0aGF0IG1lc3NhZ2UuCk9ubHkgaW5jbHVkZSBhIGZhY3QgaWYgaXQgaXMgZGlyZWN0bHkgcmVmZXJlbmNlZC4gRm9yIGV4YW1wbGUsIGEgbWVzc2FnZSBzYXlpbmcgJ29rLCBsZXQncyBzdGFydCBieSBkaXNjdXNzaW5nIGVsZG9yb24nIG9yICdpIHRoaW5rIHRoYXQgY2xpbWF0ZS93ZWF0aGVyIGlzIGEgcGFydGljdWxhcmx5IGltcG9ydGFudCBjb25zaWRlcmF0aW9uIGZvciB0aGUgY29tZm9ydCBvZiBvdXIgdmlzaXRvcnMnIGRvZXMgbm90IHJlZmVyIHRvIGFueSBzaW5nbGUgZmFjdC4KCkVhY2ggbWVzc2FnZSBpbiB0aGUgY29udmVyc2F0aW9uIGlzIHByZXNlbnRlZCBpbiB0aGUgZm9ybWF0IFtNRVNTQUdFIElEXTogU1BFQUtFUjogVEVYVC4KClJFVFVSTiBBIEpTT04gT0JKRUNUIFdIRVJFIFRIRSBLRVkgSVMgVEhFIE1FU1NBR0UgSUQsIEFORCBUSEUgVkFMVUUgSVMgVEhFIExJU1QgT0YgRkFDVCBJRFMgTUVOVElPTkVEIElOIFRIQVQgTUVTU0FHRS4KSUYgTk8gRkFDVFMgQVJFIE1FTlRJT05FRCBJTiBBIE1FU1NBR0VELCBSRVRVUk4gQU4gRU1QVFkgTElTVCBBUyBUSEUgVkFMVUUgRk9SIFRIQVQgTUVTU0FHRS4KRVZFUlkgTUVTU0FHRSBTSE9VTEQgSEFWRSBBTiBFTlRSWSBJTiBUSEUgUkVUVVJORUQgSlNPTiBPQkpFQ1QuCgpUaGUgYmFuayBvZiBmYWN0cyBpczoKCkNyYWduaW8KQzE6IFJlc2lkZW50cyBoYXZlIGEgcmVwdXRhdGlvbiBmb3IgYmVpbmcgZnJpZW5kbHkgYW5kIHdlbGNvbWluZyBvZiB2aXNpdG9ycwpDMjogQ2l0eSdzIGRyeSBzZWFzb24gY29pbmNpZGVzIHdpdGggdGhlIGV2ZW50IGRhdGVzLCBtaW5pbWl6aW5nIHJpc2sgb2YgcmFpbgpDMzogU2hvcHBpbmcgY2VudGVycyBhcmUgcG9wdWxhciB3aXRoIHZpc2l0b3JzCkM0OiBDb25zaWRlcmVkIGEgaHViIGZvciBiaW90ZWNoIGluIHRoZSByZWdpb24KQzU6IFJlY2VudCBhcmNoZW9sb2dpY2FsIGRpZyBmZWF0dXJlZCBpbiBhIG1hZ2F6aW5lCkM2OiBJbiB0aGUgcGFzdCwgcmVzaWRlbnRzIGhhdmUgY29tcGxhaW5lZCBhYm91dCBub2lzZSBmcm9tIGxhcmdlIGV2ZW50cwpDNzogVmFyaWV0eSBvZiBpbnRlcm5hdGlvbmFsIGN1aXNpbmUgbWF5IGJlIGxpbWl0ZWQKQzg6IFNvbWUgdmlzaXRvcnMgd2l0aCBjYXJzIGNvbXBsYWluIGFib3V0IHBhcmtpbmcgYXZhaWxhYmlsaXR5CkM5OiBPbmx5IGEgZmV3IGFjdGl2aXRpZXMgZ2VhcmVkIHRvd2FyZHMgZmFtaWxpZXMgd2l0aCBjaGlsZHJlbgpDMTA6IENvbWZvcnRhYmxlIGV2ZW5pbmcgdGVtcGVyYXR1cmVzCgpFbGRvcm9uCkUxOiBIaWdoZXIgdGhhbiBhdmVyYWdlIGh1bWlkaXR5CkUyOiBXZWxsLWtub3duIGZvciBpdHMgY29tZm9ydGFibGUgYnJlZXplcwpFMzogSG9tZSBvZiB0aGUgS2luZXRpY2EgTW90b3JzIG1hbnVmYWN0dXJpbmcgcGxhbnQKRTQ6IExvY2FsIGJvdGFuaWNhbCBnYXJkZW4gaGFzIG9uZSBvZiB0aGUgaGlnaGVzdCByYXRlcyBvZiBwbGFudCBkaXZlcnNpdHkKRTU6IFBvcHVsYXIgZGVzdGluYXRpb24gZm9yIGNvbmNlcnRzIGFuZCBjb25mZXJlbmNlcwpFNjogSGFzIGEgcmVwdXRhdGlvbiBmb3IgYW4gZWFzeS10by1uYXZpZ2F0ZSBwdWJsaWMgdHJhbnNwb3J0YXRpb24gZXhwZXJpZW5jZQpFNzogRGVkaWNhdGVkIGN1bHR1cmFsIHZpbGxhZ2VzIGZvciB2aXNpdG9ycyBkdXJpbmcgbWFqb3IgZXZlbnRzCkU4OiBSYXRlZCBhcyBhIHRvcCB0b3VyaXN0IGRlc3RpbmF0aW9uCkU5OiBGcmllbmRseSBhbmQgd2VsY29taW5nIHJlc2lkZW50cwpFMTA6IFN0cm9uZyBjdWx0dXJlIG9mIHNwb3J0cyBhbmQgZml0bmVzcwoKTXlsb3JpYQpNMTogVmlzaXRvcnMgc29tZXRpbWVzIGNvbW1lbnQgdGhhdCBjaXR5J3MgbGF5b3V0IGlzIGNvbmZ1c2luZwpNMjogU3VwcG9ydGl2ZSBsb2NhbCBidXNpbmVzc2VzCk0zOiBIYXMgYSBwbGFuIHRvIHJlcHVycG9zZSBmYWNpbGl0aWVzIGZvciBjb21tdW5pdHkgc3BvcnRzIGFmdGVyIHRoZSBldmVudApNNDogQ29tbXVuaXR5IG9mIHZvbHVudGVlcnMgZWFnZXIgdG8gaGVscCB3aXRoIHRoZSBldmVudApNNTogVmlicmFudCBuaWdodGxpZmUgc2NlbmUgdG8ga2VlcCB2aXNpdG9ycyBlbnRlcnRhaW5lZApNNjogTG93IHN1biBpbmRleCBpbiB0aGUgYXJlYSBtaW5pbWl6ZXMgcmlzayBvZiBzdW5idXJuCk03OiBIb21lIG9mIGEgcmVub3duZWQgc3dlZXQgcGFzdHJ5IGJha2VyeQpNODogVmlzaXRvcnMgb2NjYXNpb25hbGx5IGNvbXBsYWluIGFib3V0IHRyYWZmaWMgaW4gdGhlIGNpdHkKTTk6IEV2ZW5pbmdzIGNhbiBiZSB3YXJtZXIgdGhhbiBhdmVyYWdlLCBjYXVzaW5nIHNsaWdodCBkaXNjb21mb3J0Ck0xMDogSGlnaCBudW1iZXIgb2YgdW5pdmVyc2l0aWVzIGFuZCByZXNlYXJjaCBpbnN0aXR1dGlvbnM=)

A group of executives met to discuss hosting an event in one of three cities: Eldoron, Myloria, and Cragnio.

Below are pieces of information about each city; you will be given the executives’ conversation, and should return lists of the pieces of information that are mentioned in each message from the conversation.

For example, if the message was ’well, yeah, but cragnio has noise complaints and good weather’, the correct response would be to return [’C6’, ’C10’] for that message.

Only include a fact if it is directly referenced. For example, a message saying ’ok, let’s start by discussing eldoron’ or ’i think that climate/weather is a particularly important consideration for the comfort of our visitors’ does not refer to any single fact.

Each message in the conversation is presented in the format [MESSAGE ID]: SPEAKER: TEXT.

RETURN A JSON OBJECT WHERE THE KEY IS THE MESSAGE ID, AND THE VALUE IS THE LIST OF FACT IDS MENTIONED IN THAT MESSAGE.

IF NO FACTS ARE MENTIONED IN A MESSAGED, RETURN AN EMPTY LIST AS THE VALUE FOR THAT MESSAGE.

EVERY MESSAGE SHOULD HAVE AN ENTRY IN THE RETURNED JSON OBJECT.

The bank of facts is:

Cragnio

C1: Residents have a reputation for being friendly and welcoming of visitors

C2: City’s dry season coincides with the event dates, minimizing risk of rain

C3: Shopping centers are popular with visitors

C4: Considered a hub for biotech in the region

C5: Recent archeological dig featured in a magazine

C6: In the past, residents have complained about noise from large events

C7: Variety of international cuisine may be limited

C8: Some visitors with cars complain about parking availability

C9: Only a few activities geared towards families with children

C10: Comfortable evening temperatures

Eldoron

E1: Higher than average humidity

E2: Well-known for its comfortable breezes

E3: Home of the Kinetica Motors manufacturing plant

E4: Local botanical garden has one of the highest rates of plant diversity

E5: Popular destination for concerts and conferences

E6: Has a reputation for an easy-to-navigate public transportation experience

E7: Dedicated cultural villages for visitors during major events

E8: Rated as a top tourist destination

E9: Friendly and welcoming residents

E10: Strong culture of sports and fitness

Myloria

M1: Visitors sometimes comment that city’s layout is confusing

M2: Supportive local businesses

M3: Has a plan to repurpose facilities for community sports after the event

M4: Community of volunteers eager to help with the event

M5: Vibrant nightlife scene to keep visitors entertained

M6: Low sun index in the area minimizes risk of sunburn

M7: Home of a renowned sweet pastry bakery

M8: Visitors occasionally complain about traffic in the city

M9: Evenings can be warmer than average, causing slight discomfort

M10: High number of universities and research institutions

## Appendix G Screenshots of the introduction and exit survey interfaces

### G.1. Introduction and attention check

Participants are introduced to the purpose of the meeting and the task to be completed, then complete a brief attention check.

![[Uncaptioned image]](https://arxiv.org/html/2508.08242v2/figures/intro_1.png)
![[Uncaptioned image]](https://arxiv.org/html/2508.08242v2/figures/intro_2.png)
![[Uncaptioned image]](https://arxiv.org/html/2508.08242v2/figures/intro_3.png)

### G.2. Decision reporting and exit survey

Participants individually and asynchronously report the decision their group made, as well as their subjective evaluations of the task, their group, and their facilitator if they had one.

![[Uncaptioned image]](https://arxiv.org/html/2508.08242v2/figures/exit_1.png)

![[Uncaptioned image]](https://arxiv.org/html/2508.08242v2/figures/exit_2.png)


![[Uncaptioned image]](https://arxiv.org/html/2508.08242v2/figures/exit_3.png)

![[Uncaptioned image]](https://arxiv.org/html/2508.08242v2/figures/exit_4.png)
