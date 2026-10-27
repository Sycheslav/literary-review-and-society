---
id: ijcai-2025-1144-text
type: material
title: 'Shaping Shared Languages: Human and Large Language Models'' Inductive Biases
  in Emergent Communication'
work_id: ijcai-2025-1144
source_url: https://ijcai.org/proceedings/2025/1144.pdf
retrieved_at: '2026-10-27'
conversion: pdf_text_extraction
quality_note: Текст извлечён из PDF с сохранением номеров страниц. Порядок колонок,
  таблицы, формулы и подписи могут быть искажены; рисунки доступны по ссылке на PDF.
  Это текстовая конверсия, не визуально эквивалентный оригинал.
language: original
sha256_text: 34b25e533688b240debbc0b5180cd02d2c2dd59c23b51f615a7a3897faefd8c9
---

> Источник: [https://ijcai.org/proceedings/2025/1144.pdf](https://ijcai.org/proceedings/2025/1144.pdf). Текст извлечён из PDF с сохранением номеров страниц. Порядок колонок, таблицы, формулы и подписи могут быть искажены; рисунки доступны по ссылке на PDF. Это текстовая конверсия, не визуально эквивалентный оригинал.

## Страница 1

                           Proceedings of the Thirty-Fourth International Joint Conference on Artiﬁcial Intelligence (IJCAI-25)
                                                            Special Track on Human-Centred AI




   Shaping Shared Languages: Human and Large Language Models’ Inductive
                      Biases in Emergent Communication

       Tom Kouwenhoven1 , Max Peeperkorn2 , Roy de Kleijn3 and Tessa Verhoef1
          1Leiden Institute of Advanced Computer Science, Leiden University, Netherlands,
                    2School of Computing, University of Kent, United Kingdom
             3Cognitive Psychology Unit, Institute of Psychology, Leiden, the Netherlands
                         {kouwenhovent, verhoeft}@liacs.leidenuniv.nl

                  Abstract                          languages [Kirby et al., 2015]. To investigate if LLMs show
                                                                  similar outcomes, Kouwenhoven et al. [2025] created a set-
    Languages are shaped by the inductive biases of                                                                   ting in which LLMs learned an initially holistic unstructured
     their users.  Using a classical referential game,                                                                               artificial language and then used this repeatedly to commu-
   we  investigate how  artificial languages  evolve                                                                  nicate in a referential game. They showed that the linguistic
    when optimised for inductive biases in humans                                                                   structure of these languages increased and more successful
    and large language models (LLMs) via Human-                                                       communication between LLM agents—again mirroring ob-
    Human, LLM-LLM and Human-LLM  experi-                                                                 servations from human experiments [Kirby et al., 2015].
     ments. We show that referentially grounded vocab-
                                                        With AI systems being increasingly incorporated into our     ularies emerge that enable reliable communication
                                                                 daily lives [Brinkmann et al., 2023], repeated interactions     in all conditions, even when humans and LLMs
                                                           with machines become increasingly important to maintain     collaborate. Comparisons between conditions re-
                                                           alignment [Mikolov et al., 2018; Beuls and Van Eecke, 2024]     veal that languages optimised for LLMs subtly dif-
                                                      and referential grounding [Kouwenhoven et al., 2022]. In the     fer from those optimised for humans. Interestingly,
                                                             case of humans, these repeated interactions cause languages     interactions between humans and LLMs alleviate
                                                                   to evolve such that they accommodate for specific abilities     these differences and result in vocabularies more
                                                      and preferences of minority individuals at the group level    human-like than LLM-like. These findings advance
                                                              [Josserand et al., 2024]. Since the seemingly similar ways     our understanding of the role inductive biases in
                                                                      that languages adapt and optimise as a result of learning and   LLMs play in the dynamic nature of human lan-
                                                           use in Human-Human and LLM-LLM interactions, the ques-    guage and contribute to maintaining alignment in
                                                                   tion arises whether these processes can also be used to evolve    human and machine communication.  In particu-
                                                           a language that is optimised for humans and LLMs. In other      lar, our work underscores the need to think of new
                                                          words; can humans and LLMs collaboratively shape a lan-   LLM training methods that include human interac-
                                                       guage that is easy to learn for both, and allows for successful     tion and shows that using communicative success
                                                       communication? If so, what do these languages look like?     as a reward signal can be a fruitful, novel direction.
                                                             This work investigates these questions by extending earlier
                                                   work by Kouwenhoven et al. [2025]. Firstly, we provide ex-
1  Introduction                                          perimental data of humans playing the same referential game
Languages adapt to how they are learned and used. The pri-     that Kouwenhoven et al. [2025] used with LLMs, allowing
mary reason is the continuous influence of individuals’ (learn-    comparisons between languages evolved through LLM-LLM
ing) biases and pressures that slowly shape languages to be-     interactions with those resulting from Human-Human inter-
come more structured, easier to learn and communicatively     actions. Secondly, we experiment with human-LLM collabo-
efficient [Smith, 2022]. Although a wealth of experiments in     ration (Figure 1)1. While it is unclear how human and LLM
the field of language evolution have contributed to this [i.a.,     abilities exactly differ, this allows us to test whether an ar-
Kirby et al. 2014; Raviv et al. 2019] , only relatively recently      tificial holistic language can be optimised for the inductive
have we started investigating whether these principles can be    biases of two different types of language learners. If shared
applied to large language models as well [Galke et al., 2024;    vocabularies of signals and meanings emerge that allow for
Kouwenhoven et al., 2025].  For instance, more system-    successful communication, one could argue that there has
atic and structured languages are typically easier to learn    been some form of referential grounding, a prerequisite for
by humans who are asked to learn novel artificial languages    successful communication [Clark and Brennan, 1991].  Fi-
[Raviv et al., 2021].  Recent work by Galke et al. [2024]     nally, Human-LLM collaboration allows investigating if and
showed that the same is true for recurrent neural networks
and LLMs. Moreover, transmission of initially unstructured        1This study was approved by the ethics department of Leiden
language systems over generations of human learners (i.e., it-     University (2024-03-11-R.E. de Kleijn-V1-5354).  The code and
erated learning) increases structure and learnability in these     data are available on OSF https://osf.io/ep6mw/




                                                  10298

## Страница 2

                           Proceedings of the Thirty-Fourth International Joint Conference on Artiﬁcial Intelligence (IJCAI-25)
                                                            Special Track on Human-Centred AI





Figure 1: The experimental blocks in our experiment. Participants go through the exposure and guessing block twice before labelling each
of the 15 training stimuli in the labelling block. The communication block is performed for 4 rounds each consisting of 30 tasks T, where
participants alternate speaker-listener roles for each stimulus once. Participants label 27 (15 original and 12 novel) stimuli in the testing block.
Image is adopted from Kouwenhoven et al. [2025].


how the evolved language differs from languages that evolve    served in humans (e.g., the confirmation bias), but are rather
within Human-Human and LLM-LLM interactions.              interested in implicit inductive biases that may result in bi-
  Our results show that structured and referentially grounded    ased language learning.  This is relevant since seemingly
languages can emerge when humans and LLMs interact re-     arbitrary aspects of linguistic structure may actually result
peatedly. The languages that emerge from these interactions    from general learning and processing biases deriving from the
tend to be more human-like than LLM-like, suggesting that     structure of thought processes, perceptuo-motor factors, cog-
the LLMs are flexible towards the strong human preferences     nitive limitations, and pragmatics [Christiansen and Chater,
that shape the languages.  Finally, languages optimised for    2008].  For humans, inductive biases like a preference for
LLMs have less variation and are more degenerate than those     compressibility, simplicity, or efficiency [Kirby et al., 2015;
optimised for humans.                                     Tamariz and Kirby, 2015; Gibson et al., 2019] naturally shape
                                              how languages evolve. Some even argue that humans’ cog-
2  Background                                                nitive limitations may be beneficial for language acquisition
                                                     [DeCaro et al., 2008; Poletiek et al., 2018]. In the case of sim-
We discuss relevant research on language evolution, the role                                                                  ulations of (reinforcement learning) agents, inductive biases
of inductive biases, and their relevance to LLM research.                                                                   typically do not match those present in humans. As such, they
                                                                are often induced artificially by incorporating biases to guide2.1  Language evolution
                                                                learning dynamics as a means to recover human-like proper-
Language allows us to communicate successfully because of                                                                           ties [for a review see, Galke and Raviv 2025] . In the case of
the vocabulary we share, but also due to its open-ended na-                                                LLMs, being fundamentally different from humans (although
ture, enabling the possibility to express novel meanings via                                                                         this is an ongoing debate Kozachkov et al. [2023]), we focus
compositional semantics. This defining feature of human lan-                                                    on increasingly apparent inductive biases of the transformer
guage means that the meaning of any phrase is derived from                                                                   architecture [Futrell and Mahowald, 2025] that may influence
the meanings of its individual components and the rules by                                              how languages evolve in the context of our experiment.
which they are combined [Hockett, 1960].  The evolution
of compositionality has been investigated abundantly in the     One example is a bias for simplicity. Rende et al. [2024]
field of language evolution through human experiments [e.g.,     carefully cloned training data such that texts only contained
Kirby et al. 2008; Raviv et al. 2019] and computational sim-    between-token interactions up to a certain degree. Revealing
ulations [e.g., de Boer 2006; Steels et al. 2012; Lazaridou     that transformers first learn low-degree between-token inter-
and Baroni 2020; Kouwenhoven et al. 2024] . These experi-     actions, and only later learn high-degree interactions. Sim-
ments typically involve learning artificial languages or play-      ilarly, LLMs pick up grammar as the simplest explanation
ing a signalling game. Here, learning artificial languages im-     for data early during training. Only shortly thereafter, gen-
poses a constraint which is believed to lead to more structured     eral linguistic capabilities arise [Chen et al., 2024]. More-
languages [Kirby et al., 2015]. Communication in signalling     over, transformers have an inductive bias favouring structure
games imposes a pressure for expressivity, requiring partic-     in (natural) language. For example, GPT-2 models struggle
ipants to develop a vocabulary of signal-meaning mappings     to learn impossible languages (e.g., languages lacking hierar-
that allows them to communicate about novel stimuli. In this     chical structure or having unnatural or irreversible word or-
case, some form of referential grounding must be established     ders) compared to English [Kallini et al., 2024], indicating
through the process of repeated interactions.  Participants–     that structure aids language learning. Additionally, the abil-
human or machine–generally establish novel signal-meaning     ity to generalise to novel stimuli increases when LLMs learn
mappings quickly that enable successful communication.       from more structured artificial languages [Galke et al., 2024;
                                                  Kouwenhoven et al., 2025].  Recent work also revealed a
2.2  Inductive biases                                                        primacy and recency bias in LLMs. They handle informa-
An important aspect in this paper is the notion of biases.     tion better when it appears either at the beginning or towards
Here, we do not so much focus on behavioural biases ob-    the end of a prompt [Liu et al., 2024; Mina et al., 2025].




                                                  10299

## Страница 3

                           Proceedings of the Thirty-Fourth International Joint Conference on Artiﬁcial Intelligence (IJCAI-25)
                                                            Special Track on Human-Centred AI


Finally, LLMs have an inductive preference for verbose an-
swers [Zheng et al., 2023; Saito et al., 2023], while humans
prefer short, efficient answers [Gibson et al., 2019].
  Although the underlying mechanisms of these biases differ
between humans and machines, we find substantial overlap
in terms of their behavioural effects. As such, we hypoth-
esise that the aforementioned effects of continuous learning
and use of language will also come into play when humans
and machines collaborate and result in a language optimised
for the preferences of both entities.                               Figure 2:  Left: Humans learn the language by being exposed to
                                                                         stimuli and the corresponding signals in the exposure block. Right:
2.3 Why is this relevant for LLMs?                                               LLMs learn the same vocabulary by virtue of in-context learning.
It is increasingly assumed that LLMs can be used as mod-   A JSON-like structure containing the signal-meaning mappings is
els of language [Milli`ere, 2024] and that classical approaches    prepended to each prompt to serve as learning stimuli.
from emergent communication can inform more human-like
language learning in machines [Beuls and Van Eecke, 2024;    experiment, 30 of whom formed 15 Human-Human pairs, and
Galke and Raviv, 2025].  Moreover, language modelling    the remaining 15 interacted with an LLM in a Human-LLM
and linguistics should complement each other [Futrell and     setup. This allows us to directly compare languages adapted
Mahowald, 2025] as comparing LLMs to human language     for human preferences to those adapted for the LLM-LLM
users, can help answer cognitive and typological questions    simulations [Kouwenhoven et al., 2025]. But perhaps most
[Warstadt and Bowman, 2022; van Dijk et al., 2023]. Vice-     interestingly, the Human-LLM condition provides an oppor-
versa, methods from psychology can help to quantify induc-     tunity to investigate whether languages can be optimised for
tive biases of LLMs [Griffiths et al., 2024; Galke and Ra-     entities with different mechanisms and cognitive capacities
viv, 2025] or vision-and-language models [e.g., Verhoef et     (e.g., memory), and if so, we can see what these look like.
al. 2024] and compare them to known biases in humans.         During the experiment, participants learn an artificial lan-
  For example, the process of iterated learning, in which    guage and use it during communication. This language com-
the transmitted information will ultimately come to mirror     prises a meaning space consisting of three attributes (shape,
the minds of the learners [Griffiths and Kalish, 2007], has     colour, and amount) that each can have three values, totalling
been used to discover inherent LLM biases. Ren et al. [2024]     to 27 unique stimuli. The corresponding labels are initialised
for example showed that iterated learning causes subtle bi-    following the design of Kirby et al. [2008], creating a holistic
ases in LLM priors to be gradually amplified, Kouwenhoven     artificial language without structure (e.g., ”watopo”, ”sana-
et al. [2025] concluded that artificial languages can be opti-    sowi”, ”pikuku”) that contained a limited set of characters
mised for LLM-augmented agents with iterated learning, and     to prevent participants from writing English words. Partici-
Shumailov et al. [2024] argue that generative models con-    pants first learn 15 random signal-meaning pairs individually
verge on uninterpretable junk when they are trained on AI-    through exposure, guessing, and labelling blocks. Hereafter,
generated data. While the latter is typically seen as drift, cru-     participants use the newly acquired language to communicate
cially, we argue that what this shows is that the generated con-     in a referential game. In this game, the speaker observes a tar-
tent is slowly shaped to be optimised for model preferences,    get stimulus and labels it. Using this label as a signal, the lis-
not for humans. To prevent what Shumailov et al. [2024]     tener is then tasked with identifying the correct target among
call model collapse, they argue that genuine human interac-     three distractors. Cooperation is successful when the listen-
tions with systems will be increasingly important. Similarly,     ers’ guess matches the target. After the communication block,
Smith et al. [2024] responded that, like in human language     there is a testing block in which participants individually label
transmission, the need to be expressive may prevent both the    27 meanings, including 12 unseen meanings. The duration of
convergence on a few frequent uninformative sentences and    the entire experiment is roughly 70 minutes. An experiment
the emergence of a long tail of uninterpretable junk.            overview is provided in Figure 1.
  These findings advance our understanding of internal LLM
representations. Thereby contributing to maintaining align-    3.1 LLMs as participants
ment and mutual understandability between humans and ma-                                            Human participants learn the language by going through ex-
chines in interaction. We address this by examining how                                                           posure and guessing blocks twice. They iteratively go over
adaptation processes unfold when humans and machines in-                                                                the 15 training stimuli and extract some apparent, but not
teract and develop a novel artificial language together.                                                                   present, patterns or consistencies. They are then tasked to la-
                                                                bel the stimuli, before moving on to the communication block
3  Methodology                                             in which they interact with another human or a LLM. In ei-
This experiment revolves around the classical referential     ther case, they were told that they interacted with a human.
Lewis game as implemented in Kouwenhoven et al. [2025],   The LLM agents, however, are not updated and receive in-
who based their setup on previous work in emergent com-     structions to learn the languages by virtue of in-context learn-
munication[e.g., Raviv et al. 2021; Kirby et al. 2015] . We     ing.  Specifically, the stimuli are presented in a structured
extend the setup used by Kouwenhoven et al. [2025] to in-    JSON-like format (Figure 2) that proved effective in Galke
corporate humans. In total, 45 participants participated in the     et al. [2024] and Kouwenhoven et al. [2025]. As such, we




                                                  10300

## Страница 4

                           Proceedings of the Thirty-Fourth International Joint Conference on Artiﬁcial Intelligence (IJCAI-25)
                                                            Special Track on Human-Centred AI



<|begin_of_text|><|start_header_id|>system<|end_header_id|> You are a language learner who has to learn an artificial
language with words and their corresponding features. Your task is to complete the vocabulary by generating a word that
describes the last item. Only respond with the word.<|eot_id|><|start_header_id|>user<|end_header_id|>\n
{’shape’:2,’colour’:’orange’,’amount’:1,’word’:’giniwite’}
    :
{’shape’:3,’colour’:’blue’,’amount’:2,’word’:’tusetetu’}
{’shape’:1,’colour’:’green’,’amount’:3,’word’:’<|eot_id|><|start_header_id|>assistant<|end_header_id|>[comp/prefill]


Prompt 1: A prompt snippet used for labelling and guessing. During communication, we add a communicativeSuccess attribute, update
the system prompt to inform about the communicative task, and instruct that ‘Communicative success is important’.


assume that these signal-meaning mappings in the context of    3.2  Metrics
a prompt provide enough (distributional) information for a
                                                           Besides comparing the percentage of communicative successLLM to learn a mapping between the attributes of the stimuli
                                                         (PercCom), the primary goal of this work is to understandand signal syllables (Prompt 1). Although the prompt struc-
                                                      what a language looks like when optimised for different en-ture ‘invites’ the LLM to infer a signal from the stimulus at-
                                                                                    tities. Specifically, we investigate whether the languages dis-tributes, we are agnostic about how exactly and what kind
                                                             play some degree of structure in the form of compositional-of mapping is deduced, but are interested in the resulting be-
                                                                                    ity.  In this experiment, this means that attribute values arehaviours.  In the experiments, we use the instruction-tuned
                                                          denoted with label parts that are reused to describe other sim-variant of Llama 3 70B [Llama Team, 2024] with greedy sam-
                                                                               ilar stimuli. Capturing this is not at all trivial, especially pro-pling. We opt for an instruction-tuned model since this allows
                                                           vided the freedom given to participants when they label stim-us to specify the need for communicative success. This poten-
                                                                                uli. A common metric that gauges whether similar mean-tially affects how the model’s inductive biases are expressed,
                                                               ings map to similar signals is Topographic Similarity [Top-but we leave this to future work.
                                                            Sim, Brighton and Kirby 2006]  .  While providing a good
  One of essentially two tasks is performed throughout the     indication of compositional language use,  it does not take
experiment:  labelling or guessing.  The labelling block     variability in language, such as word-order freedom, into ac-
and speaking in the communication block involve labelling,    count.  It could therefore show an incomplete picture (i.e.,
and the guessing block and discrimination during commu-    a low TopSim) since languages can still be compositional de-
nication involve guessing.  Generating signals is achieved     spite having multiple word orders, the existence of synonyms,
through prompt completion.  Guessing is done by prefill-    or homonyms [Conklin and Smith, 2023].  Hence, we re-
ing the prompt with distractor stimuli or labels and selecting    port multiple metrics in addition to TopSim that together in-
the item with the highest probability. This alleviates LLMs’     dicate the degree of compositionality.  Specifically, on syn-
inconsistent behaviour in answering multiple-choice ques-   onymy (one-to-many mappings), homonymy (many-to-one),
tions [Khatun and Brown, 2024], and follows recommenda-    and word order freedom (Freedom), for which Conklin and
tions from computational linguistics [Hendrycks et al., 2021;    Smith [2023] proposed entropy-based metrics. A language
Wang  et  al., 2024].   During communication, we add a    where each attribute value is encoded by a single character in
communicativeSuccess attribute set to 1 if the previ-    a position has low entropy, and thus a low synonymy. Lan-
ous interaction for this stimulus was successful and zero oth-    guages with a uniform distribution over all characters to refer
erwise.  This attribute functions as a memory between in-     to an attribute value have high synonymy. Homonymy is sim-
teractions and acts as a pressure for expressivity.  In hu-      ilar, it looks at how many attribute-values a character in a po-
man language evolution, such pressure plays an important     sition can refer to, i.e., when homonymy ≈1 characters can
role since it prevents languages from becoming degenerate   map to multiple attribute-values. Finally, we compute word-
[Kirby et al., 2015].  Importantly, the agents observe the    order freedom (freedom) to account for variability in the order
training vocabulary in their context with the current stimu-    by which labels are composed. It assesses whether each value
lus in the guessing and labelling block, rendering them as    of a specific attribute is encoded in a specific position of the
simple look-up tasks. We do, however, not include the cur-     label, i.e., there is little freedom, or whether attribute values
rent stimulus during communication and testing, requiring    can be encoded in any position of the label, i.e., displaying a
the agents to extract an appropriate mapping and generalise    high degree of word order freedom (Freedom ≈1).
to new stimuli. Akin to common practice in older simula-      Systematic generalisation  to novel  stimuli  is assessed
tions [e.g., Steels et al. 2012] ), the agent vocabularies are    through the generalisation score GenScore from [Raviv et al.,
updated when labels are generated after the labelling block    2021].  It gauges whether the labels produced for unknown
and during the communication block. In particular, each time      (i.e., testing) stimuli are labelled in consistent ways with la-
a label is generated for a stimulus, it replaces its current la-    bels produced for similar known (i.e., training) stimuli.  In
bel value. Hence, the agent’s vocabularies of signal-meaning    addition to character-based metrics, we assess whether par-
mappings evolve during the simulation. As such, prompts     ticipants re-use parts of labels in different labels by comput-
are slightly different after each interaction. Moreover, given    ing the Ngram diversity [Li et al., 2016] over all the pro-
the primacy and recency bias in LLMs [Liu et al., 2024;    duced labels in a block. Ngram diversity is the average ratio
Mina et al., 2025], we shuffle the vocabulary before creating    of unique vs.  total Ngrams for N ∈{1, 2, 3, 4} in all la-
prompts to account for unwanted ordering effects.                 bels. Low Ngram diversity implies that labels are composed




                                                  10301

## Страница 5

                           Proceedings of the Thirty-Fourth International Joint Conference on Artiﬁcial Intelligence (IJCAI-25)
                                                            Special Track on Human-Centred AI


of reused parts and high diversity means that labels do not
share many Ngrams, thus are very different. The percent-
age of unique labels captures the degree of degeneracy (Ra-
tioUniLabels).  Finally, we measure whether a pressure for
communicative success, known to drive efficiency in human
experiments [Smith and Culbertson, 2020], results in shorter
labels using WordLength.

4  Evaluation

We use linear mixed effect models to analyse our results.     Figure 3: The average communicative performance (PecrCom) per
Specifically, we fit PercCom ∼Metric + (1|RoundId)    round across the conditions. Communication steadily increases over
where Metric can either be TopSim, RatioUniLabels and is    rounds except for the LLM-LLM condition, in which coordination
the average value of two players in a round.  To measure    happens in the first round but does not increase afterwards.
effects across conditions, we use PercCom ∼Metric +
Metric∗Condition+(1|RoundId). The slope ˆβ determines                                                                      results of LLM-LLM (n = 15) simulations 2. LLMs cor-
the direction of the effect and the rate of change. Addition-
                                                                     rectly guessed labels for 97.3% ± 16.1, and the produced
ally, we use conditional R2c, and marginal R2m [Nakagawa                                                                   labels in the labelling block exactly matched the initial la-and Schielzeth, 2013]. The former considers fixed and ran-
                                                                 bels for 45.3% ± .498. This indicates that learning the lan-
dom effects to show how much variance can be explained by
                                                       guage is easier for LLMs than for humans. This is not sur-
the model. Higher values of R2c indicate that the model cap-                                                                  prising since the target stimulus is present in the prompt
tures more variance and that correlations are stronger. R2m                                                               context in these blocks and there is virtually no memory
describes how much variance can be explained by the fixed
                                                                     constraint.  Communication happens reliably as well (Fig-
effects. We report Pearson’s R to describe the relationship
                                                              ure 3), however, communication can–but does not always–
between TopSim and GenScore, and use a paired T-test, or
                                                                       result in degenerate vocabularies with few uniquely used la-
Welch’s test when assumptions on normality and variance
                                                                 bels (RatioUniLabels = .621 ± .198), significantly dif-
were not met, to assess whether metrics significantly differ.
                                                                  fering from human diversity in labels (RatioUniLabels =
                                                           .841 ± .201, t(28) = −3.01, p = .005, Figure 4).  Inter-
5  Results                                                       estingly, this happens even though the ratio of unique la-
                                                                 bels is modestly related to PercCom during communicationHuman artificial language learning  happened in a way
                                                                                 (ˆβ = .300 ± .134, R2c = .180, R2m = .092, p = .025), sug-that was expected based on earlier work [Kirby et al., 2015;
Raviv et al., 2021]. The results of these 15 Human-Human    gesting that expressiveness is beneficial. A tentative explana-
(n = 30) experiments act as a benchmark of human be-     tion could be that aligning vocabularies happens much faster
                                                             than in the other conditions. While humans would optimisehaviour in our setup. We find that learning artificial lan-
                                                           languages whilst retaining expressiveness, LLMs start pro-guages is not a trivial task.  After two rounds of exposure,
                                                          ducing more duplicate and longer labels.labels were correctly guessed approximately half the time
(47.0% ± 49.9).   Freely labelling stimuli was done cor-   What about Human-LLM communication?  Our main
rectly only in 10.4% ± 30.6 of the labels.  Nevertheless,    contribution comes from the Human-LLM condition in which
reliable communication protocols emerged during the com-     participants (n = 15) collaborated with LLMs. Successful
municating block, interactions were significantly more suc-    communication necessitates that both entities adopt their be-
cessful in the final round compared to the first round (Fig-    haviours and that a reliable referentially grounded vocabulary
ure 3, t(14) = −6.30, p < .001, d = 1.63, PercComr1 =    emerges.  This is especially interesting since we observed
.518 ± .176, PercComr4 = .798 ± .169). TopSim positively     that the abilities to learn artificial languages differ between
influenced communication (PercCom, ˆβ = .087±.009, R2c =   humans and LLMs, and that the optimised languages differ
.731, R2m = .714, p < .001) and generalisation to new stim-     in their use of homonyms, i.e., duplicate labels for different
uli was more consistent when the languages that evolved dur-    meanings. Despite these differences, communication is still
ing communication displayed more TopSim (r = .826, p <    possible (PercCom = 0.662 ± 0.161, Figure 3). The fi-
.001). A qualitative inspection revealed that, during commu-    nal performance was lower than the other conditions, but the
nication, participants quickly replaced the labels they learned    data suggests that prolonged interactions may result in higher
before, with only parts of labels ‘surviving’ this cut. More-    communicative success. This exciting result shows that, even
over, the number of shapes displayed (1, 2, or 3) was some-    though the learning mechanisms of both entities may initially
times encoded by repeating the shape and colour labels sev-     learn different signal-meaning relations, communication is
eral times, e.g., ”pufepufe” was used to indicate two green     possible. As such, the process of repeated learning and use
shapes. Although expressive, this solution does not gener-    of these artificial languages can overcome initial differences
alise to larger numbers and is therefore arguably not compo-    and indeed shape languages to be optimised for humans and
sitional.
                                                      2We also ran simulations with other (smaller) models (i.e. Llama
Artificial language learning in LLMs  was assessed by    3 8B, OLMo 2 7B 1124 & OLMo 2 13B 1124). Communication was
Kouwenhoven et al. [2025].  Here, we briefly discuss the     successful but more difficult. OLMo 2 models struggled most.




                                                  10302

## Страница 6

                           Proceedings of the Thirty-Fourth International Joint Conference on Artiﬁcial Intelligence (IJCAI-25)
                                                            Special Track on Human-Centred AI





Figure 4: An overview of structure metrics used to measure compositional structure in the languages produced in the testing block. Generally,
languages optimised for LLMs differ from those optimised for humans. Languages optimised for both mediate these differences. The
asterisks indicate whether an independent Welch’s t-test reveals a significant difference between the conditions where ∗p < .05, ∗∗p < .01,
∗∗∗p < .001. TopSim and WordLength are normalised to values between 0 and 1 for visualisation purposes.


LLMs. Out of 15 participants, 9 believed their partner was    munication. Nevertheless, a linear mixed effects model fit-
another human, despite communicating with an LLM. Per-    ted to predict PercCom with TopSim, the experimental con-
formance did not change significantly as a result of this.          dition, the interaction between them, and a random effect for
                                                        round revealed that TopSim strongly affects PercCom (ˆβ =What do these languages look like?  Having established
                                                           .092 ± .008, R2c = .580, R2m = .580, p < .001). This meansthat participants can communicate, we now examine if and
                                                                      that irrespective of the experimental condition, a higher de-how languages differ across different experimental condi-
                                                             gree of structure in produced labels was beneficial for com-tions, focusing on the language metrics. Generally, we find
                                                             munication. Moreover, generalisation to novel stimuli hap-that languages optimised for LLMs differ from those opti-
                                                       pened more consistently when the languages in the last roundmised for humans, and that languages optimised for both are
                                                               of communication displayed more structure.  Again, con-more human-like than LLM-like (Figure 4). This is most no-
                                                            firmed by the mixed effects model predicting GenScore withtably visible in the ratio of uniquely produced labels, their
                                                         TopSim, the condition, their interaction and round as randomrespective lengths, and the Ngram diversity. Languages op-
                                                                      effect (ˆβ = .047 ± .006, R2c = .784, R2m = .673, p < .001).timised for humans contain more unique labels, have higher
Ngram diversity, and are shorter when compared to languages       Generally, we find that while remarkably human-like, the
optimised for LLMs. The latter of which corroborates the    languages shaped by intrinsic LLM constraints are in fact
well-known human preference for efficient communication    subtly different from those shaped by humans. Thereby pro-
[Smith and Culbertson, 2020]. The length, number of unique    viding a more nuanced view of earlier work [Kouwenhoven
labels, and diversity of label parts resulting from human-     et al., 2025] that only looked at TopSim and NGram diversity.
LLM collaboration seem to adhere more to human prefer-    Returning to the question of what languages optimised for en-
ences than to LLM preferences. A similar pattern is visi-      tities with different inductive biases look like; they seem to be
ble for the compositionality metrics that allow for variation.    shaped in such a way as to conform more to human pressures
There is more homonymy in LLM-optimised languages than    than those present in LLMs.
in human-LLM languages, suggesting that the meanings of
these words should be disambiguated by the context (i.e., the   6  Discussion
distractor stimuli) in which they appeared. This strategy is
not straightforward and perhaps requires more cognitive ca-   The primary goal of our work was to investigate if and how
pacity than available for humans, and may therefore be lower     artificial languages differ when optimised for human and ar-
in the collaborative condition. It moreover seems that humans     tificially intelligent language users. We extended work sug-
introduce synonymy into the languages, i.e., they use more    gesting that LLMs can shape and use languages in referen-
than a single character to refer to specific attribute values.      tial communication [Kouwenhoven et al., 2025]. Their setup
This introduces variability that can explain why the ratio of    was adapted so that participants could interact with other hu-
unique labels and Ngram diversity is higher in the collabora-   man participants and with LLMs.  This enabled controlled
tive condition. Finally, the word order of messages is some-    comparisons between the languages that evolve under dif-
what flexible for humans, while LLMs converge to a more     ferent conditions.  Our findings showed that human pairs,
fixed word order. The languages shaped by both seem to have   LLM pairs and Human-LLM pairs can learn and success-
human-like word order freedom. While these variations may     fully use languages in a referential game. This suggests that
introduce difficulties for LLMs to decode the meanings dur-    mechanisms that influence how language evolves for humans,
ing communication, we do not find that PercCom is affected     specifically, learning and using a language repeatedly [e.g.,
by the degree of homonymy, synonymy, or freedom.            Smith 2022] , also apply to computational and collaborative
  The canonical TopSim metric suggests structure is lower   Human-LLM settings. In all conditions, successful commu-
when humans and LLMs collaborate compared to LLM sim-    nication was achieved by optimising an initially holistic un-
ulations. This makes intuitive sense, given our observation     structured vocabulary, to fit better with the inductive biases
that it was also more difficult to establish successful com-    of the language users. Comparison of the languages across




                                                  10303

## Страница 7

                           Proceedings of the Thirty-Fourth International Joint Conference on Artiﬁcial Intelligence (IJCAI-25)
                                                            Special Track on Human-Centred AI


conditions revealed that 1) while very human-like, LLM lan-    competences or language understanding, as long as the solu-
guages tend to be more strict (i.e., there is little variation)     tion generalises.
and that 2) languages adapted for human-LLM pairs tend     Our results concretely corroborate the idea that insights
to be more human-like than LLM-like (i.e., they are more    from emergent communication literature can inform and im-
diverse and have variation).  Overall, our findings corrobo-    prove language learning in language models [Smith et al.,
rate earlier claims that interactions between humans and ma-    2024; Beuls and Van Eecke, 2024; Galke and Raviv, 2025].
chines are beneficial to establishing some form of referential   We observed that just as languages accommodate for spe-
grounding [Mikolov et al., 2018; Kouwenhoven et al., 2022;     cific abilities and preferences in humans [Josserand et al.,
Beuls and Van Eecke, 2024].                                  2024], Human-LLM languages also adapt to the abilities and
  On the level of vocabulary, the ratio of uniquely produced    preferences of their users in that they are more human-like
labels by LLMs revealed that vocabularies can become de-    than LLM-like. Specifically, human preferences for simplic-
generate. While this is also observed in human experiments     ity and efficiency [Kirby et al., 2015; Gibson et al., 2019]
when there is no pressure against it [Kirby et al., 2008], com-     likely drove vocabulary diversity while reducing lengths to
municative success as a pressure is typically enough to pre-    human-like levels.  This indicates that, in this experiment,
vent this [e.g., Kirby et al. 2015] . In contrast, even though   LLMs are more flexible communicative partners than hu-
the LLMs in our experiments were tested in a communica-    mans. These findings reinforce the idea that repeated inter-
tive setting, this did not prevent the languages from becom-    actions with humans are crucial to maintaining referentially
ing underspecified. Possibly because the instruction to obtain    grounded human-like vocabularies instead of training only
communicative success was not explicit enough and did not    on recursively generated data [e.g., Shumailov et al. 2024]
induce enough pressure for expressivity. Or it may be that    or using AI-augmented optimisation algorithms [e.g., Lee et
the distractors did not require the labels to be very specific     al. 2024] . In particular, this underscores the need for new
but instead allowed using underlying concurrences that were   LLM training methods that include human interaction and
picked up by LLMs but not by humans. This would also ex-    shows that using communicative success as a reward signal
plain the wide range of scores on this RatioUniLabels. On a    can be a fruitful, novel direction [e.g., St¨opler et al. 2025]
character level, we see related patterns in the form of high lev-       Finally, we acknowledge  that our  results depend on
els of homonymy, meaning that attribute values could be as-    methodological considerations such as in-context learning,
sociated with multiple label characters, and that context was    the prompt format, and the sampling method. However, the
necessary to disentangle the correct meaning. While the du-    primary goal was to extend previous work by investigating
plicate labels can explain these scores for LLM simulations,      if languages optimised for human and LLM preferences can
this is not the case for humans. Here, the surprising behaviour    evolve. As such, we stayed close to well-known experimental
of repeating label parts to indicate the amount attribute can    methods in language evolution research and used prompts de-
explain the homonymy values.                                veloped in Kouwenhoven et al. [2025]. Importantly, we did
  Since we do not modify the tokeniser to deal with our arti-    not optimise for communicative success, human-like results,
ficial languages, the tokenisation process plays an important    or compositional vocabularies.
role in these simulations. One could argue that this helps in
learning a mapping between tokens and meanings. The mean-                                            7  Conclusion
ing attributes and their values are common English words,
while the initialised artificial languages are non-words to-    Given the growing presence of contemporary LLMs in ev-
kenised into separate tokens. Meaning that the LLM is pre-    eryday life, there is an increasing need to understand their
sented with a parsed set of attribute meanings and chunks of    inductive biases to maintain alignment with humans. We
labels (i.e., the tokens). All that is left is to attend to a spe-     tested whether general mechanisms of language learning and
cific token given a specific meaning attribute, which is exactly    use have similar effects in an artificial language learning ex-
what a transformer model is made for. This does, however,    periment conducted with Human-Human, LLM-LLM, and
not undermine that these models indeed attribute attention   Human-LLM pairs. We show that referentially grounded vo-
correctly and that this produces human-like languages.           cabularies emerge in all conditions, indicating that initially
  The fact that a shared referential communicative system    unstructured artificial languages can be optimised for induc-
can be established is quite remarkable. Humans and LLMs     tive biases of different language users. Comparisons across
may well rely on completely different mechanisms, and learn    conditions revealed that, while similar to human vocabular-
different relations between meanings and signals. Yet, their     ies, LLM languages are subtly different. Interestingly, these
vocabularies become referentially grounded and are pragmat-    differences are alleviated when humans and LLMs collabo-
ically understood by both humans and LLMs. This confirms     rate. This underscores that to achieve successful interactions
that even though LLMs are not trained for this task, they can    between humans and machines, it is essential to optimise for
be used as relatively unbiased language learners [Wilcox et    communicative success. Overall, these findings advance our
al., 2023], providing a concrete example of how a pragmatic    understanding of how LLMs may adapt to the dynamic nature
view of understanding as argued for by van Dijk et al. [2023],    of human language, contribute to its evolution, and maintain
can be beneficial for collaborative tasks. This work also un-    alignment with human understanding of language. While our
derscores the point made by Milli`ere and Rathkopf [2024]    setup only uses simple stimuli and basic languages, achiev-
that how LLMs or other AI models solve a cognitive task    ing this for human-level languages is a key research direction
cannot be used as an argument against particular cognitive    towards more natural language learning in LLMs.




                                                  10304

## Страница 8

                           Proceedings of the Thirty-Fourth International Joint Conference on Artiﬁcial Intelligence (IJCAI-25)
                                                            Special Track on Human-Centred AI

References                                                           intelligent machines. Curr. Dir. Psychol, 33(5):283–291,
[Beuls and Van Eecke, 2024] Katrien   Beuls   and   Paul       2024.
  Van Eecke.   Humans  learn language from  situated    [Hendrycks et al., 2021] Dan  Hendrycks,  Collin  Burns,
  communicative   interactions.  what  about  machines?       Steven Basart, Andy Zou, Mantas Mazeika, Dawn Song,
   Computational Linguistics, 50(3):1277–1311, 2024.           and Jacob Steinhardt. Measuring massive multitask lan-
                                                         guage understanding. In ICLR, 2021.[Brighton and Kirby, 2006] Henry  Brighton  and  Simon
   Kirby. Understanding linguistic evolution by visualizing    [Hockett, 1960] Charles F. Hockett. The origin of speech.
   the emergence of topographic mappings.  Artificial Life,        Scientific American, 203(3):88–97, 1960.
   12(2):229–242, 2006.                                       [Josserand et al., 2024] Mathilde Josserand,  Franc¸ois Pel-
[Brinkmann et al., 2023] Levin  Brinkmann,  Fabian Bau-        legrino, Oxana Grosseck, Dan Dediu, and Limor Ra-
  mann, .. . , Thomas L, Joseph Henrich, et al.  Machine        viv. Adapting to individual differences: An experimental
   culture. Nat. Hum. Behav., 7(11):1855–1868, 2023.             study of language evolution in heterogeneous populations.
                                                         Cogn. Sci., 48(11), 2024.[Chen et al., 2024] Angelica  Chen,  Ravid  Shwartz-Ziv,
  Kyunghyun Cho, Matthew L Leavitt, and Naomi Saphra.     [Kallini et al., 2024] Julie  Kallini,  Isabel  Papadimitriou,
  Sudden drops in the  loss:  Syntax acquisition, phase       Richard Futrell, Kyle Mahowald, and Christopher Potts.
   transitions, and simplicity bias in MLMs. In ICLR, 2024.        Mission: Impossible language models.  In Proc. of the
                                                       62nd Annual Meeting of ACL, pages 14691–14714, 2024.
[Christiansen and Chater, 2008] Morten H. Christiansen and
  Nick Chater. Language as shaped by the brain.  Behav.    [Khatun and Brown, 2024] Aisha  Khatun  and  Daniel G
   Brain Sci, 31(5):489–509, 2008.                           Brown. A study on large language models’ limitations in
                                                                 multiple-choice question answering, 2024.
[Clark and Brennan, 1991] H.  Clark  and   S.  Brennan.
                                                           [Kirby et al., 2008] Simon  Kirby,  Hannah  Cornish,  and  Grounding in Communication, volume 13, pages 127–
                                                    Kenny Smith. Cumulative cultural evolution in the labora-   149. 01 1991.
                                                                        tory: An experimental approach to the origins of structure
[Conklin and Smith, 2023] Henry  Conklin  and  Kenny                                                                      in human language. PNAS, 105(31):10681–10686, 2008.
   Smith. Compositionality with variation reliably emerges
                                                           [Kirby et al., 2014] Simon Kirby, Tom Griffiths, and Kenny   in neural networks. In ICLR, 2023.
                                                              Smith.  Iterated learning and the evolution of language.
[de Boer, 2006] Bart de Boer. Computer modelling as a tool                                              CRNEUR, 28:108–114, 2014.
   for understanding language evolution. In Evo Epistemol-
                                                           [Kirby et al., 2015] Simon Kirby, Monica Tamariz, Hannah   ogy, Language and Culture: A Non-Adaptationist, Systems
                                                                Cornish, and Kenny Smith. Compression and communica-   Theoretical Approach, pages 381–406. 2006.
                                                                      tion in the cultural evolution of linguistic structure. Cog-
[DeCaro et al., 2008] Marci S DeCaro, Robin D Thomas,                                                                          nition, 141:87–102, 8 2015.
  and Sian L Beilock.  Individual differences in category
                                                    [Kouwenhoven et al., 2022] Tom Kouwenhoven, Tessa Ver-   learning: Sometimes less working memory capacity is bet-
                                                                   hoef, Roy De Kleijn, and Stephan Raaijmakers. Emerg-   ter than more. Cognition, 107(1):284–294, 2008.
                                                                ing grounded shared vocabularies between human and ma-
[Futrell and Mahowald, 2025] Richard Futrell and Kyle Ma-       chine, inspired by human language evolution. Frontiers in
   howald. How linguistics learned to stop worrying and love        Artificial Intelligence, 5:886349, 2022.
   the language models, 2025. arXiv:2501.17047.
                                                    [Kouwenhoven et al., 2024] Tom Kouwenhoven, Max Peep-
[Galke and Raviv, 2025] Lukas Galke and Limor  Raviv.       erkorn, Bram Van Dijk, and Tessa Verhoef.  The curi-
   Learning and communication pressures in neural net-      ous case of representational alignment: Unravelling visio-
   works: Lessons from emergent communication. Language        linguistic tasks in emergent communication.  In CMCL,
  Development Research, 5(1):116–143, 2025.                  pages 57–71, 2024.
[Galke et al., 2024] Lukas Galke, Yoav Ram, and Limor Ra-    [Kouwenhoven et al., 2025] Tom Kouwenhoven, Max Peep-
   viv.  Deep neural networks and humans both benefit       erkorn, and Tessa Verhoef.  Searching for structure: In-
  from compositional language structure.  Nat. Commun,       vestigating emergent communication with large language
   15(1):10816, 2024.                                         models. In COLING, pages 9977–9991, 2025.
[Gibson et al., 2019] Edward  Gibson,   Richard   Futrell,    [Kozachkov et al., 2023] Leo Kozachkov, Ksenia V. Kasta-
   Steven P. Piantadosi, Isabelle Dautriche, Kyle Mahowald,       nenka, and Dmitry Krotov.  Building transformers from
  Leon Bergen, and Roger Levy. How efficiency shapes       neurons and astrocytes. PNAS, 120(34), 2023.
  human language. Trends Cogn Sci, 23(5):389–407, 2019.                                                            [Lazaridou and Baroni, 2020] Angeliki   Lazaridou   and
[Griffiths and Kalish, 2007] Thomas   L.   Griffiths   and      Marco Baroni. Emergent multi-agent communication in
  Michael L. Kalish.   Language evolution by  iterated       the deep learning era, 2020. arXiv:2006.02419.
   learning with bayesian agents. Cogn. Sci., 31(3):441–480,                                                         [Lee et al., 2024] Harrison Lee, Samrat Phatale,  . .. , Abhi-
   2007.                                                          nav Rastogi, and Sushant Prakash. Rlaif vs. rlhf: scaling
[Griffiths et al., 2024] Thomas L. Griffiths, Jian-Qiao Zhu,       reinforcement learning from human feedback with ai feed-
   Erin Grant, and R. Thomas McCoy. Bayes in the age of       back. In Proc. of the 41st ICML, ICML’24, 2024.




                                                  10305

## Страница 9

                           Proceedings of the Thirty-Fourth International Joint Conference on Artiﬁcial Intelligence (IJCAI-25)
                                                            Special Track on Human-Centred AI


[Li et al., 2016] Jiwei Li, Michel Galley, Chris Brockett,    [Shumailov et al., 2024]  Ilia Shumailov, Zakhar Shumaylov,
   Jianfeng Gao, and Bill Dolan. A diversity-promoting ob-       Yiren Zhao, Nicolas Papernot, Ross Anderson, and Yarin
   jective function for neural conversation models. In Proc.       Gal. AI models collapse when trained on recursively gen-
   of the 2016 Conference of NAACL, pages 110–119, 2016.        erated data. Nature, 631(8022):755–759, 2024.
[Liu et al., 2024] Nelson F. Liu, Kevin Lin, John Hewitt,    [Smith and Culbertson, 2020] Kenny  Smith  and  Jennifer
  Ashwin Paranjape, Michele Bevilacqua, Fabio Petroni,       Culbertson.  Communicative pressures shape language
  and Percy Liang. Lost in the middle: How language mod-       during communication (not learning):  Evidence from
   els use long contexts. Trans. of ACL, 12:157–173, 2024.        casemarking in artificial languages, 2020.
[Llama Team, 2024] Meta Llama Team. The llama 3 herd of    [Smith et al., 2024] Kenny Smith, Simon Kirby, Shangmin
   models, 2024. arXiv:2407.21783.                          Guo, and Thomas L Griffiths. Ai model collapse might
                                                          be prevented by studying human language transmission.
[Mikolov et al., 2018] Tomas Mikolov, Armand Joulin, and                                                                Nature, 633(8030):525, 2024.
  Marco Baroni. A roadmap towards machine intelligence.
                                                              [Smith, 2022] Kenny Smith. How Language Learning and   In CICLing, pages 29–61, Cham, 2018.
                                                        Language Use Create Linguistic Structure. Curr. Dir. Psy-
[Milli`ere and Rathkopf, 2024] Rapha¨el Milli`ere and Charles        chol. Sci., 31(2):177–186, 4 2022.
   Rathkopf. Anthropocentric bias and the possibility of arti-
                                                                   [Steels et al., 2012] Luc Steels, Martin Loetzsch, et al. The   ficial cognition. In ICML Workshop, 2024.
                                                          grounded naming game. Experiments in cultural language
[Milli`ere, 2024] Rapha¨el  Milli`ere.   Language models as        evolution, 3:41–59, 2012.
  models of language, 2024. arXiv:2408.07144.                                                                         [St¨opler et al., 2025] Lennart St¨opler, Rufat Asadli, Mitja
[Mina et al., 2025] Mario Mina, Valle Ruiz-Fern´andez, J´ulia       Nikolaus, Ryan Cotterell, and Alex Warstadt. Towards de-
   Falc˜ao, Luis Vasquez-Reina, and Aitor Gonzalez-Agirre.       velopmentally plausible rewards: Communicative success
   Cognitive biases, task complexity, and result intepretabil-       as a learning signal for interactive language models, 2025.
   ity in large language models.  In COLING, pages 1767–    [Tamariz and Kirby, 2015] M´onica  Tamariz  and  Simon
   1784, 2025.                                                                 Kirby. Culture: Copying, compression, and conventional-
[Nakagawa and Schielzeth, 2013] Shinichi Nakagawa  and          ity. Cogn. Sci., 39(1):171–183, 2015.
   Holger Schielzeth. A general and simple method for ob-    [van Dijk et al., 2023] Bram van Dijk, Tom Kouwenhoven,
   taining r2 from generalized linear mixed-effects models.      Marco Spruit, and Max Johannes van Duijn. Large lan-
  Methods in Ecology and Evolution, 4(2):133–142, 2013.        guage models: The need for nuance in current debates and
[Poletiek et al., 2018] Fenna H. Poletiek,  Christopher M.       a pragmatic perspective on understanding. In Proc. of the
                                                       2023 Conference on EMNLP, pages 12641–12654, 2023.  Conway, Michelle R. Ellefson, Jun Lai, Bruno R. Bo-
   canegra, and Morten H. Christiansen. Under what condi-    [Verhoef et al., 2024] Tessa Verhoef, Kiana Shahrasbi, and
   tions can recursion be learned? effects of starting small in     Tom Kouwenhoven.  What does kiki look like?  cross-
   artificial grammar learning of center-embedded structure.      modal associations between speech sounds and visual
  Cogn. Sci., 42(8):2855–2889, 2018.                           shapes in vision-and-language models.  In CMCL, pages
                                                          199–213, 2024.[Raviv et al., 2019] Limor Raviv, Antje Meyer, and Shiri
   Lev-Ari. Compositional structure can emerge without gen-   [Wang et al., 2024] Xinpeng Wang, Bolei Ma, Chengzhi Hu,
   erational transmission. Cognition, 182:151–164, 2019.        Leon Weber-Genzel, Paul R¨ottger, Frauke Kreuter, Dirk
                                                         Hovy, and Barbara Plank. “my answer is C”: First-token
[Raviv et al., 2021] Limor Raviv, Marianne de Heer Kloots,
                                                                       probabilities do not match text answers in instruction-
  and Antje Meyer. What makes a language easy to learn?
                                                              tuned language models. In Findings of ACL 2024, pages
   a preregistered study on how systematic structure and
                                                          7407–7416, 2024.
  community size affect language learnability.  Cognition,
   210:104620, 2021.                                         [Warstadt and Bowman, 2022] Alex Warstadt and Samuel R
                                                  Bowman. What artificial neural networks can tell us about
[Ren et al., 2024] Yi Ren, Shangmin Guo, Linlu Qiu, Bailin                                                  human language acquisition.  In Algebraic structures in
  Wang, and Danica J. Sutherland. Bias amplification in lan-                                                                 natural language, pages 17–60. 2022.
  guage model evolution: An iterated learning perspective.
   In NeurIPS, volume 37, pages 38629–38664, 2024.          [Wilcox et al., 2023] Ethan Gotlieb Wilcox, Richard Futrell,
                                                         and Roger Levy.  Using Computational Models to Test
[Rende et al., 2024] Riccardo  Rende,   Federica  Gerace,       Syntactic Learnability. Ling. Inquiry, pages 1–44, 2023.
   Alessandro Laio, and Sebastian Goldt. A distributional
                                                      [Zheng et al., 2023] Lianmin Zheng, Wei-Lin Chiang,  . .. ,   simplicity bias in the learning dynamics of transformers.
                                                            Joseph E Gonzalez, and Ion Stoica.  Judging llm-as-a-   In NeurIPS, volume 37, pages 96207–96228, 2024.
                                                              judge with mt-bench and chatbot arena. In NeurIPS, vol-
[Saito et al., 2023] Keita  Saito,  Akifumi  Wachi,  Koki     ume 36, pages 46595–46623, 2023.
   Wataoka, and Youhei Akimoto. Verbosity bias in prefer-
   ence labeling by large language models. In NeurIPS 2023
  Workshop on Inst. Tuning and Instr. Following, 2023.




                                                  10306
