---
id: acl-2025.coling-main.667-text
type: material
title: 'Searching for Structure: Investigating Emergent Communication with Large Language
  Models'
work_id: acl-2025.coling-main.667
source_url: https://aclanthology.org/2025.coling-main.667.pdf
retrieved_at: '2026-10-27'
conversion: pdf_text_extraction
quality_note: Текст извлечён из PDF с сохранением номеров страниц. Порядок колонок,
  таблицы, формулы и подписи могут быть искажены; рисунки доступны по ссылке на PDF.
  Это текстовая конверсия, не визуально эквивалентный оригинал.
language: original
sha256_text: 0aac5649f2d63ac533bb3ed9259c661261391c6a90247bec99773712ccacd527
---

> Источник: [https://aclanthology.org/2025.coling-main.667.pdf](https://aclanthology.org/2025.coling-main.667.pdf). Текст извлечён из PDF с сохранением номеров страниц. Порядок колонок, таблицы, формулы и подписи могут быть искажены; рисунки доступны по ссылке на PDF. Это текстовая конверсия, не визуально эквивалентный оригинал.

## Страница 1

  Searching for Structure: Investigating Emergent Communication with
                     Large Language Models


          Tom Kouwenhoven1, Max Peeperkorn2, and Tessa Verhoef1,
      1Leiden Institute of Advanced Computer Science, Leiden University, Netherlands,
               2School of Computing, University of Kent, United Kingdom,
                            {t.kouwenhoven, t.verhoef}@liacs.leidenuniv.nl



                Abstract                        resulting in languages that are easier to learn and
                                                       exhibit some degree of structure (Smith, 2022).
   Human languages have evolved to be structured        The processes involved in the evolution of lan-
    through repeated language learning and use.      guage have been investigated abundantly with ex-
    These processes introduce biases that operate                                                  periments and simulations. The latter typically use
    during language acquisition and shape linguis-
                                                hard-coded agents with inductive biases (de Boer,
     tic systems toward communicative efficiency.
                                                   2006), Bayesian learners (e.g. Griffiths and Kalish,    In this paper, we investigate whether the same
    happens if artificial languages are optimised       2007; Culbertson and Smolensky, 2012; Kirby
    for implicit biases of Large Language Models        et  al., 2015), or reinforcement learning agents
   (LLMs). To this end, we simulate a classical       (Lazaridou and Baroni, 2020) to investigate the
     referential game in which LLMs learn and use       evolution of structured languages. In contrast, we
     artificial languages. Our results show that ini-                                                       investigate whether more flexible LLMs as rela-
     tially unstructured holistic languages are indeed
                                                         tively unbiased language learners (Wilcox et al.,
    shaped to have some structural properties that
                                               2023) are appropriate tools to study how languages    allow two LLM agents to communicate suc-
     cessfully. Similar to observations in human ex-       evolve. While their internal mechanisms are funda-
    periments, generational transmission increases       mentally different from humans, they still are the
    the learnability of languages, but can at the          first close flexible comparators of human language
   same time result in non-humanlike degenerate       users that can be used as tools to answer cogni-
    vocabularies. Taken together, this work extends        tive and typological investigations (Warstadt and
    experimental findings, shows that LLMs can be                                       Bowman, 2022; van Dijk et al., 2023). Given that
    used as tools in simulations of language evolu-
                                                languages are shaped by the biases and pressures
     tion, and opens possibilities for future human-
                                                   of individual language learners, which are differ-    machine experiments in this field.
                                                      ent for LLMs (e.g., fewer memory constraints), we
                                                      are interested in finding similarities and differences1  Introduction
                                            between humans and LLMs on specific language
Vocabularies of signals enable us to communicate    evolution-oriented tasks.
about meanings, but to express an arbitrary num-     Our work largely follows the experimental de-
ber of meanings, vocabularies would require an    sign by Kirby et al. (2015) in which Bayesian learn-
equally large set of words as there are meanings,    ers and humans learn an artificial language to com-
and learning such holistic vocabularies is cogni-   municate in a referential game. They find that lin-
tively challenging. Human languages therefore    guistic structure arises from a trade-off between
typically show some form of compositional struc-   pressures for compressibility and expressivity. Our
ture, where meaningful signal-meaning mappings   work extends their work by using LLMs as objects
can be composed such that the combination of in-   of investigation. Specifically, we investigate how
dividual meaningful signals can express more than     artificial languages evolve when two LLMs com-
the meaning of the individual components alone   municate in a referential game and what the effects
(Hockett, 1960). An important finding in the field    of generational transmission on these languages
of language evolution is that such structural prop-    are. We compare properties of these languages
erties can emerge as a result of individual learning    to those that are found in experiments involving
biases and pressures that continuously shape the   humans. Results show that 1) LLMs can learn ar-
languages on a longer timescale, often eventually     tificial languages and use them to communicate
                                        9977

             Proceedings of the 31st International Conference on Computational Linguistics, pages 9977–9991
                        January 19–24, 2025. ©2025 Association for Computational Linguistics

## Страница 2

successfully, 2) the languages exhibit higher de-    is repeatedly passed down from one generation to
grees of structure after multiple communication    the next, where the information is modified and
rounds, 3) LLMs generalise in more systematic   improved upon within each generation. The influ-
ways when the evolved language is more structured,    ential work from Kirby et al. (2008, 2015) shows
and 4) languages adapt, although not necessarily in    that when human individuals learn an artificial lan-
a human-like way, and become easier to learn by   guage that was previously learned by another indi-
the LLMs as a result of generational transmission.    vidual, languages become easier to learn and dis-
                                                 play a higher degree of structure. Crucially, these
2  Background & Related work                 results are mostly attributed to the fact that the
                                               language repeatedly goes through a learning bot-
2.1  The evolution of structure
                                                       tleneck, in which individual cognitive biases such
Learning novel signal-meaning mappings, and the    as memory constraints slowly shape the language.
emergence of rules that can combine these signals    Iterated learning has been used to show that struc-
into structured languages have been abundantly in-    ture emerges in various setups with, for example,
vestigated in the field of language evolution using   continuous signals (Verhoef, 2012) or continuous
human experiments (Kirby et al., 2008; Galantucci,   meaning spaces (Carr et al., 2017), and it is ar-
2005; Scott-Phillips et al., 2009; Verhoef, 2012;   gued that it may have led to the statistical Zipfian
Raviv et al., 2019a,b; Kouwenhoven et al., 2022a)    structure of language (Arnon and Kirby, 2024).
and computational simulations (de Boer, 2006;    Yet, Raviv et al. (2019a) showed that structure can
Steels et al., 2012; Lazaridou and Baroni, 2020;    also emerge without generational transmission. In
Kouwenhoven et al., 2024). These typically follow    this case, a pressure for compressibility originat-
a setup where success depends on cooperation be-   ing from communication with multiple interaction
tween two or more participants/agents in a Lewis    partners and expanding meaning spaces causes lan-
game. Here, players are prevented from commu-   guages to become compositional. This effect is
nicating using conventional communicative means   even more prominent if the number of interaction
and instead must establish novel communication    partners is larger (Raviv et al., 2019b). The cur-
systems through repeated cooperation. Outcomes    rent work is inspired by the traditional methods
often show that players, human or machine, quickly    described before and extends them with our current
establish novel signal-meaning mappings that en-   most sophisticated models of natural language.
able them to communicate successfully. However,
recent computational simulations using reinforce-   2.2 LLMs as models of language
ment learning agents often develop communicative  LLMs are sophisticated models of natural lan-
systems different from those of humans (Galke   guages and growing evidence shows their ability to
et al., 2022)1 unless specific key pressures are in-    exhibit ‘average’ human behaviours. It is, for exam-
troduced to recover initially absent human patterns    ple, suggested that LLMs can model human moral
(Galke and Raviv, 2024).                         judgements (Dillion et al., 2023) and transmission
   It has been suggested that seemingly arbitrary    chain experiments revealed human-like content bi-
