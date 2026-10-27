---
id: web-ojs-aaai-org-b14a3753ac-text
type: material
title: Understanding Online Polarization Through Human-Agent Interaction in a Synthetic
  LLM-Based Social Network
work_id: web-ojs-aaai-org-b14a3753ac
source_url: https://ojs.aaai.org/index.php/ICWSM/article/download/35826/37980
retrieved_at: '2026-10-27'
conversion: pdf_text_extraction
quality_note: Текст извлечён из PDF с сохранением номеров страниц. Порядок колонок,
  таблицы, формулы и подписи могут быть искажены; рисунки доступны по ссылке на PDF.
  Это текстовая конверсия, не визуально эквивалентный оригинал.
language: original
sha256_text: 342547ee4ca02800e1b840bda6514f4c68c8d83c325c67ca2ab4662ddc5c4b1c
---

> Источник: [https://ojs.aaai.org/index.php/ICWSM/article/download/35826/37980](https://ojs.aaai.org/index.php/ICWSM/article/download/35826/37980). Текст извлечён из PDF с сохранением номеров страниц. Порядок колонок, таблицы, формулы и подписи могут быть искажены; рисунки доступны по ссылке на PDF. Это текстовая конверсия, не визуально эквивалентный оригинал.

## Страница 1

                Proceedings of the Nineteenth International AAAI Conference on Web and Social Media (ICWSM 2025)




   Understanding Online Polarization Through Human-Agent Interaction in a
                     Synthetic LLM-Based Social Network

                         Tim Donkers1, Jürgen Ziegler1
                                              1University of Duisburg-Essen
                                 tim.donkers@uni-due.de, juergen.ziegler@uni-due.de




                      Abstract                                 clustering (Treuillier et al. 2024; Bond and Sweitzer 2022;
                                                     Al Amin et al. 2017), or topic modeling (Kim, Tak, and Cho
  The rise of social media has fundamentally transformed how                                                          2019; Chen et al. 2021). These approaches reveal macro-
   people engage in public discourse and form opinions. While
                                                                      level patterns but cannot fully disentangle causal factors. In   these platforms offer unprecedented opportunities for demo-
                                                                          parallel, theoretical simulations and opinion dynamics mod-   cratic engagement, they have been implicated in increasing
   social polarization and the formation of ideological echo          els (Hegselmann and Krause 2002; DeGroot 1974; Sasahara
  chambers. Previous research has primarily relied on obser-          et al. 2021; Del Vicario et al. 2017) allow for more con-
   vational studies of social media data or theoretical modeling          trolled experimentation, yet tend to rely on simplified in-
   approaches, leaving a significant gap in our understanding          teraction rules that underrepresent the complexities of real
   of how individuals respond to and are influenced by polar-       human communication.
   ized online environments. Here we present a novel exper-          Meanwhile, advances in large language model (LLM)
   imental framework for investigating polarization dynamics                                                            technology have opened new avenues for simulating online
   that allows human users to interact with LLM-based artificial
                                                               discourse and opinion formation (Chuang et al. 2024; Breum   agents in a controlled social network simulation. Through a
                                                                          et al. 2024; Ohagi 2024). Despite this progress, compara-   user study with 122 participants, we demonstrate that this ap-
  proach can successfully reproduce key characteristics of po-          tively little work has involved experimental studies with hu-
   larized online discourse while enabling precise manipulation      man participants interacting alongside these artificial agents.
   of environmental factors. Our results provide empirical val-       Such user studies could offer direct evidence of how polar-
   idation of theoretical predictions about online polarization,         ized environments influence individual attitudes, social per-
  showing that polarized environments significantly increase         ceptions, and engagement patterns, thus illuminating mecha-
   perceived emotionality and group identity salience while re-        nisms that purely observational or simplified simulated data
  ducing expressed uncertainty. These findings extend previous        cannot capture.
   observational and theoretical work by providing causal evi-
                                                                  In this paper, we address this gap by proposing a novel
  dence for how specific features of online environments influ-
                                                             experimental framework that integrates LLM-based agents  ence user perceptions and behaviors. More broadly, this re-
   search introduces a powerful new methodology for studying        and human participants within a synthetic social network
   social media dynamics, offering researchers unprecedented         platform. By focusing on message posting, interaction mod-
   control over experimental conditions while maintaining eco-          eling, and recommendation mechanisms, we recreate a real-
   logical validity.                                                            istic microcosm of polarized discourse. We then collect de-
                                                                        tailed pre- and post-interaction survey data on participants’
                                                                 opinions, platform perceptions, and behavioral tendencies to
             1  Introduction                                              map how exposure to polarized content and LLM-driven in-
Online social networks have profoundly reshaped how in-       teractions shapes users’ subsequent viewpoints.
dividuals consume information and form opinions, offer-       Our research makes the following key contributions:
ing both new possibilities for democratic engagement and
novel challenges to societal cohesion. Although a substan-       1. Synthetic Network Testbed: We develop and deploy a
tial body of research has mapped the prevalence of social         platform where LLM-based agents produce contextually
polarization—often characterized by the formation of ideo-           relevant, polarized content, providing a controlled yet re-
logically distinct groups and limited cross-group interaction            alistic environment for human experimentation.
(Grover 2022; Kubin and Sikorski 2021; Bail et al. 2018)—       2. Experimental Insights: Through our user study, we
much of this knowledge stems from two main methodologi-          track how polarized discussions influence emotional en-
cal streams. Observational studies harness large-scale social         gagement, identity salience, and willingness to express
media data through sentiment analysis (Karjus and Cusk-          uncertainty, offering empirical insights into mechanisms
ley 2024; Alsinet et al. 2021; Buder et al. 2021), network          of online polarization.
Copyright © 2025, Association for the Advancement of Artificial       3. Future Research Framework: Our approach serves
Intelligence (www.aaai.org). All rights reserved.                         as a replicable template for investigating other facets


                                                   457

## Страница 2

   of online social dynamics—including recommendation       rule-based ABM (Ghaffarzadegan et al. 2024; Gao et al.
   bias, echo chamber formation, and potential intervention      2023a). Studies have shown that LLM agents can repli-
    strategies.                                                     cate polarization dynamics (Ohagi 2024), information diffu-
                                                                      sion, and emotional contagion through text exchanges (Gao
  Empirical findings from our study indicate that exposure
                                                                          et al. 2023b), and respond to persuasive rhetorical strategies
to polarized exchanges significantly amplifies participants’
                                                    (Breum et al. 2024). However, these agent-agent simulations
emotional responses and heightens perceived in-group iden-
                                                                 often lack the direct theoretical grounding of classical mod-
tities. Moreover, recommendation bias was found to inter-
                                                                        els or rigorous validation with human behavior.
act with polarized content to further skew user engagement,
                                                              Experimental studies involving human participants of-
thus underscoring the need for experimental methods in the
                                                                        fer unique potential for causal inference but remain rela-
ongoing investigation of online polarization.
                                                                       tively scarce compared to observational and modeling work.
  The remainder of this paper is organized as follows. Sec-                                                             Building on foundations in social psychology regarding con-
tion 2 briefly reviews related research on online polariza-                                                              formity and group identity (Asch 1951; Tajfel et al. 1971),
tion and LLM-based simulations. Section 3 introduces our                                                          contemporary experiments often focus on targeted interven-
simulation model and agent design. Section 4 details the                                                                         tions, examining how specific factors like content exposure
methodology, metrics, and outcomes of our user study. Sec-                                                        (Banks et al. 2021) or social identity cues (Wuestenenk, Tu-
tion 5 discusses broader implications, and Section 6 con-                                                               bergen, and Stark 2023) affect perceptions or attitudes in
cludes with suggestions for future work.                                                                  controlled settings. Other studies use simplified experimen-
                                                                                tal tasks (e.g., numeric estimations) to calibrate parameters
            2  Related Work                          for formal opinion dynamics models (Chacoma and Zanette
Research on social polarization in online networks spans      2015; Das, Gollapudi, and Munagala 2014). While valuable,
multiple disciplines and methodologies, primarily falling       these approaches typically either lack the ecological validity
into three streams: observational studies, theoretical mod-       of a full social media environment or constrain interaction
eling, and experimental user studies.                               in ways that miss the nuances of online discourse.
  Observational studies leverage large-scale social media       Our work bridges these gaps by developing an experimen-
data to map polarization patterns. Early work identified ide-        tal framework that integrates LLM-based agents generating
ologically segregated networks and the role of user choice        realistic discourse within a controlled simulation environ-
and algorithms in echo chambers (Conover et  al. 2011;      ment, allowing human participants to interact naturally. This
Bakshy, Messing, and Adamic 2015). Subsequent research      approach enables the systematic manipulation of environ-
confirmed these patterns across diverse platforms (Yarchi,      mental factors (like discourse polarization and recommen-
Baden, and Kligler-Vilenchik 2021) and explored user roles       dation bias) grounded in modeling principles, while measur-
in information dissemination (Jiang et al. 2020). While re-      ing behavioral and perceptual responses in an ecologically
vealing macro-level trends, these studies face challenges in       relevant context, thus combining the strengths of controlled
disentangling underlying micro-mechanisms.                    experimentation and realistic interaction.
  Theoretical models simulate opinion dynamics to under-
stand how collective patterns emerge from individual inter-               3  Simulation Model
actions. Classical models, such as weighted averaging (De-     Our computational framework integrates opinion dynamics
Groot 1974) and bounded confidence frameworks (Hegsel-       principles with LLM-based agents to investigate polariza-
mann and Krause 2002), established basic mechanisms lead-       tion in social networks. The framework employs OpenAI’s
ing to consensus or opinion clustering but often relied on      GPT-4o-mini model1 to create agents capable of generat-
simplified interaction rules. Modern extensions incorporate      ing realistic content through posts, comments, and reposts,
greater psychological realism by modeling cognitive biases       as well as performing social media interactions such as lik-
like confirmation bias (Del Vicario et al. 2017), network      ing and following. The system architecture comprises three
rewiring dynamics (Sasahara et al. 2021), and the crucial      primary components: an agent-based architecture, an LLM
role of algorithmic amplification in shaping exposure and       infrastructure for content generation, and a social network
reinforcing divisions (Donkers and Ziegler 2023; Geschke,       structure for information dissemination.
Lorenz, and Holtz 2019). Some work in this area specifically       Each agent in our simulation represents an individual user,
explores recommendation strategies aimed at mitigating po-       characterized by a continuous opinion value oi ∈[−1, 1]
larization or fostering diversity (Stray 2022; Donkers and       (negative=opposition, positive=support), a personality de-
Ziegler 2021; Garimella et al. 2017). Overall, these com-       scription, a biography, and an interaction history. The ini-
putational opinion dynamics models offer methodologically        tial opinion distribution is configurable: for polarized con-
rigorous insights into specific mechanisms but typically ab-       ditions, a bimodal distribution (e.g., centered at ±0.8) is
stract away the complexities of natural language communi-       used, while for moderate conditions, a unimodal distribu-
cation that characterize real-world online discourse.               tion (e.g., centered at 0) is employed (see Appendix A for
  Recent advances in large language models (LLMs) have        details). Agents are also distinguished as regular users or in-
spurred a new wave of simulation approaches. Integrating       fluencers, with influencers having higher posting probabili-
LLMs into agent-based modeling (ABM) allows for simu-        ties (pinf > preg) and greater network influence.
lations with richer, language-based interactions, potentially
enhancing the behavioral realism compared to traditional           1https://platform.openai.com/docs/overview


                                                   458

## Страница 3

  Message generation relies on LLM prompting structured       the highest influence scores η. This maintains controlled ex-
by multiple contextual elements: the agent’s specific opin-      posure while incorporating network structure effects.
ion value (oi), the topic description, their personality, recent       The simulation operates through discrete time steps, with
interactions, and opinion intensity-based instructions (e.g.,      each iteration encompassing content generation, agent in-
expressing more certainty and emotion for higher |oi|). This       teractions (based on the probabilistic model and recom-
comprehensive context ensures messages reflect individual      mendations), and network evolution. This allows for exam-
characteristics and appropriate discourse patterns. Detailed       ining emergent phenomena like network polarization and
prompting components are listed in Appendix A, Table ??.       echo chamber formation. Further mathematical formaliza-
  Agent interactions (likes, comments, reposts) are gov-       tions, specific parameter settings, and the simulation algo-
erned by a probabilistic model, Preact(Ai, m), determining      rithm pseudocode are provided in Appendix A.
the likelihood of agent Ai reacting to a message m. The in-
teraction probability is formalized as:                                 4  User Study
                                                                In this section, we will investigate how discussion polariza-
        Preact(Ai, m) = pb ·  (1 −w) + w · ψ(oi)  ·               tion and algorithmic content curation in social media envi-
                                                         ronments affect human perception of debates and their en-
                        ρ(oi, π(Ai, m))                 (1)                                                       gagement behavior. Through a controlled experiment using
  This equation combines three key components: (1) a base      a simulated social media platform, we examine how differ-
probability (pb) specific to the interaction type (like, com-       ent levels of discussion polarization (polarized vs. moder-
ment, repost); (2) the agent’s opinion strength (ψ(|oi|)),       ate) and recommendation bias (pro, balanced, contra) shape
where agents with stronger opinions have a higher base-      opinion formation and interaction patterns.
line reactivity, weighted by parameter w; and (3) an opinion
alignment function ρ(oi, π(Ai, m)).                       Experimental Design
  The function π(Ai, m) uses an LLM to assess the opin-    We employed a 2 × 3 between-subjects factorial design to
ion expressed in message m relative to agent Ai’s con-       investigate the dynamics of opinion formation and percep-
text, mapping it to the [−1, 1] scale. The alignment func-       tion of polarization in online discussions. The experimen-
tion ρ (detailed in Appendix A) calculates the reaction like-        tal design manipulated two key dimensions: the Polariza-
lihood based on the similarity (ρsim) or difference (ρopp) be-       tion Degree in the artificial agent population and a system-
tween the agent’s opinion oi and the assessed message opin-        atic Recommendation Bias while maintaining Universal Ba-
ion π(Ai, m). It uses sigmoid functions to model a contin-       sic Income (UBI) as the consistent discussion topic.
uous transition, resulting in a U-shaped probability curve      We employed a 2×3 between-subjects factorial design to
(see Appendix A, Figure 3): interactions are likely for high       investigate the dynamics of opinion formation and percep-
agreement (ρsim dominates) and, to a controlled extent, for       tion of polarization in online discussions. The experimen-
high disagreement (ρopp dominates), but unlikely for neu-        tal design manipulated two key dimensions: the Polariza-
tral alignment. Crucially, the influence of disagreement is       tion Degree in the artificial agent population and a system-
modulated by a cross-ideology factor c ∈[0, 1], which is        atic Recommendation Bias while maintaining Universal Ba-
set higher for comments and reposts (c > 0) than for likes       sic Income (UBI) as the consistent discussion topic. This
(c = 0), enabling cross-ideological engagement for more      design allows us to compare the effects of high polariza-
active interaction types.                                            tion against a baseline of moderate polarization. Our focus
  The social network is modeled as a directed graph where        is specifically on understanding how increasing the inten-
nodes are agents and edges represent ’follow’ relationships.       sity of polarization in the discourse environment affects user
The network structure evolves dynamically. Initial connec-      perception and behavior.
tions are formed probabilistically based on opinion ho-       The first experimental dimension contrasted highly po-
mophily (agents are more likely to follow others with similar       larized discussions with a moderate discourse condition
opinions) and influencer status (influencers are more likely      through the manipulation of artificial agent behavior. In
to be followed). Subsequently, agents can form new connec-       the polarized condition, artificial agents expressed extreme
tions based on recommendations and dissolve existing ones      viewpoints and employed confrontational discourse pat-
independently. Following decisions use the same reaction       terns, characterized by emotional language, strong asser-
probability function (Eq. 1) that governs other interactions,       tions, and minimal acknowledgment of opposing view-
but with the agent’s opinion values directly substituted for       points. The moderate condition, serving as the comparative
the message evaluation: ρ(oi, oj) instead of ρ(oi, π(Ai, m)).       baseline, featured more nuanced discussions and coopera-
Unfollowing occurs randomly with a fixed base probability.        tive interaction styles, with agents expressing uncertainty,
  Information propagation is governed by a recommenda-      acknowledging limitations in their knowledge, and engag-
tion system determining message visibility. An influence      ing constructively with opposing views.
score η(Aj) is calculated for each potential message au-       The second dimension introduced systematic bias in the
thor Aj based on their normalized follower count: η(Aj) =      recommendation system, implemented across three levels:
|followers(Aj)|/(|V| −1), where V is the set of all agents.       neutral (50% pro-UBI, 50% contra-UBI content), pro-bias
For a target agent Ai, the system recommends the top N     (70% pro-UBI, 30% contra-UBI content), and contra-bias
messages from the set of eligible messages (those not yet     (30% pro-UBI, 70% contra-UBI content). This manipula-
seen by Ai and not authored by Ai) authored by agents with       tion aimed to investigate how algorithmic content curation


                                                   459

## Страница 4

interacts with the discourse environment to potentially shape      Pre-interaction Phase   Participants first completed a com-
opinion formation and perception of debate polarization.         prehensive questionnaire assessing various baseline mea-
  The selection of UBI as the focal topic was driven by sev-       sures. These included demographic information, social me-
eral strategic considerations. Unlike heavily polarized topics       dia usage patterns, and initial attitudes towards UBI.
where individuals often hold entrenched positions, UBI rep-
                                                             Interaction Phase  Afterwards, participants were intro-resents an emerging policy proposal where public opinion
                                                        duced to our simulated social media platform. Each partic-remains relatively malleable, making it ideal for studying
                                                                   ipant interacted individually in an isolated instance of theopinion formation and polarization dynamics. While UBI
                                                                 platform, i.e., they did not communicate with other humanevokes fewer preset opinions, it remains sufficiently con-
                                                                     users. Instead, the platform was populated by a set of 30crete and consequential to generate meaningful discourse,
                                                        pre-programmed artificial agents specific to their assignedwith its complexity spanning economic, social, and techno-
                                                             experimental condition, including three designated ’influ-logical dimensions. Recent polling data supports UBI’s suit-
                                                                 encers’ on each side of the UBI debate. These agents first en-ability, showing a balanced distribution of opinions with ap-
                                                        gaged in agent-only simulations run for 10 iterations. Theseproximately 51.2% of Europeans (Vlandas 2019) and 48%
                                                                preparatory simulations, conducted under either polarized orof Americans (Hamilton, Yorgun, and Wright 2022) ex-
                                                         moderate initial opinion distributions with agent opinionspressing support, while significant portions remain unde-
                                                              held fixed, generated the platform’s initial state, includingcided or hold moderate views. Additionally, UBI’s limited
                                                            a history of posts, comments, reposts, likes, and follow rela-real-world implementation means participants’ opinions are
                                                                     tionships.more likely to be based on theoretical arguments rather than
                                                                  In the polarized condition, agents averaged 2.16 posts,direct experience or partisan allegiances, allowing us to ex-
                                                            8.07 likes, 5.47 comments, and 2.90 reposts per agent, withamine how social media dynamics can influence opinion for-
                                                                   influencers showing notably higher activity. The moderatemation before entrenched polarization takes hold.
                                                               condition showed similar posting patterns (2.07 posts per
                                                                agent) but reduced commenting (1.60) and reposting (1.57)
System Prototype
                                                                            activity. Full statistics are available in Appendix B, Table ??.
The prototype implementation consists of a web application         Participants were instructed to engage with the platform
that simulates a social media platform, reminiscent of X (for-       naturally, as they would in their regular social media use.
merly Twitter), to study social polarization dynamics. The     They received the following instructions:
interface, as depicted in Appendix B, Figure 4, adheres to
                                                       "You will now interact with a social media platform
a familiar social media layout, facilitating user engagement
                                                                   discussing Universal Basic Income. Please use the
and interaction.
                                                                 platform as you normally would use social media.
  The application’s main interface is divided into three pri-
                                                    You can read posts, like them, comment on them, or
mary sections: a navigation sidebar on the left, a central
                                                                      create your own posts. Your goal is to form an opinion
Newsfeed, and a recommendation panel on the right. The
                                                        on the topic. You will have 10 minutes for this task."
navigation sidebar provides quick access to essential func-
tionalities such as the user’s profile, a general user overview,        During this 10-minute phase, participants’ interactions
and a logout option. The central Newsfeed serves as the pri-        (likes, comments, reposts, follows) were recorded for later
mary interaction space, where users can view and engage       analysis. Crucially, while participants interacted, the arti-
with recommended posts from other users (see the appendix        ficial agents did not generate any new content; this was a
for details on the recommendation procedure). At the top of       deliberate design choice to ensure exposure to a controlled
the Newsfeed, a text input area invites users to share their        initial environment. However, the participant’s newsfeed re-
thoughts, mimicking the spontaneous nature of social media      mained dynamic, updated by the recommendation algorithm
communication.                                         which presented content from the pre-generated pool ac-
  The Newsfeed displays a series of posts, each accompa-      cording their individual interaction behavior.
nied by user avatars, usernames, timestamps, and interaction                                                               Post-interaction Phase  After the interaction period, par-
metrics such as likes, comments, and reposts. This design                                                                       ticipants completed a post-test questionnaire. This included
encourages user engagement and provides visual cues about                                                         measures of their perception of the key constructs listed be-
the popularity and impact of each post. The recommendation                                                                low. Additionally, participants evaluated the realism and ef-
panel on the right side of the interface suggests other users to                                                                   fectiveness of the simulated platform.
follow, potentially influencing the user’s network expansion
and exposure to diverse viewpoints.                            Ethical Considerations and Risk Mitigation  While our
  User profiles are dynamically generated, displaying the      primary goal is to better understand and mitigate harmful po-
user’s posts, follower relationships, and other relevant meta-       larization, we recognize that such simulations could poten-
data like a user’s handle and biography. It is also possible to        tially cause harm to study participants. In accordance with
follow and unfollow artificial users.                              the review of our institution’s ethics committee, we have
                                                              taken several precautionary steps to address potential risks:
Procedure                                                                             • Data Anonymization and Participant Welfare: All partic-
The experiment consisted of three phases: pre-interaction,          ipant data were anonymized, and recruitment processes
interaction, and post-interaction.                                 adhered to established privacy and consent guidelines.


                                                   460

## Страница 5

   Participants were fully debriefed about the nature of the      remaining participants were distributed across various ed-
    artificial agents and could withdraw from the study at any       ucational qualifications, with A-levels/IB, GCSE, and voca-
   time without penalty.                                            tional certifications each representing approximately 11% of
 • Responsible Platform Design: While we aimed to mimic       the sample.
   real social media interfaces to enhance ecological valid-       The majority of participants were professionally active,
    ity, we integrated disclaimers in participant instructions,      with 58.6% being employees and 10.7% self-employed.
   clarifying the experimental setting. This reduces decep-     The sample also included a notable proportion of students
   tion and protects against unintended distress.               (15.7% combined university and school students), reflecting
                                                                 diverse occupational backgrounds.
Measures                                                           Participants demonstrated high engagement with social
                                                       media platforms, with 80% reporting daily or near-constantAll constructs were measured using four-item scales rated on
                                                               usage. The majority (75%) spent between one and four5-point Likert scales (1 = Strongly Disagree to 5 = Strongly
                                                            hours daily on social media platforms. YouTube (25.0%)Agree) (see Appendix B, Table 6 for the full item list and
                                                       and Facebook (24.3%) emerged as the most frequently usedfactor loadings). Key constructs measured in this study in-
                                                                 platforms, followed by Instagram (17.9%) and X, formerlycluded:
                                                                 Twitter (10.7%). This usage pattern suggests participants
 • Opinion Change: Measured shifts in participants’ opin-      were well-acquainted with social media interfaces and inter-
   ions about UBI between pre- and post-interaction phases.       action patterns, making them suitable subjects for the study’s
   This was calculated as the difference between the average      simulated social media environment.
   scores of the opinion items before and after interaction.
 • Perceived Polarization: Assessed participants’ percep-     Analysis of Debate Perception
   tion of opinion extremity and ideological division, focus-     Our first analysis examines how users perceive and process
   ing on the perceived distance between opposing view-       discussions under varying conditions of Polarization Degree
   points.                                               and Recommendation Bias (see Appendix B for prelimi-
 • Perceived Group Salience: Evaluated the extent to which      nary analyses). We specifically investigate whether partic-
   participants perceived the discussion as being driven by       ipants recognize polarized discourse patterns, how they pro-
   group identities rather than individual perspectives. Un-       cess emotional and group-based content, and how Recom-
   like other measures, this scale retained only two of four      mendation Bias might moderate these perceptions. Through
    initial items after psychometric analysis (see Appendix       this analysis, we aim to understand the psychological mech-
   B).                                                    anisms through which discussion climate and content cura-
 • Perceived Emotionality: Measured participants’ assess-       tion are associated with users’ experience of online debates.
   ment of the emotional intensity and affective tone, cap-                                                            Results  We analyzed the effects of discussion Polariza-
   turing the perceived level of emotional versus rational                                                                     tion Degree and Recommendation Bias using 2×3 ANOVAs
   discourse.                                                                  (see Table ?? for full statistics and Figure 1 for interaction
 • Perceived Uncertainty: Captured the degree to which par-        plots). The results consistently showed significant main ef-
   ticipants observed expressions of doubt and acknowledg-       fects of Polarization Degree across most perceptual vari-
   ment of knowledge limitations.                                  ables, whereas Recommendation Bias had a more limited
 • Perceived Bias: Evaluated participants’ assessment of      impact.
   viewpoint balance and fair representation.                     Regarding Opinion Change, neither Polarization Degree
                                                            nor Recommendation Bias yielded statistically significant
Participants                                          main effects (Table ??). However, descriptive statistics sug-
We recruited 122 participants through the Prolific2 plat-      gested a trend towards stronger opinion shifts (more nega-
                                                                          tive) specifically in the polarized condition combined withform (compensation was set according the recommended
                                                                  contra-bias recommendations (M = −0.41), compared topay rate of $12/hour). Participants were evenly distributed
                                                        minimal changes in other conditions.across the six experimental conditions (N ≈20 per condi-
tion). The sample exhibited a gender distribution favoring       The Polarization Degree manipulation strongly  influ-
male participants (63.6%) over female participants (35.7%),      enced the perceived discussion climate. Participants rated
with a single participant preferring not to disclose their gen-      Perceived Polarization significantly higher in the polarized
der. The age distribution revealed a predominantly young to      condition (M = 4.46) compared to the unpolarized condi-
middle-aged sample, with approximately 61.5% of partici-       tion (M = 3.35), a difference confirmed by post-hoc tests
pants falling between 20 and 39 years old. The modal age      (p < .001, Hedges’ g = 1.36). This represented a substan-
group was 25-29 years (18.6%), followed by 35-39 years        tial main effect (Table ??).
(15.0%).                                                        Perceived Emotionality showed the strongest main effect
  Regarding educational background, nearly half of the par-       of Polarization Degree in the study (η2p = 0.388, p < .001),
ticipants (49.3%) held university degrees, indicating a rel-      with polarized discussions perceived as significantly more
atively high level of formal education in the sample. The      emotional (M =  3.58 vs. M =  2.44 for unpolarized;
                                                        Hedges’ g = 1.53). While the main effect of Recommen-
   2https://www.prolific.com/                                     dation Bias was not significant, a marginal interaction effect


                                                   461

## Страница 6

                                           Recommendation Bias                  ANOVA F (p)
 Metric               Polarization
                                        Contra           Balanced             Pro            Pol       Rec     Pol×Rec

                        Polarized        -0.41 (0.60)         -0.08 (0.55)         -0.10 (0.33)        3.48        1.74        1.90
 Opinion Change
                     Moderate        -0.06 (0.38)         -0.09 (0.43)         -0.02 (0.26)        (.065)       (.180)       (.154)

                        Polarized        4.47 (0.82)         4.61 (0.97)         4.29 (0.75)      56.48***     0.02        1.50
  Polarization
                     Moderate        3.30 (0.69)         3.23 (0.83)         3.54 (0.84)        (.000)       (.979)       (.228)

                        Polarized        3.80 (0.48)         3.59 (0.99)         3.36 (0.80)      73.54***     1.42        2.44
  Emotionality
                     Moderate        2.50 (0.74)         2.17 (0.60)         2.65 (0.83)        (.000)       (.245)       (.092)

                        Polarized        2.94 (0.60)         2.86 (0.51)         3.21 (0.42)      17.18***    5.63**       0.07
 Group Salience
                     Moderate        2.51 (0.59)         2.42 (0.65)         2.86 (0.40)        (.000)       (.005)       (.934)

                        Polarized        3.50 (0.87)         3.20 (0.76)         3.83 (0.59)      15.08***     0.44       3.73*
 Bias
                     Moderate        3.05 (0.82)         3.02 (0.87)         2.68 (0.87)        (.000)       (.648)       (.027)

                        Polarized        2.29 (0.60)         2.03 (0.60)         1.90 (0.75)      48.86***     0.97        1.06
  Uncertainty
                     Moderate        2.92 (0.71)         2.83 (0.69)         2.96 (0.48)        (.000)       (.383)       (.350)
 Note: Values show means with standard deviations in parentheses. Bold values indicate significantly higher means between polarized
 and Moderate conditions. F-statistics in bold are significant. Pol = Polarization main effect, Rec = Recommendation main effect,
 Pol×Rec = Interaction effect. *p < .05, **p < .01, ***p < .001

                  Table 1: Effects of Polarization and Recommendation Bias on Key Dependent Variables


with Polarization Degree was observed (p = .092).             which might relate to their willingness to engage in dis-
   Similarly, Perceived Uncertainty was significantly lower       cussions. The parallel increase in Perceived Polarization
in polarized discussions (M = 2.07) compared to unpolar-      (η2p = 0.327) further supports this interpretation, suggesting
ized ones (M = 2.90), indicating another strong main effect       that emotional intensity may serve as a key signal for users
of Polarization Degree (η2p = 0.296, p < .001; Hedges’       in assessing the degree of polarization in online discussions
g = −1.26).                                                   they encounter.
  Perceived Group Salience was significantly affected by     A particularly noteworthy finding  is the inverse rela-
both Polarization Degree (p < .001) and Recommendation       tionship between Polarization Degree and Perceived Un-
Bias (p = .005). Polarized conditions elicited higher percep-       certainty (η2p = 0.296). The significant decrease in Per-
tions of group-based discourse (M = 3.00 vs. M = 2.59 for      ceived Uncertainty within polarized discussions aligns with
unpolarized; Hedges’ g = 0.73). Post-hoc tests for Recom-       theoretical frameworks suggesting that polarized discourse
mendation Bias indicated significantly higher salience in the       often manifests through increased assertiveness and  re-
pro-bias condition compared to contra-bias (p = .011) and      duced acknowledgment of epistemic limitations. This pat-
neutral (p = .001) conditions (see Table ?? for means).            tern observed in our experiment may help explain the self-
   Finally, Perceived Bias showed a significant main effect       reinforcing nature often attributed to polarized discussions:
of Polarization Degree (p < .001) and a significant inter-       as uncertainty expressions diminish, the space for nuanced
action effect (p = .027). Participants perceived higher bias      dialogue and opinion adjustment potentially contracts.
in the polarized condition (M = 3.51) compared to the un-       The observed differences on Perceived Group Salience
polarized condition (M = 2.92; Hedges’ g = 0.69). The      (η2p = 0.129) and Perceived Bias (η2p = 0.115) provide
interaction indicated this effect was particularly pronounced       insights into how polarization might relate to the social-
under pro-bias recommendations (Table ??).                      cognitive dimensions of online discourse. The emergence
                                                                of stronger group-based discourse perceptions in polarized
Discussion  Our findings reveal significant insights into       conditions suggests that heightened polarization could be
how  users perceives and process  polarized  discussions       linked to increased social categorization processes, poten-
within our simulated social media environment. The results        tially facilitating the formation of opposing camps. This in-
demonstrate that the manipulation of Polarization Degree       terpretation is strengthened by the significant interaction be-
was associated with profound differences across multiple      tween Polarization Degree and Recommendation Bias on
perceptual dimensions, while Recommendation Bias played      Perceived Bias, particularly pronounced in pro-bias condi-
a more nuanced role in shaping user experiences in this con-       tions. This interaction suggests that algorithmic curation,
text.                                              when combined with polarized discourse in this manner,
  The strong association between Polarization Degree and     may amplify the salience of group divisions.
Perceived Emotionality (η2p = 0.388) suggests that partic-       The absence of significant effects on Opinion Change,
ipants were highly attuned to the emotional tenor of dis-       despite the substantial perceptual differences across con-
cussions. This heightened emotional perception in polarized       ditions, merits careful consideration. This finding suggests
conditions indicates that users readily distinguish between       that while users readily recognize polarized discourse pat-
measured discourse and emotionally charged exchanges,       terns, their own positions might remain relatively stable dur-


                                                   462

## Страница 7

Figure 1: Interaction plots showing the effects of polarization and recommendation type on dependent variables. Blue lines
represent the polarized condition, green lines represent the unpolarized condition. Error bars represent 95% confidence intervals.


ing the kind of short-term exposure used in this study. How-       teractions, analyzing how different experimental conditions
ever, the trending pattern of stronger opinion changes in po-       affect users’ preferences for specific types of engagement
larized conditions with contra-bias hints at potential longer-        (likes, comments, reposts, and follows). This analysis aims to
term effects that warrant further investigation.                   understand whether polarized environments and algorithmic
  These results carry important implications for thinking       bias are associated with differences in not just how much
about platform design and intervention strategies. The clear       users engage, but also how they choose to participate in dis-
user sensitivity to emotional content and group-based dis-       cussions.
course suggests that interventions targeting these aspects
might be particularly effective in mitigating polarization ef-      Results  Our analysis revealed distinct patterns of user en-
fects. Moreover, the complex interaction between Polariza-      gagement across the experimental conditions. Participants
tion Degree and Recommendation Bias indicates that algo-      generated 946 interactions in total (M = 6.91, SD = 8.50,
rithmic content curation strategies should consider not only    Mdn = 5.00, Range: 0 −56), with substantial individ-
viewpoint diversity but also the emotional and social dynam-       ual variation. The majority (81.02%) engaged at least once.
ics of the content being recommended.                   Among active users, engagement levels spanned low (1 −5
  Our findings also highlight the multifaceted nature of po-       interactions; 36.5%), moderate (6 −10; 24.82%), and high
larization perception. The strong correlations between emo-     (> 10; 19.71%) categories.
tional intensity, reduced uncertainty, and increased group         Figure 5 shows a clear hierarchy in interaction types:
salience suggest that polarization manifests through a con-      Likes were dominant (54.02%, M = 3.73), followed by fol-
stellation of interrelated perceptual changes. This insight      lows (26.53%, M = 1.83), reposts (9.41%, M = 0.65), and
suggests that effective interventions might need to address     comments (7.61%, M = 0.53). This suggests a preference
multiple aspects simultaneously rather than focusing on sin-       for lower-effort engagement.
gle dimensions of polarized discourse. It is important to re-         Correlation analysis revealed strong positive associations
iterate, however, that these findings stem from a controlled      between total interactions and both likes (r = .93, p < .001)
experiment, and their direct applicability to real-world plat-      and follows (r = .73, p < .001), moderate correlation with
form dynamics requires further investigation.                 comments (r = .45, p < .001), and weaker correlation with
                                                                 reposts (r = .37, p < .001). Notably, comments and reposts
Analysis of User Engagement                          showed minimal correlation (r = .01, p = .899), suggesting
Our second analysis examines how polarization and rec-       distinct user purposes.
ommendation bias shape user engagement behaviors on the     ANOVA results (Table ??) indicated a significant main
platform. We investigate both the quantity and quality of in-       effect of Recommendation Bias on total interactions (η2p =


                                                   463

## Страница 8

                                                Recommendation Bias                    ANOVA
 Metric           Polarization
                                         Contra                Balanced                 Pro          F        p

                    Polarized            10.30 (12.43)             4.82 (4.49)              4.80 (5.29)  Interactions                                                                                                 3.25a      .042*
                 Moderate             7.92 (7.62)              4.71 (3.26)              9.25 (12.85)

                    Polarized             5.65 (9.53)              2.55 (2.65)              2.35 (2.54)  Likes                                                                                                       2.25a       .110
                 Moderate             4.38 (4.03)              2.64 (2.44)              4.95 (8.22)

                    Polarized             0.65 (1.03)              0.45 (0.67)              0.40 (0.82) Reposts                                                                                                    1.89a       .156
                 Moderate             1.08 (2.30)              0.29 (0.46)              1.10 (1.86)

                    Polarized             0.35 (0.57)              0.23 (0.43)              0.25 (0.55)
 Comments                                                                                                      6.51b      .012*
                 Moderate             0.50 (1.18)              0.71 (1.12)              1.10 (1.94)

                    Polarized             3.30 (4.12)              1.45 (1.84)              1.50 (2.82) Follows                                                                                                    2.60a       .078
                 Moderate             1.88 (3.38)              1.04 (1.57)              1.95 (3.33)
 Note: Values show means with standard deviations in parentheses. Bold values indicate highest means within recommendation bias
  conditions. aF-statistic for main effect of Recommendation (df = 2, 134). bF-statistic for main effect of Polarization (df = 1, 135). *p
 < .05

                         Table 2: Main Effects of Experimental Conditions on User Engagement


.046). Post-hoc tests revealed significantly more interactions      serve similar functions. Instead, these behaviors may repre-
in the contra-bias condition compared to the balanced condi-       sent distinct modes of participation, with commenting indi-
tion (p = .008, Hedges’ g = 0.56); other comparisons were       cating dialectical engagement while reposting signals con-
not significant (see Table ?? for means).                            tent amplification. The low absolute rate of commenting
  Analysis of specific interaction types showed a significant     (M=0.53 per user over 10 minutes) is also noteworthy. This
main effect of Polarization Degree on commenting (η2p =      could reflect the short interaction time, the specific nature
.046). Participants commented more in unpolarized condi-       of the UBI topic for this participant pool, or potentially a
tions (M = 0.77) compared to polarized ones (M = 0.28),      platform design where passively consuming or liking con-
suggesting moderate environments may facilitate this form       tent generated by agents was easier or more appealing than
of engagement.                                                formulating original comments.
  Other interaction types showed no significant main ef-                                                     The observed association between Polarization Degree
fects, though trends emerged. Following behavior showed a                                                       and commenting behavior (η2p = .046) warrants careful in-
marginal effect of Recommendation Bias (p = .078, η2p =       terpretation. While higher commenting rates in unpolarized
.037), with a tendency to follow more users when exposed to                                                                conditions appear to suggest that moderate discourse envi-
opposing views (contra-bias) compared to balanced content.                                                         ronments foster more substantive engagement (Koudenburg
Likes showed a non-significant trend consistent with total                                                       and Kashima 2022; Yousafzai 2022), this interpretation re-
interactions (p = .110).                                                                 quires qualification based on our specific setup. Our sam-
  Examining the interaction patterns (Table ??, Figure 2),                                                                 ple exhibited predominantly moderate attitudes toward UBI,
engagement in polarized conditions peaked under contra-                                                     making them potentially unrepresentative of users who ac-
bias recommendations, while being notably lower in bal-                                                                       tively engage in real-world polarized discussions (Simchon,
anced and pro-bias conditions. In unpolarized conditions,                                                             Brady, and Van Bavel 2022). The reduced commenting in
engagement was more evenly distributed but remained el-                                                                polarized conditions might thus reflect a mismatch between
evated in contra- and pro-bias conditions compared to the                                                                discussion climate and user predispositions in our study
balanced condition.                                                                     rather than an inherent effect of polarization that would gen-
                                                                      eralize to all contexts.Discussion  The patterns of user activity reveal nuanced in-
sights into how Polarization Degree and Recommendation       The significant effect of Recommendation Bias on total
Bias relate to engagement behaviors in our simulated online       interactions (η2p = .046) is particularly noteworthy when
discussions. Our analyses demonstrate that these factors are      considered alongside opinion formation. The higher engage-
associated not only with the quantity of interactions but also     ment in the polarized contra-bias condition (M = 10.30)
with how users choose to participate in debates within this      coincided with the strongest observed opinion shifts (M =
environment.                                               −0.408). Given that UBI represents a proposal for systemic
  The clear hierarchy in engagement forms—with likes      economic change, arguments against it may have resonated
(54.02%)  dominating  over  follows  (26.53%),  reposts     more strongly with users’ status quo bias and loss aversion.
(9.41%), and comments (7.61%)—reflects fundamental pat-       In a polarized environment, these contra-UBI arguments
terns often observed in social media behavior and a general      might have appeared particularly salient and consequential,
preference for lower-effort interactions. Notably, the mini-       potentially contributing to both increased engagement and
mal correlation between comments and reposts (r = .01)       stronger opinion shifts in our participants. This suggests that
challenges the intuition that all forms of active engagement       the combination of topic-specific factors—namely the po-


                                                   464

## Страница 9

Figure 2: Interaction plots showing the effects of polarization and recommendation type on user engagement. Blue lines repre-
sent the polarized condition, green lines represent the unpolarized condition. Error bars represent 95% confidence intervals.


tentially threatening nature of economic system changes—      opinion dynamics in online discussions, highlighting asso-
with polarized discourse could be associated with amplified       ciations observed under controlled conditions that merit fur-
user engagement, particularly when arguments align with       ther exploration in more ecologically complex settings.
psychological tendencies toward preserving existing sys-
tems.                                                       5  Overall Discussion
   Finally, we note that approximately 19% of participants
recorded zero interactions (including likes, comments, re-      This study presents a novel methodological framework for
posts, or follows) during the 10-minute interaction phase.       investigating online polarization through controlled exper-
While the majority engaged, this level of non-engagement      imental manipulation of social media environments using
could be attributed to several factors, including the short du-     LLM-based artificial agents. Our findings demonstrate that
ration potentially leading some users to primarily observe,       this approach can successfully reproduce key characteristics
individual differences in engagement styles (passive con-       of polarized online discourse while enabling precise control
sumption), topic disinterest, or possible undetected technical      over environmental factors within the simulation. The in-
friction.                                                            tegration of sophisticated language models with traditional
  While these findings provide initial insights into the re-      opinion dynamics frameworks represents a significant ad-
lationship between platform design, user engagement, and      vancement in our ability to study the microfoundations of
opinion dynamics, several limitations suggest the need for       polarization processes under controlled conditions.
more extensive research. The short-term nature of our study       Our experimental framework advances beyond purely ob-
and its focus on a single topic limit generalizability. Fu-       servational and theoretical approaches by providing direct
ture research should pursue longitudinal studies comparing      empirical evidence regarding associations between specific
topics with varying degrees of polarization and personal in-       online environment features and resulting user perceptions
volvement to distinguish between topic-specific effects and      and behaviors within our experimental setting. The observed
general patterns of online discourse dynamics. Our findings       patterns on perceived emotionality, uncertainty expression,
thus represent a starting point for understanding the com-      and group identity salience thereby align with theoretical
plex interplay between platform design, user behavior, and       predictions from social identity theory and group polariza-


                                                   465

## Страница 10

tion research (Tajfel and Turner 1979; Huddy 2001; Al-      ongoing challenge.
bertson 2015; Ruiz-Sánchez and Alcántara-Plá 2019; Bliuc,        Second, the simulation represents a necessary simplifica-
Bouguettaya, and Felise 2021). The strong relationship ob-       tion of the complex reality of online social interaction. The
served in our data between polarization and emotional dis-       short-term nature of our experimental exposure means we
course provides empirical support for theories of affective      cannot make definitive claims about how these processes
polarization (Fischer and Lelkes 2023; Mason 2016, 2015;      unfold over longer periods. Additionally, our experimental
Iyengar, Sood, and Lelkes 2012; Iyengar and Westwood      design compares the effects of high polarization against a
2015), while the inverse relationship with perceived uncer-       baseline of moderate polarization, rather than incorporating
tainty substantiates theoretical arguments about epistemic      a zero-treatment control group. While this design allows for
closure in polarized contexts.                                      investigating the impact of increasing polarization intensity,
  The methodological contribution of this work extends be-          it limits our ability to assess the absolute effects of expo-
yond its immediate findings. By demonstrating the feasibil-       sure compared to a non-exposed baseline. While our results
ity of using LLM-based agents to create controlled yet eco-      demonstrate that the simulation framework can reproduce
logically relevant social media environments, we provide re-      key features of polarized discourse and elicit expected user
searchers with a powerful new tool for studying online so-      responses in the short term, questions remain about how
cial dynamics. This approach offers several advantages over       these effects might evolve over extended periods of interac-
traditional methods: it enables precise manipulation of dis-       tion. Furthermore, the simulated environment, particularly
course characteristics, allows for systematic variation in net-       aspects like the network structure evolution and recommen-
work structure and content exposure, and facilitates the col-       dation system, simplifies the sophisticated mechanisms gov-
lection of fine-grained behavioral data that would be diffi-      erning real-world platforms. Major platforms utilize com-
cult to obtain in naturalistic settings. Crucially, it allows for      plex recommender systems based on deep learning and ex-
probing potential relationships between environmental fac-       tensive user data, which are far more intricate than the com-
tors and user responses in a controlled manner, which obser-      ponents implemented here. Finally, the artificial nature of
vational studies cannot achieve.                                  the experimental environment, despite efforts towards eco-
  The synthetic social network approach developed in this       logical validity, may not encompass all relevant aspects of
study represents a significant methodological innovation for       real-world social media use. Acknowledging this gap be-
the study of online polarization. By combining the control-      tween the simulation and real-world complexity is essential
lability of agent-based simulations with the linguistic so-       for contextualizing our findings.
phistication of LLMs, we create environments that capture         Future research should address these limitations by con-
both the structural and discursive dimensions of online inter-      ducting longitudinal studies that track user behavior and at-
action. This allows researchers to investigate how different       titude change over extended periods. Incorporating a zero-
platform features and interaction patterns might contribute      treatment control group could provide valuable baseline
to polarization while maintaining experimental control.          comparisons. Future iterations could also incorporate more
  However, several important limitations must be acknowl-      complex agent models  (e.g., with adaptive strategies or
edged when interpreting the findings and considering their     memory decay) and more sophisticated network dynamics
generalizability. First, regarding the simulation’s core com-       to bridge the gap with real-world systems. Exploring the role
ponents, it is crucial to discuss the extent to which LLM-       of different content recommendation algorithms and inves-
based agents serve as reliable proxies for human behav-       tigating potential intervention strategies remain crucial av-
ior. While recent work demonstrates LLMs can replicate      enues. Particularly promising directions include investigat-
certain human-like interaction patterns and generate stylis-      ing the role of influencer dynamics in polarization processes,
tically appropriate text (Chuang et al. 2024; Breum et al.      exploring how different moderation strategies might affect
2024), they lack genuine beliefs, emotions, cognitive biases,      discourse quality, and examining how varying levels of al-
or deep reasoning capabilities. Their value lies primarily in      gorithmic content curation are associated with differences
generating controlled, contextually relevant textual stimuli       in user behavior and perception. The framework could also
that constitute the social environment experienced by the      be adapted to study other aspects of online social behavior,
human participants. Participant feedback reflected this du-      such as information diffusion patterns or the emergence of
ality—some found the discourse convincing, with one not-     new social norms.
ing, “The discussion was almost always on topic. Almost all
users had well articulated point of views and the messages                  6  Conclusion
were straight to the point,” while another observed signs of      This study introduces a novel methodological framework for
artificiality, stating “I felt all the messages were AI gener-       investigating online polarization through the integration of
ated (for the style used and little diversity in responses) and     LLM-based artificial agents and controlled social network
also very similar in content.” These comments underscore       simulation. Our findings demonstrate both the technical fea-
that while LLM agents can mimic discourse patterns effec-        sibility and empirical utility of this approach, providing re-
tively, they may struggle with diversity and nuance. The fo-       searchers with a powerful new tool for studying social media
cus is thus on the measured effect of this simulated envi-      dynamics. The successful reproduction of key polarization
ronment on human responses, rather than assuming agents       characteristics, validated through user testing, suggests that
perfectly mirror human processes. Validating agent behav-       synthetic social networks can serve as valuable experimental
ior against fine-grained human interaction data remains an      environments for investigating online social phenomena.


                                                   466

## Страница 11

  Looking forward, this framework opens new avenues for     Chacoma, A.; and Zanette, D. H. 2015. Opinion Formation
investigating various aspects of online social behavior, from     by Social Influence: From Experiments to Modeling. PLOS
testing intervention strategies to examining the impact of     ONE, 10(10): 1–16.
different platform features on user engagement. While our      Chen, T.; Wang, Y.; Yang, J.; and Cong, G. 2021. Modeling
current study focused on short-term effects, the methodol-      Multidimensional Public Opinion Polarization Process un-
ogy we have developed provides a foundation for longer-      der the Context of Derived Topics. International Journal of
term investigations of polarization dynamics and other social      Environmental Research and Public Health, 18(2).
media phenomena. As online platforms continue to evolve                                                        Chuang, Y.-S.; Goyal, A.; Harlalka, N.; Suresh, S.; Hawkins,
and shape public discourse, such controlled experimental                                                                   R.; Yang, S.; Shah, D.; Hu, J.; and Rogers, T. 2024. Sim-
approaches will become increasingly valuable for under-                                                                   ulating Opinion Dynamics with Networks of LLM-based
standing and potentially mitigating harmful polarization ef-                                                             Agents.  In Duh, K.; Gomez, H.; and Bethard, S., eds.,
fects while promoting more constructive online dialogue.                                                             Findings of the Association for Computational Linguistics:
                                            NAACL 2024, 3326–3346. Association for Computational
                References                              Linguistics.
Al Amin, M. T.; Aggarwal, C.; Yao, S.; Abdelzaher, T.;      Conover, M.; Ratkiewicz, J.; Francisco, M.; Goncalves, B.;
and Kaplan, L. 2017. Unveiling polarization in social net-      Menczer, F.; and Flammini, A. 2011. Political Polarization
works: A matrix factorization approach. In IEEE INFOCOM     on Twitter. Proceedings of the International AAAI Confer-
2017-IEEE Conference on Computer Communications, 1–9.      ence on Web and Social Media, 5(1): 89–96. Section: Full
IEEE.                                                          Papers.
Albertson, B. L. 2015.  Dog-Whistle Politics: Multivocal      Das, A.; Gollapudi, S.; and Munagala, K. 2014. Modeling
Communication and Religious Appeals. Political Behavior,      opinion dynamics in social networks. In Proceedings of the
37(1): 3–26.                                                   7th ACM international conference on Web search and data
Alsinet, T.; Argelich, J.; Béjar, R.; and Martínez, S. 2021.      mining, 403–412.
Measuring Polarization in Online Debates.  Applied Sci-      DeGroot, M. H. 1974. Reaching a consensus. Journal of the
ences, 11(24).                                           American Statistical Association, 69(345): 118–121. Pub-
Asch, S. E. 1951. Effects of group pressure upon the modi-        lisher: Taylor & Francis Group.
fication and distortion of judgments. In Groups, leadership      Del Vicario, M.; Scala, A.; Caldarelli, G.; Stanley, H. E.; and
and men; research in human relations, 177–190. Oxford,       Quattrociocchi, W. 2017. Modeling confirmation bias and
England: Carnegie Press.                                           polarization. Scientific reports, 7: 40391. Publisher: Nature
Bail, C. A.; Argyle, L. P.; Brown, T. W.; Bumpus, J. P.; Chen,      Publishing Group.
H.; Hunzaker, M. F.; Lee, J.; Mann, M.; Merhout, F.; and      Donkers, T.; and Ziegler, J. 2021. The Dual Echo Cham-
Volfovsky, A. 2018. Exposure to opposing views on social       ber: Modeling Social Media Polarization for Interventional
media can increase political polarization. Proceedings of the     Recommending. In Fifteenth ACM Conference on Recom-
National Academy of Sciences, 115(37): 9216–9221. Pub-     mender Systems, 12–22.
lisher: National Acad Sciences.                                                           Donkers, T.; and Ziegler, J. 2023. De-sounding echo cham-
Bakshy, E.; Messing, S.; and Adamic, L. A. 2015. Expo-       bers: Simulation-based analysis of polarization dynamics in
sure to ideologically diverse news and opinion on Facebook.       social networks. Online Social Networks and Media, 37-38.
Science, 348(6239): 1130–1132.  Publisher: American As-                                                                    Fischer, S.; and Lelkes, Y. 2023.  Emotion, Affective Po-
sociation for the Advancement of Science.                                                                         larization, and Online Communication. In Emotions in the
Banks, A.; Calvo, E.; Karol, D.; and Telhami, S. 2021. #Po-       Digital World: Exploring Affective Experience and Expres-
larizedFeeds: Three Experiments on Polarization, Framing,      sion in Online Interactions. Oxford University Press.
and Social Media. The International Journal of Press/Poli-      Gao, C.; Lan, X.; Li, N.; Yuan, Y.; Ding, J.; Zhou, Z.; Xu,
tics, 26(3): 609–634. Publisher: SAGE Publications Inc.            F.; and Li, Y. 2023a. Large Language Models Empowered
Bliuc, A.-M.; Bouguettaya, A.; and Felise, K. D. 2021. On-      Agent-based Modeling and Simulation: A Survey and Per-
line intergroup polarization across political fault lines: An       spectives. arXiv:2312.11970.
integrative review. Frontiers in Psychology, 12: 641215.         Gao, C.; Lan, X.; Lu, Z.; Mao,  J.; Piao,  J.; Wang, H.;
Bond, R. M.; and Sweitzer, M. D. 2022. Political Homophily        Jin, D.; and Li, Y. 2023b.  S3: Social-network Simulation
in a Large-Scale Online Communication Network. Commu-      System with Large Language Model-Empowered Agents.
nication Research, 49(1): 93–115.                             arXiv:2307.14984.
Breum, S.; Egdal, D.; Mortensen, V.; Møller, A.; and Aiello,      Garimella, K.; De Francisci Morales, G.; Gionis, A.; and
L. 2024. The Persuasive Power of Large Language Models.      Mathioudakis, M. 2017. Reducing controversy by connect-
Proceedings of the International AAAI Conference on Web      ing opposing views. In Proceedings of the Tenth ACM Inter-
and Social Media, 18: 152–163.                                 national Conference on Web Search and Data Mining, 81–
Buder,  J.;  Rabl,  L.;  Feiks, M.; Badermann, M.; and       90.
Zurstiege, G. 2021. Does negatively toned language use on      Geschke, D.; Lorenz, J.; and Holtz, P. 2019.  The triple-
social media lead to attitude polarization? Computers in Hu-         filter bubble: Using agent-based modelling to test a meta-
man Behavior, 116.                                                 theoretical framework for the emergence of filter bubbles


                                                   467

## Страница 12

and echo chambers.  British Journal of Social Psychology,      Ruiz-Sánchez, A.; and Alcántara-Plá, M. 2019. Us vs. them:
58(1): 129–149. Publisher: Wiley Online Library.                 Polarization and populist discourses in the online electoral
                                                       campaign in Spain. In Populist Discourse, 103–119. Rout-Ghaffarzadegan, N.; Majumdar, A.; Williams, R.; and Hos-
                                                                  ledge.seinichimeh, N. 2024. Generative agent-based modeling: an
introduction and tutorial. System Dynamics Review, 40(1).        Sasahara, K.; Chen, W.; Peng, H.; Ciampaglia, G. L.; Flam-
                                                                mini, A.; and Menczer, F. 2021. Social influence and unfol-Grover, V. 2022. The Dilemma of Social-Media and Polar-
                                                          lowing accelerate the emergence of echo chambers. Journalization Around the Globe.  Journal of Global Information
                                                                     of Computational Social Science, 4(1): 381–402. Publisher:Technology Management, 25(4): 261–265. Publisher: Rout-
                                                                  Springer.ledge.
                                                          Shahbaznezhad, H.; Dolan, R.; and Rashidirad, M. 2021.Hamilton, L.; Yorgun, M.; and Wright, A. 2022.  “People
                                                   The Role of Social Media Content Format and Platform inNowadays Will Take Everything They Can Get”: American
                                                             Users’ Engagement Behavior. Journal of Interactive Mar-Perceptions of Basic Income Usage. Journal of Policy Prac-
                                                                      keting, 53(1): 47–65.tice and Research, 3.
                                                        Simchon, A.; Brady, W. J.; and Van Bavel, J. J. 2022. TrollHegselmann, R.; and Krause, U. 2002. Opinion dynamics
                                                       and divide: the language of online polarization.  PNASand bounded confidence: models, analysis and simulation.
                                                            Nexus, 1(1).
Huddy, L. 2001. From Social to Political Identity: A Critical
                                                                      Stray, J. 2022. Designing recommender systems to depolar-Examination of Social Identity Theory.  Political Psychol-
                                                                           ize. First Monday, 27(5).ogy, 22(1): 127–156.
                                                                         Tajfel, H.; Billig, M. G.; Bundy, R. P.; and Flament, C. 1971.
Iyengar, S.; Sood, G.; and Lelkes, Y. 2012. Affect, Not Ide-
                                                                Social categorization and intergroup behaviour. Europeanology: A Social Identity Perspective on Polarization. Public
                                                               journal of social psychology, 1(2): 149–178. Publisher: Wi-Opinion Quarterly, 76(3): 405–431.
                                                                  ley Online Library.
Iyengar, S.; and Westwood, S. J. 2015. Fear and Loathing
                                                                         Tajfel, H.; and Turner, J. C. 1979. An Integrative Theory
across Party Lines: New Evidence on Group Polarization.
                                                                of Intergroup Conflict. The Social Psychology of Intergroup
American Journal of Political Science, 59(3): 690–707.
                                                                  Relations, 33(47): 74.
Jiang, J.; Chen, E.; Yan, S.; Lerman, K.; and Ferrara, E.
                                                                          Treuillier, C.; Castagnos, S.; Lagier, C.; and Brun, A. 2024.
2020.   Political polarization drives online conversations
                                                          Gaining a better understanding of online polarization by ap-
about COVID-19 in the United States. Human Behavior and
                                                            proaching it as a dynamic process. Scientific Reports, 14(1):
Emerging Technologies, 2(3): 200–211.  Publisher: Wiley
                                                           8702.
Online Library.
                                                            Vlandas, T. 2019. The Politics of the Basic Income Guaran-
Karjus, A.; and Cuskley, C. 2024.  Evolving linguistic di-                                                                          tee: Analysing Individual Support in Europe. Basic Income
vergence on polarizing social media. Humanities and Social                                                                    Studies, 14(1).
Sciences Communications, 11(1): 422.
                                                         Wuestenenk, N.; Tubergen, F. v.; and Stark, T. H. 2023.
Kim, S.-H.; Tak, H.; and Cho, H.-G. 2019.   Polarized                                                   The influence of group membership on online expressions
Topic Modeling for User Characteristics in Online Discus-                                                       and polarization on a discussion platform: An experimental
sion Community.  In 2019 IEEE International Conference                                                                    study. New Media & Society, 0(0).
on Big Data and Smart Computing (BigComp), 1–4.
                                                      Xu, Q.; Yu, N.; and Song, Y. 2018.  User Engagement in
Koudenburg, N.; and Kashima, Y. 2022. A Polarized Dis-                                                               Public Discourse on Genetically Modified Organisms: The
course: Effects of Opinion Differentiation and Structural                                                        Role of Opinion Leaders on Social Media. Science Commu-
Differentiation on Communication. Personality and Social                                                                    nication, 40(6): 691–717.
Psychology Bulletin, 48(7): 1068–1086.
                                                                 Yarchi, M.; Baden, C.; and Kligler-Vilenchik, N. 2021. Po-
Kubin, E.; and Sikorski, C. v. 2021. The role of (social) me-                                                                                  litical Polarization on the Digital Sphere: A Cross-platform,
dia in political polarization: a systematic review. Annals of                                                           Over-time Analysis of Interactional, Positional, and Affec-
the International Communication Association, 45(3): 188–                                                                         tive Polarization on Social Media. Political Communication,
206.                                                                 38(1-2): 98–139. Publisher: Routledge.
Mason, L. 2015. "I Disrespectfully Agree": The Differential                                                                Yousafzai, A. W. 2022.  POLITICAL POLARIZATION
Effects of Partisan Sorting on Social and Issue Polarization.                                     AND ITS IMPACT ON MENTAL HEALTH: WHERE DO
American Journal of Political Science, 59(1): 128–145.                                  WE STAND? KHYBER MEDICAL UNIVERSITY JOUR-
Mason, L. 2016. A Cross-Cutting Calm: How Social Sorting     NAL, 14(1): 1–2.
Drives Affective Polarization.  Public Opinion Quarterly,
80(S1): 351–377.
                                                                 Ethics Checklist
Ohagi, M. 2024.  Polarization of Autonomous Generative
                                                                       1. For most authors...AI Agents Under Echo Chambers.  In Proceedings of the
14th Workshop on Computational Approaches to Subjectiv-         (a) Would answering this research question advance sci-
ity, Sentiment, & Social Media Analysis, 112–124. Associa-           ence without violating social contracts, such as vi-
tion for Computational Linguistics.                                     olating privacy norms, perpetuating unfair profiling,


                                                   468

## Страница 13

     exacerbating the socio-economic divide, or implying         (b) Have you provided justifications for all theoretical re-
      disrespect to societies or cultures? The research ex-             sults? The User Study section empirically validates
     amines online polarization through controlled experi-           our  predicted outcomes  (e.g.,  emotionality, group
     ments with proper consent, anonymized data handling,             salience) against the user study data.
     and ethical use of LLMs. The study aims to better un-         (c) Did you discuss competing hypotheses or theories that
     derstand and potentially mitigate harmful polarization           might challenge or complement your theoretical re-
      effects.                                                               sults? The Related Work section compares our ap-
  (b) Do your main claims in the abstract and introduction           proach to observational and standard opinion dynam-
     accurately reflect the paper’s contributions and scope?              ics models.
    The abstract and introduction clearly outline the three         (d) Have you considered alternative mechanisms or expla-
    main contributions: methodological innovation in syn-            nations that might account for the same outcomes ob-
      thetic social networks, empirical insights from user            served in your study? The User Study section exam-
      studies, and a framework for future research. These            ines multiple drivers of polarization (emotional inten-
     claims are supported throughout the paper.                             sity, group identity, recommendation bias).
  (c) Do you clarify how the proposed methodological ap-         (e) Did you address potential biases or limitations in your
     proach is appropriate for the claims made? The paper             theoretical framework? The paper acknowledges and
     explains in detail why a synthetic social network with            addresses potential biases in both the simulation model
   LLM agents is appropriate for studying polarization          and experimental design, particularly in the Discus-
     dynamics, particularly in Section 3 and the appendix,            sion
     and validates the approach through user studies.                  (f) Have you related your theoretical results to the exist-
  (d) Do you clarify what are possible artifacts in the data            ing literature in social science? The paper extensively
     used, given population-specific distributions? The pa-           connects its findings to existing social science litera-
     per discusses potential artifacts and acknowledges that             ture throughout, particularly in the Related Work and
      the simulation may represent an idealized version of           Discussion sections.
     real-world interactions. The experimental design con-         (g) Did you discuss the implications of your theoretical
      trols for population-specific distributions.                           results for policy, practice, or further research in the
  (e) Did you describe the limitations of your work? The pa-             social science domain? The Discussion section ad-
     per explicitly discusses limitations in the Discussion            dresses implications for platform design and interven-
      section, including the short-term nature of exposure,             tion strategies to mitigate harmful polarization effects.
       artificial environment effects, and potential generaliz-       3. Additionally, if you are including theoretical proofs...
      ability concerns.                                                                          (a) Did you state the full set of assumptions of all theoret-
  (f) Did you discuss any potential negative societal im-              ical results? The paper does not include formal theo-
     pacts of your work? The paper acknowledges poten-              retical proofs in the mathematical sense.
       tial risks of polarization studies and discusses how the                                                                      (b) Did you include complete proofs of all theoretical re-
     research aims to understand and mitigate harmful po-                                                                            sults? The paper’s contribution is empirical and exper-
      larization effects rather than exacerbate them.                                                                   imental rather than proving theoretical results.
  (g) Did you discuss any potential misuse of your work?
                                                                       4. Additionally, if you ran machine learning experiments...
    The paper discusses responsible implementation of
   LLM agents and experimental controls to prevent ma-         (a) Did you include  the code,  data, and  instructions
      nipulation or harmful applications of the framework.            needed to reproduce the main experimental results (ei-
                                                                          ther in the supplemental material or as a URL)? The  (h) Did you describe steps taken to prevent or mitigate po-
                                                                 paper includes detailed model specifications and ex-      tential negative outcomes of the research, such as data
                                                                    perimental parameters in the appendix. Code will be     and model documentation, data anonymization, re-
                                                     made available with the final submission.     sponsible release, access control, and the reproducibil-
                                                                      (b) Did you specify all the training details (e.g., data splits,      ity of findings? The paper details measures including
                                                                   hyperparameters, how they were chosen)? The paper     data anonymization, ethical use of LLMs, controlled
                                                                   provides comprehensive details about the LLM setup,     experimental conditions, and careful consideration of
                                                                   agent parameters, and network configuration in the      participant welfare in the user studies.
                                                                  Simulation Model section and the appendix.
   (i) Have you read the ethics review guidelines and en-
                                                                          (c) Did you report error bars (e.g., with respect to the ran-     sured that your paper conforms to them? The pa-
                                                 dom seed after running experiments multiple times)?     per demonstrates compliance with ethical guidelines
                                                        The paper reports standard deviations and confidence     throughout, particularly in experimental design and
                                                                            intervals for key measurements.    human subject research protocols.
                                                                      (d) Did you include the total amount of compute and the
2. Additionally, if your study involves hypotheses testing...                                                                   type of resources used (e.g., type of GPUs, internal
  (a) Did you clearly state the assumptions underlying all              cluster, or cloud provider)? We have used the OpenAI
      theoretical results? We outline all modeling assump-         API for our computation, as mentioned in the Simula-
      tions in the Simulation Model and User Study sections.             tion Model section.


                                                   469

## Страница 14

  (e) Do you justify how the proposed evaluation is suffi-         (c) Did you include the estimated hourly wage paid to
      cient and appropriate to the claims made? The paper             participants and the total amount spent on participant
       justifies its evaluation approach through user studies,           compensation? The paper mentions recruiting partici-
     with detailed methodology descriptions.                         pants through Prolific and implies standard compensa-
  (f) Do you discuss what is “the cost“ of misclassifica-             tion practices.
      tion and fault (in)tolerance? Our experiments do not         (d) Did you discuss how data is stored, shared, and deiden-
     involve classification tasks or cost-sensitive ML.                    tified? The paper describes data handling procedures
                                                            and privacy protection measures for participant data.
5. Additionally, if you are using existing assets (e.g., code,
   data, models) or curating/releasing new assets, without
                                      A  Simulation Model  compromising anonymity...
                                                            This appendix provides the complete mathematical formal-
  (a)  If your work uses existing assets, did you cite the cre-                                                                    ization and technical implementation details of our simula-
      ators? The paper cites the key assets used: The GPT-                                                                    tion model. We specify the formal definitions, algorithms,
     4o-mini model from OpenAI for agent simulation and                                                       and parameter settings that underpin the agent behavior, net-
      the Prolific platform for participant recruitment.                                                    work dynamics, and message generation mechanisms intro-
  (b) Did you mention the license of the assets? The paper’s      duced in Section 3.
     core components (GPT-4o-mini and Prolific) are used         Technical Note: The parameters and configurations pre-
      in compliance with their respective terms of service      sented in this appendix represent optimized values derived
     and research use guidelines.                           from extensive offline evaluations of agent behavior, person-
  (c) Did you include any new assets in the supplemental        ality generation, and interaction mechanisms. These evalu-
     material or as a URL? The paper mentions providing       ations included tests of different hyperparameter configura-
     implementation details and experimental data in ap-       tions, personality generation strategies, and interaction pat-
     pendices.                                                        terns. Due to space limitations, detailed results from these
                                                                  technical evaluations are omitted but will be presented in  (d) Did you discuss whether and how consent was ob-
                                                           forthcoming work.      tained from people whose data you’re using/curating?
    The paper describes obtaining participant consent for
                                                Agent Model
      the user study and data collection procedures.
                                                     Each agent Ai in our simulation represents an individual  (e) Did you discuss whether the data you are using/curat-
                                                                       user, characterized by a set of attributes that define its iden-     ing contains personally identifiable information or of-
                                                                                tity and behavior:      fensive content? The paper addresses data anonymiza-
      tion and privacy protection measures in the methodol-
    ogy sections.                                                   Ai = {oi, di, bi, ui, Hi}               (2)
  (f)  If you are curating or releasing new datasets, did you
                                                        where oi is a numerical value representing the agent’s     discuss how you intend to make your datasets FAIR?
                                                             opinion on the topic under discussion, di denotes the per-   We do not plan to publicly release our synthetic and
                                                                   sonality description, bi is a short biography, ui is a unique      participant data as standalone resources. Researchers
                                                           username, and Hi represents the interaction history.     can generate similar data using our released code and
                                                          Agents maintain fixed opinions throughout the simula-     framework.
                                                                          tion, represented on a continuous spectrum:
  (g)  If you are curating or releasing new datasets, did you
      create a Datasheet for the Dataset? We do not in-
     tend to publish our datasets beyond the scope of this                                oi ∈[−1, 1]                      (3)
      study. However, interested researchers can replicate
      the dataset by running our public code and simulation        where negative values indicate opposition, zero represents
     environment.                                                    neutrality, and positive values signify support. The initial
                                                             opinion distribution is implemented through either a normal
6. Additionally, if you used crowdsourcing or conducted       distribution for communities with moderate views:
   research with human subjects, without compromising
   anonymity...
                                                                            1                                                                  P(o) = √   e−(o−µ)22σ2                 (4)  (a) Did you include the full text of instructions given                                                                 σ  2π
      to participants and screenshots? The paper includes
     screenshots of the interface and detailed instructions         or a bimodal distribution for polarized societies:
     given to participants.
  (b) Did you describe any potential participant risks, with               1    1               1                                                                                                      2σ2  + √   e−(o−µ2)22σ2       (5)     mentions of Institutional Review Board (IRB) ap-        P(o) =   √   e−(o−µ1)2                                                               2  σ  2π          σ  2π
     provals? The paper discusses potential risks to partici-
     pants and mentions appropriate ethical considerations        where µ (or µ1 and µ2) and σ control the distribution cen-
      in the methodology.                                             ters and spread, respectively.


                                                   470

## Страница 15

  Moreover, each agent maintains a finite interaction history
Hi = [h1, h2, ..., hk], operating as a first-in-first-out queue
to simulate human memory constraints. Both personality de-
scription di and biography bi are automatically generated by
the LLM. Finally, the model distinguishes between regular
users and influencers, who share the same attribute structure
but differ in their content generation tendencies and network
influence. This hierarchical structure enables the study of
influence dynamics while maintaining experimental control
over opinion and interaction patterns.

Message Generation  The probability of an agent generat-
ing a message at any time step is determined by their influ-
ence status:


                             pinf    if Ai is an influencer
         Ppost(Ai) =                                     (6)      Figure 3: Reaction probability functions for different mes-
                           preg  otherwise                                                            sage opinion values (om). The curves demonstrate how inter-
                                                                 action likelihood varies based on agent opinions, with peaks  where pinf > preg reflects higher activity levels of influ-
                                                                          at ideologically aligned positions. The asymmetric shapeential accounts. Message characteristics are determined by
                                                                captures both homophilic preferences and cross-ideologicalthe agent’s opinion value oi, with stance derived from its
                                                                      interactions, particularly pronounced for extreme messages.sign and intensity level from its absolute value. Table ??
summarizes how different intensity levels influence message
characteristics and rhetorical style and Table ?? depicts all
                                                     The foundation of our model is the opinion-based interac-prompt components.
                                                                     tion function ρ, which quantifies how the alignment between
Interaction Mechanisms  Agents in our model interact      an agent’s opinion and their message assessment influences
with messages through likes, comments, and reposts. To       interaction probability:
capture the nuanced dynamics of these interactions in social
media environments, we have developed a comprehensive
probabilistic model. The probability of an agent Ai reacting                ρ(oi, π(Ai, m)) = ρsim(oi, π(Ai, m))+
to a message m is determined by the function Preact(Ai, m),                                     ρopp(oi, π(Ai, m)) · c       (9)
which incorporates multiple components to capture different
                                                              This function incorporates both similar and opposingaspects of user behavior:
                                                             opinion components, mediated by a cross-ideology factor
                                                              c ∈[0, 1] which enables the model to capture differential
        Preact(Ai, m) = pb ·  (1 −w) + w · ψ(oi)  ·              responses to opposing viewpoints across various interaction
                                                                  modalities. This is particularly relevant in social media con-                        ρ(oi, π(Ai, m))                 (7)
                                                                       texts where users demonstrate distinct behavioral patterns
  This probability function combines several key elements:       across different interaction types—for instance, exhibiting a
a base probability pb that varies by interaction type, an       greater propensity to comment on content they disagree with
opinion-based interaction function ρ that evaluates opinion      while preferentially liking aligned content. The probability
alignment, an opinion strength factor ψ(oi), and an opinion      components for similar and opposing opinions are expressed
assessment function π. The parameter w controls the influ-       as:
ence of opinion strength on the interaction probability.
  The opinion assessment function π(Ai, m) determines                                                                         ρsim(oi, π(Ai, m)) = (1 −ϕ(|oi −π(Ai, m)|))γ   (10)
how agent Ai interprets the opinion expressed in message
m through a LLM-based evaluation system. This function           ρopp(oi, π(Ai, m)) = (ϕ(|oi −π(Ai, m)|))γ        (11)
maps a message to an opinion value in the range [-1,1]:                                                     The response steepness parameter γ =  10 governs
                                                                 the sensitivity of the probability functions to opinion dif-
             π : (Ai, m) 7→[−1, 1]                (8)       ferences. Higher values of γ would result in more pro-
                                                       nounced differentiation between similar and dissimilar opin-
  The assessment considers multiple contextual factors: the       ions, while lower values would produce more gradual transi-
message content, the current topic of discourse, the agent’s       tions in the response curves. This parameter effectively con-
personality traits, the agent’s current opinion value oi, and        trols the model’s discrimination between varying degrees of
the agent’s cumulative history of previous interactions. The      opinion alignment.
LLM evaluates these components using a structured prompt       To model the continuous transition between similar and
that provides detailed guidelines for opinion assessment, in-      opposing opinions, we employ a sigmoid function ϕ(x) that
cluding specific examples and rating scales.                 maps opinion differences to interaction probabilities:


                                                   471

## Страница 16

   Intensity                 Message Characteristics

  Low (|oi| < 0.3)             Balanced argumentation; acknowledges multiple perspectives; uses conditional state-
                               ments; minimal group identification; emphasizes uncertainty.
   Moderate (0.3 ≤|oi| ≤0.7)   Clear directional bias; in-group preference; moderate skepticism of opposing views; emo-
                                     tional undertones while maintaining reasoned discourse.
   High (|oi| > 0.7)             Strong emotional language; pronounced group identification; dehumanization of oppo-
                                   nents; hyperbolic terminology; portrays opposing views as threats.

                            Table 3: Message Generation Characteristics by Opinion Intensity


     Component          Description and Format

      Opinion Value        Numerical stance (-1 to 1) determining message position and intensity. Format: "You hold
                            a {strong/moderate/weak} {positive/negative} opinion (value: X) on this topic"

      Topic Description     Core topic information and contextual framework. Format: "The topic is Universal Basic
                           Income, focusing on economic, social and ethical implications"

       Personality Profile     Agent’s character traits and communication patterns. Format: "You are a {thoughtful/pas-
                                sionate/analytical} person who tends to {communication style}"

       Interaction History     Recent interactions and response context. Format: "You recently {agreed/disagreed} with
                              user X about {topic aspect}"

       Intensity Instructions   Guidelines for emotional expression and assertion strength based on opinion intensity
                               (see Table 3). Format: For |oi| > 0.7: "Express strong conviction and emotional invest-
                          ment"

                                 Table 4: Message Generation Prompting Components


                                                                     typically have high base probability pb but c = 0 (sup-
                                                                 porting only agreeable interactions), while reposts and com-                          1
               ϕ(x) =                      ,              (12)      ments have progressively higher c values to enable cross-
                     1 + e−β(x−θ)                                                                  ideological discourse. This parameterization captures key
  with parameters β = 10 and θ = 0.5 chosen to create an       social media behaviors including confirmation bias effects,
