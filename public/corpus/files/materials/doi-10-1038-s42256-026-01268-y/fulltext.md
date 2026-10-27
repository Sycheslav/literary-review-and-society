---
id: doi-10-1038-s42256-026-01268-y-text
type: material
title: Capable language models can outgrow the benefits of collaboration
work_id: doi-10-1038-s42256-026-01268-y
source_url: https://www.nature.com/articles/s42256-026-01268-y.pdf
retrieved_at: '2026-10-27'
conversion: pdf_text_extraction
quality_note: Текст извлечён из PDF с сохранением номеров страниц. Порядок колонок,
  таблицы, формулы и подписи могут быть искажены; рисунки доступны по ссылке на PDF.
  Это текстовая конверсия, не визуально эквивалентный оригинал.
language: original
sha256_text: f4f7f1faccd19c41ab1dd09540181fa9af61ce262b9a8b9244132e510c416d2d
---

> Источник: [https://www.nature.com/articles/s42256-026-01268-y.pdf](https://www.nature.com/articles/s42256-026-01268-y.pdf). Текст извлечён из PDF с сохранением номеров страниц. Порядок колонок, таблицы, формулы и подписи могут быть искажены; рисунки доступны по ссылке на PDF. Это текстовая конверсия, не визуально эквивалентный оригинал.

## Страница 1

nature machine intelligence


Article                                                                               https://doi.org/10.1038/s42256-026-01268-y
Capable language models can outgrow the
benefits of collaboration



Received: 20 December 2025            Yubin Kim        1,2    , Ken Gu        1, Chanwoo Park2, Chunjong Park        3,
                                Samuel Schmidgall3, A. Ali Heydari1, Yao Yan1, Zhihan Zhang        1,
Accepted: 4 June 2026                                Yuchen Zhuang3, Yun Liu1, Mark Malhotra1, Paul Pu Liang2, Hae Won Park2,
Published online: 24 July 2026              Yuzhe Yang        1, Xuhai Xu        1, Yilun Du1, Shwetak Patel1, Tim Althoff1,
                                      Daniel McDuff         1  & Xin Liu         1 
  Check for updates

                                    Agents, language model-based systems that can reason, plan and act with
                                       tools to accomplish tasks, are widely deployed, yet it remains unclear
                             when multi-agent coordination outperforms a strong single agent. Here
                            we conduct a controlled experiment that holds task prompts, tools and
                              compute budgets constant while varying only coordination structure and
                              model capability. Across 260 configurations spanning six benchmarks, five
                                      architectures and three LLM families, we derive a predictive model using
                                     empirical coordination metrics. Across benchmarks, single-agent baseline
                                 performance emerges as the most robust predictor of whether coordination
                                  improves or decreases performance. In particular, we identify an empirical
                                        capability-saturation threshold beyond which additional agents are unlikely
                                    to improve performance. This threshold correctly predicts the effect of
                                     multi-agent coordination on performance in 94% of validation configurations
                              on SWE-bench Verified and Terminal-Bench. We therefore interpret this
                                    threshold as a practical selection rule rather than a universal scaling
                                         principle. A second effect, baseline-scaled error amplification, survives
                                       cluster-robust inference (Probust = 0.030) and supports the failure-mode
                                 taxonomy. The fitted model achieves cross-validated R2 = 0.373 (0.413 with a
                                   task-grounded capability metric) and selects the best architecture in 87% of
                                     held-out configurations. These results provide a quantitative framework for
                                   within-domain architecture selection and for estimating when multi-agent
                                    coordination is likely to improve performance or add overhead.



Agents1, language model-driven systems that operate through iterative   enable parallel exploration and add verification. Promising claims
cycles of reasoning, planning and acting, adapting their behaviour based  have followed, including the slogan ‘More agents is all you need’14,
on environmental or tool-generated feedback, have achieved strong   the proposal of collaborative scaling law15 and demonstrations that
performance in diverse applications ranging from code generation2,3  MAS outperforms single-agent systems (SAS) on complex tasks16,17.
and web browsing4,5 to medical decision-making6–8, finance9, sustain-  A concurrent body of work, however, questions whether multi-agent
ability10 and scientific discovery11–13. As tasks become more complex   coordination reliably outperforms strong SAS18–23, leaving the con-
and require long-horizon environmental interaction, multi-agent   ditions under which MAS provides benefits underexplored. Despite
systems (MAS) have gained attention as a way to decompose tasks,   this adoption, quantitative guidance remains limited on when adding

1Google Research, Seattle, WA, USA. 2Massachusetts Institute of Technology, Cambridge, MA, USA. 3Google DeepMind, Mountain View, CA, USA.
    e-mail: ybkim95@mit.edu; dmcduff@google.com; xliucs@google.com

Nature Machine Intelligence | Volume 8 | July 2026 | 1157–1172                                                                     1157

## Страница 2

Article                                                                               https://doi.org/10.1038/s42256-026-01268-y

agents improves performance and when it degrades performance. This   propagation and information flow that determine whether collabo-
leaves architecture selection largely heuristic and makes it difficult   ration succeeds or fails. We know from human team performance34,35
to decide when multi-agent coordination offers value over simpler   that team effectiveness depends on composition, coordination
single-agent alternatives. A comprehensive discussion of related work  mechanisms and member differentiation. Yet we lack comparable
on multi-agent and SAS, agentic benchmarks and coordination scaling   empirical understanding of how these principles translate to artifi-
is provided in Supplementary Section G.                                   cial agents, leaving practitioners without quantitative guidance for
   To determine when multi-agent coordination provides bene-   architecture selection.
fit, we first establish which task categories require agentic capabili-      To address these challenges, we present a controlled evalua-
ties. A necessary prerequisite is distinguishing between agentic and   tion of agent coordination. Our experimental design isolates archi-
non-agentic evaluation paradigms. Expanding from the Agentic Bench-   tectural effects by controlling for implementation confounds. We
mark Checklist (ABC) introduced in ref. 24, we characterize agentic   maintain identical task prompts, tools and computational budgets
tasks as those requiring: (1) sustained multi-step interactions with   across all configurations and systematically vary only coordination
an external environment, (2) iterative information gathering under   structure and model capability. We evaluate five canonical architec-
partial observability and (3) adaptive strategy refinement based on   tures: SAS and four multi-agent variants (independent, centralized,
environmental feedback.                                           decentralized and hybrid) instantiated across three major LLM fam-
    These characteristics differentiate tasks such as web browsing4,    ilies (OpenAI, Google and Anthropic) sampling models at varying
financial trading9, software engineering25 and interactive plan-   capability tiers as quantified by an aggregate intelligence index (Sup-
ning26 from traditional static benchmarks, tasks solvable through   plementary Section A), on six agentic benchmarks: (1) web browsing
single-shot reasoning without environmental feedback, which lack   (BrowseComp-Plus36), (2) financial analysis (Finance Agent37), (3) game
external environments, are fully observed or require identical solution   planning (PlanCraft26), (4) realistic workplace tasks (WorkBench38),
strategies27,28. This distinction matters because, while recent agentic   (5) software engineering (SWE-bench Verified25) and (6) terminal tasks
benchmarks have emerged (for example, SWE-bench25, τ2-Bench29 and   (Terminal-Bench30). Across N = 260 controlled configurations with
Terminal-Bench30), MAS evaluations have been conducted predomi-  matched compute, we fit a predictive model across tested domains
nantly on non-agentic tasks, potentially providing misleading guidance   quantifying how performance is associated with empirically measured
about when collaboration provides value. This distinction is practically   coordination properties.
consequential: although LLMs achieve high accuracy on isolated code        In contrast to prior claims that ‘more agents is all you need’, we
generation tasks such as HumanEval31, real-world deployment requires   find that the effectiveness of MAS depends on quantifiable trade-offs
agentic capabilities such as iterative debugging, repository navigation  between architectural properties and task characteristics. We establish
and adaptive strategy refinement as exemplified by interactive coding   a predictive framework using a linear regression model with empiri-
assistants (for example, Cursor or Copilot Workspace). MAS that show   cal coordination metrics and prespecified interaction terms: effi-
monotonic improvement with team size on static benchmarks (reach-   ciency (success/overhead ratio), error amplification factors, message
ing 89% on HumanEval with five agents) exhibit fundamentally differ-   density and redundancy as predictors, achieving cross-validated
ent scaling behaviour when evaluated on tasks requiring sustained   R2 = 0.373 across all six benchmarks (R2 = 0.413 with a task-grounded
environmental interaction, where coordination overhead and error   capability metric), without dataset-specific parameters. Critically, the
propagation dynamics dominate.                               framework selects the best-performing architecture in 87% of held-out
    This distinction reflects a trade-off between context integration   within-domain configurations. Relative architecture selection is there-
and diversity16,32. SAS maximize context integration by maintaining a   fore more stable than absolute cross-domain performance prediction.
unified memory stream in which all reasoning steps share access to     Our analysis identifies one predictor that survives both
prior history. MAS impose information fragmentation18. Parallel agents   cluster-robust inference and Holm–Bonferroni multiple-comparison
enable diverse exploration, but they incur a coordination tax in which   correction, together with a second mechanistic effect that sur-
the global context must be compressed into interagent messages. This   vives cluster-robust inference and supports the failure-mode tax-
lossy communication adds synchronization overhead and cognitive  onomy. The Holm- and cluster-robust predictor is the single-agent
load33, changing the scaling behaviour of collaboration.               baseline coefficient (Probust = 0.004; PHolm = 0.018), showing that
   The underlying dynamics explain this discrepancy: on agentic   baseline task difficulty is the strongest robustly supported deter-
tasks, coordination overhead scales with interaction depth, agents  minant of absolute agent-system performance. A separately fitted
operate on progressively divergent world states, and errors cascade   baseline-by-team-size decision rule yields an empirically derived ~45%
through execution chains rather than being corrected through voting.   capability-saturation threshold and, in an additional validation analy-
Recent work has identified cases where single strong models match or    sis, predicts the sign of the multi-agent gain in 94% of 16 SWE-bench
exceed MAS21, yet the evaluation literature provides limited guidance   Verified and Terminal-Bench model × benchmark configurations;
on what factors determine collaborative success, whether semantic   because the underlying baseline-by-team-size interaction does not
diversity predicts team performance, how architectural choices shape    itself survive cluster-robust correction, we present the threshold as
coordination costs or whether agents can detect and correct failures   a validated selection rule rather than a coefficient-level scaling law.
in extended interactions.                                    The cluster-robust mechanistic effect is baseline-scaled error ampli-
    Rapid progress in frontier-model capabilities further compli-   fication (Probust = 0.030): architectures without centralized verifica-
cates this question. As base LLMs gain longer context windows, better   tion propagate errors more as baseline difficulty grows. A trace-level
tool use and improved self-reflection, the added value of multi-agent   analysis ranks the four MAS variants consistently, from independent
collaboration becomes less clear. The answer probably depends on   (amplification 17.2×) to centralized (4.4×), illustrating that validation
task characteristics and architectural choices that have not yet been   bottlenecks intercept errors before aggregation. Beyond these two
systematically quantified.                                                effects, three additional patterns are directionally consistent across
   Two issues make controlled MAS evaluation difficult. First, exist-    all six benchmarks but do not survive cluster-robust correction at
ing MAS evaluations compare architectures using different prompts,  α = 0.05: a tool-coordination trade-off where tool-heavy workflows
tools or computational budgets, conflating architectural effects with   incur higher coordination overhead, a near-linear relationship between
implementation choices and precluding clean causal attribution. Sec-   aggregate model capability and performance, and an interaction
ond, evaluations focus exclusively on final accuracy metrics without  between baseline difficulty and team size. We report these as descrip-
examining process dynamics such as coordination overhead, error   tive directional patterns rather than confirmed effects. Performance

Nature Machine Intelligence | Volume 8 | July 2026 | 1157–1172                                                                 1158

## Страница 3

Article                                                                               https://doi.org/10.1038/s42256-026-01268-y

changes relative to single-agent baseline span +80.8% on structured   +5.6% (0.664 versus SAS 0.629), whereas centralized and hybrid both
financial reasoning to −70.0% on sequential planning, demonstrating   slightly underperform at −1.2%. On BrowseComp-Plus, improvements
that architecture-task alignment determines collaborative success.   remain modest: decentralized achieves +9.2% (0.347 versus SAS 0.318),
Translating these regression coefficients into selection rules yields 87%   with centralized essentially flat at +0.2%. By contrast, PlanCraft exhibits
accuracy in choosing the best-performing architecture for held-out   degradation across all multi-agent architectures. Centralized declines
within-domain configurations.                                     to −50.3% (0.282 versus SAS 0.568), decentralized to −41.5% (0.332),
   Our primary contributions are:                                hybrid to −39.1% (0.346) and independent to −70.0% (0.170). To under-
                                                             stand this contrast between Finance Agent’s gains and PlanCraft’s
  • A controlled experimental template for SAS–MAS comparison.   degradation, we examined execution traces from both domains. In
   We match task prompts, tool interfaces and per-system compute   PlanCraft, efficient single-agent trajectories follow direct execution
     ceilings across architectures and vary only coordination structure   paths. For example, crafting a diorite_wall:
    and model capability, while measuring the additional coordina-
    tion overhead each multi-agent variant actually incurs rather     Turn 1: search(“diorite_wall”) → recipe: 6 diorite
    than treating interagent communication as free compute. The     in 2 × 3
    template spans 260 configurations across three LLM families and     Turn 2: move(diorite → crafting_grid)
     six diverse agentic benchmarks, enabling controlled attribution     Turn 3: craft → task complete
    of performance differences to coordination choice rather than
    implementation confounds.                                 By contrast, centralized MAS decompose inherently sequential
  •  Single-agent baseline as the most robust determinant, with   tasks into artificial subtasks:
    capability saturation as a validated selection rule. Across both
    cluster-robust inference (Probust = 0.004, clustering on dataset,    Agent 1: research recipe (redundant, since lookup is
   G = 6) and Holm–Bonferroni multiple-comparison correction     instantaneous)
     (PHolm = 0.018), the single-agent baseline coefficient is the only     Agent 2: check inventory (redundant, since state is visible
    predictor that retains significance, identifying baseline task     to all)
     difficulty as the strongest robustly supported determinant of     Agent 3: execute crafting (the only necessary step)
    absolute agent-system performance. In the separately fitted
    baseline-by-team-size decision rule, baselines above approxi-       This unnecessary decomposition generates substantial coordi-
    mately 45% predict zero-to-negative multi-agent gains, and   nation messages on average for tasks requiring only a few execution
     in an additional validation analysis the rule matches the sign   steps, consuming token budget on coordination rather than reasoning.
    of the multi-agent gain in 94% of 16 SWE-bench Verified and   Conversely, Finance Agent trajectories show when coordination can
    Terminal-Bench model × benchmark configurations.               help. Single-agent execution exhibits sequential bottlenecks:
  • A predictive model for architecture selection. A linear regression
                                                           Turn 1: web_search(“merger news”) → surface results    with empirical coordination metrics and prespecified interaction
                                                          Turn 2: edgar_search(“filings”) → limited depth    terms achieves cross-validated R2 = 0.373 across six benchmarks
                                                          Turn 3–7: Sequential exploration with insufficient     (R2 = 0.413 with a task-grounded capability metric). Within-domain,
                                                           breadth    the model selects the best-performing architecture in 87% of
    held-out configurations, providing a quantitative alternative to       Centralized coordination enables parallel information synthesis:
     heuristic decisions about when to use multi-agent coordination.      Agent 1: Regulatory/news analysis
  •  Architecture-level failure-mode taxonomy. A trace-level analysis      Agent 2: SEC filing research
     quantifies error containment across the four MAS variants, rank-      Agent 3: Operational impact assessment
    ing them consistently from independent (amplification 17.2×) to      Orchestrator: Synthesize multi-source findings
    centralized (4.4×). The interaction between single-agent baseline
                                                         The task’s natural decomposability (revenue, cost and market    and trace-level error amplification survives cluster-robust cor-
                                                                      factors can be analysed independently) aligns with the coordination    rection (Probust = 0.030), supporting validation bottlenecks as the
                                                                      structure, yielding +80.8% improvement. These trajectory patterns    operative mechanism.
                                                                     indicate a mechanistic basis for domain-dependence. Coordination  •  Descriptive coordination patterns and limits of inference.
                                                            overhead becomes counterproductive when coordination complex-    Three further patterns, namely a tool-coordination trade-off, an
                                                                                ity exceeds task complexity (PlanCraft) but yields substantial gains     intelligence-index linear effect and a baseline × agents interaction,
                                                   when tasks naturally decompose into parallel information streams    are directionally consistent across all six benchmarks but do not
                                                                 (Finance Agent).    survive cluster-robust correction at α = 0.05. We report them as
    descriptive given the small number of benchmark clusters.         On SWE-bench Verified, all MAS architectures show slight degra-
                                                                 dation relative to SAS (mean 0.488): hybrid −1.3% (0.481), centralized
Results                                                    −2.6% (0.475), decentralized −6.4% (0.456) and independent −12.8%
Main results                                                          (0.425). This is consistent with the capability-saturation threshold:
MAS exhibits domain-dependence with architectural variation.  most models achieve single-agent baselines above 45%, leaving limited
Figure 1 reports the aggregate scaling pattern across model intelli-  room for coordination gains. On Terminal-Bench (SAS mean 0.312,
gence, and Fig. 2 breaks this down into per-benchmark performance  below the threshold), results are mixed: independent shows mar-
distributions across the five architectures defined in Table 1 and three   ginal gains (+6.0%, 0.331), whereas centralized degrades substantially
LLM families. MAS show highly variable performance across task   (−20.0%, 0.250), suggesting that the low tool count (two tools) limits
domains, depending on problem structure and architectural choices.   the benefit of orchestration-heavy architectures.
On Finance Agent, MAS achieve substantial improvements: centralized      Aggregating across all six benchmarks and architectures, the
reaches +80.8% (mean 0.631 versus SAS 0.349), decentralized achieves   overall mean MAS improvement is 0.0% (95% confidence interval (CI)
+74.5% (0.609) and hybrid reaches +73.1% (0.604), driven by oppor-   −58.7% to 77.2%), reflecting substantial performance heterogeneity
tunities for distributed financial reasoning across multiple agents.   with high variance (σ = 37.5%). The performance range across MAS vari-
On WorkBench, MAS show minimal gains: decentralized achieves   ants spans from −70.0% (PlanCraft Independent) to +80.8% (Finance

Nature Machine Intelligence | Volume 8 | July 2026 | 1157–1172                                                                 1159

## Страница 4

Article                                                                               https://doi.org/10.1038/s42256-026-01268-y


                      OpenAI GPT                                  Google gemini                                    Anthro claude

    60                                                                                                                                                   –7.2%
                                        +12.3%                                                 –4.6%
     55

    50
(%)                                                   GPT-5
    45                                                                                                                                                             Sonnet
                                                                                                                                                                                              4.5
    40
                                           GPT-5                                                              Gemini
                                                                                                                                   2.5 pro                                                mini  Performence 35                                                                                                                                        Sonnet                                                                                           Gemini
                                                                                                            2.5 flash                                             4.0
    30
          GPT-5                                                                                                         Sonnet
         nano                                                                                                                                         3.7     25                                                           Gemini
                                                                           2.0 flash

            60     62     64     66     68     70             48   50   52   54   56   58  60   62   64         42    44    46    48    50     52     54
                         Intelligence index                                      Intelligence index                                      Intelligence index

                    SAS           MAS-centralized             MAS-decentralized            MAS-independent            MAS-hybrid

Fig. 1 | Agent scaling across model intelligence and system topologies.           with per-benchmark sample sizes n = 100 (BrowseComp-Plus, PlanCraft and
Average performance (%) across the six agentic benchmarks generally increases     WorkBench), n = 50 (Finance Agent) and n = 20 (SWE-bench Verified, Terminal-
with model intelligence index across three LLM families (OpenAI, Google and       Bench) per (model, architecture) cell. All percentage deltas annotated indicate
Anthropic) under five agent architectures. SAS serves as reference trajectories,      the relative performance change of the best-performing MAS variant compared
while MAS variants (centralized, decentralized, independent and hybrid) reveal     with the SAS baseline at the same intelligence index, averaged across the six
distinct scaling behaviours (see Table 1 for architecture comparisons). Each curve   benchmarks (per-benchmark deltas are reported in Fig. 2 and in the Results).
aggregates accuracy across the six benchmarks at matched per-system compute,


Centralized), indicating that MAS do not provide universal benefits   rather than complexity alone, determines coordination viability. Infor-
but rather domain-specific trade-offs.                            mation gain Δℐ correlates with this pattern: Finance Agent (structured
                                                        domain) exhibits strong information-value convergence (r = 0.71,
Task decomposability, not complexity alone, shapes coordination  P < 0.001), whereas PlanCraft (sequential constraints) shows weak
efficacy. Empirical patterns across benchmarks reveal that domain   correlation (r = 0.18, P = 0.22), indicating that agents in high-complexity
complexity (see Supplementary Section C for details) moderates  domains exchange limited actionable information due to inherent
MAS advantage. Structured, decomposable domains show large gains   sequential dependencies and state-space ambiguity.
while high-complexity sequential domains show consistent degrada-
tion. The mechanism operates through fixed computational budgets   Architecture-LLM family interactions differ by benchmark. Although
(matched per-system compute ceilings across MAS and SAS). In struc-  domain complexity broadly moderates MAS effectiveness, the archi-
tured, decomposable domains (Finance Agent, moderate WorkBench  tecture–domain interaction shows non-uniform preferences even
instances), agents complete local reasoning with residual capacity   within similar complexity regimes. No single architecture dominates
available for interagent communication. Here, interagent messages   across all domains and vendors. Architecture effectiveness depends
reduce variance through redundancy elimination and enable synthe-  on domain structure. Finance Agent benefits most from centralized
sis of partial solutions, producing large performance deltas (finance   (+80.8%) and decentralized (+74.5%), WorkBench benefits most from
shows +80.8%). Conversely, in high-complexity sequential domains   MAS-decentralized (+5.6%) and BrowseComp-Plus benefits most
(PlanCraft), intra-agent reasoning for constraint verification and state  from MAS-decentralized (+9.2%). In degrading domains, architecture
tracking consumes most available tokens before communication can   selection becomes a least-worst optimization, where PlanCraft shows
occur. Subsequent interagent messages then compress reasoning   hybrid as relatively best (−39.1%) compared with MAS-centralized
quality and produce strong negative returns (PlanCraft shows −39.0%   (−50.3%) and MAS-independent (−70.0%).
to −70.0%).                                                          Family-specific coordination preferences emerge within
   We characterize each benchmark by a domain complexity score   improvement-positive domains. On Finance Agent, Anthropic’s
D ∈ [0, 1] (Supplementary Section C), capturing the degree of sequen-   MAS-Centralized achieves +127.5% (0.636 versus 0.280 SAS), indi-
tial interdependence and empirical difficulty: WorkBench (0.000,   cating conservative but stable coordination, whereas Google’s
minimal sequential constraints) shows positive MAS returns or minimal   MAS-centralized reaches +164.3% (0.740 versus 0.280 SAS, averaging
overhead, SWE-bench Verified (0.255, decomposable engineering   centralized performance), consistent with a relative empirical advan-
tasks) has low domain complexity but high single-agent baselines that   tage of this family under hierarchical message exchange on this bench-
trigger capability saturation, Finance Agent (0.407, moderate decom-   mark. OpenAI’s MAS-centralized achieves +69.9% (0.79 versus 0.465
posability) and Terminal-Bench (0.414, diverse CLI tasks) sit near the   SAS). On WorkBench, where multi-agent overhead is less tolerable
critical threshold, whereas PlanCraft (0.419, high sequential dependen-   (coordination efficiency, Ec, defined as success normalized by relative
cies) and BrowseComp-Plus (0.839, dynamic state evolution) show   reasoning-turn count, degrades from Ec = 0.466 for SAS to Ec = 0.074
degradation or minimal gains. Domain complexity alone does not fully   for hybrid, the largest relative drop across benchmarks), Anthropic’s
predict MAS effectiveness. Although low-complexity domains (Work-   best variant (MAS-decentralized, +10.8%) remains superior to Google
Bench, D = 0.00) show modest gains and high-complexity domains   (+9.5%) and OpenAI (+8.6%), reflecting relative efficiency in managing
(BrowseComp-Plus, D = 0.84) show limited benefits, the critical factor   coordination costs. On PlanCraft, where all variants degrade, vendor
is task decomposability: Finance Agent (D = 0.41) achieves +80.8% gains   preferences flatten. Anthropic shows maximum −54.5% (MAS-hybrid
through parallelizable subtask structure, whereas PlanCraft (D = 0.42)   0.31 versus SAS 0.68), Google shows −25.3% (best) and OpenAI shows
degrades by −70% due to strict sequential dependencies despite similar   −32.3%, indicating that communication mechanisms cannot overcome
complexity scores. This suggests that sequential interdependence,   fundamental sequential reasoning constraints. Although the precise

Nature Machine Intelligence | Volume 8 | July 2026 | 1157–1172                                                             1160

## Страница 5

Article                                                                               https://doi.org/10.1038/s42256-026-01268-y


                                    BrowserComp-Plus                                                   Finance Agent
                             –35%     +9%     +0%     +6%                           +57%     +75%     +81%     +73%
                60
                                                                               90

                                                                                80
                 50
                                                                                      70

                40                                                             60
               (%)                                                                         (%)
                                                                                 50

                30
                                                                               40                                        Accuracy                                                                                                                                                                                                  Accuracy

                                                                                30
                 20
                                                                                   20

                    10                                                                         10


                                              PlanCraft                                                  WorkBench
                              –70%     –41%     –50%     –39%                              –11%     +6%      –1%       –1%
                90                                                            90

                 80

                  70                                                              80

                60
               (%)
                                                                                          (%)  70
                    rate  50

                40                                                                                                                                                                                                                                                 Accuracy 60                                   Success
                30

                 20                                                              50

                    10

                0                                                             40

                                 SWE-bench Verified                                                  Terminal-Bench
                                –13%     –6%      –3%      –1%                         +6%     –6%     –20%     –12%

                                                                                      70
                 80
                                                                               60
                  70

                60                                                              50
                                                                                          (%)
               (%)
                 50                                                                                           rate 40

                40
                                                                                30                                        Accuracy                30                                                                                                                                                               Success
                                                                                   20
                 20

                                                                                               10
                    10

                0                                                           0

                   SAS         MAS-independent           MAS-decentralized        MAS centralized          MAS-hybrid     Mean

Fig. 2 | Comparative performance of agent systems across six agentic            degrades (−20%), reflecting the low tool count where coordination overhead is
benchmarks. BrowseComp-Plus shows polarized results, with independent          less justified. Box plots show the distribution of model-level performance for
agents substantially underperforming relative to SAS (−35%), whereas more        each architecture–benchmark pair. Each model-level performance is computed
structured coordination achieves modest gains. Finance Agent demonstrates       over independent instances: BrowseComp-Plus, PlanCraft and WorkBench
the strongest multi-agent benefits, with all MAS architectures substantially          (n = 100), Finance Agent (n = 50), SWE-bench Verified and Terminal-Bench
outperforming SAS (from +57% to +81%). PlanCraft exhibits consistent              (n = 20). The centre line is the median, the box spans the 25th to 75th percentiles
degradation across all MAS variants (from −70% to −39%). WorkBench shows       and the whiskers extend to the most extreme data points within 1.5× IQR of
marginal effects (from −11 to +6%). SWE-bench Verified shows slight degradation    the box edges; points beyond the whiskers are shown individually as outliers.
across all MAS architectures (from −13% to −1%), consistent with high single-agent   Whisker endpoints correspond to the lowest and highest non-outlier points.
baselines (>45%) for most models. Terminal-Bench shows mixed results, where      Percentage annotations represent the relative mean change versus the SAS
‘independent’ achieves marginal gains (+6%), whereas ‘centralized’                  baseline.

Nature Machine Intelligence | Volume 8 | July 2026 | 1157–1172                                                                       1161

## Страница 6

Article                                                                               https://doi.org/10.1038/s42256-026-01268-y

Table 1 | Architectural comparison of agent methods with objective complexity metrics

 Characteristic         SAS         MAS (independent)    MAS (decentralized)    MAS (centralized)         MAS (hybrid)

 Interaction type           Single             Parallel agents +          Sequential peer debate     Hierarchical orchestrator        Orchestrator + peer
                            sequential        synthesis                + voting                                           exchange
                         agent
 LLM calls                  O(k)             O(nk) + O(1)              O(dnk) + O(1)              O(rnk) + O(r)                    O(rnk) + O(r) + O(p)
 Sequential depth          k                k                   d                                r                                       r
 Common overhead      0                    1                    dn                        rn                              rn + pm
 Parallelization factor         1              n                    n                    n                        n
 Memory complexity        O(k)             O(nk)                   O(dnk)                    O(rnk)                           O((r + p)nk)
 Coordination              Sequential         Parallel + synthesis        Sequential debate          Hierarchical                      Hierarchical + peer
 Consensus               −                Synthesis               Debate                   Orchestrator                   Orchestrator
Computational complexity measured in terms of LLM calls, coordination overhead and parallelization potential. Sequential depth counts the longest serialized reasoning or coordination path,
and for SAS and independent, it equals the per-agent reasoning horizon k, whereas for coordinated MAS variants it counts coordination-layer rounds. *k, max iterations per agent; n, number
of agents; r, orchestrator rounds; d, debate rounds; p, peer communication rounds; m, average peer requests per round. Communication overhead counts interagent message exchanges.
Independent offers maximal parallelization with minimal coordination. Decentralized uses sequential debate rounds. Hybrid combines orchestrator control with directed peer communication.


mechanisms remain to be characterized, potential factors include   agent count following standard diminishing-returns assumptions in
differences in instruction-following fidelity, context utilization pat-   scaling analyses39.
terns and interturn consistency that affect how agents interpret and        Interaction terms test specific hypotheses about how these factors
respond to coordination messages. No model family is consistently   combine. We include nine interactions, each motivated by observed
best across benchmarks. Each instead exhibits relative advantages in   patterns: Ec × T tests whether efficiency penalties compound with tool
structured domains such as Finance that do not persist in sequential   complexity; Atracee  × T tests whether errors propagate more severely
constraint-satisfaction domains such as PlanCraft, indicating that   in tool-rich environments; PSA × log(1 + na) captures the baseline
multi-agent benefits are genuinely contingent on problem structure  paradox where high single-agent performance leaves less room for
rather than generalizable across task types.                          coordination gains; O% × T tests whether overhead costs scale with task
                                                                   complexity. We deliberately exclude interactions without clear mecha-
Predictive architecture-selection model                              nistic justification (for example, R × c, I × O%) to avoid overfitting.
Figure 1 summarizes the family- and architecture-level scaling patterns      The complete functional form is:
that motivate the predictive model developed below, and Table 1 formal-
                                                                                                                          2izes the five canonical architectures compared throughout the study.      P = β0 + β1(I −̄I) + β2(I −̄I) + β3 log(1 + T) + β4 log(1 + na)
Extended Data Fig. 1 reports cost–performance trade-offs across these
configurations; Extended Data Fig. 2 reports heterogeneous-agent        +β5 log(1 + O%) + β6c + β7R + β8Ec + β9 log(1 + Atracee    )
effects on BrowseComp-Plus; Extended Data Table 1 reports the pro-        +β10PSA + β11(I × Ec) + β12(Atracee  × PSA)
gressive scaling-model comparison; and Extended Data Table 2 reports                                                                                 (1)
the coordination metrics used as inputs to the predictive model.           +β13(O% × T) + β14(R × na) + β15(c × I)
   The main results show substantial heterogeneity, with agentic         +β16(Ec × T) + β17(PSA × log(1 + na))
system performance ranging from +80.8% improvement to −70%
degradation depending on task structure and coordination archi-         +β18(I × log(1 + T)) + β19(Atracee  × T) + ε,
tecture. This variance correlates with measurable properties such as
task decomposability, tool complexity and baseline difficulty. We next  where all predictors are standardized (μ = 0, σ = 1) after transformation.
test whether measurable task, model and coordination properties can   log transformations are applied to right-skewed variables spanning
predict system performance.                                      multiple orders of magnitude (O%: 0–515%; T: 2–16; na: 1–4; Atracee     :
                                                                          1.0–17.2) to improve approximate linearity and reduce skewness. The
Linear regression with prespecified interactions achieves    Atracee  × T interaction retains Atracee   without additional log transforma-
cross-validated R2 = 0.413 (ACI)/R2 = 0.373 (intelligence index). We   tion because log(1 + Atracee    ) already appears as a main effect; including
fit a predictive model to all 260 configurations across six benchmarks   log(1 + Atracee    ) × T would introduce near-collinearity (variance inflation
that relates agentic system performance to four categories of predic-   factor, VIF > 8, indicating substantial multicollinearity). Sensitivity
tors. The first category is base model capability, captured by an intel-   analysis confirms qualitatively consistent results under alternative
ligence index I. The second is system configuration, captured by agent   specifications (ΔR2CV < 0.01). We validate model complexity through
count na. The third is task properties, captured by tool count T and   five-fold cross-validation with experiment-level holdout (splitting at
single-agent baseline PSA. These first three are instance-level predictors   the configuration level). Using the intelligence index as the capability
capturing within-benchmark variation, distinct from the   metric, the model achieves R2train = 0.463, R2CV = 0.373 (±0.170 s.d.).
benchmark-level domain complexity D defined in Supplementary   Replacing the intelligence index with the task-grounded agentic capabil-
Section C. The fourth category is empirically measured coordination    ity index (ACI), defined as each model’s mean single-agent performance
metrics from Extended Data Table 2, namely efficiency Ec, overhead   across all six benchmarks (correlation with intelligence index: r = 0.45),
O%, trace-level error amplification Atracee     , message density c and redun-  improves model fit to R2train = 0.481 , R2CV = 0.413 (±0.130 s.d.), AIC
dancy R. Rather than including all possible terms, we construct the   of −244.8, with no reversals in which predictors meet the pre-specified
model based on specific mechanistic hypotheses.                     P-value threshold (Supplementary Table 8, ACI). We report the intel-
   Main effects capture direct relationships between individual   ligence index specification in Table 2 for comparability with prior work
factors and performance. We include a quadratic term (I2) to test  and because ACI requires running the benchmarks but recommend
for nonlinear capability scaling and log-transformed tool count and  ACI as the primary capability metric. The model consistently

Nature Machine Intelligence | Volume 8 | July 2026 | 1157–1172                                                                 1162

## Страница 7

Article                                                                               https://doi.org/10.1038/s42256-026-01268-y

Table 2 | Complete predictive-model coefficients relating performance to intelligence, task properties and empirical
coordination metrics (R 2train = 0.463, R 2CV = 0.373, N = 260 configurations, AIC of −236.3)

 Predictor                                    95% CI                  P                        Interpretation                                                        ̂β
 Main effects
 Intercept (β0)                       0.430                0.412 to 0.448                <0.001                  Baseline performance
 Intelligence (I −̄I)                      0.126               0.033 to 0.218               0.008                   Linear capability effect
                                  −0.000              −0.019 to 0.018                 0.977a                  Quadratic capability (not significant) Intelligence2 ((I −̄I) 2)
 log(1 + T)                            0.166               0.095 to 0.236                    <0.001Section              Tool diversity benefit
 log(1 + na)                        0.040               −0.074 to 0.155                 0.487a                Agent count effect
 Single-agent baseline (PSA)            0.250                0.102 to 0.397                 0.001b                  Task difficulty proxy
 Coordination structure
 log(1 + O%)                            0.011               −0.033 to 0.056                  0.611a                    Direct overhead cost
 Message density (c)                   −0.013              −0.059 to 0.033               0.585a                Communication intensity
 Redundancy (R)                    0.006              −0.038 to 0.050               0.780a               Work overlap
 Efficiency (Ec)                          −0.011               −0.072 to 0.051                 0.733a                  Coordination efficiency
 log(1 + Atracee    )                        0.014               −0.047 to 0.074                0.658a                    Error amplification
 Critical interactions
 PSA × log(1 + na)                    −0.236              −0.396 to −0.076             0.004                   Baseline paradox
 Ec × T                              −0.096               −0.154 to −0.037                  0.002Section                Efficiency tools trade-off
 O% × T                             −0.033              −0.084 to 0.019                  0.211a                Overhead scales with task complexity
  Atracee  × T                           0.022               −0.023 to 0.067                0.332a                    Error propagation in tool-rich systems
 R × na                              0.024              0.002 to 0.047               0.034                Redundancy benefit with scale
  I × Ec                                   −0.011              −0.060 to 0.038               0.653a                    Capability-efficiency
  Atracee  × PSA                        −0.080               −0.148 to −0.012               0.022c                   Error-baseline
 c × I                                 −0.016              −0.059 to 0.027                0.457a                  Communication-capability
  I × log(1 + T)                         −0.051                 −0.113 to 0.012                    0.112a                     Capability-tools
The P values shown in this table are naive values. Confirmed effects are determined by the cluster-robust and Holm–Bonferroni results in Supplementary Tables 9 and 10, not by this table
alone. Robustness markers next to selected P values summarize behaviour under the two corrections. ‘Section’ survives Holm–Bonferroni only. The single-agent baseline coefficient is the sole
predictor carrying both cluster-robust inference and Holm–Bonferroni correction at α = 0.05 and is, therefore, the only individual coefficient we describe as robustly supported. Using the
task-grounded ACI improves fit to R2CV = 0.413. Intelligence is mean-centred ( ̄I = 57.5) to address multicollinearity between I and I2 (VIF reduced from 200 to 1.1). Model uses fivefold
cross-validation. aNon-significant terms (P > 0.05, naive OLS). bSurvives both cluster-robust inference and Holm–Bonferroni correction at α = 0.05. cSurvives cluster-robust inference only.



outperforms simpler alternatives using only architectural labels or   the naive hypothesis being incomplete: tool-rich environments appear
intelligence alone, as shown in Extended Data Table 1. This   to amplify the coordination tax, plausibly making simpler architectures
equation contains no dataset-specific parameters or dataset-dependent  more effective in high-T regimes. We emphasize this is a descriptive
tuning; it is intended for prediction on within-domain held-out con-   directional finding, not a confirmed scaling law: a definitive test would
figurations rather than reliable absolute prediction on unseen task   require a larger number of benchmark clusters at varying tool counts
domains (leave one dataset out (LODO) R2 = − 2.09; ‘Robustness and   than the G = 6 available here.
sensitivity analysis’ section).
                                                                       Error amplification varies by architecture. Extended Data Table 2 pre-
Efficiency tools interaction as a directional pattern rather than a   sents substantial variance in trace-level error amplification factors.
confirmed effect. The efficiency tools interaction shows the largest  The single-agent value is Atracee  = 1.0. Centralized reaches Atracee  = 4.4,
naive OLS effect among interaction terms ( ̂βEc×T = −0.096, 95% CI   hybrid reaches 5.1, decentralized reaches 7.8 and independent
−0.154 to −0.037, naive P = 0.002). However, this predictor is inflated   multi-agent reaches 17.2. After controlling for other coordination
by pseudoreplication: tool count T varies primarily at the dataset level   metrics, neither the main effect of error amplification ( ̂β = 0.014,
(G = 6 clusters), and under cluster-robust standard errors, the evidence  P = 0.658) nor its interaction with tool count ( ̂β = 0.022, P = 0.332)
for this effect is not retained (Probust = 0.205; ‘Robustness and sensitivity   reaches statistical significance. This does not contradict the
analysis’ section). We therefore report the efficiency tools relationship   cluster-robust baseline-scaled error amplification interaction reported
as a descriptive directional pattern, consistent across all six bench-   in the robustness analysis (‘Robustness and sensitivity analysis’ sec-
marks, rather than as a confirmed scaling effect. The direction is inter-   tion); we therefore interpret error propagation as a conditional mecha-
pretable: SAS achieve Ec = 0.466 (Extended Data Table 2), whereas  nism that becomes most informative when scaled by baseline task
multi-agent architectures range from Ec = 0.074 (hybrid) to Ec = 0.234   difficulty, rather than as a standalone universal driver. The large
(independent), a 2–6× efficiency penalty.                          architecture-level performance differences observed in
    Conversely, simple tasks (T ≤ 4) show negligible efficiency effects,   Extended Data Table 2 are co-explained by efficiency (Ec) and overhead
explaining why multi-agent coordination can succeed on decompos-   (O%). Independent architecture’s universal underperformance (mean
able problems. This descriptive pattern is directionally consistent with   success 0.370 versus 0.466 SAS) stems from the absence of interagent

Nature Machine Intelligence | Volume 8 | July 2026 | 1157–1172                                                                1163

## Страница 8

Article                                                                               https://doi.org/10.1038/s42256-026-01268-y

communication, where each agent operates in isolation and duplicates  The fitted model enables quantitative architecture selection. Equa-
errors without correction opportunities. This effect is subsumed   tion (1) defines 20-parameter model used to rank candidate architec-
by the efficiency metric (Ec = 0.234 for independent versus Ec = 0.466   tures. Given task characteristics (T, PSA) and model capability (I),
for SAS).                                                                practitioners can compute expected performance for each architecture
                                                              using empirical coordination metrics from Extended Data Table 2.
Overhead shows a directional interaction with tool count.   Consider three task archetypes: (1) planning tasks (T = 4, PSA = 0.57)
Multi-agent architectures incur substantial realized reasoning-turn   favour single-agent due to baseline paradox and low tool count;
overhead: independent (58%), decentralized (263%), centralized (285%)   (2) analysis tasks (T = 5, PSA = 0.35) favour centralized multi-agent,
and hybrid (515%), corresponding to 1.6–6.2× more reasoning turns   balancing error control (Atracee  = 4.4) with manageable overhead; (3) tool-
than SAS under matched per-system compute ceilings. This overhead   heavy tasks (T = 16, PSA = 0.63) favour decentralized multi-agent despite
reflects realized coordination turns and interagent communication   high overhead (263%), because parallelization and redundancy out-
steps, not an increase in the per-system token-budget ceiling, which is   weigh efficiency losses. Quantitatively, the decision boundary between
matched across architectures (see Methods for the per-system   single-agent and multi-agent is
reasoning-token budget is allocated across parallel agents in MAS
configurations). The fitted model indicates that this overhead interacts                          ̂β4                                                                         P∗SA = −   ≈0.040 = 0.170  (in standardized units),with tool count ( ̂βO%×T = −0.033, P = 0.211), a directional pattern that                           ̂β17   0.236
is not retained under cluster-robust inference in the six-benchmark
model due to greater heterogeneity across task domains. The direction   corresponding to raw performance of approximately 0.45 after denor-
is preserved. For hybrid architecture (O% = 515) on workbench (T = 16),   malization. This threshold, estimated from the present experiments,
overhead costs compound with tool complexity, explaining hybrid’s   aligns with empirical best practices and provides a quantitative crite-
collapse on tool-heavy benchmarks (success rate 0.452 overall, 0.621   rion for coordination structure selection that supplements heuristic
on workbench). Empirically, workbench confirms this pattern. Decen-   guidance with a fitted model. Cross-validation on held-out configura-
tralized (mean 0.664) outperforms centralized (0.621) despite higher   tions indicates that this rule achieves 87% correct architecture selection
overhead, due to better parallel efficiency. We note that this predictor   within the tested domains, substantially exceeding random choice
retains significance under naive OLS on the four-benchmark subset   (20%) or capability-only models (54%). The fitted model therefore
( ̂β = −0.162, P < 0.001) and report it as a directional pattern under the   offers a within-domain architecture-ranking rule estimated across
more conservative six-benchmark specification.                     the six benchmarks studied here, while absolute prediction on unseen
                                                           domains remains limited (‘Robustness and sensitivity analysis’ section).
Intelligence shows a directional OLS pattern ( ̂βI = 0.126, naive P =
0.008). After centring intelligence scores to address multicollinearity  Coordination efficiency, error dynamics and information
(variance inflation factor (VIF) reduced from 200 to 1.1), the linear   transfer
capability effect is positive under naive ordinary least squares (OLS),   Following the Multi-Agent System Failure Taxonomy (MAST) proposed
with higher-capability models achieving proportionally better perfor-  by 20, we categorize observed errors into specification, interagent mis-
mance across all architectures. The quadratic term (I2) does not meet   alignment and verification failures. Building on this taxonomy, we
the threshold (naive P = 0.977), indicating that capability scaling follows   quantitatively analyse error frequency and propagation across archi-
a linear rather than accelerating pattern within the tested range (I ∈   tectures. We systematically characterized coordination efficiency,
[42, 71]). Under cluster-robust inference this effect does not meet the   error propagation mechanisms and information transfer across all 260
pre-specified threshold (Probust = 0.059; ‘Robustness and sensitivity   experiments. All MAS and SAS configurations were run under matched
analysis’ section), so we report it as a descriptive directional pattern   per-system compute ceilings and identical tool-call access to isolate
rather than a confirmed scaling law.                                coordination effects; across trials, the mean reasoning-token budget
                                                        was approximately 4,800 tokens.
Redundancy shows a small architecture-dependent pattern
( ̂βR×na = 0.024, naive P = 0.034). Work redundancy, operationalized  Turn count follows power-law scaling with number of agents.
as the mean cosine similarity of agent output embeddings, ranges from   Figure 3 reports the agent-count experiment for Gemini-2.0 Flash
0.41 (centralized) to 0.50 (decentralized) for MAS (Extended Data  and Gemini-2.5 Pro on BrowseComp-Plus, illustrating how accuracy
Table 2). The fitted model identifies a weak positive interaction with   varies with team size na ∈ {1, 2, 3, 5, 7, 9} under matched per-system
agent count ( ̂βR×na = 0.024, 95% CI 0.002 to 0.047, naive P = 0.034),  compute. Total reasoning turns (reasoning–response exchanges)
suggesting redundancy may offer some error-correction benefit when   exhibit power-law growth with agent count
more agents participate. Because predictors are standardized after
transformation, this coefficient should not be interpreted by multiply-           T = 2.72 × (n + 0.5) 1.724,  R2 = 0.974,
ing raw redundancy and raw team-size values; we therefore treat the                                                                   95%CI on exponent ∶[1.685, 1.763],  p < 0.001.
term qualitatively. The magnitude of this directional effect is small rela-
tive to the efficiency tools interaction (| ̂βEc×T| = 0.096, roughly four   This relationship is fit across architecture-aggregated means.
times larger in standardized units), indicating that any redundancy   Within-architecture variance remains substantial (for example, at
benefit cannot compensate for architectural inefficiency. The nominal  n = 3 independent averages 11.4 turns versus decentralized 26.1
P value (P = 0.034, near the α = 0.05 threshold) suggests this relationship   turns), reflecting topology-dependent communication patterns. The
may be context-dependent, potentially stronger in error-prone domains   super-linear exponent (1.724 > 1) reflects quadratic message complexity
or weaker when communication is expensive. Decentralized architec-    (all-to-all potential communication) tempered by practical bandwidth
ture, which exhibits highest redundancy (R = 0.50 ± 0.06), achieves top   limits, defining an agentic scaling regime distinct from neural net-
performance on tool-heavy tasks (workbench success 0.664), consistent  work parameter scaling (for example, Kaplan et al. report b = 0.76 for
with redundancy’s protective role. Yet this same architecture underper-   dense models). Empirically, Hybrid systems require 6.2× more turns
forms on planning tasks (0.282), where redundancy becomes wasteful   than SAS (44.3 versus 7.2 turns, t(178) = 16.8, P < 0.001; the t-statistic
duplication. This context-dependence aligns with the baseline paradox:    is computed on the 180-configuration full-cost-tracked subset visual-
redundancy helps when there is room for improvement (PSA < 0.45) but   ized in Extended Data Fig. 1), centralized requires 3.8× (27.7 turns), and
becomes overhead when baseline is high.                             decentralized requires 3.6× (26.1 turns). Under fixed computational

Nature Machine Intelligence | Volume 8 | July 2026 | 1157–1172                                                               1164

## Страница 9

Article                                                                               https://doi.org/10.1038/s42256-026-01268-y

        a                          Gemini-2.0 Flash              b                            Gemini-2.5 Pro
                 35

                                                                                 50               30

                                                                                     45
              (%)  25                                                                     (%)
                                                                               40
                20                                     Accuracy                                                                                                                                                                                                  Accuracy  35
                     15
                                                                               30
                   10
                                                                                         25
                                  1      2     3            5              7            9                       1      2     3            5              7            9
                                Number of agents                                          Number of agents

                                          SAS (baseline)     MAS centralized      MAS-decentralized

Fig. 3 | Number of agents scaling reveals model-dependent coordination        The dashed lines indicate the single-agent baseline for each model on the same
limits. a,b, Performance of Gemini-2.0 Flash (a) and Gemini-2.5 Pro (b) on          benchmark. Both models show initial gains from multi-agent coordination, but
BrowseComp-Plus across multi-agent architectures with varying number            scaling patterns diverge: Gemini-2.0 Flash exhibits a clear optimum at seven
of agents (na ∈ {1, 2, 3, 5, 7, 9}). Each point is the mean accuracy over n = 100          agents before degradation, whereas Gemini-2.5 Pro’s decentralized architecture
independent BrowseComp-Plus task instances (the same evaluation set used in     peaks earlier despite its higher single-agent baseline. The centralized
the main experiments), under matched per-system compute. No error bars          architecture demonstrates more stable scaling for Flash but shows diminishing
are shown because each cell corresponds to a single canonical cluster run.           returns for Pro beyond 5 agents.


budgets, per-agent reasoning capacity therefore becomes prohibitively      The correction mechanism is revealed through token-overlap anal-
thin beyond three to four agents, producing an observed resource   ysis. Each token in agent rationales is labelled as: (1) unique (appears
ceiling under fixed budgets where communication cost dominates   in exactly one agent), (2) shared (two or more agents) and (3) contra-
reasoning capability.                                              dictory (semantic opposition, BERTScore <0.3). High-performing
                                                              runs exhibit: (1) increased shared-token entropy (mean ~1.8 bits for
Message density shows a weak descriptive trend. Success rate shows   Finance Agent; P < 0.001 versus low-performing runs); (2) substantially
a weak positive trend with message density                       reduced contradictory mass (median 2.3% in successes versus 8.1%
                                                                        in failures), consistent with messages converging towards mutually
        S = 0.42 + 0.18 ln (1 + c),  R2 = 0.018,  p ≈0.07,           consistent subproofs rather than self-reinforcing errors. However, high
                                                          redundancy (R > 0.50) correlates negatively with success (r =−0.136,
where c is messages per reasoning turn; the ln(1 + c) form keeps the fit  P = 0.004), implying an emergent diversity–efficiency trade-off in
defined for the SAS and independent architectures, which have c = 0 by  which collective capability peaks when message overlap balances
construction (no interagent communication). The two coordinating   shared grounding with informational diversity. Optimal redundancy
MAS architectures at c ≈ 0.4 achieve comparable mean success rates:   occurs at R ≈ 0.41 (the centralized median), balancing information
decentralized 48.8% (c = 0.41) and centralized 46.3% (c = 0.39). Additional   fusion with reasoning independence.
total coordination expenditure does not translate into proportional gains:
hybrid systems (515% coordination overhead, T = 44.3) achieve 47.7% suc-   Error taxonomy reveals architecture-specific failure modes. We
cess, statistically indistinguishable from centralized (285% overhead, T =   identified four error categories as follows.
27.7) despite using substantially more turns and overhead (t(70) = 0.31, P =         (1) Logical contradiction: agent asserts both ‘X is true’ and ‘X is
0.755; equal-variance two-sample on n = 36 per architecture, drawn from   false’ about the same entity or derives conclusions violating its stated
the 180-configuration full-cost-tracked subset). This pattern is consistent   premises; (2) numerical drift: accumulated computational error
with diminishing returns from additional coordination effort. Among  from cascading rounding or unit conversion mistakes, measured as
high-performing runs, qualitative inspection of agent traces shows con-   relative deviation from ground truth exceeding 5%; (3) context omis-
vergent content once consensus is reached, suggesting that messages   sion: failure to reference previously established entities, relation-
beyond consensus add redundancy rather than novel information.       ships or state information required for the current reasoning step;
                                                                       (4) coordination failure (MAS-specific): message misinterpreta-
Error absorption mechanisms. We formalize error absorption as   tion, task allocation conflicts, or state synchronization errors
absorb = (ESAS − EMAS)/ESAS, where E is factual error rate. The absorption  between agents. Architecture-specific patterns emerge across
mechanism operates through iterative verification: in centralized and   these categories:
hybrid architectures, subagent outputs pass through an orchestra-
tor that cross-checks reasoning steps before aggregation, enabling      •  Logical contradiction: baseline 12.3–18.7%. Centralized reduces
detection and correction of logical inconsistencies. In decentralized       to 9.1% (36.4% reduction) via consensus; decentralized achieves
architectures, peer debate rounds provide similar verification through        11.5% through peer verification; independent unchanged at 16.8%.
explicit challenge-response exchanges. These architectures achieve      •  Numerical drift: baseline 20.9–24.1%. Centralized/decentralized
22.7% average error reduction (95% CI 20.1% to 25.3%), peaking at 31.4%       reduce to 18.3% (24% reduction) via subproblem verification; hybrid
for Finance Agent, where structured numerical outputs facilitate verifi-       amplifies to 26.4% as rounding errors propagate; independent
cation. Independent MAS shows no error correction (+4.6% amplifica-      unchanged at 23.2%.
tion) due to absence of any interagent verification mechanism where      •  Context omission: baseline 15.8–25.2%. Centralized reduces to
errors made by individual agents propagate directly to the aggregated       8.3% (66.8% reduction) via orchestrator synthesis; decentralized
output without opportunity for correction.                              achieves 11.2%; independent unchanged at 24.1%.

Nature Machine Intelligence | Volume 8 | July 2026 | 1157–1172                                                                 1165

## Страница 10

Article                                                                               https://doi.org/10.1038/s42256-026-01268-y

  •  Coordination failure: only appears in MAS. Independent: 0%  Table 3 | Six agentic benchmarks used for evaluation
    (no coordination mechanism); centralized: 1.8%; decentral-
     ized: 3.2%; hybrid: 12.4% (protocol complexity exceeds robust   Benchmark               Task                       Evaluation design
    implementation).                                                BrowseComp-Plus (2025)   Web browsing/information   Multi-website
                                                                                                                             retrieval                    information
                                                                                                                                             location    These patterns identify three operational coordination regimes:
(1) under-coordination (O < 100% overhead): minimal accuracy gain    Finance Agent (2025)       Finance                       Entry-level analyst
(ΔS ≈ +2–4%), coordination mechanisms not yet engaged; (2) descrip-                                                               task performance
tive coordination band (200% < O < 300% overhead): highest success–     PlanCraft (2024)           Agent planning              Minecraft
cost ratio (Ec ≈ 0.16), dominated by centralized and decentralized, with                                                       environment
                                                                                                                                  planningstrong error absorption; (3) over-coordination (O > 400% overhead):
hybrid runs with reduced efficiency (Ec ≈ 0.11), protocol complexity    WorkBench (2024)           Planning/tool selection    Common
                                                                                                                                   business activitiesintroducing coordination-failure modes. Error amplification analysis
confirms: independent architectures propagate errors to 17.2× base-    SWE-bench Verified (2024)  Software engineering       GitHub issue
line (95% CI 14.3 to 20.1; no correction mechanisms), while centralized                                                               resolution
contains to 4.4× (95% CI 3.8, to 5.0) through supervised aggregation.     Terminal-Bench (2026)      CLI task execution         System admin/
                                                                                                                                     security/machine
Information gain is associated with MAS benefit in low-complexity                                                              learning tasks
domains. We compute information gain Δℐ by comparing pre-
coordination and post-coordination task-uncertainty surrogates (via  models show consistent cross-architecture efficiency (performance
Bayesian posterior variance reduction on key variables). In structured   range <5% across topologies). These patterns may reflect family-level
domains (Finance Agent, WorkBench), Δℐ correlates strongly with   differences in instruction following, context utilization, interturn
MAS–SAS gap (r = 0.71, P < 0.001), indicating that agents successfully   consistency or other architectural and training factors that affect how
exchange high-value information and synthesize it into improved  models process coordination messages. We do not isolate the underly-
solutions. In Finance Agent specifically, Δℐ ranges 0.8–2.1 bits (mean   ing mechanism here, so these family-specific differences should be read
1.4) for successful trials versus 0.2–0.6 bits (mean 0.4) for failures.     as empirical signatures rather than mechanistic conclusions.
     In open-world domains (BrowseComp-Plus), by contrast, Δℐ shows
weak predictive power, with no P < 0.05 evidence, indicating that  Robustness and sensitivity analysis
agents’ messages provide limited validated information due to world  We subject the six-benchmark regression (N = 260) to three robust-
ambiguity. This domain-dependent information gain pattern maps to   ness checks addressing pseudoreplication, multiplicity and capability
the observed MAS benefits. Finance Agent (up to +80.8% for central-   metric sensitivity.
ized) shows high-value information exchange, while BrowseComp-Plus
(up to +9.2% for decentralized) shows world ambiguity that   Cluster-robust inference. We re-estimated the regression with
limits verification.                                                 cluster-robust standard errors (clustering on dataset, G = 6, CR1
                                                                  correction, t5 critical values). Predictors varying primarily at the
Cross-domain generalization of coordination rankings.   dataset level (including log_tools, efficiency_x_tools and
Coordination-metric rankings, rather than absolute success levels,  baseline_x_agents) show standard error inflation up to 2.9× rela-
showed partial stability across the tested domains (Kendall τ = 0.89,   tive to naive OLS estimates. We report these as directional patterns
coefficient of variation <0.1 across architectures), indicating partial   rather than confirmed effects. single_agent_baseline (P = 0.004)
transfer of coordination patterns rather than reliable cross-domain  and error_x_baseline (P = 0.030) retain statistical support under
prediction. Extrapolation to larger teams via the fitted power law pre-   cluster-robust inference, identifying baseline task difficulty as the most
dicts ~69 turns at n = 6 and ~157 turns at n = 10 (95% CI from exponent   robustly supported predictor of absolute agent-system performance
uncertainty 64 to 74 and 143 to 172, respectively), corresponding to 9.5×   (Supplementary Table 9, cluster-robust); the ~45% selection threshold
to 21.8× increases over the SAS baseline of 7.2 turns. This super-linear    itself is recovered from the fitted baseline-by-team-size decision rule
scaling reflects the observed resource ceiling under fixed budgets:  and is presented as an empirically validated rule, not as a cluster-robust
beyond three to four agents, per-agent reasoning quality degrades   coefficient.
sharply.
                                                           Multiple-comparison correction. We evaluated 19 predictor coef-
Economic efficiency and family-specific cost–benefit trade-offs.   ficients (excluding the intercept) as a single family of simultaneous
Token efficiency (success per 1,000 tokens) varies sharply across   hypotheses, applying the Holm–Bonferroni step-down procedure to
architectures and families. SAS achieves 67.7 successes/1,000 tokens.   control the family-wise error rate at α = 0.05. Three predictors survive
Centralized drops to 21.5 (3.1× worse), decentralized to 23.9 (2.8×   correction: log_tools (PHolm < 0.001), single_agent_baseline
worse) and hybrid to 13.6 (5.0× worse). Absolute dollar costs per trial   (PHolm = 0.018), and efficiency_x_tools (PHolm = 0.026). Two further
vary by model. OpenAI Hybrid achieves a marginal cost of ~US$0.008   predictors (intelligence_centered and baseline_x_agents)
per 1% success gain (steep but tractable for structured tasks), Anthropic   are suggestive (PHolm < 0.10) and are discussed as directional patterns
hybrid reaches ~US$0.024 per 1% gain (3× worse, reflecting Anthropic’s   (Supplementary Table 10, Holm–Bonferroni). The Holm–Bonferroni
higher coordination cost) and Google falls in between at ~US$0.012 per   correction was applied to naive OLS P values (addressing multiplicity),
1% gain across architectures.                                        while the cluster-robust analysis (addressing pseudoreplication) was
                                                                reported separately. Under cluster-robust inference, single_agent_
Family-specific cost–performance patterns. Cross-family analysis  baseline (P = 0.004) and error_x_baseline (P = 0.030) both retain
shows distinct architectural preferences. OpenAI models show the   significance at α = 0.05. Across both correction approaches, however,
strongest hybrid gains on structured tasks (finance: 52% success hybrid  single_agent_baseline is the only predictor that is supported
versus 39% SAS; WorkBench: 56% hybrid versus 42% SAS). Anthropic  by the cluster-robust analysis and the Holm–Bonferroni correction
models show the most conservative and stable centralized perfor-   simultaneously, identifying baseline task difficulty as the single most
mance (mean 43% across tasks, s.d. of 2.3%, lowest variance). Google   robust determinant of absolute agent-system performance in our

Nature Machine Intelligence | Volume 8 | July 2026 | 1157–1172                                                               1166

## Страница 11

Article                                                                               https://doi.org/10.1038/s42256-026-01268-y

study; the ~45% capability-saturation threshold itself is a separately   Systematic study of role-specialized training or selection could enable
fitted baseline-by-team-size decision rule whose underlying interac-  more principled team composition.
tion is not cluster-robust confirmed. We retain baseline-scaled error      Our analysis identifies tool-heavy environments as an impor-
amplification as a cluster-robust mechanistic effect that supports the   tant descriptive failure mode for multi-agent coordination. The
architecture-level failure-mode taxonomy discussed in ‘Coordination   tool-count and efficiency-related interactions are direction-
efficiency, error dynamics and information transfer’ section but no   ally negative under naive OLS but do not survive the conservative
longer describe it as Holm-confirmed.                                cluster-robust framing with G = 6 benchmark clusters; we therefore
                                                                        treat them as deployment-relevant directional patterns rather than
Capability metric sensitivity. As an alternative to the intelligence   confirmed scaling laws. Developing specialized coordination proto-
index, we introduce the ACI, defined as each model’s mean single-agent   cols for tool-intensive tasks, such as explicit tool-access scheduling,
performance across all six benchmarks. The two metrics are only mod-   capability-aware task routing or hierarchical tool delegation, repre-
erately correlated (r = 0.45), consistent with the concern that static   sents an important direction for improving multi-agent reliability.
benchmark composites may diverge from dynamic agentic perfor-      Although we controlled prompts to be identical across conditions
mance. ACI improves cross-validated fit (R2CV: 0.373 → 0.413) with zero   for experimental validity, we did not optimize prompts specifically for
finding reversals, and we recommend ACI as the primary capability   each model or model family. Given known sensitivity of LLM behaviour
metric going forward (Supplementary Table 8, ACI).                   to prompt formulation, architecture-specific prompt tuning may yield
                                                                        different scaling characteristics than those reported here.
Cross-domain generalization. LODO cross-validation with n = 6      Our analysis spans six agentic benchmarks, which, while diverse
folds yields mean LODO R2 = − 2.09. The negative LODO R2 reflects   in task structure (deterministic tool use, quantitative reasoning,
the inherent difficulty of predicting absolute success rates across   sequential planning, dynamic web navigation, software engineer-
structurally diverse task domains (spanning tool counts from 2 to 16   ing and CLI tasks), may not capture the full spectrum of agentic task
and success rates from 5% to 80%) with a single regression surface that   characteristics. The strong differentiation in MAS effectiveness across
contains no dataset-specific parameters. However, the within-domain   these benchmarks (Fig. 2) suggests that additional environments,
cross-validated model correctly identifies the optimal architecture for   particularly those with novel task structures such as embodied agents,
87% of held-out configurations, indicating that relative performance   multi-user interaction or long-horizon temporal dependencies, would
rankings between architectures are preserved even when absolute   further strengthen confidence in the identified thresholds and scaling
predictions across domains are not. The empirically derived ~45%   principles. SWE-bench Verified and Terminal-Bench use 20-instance
capability-saturation selection rule is evaluated separately with a 94%   subsets (smaller than the 50–100 instances used for BrowseComp-Plus,
sign-match rate across all 16 model × benchmark configurations on   Finance Agent, PlanCraft and WorkBench) due to the computational
SWE-bench Verified and Terminal-Bench (P < 0.001 by binomial test;   cost of Docker-based evaluation environments. Bootstrap 95% con-
individual comparisons have wide bootstrap 95% CIs of ±20 percent-   fidence intervals (10,000 resamples) yield typical widths of ±20 pp
age points (pp) at n = 20, so this rate reflects a robust aggregate trend   per cell. While individual pairwise comparisons are underpowered at
rather than a per-cell test).                                  n = 20, aggregate trends across eight models ×2 benchmarks remain
                                                              robust (for example, the 45% threshold achieves a 94% match rate,
Discussion                                             P < 0.001 by binomial test). All per-cell bootstrap CIs are reported in
Although this work provides a quantitative selection rule and empiri-   Supplementary Table 11 (bootstrap CIs).
cal coordination patterns for agent systems across architectures and      The economic viability of multi-agent scaling remains a practical
model families, several limitations remain.                               barrier, rooted in part in the token-centric communication paradigm:
   Our framework systematically compares canonical coordination   current coordination requires agents to serialize reasoning into natural
structures with preliminary exploration of scaling number of agents up   language tokens (or at minimum, read shared context and output agree-
to nine. However, our empirical findings suggest that scaling to larger  ment signals), imposing non-trivial latency and cost floors. Emerging
collectives may face practical barriers under the tested token-based   approaches such as latent-space reasoning or direct activation sharing
coordination scheme: the communication overhead we measured  between models could circumvent this bottleneck, potentially altering
grows superlinearly with agent count, and coordination efficiency   the scaling dynamics we observe if interagent communication shifts
degrades substantially beyond moderate team sizes. Whether such  from token exchange to more efficient representational transfer. As
collectives can exhibit beneficial emergent behaviours, such as spon-  shown in our cost analysis (‘Coordination efficiency, error dynamics
taneous specialization or hierarchical self-organization or whether  and information transfer’ of the Results), token consumption and
communication bottlenecks dominate remains an open question   latency grow substantially with agent count, often without proportional
analogous to broader questions in complex adaptive systems.        performance gains. Future work should explore efficiency-oriented
    Although we explore capability heterogeneity by mixing models of   designs, such as sparse communication, early-exit mechanisms or
different intelligence levels within the same LLM family, all agents share   distilled coordinator models, to make multi-agent deployments eco-
identical base architectures differing only in scale and role prompts.   nomically feasible at scale. Complementary latency-oriented designs,
A preliminary investigation of 13 heterogeneous configurations on  where parallel agent branches execute speculatively and suboptimal
BrowseComp-Plus (mixing models within and across families) finds no   trajectories are pruned post hoc, may trade increased total compute for
evidence that model mixing bypasses the capability-saturation thresh-   reduced wall-clock time, a trade-off increasingly relevant for real-time
old: centralized heterogeneous configurations underperform their   applications where response latency dominates cost considerations.
strong-model homogeneous counterparts by a mean of 12.6 pp, while   Moreover, current agentic benchmarks capture dynamic text-based
decentralized configurations show marginal gains (+2.0 pp) largely   environments but do not yet include long-horizon temporal dependen-
attributable to the stronger constituent model (Supplementary Table 7,   cies or real-world feedback loops. Integrating embodied or multimodal
heterogeneous agents). Future work should investigate teams combin-   settings (for example, robotic control, medical triage or multi-user
ing different model architectures, domain-specialized fine-tuning or   social interaction) will test whether our observed coordination pat-
complementary reasoning strategies to understand when epistemic   terns generalize beyond symbolic domains.
diversity yields robustness rather than coordination noise. In addition,      Our regression analysis clusters observations at the dataset
our heterogeneity experiments (Extended Data Fig. 2) hint that certain   level (G = 6). With a small number of clusters, cluster-robust standard
models may be better suited for orchestration versus execution roles.   errors are known to be conservative, and several predictors that are

Nature Machine Intelligence | Volume 8 | July 2026 | 1157–1172                                                                   1167

## Страница 12

Article                                                                               https://doi.org/10.1038/s42256-026-01268-y

significant under naive OLS lose significance under cluster-robust      •   Independent: C = {(ai, aagg): ∀ i} (agent-to-aggregator only, no
inference (Supplementary Table 9, cluster-robust). We report both        peer communication)
naive and cluster-robust estimates throughout, framing dataset-level       •   Centralized: C = {(aorch, ai), (ai, aorch): ∀ i} (bidirectional star:
predictors as descriptive patterns supported by directional consist-        orchestrator ↔ subagents)
ency rather than coefficient-level confirmation under cluster-robust      •   Decentralized: C = {(ai, aj): ∀ i, j, i ≠ j} (all-to-all topology)
inference. LODO cross-validation yields negative R2 (−2.09), confirm-      •   Hybrid: C = Ccentralized ∪ Cpeer (orchestrator plus limited
ing that predicting absolute success rates on an unseen domain is not         peer-to-peer)
feasible without domain-specific parameters. The within-domain
cross-validated model nonetheless selects the correct architecture in      The orchestrator Ω (when present) determines: (1) how subagent
87% of held-out cases, suggesting that relative architecture rankings   outputs are aggregated (for example, majority voting and weighted
show partial stability across the tested domains even when absolute   synthesis), (2) whether the orchestrator can override subagent deci-
baselines do not. Frontier-model extrapolation in Supplementary Sec-   sions, (3) whether memory persists across coordination rounds and
tion B further shows that high-overhead architectures (for example,   (4) termination conditions based on consensus or quality thresholds.
hybrid) may require architecture-specific corrections beyond the     MAS architectures vary by how information and control propagate
training range; the 87% architecture-selection result should therefore  among agents, creating distinct trade-offs between computation, coor-
be interpreted as within-domain interpolation rather than unrestricted   dination and parallelization. Table 1 formalizes these trade-offs using
frontier-model extrapolation.                                     asymptotic notations over LLM calls, sequential depth, communication
                                                              overhead and memory complexity. We selected these five architectures
Methods                                                       to form a structural ablation of coordination mechanisms:
Agent system definition                                                          •  Independent isolates the effect of parallelism (ensemble)
Building on MAS formalism19,24, an agent system 𝒮𝒮= (A, E, C, Ω) consists        without communication
of a set of agents A = {a1, …, an} (where n ≥ 1), a shared environment E, a      •   Decentralized introduces peer-to-peer information fusion
communication topology C and an orchestration policy Ω. When        without hierarchy
∣A∣ = 1, we refer to this as a SAS. When ∣A∣ > 1, we refer to it as a MAS. Each      •   Centralized introduces hierarchical verification and bottle-
agent ai perceives, reasons and acts within the shared environment via       neck control
iterative feedback.                                                                    •  Hybrid examines the combination of hierarchy and lateral
     Formally, each agent ai is defined as a tuple Si = (Φi, 𝒜𝒜i, Mi, πi), where:          flexibility
   •   Φi is the reasoning policy (typically an LLM)
   •     𝒜𝒜i = 𝒞ToolCall(t, θ) ∶t ∈𝒯𝒯𝒯θ ∈Θt} is the action space consisting        This design allows us to systematically attribute performance gains
      of tool usage, where 𝒯𝒯 is the set of available tools (for           to specific coordination mechanics rather than generic ‘multi-agent’
     example, web search and code execution), and Θt represents      effects. Specific configurations include:
      valid parameter configurations for tool t
   •   Mi is the internal memory                                                    •   Independent MAS: A = {a1, …, an}, 𝒞𝒞= 𝒞(ai, aagg)}, Ω = synthesis_
   •    πi ∶ℋ→𝒜𝒜i is the decision function mapping observation            only. The synthesis_only policy concatenates subagent
      histories to actions                                             outputs without cross-validation or majority voting. The
                                                                     aggregator performs no analytical comparison of responses,
    The observation history space ℋ contains sequences of action–        ensuring that any performance differences arise purely from
