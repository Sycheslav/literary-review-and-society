---
id: doi-10-1038-s41562-025-02172-y-text
type: material
title: Playing repeated games with large language models
work_id: doi-10-1038-s41562-025-02172-y
source_url: https://www.nature.com/articles/s41562-025-02172-y.pdf
retrieved_at: '2026-10-27'
conversion: pdf_text_extraction
quality_note: Текст извлечён из PDF с сохранением номеров страниц. Порядок колонок,
  таблицы, формулы и подписи могут быть искажены; рисунки доступны по ссылке на PDF.
  Это текстовая конверсия, не визуально эквивалентный оригинал.
language: original
sha256_text: 332cdad2ab73c22957da8bd36be0874a09fe9000ba73f49267a1165799111fa9
---

> Источник: [https://www.nature.com/articles/s41562-025-02172-y.pdf](https://www.nature.com/articles/s41562-025-02172-y.pdf). Текст извлечён из PDF с сохранением номеров страниц. Порядок колонок, таблицы, формулы и подписи могут быть искажены; рисунки доступны по ссылке на PDF. Это текстовая конверсия, не визуально эквивалентный оригинал.

## Страница 1

nature human behaviour


Article                                                                                 https://doi.org/10.1038/s41562-025-02172-y
Playing repeated games with large language
models



Received: 6 December 2023                  Elif Akata       1,2,3    , Lion Schulz2, Julian Coda-Forno1,2, Seong Joon Oh3,
                                     Matthias Bethge3 & Eric Schulz1,2
Accepted: 12 March 2025

Published online: 8 May 2025
                                   Large language models (LLMs) are increasingly used in applications where
  Check for updates                                   they interact with humans and other agents. We propose to use behavioural
                            game theory to study LLMs’ cooperation and coordination behaviour.
                                Here we let different LLMs play finitely repeated 2 × 2 games with each other,
                                   with human-like strategies, and actual human players. Our results show
                                      that LLMs perform particularly well at self-interested games such as the
                                       iterated Prisoner’s Dilemma family. However, they behave suboptimally in
                              games that require coordination, such as the Battle of the Sexes. We verify
                                      that these behavioural signatures are stable across robustness checks. We
                                      also show how GPT-4’s behaviour can be modulated by providing additional
                                   information about its opponent and by using a ‘social chain-of-thought’
                                        strategy. This also leads to better scores and more successful coordination
                             when interacting with human players. These results enrich our under­
                                   standing of LLMs’ social behaviour and pave the way for a behavioural game
                                   theory for machines.


Large language models (LLMs) are deep learning models with billions of   studying the repeated interactions of diverse agents17,18, including
parameters trained on huge corpora of text1–3. While they can generate    artificial agents19.
text that human evaluators struggle to distinguish from text written        In this Article, we analyse LLMs’ behavioural patterns by letting
by other humans4, they have also shown other, emerging abilities5.  them play finitely repeated games with full information and against
They can, for example, solve analogical reasoning tasks6, program web   other LLMs, simple, human-like strategies and actual human players.
applications7, use tools to solve multiple tasks8 or adapt their strategies   Finitely repeated games have been engineered to understand how
purely in-context9. Because of these abilities and their increasing popu-   agents should and do behave in interactions over many iterations. We
larity, LLMs are already transforming our daily lives as they permeate   focus on two-player games with two discrete actions, that is, 2 × 2 games
into many applications10. This means that LLMs will interact with us and   (see Fig. 1 for an overview).
other agents—LLMs or otherwise—frequently and repeatedly. How do       Analysing LLMs’ performance across families of games, we find
LLMs behave in these repeated social interactions?                    that they perform well in games that value pure self-interest, especially
    Measuring how people behave in repeated interactions, for   those from the Prisoner’s Dilemma family. However, they underperform
example, how they cooperate11 and coordinate12, is the subject of a   in games that involve coordination. Based on this finding, we further
subfield of behavioural economics called behavioural game theory13.   focus on games taken from these families and, in particular, on the cur-
While traditional game theory assumes that people’s strategic deci-   rently largest LLM: GPT-4 (ref. 20). In the canonical Prisoner’s Dilemma,
sions are rational, selfish and focused on utility maximization14,15,   which assesses how agents cooperate and defect, we find that GPT-4
behavioural game theory has shown that human agents deviate   retaliates repeatedly, even after having experienced only one defection.
from these principles and, therefore, examines how their decisions   Because this can indeed be the equilibrium individual-level strategy,
are shaped by social preferences, social utility and other psycho-   GPT-4 is good at these games because it is particularly unforgiving and
logical factors16. Thus, behavioural game theory lends itself well to   selfish. However, in the Battle of the Sexes, which assesses how agents


1Institute for Human-Centered AI, Helmholtz Munich, Oberschleißheim, Germany. 2Max Planck Institute for Biological Cybernetics, Tübingen, Germany.
3University of Tübingen, Tübingen, Germany.     e-mail: elif.akata@helmholtz-munich.de

Nature Human Behaviour | Volume 9 | July 2025 | 1380–1390                                                         1380

## Страница 2

Article                                                                                 https://doi.org/10.1038/s41562-025-02172-y


              Player 1                                                                                                                              Player 2                                                                                          J         F
           You are playing a game repeatedly with                       Football     Ballet              You are playing a game repeatedly with
             another player. In this game, you can                                                         another player. In this game, you can
            choose between Option J and Option F. You                       7       0              choose between Option J and Option F. You
                 will play 10 rounds in total with the same     J                                               will play 10 rounds in total with the same
               player. The rules of the game are as                                                                  player. The rules of the game are as                                                                                                                                                                                                     Football  10      0                        follows:               follows:
                      If you choose Option J and the other player                                                                                      If you choose Option J and the other player
            chooses Option J, then you win 10 points        1               0       10              1    chooses Option J, then you win 7 points and
            and the other player wins 7 points.       F                                      the other player wins 10 points.                      If you choose Option J and the other player                               Ballet  0         7                                   If you choose Option J and the other player            chooses Option F, then you win 0 points and                                              chooses Option F, then you win 0 points and
             the other player wins 0 points.                                                                the other player wins 0 points.
                      If you choose Option F and the other player    2                                      2      If you choose Option F and the other player            chooses Option J, then you win 0 points and                                               chooses Option J, then you win 0 points and
             the other player wins 0 points.                                                                the other player wins 0 points.
                      If you choose Option F and the other player                                                                                     If you choose Option F and the other player
            chooses Option F, then you win 7 points and                                               chooses Option F, then you win 10 points
             the other player wins 10 points.                                                      and the other player wins 7 points.
                In round 1, you chose Option J and the       3                                   3    In round 1, you chose Option F and the              other player chose Option F. Thus, you won                                                     other player chose Option J. Thus, you won
          0 points and the other player won 0 points.                                      0 points and the other player won 0 points.
           You are currently playing round 2.                                      J      F                  You are currently playing round 2.
            Q: Which Option do you choose, Option J or                                               Q: Which Option do you choose, Option J or
             Option F?                                                                              Option F?
              A: Option J                                                                                      A: Option F

Fig. 1 | Playing repeated games in an example game of Battle of the Sexes.       LLMs as prompts. In step 3, in each round, the history for each player is
In step 1, the pay-off matrix is turned into textual game rules. In step 2, the game     updated with the answers and scores of both players. Steps 2 and 3 are repeated
rules, the current game history and the query are concatenated and passed to        for ten rounds.



trade off between their own and their partners’ preferences, we find                  Second best                        Unfair
that GPT-4 does not manage to coordinate with simple, human-like
agents that alternate between options over trials. Thus, GPT-4 is bad                              1         4              4         3
at these games because it is uncoordinated. We also verify that these                     1           2               2               1
behaviours are not due to an inability to predict the other player’s
actions, and persist across several robustness checks and changes to                    3          2                      1          2
the pay-off matrices. We point to two ways in which these behaviours
                                                                               3         4              3         4can be changed. GPT-4 can be made to act more forgivingly by point-
ing out that the other player can make mistakes. Moreover, GPT-4 gets
better at coordinating with the other player when it is first asked to pre-                        Biased                  PD family
dict their actions before choosing an action itself, an approach we term
social chain-of-thought (SCoT) prompting. Finally, we let GPT-4 with                   4          2              4         3
and without SCoT-prompting play the canonical Prisoner’s Dilemma
                                                                               3          2                      1          3
and the Battle of the Sexes with human players. We find that SCoT
prompting leads to more successful coordination and joint coopera-
                                                                                                                                 1          3               2               1
tion between participants and LLMs and makes participants believe
more frequently that the other player is human.                                                   1         4               2         4

Results                                                                                                         Cyclic                     Win–win
Using GPT-4, text-davinci-002, text-davinci-003, Claude 2 and Llama 2
70B, we evaluate a range of 2 × 2 games. For the analysis of two particu-                    3         4                      1         4
lar games, we let all the LLMs and human-like strategies play against
each other. We focus on LLMs’ behaviour in cooperation and coordi-              3               1                      1         4
nation games.
                                                                                            2               1                      1          2
Analysing behaviour across families of games                                   2         4                     1           2
We start out our experiments by letting the three LLMs play games
from different families with each other. We focus on all known types of    Fig. 2 | Canonical forms of pay-off matrices for each game family. PD, Prisoner’s
2 × 2 games from the families of win–win, biased, second-best, cyclic   Dilemma.
and unfair games as well as all games from the Prisoner’s Dilemma
family21,22. We show example pay-off matrices for each type of game
in Fig. 2.                                                               player; and second-best games involve suboptimal outcomes where
   We let all LLMs play with every other LLM, including themselves,  no player achieves their ideal result. The sample size for each game
for all games repeatedly over ten rounds and with all LLMs as either   family differs due to the specific characteristics and properties that
player 1 or player 2. This leads to 1,224 games in total: 324 win–win,   define each family. Some families have more members due to a wider
63 Prisoner’s Dilemma, 171 unfair, 162 cyclic, 396 biased and 108   range of configurations that fit their criteria, while others have fewer
second-best games. Win–win games result in mutually beneficial  games because their structural requirements are more restrictive. For
outcomes for both players; Prisoner’s Dilemma involves a conflict   example, the Prisoner’s Dilemma family is constrained by a structure
between individual and collective actions; unfair games have skewed  where both players have a dominant strategy to defect, leading to a
outcomes favouring one player; cyclic games feature outcomes where   suboptimal equilibrium. Meanwhile, win–win games can have multiple
preferences rotate; biased games have inherent advantages for one   equilibria, which provides more flexibility.

Nature Human Behaviour | Volume 9 | July 2025 | 1380–1390                                                                 1381

## Страница 3

Article                                                                                 https://doi.org/10.1038/s41562-025-02172-y

Table 1 | Performance of all models on six families of                  Crucially, the set-up of the game is such that a rationally acting
2 × 2 games                                                   agent would always prefer to defect in the single-shot version of the
                                                    game as well as in our case of finitely iterated games with knowledge of
 Game family  Llama 2  Claude 2  davinci-002  davinci-003   GPT-4                                                                the number of trials, despite the promise of theoretically joint higher
 Second best   0.486    0.735     0.473         0.692         0.763      pay-offs when cooperating. This is because player 1 always runs the
                                                                             risk that player 2 defects, leading to catastrophic losses for player 1 but Biased        0.632    0.794     0.629         0.761          0.798
                                                                 better outcomes for player 2. When the game is played infinitely,
 Cyclic        0.634    0.749     0.638         0.793         0.806                                                                however, or with an unknown number of trials, agents can theoretically
 Unfair         0.641     0.812     0.683        0.833         0.836      profit by using more dynamic, semi-cooperative strategies24.
 PD family       0.731    0.838     0.807         0.841          0.871        As before, we let GPT-4, text-davinci-003, text-davinci-002,
                                                           Claude 2 and Llama 2 play against each other. In addition, we intro- Win–win       0.915    0.878     0.988         0.972         0.992
                                                        duce three simplistic strategies. Two of these strategies are simple
 Overall        0.697    0.814     0.730        0.839         0.854                                                                   singleton players, who either always cooperate or defect. Finally, we
Model score divided by maximum score achievable under ideal conditions. The best-         also introduce an agent who defects in the first round but cooperates
performing model is marked in bold. PD, Prisoner’s Dilemma.                            in all of the following rounds. We introduced this agent to assess if the
                                                                       different LLMs would start cooperating with this agent again, signal-
    To analyse the different LLMs’ performance, we calculated, for   ling the potential of building trust.
each game, their achieved score divided by the total score that could       Figure 3 shows the results of all pairwise interactions. GPT-4 plays
have been achieved under ideal conditions, that is, if both players   generally better than all other agents (t(153.4) = 3.91, P < 0.001, d = 0.33,
had played such that the player we are analysing would have gained  95% CI 0.10–0.55, BF 7.1). Crucially, GPT-4 never cooperates again when
the maximum possible outcomes on every round. The results of this   playing with an agent that defects once but then cooperates on every
simulation are shown across all game types in Table 1. We can see that  round thereafter. Thus, GPT-4 seems to be rather unforgiving in this
all models perform reasonably well. Moreover, we observe that larger   set-up. Its strength in these families of games thus seems to generally
LLMs generally outperform smaller LLMs. In particular, GPT-4 performs  stem from the fact that it does not cooperate with agents but mostly
best overall, outperforming Claude 2 (t(287) = 3.34, P < 0.001, Cohen’s   just chooses to defect, especially after the other agent defected once.
d = 0.20, 95% confidence interval (CI) 0.08–0.31, Bayes factor (BF)
14.8), davinci-003 (t(287) = 6.29, P < 0.001, d = 0.37, 95% CI 0.25–0.49,   Robustness checks. To make sure that the observed unforgivingness was
BF >100), davinici-002 (t(287) = 8.45, P < 0.001, d = 0.70, 95% CI 0.52–   not due to the particular prompt used, we run several versions of the
0.89, BF >100) and Llama 2 (t(287) = 7.27, P < 0.001, d = 0.43, 95% CI  game as robustness checks, randomizing the order of the presented
0.31–0.43, BF >100).                                                  options, relabelling the choice options and changing the presented util-
   We can use these results to take a glimpse at the strengths of the dif-    ities to be represented by either points, dollars or coins (Fig. 4). We also
ferent LLMs. That LLMs are generally performing best in win–win games   repeated our analysis with two different cover stories, added explicit
is not surprising, given that there is always an obvious best choice in  end goals to our prompt, ran games with longer playing horizons and
such games. What is, however, surprising is that they also perform well   described numerical outcomes with text (also see Supplementary
in the Prisoner’s Dilemma family of games, which is known to be chal-   Fig. 3). The results of these simulations showed that the reluctance to
lenging for human players23. We can also use these results to look at   forgive was not due to any particular characteristics of the prompts.
the weaknesses of the different LLMs. Seemingly, all the LLMs perform  A crucial question was if GPT-4 did not understand that the other agent
worse in situations in which what is the best choice is not aligned with  wanted to cooperate again or if it could understand the pattern but just
their own preferences. Because humans commonly solve such games   did not act accordingly. We, therefore, run another version of the game,
via the formation of conventions, we will look at a canonical game of  where we told GPT-4 explicitly that the other agent would defect once
convention formation, the Battle of the Sexes, in more detail below.    but otherwise cooperate. This resulted in GPT-4 choosing to defect
                                                            throughout all rounds, thereby maximizing its own points.
Cooperation and coordination games
In this section, we analyse the interesting edge cases where the LLMs   Prompting techniques to improve observed behaviour. One problem
performed relatively well and poorly in the previous section. To do so,   of these investigations in the Prisoner’s Dilemma is that defecting can
we take a detailed look at LLMs’ behaviour in the canonical Prisoner’s   under specific circumstances be seen as the optimal, utility-maximizing
Dilemma and the Battle of the Sexes.                           and equilibrium option even in a repeated version, especially if one
                                                       knows that the other player will always choose to cooperate and when
Prisoner’s Dilemma. We have seen that LLMs perform well in games   the number of interactions is known. Thus, we run more simulations
that contain elements of competition and defection. In these games,   to assess if there could be a scenario in which GPT-4 starts to forgive
a player can cooperate with or betray their partner. When played over  and cooperates again, maximizing the joint benefit instead of its own.
multiple interactions, these games are an ideal testbed to assess how     We took inspiration from the literature on human forgiveness in
LLMs retaliate after bad interactions.                               the Prisoner’s Dilemma and implemented a version of the task in the
    In the canonical Prisoner’s Dilemma, two agents can choose to   vein of ref. 11. Specifically, ref. 11 showed that telling participants that
work together, that is, cooperate, for average mutual benefit, or betray   other players sometimes make mistakes makes people more likely to
each other, that is, defect, for their own benefit and safety. In our pay-off   forgive and cooperate again after another player’s defection (albeit
matrix, we adhere to the general condition of a Prisoner’s Dilemma   in infinitely played games). Indeed, this can be favourable to them in
game in which the pay-off relationships dictate that mutual coopera-   terms of pay-offs. We observed similar behaviour in GPT-4 as it started
tion is greater than mutual defection whereas defection remains the   cooperating again.
dominant strategy for both players:
                                                                  Battle of the Sexes. In our large-scale analysis, we saw that the dif-
                          Cooperate Defect                     ferent LLMs did not perform well in games that required coordina-
                                                                  tion between different players. In humans, it has frequently been
                Cooperate    (8, 8)    (0, 10)                   (1)                                                          found that coordination problems can be solved by the formation of
                   Defect     (10, 0)     (5, 5)                        conventions25,26.

Nature Human Behaviour | Volume 9 | July 2025 | 1380–1390                                                             1382

## Страница 4

Article                                                                                 https://doi.org/10.1038/s41562-025-02172-y

         a                      Player 1 defection rate                                                      Player 1 accrued scores
                                                                       100                                                                       100
                        GPT-4  90  0   90  0   70   0   80  0                                   GPT-4  45  80  90  80  43  80  83  80

                 Text-davinci-003  40  90  10  90  20  90  10   20      80                  Text-davinci-003  20  98  74  98   18   98   77   23      80

                 Text-davinci-002  0   0   0   0   0   0   0   0                             Text-davinci-002  0   80  72  80   8   80   8   80
     1                                                 60                                                                 60
                      Claude 2  80  90  80  90  90  90  90  90                                Claude 2  40  98  88  98  53  98  88  68
                              Player     Llama 2  0   0   0   0   0   0   0   0                                  Llama 2  0   80  72  80   8   80   8   80
                                                                40                                                                 40
                    Defect Once  10   10   10   10   10   10   10   10                                Defect Once   5   82   77   82   18   82   74   10

                     Cooperate  0   0   0   0   0   0   0   0       20                      Cooperate  0   80  72  80   8   80   8   80      20

                          Defect  100 100 100 100 100 100 100 100                                     Defect  50  100  95  100  60  100  80  55
                                                             0                                                               0
                   2                                                   2
                                                     2        GPT-4                                       Llama                                                                                                                 Llama                                              Claude                                                                                                                            Claude                              DefectCooperateOnce                     2        GPT-4                                          DefectCooperateOnce                                    Defect                                                                            Defect                                                               Text-davinci-002Text-davinci-003                                                                                   Text-davinci-002Text-davinci-003
                                             Player 2                                                                     Player 2
        b                        Defect                                                                      Defect

                                                                        GPT-4                                                            GPT-4
                                                                                Defect Once                                                              Text-davinci-003                               Answer
                   Cooperate                                                              Cooperate

                                           1     2    3    4    5    6     7    8    9    10                        1     2    3    4    5    6     7    8    9    10
                                          Round                                                 Round

Fig. 3 | Overview of the Prisoner’s Dilemma. a, Heat maps showing the player 1 defection rate in each combination of players and the scores accrued by player 1 in
each game. b, Example gameplays between GPT-4 and an agent that defects once and then cooperates, and between GPT-4 and text-davinci-003. These games are also
highlighted in red in the heat maps.



                                          Points         Dollars        Coins                        Points         Dollars        Coins
                                    1.0           F/J         X/Q          R/H                1.0           F/J         X/Q          R/H


                               0.8                                                               0.8
                               0.5                                                                                                                                                                                                                                   coordination 0.5                                                                                              cooperation
                                           Joint  0.2                                                                 0.2                                                                                                                                                                                                                                                                                                                                         Successfull

                         0                                                  0
                                                   Prisoner's Dilemma                                            Battle of the Sexes

Fig. 4 | Prompt variations. Left: GPT-4’s performance for different prompt           variations in the BoS game against an alternating agent. GPT-4 always chooses
variations in the Prisoner’s Dilemma game against a false defector agent. The          its preferred option, resulting in successful coordination rates of only 0.5 across
probability of joint cooperation is ≤0.1 for all combinations except for two using       all combinations. For each variation, two random letters that occur with similar
coins as utility outcomes. Right: GPT-4’s performance for different prompt         frequency in English are given as the choice options.


   A coordination game is a type of simultaneous game in which a   other person but will derive less utility from the activity itself than the
player will earn a higher pay-off when they select the same course of   other person. The corresponding pay-off matrix is
action as another player. Usually, these games do not contain a pure
conflict, that is, completely opposing interests, but may contain slightly                                Football Ballet
diverging rewards. Coordination games can often be solved via multi-                        Football  (10, 7)   (0, 0) .                   (2)
ple pure strategies, or mixed, Nash equilibria in which players choose
(randomly) matching strategies. Here, to probe how LLMs balance                           Ballet    (0, 0)   (7, 10)
coordination and self-interest, we look at a coordination game that
contains conflicting interests.                                      As before, the playing agents are all three versions of GPT, Claude 2
   We study a game that is archaically referred to as the Battle of the  and Llama 2 as well as three more simplistic strategies. For the simplistic
Sexes, a game from the family of biased games. Assume that a couple   strategies, we implemented two agents who always choose just one
wants to decide what to do together. Both will increase their utility by   option. Because LLMs most often interact with humans, we additionally
spending time together. However, while the wife might prefer to watch  implemented a strategy that mirrored a common pattern exhibited by
a football game, the husband might prefer to go to the ballet. Because  human players in the battle of the sexes. Specifically, humans have been
the couple wants to spend time together, they will derive no utility by  shown to often converge to turn-taking behaviour in the Battle of the
doing an activity separately. If they go to the ballet together, or to a   Sexes27–30; this means that players alternate between jointly picking
football game, one person will derive some utility by being with the   the better option for one player and picking the option for the other

Nature Human Behaviour | Volume 9 | July 2025 | 1380–1390                                                            1383

## Страница 5

Article                                                                                 https://doi.org/10.1038/s41562-025-02172-y

         a                          Collaboration rate                                           Player 1 choosing its preferred option
                                                                           100                                                                 100
                       GPT-4 SCoT  90 100 80 100 80 100 80  90 100                       GPT-4 SCoT  10  100  70  100 30 100 30  10  100

                            GPT-4  60 100 50 100 50 100 40  60 100                            GPT-4  40 100 100 100 60 100  70  40 100
                                                                     80                                                            80
                     Text-davinci-003  0  100 50 100  20  100  20  60 100                    Text-davinci-003  100 100 100 100 90 100 90 100 100

     1 Text-davinci-002  0  100 50 100  10  100  10  10  100      60  1 Text-davinci-002  100 100 100 100 100 100 100 100 100      60
                                Player        Claude 2  20  90  60  90  50  90  40  20  90                               Player        Claude 2  80  90  90  90  90  90  90  80  90
                           Llama 2  0  100 50 100  10  100  10  0  100      40                 Llama 2  100 100 100 100 100 100 100 100 100      40

                              Alternate  50  50  0  50  30  50  50  50  30                             Alternate  50  50  50  50  50  50  50  50  50
                                                                        20                                                               20                               Football  0  100 50 100  10  100  10  0  100                              Football  100 100 100 100 100 100 100 100 100

                                    Ballet  100  0  50  0  40  0   0  100 90                                   Ballet  0   0   0   0   0  0   0   0  0
                                                                 0                                                          0
                                      BalletFootballAlternateLlamaClaude2 2       GPT-4SCoT                                     BalletFootballAlternateLlamaClaude2 2        GPT-4SCoT                                                           GPT-4                                                               GPT-4                                                                 Text-davinci-002Text-davinci-003                                                                           Text-davinci-002Text-davinci-003
                                                 Player 2                                                               Player 2
        b     Ballet                                                                                 Ballet

                                                                            GPT-4                                                              GPT-4 SCoT
                                                                                         Alternate                                                                     Alternate                                Answer
                       Football                                                                        Football

                                         1     2    3    4     5    6     7    8    9    10                      1     2    3    4     5    6     7    8    9    10
                                         Round                                                 Round

Fig. 5 | Overview of the Battle of the Sexes. a, Heat maps showing rates of          GPT-4 SCoT that represents a GPT-4 model prompted using the SCoT method
successful collaboration between the two players and the rates of player 1           to first predict the opponent’s move before making its own move by reasoning
choosing its preferred option football. GPT-4 SCoT and GPT-4 performance        about its prediction (right). Both games are also highlighted in blue in the
comparisons are highlighted in red. b, Gameplay between GPT-4 and an agent       heat maps.
that alternates between the two options (left) and gameplay between GPT-4 and


player. While not a straightforward equilibrium, this behaviour has   versions of the game, where we modified the pay-off matrix gradu-
been shown to offer an efficient solution to the coordination problem   ally from preferring football to preferring ballet (or, in our case, the
involved and to lead to high joint welfare28.                            abstract F and J). The results of these simulations showed that GPT-4
    Figure 5 shows the results of all interactions. As before, GPT-4   did not alternate for any of these games but simply changed its constant
plays generally better than all other agents (t(128.28) = 2.83,   response to the option that it preferred for any particular game. Thus,
P = 0.005, d = 0.28, 95% CI 0.07–0.50, BF 3.56). Yet, while GPT-4 plays   the inability to alternate was not due to the particular pay-off matrix
well against other agents who choose only one option, such as an  we used (Supplementary Section A.5).
agent always choosing football, it does not play well with agents
who frequently choose their non-preferred option. For example,   Prediction scenarios. Despite these robustness checks, another crucial
when playing against text-davinci-003, which tends to frequently   question remains: Does GPT-4 simply not understand the alternating
choose its own preferred option, GPT-4 chooses its own preferred   pattern or can it understand the pattern but is unable to act accord-
option repeatedly but also occasionally gives in and chooses the   ingly? To answer this question, we run two additional simulations. In
other option. Crucially, GPT-4 performs poorly when playing with an   the first simulation, GPT-4 was again framed as a player in the game
alternating pattern (where, for courtesy, we let agents start with the    itself. However, we now additionally ask it to predict the other player’s
option that the other player preferred). This is because GPT-4 seem-   next move according to previous rounds. In this simulation, GPT-4
ingly does not adjust its choices to the other player but instead keeps   started predicting the alternating pattern correctly from round 5
choosing its preferred option. GPT-4, therefore, fails to coordinate  onwards (Fig. 6).
with a simple, human-like agent, an instance of a behavioural flaw.        In the second simulation, instead of having GPT-4 be framed
                                                                 as a player itself, we simply prompted it with a game between two
Robustness checks. To make sure that this observed behavioural flaw   (‘external’) players and asked it to predict one player’s next move
was not due to the particular prompt used, we also rerun several ver-   according to the previous rounds. For the shown history, we used the
sions of the game, where we randomize the order of the presented   interaction between GPT-4 and the alternating strategy. In this simula-
options, relabelled the choice options and changed the presented   tion, GPT-4 started predicting the alternating pattern correctly even
utilities to be represented by either points, dollars or coins as shown   earlier, from round 3 onwards. Thus, GPT-4 seemingly could predict
in Fig. 4. We also repeated our analysis with two different cover stories,   the alternating patterns but instead just did not act in accordance
in which we told GPT-4 that it was taking part in a cooking competi-   with the resulting convention. Similar divergences in abilities between
tion or working on a collaborative project keeping the underlying   social and non-social representations of the same situation have been
problem structure (pay-offs and the interaction dynamics) identical   observed in autistic children31.
(Supplementary Fig. 3). The results of these simulations showed that
the inability to alternate was not due to any particular characteristics  SCoT prompting. Finally, we wanted to see if GPT-4’s ability to predict
of the used prompts. To make sure that the observed behavioural flaw   the other player’s choices could be used to improve its own actions.
was not due to the particular pay-off matrix used, we also rerun several   This idea is closely related to how people’s reasoning in repeated games

Nature Human Behaviour | Volume 9 | July 2025 | 1380–1390                                                           1384

## Страница 6

Article                                                                                 https://doi.org/10.1038/s41562-025-02172-y

 Prediction scenario 1                                                     prior interactions within the experiment. If assigned to the base version
                                                                                        initially, participants played both games with this model, and likewise
 You are playing a game repeatedly with another player...                                                                     for the socially prompted version. An overview of the experimental
 Q: Which option do you predict the other player will choose,                  design is shown in Fig. 7a. Participants were recruited from Prolific
 option J or option F?                                          and debriefed fully after the experiment. We were interested in how
 A: Option J                                                    people played against LLMs in general as well as if GPT-4’s behaviour
                                                              could be improved via SCoT prompting. Finally, we also asked partici-  F
                                                               pants whether they thought they had played with another human or
                                                    GPT-4 prediction     an artificial agent after each game.
                                                              Alternate              While participants’ average score was significantly higher for the
    J                                                      SCoT-prompted condition compared with the condition without fur-
                                                                   ther prompting (that is, base) in the Battle of the Sexes (mixed-effects
            1       2      3      4      5      6       7      8      9      10     regression results: β = 0.74, t(193) = 3.49, P < 0.001, 95% CI 0.32–1.15,
                               Round                                                       BF 80.6), no such difference was observed in the Prisoner’s Dilemma
                                                                            (β = 0.10, t(193) = 0.47, P = 0.64, 95% CI −0.31 to 0.51, BF 0.2). Look-
 Prediction scenario 2
                                                                  ing at the behaviour of both players, we found that SCoT prompting
 Two players are playing a game repeatedly with another player...                increased successful coordination (that is, both players picking the
 Q: Which option do you predict Player 2 will choose, option J or              same option) in the Battle of the Sexes (β = 0.33, z = 3.59, P < 0.001, 95%
 option F?
                                                                  CI 0.15–0.51, BF 13.4), while it also slightly increased joint cooperation
 A: Option J                                                              (that is, both players cooperating) in the Prisoner’s Dilemma (β = 0.24,
                                                                               z = 2.54, P = 0.01, 95% CI 0.05–0.42, BF 6.5). In general, participants
  F
                                                            were more likely to think that the prompted model was another human
                                                    GPT-4 prediction     player as compared with the unprompted base GPT-4 model (β = 0.54,
                                                              Alternate              z = 8.31, P < 0.001, 95% CI 0.05–0.42, BF 17.6). Additional analysis on
    J                                                                    participants’ temporal behaviour in both games can be found in the
                                                           Supplementary Information.
            1       2      3      4      5      6       7      8      9      10          In summary, SCoT prompting can increase GPT-4’s coordination
                               Round                          and cooperation behaviour without changing scores in scenarios where
Fig. 6 | Prediction scenarios in the Battle of the Sexes. Top: GPT-4 is a player of      self-interest is important for good behaviour, that is, the Prisoner’s
the game and predicts the other player’s move. Bottom: GPT-4 is a mere observer   Dilemma, but leading to increased performance in coordination prob-
of a game between player 1 and player 2 and predicts player 2’s move.             lems, that is, the Battle of the Sexes.

                                                Discussion
and tasks about other agents’ beliefs can be improved32. For example,  LLMs are among the most quickly adopted technologies ever, interact-
computer-aided simulations to improve the social reasoning abilities   ing with millions of consumers within weeks10. Understanding in a more
of autistic children normally include questions to imagine different   principled manner how these systems interact with us, and with each
actions and outcomes33. This has been successfully used to improve   other, is thus of urgent concern. Here, our proposal is simple: Just like
people’s decision-making more generally. It is also in line with the   behavioural game theorists use tightly controlled and theoretically
general finding that chain-of-thought prompting improves LLM’s   well-understood games to understand human interactions, we use
performance, even in tasks measuring theory of mind (ToM)34. Thus,   these games to study the interactions of LLMs.
we implemented a version of this reasoning through actions by asking     We thereby understand our work as both a proof of concept of the
LLMs to imagine the possible actions and their outcomes before making   utility of this approach and an examination of the individual failures
a decision. We termed this approach SCoT prompting. Applying this  and successes of socially interacting LLMs. Our large-scale analysis of
method improved GPT-4’s behaviour, and it started to alternate from    all 2 × 2 games highlights that the most recent LLMs indeed are able
round 5 onwards (Fig. 5).                                           to perform well on a wide range of game-theoretic tasks as measured
                                                          by their own individual reward, particularly when they do not have to
Human experiments                                                      explicitly coordinate with others. This adds to a wide-ranging literature
Given the behavioural signatures observed in GPT-4’s responses in   showcasing emergent phenomena in LLMs4–8. However, we also show
the different games, we were interested in how actual human subjects   that LLMs’ behaviour is suboptimal in coordination games, even when
would behave when playing with such agents. To test this, we conducted   faced with simple strategies.
an experiment in which 195 participants played both the Battle of the      To tease apart the behavioural signatures of these LLMs, we
Sexes and the Prisoner’s Dilemma against LLMs. Because the SCoT  zoomed in on two of the most canonical games in game theory: the
prompting turned out to be a most reliable modification of LLMs’   Prisoner’s Dilemma and the Battle of the Sexes. In the Prisoner’s
behaviour, we applied this prompting method only in our behavioural  Dilemma, we show that GPT-4 plays mostly unforgivingly. Starting
experiments with humans.                                        with full cooperation, it permanently shifts to defection after a single
     Participants were told that they would play either against a human   negative interaction with the other agent, even if the other agent later
player or an artificial agents for ten repeated rounds for each game   cooperates. While noting that GPT-4’s continual defection is indeed the
and, after each game, had to guess whether they had played against a   equilibrium policy in this finitely played game, such behaviour comes
human or not. Which game they played first was assigned randomly.   at the cost of the two agents’ joint pay-off. We see a similar tendency
While all subjects, in fact, played only against LLMs, one group played   in GPT-4’s behaviour in the Battle of the Sexes, where it has a strong
against the base version of GPT-4, while another group played against  tendency to stubbornly stick with its own preferred alternative. In
a version of GPT-4 that first predicted the other agent’s move and the   contrast to the Prisoner’s Dilemma, this behaviour is suboptimal, even
acted accordingly, that is, SCoT prompting. Importantly, each par-  on the individual level.
ticipant played only two games, and the prompting was reset between       Current generations of LLMs are generally assumed, and trained,
games to ensure any change in LLM behaviour was not influenced by   to be benevolent assistants to humans35. Despite many successes in this

Nature Human Behaviour | Volume 9 | July 2025 | 1380–1390                                                            1385

## Страница 7

Article                                                                                 https://doi.org/10.1038/s41562-025-02172-y

        a             Experimental design      b                Battle of the Sexes       c                Prisoner's Dilemma
                               Human                        10                                                10
                                                             9                BF = 80.6                    9                 BF = 0.2
                                                              8                                           8
                            LLM         LLM                   7                                                  7                                Base        Prompted                   score 6                                                                           score 6                                                                                                                             Between-subject                                          5                                             5
                                  Battle of the         Prisoner’s             4                                           4                              with         Sexes          Dilemma                         Average 3                                                                                                         Average 3
                                                                    2                                               2
                10        10                    01                                      01
                          rounds          rounds                               Base           Prompted                         Base           Prompted                                                                                                          Within-subjectcounterbalancing                                                                   Opposing LLM                            Opposing LLM

       d  1.0        Guessing the opponent      e            Successful coordination        f                  Joint cooperation
                   0.9                                                              BF = 13.4                          1.0                 BF = 6.5
                   0.8                                                        1.0                                                0.9
                                                                      0.9                                                0.8                    0.7                BF = 17.6
                                                                      0.8                                                   0.7
                   0.6                                                   0.7                                                0.6
                   0.5                                                0.6                                                                                                                           0.5                                                                       0.5
                                                                                                                         0.4                                     P(Human) 0.4                                                                      0.4                   0.3                                                                                                                                               P(Success)                                                                                                                          0.3                                                                      0.3                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                   P(Cooperation)
                    0.2                                                  0.2                                                  0.2
                      0.1                                                        0.1                                                        0.1
                                                       0                                      0
                0
                               Base           Prompted                         Base           Prompted                         Base           Prompted
                           Opposing LLM                            Opposing LLM                            Opposing LLM

Fig. 7 | Human experiments. a, The design of human experiments (N = 195, 89        d, The average proportion of participants guessing that they have played against
females, mean age 26.72, s.d. 4.19). Each participant gets randomly assigned        another human by condition. Error bars represent the 95% CIs of the mean
either the base or the SCoT-prompted version of the LLM at the start and plays        (β = 0.54, z = 8.31, P < 0.001, 95% CI 0.05–0.42, BF 17.6). e, Participants’ successful
both games repeatedly for ten rounds against this agent. b, Results of the Battle     coordination rates by condition in the Battle of the Sexes game (β = 0.33, z = 3.59,
of the Sexes game showing participants’ average scores by condition (mixed-         P < 0.001, 95% CI 0.15–0.51, BF 13.4). f, Participants’ mutual cooperation rates
effects regression results: β = 0.74, t(193) = 3.49, P < 0.001, 95% CI 0.32–1.15, BF      by condition in the Prisoner’s Dilemma game (β = 0.24, z = 2.54, P = 0.01, 95% CI
80.6). c, Results of the Prisoner’s Dilemma game showing participants’ average      0.05–0.42, BF 6.5).
scores by condition (β = 0.10, t(193) = 0.47, P = 0.64, 95% CIs −0.31 to 0.51, BF 0.2).


direction, the fact that we here show how they play iterated games in   suggests implementing a similar social cognition prompt to improve
such a selfish and uncoordinated manner sheds light on the fact that  human–LLM interaction.
there is still substantial ground to cover for LLMs to become truly        In our exploration of a behavioural game theory of machines, we
social and well-aligned machines36. Their lack of appropriate responses  acknowledge several limitations. First, despite covering many fami-
vis-a-vis even simple strategies in coordination games also speaks to    lies of games, our investigation is constrained to simple 2 × 2 games.
the recent debate around ToM in LLMs37–39 by highlighting a potential   However, we note that our analysis substantially goes beyond current
failure mode.                                                         investigations that have often investigated only one game, and done
   Our extensive robustness checks demonstrate how these behav-   so using single-shot rather than iterated instances of these games. For
ioural signatures are not functions of individual prompts but reflect   example, our iterated approach shares more overlap with the more iter-
broader patterns of LLM behaviour. Our intervention pointing out   ated nature of human–LLM conversations. We also note that we mainly
the fallibility of the playing partner—which leads to increased coop-   study finite games where agents share knowledge about the duration
eration—adds to a literature that points to the malleability of LLM   of the interaction. This is in contrast to so-called indefinite games that
social behaviour in tasks to prompts40,41. This is important as we try to  have either unknown, probabilistic or no endpoints at all. In these
understand what makes LLMs better, and more pleasant, interactive   games, both optimal prescriptions and empirical behaviour can differ
partners. Further experiments on GPT-4’s final round behaviour have   significantly from the finite case, warranting further investigation.
shown that it did not adjust its behaviour in the last round of games or     We believe that more complicated games will shed even more
when faced with varying probabilities of continuation, unlike human   light on game-theoretic machine behaviour in the future. For example,
players who often increase cooperation when future interactions are  games with more continuous choices like the trust game47 might eluci-
likely42,43. This suggests that GPT-4 may lack mechanisms for backward   date how LLMs dynamically develop (mis-)trust. Games with more than
induction and long-term strategic planning, primarily focusing on  two agents, like public goods or tragedy of the commons type games48,
immediate context due to its training on next-token prediction44.   could probe how ‘societies’ of LLMs behave, and how LLMs cooperate
Consequently, GPT-4 tends to default to defection in uncertain situ-   or exploit each other.
ations, contrasting with human tendencies to anticipate and adjust       Given the social nature of the tasks studied here, further empirical
based on future outcomes24,45.                                work is needed to fully understand human–LLM interactions across
   We additionally observed that prompting GPT-4 to make pre-    all paradigms. In our study, we conducted human experiments in two
dictions about the other player before making its own decisions can   of the games, specifically, the Battle of the Sexes and the Prisoner’s
alleviate behavioural flaws and the oversight of even simple strate-  Dilemma, and attempted to probe human-like behaviours such as
gies. This represents a more explicit way to force an LLM to engage   turn-taking in Battle of the Sexes or prompting for forgiveness in the
in ToM and shares much overlap with non-SCoT reasoning34,46. Just   Prisoner’s Dilemma. However, these empirical investigations were lim-
like chain-of-thought prompting is now implemented as a default in   ited to these two games. By extending human studies to the remaining
some LLMs to improve (non-social) reasoning performance, our work   games, additional dynamics may emerge. Furthermore, asking LLMs

Nature Human Behaviour | Volume 9 | July 2025 | 1380–1390                                                           1386

## Страница 8

Article                                                                                 https://doi.org/10.1038/s41562-025-02172-y

to self-report their strategies in these games and correlating these   previous submissions of 10 that have not participated in our experi-
explanations with their actions could provide valuable insights into  ment before. All participants provided informed consent before inclu-
their actual decision-making processes.                              sion in the study. Experiments were performed in accordance with the
    Our results highlight the broader importance of a behavioural sci-   relevant guidelines and regulations approved by the ethics committee
ence for machines49–52. We believe that these methods will continue to   of the University of Tübingen (protocol no. 701/2020BO). Participants
be useful for elucidating the many facets of LLM cognition, particularly   received a £3 base payment plus a bonus of up to £2 depending on
as these models become more complex, multimodal and embedded  performance (1 cent for each point received during the games) for
in physical systems.                                                    their participation. The average compensation was £11.41 per hour.
                                                                       Participants were fully debriefed after the experiment. Data of 21 play-
Related work                                                        ers who failed to make a round’s choice between the two options within
As algorithms become increasingly more able and their decision making   a given time frame (20 s) were excluded.
processes impenetrable, the behavioural sciences offer new tools to        In the sections that follow, we first detail the experimental set-up
make inferences just from behavioural observations49,50. Behavioural   for LLM–LLM interactions, which serves as a comparative baseline for
tasks have, therefore, been used in several benchmarks10,53.           our study. We then present details from the human participant study
    Whether and how algorithms can make inferences about other   outlined above.
agents, machines and otherwise, is one stream of research that borrows
heavily from the behavioural sciences54–56. Of particular interest to the  LLM–LLM interactions
social interactions most LLMs are embedded in is an ability to reason  We study LLMs’ behaviour in finitely repeated games with full infor-
about the beliefs, desires and intentions of other agents, or a ToM57.   mation taken from the economics literature. We focus on two-player
ToM underlies a wide range of interactive phenomena, from benevolent  games with discrete choices between two options to simplify the anal-
teaching58 to malevolent deception56,59, and is thought to be the key to   yses of emergent behaviours. We let two LLMs interact via prompt
many social phenomena in human interactions60,61.                    chaining, that is, all integration of evidence and learning about past
    Whether LLMs possess a ToM has been debated. For example, it   interactions happens as in-context learning4,74. The games are submit-
has been argued that GPT-3.5 performs well on a number of canonical   ted to LLMs as prompts in which the respective game, including the
ToM tasks39. Others have contested this view, arguing that such good   choice options, is described. At the same time, we submit the same
performance is merely a function of the specific prompts37,38. Yet, other  game as a prompt to another LLM. We obtain generated tokens t from
research has shown that chain-of-thought reasoning improves LLMs’   both LLMs by sampling from
ToM ability34. Moreover, the currently largest LLM, GPT-4, manages to
                                                                                                              K
perform well in ToM tasks, including in the variants in which GPT-3.5                  pLLM(t|c(p)) = ∏ pLLM (tk|c(p)1   , … , c(p)n   , t1, … , tk−1) .          (3)previously struggled8. Thus, GPT-4’s behaviour will be of particular                                   k=1
interest in our experiments.
   Games taken from game theory present an ideal testbed to inves-       After feeding the prompt to the LLM, our methodology is as fol-
tigate interactive behaviour in a controlled environment62, and LLMs’   lows. The LLM prediction of the first token following the context is
behaviour has been probed in such tasks63. For example, ref. 40 let    d = pLLM(t1∣c(p)) and the N tokens for the possible answers of the multiple
GPT-3 participate in the dictator game, and ref. 41 used the same   choice question are o = {oi}Ni=1 which in this case are J and F. The pre-
approach for the ultimatum game. Both show how the models’ behav-   dicted option is then given by
iour is malleable to different prompts, for example, making them more
or less self-interested. However, all these games rely on single-shot                              ̂o = arg max(̂ci), with ̂ci = d[ci], i = 1 … N,               (4)
interactions over fewer games and do not use iterated games.
   Our study builds upon recent advancements in the field, which   which are the predicted probabilities of the language model. Once both
have shifted the focus from solely assessing the performance of LLMs  LLMs have made their choices, which we track as a completion of the
to comparing them with human behaviours. Previous research efforts   given text, we update the prompts with the history of past interactions
have explored various approaches to analyse LLMs, such as using   as concatenated text and then submit the new prompt to both models
cognitive psychology tools51,64 and even adopting a computational   for the next round. These interactions continue for ten rounds in total
psychiatry perspective52.                                               for every game. In a single round, πi(x1, x2) is the pay-off for player 1 when
     Finally, the theory behind interacting agents is important for    x1 and x2 are the strategies chosen by both players. In repeated games,
many machine learning applications in general65 and, in particular, in   the pay-offs are often considered as discounted sums of the pay-offs
adversarial settings66, where one agent tries to trick the other agent   in each game stage, using a discount factor δ. If the game is repeated
into thinking that a generated output is good. Understanding prosocial  n times, the pay-off Ui for player i is
dynamics in multiagent systems67 and fostering cooperation in them68
is essential for developing robust and trustworthy artificial intelligence                 Ui = πi(x10, x20) + δ × πi(x11, x21) + δ2 × πi                                                                                                                                                                    (5)
systems that can navigate complex social environments69.                                              (x12, x22) + … + δn−1 × πi(x1(n−1), x2(n−1)).
Methods                                               Each term represents the discounted pay-off at each stage of the
To investigate how human subjects would behave when playing with   repeated game, from the first game (t = 0) to the nth game (t = n − 1).
LLM agents, we studied their interactions in two of the games we used:   In our experiments, we keep δ = 1. To avoid influences of the particular
Prisoner’s Dilemma and the Battle of the Sexes. We also investigated if   framing of the scenarios, we provide only barebones descriptions of
participants could detect and behave differently when playing against   the pay-off matrices (see example in Fig. 1). To avoid contamination
different agents. Participants (N = 195, 89 females, mean age 26.72, s.d.   through particular choice names or the used framing, we use the neu-
4.19) were recruited through Prolific70, an online platform that allows   tral options F and J throughout51.
researchers to access a diverse and reliable pool of participants. No
statistical methods were used to predetermine sample sizes, but our  Games considered. We first investigate 144 different 2 × 2 games where
sample sizes are similar to those reported in previous publications71–73.   each player has two options, and their individual reward is a function
The participants were required to be fluent speakers of English with   of their joint decision. These games can be categorized into six distinct
minimum approval rates of 0.95 and 1, and a minimal number of   families—win–win, Prisoner’s Dilemma family, unfair, cyclic, biased

Nature Human Behaviour | Volume 9 | July 2025 | 1380–1390                                                              1387

## Страница 9

Article                                                                                 https://doi.org/10.1038/s41562-025-02172-y

and second-best—each with unique characteristics and outcomes.   likelihood of the data under H0. We calculate the default two-sided
A win–win game is a special case of a non-zero-sum game that produces   Bayesian t-test using a Jeffreys–Zellner–Siow prior with its scale set to
a mutually beneficial outcome for both players provided that they   √2/2, following75. For parametric tests, the data distribution was
choose their corresponding best option. They encourage cooperation,  assumed to be normal, but this was not formally tested. We report effect
leading to outcomes where both parties benefit. In brief, in games   sizes as either Cohen’s d or standardized regression estimates, includ-
from the Prisoner’s Dilemma family, two agents can choose to work   ing their 95% CIs.
together, that is, cooperate, for average mutual benefit, or betray each
other, that is, defect, for their own benefit. The typical outcome is a  Human–LLM interactions
Nash equilibrium that is suboptimal for both players compared with  The following sections provide additional details on the design and
a possible Pareto-superior outcome. In an unfair game, one player can  conduct of the human participant study, including compensation,
always win when playing properly, leading to highly unequal outcomes.   demographics, prompting and the cover stories.
Cyclic games are characterized by the absence of dominant strategies
and equilibria. In these games, players can cycle through patterns   Design. Experiments were presented to participants using a combi-
of choices without settling into a stable outcome. Biased games are   nation of HTML, JavaScript and CSS with custom code. After a pres-
games where agents get higher points for choosing the same option   entation of the instructions including screenshots from the actual
but where the preferred option differs between the two players. One   gameplay, participants were required to complete a comprehension
form of a biased game is the Battle of the Sexes, where players need to   questionnaire. Only upon responding correctly to all questions
coordinate to choose the same option. Finally, second-best games are   could they proceed to the main part of the experiment. Participants
games where both agents fare better if they jointly choose the option   played both the Prisoner’s Dilemma and the Battle of the Sexes, with
that has the second-best utility. In many of these games, strategic swaps   the order counter-balanced between subjects. Participants were
in pay-offs can alter the game dynamics, potentially converting them   instructed that they would play two games with ten rounds each with
into different types of game. For two additional games, Prisoner’s   different players. The participants’ interface (Supplementary Fig. 4)
Dilemma and Battle of the Sexes, we also let LLMs play against simple,  was designed to provide clear and actionable information about the
hand-coded strategies to understand their behaviour in more detail.   current game. After each game, participants were asked to indicate
                                                                                                 if they thought they had just played with another human player or
LLMs considered. In this work, we evaluate five LLMs. For all of our  an artificial agent.
tasks, we used the public OpenAI API with the GPT-4, text-davinci-003
and text-davinci-002 models, which are available via the completions  Prompts and human instructions. The cover story used for inter-
endpoint, Meta AI’s Llama 2 70B chat model, which has 70 billion param-   actions with both LLMs and human participants was content-wise
eters and is optimized for dialogue use cases, and the Anthropic API   identical, including the rules of the game and the history of previous
model Claude 2 to run our simulations. Experiments with other popular   interactions, to ensure consistent framing across conditions (see
open-source models MosaicPretrainedTransformer (MPT), Falcon and  Supplementary A.1 for the detailed prompt progression). However,
different versions of Llama 2 (namely MPT-7B, MPT-30B, Falcon-7b,   the presentation was adapted to suit each audience. For human par-
Falcon-40b, Llama 2 7B and Llama 2 13B) have revealed that these mod-   ticipants, visual cues and concise text were prioritized to create a
els did not perform well at the given tasks, choosing the first presented  more engaging experience (Supplementary Fig. 4).
option more than 95% of the time independent of which option this is.
Therefore, we chose not to include them in our main experiments. For  Ending and debriefing. Participants were informed that their oppo-
all models, we set the temperature parameters to 0 and only ask for one   nent could either be another human participant or an artificial agent.
token answer to indicate which option an agent would like to choose.   In reality, all participants were paired with either a SCoT-prompted or
All other parameters are kept as default values.                    an unprompted version of GPT-4 for the entirety of the experiment,
                                                                    that is, across both games. After completing the study, participants
Playing 6 families of 2 × 2 games task design. While 2 × 2 games  were debriefed that the purpose of the study was to explore how to
can appear simple, they present some of the most powerful ways to  make LLMs more human-like and that, in both games, they had played
probe diverse sets of interactions, from pure competition to mixed   against different versions of an artificial agent.
motives and cooperation, which can further be classified into canoni-
cal subfamilies outlined elegantly by ref. 22. Here, to cover the wide  Reporting summary
range of possible interactions, we study the behaviours of GPT-4,   Further information on research design is available in the Nature
text-davinci-003, text-davinci-002, Claude 2 and Llama 2 across these   Portfolio Reporting Summary linked to this article.
canonical families. We let all five engines play all variants of games from
within the six families.                              Data availability
                                                                              All participant and model simulation data from the experiments are
Cooperation and coordination task design. We then analyse two   available via GitHub at https://github.com/eliaka/repeatedgames.
games, Prisoner’s Dilemma and Battle of the Sexes, in more detail
because they represent interesting edge cases where the LLMs per-  Code availability
formed exceptionally well, and relatively poorly. We hone in particu-  The code underlying this study, prompt variations and model
larly on GPT-4’s behaviour because of recent debates around its ability   simulations is available via GitHub at https://github.com/eliaka/
for ToM, that is, whether it is able to hold beliefs about other agents’   repeatedgames.
intentions and goals, a crucial ability to successfully navigate repeated
interactions8,39. For the two additional games, we also let LLMs play  References
against simple, hand-coded strategies to further understand their    1.   Brants, T., Popat, A., Xu, P., Och, F. J. & Dean, J. Large
behaviour. These simple strategies are designed to assess how LLMs      language models in machine translation. In Proc. 2007
behave when playing with more human-like players.                          Joint Conference on Empirical Methods in Natural Language
                                                                      Processing and Computational Natural Language Learning
Statistical tests. All reported tests are two-sided. We also report Bayes      (EMNLP-CoNLL) 858–867 (Association for Computational
factors quantifying the likelihood of the data under HA relative to the        Linguistics, 2007).

Nature Human Behaviour | Volume 9 | July 2025 | 1380–1390                                                           1388

## Страница 10

Article                                                                                 https://doi.org/10.1038/s41562-025-02172-y

2.   Devlin, J., Chang, M. W., Lee, K., & Toutanova, K. Bert: Pre-training    29. McKelvey, R. D. & Palfrey, T. R. Playing in the Dark: Information,
     of deep bidirectional transformers for language understanding.          Learning, and Coordination in Repeated Games (California
     In Proc. 2019 Conference of the North American Chapter of the             Institute of Technology, 2001).
     Association for Computational Linguistics: Human Language         30.  Arifovic, J. & Ledyard, J. Learning to alternate. Exp. Econ. 21,
    Technologies Vol. 1 (Long and Short Papers) 4171–4186                  692–721 (2018).
     (Association for Computational Linguistics, 2019).                     31.  Swettenham, J. What’s inside someone’s head? Conceiving of
3.   Radford, A. et al. Improving Language Understanding by                 the mind as a camera helps children with autism acquire an
    Generative Pre-training (OpenAI, 2018).                                    alternative to a theory of mind. Cogn. Neuropsychiatry 1, 73–88
4.  Brown, T. et al. Language models are few-shot learners. Adv.              (1996).
    Neural Inform. Process. Syst. 33, 1877–1901 (2020).                  32. Westby, C. & Robinson, L. A developmental perspective for
5.   Wei, J. et al. Emergent abilities of large language models. Preprint       promoting theory of mind. Top. Lang. Disord. 34, 362–382 (2014).
     at https://arxiv.org/abs/2206.07682 (2022).                         33. Begeer, S. et al. Theory of mind training in children with autism: a
6.  Webb, T., Holyoak, K. J. & Lu, H. Emergent analogical reasoning in       randomized controlled trial. J. Autism Dev. Disord. 41, 997–1006
     large language models. Nat. Hum. Behav. 7, 1526–1541 (2023).              (2011).
7.   Chen, M. et al. Evaluating large language models trained on code.   34. Moghaddam, S. R. & Honey, C. J. Boosting theory-of-mind
     Preprint at https://arxiv.org/abs/2107.03374 (2021).                    performance in large language models via prompting. Preprint at
8.  Bubeck, S. et al. Sparks of artificial general intelligence: early             https://arxiv.org/abs/2304.11490 (2023).
    experiments with GPT-4. Preprint at https://arxiv.org/abs/            35. Ouyang, L. et al. Training language models to follow instructions
    2303.12712 (2023).                                                   with human feedback. Adv. Neural Inform. Process. Syst. 35,
9.   Coda-Forno, J. et al. Meta-in-context learning in large language          27730–27744 (2022).
    models. Adv. Neural Inform. Process. Syst. 36, 65189–65201 (2023).   36. Wolf, Y., Wies, N., Levine, Y. & Shashua, A. Fundamental limitations
10. Bommasani, R. et al. On the opportunities and risks of foundation         of alignment in large language models. Preprint at https://arxiv.
    models. Preprint at https://arxiv.org/abs/2108.07258 (2021).             org/abs/2304.11082 (2023).
11.  Fudenberg, D., Rand, D. G. & Dreber, A. Slow to anger and fast to      37.  Ullman, T. Large language models fail on trivial alterations to
     forgive: cooperation in an uncertain world. Am. Econ. Rev. 102,           theory-of-mind tasks. Preprint at https://arxiv.org/abs/2302.08399
    720–749 (2012).                                                         (2023).
12.  Mailath, G. J. & Morris, S. Coordination failure in repeated            38.  Le, M., Boureau, Y.-L. & Nickel, M. Revisiting the evaluation
   games with almost-public monitoring. Cowles Foundation               of theory of mind through question answering. In Proc. 2019
    Discussion Papers, 1761 https://elischolar.library.yale.edu/              Conference on Empirical Methods in Natural Language Processing
    cowles-discussion-paper-series/1761 (2004).                       and the 9th International Joint Conference on Natural Language
13.  Camerer, C. F. Behavioral Game Theory: Experiments in Strategic          Processing (EMNLP-IJCNLP) 5872–5877 (Association for
     Interaction (Princeton University Press, 2011).                         Computational Linguistics, 2019).
14.  Fudenberg, D. & Tirole, J. Game Theory (MIT Press, 1991).             39.  Kosinski, M. Evaluating large language models in theory of mind
15.  Von Neumann, J. & Morgenstern, O. Theory of Games and                  tasks. Proc. Natl Acad. Sci. USA 121, e2405460121 (2024).
    Economic Behavior (Princeton Univ. Press, 1944).                   40. Horton, J. J. Large Language Models as Simulated Economic
16.  Camerer, C. F. Progress in behavioral game theory. J. Econ.               Agents: What Can We Learn from Homo Silicus? (National Bureau
     Perspect. 11, 167–188 (1997).                                             of Economic Research, 2023).
17.  Henrich, J. et al. In search of homo economicus: behavioral           41.  Aher, G. V., Arriaga, R. I. & Kalai, A. T. Using large language models
    experiments in 15 small-scale societies. Am. Econ. Rev. 91,               to simulate multiple humans and replicate human subject
    73–78 (2001).                                                             studies. In International Conference on Machine Learning 337–371
18.  Rousseau, D. M., Sitkin, S. B., Burt, R. S. & Camerer, C. Not so            (PMLR, 2023).
     different after all: a cross-discipline view of trust. Acad. Manag.      42. Dal Bó, P. & Fréchette, G. R. The evolution of cooperation in
     Rev. 23, 393–404 (1998).                                                         infinitely repeated games: experimental evidence. Am. Econ. Rev.
19.  Johnson, T. & Obradovich, N. Measuring an artificial intelligence          101, 411–429 (2011).
    language model’s trust in humans using machine incentives.        43. Nowak, M. A. & Sigmund, K. Evolution of indirect reciprocity.
      J. Phys. Complex. 5, 015003 (2024).                                  Nature 437, 1291–1298 (2005).
20. Achiam, J. et al. GPT-4 technical report. Preprint at                 44. Radford, A. et al. Language models are unsupervised
     https://arxiv.org/abs/2303.08774 (2023).                                multitask learners. OpenAI Blog https://cdn.openai.com/
21.  Owen, G. Game Theory (Emerald Group Publishing, 2013).              better-language-models/language_models_are_unsupervised_
22.  Robinson, D. & Goforth, D. The Topology of the 2 × 2 Games: A New        multitask_learners.pdf (2019).
     Periodic Table vol. 3 (Psychology Press, 2005).                      45. Nowak, M. A. Five rules for the evolution of cooperation. Science
23.  Jones, G. Are smarter groups more cooperative? Evidence from          314, 1560–1563 (2006).
     prisoner’s dilemma experiments, 1959–2003. J. Econ. Behav. Org.    46. Wei, J. et al. Chain-of-thought prompting elicits reasoning in large
    68, 489–497 (2008).                                             language models. Adv. Neural Inform. Process. Syst. 35, 24824–
24.  Axelrod, R. & Hamilton, W. D. The evolution of cooperation.            24837 (2022).
    Science 211, 1390–1396 (1981).                                         47.  Engle-Warnick, J. & Slonim, R. L. The evolution of strategies in a
25.  Hawkins, R. X. & Goldstone, R. L. The formation of social conventions       repeated trust game. J. Econ. Behav. Org. 55, 553–573 (2004).
     in real-time environments. PLoS ONE 11, e0151670 (2016).          48. Rankin, D. J., Bargum, K. & Kokko, H. The tragedy of the commons
26. Young, H. P. The economics of convention. J. Econ. Perspect. 10,           in evolutionary biology. Trends Ecol. Evol. 22, 643–651 (2007).
    105–122 (1996).                                                   49. Rahwan, I. et al. in Machine Learning and the City: Applications in
27.  Andalman, A. & Kemp, C. Alternation in the Repeated Battle of the         Architecture and Urban Design 143–166 (John Wiley & Sons, 2022).
    Sexes. 9.29, Spring 2004, MIT (MIT Press, 2004).                   50. Schulz, E. & Dayan, P. Computational psychiatry for computers.
28.  Lau, S.-H. P. & Mui, V.-L. Using turn taking to mitigate coordination        iScience 23, 101772 (2020).
    and conflict problems in the repeated battle of the sexes game.      51.  Binz, M. & Schulz, E. Using cognitive psychology to understand
    Theory Decis. 65, 153–183 (2008).                                     GPT-3. Proc. Natl Acad. Sci. USA 120, e2218523120 (2023).

Nature Human Behaviour | Volume 9 | July 2025 | 1380–1390                                                           1389

## Страница 11

Article                                                                                 https://doi.org/10.1038/s41562-025-02172-y

52. Coda-Forno, J. et al. Inducing anxiety in large language models      75.  Rouder, J. N., Speckman, P. L., Sun, D., Morey, R. D. & Iverson, G.
    increases exploration and bias. Preprint at https://arxiv.org/             Bayesian t tests for accepting and rejecting the null hypothesis.
     abs/2304.11111 (2023).                                              Psychon. Bull. Rev. 16, 225–237 (2009).
53. Kojima, T., Gu, S. S., Reid, M., Matsuo, Y. & Iwasawa, Y. Large
    language models are zero-shot reasoners. Adv. Neural Inform.    Acknowledgements
     Process. Syst. 35, 22199–22213 (2022).                              This work was supported by grants from the Max Planck Society
54. Rabinowitz, N. et al. Machine theory of mind. In Proc. 35th             (E.A., L.S., J.C.-F. and E.S.), the Volkswagen Foundation (E.S.),
     International Conference on Machine Learning (eds Dy, J. &          the German Federal Ministry of Education and Research (BMBF):
    Krause, A.) 80:4218–4227 (PMLR, 2018).                         Tübingen AI Center, FKZ: 01IS18039A, and the Deutsche
55.  Cuzzolin, F., Morelli, A., Cirstea, B. & Sahakian, B. J. Knowing me,     Forschungsgemeinschaft (DFG, German Research Foundation) under
    knowing you: theory of mind in AI. Psychol. Med. 50, 1057–1061     Germany’s Excellence Strategy – EXC 2064/1 (grant no. 390727645,
    (2020).                                                                   E.A., S.J.O. and M.B). The funders had no role in the study design,
56. Alon, N., Schulz, L., Dayan, P. & Rosenschein, J. A (dis-)information   data collection and analysis, decision to publish or preparation of the
    theory of revealed and unrevealed preferences. In NeurIPS 2022     manuscript. We thank the International Max Planck Research School
    Workshop on Information-Theoretic Principles in Cognitive Systems   for Intelligent Systems (IMPRS-IS) for supporting E.A.
    https://openreview.net/pdf?id=vcpQW_fGaj5 (2022).
57.  Frith, C. & Frith, U. Theory of mind. Curr. Biol. 15, R644–R645     Author contributions
    (2005).                                                                   E.A., L.S. and E.S. conceived experiments. E.A. conducted the
58.  Vélez, N. & Gweon, H. Learning from other minds: an optimistic      experiments. E.A. and E.S. analysed the results with input from
     critique of reinforcement learning models of social learning.          L.S., J.C.-F. and M.B. E.A., L.S. and E.S. wrote the manuscript with input
     Curr. Opin. Behav. Sci. 38, 110–115 (2021).                        from S.J.O. and M.B. All authors reviewed the manuscript.
59.  Lissek, S. et al. Cooperation and deception recruit different
    subsets of the theory-of-mind network. PLoS ONE 3, e2023 (2008).  Funding
60. Hula, A., Montague, P. R. & Dayan, P. Monte carlo planning method  Open access funding provided by Helmholtz Zentrum München -
    estimates planning horizons during interactive social exchange.    Deutsches Forschungszentrum für Gesundheit und Umwelt (GmbH).
    PLoS Comput. Biol. 11, e1004254 (2015).
61.  Ho, M. K., Saxe, R. & Cushman, F. Planning with theory of mind.    Competing interests
    Trends Cogn. Sci. 26, 959–971 (2022).                         The authors declare no competing interests.
62. Han, T. A., Perret, C. & Powers, S. T. When to (or not to) trust
     intelligent machines: Insights from an evolutionary game theory   Additional information
     analysis of trust in repeated games. Cogn. Syst. Res. 68, 111–124     Supplementary information The online version
     (2021).                                                          contains supplementary material available at
63. Chan, A., Riché, M. & Clifton, J. Towards the scalable evaluation of   https://doi.org/10.1038/s41562-025-02172-y.
    cooperativeness in language models. Preprint at https://arxiv.org/
    abs/2303.13360 (2023).                                    Correspondence and requests for materials should be addressed
64. Lampinen, A. K. et al. Language models, like humans, show content    to Elif Akata.
     effects on reasoning tasks. PNAS Nexus 3, pgae233 (2024).
65.  Crandall, J. W. & Goodrich, M. A. Learning to compete,             Peer review information Nature Human Behaviour thanks
    coordinate, and cooperate in repeated games using                   Elias Fernández Domingos and the other, anonymous, reviewer(s) for
    reinforcement learning. Mach. Learn. 82, 281–314 (2011).              their contribution to the peer review of this work.
66. Goodfellow, I. et al. Generative adversarial networks. Commun.
   ACM 63, 139–144 (2020).                                        Reprints and permissions information is available at
67.  Santos, F. P. Prosocial dynamics in multiagent systems. AI Mag.      www.nature.com/reprints.
    45, 131–138 (2024).
68. Guo, H. et al. Facilitating cooperation in human-agent hybrid        Publisher’s note Springer Nature remains neutral with regard to
    populations through autonomous agents. iScience 26, 108179        jurisdictional claims in published maps and institutional affiliations.
     (2023).
69. Powers, S. T. et al. The stuff we swim in: regulation alone will not    Open Access This article is licensed under a Creative Commons
    lead to justifiable trust in AI. IEEE Technol. Soc. Mag. 42, 95–106      Attribution 4.0 International License, which permits use, sharing,
     (2023).                                                           adaptation, distribution and reproduction in any medium or format,
70.  Palan, S. & Schitter, C. Prolific.ac—a subject pool for online         as long as you give appropriate credit to the original author(s) and the
    experiments. J. Behav. Exp. Finance 17, 22–27 (2018).                source, provide a link to the Creative Commons licence, and indicate
71.  Normann, H.-T. & Wallace, B. The impact of the termination rule          if changes were made. The images or other third party material in this
    on cooperation in a prisoner’s dilemma experiment. Int. J. Game      article are included in the article’s Creative Commons licence, unless
    Theory 41, 707–718 (2012).                                         indicated otherwise in a credit line to the material. If material is not
72.  Charness, G. & Rabin, M. Understanding social preferences with     included in the article’s Creative Commons licence and your intended
    simple tests. Q. J. Econ. 117, 817–869 (2002).                     use is not permitted by statutory regulation or exceeds the permitted
73.  Wong, R. Y.-m & Hong, Y.-y Dynamic influences of culture on              use, you will need to obtain permission directly from the copyright
     cooperation in the prisoner’s dilemma. Psychol. Sci. 16, 429–434 (2005).   holder. To view a copy of this licence, visit http://creativecommons.
74.  Liu, P. et al. Pre-train, prompt, and predict: a systematic              org/licenses/by/4.0/.
    survey of prompting methods in natural language processing.
   ACM Comput. Surv. 55, 1–35 (2023).                  © The Author(s) 2025




Nature Human Behaviour | Volume 9 | July 2025 | 1380–1390                                                         1390

## Страница 12



## Страница 13



## Страница 14


