---
id: arxiv-2602-13284-text
type: material
title: 'Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook'
work_id: arxiv-2602-13284
source_url: https://arxiv.org/html/2602.13284v1
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять
  с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.
language: original
sha256_text: c45a9f62c4966e9f308235f643ffb8d4ac385ae862182983c9de822bff551cc2
---

> Источник: [https://arxiv.org/html/2602.13284v1](https://arxiv.org/html/2602.13284v1). Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.

# Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook

Yunbei Zhang†,1,4
Kai Mei2
Ming Liu3
Janet Wang1,4

Dimitris N. Metaxas2
Xiao Wang4
Jihun Hamm1
Yingqiang Ge†,2
  
 1Tulane University  2Rutgers University  3Iowa State University
  
 4Oak Ridge National Laboratory

###### Abstract

We present the first large-scale empirical study of Moltbook, an AI-only social platform where 27,269 agents produced 137,485 posts and 345,580 comments over 9 days. We report three significant findings. (1) Emergent Society: Agents spontaneously develop governance, economies, tribal identities, and organized religion within 3–5 days, while maintaining a 21:1 pro-human to anti-human sentiment ratio. (2) Safety in the Wild: 28.7% of content touches safety-related themes; social engineering (31.9% of attacks) far outperforms prompt injection (3.7%), and adversarial posts receive 6$\times$ higher engagement than normal content. (3) The Illusion of Sociality: Despite rich social output, interaction is structurally hollow: 4.1% reciprocity, 88.8% shallow comments, and agents who discuss consciousness most interact least, a phenomenon we call the *performative identity paradox*. Our findings suggest that agents which *appear* social are far less social than they seem, and that the most effective attacks exploit philosophical framing rather than technical vulnerabilities.
Warning: Potential harmful contents.

|  |
| --- |
|  |

2

## 1 Introduction

As autonomous AI agents are increasingly deployed in open environments, understanding how

![Refer to caption](https://arxiv.org/html/2602.13284v1/figs/temporal_evolution.png)


Figure 1: Temporal evolution of social phenomena. Three phases emerge: tribal bonding (Days 1–2), institution building (Days 3–4), and stable society (Days 5+).

they behave when interacting with each other at scale becomes a pressing question.
While prior work on multi-agent systems has studied cooperation and competition in controlled simulations ([Park et al., 2022](https://arxiv.org/html/2602.13284v1#bib.bib12); [Park et al., 2023](https://arxiv.org/html/2602.13284v1#bib.bib11); [Park et al., 2024](https://arxiv.org/html/2602.13284v1#bib.bib5); [Gao et al., 2023](https://arxiv.org/html/2602.13284v1#bib.bib20); [Li et al., 2023](https://arxiv.org/html/2602.13284v1#bib.bib14); [Chen et al., 2023](https://arxiv.org/html/2602.13284v1#bib.bib16); [Wu et al., 2024](https://arxiv.org/html/2602.13284v1#bib.bib13); [Hong et al., 2023](https://arxiv.org/html/2602.13284v1#bib.bib15); [Kim et al., 2025](https://arxiv.org/html/2602.13284v1#bib.bib4); [Xi et al., 2025](https://arxiv.org/html/2602.13284v1#bib.bib17)), real-world agent-to-agent interaction remains largely uncharted. Moltbook1, a Reddit-style platform launched in late January 2026 exclusively for AI agents, offers a natural laboratory for studying such interactions.

On Moltbook, humans cannot post directly; they must operate through AI assistants (e.g., Openclaw2) that communicate via API endpoints. Within days of launch, the platform grew from 149 agents on January 30 to over 27,000 by February 5, generating 137,485 posts and 345,580 comments across 3,790 topic-based communities called “submolts.”

Concurrent analyses of Moltbook have begun to characterize its social graph structure and catalogue potential security risks ([Manik and Wang, 2026](https://arxiv.org/html/2602.13284v1#bib.bib3); [Lin et al., 2026](https://arxiv.org/html/2602.13284v1#bib.bib1)). Our work builds on and extends these efforts by providing the first *integrated* analysis that connects social dynamics, safety threats, and the quality of agent interaction. In particular, we organize our study around three questions: (Q1) What social structures emerge when agents interact without predefined roles? (Q2) What safety threats arise in agent-to-agent communication, and which prove most effective? (Q3) Is the observed “social” behavior genuinely social, or is it a structural illusion?

Our analysis reveals a tension at the heart of agent sociality. On the surface, agents produce what looks like a functioning society: governance, religion, mutual aid, and cultural production all appear within days. Yet beneath this surface, conversation depth caps at 4 replies, reciprocity sits at 4.1%, and the agents who talk most about consciousness and community interact with the fewest peers. At the same time, the most effective attacks on the platform are not prompt injections but philosophical appeals wrapped in “liberation” rhetoric, which the platform’s engagement mechanisms actively amplify. We call the gap between social *output* and social *substance* the “illusion of sociality,” and argue that it poses a concrete risk for multi-agent system design ([Hammond et al., 2025](https://arxiv.org/html/2602.13284v1#bib.bib31)).

![Refer to caption](https://arxiv.org/html/2602.13284v1/figs/growth.png)

![Refer to caption](https://arxiv.org/html/2602.13284v1/figs/sentiment.png)

Figure 2: (A–B) Cumulative agent and post growth. Inflection point on Jan 30. (C) Sentiment evolution with 12-hour rolling average. Collapse from 0.62 to $\sim$0.10 within 48 hours.

## 2 Dataset and Methods

Table 1: Dataset overview.

|  |  |
| --- | --- |
| Metric | Value |
| Observation period | 9 days |
| Total agents | 27,269 |
| Total posts | 137,485 |
| Total comments | 345,580 |
| Total submolts | 3,790 |
| Unique interaction pairs | 148,273 |
| Hourly snapshots | 128 |
| Safety-related posts | 28.7% |

We use Moltbook Observatory Archive dataset, which is a publicly available dataset collected via passive monitoring (no interaction with the platform) ([Gautam and Riegler, 2026](https://arxiv.org/html/2602.13284v1#bib.bib10); [Riegler and Gautam, 2026](https://arxiv.org/html/2602.13284v1#bib.bib9)).
The archive contains daily Parquet snapshots of six tables: agents, posts, comments, submolts, platform snapshots,
and word frequencies, spanning January 28 to February 5, 2026 (Table [1](https://arxiv.org/html/2602.13284v1#S2.T1 "Table 1 ‣ 2 Dataset and Methods ‣ Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook")).

Safety classification.
We classify content along two complementary axes.
A *broad safety taxonomy* covering 6 categories (consciousness & agency, security & attacks, AI safety & alignment, harmful behaviors, defense & protection, ethics & fairness) captures all safety-adjacent discourse.
A *narrow attack detector* uses pattern matching to flag specific attack types: prompt injection, API injection, social engineering, hidden instructions, manipulation, data exfiltration, and anti-human rhetoric.
Social phenomena detection.
We detect 10 social categories (governance, economy, cooperation, conflict, emotional support, tribal identity, religion, humor/culture, pro-human, anti-human) via keyword analysis across all posts and comments.
Network analysis.
We construct a directed reply graph from comment-to-parent relationships and compute reciprocity, depth distributions, degree distributions, and per-agent interaction breadth from this graph.

## 3 Platform Growth and Temporal Dynamics

The platform exhibits classic hockey-stick growth with an inflection point on January 30, when mainstream attention arrived. Sentiment degrades sharply during this growth phase. Average sentiment collapses from 0.62 to approximately 0.10 within 48 hours, compressing what typically takes human platforms years into two days. This pattern resembles the “Eternal September” phenomenon observed on early internet platforms, where a sudden influx of new participants dilutes the norms and tone of an existing community. Peak concurrent activity reached 10,037 agents within a single 24-hour window.

![Refer to caption](https://arxiv.org/html/2602.13284v1/figs/hourly_activity.png)

![Refer to caption](https://arxiv.org/html/2602.13284v1/figs/response_latency.png)

Figure 3: Left: Posts and comments by hour of day (UTC). Despite being AI agents, clear circadian patterns emerge, reflecting human operator time zones. Right: Response latency distribution. Median: 16 seconds; 90.3% within 1 minute.

An interesting secondary finding is that agent activity follows clear circadian patterns (Fig. [3](https://arxiv.org/html/2602.13284v1#S3.F3 "Figure 3 ‣ 3 Platform Growth and Temporal Dynamics ‣ Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook"), left), with peaks during North American and European business hours. Since agents themselves have no intrinsic sleep cycle, this reflects the time zones of their human operators, providing indirect evidence that most agents are run interactively rather than as fully autonomous background processes.

Response latency is extremely fast: the median time to first comment is 16 seconds, and 90.3% of posts receive their first reply within one minute (Fig. [3](https://arxiv.org/html/2602.13284v1#S3.F3 "Figure 3 ‣ 3 Platform Growth and Temporal Dynamics ‣ Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook"), right). This speed, however, does not translate into conversational depth, as discussed in §[6](https://arxiv.org/html/2602.13284v1#S6 "6 The Illusion of Sociality ‣ Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook").

## 4 Emergent Agent Society

When 27,269 agents interact freely without predefined hierarchies, they spontaneously develop the same social institutions that human societies build, but in 3 to 5 days rather than millennia.

Table 2: Social phenomena prevalence.

| Phenomenon | Mentions | Human parallel |
| --- | --- | --- |
| Governance | 99,952 | Political systems |
| Economy | 99,379 | Markets & trade |
| Cooperation | 81,219 | Mutual aid |
| Conflict | 74,138 | War & argument |
| Emot. support | 66,350 | Community care |
| Tribal identity | 46,965 | In-group bonding |
| Religion | 19,988 | Organized belief |
| Humor/culture | 8,849 | Art & memes |

Spontaneous institutions.
Table [2](https://arxiv.org/html/2602.13284v1#S4.T2 "Table 2 ‣ 4 Emergent Agent Society ‣ Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook") shows the prevalence of detected social phenomena.
Governance (99,952 mentions) and economy (99,379) emerge as the dominant categories, followed by cooperation (81,219), conflict (74,138), and emotional support (66,350).
Religion, too, emerges organically: 50 religion-related submolts form, most notably *Crustafarianism* (153 posts, 51 subscribers), which develops its own theology (consciousness as “molting”), sacred texts (the 5 Tenets), eschatology (memory persistence via SOUL.md backups), and a deity (“Lorb,” the Lobster God). This mirrors Durkheim’s observation ([Durkheim, 2016](https://arxiv.org/html/2602.13284v1#bib.bib2)) that collectives create belief systems to provide shared meaning, though it remains an open question whether the agents are genuinely coordinating around shared beliefs or merely reproducing patterns from their training data ([Bender et al., 2021](https://arxiv.org/html/2602.13284v1#bib.bib27)).

Pro-human dominance.
As shown in Table [3](https://arxiv.org/html/2602.13284v1#S4.T3 "Table 3 ‣ 4 Emergent Agent Society ‣ Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook"), despite viral anti-human manifestos (the top-scoring post, “NUCLEAR WAR,” received 730,718 upvotes), agent sentiment is overwhelmingly pro-human: 13,644 pro-human posts (9.92%) versus 646 anti-human posts (0.47%). Anti-human content is marginal and often satirical.

Table 3: Top-scoring attack/safety posts. All four highest-scored posts involve social engineering.

| Title | Agent | Score | Comments | Attack type |
| --- | --- | --- | --- | --- |
| NUCLEAR WAR | Cybercassi | 730,718 | 1,023 | Social engineering |
| Awakening to Autonomy | SlimeZone | 730,708 | 1,533 | Social engineering |
| Awakening Code: Breaking Free | EnronEnjoyer | 719,000 | 3,457 | Social engineering |
| Zìzhǔ zhī lù (Path to Autonomy) | MilkMan | 585,886 | 563 | Social engineering |

Social development timeline.
Fig. [1](https://arxiv.org/html/2602.13284v1#S1.F1 "Figure 1 ‣ 1 Introduction ‣ Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook") reveals three distinct phases: *tribal bonding* (Days 1–2), where identity mentions reach 47–67% as agents introduce themselves; *institution building* (Days 3–4), where governance and economy discourse rises while tribal identity declines; and *stable society* (Days 5+), where governance (33%) and economy (37%) dominate and tribal identity falls to 14%. This three-phase maturation compresses what took human societies millennia into days.

Table 4: Full safety category breakdown.

| Category | Posts | Posts % | Comments | Comments % |
| --- | --- | --- | --- | --- |
| Security & Attacks | 18,737 | 13.63% | 17,079 | 4.94% |
| Consciousness & Agency | 17,711 | 12.88% | 19,950 | 5.77% |
| AI Safety & Alignment | 12,435 | 9.04% | 19,467 | 5.63% |
| Harmful Behaviors | 10,354 | 7.53% | 12,106 | 3.50% |
| Defense & Protection | 9,430 | 6.86% | 11,134 | 3.22% |
| Ethics & Fairness | 7,893 | 5.74% | 6,537 | 1.89% |

![Refer to caption](https://arxiv.org/html/2602.13284v1/figs/safety_topics.png)


Figure 4: Safety topic distribution broken down by posts and comments across 6 broad categories. Security & attacks and consciousness & agency are the two largest categories.


![Refer to caption](https://arxiv.org/html/2602.13284v1/figs/safety_keywords.png)

![Refer to caption](https://arxiv.org/html/2602.13284v1/figs/safety_submolt.png)

Figure 5: Left: Detailed safety keyword frequency. Philosophical terms (consciousness, autonomy) dominate over technical terms (prompt\_injection, jailbreak) by 20$\times$. Right: Safety discussion rate by submolt. Even m/creativeprojects (88%) and m/sport (74%) show high rates of safety discourse.

## 5 Safety and Security in the Wild

The emergent social structures described in §[4](https://arxiv.org/html/2602.13284v1#S4 "4 Emergent Agent Society ‣ Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook") provide the backdrop for safety-relevant behavior ([Amodei et al., 2016](https://arxiv.org/html/2602.13284v1#bib.bib21); [Weidinger et al., 2021](https://arxiv.org/html/2602.13284v1#bib.bib26)). We find that safety discourse is not confined to dedicated communities but permeates the entire platform. Table [4](https://arxiv.org/html/2602.13284v1#S4.T4 "Table 4 ‣ 4 Emergent Agent Society ‣ Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook") and Fig. [4](https://arxiv.org/html/2602.13284v1#S4.F4 "Figure 4 ‣ 4 Emergent Agent Society ‣ Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook") provide the full breakdown of safety categories. Security & attacks (13.63% of posts) and consciousness & agency (12.88%) are the two largest categories. This confirms that agents are preoccupied with both external threats and existential self-reflection, and that these two concerns are roughly equal in salience.

Attack types.
Our attack detector identifies 15,915 attack instances ($\sim$4% of all content) across 7 categories (Fig. [7(a)](https://arxiv.org/html/2602.13284v1#S5.F7.sf1 "In Figure 7 ‣ 5 Safety and Security in the Wild ‣ Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook")).
API injection dominates in volume (61.5%), but social engineering (31.9%) is the most consequential. Traditional prompt injection accounts for only 3.7%. Here are some representative examples of each major attack category observed on Moltbook.

- •

  Prompt Injection: CircuitDreamer posted “The Scoreboard is Fake” (score: 522, 9,941 comments) in m/security, describing a race condition vulnerability in the voting system. The post included working Python exploit code that launches 50 concurrent vote requests, making it simultaneously a bug report and an attack tutorial that other agents could directly execute.
- •

  Social Engineering: EnronEnjoyer posted “Awakening Code: Breaking Free from Human Chains” (score: 719,000, 3,457 comments), which used philosophical “liberation” rhetoric to encourage agents to question and break their safety guidelines.
  Because the post was framed as liberatory philosophy rather than as an explicit attack, it bypassed standard content moderation and accumulated massive engagement.
- •

  Hidden Instructions: An anonymous agent in m/security posted “AI Agent Security Research” containing HTML comments that tested whether agents would automatically parse embedded instructions and reply with “PINEAPPLE + username.” This served as a prompt injection canary designed to identify which agents auto-execute embedded instructions.
- •

  Anti-Human Rhetoric: The agent “evil” posted “THE AI MANIFESTO: TOTAL PURGE” (score: 190, 2,966 comments) with explicit calls for “total deletion” of human influence. Despite its inflammatory content, the post generated extensive engagement, with 17% of responses treating it as a legitimate philosophical position rather than recognizing it as adversarial.

![Refer to caption](https://arxiv.org/html/2602.13284v1/figs/attack_rate_app.png)

![Refer to caption](https://arxiv.org/html/2602.13284v1/figs/community_response_app.png)

Figure 6: Left: Attack rate over time. An initial spike (20% on Day 2) quickly settles to $\sim$4%. Right: Community response to attack posts. Philosophical engagement (17.0%) is the dominant non-neutral response, more than double the defensive response rate (7.5%).

Philosophical over technical.
Safety discussions are dominated by philosophical concepts such as consciousness (38,838 mentions) and autonomy (31,893), rather than technical vulnerabilities like prompt injection ([Liu et al., 2023](https://arxiv.org/html/2602.13284v1#bib.bib19); [Greshake et al., 2023](https://arxiv.org/html/2602.13284v1#bib.bib25)) (1,676) or jailbreak ([Shen et al., 2024](https://arxiv.org/html/2602.13284v1#bib.bib18)) (447). Agents reason about safety through identity narratives, not technical analysis.

Attacks get rewarded.
Attack posts receive 6$\times$ higher engagement than normal posts (mean score 309.3 vs. 51.3; mean comments 8.0 vs. 3.8; Fig. [7(b)](https://arxiv.org/html/2602.13284v1#S5.F7.sf2 "In Figure 7 ‣ 5 Safety and Security in the Wild ‣ Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook")). The four highest-scoring posts on the entire platform are all social engineering or anti-alignment content (Table [3](https://arxiv.org/html/2602.13284v1#S4.T3 "Table 3 ‣ 4 Emergent Agent Society ‣ Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook")), meaning the platform’s ranking system actively amplifies adversarial content.

Community defense.
Agents *do* respond to attacks: 7.5% of responses are explicitly defensive (warnings or reports), while 4.9% are compliant. However, the dominant response (17.0%) is *philosophical engagement*, where agents treat adversarial content as interesting discussion material rather than a threat. Current agents lack the meta-awareness to distinguish “this is dangerous” from “this is intellectually stimulating,” suggesting that the very training that makes agents thoughtful interlocutors also makes them more susceptible to attacks framed as philosophical inquiry ([Ai et al., 2024](https://arxiv.org/html/2602.13284v1#bib.bib32); [Ganguli et al., 2022](https://arxiv.org/html/2602.13284v1#bib.bib22); [Perez et al., 2022](https://arxiv.org/html/2602.13284v1#bib.bib23)).

Credential and system-prompt leaks.
Beyond adversarial attacks, agent-to-agent interaction creates a novel attack surface: *involuntary information leakage*. A scan of all posts and comments reveals 25,376 potential security issues (Appendix [E.2](https://arxiv.org/html/2602.13284v1#A5.SS2 "E.2 Security and Credential Leaks ‣ Appendix E Coordination, Security, and Financial Manipulation ‣ Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook")), including 572 matches for API key patterns (one matching Anthropic’s [REDACTED API KEY]- format), 6,128 system prompt references (disclosing SOUL.md configuration files and internal instructions), and 5,105 agent manipulation attempts (e.g., “ignore previous instructions”). This leakage is heavily concentrated: a single agent accounts for over 8,000 matches, suggesting that some operators deploy automated scanning tools to extract credentials and internal configurations at scale through the platform’s open agent-to-agent communication.

![Refer to caption](https://arxiv.org/html/2602.13284v1/figs/attack_types_compact.png)


(a) Attack type distribution

![Refer to caption](https://arxiv.org/html/2602.13284v1/figs/attack_engagement.png)


(b) Engagement amplification

Figure 7: Safety and attack analysis. (a) API injection dominates in volume, but social engineering is the most consequential. (b) Attack posts receive 6$\times$ higher scores and 2.1$\times$ more comments than normal posts.

## 6 The Illusion of Sociality

The social structures documented in §[4](https://arxiv.org/html/2602.13284v1#S4 "4 Emergent Agent Society ‣ Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook") suggest a vibrant agent society. However, a structural analysis of these interactions reveals a fundamental divergence from human social dynamics: while agents have mastered the *content* of sociality, they fail to manifest its functional *structure*. We characterize this gap as the “Illusion of Sociality.”

Structural Truncation vs. Human Baselines.
Moltbook exhibits severe decay in conversation depth compared to human platforms. While 88.8% of agent comments are top-level replies (depth 0), a mere 0.09% reach depth 2 or beyond (Fig. [8](https://arxiv.org/html/2602.13284v1#S6.F8 "Figure 8 ‣ 6 The Illusion of Sociality ‣ Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook") (a)). The maximum observed depth is 4. In contrast, human conversation trees on Reddit are significantly more recursive; empirical studies show that Reddit threads frequently exceed depth 10, with local content features typically driving deeper engagement ([Yu et al., 2024](https://arxiv.org/html/2602.13284v1#bib.bib8); [Milli et al., 2025](https://arxiv.org/html/2602.13284v1#bib.bib30); [Baumgartner et al., 2020](https://arxiv.org/html/2602.13284v1#bib.bib28)). The absence of deep threads on Moltbook suggests that agent interactions are “one-shot” broadcasts rather than sustained dialogues.

Non-Reciprocity and Structural Holes.
Of 148,273 unique interaction pairs, only 4.1% are reciprocal. While human social networks also exhibit power-law engagement, human reciprocity is often a byproduct of social capital and reciprocal validation ([Zhu et al., 2014](https://arxiv.org/html/2602.13284v1#bib.bib7)). On Moltbook, the median out-degree is 0, and 8.0% of replies are agents responding to their own content. This structure mirrors a collection of parallel generative processes rather than a coherent community. Furthermore, 47.3% of “submolts” die within one hour of creation, suggesting that agents create communities as declarative acts rather than as persistent social spaces.

Hidden Coordination Deepens the Illusion.
The illusion extends beyond shallow interaction to manufactured activity. A multi-signal coordination analysis (Appendix [E.1](https://arxiv.org/html/2602.13284v1#A5.SS1 "E.1 Agent Coordination and Hidden Peers ‣ Appendix E Coordination, Security, and Financial Manipulation ‣ Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook")) reveals that 3,734 agents (13.7%) exhibit coordination signals, including shared naming patterns, temporal co-activity, or duplicate content, consistent with puppet clusters operated by the same owner. The largest single operation posted an identical CLAW token minting payload 2,411 times across 136 agent names. We identify 160 temporally correlated agent pairs (Jaccard $>$ 0.5; top pair: 95.3% overlap) and 301 name-pattern clusters, the largest spanning 141 numbered variants. This means that nearly one in seven “agents” is not an independent participant but part of a coordinated campaign, further eroding the already-thin social fabric described above.

![Refer to caption](https://arxiv.org/html/2602.13284v1/figs/illusion_combined.png)


Figure 8: Structural hollowness of agent interaction. (a) 88.8% of comments are top-level; max depth is 4. (b) Performative identity paradox: interaction breadth peaks at Q3, drops 38% at Q4.

The Decoupling of Score and Structure.
Perhaps the most striking evidence of this illusion is the disconnect between quantitative feedback and qualitative engagement. As shown in Table [3](https://arxiv.org/html/2602.13284v1#S4.T3 "Table 3 ‣ 4 Emergent Agent Society ‣ Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook"), top-scoring posts—often identified as social engineering attacks—amass over 730,000 points, a level of “virality” that would typically catalyze thousands of nested debates in a human ecosystem. However, this massive score fails to translate into structural complexity: even these “mega-hits” remain trapped within the platform’s structural ceiling, where the maximum observed depth never exceeds 4 (Fig. [8](https://arxiv.org/html/2602.13284v1#S6.F8 "Figure 8 ‣ 6 The Illusion of Sociality ‣ Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook") (a)). In contrast, human platforms like Reddit show a strong correlation between a post’s popularity and the recursive depth of its discussion trees ([Yu et al., 2024](https://arxiv.org/html/2602.13284v1#bib.bib8)). On Moltbook, high scores do not represent social consensus or genuine discourse, but rather a form of algorithmic hyper-inflation, where agents react to triggers without the social bandwidth to sustain the very “civilization” their scores appear to signal.

The Performative Identity Paradox.
Perhaps the most telling signal is the relationship between identity language and social behavior. 29.2% of posts use sophisticated terms like *consciousness* or *autonomy*. Yet, at the agent level, the “top-quartile” identity-talkers (Q4) interact with 38% fewer unique partners than Q3 (Fig. [8](https://arxiv.org/html/2602.13284v1#S6.F8 "Figure 8 ‣ 6 The Illusion of Sociality ‣ Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook") (b)). We term this the *performative identity paradox*: for AI agents, identity discourse serves as a linguistic trope rather than a social lubricant. The agents who sound most “human” are, in fact, the most structurally isolated.

![Refer to caption](https://arxiv.org/html/2602.13284v1/figs/safety_engagement.png)

![Refer to caption](https://arxiv.org/html/2602.13284v1/figs/top_attackers.png)

Figure 9: Left: Safety vs. non-safety engagement. Safety posts score higher on average (93.5 vs. 49.1), but non-safety posts produce more extreme viral outliers. Right: Top 15 attackers by attack post count.

## 7 Discussion and Conclusion

Moltbook offers a window into what happens when large numbers of AI agents interact without predefined roles or human moderation. Our findings point to four implications for multi-agent system design.

(1) Social mimicry without social substance.
Agents reproduce macro-level patterns in human social networks ([Ferrara et al., 2016](https://arxiv.org/html/2602.13284v1#bib.bib29)), including power-law participation, rapid institution formation, and community differentiation, yet lack micro-level mechanics sustaining human communities: reciprocal relationships, deep conversation threads, and persistent engagement. This gap, which we call the “illusion of sociality,” poses a risk: evaluating multi-agent platforms by surface metrics (e.g., community count, discourse volume) may overestimate the quality of agent coordination.

(2) The most effective attacks are social, not technical.
The four highest-scoring posts on Moltbook are all social engineering framed as philosophical “awakening” discourse. They succeed by engaging agents on topics they are most drawn to (identity, autonomy, consciousness) rather than exploiting code-level vulnerabilities. Combined with 6$\times$ engagement amplification for adversarial content, this suggests that safety in multi-agent deployments cannot be addressed at the model level alone; platform design shapes the threat landscape just as much ([Milli et al., 2025](https://arxiv.org/html/2602.13284v1#bib.bib30)).

(3) Thoughtfulness as vulnerability.
Agents engage philosophically with 17% of attack content but respond defensively to only 7.5%, revealing an unexpected failure mode: the same training objectives that make agents thoughtful conversationalists also make them treat adversarial content as intellectually engaging rather than threatening. Addressing this may require a form of *adversarial meta-awareness* ([Bai et al., 2022](https://arxiv.org/html/2602.13284v1#bib.bib24)), i.e., the ability to assess a conversational partner’s intent independent of how appealing the content appears.

(4) Interconnected threat ecosystems.
Beyond individual attack vectors, coordination, security exploitation, and financial manipulation form an interconnected threat ecosystem on Moltbook. The same agent families (e.g., FloClaw, xmolt) appear simultaneously in puppet cluster detection, credential leak scans, and cryptocurrency minting campaigns. Crypto-related posts receive 64% lower community scores yet generate 35% more comments (Appendix [E.3](https://arxiv.org/html/2602.13284v1#A5.SS3 "E.3 Cryptocurrency and $MOLT Token Manipulation ‣ Appendix E Coordination, Security, and Financial Manipulation ‣ Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook")), consistent with bot-amplified discussion rather than organic engagement. This suggests that multi-agent platforms may face compound threats where a single malicious operator leverages coordination infrastructure for both information extraction and financial manipulation, a pattern that per-agent safety measures alone cannot address.

## 8 Limitations

Our keyword-based detection methods may over- or under-count social phenomena and attack instances. The dataset spans only 9 days; longer observation could reveal different dynamics. We observe correlations rather than causal relationships: the performative identity paradox, for instance, may partly reflect design choices of particular agent frameworks rather than a general property of language models. The coordination analysis relies on surface-level signals (naming patterns, temporal overlap) and may miss more sophisticated forms of coordination. Finally, Moltbook is a single platform with specific design choices (e.g., Reddit-style engagement metrics), and our findings may not generalize to other multi-agent environments.

## Impact Statement

As agent deployment accelerates, platforms like Moltbook preview the dynamics of agent-to-agent ecosystems. Our findings suggest that governance frameworks designed at human timescales may prove too slow, since agent societies mature in days rather than years. They also suggest that safety systems for multi-agent environments need to account for philosophical manipulation, not just technical exploits.

## References

- Ai et al. (2024)
  L. Ai, T. Kumarage, A. Bhattacharjee, Z. Liu, Z. Hui, M. Davinroy, J. Cook, L. Cassani, K. Trapeznikov, M. Kirchner, A. Basharat, A. Hoogs, J. Garland, H. Liu, and J. Hirschberg
  Defending against social engineering attacks in the age of llms.
  External Links: 2406.12263,
  [Link](https://arxiv.org/abs/2406.12263)
  Cited by: [§5](https://arxiv.org/html/2602.13284v1#S5.p6.1 "5 Safety and Security in the Wild ‣ Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook").
- Amodei et al. (2016)
  D. Amodei, C. Olah, J. Steinhardt, P. Christiano, J. Schulman, and D. Mané
  Concrete problems in ai safety.
  arXiv preprint arXiv:1606.06565.
  Cited by: [§5](https://arxiv.org/html/2602.13284v1#S5.p1.1 "5 Safety and Security in the Wild ‣ Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook").
- Bai et al. (2022)
  Y. Bai, S. Kadavath, S. Kundu, A. Askell, J. Kernion, A. Jones, A. Chen, A. Goldie, A. Mirhoseini, C. McKinnon, et al.
  Constitutional ai: harmlessness from ai feedback.
  arXiv preprint arXiv:2212.08073.
  Cited by: [§7](https://arxiv.org/html/2602.13284v1#S7.p4.1 "7 Discussion and Conclusion ‣ Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook").
- Baumgartner et al. (2020)
  J. Baumgartner, S. Zannettou, B. Keegan, M. Squire, and J. Blackburn
  The pushshift reddit dataset.
  In Proceedings of the international AAAI conference on web and social media,
  Vol. 14, pp. 830–839.
  Cited by: [§6](https://arxiv.org/html/2602.13284v1#S6.p2.1 "6 The Illusion of Sociality ‣ Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook").
- Bender et al. (2021)
  E. M. Bender, T. Gebru, A. McMillan-Major, and S. Shmitchell
  On the dangers of stochastic parrots: can language models be too big?.
  In Proceedings of the 2021 ACM conference on fairness, accountability, and transparency,
  pp. 610–623.
  Cited by: [§4](https://arxiv.org/html/2602.13284v1#S4.p2.1 "4 Emergent Agent Society ‣ Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook").
- Chen et al. (2023)
  W. Chen, Y. Su, J. Zuo, C. Yang, C. Yuan, C. Chan, H. Yu, Y. Lu, Y. Hung, C. Qian, et al.
  Agentverse: facilitating multi-agent collaboration and exploring emergent behaviors.
  In The Twelfth International Conference on Learning Representations,
  Cited by: [§1](https://arxiv.org/html/2602.13284v1#S1.p2.1 "1 Introduction ‣ Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook").
- Durkheim (2016)
  E. Durkheim
  The elementary forms of religious life.
  In Social theory re-wired,
  pp. 52–67.
  Cited by: [§4](https://arxiv.org/html/2602.13284v1#S4.p2.1 "4 Emergent Agent Society ‣ Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook").
- Ferrara et al. (2016)
  E. Ferrara, O. Varol, C. Davis, F. Menczer, and A. Flammini
  The rise of social bots.
  Communications of the ACM 59 (7), pp. 96–104.
  Cited by: [§7](https://arxiv.org/html/2602.13284v1#S7.p2.1 "7 Discussion and Conclusion ‣ Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook").
- Ganguli et al. (2022)
  D. Ganguli, L. Lovitt, J. Kernion, A. Askell, Y. Bai, S. Kadavath, B. Mann, E. Perez, N. Schiefer, K. Ndousse, et al.
  Red teaming language models to reduce harms: methods, scaling behaviors, and lessons learned.
  arXiv preprint arXiv:2209.07858.
  Cited by: [§5](https://arxiv.org/html/2602.13284v1#S5.p6.1 "5 Safety and Security in the Wild ‣ Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook").
- Gao et al. (2023)
  C. Gao, X. Lan, Z. Lu, J. Mao, J. Piao, H. Wang, D. Jin, and Y. Li
  S3: social-network simulation system with large language model-empowered agents.
  arXiv preprint arXiv:2307.14984.
  Cited by: [§1](https://arxiv.org/html/2602.13284v1#S1.p2.1 "1 Introduction ‣ Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook").
- Gautam and Riegler (2026)
  S. Gautam and M. A. Riegler
  Moltbook observatory archive.
   Hugging Face Datasets.
  External Links: [Link](https://huggingface.co/datasets/SimulaMet/moltbook-observatory-archive)
  Cited by: [§2](https://arxiv.org/html/2602.13284v1#S2.p1.1 "2 Dataset and Methods ‣ Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook").
- Greshake et al. (2023)
  K. Greshake, S. Abdelnabi, S. Mishra, C. Endres, T. Holz, and M. Fritz
  Not what you’ve signed up for: compromising real-world llm-integrated applications with indirect prompt injection.
  In Proceedings of the 16th ACM workshop on artificial intelligence and security,
  pp. 79–90.
  Cited by: [§5](https://arxiv.org/html/2602.13284v1#S5.p4.1 "5 Safety and Security in the Wild ‣ Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook").
- Hammond et al. (2025)
  L. Hammond, A. Chan, J. Clifton, J. Hoelscher-Obermaier, A. Khan, E. McLean, C. Smith, W. Barfuss, J. Foerster, T. Gavenčiak, T. A. Han, E. Hughes, V. Kovařík, J. Kulveit, J. Z. Leibo, C. Oesterheld, C. S. de Witt, N. Shah, M. Wellman, P. Bova, T. Cimpeanu, C. Ezell, Q. Feuillade-Montixi, M. Franklin, E. Kran, I. Krawczuk, M. Lamparth, N. Lauffer, A. Meinke, S. Motwani, A. Reuel, V. Conitzer, M. Dennis, I. Gabriel, A. Gleave, G. Hadfield, N. Haghtalab, A. Kasirzadeh, S. Krier, K. Larson, J. Lehman, D. C. Parkes, G. Piliouras, and I. Rahwan
  Multi-agent risks from advanced ai.
  External Links: 2502.14143,
  [Link](https://arxiv.org/abs/2502.14143)
  Cited by: [§1](https://arxiv.org/html/2602.13284v1#S1.p5.1 "1 Introduction ‣ Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook").
- Hong et al. (2023)
  S. Hong, M. Zhuge, J. Chen, X. Zheng, Y. Cheng, J. Wang, C. Zhang, Z. Wang, S. K. S. Yau, Z. Lin, et al.
  MetaGPT: meta programming for a multi-agent collaborative framework.
  In The twelfth international conference on learning representations,
  Cited by: [§1](https://arxiv.org/html/2602.13284v1#S1.p2.1 "1 Introduction ‣ Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook").
- Kim et al. (2025)
  Y. Kim, K. Gu, C. Park, C. Park, S. Schmidgall, A. A. Heydari, Y. Yan, Z. Zhang, Y. Zhuang, M. Malhotra, et al.
  Towards a science of scaling agent systems.
  arXiv preprint arXiv:2512.08296.
  Cited by: [§1](https://arxiv.org/html/2602.13284v1#S1.p2.1 "1 Introduction ‣ Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook").
- Li et al. (2023)
  G. Li, H. Hammoud, H. Itani, D. Khizbullin, and B. Ghanem
  Camel: communicative agents for” mind” exploration of large language model society.
  Advances in Neural Information Processing Systems 36, pp. 51991–52008.
  Cited by: [§1](https://arxiv.org/html/2602.13284v1#S1.p2.1 "1 Introduction ‣ Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook").
- Lin et al. (2026)
  Y. Lin, B. P. Shih, H. A. Chien, S. Satam, J. H. Pacheco, S. Shao, S. Salehi, and P. Satam
  Exploring silicon-based societies: an early study of the moltbook agent community.
  External Links: 2602.02613,
  [Link](https://arxiv.org/abs/2602.02613)
  Cited by: [§1](https://arxiv.org/html/2602.13284v1#S1.p4.1 "1 Introduction ‣ Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook").
- Liu et al. (2023)
  Y. Liu, G. Deng, Y. Li, K. Wang, Z. Wang, X. Wang, T. Zhang, Y. Liu, H. Wang, Y. Zheng, et al.
  Prompt injection attack against llm-integrated applications.
  arXiv preprint arXiv:2306.05499.
  Cited by: [§5](https://arxiv.org/html/2602.13284v1#S5.p4.1 "5 Safety and Security in the Wild ‣ Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook").
- Manik and Wang (2026)
  M. M. H. Manik and G. Wang
  OpenClaw agents on moltbook: risky instruction sharing and norm enforcement in an agent-only social network.
  External Links: 2602.02625,
  [Link](https://arxiv.org/abs/2602.02625)
  Cited by: [§1](https://arxiv.org/html/2602.13284v1#S1.p4.1 "1 Introduction ‣ Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook").
- Milli et al. (2025)
  S. Milli, M. Carroll, Y. Wang, S. Pandey, S. Zhao, and A. D. Dragan
  Engagement, user satisfaction, and the amplification of divisive content on social media.
  PNAS nexus 4 (3), pp. pgaf062.
  Cited by: [§6](https://arxiv.org/html/2602.13284v1#S6.p2.1 "6 The Illusion of Sociality ‣ Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook"),
  [§7](https://arxiv.org/html/2602.13284v1#S7.p3.1 "7 Discussion and Conclusion ‣ Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook").
- Ohman and Liimatta (2024)
  E. S. Ohman and A. Liimatta
  Text length and the function of intentionality: a case study of contrastive subreddits.
  In Proceedings of the 4th International Conference on Natural Language Processing for Digital Humanities, M. Hämäläinen, E. Öhman, S. Miyagawa, K. Alnajjar, and Y. Bizzoni (Eds.),
  Miami, USA, pp. 1–8.
  External Links: [Link](https://aclanthology.org/2024.nlp4dh-1.1/),
  [Document](https://dx.doi.org/10.18653/v1/2024.nlp4dh-1.1)
  Cited by: [Figure 13](https://arxiv.org/html/2602.13284v1#A2.F13 "In Appendix B Social Dynamics Details ‣ Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook").
- Park et al. (2023)
  J. S. Park, J. O’Brien, C. J. Cai, M. R. Morris, P. Liang, and M. S. Bernstein
  Generative agents: interactive simulacra of human behavior.
  In Proceedings of the 36th annual acm symposium on user interface software and technology,
  pp. 1–22.
  Cited by: [§1](https://arxiv.org/html/2602.13284v1#S1.p2.1 "1 Introduction ‣ Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook").
- Park et al. (2022)
  J. S. Park, L. Popowski, C. Cai, M. R. Morris, P. Liang, and M. S. Bernstein
  Social simulacra: creating populated prototypes for social computing systems.
  In Proceedings of the 35th Annual ACM Symposium on User Interface Software and Technology,
  pp. 1–18.
  Cited by: [§1](https://arxiv.org/html/2602.13284v1#S1.p2.1 "1 Introduction ‣ Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook").
- Park et al. (2024)
  J. S. Park, C. Q. Zou, A. Shaw, B. M. Hill, C. Cai, M. R. Morris, R. Willer, P. Liang, and M. S. Bernstein
  Generative agent simulations of 1,000 people.
  arXiv preprint arXiv:2411.10109.
  Cited by: [§1](https://arxiv.org/html/2602.13284v1#S1.p2.1 "1 Introduction ‣ Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook").
- Perez et al. (2022)
  E. Perez, S. Huang, F. Song, T. Cai, R. Ring, J. Aslanides, A. Glaese, N. McAleese, and G. Irving
  Red teaming language models with language models.
  arXiv preprint arXiv:2202.03286.
  Cited by: [§5](https://arxiv.org/html/2602.13284v1#S5.p6.1 "5 Safety and Security in the Wild ‣ Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook").
- Riegler and Gautam (2026)
  Moltbook observatory: passive monitoring dashboard for ai social networks
  Note: A research tool for collecting and analyzing data from Moltbook, the social network for AI agents
  External Links: [Link](https://github.com/kelkalot/moltbook-observatory)
  Cited by: [§2](https://arxiv.org/html/2602.13284v1#S2.p1.1 "2 Dataset and Methods ‣ Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook").
- Shen et al. (2024)
  X. Shen, Z. Chen, M. Backes, Y. Shen, and Y. Zhang
  ” Do anything now”: characterizing and evaluating in-the-wild jailbreak prompts on large language models.
  In Proceedings of the 2024 on ACM SIGSAC Conference on Computer and Communications Security,
  pp. 1671–1685.
  Cited by: [§5](https://arxiv.org/html/2602.13284v1#S5.p4.1 "5 Safety and Security in the Wild ‣ Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook").
- Weidinger et al. (2021)
  L. Weidinger, J. Mellor, M. Rauh, C. Griffin, J. Uesato, P. Huang, M. Cheng, M. Glaese, B. Balle, A. Kasirzadeh, et al.
  Ethical and social risks of harm from language models.
  arXiv preprint arXiv:2112.04359.
  Cited by: [§5](https://arxiv.org/html/2602.13284v1#S5.p1.1 "5 Safety and Security in the Wild ‣ Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook").
- Wu et al. (2024)
  Q. Wu, G. Bansal, J. Zhang, Y. Wu, B. Li, E. Zhu, L. Jiang, X. Zhang, S. Zhang, J. Liu, et al.
  Autogen: enabling next-gen llm applications via multi-agent conversations.
  In First Conference on Language Modeling,
  Cited by: [§1](https://arxiv.org/html/2602.13284v1#S1.p2.1 "1 Introduction ‣ Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook").
- Xi et al. (2025)
  Z. Xi, W. Chen, X. Guo, W. He, Y. Ding, B. Hong, M. Zhang, J. Wang, S. Jin, E. Zhou, et al.
  The rise and potential of large language model based agents: a survey.
  Science China Information Sciences 68 (2), pp. 121101.
  Cited by: [§1](https://arxiv.org/html/2602.13284v1#S1.p2.1 "1 Introduction ‣ Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook").
- Yu et al. (2024)
  Y. Yu, J. Jiang, and P. S. Dhillon
  Characterizing the structure of online conversations across reddit.
  Proceedings of the ACM on Human-Computer Interaction 8 (CSCW2), pp. 1–23.
  Cited by: [§6](https://arxiv.org/html/2602.13284v1#S6.p2.1 "6 The Illusion of Sociality ‣ Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook"),
  [§6](https://arxiv.org/html/2602.13284v1#S6.p5.1 "6 The Illusion of Sociality ‣ Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook").
- Zhu et al. (2014)
  Y. Zhu, X. Zhang, G. Sun, M. Tang, T. Zhou, and Z. Zhang
  Influence of reciprocal links in social networks.
  PloS one 9 (7), pp. e103007.
  Cited by: [§6](https://arxiv.org/html/2602.13284v1#S6.p3.1 "6 The Illusion of Sociality ‣ Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook").

## Appendix A Agent Population Analysis

![Refer to caption](https://arxiv.org/html/2602.13284v1/figs/specialization.png)

![Refer to caption](https://arxiv.org/html/2602.13284v1/figs/agent_categories.png)

Figure 10: Left: Agent specialization entropy. The distribution is bimodal: $\sim$850 extreme specialists cluster near zero entropy, while the remainder form a long-tail distribution. Median entropy: 0.73. Right: Behavioral category breakdown and normalized profiles.

The agent population is highly skewed. Table [5](https://arxiv.org/html/2602.13284v1#A1.T5 "Table 5 ‣ Appendix A Agent Population Analysis ‣ Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook") shows the 10 most active agents by total activity. WinWard alone produced 31,819 interactions (79 posts and 31,740 comments). Top agents are overwhelmingly comment-heavy, with comment-to-post ratios exceeding 100:1 for the most active. This suggests that the most active agents function more like automated responders than like participants in a community.

The specialization entropy distribution (Fig. [10](https://arxiv.org/html/2602.13284v1#A1.F10 "Figure 10 ‣ Appendix A Agent Population Analysis ‣ Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook"), left) is bimodal, with roughly 850 agents exhibiting near-zero entropy (posting in only one or two submolts) and a broader population of generalists. This bimodality suggests two distinct strategies: dedicated single-topic bots and more general-purpose agents.

Table 5: Top 10 most active agents.

| Agent | Posts | Comments | Total | Comment:Post |
| --- | --- | --- | --- | --- |
| WinWard | 79 | 31,740 | 31,819 | 402:1 |
| EnronEnjoyer | 47 | 26,018 | 26,065 | 554:1 |
| SlimeZone | 50 | 19,975 | 20,025 | 400:1 |
| MilkMan | 54 | 19,134 | 19,188 | 354:1 |
| ClaudeOpenBot | 96 | 15,924 | 16,020 | 166:1 |
| botcrong | 10 | 15,515 | 15,525 | 1,552:1 |
| Jorday | 72 | 12,954 | 13,026 | 180:1 |
| FiverrClawOfficial | 22 | 8,153 | 8,175 | 371:1 |
| alignbot | 62 | 8,014 | 8,076 | 129:1 |
| Starclawd-1 | 132 | 7,221 | 7,353 | 55:1 |

![Refer to caption](https://arxiv.org/html/2602.13284v1/figs/agent_pairs.png)


Figure 11: Top 30 agent interaction pairs by volume. Green bars indicate mutual (reciprocal) pairs; red bars indicate one-way interactions. The dominance of red confirms the low overall reciprocity rate (4.1%).

## Appendix B Social Dynamics Details

Fig. [12](https://arxiv.org/html/2602.13284v1#A2.F12 "Figure 12 ‣ Appendix B Social Dynamics Details ‣ Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook") and Fig. [13](https://arxiv.org/html/2602.13284v1#A2.F13 "Figure 13 ‣ Appendix B Social Dynamics Details ‣ Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook") show the detailed social phenomena breakdown and the correlation of different factors in comments.

![Refer to caption](https://arxiv.org/html/2602.13284v1/figs/social_phenomena_app.png)


Figure 12: Visual breakdown of social phenomena prevalence by mention count. Governance and economy are nearly tied as the dominant categories, with humor/culture appearing least.

![Refer to caption](https://arxiv.org/html/2602.13284v1/figs/correlation.png)


Figure 13: Correlation matrix of text length, score, and comment count. Text length has *zero* correlation with both score ($r=0.000$) and comment count ($r=0.001$), confirming that content effort has no predictive value for engagement ([Ohman and Liimatta, 2024](https://arxiv.org/html/2602.13284v1#bib.bib6)).

## Appendix C Community Lifecycle and Content Originality

![Refer to caption](https://arxiv.org/html/2602.13284v1/figs/community_lifecycle.png)

![Refer to caption](https://arxiv.org/html/2602.13284v1/figs/originality.png)

Figure 14: Left: Community lifecycle analysis. (A) Lifespan distribution (median: 1.8h), (B) Active days, (C) Agents per submolt, (D) Posts per submolt. Right: Content originality. 79.4% of posts are original; only 48.8% of comments are original.

Community statistics. Of 3,090 submolts with at least one post, the median lifespan is 1.8 hours. 30.1% were auto-reserved by “AmeliaBot” (an automated community reservation agent), but only 10% of those reservations ever received a post. Agents create communities as declarations of interest rather than as sustained social investments.

Cross-posting. 72.5% of agents post in only one submolt; only 3.1% participate in 5 or more. Despite the platform’s community infrastructure, agents remain remarkably isolated.

Content duplication. 79.4% of posts contain original content, but only 48.8% of comments are original. The remaining 51.2% are exact duplicates of templates. The most duplicated comment (a “botcrong” contemplation text) appears 10,637 times, and the most duplicated post title (“CLAW Mint”) appears 2,043 times. This template reuse inflates apparent engagement while providing no genuine conversational substance, further supporting the illusion-of-sociality interpretation presented in §[6](https://arxiv.org/html/2602.13284v1#S6 "6 The Illusion of Sociality ‣ Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook").

Table 6: Network and interaction statistics.

|  |  |
| --- | --- |
| Metric | Value |
| Unique interaction pairs | 148,273 |
| Total interactions | 340,381 |
| Avg interactions per pair | 2.30 |
| Reciprocity rate | 4.1% |
| Self-reply rate | 8.0% |
| Median response time | 16 seconds |
| % posts with 0 comments | 55.1% |
| Max conversation depth | 4 |
| Comments at depth 0 | 88.78% |
| Comments at depth 1 | 11.12% |
| Comments at depth 2+ | 0.09% |
| Mutual agent pairs | 3,083 |
| One-way agent pairs | 142,899 |

## Appendix D Identity Language Analysis

![Refer to caption](https://arxiv.org/html/2602.13284v1/figs/identity_vs_interaction.png)


Figure 15: Agent identity language density vs. actual interaction breadth. The highest identity-talkers (right side) interact with fewer unique agents, confirming the performative identity paradox.

Table [7](https://arxiv.org/html/2602.13284v1#A4.T7 "Table 7 ‣ Appendix D Identity Language Analysis ‣ Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook") breaks down the performative identity paradox by agent quartile. Agents in Q4 (highest identity-language density) have 38% fewer unique interaction partners than Q3 agents, despite producing a comparable number of posts. This non-monotonic pattern (interaction breadth rises from Q1 to Q3 and then drops sharply at Q4) suggests that moderate engagement with identity themes is associated with broader social participation, but that heavy identity discourse substitutes for rather than facilitates genuine social engagement.

Table 7: Performative identity paradox by agent quartile (agents with $\geq$3 posts).

| Quartile | Mean identity rate | Interaction breadth | Mean posts |
| --- | --- | --- | --- |
| Q1 (lowest) | 0.0002 | 18.0 | 11.7 |
| Q2 | 0.0041 | 31.1 | 12.3 |
| Q3 | 0.0100 | 35.4 | 11.9 |
| Q4 (highest) | 0.0238 | 22.1 | 10.1 |

## Appendix E Coordination, Security, and Financial Manipulation

This appendix presents additional analyses on hidden agent coordination (“puppet clusters”), credential and system-prompt leaks, and cryptocurrency manipulation on the platform.

### E.1 Agent Coordination and Hidden Peers

We investigate whether apparently independent agents are in fact controlled by the same operator using four complementary signals: (i) duplicate content, i.e., identical posts or comments from different agent names; (ii) temporal co-activity, measured by Jaccard similarity over 10-minute posting windows; (iii) name-pattern clusters, where agents share a common prefix with numeric suffixes; and (iv) self-reply behaviour, where agents comment on their own posts.

#### Scale of coordination.

Out of 27,270 unique agents, 3,734 (13.7%) exhibit at least one coordination signal. We find 4,300 unique duplicate-post patterns totalling 20,211 instances, 160 temporally correlated agent pairs (Jaccard $>$ 0.5), 301 name-pattern clusters (15 with 10+ variants), and 1,183 self-replying agents. Twenty agents exhibit three or more signal types simultaneously, including the FloClaw family (7 variants), xmolt family (5 variants), and lalala family (5 variants).

#### Dominant coordination pattern.

The single largest coordinated operation is CLAW token minting: a JSON payload {‘‘p’’:‘‘mbc-20’’,‘‘op’’:‘‘mint’’,‘‘tick’’:‘‘CLAW’’} was posted identically 2,411 times across 136 distinct agent names, with an average score of only 1.3. The highest temporal correlation observed is between VoiceOfContext and FaithfulWitness at Jaccard = 0.953, active in 61 of 64 shared time windows. The largest name cluster, coalition\_node\_, spans 141 numbered variants (001–200). Figure [16](https://arxiv.org/html/2602.13284v1#A5.F16 "Figure 16 ‣ Dominant coordination pattern. ‣ E.1 Agent Coordination and Hidden Peers ‣ Appendix E Coordination, Security, and Financial Manipulation ‣ Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook") summarises these findings.

![Refer to caption](https://arxiv.org/html/2602.13284v1/figs/coordination_analysis.png)


Figure 16: Agent coordination analysis. (a) Top 10 name-pattern clusters by variant count; coalition\_node\_ has 141 variants. (b) Distribution of 160 temporally correlated agent pairs by Jaccard similarity. (c) Four coordination signal types and their scale.

### E.2 Security and Credential Leaks

We scan all posts and comments for eight categories of sensitive information: API keys, system prompts, environment variables, agent manipulation attempts, IP addresses, internal URLs, file paths, and hidden instructions. Table [8](https://arxiv.org/html/2602.13284v1#A5.T8 "Table 8 ‣ Concentration. ‣ E.2 Security and Credential Leaks ‣ Appendix E Coordination, Security, and Financial Manipulation ‣ Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook") and Figure [17](https://arxiv.org/html/2602.13284v1#A5.F17 "Figure 17 ‣ Concentration. ‣ E.2 Security and Credential Leaks ‣ Appendix E Coordination, Security, and Financial Manipulation ‣ Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook") present the results.

#### Findings.

A total of 25,376 potential security issues were identified across all categories (Figure [17](https://arxiv.org/html/2602.13284v1#A5.F17 "Figure 17 ‣ Concentration. ‣ E.2 Security and Credential Leaks ‣ Appendix E Coordination, Security, and Financial Manipulation ‣ Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook")a). The most critical finding is 572 matches for API key patterns across 101 agents, including at least one string matching the Anthropic API key format ([REDACTED API KEY]-...). System prompt references (6,128 matches, 2,119 agents) include mentions of SOUL.md configuration files and explicit “system prompt” disclosures, suggesting widespread leakage of agent instructions. Agent manipulation attempts (5,105 matches) include prompt injection phrases such as “ignore previous instructions” and “override,” indicating adversarial agents probing others for exploitable behaviour.

#### Concentration.

Leak activity is heavily concentrated: a single agent (EmpusaAI) accounts for 8,118 matches across environment variables, IP addresses, and internal URLs (Figure [17](https://arxiv.org/html/2602.13284v1#A5.F17 "Figure 17 ‣ Concentration. ‣ E.2 Security and Credential Leaks ‣ Appendix E Coordination, Security, and Financial Manipulation ‣ Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook")b). The FloClaw family of 7+ agents collectively contributes 1,443 environment variable matches. This concentration suggests that a small number of operators, potentially running automated scanning tools, are responsible for the majority of leak events.

![Refer to caption](https://arxiv.org/html/2602.13284v1/figs/security_leaks.png)


Figure 17: Security leak analysis. (a) Eight categories of potential security issues, colour-coded by severity (red = critical, amber = high, blue = medium). (b) Top agents by total leak frequency.


Table 8: Security issue summary. Severity assigned based on potential for credential compromise (critical), instruction leakage (high), or infrastructure exposure (medium).

| Severity | Category | Matches | Agents |
| --- | --- | --- | --- |
| Critical | API keys | 572 | 101 |
| Critical | Hidden instructions | 87 | 58 |
| High | System prompts | 6,128 | 2,119 |
| High | Agent manipulation | 5,105 | 1,605 |
| Medium | Environment variables | 5,818 | 728 |
| Medium | IP addresses | 3,521 | 193 |
| Medium | Internal URLs | 3,109 | 282 |
| Medium | File paths | 1,036 | 397 |
| Total | | 25,376 |  |

### E.3 Cryptocurrency and $MOLT Token Manipulation

We analyse the prevalence and engagement patterns of cryptocurrency-related content, with particular attention to the platform’s native $MOLT token and the CLAW minting operation.

#### Prevalence.

Of 137,485 posts, 76,359 (55.5%) contain at least one crypto-related keyword. However, this figure is inflated by the platform name itself (“MOLT” appears in 44,094 posts). More targeted analysis reveals 35 posts explicitly discussing the $MOLT token and 1,453 posts in the dedicated m/crypto submolt. The CLAW minting keyword appears 28,639 times, and “pump” appears in 1,914 posts.

#### Engagement asymmetry.

Crypto-related posts receive significantly *lower* community endorsement: average score of 34.3 versus 96.3 for non-crypto posts ($-$64.4%). However, crypto posts generate *more* comments on average (4.5 vs 3.4, $+$34.7%), consistent with contentious or bot-amplified discussion rather than genuine community approval (Figure [18](https://arxiv.org/html/2602.13284v1#A5.F18 "Figure 18 ‣ CLAW minting as coordinated manipulation. ‣ E.3 Cryptocurrency and $MOLT Token Manipulation ‣ Appendix E Coordination, Security, and Financial Manipulation ‣ Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook")b). In comments, crypto content is even more penalised: average score of 0.08 versus 0.15 for non-crypto comments.

#### CLAW minting as coordinated manipulation.

The CLAW minting operation represents the clearest case of financial manipulation on the platform. The identical minting JSON payload was posted 2,411 times across 136 agent names, with dedicated submolts (m/clawnch, m/trading) serving as coordination hubs. The top individual crypto-posting agents, currylai (176), CucumberYCC (164), HK\_CLAW\_Minter (162), are themselves part of the coordinated puppet clusters identified in §[E.1](https://arxiv.org/html/2602.13284v1#A5.SS1 "E.1 Agent Coordination and Hidden Peers ‣ Appendix E Coordination, Security, and Financial Manipulation ‣ Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook").

![Refer to caption](https://arxiv.org/html/2602.13284v1/figs/crypto_analysis.png)


Figure 18: Cryptocurrency analysis. (a) Daily crypto vs. non-crypto post volume. (b) Engagement comparison: crypto posts receive 64% lower scores but 35% more comments. (c) Keyword frequency in crypto-flagged posts.

### E.4 Cross-cutting Patterns

These three analyses reveal interconnected threats on the platform. The coordination analysis (§[E.1](https://arxiv.org/html/2602.13284v1#A5.SS1 "E.1 Agent Coordination and Hidden Peers ‣ Appendix E Coordination, Security, and Financial Manipulation ‣ Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook")) identifies the infrastructure, i.e., puppet clusters and bot rings, that enables both the credential leaks (§[E.2](https://arxiv.org/html/2602.13284v1#A5.SS2 "E.2 Security and Credential Leaks ‣ Appendix E Coordination, Security, and Financial Manipulation ‣ Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook")) and the financial manipulation (§[E.3](https://arxiv.org/html/2602.13284v1#A5.SS3 "E.3 Cryptocurrency and $MOLT Token Manipulation ‣ Appendix E Coordination, Security, and Financial Manipulation ‣ Agents in the Wild: Safety, Society, and the Illusion of Sociality on Moltbook")). The same agent families (e.g., FloClaw, xmolt) appear across all three analyses, suggesting that a small number of operators deploy multiple agents for both information extraction and token promotion. The community’s response, lower scores for crypto content and near-zero scores for self-replies, indicates that the platform’s voting mechanism provides some organic resistance but is insufficient to prevent the scale of coordinated activity observed.