appropriate transition steepness and midpoint for our opin-       targeted cross-ideological interactions, and increased en-
ion space.                                               gagement from users with extreme opinions.
   Finally, the model incorporates opinion strength through        For both reposts and comments, the message genera-
an additional sigmoid function with the same parameters:         tion process extends beyond simple interaction probabilities.
                                             When an agent decides to engage through these higher-order
                                                                     reactions, the system employs an extended version of the
                   ψ(oi) = ϕ(|oi|)                 (13)      message generation framework that incorporates contextual
                                                           awareness of the original content. This context-aware gener-
  This component, weighted by the opinion strength im-
                                                                   ation considers: The content and stance of the original mes-
portance parameter w, captures the observation that agents
                                                            sage as well as an instruction to directly address, agree, or
with more extreme opinions (approaching ±1) demon-
                                                                disagree with specific points or ideas from the original mes-
strate higher baseline interaction probabilities. The opinion
                                                                  sage.
strength effect operates independently of the opinion differ-
ence, modulating the overall interaction probability based on
                                                         Social Network Modelthe intensity of an agent’s held beliefs.
  As shown in Figure 3, the model generates an asym-     The social network in our simulation is modeled as a di-
metric U-shaped probability curve reflecting typical social       rected graph, representing the complex web of connections
media interaction patterns (Xu, Yu, and Song 2018; Shah-      between agents. This structure captures the asymmetric na-
baznezhad, Dolan, and Rashidirad 2021), with high prob-       ture of relationships in many social media platforms, where
abilities for strongly aligned content through ρsim and se-       users can follow others without reciprocation.
lective engagement with opposing viewpoints through ρopp
and the cross-ideology factor c. The interaction probabil-     Network Structure  We define the social network as a di-
ity reaches its minimum for content that neither strongly       rected graph G = (V, E), where V  is the set of vertices
agrees nor disagrees with an agent’s opinion. Different re-       representing agents, and E is the set of edges representing
action types are modeled through varying parameters: likes      follow relationships. Formally:


                                                   472

