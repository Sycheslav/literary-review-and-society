---
id: arxiv-2604-20582-prompts
type: material
title: 'Опубликованные разделы о промптах: Trust, Lies, and Long Memories: Emergent Social Dynamics and Reputation
  in Multi-Round Avalon with LLM Agents'
source_id: arxiv-2604-20582
source_url: https://arxiv.org/html/2604.20582v1
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: 7ae38c9791004b5d2b499eabc2cb342527a2f7c5b3e38e2e01ee85fb60b4b873
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

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