observation pairs. The decision function πi is instantiated by the rea-         parallel exploration rather than error correction. This
soning policy Φi (the LLM): given a history hi,t, the LLM generates a        achieves maximal parallelization but minimal coordination,
reasoning trace and selects the next action.                                  suitable for ensemble-style reasoning. For state-based Docker
    For instance, a history hi,t = ((‘search(query=‘pandas’)’, ‘Found 5       benchmarks (SWE-bench Verified, Terminal-Bench), the
files’), …) is processed by Φi to produce the next tool call αi,t+1.                released implementation shares a single Docker container per
    At timestep t, agent ai selects an action αi,t ∈𝒜𝒜i according to:            task instance across all subagents of any given multi-agent
                                                                        configuration (independent included); the ‘independent’ label
                  αi,t = πi(hi,t),    oi,t = E(αi,t),   hi,t+1 = fi(hi,t, αi,t, oi,t),                  therefore refers to the absence of interagent message
                                                                exchange rather than to separation of file-system or terminal
where E denotes the environment, and hi,0 = {s0} contains the initial task          state. The synthesized text is returned as agent_output and a
specification. The history update function   fi ∶ℋ× 𝒜𝒜i × 𝒪𝒪→𝒪         deterministic insertion-order environment status (the first
appends the new action–observation pair to the agent’s history: hi,t+1 =        subagent’s) is reported as final_env_output, without
fi(hi,t, αi,t, oi,t) = hi,t ⊕ (αi,t, oi,t), subject to context window truncation when        success-based selection or voting. Results on these two
|hi,t+1| > MAX_TOKENS. This update mechanism applies uniformly to both       benchmarks should be interpreted as deterministic
SAS and MAS configurations. Communication between agents occurs         parallel-exploration baselines under shared environment
through explicit message passing in the orchestration layer.                  state rather than literal state-level synthesis or fully isolated
                                                                                 parallel execution.