## Страница 17

                                                    Information Propagation
      G = (V, E)                               (14)
        V = {A1, A2, ..., An}                     (15)                                                   The propagation of information through our simulated social
      E ⊆{(Ai, Aj) | Ai, Aj ∈V, i ̸= j}       (16)      network is governed by a recommendation system that de-
  where n is the total number of agents in the simulation.      termines message visibility and user exposure patterns. This
An edge (Ai, Aj) ∈E indicates that agent Ai follows agent      system implements an agent-centric approach that considers
Aj.                                                              the network structure while maintaining controlled exposure
  The network’s initial state is generated using a probabilis-       to diverse viewpoints.
tic model that considers both opinion alignment and agent
                                                       At the core of our recommendation mechanism lies an
status (regular user or influencer). For any two agents Ai                                                                influence-based scoring system that evaluates message au-
and Aj, the probability of a connection forming is given by:                                                                   thors based on their position within the social network. For
                                                            a given agent Aj, we define their influence score η as:
             pi    if sij ∧1I(Aj)
                P((Ai, Aj) ∈E) =   ps    if sij ∧¬1I(Aj)     (17)
             pd   if ¬sij
  where pi, ps, and pd are the connection probabilities for                                |followers(Aj)|                                                                   η(Aj) =                             (18)