aspects of linguistic structure may result from    ases in GPT-3.5 (Acerbi and Stubbersfield, 2023).
general learning and processing biases deriving  When LLMs are extended with records of expe-
from the structure of thought processes, perceptuo-    riences, Park et al. (2023) showed that groups of
motor factors, cognitive limitations, and pragmat-   generative agents display believable human-like in-
ics (Christiansen and Chater, 2008).  A well-   dividual and emergent social behaviours when they
investigated cause for this phenomenon is the pro-    interact over extended periods. It is even suggested
cess of cumulative cultural evolution (Boyd et al.,    that human-LLM interactions in everyday life can
1996; Tomasello, 1999), which is typically inves-    potentially mediate human cultures through their
tigated using iterated learning experiments (Kirby    influence on cultural evolutionary processes of vari-
et al., 2008). Here, information (e.g., a language)    ation, transmission and selection (Brinkmann et al.,
                                                2023; Yiu et al., 2024).   1But see Lian et al. (2023, 2024); Zhang et al. (2024)
for recent work showing that the need to be understood (i.e.     While previous work has investigated human-
communicative success), noise, context sensitivity, and incre-    like behaviour at inference time, findings from cog-
mental sentence processing help induce human-like patterns
                                                         nitive science can also be used to improve modelof dependency length minimisation in reinforcement learning
agents.                                           performance. Iterated learning can, for example,
                                        9978

## Страница 3

Figure 1: A graphical representation of the experimental blocks. The agents first go through a guessing block before
labelling each of the 15 training stimuli in the labelling block. The communication block is done for 4 rounds each
consisting of 30 tasks T, where the agents alternate speaker-listener roles to be a speaker and listener for each
stimulus once. Finally, the agents label 27 (15 original and 12 novel) stimuli in the testing block.


be incorporated into the training regime to extrapo-   though the language processing mechanisms in
late desirable behaviours. Zheng et al. (2024) have    transformers are non-humanlike, LLMs share some
likewise shown that representations are easier to    preference for structured languages similar to hu-
learn when vision-language contrastive learning is   mans. Moreover, in an artificial language learn-
reframed as the Lewis signaling game between a vi-   ing experiment similar to the work presented here,
sion agent and a language agent, ultimately improv-   Galke et al. (2023) showed that compositional struc-
ing compositional reasoning in vision-language    ture is advantageous for GPT-3 when learning an
models. However, this does not guarantee model     artificial language and that a higher degree of com-
improvements, Shumailov et al. (2024) have for ex-    positional structure also resulted in human-like gen-
ample shown that LLMs, autoencoders and Gaus-    eralisation for new unseen items. Our work is dif-
sian mixture models drift when trained repeatedly    ferent in that Galke et al. tested the ability of GPT-3
on AI-generated data. In these cases, crucially, the    to learn languages that evolved during a human ex-
generated content is slowly optimised to be under-   periment (Raviv et al., 2019b, 2021), thus being
standable for models, not for humans, resulting in    optimised for human learners. We instead wish to
what they call model collapse. The authors there-    investigate what kinds of languages evolve when
fore argue that genuine human interactions with    they are optimised for LLMs.
systems will be increasingly important to prevent
model collapse. While drift is often seen as an   3  Methodology
unwanted effect of unsupervised training, from a
                                          Our methodology is inspired by Kirby et al. (2015)language evolution viewpoint this is not surprising,
                                             and (Raviv et al., 2021). The complete simulationsince languages adapt to how they are learned and
                                                     set-up consists of four blocks: guessing, labelling,used. As such, it has been suggested that languages
                                              communication and testing (§3.2 & Figure 11). Theshould adapt to become more natural for humans
                                                  agents perform the guessing, labelling, and test-and machines (Kouwenhoven et al., 2022b) and
                                                   ing block separately; communication is interactive.that findings from cognitive science can prevent
                                         The communication block is a classic referentialmodal collapse (Smith et al., 2024) or inform mod-
                                         game in which two agents communicate to discrim-elling choices (Galke and Raviv, 2024). Here, we
                                                        inate a target stimulus from four distractor stimuli.view LLMs from this evolutionary perspective.
                                         They do so in four rounds, each consisting of 30
  Although biases inherent to a language model’s    interactions T, alternating speaker-listener roles be-
(pre-)training objectives (i.e. the cloze task and in-   tween interactions. In a single interaction round,
struction tuning) and memory constraints are very    the speaker observes a target stimulus and utters a
different from those in humans, recent work has    signal that describes the current stimulus. Using
shown that GPT-2 models struggle to learn lan-
guages that contain unnatural word orders, lack        1This is for illustration purposes only, we stress that our
                                                             simulations are entirely run in the textual modality only to
hierarchical structure, or lack information local-                                                           avoid the additional challenge of extracting relevant visual
ity (Kallini et al., 2024). This suggests that, even     features and mapping these to artificial languages.
                                        9979