SAS. A SAS contains one reasoning locus (∣A∣ = 1, where A is the agent      •   Centralized MAS: A = {aorch, a1, …, an}, C = {(aorch, ai), (ai, aorch):
set). All perception, reasoning, and action occur within a single sequen-       ∀ i} (bidirectional star), Ω = hierarchical. A single orchestrator
tial loop, producing computational complexity O(k) where k is the        coordinates r rounds across n subagents (O(rnk)). Sequential
number of reasoning iterations. SAS has zero communication overhead       depth equals r while parallelization factor remains n. This
and minimal memory O(k) but limited capacity for decomposition        design stabilizes reasoning but creates a bottleneck at the
or verification.                                                             orchestrator.
                                                                                           •   Decentralized MAS: A = {a1, …, an}, C = {(ai, aj): ∀ i, j, i ≠ j},
MAS. A MAS is an agent system 𝒮𝒮 with ∣A∣ > 1, where agents interact     Ω = consensus. Agents communicate in d sequential debate
through communication topology C and orchestration policy Ω.           rounds (O(dnk)). Memory complexity is O(dnk) as each agent
    Communication topology C defines information flow patterns         stores its own debate history. The consensus threshold (0.7 in
between agents:                                                       the released configuration) records threshold-approved

Nature Machine Intelligence | Volume 8 | July 2026 | 1157–1172                                                                1168

