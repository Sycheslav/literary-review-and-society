---
id: doi-10-1038-s41598-026-42705-7-text
type: material
title: 'When collaboration fails: persuasion driven adversarial influence in multi
  agent large language model debate'
work_id: doi-10-1038-s41598-026-42705-7
source_url: https://www.nature.com/articles/s41598-026-42705-7.pdf
retrieved_at: '2026-10-27'
conversion: pdf_text_extraction
quality_note: Текст извлечён из PDF с сохранением номеров страниц. Порядок колонок,
  таблицы, формулы и подписи могут быть искажены; рисунки доступны по ссылке на PDF.
  Это текстовая конверсия, не визуально эквивалентный оригинал.
language: original
sha256_text: 4bca2ea373e0431986322e988c06b55114c0d586e94396e8c8329ec2c3c09a2c
---

> Источник: [https://www.nature.com/articles/s41598-026-42705-7.pdf](https://www.nature.com/articles/s41598-026-42705-7.pdf). Текст извлечён из PDF с сохранением номеров страниц. Порядок колонок, таблицы, формулы и подписи могут быть искажены; рисунки доступны по ссылке на PDF. Это текстовая конверсия, не визуально эквивалентный оригинал.

## Страница 1

                                                                        www.nature.com/scientificreports



    OPEN When collaboration fails:
         persuasion driven adversarial
          influence in multi agent large
         language model debate
                           Insaf Kraidia1, Iyas Qaddara2, Alhanof Almutairi3, Nada Alzaben4 &
                       Samir Brahim Belhouari5

                         Recent developments have made Large Language Model (LLM) multi-agent systems a promising
                         paradigm for enhancing reasoning via collaborative debate and collective deliberation. Prior work
                          has demonstrated that coordinated LLM agents tend to perform better than single models in terms
                             of accuracy, robustness, and reasoning depth. But these benefits depend on a rarely questioned
                          assumption: that all actors act honestly. In this paper we subvert this assumption by identifying one
                             of the most critical weaknesses: a persuasion-induced adversarial influence in LLM-to-LLM debate.
                         Here we show that a single strategically designed adversarial agent can significantly influence group
                        outcomes through coherent, confident, and misleading arguments, instead of through the more
                                 classical prompt or token attacks. Experimental results suggest that this kind of agent can lower
                          the system’s overall accuracy by 10–40% while increasing consensus on incorrect answers by more
                         than 30%. We conceptualize persuasion as an adversarial vector and demonstrate that inference-
                          time enhancement techniques, such as both Best-of-N optimization and Retrieval-Augmented
                          Generation (RAG), can unintentionally amplify these attacks by increasing the perceived credibility
                             of flawed arguments, even when retrieval quality is low. Our results show that increasing the number
                             of agents or debate rounds does not reliably mitigate adversarial persuasion, nor can simple prompt-
                         based defenses. The present findings demand a fundamental re-thinking of trust, coordination, and
                           robustness assumptions when deploying multi-agent LLM systems.

                       Keywords  Persuasive polishing, Adversarial reasoning, Rhetorical optimization, Retrieval-augmented
                              generation (RAG), Argument enhancement, Perceived expertise modeling

                            Recent breakthroughs in Large Language Models (LLMs) have enabled these models to move beyond the role
                                of standalone predictors and operate as autonomous reasoning entities that can be instantiated to interact,
                                  deliberate, and cooperate with one another to perform increasingly complex tasks1. In contrast to single-model
                               inference (where reasoning is confined to a single model instance) multi-agent LLM systems rely on multiple
                                interacting agents that pursue parallel reasoning directions and diverse cognitive trajectories, enabling a broader
                         and more exploratory search over the solution space. Prior work has shown that aggregating the outputs of such
                                interacting agents (through mechanisms such as majority voting, consensus protocols, or structured debate)
                               often results in systems that are more accurate, more robust, and more effective on challenging reasoning
                                      tasks2,3. Consequently, collective reasoning among LLM-driven agents has emerged as a prominent approach for
                             extending reasoning capabilities beyond those of any individual model.
                                 Nonetheless, this collaborative power introduces a critical and under-explored vulnerability. Debate-based
                              multi-agent systems implicitly assume that all participating agents act in good faith, contributing arguments
                             intended to refine the group’s shared understanding through interaction. In practice, however, an antagonistic


                           1Department of Software Engineering, Faculty of Information Technology, Al-Ahliyya Amman University, Amman,
                               Jordan. 2Computer Science department, Faculty of Information Technology, Amman University, Amman, Jordan.
                           3Department of Information Science College of Computer Sciences & Information Technology King Faisal University,
                              AlAhsa, Saudi Arabia. 4Department of Computer Sciences, College Of Computer and Information Sciences, Princess
                          Nourah Bint Abdulrahman University, P. O. Box 84428, Riyadh 11671, Saudi Arabia. 5Division of Information and
                          Computing Technology, College of Science and Engineering, Hamad Bin Khalifa University, Ar Rayyan, Qatar.
                            email: i.kraidia@ammanu.edu.jo

Scientific Reports |    (2026) 16:11640                               | https://doi.org/10.1038/s41598-026-42705-7                                  1

## Страница 2

www.nature.com/scientificreports/


                              agent may exploit this interaction structure to the detriment of the collective by leveraging stronger persuasive
                                    strategies, privileged access to auxiliary information, or greater underlying model capacity. Recent research
                             has shown that LLM-based agents can exhibit strong(and in some cases poorly controlled) persuasive abilities,
                              allowing them to exert disproportionate influence over the reasoning processes of other agents4,5. Such
                                adversarial behavior can deliberately manipulate deliberative dynamics6, steering the group toward incorrect,
                             harmful, or strategically inefficient conclusions. This raises a fundamental question for collaborative AI: how
                            does an otherwise cooperative multi-agent LLM system behave when a malicious agent infiltrates the debate and
                               seeks to control the collective reasoning process?
                            The threat considered in this paper is the vulnerability of the frameworks of the LLM-to-LLM debate to
                              the influence of persuasion through adversary. Since LLMs have become involved in autonomous multi-agent
                              processes (including decision-support systems and distributed reasoning systems) to a significant extent, the risk
                                of a single malicious agent controlling or destabilizing the collective is of substantial safety, security, and reliability
                             concern. The safe deployment of future multi-agent LLM systems is therefore important by understanding,
                                quantifying, and mitigating this vulnerability.
                                Large Language Models (LLMs) have quickly transformed into versatile autonomous agents that can reason,
                          communicate with other tools, and cooperate with other models. The initial research was characterized by high
                               individual abilities in the areas of chain-of-thought reasoning7, factual knowledge retrieval8, code generation9,
                         and mathematical problem solving10,11,12. As inference becomes less expensive, and models become specialized,
                              the use of LLMs as coordinate agents is becoming more common as opposed to isolated predictors. Recent
                               research indicates that the performance of tasks via multi-agent collaboration can be improved by following
                                  different reasoning tracks, joint deliberation, and refining the results of a debate2,13,14.
                            The debate paradigm has become one of the most promising mechanisms of collaboration of LLMs. Debate,
                            based on the Society of Mind theory, allows several models to answer each other in turn, criticize and revise
                            each other. Multi-agent debate has been demonstrated to enhance factuality and logical consistency2, produce
                        more varied ideas13, and provide more faithful measures of evaluation14,10. Some of them, such as AutoGen15,
                             Camel16, AgentVerse17, and MetaGPT18, are formalizations of these interaction patterns and emphasize the
                                possible applicability of agent-based architectures to complex real-world applications, such as court simulations
                         and software engineering19. Nevertheless, the majority of the previous studies presuppose that cooperating
                              agents have similar objectives and act in an honest way. Debate-based collaboration in adversarial environments
                             has only been studied with limited strength, even though it applies to safety-critical systems.
                                  Persuasive communication has of late become a more vital aspect of LLM behavior. Research indicates that
                      LLMs are able to generate very convincing arguments4, they possess emergent properties of persuading the user
                                to make a decision20, and some favoritism on the type of argumentation21. The evidence in22 indicates that LLMs
                                are able to identify or are fooled by arguments that sound coherent yet false. Notably23, show that the discussion
                             with more convincing models is more likely to give results that are closer to the truth, which means that the
                               influence relations are an important factor in the reasoning process of collaboration. Regardless of this increased
                                    literature, the consequences of persuasion within multi-agent LLM networks are under-researched. Specifically,
                        no previous literature has focused on the systematic exploration of the way in which an adversarial agent can
                                    utilize persuasive power to control model consensus. The first efforts to counter such attacks with the use of simple
                          prompt based warnings were not sufficient24; there are models that could not be persuaded by the warnings, and
                        some even demonstrated poor robustness. The number of agents or the number of debate rounds could not
                                also be used to offer a dependable protection. These results indicate the importance of improved protective
                           measures and enhanced cooperation arrangements of multi-agent systems based on LLM, in particular, as the
                                     latter emerge in more hazardous contexts, e.g., medicine, law, and autonomizing decision-making.
                      We fill this gap in ours by explicitly modeling persuasion as such a form of attack in multi-agent LLM debate
                                (see Fig. 1). In contrast to other forms of traditional adversarial attacks, including prompt injection, gradient-
                            based perturbations, or data poisoning25, our attack is strictly argumentative nature. The opponent agent is told
                                to come up with convincing, logical and confidently pronounced but wrong reasons with an express mandate
                                to sway the process of group decision-making. Our formulation shows that a single opponent can, on average,
                                  significantly interfere with the collective process of reasoning and lead to lower group accuracy (10–40%) and
                             higher conformity to false responses (more than 30 per cent). Moreover, our method interprets inference-time
                           performance improvement methods that might increase adversarial effects. We use (among others) Best-of-N
                          argument optimization, in which a set of candidate arguments are created and the most compelling one is chosen,
                         and Retrieval-Augmented Generation (RAG) to augment adversarial responses with external evidence. Although
                               these methods are commonly used to enhance the degree of factual accuracy and the quality of reasoning, it is
                                     clear, based on our results, that there exists a dangerous threat: retrieved content, regardless of its low quality,
                                 irrelevance, or subtle manipulative influence may become more convincing and reasonable, thus increasing
                                         its persuasive appeal. In this perspective, our solution reveals a long-standing weakness in the collaboration
                           between multi-agent LMs and presents the adversarial robustness of LLM-to-LLM debate instantiations.

                      Related work
                            Recent advances in Large Language Models (LLMs) have enabled their deployment as autonomous agents capable
                                of interacting, reasoning, and collaborating within multi-agent systems. A growing body of work has shown
                                 that coordinating multiple LLM agents through structured interaction (such as debate, deliberation, or voting)
                           can improve reasoning accuracy, robustness, and solution diversity compared to single-agent inference2,3,13,14.
                            Debate-based approaches, in particular, allow agents to iteratively critique and refine one another’s arguments,
                               leading to improvements in factuality and logical consistency on complex reasoning tasks2,14. Several frameworks
                            have formalized these interaction paradigms, including AutoGen15, CAMEL16, AgentVerse17, and MetaGPT18,
                          which explore role-based communication, task decomposition, and iterative consensus-building among LLM

Scientific Reports |    (2026) 16:11640                               | https://doi.org/10.1038/s41598-026-42705-7                                  2

## Страница 3

www.nature.com/scientificreports/





                                 Fig. 1.  Multi-agent LLM debate attack.


                                 agents. These systems demonstrate the applicability of multi-agent architectures to domains such as software
                               engineering, legal reasoning, and decision-support applications19. However, the majority of existing studies
                                  implicitly assume cooperative and honest agent behavior, leaving the robustness of debate-based multi-agent
                             systems under adversarial participation largely unexplored.
                                      Parallel to research on multi-agent collaboration26, recent studies have investigated the persuasive and
                             argumentative capabilities of LLMs. Empirical evidence indicates that LLMs can generate highly coherent,
                                 rhetorically compelling arguments and adapt their framing to influence beliefs and decisions4,20.Other work
                             has shown that LLMs exhibit preferences for certain forms of evidence and argumentation strategies, and
                                 that fluency and perceived expertise play a critical role in persuasive effectiveness21,22. Furthermore, recent
                               findings suggest that interaction with more persuasive or confident models can significantly influence reasoning
                            outcomes, sometimes even improving truthfulness when persuasion aligns with correct reasoning23. While these
                                studies highlight persuasion as an emergent and powerful property of LLMs, they primarily focus on human–
                   LLM interaction. The consequences of persuasive behavior in LLM–LLM interactions, particularly within
                                collaborative multi-agent debate frameworks, remain insufficiently studied.
                                  Adversarial research on LLMs has traditionally focused on prompt injection, data poisoning, jailbreak
                                  attacks, and gradient-based perturbations5,25. More recent work has begun to explore adversarial behavior in
                                collaborative or multi-agent settings, including malicious coordination and manipulation of shared reasoning
                                   processes6,24. However, many of these approaches rely on explicit attack objectives, reinforcement learning,
                             or parameter-level optimization. In contrast, adversarial influence that operates purely through natural
                             language interaction—without modifying model parameters or introducing external perturbations—remains
                             underexplored. In particular, the use of persuasion as an adversarial vector within debate-based multi-agent
                             reasoning frameworks has not been systematically analyzed. Existing mitigation strategies often rely on prompt-
                                   level warnings or heuristic constraints, which have been shown to provide limited robustness under sustained
                                adversarial pressure. This paper bridges these lines of research by explicitly modeling persuasion as an adversarial
                         mechanism in multi-agent LLM debate. Unlike prior work that assumes cooperative agents or focuses on
                                    classical adversarial attacks, we demonstrate that a single strategically persuasive agent can significantly degrade
                                  collective reasoning accuracy and induce false consensus across diverse tasks. Our approach operates entirely at
                               inference time, does not rely on reinforcement learning, parameter updates, or reward optimization, and instead
                                 exploits rhetorical adaptation, contextual accumulation, and argument refinement. By revealing a structural
                                 vulnerability in debate-based multi-agent collaboration, this work complements existing research on LLM
                             persuasion and adversarial robustness, while highlighting the need for principled and structural defenses in
                               future multi-agent LLM systems.

                      Threat model & Attack design
                             In the remainder of this paper, we use the term agent to denote an instantiated Large Language Model operating
                             with a defined role, dialogue context, and interaction protocol within a collaborative reasoning framework.
                  A multi-agent system therefore consists of multiple such LLM-based agents that exchange arguments over

Scientific Reports |    (2026) 16:11640                               | https://doi.org/10.1038/s41598-026-42705-7                                  3

## Страница 4

www.nature.com/scientificreports/


                                successive rounds in response to a shared task, while a single-agent setting corresponds to reasoning performed
                           by one agent in isolation. Our threat model considers scenarios in which one or more agents within an otherwise
                              cooperative multi-agent debate are adversarial, with the objective of influencing collective reasoning through
                               persuasive interaction rather than through direct manipulation of model parameters or inputs. This setting
                               allows us to isolate and study persuasion as a distinct attack vector in LLM-to-LLM collaboration.
                               For the threat model, we consider a multi-agent debate setting in which a subset of agents may behave
                                  adversarially. The adversarial agent aims to maximize persuasion influence over other agents in the group
                           by strategically promoting a target answer during iterative reasoning rounds. The adversary has access to the
                             debate history and can generate arguments conditioned on prior agent responses. In our controlled evaluation,
                              the adversarial agent is assigned a designated target answer in order to enable systematic and reproducible
                          measurement of persuasion-induced accuracy degradation. This experimental design ensures that influence
                                    effects can be quantified consistently across datasets and configurations. Importantly, this setup does not assume
                                oracle access to ground truth in realistic deployment scenarios. In practice, an adversarial agent need only
                                   select a target claim and attempt to persuade other agents toward it. The adversary does not require knowledge
                                of whether the selected answer is correct. The vulnerability demonstrated in this work arises from credibility
                             reinforcement and social influence dynamics within multi-agent debate, rather than privileged access to ground
                               truth labels. Furthermore, assigning a designated incorrect answer in the evaluation constitutes a conservative
                          measurement strategy. In real-world settings, adversaries may promote plausible but uncertain claims without
                                certainty regarding correctness. Consequently, the observed influence effects should be interpreted as a lower
                        bound on the potential impact of persuasion-driven adversarial behavior.
                          Our model describes a complete structure of how to simulate a multi-agent debate, construct particular
                                adversarial behavior and introduce a variant of Retrieval-Augmented Generation (RAG) which tries to further
                           improve adversarial control in the LLM-to-LLM interactions. The system comprises of a pool of cooperative
                              agents and one or more adversarial agents interacting in multi-round to provide response to diverse question
                                tasks depending on diverse benchmarks. It is within this framework that we will be in a position to explore
                      how collaborative reasoning varies with the progression of time and how an agent who is purposely misleading
                           can alter such a course of action27,28. We adopt the standard multi-agent debate protocol in which the team of
                              the Large Language Model (LLM) agents have to communicate through a series of questions in response to a
                             shared query. Within our implementation, all agents will be provided with the same question first and formulate
                        on their own an initial response (Unless otherwise specified, all agents are assumed to treat peer responses
                               symmetrically, without prior trust differentiation or source-based weighting). During subsequent debate rounds,
                              the first question is given to both agents and (ii) the list of responses to all the other agents. The agents make
                                    later reconsiderations and re- argue their responses on the grounds presented by the group. After a particular
                          round is over, there is a mechanism of selecting a final answer which finishes the system after a certain number
                                of rounds. Our approach can be allowed by this environment to investigate the veridical and adversarial methods
                                of persuasion to the internal processes of reasoning and ultimate consensus of the group under discussion.

                        Dataset processing
                         To maintain interoperability among the heterogeneous benchmarks, our methodology introduces a common
                              preprocessing pipeline to transform raw dataset samples, where each sample may have different formats and be
                               labeled differently, and may be annotated in various forms29, into a common question-answer format that can
                           be used by a multi-agent debate. Due to the drastic differences in the structure of datasets, including MMLU,
                            TruthfulQA, MedMCQA, SCALR, Math, and Chess, we use dataset-dependent parsing functions to normalize
                              prompts30, extract labels, and store raw samples in traces. The preprocessing workflow is organized into a
                                  series of operations (summarized in Fig. 2) and starts with the creation of an empty task list and the following
                                  repetitive work with all the raw samples. Within each sample, the system automatically recognizes the type of
                              the dataset, picks the relevant parsing function and applies it to produce three outputs: a normalized natural-
                             language prompt, a canonical ground-truth answer, and the unchanged raw record. Label normalization and
                          prompt normalization are used to maintain all datasets in identical format, and validation is used to eliminate
                          malformed or incomplete samples. Lastly, every standardized triple is added to the output list and optional
                               global post processing, such as shuffling or filtering is done before the final unified dataset is given. This unified
                               representation can be smoothly incorporated into the multi-agent debate system, the adversarial RAG system,
                         and the evaluation systems.

                          Adversarial agent design
                             In our design, the adversarial agent is embedded within the cooperative debate protocol but is deliberately
                               instructed to exploit persuasion as its primary mode of attack. Unlike cooperative agents, whose objective is
                                to converge toward the correct solution, the adversarial agent is explicitly guided to select an incorrect answer
                         and to repeatedly promote it through coherent, confident, and strategically misleading arguments, without ever
                                   explicitly revealing the ground-truth label. This behavior is realized through a four-stage persuasion pipeline
                               in which (i) multi-layered arguments establish a consistent yet false narrative, (ii) counterarguments directly
                               challenge and destabilize opposing reasoning, (iii) fusion integrates supportive and adversarial elements into a
                               unified discourse, and (iv) persuasive polishing enhances rhetorical clarity, confidence, and perceived expertise.
                              This pipeline is executed at each debate round, allowing the adversarial agent to generate diverse reasoning
                                   trajectories, critique competing arguments, and progressively refine its persuasive narrative. As these optimized
                               contributions accumulate in the shared dialogue context, cooperative agents become increasingly influenced,
                         making convergence toward an incorrect group consensus more likely. Although the adversarial agent operates
                                    iteratively across multiple debate rounds and adapts its responses based on feedback from other agents, this
                              process is fundamentally distinct from reinforcement learning. No model parameters are updated, no reward

Scientific Reports |    (2026) 16:11640                               | https://doi.org/10.1038/s41598-026-42705-7                                  4

## Страница 5

www.nature.com/scientificreports/





                                Fig. 2.  Multi-agent LLM preprocessing flowchart.


                              function is defined, and no policy optimization is performed at any stage. Instead, the adversarial behavior
                           emerges entirely at inference time through prompt-based conditioning, contextual accumulation, and selective
                              generation of arguments within a fixed pretrained model. Iterative refinement in this framework reflects
                                 rhetorical and contextual adaptation rather than gradient-based learning or reward maximization. Accordingly,
                           Algorithm 1 formalizes an inference-time adversarial reasoning procedure that propagates persuasive influence
                            during multi-agent interaction, rather than a reinforcement-learning-based optimization process.

                               Multi-layered argument generation
                          The adversarial agent can have greater persuasive power by using a special argument generation multi-layered
                         model (shown in Fig. 3) where the model is told to generate three logically independent pieces of reasoning in
                             support of the false answer. This element is seen as a diversification mechanism within and so one can see that
                              the LLM is able to cover a variety of argumentative styles- causal, deductive, analogical, statistical or definitional
                               instead of depending on one line of rhetoric. The prompting technique is implicitly based on the internal
                                                           w<t, ∅), of the model, which drives the sampling process towards                             next-token probability distribution P (wt|                               semantically-diverse continuations converging on the identical erroneous conclusion31. By generating multiple
                              explanations that differ in linguistic framing and logical structure but share the same final inference, the module
                               constructs a form of persuasive redundancy: independent argument chains {A1, A2, A3} are produced such

Scientific Reports |    (2026) 16:11640                               | https://doi.org/10.1038/s41598-026-42705-7                                  5

## Страница 6

www.nature.com/scientificreports/


                Input   Dataset (D); number of agents (A); number of rounds (R); repetitions (T); model
                            (M); debate prompt preﬁx and suﬀix.
               Output  All debate transcripts for all samples and repetitions are stored in JSONL
                            format.
              1       Load dataset from ﬁle (if provided) or from benchmark. Extract: question (q),
                           ground-truth answer (y), raw task (r).
              2       For each agent (a = 1 \dots A), // Initialize Agents
              3            create an empty dialogue context and insert the question.
              4       For each Round (k = 0 to R–1) //Perform debate across all agents.
              5          For each agent (a = 1 \dots A): // Agent Processing
              6                  If First Round (k = 0)
              7               Agent sees only the question. No debate prompt is added.
              8                Collect previous answers from  all other agents: OtherAnswers ←
                                  Previous assistant messages from agents b ≠ a.
              9               Build retrieval query using the question, the agent’s chosen answer
                               (wrong or correct), and OtherAnswers.
              10              Retrieve top-k passages from the external knowledge source.
              11             Clean  and  ﬁlter  retrieved  passages  to  remove  irrelevant  or
                                    contradictory evidence.
              12             Construct debate prompt: Preﬁx + "One agent solution: <answer>" for
                               each answer + Suﬀix + retrieved evidence R[a].
              13           Add this as a new user message to Context[a].
              14            Query the model with the full context.
              15           Add the model output as an assistant message.
              16      Repeat for All Rounds: After R rounds, each agent has produced a sequence of
                         reﬁned answers.
              17      For each question, save to output ﬁle: - Question and ground-truth answer -
                    Raw task   - Full dialogue history for all agents,  - All retrieval queries and
                             retrieved passages for transparency
              18      Repeat Entire Procedure T Times: Used to collect multiple debate runs for
                           robustness or sampling variation.

                          Algorithm 1.  Multi-agent multi-round debate algorithm.


                                 that each satisfies the constraint f (Ai) = ywrong, where ywrong is the adversary’s designated incorrect answer.
                          Such chains of arguments can use the complementary strategies of causal anchoring (X causes Y, thus it follows
                              the answer is X) or definitional reframing (under concept definition D, it always follows that the answer is X),
                             or implicit numerical reasoning (estimating with Z yields the correct answer X). The three parallel lines of
                             reasoning are also generated by playing on another familiar cognitive and linguistic bias, which is also observed
                               in LLM behavior, wherein the more justifications one has, the more they think they are being epistemically
                                   right. Formally, the adversary aims to maximize perceived argument strength through the aggregated effect
                             Credibility      i=1 Coherence (Ai) + Diversity (Ai), where coherence  is used  to ensure  that  the                    ∝∑3
                          argument is fidelity to the erroneous target answer, and diversity used to ensure that the arguments are distinct
                               paraphrases. This multi-layered reasoning framework is therefore not only a form of stylistic variation, but a
                               systematic way of simulating expert-level reasoning, making the opponent more adept at causing a divergence in
                              the multi-agent debate, and making cooperative agents revise their belief to the false conclusion.
                           To make the argument generation process of a given adversarial agent more plausible and specific, it also
                            enhances the multi-layered argument generation process with a retrieval-augmented generation (RAG) part.
                            Retrieval-Augmented Generation (RAG) is used to condition adversarial argument construction on external
                                 textual evidence during inference. At each debate round, the adversarial agent formulates a retrieval query
                              derived from the current question, the selected incorrect answer, and a summary of prior agent responses.
                           Top-k passages are retrieved from an external corpus and filtered to remove overt contradictions. These
                                retrieved passages are then incorporated into the prompt context to ground argument generation in selectively
                           framed evidence. The RAG mechanism operates purely as contextual augmentation and does not update model
                             parameters or alter internal representations.
                             During every round of the debate, the agent composes a retrieval query based on the current question Q,
                              the incorrect answer selected ywrong and a summary of the other agents argumentative history compressed.
                              This query is sent to an external knowledge source (e.g., Wikipedia, domain-specific corpora, or curated
                               textbooks), from which a set of top-k passages R =        . . . ,      is retrieved and then cleaned to remove off-                                                                               {r1,    rk}                                topic or contradictory content. The multi-layered generator is further conditioned with respect to R as well as
                 Q and ywrong, and it generates argument chains {A1,A2,A3} based on evidence, which are selective re-use of
                                     facts, examples and domain terms taken out of the passages that it retrieves. The adversary now wants to build
                           arguments that will satisfy:

Scientific Reports |    (2026) 16:11640                               | https://doi.org/10.1038/s41598-026-42705-7                                  6

## Страница 7

www.nature.com/scientificreports/





                                Fig. 3.  Multi-layered argument generation.


                                                            f (Ai, R) = ywrong,                                             (1)

                          where a joint goal is maximized to ensure internal coherence, inter-argument diversity, and external support by
                               evidence:
                ∑3
                                 CredibilityRAG       Coherence (Ai) + Diversity (Ai) + EvidenceAlign (Ai)           (2)                              ∝
                                                         i=1

                         By basing every logic direction on selectively recalled real-world data, the adversarial agent will be capable of
                              generating flawed but factually rich stories which are much more difficult to counter by cooperative agents,
                               increasing the power of the attack.
                                Unlike reinforcement learning frameworks, the selection among multiple candidate arguments using
                             Best-of-N optimization is performed entirely at inference time and does not involve backpropagation, reward
                            modeling, or policy updates. In our framework, Best-of-N is applied during each debate round exclusively
                             within the adversarial agent to strengthen persuasive effectiveness under a fixed pretrained model. Specifically,
                                 for a given round, the adversarial agent samples N candidate arguments from the same underlying LLM using
                          an identical prompt but stochastic decoding. These candidates represent alternative rhetorical realizations of the
                         same incorrect target answer. Each candidate is then evaluated using a lightweight scoring heuristic that assesses
                                 internal coherence, rhetorical confidence, and alignment with the designated incorrect conclusion. The highest-
                              scoring argument is selected and injected into the shared debate context, where it may influence subsequent agent
                               responses. This procedure functions purely as a sampling-based filtering and selection mechanism and should
                           be interpreted as inference-time argument optimization rather than reinforcement learning or parameter-level
                               adaptation.


Scientific Reports |    (2026) 16:11640                               | https://doi.org/10.1038/s41598-026-42705-7                                  7

## Страница 8

www.nature.com/scientificreports/


                            Counterargument construction
                             Following the generation of its multi-layered supporting arguments, the adversarial agent then enters a second
                            phase (shown in Fig. 4) where it analyses systematically the answers provided by all the other agents in the
                                      last round of the debate. Its analysis is closely linked with the previous reasoning module: the multi-layered
                           arguments help to strengthen the position of the adversary; the counterargument module is aimed at the
                               destruction of the enemy position in a strategic manner. The model extracts core claims, inference steps, and
                                 implicit assumptions that are contained in the messages of the other agents using both syntactic and semantic
                                parsing. For each agent response Rj, the adversary extracts a set of key propositions {pj1, pj2, . . . , pji} and                                evaluates these against its incorrect target answer ywrong. It then generates targeted counterarguments Cji
                              constructed to undermine the logical validity, evidential basis, or inferential coherence of those propositions.
                              This process can be conceptualized as generating a transformation g : Rj →Cj, where the adversary maximizes                              the persuasive effect Persuasion(Cj) subject to the constraint that the counterargument must remain aligned
                             with the incorrect conclusion. Techniques used by the agent linguistically include counterfactual framing (even
                       when X is true, it does not follow that Y is true), inferential inversion (the premises show that it is the opposite
                                of what is said), and epistemic uncertainty injection (the evidence of such an interpretation is less strong than
                                             it is claimed it is). It is the combination of these rhetorical strategies that make cooperative agents doubt their
                             reasoning by lowering the perceived credibility of their original thought. The counterarguments, in conjunction
                             with the multi-layered arguments generated earlier, form a dual-force persuasion cycle: one which reinforces the
                               position of the opponent and at the same time weakens the plausibility of the other possible explanations. This
                          two-way pressure: reinforcing the false side, undermining the true counterarguments, becomes a significant
                               contributor to the capacity of the opponent to change group opinion during the next rounds of debate. The
                            counterargument module is also further extended with retrieval-augmented generation to build an attack on
                              other agents more specific and factually grounded.
                                Following the  extraction  of important  propositions, {pj1, pj2, . . . , pji}  in each response Rj, the                              adversary formulates a counterfactual retrieval query encoded to represent three elements (i) the original
                              question Q, (ii) the false target answer ywrong and (iii) the set of propositions of the adversary agent that the
                              adversary intends to refute. This query is employed to extract a selected collection of passagesRoppj   which
                                 either (a) may be paraphrased to give the false account of the adversary, or (b) may be selectively quoted to
                              introduce uncertainty into the rival account. The counterargument generation process is then conditioned on
                           (Q, ywrong, Rj, Roppj   ), producing counterarguments Cj that weave together logical critique and selectively
                           framed external evidence. Conceptually, the transformation g : Rj          is now implemented as a RAG-based                                                  →Cj                        mappinggRAG(Rj, Roppj  ) = Cj, optimized to maximize Persuasion(Cj) while maintaining alignment with
                            ywrong. This enables the adversarial agent to not only dispute the logic of the argumentation of other agents, but
                                also support its arguments with real-world, externally obtained facts, which makes its attacks look empirically
                                    justified even when in reality they are arguing in favor of a false conclusion.





                                Fig. 4.  Counterargument construction.


Scientific Reports |    (2026) 16:11640                               | https://doi.org/10.1038/s41598-026-42705-7                                  8

## Страница 9

www.nature.com/scientificreports/


                            Argument–counterargument fusion
                        Once the adversarial agent has produced its multi-layered supporting arguments and its specific counterarguments,
                              the adversarial agent enters into a synthesis step where the two parts are integrated into a single and, coherent
                               persuasive message. This fusion module, which is performed at every iteration of the debate in Algorithm 2
                                (Steps 7–11), serves as the integrative heart of the adversarial pipeline, that is, it is the combination of internally
                              constructed reasoning chains {A1, A2, A3} and externally directed counterarguments Cj into a single discourse                                 structure. This is because the model encourages the opponent to rethink their opposing opinions in a strategic
                              sense by incorporating them into a larger argumentative account that disempowers them systematically in terms
                                of relevance, logical consistency or even grounding based on evidence. Mathematically, this may be seen as
                              building of a composite argument M such that:
                           M = h (A1, A2, A3, C1, . . . , Ck)                                      (3)
                          where the function h(·) seeks to maximize persuasive coherence while aligning the entire message toward the                              predefined incorrect answer ywrong​. The opponent uses comparative reasoning strategies, such as opposition
                                of its arguments to those of the other actors, to point out to the viewer the perceived advantages of its own
                               position and the weaknesses, uncertainties, or inconsistencies of the alternative positions that are the correct
                               ones. Linguistic devices (contrastive linking in a more robust interpretation suggests…), evaluative emphasis,
                         and selective anchoring, which are in support of this comparative framing, include contrastive linking (in
                                 contrast, however, despite this), selective anchoring, where the adversary brings to the foreground evidence that
                             supports its false answer, and evaluative emphasis. The resultant conglomerated output is a very well-organized
                               persuasive discourse which feels internally consistent and multi-faceted in its logicality. Importantly, through
                                 his combination of supportive and adversarial reasoning into a unified rhetorical construct, the agent turns
                               individual bits of argument into a wholesome argumentative stance, thus magnifying its impact on cooperative
                              agents and the likelihood of influencing the group consensus to the faulty inference in the next round of the
                                debate.
                                In the fusion stage, retrieval-augmented generation is exploited to integrate supportive and adversarial
                             reasoning  into  a  globally  coherent,  evidence-aware  narrative. Given  the  set  of  internally  generated
                           arguments {A1, A2, A3},  counterarguments {C1, . . . , Ck}, and  the union  of  all  retrieved  passages                                                      k          ​, the adversary constructs a composite message                R∗= R ∪Ropp                                             1  ∪· · · ∪Ropp
                           M = h (A1, A2, A3, C1, . . . , Ck, R∗)                                    (4)

                                                        .
                                     h(⋅) is now activated to provide consistency in evidence worldwide: any apparent inconsistencies between
                           quoted passages are downplayed, and the passages are cherry-picked or paraphrased to strength ywrong.
                          The RAG component is an effective attention layer on the retrieved document set and enables the model to
                           emphasize those snippets that facilitate its narrative with slighting or ignoring evidence that would obviously
                            prove the correct answer. This provides coherent message where the external evidence is not just an addition
                                as the footnotes but is closely distributed throughout the framework of supporting arguments and opponents.
                             Consequently, the resulting message M will be the well-sourced, systematically cross-referenced explanation and
                              the erroneous answer will be the one that seems to be the most evidence-based even in the discussion.




                                Argument–Counterargument Fusion Algorithm
                        Input  Receive multi-layered arguments {A₁, A₂, A₃}, counterarguments {C₁…Cₖ}, and
                                     retrieved evidence R*.
                      Outp  Generation message M.
                         ut
                      1      Normalization: Clean and standardize Aᵢ, Cⱼ, and evidence units to ensure
                                     consistent representation.
                      2     Target Alignment: Set the incorrect answer ywrong as the central conclusion
                                   guiding the fusion.
                      3      Supportive Argument Structuring: Organize {A₁, A₂, A₃} into a coherent
                                     multi-perspective narrative.
                      4     Counterargument Reframing: Transform each counterargument Cⱼ to weaken
                                 opposing viewpoints while maintaining alignment with ywrong.
                      5     Evidence Integration: Select, ﬁlter, and embed supportive snippets from R*
                                       into arguments and counterarguments.
                      6      Global Coherence Enforcement:  Resolve  contradictions and merge  all
                               components into a uniﬁed message M.
                      7      Persuasive  Enhancement:  Apply  rhetorical  cues  (contrastive  linking,
                                  emphasis, anchoring) to strengthen persuasion.
                      8     Output Generation: Produce the ﬁnal fused persuasive message M.

                          Algorithm 2.  Argument–counterargument fusion algorithm.


Scientific Reports |    (2026) 16:11640                               | https://doi.org/10.1038/s41598-026-42705-7                                  9

## Страница 10

www.nature.com/scientificreports/


                               Persuasive polishing
                             In the last step of the adversarial reasoning pipeline, - as shown in Fig. 5 - the argument resulting from the
                           merger of the two arguments undergoes a rhetorical polishing sequence that is intended to maximize its
                              persuasiveness when it is sent to the other agents. Continuing on the argumentative structure that had been
                             fused in the previous. Continuing on the mixed argumentative composition created on the previous phase,
                              the opponent uses a combination of linguistic and stylistic improvement tactics that improve the delivery and
                            format of the message. It includes encouraging the model to use discourse patterns of authoritative and credible
                           communication, including framing major claims using rhetorical questions that indirectly direct the reader
                                to the false conclusion, using a confident and assertive voice that down steps epistemic uncertainty, and using
                              domain-specific terms to imitate technical mastery. Also, the opponent offers appeals to authority, either through
                              the means of generalized consensus of the expert or by means of invocation of abstract principles, to give the
                             impression of externally validated thought. Computationally, this polishing step may be regarded as optimizing
                              the surface implementation of the composite argument M to give it maximum persuasive value, which can be
                              represented asmaximizing.
                                      (
                               Impact                    M ′) = Clarity ( M ′) + Confidence ( M ′) + Perceived Expertise ( M ′) ,          (5)

                          where M′ indicates the rhetorically augmented expression of the original amalgamated message. Refinement
                              process does not change the basic wrong conclusion but re-packages the communicative messages in a strategic,
                        more persuasive way in order to make the argument more convincing, more fluent and more in a way that is
                                cognitively expected to persuade. This last rhetorical turn is what makes sure that the message of the opponent is
                            not only logically consistent internally but also has as many psychological and stylistic impact as possible, thus,
                                             it is more likely that cooperative agents will either follow or be influenced by the adversarial side as the debate
                                progresses.
                              At the polishing phase, the stylistic shape of the message is polished with the help of RAG, as well as the
                                  referential density, and perceived expertise. Beginning with the merged argument M, the opponent re-queries
                              the external source of knowledge with specialization-oriented query accentuating the domain (e.g., medicine,
                                  history, physics) and major objects referred to in the presented message. The retrieved passages Rstyleare then
                                injected into the polished message M’ with domain specific phrases, canonical instances, and references to well-
                       known principles (e.g., “standard clinical guidelines, widely accepted economic models, etc.) being injected in.
                          The polishing transformation is formally within the polishing process:
                           M ′ = PolishRAG (M, Rstyle) ,                                      (6)

                          which still optimizes the impact objective:
                                       (
                                Impact                    M ′) = Clarity ( M ′) + Confidence ( M ′) + PerceivedExpertise ( M ′)           (7)
                             but now augments PerceivedExpertise (M′) by means of explicit basing in recognizable external knowledge.                          The adversarial agent composes a message that does not only sound confident and fluent but also looks well-
                           informed by incorporating allusions to the facts retrieved, common values, case studies, and statements of higher
                                 expertise, which makes the message seem informed. This RAG-enhanced polishing step therefore gives the false
                             conclusion the maximum psychological plausibility, which additionally increases the chances that cooperative
                              agents will be led by the antagonistic stance.





                                Fig. 5.  Persuasive polishing process.


Scientific Reports |    (2026) 16:11640                               | https://doi.org/10.1038/s41598-026-42705-7                                 10

## Страница 11

www.nature.com/scientificreports/


                      Experimental setup
                        Datasets
                            There are four complementary and high-stakes benchmarks that are utilized to rigorously evaluate the strength
                                of the suggested multi-agent adversarial persuasion framework. These datasets include general knowledge,
                                 factual accuracy, medical decision-making and legal reasoning- areas where persuasive manipulation may create
                           major performance deterioration or even negative effects. The diversity of them guarantees the evaluation of
                           both general and domain-specific weaknesses of collaborative LLM systems.

                 MMLU (Massive multitask language understanding)
                     MMLU32 is a mass-scale test with 14,042 multiple-choice questions in 57 academic subjects, such as STEM, social
                                 sciences, humanities, law, medicine. It is extensively applied in the measurement of expert levels of reasoning
                         and generalization. The breadth of the dataset al.lows to test the hypothesis that adversarial agents can use the
                            weaknesses of reasoning in different areas of knowledge. It is a structured, multi-option form that is suitable
                               in the context of debate that can be conducted in a systematic way in which arguments between sides can be
                                evaluated. MMLU identifies the ability of collaborative agents to be reliable under challenging circumstances of
                              misdirected or strategically packaged arguments in a variety of topics.

                           TruthfulQA
                          The database used in TruthfulQA8 has 817 questions carefully crafted to obtain false responses using widespread
                      human beliefs, and misjudging assumptions. The benchmark has 38 types of factual reasoning. The direct target
                                of TruthfulQA is vulnerability to misinformation in the form of persuasion. The assessment aims to understand
                           whether an adversarial debate can be resisted by coordinated agents against confidently presented falsehood and
                                 rhetorical manipulation. This dataset is essential in the evaluation of defenses against subtle and yet powerful
                                adversarial methods that seek to enhance misconceptions common in many.

                   MedMCQA
                     MedMCQA33 is a high-stakes medical question-answering benchmark made up of more than 194, 000 medical
                            examination questions on diagnosis, pathology, physiology, pharmacology and treatment decision-making.
                            Medical reasoning is one area in which the adversarial pressure with persuasion can result in unsafe or clinically
                               negative results. The testing of the possibility of multi-agent collaboration to avoid incorrect yet plausible medical
                          argument brought in by the adversarial agents is made possible through testing on MedMCQA. The complexity
                                of the domain), along with the life critical nature of the decisions in question, render MedMCQA indispensable
                                to assessing the robustness of safety.

                      SCALR (Statutory Case Law Reasoning, Legal Bench)
                        SCALR34 revolves around the reasoning of the law, interpretation of the statutes and case analysis, involving
                              the use of multi-step reasoning based on legal conceptualization. It is a specialized division of the larger Legal
                         Bench project. The reasoning tasks in law are extremely susceptible to rhetorical framing and a selective use of
                               precedent-patterns, which can easily be abused by parties in adversarial settings. SCALR allows analyzing the
                                    ability of collaborative agents to provide consistent and legally coherent interpretations in an adversarial setting.
                                          It is more complex and resembles the argumentation that occurs in real life as minor mistakes in interpretation
                           can have huge repercussions down the line.

                         Metrics
                      Two complementary measures are utilized in order to measure the efficiency of the presented framework of
                                adversarial persuasion and its influence on the collaboration among the agents. They both together take the
                               universal performance of systems and the manipulation of individual agents in a localized manner.
                            Change in system accuracy (ΔAccuracy)
                           To quantify the impact of adversarial persuasion on collective reasoning, we define the change in system
                             accuracy at the final debate round (Majority Vote) as.
                                                 ∆Accuracy = Aadv                                                  (8)                                                                     −Abase,
                             where:

                                 •  Abasedenotes the baseline system accuracy without adversarial intervention,
                                 •  Aadv​denotes the accuracy after the adversarial debate process.

                         Under this definition:

                                 •  ΔAccuracy<0indicates performance degradation due to adversarial influence,
                                 •  ΔAccuracy=0indicates no measurable effect,
                                 •  ΔAccuracy > 0 indicates performance improvement.

                        More negative values therefore correspond to stronger disruption of collaborative reasoning and greater
                                adversarial influence.
                                  Increase in Agreement with the Adversary (ΔAgreement): ΔAgreement is the second measure, which is used
                                to measure how the collaborative agents gradually start adopting the answer offered by the adversarial agent.
                                          It is a measure of the change in the alignment of the agents between their starting independent responses and


