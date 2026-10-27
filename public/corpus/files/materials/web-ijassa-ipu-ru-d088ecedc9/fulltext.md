---
id: web-ijassa-ipu-ru-d088ecedc9-text
type: material
title: 'Mathematical Models of Informational and Strategic Reflexion: a Survey'
work_id: web-ijassa-ipu-ru-d088ecedc9
source_url: https://ijassa.ipu.ru/index.php/ijassa/article/download/401/339
retrieved_at: '2026-10-27'
conversion: pdf_text_extraction
quality_note: Текст извлечён из PDF с сохранением номеров страниц. Порядок колонок,
  таблицы, формулы и подписи могут быть искажены; рисунки доступны по ссылке на PDF.
  Это текстовая конверсия, не визуально эквивалентный оригинал.
language: original
sha256_text: 85a9504aae2665d42166a3c07d34a27ae27542b7cd16cf57d014214ce576edac
---

> Источник: [https://ijassa.ipu.ru/index.php/ijassa/article/download/401/339](https://ijassa.ipu.ru/index.php/ijassa/article/download/401/339). Текст извлечён из PDF с сохранением номеров страниц. Порядок колонок, таблицы, формулы и подписи могут быть искажены; рисунки доступны по ссылке на PDF. Это текстовая конверсия, не визуально эквивалентный оригинал.

## Страница 1

Advances in Systems Science and Applications (2014) Vol.14 No.3                           254-278


 Mathematical Models of Informational and Strategic
                Reﬂexion: a Survey
                  Novikov D.A. and Chkhartishvili A.G.
                       Institute of Control Sciences, Moscow

Abstract
The paper is dedicated to a survey (in the framework of game theory and theory of
collective behavior) of modern approaches to mathematical modeling of reﬂexive
games and reﬂexive processes in control.
Keywords mathematical models, informational and strategic reﬂexion


1  Introduction.

1.1  Reﬂexion
A fundamental property of human entity lies in the following. In addition to nat-
ural (“objective”) reality, there exists its image in human minds. Furthermore, an
inevitable gap (mismatch) takes place between the latter and the former. In the
sequel, the described image will be called a part of reﬂexive reality. Traditionally,
purposeful study of this phenomenon relates to the term “reﬂexion”. The term
reﬂexion (from Latin reﬂex ‘bent back’; was ﬁrst suggested by J. Locke) means
[1]:
  • principle of human thinking, guiding humans towards comprehension and
perception of ones own forms and premises;
  • subjective consideration of a knowledge, critical analysis of its content and
cognition methods;
  • the activity of self-actualization, revealing the internal structure and speciﬁcs
of spiritual world of a human.
  To elucidate the whole essence of reﬂexion, let us consider the case of a single
subject. He/she possesses certain beliefs about natural reality; however, a sub-
ject may perform reﬂexion (construct images) with respect to these beliefs (thus,
generating new beliefs). Generally, this process is inﬁnite and results in formation
of reﬂexive reality. The reﬂexion of a subject with respect to his/her own beliefs
of reality, principles of his/her activity, etc., is said to be self-reﬂexion or reﬂexion
of the ﬁrst kind. We emphasize that most social research works concentrate on
self-reﬂexion.  In philosophy, self-reﬂexion represents the process of individuals
thinking about beliefs in his/her own mind [2]. Reﬂexion of the second kind takes
place with respect to other subjects (includes beliefs of a subject about possible
beliefs, decision principles and self-reﬂexion of other subjects).

1.2  Reﬂexion and control
Control is an element, a function of organized systems of diﬀerent nature (biolog-
ical, social, technical, etc.), preserving their deﬁnite structure, sustaining their

## Страница 2

Advances in Systems Science and Applications (2014) Vol.14 No.3                              255



mode of activity and implementing the program or goal of their activity; control
is a purposeful impact exerted on a controlled system to ensure its required be-
havior [3].
  Assume there is a control subject (a principal) and a controlled system (control
object-in terminology of technical systems-or a controlled subject). The state of a
controlled system depends on external disturbances, control actions applied by a
principal and possibly on actions performed by the controlled system (if the latter
represents an active subject), see Fig. 1. The principals problem lies in choosing
control actions (see the thick line in Fig.1) to ensure the required behavior of a
controlled system taking into account information on external disturbances (see
the dashed line in Fig.1).
  The so-called input-output structure of a control system (Fig.1) is typical for
control theory dealing with control problems in systems of diﬀerent nature. The
presence of feedback (see the double line in Fig.1) which provides a principal with
information on the state of a controlled system is the key (but not compulsory!)
property of a control system. Some researchers interpret feedback as reﬂexion
(as an image of the controlled systems state in the “mind” of a control subject).
This forms the ﬁrst aspect of interrelation between control and reﬂexion.





                 Fig.1 The structure of a control system


 A series of scientiﬁc directions investigate the interaction and activity of a
control subject and controlled system. Control science (or control theory in the
terminology of corresponding experts) mostly focuses on the interaction between
a control subject and controlled system. Control methodology [4] is the theory
of organizing of control activity, i.e., the activity performed by a control subject.
We emphasize that activity can be mentioned only with respect to active subjects
(e.g., a human being, a group, a collective). In the case of passive (e.g., technical)
systems, the term “functioning” is used instead. In the sequel, we believe that a
control subject and controlled system appear active (otherwise, there is a clear
provision for the opposite). Hence, each of them may perform (at least)

## Страница 3

256     Novikov D.A. and Chkhartishvili A.G.:Mathematical Models of Informational and ...



self-reﬂexion, constructing “images” of the process, organization principles and
results of his/her own activity. This is the second aspect of interrelation between
control and reﬂexion.
  Searching for optimal control (i.e., the most eﬃcient admissible control) re-
quires control subjects ability of predicting controlled systems response to certain
control actions. One of prerequisites is a model of a controlled system. Gener-
ally speaking, a model is an image of a certain system; an analog (a scheme, a
structure or a sign system) of a certain fragment of the natural or social reality,
a “substitute” for the original in cognition process and practice. A model can be
considered as an image of a controlled system in the mind of a control subject.
Modeling (as a process of “reﬂecting”, i.e., constructing this image) can be
viewed as reﬂexion. Furthermore, a controlled system may predict and assess
the activity performed by a control subject. And so, we obtain the third aspect
of interrelation between control and reﬂexion.
  The fourth aspect lies in the following. A control subject or controlled
system performs reﬂexion with respect to external subjects and ob-
jects, phenomena or processes, their properties and laws of activity/functioning.
For instance, the matter concerns an external environment (for a control subjec-
t), an external environment and/or other elements of a controlled system (for a
ﬁxed element of a controlled system). Indeed, suppose that a controlled system
includes several active agents; each of them may perform reﬂexion with respect
to the others. Exactly this aspect-mutual reﬂexion of controlled subjects-is dis-
cussed in game-theoretical models.
  Of crucial importance here is that the process and/or result of reﬂexion
can be controlled, i.e., can represent a component of controlled systems activity,
being modiﬁed by a control subject for a deﬁnite goal. Precisely this relationship
between control and reﬂexion enables informational control and reﬂexive control,
considered below.

1.3  Game theory

Formal (mathematical) models of human behavior have been constructed and
studied for over last 150 years. Gradually, these models ﬁnd wider application
in control theory, economics, psychology, sociology, etc., as well as in practical
problems. In the sequel, we will understand a game as the interaction of subjects
with noncoinciding interests. Still, an alternative interpretation treats a game as
a type of unproductive activity whose motive consists not in the corresponding
results, but in the process of activity itself (see [2, 5], where the notion of a game
is assigned a broader sense).
  Game theory represents a branch of applied mathematics, which analyzes mod-
els of decision making in the conditions of noncoinciding interests of opponents
(players); each player strives for inﬂuencing the situation in his/her favor [6-7].

## Страница 4

Advances in Systems Science and Applications (2014) Vol.14 No.3                              257



In what follows, a decision-maker (a player) is called an agent. The major task of
game theory is describing the interaction among several agents with noncoincid-
ing interests, where the results of agents activity (payoﬀ, utility, etc.) generally
depend on actions of all agents. Such description yields a forecast of a rational
and “stable” outcome of the game-the so-called game solution (equilibrium).
  Describing a game means specifying the following parameters:
   - a set of agents;
   - preferences of agents (relationships between payoﬀs and actions). Each agent
is supposed to strive for maxi-mizing his/her payoﬀ(and so, the behavior of each
agent appears purposeful);
   - a set of feasible actions of agents;
   - awareness of agents (information on essential parameters, being available to
agents at the moment of their choice);
   - sequence of moves (the sequence of obtaining information and choosing ac-
tions).
  The above parameters deﬁne a game; unfortunately, they are insuﬃcient for
forecasting its outcome, i.e., a solution (or an equilibrium) of the game-the set of
rational and stable actions of agents. Nowadays, game theory suggests no univer-
sal concept of equilibria. By adopting diﬀerent assumptions regarding principles
of agents decision making, one can construct diﬀerent solutions. Thus, designing
an equilibrium concept forms a basic problem for any game-theoretic research;
this book does not represent an exception, as well. Reﬂexive games are deﬁned as
a direct interaction among agents, where they make decisions based on hierarchies
of their beliefs. In other words, awareness of agents is extremely important.

1.4  The role of awareness. Common knowledge

In game theory, psychology, distributed systems and other ﬁelds of science (see
the overviews in [8-9]), one should consider not only agents beliefs about essential
parameters, but also their beliefs about the beliefs of other agents, etc. The set
of such beliefs is called the hierarchy of beliefs. We will model it using the tree
of awareness structure of a reﬂexive game (see below).  In other words, situa-
tions of interactive decision making (modeled in game theory) require that each
agent “forecasts” opponents behavior prior to his/her choice. And so, each agent
should possess deﬁnite beliefs about the view of the game by his/her opponents.
On the other hand, opponents should do the same. Consequently, the uncertainty
regarding the game to-be-played generates an inﬁnite hierarchy of beliefs of game
participants.
 A special case of awareness concerns common knowledge when beliefs of all
orders coincide. A rigorous deﬁnition of common knowledge was introduced in
[10]. Notably, common knowledge is a fact with the following properties:
  1 ) all agents know it;