## Страница 13

Article                                                                               https://doi.org/10.1038/s42256-026-01268-y

      findings during debate; when no answer reaches that threshold,    •   Sequential interdependence: later actions depend on earlier
     the final system output is selected by plurality/majority vote          observations; a one-shot policy cannot achieve high reward.
     over the final-round answers with a deterministic tie-break.          •   Partial observability: critical state information is hidden and
   •  Hybrid MAS: A = {aorch, a1, …, an}, C = star + peeredges, Ω =          must be acquired through active querying or tool use.
      hierarchical + lateral. Combines orchestrated hierarchy with       •   Adaptive strategy formation: the policy must update internal
      limited peer communication (O((r + p)nk), where p is the num-       beliefs based on new evidence obtained through interaction.
     ber of peer rounds). This inherits orchestrator control while
     enabling lateral exchange between agents.                      Benchmarks lacking these conditions, such as GSM8K and MMLU,
                                                                  evaluate static reasoning rather than agentic capabilities. The term
Communication versus coordination. We distinguish communication   ‘agentic’ is defined relative to current model capabilities. GSM8K could
(message passing between agents) from coordination (strategic direc-   in principle be posed as agentic by providing calculator tools, though
tion of agent activities). In centralized systems, coordination occurs   current LLMs do not require such scaffolding. Conversely, tasks that are
through the orchestrator’s task decomposition and progress monitor-   agentic today, such as SWE-bench, may become solvable via single-shot
ing, while communication involves passing findings between orches-   inference as models improve. Our evaluation focuses on tasks that
trator and workers. In decentralized systems, communication and   currently require multi-step interaction for non-trivial performance.
coordination are intertwined through debate rounds where agents both
exchange information and collectively steer problem-solving direction.  Why environment feedback matters. Real-world deployments such
    Thus, SAS represents the minimal unit of agentic computation   as coding assistants, financial analysts and embodied robots oper-
