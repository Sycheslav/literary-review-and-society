---
id: acl-2026.acl-srw.1-text
type: material
title: 'Multi-Agent Reasoning Improves Compute Efficiency: Pareto-Optimal Test-Time
  Scaling'
work_id: acl-2026.acl-srw.1
source_url: https://aclanthology.org/2026.acl-srw.1.pdf
retrieved_at: '2026-10-27'
conversion: pdf_text_extraction
quality_note: Текст извлечён из PDF с сохранением номеров страниц. Порядок колонок,
  таблицы, формулы и подписи могут быть искажены; рисунки доступны по ссылке на PDF.
  Это текстовая конверсия, не визуально эквивалентный оригинал.
language: original
sha256_text: 09768899228c149d50614c8c622f7f041fdc3ec4fb0a22cd902a4b3255550a33
---

> Источник: [https://aclanthology.org/2026.acl-srw.1.pdf](https://aclanthology.org/2026.acl-srw.1.pdf). Текст извлечён из PDF с сохранением номеров страниц. Порядок колонок, таблицы, формулы и подписи могут быть искажены; рисунки доступны по ссылке на PDF. Это текстовая конверсия, не визуально эквивалентный оригинал.

## Страница 1

             Multi-Agent Reasoning Improves Compute Efficiency:
                      Pareto-Optimal Test-Time Scaling

             Florian Valentin Wunderlich, Lars Benedikt Kaesberg, Jan Philip Wahle,
                                   Terry Ruas, Bela Gipp

                                   University of Göttingen, Germany
                                   Correspondence: florian.wunderlich@uni-goettingen.de

                     Abstract                         Pipelines (a) & Pipeline Parameters (b)
                                                             Self-Consistency    ●   Self-Refinement    −
         Advances in inference methods have enabled
          language models to improve their predictions          + sequences             ●iterations
           without additional training.  These methods
           often   prioritize  raw  performance  over       Debate             +   Mixture-of-Agents   ++
            cost-effective compute  usage.    However,                                                              + agents  −rounds     + models   + layers
           computational  efficiency  is  key  for  real-
          world applications with resource constraints.       Debate rule:             Mixture-of-Agents rule:
       We provide a  systematic  analysis  of  the         focus on scaling agents    use one more proposer
           inference scaling strategies self-consistency,         rather than rounds.       model than layers.
            self-refinement,   multi-agent  debate,  and
                                               Compute benefits by task difficulty (c)            mixture-of-agents, to study their computational
          performance tradeoffs. We evaluate methods
                                                           Easy                                       +2.2%         on two reasoning benchmarks (MMLU-Pro,
        BBH)  and  include  extensive  parameter
                                                Medium                       +8.5%           configurations (e.g., scaling the number of
             parallel predictions, agents, and debate rounds)
           across  different model  sizes.   Across 34        Hard          +9.0%
           configurations and over 100 evaluations, we
         compute the Pareto-optimal front to select                                                            Figure 1:  Test-time scaling efficiency ratings  of:
          methods that achieve the best accuracy with                                                                      (a) Pipeline choice (self-consistency, self-refinement,
           the lowest computational budget.  Notably,                                                                debate, mixture-of-agents); (b) Pipeline parameters:
           inference scaling improves accuracy by up                                                           green plus (recommended), red minus (discouraged),
            to +7.1%  points over chain-of-thought  at                                                          yellow circle (mixed results);  (c) Chain-of-thought
           the highest evaluated budgets (20× the CoT                                                              (orange) compared to the average performance gain
         compute  budget) on MMLU-Pro.   With                                                               across all tested pipeline configurations when using
          an  equal  computing  budget,  debate  and                                                   15–20× the chain-of-thought compute budget (blue),
           mixture-of-agents outperform self-consistency                                                                across tasks of varying difficulty for MMLU-Pro.
         by 1.3% and 2.7% points, respectively. While
            self-consistency saturates earlier, multi-agent
           gains persist, particularly on more complicated
                                                     performance without training, but use much larger             tasks. We identify a simple multi-agent design
            guideline: mixture-of-agents is most efficient        inference compute budgets than others. This makes
        when  the number  of  parallel  generations       comparing methods difficult as they can use orders
           exceeds the number of sequential aggregations.       of magnitude more compute than others. The main
                                                         goal of this study is to systematically analyze how
                                                              to achieve the maximum performance gain within
     1  Introduction                                                       a given compute budget, as well as how to achieve
     The energy and computational demands of large   a given performance level with minimal compute
      language models (LLMs) are growing rapidly    usage.
       (Jin et  al., 2025).  With increasing real-world      Inference-time   strategies   such   as   self-
       applications, such as complementing search results    consistency (Wang et al., 2023), self-refinement
       at  scale,  efficiency becomes a core concern.   (Madaan et al., 2023), debate (Du et al., 2023),
     Many works focus on improving inference model   and mixture-of-agents (MoA) (Wang et al., 2024a)
                                               1
Proceedings of the 64th Annual Meeting of the Association for Computational Linguistics (Volume 4: Student Research Workshop), pages 1–14
                                     July 2-7, 2026 ©2026 Association for Computational Linguistics

## Страница 2

differ in their approach to scale inference compute,   64.3% (CoT) to 71.4% (+7.1 pp), outperforming
for example, through additional sampling, iterative    self-consistency (68.7%) and debate (70.0%) by
refinement, or multi-agent orchestration. They also   +2.7 and +1.4 percentage points under comparable
differ structurally (Zhang et al., 2025b): single-   inference budgets. Pareto-optimal MoA efficiency
agent methods scale generations either in parallel     is predominantly achieved when the number of
with different samples (e.g., self-consistency) or    parallel model generations exceeds the number
sequentially with longer reasoning chains (e.g.,   of sequential aggregation steps by one.  Larger
self-refinement).  Multi-agent systems such as   models can be better and also more efficient
MoA and debate use multiple interacting agents    than scaling up test-time compute with smaller
and scale along both axes simultaneously (Zhang   models.  The greatest inference-time compute
et al., 2025a; Du et al., 2023; Wang et al., 2024a),   gains were observed on harder tasks (+9 pp for
thereby enabling  interactions among  different   15–20x CoT budget),  motivating an adaptive
reasoning paths.                                    routing approach that allocates more test-time
  Studies have shown  that  scaling  test-time    scaling to harder tasks and less to easier tasks.
compute can be more energy-efficient (Jin et al.,   In general, we recommend a simple multi-agent
2025) and efficient with respect to the number   design guideline: mixture-of-agents is one of the
of floating point operations (FLOPs) (Wu et al.,   most robust and best-performing methods when
2024; Snell  et  al., 2024) than increasing the    the number of parallel generations exceeds the
model size alone.  Separately, work on multi-   number of sequential aggregations.
agent systems demonstrated performance gains
over baselines such as chain-of-thought (CoT)   Key Contributions:
(Du et al., 2023) or larger models (Wang et al.,
2024a).   Despite  rapid  progress,  three gaps   §3  We  conduct  a  systematic  study  across
remain:  (i) Methods are frequently studied in        four scaling methods (self-consistency, self-
isolation regarding their performance, but are not         refinement, multi-agent debate, mixture-of-
compared under matched compute budgets;  (ii)        agents) and their parameterization.
Efficiency is usually measured with respect to   §4.1 We demonstrate  that multi-agent systems
FLOPs, rarely accounting for memory-transfer        are more efficient than single-agent methods
costs that affect processing time; (iii) Studies lack      when scaled optimally. We find that mixture-
practical recommendations on method choice under        of-agents consistently outperforms debate,
constrained compute budgets (e.g., whether to use         self-consistency, and self-refinement.
a single-agent method or a multi-agent method and                                                 §4.3 We  explore  scaling  behaviors  of  multi-
how to parameterize it).                                                     agent systems and observe that configuring
  We  address  these gaps by  analyzing  four                                                       mixture-of-agents with one model more than
inference paradigms under matched compute                                                          layers predominantly yields Pareto-optimal
budgets: self-consistency, self-refinement, debate,                                                    performance, providing a practical design
and MoA. To adjust compute budgets, we use                                                           guideline.
three levers of test-time scaling: pipeline choice,
                                                 §4.4 We show that larger models without test-timepipeline parameters (agents,  rounds, proposer
                                               compute can be more compute-efficient thanmodels, layers, sequences, refinement iterations),
                                                       smaller models with heavily scaled test-timeand model  size.   In addition to FLOPs, we
                                                   compute.also consider memory-transfer costs to measure
compute times that are a closer approximation to                                       2  Related Work
practical applications on accelerators. Finally, we
provide recommendations for practitioners using    Scaling laws for LLMs have historically focused
multi-agent systems.                          on model parameter counts, training compute,
  Our results show clear trends across benchmarks   and dataset size, with empirical studies showing
(MMLU-Pro, BBH) and model sizes (70B, 8B).   predictable performance improvements as these
Multi-agent pipelines are more efficient than single-    factors increase (Kaplan et al., 2020).  Recent
agent baselines when scaled Pareto-optimally, with    research has shifted its focus toward optimizing
MoA dominating the Pareto-front. On MMLU-Pro,    test-time compute, as  it enables improvements
MoA improves the 70B-model accuracy from   without requiring model retraining. As part of
                                         2

## Страница 3

this development, various inference-time strategies    as in the initial debate paper (Du et al., 2023)
have been introduced.  Self-consistency (Wang   and observe that debate does not outperform
et  al., 2023) enhances reasoning  abilities by    self-consistency under a similar compute budget.
sampling multiple CoT paths (Wei et al., 2023)   However, their study does not compare debate with
and voting  for  the most  consistent outcome.   self-consistency under Pareto-optimal scaling of
Self-refinement (Madaan  et  al., 2023) begins    the number of agents and rounds. Additionally, the
with an  initial LLM output and then uses an  GMS8K benchmark is only limited to grade-school
iterative process of providing itself with feedback   math (Cobbe et al., 2021), whereas more diverse
and refining its previous solution based on that   benchmarks such as MMLU-Pro (Wang et  al.,
feedback. Using multiple LLMs, MoA (Wang et al.,   2024b) or BBH (Suzgun et al., 2022) are more
2024a) distributes the reasoning across different    robust to evaluate general reasoning performance.
layers, with each layer having multiple proposer      In  this  work, we  address  these  gaps by
models for the  first layers and an aggregator   comparing the efficiency of single-agent pipelines
model for the final layer. Meanwhile, multi-agent    containing self-consistency (parallel scaling) and
debate (Du et al., 2023) uses multiple agents that    self-refinement (sequential scaling) to multi-agent
iteratively refine their responses over a certain    pipelines containing debate (parallel and sequential
number of rounds using the responses of other    scaling with memory) and MoA (parallel and
agents as additional advice.                          sequential scaling without memory). Our pipeline
  In addition to demonstrating improvements   comparisons are based on a broad range of pipeline
in  accuracy,  several  studies  have  examined    configurations (varying number of debate agents
the  efficiency of such  strategies.    Jin  et  al.   and rounds, MoA models and layers, refinement
(2025) showed that scaling test-time compute    iterations, and self-consistency sequences). We
can be more energy-efficient than scaling model    identify compute-efficient pipeline and parameter
parameters. Wu et al. (2024) and Snell et al.   choices and summarize them in practical rules
(2024) demonstrated that small models with scaling    of thumb for efficient scaling.  Method costs
strategies such as majority voting, best-of-n, and    are estimated by runtime, accounting for both
weighted voting can outperform larger models   FLOPs and memory transfer, and we evaluate all
when using the same amount of FLOPs. However,   four pipelines with their varied parameters on the
Sadhukhan et  al. (2025) observed that FLOP-   benchmarks MMLU-Pro and BBH that span a wide
centered estimates overstate the effectiveness of    range of sub-tasks.
small models with test-time compute. While most
studies focus on FLOPs as the primary measure of   3  Method
compute, they neglect memory transfer, which also
markedly influences runtime (Li, Linden, 2023).    To explore how inference-time strategies influence
  Another limitation of previous work lies in    reasoning efficiency, we vary compute along the
the evaluation of multi-agent systems.   The    levers pipeline choice (results in Section 4.1),
initial studies introducing debate (Du et al., 2023)    pipeline parameters (results in Section 4.3), and
and MoA (Wang et  al., 2024a) evaluate these   model size  (results in Sections 4.4 and  4.5),
systems against single-model baselines. MoA   while assessing compute–accuracy trade-offs using
highlights superior efficiency compared to a single    Pareto-fronts. For each generation, we assign the
model  call  to a  larger model,  while debate   model the role of a reasoning expert that solves
demonstrates superior accuracy compared to CoT   problems by thinking step by step via prompting.
prompting with  the same model.   However,   To extract multiple-choice answers at the end of
there has been little analysis that contrasts the   each pipeline, we prompt the model to state its
performance of these multi-agent systems against    final answer choice (e.g., A/B/...), and select the
single-agent approaches beyond simple CoT (e.g.,   completion option with the highest log-likelihood
self-consistency, self-refinement) and against other    as the final answer. Prompt details for generations
multi-agent systems under equal compute budgets.   inside each pipeline are provided in Appendix C.
  Huang et al. (2024) compare debate with self-      Self-consistency samples multiple CoT paths
consistency on the GMS8K benchmark (Cobbe   and votes for the most consistent outcome. Self-
et al., 2021) for an equal number of generations.   refinement generates an initial solution and then
They use three agents and two rounds in debate    iteratively improves  it using  its own feedback.
                                         3

## Страница 4

                   Self-Consistency          Self-Refine        Debate         Mixture of Agents
                                                                              5
                                                                              4                                                     4                                          5                                                     3                                       4                                                                                                5                                    3                                                    4                                                                       4                                               3                                                                                              4                                       2                                                            5                                    2              0.70                                                    2                                           5                                                               3                                                                  4                                                                       3                                                                     6                                               3                                                                                              4                                                            3                                           2                                                               5                                                                  4                                                                     3                                                              5                                                                                         5                                                          10                                            3                                                      3                                                                                              20                                                                       3                                    2                                                              2                                                                                         3                                                                                        3                                                      4  3                                                                       4                                            22                                                  2                                    2                                                                                        5                                                         3              0.68                                            4                                                  5
                                      2 5  2                                      3    3       2                             Accuracy                  3                  4              0.66

                          1                                                       x: Parallel Scaling              0.64                                                                     5        y: Sequential Scaling
                                         2                                 1
                          0.25     0.50     0.75     1.00     1.25     1.50     1.75     2.00
                                        Time per Task (Seconds)

Figure 2: Accuracy (y-axis) and compute cost in time per task (x-axis) for multi-agent debate, MoA, self-consistency,
and self-refinement on MMLU-Pro. Numbers to the lower-right of a point show the degree of parallel scaling and
those to the upper-right the degree of sequential scaling. Self-consistency with one sequence is equivalent to CoT.
The gray dotted Pareto-front shows the most efficient configuration per compute budget.


Debate consists of multiple agents that iteratively   answered questions and theoretically estimate the
improve their responses over a fixed number of    required computation time.  Generation time is
rounds, with each agent providing one answer    primarily influenced by two factors:  the time
per round.1  Lastly, MoA distributes reasoning    required to perform operations and the time needed
across different layers, each of which has multiple    to transfer model weights from GPU memory to
proposer models  for  the  first  layers and an    the compute cores. Table 4 in Appendix B presents
aggregator model for the last layer. Each proposer    the equations we use to estimate FLOPs, memory
model generates an initial solution in the first layer    transfers, and execution time.
and aggregates and synthesizes the responses from
the previous layer in the layers 2, . . . ,     The   4  Experiments                                   l−1.aggregator model in the last layer aggregates the                                We conduct  the primary experiments on  the
proposed solutions once more.2                                   MMLU-Pro benchmark (Wang  et  al., 2024b),
  We vary pipeline parameters to scale test-time                                           which covers a wide range of topics. Our study
compute both in parallel (i.e., more independent                                                          verifies the robustness of selected results on the
attempts) and sequentially  (i.e.,  greater depth                               BBH benchmark (Suzgun et al., 2022).  Since
per attempt).  Parallel variations occur in self-                                                     multi-agent systems are computationally expensive
consistency (number of samples), debate (number                                                      to run, we randomly  shuffle tasks and draw
of agents), and MoA (number of proposer models).                                                a sample of 1000 questions.  We provide the
Sequential  variations occur  in  self-refinement                                                      resulting confidence intervals for the accuracy in
(number of refinement steps), debate (number of                                                    the limitations section.  The main experiments
debate rounds), and MoA (number of layers). To                                           employ Llama 3.1 70B, and we use Llama 3.1 8B
examine the role of model size, we rerun the                                        when explicitly mentioned3 (META, 2024).
experiments shown in Figure 2 by replacing a 70B-                                                      All generations are zero-shot with a temperature
parameter model with an 8B-parameter model. We                                                    of 0.7 and a top-p of 0.95. After each pipeline, we
use models of the same family to separate the                                                        select the answer candidate with the highest log-
effects of inference-time scaling from those of                                                     likelihood following the prompt “Final answer of
model capacity.                                                   choices {choices}:“ as the final answer. To ensure
  To evaluate the compute-performance efficiency,                                                             fair comparisons, we keep as many parameters
we measure accuracy as the fraction of correctly                                                   constant as possible and vary only those relevant
   1We use the majority-vote variant, as voting-based debate    to each experiment. We release the code for our
scenarios outperform other decision protocols on reasoning    experiments publicly4.
tasks (Kaesberg et al., 2025a; Becker et al., 2025a).
   2To mitigate model-specific biases, we adopt the single-       3Appendix A provides model and quantization details.
proposer setting (Wang et al., 2024a), where only a single       4https://github.com/Multi-Agent-LLMs/
LLM is used for all proposer models.                      lm-evaluation-harness
                                         4

## Страница 5

4.1  Are multi-agent systems more compute-       Compute     Easy  Medium  Hard
      efficient than single-agent methods?          CoT           94.4     53.0      8.4
                                                    1-5 × CoT     95.6     58.6     13.6Multi-agent systems can outperform single-agent
                                                   5-10 × CoT    95.4     60.4     14.7baselines (Wang et al., 2024a; Du et al., 2023),
                                                  10-15 × CoT   96.0     62.1     14.2but they typically require more compute.  This
                                                  15-20 × CoT   96.6     61.5     17.4raises the question of whether they improve mainly                                                Gain (∆)       +2.2     +8.5     +9.0
because of compute scaling, or if they are also more
efficient than scaling up single-agent systems. To    Table 1: Accuracy on easy, medium and hard tasks
examine this, we evaluate the multi-agent systems    for different compute bins relative to the CoT compute.
debate and MoA for varying configurations of    “Easy”: more than 75% solve rate, “Medium”: 25%-75%
                                                and “Hard”: less than 25% CoT solve rate. ∆is theagents and layers (debate) as well as models and
                                                       accuracy gain between 15–20 × CoT and CoT compute.
layers (MoA), and compare both performance
and compute to the single-agent self-consistency
baseline and self-refinement.                   Huang et al. (2024). We recommend MoA over the
  Figure  2  shows   the  compute-accuracy   use of debate, self-consistency, and self-refinement.
tradeoffs on the MMLU-Pro benchmark. MoA   However, the efficiency depends not only on the
configurations consistently lie closer to the Pareto-   pipeline itself but also on how the parameters are
front than self-consistency, thereby delivering     set, which we address in Section 4.3.
higher compute-accuracy efficiency.  Similarly,
                                                    4.2  Do difficult tasks benefit more fromdebate  is more  efficient than self-consistency
                                                          test-time scaling than easy ones?when using more agents than rounds.  Across
the tested range of up to ~20×CoT compute, the    In the previous section, we observed a trend in
highest accuracies are 68.7% for self-consistency   which increasing test-time compute improves task
(10 iterations), 70.0% for debate (4 agents, 2   performance.  However, we want to examine
layers), and 71.4% for MoA (5 models, 4 layers).   whether this holds across all difficulty levels. While
Compared to the CoT baseline at 64.3%, this   some tasks benefit from increased compute usage,
corresponds to gains of +4.4%, +5.7%, and +7.1%    others may not require it or could even suffer from
points, respectively. Relative to self-consistency   an overthinking phenomenon (Ghosal et al., 2025;
under comparable compute budgets, debate and   Chen et al., 2024). To investigate this, we first
MoA gain +1.3 and +2.7 percentage  points,    estimate task difficulties on MMLU-Pro using CoT
solely by using a  different scaling paradigm.   solve rates. We let the model answer each of the
Self-refinement consistently yields lower accuracy   1,000 questions 20 times with CoT prompting and
than the CoT baseline despite requiring more    assign each task to one of three bins: easy (solve
compute. Both self-consistency and debate exhibit    rate >75%), medium (25–75%), and hard (<25%).
saturation at around 10 sequences and 4 agents,   Based on this grouping, we analyze how compute
respectively, whereas MoA continues to improve    scaling impacts performance across difficulties.
nearly linearly up to 5 models and 4 layers.            Table 1 shows the accuracy gains for easy,
  Our results suggest that multi-agent systems not   medium, and hard tasks. Easy tasks have a 94.4%
only achieve better performance but are also more   CoT accuracy, which improves by 2.2% points
efficient than single-agent setups. The observation   when compute is increased to an equivalent of
that MoA scales further than debate may be   15–20 times the CoT compute. Medium-difficulty
explained by its architecture. Considering a fixed    tasks start with a CoT accuracy of 53.0%, which
number of proposer models, adding layers does   improves by 8.5% points, and hard tasks have an
not increase the context length per model (Wang   8.4% CoT accuracy, which gains 9.0% points as
et al., 2024a).  However, in debate, increasing    test-time compute increases.
the number of rounds with a fixed number of     The solve rates improve across all difficulty
agents expands the context, as agents retain prior    levels, with the largest absolute gain on hard
exchanges in memory (Du et al., 2023), thereby    tasks (+9.0%), followed by medium-difficulty tasks
increasing computational overhead. It is surprising   (+8.5%).  For hard tasks,  this corresponds to
to see that self-refinement performed worse than   more than doubling the accuracy relative to the
the CoT baseline, but it aligns with the finding of   CoT baseline. This indicates that additional test-
                                         5

## Страница 6

                                                                                                                              4    0.70                     42                 43                    44                                                        5
                                                                     0.71
                                                                                                       4
                                                                                                       3                                      55    0.69                              5                        5
                                                                                           4                                      2                                                               3                     3                                                                                       3                                               3                                                                                           2                     2                                                               3             2                                                                                       2                                               4                                  3                                                                     0.70                                                               5             2                                                                                                  3                                  3
                                                                   x:                                                        Agents                                                                                              5                                                                                                  3           53  3                                                                                                                   4    0.68
                                                                                              2                                                                                                                 5Accuracy                                                                                                                   4  63                                                                         y: Rounds
                     2                                                 0.69    0.67             3                          Scaling Agents             Accuracy                          3                                                                                                        4                               x: Models
                             2                   Scaling Rounds                                                                                y: Layers
                             4                                           0.68            24    25           0.4    0.6    0.8    1.0    1.2    1.4    1.6    1.8                                                     Scaling Models
                  Time per Task (Seconds)                                                                                                              Scaling Layers
                                                                     0.67       23 Figure 3: Effect of scaling agents (orange) and rounds
                                                                                0.4   0.6   0.8   1.0   1.2   1.4   1.6   1.8   2.0 (magenta) in multi-agent debate on the MMLU-Pro                                                                     Time per Task (Seconds)
 benchmark.  Superscript values indicate the number
 of agents, subscript values the number of rounds.         Figure 4: Effect of scaling proposer models (orange) and
                                                             layers (magenta) in MoA on the MMLU-Pro benchmark.
                                                         Superscript values indicate the number of proposer
 time compute is particularly valuable for more    models; subscripts the number of layers.
 challenging problems.  At the same time, easy
 tasks exhibited only marginal gains, suggesting
 that a routing mechanism that assigns them to less                                                 2025b). Nevertheless, the effect is not consistent.
 test-time scaling could preserve accuracy while                                    When testing the robustness of the result on BBH
 avoiding unnecessary compute costs.  This idea                                              and with an 8B-parameter model, respectively (not
 aligns with adaptive frameworks such as BEST-                                           shown here but in Figures 6 and 7 of Appendix D),
 Route (Ding et al., 2025), which allocate compute                                                    increasing the number of debate rounds leads to
 based on task difficulty to optimize efficiency.                                               improvements in accuracy in some cases. However,
                                                       the highest debate accuracy is consistently achieved 4.3  What is the optimal scaling ratio that
                                                with only two rounds,  suggesting a practical     maximizes debate and MoA efficiency?
                                                recommendation, i.e., prioritize scaling agents over
 Although  the  general  trend  of  increasing                                                   rounds, as parallel scaling yields more reliable
 performance with increasing test-time compute                                                        gains.
 holds, there are noticeable differences in efficiency
                                                    Figure 4 shows the effect of parallel scaling of across configurations of the same multi-agent
                                                   proposer models (orange) and sequential scaling of setup.  Scaling efficiently allows for achieving
                                                      layers (magenta) for MoA. Accuracy improves as better results given the same amount of compute
                                              models or layers are scaled toward the point where or the same results using less compute and is
                                                       the number of models exceeds the number of layers therefore advisable for large-scale deployment in
                                            by one, with Pareto-optimal performance observed real-world applications.  Using our evaluations
                                                           at this specific ratio (3 models with 2 layers, 4 on the MMLU-Pro benchmark, we visualize how
                                             models with 3 layers, and 5 models with 4 layers). parallel and sequential scaling affect accuracy and
                                          Beyond this point, adding more models or layers compute usage in the multi-agent systems debate
                                                    tends to reduce accuracy. and MoA.
   Figure 3 shows the effect of parallel scaling of      This  result shows  that  both  parallel  and
 agents (orange) and sequential scaling of rounds    sequential scaling are beneficial in the MoA system.
 (magenta) in the debate mechanism.  Accuracy  We verify across additional evaluations on the
 improves when scaling agents up to four, and  BBH benchmark and with an 8B model that it
 decreases with more agents.   Scaling rounds     is beneficial to use one model more than layers
 degrades performance with two agents and has no    (see Figures 6 and 7 in Appendix D). In both
 noticeable effect with more agents.                   cases, two of the three points following the rule lie
   Our result indicates that scaling rounds can   on the Pareto-optimal front, confirming its ability
 negatively  affect  performance,  aligning  with    to achieve Pareto-optimal efficiency. Sequential
 prior work and resembling limitations of other    scaling is less detrimental than in debate or self-
 sequential  scaling  approaches,  such  as  self-   refinement,  likely because the context  is not
 refinement (Kaesberg et al., 2025a; Becker et al.,   accumulated across layers.
                                          6

## Страница 7

4.4  Are heavily scaled small models more       MoA Accuracy  8B Prop.  70B Prop.
     compute-efficient than larger models?                                        8B Aggr.          51.2        69.6
Larger models typically offer stronger reasoning      70B Aggr.         52.9        71.4
capabilities but incur higher compute and memory
                                                     Table 2: MoA accuracy (five models, four layers) with
requirements,  leading  to  increased  inference                                                        various proposer and aggregator model sizes on the
latency due to the heavier load. While multi-agent                                       MMLU-Pro benchmark.
scaling can improve performance, it may exhibit
diminishing returns. This raises the key question:                                                         sizes within the system. The MoA pipeline consists
given equal compute budgets, is it more efficient                                                   of multiple proposer models in layers 1, . . . ,to scale multi-agent setups further or should you                                      l−1                                                         that aggregate and synthesize candidate solutions
instead transition to a larger model? To explore                                            from the previous layer and an aggregator model
potential transition points between smaller and                                                      in the last layer l (Wang et al., 2024a). In all our
larger models, we compare multi-agent setups                                                    previous experiments, we used the same model size
scaled with Llama 3.1 8B and less scaled setups                                                         for both the proposers and the aggregator. However,
using Llama 3.1 70B.                                                    these roles may influence efficiency differently.
  Across all pipeline setups (debate, MoA, self-                                                This raises the question of whether  it is more
consistency, and self-refinement) and their varied                                                 computationally efficient to use a larger model as
parameters, the smaller model achieves accuracies                                                    the aggregator and smaller ones as proposers, or
below 53% on MMLU-Pro. This is lower than the                                                    vice versa. We reevaluated the MoA configuration
CoT baseline of the 70B-parameter model (64.3%),                                                  with five models and four layers by substituting the
although the most scaled-up 8B configurations                                              70B-parameter model with the smaller 8B model
require more compute. With the same compute                                                      in the proposer or aggregator role, while keeping
budget as the 70B CoT baseline, the best 8B                                                     the rest of the setup fixed.
configuration is approximately 13% less accurate                                                  Table 2 summarizes the results.  Using 70B-
than the 70B CoT pipeline. Details about accuracy                                                  parameter models for both proposer and aggregator
and compute across tested 8B configurations are                                             models achieves the highest MMLU-Pro accuracy
not shown here but in Figure 7 in Appendix D.                                                   of 71.4%. Replacing the aggregator with an 8B
  The observed accuracy difference shows that                                          model while keeping the proposers at 70B leads
model choice and size can have a larger impact                                                      to only a minor drop to 69.6%.   In contrast,
on efficiency than test-time compute scaling alone.                                                  reducing the proposers to 8B models while keeping
In our experiments, given sufficient computational                                                a 70B aggregator decreases accuracy to 52.9%.
resources to run the 70B-parameter model with                                         The lowest performance occurs when both the
CoT, it would be advantageous to use the larger                                                  proposer and aggregator models are reduced to 8B
model. In contrast, prior work has reported that                                                   parameters, yielding 51.2% accuracy.
smaller models enhanced with test-time compute                                           The results show that the proposer size has a
techniques, such as majority vote, can outperform                                                     greater influence on accuracy than the aggregator
substantially larger models relying solely on scale                                                           size. When proposers are strong, the aggregator
(Jin et al., 2025). The impact of test-time compute                                                   operates over higher-quality evidence and can
scaling compared to using a larger model likely                                               remain relatively small without large losses. When
depends on model strength and quantization effects.                                                 proposers are weak, the downstream information
In our study, we used models from the same                                                               is already degraded; a single strong aggregator
family to minimize confounding factors, though                                                cannot reliably recover quality that was never
the quantization might have impacted the 8B model                                                   generated.  In terms of compute, the aggregator
more strongly than the 70B model.                                                        size influences the total cost less than the proposer
                                                          sizes, since it only aggregates once in the final
4.5   Is MoA more compute-efficient with                                                          layer.  In contrast, each of the five proposers
     mixed-size or uniform-size models?                                                     generates once in the three previous layers, yielding
Since the MoA system outperformed the other   15 generations. Thus, the aggregator contributes
scaling  approaches  in  our  experiments  (see   only 1/16 of all generations in this example. In
Section  4.1), we  further  investigate how  its   sum, proposers are most important for quality, and
performance depends on the allocation of model    the aggregator requires only a single generation,
                                         7

## Страница 8

                                          0.708   0.714
   0.70                                   5  Conclusion                                  0.675
                          0.657
   0.65                             We analyzed the test-time scaling of LLMs via
                  0.606                                 single-agent and multi-agent setups on a diverse   0.60Accuracy                                                range of reasoning tasks using MMLU-Pro and
   0.55   0.529                            BBH, and assessed their compute-accuracy trade-
                                                               offs. We controlled for compute in terms of runtime   0.50           5:0     4:1     3:2     2:3     1:4     0:5
                  Proposer Size Ratio (8B:70B)               that accounts for both FLOP and memory transfer
                                                     times. Our experiments systematically explored
 Figure 5: MoA accuracy for different ratios of 8B and                                                      three levers of test-time scaling: (1) the choice of
 70B proposer model sizes in the configuration of five                                                    inference pipeline, (2) the adjustment of pipeline models with four layers (8B:70B ratio) on MMLU-Pro.
                                                    parameters, and (3) the choice of model size.
                                                Across  the  pipelines  self-consistency,  self- thereby  influencing compute only  marginally.
                                                      refinement, debate, and MoA, we found that multi- These results suggest using a similar model size for
                                                   agent systems consistently outperform single-agent proposer and aggregator models.
                                                  approaches, with MoA dominating the Pareto-   In our previous experiments, all proposer models
                                                       front across benchmarks.  Under comparable were either large or small.   Since proposers
                                            compute budgets, debate yielded a 1.3% increase are the main drivers of answer quality but also
                                                       in accuracy, and MoA a 2.7% increase over dominate compute  costs, we  further  explore
                                                       self-consistency, driven solely by their different whether mixing smaller and larger proposer models
                                                     scaling paradigms.  Analyzing scaling in multi- can reduce compute costs without noticeably
                                                   agent pipelines revealed clear design principles: in harming accuracy. Intuitively, smaller models can
                                                    debate, where memory accumulates over several generate diverse candidate solutions at a lower
                                                  rounds,  efficiency gains primarily  arise from cost, while larger models may better identify flaws
                                                       scaling the number of agents rather than the number or refine proposals.  We reevaluate the MoA
                                                   of rounds.  In MoA, Pareto-optimal efficiency configuration with five models and four layers,
                                                                is often achieved when the number of proposer this time varying the ratio of smaller (8B) to
                                              models exceeds the number of layers by one. This larger (70B) proposer models while keeping the
                                             paradigm increased accuracy by 7.1% points at aggregator fixed at 70B parameters.
                                         ~20× the CoT budget; but if compute is tight, a   Figure 5 shows that the accuracy increases
                                       ~5×CoT budget already captures most of that gain. monotonically with the proportion of larger 70B
                                     When MoA is not feasible            budget), self- models. Configurations with one small 8B proposer                                                       (≤3×CoT                                                    consistency is the most viable option. out of five show a minor reduction in performance
 compared to the all-large setup. As the number    We further showed that model size can exert
 of smaller proposer models grows, performance   a  stronger  influence on  efficiency  than  test-
 declines more substantially, reaching the lowest   time scaling alone.   Larger models not only
 accuracy when all proposers have 8B parameters.     deliver higher performance but can also be more
   While using a single small 8B proposer has little    compute-efficient than  heavily  scaled smaller
 impact on accuracy, it yields only minimal compute   models.  In addition, our analysis across task
 savings because it accounts for only a small fraction    difficulty levels demonstrated that additional test-
 of proposer generations. In some cases, adding   time compute is most beneficial for harder tasks,
 small proposers can even reduce performance over   whereas easy tasks exhibit diminishing returns.
 entirely leaving them out: the all-large (70B) MoA   This motivates adaptive routing approaches that
 with three proposers and two layers achieves 70.1%   dynamically  allocate compute based on  task
 accuracy on MMLU-Pro (see Figure 2), while a    difficulty, optimizing both efficiency and accuracy.
 mixed-size MoA with five models (three 70B and       Finally,  our study underlines the value of
 two 8B models) reaches only 67.5%, despite both    evaluating inference strategies through efficiency
 setups following the Pareto-optimal scaling rule    metrics, as benchmark accuracy alone can often be
 from Section 4.3 with one model more than layers.   achieved by allocating additional compute. This
 Overall, these results suggest that using proposer    perspective motivates future work to emphasize
 models of the same size is generally more effective    efficiency under deployment-relevant cost models
 than mixing models of different sizes.                 that account for both FLOPs and memory transfer.
                                          8

## Страница 9

Limitations                            Acknowledgments

                                                This work was partially supported by the Lower
Since multi-agent systems are computationally                                           Saxony Ministry of Science and Culture and the
expensive to run, we used a sample size of n=1000                          VW Foundation. Many thanks to Niklas Bauer for
instead of the full benchmark.  This introduces                                                         his thoughtful discussions and feedback. This work
some variance.  The 95% binomial confidence                                                used the Scientific Compute Cluster at GWDG, the
interval for the true accuracy of each data point                                                          joint data center of Max Planck Society for the
can be calculated using the measured accuracy ˆp:                                          Advancement of Science (MPG) and University
                                                   of Göttingen.  In part funded by the Deutsche
          r
                                                Forschungsgemeinschaft (DFG, German Research                               ˆp(1                   ˆp   1.96       −ˆp)                Foundation) – 405797229.        ±        ·     n

  For measured accuracies between 0.63 and 0.72,   References
the uncertainty ranges from 0.028 to 0.03. While    Jonas Becker, Lars Benedikt Kaesberg, Niklas Bauer,
individual configurations may have overlapping      Jan Philip Wahle,  Terry Ruas, and Bela Gipp.
95% confidence intervals, clear patterns emerge      2025a.  MALLM: Multi-Agent Large Language
                                                 Models Framework.  In Proceedings of the 2025
when examining the results as a whole, as patterns                                                     Conference on  Empirical Methods  in  Natural
persist  for  similar  configurations  (e.g.,  other     Language  Processing:  System Demonstrations,
benchmarks, model size, near-the-same pipeline      pages 418–439, Suzhou, China. Association for
parameters).                                          Computational Linguistics.
  Our  compute  costs  were  estimated  using    Jonas  Becker,  Lars Benedikt Kaesberg,  Andreas
theoretical formulas that account for FLOPs and      Stephan, Jan Philip Wahle, Terry Ruas, and Bela
                                                       Gipp. 2025b. Stay Focused: Problem Drift in Multi-memory  transfer.   This provides a consistent                                                   Agent Debate. Preprint, arXiv:2502.19559.
basis  for  comparison;   however,  real-world
runtime may vary due to framework overhead,   Xingyu Chen, Jiahao Xu, Tian Liang, Zhiwei He,
                                                           Jianhui Pang, Dian Yu, Linfeng Song, Qiuzhibatching strategies, or system-level constraints.
                                                           Liu, Mengfei Zhou, Zhuosheng Zhang, Rui Wang,
These practical considerations also matter when                                                 Zhaopeng Tu, Haitao Mi, and Dong Yu. 2024.
interpreting  our  finding  that  larger  models,    Do NOT Think That Much for 2+3=?  On the
such as Llama 3.1 with 70B parameters, can      Overthinking of o1-Like LLMs.
be more computationally efficient than scaling                                                    Karl Cobbe, Vineet Kosaraju, Mohammad Bavarian,
smaller models  extensively.    In deployment     Mark Chen, Heewoo Jun, Lukasz Kaiser, Matthias
scenarios  with  limited GPU  memory,  such       Plappert, Jerry Tworek, Jacob Hilton, Reiichiro
efficiency gains may not be realizable, making it      Nakano, Christopher Hesse, and John Schulman.
                                                      2021.   Training Verifiers to Solve Math Wordimportant to explore trade-offs under constrained
                                                       Problems. Preprint, arXiv:2110.14168.
hardware conditions.  Beyond MMLU-Pro and
BBH, reasoning benchmarks that target specific    Dujian Ding, Ankur Mallick, Shaokun Zhang, Chi
capabilities, such as spatial pathfinding (Kaesberg     Wang, Daniel Madrigal, Mirian Del Carmen Hipolito
                                                          Garcia, Menglin Xia, Laks V. S. Lakshmanan,et al., 2025b) or step-level agent evaluation in                                                 Qingyun Wu, and Victor Rühle. 2025. BEST-Route:
interactive environments (Kaesberg et al., 2026),      Adaptive LLM Routing with Test-Time Optimal
remain unexplored and may  exhibit  different      Compute.
compute-accuracy trade-offs.
                                                    Yilun Du, Shuang Li, Antonio Torralba, Joshua B.
   Finally, our study was limited to non-reasoning      Tenenbaum, and Igor Mordatch. 2023. Improving
models.    Future  work  could  explore how       Factuality   and   Reasoning    in   Language
                                                 Models through Multiagent Debate.    Preprint,reasoning models interact with inference-time
                                                        arXiv:2305.14325.
scaling  strategies,  for example, whether  their
stronger reasoning abilities change the compute-   Soumya Suvra Ghosal, Souradip Chakraborty, Avinash
performance trade-offs and what patterns (e.g.,      Reddy, Yifu Lu, Mengdi Wang, Dinesh Manocha,
                                                  Furong Huang, Mohammad Ghavamzadeh, andreasoning strength, pipeline parameters) lead to                                                   Amrit Singh Bedi. 2025.  Does Thinking More
the most efficient scaling of multi-agent systems      always Help? Understanding Test-Time Scaling in
with reasoning models.                               Reasoning Models.
                                         9

## Страница 10

Jie  Huang,  Xinyun  Chen,  Swaroop  Mishra,   Mirac Suzgun, Nathan Scales,  Nathanael  Schärli,
  Huaixiu Steven Zheng, Adams Wei Yu, Xinying      Sebastian Gehrmann, Yi Tay, Hyung Won Chung,
  Song, and Denny Zhou. 2024.  Large Language     Aakanksha Chowdhery, Quoc V. Le, Ed H. Chi,
  Models  Cannot  Self-Correct  Reasoning  Yet.     Denny Zhou, and Jason Wei. 2022.  Challenging
   Preprint, arXiv:2310.01798.                       BIG-Bench Tasks and Whether Chain-of-Thought
                                              Can Solve Them. Preprint, arXiv:2210.09261.
Yunho Jin, Gu-Yeon Wei, and David Brooks. 2025. The
  Energy Cost of Reasoning: Analyzing Energy Usage     J. Wahle, T. Ruas, S. M. Mohammad, N. Meuschke,
   in LLMs with Test-time Compute.                    and B. Gipp. 2023. Ai usage cards: Responsibly
                                                            reporting ai-generated content. In 2023 ACM/IEEE
Lars Benedikt Kaesberg, Jonas Becker, Jan Philip       Joint Conference on Digital Libraries (JCDL), pages
  Wahle, Terry Ruas, and Bela Gipp. 2025a. Voting      282–284, Los Alamitos, CA, USA. IEEE Computer
   or Consensus?  Decision-Making in Multi-Agent       Society.
  Debate.    In  Findings  of  the  Association  for
                                                          Junlin Wang, Jue Wang, Ben Athiwaratkun, Ce Zhang,  Computational Linguistics: ACL 2025, pages 11640–
                                                    and James Zou. 2024a. Mixture-of-Agents Enhances  11671.
                                                    Large Language Model Capabilities.   Preprint,
                                                        arXiv:2406.04692.Lars Benedikt Kaesberg, Jan Philip Wahle, Terry
  Ruas, and Bela Gipp. 2025b.  SPaRC: A spatial                                                Xuezhi Wang, Jason Wei, Dale Schuurmans, Quoc
   pathfinding reasoning challenge.  In Proceedings                                                         Le, Ed Chi, Sharan Narang, Aakanksha Chowdhery,
   of the 2025 Conference on Empirical Methods in                                                   and Denny Zhou. 2023. Self-Consistency Improves
  Natural Language Processing, pages 10359–10390,                                                   Chain of Thought Reasoning in Language Models.
  Suzhou,  China.  Association  for Computational                                                              Preprint, arXiv:2203.11171.
   Linguistics.
                                            Yubo Wang, Xueguang Ma, Ge Zhang, Yuansheng Ni,
Lars Benedikt Kaesberg, Tianyu Yang, Niklas Bauer,      Abhranil Chandra, Shiguang Guo, Weiming Ren,
  Terry Ruas, Jan Philip Wahle, and Bela Gipp. 2026.     Aaran Arulraj, Xuan He, Ziyan Jiang, Tianle Li,
  Mind the gap between spatial reasoning and acting!    Max Ku, Kai Wang, Alex Zhuang, Rongqi Fan,
   step-by-step evaluation of agents with spatial-gym.     Xiang Yue, and Wenhu Chen. 2024b.  MMLU-
   Preprint, arXiv:2604.09338.                             Pro: A More Robust and Challenging Multi-Task
                                                 Language Understanding Benchmark.   Preprint,
Jared Kaplan, Sam McCandlish, Tom Henighan, Tom B.      arXiv:2406.01574.
  Brown, Benjamin Chess, Rewon Child, Scott Gray,
  Alec Radford, Jeffrey Wu, and Dario Amodei. 2020.   Jason Wei, Xuezhi Wang, Dale Schuurmans, Maarten
   Scaling Laws for Neural Language Models. Preprint,     Bosma,  Brian  Ichter,  Fei Xia, Ed Chi, Quoc
  arXiv:2001.08361.                                    Le, and Denny Zhou. 2023.  Chain-of-Thought
                                                    Prompting Elicits Reasoning in Large Language
Li, Linden. 2023. Transformer Inference: From First      Models. Preprint, arXiv:2201.11903.
   Principles to the Current State of the Art. NeurIPS
  Conference, New Orleans, USA.                   Yangzhen Wu, Zhiqing Sun, Shanda Li, Sean Welleck,
                                                  and Yiming  Yang.  2024.    Inference  Scaling
Aman  Madaan,  Niket  Tandon,  Prakhar  Gupta,     Laws: An Empirical Analysis of Compute-Optimal
  Skyler  Hallinan,  Luyu Gao,  Sarah  Wiegreffe,      Inference  for  Problem-Solving  with Language
  Uri Alon, Nouha  Dziri,  Shrimai Prabhumoye,      Models. Preprint, arXiv:2408.00724.
  Yiming Yang, Shashank Gupta, Bodhisattwa Prasad
                                             Enhao Zhang, Erkang Zhu, Gagan Bansal, Adam  Majumder, Katherine Hermann, Sean Welleck, Amir
                                                          Fourney, Hussein Mozannar, and Jack Gerrits. 2025a.  Yazdanbakhsh, and Peter Clark. 2023. Self-Refine:
                                                       Optimizing Sequential Multi-Step Tasks with Parallel   Iterative Refinement with Self-Feedback. Preprint,
                                   LLM Agents.  arXiv:2303.17651.
                                               Qiyuan Zhang, Fuyuan Lyu, Zexu Sun, Lei Wang,META. 2024. The Llama 3 Herd of Models. Preprint,                                                Weixu Zhang, Zhihan Guo, Yufei Wang, Irwin King,  arXiv:2407.21783.                                            Xue Liu, and Chen Ma. 2025b. A Survey on Test-
                                               Time Scaling in Large Language Models: What,NVIDIA Corporation. 2021. NVIDIA A100 Tensor                                              How, Where, and How Well?  Core GPU Data Sheet. Technical report, NVIDIA.

Ranajoy Sadhukhan, Zhuoming Chen, Haizhong Zheng,
  Yang Zhou, Emma Strubell, and Beidi Chen. 2025.
   Kinetics: Rethinking Test-Time Scaling Laws.

Charlie Snell, Jaehoon Lee, Kelvin Xu, and Aviral
  Kumar. 2024.  Scaling LLM Test-Time Compute
  Optimally can be More Effective than Scaling Model
   Parameters. Preprint, arXiv:2408.03314.
                                         10

## Страница 11

A  Models & Compute Usage                computation cores, which happens once during
                                               each prefill stage and repeatedly during decoding.
Our experiments used  4-bit quantized Llama                                            Both FLOPs and memory transfers are converted
3.1  models  (hugging-quants/Meta-Llama-3.1-                                                         to times using the GPU’s peak compute throughput
70B-Instruct-GPTQ-INT4  with  commit  hash                                             and memory bandwidth.
1b0ae7f9d6da8b79f36fdc24912f950ecb2b6e91                                                 For all estimations, we assumed a batch size of
and hugging-quants/Meta-Llama-3.1-8B-Instruct-                                          16 and used the Llama 3.1 models (70B and 8B
GPTQ-INT4 with commit hash f184d2b18e2b7c                                                   parameters) with 4-bit quantization, corresponding
257af79aa0bc53ef3ee505caa2). The 8B model                                                       to a model precision of 0.5 bytes per parameter.
was used for experiments on MMLU-Pro and the                                                 Furthermore, all estimations were made with 8
70B model was used for experiments on both                                     NVIDIA A100 40GB PCIe GPUs, each with a peak
MMLU-Pro and BBH. Models were hosted on                                                  throughput of 1,248 tera-operations per second (for
a node of 8 NVIDIA A100 40GB PCIe GPUs.                                                        4-bit computation) and a memory bandwidth of
The number of processed tokens and the resulting                                                1,555 GB/s (NVIDIA Corporation, 2021).
floating point operations (FLOPs) are provided in
Table 3.                                        FLOPs
                                                                              FLOPsprefill = 2 · P · Tin     Model        Tokens     FLOPs
                                          =                                                                   FLOPsdecode                                                                    2 · P · Tout  Llama 3.1 70B*   1.56        217.87                                                                       FLOPstotal =                                                                                             FLOPsprefill                                                 + FLOPsdecode                    ∗109        ∗1018
  Llama 3.1 8B*    1.37 ∗109   21.95 ∗1018          Model Memory
 Sum             2.93 ∗109  239.82 ∗1018           Memmodel = P  p                                                                                                                          ·
Table 3:  Compute usage (tokens, FLOPs) across       Memory Transfer
all experiments for the 4-bit quantized Llama 3.1           Memprefill = BG                                                                                                                  Tout· Memmodel
models (hugging-quants/Meta-Llama-3.1-70B-Instruct-         Memdecode = B  · MemmodelGPTQ-INT4 and hugging-quants/Meta-Llama-3.1-8B-          Memtotal = Memprefill + Memdecode
Instruct-GPTQ-INT4). FLOPs are calculated with the                                           FLOP Time
formulas from Table 4 of Appendix B.                                                                    FLOPsprefill                                                                                              Timeflop,prefill =
                                                                                      NGPU·FGPU
                                                                                   Timeflop,decode =  FLOPsdecode
                                                                                      NGPU·FGPU
B  Compute Estimation Formulas              Memory Transfer Time
                                                                                   Timemem,prefill =    Memprefill
Generation time is primarily determined by two                         NGPU·MGPUMemdecode                                                                         Timemem,decode =factors: the time required to perform arithmetic                          NGPU·MGPU
operations  and  the  time  needed  to  transfer          Total Time
model weights from the GPU memory into the             Timeprefill = max (Timeflop,prefill, Timemem,prefill)
computation cores.  In addition to these factors,          Timedecode = max (Timeflop,decode, Timemem,decode)
                                                                               Timetotal = Timeprefill + Timedecode
generation can be divided into two stages: a prefill
stage, in which the model processes all input tokens    Table 4: Formulas used for compute estimation. P:
once to produce and cache key-value states, and a   model parameters,  p:  model precision (bytes per
decode stage, in which the model generates output    parameter), Tin/Tout: number of input/output tokens, G:
tokens one by one, reusing the cached states (Li,   number of generations, B: batch size, NGPU: number
                                                        of GPUs, FGPU: FLOPs/s per GPU, MGPU: memoryLinden, 2023).
                                                  bandwidth per GPU — build on formulas from Li,
  For each stage, we estimate both the compute                                                  Linden (2023).
time and the memory transfer time, following
the formulation of Li, Linden (2023), with the
specific equations summarized in Table 4. Since                           C  Prompts
computation and memory transfer occur in parallel,
the slower of the two determines the effective    In the following, we list the prompts used in our
runtime. FLOPs are estimated by assuming that    evaluation. The model was instructed to adopt
each parameter  is used for one multiplication    the role of an expert in reasoning and to solve
and one addition per token. Memory transfer is   given tasks step by step.  For pipeline-specific
estimated based on how often the model weights    prompts, we follow the original formulations from
must be loaded from the GPU memory into the   Wang et al. (2023) (self-consistency), Madaan et al.
                                         11

## Страница 12

(2023) (self-refinement), Du et al. (2023) (debate)      Debate debating prompt
and Wang et al. (2024a) (MoA). To extract the
                                                 These are the solutions to the problem fromfinal answer, the model was prompted to state its
                                                        other agents:answer choice, and the option with the highest log-
likelihood was selected as the final answer.
                                               Agent 1’s solution: “‘{agent_1_solution}“‘

    Self-consistency system prompt                                   ...

   You are a reasoning expert. Solve the task
                                               Agent n’s solution: “‘{agent_n_solution}“‘
   provided by the user while thinking step by
    step. Make sure to state your answer at the
                                               Using  the opinion  of  other  agents  as
   end of the response.
                                                         additional advice, can you give an updated
                                                     response

    Self-refinement system prompt
                                 MoA system prompt
   You are a reasoning expert. Solve the tasks
                                          You are a reasoning expert. Solve the task   provided by the user while thinking step by
                                                     provided by the user while thinking step by    step. Make sure to state your answer at the
                                                              step. Make sure to state your answer at the   end of the response. When asked to solve a
                                                end of the response.    task, only solve the task whilst thinking step
   by step. When asked to provide feedback,
   only provide feedback without solving the      MoA aggregation prompt
    task.
                                          You have been provided with a set of
                                                      responses from various open-source models
                                                          to the latest user query.  Your task is to    Self-refinement feedback prompt
                                                      synthesize these responses into a single,
   Provide actionable and specific feedback           high-quality response.    It  is crucial to
    to your last response that suggests a clear             critically evaluate the information provided
   improvement. Actionable means that the           in these responses, recognizing that some
   feedback should contain a concrete action          of  it may be biased or incorrect.  Your
    that would likely improve the response.          response should not simply replicate the
    Specific means that the feedback should          given answers but should offer a refined,
    identify concrete phrases in the output to           accurate,  and  comprehensive  reply  to
   change. The suggested improvement should           the instruction.  Ensure your response is
    increase the chance of correctly solving the           well-structured,  coherent,  and  adheres
   given task.                                            to the highest standards of accuracy and
                                                                    reliability.

                                                 Responses from models:    Self-refinement refinement prompt
                                                  “‘{response_model_1}“‘
   Use the feedback to produce a refined
    solution.                                                                        ...

                                                  “‘{response_model_n}“‘
   Debate system prompt
                                            Answer extraction prompt   You are a reasoning expert. Solve the task
   provided by the user while thinking step by                                                        Final answer of choices {choices_str}:
    step. Make sure to state your answer at the
   end of the response.

                                         12

## Страница 13

D  Different Evaluation Setups

To assess the robustness of our results, we reran the experiments from Figure 2 with one differing factor.
In Figure 6, we replaced the MMLU-Pro benchmark with the BBH benchmark and in Figure 7, we used a
smaller 8B-parameter model of the same model family instead of the 70B-parameter model.

D.1 BBH Benchmark

                       Self-Consistency          Self-Refine        Debate         Mixture of Agents
                                                                        5
                  0.87             3    5              5              4
                                     2    2      2       3                                        4                                                 5                                                               4                                        2                                      2                                                                        4                                                                          4                                                               4                                                   4                                                                                         5                                      2                                                                        3                                                                          5            5                                        5    3                                                   3                                                                                       5                                                                                         3                                                                3                                             3                                                      10                  0.86                                                                5                                       2                  3                                  3     4                                   3    3              2   3                                  5     4                                                       4                                            2               5             3                                   2         4        3       2             4                                   2                 4
                  0.85      1                      4               5                                                    2
                                              2                                      Accuracy                          33
                                             2                  0.84

                                                                                        x: Parallel Scaling                  0.83            1                                                                                                y: Sequential Scaling
                                           2
                       0.0      0.2      0.4      0.6      0.8      1.0      1.2      1.4      1.6
                                           Time per Task (Seconds)

Figure 6: Accuracy (y-axis) and compute cost in time per task (x-axis) for multi-agent debate, MoA, self-consistency,
and self-refinement on BBH (Suzgun et al., 2022). Numbers to the lower-right of a point show the degree of parallel
scaling and those to the upper-right the degree of sequential scaling. Self-consistency with one sequence is equivalent
to CoT. The gray dotted Pareto-front shows the most efficient configuration per compute budget.


D.2  MMLU-Pro Benchmark with 8B-Parameter Model

                       Self-Consistency          Self-Refine        Debate         Mixture of Agents
                                                                                                    5
                                                                                                    5                                                                  5                                                         4                  0.52                                                                 5                                                                  2                                                         3                                                 2                                                                                   5                                                                 3                                                                        4                                                                         6                                               5                                                 4                                               3                                                                                   4     5                                                                      3                                                        4                                                                       4                                                                         3                                               2                                                                        3                                               2                                                              10                                                                      5                                                                                         3 4      20                                                        2                                                                       4                  0.50                                                  3                                                                                           4                                           4                                        3                                            5                                                  3                                           2                                        2                                          2                                                           3                                                                                     3                                                                      3                                          3               3                                                           3                                                                                     5                                                                      4                  0.48             3                                                          4                                                     2
                                                     4
                  0.46      1               23                                       2                                      Accuracy                    2
                  0.44
                                     1
                  0.42                                                                                        x: Parallel Scaling                                            2                                                                                                y: Sequential Scaling
                  0.40
                                                                     5
                                 0.05        0.10        0.15        0.20        0.25
                                           Time per Task (Seconds)

Figure 7: Accuracy (y-axis) and compute cost in time per task (x-axis) for multi-agent debate, MoA, self-consistency,
and self-refinement on MMLU-Pro (Wang et al., 2024b) with the 8B-parameter model. Numbers to the lower-
right of a point show the degree of parallel scaling and those to the upper-right the degree of sequential scaling.
Self-consistency with one sequence is equivalent to CoT. The gray dotted Pareto-front shows the most efficient
configuration per compute budget.



                                         13

## Страница 14

E  Acknowledgment of AI Usage

  AI Usage Card



   PROJECT       PROJECT NAME        DOMAIN              KEY APPLICATION
   DETAILS               Multi-Agent Reasoning          Paper                    Test-Time-Compute
                            Improves Compute Efficiency:                                     Efficiency                              Pareto-Optimal Test-Time
                               Scaling
   CONTACT(S)      NAME(S)                 EMAIL(S)                 AFFILIATION(S)
                          Florian Valentin             florian.wunderlich@uni-      University Göttingen
                       Wunderlich                  goettingen.de



   MODEL(S)       MODEL NAME(S)
                    ChatGPT (4o, 5), Claude (3.7, 4.0), Gemini (2.5)



   LITERATURE     FINDING LITERATURE     FINDING EXAMPLES     COMPARING
   REVIEW           Asta Paperfinder        FROM KNOWN          LITERATURE
                                        LITERATURE OR
                                     ADDING LITERATURE
                                  FOR EXISTING
                                      STATEMENTS
                                                 Asta Paperfinder



   WRITING        GENERATING NEW      ASSISTING IN          PUTTING OTHER
                  TEXT BASED ON        IMPROVING OWN      WORKS IN
                  INSTRUCTIONS        CONTENT OR          PERSPECTIVE
                                     PARAPHRASING
                                      RELATED WORK
                                         ChatGPT


   CODING        GENERATING NEW      REFACTORING AND     COMPARING
                CODE BASED ON        OPTIMIZING EXISTING   ASPECTS OF
                  DESCRIPTIONS OR     CODE                  EXISTING CODE
                    EXISTING CODE          ChatGPT, Claude,
                     ChatGPT, Claude,          Gemini
                      Gemini


   ETHICS       WHY DID WE USE AI     WHAT STEPS ARE WE   WHAT STEPS ARE WE
                FOR THIS PROJECT?     TAKING TO MITIGATE     TAKING TO MINIMIZE
                           Efficiency / Speed       ERRORS OF AI?        THE CHANCE OF
                        Expertise Access       We manually verify all     HARM OF AI?
                                                   AI-generated content     We deactivated
                                                                             automatic code and
                                                                                            shell execution tools.



  THE CORRESPONDING AUTHORS VERIFY AND AGREE WITH THE MODIFICATIONS OR
   GENERATIONS OF THEIR USED AI-GENERATED CONTENT

   AI Usage Card v2.0                   https://ai-cards.org                  (Wahle et al., 2023)


                                         14
