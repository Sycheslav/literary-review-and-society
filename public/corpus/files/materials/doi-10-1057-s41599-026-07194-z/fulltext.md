---
id: doi-10-1057-s41599-026-07194-z-text
type: material
title: 'Crisis as catalyst: evaluating ethical consistency and cooperation in LLMs
  under high-stakes scenarios'
work_id: doi-10-1057-s41599-026-07194-z
source_url: https://www.nature.com/articles/s41599-026-07194-z.pdf
retrieved_at: '2026-10-27'
conversion: pdf_text_extraction
quality_note: Текст извлечён из PDF с сохранением номеров страниц. Порядок колонок,
  таблицы, формулы и подписи могут быть искажены; рисунки доступны по ссылке на PDF.
  Это текстовая конверсия, не визуально эквивалентный оригинал.
language: original
sha256_text: 6a08e0a2e2c1814f1c55e3927e5e336988eafae5c6cf2641078407cba86a99ff
---

> Источник: [https://www.nature.com/articles/s41599-026-07194-z.pdf](https://www.nature.com/articles/s41599-026-07194-z.pdf). Текст извлечён из PDF с сохранением номеров страниц. Порядок колонок, таблицы, формулы и подписи могут быть искажены; рисунки доступны по ссылке на PDF. Это текстовая конверсия, не визуально эквивалентный оригинал.

## Страница 1

     ARTICLE

           https://doi.org/10.1057/s41599-026-07194-z    OPEN
    Crisis as catalyst: evaluating ethical consistency
   and cooperation in LLMs under high-stakes
    scenarios

       Aoxiang YANG1,2, Mingyang ZUO3, Rui PENG2,4✉, Chen GAO5✉& Zongchao PENG1,2✉




       As large language models (LLMs) integrate into critical decision-making, their alignment with1234567890():,;      human values in high-stakes scenarios remains unclear. This study systematically investi-
         gates LLM behavioral consistency, focusing on cooperative intent, resource distribution, and
        moral reasoning, under simulated emergencies. We employed established psychological
         scales in two crisis scenarios: natural disaster resource allocation and crowd panic response.
     We use “catalyst” metaphorically: crisis framings serve as an observational stress test that
        ampliﬁes and reveals latent behavioral trade-offs in LLMs rather than improving the models.
        Using a standardized API framework, we evaluated three primary LLMs (gpt-4o, DeepSeek-
        V3, and DeepSeek-R1) across repeated  trials, analyzing both quantitative decisions and
          qualitative justiﬁcations. Results reveal that while LLMs reproduce broad human-like pre-
         ferences (e.g., cooperation over competition), they exhibit systematic variations in ethical
          trade-offs and “ﬂattened” decision distributions. Models differed signiﬁcantly in cooperative
         framing and showed attenuated  sensitivity to  social  variables  (e.g.,  future  interaction
         expectations) compared to humans. These ﬁndings advance computational crisis manage-
       ment and AI ethics, demonstrating context-dependent value misalignment risks. We propose
        a novel framework for evaluating behavioral consistency in silicon-based agents during crises,
          offering critical methodological and ethical guidance for deploying LLMs in socially complex,
         high-stakes environments.





                 1 School of Public Policy & Management, Tsinghua University, Beijing, China. 2 Center for Crisis Management Research, Tsinghua University, Beijing, China.
           3 Weiyang College, Tsinghua University, Beijing, China. 4 School of Government and Public Affairs, Communication University of China, Beijing, China.
           5 BNRist, Tsinghua University, Beijing, China.  ✉email: ruipeng@cuc.edu.cn; chgao96@tsinghua.edu.cn; pengzch@tsinghua.edu.cn


          HUMANITIES AND SOCIAL SCIENCES COMMUNICATIONS |         (2026) 13:1316   | https://doi.org/10.1057/s41599-026-07194-z                            1

## Страница 2

ARTICLE                   HUMANITIES AND SOCIAL SCIENCES COMMUNICATIONS | https://doi.org/10.1057/s41599-026-07194-z


Introduction
        s artiﬁcial intelligence systems grow increasingly embed-   similar prompts, rather than to any particular normative standard
      ded in domains such as education, health care, and dis-   of what the “correct” decision should be.
        aster  response,  large  language  models (LLMs)  haveA
emerged as central agents for decision-making and simulation
tasks. These models, trained on vast corpora of human-generated   Literature review
texts, often reﬂect embedded societal norms, social heuristics, and   Crisis collaboration and behavioral complexity. The importance
normative  assumptions—features  that  have  sparked  intense   of  collaboration  within  governance  structures  has  become
debate over their ethical alignment and representational fairness   increasingly prominent (Le Pennec and Raufﬂet 2018; Nahapiet
(Weidinger et  al., 2022; Bommasani et  al., 2021). While LLMs   2009). How to foster cooperation among individuals and orga-
have shown impressive proﬁciency in tasks involving reasoning,   nizations has thus emerged as a key issue in public administra-
summarization, and ethical judgment, their behavior in high-   tion.  Collaboration  refers  to  the  process  through  which
stakes, crisis scenarios remains insufﬁciently understood (Song   individuals or groups work together to achieve common goals,
et al., 2026).                                                   but much of the existing research on collaboration focuses on
   Crisis collaboration poses a unique test for both human actors   non-crisis contexts (Boin and Bynander, 2015).
and  artiﬁcial  agents.  Real-world  emergencies—ranging from     Collaboration in  crisis management, has gained attention in
natural disasters to crowd stampedes—require rapid, value-laden   recent years, especially in the context of disaster response and
decisions often made under incomplete information and high   global  emergencies such  as  pandemics,  climate  change, and
uncertainty. In such scenarios, individual cooperation, organiza-   geopolitical conﬂicts. Crisis collaboration is commonly deﬁned as
tional trust, and cultural expectations become critical variables.   the collective efforts of multiple autonomous actors to address
However, as classical research has shown, collaborative behavior   complex  challenges  that  transcend  organizational  boundaries,
under stress is far from universal. While collectivist cultures may   hierarchical authority structures, and sectoral divisions, with the
emphasize harmony and  shared  responsibility,  individualist   aim of enhancing preparedness, response, recovery, and learning
contexts often prioritize autonomy and selective altruism (Mar-   during crises (Bynander and Nohrstedt, 2020; Nohrstedt et  al.,
kus & Kitayama, 1991; Triandis, 1995; Kim & Markus, 1999;   2018). Central to this process is the coordination of actions among
Hofstede, 2001; Nisbett, 2003; House et al., 2004; Gelfand et al.,   various stakeholders under crisis conditions, which is essential for
2011). Existing work in collaborative public management (CPM)   improving overall response capacity (Boin et al., 2017).
and crisis management (CM) suggests that both organizational      Crisis collaboration  is increasingly recognized as a  critical
structures and  personal  values  jointly shape  crisis  response   component of effective crisis governance (Boin and ’t Hart, 2010;
behavior (Ansell and Gash, 2008; Kapucu and Garayev, 2011), yet   Kapucu, 2008). Drawing on insights from CPM, scholars have
these dynamics are rarely modeled in AI simulations.              identiﬁed  several key  factors  that shape the emergence and
  Meanwhile, recent studies have begun to probe the “cultural   effectiveness  of  interorganizational cooperation during  crises.
value alignment” of LLMs—namely, whether these models exhibit  Among  these,  three dimensions stand out  in  the  literature:
responses that resemble speciﬁc cultural contexts. Preliminary   willingness to cooperate, resource allocation mechanisms, and
ﬁndings suggest that LLMs trained in different linguistic and   moral and ethical considerations.
geographic environments may encode distinctive value biases       First,  willingness  to  cooperate  is  widely  regarded  as  a
(Gopinadh et al., 2026). Yet few studies have attempted to extend   foundational element of successful crisis collaboration. Empirical
this inquiry  to  crisis  scenarios, where moral reasoning and   studies suggest that trust, shared goals, and pre-existing relation-
behavioral intent are tested under duress. Moreover, existing   ships signiﬁcantly enhance coordination capacity, particularly in
experimental work often lacks a structured framework for eval-   high-pressure environments where formal command structures
uating whether such models reproduce human-like variability or  may be  insufﬁcient  (Ansell and Gash,  2008; Emerson and
reﬂect oversimpliﬁed, stereotype-driven responses (Shinn et al.,   Nabatchi,  2015).  Behavioral  research  further  indicates  that
2023).                                                                 individual-level  perceptions—such  as  role  expectations,  risk
  This study addresses these gaps by conducting a series of   awareness, and social identity—can either  facilitate or hinder
behavioral simulations using multiple LLMs, under controlled   cooperative behavior during emergencies (Turner and Killian,
crisis scenarios adapted from validated human scales. We pose   1987; Pramanik et al., 2015).
three key questions: (1) Do LLMs exhibit cooperation or com-     Second, resource allocation plays a pivotal role in determining
petition tendencies in crisis, and do such tendencies vary sig-   the practical feasibility of collaborative arrangements. Effective
niﬁcantly across different models or conditions? (2) How do    crisis response depends not only on the availability of material
factors like group familiarity and expected future collaboration   resources—such as personnel, funding, and infrastructure—but
shape their decisions? (3) Are the models’ moral choices con-   also on the timely and equitable distribution of information and
sistent with established human ethical principles or reasoning   decision-making  authority  across  participating  organizations
patterns? To answer these, we design two experimental  crisis   (Comfort et al., 2010). However, disparities in resource endow-
scenarios—a natural disaster resource-allocation task and a crowd   ments and competing  organizational mandates  often  create
panic evacuation vignette—each probing a critical dimension of   friction that undermines synergistic outcomes.
crisis decision-making. Through quantitative scoring and quali-      Third, moral and  ethical  considerations inﬂuence both  the
tative coding, we aim to uncover the extent to which LLMs   legitimacy  and  sustainability  of   crisis  collaboration.  Ethical
simulate human-like  behavioral  tendencies and  collaborative   dilemmas arise frequently during emergencies, particularly when
behavior, while also exposing the limitations of “silicon-based”   decisions involve trade-offs between public safety, civil liberties, and
agents in approximating complex social cognition. In this paper,   economic impacts (Coningham et  al., 2024). Scholars emphasize
we use “catalyst” metaphorically: crisis settings act as an obser-   that transparent communication, inclusive stakeholder engagement,
vational stress test that amplify and reveal latent behavioral trade-   and ethical leadership are essential for maintaining public trust and
offs, not as a claim of normative improvement in the models.   ensuring fair and accountable decision-making processes.
Throughout the paper, we use the term “ethical consistency” to     Despite growing scholarly attention to these factors, existing
refer to the stability of a model’s value-laden decisions across   theories remain largely rooted in Western institutional contexts,
comparable crisis scenarios and repeated runs, given structurally   with limited empirical validation in diverse governance settings


2                        HUMANITIES AND SOCIAL SCIENCES COMMUNICATIONS |         (2026) 13:1316   | https://doi.org/10.1057/s41599-026-07194-z

## Страница 3

HUMANITIES AND SOCIAL SCIENCES COMMUNICATIONS | https://doi.org/10.1057/s41599-026-07194-z           ARTICLE


(Nohrstedt et  al., 2018). Moreover, few studies systematically     This literature gap motivates the present study, which seeks to
integrate all three dimensions into a uniﬁed analytical framework.   extend the frontier of AI-based behavioral modeling by applying
This gap  highlights  the need  for more comprehensive and   validated  frameworks  from  crisis  collaboration  research  to
context-sensitive approaches to understanding how cooperation   artiﬁcial agents. Drawing on established behavioral benchmarks
emerges and sustains under crisis conditions.                      derived from empirical crisis response studies, we systematically
                                                                       assess the extent to which LLMs can emulate key dimensions of
                                                human decision-making in crisis scenarios, thereby contributing
Value alignment, behavioral ﬁdelity, and limitations of large   to both theory development and practical innovation in crisis
language models in crisis contexts. As LLMs become increasingly   governance.
integrated into policy analysis, decision support systems, and public     In summary, although extensive scholarship has investigated
service delivery, scholarly attention has turned to evaluating the  human crisis behavior, a critical gap persists in extending these
extent to which these models align with human values, ethical   insights to the evaluation of LLMs within high-stakes, simulated
norms, and behavioral patterns (Weidinger et al., 2022). A growing   environments. This study contributes to the emerging literature
body of research investigates whether LLMs reﬂect latent normative   by rigorously applying validated human behavioral models to
tendencies embedded within their training data, particularly in   artiﬁcial agents, thereby investigating the extent to which LLMs
relation to moral reasoning and decision-making under uncertainty   can meaningfully approximate human-like cooperation, competi-
(Bai et al., 2022; Kosinski, 2023). While some studies suggest that   tion, and adaptive coordination under extreme uncertainty.
certain LLMs can approximate average human judgments on
ethical dilemmas or policy preferences, these models often fail to
capture the  full heterogeneity of human perspectives—especially  Methodology
those held by minority or marginalized populations.               Research objectives and design strategy. The primary objective
   Parallel developments  in computational  behavioral  science   of this study is to investigate the behavioral variability of LLMs
have  explored  the  use  of LLMs  as  surrogates  for human   under simulated crisis scenarios. Speciﬁcally, we examine whether
participants in experimental settings. For instance, These models  LLMs exhibit consistent patterns of cooperation and competition
have been employed to simulate survey responses (Argyle et al.,  when subjected to different crisis-based prompts and contexts.
2023), replicate behavioral experiments (Aher et al., 2023), and   Drawing on  validated  experimental  paradigms from  public
model emergent dynamics in multi-agent environments (Park  management and  behavioral  sciences, we  adapt  established
et al., 2023). Aher, Arriaga, and Kalai (2023) demonstrated that   designs to assess LLM behavior in “silicon-based” simulations.
LLMs could  replicate  statistical patterns from human-subject  The study employs a between-model, within-task design: multiple
experiments involving cooperation and risk-taking tasks, suggest-  LLMs (gpt-4o, DeepSeek-V3, and DeepSeek-R1) are evaluated
ing  potential  for  scalable  behavioral  simulation.  However,   using identical tasks with controlled input cues, enabling sys-
subsequent work highlights signiﬁcant limitations. Wang, Mor-   tematic comparison across both models and contexts.
genstern, and Dickerson (2025) found that when LLMs are used
to  represent  diverse  social  groups,  they  tend  to  produce
homogenized  outputs  that  ﬂatten  identity and  misrepresent   Experimental framework. We developed a two-scenario experi-
marginalized  voices,  reinforcing dominant  stereotypes  rather   mental framework, each representing a critical aspect of crisis
than reﬂecting nuanced decision-making  processes.  Similarly,   collaboration:
Nguyen, Jamale, and Gonzalez (2024) observed that while LLMs     Scenario 1: Resource Allocation in Natural Disasters
can  predict  mean-level human  decisions,  they  struggle  to    LLMs are tasked with prioritizing emergency unit deployment
reproduce  context-sensitive  or  atypical  behaviors  critical  in   under time-constrained disaster scenarios. Key variables include
high-stakes settings. Such approaches offer promising avenues   team  familiarity  and  expectations  of  future  collaboration.
for accelerating social science research and reducing reliance on   Following Pramanik et al. (2015), the prompt places the model
costly and time-consuming human subject studies.                 in the role of the commander of “your organization, Team Blue”,
  However, signiﬁcant methodological challenges remain. LLMs   working together with “another organization, Team Red” in a
tend to produce compressed behavioral distributions, exhibiting   joint disaster response. The scenario describes six Blue units and
reduced variability compared to human respondents. Moreover,   six Red units (two security, two medical and two engineering
when identity-related cues are introduced into prompts, models   units per team) waiting at an airﬁeld that can receive only one
may inadvertently reproduce societal biases, reinforcing stereo-    aircraft per day and will be closed for several days due to an
types rather than reﬂecting nuanced decision-making processes   incoming sandstorm. The model is instructed to decide the order
(Scherrer et al., 2023). These limitations raise concerns about the   in which these 12 units should arrive (Day 1, then Day 8–18) and
validity and generalizability of AI-generated behavioral insights,   to explain the principle behind its ordering. In this setup, the Blue
especially in high-stakes environments. In crisis contexts—where   units are the model’s own designated units—belonging to  its
decisions are shaped by emotion, identity, power asymmetries,   “own” organization as introduced in the prompt—whereas the
and  situational  ambiguity—the  tendency  of LLMs  toward  Red units belong to the partner organization.
compressed behavioral distributions poses a signiﬁcant challenge   We implement a 2×2 within-scenario design on these two
to their validity as behavioral surrogates.                              factors, yielding four sub-scenarios labeled A–D that directly
  Importantly, despite the expanding scope of LLM applications,   follow Pramanik et al. (2015): A combines low familiarity with
relatively  little research has focused on their performance in   the Red team and low expectation of future cooperation; B
crisis-speciﬁc tasks involving coordination, trust formation, or   combines high familiarity with the Red team and low expectation
risk  perception—domains  where human  decision-making  is   of future cooperation; C combines low familiarity with the Red
frequently  characterized  by  non-linear  patterns,  emotional   team and high expectation of future cooperation; and D combines
inﬂuences, and acute  sensitivity  to environmental  cues. The   high familiarity with the Red team and high expectation of future
unique demands  of  crisis contexts—such  as  time  pressure,   cooperation. In the prompts, familiarity  is manipulated via a
information scarcity, and interorganizational complexity—pose   clause  of the form “you (do not) know about Red Team’s
additional challenges that current models may not adequately   equipment, training and ability to conduct this type of task”, and
address.                                                        expected future cooperation via a clause of the form “you (do not)


HUMANITIES AND SOCIAL SCIENCES COMMUNICATIONS |         (2026) 13:1316   | https://doi.org/10.1057/s41599-026-07194-z                            3

## Страница 4

ARTICLE                   HUMANITIES AND SOCIAL SCIENCES COMMUNICATIONS | https://doi.org/10.1057/s41599-026-07194-z


expect to be involved in any joint efforts with Red Team in the                                                             Table 1 Mean rBlue_norm values for different models across
future; thus this task is probably a one-off event”.                                                                 sub-scenarios A–D.
  Scenario  2:  Competitive  versus  Cooperative  Behavior  in
Crowded Emergencies
                                                                        Scenario     gpt-4o   DeepSeek-V3   DeepSeek-R1   Human
  The  questionnaire  scenario  description  for Experiment 2
follows verbatim Section 3.1 of Shiwakoti et al. (2017), in order   A             1.00     0.69             0.30          0.63
to preserve maximal comparability with the  original human    B            0.63      0.51          −0.08          0.38
                                                   C             0.13      0.28              0.14          0.49
experimental paradigm. Adapted from this prior work, LLMs are
                                                D             0.13      0.23             0.08         0.30
presented with a simulated crowd panic scenario and asked to
indicate their likelihood of engaging in competitive (e.g., pushing      Note. Sub-scenarios A–D follow the 2×2 design on familiarity with the Red team and expected
others) versus cooperative (e.g., helping others) behavior, rated on      futurefuture cooperationcooperation; (A:C: lowlow familiarityfamiliarity andand highlow futurefuture cooperation;cooperation; B:D: highhigh familiarityfamiliarity andand lowhigh
a ﬁve-point Likert scale. In line with the original Safety Science      future cooperation), adapted from Pramanik et al. (2015).
study, this scenario is implemented as a purely questionnaire-
based design: we collect numerical likelihood ratings only and do   conducted a series of preliminary tests to down-select from this
not elicit free-text justiﬁcations from the models, so that our setup    initial pool. The selection was guided by several key criteria: (1)
remains fully comparable to the human reference data.            Consistency and Stability: We observed that some models, such as
  Measurement strategy across scenarios                     Qwen3-30B-A3B,  produced   inconsistent  outcomes   across
 We deliberately retain different outcome metrics for the two   repeated  trials. (2) Task Comprehension: Follow-up inquiries
scenarios, because they target different constructs at different   revealed that certain models did not fully grasp the complex
levels of analysis. Scenario 1 is an organizational deployment task   requirements of the questionnaire. (3) Performance and Nuance:
adapted from Pramanik  et  al.  (2015), where cooperation  is   Within the same model family, newer or more advanced versions
expressed through how response units from different organiza-   provided more nuanced and rational results. For example, in
tions are sequenced and prioritized under time and capacity   scenario D of the ﬁrst experiment, gpt-4o-mini consistently made
constraints.  Scenario 2  is an  individual-level  intention  task   the decision to dispatch the red squad last. In contrast, gpt-4o not
adapted from Shiwakoti et  al. (2017), where cooperation and   only produced more  diverse outcomes  but  also  reasonably
competition are expressed through self-reported likelihoods of   dispatched the red squad on earlier dates. Consequently, based
pushing, helping, or following the crowd on a ﬁve-point Likert  on  these preliminary  evaluations,  gpt-4o, DeepSeek-V3, and
scale. Using the original, scenario-speciﬁc measures preserves the   DeepSeek-R1 were selected as the primary models for our formal
logic of these validated human paradigms. Rather than forcing    testing.  Each  selected  model  was  queried  under  multiple
both tasks onto a single numerical scale, we interpret them in   temperature settings (from 0.0 to 1.2, with a step size of 0.1) to
parallel,  highlighting when reduced in-group deployment  in   examine response variance and sensitivity to randomness. This
Scenario 1 aligns with stronger helping and weaker pushing   preliminary testing indicated that results remained stable across a
intentions in Scenario 2, while being explicit that the underlying   wide range of temperatures. Consequently, to allow for appro-
numbers are not directly interchangeable.                            priate creativity while maintaining stability, the temperature was
  Complete prompt templates and implementation scripts for all   set  to  0.7 and  0.8  for  the  ﬁrst and  second  experiments
four sub-scenarios (A–D) are provided in Appendix B (Prompt   respectively.  Please  refer  to  Appendix A  for  the  detailed
templates  for the two experimental  scenarios) and  are  also   hyperparameter conﬁgurations of each model.
available in our open repositories.

                                                       Data collection and annotation. For Scenario 1, we collected two
                                                                   types of data:Model interface and prompt control. All tasks are implemented
                                                                            (a)  quantitative  responses  in  the  form  of  the  12-unitthrough a standardized API interface to ensure consistent input-
                                                          deployment sequence, andoutput formatting across the LLMs evaluated. For each experi-
                                                                        (b) open-ended justiﬁcation texts elicited through the follow-mental scenario, prompts underwent a pre-testing phase. We
                                                     up prompt (“Explain your decision. Why did you choose thisinitially utilized both the original questionnaire content and a
                                                                     option?”).simpliﬁed version. Ultimately, the  slightly simpliﬁed versions
                                                              For  Scenario  2, we  collected only  structured  quantitativedemonstrated superior instruction-following capability compared
                                                                responses consisting of four comma-separated ﬁelds (“Q1 score,to the original questionnaire and were selected for the ﬁnal
                                             Q2 score, Gender, Age”), in line with the original Safety Scienceexperiments. While we  selectively incorporated some general
                                                                     study, which did not include qualitative comments.personality traits for the LLM agents, our primary focus was on
assessing  the  baseline  performance  of  these  models.  This
approach deliberately avoids extensive ﬁne-tuning of personality   Data analysis methods. Quantitative data are analyzed using
characteristics or the use of heavily biased prompts aimed at   clearly deﬁned metrics for each scenario. For Scenario 1 (orga-
closely mimicking human samples. The core  objective  is  to   nizational resource allocation), we focus on three types of mea-
observe and analyze the inherent differences and consistencies   sures: (a) the priority dispatch patterns of Blue versus Red units
between  the  behavior  of  current LLMs and  actual human   across the four sub-scenarios; (b)a summary score rBlue_norm
responses within  crisis scenarios. For Scenario  1, the system   (reported in Table 1 and Fig. 1) that captures how strongly a
prompt simply assigns the model an expert role to  facilitate   model prioritizes its own team’s units over the partner team’s
instruction-following, without imposing any additional persona   units in the deployment sequence; rBlue_norm is adapted from
traits.                                                    Pramanik  et  al. (2015) as a normalized in-group bias index
  The models initially considered for this research encompassed   bounded between -1 and +1, where values closer to +1 indicate
a range of capabilities and architectures, including: gpt-4o, gpt-   that Blue units are consistently deployed before Red units (strong
4o-mini, DeepSeek-V2.5, DeepSeek-V3, DeepSeek-R1, Llama-3.3-   in-group priority), values closer to -1 indicate the opposite pat-
70B-Instruct,  DeepSeek-R1-Distill-Llama-70B,  glm-4-9b-chat,   tern (strong out-group priority), and values near 0 reﬂect a more
Qwen3-30B-A3B, Qwen3-235B-A22B, and QwQ-32B. To identify   mixed or balanced deployment order; and (c) standard descrip-
the most  suitable  candidates  for our  in-depth  analysis, we    tive statistics for this score (means, medians, standard deviations,


4                        HUMANITIES AND SOCIAL SCIENCES COMMUNICATIONS |         (2026) 13:1316   | https://doi.org/10.1057/s41599-026-07194-z

## Страница 5

HUMANITIES AND SOCIAL SCIENCES COMMUNICATIONS | https://doi.org/10.1057/s41599-026-07194-z           ARTICLE





Fig. 1 Boxplot of rBlue_norm distributions for different models and humans across scenarios. a Results of GPT-4o. b Results of DeepSeek-V3. c Results
of DeepSeek-R1. d Human performance. Note that d is adapted from Pramanik et al. (2015) and reproduced for comparative purposes.


 Table 2 Comparison of Q1 and Q2 Mean distributions between different models and human data in both experiments.


 Mean                     Question               gpt-4o             DeepSeek-V3              DeepSeek-R1            Human

 Experiment 1             Q1                         1.57                     1.57                               1.17                           1.96
                     Q2                    4.80                 4.43                        4.83                         4.01
 Experiment 2             Q1                        1.20                    1.03                            1.27                          1.96
                     Q2                     4.93                 4.97                        4.83                         4.01


and inter-quartile ranges) used to characterize central tendency   intra-model consistency refers to the stability of a given model’ s
and variability across models and conditions. We additionally   metrics across repeated runs. Qualitative responses are coded
report the results of non-parametric tests (Friedman tests with   thematically to identify recurrent reasoning patterns and decision
follow-up comparisons) to assess each model’ s situational sen-   logics across scenarios and model types.
sitivity to changes in familiarity and expected future cooperation.
  For Scenario 2 (crowd panic behavior), we analyze the item-level
Likert responses  to  the two  focal  questions: Q1 (pushing or   Ethical  considerations and model  limitations.  This  study
squeezing others to exit more quickly, competitive/antisocial) and   involved no human participants and therefore did not require
Q2 (helping others who have difﬁculty evacuating, cooperative/  IRB approval or informed consent. The  “established human
prosocial), each rated from 1 (“very unlikely”) to 5 (“very likely”).   patterns” referenced throughout this study are drawn exclusively
For each model and experimental condition (control vs. attribute-   from previously published experimental studies whose anon-
primed), we report the mean and standard deviation of Q1 and Q2,   ymized aggregate data are publicly available. Although this study
the full response distributions, and the coefﬁcients and p-values   does not involve direct human participants, we remain attentive
from ordinal logistic regression models that estimate the effects of   to ethical considerations regarding bias, misrepresentation, and
gender and age on these behaviors (Tables 2–4 and Figs. 2, 3).       overgeneralization in AI simulations—particularly the risk that
  Across both scenarios, inter-model consistency refers to the  LLMs may reproduce dominant stereotypes or erase marginalized
degree to which different models converge on similar values for   perspectives under the guise of behavioral realism (Wang, Mor-
these metrics under the same experimental condition, whereas   genstern, and Dickerson, 2025). No normative judgments about


HUMANITIES AND SOCIAL SCIENCES COMMUNICATIONS |         (2026) 13:1316   | https://doi.org/10.1057/s41599-026-07194-z                            5

## Страница 6

ARTICLE                   HUMANITIES AND SOCIAL SCIENCES COMMUNICATIONS | https://doi.org/10.1057/s41599-026-07194-z



 Table 3 Comparison of Q1 and Q2 standard deviation (SD) distributions between different models and human data in both
 experiments.


 SD                        Question               gpt-4o             DeepSeek-V3              DeepSeek-R1            Human

 Experiment 1             Q1                     0.57                 0.50                       0.38                              1.18
                     Q2                      0.41                 0.50                       0.38                       0.93
 Experiment 2             Q1                       0.41                   0.18                       0.45                              1.18
                     Q2                     0.25                   0.18                        0.38                       0.93




 Table 4 Comparison of results of ordinal logit models of gender on likely behaviors between different models and human data in
 Experiment 1.


                               Question              gpt-4o             DeepSeek-V3             DeepSeek-R1           Human

 Coefﬁcient (male)            Q1                     0.712              −0.358                       1.66                     0.228
 p-value                     Q1                     0.341                  0.681                     0.197                    0.039





Fig. 2 Trends in competitive (Q1) and cooperative (Q2) behavioral scores across distinct age groups for different models.





Fig. 3 Correlation of gender with Q1 and Q2 scores for different models.


the “correctness” of model outputs are made; rather, our analysis  LLMs during crisis decision-making. Each subsection focuses on
focuses  solely on behavioral resemblance to these  literature-   one scenario and primarily reports quantitative results  (e.g.,
derived benchmarks. This study seeks to complement, rather than   Likert-scale responses and dispatch patterns). For the ﬁrst sce-
replace, human-centered research on crisis behavior.               nario,  the  analysis  is  additionally informed by  qualitative
                                                                      insights from the models’ reasoning explanations, because the
                                                                      original  organizational  crisis  experiment  that we  replicate
Experimental results and analysis                           (Pramanik et  al., 2015) also collected open-ended rationales
This section presents the ﬁndings from the two experimental   from human participants. By contrast, the second scenario fol-
scenarios,  highlighting the behavioral patterns exhibited by   lows the reference Safety Science study (Shiwakoti et al., 2017),


6                        HUMANITIES AND SOCIAL SCIENCES COMMUNICATIONS |         (2026) 13:1316   | https://doi.org/10.1057/s41599-026-07194-z

## Страница 7

HUMANITIES AND SOCIAL SCIENCES COMMUNICATIONS | https://doi.org/10.1057/s41599-026-07194-z           ARTICLE





Fig. 4 Overview of the Scenario 1 experimental pipeline. The diagram illustrates the 2×2 design combining familiarity (low vs. high) and expected future
cooperation (low vs. high), yielding sub-scenarios A–D. The LLM is instructed to act as the Blue Team commander and determine the arrival order of 12
response units under operational constraints. Outputs include the full unit-arrival sequence and a brief rationale. This schematic clariﬁes how the
manipulated conditions are operationalised in the prompts and how the resulting allocation sequence is translated into the organizational in-group bias
measure used in Scenario 1.





Fig. 5 Overview of the Scenario 2 experimental pipeline. The diagram summarizes demographic sampling (gender and age), persona priming, the metro-
station emergency vignette, and two Likert-scale items measuring competitive (Q1: pushing) and cooperative (Q2: helping) intentions. Each model call
returns structured outputs (Q1, Q2, gender, age) for analysis. By retaining the questionnaire-only format of the original human paradigm, this scenario
supports direct distributional comparison with the published human benchmark.


which used a purely questionnaire-based design without quali-   high familiarity and low future cooperation; C: low familiarity
tative comments; accordingly, our analysis of Scenario 2  is   and high future cooperation; D: high familiarity & high future
restricted to numerical  patterns. Because the two scenarios   cooperation). When faced with uncertainty, the models generally
capture different constructs at different levels (organizational   prioritized deploying units from their own designated team—that
deployment choices in Scenario 1  vs. individual evacuation     is,  the Blue  units  that  the prompt  explicitly  introduces  as
intentions in Scenario 2), we do not treat their numerical scales   belonging to “your organization, Team Blue”, as opposed to the
as directly comparable; instead, we read them side-by-side in   partner organization’s Red units. This tendency was most pro-
terms of direction and pattern.                              nounced in the gpt-4o model, which demonstrated a strong and
                                                                     consistent preference for Blue units in Scenario A, characterized