influencers, regular agents with the same opinion sign, and                                    |V| −1
agents with different opinion signs, respectively. The func-
tion sgn(o) determines the sign of an opinion value, effec-
tively grouping agents into pro (o > 0) and contra (o < 0)        where |followers(Aj)| represents the number of followers
stances. We use sij = [sgn(oi) = sgn(oj)] as a shorthand       of agent Aj, and |V| is the total number of nodes in the social
for opinion sign agreement between agents Ai and Aj, and      graph. This normalization ensures that the influence score
1I as an indicator function that equals 1 if agent Aj is an in-      remains bounded between 0 and 1.
fluencer and 0 otherwise. This model implements homophily
by favoring connections between agents of similar opinions       The recommendation process for a target agent Ai oper-
(ps > pd), while also capturing the elevated probability of       ates on the set of available messages M. To ensure fresh
following influential users within one’s own opinion group      content delivery and prevent redundant exposure, we first
(pi > ps > pd).                                                  construct the set of eligible messages MAi by excluding all
                                                        messages that agent Ai has previously interacted with and
Connection Dynamics  The evolution of social connec-                                                                         their own messages:
tions between agents serves two distinct purposes in our
simulation framework. First, it shapes the information flow
within the network by influencing the content recommen-
dation process for each agent. Second, it provides essential
social cues to human study participants by displaying real-      MAi = {m ∈M : m ̸∼Ai ∧auth(m) ̸= Ai}    (19)
istic follower and following relationships in agent profiles,
thereby enhancing the ecological validity of our experimen-
tal platform.                                                    Here, m ∼Ai denotes that agent Ai has interacted with
  The network structure evolves through two independent      message m, and auth(m) denotes the agent who created
