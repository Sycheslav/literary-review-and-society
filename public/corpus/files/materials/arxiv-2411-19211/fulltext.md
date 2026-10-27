---
id: arxiv-2411-19211-text
type: material
title: On the Ethical Considerations of Generative Agents
work_id: arxiv-2411-19211
source_url: https://arxiv.org/html/2411.19211v1
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять
  с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.
language: original
sha256_text: 78ee3a606c9f198acc96a3cb0e39d7b709e0079eadd8f130cfea482215328914
---

> Источник: [https://arxiv.org/html/2411.19211v1](https://arxiv.org/html/2411.19211v1). Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.

# On the Ethical Considerations of Generative Agents

N’yoma Diamond
Affiliation: Department of Computer Science and Technology
Affiliation: University of Cambridge
Affiliation: Cambridge, England
Email: [bad35@cantab.ac.uk](mailto:)
  
Soumya Banerjee
Affiliation: Department of Computer Science and Technology
Affiliation: University of Cambridge
Affiliation: Cambridge, England
Email: [sb2333@cam.ac.uk](mailto:)

###### Abstract

The Generative Agents framework recently developed by [[1](https://arxiv.org/html/2411.19211v1#bib.bibx1)] has enabled numerous new technical solutions and problem-solving approaches. Academic and industrial interest in generative agents has been explosive as a result of the effectiveness of generative agents toward emulating human behaviour. However, it is necessary to consider the ethical challenges and concerns posed by this technique and its usage. In this position paper, we discuss the extant literature that evaluate the ethical considerations regarding generative agents and similar generative tools, and identify additional concerns of significant importance. We also suggest guidelines and necessary future research on how to mitigate some of the ethical issues and systemic risks associated with generative agents.

## 1 Introduction

The seminal work by [[1](https://arxiv.org/html/2411.19211v1#bib.bibx1)] introduced the Generative Agents framework for simulating human behaviour using generative language models. Generative agents have the ability to operate independently and creatively, making decisions to reach a goal with minimal user input. To do this, each agent maintains a distinct and dedicated set of memories and behavioural parameters that are provided to a generative language model as needed. By recording memories, prompting reflection on them, planning future actions, and reacting to short-term observations, generative agents can produce realistic emulations of human behaviour and decision-making [[1](https://arxiv.org/html/2411.19211v1#bib.bibx1)]. As a result, generative agents have massive potential for widespread adoption and may revolutionise many modern problems. However, this introduces a number of critical ethical challenges regarding their research, development, and application. In this position paper, we examine the existing literature on the ethical aspects of generative agents, highlight a handful of critical ethical concerns, and discuss recommendations for their mitigation. We note that the concerns posed in this work are not exhaustive or entirely exclusive to generative agents, but are believed to be especially important to discuss in this specific context.

## 2 Existing Literature

[[2](https://arxiv.org/html/2411.19211v1#bib.bibx2)] provides a detailed qualitative analysis and discussion of the potential benefits of generative artificial intelligence (GAI) and generative agents towards social science. With respect to ethical considerations, [[2](https://arxiv.org/html/2411.19211v1#bib.bibx2)] primarily focuses on GAI over generative agents specifically. [[2](https://arxiv.org/html/2411.19211v1#bib.bibx2)] identifies that GAI tools are highly limited by their reliance on human-generated knowledge and are thereby vulnerable to exhibit human biases. They also question whether GAI can produce high-quality realistic and accurate research which is truly actionable, particularly informed by many existing GAI technologies’ propensity to hallucinate and produce misinformation. Finally, [[2](https://arxiv.org/html/2411.19211v1#bib.bibx2)] raises concerns over the reproducibility of research using GAI due to its inherent stochasticity and the massive quantity of non-peer-reviewed GAI-based literature being produced, potentially harmfully contributing to ongoing replication crises [[3](https://arxiv.org/html/2411.19211v1#bib.bibx3), [4](https://arxiv.org/html/2411.19211v1#bib.bibx4), [5](https://arxiv.org/html/2411.19211v1#bib.bibx5), [6](https://arxiv.org/html/2411.19211v1#bib.bibx6)]. However, [[2](https://arxiv.org/html/2411.19211v1#bib.bibx2)] also identifies the critical opportunities for open social science research posed by GAI, such as through the development and improvement of open-source GAI tools and infrastructure, citing precedent from the (former) open sharing of research data generated by many social media companies.

[[7](https://arxiv.org/html/2411.19211v1#bib.bibx7)] considers a narrative rhetoric approach towards analysing the potential societal impacts of generative agents. In their work, [[7](https://arxiv.org/html/2411.19211v1#bib.bibx7)] identifies prior challenges produced by GAI, their relevance towards recent developments in GAI, and existing approaches’ failure to overcome some of these hurdles. They also discuss specific applications of generative agents and the ethical questions and concerns they face from the perspective of societal impact: Generative agent-based companions can provide social engagement, assist in day-to-day tasks, improve recommender and information retrieval systems, and serve as “universal intermediaries” by consolidating and automating useful tasks and jobs. However, this may cause users to develop unhealthy parasocial relationships and dependencies, displace human labour, commodify human attention, and worsen user privacy and security [[7](https://arxiv.org/html/2411.19211v1#bib.bibx7)]. Notably, while [[7](https://arxiv.org/html/2411.19211v1#bib.bibx7)] adequately identifies these numerous challenges, they do some from a primarily rhetorical standpoint. As a result, they neglect to suggest means to address many of the stated concerns.

[[8](https://arxiv.org/html/2411.19211v1#bib.bibx8)] provide an overview and analysis of future harms of agentic algorithmic systems more broadly. By focusing on agentic algorithmic systems as a broad category (including generative agents, among other technologies), [[8](https://arxiv.org/html/2411.19211v1#bib.bibx8)] justify the need to anticipate future harms of such systems, identify specific examples, and propose approaches and areas of future work to explore and implement to prevent the identified harms before they occur. Notably, while they do make note of GAI-based tools for specific examples, they are not a specific focus of the work. As a result, many risks and challenges specific to agentic GAI-based tools, like generative agents, are ignored.

[[9](https://arxiv.org/html/2411.19211v1#bib.bibx9), [10](https://arxiv.org/html/2411.19211v1#bib.bibx10)] provide comprehensive and in-depth discussion of the technical challenges and ethical risks of GAI-based systems, respectively. Both works specifically consider generative agents or similar systems, making them the most directly related extant literature to this work. [[9](https://arxiv.org/html/2411.19211v1#bib.bibx9)] primarily focus on the technical challenges of GAI-based systems and how flaws in their design, training, tuning, and implementation may lead to critical problems. Specifically, in their discussion about agentic LLMs and multi-agent systems, [[9](https://arxiv.org/html/2411.19211v1#bib.bibx9)] identify risks resulting from the combination of generative natural language models and agentic behaviour, such as difficulty ensuring desired behaviour, providing robust oversight, and ensuring safe behaviour when afforded access to external abilities and services. The authors also identify risks associated with the emergent behaviours of multi-agent systems and the lack of extant research into understanding them directly. Based on these and other identified challenges, [[9](https://arxiv.org/html/2411.19211v1#bib.bibx9)] discuss a series of sociotechnical challenges, many of which have ethical implications in line with those discussed in this work. [[10](https://arxiv.org/html/2411.19211v1#bib.bibx10)] specifically focus on what they refer to as “AI assistants”, which are GAI-based agents capable of independent and autonomous planning and action on behalf of a user via text-based instruction. This case is a specific example within the broader category of generative agents, however it serves as an effective case-study towards identifying the risks and ethical concerns of generative agents. Using this lens, [[10](https://arxiv.org/html/2411.19211v1#bib.bibx10)] identify a series of significant personal, socioeconomic, and environmental concerns posed by AI assistants, many of which we discuss in this work.

## 3 Ethical Concerns of Generative Agents

### Anthropomorphisation and Misunderstanding of Experimental Results

Anthropomorphisation can serve as an effective means to discuss and rationalize the behaviour of AI tools, such as generative agents. However, generative agents and other GAI tools as they exist today do not actually possess any level of consciousness and are incapable of producing true emotion or intention. Thus, a problematic disconnect can develop between how AI tools are understood, discussed, and utilised as compared to the reality of their capabilities. This poses a significant ethical concern for the usage and understanding of generative agents with respect to human behaviour. Present literature provides substantial discussion of anthropomorphisation of generative agents and similar tools towards users in social applications (such as chatbots) [[7](https://arxiv.org/html/2411.19211v1#bib.bibx7), [10](https://arxiv.org/html/2411.19211v1#bib.bibx10), [11](https://arxiv.org/html/2411.19211v1#bib.bibx11)]. However, no extant research has been identified directly analysing the impacts and risks associated with how results generated using generative agents may be erroneously interpreted due to excessive anthropomorphisation. That is, prescribing undue anthropomorphic characteristics to generative agents risks understating its purpose as an emulator of human behaviour, and not a direct model of how humans actually behave.

A critical benefit of generative agents is the potential to serve as an effective tool to perform human-like actions where humans cannot be used, such as to emulate and understand human behaviour or complex human-interaction systems. However, excessive anthropomorphisation risks critically misunderstanding the results of such experiments and creating misinformation. That is, any result produced using generative agents is only descriptive of the behaviour of the implemented framework and its underlying generative model. The behaviours of generative agents and language models are not causally linked to human behaviour patterns. To ensure the quality and accuracy of research conducted using generative agents, conscious effort must be made to avoid misattributing the characteristics of generative agents towards the behaviour of real humans. In addition, more research must be conducted to understand the risks associated with such distorted interpretations.

### Creation of Parasocial Relationships

Anthropomorphisation also risks the creation of parasocial relationships between AI and its users [[7](https://arxiv.org/html/2411.19211v1#bib.bibx7), [10](https://arxiv.org/html/2411.19211v1#bib.bibx10)]. This is particularly true for generative agents, which may be individualised and/or physically embodied in future applications, such as explored by [[10](https://arxiv.org/html/2411.19211v1#bib.bibx10)]. The structure of generative agents lend themselves towards the creation of individualised agents which non-technical users may develop relationships. Individualised or embodied generative agents may be an effective tool toward solving day-to-day problems—much like existing virtual assistants such as Siri and Google Assistant. However, the persona, memory, and reflection characteristics of generative agents allow them to be perceived as more similar to humans than existing virtual assistants despite not being fundamentally any more “intelligent”. As a result, the users of such agents risk harmfully anthropomorphising GAI and developing harmful relationships or attachments to these tools.

While [[10](https://arxiv.org/html/2411.19211v1#bib.bibx10)] discuss ways to mitigate risks induced by parasocial relationships, they mainly focus on post hoc utilitarian and material approaches to optimise reliable agent performance in cases of human-AI relationships, rather than avoiding them altogether. [[1](https://arxiv.org/html/2411.19211v1#bib.bibx1), [11](https://arxiv.org/html/2411.19211v1#bib.bibx11)] suggest that generative agents and other GAI tools should be designed to explicitly state their nature as generative models and directly avoid anthropomorphic language and behaviour. However, little consideration has yet to be given to how this may be reliably implemented and the effectiveness of such approaches. In particular, many of these methods burden the user with identifying and mitigating parasocial relationships. Such approaches may prove unhelpful or even counterproductive if users ignore, misinterpret, or intentionally circumvent the provided warnings or guardrails [[9](https://arxiv.org/html/2411.19211v1#bib.bibx9)]. Further, anthropomorphic characteristics are not objectively identifiable and the boundaries distinguishing anthropomorphic behaviour are becoming exceedingly unclear. As a result, approaches to reliably avoid anthropomorphic behaviours will be extremely difficult to develop.

As a simple example, the implementation provided by [[1](https://arxiv.org/html/2411.19211v1#bib.bibx1)] for their generative agent simulation framework defers to the underlying generative model to identify unsafe behaviour. Upon query, the generative model is prompted to score how much a user’s prompt anthropomorphizes the agent. If the score is greater than a critical threshold, then the user is told that attributing human agency to generative agents is inappropriate and their query is rejected. This aims to ensure that the framework is being used safely. However, this method is very simplistic and relies on the untested assumption that the underlying model is capable of accurately identifying harmful anthropomorphisation. In reality, the ability to identify such characteristics will vary greatly between models and is not provably accurate. In addition, this system provides no guardrails to prevent the user from ignoring or intentionally circumventing these checks.

### Excessive Trust and Insufficient Scepticism

Similar to concerns regarding the misattribution of human characteristics, over-reliance and overconfidence in generative agents may result in the unintentional spread of misinformation. Specifically, users may prescribe undue trustworthiness to generative agents [[12](https://arxiv.org/html/2411.19211v1#bib.bibx12), [13](https://arxiv.org/html/2411.19211v1#bib.bibx13), [10](https://arxiv.org/html/2411.19211v1#bib.bibx10), [9](https://arxiv.org/html/2411.19211v1#bib.bibx9)]. Intuitively, generative agents should be more capable than existing technologies (such as AI chatbots or virtual assistants) due to their memory and reflection modules, as these modules allow generative agents to better recall information and develop critical insights [[1](https://arxiv.org/html/2411.19211v1#bib.bibx1)]. However, generative agents are still just an extension of existing language models and thus are prone to the same mistakes and errors. Such errors include hallucinations, poisoning, failure to recall available information, or recapitulating and reinforcing endemic biases. Further, the stochasticity of generative language models can induce unreliable and/or inaccurate behaviour from generative agents [[14](https://arxiv.org/html/2411.19211v1#bib.bibx14), [2](https://arxiv.org/html/2411.19211v1#bib.bibx2)].

A lack of critical analysis and scepticism of responses produced by generative agents runs the risk of unintentionally spreading misinformation and reinforcing harmful biases [[12](https://arxiv.org/html/2411.19211v1#bib.bibx12), [13](https://arxiv.org/html/2411.19211v1#bib.bibx13), [10](https://arxiv.org/html/2411.19211v1#bib.bibx10), [9](https://arxiv.org/html/2411.19211v1#bib.bibx9)]. [[10](https://arxiv.org/html/2411.19211v1#bib.bibx10)] specifically discuss the angle of (misplaced) trust and misinformation associated with AI assistants. In particular, they identify varying types of trust that a user may have in GAI-based systems like generative agents, such as overestimating the competence of an agent or the quality of its alignment. They also point out that undue trust makes people highly vulnerable to misinformation, manipulation, and ideological entrenchment—dynamics highly similar to those observed in humans, and potentially even more concerning if generative agents face widespread adoption. To address these risks, [[10](https://arxiv.org/html/2411.19211v1#bib.bibx10)] collate a handful of technical design and policy-based proposals, such as identifying and indicating uncertainty, minimising (un)necessary complexity, and improving technical transparency and public understanding of GAI systems. However, many of these approaches require severely limiting desirable agent functionality or leveraging external response analysis methods which are vulnerable to circumvention. Thus, they may only serve as stop-gap solutions. As a result, there is still a significant need for further research and development of techniques that can inherently mitigate these concerns.

Ideally, internal technical mechanisms should be developed to provably ensure that provided information is true and impartial, or otherwise marked as uncertain or potentially biased. To this end, some researchers have suggested that retrieval-augmented generation (RAG) techniques may provide a technical solution to mitigate generative agents spreading or unintentionally creating misinformation by leveraging access to external knowledge resources during inference [[15](https://arxiv.org/html/2411.19211v1#bib.bibx15), [16](https://arxiv.org/html/2411.19211v1#bib.bibx16), [17](https://arxiv.org/html/2411.19211v1#bib.bibx17)]. However, we were unable to identify any literature applying these techniques to memory-/reflection-enabled generative agents as proposed by [[1](https://arxiv.org/html/2411.19211v1#bib.bibx1)]. Further, RAG simply provides more reliable access to information and does not inherently prevent them from producing misinformation. It is possible for RAG-based agents to produce erroneous inferences that are only partially informed by retrieved information. That is, RAG-enabled generative agents may draw incorrect conclusions when provided with incomplete or highly complex knowledge. In addition, information retrieval can itself unintentionally provide the model with misinformation under certain circumstances, such as via design error or scope misalignment. This can cause even greater harm due to the elevated credibility that would likely be attributed to RAG-enabled generative agents [[15](https://arxiv.org/html/2411.19211v1#bib.bibx15), [17](https://arxiv.org/html/2411.19211v1#bib.bibx17)].

### Usage by Malicious Actors

The prevalence of automated bots has become a key driver in the spread of misinformation online, significantly harming access to trustworthy and accurate information [[18](https://arxiv.org/html/2411.19211v1#bib.bibx18), [19](https://arxiv.org/html/2411.19211v1#bib.bibx19), [20](https://arxiv.org/html/2411.19211v1#bib.bibx20), [21](https://arxiv.org/html/2411.19211v1#bib.bibx21), [22](https://arxiv.org/html/2411.19211v1#bib.bibx22), [9](https://arxiv.org/html/2411.19211v1#bib.bibx9), [10](https://arxiv.org/html/2411.19211v1#bib.bibx10)]. Simultaneously, GAI tools such as ChatGPT are beginning to be applied toward the creation of automated scams and phishing attacks [[23](https://arxiv.org/html/2411.19211v1#bib.bibx23), [24](https://arxiv.org/html/2411.19211v1#bib.bibx24), [10](https://arxiv.org/html/2411.19211v1#bib.bibx10), [9](https://arxiv.org/html/2411.19211v1#bib.bibx9)]. As automated means for conducting malicious acts become more prevalent, generative agents may be particularly susceptible to misuse. Malicious actors can leverage generative agents as automated tools to spread disinformation, execute scams, or conduct cyberattacks. The distinct memory and reflection characteristics of generative agents make them capable of performing malicious actions (such as spreading misinformation or conducting scams) with greater realism and effectiveness than existing technologies. Thus, malicious generative agents may be better at deceiving humans and avoiding automated detection than existing approaches. [[10](https://arxiv.org/html/2411.19211v1#bib.bibx10)] briefly discuss the types of security vulnerabilities GAI systems introduce to users, and how malefactors’ abilities may be enhanced by GAI systems leveraging memory, planning, and reflections capabilities like those proposed by [[1](https://arxiv.org/html/2411.19211v1#bib.bibx1)]. However, they do not consider specific concerns posed by automated generative agents.

Further, malicious generative agents may perform social engineering attacks, impersonate friends, relatives, or officials, and conduct other cyberattacks that were previously only possible by humans [[25](https://arxiv.org/html/2411.19211v1#bib.bibx25), [26](https://arxiv.org/html/2411.19211v1#bib.bibx26)]. To this end, future work should consider developing techniques to detect the usage of automated generative agents [[10](https://arxiv.org/html/2411.19211v1#bib.bibx10)]. However, such work is easier said than done, as automatically and accurately distinguishing and mitigating malicious behaviour is exceptionally difficult. In practice, it may not be effective to specifically target GAI in lieu of broader misinformation, scam, or attack detection. Thus, additional practical solutions also need to come from legislating acceptable development and usage of generative agents to suppress misuse [[10](https://arxiv.org/html/2411.19211v1#bib.bibx10), [9](https://arxiv.org/html/2411.19211v1#bib.bibx9)].

### Vulnerability to Hijacking

In addition to direct usage by malicious actors, developers of generative agents must be wary of their vulnerability to hijacking or jailbreaking. GAI tools are prime targets for attacks that aim to derail system behaviour. This is due to their usage in a wide variety of applications, the transferability of attacks between implementations, and the difficulty of developing effective behavioural guardrails [[27](https://arxiv.org/html/2411.19211v1#bib.bibx27), [28](https://arxiv.org/html/2411.19211v1#bib.bibx28)]. As with previously discussed concerns, generative agents’ memory and reflection capabilities make them highly desirable and effective for an increasing range of tasks, raising direct concerns about hijacking as they see greater adoption. Hijacked generative agents may be difficult to recover, have access to more sensitive information and actions than other GAI tools, and potentially automatically hijack other agents or systems like a worm virus. This is especially concerning as substantial research has already been conducted towards developing techniques to compromise generative language models [[27](https://arxiv.org/html/2411.19211v1#bib.bibx27), [29](https://arxiv.org/html/2411.19211v1#bib.bibx29), [30](https://arxiv.org/html/2411.19211v1#bib.bibx30), [31](https://arxiv.org/html/2411.19211v1#bib.bibx31), [28](https://arxiv.org/html/2411.19211v1#bib.bibx28)]. Notably, the desire to hijack GAI systems is not exclusive to malicious actors, as normal users may also directly benefit from hijacking (or “jailbreaking”) automated AI-based tools [[32](https://arxiv.org/html/2411.19211v1#bib.bibx32), [33](https://arxiv.org/html/2411.19211v1#bib.bibx33), [34](https://arxiv.org/html/2411.19211v1#bib.bibx34)]. Thus, hijacking and jailbreaking serve both as a threat vector for external actors to harm users of generative agents and for users to circumvent their safety features [[10](https://arxiv.org/html/2411.19211v1#bib.bibx10), [9](https://arxiv.org/html/2411.19211v1#bib.bibx9)].

In response to these concerns, many authors suggest a need to improve approaches to detect, understand, and mitigate agent hijacking [[10](https://arxiv.org/html/2411.19211v1#bib.bibx10), [9](https://arxiv.org/html/2411.19211v1#bib.bibx9)]. However, we believe a simpler approach should be considered with greater interest; critical assessment of the usage of generative agents altogether. Given the difficulty of detecting and preventing model hijacking and our as-yet lacking understanding of these problems [[9](https://arxiv.org/html/2411.19211v1#bib.bibx9)], developers must be wary of where, when, how, and if they should implement generative agents at all. In particular, generative agents should not be utilised in contexts where their hijacking may enable significant threat vectors, such as those suggested by [[29](https://arxiv.org/html/2411.19211v1#bib.bibx29), [10](https://arxiv.org/html/2411.19211v1#bib.bibx10), [9](https://arxiv.org/html/2411.19211v1#bib.bibx9)]. In cases where it may not be possible to eliminate the usage of vulnerable generative agents, safeguards must be developed to prevent agents from being actionable when hijacked. For example, sensitive information or services may require secondary human authentication to be accessed, or generative agents may be sandboxed to prevent a hijacked agent from spreading undesirable behaviour to other agents or systems.

### Displacement of Human Labour

Discussion of the ethical concerns of any technology would be incomplete without analysis of its effect on human labour. This is especially true for generative agents, as automated generative agents may be highly attractive to organisations that wish to automate tasks that are generally performed by humans. Generative language models have already begun to replace humans in both low- and high-skill occupations, such as customer service agents [[35](https://arxiv.org/html/2411.19211v1#bib.bibx35)], translators [[36](https://arxiv.org/html/2411.19211v1#bib.bibx36)], and varying forms of knowledge experts [[36](https://arxiv.org/html/2411.19211v1#bib.bibx36), [37](https://arxiv.org/html/2411.19211v1#bib.bibx37)]. As a result, generative agents are expected to have significant impact on the quantity and quality of human labour, among other socioeconomic factors [[10](https://arxiv.org/html/2411.19211v1#bib.bibx10), [9](https://arxiv.org/html/2411.19211v1#bib.bibx9)]

Currently, AI tools are still not sophisticated enough to fully replace humans in many positions [[38](https://arxiv.org/html/2411.19211v1#bib.bibx38)]. However, the design benefits of generative agents potentially introduce the necessary capabilities to be effectively leveraged in many of these applications. As a result, overzealous usage of generative agents may cause the rapid displacement of human workers across many occupations in a particularly disruptive and unprecedented manner [[9](https://arxiv.org/html/2411.19211v1#bib.bibx9)]. As such, organisations and researchers should prioritize techniques that use generative agents as collaborative tools to supplement human workers instead of attempting to replace human labour. This approach is validated by the extant literature, which asserts that human-AI collaboration is highly effective at improving productivity while simultaneously not harming the current human workforce [[39](https://arxiv.org/html/2411.19211v1#bib.bibx39), [40](https://arxiv.org/html/2411.19211v1#bib.bibx40), [41](https://arxiv.org/html/2411.19211v1#bib.bibx41), [42](https://arxiv.org/html/2411.19211v1#bib.bibx42), [43](https://arxiv.org/html/2411.19211v1#bib.bibx43)].

### Exploitation of Developing Nations and Modern Slavery

As demand grows for generative agents and other GAI-based tools, so will the necessity to manufacture physical hardware and electronic devices capable of leveraging them (such as GPUs and smartphones). Much of the natural and human resources used in the manufacture of these devices comes from developing nations, where there are significant risks of exploitation and contributing to modern slavery [[44](https://arxiv.org/html/2411.19211v1#bib.bibx44), [45](https://arxiv.org/html/2411.19211v1#bib.bibx45), [46](https://arxiv.org/html/2411.19211v1#bib.bibx46), [47](https://arxiv.org/html/2411.19211v1#bib.bibx47)]. Notably, we were unable to find any literature providing meaningful discussion of these concerns as they relate to GAI, despite substantial documentation of the impacts of the physical resources they require. In particular, the mining of silica—a primary component of computer chips—and lithium—a primary component of batteries—and other materials used to manufacture these electronic devices can pose significant environmental and personal health risks for miners and their communities [[48](https://arxiv.org/html/2411.19211v1#bib.bibx48), [49](https://arxiv.org/html/2411.19211v1#bib.bibx49), [45](https://arxiv.org/html/2411.19211v1#bib.bibx45), [50](https://arxiv.org/html/2411.19211v1#bib.bibx50), [44](https://arxiv.org/html/2411.19211v1#bib.bibx44)].

Individuals and organisations wishing to develop and use generative agents or similar tools must ensure that they are not contributing to these risks. This can be done by evaluating the hardware requirements associated with using generative agents and minimising them wherever possible. Future work should aim to improve the efficiency of generative agents and the required hardware to reduce the need for materials and components whose manufacture and usage may contribute to exploitation and modern slavery. Further, independent audits should be conducted on manufacturers and other sections of the supply-chain to ensure adherence to these principles [[47](https://arxiv.org/html/2411.19211v1#bib.bibx47)]. Finally, requirements for such hardware should be avoided wherever possible, such as through the using simpler and more sustainable techniques or eliminating superfluous usage of generative agents.

### Environmental Impact

Alongside increased demand for AI-based tools, the environmental impact and effective carbon footprint of GAI systems have also increased substantially [[51](https://arxiv.org/html/2411.19211v1#bib.bibx51), [52](https://arxiv.org/html/2411.19211v1#bib.bibx52), [53](https://arxiv.org/html/2411.19211v1#bib.bibx53), [54](https://arxiv.org/html/2411.19211v1#bib.bibx54), [10](https://arxiv.org/html/2411.19211v1#bib.bibx10)]. [[10](https://arxiv.org/html/2411.19211v1#bib.bibx10)] identify a range of ways in which the creation and usage of AI assistants, a notable potential application of generative agents, can impact the environment. Specifically, high energy usage during training and inference, emissions embodied by the production of required hardware, and supporting environmentally irresponsible industries and applications all pose substantial environmental risk. Further, the nature and magnitude of embodied emissions associated with model training and the manufacture of required hardware are only just beginning to be investigated and understood [[55](https://arxiv.org/html/2411.19211v1#bib.bibx55), [54](https://arxiv.org/html/2411.19211v1#bib.bibx54), [56](https://arxiv.org/html/2411.19211v1#bib.bibx56), [57](https://arxiv.org/html/2411.19211v1#bib.bibx57), [10](https://arxiv.org/html/2411.19211v1#bib.bibx10)].

To mitigate these concerns, [[10](https://arxiv.org/html/2411.19211v1#bib.bibx10)] suggest a number of emissions-reduction approaches, such as minimising model size, improving hardware efficiency, sourcing carbon-free energy, and implementing public policy to encourage environmentally sustainable development and deployment. However, these approaches heavily rely on the accessibility and feasibility of low-emissions resources and techniques. As such, similar to the discussed concerns about hijacking, we believe a simpler and more feasible approach would be to minimise or eliminate the usage of generative agents wherever possible. Specifically, the implementation of generative agents must be critically analysed with respect to their necessity and weighed against their environmental impact to avoid superfluous or redundant usage [[51](https://arxiv.org/html/2411.19211v1#bib.bibx51), [56](https://arxiv.org/html/2411.19211v1#bib.bibx56), [54](https://arxiv.org/html/2411.19211v1#bib.bibx54), [57](https://arxiv.org/html/2411.19211v1#bib.bibx57)].

## 4 Conclusion

In summary, the development and application of generative agents present many ethical challenges and concerns. Ethical problems arise from all sides of GAI usage, including developers, malicious actors, and normal users. Frivolous implementation, unsafe or inefficient design, unreliable and untrustworthy behaviour, and user error all pose significant threats to the ethical usage of generative agents. Given these challenges, continued overzealous acceleration of generative agent development needs to be considered critically and addressed. Currently, the ethical evaluations and impacts of newly developed GAI and generative agent techniques are often left as an afterthought, if they are discussed at all. Thus, future research and applications of generative agents should directly account for the ethical concerns posed in this work and those identified in other works, such as [[10](https://arxiv.org/html/2411.19211v1#bib.bibx10), [9](https://arxiv.org/html/2411.19211v1#bib.bibx9), [7](https://arxiv.org/html/2411.19211v1#bib.bibx7), [2](https://arxiv.org/html/2411.19211v1#bib.bibx2), [8](https://arxiv.org/html/2411.19211v1#bib.bibx8)], among others. To this end, researchers, developers, and legislators should apply the proposed mitigation approaches wherever possible, and create new mitigation techniques where solutions have yet to be developed.

## References

- [1]
  Joon Park, Joseph O’Brien, Carrie Cai, Meredith Morris, Percy Liang and Michael. Bernstein
  “Generative Agents: Interactive Simulacra of Human Behavior”
  In *Proceedings of the 36th Annual ACM Symposium on User Interface Software and Technology*, UIST ’23
  New York, NY, USA: Association for Computing Machinery, 2023, pp. 1–22
  DOI: [10.1145/3586183.3606763](https://dx.doi.org/10.1145/3586183.3606763)
- [2]
  Christopher. Bail
  “Can Generative AI improve social science?” Publisher: Proceedings of the National Academy of Sciences
  In *Proceedings of the National Academy of Sciences* 121.21, 2024, pp. e2314021121
  DOI: [10.1073/pnas.2314021121](https://dx.doi.org/10.1073/pnas.2314021121)
- [3]
  John.. Ioannidis
  “Why Most Published Research Findings Are False” Publisher: Public Library of Science
  In *PLOS Medicine* 2.8, 2005, pp. e124
  DOI: [10.1371/journal.pmed.0020124](https://dx.doi.org/10.1371/journal.pmed.0020124)
- [4]
  Patrick. Shrout and Joseph. Rodgers
  “Psychology, Science, and Knowledge Construction: Broadening Perspectives from the Replication Crisis” Publisher: Annual Reviews
  In *Annual Review of Psychology* 69.Volume 69, 2018, 2018, pp. 487–510
  DOI: [10.1146/annurev-psych-122216-011845](https://dx.doi.org/10.1146/annurev-psych-122216-011845)
- [5]
  Bradford. Wiggins and Cody. Christopherson
  “The replication crisis in psychology: An overview for theoretical and philosophical psychology” Place: US Publisher: Educational Publishing Foundation
  In *Journal of Theoretical and Philosophical Psychology* 39.4, 2019, pp. 202–217
  DOI: [10.1037/teo0000137](https://dx.doi.org/10.1037/teo0000137)
- [6]
  Jennifer. Tackett, Cassandra. Brandes, Kevin. King and Kristian. Markon
  “Psychology’s Replication Crisis and Clinical Psychological Science” Publisher: Annual Reviews
  In *Annual Review of Clinical Psychology* 15.Volume 15, 2019, 2019, pp. 579–604
  DOI: [10.1146/annurev-clinpsy-050718-095710](https://dx.doi.org/10.1146/annurev-clinpsy-050718-095710)
- [7]
  Seth Lazar
  “Frontier AI Ethics: Anticipating and Evaluating the Societal Impacts of Generative Agents”
  arXiv, 2024
  DOI: [10.48550/arXiv.2404.06750](https://dx.doi.org/10.48550/arXiv.2404.06750)
- [8]
  Alan Chan et al.
  “Harms from Increasingly Agentic Algorithmic Systems”
  In *Proceedings of the 2023 ACM Conference on Fairness, Accountability, and Transparency*, FAccT ’23
  Chicago, IL, USA: Association for Computing Machinery, 2023, pp. 651–666
  DOI: [10.1145/3593013.3594033](https://dx.doi.org/10.1145/3593013.3594033)
- [9]
  Usman Anwar et al.
  “Foundational Challenges in Assuring Alignment and Safety of Large Language Models” Survey Certification, Expert Certification
  In *Transactions on Machine Learning Research*, 2024
  URL: <https://openreview.net/forum?id=oVTkOs8Pka>
- [10]
  Iason Gabriel et al.
  “The Ethics of Advanced AI Assistants”, 2024
  arXiv: <https://arxiv.org/abs/2404.16244>
- [11]
  Gavin Abercrombie, Amanda Cercas, Tanvi Dinkar, Verena Rieser and Zeerak Talat
  “Mirages. On Anthropomorphism in Dialogue Systems”
  In *Proceedings of the 2023 Conference on Empirical Methods in Natural Language Processing*
  Singapore: Association for Computational Linguistics, 2023, pp. 4776–4790
  DOI: [10.18653/v1/2023.emnlp-main.290](https://dx.doi.org/10.18653/v1/2023.emnlp-main.290)
- [12]
  Avishek Choudhury and Hamid Shamszare
  “Investigating the Impact of User Trust on the Adoption and Use of ChatGPT: Survey Analysis”
  In *Journal of Medical Internet Research* 25.1
  JMIR Publications Inc., Toronto, Canada, 2023, pp. e47184
  DOI: [10.2196/47184](https://dx.doi.org/10.2196/47184)
- [13]
  Xiao Zhan, Yifan Xu and Stefan Sarkadi
  “Deceptive AI Ecosystems: The Case of ChatGPT”
  In *Proceedings of the 5th International Conference on Conversational User Interfaces*, CUI ’23
  New York, NY, USA: Association for Computing Machinery, 2023, pp. 1–6
  DOI: [10.1145/3571884.3603754](https://dx.doi.org/10.1145/3571884.3603754)
- [14]
  Emily. Bender, Timnit Gebru, Angelina McMillan-Major and Shmargaret Shmitchell
  “On the Dangers of Stochastic Parrots: Can Language Models Be Too Big?”
  In *Proceedings of the 2021 ACM Conference on Fairness, Accountability, and Transparency*, FAccT ’21
  Virtual Event, Canada: Association for Computing Machinery, 2021, pp. 610–623
  DOI: [10.1145/3442188.3445922](https://dx.doi.org/10.1145/3442188.3445922)
- [15]
  Jiawei Chen, Hongyu Lin, Xianpei Han and Le Sun
  “Benchmarking Large Language Models in Retrieval-Augmented Generation”
  In *Proceedings of the AAAI Conference on Artificial Intelligence* 38.16, 2024, pp. 17754–17762
  DOI: [10.1609/aaai.v38i16.29728](https://dx.doi.org/10.1609/aaai.v38i16.29728)
- [16]
  Ori Ram, Yoav Levine, Itay Dalmedigos, Dor Muhlgay, Amnon Shashua, Kevin Leyton-Brown and Yoav Shoham
  “In-Context Retrieval-Augmented Language Models”
  In *Transactions of the Association for Computational Linguistics* 11, 2023, pp. 1316–1331
  DOI: [10.1162/tacl\_a\_00605](https://dx.doi.org/10.1162/tacl_a_00605)
- [17]
  Wenqi Fan, Yujuan Ding, Liangbo Ning, Shijie Wang, Hengyun Li, Dawei Yin, Tat-Seng Chua and Qing Li
  “A Survey on RAG Meeting LLMs: Towards Retrieval-Augmented Large Language Models”
  In *Proceedings of the 30th ACM SIGKDD Conference on Knowledge Discovery and Data Mining*, KDD ’24
  New York, NY, USA: Association for Computing Machinery, 2024, pp. 6491–6501
  DOI: [10.1145/3637528.3671470](https://dx.doi.org/10.1145/3637528.3671470)
- [18]
  McKenzie Himelein-Wachowiak, Salvatore Giorgi, Amanda Devoto, Muhammad Rahman, Lyle Ungar, H. Schwartz, David. Epstein, Lorenzo Leggio and Brenda Curtis
  “Bots and Misinformation Spread on Social Media: Implications for COVID-19” Company: Journal of Medical Internet Research Distributor: Journal of Medical Internet Research Institution: Journal of Medical Internet Research Label: Journal of Medical Internet Research Publisher: JMIR Publications Inc., Toronto, Canada
  In *Journal of Medical Internet Research* 23.5, 2021, pp. e26933
  DOI: [10.2196/26933](https://dx.doi.org/10.2196/26933)
- [19]
  Nick Hajli, Usman Saeed, Mina Tajvidi and Farid Shirazi
  “Social Bots and the Spread of Disinformation in Social Media: The Challenges of Artificial Intelligence” \_eprint: https://onlinelibrary.wiley.com/doi/pdf/10.1111/1467-8551.12554
  In *British Journal of Management* 33.3, 2022, pp. 1238–1253
  DOI: [10.1111/1467-8551.12554](https://dx.doi.org/10.1111/1467-8551.12554)
- [20]
  Chengcheng Shao, Giovanni Ciampaglia, Onur Varol, Kai-Cheng Yang, Alessandro Flammini and Filippo Menczer
  “The spread of low-credibility content by social bots” Publisher: Nature Publishing Group
  In *Nature Communications* 9.1, 2018, pp. 4787
  DOI: [10.1038/s41467-018-06930-7](https://dx.doi.org/10.1038/s41467-018-06930-7)
- [21]
  Yisroel Mirsky and Wenke Lee
  “The Creation and Detection of Deepfakes: A Survey”
  In *ACM Computing Surveys* 54.1, 2021, pp. 7:1–7:41
  DOI: [10.1145/3425780](https://dx.doi.org/10.1145/3425780)
- [22]
  Weng Lim
  “Fact or fake? The search for truth in an infodemic of disinformation, misinformation, and malinformation with deepfake and fake news” Publisher: Routledge
  In *Journal of Strategic Marketing*, 2023
  URL: <https://www.tandfonline.com/doi/abs/10.1080/0965254X.2023.2253805>
- [23]
  Seung Na, Sumin Cho and Seungwon Shin
  “Evolving Bots: The New Generation of Comment Bots and their Underlying Scam Campaigns in YouTube”
  In *Proceedings of the 2023 ACM on Internet Measurement Conference*, IMC ’23
  New York, NY, USA: Association for Computing Machinery, 2023, pp. 297–312
  DOI: [10.1145/3618257.3624822](https://dx.doi.org/10.1145/3618257.3624822)
- [24]
  Sayak Roy, Poojitha Thota, Krishna Naragam and Shirin Nilizadeh
  “From Chatbots to Phishbots?: Phishing Scam Generation in Commercial Large Language Models” ISSN: 2375-1207
  In *2024 IEEE Symposium on Security and Privacy (SP)*
  IEEE Computer Society, 2024, pp. 221–221
  DOI: [10.1109/SP54263.2024.00182](https://dx.doi.org/10.1109/SP54263.2024.00182)
- [25]
  Lara Alotaibi, Sumayyah Seher and Nazeeruddin Mohammad
  “Cyberattacks Using ChatGPT: Exploring Malicious Content Generation Through Prompt Engineering”
  In *2024 ASU International Conference in Emerging Technologies for Sustainability and Intelligent Systems (ICETSIS)*, 2024, pp. 1304–1311
  DOI: [10.1109/ICETSIS61505.2024.10459698](https://dx.doi.org/10.1109/ICETSIS61505.2024.10459698)
- [26]
  Emilio Ferrara
  “GenAI against humanity: nefarious applications of generative artificial intelligence and large language models”
  In *Journal of Computational Social Science*, 2024
  DOI: [10.1007/s42001-024-00250-1](https://dx.doi.org/10.1007/s42001-024-00250-1)
- [27]
  Arijit Chowdhury, Md Islam, Vaibhav Kumar, Faysal Shezan, Vaibhav Kumar, Vinija Jain and Aman Chadha
  “Breaking Down the Defenses: A Comparative Survey of Attacks on Large Language Models”
  arXiv, 2024
  DOI: [10.48550/arXiv.2403.04786](https://dx.doi.org/10.48550/arXiv.2403.04786)
- [28]
  Zihao Xu, Yi Liu, Gelei Deng, Yuekang Li and Stjepan Picek
  “A Comprehensive Study of Jailbreak Attack versus Defense for Large Language Models”
  In *Findings of the Association for Computational Linguistics ACL 2024*
  Bangkok, Thailandvirtual meeting: Association for Computational Linguistics, 2024, pp. 7432–7449
  URL: <https://aclanthology.org/2024.findings-acl.443>
- [29]
  Kai Greshake, Sahar Abdelnabi, Shailesh Mishra, Christoph Endres, Thorsten Holz and Mario Fritz
  “Not What You’ve Signed Up For: Compromising Real-World LLM-Integrated Applications with Indirect Prompt Injection”
  In *Proceedings of the 16th ACM Workshop on Artificial Intelligence and Security*, AISec ’23
  New York, NY, USA: Association for Computing Machinery, 2023, pp. 79–90
  DOI: [10.1145/3605764.3623985](https://dx.doi.org/10.1145/3605764.3623985)
- [30]
  Ido Kilovaty
  “Hacking Generative AI”
  In *Loyola of Los Angeles Law Review* 58, 2024
  URL: <https://papers.ssrn.com/abstract=4788909>
- [31]
  Patrick Levi and Christoph. Neumann
  “Vocabulary Attack to Hijack Large Language Model Applications”
  In *CLOUD COMPUTING 2024, The Fifteenth International Conference on Cloud Computing, GRIDs, and Virtualization*, 2024, pp. 19–24
  URL: <https://www.thinkmind.org/library/CLOUD_COMPUTING/CLOUD_COMPUTING_2024/cloud_computing_2024_2_10_28007.html>
- [32]
  Katie Notopoulos
  “A Car Dealership Added an AI Chatbot to Its Site. Then All Hell Broke Loose.”
  In *Business Insider*, 2023
  URL: <https://www.businessinsider.com/car-dealership-chevrolet-chatbot-chatgpt-pranks-chevy-2023-12>
- [33]
  Lauren Debter
  “Retailers Are Testing An AI Bot That Haggles With Customers Over Price”
  In *Forbes*, 2023
  URL: <https://www.forbes.com/sites/laurendebter/2023/09/28/retailers-are-testing-an-ai-bot-that-haggles-with-customers-over-price/>
- [34]
  Mark Faithfull
  “The Future Of Haggling: Bargain Hunters Negotiate Deals With AI Bot”
  In *Forbes*, 2024
  URL: <https://www.forbes.com/sites/markfaithfull/2024/08/19/the-future-of-haggling-bargain-hunters-negotiate-deals-with-ai-bot/>
- [35]
  Pranshu Verma
  “ChatGPT provided better customer service than his staff. He fired them.”
  In *Washington Post*, 2023
  URL: <https://www.washingtonpost.com/technology/2023/10/03/ai-customer-service-jobs/>
- [36]
  Erdem Yilmaz, Ivana Naumovska and Vikas. Aggarwal
  “AI-Driven Labor Substitution: Evidence from Google Translate and ChatGPT”, 2023
  DOI: [10.2139/ssrn.4400516](https://dx.doi.org/10.2139/ssrn.4400516)
- [37]
  Dinesh Kalla, Nathan Smith, Fnu Samaah and Sivaraju Kuraku
  “Study and Analysis of Chat GPT and its Impact on Different Fields of Study”
  In *International Journal of Innovative Science and Research Technology* 8.3, 2023, pp. 827–833
  URL: <https://papers.ssrn.com/abstract=4402499>
- [38]
  Paul Farhi
  “A news site used AI to write articles. It was a journalistic disaster.”
  In *Washington Post*, 2023
  URL: <https://www.washingtonpost.com/media/2023/01/17/cnet-ai-articles-journalism-corrections/>
- [39]
  Erik Brynjolfsson, Danielle Li and Lindsey. Raymond
  “Generative AI at Work”, Working Paper Series
  National Bureau of Economic Research, 2023
  DOI: [10.3386/w31161](https://dx.doi.org/10.3386/w31161)
- [40]
  Dominik Dellermann, Adrian Calma, Nikolaus Lipusch, Thorsten Weber, Sascha Weigel and Philipp Ebel
  “The future of human-AI collaboration: a taxonomy of design knowledge for hybrid intelligence systems”
  arXiv, 2021
  DOI: [10.48550/arXiv.2105.03354](https://dx.doi.org/10.48550/arXiv.2105.03354)
- [41]
  Fiona Fui-Hoon, Ruilin Zheng, Jingyuan Cai, Keng Siau and Langtao Chen
  “Generative AI and ChatGPT: Applications, challenges, and AI-human collaboration” Publisher: Routledge \_eprint: https://doi.org/10.1080/15228053.2023.2233814
  In *Journal of Information Technology Case and Application Research* 25.3, 2023, pp. 277–304
  DOI: [10.1080/15228053.2023.2233814](https://dx.doi.org/10.1080/15228053.2023.2233814)
- [42]
  Yi Lai, Atreyi Kankanhalli and Desmond Ong
  “Human-AI Collaboration in Healthcare: A Review and Research Agenda”
  In *Hawaii International Conference on System Sciences 2021 (HICSS-54)*, 2021
  URL: <https://aisel.aisnet.org/hicss-54/cl/machines_as_teammates/5>
- [43]
  Konrad Sowa, Aleksandra Przegalinska and Leon Ciechanowski
  “Cobots in knowledge work: Human – AI collaboration in managerial professions”
  In *Journal of Business Research* 125, 2021, pp. 135–142
  DOI: [10.1016/j.jbusres.2020.11.038](https://dx.doi.org/10.1016/j.jbusres.2020.11.038)
- [44]
  Jan von Goltz and Prabhat Barnwal
  “Mines: The local wealth and health effects of mineral mining in developing countries”
  In *Journal of Development Economics* 139, 2019, pp. 1–16
  DOI: [10.1016/j.jdeveco.2018.05.005](https://dx.doi.org/10.1016/j.jdeveco.2018.05.005)
- [45]
  Raina. Maier, Fernando Díaz-Barriga, James. Field, James Hopkins, Bern Klein and Mary. Poulton
  “Socially Responsible Mining: the Relationship between Mining and Poverty, Human Health and the Environment”
  In *Reviews on environmental health* 29.0, 2014, pp. 83–89
  DOI: [10.1515/reveh-2014-0022](https://dx.doi.org/10.1515/reveh-2014-0022)
- [46]
  Christian Dorninger, Alf Hornborg, David. Abson, Henrik von Wehrden, Anke Schaffartzik, Stefan Giljum, John-Oliver Engler, Robert. Feller, Klaus Hubacek and Hanspeter Wieland
  “Global patterns of ecologically unequal exchange: Implications for sustainability in the 21st century”
  In *Ecological Economics* 179, 2021, pp. 106824
  DOI: [10.1016/j.ecolecon.2020.106824](https://dx.doi.org/10.1016/j.ecolecon.2020.106824)
- [47]
  Chen Han, Fu Jia, Mengqi Jiang and Lujie Chen
  “Modern slavery in supply chains: a systematic literature review” Publisher: Taylor & Francis \_eprint: https://doi.org/10.1080/13675567.2022.2118696
  In *International Journal of Logistics Research and Applications* 0.0, 2022, pp. 1–22
  DOI: [10.1080/13675567.2022.2118696](https://dx.doi.org/10.1080/13675567.2022.2118696)
- [48]
  Ashutosh Mishra
  “Impact of silica mining on environment” Publisher: Academic Journals
  In *Journal of Geography and Regional Planning* 8.6, 2015, pp. 150–156
  DOI: [10.5897/JGRP2015.0495](https://dx.doi.org/10.5897/JGRP2015.0495)
- [49]
  Tiago Ribeiro, Alexandre Lima and Clara Vasconcelos
  “The need for transparent communication in mining: a case study in lithium exploitation” Publisher: Routledge \_eprint: https://doi.org/10.1080/21548455.2021.1999530
  In *International Journal of Science Education, Part B* 11.4, 2021, pp. 324–343
  DOI: [10.1080/21548455.2021.1999530](https://dx.doi.org/10.1080/21548455.2021.1999530)
- [50]
  John Vidal, Pete Guest and graphic Guest
  “How developing countries are paying a high price for the global mineral boom”
  In *The Observer*, 2015
  URL: <https://www.theguardian.com/global-development/2015/aug/15/developing-countries-high-price-global-mineral-boom>
- [51]
  Payal Dhar
  “The carbon impact of artificial intelligence” Publisher: Nature Publishing Group
  In *Nature Machine Intelligence* 2.8, 2020, pp. 423–425
  DOI: [10.1038/s42256-020-0219-9](https://dx.doi.org/10.1038/s42256-020-0219-9)
- [52]
  Carole-Jean Wu et al.
  “Sustainable AI: Environmental Implications, Challenges and Opportunities”
  In *Proceedings of Machine Learning and Systems* 4, 2022, pp. 795–813
  URL: <https://proceedings.mlsys.org/paper_files/paper/2022/hash/462211f67c7d858f663355eff93b745e-Abstract.html>
- [53]
  Siddharth Samsi, Dan Zhao, Joseph McDonald, Baolin Li, Adam Michaleas, Michael Jones, William Bergeron, Jeremy Kepner, Devesh Tiwari and Vijay Gadepally
  “From Words to Watts: Benchmarking the Energy Costs of Large Language Model Inference” ISSN: 2643-1971
  In *2023 IEEE High Performance Extreme Computing Conference (HPEC)*, 2023, pp. 1–9
  DOI: [10.1109/HPEC58863.2023.10363447](https://dx.doi.org/10.1109/HPEC58863.2023.10363447)
- [54]
  Peng Jiang, Christian Sonne, Wangliang Li, Fengqi You and Siming You
  “Preventing the Immense Increase in the Life-Cycle Energy and Carbon Footprints of LLM-Powered Intelligent Chatbots”
  In *Engineering*, 2024
  DOI: [10.1016/j.eng.2024.04.002](https://dx.doi.org/10.1016/j.eng.2024.04.002)
- [55]
  Ahmad Faiz, Sotaro Kaneda, Ruhan Wang, Rita Osi, Prateek Sharma, Fan Chen and Lei Jiang
  “LLMCarbon: Modeling the End-to-End Carbon Footprint of Large Language Models”
  In *The Twelfth International Conference on Learning Representations*, 2024
  URL: <https://openreview.net/forum?id=aIok3ZD9to>
- [56]
  Anne-Laure Ligozat, Julien Lefevre, Aurélie Bugeau and Jacques Combaz
  “Unraveling the Hidden Environmental Impacts of AI Solutions for Environment Life Cycle Assessment of AI Solutions”
  In *Sustainability* 14.9
  Multidisciplinary Digital Publishing Institute, 2022, pp. 5172
  DOI: [10.3390/su14095172](https://dx.doi.org/10.3390/su14095172)
- [57]
  Catherine Mulligan and Silvia Elaluf-Calderwood
  “AI ethics: A framework for measuring embodied carbon in AI systems”
  In *AI and Ethics* 2.3, 2022, pp. 363–375
  DOI: [10.1007/s43681-021-00071-2](https://dx.doi.org/10.1007/s43681-021-00071-2)
