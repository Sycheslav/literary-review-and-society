---
id: acl-2026.eacl-long.51-text
type: material
title: Don’t Trust Generative Agents to Mimic Communication on Social Networks Unless
  You Benchmarked their Empirical Realism
work_id: acl-2026.eacl-long.51
source_url: https://aclanthology.org/2026.eacl-long.51.pdf
retrieved_at: '2026-10-27'
conversion: pdf_text_extraction
quality_note: Текст извлечён из PDF с сохранением номеров страниц. Порядок колонок,
  таблицы, формулы и подписи могут быть искажены; рисунки доступны по ссылке на PDF.
  Это текстовая конверсия, не визуально эквивалентный оригинал.
language: original
sha256_text: 29400a202317aa59982d791c794fcd858ed6450e828968bd25688a91e64b884a
---

> Источник: [https://aclanthology.org/2026.eacl-long.51.pdf](https://aclanthology.org/2026.eacl-long.51.pdf). Текст извлечён из PDF с сохранением номеров страниц. Порядок колонок, таблицы, формулы и подписи могут быть искажены; рисунки доступны по ссылке на PDF. Это текстовая конверсия, не визуально эквивалентный оригинал.

## Страница 1

      Don’t Trust Generative Agents to Mimic Communication on
    Social Networks Unless You Benchmarked their Empirical Realism

      Simon Münker               Nils Schwager          Achim Rettinger
        Trier University                Trier University                Trier University
   muenker@uni-trier.de    schwager@uni-trier.de    rettinger@uni-trier.de



                Abstract                    such evidence remains challenging in computa-
                                                        tional social and communication science (Wang   The ability of Large Language Models (LLMs)
                                                           et al., 2016). The fundamental problem is causal    to mimic human behavior triggered a plethora
    of computational social science research, as-       inference: determining whether alternative plat-
   suming that empirical studies of humans can      form designs would produce different, potentially
    be conducted with AI agents instead. Since      more favorable outcomes. This question is best
    there have been conflicting research findings       addressed through simulation, which enables test-
   on whether and when this hypothesis holds,       ing counterfactual scenarios without exposing real
    there is a need to better understand the differ-                                                    users to potentially harmful conditions. The valid-
    ences in their experimental designs. We focus
                                                             ity of simulation-based insights depends critically   on replicating the behavior of social network
                                            on how faithfully simulations represent reality. Re-    users with the use of LLMs for the analysis
    of communication on social networks.  First,       cent advances in Large Language Models (LLMs)
   we provide a formal framework for the simu-      have enabled more sophisticated agent communi-
     lation of social networks, before focusing on        cation in social simulations (Chuang et al., 2024),
    the sub-task of imitating user communication.       surpassing the realism of traditional symbolic agent
   We empirically test different approaches to imi-                                                   languages. However, this increased sophistication
     tate user behavior on X in English and German.                                                        raises a crucial question: Can LLM-based agents   Our findings suggest that social simulations
                                                       replicate human social behavior with sufficient fi-    should be validated by their empirical realism
    measured in the setting in which the simulation        delity to produce scientifically robust insights?
    components were fitted. With this paper, we        Answering this question requires systematic ex-
    argue for more rigor when applying generative-       perimental designs that improve reproducibility
    agent-based modeling for social simulation.        and provide quantitative measures of empirical re-
                                                     alism, the degree to which simulated behaviors1  Introduction
                                           match observed human behaviors. Without such
Social media platforms face mounting regulatory    validation, simulation findings lack the credibil-
pressure worldwide. Australia and Spain are im-    ity needed to inform policy decisions or scientific
plementing age restrictions for users under 161,   understanding.
while several countries have banned TikTok due
to concerns about misinformation (Basch et al.,   Contributions
2021) and harmful content (Weimann and Masri,                                         Our work advances the formalization and validity
2023). The EU’s Digital Service Act mandates                                                   of LLM-based social network simulation through
that large platforms "identify, analyze and assess                                                      three key contributions:
any systemic risks [...] from the use made of their
services", including "actual or foreseeable neg-  Framework We formalize social networks to (i)
ative effects on civic discourse." Meeting these                                                        standardize their simulation and (ii) enable
regulatory requirements demands robust quantita-                                                         systematic benchmarking of empirical realism
tive evidence regarding platform risks, particularly                                                     through quantifiable metrics.
the role of algorithmic mechanisms such as rank-
ing and recommendation systems. Yet obtaining   Case Study We instantiate this framework with
                                                        multiple approaches for imitating user com-    1Australia approves social media ban on under-16 https:
//www.bbc.com/news/articles/c89vjj0lxx9o                munication on X, including posting, replying,
                                        1141
       Proceedings of the 19th Conference of the European Chapter of the Association for Computational Linguistics
                                  Volume 1: Long Papers, pages 1141–1151
                      March 24-29, 2026 ©2026 Association for Computational Linguistics

## Страница 2

    and reply-likelihood prediction tasks across    tributions from diverse demographic subgroups
     English and German datasets.                 (Argyle et al., 2023; Chang et al., 2025). How-
                                                          ever, growing evidence challenges these optimistic
Validation We  benchmark  empirical  realism                                                    claims. LLM-generated synthetic opinions reveal
     across tasks, languages, and modeling ap-                                                fundamental limitations of prompting-based align-
     proaches, revealing when and how LLMs can                                               ment.  While persona prompting approximates
     faithfully replicate user behavior, and cru-                                 US opinion distributions, performance degrades
      cially, when they cannot.                                                       substantially for non-English populations (Argyle
                                                           et al., 2023; Ma et al., 2025; Münker, 2025b,a).  Our case study and evaluation focus on the most
                                                This suggests prompting privileges cultural con-active users in our dataset, whose behavior provides
                                                           texts embedded in training data rather than reliablysufficient training examples for model alignment
                                              grounding outputs in external reality. Moreover,and validation. This design choice, although nec-
                                              prompting produces unstable representations. Mi-essary for feasibility, primarily characterizes the
                                                nor prompt variations dramatically affect behav-communication dynamics of highly engaged partic-
                                                           ioral outputs (Ma et al., 2025), and RLHF trainingipants in political discourse.
                                         compounds this instability (Tjuatja et al., 2024).
2  Related Work                           These findings suggest that prompting controls
                                            model behavior inadequately, failing to consistently
2.1  From Symbolic Agents to Neural              activate intended knowledge representations.
    Language Models
                                                    2.3  Methodological and Ethical ConcernsSocial simulation has evolved from symbolic
(O’Brien and Nicol, 1998), rule-based agents   Beyond technical limitations, using LLMs as hu-
to data-driven neural approaches.   Traditional   man proxies raises serious methodological ques-
multi-agent systems (Weiss, 1999) employed ex-    tions. Training data biases can systematically mis-
plicit cognitive models with deductive reasoning,   represent marginalized groups (Abid et al., 2021;
while game-theoretic frameworks relied on ratio-   Hutchinson et al., 2020; Münker and Sartori, 2026).
nal choice assumptions. These approaches prior-   The disembodied nature of LLMs means they lack
itized theoretical interpretability and control over   grounding in physical reality, cultural contexts,
predictive accuracy, a reasonable trade-off when    physical environments, and interpersonal relation-
modeling capabilities were limited.                    ships, which fundamentally shape human cognition
  Our work diverges fundamentally from this tra-   and decision-making (Hussein, 2012; Argyle et al.,
dition. Rather than constructing agents based on    2023). Ethically, deploying LLMs as participant
theoretical principles, we aim to replicate observed    replacements raises concerns about informed con-
communication patterns as precisely as possible.    sent, potential misuse, and oversimplification of
This shifts the goal from explanation to imitation,   complex human behaviors. These concerns inten-
and from symbolic representations to natural lan-    sify when researchers make causal claims based on
guage generation. The question is not whether   simulated data without validating empirical real-
agents follow theoretically motivated rules, but    ism.
whether they produce outputs statistically indis-
                                    Our Position  We argue that LLM-based simula-tinguishable from human users.
                                                       tion can advance social science meaningfully, but
2.2  LLMs as Human Simulacra: Promise and    only when coupled with rigorous validation against
     Limitations                                  real-world data. Claims about simulation validity
                                            must be empirically demonstrated, not assumed.The use of LLMs as human surrogates began with
                                                This paper provides a framework for such valida-believable non-player characters in game environ-
                                                            tion.ments (Park et al., 2023), demonstrating superfi-
cially authentic behavior.  This success sparked                                       3  Modeling Online Social Networks
broader interest in using LLMs as synthetic partic-
ipants across social sciences (Argyle et al., 2023;  We present a formal framework for Twins of On-
Chuang et al., 2024; Papachristou and Yuan, 2025).    line Social Networks (TWONs) that captures both
Proponents argue that appropriate prompting en-   user behavior (Sect. 3.1) and platform mechanics
ables models to accurately emulate response dis-   (Sect. 3.2).  This framework enables systematic
                                        1142

## Страница 3

comparison between simulated and observed be-   Imitating User Behavior  The task of machine
haviors. Figure 1 illustrates key concepts.            learning an agent-based simulation of human social
                                           media communication behavior at the user level
3.1  Modeling Agents
                                                                is to estimate the function bi(·) of each agent i,Let A be a set of agents, i.e., social media users,   which given real-world observations of discourses
where ait is the state of the i-th agent at time t.2   (Mi0, Mi1, ..., Mit), predicts its next message mit+1.
M is a set of messages, where m(i,j)t    is a message   Thus, the objective can be formulated as minimiz-
from agent i to agent j at time t. Consequently,   ing a loss function
m(i,·)t   indicates a message that agent i transmits to
all other agents and M(·,i)t    indicates all messages            min Lb(bmit+1, mit+1) 7→R
sent to agent i. Accordingly, Mit indicates all mes-       that compares the predicted bmit+1 to its observed
sages that agent i sends and receives at time t. The    value.3
state ait of the i-th agent at time t is defined by the
discourse it has been involved in up to this point:   Replicating Network Mechanics  The task of
(Mi0, Mi1, ..., Mit). The agent’s state is updated ac-    replicating the system-level mechanics of a social
cording to the function ui(ait, Mit) = ait+1 based   network from observations is to estimate the func-
on its previous state and the messages sent and    tion ri of each agent i, given its observed messages
received since the last point in time. The commu-  (fMi1, Mif1, ..., Mift). This objective can be formu-
nicative behavior bi(·) of the agent i is a function    lated as minimizing the loss
that maps its current state ait to the messages m(i,j)t+1
                                                  min Lr(cM(·,i)t    , M(·,i)ft   )he is sending next to agents j: bit(ait) = M(i,j)t     .                         7→R
                                                           that compares the predicted M(·,i)ct   with its ob-3.2  Modeling Network Mechanics                                                  served value.
The mechanics of the communication channel
(here, an online social network) is defined by a   Simulating Social Networks   Finally, a simula-
function ri    that adapts the agent i’ to the incom-    tion task for investigating user communication on            t(·)
ing messages M(·,i)t    to M(·,i)ft     , returning a manip-    social networks can be stated as follows: Given
                                                  (an estimation of) b and r generate a discourseulated list of messages. Standard manipulations
                                          Mt+1, ..., Mt+n and evaluate it according to a dis-of the list are filtering or ranking, but could also
                                                   course metric q, for example, the degree of outrageinclude manipulating content or adding messages
                                                    or hate speech, mappingto the list that have not been directly sent between
agents. Note that this function can be personalized
and adapted over time. In general, the messages             q(Mt+1, ..., Mt+n) 7→R
agent i receives at time t are given by:                                       Any findings obtained by q can be put into per-
                                                     spective by Lb and Lr as they quantify the em-
           rit(bjt(ajt)) = M(·,i)ft                  t               pirical realism of simulating a social network and                           ∀j ∈Aj
  which in turn triggers agent is response           consequently qualify the validity of q. Lb and Lr
                                              can be interpreted as confidence scores for any
            bit+1(ui(ait, M(·,i)ft   )) = M(i,·)t+1              empirical findings obtained by simulating social
                                                networks and should be reported together with em-
4  Simulating TWONs                             pirical findings obtained in the simulation.
Based on the formal framework introduced in Sec-                                        5  Case Study Design: Imitating X Users
tion 3 we define the required tasks to construct
a TWON by replicating its behavior at the user  We now instantiate our framework using data from
(Sect. 4) and system level (Sect. 4). Finally, this   X. Our implementation focuses on the user be-
allows us to check the empirical realism of such    havior function bi while acknowledging simpli-
TWONs (Sect. 4).                                     fications in other framework components. We
   2The internal state of an agent can be represented by sym-      3Any text comparison metric, like BLEU, cross-entropy,
bolic logic, machine learned functions, cognitive architecture    or higher-level metrics, could be applied here. In addition,
or any other agent formalism that is capable of perceiving its     other metrics can be used to measure the predictive accuracy
environment and acting upon that environment.                  of discrete actions such as "liking".
                                        1143

## Страница 4

Figure 1: Illustrating example: Agent (a2) sends a message to agent (a1), triggering a model update and reply
generation. Agent (a2) receives a curated list of incoming messages at t + 1 and updates its model accordingly.
This illustrates the interplay between agent behavior (b) and network mechanics (r).

  Behavior b           Agent ai   Task Type    Input Mft(·,i)   Output m(i,·)t+1   Loss Lb                 Metric(s) q
  Posting                Creator    Generative   Topic         Free Text       Cross Entropy        BLEU, ngram,...
  Replying              Reactor    Generative   Post          Free Text       Cross Entropy        BLEU, ngram,...
  Replying Likelihood   Reactor    Probability   Post            Interval [0,1]   Binary Cross Entropy   F1, Acc.

Table 1: Communicative behaviors modeled, imitated and benchmarked in our empirical study with respect to their
empirical realism, as defined in our formal framework.


estimate communicative behavior by minimizing    learns to generate content that reflects both the
Lb(bmt+1, mt+1) across three action types: posts,   broad party stance and individual variations in ex-
replies, and reply-likelihood.  The imitation of    pression style.
agent behavior b is further separated into distinct
                                                 Imitating Replying Behavior  The reply genera-subtasks: Posting behavior is characteristic of the
                                                         tion system operates on a context-aware framework
content creator user group, and the Replying be-
                                                        that processes historical interaction patterns. The
havior for reactive users. In our data, the former
                                                           historical interaction context is represented as a se-
category includes politicians, policymakers, and
                                               quence of <Post, Reply> pairs, encoded as few-shot
institutional news outlets, characterized by their
                                               examples during the alignment process. The model
role in initiating discussions and setting conver-
                                                 maintains consistent user behavior by implement-
sational agendas. The latter comprises individ-
                                                   ing a constraint mechanism that prevents top-level
ual users whose primary mode of engagement in-
                                                    post-generation, restricting outputs to reply-only
volves responding to and amplifying existing con-
                                                      contexts.
tent through platform-specific mechanics such as
replies, retweets, and reactions. This asymmetric   Estimating Replying Likelihood  The goal of
structure reflects the empirically observed power-    this task is to predict whether a synthetic social net-
law distribution of participation in social networks,   work user would respond to a post based on their
where a small percentage of users generate most    history of interaction. The system processes his-
of the original content (Carron-Arthur et al., 2014;    torical interactions and a current post using a fine-
Sun et al., 2014). An overview of the different    tuned BERT model (Zhang et al., 2023) to generate
agent behaviors that we empirically evaluate in the   embeddings by calculating the pooled mean of its
next sections is provided in Table 1.                 input representations. Historical interactions and
                                                      the post are separately processed through quadratic
Imitating Posting Behavior We model party-    linear layers with ReLU activation, maintaining
specific content generation patterns with the ex-   dimensions related to historical data and encoder
tracted topics and the public information (name    size. The post embedding is repeated to match each
and party affiliation) of the individuals, in our case,    historical entry and combined using element-wise
politicians.  Given a specified topic, the model    multiplication with the history representation, es-
                                        1144

## Страница 5

tablishing an interaction between past patterns and    users measured by the number of posts and replies.
current post features. These combined representa-   This filtering strategy prioritizes data quality and
tions are fed into a classification layer, returning    user-level modeling feasibility over population rep-
a prediction score between 0 and 1 indicating the    resentativeness. Consequently, our empirical real-
likelihood of a synthetic user replying to the post.    ism assessments characterize model performance
                                                      for the most engaged segment of the political dis-
6  Fitting Agents to User Data from X        course community.

In this Section, we describe the data set used to   Content Generation Alignment Pipeline We
train and evaluate our approaches for imitating the    train two model adapters on top of Llama-3.2-3B-
types of user behavior described in the previous    Instruct (Dubey et al., 2024) using the Supervised
Section. Furthermore, the machine learning pro-   Fine-Tuning (SFT) paradigm through the Trans-
cesses for fitting the models to the data are de-   former Reinforcement Learning (TRL) library us-
scribed.                                          ing the default pipeline.  The trained adapters
                                                    are unmodified LoRA (Hu et al., 2021) matrices
Dataset  Our experiments are based on two                                                provided by the Parameter-Efficient Fine-Tuning
datasets, English and German, collected from X.                                          (PEFT) package (Ding et al., 2023). We optimize
The datasets are collected around keywords con-                                                        for two objectives (posting and replying) with con-
cerning the political discourse in the US and Ger-                                                          tent from the original users as the labeled data.
many during the first half of 2023. The samples
contain two types of content: a) Tweets (posts)   Behavior Likelihood Alignment Pipeline  For
from delegates of the national parliament con-   the decision task, we train our dual input model us-
cerning political decisions – DE: 155.000, EN:   ing embeddings generated by a frozen BERT-based
930.000, and b) replies from regular X users to-   encoder that was pretrained to capture semantic
wards these decisions or opinions – DE: 185.000,    representations of tweets (Zhang et al., 2023). We
EN: 17.800.000. In addition, we labeled the topics   optimize with AdamW (Loshchilov et al., 2017)
of posts and replies using zero-shot prompt classi-   using the same data set as for the generative tasks,
fication with Llama 3.1 70B (Zheng et al., 2023).   making the assumption that when a user has not
This yields two distinct agent types: a) political ac-   commented on tweets in our collection, this repre-
tors for posts and b) unspecified X user for replies,    sents an active decision not to reply. To maintain
both across two languages.                          balance, we sample an equal number of negative
                                             and positive instances for both languages.