(O(k)), while MAS configurations explore the scaling frontier of coordi-   ate under uncertainty and non-stationarity. Tasks solvable by direct
nation complexity, ranging from fully parallel and communication-free   prompting measure linguistic knowledge, whereas agentic benchmarks
(independent) to fully coupled with peer consensus (decentralized).   evaluate the process of intelligence: exploration, adaptation and coor-
These configurations allow us to test whether performance gains arise   dination. Hence, our benchmarks are chosen such that (1) base LLMs
from agent coordination and specialization or merely from increased  perform poorly in single-shot mode, and (2) non-trivial performance
compute through ensembling. Our taxonomy covers coordination   requires multi-step environment interaction.
patterns common in LLM-based agentic systems, focusing specifically
on communication topology, one of several orthogonal MAS design  Benchmark design principles. Extending the framework pro-
dimensions including agent specialization32, memory architecture and  posed by Zhu et al. 24, we introduce additional criteria to isolate
aggregation strategy. Classical coordination mechanisms such as black-   architectural effects:
board systems assume structured message formats rather than natural      •   Controlled tool interface: identical tool APIs and observation
language, limiting their direct applicability to LLM-based agents19,40.         structures for all architectures to eliminate confounds from
   We formally define the task-level error rate as E = 1 − P, where P is         external feedback quality.