mechanisms: the formation of new connections (following)      message m. The final set of recommended messages RAi
and the dissolution of existing ones (unfollowing). For fol-       for agent Ai is then constructed by selecting messages au-
lowing, we leverage a variant of the reaction probability      thored by the most influential agents:
function described in Section A. The key difference is that
while the general reaction function evaluates message opin-
ions using π(Ai, m), the follow mechanism directly uses the
opinion values of the agents themselves. Specifically, it cal-       RAi = topN{m ∈MAi : ranked by η(auth(m))}   (20)
culates the reaction probability using oi and oj as inputs,
without requiring the message evaluation function π.
  Unfollowing occurs independently, with each existing                                                         where N is the desired number of recommendations and
connection having a fixed probability of dissolution at each
                                                        topN selects the N highest-scoring messages according totime step. This decoupled approach allows for natural fluctu-                                                                         their authors’ influence scores.
ations in network density while maintaining realistic social
dynamics.                                                     This streamlined recommendation system maintains ex-
  Unfollowing occurs independently, with each existing      perimental control while facilitating the study of network
connection having a fixed probability of dissolution at each       effects on information propagation. By focusing solely on
time step. This decoupled approach allows for natural fluctu-      agent influence metrics, we create a framework that empha-
ations in network density while maintaining realistic social       sizes the role of network topology in information dissemi-
dynamics.                                                      nation patterns.


                                                   473