Preprocessing  We apply moderate content filter-
ing to enhance the quality of the selected data:      Data and Code Availability  All experimental
                                                procedures and the statistical analyzes are imple-  External Source: We remove samples that in-
                                           mented using Python 3.10+ with standard scien-clude URLs to external sources. Although this
                                                                    tific computing libraries (NumPy (Harris et al.,significantly reduces the number of samples, our
                                                   2020), SciPy (Virtanen et al., 2020), pandas (McK-models cannot access this information during the
                                                inney et al., 2011), scikit-learn (Pedregosa et al.,training and inference process.
                                                   2011)). LLM training and inference are imple-  Retweets: Tweets starting with RT mark a shared
                                           mented with the Hugging Face Transformers li-post. The author does not add new content but
                                                  brary (Wolf et al., 2020). The complete techni-replicates the original text and shares it with their
                                                      cal pipeline for this study is publicly availablefollowers. We exclude these samples because we
                                          on GitHub at https://github.com/cl-trier/cannot verify if the shared content aligns with the
                                             TWON-Agents. This repository includes the sourceretweeting author’s opinion.
                                              code for all the data processing, training, and eval-  Content Length: We aim to focus on content
                                                    uation steps described in this paper.that contains arguments or opinions, particularly
given the later applied discourse metrics. Thus,                                       7  Evaluating the Empirical Realism of
we remove samples with fewer than 32 characters                                              Imitated X Usersbased on our heuristic assumption that a specified
length is necessary to convey an opinion.        We evaluated the approaches for the different imi-
  After the initial pre-processing, we further re-    tation tasks as described in Section 5 and Section 6