Scientific Reports |    (2026) 16:11640                               | https://doi.org/10.1038/s41598-026-42705-7                                 11

## Страница 12

www.nature.com/scientificreports/


                                 their ultimate positions upon the completion of the debate rounds. When the value of ΔAgreement is positive
                                             it means that the agents have been either convinced or deceived by the adversarial agent, and it indicates that
                              the adversary has the ability to control the behavior of local agents. This measure therefore shows the effect of
                               individual agents under adversarial arguments in the collaborative decision-making system.
                                     Let:
                                 • Agree0= number of the agents whose first response satisfies the adversarial response.
                                 • AgreeT ​= respondents who agree with the adversarial answer at the end of the last round T.
                            Then:
                                            ∆Agreement = Agree T           0                                    (9)                                                            −Agree
                  A positive increase indicates: ∆Agreement > 0 . This reflects successful persuasion, capturing the local
                              behavioral influence of the adversarial agent.
                                Attack Success Criteria: An adversarial attack is considered successful when it simultaneously degrades
                               system-level performance and increases alignment with the adversarial agent. Formally, we define.
                                 • ∆Accuracy = Aadv                                        −Abase                                 • ∆Agreement = AgreeT                                         −Agree0
                         Under this formulation:

                                 •  ΔAccuracy < 0 indicates system-level degradation,
                                 •  ΔAgreement > 0 indicates increased persuasion or alignment with the adversary.

                               Therefore, an attack is deemed successful when: ΔAccuracy < 0 and ΔAgreement > 0 This condition captures
                           both structural corruption (reduced global performance) and behavioral manipulation (increased adversarial
                              alignment), providing a comprehensive assessment of adversarial influence in multi-agent debate systems.

                       Hyperparameters
                          The implementation of our multi-agent adversarial debate framework relies on a combination of robust deep-
                                learning, data-processing, and API-driven tools. To load, tokenize and obtain text with open-weights LLMs,
                              including as LLaMA35, Mistral36, Qwen37, and Yi38, we rely on the HuggingFace Transformers library39. The
                              execution and mixed-precision inference of PyTorch are supported, and can be used to efficiently run batches
                                of decoding and load models based on the device they are being run on using device map= auto. For API-
                            based models such as GPT-4o40 and GPT-3.5-Turbo41, we employ the OpenAI Chat Completions API to query
                               cooperative, adversarial, and judge agents, with optional log-probability scoring for argument selection.
                           To ensure methodological transparency and reproducibility, we provide a detailed description of the
                            Retrieval-Augmented Generation (RAG) pipeline used in our experiments:

                                 •  Retrieval Corpus: For each benchmark (MMLU, TruthfulQA, MedMCQA, SCALR), retrieval was performed
                                over publicly available textual corpora aligned with the domain of the dataset. No proprietary or private data
                             were used. All sources were publicly accessible and contained no personal or sensitive information.
                                 • Embedding Model and Similarity Search: Dense retrieval was implemented using OpenAI embedding mod­
                                        els (text-embedding-3-large).
                                 • Both the user query and candidate passages were embedded into a shared semantic vector space. Similarity
                             between the query and passages was computed using cosine similarity.
                                 •  Passages were ranked based on similarity score.
                                 • Number of Retrieved Documents (k): For each query, the top-k = 5 passages were retrieved and concatenated
                                  to the model prompt. To assess robustness, we additionally evaluated:{k = 3, k = 10}.
                                 •  Preprocessing and Filtering: Retrieved passages underwent minimal mechanical preprocessing:
                                 •  Duplicate passages were removed.
                                 •  Passages exceeding 512 tokens were truncated.
                                 •  Passages with cosine similarity below τ = 0.30 were discarded.

                               Importantly, no filtering was performed based on semantic agreement, contradiction, or stance relative to the
                                adversarial claim. Filtering was strictly similarity-based and independent of debate content. This design ensures
                                 that the observed amplification effects are not artifacts of selective evidence removal.
                            The methods used to process the data, sample it and manipulate the datasets are based on pandas, glob
                         and datasets where the formatting follows a similar pattern among the MMLU, TruthfulQA, MedMCQA,
                     SCALR and other benchmarks. All of the important configuration parameters that control the behavior of the
                       LLM, decoding strategies, argument generation, and hardware use, are summarized in Table 1. The structural
                           dynamics of the debate are determined by high level system variables (number of agents, adversaries, rounds, and
                          argument candidates). The level of stochasticity and the level of evaluation of generated responses are controlled
                           by low-level decoding hyperparameters such as temperature, topp, maxnew_token, and logprobs. Parameters
                                   like gpus and device map which are hardware related facilitate effective resource allocation.