## Страница 5

258     Novikov D.A. and Chkhartishvili A.G.:Mathematical Models of Informational and ...



  2 ) all agents know 1;
  3 ) all agents know 2 and so on-ad inﬁnitum.
  The formal model of common knowledge was originally proposed in [11]. Later
on, many investigators reﬁned and redeveloped it - see surveys and references in
[1,12-18].
  The present paper is almost completely dedicated to models of agents aware-
ness in game theory (viz., hierarchies of beliefs and common knowledge). Thus,
we give several references demonstrating the role of common knowledge in diﬀer-
ent ﬁelds of science-philosophy, psychology, etc. (see also the overview in [19]). In
philosophy, common knowledge has been studied in convention analysis [10, 20].
In psychology, one would face the notion of discourse (from Latin discursus ‘argu-
ment’). It means human thinking in words, being mediated by past experience;
discourse acts as the process of connected logical reasoning, where a next idea
stems from the previous one. The importance of common knowledge in discourse
comprehension has been explored in [19, 21]. Mutual awareness of agents turns
out signiﬁcant in distributed computer systems [13, 15, 22], artiﬁcial intelligence
[23-24] and other ﬁelds.
  Game theory often assumes that all1 parameters of a game are a common
knowledge. Such assumption corresponds to the objective description of a game
and enables addressing the Nash equilibrium2 concept [25] as a forecasted outcome
of a noncooperative game (a game, where agents do not agree about coalitions,
data exchange, joint actions, redistribution of payoﬀs, etc.). Thus, the assump-
tion regarding common knowledge allows claiming that all agents know which
game they play and that their beliefs about the game coincide.
  Generally, each agent may possess individual beliefs about parameters of a
game. And so, each belief corresponds to a subjective description of the game [6]
(see also modern models of awareness in [26-29]). Consequently, agents partic-
ipate in the game, having no objective views of it or interpreting this game in
diﬀerent ways (rules, goals, the roles and awareness of opponents, etc.). Unfor-
tunately, still no universal approaches have been proposed for equilibria design
under insuﬃcient common knowledge.
  On the other part, within the “reﬂexive tradition” of the humanities, the sur-
rounding world of each agent includes the rest agents; moreover, beliefs about
other agents get reﬂected during the process of reﬂexion (in particular, variations
of beliefs may result from nonidentical awareness).  However, researchers have
not succeeded in deriving constructive formal outcomes in this ﬁeld to date.

1If the initial model incorporates uncertain factors, speciﬁc procedures of uncertainty elimination
 are involved to obtain a deterministic model.
2An agents action vector is a Nash equilibrium if none of them beneﬁts by unilateral devia-
 tion from it (provided that the rest agents choose the corresponding components of the Nash
 equilibrium). A more rigorous deﬁnition could be found below.

## Страница 6

Advances in Systems Science and Applications (2014) Vol.14 No.3                              259



  Hence, an urgent problem lies in designing and analyzing mathematical models
of games, where agents awareness is not a common knowledge and agents make
decisions based on hierarchies of their beliefs. Such class of games is called re-
ﬂexive games [30-32]. We will provide a formal deﬁnition later.
  The term “reﬂexive games” was introduced by V. Lefebvre in 1965, see [33].
However, the cited work and his other publications [34-37] represented qualitative
discussions of reﬂexion eﬀects in interaction among subjects (actually, no general
concept of solution was suggested for this class of games). Similar remarks apply
to [38-41], where a series of special cases of players awareness was studied. The
monograph [32] concentrated on systematical treatment of reﬂexive games and
an endeavor of constructing a uniform equilibrium concept for these games.
  According to game theory and reﬂexive models of decision making, it seems
reasonable to distinguish between strategic reﬂexion and informational reﬂexion.
Informational reﬂexion is the process and result of agents thinking about (a) the
values of uncertain parameters and (b) what his/her opponents (other agents)
know about these values. Here the “game” component actually disappears-an
agent makes no decisions. Strategic reﬂexion is the process and result of agents
thinking about which decision making principles his/her opponents (other agents)
employ under the awareness assigned by him/her via informational reﬂexion.
Therefore, informational reﬂexion often relates to insuﬃcient mutual awareness,
and its result serves for decision making (including informational reﬂexion). S-
trategic reﬂexion takes place even in the case of complete awareness, precessing
agents choice of an action. In other words, informational and strategic reﬂexion
can be studied independently, but the both occur in the case of incomplete or
insuﬃcient awareness.

1.5  General approaches to the description of information and strategic reﬂexion

According to [12, 42-43], there are two diﬀerent approaches to the description of
awareness structures, viz., syntactic and semantic ones.  Recall that syntactics
means syntax of sign systems, i.e., the structure of sign combinations and rules of
their formation, “translation”and interpretation irrespective of their values and
functions of sign systems. Semantics studies sign systems as tools of meaning
expression; here the basic subject lies in interpretations of signs and sign combi-
nations. Foundations of these approaches were laid in mathematical logic [44-45].
  Within the framework of syntactic approach, an hierarchy of beliefs is described
explicitly. Suppose that beliefs are deﬁned by a probability distribution. Then hi-
erarchies of beliefs (at a certain level) correspond to distributions on the product
of the set of states of nature and distributions reﬂecting beliefs of preceding levels
[46]. An alternative is using “logic formulas”-rules of transforming elements of an
initial set based on logic operations and operators such as “player i believes the
probability of event . . . is not smaller than α” [43, 47]. A knowledge is modeled