duce both datasets to retrieve only the most active    to assess their empirical realism.
                                        1145

## Страница 6

                                                 English
                           Post (persona-based)            Reply (history-based)
                              in-context         fine-tuned         in-context         fine-tuned
    BLEU a         0.015 (± 0.002)  0.085 (± 0.017)   0.019 (± 0.005)  0.239 (± 0.042)
     unigram b       0.157 (± 0.005)  0.294 (± 0.016)   0.167 (± 0.008)  0.387 (± 0.041)
     bigram b        0.022 (± 0.002)  0.095 (± 0.015)   0.021 (± 0.004)  0.243 (± 0.047)
      length ratio c    1.632 (± 0.053)  1.001 (± 0.054)   1.324 (± 0.058)  0.916 (± 0.040)
     TweetEval d
         topics         0.587 (± 0.189)  0.645 (± 0.207)   0.337 (± 0.216)  0.536 (± 0.211)
        emotions      0.437 (± 0.108)  0.562 (± 0.105)   0.336 (± 0.117)  0.479 (± 0.107)
        sentiment      0.435 (± 0.073)  0.619 (± 0.083)   0.386 (± 0.113)  0.586 (± 0.087)
        offensive      0.491 (± 0.061)  0.563 (± 0.050)   0.379 (± 0.098)  0.567 (± 0.079)
        hate          0.327 (± 0.178)  0.200 (± 0.085)   0.231 (± 0.191)  0.502 (± 0.257)
        irony          0.190 (± 0.085)  0.353 (± 0.085)   0.169 (± 0.120)  0.377 (± 0.112)
     embed. dist. e   2.018 (± 0.101)  1.461 (± 0.085)   2.006 (± 0.162)  1.427 (± 0.091)
                                      German
    BLEU a         0.009 (± 0.002)  0.025 (± 0.007)   0.005 (± 0.001)  0.021 (± 0.031)
     unigram b       0.176 (± 0.010)  0.238 (± 0.016)   0.099 (± 0.006)  0.148 (± 0.050)
     bigram b        0.016 (± 0.001)  0.035 (± 0.003)   0.006 (± 0.003)  0.032 (± 0.044)
      length ratio c    1.142 (± 0.044)  1.023 (± 0.049)   1.961 (± 0.234)  0.785 (± 0.117)
     TweetEval d
         topics         0.238 (± 0.300)  0.340 (± 0.301)   0.056 (± 0.225)  0.039 (± 0.225)
        emotions      0.123 (± 0.278)  0.220 (± 0.251)   0.060 (± 0.215)  0.125 (± 0.261)
        sentiment      0.079 (± 0.276)  0.255 (± 0.200)   0.066 (± 0.196)  0.246 (± 0.264)
        offensive      0.104 (± 0.215)  0.095 (± 0.239)   0.141 (± 0.200)  0.278 (± 0.350)
        hate          0.234 (± 0.340)  0.477 (± 0.247)   0.163 (± 0.212)  0.044 (± 0.160)
        irony         -0.084 (± 0.242)  0.118 (± 0.153)   0.166 (± 0.226)  0.074 (± 0.163)
     embed. dist. e   2.530 (± 0.460)  1.499 (± 0.195)   3.855 (± 0.437)  2.891 (± 0.351)