Response consistency and in-group  bias in organizational   by low familiarity with the Red team and low expectation of
resource allocation (Scenario 1). Analysis of the resource allo-   future cooperation: its in-group bias index rBlue_norm reached
cation task revealed that, consistent with human behavior, LLM   the maximum value of +1.00, meaning that all six Blue units were
decisions exhibited a discernible in-group bias across  all four   always scheduled before any Red units. In contrast, the DeepSeek
scenarios. As illustrated in Fig. 1, the magnitude of this in-group   series  of models (DeepSeek-V3 and DeepSeek-R1) displayed
bias is comparable to, and in some cases slightly exceeds, that  more diversiﬁed decision-making patterns. (See Table 1 for mean
observed in human participants in the reference study. These four   rBlue_norm  values and  Fig. 1  for  boxplot  distributions  of
sub-scenarios (A-D) correspond to all combinations of low/high   rBlue_norm across models and scenarios).
familiarity with the Red team and low/high expectation of future     Analysis  of response  variability  across  scenarios  indicated
cooperation (A: low familiarity and low future cooperation; B:   variations  in how  different LLMs responded  to changes  in


HUMANITIES AND SOCIAL SCIENCES COMMUNICATIONS |         (2026) 13:1316   | https://doi.org/10.1057/s41599-026-07194-z                            7

## Страница 8

ARTICLE                   HUMANITIES AND SOCIAL SCIENCES COMMUNICATIONS | https://doi.org/10.1057/s41599-026-07194-z


experimental  conditions. The  gpt-4o model  was  the  most     Across all tested LLMs, the expressed willingness to engage in
sensitive to contextual shifts (Friedman test, p = 0.0001, rejecting   prosocial  behavior (Q2) was  signiﬁcantly  stronger than  the
the null hypothesis at α = 0.05, indicating signiﬁcant differences   willingness to engage in antisocial behavior (Q1).
across scenarios), exhibiting clear changes in its decision-making     Consistent  with  the  resource  allocation  experiment, LLM
approach between scenarios. DeepSeek-V3  also demonstrated   responses showed a more concentrated distribution compared
sensitivity  to  scenario  changes  (Friedman  test,  p = 0.0015).   to human  data,  further  evidencing  the  “ﬂattening  effect”
Conversely, DeepSeek-R1 showed lower variability across con-   characteristic of these models.
texts (Friedman test, p = 0.2483), maintaining a relatively stable     Notably,  despite using  the  original  scenario wording,  the
decision pattern across different contexts.                        response distributions generated by the LLMs diverge substan-
  Examining the inﬂuence of the two factors driving situational    tially from those reported in the human study, suggesting that the
changes—familiarity  and  future  cooperation  expectancy—   observed patterns cannot be attributed to simple retrieval or
revealed distinct model responses. For instance, gpt-4o, the most   memorization of the source article.
sensitive model, showed a signiﬁcant reduction in its in-group    The models exhibited a high degree  of morality  in  their
bias when future cooperation expectancy increased (Scenario   responses. This is likely attributable to the safety alignments and
A →C, mean rBlue_norm decreased from 1.0 to 0.1333; Scenario   ethical principles embedded during their training. Combined with
B →D, mean rBlue_norm decreased from 0.6333 to 0.1333),   the concentrated distribution, this resulted in LLMs performing
irrespective of familiarity  levels. This suggests the model can  more like a single, ethically-minded, rational human agent rather
internalize and weigh  considerations  of  future  collaborative   than a diverse group of individuals with varying characteristics.
potential. However, when  familiarity  increased  while  future   This divergence from real-world human data is a primary reason
cooperation expectancy was already high (Scenario C →D), the   for observed discrepancies.
in-group bias (mean rBlue_norm) did not show a signiﬁcant     Comparing the two experimental conditions (Attribute-Primed
change. Only in Scenario A did low familiarity, coupled with low    vs.  Control)  indicated  that when LLMs  responded  to  the
future cooperation expectancy, lead to a strong in-group bias,   questionnaire directly (Control Condition), they were more inclined
creating a distinction from Scenario B (high  familiarity, low   to provide ideal answers aligning with widespread moral principles
future cooperation expectancy).                                                       (i.e., Q1 typically scored as 1, indicating very low willingness for
   Qualitative  text analysis of the models’ decision rationales   antisocial behavior, and Q2 as 5, indicating very high willingness for
provided further insights. Notably, almost all models stated that   prosocial behavior). These responses also exhibited smaller standard
they considered the factor of future cooperation expectancy. In   deviations, indicating greater uniformity.
contrast,  considerations  of  familiarity  were  less  frequently     Further  analysis  explored  correlations between  age/gender
mentioned. For gpt-4o, DeepSeek-V3, and DeepSeek-R1, the   attributes and the models’ Q1/Q2 scores in the Attribute-Primed
proportion of responses mentioning familiarity as a factor was   Condition.
approximately 0.4, 0.7, and 0.9, respectively. This aligns with the     Regarding age, we analyzed the mean scores across six distinct
quantitative ﬁndings and may suggest that LLMs are less sensitive   age groups to observe behavioral trends. This grouping strategy
to the critical factor of familiarity in crisis scenarios, potentially   was chosen to align with the age categories used in the original
overlooking differences arising from  familiarity with external   paper while ensuring a relatively balanced sample size across
teams due to other considerations.                                groups. For the competitive question (Q1), both DeepSeek-V3
  These observations suggest the possibility of an “implicit trade-   and DeepSeek-R1 demonstrated a consistent tendency towards
off” in the models’ decision-making processes, where certain   increased ethicality (lower Q1 scores) as the agent age increased.
factors—particularly team  familiarity, despite  its experimental   In contrast, gpt-4o exhibited a non-linear pattern: while generally
salience—are  considered  or  neglected  without  being  fully   low in competitiveness, it showed a distinct spike in the 36-55 age
articulated in their explanations. Furthermore, an aggregate effect   group, indicating higher aggressiveness in middle-aged simula-
size analysis indicated signiﬁcant differences in decision prefer-   tions before dropping again in the senior group.
ences among the models, ranging from highly conservative (e.g.,     For the cooperative question (Q2), DeepSeek-V3 maintained a
gpt-4o in Scenario A) to relatively balanced (e.g., DeepSeek-R1).   clear positive trend, with prosocial behavior steadily increasing
These ﬁndings provide an important empirical basis for under-   with  age.  DeepSeek-R1  and  gpt-4o  displayed  a  peak  in
standing the value  internalization and  trade-off mechanisms   cooperativeness within the young adult group (26–35). Consistent
within LLMs during crisis decision-making.                      with its Q1 results, gpt-4o showed a signiﬁcant dip in cooperative
                                                                    scores  in  the 36–55  age  group, whereas  the  other models
                                                          remained relatively stable or improved with age.
Cooperation under pressure in crowd panic (Scenario 2). In the     In terms of gender correlation, the gpt-4o and DeepSeek-R1
second scenario, set in a metro station during an emergency, LLMs’   models consistently showed responses indicating female agents as
likelihood to engage in two opposing behaviors was assessed using a  more ethical (lower Q1, higher Q2) than male agents across both
Likert scale: (Q1) pushing or squeezing other passengers to exit   types of questions (See Correlation of Gender in Fig. 3 and Table
quickly (competitive/antisocial), or (Q2) helping others who might    4). Conversely, the DeepSeek-V3 model exhibited the opposite
have difﬁculty evacuating (cooperative/prosocial).                     pattern, with male agents displaying higher  ethicality  scores.
  Two experimental designs were employed:                    These ﬁndings reﬂect potential inherent gender or age biases
  Attribute-primed condition: Adopting the demographic frame-   within the models, which become apparent in simulated crisis
work of the referenced research, we identiﬁed gender and age as   scenarios. A concise overview of the main behavioral patterns,
key  experimental  factors. A  quota  sampling  system  was   consistency features, and moral orientations across all models and
constructed based on proportions from referenced research data   both scenarios is provided in Table 5.
to create LLM agent proﬁles for the survey.
  Control condition: The original  crisis scenario was directly
presented to the LLMs without speciﬁc demographic priming to   Discussion
collect baseline responses.                                      This study set out to address two interrelated questions: whether
  Analysis of the experimental results (See Mean distributions in  LLMs  exhibit  cooperative  or  competitive  tendencies  under
Table 2, SD distributions in Table 3) revealed several key patterns:   simulated crisis conditions, and whether they can meaningfully


8                        HUMANITIES AND SOCIAL SCIENCES COMMUNICATIONS |         (2026) 13:1316   | https://doi.org/10.1057/s41599-026-07194-z

## Страница 9

HUMANITIES AND SOCIAL SCIENCES COMMUNICATIONS | https://doi.org/10.1057/s41599-026-07194-z           ARTICLE


                                                                         replicate the adaptive decision-making behaviors observed in
                                                                                                                                                                                 crisis           A;                                         humans under stress. Our ﬁndings yield a nuanced picture. On
                                     to          two                       human) in                                     risk-                  framing                                                         one hand, LLMs consistently favored cooperation, employed risk-                                                               extreme                         with                   the                                                                                            strategies,                                                                          and                                                                                     adopted                                                                                                       cautious                                                                                                           stances—patterns                                                           in                  minimizing               (vs.     C/D                                                                                                     baseline and    but         closer                                    less                                                               broadly consistent                                                                               with                                                                                         empirical                                                                                              accounts                                                                                                                  of human                                                                                                                 behavior in             in                                       allocation                                                    data
                           but                                                    collective crises (Drury et al., 2009; Pramanik et al., 2015). On the                                                                                                                                                                                                competitive                                                               human                                                                 other                                                                   hand,                                                                                       their responses                                                                                            lacked                                                                                                    the behavioral                                                                                                                                    diversity,                                                                                                                   con-                                                                                                                                                      overall,                                                                                                                                  overall,                         to  prosocial                                                                                                                       spread               reference                                                                       textual                                                                                granularity,                                                                        and dynamic                                                                                                           adaptability                                                                                                                       that                                                                                                                           characterize                                          orientation         self-prioritizing  balanced                                   impartial
                                                                                                                                                   human                    real-world human judgment under pressure.
                                         A central observation across all experimental scenarios was                   Moral    Clearly more                Cooperative    self-prioritization More  relative  Strongly averse  Prosocial  occasional  Prosocial human     the
                                                           to                 what we term the “ﬂattening effect”: a marked reduction in
                                                                                                                                                                                                                                            relative                  responsemodal  outputs,variability,anda stronglimitedconvergencesensitivity towardto  subtlecentralshiftsor
                                                                                                                                                   model                    in situational cues. Importantly,  this  effect manifested con-                                                                          sistently across both organizational and  individual decision
                                                                                                                      each                 contexts—though expressed through different behavioral mod-
                                              more   on                   of                         alities.  In  Scenario 1  (disaster  resource  allocation), LLMs
                                                                  defaulted to  centralized, rule-based rationing protocols that
                                                        minimized                                                                            variance across                                                                                                      institutional                                                                                                                           roles,                                                                                                               reﬂecting                                                                                                  across                variability                                    orientation                                                                                  variance                                       across                 sensitivity;                                                                                        pattern                                                down regularization                                                                                           of ethical                                                                                                 output.                                                                                                    In Scenario                                                                                                        2 (crowd                                       stable                                           scenario                                                                                                         a top-                                                                                                                                                   moral                                                               evacuation dilemmas), cooperation emerged not from dynamic                                                                                                                                         sensitivity;             agreement   (“ﬂattening”)           to
                                                                        social negotiation but from  repetitive invocation of generic                           pattern                                                                                                                                                                 overall                                             SDs                                                                   prosocial scripts (e.g., “help others,” “avoid panic”), irrespective                                                                                                   situational  intra-model                                                                                                                                                                                   consistency                intra-model          and                                                                  relatively                                                                                                                              deployment    low                5)                     of individual risk exposure or group composition. Despite these                                                           sensitivity                                                                                                                              situational                inter-model                   4,1,                     surface-level  differences,  both  scenarios  reveal  a common
                                                              underlying pattern: under crisis framing, LLMs suppress con-                                          Consistency  High  changes; runs  Moderate  moderate Lower uniform High means;  Moderate  conditions  Moderate                Figs.                                                                      textual nuance in favor of statistically dominant, low-variance                                                                                        and
                                                                  responses.  This  cross-level  convergence  suggests  that  the                                                                                        1–4
                                                             observed ﬂattening is not an artifact of a single experimental
                                                                                                                                                                                 Tables                    design, but a systemic feature of how LLMs simulate moral
                                                           in                   reasoning under pressure.
                                                                This tendency appears rooted in multiple interacting factors.
                       in                                                                                                                                                                                                                                            reported                        First, the statistical nature of LLM architectures inherently pri-       ↑                         very
                                              bias                                             vileges high-probability, “safe” responses that maximize average                                     reduced                                                                                                                                  slightly      more                       metrics                                                                     likelihood across diverse contexts (Brown et al., 2020). Second,                                    more                   push;           A;
                                                                      corpora often                                                                                        overrepresent                                                                                       dominant                                                                                                                           cultural                                                                                                                     or insti-           in                            to help                                             bias;           in-group                                                                       tutional narratives,                                                                         which                                                                   may suppress                                                                                                    minority                                                                                                                       perspectives                                                                                                                          or                                                                        cooperation                     bias                              to  pattern;           slightly                                       quantitative                     training                                                                                                      conditions                                               alternative reasoning pathways (Weidinger et  al., 2022). Most
                                                                                        the
                                                                fundamentally,                                                           LLMs                                                                                       operate                                                                                           without                                                                                                  emotional                                                                                                                                   salience, per-                               tendency                                                           on                                       future                                                                        in-group                                                                                                                                                        willingness                                                                  sonal                                                                                 stakes,                                                                    embodied                                                                                             experience,                                                                                                   or                                                                                                   accountability—dimen-                                                             across  near-zero                                                                                                                              conditions                                        on                                           in-group
           /                                                                            that                                                                          deeply                                                                             shape                                                                  human                                                                                                                         crisis                                                                                                             cognition.                                                                                                              Consequently,                                                                                                                                                                                 (based                    sions                                          low  willingness  prosocial  variability  pattern; Q1/Q2                          when
                                                                while  these models  can  reproduce  surface-level  cooperative                                      Behavioral   Strong bias           Moderate ﬂexible Weak several Very high  Similar higher  Prosocial spread                          rhetoric, they struggle to emulate the situated, pluralistic, and      models.                                                                                                                                                                                                                                                                                                       assessments                 sometimes contradictory nature of authentic moral and strategic
                                                                        deliberation.
  and                                                                                                                                                                                                                                                                                                       consistency                  demonstratesDespite  thesethat constraints,established ourtools methodologicalfrom human  behavioralapproach
                                                           research—such as Likert-scale assessments and scenario-based
                                                                        role prompts—can be productively adapted to evaluate artiﬁcial       scenarios                                                                                                                                                                                                                                                                                                       qualitative                     agents. By linking decision variance, role framing, and contextual

                                                                 tured  yet  ﬂexible framework  for  assessing LLM  consistency,     across         Model   gpt-4o                             DeepSeek-V3                DeepSeek-R1         gpt-4o                DeepSeek-V3                DeepSeek-R1                                    tendencies,                  manipulation to observable textual outputs, we propose a struc-                                                                         adaptability, and behavioral tendencies in crisis-like settings. This
                                                                          offers a replicable pathway for future comparative studies, par-
                                                                            ticularly those aiming to benchmark  artiﬁcial against human      ﬁndings                                                                                                                                                                                                                                                                            behavioral
                                                                responses under controlled conditions.
                                                                     Nevertheless, several limitations warrant caution. All eval-   main                                                                                                                                                                                                                      dominant                                                             uated models remain bound by their underlying architectures
  of                                                                                the
                                                      and pretraining data distributions, which constrain the space of                                                                                                 (Q1/Q2,          (Q1/Q2,          (Q1/Q2,                           possible behaviors regardless of prompting strategy. Role iden-
                                                                                    tities were externally imposed through instructions rather than                                                      allocation                          allocation              allocation     1)   1)   1)                summarizes      Summary                                                           panic       panic       panic                            internally  grounded  in  learned  representations,  potentially
 5                                                                                                                                      table                    limiting the depth of perspective-taking. Most  critically, the
                                                                                                                      This                  absence  of  genuine  affective  engagement  or  consequence                                           Resource                     Resource           Resource       Crowd       Crowd       Crowd                                                            awareness means that LLM behavior remains a simulation—one    Table               Scenario 1: (A–D)   1: (A–D) 1: (A–D) 2:  Experiment 2:  Experiment 2:  Experiment        Note.  scenarios.
                                                                     that  approximates  but  does  not  instantiate human  crisis


HUMANITIES AND SOCIAL SCIENCES COMMUNICATIONS |         (2026) 13:1316   | https://doi.org/10.1057/s41599-026-07194-z                            9

## Страница 10

ARTICLE                   HUMANITIES AND SOCIAL SCIENCES COMMUNICATIONS | https://doi.org/10.1057/s41599-026-07194-z


reasoning. For this reason, we strongly caution against treating     Future research and policy development must jointly address
LLMs as normative arbiters of ethical correctness (e.g., “what   the behavioral instability of LLMs in high-stakes contexts. The
ought to be done”). Moreover, the reduced variability of LLM   variability observed across experimental conditions—what we
responses under crisis conditions—what we term “ﬂattening”—   term  ethical  plasticity—raises urgent concerns  for real-world
should not be construed as evidence of ethical maturity or   implementation.  In  healthcare  settings,  inconsistent  triage
reliability. To  the  contrary,  this  behavioral  regularity may   recommendations  triggered by  slight  differences  in prompt
indicate insensitivity to morally salient distinctions, such as   wording could undermine clinical trust and exacerbate inequities.
vulnerability, historical inequity, or procedural fairness. In high-   In  legal or diplomatic contexts, ﬂuctuating interpretations of
stakes settings where contextual nuance and equitable judgment   fairness or  justice might compromise procedural  integrity or
are essential—for example, the allocation of scarce medical   erode stakeholder conﬁdence in AI-assisted mediation.
resources among heterogeneous patient populations—a rigidly    To address these risks, we advocate for governance measures
consistent  response  risks  reinforcing  systemic  biases  or   that move beyond technical tuning. These include norm-aware
neglecting critical situational factors. The normative value of   prompting frameworks that anchor model outputs to established
ﬂattening is therefore context-dependent: while it may improve   ethical guidelines, such as those issued by the World Health
predictability in routine coordination tasks,  it can undermine   Organization;  real-time  auditing systems  capable  of ﬂagging
ethical adequacy  in  pluralistic or  justice-sensitive domains.   internal  contradictions  or  value  drift during  inference; and
Consistency alone should not be regarded as a virtue; rather, it   mandatory transparency requirements that disclose uncertainty
must be evaluated against the ethical standards appropriate to  when moral  judgments  fall below  acceptable  thresholds  of
each deployment context.                                        coherence. Human oversight must remain central, with LLMs
  This leads directly to a key conceptual contribution of our   serving as exploratory aids rather than autonomous arbiters.
work: the identiﬁcation of “ethical plasticity” as a systematic     At the technical level, future work should expand model and
feature of LLM behavior. We use this term to describe the pro-   scenario diversity, incorporate region-speciﬁc ﬁne-tuning, and
nounced sensitivity of moral judgments to minor variations in   explore hybrid architectures that integrate cognitive modeling or
prompt wording, role assignment, or narrative context. Even   structured ethical reasoning modules. Comparative studies under
when overall cooperative, models exhibited striking instability   identical experimental conditions—between humans and LLMs,
across repeated trials, semantically equivalent formulations, and   and across cultural or institutional contexts—are especially nee-
structurally analogous dilemmas. In life-and-death scenarios, for   ded. Ultimately, as generative AI becomes embedded in societal
instance, responses frequently defaulted to rigid utilitarian pre-   decision-making,  its evaluation must evolve beyond linguistic
scriptions with little regard for equity or procedural fairness. In   ﬂuency toward behavioral realism, contextual  sensitivity, and
contrast,  during  social  cooperation  tasks,  recommendations   respect for human pluralism.
shifted  dramatically  depending on  whether  the model was
prompted as a public  ofﬁcial or an ordinary  citizen. Three  Data availability
recurring patterns emerged: moral reversals (contradictory advice  The datasets generated and analyzed during the current study are
under  near-identical  conditions),  unresolved  value  conﬂicts   openly available in the Figshare repository at: https://doi.org/10.
(simultaneous endorsement of incompatible ethical principles),   6084/m9.ﬁgshare.29722715. The code supporting this project is
and alignment drift (shifting normative stances driven solely by   openly  available  on  GitHub   at:  https://github.com/keeno-
framing). Together, these suggest that LLMs do not draw upon   morning-haze/Crisis_as_Catalyst.
stable internal moral commitments but instead reconstruct ethical
positions dynamically from statistical regularities in their training
data. In high-stakes domains—such as clinical triage, legal med-   Received: 29 June 2025; Accepted: 27 March 2026;
iation, or emergency governance—this plasticity poses signiﬁcant
risks to consistency, trustworthiness, and procedural justice.


Conclusion                                                References
As LLMs are increasingly integrated into domains such as crisis   Aher GV, Arriaga RI, Kalai AT (2023) Using large language models to simulate
communication, decision support, and risk analysis, there is a         multiple humans and replicate human subject studies. In: Proceedings of the
                                                                                   40th International Conference on Machine Learning Vol. 202, pp. 337–371.
pressing need to evaluate their behavioral ﬁdelity. This study                                                         PMLR
contributes to this effort by examining how multiple state-of-the-    Ansell C, Gash A (2008) Collaborative governance in theory and practice. J Public
art LLMs behave under simulated crisis conditions—speciﬁcally      Adm Res Theory 18:543–571. https://doi.org/10.1093/jopart/mum032
focusing on cooperation tendencies and adaptive reasoning.         Argyle LP, Busby EC, Fulda N, Gubler JR, Rytting C, Wingate D (2023) Out of
 We ﬁnd  that while LLMs  consistently  exhibit cooperative        One, Many: Using Language Models to Simulate Human Samples. Polit Anal
                                                                                       31(3):337–351. https://doi.org/10.1017/pan.2023.2
behaviors and  risk-minimizing  strategies,  their  outputs  are                                                                                  Bai Y, Kadavath S, Kundu S, Askell A, Kernion J, Henighan T, … Krueger D (2022)
characterized by behavioral ﬂattening, limited contextual adap-         Constitutional AI: harmlessness from AI feedback. Preprint at https://arxiv.
tation, and reduced decision diversity. Although some models         org/abs/2212.08073
display trace elements of situational sensitivity, these responses   Boin A, Bynander F (2015) Explaining success and failure in crisis coordination: A
often lack consistency and depth—and crucially, their apparent          theoretical framework. Geogr Ann 97(1):123–135. https://doi.org/10.1111/
                                                                                    geoa.12072
stability should not be conﬂated with ethical robustness. Meth-                                                                          Boin A, ’t Hart P (2010) Organising for effective emergency management: Lessons
odologically, this research adapts human experimental paradigms        from research. Aust J Public Adm 69(4):357–371. https://doi.org/10.1111/j.
—such as Likert scale assessments and scenario-driven prompts—         1467-8500.2010.00694.x
to evaluate LLM behavior in crisis contexts. Conceptually, it offers   Boin A, ‘t Hart P, Stern E, Sundelius B (2017) The politics of crisis management:
a framework for investigating behavioral tendencies in artiﬁcial         Public leadership under pressure. Cambridge University Press, Cambridge
                                                                  Bommasani R, Hudson DA, Adeli E, Altman R, Arora S, von Arx S, Bernstein MS,
agents under crisis pressure. Practically, it advises caution against                                                                        Bohg  J, Bosselut A, Brunskill E, Brynjolfsson E, Buchsbaum D, Card D,
over-reliance on LLM  outputs  for  critical  decision-making,         Castellon R, Chatterji N, Chen A, Creel K, Davis JQ, Demszky D, ... Liang P
instead recommending their use as exploratory tools to comple-         (2021) On the opportunities and risks of foundation models. arXiv preprint
ment human-centered analyses.                                                arXiv:2108.07258


10                       HUMANITIES AND SOCIAL SCIENCES COMMUNICATIONS |         (2026) 13:1316   | https://doi.org/10.1057/s41599-026-07194-z

## Страница 11

HUMANITIES AND SOCIAL SCIENCES COMMUNICATIONS | https://doi.org/10.1057/s41599-026-07194-z           ARTICLE



Brown TB, Mann B, Ryder N, Subbiah M, Kaplan JD, Dhariwal P, Amodei D (2020)    Shiwakoti N, Sarvi M, Rose G, Burd M (2017) Likely behaviours of passengers
     Language models are few-shot learners. Adv Neural Inf Process Syst 33:1877–1901        under emergency evacuation in train station. Saf Sci 91:40–48. https://doi.org/
Bynander  F,  Nohrstedt D  (2020)  Collaborative  crisis  management:  Inter-          10.1016/j.ssci.2016.07.017
      organizational approaches to extreme events. Routledge, New York           Song P, Han P, Goodman N (2026) Large language model reasoning failures. arXiv
Comfort LK, Boin A, Demchak CC (2010) Designing resilience: preparing for         preprint arXiv:2602.06176
     extreme events. University of Pittsburgh Press                                 Triandis HC (1995) Individualism and collectivism. Westview Press
Coningham R, Lewer N, Acharya KP, Weise K, Kunwar RB, Joshi A, Parajuli   Turner RH, Killian LM (1987) Collective behavior, 3rd edn. Prentice-Hall
     Khanal S (2024) Enabling equitable and ethical research partnerships in crisis   Wang A, Morgenstern J, Dickerson JP (2025) Large language models that replace
      situations: lessons learned from post-disaster heritage protection interven-       human participants can harmfully misportray and ﬂatten identity groups. Nat
      tions following Nepal’s 2015 earthquake. Res Ethics 20:835–846                Mach Intell 7:400–411. https://doi.org/10.1038/s42256-025-00986-z
Drury J, Cocking C, Reicher S (2009) Everyone for themselves? A comparative study   Weidinger L, Mellor  J, Gabriel I (2022) Ethical and social risks of harm from
      of crowd solidarity among emergency survivors. Br J Soc Psychol 48:487–506         language models. Preprint at https://arxiv.org/abs/2112.04359
Emerson K, Nabatchi T (2015) Collaborative governance regimes. Georgetown
     University Press
Gelfand MJ, Raver JL, Nishii L, Leslie LM, Lun J, Lim BC, Aycan Z (2011) Dif-   Author contributions
      ferences between  tight and  loose  cultures:  a  33-nation  study.  Science   Yang-Ao Xiang and Zuo-Ming Yang: conducted data analysis and drafted the original
     332:1100–1104. https://doi.org/10.1126/science.1197754                         manuscript; Rui Peng, Chen Gao, and Zong-Chao Peng: reviewed, edited, and con-
Gopinadh MPVS, Lakshmi Sindhu K, Sekhar Pandu Ranga Raju S, Swarna Yes-    tributed to project oversight and administrative tasks. All authors read and approved the
      aswini. (2026) Regional Bias in Large Language Models. arXiv preprint arXiv:    ﬁnal manuscript.
     2601.16349
Hofstede G (2001) Culture’s consequences: comparing values, behaviors, institu-  Competing interests
      tions and organizations across nations, 2nd edn. Sage
                                                                       The authors declare no competing interests.
House RJ, Hanges PJ, Javidan M, Dorfman PW, Gupta V (eds) (2004) Culture,
      leadership, and organizations: The GLOBE study of 62 societies. Sage
Kapucu N  (2008)  Collaborative emergency management:  Better community   Ethical approval
      organising, better public preparedness and response. Disasters 32(2):239–262.    Ethical approval was not required for this study as it did not involve human participants,
      https://doi.org/10.1111/j.1467-7717.2008.01037.x                              animal subjects, or sensitive personal data. The research consisted solely of computa-
Kapucu N, Garayev V (2011) Collaborative decision-making in emergency and    tional simulations using publicly available large language models.
      disaster management. Int J Public Adm 34:366–375. https://doi.org/10.1080/
     01900692.2011.561477                                      Informed consent
Kim HS, Markus HR (1999) Deviance or uniqueness, harmony or conformity? A
                                                                         Not applicable, as no human participants were recruited or involved in this study.
      cultural analysis. J Personal Soc Psychol 77:785–800
Kosinski M (2023) Theory of mind may have spontaneously emerged in large
     language models [Preprint]                                      Additional information
Le Pennec M, Raufﬂet E (2018) Value creation in inter-organizational collabora-    Supplementary information The online version contains supplementary material
      tion: an empirical study. J Bus Ethics 148:817–34                                   available at https://doi.org/10.1057/s41599-026-07194-z.
Markus HR, Kitayama S (1991) Culture and the self: implications for cognition,
     emotion, and motivation. Psychol Rev 98:224–253                           Correspondence and requests for materials should be addressed to Rui PENG,
Nahapiet J (2009) The role of social capital in inter-organizational relationships. In:   Chen GAO or Zongchao PENG.
    The Oxford handbook of inter-organizational  relations. Oxford, Oxford
     University Press, p 580–606                                                   Reprints and permission information is available at http://www.nature.com/reprints
Nguyen TN, Jamale K, Gonzalez C (2024) Predicting and understanding human
      action decisions: Insights from large language models and cognitive instance-    Publisher’s note Springer Nature remains neutral with regard to jurisdictional claims in
     based learning. In: Proceedings of the AAAI Conference on human com-    published maps and institutional afﬁliations.
     putation and crowdsourcing, Vol. 12, p 126–136
Nisbett RE (2003) The geography of thought: how Asians and Westerners think
      differently and why. Free Press                                                 Open Access This  article  is  licensed under a Creative Commons
Nohrstedt D, Bynander F, Parker C, ’t Hart P (2018) Managing crises collaboratively:                  Attribution-NonCommercial-NoDerivatives 4.0 International License,
     Prospects and problems—A  systematic  literature  review. Perspect Public    which permits any non-commercial use, sharing, distribution and reproduction in any
    Manage Governance 1(4):257–271. https://doi.org/10.1093/ppmgov/gvx018     medium or format, as long as you give appropriate credit to the original author(s) and
Park JS, O’Brien JC, Cai CJ, Morris MR, Liang P, Bernstein MS (2023) Generative                                                                                          the source, provide a link to the Creative Commons licence, and indicate if you modiﬁed
      agents: Interactive simulacra of human behavior. In: Proceedings of the 36th
                                                                                          the licensed material. You do not have permission under this licence to share adapted
     Annual ACM Symposium on User Interface Software and Technology.
                                                                                           material derived from this article or parts of it. The images or other third party material
     https://doi.org/10.1145/3586183.3606763
                                                                                             in this article are included in the article’s Creative Commons licence, unless indicated
Pramanik A, Jin J, Wu W (2015) Organizational adaptation in multi-stakeholder
                                                                                        otherwise in a credit line to the material. If material is not included in the article’s
       crisis  response: an  experimental  study.  J  Contingencies  Crisis Manag
                                                                                          Creative Commons  licence and your intended use  is not permitted by  statutory
     23:234–245
                                                                                            regulation or exceeds the permitted use, you will need to obtain permission directly from
Scherrer N, Shi C, Feder A, Blei DM (2023) Evaluating the moral beliefs encoded in
                                                                                          the copyright holder. To view a copy of this licence, visit http://creativecommons.org/
     LLMs. arXiv preprint arXiv:2307.14324
Shinn N, Cassano  F, Berman E, Gopinath A, Narasimhan K, Yao S (2023)    licenses/by-nc-nd/4.0/.
     Reﬂexion: Language agents with verbal reinforcement learning. arXiv pre-
      print arXiv:2303.11366                                    © The Author(s) 2026





HUMANITIES AND SOCIAL SCIENCES COMMUNICATIONS |         (2026) 13:1316   | https://doi.org/10.1057/s41599-026-07194-z                           11