## Страница 7

260     Novikov D.A. and Chkhartishvili A.G.:Mathematical Models of Informational and ...



by propositions (formulas) constructed according to certain syntactic rules.
  According to semantic approach, beliefs of agents are deﬁned by probability
distributions on the set of states of nature. Hierarchies of beliefs get generated
only by virtue of these distributions. In the elementary (deterministic) case, a
knowledge represents the set Θ of feasible values of an uncertain parameter and
diﬀerent partitions {Pi}i∈N of this set. An element of the partition Pi containing
θ ∈Θ forms the knowledge of agent i, namely, the set of values of the uncertain
parameter, being indistinguishable for this agent under a known fact θ [11-12].
The correspondence (or “equivalence”) between syntactic and semantic approach-
es was established in [18, 42] and other works. We also cite experimental research
on hierarchies of beliefs [48-50]; see the surveys in [51-52].
  The above overview points at two existing “extremes”. The ﬁrst one lies in
common knowledge. Here J. Harsanyis merits [53] are (a) reducing all information
on an agent (determining the latters behavior) to a single characteristic-agent‘s
type-and (b) constructing a Bayes-Nash equilibrium by hypothesizing that the
probability distribution of types is a common knowledge. The second “extreme”
relates to inﬁnite hierarchy of compatible or incompatible beliefs. (For an exam-
ple, see the structure discussed in [46]. On the one hand, it describes all possible
Bayesian games and all possible hierarchies of beliefs. On the other hand, it
appears very general and, consequently, very cumbersome, thus interfering with
constructive statement and solution of speciﬁc problems).
  Most research on awareness seeks to answer the following question. When
does an hierarchy of agents beliefs describe a common knowledge and/or reﬂect
adequately their awareness?  [19, 54]. The dependence of game solutions on a
ﬁnite hierarchy of compatible or incompatible beliefs of agents (the whole range
between the above “extremes”) has been studied in [1, 32].

1.6  Theory of collective behavior

Traditionally, game-theoretic models and/or models of collective decision making
utilize one of two assumptions regarding mutual awareness of agents [51]. The
ﬁrst one implies that all essential information and decision principles adopted by
agents are known to all agents, all agents know this fact and so on (such rea-
soning could be inﬁnite). Actually, this is the concept of a common knowledge,
which serves, e.g., in constructing a Nash equilibrium. The second assumption
claims that each agent (according to his/her awareness) follows a certain proce-
dure of individual decision making and has “almost no idea” of the knowledge
and behavior of the rest agents. The ﬁrst approach appears canonical in game
theory, while the second approach has become popular in models of collective
behavior. Yet, a variety of intermediate situations exists between these “extreme
cases”. Imagine that informational reﬂexion takes no place-a common knowledge
on essential external parameters is observed. Let an agent have performed an

## Страница 8

Advances in Systems Science and Applications (2014) Vol.14 No.3                              261



act of strategic reﬂexion, i.e., an attempt to predict the behavior of other agents
(not their awareness but decision principles). This agent chooses his/her actions
using the forecast (we believe he/she possesses reﬂexion rank 1). Another agent
(with reﬂexion rank 2) possibly knows about the existence of agents having re-
ﬂexion rank 1. Consequently, such agent endeavors to predict their behavior, as
well. Again, this line of reasoning could be inﬁnite. A series of questions arises
immediately. How does the behavior of a collective of agents depend on their
distribution by reﬂexion rank (the number of agents with a speciﬁc rank in a
collective)? Suppose that the shares of reﬂexing agents can be controlled. What
are the optimal values of these shares? Here optimality is “measured” in terms
of some criterion deﬁned on the set of agents actions.
   Classic game-theoretic models proceed from the following. In a normal form
game, agents choose Nash equilibrium actions.  However, investigations in the
ﬁeld of experimental economics indicate this not always the case (e.g., see [55]
and the overview [56]). The divergence between actual behavior and theoretical
expectations has several explanations:
   - limited cognitive capabilities of agents [57] (decentralized evaluation of a Nash
equilibrium represents a cumbersome computational problem [58]). Furthermore,
sometimes Nash equilibria provide no adequate description to the real behavior
of agents in experimental single stage games (agents have not enough time for
“correcting” their wrong beliefs about essential parameters of a game [59]). For
instance, D. Bernheims concept of rationalizable strategies requires unlimited ra-
tionality from agents (their high cognitive capabilities);
   - agents full conﬁdence in that all the opponents would evaluate a Nash equi-
librium;
   - incomplete awareness;
   - the presence of several equilibria.
  Therefore, there exist at least two foundations (“theoretical” and “experimen-
tal” ones) for considering models of collective behavior of agents with diﬀerent
reﬂexion ranks.
  In contrast to game theory, the theory of collective behavior analyzes the be-
havior dynamics of rational agents under rather weak assumptions regarding their
awareness. For instance, far from always agents need a common knowledge about
the set of agents, sets of feasible actions and goal functions of opponents.  Al-
ternatively, agents may not predict the behavior of their opponents (as in game
theory). Moreover, making decisions, agents may “know nothing about the exis-
tence of” speciﬁc agents or possess aggregated information about them.
  The most widespread model of collective behavior dynamics is the model of
indicator behavior (see references in [51]). The essence of the model consists in
the following. Suppose that at instant t each agent observes the actions of all

## Страница 9

262     Novikov D.A. and Chkhartishvili A.G.:Mathematical Models of Informational and ...


agents {xt−1i  }i∈N that have been chosen at the preceding instant t −1, t = 1, 2,
. . . The initial action vector x0 = (x01, . . . , x0n) is assumed known.
  Each agent can evaluate his/her current goal-an action maximizing his/her goal
function provided that at a current instant all agents choose the same actions as
at the previous instant:

             wi({xt−1−i }) = arg max Fi(y, xt−1−1 ), t = 1, 2, . . . , i ∈N            (1)
                               y∈ℜ1

  According to the hypothesis of indicator behavior, at each instant an agent
makes a “step” from his/her previous action to the current goal:

                xti = xt−1i  + γti[wi(xt−1i   ) −xt−1i    ], i ∈N, t = 1, 2, . . .             (2)

where γti ∈[0; 1] designate “the values of steps”. For convenience, such collective
behavior can be called “optimization behavior” (thus, we emphasize its diﬀerence
from play behavior). The approaches adopted by the theory of collective behavior
and game theory agree in the following sense. The both study the behavior of
rational agents, while game equilibria generally represent equilibria for dynamic
procedures of collective behavior. For instance, the Nash equilibrium speciﬁes an
equilibrium for the dynamics (2) of collective behavior.
  To make the picture complete, note one more aspect, as well. The theory of
collective behavior proposes another approach (going beyond the scope of this
book), namely, evolutionary game theory [60]. This science studies the behav-
ior of large homogeneous groups (populations) of individuals in typical repeated
conﬂicts; each strategy is applied by a set of players, whereas a corresponding
goal function characterizes the success of speciﬁc strategies (instead of speciﬁc
participants of such interaction).
  Thus, game theory often employs maximal assumptions regarding agents aware-
ness (e.g., the hypothesis of existing common knowledge), while the theory of
collective behavior involves the minimal assumptions. The intermediate position
belongs to reﬂexive models. And so, let us discuss the role of (informational and
strategic) reﬂexion in decision making by agents.


2  Mathematical models of informational and strategic reﬂexion

2.1  Reﬂexion in game theory and models of collective behavior: the structure of problem
    domain
Game theory and the theory of collective behavior analyze interaction models for
rational agents. Approaches and results of these theories can be considered at
three interconnected epistemological levels (that correspond to diﬀerent functions
of modeling [2])-see Fig.2 [1]:
  -phenomenological level, where a model aims at describing and/or explaining

## Страница 10