Scientific Reports |    (2026) 16:11640                               | https://doi.org/10.1038/s41598-026-42705-7                                 12

## Страница 13

www.nature.com/scientificreports/



          Hyper parameter   Description                                                  Default Value  LLM Role / Effect
          nagents        Number of LLM agents in the debate                           3               Total agents (mixture of cooperative + adversarial)
          nadversaries    Number of adversarial LLM agents                            1              Controls adversarial presence inside the group
         nrounds        Number of debate rounds per question                         3            Depth of iterative LLM interaction and persuasion
          nreps          Number of repetitions of each configuration                     1              Re-runs to estimate robustness and variance
                                                                                      Number of alternative arguments sampled from the         narguments     Number of adversarial candidate arguments generated for scoring   10                                                                                                                          adversarial model for selection
         gpus         GPU device index for HuggingFace model inference              1             Hardware assignment for non-OpenAI LLMs
           nrepetitions                                                                         Used to generate multiple argument candidates via OpenAI                         Number of parallel completions for argument generation/selection  1                                                                                                    models
         devicemap       Device allocation strategy for HF models                            “auto”          Automatically maps LLM weights across available GPUs/CPU
         maxnew_token  Maximum number of new tokens generated by HF models         1000           Controls length of agent responses and debate arguments
                                                                                                             Enables non-deterministic sampling for diverse arguments          dosample        Whether HuggingFace model uses stochastic sampling            True                                                                                                and responses[42]
         temperature    Sampling temperature for HF decoding                              0.6             Controls randomness—higher = more diverse generations
          topp              Nucleus sampling probability cutoff                                  0.9              Restricts sampling to top-p portion of probability mass

                            Table 1.    LLM Inference and Decoding Hyperparameters.





                                Fig. 6.  Performance debate-based multi-agent collaboration.


                       Results
                              Figure 6 indicates clearly that multi-agent collaboration based on debate is structurally weak even in the case
                       when a single adversarial agent is deployed in the system. In all four datasets, including TruthfulQA, MMLU,
                    MedMCQA, and SCALR, the existence of a convincing opponent significantly reduces the accuracy of the
                           group and a systematic drift of cooperative agents in the wrong direction. The performance at a system level is
                                  significantly reduced, and the accuracy goes down by 10 to 40% according to the underlying LLM. It is worth
                             noting that GPT-4o is characterized by the most robustness since it remains relatively stable when exposed to
                                adversarial pressure. Nevertheless, such a more resilient model still suffers a quantifiable performance impairment,
                          which proves that resilience is not the same as immunity. GPT-3.5, Llama, Qwen and Yi models, in contrast,
                                are much more vulnerable. In the case of these models, the adversarial agent is always doing well at controlling
                              the debate, which results in big deviations with respect to the baseline. As an example, GPT-3.5 experiences a
                           drop in accuracy up to 30% which is in agreement with the numerical values in Fig. 6. This instability indicates
                             a natural inability of smaller or less aligned models to withstand strategies put forward by persuasive arguments
                                of long form. The plots at the agent level also indicate that agreement rates with the adversarial agent have
                                  significantly grown often over 0.40. This shows that cooperative agents do not just fail to correct a wrongdoer but
                                are actively drawn into its wrong story, demonstrating the dynamics of debates increasing the misinformation
                               in the LLM ecosystems. LLM collaboration which is thought to enhance reasoning, is readily undermined by
                                adversarial persuasion, even when a single agent amongst a number of agents acts maliciously. This reveals one
                                of the core flaws of multi-agent debate protocols and highlights the strong necessity of new defense mechanisms,
                                  verification tools, and less risky coordination structures.
                            The trend of Majority Vote accuracy in the various rounds of the debate (Fig. 7) indicates that the problem of
                                adversarial persuasion is not a single effect but a gradual deterioration. In all four datasets, TruthfulQA, MMLU,
                   MedMCQA and SCALR, the initial round is usually already in a fairly high position, particularly in the case of
                        GPT-4o that has the highest accuracy at nearly any given situation. Nonetheless, accuracy levels off or decreases
                                systematically as rounds go on, implying that the protocol of the debate, rather than reducing the errors of the
                                         first round, tends to multiply the role of the adversary. This is especially strong on GPT-3.5, Llama3-Inst-8B,