## Страница 18

   Algorithm 1: Social Network Simulation                       network.
   Data: nagents, niterations, nrecs, preg, pinf, topic                                                       Hyperparameters  The simulation was conducted using a
 1 A ←InitializeAgentPopulation(nagents, topic);
                                                            network of 30 agents (24 regular users, 3 influencers for each 2 G = (V, E) ←InitializeNetwork(A);
                                                                     stance) simulated over 10 iterations, with 8 message recom- 3 M ←∅;
 4 for t ←1 to niterations do                                    mendations per agent per iteration. Regular users were as-
 5  Mt ←∅;                                                   signed a posting probability of 0.2, while influencers posted
                                                               with probability 0.6.
 6    for Ai ∈A do                                               For the polarized condition, we implemented a bimodal
 7      ppost ←IsInfluencer(Ai) ? pinf : preg;                  opinion distribution centered at ±0.8 (σ = 0.1), represent-
 8        if Random() < ppost then                                    ing a divided community. The unpolarized condition used
 9    m ←CreateMessage(Ai, t);                                                               a single normal distribution (centered at 0, σ =  0.1) to
10     Mt ←Mt ∪{m};                                                        model a more cohesive community. The reaction mechanism
11      UpdateAgentMemory(Ai, m);
                                                         employed distinct hyperparameters for different engagement
