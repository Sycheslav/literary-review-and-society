---
id: doi-10-3389-frai-2025-1593017-full-text
type: material
title: 'Multi-agent systems powered by large language models: applications in swarm
  intelligence'
work_id: doi-10-3389-frai-2025-1593017-full
source_url: https://www.frontiersin.org/journals/artificial-intelligence/articles/10.3389/frai.2025.1593017/pdf
retrieved_at: '2026-10-27'
conversion: pdf_text_extraction
quality_note: Текст извлечён из PDF с сохранением номеров страниц. Порядок колонок,
  таблицы, формулы и подписи могут быть искажены; рисунки доступны по ссылке на PDF.
  Это текстовая конверсия, не визуально эквивалентный оригинал.
language: original
sha256_text: 9cecf574992dadb8c35a992991cd210a84f3c73c7ad0df6e28cb9dd3245e0578
---

> Источник: [https://www.frontiersin.org/journals/artificial-intelligence/articles/10.3389/frai.2025.1593017/pdf](https://www.frontiersin.org/journals/artificial-intelligence/articles/10.3389/frai.2025.1593017/pdf). Текст извлечён из PDF с сохранением номеров страниц. Порядок колонок, таблицы, формулы и подписи могут быть искажены; рисунки доступны по ссылке на PDF. Это текстовая конверсия, не визуально эквивалентный оригинал.

## Страница 1

                                                                                                                        TYPE Original Research
                                                                                                                       PUBLISHED 21 May 2025
                                                                                                                     DOI 10.3389/frai.2025.1593017



                 Multi-agent systems powered by
OPEN ACCESS             large language models:

EDITED BY
Georgios Leontidis,                  applications in swarm
University of Aberdeen, United Kingdom

REVIEWED BYKonstantinos Liagkouras,          intelligence
University of Piraeus, Greece
Wei Li,
City University of Hong Kong,                Cristian Jimenez-Romero1*, Alper Yegenoglu2 and
Hong Kong SAR, China
                                  Christian Blum3
*CORRESPONDENCE
Cristian Jimenez-Romero                           1ETIS Laboratory, ENSEA, CNRS, UMR8051, CY Cergy-Paris University, Cergy, France, 2Independent
   cristian.jimenez-romero@cyu.fr                   Researcher, Jülich, Germany, 3Artiﬁcial Intelligence Research Institute (IIIA-CSIC), Bellaterra, Spain

RECEIVED 13 March 2025
ACCEPTED 23 April 2025
PUBLISHED 21 May 2025                        This work examines the integration of large language models (LLMs) into
CORRECTED 22 January 2026                   multi-agent simulations by replacing the hard-coded programs of agents with
CITATION                               LLM-driven prompts. The proposed approach is showcased in the context of two
Jimenez-Romero C, Yegenoglu A and Blum C
(2025) Multi-agent systems powered by large      examples of complex systems from the ﬁeld of swarm intelligence: ant colony
language models: applications in swarm          foraging and bird ﬂocking. Central to this study is a toolchain that integrates
intelligence. Front. Artif. Intell. 8:1593017.        LLMs with the NetLogo simulation platform, leveraging its Python extension
doi: 10.3389/frai.2025.1593017
                                        to enable communication with GPT-4o via the OpenAI API. This toolchain
COPYRIGHT                                        facilitates prompt-driven behavior generation, allowing agents to respond
© 2025 Jimenez-Romero, Yegenoglu and
Blum. This is an open-access article              adaptively to environmental data. For both example applications mentioned
distributed under the terms of the Creative        above, we employ both structured, rule-based prompts and autonomous,
Commons Attribution License (CC BY). The       knowledge-driven prompts. Our work demonstrates how this toolchain enables
use, distribution or reproduction in other
forums is permitted, provided the original        LLMs to study self-organizing processes and induce emergent behaviors
author(s) and the copyright owner(s) are           within multi-agent environments, paving the way for new approaches to
credited and that the original publication in        exploring intelligent systems and modeling swarm intelligence inspired by
this journal is cited, in accordance with
accepted academic practice. No use,             natural phenomena. We provide the code, including simulation ﬁles and data at
distribution or reproduction is permitted          https://github.com/crjimene/swarm_gpt.
which does not comply with these terms.


                                             KEYWORDS

                                        agent-based modeling, large language models, LLM-guided agents, simulation, swarm
                                               intelligence


                      1 Introduction

                               1.1 From rule-based to LLM-driven agents: a new
                          paradigm in ABMS


                                              In this study, we use the terms “agent” and “multi-agent” based on their foundational
                                       meanings in agent-based modeling and simulation (ABMS, Macal and North, 2009), while
                                           extending them through the integration of large language models (LLMs, Chang et al.,
                                              2024). Traditionally, an agent in ABMS is an autonomous entity with localized decision-
                                      making abilities, interacting with its environment and other agents according to predeﬁned
                                                 rules or principles. A multi-agent system (MAS, Wooldridge, 2009) refers to a collection of
                                         such agents operating within a shared environment, where global behaviors emerge from
                                                  their local interactions. Examples of ABMS include simulations of ecosystem dynamics,
                                        urban development, and social interactions (Heckbert et al., 2010; Chen, 2012; Bianchi and
                                            Squazzoni, 2015).
                                        Beyond rule-based agents, ABMS literature also explores agents controlled by neural
                                            networks, especially in applications that require adaptability or learning. Techniques





Frontiers in Artiﬁcial Intelligence                                   01                                                                frontiersin.org

## Страница 2

Jimenez-Romero et al.                                                                                                 10.3389/frai.2025.1593017




like  reinforcement  learning  and  evolutionary  strategies  are    various academic levels further underscores its importance, making
commonly  used  to  optimize  agent  behaviors  in  dynamic     it an ideal choice for demonstrating the integration of advanced AI
environments (Hecker and Moses, 2015; Ning and Xie, 2024;   methods into multi-agent simulations.
Liu et al., 2024a). Other research investigates the application of      Our study investigates two distinct approaches to utilizing
biologically  inspired  architectures,  particularly  spiking  neural   LLMs within multi-agent environments, focusing on the role
networks,  to develop  solutions  that are both energy-eﬃcient    of prompt engineering  in shaping agent  behavior. The  ﬁrst
and computationally eﬀective (Fang and Dickerson, 2017; Putra   approach employs detailed, structured prompts within an ant
et  al., 2024). Within these systems, emergent behavior plays   colony simulation. These prompts are designed to specify behaviors
a  pivotal  role,  facilitating  the  eﬀective handling  of complex   under clearly deﬁned conditions, such as following pheromone
tasks (Jimenez Romero et al., 2024).                                          trails or retrieving food. This method allows for precise control
    Recently, these terms have been introduced in a diﬀerent    over agent actions, enabling a rule-based system where each agent’s
context within artiﬁcial intelligence. Here, AI agents often represent    behavior is explicitly dictated by the LLM-generated instructions.
task-oriented entities designed to autonomously achieve speciﬁc       In contrast, the second approach explores the use of  less
goals, such as generating dialogues or managing workﬂows. These    structured, principle-based prompts in a bird ﬂocking simulation.
agents typically focus on individual task execution rather than the    Here, the prompts rely on the LLM’s inherent understanding of
emergent dynamics central to ABMS (Talebirad and Nadiri, 2023;   complex concepts such as ﬂocking dynamics and self-organization.
Kannan et al., 2024; Li et al., 2024).                                  Instead of requiring explicit, rule-based instructions, these prompts
   In our work, we employ the terms “agent” and “multi-agent”    allow the LLM to handle the intricate behavioral patterns that
in the context of ABMS while integrating LLMs to guide agent   would otherwise need numerous rules to deﬁne. This approach
behaviors. An agent in our simulations can be  either LLM-    leverages the LLM’s capacity to intuitively model these dynamics,
steered or  rule-based. We incorporate LLMs  to guide agent    enabling behaviors that emerge naturally from agents’ interactions
behaviors in two ways: (1) simulations consisting entirely of LLM-   with each other and their environment. As we will show, the LLM
steered agents, and (2) hybrid simulations where LLM-steered   can produce adequate and adaptive agent behaviors that realistically
agents interact with traditional rule-based agents. This means our    reﬂect complex, emergent patterns within the simulation.
simulations can have populations of agents that are completely
LLM-based or a mix of LLM-based and rule-based agents within
the same environment.                               1.3 Research objectives
  We aim to explore the potential advantages of leveraging the
decision-making and pattern-generation capabilities of LLMs to
                                                         The following are the main objectives of our research:
augment ABMS. Speciﬁcally, we are interested in investigating
whether integrating LLMs can help us model emergent behavior
                                                          • To assess the eﬃcacy of structured prompts in the context
using the language processing capabilities and the knowledge base
                                                                           of the rule-based ant colony foraging simulation of NetLogo,
of LLMs.
                                                              which  is a  classic MAS model that demonstrates swarm
   From this point forward, when we refer to “agents,” we mean
                                                                               intelligence principles based on how real ants ﬁnd food and
agents within the ABMS framework that may incorporate LLM
                                                             communicate via pheromones. It is widely used in artiﬁcial
intelligence.
                                                                                  intelligence, complexity science, and optimization research.
                                                          • To assess the eﬃcacy of structured prompts in NetLogo’s
                                                                   knowledge-driven bird ﬂocking simulation, which is also a
1.2 Motivation                                                           classic model demonstrating self-organizing behavior in MAS.
                                                                                              It is inspired by Craig Reynolds’ “Boids” model (Reynolds,
                                                                         1987), which simulates how birds, ﬁsh, or other animals move
   The ﬁeld of agent-based simulations has rapidly evolved, driven
                                                                          in cohesive groups without a central leader.
by advances in artiﬁcial intelligence (AI) and computational power.
                                                          • To present a comprehensive toolchain that combines LLMs
These simulations, which model the interactions of autonomous
                                                                    with multi-agent simulation environments, oﬀering a new
agents within a deﬁned environment,  are  increasingly being
                                                          method  for modeling and analyzing swarm behavior  in
enhanced by the integration of generative AI, particularly LLMs.
                                                              complex systems.
In this context, LLMs—with their capacity to process and generate
human-like text—oﬀer a novel means of guiding and inﬂuencing
                                                                   This investigation aims to explore how LLMs, through eﬀective
agent behaviors in real-time. A critical aspect of this integration is
                                                        prompt engineering, can be integrated into multi-agent systems to
prompt engineering, which is the careful design of prompts that
                                                        model and guide emergent, self-organizing behaviors in simulated
serve as instructions for the agents, dictating how they should
                                                               environments.
respond to their environment.
   The motivation and contribution of this work are found in the
presentation of a toolchain that integrates LLMs with agent-based
simulations within the NetLogo environment (Wilensky, 1999;   1.4 Background and related work
Tisue and Wilensky, 2004; Amblard et al., 2015), a platform widely
recognized in the complexity science community for its robustness      The integration of generative AI into multi-agent systems
and versatility. NetLogo’s value as an educational tool spanning    represents a burgeoning ﬁeld that seeks to enhance the autonomy,




Frontiers in Artiﬁcial Intelligence                                   02                                                                frontiersin.org

## Страница 3

Jimenez-Romero et al.                                                                                                 10.3389/frai.2025.1593017




adaptability, and realism of agent behaviors in simulations. This   out these instructions, and a Reporter that provides environmental
approach leverages the vast knowledge embedded within LLMs to    feedback to the Planner. The Planner reads a description of the
inﬂuence agent interactions in ways that were previously unfeasible    task and breaks it down into simple instructions for the Actor,
with traditional rule-based systems. The use of generative AI in   who was trained to understand simple instructions and operates
multi-agent simulations has opened new avenues for exploring   upon them. The Reporter observes the eﬀects of the Actor’s actions
complex behaviors, emergent dynamics, and adaptive systems.      on the environment and communicates this information in a
   In  particular,  the  integration  of LLMs  with  agent-based    text-based form back to the Planner. The system  is tested on
simulations  represents  a  signiﬁcant  convergence  of  natural   complex tasks that require reasoning and gathering information,
language processing (NLP) and complex systems modeling. LLMs,   and the results show that it outperforms traditional reinforcement
with their ability to generate human-like text and understand    learning methods, especially when using larger language models.
complex linguistic patterns, have transformed various ﬁelds within   The researchers demonstrate that Large language models (70 billion
artiﬁcial intelligence, particularly in automating and interpreting    parameters) consistently outperformed smaller language models
language-based  tasks.  Agent-based  simulations  are  a  robust    (7 billion parameters) in the experiments, indicating that larger
framework for modeling complex systems where individual agents   models have resilience against noisy or irrelevant information
interact with each other and their environment, potentially leading   and greater capacity for the complex reasoning required to solve
to emergent behaviors. The use of LLMs in simulations may    these tasks. Zhu et  al. (2023) present Ghost in the Minecraft
hereby vary widely, from highly structured, rule-based prompts   (GITM), a framework  for developing general capable agents
that delineate speciﬁc actions to more generalized prompts that rely    in the Minecraft world. In  contrast  to previous approaches,
on the LLM’s broader knowledge base. This study highlights two    especially reinforcement learning algorithms, GITM uses large
distinct methodologies in applying LLM capabilities to simulate   language models to achieve high success rates, e.g. in the "Obtain
emergent, multi-agent behaviors with varying degrees of prompt   Diamond" task. Typical reinforcement learning-based agents often
speciﬁcity and autonomy.                                             struggle with the complexity of Minecraft due to the long time
    Integrating LLMs  with  agent-based  simulations  presents   horizon of the task, which can lead to diﬃculties in learning and
transformative opportunities across various domains, enhancing    adapting. In contrast, Zhu et al. (2023) leverages LLMs to enable
the realism and complexity of simulations. This integration can    a hierarchical decomposition of complex tasks into manageable
signiﬁcantly improve the modeling of social systems, industrial    sub-goals and structured actions. This approach yields signiﬁcantly
automation, and multi-agent interactions.                           higher eﬃciency and robustness, allowing agents to better navigate
   Park et al. (2023) introduce an LLM-driven agent that can   and interact with the Minecraft environment. GITM integrates the
engage and converse with both humans and other AI agents.    logical reasoning and knowledge base of LLMs with text-based
The  agent  has  the  capability  to  generate  text  that can be   knowledge and memory, enabling eﬀective interaction with the
comprehended and interpreted by other agents. This facilitates   environment and the pursuit of intricate, long-term objectives. The
clear communication between them, fostering eﬀective interactions    article demonstrates the potential of LLMs for the development of
and collaboration. The simulated environment functions as a    generally capable agents in open, complex environments.
sandbox composed of text, allowing the agent to perceive and        Recently, researchers incorporated LLM into swarm systems
interpret the surrounding context eﬀectively. This setting enables    to leverage the reasoning and knowledge capabilities of these
the agent to navigate and interact with the provided information.   models  (Gao  et  al., 2024; Qu, 2024).  Strobel  et  al. (2024)
Inspired by the work of Park et al. (2023), Junprung (2023) presents    integrate LLMs into robot swarms to enhance their reasoning,
two LLM-driven experiments, two-agent negotiation, and a six-    planning, and collaboration  abilities. They exchange the robot
agent murder mystery game to simulate human behavior. The   programming controller by proposing two changes: (1) An indirect
author describes the behavior of three categorical diﬀerent LLM-    integration uses LLMs to generate and validate the programming
driven simulations and discusses the limitations of large-scale    of the controller before or during the deployment. This approach
language models.                                              improves eﬃciency and reduces human error by automating the
   Gao  et  al. (2023) create a framework for  social network    design process. (2) A direct integration implements a separate LLM
simulation  called  S3.  They  simulate  motion,  attitude,  and    for each robot during deployment, enabling the robot to plan,
interactive behaviors  to emulate  social behavior. Due  to the    reason, and collaborate using natural language. The LLM-driven
changing environment, the agents have to adapt and retain a    robots can detect and respond to unexpected behaviors and are
memory to utilize past experiences and adjust their behavior. They   more resilient in dynamic environments without prior information.
observe the emergence of collective behavior among the agents and      Feng et  al. (2024) present an algorithm aimed at adapting
conclude their environment holds potential for further exploration  LLM experts using collaborative search techniques inspired by
in the ﬁelds of social sciences and informed decision-making. This   swarm intelligence. This method allows several LLMs to collaborate
insight suggests that the dynamics observed could provide valuable    in  exploring  the weight space  to optimize a  speciﬁc  utility
perspectives on group interactions and collaborative processes.       function without the need for extensive ﬁne-tuning data or strong
   The research of Dasgupta et al. (2023) investigates the use of   assumptions about the models involved. In their work, each LLM
LLMs to improve the decision-making abilities of AI agents that   can be treated as a particle within a swarm navigating within the
interact with their environment. The proposed system consists of   weight space and adjusting its position based on its best or worst-
three parts: a Planner that uses a pre-trained LLM to generate   found solutions. The algorithm demonstrates ﬂexibility in diﬀerent
instructions, a reinforcement-learning agent, the Actor, that carries    single or multi-task objectives. Due to their collaborative search





Frontiers in Artiﬁcial Intelligence                                   03                                                                frontiersin.org

## Страница 4

Jimenez-Romero et al.                                                                                                 10.3389/frai.2025.1593017




approach the LLM experts can discover unseen capabilities, which    language, the autonomous prompts rely on the LLM’s internal
enables the transition from weak to strong performance levels.       knowledge and  general  reasoning. This comparison provides
   In their work, called Swarm-GPT, Jiao et al. (2023) integrate    insight into the design space of LLM-based agent prompts and their
LLMs with motion-based planning to automate Unmanned Aerial    eﬀect on emergent system dynamics.
Vehicle (UAVs) swarm choreography. Users are able to generate
synchronized drone performance via language commands. Swarm-
GPT  is able to  utilize LLMs to create UAVs formations and  2 Materials and methods
movements which are synchronized to music. The system includes
                                                                   In this study, we employed two distinct simulations of thea trajectory planner that utilizes waypoints generated by the LLM,
                                                                 behavior of social insects to explore the integration of LLMsguaranteeing that the drone movements are both collision-free
                                                                      in guiding  agent  behaviors  within  multi-agent  systems. Theand feasible. Swarm-GPT has been eﬀectively demonstrated at live
                                                               experiments were designed to  investigate the eﬀectiveness ofevents, highlighting its practical application and ability to perform
                                                                       structured, rule-based prompts in one scenario and principle-in real time.
                                                                    based,  knowledge-driven  prompts  in  the  other  one.  Both   Liu  et  al. (2024c) explore the  application  of multimodal
                                                                   simulations utilize the LLM to process environmental inputs andLLMs to control the formation of UAVs using image and text
                                                                   generate agent actions, providing insights into how LLMs caninputs. The researchers ﬁrst pre-trained an LLM on a single
                                                             be leveraged to model complex behaviors such as foraging andUAV, demonstrating the LLM’s potential to interpret and execute
                                                                 ﬂocking.commands eﬀectively. Then they expanded their approach to
                                                                  Structured rule-based prompts are designed with  explicit,coordinate multiple UAVs in formation. The multimodal LLM
                                                           predeﬁned  instructions  that  guide  the LLM  to  generaterecognizes environmental signals from the images captured by the
                                                                     deterministic agent actions. These prompts specify exact conditionsprimary drone (via a camera). Then, the pre-trained LLM analyzes
                                                        and responses, ensuring consistent and predictable agent behaviors.the data and generates instructions for managing the UAV to attain
                                                            For example, in a foraging scenario, structured prompts mighta speciﬁed formation.
                                                                   include direct rules for following pheromone trails or picking up   Another application in language-guided formation control is
                                                             food when encountered.presented by Liu et al. (2024b). The authors propose a framework
                                                              Knowledge-driven prompts, on the other hand, rely on thecalled Language-Guided Pattern Formation (LGPF) for swarm
                                                          LLM’s inherent understanding of broader behavioral conceptsrobotics. Their system employs an LLM to translate a high-level
                                                        and principles. These prompts are  less rigid and provide thepattern description into speciﬁc actions for a swarm of robots,
integrating multi-agent reinforcement learning for detailed control.
The LGPF framework allows for intuitive and ﬂexible control   TABLE 1 Comparative analysis of structured, rule-based prompts versus
of robot swarms, enabling them to achieve complex formations    knowledge-driven prompts, highlighting their distinctive design criteria,
guided by natural language instructions.                                operational characteristics, and intended use within agent-based
                                                                              simulations.
   Most existing MAS and swarm intelligence simulations rely
on explicitly programmed, rule-based behaviors that are often     Criterion        Structured,       Knowledge-
domain-speciﬁc and lack ﬂexibility. While several recent works                    rule-based         driven
                                                                  prompts          promptshave explored LLMs for planning or social agent interactions, such
as role-playing agents or virtual societies, these typically focus on      Prompt design          Clearly deﬁned rules,         Flexible guidelines,
human-like reasoning, not swarm intelligence or nature-inspired                                   explicit instructions        open-ended knowledge
                                                                                                                                                requests
collective behavior. In contrast to existing literature, our paper
makes the following contributions. (1) We investigate how LLMs      Nature of guidance     Deterministic,              Non-deterministic,
                                                                                                                        prescriptive                  explorative
can be integrated into swarm intelligence. This  is one of the
ﬁrst works to use LLMs as decentralized behavioral engines for      Task scope            Narrowly deﬁned,          Broadly deﬁned, general
non-human and non-verbal, swarm-like agents. We demonstrate                              speciﬁc tasks                 objectives
our framework on two classical swarm intelligence scenarios–ant      Output variability      Limited, predictable        High variability, adaptive
colony foraging and bird ﬂocking–each involving diﬀerent sensory                             outputs                    outputs
inputs and emergent outcomes. In both cases, agents receive      Agent autonomy     Low autonomy; actions     High autonomy; agents
localized information about  their environment and act based                                   explicitly guided by rules    independently reason
                                                                                                                     and adapt
on LLM-generated decisions. (2) We introduce a generalizable
toolchain  for  integrating LLMs with OpenAI’s GPT models      Dependency on        High; relies strictly on      Low; leverages intrinsic
                                                                              predeﬁned rules        pre-speciﬁed              knowledge of the model
via Python, enabling agents to act based on prompt-generated                                                                                                                      instructions
decisions rather than ﬁxed procedural  logic. This framework
                                                                                          Adaptability to new     Limited; requires manual    High; readily adapts
decouples agent logic from hardcoded rules, enabling behavior to
                                                                                           scenarios              adjustment of rules          using implicit knowledge
be modiﬁed or extended via natural language prompts. (3) Our
                                                                                Complexity of          Structured, ﬁxed           Dynamic, context-driven
work compares two categories of LLM prompt - structured rule-
                                                                          prompt structure       templates                    structures
based and autonomous knowledge-driven - to show how diﬀerent
prompt designs aﬀect emergent behavior in collective systems.      Use case examples      Speciﬁc simulations,         Explorative tasks, novel
                                                                                                                   controlled experiments      scenario discovery
While the structured prompts encode rule-based logic in natural





Frontiers in Artiﬁcial Intelligence                                   04                                                                frontiersin.org

## Страница 5

Jimenez-Romero et al.                                                                                                 10.3389/frai.2025.1593017




LLM with general guidelines, enabling more adaptive and ﬂexible       their states and behaviors in response to the LLM’s instructions.
agent behaviors. In the context of a bird ﬂocking simulation,      This  action  directly modiﬁes the simulation environment,
such prompts might encourage behaviors based on principles      forming a closed-loop system where each action feeds back into
like alignment, cohesion, and separation without specifying exact       the environmental context for the next iteration. The iterative
actions, allowing the LLM to synthesize responses that foster      process ensures that agent behaviors continuously respond to
emergent, self-organizing dynamics.                                   evolving environmental conditions and LLM feedback, fostering
   To clearly illustrate the conceptual diﬀerences between the      emergent behaviors and adaptive responses.
two types of prompts employed in this study: structured, rule-
                                                      The following sections detail the setup, LLM integration, and
based prompts and knowledge-driven prompts, Table 1 presents
                                                               procedures used in each experiment.
a  comparative  analysis  outlining  their deﬁning  criteria and
characteristics.

                                 3 Experiment 1: ant colony foraging
2.1 Toolchain for LLM-driven multi-agent    simulation
simulations with NetLogo
                                                         As mentioned above, this experiment  is based on the ant
    Figure 1 illustrates the toolchain for LLM-driven multi-agent    foraging model implemented in the NetLogo library (Wilensky,
simulations  with NetLogo, showing  the  integration between    1997,  see  https://ccl.northwestern.edu/netlogo/models/Ants).  It
NetLogo, GPT-4o, and  the Python  extension. The  following    takes place in a two-dimensional foraging area consisting of
enumeration describes each step of the workﬂow:                    designated food sources scattered throughout the environment and
                                                                 a central nest where the ants must return to deposit the food they
1. Environment encoding: The simulation toolchain leverages
                                                                                collect. The environment is designed to mimic natural foraging
  NetLogo to capture real-time environmental states, including
                                                                     conditions, where agents (ants) must navigate to ﬁnd food and
   agent positions, inter-agent interactions, and other relevant
                                                                   return it to the nest while interacting with environmental cues such
   environmental  variables depending on the simulation  (e.g.
                                                                      as pheromone trails and nest scents; see Figure 2.
  pheromone  concentrations). These  data  are encoded  into
   structured prompts that convey a comprehensive environmental                                                          • Agents: The simulation features stateless ants, each operating
   context to the LLM. This encoding ensures that the LLM receives                                                                           as an independent agent without memory of past actions.
   timely, accurate input representing dynamic changes in the                                                                These ants rely entirely on real-time environmental inputs and
   environment.                                                               LLM-generated prompts to determine their behaviors. The
2. Python  extension  integration:  NetLogo  uses  its  Python                                                                       agents are designed to follow explicit, rule-based instructions
   extension to  facilitate communication with GPT-4o via the                                                                       derived from  the LLM, ensuring  that  their  actions  are
  OpenAI API. This extension allows NetLogo to send encoded                                                                           predictable and consistent with predeﬁned conditions.
   environmental  data  as prompts  to  the LLM and  receive                                                          • LLM integration: OpenAI GPT-4o is employed to process
   structured responses, enabling the interaction between the                                                                         structured prompts  that deﬁne the  ants’  behaviors. The
   simulation platform and the LLM.                                                                            default API parameters are used, with the exception of the
3. LLM processing: The structured prompts are processed by GPT-                                                                      temperature, which is set to 0.0 to ensure deterministic results
   4o, which interprets the input data and generates agent behavior                                                                   based on the provided inputs. The LLM receives real-time
   suggestions based on encoded environmental information. The                                                                   environmental information and generates actions according
  LLM’s ability to process complex, context-rich data allows it to                                                                          to a predeﬁned set of rules. These structured prompts ensure
   infer and propose actions that adhere to predeﬁned rules (for                                                                             that the ants’ responses are clearly deﬁned and predictable,
   structured prompts) or leverage general behavioral principles                                                                      enabling systematic analysis of their behavior. Nevertheless,
   (in principle-based prompts). This stage ensures that agent                                                                          there is still a small chance that the LLM may occasionally
   responses align with the overall objectives of the simulation, be                                                                       generate responses that deviate from the speciﬁed rules.
    it foraging success or cohesive ﬂocking.
4. Decoding LLM output: The LLM output, formatted as a
   structured JSON  or Python  dictionary,  is  translated  into
   executable actions predeﬁned within the NetLogo simulation.   3.1 Procedure
   This step converts the structured actions generated by the
  LLM into precise instructions for agents, such as movement   3.1.1 Prompt design
   vectors, state transitions, or pheromone release behaviors. The      The prompt is structured as a zero-shot prompt, requiring
  Python extension facilitates this process by receiving the LLM    the LLM  to generate  accurate responses without  relying on
   responses from the OpenAI API and converting them into a    prior examples or contextual memory from previous interactions.
   NetLogo-compatible data structure. This translation mechanism   This intentional design maintains stateless prompts to control
   ensures both syntactic and semantic alignment between the    the agents. We employed an API function that does not retain
  LLM’s output and the data format required by the simulation.      conversation context between prompts, making each interaction
5. Agent action execution and iterative process: The decoded   independent and requiring the LLM to interpret and respond
  commands are executed by the agents in NetLogo, updating    solely based on the current input. The ﬁnal prompt used in




Frontiers in Artiﬁcial Intelligence                                   05                                                                frontiersin.org

## Страница 6

Jimenez-Romero et al.                                                                                                                                               10.3389/frai.2025.1593017Diagram showing the interaction between NetLogo, a NetLogo Python Exte





    FIGURE 1
   Diagram illustrating the toolchain for LLM-driven multi-agent simulations, integrating NetLogo and GPT-4o via the Python extension and OpenAI API.
   The workﬂow showcases a closed-loop process where environmental states are encoded into structured prompts, processed by GPT-4o to
   generate behavior suggestions, decoded into executable actions, and iteratively executed by agents within the NetLogo simulation                                                                                                                                                                                                   environment.Screenshot of a NetLogo simulation interface. The left panel has sliders for adjusting diffusion rate, evaporation rate, and ant





    FIGURE 2
   Ant foraging simulation in NetLogo. The central circle depicts the nest area, while the three blue circles nearby indicate food sources.




our experiments resulted from several iterations in a trial-and-    the ants within the simulation, including instructions such as
error process to ensure the LLM could eﬀectively understand the    following pheromone  trails when searching for food, picking
environment and rules and execute the expected tasks accordingly.   up food when encountered, and releasing pheromones to mark
For this experiment, precise behavioral rules were provided for   food sources.




Frontiers in Artiﬁcial Intelligence                                   06                                                                frontiersin.org

## Страница 7

Jimenez-Romero et al.                                                                                                 10.3389/frai.2025.1593017




3.1.2 Tuning process                                              gradients eﬀectively, sometimes moving away from stronger
   Our initial approach utilized minimal instructions, providing         cues.  Some  ants   released  pheromones  unexpectedly,
a general description of the foraging task to assess how eﬀectively        while others exhibited random movement  patterns. This
ants could perform without  speciﬁc  guidance: ﬁnding  food,        inconsistency  prevented  the  colony from  displaying an
marking paths to food sources using pheromones, and utilizing nest        organized foraging behavior, indicating that  clearer rules
scent to navigate back to the nest when carrying food. This minimal       were needed for actions such as pheromone release and
instruction set was intentionally selected based on fundamental        gradient follow-up.
biological principles described in ecological literature related to     • Analysis
ant foraging behavior, particularly focusing on pheromone-based          While this prompt established the basic framework for
communication and nest-scent navigation. The primary rationale        the simulation,  it lacked speciﬁc guidance on how ants
was to evaluate the inherent capacity of LLM-driven agents to        should interpret and prioritize environmental cues or resolve
manifest realistic collective foraging behavior without extensive,        conﬂicting signals. The absence of detailed instructions led to
explicitly detailed instructions. Through this initial generalization       ambiguous behaviors, including inconsistencies in following
attempt, we aimed  to determine whether the LLM required       pheromone and nest scent gradients. This highlighted the
more detailed or structured instructions to accurately reproduce       need for more explicit rules to ensure consistent and organized
emergent ant colony behaviors.                                 swarm behavior.
   Following the initial evaluation,  it became clear that more
explicit  rules were  essential  for  consistent and  realistic  ant       Iteration 2
behavior. Throughout this iterative process, the language model
oﬀered valuable feedback by highlighting misunderstandings or     • Prompt text
ambiguities in the prompts. This feedback was instrumental in       We add an instruction to the prompt to prioritize nest
reﬁning the prompts to enhance the ants’ performance. Below, we         scent over pheromone trails when carrying food.
present an analysis of how these prompts evolved, focusing on
speciﬁc improvements and the reasoning behind each iteration.
    Iteration 1                                                                  1  You  are  an  ant  in  a 2D  s i m u l a t i o n  ta s k e d  with
                                                                                                                     f i n d i n g  food ,  marking  the  path  to  food  with
                                                           pheromone   t r a i l s  ,  and using  n e s t  s c e n t  to
  • Prompt Text                                                 n a v i g a t e  back  to  the  n e s t when  c a r r y i n g  food .
                                                              P r i o r i t i z e  n e s t  s c e n t  over pheromone   t r a i l s
  1  You  are  an  ant  in  a 2D  s i m u l a t i o n  ta s k e d  with
                                                            when  c a r r y i n g  food .
                 f i n d i n g  food ,  marking  the  path  to  food
                                                                                     2      . . .
         with   t r a i l s  of pheromones ,  and using  n e s t
             s c e n t  to  n a v i g a t e  back  to  the  n e s t when
            c a r r y i n g  food .
  2                                                        • Observed behavior
  3  Format your  a c t i o n s  as  a Python  d i c t i o n a r y
                                                         To address the issues from the ﬁrst prompt, we added
         with   t h e s e  keys and options :
                                                                     a directive for ants to prioritize nest scent over pheromone  4                 ‘ ‘ move−forward  ’  ’  :  True  or  F a l s e  ,
  5                 ‘ ‘ r o t a t e  ’  ’  :     ‘ ‘ l e f t   ’  ’  ,     ‘ ‘ r igh t  ’  ’  ,  or    ‘ ‘ none            trails when carrying food, aiming to better mimic foraging
                                 ’  ’  ,                                                    ant behavior. Despite this improvement, ants still exhibited
  6                 ‘ ‘ pick−up−food  ’  ’  :  True  or  F a l s e  ,                       inconsistencies  in  following pheromone and  nest  scent
  7                 ‘ ‘ drop−pheromone ’  ’  :  True  or  F a l s e  ,
                                                                             gradients. When nest scent and pheromone trails had similar
  8                 ‘ ‘ drop−food  ’  ’  :  True  or  F a l s e  .
  9                                                                           strengths, ants demonstrated conﬂicting actions. Additionally,
 10  You w i l l  be provided  with environment                     the prompt did not specify behaviors for ants not carrying
         information .  Keep your response  c o n c i s e ,            food,  leading  to ineﬃcient  exploration. Ants tended  to
         under 35 tokens .                                             rotate aimlessly near the nest and were slow to venture
 11                                                                 outward, showing the need for clearer guidance to improve
 12  Current environment :
 13     −Pheromone  c o n c e n t r a t i o n   ( L e f t  :  0 ,  Front :           exploration eﬃciency.
               0 ,  Right :  0 ) ,                                • Analysis
 14     −Nest  presence :  True ,                                      Introducing prioritization helped align the ants’ actions
 15     −Nest  s c e n t   ( L e f t  :  196 . 84 ,  Front :  196 . 39 ,        when carrying food, but inconsistencies in following scent
             Right :  195 . 76 ) ,
                                                                         gradients persisted. Ants not carrying food and not sensing
 16     −Food  c o n c e n t r a t i o n  a t  your   l o c a t i o n  :  0 ,
 17     −Carrying  food  s t a t u s  :  True                         any pheromones tended to remain near the nest without
                                                                            eﬀectively  exploring  the  environment.  This  emphasized
  • Observed behavior                                                 the  necessity  for  comprehensive  guidance  covering  all
        In this ﬁrst attempt, we provided general instructions         possible  states and clearer instructions on responding to
     to  establish a  baseline  for ant behavior. The ants were        environmental cues to enhance exploration eﬃciency.
     tasked with ﬁnding food, marking paths with pheromones,
    and  using  nest  scent  to  return home when  carrying       Iteration 3
     food.  However,   simulations   revealed   inconsistencies.
    Ants  often  failed  to  follow pheromone and  nest  scent     • Prompt text




Frontiers in Artiﬁcial Intelligence                                   07                                                                frontiersin.org

## Страница 8

Jimenez-Romero et al.                                                                                                 10.3389/frai.2025.1593017




       As  before,  with added  clariﬁcations  in  the  current      when  environmental  cues  were  available.  Nonetheless,
    environment:                                                         inconsistencies in following pheromone gradients indicated
                                                                             that ants needed clearer instructions on interpreting and
  1      . . .
                                                                          acting upon varying scent intensities. The lack of an eﬀective  2     −Nest  presence :  True  ( You  are  c u r r e n t l y  a t
               the  n e s t ) ,                                            exploration  strategy, when  cues  were  absent,  remained
  3     −Carrying  food  s t a t u s  :  True  ( You  are                a challenge.
                 c u r r e n t l y  c a r r y i n g  food )
  4      . . .
                                                                        Iteration 5
  • Observed behavior
     We observed that ants sometimes failed to pick up food     • Prompt text
     or drop it at the nest, possibly due to a lack of awareness of           Environmental    information    about   pheromone
     their current state. To rectify this, we explicitly stated their        concentration and  nest  scent presented with  directional
     status in the prompt, such as whether they were at the nest or        cues instead of quantities:
     carrying food. This redundancy ensured that ants performed
                                                                                           1      . . .
     correct actions in these situations. However, inconsistencies
                                                                                           2  Current environment :
     in following pheromone and nest scent gradients remained.       3     −Higher Pheromone Concentration :  Front ,
    Ants continued to exhibit limited exploration when not       4     −Nest  Presence :  F a l s e   ( You  are  not
     carrying  food,  tending  to  stay  near  the  nest  rather                     c u r r e n t l y  a t  the  n e s t ) ,
    than  venturing  into new  areas  or  eﬀectively  following       5     −Stronger  Nest  Scent :  L e f t  ,
                                                                                           6     −Food Concentration  a t  your   l o c a t i o n  :  0 ,
    pheromone trails.
                                                                                           7     −Carrying Food  S t a t u s  :  True  ( You  are
  • Analysis                                                                              c u r r e n t l y  c a r r y i n g  food ) }
         Explicitly  stating the  ants’  status improved decision-
    making by providing clear context, leading to better execution     • Observed behavior
     of actions like picking up and dropping food. Yet, the lack of           Recognizing  the  need  for  better  interpretation  of
     speciﬁc instructions on following scent gradients meant ants        environmental  cues, we modiﬁed how  information was
       still showed inconsistencies in navigating toward pheromone        presented  by  using  directional  descriptions  instead  of
      trails or nest scent. Their ineﬃcient exploration highlighted        numerical values—e.g., “Higher Pheromone Concentration:
     the need for clearer guidance to enhance movement away from        Front” and “Stronger Nest Scent:  Left.” This adjustment
     the nest.                                                             signiﬁcantly improved the ants’ ability to follow pheromone
                                                            and nest scent gradients. Ants became more consistent in
    Iteration 4                                               moving toward stronger cues, enhancing their navigation and
                                                                        foraging eﬃciency.
  • Prompt text                                                    However, when no  scents  were  detected,  ants   still
     We add an instruction to the prompt to use the highest       showed  limited  exploration,  often  remaining  near  the
    pheromone scent to navigate to food when not carrying any.          nest  rather  than  actively  searching  new  areas.  This
                                                                         indicated  that  while  gradient  following  had  improved,
  1  You  are  an  ant  in  a 2D  s i m u l a t i o n  .  Your   t a s k
                                                                        the exploration strategy was still ineﬃcient in the absence of                  i s  to  pick up food and  r e l e a s e    i t  a t  the
         n e s t .  Use n e s t  s c e n t  to  n a v i g a t e  back  to           sensory cues.
          the  n e s t when  c a r r y i n g  food ,  p r i o r i t i z i n g       • Analysis
         n e s t  s c e n t  over pheromones .  Use  h i g h e s t               Using  directional  cues  provided   clearer  guidance
        pheromone  s c e n t  to  n a v i g a t e  to  food when
                                                         on  responding  to  environmental  gradients,  resolving
         not  c a r r y i n g  any .
  2      . . .                                                many  inconsistencies  observed  in  previous  prompts.
                                                      From  Prompt  5  onward,  ants  became  more  adept
  • Observed behavior                                                       at   following  pheromone  and   nest   scent   gradients,
      To guide  ants not  carrying  food, we speciﬁed  that        leading  to a more organized foraging  behavior. Despite
     they  should  navigate  toward  food  using  the  highest         these   improvements,    ants’    exploration   remained
    pheromone  concentration.  Their  ability  to  ﬁnd  food        ineﬃcient  when  no   sensory   cues   were   present,
     sources  when  pheromone   trails  were   present  was         indicating  a  need  for  further  instructions  to  promote
     clearly improved  in  this  way. However,  inconsistencies         eﬀective exploration.
     in   following   pheromone   gradients    persisted.   In
     the  absence   of  pheromones  or   nest   scents,   ants       Iteration 6
    tended  to  remain  near  the  nest,  exhibiting  ineﬃcient
     exploration behaviors.                                     • Prompt text
  • Analysis                                      We   add   an   instruction   to   the   prompt   to
       By distinguishing between the  states of carrying and         release  pheromones  on   food   sources  and   while
    not carrying food, we enhanced the ants’ foraging eﬃciency        carrying food.





Frontiers in Artiﬁcial Intelligence                                   08                                                                frontiersin.org

## Страница 9

   Jimenez-Romero et al.                                                                                                 10.3389/frai.2025.1593017




                                                                              of  the  nest when  they  were  looking  for  food.  This
1  You  are  an  ant  in  a 2D  s i m u l a t i o n  .  Your   t a s k    i s  to
                                                                          eliminated  unnecessary  returns  and  improved  foraging
         pick up food and  r e l e a s e    i t  a t  the  n e s t .
      R e l e a s e pheromone on food  source and while you        eﬃciency.
         are  c a r r y i n g  food .  Use n e s t  s c e n t  to  n a v i g a t e
        back  to  the  n e s t when  c a r r y i n g  food ,                    Iteration 8
        p r i o r i t i z i n g  n e s t  s c e n t  over pheromones .  Use
        h i g h e s t pheromone  s c e n t  to  n a v i g a t e  to  food
                                                             • Prompt text
       when not  c a r r y i n g  any .
2      . . .                                            We added an instruction to the prompt to move away from
                                                                           the nest and rotate randomly if not carrying any food and not
                                                                          sensing any pheromone.
    • Observed behavior
                                                                                               1  You  are  an  ant  in  a 2D  s i m u l a t i o n  .  Your   t a s k
        To encourage  trail formation back  to  the  nest, we                         i s  to  pick up food and  r e l e a s e    i t  a t  the
        instructed ants to release pheromones while carrying food.            n e s t .  R e l e a s e pheromone on food  source and
       This led to stronger trails and improved the eﬃciency of other             while you  are  c a r r y i n g  food .  Use n e s t
        ants in locating food sources. With the improved gradient-                  s c e n t  to  n a v i g a t e  back  to  the  n e s t  only
                                                                  when  c a r r y i n g  food ,  p r i o r i t i z i n g  n e s t
        following ability from Prompt 5, ants were more consistent
                                                                                                        s c e n t  over pheromones .  Use  h i g h e s t
        in navigation.                                                 pheromone  s c e n t  to  n a v i g a t e  to  food when
            Nevertheless, in the absence of pheromones and nest             not  c a r r y i n g  any . Move away from  n e s t and
        scents, ants  still exhibited  limited exploration  behaviors,                  r o t a t e  randomly   i f  you  are  not  c a r r y i n g
       tending to  stay near the  nest. This indicated  that  their            any food and you  are  not  s e n s i n g  any
                                                                 pheromone .
        exploration  strategy  was   still  ineﬃcient  and  required
                                                                                               2      . . .
       reﬁnement.
    • Analysis                                               • Observed behavior
         By  enhancing  pheromone  deposition  during  food           In previous iterations, we observed limited exploratory
        transport and improving gradient  following, we boosted        behavior of the ants in areas without scents. To address
       colony  cooperation  and   foraging   success.  However,          this, we introduced a directive for proactive exploration. This
        the  persistent  issue  of  limited  exploration  in  scent-        approach improved exploration, with ants venturing further
        free  areas  indicated  that  additional  instructions  were       from the nest and discovering food sources in fewer simulation
        necessary  to promote outward movement and enhance          steps. However, a noticeable bias concerning the rotation
        exploration eﬃciency.                                           remained, particularly around the nest, indicating that the
                                                                randomness was not functioning as eﬃciently as intended.
       Iteration 7                                              • Analysis
                                                               By instructing ants to move away from the nest and
    • Prompt text                                                           rotate randomly when not carrying food and not sensing
       We added the word “only” in the prompt as follows:            pheromones, we encouraged them to explore new areas more
                                                                                  eﬀectively. This change increased the likelihood of ants ﬁnding
      1  You  are  an  ant  in  a 2D  s i m u l a t i o n  .  Your   t a s k
                        i s  to  pick up food and  r e l e a s e    i t  a t  the            food, as they ventured further from the nest rather than
           n e s t .  R e l e a s e pheromone on food  source and          lingering nearby.
             while you  are  c a r r y i n g  food .  Use n e s t
                 s c e n t  to  n a v i g a t e  back  to  the  n e s t  only            Iteration 9
           when  c a r r y i n g  food ,  p r i o r i t i z i n g  n e s t
                 s c e n t  over pheromones .  Use  h i g h e s t
           pheromone  s c e n t  to  n a v i g a t e  to  food when        • Prompt text
            not  c a r r y i n g  any .                           We expanded the rotation options to include “random”:
      2      . . .
                                                                                               1      . . .
                                                                                               2              ‘ ‘ r o t a t e  ’  ’  :     ‘ ‘ l e f t   ’  ’  ,     ‘ ‘ r igh t  ’  ’ "  ,     ‘ ‘ none ’  ’  ,
    • Observed behavior
                                                                                  or    ‘ ‘ random ’  ’
           In   earlier   iterations,   ants  sometimes   prioritized       3      . . .
        nest  scent  over  pheromones  even when  not  carrying
        food, leading them  to return  to the  nest  unnecessarily.     • Observed behavior
      With  this  clariﬁcation,  the  ants began  to  prioritize  the          With this adjustment, ants demonstrated more varied and
        nest  scent  appropriately, using  it only when they were        unpredictable movement patterns during exploration. They
        carrying  food.  However,  ants   still  exhibited  limited         eﬀectively moved away from the nest and searched a wider
        exploration when no sensory cues were present, tending         area, increasing their chances of encountering food sources
        to remain near  the  nest  rather than  actively  searching       more quickly and eﬃciently.
      new areas.                                              • Analysis
    • Analysis                                               To enhance the randomness of the ants’ exploration, we
         Adding  “only”  to  the  instruction  text  was  crucial       expanded their rotation options to include “random.” This
        to  ensure  that  the  ants  did  not  prioritize  the  scent       meant that when the LLM selected “random” as the rotation




   Frontiers in Artiﬁcial Intelligence                                   09                                                                frontiersin.org

## Страница 10

Jimenez-Romero et al.                                                                                                 10.3389/frai.2025.1593017




     action, it was making a high-level decision to delegate the       5    −Food Concentration  a t  your
     choice of direction to chance. In the simulation, this “random’       6              l o c a t i o n  :  0 ,
                                                                                           7    −Carrying Food  S t a t u s  :  F a l s e   ( You  are  not         ’ option was implemented at a programming level in NetLogo
                                                                                            c u r r e n t l y  c a r r y i n g  food ) .
     to randomly choose the direction of rotation either left or
     right.
                                                          • Possible response from the LLM

   Through  iterative  tuning, we  signiﬁcantly  enhanced  the
                                                                                           1 {
simulated ants’ behavior, making it more consistent with the ant
                                                                                           2    ‘‘move-forward’’: True,
foraging dynamics observed in the rule-based NetLogo model. Each
                                                                                           3    ‘‘rotate’’: ‘‘none’’,
prompt iteration addressed speciﬁc issues identiﬁed in simulations,
                                                                                           4    ‘‘pick-up-food’’: False,
with language model feedback guiding some of the adjustments.
                                                                                           5    ‘‘drop-pheromone’’: False,
                                                                                           6    ‘‘drop-food’’: False
3.1.3 Prompt deployment                                               7 }
   The prompts  are  presented  in  a  format  that  the LLM
can process and output as a  series of actionable commands.
Communication with the LLM is facilitated through the OpenAI
API, speciﬁcally using the chat.completions mechanism,
which allows context-free messages to be passed at each step. This   3.2 System monitoring
setup involves sending a system prompt that outlines the overall
task and rules, followed by user prompts that provide real-time      The simulation monitors the ants’ eﬃciency in navigating
environmental information.                                        the environment, speciﬁcally their ability to locate food, follow
   At  each  simulation  step, NetLogo  translates  the  agent’s   pheromone  trails, and return food to the  nest. Key metrics
perception of its environment into the input variables described in    include the time taken to ﬁnd and return food, the consistency of
the prompt. This ensures that the LLM has an accurate and up-to-   pheromone trail usage, and the accuracy of following the nest scent
date representation of the environment on which its decisions can   when carrying food. The observed behaviours and performance
be based. The LLM then generates a response formatted as a Python    analysis are documented in the result section.
dictionary, containing speciﬁc actions the agent should take. The
following example prompt illustrates the process:
                                 4 Experiment 2: bird ﬂocking
  • System prompt
                                       simulation
  1  You  are  an  ant  in  a 2D  s i m u l a t i o n  .  Your   t a s k
                  i s  to  pick up food and  r e l e a s e    i t  a t  the
                                                         As mentioned before, the bird ﬂocking model of NetLogo         n e s t .  R e l e a s e pheromone on food  source and
          while you  are  c a r r y i n g  food .  Use n e s t         (Wilensky, 1998, see https://ccl.northwestern.edu/netlogo/models/
             s c e n t  to  n a v i g a t e  back  to  the  n e s t  only        Flocking)  is an implementation  of the famous Boids model
        when  c a r r y i n g  food ,  p r i o r i t i z i n g  n e s t         from  Reynolds  (1987). The  simulation  takes  place  in  two-
             s c e n t  over pheromones .  Use  h i g h e s t
                                                               dimensional  airspace. Although  this environment  is  relatively
        pheromone  s c e n t  to  n a v i g a t e  to  food when
                                                                     simple, it eﬀectively replicates key ﬂocking behaviors like group         not  c a r r y i n g  any . Move away from  n e s t and
             r o t a t e  randomly   i f  you  are  not  c a r r y i n g        cohesion, allowing for the observation of ﬂocking dynamics under
         any food and you  are  not  s e n s i n g  any            varying conditions. By adjusting speciﬁc parameters, the simulation
        pheromone .  Format your  a c t i o n s  as  a Python    provides insights into how changes in the environment inﬂuence
          d i c t i o n a r y  with   t h e s e  keys and options :
                                                             ﬂocking behavior.
  2
  3              ‘ ‘ move−forward  ’  ’   ( options :  True ,  F a l s e )
  4              ‘ ‘ r o t a t e  ’  ’   ( options :     ‘ ‘ l e f t   ’  ’  ,     ‘ ‘ r igh t  ’  ’  ,        • Agents: The agents in this simulation are modeled as birds,
                               ‘ ‘ none ’  ’  ,     ‘ ‘ random ’  ’   )                             each operating under principle-based prompts. Unlike rule-
  5              ‘ ‘ pick−up−food  ’  ’   ( options :  True ,  F a l s e )              based systems, these birds are guided by general principles
  6              ‘ ‘ drop−pheromone ’  ’   ( options :  True ,  F a l s e )
                                                                           of ﬂocking dynamics, that is, by alignment, separation, and
  7           ‘ ‘ drop−food  ’  ’   ( options :  True ,  F a l s e ) .
  8                                                                 cohesion (Reynolds, 1987). These principles help the birds
  9  You w i l l  be provided  with environment                     navigate their environment by adjusting their headings in
         information .  Keep your response  c o n c i s e ,           response to the positions and headings of neighboring birds.
         under 45 tokens .                                 • LLM integration: The prompts provided to the LLM leverage
                                                                                                 its inherent knowledge of ﬂocking dynamics, requiring it to
  • Possible user prompt
                                                                     apply these general principles to guide the behavior of each
  1  This   i s  your  c u r r e n t environment :                             bird. The LLM is responsible for interpreting environmental
  2    −Highest Pheromone Concentration : None ,                                                                       data and generating responses that ensure the birds align with
  3    −Nest  Presence :  True  ( You  are  c u r r e n t l y  a t
                                                                                their ﬂockmates, maintain an appropriate distance to avoid
             the  n e s t ) ,
  4    −Stronger  Nest  Scent :  Front ,                                 collisions, and stay cohesive as a group.




Frontiers in Artiﬁcial Intelligence                                   10                                                                frontiersin.org

## Страница 11

Jimenez-Romero et al.                                                                                                 10.3389/frai.2025.1593017



4.1 Procedure                                                               7
                                                                                           8      Maximum  s e p a r a t e  turn :  1 . 5
4.1.1 Prompt design                                                         9      Maximum  a l i g n  turn :  5
                                                                                          10      Maximum cohere  turn :  3
    Similar to the setup in the case of ant foraging, prompts                                                                                          11      Minimum  s e p a r a t i o n  :  1
for  the  ﬂocking  task  are  structured  as  zero-shot  prompts,      12
meaning  they  operate without  prior examples or  contextual      13  This   i s  your  c u r r e n t environment :
memory from  previous  interactions. The  ﬁnal prompt was      14
                                                                                          15      Current  heading :  138 deg
tuned through several iterations (see subsubsection 4.1.2) in
                                                                                          16      Neighbors  in  v i s i o n  r a d i u s :  neighbor_ 1 :  x :
a trial-and-error process to ensure the LLM could eﬀectively                                                                                   0 . 53 ,  y : −3 . 69 ,  heading :  248 deg
interpret  the  environment and  calculate  heading  directions
according to ﬂocking principles. Each prompt guiding a bird                                                          • Observed behavior
is designed to determine  its heading based on the three core                                                                        In this initial attempt, we provided general instructions
principles of ﬂocking dynamics as implemented in the NetLogo                                                                          to establish a baseline for ﬂocking behavior. The agents were
library:  Separation  (steering  to  avoid  crowding  neighbors),                                                                          instructed to determine their heading based on the principles
Alignment  (steering towards  the  average heading  of nearby                                                                           of separation, alignment, and coherence. However, most of
birds), and Cohesion (steering towards the average position of                                                                        the LLM-generated responses were not interpretable by the
nearby ﬂockmates).                                                                          simulation, as they did not adhere to the expected format.
                                                                           Additionally, even when successfully parsed, inconsistencies
                                                                          in  the  agents’  behavior  were  observed,  preventing  the
4.1.2 Tuning process                                                               emergence of ﬂocking.
   The initial rules were inspired by well established principles                                                          • Analysis
from ﬂocking theory, notably the classical alignment, cohesion, and                                                                 While this prompt deﬁned the basic framework for the
separation behaviors introduced in Reynolds (1987) Boids model.                                                                          simulation,  it lacked  constraints to enforce a structured
These  basic  principles were intended to produce generalized                                                                         response. In many cases, the LLM’s output included extended
ﬂocking  patterns  that  could  be  broadly  applicable  across                                                                              textual and mathematical explanations before or alongside the
scenarios. However, as will be shown below,  it was crucial to                                                     JSON object, which interfered with proper parsing.
explicitly state in the prompt that the compass convention  is
used in the simulation. This alignment with NetLogo’s world                                                                        Iteration 2
representation, where  headings  are measured  in degrees—0
degrees  pointing  north, 90  degrees  east, 180  degrees  south,                                                          • Prompt text
and  270  degrees west—was  essential.  Clearly  deﬁning  this                                                   An explicit instruction was added to limit the response to
convention ensured  that the LLM could  accurately compute                                                                        the JSON object only.
and adjust the birds’ headings according to ﬂocking dynamics,
maintaining consistency in the agents’ behavior within NetLogo’s       1      . . .
simulation environment.                                                            2  Provide  your   f i n a l new heading  a f t e r  applying
    Iteration 1                                                                                                   t h e s e   r u l e s  ,  expressed  as  an  angle  in
                                                                  degrees . The  r e s u l t  should  be  in JSON
                                                                  format  only ,  with  the  key and  value :   " new−
  • Prompt Text                                                   heading "   ( value :  heading  in  degrees ) .
                                                               Summarize your answer  in no more than 120
  1                                                               words .
  2  You  are  an agent  in  a 2D  s i m u l a t i o n  .  Your   t a s k
                                                                                           3      . . .
                     i s  to  determine  your new heading  based on
           the   f l o c k i n g  p r i n c i p l e s  of  s e p a r a t i o n
         turn ,  alignment  turn  ( average  heading  of        • Observed behavior
         neighbors ) ,  and coherence  turn  ( average             To address the issues from the ﬁrst iteration, we added a
         heading  towards   f l o c k m a t e s ) . The                        directive restricting the response format to a JSON object only.
         parameters   f o r   t h e s e  p r i n c i p l e s  are :
                                                                    This modiﬁcation successfully constrained the output, making
        maximum−s e p a r a t e −turn , maximum−align −turn ,
         maximum−cohere−turn , minimum−s e p a r a t i o n −               it more reliable and compatible with the simulation. However,
         d i s t a n c e  . The  s i m u l a t i o n  provides  the               while some ﬂocking behavior emerged, it was inconsistent.
                 f o l l o w i n g  information :  Current  heading ,            Small  clusters formed brieﬂy, but  overall alignment and
        Neighbors  in  v i s i o n  r a d i u s .                          coherence were weaker than expected.
  3                                                        • Analysis
  4  Provide  your   f i n a l new heading  a f t e r  applying
                t h e s e   r u l e s  ,  expressed  as  an  angle  in            We compared the resulting headings with those produced
         degrees . The  r e s u l t  should  be  in JSON             by a rule-based model. While some calculated headings were
         format ,  with  the  key and  value :   " new−               numerically similar, they often pointed in opposite directions.
         heading "   ( value :  heading  in  degrees ) .                                                                    This suggested ambiguity in the LLM’s coordinate system.
        Summarize your answer  in no more than 120
                                                                       Since NetLogo employs a compass convention for heading         words .
  5                                                                            calculations, we decided to explicitly specify this convention
  6  These  are  the   f l o c k i n g  parameters :                          in the next iteration.




Frontiers in Artiﬁcial Intelligence                                   11                                                                frontiersin.org

## Страница 12

Jimenez-Romero et al.                                                                                                 10.3389/frai.2025.1593017




    Iteration 3                                                         necessary  to  ensure  agents  always  chose  the  shortest
                                                                          rotation path.
  • Prompt text
      An instruction was added to specify that the compass       Iteration 5
    convention should be used.
                                                          • Prompt text
  1  You  are  an agent  in  a 2D  s i m u l a t i o n  .  Following                                                   An   explicit   instruction  was  added   to   ensure
           the compass convention ,  your   t a s k    i s  to
                                                                        the     shortest     rotational    path     (clockwise    or         determine  your new heading  based on  the
                 f l o c k i n g  p r i n c i p l e s  of  s e p a r a t i o n  turn ,             counterclockwise)  was  always  chosen  when  adjusting
         alignment  turn  ( average  heading  of                   the heading.
         neighbors ) ,  and coherence  turn  ( average
         heading  towards   f l o c k m a t e s )                                 1  You  are  an agent  in  a 2D  s i m u l a t i o n  .  Following
  2      . . .                                                                  the compass convention ,  your   t a s k    i s  to
                                                                 determine  your new heading  based on  the
  • Observed behavior                                                                                       f l o c k i n g  p r i n c i p l e s  of  s e p a r a t i o n  turn ,
                                                                 alignment  turn  ( average  heading  of
       By  explicitly  specifying  the compass convention  for                                                                 neighbors ) ,  and coherence  turn  ( average
    heading  calculations, ﬂocking behavior improved. Larger            heading  towards   f l o c k m a t e s ) . The
     clusters formed compared to previous iterations. However,            parameters   f o r   t h e s e  p r i n c i p l e s  are :
    ﬂocking remained inconsistent, as some agents moved in           maximum−s e p a r a t e −turn , maximum−align −turn ,
                                                               maximum−cohere−turn , minimum−s e p a r a t i o n −    seemingly random directions.
                                                                      d i s t a n c e  . The  s i m u l a t i o n  provides  the
  • Analysis                                                                                                                             f o l l o w i n g  information :  Current  heading ,
       Examining  the  erratic  headings, we  requested  the            Neighbors  in  v i s i o n  r a d i u s .  When
   LLM  to  explain   its  calculations. When  generating  a                c a l c u l a t i n g  the  alignment  turn ,  always
     reasoning  process  before  outputting  the  ﬁnal  heading,            choose  the  s h o r t e s t  path  ( c l o c k w i s e  or
                                                                                       c o u n t e r c l o c k w i s e )  to  a l i g n  with  the
     the LLM  produced  correct  answers.  However,  errors
                                                                  average  heading  of  neighbors .
    occurred  when  providing  only  the  numerical   result.       2      . . .
    This  highlighted  the  need  for  a  structured  reasoning
     process,  or  “chain  of  thought,”  to  ensure  accurate     • Observed behavior
    heading calculations.                                         By  explicitly  instructing  the  model  to  select  the
                                                                            shortest  path  to  the  target  heading,  ﬂocking  behavior
    Iteration 4                                                  improved    signiﬁcantly.   The   LLM-driven    agents
                                                              formed  larger, more  stable  ﬂocking  clusters,  achieving
  • Prompt text                                                  performance  comparable   to   the   original,   rule-based
     A new  key,  “rationale”,  was  added  to  the JSON       NetLogo model.
    output  to  encourage  reasoning  before  determining  the     • Analysis
    ﬁnal heading.                                                        Including  the  shortest-path  directive  ensured  that
                                                           LLM-based   agents   correctly   aligned   their   heading
  1      . . .
  2  Provide  your   f i n a l new heading  a f t e r  applying          adjustments   with   both  LLM-based  and   rule-based
                t h e s e   r u l e s  ,  expressed  as  an  angle  in                 agents.   This   modiﬁcation   resolved   the   previously
         degrees . The  r e s u l t  should  be  in JSON              observed issues, leading to a more coherent and emergent
         format  only ,  with  the  keys and  v a l u e s  :   "           ﬂocking behavior.
             r a t i o n a l e "   ( value :  your  e x p l a n a t i o n ) and   "
        new−heading "   ( value :  heading  in  degrees ) .
  3      . . .
                                                       4.1.3 Prompt deployment
  • Observed behavior                                             This    task    uses    the   same   prompt   deployment
        Introducing the “rationale” key signiﬁcantly improved   mechanism    as   Experiment    1.   Communication   with
    ﬂocking behavior. The agents demonstrated more consistent    the  LLM   is  handled   via  the  OpenAI  API  using  the
    heading adjustments, enhancing the emergence of ﬂocking    chat.completions   mechanism,   which   supports   context-
    dynamics. However, occasional errors persisted, particularly    free  messaging. A  system  prompt  deﬁnes  the  task  and
    when agents needed to turn counterclockwise to reach a    rules,  followed  by  a  user  prompt  providing   real-time
    nearby target heading.                                      environmental data.
  • Analysis                                                 At  each  simulation  step, NetLogo  translates  the  agent’s
       The  “rationale”  key  enabled  the LLM  to  engage    perception into the input variables in the prompt, including the
     in    a    structured   thought    process,    substantially   heading and position of other agents within its vision radius, into
    improving  ﬂocking  behavior.  However,  some  agents    the input variables used in the prompt. This ensures the LLM
       still  moved  in  the  opposite  direction  when  making   has an accurate, up-to-date view of the environment. The LLM
     small   adjustments,   particularly   for   counterclockwise   then generates a response formatted in JSON, specifying the agent’s
     turns.  This  suggested   that  additional  guidance  was    actions. The following example prompt illustrates this process:




Frontiers in Artiﬁcial Intelligence                                   12                                                                frontiersin.org

## Страница 13

Jimenez-Romero et al.                                                                                                 10.3389/frai.2025.1593017



  • System prompt                                4.2 Monitoring Behavior

  1  You  are  an agent  in  a 2D  s i m u l a t i o n  .  Following
           the compass convention ,  your   t a s k    i s  to         Key metrics include the degree of separation maintained
         determine  your new heading  based on  the       between agents, the consistency of alignment with the average
                 f l o c k i n g  p r i n c i p l e s  of  s e p a r a t i o n  turn ,        heading of nearby birds, and the eﬀectiveness of cohesion in
         alignment  turn  ( average  heading  of            moving toward the ﬂock’s center of mass. The observed behaviors
         neighbors ) ,  and coherence  turn  ( average
                                                        and performance analyses are documented in the results section.
         heading  towards   f l o c k m a t e s ) . The
         parameters   f o r   t h e s e  p r i n c i p l e s  are :
        maximum−s e p a r a t e −turn , maximum−align −turn ,
         maximum−cohere−turn , minimum−s e p a r a t i o n −   5 Results
         d i s t a n c e  . The  s i m u l a t i o n  provides  the
                 f o l l o w i n g  information :  Current  heading ,      5.1 Experiment 1: ant foraging with
        Neighbors  in  v i s i o n  r a d i u s . When           structured rule-based prompting            c a l c u l a t i n g  the  alignment  turn ,  always
         choose  the  s h o r t e s t  path  ( c l o c k w i s e  or
            c o u n t e r c l o c k w i s e )  to  a l i g n  with  the              The following three variants of the ants foraging simulation
         average  heading  of  neighbors .                   were applied:
  2
  3  Provide  your   f i n a l new heading  a f t e r  applying       1. The  original  NetLogo  model  (henceforth  simply  called
                t h e s e   r u l e s  ,  expressed  as  an  angle  in             “NetLogo”).
         degrees . The  r e s u l t  should  be  in JSON                                                                                2. The model in which the rule-governed ants of the original model
         format  only ,  with  the  keys and  v a l u e s  :     ’
                                                                        are replaced by LLM-governed ants (henceforth called “LLM”).             r a t i o n a l e  ’   ( value :  your  e x p l a n a t i o n ) and    ’
        new−heading  ’   ( value :  heading  in  degrees ) .       3. A hybrid model in which half of the ants are rule-governed and
                                                                      the other half are LLM-governed (henceforth called “Hybrid”).
  • Possible user prompt
                                                                   In all simulations, we used a colony of 10 ants, three food
  1  These  are  the   f l o c k i n g  parameters :                    patches to be exploited, and a stopping criterion of 1000 simulation
  2    −Maximum  s e p a r a t e  turn :  1 . 5 ,
                                                                             steps. Moreover, each experiment was repeated ﬁve times (with
  3    −Maximum  a l i g n  turn :  5 ,
  4    −Maximum cohere  turn :  3 ,                            diﬀerent  seeds). The eﬃcacy of each model was assessed by
  5    −Minimum  s e p a r a t i o n  :  1 . 5 ;                            quantifying the total amount of food gathered within these 1000
  6                                                               simulation steps.
  7  This   i s  your  c u r r e n t environment :
  8    −Current  heading :  138 deg ,
  9    −Neighbors  in  v i s i o n  r a d i u s :  neighbor_ 1 :  x :
               0 . 53 ,  y : −3 . 69 ,  heading :  248 deg ;         5.1.1 Food collection behavior
                                                                     Figure 3 shows the total amount of food collected over 1,000
  • Possible Response of the LLM                                simulation steps for the three diﬀerent model variants. NetLogo and
                                           LLM perform similarly in terms of the ants’ success in bringing food  1   {
  2       " r a t i o n a l e " :  Given  the  c u r r e n t  heading  of 13    back to the nest, with both models accumulating approximately 85
             8 degrees and one neighbor  a t   ( 0 . 53 , −3 .     units of food by the end of the simulation. However, the standard
           69 )  with  a heading  of 248 degrees , we        deviation for NetLogo is around 20, whereas LLM displays a much
                     f i r s t  c a l c u l a t e  the  s e p a r a t i o n  turn . The                                                               lower standard deviation of about 7.
             d i s t a n c e  to  the  neighbor   i s   s q r t ( 0 . 53^2
                                                                   In contrast, the Hybrid model outperforms the other two           + (−3 . 69 )^2 ) = 3 . 73 ,  which   i s  g r e a t e r
           than  the minimum  s e p a r a t i o n  d i s t a n c e  of      variants,  collecting an average  of approximately 95  units  of
             1 . 5 ,  so no  s e p a r a t i o n  turn   i s  needed .        food with  a  standard  deviation  of about  12. This  superior
           For alignment ,  the  average  heading  of       performance  is due  to  the combination  of  the  behavioural
            the  neighbor   i s  248 degrees . The
                                                                 diﬀerences between LLM-guided ants and rule-based ants. The
                 s h o r t e s t  path  to  a l i g n  with 248 degrees
                                                     zoomed inset in Figure 3, for example, shows that Hybrid starts           from 138 degrees   i s  c l o c k w i s e  ,  which   i s
              a  turn  of 110 degrees . However ,  the           returning food to the nest at around 20 simulation steps, whereas
          maximum  a l i g n  turn   i s  5 degrees ,  so we    LLM and NetLogo begin this process at about 40 steps. This means
           turn  5 degrees  c l o c k w i s e  to 143 degrees .     that, for some reason, the Hybrid variant is more eﬃcient in quickly
            For coherence ,   s i n c e   t h e r e    i s  only one
                                                           ﬁnding food sources.
           neighbor ,  the  average  heading towards
                                                     To  better  understand  the  signiﬁcance  of  the  observed            the  neighbor   i s  the same  as  the  neighbor
                            ’ s heading ,  248 degrees . The  s h o r t e s t        performance diﬀerences in the food collection, we analyzed the
  3     path  to  a l i g n  with 248 degrees from 143          variations in standard deviations between the models utilizing
            degrees   i s  c l o c k w i s e  ,  which   i s  a  turn       various  tests. These  tests are depicted in Figure 4 as groups
              of 105 degrees . However ,  the maximum
                                                               corresponding to the models. The Levene and Brown-Forsythe
            cohere  turn   i s  3 degrees ,  so we turn  3
            degrees  c l o c k w i s e  to 146 degrees . The        tests assess the homogeneity of variances between the groups,
                       f i n a l new heading   i s  146 degrees .  ,          with the Levene test utilizing the mean and the Brown-Forsythe
  4       " new−heading " :  146                                             test employing the median. Cohen’s d quantiﬁes the eﬀect size,
  5   }                                                                indicating the magnitude of the diﬀerence between two groups.




Frontiers in Artiﬁcial Intelligence                                   13                                                                frontiersin.org

## Страница 14

Jimenez-Romero et al.                                                                                                                                     10.3389/frai.2025.1593017Line chart showing food amount collected versus step number for three model va





    FIGURE 3
   Comparison of the total food collected across the three tested models: NetLogo (represented by the orange line), LLM (green line), and Hybrid (blue
     line). This visualization highlights the food collection performance differences among the different models over ﬁve runs with different seeds. The
    lines represent the means, while the shaded areas indicate the standard                                                                                              deviations.Bar chart comparing statistical metrics between model pairs: ``LLM vs NetLogo,'' ``LLM vs Hybrid,'' and ``NetLogo vs Hybrid.'' Metrics include Levene's p-value (green), Brown-Forsythe p-value (orange), Cohen's d (blue), and Kruskal p-value (pink). Cohen's d shows large values for ``LLM vs Hybrid'' and ``NetLogo vs Hybrid,'' while Kruskal p-value is prominent for ``LLM vs NetLogo.'' Other p-values are small across comparisons. The y-axis





    FIGURE 4
   Comparison of performance metrics of the food collection among LLM, NetLogo, and Hybrid. The Levene, Brown-Forsythe, and Kruskal-Wallis tests
    indicate signiﬁcant differences between Hybrid and the other models, while the LLM and NetLogo show no meaningful shifts in central tendency or
    overall distribution. For details, see the text.



The Kurskal-Wallis  test  (referred to as Kruskal in the  plot)     statistically signiﬁcant and practically noticeable diﬀerence between
assesses whether there are statistically signiﬁcant diﬀerences in the    the LLM and Hybrid groups. While the eﬀect size is small, it is
distributions, serving as a non-parametric test for medians.                still meaningful, indicating that Hybrid performs diﬀerently from
   The Levene and Brown-Forsythe tests for the LLM vs. NetLogo   LLM, albeit not drastically. The diﬀering variances further support
group yielded p-values around 0.0045, indicating a signiﬁcant    the notion that their behaviors are not merely a shift in location.
diﬀerence in variance and suggesting that the groups have an   The NetLogo vs. Hybrid group shows a notable and statistically
unequal spread. In contrast, the Cohen’s d value of 0.006 reﬂects   supported diﬀerence between the two models. The variances diﬀer
a small eﬀect size, suggesting nearly identical group means. The    signiﬁcantly, and although the eﬀect size  is modest at 0.23,  it
Kruskal-Wallis test produces a high value of 0.99 (truncated in the   remains consistent across analyses. This suggests that there  is
ﬁgure for improved visibility) indicating no statistical diﬀerence in    a meaningful distinction in performance between NetLogo and
the distributions. In summary, there are no practical or statistical   Hybrid.
diﬀerences observed between  the LLM and NetLogo groups    We were also interested in evaluating the eﬀectiveness of the
regarding the outcome. While the variances diﬀer slightly, there    three model variants regarding individual ants. Figure 5 depicts the
is no meaningful shift in central tendency or overall distribution.    average number of simulation steps taken by an ant to return to
The Levene, Brown-Forsythe, and Kruskal p-values for the LLM vs.     its nest after picking up food, presented as boxplots. Generally,
Hybrid group are all close to zero, indicating statistically signiﬁcant    ants in NetLogo (rule-governed ants) require fewer steps than
diﬀerences. Additionally, Cohen’s d eﬀect size is approximately 0.2,    those controlled by the LLM. The LLM-guided ants demonstrate
suggesting a small yet meaningful eﬀect. This analysis reveals a    consistent foraging behavior across the diﬀerent experiments,





Frontiers in Artiﬁcial Intelligence                                   14                                                                frontiersin.org

## Страница 15

Jimenez-Romero et al.                                                                                                                                 10.3389/frai.2025.1593017Box plot comparing the number of steps taken to reach three different food p





    FIGURE 5
   The average number of steps taken by an ant to return to its nest after picking up food (for food patches 1–3). The green boxplots represent the
    simulations of LLM, the orange boxplots those of NetLogo, while the blue boxplots show the results of Hybrid. Each boxplot spans from the ﬁrst to
    the third quartile, with the vertical line within the box indicating the median. The whiskers extend to represent the minimum and maximum number
    of steps taken, while the circles denote outliers.



TABLE 2  Statistics concerning the average amount of steps taken by an ant to return food to the nest.

 Food patch    Model variant    Mean       Std       Min      20%      50%      75%      Max

                LLM                      23.04             3.34              16.0              21.0              23.0              25.0              48.0

  1                  NetLogo                    21.0               5.3              13.0              17.0              20.0              24.0              46.0

                      Hybrid                    21.98             4.32              13.0              19.0              22.0             25.00             48.0

                LLM                        32.3              3.41              25.0              31.0              32.0              34.0              49.0

  2                  NetLogo                   30.16             4.93              22.0              27.0              29.0              32.0              45.0

                      Hybrid                    29.46             3.90              24.0              26.0              29.0             31.00             41.0

                LLM                      39.29             2.36              36.0              37.5              40.0              41.0              42.0

  3                  NetLogo                   38.11             2.02              35.0              37.0              38.0              39.0              42.0

                      Hybrid                    38.75             0.96              38.0              38.0              38.5             39.25             40.0


particularly for food patches 1 and 2. Notably, food patch 1 is   5.2 Experiment 2: bird ﬂocking simulation
the closest to the nest, while food patch 3 is the farthest away.  with knowledge-driven prompts
Detailed statistics, including the three quartiles, mean, standard
deviation, and minimum and maximum amounts of food collected,      The following two model variants were experimentally tested
are provided in Table 2.                                     and evaluated:
   Furthermore, we investigated the average number of steps taken
                                                                                1. The  original  NetLogo  model  (henceforth  simply  calledby an ant from leaving the nest until ﬁnding a food source, which
                                                                 “NetLogo”, like in the ant foraging case).is represented in Figure 6. We speciﬁcally track and count ants
                                                                                2. The model in which some of the rule-governed birds of thethat are not carrying food and are exploring their environment
                                                                            original model are replaced by LLM-governed birds (henceforthuntil they start to carry the food. Hybrid demonstrates consistent
                                                                            called “Hybrid”).performance in ﬁnding food patches 1 and 2. In contrast, LLM and
NetLogo display a more variable behavior during food searches.       In all simulations, we used a ﬂock of 30 birds and a simulation
Notably, concerning food patch 1, the models exhibit a higher    length of 800 steps. In the case of Hybrid, ﬁve of 30 rule-based birds
number of outliers, which can be attributed to the ants’ initial    are replaced by LLM-guided birds. Moreover, each experiment
exploration of the environment before encountering the food. A   was repeated ﬁve times (with diﬀerent seeds). The eﬀectiveness
notable outlier is observed in the context of NetLogo and food    of the ﬂocking behavior is evaluated by measuring the distances
patch 2, where an ant required 720 steps to ﬁnd food. Detailed   and angular disparities between birds across the entire simulation.
statistics are listed in Table 3.                                       Figure 7 depicts the ﬂocking simulation executed in the NetLogo





Frontiers in Artiﬁcial Intelligence                                   15                                                                frontiersin.org

## Страница 16

Jimenez-Romero et al.                                                                                                                                  10.3389/frai.2025.1593017Box plot showing the number of steps taken from leaving the nest to finding a food





    FIGURE 6
   Average number of steps taken by an ant from leaving the nest to ﬁnding a food source. Each boxplot spans from the ﬁrst to the third quartile, with
    the vertical line within the box indicating the median. The whiskers extend to represent the minimum and maximum number of steps taken, while the
    circles denote outliers.





TABLE 3  Statistics for the average amount of steps taken by an ant to ﬁnd and collect food.

 Food patch    Model variant    Mean        Std       Min      20%      50%      75%      Max

                 LLM                       79.65            63.25             25.0              43.0              53.0              92.0             342.0

  1                   NetLogo                   71.48            72.77             12.0              22.0              39.0              99.0             464.0

                      Hybrid                    71.42            68.88             12.0              31.0              47.0              86.0             466.0

                 LLM                       79.44            50.04             36.0              51.0              60.0              83.0             299.0

  2                   NetLogo                   93.74            102.09             21.0              33.0              56.0            116.50            720.0

                      Hybrid                    73.81            74.81            22.00            32.75            42.00            78.50            326.0

                 LLM                       92.29            36.53             39.0             66.50            105.0            112.50            144.0

  3                   NetLogo                  123.33           142.92             37.0              41.0              47.0              86.0             432.0

                      Hybrid                    61.25             6.18              53.0             58.25             63.0              66.0              66.0




environment, featuring a heterogeneous population of 25 rule-    congregate  at the outer peripheries of the ﬂocks, positioning
based and 5 LLM-guided birds.                                    themselves further away from the ﬂocks’ center. An example of this
                                                                 behavior is visualized in Figure 7 (see the ﬂock on the right) and
                                                                        also illustrated in Figure 9 which indicates the average distances
5.2.1 Flocking behavior                                 between birds. We hypothesize that this rather “conservative”
    Figure 8 compares  the  diﬀerences  in  the  birds’  heading    behavior of the LLM-guided birds contributes to greater heading
directions between two model variants, as outlined above. However,    diﬀerences among the rule-based birds of Hybrid, as this behavior
note that the heading diﬀerences between the rule-based birds and    introduces slight perturbations in the ﬂocking dynamics. Another
all other birds in model variant Hybrid (orange line) are separated    possible interpretation involves the  internal representation of
from the heading diﬀerences between the LLM-guided birds and all    distance within the LLM. Although we deﬁne distance in Euclidean
other birds of Hybrid (green line).                                  space and provide these distances as ﬂoat values to the language
   The results shown in Figure 8 allow to make the following   model,  it may interpret and represent distances in a diﬀerent
observations. While the two bird types of Hybrid show a similar   manner.
evolution of the heading diﬀerences, the rule-based birds of the       Figure 10  illustrates the  statistical analysis of the heading
original NetLogo model show somewhat lower heading diﬀerences.    diﬀerences between Hybrid (LLM and rule-driven birds) and
We anticipate that with longer simulation runs, the heading   NetLogo, which reveals disparities in the distributional properties
diﬀerences of the two model variants would converge to similar    of the experiments. Although the observed mean diﬀerence  is
values. We also observed that the LLM-guided birds tend to    relatively small, as indicated by a Cohen’s d of 0.16–suggesting





Frontiers in Artiﬁcial Intelligence                                   16                                                                frontiersin.org

## Страница 17

Jimenez-Romero et al.                                                                                                                                                          10.3389/frai.2025.1593017Screenshot of a NetLogo bird flocking simulation interface. The left panel has sl





    FIGURE 7
    Bird ﬂocking simulation in the NetLogo environment: yellow birds follow rule-based behavior, while red birds are guided by the                                                                                                                                                                                                  LLM.Line chart showing the heading difference over time (step number) for three model variants: Hybrid (LLM), Hybrid (NetLogo), and NetLogo. The x-axis ranges from 0 to 800 steps and the y-axis s





    FIGURE 8
   Comparison of bird ﬂocking heading differences across two simulation approaches: original NetLogo (blue line) and Hybrid (orange and green lines).
    In fact, the orange line shows the behavior of the 25 rule-based birds of Hybrid, while the green line presents the behavior of the 5 LLM-guided birds
    of Hybrid. The lines represent the means, while the shaded areas indicate the standard deviations.




a minor  eﬀect  size,  the  variance-based  tests provide  strong    We further investigated the behavior of rather staying  at
evidence of heterogeneity. Speciﬁcally, both Levene’s test and the    the border  of ﬂocks by examining  collisions between  birds,
Brown-Forsythe  test return extremely low p-values, indicating   which are deﬁned as occasions in which the Euclidean distance
that the assumption of homogeneity of variances  is  violated.   between two birds  is smaller than one. In  fact,  it turns out
Furthermore, the Kruskal-Wallis test yields a p-value close to zero    that, throughout a simulation, the LLM-guided birds try to avoid
as well, signifying statistically signiﬁcant diﬀerences in the overall    collisions; see Figure 11. In contrast, the rule-based birds from
distributions of the groups. In summary, these results suggest   Hybrid and those from NetLogo, exhibit a much higher number
that although central tendencies may be similar, the variance and    of collisions.
distributional shape diﬀer, indicating that the underlying behavior       Furthermore,  triggered  by  our  earlier  observations, we
of the models diverges substantially.                            examined the average number of neighbors of a bird, as shown




Frontiers in Artiﬁcial Intelligence                                   17                                                                frontiersin.org

## Страница 18

Jimenez-Romero et al.                                                                                                                                     10.3389/frai.2025.1593017Line chart showing the distance between agents over time (step number) for three





    FIGURE 9
   Comparison of average bird distances across the two tested model                                                                                                 variants.Bar chart comparing statistical metrics for the "Hybrid vs. NetLogo" model comparison. Metrics shown on the x-axis are Levene's p-value, Brown-Forsythe p-value, Cohen's d, and Kruskal p-value. The y-axis represents value magnitude from 0 to 0.16. Only Cohen's d shows a notable value, reaching approximately 0.16, while all p-values are essentially zero. This indicates a measurable effect size between the two models despite no





    FIGURE 10
   Boxplot comparing different test metrics of heading differences between Hybrid and NetLogo. Despite a small effect size, signiﬁcant differences in
    variance and distribution are evident. For details, see the text.



TABLE 4  Statistics for the average number of ﬂocking neighbors. The values are aggregated over all steps and experiments.

 Model       Mean      Median       Std        Min       20%       50%       75%       Max
  variant

  Hybrid (LLM)          6.27               5.40               4.23               1.00               2.75               5.40               8.63              17.80

  Hybrid                 9.23               9.44               4.30               1.04               6.44               9.44              12.25             16.76
  (NetLogo)

  NetLogo               11.42             11.24              6.27               1.04               6.02              11.24             16.87             22.56


in Figure 12. Hereby, we deﬁne two birds as neighbors if they are   5.3 Simulation length and experimental
at a distance greater than one (no collision) and within a distance  runs
d of at most ﬁve (that is, 1 < d ≤5). Moreover, we require a
heading diﬀerence of h ≤15. As expected, rule-based birds exhibit       In the bird ﬂock simulation, we empirically observed that
the highest number of neighbors, while the LLM-guided birds    collective behaviors stabilized after approximately 500 steps, with
display the lowest number, a result of their conservative behavior.    cluster formations remaining relatively unchanged in subsequent
Statistics on the average number of ﬂocking neighbors can be found    simulation steps. Therefore, extending the simulations beyond
in Table 4.                                                         the  chosen  limit  of 800  steps would  likely  have  provided




Frontiers in Artiﬁcial Intelligence                                   18                                                                frontiersin.org

## Страница 19

Jimenez-Romero et al.                                                                                                                                     10.3389/frai.2025.1593017Line chart showing the number of collisions over time (step number) for three mo





    FIGURE 11
    Collisions between birds. A collision occurs when the distance d between birds is at most one (that is, d                                                                                                                                               ≤1).Box plot showing the average number of neighbors versus step number for three model variants: Hybrid (LLM), Hybrid (NetLogo), and NetLogo. Each model is represented by colored boxes-green for Hybrid (LLM), orange for Hybrid (NetLogo), and blue for NetLogo. The x-axis represents the step number ranging from 0 to 7





    FIGURE 12
   Average number of neighbors: A neighbor is deﬁned as any entity within a distance d such that 1 ≤d ≤5, thereby excluding collisions. Furthermore,
   we establish a heading difference criterion of h ≤15.



minimal  additional  information  on  emergent  dynamics  or  6 Discussion
system stability.
   In contrast, for the ant foraging scenario, we acknowledge   6.1 Prompt strategies
that  a  longer  simulation  would  have  been  beneﬁcial  to
comprehensively   explore   long-term   emergent   behaviors,    We explored two complementary strategies for integrating
particularly   since  complete  depletion   of  food  resources   Large Language Models (LLMs) into multi-agent simulations: (i)
typically  occurs  around  2000  steps.  Our  choice  to  limit    a structured, rule-based approach in an ant foraging context, and
the  simulations  to  1000  steps  was  primarily  motivated     (ii) a principle-based, knowledge-driven approach in a bird ﬂocking
by  computational   costs  and   practical  time   constraints.    scenario. In both cases, our experiments demonstrated how LLMs
Thus, we  strongly recommend  that  future  studies  consider   can support swarm-like behaviors: guiding ants to locate and
longer  simulation  durations  to  more   fully  capture  and    retrieve food by following pheromone trails, and prompting “birds”
characterize   long-term   emergent   behaviors  and   overall    to coordinate alignment according to core ﬂocking principles.
system stability.                                                       Overall, the LLM-driven agents performed comparably to their





Frontiers in Artiﬁcial Intelligence                                   19                                                                frontiersin.org

## Страница 20

Jimenez-Romero et al.                                                                                                 10.3389/frai.2025.1593017




fully rule-based counterparts, but they sometimes displayed notable   can signiﬁcantly inﬂuence emergent group-level patterns. This
diﬀerences in how they interpreted and prioritized local cues when    underscores both the potential and the complexity of integrating
relying on text-based decision-making.                      LLMs into agent-based simulations, where subtle details of agent
  A key theme across both simulations was the importance    logic can greatly aﬀect collective behavior.
of iterative prompt-tuning, which proved essential for producing
consistent and context-appropriate responses. In the ant foraging
simulations, early prompts did not specify what ants should do if   6.2 Challenges
no pheromone or nest scent was present, leading to confusion or
inaction. Through multiple rounds of tuning, we added directives,        Finally, regarding potential drawbacks of our approach, two key
such as “move away from the nest when no pheromone signals    issues must be noted, computation time and cost:
are detected” that encouraged exploration. Similarly, clarifying that         First, the interaction between an agent (such as an ant or bird)
nest scent should take precedence over pheromone while carrying   and the remote LLM at each iteration of a simulation requires
food helped ants more  reliably locate and deposit resources.    signiﬁcantly more computation time compared  to  executing
Following these reﬁnements, the foraging performance of the LLM-    simple  rules  within NetLogo.  This  increase  primarily stems
driven ants nearly matched that of the standard NetLogo model.     from API latency, the computational complexity of large-scale
  A new insight arose from the hybrid simulations, in which   language model inference, and the associated natural language
a  portion  of  the  ant colony was  rule-based  while  the  rest    processing operations.  It  is important to clarify, however, that
was  LLM-driven. These mixed  colonies  often  outperformed   when using an external API (such as the OpenAI API), much
both  purely  rule-based and  purely LLM-based  groups. One    of  this computational burden  is oﬄoaded to the AI  service
possible explanation is that deterministic if-then logic eﬃciently    provider, thereby alleviating the direct computational cost from the
manages well-understood aspects of foraging, while LLM-driven    simulation user’s perspective.
exploration provides adaptability in more uncertain situations.       In our speciﬁc experiments, we observed  that each  step
Thus, combining traditional rules with text-based reasoning can    involving an LLM-driven agent  interaction  typically required
yield more robust foraging strategies. However, this seemingly    processing times on the order of seconds due to network latency
better performance of the hybrid populations warrants further   and model  response  times, whereas  conventional  rule-based
investigation. We recommend running the simulations for longer    simulations  executed  agent  interactions  within  milliseconds
durations so that the colony has enough time to collect any    or   less  per  simulation  step.  Thus,  although  signiﬁcantly
remaining pieces of food, which may help clarify the mechanisms   more  computationally  intensive  per  agent-step,  the method
driving this performance advantage.                              remains   practically   feasible   for   smaller-scale   exploratory
   In the bird ﬂocking simulations, using longer prompts that    simulations and  conceptual  validations,  as  demonstrated  in
highlighted alignment, separation, and cohesion improved stability.    this paper.
Early prompts did not deﬁne heading conventions (e.g., 0◦= north,       Second, utilizing GPT-4o through the OpenAI API inherently
90◦= east), causing erratic turns and reversals. After establishing    introduces token-based costs and dependencies associated with
the conventions and clarifying the short-turn logic (which favored    external model access, which may aﬀect simulation scalability,
minimal angular adjustments), the ﬂocks became more cohesive.    cost-eﬃciency, and reliability. To mitigate these potential issues,
However, LLM-driven birds generally stayed slightly farther from    the computational overhead could be signiﬁcantly reduced by
the ﬂock center and experienced fewer collisions than their rule-    deploying smaller, locally hosted LLMs, particularly after targeted
based counterparts, indicating that LLMs can interpret spatial cues   ﬁne-tuning tailored to speciﬁc simulation tasks.
in subtly diﬀerent ways while still maintaining coherent swarm      At the  outset  of  this research  (prior  to June  2024), we
behavior.                                                     experimented with multiple LLMs. Among those evaluated, GPT-
   In both scenarios, we observed that LLM decision-making   4o emerged as the most eﬃcient and successful in handling tasks,
can  function  eﬀectively  in  a  “stateless” manner,  relying on    consistently achieving the expected behavior. Other tested models
complete contextual details at every step. This guarantees that    often exhibited unreliable and erratic behavior, including ants
the model consistently acts on relevant information but also   randomly dropping food and failing to demonstrate expected self-
necessitates  highly  detailed  prompts.  Failing  to  include  key    organizing capabilities.
details—like pheromone  intensity  or  heading  conventions—       However,  it  is crucial to emphasize that our framework  is
can result in ambiguous or incorrect actions. Expanding this   not  inherently  tied  to GPT-4o or the OpenAI API.  Rather,
approach to incorporate short-term memory or more sophisticated   we explicitly designed our methodological framework to ensure
environmental representations could enable LLM-driven agents    adaptability and generality, allowing straightforward integration
to maintain internal states that more closely resemble those in   with alternative LLMs, including open-source and locally deployed
traditional agent-based models.                                        solutions. Although the experiments presented in this study utilized
    Together, these results conﬁrm that LLMs can serve as ﬂexible    a single external model, our methodological approach  is fully
engines for agent behaviors that align with swarm principles,    extendable and compatible with a variety of language models.
oﬀering adaptive, context-driven responses. They also highlight   Given the rapid progress in performance and resource eﬃciency of
how prompt design and iterative reﬁnement are central to achieving   LLMs, we anticipate future developments will further enhance the
the desired outcomes. Even small changes in the prompts, such as    feasibility and eﬀectiveness of locally deployed language models for
specifying the angle to rotate or how to handle conﬂicting signals,    the simulation of swarm behaviors.





Frontiers in Artiﬁcial Intelligence                                   20                                                                frontiersin.org

## Страница 21

Jimenez-Romero et al.                                                                                                 10.3389/frai.2025.1593017



TABLE 5 Summary of strengths and weaknesses of the proposed          Although our results show promise even in these relatively simple
LLM-driven multi-agent simulation approach across relevant evaluation
criteria.                                                swarm contexts, we believe that the true potential and comparative
                                                               advantage of integrating LLMs into agent-based systems would
  Criterion       Strengths         Weaknesses           be most pronounced in scenarios requiring agents with higher
  Adaptability          High ﬂexibility; agents       Increased variability may        levels of cognitive complexity or sophisticated principle-driven
                          quickly adapt to novel       lead to unpredictability        decision making. In such contexts, whether modeling complex
                          scenarios without            in agent behaviors,             social systems, strategic economic behavior, or adaptive ecological
                             explicit reprogramming.     requiring careful
                                                    monitoring.                  interactions, the ﬂexible knowledge representation, contextual
                                                                 understanding, and general reasoning capabilities of LLMs could
  Cognitive            Enhanced reasoning        Reduced transparency
  complexity               capabilities, enabling       and limited                  signiﬁcantly outweigh the additional computational  costs. We
                        nuanced,                     explainability of agent        summarize  the  strengths  and  weaknesses  of  our  approach
                          principle-driven            decision-making             in Table 5.
                        decision-making in          processes.
                           agents.                                         These advantages manifest  particularly in enabling agents
                                                                      to  autonomously  adapt  to  novel,  dynamic, and  cognitively
  Prompt design         Allows intuitive,          High sensitivity to
                                                        demanding scenarios without requiring extensive reprogramming                         natural-language          prompt wording; subtle
                            instructions, simplifying     changes can signiﬁcantly       or domain-speciﬁc rule engineering, a persistent challenge with
                         agent interaction and        aﬀect outcomes.               traditional hard-coded systems. Furthermore, LLMs’  ability to
                           task speciﬁcation.                                     integrate multiple knowledge domains and leverage implicit world
  Generalization         Strong potential for        Dependence on external       knowledge oﬀers the potential for more nuanced and contextually
                            transfer learning due to     AI services constrains         appropriate agent behaviors that would otherwise require more
                          extensive knowledge          scalability and incurs
                            base, enabling              higher latency and usage      complex rule systems.
                             applicability across            costs.                          Additionally, in line with our research objectives, the toolchain
                           diverse scenarios.                          we present, integrating NetLogo simulations with LLM interactions
  Computational cost    Computational burden      Higher total                  via Python extension and the OpenAI API, oﬀers a practical
                            shifted to external          computational overhead,       contribution in terms of accessibility and pedagogical potential.
                           service provider; low         latency, and API
                                                             NetLogo, widely recognized for its educational utility and intuitive
                             local computational        dependency compared to
                      demands.                  conventional rule-based         interface, provides a  suitable platform for exploring complex
                                                 methods.                  multi-agent systems. By incorporating LLMs into this familiar
  Scalability             Conceptually scalable for     Practically limited          and user-friendly environment, our approach facilitates the study
                           cognitively complex           scalability due to              of cognitively richer and more adaptive agent behaviors, while
                             tasks, exploiting              external API call              also lowering the barrier to entry for researchers, educators, and
                         general-purpose              constraints, latency, and
                        knowledge.                  associated costs.             students interested in experimenting with advanced AI techniques
                                                                     in agent-based modeling. We believe that this integration can
                                                               support broader engagement with simulation-based research and
7 Conclusion                                               teaching, especially in interdisciplinary contexts where accessibility
                                                        and interpretability are essential.
   By applying LLMs to two  classic multiagent models, ant          It is important to acknowledge certain practical considerations
foraging and bird ﬂocking, this study shows that LLMs can serve    that accompany our LLM-based approach to multi-agent systems.
as a viable alternative or complement to traditional rule-based logic   The integration of LLMs into agent-based simulations introduces
in achieving eﬀective swarm-like dynamics.                          signiﬁcant computational overhead compared to traditional rule-
   In ant foraging simulations, LLM-guided ants gathered food   based implementations, with each agent-LLM interaction requiring
at rates comparable to ants of the standard NetLogo model, as   network communication and remote inference that substantially
long as their instructions were meticulously designed. Moreover,    increases simulation time.  Additionally, accessing commercial
hybrid colonies that integrated LLM-driven and rule-based ants  LLM APIs like GPT-4o incurs token-based costs that scale with
showed a promising trend of improved performance compared to    simulation complexity, agent population, and runtime duration.
uniform groups, suggesting that the combination of deterministic   These resource implications must be weighed against the beneﬁts
eﬃciency and text-based reasoning can be mutually beneﬁcial and    of enhanced agent capabilities and behavioral sophistication.
warrants further investigation. In bird ﬂocking, LLM-driven agents       Future implementations might mitigate computational costs
adhered to the separation, alignment, and cohesion principles to   through optimizations such as local model deployment, periodic
form cohesive ﬂocks. While heading convergence sometimes lagged    rather than continuous LLM consultation, or the distillation of
behind purely rule-based simulations, the resulting formations   LLM-derived insights into more eﬃcient specialized models that
remained  visually  coherent.  In  particular, LLM-based  birds   maintain key behavioral characteristics while reducing inference
adopted slightly more peripheral positions, indicating that nuanced    requirements.
diﬀerences in textual instructions, such as how distance and turning      Taken together, these considerations not only illustrate the
are interpreted, can shape global ﬂock patterns.                        potential of LLMs in agent-based systems, but also remind us
   These two experimental  cases were used  to explore our    of the importance of thoughtful design when bringing these
main research objectives: to demonstrate how structured, rule-    technologies into simulation contexts. Our ﬁndings highlight the
based prompts and knowledge-driven prompts could be eﬀectively    central role of iterative prompt tuning in shaping how LLMs
incorporated into simulations of collective emergent behavior.   behave within multi-agent environments. Careful attention to the


Frontiers in Artiﬁcial Intelligence                                   21                                                                frontiersin.org

## Страница 22

Jimenez-Romero et al.                                                                                                 10.3389/frai.2025.1593017




length, structure, and clarity of the prompts is essential to achieve   Blum was supported by grant PID2022-136787NB-I00 funded by
consistent, context-aware responses. At the same time, this need   MCIN/AEI/10.13039/501100011033. This research was supported
for well-crafted prompts opens up exciting possibilities for future   by the EUTOPIA Science and Innovation Fellowship Programme
work. More complex simulations could beneﬁt from increased   and funded by the European Union Horizon 2020 programme
LLM adaptability, especially if supported by mechanisms such as   under the Marie Sklodowska-Curie grant agreement No 945380.
partial memory, contextual awareness, or reinforcement signals
that allow agents to go beyond stateless behavior and respond in
more nuanced, dynamic ways.                     Conﬂict of interest
    Ultimately, this work underscores the potential for advanced
language  models,  guided by  carefully  designed  prompts,  to      The authors declare that the research was conducted in the
enrich or even extend the capabilities of traditional agent-based   absence of any commercial or ﬁnancial relationships that could be
models, oﬀering new perspectives on swarm intelligence,  self-   construed as a potential conﬂict of interest.
organization, and emergent behaviors. Beyond simulation, these
insights could also inform real-world applications, particularly in
swarm robotics, where the ability to generate ﬂexible, context-  Correction note
aware  behavior on  the ﬂy may open new  possibilities  for
autonomous coordination, exploration, and collective problem    A correction has been made to this article. Details can be found
solving in dynamic environments.                                             at: 10.3389/frai.2025.1771737.

Data availability statement                                      Generative AI statement

   The  datasets  presented  in  this  study  can  be found  in                                                         The author(s) declare that no Gen AI was used in the creation
online repositories. The names of the repository/repositories and                                                                      of this manuscript.
accession number(s) can be found below: https://github.com/
crjimene/swarm_gpt.
                                          Publisher’s note
Author contributions
                                                                           All  claims  expressed  in  this   article  are  solely  those
                                                                      of  the  authors and do  not  necessarily  represent  those  of
    CJ-R: Methodology, Data curation, Writing – review & editing,
                                                                          their  aﬃliated  organizations,  or  those  of  the  publisher,
Investigation, Writing – original draft, Conceptualization, Funding
                                                                   the  editors and  the  reviewers. Any  product  that may  be
acquisition, Formal analysis, Software, Resources. AY: Writing
                                                                   evaluated  in  this  article,  or  claim  that may  be made  by
– original draft, Visualization, Methodology, Writing – review
                                                                                          its  manufacturer,   is  not  guaranteed  or  endorsed  by  the
& editing, Software, Formal analysis, Investigation. CB: Funding
                                                                       publisher.
acquisition, Validation, Supervision, Writing – review & editing,
Writing – original draft, Investigation.

                                    Author disclaimer
Funding
                                                                   This article reﬂects only the author’s view and the EU Research
   The author(s) declare that ﬁnancial support was received    Executive Agency is not responsible for any use that may be made
for the research and/or publication  of  this  article. Christian    of the information it contains.


References


   Amblard, F., Daudé, E., Gaudou, B., Grignard, A., Hutzler, G., Lang, C., et al. (2015).       Dasgupta, I., Kaeser-Chen, C., Marino, K., Ahuja, A., Babayan, S., Hill, F., et al.
“Introduction to NetLogo,” in Agent-Based Spatial Simulation with Netlogo (London:     (2023). Collaborating with language models for embodied reasoning. arXiv [preprint]
Elsevier), 75–123. doi: 10.1016/B978-1-78548-055-3.50003-4                             arXiv:2302.00763.

   Bianchi,    F.,   and   Squazzoni,    F.   (2015).   Agent-based   models   in        Fang, Y., and Dickerson, S. J. (2017). “Achieving swarm intelligence with spiking
sociology.  Wiley  Interdiscip.  Rev.  Comput.  Stat.  7,  284–306.  doi:  10.1002/     neural oscillators,” in 2017 IEEE International Conference on Rebooting Computing
wics.1356                                                                    (ICRC) (Washington, DC: IEEE), 1–4.
                                                                                      Feng, S., Wang, Z., Wang, Y., Ebrahimi, S., Palangi, H., Miculicich, L., et al. (2024).
   Chang, Y., Wang, X., Wang, J., Wu, Y., Yang, L., Zhu, K., et al. (2024). A survey
                                                                      Model swarms: Collaborative search to adapt llm experts via swarm intelligence. arXiv
on evaluation of large language models. ACM Trans. Intellig. Syst. Technol. 15:1289.
                                                                                           [preprint] arXiv:2410.11163. doi: 10.48550/arXiv.2410.11163
doi: 10.1145/3641289
                                                                                Gao, C., Lan, X., Li, N., Yuan, Y., Ding, J., Zhou, Z., et al. (2024). Large language
   Chen, L. (2012). Agent-based modeling in urban and architectural research: a brief    models empowered agent-based modeling and simulation: a survey and perspectives.
literature review. Front. Architect. Res. 1, 166–177. doi: 10.1016/j.foar.2012.03.003        Humanit. Soc. Sci. Commun. 11, 1–24. doi: 10.1057/s41599-024-03611-3





Frontiers in Artiﬁcial Intelligence                                   22                                                                frontiersin.org

## Страница 23

Jimenez-Romero et al.                                                                                                 10.3389/frai.2025.1593017





   Gao, C., Lan, X., Lu, Z., Mao, J., Piao, J., Wang, H., et al. (2023). s3: Social-network        Park,  J.  S., O’Brien,  J. C., Cai, C., Morris, M.  R., Liang,  P., and Bernstein,
simulation system with large language model-empowered agents. arXiv [preprint]    M.  (2023).  “Generative  agents:  Interactive  simulacra  of human  behavior,”  in
arXiv:2307.14984. doi: 10.2139/ssrn.4607026                                            Proceedings of the 36th Annual ACM Symposium on User Interface Software and
                                                                                  Technology (New York, NY: Association for Computing Machinery).
   Heckbert, S., Baynes, T., and Reeson, A. (2010). Agent-based modeling in ecological
economics. Ann. N. Y. Acad. Sci. 1185, 39–53. doi: 10.1111/j.1749-6632.2009.05286.x          Putra,  R. V. W.,  Marchisio,  A., and Shaﬁque, M.  (2024). SNN4Agents: a
                                                                           framework for developing energy-eﬃcient embodied spiking neural networks for
   Hecker,  J. P., and Moses, M. E. (2015). Beyond pheromones: evolving error-
                                                                        autonomous  agents. arXiv  [preprint]  arXiv:2404.09331.  doi:  10.3389/frobt.2024.
tolerant, ﬂexible, and scalable ant-inspired robot swarms. Swarm Intellig. 9, 43–70.
                                                                            1401677
doi: 10.1007/s11721-015-0104-z
                                                                           Qu,   Y.   (2024).   Federated   learning   driven   large   language   models
    Jiao,  A.,  Patel, T.  P., Khurana,  S., Korol, A.-M., Brunke,  L., Adajania, V.
                                                                                             for  swarm   intelligence:   a   survey.   arXiv   [preprint]   arXiv:2406.09831.
K.,  et  al.  (2023). Swarm-GPT:  combining  large  language  models  with  safe
                                                                                               doi: 10.48550/arXiv.2406.09831
motion planning for robot choreography design. arXiv [preprint] arXiv:2312.01059.
doi: 10.48550/arXiv.2312.01059                                                          Reynolds, C. W. (1987). “Flocks, herds and schools: a distributed behavioral model,”
                                                                                          in Proceedings of the 14th Annual Conference on Computer Graphics and Interactive
   Jimenez Romero,  C.,  Yegenoglu,  A.,  Pérez  Martín,  A.,  Diaz-Pier,  S., and
                                                                                      Techniques, 25–34.
Morrison, A.  (2024). Emergent communication enhances foraging behavior  in
evolved swarms controlled by spiking neural networks. Swarm Intellig. 18, 1–29.         Strobel,   V.,  Dorigo,  M.,  and   Fritz,  M.   (2024).  LLM2Swarm:  robot
doi: 10.1007/s11721-023-00231-6                                              swarms    that    responsively    reason,    plan,   and    collaborate   through
                                                                    LLMS.    arXiv    [preprint]    arXiv:2410.11387.    doi:    10.48550/arXiv.2410.
   Junprung, E. (2023). Exploring the intersection of large language models and
                                                                            11387
agent-based modeling via prompt engineering. arXiv [preprint] arXiv:2308.07411.
doi: 10.48550/arXiv.2308.07411                                                               Talebirad,  Y., and  Nadiri, A.  (2023).  Multi-agent  collaboration:  harnessing
   Kannan, S. S., Venkatesh, V. L., and Min, B.-C. (2024). “Smart-LLM: Smart multi-     the  power  of   intelligent LLM  agents.  arXiv  [preprint]  arXiv:2306.03314.
agent robot task planning using large language models,” in 2024 IEEE/RSJ International     doi: 10.48550/arXiv.2306.03314
Conference on Intelligent Robots and Systems (IROS) (Abu Dhabi: IEEE), 12140-12147.        Tisue,  S., and  Wilensky,  U.  (2004).  “Netlogo:  a  simple  environment  for
    Li, X., Wang,  S., Zeng,  S., Wu, Y., and Yang, Y. (2024). A survey on llm-    modeling complexity,” in International Conference on Complex Systems (Boston, MA),
based multi-agent systems: workﬂow, infrastructure, and challenges. Vicinagearth 1:9.     16–21.
doi: 10.1007/s44336-024-00009-2                                                       Wilensky,  U.  (1997).  NetLogo  Ants  Model.  Evanston,   IL:  Center  for
   Liu,  H.,  Li,  Z.,  Huang,  K., Wang,  R.,  Cheng,  G., and  Li,  T.  (2024a).    Connected  Learning and Computer-Based Modeling, Northwestern  University.
Evolutionary  reinforcement   learning  algorithm   for   large-scale  multi-agent     Available  online   at:  http://ccl.northwestern.edu/netlogo/models/Ants  (Accessed
cooperation  and  confrontation  applications.   J.  Supercomput.  80,  2319–2346.    December 18, 2025).
doi: 10.1007/s11227-023-05551-2                                                       Wilensky, U. (1998). NetLogo Flocking Model. Evanston, IL: Center for Connected
   Liu, H.-S., Kuroki, S., Kozuno, T., Sun, W.-F., and Lee, C.-Y. (2024b). “Language-    Learning and Computer-Based Modeling, Northwestern University. Available online