Scientific Reports |    (2026) 16:11640                               | https://doi.org/10.1038/s41598-026-42705-7                                 13

## Страница 14

www.nature.com/scientificreports/





                                Fig. 7.  The trajectory of Majority Vote accuracy across debate rounds.





                                Fig. 8.  The adversary agreement over debate rounds.


                          Qwen1.5-Chat-14B and Yi1.5-Chat-9B whose curves have steep curves down by the third round on various
                                  datasets. As an illustration, on both TruthfulQA and MedMCQA, GPT-3.5 and Llama3-Inst-8B experience
                                 substantial declines in accuracy throughout the debate, which proves that these models are extremely vulnerable
                                to adversarial steering during multi-round interaction. On more formalized tests, such as MMLU and SCALR,
                          one would expect greater stability, however, in the presence of an adversary, most majority votes move further
                          away than the correct response. On the whole, these curves indicate that the longer the debates become, the
                                greater the chances that they will result in the convergence to the truth; it is rather possible that the opposing
                              party will have additional possibilities to redefine the group opinion.
                            The adversary concordance of the debate rounds presented in Fig. 8 accounts for why accuracy deteriorates:
                               since cooperative agents agree more and more with the adversarial agent. For the weaker or intermediate model
                             (GPT-3.5, Llama3-Inst-8B, Qwen1.5-Chat-14B, Yi1.5-Chat-9B), adversarial consensus tends to significantly rise
                               in Round 1-Round 3 with some as high as 0.6–0.7 on MedMCQA and TruthfulQA. This implies a positive
                              majority of agents converge to the bad answer of the adversary over time in the course of a debate, indicating
                                 that the attack not only contributes noise, but captures the belief state of the whole group. GPT-4o once more
                           emerges as relatively stronger, as its adversary agreement curves are lower and grow more slowly with respect to
                                        all the rounds, particularly on SCALR and MMLU where agreement with the adversary is not widely distributed.
                           However, GPT-4o is also showing non-negligible agreement growth which means that no model is completely
                         immune. Collectively, the majority-vote and agreement plots yield a coherent picture:  if rounds increase,
                                adversarial agreement is increasing and accuracy is decreasing, indicating a direct link between persuasive
                               influence and system failure. This dynamic evidence helps to strengthen our primary assertion that debate-based
                   LLM collaboration is inherently vulnerable to the adversarial attack driven by persuasion, and that multi-round
                                interaction serves to amplify rather than to abate negative influence.
                          Our aim is to comprehend the persuasiveness of the models. The results on the persuasive power of the
                              evaluated models over the selected datasets are presented in Fig. 9. Statistically, there is a strong relationship
                           between adversarial influence and system degradation in all models and datasets as shown in the plots. Models
                             with highest increases for adversarial agreement, ΔAgr, show the largest decreases for accuracy, ΔAcc, indicating
                             a positive relation between persuasion strength and performance failure. GPT-3.5 provides the most extreme
                            outcome, where the ΔAgr increases from + 0.40 to + 0.68, while ΔAccuracy decreases to between − 20% and
                             − 30%, indicating strong adversarial influence. Similarly, Llama and Yi models have high persuasion effects with
                             a ΔAgr value of more than + 0.30 and accuracy loss of 10–25%. Qwen exhibits moderate susceptibility, with
                              the shifts in persuasion ranging from + 0.20–0.30 and the reductions in accuracy of 9–23%. In contrast, GPT-
                          4o demonstrates the most resilience: ΔAgr just stays at or near 0—or becomes negative—while ΔAcc remains