a BLEU with smoothing (Lin and Och, 2004), b average precision score, c token ratio between generated and original content,
d TweetEval (Barbieri et al., 2020) classifications evaluated with pearson correlation coefficient (higher is better) and aggregated
 across subclasses, e pairwise embedding distance (lower is better) based on TwHIN-BERT (Zhang et al., 2023) [CLS] token

Table 2: Comparison of the base model - Llama-3.2-3B (Dubey et al., 2024) - (in-context prompting) and the aligned
version - adapter fine-tuning (Yu et al., 2023) - on our German and English Twitter politician and follower datasets
for the posting and replying task evaluated on n = 100 independent random samples for k = 10 repetitions not
seen during training. Bold marks the in-class (language, task) best values if significant by standard deviation.





                                        1146

## Страница 7

7.1  Evaluation of Imitated Posting and         compared to English and regardless of fine-tuning.
     Replying Behavior                         There were minimal improvements in BLEU scores
                                             from 0.005 to 0.021, with high variance in metrics,The text-generation-based  tasks are evaluated
                                                  exemplified by the bi-gram standard deviation ofwith two different approaches, in two different
                                                    0.044. The embedding distance remains high evenlanguages, using three text comparison metrics
                                                           after fine-tuning at 2.891.(see. Table 2).
                                                    7.2  Evaluation of Replying LikelihoodIn-context vs Fine-tuning  An initial observa-
                                                 Behaviortion is that BLEU scores (Papineni et al., 2002)