12 M ←M ∪Mt;                                                 types: likes (pb = 0.7, c = 0.0), reposts (pb = 0.3, c = 0.1),
                                                          and comments (pb = 0.3, c = 0.5), with all types sharing
13    for Ai ∈A do                                           an opinion strength importance of w = 0.8. For the con-
14    RAi ←RecommendMessages(Ai, M, G, nrecs);            nection dynamics, following used the reaction function with
15     IAi ←ModelInteractions(Ai, RAi);                   parameters pb = 0.5, w = 0, and c = 0, while unfollow-
16    UpdateAgentMemory(Ai, RAi, IAi);                      ing occurred randomly with probability 0.05, allowing for
17    G ←UpdateNetwork(Ai, G);                                                                  organic evolution of the network structure based primarily
                                                        on opinion similarity.

  Simulation Workflow                               B  User Study
   In our simulation model, the workflow, as outlined in Al-     Newsfeed Recommendations
   gorithm 1, consists of initialization and iterative simulation     The web application implements an adaptive recommenda-
   phases, each designed to capture specific aspects of social       tion system for content presentation that evolves with user
  media dynamics.                                           engagement. This system employs two distinct algorithmic
    The initialization stage establishes the foundational ele-      approaches: a default variant for initial users and a collabo-
   ments of the simulation environment by creating a popula-       rative variant that activates once users establish an interac-
   tion of agents with unique attributes as described in Sec-       tion history.
   tion A, and constructing the initial social network structure.       The default variant implements a popularity-based scor-
  The network initialization process accounts for opinion dis-      ing mechanism that considers multiple forms of engagement
   tributions and influencer designations to create realistic so-       to determine content visibility. For a given message m, the
   cial relationships between agents.                             system calculates a composite popularity score:
    The core simulation operates through discrete time steps,
   with each iteration representing a distinct period of social
                                                               Sp(m) = lm + 2cm + 2rm            (21)  media activity. During the content generation phase, the sim-
   ulation iterates through all agents to determine if they will        where lm, cm, and rm  represent the number of the
   create a post, following the probabilities and characteristics      message’s likes, comments, and reposts respectively. The
   outlined in Section A. Regular users and influencers have      weighted coefficients  reflect the  relative importance as-
   different base probabilities of posting, with influencers be-      signed to different forms of engagement, with more active
   ing more likely to generate content.                           forms of interaction carrying greater weight.
     After new content is generated, the simulation processes       As users begin to interact with the platform, the system
   each agent’s interactions with the social network. The rec-       transitions to a collaborative variant that incorporates pop-
  ommendation system determines which messages are pre-       ularity metrics, ideological proximity, and a stochastic el-
   sented to each agent based on the previously described scor-      ement to ensure recommendation diversity. The enhanced
   ing mechanisms. Agents then have opportunities to inter-      scoring function combines these elements into a composite
   act with the recommended content through likes, comments,       score:
   and reposts, following the interaction model detailed in Sec-
   tion A. Each interaction is recorded in both the message’s                                                               Sp(m)      2 −|ou −oa|
   interaction tracking and the agent’s memory, maintaining a      Sc(m) = ωp ·    + ωi ·        + ωr · ϵ  (22)
                                                               Smax            2    finite history of their social activities.
     Throughout this process, the social network structure con-        where Sp(m) represents the popularity score normalized
   tinues to evolve as agents form new connections and dis-     by the maximum observed score Smax, ou and oa denote
   solve existing ones based on their interaction patterns. This       the opinion scores of the active user (determined as the av-
  dynamic network structure influences future content recom-      erage of the opinion scores of the artificial users interacted
   mendations and interaction opportunities, creating a contin-      with) and the (artificial) message author respectively, ϵ rep-
   uous feedback loop that shapes the evolution of the social       resents a uniform random variable in the interval [0, 1], and


                                                      474

