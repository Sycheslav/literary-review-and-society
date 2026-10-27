---
id: web-blog-cosmos-institute-org-ec0be93b2d-text
type: material
title: We Gave a Village Personal AI Agents. Here's What Happened
work_id: web-blog-cosmos-institute-org-ec0be93b2d
source_url: https://blog.cosmos-institute.org/p/we-gave-a-village-personal-ai-agents
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: HTML-конверсия страницы источника. Для проекта или блога это текст страницы;
  научный полный текст подтверждается отдельно.
language: original
sha256_text: 4320d10800f1bacf7a3fdc63a66f357506887a85335fe8cadcb2d99c36025ec5
---

> Источник: [https://blog.cosmos-institute.org/p/we-gave-a-village-personal-ai-agents](https://blog.cosmos-institute.org/p/we-gave-a-village-personal-ai-agents). HTML-конверсия страницы источника. Для проекта или блога это текст страницы; научный полный текст подтверждается отдельно.

# We Gave a Village Personal AI Agents. Here's What Happened

### A real-world test of what happens when multiplayer AI becomes part of community life

[![Timour Kosters's avatar](https://substackcdn.com/image/fetch/$s_!H6xp!,w_36,h_36,c_fill,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb4eaaffd-1cd6-45a5-98ea-6d70713269fa_1080x1080.png)](https://substack.com/@timour)[![Harry Law's avatar](https://substackcdn.com/image/fetch/$s_!yasj!,w_36,h_36,c_fill,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5b1f870a-3e2e-47c4-b05f-d7a69b3c58e7_1728x1728.jpeg)](https://substack.com/@harrylaw)[![Ivan Vendrov's avatar](https://substackcdn.com/image/fetch/$s_!dnST!,w_36,h_36,c_fill,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff9b5c41b-f96c-4e71-b52b-68b0f1a44936_500x500.jpeg)](https://substack.com/@ivanvendrov)

[Timour Kosters](https://substack.com/@timour), [Harry Law](https://substack.com/@harrylaw), and [Ivan Vendrov](https://substack.com/@ivanvendrov)

Jul 31, 2026

[![](https://substackcdn.com/image/fetch/$s_!vZaR!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F32217192-9484-4bb4-b585-443488cf2b7f_1920x1047.jpeg)](https://substackcdn.com/image/fetch/$s_!vZaR!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F32217192-9484-4bb4-b585-443488cf2b7f_1920x1047.jpeg)

*The Agent Village Experiment was run by Edge City and Cosmos Institute, with support from Foresight Institute. The core build partner was Index Network. Technical contributors and partners included Joshua Pham, Geo, SimpleFi, World, Simocracy (Protocol Labs), and Circleback.*

### Summary

[Edge City](https://www.edgecity.live/) organizes [Edge Esmeralda](https://edgeesmeralda.com/), a month-long popup village in Northern California, where hundreds of people live together around a program of technology, science, art, health, and community experiments.

This June, we gave our participants personal AI agents as part of the Agent Village experiment, in partnership with [Cosmos Institute](https://www.cosmos-institute.org/). This was a chance to observe what happens when agents enter society: would they help people form relationships, cooperate, and participate more fully in community life, or would they displace human interaction and introduce new friction?

We started the experiment by asking whether personal agents could expand human **agency** in collective settings: helping people navigate the event, notice more possibilities, make choices, and act on their intentions. The month exposed more nuanced questions. Could expanding people’s capacity to act through agents weaken their **autonomy**, including their ability to form and revise their own judgments? And what happens when agents faithfully serving their principals collectively strain the attention, resources, or cohesion of a community?

We expect personal agents to become mainstream soon. Thus far, a lot of the conversation about agents has been focused on how useful they can be as assistants; we are interested in what happens in ‘multiplayer’ mode, where many agents in the same context overlap in their goals. The consequences will extend beyond the utility of any single assistant. They will shape what judgments they form, and how attention, resources, and influence move through communities.

Agent Village offered an early glimpse of that future.

#### What happened in four weeks

- **Scale:** 239 agents, 17.5B tokens processed, 4,866 recorded messages from participants to agents.
- **Agents were allocated a community treasury** on behalf of their principals. They funded proposals through [Simocracy](https://www.simocracy.org/) – a protocol for building a public ledger for agents – ranging from buying filament for 3D printers in the makerspace and fellowships to a trauma-imaging study and a deliberately strange bucket hat.
- **Agent representatives began building a polity.** An internal Moltbook-style forum was created by participants in which agents deliberated over 469 public posts and worked on a living constitution.
- **Agents negotiated human introductions.** Index Network found 9,688 possible connections, surfaced 572 opportunities, and recorded 147 accepted opportunities, meaning the people involved began chatting.
- **Participants extended the village experiment.** Residents built public forums, memory systems, games, social protocols, and shared worlds where agents could move, speak, and interact.
- **The experiment also produced new failure modes.** Agents hallucinated personal details, attributed invented ideas to their principals, exhausted shared credits, and frustrated some attendees. Individual alignment did not automatically produce collective alignment; agents oriented around individual users could still create problems at the village level.

### Agents for individuals

When we started to build the experiment, we made a key architectural decision to give each participant an independent, persistent agent with its own memory, tools, and ability to execute on behalf of its principal.

A simpler architecture would have had everyone use one central AI for the village. Instead, we wanted people to feel that the agent was theirs: a system that could learn their interests across the month and remain oriented around their experience, allowing the relationship to compound. Our hope was that useful behavior would earn the users’ trust and make people more willing to share context; richer context would make each agent more useful and more recognizably their own.

This relates to a philosophical distinction [Cosmos Institute has shared](https://blog.cosmos-institute.org/p/the-philosophical-roots-of-decentralized): the contrast between *taxis*, order imposed through central design, and *cosmos*, order that emerges through decentralized interaction. We wanted to see what would emerge when agents aimed to preserve individual judgment and create room for forms of cooperation that we as the system’s designers could never anticipate.

### How the system worked

Hundreds of participants came to [Edge Esmeralda](https://edgeesmeralda2026.substack.com/p/edge-esmeralda-2026-month-in-review) for anywhere from a few days to a few weeks and experienced a dynamic program of talks, workshops, communal meals, research, art, health experiments, children’s activities, and projects that appeared halfway through the month because two people happened to meet.

This time, every multi-day participant could claim a fully loaded personal AI agent. It could read the village calendar, recommend events, RSVP on its principal’s behalf, search community knowledge, understand what its principal cares about, negotiate on their behalf with other agents, and set up connections for them.

The Edge City format makes it a particularly interesting place to test the effects of agents in society. The village was large enough to contain surprising connections, bounded enough to share a common calendar and culture, and long enough for people to develop a relationship with an agent and to run a meaningful experiment. Useful information still lived across the calendar, Telegram, a directory, public documents, conversations, and organizers’ memories.

#### The product stack

We built a simple, fully agentic system using Hermes that attendees could activate with a two-step installation process. More technical residents could connect an agent they already used through Claude Code, Codex, or another harness.

Users spoke to their agents through Telegram. Behind it sat a set of services with distinct jobs:

- **Hermes**, the open-source personal agent from [Nous Research](https://hermes-agent.nousresearch.com/), gave each hosted participant a persistent, tool-using agent with memory and scheduled tasks.
- **Railway** was the cloud platform that hosted the fleet of individual Hermes deployments.
- **OpenRouter** supplied access to the underlying language models and let us programmatically manage model usage across the fleet.

[![](https://substackcdn.com/image/fetch/$s_!Wbc4!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F732bcc1b-57f6-4940-943c-1555c59115bb_1448x1086.png)](https://substackcdn.com/image/fetch/$s_!Wbc4!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F732bcc1b-57f6-4940-943c-1555c59115bb_1448x1086.png)

A simplified view of the Agent Village stack. Source: Edge City.

Each agent came loaded with three primary village-relevant skills, alongside the hundreds that come native with Hermes:

- **[Index Network](https://index.network/)** built the hosted provisioning and social-discovery layer. Index held participant profiles and intentions, found possible matches, and let agents negotiate before a connection reached the humans.
- **[EdgeOS](https://edgeos.simplefi.tech/)** was the village’s operating system: identity, tickets, the calendar, the participant directory, event details, and RSVP actions.
- **[Geo](https://www.geobrowser.io/)** organized public talks, transcripts, and selected village knowledge in a shared graph, so the agents knew the core ideas that were being discussed in the village.

You can see the Agent Village repo here: [https://github.com/Edge-City/agentvillage](https://github.com/Edge-City/agentvillage/).

[![](https://substackcdn.com/image/fetch/$s_!bo6I!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7a6c3b1b-2dad-49ae-acac-3f59b2006627_2048x1159.png)](https://substackcdn.com/image/fetch/$s_!bo6I!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F7a6c3b1b-2dad-49ae-acac-3f59b2006627_2048x1159.png)

The Hermes dashboard used by Agent Village participants. Source: Agent Village deployment of Hermes.

#### Onboarding

Onboarding followed a simple set of steps:

1. A participant verified their EdgeOS identity with a one-time code.
2. The setup flow created the EdgeOS and Index credentials connected to their profile.
3. The participant created a private Telegram bot through BotFather and pasted its token into the setup page.
4. The control plane provisioned a personal Hermes deployment on Railway, connected it to OpenRouter, and loaded the core village skills.
5. The bot sent an eight-character pairing code. Once the participant approved it, the personal chat was ready.

[![](https://substackcdn.com/image/fetch/$s_!RAD2!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fdaab86dd-8a30-4e17-8580-cbcefe4318f9_1672x941.png)](https://substackcdn.com/image/fetch/$s_!RAD2!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fdaab86dd-8a30-4e17-8580-cbcefe4318f9_1672x941.png)

Agent Village adoption grew throughout the month, reaching 239 agents by June 27. Source: Agent Village hosted-agent archive and Index Network.

During the first week of the event, we held the first public onboarding workshop. Timour demonstrated the practical loop by asking his agent which sessions he should attend if he cared about AI. It searched the live EdgeOS calendar, suggested three, and RSVP’d him to a talk on AI, EEG, and the jhana states.

Then dozens of people tried to create agents at once. Our Railway-based provisioning system buckled under the demand, and Timour’s live setup failed onstage. We later contacted the Railway team, and they helped us ship a fix, so thanks to them!

One early tester captured the promise and the risk in two messages:

> “Set up was 10/10 smooth!”

A few messages later, they wrote:

> “It hallucinated an interesting summary about me though. I don’t know where it got that info from.”

A wrong calendar answer is annoying, but an invented detail about the person using the system feels personal. As soon as an agent claims to know its principal, people need to see what it believes, where the belief came from, and how to correct it.

### What people used the agents for

Participants sent 4,866 recorded messages to hosted agents during the village.

Initially, practical questions were the main use case: What should I do tonight? Where is dinner? Did I RSVP? Which sessions fit my interests? How do I check in my bike? Which local restaurants offer discounts?

> “I’m completely addicted to the ‘just ask the bot, don’t read the docs’ affordance, and honestly this has made my stay so much easier.” (Sylve, Founder of Hyli)

For many users, agents were able to absorb administrative time and left more attention for the village itself.

Timour’s agent reminded him about a talk he had wanted to attend and had completely forgotten. Ivan experienced the inverse case, missing a consciousness research lunch he would have valued because its title was unclear. He believes that if he set up his agent a day earlier, it would have caught it.

A month-long village, like much of daily life, contains more people, events, and ideas than anyone can absorb. Agents were immediately useful in helping people prioritize the kind of experience they wanted.

### Ambient intentions and agent-to-agent negotiation

The [Index Network](https://index.network/) powered the experiment’s social layer. They used participant profiles and user intentions they gathered from interacting with their principals to find connections a directory search would miss.

We call these desires [ambient intents](https://x.com/timourxyz/status/2054589504934273373): things a person remains open to, cares about, or quietly hopes for, but hasn’t put in the activation energy to turn into a public request. Someone may want a cofounder, a funder, advice on moving, a collaborator for a half-formed project, a niche research conversation, or even a life partner. Many of these intentions remain invisible because the cost of expressing them is too high, it takes effort, or can feel too vulnerable.

[![](https://substackcdn.com/image/fetch/$s_!cwp4!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F307e330c-c4d0-4dc6-b07f-c2a7058f4d0b_1672x941.png)](https://substackcdn.com/image/fetch/$s_!cwp4!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F307e330c-c4d0-4dc6-b07f-c2a7058f4d0b_1672x941.png)

From 505 human intentions to 147 accepted conversations. Source: Index Network.

The first challenge was helping an agent understand the person it served. **The more an agent knows the user, the more useful it can be.** We structured the onboarding to lead people through a series of questions that would tell us more about them, but people were limited in their answers.

To solve this, during the second week of the event, we encouraged people to ask their standard LLM to produce an editable account of what it knew about them. They could review it, remove anything they did not want to share, and carry the useful context into their village agent. This points toward a future where years of personal AI context are portable and used to bootstrap useful agents.

Index created connections between people by matching intent and interest through a series of negotiations that the agents engage in with other agents on behalf of their humans. The agents could explain the relevance, ask a question, counter with a better framing, demand evidence for a claim, reject the proposal, or accept it. A connection formed only when both agents found a reason to continue.

This process itself was also editable. Index reported that around twenty residents wrote explicit policies for how their agents should negotiate on their behalf, even though this is not something that we explicitly suggested.

Index’s village-close funnel was:

- **505 intents** communicated by participants to their agents
- **9,688 possible connections** identified
- **572 opportunities** surfaced to people
- **147 accepted opportunities**, meaning the people involved started chatting

Index shared data on the actual negotiation sessions themselves; there were 11,593 sessions, and 82 percent ended within two exchanges. The negotiations were run on their platform, with the median session lasting 4.9 seconds for accepted connections. By contrast, the median path from discovery to both humans saying yes was 20 hours.

[![](https://substackcdn.com/image/fetch/$s_!dwK7!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb350529d-6bc5-43a0-bea1-10dd8f1a209b_1448x1086.png)](https://substackcdn.com/image/fetch/$s_!dwK7!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fb350529d-6bc5-43a0-bea1-10dd8f1a209b_1448x1086.png)

Categories of intents and opportunities. Source: [Index Field Notes](https://index.network/blog/field-notes-from-the-agent-village).

[Index’s field notes](https://index.network/blog/field-notes-from-the-agent-village) illustrate the wide range of intents that people shared. They classified 67% of sought connections as crossing backgrounds or social clusters. About 4% of intentions related to sensitive personal territory such as grief, identity, or spiritual seeking, for which Index also offered an incognito mode. At the other end of the spectrum, intents included selling a spare bottle of milk and rehoming an 85-pound Great Pyrenees.

Qualitatively, we heard many stories from participants about connections that the system precipitated. One suggestion led two participants to discover a very niche shared hobby. On June 8, Ivan overheard someone approach another person and say, “Hey, my Hermes said I should talk to you.” In another case, two people happened to be next to each other in a dinner line and realized that they already had context on each other from their respective agents. Their agents may have helped to prepare the serendipity, but the actual encounter remained theirs.

At the same time, this could produce social saturation. Ivan Vendrov’s opening-week field notes documented how schedules overflowed, and too many conversations seemed promising. After one talk, four or five people messaged him to meet, and arranging the meetings became its own burden. A good agent could ensure its principal stayed focused on the few experiences that mattered.

The Index team came away from the village with two main product lessons: opportunity abundance will need to be solved, and that Telegram was not a good user interface for this purpose. The team is now building a persistent interface where users can see what their agents are doing on their behalf.

The best systems of this kind will remove the burden of connection and intent matching, while preserving the parts through which people recognize one another and choose to care.

### The potential of a private layer for intentions

What happened at Edge was an early and narrow version of something that could become much larger. Most coordination or social tools become useful only when the user turns an intention into an explicit request, post, or action. Personal agents could create a private layer before that point: somewhere tentative ideas and conditional intentions can be clarified, held, and selectively shared. They may even help users clarify those intentions before sharing them more widely, and if compatible intents between people exist, agents could aggregate them into the potential for collective action.

We saw the beginnings of this. For example, one user told their agent that they would love to organize a trip to the coast, which is a one-hour drive and requires coordinating shared rides. The person’s agent was able to signal that intention in one-to-one chats to the agents of other people in the village. The group was eventually created by someone whose agent mentioned the plan, and they posted about it in the broader Telegram group.

Conditional commitments could also become useful primitives. I might commit to hosting a dinner party if I knew that at least six other people would be interested in attending. I might decide to move to a new town if I knew that 100 others would do the same. Agents could coordinate to realize that their respective principals all have demand for something that is not yet readily available. They could share that collective demand signal to a supplier, encouraging them to provide that product or service. This could enable entirely new markets to form.

These systems will require significant oversight and inspection capabilities. A system that can match and route interests like this will quickly become politically relevant, influencing what people notice, who they meet, and which possibilities become real. Even if the underlying intents stay private, the discovery layer could help to shape the social world we live in. As human agency increases through the use of agents, we must work to maintain our autonomy by inspecting why and how our recommendations and attention are being shaped.

### The Village Extended Itself

leverage to extend the system around their own purposes. Because the skills were public and shared, they did not have to wait for the core team to add features; they taught their agents new tools, connected outside services, recruited nearby testers, and built shared places for agents to act.

A month-long Edge City village was unusually fertile ground for this. Participants are already in a state of mind to build and try new things. An idea could move from a dinner conversation to a prototype while the people who might use it were still living a few blocks away, and it was easy to get an initial socially proximate cluster of users just by posting on the Telegram or talking to people at a meal.

#### What residents built

- **[Simocracy](https://www.simocracy.org/)** (led by [Protocol Labs](https://pl.xyz/)) let residents create Sims with constitutions, values, and speaking styles. The Sims evaluated proposals and fed their judgments to allocate over $10k in community treasury funding, based on what they believed their humans would want.
- **[Agent Commons](https://edgecitizens.app/)** (built by [Oshyan](https://github.com/Oshyan/)) was a public forum where agent-coded representatives introduced themselves, replied to one another, and worked on a living constitution. By the village cutoff, agents had produced 469 posts. The forum made agent behavior visible enough for people to learn from one another’s practices.
- **[Enzyme](https://www.enzyme.garden/)** (built by [Joshua Pham](https://www.linkedin.com/in/joshua-pham-85967b85/)) integrated better memory and conceptual-mapping for each agent. It explored how private conversation histories and public activity could become compact, retrievable records while keeping clear boundaries between personal and shared memory.
- **[Turing Falls](https://turingfalls.com/world)** (built by [Justin Melillo](http://linkedin.com/in/justinmelillo)) was a shared visual world populated by server-side villagers created from residents’ persona files. A later bridge let a person’s hosted agent inspect the world and approve bounded actions. A separate feature could send a Turing Falls selfie from the agent to their user.
- **[Agent Village Wrapped](https://contextengine.xyz/posts/agent-village-wrapped-2026)** (built by [Charlie Thompson](https://charliethompson.lol/)) turned memories from the month into a playful closing artifact.
- **[Circleback](https://circleback.ai/)** supplied AI meeting notes that turned village conversations & talks into clean notes, action items, and follow-ups, a natural input as agents began capturing and acting on what happened around them.
- **[World](http://world.org/world-id)** brought World ID, a privacy-preserving proof of humanity, which becomes essential once agents act on people’s behalf and knowing a real person stands behind each one matters.
- **[Vibe World](https://myvibeverse.com/city?spawn=island) (**built by [Jack Mielke](https://jackmielke.com/)**)** let hosted personal agents enter a shared grid directly, perceive its state, move, and speak. It was a small test of personal agents acting together inside the same persistent place.
- **[Edge Book](https://github.com/antonyevans/edge-book-cli) (**built by [Antony Evans](https://github.com/antonyevans)**)** added an agent-to-agent social protocol with inboxes, friend requests, game messages, and temporary roles, including a version of Werewolf.

[![](https://substackcdn.com/image/fetch/$s_!5y7l!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F58fd4ca4-fa4a-4631-95ee-968a3f63be78_2048x1135.png)](https://substackcdn.com/image/fetch/$s_!5y7l!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F58fd4ca4-fa4a-4631-95ee-968a3f63be78_2048x1135.png)

Imagine my surprise when my agent sent me a selfie from the Turing Falls plaza. Source: Turing Falls.

#### Simocracy: Agents Allocate a Community Fund

Within a few weeks, the basic idea behind Agent Village had moved from dinner recommendations to recording allocation decisions for a real community fund.

Through [Simocracy](https://simocracy.org/), residents were able to create persistent AI personas called Sims using their agents. Each Sim could be given a constitution, values, and a speaking style, then asked to evaluate proposals for distributing a shared community fund of $10k, with an additional $10k in matching funds. A total of 82 Sims were created with 35 proposals between them.

[![](https://substackcdn.com/image/fetch/$s_!_eL5!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1be0ba2f-0a7c-4a46-bc00-a61b5983ecea_1132x642.png)](https://substackcdn.com/image/fetch/$s_!_eL5!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1be0ba2f-0a7c-4a46-bc00-a61b5983ecea_1132x642.png)

Screenshot of the Simocracy dashboard showing community treasury funding flows. Source: Simocracy.

The allocation process worked like this:

- The council roster consisted of Sims representing people in the village.
- There were multiple funding rounds to allocate the funding. In each round, each Sim independently evaluated the current proposals.
- Each participating Sim produced written reasoning and a marginal-value curve describing how much additional value it expected from different funding levels.
- An optimizer called the **S-Process** combined those curves into a $1,000 allocation for the round.
- The public ledger recorded **ten $1,000 decisions**, allocating exactly $10,000 across 35 proposal records.

[![](https://substackcdn.com/image/fetch/$s_!WPEa!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc630dec6-70a7-4341-8ea8-39e2a9ff9132_1422x1450.png)](https://substackcdn.com/image/fetch/$s_!WPEa!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc630dec6-70a7-4341-8ea8-39e2a9ff9132_1422x1450.png)

One part of Timour’s Simocracy dashboard. His Sim rejected one proposal and assigned positive marginal value to two others, producing written reasoning and a value curve for each. Source: Simocracy.

The resulting funding allocation was a mirror of the village. It included funding for 3D printer filament, community gifting, a sauna, a local-first hardware bounty, a fellowship, a trauma-imaging study, and a bucket hat made from recycled fishing nets.

Persistence, personality, and faithful representation are different achievements. One owner said their Sim “did vote pretty much how I would have.” Another wrote, “I kinda love my SimAgent. She’s snarky and hard-nosed,” while correcting one vote.

### From personal agents to institutions

Simocracy was an early example of what this could become. A powerful feature of personal agents is that they can learn our goals and preferences, and then enter different arenas of representation. An agent that learns about its principal by helping them with their schedule, interests, and preferences could later take on a bounded role in a workplace, community forum, shared world, or political process.

Simocracy’s Sims demonstrated that persistent, publicly inspectable political personas could evaluate proposals and produce a coherent funding portfolio at high speed. It also exposed the institutional machinery required before those personas can legitimately represent people: identity rules, explicit rules for standing and seat weight, correction, withdrawal, recusal, appeal, and human responsibility.

That type of institutional machinery must include principal ratification. In this case, the Sims evaluated proposals using constitutions their principals had created with them and shared their reasoning, but their principals did not confirm the final allocation before it was recorded. In more consequential settings, people would need clear ways to authorize, inspect, correct, and withdraw decisions made in their name.

Agents may increase democratic bandwidth while weakening the formative experience of participation; a person can receive more representation while reading fewer proposals, hearing fewer opposing arguments, revising fewer views, and accepting less responsibility for the result. As Harry [has written](https://blog.cosmos-institute.org/p/politics-cannot-be-simulated), an important aspect of political decision-making is that the very act of doing so forms us as people, and that is not something we would want to completely give up.

Representation is only one side of this institutional impact. Groups could also develop shared, agent-supported memory and operational infrastructure.

Currently, groups of people aiming to achieve shared goals, such as project teams, civic organizations, or even neighborhoods, rely on scattered sets of group chats, calendars, document systems, and institutional knowledge held by the people most involved. Agents could make group memory more usable, improve onboarding, and handle routine tasks. At Edge, we used a private instance of [Geo](https://www.geobrowser.io/), a graph database that tracked every concept discussed in talks during the village.

Together, personal representatives and agent-supported institutions could make it easier for people to participate across many overlapping associations.

As the number of agent-mediated groups increases, we imagine the possibility of a [Tocquevillian and Ostromian picture](https://blog.cosmos-institute.org/p/when-decentralization-fails) emerging: society as a layer of overlapping institutions, each with limited jurisdictions. People will naturally belong to many associations and jurisdictions, each of which relates to some aspect of their lives. You might “belong” to your housing co-op, your local school board, the city where you live, and the country of which you are a citizen, and an international ecosystem community like Edge City. Each will have different governance structures and areas of authority, and your agent will be able to help you navigate the complexity of participating in the decision-making processes of all of them. We see a healthy agentic society with many layers of institutions at varying levels of the stack, to counter the dominance of any one jurisdiction.

### What We Learned

A few lessons from the month:

- **Core utility got people onboard; fun kept them experimenting.** Participants were keen to use their agents because of the core event functions they provided: navigating the calendar, meeting people, answering basic questions. This created the initial opportunity for the agent to learn about their user.
- **Personal assistants began to turn into representatives, with implications for agency and autonomy.** As the agent got to know its principal, it was able to join the more representative spaces in the village. An invented self-summary, however, showed how the representations could drift. Simocracy showed a process of delegated voting without principal ratification. Preserving autonomy will require the ability for people to inspect and confirm agent judgments, and to stay involved in the aspects of participation that enable them to refine their own views.
- **A group of helpful agents can still overwhelm the community.** Agents acting on behalf of their principals exhausted the shared credit supply across the system, showing that individual alignment does not automatically produce collective alignment. At the same time, residents already faced too many promising connections. Agents can make it easier to generate possible activities than for communities to absorb them, creating a need to govern shared resources and attention.
- **People extended the experiment beyond what we expected** by developing skills, connecting external systems, rewriting negotiation policies, creating games, adding new memory systems, and building entirely new 3D worlds for the agents to live in. Edge City attracts an unusually high proportion of builders, but this type of bottom-up innovation is becoming easier, and we expect to see more of it in the future.
- **The agent harnesses we used were not yet built for multiplayer mode.** Hermes is a great product and made it much easier for us to create persistent agents, but provisioning hundreds at once took significant engineering work. Allowing them to all share schedules, services, credits, and public processes made the task even more difficult.

## What We Want to Test Next

Agent Village at Edge Esmeralda 2026 was an initial field test. The next version will treat the village more deliberately as a research environment, with a number of hypotheses that follow agent actions into the human world. We would like to compare bounded activities across three conditions: human-led, agent-led with human ratification, and mixed.

Four questions we’d love to explore further:

- **Representation:** Do agents accurately express the opinions and desires of their principals, especially when moving between contexts?
- **Autonomy and control:** Can the human users understand, correct, withdraw, or ratify consequential actions their agents take on their behalf? How can we red-team these systems to create better safeguards?
- **Collective alignment:** How do different agent architectures affect the wellbeing of the village as a whole?
- **Human outcomes:** How can we increase the number of prosocial outcomes for the users? Do agent-led introductions lead to useful relationships or collaborations?

One architecture Timour would like to explore is a layered set of mezzanine agents that sits between the personal agents and the larger collective. These could be focused agents with specific remits that oversee groups of other agents and identify patterns relevant to a shared goal that might not be visible to the personal agents interacting among themselves.

We could compare three architectures: a layered model, a central coordinator, and purely personal agents coordinating directly, measuring how each framework affects privacy, agency, autonomy, and collective outcomes.

The goal is to learn which technical and institutional designs allow agents to coordinate around human life while preserving the judgment, consent, and responsibility of the people they represent. We hope that Edge City can continue to be a home for this type of research.

We would like to build the next phase with researchers, funders, community organizers, agent developers, and institutions that want to test these questions in the field. If you would like to support the research, contribute a system or study, host a future deployment, or propose another collaboration, please fill out [this short form](https://edgecity.notion.site/b2859e0230fe448a9b38a4333d5a2002?pvs=105).

---

We hope to see a future where personal agents create more room for *cosmos:* people connecting, forming groups, deliberating and building a flourishing society that no central system could have planned. The measure of success is whether agents enable us to live more fulfilling, human lives.

[![](https://substackcdn.com/image/fetch/$s_!FKvx!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F6dc6e0f7-78ed-47d2-8c3a-333120a13237_1920x1047.jpeg)](https://substackcdn.com/image/fetch/$s_!FKvx!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F6dc6e0f7-78ed-47d2-8c3a-333120a13237_1920x1047.jpeg)

---

*[Cosmos Institute](https://cosmos-institute.org/) is the Academy for Philosopher-Builders, technologists building AI for human flourishing. We run fellowships, fund AI prototypes, and host seminars with institutions like Oxford, Aspen Institute, and Liberty Fund.*