the fraction of tasks successfully resolved. The task-level error ampli-      •   Controlled for parametric knowledge: within each model
fication factor Ataske  = EMAS/ESAS quantifies the relative error rate of a         family, evaluation emphasizes adaptive reasoning over
MAS compared with its single-agent baseline; Ataske  > 1 indicates that       memorized facts. Cross-family comparisons (Results) account
coordination introduces net errors, while Ataske  < 1 indicates net error         for inherent knowledge base differences through baseline
suppression. We additionally define a trace-level error amplification        normalization.
factor Atracee   that measures how much extra computational work arises      •   Action–observation loop length: each benchmark enforces
from interagent coordination failures, estimated from execution-trace         non-trivial trajectory length L > 3 to ensure sequential
token analysis (‘Coordination efficiency, error dynamics and informa-        reasoning.
tion transfer’ section of the Results). Both metrics consistently show      •  Comparative normalization: scores are normalized to the best
that architectures with verification mechanisms contain errors more         single-agent baseline, measuring coordination gain or loss.
effectively than independent coordination, though they differ in abso-
lute magnitude (Ataske   ≈1.1 versus Atracee   ≈4) because they capture com-       Table 3 summarizes the six benchmark environments, task types
plementary aspects of error dynamics.                          and evaluation designs used throughout this study.

Agentic tasks and benchmarks                             Setup
Following and extending the framework of Zhu et al. 24, we operational-  Benchmarks. We conducted 260 experiments across six benchmarks
ize a task T as agentic when optimal performance substantially benefits   spanning deterministic to open-world task structures: WorkBench
from adaptive interaction. Formally, if τ = 𝒞(at, ot)} Tt=0 represents an   (deterministic code execution and tool use with objective pass/fail
interaction trajectory, then                                                 criteria), Finance Agent (multi-step quantitative reasoning and risk
                                                                  assessment), PlanCraft (spatiotemporal planning under constraints),
                     maxπ𝔼𝔼[R(τ)] −maxg𝔼𝔼[R(g(x))]                                 > δ,                 BrowseComp-Plus (dynamic web navigation, information extraction
                             maxπ𝔼𝔼[R(τ)]                          and cross-page synthesis), SWE-bench Verified (real-world software
                                                                   engineering; GitHub issue resolution with seven tools including bash,
where π represents an interactive policy, g represents any single-    file editing and test execution) and Terminal-Bench (diverse CLI tasks
forward-pass function, R measures task success, δ is a task-   spanning system administration, security and machine learning train-
dependent threshold and the expectation is over task instances x and   ing; two tools). BrowseComp-Plus, Finance Agent, PlanCraft and Work-
stochastic environment dynamics. This definition captures tasks where  Bench each contribute 45 configurations (9 models × 5 architectures),
interaction provides meaningful advantage over the best possible   while SWE-bench Verified and Terminal-Bench each contribute 40
single-shot approach.                                             configurations (8 models × 5 architectures, as Claude Sonnet 3.7 is
    The expected return of an optimal policy thus hinges on sequential   deprecated). BrowseComp-Plus, Finance Agent, PlanCraft and Work-
observation-action feedback, requiring agents to gather information,  Bench use 50–100 instances per configuration. SWE-bench Verified
plan and revise hypotheses under partial observability. Building on the  and Terminal-Bench use 20-instance subsets due to the computational
Agentic Benchmark Checklist24, we formalize three necessary proper-   cost of Docker-based evaluation (see Supplementary Table 11 (boot-
ties for agentic benchmarks:                                         strap CIs) for bootstrap confidence intervals). The tool-count range

Nature Machine Intelligence | Volume 8 | July 2026 | 1157–1172                                                               1169

