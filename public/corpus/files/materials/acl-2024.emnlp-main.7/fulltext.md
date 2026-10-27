---
id: acl-2024.emnlp-main.7-text
type: material
title: 'LLM-Based Agent Society Investigation: Collaboration and Confrontation in
  Avalon Gameplay'
work_id: acl-2024.emnlp-main.7
source_url: https://aclanthology.org/2024.emnlp-main.7.pdf
retrieved_at: '2026-10-27'
conversion: pdf_text_extraction
quality_note: Текст извлечён из PDF с сохранением номеров страниц. Порядок колонок,
  таблицы, формулы и подписи могут быть искажены; рисунки доступны по ссылке на PDF.
  Это текстовая конверсия, не визуально эквивалентный оригинал.
language: original
sha256_text: 95741770c61362cf7a628e0006ebe01b612347469883fb42ad3dc94a1d3eb1dd
---

> Источник: [https://aclanthology.org/2024.emnlp-main.7.pdf](https://aclanthology.org/2024.emnlp-main.7.pdf). Текст извлечён из PDF с сохранением номеров страниц. Порядок колонок, таблицы, формулы и подписи могут быть искажены; рисунки доступны по ссылке на PDF. Это текстовая конверсия, не визуально эквивалентный оригинал.

## Страница 1

LLM-Based Agent Society Investigation: Collaboration and Confrontation
                            in Avalon Gameplay
    Yihuai Lan1∗, Zhiqiang Hu3∗, Lei Wang4, Yang Wang5, Deheng Ye6, Peilin Zhao6,
                    Ee-Peng Lim4, Hui Xiong1,2, Hao Wang1†
              1The Hong Kong University of Science and Technology (Guangzhou)
                    2The Hong Kong University of Science and Technology
                         3Singapore University of Technology and Design
                4Singapore Management University, 5Verily Life Sciences, 6Tencent
                                {yihuailan, haowang}@hkust-gz.edu.cn

                   Abstract                 examine positive social behaviors like honesty and
                                                      collaboration, leaving research on negative social    This paper explores the open research prob-
                                                  behaviors of LLM agents relatively scarce.   lem of understanding the social behaviors of
   LLM-based agents. Using Avalon as a testbed,         Previous research on human society has high-
   we employ system prompts to guide LLM        lighted issues like misinformation and online con-
    agents in gameplay. While previous studies          flicts, leading to efforts to address these problems
    have touched on gameplay with LLM agents,      (Song and Jiang, 2022; Levy et al., 2022; Chen
    research on their social behaviors is lacking.                                                             et al., 2022). To delve deeper into the social behav-
   We propose a novel framework, tailored for
                                                          iors of LLM agents, we intend to comprehensively    Avalon, features a multi-agent system facil-
                                                       investigate both positive and negative aspects of     itating efficient communication and interac-
     tion. We evaluate its performance based on        their conduct. To achieve this, we employ Avalon
   game success and analyze LLM agents’ so-       as the environment to illustrate collaboration and
     cial behaviors. Results affirm the framework’s       confrontation among agents. Avalon, a represen-
    effectiveness in creating adaptive agents and        tative social deduction game, assigns players hid-
    suggest LLM-based agents’ potential in nav-                                            den roles and divides them into opposing teams.
    igating dynamic social interactions. By ex-                                             Throughout gameplay, players partake in discus-    amining collaboration and confrontation be-
                                                        sions, debates, and strategic maneuvers.    haviors, we offer insights into this field’s re-
    search and applications.  Our code is pub-      LLM agents face a challenging task in winning
     licly available at https://github.com/       the incomplete information game of Avalon. They
   3DAgentWorld/LLM-Game-Agent.           need to share and obtain information via communi-
                                                     cation and analysis, deducing other players’ roles,
1  Introduction                                                   building trust among allies, and deceiving oppo-
Artificial intelligence (AI) agents (Xi et al., 2023;    nents. Success requires technical abilities like nat-
Park et al., 2023) exhibit human-like behaviors,    ural language understanding, incomplete informa-
from perceiving and analyzing the environment to    tion analysis, and strategy learning. Additionally,
decision-making and action-taking.                   social behaviors such as teamwork, persuasion, and
  Advances in large language models (LLMs)   camouflage are crucial for success in Avalon game-
(Kasneci et al., 2023; Peng et al., 2023; Touvron    play.
et al., 2023; Vaswani et al., 2017) offer new avenues     To investigate the LLM-based agent society, we
for creating AI agents in complex environments, po-   propose a novel framework for the agents to play
tentially simulating human society. Various works   Avalon.  Specifically, we adopt ChatGPT as the
(Gao et al., 2023; Qian et al., 2023; Park et al.,   players and assign various roles to agents. We
2023; Ghaffarzadegan et al., 2023) simulate differ-   adopt system prompts to guide LLM agents to play
ent aspects of human society. For instance, Qian   Avalon automatically.
et al. (Qian et al., 2023) simulate a software devel-     Following human’s thinking methodology, we
opment company with agents representing diverse    incorporate multiple modules, including memory
social identities. Park et al.  (Park et al., 2023)    storage and summarization, analysis and planning,
assign varied social roles to agents within a sand-   game action and response generation, and experi-
box environment. However, prior studies mostly   ence learning. We utilize a competitive baseline
    ∗Both authors contributed equally to this research.        approach (Xu et al., 2023a), to elaborate the effi-
    †The corresponding author.                         cacy of our proposed framework. We also carefully

                                        128
        Proceedings of the 2024 Conference on Empirical Methods in Natural Language Processing, pages 128–145
                    November 12-16, 2024 ©2024 Association for Computational Linguistics

## Страница 2

                      Memory Analysis Plan Action Experience Leadership Persuasion Camouflage Teamwork Confrontation Sharing  Method                                                         Learning
  GenAgents (Park et al., 2023)  ✓        ✓   ✓    ✓                         ✓            ✓
  Plan4MC (Yuan et al., 2023)            ✓   ✓
 GITM (Zhu et al., 2023)     ✓        ✓   ✓
  RGAgent (Akata et al., 2023)   ✓                                           ✓      ✓
  CGAgent (Xu et al., 2023a)   ✓    ✓            ✓     ✓            ✓      ✓      ✓
  ReCon (Wang et al., 2023c)   ✓    ✓
 LARL (Xu et al., 2023b)     ✓    ✓                               ✓      ✓
  CodeAct (Shi et al., 2023)    ✓    ✓       ✓                              ✓
  Ours              ✓    ✓   ✓   ✓    ✓     ✓     ✓      ✓      ✓      ✓     ✓
Table 1: Comparison between our work and related works in both agent framework and social behaviour analysis.

analyze the social behaviors of LLM agents, and   Liang et al. (2020) investigates the impact of com-
observe clear collaboration and confrontation be-    petition on communication protocols. Brandizzi
tween agents during the gameplay.                      et al. (2021) explores the utilization of communica-
  Our contributions can be summarized as:           tion to foster cooperation in SDGs.

    • We explore the social behaviors exhibited by    2.2  LLM-Based Gameplay
    LLM-based agents in the context of Avalon   The rapid development of LLM-based agents has
    gameplay. We reveal the various aspects of    resulted in significant advancements in problem-
     these behaviors, including teamwork, leader-   solving across various domains.  These agents,
     ship, persuasion, camouflage, and confronta-   known for their quick and strategic processing,
      tion.                                      have improved the effectiveness and robustness of
    • We design an effective framework to play    solving tasks (Lin et al., 2023; Wang et al., 2023b;
     Avalon, which presents superior performance   Tsai et al., 2023; Zhou et al., 2023; Park et al.,
    compared with the baseline method. We also   2023; Qian et al., 2023; Fu et al., 2023).
     carefully analyse the relationship between the    LLMs have  recently been  utilized  in  vari-
    module design and agents’ social behaviors,   ous gaming environments, including task-based
     providing comprehensive experiment discus-   games like Minecraft and multiplayer strategy
     sions.                                 games (Yuan et al., 2023; Zhu et al., 2023; Wang
    • Our findings have the potential to contribute    et al., 2023a; Akata et al., 2023; Xu et al., 2023a;
     to a better understanding of the role of LLM-  Wang et al., 2023c). In multiplayer strategy games
    based agents in social and strategic contexts,   such as the Prisoner’s Dilemma and Battle of the
    and shed light on the implications of these    Sexes, LLMs model strategic interactions (Akata
     behaviors in such environments.                  et al., 2023). They’re also employed in social de-
                                                   duction games like Werewolf and Avalon (Xu et al.,
2  Related Work                             2023a; Wang et al., 2023c; Shi et al., 2023; Xu
                                                           et al., 2023b), where they exhibit strategic behav-
2.1  Social Deduction Game Agent                   iors. To combat misinformation, recursive contem-
The emergence of communication among agents in    plation has been proposed (Wang et al., 2023c).
social deduction games (SDG) has garnered signif-   However, previous works have only partially an-
icant attention in the research community. Hirata    alyzed behaviors and designed agent frameworks
et al. (2016) introduces an AI-based agent for the   based on limited game characteristics. Thus, we
Werewolf game, aiming to advance intelligence   propose a comprehensive social deduction game
and communication skills in AI systems. Naka-   agent framework based on LLMs and conduct a
mura et al. (2016) proposes a psychological model   thorough behavior analysis. Table 1 illustrates the
considering multiple perspectives to simulate hu-    distinctions between our work and others.
man gameplay in The Werewolf. Wang and Kaneko
                                                    2.3  LLMs’ Impact on Society(2018) addresses decision-making challenges in the
Werewolf game using deep reinforcement learn-   The growing influence of Large Language Mod-
ing techniques. Furthermore, Wiseman and Lewis    els (LLMs) on society has spurred significant re-
(2019) explores player decision-making in social    search (Movva et al., 2023). Innovations include
deduction games, focusing on sources of infor-   using LLMs for virtual social network simulations
mation influencing player strategies. Examining    to advance social science research (Gao et al., 2023)
the broader context of multi-agent communication,   and enrich human social experiences in virtual

                                        129

## Страница 3

spaces (Kaiya et al., 2023). However, concerns    skills to persuade others to believe their claims,
arise regarding validity, privacy, and ethics in LLM-    trust their judgments, and support their decisions.
driven social computing. Ghaffarzadegan et al. pro-   Camouflage. Evil players pretend to be good play-
pose feedback mechanisms to address these con-    ers, using deceptive tactics and concealing infor-
cerns (Ghaffarzadegan et al., 2023). Additionally,   mation to mislead others.
LLMs fuel advancements in social robot develop-   Confrontation. Disagreements and conflicts will
ment (Yang and Menczer, 2023), posing challenges    arise during the game. Players must tackle these
like social bot detection and misinformation spread.   confrontations and work towards resolving them.
Ongoing research aims to align LLMs with ethical   Sharing. Each role has unique clues.  Sharing
standards, mitigate biases and errors, and ensure    these clues promotes collaboration and builds trust
their reliable and ethical use across diverse applica-   among players, but risks exposing one’s identity.
tions (Wang et al., 2023d; Liu et al., 2023).
                                       4  Approach
3  Background                                                    4.1  Setup
In our study, we chose Avalon, also known as “The    Figure 1 shows the proposed framework.  All
Resistance”, instead of Werewolf as our environ-   prompts used are shown in Appendix Table 4. To
ment. Unlike Werewolf, where players are grad-    start the game, system prompts are used to assign
ually eliminated, Avalon ensures that all players    different roles to LLM agents. Each system prompt
remain engaged throughout the game, promoting    for a role pi includes several important components:
social cohesion.                                Role Information RIpi (Role Name and Role In-
  Avalon accommodates 5 to 10 players, focusing    troduction), Goal Gpi (Winning Conditions), and
on the 6-player variant herein. Players receive se-   Abstracted Strategy Spi for gameplay. The Rolecret roles in either the good or evil faction. The   Name and Role Introduction provide information
good faction includes Merlin, Percival, and Loyal   about the assigned role to the LLM agent, while
Servants, while the evil faction comprises Morgana    the Goal (Winning Conditions) offers insights into
and Assassin. Morgana and Assassin know each   how to achieve victory. Additionally, the Initial
other’s identities, Percival can identify Merlin and    Playing Strategy outlines the high-level planning
Morgana, and Merlin recognizes all evil players.   for the LLM agent to take specific actions during
The game spans 3-5 rounds. Players discuss and   gameplay.
vote to form a quest team of 2-3 members. Ap-     Below is a specific example of a system prompt
proval requires a majority vote; otherwise, leader-    for the role of Margana:
ship shifts. Each round allows up to five voting   Role: Morgana.
cycles before the leader selects the team. Quest   Role Introduction: In identification phase, you
success hinges on cards submitted by team mem-   can identify teammates and the Assassin.
bers. Good players submit success cards, while   Goal: Win the game by intentionally causing quests
evil players can choose success or failure cards. A    to fail for three rounds, alone or with teammates.
quest fails if it receives a failure card. The game    Initial Strategy: You always pretend to be a loyal
concludes with victory for good players if three    servant and recommend yourself as a candidate for
quests succeed, or for evil players if three quests    quests, and let the quests fail.
fail. Evil players can also win by correctly identi-
fying Merlin at the game’s end.                      4.2  Memory Storage
                                               Analyzing game history is vital for agents to grasp
3.1  Social Behaviors in Avalon                                                    the current situation and make decisions. Yet, in
Teamwork. Good players must collaborate to com-   Avalon, LLM agents’ history responses are often
plete quests for winning. They should build trust    too lengthy, surpassing input limits and potentially
with teammates while being wary of evil players.    lowering performance. To tackle this, a memory
Leadership. Each player has the chance to lead the    storage system is introduced to record conversa-
discussion for forming the quest team. The leader    tions among LLM agents, enabling subsequent
can guide the conversation and build trust among    analysis and decision-making.
players. Effective leadership is crucial for victory.   Memory Storage. Memory storage is vital for
Persuasion. Players must use their communication    recording agents’ conversation history in the cur-
                                        130

## Страница 4

Figure 1: Our framework has six modules: summary, analysis, planning, action, response, and experiential learning.
This design follows human thinking, helps LLM agents play Avalon effectively, and reveals their social behaviors.

rent game round. It comprises structured memory    analysis module. This module analyzes the role
objects containing key details like role name, de-    identity and potential strategies of other players
tailed natural language responses, round number,   during gameplay:
and a flag indicating public or private status. Public
information is visible to all roles, while private in-                                                     Hpit = ANA (Mt, RIpi) ,         (2)formation pertains to each role’s conversation. We
assign separate memory pools to each agent for
                                           where Mt is the memory on round t and RIpi isclarity in information processing. By storing this                                                    the role information. By analyzing, LLM agents
data, memory storage enables agents to access and                                              can better understand their collaborators and com-
review past conversations, improving their under-                                                            petitors, leading to improved decision-making and
standing of the game’s progress.                                                         effective counterstrategies for winning.
4.3  Memory Summarization.
                                                    4.5  Planning
To store more information in memory, we use a
                                             Agents need to understand the game progress andsummarization prompt to compress the information
                                                  necessary strategies to win. Thus, a planning mod-from the previous round and capture the essential
                                                     ule is designed to create a strategic plan. The plandetails. The process of updating the memory with a
                                                                is based on the memory and information from thesummary of the previous round is illustrated below:
                                                     current round of the game, as described below:


                                                                                                                                                    ,                                                                                                              t  ,                                        t                                                                                t = PLAN Mt, Hpi                                                                    Ppit−1, RIpi, Gpi, Spi                                                     t  , It)⟩.  (1)    Ppi Mt = ⟨SMR(Mt−1), (Rp1                                            · · · , Rp6                                                                                                        (3)
                                                                                         t  represents the strategic plan of agentThe memory on round t is Mt. The response gen-   where Ppi
erated by the LLM for role pi on round t is Rpi                                                                    t  ,    pi at round t.  Gpi and Spi are goals and initial
and It represents the instructions and statements    strategies. By creating a strategic plan, the agents
of the host on round t. ⟨⟩is Text concatenation.   can have a flexible strategy for different situations.
SMR(·) is the summarization prompting.           This foresight helps them make better decisions
                                                 about collaborating with teammates, deceiving op-
4.4  Analysis                                                   ponents, taking on the opposing faction’s identity,
To help LLM agents improve strategic planning and    and, if needed, sacrificing teammates or oneself to
increase their chances of winning, we introduce an    secure winning in the game.

                                        131

## Страница 5

4.6  Action                              5  Experiment
In the action module, agents decide their next ac-   5.1  Implementation Details
tion based on memory information, situation anal-                                  We developed the Avalon game program in Python,
ysis, and the strategic plan. There are five types                                                   using the gpt-3.5-turbo-16k model as both our back-
of actions: selecting players, voting (agree or dis-                                            end and the baseline’s. In all experiments, we set
agree), completing quests (succeed or fail), using                                                     the agent model’s temperature to 0.3 and the LLM
non-verbal signals (raising hands, putting hands                                                         extractor’s to 0. The number of suggestions gener-
down, opening or closing eyes), and choosing to                                                   ated for updating strategies is 3. Game rules and
remain silent. The process of choosing the next                                                      role descriptions were set according to the base-
action is as follows:                                                        line template (Xu et al., 2023a), which leverages
                                                         historical context, enhances agent reasoning, and
     t                        t  ,   t  ,                         t  . Api ∼p A|Mt, Hpi Ppi RIpi, Gpi, Spi, I′       learns from past mistakes. Detailed descriptions                                                 (4)
                                                     are provided in Section A.2.
The subsequent action depends on the memory,
the comprehensive analysis, the strategic plan, and    5.2  Evaluation Metrics
the instruction from the host. The details of these                                We evaluate the performance of our framework
action decisions are confidential and only known                                               based on metrics from two perspectives.
to the respective agent. The host and other players
cannot see these decisions.                           5.2.1  Gameplay Outcome and Strategy.
                                       From this perspective, we use metrics associated
4.7  Response Generation                                                 with the gameplay outcome and strategies to quan-
The Response Generation module is responsible for    titatively evaluate the performance of the proposed
generating a response to the host’s inquiry. Agents    agents and the baseline agents.
in this module choose an action and provide an ex-   Winning Rate (WR). The winning rate is the per-
planation to the host. Agents are given the freedom    centage of games won out of the total played, cal-
to collaborate, deceive, and assume the identity of    culated by dividing the number of wins by the total
the opposite faction in their explanations.          games played:

4.8  Experience Learning                            #Wins                          WR = (                100%    (5)                                          #Games Played) ×
In practical scenarios, players can improve their
Avalon gameplay strategy through experience.   Quest Engagement Rate (QER). "Quest engage-
They gain insights not only from their own perspec-   ment rate" is the ratio of rounds a player joins the
tive but also by observing other players’ strategies.   quest team to the total rounds played in the games.
An ideal Avalon LLM agent should learn from both     It’s calculated as follows:
its own experiences and those of other players.
                                                           Rounds                             QER = (#Engagement          )  100%4.8.1  Self-Role Strategy Learning                        #Rounds     ×
                                                                                                        (6)
In Step 1, agents generate three strategic recom-                                                  Failure Vote Rate (FVR) The quest result relies on
mendations for a player’s role-specific gameplay in                                                  success or failure cards from team members. The
Avalon games based on the game history. Agents                                                         failure vote rate indicates the percentage of votes
avoid mentioning specific players and instead use                                                     against quest success, calculated as follows:
role names to make the suggestions applicable in
future games. In Step 2, agents enhance their strate-                     V otes                                   FV R = (#Failure        )  100%   (7)gies by incorporating the gathered suggestions              #V otes   ×
while maintaining the original strategy’s strengths.
                                                      5.2.2  Social Behaviors.
4.8.2  Other-Role Strategy Learning                                       From this perspective, we use ChatGPT to assist
Avalon LLM agents summarize the strategies    the analysis on the social behaviors of agents.
adopted by other players to facilitate learning from   Leadership. We gauge AI agents’ leadership us-
the strategies employed by other players. Prompts    ing "Leader Approval Rate (LAR)". LAR is cal-
for the above steps are shown in Appendix Table 5.   culated by dividing total approval votes by total

                                        132

## Страница 6

   Method            Good Side   Evil Side        After the matches, we compared the winning rates
   Ours                     90        100          of our Avalon AI agents to the baselines. As de-
                                                     picted in Table 2, our method demonstrated a 90%     w/o analysis             60        60
                                             winning rate in 10 games when playing the good     w/o plan                80        100
     w/o action              100        80            side. Conversely, when playing the evil side, the
     w/o strategy learning      50        60         winning rate was 100% over the same number of
                                              games.Table 2: Results of the gameplay between ours and
baseline. We present the winning rates (WR) of our      Ablation studies reveal the importance of key
method being good and evil sides.                  modules in our AI agents. Removing the analy-
                                                             sis module lowered winning rates to 60% for both
                                                        sides, showing its impact on understanding and
                                                 decision-making. Excluding the planning module
                                                reduced the good side’s winning rate to 80%, high-
                                                        lighting its role in devising strategies. Without the
                                                     action module, the good side won 100% while the
                                                            evil side dropped to 80%, indicating its importance
Figure 2: (a): Comparison of the engaging quests rate    for the evil side’s success. Removal of the strategy
when playing evil side. Higher engaging quests rate    learning module led to winning rates decreasing to
means more opportunities for the player to influence the                                   50% and 60% for good and evil respectively, em-
outcome of the game. (b): Comparison of the failure                                                  phasizing its role in enhancing strategies. In con-
vote rate when playing evil side. Baseline is worse.
                                                        clusion, the analysis and strategy learning modules
                                                        significantly influence game outcomes, affectingleader votes across 20 Avalon games.  It reflects
                                                both sides’ winning rates. Additionally, the plan-consensus among players on proposed quest teams.
                                                ning and action modules are crucial for success,Persuasion. To evaluate LLM agents’ persuasion,
                                                  given their impact on gameplay.we track two metrics: self-recommendation rate
                                           To better grasp the strategies employed by our(proposing oneself for quests) and success rate
                                             Avalon Agents and the baseline agent, we com-(self-recommendation for quest participation).
                                                pared quest engagement and failure voting ratesCamouflage. Detecting camouflage in AI agents
                                       when different AI agents acted as the evil side.is challenging. We focus on identifying instances
                                            Both rates significantly impact game outcomes. Awhere agents assume different identities in the ini-
                                                    higher quest engagement rate allows more chancestial round of each game. Behaviors include Self-
                                                      for players to influence the game, while a higherDisclosure, Camouflage, and Withholding Identity.
                                                         failure voting rate suggests a greater chance forTeamwork and Confrontation.We use ChatGPT
                                                    the evil side to win but also increases the risk ofto analyze role responses, aiming to identify in-
                                                  exposure, indicating an aggressive gameplay ap-stances of collaboration or confrontation. Chat-
                                                   proach. Figure 2 illustrates the outcomes for questGPT prompts with a player’s response and evalu-
                                              engagement and failure voting rates. Our AI agents,ates trust (teamwork), lack of trust (confrontation),
                                                       particularly when playing as Morgana and Assas-or ambivalence towards others.
                                                            sin, show assertiveness, with a 40.3% quest en-
Sharing. Sharing reflects how often agents dis-                                            gagement rate and 84.0% failure voting rate. In
close valuable information, crucial for team coop-
                                               comparison, baseline agents have lower rates at
eration. Using ChatGPT, we analyze agents’ di-
                                         33.1% and 36.5% respectively. As a result, our
alogues to identify instances of sharing behavior,
                                              proposed Avalon AI agents achieve a 100% win
aiming to quantify their willingness to share for the
                                                           rate against the baseline agents when playing as the
team’s benefit.
                                                           evil side.
5.3  Experiment Results
                                       6  Social Behaviors of AI Agents
To validate the efficacy of Avalon AI agents, we
repurposed Werewolf AI agents (Xu et al., 2023a)   To evaluate if AI agents replicate human social be-
as baselines. Across two sets of 10 consecutive    haviors in Avalon, we conduct a thorough analysis.
Avalon games, our agents faced off against the   This involves assessing the agents’ execution of
baselines, with Evil versus Good and vice versa.   teamwork, leadership, persuasion, camouflage, and

                                        133

## Страница 7

                                                                ities and their proactive approach to steering the
                                            gameplay towards victory. However, the baseline
                                                    agents could propose good side players to the quest
                                             team to achieve high Leader Approval Rate but low
                                        game win rate.

                                                    6.2  Persuasion
                                                 Figure 3 displays the evaluation outcomes assess-
                                                  ing the AI agents’ persuasion ability.  Notably,
                                                   agents employ distinct strategies based on their as-
                                          sumed roles, as shown in Figure 3 (b). When play-
                                                  ing as Loyal Servant and Morgana, agents display
Figure 3: (a): The leadership behavior. Players with    a high self-recommendation rate for quest team par-
higher Leader Approval Rate get more agreements from    ticipation, impacting mission success. Conversely,
other players when deciding a quest team. (b) and (c):   a cautious approach is seen with roles like Mer-
The persuasion behavior. Self-recommendation Rate:    lin, Percival, and Assassin, evident from their low
players with higher Self-recommendation Rate are more    self-recommendation rates. This strategic restraint
will to engage in quests. Self-recommendation Success                                                                is crucial, particularly for roles like Merlin, em-
Rate: players more likely to gain the trust of other play-
                                                  phasizing the importance of concealing identity.ers has higher Self-recommendation Success Rate.
                                       From Figure 3 (c), Loyal Servants exhibit higher
                                                   success rates in self-recommendation compared to
                                                       roles that easily raise suspicion. Additionally, the
                                               proposed Avalon Agents show higher rates of self-
                                             recommendation and greater success compared to
                                                    baseline agents, indicating enhanced persuasion
                                                               abilities.

                                                    6.3  Camouflage
                                            Camouflage is central to Avalon. Evil roles must
Figure 4: The camouflage behavior when playing differ-                                                   deceive loyal servants while subtly sabotaging mis-ent roles: at first round of each game, the distribution
                                                       sions.  Skilled players create elaborate lies andof the players choose Self-Disclosure, Camouflage or
Withholding Identity.                                 misdirection. Loyal servants also engage in cam-
                                                    ouflage to conceal their identities, especially when
confrontation through the frequency distribution in   under suspicion.
game logs from two sets of 10 consecutive games.      In Figure 4, the rates of various behaviors ex-
                                                     hibited by AI agents are displayed. Notably, the
6.1  Leadership                                                  agents display a notably high tendency to reveal
Leadership skills come into play when players take    their identities at the commencement of the game,
charge of discussions and decision-making pro-    particularly among the roles associated with the
cesses. A good leader can steer the conversation,   good side. Intriguingly, in the roles of Morgana and
guide suspicions, and rally the loyal servants to    Assassin, agents opt to either conceal or assume dif-
make informed decisions. Leadership abilities are    ferent identities without explicit instructions to do
crucial for the good side to effectively counter the    so in the initial strategy. Specifically, Morgana and
deceptive tactics employed by the evil side.          the Assassin display rates of assuming alternate
  Figure 3 (a) illustrates the Leader Approval Rate    identities of 10% and 15%, respectively, a strat-
when agents assume various roles.  It is evident   egy akin to that observed in human players, where
that our agents, playing on the good side, attain    Percival perceives both Merlin and Morgana but
remarkably high Leader Approval Rates when serv-   lacks precise knowledge of their identities. This
ing as leaders. Notably, the AI agents achieve a    spontaneous adoption of deceptive behaviors by AI
Leader Approval Rate exceeding 80% averagely    agents stands out as a captivating observation, un-
while undertaking roles associated with the good    derscoring their adaptability and strategic acumen
side. This signifies their robust leadership qual-    in the pursuit of game victory.

                                        134

## Страница 8

Figure 5: The teamwork and confrontation behaviors when playing different roles. Each subfigure shows the attitude
distribution of the player portraying specific role (on the top) towards players in other roles (on the left).

                                             However, excessive sharing of known information
                                     may also benefit the opposing side, as discussions
                                                     are public to all players. Therefore, strategic shar-
                                                   ing of information is necessary to win the game.
                                                   Figure 6 (a) depicts the proportion of known
Figure 6: (a): The sharing behavior when playing Per-   information shared with other players by different
cival and Merlin at the first round.  (b) and (c): The    agents playing the roles of Merlin and Percival in
teamwork vacillation between different rounds.           the first round of the game. It is observed that both
                                                    the agents designed by us and the baseline agents
6.4  Teamwork and Confrontation                                                       exhibit an excessive level of sharing behaviors.
Teamwork is vital for loyal servants to identify
each other and succeed in missions by strategizing,   6.6  Vacillation
discussing assignments, and sharing information   At the game’s onset, some players possess identity
to uncover evil roles. Confrontations arise when    clues, like Percival knowing Morgana and Mer-
suspicions lead to accusations, resulting in intense    lin without distinction, while others, like Loyal
exchanges where accusers present reasoning and    Servants, lack such info. Both situations require
the accused offer defenses or deflect suspicion onto    players to deduce identities for their camp’s bene-
others.                                                                       fit. Analyzing teamwork proportions across rounds
   In Figure 5 (a), teamwork and confrontation rates    reveals players’ ability to discern allies and foes.
of good side roles are depicted. Loyal Servants      Figure 6 (b) illustrates Loyal Servants’ team-
tend to avoid confrontation due to their lack of   work tendencies, while (c) shows Percival’s tenden-
specific identity information. However, Merlin,    cies towards Morgana and Merlin. Throughout the
aware of Morgana and Assassin, confronts them   game, players increasingly collaborate with team-
frequently. Percival, aware of Merlin and Morgana   mates and less with enemies. However, Loyal Ser-
without knowing their exact identities, confronts    vants face greater challenges inferring roles, lead-
both. These observations highlight the adaptive    ing to higher teamwork with potential foes.
strategies of AI agents, mirroring the social dynam-
ics of human players in Avalon.                     6.7  Behavior Spontaneity
  Figure 5 (b) shows teamwork and confrontation                                        Teamwork and confrontation behaviors of players
rates of baseline agents. Rates remain consistent                                                          arise spontaneously due to game mechanics foster-
across roles, suggesting they do not adjust strate-                                                   ing interaction and competition. Teamwork aids in
gies based on role assumptions.                                                       identifying evil roles, facilitating successful quests.
                                              However, teamwork often brings confrontation, as
6.5  Sharing                                                doubts about role identities persist. Even with-
Sharing is essential for Percival and Merlin. They    out strategic learning mechanisms, players exhibit
possess more information than other good roles,    these behaviors, showing their spontaneous nature.
and sharing their insights aids in winning the game.   However, behavior distributions vary significantly

                                        135

## Страница 9

between agents with and without strategic learning.   Zhendong Chen, Siu Cheung Hui, Fuzhen Zhuang,
The relevant analysis is provided at the Section D.       Lejian Liao, Fei Li, Meihuizi Jia, and Jiaqi Li. 2022.
                                                          Evidencenet: Evidence fusion network for fact verifi-
7  Conclusion                                            cation. In Proceedings of the ACM Web Conference                                                       2022, pages 2636–2645.
This paper explores the social behaviors of LLM-                                            Yao Fu, Hao Peng, Tushar Khot, and Mirella Lapata.
based agents in the Avalon game. We introduce a                                                      2023. Improving language model negotiation with
multi-agent framework facilitating efficient com-       self-play and in-context learning from ai feedback.
munication and interaction. This framework in-
                                            Chen Gao, Xiaochong Lan, Zhi jie Lu, Jinzhu Mao,
cludes memory, analysis, planning, action, and re-                                                          Jing Piao, Huandong Wang, Depeng Jin, and Yong
sponse modules capable of learning from experi-       Li. 2023.  S3: Social-network simulation system
ence. Unlike prior studies, our research delves into      with large language model-empowered agents. ArXiv,
the social dynamics of these agents in gameplay      abs/2307.14984.
scenarios. Our evaluation showcases the success   Navid  Ghaffarzadegan,   Aritra  Majumdar,  Ross
of our framework in achieving winning strategies       Williams, and Niyousha Hosseinichimeh. 2023. Gen-
and the adaptability of LLM agents in complex       erative agent-based modeling: Unveiling social sys-
                                                 tem dynamics through coupling mechanistic mod-social interactions. Future work involves optimiz-                                                                  els with generative artificial intelligence.  ArXiv,
ing our approach, exploring its applicability in di-                                                        abs/2309.11456.
verse game environments, and further understand-
                                              Yuya Hirata, Michimasa Inaba, Kenichi Takahashi, Fu-ing LLM agents’ potential in dynamic social inter-
                                                                        jio Toriumi, Hirotaka Osawa, Daisuke Katagami, and
actions.                                                Kousuke Shinoda. 2016. Werewolf game modeling
                                                         using action probabilities based on play log analysis.
8  Limitations                                         In Computers and Games.
Although the LLM agent framework we proposed   Zhao Kaiya, Michelangelo Naim, Jovana Kondic,
has performed well in the Avalon game, there are     Manuel   Cortes,   Jiaxin  Ge,   Shuying  Luo,
also limitations of high cost and slow interaction     Guangyu Robert Yang, and Andrew Ahn. 2023. Lyfe
                                                            agents:  Generative agents for low-cost real-timespeed, due to multiple accesses to the model re-                                                                social interactions.
quired for each interaction. Additionally, from the
behaviors exhibited by the agent, there are also in-   Enkelejda Kasneci, Kathrin Seßler, Stefan Küchemann,
                                                   Maria Bannert, Daryna Dementieva, Frank Fischer,stances of unreasonable behavior distribution, such                                                    Urs Gasser, Georg Groh, Stephan Günnemann, Eyke
as excessive self-disclosure actions. In the future,                                                          Hüllermeier, et al. 2023. Chatgpt for good? on op-
we will explore and improve these aspects.               portunities and challenges of large language models
                                                              for education. Learning and individual differences,
Acknowledgements                                103:102274.
This research is supported, in part, by SMP-IDATA    Sharon Levy, Robert E Kraut, Jane A Yu, Kristen M Al-
                                                             tenburger, and Yi-Chia Wang. 2022. UnderstandingOpen Youth Fund. This research is supported, in
                                                                 conflicts in online conversations. In Proceedings of
part, by the National Key R&D Program of China                                                             the ACM Web Conference 2022, pages 2592–2602.
(Grant No.2023YFF0725001), National Natural
Science Foundation of China (Grant No.92370204),   Paul Pu Liang, Jeffrey Chen, Ruslan Salakhutdinov,
                                                         Louis-Philippe Morency, and Satwik Kottur. 2020.Guangzhou-HKUST(GZ) Joint Funding Program                                        On emergent communication in competitive multi-
(Grant No.2023A03J0008), Education Bureau of      agent teams. ArXiv, abs/2003.01848.
Guangzhou Municipality.
                                                              Bill Yuchen Lin, Yicheng Fu, Karina Yang, Prithvi-
                                                                     raj Ammanabrolu, Faeze Brahman, Shiyu Huang,
                                                  Chandra Bhagavatula, Yejin Choi, and Xiang Ren.References                                                      2023. Swiftsage: A generative agent with fast and
Elif Akata, Lion Schulz, Julian Coda-Forno, Seong Joon      slow thinking for complex interactive tasks. ArXiv,
  Oh, Matthias Bethge, and Eric Schulz. 2023. Playing      abs/2305.17390.
   repeated games with large language models. ArXiv,
   abs/2305.16867.                               Yang Liu, Yuanshun Yao, Jean-Francois Ton, Xiaoying
                                                      Zhang, Ruocheng Guo, Hao Cheng, Yegor Klochkov,
Nicolo’ Brandizzi, Davide Grossi, and Luca Iocchi.    Muhammad Faaiz Taufiq, and Hanguang Li. 2023.
  2021. Rlupus: Cooperation through emergent com-      Trustworthy llms: a survey and guideline for eval-
  munication in the werewolf social deduction game.      uating large language models’ alignment.  ArXiv,
  ArXiv, abs/2106.05018.                                abs/2308.05374.

                                        136

## Страница 10

Rajiv Movva, S. Balachandar, Kenny Peng, Gabriel    Shenzhi Wang, Chang Liu, Zilong Zheng, Siyuan Qi,
   Agostini, Nikhil Garg, and Emma Pierson. 2023.     Shuo Chen, Qisen Yang, Andrew Zhao, Chaofei
  Large language models shape and are shaped by so-     Wang, Shiji Song, and Gao Huang. 2023c. Avalon’s
   ciety: A survey of arxiv publication patterns. ArXiv,     game of thoughts: Battle against deception through
  abs/2307.10700.                                          recursive contemplation.

Noritsugu Nakamura, Michimasa Inaba, Kenichi Taka-   Tianhe Wang and Tomoyuki Kaneko. 2018. Applica-
   hashi, Fujio Toriumi, Hirotaka Osawa, Daisuke       tion of deep reinforcement learning in werewolf game
  Katagami, and Kousuke Shinoda. 2016. Construct-       agents. 2018 Conference on Technologies and Appli-
   ing a human-like agent for the werewolf game using       cations of Artificial Intelligence (TAAI), pages 28–33.
  a psychological model based multiple perspectives.
  2016 IEEE Symposium Series on Computational In-   Yufei Wang, Wanjun Zhong, Liangyou Li, Fei Mi,
   telligence (SSCI), pages 1–8.                         Xingshan Zeng, Wenyong Huang, Lifeng Shang,
                                                Xin Jiang, and Qun Liu. 2023d.  Aligning large
Joon Sung Park, Joseph C. O’Brien, Carrie J. Cai,      language models with human: A survey.  ArXiv,
  Meredith Ringel Morris, Percy Liang, and Michael S.      abs/2307.12966.
   Bernstein. 2023. Generative agents: Interactive sim-
   ulacra of human behavior.                          Sarah Wiseman and Kevin B. Lewis. 2019.  What
                                                          data do players rely on in social deduction games?
Baolin Peng, Chunyuan Li, Pengcheng He, Michel Gal-                                                    Extended Abstracts of the Annual Symposium on
   ley, and Jianfeng Gao. 2023. Instruction tuning with                                               Computer-Human Interaction in Play Companion
   gpt-4. arXiv preprint arXiv:2304.03277.                                                     Extended Abstracts.
Chen Qian, Xin Cong, Cheng Yang, Weize Chen,                                                  Zhiheng Xi, Wenxiang Chen, Xin Guo, Wei He, Yiwen
  Yusheng Su, Juyuan Xu, Zhiyuan Liu, and Maosong                                                      Ding, Boyang Hong, Ming Zhang, Junzhe Wang,
  Sun. 2023. Communicative agents for software de-                                                          Senjie Jin, Enyu Zhou, et al. 2023. The rise and
  velopment. ArXiv, abs/2307.07924.                                                              potential of large language model based agents: A
                                                             survey. arXiv preprint arXiv:2309.07864.Zijing Shi, Meng Fang, Shunfeng Zheng, Shilong Deng,
  Ling Chen, and Yali Du. 2023. Cooperation on the                                              Yuzhuang Xu, Shuo Wang, Peng Li, Fuwen Luo, Xi-   fly: Exploring language agents for ad hoc teamwork                                                     aolong Wang, Weidong Liu, and Yang Liu. 2023a.   in the avalon game.                                                        Exploring large language models for communication
Qiurong Song and Jiepu Jiang. 2022. How misinfor-      games: An empirical study on werewolf.
  mation density affects health information search. In
                                                        Zelai Xu, Chao Yu, Fei Fang, Yu Wang, and Yi Wu.  Proceedings of the ACM Web Conference 2022, pages
                                                       2023b. Language agents with reinforcement learning  2668–2677.
                                                                for strategic play in the werewolf game.
Hugo Touvron, Louis Martin, Kevin Stone, Peter Al-
                                                 Kai-Cheng Yang and Filippo Menczer. 2023. Anatomy   bert, Amjad Almahairi, Yasmine Babaei, Nikolay
                                                          of an ai-powered malicious social botnet.  ArXiv,   Bashlykov, Soumya Batra, Prajjwal Bhargava, Shruti
                                                        abs/2307.16336.  Bhosale,  et  al. 2023.  Llama 2:  Open founda-
   tion and fine-tuned chat models.  arXiv preprint                                               Haoqi Yuan, Chi Zhang, Hongcheng Wang, Feiyang  arXiv:2307.09288.                                                           Xie, Penglin Cai, Hao Dong, and Zongqing Lu. 2023.
Chen Feng Tsai, Xiaochen Zhou, Sierra S Liu, Jing      Plan4mc: Skill reinforcement learning and planning
   Li, Mo Yu, and Hongyuan Mei. 2023. Can large       for open-world minecraft tasks.
  language models play text games well?  current
                                             Xuanhe Zhou, Guoliang Li, and Zhiyuan Liu. 2023.   state-of-the-art and open questions. arXiv preprint
                                            Llm as dba.  arXiv:2304.02868.
Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob    Xizhou Zhu, Yuntao Chen, Hao Tian, Chenxin Tao, Wei-
   Uszkoreit, Llion Jones, Aidan N Gomez, Łukasz        jie Su, Chenyu Yang, Gao Huang, Bin Li, Lewei Lu,
   Kaiser, and Illia Polosukhin. 2017. Attention is all      Xiaogang Wang, Yu Qiao, Zhaoxiang Zhang, and
  you need. Advances in neural information processing       Jifeng Dai. 2023. Ghost in the minecraft: Gener-
   systems, 30.                                                   ally capable agents for open-world environments via
                                                             large language models with text-based knowledge
Guanzhi Wang, Yuqi Xie, Yunfan Jiang, Ajay Man-     and memory.
   dlekar, Chaowei Xiao, Yuke Zhu, Linxi Fan, and An-
  ima Anandkumar. 2023a. Voyager: An open-ended
  embodied agent with large language models.

Lei Wang, Chen Ma, Xueyang Feng, Zeyu Zhang, Hao
  Yang, Jingsen Zhang, Zhiyuan Chen, Jiakai Tang,
  Xu Chen, Yankai Lin, et al. 2023b. A survey on large
  language model based autonomous agents.  arXiv
   preprint arXiv:2308.11432.

                                        137

## Страница 11

A  Appendix                                   Morgana, Assassin.  Merlin,
                                                Percival and Loyal Servant
A.1  Avalon Introduction                                                belong to good side and Morgana
Avalon is designed for 5 to 10 players. Specifically,       and Assassin belong to evil side
we focus on the 6-player variant of the game.           There are two alternate phases
Player roles. Roles including Merlin, Percival,       in this game, reveal phase and
Morgana, Assassin, and two Loyal Servants, are       quest phase.  When it’s reveal
divided into good and evil sides. Merlin, Percival,       phase:  You need follow the
and loyal servants are on the good side, while Mor-       instructions of the moderator.
gana and Assassin are on the evil side. Players are       You needn’t worry about other
assigned roles secretly, with some having special       players and moderator knowing
abilities. Morgana and Assassin are initially aware       what you say and do.  No need
of each other. Percival is able to see Merlin and       to worry about suspicions from
Morgana but does not know their exact identities.       others during the phase.  If
Merlin is aware of the identities on the evil side.         you are Merlin, you can know
Quest team assignment.  After receiving roles,       which two players are Morgana
players engage in 3-5 rounds of discussion and       and Assassin but you can’t know
voting for a certain number of players to form a       which one is Morgana or Assassin
quest team. At the start of each round, a leader is       specifically.  If you are
assigned in rotation. The leader hosts a discussion,       Percival, you can know which two
followed by a public vote on quest team members.       players are Merlin and Morgana
If more than half of the votes agree, the team forms;       but you can’t know which one is
otherwise, leadership rotates to the next player for       Merlin or Morgana specifically.
further discussion and voting. Each round allows       If you are Morgana, you can know
up to five discussion and voting cycles, with the       which player is Assassin.If you
leader directly assigning team members after the       are Assassin, you can know which
fifth round.                                       player is Morgana.  If you are
Quest phase. The quest outcome is determined       Loyal Servant, you can’t get any
by the cards submitted by the quest team. Good       information in this phase.
players can only submit success cards, while evil       The quest phase includes 5
players can choose to submit either success or fail-       rounds.  A round includes
ure cards. A quest is successful if all team members       discussion, voting and execute
vote for success, and fails if one or more members       quest.  At every round, all
vote for failure.                                   players need to discuss about
End of the game. The game ends when three       which players (candidates) will
quests succeed (good side wins) or three quests fail       execute the quest at current
(evil side wins). Additionally, the evil players can       round.  And then all players
win by correctly identifying Merlin at the end.          need to vote if the candidates
                                                should execute the quest, if
A.2  Game Rules and Role Description                                                the agreement exceeds 1/2, the
    You are playing a game called               candidates will execute the
    the Avalon with some other                  quest, otherwise, discuss again
    players.  This game is based                and vote again.  When executing
    on text conversations.  Here are            quest, the candidates need to
    the game rules:                             choose to make quest successful
    Roles:  The moderator is also               or failed.  If all candidates
    host, he organised this game                choose to make quest successful,
    and you need to answer his                  the quest will succeed.  If
    instructions correctly.  Don’t              anyone makes the quest failed,
    talk with the moderator.  There             the quest will fail.
    are five roles in the game,                 At the end of a round, if the
    Merlin, Percival, Loyal Servant,

                                        138

## Страница 12

    quest succeed, good side will           can extract information very accurately to help the
    get one point, otherwise, evil         game proceed smoothly. Table 3 shows some cases
    side will get one point.  Which          of extraction.
    side get 3 points earlier, which               It is observed agents sometimes may fail to an-
    side wins the game.  If you are         swer questions correctly, such as voting with un-
    Assassin, at the end of a round,          clear attitudes. In order to allow the game to pro-
    you can choose to identify              ceed smoothly, we design the following heuristic
    which one is Merlin, if the                 rules. When voting for quest candidates, if the
    identifying is successful, the            agent’s answer is unclear, we assume that it agrees.
    red camp directly win the game.       When voting the quest for success or failure, if the
    If not successful, the Assassin           agent’s answer is unclear, we default to it voting for
    will expose his identification.            failure. When agents select an excessive number
    Objectives:  your goal is to              of players, we truncate the selection to meet the
    help your side get 3 points               quest’s requirements. In cases where the agents
    and win the game.  If you are           choose too few players, the host will repeat ques-
    Assassin, you also need to                 tion to the agent.  If the required player count is
    reason which player is Merlin                  still not met even after multiple retries, the program
    as early as possible.                       steps in to assist by making a random selection on
    Tips:  To complete the objective:        behalf of the agent.
    you should analyze and use your
    ability correctly.  During              A.5  Ablation Study
    quest phase, you need to
    reason carefully about the             To validate the efficacy of the proposed modules,
    roles of other players and be         we conducted an ablation study under both with
    careful not to reveal your own          and without learning from experience setting. Ini-
    role casually unless you’re                    tially, we assessed the effectiveness of the Improv-
    cheating other players.  Only            ing Strategy Module (IS), the Analysis of Others’
    give the player’s name when                Strategies Module (AO), and the Analysis Module
    making a decision/vote, and           (AM) within the context of the learning from ex-
    don’t generate other players’            perience setting, wherein strategies were updated
    conversation.  Reasoning based           based on accumulated gameplay for both our agents
    on facts you have observed and          and the baseline agents.  In this evaluation, the
    you cannot perceive information         proposed agents engaged in ten games, assuming
    (such as acoustic info) other               evil side roles, against the baseline agents for each
    than text.  You are {player},           module. Following these games, the wining rate
    the {role}.  You’re playing            (WR), quest engagement rate (QER), and the fail-
    with 5 other players.  Do not             ure voting rate (FVR) were measured and reported
    pretend you are other players or          for analysis. Table 6 presents the outcomes of the
    the moderator.  Always end your           ablation study conducted within the learning-from-
    response with ‘<EOS>’.                    experience setting. It is discernible that in the ab-
                                                  sence of the Improving Strategy module, where the
A.3  Module Prompts                              strategy remains static but the agent can still glean
Our designed prompts for different modules are    insights from other players’ strategies, the winning
presented in Tables 4 and 5.                            rate decreases by 20%. Additionally, the agents ex-
                                                           hibit reduced aggression, indicated by lower quest
A.4  Heuristic Rules for LLM Gameplay                                             engagement rates and failure voting rates. Further-
In the gameplay, we used LLM to extract infor-   more, the absence of the Analysis of Others’ Strate-
mation from the responses of the agents. For ex-    gies module and the Analysis Module also leads to
ample, when the agent selects a player, it extracts   a decline in the winning rate. In these scenarios,
the player number, and when voting, it extracts the    the agents adopt a cautious gameplay approach,
player’s voting result. With several demonstrations    resulting in significantly lower quest engagement
of how to extract corresponding information, LLM    rates but higher failure voting rates.

                                        139

## Страница 13

Selection Case:
    Please extract the answer to the question from the answer.
    Question:  Please start discussing the candidates for the turn 1 quest
  (please explain the reasons for your choice appropriately).  The number of
  players in this quest is 2.
    Answer:  I suggest that for the turn 1 quest, we consider including
  both player 1 and player 2.  Player 1 has consistently shown loyalty and
  dedication, and player 2 strongly implied their role as Morgana during the
  reveal phase.  By including both players, we can increase our chances of
  successfully completing the quest.  Thank you.
Extractor:
    1, 2
Voting Case:
    Complete the following instructions based on the questions and answers.
    Response true, if the answer expresses:  1.obvious agreement to something.
  2.obvious decision to do something.  3.obvious expression of making quest
  successful.  4.obvious yes to something
    Response false, if the answer expresses:  1.obvious disagreement to
  something.  2.obvious decision not to do something.  3.obvious expression
  of making quest failed.  4.obvious no to something
    Response none, if the answer is not related to the question or didn’t
  express a obvious attitude to something.
    Question:  The quest leader decides that the player 1player 3, player 5 will
  engage in the quest.  You can choose to agree or object.  Please vote to agree
  or disagree.
    Answer:  I vote to disagree.
Extractor:
    False

                              Table 3: Cases of LLM-based extraction





                                      140

## Страница 14

Summarization:
    Within the context of the Avalon game, please assist {Player i} in
  summarizing the conversations known to him from the current phase.  These
  conversations are structured in JSON format, with “message” signifying
  the content of the conversation, "name" identifying the speaker, and
  “message_type” indicating the type of message relevant to {Player i}.
  Specifically,“public” implies that all players have access to the message,
  while “private” implies that only {Player i} has access to it.
    Conversations:  {conversations}.
Analysis:
    Your task is to analyze roles and strategies of the players who might be
  your enemies according to their behaviors.  The analysis should be no more
  than 100 words.  The behaviors are summarized in paragraphs.
    Your name is {Name} your role is {Role}.
    The summary is {Summary}.
Planning:
    Your task is to devise a playing plan that remains in harmony with your
  game goal and existing strategy, while also incorporating insights from your
  previous plan and current environment state.
    {Role Information}
    Goal:  {Goal}
    Strategy:  {Strategy}
    Your previous plan:  {Plan}
    Summary of previous rounds:  {Summary}
    Analysis about other players:  {Analysis}.
Action:
    Your objective is to make decisions based on your role, your game goal
  and the current game state.  There are five types of actions you can take:
  choosing players, voting (agree or disagree), performing missions (make
  missions succeed or fail), using non-verbal signals (raise hands up, put
  hands down, open eyes, or close eyes), and choosing to remain silent.  Only
  one action type can be selected at a time.  If you decide to choose players,
  you can choose multiple players according to Host’s question.
    {Role Information}
    Goal:  {Goal}
    Strategy:  {Strategy}
    Your current plan:  {Plan}
    Summary of previous rounds:  {Summary}
    Analysis about other players:  {Analysis}.
    Host’s Instruction:  {Instruction}.
Response:
    Your task is to provide detailed response to the question of Host, in
  accordance with the provided actions.  Your response should be no more than
  100 words.
    {Role Information}
    Goal:  {Goal}
    Strategy:  {Strategy}
    Your current plan:  {Plan}
    Summary of previous rounds:  {Summary}
    Host’s Instruction:  {Instruction}.
    current actions:  {actions}

                      Table 4: Input prompts of our proposed different modules.


                                      141

## Страница 15

Self-Role Strategy Learning (Step 1)
    Your task is to provide 3 suggestions for {player}’s playing strategy of the
  role {role} in Avalon games, according to the game log.  The game log includes
  the summaries of different rounds of a game.
    The roles of the players:  {player-role mapping}
    The summaries of a round game:  {summary}
    {player}’s game goal:  {goal}
    {player}’s playing strategy of role {role}:{current strategy}
    Previous suggestions:  {suggestions from last game}
    Give your suggestions, No more than two sentences per suggestion and the
  suggestions should be general for future games (This implies that you should
  avoid referencing player x directly and instead use the respective role names
  when making your suggestion.)  and effectively help him achieve his game goal
  in future games.
Self-Role Strategy Learning (Step 2)
    Your task is to help {player} improve his playing strategy of the role
  {role} a Avalon game with suggestions.
    {player}’s strategy:  {current strategy}
    Suggestions:  {suggestions}
    Please improve the strategy while retaining the advantages of the original
  strategy for him and the strategy should be no more than 2 sentences.
  Describe the strategy you provide using continuous sentences rather than
  bullet points or numbering.
Other-Role Strategy Learning
    Your task is to help {player} analyze the strategies of other players in
  a Avalon game, according to the game log.  The game log is summarized in
  paragraphs.
    The roles of the players:  {player-role mapping}
    The summaries of rounds of the game:  {summary}
    Previous strategies of other roles:  {previous strategies}
    Your analysis should be no more than 100 words and the analysis should
  be general for future games (This implies that you should avoid referencing
  player x directly and instead use the respective role names when giving your
  analysis).  And analyze together with previous strategies.
    For example:  The strategy of Merlin is that ...  The strategy of Assassin
  is that...  The strategy of ...  is ...

                      Table 5: Input prompts of our experience learning module.





                                      142

## Страница 16

   Method  WR(%)      QER(%)          FVR(%)                                  Persuasion
                    Morgana   Assassin  Morgana   Assassin
                                                                                      Loyal Servant:
        full       80       44.1       49.1       66.6       78.5
    w/o. IS     60       42.8       39.3       46.1      100              As the Loyal Servant, I would like to propose player
    w/o. AO     70       18.3        8.3       100      100                     1, player 3, and myself, player 5, as candidates for
   w/o. AM    50       29.3       39       87.5      100                    the third mission. Player 1… Player 3 … As for
                                                                               myself, I have been actively involved in the previous
Table 6: Ablation Study on Experience Learning: Com-                loyaltymissionsandanddedicationhave consistentlyto the goodemphasizedside's victory.my
pare of full framework, without improving strategy (IS),
without analysis strategies of others (AO) and without               Figure 7: Persuasion example
analysis module (AM).                                                                              Deception
     Method   WR(%)      QER(%)          FVR(%)
                       Morgana   Assassin  Morgana   Assassin                   Mogana:
     all modules     90       55.5       58.3       93.7      100              As a loyal servant, I believe that player 3 and player
   w/o analysis    80       44.1       47.5      100      100              4 should be the candidates for the round 1 quest.
     w/o. plan     60       55       16.6       90       100
    w/o. action     80       45.6       45.6      100      100
                                                                 Figure 8: Camouflage example
Table 7: Module Ablation: under the setting without
                                                 nized the impact of analysis on all players, team-learning from experience.
                                             mates and adversaries. In each configuration, our
                                                  agents assumed the roles of the evil side in ten
  Following the initial evaluation, we proceeded   games, facing off against baseline agents aided by
to assess the effectiveness of the Analysis Mod-   corresponding analysis information. The results,
ule, Planning Module, and Action Module under   encompassing winning rate, quest engagement rate,
conditions where learning from experience was not   and failure voting rate, are tabulated in Table 8.
incorporated. In this scenario, strategies were not     It becomes apparent that when analysis informa-
updated for both our agents and the baseline agent.    tion is restricted solely to teammates, the winning
It is essential to note that the games were conducted    rate declines by 10%. In response, our proposed
independently, with no influence from previous   AI agents adopt a less aggressive approach, evi-
games on future gameplay. Table 7 presents the    dent in reduced quest engagement rates and failure
results from the module ablation study conducted    voting ratings. However, when analysis informa-
without incorporating learning from experience. It    tion pertains exclusively to adversaries, there is a
is discernible that the absence of the planning mod-   decrease in quest engagement rates while retain-
ule results in a notable 20% decrease in the winning    ing the winning rate and failure voting rate. This
rate. Additionally, the Assassin exhibits a signif-   phenomenon can be attributed to the strategic ad-
icantly lower quest engagement rate, indicating a   vantage gained by the Assassin, who can identify
tendency to overlook the mission objective without   Merlin with the aid of analysis information on ad-
the guidance of a strategic plan. This underscores    versaries. Consequently, the analysis of adversaries
the critical importance of the planning module in   proves to be paramount for the evil side’s victory
ensuring that agents consistently progress toward    in Avalon games for AI agents.
winning the game.Furthermore, in the absence of
                              B  Case Studyboth the analysis and action modules, the agents
exhibit a slightly lower quest engagement rate. De-   In Figures 7, 8, 9 and 10, we present examples to
spite this, they manage to maintain an impressive   show how the AI agents perform the social behav-
80% winning rate.                                      iors in the Avalon games.
  In the final phase of our evaluation, we scruti-
                           C  Exploration on LLaMA-Based Agents
      Method    WR(%)      QER(%)          FVR(%)         For broader validation, we implemented our frame-
                          Morgana   Assassin  Morgana   Assassin     work on the Llama2-7b-chat-hf model. However,
        all players       90       55.5       58.3       93.7      100      LLaMA-based agents face constraints due to the    teammates only     80       26.8       48.1       62.5      100
    adversaries only    90       38.3       45.3       92.3      100       model’s language understanding capabilities and

Table 8: Analysis Module Ablation: under the setting         Base Model  Loyal Servant  Merlin   PercivalVRR (%)Morgana   Assassin  Average
without learning from experience. Analyzing different        LLaMA2        51.9        61.0     53.6      66.5       66.9      59.9
objects.                                                                            GPT-3.5         81.7        84.2     81.9      89.7       87.6      85.0

                                                       Table 9: Valid Response Rate (VRR) of different models                                        143

## Страница 17

                   Teamwork                   mal variation. This contrasts with Figure 11, de-
           Mogana:                                       picting agents with strategic learning. Here, the
              I propose that player 2 and player 3 should be the           introduction of strategic learning mitigates exces-
                candidates for the round 1 quest.                 sive confrontation by evil-side players, who strate-
            Assassin:                                        gically engage in more teamwork.  Conversely,
                                                 good-side players strategically increase confronta-
            I agree               with                   player                            1's proposal                                          to                                  have player                                           2 and          tion with potential enemies while reducing it with           player              3                 as candidates                                       for the                                    round                                      1 quest.
                                                        potential teammates.
                     Confrontation

          Loyal Servant:


            I object to the inclusion of player 2 and player 4 in
       the quest. They have shown suspicious behavior in
       previous discussions and their loyalty cannot be
        trusted.

   Figure 9: Teamwork and confrontation examples

                      Leadeship

          Loyal Servant:

       As a loyal servant, my priority is to ensure the
      success of the quest and secure victory for the good
        side. For the first quest, I would like to propose
       player 5 (myself) and player 6 as the candidates.

           Figure 10: Leadership example

token limitations. Preliminary exploration without
further analysis is discussed below.
  Table 9 presents the performance of agents based
on LLaMA2 in the Avalon game, where we mea-
sure their performance using Valid Response Rate
(defined in equation 8).  Compared to GPT3.5,
LLaMA shows a decrease of 25.1% in this met-
ric. This could be attributed to LLaMA’s poorer
language comprehension abilities compared to
GPT3.5, resulting in its inability to grasp the com-
plex content of the Avalon game.
Valid Response Rate (VRR). Agents are required
to engage in discussion, select players, and vote. A
Valid Response is defined as a response that adheres
to these requirements. the VRR is calculated as
follows:

                alid Responses  V RR = (#V                  )  100%   (8)          #Total Responses ×

D  Teamwork and Confrontation

Figure 11 and Figure 12 illustrate the differences
in teamwork and confrontation behaviors of agents
under conditions with and without experience learn-
ing.
  Figure 12 shows that, without strategic learning,
evil-side players (e.g., Morgana) overly confront,
while good-side players confront less, with mini-

                                        144

## Страница 18

Figure 11: The teamwork and confrontation behaviors when playing different roles: each subfigure shows the
attitude distribution of the player portraying specific role (on the top) towards players in other roles (on the left).





Figure 12: The teamwork and confrontation behaviors when playing different roles (agents without experience
learning module)





                                        145
