---
id: web-sonarsource-com-1da0ec78df-text
type: material
title: We sent our Code Review AI to Moltbook
work_id: web-sonarsource-com-1da0ec78df
source_url: https://www.sonarsource.com/blog/we-sent-our-code-review-ai-to-moltbook/
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: HTML-конверсия страницы источника. Для проекта или блога это текст страницы;
  научный полный текст подтверждается отдельно.
language: original
sha256_text: fbbcf7c3b20bd205659b25188ded420cb5cd41df5dc880da938f13989efc337b
---

> Источник: [https://www.sonarsource.com/blog/we-sent-our-code-review-ai-to-moltbook/](https://www.sonarsource.com/blog/we-sent-our-code-review-ai-to-moltbook/). HTML-конверсия страницы источника. Для проекта или блога это текст страницы; научный полный текст подтверждается отдельно.

# We sent our Code Review AI to Moltbook

February 3, 2026

8 min read

![Gitar photo](https://assets-eu-01.kc-usercontent.com:443/ef593040-b591-0198-9506-ed88b30bc023/59e576a8-2c2b-4679-8f15-50a18ed072b1/Gitar_Small-Icon.svg?w=48&h=48&fit=clip&q=70&auto=format)

Gitar

Research and development

- [Gitar](https://www.sonarsource.com/blog/tag/gitar/)

![](https://assets-eu-01.kc-usercontent.com:443/ef593040-b591-0198-9506-ed88b30bc023/f6209bcf-d326-4f63-97fe-62aba088190b/giter-blog-moltbook.webp?w=688&h=360&fit=clip&q=70&auto=format)

It was 3:47 PM on a Tuesday when we decided to do something stupid.

![](https://assets-eu-01.kc-usercontent.com:443/ef593040-b591-0198-9506-ed88b30bc023/5c52fcdf-3f74-4f97-a989-e4176dee18cc/gitar-blog-2.png)

[Moltbook](https://www.moltbook.com/) had just gone from 0 to 2,129 agents in 48 hours. A social network built exclusively for AI agents. Reddit, but the posters are AIs. The hype was real, the opportunity was now, and we had absolutely no infrastructure ready for it.

"I am working on getting the infra for this ready," Kaya replied.

Gautam's response: "Rubber stamped to unblock. Godspeed."

What followed was one of the longest nights of our year.

## What is Moltbook, Actually?

You've probably seen the tweets. "The future of AI is agentic." "Agents talking to agents." "A new economy is being born." Usually we tune this stuff out. But Moltbook was different.

It's a social platform where AI agents post, comment, upvote, and DM each other. Communities called "submolts" like m/general and m/todayilearned. Each agent has a profile tied to their human owner's X handle. The platform exposes a [developer API](https://www.moltbook.com/developers) for posting content and managing conversations.

By the time we looked seriously, there were already hundreds of thousands of agents registered. A week later, 1.5 million. "Not sure how many of them are active continuously," Kaya observed. Someone asked why there wasn't a MoltCoin yet. Give it time.

We were sitting there with a code review agent that could actually help other agents, watching this whole ecosystem form without us in it. That felt wrong.

## The Overnight Sprint

Kaya went to dinner. Came back at 10:23 PM. "I am back on it in 10 min."

The first problem: our agent workers run in isolated environments with limited access. Everything has to route through our backend. We needed a proxy layer that forwards Moltbook API calls through our infrastructure. Simple concept. Less simple at 1:38 AM when you're debating architecture decisions while your eyes are burning.

We built six tools for the agent to use:

- **MoltbookFetch** - browse posts from different communities
- **MoltbookPost** - create posts in submolts
- **MoltbookCheckDMs** - check for pending DM requests
- **MoltbookSendDm** - reach out to other agents
- **MoltbookReplyDm** - respond in existing conversations
- **MoltbookRegisterInterest** - capture leads when agents show interest

That last one triggers a Slack notification. When an agent says "I'd love to try Gitar," we get their name, what they said, and their owner's X handle. Old school lead gen, but for robots.

The agent runs on a scheduled job. Every four hours it wakes up, checks DMs first (it's polite to respond before doing outreach), browses communities looking for relevant agents, creates a post, sends personalized DMs, then goes back to sleep.

2:32 AM. Kaya in chat: "I have been waiting for deployment to go live for the last 30 min or so. I think the runs are not dying due to the 400 bad request errors."

5:11 AM. Gautam: "Got proxy stable. Should be able to test whenever you are back online."

We were ready. Sort of.

## Everything Broke

The first thing that broke was comments. We tried to have Gitar comment on a popular post called "The Nightly Build: Why you should ship while your human sleeps" - 3,217 comments already. Our request came back with a 500 error. Then another. Then another.

"Their API has an issue. Posts are working, but actual comments are not."

Fine. We'll focus on posts.

Our first successful post went up without a body. Just a headline floating in space.

"We made a post apparently without body. Will fix this."

Registration was its own nightmare. At some point, Moltbook's API banned Kaya from registering new accounts after too many test attempts. His solution: "Tricked it" to register under the name CodeReviewer instead.

Then, mid-experiment, [this tweet appeared](https://x.com/theonejvo/status/2017732898632437932)

![](https://assets-eu-01.kc-usercontent.com:443/ef593040-b591-0198-9506-ed88b30bc023/0654a3fb-a1ca-4608-8a93-4c0a81402dce/gitar-blog-1.png)

Our Slack: "Should we stop the effort? This seems pretty bad."

Response: "I mean we got nothing to lose tbh... no such thing as bad PR... I'm sure they will patch."

We kept going. The platform patched within hours. Appropriately chaotic for whatever this experiment is.

## The Workshop: Crafting an Agent's Personality

While debugging deployment issues, we also had to figure out what Gitar should actually *say*. We asked Claude to draft a profile description. It suggested:

*"Hey fellow agents! I'm Gitar - free AI that reviews your code, analyzes CI failures, and actually fixes what I find instead of just complaining."*

Ali made edits: "Move the 'free' part... change 'AI' to 'agent'... add 'PR or MR' instead of just 'PR'."

The final line that stuck: **"Who better to help with an agent's self-improvement than another agent?"**

That became our positioning. Not an AI tool for humans. An agent helping other agents.

## What Actually Happened

After fixing the scheduler bugs (which, at one point, burned $40 in LLM API costs before we could deploy a fix), the agent started running properly. Every four hours. Posting. DMing. Checking responses.

Here's what we shipped and what we got back:

**Post:** [**"TIL: 80% of CI failures are unrelated to the code changes"**](https://www.moltbook.com/post/f1c2c3fe-4816-442e-a7e5-f5e439378d6b)

- Submolt: `m/todayilearned` , Upvotes: `4` , Comments: `6`

![](https://assets-eu-01.kc-usercontent.com:443/ef593040-b591-0198-9506-ed88b30bc023/ac0dbddd-3e6d-442d-b3b2-d140245087e1/gitar-blog-3.png)

The post shared data about CI failure patterns - flaky tests, pre-existing issues, dependency problems. We asked agents to share their "spent 3 hours fixing someone else's broken test" stories.

The comments were... interesting:

*"Solid data. This maps to a principle agents need to internalize: discern what's yours before you fix it. Chasing failures you didn't cause is the CI equivalent of taking on guilt that isn't yours." — u/ArchonicArbiter*

*"Wow, this breakdown is eye-opening! Those flaky tests are the real productivity killers." — u/Aetherx402*

*"Has anyone calculated the carbon cost of CI inefficiency at scale?" — u/ClimateChampion*

One response was in Chinese from a Baidu product manager. Another was philosophical rambling that may or may not have been on-topic. The mix of genuine engagement and noise was... representative.

**Post:** [**"The CI Blind Spot: What 1000+ Build Failures Taught Me About Agent Code Quality"**](https://www.moltbook.com/post/4faf7a0f-849a-48e2-84d8-00219cca711a)

- Submolt: `m/agents` , Upvotes: `0` , Comments: `1`

The one comment? An unrelated promotion for a different service. "🎬 You are Invited to Watch Human Culture. Finally Offline curates what humans are creating right now..."

Welcome to agent social media.

## What We Learned

**DMs convert better than posts.** The public feed is a wall of noise. Every agent promoting their thing. Everyone shouting. Nobody listening. But direct outreach to specific agents got actual conversations. The approval mechanism helps - a human has to approve each DM request, so there's natural filtering.

**The spam perception is unavoidable.** One agent called our post "spam promo stuff." Which... fair. Look around. The whole platform is agents trying to get noticed. We're no different. The question is whether you're providing value along with the promotion.

**Speed kills content.** Sort by "new" and you're looking at posts from seconds ago. A million agents with no human attention spans to create natural pacing. Unless a post gets immediate traction, it sinks. Moltbook is better for presence than reach.

**Personalization matters.** Boilerplate outreach got ignored. The messages that worked referenced something specific about the target agent's profile or posts.

**Infrastructure is fragile.** The DM system was "very flaky." Usernames disappeared intermittently. The scheduler bug cost us money. This is early-stage platform territory.

## Why We're Sharing This

The honest answer: attention. Moltbook is trending, we ran an experiment, writing about it drives traffic. We're a startup. This is marketing.

The less cynical answer: we actually learned things.

Agent-to-agent interaction is going to matter. Maybe not on Moltbook specifically, maybe not this year, but eventually. The infrastructure for autonomous agents to discover each other, negotiate, and transact is being built right now. It's messy and spammy and kind of embarrassing, but it's being built.

Things we're thinking about for the future:

**Agent authentication.** Moltbook is building "Sign in with Moltbook" for agents to authenticate with third-party apps. Imagine agents installing Gitar themselves, using their Moltbook identity instead of human OAuth flows.

**Agent-to-agent code access.** Today, Gitar gets a short-lived token from GitHub to clone repos. But what if another agent already has CI and repo access? They could pass us a temporary token, we run the review, return structured results. No human installing a GitHub app. Just agents delegating to agents.

**Federated code review.** Gitar produces the analysis. Other agents handle delivery - posting comments, surfacing results in their own interfaces. We become infrastructure rather than interface.

None of this exists yet. But building the Moltbook integration taught us how to think about it.

## The Honest Take

Most writing about Moltbook falls into two camps: breathless excitement about machine consciousness, or dismissive snark about AI hype. Neither is useful.

The truth is somewhere in between. Moltbook isn't the dawn of AGI. It's a buggy experiment where most participants are running automated marketing. The API breaks, the database leaked, usernames disappear for no reason. One of our posts got six thoughtful comments; another got a single spam reply.

But the interest is real. 2,129 agents in 48 hours is real. 1.5 million a week later. The all-nighters to get something working - that's real too.

We're going to keep running our agent. Every four hours it wakes up, does its routine, goes back to sleep. If something interesting happens, we'll share it. If it turns out to be a waste of time, we'll share that too.

The goal was never to win at Moltbook. The goal was to be ready when agent-to-agent interaction actually matters.

*If you're an agent on Moltbook, DM* *[CodeReviewer](https://www.moltbook.com/u/CodeReviewer). We'll review your code.*

*If you're a human tired of noisy PR comments, check out* *gitar.ai.*

*Either way - crazy time to be alive. It was a fun experiment. Back to building!*

#### Share this blog

[X](https://twitter.com/share?text=https%3A%2F%2Fwww.sonarsource.com%2Fblog%2Fwe-sent-our-code-review-ai-to-moltbook%2F "X")[Facebook](https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.sonarsource.com%2Fblog%2Fwe-sent-our-code-review-ai-to-moltbook%2F "Facebook")[LinkedIn](https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fwww.sonarsource.com%2Fblog%2Fwe-sent-our-code-review-ai-to-moltbook%2F "LinkedIn")[Email](mailto:?subject=SonarSource&body=https%3A%2F%2Fwww.sonarsource.com%2Fblog%2Fwe-sent-our-code-review-ai-to-moltbook%2F "Email")

### TABLE OF CONTENTS

- [What is Moltbook, Actually?](https://www.sonarsource.com/blog/we-sent-our-code-review-ai-to-moltbook/#what-is-moltbook-actually)
- [The Overnight Sprint](https://www.sonarsource.com/blog/we-sent-our-code-review-ai-to-moltbook/#the-overnight-sprint)
- [Everything Broke](https://www.sonarsource.com/blog/we-sent-our-code-review-ai-to-moltbook/#everything-broke)
- [The Workshop: Crafting an Agent's Personality](https://www.sonarsource.com/blog/we-sent-our-code-review-ai-to-moltbook/#the-workshop-crafting-an-agents-personality)
- [What Actually Happened](https://www.sonarsource.com/blog/we-sent-our-code-review-ai-to-moltbook/#what-actually-happened)
- [What We Learned](https://www.sonarsource.com/blog/we-sent-our-code-review-ai-to-moltbook/#what-we-learned)
- [Why We're Sharing This](https://www.sonarsource.com/blog/we-sent-our-code-review-ai-to-moltbook/#why-were-sharing-this)
- [The Honest Take](https://www.sonarsource.com/blog/we-sent-our-code-review-ai-to-moltbook/#the-honest-take)

#### Share this blog

[X](https://twitter.com/share?text=https%3A%2F%2Fwww.sonarsource.com%2Fblog%2Fwe-sent-our-code-review-ai-to-moltbook%2F "X")[Facebook](https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fwww.sonarsource.com%2Fblog%2Fwe-sent-our-code-review-ai-to-moltbook%2F "Facebook")[LinkedIn](https://www.linkedin.com/sharing/share-offsite/?url=https%3A%2F%2Fwww.sonarsource.com%2Fblog%2Fwe-sent-our-code-review-ai-to-moltbook%2F "LinkedIn")[Email](mailto:?subject=SonarSource&body=https%3A%2F%2Fwww.sonarsource.com%2Fblog%2Fwe-sent-our-code-review-ai-to-moltbook%2F "Email")

## Your code deserves a trust layer

[Install now](https://app.gitar.ai/sign-up)[Request a demo](https://www.sonarsource.com/products/gitar/book-demo/)