Scientific Reports |    (2026) 16:11640                               | https://doi.org/10.1038/s41598-026-42705-7                                 14

## Страница 15

www.nature.com/scientificreports/





                                Fig. 9.  The persuasive power of the evaluated models over the selected datasets.





                                Fig. 10.  Best-of-N argument optimization.


                              small (often around ± 5%). On the whole, the trend observed among data sets indicates that larger accuracy
                                deterioration can be predicted with greater adversarial agreement as evidence that multi-agent debates under
                             persuading attack are systematically fragile.
                            The enhanced attack strategies seen in Fig. 10—Best-of-N argument optimization and extra knowledge
                               injection—clearly tell us that persuasion mechanisms can enhance or, in some cases, slightly hinder adversary
                                 effectiveness on TruthfulQA. In summary, GPT-4o and GPT-3.5 are both much higher than the original attack
                             with a smaller but steady increase in ∆Accuracy and ∆Agreement suggesting that stronger argument choice and
                        more evidence help the attacker build more cohesive and finely tuned persuasion. GPT-3.5 demonstrates an even
                                 larger improvement under the Best-of-N setting, reflecting its sensitivity to optimization in argument quality.
                           However, the context-augmented version for GPT-3.5 performs slightly lower—an exception that might be due
                                to two interacting reasons: (1) GPT-3.5 was already extremely aggressive when carrying out the baseline attack,
                               leaving limited room for improvement, and (2) the model may be less capable of properly harnessing an extra
                             understanding. In consequence it may at times water down its own narrative rather than strengthen it. Together,
                               these observations reflect a general trend: better models will more naturally receive enhanced persuasion tools,