guided pattern formation for swarm robotics with multi-agent reinforcement learning,”      at:  http://ccl.northwestern.edu/netlogo/models/Flocking  (Accessed December  18,
in 2024 IEEE/RSJ International Conference on Intelligent Robots and Systems (IROS)     2025).
(Abu Dhabi: IEEE), 8998–9005.                                                         Wilensky, U. (1999). NetLogo. Evanston, IL: Center for Connected Learning and
   Liu,  Y.,  Zhou,   Z.,  Liu,   J.,  Chen,   L.,  and  Wang,   J.  (2024c).  Multi-    Computer-Based Modeling, Northwestern University. Available online at: http://ccl.
agent   formation    control   using    large   language   models.    TechRxiv.     northwestern.edu/netlogo/ (Accessed December 18, 2025).
doi: 10.36227/techrxiv.172954477.70259514/v1                                         Wooldridge, M. (2009). An Introduction to Multiagent Systems. Hoboken, NJ: John
   Macal, C. M., and North, M. J. (2009). “Agent-based modeling and simulation,”    Wiley & Sons.
in Proceedings of the 2009 Winter Simulation Conference (WSC) (Austin, TX: IEEE),       Zhu, X., Chen, Y., Tian, H., Tao, C., Su, W., Yang, C., et al. (2023). Ghost in the
86–98.                                                                                  minecraft: Generally capable agents for open-world environments via large language
   Ning, Z., and Xie, L. (2024). A survey on multi-agent reinforcement learning and its    models with text-based knowledge and memory. arXiv [preprint] arXiv:2305.17144.
application. J. Automat. Intellig. 3, 73–91. doi: 10.1016/j.jai.2024.02.003                     doi: 10.48550/arXiv.2305.17144





Frontiers in Artiﬁcial Intelligence                                   23                                                                frontiersin.org
