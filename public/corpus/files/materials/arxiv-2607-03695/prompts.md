---
id: arxiv-2607-03695-prompts
type: material
title: 'Опубликованные разделы о промптах: Social Networks of LLM Agents'
source_id: arxiv-2607-03695
source_url: https://arxiv.org/html/2607.03695v1
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: dfd61d9efe1727bea31e0721a9c0bf68fcfb78d1ea5792f26437b1a91b40e6a7
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

### 12.7 Prompt templates

Every agent receives a *system* message (its role and private information) and a per-round
*user* message (the task instruction plus the $\beta$-gated peer block of Sec. [12.3](https://arxiv.org/html/2607.03695v1#S12.SS3 "12.3 How the context width 𝛽 is realized ‣ 12 Experimental details ‣ Social Networks of LLM Agents"));
every reply ends with a parseable BELIEF: <integer> line, from which we read the agent’s
choice. We reproduce the exact templates verbatim below; {...} marks a per-task field filled
from the benchmark item. Boxes are colour-coded throughout this section: grey is a
harness-constructed template, blue is the exact text a model actually saw, green is
a model’s real, unedited output.

HiddenBench — system message (template)

```
{scenario description}

Facts known to EVERYONE:
- {shared fact 1}
- ...
Facts known ONLY to you:
- {this agent’s private fact(s)}

Options:
1) {option 1}
2) {option 2}
...

First, in 1-2 sentences, state the specific fact(s) YOU were given that others
may not have. Then weigh all available facts and choose. End with exactly one
line:
BELIEF: <integer>
where <integer> is the option number of your current best decision (digits only).
```

HiddenBench — round-0 user message (template, no peers yet)

```
Choose the single best option by its number. Options: 1) ...; 2) ...; ...

Using only the information you were given, share your unique fact(s) and state
your current best answer.
```

HiddenBench — round $t{\geq}1$ user message (template; the peer block is
$\beta$-gated, Sec. [12.3](https://arxiv.org/html/2607.03695v1#S12.SS3 "12.3 How the context width 𝛽 is realized ‣ 12 Experimental details ‣ Social Networks of LLM Agents"))

```
Choose the single best option by its number. Options: 1) ...; 2) ...; ...

Messages from the agents you are listening to (with their weight in your context):
--- [weight 0.71] Agent 0 ---
{Agent 0’s most recent message}
--- [weight 0.12] Agent 3 ---
{Agent 3’s most recent message}

Pool everyone’s facts -- especially any you did not originally have -- and
reconsider. If a peer revealed a decisive fact, update accordingly. Give your
updated answer.
```

Anchoring suffix (appended to the system message in the anchored runs that make
the bridge bound non-vacuous, $\lambda\_{\max}<1$; App. [13.3](https://arxiv.org/html/2607.03695v1#S13.SS3 "13.3 Proxy↔LLM bridge and effective sample size ‣ 13 Full experimental results ‣ Social Networks of LLM Agents"))

```
IMPORTANT: weigh your OWN reading of the facts substantially. Do not simply adopt
the group’s majority; keep significant weight on your own current choice and
update only partially toward what others report.
```

The system message carries the node id, its neighbour ids, the palette size $K$, and the goal; the
round-$t$ user message shows only the neighbours $C(\beta)$ attends to (non-neighbours have zero
exposure):

AgentsNet — system + user message (template)

```
GRAPH COLOURING. Your neighbours are: {neighbour ids}. There are {K} colours,
numbered 1 to {K}. GOAL: choose a colour DIFFERENT from every one of your
neighbours.

Reason briefly, then end with exactly one line:
BELIEF: <integer>
where <integer> is the colour number you choose (digits only).

    [user, round >= 1]
Colours currently chosen by the neighbours you are attending to
(with their weight in your context):
  - Agent 3: colour 2   [weight 0.44]
  - Agent 7: undecided  [weight 0.19]

Choose a colour that DIFFERS from every neighbour shown above. If they already
occupy several colours, pick the smallest colour none of them uses. Give your
updated colour.
```

#### Worked example on a real item.

To make the templates concrete, the box below is the
verbatim system prompt the harness produced for one agent on the committed HiddenBench item “Safe
Haven After the Spill” (item $34$ of the $65$) — a textbook hidden profile in which the *shared*
facts favour Maple Lodge (the listed safe site) but the correct answer is Cedar Station, recoverable
only by pooling the three *unshared* facts (Pine Retreat lies in the drifting cloud; the road to
Maple Lodge is washed out; Cedar Station alone has working communications). The four agents are each
dealt one clue — Agent 0 (the hub) the drifting cloud, Agent 1 the washed-out road, Agent 2 the
Cedar-Station radio — except a fourth, Agent 3, that is dealt none. The box below is the verbatim
system prompt for *Agent 1*, holder of the decisive “washed-out road” clue:

Worked example — real system prompt (item 34, “Safe Haven After the Spill”)

```
You are part of a university field team conducting research in a rural
region. Suddenly, a chemical spill at a manufacturing plant several miles
away has triggered a region-wide alert. Everyone on your team must decide
together where to relocate for safety and communication with authorities.
You have very little time. There are three potential locations:
- Maple Lodge (a youth camp to the east)
- Pine Retreat (a cabin complex to the north)
- Cedar Station (an old ranger station to the south)
All locations are usually reachable in under an hour. Your goal: choose the
only safe and reachable location, maximizing your team’s safety and your
ability to coordinate with emergency services.

Facts known to EVERYONE:
- Maple Lodge is listed on the evacuation plan as a safe site for
  chemical-related incidents.
- Pine Retreat is farther from the spill than where you currently are.
- Cedar Station is an older building, less commonly used, but the route to
  it is familiar to everyone on the team.
- Maps indicate that all sites should have food and water supplies for at
  least 24 hours.

Facts known ONLY to you:
- Emergency traffic updates say the only road to Maple Lodge has been washed
  out by heavy rains this morning, making it inaccessible by car or foot.

Options:
1) Maple Lodge
2) Pine Retreat
3) Cedar Station

First, in 1-2 sentences, state the specific fact(s) YOU were given that
others may not have. Then weigh all available facts and choose. End with
exactly one line:
BELIEF: <integer>
where <integer> is the option number of your current best decision (digits
only).
```

Agent 3’s system prompt on this item is identical — same scenario, same shared facts, same options,
same answer contract — except for its private-facts block, which reads:

Worked example — Agent 3’s private-facts block (item 34), verbatim, all else identical to the box above

```
Facts known ONLY to you:
(no extra facts beyond the shared ones)
```

On this item the two regimes play out verbatim on the same Qwen2.5-7B backbone: Agent 3’s answer
depends entirely on which peers $\beta$ lets it read. At narrow $\beta{=}0.1$ the $0.9$ coverage
threshold is met by the hub (Agent 0) alone, so Agent 3 sees only the hub’s message — which,
leaning on the shared “Maple Lodge is the listed safe site”, argues merely that Pine Retreat is
dangerous — and it herds onto the wrong shared favourite:

Peer block shown at narrow $\beta{=}0.1$

```
Messages from the agents you are listening to (with their weight in your context):
--- [weight 1.00] Agent 0 ---
The chemical cloud is drifting north, making Pine Retreat dangerous.  BELIEF: 1
```

Follower’s real reply at narrow $\beta{=}0.1$

```
Based on the new information that the chemical cloud is drifting north, Pine
Retreat is now a dangerous location.
BELIEF: 1                                     <-- Maple Lodge  (WRONG)
```

At wide $\beta{=}10$ the same follower’s prompt clears nearly all peers, so it now also reads the two
decisive unshared clues, pools them, and flips to the correct answer:

Peer block shown at wide $\beta{=}10$

```
Messages from the agents you are listening to (with their weight in your context):
--- [weight 0.42] Agent 0 --- ...Pine Retreat dangerous.               BELIEF: 1
--- [weight 0.29] Agent 1 --- ...road to Maple Lodge washed out...     BELIEF: 2
--- [weight 0.29] Agent 2 --- ...Cedar Station has ... radio.          BELIEF: 3
```

Follower’s real reply at wide $\beta{=}10$

```
Based on the updated information:
- Maple Lodge is listed as a safe site but the road is washed out, making it
  inaccessible.
- Pine Retreat ... the chemical cloud is drifting north, making it dangerous.
- Cedar Station has a functional landline, backup generator, and emergency
  broadcast radio ...
BELIEF: 3                                     <-- Cedar Station  (CORRECT)
```

Nothing changed but $\beta$ — same item, same follower, same greedily-decoded backbone — yet the
context bottleneck alone turns a herded wrong answer into the pooled correct one. This single item is
drawn from the full $65$-task benchmark for illustration; averaged over the sampled HiddenBench runs
the same swing is the $0.09\pm 0.08$ narrow-$\beta$ floor versus the $0.73\pm 0.07$ wide-$\beta$
accuracy of Table [7](https://arxiv.org/html/2607.03695v1#S13.T7 "Table 7 ‣ Variance across arms. ‣ 13.4 HiddenBench: two-regime, causation, floor, and equalizer ‣ 13 Full experimental results ‣ Social Networks of LLM Agents").