## Страница 14

Article                                                                               https://doi.org/10.1038/s42256-026-01268-y

spans {2, 3, 4, 5, 7, 16} across all six benchmarks. BrowseComp-Plus   58%, decentralized at 263% and centralized at 285% relative to the
exhibits the highest performance variability across experimental con-   single-agent baseline (Extended Data Table 2); cost-performance
figurations (coefficient of variation σ/μ = 0.32 computed across all 45   trade-offs across these configurations are shown in Extended Data Fig 1.
BrowseComp-Plus runs spanning architectures and model families,
with Anthropic models contributing substantial variance due to lower   Metrics and validation. Primary outcome is task success/accuracy
absolute performance, where σ is the standard deviation of success   (domain-dependent: factual correctness for Finance Agent, task com-
rates, and μ is the mean success rate). By comparison, WorkBench   pletion for WorkBench, goal satisfaction for PlanCraft, page synthesis
(coefficient of variation (CV) of 0.12), Finance Agent (CV of 0.18) and   accuracy for BrowseComp-Plus). Secondary metrics include: (1) factual
PlanCraft (CV of 0.21) show lower variability, indicating more stable   error rate E via domain-specific validators (Cohen’s κ (ref. 41): Finance
performance across configurations.                              Agent κ = 0.91, WorkBench κ = 0.89, PlanCraft κ = 0.87 and BrowseComp-
                                                                    Plus κ = 0.88; exceeding 0.80, indicating strong inter-rater reliability);
LLMs and intelligence scaling. We evaluate three LLM families across   (2) information gain Δℐ from pre- versus post-coordination uncertainty
multiple model sizes, spanning externally standardized intelligence   proxies (Supplementary Section E.5); (3) token-overlap structure
index values from 42 to 71 (a composite capability score integrating   across agent rationales, labelling tokens as unique (appearing in
reasoning, coding and knowledge benchmarks; see Supplementary   exactly one agent), shared (two or more agents) or contradictory
Section A):                                                        (operationalized as BERTScore42 similarity <0.3 between assertion
   •  OpenAI: GPT-5-nano, GPT-5-mini, GPT-5                            pairs; this 0.3 cut-off is an operational heuristic for the present analysis,
   •   Google: Gemini-2.0 Flash, Gemini-2.5 Flash, Gemini-2.5 Pro      not a calibrated semantic-opposition threshold); (4) efficiency metrics
   •   Anthropic: Claude Sonnet 3.7, Claude Sonnet 4, Claude          including success per 1,000 tokens and cost-normalized performance.
     Sonnet 4.5                                                             All metrics are normalized per reasoning turn and per token to enable
                                                                      cross-architecture comparison. We select coordination metrics based
Claude Sonnet 3.7 was deprecated by Anthropic in February 2026 and  on two criteria: (1) direct measurability from experimental traces
is therefore unavailable for SWE-bench Verified and Terminal-Bench.   without requiring ground-truth labels beyond task success, and (2)
On these two benchmarks, the Anthropic family includes Claude Sonnet   coverage of distinct aspects of coordination–performance relation-
4 and Claude Sonnet 4.5, while the OpenAI and Google families remain   ships identified in prior work20. We excluded metrics requiring subjec-
unchanged, yielding eight models per benchmark and a total of N = 260   tive human annotation (for example, solution creativity) or those
configurations. Architecture-specific scaling slopes are consistent   exhibiting high collinearity with included measures (for example, total
across the three tested families. The maximum difference between  message count correlates r > 0.92 with overhead). VIF analysis con-
any two LLM families is Δmax = 0.023 (computed as maxi,j|̂βarch,i −̂βarch,j|   firmed no severe multicollinearity among retained predictors (all VIF
across families i, j ∈ {OpenAI, Google, Anthropic}), with CV <0.02 across   <5). Specifically:
families. These patterns are consistent within the evaluated      •   Coordination overhead: O = (TMAS − TSAS)/TSAS × 100%: captures
model range and should not be interpreted as model-agnostic mecha-        computational cost, identified as a primary bottleneck in
nisms beyond it; the LODO cross-validation in ‘Robustness and sensitiv-        production multi-agent deployments.
ity analysis’ section in the Results cautions against extrapolating      •  Message density: c (interagent messages per reasoning turn):
absolute baselines outside the tested domains. To ensure computa-         quantifies communication intensity, a key factor in coordina-
tional fairness, all systems were run under matched per-system         tion scaling.
compute ceilings (matched reasoning-token budgets and identical      •  Redundancy rate: R (mean cosine similarity of agent out-
tool-call access), with iteration counts serving as safety/termination        put embeddings): measures agent agreement, relevant for
ceilings rather than the primary fairness control. Configurations ter-        ensemble-based error correction.
minate earlier on task completion, consensus, or per-agent budget      •   Coordination efficiency: Ec = S/(T/TSAS) (success normalized by
exhaustion. MAS configurations therefore allocate the per-system         relative turn count): normalizes success by cost for deploy-
token budget across parallel agents (each receiving a smaller share of       ment decisions.
the total budget than a single agent would), whereas SAS spends the      •   Error amplification: Atracee   (trace-level error propagation factor,
entire per-system budget within a single reasoning trajectory;        estimated from execution-trace token analysis): quantifies
iteration-level ceilings for each architecture are reported in Supple-      how coordination failures compound through agent interac-
mentary Section E.2.                                                           tions. The complementary task-level metric Ataske  = EMAS/ESAS is
                                                                      defined in this section.
Agent architectures and complexity. We tested five coordination
topologies. The SAS is paired with four MAS variants, namely independ-  Implementation scope and reproducibility. To clarify reproduc-
ent, centralized, decentralized and hybrid. Rather than attempting    ibility, the repository43 documents implementation-scope differences
exhaustive coverage of all possible architectures, we selected these  between the public normalized adapters and the upstream bench-
four MAS configurations to form a structured ablation over two key  mark harnesses used for bit-for-bit parity. The public Finance-Agent
coordination dimensions, namely (1) orchestrator presence (hierarchi-  and WorkBench adapters reproduce the coordination pipeline on
cal control versus flat structure) and (2) peer communication (direct   normalized tool and grading surfaces, whereas exact upstream-score
subagent interaction versus isolated execution). Independent isolates   parity requires running the upstream benchmark harnesses with our
pure ensemble effects without any interagent communication. Cen-   coordination wrappers. The main differences concern tool availability,
tralized introduces hierarchical verification through an orchestrator   grading surfaces, provider-side nondeterminism, upstream benchmark
bottleneck. Decentralized enables peer-to-peer information fusion   versioning, Docker/runtime variability, shared-container semantics for
without hierarchy. Hybrid combines both mechanisms (see Table 1 for   Docker-based multi-agent runs and the metadata-only 500-character
formal complexity characterization). This design enables controlled   cap used by the auto-submission helper. For SWE-bench Verified and
attribution of performance differences to specific coordination mecha-   Terminal-Bench, multi-agent configurations share one Docker con-
nisms rather than generic ‘multi-agent’ effects. Coordination complex-   tainer per task instance. Therefore, the Independent architecture
ity is parameterized by communication overhead, defined as the total   denotes the absence of inter-agent message exchange rather than
number of interagent message exchanges required per task. Empirical   isolated file-system or terminal state. For Finance-Agent and Work-
values range from 0% (SAS) to 515% (hybrid), with independent at   Bench, grading uses the full aggregated agent_output, not the capped

Nature Machine Intelligence | Volume 8 | July 2026 | 1157–1172                                                                 1170

## Страница 15

Article                                                                               https://doi.org/10.1038/s42256-026-01268-y

submit reasoning metadata field. The reproduction guide and change   8.   Kim, Y. et al. Mdagents: an adaptive collaboration of LLMs for
log enumerate these scope differences in detail.                         medical decision-making. Adv. Neural Inf. Process.Syst. 37,
                                                                 79410–79452 (2024).
Data availability                                                       9.   Yu, Y. et al. Finmem: a performance-enhanced LLM trading agent
All benchmark datasets used in this study are publicly avail-       with layered memory and character design. IEEE Trans. Big Data
able: BrowseComp-Plus36 (https://arxiv.org/abs/2508.06600, 100          11, 3443–3459 (2025).
instances), Finance Agent37 (https://arxiv.org/abs/2508.00828,   10.  Zhang, Z. et al. Sustainability assessment using multimodal
50 instances), PlanCraft26 (https://arxiv.org/abs/2412.21033, 100          artificial intelligence agents. Nat. Electron. https://doi.org/
instances), WorkBench38 (https://arxiv.org/abs/2405.00823,       10.1038/s41928-026-01653-w (2026).
100-instance stratified subset of 690 upstream tasks across six    11.  Gottweis, J. et al. Towards an AI co-scientist. Preprint at https://
domains, deterministic shuffle with seed 42), SWE-bench Verified25       arxiv.org/abs/2502.18864 (2025).
(https://www.swebench.com/, 500 instances, 20-instance subset    12.  Mitchener, L. et al. Kosmos: an AI scientist for autonomous
selected via deterministic shuffle with seed 42) and Terminal-Bench30        discovery. Preprint at https://arxiv.org/abs/2511.02824 (2025).
(https://www.tbench.ai/, 89-instance release snapshot used in our   13.  Kim, Y. et al. CoDaS: AI co-data-scientist for biomarker discovery
experiments, first 20 instances; the upstream benchmark may        via wearable sensors. Preprint at https://arxiv.org/abs/2604.14615
include additional tasks in later releases). Aggregate metrics for all        (2026).
260 configurations are reported in the Results and in Supplementary   14.   Li, J., Zhang, Q., Yu, Y., Fu, Q. & Ye, D. More agents is all you
Tables 1–11. Per-instance correctness data for SWE-bench Verified and       need. Trans. Mach. Learn. Res. https://openreview.net/
Terminal-Bench are available via Zenodo at https://doi.org/10.5281/      forum?id=bgzUSZ8aeg (2024).
zenodo.20388843 (ref. 43).                                                    15.  Qian, C. et al. Scaling large language model-based multi-agent
                                                                              collaboration. In Thirteenth International Conference on Learning
