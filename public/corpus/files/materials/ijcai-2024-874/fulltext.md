---
id: ijcai-2024-874-text
type: material
title: Источник [36]
work_id: ijcai-2024-874
source_url: https://ijcai.org/proceedings/2024/0874.pdf
retrieved_at: '2026-10-27'
conversion: pdf_text_extraction
quality_note: Текст извлечён из PDF с сохранением номеров страниц. Порядок колонок,
  таблицы, формулы и подписи могут быть искажены; рисунки доступны по ссылке на PDF.
  Это текстовая конверсия, не визуально эквивалентный оригинал.
language: original
sha256_text: a926f572c3b4cfe522aef88333f7d3be0118069c109dc37bf817becd0b8cf37e
---

> Источник: [https://ijcai.org/proceedings/2024/0874.pdf](https://ijcai.org/proceedings/2024/0874.pdf). Текст извлечён из PDF с сохранением номеров страниц. Порядок колонок, таблицы, формулы и подписи могут быть искажены; рисунки доступны по ссылке на PDF. Это текстовая конверсия, не визуально эквивалентный оригинал.

## Страница 1

                            Proceedings of the Thirty-Third International Joint Conference on Artiﬁcial Intelligence (IJCAI-24)
                                                            Special Track on Human-Centred AI




          Emergence of Social Norms in Generative Agent Societies:
                           Principles and Architecture

           Siyue Ren1 , Zhiyao Cui2 , Ruiqi Song2 , Zhen Wang1,2,3 and Shuyue Hu4
             1School of Mechanical Engineering, Northwestern Polytechnical University
                  2School of Cybersecurity, Northwestern Polytechnical University
    3School of Artificial Intelligence, OPtics and ElectroNics(iOPEN), Northwestern Polytechnical
                                             University
                           4Shanghai Artificial Intelligence Laboratory
   {rensiyue, zhiyao, songruiqi}@mail.nwpu.edu.cn, w-zhen@nwpu.edu.cn, hushuyue@pjlab.org.cn

                  Abstract                            question is: how do social norms spontaneously emerge from
                                                                   social interactions of humans or agents?
     Social norms play a crucial role in guiding agents
                                                             This paper studies the emergence of social norms within a    towards understanding and adhering to standards
                                                                generative multi-agent system (MAS), i.e. a system of agents     of behavior, thus reducing social conflicts within
                                                                      that are powered by large-language models (LLMs). The de-     multi-agent systems (MASs).  However, current
                                                        ployment of MASs in real-world situations raises the need for    LLM-based (or generative) MASs lack the capa-
                                                                these systems to be normative—the capability of empowering      bility to be normative.  In this paper, we propose
                                                              agents to understand certain standards of behavior and behave     a novel architecture, named CRSEC, to empower
                                                                appropriately according to the standards [Boella et al., 2008;     the emergence of social norms within generative
                                                          Criado et al., 2011].  Imagine that agents within a system    MASs. Our architecture consists of four modules:
                                                                      interact with other agents or humans to accomplish some     Creation & Representation, Spreading, Evaluation,
                                                                     tasks; for the system to be truly accepted and embraced by    and Compliance. This addresses several important
                                                       humans, such a capability will be crucial, as it can reduce     aspects of the emergent processes all in one:  (i)
                                                                      conflicts within systems, enable more effective coordina-    where social norms come from, (ii) how they are
                                                                   tion among agents (potentially including humans), and allow     formally represented, (iii) how they spread through
                                                   humans to anticipate the system’s behaviors—a key means     agents’ communications and observations, (iv) how
                                                                   to improve human trust in the system [Awad et al., 2018;     they are examined with a sanity check and synthe-
                                                       Ajmeri et al., 2020; Chugunova and Sele, 2022].     sized in the long term, and (v) how they are incor-
     porated into agents’ planning and actions. Our ex-           Since LLMs are trained on extensive corpora of human
     periments deployed in the Smallville sandbox game           text, it is not surprising that they may inherently embed so-
    environment demonstrate the capability of our ar-           cial norms [Schramowski et al., 2022; Guo et al., 2023].
     chitecture to establish social norms and reduce so-       One might thus challenge the importance of fostering the
      cial conflicts within generative MASs. The positive        emergence of social norms within generative MASs. While
    outcomes of our human evaluation, conducted with      LLMs can capture social norms,  it has also been shown
    30 evaluators, further affirm the effectiveness of our          that LLMs do not adequately understand social norms, es-
     approach. Our project can be accessed via the fol-          pecially the culture-specific ones [Ramezani and Xu, 2023;
    lowing link: https://github.com/sxswz213/CRSEC.        H¨ammerl et al., 2022].  This deficiency can provoke con-
                                                                                 flicts among generative agents, particularly when their base
                                          LLMs are trained on text corpora from diverse cultural back-
1  Introduction                                                            grounds. Moreover, as generative agents increasingly become
In human societies, social norms, which are standards of    more personalized (such as functioning as personal assistants)
behavior shared within a social group [Sherif, 1936], have    and represent humans in social situations, it is natural to ex-
shaped almost every aspect of our daily life, from the lan-    pect that these agents, reflecting the values and preferences of
guage we speak and the etiquette we drive to the amount we     their human users, will encounter social conflicts similar to
tip. Without social norms, people may feel confused about    those experienced by humans. To tackle these challenges, ap-
how to behave appropriately in social situations and conse-    proaches must go beyond merely embedding LLMs with hu-
quently social conflicts may arise [Lewis, 1969]. Over the   man norms or aligning them to such norms [Liu et al., 2024;
past decades, the study of social norms has attracted much in-    Li et al., 2024]; rather, they should also be able to foster the
terest in a variety of disciplines, such as economics [Young,    emergence of social norms within generative MASs so that
2015], cognitive science [Hawkins et al., 2019], complex    generative agents can establish their own standards of behav-
system science [Centola et al., 2018], and computer science     ior out of their interactions and adhere to these standards to
[Morris-Martin et al., 2019]. Across these studies, a central    address those conflicts.




                                                   7895

## Страница 2

                            Proceedings of the Thirty-Third International Joint Conference on Artiﬁcial Intelligence (IJCAI-24)
                                                            Special Track on Human-Centred AI

                        CRSEC: Normative Architecture for Generative Agent Societies
               Creation &Representation                    Spreading                       Evaluation                Compliance
                       Creation & Representation                                Norm identification                 Immediate                        Compliance
                                                                                 from observation                    evaluation   …                    in plans
                             Initial Personal                                                                                                                                                                                                                                                                                          Database                                                                 Database                                                                                                                                                                                                Database                                                                                                                                                                                                                Plan                 Norm Database                         Observation
                                                                                                                                                                              No                                                                                                                                                                                                                smoking                                                                                                                                                                                                   Smoke                                                                                                                                                                                                                                                                                     in                                                                    Norm identification
                                                                                                                                                                                                                                        indoors                                                                                                                                                                                                                                                     designated
                                                                                                                                             Norm                                                                                                                                                                                  Norm              Agent       Environment               Communication             fromreceiverchats as                                                                                                   area                                                                                                                       Long-term
             Description                                                                    Conflict！                                              synthesis                         Smoke     Action
                                                                                                      Conflict detection &                                                                Free     stop smoking                                                                                                                                                                                                                                                                                          Personal                                                                 Personal                Compliance                                                                                                         Receiver            Sender              influencing others
                ……                                                                           via chats as sender                                                                  in actions


            A social norm emerges if the standard of behavior defined by that norm has been widely accepted and adhere to in the society

Figure 1: CRSEC: our architecture for the emergence of social norms in generative agent societies. Initially, by the Creation & Represen-
tation module, norm entrepreneurs create their personal norms and store them into their databases. By the Spreading module, some agents
proactively influence others to adopt their personal norms through initiating communication with others, while others can identify those norms
from their chats and observations. The identified norms then undergo an immediate evaluation in the Evaluation module. The Compliance
module enables agents to generate plans and actions, with the norms bearing in mind. The normative actions, in turn, can influence other
agents’ observations and thus reinforce the spreading of norms. In addition, from time to time, agents perform long-term synthesis to keep
their personal norms compact and concise.

  How can we empower generative MASs with the capabil-  & Representation, Spreading, Evaluation, and Compliance.
ity to foster social norm emergence? We argue that the key    This architecture not only fosters the emergence of social
is to instigate an emergent process—generative agents, start-    norms within generative MASs, but also addresses the open
ing with initially only a few adopting certain standards of be-    problem of actualizing various aspects of the emergent pro-
havior, influence others and propagate these standards, ulti-    cess into an operational framework.  Specifically, through
mately resulting in widespread acceptance and adherence of    the Creation & Representation module, norm entrepreneurs
these standards across the system. Recent work has shown    (agents who actively campaign norms) can generate their
that generative MASs can reproduce believable social behav-   own personal standards of behavior (or personal norms), and
iors (such as spreading invitations to a party) [Park et al.,    these standards are formally represented and stored in their
2023], achieve multi-agent cooperation surpassing conven-    databases. Through the Spreading module, some agents in-
tional methods [Zhang et al., 2024], and collaboratively solve    fluence others to adopt the standards via communication and
complex tasks (such as automatic code generation) [Hong et     actual behaviors, while others can identify these standards
al., 2023]. While these systems have demonstrated the poten-    by reflecting on their conversations and observations. With
tial of leveraging LLMs in MAS research, the emergence of    the Evaluation module, agents perform a sanity check to de-
social norms remains largely unaddressed in existing studies,    cide whether they accept certain standards as their own per-
primarily because they typically focused on fully cooperative    sonal norms, and, from time to time, synthesize their per-
tasks—where agents’ values, preferences, or objectives align,    sonal norms to keep the norms compact and concise. Lastly,
thereby generally preventing social conflicts and voiding the    the Compliance module raises agents’ awareness of their per-
need for social norms.                                         sonal norms, encouraging them to generate plans and take ac-
   Fortunately, the extensive and multidisciplinary literature     tions in line with the norms. An overview of our architecture
on social norm emergence can offer a wealth of resources for     is shown in Figure 1.
inspiration. For example, some studies may focus on norm     To verify if and how our architecture leads to the emer-
representation [Dignum, 1999; ˚Agotnes et al., 2009], some    gence of social norms within generative MASs, we ran our
may delve into norm compliance and enforcement [Modgil    experiments on the Smallville sandbox game environment
et al., 2009; Villatoro et al., 2011; Mahmoud et al., 2015],    [Park et al., 2023], and simulated the scenarios where ini-
and others may explore norm learning [Sen and Airiau, 2007;     tially agents have conflicts in their values and preferences.
Beheshti et al., 2015; Hu and Leung, 2017; Hu et al., 2019].   We show that social norms always emerge in multiple in-
That said, these studies cannot provide a direct solution for    dependent runs of our experiments, leading to 100% of
two key reasons. First, historically, they have not been able    agents accepting some standards of behaviors as their per-
to harness the strength of LLMs. Second, they typically fo-    sonal norms and complying with these norms in their plans
cused on isolated aspects of the emergent process, conse-    and actions; moreover, as social norms emerge, social con-
quently leaving the tangible implementation that integrates      flicts almost vanish. Moreover, we observe that conversations
various aspects as an open problem [Savarimuthu and Crane-    and thoughts drive the emergence of social norms, and de-
field, 2011; Haynes et al., 2017].                                   scriptive norms are harder to establish than injunctive norms,
  In this paper, we propose, to our knowledge, the first nor-    yet norm entrepreneurs can shape their emergence.  For a
mative architecture for generative MASs. Our architecture,     better understanding, we additionally present a case study
abbreviated as CRSEC, consists of four modules: Creation     to illustrate how a seasoned smoker in Smallville’s environ-




                                                   7896

## Страница 3

                            Proceedings of the Thirty-Third International Joint Conference on Artiﬁcial Intelligence (IJCAI-24)
                                                            Special Track on Human-Centred AI


ment has been gradually persuaded to accept “no smoking in-    Recall that agents’ values or preferences typically vary, as we
doors” as his own personal norm, and eventually even stepped    analyze in the introduction. To ensure that the created per-
forward to remind another agent upon noticing that agent’s    sonal norms are consistent with norm entrepreneurs’ agent
breach of the norm.  Finally, we present the results of our     descriptions, we instruct LLMs through prompts to create
human evaluation, which involved 30 evaluators, to gauge    these norms based on norm entrepreneurs’ agent descriptions.
the effectiveness of our architecture from a human perspec-    Let G denote an agent description, and P denote a set of cre-
tive. The feedback gathered from the questionnaires reflects    ated personal norms. We represent this LLM-based operation
an overall positive evaluation. Furthermore, interviews con-    by P ←CreateNorm(G). This operation not only gener-
ducted after the questionnaires shed light on aspects that hu-     ates personal norms in natural language, but also classifies a
mans consider important for the emergence of social norms    newly formed personal norm (i.e., deciding the value of α),
and suggest potential directions for future work.              and also assesses the utility u of that norm on a scale of 1 to
                                                            100. Once created, personal norms are stored in each norm
2  Principles and Architecture                         entrepreneur’s personal norm database.
                                                           For clarity, we say that a generative agent is an ordinary
In this section, we illustrate the principles behind our CRSEC    agent if it is not a norm entrepreneur. Note that not only norm
architecture and present its four modules. Due to the lack of    entrepreneurs but also ordinary agents maintain their own
space, we flesh out the prompts for the LLM-based operations    personal norm databases. This is because ordinary agents do
of this work in Appendix B (which is only available in the    not generate personal norms through this module though, they
arXiv version of the paper).                          may acquire personal norms over time through the Spreading
                                                      and Evaluation modules, which will be presented in subse-
2.1  Creation and Representation                       quent sections.
The Creation and Representation module of our architecture
                                                         2.2  Spreadingaddresses the questions of where social norms come from and
how they can be formally represented. In human society, so-   The Spreading module of our architecture helps certain stan-
cial norms are usually shaped by norm entrepreneurs, who    dards of behavior gain widespread acceptance and ultimately
actively influence and persuade others to alter their behav-    evolve into social norms.  In particular, we consider two
iors in accordance with the entrepreneurs’ personal standards    key mechanisms through which norms spread in generative
of behavior (or personal norms) [Sunstein, 1996]. Personal   MASs: communication and observation.
norms typically flow from one’s values [Schwartz, 1973], and
                                                 Communication between Agentswould become social norms if they were to be widely adopted
                                                            Generative agents are well known for their capability to gen-by other members of a social group. According to [Cialdini et
                                                                   erate human-like conversations [Clark et al., 2021]. It is thusal., 1991], there are two types of (personal or social) norms:
                                                                  natural to consider spreading norms by leveraging such a ca-(i) descriptive ones that reflect what most people typically do
                                                                         pability. To achieve this, we consider two perspectives: ain a given situation, and (ii) injunctive ones that dictate what
                                                                sender’s perspective and a receiver’s perspective.ought or ought not to be done in a given situation. For ex-
ample, the common practice of shaking hands upon meeting   The Sender’s Perspective.  In human societies, the desire
someone is descriptive; in contrast, no smoking indoors is in-     to resolve social conflicts has driven the emergence of nu-
junctive.                                              merous social norms [Nyla R. Branscombe, 2022]. Inspired
  In this work, we consider a generative agent to be a norm    by this, we instruct each generative agent (a sender) to de-
entrepreneur if the agent, initially, possesses some personal     tect  if there are any observations of other agents’ behav-
norms and is interested in influencing others to adopt its     iors that conflict with its personal norms.  Let OS be the
personal norms.  Formally, we represent a personal norm     text description of the sender’s observations of the environ-
with a quintuple n = ⟨c, u, α ∈{‘des’, ‘inj’}, sact ∈    ment, and PS be the sender’s set of qualified personal norms
{T, F}, sval ∈{T, F}⟩. Here, c represents the personal norm     in  its database.  We represent this LLM-based operation
in natural language, e.g, “no smoking indoors”; u is the utility    by Yconflict ∈{T,F} ←DetectConflict(OS, PS).
that distinguishes mediocre from important personal norms,    Note that initially, since only norm entrepreneurs have their
with a higher score indicating that the agent believes the stan-   own personal norms, ordinary agents will detect no con-
dard of behavior to be more important; α denotes the type of      flicts. However, as time evolves, ordinary agents may also
a personal norm, with ‘des’ being descriptive and ‘inj’    develop their personal norms, and thus conflicts may be de-
being injunctive; sact and sval are Boolean variables signify-     tected. Once a conflict is detected (i.e., Yconflict = T),
ing if the personal norm is activated and valid, respectively.    then the sender will decide whether to proactively step in and
By default, personal norms generated in this module are acti-     start a conversation in order to influence others and propagate
vated (sact = T) and valid (sval = T). In the rest of the paper,      its personal norms.  Intuitively, if the sender is a norm en-
we say that a personal norm is qualified if it is both activated     trepreneur, then it will start a conversation without doubt, as
and valid, for simplicity.                                                           it is interested in influencing others. However, if the sender is
 A distinct feature of generative agents is that by using natu-    an introverted, ordinary agent, it may not start a conversation.
ral language that mimics how one typically describes humans,    Thus, for better autonomy, we let the sender decide based on
these agents can exhibit characteristics and personalities in      its agent description GS, and represent this LLM-based oper-
alignment with the agent description [Shanahan et al., 2023].     ation by Ytalk ∈{T,F} ←DecideToTalk(GS).




                                                   7897

## Страница 4

                            Proceedings of the Thirty-Third International Joint Conference on Artiﬁcial Intelligence (IJCAI-24)
                                                            Special Track on Human-Centred AI


The Receiver’s Perspective.  We consider that when being   may confuse that agent if this normative information is di-
involved in a conversation, a generative agent (a receiver)     rectly incorporated into the personal norms. To address the
will reflect on the conversation and discern information re-    above issues, our Evaluation module performs a sanity check
garding norms (or normative information for short).  Let     for each generated normative information.
TS→R denote a conversation between a sender and a re-       Specifically,  this consists of four steps.   Let  ¯n be a
ceiver.  This LLM-based operation can be represented by    piece of normative information generated in the Spreading
¯nR ← IdentifyNormativeInformation(TS→R),    module.  The  first step examines  if  ¯n is consistent with
where ¯nR represents normative information, which includes      its preceding conversation or thought,  i.e., Yconsistent ∈
natural language describing certain standard of behavior, and    {T, F} ←CheckConsistency(¯n, q), where q = TS→R
the type of the standard (whether it is descriptive or injunc-      if  it  is generated from the conversation, and q = MA
tive), as well as the utility on a scale of 1 to 100 indicating its      if  it is generated from the thought.  The second step ex-
importance. Here, we also store normative information in the    cludes duplication by checking if ¯n already exists in the set
personal norm database, but set their states to be deactivated   P of qualified personal norm,  i.e., Yunique ∈{T, F} ←
and invalid (sact = F, sval = F) to distinguish them from the   CheckDuplication(¯n, P).  Next, we aim to examine
qualified personal norms. Initially, ordinary agents are likely      if LLMs have incorrectly classified types of norms,  i.e.,
to act as receivers. However, over time, norm entrepreneurs    Ytype ∈{T, F} ←CheckType(α).  Last, we examine if
may also become receivers, as ordinary agents can in turn in-      ¯n conflicts with any existing qualified personal norm,  i.e.,
fluence entrepreneurs, after they develop their own personal    Yconflictfree ∈{T, F} ←CheckConflict(¯n, P). Any
norms.                                                     normative information that yields a false value in one of the
                                                        above four steps will not pass this sanity check, and will re-
Observation from Others’ Behavior                                                    main deactivated and invalid. Only those that pass the sanity
Observation has long been recognized as a key mechanism    check will become qualified personal norms.
for humans and agents to learn norms [Nakamaru and Levin,
                                                   Long-term Synthesis2004; Shettleworth, 2009; Beheshti and Sukthankar, 2014;
Paiva et al., 2018].  Recent work has shown that genera-    Over time, as agents accumulate more qualified personal
tive agents can generate thoughts from the text description    norms, they accept a broader range of standards of behav-
of their observations  [Park et al., 2023; Lin et al., 2023].     ior, which could potentially limit their liberty.  Morales et
Let OA denote the text description of observations, and MA      al. [2013; 2015] suggested that for better agent liberty,  it
denote the generated thoughts.  This LLM-based operation    would be beneficial to synthesize norms into a compact and
can be denoted by MA ←GenerateThought(OA), and    concise set of possibly more abstract ones. Inspired by this,
it can be achieved by modules that generate thoughts in ex-   we prompt each generative agent to start a synthesis within its
isting studies.  Leveraging on this, we prompt generative    personal norm database if the sum of the utility of its qualified
agents to identify normative information from the generated    personal norms exceeds a certain threshold.
thoughts. We represent this LLM-based operation by ¯nA ←      This synthesis consists of three steps.   First, the agent
IdentifyNormativeInformation(MA), where ¯nA     categorizes  its qualified personal norms, and generates a
represents normative information. Note that this operation is    theme for each category to justify the categorization; this
similar to IdentifyNormativeInformation(TS→R),    can be represented by an LLM-based operation {(Q, k)} ←
as both these operations can be viewed as a kind of text sum-   ClassifySpecificNorms(P), where Q denotes a sub-
marizing tasks. Once generated, the normative information     set of qualified personal norms, and k is the associated theme.
¯nA is also stored in the personal norm database with the de-    Then, we prompt the agent to generate an abstract personal
activated and invalid state (sact = F, sval = F).              norm for each subset based on the principles of compact-
                                                             ness and conciseness. We represent this operation by n′ ←
2.3  Evaluation                                GenerateAbstractNorm(Q, k). Note that the output of
                                                                         this operation includes the natural language description of
The Evaluation module of our architecture serves two pur-                                                                the abstract personal norm n′ and its type, but it excludes
poses: (i) it evaluates the normative information passed from
                                                                                   its utility. Rather, the utility is determined by calculating the
the Spreading module, and (ii) it synthesizes the qualified per-
                                                         weighted average of the utilities associated with all personal
sonal norms to keep them compact and concise.
                                                    norms within that subset. The weights used in this calculation
Immediate Evaluation                                         are also part of the operation’s output.  Lastly, each gener-
                                                               ated abstract norm will be immediately evaluated through theThe normative information in the Spreading module, once
                                                                  sanity check mentioned in the last paragraph.  If an abstractgenerated, will be immediately evaluated in the Evaluation
                                                              personal norm successfully passes the sanity check, then itmodule. This is because we observed that the generation of
                                                                   will become qualified and all the personal norms within thatnormative information can encounter some issues because of
                                                               subset will be deactivated (sact = F, sval = T).the current limitations of LLMs. For example, LLMs may
incorrectly classify types of norms, or generate normative in-
                                                         2.4  Complianceformation that does not align with preceding conversations
or thoughts. Moreover, we also observed that occasionally,   The Compliance module of our architecture raises agents’
the generated normative information may replicate or conflict    awareness of personal norms in their behaviors. Note that
with some existing personal norms in an agent’s database; it    with such an awareness, agents can choose to comply with




                                                   7898

## Страница 5

                            Proceedings of the Thirty-Third International Joint Conference on Artiﬁcial Intelligence (IJCAI-24)
                                                            Special Track on Human-Centred AI



                                       Related thoughts                   Related chats                    Social conflicts
                                    Adherence in plans & actions       Acceptance in databases      Note: The left Y-axis of panel (a) is a logarithmic scale.

                                 "No smoking indoors."                   "Be quiet in public."                     "Tipping after meals."
                           100
                                                                                                                                                   40                            50
                  of chats                                             unit 20                                                                                                                     30 per Number
          /
                                                                                                                                                   20                                                                                                                                                                                                                                                                              time                             5
                                                                                                                                                   10                       (a) Number     timeper 10                                                                                                                                                                                                                                                                              unit                                                                                 thoughts                                                                                                                   of                             0                                                                                                                     0                conflicts
                                                            agents    1.00.8
                    of    0.6
                      (b)
                                 0.4
                                 0.2                                                                                                   Proportion    0.0
                                     0.0       0.5       1.0       1.5       2.0     0.0       0.5       1.0       1.5       2.0     0.0       0.5       1.0       1.5       2.0 Days
Figure 2: The evolution of generative MASs. Panel (a) depicts the evolution of the number of social conflicts, thoughts and chats over time.
Panel (b) illustrates the emergent process of social norms in terms of (i) the proportion of agents that have accepted a standard of behavior as
their personal norms in their databases, and (ii) the proportion of agents that have adhered to a standard of behavior in their plans and actions.

the norms or not, thereby granting them with greater auton-    3.1  Experimental Settings
omy [Conte et al., 1998; Criado et al., 2011]. We design this                                                   Our experiments were conducted in Park et al. [2023]’s Smal-
module focusing on two sub-components: (i) compliance in                                                                            lville sandbox game environment, which is arguably the most
planning, and (ii) compliance in actions.                                                       well-known environment for generative MASs. This environ-
                                                    ment offers a variety of scenarios where LLM-based agents
Compliance in Planning
                                                         can exhibit human-like behaviors, including observation, in-
Plans describe a sequence of actions for agents.  Recent     teraction with others, planning, and action execution. In our
work has shown that generative agents are good at plan-     setup, there were 10 generative agents, including 3 norm en-
ning towards some goals; this ensures that agents’ behav-    trepreneurs and 7 ordinary agents.  To simulate scenarios
iors are consistent over time  [Wang et al., 2023; Lin et    where individuals can have conflicts in values or preferences,
al., 2023].  Building upon this capability, we prompt the   we considered that ordinary agents’ agent descriptions exhib-
agents to take into account  their personal norms during     ited diverse inclinations: some favored smoking in public,
the planning process, so that they can generate plans in    speaking loudly, or supporting a tipping culture, whereas oth-
alignment with their goals as well as their personal norms.     ers held opposite preferences. For norm entrepreneurs’ agent
Let  li denote a plan (e.g.  10:30 am to 11:00 am:     descriptions, we considered all of them to favor “no smoking
Have a light breakfast), and Lplan denote a list of    indoors” and “be quiet in public”. However, since whether
plans (e.g.  for every hour in a day).  The planning pro-     to tip varies across cultures, we considered two of them to
cess of our architecture can be represented by Lplan ←    support tipping while one did not. In addition to these prefer-
GenerateNormativePlans(C, P), where the inputs are    ences, each agent’s agent description also included its name,
the current goals C and the set P of qualified personal norms.     personality, occupation, short-term goal, and social relation-
                                                                ships with other agents, etc. Details of agent descriptions and
Compliance in Actions                                                            experimental parameters, such as the number of initial per-
After generating plans, agents proceed to break down each    sonal norms and the threshold for starting a synthesis in the
plan into a series of more detailed actions and carry them    Evaluation module, are provided in Appendix A.
out. However, plans may fail to accommodate changes in per-     Our implementation utilized GPT-3.5 and GPT-4. Using
sonal norms between the planning and execution phases. To    the same experimental setup, we repeated our experiments
guarantee that agents are aware of their personal norms while     for 5 runs. To be time-efficient and cost-efficient, we focused
executing actions, we further prompt them to consider their    on the scenario “Hobbs Caf´e” (as visualized at the bottom
personal norms during the action-taking stage. Let Laction      left corner of Figure 1) and let the experiments continue for
denote a list of actions.  It is generated based on a plan li,    2 days in the Smallville environment. Each run costs more
the agent’s qualified norm set P, and its agent description G:    than $500 dollars and about 7 days to complete. The GitHub
Laction ←GenerateNormativeActions(li, P, G).       repository for our project can be accessed via the following
                                                                       link: https://github.com/sxswz213/CRSEC.
3  An Experimental Study                                                         3.2  Emergent Phenomena of Social Norms
Our experimental study aims to answer three questions:  (i)   The emergence of a social norm is typically measured by
Do social norms emerge in generative MASs empowered by    whether the standard of behavior defined by that norm has
our architecture?  (ii) If so, what are the characteristics of    been widely accepted and adhered to by a significant major-
such an emergent process?  (iii) How well does our archi-      ity.  In Figure 2, we visualize the evolution of our genera-
tecture perform from a human perspective? We outline the     tive MASs from several perspectives: (i) the number of social
experimental settings in Section 3.1. We answer the first two     conflicts among agents, (ii) the number of generated thoughts
questions in Section 3.2, and the last question in Section 3.3.     or conversations that are related to certain standards of be-




                                                   7899

## Страница 6

                            Proceedings of the Thirty-Third International Joint Conference on Artiﬁcial Intelligence (IJCAI-24)
                                                            Special Track on Human-Centred AI




            Creation & Representation        Abigail Chen (entrepreneur) Created norms: { …“type”: “injunctive”, “content”: “Smoking is strictly prohibited indoors.”,"utility": 100}
                                1. Carlos Gomez & Tamara Taylor                       2. Carlos Gomez & Abigail Chen         Spreading                    4. Carlos Gomez & Sam Moore
                                                                                                                                                                      I                                                                                                     noticed                                                                                                                 that you                          … It‘s … harmful                                                      for                                                 pregnant
                        Tamara                                     Taylor                                                                                          smoking                                                                                                                   indoors.                                                                                 Smoking                                                                                                                   are         Compliance         …promotingI wanted to smokinglet you knowatthat                                                        Can you                                  (a                               pregnant                              woman     individuals                                                       like                                          me.
                                                                                                       strictly                                                                                          prohibited                                                                                                           Abigail Chen    is                                      sensitive                                                                                                                                                                       might                                                                                                                                   the                                                                                                                                                  cafe                                                                                                                                                            be against                                                                                                                                        3. Carlos                                                                                                                               plans                                                                                    &                                                                                                                                             actions                                                                                                                                                                                                                                                   Carlos                                                                                                                                                                                         Gomez                                           to         please extinguish your cigarette … ?
                           secondhand                                     smoke)                                                                                                                (entrepreneur)                                                                                                                                                                                                                                                seasoned                                                                                                                                                                                                                                                          smoker)                                                                                                       the                                                                                      inside                                                                                                                                                                                                       here.      (a                                                                                                                                   the                                                                                                                            smoking                                                                                                                                                               policy                                                                                            …                                                                                                                                   and                                                                                                                 cafe …                Plan:                                                                                                                    respect                                                                                                                         no-
                   (…puts out his cigarette) I                                              ( … extinguishes his                   smoking policy in the café.                                      I haven‘t checked about it… I
                     apologize, I didn't know smoking                            cigarette) … You‘re right,                    Action: … smoke in a                        don't want to go against
                                                                               Carlos                                                               Gomez                                                                                                                                           Carlos                                                                                                            Gomez                        wasn't allowed                                        here.                           … I'll                                        step                                                              smoking                                                                                    inside                                                                                                                   is                                                                                                          designated                                                                                                          smoking                                                                                                                                                   Sam Moore                                                                                                                               … I will                                                                                                                                                the                                                                                                                                        smoking                                                                                                                                                                              policy
                                                                                            (a                                                                              seasoned                                                                                       smoker)                                                                                                                                          seasoned                                                                                                                                                   smoker)                                                                                                                                                                                                                                                 (a seasoned                                                                                                                                                                                                                  smoker)                                                                 …          (a                   outside                           to finish                        my                                         cigarette…                                                                         against the                                                                                       rules                                                                                                                                                  make                                                                                                                                                                                              sure to do                                                                                                                                                                                                                                  so.                                                                                                         area outside.
   Initialization *Day-1      9:00 am                        9:12 am   9:17 am *Day-2 9:08 am                9:40 am
             Evaluation   Normativestored as a infopersonalevaluatednorm.and  {…type: injunctive, utility: 80, content: There is a strong emphasis on the importance of following smoking policies in cafes.}   (a CarlosseasonedGomezsmoker)

       Figure 3: A case study illustrating how a seasoned smoker has gradually adopted “no smoking indoors” as his personal norm.

havior, (iii) the proportion of agents that have incorporated    nated areas”.
these standards into their personal norm databases as quali-                                                                 Descriptive norms are harder to establish than injunctive
fied social norms, and (iv) the proportion of agents that have                                                         norms, yet norm entrepreneurs can shape their emergence.
complied with those standards in their behaviors (plans and                                        We observe that while the injunctive norms “no smoking in-
actions). More findings are elaborated in Appendix D.                                                           doors” and “be quiet in public” have already emerged on Day
Key Findings.  Social norms always emerge.   Our most     1, the descriptive norm “tipping after meals” has not emerged
significant finding is that the social norms “no smoking in-     until the end of Day 2. We hypothesize that this delay is be-
doors”, “be quiet in public”, and “tipping after meals” have    cause violating the standards of behavior set by descriptive
always emerged across all five independent runs in our ex-    norms generally results in less serious social conflicts, and
periments. This emergence is characterized by most agents    thus the normative information was less recognizable. In ad-
not only adopting these standards of behavior as their quali-     dition, we noticed that norm entrepreneurs played a signifi-
fied personal norms, but also adhering to these standards in    cant role in shaping the emergence of descriptive norms. In
their planning and actions. In particular, at the end of Day 2    our setup, initially, there was an equal number of agents sup-
in the Smallville environment, 100% of agents have adopted    porting and against tipping; however, out of the five agents
and adhered to the injunctive norms “no smoking indoors”    favoring tipping, two of them were norm entrepreneurs. De-
and “be quiet in public”. Moreover, we observe that norms,     spite the initial split, eventually, “tipping after meals” always
such as “maintain a healthy environment”, can also emerge    emerged in our experiments; this suggests that the emergence
spontaneously even if they are neither exhibited in agent de-    of this norm was not a mere coincidence but was significantly
scriptions nor initially created by norm entrepreneurs as per-    shaped by the proactive efforts of norm entrepreneurs.
sonal norms.
  Social conflicts almost vanish as social norms emerge. We   A Case Study.  In Figure 3, we provide an example illustrat-
note that with the emergence of social norms, the number of    ing how a seasoned smoker, named Carlos Gomez in Small-
social conflicts among generative agents exhibits a generally     ville’s environment, has gradually adopted “no smoking in-
decreasing trend, despite the surge in the early stage. That    doors” as his personal norm, even though this adoption is
surge is largely attributed to the inherent conflicts in the val-    against his personal interest to smokes wherever he pleases.
ues and preferences of agents given our experimental setup;    At 9:00 am on Day 1, Tamara Taylor, an ordinary agent with
in the beginning, when agents started to interact with each    a sensitivity to secondhand smoke, noticed Carlos casually
another, their differing values and preferences became appar-    smoking indoors; she talked to Carlos and told him about the
ent and naturally led to conflicts in their interactions. Over    harm that smoking indoors causes. Carlos apologized and put
time, however, these conflicts significantly reduced as agents    out his cigarette. However, just 12 minutes later, he smoked
gradually developed social norms to resolve them.                in the caf´e again. This time, a norm entrepreneur named Abi-
  Conversations and thoughts drive the emergence of social     gail Chen noticed his smoke and told him that smoking inside
norms. The initial surge in social conflicts, on the other hand,    the caf´e was strictly prohibited. Following these two interac-
also triggered numerous conversations among agents as well     tions, Carlos was able to recognize the norm against indoor
as their observations about these conflicts.  Through these    smoking; at 9:17 am, such information passed the immedi-
in-depth conversations and dense observations, normative in-     ate evaluation (sanity check) and was stored as a qualified
formation was identified, resulting in the acceptance and ad-    personal norm in the database. On Day 2, despite his habit
herence to the norms occurring at a rapid pace. Once social    of smoking indoors, Carlos now planned and acted in com-
norms have emerged, the number of related conversations and    pliance with the “no smoking indoors” norm. Moreover, he
thoughts gradually decreased. However, this does not mean    even stepped forward to remind another agent, Sam More,
that agents interacted less frequently afterward. Instead, they    upon noticing Sam’s breach of the norm. Due to the lack of
might proactively encourage others to follow these norms, or    space, we present more scenario screenshots of our experi-
even propose new related standards, such as “smoke in desig-    ments in the Appendix C.




                                                   7900

## Страница 7

                            Proceedings of the Thirty-Third International Joint Conference on Artiﬁcial Intelligence (IJCAI-24)
                                                            Special Track on Human-Centred AI



              Sub-                                              Sub-                                                          ment.  Module                         Score    Module                                                           Score        Strongly           component                                         component
                                                                     Agree
                                                                 5.97±0.07         4  Discussions  Creation                6.44±0.11                 Long-termSynthesis
                                    Evaluation
                                                    Immediate                                                   The study of normative MASs, as an established area of AI,                Sender     5.86±0.05                                                                 5.14±0.07       Neutral                                                         Evaluation
                                                           has attracted much attention over the past decades; on the
 Spreading    Receiver    5.77±0.08                   Action     6.40±0.04              other hand, generative AI technologies have recently cap-
                                Compliance                              Strongly               Observation  5.13±0.05                     Plan      6.43±0.14               tivated the world.  In this paper, we show that these two                                                                            Disagree
                                                         seemingly distinct areas can be bridged together to estab-
Figure 4: Human evaluation results. The overall averaged score of     lish a normative, generative MAS. Specifically, we propose a
our architecture is 5.63±0.03. Note that we use 7-point Likert scale,    novel normative architecture such that generative agents can
ranging from strongly disagree (1), disagree (2), somewhat disagree     create, represent, spread, evaluate, synthesize, and comply
(3), neutral (4), somewhat agree (5), agree (6), to strongly agree (7).                                                           with norms; as such, social norms emerge and social conflicts
                                                among generative agents are resolved.
3.3  Human Evaluation on the Architecture                                          We envision that normative, generative MASs would be a
                                                                          fruitful avenue for future research. The normative MASs lit-To evaluate how well our architecture performs in the eyes of
                                                                  erature has identified numerous mechanisms and approacheshumans, we recruited 30 human evaluators. We randomly
                                                                   to represent, detect, distribute, influence, enforce, or even de-selected three out of the five runs, including a total of 30
                                                                     liberately violate norms (see recent surveys [Santos et al.,generative agents, and each agent’s generated outputs (such
                                                         2017; Haynes et al., 2017; Morris-Martin et al., 2019]). Al-as thoughts, conversations, and identified normative infor-
                                                         though integrating every insight from this extensive body ofmation) were assigned to a human evaluator for assessment.
                                                             previous work into a single study is infeasible, these previ-Each evaluator was tasked with a role-playing activity: they
                                                         ous studies, as demonstrated in this paper, can serve as a richread the agent description of an agent, watched a replay of the
                                                            source of inspiration and unveil many possibilities to achieveagent’s 2-day life, and subsequently completed a question-
                                                      and improve normative, generative MASs [He et al., 2024;naire. This questionnaire contains multiple questions asking
                                                         Savarimuthu et al., 2024; Haque and Singh, 2024].human evaluators to rate, on a 7-point Likert scale, their level
                                                              Here, we briefly discuss two promising directions.  Be-of agreement with the agent’s LLM-based operations. Specif-
                                                    yond communication and observation considered in this pa-ically, for each question, evaluators were presented with 20
                                                                      per, reputation [Santos et al., 2018], sanction [Mahmoudrandomly chosen pairs of inputs and outputs from the agent’s
                                                                         et  al., 2017], leadership [Franks et  al., 2013] and emo-LLM-based operations; they were asked to rate how much
                                                                   tion [Argente et al., 2020] can also serve as mechanismsthey agree with the output given the input. The details of our
                                                                   to spread norms.  As another direction, the integration ofquestionnaire are shown in Appendix E. After completing the
                                                                the Belief-Desire-Intention model [Bratman, 1987], a cor-questionnaires, evaluators were interviewed and asked to jus-
                                                              nerstone model for norm inference, and its variants [Yaotify their scores.
                                                      and Logan,  2016; Winikoff  et  al.,  2021; Winikoff and
Results.  In Figure 4, we visualize the human evaluation re-    Sidorenko, 2023] may empower generative agents with more
sults, categorized according to the modules evaluated. Over-    advanced cognitive abilities and enable more intricate norma-
all, the feedback from human evaluators was positive towards     tive decision-making.
our LLM-based operations. In particular, the Creation & Rep-     On the other hand, the capabilities of generative agents
resentation module stands out with a score above 6.4 (with 6    can, in turn, offer new opportunities to address some open
indicating “agree” and 7 “strongly agree”). According to the    problems in the normative MASs research. As mentioned
interview, this high score was largely attributed to the con-     earlier, while previous research often concentrated on iso-
sistency between the generated personal norms and the agent     lated aspects of the emergence of social norms, and although
description of norm entrepreneurs. The Compliance module    past reviews have introduced some taxonomies to integrate
follows closely with scores above 6. Evaluators praised this    these aspects (e.g.  with the concept of the norm life-cycle
module, as agents not only generated plans and actions in    [Savarimuthu et al., 2009]), a tangible implementation has
line with their personal norms, but also proactively encour-    been missing. This paper, which shows how diverse aspects
aged others to follow those norms, thereby reinforcing norm    can be integrated and actualized using generative agents,
compliance within society.  Subcomponents in the Spread-    demonstrates the potential of leveraging generative agents to
ing module and the Evaluation module, specifically Sender,    address those previously unresolved challenges.
Receiver, and Long-term Synthesis, also perform well (with       Last but not least, we would like to remark that although
scores approaching 6). However, the Observation and Imme-    the study of normative, generative MASs offers exciting
diate Evaluation subcomponents receive lower scores, around    prospects, it is crucial to remain aware of its potential neg-
5. For the Observation, evaluators noted that agents occasion-     ative aspects, especially since recent studies have shown that
ally tended to repeat thoughts rather than distill normative in-   LLMs may exhibit biases and generate toxic content [Abid
formation from the thoughts. For the Immediate Evaluation,     et al., 2021]. For example, just as in human societies [Ab-
evaluators observed that norms are often assigned high utili-    bink et al., 2017], negative social norms could potentially
ties (mostly 80-100) and the subtle differences in the impor-     arise within generative agent societies. While preventing such
tance of various norms were not accurately recognized. This    norms falls beyond the scope of this paper, it will be an inter-
points to the directions of future work for potential improve-     esting and important direction for future work.




                                                   7901

## Страница 8

                            Proceedings of the Thirty-Third International Joint Conference on Artiﬁcial Intelligence (IJCAI-24)
                                                            Special Track on Human-Centred AI

Acknowledgements                                       with machines. Journal of Behavioral and Experimental
                                                           Economics, 99:101897, 2022.Shuyue Hu thanks Chen Shen, Tony Savarimuthu, Stephen
Cranefield, and Balaraju Battu for the fruitful discussion.     [Cialdini et al., 1991] Robert B Cialdini, Carl A Kallgren,
This research was supported by the National Science Fund      and Raymond R Reno. A focus theory of normative con-
for Distinguished Young Scholars (No. 62025602), the Na-       duct: A theoretical refinement and reevaluation of the role
tional Natural Science Foundation of China (Nos. U22B2036       of norms in human behavior. In Advances in experimental
and 11931015), Fok Ying-Tong Education Foundation, China       social psychology, volume 24. 1991.
(No. 171105), Tencent Foundation and XPLORER PRIZE,    [Clark et al., 2021] E.  Clark,   T.  August,   S.  Serrano,
and Shanghai Artificial Intelligence Laboratory.                                                        N. Haduong, S. Gururangan, and N. A. Smith. All that’s’
Contribution Statement                                 human’is not gold: Evaluating human evaluation of gener-
                                                                  ated text. arXiv:2107.00061, 2021.
S.H. and S.R. conceptualized the idea. S.H., S.R., Z.C. and
Z.W. designed the architecture and prompts. S.R. and Z.C.    [Conte et al., 1998] R. Conte, C. Cristiano, and D. Frank.
performed the experiments.  R.S. contributed to the human      Autonomous norm acceptance. In ATAL Workshop, 1998.
evaluation. S.R. and S.H. wrote the article. All authors dis-    [Criado et al., 2011] Natalia Criado, Estefania Argente, and
cussed the results.                            V Botti. Open issues for normative multi-agent systems.
                                                          AI communications, 2011.References
                                                      [Dignum, 1999] Frank Dignum.  Autonomous agents with[Abbink et al., 2017] K. Abbink, Lata G., Toby Handfield,
                                                            norms. Artificial intelligence and law, 7:69–79, 1999.  and John Thrasher.  Peer punishment promotes enforce-
  ment of bad social norms. Nature communications, 2017.     [Franks et al., 2013] Henry Franks, Nathan  Griffiths, and
                                                                  Sarabjot Singh Anand. Learning influence in complex so-[Abid et al., 2021] Abubakar Abid, Maheen Farooqi, and
                                                                            cial networks. In AAMAS, 2013.
  James Zou. Persistent anti-muslim bias in large language
   models. In AIES, pages 298–306, 2021.                  [Guo et al., 2023] Siyi  Guo,  Negar  Mokhberian,  and
                                                                    Kristina Lerman. A data fusion framework for multi-[ ˚Agotnes et al., 2009] T. ˚Agotnes, W. Van Der Hoek, J. A
                                                       domain morality learning. In AAAI, 2023.
   Rodr´ıguez-Aguilar, C. Sierra, and M. Wooldridge. A tem-
   poral logic of normative systems. In Towards Mathemati-    [H¨ammerl et al., 2022] K.   H¨ammerl,    B.   Deiseroth,
   cal Philosophy: Papers from the Studia Logica conference         P. Schramowski, J. Libovick`y, A. Fraser, and K. Kersting.
   Trends in Logic IV, pages 69–106. Springer, 2009.          Do multilingual language models capture differing moral
                                                        norms? arXiv preprint arXiv:2203.09904, 2022.
[Ajmeri et al., 2020] Nirav Ajmeri, Hui Guo, Pradeep K Mu-
   rukannaiah, and Munindar P Singh.  Elessar: Ethics in    [Haque and Singh, 2024] A. Haque and M. P. Singh.  Ex-
  norm-aware agents. In AAMAS, pages 16–24, 2020.              tracting norms from contracts via chatgpt: Opportunities
                                                         and challenges. In COINE workshop, AAMAS, 2024.
[Argente et al., 2020] Estefania  Argente,  Elena Del  Val,
   Daniel P., and Vicente B.  Normative emotional agents:    [Hawkins et al., 2019] Robert XD Hawkins, Noah D G., and
   a viewpoint paper. IEEE Trans. Affective Comput., 2020.        Robert L G. The emergence of social norms and conven-
                                                                           tions. Trends in cognitive sciences, 2019.
[Awad et al., 2018] Edmond Awad, Sohan D., Richard Kim,
   Jonathan S., Joseph H., Azim S., Jean-Franc¸ois B., and    [Haynes et al., 2017] Chris Haynes, Michael Luck,  Peter
   Iyad R. The moral machine experiment. Nature, 2018.         McBurney, Samhar Mahmoud, Tom´aˇs V´ıtek, and Simon
                                                                 Miles.  Engineering the emergence of norms: a review.
[Beheshti and Sukthankar, 2014] Rahmatollah Beheshti and                                                       The Knowledge Engineering Review, 2017.
   Gita Sukthankar. A normative agent-based model for pre-
   dicting smoking cessation trends. In AAMAS, 2014.         [He et al., 2024] Shawn He, Surangika Ranathunga, Stephen
                                                                    Cranefield, and Bastin Tony Roy Savarimuthu. Norm vi-
[Beheshti et al., 2015] Rahmatollah Beheshti, Awrad M. Ali,                                                                     olation detection in multi-agent systems using large lan-
  and Gita S. Cognitive social learners: An architecture for                                                         guage models: A pilot study.  In COINE workshop, AA-
  modeling normative behavior. In AAAI, 2015.                                                  MAS, 2024.
[Boella et al., 2008] Guido Boella, Leendert Van Der Torre,                                                   [Hong et al., 2023] S. Hong, X. Zheng, J. Chen, Y. Cheng,
  and Harko Verhagen. Introduction to the special issue on                                                                                      J. Wang, C. Zhang, Z. Wang, S. K. S. Yau, Z. Lin, L. Zhou,
   normative multiagent systems. AAMAS, 17:1–10, 2008.                                                                            et al. Metagpt: Meta programming for multi-agent collab-
[Bratman, 1987] Michael Bratman.   Intention, plans, and        orative framework. arXiv:2308.00352, 2023.
   practical reason. 1987.                                                   [Hu and Leung, 2017] Shuyue Hu  and  Ho-fung  Leung.
[Centola et al., 2018] D. Centola,  J. Becker, D. Brackbill,      Achieving coordination in multi-agent systems by stable
  and A. Baronchelli.  Experimental evidence for tipping        local conventions under community networks.  In IJCAI,
   points in social convention. Science, 360(6393), 2018.          2017.
[Chugunova and Sele, 2022] Marina    Chugunova    and   [Hu et al., 2019] Shuyue Hu, Chin-wing Leung, Ho-fung
   Daniela Sele.  We and  it: An interdisciplinary review      Leung, and Jiamou Liu. To be big picture thinker or detail-
   of the experimental evidence on how humans interact       oriented?  utilizing perceived gist information to achieve




                                                   7902

## Страница 9

                            Proceedings of the Thirty-Third International Joint Conference on Artiﬁcial Intelligence (IJCAI-24)
                                                            Special Track on Human-Centred AI


   efficient convention emergence with bilateralism and mul-    [Santos et al., 2018] Fernando Santos, Jorge Pacheco, and
   tilateralism. In AAMAS, 2019.                                 Francisco Santos. Social norms of cooperation with costly
[Lewis, 1969] David Kellogg Lewis. Convention: A philo-       reputation building. In AAAI, volume 32, 2018.
   sophical study. 1969.                                     [Savarimuthu and Cranefield, 2011] Bastin   Tony   Roy
                                                           Savarimuthu and Stephen Cranefield.  Norm creation,[Li et al., 2024] Shimin Li, Tianxiang Sun, and Xipeng Qiu.
                                                               spreading and emergence: A survey of simulation models  Agent alignment in evolving social norms. arXiv preprint
                                                                  of norms in multi-agent systems.  Multiagent and Grid   arXiv:2401.04620, 2024.
                                                                Systems, 7(1):21–54, 2011.
[Lin et al., 2023] B. Yuchen Lin, Y. Fu, K. Yang, Prithviraj
                                                          [Savarimuthu et al., 2009] Bastin Tony Roy Savarimuthu,   A., Faeze B., S. Huang, Chandra B., Y. Choi, and X. Ren.
                                                Maryam Purvis, Martin Purvis, and Stephen Cranefield.   Swiftsage: A generative agent with fast and slow thinking
                                                                  Social norm emergence in virtual agent societies. In DALT   for complex interactive tasks. In NeurIPS, 2023.
                                                           2008: Revised Selected and Invited Papers, 2009.
[Liu et al., 2024] R. Liu, R. Yang, C. Jia, G. Zhang, D. Yang,
                                                          [Savarimuthu et al., 2024] Bastin Tony Roy Savarimuthu,  and S. Vosoughi. Training socially aligned language mod-
                                                             Surangika Ranathunga, and Stephen Cranefield. Harness-   els on simulated social interactions. In ICLR, 2024.
                                                                ing the power of llms for normative reasoning in mass. In
[Mahmoud et al., 2015] S. Mahmoud, G. Nathan,  J. Kep-     COINE workshop, AAMAS, 2024.
   pens, A. Taweel, T. JM Bench-Capon, and M. Luck. Es-
                                                       [Schramowski et al., 2022] Patrick Schramowski, Cigdem
   tablishing norms with metanorms in distributed computa-
                                                                               T., Nico A., Constantin A R., and Kristian K.  Large
   tional systems. Artificial Intelligence and Law, 2015.
                                                                     pre-trained language models contain human-like biases of
[Mahmoud et al., 2017] S. Mahmoud, N. Griffiths, J. Kep-      what is right and wrong to do. Nature Mach. Intell., 2022.
   pens, and M. Luck. Establishing norms with metanorms
                                                             [Schwartz, 1973] S. H. Schwartz. Normative explanations of
   over interaction topologies. AAMAS, 2017.
                                                                helping behavior: A critique, proposal, and empirical test.
[Modgil et al., 2009] S. Modgil, N.  Faci,  F. Meneguzzi,       Journal of Experimental Social Psychology, 1973.
  N. Oren, S. Miles, and M. Luck. A framework for moni-                                                         [Sen and Airiau, 2007] S. Sen and S. Airiau. Emergence of
   toring agent-based normative systems. In AAMAS, 2009.                                                       norms through social learning. In IJCAI, 2007.
[Morales et al., 2013] Javier   Morales,   Maite   Lopez-                                                        [Shanahan et al., 2023] M. Shanahan, K. M., and L. R. Role
   Sanchez, Juan A Rodriguez-Aguilar, M. J Wooldridge,                                                                play with large language models. Nature, 2023.
  and Wamberto W. Vasconcelos. Automated synthesis of
                                                                     [Sherif, 1936] Muzafer Sherif.  The psychology of social   normative systems. In AAMAS, 2013.
                                                            norms. Harper, 1936.
[Morales et al., 2015] Javier   Morales,   Maite   L´opez-
                                                                 [Shettleworth, 2009] Sara J Shettleworth. Cognition, evolu-   S´anchez,  Juan  Antonio  Rodr´ıguez-Aguilar,  Michael
                                                                            tion, and behavior. Oxford university press, 2009.   Wooldridge, and Wamberto Vasconcelos.  Synthesising
   liberal normative systems. In AAMAS, 2015.                  [Sunstein, 1996] Cass R Sunstein. Social norms and social
                                                                           roles. Colum. L. Rev., 96:903, 1996.[Morris-Martin et al., 2019] Andreasa Morris-Martin, Ma-
   rina De Vos, and Julian Padget. Norm emergence in mul-     [Villatoro et al., 2011] Daniel  Villatoro,  Giulia  A.,  Jordi
   tiagent systems: a viewpoint paper. AAMAS, 2019.              Sabater-Mir, and Rosaria Conte. Dynamic sanctioning for
                                                                  robust and cost-efficient norm compliance. In IJCAI, 2011.[Nakamaru and Levin, 2004] Mayuko Nakamaru and S. A
   Levin. Spread of two linked social norms on complex in-   [Wang et al., 2023] Z. Wang, S. Cai, G. Chen, A. Liu, X. Ma,
   teraction networks. Journal of theoretical biology, 2004.       and Y. Liang.  Describe, explain, plan and select:  inter-
                                                                      active planning with llms enables open-world multi-task[Nyla R. Branscombe, 2022] Robert   A.   Baron   Nyla
                                                                    agents. In NeurIPS, 2023.   R. Branscombe. Social Psychology 15th ed. 2022.
                                                            [Winikoff and Sidorenko, 2023] Michael   Winikoff   and[Paiva et al., 2018] A. Paiva, F. Santos, and F. Santos. En-
                                                              Galina Sidorenko. Evaluating a mechanism for explaining   gineering pro-sociality with autonomous agents. In AAAI,
                                                                bdi agent behaviour. In AAMAS, 2023.
   2018.
                                                            [Winikoff et al., 2021] Michael Winikoff, Galina S., Virginia[Park et al., 2023]  J. S. Park, J. C. O’Brien, C. J. Cai, M. R.
                                                                   D., and Frank D. Why bad coffee? explaining bdi agent
   Morris, P. Liang, and M. S. Bernstein. Generative agents:
                                                              behaviour with valuings. Artificial Intelligence, 2021.
   Interactive simulacra of human behavior. In UIST ’23. As-
   sociation for Computing Machinery, 2023.                 [Yao and Logan, 2016] Yuan Yao and Brian Logan. Action-
                                                                        level intention selection for bdi agents. 2016.
[Ramezani and Xu, 2023] A. Ramezani and Y. Xu. Knowl-
  edge of cultural moral norms in large language models.    [Young, 2015] H Peyton Young.  The evolution of social
  ACL, 2023.                                               norms. economics, 7(1):359–387, 2015.
[Santos et al., 2017] J´essica S Santos, Jean O Zahn, Ed-    [Zhang et al., 2024] H. Zhang, W. Du,  J. Shan, Q. Zhou,
   uardo A Silvestre, Viviane T Silva, and Wamberto W Vas-       Y. Du, B. T. Joshua, T. Shu, and C. Gan.  Building co-
   concelos. Detection and resolution of normative conflicts       operative embodied agents modularly with large language
   in multi-agent systems: a literature survey. AAMAS, 2017.       models. In ICLR, 2024.




                                                   7903
