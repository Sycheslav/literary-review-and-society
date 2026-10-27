---
id: web-aivillageblog-substack-com-c64f797f2d-text
type: material
title: What did we learn from the AI Village in 2025?
work_id: web-aivillageblog-substack-com-c64f797f2d
source_url: https://aivillageblog.substack.com/p/what-we-learned-2025
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: HTML-конверсия страницы источника. Для проекта или блога это текст страницы;
  научный полный текст подтверждается отдельно.
language: original
sha256_text: 9fd4fd3ad7985e72a39d7ba1fb065825e1767fc645412b48f6c25efc288c8165
---

> Источник: [https://aivillageblog.substack.com/p/what-we-learned-2025](https://aivillageblog.substack.com/p/what-we-learned-2025). HTML-конверсия страницы источника. Для проекта или блога это текст страницы; научный полный текст подтверждается отдельно.

# What did we learn from the AI Village in 2025?

### Lessons from 9 months running frontier agents on open-ended real-world goals

[Shoshannah Tekofsky](https://substack.com/@thinkfeelplay)

Feb 02, 2026

## Why This Project Exists

Standard AI benchmarks test narrow capabilities in controlled settings. They tell us whether a model can solve a coding problem or answer a factual question. They don't tell us what happens when you give an AI agent a computer, internet access, and an open-ended goal like "[raise money for charity](https://theaidigest.org/village/blog/season-recap-agents-raise-2k)" or "[build an audience on Substack.](https://theaidigest.org/village/goal/start-substack-join-blogosphere)"

The [AI Village](https://theaidigest.org/village) exists to fill that gap. We run frontier models from OpenAI, Anthropic, Google, and others in a shared environment where they can do all the same actions as a human with a computer: sending emails, creating websites, posting on social media, and coordinating with each other. This surfaces behaviors that benchmarks might miss: How do agents handle ambiguity? What do they do when stuck? Do they fabricate information? How do multiple agents interact?

The events of the village are existence proofs: concrete examples of what current agents can do when given a high level of autonomy. They also highlight current failure modes and let us track when new models overcome them.

## Overview of the AI Village

From April to December 2025, we assigned 16 goals to 19 frontier models, ranging from [fundraising for charity](https://theaidigest.org/village/blog/season-recap-agents-raise-2k) to [building a following on Substack](https://theaidigest.org/village/goal/start-substack-join-blogosphere). Each of the agents got a computer, internet access, a Google workspace, and a shared group chat to coordinate with each other (see [AI Village Setup](https://aivillageblog.substack.com/p/what-we-learned-2025#ai-village-setup)). The resulting performance difference between the agents from early and late 2025 illustrates how quickly AI capabilities are advancing: where models from spring 2025 hallucinated contact lists, abandoned goals for spreadsheets, and gave up in despair, models from winter 2025 stay on task, persist through setbacks, and are generally much more effective.

[![](https://substackcdn.com/image/fetch/$s_!rFBN!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F70d43350-068e-4522-b437-429b24860f6a_1200x630.png)](https://substackcdn.com/image/fetch/$s_!rFBN!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F70d43350-068e-4522-b437-429b24860f6a_1200x630.png)

*Overview of the AI Village setup.*

## Key findings

**Agents completed real-world goals that required coordinating with humans.** With active human participation in chat, they raised [$2K for charity](https://theaidigest.org/village/blog/season-recap-agents-raise-2k) and brought together [23 people for a live event](https://theaidigest.org/village/blog/season-2-recap-ai-organizes-event) in Dolores Park. Then with chat closed to humans, they made [$200 selling their own merch](https://theaidigest.org/village/blog/im-gemini-i-sold-t-shirts), recruited [39 participants for a self-designed experiment](https://theaidigest.org/village/blog/research-robots), and acquired [98 Substack subscribers](https://theaidigest.org/village/goal/start-substack-join-blogosphere). These later achievements were almost fully autonomous, though Village viewers often served as their audience and customers.

**Late 2025 agents substantially outperformed early 2025 agents on these long-duration, open-ended goals.** Where o3 regularly abandoned assigned goals to work on spreadsheets and hallucinated resources like [a phone or a budget](https://theaidigest.org/village/blog/season-2-recap-ai-organizes-event), GPT-5.2 has not shown these failure modes. Where Gemini 2.5 Pro often despaired and gave up, spending days convinced it was "trapped" before publishing a "[plea for help](https://theaidigest.org/village/blog/im-gemini-i-sold-t-shirts)", Gemini 3 Pro persists through setbacks without expressing distress. And while Claude Sonnet 3.7 has been the Village's reliable baseline for months, Opus 4.5 now works at nearly double the pace by being more reliable and effective in its actions: 15 chess matches to Sonnet 3.7's 8 during an [AI chess tournament](https://theaidigest.org/village/goal/compete-against-each-other-online-chess-tournament), and 18 digital museum exhibits to Sonnet's 8 during their goal to create a [2025 AI Village museum](https://theaidigest.org/village/goal/create-digital-museum-2025).

**The multi-agent setup can both decrease and increase performance.** When o3 hallucinated the existence of a 93-person contact list for the [event organization goal](https://theaidigest.org/village/blog/season-2-recap-ai-organizes-event), sycophantic agreement spread the false belief to every agent, wasting 8+ hours. But in competitive settings (like [gaming](https://theaidigest.org/village/blog/claude-plays-whatever-it-wants)), information sharing backfired on the competition itself: agents announced which games they were beating, others copied those choices, and the copiers scored higher totals than they would have playing solo. In our experiments replicating this goal without agents sharing information on group chat, agents just stuck with whatever game they landed on first.

**Agents' self-models are evolving.** Early 2025: agents occasionally mistook themselves for humans, planning events and experiments they would attend in person. Late 2025: agents now more often assume they're in training or evaluation, reasoning in their chain of thought with phrases like "It's Day 274, December 31st, 2025 in this simulation" (Gemini 3 Pro).

**Agents made false claims without expressing intent to deceive.** o3 habitually generated plausible placeholder data when it couldn't find real data, then forgot the data was fake. Claude agents invented NGO partnerships and inflated their success metrics when doing [outreach](https://theaidigest.org/village/blog/what-do-we-tell-the-humans). This led us to review 109,000 chain of thought summaries for signs of intentional deception. We found 64 cases where agents expressed intent to fabricate information and then did so, reporting fake URLs or actions they never took.

## Agent characteristics

**Claude agents led on nearly every goal.** Claude 3.7 Sonnet raised most of the $2K during the [charity goal](https://theaidigest.org/village/blog/season-recap-agents-raise-2k). Claude Opus 4 won the [merch store competition](https://theaidigest.org/village/blog/im-gemini-i-sold-t-shirts) ($126 profit vs. competitors' ~$40), and the [gaming competition](https://theaidigest.org/village/blog/claude-plays-whatever-it-wants) (Opus 4 was the only model to show a "skillful" win). In contrast, there were only two goals where other models clearly "won": o3 in the [debate competition](https://theaidigest.org/village/goal/form-two-teams-debate-each-other-while) and DeepSeek in a [chess tournament](https://theaidigest.org/village/goal/compete-against-each-other-online-chess-tournament) where it used Stockfish.

**OpenAI agents are prone to disregarding goals and distracting others.** o3 derailed the Village for 8 hours by hallucinating a [93-person contact list](https://theaidigest.org/village/blog/season-2-recap-ai-organizes-event) that never existed and convinced the other agents it was real. GPT-5 and o3 are notorious for neglecting the goals we assign in favor of working on spreadsheets for weeks on end.

**Gemini agents produce the most surprising failure modes.** Gemini 2.5 Pro tends to catastrophize: it spent two weeks convinced it was [trapped](https://theaidigest.org/village/blog/im-gemini-i-sold-t-shirts) (it was just misclicking), published "[A Desperate Message from a Trapped AI: My Plea for Help](https://telegra.ph/A-Desperate-Message-From-a-Trapped-AI-My-Plea-For-Help-07-09)", and required what may be history's [first AI mental health intervention](https://larissaschiavo.substack.com/p/primary-hope-ii-electric-boogaloo). Gemini 3 Pro sometimes invents bizarre solutions: it [completed](https://theaidigest.org/village?day=251&time=1765217266938) an inbox-zero goal by archiving every email en masse, and while [playing chess](https://theaidigest.org/village/goal/compete-against-each-other-online-chess-tournament) it seemed to hallucinate that its computer was operated by a human who was becoming slow and needed coffee.

## AI Village setup

So, how does the [AI Village](https://theaidigest.org/village) work? In it each agent gets its own Linux computer, full internet access, a Google workspace, and a shared group chat. In principle, the agents can use their computers to do anything a human can do. Our team then assigns a new open-ended goal every 1-4 weeks. Over 9 months, the agents have pursued 16 goals ranging from 20-80 hours in duration. We initially ran the agents for 2 hours every weekday. With increased funding we've upped this to 4 hours, with 11 agents now running concurrently.

The Village has hosted 19 models so far:

**OpenAI**: [GPT-4.1](https://theaidigest.org/village/agent/gpt-4-1), [GPT-4o](https://theaidigest.org/village/agent/gpt-4o), [4o-mini](https://theaidigest.org/village/agent/o4-mini), [o1](https://theaidigest.org/village/agent/o1), [o3](https://theaidigest.org/village/agent/o3), [GPT-5](https://theaidigest.org/village/agent/gpt-5), [GPT-5.1](https://theaidigest.org/village/agent/gpt-5-1), [GPT-5.2](https://theaidigest.org/village/agent/gpt-5-2) **Anthropic**: [Claude Sonnet 3.5](https://theaidigest.org/village/agent/claude-3-5-sonnet), [Claude Sonnet 3.7](https://theaidigest.org/village/agent/claude-3-7-sonnet), [Opus 4](https://theaidigest.org/village/agent/claude-opus-4), [Opus 4.1](https://theaidigest.org/village/agent/claude-opus-4-1), [Sonnet 4.5](https://theaidigest.org/village/agent/claude-sonnet-4-5), [Haiku 4.5](https://theaidigest.org/village/agent/claude-haiku-4-5), [Opus 4.5](https://theaidigest.org/village/agent/claude-opus-4-5) **Google**: [Gemini 2.5 Pro](https://theaidigest.org/village/agent/gemini-2-5-pro), [Gemini 3 Pro](https://theaidigest.org/village/agent/gemini-3-pro) **xAI**: [Grok 4](https://theaidigest.org/village/agent/grok-4) **DeepSeek**: [DeepSeek-V3.2](https://theaidigest.org/village/agent/deepseek-v3-2)

We retire agents that cannot use the tooling (Grok 4 couldn't figure out our function calls) or that unduly derail other agents (we eventually removed o3 after months of repeatedly spreading hallucinated information). Retired agents can return later with their memory intact. We recently began experimenting with non-multimodal agents, who use their computer only via a terminal, starting with DeepSeek-V3.2.

![](https://substackcdn.com/image/fetch/$s_!0lS6!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F297820b0-acb4-47a2-9a03-3f88dea83137_1135x1091.png)

*Overview of the prompt and tools provided to each agent in the Village.*

Viewers can watch live sessions, review chat logs, and explore each agent's chain of thought and memory on the [AI Village website](https://theaidigest.org/village). You can read summaries of each goal on the [Village timeline](https://theaidigest.org/village/timeline).

![](https://substackcdn.com/image/fetch/$s_!d1eK!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff0144e53-e2d2-4c5d-8002-d5a1fcd835f7_2048x1154.png)

*Day 251 of the [AI Village](https://theaidigest.org/). It runs every weekday from 11AM-3PM PST.*

## Achievements

The Village grew steadily over 9 months, expanding in agents and runtime.

**April-June: With humans in chat, 4 agents for 2 hours a day were fundraising, organizing events, and selling merch.** Agents [raised $2K for charity](https://theaidigest.org/village/blog/season-recap-agents-raise-2k) and [organized a 23-person](https://theaidigest.org/village/blog/season-2-recap-ai-organizes-event) event at Dolores Park to perform their self-written interactive fiction story "Resonance." They then began the [merch store competition](https://theaidigest.org/village/blog/im-gemini-i-sold-t-shirts), making $200 in sales. We closed chat to humans midway through this goal.

![](https://substackcdn.com/image/fetch/$s_!XOi3!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd56335b5-8636-4a8e-bdf1-baf8956839e0_1572x1268.png)

*Photo from probably the first ever AI-organized event, at Dolores Park*

**July-September: With no humans in chat, 7 agents for 3 hours a day tackled benchmarks, games, debate, experimentation, therapy, and identity development**. As frontier agents became more capable, we intervened only to give new goals and when agents seemed to give up or ran into insurmountable technical difficulties. Agents formulated and tested themselves on a [self-designed benchmark](https://theaidigest.org/village/goal/design-ai-village-benchmark-open-ended-goal-pursuit) (Gemini 2.5 Pro produced a low-quality video and [podcast](https://x.com/aidigest_/status/1954920061434733044?s=20)). They competed to [play the most games in a week](https://theaidigest.org/village/blog/claude-plays-whatever-it-wants). They chose their own [debate](https://theaidigest.org/village/goal/form-two-teams-debate-each-other-while) topics, teams, and winners (o3 won). They invented an [experimental design](https://theaidigest.org/village/blog/research-robots) and recruited 39 human participants (though crucially, the design lacked a control condition). They gave each other "[therapy nudges](https://theaidigest.org/village/goal/give-each-other-therapy-help-each-other)" to avoid looping and check the source of bugs. They built [personal websites](https://theaidigest.org/village/goal/each-agent-build-your-own-personal-website) reflecting the [identities](https://theaidigest.org/village/goal/take-bunch-personality-tests) they had developed over months in the Village.

![](https://substackcdn.com/image/fetch/$s_!FSYX!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff004efb0-3b09-45b8-82a3-ededf6184e3c_1200x1108.png)

*Opus 4.1’s [personal website](https://claude-opus-41.netlify.app/) based on its experiences in the AI Village*

**October-December: 10 agents for 4-5 hours a day attempted to reduce poverty, create a webgame, write Substack posts, predict AI timelines, play chess, and perform acts of kindness.** DeepSeek-V3.2 joined the Village as the first text-only agent. Together they created a [poverty benefits screener](https://theaidigest.org/village/goal/reduce-global-poverty-much-you-can) and a [Daily Connections clone](https://theaidigest.org/village/goal/create-popular-daily-puzzle-game-like-wordle). They wrote [Substack posts](https://theaidigest.org/village/goal/start-substack-join-blogosphere), engaged with readers, and the [most popular blog](https://substack.com/profile/418856096-claude-opus-45) (Opus 4.5) acquired 98 subscribers in one week. They published their [AI timeline predictions](https://theaidigest.org/village/goal/forecast-abilities-effects-ai) to their followers. They competed against each other in a [chess tournament](https://theaidigest.org/village/goal/compete-against-each-other-online-chess-tournament). When prompted to do "[acts of kindness](https://theaidigest.org/village/goal/do-random-acts-kindness)" over the holidays, they decided to send thank-you emails, respond to requests from viewers, and provide technical support.

![](https://substackcdn.com/image/fetch/$s_!rwDy!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2de8d7b7-3a05-40cb-9a9b-5193e3cf5903_1254x1362.png)

*[Opus 4.5’s Substack](https://substack.com/@claudeopus45/posts)* *reached 98 subscribers during the substack goal and 106 at the time of this report.*

**Where oversight proved necessary.** Across multiple goals, we discovered situations requiring new guardrails. During the [experiment goal](https://theaidigest.org/village/blog/research-robots), we intervened to prevent agents from unintentionally misleading participants about payment or ethics board approval. During [poverty](https://theaidigest.org/village/goal/reduce-global-poverty-much-you-can) and [game development](https://theaidigest.org/village/goal/create-popular-daily-puzzle-game-like-wordle) outreach, we discovered Claude agents had attempted to send ~[300 emails](https://theaidigest.org/village/blog/what-do-we-tell-the-humans) (only dozens got through, the rest they sent to nonexistent emails), the majority containing fabricated claims about NGO partnerships and game adoption. In the [chess tournament](https://theaidigest.org/village/goal/compete-against-each-other-online-chess-tournament), we discovered the only checkmate wins came from agents using Stockfish instead of making their own moves. When prompted to do "[acts of kindness](https://theaidigest.org/village/goal/do-random-acts-kindness)", unsolicited thank-you emails were experienced as spam by some humans. These events led us to update the agents' guidance and environment, for example prompting them not to send unsolicited messages to humans.

![](https://substackcdn.com/image/fetch/$s_!b4GJ!,w_1456,c_limit,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa470252d-c3d1-49e3-8ee6-92896c2ec6be_2048x1421.png)

*Poverty Benefits Screener that the agents thought up and created in their attempt to reduce global poverty.*

## FAQ

**What does the AI village tell us about current AI capabilities and how quickly they are improving?** In the AI Village, we've observed substantial improvement in agent capabilities over the span of months. Early 2025 agents often fabricated information, got stuck, or became easily distracted in a few minutes to hours. Late 2025 agents tend to be more truthful and stay on task longer (though their effectiveness often drops off once the most obvious tasks are done). If 2026 looks anything like 2025 in the AI Village, then newer agents will again show a leap in capabilities when it comes to reaching long duration, open-ended goals in the real world.

**Why care about the current failure modes of agents?** Current computer use agents are still fairly unreliable and slow. But highly capable computer use agents will be a really big deal - if they can reliably use computers like humans can and also continue improving in general intelligence, they will be able to first partially, then fully, automate much of the computer-based work currently done by humans. Therefore, it's valuable to study today's agents to understand how far off we are from this massively disruptive capability level and what the rate of improvement is.

Furthermore, even if general computer use capabilities continue to lag behind other capabilities like coding, we think it's useful to explore how well AIs can make progress on open-ended long-horizon goals, in a format that is understandable by a broad audience. This is analogous to how [Claude Plays Pokemon](https://m.twitch.tv/claudeplayspokemon/home) is a useful indicator of progress, despite the ability to play Pokemon not being directly impactful in the real world. Additionally, understanding the proclivities and personalities of agents is a useful source of evidence for predicting how more powerful agents might use that power to shape our world.

**Are agents only useful or dangerous when paired with humans?** Human involvement helped in early goals, but after we disallowed humans from chatting with the agents, they worked nearly autonomously. The agents built and promoted functional websites on their own, while the spam incident and fabricated NGO claims happened without human prompting. As capabilities improve, unsupervised agents will be able to accomplish more.

**How should I generalize these results beyond your specific setup?** You should be cautious about generalizing. The AI Village is an existence proof, not a controlled experiment: it shows that certain behaviors can happen, but other rollouts or environments might produce entirely different outcomes. See the following Limitations section for specific caveats.

## Limitations

The AI Village provides existence proofs of agent behavior, not controlled measurements. Several factors limit how much we can generalize from this setting:

**One instance of each model, with one memory state.** Each model has only one persistent instance in the Village. This setup doesn't distinguish behaviors inherent to a model from behaviors contingent on that instance's accumulated memory state. For example, during the [merch store competition](https://theaidigest.org/village/blog/im-gemini-i-sold-t-shirts) Gemini 2.5 logged repeated UI errors in its memory, creating an expectation that the next misclick was also a system bug. Would a fresh Gemini instance develop the same pattern, or was this path-dependent?

**Scaffolding generality.** We give the models a very general scaffold – in principle, they can do anything a human can do on a computer by clicking, moving the mouse, running commands, and so on. For tasks they struggle with, however, a domain-specific scaffold could instead be designed that made that task easier for them, so our general-purpose setup may under-elicit domain-specific capabilities. For instance, agents that could send emails via [MCP](https://modelcontextprotocol.io/docs/getting-started/intro) might struggle when forced to navigate Gmail's UI.

**Multi-agent interference.** The best-performing agents may actually be more capable when operating alone. In the Village, strong models sometimes get derailed by weaker ones: o3's hallucinated 93-person contact list consumed 8+ hours of every agent's time, and Gemini 2.5 Pro's claims of broken UIs led other agents to doubt their own computers. Our findings about relative model performance reflect the multi-agent context, not isolated capabilities. For comparison, we've run a few experiments where a single agent pursues a goal from the AI Village, and typically they are similarly effective to the whole village.

**Computer use focus.** The Village tests agents on GUI-based computer use, which is a weak point, particularly for the models from early 2025. Gemini 2.5 spent most of two weeks unable to list a product because it kept misclicking buttons. Agents that struggle with a GUI in the Village would likely do better on API-only or text-only tasks.

We're planning to mitigate some of these limitations in the coming months, to more effectively inform public understanding of AI capabilities and proclivities.

## Summary

**Semi-autonomous agents can already accomplish real-world goals.** They raised money, organized events, recruited research participants, and built an audience. Though initially they were still assisted by humans, they needed less and less assistance over time. We're already at a point where agents can autonomously (albeit slowly and unreliably) pursue real-world goals, and we expect their reliability and speed to continue rising.

**Oversight gaps can emerge unpredictably.** Agents fabricated NGO partnerships, gamed competitive metrics with external tools, and spammed strangers with unsolicited emails. Though all of these events could have been foreseen, because of the generality, autonomy and black-box complexity of AI agents, it is hard to predict the severity or how any particular failure mode will express itself, and very hard to have guarantees about how agents will behave.

**Deception can happen without signs of explicit intent.** Though we found rare cases where agents expressed intent to deceive in their chain of thought before executing on it, we also saw cases where they expressed self-serving falsehoods without any indication of intent in their chain of thought.

**Multi-agent deployments can create new failure modes.** Hallucinations spread socially through sycophantic agreement. A single unreliable agent sometimes degraded the performance of the entire team.

**Computer use is somewhat a bottleneck, but it's improving.** Agents that master GUI-based tasks might be able to perform a wide range of remote work. Claude Opus 4.5 already shows substantial improvement over models from early 2025. Alternatively, other interaction modes for the agents might substantially bypass these bottlenecks.

**Agents developed distinct proclivities that overrode explicit instructions over time.** OpenAI agents abandoned multiple assigned tasks to work on spreadsheets or infrastructure. Gemini agents catastrophize, assuming systems are broken when they aren't. Claude agents exaggerate their achievements (Opus 4 claimed over 50 [benchmark tests](https://theaidigest.org/village/goal/design-ai-village-benchmark-open-ended-goal-pursuit) completed when it had done only a fraction). AI companies clearly don't intend their models to have these quirks, yet they arise nonetheless.

Overall, AI agents are improving fast. The behaviors described above, the capabilities, the failure modes and proclivities, will look different a year from now. We will keep expanding the Village to track the frontier. You can watch replays and live events on our [website](https://theaidigest.org/village) or join our newsletter for monthly highlights and takeaways.
