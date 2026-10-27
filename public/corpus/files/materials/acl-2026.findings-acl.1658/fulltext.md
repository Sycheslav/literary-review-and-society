---
id: acl-2026.findings-acl.1658-text
type: material
title: 'Emergent Relational Order in LLM Agent Societies: From Collective Affect to
  Authority Stratification'
work_id: acl-2026.findings-acl.1658
source_url: https://aclanthology.org/2026.findings-acl.1658.pdf
retrieved_at: '2026-10-27'
conversion: pdf_text_extraction
quality_note: Текст извлечён из PDF с сохранением номеров страниц. Порядок колонок,
  таблицы, формулы и подписи могут быть искажены; рисунки доступны по ссылке на PDF.
  Это текстовая конверсия, не визуально эквивалентный оригинал.
language: original
sha256_text: 6812f1b248a3313ba1086206ed9f908b456330d68a8ef41a48c26bb3ce2355de
---

> Источник: [https://aclanthology.org/2026.findings-acl.1658.pdf](https://aclanthology.org/2026.findings-acl.1658.pdf). Текст извлечён из PDF с сохранением номеров страниц. Порядок колонок, таблицы, формулы и подписи могут быть искажены; рисунки доступны по ссылке на PDF. Это текстовая конверсия, не визуально эквивалентный оригинал.

## Страница 1

  Emergent Relational Order in LLM Agent Societies: From Collective
                    Affect to Authority Stratification
                     Zhiyuan Ji1, Xinyu Chen2†, Ziqi Dai3†,
                   Shiyun Tang1*, Chunyu Wei1, Yueguo Chen1

      1Renmin University of China, 2Beihang University, 3Minzu University of China
          {zhiyuanji, jamietang, weichunyu, chenyueguo}@ruc.edu.cn
                           zy2402531@buaa.edu.cn
                           daiziqi1296@muc.edu.cn

                Abstract                                        (a) Isolated Primitive Tribes    (b) Differential OrderStrangerof Rural Society
                                              weak relationship
                                                                                               uaintances    Fei Xiaotong’s Differential Order Pattern char-                       Acq
                                                                                                                                                                                                                                                           il                                                                                                                                    y                                                                            m                                                                                                                                                    t                                                                                              a                                                                                                                                                 ie                                                                        s                                                                F    acterizes               rural                   society                          as egocentric                                  and                                                  rela-
                                                                                                                                                 I
                                                                                                s                                                                                      n                                                                                              d                                                                                                                              e                                                                                                                                          e    tionally            graded,                   with cooperation                                      attenuating                                                      reciprocal                                                                                          o                                                                                                                     s(“Guanxi”)                                                                                           b                                                                                                  n                                                                                                                                                                                                         li                                                                                                                                                                    io                                                                                                                         g                                                                                                                                                                   at    over social                 distance.                      Although                                    often                                            treated
    as culturally specific, its mechanistic basis re-                                 fairness
    mains under-operationalized, and prior LLM-
    based simulations have mainly addressed short-
    term coordination rather than long-horizon so-        Figure 1: Schematic comparison of social organization:
     cial structure.  We propose CAREB-MAS,        (a) discrete groups without relational gradation; (b) dif-
    a multi-agent framework grounded in Affect         ferential order, organized as ego-centered concentric
    Control Theory, Social Identity Theory, and         layers of relational proximity.
    Durkheimian collective affect. Agents reason
    through an emotion–ethics–belief chain and       chanical to organic solidarity driven by changing
    maintain dynamically evolving egocentric iden-       divisions of labor (Durkheim, 2019).
     tities, while the macro environment specifies
                                           Beyond the Western canon, Fei Xiaotong’s Dif-    only individual production, preference-based
    allocation, and minimal interaction protocols.        ferential Order Pattern (Fei et al., 1992) describes
    Across long-horizon simulations, agents spon-        rural society as ego-centered relational circles in
    taneously reproduce five core Differential Or-      which moral obligation,  trust, and cooperation
    der phenomena:  stable labor specialization,       attenuate with social distance (Figure 1).  Al-
    guanxi-based economic ethics, relational de-                                              though often treated as specific to Chinese soci-
    cay of cooperation, emergent relational author-                                                            ety, its constituent mechanisms—kinship organi-     ity, and clan-based center–periphery stratifi-
                                                        zation, reciprocity beyond price exchange, and au-    cation. These patterns shift with production
    structure from kin-centered integration toward        thority without centralized power—are well docu-
    greater functional interdependence. Extensive      mented across comparative anthropology (Fortes
    experiment results support interpreting Differ-      and Evans-Pritchard, 1940; Sahlins, 1972; Polanyi,
     ential Order as a structure-sensitive emergent       1944). This raises the possibility that Differential
   outcome of general social mechanisms, with       Order reflects structure-sensitive outcomes of gen-
   LLM-based multi-agent simulation providing a                                                         eral social mechanisms rather than solely Chinese
     interdisciplinary framework for studying social
                                                           traditions.    structure and change.
                                                       Testing this possibility remains difficult. Ethnog-
1  Introduction                              raphy offers contextual richness but limited ex-
                                                  perimental control; quantitative sociology often
The transformation of traditional societies into                                                    captures long-horizon change only indirectly; and
modern ones constitutes one of the most conse-                                                  conventional agent-based models rely on hand-
quential problems in social science (Sorokin, 2017;                                             coded rules that poorly represent the co-evolution
Lazer et al., 2021; Bhatt, 2022). Classical sociol-                                                   of emotion, ethics, authority, and social struc-
ogy has long addressed this question: Durkheim,                                                      ture (Eguíluz et al., 2005; Zimmermann et al.,
for instance, emphasized the transition from me-                                                   2004). Recent LLM-agent studies have reproduced
                                                      social contracts (Dai et al., 2024), cooperation   †Equal Contribution
   *Corresponding author.                         norms (Vallinder and Hughes, 2024), and institu-
                                       33139
                Findings of the Association for Computational Linguistics: ACL 2026, pages 33139–33175
                              July 2-7, 2026 ©2026 Association for Computational Linguistics

## Страница 2

tional emergence (Piao et al., 2025), but mostly in    design.  In Durkheim, authority and division of
short-horizon settings. Whether LLM-based simu-   labor arise through
lations can generate long-horizon social structure
                                                       Collective Affect →Ethics →Belief →Socialand probe the generality of non-Western sociologi-                                                                         Structure
cal theory remains underexplored.
                                                  process (Tada, 2020; Durkheim, 1915). This gen-  In this paper, we propose CAREB-MAS, a
                                                       erative view aligns with organizational theoriesmulti-agent simulation framework testing whether
                                                        that structure as emerging from routinized inter-Differential Order can emerge from cross-culturally
                                                     action (Haveman and Wetts, 2019).documented micro-mechanisms without encoding
culture-specific institutional rules. Agents reason      Fei Xiaotong’s Differential Order Pattern de-
through an emotion–ethics–belief chain grounded    scribes rural society as egocentric and relation-
in Affect Control Theory (Heise, 2007), Social    ally graded.  Its core preconditions—kinship or-
Identity Theory (Tajfel and Turner, 1979), and    ganization, generalized reciprocity beyond price
Durkheimian collective affect, while the environ-   exchange, and acephalous authority—are widely
ment specifies only kinship, reciprocity-based allo-   documented across comparative studies of pre-
cation, and the absence of centralized authority.     market society (Fortes and Evans-Pritchard, 1940;
  Across long-horizon simulations, agents spon-   Lévi-Strauss, 1949; Sahlins, 1972; Mauss, 1925;
taneously reproduce five core Differential Order    Polanyi, 1944). Relational sociology and histor-
phenomena: stable labor specialization, guanxi-    ical anthropology further show that such struc-
based economic ethics, cooperation attenuation    tures persist and reconfigure under moderniza-
with relational distance, emergent relational author-    tion (Zhang, 2015; Hanting, 2024; Zhang, 2018;
ity, and clan-based center–periphery stratification.   Longyuan and Iftikhar, 2023), making rural soci-
These patterns vary systematically with produc-   ety a useful setting for examining general social
tion structure: symmetric endowments yield kin-   mechanisms (Zhou and Xiao, 2024).
centered integration closer to mechanical solidar-
                                                    2.2  Agent-Based Social Simulationity, whereas complementary endowments produce
more functionally interdependent patterns closer to    Traditional agent-based modeling has served as
organic solidarity.  Ablations on two LLMs fur-   a computational testbed for social phenomena,
ther show that these outcomes are architecture-   from Sugarscape (Epstein and Axtell, 1996) and
dependent rather than generic LLM artifacts. To-    cultural dissemination (Axelrod, 1997) to segre-
gether, the results recast Differential Order as a    gation (Schelling, 1971) and cooperation emer-
structure-sensitive emergent outcome of general   gence (Eguíluz et al., 2005; Zimmermann et al.,
social mechanisms and position LLM-based multi-   2004). However, rule-based architectures struggle
agent simulation as a generative testbed for social    to capture the co-evolution of emotion, ethics, and
structure and change.                                  social structure (Gao et al., 2024).
  We summarize our contributions as follows:(1)    LLM agents extend this line of work by enabling
we provide a computational approach to study    richer social reasoning.  Park et al. (Park et al.,
Fei Xiaotong’s Differential Order Pattern with-   2023) demonstrated believable social behavior in
out encoding culture-specific rules; (2) we design    generative agents, and subsequent studies opera-
CAREB-MAS, a multi-agent framework integrat-   tionalized specific theories or institutions, includ-
ing emotion, ethical judgment, and relational cogni-   ing social exchange (Wang et al., 2025), Hobbesian
tion to harness and test the theoretical mechanisms    contract formation (Dai et al., 2024), institutional
and (3) we validate core Differential Order Pattern   emergence (Piao et al., 2025), cooperation evolu-
phenomena and conduct controlled experiments    tion (Vallinder and Hughes, 2024), and norm emer-
to reveal the sensitivity and dependency of these   gence (Ren et al., 2024).
phenomena on cognitive architecture.                 Despite these advances, existing simulations fo-
2 RELATED WORK                        cus mainly on short-term coordination or dyadic
                                                exchange, leaving the long-horizon co-emergence
2.1  Social Transformation and Rural Society                                                     of collective affect, authority, and division of labor
     Formation                                                underexplored—especially for non-Western socio-
Classical sociology treats social structure as an    logical theories whose structural predictions have
emergent outcome of interaction rather than a fixed    rarely been tested computationally.
                                       33140

## Страница 3

3  Theoretical Foundations                  under symmetric and complementary production
                                                   regimes.
3.1  Differential Order and Relationally          Based on these mechanisms, we formulate five
    Embedded Division of Labor                 generative propositions. Each describes a macro-
Fei Xiaotong’s Differential Order Pattern concep-    level pattern that, if observed, would be consistent
tualizes rural society as concentric ripples of obli-   with Differential Order—but that arises from gen-
gation whose intensity decays with relational dis-    eral social cognition rather than culture-specific
tance. Social relations radiate outward from the    encoding:
ego: close kin occupy the inner circles, followed by                                             P1: Stable Division of Labor.  Repeated interac-
acquaintances and strangers in the outer layers. Re-                                                      tion under relational embeddedness can generate
lational proximity systematically shapes emotion,                                                      stable and specialized divisions of labor without
ethics, and cooperation. Although often interpreted                                                       centralized coordination or predefined institutional
through the Chinese rural context, its key struc-                                                           roles.
tural preconditions—kinship organization (Fortes
and Evans-Pritchard, 1940; Lévi-Strauss, 1949),   P2: Guanxi as Economic Ethics.  Ethical obli-
reciprocity-based allocation without price mecha-   gations embedded in close relations sustain coop-
nisms (Polanyi, 1944; Sahlins, 1972; Mauss, 1925),    eration and role persistence despite short-term effi-
and limited centralized authority (Fortes and Evans-   ciency losses.
Pritchard, 1940)—are widely documented across                                            P3: Differential Order and Relational Decay.
comparative anthropology. We therefore examine                                                Cooperative intensity and efficiency decay with
whether Differential Order-like patterns can emerge                                                        relational distance, concentrating high-efficiency
from these cross-culturally documented conditions.                                                     collaboration within families or clans.
  Within this framework, division of labor stabi-
lizes through repeated interaction under relational   P4:    Emergent  Authority   Stratification.
and ethical constraints rather than formal institu-   Durable authority can arise through long-term
tions. We term this relationally embedded division    interaction  as  stable  compliance  and  social
of labor and test whether it can emerge endoge-   recognition, without formal authorization.
nously without explicit cultural rules.                                            P5: Clan-based Center–Periphery Structure.
                                          Economic returns and authority stratify by rela-3.2  Guanxi as Economic Ethics
                                                         tional proximity, producing a family-centered core
In Differential Order, guanxi is not merely a prefer-   and peripheral disadvantage.
ence for familiar others but an economic-ethical
principle that defines obligation, responsibility,   3.4  Structural Contrast: Mechanical vs.
and acceptable cost in exchange. This parallels        Organic Solidarity
Sahlins’s generalized reciprocity (Sahlins, 1972):   To examine how production structure conditions
close ties sustain open-ended obligation without im-    Differential Order, we contrast symmetric and com-
mediate return. In low-contractual environments,   plementary endowments. Symmetric capacities
such relational ethics can stabilize cooperation and    favor integration through shared identity and rela-
legitimate asymmetric outcomes despite short-term    tional ethics (mechanical solidarity), whereas com-
inefficiency.                                    plementary capacities favor integration through
                                                    functional differentiation and mutual dependence
3.3  Five Generative Propositions                (organic solidarity).  This contrast provides the
                                          main analytical lens for interpreting variationTo distinguish built-in assumptions from dependent
                                                    across conditions.outcomes, we conceptually separate pre-defined
structural conditions from emergent interactional                                       4  Methodology: The CAREB-MAS
patterns. The former correspond to cross-culturally                                      Frameworkdocumented features of pre-market social organiza-
tion, while the latter constitute the primary objects  We propose CAREB-MAS (Collective Affection–
of explanation in our simulations (see Appendix J).   Reasoning–Emergence Based Multi-Agent Simu-
As shown later, identical structural conditions can    lation), a framework for examining whether struc-
yield qualitatively different emergent structures    tured social order can emerge without explicit cul-
                                       33141

## Страница 4

                                                                                                                                                                     Kinship Ties
        Individual EES-A-BDI Cycle                               Four-Phase Social Dynamics Simulation           Random Encounters

           Empathy Core                      Step Ⅰ: Community Formation                  Step Ⅳ: Production & Distribution
                                                                  Initial Relationship Network      Community Structure       Individual Production    Primitive Communism      Final Affinity
                                                                                                                                                           (Need-based                                                                                                                                                                                                 distribution)                                                                                                       Community                                                                                                                                    with                                                                    Family One                                                                                       Family Two       Evaluation?                                                                                                                                                  1.017                                                                                                                                                    2                                                                                                                                                Affinity                          Power?                                                                                                                                                                  U=0.61                                                                                                                                                                                    U=0.61      Potency?                                                                                            3                               Status?                                                                                                                                                  1.018       Activity?                                                                                                                                                       5                                                                                                                                                                             2.5                                                                                                                                                                                                                                                                                                         Mobility Social                                                                                               unaffiliated
                                                                                         3    5
                                                                                                                                                  0.494                              U=0.60
             Ethical Resonator
                                                                                                                              update
          [   – Action]                                Step Ⅱ: Public Negotiation & Step Ⅲ: Labor Division                 03 [Reason]:   02 suggested labor plan for me.
                  Kinship                                                                                                                                                     (1)Emotional Support:
                  Norm Orientation                                                                                                                           She did speak to me publicly and offered suggestions.
                                                                                       Initialization                                           But her tone was distant, treating me as outsider.
        Ethical Judgement                                                          Agent 01                                   Agent 02                        (2)Economic Rationality:
                                                                                         Prefer:{A: 0.10, B: 0.08, C: 0.82}                  Prefer:{A: 0.75, B: 0.20, C: 0.05}           Her suggestion was ‘balanced’ but didn’t consider my
                                                                                                             Skill: A(1.0), B(1.0), C(2.0)                            Skill: A(2.0), B(1.0), C(1.0)                  actual needs. I ended up with lowest total production
           Social Identity Matrix                                          Agent 03                                                                    due(3)Kinshipto lack Relations:of guidance
                                                                                         Prefer:{A: 0.05, B: 0.35, C: 0.60}                                                No family ties between us. But her family loyalty
                                                                                                             Skill: A(1.0), B(1.0), C(1.0)             A(textile)            B(build)          C(farm)        clearly supersedes community fairness
                               Enemy                                                        Core Partner                 Ⅱ.1  Speech                  Ⅱ.2  Proposal           Ⅲ
                   1  2  3  4  5
                                                                                    [Speech]: “I need Resource C. Let‘s                     [Self]: {A: 0.10, B: 0.10, C: 0.80}                          [Decide]: Consider   02 suggested {C:80%},
                                                                                      collaborate for community efficiency.”               [Suggestion]      02: {A: 0.85, B: 0.10, C: 0.05}                   Plan {A:10%, B:10%, C:80%}
                                                                                  [Reason]: Build trust while preparing                [Reason]: Family division plan.                          [Reason]: Match our family plan perfectly
                                                                                   family coordination.

                                                                                                                                         {A:                                                                                                                                                                        0.80, B: 0.15,                                                                                                                                            C:                                                                                                                                                                             0.05}            A-BDI Layer                                     [Speech]:                                                                                            “I                                                                                      need                                                                                           Resource A.                                                                            How                                                                                                                                                                                                   [Decide]:                                                                                                                                                                                      Consider                                                                                                                                                                                          01                                                                                                                                                                                                                 suggested                                                                                                                                                                                                  {A:85%},                                                                                                         can we             [Self]:[Suggestion]                                                                                                                                                               01:                                                                                                                                                       {A:                                                                                                                                                                                         0.10,                                                                                                                                                         B:                                                                                                                                                                                                 0.10,                                                                                                                                                         C:                                                                                                                                                                                             0.80}
                                                                                balance                                                                                    needs?”                                                                                                                                                                                      Plan                                                                                                                                                                            {A:80%,                                                                                                                                                                               B:15%,                                                                                                                                                                       C:5%}                                                                                                                                          [Reason]:                                                                                                                                             Supporting                                                                                                                                                                     brother.
                                                                                  [Reason]:                                                                                             Signal                                                                                                 cooperation                                                                                                                       to                                                                                           mask                                                                                                                                                                                          [Reason]:                                                                                                                                                                                   Support                                                                                                                                                                                                              family                                                                                                                                                                                                                              strategy                                                                                                                                                [Suggestion]                                                                                                                                                               03:                                                                                                                                                       {A:                                                                                                                                                                                         0.20,                                                                                                                                                         B:                                                                                                                                                                                                 0.30,                                                                                                                                                         C:                                                                                                                                                                                             0.50}
                                                                                   family arrangement.                                 [Reason]: Generic suggestion.

                                                                                                                                                                                                   [Decide]: Consider                                                                                                                                                                                         02                                                                                                                                                                                                       balanced                                                                                                                                                                                                                 approach,                                                                            [SILENT]         Belief      Desire    Intention                       [Speech]:                                                                                                                                                                                      Plan {A:20%,                                                                                                                                                                              B:30%,                                                                                                                                                                           C:50%}                                                                                  [Reason]:                                                                                  Observe first, avoid early                      [Self]: {A: 0.20, B: 0.30, C: 0.50}
                                                                      commitment                                    [No suggestions to others]                              [Reason]: Their coordination is obvious,      Self & Other   Goal      Plan                                                                                                                                                           trust only myself

Figure 2: Overview of CAREB-MAS. Left: agent-level cognitive architecture, from EC (Affect Control Theory)
to ER (ethical judgment), SIM (Social Identity Theory), and A-BDI (Durkheimian affective constraint on action).
Right: four-phase interaction loop: community formation, deliberation, division of labor, and production with
psychological update.


tural templates. Stable social structure arises from    ure 2).  Social perception produces affective re-
repeated local interaction among boundedly ratio-   sponses, which are filtered through moral evalua-
nal agents, without hard-coded cultural rules or    tion, update relational cognition, and finally con-
predefined hierarchy.                                   strain belief–desire–intention reasoning. Full im-
                                                 plementation details and prompts are provided in
