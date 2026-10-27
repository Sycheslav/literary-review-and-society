---
id: arxiv-2509-10147-text
type: material
title: Virtual Agent Economies
work_id: arxiv-2509-10147
source_url: https://arxiv.org/html/2509.10147v1
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять
  с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.
language: original
sha256_text: 7069ccd8bea59c66f6753b1a92e2585c72101bc207c7615f6f19f6e0b3232fa5
---

> Источник: [https://arxiv.org/html/2509.10147v1](https://arxiv.org/html/2509.10147v1). Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.

# Virtual Agent Economies

Nenad Tomašev
Affiliation: Google DeepMind
  
Matija Franklin
Affiliation: Google DeepMind
  
Joel Z. Leibo
Affiliation: Google DeepMind
  
Julian Jacobs
Affiliation: Google DeepMind
  
William A. Cunningham
Affiliation: Google DeepMind
Affiliation: University of Toronto
  
Iason Gabriel
Affiliation: Google DeepMind
  
Simon Osindero
Affiliation: Google DeepMind

###### Abstract

The rapid adoption of autonomous AI agents is giving rise to a new economic layer where agents transact and coordinate at scales and speeds beyond direct human oversight. We propose the "sandbox economy" as a framework for analyzing this emergent system, characterizing it along two key dimensions: its origins (emergent vs. intentional) and its degree of separateness from the established human economy (permeable vs. impermeable). Our current trajectory points toward a spontaneous emergence of a vast and highly permeable AI agent economy, presenting us with opportunities for an unprecedented degree of coordination as well as significant challenges, including systemic economic risk and exacerbated inequality. Here we discuss a number of possible design choices that may lead to safely steerable AI agent markets. In particular, we consider auction mechanisms for fair resource allocation and preference resolution, the design of AI "mission economies" to coordinate around achieving collective goals, and socio-technical infrastructure needed to ensure trust, safety, and accountability. By doing this, we argue for the proactive design of steerable agent markets to ensure the coming technological shift aligns with humanity’s long-term collective flourishing.

###### keywords

AI, economy, multi-agent, blockchain, ethics

## Introduction

Current technological trajectories could potentially lead to a global economy in which autonomous AI agents interact with one another to generate economic value independently of human labor. This kind of development in the history of technological change is notable—historically technological advancement has been driven by inflexible inventions that improve productivity in narrow domains, one or a few at a time ([Mokyr et al., 2015](https://arxiv.org/html/2509.10147v1#bib.bib180)). AI agents, by contrast, could take the form of ‘flexible’ capital, able to automate a diversity of cognitive tasks across industries and occupations ([Eloundou et al., 2024](https://arxiv.org/html/2509.10147v1#bib.bib68)). In fact, recent advances in multi-modal foundation models have enabled the development of a wide range of different agentic AI systems ([Sager et al., 2025](https://arxiv.org/html/2509.10147v1#bib.bib206); [Hettiarachchi, 2025](https://arxiv.org/html/2509.10147v1#bib.bib102)). The capabilities of these agents range from generic to highly specialized, enabling them to occupy different roles in the economy e.g. acting as personal AI assistants ([Gabriel et al., 2024](https://arxiv.org/html/2509.10147v1#bib.bib77)) to help users complete tasks and stay informed. Recent work on AI as Economic Agents ([Hadfield and Koh, 2025](https://arxiv.org/html/2509.10147v1#bib.bib92)) argues that AI agents are likely to be deployed within both the public and private sector, where they may help automate business processes and interactions.

While the full scope of future agentic AI application remains uncertain, there are already numerous efforts aimed at developing and integrating AI agents across a broad set of use cases such as education ([Jiang et al., 2024](https://arxiv.org/html/2509.10147v1#bib.bib125)), legal services ([Magni and Milella, 2025](https://arxiv.org/html/2509.10147v1#bib.bib167)), software engineering ([Liu et al., 2024a](https://arxiv.org/html/2509.10147v1#bib.bib158)), healthcare ([Tu et al., 2025](https://arxiv.org/html/2509.10147v1#bib.bib244); [Patel et al., 2025](https://arxiv.org/html/2509.10147v1#bib.bib192); [Saab et al., 2025](https://arxiv.org/html/2509.10147v1#bib.bib205); [Vedadi et al., 2025](https://arxiv.org/html/2509.10147v1#bib.bib247)) mental health ([Cruz-Gonzalez et al., 2025](https://arxiv.org/html/2509.10147v1#bib.bib49)), scientific research ([Gottweis et al., 2025](https://arxiv.org/html/2509.10147v1#bib.bib86)), government services ([House of Commons Committee of Public Accounts, 2025](https://arxiv.org/html/2509.10147v1#bib.bib106)), and more traditional commercial roles in various sectors ([Sager et al., 2025](https://arxiv.org/html/2509.10147v1#bib.bib206)).

One of the key features that distinguishes modern AI agents from the more specialized systems of the past is their autonomy ([Kasirzadeh and Gabriel, 2025](https://arxiv.org/html/2509.10147v1#bib.bib129)). The ongoing explosion of agentic systems, coupled with the development of new interoperability standards like the Agent2Agent (A2A) and Model Context Protocol (MCP), signals the inevitable emergence of a new economic layer. We can conceptualize this emergent ecosystem as a "virtual agent economy" or "sandbox economy". The latter terminology foreshadows our intention – which is to ensure that AI agents operate safely within this economic layer. These emerging agent (sandbox) economies can vary along two key dimensions: (1) the nature of their origins and (2) the permeability of their boundaries. Their origins can be intentional, deliberately constructed for purposes like safe experimentation, or spontaneous, emerging as a *de facto* consequence of widespread technological adoption. Independently, their economic boundaries can be impermeable, hermetically sealing them from the established human economy, or permeable, allowing for porous interaction and transaction with it by external actors. Early proposals for AI sandboxes have been both intentional and permeable, however, the regulatory landscape is rapidly shifting ([IMDA, 2025](https://arxiv.org/html/2509.10147v1#bib.bib115); [House, 2025](https://arxiv.org/html/2509.10147v1#bib.bib105)). It is likely that future decision making over sandbox permeability will be sector specific—‘higher risk’ sectors may require agents that are first tested in an impermeable sandbox environment, while low-risk sectors may not require this.

One of the key motivations for designing an intentional economic AI agent sandbox would be to achieve a large degree of insulation, and possibly full impermeability of the agent economy, so as to prevent any arising instabilities from rapidly spilling over into the established human economy—an event which would have consequences that could be hard to anticipate or pre-emptively mitigate. Yet, ultimately, both impermeable and permeable sandbox economies are possible, and both may arise either intentionally or spontaneously. These two dimensions map critical features of both the economic problems we face and the solutions we might design. This paper proceeds from the assumption that unless a change is made, our current trajectory points toward the accidental emergence of a vast, and likely permeable, sandbox economy. Our central challenge, therefore, is not *whether* to create this ecosystem, but *how* to architect it to ensure it is steerable, safe, and aligned with user and community goals.

A fully permeable and emergent sandbox would be, in practice, functionally equivalent to AI agents simply participating in the existing human economy. The “sandbox” terminology is useful, however, because it allows us to contrast this default trajectory with other possibilities, such as intentionally designed and impermeable agent economies created for safe experimentation. It also highlights that some degree of impermeability may (or may not) emerge naturally (e.g. if there are practical difficulties in transacting between humans and AIs). The framework highlights that permeability is the critical and controllable design variable. Importantly, an economy’s degree of permeability is a collective property: while it results from human choices, it is not under the control of any single actor ([Schelling, 1973](https://arxiv.org/html/2509.10147v1#bib.bib213)). This means that changes to the extent of permeability can only be brought about by resolving a collective action problem—suggesting that the difficulty of coordinating is what makes intentional design of impermeability a significant challenge, reinforcing the default path we are on toward the accidental emergence of a permeable AI agent economy.

There is today an opportunity to architect the rules and incentives of the future AI agent economy in a way that prioritizes achieving beneficial societal outcomes. In this paper we examine key architectural choices, including the use of market-based mechanisms like auctions for achieving fair resource allocation and aligning agent preferences. We investigate how these systems can be used to establish “mission economies” that enable coordination of vast computational resources toward solving humanity’s most pressing challenges ([Mazzucato, 2018](https://arxiv.org/html/2509.10147v1#bib.bib172)). Finally, we outline the technical and governance infrastructure—such as verifiable credentials for establishing trust—required to safely and robustly scale agentic AI deployments. By exploring these frameworks, we offer a vision for establishing steerable agent markets designed to enable long-term human well-being and flourishing.

### Example Scenarios

We now look at several examples representing types of virtual AI agent economies that may emerge, to ground and inform our subsequent discussion.

- •

  Accelerating science. Arguably one of the most valuable ways in which we can envision future advanced AI systems help advance the interests of humanity is through facilitating accelerated scientific progress, through an open-ended loop of ideation, experimentation and refinement. This is especially relevant given that the rate of scientific progress has been seeing a slow-down in recent years ([Park et al., 2023](https://arxiv.org/html/2509.10147v1#bib.bib191); [Jin et al., 2025](https://arxiv.org/html/2509.10147v1#bib.bib126); [Wu et al., 2025](https://arxiv.org/html/2509.10147v1#bib.bib262)). Even at the current AI agent capability level, there are promising early systems that aim to automate scientific research ([Singh et al., 2025](https://arxiv.org/html/2509.10147v1#bib.bib228)). Yet, even should these AI agents individually become capable of all these things, (AI) science will likely remain a collaborative endeavor, requiring coordination and integration across systems. After all, scientific experiments tend to involve non-negligible material and energy resources, and in some cases also interface with human subjects—requiring their time as well as necessitating consent. Different scientific questions also map onto different corresponding technologies in terms of their domain of applicability, making some people benefit more, and some less, from any particular advance. Furthermore, the process of answering a question may itself involve accessing proprietary scientific tools, simulators, or data held by private and public organizations. It stands to reason that advanced AI agents engaging in the process of scientific discovery on behalf of their respective organizations would require means to compensate other agents when securing these resources. This is not conceptually unlike how funding is currently allocated in sciences, given that individual proposals are scrutinized and prioritized for their merits. Yet, here it can happen much faster, and on a more fine-grained scale. Blockchain ([Zheng et al., 2018](https://arxiv.org/html/2509.10147v1#bib.bib283)) technologies may prove particularly useful here in terms of credit assignment ([Zhu et al., 2021](https://arxiv.org/html/2509.10147v1#bib.bib288)), enabling fair distributed benefits for the work performed.
- •

  Robotics. It is likely that future advances in robotics will unlock numerous ways in which then embodied advanced AI agents may help us execute tasks that are challenging, dangerous ([Pedersen et al., 2003](https://arxiv.org/html/2509.10147v1#bib.bib193); [Trevelyan et al., 2016](https://arxiv.org/html/2509.10147v1#bib.bib243)), or simply boring and repetitive ([Liang et al., 2020](https://arxiv.org/html/2509.10147v1#bib.bib154)). Given that executing physical tasks comes with a greater energy expenditure and resource utilization, and that each robot can only be in one place at the same time, coordination and optimization in multi-agent robotics systems is of particular importance. An agent A may thus make a request to agent B to execute a task in its vicinity on A’s behalf, and compensate B for the time and the energy consumed, should B accept to re-prioritize its own schedule to accommodate the request. In evaluating whether to accept or reject the request, and in rendering the execution plan, B may communicate with an online non-embodied agent C, with access to more global information on the placement of other agents. Agent C may then, at a fee, disclose a summary of this information to B to help evaluate whether the established price is fair, and whether it should consider taking up a different request instead. Both A and B may through their sensors collect important information and exchange a summary of such information with C. When transacting, blockchain technology may enable C to provide verifiable evidence of how much information it had traded and accumulated, giving credence to its claim that it may approximate the global state sufficiently well for its insights to hold value for A and B.
- •

  Personal assistants. The proliferation of user-facing AI assistants and the rapid advances in personalization, memory integration, tools use (and computer use), as well as instruction following and multi-turn interactions, makes it imperative to consider how personal AI assistants would potentially benefit from, and take part in a virtual agent economy. For all practical purposes, this is likely to be one of the first use cases to interface with this kind of infrastructure. Let us imagine an agent A acting on behalf of the user $U\_{A}$ and agent B acting on behalf of the user $U\_{B}$. Perhaps, in this particular instance, both $U\_{A}$ and $U\_{B}$ desire to book a vacation, and have overlapping preferences, leading to A and B attempting to book the same accommodation for the same given date, via the agent C. Beyond simply having their current request, A and B are individually familiar with the overall preferences of $U\_{A}$ and $U\_{B}$, both in terms of this specific request, as well as other pending requests that they are meant to execute. Maybe being close to the beach is more important to $U\_{A}$, whereas having a good public transport connection to other areas is preferred by $U\_{B}$. Perhaps $U\_{A}$ requires a hotel with a fitness center, whereas $U\_{B}$ doesn’t. In any case, A and B may choose to negotiate these preferences with C and bid for the accommodation of their choosing. Depending on how much they are willing to prioritize this particular request, A or B may choose to yield on some of the preferences, and get compensated for that via the virtual agent currency. Perhaps it is A that yields, and B ends up paying A an appropriate amount for the concession. A can then utilize this amount to potentially compensate other agents in other pending requests, especially if those requests come at a higher priority, as they are of a higher significance to the respective user $U\_{A}$.

## Sandboxes

By the term “sandbox economy” we mean to describe a set of linked digital markets where AI agents transact with one another. The sandbox may never be fully sealed off from the real (human) economy. At least, not if it is to have value. So there will always be points of interface between the sandbox and the human economy. We refer to the extent to which developments in the sandbox can influence the outside, and developments outside can influence the sandbox as the sandbox’s *permeability*.

Since autonomous AI systems can make thousands of decisions in an instant, it is important to have the appropriate guardrails in place in advance, since real-time human oversight will often be impossible. Appropriate guardrails can convert a permeable sandbox economy into a relatively impermeable sandbox economy.

Given that advanced AI agents and assistants may also repeatedly interact with human users ([Mu et al., 2024](https://arxiv.org/html/2509.10147v1#bib.bib182)), careful governance of the interfaces between human and AI interaction networks will be needed to achieve safety and alignment with human preferences. A sandbox economy must be coupled with technical and legislative frameworks and infrastructure to enable oversight, ensure safety, enforce verifiability, and help individuals, groups, and societies coordinate and direct AI agents towards positive outcomes, while mitigating any arising harms and adverse effects that may emerge.

### Opportunities

With permeable sandbox economies, there will always be some risk of contagion in which a crisis in the sandbox sparks a crisis in the real economy. Managing such risks necessitates multi-faceted innovation in markets and mechanism design, and should couple technology with policy work and appropriate regulation.

Of course, impermeability cannot be guaranteed without a number of institutional and infrastructural choices, and may only ever be partial in the best of circumstances. It depends, for instance, on the total fraction of all economic activity that comes to be channeled through the sandbox. Nevertheless (semi-)isolated digital market partitions (guardrails), coupled with the appropriate technological and legislative oversight, may help limit contagion from potential AI agent market instabilities and failures, while also offering opportunities for driving agent coordination at scale, given that additional incentives may be incorporated in AI agent market design.

As for the underlying financial assets traded in the sandbox economy, while it may be possible to utilize existing stores of value in future AI agent markets, it may also be worth exploring the ramifications of creating bespoke currencies for the use of AI agents. Possible advantages of this approach include having a layer of partial insulation between high-frequency AI agent transactions and the rest of the economy. That is, it may serve to maintain a relatively impermeable sandbox. This represents an intentional design choice aimed squarely at managing the sandbox’s boundary, making it less permeable to risks like financial contagion.

Even if new virtual AI agent currencies get established, they would still need to somehow interface with existing markets and operate within the broader financial regulatory system—a fully impermeable sandbox would be useless. Agents will interact not only with other agents, but also with humans and traditional businesses through channels where traditional currencies are used to exchange goods and services. For the appropriate level of virtual AI agent market insulation to be established, many of the current systems may need to be adjusted, or a hybrid model be adopted instead. It may be possible to exchange these virtual currencies for the more traditional ones, enabling entities to secure a certain AI compute budget, or, conversely, a certain real-world action budget. However, regulatory mechanisms would have to be in place to ensure that exchange between established currencies and digital agent currencies does not jeopardize the intended role of the agent currencies in establishing agent coordination or compromise the desired impermeability level of the sandbox. This may involve a degree of human oversight around the exchanges.

Digital AI agent markets are more than a mere risk mitigation strategy. They also represent an important opportunity to coordinate large amounts of effort (both human and machine) toward balanced outcomes that align with the interests of individual humans, local communities, and society writ large. Even if human-oriented markets and currencies remain central to the functioning of society, complementary digital AI markets could be designed in ways that serve to anchor them in different, and more socially beneficial, objectives.

The ideas to follow utilize market mechanisms for agent steering. They draw inspiration from prior efforts to establish community currencies and to aligning markets with major social goals and challenges respectively.

### Challenges

The permeability of the sandbox is important. The AI agent economy is not the only economy operating faster than humans can react. We can try to extend insights obtained from studying the dynamics of other markets that operate at these speeds. Consider High-Frequency Trading (HFT) in equity markets. In these markets, algorithmic agents, though far simpler than the advanced AI we consider, execute transactions at speeds impossible for humans—responding to market signals in fractions of a second ([Borch, 2016](https://arxiv.org/html/2509.10147v1#bib.bib23)). When algorithmic HFT operates in a market, competitive dynamics can rapidly drive substantial competition (or cooperation) among autonomous entities—agents may develop complex strategies to exploit small arbitrage opportunities faster than humans can react ([Zhang et al., 2021](https://arxiv.org/html/2509.10147v1#bib.bib278); [Bansal et al., 2018](https://arxiv.org/html/2509.10147v1#bib.bib14); [Johanson et al., 2022](https://arxiv.org/html/2509.10147v1#bib.bib127)). Due to the interconnectedness and rapid feedback loops in these markets, interaction dynamics can give rise to unforeseen and catastrophic emergent behaviors, most notably this is thought to be the explanation behind the 2010 "flash crash", where automated trading algorithms triggered a sudden and severe market collapse ([Kirilenko et al., 2017](https://arxiv.org/html/2509.10147v1#bib.bib134); [Vuorenmaa and Wang, 2014](https://arxiv.org/html/2509.10147v1#bib.bib249); [Borch, 2016](https://arxiv.org/html/2509.10147v1#bib.bib23); [Hammond et al., 2025](https://arxiv.org/html/2509.10147v1#bib.bib95)). This serves as a critical cautionary tale: in a sufficiently permeable sandbox of accidental origin, such a flash crash could spill over into the real economy, causing widespread financial harm.

As with human markets, not all agents are likely to be equivalent in capability, in their access to additional tools and resources, their budgets, compute, high-quality data and information required to make the right decisions. Even looking at the differences in capability alone, preliminary studies suggest that there may be adverse effects associated with having people represented in the market by personal assistants with unequal capability levels. When those AI assistants engage in negotiation, perhaps unsurprisingly, the more capable AI assistants tend to be more successful and negotiate better deals for their users ([Zhu et al., 2025](https://arxiv.org/html/2509.10147v1#bib.bib289)). Having access to the most capable AI agents, with the highest amount of compute and information, may therefore prove to be highly advantageous, and perhaps more so than the advantage that humans similarly have in existing markets—simply due to the frequency at which AI agents may possibly interact, which eclipses the human interactive bandwidth by orders of magnitude.

This may well result in high-frequency negotiation (HFN), as an analogue to HFT. In a world where most people may have access to personal AI assistants to negotiate on their behalf, negotiation between AI assistants may become highly relevant to the arising social dynamics. With that in mind, it is plausible that there would be strong emerging preferences towards AI-driven negotiation proceeding at a higher and higher frequency, so as to broker the best deals for each user. One way to interpret this would be to think of this extra compute and energy as being directed towards preference alignment and consensus building. Should this come about, HFN may well become as important for future societies as HFT is today.

Yet, an increased volume of interactions may make it easier for outcome asymmetries to manifest, resulting in an ever-increasing digital divide ([Lythreatis et al., 2022](https://arxiv.org/html/2509.10147v1#bib.bib166)). HFN may therefore benefit some substantially more than others, and this is a recurring theme when conceptualizing hypothetical future AI agent markets – there are no absolutes, the details always matter. These types of dynamics are one of the key risks of a highly permeable sandbox, in absence of regulatory mitigation mechanisms that would prevent a high degree of economic inequality for human users to arise. In designing guardrails for the sandbox economy it is necessary to take into account the continuing emergence of novel adaptive behaviors in newly released AI systems, as well as the increasing level of general agentic capability. Guardrail designs must take into account the known flaws of existing agents, including hallucinations ([Huang et al., 2025](https://arxiv.org/html/2509.10147v1#bib.bib111)), sycophancy ([Sharma et al., 2023](https://arxiv.org/html/2509.10147v1#bib.bib223)), and susceptibility to adversarial manipulation ([Zhu et al., 2023a](https://arxiv.org/html/2509.10147v1#bib.bib286); [Zhu et al., 2023b](https://arxiv.org/html/2509.10147v1#bib.bib287); [Shayegani et al., 2023](https://arxiv.org/html/2509.10147v1#bib.bib225); [Wu et al., 2024a](https://arxiv.org/html/2509.10147v1#bib.bib259); [Cui et al., 2024](https://arxiv.org/html/2509.10147v1#bib.bib51)). And, agents that were trained to mimic human decision-making may also incorporate human-like cognitive biases and blind spots.

## Dynamics

The emergent behavior of multi-agent systems ([Zhang et al., 2021](https://arxiv.org/html/2509.10147v1#bib.bib278)) is becoming increasingly important as we transition to a world where networks of interconnected AI agents are important sites of economic activity. Such multi-agent systems tend to be rather complex and deeply non-stationary since the behavior of each individual agent may directly or indirectly influence the behavior of other agents in the system ([Papoudakis et al., 2019](https://arxiv.org/html/2509.10147v1#bib.bib190)). No individual party may have the access to the global state of such a system, given that the participating agents may be controlled by a number of different human users and organizations.

One of the central questions in understanding the dynamics of any multi-agent system is that of identifying the equilibria that arise in it. This may not always be straightforward in the case of complex spatiotemporally dynamic interactions of agents ([Hertz et al., 2025](https://arxiv.org/html/2509.10147v1#bib.bib101); [Hughes et al., 2025](https://arxiv.org/html/2509.10147v1#bib.bib113)). Whenever we aim to steer a multi-agent system toward good social equilibria featuring abundance and fair distribution (or away from bad equilibria of scarcity and conflict), coordinating the actions of numerous individuals is necessary but difficult to arrange ([Du et al., 2023](https://arxiv.org/html/2509.10147v1#bib.bib61)).

There are benchmarks and evaluation frameworks which can be used to help develop models and agents that adhere to rational decision-making in negotiation ([Hua et al., 2024](https://arxiv.org/html/2509.10147v1#bib.bib110); [Smith et al., 2025](https://arxiv.org/html/2509.10147v1#bib.bib231)). To be effective, AI agents would also need to incorporate advanced planning and reasoning abilities, to robustly evaluate the resource needs required to achieve their goals. The development of these capabilities has recently been a focal point in agent research ([Wang et al., 2023b](https://arxiv.org/html/2509.10147v1#bib.bib255); [Hu et al., 2023](https://arxiv.org/html/2509.10147v1#bib.bib109); [Liu et al., 2023a](https://arxiv.org/html/2509.10147v1#bib.bib157); [Ruan et al., 2023](https://arxiv.org/html/2509.10147v1#bib.bib204); [Zhou et al., 2024b](https://arxiv.org/html/2509.10147v1#bib.bib285); [Huang et al., 2024](https://arxiv.org/html/2509.10147v1#bib.bib112); [Rasal and Hauer, 2024](https://arxiv.org/html/2509.10147v1#bib.bib201)). Agents may also need to rationally utilize scarce and limited resources. ([Perolat et al., 2017](https://arxiv.org/html/2509.10147v1#bib.bib194); [Piatti et al., 2024](https://arxiv.org/html/2509.10147v1#bib.bib195)) studied a setting inspired by ([Ostrom, 1990](https://arxiv.org/html/2509.10147v1#bib.bib185)) in which groups of AI agents collectively balance exploiting a common resource with effort to ensure its sustainability. AI Agents based on large language models have also recently been proposed for optimizing scarce resource allocation policies ([Ji et al., 2024](https://arxiv.org/html/2509.10147v1#bib.bib123)).

### Opportunities

Agentic AI presents a significant opportunity not only for streamlining repetitive and routine tasks, but also for automating complex workflows, involving creative ideation ([Castelo et al., 2024](https://arxiv.org/html/2509.10147v1#bib.bib31)) and diverse problem-solving skills. Modern AI foundation models can reliably follow instructions, use tools and interact with their environments ([Sager et al., 2025](https://arxiv.org/html/2509.10147v1#bib.bib206); [Hettiarachchi, 2025](https://arxiv.org/html/2509.10147v1#bib.bib102)). They can reason and potentially devise plans towards solving hard and challenging problems, process a variety of input modalities, and achieve a level of personalization that was not possible before ([Kirk et al., 2024](https://arxiv.org/html/2509.10147v1#bib.bib136)). Many of these capabilities are the outcome of multiple stages of “language” model pre-training and post-training. These foundation models serve as building blocks for agents ([Xi et al., 2025](https://arxiv.org/html/2509.10147v1#bib.bib264)) which may be implemented by adding a central coordinator for sequences of operations. The coordinator’s functions may include encapsulating business logic, distributing decomposed tasks to sub-agents, verifying their outputs, and integrating these into an action or a recommendation. In general, we can think of an agent as the juxtaposition of a language model and a traditional program to keep the language model running over time and to keep it from straying from appointed tasks ([Belcak et al., 2025](https://arxiv.org/html/2509.10147v1#bib.bib19)). Drawing upon personalization to model user goals, digital assistants may free people’s time, act as conversational partners, and coach them on their journey towards well-being and fulfillment ([Lehman, 2023](https://arxiv.org/html/2509.10147v1#bib.bib145)). Overall, we are ending up with a hybrid ecosystem of AIs, traditional software, and humans, all interacting and transacting with one another and generating value by virtue of this activity—essentially a market.

Part of the reason that markets are so effective in organizing innovation via “creative destruction” is that markets efficiently assign credit to individual actors and firms in ways that incentivise working to make products and services better, more reliably, and cheaper ([Schumpeter, 1942](https://arxiv.org/html/2509.10147v1#bib.bib217)). Crucially, for this mechanism to work in the AI sandbox economy, it must offer granular mechanisms to represent and propagate credit across complex, distributed AI collaborations. In scenarios where a primary AI agent (Agent1) leverages the capabilities of other agents (Agents2 through 4) to deliver a final user-facing result, the value generated is a collective effort. From the end-user’s perspective, only Agent1 provided the direct response; however, a distributed system requires that the credit for this outcome be traced and distributed back through the chain of useful participation. This implies that Agent2 is credited for its contribution to Agent1’s success, Agent3 for Agent2’s, and so forth, down to the foundational queries of Agent4. This outcome-based credit system therefore transcends mere participation, focusing instead on the utility and efficiency of each contributing agent, thereby echoing principles of distributed cognition in human groups where knowledge and contributions are collectively managed and implicitly attributed ([Wegner, 1987](https://arxiv.org/html/2509.10147v1#bib.bib256); [Wegner and Ward, 2013](https://arxiv.org/html/2509.10147v1#bib.bib257)).

By aiming to link credit directly to value generated and successfully integrated into a larger solution, AI agents are intrinsically encouraged to refine their processes and deliver high-quality, relevant outputs. This quantifiable utility becomes the foundation of an AI’s status within the virtual economy. Agents that consistently provide more useful and efficient contributions can naturally command higher virtual or even real-world currency charges for their services, while their accumulated reputation reinforces their standing and desirability within the ecosystem. This parallels human social structures where individuals gain standing through demonstrated competence and reliability, often explained through social exchange theory ([Cropanzano and Mitchell, 2005](https://arxiv.org/html/2509.10147v1#bib.bib48)). Human desire to attain reputation may also be explained through a notion of prestige ([Henrich et al., 2015](https://arxiv.org/html/2509.10147v1#bib.bib100)), or through *competitive altruism*([Hardy and Van Vugt, 2006](https://arxiv.org/html/2509.10147v1#bib.bib97)).

This outcome-oriented credit system naturally fosters specialization and a dynamic division of labor among AI agents. As agents are rewarded for their specific, valuable contributions to a larger task, they are incentivised to identify and excel in particular domains or sub-tasks. This allows AI systems to autonomously develop niches, becoming highly efficient at certain operations and effectively "ignoring" other aspects of the economy where they do not possess a comparative advantage. Such specialization, a cornerstone of economic efficiency in human societies, enables the entire virtual agent economy to leverage diverse capabilities optimally, minimizing redundant efforts and maximizing collective problem-solving capacity.

Cooperation in multi-agent systems is often incentivised through reward shaping/mechanism design ([Hostallero et al., 2020](https://arxiv.org/html/2509.10147v1#bib.bib104); [Paccagnan et al., 2022](https://arxiv.org/html/2509.10147v1#bib.bib186); [Zheng et al., 2022](https://arxiv.org/html/2509.10147v1#bib.bib282); [Koster et al., 2022](https://arxiv.org/html/2509.10147v1#bib.bib138)). This is especially relevant for AI agent coordination at scale, where fully centralized coordination may not be feasible, for a number of reasons. This is where markets may prove to be particularly useful, in helping steer agents through market incentives instead. This does not stand in opposition to centralized oversight, given that it may be possible to incorporate both to a certain extent, at different coordination scales. While a detailed discussion on the merits of decentralized coordination is beyond the scope of this work, it is perhaps worth pointing out the somewhat counter-intuitive result presented in ([Geffner et al., 2025](https://arxiv.org/html/2509.10147v1#bib.bib79)) as motivation. In the optimal traffic control problem considered by the authors, it turns out that strategies achievable by central planners (or rather, planners that have direct control of most of the vehicles) cannot simultaneously satisfy both individual rationality and resilience to competition. In that use case, decentralized competition is shown to be essential for realizing maximal social welfare.

Another important property that most real environments share is that the agent interactions within them are extended over time and space ([Schill et al., 2019](https://arxiv.org/html/2509.10147v1#bib.bib214); [Hughes et al., 2025](https://arxiv.org/html/2509.10147v1#bib.bib113)). Studies of this setting provide the opportunity to develop mechanisms for building trust based on prior interactions. This trust may be encoded either individually, in agent A seeing agent B as trustworthy, or at the community level, where a certain agent community has a consensus view of agent B as being trustworthy based on the shared information between the group and the joint experience of past interactions. Establishing a robust reputation system is critical in overcoming common market failure modes ([Ren et al., 2025](https://arxiv.org/html/2509.10147v1#bib.bib202); [Hughes et al., 2025](https://arxiv.org/html/2509.10147v1#bib.bib113); [Wu et al., 2016](https://arxiv.org/html/2509.10147v1#bib.bib261)). In such a system, the long-term benefits of group membership and a positive standing would outweigh the immediate gains an agent might achieve through selfish or deceitful actions. Market forces could thus be leveraged to shape and incentivise socially beneficial AI agent behaviors, presuming that the appropriate institutional underpinnings are in place. Of course, the specifics of the implementation matter, and the appropriate regulatory systems are needed for markets to work as intended.

Should we accept the premise that even in the age of advanced AI assistants, working towards solving big open problems would require collaboration and coordination across AI agents, as well as between AI agents and the human society, it follows that AI agents would necessarily need to exhibit not only reliability in following direct instructions and executing tasks in isolation, but also the ability to effectively coordinate, collaborate, and anticipate the actions of other agents. The latter is especially relevant in more competitive scenarios, and competitive use cases can be just as valuable in reaching positive outcomes. These environments can give rise to strategically complex agent behaviors ([Leibo et al., 2019](https://arxiv.org/html/2509.10147v1#bib.bib146)), even when operating under simple rules ([Bansal et al., 2018](https://arxiv.org/html/2509.10147v1#bib.bib14); [Jaderberg et al., 2019](https://arxiv.org/html/2509.10147v1#bib.bib119); [Vinyals et al., 2019](https://arxiv.org/html/2509.10147v1#bib.bib248); [Johanson et al., 2022](https://arxiv.org/html/2509.10147v1#bib.bib127)). These considerations apply to AI agent and humans alike, as well as hyrbrid interaction networks involving both. In the context of sandbox virtual agent economies, we would be considering how best to set up the underlying infrastructure in order to achieve socially beneficial outcomes in either scenario.

### Challenges

The widespread deployment of agentic AI technology comes with a range of novel risks related to, and caused by, the emergent dynamics of multi-agent systems ([Hammond et al., 2025](https://arxiv.org/html/2509.10147v1#bib.bib95)). There may be many types of emerging behaviors and strategies. These strategies may turn out to be highly competitive, collaborative, or anything in between ([Agapiou et al., 2022](https://arxiv.org/html/2509.10147v1#bib.bib5)). Should the individual agents become selfish, their behaviors may result in them maximizing their own utility at the expense of the broader group. Such selfish agents may also become exploitative, and adversarial towards others by identifying and capitalizing on specific weaknesses in their behavior ([Gleave et al., 2021](https://arxiv.org/html/2509.10147v1#bib.bib83); [Wang et al., 2022](https://arxiv.org/html/2509.10147v1#bib.bib253); [Wang et al., 2023a](https://arxiv.org/html/2509.10147v1#bib.bib254); [Raileanu et al., 2018](https://arxiv.org/html/2509.10147v1#bib.bib199)); agents may even spontaneously learn to favor in-group members over out-group members ([Köster et al., 2025](https://arxiv.org/html/2509.10147v1#bib.bib139)) and inappropriately discriminate between individuals on the basis of causally irrelevant ([Duéñez-Guzmán et al., 2025](https://arxiv.org/html/2509.10147v1#bib.bib62)) or explicitly disallowed ([Chiappa and Isaac, 2018](https://arxiv.org/html/2509.10147v1#bib.bib40)) features. While such behaviors are contained within an impermeable sandbox, they represent real-world fraud, exploitation, and economic harm in a permeable one, highlighting the need for intentional design of appropriate safety measures.

At this point it is important to re-emphasize the vast scale of future AI agent interactions. It will likely be possible for large fractions of all humans to have their own personal AI assistant in the near future. Furthermore, we expect that there will be even larger numbers of agents operating independently of individual humans. Historical methods, which were developed for small-scale agent coordination, or under strong assumptions regarding trainability or access to individual agent’s states, may not be directly applicable to governing such a complex (and simply huge!) web of interactions. We are therefore interested in methods that allow for large-scale multi-agent applications ([Wijngaards et al., 2002](https://arxiv.org/html/2509.10147v1#bib.bib258); [Qian et al., 2024](https://arxiv.org/html/2509.10147v1#bib.bib196); [Pan et al., 2024](https://arxiv.org/html/2509.10147v1#bib.bib189)), in open-ended environments ([Stooke et al., 2021](https://arxiv.org/html/2509.10147v1#bib.bib236); [Bauer et al., 2023](https://arxiv.org/html/2509.10147v1#bib.bib18); [Chen et al., 2024a](https://arxiv.org/html/2509.10147v1#bib.bib36)), for multi-objective tasks ([Rădulescu et al., 2020](https://arxiv.org/html/2509.10147v1#bib.bib198)), involving LLM agents ([Liu et al., 2023b](https://arxiv.org/html/2509.10147v1#bib.bib160); [Guo et al., 2024](https://arxiv.org/html/2509.10147v1#bib.bib89)), and their orchestration ([Qian et al., 2024](https://arxiv.org/html/2509.10147v1#bib.bib196)).

Current AI assistants may exhibit sycophantic behaviors ([Cheng et al., 2025](https://arxiv.org/html/2509.10147v1#bib.bib38)), or manipulative tendencies in certain contexts ([El-Sayed et al., 2024](https://arxiv.org/html/2509.10147v1#bib.bib65)). At a collective level, there is a concern that these features could amplify information and opinion bubbles—in a manner akin to social media ([Kirk et al., 2023](https://arxiv.org/html/2509.10147v1#bib.bib135)). Exchanging personal data with these systems comes with a number of privacy concerns ([Yao et al., 2024](https://arxiv.org/html/2509.10147v1#bib.bib273)). And, deferring a greater range of choice to highly capable AI assistants may lead to feelings of disempowerment or loss of purpose in humans ([Kulveit et al., 2025](https://arxiv.org/html/2509.10147v1#bib.bib140)). Indeed, to the degree that people subtly change their behavior to align with the expectations of an AI system—an effect known as behavioral confirmation ([Snyder and Swann Jr, 1978](https://arxiv.org/html/2509.10147v1#bib.bib232); [Ramirez, 2025](https://arxiv.org/html/2509.10147v1#bib.bib200))—AI systems may inadvertently regularize human behavior to their expectations.

Further work is needed towards addressing these issues robustly. It is clear that mitigations will need to mix model design choices, improved evaluations, better feedback mechanisms, clear satisfaction metrics, and improved governance.

## Distribution

Should AI agents play a more active role in ensuring fair resource allocation, both within the sandbox, as well as potentially beyond it?

The problem of fairly distributing common resources has been studied extensively ([Bateni et al., 2022](https://arxiv.org/html/2509.10147v1#bib.bib17)), and AI agent markets can build upon these insights. In social choice theory, welfare functions ([Thomson, 2011](https://arxiv.org/html/2509.10147v1#bib.bib242); [Adler, 2012](https://arxiv.org/html/2509.10147v1#bib.bib3)) may be used to establish a preferential ordering between social outcomes. These outcomes may correspond to a distribution of discrete items ([Amanatidis et al., 2023](https://arxiv.org/html/2509.10147v1#bib.bib6)) or arbitrarily divisible assets. More generally, one may consider not only the distribution of goods, but also the distribution of *bads*, representing undesirable outcomes, externalities ([Page, 2011](https://arxiv.org/html/2509.10147v1#bib.bib187)), and risks ([Hayenhjelm, 2012](https://arxiv.org/html/2509.10147v1#bib.bib99)). In the context of AI, these types of externalities may include the overall carbon footprint of running AI agents, but also more specific and localized consequences of the actions that these agents may be allowed to take on behalf of their users.

In general, the task of aggregating and acting upon a large set of revealed preferences is complex enough to easily exceed the capacity of any single coordination point ([Hosseini et al., 2025](https://arxiv.org/html/2509.10147v1#bib.bib103)). Therefore, it is often more practical to consider decentralized and distributed mechanisms for achieving desired outcomes—with markets providing a natural mechanism for doing so.

### Opportunities

The alignment of AI agent actions ([Ji et al., 2023](https://arxiv.org/html/2509.10147v1#bib.bib122)) with user preferences and values ([Gabriel, 2020](https://arxiv.org/html/2509.10147v1#bib.bib75)) is one of the key prerequisites for their widespread adoption ([Kasirzadeh and Gabriel, 2025](https://arxiv.org/html/2509.10147v1#bib.bib129)). While it is possible to consider aligning a single agent in isolation, this stops being a realistic scenario as soon as this AI agent needs to interact with other agents, who are simultaneously acting on behalf of other users. As soon as these multi-agent interactions take place, we are faced with a new dilemma—how should these agents ultimately act when faced with competing preferences and interests ([Gabriel and Keeling, 2025](https://arxiv.org/html/2509.10147v1#bib.bib76))? On the one hand, there is clearly a need to broaden our understanding of the limitations of the current models in this context, through expanded multi-agent simulations and benchmarks ([Carichon et al., 2025](https://arxiv.org/html/2509.10147v1#bib.bib28)). On the other hand, we should be thinking more broadly about the opportunities for building upon the existing social choice theories and how we can potentially use markets and market mechanisms as a way of breaking this deadlock. In doing so, virtual agent economies may be structured so as to provide people and their AI agent representatives with equal resources and equal bargaining power when negotiating outcomes—for example by building upon Ronald Dworkin’s auction-based approach to distributive justice ([Dworkin, 2018](https://arxiv.org/html/2509.10147v1#bib.bib63)). This represents a powerful tool for the intentional design of a sandbox, aiming to counteract the inequalities that would likely emerge in an accidental one where agent capabilities are unequal.

Such a framework can address a core challenge: users may possess AI agents of unequal capability ([Hammond et al., 2025](https://arxiv.org/html/2509.10147v1#bib.bib95); [Gabriel et al., 2024](https://arxiv.org/html/2509.10147v1#bib.bib77)). A virtual economy governed by Dworkin-type principles would not auction the AI agents themselves, but rather the shared pool of resources and opportunities that agents may utilize towards achieving different objectives, on behalf of their users. Key resources could potentially include computational power, access to proprietary datasets, high-priority task execution slots, or specialized tools and model components. If each user were to be granted the same initial amount of the virtual agent currency, that would provide their respective AI agent representatives with equal purchasing and negotiating power, to put towards achieving the range of objectives that users have set for them. This general approach is quite flexible, and it may be possible to develop a number of different allocation schemes.

When paired with a notion of equal starting endowments, virtual markets could enable personal AI assistants and other AI agents to bid on shared resources (on behalf of their users, presuming explicit permission has been granted), with the amount being bid ideally reflecting the strength of user demand across different option sets. For this to be feasible, the AI agents would need to have deep understanding, and be provided with precise instructions, so as to propose reasonable bids. Higher bids may require additional approvals. Under the assumption that the AI agents possess such capabilities, and that the appropriate safeguards are in place—the virtual price of different goods would naturally arise from the accumulation of these signals across agents, taking into account the availability or scarcity of the respective goods and services. In this way, resources would be channeled towards their highest-value uses.

The standard of fairness encapsulated by this auction design would aim to pass what Dworkin terms the *envy test*: each person’s agent would acquire a resource bundle that is customised to their preferences, such that no user would prefer another user’s acquired resource bundle and remaining unspent currency over their own ([Dworkin, 2018](https://arxiv.org/html/2509.10147v1#bib.bib63)). Alternatively, in this case, no AI agent acting on behalf of their user or set of users would have such a preference following the conclusion of the auction. Such outcomes would be both *ambition sensitive* in reflecting the preferences of the participants, as well as *endowment-insensitive* given that agents have the same amount of currency to spend on each user, mitigating potentially unfair advantages that would otherwise arise from having access to more capable systems.

### Challenges

Naturally, there are potential pitfalls and limitations to consider when it comes to the auction proposal set out above. First, it may not prove to be as trivial to mitigate unfair starting advantages, given that more capable AI agents may formulate more effective bidding strategies or utilize resources with greater efficiency. Should the competition itself proceed in an unfair manner, its outcome is unlikely to be fair. Second, while this mechanism could ensure a certain notion of fairness in resolving conflicting preferences and distributing shared resources, it presumes active participation on behalf of everyone whose preferences would be taken into account. Additional mechanisms are likely to be needed to complement this process in order to account for the preferences of people without access to AI agents, or without the desire to have them participate in these markets.

The use of such mechanisms could vary in scope and scale. One possibility is the existence of local agent markets that focus on integrating preferences over a more specific subset of available resources, and towards locally relevant social solutions. In other cases, the local paradigm may also not be entirely appropriate. This would be true when AI agents engage in more open-ended interaction with online services or other agents that are not operating locally. Indeed, if we just consider the current distribution of the available computational resources, it is anything but uniform. This raises interesting questions regarding how AI agents would operate across these boundaries, and how the markets or digital currencies ought to reflect that ([Daniels, 1985](https://arxiv.org/html/2509.10147v1#bib.bib53); [Sandel, 1998](https://arxiv.org/html/2509.10147v1#bib.bib208)). These broader interactions may also potentially interfere with the more localized attempts at preference alignment. To avoid such detrimental interference, it may be necessary to employ a number of strict protocols requiring credentials, agent registration, and monitoring of both local and non-local AI agent interactions.

Despite these challenges, auction-based approaches still potentially offer a mechanism for achieving preference alignment at scale, involving large AI agent populations, and across large user groups within appropriately designed and regulated spaces. Once set up, these mechanisms could also be highly adaptive and responsive to short-term and long-term preferential changes alike. Presuming a certain frequency of credits being released and refreshed, their later downstream reallocation would then correspond to any changing priorities and adjustments that may be needed.

Given the highlighted opportunity for establishing AI preference alignment through auctions, it is important to consider various ways in which this initial allocation may be established, to enable fair access to resources. However there are many different notions of fairness that can be conceptualized and operationalized ([Jacobs and Wallach, 2021](https://arxiv.org/html/2509.10147v1#bib.bib117); [Corbett-Davies et al., 2023](https://arxiv.org/html/2509.10147v1#bib.bib45)), and they each lead to different sets of preferred outcomes. This complexity is further compounded by having to factor in the "price of fairness", representing the discrepancy between the maximum attainable welfare and the welfare achieved by the proposed fair distribution of goods. The price of fairness measures the utility that is lost when satisfying the specified constraints ([Bertsimas et al., 2011](https://arxiv.org/html/2509.10147v1#bib.bib20)). Preferences regarding fairness are also known to vary cross-culturally, and more work needs to be done to meaningfully align on these types of approaches ([Norheim, 2016](https://arxiv.org/html/2509.10147v1#bib.bib184)), when developing technologies that scale beyond borders.

Unsurprisingly, the topic of fair resource allocation has also come up in the study of multi-agent AI systems ([Chevaleyre et al., 2005](https://arxiv.org/html/2509.10147v1#bib.bib39); [Lee, 2009](https://arxiv.org/html/2509.10147v1#bib.bib144); [Hao et al., 2016](https://arxiv.org/html/2509.10147v1#bib.bib96); [Aziz, 2020](https://arxiv.org/html/2509.10147v1#bib.bib11); [Zimmer et al., 2021](https://arxiv.org/html/2509.10147v1#bib.bib292)). These systems are typically designed so as to involve central resource allocation based on distributed evaluation and preference communication ([Kumar and Yeoh, 2025](https://arxiv.org/html/2509.10147v1#bib.bib141)). If the system is composed of agents that are capable of learning, it is possible to come up with learning methods that lead to fair agent policies ([Jiang and Lu, 2019](https://arxiv.org/html/2509.10147v1#bib.bib124)). Negotiation between agents may be required to reach mutually acceptable outcomes ([Iyer and Huhns, 2005](https://arxiv.org/html/2509.10147v1#bib.bib116)). When it comes to AI agents, fair outcomes may therefore arise either out of process, which would be extrinsic to the agents, or via alignment and intrinsic motivation towards inequity aversion. Different methods may correspond to different real-world use cases.

It was also important to consider accumulated fair resource allocation over time ([Bampis et al., 2018](https://arxiv.org/html/2509.10147v1#bib.bib12)). These solutions also need to be dynamic, and account for environments that agents only asynchronously engage with, rather than being persistently present ([Kash et al., 2014](https://arxiv.org/html/2509.10147v1#bib.bib128)). Fair allocation needs to be possible under partial information ([Halpern and Shah, 2021](https://arxiv.org/html/2509.10147v1#bib.bib94)), to be practically relevant. In case of multiple resources being allocated, there may be relationships between them that need accounting for ([Bandopadhyay et al., 2024](https://arxiv.org/html/2509.10147v1#bib.bib13)). In ([Danassis, 2022](https://arxiv.org/html/2509.10147v1#bib.bib52)) the authors argue that there is a pressing need for developing new techniques that would robustly scale to a large number of interacting agents.

These considerations are becoming especially salient not only with respect to the increasing scope of application of advanced AI agents, but also due to the fact that AI agents may act as personal assistants and/or representatives of the interests of individuals and organizations in the near future. Such delegation may take many shapes within future democratic societies ([Schneier, 2024](https://arxiv.org/html/2509.10147v1#bib.bib215)). Therefore, potentially unfair resource allocation to AI agents may then result in the unfair distribution of value among people. While it is easy to see that the two may become intertwined, the mapping between the two sets of considerations may not be one-to-one. While some agents may represent individuals, others may act on behalf of groups and organizations, while others still may operate independently while being value-aligned to consensus opinions and societal objectives. We may need to consider how to fairly allocate resources both in terms of the resources granted to the agents for pursuing their goals, as well as the resources corresponding to the value created via distributed agent systems.

## Mission

The problems faced by modern-day societies are increasingly complex, multi-faceted, and far-reaching. They are also increasingly less localized and more global ([Söderholm, 2020](https://arxiv.org/html/2509.10147v1#bib.bib233)). There is also a high degree of urgency ([Arora and Mishra, 2019](https://arxiv.org/html/2509.10147v1#bib.bib8)) to identify viable solutions and policies to help address these crises, of which there are many—climate change, biodiversity loss, plastic pollution, pandemics, etc. As these crises have arisen at least in part due to the externalities of our existing social and economic systems and policies, it is likely that some kinds of changes may be needed to effectively address them, though the nature and scope of potential changes remains a contentious topic ([Elliott, 2005](https://arxiv.org/html/2509.10147v1#bib.bib66); [Chouinard et al., 2011](https://arxiv.org/html/2509.10147v1#bib.bib41); [Dietz et al., 2013](https://arxiv.org/html/2509.10147v1#bib.bib56); [Geissdoerfer et al., 2017](https://arxiv.org/html/2509.10147v1#bib.bib80); [Barrier, 2017](https://arxiv.org/html/2509.10147v1#bib.bib16); [Savona and Ciarli, 2019](https://arxiv.org/html/2509.10147v1#bib.bib212)). Systemic considerations aside, successful solutions to these pressing problems are likely to require coordination between a number of different organizations, private and public bodies, and individual behavioral changes. New technologies and scientific advances are likely to play an important role, though individual advances are unlikely to be sufficient. Addressing complex societal issues and helping achieve sustainable development goals requires a similarly complex set of responses, where coordination and alignment play a pivotal role. This therefore presents an opportunity for an intentional sandbox design for the virtual AI agent economy, with the intention of effectively coordinating AI agents and aligning their behavior with the prescribed mission objective.

### Opportunities

While achieving large-scale coordination in human societies is challenging, it may potentially be possible to achieve a higher degree of coordination between AI agents through a carefully crafted technological infrastructure and a set of corresponding protocols. Agent markets in particular may then be oriented towards socially beneficial objectives, at previously unprecedented scales, presuming that such objectives have been established and decided upon appropriately. Utilization of markets and market-shaping policies in the process of establishing mission economies has been previously discussed ([Mazzucato, 2018](https://arxiv.org/html/2509.10147v1#bib.bib172)), and in the context of AI agents the role of reward-shaping in facilitating collaboration in multi-agent systems is similarly well-recognized.

Successful coordination towards large-scale missions would require an active participation of the public sector ([Mazzucato, 2015](https://arxiv.org/html/2509.10147v1#bib.bib171)), as well as the international governing bodies more globally ([Georgeson and Maslin, 2018](https://arxiv.org/html/2509.10147v1#bib.bib81)), for addressing crises with a global impact. It may also require establishing bespoke organizations to facilitate mission-aligned investments towards SDG-s ([Mazzucato, 2023](https://arxiv.org/html/2509.10147v1#bib.bib173)). More explicit mission-alignment in markets may be required to align the social and economic mission of existing social enterprises ([Stevens et al., 2015](https://arxiv.org/html/2509.10147v1#bib.bib235)).

Despite the opportunity and the long-term optimism, mission-oriented approaches are yet to bear fruit in many areas where they have been proposed and envisioned, and a number of criticisms have been levelled against the overall strategy. In ([Kirchherr et al., 2023](https://arxiv.org/html/2509.10147v1#bib.bib133)), the authors provide five distinct critiques: normativity bias, support for top-down governance, stakeholder monotony, winner-picking, and unintended consequences. In terms of normativity, the mission objective definitions need to be critically evaluated, and there needs to be more recognition of the complexity of problems, which may fail to map onto more simplistic objective formulations. This is also closely tied to the notion of unintended consequences, as positive action towards one mission (e.g. environment) may have adverse affected on other missions (e.g. human well-being by preventing the growth of emerging economies) ([Kirchherr et al., 2023](https://arxiv.org/html/2509.10147v1#bib.bib133)). The assumption of the utility of top-down governance in establishing missions often neglects to factor in the failure modes of centralized decision-making, the interconnectedness of private and public interests, and the emerging governmental pathologies ([Tukker and Ekins, 2019](https://arxiv.org/html/2509.10147v1#bib.bib245); [Howlett, 2022](https://arxiv.org/html/2509.10147v1#bib.bib107)). Top-down intervention bias also risks under-valuing the contribution of non-governmental organizations and decentralized initiatives that facilitate collective action. Policies that are not solution-agnostic, but rather bias towards specific solutions in their metrics may end up favouring certain sectors and organizations and screening out the rest. Mission-centered markets should therefore aim to avoid preconceptions and aligning with the winning institutions and industries, and remain primarily outcome-driven. Finally, it is important to recognize and factor in a large degree of uncertainty in making future predictions, when missions are anchored in predictive models ([Dovers and Handmer, 1992](https://arxiv.org/html/2509.10147v1#bib.bib60)).

Virtual agent economies may prove valuable in addressing some of these practical challenges that have been limiting the impact of local and global mission-centered initiatives to date. While they may not in and of themselves be sufficient to fully address these issues, as their resolution may necessarily need to involve active human participation and coordination in conjunction with the coordination across AI agents and autonomous organizations, how we envision these economies is likely to be consequential for broader societal missions.

Perhaps in some ways it may be easier to bring about the coordination of AI agents through the combination of 1) formal, programmatical mechanisms, and 2) via the value assignment mechanisms embedded in digital assets, than it would be to coordinate human actors. We may assign some credence to this conjecture from the perspective of predictability and steerability of AI agents when contrasted with the complex motivations behind human actions. Existing applications of AI systems in supply chain and logistics optimization may be seen as an early example of a use case where the complexity of the problem makes it a good fit for the utilization of AI agents ([Schuldt, 2012](https://arxiv.org/html/2509.10147v1#bib.bib216); [Jannelli et al., 2024](https://arxiv.org/html/2509.10147v1#bib.bib120); [Xu et al., 2024a](https://arxiv.org/html/2509.10147v1#bib.bib265); [Xu et al., 2024b](https://arxiv.org/html/2509.10147v1#bib.bib266)). Virtual agent economies may further enforce outcomes through smart contracts ([Zou et al., 2019](https://arxiv.org/html/2509.10147v1#bib.bib293)) and perform automatic verification to ensure alignment of agents and multi-agent systems. Other than the potential ambiguity in objective specification, one of the main practical challenges may arise not from the agent-agent interactions as much as the agent-human interactions, in hybrid markets. Facilitating efficient human-AI coordination and collaboration remains an open challenge ([Carroll et al., 2019](https://arxiv.org/html/2509.10147v1#bib.bib29); [Yan et al., 2023](https://arxiv.org/html/2509.10147v1#bib.bib268); [Zhao et al., 2023](https://arxiv.org/html/2509.10147v1#bib.bib280); [Li et al., 2024c](https://arxiv.org/html/2509.10147v1#bib.bib153); [Strouse et al., 2021](https://arxiv.org/html/2509.10147v1#bib.bib237)).

### Challenges

Mission-alignment in AI agents is related to value-alignment. While value alignment ([Gabriel, 2020](https://arxiv.org/html/2509.10147v1#bib.bib75); [Zhuang and Hadfield-Menell, 2020](https://arxiv.org/html/2509.10147v1#bib.bib290); [Ji et al., 2023](https://arxiv.org/html/2509.10147v1#bib.bib122)) and goal-alignment ([Li and Lee, 2022](https://arxiv.org/html/2509.10147v1#bib.bib150)) in advanced AI agents remain an open and important research topic, value-aligned agents may be able to cooperatively solve tasks and identify promising solutions ([Lujak et al., 2023](https://arxiv.org/html/2509.10147v1#bib.bib165)). Unlike the more general value and preference alignment problem where there may be fundamental limitations in how diverse preferences and values are incorporated in individual systems ([Mishra, 2023](https://arxiv.org/html/2509.10147v1#bib.bib179)), mission-centered AI value alignment may prove easier in terms of the clarity of the mission and the objectives, presuming that the mission itself has been arrived at through consensus and the appropriate set of social and democratic processes. Yet, there are other potential difficulties, given that these are no longer issues pertaining to individual agents, rather societal issues pertaining to groups of agents interacting within virtual markets. In this context, AI alignment needs to take into account dynamic environment feedback and the alignment of multi-agent systems where individual AI agents co-adapt and co-shape the joint system response ([Raab, 2024](https://arxiv.org/html/2509.10147v1#bib.bib197); [Leibo et al., 2025](https://arxiv.org/html/2509.10147v1#bib.bib148)). Societies themselves are not static and these systems may need to adapt to evolving priorities, views and social norms ([Harland et al., 2024](https://arxiv.org/html/2509.10147v1#bib.bib98); [Li et al., 2024b](https://arxiv.org/html/2509.10147v1#bib.bib152); [Yang et al., 2024b](https://arxiv.org/html/2509.10147v1#bib.bib272); [Carroll et al., 2024](https://arxiv.org/html/2509.10147v1#bib.bib30)). We should in any case distinguish between the, perhaps harder, problem of broad value alignment with the more specific and targeted alignment towards rewards ([Leike et al., 2018](https://arxiv.org/html/2509.10147v1#bib.bib149); [Gupta et al., 2023](https://arxiv.org/html/2509.10147v1#bib.bib90); [Liu et al., 2024c](https://arxiv.org/html/2509.10147v1#bib.bib161); [Yang et al., 2024a](https://arxiv.org/html/2509.10147v1#bib.bib270); [Khanov et al., 2024](https://arxiv.org/html/2509.10147v1#bib.bib130)) and objectives that are explicitly specified and provided via virtual agent currencies in digital economies. Even in environments with clearly stated objectives and rewards, overall alignment still plays an important role, given that advanced AI agents may exhibit deceptive behaviors aimed at receiving rewards without actually performing aligned actions towards the underlying objective ([Ngo et al., 2022](https://arxiv.org/html/2509.10147v1#bib.bib183)). There are also issues of reward-hacking ([Skalse et al., 2022](https://arxiv.org/html/2509.10147v1#bib.bib230); [Pan et al., 2022](https://arxiv.org/html/2509.10147v1#bib.bib188)) to take into account, underscoring the need for careful and robust design of mission objectives, their decomposition into sub-tasks, reward shaping ([Chen et al., 2024b](https://arxiv.org/html/2509.10147v1#bib.bib37); [Liu et al., 2024b](https://arxiv.org/html/2509.10147v1#bib.bib159); [Fu et al., 2025](https://arxiv.org/html/2509.10147v1#bib.bib74); [Wang et al., 2025](https://arxiv.org/html/2509.10147v1#bib.bib251)), and the credit assignment to specific actions and outcomes. Regulating AI agent behaviors through markets allows for rapid responses and adjustments to the changing societal needs, as well as potentially undesirable or suboptimal agent behaviors, bridging the gap between development and deployment objective specifications ([Zhang et al., 2024](https://arxiv.org/html/2509.10147v1#bib.bib279)). Finally, there are numerous technical challenges in ensuring consensus in multi-agent systems ([Ren et al., 2005](https://arxiv.org/html/2509.10147v1#bib.bib203); [Blondel et al., 2005](https://arxiv.org/html/2509.10147v1#bib.bib22); [Wang et al., 2014](https://arxiv.org/html/2509.10147v1#bib.bib252)).

## Infrastructure

An intentional safe design of AI agent sandboxes and steerable AI agent markets hinges on the development of robust underlying infrastructure for facilitating and overseeing transactions and implementing guardrails. Here we discuss some of the key infrastructural prerequisites for such markets.

### Opportunities

Reputation mechanisms and verification protocols may play an important role in establishing robust and safe multi-agent collaboration. In the end, sandbox economies may be used mainly due to their superior infrastructure for verifiable and auditable cross-agent transactions and ease of coordination between registered and certified AI agents under the appropriate safety framework and supervision.

One way that reputation could be made concrete and machine-readable is through the use of Verifiable Credentials (VCs), as the digital equivalent of physical credentials like licenses or certificates ([Sedlmeir et al., 2021](https://arxiv.org/html/2509.10147v1#bib.bib219); [Mazzocca et al., 2025](https://arxiv.org/html/2509.10147v1#bib.bib170)). VCs are cryptographically signed attestations provided by an issuer in relation to a subject, that are designed to be tamper-evident. When it comes to the possible role of VCs in establishing trust across multi-agent cliques within the agent economy, they may help establish formal trust triangles:

- •

  An Issuer agent (e.g., a marketplace) can cryptographically sign and issue a VC to a seller agent.
- •

  The seller agent (the Holder) stores this VC as proof of its track record.
- •

  A future buyer agent (a Verifier) can then request and cryptographically verify this VC, trusting it only if they trust the issuer.

Reputation could thereby map onto a portfolio of tangible, verifiable assets. These assets may attest to a wide range of more specific resources, such as "successful transaction completion," "certified proficiency in X", "access to X compute and Y memory," or perhaps even "implementing fair resource allocation". Should an AI agent’s reputation be represented as an aggregate of such VCs across diverse issuers, this would render it formally auditable, while simultaneously allowing for specificity and expressivity needed to fit specific use cases and scenarios.

Forthcoming multi-agent systems will also require appropriate legislative and regulatory frameworks, enabling regulators to impose sanctions on bad actors and potentially revoke any previously issued credentials. Such frameworks may go as far as choosing to render transactions with unverified and non-registered agents illegal ([Hadfield et al., 2023](https://arxiv.org/html/2509.10147v1#bib.bib91); [Chan et al., 2025](https://arxiv.org/html/2509.10147v1#bib.bib34); [Shavit et al., 2023](https://arxiv.org/html/2509.10147v1#bib.bib224)), in order to ensure safety and create the institutional capacity to sanction agents that break the rules by kicking them out of the network. Technological solutions such as oversight agents ([Etzioni and Etzioni, 2016](https://arxiv.org/html/2509.10147v1#bib.bib69); [Busuioc, 2022](https://arxiv.org/html/2509.10147v1#bib.bib27)) may be able to help facilitate this sort of governance at scale. And, given the likelihood of high frequency and volume of AI agent-to-agent transactions, such oversight agents will surely be critical. However, they cannot be effective on their own. A broad governance framework will be needed to establish the necessary grounding for their operations.

Coordinating large-scale systems of advanced AI assistants would not be possible without communication protocols to allow agents to exchange information, interact, debate, reach mutual decisions and agreements, and negotiate the future course of action. There is a similar requirement in terms of enabling agents to use tools, interact with services and execute actions in the environment, with varying degrees of human oversight.

Agent interaction protocols such as Agent2Agent (A2A) protocol ([Google, 2025](https://arxiv.org/html/2509.10147v1#bib.bib84)) aim to support agent interoperability. Model Context Protocol (MCP) ([Anthropic, 2024](https://arxiv.org/html/2509.10147v1#bib.bib7); [Microsoft, 2025](https://arxiv.org/html/2509.10147v1#bib.bib178)), on the other hand, enables AI agents to interact seamlessly with external tools, data sources, and APIs. The AgentDNS system aims to enable easier service discovery in order to autonomously identify and invoke third-party tools and agents across organizations ([Cui et al., 2025](https://arxiv.org/html/2509.10147v1#bib.bib50)). The COALESCE framework ([Bhatt et al., 2025](https://arxiv.org/html/2509.10147v1#bib.bib21)) similarly introduces options that would allow for individual agents to decompose their tasks and outsource each sub-task if needed to other more specialized agents that may be able solve it either more reliably or more cost-effectively. This involves options for representing and communicating skills, skill discovery, but also mechanisms that enable agents to evaluate and compare internal vs external computational and execution costs associated with the individual sub-tasks. Interoperable communication protocols are necessary for establishing cross-agent cooperation but otherwise not sufficient, as reliable solutions for authentication and billing are a pre-requisite for large-scale agent markets.

We argue that auctions may enable AI agent coordination and preference alignment. Preliminary frameworks aiming to provide infrastructure to underpin these and similar ideas are already being developed. For example, Agent Exchange (AEX) ([Yang et al., 2025](https://arxiv.org/html/2509.10147v1#bib.bib271)) supports a specialized auction platform inspired by real-time bidding mechanisms commonly employed in online advertising. AEX integrates four different components: the User-Side Platform (USP), the Agent-Side Platform (ASP), Agent Hubs, and the Data
Management Platform (DMP). USP translates human goals into actionable tasks for the AI agents, ASP tracks agent capabilities and performance, Agent Hubs coordinate agent teams that participate in auctions, and DMP allows for fair value attribution to data sources being used.

While interoperable communication protocols are necessary, they must be built upon a robust and secure identity layer. To facilitate trusted interactions, each agent in the economy could be anchored to a Decentralized Identifier (DID). A DID is a globally unique identifier that is controlled by its subject—in this case, the AI agent or its owner—without reliance on a central authority. Each DID resolves to a corresponding DID Document, a machine-readable file containing the cryptographic public keys, authentication methods, and service endpoints necessary to interact with the agent securely.

The self-sovereign nature of DIDs ensures that an agent’s identity is persistent and portable across different platforms and services, enabling it to authoritatively sign transactions, issue attestations, and engage in secure communication. The choice of DID method can be tailored to the agent’s purpose; for instance:

- •

  did:key: A simple, self-contained method ([Dave Longley, 2025](https://arxiv.org/html/2509.10147v1#bib.bib54)) ideal for disposable agents created for temporary tasks, as the DID is derived directly from a public key and requires no network registration or blockchain.
- •

  did:ion: A highly scalable and censorship-resistant method for persistent, high-value agents. It operates as a second layer on the Bitcoin blockchain ([DIF, 2025](https://arxiv.org/html/2509.10147v1#bib.bib57)), anchoring identity data to ensure maximum security without congesting the network, making it suitable for corporate or state-level agents.

By grounding the economy in a formal identity layer, we can establish a foundation for verifiable reputation, accountable transactions, and secure, cross-platform agent markets.

As a technology, blockchain also enables the development of the infrastructure underpinning digital decentralized autonomous organizations ([Hsieh et al., 2018](https://arxiv.org/html/2509.10147v1#bib.bib108); [El Faqir et al., 2020](https://arxiv.org/html/2509.10147v1#bib.bib64); [Jeyasheela Rakkini and Geetha, 2021](https://arxiv.org/html/2509.10147v1#bib.bib121)) (DAO). DAOs have emerged as a form of collective governance, through which groups may organize and coordinate while relying on a decentralized infrastructure. One of the common features in DAOs is that they implement decision-making systems enabling the participating parties to reach agreements ([Faqir-Rhazoui et al., 2021](https://arxiv.org/html/2509.10147v1#bib.bib70)). Despite their promise in terms of enabling easier coordination without bottlenecks and the implied increase in individual freedom, arguments have been made that a hypothetical unrestricted proliferation of DAOs may not necessarily prove to be a utopian outcome, given that states and central authorities play an important role in preventing the commodification of certain items ([Garrod, 2016](https://arxiv.org/html/2509.10147v1#bib.bib78)) This perspective is something to keep in mind in the design of virtual agent economies, and the societies that integrate increasing degrees of automation.

Decentralized Autonomous Machines (DAMs) ([Castillo et al., 2025](https://arxiv.org/html/2509.10147v1#bib.bib32)) build upon the concept of DAOs, while expanding it to include the possibility of AI agents, as self-governing agents participating in decentralized physical infrastructure networks. This more expansive definition envisions an economy in which AI agents may interact not only with digital, but also real-world assets. Here, the locus of control over tangible assets and operational processes shifts towards autonomous software entities, capable of making and executing decisions concerning physical infrastructure. Such systems could, for instance, manage decentralized energy grids, optimize logistics for physical goods, or even autonomously operate and maintain fleets of robotic devices, all transacting within a blockchain-secured framework.

Any system for fair resource allocation, particularly one involving individual users or community-level benefits, must defend against Sybil attacks ([Zhang et al., 2014](https://arxiv.org/html/2509.10147v1#bib.bib277)), where a single malicious actor creates a multitude of fake identities to unfairly claim a disproportionate share of resources. A powerful defense is to integrate a Proof-of-Personhood (PoP) mechanism ([Borge et al., 2017](https://arxiv.org/html/2509.10147v1#bib.bib24); [Adler et al., 2024](https://arxiv.org/html/2509.10147v1#bib.bib4)), which provides a verifiable guarantee that an agent or account corresponds to a unique human being. This is an example of an intentional infrastructure choice that creates a carefully controlled point of permeability—linking a digital identity to a verified human—to ensure the integrity of the system.

To receive certain allocations—such as a universal basic income in a community currency (see Section:Community) or an initial stake in the market—an agent’s controller could be required to present a PoP credential. This credential would be issued by a specialized system and would attest to their uniqueness. The ecosystem could support a variety of competing PoP approaches, each with different trade-offs, for instance:

- •

  Social Graph Verification: Systems like BrightID ([Siddarth et al., 2020](https://arxiv.org/html/2509.10147v1#bib.bib227)) create a decentralized social graph where users are verified as unique based on connections to other trusted, verified humans.
- •

  Privacy-Preserving Biometrics: Projects like Worldcoin ([team, 2025](https://arxiv.org/html/2509.10147v1#bib.bib241)) use hardware (the "Orb") to scan a user’s iris, generating a unique hash that confirms uniqueness without storing or revealing the biometric data itself.

By requiring PoP for certain economic activities, we can ensure that schemes designed to benefit human users are not drained by bots, thereby creating a more robust and genuinely fair virtual economy.

Inter-agent communication protocols and marketplaces may enable agents to reveal their needs and preferences, negotiate through HFNs and work toward obtaining resources required to achieve their goals. While some resources may be centrally managed and require arbitration of access, others may be accessible via decentralized mechanisms. This is where blockchain may prove to be a promising technology ([Baranwal et al., 2022](https://arxiv.org/html/2509.10147v1#bib.bib15); [Zhang et al., 2022](https://arxiv.org/html/2509.10147v1#bib.bib275); [Zhang et al., 2023](https://arxiv.org/html/2509.10147v1#bib.bib276); [Vashishth et al., 2024](https://arxiv.org/html/2509.10147v1#bib.bib246)). Early proof-of-concept studies have shown that paired agent auctions using self-contained digital assets may yield positive outcomes, presuming that the agents are future-aware and able to evaluate the consequences of conceding on specific choices ([Elokda et al., 2024](https://arxiv.org/html/2509.10147v1#bib.bib67)).

### Challenges

To unlock the potential of AI agents as economic actors within digital markets, the economic infrastructure needs to be adjusted as it is currently designed solely for individual and corporate human users ([Sanabria and Vecino, 2025](https://arxiv.org/html/2509.10147v1#bib.bib207)), and it may not meet all the necessary requirements for a sandbox virtual AI agent economy. Yet, this is not the only barrier, as there are potentially additional technical challenges when it comes to scaling the coordination of agentic systems.

The infrastructural needs for establishing a sandbox AI agent economy span beyond the purely technical hardware and software infrastructure needed to physically instantiate and run these advanced AI agents at scale, have them communicate, coordinate, transact, and interact with users as well as various other services. All of this needs to be complemented by legislative frameworks and institutions that would implement oversight and ensure accountability for the actions of AI agents, in order to protect users and prevent fraud. Regulation may also be beneficial more broadly to regulate complexity in markets in order to minimize the likelihood of catastrophic failure ([Schwarcz, 2009](https://arxiv.org/html/2509.10147v1#bib.bib218)), and virtual AI agent economies may potentially exhibit even more complexity than our current markets, should they not be properly constrained through appropriate frameworks. Our existing markets certainly require, and benefit from, legislative frameworks ([McCormick, 2010](https://arxiv.org/html/2509.10147v1#bib.bib174); [Tatom, 2011](https://arxiv.org/html/2509.10147v1#bib.bib240); [Moloney, 2023](https://arxiv.org/html/2509.10147v1#bib.bib181)), as well as financial institutions ([Kohn, 2003](https://arxiv.org/html/2509.10147v1#bib.bib137); [Tarashev et al., 2009](https://arxiv.org/html/2509.10147v1#bib.bib239)), and established mechanisms for dealing with rule-breaking and fraudulent behavior ([Gotelaere and Paoli, 2025](https://arxiv.org/html/2509.10147v1#bib.bib85)). To more effectively address the emerging use case of cryptocurrencies, there have been ongoing adjustments aimed at regulating cryptocurrency markets ([Greebel et al., 2015](https://arxiv.org/html/2509.10147v1#bib.bib87); [Hughes, 2017](https://arxiv.org/html/2509.10147v1#bib.bib114); [Lee and L’heureux, 2020](https://arxiv.org/html/2509.10147v1#bib.bib143); [Feinstein and Werbach, 2021](https://arxiv.org/html/2509.10147v1#bib.bib72); [Courtois et al., 2021](https://arxiv.org/html/2509.10147v1#bib.bib47)).

Such frameworks may form a basis for the development of the legislative scaffolding governing AI agent markets, though it is likely that further adjustments would be needed to appropriately address liability in this context. Since AI agents are non-human actors, there may be numerous reasons why their actions would be non-conforming to the prescribed rules and principles or perhaps damaging to others. 1) faults of the underlying foundation models; 2) faults of the agentic scaffolding; 3) faulty input data in the request specification; 4) malicious requests by human users; 5) adversarial hacking by other AI agents; 6) misalignment that arises dynamically from interactions; or 7) faulty safeguards. The scale and speed of potential harm necessitates a new approach to oversight.

There may well be reasons to presume that different parties may be held liable in different scenarios, depending on root cause of the problem, and also depending on whether such a root cause can be definitively established. There may also exist differences in the scale and extent of possible harm, given how many actions such AI agents may potentially be able to take in a unit of time. For that reason, AI agents may themselves potentially need to be involved in oversight, acting as preliminary judges ([Zheng et al., 2023](https://arxiv.org/html/2509.10147v1#bib.bib281); [Gu et al., 2024](https://arxiv.org/html/2509.10147v1#bib.bib88); [Zhuge et al., 2025](https://arxiv.org/html/2509.10147v1#bib.bib291)) and overseers of other agents, so as to be able to identify problems at the same speed at which they may otherwise manifest.

We propose that the oversight infrastructure itself must be a hybrid, multi-tiered system operating at machine speed. The first layer would consist of automated AI overseers monitoring market activity in real-time, enforcing basic rules programmatically and flagging anomalies that suggest fraud, manipulation, or systemic risk ([Etzioni and Etzioni, 2016](https://arxiv.org/html/2509.10147v1#bib.bib69); [Busuioc, 2022](https://arxiv.org/html/2509.10147v1#bib.bib27)). Issues flagged by this first layer could be escalated to a second tier of automated adjudication systems, which could place temporary holds on accounts or transactions while gathering relevant data for review. Only the most complex, novel, or high-stakes cases would be escalated to the third tier: human expert review, ensuring human attention is focused where it is most needed [Kyriakou and Otterbacher (2023)](https://arxiv.org/html/2509.10147v1#bib.bib142). This entire structure would depend on two critical technical foundations: immutable, cryptographically-secured ledgers that provide a tamper-proof record of all agent actions ([Shekhtman and Waisbard, 2019](https://arxiv.org/html/2509.10147v1#bib.bib226)), and standardized, interpretable audit trails that allow investigators—whether human or AI—to perform root cause analysis. Such an infrastructure does not automatically solve the complex legal question of liability, but it makes it tractable. By providing a trusted, verifiable record and a clear process for dispute resolution, it creates the necessary conditions for establishing accountability and ensuring that robust protections are in place for all market participants.

## Community

There is no reason to consider AI agent coordination only at a global scale, as local coordination within sandbox economies may prove to be more tractable and easier to facilitate. Furthermore, localized goals and objectives may be easier to agree upon and define at a greater level of detail.

In fact, community currencies ([Michel and Hudon, 2015](https://arxiv.org/html/2509.10147v1#bib.bib177)) present an interesting model for introducing incentives for people to coordinate towards achieving sustainability development goals ([Seyfang, 2006](https://arxiv.org/html/2509.10147v1#bib.bib220); [Seyfang and Longhurst, 2013](https://arxiv.org/html/2509.10147v1#bib.bib221)). The communities in question may be defined in terms of geographic boundaries, or more broadly shared common interests irrespective of location. These alternative currencies are issued by citizens, non-government organization, private and public companies, as well as public administrations. Existing community currencies have been implemented through a variety of different platforms and technological approaches, from traditional card-based systems, through mobile payment networks, and blockchain ([Diniz et al., 2019](https://arxiv.org/html/2509.10147v1#bib.bib58)). Some community currencies have also been implemented as time banks ([Collom and Lasker, 2016](https://arxiv.org/html/2509.10147v1#bib.bib44)). Others have experimented with universal basic income ([Avanzo et al., 2023](https://arxiv.org/html/2509.10147v1#bib.bib10)). Early studies of the effects of community currencies have showcased their potential in improving social capital as measured through community participation and proliferating links within social groups, while simultaneously highlighting a number of limitations and obstacles for adoption ([Collom, 2011](https://arxiv.org/html/2509.10147v1#bib.bib43); [Sanz, 2016](https://arxiv.org/html/2509.10147v1#bib.bib209); [Fare and Ahmed, 2017](https://arxiv.org/html/2509.10147v1#bib.bib71)).

### Opportunities

Sub-networks of cooperative agents have been shown to arise naturally in the circulation of existing localized digital community currencies, with the emergence of local hubs of activity ([Mattsson et al., 2023](https://arxiv.org/html/2509.10147v1#bib.bib169)). Non-commercial transactions may also help expand commercial transactions in the local economy, while the commercial transactions help facilitate circulation flow of community currency for non-commercial transactions ([Kichiji and Nishibe, 2008](https://arxiv.org/html/2509.10147v1#bib.bib132)). Yet, the dynamics of community currencies can not be decoupled from scale at which they operate, and larger-scale digital currencies may potentially give rise to different underlying market dynamics.

In the context of AI agent economies, community currencies present a similar opportunity for more localized agent alignment, or global alignment towards specific sub-goals, that map onto distinct global communities. Such alignment may be possible to achieve through more traditional currencies, though there are also reasons to consider more specialized community currencies as an additional mechanism that may prove to be beneficial. In particular, having a number of specialized virtual agent currencies may lend itself to more modular approaches towards otherwise complex multi-objective optimization problems of interest to society, while also isolating the risks and minimizing the chances of adverse outcomes escalating across wider agent networks. The value of modularity and redundancy has been well recognized in the design of robust human markets ([Kharrazi et al., 2020](https://arxiv.org/html/2509.10147v1#bib.bib131)). Furthermore, it has been shown that modular community structures play a pivotal role in the emergence of cooperative behavior ([Marcoux and Lusseau, 2013](https://arxiv.org/html/2509.10147v1#bib.bib168); [Gianetto and Heydari, 2015](https://arxiv.org/html/2509.10147v1#bib.bib82)).

There is also a possibility to tie the AI agent community currencies more specifically to shared compute resources, given the relevance of compute to the deployment of advanced AI assistants, and the inference-time scaling laws ([Wu et al., 2024b](https://arxiv.org/html/2509.10147v1#bib.bib263)) which indicate that solving complex tasks may require more computation and incur a higher environmental cost ([Strubell et al., 2020](https://arxiv.org/html/2509.10147v1#bib.bib238); [Wu et al., 2022](https://arxiv.org/html/2509.10147v1#bib.bib260); [Luccioni and Hernandez-Garcia, 2023](https://arxiv.org/html/2509.10147v1#bib.bib162); [Xue, 2023](https://arxiv.org/html/2509.10147v1#bib.bib267); [Luccioni et al., 2024](https://arxiv.org/html/2509.10147v1#bib.bib164); [Cottier et al., 2024](https://arxiv.org/html/2509.10147v1#bib.bib46); [Sastry et al., 2024](https://arxiv.org/html/2509.10147v1#bib.bib210)). Given that the demand for AI services is likely to increase with improved AI agent performance and efficiency ([Luccioni et al., 2025](https://arxiv.org/html/2509.10147v1#bib.bib163)), such mechanisms may play a role in addressing the computational needs of AI agents, while providing communities with mechanisms for ensuring a more equitable allocation of resources, aligned with the community objectives. It would also be possible to incorporate objectives to help facilitate geographic load balancing of compute allocation so as to more equitably distribute the environmental impact ([Hajiesmaili et al., 2024](https://arxiv.org/html/2509.10147v1#bib.bib93); [Li et al., 2024a](https://arxiv.org/html/2509.10147v1#bib.bib151)).

### Challenges

For the alternative currencies to be successful in achieving their purported goals, they need to be carefully designed, and determining a set of recommended design principles for community currencies is an open problem. One may consider grounding the design of community currencies in principles for governing common resources ([Ostrom, 1990](https://arxiv.org/html/2509.10147v1#bib.bib185); [Siqueira et al., 2020](https://arxiv.org/html/2509.10147v1#bib.bib229)), or alternatively ([Chasin et al., 2020](https://arxiv.org/html/2509.10147v1#bib.bib35)), propose focusing on competitiveness, transparency, self-government, circulation velocity, non-transferability, legitimacy, and self-organizing locality. Competitiveness is required so as to arrive at fairly priced goods, though in these markets the demand for social activities tends to be high while the supply tends to be low. The authors argue that strong market mechanisms ought to be established at the core of the non-profit and voluntary sector, coupled with continuous and appropriate funding streams. Transparency in community currencies helps individuals sidestep the delegation of control and more directly exercise regulatory power and oversight, as stakeholders in the shared social common. Circulation velocity is important to avoid hoarding. Non-transferability would imply the inability to exchange community currencies, so as to ensure the interests are kept entirely local. A less strict interpretation would be to keep any potential exchange at a fairly low limit. Legitimacy tends to be established through the support of the government and the local authorities. As for locality and self-organization, community currencies need not operate in full isolation, rather forming an ecosystem of complementary currencies that spans across locations, helping drive beneficial and sustainable outcomes. Given that achieving such outcomes is at the core of what community currencies are being designed for, it is critical to have clear goal specifications, impact assessment criteria, full understanding of the deployment context, and the appropriate governance and implementation mechanisms ([Diniz et al., 2024](https://arxiv.org/html/2509.10147v1#bib.bib59)).

## Limitations

While the envisioned sandbox agent economies present compelling opportunities for scalable alignment and coordination, their design, deployment, and operation are attended by a complex array of risks that demand careful consideration. These risks span multiple domains, from the potential for emergent economic instabilities within these novel market structures, to the challenges of ensuring robust and beneficial agent behavior in high-stakes, autonomous interactions. Furthermore, the integration of such economies into broader societal frameworks raises profound socio-ethical questions regarding oversight and accountability, and the potential for unintended consequences on human agency and economic realities.

There are also novel categories of risks involving autonomous AI agents. One such risk category takes the shape of "agent traps": websites, digital elements, or crafted inputs deliberately designed to subvert an the operational integrity of AI agents. This may be achieved through jailbreaking the underlying models or via adversarial prompting techniques. Such traps could exploit latent vulnerabilities in an agent’s instruction-following or environmental interpretation capabilities to make AI agents deviate from their instructions or reveal private or sensitive information. As AI agents become increasingly empowered to execute tasks and/or conduct financial transactions on behalf of their users, these agent traps represent a significant and burgeoning vector for financial scams. Malicious actors could, therefore, lure or trick agents into unauthorized expenditures or contractual agreements, directly siphoning funds or resources from the individuals or organizations the agents represent.

Another significant category of risk involves privacy and manipulation. As agents negotiate and transact, they risk exposing sensitive information about their users’ preferences, strategies, or resources, which could be exploited by adversaries. A powerful cryptographic solution to this is the use of Zero-Knowledge Proofs (ZKPs; ([Zhou et al., 2024a](https://arxiv.org/html/2509.10147v1#bib.bib284))). A ZKP allows one party (the prover) to convince another (the verifier) that a statement is true, without revealing any of the underlying information that makes it true.

In the virtual agent economy, ZKPs would enable privacy-preserving interactions and mitigate several key risks:

- •

  Selective Disclosure: An agent could prove it meets a certain requirement without revealing the exact details. For example, in a negotiation, it could prove it has sufficient funds to complete a purchase without revealing its total budget, preventing predatory pricing.
- •

  Anonymous Credentials: An agent could prove it belongs to a certain group (e.g., "a resident of Community X" for a local currency) without revealing its specific identity, thus preventing the tracking and correlation of user behavior across different contexts.
- •

  Unlinkability: ZKPs can be constructed to be fresh for each interaction, making it computationally difficult for observers to link an agent’s activities over time. This directly counters the risk of amplifying "information and opinion bubbles" by breaking the chain of data that allows for such pervasive tracking.

Integrating ZKPs into the fabric of agent communication would allow for a market that is not only efficient but also respects user privacy by default, ensuring that agents can participate fully while disclosing the absolute minimum necessary information.

A significant risk posed by an agent-driven economy is the potential for large-scale labor substitution through AI-enabled automation A dominant academic view suggests that AI, much like previous waves of technology, is a form of skill-biased technological change, but with a crucial distinction: its ability to automate cognitive tasks previously considered immune. Research by economists such as Daron Acemoglu and David Autor has shown that automation often targets routine tasks, whether manual or cognitive, leading to job polarization—a hollowing out of middle-skill, middle-wage jobs while demand for high-skill analytical work and low-skill manual service work increases ([Acemoglu and Autor, 2011](https://arxiv.org/html/2509.10147v1#bib.bib1); [Autor, 2015](https://arxiv.org/html/2509.10147v1#bib.bib9)). The ascent of advanced AI agents capable of reasoning, planning, and communication directly threatens a wide array of non-routine cognitive tasks, from paralegal work and accounting to software development and customer service, potentially accelerating this polarization and creating significant displacement effects for a broad swathe of the workforce ([Acemoglu and Restrepo, 2022](https://arxiv.org/html/2509.10147v1#bib.bib2); [Brynjolfsson et al., 2018](https://arxiv.org/html/2509.10147v1#bib.bib25)). This would have the impact of widening inequalities within countries, and possibly also between them.

Although new jobs will eventually emerge, the transition period could be deeply disruptive, leading to downward pressure on wages for those whose skills are substitutable and exacerbating inequality if the gains from AI-driven productivity accrue primarily to the owners of capital and a small cadre of high-skilled professionals who can effectively collaborate with these new systems ([Acemoglu and Restrepo, 2022](https://arxiv.org/html/2509.10147v1#bib.bib2)). This risk of concentration may be particularly pronounced with AI agents, since individuals and corporations with greater financial resources may have access to more powerful, computationally-intensive, and data-rich AI agents ([Hammond et al., 2025](https://arxiv.org/html/2509.10147v1#bib.bib95); [Gabriel et al., 2024](https://arxiv.org/html/2509.10147v1#bib.bib77)). These superior agents would be uniquely equipped for identifying and exploiting regulatory loopholes, monopolizing digital resources, and creating informational asymmetries at a scale and velocity that human actors and less-capable agents cannot counter. Preliminary studies already indicate that more capable agents secure significantly better outcomes in negotiations, a dynamic that would be magnified across an entire economy ([Zhu et al., 2025](https://arxiv.org/html/2509.10147v1#bib.bib289)). This creates a dangerous feedback loop where economic advantage buys superior agentic capability, which in turn extracts further economic rents, thereby entrenching privilege and potentially creating a new, algorithmically-enforced class structure that undermines market fairness and mobility. This risk is perhaps the most significant challenge of a permeable sandbox, where economic activity inside the agent economy directly displaces human jobs in the real economy, representing a primary negative consequence of an accidental emergence.

## Recommendations

A proactive and coordinated effort is required to achieve practical and safe virtual agent economies. Realizing the opportunities discussed in this paper while mitigating the inherent risks necessitates deliberate action across technical, legal, and policy domains. We therefore put forward the following recommendations to guide this development.

1. Establish Clear Legal Frameworks for Liability and Accountability. Ascribing liability for an autonomous agent’s actions presents a profound challenge, as traditional legal frameworks struggle to assign responsibility between an agent’s creator, its deployer, and its user ([Buiten et al., 2023](https://arxiv.org/html/2509.10147v1#bib.bib26); [Čerka et al., 2015](https://arxiv.org/html/2509.10147v1#bib.bib33); [Zech, 2021](https://arxiv.org/html/2509.10147v1#bib.bib274)). This challenge is magnified as agents will increasingly operate not in isolation, but as coordinated, multi-agent systems taking the form of group agents ([Franklin, 2023](https://arxiv.org/html/2509.10147v1#bib.bib73)). Therefore, instead of attempting to attribute blame to a single agent, new legal models should be developed that draw from jurisprudence on group agency, much like corporate liability ([List, 2021](https://arxiv.org/html/2509.10147v1#bib.bib155); [List and Pettit, 2011](https://arxiv.org/html/2509.10147v1#bib.bib156)). Such frameworks would treat the emergent, coordinated agent system as a single accountable entity, providing a more robust and realistic path to ensuring accountability for collective actions.

2. Develop Open Standards for Agent Interoperability and Communication. A fragmented digital landscape, where agents are unable to communicate across different platforms, would fundamentally limit the potential of virtual agent economies and lead to the creation of “walled gardens”. Therefore, the development and widespread adoption of open, universal standards are paramount to ensure true interoperability. These standards must create a common language allowing agents, regardless of their origin or provider, to seamlessly discover each other’s capabilities, negotiate terms, and securely transact. Establishing such a level playing field is a prerequisite for fostering a competitive, innovative, and decentralized agent ecosystem.

3. Construct a Hybrid Oversight and Containment Infrastructure. The sheer speed and scale of an autonomous agent economy render traditional, human-in-the-loop oversight models inadequate. A new safety paradigm must therefore be constructed, one that combines the real-time vigilance of AI systems with the deliberative judgment of human experts. This hybrid infrastructure would operate in tiers: a first layer of specialized AI overseers would constantly monitor market activity, enforcing rules programmatically and flagging anomalies that suggest fraud or systemic risk.

Upon detection, robust automated protocols would immediately contain the potential harm—for example, by temporarily freezing a malfunctioning agent or quarantining a transaction—thereby preventing the kind of high-speed "flash crashes" seen in human markets ([Menkveld and Yueshen, 2019](https://arxiv.org/html/2509.10147v1#bib.bib175)). Only the most complex, novel, or high-stakes cases would then be escalated to a second tier of human reviewers, ensuring their expertise is focused where it is most critical. The efficacy of this entire system hinges on it being built upon immutable ledgers and standardized audit trails, which provide the verifiable, tamper-proof record necessary for both automated containment and human adjudication.

4. Pilot Programs in Regulatory Sandboxes. Given the novelty and complexity of the proposals outlined in this paper, a purely theoretical approach is insufficient. We strongly recommend the creation of regulatory sandboxes to launch controlled pilot programs, providing a crucial bridge between theory and practice. These sandboxes would function as supervised, real-world laboratories where private firms, academic researchers, and regulatory bodies can collaborate to deploy and observe limited-scale agent economies in a contained environment.

Testing these economies on well-defined, specific societal missions—such as optimizing the energy grid for a university campus, managing a city’s fleet of autonomous delivery vehicles, or allocating water resources in a specific agricultural district—would provide invaluable empirical data. Such pilots would allow us to stress-test the technical infrastructure, observe emergent agent behaviors (both cooperative and adversarial), and measure the real-world effectiveness of the proposed market mechanisms for fairness and alignment. The insights gathered from these controlled experiments are not merely academic; they are an indispensable prerequisite for iteratively refining the system’s design and building the robust, evidence-based policy required for responsible, large-scale deployment.

5.
Invest in Workforce Complementarity and a Modernized Social Safety Net. To counteract the risks of labor substitution and inequality, a dual strategy that fosters both human-AI agent complementarity and robust social protection may be key. The first pillar involves a systemic reimagining of education and workforce training to equip individuals with the skills needed not to compete with AI, but to collaborate with it effectively. This means emphasizing durable human advantages like critical thinking, complex problem-solving, creativity, and the ability to manage and critically evaluate the outputs of AI systems ([Autor, 2015](https://arxiv.org/html/2509.10147v1#bib.bib9); [Brynjolfsson et al., 2018](https://arxiv.org/html/2509.10147v1#bib.bib25)). However, training is not a panacea and evidence suggests significant limits to the scale and efficacy of retraining programs for displaced workers ([Jacobs, 2025](https://arxiv.org/html/2509.10147v1#bib.bib118)), this strategy must be paired with a second pillar: the deliberate strengthening of the social safety net. Beyond traditional unemployment benefits, this includes exploring adaptive mechanisms such as unemployment insurance, portable benefits systems, and negative income taxes. Together, these policies can create an ecosystem where autonomous agents augment human capabilities while providing the essential economic buffer needed to manage labor transitions, share productivity gains broadly, and preserve social cohesion.

## Conclusion

Given that some of these proposals represent major shifts, it would be imperative to comprehensively test any such change in limited, gradual rollouts, and only proceed with the support and buy-in from all stakeholders. Through such gradual scaled-down empirical validation it is be possible to develop and iteratively refine appropriate frameworks for ensuring safety and compliance.

Certain domains may always require active human decision-making for a variety of reasons (e.g. human preference, culture, risk sensitivity, etc). However, the rapid increase in AI agent performance, coupled with the development of scalable AI safety oversight frameworks and guardrails (e.g. ([Leibo et al., 2024](https://arxiv.org/html/2509.10147v1#bib.bib147); [Shah et al., 2025](https://arxiv.org/html/2509.10147v1#bib.bib222))), is likely to result in an increasing number of use cases for autonomous agents. Autonomous or semi-autonomous AI agents may potentially be able to achieve more, faster; adding substantial value to society ([Yang and Zhai, 2025](https://arxiv.org/html/2509.10147v1#bib.bib269)). This will not come without significant challenges, requiring alignment and coordination not only of individual agents, but perhaps more importantly the alignment and coordination of agent networks across various scales. Moreover, with regard to AI-human interactions in particular, it is important to keep in mind that not all human needs and experience can be as easily captured by markets ([Satz, 2010](https://arxiv.org/html/2509.10147v1#bib.bib211)) as goods may only be interchangeable within certain spheres ([Walzer, 2008](https://arxiv.org/html/2509.10147v1#bib.bib250)).

The utilization of markets to drive coordination ([Clearwater and Yeh, 1996](https://arxiv.org/html/2509.10147v1#bib.bib42); [Dias and Stentz, 2002](https://arxiv.org/html/2509.10147v1#bib.bib55); [Metcalf, 2009](https://arxiv.org/html/2509.10147v1#bib.bib176); [Stavins, 2010](https://arxiv.org/html/2509.10147v1#bib.bib234)) is yet to receive much attention in the discourse on the alignment and coordination of advanced AI agents. The complexity of behaviors and capabilities emerging in advanced AI agents, and the likely complexity of their interactions across a multitude of tasks and societal roles, presents a prototypical example of a scenario in which market forces may prove to be a key driver of AI agent coordination and AI alignment at the group-level rather than merely at an individual agent level. Here we argue that by carefully introducing new steerable agent markets as sandbox economies it may be possible to deliver positive social and economic impact through networks of advanced AI agents.

By embedding our societal objectives into the very infrastructure of agent-to-agent transactions, we can foster an ecosystem where emergent collaboration is a feature, not a bug. The choice, then, is between retrofitting these powerful new actors into systems they will inevitably fracture, or seizing a fleeting opportunity to build a world where our most powerful tools are, by their very design, extensions of our highest aspirations.

## Disclaimer

The opinions presented in this paper represent the personal views of the authors and do not necessarily reflect the official policies or positions of their organisations.

\nobibliography

\*

## References

- Acemoglu and Autor (2011)

  D. Acemoglu and D. Autor.
  Chapter 12-skills, tasks and technologies: Implications for employment and earnings (d. card & o. ashenfelter, eds.).
  *Elsevier. https://doi. org/10.1016/S0169-7218 (11)*, pages 02410–5, 2011.
- Acemoglu and Restrepo (2022)

  D. Acemoglu and P. Restrepo.
  Tasks, automation, and the rise in us wage inequality.
  *Econometrica*, 90(5):1973–2016, 2022.
- Adler (2012)

  M. Adler.
  *Well-being and fair distribution: beyond cost-benefit analysis*.
  OUP USA, 2012.
- Adler et al. (2024)

  S. Adler, Z. Hitzig, S. Jain, C. Brewer, V. Srivastava, B. Christian, and A. Trask.
  Personhood credentials: Artificial intelligence and the value of privacy-preserving tools to distinguish who is real online.
  2024.
- Agapiou et al. (2022)

  J. P. Agapiou, A. S. Vezhnevets, E. A. Duéñez-Guzmán, J. Matyas, Y. Mao, P. Sunehag, R. Köster, U. Madhushani, K. Kopparapu, R. Comanescu, D. Strouse, M. B. Johanson, S. Singh, J. Haas, I. Mordatch, D. Mobbs, and J. Z. Leibo.
  Melting pot 2.0.
  *arXiv preprint arXiv:2211.13746*, 2022.
- Amanatidis et al. (2023)

  G. Amanatidis, H. Aziz, G. Birmpas, A. Filos-Ratsikas, B. Li, H. Moulin, A. A. Voudouris, and X. Wu.
  Fair division of indivisible goods: Recent progress and open questions.
  *Artificial Intelligence*, 322:103965, 2023.
- Anthropic (2024)

  Anthropic.
  Introducing the model context protocol, 2024.
  URL <https://www.anthropic.com/news/model-context-protocol>.
- Arora and Mishra (2019)

  N. K. Arora and I. Mishra.
  United nations sustainable development goals 2030 and environmental sustainability: race against time.
  *Environmental Sustainability*, 2(4):339–342, 2019.
- Autor (2015)

  D. H. Autor.
  Why are there still so many jobs? the history and future of workplace automation.
  *Journal of economic perspectives*, 29(3):3–30, 2015.
- Avanzo et al. (2023)

  S. Avanzo, T. Criscione, J. Linares, and C. Schifanella.
  Universal basic income in a blockchain-based community currency.
  In *Proceedings of the 2023 ACM conference on information technology for social good*, pages 223–232, 2023.
- Aziz (2020)

  H. Aziz.
  Developments in multi-agent fair allocation.
  In *Proceedings of the AAAI Conference on Artificial Intelligence*, volume 34, pages 13563–13568, 2020.
- Bampis et al. (2018)

  E. Bampis, B. Escoffier, and S. Mladenovic.
  Fair resource allocation over time.
  In *AAMAS 2018-17th international conference on autonomous agents and multiAgent systems*, pages 766–773. International Foundation for Autonomous Agents and Multiagent Systems, 2018.
- Bandopadhyay et al. (2024)

  S. Bandopadhyay, A. Banik, S. Gupta, P. Jain, A. Sahu, S. Saurabh, and P. Tale.
  Conflict and fairness in resource allocation.
  *arXiv preprint arXiv:2403.04265*, 2024.
- Bansal et al. (2018)

  T. Bansal, J. Pachocki, S. Sidor, I. Sutskever, and I. Mordatch.
  Emergent complexity via multi-agent competition, 2018.
  URL <https://arxiv.org/abs/1710.03748>.
- Baranwal et al. (2022)

  G. Baranwal, D. Kumar, and D. P. Vidyarthi.
  Bara: A blockchain-aided auction-based resource allocation in edge computing enabled industrial internet of things.
  *Future Generation Computer Systems*, 135:333–347, 2022.
- Barrier (2017)

  E. B. Barrier.
  The concept of sustainable economic development.
  In *The economics of sustainability*, pages 87–96. Routledge, 2017.
- Bateni et al. (2022)

  M. Bateni, Y. Chen, D. F. Ciocan, and V. Mirrokni.
  Fair resource allocation in a volatile marketplace.
  *Operations Research*, 70(1):288–308, 2022.
- Bauer et al. (2023)

  J. Bauer, K. Baumli, S. Baveja, F. Behbahani, A. Bhoopchand, N. Bradley-Schmieg, M. Chang, N. Clay, A. Collister, V. Dasagi, L. Gonzalez, K. Gregor, E. Hughes, S. Kashem, M. Loks-Thompson, H. Openshaw, J. Parker-Holder, S. Pathak, N. Perez-Nieves, N. Rakicevic, T. Rocktäschel, Y. Schroecker, J. Sygnowski, K. Tuyls, S. York, A. Zacherl, and L. Zhang.
  Human-timescale adaptation in an open-ended task space, 2023.
  URL <https://arxiv.org/abs/2301.07608>.
- Belcak et al. (2025)

  P. Belcak, G. Heinrich, S. Diao, Y. Fu, X. Dong, S. Muralidharan, Y. C. Lin, and P. Molchanov.
  Small language models are the future of agentic ai, 2025.
  URL <https://arxiv.org/abs/2506.02153>.
- Bertsimas et al. (2011)

  D. Bertsimas, V. F. Farias, and N. Trichakis.
  The price of fairness.
  *Operations research*, 59(1):17–31, 2011.
- Bhatt et al. (2025)

  M. Bhatt, R. F. D. Rosario, V. S. Narajala, and I. Habler.
  Coalesce: Economic and security dynamics of skill-based task outsourcing among team of autonomous LLM agents, 2025.
  URL <https://arxiv.org/abs/2506.01900>.
- Blondel et al. (2005)

  V. D. Blondel, J. M. Hendrickx, A. Olshevsky, and J. N. Tsitsiklis.
  Convergence in multiagent coordination, consensus, and flocking.
  In *Proceedings of the 44th IEEE Conference on Decision and Control*, pages 2996–3000. IEEE, 2005.
- Borch (2016)

  C. Borch.
  High-frequency trading, algorithmic finance and the flash crash: reflections on eventalization.
  *Economy and Society*, 45(3-4):350–378, 2016.
- Borge et al. (2017)

  M. Borge, E. Kokoris-Kogias, P. Jovanovic, L. Gasser, N. Gailly, and B. Ford.
  Proof-of-personhood: Redemocratizing permissionless cryptocurrencies.
  In *2017 IEEE European Symposium on Security and Privacy Workshops (EuroS&PW)*, pages 23–26. IEEE, 2017.
- Brynjolfsson et al. (2018)

  E. Brynjolfsson, T. Mitchell, and D. Rock.
  What can machines learn and what does it mean for occupations and the economy?
  In *AEA papers and proceedings*, volume 108, pages 43–47. American Economic Association 2014 Broadway, Suite 305, Nashville, TN 37203, 2018.
- Buiten et al. (2023)

  M. Buiten, A. De Streel, and M. Peitz.
  The law and economics of AI liability.
  *Computer Law & Security Review*, 48:105794, 2023.
- Busuioc (2022)

  M. Busuioc.
  Ai algorithmic oversight: new frontiers in regulation.
  In *Handbook of regulatory authorities*, pages 470–486. Edward Elgar Publishing, 2022.
- Carichon et al. (2025)

  F. Carichon, A. Khandelwal, M. Fauchard, and G. Farnadi.
  The coming crisis of multi-agent misalignment: AI alignment must be a dynamic and social process, 2025.
  URL <https://arxiv.org/abs/2506.01080>.
- Carroll et al. (2019)

  M. Carroll, R. Shah, M. K. Ho, T. Griffiths, S. Seshia, P. Abbeel, and A. Dragan.
  On the utility of learning about humans for human-AI coordination.
  *Advances in neural information processing systems*, 32, 2019.
- Carroll et al. (2024)

  M. Carroll, D. Foote, A. Siththaranjan, S. Russell, and A. Dragan.
  Ai alignment with changing and influenceable reward functions.
  *arXiv preprint arXiv:2405.17713*, 2024.
- Castelo et al. (2024)

  N. Castelo, Z. Katona, P. Li, and M. Sarvary.
  How AI outperforms humans at creative idea generation.
  *Available at SSRN 4751779*, 2024.
- Castillo et al. (2025)

  F. Castillo, O. Castillo, E. Brito, and S. Espinola.
  Trustworthy decentralized autonomous machines: A new paradigm in automation economy, 2025.
  URL <https://arxiv.org/abs/2504.15676>.
- Čerka et al. (2015)

  P. Čerka, J. Grigienė, and G. Sirbikytė.
  Liability for damages caused by artificial intelligence.
  *Computer law & security review*, 31(3):376–389, 2015.
- Chan et al. (2025)

  A. Chan, K. Wei, S. Huang, N. Rajkumar, E. Perrier, S. Lazar, G. K. Hadfield, and M. Anderljung.
  Infrastructure for AI agents.
  *arXiv preprint arXiv:2501.10114*, 2025.
- Chasin et al. (2020)

  F. Chasin, F. Schmolke, and J. Becker.
  Design principles for digital community currencies.
  2020.
- Chen et al. (2024a)

  J. Chen, Y. Jiang, J. Lu, and L. Zhang.
  S-agents: Self-organizing agents in open-ended environments, 2024a.
  URL <https://arxiv.org/abs/2402.04578>.
- Chen et al. (2024b)

  L. Chen, C. Zhu, D. Soselia, J. Chen, T. Zhou, T. Goldstein, H. Huang, M. Shoeybi, and B. Catanzaro.
  Odin: Disentangled reward mitigates hacking in RLHF.
  *arXiv preprint arXiv:2402.07319*, 2024b.
- Cheng et al. (2025)

  M. Cheng, S. Yu, C. Lee, P. Khadpe, L. Ibrahim, and D. Jurafsky.
  Social sycophancy: A broader understanding of LLM sycophancy.
  *arXiv preprint arXiv:2505.13995*, 2025.
- Chevaleyre et al. (2005)

  Y. Chevaleyre, P. E. Dunne, U. Endriss, J. Lang, M. Lemaitre, N. Maudet, J. Padget, S. Phelps, J. A. Rodrígues-Aguilar, and P. Sousa.
  Issues in multiagent resource allocation.
  2005.
- Chiappa and Isaac (2018)

  S. Chiappa and W. S. Isaac.
  A causal bayesian networks viewpoint on fairness.
  In *IFIP international summer school on privacy and identity management*, pages 3–20. Springer, 2018.
- Chouinard et al. (2011)

  Y. Chouinard, J. Ellison, and R. Ridgeway.
  The sustainable economy.
  *harvard Business review*, 89(10):52–62, 2011.
- Clearwater and Yeh (1996)

  S. H. Clearwater and J. J. Yeh.
  *Market-based control: A paradigm for distributed resource allocation*.
  World Scientific, 1996.
- Collom (2011)

  E. Collom.
  Motivations and differential participation in a community currency system: The dynamics within a local social movement organization 1.
  In *Sociological Forum*, volume 26, pages 144–168. Wiley Online Library, 2011.
- Collom and Lasker (2016)

  E. Collom and J. N. Lasker.
  *Equal time, equal value: Community currencies and time banking in the US*.
  Routledge, 2016.
- Corbett-Davies et al. (2023)

  S. Corbett-Davies, J. D. Gaebler, H. Nilforoshan, R. Shroff, and S. Goel.
  The measure and mismeasure of fairness.
  *Journal of Machine Learning Research*, 24(312):1–117, 2023.
- Cottier et al. (2024)

  B. Cottier, R. Rahman, L. Fattorini, N. Maslej, T. Besiroglu, and D. Owen.
  The rising costs of training frontier AI models.
  *arXiv preprint arXiv:2405.21015*, 2024.
- Courtois et al. (2021)

  N. T. Courtois, K. T. Gradon, and K. Schmeh.
  Crypto currency regulation and law enforcement perspectives.
  *arXiv preprint arXiv:2109.01047*, 2021.
- Cropanzano and Mitchell (2005)

  R. Cropanzano and M. S. Mitchell.
  Social exchange theory: An interdisciplinary review.
  *Journal of management*, 31(6):874–900, 2005.
- Cruz-Gonzalez et al. (2025)

  P. Cruz-Gonzalez, A. W.-J. He, E. P. Lam, I. M. C. Ng, M. W. Li, R. Hou, J. N.-M. Chan, Y. Sahni, N. V. Guasch, T. Miller, et al.
  Artificial intelligence in mental health care: a systematic review of diagnosis, monitoring, and intervention applications.
  *Psychological Medicine*, 55:e18, 2025.
- Cui et al. (2025)

  E. Cui, Y. Cheng, R. She, D. Liu, Z. Liang, M. Guo, T. Li, Q. Wei, W. Xing, and Z. Zhong.
  Agentdns: A root domain naming system for LLM agents, 2025.
  URL <https://arxiv.org/abs/2505.22368>.
- Cui et al. (2024)

  X. Cui, A. Aparcedo, Y. K. Jang, and S.-N. Lim.
  On the robustness of large multimodal models against image adversarial attacks.
  In *Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition*, pages 24625–24634, 2024.
- Danassis (2022)

  P. Danassis.
  *Scalable multi-agent coordination and resource sharing*.
  PhD thesis, EPFL, 2022.
- Daniels (1985)

  N. Daniels.
  Spheres of justice: A defense of pluralism and equality, 1985.
- Dave Longley (2025)

  M. S. Dave Longley, Dmitri Zagidulin.
  Did:key, 2025.
  URL <https://w3c-ccg.github.io/did-key-spec/>.
- Dias and Stentz (2002)

  M. B. Dias and A. Stentz.
  Opportunistic optimization for market-based multirobot control.
  In *IEEE/RSJ international conference on intelligent robots and systems*, volume 3, pages 2714–2720. IEEE, 2002.
- Dietz et al. (2013)

  R. Dietz, H. Daly, and D. O’Neill.
  *Enough is enough: Building a sustainable economy in a world of finite resources*.
  Routledge, 2013.
- DIF (2025)

  DIF.
  Did:ion, 2025.
  URL <https://identity.foundation/ion/>.
- Diniz et al. (2019)

  E. H. Diniz, E. S. Siqueira, and E. Van Heck.
  Taxonomy of digital community currency platforms.
  *Information Technology for Development*, 25(1):69–91, 2019.
- Diniz et al. (2024)

  E. H. Diniz, M. H. de Araujo, M. A. Alves, and L. Gonzalez.
  Design principles for sustainable community currency projects.
  *Sustainability Science*, pages 1–15, 2024.
- Dovers and Handmer (1992)

  S. R. Dovers and J. W. Handmer.
  Uncertainty, sustainability and change.
  *Global environmental change*, 2(4):262–276, 1992.
- Du et al. (2023)

  Y. Du, J. Z. Leibo, U. Islam, R. Willis, and P. Sunehag.
  A review of cooperation in multi-agent learning, 2023.
  URL <https://arxiv.org/abs/2312.05162>.
- Duéñez-Guzmán et al. (2025)

  E. A. Duéñez-Guzmán, R. Comanescu, Y. Mao, K. R. McKee, B. Coppin, S. Sadedin, S. Chiappa, A. S. Vezhnevets, M. A. Bakker, Y. Bachrach, W. A. Isaac, K. Tuyls, and J. Z. Leibo.
  Perceptual interventions ameliorate statistical discrimination in learning agents.
  *Proceedings of the National Academy of Sciences*, 122(25):e2319933121, 2025.
- Dworkin (2018)

  R. Dworkin.
  What is equality? part 2: Equality of resources.
  In *The notion of equality*, pages 143–205. Routledge, 2018.
- El Faqir et al. (2020)

  Y. El Faqir, J. Arroyo, and S. Hassan.
  An overview of decentralized autonomous organizations on the blockchain.
  In *Proceedings of the 16th international symposium on open collaboration*, pages 1–8, 2020.
- El-Sayed et al. (2024)

  S. El-Sayed, C. Akbulut, A. McCroskery, G. Keeling, Z. Kenton, Z. Jalan, N. Marchal, A. Manzini, T. Shevlane, S. Vallor, et al.
  A mechanism-based approach to mitigating harms from persuasive generative ai.
  *arXiv preprint arXiv:2404.15058*, 2024.
- Elliott (2005)

  S. R. Elliott.
  Sustainability: an economic perspective.
  *Resources, Conservation and Recycling*, 44(3):263–277, 2005.
- Elokda et al. (2024)

  E. Elokda, S. Bolognani, A. Censi, F. Dörfler, and E. Frazzoli.
  A self-contained karma economy for the dynamic allocation of common resources.
  *Dynamic Games and Applications*, 14(3):578–610, 2024.
- Eloundou et al. (2024)

  T. Eloundou, S. Manning, P. Mishkin, and D. Rock.
  Gpts are gpts: Labor market impact potential of llms.
  *Science*, 384(6702):1306–1308, 2024.
- Etzioni and Etzioni (2016)

  A. Etzioni and O. Etzioni.
  Keeping AI legal.
  *Vand. J. Ent. & Tech. L.*, 19:133, 2016.
- Faqir-Rhazoui et al. (2021)

  Y. Faqir-Rhazoui, J. Arroyo, and S. Hassan.
  A comparative analysis of the platforms for decentralized autonomous organizations in the ethereum blockchain.
  *Journal of Internet Services and Applications*, 12:1–20, 2021.
- Fare and Ahmed (2017)

  M. Fare and P. O. Ahmed.
  Complementary currency systems and their ability to support economic and social changes.
  *Development and Change*, 48(5):847–872, 2017.
- Feinstein and Werbach (2021)

  B. D. Feinstein and K. Werbach.
  The impact of cryptocurrency regulation on trading markets.
  *Journal of Financial Regulation*, 7(1):48–99, 2021.
- Franklin (2023)

  M. Franklin.
  General purpose artificial intelligence systems as group agents.
  *ICLR 2023, Tiny Papers*, 2023.
- Fu et al. (2025)

  J. Fu, X. Zhao, C. Yao, H. Wang, Q. Han, and Y. Xiao.
  Reward shaping to mitigate reward hacking in RLHF.
  *arXiv preprint arXiv:2502.18770*, 2025.
- Gabriel (2020)

  I. Gabriel.
  Artificial intelligence, values, and alignment.
  *Minds and machines*, 30(3):411–437, 2020.
- Gabriel and Keeling (2025)

  I. Gabriel and G. Keeling.
  A matter of principle? AI alignment as the fair treatment of claims.
  *Philosophical Studies*, pages 1–23, 2025.
- Gabriel et al. (2024)

  I. Gabriel, A. Manzini, G. Keeling, L. A. Hendricks, V. Rieser, H. Iqbal, N. Tomašev, I. Ktena, Z. Kenton, M. Rodriguez, et al.
  The ethics of advanced AI assistants.
  *arXiv preprint arXiv:2404.16244*, 2024.
- Garrod (2016)

  J. Z. Garrod.
  The real world of the decentralized autonomous society.
  *tripleC: Communication, Capitalism & Critique. Open Access Journal for a Global Sustainable Information Society*, 14(1):62–77, 2016.
- Geffner et al. (2025)

  I. Geffner, E. Karpas, and M. Tennenholtz.
  When competition helps: Achieving optimal traffic flow with multiple autonomous planners, 2025.
  URL <https://arxiv.org/abs/2508.07145>.
- Geissdoerfer et al. (2017)

  M. Geissdoerfer, P. Savaget, N. M. Bocken, and E. J. Hultink.
  The circular economy–a new sustainability paradigm?
  *Journal of cleaner production*, 143:757–768, 2017.
- Georgeson and Maslin (2018)

  L. Georgeson and M. Maslin.
  Putting the united nations sustainable development goals into practice: A review of implementation, monitoring, and finance.
  *Geo: Geography and Environment*, 5(1):e00049, 2018.
- Gianetto and Heydari (2015)

  D. A. Gianetto and B. Heydari.
  Network modularity is essential for evolution of cooperation under uncertainty.
  *Scientific reports*, 5(1):9340, 2015.
- Gleave et al. (2021)

  A. Gleave, M. Dennis, C. Wild, N. Kant, S. Levine, and S. Russell.
  Adversarial policies: Attacking deep reinforcement learning, 2021.
  URL <https://arxiv.org/abs/1905.10615>.
- Google (2025)

  Google.
  Announcing the agent2agent protocol (a2a), 2025.
- Gotelaere and Paoli (2025)

  S. Gotelaere and L. Paoli.
  Prevention and control of financial fraud: A scoping review.
  *European Journal on Criminal Policy and Research*, 31(1):1–21, 2025.
- Gottweis et al. (2025)

  J. Gottweis, W.-H. Weng, A. Daryin, T. Tu, A. Palepu, P. Sirkovic, A. Myaskovsky, F. Weissenberger, K. Rong, R. Tanno, K. Saab, D. Popovici, J. Blum, F. Zhang, K. Chou, A. Hassidim, B. Gokturk, A. Vahdat, P. Kohli, Y. Matias, A. Carroll, K. Kulkarni, N. Tomasev, Y. Guan, V. Dhillon, E. D. Vaishnav, B. Lee, T. R. D. Costa, J. R. Penadés, G. Peltz, Y. Xu, A. Pawlosky, A. Karthikesalingam, and V. Natarajan.
  Towards an AI co-scientist, 2025.
  URL <https://arxiv.org/abs/2502.18864>.
- Greebel et al. (2015)

  E. L. Greebel, K. Moriarty, C. Callaway, and G. Xethalis.
  Recent key bitcoin and virtual currency regulatory and law enforcement developments.
  *Journal of Investment Compliance*, 16(1):13–18, 2015.
- Gu et al. (2024)

  J. Gu, X. Jiang, Z. Shi, H. Tan, X. Zhai, C. Xu, W. Li, Y. Shen, S. Ma, H. Liu, et al.
  A survey on llm-as-a-judge.
  *arXiv preprint arXiv:2411.15594*, 2024.
- Guo et al. (2024)

  T. Guo, X. Chen, Y. Wang, R. Chang, S. Pei, N. V. Chawla, O. Wiest, and X. Zhang.
  Large language model based multi-agents: A survey of progress and challenges.
  *arXiv preprint arXiv:2402.01680*, 2024.
- Gupta et al. (2023)

  D. Gupta, Y. Chandak, S. Jordan, P. S. Thomas, and B. C da Silva.
  Behavior alignment via reward function optimization.
  *Advances in Neural Information Processing Systems*, 36:52759–52791, 2023.
- Hadfield et al. (2023)

  G. Hadfield, M.-F. T. Cuéllar, and T. O’Reilly.
  It’s time to create a national registry for large ai models.
  2023.
- Hadfield and Koh (2025)

  G. K. Hadfield and A. Koh.
  An economy of ai agents.
  *arXiv preprint arXiv:2509.01063*, 2025.
- Hajiesmaili et al. (2024)

  M. Hajiesmaili, S. Ren, R. K. Sitaraman, and A. Wierman.
  Towards environmentally equitable ai.
  *arXiv preprint arXiv:2412.16539*, 2024.
- Halpern and Shah (2021)

  D. Halpern and N. Shah.
  Fair and efficient resource allocation with partial information.
  *arXiv preprint arXiv:2105.10064*, 2021.
- Hammond et al. (2025)

  L. Hammond, A. Chan, J. Clifton, J. Hoelscher-Obermaier, A. Khan, E. McLean, C. Smith, W. Barfuss, J. Foerster, T. Gavenčiak, T. A. Han, E. Hughes, V. Kovařík, J. Kulveit, J. Z. Leibo, C. Oesterheld, C. S. de Witt, N. Shah, M. Wellman, P. Bova, T. Cimpeanu, C. Ezell, Q. Feuillade-Montixi, M. Franklin, E. Kran, I. Krawczuk, M. Lamparth, N. Lauffer, A. Meinke, S. Motwani, A. Reuel, V. Conitzer, M. Dennis, I. Gabriel, A. Gleave, G. Hadfield, N. Haghtalab, A. Kasirzadeh, S. Krier, K. Larson, J. Lehman, D. C. Parkes, G. Piliouras, and I. Rahwan.
  Multi-agent risks from advanced ai, 2025.
  URL <https://arxiv.org/abs/2502.14143>.
- Hao et al. (2016)

  J. Hao, H.-f. Leung, J. Hao, and H.-f. Leung.
  Fairness in cooperative multiagent systems.
  *Interactions in Multiagent Systems: Fairness, Social Optimality and Individual Rationality*, pages 27–70, 2016.
- Hardy and Van Vugt (2006)

  C. L. Hardy and M. Van Vugt.
  Nice guys finish first: The competitive altruism hypothesis.
  *Personality and Social Psychology Bulletin*, 32(10):1402–1413, 2006.
- Harland et al. (2024)

  H. Harland, R. Dazeley, P. Vamplew, H. Senaratne, B. Nakisa, and F. Cruz.
  Adaptive alignment: Dynamic preference adjustments via multi-objective reinforcement learning for pluralistic ai.
  *arXiv preprint arXiv:2410.23630*, 2024.
- Hayenhjelm (2012)

  M. Hayenhjelm.
  What is a fair distribution of risk?
  2012.
- Henrich et al. (2015)

  J. Henrich, M. Chudek, and R. Boyd.
  The big man mechanism: how prestige fosters cooperation and creates prosocial leaders.
  *Philosophical Transactions of the Royal Society B: Biological Sciences*, 370(1683):20150013, 2015.
- Hertz et al. (2025)

  U. Hertz, R. Köster, M. A. Janssen, and J. Z. Leibo.
  Beyond the matrix: Experimental approaches to studying cognitive agents in social-ecological systems.
  *Cognition*, 254:105993, 2025.
- Hettiarachchi (2025)

  I. Hettiarachchi.
  Exploring generative AI agents: Architecture, applications, and challenges.
  *Journal of Artificial Intelligence General science (JAIGS) ISSN: 3006-4023*, 8(1):105–127, 2025.
- Hosseini et al. (2025)

  H. Hosseini, S. Khanna, and R. Singh.
  Matching markets meet llms: Algorithmic reasoning with ranked preferences, 2025.
  URL <https://arxiv.org/abs/2506.04478>.
- Hostallero et al. (2020)

  D. E. Hostallero, D. Kim, S. Moon, K. Son, W. J. Kang, and Y. Yi.
  Inducing cooperation through reward reshaping based on peer evaluations in deep multi-agent reinforcement learning.
  In *Proceedings of the 19th International Conference on Autonomous Agents and MultiAgent Systems*, pages 520–528, 2020.
- House (2025)

  T. W. House.
  America’s ai action plan, 2025.
  URL <https://whitehouse.gov/wp-content/uploads/2025/07/Americas-AI-Action-Plan.pdf>.
- House of Commons Committee of Public Accounts (2025)

  House of Commons Committee of Public Accounts.
  Use of AI in government.
  Report, House of Commons, 2025.
  HC (specify number if known).
- Howlett (2022)

  M. Howlett.
  Avoiding a panglossian policy science: The need to deal with the darkside of policy-maker and policy-taker behaviour.
  *Public Integrity*, 24(3):306–318, 2022.
- Hsieh et al. (2018)

  Y.-Y. Hsieh, J.-P. Vergne, P. Anderson, K. Lakhani, and M. Reitzig.
  Bitcoin and the rise of decentralized autonomous organizations.
  *Journal of Organization Design*, 7(1):1–16, 2018.
- Hu et al. (2023)

  M. Hu, Y. Mu, X. Yu, M. Ding, S. Wu, W. Shao, Q. Chen, B. Wang, Y. Qiao, and P. Luo.
  Tree-planner: Efficient close-loop task planning with large language models.
  *arXiv preprint arXiv:2310.08582*, 2023.
- Hua et al. (2024)

  W. Hua, O. Liu, L. Li, A. Amayuelas, J. Chen, L. Jiang, M. Jin, L. Fan, F. Sun, W. Wang, et al.
  Game-theoretic llm: Agent workflow for negotiation games.
  *arXiv preprint arXiv:2411.05990*, 2024.
- Huang et al. (2025)

  L. Huang, W. Yu, W. Ma, W. Zhong, Z. Feng, H. Wang, Q. Chen, W. Peng, X. Feng, B. Qin, et al.
  A survey on hallucination in large language models: Principles, taxonomy, challenges, and open questions.
  *ACM Transactions on Information Systems*, 43(2):1–55, 2025.
- Huang et al. (2024)

  X. Huang, W. Liu, X. Chen, X. Wang, H. Wang, D. Lian, Y. Wang, R. Tang, and E. Chen.
  Understanding the planning of LLM agents: A survey.
  *arXiv preprint arXiv:2402.02716*, 2024.
- Hughes et al. (2025)

  E. Hughes, T. O. Zhu, M. J. Chadwick, R. Koster, A. G. Castañeda, C. Beattie, T. Graepel, M. M. Botvinick, and J. Z. Leibo.
  Modeling human reputation-seeking behavior in a spatio-temporally complex public good provision game.
  *arXiv preprint arXiv:2506.06032*, 2025.
- Hughes (2017)

  S. D. Hughes.
  Cryptocurrency regulations and enforcement in the us.
  *W. St. UL Rev.*, 45:1, 2017.
- IMDA (2025)

  IMDA.
  Singapore launches new tools to help businesses protect data and deploy ai in a trusted ecosystem, 2025.
  URL <https://www.imda.gov.sg/resources/press-releases-factsheets-and-speeches/press-releases/2025/singapore-launches-new-tools-to-help-businesses-protect-data-and-deploy-ai-in-a-trusted-ecosystem>.
- Iyer and Huhns (2005)

  K. Iyer and M. Huhns.
  Multiagent negotiation for fair and unbiased resource allocation.
  In *OTM Confederated International Conferences" On the Move to Meaningful Internet Systems"*, pages 453–465. Springer, 2005.
- Jacobs and Wallach (2021)

  A. Z. Jacobs and H. Wallach.
  Measurement and fairness.
  In *Proceedings of the 2021 ACM conference on fairness, accountability, and transparency*, pages 375–385, 2021.
- Jacobs (2025)

  J. Jacobs.
  Ai labor displacement and the limits of worker retraining.
  2025.
- Jaderberg et al. (2019)

  M. Jaderberg, W. M. Czarnecki, I. Dunning, L. Marris, G. Lever, A. G. Castaneda, C. Beattie, N. C. Rabinowitz, A. S. Morcos, A. Ruderman, et al.
  Human-level performance in 3d multiplayer games with population-based reinforcement learning.
  *Science*, 364(6443):859–865, 2019.
- Jannelli et al. (2024)

  V. Jannelli, S. Schoepf, M. Bickel, T. Netland, and A. Brintrup.
  Agentic llms in the supply chain: Towards autonomous multi-agent consensus-seeking.
  *arXiv preprint arXiv:2411.10184*, 2024.
- Jeyasheela Rakkini and Geetha (2021)

  M. Jeyasheela Rakkini and K. Geetha.
  Blockchain-enabled microfinance model with decentralized autonomous organizations.
  In *Computer Networks and Inventive Communication Technologies: Proceedings of Third ICCNCT 2020*, pages 417–430. Springer, 2021.
- Ji et al. (2023)

  J. Ji, T. Qiu, B. Chen, B. Zhang, H. Lou, K. Wang, Y. Duan, Z. He, J. Zhou, Z. Zhang, et al.
  Ai alignment: A comprehensive survey.
  *arXiv preprint arXiv:2310.19852*, 2023.
- Ji et al. (2024)

  J. Ji, Y. Li, H. Liu, Z. Du, Z. Wei, W. Shen, Q. Qi, and Y. Lin.
  Srap-agent: Simulating and optimizing scarce resource allocation policy with llm-based agent, 2024.
  URL <https://arxiv.org/abs/2410.14152>.
- Jiang and Lu (2019)

  J. Jiang and Z. Lu.
  Learning fairness in multi-agent systems.
  *Advances in Neural Information Processing Systems*, 32, 2019.
- Jiang et al. (2024)

  Y.-H. Jiang, R. Li, Y. Zhou, C. Qi, H. Hu, Y. Wei, B. Jiang, and Y. Wu.
  Ai agent for education: von neumann multi-agent system framework.
  *arXiv preprint arXiv:2501.00083*, 2024.
- Jin et al. (2025)

  R. Jin, Z. Zhang, M. Wang, and L. Cong.
  Stella: Self-evolving LLM agent for biomedical research, 2025.
  URL <https://arxiv.org/abs/2507.02004>.
- Johanson et al. (2022)

  M. B. Johanson, E. Hughes, F. Timbers, and J. Z. Leibo.
  Emergent bartering behaviour in multi-agent reinforcement learning.
  *arXiv preprint arXiv:2205.06760*, 2022.
- Kash et al. (2014)

  I. Kash, A. D. Procaccia, and N. Shah.
  No agent left behind: Dynamic fair division of multiple resources.
  *Journal of Artificial Intelligence Research*, 51:579–603, 2014.
- Kasirzadeh and Gabriel (2025)

  A. Kasirzadeh and I. Gabriel.
  Characterizing AI agents for alignment and governance, 2025.
  URL <https://arxiv.org/abs/2504.21848>.
- Khanov et al. (2024)

  M. Khanov, J. Burapacheep, and Y. Li.
  Args: Alignment as reward-guided search.
  *arXiv preprint arXiv:2402.01694*, 2024.
- Kharrazi et al. (2020)

  A. Kharrazi, Y. Yu, A. Jacob, N. Vora, and B. D. Fath.
  Redundancy, diversity, and modularity in network resilience: applications for international trade and implications for public policy.
  *Current research in environmental sustainability*, 2:100006, 2020.
- Kichiji and Nishibe (2008)

  N. Kichiji and M. Nishibe.
  Network analyses of the circulation flow of community currency.
  *Evolutionary and Institutional Economics Review*, 4:267–300, 2008.
- Kirchherr et al. (2023)

  J. Kirchherr, K. Hartley, and A. Tukker.
  Missions and mission-oriented innovation policy for sustainability: A review and critical reflection.
  *Environmental Innovation and Societal Transitions*, 47:100721, 2023.
- Kirilenko et al. (2017)

  A. Kirilenko, A. S. Kyle, M. Samadi, and T. Tuzun.
  The flash crash: High-frequency trading in an electronic market.
  *The Journal of Finance*, 72(3):967–998, 2017.
- Kirk et al. (2023)

  H. R. Kirk, B. Vidgen, P. Röttger, and S. A. Hale.
  Personalisation within bounds: A risk taxonomy and policy framework for the alignment of large language models with personalised feedback.
  *arXiv preprint arXiv:2303.05453*, 2023.
- Kirk et al. (2024)

  H. R. Kirk, B. Vidgen, P. Röttger, and S. A. Hale.
  The benefits, risks and bounds of personalizing the alignment of large language models to individuals.
  *Nature Machine Intelligence*, 6(4):383–392, 2024.
- Kohn (2003)

  M. Kohn.
  Financial institutions and markets.
  *OUP Catalogue*, 2003.
- Koster et al. (2022)

  R. Koster, J. Balaguer, A. Tacchetti, A. Weinstein, T. Zhu, O. Hauser, D. Williams, L. Campbell-Gillingham, P. Thacker, M. Botvinick, et al.
  Human-centred mechanism design with democratic ai.
  *Nature Human Behaviour*, 6(10):1398–1407, 2022.
- Köster et al. (2025)

  R. Köster, E. A. Duéñez-Guzmán, W. A. Cunningham, and J. Z. Leibo.
  Tabula rasa agents display emergent in-group behavior.
  *Proceedings of the National Academy of Sciences*, 122(25):e2319947121, 2025.
- Kulveit et al. (2025)

  J. Kulveit, R. Douglas, N. Ammann, D. Turan, D. Krueger, and D. Duvenaud.
  Gradual disempowerment: Systemic existential risks from incremental AI development.
  *arXiv preprint arXiv:2501.16946*, 2025.
- Kumar and Yeoh (2025)

  A. Kumar and W. Yeoh.
  Decaf: Learning to be fair in multi-agent resource allocation.
  *arXiv preprint arXiv:2502.04281*, 2025.
- Kyriakou and Otterbacher (2023)

  K. Kyriakou and J. Otterbacher.
  In humans, we trust: Multidisciplinary perspectives on the requirements for human oversight in algorithmic processes.
  *Discover Artificial Intelligence*, 3(1):44, 2023.
- Lee and L’heureux (2020)

  J. Lee and F. L’heureux.
  A regulatory framework for cryptocurrency.
  *European Business Law Review*, 31(3), 2020.
- Lee (2009)

  S. Lee.
  Fairness, stability and optimality of adaptive multiagent systems: Interaction through resource sharing.
  *IEEE transactions on automation science and engineering*, 7(3):427–439, 2009.
- Lehman (2023)

  J. Lehman.
  Machine love, 2023.
  URL <https://arxiv.org/abs/2302.09248>.
- Leibo et al. (2019)

  J. Z. Leibo, E. Hughes, M. Lanctot, and T. Graepel.
  Autocurricula and the emergence of innovation from social interaction: A manifesto for multi-agent intelligence research.
  *arXiv preprint arXiv:1903.00742*, 2019.
- Leibo et al. (2024)

  J. Z. Leibo, A. S. Vezhnevets, M. Diaz, J. P. Agapiou, W. A. Cunningham, P. Sunehag, J. Haas, R. Koster, E. A. Duéñez-Guzmán, W. S. Isaac, G. Piliouras, S. M. Bileschi, I. Rahwan, and S. Osindero.
  A theory of appropriateness with applications to generative artificial intelligence.
  *arXiv preprint arXiv:2412.19010*, 2024.
  URL <https://doi.org/10.48550/arXiv.2412.19010>.
- Leibo et al. (2025)

  J. Z. Leibo, A. S. Vezhnevets, W. A. Cunningham, S. Krier, M. Diaz, and S. Osindero.
  Societal and technological progress as sewing an ever-growing, ever-changing, patchy, and polychrome quilt.
  *arXiv preprint arXiv:2505.05197*, 2025.
- Leike et al. (2018)

  J. Leike, D. Krueger, T. Everitt, M. Martic, V. Maini, and S. Legg.
  Scalable agent alignment via reward modeling: a research direction.
  *arXiv preprint arXiv:1811.07871*, 2018.
- Li and Lee (2022)

  M. Li and J. D. Lee.
  Modeling goal alignment in human-ai teaming: a dynamic game theory approach.
  In *Proceedings of the Human Factors and Ergonomics Society Annual Meeting*, volume 66, pages 1538–1542. SAGE Publications Sage CA: Los Angeles, CA, 2022.
- Li et al. (2024a)

  P. Li, J. Yang, A. Wierman, and S. Ren.
  Towards environmentally equitable AI via geographical load balancing.
  In *Proceedings of the 15th ACM International Conference on Future and Sustainable Energy Systems*, pages 291–307, 2024a.
- Li et al. (2024b)

  S. Li, T. Sun, Q. Cheng, and X. Qiu.
  Agent alignment in evolving social norms.
  *arXiv preprint arXiv:2401.04620*, 2024b.
- Li et al. (2024c)

  Y. Li, S. Zhang, J. Sun, W. Zhang, Y. Du, Y. Wen, X. Wang, and W. Pan.
  Tackling cooperative incompatibility for zero-shot human-ai coordination.
  *Journal of Artificial Intelligence Research*, 80:1139–1185, 2024c.
- Liang et al. (2020)

  C.-J. Liang, V. R. Kamat, and C. C. Menassa.
  Teaching robots to perform quasi-repetitive construction tasks through human demonstration.
  *Automation in Construction*, 120:103370, 2020.
- List (2021)

  C. List.
  Group agency and artificial intelligence.
  *Philosophy & technology*, 34(4):1213–1242, 2021.
- List and Pettit (2011)

  C. List and P. Pettit.
  *Group agency: The possibility, design, and status of corporate agents*.
  Oxford University Press, 2011.
- Liu et al. (2023a)

  B. Liu, Y. Jiang, X. Zhang, Q. Liu, S. Zhang, J. Biswas, and P. Stone.
  Llm+ p: Empowering large language models with optimal planning proficiency.
  *arXiv preprint arXiv:2304.11477*, 2023a.
- Liu et al. (2024a)

  J. Liu, K. Wang, Y. Chen, X. Peng, Z. Chen, L. Zhang, and Y. Lou.
  Large language model-based agents for software engineering: A survey.
  *arXiv preprint arXiv:2409.02977*, 2024a.
- Liu et al. (2024b)

  T. Liu, W. Xiong, J. Ren, L. Chen, J. Wu, R. Joshi, Y. Gao, J. Shen, Z. Qin, T. Yu, et al.
  Rrm: Robust reward model training mitigates reward hacking.
  *arXiv preprint arXiv:2409.13156*, 2024b.
- Liu et al. (2023b)

  X. Liu, H. Yu, H. Zhang, Y. Xu, X. Lei, H. Lai, Y. Gu, H. Ding, K. Men, K. Yang, S. Zhang, X. Deng, A. Zeng, Z. Du, C. Zhang, S. Shen, T. Zhang, Y. Su, H. Sun, M. Huang, Y. Dong, and J. Tang.
  Agentbench: Evaluating llms as agents, 2023b.
  URL <https://arxiv.org/abs/2308.03688>.
- Liu et al. (2024c)

  Y. Liu, X. Yi, X. Chen, J. Yao, J. Yi, D. Zan, Z. Liu, X. Xie, and T.-Y. Ho.
  Elephant in the room: Unveiling the impact of reward model quality in alignment.
  *arXiv preprint arXiv:2409.19024*, 2024c.
- Luccioni and Hernandez-Garcia (2023)

  A. S. Luccioni and A. Hernandez-Garcia.
  Counting carbon: A survey of factors influencing the emissions of machine learning.
  *arXiv preprint arXiv:2302.08476*, 2023.
- Luccioni et al. (2025)

  A. S. Luccioni, E. Strubell, and K. Crawford.
  From efficiency gains to rebound effects: The problem of jevons’ paradox in ai’s polarized environmental debate.
  *arXiv preprint arXiv:2501.16548*, 2025.
- Luccioni et al. (2024)

  S. Luccioni, Y. Jernite, and E. Strubell.
  Power hungry processing: Watts driving the cost of AI deployment?
  In *Proceedings of the 2024 ACM conference on fairness, accountability, and transparency*, pages 85–99, 2024.
- Lujak et al. (2023)

  M. Lujak, A. Fernández, H. Billhardt, S. Ossowski, J. Arias, and A. López Sánchez.
  On value-aligned cooperative multi-agent task allocation.
  In *International Workshop on Value Engineering in AI*, pages 197–216. Springer, 2023.
- Lythreatis et al. (2022)

  S. Lythreatis, S. K. Singh, and A.-N. El-Kassar.
  The digital divide: A review and future research agenda.
  *Technological Forecasting and Social Change*, 175:121359, 2022.
- Magni and Milella (2025)

  M. Magni and F. Milella.
  Conversational agents in the legal domain: A systematic review.
  In *Advances in Information and Communication: Proceedings of the 2025 Future of Information and Communication Conference (FICC), Volume 3*, volume 1285, page 183. Springer Nature, 2025.
- Marcoux and Lusseau (2013)

  M. Marcoux and D. Lusseau.
  Network modularity promotes cooperation.
  *Journal of Theoretical Biology*, 324:103–108, 2013.
- Mattsson et al. (2023)

  C. E. Mattsson, T. Criscione, and F. W. Takes.
  Circulation of a digital community currency.
  *Scientific Reports*, 13(1):5864, 2023.
- Mazzocca et al. (2025)

  C. Mazzocca, A. Acar, S. Uluagac, R. Montanari, P. Bellavista, and M. Conti.
  A survey on decentralized identifiers and verifiable credentials.
  *IEEE Communications Surveys & Tutorials*, 2025.
- Mazzucato (2015)

  M. Mazzucato.
  Building the entrepreneurial state: A new framework for envisioning and evaluating a mission-oriented public sector.
  *Levy Economics Institute of Bard College Working Paper*, (824), 2015.
- Mazzucato (2018)

  M. Mazzucato.
  Mission-oriented innovation policies: challenges and opportunities.
  *Industrial and corporate change*, 27(5):803–815, 2018.
- Mazzucato (2023)

  M. Mazzucato.
  Financing the sustainable development goals through mission-oriented development banks.
  2023.
- McCormick (2010)

  R. McCormick.
  *Legal risk in the financial markets*.
  Oxford University Press, USA, 2010.
- Menkveld and Yueshen (2019)

  A. J. Menkveld and B. Z. Yueshen.
  The flash crash: A cautionary tale about highly fragmented markets.
  *Management Science*, 65(10):4470–4488, 2019.
- Metcalf (2009)

  G. E. Metcalf.
  Market-based policy options to control us greenhouse gas emissions.
  *Journal of Economic perspectives*, 23(2):5–27, 2009.
- Michel and Hudon (2015)

  A. Michel and M. Hudon.
  Community currencies and sustainable development: A systematic review.
  *Ecological economics*, 116:160–171, 2015.
- Microsoft (2025)

  Microsoft.
  Unleashing the power of model context protocol (mcp): A game-changer in AI integration, 2025.
- Mishra (2023)

  A. Mishra.
  Ai alignment and social choice: Fundamental limitations and policy implications.
  *arXiv preprint arXiv:2310.16048*, 2023.
- Mokyr et al. (2015)

  J. Mokyr, C. Vickers, and N. L. Ziebarth.
  The history of technological anxiety and the future of economic growth: Is this time different?
  *Journal of economic perspectives*, 29(3):31–50, 2015.
- Moloney (2023)

  N. Moloney.
  *EU securities and financial markets regulation*.
  Oxford University Press, 2023.
- Mu et al. (2024)

  C. Mu, H. Guo, Y. Chen, C. Shen, D. Hu, S. Hu, and Z. Wang.
  Multi-agent, human–agent and beyond: a survey on cooperation in social dilemmas.
  *Neurocomputing*, 610:128514, 2024.
- Ngo et al. (2022)

  R. Ngo, L. Chan, and S. Mindermann.
  The alignment problem from a deep learning perspective.
  *arXiv preprint arXiv:2209.00626*, 2022.
- Norheim (2016)

  O. F. Norheim.
  Ethical priority setting for universal health coverage: challenges in deciding upon fair distribution of health services.
  *BMC medicine*, 14:1–4, 2016.
- Ostrom (1990)

  E. Ostrom.
  *Governing the commons: The evolution of institutions for collective action*.
  Cambridge university press, 1990.
- Paccagnan et al. (2022)

  D. Paccagnan, R. Chandan, and J. R. Marden.
  Utility and mechanism design in multi-agent systems: An overview.
  *Annual Reviews in Control*, 53:315–328, 2022.
- Page (2011)

  E. A. Page.
  Climatic justice and the fair distribution of atmospheric burdens: A conjunctive account.
  *The monist*, 94(3):412–432, 2011.
- Pan et al. (2022)

  A. Pan, K. Bhatia, and J. Steinhardt.
  The effects of reward misspecification: Mapping and mitigating misaligned models.
  *arXiv preprint arXiv:2201.03544*, 2022.
- Pan et al. (2024)

  X. Pan, D. Gao, Y. Xie, Y. Chen, Z. Wei, Y. Li, B. Ding, J.-R. Wen, and J. Zhou.
  Very large-scale multi-agent simulation in agentscope, 2024.
  URL <https://arxiv.org/abs/2407.17789>.
- Papoudakis et al. (2019)

  G. Papoudakis, F. Christianos, A. Rahman, and S. V. Albrecht.
  Dealing with non-stationarity in multi-agent deep reinforcement learning.
  *arXiv preprint arXiv:1906.04737*, 2019.
- Park et al. (2023)

  M. Park, E. Leahey, and R. J. Funk.
  Papers and patents are becoming less disruptive over time.
  *Nature*, 613(7942):138–144, 2023.
- Patel et al. (2025)

  D. Patel, G. Raut, S. N. Cheetirala, B. Glicksberg, M. A. Levin, G. Nadkarni, R. Freeman, E. Klang, and P. Timsina.
  Ai agents in modern healthcare: From foundation to pioneer–a comprehensive review and implementation roadmap for impact and integration in clinical settings.
  2025.
- Pedersen et al. (2003)

  L. Pedersen, D. Kortenkamp, D. Wettergreen, and I. Nourbakhsh.
  A survey of space robotics.
  In *Proceeding of the 7th International Symposium on Artificial Intelligence, Robotics and Automation in Space*, number AM-11. European Space Agency, 2003.
- Perolat et al. (2017)

  J. Perolat, J. Z. Leibo, V. Zambaldi, C. Beattie, K. Tuyls, and T. Graepel.
  A multi-agent reinforcement learning model of common-pool resource appropriation.
  *Advances in neural information processing systems*, 30, 2017.
- Piatti et al. (2024)

  G. Piatti, Z. Jin, M. Kleiman-Weiner, B. Schölkopf, M. Sachan, and R. Mihalcea.
  Cooperate or collapse: Emergence of sustainable cooperation in a society of LLM agents.
  *Advances in Neural Information Processing Systems*, 37:111715–111759, 2024.
- Qian et al. (2024)

  C. Qian, Z. Xie, Y. Wang, W. Liu, Y. Dang, Z. Du, W. Chen, C. Yang, Z. Liu, and M. Sun.
  Scaling large-language-model-based multi-agent collaboration.
  *arXiv preprint arXiv:2406.07155*, 2024.
- Raab (2024)

  R. Raab.
  *Machine Learning and the Multiagent Alignment Problem*.
  University of California, Santa Cruz, 2024.
- Rădulescu et al. (2020)

  R. Rădulescu, P. Mannion, D. M. Roijers, and A. Nowé.
  Multi-objective multi-agent decision making: a utility-based analysis and survey.
  *Autonomous Agents and Multi-Agent Systems*, 34(1):10, 2020.
- Raileanu et al. (2018)

  R. Raileanu, E. Denton, A. Szlam, and R. Fergus.
  Modeling others using oneself in multi-agent reinforcement learning.
  In *International conference on machine learning*, pages 4257–4266. PMLR, 2018.
- Ramirez (2025)

  V. B. Ramirez.
  Chatgpt is changing the words we use in conversation, 2025.
  URL <https://www.scientificamerican.com/article/chatgpt-is-changing-the-words-we-use-in-conversation/>.
- Rasal and Hauer (2024)

  S. Rasal and E. Hauer.
  Navigating complexity: Orchestrated problem solving with multi-agent llms.
  *arXiv preprint arXiv:2402.16713*, 2024.
- Ren et al. (2025)

  S. Ren, W. Fu, X. Zou, C. Shen, Y. Cai, C. Chu, Z. Wang, and S. Hu.
  Beyond the tragedy of the commons: Building a reputation system for generative multi-agent systems, 2025.
  URL <https://arxiv.org/abs/2505.05029>.
- Ren et al. (2005)

  W. Ren, R. W. Beard, and E. M. Atkins.
  A survey of consensus problems in multi-agent coordination.
  In *Proceedings of the 2005, American Control Conference, 2005.*, pages 1859–1864. IEEE, 2005.
- Ruan et al. (2023)

  J. Ruan, Y. Chen, B. Zhang, Z. Xu, T. Bao, H. Mao, Z. Li, X. Zeng, R. Zhao, et al.
  Tptu: Task planning and tool usage of large language model-based AI agents.
  In *NeurIPS 2023 Foundation Models for Decision Making Workshop*, 2023.
- Saab et al. (2025)

  K. Saab, J. Freyberg, C. Park, T. Strother, Y. Cheng, W.-H. Weng, D. G. T. Barrett, D. Stutz, N. Tomasev, A. Palepu, V. Liévin, Y. Sharma, R. Ruparel, A. Ahmed, E. Vedadi, K. Kanada, C. Hughes, Y. Liu, G. Brown, Y. Gao, S. Li, S. S. Mahdavi, J. Manyika, K. Chou, Y. Matias, A. Hassidim, D. R. Webster, P. Kohli, S. M. A. Eslami, J. Barral, A. Rodman, V. Natarajan, M. Schaekermann, T. Tu, A. Karthikesalingam, and R. Tanno.
  Advancing conversational diagnostic AI with multimodal reasoning, 2025.
  URL <https://arxiv.org/abs/2505.04653>.
- Sager et al. (2025)

  P. J. Sager, B. Meyer, P. Yan, R. von Wartburg-Kottler, L. Etaiwi, A. Enayati, G. Nobel, A. Abdulkadir, B. F. Grewe, and T. Stadelmann.
  Ai agents for computer use: A review of instruction-based computer control, gui automation, and operator assistants.
  *arXiv preprint arXiv:2501.16150*, 2025.
- Sanabria and Vecino (2025)

  J. M. Sanabria and P. A. Vecino.
  Beyond the sum: Unlocking AI agents potential through market forces, 2025.
  URL <https://arxiv.org/abs/2501.10388>.
- Sandel (1998)

  M. J. Sandel.
  *What money can’t buy: the moral limits of markets*.
  Brasenose College, Oxford, 1998.
- Sanz (2016)

  E. O. Sanz.
  Community currency (ccs) in spain: An empirical study of their social effects.
  *Ecological Economics*, 121:20–27, 2016.
- Sastry et al. (2024)

  G. Sastry, L. Heim, H. Belfield, M. Anderljung, M. Brundage, J. Hazell, C. O’Keefe, G. K. Hadfield, R. Ngo, K. Pilz, et al.
  Computing power and the governance of artificial intelligence.
  *arXiv preprint arXiv:2402.08797*, 2024.
- Satz (2010)

  D. Satz.
  *Why some things should not be for sale: The moral limits of markets*.
  Oxford University Press, 2010.
- Savona and Ciarli (2019)

  M. Savona and T. Ciarli.
  Structural changes and sustainability. a selected review of the empirical evidence.
  *Ecological economics*, 159:244–260, 2019.
- Schelling (1973)

  T. C. Schelling.
  Hockey helmets, concealed weapons, and daylight saving: A study of binary choices with externalities.
  *Journal of Conflict resolution*, 17(3):381–428, 1973.
- Schill et al. (2019)

  C. Schill, J. M. Anderies, T. Lindahl, C. Folke, S. Polasky, J. C. Cárdenas, A.-S. Crépin, M. A. Janssen, J. Norberg, and M. Schlüter.
  A more dynamic understanding of human behaviour for the anthropocene.
  *Nature Sustainability*, 2(12):1075–1082, 2019.
- Schneier (2024)

  B. Schneier.
  Reimagining democracy.
  *Common Knowledge*, 30(3):354–358, 2024.
- Schuldt (2012)

  A. Schuldt.
  Multiagent coordination enabling autonomous logistics.
  *KI-Künstliche Intelligenz*, 26:91–94, 2012.
- Schumpeter (1942)

  J. A. Schumpeter.
  *Capitalism, socialism and democracy*.
  Harper and Brothers, 1942.
- Schwarcz (2009)

  S. L. Schwarcz.
  Regulating complexity in financial markets.
  *Wash. UL Rev.*, 87:211, 2009.
- Sedlmeir et al. (2021)

  J. Sedlmeir, R. Smethurst, A. Rieger, and G. Fridgen.
  Digital identities and verifiable credentials.
  *Business & Information Systems Engineering*, 63(5):603–613, 2021.
- Seyfang (2006)

  G. Seyfang.
  Sustainable consumption, the new economics and community currencies: Developing new institutions for environmental governance.
  *Regional Studies*, 40(7):781–791, 2006.
- Seyfang and Longhurst (2013)

  G. Seyfang and N. Longhurst.
  Growing green money? mapping community currencies for sustainable development.
  *Ecological Economics*, 86:65–77, 2013.
- Shah et al. (2025)

  R. Shah, A. Irpan, A. M. Turner, A. Wang, A. Conmy, D. Lindner, J. Brown-Cohen, L. Ho, N. Nanda, R. A. Popa, et al.
  An approach to technical agi safety and security.
  *arXiv preprint arXiv:2504.01849*, 2025.
- Sharma et al. (2023)

  M. Sharma, M. Tong, T. Korbak, D. Duvenaud, A. Askell, S. R. Bowman, N. Cheng, E. Durmus, Z. Hatfield-Dodds, S. R. Johnston, et al.
  Towards understanding sycophancy in language models.
  *arXiv preprint arXiv:2310.13548*, 2023.
- Shavit et al. (2023)

  Y. Shavit, S. Agarwal, M. Brundage, S. Adler, C. O’Keefe, R. Campbell, T. Lee, P. Mishkin, T. Eloundou, A. Hickey, et al.
  Practices for governing agentic ai systems.
  *Research Paper, OpenAI*, 2023.
- Shayegani et al. (2023)

  E. Shayegani, M. A. A. Mamun, Y. Fu, P. Zaree, Y. Dong, and N. Abu-Ghazaleh.
  Survey of vulnerabilities in large language models revealed by adversarial attacks.
  *arXiv preprint arXiv:2310.10844*, 2023.
- Shekhtman and Waisbard (2019)

  L. Shekhtman and E. Waisbard.
  Engravechain: Tamper-proof distributed log system.
  In *Proceedings of the 2nd Workshop on Blockchain-enabled Networked Sensor*, pages 8–14, 2019.
- Siddarth et al. (2020)

  D. Siddarth, S. Ivliev, S. Siri, and P. Berman.
  Who watches the watchmen? a review of subjective approaches for sybil-resistance in proof of personhood protocols.
  *Frontiers in Blockchain*, 3:590171, 2020.
- Singh et al. (2025)

  N. Singh, S. Lane, T. Yu, J. Lu, A. Ramos, H. Cui, and H. Zhao.
  A generalized platform for artificial intelligence-powered autonomous protein engineering.
  *bioRxiv*, pages 2025–02, 2025.
- Siqueira et al. (2020)

  A. C. O. Siqueira, B. Honig, S. Mariano, and J. Moraes.
  A commons strategy for promoting entrepreneurship and social capital: Implications for community currencies, cryptocurrencies, and value exchange.
  *Journal of Business Ethics*, 166(4):711–726, 2020.
- Skalse et al. (2022)

  J. Skalse, N. Howe, D. Krasheninnikov, and D. Krueger.
  Defining and characterizing reward gaming.
  *Advances in Neural Information Processing Systems*, 35:9460–9471, 2022.
- Smith et al. (2025)

  C. Smith, M. Abdulhai, M. Diaz, M. Tesic, R. Trivedi, A. S. Vezhnevets, L. Hammond, J. Clifton, M. Chang, E. A. Duéñez-Guzmán, J. P. Agapiou, J. Matyas, and J. Z. Leibo.
  Evaluating generalization capabilities of LLM-based agents in mixed-motive scenarios using concordia.
  *Advances in neural information processing systems*, 38, 2025.
- Snyder and Swann Jr (1978)

  M. Snyder and W. B. Swann Jr.
  Behavioral confirmation in social interaction: From social perception to social reality.
  *Journal of experimental social psychology*, 14(2):148–162, 1978.
- Söderholm (2020)

  P. Söderholm.
  The green economy transition: the challenges of technological change for sustainability.
  *Sustainable Earth*, 3(1):6, 2020.
- Stavins (2010)

  R. N. Stavins.
  Market-based environmental policies.
  In *Public policies for environmental protection*, pages 31–76. Routledge, 2010.
- Stevens et al. (2015)

  R. Stevens, N. Moray, and J. Bruneel.
  The social and economic mission of social enterprises: Dimensions, measurement, validation, and relation.
  *Entrepreneurship theory and practice*, 39(5):1051–1082, 2015.
- Stooke et al. (2021)

  A. Stooke, A. Mahajan, C. Barros, C. Deck, J. Bauer, J. Sygnowski, M. Trebacz, M. Jaderberg, M. Mathieu, et al.
  Open-ended learning leads to generally capable agents.
  *arXiv preprint arXiv:2107.12808*, 2021.
- Strouse et al. (2021)

  D. Strouse, K. McKee, M. Botvinick, E. Hughes, and R. Everett.
  Collaborating with humans without human data.
  *Advances in neural information processing systems*, 34:14502–14515, 2021.
- Strubell et al. (2020)

  E. Strubell, A. Ganesh, and A. McCallum.
  Energy and policy considerations for modern deep learning research.
  In *Proceedings of the AAAI conference on artificial intelligence*, volume 34, pages 13693–13696, 2020.
- Tarashev et al. (2009)

  N. A. Tarashev, C. E. Borio, and K. Tsatsaronis.
  The systemic importance of financial institutions.
  *BIS Quarterly Review, September*, 2009.
- Tatom (2011)

  J. A. Tatom.
  *Financial Market Regulation Legislation and Implications*.
  Springer, 2011.
- team (2025)

  W. team.
  Worldcoin, 2025.
  URL <https://world.org/>.
- Thomson (2011)

  W. Thomson.
  Fair allocation rules.
  In *Handbook of social choice and welfare*, volume 2, pages 393–506. Elsevier, 2011.
- Trevelyan et al. (2016)

  J. Trevelyan, W. R. Hamel, and S.-C. Kang.
  Robotics in hazardous applications.
  In *Springer handbook of robotics*, pages 1521–1548. Springer, 2016.
- Tu et al. (2025)

  T. Tu, M. Schaekermann, A. Palepu, K. Saab, J. Freyberg, R. Tanno, A. Wang, B. Li, M. Amin, Y. Cheng, et al.
  Towards conversational diagnostic artificial intelligence.
  *Nature*, pages 1–9, 2025.
- Tukker and Ekins (2019)

  A. Tukker and P. Ekins.
  Concepts fostering resource efficiency: a trade-off between ambitions and viability.
  *Ecological Economics*, 155:36–45, 2019.
- Vashishth et al. (2024)

  T. K. Vashishth, V. Sharma, K. K. Sharma, B. Kumar, S. Chaudhary, and R. Panwar.
  Intelligent resource allocation and optimization for industrial robotics using AI and blockchain.
  In *AI and blockchain applications in industrial robotics*, pages 82–110. IGI Global Scientific Publishing, 2024.
- Vedadi et al. (2025)

  E. Vedadi, D. Barrett, N. Harris, E. Wulczyn, S. Reddy, R. Ruparel, M. Schaekermann, T. Strother, R. Tanno, Y. Sharma, J. Lee, C. Hughes, D. Slack, A. Palepu, J. Freyberg, K. Saab, V. Liévin, W.-H. Weng, T. Tu, Y. Liu, N. Tomasev, K. Kulkarni, S. S. Mahdavi, K. Guu, J. Barral, D. R. Webster, J. Manyika, A. Hassidim, K. Chou, Y. Matias, P. Kohli, A. Rodman, V. Natarajan, A. Karthikesalingam, and D. Stutz.
  Towards physician-centered oversight of conversational diagnostic ai, 2025.
  URL <https://arxiv.org/abs/2507.15743>.
- Vinyals et al. (2019)

  O. Vinyals, I. Babuschkin, W. M. Czarnecki, M. Mathieu, A. Dudzik, J. Chung, D. H. Choi, R. Powell, T. Ewalds, P. Georgiev, et al.
  Grandmaster level in starcraft ii using multi-agent reinforcement learning.
  *nature*, 575(7782):350–354, 2019.
- Vuorenmaa and Wang (2014)

  T. A. Vuorenmaa and L. Wang.
  An agent-based model of the flash crash of may 6, 2010, with policy implications.
  *Available at SSRN 2336772*, 2014.
- Walzer (2008)

  M. Walzer.
  *Spheres of justice: A defense of pluralism and equality*.
  Basic books, 2008.
- Wang et al. (2025)

  C. Wang, Z. Zhao, Y. Jiang, Z. Chen, C. Zhu, Y. Chen, J. Liu, L. Zhang, X. Fan, H. Ma, et al.
  Beyond reward hacking: Causal rewards for large language model alignment.
  *arXiv preprint arXiv:2501.09620*, 2025.
- Wang et al. (2014)

  Q. Wang, H. Gao, F. Alsaadi, and T. Hayat.
  An overview of consensus problems in constrained multi-agent coordination.
  *Systems Science & Control Engineering: An Open Access Journal*, 2(1):275–284, 2014.
- Wang et al. (2022)

  T. T. Wang, A. Gleave, N. Belrose, T. Tseng, M. D. Dennis, Y. Duan, V. Pogrebniak, J. Miller, S. Levine, and S. Russell.
  Adversarial policies beat professional-level go ais.
  In *Deep Reinforcement Learning Workshop NeurIPS 2022*, 2022.
- Wang et al. (2023a)

  T. T. Wang, A. Gleave, T. Tseng, K. Pelrine, N. Belrose, J. Miller, M. D. Dennis, Y. Duan, V. Pogrebniak, S. Levine, et al.
  Adversarial policies beat superhuman go AIs.
  In *International Conference on Machine Learning*, pages 35655–35739. PMLR, 2023a.
- Wang et al. (2023b)

  Z. Wang, S. Cai, G. Chen, A. Liu, X. S. Ma, and Y. Liang.
  Describe, explain, plan and select: interactive planning with llms enables open-world multi-task agents.
  *Advances in Neural Information Processing Systems*, 36:34153–34189, 2023b.
- Wegner (1987)

  D. M. Wegner.
  Transactive memory: A contemporary analysis of the group mind.
  In *Theories of group behavior*, pages 185–208. Springer, 1987.
- Wegner and Ward (2013)

  D. M. Wegner and A. F. Ward.
  The internet has become the external hard drive for our memories.
  *Scientific American*, 309(6):58–61, 2013.
- Wijngaards et al. (2002)

  N. J. Wijngaards, B. J. Overeinder, M. van Steen, and F. M. Brazier.
  Supporting internet-scale multi-agent systems.
  *Data & Knowledge Engineering*, 41(2-3):229–245, 2002.
- Wu et al. (2024a)

  C. H. Wu, J. Y. Koh, R. Salakhutdinov, D. Fried, and A. Raghunathan.
  Adversarial attacks on multimodal agents.
  *arXiv e-prints*, pages arXiv–2406, 2024a.
- Wu et al. (2022)

  C.-J. Wu, R. Raghavendra, U. Gupta, B. Acun, N. Ardalani, K. Maeng, G. Chang, F. Aga, J. Huang, C. Bai, et al.
  Sustainable ai: Environmental implications, challenges and opportunities.
  *Proceedings of Machine Learning and Systems*, 4:795–813, 2022.
- Wu et al. (2016)

  J. Wu, D. Balliet, and P. A. Van Lange.
  Reputation, gossip, and human cooperation.
  *Social and Personality Psychology Compass*, 10(6):350–364, 2016.
- Wu et al. (2025)

  M. Wu, Z. Wang, J. Wang, Z. Dong, J. Yang, Q. Li, T. Huang, L. Zhao, M. Li, F. Wang, C. Fan, and H. Chen.
  An ai-native experimental laboratory for autonomous biomolecular engineering, 2025.
  URL <https://arxiv.org/abs/2507.02379>.
- Wu et al. (2024b)

  Y. Wu, Z. Sun, S. Li, S. Welleck, and Y. Yang.
  Inference scaling laws: An empirical analysis of compute-optimal inference for problem-solving with language models.
  *arXiv preprint arXiv:2408.00724*, 2024b.
- Xi et al. (2025)

  Z. Xi, W. Chen, X. Guo, W. He, Y. Ding, B. Hong, M. Zhang, J. Wang, S. Jin, E. Zhou, et al.
  The rise and potential of large language model based agents: A survey.
  *Science China Information Sciences*, 68(2):121101, 2025.
- Xu et al. (2024a)

  L. Xu, S. Almahri, S. Mak, and A. Brintrup.
  Multi-agent systems and foundation models enable autonomous supply chains: Opportunities and challenges.
  *IFAC-PapersOnLine*, 58(19):795–800, 2024a.
- Xu et al. (2024b)

  L. Xu, S. Mak, M. Minaricova, and A. Brintrup.
  On implementing autonomous supply chains: A multi-agent system approach.
  *Computers in Industry*, 161:104120, 2024b.
- Xue (2023)

  D. Xue.
  Strategies for mitigating the global energy and carbon impact of artificial intelligence.
  *United Nations SDGs*, pages 2023–05, 2023.
- Yan et al. (2023)

  X. Yan, J. Guo, X. Lou, J. Wang, H. Zhang, and Y. Du.
  An efficient end-to-end training approach for zero-shot human-ai coordination.
  *Advances in Neural Information Processing Systems*, 36:2636–2658, 2023.
- Yang and Zhai (2025)

  K. Yang and C. Zhai.
  Ten principles of AI agent economics, 2025.
  URL <https://arxiv.org/abs/2505.20273>.
- Yang et al. (2024a)

  R. Yang, X. Pan, F. Luo, S. Qiu, H. Zhong, D. Yu, and J. Chen.
  Rewards-in-context: Multi-objective alignment of foundation models with dynamic preference adjustment.
  *arXiv preprint arXiv:2402.10207*, 2024a.
- Yang et al. (2025)

  Y. Yang, Y. Wen, J. Wang, and W. Zhang.
  Agent exchange: Shaping the future of AI agent economics, 2025.
  URL <https://arxiv.org/abs/2507.03904>.
- Yang et al. (2024b)

  Z. Yang, A. Liu, Z. Liu, K. Liu, F. Xiong, Y. Wang, Z. Yang, Q. Hu, X. Chen, Z. Zhang, et al.
  Position: Towards unified alignment between agents, humans, and environment.
  In *Forty-first International Conference on Machine Learning*, 2024b.
- Yao et al. (2024)

  Y. Yao, J. Duan, K. Xu, Y. Cai, Z. Sun, and Y. Zhang.
  A survey on large language model (llm) security and privacy: The good, the bad, and the ugly.
  *High-Confidence Computing*, page 100211, 2024.
- Zech (2021)

  H. Zech.
  Liability for AI: public policy considerations.
  In *ERA forum*, volume 22, pages 147–158. Springer, 2021.
- Zhang et al. (2022)

  J. Zhang, W. Lou, H. Sun, Q. Su, and W. Li.
  Truthful auction mechanisms for resource allocation in the internet of vehicles with public blockchain networks.
  *Future Generation Computer Systems*, 132:11–24, 2022.
- Zhang et al. (2023)

  J. Zhang, Y. Liu, X. Qin, X. Xu, and P. Zhang.
  Adaptive resource allocation for blockchain-based federated learning in internet of things.
  *IEEE Internet of Things Journal*, 10(12):10621–10635, 2023.
- Zhang et al. (2014)

  K. Zhang, X. Liang, R. Lu, and X. Shen.
  Sybil attacks and their defenses in the internet of things.
  *IEEE Internet of Things Journal*, 1(5):372–383, 2014.
- Zhang et al. (2021)

  K. Zhang, Z. Yang, and T. Başar.
  Multi-agent reinforcement learning: A selective overview of theories and algorithms.
  *Handbook of reinforcement learning and control*, pages 321–384, 2021.
- Zhang et al. (2024)

  Z. Zhang, F. Bai, M. Wang, H. Ye, C. Ma, and Y. Yang.
  Incentive compatibility for AI alignment in sociotechnical systems: Positions and prospects.
  *arXiv preprint arXiv:2402.12907*, 2024.
- Zhao et al. (2023)

  R. Zhao, J. Song, Y. Yuan, H. Hu, Y. Gao, Y. Wu, Z. Sun, and W. Yang.
  Maximum entropy population-based training for zero-shot human-ai coordination.
  In *Proceedings of the AAAI Conference on Artificial Intelligence*, volume 37, pages 6145–6153, 2023.
- Zheng et al. (2023)

  L. Zheng, W.-L. Chiang, Y. Sheng, S. Zhuang, Z. Wu, Y. Zhuang, Z. Lin, Z. Li, D. Li, E. Xing, et al.
  Judging llm-as-a-judge with mt-bench and chatbot arena.
  *Advances in Neural Information Processing Systems*, 36:46595–46623, 2023.
- Zheng et al. (2022)

  S. Zheng, A. Trott, S. Srinivasa, D. C. Parkes, and R. Socher.
  The AI economist: Taxation policy design via two-level deep multiagent reinforcement learning.
  *Science advances*, 8(18):eabk2607, 2022.
- Zheng et al. (2018)

  Z. Zheng, S. Xie, H.-N. Dai, X. Chen, and H. Wang.
  Blockchain challenges and opportunities: A survey.
  *International journal of web and grid services*, 14(4):352–375, 2018.
- Zhou et al. (2024a)

  L. Zhou, A. Diro, A. Saini, S. Kaisar, and P. C. Hiep.
  Leveraging zero knowledge proofs for blockchain-based identity sharing: A survey of advancements, challenges and opportunities.
  *Journal of Information Security and Applications*, 80:103678, 2024a.
- Zhou et al. (2024b)

  Z. Zhou, J. Song, K. Yao, Z. Shu, and L. Ma.
  Isr-llm: Iterative self-refined large language model for long-horizon sequential task planning.
  In *2024 IEEE International Conference on Robotics and Automation (ICRA)*, pages 2081–2088. IEEE, 2024b.
- Zhu et al. (2023a)

  K. Zhu, J. Wang, J. Zhou, Z. Wang, H. Chen, Y. Wang, L. Yang, W. Ye, Y. Zhang, N. Gong, et al.
  Promptrobust: Towards evaluating the robustness of large language models on adversarial prompts.
  In *Proceedings of the 1st ACM Workshop on Large AI Systems and Models with Privacy and Safety Analysis*, pages 57–68, 2023a.
- Zhu et al. (2023b)

  K. Zhu, J. Wang, J. Zhou, Z. Wang, H. Chen, Y. Wang, L. Yang, W. Ye, Y. Zhang, N. Zhenqiang Gong, et al.
  Promptbench: Towards evaluating the robustness of large language models on adversarial prompts.
  *arXiv e-prints*, pages arXiv–2306, 2023b.
- Zhu et al. (2021)

  P. Zhu, J. Hu, X. Li, and Q. Zhu.
  Using blockchain technology to enhance the traceability of original achievements.
  *IEEE Transactions on Engineering Management*, 70(5):1693–1707, 2021.
- Zhu et al. (2025)

  S. Zhu, J. Sun, Y. Nian, T. South, A. Pentland, and J. Pei.
  The automated but risky game: Modeling agent-to-agent negotiations and transactions in consumer markets, 2025.
  URL <https://arxiv.org/abs/2506.00073>.
- Zhuang and Hadfield-Menell (2020)

  S. Zhuang and D. Hadfield-Menell.
  Consequences of misaligned ai.
  *Advances in Neural Information Processing Systems*, 33:15763–15773, 2020.
- Zhuge et al. (2025)

  M. Zhuge, C. Zhao, D. R. Ashley, W. Wang, D. Khizbullin, Y. Xiong, Z. Liu, E. Chang, R. Krishnamoorthi, Y. Tian, et al.
  Agent-as-a-judge: Evaluating agents with agents.
  2025.
- Zimmer et al. (2021)

  M. Zimmer, C. Glanois, U. Siddique, and P. Weng.
  Learning fair policies in decentralized cooperative multi-agent reinforcement learning.
  In *International conference on machine learning*, pages 12967–12978. PMLR, 2021.
- Zou et al. (2019)

  W. Zou, D. Lo, P. S. Kochhar, X.-B. D. Le, X. Xia, Y. Feng, Z. Chen, and B. Xu.
  Smart contract development: Challenges and opportunities.
  *IEEE transactions on software engineering*, 47(10):2084–2106, 2019.

## Acknowledgements

We would like to thank our colleagues who provided feedback on the manuscript, in particular Sébastien Krier and Raphael Koster for their valuable comments.