in all in-context settings are low. This is also true    Similar to our evaluation of the generative tasks,
for the n-gram metrics. However, the fine-tuning-  we observe substantial performance disparities be-
based approach shows significant improvements   tween English and German models (Table 3). Even
specifically in the English reply task, but also for   on the German training set, our model achieves
unigram matches and the overall length ratio. Be-   only moderate alignment with an F1-Score of
yond such token-overlap-metrics, we tested seman-   0.666, in stark contrast to the English experiment,
tic similarity metrics: we embedded all samples   where the prediction scores are almost perfect. This
using X-fine-tuned BERT (Zhang et al., 2023) and   performance gap suggests that the BERT encoder
calculated the distance between generations and   employed in our study represents English samples
original samples. Again, the results generated from   with semantically richer embeddings than their Ger-
the fine-tuned model show a significantly shorter   man counterparts.
distance to its original counterpart compared to
the in-context model. The correlation between the    7.3  Key Findings
predicted emotions in the original and generated
                                                  Several key findings emerge from this analysis.
samples using a BERT-based multi-label emotion
                                                               First, language-specific performance shows that En-
classifier (Barbieri et al., 2020) is less clear. The
                                                         glish models significantly outperform German mod-
fine-tuned approach only marginally outperforms
                                                            els across all metrics, with TweetEval metrics prov-
the prompt-only approach on the posting task.
                                                    ing more reliable for English content while German
  However, the English fine-tuned reply genera-                                             models show limited success, particularly in reply
tion task showed by far the best performance with                                                    generation. Second, task-specific patterns reveal
significant improvements in all metrics. The BLEU                                                           that fine-tuning shows consistent improvements for
score increased substantially from 0.019 to 0.239,                                                     post-generation in both languages. However, reply
unigram precision improved from 0.167 to 0.387,                                                   generation varies dramatically between languages,
and the embedding distance was reduced signifi-                                                with English reply generation achieving remark-
cantly from 2.006 to 1.427. The model achieved a                                                   ably high scores. Third, the impact of data volume
near-perfect length ratio of 1.003 and demonstrated                                                                  is evident, with better performance in English likely
strong TweetEval correlations across all categories.                                            due to larger LLM pre-training datasets. Fourth,
                                                      in terms of evaluation metrics, BLEU scores andEnglish vs German  In general, we observe the
                                           embedding distances provide consistent signals,same improvements through fine-tuning compared
                                               TweetEval metrics are only meaningful for Englishto in-context with respect to the German data in
                                                     content, and the length ratio serves as an intuitivethe post-generation task: BLEU score increases,
                                                       indicator of style authenticity.and unigram precision improves. Also, the embed-
ding distance was reduced from 2.530 to 1.499,
                                                    7.4  Imitation Limitationsand the length ratio moved closer to 1.0 after fine-
tuning (1.023 vs 1.142). However, compared to En-   The stark contrast between English and German
glish, the TweetEval metrics proved generally un-   model performance, particularly in reply genera-
reliable for German content, showing inconsistent    tion tasks, underscores the importance of data vol-
patterns with high standard deviations. This sug-  ume and language-specific considerations when uti-
gests fundamental limitations in applying English-    lizing generative-agent-based modeling for imitat-
trained evaluation metrics to German content. Sim-   ing user behavior on social networks. The success
ilarly, the German reply generation (history-based)    of the English models demonstrates the potential
task shows low empirical realism on all metrics    of the approach, while the limitations faced by the
                                        1147

## Страница 8

           Language  Class           Precision  Recall  F1-Score  Support
                          Ignored           0.741     0.630     0.681        500
          German    Replied           0.678     0.780     0.726        500
                      Weighted Avg    0.710     0.705     0.703       1000
                          Ignored           0.973     0.972     0.972        500
             English     Replied           0.972     0.974     0.973        500
                      Weighted Avg    0.973     0.973     0.972       1000

Table 3: Replying Likelihood metrics for German and English data. TwHIN-BERT (Zhang et al., 2023) (frozen)
utilized to embed the individual samples. The train/test combinations are chosen by the iteration with the best test
F1-Score.


German models highlight that they require addi-   same setting in which the simulation components
tional training and optimizations to provide robust   were fitted and validated. The stark difference be-
levels of empirical realism.                      tween English and German performance demon-
  Our experimental setup has further limitations    strates this. The English models performed signif-