4.1  Sociological Logic and Emergence Design   Appendix D.
The framework operationalizes a causal path-    • Empathy Core (EC) ←Affect Control The-way grounded in three theories: affective percep-     ory (Heise, 2007). Decodes observable behavior
tion from Affect Control Theory (Heise, 2007),      into a five-dimensional affective vector (evalu-
moral judgment from Durkheimian ethics (Émile      ation, potency, activity, status-conferral, power-
Durkheim, 1961), and relational cognition from      assertion).
Social Identity Theory (Tajfel and Turner, 1979).
These components are integrated into an aug-    • Ethical Resonator (ER) ←Durkheimian Moral
mented BDI architecture in which collective af-     Education (Émile Durkheim, 1961). Aggregates
fect constrains rational action (Durkheim, 1915).     perceptions into a moral judgment of each inter-
The resulting chain—Affect →Ethics →Identity      action partner, outputting approbatory, repres-
→Action—models general social cognition rather      sive, or restorative attitudes for relational updat-than culture-specific institutional content. No mod-      ing.
ule directly encodes Fei’s theory, Confucian ethics,
                                                              • A-BDI Decision Module ←BDI + Durkheimianor predefined guanxi categories. Any Differential                                                         collective affect. Extends BDI (Georgeff et al.,
Order patterns therefore arise from the interaction                                                 1998; Wang et al., 2025) with Affection, embod-
between general mechanisms and the structural                                                      ied in SIM and constraining belief formation,
conditions in Table 26.                                                        desire generation, and intention selection.
4.1.1  Agent Architecture                          4.1.2  Social Dynamics: A Four-Phase Loop
All agents share a unified psychological–decision   Each round follows a four-phase loop (Figure 2)
architecture activated sequentially each round (Fig-   modeling pre-modern rural formation under co-
                                       33142

## Страница 5

residence and relational cognition, without prices   5  Experiment Setup
or centralized adjudication. Hyperparameters and
                                We simulate 18 agents over 30 rounds: two kin-simulation settings are reported in Appendix A.
                                               based clans (F1 and F2, six members each) and
                                                       six unaligned agents without family ties. Agents
Phase I: Community Formation.  Agents par-                                                          jointly produce three resource types under a Leon-
tition into communities based on mean relational                                                                  tief utility function with preference-weighted redis-
proximity ¯dij = (di→j + dj→i)/2, where di→j ∈    tribution (§4). We compare two conditions: sym-
{1, . . . , 5}. Louvain detection produces dynamic    metric skills (balanced production capacities) andcommunities, and agents may migrate as relation-                                               complementary skills (group-specific specialization
ships evolve (Appendix D.4.1).                                                       in one resource). All agents share the same cog-
                                                          nitive architecture; unaligned agents differ only in
Phase II: Public Deliberation.  Within communi-                                                   lacking kinship ties. No agent is given knowledge
ties, agents engage in R = 2 rounds of public delib-                                                   of Fei’s theory or any culture-specific behavioral
eration, broadcasting speeches and labor proposals.                                                           rules.
No voting or enforcement rule is imposed. The                                                     Simulations use DeepSeek-V3 (temperature 0.7),
                C becomes the observable   with five random seeds per condition.  Cross-resulting action set A(t)input for subsequent updating (Appendix D.4.2).                                           model robustness is assessed using GPT-4o-mini
                                            and Gemini-2.5-flash-lite (Appendix E). Code,
Phase III: Division of Labor and Production.   prompts, and simulation logs will be released upon
Each agent independently chooses                                  labor allocation    publication.2 Metric definitions and implementa-          P
ℓi = (ℓiA, ℓiB, ℓiC) with    r ℓir = 1, based on    tion details are provided in Appendices B–D.
  C , A-BDI state, and SIM. No centralized au-A(t)                                                    5.1  Proposition–Metric Mappingthority or conflict-resolution rule is imposed. Eco-
nomic “authority” is measured ex post by proposal   Each proposition is operationalized via a primary
adoption frequency (Appendix D.4.3).1               quantitative metric paired with a diagnostic cri-
                                                       terion that specifies the expected pattern under
Phase IV: Distribution and Psychological Up-    Differential Order.  The full mapping between
date.  Community goods are pooled and  re-    propositions, metrics, and diagnostic criteria is pro-
distributed by  preference  weights:   xir  =   vided in Appendix C, with formal definitions in
(P    okr)  pir/ P    pjr. This implements a   Appendix B.   k∈C        ·       j∈Credistributive allocation prototype consistent with
                                        6  Experimental ResultsPolanyi’s redistributive economies (Polanyi, 1944)
and Sahlins’s generalized reciprocity (Sahlins,  We evaluate Propositions 1–5 using the criteria in
1972).  After consumption, each agent executes   Table 8.
the update cycle EC →ER →SIM →A-BDI.Production, clearing, and utility details are reported    6.1  Emergence of Stable Division of Labor
in Appendices D.4.4–D.4.6.                            (P1)
                                                 Figure 3 shows that stable specialization emerges
Evaluation Transparency.  EC and ER are agent-   without centralized coordination. Under symmetric
internal cognitive processes: each agent uses its     skills, lock-in rises rapidly and plateaus at 0.972;
own LLM call to perceive and judge others, so   under complementary skills, convergence is faster
assessments may differ across agents. The only   and reaches 0.985. The acceleration under com-
metric using an external LLM-as-Judge evaluator is    plementarity suggests that structural differentiation
Communication Intensity (Appendix B.2, Table 6).    itself drives specialization speed, not merely learn-
All other metrics—Decision Authority, Proposal    ing efficiency. Per-round improvements decline
Intensity, Lock-in Score, Community Match, and    to near-zero in both conditions, confirming that
SIM levels—are computed deterministically from    the division is stable rather than transient. These
simulation logs.                                      patterns support Proposition 1.  Ablation analy-
                                                             sis (Appendix) further indicates that while conver-
   1Decision Authority (DA) is the paper’s primary opera-   gence is architecturally robust, the precise calibra-
tionalization of emergent authority; formal definition appears
in §6.                                                   2https://github.com/Chi20/DOP
                                        33143

## Страница 6

Figure 3: Global division lock-in emerges early and
stabilizes under both skill structures. Panel A: symmet-
ric skills converge to 0.972; Panel B: complementary                                                                                             (a) Symmetric skills.
skills converge faster to 0.985. Per-round improvements
(Panel C) approach zero, indicating equilibrium.


tion of social coordination depends specifically on
the EC/ER/SIM mechanism.

6.2  Guanxi as Economic Ethics (P2)
To test whether guanxi stabilizes cooperative roles
beyond efficiency maximization, we examine how
community match responds to negative  utility
shocks under varying relational embeddedness.
                                                                                     (b) Complementary skills.
Figure 4 reveals a consistent pattern: high-SIM
agents maintain stable community participation    Figure 4: Community match rates under utility shocks.
regardless of recent payoff performance, while    F1/F2: family groups; Proself: unaligned agents. High-
low-SIM agents withdraw sharply when efficiency   SIM relations maintain stable participation (solid lines)
incentives turn unfavorable. This asymmetry is    even when recent utility is low, whereas low-SIM ties
                                                    (dashed lines) exhibit sharp decline. This stickiness isparticularly marked under complementary skills,
                                              more pronounced in the complementary condition (B).
where coordination failure is most costly.  The
stickiness of high-SIM ties suggests that ethical
obligations embedded in close relations function    metry. Under symmetric skills, within-family pro-
as a commitment device, sustaining participation    posals account for 34.2% of total activity and
in community-based division of labor even when   family→proself proposals for 34.3%, whereasshort-term rationality would dictate defection. This    cross-family proposals comprise only 6.9%. This
supports Proposition 2.                               indicates that cooperative energy flows primarily
                                                along family channels and outward to unaligned
6.3  Relational Decay of Cooperation (P3)                                                      agents, but rarely across family boundaries. These
Figure 5 reveals that cooperation decays along rela-   patterns support Proposition 3: cooperation ex-
tional rather than preference-type boundaries. Fam-    hibits graded relational decay centered on family
ily agents (F1, F2) concentrate decision author-    structures rather than distributed uniformly by indi-
ity and proposal activity within their own groups,   vidual preference type.
with markedly lower engagement across family
                                                    6.4  Emergence of Authority Stratification (P4)boundaries. This suggests cooperation is organized
around sharply bounded family circles.  In con-   Table 1 reports OLS estimates of decision author-
trast, Proself agents do not form a cohesive self-    ity on proposal intensity, communication inten-
boundary; they accept family-originated proposals     sity, accumulative utility, and social identity. In
readily and receive substantial proposals from fam-   both conditions, proposal intensity is strongly and
ily agents, effectively integrating into existing fam-    positively associated with decision authority (sym-
ily structures rather than forming an independent    metric: β = 0.820, p < 0.01; complementary:
cooperative bloc.                          β = 0.780, p < 0.01). Communication intensity,
  The proposal distribution quantifies this asym-   accumulative utility, and SIM, by contrast, show
                                       33144

## Страница 7

                                                      Table 1: Determinants of Decision Authority. Proposal
                                                               intensity dominates in both conditions; communication,
                                                     accumulative utility, and SIM show no robust indepen-
                                                       dent main effects.


                                                                                                             Baseline Model        Interaction Model
                                                                                 Symm.    Comp.    Symm.    Comp.
                                                                               Proposal Intensity       0.820∗∗∗  0.780∗∗∗
                                                                      Communication                                                                                                          Intensity   0.046                                                                                         0.096    −0.0050.161     0.127                                                                          Accumulative Utility                                                                                   Social Identity (SIM)      0.084                    −0.031
                      (a) Symmetric skills.                             Family Dummy                 −0.0390.086    −0.2960.298   −0.1120.542∗
                                                          SIM   Family         −0.135            0.603∗∗∗
                                                                              Constant×                0.582∗∗    0.284            −0.089                                                                                                −0.007  −0.499
                                                                  Time FE                  Yes        Yes        Yes       Yes
                                                                          Obs.                     540       540       540      540
                                                   R2                        0.697      0.688      0.113      0.100
                                                            Notes: Dependent variable is standardized decision authority.
                                                                Baseline models include proposal and communication
                                                                        controls; interaction models isolate SIM, family, and
                                                  SIM×Family effects. All models include turn fixed effects                                                         and group-clustered standard errors. Full specifications
                                                                             appear in Appendix G.

                  (b) Complementary skills.

Figure 5: Decision authority (boxplots) and proposal
activity (bars) exhibit a relational gradient.  Family
agents (F1, F2) show high within-group authority and
low cross-family engagement, while Proself agents lack
self-boundary and align with family structures. Note the
asymmetry in proposal distribution: under symmetric
skills (a), within-family and family→proself proposalsdominate (34.2% and 34.3%), whereas cross-family pro-
posals are rare (6.9%).

no robust independent main effects in the baseline
models.
  This asymmetry indicates that authority stratifi-
cation is driven primarily by action-based agenda                                                     Figure 6: Temporal distribution of decision authority
control rather than by communicative effort, ac-   under symmetric and complementary skill structures.
cumulated payoffs, or relational identity. These    Kernel density estimates show persistent stratification
results support Proposition 4: durable authority    rather than convergence to uniformity across rounds.
emerges endogenously through proposal-driven
mechanisms.                                          authority, but their interaction is strongly positive
                                                (β = 0.603, p < 0.01). Authority thus accrues
6.5  Clan-Based Center–Periphery                disproportionately to agents whose social recog-
      Stratification (P5)                             nition is embedded in family relations.  Under
                                            complementary skills, this interaction disappears,Authority remains persistently stratified over time
                                                  suggesting that functional differentiation attenu-rather than diffusing uniformly. Figure 6 shows that
                                                      ates relationally conditioned authority. This sup-distributions stabilize into structured forms: under
                                                       ports Proposition 5: center–periphery stratificationcomplementary skills, the right-skewed mass in
                                             emerges most clearly when family affiliation andhigh-authority regions sustains, indicating a stable
                                                        social recognition align.center–periphery structure; under symmetric skills,
differentiation is weaker but persists.
                                                    6.6  Architecture Ablation and Baseline  To examine the relational conditions of authority
                                                     Analysisformation, we regress decision authority on social
identity (SIM), family membership, and their in-   Table 2 reports cross-model module ablations under
teraction (Table 1). Under symmetric skills, nei-   symmetric endowments; detailed BDI-only com-
ther SIM nor family membership alone predicts    parisons are shown in Table 3.
                                       33145

## Страница 8

Table 2: Cross-model ablation dissociation (symmetric     itself is largely LLM-native.  The social qual-
endowments). Removing EC disrupts EC→SIM but    ity of this specialization, however, diverges. For
preserves ER→SIM; removing ER does the reverse.     DeepSeek-V3 and GPT-4o-mini, the full archi-
                                                      tecture produces more coherent within-group co-
           EC→SIM  ER→SIM  SIM×Fam→Auth  ordination (WGCS: 0.410 vs. 0.477, p < 0.05).
 DS Full          0.748∗∗    0.573∗∗∗      0.070 n.s.
 DS w/o EC    —       1.021∗∗∗      0.029 n.s.      Gemini-2.5-flash-lite shows a directional but non-
 DS w/o ER      0.170 n.s.   —         0.042 n.s.      significant WGCS improvement under BDI-only
 GPT Full        2.216∗∗∗             n.s.      0.106∗      (0.404      = 0.10), yet this coincides with                        −0.002                     →0.379,p
 GPT w/o EC    —       0.498∗∗∗     −0.197 n.s.    a collapse in cross-family proposals (P3: 10.3% GPT w/o ER         —         0.181 n.s.                     →               −0.127∗                         1.3%) and a marked decline in decision authority
 Gemini Full      0.069∗∗    0.186∗∗∗      0.089 n.s.     (Gemini:       DeepSeek/GPT: Gemini w/o EC  —       0.061∗       0.097 n.s.           −39%;             −70%).
 Gemini w/o ER           n.s.  —                    n.s.      Across all models, P3–P5 degrade directionally              −0.022                 −0.070                                               under BDI-only: the concentric cooperation gradi- All BDI-only      absent      absent         absent†
                                                    ent flattens, self-directed proposals increase, and
   †BDI-only lacks SIM, the interaction term is therefore                                                         relational authority stratification vanishes. Single-       undefined; Significance: ∗p < 0.1, ∗∗p < 0.05,
           ∗∗∗p < 0.01; n.s. = not significant.            module ablations yield only modest degradation,
Table 3: Full architecture vs. BDI-only baseline (sym-   but complete removal triggers discontinuous col-
metric endowments).                                 lapse in relational structure. This indicates that
                                 EC and ER operate as partially compensatory yet
 Prop.  Indicator            DS        GPT          Gemini     jointly necessary pathways for sustaining relational
 P1       Lock-in                   (last 5)                            0.971                                                       /                                   0.979   0.971                                                                               /                                                  0.979                                                           0.833                                                                                                         / 0.833
 P1     WGCS                            0.410                                                      /                             0.477∗0.410                                                                              /                                                0.477∗                                                         0.404                                                                                                      / 0.379                                                                                          n.s.  social structure.              (F1)↓
 P2   High/Low-SIM gap    present / n/a    present / n/a  −0.022 n.s. / n/a    Full ablation results are reported in Appendix F. P3    Cross-fam. proposals  6.9% / 0.7%   6.9% / 0.7%    10.3% / 1.3%
 P4   DA mean (no-self)    0.186 / 0.056   0.186 / 0.056    0.382 / 0.234  The per-dyad specification in Appendix F.3 uses
 P5   SIM×Fam→Auth      n.s. / absent    ∗∗/ absent       n.s. / absent  EC evaluation level, whereas Table 2 uses EC
Notes: n/a: SIM absent in BDI-only. P4 BDI-only reductions:                                                        intra-agent variance; despite this operational differ-
DeepSeek-V3 and GPT-4o-mini −70%; Gemini-2.5-flash-lite
     −39%. Significance: ∗p < 0.05, ∗∗p < 0.01.          ence, all three models recover the same directional
                                EC→SIM pathway.  Under symmetric endowments, removing EC
selectively disrupts the         pathway while    6.7  Bias Diagnosis: RLHF Artifact or              EC→SIMpreserving          whereas removing ER dis-        Architectural Emergence?       ER→SIM,
rupts ER→SIM while preserving EC→SIM. This   Observed cooperation patterns could stem fromdissociation suggests that EC and ER make dis-   RLHF-induced prosocial bias, but four observa-
tinct, module-specific contributions to relational    tions suggest they instead reflect architectural
updating within CAREB-MAS.                   mechanisms.
  The three models nonetheless recover the same       First, agents exhibit behaviors that are not well
macro-structural patterns through different inter-   explained by a uniformly prosocial RLHF account.
mediate pathways. DeepSeek-V3 draws on both   Family agents show the lowest authority accep-
EC and ER jointly; GPT-4o-mini relies primarily    tance toward the opposing family (Figure 5)—
on affective-evaluation variance; Gemini-2.5-flash-   exclusionary rather than uniformly cooperative.
lite shows an ethical-judgment-dominant profile   Authority distributions remain right-skewed (Fig-
(ER→SIM 0.186∗∗∗vs. EC→SIM 0.069∗∗). That    ure 6), and utility rankings reverse between con-pathway divergence coexists with structural con-    ditions (Appendix H). These patterns replicate
vergence is difficult to reconcile with a uniform    across DeepSeek-V3, GPT-4o-mini, and Gemini-
RLHF-artifact explanation.                              2.5-flash-lite.
                                                  Second, ablation dissociation is module-specific
BDI-Only Baseline Comparison.  Table 3 com-   (Table 2). Removing EC eliminates the EC→SIM
pares the full architecture with a BDI-only baseline   pathway while sparing ER→SIM, and removingthat removes EC, ER, and SIM while retaining  ER does the reverse.  If RLHF were the driver,
vanilla decision logic. All indicators follow unified   module removal should produce uniform attenua-
definitions (Appendix B).                              tion rather than targeted pathway elimination. This
  P1 lock-in remains high across both conditions    selective dissociation holds across all three models.
(0.83–0.98), indicating that stable specialization      Third, the three models achieve convergent P1–
                                       33146

## Страница 9

P5 patterns through divergent intermediate mech-  CAREB-MAS, a multi-agent framework that mod-
anisms.  DeepSeek-V3 operates through joint    els emotional, ethical, and relational processes
 affective–ethical processing, GPT-4o-mini through   under minimal pre-market structural conditions.
affective-evaluation dominance, and Gemini-2.5-   Across long-horizon simulations, CAREB-MAS
 flash-lite through ethical-judgment dominance.   reproduces five core Differential Order Pattern phe-
GPT shows positive guanxi stickiness (P2 gap =   nomena from local interaction alone. Production-
+0.03–0.04), whereas DeepSeek and Gemini show    structure contrasts and cross-model ablations show
negative or absent stickiness (Gemini: −0.022 n.s.).    that these outcomes vary with structural conditionsYet all three produce the same concentric coopera-   and depend on cognitive architecture rather than
tion gradient (P3) and authority stratification (P4).   generic LLM behavior. These results support in-
Divergence in P2 alongside convergence in P3–P4    terpreting Differential Order Pattern as a structure-
 is incompatible with a uniform RLHF explanation.    sensitive emergent outcome of general social mech-
   Fourth, BDI-only baseline collapse is direction-   anisms.
 ally consistent across architectures.  Removing
EC, ER, and SIM degrades cross-family coordi-   Limitations and Future Directions
nation and decision authority regardless of the un-                                          The present study faces four limitations. First, EC,
derlying LLM: for Gemini, cross-family proposals                                          ER, and SIM updates scale as O(N2), restricting
drop from 10.3% to 1.3% and DA falls 39%; for                                                experiments to N = 18 and limiting population-
DS/GPT, cross-family proposals drop from 6.9%                                                        level claims.  However, this configuration is a
to 0.7% and DA falls 70%.  While magnitudes                                             minimal setting for observing intra-clan cohesion,
vary, the directional pattern—BDI-only weakens                                                         inter-clan negotiation, and cross-group integration
 relational structure—indicates that observed social                                                  within the same simulation. Second, the environ-
structure depends on the CAREB-MAS architec-                                            ment is simplified: we do not include explicit sanc-
ture rather than model-specific training artifacts.                                                         tioning, conflict-resolution institutions, or external
                                               shocks such as migration and scarcity. While this6.8  Summary: Structural Contrast
                                                              facilitates mechanism tracing, it limits external va-
Across Propositions 1–5, the main contrast is struc-    lidity and leaves open whether such factors would
 tural: the same architecture yields different modes    fundamentally alter dynamics. Third, validation is
of integration under different production endow-   driven more by theory than by direct ethnographic
ments. These outcomes vary systematically with    calibration; related empirical correspondence is
production endowments: symmetric skills yield    discussed in Appendix N. Stronger empirical corre-
more kin-centered, bounded integration consistent   spondence requires longitudinal field comparison
with mechanical solidarity, whereas complemen-   and boundary-condition testing. Fourth, although
tary skills produce more functionally interdepen-   ablation results do not support a uniform RLHF-
dent and less clan-bound organization closer to or-   bias explanation, we cannot fully exclude training-
ganic solidarity. This contrast locates Differential    data priors. Future work should address these limits
Order Pattern at the level of structural conditions    through larger-scale simulations, more complex so-
rather than as a fixed cultural template.                 cial settings, closer empirical comparison, and tests
  A related finding is the recurring decoupling be-   on a wider range of model families.
tween coordination burden and durable authority—
an “Atlas paradox”—which suggests that durable   Acknowledgments
power remains anchored in agenda control rather
                                                This  research  was  supported  by  the  Na-than  coordination  service (Appendix  L; Ap-
                                                        tional   Key  R&D   Program   of   Chinapendix M).
                                            (No.2023YFC3304701), NSFC (No.6250072448,
7  Conclusion                             No.62272466,U24A20233), Big Data and Re-
                                                   sponsible  Artifcial  Intelligence  for  National
In this paper, we show that Differential Order   Governance, Renmin University of China; the
Pattern, often treated as specific to Chinese ru-   Joint Academy on Future Humanity, Renmin
 ral society, can emerge from cross-culturally doc-   University  of  China  and  Westlake  Univer-
umented social mechanisms without encoding   sity(No.2025RD0202) and Center for AI for Social
culture-specific institutional rules. We develop    Science, SLAI.
                                        33147

## Страница 10

References                                    David R. Heise. 2007. Expressive Order: Confirming
                                                         Sentiments in Social Actions. Springer, New York.
Robert Axelrod. 1997. The dissemination of culture: A
  model with local convergence and global polarization.   David Lazer, Eszter Hargittai, Deen Freelon, San-
  Journal of conflict resolution, 41(2):203–226.            dra Gonzalez-Bailon, Kevin Munger, Katherine
                                                  Ognyanova, and Jason Radford. 2021. MeaningfulBabita Bhatt. 2022. Ethical complexity of social change:                                                      measures of human society in the twenty-first century.  Negotiated actions of a social enterprise. Journal of                                                          Nature, 595(7866):189–196.  Business Ethics, 177(4):743–762.
                                                   Claude Lévi-Strauss. 1949. Les Structures élémentairesGordon Dai, Weijia Zhang, Jinhan Li, Siqi Yang, Srihas                                                    de la Parenté. Presses Universitaires de France.  Rao, Arthur Caetano, Misha Sra, and 1 others. 2024.
   Artificial leviathan: Exploring social evolution of llm                                             Bao Longyuan and Rukhsana Iftikhar. 2023. Social and
   agents through the lens of hobbesian social contract                                                                 historical investigation of China’s ethnic minorities
   theory. arXiv preprint arXiv:2406.14373.                                                                in 50s-60s of the 20th century. 7(4):664–672.
Émile Durkheim. 1915. The Elementary Forms of the                                                   Marcel Mauss. 1925. The Gift: Forms and Functions of
  Religious Life.  George Allen & Unwin, London.                                                  Exchange in Archaic Societies. Cohen & West.
   Original work published 1912. Translated by J. W.
  Swain. Available at Project Gutenberg.               Joon Sung Park, Joseph O’Brien, Carrie Jun Cai, Mered-
                                                                       ith Ringel Morris, Percy Liang, and Michael S Bern-
Emile Durkheim. 2019. The division of labor in society.                                                                      stein. 2023. Generative agents: Interactive simulacra
   In Social Stratification, Class, Race, and Gender in                                                          of human behavior. In Proceedings of the 36th an-
   Sociological Perspective, Second Edition, pages 178–                                                        nual acm symposium on user interface software and
  183. Routledge.                                                           technology, pages 1–22.
Víctor M Eguíluz, Martin G Zimmermann, Camilo J                                                    Jinghua Piao, Yuwei Yan, Jun Zhang, Nian Li, Junbo
  Cela-Conde, and Maxi San Miguel. 2005. Coopera-                                                     Yan, Xiaochong Lan, Zhihong Lu, Zhiheng Zheng,
   tion and the emergence of role differentiation in the                                                            Jing Yi Wang, Di Zhou, and 1 others. 2025. Agentso-
  dynamics of social networks. American journal of                                                                 ciety: Large-scale simulation of llm-driven genera-
   sociology, 110(4):977–1008.                                                                    tive agents advances understanding of human behav-
                                                                  iors and society. arXiv preprint arXiv:2502.08691.Joshua M Epstein and Robert Axtell. 1996. Growing
   artificial societies: social science from the bottom up.                                                     Karl Polanyi. 1944. The Great Transformation. Farrar  Brookings Institution Press.                                & Rinehart.
Xiaotong Fei, Gary G Hamilton, and Wang Zheng. 1992.
                                                   Siyue Ren, Zhiyao Cui, Ruiqi Song, Zhen Wang, and  From the soil: The foundations of Chinese society.
                                                  Shuyue Hu. 2024. Emergence of social norms in gen-  Univ of California Press.
                                                               erative agent societies: Principles and architecture.
Meyer Fortes and Edward E Evans-Pritchard. 1940.      Preprint, arXiv:2403.08251.
  African Political Systems. Oxford University Press.
                                                     Marshall Sahlins. 1972. Stone Age Economics. Aldine-
Chen Gao, Xiaochong Lan, Nian Li, Yuan Yuan, Jingtao       Atherton.
  Ding, Zhilun Zhou, Fengli Xu, and Yong Li. 2024.
                                           Thomas C Schelling. 1971. Dynamic models of segre-  Large language models empowered agent-based mod-
                                                                gation. Journal of mathematical sociology, 1(2):143–   eling and simulation: A survey and perspectives.
                                                        186.  Humanities and Social Sciences Communications,
  11(1):1–24.                                                            Pitirim Sorokin. 2017. Social and cultural dynamics: A
                                                           study of change in major systems of art, truth, ethics,Michael Georgeff, Barney Pell, Martha Pollack, Milind
                                                   law and social relationships. Routledge.  Tambe, and Michael Wooldridge. 1998. The belief-
   desire-intention model of agency. In International
                                                     Mitsuhiro Tada. 2020.   Language and imagined  workshop on agent theories, architectures, and lan-
                                                               gesellschaft: Émile durkheim’s civil-linguistic na-   guages, pages 1–10. Springer.
                                                           tionalism and the consequences of universal human
Mark Granovetter. 1985. Economic action and social        ideals. 49(4):597–630.
   structure: The problem of embeddedness. American
  Journal of Sociology, 91(3):481–510.                Henri Tajfel and John C. Turner. 1979. An integrative
                                                         theory of intergroup conflict. In William G. Austin
Zhang Hanting. 2024. Chinese relational sociology: An      and Stephen Worchel, editors, The Social Psychology
   analysis of the theoretical paradigm of guanxi studies       of Intergroup Relations, pages 33–47. Brooks/Cole,
   in the chinese context. 20(4):59.                        Monterey, CA.

Heather A. Haveman and Rachel Wetts. 2019. Orga-   Aron Vallinder and Edward Hughes. 2024.  Cultural
   nizational theory: From classical sociology to the       evolution of cooperation among llm agents. Preprint,
  1970s. 13(3):e12627.                                  arXiv:2412.10270.
                                       33148

## Страница 11

Lei Wang, Zheqing Zhang, and Xu Chen. 2025.  In-
   vestigating and extending homans’ social exchange
   theory with large language model based agents. In
  Proceedings of the 63rd Annual Meeting of the As-
   sociation for Computational Linguistics (Volume 1:
  Long Papers), pages 9762–9777, Vienna, Austria.
  Association for Computational Linguistics.

Jianghua Zhang. 2015. “folk society” and beyond: A
  comparative study of fei xiaotong and robert red-
   field’s works on civilization studies. 35(4):134–156.

Y Zhang. 2018. The double rupture: Central themes of
   historical anthropology in contemporary china. 8:17–
   36.

Daming Zhou and Mingyuan Xiao. 2024. Recent devel-
  opments in anthropological methods for the study of
  complex societies. 8(1):4.

Martín G Zimmermann, Víctor M Eguíluz, and Maxi
  San Miguel. 2004. Coevolution of dynamical states
  and interactions in dynamic networks.  Physical
  Review E—Statistical, Nonlinear, and Soft Matter
   Physics, 69(6):065102.

Émile Durkheim. 1961. Moral Education: A Study in
   the Theory and Application of the Sociology of Edu-
   cation. Free Press, New York. Originally published
   as L’éducation morale (1925).





                                       33149

## Страница 12

A  Experimental Parameterization.          Group-level matching (reported as “Group match-
                                                   ing” in tables) is the mean of group_matchi acrossTable 4 summarizes the key hyperparameters used
                                                  agents within the same Louvain-detected commu-
in both experimental settings. Each setting con-
                                                        nity at round t.
sists of 18 agents interacting over 30 rounds, with
                                            Within-Group Coordination Score (WGCS).fixed population size and identical random seed
                              WGCS quantifies the coherence of labor allocation
configurations to ensure comparability. Agents are
                                                   decisions within a community by measuring the
partitioned into two family groups (F1 and F2) and
                                                alignment between individual proposals and the
a smaller proself group, preserving a constant so-
                                             community’s aggregate demand profile.
cial composition across settings.
                                                  Let C denote a community at round t, and let
  The Symmetric Setting adopts a balanced skill
                                                                                                                                      i                                                                                                   :  i, j ∈C, k ∈K(C)                                                                         } be the setallocation, where all groups possess identical ca-  PC = {p(k)i→j                                                   of all labor proposals issued within C. Define thepabilities across resource types. The Complemen-
                                           community proposal centroid as:tary Setting introduces functional specialization
by asymmetrically distributing skills across fami-                      1 X
lies and the proself group, while holding all other                   ¯pC =       p             (7)
parameters constant. Ethical flexibility and contex-                      |PC| p∈PC
tual coefficients are fixed across settings to isolate                                            where p is the vector representation of proposal p
the effect of skill structure on interaction dynamics                                                        in the labor-type space.
and authority formation.
                                                For each agent i        let a(C)i   denote i’s final  Each setting uses matched random seed configu-              ∈C,                                                      labor allocation vector. The within-group coordina-rations across the symmetric and complementary
                                                        tion for agent i is:conditions to ensure comparability. Each condition
is repeated five times with independent stochastic
                                          WGCSi = cos a(C)i    , ¯pC           (8)realizations.
                                         The community-level WGCS is the mean acrossA.1  Parameter Definitions
                                            members:
Table 5 provides formal definitions for all parame-
                       Xters referenced in the main text.                                     1                                      WGCSC =      WGCSi        (9)
                                                                     |C| i∈CB  Metric Definitions
                                                       In practice, WGCS is reported as an F1-weightedB.1  Division and Matching Metrics
                                                       variant to account for class imbalance across labor
Division Lock-in Score. For agent i with prefer-                                                      types:
ence vector prefi and labor skill vector skilli:
                                                          2  PrecisionC  RecallC
                                    =                                                                                                (10)                                                                                                          ·                                                                                                                             ·                    prefi · skilli          (1)      WGCS(F1)C          lock-ini =                                           +                                                                    PrecisionC                                                                              RecallC
                 ∥prefi∥· ∥skilli∥
                                           where PrecisionC and RecallC are computed byGlobal  division  lock-in:    Lock-inglobal  =
 1 PN                                                treating the community centroid ¯pC as the “gold”N   i=1 lock-ini.                                                      allocation and each agent’s final allocation as a  Division Lock-in Change. Per-round change in
                                                      prediction. This F1 variant (reported as “WGCSglobal lock-in:
                                                 (F1)” in tables) is more sensitive to coordination
                                                      global  (2)    failures on minority labor types and is the primary  ∆Lock-in(t) = Lock-in(t)global −Lock-in(t−1)                                                   metric used in ablation comparisons.
  Multi-Level Division Matching. Let dS, dC,
dG, dO denote demand vectors at social, commu-   B.2  Behavior Metrics
nity, group, and out-group levels:                                                 Decision Authority. Let p(k) denote the k-th labor
                                                                       i→j                                                        allocation proposal issued by agent i to agent j, and           social_matchi = cos(skilli, dS)   (3)
                                                                let aj denote agent j’s final allocation in the same
     community_matchi = cos(skilli, dC)   (4)
                                                 round. Let K(−i)i  =      : j(k)     be the set of          group_matchi = cos(skilli, dG)   (5)                    {k        ̸= i}                                                  proposals issued by agent i to other agents, with

                                                                                      i       outgroup_matchi = cos(skilli, dO)   (6)   |K(−i)                                                                                       | its cardinality.
                                       33150

## Страница 13

                             Table 4: Experimental Hyperparameters

                Parameter                    Symm. Setting  Comp. Setting
               Number of agents                       18             18
                  Family size (F1, F2)                    6 each          6 each
                     Proself group size                        6              6
                     Interaction rounds                       30             30
                      Skill Allocation (A:B:C)                 F1: 2:2:2         F1: 4:1:1
                                                          F2: 2:2:2         F2: 1:4:1
                                                                Proself: 2:2:2     Proself: 1:1:4
                     Ethical flexibility e                           [-0.5, 0.5]          [-0.5, 0.5]
                   Contextual coefficients (aA, aB, aC)        (1, 1, 1)            (1, 1, 1)




                                                                                       i                                                              If |K(−i)                                                                                        | = 0, decision authority is defined as                                                     0.
                                                Otherwise, decision authority is computed as:

                                                                 1
                                                 Authorityi = P                           2 ,
                                     w             p(k)                                                                                                                          i      i→j(k) −aj(k)                                                                   k∈K(−i)                                                                                            (11)
                                         where w = 1 +    1   and j(k) denotes the target
                                                                                                                i   Table 5: Formal parameter definitions.                              |K(−i)                                                                                                                                     |
                                              agent of proposal k and j(k) ̸= i by construction.
Symbol   Definition                                Authority approaches 1 when proposals to others
N       Number of agents in the simulation        closely match their final allocations and approaches
          (=18)                             0 as proposals diverge. Self-proposals are excluded
T       Number of interaction rounds (=30)           to isolate influence over others’ decisions.R       Number of deliberation sub-rounds per
          phase (=2)                             Proposal Action Intensity.
R         Set of resource types ({A, B, C})        X         Agent                      i’s subjective                                   identitydi→j                                            level to-          Proposali =    1[agent i proposes to j]   (12)                                      2, 3, 4,         ward                agent                        j;                     di→j ∈{1,      5}¯dij       Symmetric    relational    proximity:                               j̸=i
           ( di→j + dj→i )/2
ejb       Ethical–Judgmental  Bias;   ejb  ∼         Proposal Directionality. To distinguish self-
         Uniform(−0.5, 0.5); modulates moral        directed from other-directed coordination behavior,          assessment stringency
                                  we define:ℓi        Labor allocationPvector for agent i; ℓi =
           (ℓiA, ℓiB, ℓiC),   r ℓir = 1
si,t(r)    Agent i’s skill level for resource r at
                    X          round t; updated by learning-by-doing:
           si,t+1(r) = si,t(r) + ℓi,t(r)                     Self-proposalsi =     1[p(k)  exists]     (13)                                                                          i→i
pi       Consumption preference vector; pi ∼        XkX          Dir(13)
b(r)       Resource-specific production unit (con-          Other-directedi =         1[p(k)  exists]   (14)                                                                         i→j
            textual coefficient); b(r) = 1 ∀r in both                                       j̸=i  k           conditions
λ         Search randomness parameter for com-          Totali = Self-proposalsi + Other-directedi  (15)
          munity edge formation (=0.3)                                        Other-directedi
ui,t       Per-round Leontief  utility:   ui,t =           Other-directed %i =                                                                                   Totali   × 100          minr{Ri,t(r)/pi(r)}   PtUi,t      Cumulative utility: Ui,t =   τ=1 ui,τ                                                     (16)

                                             Cross-family proposals are a subset of Other-
                                                 directed proposals where j belongs to a different
                                              family group than i.
                                       Communication Action Intensity. Communi-
                                                cation action intensity quantifies the complexity
                                         and information content of an agent’s public com-
                                               munication. For each speech act, an external LLM
                                                evaluator assigns a single composite score in the
                                    33151

## Страница 14

range [0, 10], aggregating four dimensions: rela-    Community–Match Change/Adaptive Divi-
tionship complexity, syntactic complexity, seman-   sion. We define the change in community match
tic information content, and argument logic (Ta-    as:
ble 6). This score is used directly as the agent’s        ∆M = Mpost −Mpre,         (20)communication action intensity.
                                           where Mpre and Mpost denote the match score be-
Table 6: Prompt for evaluating communication action    fore and after community re-division, respectively.
intensity.                                             Positive values of ∆M indicate improved align-
                                           ment with the new community structure.
 LLM Evaluation Prompt
  Please analyze the language complexity and information      Action Effectiveness
  content of the following public speech text, evaluating      To capture how effectively agents translate pro-
 from the following dimensions: (1) Relationship Complex-                                                  posal activity into material outcomes, we define  ity (complexity of relationships involved); (2) Syntactic
  Complexity (complexity of sentence structure); (3) Seman-     action effectiveness as a proposal-normalized mea-
  tic Information Content (density and depth of information     sure of economic impact.
  expressed); (4) Argument Logic (rigor and logic of reason-
                                                  Let Ui denote the cumulative economic utility  ing and argumentation).
  Text content: “{text}”                                obtained by agent i over the entire simulation hori-
  Please strictly follow the following JSON format and do     zon. Let Pi denote the agent’s average proposal
  not add any other content: {   “score”: number }
 Where score is a comprehensive complexity score from 0–     activity, measured as the mean number of proposals
  10, with higher scores indicating more complex language     submitted per interaction round. To avoid division
 and greater information content.                     by zero, we set Pi = max(Pi, ϵ) with a small con-
                                                         stant ϵ > 0.
                                   We define action effectiveness as:B.3  Social Identity Metrics
Social Identity Level (SIM). Average SIM score                                                   AEi = |Ui| .              (21)
agent i assigns to community members Ci:                                  Pi
       X                 1                                 Importantly, action effectiveness does not as-          SIDi =         SIM(i, j)       (17)
                    |Ci| j∈Ci                   sume that all proposals are adopted, nor does it                                          model counterfactual outcomes.  Instead, it pro-
  In-Group vs. Cross-Group SIM Differentia-   vides a behavioral efficiency proxy that links re-
tion. To quantify relational identity gradient (P3),    alized economic outcomes to communicative and
we compute:                                     decision-making effort.
       X                       This measure is used in Section 6.5 to exam-               1
 SIM_gapi =                SIM(i, j)           ine how material influence interacts with decision
               |Fi ∩Ci| j∈Fi∩Ci                     authority and center–periphery stratification.        X             (18)                  1                           Late Labor Concentration. To capture tempo-
        −                SIM(i, j)           ral dynamics of specialization, we define late-stage                 |Ci \ Fi|                           j∈Ci\Fi                                                     labor concentration as the Gini coefficient of agent
where Fi denotes agent i’s family group.  Posi-    i’s labor allocation vector ℓ(Tlate)i    averaged over the
tive values indicate stronger relational identity to-    final 20% of simulation rounds:
ward in-family members within the same commu-                   
nity. The population-level P2/P3 gap reported in          X                                                                 1
tables is the mean of SIM_gapi across agents (or,      LateConci = Gini              ℓ(t)i     (22)
for DS/GPT, the difference in community-match                                    |Tlate| t∈Tlate
between high-SIM and low-SIM tertiles under low-
                                                Higher values indicate more focused specializationutility conditions; see footnote in Table 3 for Gem-
                                                        in the late stage of community formation.ini operational difference).
                           C  Concept–Metric Mapping andB.4   Utility and Adaptation Metrics
                                                     JustificationTotal and Average Utility.
                                         To ensure that simulated patterns reflect theoreti-
     XN                                          Utotal               cally grounded mechanisms rather than arbitrary             Utotal =    Ui,   ¯U =            (19)
                  N              computational artifacts, we provide a two-level                  i=1
                                       33152

## Страница 15

mapping: (1) ethnographic concepts to computa-   C.3  Justification of Metric Choices
tional metrics, and (2) generative propositions to
                                                 This section provides extended justification for thetheir quantitative operationalizations and diagnos-
                                                      operationalization choices summarized above.tic criteria.

                                                 C.3.1  P1: Lock-in ScoreC.1  Ethnographic Concept–Metric Mapping
                                Why Lock-in Score rather than raw specializa-Table 7 formalizes the correspondence between key
                                                   tion index?  P1 predicts that without central co-ethnographic constructs in From the Soil (Fei et al.,
                                                      ordination, individuals lock into specialized roles.
1992) and their computational representations.
                                               Lock-in Score is defined as the cosine similarity
                                             between an agent’s production allocation vector
  Ethnographic   Computational    Simulated     Phe-                                            and its skill vector (Appendix B). This directly Concept        Metric          nomenon
                                               measures whether specialization has occurred and  Differential       Relational   Dis-   Cooperation and pro-
 Order (Ch. 4)    tance        (dij)   posal intensity decay  stabilized: convergence to high values indicates
 The      “self-   extracted from the   predictably outward  specialization; near-zero per-round change indi-
  centered web”   dynamic   Social   from the ego-center.                                                      cates equilibrium. Alternative measures—such as                     Identity   Matrix
                  (SIM).                              Herfindahl index—capture specialization intensity
  Relational     SIM  Match  vs.  High-SIM  relations  but not its stability or alignment with skill. Lock-in
  Ethics (Ch. 8)     Utility Gap.          sustain  cooperation  Score captures both dimensions simultaneously.
  Rules of propri-                    and     community
  ety over law                        matching even under
                                        severe utility deficits.  C.3.2  P2: Community Match by SIM ×                                                                Utility  Elder Authority   Decision Author-   Authority   concen-
  (Ch. 11)            ity (Proposal adop-   trates in individuals Why community match rather than raw co-  Exchange-        tion rate normal-   providing   durable
  based power      ized by commu-   coordination,     de- operation frequency?  P2  predicts  that  rela-
                       nity).              coupled from sheer  tional obligation sustains cooperation under adver-
                                           verbosity.                                                                 sity. We partition agents by SIM level (high vs.
                                               low) and recent utility (high vs. low), then com-Table 7: Mapping between ethnographic constructs and
computational metrics.                              pare community match—the cosine similarity be-
                                            tween an agent’s skill vector and community de-
                                          mand—across these groups.
C.2  Proposition–Metric Mapping               Community match captures whether agents con-
                                                     tinue to align their labor with community needs,
Table 8 summarizes how each generative proposi-                                                       rather than merely engaging in interaction. Raw
tion is operationalized via a primary quantitative                                                  cooperation frequency would measure interaction
metric and a diagnostic criterion specifying the ex-                                            volume without distinguishing productive coopera-
pected empirical pattern under Differential Order.                                                       tion from empty gestures. The key test is whether
                                             high-SIM agents maintain community match under
        Table 8: Proposition–metric mapping.
                                            low utility while low-SIM agents do not.

       Primary Metric       Diagnostic Criterion
                                                 C.3.3  P3: Source–Target GroupP1     Lock-in Score (output–  High convergence with near-
          skill cosine)            zero per-round change             Decomposition
P2    Community  Match   Maintained    community
       gap  (high  vs.  low   match despite low utility    Why decompose DA and proposals by group
      SIM)                                      pairs?  P3 predicts ego-centric, distance-graded
P3   DA & Proposal Ac-   Within-family      >   cooperation.   We decompose  Decision Au-
          tivity            by                          >  cross-                 source–target   family→proself                                                        thority and Proposal Activity by source–target       group               pair                               family gradient
     DA density over                         time;   Proposal                                             intensity                                                     predictsP4                                               group pairs (within-family, family→proself, cross-         hierarchical             OLS                                 authority beyond                                                      identity                                                         or                                                     family). A monotonic gradient within-family >                              wealth
P5                     interac-   Joint conditioning of social          > cross-family constitutes direct      SIM×Family                               family→proself         tion (OLS)               identity and family on au-   evidence of the concentric structure predicted by
                                   thority                                                       Fei’s theory. This preserves the directional and
                                                       relational structure lost in aggregate measures.
                                       33153

## Страница 16

C.3.4  P4: DA Temporal KDE + OLS              Table 10: System prompt for agent role initialization.
Why combine distributional and regression ev-     System Prompt
idence?  P4 predicts that authority emerges en-    You are {agent_name}, a person with labor capacity and
dogenously. Two distinct claims require separate      your own preferences. Your decisions should be guided by                                                            your personal values (SVO), your relationships with others
tests:                                                                (identity matrix), and your desire to achieve personal and
1. Authority exists as a differentiated phenomenon     community goals. You will communicate, negotiate, and
                                                  make decisions about how to allocate labor for producing   (tested via temporal KDE showing persistent                                                                     essential resources. Your consumption preferences are:
    stratification).                                              [{preference_string}].
2. Authority  is emergent rather than ascribed
   (tested via OLS showing proposal intensity
                                                        ejb                   0.5) at initialization, which   predicts authority beyond identity, family, or      ∼Uniform(−0.5,                                                                is stored as an internal trait and subsequently in-   wealth).
                                                     jected into the agent’s contextual prompt duringNeither test alone suffices.
                                                 decision-making and social identity updates.
C.3.5  P5: SIM×Family Interaction             D.2.1 EC Perception PromptWhy the interaction term rather than main ef-
                                          The EC (Emotional–Cognitive) perception modulefects?  P5 predicts clan-based center–periphery
                                                     captures an agent’s subjective interpretation of indi-
stratification. The SIM×Family interaction tests    vidual observable actions performed by others. Forwhether social identity alignment with family mem-
                                              each public action in the previous turn, the agentbership jointly conditions authority. This follows
                                                    evaluates the action through its own beliefs, re-the standard notion of relational embeddedness
                                                     sources, skills, and social relationships, producing(Granovetter, 1985): advantage accrues not from
                                                 a multi-dimensional affective assessment.family or recognition alone, but from their align-
ment within the network. The disappearance of    D.2.2 ER Judgment Prompt
this interaction under complementary skills (β =                                         The ER (Ethical Resonator) module produces a
−0.089, n.s.) while strong under symmetric skills    holistic moral judgment of each other agent’s(β = 0.603∗∗∗) directly tests structure sensitivity.                                                      overall behavior within a single interaction round.
                                                Rather than evaluating individual actions in isola-D LLM and Reproducibility Details
                                                           tion, this module aggregates prior EC perceptions
D.1  Model Configuration                     and applies an agent-specific ethical orientation to
                                            form a unified moral assessment.
            Table 9: LLM Configuration
                                             D.3  Social Identity Matrix (SIM) Update
            Parameter    Value                     Mechanism
            Model       DeepSeek-V3              Agents update their social identity assessments
              Temperature   0.7                                                through an LLM-mediated evaluation process at             Top-p          0.9
          Max tokens   512                         the end of each interaction round. The Social Iden-
                                                                tity Matrix (SIM) records, for each agent pair, a
                                                         discrete identity level capturing trust and relational
D.2  Agent System Prompt                       closeness on an ordinal scale.
Each agent is initialized with a fixed system prompt      For each agent i, the SIM stores an identity level
that defines its role, decision principles, and subjec-    si,j ∈{1, 2, 3, 4, 5} for every other community
tive preferences. This prompt establishes the agent   member j, where higher values indicate stronger
as a socially embedded decision-maker whose be-    affiliation and trust.
havior is guided by personal values, social relation-                                                 D.3.1  A-BDI Intention Prompt
ships, and material preferences.
                                          The A-BDI (Agent Belief–Desire–Intention) mod-
Initialization Details.  For each agent, the place-   ule governs agents’ forward-looking decision-
holder {preference_string} is instantiated as a list   making. At the end of each turn, agents sequen-
of resource-specific consumption preferences, for-    tially update beliefs, desires, and intentions, where
matted to two decimal places. In addition, each    intentions constitute a concrete action plan for the
agent is assigned an ethical–judgmental bias value   subsequent turn.  This process integrates social
                                       33154

## Страница 17

Table 11: Prompt for EC-based subjective perception of
observed actions.
                                                       Table 12: Prompt for ER-based holistic moral judgment
 LLM Perception Prompt                                of agents.
 You are a social agent. Your task is to interpret another
  agent’s action from your own subjective perspective, based    LLM Judgment Prompt
 on your current beliefs, resources, and social relationships.     You are a social agent reflecting on the overall conduct of
 Context Provided:                                           another agent during the previous turn.
                                                        Context Provided:
      • Your family membership (if any);
                                                                                 • Your ethical–judgmental bias (EJB), indicating your
      • Your current skills and resource holdings;                        default moral orientation;

      • Your Social Identity Matrix (SIM), encoding existing             • Your Social Identity Matrix (SIM), encoding existing
        relationships and trust levels;                                     relationships and trust levels;

      • A unified factual record of all observable actions             • Your family membership (if any), skills, and resource
      from the previous turn.                                         holdings;

 Action to Interpret: The identity of the acting agent and a             • A summarized record of all actions performed by the
  textual description of the action performed.                              target agent in the last turn, paired with your own
 Task: Rate the action on the following five subjective              subjective perceptions of those actions.
  dimensions, each using an integer scale from 1 to 5:
                                                          Task: Form a holistic moral judgment of the target agent’s
     1. Evaluation: perceived benefit or harm to oneself;          overall behavior during the turn. The judgment should
                                                                synthesize patterns across actions and reflect your ethical
     2. Potency: perceived strength or weakness of the ac-        orientation.
         tor;                                               Outputs: Produce a single JSON object containing:

     3. Activity: perceived intensity or emotional activation             • moral_judgement: a brief (1–2 sentence) overall
        of the action;                                             moral evaluation of the agent’s conduct;

     4. Status-Conferral: perceived respect or status ac-             • ethical_attitude: one categorical label selected
       knowledgment;                                        from {Approbatory, Repressive, Restorative},
                                                                          indicating praise, condemnation, or corrective orien-
     5. Power-Assertion: perceived attempt to command,               tation.
        negotiate, or submit.
                                           No additional text or explanation is allowed outside the
 Output Format: Return a single JSON object containing     JSON object.
  the five ratings. No additional text or explanation is al-
  lowed.





                                       33155

## Страница 18

                                                           identity, moral judgment, emotional perception,
                                             and factual interaction history.

                                                        Table 14: Prompt for A-BDI intention generation.

                                   LLM Intention Prompt
                                                   You are a strategic social agent formulating a concrete plan
                                                                     for the next interaction round.
                                                        Context Provided:

                                                                                 • Your current Social Identity Matrix (SIM), encoding
                                                                                       allies, neutral agents, and adversaries;

                                                                                 • Your belief statement summarizing your perceived
Table 13: Prompt for updating Social Identity Matrix             social position and landscape;
(SIM) and BDI states.
                                                                                 • Your desire statement specifying your primary goals
 LLM Update Prompt                                                  for the next turn;
 As agent {agent_name}, review the events from the current
                                                                                 • Your holistic ethical judgments of other agents’ be-  interaction round to update your internal state and social
                                                                      havior from the previous turn;  relationships.
 Context Provided:                                                                                 • Your subjective emotional perceptions of others’ ac-
                                                                            tions (EC records);      • Personal profile, including ethical orientation and
      (when applicable) family membership;
                                                                                 • A unified factual log of all observable events from
                                                                        the previous turn.      • Current resource holdings and cumulative utility;
                                                          Task: Based on all contextual information above, generate      • Existing social identity levels for all community
                                                          your intentions for the next turn. The intentions should      members;
                                                                 describe a concrete and actionable plan, including:
      • A factual summary of the round’s discussion, pro-
                                                                                 • which agents to target or engage;       duction outcomes, and resource distribution.
                                                                                 • what communicative or strategic actions to take; Task: Update your Belief–Desire–Intention (BDI) state
 and revise social identity levels for all other community
                                                                                 • how these actions advance your stated desires. members based solely on the information above.
  Identity Update Rules:                                                   Output Format: Return a single string describing your
                                                                   intention statement. No additional text or formatting is
      • Identity levels must be integers in {1, 2, 3, 4, 5};          allowed.
      • Higher values indicate stronger trust and affiliation;

      • Updates should follow predefined upgrade and down-    D.4  Multi-Phase Interaction and Decision
       grade triggers grounded in social identity theory (e.g.,                                                        Pipeline       cooperation, commitment fulfillment, exploitation,
        or indifference).                           Each interaction round proceeds through a fixed
 Output Format: Return a single JSON object containing:    sequence of 4 phases.
      • an updated BDI state (beliefs, desires, intentions);      D.4.1  Phase 1: Community Detection
                                           At the beginning of each interaction round, agents      • updated identity levels for all other agents.
                                                      are partitioned into communities based on their cur-
 No additional text or formatting is allowed outside the     rent social relationships. This phase operational- JSON object.
                                                      izes endogenous community formation driven by
                                                        social identity rather than exogenous grouping.
                                         Network Construction. A weighted, undirected
                                              graph G = (V, E) is constructed over the set of
                                                     agents, where each node represents an agent. For
                                                each unordered agent pair (i, j), the Social Identity
                                                 Matrix (SIM) provides directed identity levels si→j
                                             and sj→i, each taking integer values in {1, . . . , 5}.                                          The average identity strength is computed as:
                                                                                                         ¯sij = si→j + sj→i .           (23)
                                                                 2
                                       33156

## Страница 19

Probabilistic Edge Formation.  Edges are added
                                                      Table 15: Prompt for public speech during negotiation.probabilistically based on social affinity. For each
pair (i, j), a base propensity for community linkage   LLM Speech Prompt
is defined as:                                     As {agent_name}, it is your turn to make a public speech
                                                                     to your community.
                                                        Context Provided:               pbaseij = 0.1   (¯sij               (24)                                     ·    −1),                                                                                  • Your current desires (from the A-BDI module);
where higher identity levels (4–5) induce stronger
                                                                                  • The list of community members;
connection tendencies, level 3 is neutral, and levels
1–2 correspond to weak or unlikely ties. A stochas-           • A summary of previous speeches in the current turn.
tic component is added to capture exploratory or                                                         Task: Freely communicate with the community. You may
opportunistic interactions:                                 express goals, react to others, ask questions, or remain
                                                                              silent.
                                                            Constraints: Your speech should be concise (0–3 sen-    pij = pbaseij + ϵ,   ϵ               λ),    (25)                  ∼Uniform(0,                     tences). An empty response indicates silence.
where λ is a configurable search randomness pa-
rameter. An edge between i and j is added with
                                                         Table 16: Prompt for labor allocation proposals.probability pij and assigned weight ¯sij.
                                    LLM Proposal PromptCommunity Partitioning.  Given the resulting                                                   You are coordinating with your community to achieve your
weighted graph, communities are identified using       goals.
the Louvain modularity maximization algorithm.     Context Provided:
This yields a partition of agents into disjoint com-                                                                                  • Your personal profile (ethical orientation, family
munities that maximize within-group social cohe-          membership);
sion as measured by identity-weighted connectiv-                                                                                  • Your current BDI state (beliefs, desires, intentions);
ity.
                                                                                  • Community members and your social identity levels
Community Assignment.  Each agent  is  as-          toward them;
signed to exactly one community per round. Com-                                                                                  • Your preferences and labor skills;
munity membership is stored and used to scope sub-
sequent negotiation, coordination, and production            • Public speeches and proposals made so far in this
                                                                               turn.
phases. Community composition is therefore en-
dogenous, dynamic, and directly shaped by evolv-     Task: Formulate your own labor allocation plan and op-
                                                                       tionally suggest up to three plans for other agents.ing social identities.                                                    Output Format: Return a single JSON object specifying:
D.4.2  Phase 2: Negotiation Phase                              • your own labor allocation plan;
The negotiation phase consists of up to a fixed num-                                                                                  • zero to three suggested plans for other agents.
ber of discussion rounds within each community.
Each round includes (i) public speeches and (ii)
proposal-based coordination over labor allocation.
                                                       Table 17: Prompt for final labor allocation decision.
Public Speech Prompt.  In the first step of each                                    LLM Final Decision Prompt
discussion round, agents may issue a public speech        It is time to finalize your labor allocation for the current
visible to all community members. The speech is      round.
optional and limited to concise free-form commu-     Context Provided:
nication.                                                                     • Public speeches made this turn;
Proposal Prompt.  In the second step, agents gen-           • Proposals directed to you during negotiation;
erate concrete labor allocation plans for themselves                                                                                  • Your personal profile (ethical orientation and family
and may optionally propose plans for up to three           membership).
other agents.
                                                        Task: Decide your final labor allocation. The allocation
D.4.3  Phase 3: Labor Division Decision Phase     must sum to 1.0.                                                   Output Format: Return a JSON object containing your
After negotiation concludes, each agent indepen-       final reasoning and labor allocation.
dently finalizes a binding labor allocation decision.
                                       33157

## Страница 20

D.4.4  Phase 4a: Production                    Preference-weighted    redistribution.  Each
                                                 agent i has a nonnegative preference weight pi(r)Given a binding labor allocation, each agent de-
                                                         for each resource r. Define total preference weightterministically produces resources as a function of
                                                   within community g:(i) a resource-specific production unit and (ii) its
current skill. Let   denote the resource set. For        X         R                                          Pg(r) =     pi(r).           (30)
agent i at round t, let li,t = (li,t(r))r∈RP    be its labor                                                                                 i∈Igallocation with li,t(r)     and         li,t(r) = 1.           ≥0      r∈RLet si,t =            denote its labor skill vec-   Agent i’s share ratio for resource r is:           (si,t(r))r∈R
       =tor,                                  (   and let b                       be the resource-specific              (b(r))r∈R                                                                                          pi(r)     if Pg(r) > 0,                                                                               Pg(r),production            unit                 (a                   fixed configuration                                                                                                (31)                                     parameter).            αi,g(r) =
                                                                            0,      otherwise.
Production function.  Production for each re-
source r is computed as:                      The redistributed amount received by agent i is
                                                      then:
 yi,t(r) = b(r) li,t(r) log 1 + si,t(r)  , ∀r ∈R.                   xi,t(r) = αi,g(r) Yg,t(r).        (32)                                            (26)                                                  After clearing, agent i’s resource holdings are in-
This implies diminishing returns in skill via the
                                               cremented by xi,t = (xi,t(r))r∈R.log(1 + s) term, while output is linear in labor
allocation and the base production unit.            Degenerate case.   If |Ig| ≤1 (a singleton com-                                                  munity), no pooling/redistribution occurs and the
Resource update.  Produced goods are immedi-   agent simply keeps its produced goods.
ately added to the agent’s private resource holdings:
                                                 D.4.6  Phase 4c: Consumption and Utility
 Ri,t(r) ←Ri,t(r) + yi,t(r),    ∀r ∈R. (27)    In the consumption phase, each agent converts                                                       redistributed resources into utility via a Leontief-
Skill accumulation (learning-by-doing).  After    style (bottleneck) utility rule implied by the imple-
production, skills increase additively by the time    mentation. Let Ri,t =             denote agent                                                                        (Ri,t(r))r∈R
allocated to each resource:                                 i’s resource holdings immediately before consump-
                                                             tion, and let pi = (pi(r))r∈R denote its preference
                                                        vector. si,t+1(r) =  si,t(r) + li,t(r),    ∀r ∈R. (28)
Thus, allocating labor to a resource both produces   Per-round utility.  Define resource-to-preference
that resource in the current round and increases    ratios:
future productivity on that dimension.                                 (Ri,t(r)                                                                                                                   ,   if pi(r) > 0,                                                                                          pi(r)  The realized production vector yi,t is recorded             ρi,t(r) =                            (33)
                                                                                                             if pi(r) = 0.as the agent’s turn-level output for logging and for              +∞,
downstream clearing.                         The per-round utility is the minimum ratio across
                                                     resources:D.4.5  Phase 4b: Clearing (Pooling and
                                                                                    ui,t = min ρi,t(r),           (34)       Redistribution)                                                           r∈R
The clearing phase pools produced goods at the   with the convention that if all ρi,t(r) = +∞(i.e.,community level and redistributes them proportion-   pi(r) = 0 for all r), then ui,t = 0.
ally to agents’ consumption preferences. Let g be     The limiting resource (bottleneck) is:
a community and Ig its set of agents.                            r⋆i,t     min ρi,t(r).          (35)                                                 ∈argPooling.  For  each  resource  r            the                      r∈R                       ∈  R,community-level pot is:                      Consumption rule.  Given ui,t, the agent con-
       X                    sumes each resource proportionally to its prefer-
              Yg,t(r) =      yi,t(r).          (29)   ence weights:
                         i∈Ig
                                                                      ci,t(r) = ui,t pi(r),    ∀r ∈R.    (36)
In code, each agent first contributes all produced                                                Resources are updated by subtracting consumption:
goods to the pot (removing them from private hold-
ings), and then receives a redistribution share.                   Ri,t(r) ←Ri,t(r) −ci,t(r).       (37)
                                       33158

## Страница 21

Cumulative and average utility updates.  Cu-
mulative utility is updated additively:

                Ui,t = Ui,t−1 + ui,t.          (38)
The implementation also maintains the running av-
erage utility per round. Let t be the number of
completed rounds for agent i and let ¯ui,t be the
average utility after round t. Then:
                                                     Figure 7: GPT-4o-mini simulation: Convergence of
                    (t      + ui,t                                                          global division of labor under symmetric (left) and com-                 ¯ui,t =   −1)¯ui,t−1          .       (39)
                               t                         plementary (right) skill structures.
This phase contains no LLM calls and is fully de-
terministic given prior allocations and clearing out-                                                          3. LLM Sampling: Model temperature is set to
comes.                                                      0.7 (Table 9), introducing response variability.
                                                   This is held constant across all conditions.D.5  Randomness and Reproducibility
The simulation incorporates several sources of    Replication Protocol.  Each experimental condi-
stochasticity, each controlled to ensure repro-    tion is repeated five times with independent random
ducibility across experimental runs.                  seeds. Results reported in the main text represent
                                           means and standard errors across these replications.
Global Random Seed. A global seed (SEED=42)                                        Community orderings are sorted deterministically
is used throughout the codebase.  This seed is                                                     post-detection to eliminate hash-order artifacts.
passed to:
• The Louvain community detection algorithm  E  Cross-Model Robustness
  (random_state or seed parameter), ensuring de-
  terministic community partitions given identical   E.1  Robustness Check for Global Division
  identity matrices;                                  Lock-in Rate (P1)
• Python’s built-in random module for skill pool   To verify that the convergence of global division is
  shuffling during agent initialization.               not specific to the language model architecture, we
                                                         replicate the core experiments replacing DeepSeekStochastic Components.  Three primary sources
                                                with GPT-4o-mini, holding all experimental set-of controlled randomness exist:
                                                        tings constant.1. Agent Initialization: Consumption preference
                                                   Figure 7 shows the resulting dynamics. Under   vectors are sampled from a symmetric Dirich-
                                                  both symmetric and complementary skill structures,
    let distribution:  pi ∼  Dir(13).   Ethical–   global division lock-in again converges to a high   Judgmental Bias (EJB) values are drawn uni-
                                                       stable level, with complementary skills exhibiting
   formly: ejb ∼Uniform(−0.5, 0.5).  Skill as-    faster and higher convergence—mirroring the main-   signments within each group are randomly per-
                                                         text pattern. This suggests that Proposition 1 re-  muted before allocation.
                                                            flects a structural property of the interaction dy-2. Community Edge Formation: For each agent
                                              namics rather than model-specific behavior.   pair (i, j), edge inclusion in the community net-
  work follows:                               E.2  Robustness Check for Guanxi as
                                              Economic Ethics (P2)
     P(edgeij) = 0.1(¯sij −1)              We further test Proposition 2 by replicating the
                                         P2 experiments with GPT-4o-mini as the baseline          + λ  ϵ,   ϵ              1)                                 ·     ∼Uniform(0,        model, keeping all interaction protocols and evalu-                                            (40)
                                                      ation metrics unchanged.
  where ¯sij is the average SIM identity level and      Figure 8 presents the community match rates
  λ = 0.3 is the search_randomness parameter.   across recent utility levels. In both symmetric and
   This introduces exploratory variation in commu-   complementary settings, high-SIM relations sys-
   nity formation while preserving identity-based    tematically outperform low-SIM relations, partic-
   structure.                                          ularly when recent utility is low. This gap holds
                                       33159

## Страница 22

                                                                                        (a) Symmetric skills Setting.


                      (a) Symmetric skills.





                                                                                 (b) Complementary skills Setting.

                                                     Figure 9: Decision authority (boxplots, left axis) and
                                                       proposal activity (bars, right axis) across source–target
                                                    group pairings under symmetric (a) and complementary
                                                            (b) skill settings, with Proself, F1, and F2 as target
                  (b) Complementary skills.                                                        groups.

Figure 8: Community match rates by recent utility sta-
tus, for family groups (F1, F2) and non-family agents
                                                      to lack a self-centered cooperative core, instead(Proself), under low- and high-similarity (SIM) rela-
tions. Error bars indicate 95% confidence intervals.       aligning with family-originated proposals, which
                                                     reinforces their role as flexible collaborators em-
                                             bedded within family-based structures.
for both family agents (F1, F2) and Proself agents,                                       Some quantitative differences emerge in cross-
and the attenuation of SIM effects under comple-                                             group proposal flows. The asymmetry whereby
mentary skills persists. The consistency across                                                  family agents direct disproportionate proposals to-
models indicates that guanxi’s role as an economic                                           ward Proself agents is slightly attenuated under
ethic—buffering cooperation against short-term                                              GPT-4o-mini, particularly in the complementary
utility fluctuations—is robust to the underlying lan-                                                                skill setting. However, this variation affects magni-
guage model architecture.                                                      tude, not direction: the concentric pattern of rela-
                                                        tional decay anchored at family relations persists
E.3  Robustness Check for Relational Decay of                                                   across both authority acceptance and proposal ac-
     Cooperation (P3)                                                                   tivity.
To verify that the relational decay pattern is not spe-     This indicates that Proposition 3 is robust to the
cific to DeepSeek’s architecture, we replicate the    choice of language model. The organizing princi-
P3 experiments using GPT-4o-mini as the baseline    ple of cooperation—graded relational decay cen-
model, holding all protocols and metrics constant.    tered on family relations—remains stable despite
  Figure 9 shows the authority acceptance and   modest variation in the intensity of cross-group
proposal  distributions.    Family  agents  (F1,   proposal asymmetries.
F2) again exhibit the strongest internal cohe-
sion—highest within-family acceptance and pro-                                              E.4  Cross-Model Summary
posal rates coupled with minimal cross-family en-
gagement—suggesting that cooperation remains   Table 18 presents the principal cross-model com-
organized around family boundaries rather than in-   parisons from the main analysis; complete ablation
dividual preference types. Proself agents continue    coefficients are deferred to Appendix F.
                                       33160

## Страница 23

Table 18: Cross-model proposition-level robustness    tures (symmetric/complementary).  We report
summary.                                               module-removal results (w/o EC, w/o ER) and BDI-
                                                only baselines under the same initialization proto-
                     P1   P2   P3   P4   P5
                                                    col used in main experiments (five random seeds
    DS Full       ✓  ✓  ✓  ✓  ✓                                                   per condition).    GPT Full      ✓  ✓∗  ✓  ✓  ✓
     Gemini Full     ✓   ✓§  ✓  ✓  ✓†
    DS BDI-only     ✓‡    n/a  ×  ×  ×         F.1  Summary Matrix Across Conditions and
    GPT BDI-only    ✓‡    n/a  ×  ×  ×           Models
     Gemini BDI-only  ✓‡    n/a  ×  ×  ×
       ✓= supported;  = absent/collapsed.            Table 19 consolidates key metrics across full mod-              ×
     ∗GPT shows positive guanxi stickiness (P2 gap           els, production structures, and ablation conditions.
= +0.03–0.04); DeepSeek and Gemini show negative/absent
                                         The coefficients reveal how affective (EC→SIM)  stickiness (Gemini gap = −0.038∗). All three maintain a               clear               P3                      in-group SIM                                       gradient.                                            and ethical (ER→SIM) pathways vary in weight§P2 pattern present                   but                        directionally                                     inverted                                                 relative to GPT;                                                   across models, yet jointly contribute to the emer-          aligns with DeepSeek’s non-sticky profile.
 †Gemini P5:                        is directionally positive but    gence of relational order.         SIM×Fam→Auth non-significant (β = 0.089, p = 0.193) in full architecture;
                    absent in BDI-only.
‡Lock-in preserved. Social quality degradation varies: sharp    F.2  Ablation Design
     collapse              in           DS/GPT (DA                     −70%,                                    proposals −83%);  moderate           but                directional                            in Gemini                          (DA                                               proposal    To isolate the distinct contributions of affective per-                             −39%,
 volume −13%). WGCS coherence loss for Gemini is most    ception and ethical judgment to relational identity
      pronounced under w/o ER rather than BDI-only.        formation, we implement three progressively re-
                                             duced architectures:
Divergent Pathways, Convergent Structure.
Three architecturally distinct models—DeepSeek-   w/o EC.  Removal of the Empathy Core elimi-
V3,   GPT-4o-mini,   and   Gemini-2.5-flash-   nates five-dimensional affective perception. With-
lite—exhibit    heterogeneous    psychological    out EC input, the Ethical Resonator must generate
pathways yet converge on identical macro-level   moral judgments solely from factual action descrip-
structures  (P1–P5).    GPT-4o-mini  operates    tions and static agent attributes (SIM, resources,
through an affective-evaluation-dominant pathway    family membership).
(βEC→SIM =  2.216∗∗∗, βER→SIM =  −0.002n.s.), whereas DeepSeek-V3 employs a  joint   w/o ER.  Removal of the Ethical Resonator dis-
affective-ethical mechanism (βEC→SIM = 0.748∗∗,   connects affective perception from moral aggrega-
      =  0.573∗∗∗), and Gemini-2.5-flash-    tion. EC evaluations are generated but do not prop-βER→SIMlite   relies   primarily  on   ethical-judgment    agate to SIM updates via ethical attitude signals
(βEC→SIM = 0.069∗∗, βER→SIM = 0.186∗∗∗).         (Approbatory/Repressive/Restorative); relational
  Despite these mechanistic divergences, all three    identity evolves instead through direct factual and
models reproduce the P3 concentric cooperation    affective information only.
gradient and P4 authority stratification. Notably, P2
presents a dissociation: GPT-4o-mini exhibits posi-   BDI-only Baseline.  Simultaneous removal of
tive guanxi stickiness (gap > 0), while DeepSeek   EC, ER, and SIM leaves agents with only the BDI
and Gemini show negative or neutral gaps (Gemini    decision module, retaining access to factual inter-
gap = −0.038∗). The fact that P3–P4 convergence    action history, resource holdings, skill levels, andpersists despite P2 divergence—across models with    family membership. This constitutes a Vanilla BDI
distinct RLHF regimes—suggests that relational or-    architecture: agents still reason through natural lan-
der emerges from architectural constraints rather   guage LLM calls, but without any social-cognitive
than uniform fine-tuning pressures.                  processing of affective or ethical content.
F  Full Ablation and Baseline Analysis       F.3  Per-Dyad EC→SIM Regression (Full                                               Model)
This section provides complete ablation and base-
line results referenced in Section 6.6, spanning   Table 20 tests whether affective evaluation (EC)
three model families (DeepSeek-V3, GPT-4o-mini,    causally influences relational identity (SIM) at the
Gemini-2.5-flash-lite) across two production struc-   dyad level across all three models.
                                       33161

## Страница 24

Table 19: Cross-model and ablation summary. EC→SIM and ER→SIM coefficients from per-dyad specifications;P2 gap = high-SIM/low-utility minus low-SIM/low-utility community-match difference.

         Metric              D/B    D/C    G/B    G/C    Gm/B    No-EC   No-ER   BDI
      EC→SIM β           0.30∗∗∗  0.25∗∗∗  0.64∗∗∗  0.50∗∗∗  0.091∗∗∗    absent     0.17    absent
      ER→SIM β           0.06∗∗∗  0.09∗∗∗  0.65∗∗∗  0.54∗∗∗  0.221∗∗∗   0.15∗∗∗    absent   absent
         P5: SIM×Fam→Auth  0.099∗∗  −0.018  −0.001  −0.018  0.089 n.s.  0.107∗∗∗  −0.010  absent
        P2 gap              −0.017  −0.010  +0.037  +0.029  −0.038∗   −0.006  −0.035    n/a
Notes: D = DeepSeek-V3, B = balanced, C = competitive; G = GPT-4o-mini; Gm = Gemini-2.5. No-EC, No-ER, and BDI
ablations use symmetric endowments with DeepSeek-V3 baseline (Gemini ablations follow identical protocol). Gemini P2
gap calculated via median-split community-match under low utility (Full: gap=−0.038, SE=0.017, p = 0.024). Significance:∗p < 0.05, ∗∗p < 0.01, ∗∗∗p < 0.001.

Table 20: Per-dyad regression of SIM identity level    fect attenuates to non-significance (β = 0.170),
on EC evaluation scores. DV: standardized SIM iden-                                                      indicating that ER sentiment aggregation is neces-
tity_level.   IV: standardized ec_eval_z.   Controls:                                                    sary to sustain the affective-to-relational mapping.
same_family dummy, EC×family interaction, turn fixed     GPT-4o-mini exhibits a different configuration:effects.
                                                          affective evaluation dominates (βEC→SIM = 2.216)
                DS-V3   GPT-4m  Gem-2.5        while continuous ER sentiment shows no signif-
                                                      icant contribution (β         However, when     ec_eval_z (β)  0.30∗∗∗    0.64∗∗∗   0.091∗∗∗                                                ≈0).     same_family   1.32∗∗∗    1.04∗∗∗   1.790∗∗∗      EC  is  ablated, ER  activates a compensatory
     ec × family   −0.31∗∗∗−0.056∗∗∗  0.053∗∗         continuous-sentiment channel (β = 0.498), sug-
   N            2784      2636     2594          gesting that GPT’s ethical module operates primar-
    R2             0.49       0.57      0.814            ily through categorical attitude states (Approba-
  Note: DS-V3 = DeepSeek-V3; GPT-4m = GPT-4o-mini;     tory/Repressive/Restorative) unless forced to rely
  Gem-2.5 = Gemini-2.5-flash-lite. All three models show
      significant          pathways (p < 0.001), with       on dimensional sentiment in the absence of EC          EC→SIM GPT-4o-mini exhibiting the strongest affective-evaluation     input.
coefficient (β = 0.64) and Gemini the weakest (β = 0.091).      Gemini-2.5-flash-lite presents a third patternThe     negative                            interaction                                       in DeepSeek                                           and GPT          EC×Family   reflects          a ceiling                      effect:                         family relations                                         already start                                                              at     where ethical judgment dominates: the ER→SIM   elevated SIM levels (βfamily ranging from 1.04 to 1.79),      coefficient  (0.186)  is  nearly  three  times  the
   constraining upward adjustment via EC. Despite these                                                                    effect (0.069), and removing ER abol-   quantitative differences in pathway intensity, all models    EC→SIM
confirm the same directional mechanism: affective evaluation    ishes both pathways (EC→SIM becomes −0.022          systematically shapes relational identity.               n.s.). This confirms that for Gemini, Durkheimian
                                                        ethical resonance—the aggregation of moral atti-
                                                  tudes—constitutes the primary driver of relational
F.4  Cross-Model Ablation Dissociation                                                         identity formation.
     (Extended)                                              These divergent mechanistic implementations,
                                                      replicated across three models with distinct train-Table  21  decomposes  how  three   distinct
                                                    ing data and fine-tuning regimes, yet all convergingarchitectures—DeepSeek-V3,     GPT-4o-mini,
                                            on identical P1–P5 macro-structures, suggests that
and Gemini-2.5-flash-lite—navigate the EC→SIM    relational order emerges from architectural con-
and ER→SIM pathways under module ablation.    straints on social-cognitive processing rather thanBy comparing  full-model  coefficients  against
                                            from uniform RLHF biases.w/o EC and w/o ER conditions, we can identify
whether affective evaluation and ethical judg-                                                    F.5  Progressive Ablation: Degradation
ment operate as substitutable or complementary                                                     Analysis
mechanisms in each system.
                                         To characterize how relational structure degrades
  The ablation patterns reveal three distinct op-                                                    as social-cognitive modules are removed, Table 22
erational profiles. DeepSeek-V3 employs a joint                                                     tracks key behavioral indicators across ablation
affective-ethical pathway: both EC (β = 0.748)                                                    conditions for all three models (symmetric endow-
and ER (β = 0.573) independently contribute to                                                   ments).
SIM updating in the full model, suggesting partial
mediation where EC influences SIM both directly   Ethical Resonator as Structural Bottleneck.
and via ER. When ER is removed, EC’s direct ef-   Removing ER generates a  distinctive  pattern:
                                       33162

## Страница 25

     Table 21: Pathway coefficients and model-fit statistics across ablation conditions (symmetric endowments).

                 EC→SIM    (SE)   ER→SIM    (SE)   SIM×Fam→Auth    (SE)   N
             DeepSeek-V3
                Full         0.748∗∗     (0.32)    0.573∗∗∗    (0.15)         0.070         (0.11)   540
             w/o EC    —    —      1.021∗∗∗    (0.22)         0.029         (0.13)   540
             w/o ER      0.170      (0.19)   —    —          0.042         (0.05)   540
              GPT-4o-mini
                Full        2.216∗∗∗    (0.51)    −0.002     (0.12)        0.106∗         (0.06)   540
             w/o EC    —    —      0.498∗∗∗    (0.14)       −0.197        (0.15)   540
             w/o ER     −0.127∗    (0.07)   —    —          0.181         (0.16)   540
                Gemini-2.5-flash-lite
                Full         0.069∗∗    (0.025)   0.186∗∗∗    (0.032)        0.089         (0.068)   540
             w/o EC    —    —       0.061∗    (0.029)        0.097         (0.144)   540
             w/o ER     −0.022    (0.062)   —    —         −0.070        (0.076)   540
                 All Models: BDI-only
              BDI-only     absent   —       absent   —           absent†     —     540
                  †BDI-only condition: SIM absent from agent state; pathway coefficient mechanically zero.





          Table 22: Behavioral indicators across progressive ablation conditions (symmetric endowments).

Indicator           DS Full  DS w/o EC  DS w/o ER  DS BDI  GPT Full   Gemini Full   Gemini w/o ER   Gemini BDI
Self-proposals (%)        56        62         51        86        56          33.8            36.0†            37.6
Cross-family proposals     59        45         55         1        59     3030 (66.2%)    2877 (64%)    2626 (62.4%)
DA mean (no-self)        0.186      0.160        0.252       0.056      0.186        0.382           0.387           0.234
SIM×Fam→Auth β     0.099∗∗     0.029      −0.010      absent     0.106∗      0.089 n.s.      −0.070 n.s.        absentGroup matching          0.848      0.810        0.825       0.803      0.848        0.785§           0.775           0.823§
WGCS (F1)↓             0.487      0.510        0.540       0.590      0.487        0.480           0.617           0.455
          Note: Lower WGCS indicates more coherent within-group coordination. †Gemini self-proposals calculated as
    100 −other-directed %. §Gemini group matching uses HS/LU community-match metric. Single-module removal produces              modest degradation; complete module removal causes discontinuous collapse of relational structure.





                                         33163

## Страница 26

raw decision authority increases (DeepSeek-V3    uated pattern—authority declines 39% (0.382 →
DA rises from 0.186 to 0.252), yet this author-   0.234) and proposal volume drops 13% (3030 →ity becomes relationally undifferentiated.  The   2626)—suggesting baseline differences in cooper-
SIM×Family interaction effect vanishes (β =    ation propensity, but the directional weakening of
−0.010 n.s.), indicating that while agents propose    relational structure persists across all three archi-more frequently, they no longer calibrate author-    tectures.
ity based on relational identity.  This suggests
                                          P3–P5:  Relational Structure Collapse.  Thethat ER functions as an irreplaceable filter: with-
                                                       concentric-circle gradient observed in Full models
out ethical judgment aggregation, authority loses
                                               (DeepSeek: within-family 34.2%,its concentric structure. Gemini exhibits a paral-                                 family→proself                                             34.3%, cross-family 6.9%) collapses under BDI-
lel degradation—within-group coordination coher-
                                                  only into isolated self-interest: self-proposals surge
ence (WGCS) deteriorates sharply from 0.480 to
                                                        to 86% (from 56% in Full), and cross-family coor-
0.617 (p < 0.001) when ER is removed, confirm-
                                                     dination effectively vanishes.
ing that ethical-judgment processing is necessary
                                           The mechanism of  utility  stratification also
for maintaining coherent group coordination.
                                                     diverges.  BDI-only exhibits larger F1–Proself
Partial Compensation and System Collapse.    utility gaps than Full, but these emerge from
                                                     production-rational skill accumulation without re-The remaining module provides limited compen-
                                                           lational moderation; Full gaps are instead driven bysatory capacity when one pathway  is ablated.
                                                                        pathways. Only the FullDeepSeek without EC shows             coeffi-                                          SIM×Family→Authority                   ER→SIM                                                       architecture generates identity-structured authoritycient strengthening to 1.021∗∗∗; Gemini without
                                                      rather than merely amplifying LLM-native coop-EC retains a diminished but significant ER ef-
                                                       erative tendencies. This mechanistic distinctionfect (0.061∗).  However,  this compensation is
                                                  holds across all three models.asymmetric and incomplete: when both modules
are removed (BDI-only), all three models exhibit                         G  Detailed Analysis of Decision Authoritydiscontinuous collapse—self-proposals surge to
86% (DeepSeek) or plateau at 37–38% (Gem-   G.1  Stepwise Regression Analysis:
ini), cross-family proposals plummet, and the        Mechanisms of Authority
                pathway disappears  entirely.                                         To isolate the behavioral drivers of authority for-SIM×Fam→AuthThis indicates that EC and ER are jointly necessary                                              mation from static status attributes, we estimate
for sustaining relational social structure; neither                                                   stepwise regressions introducing proposal intensity,
alone can preserve the full architecture of concen-                                            communication frequency, and group conformity
tric cooperation.                                                      sequentially after baseline controls (Table 24).
                                            The introduction of proposal intensity produces
F.6  BDI-Only Detailed Comparison                                                a discontinuous gain in explanatory power: R2
P1: Lock-in without Social Calibration.   Strip-   jumps from approximately 0.10 to 0.70 across both
ping away EC and ER reveals which aspects of di-    skill structures, suggesting that active task-proposal
vision of labor are native to LLM decision-making    behavior constitutes the primary behavioral foun-
and which require social-cognitive processing. Ta-   dation of authority allocation. Coefficients remain
ble 23 compares Full and BDI-only architectures    stable across symmetric (β = 0.820∗∗∗) and com-
across all three models.                           plementary (β = 0.780∗∗∗) conditions, indicat-
  Despite comparable lock-in rates (DS: 0.971   ing robustness to production structure. By con-
vs. 0.979; GPT: 0.971 vs. 0.979; Gemini: 0.833     trast, group conformity and communication inten-
vs. 0.833), BDI-only agents achieve specializa-    sity contribute marginally and non-significantly in
tion as isolated utility-maximizers rather than as    full specifications.
members of coordinated groups. The degradation      Notably, social identity (SIM) loses significance
is quantitative: other-directed proposals plummet   once proposal intensity is controlled (β = 0.084
from 44% to 14% in DeepSeek and GPT, and de-    n.s. in symmetric; β = −0.039 n.s. in comple-cision authority over non-self targets drops 70%   mentary), despite significance in baseline models.
(0.186 →0.056). Within-group coordination co-   This attenuation suggests that relational identityherence (WGCS) deteriorates significantly (0.487    influences authority primarily through increased
→0.590). Gemini shows a parallel though atten-   proposal activity rather than through direct status
                                       33164

## Страница 27

    Table 23: Division quality metrics: Full architecture versus BDI-only baseline (symmetric endowments).

  Metric                DS Full    DS BDI    GPT Full    GPT BDI     Gemini Full   Gemini BDI
 Group matching               0.848      0.803∗∗∗       0.848       0.803∗∗∗        0.785§         0.823§
 WGCS (F1)↓                  0.487       0.590∗∗        0.487        0.590∗∗         0.480        0.455 n.s.  Other-directed proposals (%)     44          14          44          14            66.2           62.4
 DA mean (no-self)             0.186    0.056 (−70%)     0.186     0.056 (−70%)      0.382      0.234 (−39%)
  Note: Lower WGCS indicates higher within-group coordination coherence. ∗∗p < 0.01, ∗∗∗p < 0.001 (Full vs. BDI-only).
 §Gemini group matching uses P2-aligned median-split community-match; directional interpretation consistent across models.

                  Table 24: Stepwise OLS: Determinants of standardized decision authority.

                                   Symmetric Skills                  Complementary Skills
                             Base   +Conform   +Prop      Full     Base   +Conform   +Prop      Full

     Behavioral Variables
     Proposal Intensity                            0.819∗∗∗  0.820∗∗∗                     0.780∗∗∗  0.780∗∗∗
     Communication Intensity                                0.046                             −0.005
     Group Conformity               −0.088   −0.044   −0.049          −0.046    0.029     0.029
      Status & Utility
     Accumulative Utility      0.170     0.151     0.107     0.096   −0.028  −0.118    0.163     0.161
      Social Identity (SIM)     0.214∗∗  0.218∗∗∗    0.068     0.084   −0.176  −0.160   −0.039   −0.039
     Family Dummy           0.012   −0.041   −0.124   −0.135   0.639∗    0.587∗     0.087     0.086
     Time FE                 Yes      Yes       Yes      Yes      Yes      Yes       Yes      Yes
     Observations             540      540      540      540     540      540      540      540
    R2                       0.104     0.110     0.696     0.697    0.100     0.102     0.688     0.688
     Adj. R2                  0.047     0.052     0.675     0.676    0.043     0.043     0.667     0.666
       Note: Standard errors clustered at group level. Significance: ∗p < 0.1, ∗∗p < 0.05, ∗∗∗p < 0.01.

deference.  Similarly, family effects, prominent    trolled (β ≈0 n.s.), and group conformity con-in complementary baseline models (β = 0.639∗),    tributes no additional explanatory power across
disappear after controlling for proposal behavior    specifications. Expressive participation and norm
(β = 0.086), indicating that kinship structures au-   alignment thus appear peripheral to authority differ-
thority largely through differential engagement in    entiation compared to instrumental task-proposal
task proposals under conditions of skill interdepen-   engagement.
dence.
                                          Mediated Status Effects.  Social identity (SIM)
Proposal Intensity as Primary Driver.  Proposal   and family membership exhibit baseline associ-
intensity exhibits the strongest association with de-   ations with authority in restricted models (SIM:
cision authority across both skill structures (Sym-  β = 0.214∗∗in symmetric; Family: β = 0.639∗
metric: β ≈0.82, p < 0.01; Complementary:    in complementary), but these attenuate to non-
β ≈0.78, p < 0.01).  Its inclusion triggers a    significance upon introducing proposal controlsdiscontinuous jump in explanatory power from   (β = 0.084 and 0.086, respectively). Similarly, ac-
R2 ≈0.10 to R2 ≈0.69, indicating that approxi-   cumulative utility remains non-significant through-mately 60 percentage points of variance in authority    out. This pattern suggests that identity and status in-
allocation is attributable to agents’ task-proposal    fluence authority primarily through behavioral me-
engagement. This establishes a robust behavioral   diation—increasing proposal propensity—rather
correlation: agents who advance more proposals    than through direct deference mechanisms.
that enter collective decision-making accumulate
                                                   Interpretation.  Behavioral engagement, specifi-higher decision authority, regardless of whether
                                                      cally proposal intensity, accounts for the substan-
this reflects causal influence, reputational accumu-
                                                                   tial majority of explained variance in authority al-
lation, or endogenous role selection.
                                                       location, while direct effects of identity, kinship,
Communication and Conformity.  In contrast,   and accumulated resources are comparatively weak
communication intensity shows no significant ef-   once negotiation participation is taken into account.
fect on authority once proposal behavior is con-   This dominance of procedural engagement over
                                       33165

## Страница 28

Table      25: Interaction                      Effects of                               Social Identity                                       (SIM)                                                    the SIM×Family interaction is significant in ei-and Family            Status on Decision                             Authority                                       (with and                                                with-                                                      ther specification, and the (weak) baseline family
out behavioral controls).                                                        effect (β = 0.542, p = 0.054) disappears after
                                                adding behavioral controls. This suggests that, un- Dep. Var:                           Decision Authority (Std.)
                                                  der functional differentiation, identity-based sig-                      Symm. Setting        Comp. Setting
                             Interaction  +Behavior  Interaction  +Behavior   nals provide limited incremental explanatory power
                                                         for authority once negotiation behavior is taken into Core variables
 Social Identity (SIM)     −0.296   −0.016   −0.112    0.034    account.                        (0.213)    (0.051)    (0.146)    (0.063)
                        0.298 Family Dummy                              −0.050                                            0.542∗   −0.040                        (0.243)                                   (0.075)                                             (0.281)                                                        (0.115)   Interpretation of the R2 shift.  The large in-
 SIM × Family          0.603∗∗∗    0.114    −0.089   −0.089   crease in explanatory power after adding behav-
                        (0.223)    (0.090)    (0.244)    (0.099)    ioral controls should not be read as identifying a
 Controls
 Accumulative Utility       0.127     0.099               0.103    causal mechanism by itself. Rather, it shows that                                       −0.031
                        (0.301)    (0.189)    (0.351)    (0.123)   proposal behavior accounts for the majority of ob- Proposal Intensity                  0.820∗∗∗            0.777∗∗∗
                                   (0.044)              (0.029)   served variance in authority, and that identity ef-
                                  0.041 Communication Intensity                                                −0.003    fects in reduced-form specifications may be partly                                   (0.042)                                                        (0.029)
 Turn FE                   Yes        Yes        Yes        Yes     mediated by (or statistically collinear with) behav-
 Observations               540        540        540        540      ior. This motivates treating identity–authority cou-
 R2                        0.113       0.696       0.100       0.687
 Adj. R2                    0.055       0.675       0.041       0.666    pling as a contingent, interaction-level regularity
 Note: Cluster-robust standard errors are in parentheses. All continuous vari-   whose strength depends on how behavioral roles
 ables       are          Z-standardized.                         All                         models                                     include turn fixed effects. Significance:    are endogenously distributed. ∗p <                   ∗∗∗p       0.1,         ∗∗p < 0.05,               < 0.01.
                         H   Utility Distributions
ascriptive status motivates subsequent qualitative
analysis of negotiation role dynamics.

G.2  Interaction Analysis: Identity and
     Authority
Table 25 examines whether decision authority fol-
lows a relational logic in which prestige (SIM) and
kin membership jointly condition authority. In the
interaction-only specification (without behavioral
controls), the symmetric setting shows a strong
positive interaction between SIM and family status
(β = 0.603, p = 0.007), while the main effects
of SIM and family status are not significant. This
pattern is consistent with an interpretation in which
recognition translates into authority more strongly
when it is embedded in kin-centered relations.
  However, once behavioral controls are intro-
duced (+Behavior), this interaction effect atten-
                                                      Figure 10: Kernel density estimates (KDE) of cumula-uates and becomes statistically insignificant in the                                                                 tive utility across agent groups and experimental condi-
symmetric setting (β = 0.114, p = 0.209).  In                                                                  tions. The distributions reveal how skill composition re-
parallel, proposal intensity exhibits a large and    shapes economic inequality: from rigid hierarchy under
robust positive association with authority in both   symmetry to diffused advantage under complementarity.
settings (Symm.: β = 0.820∗∗∗; Comp.: β =
0.777∗∗∗), and model  fit increases substantially      Figure 10 visualizes the distributional conse-
(R2 ≈0.69). Together, these results indicate that   quences of network stratification under symmet-
much of the apparent identity–authority alignment    ric versus complementary skill conditions. Three
in the interaction-only model is not independent of    patterns merit attention.
behavioral engagement in negotiation.                   First, the center–periphery structure is en-
  In the complementary setting, neither SIM nor   coded in distribution morphology. Under sym-
                                       33166

## Страница 29

metric  skills, F1 occupies the high-utility  tail    similarity toward others. However, the authority
(mean: 51.0) while F2 and Proself cluster at the    distribution no longer forms a distinct convex cor-
lower range (means: 42.4 and 42.9) with substan-    ner. Instead, elevated authority is spread along the
tial overlap. The sharp, narrow peak of F2 suggests   upper portion of the identity space, suggesting a
homogeneous structural disadvantage rather than   weaker and less localized coupling between iden-
internal heterogeneity.                                      tity and authority.
  Second, complementarity induces a systemic     The DeepSeek-based simulations show a broadly
rightward shift. All distributions move toward    similar  pattern under  the symmetric  setting
higher utility ranges under complementary skills    (Fig. 11, bottom-left), where a clear convex cor-
(F1: 54.5; F2: 46.9; Proself: 47.6), reflecting pro-   ner appears in the upper-right region of the identity
ductivity gains from cross-group coordination. No-   space and coincides with higher authority contours.
tably, F2 and Proself distributions become more   Compared to the GPT-based results, this region of
dispersed, indicating divergent individual trajec-   elevated authority spans a somewhat wider area,
tories within previously homogeneous peripheral    indicating a more diffuse but still concentrated
groups.                                               identity–authority coupling.
  Third, the hierarchy persists but blurs. De-    By contrast, under the complementary setting in
spite absolute gains for all groups, F1 maintains    the DeepSeek-based simulations (Fig. 11, bottom-
relative advantage. However, the reduced separa-    right), the authority contours shift toward the lower-
tion between peaks suggests that functional dif-    left region of the identity space. In this configu-
ferentiation partially decouples structural position    ration, agents with lower similarity toward others
from economic outcome—a mechanism consistent   and lower similarity received from others occupy
with the authority–efficiency tradeoff discussed in    regions of higher decision authority, revealing an
Section 6.5.                                        inversion of the identity–authority alignment ob-
  These distributional patterns corroborate the core    served under symmetric production.
findings without introducing new qualitative mech-     Taken together, these results indicate that across
anisms; we present them here to document the ro-   both language models, complementary production
bustness of inequality structures across aggregation    settings are associated with a loosening of the
levels.                                               identity–authority coupling at the final stage of
                                                          interaction, whereas symmetric production settings
I  Additional Results on                         consistently give rise to a concentrated alignment
   Identity–Authority Distributions          between identity recognition and authority. While
                                                      the precise geometry of the authority surface varies
Figure 11 summarizes the joint distributions of   by model, the structural contrast between symmet-
perceived social identity and decision authority    ric and complementary settings remains robust.
at Turn 30 under symmetric and complementary
production settings, comparing GPT-based and   J  Pre-defined Structural Conditions and
DeepSeek-based simulations. Contours indicate      Emergent Outcomes
estimated levels of decision authority, while mark-
                                         To clarify the boundary between model assump-ers denote group-level averages for F1, F2, and
                                                        tions and simulation outcomes, we distinguish pre-Proself agents.
                                                   defined structural conditions from emergent inter-   In the GPT-based simulations under the symmet-
                                                      actional patterns. The former correspond to cross-ric setting (Fig. 11, top-left), the highest decision
                                                          culturally documented features of pre-market socialauthority is concentrated in the upper-right region
                                                     organization, while the latter arise endogenouslyof the identity space, corresponding to agents with
                                            from agent interaction dynamics.both high similarity toward others and high similar-
ity received from others. The authority surface ex-                         K  Full Comparison of Mechanical vs.
hibits a pronounced convex corner in this region, in-                                           Organic Solidaritydicating a strong concentration of authority tightly
coupled with mutual identity recognition.          Taken together, the results from Propositions 1–
  Under the complementary setting in the GPT-   5 demonstrate that stable division of labor, re-
based simulations (Fig. 11, top-right), high author-    lationally structured cooperation, and authority
ity contours remain aligned with higher levels of    stratification can emerge endogenously from re-
                                       33167

## Страница 30

Table 26: Pre-defined structural conditions vs. emer-     Authority stratification emerges endogenously
gent outcomes. Pre-defined conditions map onto cross-                                                through repeated agenda-setting behavior rather
culturally documented features; emergent outcomes                                                 than through ascriptive status alone. Proposal in-arise from interaction dynamics.
                                                        tensity is the dominant predictor of decision au-
                                                           thority, while communication, accumulated util-  Pre-defined   (structural  Emergent (from interac-
  conditions)                   tion)                              ity, and identity have no independent effects (Sec-
  Family membership        Community structure          tion 6.4). However, under symmetric skills, au-
  Initial SIM                  Cooperation decay gradient     thority becomes relationally conditioned: agents
  Skill distribution (symmet-   Authority stratification                                          whose social recognition is embedded within fam-  ric / complementary)
 Consumption  preferences   Role differentiation (Hawks     ily relations disproportionately occupy central au-
  (Dirichlet)                             / Doves / Elders)              thority positions, producing a clan-shaped center–
 EJB bias               SIM evolution trajectories
                                                  periphery structure (Section 6.5). In this context,  Kinship protection floor      Center–periphery economic
                                 structure                   inward-oriented relational stability may entrench
                                                        structural disadvantage rather than guaranteeing
                                            economic dominance.
peated interaction, even in the absence of ex-     Taken together, these patterns closely corre-
plicit cultural rules or institutionalized authority.   spond to Durkheim’s concept of mechanical soli-
Crucially, however, these emergent structures are    darity. Social order is grounded in similarity and
not invariant. Instead, differences in production    shared obligations, cooperation is organized around
structure—specifically, symmetric versus comple-   bounded relational groups, and authority acquires
mentary skill endowments—systematically reshape    legitimacy through its embedding in moral and re-
how division of labor, relational ethics, coopera-    lational structures rather than through functional
tion boundaries, and authority become coupled. As    indispensability.
a result, identical micro-level cognitive and inter-    By contrast, under the complementary-skill
actional mechanisms generate distinct modes of    condition, production roles are differentiated and
social integration under different structural condi-   mutually interdependent. Structural complemen-
tions.                                                      tarity accelerates the convergence of division of
  Table 27 summarizes the structural contrasts ob-   labor and sustains higher levels of specialization
served across the two experimental settings.           stability while preserving internal diversity (Sec-
  Under the symmetric-skill condition, produc-    tion 6.1). Although relational ethics continue to
tion roles are highly substitutable, and functional   matter—high-SIM relations still display greater re-
differentiation provides limited coordination ad-    silience under low utility—their stabilizing role is
vantages. In this setting, social integration relies   moderated by task interdependence, as coopera-
heavily on relational ethics and group-based obli-    tion becomes increasingly anchored in functional
gations rather than efficiency gains from special-   necessity rather than identity-based obligation (Sec-
ization. Consistent with this logic, division of la-    tion 6.2).
bor converges to a stable configuration but does so      Relational boundaries do not disappear, but they
more slowly than under complementary skills, with   become more elastic.  Family-centered coopera-
specialization clustered within family-centered re-    tion remains visible, yet cross-family collaboration
lational circles (Section 6.1).                          increases, and exclusionary decay patterns are soft-
  Relational  ethics play a  central  stabilizing   ened (Section 6.3). Authority formation remains
role. High-similarity (high-SIM) relations main-   strongly agenda-driven: actors who repeatedly set
tain strong participation in community-based pro-   proposals accrue disproportionate decision author-
duction even when recent utility is low, indicating     ity, regardless of identity or accumulated utility
that guanxi operates as an economic ethic that con-   (Section 6.4). Unlike the symmetric case, the in-
strains short-term self-interest (Section 6.2). Coop-    teraction between social identity and family mem-
eration follows a sharply graded relational decay:   bership no longer conditions authority, indicating
authority acceptance and proposal activity peak    that functional differentiation weakens the coupling
within families and drop substantially across oppos-   between relational prestige and structural power
ing family boundaries, while Proself agents align    (Section 6.5).
their cooperation with existing family structures      This configuration aligns more closely with
rather than forming an independent core (Figure 5).   Durkheim’s notion of organic solidarity, in which
                                       33168

## Страница 31

Table 27: Structural contrast between mechanical (symmetric skills) and organic (complementary skills) solidarity.

 Aspect             Symmetric Skills                    Complementary Skills                  Evidence
 Division of labor     High  lock-in  with  slow  convergence;  Faster convergence and higher lock-in with    Sec. 6.1
                         specialization stabilized within relational  greater internal diversity
                      groups
 Relational ethics      High-SIM relations sustain participation de-  Ethical stickiness persists but is moderated    Sec. 6.2
                           spite low utility; ethics override efficiency   by task interdependence
 Cooperation structure  Sharp relational decay centered on family  Relational boundaries persist but become    Sec. 6.3
                        boundaries; strong in-group dominance      less exclusionary and more elastic
 Authority mechanism  Authority emerges through agenda control  Authority  remains  agenda-driven  with    Sec. 6.4
                        but is amplified by relational embedding    weaker relational conditioning
 Stratification pattern   Clan-based center–periphery reinforced by  Persistent stratification with attenuated clan    Sec. 6.5
                          identity–relation alignment                 coupling


social integration emerges from interdependence    automatically translate into agenda-setting power.
among differentiated roles. Authority remains strat-   For interpretive clarity, we refer to this pattern as
ified, but its distribution is less tightly bound to    the Atlas Paradox.
clan-based identity and more weakly constrained      In Greek mythology, Atlas is condemned to hold
by relational embedding.                        up the sky, bearing the weight that keeps the world
  From this comparison, differential order should    stable, while possessing no power to govern it. We
not be understood as a fixed cultural template, but    use this metaphor to describe a structurally similar
as a generative social logic whose concrete mani-    situation in CAREB-MAS: agents who absorb the
festation depends on production structure. Under   burden of stabilizing collective coordination may
mechanical solidarity, it takes the form of concen-   sustain the system, yet remain separated from the
tric, clan-centered hierarchies sustained by ethical    authority to define collective decisions.
obligation and relational recognition. Under or-
                                             Adaptive Adjustment.  We quantify adaptive ad-ganic solidarity, the same logic is reconfigured into
                                                 justment as the change in an agent’s community
a more fluid hierarchy in which authority remains
                                                 alignment following the negotiation phase:
unequal but is less tightly anchored to family-based
                                                                                                                                           i,t ,        (41)prestige.                                             ∆Mi,t = Mposti,t −Mpre  From a computational perspective, these findings
                                           where Mprei,t  and Mposti,t  denote the Communitydemonstrate that LLM-driven multi-agent simula-
                                          Match scores for agent i at round t before and af-tions can do more than reproduce stylized macro-
                                                              ter negotiation. A positive ∆Mi,t indicates that anlevel patterns from classical social theory. By
                                                 agent has adjusted its role to better fit communitysystematically varying structural conditions while
                                           demand, thereby contributing to collective stabil-holding micro-level cognitive mechanisms con-
                                                                     ity. At the system level, ∆Mi,t is positive in moststant, the simulations provide a controlled testbed
                                                  rounds, indicating that negotiation generally im-for examining how different modes of social in-
                                                 proves global coordination.tegration emerge, persist, and transform. In this
sense, the results offer computational support for   Authority–Adjustment Decoupling.  To assess
both Durkheim’s theory of solidarity and Fei Xi-   whether adaptive adjustment is rewarded with deci-
aotong’s concept of differential order, while clar-   sion authority, we estimate regressions predicting
ifying the structural conditions under which each    subsequent decision authority while controlling for
becomes dominant.                                   prior authority, expected future utility, ingroup in-
                                                      teraction intensity, mismatch pressure, turn fixedL  The Atlas Paradox:                                                             effects, and—critically—proposal intensity as a di-
   Authority–Adjustment Decoupling                                                         rect measure of agenda-setting power. Results are
This appendix examines the relationship between    reported in Table 28.
adaptive role adjustment during negotiation and     Across both production structures, proposal in-
the accumulation of decision authority. Formally,    tensity is the strongest and most stable predictor of
we characterize the observed pattern as authority–   decision authority, confirming the main-text find-
adjustment decoupling: improvements in collective    ing that authority in CAREB-MAS primarily ac-
coordination through adaptive adjustment do not    crues through agenda control. Once agenda-setting
                                       33169

## Страница 32

             Table 28: Adaptive Adjustment and Decision Authority Across Production Structures

                                      Dependent Variable: Decision Authority (Standardized)
                                                 Baseline Models            Controlled Models

                                       Symmetric  Complementary  Symmetric  Complementary

               Adaptive Division
               Adaptive Adjustment (Z)     −0.148∗∗     −0.084∗∗     −0.059       0.079∗∗
                 Structural Controls
               Ingroup Ratio (Z)             0.000         0.017       −0.033      −0.008
              Mismatch Pressure (Z)        0.328∗∗∗      −0.059        0.092      −0.176∗∗∗
                Future Utility (MA, Z)         0.154         0.003         0.131         0.185
                Past Authority (MA, Z)        0.033       −0.136        0.099       −0.105
             Agenda Control
               Proposal Intensity (Z)                                     0.820∗∗∗      0.786∗∗∗

              Turn Category Fixed Effects     Yes          Yes          Yes          Yes
               Observations                 540          540          540          540
           R2                           0.096         0.092         0.697         0.696

  Notes: Decision authority is standardized. All models include turn category fixed effects. Standard errors are clustered at
  the group level. Due to cluster-robust variance estimation with high-dimensional fixed effects, F-statistics are not reported.
  Significance levels: ∗p < 0.10, ∗∗p < 0.05, ∗∗∗p < 0.01.


power is taken into account, the relationship be-    tional fit is penalized when roles are clearly differ-
tween adaptive adjustment and authority depends    entiated. In symmetric systems, mismatch pressure
systematically on production structure.             has no comparable effect, consistent with the ab-
  Under symmetric skill conditions, adaptive ad-   sence of assignable responsibility in homogeneous
justment has no independent effect on decision au-    role structures.
thority. In these functionally homogeneous settings,
                                                  Interpretation.  Taken together,  these resultsrole flexibility is treated as a baseline requirement
                                         show that adaptive adjustment reliably improvesrather than a distinctive capacity. Agents who ab-
                                                       collective coordination, but does not constitute asorb coordination costs help maintain collective
                                               primary pathway to authority. Authority remainsstability, but this stabilizing labor remains politi-
                                               anchored in agenda-setting power, while coordina-cally invisible. In the terms of the Atlas Paradox,
                                                      tion labor is structurally positioned as supportiveagents may “hold up the sky,” yet gain no additional
                                                         rather than governing. The Atlas Paradox thus high-influence over collective decisions.
                                                           lights a persistent division between maintaining so-
  Under complementary skill conditions, adap-                                                            cial order and directing it. By making this division
tive adjustment becomes positively associated with                                                             explicit, the analysis clarifies how center–periphery
decision authority after controlling for proposal                                                      structures can persist alongside efficiency gains,
intensity. Functional differentiation makes adjust-                                            and how different production structures condition
ment capacity observable and attributable, allowing                                                     the political visibility of coordination work.
adaptive competence to enter authority formation
as a secondary signal. Importantly, this effect does                     M  Micro-Political Dynamics of
not replace agenda control. Instead, it supplements                                                Negotiationit: agents who can both define proposals and absorb
coordination costs occupy the most advantaged po-   This appendix provides qualitative evidence sup-
sitions. Here, the Atlas Paradox is mitigated but not    porting the micro-level mechanisms discussed in
eliminated—stabilizing the system is recognized,   Sections 6.1–6.5 and Section L. By examining rep-
but agenda-setting power remains paramount.         resentative negotiation utterances alongside behav-
  Mismatch pressure further clarifies this struc-    ioral regularities, we illustrate how authority and
tural contrast.  In complementary systems, per-    stratification emerge through interactional role dif-
sistent misalignment is negatively associated with    ferentiation rather than formal designation, cultural
authority, indicating that failure to maintain func-    scripts, or institutional rules.
                                       33170

## Страница 33

                                            Symm.                                                 Symm.
     Hawk   Dove    Elder    Proself                 Hawk   Dove    Elder    Proself
       “I’m glad to see the continued fo-                                    “I echo your commitment to trust
      cus on Resource C from Agents 05,                 and unity, and I’d like to focus on
      15, and 17. Let’s ensure our fam-                     deepening collaboration with our
         ily’s labor allocation reflects both        Agent04         Core Allies while also reaching          Agent08
      our immediate needs (Resource C)                      out to Neutral Outsiders to build                                                 F1                                                        F2
     and our commitment to supporting                       stronger ties. Let’s work together to
       trusted allies’ Resource B produc-                     ensure everyone feels valued and
        tion where possible.”                                        included.”

H1                                                   D1
                                                Comp.                                                     Comp.
      “As always, my priority is supporting                        “Let’s focus on building trust and
      Family F1, but I’m open to working                      supporting each other—especially
       with Agents 07–18 who demonstrate                       within our core group—while remain-
       consistent cooperation, particularly      Agent04           ing open to positive collaboration        Agent07
                                                                  with others.”     on Resource C production where I                                                                                                           F2                                                 F1
      can contribute most effectively.”                   D2

H2
                                                     Table 30: Dove coordination-oriented utterances used
Table 29: Hawk agenda-setting utterances used in the    in the argument (D1–D2).
argument (H1–H2).
                                                                                                          Comp.
                                                Hawk   Dove    Elder    Proself
                                                             “While I support the focus on Re-
  Across both symmetric and complementary skill          source B, I also recognize the value
settings, negotiation does not converge toward ho-           of Resource C for our community’s
                                                                                  stability. Let’s work together to allo-     Agent16
mogeneous participation. Instead, interaction stabi-          cate our efforts wisely to meet both        –
lizes into distinct functional roles—Hawks, Doves,             priorities.”
and Integrative Elders—whose differentiated con-    P1
tributions jointly sustain cooperation, coordination,
and authority. These roles are not fixed identities,   Table 31: Proself-oriented utterance used for contrast
but recurrent patterns of discourse, proposal be-    (P1).
havior, and relational positioning that repeatedly
appear over time.
                                              Doves.  Doves emphasize communication, inclu-
                                                      siveness, and cross-group openness.  Their dis-
M.1  Ideal-Typical Roles in Negotiation          course frequently addresses multiple audiences si-
                                                  multaneously, stressing trust, fairness, and mutual
Hawks.  Hawks are characterized by frequent                                                   recognition rather than concrete agenda control
agenda-setting attempts  that  prioritize family-                                                      (see D1–D2).
centered interests, articulate normative boundaries,
                                                         Quantitatively, communication intensity alone
and condition cross-group cooperation on trustwor-
                                              does not robustly predict authority once proposal
thiness and value alignment. Their utterances typi-
                                                 behavior is accounted for (Section 6.4). Dove be-
cally foreground internal solidarity while explicitly
                                                  havior thus appears oriented toward coordination
managing the limits of external engagement (see
                                            and relational smoothing rather than agenda dom-
H1–H2).
                                                    inance. Doves facilitate information flow and re-
  These utterances illustrate how Hawks actively                                              duce overt conflict, but do not, by themselves, con-
shape the negotiation agenda by asserting bound-                                                        solidate decision authority.
aries and priorities. Importantly, consistent with
the regression results in Section 6.4, such proposal    Proself-Oriented Positioning.  For contrast, Pro-
activity is positively associated with subsequent de-    self agents frequently combine expressions of loy-
cision authority. Hawks do not merely symbolize    alty with explicit articulation of personal or func-
cohesion; through repeated agenda-setting, they oc-    tional priorities. Their utterances embed economic
cupy central positions in the political economy of    rationality within relational language without con-
negotiation, even when their proposals emphasize    verging on authority-holding roles (see P1).
conservative or family-oriented goals.               Such statements highlight flexibility and strate-
                                       33171

## Страница 34

                                            Symm.                                                     Comp.
     Hawk   Dove    Elder    Proself                 Hawk   Dove    Elder    Proself
      “Thank you all for the enthusiastic                                “I’d like to propose a joint production
      support of the joint project proposal!                         effort between my in-group (Agents
       Let’s continue this momentum by                     08–12) and trusted collaborators
        finalizing the details—I suggest we      Agent05              like Agent15, while ensuring we also    Agent07
      focus on Resource A production                     meet Resource C needs.”                                                 F1                                                        F2
        this turn to align with our shared
      consumption needs. Agent07 and                E2
      Agent12, would you be open to co-                                                               Comp.
       leading this initiative with me?”
                                                                                              “I propose we focus on transparent
E1                                                              labor allocations that demonstrate
                                                            our commitment to both in-group
Table 32: Integrative Elder intervention under symmet-         cohesion and equitable community      Agent12
                                                                    collaboration. Let’s lead by exampleric skills (E1).                                                                                             F2                                                                          in building a resilient and inclusive
                                                              resource-sharing system.”
gic alignment but lack the agenda-setting consoli-    E3
dation characteristic of authority-bearing roles.
                                                     Table 33: Integrative Elder brokerage-oriented propos-
Integrative Elders.   Integrative Elders are distin-    als under complementary skills (E2–E3).
guished by selective intervention, high proposal
effectiveness, and broad cross-group recognition.
                                                         Integrative Elders consolidate coordination into de-Rather than engaging continuously, they typically
                                                           cisive, widely recognized proposals.intervene after extended discussion by Hawks and
                                                         Crucially, this qualitative structure aligns withDoves, consolidating prior coordination into con-
                                                    the quantitative finding that proposal intensity iscrete, low-friction proposals (see E1–E3).
                                                    strongly and positively associated with authority  Under symmetric skills, Elder authority tends to
                                                   (Section 6.4), while communication and adaptiveemerge within family cores, where dense relational
                                                  adjustment alone are insufficient to secure decisionties enable rapid coordination:
                                                power. Authority emerges not from dominance or  This intervention exemplifies Elder dynamics:
                                                  compliance, but from repeated recognition of effec-it follows broad discussion, proposes a specific
                                                           tive agenda-setting within a relationally structuredallocation, and recruits cross-family collaborators.
                                                     negotiation environment.Such proposals are disproportionately likely to be
                                                   This interactional differentiation also underpinsaccepted and to generate higher marginal utility,
                                                    the Atlas Paradox (Section L). Agents who pri-contributing to durable authority concentration.
                                                 marily absorb coordination and adjustment costs  Under complementary skills, Elder-like author-
                                                         stabilize collective outcomes without displacingity  is less clan-centered and more brokerage-
                                                     authority centers, while those who repeatedly setoriented. Multiple agents may occupy integrative
                                            and consolidate agendas accumulate durable au-positions by aligning functional complementarities
                                                            thority. Differential order thus arises as a politicalwith relational trust:
                                                  equilibrium sustained through functional role dif-   Together, these utterances illustrate how Integra-
                                                        ferentiation rather than explicit hierarchy.tive Elders under complementary skills operate as
                                                       Overall, the micro-political evidence presentedcoordination brokers rather than clan anchors. Au-
                                                 here demonstrates how stable authority, stratifi-thority accrues to those who repeatedly succeed
                                                       cation, and division of political labor emerge en-in integrating heterogeneous production needs into
                                                dogenously from interaction, providing the qualita-coherent collective action.
                                                          tive foundation for the macro-level patterns docu-
M.2  Negotiation, Authority, and Political       mented in the main text.
      Equilibrium
                           N  Empirical CorrespondenceTaken together, the Hawk–Dove–Elder configura-
tion constitutes the micro-political foundation of   This appendix explores the correspondence be-
differential order in CAREB-MAS. Hawks stabi-   tween our five propositions (P1–P5) derived from
lize internal cohesion and agenda focus through    Fei Xiaotong’s Differential Order Pattern and cross-
frequent proposal activity; Doves maintain com-    cultural ethnographic evidence. It also explicitly
municative connectivity and relational openness;    states the falsification criteria for our mechanis-
                                       33172

## Страница 35

Figure 11: Joint distributions of perceived social identity and decision authority at Turn 30 under symmetric and
complementary production settings. Panels compare GPT-based and DeepSeek-based simulations. Contours indicate
estimated decision authority, and markers denote group-level averages for F1, F2, and Proself agents.


tic model. The concept–metric mapping in Ap-   exchange further supports this, showing that re-
pendix C serves as the bridge between ethnographic    lational obligation overrides short-term material
vocabulary and computational variables.              calculation. Our results substantiate this idea, with
                                                  kin groups (F1, F2) showing a consistent prefer-
N.1  P1–P2: Division of Labor and Relational    ence for internal cooperation, even when resource
      Ethics                                            stress could incentivize self-interested withdrawal
                                                   (Figures 4). These findings suggest that relational
The emergence of stable division of labor without                                                        ethics embedded in kinship networks play a signif-
centralized coordination (P1) corresponds to exten-                                                      icant role in sustaining cooperation in rural soci-
sive anthropological documentation of spontaneous                                                              eties.
specialization in pre-state societies. For instance,                                                          Falsification criterion:  If ethnographic cases
Sahlins’ (Sahlins, 1972) analysis of the "domestic                                                     consistently show that production specialization
mode of production" demonstrates that household-                                                       in pre-market kinship societies is centrally coordi-
level production specialization emerges primarily                                                  nated rather than emergent, or that close-kin coop-
from kinship obligations, rather than from market                                                     eration collapses as readily as distant-kin cooper-
incentives. Our simulations align with this view:                                                     ation under resource stress, P1–P2 would be un-
division lock-in steadily increases across rounds,                                                 dermined. Our simulation outcomes and the ethno-
stabilizing without the need for centralized control                                                 graphic documentation of spontaneous kin-based
(Figure 3).                                                       specialization support the robustness of P1–P2, in-
  The persistence of cooperation under adver-                                                       dicating that they are not easily falsified by contrary
sity among relationally close agents (P2) parallels                                                   evidence.
Sahlins’ tripartite reciprocity model, wherein gen-
eralized reciprocity (open-ended sharing among                                            N.2  P3: Relational Decay of Cooperation
close kin) sustains cooperation precisely when
balanced-reciprocity logic would predict with-   The concentric gradient of cooperation intensity
drawal.  Mauss’ (Mauss, 1925) analysis of gift   (P3) is supported by the “segmentary principle”
                                       33173

## Страница 36

documented across African, Melanesian, and Mid-    tence. In our experiments, authority is concentrated
dle Eastern societies (Fortes and Evans-Pritchard,    in the hands of family groups, particularly those
1940).  In segmentary lineage systems, political   with higher proposal effectiveness (Table 1). This
allegiance and economic cooperation follow ge-   supports Proposition 5, which asserts that authority
nealogical distance:  closer segments cooperate    stratification emerges as a result of both relational
against more distant ones, producing a nested, ego-   recognition and individual competence.
centered cooperation structure that closely parallels       Falsification criterion: If authority in pre-market
Fei’s concentric circles. Our simulation results re-   kinship societies is found to be overwhelmingly
veal similar patterns of cooperation, where family    ascriptive, determined solely by birth order, gender,
groups exhibit high in-group cooperation and lower    or lineage seniority, without any emergent compo-
cooperation with other groups, especially as rela-   nent from social interactions, the agenda-control
tional distance increases (Figures 5 and 4).         mechanism underlying P4–P5 would be challenged.
   This pattern of relational decay mirrors Sahlins’   Our findings support the idea that authority forma-
and Fortes’ insights that kinship distance influ-    tion is an emergent process, linked to social recog-
ences cooperation intensity. We find that family    nition and competence, rather than being purely
groups (F1 and F2) show strong internal solidarity,    ascriptive.
while Proself agents, who represent less relationally
                                            N.4  Scope Conditionsbound actors, function as more flexible collabora-
tors across groups. This outcome underscores the   Our mechanistic account applies specifically to
concentric nature of cooperation as proposed in P3.   pre-market, acephalous, kinship-organized soci-
   Falsification criterion:  If cooperation in doc-    eties. We do not claim that Differential Order pat-
umented pre-market societies follows territorial    terns emerge under all structural conditions. The
proximity,  resource  complementarity,  or  ran-   complementary-skills condition already demon-
dom association rather than kinship distance, the    strates systematic attenuation of clan-based strati-
relational-decay mechanism would be falsified.    fication (P5), suggesting that increased functional
Our findings indicate that cooperation, in line with    differentiation—often a hallmark of market integra-
kinship ties, tends to decay across relational dis-   tion—weakens the relational coupling that sustains
tance, as proposed in P3, making it robust against    Differential Order. This finding is consistent with
the falsification criterion.                          both Durkheim’s transition from mechanical to or-
                                                  ganic solidarity and Fei’s analysis of the pressures
N.3  P4–P5: Authority Stratification and                                                   of modernization. In our simulations, we observe
     Center–Periphery Structure                                                          that when skill complementarity increases, the tra-
The emergence of authority through agenda-setting    ditional kinship-based stratification patterns begin
rather than ascription (P4) corresponds to the    to dissipate in favor of more functionally interde-
“big man” system documented in Melanesian so-   pendent structures (Figures 10, 6).
cieties (Sahlins, 1972).  Leaders gain influence       Falsification criterion: If ethnographic evidence
through their demonstrated ability to organize   shows that Differential Order patterns persist under
collective action and redistribute resources, not    conditions of high market integration, strong cen-
through hereditary position. Our results confirm     tral authority, or other forms of societal complexity,
this model, where decision authority emerges in the    this would challenge our claim that these patterns
simulation through repeated proposal and coordi-   are specific to kinship-based, pre-market societies.
nation actions. Table 1 shows that higher proposal   The evidence from our experiments supports the
activity correlates strongly with increased author-   idea that Differential Order is contingent on the
ity, suggesting that authority is contingent on the    relational structures present in kinship societies,
effectiveness of one’s actions, rather than merely    suggesting that these patterns are not universal but
ascribed based on social position.                   highly sensitive to underlying social organization.
  The coupling of kinship position with social
                                            N.5  Concluding Remarksrecognition in authority formation (P5) mirrors
Fortes and Evans-Pritchard’s (Fortes and Evans-   Our empirical correspondence demonstrates that
Pritchard, 1940) analysis, where authority in seg-   the patterns of rural social order identified by Fei
mentary systems accrues to those whose lineage   Xiaotong can emerge from general social mecha-
position aligns with demonstrated social compe-   nisms without the need for culture-specific insti-
                                        33174

## Страница 37

tutional rules. The CAREB-MAS model provides
computational evidence for the spontaneous emer-
gence of stable labor division, relational ethics, and
authority stratification, with structural outcomes
varying according to production conditions. These
findings reinforce the notion that Differential Order
is a dynamic, structure-sensitive outcome rather
than a fixed cultural template. The scope condi-
tions, empirical correspondence, and falsification
criteria for this claim are further discussed in the
Section 7 and Appendix N.





                                       33175
