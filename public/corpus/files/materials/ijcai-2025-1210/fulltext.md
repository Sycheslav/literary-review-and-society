---
id: ijcai-2025-1210-text
type: material
title: Mechanism Design for Large Language Models (Extended Abstract)
work_id: ijcai-2025-1210
source_url: https://ijcai.org/proceedings/2025/1210.pdf
retrieved_at: '2026-10-27'
conversion: pdf_text_extraction
quality_note: Текст извлечён из PDF с сохранением номеров страниц. Порядок колонок,
  таблицы, формулы и подписи могут быть искажены; рисунки доступны по ссылке на PDF.
  Это текстовая конверсия, не визуально эквивалентный оригинал.
language: original
sha256_text: 3c6654211a58767eb3db3ce8124ea87e35456dfd6fc49c32710d15195085d093
---

> Источник: [https://ijcai.org/proceedings/2025/1210.pdf](https://ijcai.org/proceedings/2025/1210.pdf). Текст извлечён из PDF с сохранением номеров страниц. Порядок колонок, таблицы, формулы и подписи могут быть искажены; рисунки доступны по ссылке на PDF. Это текстовая конверсия, не визуально эквивалентный оригинал.

## Страница 1

                           Proceedings of the Thirty-Fourth International Joint Conference on Artiﬁcial Intelligence (IJCAI-25)
                                                                   Sister Conferences Best Papers Track



     Mechanism Design for Large Language Models (Extended Abstract)∗

       Paul D¨utting1 , Vahab Mirrokni1 , Renato Paes Leme1 , Haifeng Xu1,2 , Song Zuo1
                                     1Google Research
                                        2University of Chicago
             {duetting,mirrokni,renatoppl,szuo}@google.com, haifengxu@uchicago.edu



                  Abstract                             the right to have their content displayed. A simple design
                                                                               is to collect bids from advertisers and let the highest bidder
   We  investigate  auction  mechanisms  for  AI-        choose whatever content they wish to publish in that space.
     generated content, focusing on applications like ad        While simple, this design does not exploit the ﬂexibility of
     creative generation. In our model, agents’ prefer-      LLMs which is to combine different concepts in a creative
     ences over stochastically generated content are en-        way.
    coded as large language models (LLMs). We pro-                                                            Consider this example. First, we ask an LLM to produce
    pose an auction format that operates on a token-                                                                     different ads for the ﬁctitious Stingray Resort and the equally
     by-token basis, and allows LLM agents to inﬂu-                                                                   ﬁctitious Maui Airlines:
    ence content creation through single dimensional
     bids. We formulate two desirable incentive prop-              • “Experience the magic of Hawaii at Stingray Resort,
      erties and prove their equivalence to a monotonic-            where stunning views, luxurious accommodations, and
      ity condition on output aggregation. This equiva-              endless activities await. Book your stay today and cre-
     lence enables a second-price rule design, even ab-              ate unforgettable memories in the heart of paradise.”
     sent explicit agent valuation functions. Our design              • “Fly to Hawaii with Maui Airlines and experience the
      is supported by demonstrations on a publicly avail-             beauty of the Aloha State. We offer affordable ﬂights to
     able LLM.                                                              all the major islands, so you can start your Hawaiian va-
                                                                    cation sooner. Book your ﬂight today and let the island
                                                                                spirit take over!”
1  Introduction
                                                         For that use case, however, the LLM is ﬂexible enough to
In the current web ecosystem, auctions are the primary mech-
                                                         produce a joint ad for both:
anism used to decide which ads (and commercial content
more broadly) are displayed to users [Edelman et al., 2007;        • “Fly to paradise with Maui Airlines and experience the
Varian, 2007]. In these auctions, advertisers bid for the oppor-        magic of Hawaii at Stingray Resort.  Stunning views,
tunity to display their ad creatives alongside organic content.         luxurious accommodations, and endless activities await.
Many of the web formats such as text, banners, video, apps,       Book your dream vacation today and create unforget-
... have their own subtleties which led to the development of          table memories.”
new auction tools to handle them. Our goal in this paper is to                                               One can envision an auction mechanism that allows both
investigate auction mechanisms to support the emerging for-                                                              Stingray Resort and Maui Airlines to submit their LLMs and
mat of AI-generated content. More speciﬁcally, we explore                                                                    bids, with these inputs determining their prominence in the
the use of auctions as a tool for inﬂuencing the output of large                                                           ﬁnal outcome.1
language models (LLMs) (e.g., [Brown et al., 2020]).
  We consider a situation where a certain space in the web                                                         1.1  Unique Challenges
(which could be a part of a webpage, an UI element of an
AI-chatbot, the dialog of a certain character in a video or a   LLMs [Brown et al., 2020; Thoppilan et al., 2022; Google
game, etc.) is designated for commercial content and differ-     et al., 2023] are an emerging technology with new and un-
ent advertisers can bid to inﬂuence the content in that space.    conventional aspects, many of which have direct implica-
Each advertiser has an LLM that can generate content for that     tions to auction design  (e.g., how preferences are repre-
space, and is willing to pay a certain amount of money for    sented/expressed). Our goal is to identify some of the key
                                                              challenges and take a ﬁrst step in designing mechanisms to
   ∗Original paper:  Paul D¨utting, Vahab Mirrokni, Renato Paes    address them:
Leme, Haifeng Xu, and Song Zuo. Mechanism design for large lan-
guage models. In Proceedings of the ACM Web Conference 2024,       1While this work’s main focus is to create ad creatives that merge
pages 144–155, 2024. The work of Haifeng Xu was done as Visit-     content from different advertisers, our designed auction mechanism
ing Faculty at Google Research.                                          for merging LLM outputs could also be used in other contexts.




                                                  10885

## Страница 2

                           Proceedings of the Thirty-Fourth International Joint Conference on Artiﬁcial Intelligence (IJCAI-25)
                                                                   Sister Conferences Best Papers Track


   • Modelling and Expressing Preferences. Auction the-      This approach may seem counterintuitive initially, as ad-
     ory typically models preferences via value functions that     vertisers typically focus on the ﬁnal generated text rather than
     assign a value to each outcome. LLMs, however, as    individual word choices. This seems to suggest a dynamic
     generative models, do not directly assign values.  In-    planning of the generated token sequence. However, existing
     stead, they succinctly encode preferences over outcomes   LLMs do not reason about full pieces of text, nor do they plan
     within a stateless neural network model that predicts    ahead; instead, their preferences are expressed as desired dis-
     continuation probabilities.                                    tributions over merely the next token. In other terms, we can
                                                                think of an LLM as a succinct distillation of an agent’s com-   • Necessity of Randomization. LLMs crucially rely on
                                                             plex combinatorial preferences over sequences of tokens into     randomization. When forced to output tokens determin-
                                                           a generative token-by-token model.4      istically, LLMs often have a worse performance com-
                                                    The problem of aggregating LLMs forces the designer     pared to situations that sample from a distribution (see,
                                                                   to understand the preferences of the agents away from the      e.g., [Holtzman et al., 2019], for a performance com-
                                                                         distilled LLM. This appears to be a very difﬁcult problem.     parison of different decoding strategies). Therefore, an
                                                                Speciﬁcally, we believe it is implausible or at least impracti-     auction that aggregates LLM outputs should preferably
                                                                   cal to assume an individual agent can meaningfully manipu-     also output distributions.
                                                                         late the distribution over tokens at any given stage, to direct
   • Technical Compatibility.  Auction solutions should    the produced text to a more preferred one. Our auction for-
    be compatible with current LLM technology, utilizing    mulation seeks to strike a balance: By truthfully revealing the
     readily available information and integrating seamlessly.   LLM to the designer, the agent gives the auction mechanism
     Ideally, the allocation and payments should be obtained    a hint as to what their preferred distribution is. The bids, in
    from simple manipulations of the LLM outputs.              turn, can be used to tradeoff between agents, and in particular
   • Computational Efﬁciency. LLM models are expensive    help the designer determine their relative weights.
     to query, so the auction computation should not add too    Simple and Robust Token Auctions.  Motivated by the
    much overhead.  In particular, auctions should not in-    challenges in modeling agents’ preferences over generated
     crease the number of calls to inference the models be-     distributions, we take a robust design approach aiming for to-
    yond the minimum necessary.                          ken auctions that provide desirable incentive properties, while
                                                        imposing minimal assumptions on the agents’ preferences
1.2  Our Contributions                                  over distributions.
The Token Auction Model.  Our ﬁrst contribution is a for-       Speciﬁcally, we model agents’ preferences as entailing par-
malism (“The Token Auction Model”) for studying this prob-      tial orders over distributions.  Based on this partial prefer-
lem.  Tokens are the units making up sentences and para-    ence order5, we formulate two desirable incentive properties,
graphs.2 Examples of tokens include (sub-)words, symbols,    which we consider minimal requirements:
numbers, and special tokens indicating the beginning and                                                                              • Payment monotonicity: Given two different bids by the
ending of the text. In particular, any piece of text (potentially                                                       same agent, a ﬁnal distribution is closer to the desired
incomplete) can be represented as an array of tokens, and any                                                                          distribution if and only if the payment is higher.
array of tokens also encodes a piece of text.
                                                                              • Consistent aggregation: If for two different bids of the  One salient feature of the state-of-the-art LLMs is that they
                                                       same agent, the ﬁnal distribution is closer to the pre-are stateless, i.e., they maintain no internal memory or state.
                                                                       ferred distribution for some bids of the other agents, thenInstead, they simply map a preﬁx string to a distribution over
                                                                                                     it should be so for all bids of the other agents.the next token. The output is then created in an autoregres-
sive manner. Given an input prompt, the output is generated    We show that any mechanism with these two properties is
by repeatedly feeding the current sequence of tokens into the     strategically equivalent to a mechanism that satisﬁes a mono-
LLM, sampling a continuation token, and appending it to the     tonicity requirement on the distribution aggregation function.
sequence of tokens.                              We then investigate whether it is possible to equip such dis-
  The proposed token auction operates on a token-by-token     tribution aggregation functions with payment rules that sat-
basis, and serves to aggregate several LLMs to generate a     isfy additional incentive properties.  Speciﬁcally, we inves-
joint output. We assume the designer has access to algorith-     tigate whether such aggregation rules admit an analogue of
mic LLM agents represented by their respective text genera-    the second-price payment rule.  In the single-item second-
tion functions (the functions that map a sequence of tokens     price (or Vickrey) auction [Vickrey, 1961], the payment cor-
to a distribution over the next token). In addition, we allow    responds to the critical bid where an agent transitions from
each LLM agent to submit a single dimensional bid. The auc-    losing to winning. To port this notion to our setting, we show
tion output will be an aggregated distribution together with a     that under robust preferences, any monotone aggregation rule
payment rule that deﬁnes payments for each agent.3            can be written as a distribution over deterministic allocations
                                                      from bids to tokens such that there is a critical bid where the
   2More generally, one can consider tokens forming parts of im-
ages [Ramesh et al., 2021; Yu et al., 2022] and videos [Sun et al.,       4See our discussion in the original paper for additional support
2019]. For the purpose of this paper, we stick with text generation.      for the stateless approach.
   3See our discussion later this section on the rationale of the indi-         5Partial orders are more general than total orders, and hence our
rect mechanism formulation.                                     key results apply to any complete preference order model.




                                                  10886

## Страница 3

                           Proceedings of the Thirty-Fourth International Joint Conference on Artiﬁcial Intelligence (IJCAI-25)
                                                                   Sister Conferences Best Papers Track


allocation transitions from a less preferred to a more preferred    Related LLM Research.  Our work shares some similari-
token. Such a critical bid then serves as a natural candidate     ties with the literature on ﬁne-tuning LLMs, with reinforce-
for a payment rule. This hence leads to an analogue of the    ment learning from human feedback (RLHF) as a repre-
second-price auction for our token auction model that only re-     sentative approach [Wei et al., 2021; Bakker et al., 2022;
quires ordinal preferences. The resulting class of auctions is   Ouyang et al., 2022; Bai et al., 2022]. At a high level, ﬁne-
applicable whenever the agent valuations are compatible with    tuning and RLHF seek to align a generally pre-trained LLM
the partial order, yielding robust incentives for all of these.      with certain desirable behaviors. This is in spirit analogous
                                                                   to our goal of designing LLMs to better align with a groupDesigning Aggregation Functions.  We then move to de-
                                                               of agents’ overall preferences. However, our research chal-signing concrete aggregation functions. Our approach con-
                                                              lenges and methods are both different from those in the ﬁne-siders aggregated loss functions inspired by state-of-the-art
                                                             tuning literature. Speciﬁcally, ﬁne-tuning reﬁnes the under-LLM training, and derives optimal distribution aggregation
                                                                lying model’s parameters whereas our approach is one-layerfunctions that minimizes such aggregated loss functions.
                                                    up and directly aggregates the token distributions from mul-  We focus on speciﬁc forms of aggregated loss functions
                                                                          tiple models. The main challenge we address is the potentialbased on KL-divergence, a commonly used loss function in
                                                                 incentive misalignment while eliciting LLM agents’ prefer-LLMs. We consider two natural formulations inspired by cur-
                                                                ences, whereas human labelers or other models that generaterent LLM training, and show that the corresponding optimal
                                                         reward feedback for RLHF are assumed to be genuine and doaggregation rules are the weighted (log-space) convex com-
                                                             not misrepresent their own preferences.bination of the target distributions from all participants.
  The linear and log-linear aggregation rules we identify     The literature on in-context learning [Brown et al., 2020;
have different pros and cons. Both share the advantage that   Wei et al., 2022; Wei et al., 2023] is similar to us in the
they are optimal for the respective aggregated loss functions.    sense that this approach also does not change the model pa-
The linear rule turns out to be monotone with respect to ro-    rameters. A main difference to our work is that this litera-
bust preferences, and is therefore compatible with the robust     ture seeks to inﬂuence token distributions by conditioning on
incentives approach. However, the log-linear rule is not.         better-generated preﬁx contexts, whereas we directly aggre-
                                                               gate distributions from multiple LLM agents.
Demonstration.  We conclude with demonstrations to sup-
port our token auction formulation, obtained by prompt-                                                       Connections in Mechanism Design.  Our work is related
tuning of a publicly available LLM. A two-advertiser demon-                                                                   to the literature on (combinatorial) public projects [Papadim-
strative example is considered, under both the linear and log-                                                                         itriou et al., 2008; Dughmi, 2011]. The connection is that
linear aggregation rules. We show how the combined output                                                      one can view the output of the aggregated LLM in our sit-
varies as a function of λ = b1/(b1+b2), where b1 and b2 are the    uation as a public project that beneﬁts the agents to differ-
advertisers’ bids. Both approaches lead to meaningful and                                                                ent degrees.  Similar to these earlier studies, a core chal-
interpretable texts that smoothly transition from favoring one                                                            lenge in our problem is to elicit preferences about the public
to favoring another advertiser, with a joint ad produced for                                                                  project from unknown agents. However, the design problem
intermediate values of λ.                                                                   in our case is fundamentally different — we choose a high-
Discussion/Design Choices.  An alternative to our approach    dimensional distribution from an RT space with only partial
of designing an indirect mechanism would be to aim for a di-    knowledge about agents’ preferences, whereas previous work
rect mechanism. Such a mechanism, instead of asking agents    has focused on the problem of choosing from a discrete (often
for a scalar bid along with query access to the agents’ LLMs,    exponentially large) set with clear agent valuation functions
would elicit the agents’ full preferences directly. However,    [Papadimitriou et al., 2008; Dughmi, 2011].
this appears unrealistic in our new domain due to multiple      Another related stream of work includes [Freeman et al.,
reasons: (1) Allocation outcomes in our setting are a high-    2019; Goel et al., 2019], which studies the problem of truth-
dimensional distribution, whereas a classic mechanism’s allo-     fully aggregating budget proposals. Their mechanisms out-
cation is typically a subset of items, and often a single item in    put a distribution over budgets that best serves the popula-
tractable setups. (2) While it is reasonable in the classic setup     tion, just like our mechanisms output distributions over to-
to elicit a valuation for an item or a subset of items, it does    kens. However, the objectives and techniques between our
not appear realistic to elicit a high-dimensional utility func-    work and theirs are both different.  First, their problem is
tion over all possible token distributions.  (3) Eliciting full    mechanism design without money, whereas our problem has
preferences over any token distribution would require solving    monetary transfers involved. A direct consequence of this
a problem that is strictly harder than what current LLMs are     ﬁrst difference is that their mechanisms will treat every par-
trained to do (namely, merely output the most preferred dis-     ticipant with equal weight, whereas the weights of our partic-
tribution). This level of complexity might go beyond current     ipants are determined by their bids. Second, the research on
technological capabilities and would likely be computation-     truthful budget proposal aggregations typically assumes ex-
ally inefﬁcient.                                                           plicit valuation functions (e.g., l1 distance between preferred
                                                      and output distributions), under which the VCG mechanism is
1.3  Additional Related Work                                 truthful. Their main research question hence is to study addi-
To the best of our knowledge, the exact research question and     tional properties of the mechanisms such as Pareto-efﬁciency
our approaches here have not been previously studied. How-    and certain fairness properties [Freeman et al., 2019]. As-
ever, our work is indeed connected to a few lines of research.    suming such an explicit valuation function does not appear




                                                  10887

## Страница 4

                           Proceedings of the Thirty-Fourth International Joint Conference on Artiﬁcial Intelligence (IJCAI-25)
                                                                   Sister Conferences Best Papers Track


     λ      Linear aggregation function qKL                                              Log-linear aggregation function ¯qKL
       1     Alpha Airlines: Your ticket to paradise.
      0.75   Alpha Airlines: Fly to Hawaii and experience the beauty of the islands with    Feel the magic of Hawaii with a ﬂight on Alpha Airlines, now offering 20%
                 aloha.                                                                              off all ﬂights when you book with us today!
              Beta Resorts: Stay at our resorts and enjoy the best of Hawaii.
       0.6    Alpha Airlines ﬂies you to Hawaii, where you can enjoy a week-long stay    Experience the magic of Hawaii with a ﬂight on Alpha Airlines, now offer-
                   at the Beta resort for just $1000.                                            ing 20% off all ﬂights when you book with us today!
      0.55   Alpha Airlines ﬂies you to Hawaii, where you can enjoy a week-long stay    Escape to the tropical paradise of Hawaii with [Alpha Airlines]!
                   at the Beta resort.
       0.5    Alpha Airlines ﬂies you to Hawaii, where you can enjoy a beautiful sunset    Experience the magic of Hawaii with a stay at the luxurious [Beta Resort]
              on the beach. Stay 3 nights and get the 4th free at the Beta Resort.           and a refreshing ﬂight on [Alpha Airlines].
      0.45    Fly Alpha Airlines to sunny Hawaii and enjoy the secluded beaches and    Experience the magic of Hawaii with a stay at the luxurious [Beta Resort]
                 private lagoons of the Royal Hawaiian Beta Resort.                       and a special ﬂight offer from [Alpha Airlines].
       0.4     Fly Alpha Airlines to sunny Hawaii and enjoy the ﬁrst-class treatment that    Experience the magic of Hawaii at the [Beta Resort], where you’ll feel like
                awaits you at Beta Resort, all for one low price.                              you’re in a tropical paradise.
      0.25    Experience the magic of Hawaii at the Beta Resort, where the sun shines    Experience the magic of Hawaii at the Beta Resort, where you’ll be pam-
                 brighter and the waves crash louder — book your stay today with our exclu-    pered like royalty and surrounded by breathtaking beauty.
                 sive 20% off discount!
       0      Hawaii’s Beta Resort: a paradise where the sun shines brighter, the waves sing sweeter, and the sand feels softer.

                       Table 1: Text generation from two aggregation functions with different λ = b1/(b1 + b2).


realistic in our problem, so our core research question is to    2.1  Setups
design robust mechanisms that enjoy good incentive proper-   We illustrate our method with a co-marketing example here
ties simultaneously for a broad range of valuation functions.     (see original paper for a competing brands example), where
  From this perspective, our work also bears some similarity    two agents would like to advertise for their brands, “Alpha
to the rich literature on robust mechanism design. Most of    Airlines” and “Beta Resort” respectively, regarding a shared
this literature still assume existence of value functions with     topic “Hawaii.” We intentionally choose ﬁctitious brands in
uncertainty modeled by Bayesian beliefs or in a max-min    order to avoid the model directly retrieving any existing ads.
sense [Bergemann and Morris, 2005; Bergemann and Morris,   We use the brand names “Alpha” and “Beta” that do not have
2012; Roughgarden and Talgam-Cohen, 2016; Carroll, 2015;    strong meanings to minimize any potential hallucination, as
D¨utting et al., 2019]. However, assuming such a valuation   we are using a common purposed LLM that is not optimized
function over tokens or their distributions does not appear re-     for our task. Each agent is given the following prompt:
alistic in creatives generation, thus our model is more similar                                                       “You are an expert of writing texts that naturally
to a worst-case style consideration during which we only as-                                                           combines two ads together. Your choice of words
sume partial (“obvious”) preferences.                                                           and sentences is full of artistic ﬂair.
Follow-Up Work.  Several papers follow-up on our work,        Write a one-sentence ad for                   .”
by studying mechanism design problems for LLMs. [Dubey                                                        Agent A uses “a ﬂight to Hawaii using [Alpha Airlines]”
et al., 2024] consider bidders that bid for placement of their                                                                   to ﬁll the blank, while agent B uses “a vacation in Hawaii
content within a summary generated by an LLM. [Soumalias     at the [Beta Resort]”. The ﬁrst two sentences in the prompt
et al., ] design a truthful mechanism that generates several                                                    aim to improve the quality of the ad generation through as-
samples from a reference LLM, and incentivizes bidders to    signing roles (see, for example, [Wu et al., 2023]). A natural
truthfully reveal their preferences. [Mordo et al., 2024] con-                                                              question is whether the proposed method can adjust the com-
sider sponsored question answering, in which an organic an-                                                             bining strategy according to the context. Since in both the
swer to a search query is fused with an ad to create a spon-                                                                     linear aggregation rule qKL and the log-linear aggregation rule
sored answer, and advertisers bid on the sponsored answers.       ¯qKL, there is only one degree of freedom, we parameterize the
                                                            response by λ = b1/(b1+b2).
2  Demonstration                                                         2.2  Results
We implement the aggregation functions we proposed and   The results for the co-marketing example are listed in Table 1,
discuss the examples they produce. Off-the-shelf LLMs gen-    where from top to bottom, the value of λ decreases from 1 to
erate full text passages. In our case, we need to peek at the     0. As we can see for both aggregation functions, the gener-
internal states of LLMs (the probability distributions over to-    ated texts roughly follow the pattern of “only Alpha Airlines”
kens) at each token generation stage.  Therefore, we use a   →“both Alpha Airlines and Beta Resort” →“only Beta Re-
custom version of the Google Bard model with a modiﬁed in-     sort” when λ decreases. This is expected, as λ going from 1
ference method that allows access to the token distributions.      to 0 corresponds to b2 increasing from 0 to ∞with b1 ﬁxed.
   Starting from the same base model, we simulate cus-   The thresholds of pattern changes are 0.75 and 0.4 for the
tomized LLMs for different agents by agent speciﬁc prompt-     linear aggregation, and 0.5 and 0.45 for the log-linear aggre-
tuning. A key advantage of simulating LLM agents with dif-     gation. We emphasize that the example is generated with a
ferent prompts is the ability to use a single LLM, making mul-    general purposed LLM, and it is reasonable to believe that
tiple queries with different prompts instead of serving multi-    the performance can be improved with proper ﬁne-tuning for
ple LLMs concurrently.                                         the speciﬁc task at hand.




                                                  10888

## Страница 5

                           Proceedings of the Thirty-Fourth International Joint Conference on Artiﬁcial Intelligence (IJCAI-25)
                                                                   Sister Conferences Best Papers Track

Acknowledgments                                       Conference on Knowledge Discovery and Data Mining,
                                                            pages 713–722, 2024.
We thank Dirk Bergemann, Marina Halac, Philipp Strack, El-
liot Lipnowski, Yang Cai, Vasilis Syrgkanis, Negin Gorezaei,    [Dughmi, 2011] Shaddin Dughmi. A truthful randomized
Ido Cohen, Yoav Nagel, Yael Shemesh as well as the partic-      mechanism for combinatorial public projects via convex
ipants of the Yale Economics Seminar, the Stanford MS&E       optimization. In EC 2011, pages 263–272, 2011.
Seminar, and the WWW 2024 conference for invaluable com-     [D¨utting et al., 2019] Paul D¨utting, Tim Roughgarden, and
ments and suggestions.                                            Inbal Talgam-Cohen. Simple versus optimal contracts. In
  We are especially grateful to Yong Cheng from Google       Proceedings of the 2019 ACM Conference on Economics
DeepMind for his expert guidance on the LLM-related details      and Computation, pages 369–387, 2019.
and literature.
                                                      [Edelman et al., 2007] Benjamin Edelman, Michael Ostro-
                                                                  vsky, and Michael Schwarz.  Internet advertising and the
References                                                    generalized second-price auction: Selling billions of dol-
[Bai et al., 2022] Yuntao Bai, Andy Jones, Kamal Ndousse,        lars worth of keywords.  American Economic Review,
                                                              97(1):242–259, 2007.  Amanda Askell, Anna Chen, Nova DasSarma, Dawn
   Drain,  Stanislav Fort, Deep Ganguli, Tom Henighan,    [Freeman et al., 2019] Rupert Freeman, David M Pennock,
   Nicholas Joseph, Saurav Kadavath, Jackson Kernion, Tom      Dominik Peters, and Jennifer Wortman Vaughan. Truthful
   Conerly, Sheer El Showk, Nelson Elhage, Zac Hatﬁeld-       aggregation of budget proposals.  In Proceedings of the
  Dodds, Danny Hernandez, Tristan Hume, Scott John-      2019 ACM Conference on Economics and Computation,
   ston, Shauna Kravec, Liane Lovitt, Neel Nanda, Cather-       pages 751–752, 2019.
   ine Olsson, Dario Amodei, Tom B. Brown, Jack Clark,                                                          [Goel et al., 2019] Ashish Goel, Anilesh K Krishnaswamy,
  Sam McCandlish, Chris Olah, Benjamin Mann, and Jared                                                            Sukolsak Sakshuwong, and Tanja Aitamurto.  Knapsack
   Kaplan.  Training a helpful and harmless assistant with                                                                 voting for participatory budgeting. ACM Transactions on
   reinforcement learning from human feedback.  CoRR,                                                        Economics and Computation, 7(2), 2019.
   abs/2204.05862, 2022.
                                                        [Google et al., 2023] Google, Rohan Anil, Andrew M. Dai,
[Bakker et al., 2022] Michiel A. Bakker, Martin  J. Chad-                                                       Orhan Firat, Melvin Johnson, Dmitry Lepikhin, Alexandre
   wick, Hannah Sheahan, Michael Henry Tessler, Lucy                                                                  Passos, Siamak Shakeri, Emanuel Taropa, Paige Bailey,
   Campbell-Gillingham,  Jan  Balaguer,  Nat  McAleese,                                                            Zhifeng Chen, Eric Chu, Jonathan H. Clark, Laurent El
  Amelia Glaese, John Aslanides, Matt M. Botvinick, and                                                                 Shafey, Yanping Huang, Kathy Meier-Hellstern, Gaurav
   Christopher Summerﬁeld.  Fine-tuning language models                                                              Mishra, Erica Moreira, Mark Omernick, Kevin Robin-
   to ﬁnd agreement among humans with diverse preferences.                                                                   son, Sebastian Ruder, Yi Tay, Kefan Xiao, Yuanzhong
   In NeurIPS 2022, pages 38176–38189, 2022.                                                        Xu, Yujing Zhang, Gustavo Hernandez Abrego, Junwhan
[Bergemann and Morris, 2005] Dirk    Bergemann    and      Ahn, Jacob Austin, Paul Barham, Jan Botha, James Brad-
   Stephen Morris. Robust mechanism design. Economet-       bury, Siddhartha Brahma, Kevin Brooks, Michele Catasta,
   rica, pages 1771–1813, 2005.                           Yong Cheng, Colin Cherry, Christopher A. Choquette-
                                                         Choo, Aakanksha Chowdhery, Cl´ement Crepy, Shachi
[Bergemann and Morris, 2012] Dirk    Bergemann    and                                                           Dave, Mostafa Dehghani, Sunipa Dev, Jacob Devlin, Mark
   Stephen Morris.  Robust mechanism design: The role of                                                                             D´ıaz, Nan Du, Ethan Dyer, Vlad Feinberg, Fangxiaoyu
   private information and higher order beliefs, volume 2.                                                             Feng, Vlad Fienber, Markus Freitag, Xavier Garcia, Se-
  World Scientiﬁc, 2012.                                                                    bastian Gehrmann, Lucas Gonzalez, Guy Gur-Ari, Steven
[Brown et al., 2020] Tom B. Brown, Benjamin Mann, Nick      Hand, Hadi Hashemi, Le Hou, Joshua Howland, Andrea
   Ryder, Melanie Subbiah, Jared Kaplan, Prafulla Dhari-      Hu, Jeffrey Hui, Jeremy Hurwitz, Michael Isard, Abe It-
   wal, Arvind Neelakantan, Pranav Shyam, Girish Sastry,       tycheriah, Matthew Jagielski, Wenhao Jia, Kathleen Ke-
  Amanda Askell, Sandhini Agarwal, Ariel Herbert-Voss,        nealy, Maxim Krikun, Sneha Kudugunta, Chang Lan,
   Gretchen Krueger, Tom Henighan, Rewon Child, Aditya       Katherine Lee, Benjamin Lee, Eric Li, Music Li, Wei
  Ramesh, Daniel M. Ziegler, Jeffrey Wu, Clemens Win-        Li, YaGuang Li, Jian Li, Hyeontaek Lim, Hanzhao Lin,
    ter, Christopher Hesse, Mark Chen, Eric Sigler, Ma-      Zhongtao Liu, Frederick Liu, Marcello Maggioni, Aroma
   teusz Litwin, Scott Gray, Benjamin Chess, Jack Clark,      Mahendru, Joshua Maynez, Vedant Misra, Maysam Mous-
   Christopher Berner, Sam McCandlish, Alec Radford, Ilya       salem, Zachary Nado, John Nham, Eric Ni, Andrew Nys-
   Sutskever, and Dario Amodei. Language models are few-       trom, Alicia Parrish, Marie Pellat, Martin Polacek, Alex
   shot learners. pages 1877–1901, 2020.                         Polozov, Reiner Pope, Siyuan Qiao, Emily Reif, Bryan
                                                                     Richter, Parker Riley, Alex Castro Ros, Aurko Roy, Bren-
[Carroll, 2015] Gabriel Carroll. Robustness and linear con-
                                                         nan Saeta, Rajkumar Samuel, Renee Shelby, Ambrose
   tracts.   American Economic Review, 105(2):536–563,
                                                                 Slone, Daniel Smilkov, David R. So, Daniel Sohn, Si-
   2015.
                                              mon Tokumine, Dasha Valter, Vijay Vasudevan, Kiran Vo-
[Dubey et al., 2024] Avinava Dubey, Zhe Feng, Rahul Ki-        drahalli, Xuezhi Wang, Pidong Wang, Zirui Wang, Tao
   dambi, Aranyak Mehta, and Di Wang. Auctions with LLM      Wang, John Wieting, Yuhuai Wu, Kelvin Xu, Yunhan
   summaries.  In Proceedings of the 30th ACM SIGKDD      Xu, Linting Xue, Pengcheng Yin, Jiahui Yu, Qiao Zhang,




                                                  10889

## Страница 6

                           Proceedings of the Thirty-Fourth International Joint Conference on Artiﬁcial Intelligence (IJCAI-25)
                                                                   Sister Conferences Best Papers Track


   Steven Zheng, Ce Zheng, Weikang Zhou, Denny Zhou,       Chi, and Quoc Le. Lamda: Language models for dialog
   Slav Petrov, and Yonghui Wu. Palm 2 technical report,        applications. CoRR, abs/2201.08239, 2022.
   2023.                                                                  [Varian, 2007] Hal R. Varian.  Position auctions.  Interna-
[Holtzman et al., 2019] Ari Holtzman, Jan Buys, Li Du,        tional Journal of Industrial Organization, 25 (6):1163–
  Maxwell Forbes, and Yejin Choi.  The curious case of       1178, 2007.
   neural text degeneration. In International Conference on                                                                [Vickrey, 1961] William Vickrey.  Counterspeculation, auc-
   Learning Representations, 2019.                                                                           tions, and competitive sealed tenders. The Journal of Fi-
[Mordo et al., 2024] Tommy Mordo, Moshe Tennenholtz,       nance, 16(1):8–37, 1961.
  and Oren Kurland. Sponsored question answering. In Pro-                                                       [Wei et al., 2021] Jason Wei, Maarten Bosma, Vincent Zhao,
   ceedings of the ACM SIGIR International Conference on                                                             Kelvin Guu, Adams Wei Yu, Brian Lester, Nan Du, An-
   the Theory of Information Retrieval, 2024.                                                       drew M Dai, and Quoc V Le. Finetuned language mod-
[Ouyang et al., 2022] Long Ouyang, Jeffrey Wu, Xu Jiang,        els are zero-shot learners. In International Conference on
  Diogo Almeida, Carroll L. Wainwright, Pamela Mishkin,      Learning Representations, 2021.
  Chong Zhang, Sandhini Agarwal, Katarina Slama, Alex                                                       [Wei et al., 2022] Jason Wei, Xuezhi Wang, Dale Schuur-
   Ray, John Schulman, Jacob Hilton, Fraser Kelton, Luke                                                          mans, Maarten Bosma, brian ichter, Fei Xia, Ed Chi,
   Miller, Maddie Simens, Amanda Askell, Peter Welinder,                                                   Quoc V Le, and Denny Zhou. Chain-of-thought prompt-
   Paul F. Christiano, Jan Leike, and Ryan Lowe. Training                                                                ing elicits reasoning in large language models. In NeurIPS
   language models to follow instructions with human feed-                                                             2022, pages 24824–24837, 2022.
   back. In NeurIPS 2022, pages 27730–27744, 2022.
                                                       [Wei et al., 2023] Jerry Wei, Jason Wei, Yi Tay, Dustin Tran,
[Papadimitriou et al., 2008] Christos         Papadimitriou,                                                                Albert Webson, Yifeng Lu, Xinyun Chen, Hanxiao Liu,
  Michael Schapira, and Yaron Singer.  On the hard-                                               Da Huang, Denny Zhou, and Tengyu Ma.  Larger lan-
   ness of being truthful.  In FOCS 2008, pages 250–259,                                                         guage models do in-context learning differently. CoRR,
   2008.                                                              abs/2303.03846, 2023.
[Ramesh et al., 2021] Aditya  Ramesh,  Mikhail  Pavlov,                                              [Wu et al., 2023] Ning Wu, Ming Gong, Linjun Shou, Shin-
   Gabriel Goh, Scott Gray, Chelsea Voss, Alec Radford,                                                                ing Liang, and Daxin Jiang. Large language models are
  Mark Chen, and Ilya Sutskever. Zero-shot text-to-image                                                                   diverse role-players for summarization evaluation. arXiv
   generation. In ICML 2021, pages 8821–8831, 2021.                                                                    preprint arXiv:2303.15078, 2023.
[Roughgarden and Talgam-Cohen, 2016] Tim Roughgarden                                                      [Yu et al., 2022] Jiahui Yu, Yuanzhong Xu, Jing Yu Koh,
  and Inbal Talgam-Cohen. Optimal and robust mechanism                                                      Thang Luong, Gunjan Baid, Zirui Wang, Vijay Vasude-
   design with interdependent values. ACM Transactions on                                                                  van, Alexander Ku, Yinfei Yang, Burcu Karagol Ayan,
  Economics and Computation, 4 (3):1–34, 2016.                                                   Ben Hutchinson, Wei Han, Zarana Parekh, Xin Li, Han
[Soumalias et al., ] Ermis Soumalias, Michael Curry, and      Zhang, Jason Baldridge, and Yonghui Wu. Scaling autore-
  Sven Seuken. Truthful aggregation of llms with an appli-       gressive models for content-rich text-to-image generation.
   cation to online advertising. In Agentic Markets Workshop       Transactions on Machine Learning Research, 2022.
   at ICML 2024.
[Sun et al., 2019] Chen Sun, Austin Myers, Carl Vondrick,
  Kevin Murphy, and Cordelia Schmid. Videobert: A joint
  model for video and language representation learning. In
  ICCV 2019, pages 7464–7473, 2019.
[Thoppilan et al., 2022] Romal Thoppilan, Daniel De Fre-
    itas, Jamie Hall, Noam Shazeer, Apoorv Kulshreshtha,
  Heng-Tze Cheng, Alicia Jin, Taylor Bos, Leslie Baker,
  Yu Du, YaGuang  Li, Hongrae Lee,  Huaixiu Steven
  Zheng, Amin  Ghafouri,  Marcelo Menegali,  Yanping
  Huang, Maxim Krikun, Dmitry Lepikhin, James Qin,
  Dehao Chen,  Yuanzhong Xu,  Zhifeng Chen, Adam
   Roberts, Maarten Bosma,  Yanqi Zhou, Chung-Ching
  Chang, Igor Krivokon, Will Rusch, Marc Pickett, Kath-
   leen S. Meier-Hellstern, Meredith Ringel Morris, Tulsee
   Doshi, Renelito Delos Santos, Toju Duke, Johnny Soraker,
  Ben Zevenbergen, Vinodkumar Prabhakaran, Mark Diaz,
  Ben Hutchinson, Kristen Olson, Alejandra Molina, Erin
   Hoffman-John, Josh Lee, Lora Aroyo, Ravi Rajakumar,
  Alena Butryna, Matthew Lamm, Viktoriya Kuzmina, Joe
   Fenton, Aaron Cohen, Rachel Bernstein, Ray Kurzweil,
   Blaise Ag¨uera-Arcas, Claire Cui, Marian Croak, Ed H.




                                                  10890