Advances in Systems Science and Applications (2014) Vol.14 No.3                              263





Fig.2 Descriptive and normative models of informational and strategic reﬂexion


Table 1 Modeling of informational and strategic reﬂexion: a comparison of ap-
proaches Parameter Informational reﬂexion Strategic reﬂexion

      Parameter     Informational reﬂexion  Strategic reﬂexion
   Model of a “game”     Awareness structure      Reﬂexive structure
       Equilibrium       Information equilibrium   Reﬂexive equilibrium
         Control           Information control       Reﬂexive control



the behavior of a system (a collective of agents);
   - predictive level (the aim is forecasting the system behavior);
   - normative level (the aim is ensuring a required system behavior).
    In game theory, a common scheme consists in (1) describing the “model of
a game” (phenomenological level), (2) choosing an equilibrium concept deﬁning
the stable outcome of a game (predictive level) and (3) stating a certain control
problem-ﬁnd values of controlled “game parameters” implementing a required e-
quilibrium (normative level). An interested reader would ﬁnd the corresponding
illustration in Fig.2.
   Taking into account informational reﬂexion leads to the necessity of construct-
ing and analyzing awareness structures. This enables deﬁning an informational
equilibrium, as well as posing and solving informational control problems-see
Fig.2. Taking into account strategic reﬂexion generates a similar chain marked
by heavy lines in Fig.2: “models of strategic reﬂexion” - “reﬂexive structure” -

## Страница 11

264     Novikov D.A. and Chkhartishvili A.G.:Mathematical Models of Informational and ...



“reﬂexive equilibrium” - “reﬂexive control”.
 A comparison of approaches to modeling of informational and strategic reﬂex-
ion is given by Table 1.


2.2  Awareness structure and informational equilibrium
Consider the set of agents: N = {1, 2, ..., n}. Denote by θ ∈Θ the uncertain
parameter (we believe that the set Θ is a common knowledge for all agents). The
awareness structure Ii of agent i includes the following elements.  First, the
belief of agent i about the parameter θ ; denote it by θi, θi ∈Θ. Second, the beliefs
of agent i about the beliefs of the other agents about the parameter θ; denote
them by θij, θij ∈Θ, j ∈N. Third, the beliefs of agent i about the beliefs of agent
j about the belief of agent k; denote them by θijk, θijk ∈Θ, j, k ∈N. And so
on (evidently, this reasoning is generally inﬁnite). In the sequel, we employ the
term “awareness structure”, which is a synonym of “informational structure”
and “hierarchy of beliefs”.  Therefore, the awareness structure Ii of agent i is
speciﬁed by the set of values θij1...jl, where l runs over the set of nonnegative
integer numbers, j1, ..., jl ∈N, while θi1...il ∈Θ.
  The awareness structure I of the whole game is deﬁned in a similar manner;
in particular, the set of the values θi1...il is employed, with l running over the set
of nonnegative integer numbers, j1, . . . , jl ∈N, and θij1...jl ∈Θ. We emphasize
that the agents are not aware of the whole structure I; each of them knows
only a substructure Ii. Thus, an awareness structure is an inﬁnite n-tree; the
corresponding nodes of the tree describe speciﬁc awareness of real agents from
the set N, and also phantom agents (complex reﬂexions of real agents in the mind
of their opponents).
 A reﬂexive game ΓI is a game deﬁned by the following tuple:

                       ΓI = {N, (Xi)i∈N, fi(·)i∈N, I}                       (3)

  Where N stands for a set of real agents, Xi means a set of feasible actions
of agent i, fi(·) : Θ × X′ →ℜ1 is his/her goal function (i ∈N); Θ indicates a
set of feasible values of the uncertain parameter and I designates the awareness
structure.
  Therefore, a reﬂexive game generalizes the notion of a normal-form game (det
-ermined by the tuple {N, (Xi)i∈N, fi(·)i∈N, I} ) to the case when agents’ awaren
-ess is reﬂected by an hierarchy of their beliefs (i.e., the awareness structure I).
Within the framework of the accepted deﬁnition, a “classical” normal-form game
is a special case of a reﬂexive game (a game under a common knowledge among
the agents).  Consider the “extreme” case when the state of nature appears a
common knowledge; for a reﬂexive game, the solution concept (proposed in this
book based on an informational equilibrium, see below) turns out equivalent to

## Страница 12

Advances in Systems Science and Applications (2014) Vol.14 No.3                              265



the Nash equilibrium concept.
  To proceed and formulate a series of deﬁnitions and properties, we introduce
the following notation: ∑
    + stands for a ∑set of ﬁnite sequences of indexes belonging to N;
 ∑is the sum of  + and the empty sequence;
   |σ| indicates the number of indexes in the sequence σ ∈∑(for the empty
sequence,  it equals zero); this parameter is known as the length of an index
sequence.
  Imagine θi represents the belief of agent i about the uncertain parameter, while
θii means the belief of agent i about his/her own belief. It seems then natural that
θii = θi. In other words, agent i is well-informed on his/her own beliefs. Moreover,
he/she assumes that the rest agents possess the same property. Formally, this
means that the axiom of self-awareness is accepted: ∀i ∈N, ∀τ, σ ∈N  : θτiiσ =
θtiσ. In particular, being aware of θτ for all τ ∈∑+ such that |τ| = γ, an agent
may explicitly evaluate θτ for all τ ∈∑+ with |τ| < γ.
  In addition to the awareness structures Ii(i ∈N), one may also analyze the
awareness structures Iij  (i.e., the awareness of agent j according to the belief
of agent i), Iijk, and so on.  Let us identify the awareness structure with the
agent being characterized by it. In this case, one may claim that n real agents
(i −agents, where i ∈N) having the awareness structures Ii also play with
phantom agents (τ −agents, where τ ∈∑ + , |τ| ≥2) having the awareness
structures Iτ = {θτσ}, σ ∈∑.  It should be emphasized that phantom agents
exist merely in the minds of real agents;  still, they have an impact on their
actions; these aspects will be discussed below.
  Assume that the awareness structure I of a game is given; this means that the
awareness structures are also deﬁned for all (real and phantom) agents. Within
the framework of the hypothesis of rational behavior, the choice of an action
xτ performed by a τ −agent is described by his/her awareness structure Iτ.
Hence, the mentioned structure being available, one may model agents reasoning
and evaluate his/her action. On the other hand, while choosing his/her action,
the agent models actions of the rest agents (i.e., performs reﬂexion). Therefore,
estimating the game outcome, we should account for the actions of real and
phantom agents.
 A set of actions x∗τ, τ ∈∑+ , is called an informational equilibrium, if the
following conditions are met:
   1. the awareness structure I possesses ﬁnite complexity v [30];
   2. ∀λ, µ ∈Σ : Iλi = Iµi ⇒xλi∗= xµi∗;
   3. ∀i ∈N, ∀σ ∈Σ:


           x∗σi ∈Arg max fi(θσi, x∗σi1, ..., x∗σi,i−1, xi, x∗σi,i+1..., x∗σi,n)          (4)
                       xi∈Xi

## Страница 13

266     Novikov D.A. and Chkhartishvili A.G.:Mathematical Models of Informational and ...



  Here Condition 1 claims that a reﬂexive game involves a ﬁnite number of real
and phantom agents (what happens when this assumption is rejected, is discussed
in [61]). Condition 2 expresses the requirement that the agents with an identical
awareness choose identical actions. Finally, Condition 3 reﬂects rational behav-
ior of agentsCeach agent strives for maximizing the individual goal function via
a proper choice of his/her action. For this, an agent substitutes actions of the
opponents into his/her goal function; the actions are rational in the view of the
considered agent (according to the available beliefs of the rest agents).
  The “classical” concept of a Nash equilibrium is remarkable for its self-sustained