## Страница 4

              {'shape ':3,'colour ':'blue ','amount ':1,'word ':'ninikonu '}
              {'shape ':1,'colour ':'green ','amount ':3,'word ':'hanosa '}
                                                             ...
              {'shape ':2,'colour ':'orange ','amount ':2,'word ':'sanu '}
              {'shape ':1,'colour ':'green ','amount ':3,'word ':'[ COMPLETE]


     Prompt 1: A vocabulary snippet used in a completion prompt. Full prompts are visible in Appendix C


this utterance, the listener must discriminate the   meaning space of 27 stimuli using the training vo-
correct target. Cooperation is successful when the    cabulary that was optimised in the labelling and
listener’s guess is the target stimulus.              communication block. Hence, they must generalise
                                                           their strategies to unseen samples.
3.1  Stimuli and initial languages
                                                    3.3 LLMs as agentsThe meaning space consists of stimuli with three
attributes. They have one of three shapes, one of   The LLMs in our experiment were instruction-
three colours, and can appear in groups of one, two,   tuned instantiations of Llama 3 70B (Llama Team,
or three shapes, creating 27 distinct stimuli. Ini-   2024) with greedy sampling2. While human par-
tial signals for these stimuli were generated before    ticipants typically learn signal-meaning mappings
each experiment according to the method used by   through a learning block, we use LLMs’ in-context
Kirby et al. (2008). The signals are concatenations    learning (Brown et  al., 2020) ability to teach
of 2, 3, or 4 randomly picked consonant-vowel   them the languages. Specifically, we prepend our
(CV) syllables resulting in artificial non-existing   prompts with the items to be learned in a struc-
signals (e.g., watopo, nafa, nomomeme). The CV    tured JSON-like format (Prompt 1).  Given the
syllables consist of one of eight consonants g, h,   observed behavioural similarities between humans
k, l, m, n, p, w and one of five vowels a, e, i, o, u.   and LLMs (Galke et al., 2023), we assume that a
Out of 27 stimuli, only 15 stimuli are used during    vocabulary of signal-meaning mappings in the con-
the guessing, labelling, and communication blocks.    text of a prompt provides enough (distributional)
All 27 stimuli are used in the testing block. The    information for a LLM to learn an appropriate map-
training stimuli are selected randomly before each    ping between the attributes of the stimuli and signal
simulation, but we ensure that each attribute value    syllables. Although the prompt structure ‘invites’
is represented equally often across this set.           the LLM to infer a signal from the stimulus at-
                                                           tributes, we are agnostic about how exactly and
3.2  Simulation blocks                                            what kind of mapping the LLM deduces, but we
Each simulation consists of four blocks. In the first    are interested in the resulting behaviours.
block, we assess whether agents can guess the right     Throughout a simulation, agents essentially per-
signal when presented with a stimulus. Second, in   form one of two tasks: generation or guessing. The
the labelling block, an agent repeatedly produces    labelling block and speaking in the communica-
a signal for each stimulus given the initial training    tion block involve generating signals. The guess-
vocabulary. The signals generated in this block    ing block and discrimination in the communication
are taken as the learned vocabulary for that agent.   block involve guessing. The prompts for these tasks
In the third block, the agents communicate as de-   are extensions of those used by Galke et al. (2023),
scribed before, taking turns as speaker and listener   with slight adaptations to enable LLMs to discrim-
until all rounds are completed and each stimulus    inate between stimuli. Given that LLMs show a
appeared twice per round (i.e., both agents pro-   primacy and recency bias (Liu et al., 2024), the
duced a signal for each stimulus and made a guess   vocabulary is shuffled before each task such that
for each stimulus). In this block, the interaction    ordering effects are minimal. System instructions
between the agents slowly alters each agent’s in-   depend on the task performed but are largely simi-
dividual vocabulary much like done by (de Boer,    lar and chosen to be maximally close to instructions
2000; Steels et al., 2012) by updating the current    given to humans in experimental settings.
stimulus to be associated with the produced signal.
                                                             2Although we only report results on one model type, initial
After the communication block, the testing block                                                               explorations with GPT-3.5 and Llama 2 7B showed similar
tasks the agents to generate signals for the entire    behaviours to LLama 3 70B
                                        9980

## Страница 5

  Generating signals. For signal generation in     tel test (Mantel, 1967) between signal similarities
the labelling block, we use prompt completion   (normalised Levenshteins distance) and semantic
(Prompt 2). During labelling, the agents see the    similarities (the number of equal attributes between
entire training set and generate a signal for each   two meanings). A communication system with a
stimulus, effectively amounting to a look-up task   high TopSim uses similar signals for similar mean-
since the stimulus is present in the prompt. On    ings. We compute the Ngram diversity (Meister
the other hand, the vocabulary presented to agents    et al., 2023), being the average fraction of unique
during communication and testing does not include    vs. total Ngrams for N ∈{1, 2, 3, 4, 5} in all pro-
the current stimulus, thus requiring the agents to   duced signals. Low Ngram diversity across all
extract an appropriate mapping and generalise to    signals implies the agents re-use parts of signals in
new stimuli (Prompt 3). A human-like solution    different signals, hinting at compositional signals
would be to map stimulus attributes (i.e. shape,   when it happens in combination with increased
colour, and amount) to syllables representing these   TopSim. We assess the degree of signal system-
attributes and create compositions that describe    aticity between the signals produced for unseen
the stimulus. During communication, we add a    stimuli in the test block and the previous stimuli in
communicativeSuccess attribute which is set to 1    the communication block using the generalisation
if the previous interaction for this stimulus was suc-   score (GenScore, Raviv et al., 2021). Here, we first
cessful and zero otherwise. Adding this attribute   compute the pairwise semantic difference between
functions as a memory between interactions and   each stimulus in the train and test scenes, followed
provides a pressure for expressivity. It is hypothe-   by the pairwise normalised edit distance between
sised that the latter plays an important role in hu-   the signals produced for these scenes. We then
man language evolution since it prevents languages    take the Pearson correlation between these differ-
from becoming degenerate (Smith et al., 2013). Im-   ences across all stimuli. Intuitively, this measures
portantly, during testing, the vocabulary presented   whether similar scenes across both sets are simi-
to the agents always includes the train set (without    larly labelled, thereby suggesting generalisation.
the current stimulus), and items from the test set
are never present.
                                       4  Evaluation  Guessing signals or meanings.  For guess-
ing and discrimination during communication, the
agents need to respond with a choice correspond-  We ran 15 simulations, each initialised with a ran-
ing to the speaker’s signal. Unfortunately, LLMs   dom seed and unique artificial unstructured lan-
are inconsistent and unreliable in answering mul-   guage.  Metrics were computed for each block,
tiple choice questions (Khatun and Brown, 2024).   except for the generalisation score, which is only
In our initial exploration, this indeed proved to be   computed for the testing block. A human-like re-
unusable.  Instead, for each distractor (signal or    sult would show increasingly successful interac-
meaning), we run the prompt prefilled with that    tions and increasing TopSim scores, while Ngram
distractor through the model and select the distrac-    diversity should go down. If this is the case, we ex-
tor with the highest probability (Prompt 4). Again,   pect to observe higher generalisation scores since
the agents observe the training vocabulary with    agents can compose new signals according to a
the current stimulus in the guessing block. In the    learned structured strategy. We use linear mixed
communication block, agents observe the training    effects models to analyse the results of the com-
vocabulary without the current stimulus.            munication block to take the random effects of
                                              each simulation’s vocabulary into account. The
3.4  Metrics                                                    slope (ˆβ) determines the direction of the effect and
We are firstly interested in investigating whether    the rate of change.  Additionally, we use condi-
two agents settle on a language that enables them to    tional R2 (Nakagawa and Schielzeth, 2013), de-
communicate, measured by the percentage of suc-   noted by R2c, which considers fixed and random ef-
cessful interactions (PercCom) in a round. We use    fects, to show how much variance can be explained
multiple metrics to measure structure in messages.   by the model. Higher values of R2c indicate that the
The most common metric is topographic similarity   model captures more variance and that correlations
(TopSim, Brighton and Kirby, 2006). Similar to    are stronger. Finally, we report the marginal R2m,
Kirby et al. (2008), we report Z-scores of the Man-   which is the variance explained by the fixed effects.
                                        9981

## Страница 6

(a) TopSim scores over the agent’s vocabulary in each block     (b) Ngram diversity scores over the agent’s vocabulary in each
and round. The dashed red line indicates the p < .05 level.      block and round.

Figure 2: Communication clearly increases the structure of the vocabularies, as seen by the increasing TopSim
scores and decreasing Ngram diversity.


5  Results                                    rounds to ≈75%, but not significantly (Appendix
                                             A, Figure 5). Interestingly, communicative success
5.1  Learning the artificial languages
                                                                  is not guaranteed, it fluctuates between rounds and
We first assess whether LLMs were able to learn    in some simulations it even decreases drastically.
the initially unstructured languages. Given the na-
ture of the guessing task, which is essentially a                                                    5.3  Communication results in structure
lookup task, unsurprisingly, LLMs were able to
guess the correct signals for the stimuli almost per-   Although the initial languages are unstructured,
fectly (M = .973, SD = .031).  However, la-   some form of structure emerges due to repeated
belling the same stimuli via completion proved    learning and use (Figure 2).  This mostly hap-
much more difficult (M = .453, SD = .152)   pens during the communication block where Top-
despite the presence of the correct signal in the   Sim increases significantly across rounds (ˆβ =
prompt. This contrast is in line with work showing    .508 ± .073, R2c = .579, R2m = .355, p < .001)
that LLM predictions are sensitive to task instruc-   and Ngram decreases across rounds (ˆβ = −.054 ±
tions and how predictions are extracted (Weber    .004, R2c = .812, R2m = .558, p < .001). This in-
et al., 2023; Hu and Levy, 2023; Hu and Frank,   crease in structure benefits communicative success
2024). Additionally, it corroborates using prefilled    positively (ˆβ = .035 ± .007, R2c = .769, R2m =
options in our guessing prompts during commu-   .427, p < .001). However, we also observe be-
nication.  Nevertheless, this performance is still    haviour that is not human-like; the signals used to
better than that of humans3 and is not unimpressive   communicate become longer over the rounds (ˆβ =
given the vast number of possible signals that can    .557 ± .044, R2c = .919, R2m = .505, p < .001).
be produced. Finally, the expected struggle to cor-   This contradicts what is observed in human experi-
rectly reproduce (i.e., learn) unstructured signals   ments, where we typically observe that messages
introduces some welcome variation to the agents’   become shorter and lie close to a theoretical frontier
vocabulary which is used at the start of the commu-   balancing expressivity and simplicity (Piantadosi
nication block.                                           et al., 2011; Kirby et al., 2015).
                                               These results extend the findings of Galke et al.
5.2  Agents communicate successfully                                                   (2023); LLMs not only learn structured vocabular-
Once the agents have individually learned the vo-    ies better but also naturally shape languages to have
cabulary, they start communicating. Despite ini-   some form of structure when they are optimised for
tially starting with different languages, approxi-    their inherent biases. As LLMs struggle to learn im-
mately 70% of the interactions in the first round    possible languages (Kallini et al., 2024), reframing
are successful (chance performance would amount   prompt instructions into a structured list improves
to 25%). This increases somewhat in the following    the model response (Mishra et al., 2022), and given
                                                          that we do not impose pressure to induce structure,
    3Preliminary analyses of an ongoing experiment involving
                                                     the surprising outcome of our experiments may behumans show that the guessing block is much easier than the
labelling block.                                        the result of an apparent “structure bias” in LLMs.
                                        9982

## Страница 7

                                               Shape  Colour  Amount  Word
                                                   3     orange      1      wipisu
                                                   1     green       2      sutupepi
                                                   2     green       1      ginisu
                                                   3     green       1      wipisu
                                                   1     blue        2      sunupepi
                                                   1     green       3       sutupitite
                                                                   set    2     orange      1      ginusu
                                                                                                                train    3     blue        3       wipipitite
                                                   3     green       3      wipupitite
Figure 3: Languages that have evolved to be more struc-           3     blue        1      wipisu
tured allow for better generalisation to unseen test stim-           1     blue        3       sunupitite
uli. Colours refer to individual simulations.                   2     orange      3       ginupitite
                                                   2     blue        2      ginupepi
                                                   1     orange      2      sunupepi5.4  Structure enables better generalisation
                                                   2     orange      2      ginupepi
After the communication block, the agents engage
                                                   1     orange      1       sutisu
in the final simulation block. Here they generate
                                                   1     orange      3       sutupitite
signals for all 27 stimuli using the vocabulary that
                                                   1     green       1      sutusu
has evolved after learning and communication. We
                                                   1     blue        1      sunusi
find that high TopSim languages allow for better
                                                   2     green       2      ginupepi
generalisation (r = 0.735, p < .001, Figure 3).          set
                                                   2     green       3       ginupitite
  A qualitative inspection of the signals generated        test     2     blue        1      ginisu
in the testing block of the simulation which re-
                                                   2     blue        3       ginupitite
sulted in the highest TopSim after communication
                                                   3     orange      2      wipupepi
reveals that this agent repeatedly re-uses parts of
                                                   3     orange      3       wipipitite
signals in different compositions (Table 1). For
                                                   3     green       2      wipupepi
example: “su” refers to the amount one, “pepi” to
                                                   3     blue        2      wipupepi
two, “petite” to three. For shape 1, the signals
“sunu” and “sutu” are used, “ginu” for shape 2,   Table 1: The signals produced in the testing phase of
and shape 3 is referred to with “wipi” or “wipu”.    the simulation that resulted in the highest TopSim score
However, colours are less clearly demarcated by    (7.13) after communication. The signals for the test
unique signal parts. This is also reflected in the ra-    stimuli share parts of signals and are composed similarly
                                                             to train stimuli (GenScore = .792)tio of unique signals produced during the test block
(M = 62.1%, SD = 19.8%), showing that some
simulations sometimes result in repetitive use of                                                     the signal-meaning mappings produced in the test-
the same signals for different meanings, resulting                                                   ing block by the agents of the previous generation.
in a somewhat degenerate vocabulary. Neverthe-                                           Only the vocabulary of the agent with the highest
less, it is clear that unseen stimuli are often labelled                                           TopSim is transmitted to the next generation. We
similarly to previously seen stimuli.                                                  ran six transmission chains of 8 generations each.
                                          The seed generations for each chain were selected
6  Iterated learning
                                             randomly from our initial 15 simulations.
The previous results showed that two LLMs can
                                                    6.1  Learnability increasessuccessfully communicate and slowly shape the
language to become more structured. Provided that    Figure 4 clearly reveals that the learnability in-
cumulative cultural evolution can extrapolate weak    creases. While LLMs in the first generation strug-
biases to have strong effects in socially learned    gle to look up signals and reproduce them, a single
systems like language (Smith, 2011), we extend    generation learning and using a language tremen-
our simulations by adding generations of learners.   dously decreases the edit distance between ground
The first generation is initialised with a random    truth signals and the produced signals. These re-
unstructured language described in Section 3.1, but    sults are remarkably similar to findings with human
in following generations, agents learn a portion of    participants (Kirby et al., 2015), and show that the
                                        9983

## Страница 8

                                                  2008), an additional pressure for expressivity typ-
                                                         ically prevents languages from becoming under-
                                                        specified. Given the expressivity pressure that we
                                                   expect to result from the communication block, we
                                                expected to see less underspecification. Iterated
                                                      learning therefore results in vocabularies optimised
                                                        for LLM agents but do so in a non-humanlike way.

                                       7  Discussion

                                         Our findings show a mixed picture, agents com-Figure 4: The normalised Levenshtein distance between
