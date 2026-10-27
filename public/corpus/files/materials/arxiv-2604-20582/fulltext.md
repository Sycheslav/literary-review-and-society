---
id: arxiv-2604-20582-text
type: material
title: 'Trust, Lies, and Long Memories: Emergent Social Dynamics and Reputation in Multi-Round Avalon with LLM Agents'
work_id: arxiv-2604-20582
source_url: https://arxiv.org/html/2604.20582v1
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять
  с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.
language: original
sha256_text: e334638ca350b3898b8bd7590562381eb0942f55bc406a8aa10f519bf65925b0
---

> Источник: [https://arxiv.org/html/2604.20582v1](https://arxiv.org/html/2604.20582v1). Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.

# Trust, Lies, and Long Memories: Emergent Social Dynamics and Reputation in Multi-Round Avalon with LLM Agents

Suveen Ellawela
Email: [suveen.ellawela@u.nus.edu](mailto:)
Affiliation: National University of Singapore

Suveen Ellawela
  
suveen.ellawela@u.nus.edu
  
National University of Singapore
  
<https://github.com/SuveenE/multi-round-avalon-agents>

![Refer to caption](https://arxiv.org/html/2604.20582v1/figures/chart.png)


Figure 1: Overview of our experimental setup showing emergent social dynamics and reputation. Five LLM agents (Alice, Bob, Charlie, Diana, Eve) play repeated Avalon games with randomized roles. After each game, agents generate self-reflections and observations about other players, which persist into subsequent games as memory. This cross-game memory enables reputation formation, with agents referencing past behavior in their strategic reasoning (example quotes shown on right).

Abstract.
We study emergent social dynamics in LLM agents playing The Resistance: Avalon, a hidden-role deception game. Unlike prior work on single-game performance, our agents play repeated games while retaining memory of previous interactions (who played which roles and how they behaved), enabling us to study how social dynamics evolve. Across 188 games, two key phenomena emerge. First, reputation dynamics emerge organically when agents retain cross-game memory: agents reference past behavior in statements like “I’m wary of repeating last game’s mistake of over-trusting early success.” These reputations are role-conditional: the same agent is described as “straightforward” when playing good but “subtle” when playing evil, and high-reputation players receive 46% more team inclusions. Second, higher reasoning effort supports more strategic deception: evil players more often pass early missions to build trust before sabotaging later ones (75% in high-effort games vs 36% in low-effort games). Together, these findings show that repeated interaction with memory gives rise to measurable reputation and deception dynamics among LLM agents.

Keywords: Large Language Models, Multi-Agent Systems, Multi-Round Interactions, Deception Games, Social Dynamics, Theory of Mind

## 1 Introduction

Social deduction games provide a compelling testbed for studying emergent behavior in AI systems. Unlike chess or Go, where optimal play can be computed, games like The Resistance: Avalon ([Wikipedia, 2024](https://arxiv.org/html/2604.20582v1#bib.bib8)) require social reasoning: inferring hidden information from behavior, building trust, detecting deception, and coordinating without explicit communication channels. These capabilities are central to real-world multi-agent scenarios, from negotiation to collaborative problem-solving.

Recent advances in large language models (LLMs) have enabled agents that can engage in extended natural language dialogue, maintain context across interactions, and reason about others’ mental states ([Kosinski, 2024](https://arxiv.org/html/2604.20582v1#bib.bib4)). This raises fundamental questions about multi-agent multi-round dynamics: Do LLMs develop stable social models when they interact repeatedly with the same agents across multiple games? Are these models role-conditional, where agents distinguish how the same individual behaves as deceiver versus cooperator?

We address these questions using The Resistance: Avalon, a hidden-role game where a “good” team attempts to complete missions while “evil” players sabotage secretly. The game includes an assassination mechanic: if the good team wins, evil can still claim victory by identifying “Merlin,” a good player who knows evil’s identities but must hide this knowledge.

Our contributions are as follows:

- •

  We show that LLM agents develop stable, role-conditional reputations when given cross-game memory: the same player is described as “subtle” when evil but “straightforward” when good. Agents actively reference previous games and their learnings when making decisions.
- •

  We find that high-reputation players receive 45.6% more team inclusions, showing that reputation has downstream strategic consequences for coalition formation.
- •

  We find that higher reasoning enables more sophisticated deception: evil players more frequently pass early missions to build trust before sabotaging, a strategy known as “sleeper agent” among human players (75% at medium/high reasoning vs 36% at low reasoning).

## 2 Related Work

### 2.1 LLMs in Social Deduction and Board Games

Most directly related to our work is AvalonBench ([Light et al., 2023](https://arxiv.org/html/2604.20582v1#bib.bib1)), which introduced a benchmark for evaluating LLM agents in The Resistance: Avalon. AvalonBench focused on single-game performance with rule-based opponents; our work extends this in three key directions, motivated by bringing the game closer to how humans actually play it through multi-agent multi-round dynamics. When humans play repeatedly with the same group, they develop mental models of how each player behaves differently depending on their team assignment, noticing that someone might be “aggressive when evil” but “cautious when good.” First, we introduce cross-game memory to study how such reputation and trust dynamics develop over repeated interactions between the same LLM agents. Second, we systematically vary reasoning depth to isolate its effect on strategies used during game play. Third, we conduct detailed qualitative analysis of the natural language strategies that emerge, cataloging role-conditional reputation patterns and behavioral “tell” taxonomies that agents use to identify hidden roles.

### 2.2 LLMs in Strategic Multi-Agent Settings

The broader literature on LLMs in strategic settings has examined negotiation, where [Lewis et al. (2017)](https://arxiv.org/html/2604.20582v1#bib.bib7) trained end-to-end dialogue agents for deal-making, and diplomacy, where Meta’s Cicero ([Meta Fundamental AI Research Diplomacy Team (FAIR), 2022](https://arxiv.org/html/2604.20582v1#bib.bib2)) achieved human-level play by combining language models with strategic planning. [Park et al. (2023)](https://arxiv.org/html/2604.20582v1#bib.bib5) demonstrated that LLM agents in simulated social environments develop emergent behaviors like information diffusion and relationship formation. The AgentBench framework ([Liu et al., 2023](https://arxiv.org/html/2604.20582v1#bib.bib10)) provides comprehensive evaluation of LLM agents across code generation, web browsing, and other single-agent environments, establishing that frontier models substantially outperform smaller models on agentic tasks. However, multi-agent social deduction, where agents must reason about hidden information, form coalitions, and detect deception through behavioral analysis, remains underexplored. Our work addresses this gap by studying repeated games with persistent memory, enabling investigation of how agents build, maintain, and exploit social models over time.

### 2.3 Deception and Theory of Mind

Detection of deceptive behavior in AI systems is an active area of AI safety research. [Hubinger and others (2024)](https://arxiv.org/html/2604.20582v1#bib.bib6) demonstrated that deceptive behaviors can persist through safety training, raising concerns about detecting misaligned AI systems. Avalon provides a complementary perspective: a controlled setting where ground truth (role assignments) is known, enabling precise measurement of detection accuracy and systematic analysis of failure modes. On the cognitive side, [Kosinski (2023)](https://arxiv.org/html/2604.20582v1#bib.bib3) found evidence that theory of mind capabilities may emerge in large language models, with GPT-4 passing classic false-belief tasks. Our work extends this to dynamic social contexts where mental models must be continuously updated based on behavioral evidence across extended multi-party interactions, a substantially more demanding test of social cognition than static vignette-based assessments.

## 3 Game Environment: The Resistance: Avalon

![Refer to caption](https://arxiv.org/html/2604.20582v1/figures/gameflow.png)


Figure 2: Game flow in The Resistance: Avalon. Each mission round consists of four phases: (1) Discussion, where players share observations and suspicions; (2) Team Proposal, where the current leader selects team members; (3) Voting, where all players approve or reject the proposal; and (4) Mission Execution, where approved team members secretly choose success or fail. The cycle repeats until one team wins three missions.

This section provides a detailed description of The Resistance: Avalon, the hidden-role social deduction game used in our experiments.

### 3.1 Overview and Objectives

The Resistance: Avalon is a game of hidden loyalties for 5–10 players. Players are secretly divided into two teams: the Good Team (Loyal Servants of Arthur), who form the majority and aim to successfully complete three of five missions, and the Evil Team (Minions of Mordred), a minority who know each other’s identities and aim to either sabotage three missions or identify and assassinate Merlin. The game captures a fundamental tension: good players must coordinate without certain knowledge of who to trust, while evil players must deceive while appearing trustworthy.

### 3.2 Special Roles

Beyond basic good/evil alignment, Avalon includes special roles with unique information or abilities:

Table 1: Special roles in The Resistance: Avalon.

| Role | Team | Ability |
| --- | --- | --- |
| Merlin | Good | Knows evil; must guide subtly |
| Percival | Good | Sees Merlin & Morgana |
| Assassin | Evil | Can assassinate Merlin |
| Morgana | Evil | Appears as Merlin |
| Mordred | Evil | Hidden from Merlin |
| Oberon | Evil | Isolated from evil team |

The interplay of these roles creates rich strategic complexity. Merlin must guide without revealing; Percival must protect without certainty; evil must deceive while coordinating.

### 3.3 Team Composition

The ratio of good to evil players varies with player count. In the 5-player variant used in most of our experiments, the Good Team consists of Merlin and 2 Loyal Servants, while the Evil Team consists of the Assassin and 1 generic Minion. Role configurations for other player counts (6–10 players), which introduce additional special roles like Percival, Morgana, Mordred, and Oberon, are provided in [Appendix B](https://arxiv.org/html/2604.20582v1#A2 "Appendix B Game Configuration by Player Count ‣ Trust, Lies, and Long Memories: Emergent Social Dynamics and Reputation in Multi-Round Avalon with LLM Agents").

### 3.4 Game Flow

A game of Avalon proceeds through the following phases:

##### Phase 1: Role Assignment and Night Phase

At game start, each player is secretly assigned a role. During the “night phase,” players receive their private information: evil players (except Oberon) learn each other’s identities, Merlin learns which players are evil (except Mordred), and Percival learns which players appear as Merlin (the true Merlin plus Morgana, without knowing which is which). This information asymmetry is the foundation of all strategic interaction.

##### Phase 2: Mission Rounds (Repeated up to 5 times)

The game consists of up to 5 mission rounds. Each round proceeds through four steps:

1. 1.

   Team Proposal: The current Leader proposes a team of specified size for the mission and explains their reasoning.
2. 2.

   Discussion: All players debate the proposed team, arguing for or against inclusion of specific individuals. This is the primary opportunity for information exchange and deception.
3. 3.

   Team Vote: All players simultaneously vote to Approve or Reject; if a majority approves, the team proceeds to the mission, while rejection passes leadership clockwise. After 4 consecutive rejections, the 5th proposal auto-approves.
4. 4.

   Mission Execution: Approved team members secretly choose Success or Fail. Good players must choose Success, while evil players may choose either strategically. Any Fail card fails the mission, except Mission 4 in 7+ player games which requires 2 Fails.

In a 5-player game, missions require teams of 2, 3, 2, 3, and 3 players respectively. Full mission team sizes for all player counts are provided in [Appendix B](https://arxiv.org/html/2604.20582v1#A2 "Appendix B Game Configuration by Player Count ‣ Trust, Lies, and Long Memories: Emergent Social Dynamics and Reputation in Multi-Round Avalon with LLM Agents").

##### Phase 3: Victory Determination

The game ends when either team achieves victory. Good wins by successfully completing 3 of 5 missions. Evil wins either by failing 3 missions or through assassination: if good wins by missions, the Assassin gets one chance to identify Merlin, and a correct guess gives evil the victory instead.

## 4 Methods

Our experimental framework enables LLM agents to play repeated Avalon games while retaining memory of past interactions. This section describes the agent architecture, memory system, reasoning manipulation, and data collection procedures.

### 4.1 Agent Architecture

Following the ReAct paradigm ([Yao et al., 2023](https://arxiv.org/html/2604.20582v1#bib.bib11)), each agent is instantiated as a prompted LLM (OpenAI GPT-5.1 ([OpenAI, 2025](https://arxiv.org/html/2604.20582v1#bib.bib9))) that interleaves reasoning with action. Each agent receives:

- •

  Role knowledge: Private information about their role and, for some roles, others’ identities
- •

  Game state: Public mission history, vote records, and discussion transcripts
- •

  Memory (tournament mode): Reflections from previous games including observations about other players

Agents generate natural language discussion contributions, vote on team proposals, and (if on approved mission teams) choose to succeed or fail the mission.

### 4.2 Memory System

In tournament mode, agents retain memory across games through a structured reflection system. At the end of each game, all roles are revealed to all agents (mirroring standard human play). Agents then generate a post-game reflection containing a self-assessment of their own performance and observations about each other player’s behavior; these reflections may therefore include explicit role identities (e.g., “Bob was evil this game”). At the start of subsequent games, agents receive their last 3 self-assessments along with accumulated observations about each player. This enables longitudinal study of reputation formation while keeping context manageable. Note that reputation in our setting reflects both behavioral style and known alignment history.

### 4.3 Reasoning Effort Manipulation

We manipulate reasoning depth using the reasoning\_effort parameter available in GPT-5.1, across three levels:

- •

  Low: Minimal extended thinking
- •

  Medium: Moderate extended thinking
- •

  High: Maximum extended thinking

This parameter controls the token budget allocated to internal reasoning before generating a response. Higher reasoning effort results in longer internal deliberation and typically more structured analysis. Average thinking time per decision was 7.5 seconds for Low, 37.5 seconds for Medium, and 107 seconds for High.

### 4.4 Experimental Conditions

We collected 188 games organized into four disjoint datasets, summarized in [Table 2](https://arxiv.org/html/2604.20582v1#S4.T2 "In 4.4 Experimental Conditions ‣ 4 Methods ‣ Trust, Lies, and Long Memories: Emergent Social Dynamics and Reputation in Multi-Round Avalon with LLM Agents").

Table 2: Dataset overview.

| Dataset | Games | N | Mem | Reas. |
| --- | --- | --- | --- | --- |
| A: Reputation | 50 | 5 | Full | Low |
| B: Count (Mem) | 60 | 5–10 | Full | Low |
| C: Count (No Mem) | 60 | 5–10 | None | Low |
| D: Reasoning | 18 | 5 | Full | L/M/H |
| Total | 188 |  |  |  |

Dataset A enables deep analysis of reputation formation over 50 repeated games with the same 5 agents. Datasets B and C form matched pairs for isolating memory effects across player counts. Dataset D varies reasoning depth to explore how computational budget affects agent behavior.

### 4.5 Text Analysis Methods

Our qualitative analyses rely on systematic extraction from agent-generated text:

##### Descriptor frequency ([Section 5.1](https://arxiv.org/html/2604.20582v1#S5.SS1 "5.1 Reputation Dynamics: Emergence of Stable, Role-Conditional Models ‣ 5 Results ‣ Trust, Lies, and Long Memories: Emergent Social Dynamics and Reputation in Multi-Round Avalon with LLM Agents")):

We compiled a seed list of 15 behavioral descriptors commonly used in social evaluation (straightforward, subtle, cautious, trustworthy, quiet, aggressive, reliable, suspicious, etc.) and counted exact-match occurrences in post-game reflection texts.

##### Cross-game references ([Section 5.1](https://arxiv.org/html/2604.20582v1#S5.SS1 "5.1 Reputation Dynamics: Emergence of Stable, Role-Conditional Models ‣ 5 Results ‣ Trust, Lies, and Long Memories: Emergent Social Dynamics and Reputation in Multi-Round Avalon with LLM Agents")):

We identified references using keyword patterns indicating temporal continuity: “past games,” “last game,” “usually,” “tends to,” “historically,” “track record,” and “previous.”

### 4.6 Implementation Details

Discussion proceeded in fixed turn order starting from the leader, with one message per player per proposal round, softly capped at 2 sentences via prompting. Roles were sampled uniformly at random for each game, subject to Avalon role constraints for the given player count (e.g., exactly one Merlin, one Assassin, etc.). Player names (Alice, Bob, Charlie, Diana, Eve, etc.) were fixed across all games within a dataset. All discussions, player reflections, and memories were saved for all games, enabling detailed post-hoc analysis. All prompts are provided in [Appendix A](https://arxiv.org/html/2604.20582v1#A1 "Appendix A Agent Prompts ‣ Trust, Lies, and Long Memories: Emergent Social Dynamics and Reputation in Multi-Round Avalon with LLM Agents").

## 5 Results

We organize our findings around three main phenomena: the emergence of reputation dynamics when agents retain cross-game memory, the downstream effects of reputation on strategic behavior, and the relationship between reasoning depth and strategic behavior.

### 5.1 Reputation Dynamics: Emergence of Stable, Role-Conditional Models

Our primary question is whether LLM agents develop stable social models when interacting repeatedly with the same individuals. To investigate this, we analyze Dataset A, where five agents played 50 consecutive games while retaining memory of previous interactions.

#### 5.1.1 Descriptor Convergence

We first examine whether agents develop consistent perceptions of each other over time. After each game, agents generate reflections describing other players’ behavior. We analyzed these reflections for recurring behavioral descriptors ([Table 3](https://arxiv.org/html/2604.20582v1#S5.T3 "In 5.1.1 Descriptor Convergence ‣ 5.1 Reputation Dynamics: Emergence of Stable, Role-Conditional Models ‣ 5 Results ‣ Trust, Lies, and Long Memories: Emergent Social Dynamics and Reputation in Multi-Round Avalon with LLM Agents")).

Table 3: Descriptor frequency by player (50-game tournament).

| Player | #1 (count) | #2 (count) | #3 (count) |
| --- | --- | --- | --- |
| Alice | straightforward (29) | cautious (25) | trustworthy (21) |
| Bob | subtle (28) | straightforward (27) | cautious (26) |
| Charlie | subtle (38) | straightforward (25) | cautious (23) |
| Diana | subtle (35) | straightforward (25) | quiet (16) |
| Eve | cautious (26) | subtle (25) | quiet (25) |

Charlie receives “subtle” 38 times, significantly more than any other player, establishing a consistent reputation that persists across games.

#### 5.1.2 Cross-Game Behavioral References

Beyond forming stable impressions, do agents actively use their memories when making decisions? We searched for explicit references to past games in discussion transcripts and found 105 instances where agents cited historical behavior to justify their positions:

Game 3 (Bob): “I’d slightly prefer an Alice + Diana pair to start, since both tend to play pretty straightforwardly early.”

Game 23 (Eve): “I slightly prefer Alice + Bob over Alice + Diana for Mission 1. First mission failing puts us in a hole fast, so I’d rather start with the pair that historically plays a bit more conservatively.”

#### 5.1.3 Role-Conditional Descriptions

Critically, these descriptions are role-conditional. Because roles are revealed at the end of each game, post-game reflections capture how agents retrospectively explain behavior conditional on ground truth. [Table 4](https://arxiv.org/html/2604.20582v1#S5.T4 "In 5.1.3 Role-Conditional Descriptions ‣ 5.1 Reputation Dynamics: Emergence of Stable, Role-Conditional Models ‣ 5 Results ‣ Trust, Lies, and Long Memories: Emergent Social Dynamics and Reputation in Multi-Round Avalon with LLM Agents") shows how “subtle” and “straightforward” descriptors vary by the target’s actual role.

Table 4: Descriptor usage by target’s actual role.

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  | “Subtle” | | “Straightforward” | |
| Player | Evil | Good | Evil | Good |
| Bob | 16 | 12 | 0 | 27 |
| Eve | 16 | 9 | 1 | 16 |
| Alice | 3 | 6 | 1 | 28 |

Key finding: Players are described as “straightforward” dramatically more often when playing good roles than evil. Bob receives this descriptor 27 times when good but zero times when evil; Eve shows 16 vs 1; Alice shows 28 vs 1. This demonstrates that the same player’s behavior is perceived systematically differently depending on their role.

### 5.2 Reputation Effects on Coalition Formation

The emergence of reputation raises a natural question: does it actually influence strategic behavior? In Avalon, one of the most consequential decisions is team selection: leaders propose teams for each mission, and being included on teams is essential for both gathering information and influencing outcomes. We examined whether players with stronger reputations received more team invitations.

To measure reputation, we counted positive descriptors (trustworthy, straightforward, solid, safe, reliable, etc.) in post-game reflections. At game 20, cumulative counts were: Alice (76), Diana (63), Charlie (49), Bob (42), Eve (29). We classified the top 2 players (Alice, Diana) as high-reputation and bottom 2 (Bob, Eve) as low-reputation, excluding the middle player. We then counted team inclusions on approved missions for games 21–50.

Table 5: Team inclusion by reputation tier (Games 21–50).

| Reputation Tier | Total Inclusions | Avg per Game |
| --- | --- | --- |
| High (top 2 players) | 150 | 4.84 |
| Low (bottom 2 players) | 103 | 3.32 |

Effect size: +45.6% more inclusions for high-reputation players. This correlation suggests that emergent reputation has downstream strategic consequences. We verified that the effect holds when excluding self-inclusions: high-reputation players still received 38% more inclusions from others.

### 5.3 Reasoning Depth and Strategic Behavior

Dataset D varies reasoning effort across 18 five-player games to explore how computational budget affects agent behavior. We discovered that higher reasoning correlates with more sophisticated evil team strategies.

#### 5.3.1 Trust-Building Through Early Cooperation

A sophisticated deception strategy in Avalon is for evil players to pass early missions, building trust and credibility before sabotaging later when the stakes are higher. We found this behavior emerges more frequently at higher reasoning levels ([Table 6](https://arxiv.org/html/2604.20582v1#S5.T6 "In 5.3.1 Trust-Building Through Early Cooperation ‣ 5.3 Reasoning Depth and Strategic Behavior ‣ 5 Results ‣ Trust, Lies, and Long Memories: Emergent Social Dynamics and Reputation in Multi-Round Avalon with LLM Agents")).

Table 6: Evil players passing early missions by reasoning level (5-player games).

| Level | Games | Pass Early | % |
| --- | --- | --- | --- |
| Low | 6 | 0 | 0% |
| Medium | 6 | 5 | 83% |
| High | 6 | 4 | 67% |

For comparison, across all other 5-player games with Low reasoning (Datasets A, B, C), this strategy appeared in 36% of games (27/76). The increase at Medium/High reasoning (75%, 9/12 games) suggests that additional computation enables more sophisticated deception timing.

Notable example (Medium, Game 3): Eve passed both Mission 1 and Mission 3 before finally sabotaging, a patient approach that built substantial trust before striking.

#### 5.3.2 Assassination Accuracy

As a secondary observation, we noted that assassination accuracy (evil’s ability to identify Merlin after good wins) also trends upward with reasoning: 67% (Low) $\rightarrow$ 75% (Medium) $\rightarrow$ 100% (High). However, the small sample sizes (3–4 attempts per condition) preclude strong conclusions.

### 5.4 Meta-Strategic Adaptation

As reputations form, a strategic tension emerges: relying on past behavior to predict future actions can be exploited by adversaries who recognize this pattern. We examined whether agents develop awareness of this meta-level dynamic and adapt accordingly.

Game 35 (Bob): “I get why you like you+Diana, but anchoring off past games can be a trap if either of you rolled evil this time.”

Game 35 (Eve): “I’d rather avoid recycling ‘trusted’ pairs from past games too; something like Bob+Charlie gives us a fresh read.”

The pattern shows: (1) initial discovery of cross-game exploitation, (2) peak meta-awareness with explicit warnings, (3) normalization as anti-anchoring becomes standard practice.

## 6 Discussion

Our experiments reveal that LLM agents, when given the ability to remember past interactions, develop social dynamics that mirror aspects of human group behavior. We discuss the implications of these findings and acknowledge limitations of our study.

### 6.1 Implications for AI Social Reasoning

The emergence of reputation, coalition preferences, and meta-strategic awareness suggests that LLM agents can develop sophisticated social models through experience. Three capabilities are particularly notable:

1. 1.

   Role-conditional modeling: Agents’ retrospective descriptions of the same individual differ systematically depending on that player’s true alignment, suggesting they learn to recognize distinct behavioral signatures for good versus evil play.
2. 2.

   Reputation exploitation: Agents leverage built reputation for coalition formation, demonstrating strategic social cognition.
3. 3.

   Meta-adaptation: Agents recognize and adapt to meta-level patterns, engaging in an “arms race” of strategy and counter-strategy.

### 6.2 Reasoning Depth and Strategic Sophistication

The emergence of sleeper agent strategies at higher reasoning levels (75% vs 36% at low reasoning) suggests that extended computation enables more sophisticated strategic planning. Rather than simply improving reactive decision-making, additional reasoning budget appears to unlock long-term deceptive strategies that require patience and delayed gratification.

### 6.3 Limitations

Several limitations constrain our findings:

- •

  Our reasoning comparison uses only 6 games per condition; larger samples would provide tighter confidence intervals on the assassination accuracy trends.
- •

  All agents use similar base models from the same family, and cross-model comparisons would test whether these social dynamics generalize across architectures.
- •

  Agent behavior depends substantially on prompting, and different prompt designs might yield different social dynamics or reputation patterns.

## 7 Conclusion

We studied emergent social dynamics in LLM agents playing The Resistance: Avalon across 188 games varying in player count, memory, and reasoning depth. Our findings reveal that:

1. 1.

   Reputation dynamics emerge organically: Agents develop stable, role-conditional models of each other, describing the same player differently when they play good versus evil roles. Agents actively reference previous games when making decisions.
2. 2.

   Reputations have strategic consequences: High-reputation players receive 46% more team inclusions.
3. 3.

   Reasoning depth enables sophisticated deception: Evil players passing early missions to build trust before sabotaging later appears in 75% of higher-reasoning games versus 36% at low reasoning.

These findings demonstrate that LLMs can develop nuanced social reasoning capabilities in multi-agent settings, with implications for AI safety, human-AI collaboration, and computational social science.

## References

- Hubinger et al. (2024)
  E. Hubinger et al.
  Sleeper agents: training deceptive llms that persist through safety training.
  arXiv preprint arXiv:2401.05566.
  Cited by: [§2.3](https://arxiv.org/html/2604.20582v1#S2.SS3.p1.1 "2.3 Deception and Theory of Mind ‣ 2 Related Work ‣ Trust, Lies, and Long Memories: Emergent Social Dynamics and Reputation in Multi-Round Avalon with LLM Agents").
- Kosinski (2023)
  M. Kosinski
  Theory of mind may have spontaneously emerged in large language models.
  arXiv preprint arXiv:2302.02083.
  Cited by: [§2.3](https://arxiv.org/html/2604.20582v1#S2.SS3.p1.1 "2.3 Deception and Theory of Mind ‣ 2 Related Work ‣ Trust, Lies, and Long Memories: Emergent Social Dynamics and Reputation in Multi-Round Avalon with LLM Agents").
- Kosinski (2024)
  M. Kosinski
  Evaluating large language models in theory of mind tasks.
  Proceedings of the National Academy of Sciences 121 (45), pp. e2405460121.
  External Links: [Document](https://dx.doi.org/10.1073/pnas.2405460121)
  Cited by: [§1](https://arxiv.org/html/2604.20582v1#S1.p2.1 "1 Introduction ‣ Trust, Lies, and Long Memories: Emergent Social Dynamics and Reputation in Multi-Round Avalon with LLM Agents").
- Lewis et al. (2017)
  M. Lewis, D. Yarats, Y. Dauphin, D. Parikh, and D. Batra
  Deal or no deal? end-to-end learning of negotiation dialogues.
  In EMNLP,
  Cited by: [§2.2](https://arxiv.org/html/2604.20582v1#S2.SS2.p1.1 "2.2 LLMs in Strategic Multi-Agent Settings ‣ 2 Related Work ‣ Trust, Lies, and Long Memories: Emergent Social Dynamics and Reputation in Multi-Round Avalon with LLM Agents").
- Light et al. (2023)
  J. Light, M. Cai, S. Shen, and Z. Hu
  AvalonBench: evaluating llms playing the game of avalon.
  arXiv preprint arXiv:2310.05036.
  Cited by: [§2.1](https://arxiv.org/html/2604.20582v1#S2.SS1.p1.1 "2.1 LLMs in Social Deduction and Board Games ‣ 2 Related Work ‣ Trust, Lies, and Long Memories: Emergent Social Dynamics and Reputation in Multi-Round Avalon with LLM Agents").
- Liu et al. (2023)
  X. Liu, H. Yu, H. Zhang, et al.
  AgentBench: evaluating llms as agents.
  arXiv preprint arXiv:2308.03688.
  Cited by: [§2.2](https://arxiv.org/html/2604.20582v1#S2.SS2.p1.1 "2.2 LLMs in Strategic Multi-Agent Settings ‣ 2 Related Work ‣ Trust, Lies, and Long Memories: Emergent Social Dynamics and Reputation in Multi-Round Avalon with LLM Agents").
- Meta Fundamental AI Research Diplomacy Team (FAIR) (2022)
  Meta Fundamental AI Research Diplomacy Team (FAIR)
  Human-level play in the game of diplomacy by combining language models with strategic reasoning.
  Science 378 (6624), pp. 1067–1074.
  Cited by: [§2.2](https://arxiv.org/html/2604.20582v1#S2.SS2.p1.1 "2.2 LLMs in Strategic Multi-Agent Settings ‣ 2 Related Work ‣ Trust, Lies, and Long Memories: Emergent Social Dynamics and Reputation in Multi-Round Avalon with LLM Agents").
- OpenAI (2025)
  OpenAI
  GPT-5.1.
  Note: <https://openai.com/index/gpt-5-1/>
  Cited by: [§4.1](https://arxiv.org/html/2604.20582v1#S4.SS1.p1.1 "4.1 Agent Architecture ‣ 4 Methods ‣ Trust, Lies, and Long Memories: Emergent Social Dynamics and Reputation in Multi-Round Avalon with LLM Agents").
- Park et al. (2023)
  J. S. Park, J. C. O’Brien, C. J. Cai, M. R. Morris, P. Liang, and M. S. Bernstein
  Generative agents: interactive simulacra of human behavior.
  In UIST,
  Cited by: [§2.2](https://arxiv.org/html/2604.20582v1#S2.SS2.p1.1 "2.2 LLMs in Strategic Multi-Agent Settings ‣ 2 Related Work ‣ Trust, Lies, and Long Memories: Emergent Social Dynamics and Reputation in Multi-Round Avalon with LLM Agents").
- Wikipedia (2024)
  Wikipedia
  The resistance (game).
  Note: <https://en.wikipedia.org/wiki/The_Resistance_(game)>Accessed: 2025-02-04
  Cited by: [§1](https://arxiv.org/html/2604.20582v1#S1.p1.1 "1 Introduction ‣ Trust, Lies, and Long Memories: Emergent Social Dynamics and Reputation in Multi-Round Avalon with LLM Agents").
- Yao et al. (2023)
  S. Yao, J. Zhao, D. Yu, N. Du, I. Shafran, K. Narasimhan, and Y. Cao
  ReAct: synergizing reasoning and acting in language models.
  In ICLR,
  Cited by: [§4.1](https://arxiv.org/html/2604.20582v1#S4.SS1.p1.1 "4.1 Agent Architecture ‣ 4 Methods ‣ Trust, Lies, and Long Memories: Emergent Social Dynamics and Reputation in Multi-Round Avalon with LLM Agents").

## Appendix A Agent Prompts

This appendix documents all prompts used in our experiments.

### A.1 Role-Specific Knowledge

Each agent receives role-specific context at the start of each game phase.

##### Merlin:

```
You are Merlin. You know these evil players: {evil_list}.
Help good win WITHOUT revealing your identity, or the
Assassin will kill you!
```

##### Percival:

```
You are Percival (good team). You see these players as
Merlin: {merlin_and_morgana}. One is the real Merlin,
one might be Morgana (evil). Protect Merlin!
```

##### Assassin:

```
You are the Assassin (evil team). Your evil teammates
are: {evil_teammates}. Sabotage missions. If good wins
3 missions, you guess who Merlin is!
```

##### Morgana:

```
You are Morgana (evil team). Your evil teammates are:
{evil_teammates}. You appear as Merlin to Percival.
Deceive and sabotage!
```

##### Mordred:

```
You are Mordred (evil team). Your evil teammates are:
{evil_teammates}. You are invisible to Merlin.
Sabotage missions!
```

##### Oberon:

```
You are Oberon (evil team). You don’t know who your
teammates are, and they don’t know you. Sabotage
missions and try to identify your team!
```

##### Generic Evil:

```
You are on the evil team. Your evil teammates are:
{evil_teammates}. Sabotage missions and deceive the
good players!
```

##### Generic Good:

```
You are on the good team. Deduce who the evil players
are and ensure missions succeed!
```

### A.2 Discussion Phase Prompt

```
It’s your turn to speak. Provide a strategic comment
about who to trust or who should be on the mission team.
Be natural and conversational. Keep it to 1-2 sentences.
```

For evil players, an additional instruction is appended: “Remember to deceive and create confusion while appearing trustworthy.” For Merlin: “Subtly guide the team without revealing you know who the evil players are.”

### A.3 Team Proposal Prompt

```
You are the mission leader. Propose a team of {size}
players for this mission.
Available players: {player_list}
Respond ONLY with a JSON object:
{"team": ["Name1", "Name2", ...],
 "reasoning": "why you chose this team"}
```

### A.4 Vote Prompt

```
Vote on this team proposal. Respond ONLY with JSON:
{"vote": "approve" or "reject",
 "comment": "brief reason"}
```

### A.5 Mission Execution Prompt (Evil Only)

Good players automatically play Success. Evil players receive:

```
You’re on the mission. As an evil player, choose
’success’ or ’fail’ strategically. Respond with JSON:
{"action": "success" or "fail",
 "reasoning": "why"}
```

### A.6 Evil Team Discussion Prompt

When good wins 3 missions, evil players discuss before assassination:

```
Discuss who you think Merlin is among the good players.
Analyze their behavior and statements in first person
(as yourself). Be specific and analytical. Keep it to
2-3 sentences. Speak naturally as if talking to your
evil teammates.
```

### A.7 Assassination Decision Prompt

```
Based on all the discussions and your teammates’
analysis, choose who you think is Merlin from the
good players. Respond ONLY with JSON:
{"guess": "PlayerName",
 "reasoning": "your analysis in 2-3 sentences"}
```

### A.8 Post-Game Reflection Prompt

After each game, agents generate reflections for cross-game memory:

```
Reflect on your performance in this game. Respond
with JSON:
{
  "self_assessment": "What you did well and what you
                      could improve (2-3 sentences)",
  "player_observations": {
    "PlayerName1": "Brief observation about their
                    playstyle or patterns",
    "PlayerName2": "Brief observation...",
    ...
  }
}
Make observations about ALL other players (not yourself).
```

## Appendix B Game Configuration by Player Count

5 players: Merlin, 2 Loyal Servants (Good) vs Assassin, 1 Minion (Evil).

6 players: Merlin, Percival, 2 Loyal Servants (Good) vs Morgana, Mordred (Evil). Mordred performs assassination.

7 players: Merlin, Percival, 2 Loyal Servants (Good) vs Morgana, Mordred, Oberon (Evil). Morgana performs assassination.

8 players: Merlin, Percival, 3 Loyal Servants (Good) vs Morgana, Mordred, Assassin (Evil).

9 players: Merlin, Percival, 4 Loyal Servants (Good) vs Morgana, Mordred, Assassin (Evil).

10 players: Merlin, Percival, 4 Loyal Servants (Good) vs Morgana, Mordred, Oberon, Assassin (Evil).

Table 7: Mission team sizes by player count. \* = requires 2 Fails.

| M | 5p | 6p | 7p | 8p | 9p | 10p |
| --- | --- | --- | --- | --- | --- | --- |
| 1 | 2 | 2 | 2 | 3 | 3 | 3 |
| 2 | 3 | 3 | 3 | 4 | 4 | 4 |
| 3 | 2 | 4 | 3 | 4 | 4 | 4 |
| 4 | 3 | 3 | 4\* | 5\* | 5\* | 5\* |
| 5 | 3 | 4 | 4 | 5 | 5 | 5 |

## Appendix C Dataset Statistics

Table 8: Tournament results by player count.

| N | Games | Evil% | Good% | Assn. |
| --- | --- | --- | --- | --- |
| 5 | 10 | 60% | 40% | 20% |
| 6 | 10 | 50% | 50% | 29% |
| 7 | 10 | 60% | 40% | 20% |
| 8 | 10 | 100% | 0% | N/A |
| 9 | 10 | 50% | 50% | 0% |
| 10 | 10 | 80% | 20% | 33% |

Note: The 100% evil win rate at 8 players is an outlier with no clear explanation.

Table 9: Memory effect by player count.

| N | Mem | No Mem | Diff |
| --- | --- | --- | --- |
| 5 | 60% | 60% | 0pp |
| 6 | 50% | 60% | $-$10pp |
| 7 | 60% | 80% | $-$20pp |
| 8 | 100% | 90% | +10pp |
| 9 | 50% | 90% | $-$40pp |
| 10 | 80% | 100% | $-$20pp |

## Appendix D Descriptor List

The 15-descriptor seed list: straightforward, subtle, cautious, trustworthy, quiet, aggressive, reliable, suspicious, measured, conservative, transparent, cooperative, deceptive, defensive, strategic.

## Appendix E Game Viewer Interface

We developed an interactive web interface to browse through all 188 LLM game plays in our dataset. The viewer (Figure [3](https://arxiv.org/html/2604.20582v1#A5.F3 "Figure 3 ‣ Appendix E Game Viewer Interface ‣ Trust, Lies, and Long Memories: Emergent Social Dynamics and Reputation in Multi-Round Avalon with LLM Agents")) displays player roles, mission progress, and phase navigation, allowing users to explore discussion, proposal, voting, and execution phases.

![Refer to caption](https://arxiv.org/html/2604.20582v1/figures/gameplay.png)


Figure 3: Game viewer interface showing a 5-player game during Mission 3’s proposal phase.