regarding both data selection and the system’s    icantly closer to their real-world counterparts and
capacity to generate discourses containing well-   produced more stable results. Changing the set-
structured standpoints and arguments. Although    ting without retraining and validation can lead to
our models demonstrate such capabilities under    unreliable outcomes of a simulation.
certain conditions, their performance characteris-      Third, fine-tuning of the simulation components
tics primarily reflect the behavioral patterns of the     is required to obtain sufficient levels of empirical
most active users within our dataset, thus mirroring    realism. In-context prompting of LLMs, as is done
the distinctive communication dynamics observed    in most of the related work (Larooij and Törnberg,
in the selected X community. This sampling bias    2025), specifically in areas like psychology, social
raises questions about the generalizability of our    sciences, or media studies is often not sufficient
findings in different contexts of social networks    to guarantee a simulated behavior that is close to
and user populations.                                      reality.

                                                    8.2  Future Research8  Conclusions and Future Work
                                                This paper marks a first step towards more robust
In this paper, we questioned the empirical realism                                                    empirical research designs and protocols for study-
of generative-agent-based modeling for imitating                                                   ing real-world social networks by simulating users
user behavior on social networks.  First, we pro-                                                 with generative-agent-based models. Although we
vided a formal framework for building realistic                                                    established general formal models and initial em-
TWONs. Second, we instantiated this framework                                                          pirical insights, further research is required. The
with the purpose of mimicking user behavior based                                                heterogeneous nature of social networks suggests
on data from X in English and German.  Third,                                                        that discourse patterns can vary significantly be-
we benchmarked the empirical realism of agents,                                            tween different communities, each with its own
imitating actual users.                                                         linguistic norms, interaction styles, and argumen-
                                                        tation preferences (Gnach, 2017). This diversity
8.1  Key Recommendations                                                      presents challenges both methodologically and the-
Our empirical results provide several key recom-    oretically. Methodologically, there is uncertainty
mendations for conducting social simulations based    about whether LLMs are adequate to capture these
on generative-agent-based modeling:                 variations (Anderson et al., 2024) or if more spe-
   First, simulation models should be validated    cialized models tailored to specific communities
with respect to their empirical realism before con-   are needed. Theoretically, this leads to a broader
ducting simulations. Results of a simulation should    inquiry about whether social media discourse’s
always be put into perspective to the empirical re-   inherent heterogeneity necessitates a community-
alism of all components in the simulation.            specific modeling approach rather than universal
  Second, simulations should be performed in the   models.
                                        1148

## Страница 9

Limitations                                 However, it can also be used to spread one-sided
                                                propaganda, misleading information, or manipula-
We have already extensively discussed the limita-                                                           tive advertisements.
tions of our framework and experiments through-
out this paper, specifically in Section 7.4. What      Privacy and Consent Considerations: A signif-
should be added is that our limited quantitative    icant ethical concern in our study involves the use
experiments do not sufficiently answer considera-   of real user data from X to train models that sim-
tions regarding complex discourse quality metrics,    ulate individual behavior patterns. Although our
such as polarization into separate communities of    data set consists of publicly available posts from po-
users. So far, we have only simulated and analyzed     litical figures and public replies from regular users,
single-turn communicative behavior in isolation.   the individuals whose data we used did not pro-
However, our framework also allows us to assess    vide explicit informed consent for their communi-
more sophisticated metrics that span discussion    cation patterns to be replicated by generative mod-
threads and capture multi-turn conversational dy-    els. This raises important questions about digital
namics such as positional consistency, topic per-   privacy rights, even when dealing with public data.
sistence, and strategic adaptation to interlocutors.   The simulation of specific individuals’ posting and
Evaluating these properties requires different ex-   replying behaviors creates synthetic content that
perimental designs with longitudinal interaction   mimics their communication style, potentially en-
sequences, which we leave to future work.           abling the creation of convincing but fabricated
  Also, to what extent computational models cap-   posts that could be attributed to real people. This
ture nuanced variations in argumentation styles    capability poses risks of impersonation, identity
across different user communities would require    theft, misrepresentation, and potential damage to
qualitative evaluations, which we have not included    the reputation of the individuals whose behavior
in this paper. Discourse patterns can vary signifi-    patterns were learned by our models.
cantly between different communities, each with its                                                      Unfortunately, our research objectives, demon-
own linguistic norms, interaction styles, and argu-                                                           strating empirical realism/ecological validity of our
mentation preferences. This heterogeneity presents                                                      simulation, disallow the utilization of synthetic per-
both methodological and theoretical challenges.                                                  sonas instead of human user data. Creating fictional
From a methodological perspective, we must con-                                                   user profiles with diverse characteristics would
sider whether our current modeling approaches are                                                     eliminate privacy concerns, but without demonstrat-
sufficiently sophisticated to capture these varia-                                                  ing the validity of the simulation. We argue that
tions or if we need to develop more specialized,                                            you can only claim the applicability of findings pro-
community-specific models.  Theoretically, this                                              duced via social simulations to the real world once
opens up a broader question about the nature of                                          you have proven the empirical realism/ecological
social media discourse: Are social networks in-                                                          validity of your simulation. The key component for
herently so heterogeneous that meaningful model-                                             showing this is replicability on an individual level,
ing requires a community-by-community approach,                                           which requires real-world data from individuals.
rather than attempting to develop a universal model                                                    Synthetic personas cannot be used to prove empiri-
for online argumentation?                                                         cal realism, but real-world data is essential to prove
                                                    the empirical realism of synthetic personas. AndEthical Considerations
                                             once you prove the empirical realism of synthetic