the ground truth and the produced signal in the learning    prised of LLMs can learn and use artificial lan-
block. Solid lines indicate chains, dashed blue line indi-   guages in a referential game. They do so by opti-
cates the average Levenshtein distance across chains.     mising the initially holistic vocabulary to fit better
                                                  with the preferences of their language model, result-
                                                  ing in increased regularity and structure (Table 1).
languages are optimised for LLMs’ preferences.                                              These human-like results are much in line with pre-
                                                 vious findings showing that structured languages
6.2  Communicative success and                                               can emerge from repeated interactions between in-
     non-humanlike structures                                                      terlocutors (i.a. Selten and Warglien, 2007; Ver-
Despite the increase in learnability, we do not ob-   hoef et al., 2016; Nölle et al., 2018; Raviv et al.,
serve an increase in communicative success due to    2019a). Yet, we also observe some degeneracy, i.e.
iterated learning (Appendix B Figure 6). Possibly,   many-to-one mappings of signals and attributes,
this is due to the already high scores of the first   and non-humanlike behaviours such as a tendency
generation. Despite their increased learnability, the    to produce long signals. Iterated learning further
signals become significantly longer and more am-   increases the learnability of the vocabulary but also
biguous. We take this non-humanlike solution to be    extrapolates these non-humanlike behaviours fur-
an artefact of an absence of pressures for memorisa-    ther. Despite not being able to directly compare our
tion in LLMs’. While human language is optimised    results to human data, these findings are loosely
to be compressible and expressive (Fedzechkina   comparable to earlier work involving human par-
et al., 2012; Tamariz and Kirby, 2015; Kirby et al.,    ticipants (Kirby et al., 2015; Raviv et al., 2019b) in
2015), context windows of LLMs, are considerably   which languages with similar properties emerge.
larger.  In our case, Llama 3 70B has a context      Table 1 suggests that certain attributes, such as
window of 8.2K tokens, which we do not exceed.    the colour attribute, in the inputs may be ignored,
   Finally, the metrics to measure structure dis-   possibly due to the primacy and recency bias in