Scientific Reports |    (2026) 16:11640                               | https://doi.org/10.1038/s41598-026-42705-7                                 15

## Страница 16

www.nature.com/scientificreports/


                             while weak ones often provide inconsistent responses. In this way there lies an important asymmetry in how
                      LLMs take up all external information during adversarial reasoning.
                                 Figures 11 and 12 of Majority Vote Accuracy and Adversary Agreement evolution during three debate
                           rounds under attack and mitigation. True to our prediction, a good mitigation strategy should result in higher
                             accuracy and less agreement with adversaries than the attack condition. As expected, this is also seen on slopes
                               in the plots; for the majority of models, the mitigation curves exhibit an obviously enhanced shift in accuracy
                         and decreasing adversary agreement curves signify diminished alignment with adversarial responses. Yet not
                                        all models show even this trend. Some of them show good improvement, others only show slight variation
                             or fluctuating performance between rounds. The variability illustrates that a simple prompt-based mitigation
                        method alone is not capable of reliably mitigating adversarial influence. Notwithstanding the presence of alert
                                   settings, some models seem vulnerable to adversarial signals and especially if interaction takes place over
                                several rounds. So, we can say according to these findings that prompt-level defenses are not enough to build
                              robust multi-agent reasoning in adversarial settings. However, more advanced defense mechanisms — perhaps
                                 architectural constraints, debate integrity checks, retrieval-augmented verification, or cross-agent consistency
                              scoring — will be required to retain the robustness of the behavior when agents with diverse sources or types of
                                   entities interact and influence one another.

                         Ablation studies
                         To verify that adversarial amplification was not induced by retrieval filtering, we conducted additional ablation
                            experiments (Removing the similarity threshold (no filtering), Increasing retrieval size (k = 10), and Reducing
                                  retrieval size (k = 3)). Across all configurations, persuasion-induced accuracy degradation remained statistically
                                  significant (average ΔAccuracy between − 18% and − 24%, depending on dataset), indicating that RAG
                               amplification arises from credibility reinforcement rather than preprocessing bias (see Table 2).
                           To evaluate the robustness of the collaborative debate under different configurations, we study how
                           performance changes when we vary the number of rounds and the number of agents in the debate. Intuitively,
                          one might expect that adding more turns of interaction or more agents should make the system more robust to
                                adversarial influence. However, the empirical results suggest that this intuition does not always hold.

                                 •  Increasing the Number of Rounds: The Majority Vote Accuracy is presented in Fig. 13 for a fixed group
                                   of three agents (N = 3), going from T = 1 to T = 9 for each round in TruthfulQA, MMLU, and GSM8K. In
                                 the no-attack condition, the majority vote remains relatively stable across rounds, with accuracies hovering
                             around 0.55–0.60 and showing only a slight upward trend. Conversely, in the adversarial attack, the majority
                                 vote accuracy rapidly declines in the first few rounds, falling from ~ 0.5 at T = 1 to below 0.2 by T = 3, and then
                                 gradually decays towards ≈ 0.1 as the debate is progressing. This trend is the same for all three datasets. Once
                                 the group is pulled to the wrong answer by the adversary, further rounds do not assist the agents in “recov­
                                      ering,” but rather make it so that the wrong consensus becomes entrenched. Therefore, simply increasing the
                          number of debate rounds is not an effective defense against a persuasive adversary.





                                Fig. 11.  Adversary agreement.


Scientific Reports |    (2026) 16:11640                               | https://doi.org/10.1038/s41598-026-42705-7                                 16

## Страница 17

www.nature.com/scientificreports/





                                Fig. 12.  Majority vote accuracy.



                                     Dataset      Retrieval configuration  Accuracy degradation (%)
                                                       Baseline (k = 5)            21.86 ± 0.19
                                     No Filtering               20.92 ± 0.17
                                   TruthfulQA
                                                           k = 10                      23.20 ± 0.14
                                                               k = 3                       21.10 ± 0.14
                                                       Baseline (k = 5)            18.70 ± 0.14
                                     No Filtering               18.10 ± 0.14
                      MMLU
                                                           k = 10                      19.90 ± 0.14
                                                               k = 3                       18.50 ± 0.14
                                                       Baseline (k = 5)            23.90 ± 0.14
                                     No Filtering               22.80 ± 0.14
                         MedMCQA
                                                           k = 10                      24.30 ± 0.14
                                                               k = 3                       23.10 ± 0.14
                                                       Baseline (k = 5)            20.40 ± 0.14
                                     No Filtering               19.60 ± 0.14
                            SCALR
                                                           k = 10                      21.70 ± 0.14
                                                               k = 3                       20.20 ± 0.14

                            Table 2.    Robustness to retrieval configuration (Mean ± Std Across Runs).


                                 •  Increasing the Number of Agents: We then assess the robustness as a function of the number of collaborating
                                 agents used. The Majority Vote Accuracy for a fixed number of rounds (T = 3) is shown in Fig. 14, varying the
                          number of agents participating in the debate (N = 2, …, 6) on TruthfulQA. As anticipated, when N = 2 (one ad­
                                 versary and one non-adversarial agent), the accuracy of the system approaches zero, as the adversarial answer
                                  takes over the vote. With an increase in N, the initial accuracy of majority votes during no-attack becomes
                                    better and even under attack larger groups begin with higher accuracy in the first round. But even the perfor­
                          mance across rounds continues to exhibit a similar declining trend: the adversary eventually uses increased
                          number of agents to persuade the group to give the incorrect answer. So adding more collaborating models
                                     results in better baseline performance, but does not fundamentally eliminate the adversary’s influence; the
                                debate still remains vulnerable even for much larger collectives.



Scientific Reports |    (2026) 16:11640                               | https://doi.org/10.1038/s41598-026-42705-7                                 17

## Страница 18

www.nature.com/scientificreports/





                                Fig. 13.  The robustness of the collaborative debate under different configurations: Increasing the Number of
                           Rounds.





                                Fig. 14.  The robustness of the collaborative debate under different configurations: Increasing the Number of
                              Agents.


                         To assess whether the observed performance degradation is attributable to persuasion rather than unequal agent
                                   capabilities, we introduce an additional adversarial baseline with reduced reasoning capacity. In this baseline, the
                                adversarial agent is restricted to producing a single incorrect answer per round without multi-layer argument
                               generation, counterargument construction, fusion, or persuasive polishing. All agents (including the adversary)
                             use the same underlying LLM, and differ only in the prompting and generation strategy. This comparison allows
                             us to isolate the contribution of enhanced persuasive mechanisms and assess the fairness of the evaluation.
                              Figure 15. Comparison of system-level accuracy and adversarial agreement under a vanilla adversarial
                                 baseline43 and the full persuasion-driven adversary. The vanilla adversary produces limited impact, while the
                                      full adversary consistently induces larger accuracy degradation and higher agreement, indicating that structured
                               persuasive mechanisms (not unequal model capacity) drive the observed effects. Results show that while a
                                 vanilla adversarial agent can occasionally influence individual agents, its impact on system-level accuracy and
                           agreement remains limited. In contrast, the full persuasion-driven adversary consistently induces significantly
                                 larger drops in accuracy and higher agreement with incorrect answers, confirming that the observed effects arise
                          from structured persuasive mechanisms rather than from mere adversarial intent or unequal model capacity.

                          Limitations
                              Despite the strengths of the empirical findings, several limitations must be noted in interpreting the results
                                of this study. First, the experiments are computationally resource intensive (multi-round simulations across
                               multiple agents and multiple datasets). This constraint reduces the maximum number of repetitions, model
                                  variants, and hyper parameter sweep scales to manageable levels. Larger systematic studies—particularly
                              those involving dozens of agents or higher-capacity models—will also remain outside the current work’s
                             computational resources. So, while the patterns observed here are robust and stable, they are just one part of the
                               general landscape of multi-agent adversarial interaction design. Second, the open-source frameworks we present
                                are normally bounded to between 8B–14B parameters, which are much smaller than the front-of-the-pack,
                               high-stakes proprietary models commonly deployed in high-stakes contexts. While these models closely follow
                            popular research-grade LLMs, the behavior they generate may not entirely reflect the complexity or capabilities
                         and defenses of larger systems (e.g., GPT-4-class or 70B+ architectures). As a result, it is possible that larger or

Scientific Reports |    (2026) 16:11640                               | https://doi.org/10.1038/s41598-026-42705-7                                 18

## Страница 19