Code availability                                                   Representations (eds Yue, Y. et al.) 41488–41505 (2025); https://
The complete experimental framework, including all coordination       openreview.net/forum?id=K3n5jPkrU6
architectures (single-agent, independent, centralized, decentralized,   16.  Du, Y., Li, S., Torralba, A., Tenenbaum, J. B. & Mordatch, I. Improving
hybrid), prompt templates, configuration files, analysis scripts and        factuality and reasoning in language models through multiagent
sanitized execution traces, is publicly available via GitHub at https://       debate. In Proc. 41st International Conference on Machine Learning
github.com/ybkim95/agent-scaling (release tag v2.1.3). The code       (eds Salakhutdinov, R. et al.) 11733–11763 (PMLR, 2024).
release used for this Article (version v2.1.3) is available via Zenodo    17.  Chen, W. et al. Agentverse: facilitating multi-agent collaboration
at https://doi.org/10.5281/zenodo.20388843 (ref. 43). A persistent      and exploring emergent behaviors. In Twelfth International
Zenodo DOI (https://doi.org/10.5281/zenodo.20144433) resolves to the       Conference on Learning Representations (eds Kim, B. et al.)
most recent archived version. The released code realizes the algorithms      20094–20136 (2024); https://openreview.net/forum?id=
specified in Methods; the numerical results reported in the paper are      EHg5GDnyq1
the canonical cluster runs of these algorithms. A reproduction guide   18.  Tran, K.-T. et al. Multi-agent collaboration mechanisms: a survey
(REPRODUCTION.md) gives step-by-step instructions, including set-up        of LLMs. Preprint at https://arxiv.org/abs/2501.06322 (2025).
scripts for downloading Finance-Agent and WorkBench from their   19.  Guo, T. et al. Large language model based multi-agents: a survey
upstream repositories without redistribution. For Finance-Agent and        of progress and challenges. In Proc. Thirty-Third International
WorkBench, the release provides normalized adapters that reproduce        Joint Conference on Artificial Intelligence (ed. Larson, K.)
the coordination pipeline on the reduced tool and grading surfaces      8048–8057 (International Joint Conferences on Artificial
detailed in the Methods; exact upstream parity for those two bench-        Intelligence Organization, 2024).
marks requires running the upstream benchmark harnesses with our   20. Cemri, M. et al. Why do multi-agent LLM systems fail? Adv. Neural
coordination wrappers.                                                                       Inf. Process. Syst. 38 (2025).
                                                                                    21.  Gao, M. et al. Single-agent or multi-agent systems? Why not both?
References                                                              Preprint at https://arxiv.org/abs/2505.18286 (2025).
1.   Wang, L. A survey on large language model based autonomous      22.  Neubig, G. Don’t sleep on single-agent systems. OpenHands
    agents. Front. Comput. Sci. 18, 186345 (2024).                          https://openhands.dev/blog/dont-sleep-on-single-agent-systems
2.  Zhang, K., Li, J., Li, G., Shi, X. & Jin, Z. CodeAgent: enhancing code        (26 September 2024).
    generation with tool-integrated agent systems for real-world        23.  Yan, W. Don’t Build Multi-agents (12 June 2025); https://cognition.
     repo-level coding challenges. In Proc. 62nd Annual Meeting of            ai/blog/dont-build-multi-agents
    the Association for Computational Linguistics (Volume 1: Long        24. Zhu, Y. et al. Establishing best practices in building rigorous
    Papers) (eds Ku, L.-W., Martins, A. & Srikumar, V.) 13643–13658           agentic benchmarks. In Thirty-ninth Annual Conference on Neural
     (Association for Computational Linguistics, 2024).                       Information Processing Systems Datasets and Benchmarks Track
3.   Yang, J. et al. Swe-agent: Agent-computer interfaces enable              (2025); https://openreview.net/forum?id=E58HNCqoaA
    automated software engineering. Adv. Neural Inf. Process. Syst.      25.  Jimenez, C. E. et al. SWE-bench: Can language models resolve
    37, 50528–50652 (2024).                                               real-world github issues? In Twelfth International Conference on
4.   Wei, J. et al. Browsecomp: a simple yet challenging benchmark          Learning Representations (eds Kim, B. et al.) 54107–54157 (2024);
     for browsing agents. Preprint at https://arxiv.org/abs/2504.12516         https://openreview.net/forum?id=VTF8yNQM66
     (2025).                                                            26. Dagan, G., Keller, F. & Lascarides, A. PlanCraft: an evaluation
5.   Yao, S., Chen, H., Yang, J. & Narasimhan, K. Webshop: towards           dataset for planning with LLM agents. In Conference on Language
    scalable real-world web interaction with grounded language           Modeling (COLM 2025) 1–27 (2025).
    agents. Adv. Neural Inf. Process. Syst. 35, 20744–20757                27.  Liu, X. et al. Agentbench: Evaluating LLMs as agents. In Twelfth
     (2022).                                                                     International Conference on Learning Representations (eds Kim, B.
6.   Heydari, A. A. et al. The anatomy of a personal health agent.              et al.) 52989–53046 (2024).
     Preprint at https://arxiv.org/abs/2508.20148 (2025).                 28. Kapoor, S., Stroebl, B., Siegel, Z. S., Nadgir, N. & Narayanan, A.
7.   McDuff, D. et al. Towards accurate differential diagnosis with large        AI agents that matter. Trans. Mach. Learn. Res. https://openreview.
    language models. Nature 642, 451–457 (2025).                        net/forum?id=Zy4uFzMviZ (2025).

Nature Machine Intelligence | Volume 8 | July 2026 | 1157–1172                                                                           1171

## Страница 16

Article                                                                               https://doi.org/10.1038/s42256-026-01268-y

29.  Barrès, V., Dong, H., Ray, S., Si, X. & Narasimhan, K. τ2-bench:          All authors accept responsibility for the accuracy and integrity of all
    evaluating conversational agents in a dual-control environment.     aspects of the research.
     Preprint at https://arxiv.org/abs/2506.07982 (2025).
30.  Merrill, M. A. et al. Terminal-bench: Benchmarking agents on     Funding
     hard, realistic tasks in command line interfaces. In Fourteenth        This study was funded by Google LLC.
     International Conference on Learning Representations (2026);
    https://openreview.net/forum?id=a7Qa4CcHak             Competing interests
31.  Chen, M. et al. Evaluating large language models trained on code.    CJ.P., S.S., A.A.H., Y. Yan, Y.Z., Y.L., M.M., Y. Yang, S.P., T.A., D.M.
     Preprint at https://arxiv.org/abs/2107.03374 (2021).               and X.L. are employees of Alphabet Inc. (Google LLC) and/or own
32. Hong, S. et al. MetaGPT: Meta programming for a multi-agent       Alphabet stock as part of their standard compensation package.
     collaborative framework. In Twelfth International Conference           Y.K., K.G. and Z.Z. were affiliated with Google Research as student
    on Learning Representations (2024); https://openreview.net/         researchers during this work, and X.X. and Y.D. were affiliated with
    forum?id=VtmBAGCN7o                                    Google Research as visiting researchers (with primary academic
33. Malone, T. W. & Crowston, K. The interdisciplinary study of          appointments elsewhere). Neither Y.K., K.G., Z.Z., X.X. or Y.D. are
     coordination. ACM Comput. Surv. 26, 87–119 (1994).              employees or stockholders of Alphabet Inc. The other authors declare
34. McGrath, J. E. Social Psychology: A Brief Introduction             no competing interests.
     (Holt, Rinehart and Winston, 1964).
35.  Lencioni, P. M. The Five Dysfunctions of a Team: A Leadership Fable  Additional information
    (John Wiley and Sons, 2002).                                Extended data is available for this paper at
36. Chen, Z. et al. BrowseComp-Plus: a fair and disentangled            https://doi.org/10.1038/s42256-026-01268-y.
    evaluation benchmark for deep search agents. In Proc. 64th
    Annual Meeting of the Association for Computational Linguistics     Supplementary information The online version
    (Volume 1: Long Papers) (eds Liakata, M.et al.) 22349–22370         contains supplementary material available at
     (Association for Computational Linguistics, 2026).                  https://doi.org/10.1038/s42256-026-01268-y.
37.  Bigeard, A., Nashold, L., Krishnan, R. & Wu, S. Finance agent
    benchmark: benchmarking LLMs on real-world financial research   Correspondence and requests for materials should be addressed to
     tasks. Preprint at https://arxiv.org/abs/2508.00828 (2025).          Yubin Kim, Daniel McDuff or Xin Liu.
38.  Styles, O. et al. WorkBench: a benchmark dataset for agents in a
     realistic workplace setting. In Conference on Language Modeling    Peer review information Nature Machine Intelligence thanks Lichao Sun
     (2024); https://openreview.net/forum?id=4HNAwZFDcH          and the other, anonymous, reviewer(s) for their contribution to the
39. Kaplan, J. et al. Scaling laws for neural language models. Preprint   peer review of this work.
     at https://arxiv.org/abs/2001.08361 (2020).
40.  Xi, Z. et al. The rise and potential of large language model based     Reprints and permissions information is available at
    agents: a survey. Sci. China Inf. Sci. 68, 121101 (2025).               www.nature.com/reprints.
41.  Cohen, J. A coefficient of agreement for nominal scales. Educ.
     Psychol. Meas. 20, 37–46 (1960).                                   Publisher’s note Springer Nature remains neutral with regard to
42. Zhang, T., Kishore, V., Wu, F., Weinberger, K. Q. & Artzi, Y.              jurisdictional claims in published maps and institutional affiliations.
    BERTScore: evaluating text generation with BERT. In International
    Conference on Learning Representations (ICLR 2020) (2020).      Open Access This article is licensed under a Creative Commons
43. Kim, Y. agent-scaling: v2.1.3. Zenodo. https://doi.org/10.5281/        Attribution-NonCommercial-NoDerivatives 4.0 International License,
    zenodo.20388843 (2026).                                   which permits any non-commercial use, sharing, distribution and
                                                                   reproduction in any medium or format, as long as you give appropriate
Author contributions                                            credit to the original author(s) and the source, provide a link to the
Y.K., K.G. and X.L. conceived the study. Y.K., K.G., D.M. and X.L. had       Creative Commons licence, and indicate if you modified the licensed
major involvement in designing various aspects of the study. Y.K.         material. You do not have permission under this licence to share
and K.G. had major involvement in data acquisition and ingestion.       adapted material derived from this article or parts of it. The images
Y.K. and K.G. created initial case studies and preprocessed data. Y.K.      or other third party material in this article are included in the article’s
performed experiments. Y.K. analysed results. X.L. administered the      Creative Commons licence, unless indicated otherwise in a credit
project. Chanwoo Park, Chunjong Park, S.S., A.A.H., Y. Yan, Z.Z., Y.Z.,       line to the material. If material is not included in the article’s Creative
Y.L., M.M., P.P.L., H.W.P., Y. Yang, X.X., Y.D., S.P., T.A., D.M. and X.L.      Commons licence and your intended use is not permitted by statutory
provided organizational support for the project. Y.K., K.G., Chanwoo      regulation or exceeds the permitted use, you will need to obtain
Park, Chunjong Park, S.S., A.A.H., Y. Yan, Z.Z., Y.Z., Y.L., M.M., P.P.L.,       permission directly from the copyright holder. To view a copy of this
H.W.P., Y. Yang, X.X., Y.D., S.P., T.A., D.M. and X.L. wrote and revised        licence, visit http://creativecommons.org/licenses/by-nc-nd/4.0/.
the initial manuscript. All authors had access to the data and have
edited, reviewed and approved the final manuscript for publication.   © The Author(s) 2026





Nature Machine Intelligence | Volume 8 | July 2026 | 1157–1172                                                                     1172

## Страница 17

Article                                                                               https://doi.org/10.1038/s42256-026-01268-y

Extended Data Table 1 | Progressive predictive-model comparison across nested specifications

 Model Specification                                                           R^2 (train)     R^2 (CV)  AIC     Number of parameters

 Intelligence + Tools + Agents                                                          0.405         0.36      -238.8   4
 Intelligence + Tools + Agents + Coordination Structure                                       0.428         0.363     -243.2    10
 Intelligence + Tools + Agents + Coordination Structure + Single-agent baseline                 0.429         0.358     -242       11
 Intelligence + Tools + Agents + Coordination Structure + Single-agent baseline + Interaction      0.463          0.373     -236.3   20
 terms
Predictive-model comparison. Progressive inclusion of empirical coordination metrics improves cross-validated predictive fit. All models use 5-fold cross-validation with experiment-level
holdout (N=260, six benchmarks). The full interaction model achieves the highest cross-validated fit (R 2CV = 0.373); AIC favors the smaller ‘+ Coordination structure’ specification, reflecting the
parameter cost of the interaction terms relative to their cross-validated gain.





Nature Machine Intelligence

## Страница 18

Article                                                                               https://doi.org/10.1038/s42256-026-01268-y

Extended Data Table 2 | Coordination metrics across architectures and families

 Metric                             SAS           Independent           Decentralized             Centralized          Hybrid

 Success Rate (S)                           0.466           0.37                    0.477                    0.463                0.452
 Turns                                               7.2 ± 2.1            11.4 ± 3.2                  26.1 ± 7.5                      27.7 ± 8.1              44.3 ± 12.4
 Overhead (O%)                      0             58                  263                    285                  515
 Message Density (c)                   0           0                        0.41                      0.39                  0.24
 Redundancy (R)                     0               0.48 ± 0.09            0.50 ± 0.06                 0.41 ± 0.06            0.46 ± 0.04
 Efficiency (Ec)                             0.466           0.234                   0.132                        0.12                  0.074
 Error Amplification (A_e^{trace-level})            1                   17.2                        7.8                         4.4                         5.1
 Success per 1K tokens                           67.7             42.4                    23.9                         21.5                     13.6
Coordination metrics across architectures and families (N=260 configurations across six benchmarks). Metric values are architecture-level constants measured from execution-trace analysis
and applied uniformly across all benchmarks. All systems run under matched per-system compute ceilings. Trace-level error amplification (A e) is measured from execution-trace token
analysis.





Nature Machine Intelligence

## Страница 19

Article                                                                               https://doi.org/10.1038/s42256-026-01268-y





Extended Data Fig. 1 | Cost-performance trade-offs across model families         with horizontal and vertical error bars denoting standard error of the mean in
and coordination architectures. Cost-performance trade-offs across model        cost and performance, respectively. The optimal coordination pattern differs
families and architectures. Data from BrowseComp-Plus, Finance Agent,            across model families: OpenAI models show consistent gains from Centralized
PlanCraft, and WorkBench (SWE-bench Verified and Terminal-Bench use          and Hybrid configurations despite higher costs; Google models display marginal
Docker-based evaluation with different cost structures). Comparative analysis      improvements with a clear efficiency plateau; Anthropic models show higher
of single-agent and multi-agent architectures (Independent, Decentralized,         variance and occasional MAS underperformance. Cross-family differences
Centralized, and Hybrid) across three LLM families. Each point represents the       should be interpreted as empirical cost-performance signatures rather than
mean agentic performance (%) versus normalized cost per experiment (USD),        isolated mechanisms.





Nature Machine Intelligence

## Страница 20

Article                                                                               https://doi.org/10.1038/s42256-026-01268-y

                           Centralized                                            Decentralized
    0.5
                                                   0.42                           0.6                                                                                                         0.53
                                                                                              0.50    0.4                                                                                                                                0.47                                               0.37           0.37                  0.5              0.34                        0.34                                      0.32                                                                                                    0.43       0.42
    0.3         0.27                                                     0.4                            0.37
                                                                                                   0.32
                           0.21                                   0.22     0.23                                              0.29                                                                       0.3                       0.19                                            0.18 Accuracy 0.2                                                                                                                                         Accuracy
                                                                       0.2                                                         0.18
    0.1                                                                       0.1

    0.0                                                                0.0
             OpenAI           Anthropic          Gemini                  OpenAI           Anthropic          Gemini

          All High-intelligence                    All Low-intelligence                        All High-intelligence        All Low-intelligence
       High Orch. + Low Sub-agents     Low Orch. + High Sub-agents         Mixed intelligence

Extended Data Fig. 2 | Agent-heterogeneity effects on multi-agent                Gemini-2.5 Pro; low-capability: GPT-5 nano, Claude Sonnet 3.7, Gemini-2.0
performance on BrowseComp-Plus. Agent heterogeneity effects on multi-agent    Flash. These exploratory results do not show that model mixing bypasses the
performance. Performance comparison of centralized (orchestrator-subagents)     capability-saturation threshold. Canonical Δ values relative to the homogeneous
and decentralized (peer debate with voting) architectures on BrowseComp-        strong-model baseline are in Supplementary Table S7: (1) no heterogeneous
Plus across three LLM families. Each bar shows mean accuracy over n=100           centralized configuration outperforms the homogeneous strong-model baseline
independent task instances per (architecture, configuration) cell; bars are single-   (mean Δ = − 0.126 over seven configs); (2) decentralized mixed teams approach
run point estimates, so no error bars are shown. Bootstrap CIs for the separate       or slightly exceed it (mean Δ = + 0.020 over six configs), largely from stronger
SWE-bench Verified and Terminal-Bench validation analyses are reported in         constituent models; (3) high-capability sub-agents outperform high-capability
Supplementary Table S11. High-capability models: GPT-5, Claude Sonnet 4.5,         orchestrators.





Nature Machine Intelligence