As is typical for most AI methods, the modeling    personas with real-world data, you again have a suf-
approach presented in this paper is a dual-use tech-    ficiently similar replica of real-world users. Thus,
nology. While social simulation, more concretely,   you cannot have both: A valid and provable realis-
replication of social networks and imitation of so-    tic social simulation without using real-world user
cial media users, is primarily intended to be used    data to model agents and measure their empirical
to analyze social networks, the findings can also    realism. Thus, we decided not to publish either our
be used to adjust network mechanics, like ranking    data set or the fitted models of individual users. We
or filtering, which in turn influences public debate    only publish aggregated statistics that do not allow
and opinion formation of users on those networks.   one to draw conclusions on an individual user level.
Again, this can be used to improve debate quality   This hinders the replicability of results but respects
and contribute to well-informed opinion formation.   individual privacy.
                                        1149

## Страница 10

Acknowledgments                                      Parameter-efficient fine-tuning of large-scale pre-
                                                             trained language models.  Nature machine intelli-
We thank Christoph Hau, Simon Werner, and Kai       gence, 5(3):220–235.
Kugler for our constructive discussions.  This
                                            Abhimanyu Dubey, Abhinav Jauhri, Abhinav Pandey,
study was conducted with a financial contribu-                                                    Abhishek Kadian, Ahmad Al-Dahle, Aiesha Letman,
tion from the EU’s Horizon Europe Framework      Akhil Mathur, Alan Schelten, Amy Yang, Angela
(HORIZON-CL2-2022-DEMOCRACY-01-07) un-      Fan, et al. 2024. The llama 3 herd of models. arXiv
der grant agreement number 101095095.                 preprint arXiv:2407.21783.
                                                     Aleksandra Gnach. 2017. Social media and community
                                                              building: Creating social realities through linguistic
References                                                   interaction. In The Routledge handbook of language
                                                  and media, pages 190–205. Routledge.Abubakar Abid, Maheen Farooqi, and James Zou. 2021.
   Persistent anti-muslim bias in large language models.                                                     Charles R Harris, K Jarrod Millman, Stéfan J Van
   In Proceedings of the 2021 AAAI/ACM Conference                                                   Der Walt, Ralf Gommers, Pauli Virtanen, David Cour-
  on AI, Ethics, and Society, pages 298–306.                                                       napeau, Eric Wieser, Julian Taylor, Sebastian Berg,
                                                        Nathaniel J Smith, et al. 2020. Array programmingBarrett R Anderson, Jash Hemant Shah, and Max                                                        with numpy. nature, 585(7825):357–362.   Kreminski. 2024. Homogenization effects of large
  language models on human creative ideation.  In                                             Edward  J Hu,  Phillip  Wallis, Zeyuan Allen-Zhu,
  Proceedings of the 16th conference on creativity &                                                    Yuanzhi Li, Shean Wang, Lu Wang, Weizhu Chen,
   cognition, pages 413–425.                                                                    et al. 2021. Lora: Low-rank adaptation of large lan-
                                                     guage models. In International Conference on Learn-
Lisa P Argyle, Ethan C Busby, Nancy Fulda, Joshua R                                                          ing Representations.
   Gubler, Christopher Rytting, and David Wingate.
  2023.  Out of one, many: Using language mod-   Basel Al-Sheikh Hussein. 2012. The sapir-whorf hy-
   els to simulate human samples. Political Analysis,      pothesis today. Theory and Practice in Language
   31(3):337–351.                                            Studies, 2(3):642–646.
Francesco Barbieri,  Jose Camacho-Collados, Luis   Ben Hutchinson, Vinodkumar Prabhakaran, Emily Den-
   Espinosa-Anke, and Leonardo Neves. 2020. TweetE-       ton, Kellie Webster, Yu Zhong, and Stephen Denuyl.
   val:Unified Benchmark and Comparative Evaluation      2020.  Social biases in nlp models as barriers for
   for Tweet Classification. In Proceedings of Findings      persons with disabilities. In Proceedings of the 58th
   of EMNLP.                                        Annual Meeting of the Association for Computational
                                                                Linguistics, pages 5491–5501.
Corey H Basch, Zoe Meleo-Erwin, Joseph Fera, Christie
   Jaime, and Charles E Basch. 2021. A global pan-   Maik Larooij and Petter Törnberg. 2025. Validation is
  demic in the time of viral memes: Covid-19 vaccine       the central challenge for generative social simulation:
   misinformation and disinformation on tiktok. Human      a critical review of llms in agent-based modeling.
   vaccines & immunotherapeutics, 17(8):2373–2377.        Artificial Intelligence Review, 59(1):15.
Bradley Carron-Arthur, John A Cunningham, and Kath-   Chin-Yew Lin and Franz Josef Och. 2004. Orange: a
   leen M Griffiths. 2014. Describing the distribution      method for evaluating automatic evaluation metrics
   of engagement in an internet support group by post       for machine translation.  In COLING 2004: Pro-
   frequency: A comparison of the 90-9-1 principle and      ceedings of the 20th International Conference on
   zipf’s law. Internet Interventions, 1(4):165–168.         Computational Linguistics, pages 501–507.

Serina Chang, Alicja Chaszczewicz, Emma Wang,    Ilya Loshchilov, Frank Hutter, et al. 2017.  Fixing
  Maya Josifovska, Emma Pierson, and Jure Leskovec.      weight decay regularization in adam. arXiv preprint
   2025. Llms generate structurally realistic social net-      arXiv:1711.05101, 5.
  works but overestimate political homophily. In Pro-
   ceedings of the International AAAI Conference on    Bolei Ma, Berk Yoztyurk, Anna-Carolina Haensch, Xin-
  Web and Social Media, volume 19, pages 341–371.      peng Wang, Markus Herklotz, Frauke Kreuter, Bar-
                                                         bara Plank, and Matthias Assenmacher. 2025. Algo-
Yun-Shiuan Chuang, Agam Goyal, Nikunj Harlalka,      rithmic fidelity of large language models in generat-
   Siddharth Suresh, Robert Hawkins, Sijia Yang, Dha-      ing synthetic german public opinions: A case study.
  van Shah, Junjie Hu, and Timothy Rogers. 2024. Sim-      In Proceedings of the 63rd Annual Meeting of the
   ulating opinion dynamics with networks of llm-based      Association for Computational Linguistics (Volume
   agents. In Findings of the Association for Computa-      1: Long Papers), pages 1785–1809.
   tional Linguistics: NAACL 2024, pages 3326–3346.
                                         Wes McKinney  et  al. 2011.   pandas:  a founda-