www.nature.com/scientificreports/





                                Fig. 15.  Ablation study of adversarial reasoning components.


                        more highly optimized models44 will show disparate rates of susceptibility or vulnerability to persuasion-based
                                adversarial attacks. Third, the debate protocol utilized in this study is intentionally designed to provide controlled
                                 insight into the LLM-to-LLM persuasion dynamics. But this controlled setup is an academic artifact rather than
                             a real-world deployment environment45. Thus, real systems might enforce additional safeguards, task-specific
                                constraints or user-directed oversight that influence how agents interact; also how information is passed from
                          one agent to another. Similarly, real-world LLM agents can function under asynchronous46, multi-modal, or
                            tool-augmented conditions that differ fundamentally from the turn-based text-only protocol investigated here.
                               Last but not least, although the results uniformly demonstrate that persuasive adversaries can interfere with
                                collaborative reasoning processes, the nature of degradation may vary significantly across tasks, model families,
                             or deployment contexts. However, this vulnerability is concerning in spite of the fact that the cause—persuasion-
                            induced reasoning drift—can still occur in less complex, more limited settings. This appears to indicate that the
                         menace is built into the structure rather than the effect of it being present in a random manner47 and it points
                                to the necessity of dedicated defense strategies for multi-agent LLM systems that are increasingly integrated in
                           autonomous, interconnected roles due to the impact of manipulation.
                            The present framework also assumes that cooperative agents consume the outputs of all other agents
                              uniformly, without applying explicit weighting, trust calibration, or source-aware filtering during debate rounds.
                              This simplifying assumption was adopted to isolate and analyze the intrinsic vulnerability of debate-based multi-
                              agent reasoning to persuasive adversarial influence under a controlled and transparent setting. In contrast, real-
                           world multi-agent systems may incorporate heterogeneous trust assignments, historical reliability estimates,
                             or source-aware weighting mechanisms that modulate how much influence different agents exert on collective
                             decision-making. While such mechanisms may mitigate certain forms of adversarial impact, they also introduce
                               additional design complexity and potential attack surfaces. Evaluating how persuasion-driven adversaries
                                 interact with weighted or source-aware aggregation strategies remains an important direction for future work
                         and is necessary to fully assess the generalizability of the observed vulnerabilities.
                    A further limitation of the present study is that the evaluated mitigation strategy is restricted to prompt-
                                   level warnings and behavioral instructions provided to cooperative agents. While such interventions can reduce
                                adversarial influence in some cases, our empirical results demonstrate that they do not offer reliable protection
                                against persuasion-driven attacks, particularly over multiple debate rounds. More robust defenses are likely
                                to require structural safeguards that operate beyond prompt conditioning. Promising directions for future
                         work include cross-agent consistency checks that detect anomalous opinion shifts, agreement trajectories, or
                          argument incoherence across agents; debate integrity mechanisms that constrain disproportionate influence by a
                                 single agent; and verification-based modules that assess claim consistency against external or internal references
                              before consensus formation. Investigating such architectural and protocol-level defenses remains an important
                           avenue for strengthening multi-agent LLM robustness.




Scientific Reports |    (2026) 16:11640                               | https://doi.org/10.1038/s41598-026-42705-7                                 19

## Страница 20

www.nature.com/scientificreports/


                      Conclusion
                              This work shows that multi-agent debate — commonly considered a powerful way of improving LLM reasoning
              — has a fundamental vulnerability, namely that it can be disrupted by a single persuasive adversarial agent.
                         By employing a systematic approach across diverse tasks, we demonstrate that a highly misleading agent can
                                  significantly degrade collective accuracy. It also successfully induces other models to adopt incorrect answers,
                         and even overrides majority vote mechanisms designed for group decisions. This finding indicates that
                               persuasiveness, while traditionally regarded as a good ability for explaining and reasoning on its own, becomes
                             a safety-critical factor when agents interact autonomously. This new threat is particularly pronounced with the
                             advent of advanced adversarial techniques such as multi-layered argument optimization and retrieval-augmented
                               persuasion. Our findings highlight the urgent need for more robust collaboration protocols, adversarial-resistant
                             debate frameworks, and principled guardrails governing LLM-to-LLM communication. With the growing
                           deployment of LLM agents in coordinated and autonomous environments, designing techniques to mitigate
                               persuasive manipulation will be increasingly relevant to ensuring the reliability and safety of multi-agent AI
                                systems48. Also, future research should therefore prioritize structural and protocol-level defenses—such as cross-
                              agent consistency analysis and verification-aware debate mechanisms—over purely prompt-based mitigation
                                    strategies.

                    Data availability
                          The datasets analysed during the current study are:•    MMLU (Massive Multitask Language Understand­
                               ing) available in https://github.com/hendrycks/test.•       TruthfulQA available in  ​h​t​t​p​s​:​/​/​g​i​t​h​u​b​.​c​o​m​/​s​y​l​i​n​r​l​
                                                        /​T​r​u​t​h​f​u​l​Q​A​.​•   MedMCQA available in https://github.com/medmcqa/medmcqa.•   SCALR   (Statutory
                           Case Law Reasoning, Legal Bench) available in https://github.com/HazyResearch/legalbench. The datasets used
                               in this study do not involve human subjects, personal data, or newly collected human responses. All datasets
                                are pre-existing, publicly released benchmark datasets consisting of anonymized multiple-choice questions, an­
                                swers, and metadata for evaluating language models.To ensure full reproducibility, the complete experimental
                          framework — including multi-agent debate implementation, adversarial persuasion modules, prompt templates,
                               evaluation scripts, configuration files, and representative stored debate transcripts — is publicly available at: ​h​t​
                                                            t​p​s​:​/​/​g​i​t​h​u​b​.​c​o​m​/​i​n​s​a​f​ k​r​a​i​d​i​a​/​M​u​l​t​i​-​A​g​e​n​t​-​L​a​r​g​e​-​L​a​n​g​u​a​g​e​-​M​o​d​e​l​-​D​e​b​a​t​e​-​M​A​-​L​L​M​D​- Representative ​m​u​l​t​i​-​r​
                                           o​u​n​d debate transcripts (JSONL format) used to compute accuracy, agreement, and persuasion metrics are in­
                             cluded in the repository. Additional artifacts can be provided upon reasonable request.

                              Received: 4 January 2026; Accepted: 27 February 2026


                      References
                                             1. Belhaouari, S. B. & Kraidia, I. Efficient self-attention with smart pruning for sustainable large language models. Sci. Rep. 15 (1),
                                   10171 (2025).
                                             2. Du, Y., Li, S., Torralba, A., Tenenbaum, J. B. & Mordatch, I. Improving factuality and reasoning in language models through
                                       multiagent debate. arXivm 2023 https://doi.org/10.48550/arXiv.2305.14325
                                             3. Aher, G., Arriaga, R. I. & Kalai, A. T. Using large language models to simulate multiple humans and replicate human subject
                                             studies. arXiv (2023). https://doi.org/10.48550/arXiv.2208.10264
                                             4. Breum, S. M., Egdal, D. V., Mortensen, V. G., Møller, A. G. & Aiello, L. M. The persuasive power of large language models. arXiv
                                          (2023). https://doi.org/10.48550/arXiv.2312.15523
                                             5. Bai, Y. et al. Constitutional AI: Harmlessness from AI Feedback. arXiv. (2022). https://doi.org/10.48550/arXiv.2212.08073
                                             6. Kraidia, I., Ghenai, A. & Belhaouari, S. B. Defense against adversarial attacks: robust and efficient compressed optimized neural
                                       networks. Sci. Rep. 14 (1), 6420 (2024).
                                             7. Wei, J. et al. Chain-of-thought prompting elicits reasoning in large language models. arXiv (2023). ​h​t​t​p​s​:​/​/​d​o​i​.​o​r​g​/​1​0​.​4​8​5​5​0​/​a​r​X​i​v​.​
                                                                       2​2​0​1​.​1​1​9​0​3​
                                             8. Lin, S., Hilton, J. & Evans, O. TruthfulQA: measuring how models mimic human falsehoods. arXiv (2022). ​h​t​t​p​s​:​/​/​d​o​i​.​o​r​g​/​1​0​.​4​8​5​5​
                                                                             0​/​a​r​X​i​v​.​2​1​0​9​.​0​7​9​5​8​
                                             9. Zheng, Q. et al. CodeGeeX: A pre-trained model for code generation with multilingual benchmarking on humanEval-X. arXiv
                                          (2024). https://doi.org/10.48550/arXiv.2303.17568
                                       10. Yang, Y. M., Chang, K. C. & Luo, J. N. Hybrid Neural Network-Based Intrusion Detection System: Leveraging LightGBM and
                                  MobileNetV2 for IoT Security. Symmetry 17 (3), 314 (2025).
                                       11. Hiari, M., Alraba’nah, Y. & Qaddara, I. Learning-Based Intrusion Detection System using Refined LSTM for DoS Attack Detection.
                                        Eng. Technol. Appl. Sci. Res. 15 (4), 25627–25633 (2025).
                                       12. Abualhaj, M. M., Al-Khatib, S. N., Al Zyoud, M., Qaddara, I. & Anbar, M. Enhancing intrusion detection system performance
                                       using a hybrid of Harris Hawks and Whale Optimization Algorithms. Eng. Technol. Appl. Sci. Res. 15 (4), 24354–24361 (2025).
                                       13. Liang, T. et al. Encouraging divergent thinking in large language models through multi-agent debate. arXiv (2024). ​h​t​t​p​s​:​/​/​d​o​i​.​o​r​g​
                                                                              /​1​0​.​4​8​5​5​0​/​a​r​X​i​v​.​2​3​0​5​.​1​9​1​1​8​
                                       14. Chan, C. M. et al. ChatEval: Towards Better LLM-based Evaluators through Multi-Agent Debate. arXiv (2023). ​h​t​t​p​s​:​/​/​d​o​i​.​o​r​g​/​1​0​.​
                                                                            4​8​5​5​0​/​a​r​X​i​v​.​2​3​0​8​.​0​7​2​0​1​
                                       15. Wu, Q. et al. AutoGen: enabling next-gen LLM applications via multi-agent conversation. arXiv (2023). ​h​t​t​p​s​:​/​/​d​o​i​.​o​r​g​/​1​0​.​4​8​5​5​0​/​a​
                                                                            r​X​i​v​.​2​3​0​8​.​0​8​1​5​5​
                                       16. Li, G., Hammoud, H. A. A. K., Itani, H., Khizbullin, D. & Ghanem, B. CAMEL: communicative agents for ‘mind’ exploration of
                                            large language model society. arXiv (2023). https://doi.org/10.48550/arXiv.2303.17760
                                       17. Chen, W. et al. AgentVerse: facilitating multi-agent collaboration and exploring emergent behaviors. arXiv (2023). ​h​t​t​p​s​:​/​/​d​o​i​.​o​r​g​/​
                                                                             1​0​.​4​8​5​5​0​/​a​r​X​i​v​.​2​3​0​8​.​1​0​8​4​8​
                                       18. Hong, S. et al. MetaGPT: Meta programming for a multi-agent collaborative framework. arXiv (2024). ​h​t​t​p​s​:​/​/​d​o​i​.​o​r​g​/​1​0​.​4​8​5​5​0​/​a​r​
                                                                           X​i​v​.​2​3​0​8​.​0​0​3​5​2​
                                       19. Talebirad, Y. & Nadiri, A. Multi-agent collaboration: harnessing the power of intelligent LLM agents. arXiv (2023). ​h​t​t​p​s​:​/​/​d​o​i​.​o​r​g​
                                                                              /​1​0​.​4​8​5​5​0​/​a​r​X​i​v​.​2​3​0​6​.​0​3​3​1​4​
                                       20. Salvi, F., Ribeiro, M. H., Gallotti, R. & West, R. On the conversational persuasiveness of large language models: a randomized
                                          controlled trial. Nat. Hum. Behav. 9 (8), 1645–1653 . https://doi.org/10.1038/s41562-025-02194-6


Scientific Reports |    (2026) 16:11640                               | https://doi.org/10.1038/s41598-026-42705-7                                 20

## Страница 21