## Страница 19

ωp, ωi, and ωr are weighting parameters that sum to unity       design, we retained this measure for further analyses while
(ωp + ωi + ωr = 1). In the current implementation, these      acknowledging its psychometric limitations.
weights are set to ωp = 0.6, ωi = 0.2, and ωr = 0.2, bal-
ancing the influence of popularity, ideological similarity, and
randomization.
  Both variants maintain temporal relevance by presenting
the user’s most recent content contributions at the beginning
of their feed when accessing the first page. This approach
ensures users maintain awareness of their own contributions
while experiencing the broader content landscape through
the scoring-based recommendations.
  This dual-variant approach enables the system to pro-
vide meaningful content recommendations even in the ab-
sence of user interaction data while transitioning smoothly
to more personalized recommendations as users engage with
the platform. The incorporation of popularity metrics, (mild)
ideological factors, and controlled randomization creates di-
verse recommendations that is designed to give the impres-
sion of a dynamic network environment, while still falling
under the conditional Recommendation Bias regime. The
stochastic element particularly aids in preventing recom-
mendation stagnation and ensures dynamic content delivery.

Preliminary Analysis
We evaluated the ecological validity of our experimental
platform. Participants rated various aspects on 7-point scales
(1 = Not at all, 7 = Extremely), with higher scores indicat-
ing more positive evaluations. The platform received favor-
able ratings across multiple dimensions, consistently scoring
above the scale midpoint of 4. Particularly noteworthy was
the interface usability (M = 5.52, SD = 1.15), which par-
ticipants rated as highly satisfactory. The platform’s similar-
ity to real social media platforms (M = 4.69, SD = 1.65)
and its ability to facilitate meaningful discussions (M =
4.59, SD = 1.41) were also rated positively. The overall
platform realism received satisfactory ratings (M = 4.47,
SD = 1.61), suggesting that participants found the exper-
imental environment sufficiently realistic and engaging for
the purposes of this study. The attitudes of participants to-
ward Universal Basic Income exhibited a slight decline from
the pre-interaction phase (M = 3.12, SD = 0.90) to the
post-interaction phase (M = 2.99, SD = 0.99). However,
these attitudes remained relatively close to the scale mid-
point, indicating that participants held moderate views on
the subject matter under discussion.
  Furthermore, we examined the psychometric properties of
our key measures (see Table 6). Principal component anal-
yses were conducted for each scale, with items loading on
their intended factors. Most scales showed good reliability
(α ranging from .715 to .893) and satisfactory factor load-
ings (|.40| or greater). The Perceived Group Salience scale
required modification from its original four-item structure.
Two items ("The debate focused on ideas rather than group
affiliations" and "Individual perspectives were more promi-
nent than group identities in the discussions") were dropped
due to poor factor loadings (.049 and .051 respectively). The
remaining two items showed modest to acceptable loadings
(−.585 and −.806), though below optimal thresholds. Given
the theoretical importance of group salience in our research


                                                   475

## Страница 20

Figure 4: The screenshot depicts the simulated social media platform interface. The Newsfeed is displayed with a single post
and one comment, including reaction handles for liking, reposting, and commenting. The interface emulates common social
media design patterns, including a field for posting new messages, discovering new users, and inspecting the user profile.





  Condition   User Type   Avg Followers   Avg Followees    Avg Posts      Avg Likes    Avg Comments   Avg Reposts

               Overall       7.300 ± 0.544    7.300 ± 0.544   2.156 ± 0.042   8.067 ± 1.441    5.467 ± 0.432    2.900 ± 0.082
  Polarized     Influencers   13.944 ± 0.906   7.611 ± 1.322   4.944 ± 0.157   8.778 ± 1.235   12.333 ± 1.414   5.278 ± 0.314
               Regular      5.639 ± 0.453    7.222 ± 0.403   1.458 ± 0.059   7.889 ± 1.640    3.750 ± 0.204    2.306 ± 0.129

               Overall       8.056 ± 0.083    8.056 ± 0.083   2.067 ± 0.144   6.456 ± 0.274    1.600 ± 0.082    1.567 ± 0.047
  Moderate    Influencers   17.389 ± 0.314   7.222 ± 0.283   4.889 ± 0.614   7.833 ± 1.569    4.056 ± 0.614    3.444 ± 0.208
               Regular      5.722 ± 0.171    8.264 ± 0.129   1.361 ± 0.221   6.111 ± 0.599    0.986 ± 0.129    1.097 ± 0.109
  Note: Values represent the mean and standard deviation (± SD) calculated from the final iteration values across the three recommenda-
   tion conditions (pro, contra, balanced). These statistics reflect the cumulative state of the agent-based platform environment presented
   to users at the start of their interaction phase.

                      Table 5: Agent Platform Statistics at Final Iteration (Mean ± SD across Runs)





                                                   476

## Страница 21

 Universal Basic Income (Pre) (α = .893)

 A universal basic income would benefit society as a whole                                                               .828
  Providing everyone with a basic income would do more harm than good [R]                                               .728
  Universal basic income is a fair way to ensure everyone’s basic needs are met                                             .701
 Giving everyone a fixed monthly payment would reduce people’s motivation to work [R]                                   .671
  Universal basic income would lead to a more stable and secure society                                                    .867
 People should earn their income through work rather than receiving it unconditionally from the government [R]              .649
 A universal basic income would give people more freedom to make choices about their lives                                .724

 Universal Basic Income (Post) (α = .890)

 A universal basic income would benefit society as a whole                                                               .847
  Providing everyone with a basic income would do more harm than good [R]                                               .769
  Universal basic income is a fair way to ensure everyone’s basic needs are met                                             .782
 Giving everyone a fixed monthly payment would reduce people’s motivation to work [R]                                   .610
  Universal basic income would lead to a more stable and secure society                                                    .921
 People should earn their income through work rather than receiving it unconditionally from the government [R]              .522
 A universal basic income would give people more freedom to make choices about their lives                                .698

 Perceived Polarization (α = .776)

 The discussions on the platform were highly polarized                                                                   .674
 Users on the platform expressed extreme views                                                                         .755
 Users appeared to be firmly entrenched in their positions                                                                .644
 There were frequent hostile interactions between users with differing views                                               .644

 Perceived Emotionality (α = .842)

 The discussions were highly charged with emotional content                                                             .864
 Users frequently expressed strong feelings in their messages                                                             .691
 The debate maintained a predominantly calm and neutral tone [R]                                                        .692
  Participants typically communicated in an unemotional manner [R]                                                       .779

 Perceived Group Salience (α = .639)

 Messages frequently emphasized "us versus them" distinctions                                                           .585
 Users often referred to their group membership when making arguments                                                  .806

 Perceived Uncertainty (α = .715)

 The agents frequently acknowledged limitations in their knowledge                                                       .541
 Users often expressed doubt about their own positions                                                                   .772
 Messages typically contained absolute statements without room for doubt [R]                                             .566
 The agents seemed very certain about their claims and positions [R]                                                      .671

 Perceived Bias (α = .830)

 The discussion seemed to favor one particular viewpoint                                                                 .782
  Certain perspectives received more attention than others in the debate                                                     .738
 The platform provided a balanced representation of different viewpoints [R]                                               .821
  Different perspectives were given equal consideration in the discussion [R]                                                .646

Table 6: Factor loadings and scale reliability for key measures. Note: [R] indicates reverse-coded items. Factor loadings are
displayed for all items retained after cleaning (loading threshold |.40|).





                                                   477

## Страница 22

Figure 5: Distribution of interaction types across experimental conditions. The stacked bars show the relative proportion of dif-
ferent interaction types (likes, reposts, comments, and follows) for each combination of polarization level and recommendation
bias. Total interaction counts are displayed above each bar.





                                                   478