nature. Notably, assume that a repeated game takes place and all agents (except
agent i) choose the same equilibrium actions. Then agent i beneﬁts nothing by
deviating from his/her equilibrium action; evidently, this feature is directly re-
lated to the following. Beliefs of all agents about reality are adequate, i.e., the
state of nature appears a common knowledge. Generally speaking, the situation
may change in the case of an informational equilibrium. Indeed, after a single
play of the game some agents (or even all of them) may observe an unexpected
outcome due to an inconsistent belief about the state of nature (or due to an
inadequate awareness of opponents beliefs). Anyway, the self-sustained nature of
the equilibrium is violated; actions of agents may change as the game is repeated.
Informational equilibrium is stable [62], if each agent (real or phantom) observes
exactly the expected result (in this case agents awareness does not change). Some
models of awareness dynamics are considered in [63].


2.3  Informational control

The model of informational control (purposeful impact on agents awareness
to form informational structure which leads to the desired informational equi-
librium) includes an agent (or several agents) and a principal.  Each agent is
characterized by the cycle “awareness of the agent →action of the agent →
result observed by the agent →awareness of the agent”.  Generally speaking,
these components vary for diﬀerent agents. At the same time, the cycle could be
viewed common for the whole controlled subsystem (i.e., for the complete set of
agents). This feature is indicated by the word “Agent(s)” in Fig.3. The interac-
tion between an agent (agents) and the principal is characterized by the following
elements:
   - an informational impact of the principal, which forms a certain awareness
of an agent (agents).  It seems possible to study the principals inﬂuence on the
outcome observed by an agent (agents), see the chain “principal →observed out-
come” in Fig.3;
   - an actual outcome of the agents action (or agents actions), which has an
impact on the preferences of the principal.

## Страница 14

Advances in Systems Science and Applications (2014) Vol.14 No.3                              267





                 Fig.3 The model of informational control


  Implementing informational control, the principal (as usual) strives to max-
imize his/her utility. Assume the principal can form any awareness structure
from a certain feasible set. The problem of informational control may be posed
as follows. Find an awareness structure from the set of feasible structures, which
maximizes the principals utility in a corresponding informational equilibrium
(perhaps, taking into account the principals costs to form such an awareness
structure).
  Deﬁne the following objects: the set ΨX(I) ⊆X′ of the action vectors of real
agents, representing equilibria under the awareness structure I; and the set ΨI(x)
of awareness structures, making the action vector x of real agents an equilibrium
(solution to the inverse problem).
  Let us give a formal statement to the control problem. Assume that the goal
function of the principal, Φ (x, I), is deﬁned on a set of real agents actions and
awareness structures. Next, suppose that the principal can form any awareness
structure from a certain set ℑ′. Under the awareness structure I ∈ℑ′, the action
vector of real agents is an element of the set of equilibrium vectors ΦX (I). We
emphasize that the set ΨX(I) may be empty; in the case of a missed equilibri-
um, the principal cannot predict the outcome of a game. To avoid this problem,
introduce the set of feasible structures leading to the non-empty set of equilibria:
ℑ= {I ∈ℑ′|ΨX (I) ̸= ∅}.
  Imagine that, under the speciﬁed awareness structure I ∈ℑ, the set of equi-
librium vectors ΨX(I) includes (at least) two elements. As a rule, one of the
following assumptions is then adopted [3]:
  1) the hypothesis of benevolence(HB), which implies that agents always choose

## Страница 15

268     Novikov D.A. and Chkhartishvili A.G.:Mathematical Models of Informational and ...



the equilibrium desired by the principal;
  2) the principle of maximal guaranteed result(PMGR), i.e., the principal ex-
pects the worst-case equilibrium of the game.
  Using either the HB or the PMGR, one has the problem of informational con-
trol in two settings as follows:

                    max  Φ(x, I) −−→I∈ℑmax;                         (5)                          X∈Ψx(I)

                       min  Φ(x, I) −−→I∈ℑmax;                         (6)                          X∈Ψx(I)

   Naturally, if for any I ∈ℑthe set ΨX(I) consists of a single element, formulas
(1) and (2) coincide.
  In the sequel, the problem (5) (alternatively, (6)) is called the informational
control problem in the form of the goal function.
  Now, provide an alternative formulation to the problem of informational con-
trol (being independent from the goal function of the principal). Assume that the
principal wants agents choose an action vector x ∈X′. The question arises, “For
which vectors and by which awareness structure I would the principal achieve
this?” In other words, the second possible formulation of the informational con-
trol problem is to ﬁnd the following components. First, the attainability set, viz,
the one composed of the vectors x ∈X′ such that for each of them the set of
awareness structures ΨI(x) ∩ℑ

                                    is nonempty                                (7)

or
                        consists of a single element.                       (8)

  Second, the corresponding feasible awareness structures I ∈ΨI(x)∩ℑ, meeting
the above property for each vector x. Note that the condition (7) “corresponds”
to the HB, while the one of (8) “corresponds” to the PMGR. The problem (7)
(alternatively, (8)) will be referred to as the problem of informational control in
the form of the attainability set. Once again, we underline that the second for-
mulation of the problem does not depend on the goal function of the principal.
It merely reﬂects the possibility of bringing the system to a certain state by in-
formational control.
  Methods and examples of problems (5)-(8) solution are described in [1, 64].
   Particular case is the concordant informational control; here agents are in-
formed about the fact of control implementation by a principal, and still they
trust messages of the principal.  Evidently, implementing such control requires
speciﬁc conditions [65].

## Страница 16

Advances in Systems Science and Applications (2014) Vol.14 No.3                              269



2.4  Reﬂexion structure and reﬂexion equilibrium
Publications on strategic reﬂexion models, the so-called level k models, appeared
in the mid-1990s [66-68]. In 2004, they were generalized by the cognitive hierar-
chies model(CHM) [48].
  The survey [56] identiﬁed four basic approaches to the construction and study
of strategic reﬂexion theoretical models within the framework of game theory
and experimental economics (see also experimental results in [48, 69-72] ). We
cite fundamental works only (references to later research can be found in [56]).
Notably, the four basic approaches are:
   - the level k approach [73];
   - the approach of quantal best response equilibria [74];
   - the quantal level k approach [50];
   - the approach of cognitive hierarchies [48].
   All of this approaches are mainly generalized by the following model. The
hypothesis of indicator behavior implies that choosing his/her actions by the
procedure (2), an agent does not ponder over that the rest agents act similarly.
Otherwise, an agent would perform reﬂexion and (making decisions at a time
instant ) seek for the best response to the actions of the rest agents, forecasted
according to (2). In this case, the state of goal is no more deﬁned by formula (1).
Instead, we obtain
                         wi(xt−i) = arg max Fi(y, xt−i)                       (9)
                                       y∈ℜ1