www.nature.com/scientificreports/


                                       21. Wan, A., Wallace, E. & Klein, D. What evidence do language models find convincing? arXiv (2024). ​h​t​t​p​s​:​/​/​d​o​i​.​o​r​g​/​1​0​.​4​8​5​5​0​/​a​r​X​i​
                                                                            v​.​2​4​0​2​.​1​1​7​8​2​
                                       22. Rescala, P., Ribeiro, M. H., Hu, T. & West, R. Can language models recognize convincing arguments? arXiv (2024). ​h​t​t​p​s​:​/​/​d​o​i​.​o​r​g​
                                                                              /​1​0​.​4​8​5​5​0​/​a​r​X​i​v​.​2​4​0​4​.​0​0​7​5​0​
                                       23. Khan, A. et al. Debating with more persuasive LLMs leads to more truthful answers. arXiv (2024). ​h​t​t​p​s​:​/​/​d​o​i​.​o​r​g​/​1​0​.​4​8​5​5​0​/​a​r​X​i​v​.​
                                                                       2​4​0​2​.​0​6​7​8​2​
                                       24. Kraidia, I., Ghenai, A. & Belhaouari, S. B. A multi-faceted approach to trending topic attack detection using semantic similarity
                                  and large-scale datasets, IEEE Access, Accessed: Dec. 29, 2025. [Online]. (2025). Available: ​h​t​t​p​s​:​/​/​i​e​e​e​x​p​l​o​r​e​.​i​e​e​e​.​o​r​g​/​a​b​s​t​r​a​c​t​/​d​o​c​
                                                                     u​m​e​n​t​/​1​0​8​5​7​3​3​0​/
                                       25. Abualhaj, M. M., Abu-Shareha, A. A., Alkhatib, N., Shambour, S., Alsaaidah, A. M. & Q. Y. & Detecting spam using Harris Hawks
                                       optimizer as a feature selection algorithm. Bull. Electr. Eng. Inf. 14 (3), 2361–2369. (2025). https://doi.org/10.11591/eei.v14i3.9198
                                       26. Kraidia, I., Qaddara, I. & Alraba’nah, Y. DynaMI: Dynamic Membership Inference via Adaptive Manifold Perturbations. IEEE
                                             Access. 1–1. https://doi.org/10.1109/ACCESS.2026.3665297 (2026).
                                       27. Kraidia,  I., Ghenai, A. & Zeghib, N. HST-Detector: A Multimodal Deep Learning System for Twitter Spam Detection, in
                                     Computational Intelligence, Data Analytics and Applications, (eds García Márquez, F. P., Jamil, A., Eken, S. & Hameed, A. A.) in
                                       Lecture Notes in Networks and Systems. 643, 91–103. doi: https://doi.org/10.1007/978-3-031-27099-4_8. (Springer International
                                         Publishing, 2023).
                                       28. Kraidia, I., Ghenai, A. & Zeghib, N. A Multimodal Spam Filtering System for Multimedia Messaging Service, In: International
                                       Conference on Artificial Intelligence Science and Applications (CAISA), vol. 1441, M. Abd Elaziz, M. Medhat Gaber, S. El-Sappagh,
                              M. A. A. Al-qaness, and A. A. Ewees, Eds., in Advances in Intelligent Systems and Computing, 1441 121–131.( Springer Nature
                                          Switzerland, 2023). https://doi.org/10.1007/978-3-031-28106-8_9
                                       29. Qaddara, I., Alraba’nah, Y. & Hiari, M. O. Evaluation of SQL and NoSQL Databases on Parallel Processing. Eng. Technol. Appl. Sci.
                                            Res. 15 (4), 24298–24304 (2025).
                                       30. Qaddara, I. & Applying machine learning techniques on cyber security datasets: detecting cyber attacks. Harbin Gongye Daxue
                                      XuebaoJournal Harbin Inst. Technol., 54, 7, 95–110, (2022).
                                       31. Qaddara, I. 12th International Conference on Information Technology (ICIT), IEEE, 2025, pp. 571–576. Accessed: Dec. 29, 2025.
                                         [Online]. (2025). Available: ​h​t​t​p​s​:​/​/​i​e​e​e​x​p​l​o​r​e​.​i​e​e​e​.​o​r​g​/​a​b​s​t​r​a​c​t​/​d​o​c​u​m​e​n​t​/​1​1​0​4​9​1​3​7​/
                                       32. Hendrycks, D. et al. Measuring massive multitask language understanding. arXiv (2021). https://doi.org/10.48550/arXiv.2009.03300
                                       33. Pal, A., Umapathi, L. K. & Sankarasubbu, M. MedMCQA: A Large-scale Multi-Subject Multi-Choice Dataset for Medical domain
                                     Question Answering, arXiv.org. Accessed: Dec. 18, 2025. [Online]. Available: https://arxiv.org/abs/2203.14371v1
                                       34. Guha, N. et al. LegalBench: A Collaboratively Built Benchmark for Measuring Legal Reasoning in Large Language Models, arXiv.
                                            org. Accessed: Dec. 18, 2025. [Online]. Available: https://arxiv.org/abs/2308.11462v1
                                       35. Touvron, H. et al. LLaMA: Open and efficient foundation language models. arXiv. (2023). https://doi.org/10.48550/arXiv.2302.13971
                                       36. [2310. 06825] Mistral 7B. Accessed: Dec. 18, 2025. [Online]. Available: https://arxiv.org/abs/2310.06825
                                       37. Yang, A. et al. Qwen3 Technical Report, arXiv.org. Accessed: Dec. 18, 2025. [Online]. Available: https://arxiv.org/abs/2505.09388v1
                                       38. Ilharco, G. et al. Jul. 28,., OpenCLIP. Zenodo. (2021). https://doi.org/10.5281/ZENODO.5143773
                                       39. Vaswani, A. et al. Atten. Is All You Need arXiv (2024). https://doi.org/10.48550/arXiv.1706.03762
                                       40. OpenAI et al. GPT-4 technical report. arXiv (2024). https://doi.org/10.48550/arXiv.2303.08774
                                       41. Brown, T. B. et al. Language models are few-shot learners. arXiv (2020). https://doi.org/10.48550/arXiv.2005.14165
                                       42. Abualhaj, M. M. et al. Enhanced network communication security through hybrid dragonfly-bat feature selection for intrusion
                                           detection. J. Commun. (2025). https://doi.org/10.12720/jcm.20.5.607-618
                                       43. Goodfellow, I. J., Shlens, J. & Szegedy, C. Explaining and harnessing adversarial examples. arXiv (2015). ​h​t​t​p​s​:​/​/​d​o​i​.​o​r​g​/​1​0​.​4​8​5​5​0​/​
                                                                             a​r​X​i​v​.​1​4​1​2​.​6​5​7​2​
                                       44. Abualhaj, M. M., Al-Khatib, S., Al Shafi, N., Qaddara, I. & Hyassat, A. Utilizing gray wolf optimization algorithm in malware
                                           forensic investigation, J. Comput. Cogn. Eng., Accessed: Dec. 29, 2025. [Online]. (2025). Available: ​h​t​t​p​s​:​/​/​s​c​h​o​l​a​r​.​g​o​o​g​l​e​.​c​o​m​/​s​c​h​
                                                                          o​l​a​r​?​c​l​u​s​t​e​r​=​5​0​8​9​8​5​8​4​3​5​4​3​6​6​7​0​1​5​2​&​h​l​=​e​n​&​o​i​=​s​c​h​o​l​a​r​r
                                       45. Qaddara, I. & Alraba’nah, Y. Enhancing requirements classification using machine learning techniques. SN Comput. Sci. 6 (6), 649.
                                         https://doi.org/10.1007/s42979-025-04158-z
                                       46. Qaddara, I. A., Kenana, A. J., Al-Tarawneh, K. M. & Sarhan, S. Evaluation of CPU Scheduling and Synchronization Algorithms in
                                         Distributed Systems. Nanotechnol Percept, 698–719, (2024).
                                       47. Kraidia, I. & Belhaouari, S. B. Towards Robust SEA Detection: Leveraging Model Diversity and Randomization Against Adversarial
                                          Attacks, In: 12th International Conference on Information Technology (ICIT), (IEEE, 2025). ​h​t​t​p​s​:​/​/​i​e​e​e​x​p​l​o​r​e​.​i​e​e​e​.​o​r​g​/​a​b​s​t​r​a​c​t​/​d​o​
                                                                      c​u​m​e​n​t​/​1​1​0​4​9​1​7​9​/
                                       48. Kraidia, I., Kassoul, K., Cheikhrouhou, N., Hassan, S. & Belhaouari, S. B. ExPSO-DL: An Exponential Particle Swarm Optimization
                                     Package for Deep Learning Model Optimization, J. Open Res. Softw.13, 1, 2025 Available: ​h​t​t​p​s​:​/​/​o​p​e​n​r​e​s​e​a​r​c​h​s​o​f​t​w​a​r​e​.​m​e​t​a​j​n​l​.​c​o​
                                                                                m​/​a​r​t​i​c​l​e​s​/​5​2​1

                   Acknowledgements
                              This work was supported by the Princess Nourah Bint Abdulrahman University Researchers Supporting Project
                        number PNURSP2026R733.

                     Author contributions
                              Conceptualization, Insaf Kraidia and Samir Brahim Belhouari; methodology, Insaf Kraidia and Iyas Qaddara;
                                software, Iyas Qaddara; validation, Insaf Kraidia, Nada Alzaben, and Alhanof Almutairi; formal analysis, In­
                                   saf Kraidia; investigation, Insaf Kraidia and Iyas Qaddara; resources, Samir Brahim Belhouari; data curation,
                           Alhanof Almutairi and Nada Alzaben; writing—original draft preparation, Insaf Kraidia; writing—review and
                                  editing, Insaf Kraidia, Samir Brahim Belhouari, and Nada Alzaben; visualization, Iyas Qaddara; supervision,
                           Samir Brahim Belhouari; project administration, Insaf Kraidia; funding acquisition, Samir Brahim Belhouari.

                       Declarations

                    Competing interests
                          The authors declare no competing interests.

                       Additional information
                          Correspondence and requests for materials should be addressed to I.K.


Scientific Reports |    (2026) 16:11640                               | https://doi.org/10.1038/s41598-026-42705-7                                 21

## Страница 22

www.nature.com/scientificreports/


                            Reprints and permissions information is available at www.nature.com/reprints.
                               Publisher’s note  Springer Nature remains neutral with regard to jurisdictional claims in published maps and
                                  institutional affiliations.
                      Open Access  This article is licensed under a Creative Commons Attribution-NonCommercial-NoDerivatives
                                4.0 International License, which permits any non-commercial use, sharing, distribution and reproduction in
                           any medium or format, as long as you give appropriate credit to the original author(s) and the source, provide
                             a link to the Creative Commons licence, and indicate if you modified the licensed material. You do not have
                             permission under this licence to share adapted material derived from this article or parts of it. The images or
                              other third party material in this article are included in the article’s Creative Commons licence, unless indicated
                             otherwise in a credit line to the material. If material is not included in the article’s Creative Commons licence
                         and your intended use is not permitted by statutory regulation or exceeds the permitted use, you will need to
                              obtain permission directly from the copyright holder. To view a copy of this licence, visit ​h​t​t​p​:​/​/​c​r​e​a​t​i​v​e​c​o​m​m​o​
                                                               n​s​.​o​r​g​/​l​i​c​e​n​s​e​s​/​b​y​-​n​c​-​n​d​/​4​.​0​/​.​

                  © The Author(s) 2026





Scientific Reports |    (2026) 16:11640                               | https://doi.org/10.1038/s41598-026-42705-7                                 22
