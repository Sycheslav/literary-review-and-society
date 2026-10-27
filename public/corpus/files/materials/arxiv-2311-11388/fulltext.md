---
id: arxiv-2311-11388-text
type: material
title: Machine Culture
work_id: arxiv-2311-11388
source_url: https://arxiv.org/pdf/2311.11388v1
retrieved_at: '2026-10-27'
conversion: pdf_text_extraction
quality_note: Текст извлечён из PDF с сохранением номеров страниц. Порядок колонок,
  таблицы, формулы и подписи могут быть искажены; рисунки доступны по ссылке на PDF.
  Это текстовая конверсия, не визуально эквивалентный оригинал.
language: original
sha256_text: 76c40fa1f2a945c16452fc964b71c752726b063710c77b1061dd9154522f6b33
---

> Источник: [https://arxiv.org/pdf/2311.11388v1](https://arxiv.org/pdf/2311.11388v1). Текст извлечён из PDF с сохранением номеров страниц. Порядок колонок, таблицы, формулы и подписи могут быть искажены; рисунки доступны по ссылке на PDF. Это текстовая конверсия, не визуально эквивалентный оригинал.

## Страница 1

Machine Culture


Levin Brinkmann,* †1 Fabian Baumann,†1 Jean-François Bonnefon,†2 Maxime Derex,†4
Thomas F. Müller,†1 Anne-Marie Nussberger,†1 Agnieszka Czaplicka,1 Alberto Acerbi,3
Thomas L. Griffiths,5 Joseph Henrich,6 Joel Z. Leibo,7 Richard McElreath,8 Pierre-Yves
Oudeyer,9 Jonathan Stray10, Iyad Rahwan* †1
* Correspondence: brinkmann@mpib-berlin.mpg.de ; rahwan@mpib-berlin.mpg.de
† Equal contributions

1 Max Planck Institute for Human Development, Center for Humans & Machines, Lentzeallee
94, Berlin 14195, Germany
2 Toulouse School of Economics 1, Esplanade de l'Université, 31080 Toulouse Cedex 06,
France
3 Department of Sociology and Social Research, University of Trento, Italy
4 Institute for Advanced Study in Toulouse 1, Esplanade de l’Université, 31080 Toulouse
Cedex 06, France
5 Department of Psychology & Department of Computer Science, Princeton University,
Princeton, NJ 08540
6 Department of Human Evolutionary Biology, Harvard University, 11 Divinity Ave,
Cambridge, MA 02138, USA
7 DeepMind Technologies Ltd, London, United Kingdom
8 Max Planck Institute for Evolutionary Anthropology, Leipzig, Germany
9 Inria, Flowers team, Université de Bordeaux, France
10 Center for Human-Compatible Artificial Intelligence, University of California, Berkeley, USA



Abstract:
The ability of humans to create and disseminate culture is often credited as the single most
important factor of our success as a species. In this article, we explore the notion of machine
culture: culture generated or mediated by machines. We argue that Artificial Intelligence (AI)
is simultaneously transforming the cultural evolutionary processes of variation, transmission,
and selection. These impacts range from recommender algorithms altering social learning
dynamics, over AI as cultural models forming a novel mode of cultural transmission, to AI
agents becoming participants in the generation of cultural artifacts themselves–from game
strategies, to visual art, to scientific results. We provide a conceptual framework for studying
the ongoing and likely future impact of AI on cultural evolution, and present a research
agenda for the study of machine culture.

Introduction

The ability of humans to create and disseminate culture is considered as the single most
important factor in our species’ dominance on earth 1. The evolution of human culture has
been the subject of extensive study in all of the behavioral sciences, including anthropology
1, psychology 2, cognitive science 3, biology 4, linguistics 5,6, archaeology 7, sociology 8 and
economics 9.

## Страница 2

Culture evolves through the production of diverse traits (variation), their diffusion
(transmission), and changes in traits’ frequency due to individuals’ preferences (selection).
Major shifts in these three components can greatly impact cultural evolution. For instance,
between 1300 and 1600, European culture experienced successive major shifts due to
increased exposure to Chinese technology such as gunpowder, which changed the nature of
warfare (variation)10; Gutenberg’s invention of the printing press (transmission)11; and
renewed interest in classical ideas and values, such as classical ideals of artistic expression,
during the Renaissance (selection)12. When such significant changes occur closely together,
they leave a lasting impact on culture.

While new technologies have always affected the course of cultural evolution, in this article
we argue that intelligent machines will exert a transformative influence on cultural evolution
through their impact on all three channels: variation, transmission, and selection. This
process has already begun in the early days of the Internet, with machine-based content
ranking by search engines and social media feed algorithms influencing what information
people get from others. More recently, generative algorithms have begun participating in the
creation of cultural artifacts themselves. We are not only observing a transformation of
human culture but also its evolution into machine culture. This article aims to provide
researchers across disciplines with a primer and a roadmap for navigating this monumental
event. As the impact of an increasingly digital society on cultural evolution has been
explored elsewhere 13, we specifically focus on the current and potential impact of intelligent
machines on cultural evolution. For the purposes of this article, we use the terms “intelligent
machines” and “AI” interchangeably, with AI referring to machines that perceive their
environment and take actions that maximize their chances of success14.


Examples of machine-driven cultural evolution

We begin by presenting empirical evidence of machine cultural evolution, setting the stage
for a detailed exploration through a unifying framework. Through four pivotal examples, we
illustrate the diverse ways intelligent machines are transforming cultural evolutionary
dynamics. FGenerative machines, such as text-to-image algorithms, are contributing to the
variety of cultural artifacts. Models drawing upon reinforcement learning are pushing humans
onto novel ground, for instance in the ancient game of Go and beyond. Large language
models (LLMs) are facilitating the transmission of cultural knowledge and redefining the
value of human intellectual skills. Meanwhile, transmission pathways are rewired by
recommender systems selecting what and from whom humans learn. At first glance, the
examples provided might seem to pertain to vastly different technological areas, and to
translate into a collection of unrelated effects. But already at present, machines are starting
to incorporate features from several of the delineated technologies (e.g., reinforcement
learning enhances generative AI), and individual technologies operate across multiple levels
(e.g., generative AI provides novel ideas but also recommendations for refinement).

## Страница 3

Generative AI: Cultural recombination





 Figure 1. Images generated by Dall-e based on the prompt “an armchair in the shape of
 an avocado. an armchair imitating an avocado.” (OpenAI)


Generative AI has seen two significant waves of innovation in recent years. The inception of
Generative Adversarial Networks (GANs) in 2014 by Goodfellow et al. enabled the
algorithmic generation of high-fidelity images 15. GANs offered capabilities beyond the
generation of lifelike images—they also have the ability to blend or interpolate, giving birth to
novel creations, such as fantasy lifeforms 16. Subsequent advancement in 2022 saw the
advent of diffusion-based text-to-image generative AI systems such as Dall-e, Midjourney,
and StableDiffusion. These models largely improved the recombination power of these early
models by generating high-resolution images conditioned on text descriptions 17–19. The
original Dall-e, now surpassed by other models in terms of image quality, demonstrated such
recombination capabilities impressively 17: When prompted to produce “an armchair in the
shape of an avocado”, it creatively recombined these two distinct concepts (see Figure 1).

These models can thus increase cultural variation by helping humans produce new and
relevant recombinations, which are sometimes recognized as works of art, sold at
prestigious auction houses 20. While recombination oftentimes forms the foundation of
human creativity 21, it is still debated whether and in what ways machines can generate
relevant content beyond the boundaries of human culture. Even simple latent
representations have been shown to disentangle the semantic meaning of linguistic
concepts 22. Similarly, text-to-image models use language as a cognitive tool to disentangle
and consequently recombine visual concepts 23. However, the concepts these models build
upon are harvested from human culture. As such, text-to-image models may be limited to the
concepts defined and demonstrated by humans in the underlying dataset. However, Lisi et
al. demonstrated that generative AI models can also produce novel “future art” by explicitly
avoiding classification into established artistic movements–the result is evaluated as more
creative than prestigious contemporary works created by human artists 24. Similar methods,
when applied to engineering, can lead to the discovery of novel and superior designs 25.

## Страница 4

Generative AI in the arts exemplifies the dual nature of machines as cultural artifacts and
creators thereof. On the one hand, generative algorithms are increasingly presented and, to
some extent, recognized as authors of art 20. Simultaneously, they become subjects of a
cultural process where different machines are compared, distributed, modified, and
eventually abandoned.

Reinforcement learning: Cultural innovation

In 2016, AlphaGo defeated Lee Sedol, the world champion Go player, with a series of four
victories over five games. Remarkably, AlphaGo managed to surprise Sedol with distinctively
nonhuman gameplay. In particular, move 37 in the second game was considered extremely
unconventional, estimated by AlphaGo itself to have a 1 in 10,000 chance of being made by
a human (see Figure 2.A) 26. The unconventional gameplay of AlphaGo likely originated in its
self-play training: While its training started with reproducing human gameplay from a large
database, AlphaGo also trained through self-play, selecting promising but uncertain moves
and evaluating their success against itself 27. Thereby, it iteratively improved and developed
novel game strategies. It was one of these innovative, self-trained strategies that took Lee
Sedol by surprise. As it turned out, it was not even necessary for the model to start from
learning human gameplay at all. The successor of AlphaGo, named AlphaGo Zero, ignored
all of the accumulated Go knowledge of humankind 27. Starting from a blank slate, it was
able to rediscover human Go strategies, and eventually surpassed its creators.





 Figure 2. A AlphaGo, in its match against Go world champion Lee Sedol, made a highly
 unusual and strategic 37th move by placing its stone further from the edge, towards the
 center of the board, deviating from the traditional strategy of securing territory along the
 periphery during the early stages of the game. With this unconventional move, AlphaGo
 not only broke with centuries-old Go traditions but also paved the way for its ultimate
 victory in the match. B (reproduction based on 28) Decision quality of professional Go
 players as evaluated by a superhuman AI. Decision quality significantly increased since
 Lee Sedol was beaten by AlphaGo on March 15, 2016 (shaded area).


The innovations generated by AlphaGo and AlphaGo Zero soon entered human culture, as
shown by research comparing human gameplay before and after the AI’s introduction 28. The
decision quality, as measured by an open source variant of AlphaGo Zero, showed very little

## Страница 5

improvement in human gameplay from 1950 to 2016, followed by a sudden improvement
after the introduction of AlphaGo in March 2016 (see Figure 2.B)29,30. This improvement was
not solely the result of humans copying AlphaGo strategies, though. It also reflected an
unexpected shift, wherein humans started developing moves that were qualitatively distinct
both from previous human moves and from the novel moves introduced by AI. Overall,
AlphaGo provided an early and quantifiable example of machine culture, in which machines
generated novel variation in cultural traits through genuine, nonhuman innovation. This was
followed by a major transition into an even broader range of traits as the result of humans
building on the previous discoveries made by AI.

Large Language Models: Cultural Transmission and Skill
Re-valuation

The release of ChatGPT, a widely accessible Large Language Model (LLM), has
revolutionized how we interact with AI, using it to learn, brainstorm, and refine ideas (see
Figure 3). Trained on extensive human text data, both historical and contemporary, LLMs act
as models of human culture 23, facilitating information transmission across individuals and
generations. Soon enough, students asked LLMs to write their homework 31; knowledge
workers used LLMs (at their own perils) to automatically extract and summarize content they
needed 32; and software developers widely adopted LLMs as powerful code-writing
assistants 33. LLMs are not only content creators, but also, for better or worse, sources of
knowledge and learning opportunities. Thereby, ChatGPT exemplifies social learning from
machines.

## Страница 6

 Figure 3. We asked GPT-4 to challenge a summary (also created by GPT-4) of the
 framework section of this paper.

As the capabilities and usages of LLMs continue to develop, the value of certain human
skills will shift. Some skills may lose value quickly, especially in language-related and
cognitively demanding occupations such as translation, copywriting, or proofreading 34.
Occupations with more creative uses of language may follow, given that LLMs may soon
surpass the creativity of humans as measured by standardized tests 35. Even though not all
occupations will be affected in the short-term, a recent survey projects that approximately
20% of workers will see an impact of LLMs on at least 50% of their tasks 34. Meanwhile,
other skills may gain in value — for instance, skills that allow efficient collaboration with
LLMs, such as prompt engineering (i.e., the skilful writing of instructions to get LLMs to do
what we want) 36. Consequently, human creativity is experiencing a remarkable shift 37. It is
no longer focused on the generation of final outputs, but moving towards the interactions
with machines that are progressing from explicit prompts to more natural conversations 38.
Workers who invest in related skills may outperform workers who do not, potentially
accelerating the adoption of LLMs and further increasing the value of knowing how to
collaborate with them.

Recommender Systems: Cultural rewiring

The digital age is so data-rich that it has become increasingly hard for humans to navigate
available information. In this abundance, recommender systems that manage and filter
information play a silent but increasingly important role that is easily overlooked given how

## Страница 7

seamlessly these systems have integrated into our everyday digital lives. These systems
select and prioritize items based on a variety of explicit and implicit features, including
personal interests, control settings, past user behavior, and the behavior of similar users.
While recommender systems do not add variation in cultural traits, they have been shown to
greatly impact cultural selection and transmission.





 Figure 4. Two cases of cultural rewiring including the user interfaces (top) and the
 schematic depiction of the underlying mechanism (bottom). A Friendship recommendation
 on an online platform (e.g. X or LinkedIn). A new social tie is recommended to the green
 user. B Collaborative filtering for item recommendations. The recommender system
 suggests a book to a user (right) based on the correlations in co-purchases of other items
 (movie and music album) with a second user (left).


By promoting new social ties (who to follow on X (formerly Twitter), to date on Tinder, or to
work with on Linkedin), recommender systems change the people we are exposed to,
ultimately altering the structure of our social networks and hence pathways of information
flows 39, see Figure 4 A. But recommender systems can also bypass network structures,
exerting an even more direct impact on which cultural content or products we are exposed
to. For example, e-commerce websites and streaming platforms use recommender systems
to steer customers through the vast space of available products based on content and
collaborative filtering. Content filtering matches information about a customer’s consumption
history with the attributes of all available products to make suggestions about related
purchases: a customer who has recently purchased a pair of running shoes may be offered
other running equipment that matches the shoes in terms of price and design 40. Meanwhile,
collaborative filtering 41 makes recommendations based on less obvious patterns of
correlations in users’ profiles: if users A and B overlap in their previously consumed movies
and music, the recommender system might suggest content of a completely different kind,
e.g. recommend a book to A that B liked (see Figure 4 B). In sum, recommender systems
impact cultural evolution by rewiring our social networks and altering information flows such
that they can have a critical influence on the dynamics of cultural markets 42–44.

## Страница 8

A framework for machine-driven cultural
evolution

Building on these exemplary instances of how machine technologies may impact cultural
evolution, we will now map out a systematic framework for studying AI’s potential to shape
cultural evolutionary processes.





 Figure 5. Examples of machine culture. A. The generation of novel cultural artifacts
 through AI. B. AI-enabled transmission and potential mutation of cultural artifacts. C. AI
 selects between different cultural artifacts. D. Human selects among diverse algorithms.


The science of cultural evolution is concerned with the change of socially transmitted (i.e.
cultural) traits over time 45,46. Cultural traits can be cognitive representations or expressed in
behaviors or artifacts 47. The key components of cultural evolution are variation, transmission
and selection. Variation refers to the existence of different cultural traits within a population.
Transmission involves the spread of cultural information from one individual to another
through social learning mechanisms such as observation and teaching. During this
transmission, information losses often occur, affecting the preservation of cultural artifacts.
Selection occurs when certain cultural traits are more likely to be adopted by individuals due
to factors such as their usefulness, popularity, or compatibility with existing cultural norms.
Crucially, both the selection of specific traits and variations in transmission fidelity, contingent
on the characteristics of the traits, can influence their prevalence over time. We anticipate
that machine technologies will affect each of these three components (see Figure 5), which
is bound to result in major impacts on cultural evolution.

## Страница 9

Table 1. Tentative conjectures about ways in which machines might shape the processes of
cultural evolution.

                     Machine Capability               Possible Impact on Culture

Variation      Asocial learning at unprecedented scale  Emergence of solutions culturally alien to
             and speed (e.g., reinforcement learning)  humans

            Superhuman model complexity           Generation of solutions unconceivable by
                                                               collective human intelligence and human
                                                      cumulative cultural evolution

              Incomparably broad and deep knowledge  Creation of novel recombinations outside
             base                                        of human horizon

              (Semi-)autonomous creativity (e.g., image Facilitation or crowding-out of human
               generation models)                         participation in creative exploration

Transmission Exposing and/or preserving documented More targeted retrieval of documented
                 cultural knowledge (e.g., LLM Chatbots)   cultural knowledge and increased
                                                        transmission fidelity for such forms of
                                                             culture

              Reproduction of human biases /          Reinforcement or mitigation of existing
             Measuring fairness                      biases / Increased cultural erosion

               Accelerated processing of empirical        Facilitation of transmission of less
              evidence                            compressed knowledge

              Harnessing idiosyncratic cognitive        Expanding the collective capacity to
                 capabilities of humans and machines     maintain diverse cultural artifacts

Selection     Recommendation of social ties (e.g., link  Shaping of social networks with potential
             recommendation algorithm)                 to inhibit or enhance serendipitous
                                                     encounters

               Curating content (e.g., ranking algorithms, Indirectly shaping social networks via
                collaborative filtering)                     content exposure

                                                  Shaping incentives for human content
                                                          creators (e.g., clickbait)


              Adapting to human feedback (e.g., RLHF) Alignment of machines to human goals
                                                           with potential of unintended
                                                consequences (e.g., spread of highly
                                                          believable myths)

             Machine learning from machine-generated Selection of machine-generated content
               content                              as main driver of cultural evolution

                Adaptability of AI models to                 Proliferation of appealing apps that may
                market/societal demands              be more or less aligned with human
                                                         welfare

             Competing with humans in cultural         Specialization of humans and machines
               production (e.g., poetry)                      in distinct niches

## Страница 10

Variation

Machines have the ability to generate cultural variants at an unparalleled scale, enabling the
discovery of novel cultural artifacts through extensive exploration. Exploration is not unique
to machines. Thomas Edison, for example, famously tested over 6,000 materials to find the
most suitable filament for his incandescent light bulb 48. However, the computational speed
of humans results in significant time constraints that limit their exploration compared to
machines 49. For instance, AlphaGo Zero needed only three days to play 4.9 million games
against itself, achieving a superhuman level of proficiency 27. No human can collect that
volume of experience on their own, and hence we tend to rely heavily on preexisting,
culturally evolved solutions that are socially learned 50,51. This approach narrows the scope of
innovation to the cultural context of previous generations. AI systems like AlphaGo use
reinforcement learning—based on iterative rounds of trial and error—and hence can
transcend this cultural path dependency by starting from a blank slate and discovering
innovative solutions through exploration alone 52. As a result, AI has the potential to generate
culturally alien solutions. In this respect, AlphaGo is in stark contrast to language models,
which primarily learn to reproduce human cultural output.

Machines and humans make use of guiding models—policies—that help to efficiently
explore complex solution spaces and thereby allow finding solutions that would be
unobtainable through random exploration alone. For instance, Mesoamerican skywatchers,
via an early example of human astronomic modeling, developed a policy for optimal seed
planting times, maximizing agricultural productivity 53. Like humans, algorithms like AlphaGo
use complex policies to guide their search. The general approach to guided search is similar
for both humans and AI: experience is used to update a predictive model of the world, which
then informs actions that generate new experiences. Machines no longer require humans to
explicitly formulate these guiding models. Instead, general-purpose neural networks are
universal approximators, allowing functional relationships to be learned 54,55. This allows for
unprecedented model complexity and consequentially pushes the boundary of attainable
solutions 56. Surpassing the capabilities of any human-conceived model, the neural
network-based algorithm AlphaFold has achieved remarkable precision in modeling
interatomic interactions, enabling it to tackle one of molecular biology's greatest challenges:
predicting a protein's three-dimensional structure based solely on its DNA sequence 57. For
centuries, protein structure prediction has drawn substantial intellectual contributions from
scientists, even harnessing the collective intelligence of tens of thousands of citizen
scientists 58. Nevertheless, AlphaFold’s complex model of intramolecular relations—in the
form of a deep neural network—proved superior, surpassing these extensive human efforts
with remarkable proficiency.

Many contemporary algorithms, such as LLMs, have been trained on a cultural repertoire of
unprecedented scale 59. For instance, some LLMs are trained on hundreds of billions of
words 60. While size does not guarantee diversity 61, the degree to which AI can learn from
human culture repertoires far exceeds what can be achieved by a single human being,
allowing, for instance, individual language models to cover a broad spectrum of languages
comprehensively 62. By combining knowledge from disjointed communities—spanning
cultural and geographic contexts, language barriers, or scientific disciplines—AI can produce
novel recombinations that may be beyond humanity’s reach. Irrespective of whether LLMs
truly exhibit understanding 63, the mere recombination of cultural traits can lead to innovation

## Страница 11

and fuel cultural evolution 61,64. Indeed, recombination is considered as being central to
generating novel cultural variants 21,61,65–67. Another way in which AI may increase the variety
of cultural traits is by building on human knowledge while at the same time identifying and
deliberately avoiding common human pathways. For instance, when it comes to scientific
discoveries, AI may be designed to recover scientifically plausible and promising “alien”
hypotheses that would normally fall out of contemporary scientific communities’ focal point 68.
This does not imply, however, that AI is without its own limitations or blind spots, as we will
discuss later.

But machines may also augment human exploration. Conditional generative AI, like DALL-E,
allows users to steer the generative process through text prompts, enabling experimentation
with diverse concepts and visualizations without the need for advanced artistic skills 17.
Throughout human history the effective size of the population that contributed to the creation
and maintenance of cultural knowledge constrained human cultural evolution 1. Technology
has had a varying impact on human cultural activities. On one hand, it can democratize
behavior. For instance, advancements in digital cameras and editing software have made it
easier for individuals with limited technical knowledge to take high-quality photos and edit
them effectively. On the other hand, the advent of new technologies can lead to increasingly
specialized roles for humans. For instance, visual effects technology has led to the
emergence of entirely new professions in film production, contributing to a cumulative
increase in crew size 69. Finally, technological advancements can also lead to a reduction in
human engagement in certain activities. For example, the advent of agriculture decreased
the necessity for hunting, as people could grow food instead. In the context of AI, it remains
to be seen whether this technology will follow a similar trajectory. Will it democratize and
increase human participation in creative fields, will it lead to new professions and increasing
specialization, or could it lead to a decline in human-led creative expression, as we become
increasingly reliant on AI 37? Undoubtedly, human cultural exploration, in science as in arts,
will increasingly be in collaboration with AI 70,71.

Transmission

The transmission of cultural traits occurs via social learning, defined as learning that is
influenced by the observation of another individual and/or its products. This is opposed to
individual learning which consists in acquiring information through trial and error. In humans,
social learning tends to be imperfect, which means that transmission events are associated
with a risk of losing cultural information. For example, if someone observes a behavior or
practice incorrectly or does not fully understand it, they may not pass on the correct
information to others. Over time, this can lead to the deterioration or even loss of cultural
practices, which can have significant consequences for a cultural group.

Intelligent machines will increasingly be involved in the preservation and transmission of
knowledge. Cultural evolution has supplied humans with increasingly efficient tools to
preserve cultural information. The invention of writing, for instance, allowed humans to
mitigate cultural loss by recording information in a more permanent way. Theoretical and
empirical studies of cultural evolution have shown that the stability of cultural information
strongly depends on both the size of the population that shares information 65 and the type of
social learning mechanisms involved (with lower fidelity when transmission relies on mere
observation than when it relies on verbal teaching, for instance) 72. Besides being a

## Страница 12

persistent medium of cultural storage analogous to a book, AI can learn to seek and transmit
information  71,73 and act as a conversational and pedagogical agent similar to a teacher 74.
This dual role has potential for drastically boosting cultural preservation. For instance, LLMs
have been harnessed to resurrect historical figures 75 and revive languages teetering on the
edge of extinction 76. By fostering interactive cultural experiences for learners, these
technologies can significantly enhance the comprehension and retention of cultural
knowledge 77.

As machines store and transmit information and knowledge, they may reproduce and
transmit biases inherent to human culture; but they also offer potential to mitigate those.
Machine learning models reproduce various content biases inherent to their training data,
including gender bias, racial or ethnic bias, bias for negative and threat-related information,
and socioeconomic bias 61,78–82. For instance, many LLMs make implicit assumptions about
the gender associated with professions like nurse and doctor, reflecting the demographic
perspective dominant in the training data 83. When an LLM is used for revision and
enhancement of human written text, it can transmit and/or reinforce these biases 61.
Numerous strategies exist to address bias and fairness in machine learning models 84. For
instance, the demographic representation in the outputs of LLMs can be improved by using
prompts featuring personas from a broad demographic spectrum 85. Yet, LLMs present
another challenge: they struggle to accurately represent languages and communities for
which training data is limited 61,86. This limitation implies that LLM-based copy-editing could
inadvertently lead to cultural erosion within these underrepresented communities due to
losses in text reproduction. Nevertheless, LLMs, with their capacity to handle vast quantities
of training data, can significantly contribute to the preservation and even enhancement of
cultural diversity, provided that the training data is carefully curated with attention to diversity
and representation.

Cultural transmission can be significantly impacted not only by the replication of biases but
also by disparities between human and algorithmic biases. Examples of biases found in
humans are confirmation bias 87, availability bias 88, and a bias towards specific symmetries
89. Despite their reputation for undermining optimal decision-making, biases can actually
reflect optimal decisions within a particular socio-environmental context under cognitive
constraints such as memory, computation, or experience 90–93. Similarly, machines may seize
biases -- for instance, deep learning architectures assume spatial symmetries to improve
training efficiency 87. Importantly, humans and machines operate under different cognitive
constraints 49 and inhabit distinct socio-environmental contexts. This may give rise to
idiosyncratic biases. For instance, due to their enhanced computational capabilities,
machines may display more utilitarian rationality 90. Remarkably, humans often anticipate
more utilitarian behavior from them 95 and might indeed, as we will elaborate in the following
section, enhance this tendency. Irrespective of their origin, the effects of biases on culture
tend to strengthen through repeated transmission 91,96,97. This can restrict the spectrum of
solutions a population can derive, and even highly effective solutions may not be sustained if
they conflict with pre-existing biases 98. As such, the increased cognitive diversity—for
instance with regard to biases—within human-machine societies has the potential to expand
the collective capacity to maintain diverse cultural artifacts. Artifacts that might not be
maintained by humans might be maintained by machines. Conversely, in the transmission
between humans and machines, a misalignment of biases can increase the risk of
information loss 99.

## Страница 13

Machines' increased computational capacity might additionally affect the feasibility of
accumulating uncompressed information via a “big data” approach. The compressibility of
information is the inverse of its algorithmic complexity: Compressing information is achieved
by creating a rule that is shorter than a complete list of the data itself 100. Compression is a
key feature of both human cognition and machine learning 101: Any information-processing
system has to address a general trade-off between a truthful representation of the “raw”
information and constraints on computation. The extent and nature of these constraints,
however, differ between humans and machines 49. Compression processes play an
important role in human transmission to mitigate cultural loss: Raw information oftentimes is
not learnable because it is too complex, whereas a compressed rule might very well be.
Human language, for example, retains its expressivity by becoming learnable via the
evolution of compressed structure 102. Similarly, scientists develop, transmit and revise
theories as compressed representations of knowledge. Machine learning has the potential to
reduce some of the constraints resulting from human computation, as the amount of data
that can be processed is vastly increased. As a consequence, information might be
increasingly transmitted with low compression – in the form of “big data” – when predictive
power is of ultimate importance, and for some applications, the necessity to derive and
transmit highly compressed rules or theories might be reduced 103,104. For instance, with the
advent of AlphaFold, scientists might focus on collecting and preserving further ground truth
data on molecule structures to refine future models rather than refining and transmitting
theories of atomic interactions. While symbolic representation may remain crucial for efficient
computation, AI-assisted discovery could lessen the need for their transmission, as these
representations could be easily regenerated 105. However, theories might retain importance
in shaping human understanding and intuition, serving as essential tools for conceptualizing
knowledge—a function that the framework we present in this work aims to fulfill.

Selection

Cultural evolutionary processes are selective in what is being transmitted. In the context of
machine culture, selection can occur at a level where machines select what and from whom
humans learn, at a level where humans select machine behavior, and at a level where there
is selection between humans and machines.


Machines selecting what and from whom humans learn


When it comes to what humans learn, social learning strategies shape what, when, and
whom we copy. They roughly cluster into content- and context-based strategies 106,107:
content-based strategies consider what is learned, favoring —for instance —social over
nonsocial information 108. Meanwhile, context-based strategies attend to situational features
such as properties of a cultural model (e.g., their competence, success, prestige, knowledge,
similarity), frequencies (e.g., most common behavior, rare behavior), or internal states of the
learner (e.g., uncertainty, cost of individual learning). Machines that help humans to navigate
vast information spaces by (pre-)selecting cultural traits often reflect such social learning
strategies.

## Страница 14

For instance, content-based filtering algorithms aim to maximize the similarity between items
a user previously showed interest in and unobserved items. Reflecting context-based
strategies in selection by machines, ranking algorithms typically sort items according to a
relevance score that is based on items’ popularity 109,110. Meanwhile, collaborative filtering
(CF) algorithms detect hidden patterns between items and users, thereby achieving
recommendations about novel items to similar users without using additional exogenous
information about individual items or users 111 (see Figure 2B).

Another dimension along which algorithms may influence cultural selection pertains to social
networks, which form the backbone of information exchange. Here, social ties are rewired as
users follow algorithmic recommendations based on user-attributes (e.g., popularity) or
similarities in user-preferences both in personal (X: “who to follow”) and professional
domains (LinkedIn “People you might know”). Link recommendation algorithms have the
potential to shape the overall evolution of social networks 112–114. X’s “who to follow”
recommendation was observed to disproportionately benefit those users who were already
the most popular, fueling “the rich get richer” dynamics 114. A growing body of research
documents a complex but persistent and critical relationship between social networks’
structure and collectives’ ability to collaborate, coordinate, and solve problems 115–117 that
ultimately shape cultural repertoires 66,118.

While machines have most commonly relied on exploiting explicit user preferences and
historical behavior (e.g., ratings, engagement), there has been a growing interest in
considering users' internal states to improve algorithmic recommendations. For instance,
users might be uncertain about their preferences -- especially in domains in which they lack
expertise. Bayesian approaches can be used to model users’ uncertainty and to update
algorithmic recommendations as the user interacts with the system 119. As another example,
recommender systems might account for the cognitive cost of exploring items or learning
about them by prioritizing items that are easier for users to evaluate or learn 120. Affective
recommender systems 121 use techniques such as natural language processing to make
inferences about users’ emotional states, and even combine it with other context information
such as the recommendation domain (e.g., music or movies) 122–124.

Downstream consequences of selection by machines may often be specific to particular
environments, algorithmic models, and feedback loops. But one feature generalizing across
various contexts is that algorithms – by design of underlying business models – are often
geared towards maximizing user engagement 125. In social networks, this may be achieved
by promoting content congruent with users’ past engagement or ingroup attitudes 126, or
content that humans inherently attend to, such as emotionally and morally charged content
127,128. One example for this is information that relates to threat or elicits disgust, as shown in
transmission chain experiments inspired from cultural evolutionary theory 129. Algorithmic
amplification of such content may then feed back into human social learning, for instance
inflating beliefs about the normative value of expressing moral outrage 130,131, increasing
out-group animosity 132, or by creating echo chambers and filter bubbles 133–135. It is important
to note that user engagement is a signal of value to both users and platforms deploying
algorithms, connecting them in complex feedback loops 136,137: machines such as
recommender systems react to user engagement, selecting types of content people engage
with. Users also react to recommender systems, both directly in terms of clicking, viewing,
purchasing but also in terms of what they produce, as content creators anticipate what will

## Страница 15

receive the widest distribution. These feedback loops, but also deliberate product design
choices along with policy approaches, provide potent leverage points for aligning
recommender systems with human values 138. Algorithmic systems more generally offer
powerful ways to bridge social divides, for instance by designing selection policies that steer
users’ attention to content that increases mutual understanding and trust 139,140, or by
identifying and promoting links in social networks that can effectively mitigate polarizing
dynamics 141,142. Machine selection can also be deliberately geared towards fostering content
diversity 143, or towards maximizing agreement among humans with diverse preferences 144.


Humans selecting machine behavior


Human preferences, in turn, can directly shape machine behavior, in particular through
reinforcement learning with human feedback (RLHF) 145,146. One way to think about this is
conceiving machines as students generating arrays of solutions, while humans act as
teachers, selecting the most suitable solutions. This process can nudge machines towards
desirable properties like helpfulness, honesty, and harmlessness 146. Yet harvesting the
preferences of human annotators at scale through RLHF can lead machines to evolve
behaviors unintended by the organizations deploying them, as has been observed in
chatbots increasingly endorsing inflated political views, or increasingly stating the desire to
avoid being shut down 147. Human influence on machine behavior also occurs through more
subtle pathways: through training on human text alone LLMs picked up a tendency to
repeat users’ stated views 147. Machines’ attention to human feedback may create selection
pressures towards pleasing human interlocutors. For instance, humans may favor machines
catering to non-factual stories and narratives that match concepts and ideas preferred by
human cognition 148, such as appeals to intuitive expectations about the natural world 149,150,
or certain religious practices 151.

Humans select machine behavior also through direct creation and curation of training data
for machine learning, and through more indirect interactions with machine-generated
outputs. Despite efforts to fingerprint AI-created content 152, AI and human-made content will
increasingly intertwine 153. For instance, it is estimated that many supposedly human-written
texts on crowdsourcing platforms are already augmented by AI 154. Thus, it seems
unavoidable that future AI models will be trained on mixed human-AI content, forming part of
a larger feedback cycle between content generation and selection. The human element in
this cycle may prove crucial, for instance in preventing ‘model collapse’ -- a dynamic where
repeated training on machine-generated data narrows its outputs to very few traits 153. This
phenomenon arises due to a classification bias favoring more frequent classes 155, which
gets amplified through repeated iterations of learning 156. In contrast, when encountering
similar challenges, human culture might preserve diversity by utilizing biases with
counteracting effects, such as endorsing local conformity 157. That said, it seems likely that
machines could recover similar strategies to maintain cultural diversity without human
involvement.

Yet another pathway for human selection on machine behavior pertains to general machine
properties. For instance, humans may choose between different AI systems available on the
market based on factors such as cost, usefulness, harmfulness, and alignment with
regulatory requirements. As such, the language model LLaMA recently gained attention for

## Страница 16

its relatively smaller size, making it more cost-effective to use 158. Meanwhile, ChatGPT
succeeded over many other similar models due to its accessibility and helpfulness 146.
Human demands towards machines are likely to change over time, shaping the trajectory of
machine culture similar to other historic cases where technologies evolved in response to
changing human demands (e.g., the wheel from wooden wheels on carriages to rubber tires
on automobiles).


Selection between humans and machines

Selection is also bound to occur at a level where machines or humans are favored over one
another. For instance, machines’ ability to process vast amounts of information quickly and
accurately gives them a competitive edge in many cognitive tasks (e.g., strategic game play;
information retrieval). Relatedly, due to their cost-effectiveness and efficiency, intelligent
machines may grow into the main workforce across various professional domains 34,159. That
said, just as the invention of the car did not reduce interest in running as a sport, the
proliferation of machines might not reduce human interest in intellectual activity, though it
may shift its focus from necessity to leisure and entertainment. Meanwhile, across various
contexts, humans might favor other humans over machines due to their shared experience.
For instance, even though today’s machines can conceive messages perceived as more
empathic than messages conceived by humans 160,161, those messages’ appeal is lost as
soon as humans learn about their artificial origin 162. This “artificial empathy paradox” 154 may,
at least in part, arise from the very fact that empathizing is effortful for humans 164 and that,
as such, it conveys a motivational social signal to others that is made void by
machine-involvement. Selection between humans and machines does not imply that one
agent dominates over the other in any cultural niche; oftentimes, one will augment -- rather
than fully replace -- the other; other times, the presence of the other may trigger the
development of new skills, or roles.

Grand challenges and open questions

We now suggest a broad research agenda for computational and behavioral scientists
interested in the phenomenon of Machine Culture.

Measurement

One major open challenge is to quantify how much of human cultural dynamics can be
attributable to algorithmic processes. For instance, it is difficult to completely disentangle the
effects of ranking and recommendation algorithms on culture from the endogenous
processes of human social learning. Getting good estimates is a precondition to optimizing
and avoiding negative shifts in humans 165. This challenge is reflected in research on “filter
bubbles”, which has moved from considering algorithmic curation as decisive force shaping
online engagement134 towards acknowledging the significant influence of users’ own choices
on social media ranking algorithms 166 and search engines 167; highlighting, once again, the
intricate feedback loops between machine and human decisions.

A complementary question is how to quantify the influence of machine-generated artifacts –
e.g., artwork, literature, music – on human cultural production in these areas. As generative

## Страница 17

AI becomes more commonplace, distinguishing intrinsic human culture from
machine-generated culture or machine-influenced culture becomes even more challenging;
especially as watermarking techniques may not be universally adopted. Despite popular
media claims about machine-generated art developing its own unique style 168, we do not yet
have a reliable way of verifying these claims, let alone machine-to-human cultural
transmission 99.

Another measurement question pertains to quantifying the cultural regularities encoded in
LLMs and other AI models. Even prior to the rise of LLMs, social media platforms like
Facebook already possessed fairly detailed quantitative models of cultural regularities and
differences 169, developed mainly for the purpose of marketing to particular demographics.
However, as LLMs undergo training from curated datasets, and fine-tuning using human
feedback, it is important to quantify the biases that are introduced and/or removed by these
models 170,171.

Societal Decision-making


From Monoculture to the Tower of Babel

We currently observe a Cambrian explosion of diverse AI models, including LLMs,
accelerated by the open-source software movement. However, market forces, such as
regulation and market power, may lead to a world dominated by a small number of
monolithic models. This raises the possibility of reduction in cultural diversity, as major
social, political, and economic forces try to shape global machine culture to match their
preferences. This process may be amplified by feedback loops, in which LLMs train on an
ongoing basis from synthetic data, or from human data that contains much AI-generated
text. Preliminary evidence points to the possibility of model collapse, with the models losing
diversity and converging to a state with low variance 153.

Conversely, we face a potential 'Tower of Babel' scenario. As AI models become increasingly
personalized, conforming to and reinforcing our individual worldviews, they risk engendering
an unprecedented fragmentation of our shared perception of the world. In the biblical story
(Genesis 11:1-90), the construction of the tower led to a divine intervention that scattered
humanity and confounded languages. Drawing a parallel, if we continually interact with AI
systems that echo and affirm our preconceived notions, we risk isolating ourselves within
ideologically and culturally homogenous echo chambers. Such fragmentation can stifle
meaningful dialogue, breed misunderstanding, and ultimately, fracture our shared future
vision.

Against this background, a key research agenda is to quantify the degree to which a given AI
model, or ecosystem of models, exhibits uniformity or diversity. It is also imperative to
understand what constitutes a ‘healthy’ amount of diversity, which retains local sovereignty
while also fostering collective human flourishing.

## Страница 18

Social Choice

Ensuring that AI models, such as LLMs, reflect the beliefs and values of a given community
requires mechanisms for societal decision-making about what knowledge goes into the
models 172. Furthermore, humans vary regarding their ethical expectations towards
machines, both within and across cultures 173. This raises questions about how to best
aggregate diverse, potentially conflicting preferences to arrive at an agreeable outcome 174.
A number of interesting ideas are emerging, from voting on different AI policy-makers 175, to
using LLMs to summarize diverse human opinions 176 and generate consensus statements
144.

A related challenge is how to ensure long-term monitoring of Machine Culture. Similar to the
notion of human-in-the-loop control of AI systems, we can aspire towards society-in-the-loop
control of the complex phenomena of Machine Culture 177.


Implementation

Suppose a community knows which culture it wants to encode in an AI model. The next
question is how to ensure this culture is indeed present in the model. One approach is to
carefully curate the dataset on which the model is trained 178,179. Another, increasingly used
approach is fine-tuning based on Reinforcement Learning from Human Feedback (RLHF) 180.
Yet another approach is to fine-tune using constitutional rules provided by humans 181. The
relative merits and drawbacks of these different approaches are still not well understood.
There is a need for methods to check which cultures have been learned/inferred/encoded in
a given AI model, and the degree to which it aligns with a target culture.

Long-term Dynamics & Optimization

In all likelihood, the future of culture will be hybrid, with cultural artifacts–scientific theories,
industrial processes, art, literature–being created by a combination of human and machine
intelligence. This raises a whole suite of open questions relating to the long-term dynamics
of human-AI co-evolution. These dynamics may lead to diverse phenomena ranging from
different forms of human-AI mutualism, to Red Queen or Red King effects that characterize
the co-evolution of the two forms of intelligence 182.

A related question is how to optimize the aforementioned dynamics, in order to combine
human and machine intelligence in an ideal or safe manner 68. This may be relevant to
questions of risk mitigation. Although experts disagree on timescales and the degree of risk,
the possibility of superhuman Artificial General Intelligence (AGI) potentially poses an
existential threat to the human species 183. Cultural evolution provides a useful framework for
navigating this challenge. Specifically, cultural evolution processes take place today at
multiple scales, with human collectives–e.g., companies, universities, institutions, cities,
nation states–acting as the units of selection 184. This multi-level selection can, in principle,
operate at the level of human organizations augmented by AI and (eventually) superhuman
AGI. Engineering this evolutionary process can provide means for human survival and
agency in the long run.

## Страница 19

Conclusion1

In the evolving landscape of cultural progression, the symbiosis of human and machine
intelligence is forging a new epoch of cultural evolution. This paper highlights the
transformative role of AI in reshaping creativity, redefining skill value, and altering human
interactions. Central to the discourse is the triad of cultural evolution: variation, transmission,
and selection, and how AI interfaces with each. The interaction is multifaceted, from
generative AI birthing novel cultural artifacts to recommendation algorithms influencing
individual perspectives. However, the crux remains in understanding and navigating the
challenges and opportunities that arise from this hybridization of culture. As AI's imprints
grow deeper, it's imperative to ensure a harmonious co-creation of culture where both
human and machine augment, rather than eclipse, each other. This not only broadens the
horizons of cultural exploration but also fortifies the tapestry of human experience in the age
of intelligent machines.


Author contributions

Conception: LB, IR; Manuscript preparation: LB, FB, JFB, MD, TFM, AMN, IR; Critical
review, commentary or revision: AC, AA, TLG, JH, JZL, RM, PYO, JS; Supervision: IR


Acknowledgments

LB thanks Michiel Bakker for useful discussions. The authors thank Bramantyo Supriyatno
for supporting the formatting of the manuscript.


References

1.   Henrich, J. The Secret of Our Success: How Culture Is Driving Human Evolution,

     Domesticating Our Species, and Making Us Smarter. (Princeton University Press,

     2016). doi:10.1515/9781400873296.

2.   Heyes, C. Cognitive Gadgets: The Cultural Evolution of Thinking . (Harvard University

     Press, 2018). doi:10.4159/9780674985155.

3.   Thompson, B., van Opheusden, B., Sumers, T. & Griffiths, T. L. Complex cognitive

     algorithms preserved by selective social learning in experimental populations. Science

    376 , 95–98 (2022).

1 The conclusion was created by GPT-4 based on the summary (also created by GPT-4) of this
manuscript.

## Страница 20

4.   Whiten, A. Cultural Evolution in Animals. Annu. Rev. Ecol. Evol. Syst. 50 , 27–48 (2019).

5.   Gray, R. D. & Atkinson, Q. D. Language-tree divergence times support the Anatolian

     theory of Indo-European origin. Nature 426 , 435–439 (2003).

6.    Kirby, S., Cornish, H. & Smith, K. Cumulative cultural evolution in the laboratory: An

     experimental approach to the origins of structure in human language. Proc. Natl. Acad.

      Sci. 105 , 10681–10686 (2008).

7.   Shennan, S. Genes, memes, and human history: Darwinian archaeology and cultural

     evolution . (Thames & Hudson, 2002).

8.    Kiley, K. & Vaisey, S. Measuring stability and change in personal culture using panel

     data. Am. Sociol. Rev. 85 , 477–506 (2020).

9.   Mokyr, J. A Culture of Growth: The Origins of the Modern Economy. (Princeton

     University Press, 2017). doi:10.1515/9781400882915.

10.  Needham, J. Science and Civilisation in China | History of science and technology. in

     Chemistry and Chemical Technology; Pt. 7: Military Technology; The Gunpowder Epic

      vol. 5 (Cambridge University Press, 1986).

11.  Eisenstein, E. L. The printing press as an agent of change . vol. 1 (Cambridge

     University Press, 1980).

12.  Mesoudi, A. Culture and the Darwinian Renaissance in the social sciences and

     humanities: For a special issue of the Journal of Evolutionary Psychology , “The

     Darwinian Renaissance in the Social Sciences and Humanities”. J. Evol. Psychol. 9 ,

    109–124 (2011).

13.  Acerbi, A. Cultural Evolution in the Digital Age. (Oxford University Press, 2019).

     doi:10.1093/oso/9780198835943.001.0001.

14.  Russell, S. & Norvig, P. Artificial Intelligence: A Modern Approach . (Prentice Hall Press,

     2009).

15.  Goodfellow, I. J. et al. Generative Adversarial Networks. Preprint at

     http://arxiv.org/abs/1406.2661 (2014).

16.  Epstein, Z., Boulais, O., Gordon, S. & Groh, M. Interpolating GANs to Scaffold Autotelic

## Страница 21

      Creativity. Preprint at http://arxiv.org/abs/2007.11119 (2020).

17.  Ramesh, A. et al. Zero-Shot Text-to-Image Generation. Preprint at

     https://doi.org/10.48550/arXiv.2102.12092 (2021).

18.  Ramesh, A., Dhariwal, P., Nichol, A., Chu, C. & Chen, M. Hierarchical Text-Conditional

    Image Generation with CLIP Latents. Preprint at http://arxiv.org/abs/2204.06125 (2022).

19.  Rombach, R., Blattmann, A., Lorenz, D., Esser, P. & Ommer, B. High-Resolution Image

     Synthesis with Latent Diffusion Models. Preprint at

     https://doi.org/10.48550/arXiv.2112.10752 (2022).

20.  Epstein, Z., Levine, S., Rand, D. G. & Rahwan, I. Who Gets Credit for AI-Generated

     Art? iScience 23 , 101515 (2020).

21.  Thagard, P. & Stewart, T. C. The AHA! Experience: Creativity Through Emergent

     Binding in Neural Networks. Cogn. Sci. 35 , 1–33 (2011).

22.  Mikolov, T., Yih, W. & Zweig, G. Linguistic Regularities in Continuous Space Word

     Representations. in Proceedings of the 2013 Conference of the North American

     Chapter of the Association for Computational Linguistics: Human Language

     Technologies 746–751 (Association for Computational Linguistics, 2013).

23.  Colas, C., Karch, T., Moulin-Frier, C. & Oudeyer, P.-Y. Language and culture

      internalization for human-like autotelic AI. Nat. Mach. Intell. 4 , 1068–1076 (2022).

24.  Elgammal, A., Liu, B., Elhoseiny, M. & Mazzone, M. CAN: Creative Adversarial

     Networks, Generating ‘Art’ by Learning About Styles and Deviating from Style Norms.

     Preprint at http://arxiv.org/abs/1706.07068 (2017).

25.  Wang, Y., Shimada, K. & Barati Farimani, A. Airfoil GAN: encoding and synthesizing

      airfoils for aerodynamic shape optimization. J. Comput. Des. Eng. 10 , 1350–1362

     (2023).

26.  Metz, C. In Two Moves, AlphaGo and Lee Sedol Redefined the Future. Wired (2016).

27.  Silver, D. et al. Mastering the game of Go without human knowledge. Nature 550 ,

    354–359 (2017).

28.  Shin, M., Kim, J., van Opheusden, B. & Griffiths, T. L. Superhuman artificial intelligence

## Страница 22

    can improve human decision-making by increasing novelty. Proc. Natl. Acad. Sci. 120 ,

    e2214840120 (2023).

29.  Choi, S., Kim, N., Kim, J. & Kang, H. How Does AI Improve Human Decision-Making?

     Evidence from the AI-Powered Go Program. SSRN Scholarly Paper at

     https://doi.org/10.2139/ssrn.3893835 (2022).

30.  Shin, M., Kim, J. & Kim, M. Human Learning from Artificial Intelligence: Evidence from

    Human Go Players’ Decisions after AlphaGo. Proc. Annu. Meet. Cogn. Sci. Soc. 43 ,

     (2021).

31.  Kasneci, E. et al. ChatGPT for good? On opportunities and challenges of large

     language models for education. Learn. Individ. Differ. 103 , 102274 (2023).

32.  Wagner, G., Lukyanenko, R. & Paré, G. Artificial intelligence and the conduct of

      literature reviews. J. Inf. Technol. 37 , 209–226 (2022).

33.  Chen, M. et al. Evaluating Large Language Models Trained on Code. Preprint at

     https://doi.org/10.48550/arXiv.2107.03374 (2021).

34.  Eloundou, T., Manning, S., Mishkin, P. & Rock, D. GPTs are GPTs: An Early Look at the

     Labor Market Impact Potential of Large Language Models. Preprint at

     https://doi.org/10.48550/arXiv.2303.10130 (2023).

35.  Stevenson, C., Smal, I., Baas, M., Grasman, R. & van der Maas, H. Putting GPT-3’s

      Creativity to the (Alternative Uses) Test. Preprint at

     https://doi.org/10.48550/arXiv.2206.08932 (2022).

36.  Popli, N. How to Get a Six-Figure Job as an AI Prompt Engineer.

     https://time.com/6272103/ai-prompt-engineer-job/ (2023).

37.  Epstein, Z. et al. Art and the science of generative AI: A deeper dive. Preprint at

     http://arxiv.org/abs/2306.04141 (2023).

38.  Oppenlaender, J. The Creativity of Text-to-Image Generation. in Proceedings of the

     25th International Academic Mindtrek Conference 192–202 (2022).

     doi:10.1145/3569219.3569352.

39.   Li, Z. (Lionel), Fang, X. & Sheng, O. R. L. A Survey of Link Recommendation for Social

## Страница 23

     Networks: Methods, Theoretical Foundations, and Future Research Directions. ACM

     Trans. Manag. Inf. Syst. 9 , 1–26 (2018).

40.  Lops, P., de Gemmis, M. & Semeraro, G. Content-based Recommender Systems:

     State of the Art and Trends. in Recommender Systems Handbook (eds. Ricci, F.,

    Rokach, L., Shapira, B. & Kantor, P. B.) 73–105 (Springer US, 2011).

     doi:10.1007/978-0-387-85820-3_3.

41.  Su, X. & Khoshgoftaar, T. M. A Survey of Collaborative Filtering Techniques. Adv. Artif.

       Intell. 2009 , 1–19 (2009).

42.  Anderson, A., Maystre, L., Anderson, I., Mehrotra, R. & Lalmas, M. Algorithmic Effects

    on the Diversity of Consumption on Spotify. in Proceedings of The Web Conference

    2020 2155–2165 (Association for Computing Machinery, 2020).

     doi:10.1145/3366423.3380281.

43.  Krumme, C., Cebrian, M., Pickard, G. & Pentland, S. Quantifying Social Influence in an

     Online Cultural Market. PLOS ONE 7 , e33785 (2012).

44.  Salganik, M. J., Dodds, P. S. & Watts, D. J. Experimental Study of Inequality and

     Unpredictability in an Artificial Cultural Market. Science 311 , 854–856 (2006).

45.  Cavalli-Sforza, L. L. & Feldman, M. W. Cultural Transmission and Evolution: A

     Quantitative Approach . (Princeton University Press, 1981).

46.  Mesoudi, A. Pursuing Darwin’s curious parallel: Prospects for a science of cultural

     evolution. Proc. Natl. Acad. Sci. 114 , 7853–7860 (2017).

47.  Enquist, M. & Ghirlanda, S. Evolution of social learning does not explain the origin of

    human cumulative culture. J. Theor. Biol. 246 , 129–135 (2007).

48.  Weitzman, M. L. Recombinant Growth*. Q. J. Econ. 113 , 331–360 (1998).

49.   Griffiths, T. L. Understanding Human Intelligence through Human Limitations. Trends

    Cogn. Sci. 24 , 873–883 (2020).

50.  Boyd, R. & Richerson, P. J. Culture and the evolutionary process. (University of

    Chicago Press, 1985).

51.  Mesoudi, A. Cultural Evolution: How Darwinian Theory Can Explain Human Culture and

## Страница 24

     Synthesize the Social Sciences. (University of Chicago Press, 2011).

52.  Leibo, J. Z., Hughes, E., Lanctot, M. & Graepel, T. Autocurricula and the Emergence of

     Innovation from Social Interaction: A Manifesto for Multi-Agent Intelligence Research.

     Preprint at https://doi.org/10.48550/arXiv.1903.00742 (2019).

53.  Aveni, A. F. Skywatchers: A Revised and Updated Version of Skywatchers of Ancient

    Mexico . (University of Texas Press, 2001).

54.  Hornik, K. Approximation capabilities of multilayer feedforward networks. Neural Netw.

    4 , 251–257 (1991).

55.  LeCun, Y., Bengio, Y. & Hinton, G. Deep learning. Nature 521 , 436–444 (2015).

56.  Zenil, H. et al. The Future of Fundamental Science Led by Generative Closed-Loop

       Artificial Intelligence. Preprint at http://arxiv.org/abs/2307.07522 (2023).

57.  Senior, A. W. et al. Improved protein structure prediction using potentials from deep

     learning. Nature 577 , 706–710 (2020).

58.  Cooper, S. et al. Predicting protein structures with a multiplayer online game. Nature

    466 , 756–760 (2010).

59.  Bommasani, R. et al. On the Opportunities and Risks of Foundation Models. Preprint at

     https://doi.org/10.48550/arXiv.2108.07258 (2022).

60.  Hoffmann, J. et al. Training Compute-Optimal Large Language Models. Preprint at

     https://doi.org/10.48550/arXiv.2203.15556 (2022).

61.  Bender, E. M., Gebru, T., McMillan-Major, A. & Shmitchell, S. On the Dangers of

     Stochastic Parrots: Can Language Models Be Too Big? 🦜. in Proceedings of the 2021

   ACM Conference on Fairness, Accountability, and Transparency 610–623 (Association

      for Computing Machinery, 2021). doi:10.1145/3442188.3445922.

62.  Brown, T. et al. Language models are few-shot learners. Adv. Neural Inf. Process. Syst.

    33 , 1877–1901 (2020).

63.  Mitchell, M. & Krakauer, D. C. The debate over understanding in AI’s large language

     models. Proc. Natl. Acad. Sci. 120 , e2215907120 (2023).

64.  Charbonneau, M. Modularity and Recombination in Technological Evolution. Philos.

## Страница 25

     Technol. 29 , 373–392 (2016).

65.  Henrich, J. Demography and Cultural Evolution: How Adaptive Cultural Processes Can

    Produce Maladaptive Losses—The Tasmanian Case. Am. Antiq. 69 , 197–214 (2004).

66.  Henrich, J. & Muthukrishna, M. What Makes Us Smart? Top. Cogn. Sci. (2023)

     doi:10.1111/tops.12656.

67.  Youn, H., Strumsky, D., Bettencourt, L. M. A. & Lobo, J. Invention as a combinatorial

     process: evidence from US patents. J. R. Soc. Interface 12 , 20150272 (2015).

68.  Sourati, J. & Evans, J. A. Accelerating science with human-aware artificial intelligence.

     Nat. Hum. Behav. 1–15 (2023) doi:10.1038/s41562-023-01648-z.

69.  Tinits, P. & Sobchuk, O. Open-ended cumulative cultural evolution of Hollywood film

     crews. Evol. Hum. Sci. 2 , e26 (2020).

70.  Grizou, J., Points, L. J., Sharma, A. & Cronin, L. A curious formulation robot enables

     the discovery of a novel protocell behavior. Sci. Adv. 6 , eaay4237 (2020).

71.  Kramer, S., Cerrato, M., Džeroski, S. & King, R. Automated Scientific Discovery: From

     Equation Discovery to Autonomous Discovery Systems. Preprint at

     http://arxiv.org/abs/2305.02251 (2023).

72.  Lucas, A. J. et al. The value of teaching increases with tool complexity in cumulative

      cultural evolution. Proc. R. Soc. B Biol. Sci. 287 , 20201885 (2020).

73.  Borsa, D., Piot, B., Munos, R. & Pietquin, O. Observational Learning by Reinforcement

     Learning. Preprint at https://doi.org/10.48550/arXiv.1706.06617 (2017).

74.  Kohnke, L., Moorhouse, B. L. & Zou, D. ChatGPT for Language Teaching and

     Learning. RELC J. 00336882231162868 (2023) doi:10.1177/00336882231162868.

75.  Haller, E. & Rebedea, T. Designing a Chat-bot that Simulates an Historical Figure. in

    2013 19th International Conference on Control Systems and Computer Science

    582–589 (2013). doi:10.1109/CSCS.2013.85.

76.  Zhang, S., Frey, B. & Bansal, M. How can NLP Help Revitalize Endangered

    Languages? A Case Study and Roadmap for the Cherokee Language. Preprint at

     http://arxiv.org/abs/2204.11909 (2022).

## Страница 26

77.   Ijaz, K., Bogdanovych, A. & Trescak, T. Virtual worlds vs books and videos in history

     education. Interact. Learn. Environ. 25 , 904–929 (2017).

78.  Buolamwini, J. & Gebru, T. Gender Shades: Intersectional Accuracy Disparities in

    Commercial Gender Classification. in Proceedings of the 1st Conference on Fairness,

     Accountability and Transparency 77–91 (PMLR, 2018).

79.  Caliskan, A., Bryson, J. J. & Narayanan, A. Semantics derived automatically from

     language corpora contain human-like biases. Science 356 , 183–186 (2017).

80.  O’Neil, C. Weapons of Math Destruction: How Big Data Increases Inequality and

     Threatens Democracy. (Crown, 2016).

81.  Prates, M. O. R., Avelar, P. H. C. & Lamb, L. Assessing Gender Bias in Machine

     Translation -- A Case Study with Google Translate. Preprint at

     https://doi.org/10.48550/arXiv.1809.02208 (2019).

82.  Acerbi, A. & Stubbersfield, J. Large language models show human-like content biases

      in transmission chain experiments. Preprint at https://doi.org/10.31219/osf.io/8zg4d

     (2023).

83.  Vig, J. et al. Investigating Gender Bias in Language Models Using Causal Mediation

     Analysis. in Advances in Neural Information Processing Systems vol. 33 12388–12401

     (Curran Associates, Inc., 2020).

84.  Pessach, D. & Shmueli, E. A Review on Fairness in Machine Learning. ACM Comput.

     Surv. 55 , 51:1-51:44 (2022).

85.  Argyle, L. P. et al. Out of One, Many: Using Language Models to Simulate Human

    Samples. in Proceedings of the 60th Annual Meeting of the Association for

     Computational Linguistics (Volume 1: Long Papers) 819–862 (2022).

     doi:10.18653/v1/2022.acl-long.60.

86.  Hendy, A. et al. How Good Are GPT Models at Machine Translation? A Comprehensive

     Evaluation. Preprint at http://arxiv.org/abs/2302.09210 (2023).

87.  Bartlett, F. C. Remembering: A study in experimental and social psychology. xix, 317

    (Cambridge University Press, 1932).

## Страница 27

88.  Kashima, Y. Maintaining Cultural Stereotypes in the Serial Reproduction of Narratives.

     Pers. Soc. Psychol. Bull. 26 , 594–604 (2000).

89.   Griffiths, T. L., Christian, B. R. & Kalish, M. L. Using Category Structures to Test

     Iterated Learning as a Method for Identifying Inductive Biases. Cogn. Sci. 32 , 68–107

     (2008).

90.  Lieder, F. & Griffiths, T. L. Resource-rational analysis: Understanding human cognition

    as the optimal use of limited computational resources. Behav. Brain Sci. 43 , e1 (2020).

91.  Simon, H. A. Bounded Rationality. in Utility and Probability (eds. Eatwell, J., Milgate, M.

   & Newman, P.) 15–18 (Palgrave Macmillan UK, 1990).

     doi:10.1007/978-1-349-20568-4_5.

92.  Todd, P. M. & Gigerenzer, G. Environments That Make Us Smart: Ecological

      Rationality. Curr. Dir. Psychol. Sci. 16 , 167–171 (2007).

93.  Tversky, A. & Kahneman, D. Judgment under Uncertainty: Heuristics and Biases.

     Science 185 , 1124–1131 (1974).

94.  Gershman, S. J., Horvitz, E. J. & Tenenbaum, J. B. Computational rationality: A

     converging paradigm for intelligence in brains, minds, and machines. Science 349 ,

    273–278 (2015).

95.  Malle, B. F., Scheutz, M., Arnold, T., Voiklis, J. & Cusimano, C. Sacrifice One For the

    Good of Many? People Apply Different Moral Norms to Human and Robot Agents. in

     Proceedings of the Tenth Annual ACM/IEEE International Conference on Human-Robot

     Interaction 117–124 (Association for Computing Machinery, 2015).

     doi:10.1145/2696454.2696458.

96.   Griffiths, T. L., Kalish, M. L. & Lewandowsky, S. Theoretical and empirical evidence for

     the impact of inductive biases on cultural evolution. Philos. Trans. R. Soc. B Biol. Sci.

    363 , 3503–3514 (2008).

97.  Kirby, S., Dowman, M. & Griffiths, T. L. Innateness and culture in the evolution of

     language. PNAS Proc. Natl. Acad. Sci. U. S. Am. 104 , 5241–5245 (2007).

98.  Thompson, B. & Griffiths, T. L. Human biases limit cumulative innovation. Proc. R. Soc.

## Страница 28

   B Biol. Sci. 288 , 20202752 (2021).

99.  Brinkmann, L. et al. Hybrid social learning in human-algorithm cultural transmission.

     Philos. Trans. R. Soc. Math. Phys. Eng. Sci. 380 , 20200426 (2022).

100. Tamariz, M. & Kirby, S. Culture: copying, compression, and conventionality. Cogn. Sci.

    39 , 171–183 (2015).

101. Chater, N. & Vitányi, P. Simplicity: a unifying principle in cognitive science? Trends

    Cogn. Sci. 7 , 19–22 (2003).

102. Kirby, S., Tamariz, M., Cornish, H. & Smith, K. Compression and communication in the

      cultural evolution of linguistic structure. Cognition 141 , 87–102 (2015).

103. Anderson, C. The End of Theory: The Data Deluge Makes the Scientific Method

     Obsolete. Wired (2018).

104. Spinney, L. Are we witnessing the dawn of post-theory science? The Guardian (2022).

105. Liu, Z., Madhavan, V. & Tegmark, M. AI Poincaré 2.0: Machine Learning Conservation

    Laws from Differential Equations. Phys. Rev. E 106 , 045307 (2022).

106. Kendal, R. L. et al. Social Learning Strategies: Bridge-Building between Fields. Trends

    Cogn. Sci. 22 , 651–665 (2018).

107. Henrich, J. & McElreath, R. The evolution of cultural evolution. Evol. Anthropol. Issues

    News Rev. Issues News Rev. 12 , 123–135 (2003).

108. Mesoudi, A., Whiten, A. & Dunbar, R. A bias for social information in human cultural

     transmission. Br. J. Psychol. 97 , 405–423 (2006).

109. Sharma, D. K. & Sharma, A. A comparative analysis of web page ranking algorithms.

       Int. J. Comput. Sci. Eng. 2 , 2670–2676 (2010).

110. Duhan, N., Sharma, A. K. & Bhatia, K. K. Page Ranking Algorithms: A Survey. in 2009

    IEEE International Advance Computing Conference 1530–1537 (2009).

     doi:10.1109/IADCC.2009.4809246.

111. Koren, Y., Rendle, S. & Bell, R. Advances in collaborative filtering. Recomm. Syst.

    Handb. 91–142 (2022).

112. Banihashemi, S. & Abhari, A. Effects of Different Recommendation Algorithms on

## Страница 29

     Structure of Social Networks. in 2021 International Conference on Computational

     Science and Computational Intelligence (CSCI) 1395–1400 (2021).

     doi:10.1109/CSCI54926.2021.00279.

113. Ferrara, A., Espín-Noboa, L., Karimi, F. & Wagner, C. Link recommendations: Their

     impact on network structure and minorities. in 14th ACM Web Science Conference

    2022 228–238 (2022). doi:10.1145/3501247.3531583.

114. Su, J., Sharma, A. & Goel, S. The Effect of Recommendations on Network Structure. in

     Proceedings of the 25th International Conference on World Wide Web 1157–1167

      (International World Wide Web Conferences Steering Committee, 2016).

     doi:10.1145/2872427.2883040.

115. Lazer, D. & Friedman, A. The Network Structure of Exploration and Exploitation. Adm.

      Sci. Q. 52 , 667–694 (2007).

116. Mason, W. & Watts, D. J. Collaborative learning in networks. Proc. Natl. Acad. Sci. 109 ,

    764–769 (2012).

117. Woolley, A. W., Aggarwal, I. & Malone, T. W. Collective Intelligence and Group

     Performance. Curr. Dir. Psychol. Sci. 24 , 420–424 (2015).

118. Derex, M. & Boyd, R. Partial connectivity increases cultural accumulation within groups.

     Proc. Natl. Acad. Sci. 113 , 2982–2987 (2016).

119. Kant, V., Jhalani, T. & Dwivedi, P. Enhanced multi-criteria recommender system based

    on fuzzy Bayesian approach. Multimed. Tools Appl. 77 , 12935–12953 (2018).

120. Bollen, D., Knijnenburg, B. P., Willemsen, M. C. & Graus, M. Understanding choice

     overload in recommender systems. in Proceedings of the fourth ACM conference on

    Recommender systems 63–70 (2010).

121. Tkalcic, M., Kosir, A. & Tasic, J. Affective recommender systems: the role of emotions

      in recommender systems. in The RecSys 2011 Workshops-Decisions@ RecSys 2011

    and UCERSTI-2: Human Decision Making in Recommender Systems; User-Centric

     Evaluation of Recommender Systems and Their Interfaces-2 vol. 811 9–13 (CEUR-WS.

     org, 2011).

## Страница 30

122. Gonzalez, G., de la Rosa, J. L., Montaner, M. & Delfin, S. Embedding Emotional

     Context in Recommender Systems. in 2007 IEEE 23rd International Conference on

    Data Engineering Workshop 845–852 (2007). doi:10.1109/ICDEW.2007.4401075.

123. Osman, N. A., Mohd Noah, S. A., Darwich, M. & Mohd, M. Integrating contextual

     sentiment analysis in collaborative recommender systems. PLoS ONE 16 , e0248695

     (2021).

124. Zheng, Y., Mobasher, B. & Burke, R. D. The Role of Emotions in Context-aware

    Recommendation. Decis. RecSys 2013 , 21–28 (2013).

125. Zhang, X., Ferreira, P., Godinho De Matos, M. & Belo, R. Welfare Properties of Profit

     Maximizing Recommender Systems: Theory and Results from a Randomized

     Experiment. MIS Q. 45 , 1–43 (2021).

126. Levy, R. Social Media, News Consumption, and Polarization: Evidence from a Field

     Experiment. Am. Econ. Rev. 111 , 831–870 (2021).

127. Brady, W. J., Gantman, A. P. & Van Bavel, J. J. Attentional capture helps explain why

     moral and emotional content go viral. J. Exp. Psychol. Gen. 149 , 746–756 (2020).

128. Brady, W. J., Jackson, J. C., Lindström, B. & Crockett, M. J. Algorithm-mediated social

     learning in online social networks. Trends Cogn. Sci. 0 , (2023).

129. Acerbi, A. Cognitive attraction and online misinformation. Palgrave Commun. 5 , 1–7

     (2019).

130. Brady, W. J. et al. Overperception of moral outrage in online social networks inflates

      beliefs about intergroup hostility. Nat. Hum. Behav. 1–11 (2023)

     doi:10.1038/s41562-023-01582-0.

131. Brady, W. J. & Crockett, M. J. Norm Psychology in the Digital Age: How Social Media

    Shapes the Cultural Evolution of Normativity. Perspect. Psychol. Sci.

    17456916231187396 (2023) doi:10.1177/17456916231187395.

132. Milli, S., Carroll, M., Pandey, S., Wang, Y. & Dragan, A. D. Twitter’s Algorithm:

     Amplifying Anger, Animosity, and Affective Polarization. Preprint at

     http://arxiv.org/abs/2305.16941 (2023).

## Страница 31

133. Cinelli, M., De Francisci Morales, G., Galeazzi, A., Quattrociocchi, W. & Starnini, M.

    The echo chamber effect on social media. Proc. Natl. Acad. Sci. 118 , e2023301118

     (2021).

134. Pariser, E. The Filter Bubble: What the Internet Is Hiding from You . (The Penguin Press

    HC, 2011).

135. Sunstein, C. R. Republic.com 2.0 . (Princeton University Press, 2007).

136. Jiang, R., Chiappa, S., Lattimore, T., György, A. & Kohli, P. Degenerate Feedback

    Loops in Recommender Systems. in Proceedings of the 2019 AAAI/ACM Conference

    on AI, Ethics, and Society 383–390 (ACM, 2019). doi:10.1145/3306618.3314288.

137. Pagan, N. et al. A Classification of Feedback Loops and Their Relation to Biases in

    Automated Decision-Making Systems. Preprint at http://arxiv.org/abs/2305.06055

     (2023).

138. Stray, J. et al. Building Human Values into Recommender Systems: An Interdisciplinary

     Synthesis. Preprint at https://doi.org/10.48550/arXiv.2207.10192 (2022).

139. Ovadya, A. & Thorburn, L. Bridging Systems: Open Problems for Countering

     Destructive Divisiveness across Ranking, Recommenders, and Governance. Preprint

      at http://arxiv.org/abs/2301.09976 (2023).

140. Yao, B., Jiang, M., Yang, D. & Hu, J. Empowering LLM-based Machine Translation with

     Cultural Awareness. Preprint at http://arxiv.org/abs/2305.14328 (2023).

141. Garimella, K., De Francisci Morales, G., Gionis, A. & Mathioudakis, M. Reducing

     Controversy by Connecting Opposing Views. in Proceedings of the Tenth ACM

     International Conference on Web Search and Data Mining 81–90 (Association for

    Computing Machinery, 2017). doi:10.1145/3018661.3018703.

142. Santos, F. P., Lelkes, Y. & Levin, S. A. Link recommendation algorithms and dynamics

      of polarization in online social networks. Proc. Natl. Acad. Sci. 118 , e2102141118

     (2021).

143. Möller, J., Trilling, D., Helberger, N. & Van Es, B. Do not blame it on the algorithm: an

     empirical assessment of multiple recommender systems and their impact on content

## Страница 32

      diversity. Inf. Commun. Soc. 21 , 959–977 (2018).

144. Bakker, M. A. et al. Fine-tuning language models to find agreement among humans

     with diverse preferences. Preprint at https://doi.org/10.48550/arXiv.2211.15006 (2022).

145. Christiano, P. et al. Deep reinforcement learning from human preferences. Preprint at

     https://doi.org/10.48550/arXiv.1706.03741 (2023).

146. Ouyang, L. et al. Training language models to follow instructions with human feedback.

     Preprint at https://doi.org/10.48550/arXiv.2203.02155 (2022).

147. Perez, E. et al. Discovering Language Model Behaviors with Model-Written

     Evaluations. Preprint at http://arxiv.org/abs/2212.09251 (2022).

148. Claidière, N., Scott-Phillips, T. C. & Sperber, D. How Darwinian is cultural evolution?

     Philos. Trans. R. Soc. B Biol. Sci. 369 , 20130368 (2014).

149. Blancke, S., Van Breusegem, F., De Jaeger, G., Braeckman, J. & Van Montagu, M.

     Fatal attraction: the intuitive appeal of GMO opposition. Trends Plant Sci. 20 , 414–418

     (2015).

150. Miton, H. & Mercier, H. Cognitive Obstacles to Pro-Vaccination Beliefs. Trends Cogn.

      Sci. 19 , 633–636 (2015).

151. Poulsen, V. & DeDeo, S. Cognitive Attractors and the Cultural Evolution of Religion.

     Preprint at https://doi.org/10.31234/osf.io/daxyu (2023).

152. Kirchenbauer, J. et al. A Watermark for Large Language Models. Preprint at

     http://arxiv.org/abs/2301.10226 (2023).

153. Shumailov, I. et al. The Curse of Recursion: Training on Generated Data Makes Models

     Forget. Preprint at http://arxiv.org/abs/2305.17493 (2023).

154. Veselovsky, V., Ribeiro, M. H. & West, R. Artificial Artificial Artificial Intelligence: Crowd

    Workers Widely Use Large Language Models for Text Production Tasks. Preprint at

     https://doi.org/10.48550/arXiv.2306.07899 (2023).

155. Japkowicz, N. & Stephen, S. The class imbalance problem: A systematic study. Intell.

    Data Anal. 6 , 429–449 (2002).

156. Kalish, M. L., Griffiths, T. L. & Lewandowsky, S. Iterated learning: Intergenerational

## Страница 33

    knowledge transmission reveals inductive biases. Psychon. Bull. Rev. 14 , 288–294

     (2007).

157. Axelrod, R. The Dissemination of Culture: A Model with Local Convergence and Global

     Polarization. J. Confl. Resolut. 41 , 203–226 (1997).

158. Touvron, H. et al. LLaMA: Open and Efficient Foundation Language Models. Preprint at

     https://doi.org/10.48550/arXiv.2302.13971 (2023).

159. Autor, D. H. Why Are There Still So Many Jobs? The History and Future of Workplace

     Automation. J. Econ. Perspect. 29 , 3–30 (2015).

160. Ayers, J. W. et al. Comparing physician and artificial intelligence chatbot responses to

     patient questions posted to a public social media forum. JAMA Intern. Med. (2023).

161. Sharma, A., Lin, I. W., Miner, A. S., Atkins, D. C. & Althoff, T. Human–AI collaboration

     enables more empathic conversations in text-based peer-to-peer mental health

     support. Nat. Mach. Intell. 5 , 46–57 (2023).

162. Morris, R. We provided mental health support to about 4,000 people — using GPT-3.

     Here’s what happened. Twitter

     https://twitter.com/RobertRMorris/status/1611450197707464706 (2023).

163. Perry, A. AI will never convey the essence of human empathy. Nat. Hum. Behav. 1–2

     (2023) doi:10.1038/s41562-023-01675-w.

164. Weisz, E. & Zaki, J. Motivated empathy: a social neuroscience perspective. Curr. Opin.

     Psychol. 24 , 67–71 (2018).

165. Carroll, M., Hadfield-Menell, D., Russell, S. & Dragan, A. Estimating and Penalizing

     Preference Shift in Recommender Systems. in Proceedings of the 15th ACM

    Conference on Recommender Systems 661–667 (Association for Computing

     Machinery, 2021). doi:10.1145/3460231.3478849.

166. Bakshy, E., Messing, S. & Adamic, L. A. Exposure to ideologically diverse news and

     opinion on Facebook. Science 348 , 1130–1132 (2015).

167. Robertson, R. E. et al. Users choose to engage with more partisan news than they are

    exposed to on Google Search. Nature 618 , 342–348 (2023).

## Страница 34

168. Art made by artificial intelligence is developing a style of its own. The Economist.

169. Obradovich, N. et al. Expanding the measurement of culture with a sample of two

      billion humans. J. R. Soc. Interface 19 , 20220085 (2022).

170. Garg, N., Schiebinger, L., Jurafsky, D. & Zou, J. Word embeddings quantify 100 years

      of gender and ethnic stereotypes. Proc. Natl. Acad. Sci. 115 , E3635–E3644 (2018).

171. Karjus, A., Solà, M. C., Ohm, T., Ahnert, S. E. & Schich, M. Compression ensembles

     quantify aesthetic complexity and the evolution of visual art. EPJ Data Sci. 12 , 21

     (2023).

172. Santy, S., Liang, J. T., Bras, R. L., Reinecke, K. & Sap, M. NLPositionality:

     Characterizing Design Biases of Datasets and Models. Preprint at

     http://arxiv.org/abs/2306.01943 (2023).

173. Awad, E. et al. The Moral Machine experiment. Nature 563 , 59–64 (2018).

174. Brandt, F., Conitzer, V. & Endriss, U. Computational Social Choice. in Multiagent

    Systems (The MIT Press, 2013).

175. Koster, R. et al. Human-centred mechanism design with Democratic AI. Nat. Hum.

     Behav. 6 , 1398–1407 (2022).

176. Small, C. T. et al. Opportunities and Risks of LLMs for Scalable Deliberation with Polis.

     Preprint at http://arxiv.org/abs/2306.11932 (2023).

177. Rahwan, I. Society-in-the-loop: programming the algorithmic social contract. Ethics Inf.

     Technol. 20 , 5–14 (2018).

178. Jernite, Y. et al. Data Governance in the Age of Large-Scale Data-Driven Language

     Technology. in 2022 ACM Conference on Fairness, Accountability, and Transparency

    2206–2222 (2022). doi:10.1145/3531146.3534637.

179. Laurençon, H. et al. The BigScience ROOTS Corpus: A 1.6TB Composite Multilingual

     Dataset. Preprint at https://doi.org/10.48550/arXiv.2303.03915 (2023).

180. Ziegler, D. M. et al. Fine-Tuning Language Models from Human Preferences. Preprint

      at https://doi.org/10.48550/arXiv.1909.08593 (2020).

181. Bai, Y. et al. Constitutional AI: Harmlessness from AI Feedback. Preprint at

## Страница 35

     http://arxiv.org/abs/2212.08073 (2022).

182. Bergstrom, C. T. & Lachmann, M. The Red King effect: When the slowest runner wins

     the coevolutionary race. Proc. Natl. Acad. Sci. 100 , 593–598 (2003).

183. Bostrom, N. Superintelligence: Paths, Dangers, Strategies. (Oxford University Press,

     2014).

184. Wilson, D. S. et al. Multilevel cultural evolution: From new theory to practical

     applications. Proc. Natl. Acad. Sci. U. S. A. 120 , e2218222120 (2023).