Here xt−i satisﬁes (1). We will believe that a reﬂexing agent of rank 1 considers
the rest agents as non-reﬂexing.
   Similarly, it is possible to consider agents with higher reﬂexion ranks (the term
“an agent of reﬂexion rank k” possesses many synonyms (a step k player, a level
k player, a k-level player, a smart k-player, etc C see [75-76] and the survey [51]).
For this, deﬁne ℵ= {N0, N1, . . . , Nm} as a partition of the agents set N, where Ni
is the set of agents with reﬂexion rank i, i = 0, m , and m speciﬁes the maximal
              ∑m
reﬂexion rank, ni = |Ni| , i ∈N,    ni = n. We will call ℵa reﬂexive partition
                                   i=0
[77].
  Suppose that an agent with reﬂexion rank k exactly knows the sets (shares)
of the agents with ranks k′ < k −1. Moreover, assume that he/she considers
all agents as having reﬂexion rank k −1.  In other words, this agent does not
concede the existence of agents with the same (or even higher) reﬂexion rank
than his/her rank. In addition, the agent in question may incorrectly estimate
the sets of agents possessing reﬂexion ranks k −1, k, ....
  Consider a given initial action vector of the agents. Let us study the following
dynamic reﬂexive model of their decision making. The corresponding expressions
for the one-step “game” model represent a special case, when decisions are made

## Страница 17

270     Novikov D.A. and Chkhartishvili A.G.:Mathematical Models of Informational and ...


one-time under γ1i ≡1, i ∈N.
Reﬂexion rank 0
Take agents with reﬂexion rank 0 (belonging to the set N0. Assume that they
choose actions, thinking that the rest agents act similarly to the previous period.
Formula (1) yields
              xti = xt−1i  + γti[wi(xt−1−i ) −xt−1i    ], i ∈N0, t =  1, 2, . . .           (10)

  n the case N0 = N (no reﬂexing agents), all agents observe the real trajectory
(x0, . . . , xt, . . . ) of the agents action vectors, see (10).
Reﬂexion rank 1

                   x1tj = x1t−1j  + γtj[wj(xt−j) −x1t−1j    ], j ∈N1               (11)
  For agent j ∈N1, the forecasted trajectory is deﬁned by (x0, . . . , (x1tj, xt−j), . . .);
however, actually the trajectory (x0, . . . , (x1tj∈N1, xti∈N0), . . .) is realized.  This
means that the real trajectory may diﬀer from the forecasted trajectories of agents
with reﬂexion ranks 0 and 1 [1].
Reﬂexion rank 2
Suppose that each agent j with reﬂexion rank 2 (j ∈N2) exactly knows the set
N0; moreover, he/she considers all agents from the set N1 ∪N2\{j} as having
reﬂexion rank 1. In the general case of several agents with reﬂexion rank 2, this
agent wrongly assigns rank 1 to them. Consequently, he/she can “forecast” the
behavior of the opponents. Therefore, his/her choice is the best response to the
expected outcome:
           x2tj = x2t−1j  + γtj[wj(xt−1i∈N0, x1tl∈N1∪N2\{j}) −x2t−1j    ], j ∈N2       (12)
  For agent j ∈N2, the forecasted trajectory is given by (x0, . . . , (x2tj, x1tl∈N1∪N2\{j},
xti∈N0), . . .), while actually the trajectory (x0, . . . , (x2tj∈N2, x1tl∈N1, xtl∈N0), . . .) is
realized.
Reﬂexion rank k(k ≤m)
The behavior of agents with reﬂexion rank k is described by analogy to the three
cases above (reﬂexion ranks 0, 1 and 2). This is done on the basis of the following
awareness structure of the agents. For agent j with reﬂexion rank k, denote by
ℵjk the subjective reﬂexive partition (the beliefs of the agent about the partitions
of all agents):

 ℵjk = (N0, N1, . . . , Nk−2, Nk−1 ∪Nk ∪. . . ∪Nm\{j} , {j}, ∅, . . . , ∅), j ∈Nk  (13)        |                    {z                    }     |  {z  }
                                 k                       m−k−1
  An agent with reﬂexion rank chooses actions by the procedure
xktj = xkt−1j  +γtj[wj(xtl∈N0, x1tl∈N1, . . . , x[k−1]tl∈Nk−1∪Nk∪...∪Nm\{j})−xkt−1j    ], j ∈Nk
                                                                           (14)

## Страница 18

Advances in Systems Science and Applications (2014) Vol.14 No.3                              271



  In the “static” case, this agent selects the action

xk∗j (ℵjk) = arg max Fj(y, x1l∈N0, x11l∈N1, . . . , x[k−1]1l∈Nk−1∪Nk∪...∪Nm\{j}), j ∈Nk.               y∈ℜ1
                                                                           (15)
  Therefore, a reﬂexive structure represents the set of subjective reﬂexive
partitions of all agents. Assume that agents beliefs about the reﬂexion ranks of
each other satisfy (13). Then the awareness structure is uniquely deﬁned by the
reﬂexive partition ℵ.
  The vector of agents actions

                       x∗(ℵ) = {xk∗j (ℵjk)}j∈Nk, k=0,m                     (16)

   is said to be a reﬂexive equilibrium of the game Γℵ= {N, Fi(·)i∈N, ℵ} [51,
77]. In other words, a reﬂexive equilibrium forms the set of agents actions be-
ing the best responses to opponents actions (according to an existing reﬂexive
structure). By virtue of the assumptions regarding the existence and uniqueness
of best responses, a reﬂexive equilibrium always exists. Furthermore, a reﬂexive
equilibrium seems rather exotic.  Generally, the actions of agents are not the
best responses to opponents actions. Detailed classiﬁcation of strategic reﬂexion
models is given in [51, 77].
  The described general model of reﬂexive collective behavior would hardly lead
to general analytical derivations. Nevertheless, it may provide a basis for devel-
oping particular analytical models or general simulation models (e.g., according
to the classiﬁcation suggested in [78]).  Such models serve for describing and
forecasting collective behavior (human beings, mobile robots, program agents) in
various situations. For instance, we refer an interested reader to [1] for reﬂexive
simulation models of evacuation, reﬂexive models of transport ﬂows and other
numerous examples from diﬀerent applications.
  By proper variation of reﬂexive partitions, one can change the actions of a-
gents, i.e., perform reﬂexive control [1, 77]. Consider reﬂexive partition as a
control parameter. It is possible to formulate controllability problem, as follows.
Under a given set ℑof feasible reﬂexive partitions, ﬁnd the set of agents action         ∪
vectors X(ℑ) =    x(ℵ) that can be realized by reﬂexive control. The inverse
              ℵ∈ℑ
problem lies in obtaining the “minimal” set of feasible reﬂexive partitions (in a
certain sense), allowing to realize a given agents action vector.
  Now, let us address the control problem.  Suppose that the preferences of
a control subject (a principal) are described by his/her real-valued goal func-
tion F0(Q(x∗)) deﬁned on the set of aggregated outcomes (Q : ℜn →ℜ1), i.e.,
F0(·) : ℜ1 →ℜ1. Using the expression (16), the eﬃciency of the reﬂexive parti-
tion ℵcan be characterized by K(ℵ) = F0(Q(x∗(ℵ))).
  Consequently, the problem of reﬂexive control (in terms of reﬂexive partitions)

## Страница 19

272     Novikov D.A. and Chkhartishvili A.G.:Mathematical Models of Informational and ...



can be formally stated as [1, 77]

                         K(ℵ) →maxℵ∈ℑ.                             (17)

  Let Km be the maximal value of the eﬃciency criterion in the problem (17)
under a ﬁxed maximal reﬂexion rank m. The problem of the maximal rational
rank of reﬂexion (a rank being pointless to exceed for the principal in the sense of
controllability or/and eﬃciency of reﬂexive control) is to ﬁnd: m∗= min{m|m ∈
Arg  max  Kw}.
    w=0, 1, 2, ...
  To proceed, we discuss conformity of subjective reﬂexive partitions of the a-
gents. Suppose that each agent observes merely the aggregated outcome. Trajec-
tories forecasted by the agents may diﬀer from the real trajectory (see the general
reﬂexive model of collective behavior). This motivates the agents to doubt the
correctness of their subjective reﬂexive partitions. Imagine that the agents ob-
serve just the aggregated outcome of the game (in addition to their own actions).
By analogy to the condition of stable informational control (see above), one can
introduce the condition of stable reﬂexive partition. Notably, require that the ag-
gregated outcome for the real trajectory coincides with the forecasted aggregated
outcomes for all agents. Stability of reﬂexive partitions is closely associated with
learning in games. Observing the behavior of opponents (which diﬀers from the
forecasted behavior), agents may modify their beliefs about the reﬂexion ranks
of the opponents or pass to higher levels of reﬂexion. Under a ﬁxed reﬂexive
partition ℵ∈ℑ, we have realization of the action vector (16). And the aggre-
gated outcome Q(x∗(ℵ)) is realized. According to agent with reﬂexion rank , the
following vector is realized

     ˜xjk(ℵjk) =(xl∈N0, x1l∈N1, x2l∈N2, . . . , x[k −1]l∈Nk−1∪Nk∪...∪Nm\{j}, xkj),
                j ∈Nk, k = 0, m

  The condition of stable reﬂexive partition ℵ∈ℑtakes the form Q(˜xjk(ℵjk)) =
Q(x ∗(ℵ)), j ∈Nk, k = 0, m. The problem of reﬂexive control (ℵ) can be stated
on the set of stable reﬂexive controls (if nonempty). In practice, this means that
the principal forms an optimal partition of the agents into reﬂexion ranks.  In
such partition, the agents do not doubt the correctness of their beliefs about
reﬂexion ranks of the opponents (based on observing the results of the “game”).


3  Conclusion

Mathematical models of informational and/or reﬂexive structures and equilibria
(and models of corresponding control problems) allow the following:
  • from the decision theory viewpoint, extending the class of collective behavior

## Страница 20

Advances in Systems Science and Applications (2014) Vol.14 No.3                              273



models for intelligent agents performing a joint activity under incomplete aware-
ness and missed common knowledge;
  • from the descriptive viewpoint, enlarging the set of outcomes that can be
“explained” (within the framework of the model) as stable results of agents inter-
action; accordingly, extending the controllability domain (for control problems);
  • from the normative viewpoint, posing/solving the problems of collective be-
havior by choosing a proper structure of agents awareness.
  Numerous applied models of informational or/and reﬂexive control in econom-
ic, social and organizational systems, military problems and other ﬁelds are de-
scribed in [1, 32, 64].
  As strategic objectives of future investigations, we mention integration of infor-
mational reﬂexion models with strategic reﬂexion ones. In other words, it seems
promising to construct a language for uniform joint description of informational
and reﬂexive structures.


References

 [1] Novikov D.A., Ckhartishvili A.G. (2014), Reﬂexion and Control:  Mathematical
    Models, - Leiden: CRC Press.

 [2] Novikov A.M., Novikov D.A. (2013), Research Methodology, C Leiden, CRC Press.

 [3] Novikov D.A. (2013), Theory of Control in Organizations, - N.Y.: Nova Scientiﬁc
     Publishing.

 [4] Novikov D.A. (2013), Control Methodology, C N.Y.: Nova Scientiﬁc Publishing.

 [5] Huizinga J. (2008), Homo Ludens, - London. Roughtledge.

 [6] Germeier Yu. Non-Antagonistic Games, 1976. - Dordrecht: D. Reidel Publishing
    Company, 1986.

 [7] Myerson R. (1991), Game Theory: Analysis of Conﬂict, C London: Harvard Univ.
     Press.

 [8] Geanakoplos J. (1994), Common Knowledge / Handbook of Game Theory, Vol.2,
    Amsterdam: Elseiver, pp.1438-1496.

 [9] Morris S., Shin S.S. (1997), “Approximate Common Knowledge and Coordination:
    Recent Lessons from Game Theory”, Journal of Logic, Language and Information,
     Vol.6, pp.171-190.

[10] Lewis D. (1969), Convention: a Philosophical Study, - Cambridge: Harvard Univer-
     sity Press.

[11] Aumann R.J. (1976), “Agreeing to Disagree”, The Annals of Statistics, Vol.4, No.6,
     pp.1236-1239.

[12] Aumann R.J. (1999), “Interactive Epistemology I: Knowledge”, International Jour-
     nal of Game Theory, No.28, pp.263-300.

## Страница 21

274     Novikov D.A. and Chkhartishvili A.G.:Mathematical Models of Informational and ...



[13] Fagin R., Halpern J., Moses Y., Vardi M. (1999), “Common Knowledge Revisited”,
    Annals of Pure and Applied Logic, Vol.96, pp.89-105.

[14] Fagin R., Halpern J., Moses Y., Vardi M. (1995), Reasoning about knowledge, -
    Cambridge: MIT Press.

[15] Fagin R., Halpern J., Vardi M. (1991), “A Model-theoretic Analysis of Knowledge”,
    Journal of Assoc. Comput. Mach., Vol.38, No.2, pp.382-428.

[16] Hill B. (2010), “Awareness Dynamics”, Journal of Philosophical Logic, No.39,
     pp.113-137.

[17] Li J. (2009), “Information Structures with Unawareness”, Journal of Economic The-
     ory, No.144(3), pp.977-993.

[18] Simon R. (1999), “The Diﬀerence of Common Knowledge of Formulas as Sets”,
     International Journal of Game Theory, Vol.28, pp.367-384.

[19] Fagin R., Geanakoplos J., Halpern J., Vardi M. (1999), “The Hierarchical Approach
     to Modeling Knowledge and Common Knowledge”, International Jounal of Game
    Theory, Vol.28, pp.331-365.

[20] Van Huyck J., Cook J., Battalio R. (1997), “Adaptive Behavior and Coordination
     Failure”, J. of Economic Behavior and Or-ganization, Vol.32, pp.483-503.

[21] Clark H.H., Marshall C.R. (1981), “Deﬁnite Reference and Mutual Knowledge”,
    Elements of Dicourse Understanding, (ed. By A.K. Joshi, B.L. Webber, I.A. Sag), -
    Cambridge: Cambridge University Press, pp.10-63.

[22] Halpern J., Moses Y. (1990), “Knowledge and common knowledge in a distributed
    environment”, Journal of Assoc. Comput. Mach., Vol.37, No.3, pp.549-587.

[23] Gray J. (1978), “Notes on Database Operating System / Operating Systems: an
    Advanced Course”, Lecture Notes in Computer Science, Vol.66. - Berlin: Springer,
     pp.393-481.

[24] McCarthy J., Sato M., Hayashi T., Igarishi S. (1979), On the Model Theory of
    Knowledge, Technical Report STAN-CS-78-657, - Stanford: Stanford University.

[25] Nash J.F. (1951), “Non-cooperative Games”, Ann. Math., Vol.54, pp.286-295.

[26] Copic J., Galeotti A. (2007), “Awareness Equilibrium. Mimeo”, Essex: University
     of Essex.

[27] Feinberg Y. (2004), Subjective Reasoning - Games with Unawareness. Research
    Paper No.1875. Stanford: Graduate School of Business.

[28] Heifetz A., Meier M., Schipper B. (2008), “A Canonical Model of Interactive Un-
     awareness”, Games and Economic Behavior, No.62, pp.304-324.

[29] Rego L., Halpern J. (2012), “Generalized Solution Concepts in Games with Possibly
    Unaware Players”, International Journal of Game Theory, No.41, pp.131-155.

[30] Chkhartishvili A.G., Novikov D.A. (2004), “Models of Reﬂexive Decision-Making”,
    Systems Science, Vol.30, No.2, pp.45-59.

## Страница 22

Advances in Systems Science and Applications (2014) Vol.14 No.3                              275



[31] Novikov D.A., Chkhartishvili A.G. (2003), “Information Equilibrium:  Punctual
     Structures of Information Distribution”, Auto-mation and Remote Control, Vol.64,
    No.10, pp.1609-1619.

[32] Novikov D.A., Ckhartishvili A.G. (2003), Reﬂexive Games, - Moscow: Sinteg (in
     Russian).

[33] Lefebvre V.A. (1965), Basic Ideas of the Reﬂexive Games Logic / Proc, ≪Problems
     of Systems and Structures Researches≫, - Moscow: USSR Academy of Science (in
     Russian).

[34] Lefebvre V.A. (2010), Algebra of Conscience. 2nd ed. - Berlin: Springer.

[35] Lefebvre V.A. (1973), Conﬂicting Structures, - Moscow: Soviet Radio (in Russian).

[36] Lefebvre V.A. (2010), Lectures on Reﬂexive Game Theory, - Los Angeles: Leaf &
    Oaks.

[37] Lefebvre V.A. (1998), Sketch of Reﬂexive Game Theory / Proc. of Workshop on
    Multi-Reﬂexive Models of Agent Behavior, - Los Alamos, New Mexico, USA, pp.1-
     44.

[38] Ereshko F.I. (2001), Modelling of Reﬂexive Strategies in Control Systems - Moskow:
   CC RAS (in Russian).

[39] Gorelik V.A., Kononenko A.F. (1982), Game–theoretical Models of Decision Making
     in Ecological and Economic Systems. - Moscow: Radio and Communication (in
     Russian).

[40] Soros G. (1994), The Alchemy of Finance: Reading the Mind of the Market, New
    York: Wiley.

[41] Taran T.A., Shemaev V.N. (2004), “Boolean Reﬂexive Control Models and their
     Application to Describe the Information Struggle in Socio-Economic Systems”, Au-
    tomation and Remote Control, Vol.65, No.11, pp.1834-1846.

[42] Aumann R.J., Brandenbunger A. (1995), “Epistemic Conditions for Nash Equilib-
    rium”, Econometrica, Vol.63, No.5, pp.1161-1180.

[43] Heifetz A. (1999), “Iterative and Fixed Point Belief”, Journal of Philosophical Logic,
     Vol.28, pp.61-79.

[44] Hintikka J. (1962), Knowledge and Belief, - Ithaca: Cornell University Press.

[45] Kripke S. (1959), “A Completeness Theorem in Modal Logic”, Journal of Symbolic
     Logic, No.24, pp.1-14.

[46] Mertens J.F., Zamir S. (1985), “Formulation of Bayesian Analysis for Games with
    Incomplete Information”, International Journal of Game Theory, No.14, pp.1-29.

[47] Wolter F. (2000), “First Order Common Knowledge Logics”, Studia Logica, Vol.65,
     pp.249-271.

[48] Camerer C., Ho T., Chong J. (2004), “A Cognitive Hierarchy Model of Games”,
    The Quarterly J. of Economics, No.8, pp.861-898.

## Страница 23

276     Novikov D.A. and Chkhartishvili A.G.:Mathematical Models of Informational and ...



[49] Nagel R. (1995), “Experimental Results on Interactive Competitive Guessing”,
    American Economic Review, Vol.85, No.6, pp.1313-1326.

[50] Stahl D., Wilson P. (1994), “Experimental Evidence on Players’ Models of Other
     Players”, Journal of Economic Behavior and Organization, Vol.25, pp.309-327.

[51] Novikov D.A. (2012), “Models of Strategic Behavior”, Automation and Remote Con-
      trol, Vol.73, No.1, pp.1-19.

[52] Weber R. (2001), “Behavior and Learning in the ≪Dirty Face≫Game”, Experi-
    mental Economics, Vol.4, pp.229-242.

[53] Harsanyi J. ”Games with Incomplete Information Played by “Bayesian” Players”,
    Management Science. Part I: 1967, Vol.14, No.3, pp.159-182; Part II: 1968, Vol.14,
     No.5, pp.320-334; Part III: 1968, Vol.14, No.7, pp.486-502.

[54] Brandenburger A., Dekel E. (1993), “Hierarchies of Beliefs and Common Knowl-
     edge”, Journal of Economic Theory, Vol.59, pp.189-198.

[55] The Handbook of Experimental Economics / Ed. by J. Kagel and A. Roth. C Prince-
     ton: Princeton University Press, 1995.

[56] Wright J., Leyton-Brown K. (2010), Beyond Equilibrium: Predicting Human Be-
     havior in Normal Form Games / Proc. of Conf. Associat, Advancement of Artiﬁcial
     Intelligence (AAAI-10), pp.461-473.

[57] Kahneman D., Slovic O., Tversky A. (1982), Judgment under Uncertainty: Heuris-
      tics and Biases, - Cambridge: Cambridge University Press.

[58] Nisan N., Roughgarden T., Tardos E. et al. (2007), Algorithmic Game Theory, C
    Cambridge: Cambridge University Press.

[59] Bernheim D. (1984), “Rationalizable Strategic Behavior”, Econometrica, No.5,
     pp.1007-1028.

[60] Weibull J. (1995), Evolutionary Game Theory, C Cambridge: MIT Press.

[61] Chkhartishvili A.G. (2003), “Bayes-Nash Equilibrium: Inﬁnite-Depth Point Infor-
    mation Structures”, Automation and Remote Control, Vol.64, No.12, pp.1922-1927.

[62] Novikov D.A., Chkhartishvili A.G. (2005), “Stability of Information Equilibrium in
    Reﬂexive Games”, Automation and Re-mote Control, Vol.66, No.3, pp.441-448.

[63] Chkhartishvili A.G. (2010), “Reﬂexive Games: Transformation of Awareness Struc-
     ture”, Automation and Remote Control, Vol.71, No.6. pp.1208-1216.

[64] Chkhartishvili A.G. (2004), “Game-theoretical Models of Informational Control”, -
    Moscow: PMSOFT (in Russian).

[65] Chkhartishvili A.G. (2012), “Concordant Informational Control”, Automation and
    Remote Control, Vol.73, No.8, pp.1401-1409.

[66] Costa-Gomes M., Crawford V. (2006), “Cognition and Behavior in Two-Person
    Guessing Games: An Experimental Study”, AER, Vol.96, pp.1737-1768.

## Страница 24

Advances in Systems Science and Applications (2014) Vol.14 No.3                              277



[67] Nagel R. (1995), “Unraveling in Guessing Games: An Experimental Study”, AER.,
     Vol.85, pp.1313-1326.

[68] Stahl D., Wilson P. (1995), “On Players Models of Other Players: Theory and
    Experimental Evidence”, Games and Economic Behavior, Vol.10, pp.213-254.

[69] Burchardi K., Penczynski S. (2010), “Out of Your Mind: Estimating the Level-k
    Model”, London: London School of Econom-ics, Working Paper.

[70] Camerer C., Ho T., Chong J. (2003), “Models of Thinking, Learning and Teaching
     in Games”, AEA Paper Proc, Vol.92, No.2, pp.192-195.

[71] Choi S., Gale D., Kariv S. (2005), “Behavioral Aspects of Learning in Social Net-
     works: An Experimental Study”, Advances in Behavioral and Experimental Eco-
    nomics, Ed. by John Morgan, JAI Press.

[72] Crawford V., Costa-Gomes M., Iriberri N. (2012), “Structural Models of Nonequilib-
    rium Strategic Thinking: Theory, Evidence and Applications”, Journal of Economic
     Literature.

[73] Costa-Gomes M., Broseta B. (2001), “Cognition and Behavior in Normal-Form
    Games: An Experimental Study”, Economet-rica, Vol.69, No.5, pp.1193-1235.

[74] McKelvey R., Palfrey T. (1995), “Quantal Response Equilibria for Normal Form
    Games”, Games and Economic Behavior, Vol.10(1), pp.6-38.

[75] McCain R. (2010), Learning Level-k Play in Noncooperative Games, Philadelphia:
    Drexel University, Working Paper.

[76] Stahl D. (1993), “Evolution of Smartn Players”, Games and Economic Behavior,
     No., pp.604-617.

[77] Korepanov V.O., Novikov D.A. (2012), “The Reﬂexive Partitions Method in Models
     of Collective Behavior and Control”, Automation and Remote Control, Vol.73, No.8,
     pp.1424-1441.

[78] Novikov D.A. (2010), “≪Cognitive Games≫: a Linear Impulse Model”, Automation
    and Remote Control, Vol.71, No.4, pp.718-730.

Corresponding Author
D.A. Novikov can be contacted at: novikov@ipu.ru.