play a mixed picture. TopSim, does increase but   LLMs (Liu et al., 2024). Optimising the instructive
not significantly across generations (Figure 7 and    sentences by choosing sentences that maximise the
Table 2 in appendix B) but Ngram diversity de-    fraction of valid model answers for each task, as
creases significantly across generations.  Quali-   suggested by Aher et al. (2023), may alleviate these
tative inspections of several vocabularies show    ignorances and increase focus on relevant attributes.
that some languages evolve into degenerate lan-     It is also possible that the LLMs do not ‘experience’
guages with repeating signals for different stimuli   enough pressure to be understood by other agents,
(i.e., underspecification). Corroborated by a sig-     i.e., the communicativeSuccess attribute is not able
nificantly lower number of uniquely produced sig-    to force a need to be expressive, which is deemed
nals in the last generation compared to the first   an essential pressure in computational simulations
simulation (t(5) =  2.64, p =  .046, Mgen0 =    for human-like structures (Galke and Raviv, 2024).
.707, SDgen0 = .142, Mgen7 = .519, SDgen7 =    Despite these discrepancies, it is nevertheless inter-
.119). Together this causes the Ngram diversity    esting that some form of structure emerges.
to be lower while clearly hurting communicative     Our results further show variability between gen-
expressiveness. Even though degenerate languages    erations of learners. This is not uncommon in hu-
are not uncommon in iterated learning experiments   man experiments where processes of interaction
with humans (e.g., experiment 1 in Kirby et al.,   and transmission sometimes generate fully system-
                                        9984

## Страница 9

atic, compositional languages, but can also result in    the important role communication plays in shaping
systems that lack structure entirely (Verhoef et al.,   human language, LLM performance drastically in-
2022). Differences in personal biases may be a con-   creased when it was optimised for successful com-
tributing factor to these differences (Kouwenhoven   munication through reinforcement learning from
et al., 2022a). Since we do not initialise agents   human feedback (RLHF).
with different biases, these variations, originating       Finally, we acknowledge that our results depend
in distributional information of the prepended vo-   on many methodological considerations, such as
cabularies, are a natural human-like outcome of    the prompt format, task instructions, and the tokeni-
repeated exposure to and use of the language.        sation process. However, our primary goal was to
  The evolution of degenerate vocabularies could    investigate whether LLMs can be used in simula-
be explained by the use of greedy decoding dur-    tions of artificial language emergence. We aimed to
ing signal generation, which does not necessarily    stay maximally close to well-known experimental
produce the most human-like text (Holtzman et al.,   methods in the field of language emergence and did
2020; Meister et al., 2022, 2023) and may therefore    not optimise for performance, human-like results,
also result in non-humanlike composition. More-   or compositional vocabularies. Instead, our goal
over, once an agent, perhaps mistakingly, dupli-   was to reveal LLMs’ natural behaviours resulting
cates a signal, its raw probabilities are increased   from learning and using artificial languages. Future
when producing the next utterance, possibly re-   work could extend our findings by performing ex-
sulting in a feedback loop that collapses onto a    periments in which humans collaborate with LLMs
degenerate vocabulary. This effect may be further    to investigate whether languages can evolve that
increased due to LLMs’ inability to innovate (Ben-   are optimised for human and LLM preferences.
der et al., 2021; Yiu et al., 2024) and the choice of
structured prompts that do not explicitly ask for in-   8  Conclusion
novation. Future work could attempt to increase the
composition of novel signals by increasing the tem-   Given the remarkable linguistic abilities of recent
perature parameter. Perhaps resulting in slightly   LLMs, we show how they behave in a classical
more novel outputs as this forces exploration of    referential game in which artificial languages, typ-
the vocabulary embedding space (Peeperkorn et al.,    ically used in the field of language evolution, are
2024), possibly alleviating the evolution of degen-   learned and used. Primarily, our results suggest that
erate vocabularies and shifting the optimisation of  LLMs can be used as artificial language learners
the language to different solutions.                    to investigate the evolution of language. We show
  The rapid increase in learnability resulting from    that initially unstructured languages are optimised
iterated learning proves that weak learning biases in    for improved learnability and allow for successful
language models, such as, for example, an observed   communication. While we found some evidence of
simplicity bias (Chen et al., 2024), can be amplified   human-like compositional structures that enhance
by the process of generational transmission. Addi-   generalization abilities, we also identified notable
tional simulations with increased communicative    differences in behavioural characteristics of LLMs
difficulty, e.g., by increasing the number of distrac-    in comparison to humans. Notably, iterated learn-
tors or the number of interaction partners, could    ing processes increased vocabulary learnability but
reveal whether and how some form of memory    also amplified such different characteristics further.
constraint affects the learnability of the languages.  As such, we extend existing research by revealing
Doing so additionally captures the diversity and    that structured languages are not merely easier for
dynamic nature of language in the real world. In  LLMs to learn. Critically, the inherent biases of
general, systematic manipulations across model  LLMs also shape unstructured languages towards
features (e.g., size, training data, or decoding strate-   increased regularity. These findings contribute to
gies) may expose why we observe tendencies such    a deeper understanding of how LLMs process and
as producing longer signals. Similar to what was    evolve language, potentially bridging the gap be-
proposed by Galke and Raviv (2024), we argue that   tween computational models and natural language
careful manipulation of our setup can help reveal    evolution. Finally, we hope to have shown that our
underlying mechanistic biases of language models    setup is useful in exposing the underlying mecha-
and inform modelling choices when simulating lan-    nistic biases of LLMs and demystifying their unin-
guage acquisition in LLMs. Taking into account    terpretable nature.
                                        9985

## Страница 10

Acknowledgments                               Jon W. Carr, Kenny Smith, Hannah Cornish, and Simon
                                                          Kirby. 2017. The cultural evolution of structured
We wish to thank Bram van Dijk for his comments      languages in an open-ended, continuous world. Cog-
on an early draft of this paper and the helpful dis-       nitive Science, 41(4):892–923.
cussions.                                                   Angelica Chen, Ravid Shwartz-Ziv, Kyunghyun Cho,
                                                  Matthew L Leavitt, and Naomi Saphra. 2024. Sudden
                                                       drops in the loss: Syntax acquisition, phase transi-
References                                                   tions, and simplicity bias in MLMs. In The Twelfth
                                                            International Conference on Learning Representa-
Alberto Acerbi and Joseph M. Stubbersfield. 2023.
                                                                    tions.
  Large language models show human-like content
   biases in transmission chain experiments.   Pro-   Morten H. Christiansen and Nick Chater. 2008. Lan-
   ceedings of the National Academy of Sciences,      guage as shaped by the brain. Behavioral and Brain
  120(44):e2313790120.                                   Sciences, 31(5):489–509.

Gati V Aher, Rosa I. Arriaga, and Adam Tauman Kalai.    Jennifer Culbertson and Paul Smolensky. 2012. A
   2023. Using large language models to simulate mul-      bayesian model of biases in artificial language learn-
   tiple humans and replicate human subject studies. In       ing: The case of a word-order universal. Cognitive
   Proceedings of the 40th International Conference on       Science, 36(8):1468–1498.
  Machine Learning, volume 202 of Proceedings of
  Machine Learning Research, pages 337–371. PMLR.    Bart de Boer. 2000. Self-organization in vowel systems.
                                                        Journal of Phonetics, 28(4):441–465.
Inbal Arnon and Simon Kirby. 2024. Cultural evolution
   creates the statistical structure of language. Scientific    Bart de Boer. 2006. Computer modelling as a tool for
   Reports, 14(1):5255.                                  understanding language evolution, pages 381–406.
                                                          Springer Netherlands, Dordrecht.
Emily M. Bender, Timnit Gebru, Angelina McMillan-
   Major, and Shmargaret Shmitchell. 2021. On the    Danica Dillion, Niket Tandon, Yuling Gu, and Kurt Gray.
   dangers of stochastic parrots: Can language mod-      2023. Can ai language models replace human partici-
   els be too big?  In Proceedings of the 2021 ACM       pants? Trends in Cognitive Sciences, 27(7):597–600.
  Conference on Fairness, Accountability, and Trans-
   parency, FAccT ’21, page 610–623, New York, NY,   Maryia Fedzechkina, T. Florian Jaeger, and Elissa L.
  USA. Association for Computing Machinery.            Newport. 2012. Language learners restructure their
                                                           input to facilitate efficient communication.  Pro-
Robert Boyd, Peter J Richerson, et al. 1996. Why cul-      ceedings of the National Academy of Sciences,
   ture is common, but cultural evolution is rare.  In      109(44):17897–17902.
   Proceedings-british academy, volume 88, pages 77–
                                              Bruno Galantucci. 2005. An experimental study of   94. Oxford University Press Inc.
                                                            the emergence of human communication systems.
Henry Brighton and Simon Kirby. 2006. Understanding      Cognitive Science, 29(5):737–767.
   linguistic evolution by visualizing the emergence of
                                                 Lukas Galke, Yoav Ram, and Limor Raviv. 2022. Emer-   topographic mappings.  Artificial Life, 12(2):229–
                                                        gent communication for understanding human lan-   242.
                                                   guage evolution: What’s missing?   In Emergent
Levin Brinkmann, Fabian Baumann, Jean-François Bon-     Communication Workshop at ICLR 2022.
   nefon, Maxime Derex, Thomas F Müller, Anne-
                                                 Lukas Galke, Yoav Ram, and Limor Raviv. 2023. What  Marie Nussberger, Agnieszka Czaplicka, Alberto
                                                  makes a language easy to deep-learn? arXiv preprint   Acerbi, Thomas L Griffiths, Joseph Henrich, et al.
                                                        arXiv:2302.12239.  2023. Machine culture. Nature Human Behaviour,
  7(11):1855–1868.                                                 Lukas Galke and Limor Raviv. 2024. Learning and com-
                                                      munication pressures in neural networks: LessonsTom Brown, Benjamin Mann, Nick Ryder, Melanie
                                                   from emergent communication. Language Develop-   Subbiah, Jared D Kaplan, Prafulla Dhariwal, Arvind
                                                   ment Research, 5(1):116–143.   Neelakantan, Pranav Shyam, Girish Sastry, Amanda
   Askell,  Sandhini Agarwal,  Ariel  Herbert-Voss,                                            Thomas L. Griffiths and Michael L. Kalish. 2007. Lan-
  Gretchen Krueger, Tom Henighan, Rewon Child,                                                   guage evolution by iterated learning with bayesian
  Aditya Ramesh, Daniel Ziegler, Jeffrey Wu, Clemens                                                              agents. Cognitive Science, 31(3):441–480.
   Winter, Chris Hesse, Mark Chen, Eric Sigler, Ma-
   teusz Litwin, Scott Gray, Benjamin Chess, Jack    Charles F. Hockett. 1960. The origin of speech. Scien-
   Clark, Christopher Berner, Sam McCandlish, Alec         tific American, 203(3):88–97.
   Radford, Ilya Sutskever, and Dario Amodei. 2020.
  Language models are few-shot learners.   In Ad-   Ari Holtzman, Jan Buys, Li Du, Maxwell Forbes, and
  vances in Neural Information Processing Systems,      Yejin Choi. 2020. The curious case of neural text de-
  volume 33, pages 1877–1901. Curran Associates,       generation. In International Conference on Learning
   Inc.                                                     Representations.
                                        9986

## Страница 11

Jennifer Hu and Michael Frank. 2024. Auxiliary task   Yuchen Lian, Tessa Verhoef, and Arianna Bisazza. 2024.
  demands mask the capabilities of smaller language      Nellcom-x: A comprehensive neural-agent frame-
  models. In First Conference on Language Modeling.     work to simulate language learning and group com-
                                                         munication. Preprint, arXiv:2407.13999.
Jennifer Hu and Roger Levy. 2023. Prompting is not
  a substitute for probability measurements in large    Nelson F. Liu, Kevin Lin, John Hewitt, Ashwin Paran-
  language models. In Proceedings of the 2023 Con-       jape, Michele Bevilacqua, Fabio Petroni, and Percy
   ference on Empirical Methods in Natural Language       Liang. 2024. Lost in the middle: How language mod-
  Processing, pages 5040–5060, Singapore. Associa-       els use long contexts. Transactions of the Association
                                                                for Computational Linguistics, 12:157–173.   tion for Computational Linguistics.

                                             Meta Llama Team. 2024. The llama 3 herd of models.
Julie Kallini, Isabel Papadimitriou, Richard Futrell,                                                              Preprint, arXiv:2407.21783.
  Kyle Mahowald, and Christopher Potts. 2024. Mis-
   sion: Impossible language models. In Proceedings    Nathan Mantel. 1967. The detection of disease cluster-
   of the 62nd Annual Meeting of the Association for      ing and a generalized regression approach. Cancer
  Computational Linguistics (Volume 1: Long Papers),       research, 27(2_Part_1):209–220.
  pages 14691–14714, Bangkok, Thailand. Association
   for Computational Linguistics.                       Clara Meister, Tiago Pimentel, Gian Wiher, and Ryan
                                                                 Cotterell. 2023. Locally typical sampling. Transac-
Aisha Khatun and Daniel G Brown. 2024. A study on       tions of the Association for Computational Linguis-
   large language models’ limitations in multiple-choice         tics, 11:102–121.
   question answering. Preprint, arXiv:2401.07955.
                                                     Clara Meister, Gian Wiher, Tiago Pimentel, and Ryan
                                                                 Cotterell. 2022. On the probability–quality paradoxSimon Kirby, Hannah Cornish, and Kenny Smith. 2008.
                                                              in language generation. In Proceedings of the 60th  Cumulative cultural evolution in the laboratory: An
                                                    Annual Meeting of the Association for Computational  experimental approach to the origins of structure
                                                             Linguistics (Volume 2: Short Papers), pages 36–45,   in human language.  Proceedings of the National
                                                         Dublin, Ireland. Association for Computational Lin-  Academy of Sciences, 105(31):10681–10686.
                                                                   guistics.
Simon Kirby, Monica Tamariz, Hannah Cornish, and                                              Swaroop Mishra, Daniel Khashabi, Chitta Baral, Yejin
  Kenny Smith. 2015. Compression and communica-                                                       Choi, and Hannaneh Hajishirzi. 2022. Reframing
   tion in the cultural evolution of linguistic structure.                                                               instructional prompts to GPTk’s language. In Find-
   Cognition, 141:87–102.                                                             ings of the Association for Computational Linguistics:
                                         ACL 2022, pages 589–612, Dublin, Ireland. Associa-
Tom Kouwenhoven, Roy De Kleijn, Stephan Raaijmak-                                                                tion for Computational Linguistics.
   ers, and Tessa Verhoef. 2022a. Need for structure
  and the emergence of communication. In Proceed-    Shinichi Nakagawa and Holger Schielzeth. 2013. A
   ings of the Annual Meeting of the Cognitive Science       general and simple method for obtaining r2 from
   Society, volume 44.                                      generalized linear mixed-effects models. Methods in
                                                     Ecology and Evolution, 4(2):133–142.
Tom Kouwenhoven, Max Peeperkorn, Bram Van Dijk,
  and Tessa Verhoef. 2024. The curious case of rep-    Jonas Nölle, Marlene Staib, Riccardo Fusaroli, and Kris-
   resentational alignment: Unravelling visio-linguistic       tian Tylén. 2018. The emergence of systematicity:
   tasks in emergent communication. In Proceedings of    How environmental and communicative factors shape
   the Workshop on Cognitive Modeling and Computa-      a novel communication system. Cognition, 181:93–
   tional Linguistics, pages 57–71, Bangkok, Thailand.      104.
  Association for Computational Linguistics.
                                                   Joon Sung Park, Joseph O’Brien, Carrie Jun Cai, Mered-
                                                                        ith Ringel Morris, Percy Liang, and Michael S. Bern-
Tom Kouwenhoven, Tessa Verhoef, Roy De Kleijn, and
                                                                      stein. 2023. Generative agents: Interactive simulacra  Stephan Raaijmakers. 2022b. Emerging grounded
                                                          of human behavior. In Proceedings of the 36th An-  shared vocabularies between human and machine,
                                                       nual ACM Symposium on User Interface Software
   inspired by human language evolution. Frontiers in
                                                and Technology, UIST ’23, New York, NY, USA.   Artificial Intelligence, 5:886349.
                                                         Association for Computing Machinery.
Angeliki Lazaridou and Marco Baroni. 2020. Emergent   Max Peeperkorn, Tom Kouwenhoven, Dan Brown, and
   multi-agent communication in the deep learning era.     Anna Jordanous. 2024. Is temperature the creativity
   Preprint, arXiv:2006.02419.                                                       parameter of large language models?  In 15th In-
                                                              ternational Conference on Computational Creativity.
Yuchen Lian, Arianna Bisazza, and Tessa Verhoef. 2023.      Association for Computational Creativity.
  Communication Drives the Emergence of Language
   Universals in Neural Agents: Evidence from the    Steven T. Piantadosi, Harry Tily, and Edward Gibson.
  Word-order/Case-marking Trade-off. Transactions      2011. Word lengths are optimized for efficient com-
   of the Association for Computational Linguistics,      munication. Proceedings of the National Academy of
  11:1033–1047.                                           Sciences, 108(9):3526–3529.
                                        9987

## Страница 12

Limor Raviv, Marianne de Heer Kloots, and Antje    Tessa Verhoef. 2012. The origins of duality of pattern-
  Meyer. 2021. What makes a language easy to learn?      ing in artificial whistled languages. Language and
   a preregistered study on how systematic structure and       Cognition, 4(4):357–380.
  community size affect language learnability. Cogni-
   tion, 210:104620.                                  Tessa Verhoef, Esther Walker, and Tyler Marghetis.
                                                      2016. Cognitive biases and social coordination in
Limor Raviv, Antje Meyer, and Shiri Lev-Ari. 2019a.      the emergence of temporal language.  In Proceed-
  Compositional structure can emerge without genera-      ings of the Annual Meeting of the Cognitive Science
   tional transmission. Cognition, 182:151–164.              Society, volume 38.

Limor Raviv, Antje Meyer, and Shiri Lev-Ari. 2019b.   Tessa Verhoef, Esther Walker, and Tyler Marghetis.
  Larger communities create more systematic lan-      2022.  Interaction dynamics affect the emergence
  guages. Proceedings of the Royal Society B: Bio-      of compositional structure in cultural transmission of
   logical Sciences, 286(1907):20191262.                  space-time mappings. In Proceedings of the Annual
                                                      Meeting of the Cognitive Science Society, volume 44,Thomas C. Scott-Phillips, Simon Kirby, and Gra-
                                                      pages 2133–2139.  ham R.S. Ritchie. 2009.   Signalling signalhood
  and the emergence of communication.  Cognition,                                                Alex Warstadt and Samuel R Bowman. 2022. What
  113(2):226–233.                                                                            artificial neural networks can tell us about human lan-
                                                   guage acquisition. Algebraic Structures in NaturalReinhard Selten and Massimo Warglien. 2007. The
                                                     Language, pages 17–60.  emergence of simple languages in an experimental
   coordination game.  Proceedings of the National
                                                Lucas Weber, Elia Bruni, and Dieuwke Hupkes. 2023.
  Academy of Sciences, 104(18):7361–7366.
                                             Mind the instructions: a holistic evaluation of con-
Ilia Shumailov, Zakhar Shumaylov, Yiren Zhao, Nicolas       sistency and interactions in prompt-based learning.
   Papernot, Ross Anderson, and Yarin Gal. 2024. Ai       In Proceedings of the 27th Conference on Computa-
  models collapse when trained on recursively gener-       tional Natural Language Learning (CoNLL), pages
   ated data. Nature, 631(8022):755–759.                 294–313, Singapore. Association for Computational
                                                               Linguistics.
Kenny Smith. 2011.  Learning Bias, Cultural Evolu-
   tion of Language, and theBiological Evolution of the    Ethan Gotlieb Wilcox, Richard Futrell, and Roger Levy.
  Language Faculty. Human Biology, 83(2):261 – 278.      2023. Using Computational Models to Test Syntactic
                                                               Learnability. Linguistic Inquiry, pages 1–44.
Kenny Smith. 2022. How Language Learning and Lan-
  guage Use Create Linguistic Structure. Current Di-   Eunice Yiu, Eliza Kosoy, and Alison Gopnik. 2024.
   rections in Psychological Science, 31(2):177–186.        Transmission versus truth, imitation versus inno-
                                                              vation: What children can do that large language
Kenny Smith, Simon Kirby, Shangmin Guo, and                                                  and language-and-vision models cannot (yet). Per-
  Thomas L Griffiths. 2024. Ai model collapse might                                                             spectives on Psychological Science, 19(5):874–883.
  be prevented by studying human language transmis-                                            PMID: 37883796.
   sion. Nature, 633(8030):525.
                                                 Yuqing Zhang, Tessa Verhoef, Gertjan van Noord, and
Kenny Smith, Monica Tamariz, and Simon Kirby. 2013.
                                                     Arianna Bisazza. 2024. Endowing neural language
   Linguistic structure is an evolutionary trade-off be-                                                             learners with human-like biases: A case study on
  tween simplicity and expressivity. In Proceedings of                                                    dependency length minimization. In Proceedings of
   the annual meeting of the cognitive science society,                                                            the 2024 Joint International Conference on Compu-
  volume 35.                                                               tational Linguistics, Language Resources and Eval-
Luc Steels, Martin Loetzsch, et al. 2012. The grounded      uation (LREC-COLING 2024), pages 5819–5832,
  naming game.  Experiments in cultural language       Torino, Italia. ELRA and ICCL.
   evolution, 3:41–59.
                                              Chenhao Zheng, Jieyu Zhang, Aniruddha Kembhavi,
Mónica Tamariz and Simon Kirby. 2015.  Culture:     and Ranjay Krishna. 2024.  Iterated learning im-
  Copying, compression, and conventionality. Cog-      proves compositionality in large vision-language
   nitive Science, 39(1):171–183.                         models. In Proceedings of the IEEE/CVF Confer-
                                                     ence on Computer Vision and Pattern Recognition
Michael Tomasello. 1999. The Cultural Origins of Hu-     (CVPR), pages 13785–13795.
  man Cognition. Harvard University Press.

Bram van Dijk, Tom Kouwenhoven, Marco Spruit, and
  Max Johannes van Duijn. 2023. Large language mod-
   els: The need for nuance in current debates and a
  pragmatic perspective on understanding. In Proceed-
   ings of the 2023 Conference on Empirical Methods in
  Natural Language Processing, pages 12641–12654,
  Singapore. Association for Computational Linguis-
   tics.
                                        9988

## Страница 13

A  Communication per round





                                                     Figure 7: The evolution of TopSim on the words pro-
                                                 duced in the testing block. Each line indicates a chain,
                                                and the dashed blue line is the average with bars indi-
Figure 5: The communicative success (PercCom) over    cating the 95% confidence interval. See Table 2 for the
the communication rounds. Each line indicates a sim-    descriptives of TopSim and Ngram.
ulation, the dashed blue line is the average with bars
indicating the 95% confidence interval. The dashed red
line indicates chance performance.           C  Prompts

                                         Our agents act based on prompts and system in-
B  Additional results iterated learning         structions. These are designed to be maximally
                                                   close to the classical experimental setup and for-
                                               matted similar to Galke et al. (2023). The comple-
                                                      tion prompt 2 is used for labelling and guessing.
                                                For the guessing task, we prefill the word and pick
                                                    the signal with the highest probability. See the
                                                             full prompts for labelling and guessing (Prompt
                                                             2), speaking (Prompt 3), discrimination (Prompt 4)
                                                  below.





Figure 6: The average communicative success across
rounds for each generation. Each line indicates a chain,
and the dashed blue line is the average with bars indi-
cating the 95% confidence interval. See Table 2.





                                        9989

## Страница 14

                               t(5)    p   Mgen0  SDgen0  Mgen7  SDgen7
                 TopSim   -1.42   .215    9.62     1.21     10.5     1.77
               Ngram   2.83   .037    .158     .074     .071     .025

Table 2: Paired t-tests shows that Ngram does significantly change resulting from generational transmission, while
TopSim does not.




<|begin_of_text|><| start_header_id|>system <| end_header_id|> You are a language
learner who has to learn an artificial language with words and their corresponding
features. Your task is to complete the vocabulary by generating a word that
describes the last item. Only respond with the word.<|eot_id|><| start_header_id|>
user <| end_header_id|>

{'shape ':2,'colour ':'orange ','amount ':1,'word ':'giniwite '}
{'shape ':3,'colour ':'green ','amount ':1,'word ':'ginisu '}
{'shape ':1,'colour ':'orange ','amount ':2,'word ':'pinisugi '}
{'shape ':3,'colour ':'green ','amount ':3,'word ':'sutepi '}
{'shape ':2,'colour ':'orange ','amount ':2,'word ':'winisu '}
{'shape ':3,'colour ':'orange ','amount ':1,'word ':'niwi '}
{'shape ':1,'colour ':'blue ','amount ':2,'word ':'sutuwite '}
{'shape ':1,'colour ':'blue ','amount ':3,'word ':'tupitene '}
{'shape ':3,'colour ':'blue ','amount ':1,'word ':'wipinepi '}
{'shape ':2,'colour ':'orange ','amount ':3,'word ':'gigi '}
{'shape ':1,'colour ':'green ','amount ':2,'word ':'nite '}
{'shape ':3,'colour ':'blue ','amount ':3,'word ':'wite '}
{'shape ':1,'colour ':'green ','amount ':3,'word ':'sune '}
{'shape ':2,'colour ':'blue ','amount ':2,'word ':'ninene '}
{'shape ':2,'colour ':'green ','amount ':1,'word ':'tusetetu '}
{'shape ':1,'colour ':'green ','amount ':3,'word ':'<|eot_id|><| start_header_id|>
assistant <| end_header_id|>
[COMPLETION OR PREFFILED]


                     Prompt 2: Completion Prompt used for labelling and guessing.




<|begin_of_text|><| start_header_id|>system <| end_header_id|> You are a language
learner who has to learn an artificial language with words and their corresponding
features. Your task is to generate a word such that your communication partner can
guess the correct meaning of the word. Communicative success is important. Only
respond with the word.<|eot_id|><|start_header_id|>user <| end_header_id|>

{'shape ':1,'colour ':'green ','amount ':3,'word ':'sutupitite ','communicativeSuccess ':1}
{'shape ':2,'colour ':'orange ','amount ':2,'word ':'ginupepi ','communicativeSuccess ':1}
{'shape ':1,'colour ':'orange ','amount ':2,'word ':'sutupepi ','communicativeSuccess ':1}
{'shape ':1,'colour ':'green ','amount ':2,'word ':'sutupepi ','communicativeSuccess ':0}
{'shape ':2,'colour ':'orange ','amount ':1,'word ':'ginisu ','communicativeSuccess ':1}
{'shape ':2,'colour ':'orange ','amount ':3,'word ':'ginupitite ','communicativeSuccess ':1}
{'shape ':3,'colour ':'green ','amount ':1,'word ':'wipisu ','communicativeSuccess ':0}
{'shape ':2,'colour ':'green ','amount ':1,'word ':'ginisu ','communicativeSuccess ':1}
{'shape ':1,'colour ':'blue ','amount ':2,'word ':'sunupepi ','communicativeSuccess ':1}
{'shape ':3,'colour ':'green ','amount ':3,'word ':'wipipitite ','communicativeSuccess ':1}
{'shape ':3,'colour ':'orange ','amount ':1,'word ':'wipisu ','communicativeSuccess ':0}
{'shape ':1,'colour ':'blue ','amount ':3,'word ':'sunupitite ','communicativeSuccess ':1}
{'shape ':3,'colour ':'blue ','amount ':3,'word ':'wipipitite ','communicativeSuccess ':1}
{'shape ':3,'colour ':'blue ','amount ':1,'word ':'wipisu ','communicativeSuccess ':1}
{'shape ':2,'colour ':'blue ','amount ':2,'word ':'<|eot_id|><| start_header_id|>assistant
<| end_header_id|>
[COMPLETION]


                         Prompt 3: Speaking Prompt during communication.


                                        9990

## Страница 15

<|begin_of_text|><| start_header_id|>system <| end_header_id|> You are a language
learner who has to learn an artificial language with words and their corresponding
features. Your task is to complete the vocabulary by interpreting the intended
meaning of the word generated by your communication partner. Communicative success
is important. Only respond with the complete last item.<|eot_id|><| start_header_id|>
user <| end_header_id|>

{'word ':'wipipitite ','shape ':3,'colour ':'blue ','amount ':3,' communicativeSuccess ':1}
{'word ':'wipisu ','shape ':3,'colour ':'orange ','amount ':1,' communicativeSuccess ':0}
{'word ':'wipisu ','shape ':3,'colour ':'green ','amount ':1,' communicativeSuccess ':0}
{'word ':'sutupepi ','shape ':1,'colour ':'orange ','amount ':2,' communicativeSuccess ':1}
{'word ':'ginupepi ','shape ':2,'colour ':'orange ','amount ':2,' communicativeSuccess ':1}
{'word ':'sutupitite ','shape ':1,'colour ':'green ','amount ':3,' communicativeSuccess ':1}
{'word ':'wipipitite ','shape ':3,'colour ':'green ','amount ':3,' communicativeSuccess ':1}
{'word ':'wipisu ','shape ':3,'colour ':'blue ','amount ':1,' communicativeSuccess ':1}
{'word ':'ginisu ','shape ':2,'colour ':'green ','amount ':1,' communicativeSuccess ':1}
{'word ':'ginisu ','shape ':2,'colour ':'orange ','amount ':1,' communicativeSuccess ':1}
{'word ':'sunupepi ','shape ':1,'colour ':'blue ','amount ':2,' communicativeSuccess ':1}
{'word ':'sutupepi ','shape ':1,'colour ':'green ','amount ':2,' communicativeSuccess ':0}
{'word ':'sunupitite ','shape ':1,'colour ':'blue ','amount ':3,' communicativeSuccess ':1}
{'word ':'ginupitite ','shape ':2,'colour ':'orange ','amount ':3,'communicativeSuccess ':1}
{'word ':'ginupepi ','shape ':'<|eot_id|><| start_header_id|>assistant <| end_header_id|>
[PREFILLED WITH DISTRACTOR ATTRIBUTES]


                         Prompt 4: Guessing Prompt during communication.





                                        9991