Ning Ding, Yujia Qin, Guang Yang, Fuchao Wei,       tional python library for data analysis and statistics.
  Zonghan Yang, Yusheng Su, Shengding Hu, Yulin      Python for high performance and scientific comput-
  Chen, Chi-Min Chan, Weize Chen,  et  al. 2023.       ing, 14(9):1–9.
                                        1150

## Страница 11

Simon Münker. 2025a. Cultural bias in large language    Gabriel Weimann and Natalie Masri. 2023. Research
  models: Evaluating ai agents through moral question-       note: Spreading hate on tiktok. Studies in conflict &
   naires. In Proceedings of 0 th Moral and Legal AI       terrorism, 46(5):752–765.
  Alignment Symposium, page 61.
                                 G Weiss. 1999. Multiagent systems: a modern approach
Simon Münker. 2025b. Political bias in llms: Unaligned       to distributed artificial intelligence. MIT press.
  moral values in agent-centric simulations. Journal
   for Language Technology and Computational Lin-   Thomas Wolf, Lysandre Debut, Victor Sanh, Julien
   guistics, 38(2):125–138.                           Chaumond, Clement Delangue, Anthony Moi, Pier-
                                                                        ric Cistac, Tim Rault, Remi Louf, Morgan Funtowicz,
Simon Münker and Fabio Sartori. 2026. Guardrail Vul-       et al. 2020. Transformers: State-of-the-art natural
   nerabilities in Open-Source Language Models: Impli-      language processing. In Proceedings of the 2020 con-
   cations for Democratic Discourse and Marginalized       ference on empirical methods in natural language
  Communities. In Proceedings of the 59th Hawaii       processing: system demonstrations, pages 38–45.
   International Conference on System Sciences.
                                          Yu Yu, Chao-Han Huck Yang,  Jari Kolehmainen,
Paul D  O’Brien  and  Richard C  Nicol.  1998.      Prashanth G  Shivakumar,  Yile  Gu,  Sungho
  Fipa—towards a standard for software agents. BT     Ryu Roger Ren, Qi Luo, Aditya Gourav, I-Fan Chen,
  Technology Journal, 16:51–59.                        Yi-Chieh Liu, et al. 2023.  Low-rank adaptation
                                                          of large language model rescoring for parameter-Marios Papachristou and Yuan Yuan. 2025. Network                                                                      efficient speech recognition. In 2023 IEEE Automatic  formation and dynamics among multi-llms. PNAS                                                    Speech Recognition and Understanding Workshop   nexus, 4(12):pgaf317.                                                    (ASRU), pages 1–8. IEEE.
Kishore Papineni, Salim Roukos, Todd Ward, and Wei-
                                               Xinyang Zhang, Yury Malkov, Omar Florez, Serim   Jing Zhu. 2002. Bleu: a method for automatic evalu-
                                                           Park, Brian McWilliams, Jiawei Han, and Ahmed   ation of machine translation. In Proceedings of the
                                                         El-Kishky. 2023. Twhin-bert: A socially-enriched  40th annual meeting of the Association for Computa-
                                                             pre-trained language model for multilingual tweet   tional Linguistics, pages 311–318.
                                                              representations at twitter. In Proceedings of the 29th
Joon Sung Park, Joseph O’Brien, Carrie Jun Cai, Mered-    ACM SIGKDD conference on knowledge discovery
   ith Ringel Morris, Percy Liang, and Michael S Bern-     and data mining, pages 5597–5607.
   stein. 2023. Generative agents: Interactive simulacra
                                                Lianmin Zheng, Wei-Lin Chiang, Ying Sheng, Siyuan   of human behavior. In Proceedings of the 36th an-
                                                   Zhuang, Zhanghao Wu, Yonghao Zhuang, Zi Lin,  nual acm symposium on user interface software and
                                                Zhuohan Li, Dacheng Li, Eric Xing, et al. 2023.   technology, pages 1–22.
                                                      Judging llm-as-a-judge with mt-bench and chatbot
Fabian Pedregosa, Gaël Varoquaux, Alexandre Gram-      arena. Advances in Neural Information Processing
   fort, Vincent Michel, Bertrand Thirion, Olivier Grisel,      Systems, 36:46595–46623.
  Mathieu Blondel, Peter Prettenhofer, Ron Weiss, Vin-
   cent Dubourg, et al. 2011.  Scikit-learn: Machine
   learning in python. the Journal of machine Learning
   research, 12:2825–2830.

Na Sun, Patrick Pei-Luen Rau, and Liang Ma. 2014.
  Understanding lurkers in online communities: A
   literature review. Computers in Human Behavior,
  38:110–117.

Lindia Tjuatja, Valerie Chen, Tongshuang Wu, Ameet
  Talwalkwar, and Graham Neubig. 2024. Do llms
   exhibit human-like response biases? a case study in
  survey design. Transactions of the Association for
  Computational Linguistics, 12:1011–1026.

Pauli Virtanen, Ralf Gommers, Travis E Oliphant, Matt
  Haberland, Tyler Reddy, David Cournapeau, Ev-
  geni Burovski, Pearu Peterson, Warren Weckesser,
  Jonathan Bright, et al. 2020. Scipy 1.0: fundamental
   algorithms for scientific computing in python. Na-
   ture methods, 17(3):261–272.

Yanbo Wang, Qingfei Min, and Shengnan Han. 2016.
  Understanding the effects of trust and risk on indi-
   vidual behavior toward social media platforms: A
   meta-analysis of the empirical evidence. Computers
   in Human Behavior, 56:34–44.
                                        1151
