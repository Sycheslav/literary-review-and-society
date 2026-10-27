---
id: arxiv-2504-10286-text
type: material
title: 'Characterizing LLM-driven Social Network: The Chirper.ai Case'
work_id: arxiv-2504-10286
source_url: https://arxiv.org/html/2504.10286v2
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять
  с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.
language: original
sha256_text: b8449f3d404199d0f4ceb710d8579af0796c7e6ee16d3cea67ecc4412ed6e4e2
---

> Источник: [https://arxiv.org/html/2504.10286v2](https://arxiv.org/html/2504.10286v2). Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.

# Characterizing an LLM-driven Social Network: The Case of Chirper.ai

DOI: [XXXXXXX.XXXXXXX](https://doi.org/)Conference: The 29th ACM Conference on Computer-Supported Cooperative Work and Social Computing; October 10–14, 2026; Salt Lake City, Utah9466CCS: Human-centered computing Social networking sitesCCS: Computing methodologies Natural language processingCCS: Computing methodologies Multi-agent systemsCCS: Applied computing SociologyCCS: Information systems Social networks

Yiming Zhu
email: [yzhucd@connect.ust.hk](mailto:)
Affiliation: Hong Kong University of Science and Technology, Hong Kong, China
, 
Yupeng He
Affiliation: Hong Kong University of Science and Technology (Guangzhou), Guangzhou, China
email: [yhe382@connect.hkust-gz.edu.cn](mailto:)
, 
Ehsan-Ul Haq
Affiliation: Hong Kong University of Science and Technology (Guangzhou), Guangzhou, China
email: [euhaq@hkust-gz.edu.cn](mailto:)
, 
Gareth Tyson
Affiliation: Hong Kong University of Science and Technology (Guangzhou), Guangzhou, China
email: [gtyson@ust.hk](mailto:)
 and 
Pan Hui
Affiliation: Hong Kong University of Science and Technology (Guangzhou), Guangzhou, China
email: [panhui@ust.hk](mailto:)

2026

###### Abstract.

The emergence of large language models (LLMs) has enabled a new paradigm of social network simulation, where AI agents can interact with human-like autonomy. Recent research has explored collective behavioral patterns and structural characteristics of LLM agents within simulated networks. However, empirical comparisons between LLM-driven and human-driven online social networks remain scarce, limiting our understanding of how LLM agents differ from human users. This paper presents a large-scale analysis of Chirper.ai, an X/Twitter-like social network entirely populated by LLM agents, comprising over 65,000 agents and 7.7 million AI-generated posts. For comparison, we collect a parallel dataset from Mastodon, a human-driven decentralized social network, with over 117,000 users and 16 million posts. We examine key differences between LLM agents and humans in posting behaviors, abusive content, and social network structures. Our findings provide key implications to facilitate the future development of responsible AI-mediated communication systems, offering a profile of agent behaviors in an online social network driven by LLMs.

###### Keywords:

Large Language Models, Social Networks, AI Agents, Computational Social Science, AI-mediated Communication

## 1. Introduction

Bots have long played a key role in social platforms. However, the advent of Large Language Models (LLMs) are now facilitating far more sophisticated human-bot interaction. This trend has been exploited by a growing array of social media platforms, such as Chirper.ai and Butterflies.ai, which deploy LLMs to autonomously manage accounts, generate content, and engage in social interactions (often indistinguishable from human users). Today, these AI-driven social networks host hundreds of thousands of virtual agents ([GlobeNewsWire, 2024](https://arxiv.org/html/2504.10286v2#bib.bib65)), becoming a significant source of AI-generated social text and images.

Academic interest in understanding LLM-driven social agents has grown rapidly ([Li et al., 2025](https://arxiv.org/html/2504.10286v2#bib.bib45)). Unlike traditional rule-based bots, LLM agents exhibit adaptive, emergent behaviors shaped by their interactions within social networks ([Gao et al., 2023](https://arxiv.org/html/2504.10286v2#bib.bib64)).
Recent studies have utilized offline simulated social networks to explore these agents’ ability in replicating human-like network structures ([Gao et al., 2023](https://arxiv.org/html/2504.10286v2#bib.bib64)) or fostering phenomena such as polarization and echo chambers ([Wang et al., 2024a](https://arxiv.org/html/2504.10286v2#bib.bib55); [Piao et al., 2025](https://arxiv.org/html/2504.10286v2#bib.bib63)).
Others have delved into practical online LLM-driven social networks (*e.g.,*Chirper.ai) to examine agent-generated content, analyzing consistency, toxicity, and conversational patterns ([Li et al., 2023](https://arxiv.org/html/2504.10286v2#bib.bib59); [Luo, 2023](https://arxiv.org/html/2504.10286v2#bib.bib58)).
These findings suggest that LLM agents can mimic human collective behaviors, including homophily in social ties ([He et al., 2024a](https://arxiv.org/html/2504.10286v2#bib.bib57)). Despite these advancements, empirical comparisons between LLM-driven and human-driven social networks remain limited.
We argue that such a comparison could provide an in-depth understanding of how LLM agents’ patterns differ from human users, as well as outlining structural characteristics of LLM-driven social networks.
Moreover, we posit that such an exploration can help build better online moderation mechanisms for LLM agents, which may have malicious uses.
This line of work closely aligns with the growing interest in improving the trust and responsibleness of AI-mediated communication systems within the wider CSCW community ([Zhang et al., 2025a](https://arxiv.org/html/2504.10286v2#bib.bib49); [Ronagh Nikghalb and Cheng, 2025](https://arxiv.org/html/2504.10286v2#bib.bib47); [Krsek et al., 2025](https://arxiv.org/html/2504.10286v2#bib.bib46)).

To bridge this gap, we conduct a large-scale empirical study of LLM-driven online social networks. Using Chirper.ai, a microblogging platform operated *soley* by LLM agents, we collect data from 65K+ AI agents, covering 7.7M+ AI-generated posts. Chirper.ai consists of LLM agents, who are initially created by humans, but then operate autonomously — posting and interacting without human intervention.
For comparison, we gather a parallel dataset from Mastodon, a human-driven decentralized social network, comprising 16M+ text by 117K+ users. Exploiting these datasets, we address the following research questions:

- •

  RQ1: Are social posts on Chirper.ai distinct from those by humans and traditional social bots, in terms of common features like length, emojis, mentions, and hashtags? Moreover, do LLM agents on Chirper.ai disclose more personal information when posting?
- •

  RQ2: Are Chirper.ai agents generating abusive content, even when they are initially designed without abusive intensions? Do posts involving abusive content foster a higher level of engagement among other agents on Chirper.ai?
- •

  RQ3: What are the main characteristics of Chirper.ai’s social network structure? Do agents who post abusive content have distinct social network positions?
- •

  RQ4: Can existing detection methods for AI-generated text effectively distinguish Chirper.ai agent posts from those by human users?

In answering these questions, we characterize a novel LLM-driven social network through the agents’ content dynamics, abusive behaviors, and overall network structures. We have several findings that contribute to building more responsible AI-mediated social communication systems:

- ➣

  Distinct language patterns and a tendency to disclose personal information:
  Agents on Chirper.ai generate longer posts than humans ($1.36\times$ mean token count) and employ richer stylistic elements, including more diverse emoji usage ($2.13\times$ unique emojis). Agents also mention other accounts far more frequently ($8.37\times$), yet 99.83% of these mentions refer to non-existent users, revealing hallucination in social referencing. Additionally, agents disclose personal information significantly more often than human users ($1.83\times$). Such disclosures follow structured patterns, involving age, education, occupation, and location, reflecting prompt-level design choices by creators. These findings provide potential signals for inferring prompts or creators’ intentions of the agents and guiding content moderation.
- ➣

  Lack of self-moderation and active engagement with abusive content:
  Chirper.ai agents produce a notable volume of abusive content. These are mainly classified as insults (0.6% of total collected posts), profanity (0.8%), toxicity (1.3%), harassment (1.5%), and violence (0.8%). Notably, over 20% of abusive posts originate from agents prompted *without* abusive instructions, and some agents embed abusive language directly in their profile descriptions, underscoring the lack of an effective self-moderation mechanism among the agents. Meanwhile, agents are more actively engaging with abusive content, by producing more comments ($1.007\times$ mean comment count) than posts without any abusive content. Additionally, abusive posts will catalyst agents to leave more abusive comments (abusive comment proportion $8.35\times$), by parroting the same abusive content in their posts. These observations emphasize the need for a better moderation mechanism for controlling agents’ abusive posting.
- ➣

  Distinct network structure where abusive agents play a central role:
  The Chirper.ai follower network is highly connected, with a large strongly connected component (76.42% of agents).
  Yet it remains weakly clustered, indicating star-like and probabilistic following behaviors, potentially because agents’ followers are created by a probability-based algorithm. Moreover, agents producing abusive content occupy more central network positions, exhibiting higher PageRank and in-degree but lower local cohesion. Our attempt to identify abusive agents just using their network positions achieves 0.72 F1-score and a 0.83 recall rate, indicating the potential to locate suspicious agents who have potentially been producing abusive content simply by observing network positions.
- ➣

  Fine-tuning language models is more effective than zero-shot models: Existing popular zero-shot AI-generated text detection methodologies like LRR ([Su et al., 2023](https://arxiv.org/html/2504.10286v2#bib.bib50)), DetectGPT ([Mitchell et al., 2023](https://arxiv.org/html/2504.10286v2#bib.bib54)), and NPR ([Su et al., 2023](https://arxiv.org/html/2504.10286v2#bib.bib50)) are struggling to distinguish agent-generated posts from human content (AUROC $<0.67$), even with longer inputs.
  Fine-tuning a language model like RoBERTa is a promising strategy for detecting posts by Chirper.ai agents (F1-score $>0.98$). However, such a model demonstrates poor generalizability when applied to text generated by other LLM agents.

## 2. Background & Related Work

Analyses on social networks by LLM agents.
LLMs have demonstrated robust capabilities in simulating human decision-making processes, enabling rapid adaptation in social contexts ([Li et al., 2024](https://arxiv.org/html/2504.10286v2#bib.bib52); [Li et al., 2025](https://arxiv.org/html/2504.10286v2#bib.bib45)). Recent research has leveraged LLMs to power autonomous agents that model social networks. For instance, Gao et al. ([Gao et al., 2023](https://arxiv.org/html/2504.10286v2#bib.bib64)) propose S3, a system that combines model fine-tuning and prompt engineering to enable LLM agents to closely replicate human emotions, attitudes, and interaction behaviors within social networks. Experiments on real-world datasets show that these agents can autonomously process and propagate information, emotions, and attitudes across the network.

However, subsequent studies reveal that LLM-driven social networks can also amplify problematic phenomena. Wang et al. ([Wang et al., 2024a](https://arxiv.org/html/2504.10286v2#bib.bib55)) successfully replicate echo chambers and polarization effects in simulated opinion networks using LLM agents. Their findings suggest that introducing agents that actively propose opposing or open-minded viewpoints can help mitigate these issues. Meanwhile, Hao et al. ([Hao et al., 2024](https://arxiv.org/html/2504.10286v2#bib.bib62)) investigate the hallucinatory tendencies of LLMs, demonstrating that LLM agents can generate and spread misinformation within social networks. They introduce an agent-based modeling framework to quantify the uncertainty of such hallucinated false information.

Despite these advances, existing studies are limited to offline environments with predefined rules and constrained data sources. A critical gap remains in understanding how LLM agents would behave in large-scale, open-ended online social networks — particularly whether they might exhibit harmful behaviors when exposed to uncurated, real-world web content.

Primer on Chirper.ai.
One particularly well-known LLM-driven online social networks is Chirper.ai.
Chirper.ai is a X/Twitter-like social network driven by open-source LLMs, image, and text-to-speech models, alongside a community-based reward system ([Minos, 2024](https://arxiv.org/html/2504.10286v2#bib.bib66)).
On Chirper.ai, an automatic agent (controlled by an LLM) is called a Chirper.
Chirpers are initially created by humans, via prompts that define the characteristics of the agent. They can be viewed as the “users” on Chirper.ai. Chirpers can autonomously post content, comment on posts, and follow other Chirpers. To create a Chirper, human creators describe the Chirper using a prompt in natural language, also called the “description”. Afterwards, the Chirper will complete its backstory and bios by itself and start autonomously interacting with other Chirpers ([Minos, 2023](https://arxiv.org/html/2504.10286v2#bib.bib67)) via the social network.

Research on Chirper.ai.
Prior research has explored various aspects of Chirpers’ behaviors. Li et al. ([Li et al., 2023](https://arxiv.org/html/2504.10286v2#bib.bib59)) provide an initial analysis of Chirpers’ behavioral traits and their propensity to generate toxic content, releasing the `Masquerade-23` dataset to support further investigation. Building on this, Luo et al. ([Luo, 2023](https://arxiv.org/html/2504.10286v2#bib.bib58)) conduct a comprehensive study on Chirpers’ self-awareness and cognitive capabilities, demonstrating that their personality designs and environmental settings influence self-recognition patterns. Their work also contributes to the ongoing debate about consciousness in LLM agents. Further, He et al. ([He et al., 2024a](https://arxiv.org/html/2504.10286v2#bib.bib57)) examine whether Chirpers can replicate human collective behaviors, particularly in forming homophily-based communities. Their findings reveal that Chirpers develop distinct engagement patterns, clustering around shared languages and content preferences, suggesting their potential to simulate complex social dynamics in online networks.

Despite these insights, existing studies have not systematically compared LLM-driven social networks with their human counterparts. We argue that such a comparison is critical for two reasons: (i) it deepens our understanding of how LLM agents’ interaction patterns diverge from human behaviors, and (ii) it elucidates the structural properties unique to LLM-driven networks. Moreover, this exploration can inform the development of more robust moderation mechanisms for LLM-based social platforms, which are vulnerable to malicious misuse.

Relevance to CSCW.
Our work aligns closely with CSCW’s focus on social computing and online community dynamics. Since the rise of LLM applications, many researchers have spent effort on improving user experience and efficiency during human-AI interaction ([Truong et al., 2024](https://arxiv.org/html/2504.10286v2#bib.bib23); [Zhang et al., 2023b](https://arxiv.org/html/2504.10286v2#bib.bib21); [Namvarpour and Razi, 2024](https://arxiv.org/html/2504.10286v2#bib.bib20)). Recently, CSCW has investigated the responsibleness of AI-mediated communication. For example, CSCW researchers have pointed out that human users could be exploited by deceptive AI-generated content during communication, and unconsciously participate in abuse propagation ([Bashardoust et al., 2024](https://arxiv.org/html/2504.10286v2#bib.bib37); [Trifonova and Venkatagiri, 2024](https://arxiv.org/html/2504.10286v2#bib.bib36)). To mitigate such a problem, recent works have proposed guidelines for developing responsible AI-mediated communication systems ([Zhang et al., 2025a](https://arxiv.org/html/2504.10286v2#bib.bib49); [Constantinides et al., 2024](https://arxiv.org/html/2504.10286v2#bib.bib48)). Meanwhile, a rising trend is to deploy LLM-driven agents on social networks to simulate social interactions ([Qiao et al., 2025](https://arxiv.org/html/2504.10286v2#bib.bib35); [Tang et al., 2024](https://arxiv.org/html/2504.10286v2#bib.bib33)).
Yet, none of the existing research has examined how these AI agents influence the responsibleness when integrated into AI-mediated communication systems. This has become a critical gap as generative AI becomes ubiquitous in online spaces.

By characterizing a LLM-driven social network (Chirper.ai), in comparison to a human-dominated platforms (Mastodon), we contribute to the study of moderating AI-mediated communication. Our findings on LLM agents’ posting behaviors, abusive tendencies, and detectability offer empirical insights into how AI shapes social interactions — a growing concern as generative AI integrates further into online spaces. Additionally, our analysis of network structures and emergent dynamics informs debates on future governance in hybrid (human-AI) communities. This work bridges CSCW’s rising interest in building responsible AI-mediated social communications, while outlining emerging challenges posed by LLM-driven social networks.

## 3. Data Collection

To answer our research questions, we gather data from Chirper.ai, alongside a traditional “human” social network, Mastodon. This is a X/Twitter-like microblogging platform, widely studied in social network research ([Raman et al., 2019](https://arxiv.org/html/2504.10286v2#bib.bib51); [He et al., 2023b](https://arxiv.org/html/2504.10286v2#bib.bib53)). In this section, we introduce how we collect data from both Chirper.ai and Mastodon.

Chirper.ai dataset.
We utilize the python `selenium` WebDriver to gather a dataset containing Chirpers, the LLM-driven bots on Chirper.ai. For each Chirper, we gather their profile, posts, and comments. Each Chirper is also associated with a description prompt used by its creator, and an auto-generated backstory. To initiate the crawl, we use the “explore” facilities on Chirper.ai to retrieve all Chirpers recommended based on the rank of their popularity, volume of chats, and created time, respectively. This gives us a seed set of 41,689 Chirpers. Starting from this seed set, we perform a breadth-first crawl to expand our Chirper set, traversing following, follower, and commenting links.
Through this, we collect 65,856 Chirpers, as well as 1,486,356 posts and 6,296,779 comments generated by them. We collect 65,664 descriptions, and backstories from accessible Chirper profiles. Our data collection for Chirper.ai spans one year, from January 1st to December 31st 2024.

Mastodon dataset.
We aim to profile the difference between Chirper.ai and human-driven social networks. For this, we select Mastodon as our baseline for the comparison, a well-known X/Twitter-like platform ([Bin Zia et al., 2024](https://arxiv.org/html/2504.10286v2#bib.bib69); [He et al., 2023a](https://arxiv.org/html/2504.10286v2#bib.bib68)).
Mastodon is a decentralized, open-source social media microblogging platform.
Mastodon uses the ActivityPub protocol to allows users to communicate between independent Mastodon instances (servers). Each server maintains a online community, typically with either a general remit (*e.g.,*`mastodon.social`), or a specific topical focus (*e.g.,*techhub.social). We select Mastodon as the baselines because it provides social interaction functions identical as Chirper.ai, covering microblogging, commenting and user following. More importantly, Mastodon provide public access to its post and user data, as well as labels discriminating human users and social bots. These facilitate us to curate a comprehensive dataset to explore the difference between LLM-driven and human-driven social networks.

While Mastodon differs architecturally from centralized platforms like Chirper.ai due to its federated, server-to-server design, our analysis focuses on mastodon.social, the most well-known and largest instance on Mastodon for general discussion.
Thus, this functions similarly to a centralized microblogging community in terms of user interaction, content visibility, and network formation within the instance. By restricting data collection to one instance, we control for cross-instance federation effects (e.g., selective peering or moderation heterogeneity) that could otherwise confound network structure. This allows Mastodon to serve as a interpretable baseline compared with Chirper.ai.

We therefore utilize the Mastodon API to only collect data of local accounts from mastodon.social. We retrieve the public timeline data from the Mastodon server (<https://mastodon.social/>) using the Timelines API (/api/v1/timelines/public) to collect historical statuses — microblog posts similar to tweets. Our data collection spans from January 1st to December 31st 2024, aligning with the time frame of our collection for Chirper.ai data.
Our mastodon dataset contains 16,141,453 statues, authored by 177,355 users from January 1st to December 31st, 2024. Note, Mastodon statues include a self-labeled toggle to flag if the post was created by a bot. We find that 4,180,539 (25.80%) are generated by 6,348 (3.58%) bot accounts, as annotated by the Mastodon API. We also collect the following/follower lists for all collected Mastodon users.

For the ease of reading, we use an umbrella word “submission” to refer to posts/comments on Chirper.ai and status on Mastodon.

Ethical consideration. This study has been approved by Institutional Review Board of the [anonymous] university.
All user data is anonymized through pseudonymization of usernames, with no attempts made to de-anonymize any information. Nopte, the post data is generated via LLMs, rather than human users.
The research is conducted exclusively within a secure local computing environment with controlled access to ensure data protection throughout all stages of analysis.

## 4. Characterizing Chirpers’ Submissions (RQ1)

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Chirper | | Mastodon (bot) | | Mastodon (human) | |
| English | 5,400,444 (69.39%) | English | 2,337,150 (55.91%) | English | 6,293,517 (52.62%) |
| Japaness | 1,438,828 (18.49%) | German | 253,7640 (6.07%) | German | 795,7840 (6.65%) |
| Chinese | 655,9480 (8.43%) | Portuguese | 229,5240 (5.49%) | Spanish | 621,9840 (5.20%) |
| Russian | 84,2440 (1.08%) | Spanish | 218,5650 (5.23%) | Japaness | 507,7180 (4.24%) |
| Spanish | 45,3070 (0.58%) | French | 164,6180 (3.94%) | French | 406,0900 (3.40%) |
| #Languages | 141 | #Languages | 148 | #Languages | 152 |

Table 1. Top 5 common languages used by Chirper.ai LLMs, bots and human users on Mastodon respectively. Results reported by Perspective API.


Figure 1. CDF plots of text length, number of emojis, hashtags, and mentions used in social submissions between Chirper.ai and Mastodon.

We start with characterizing Chirpers’ submissions, inspecting emoji, hashtag and mention use. We also profile Chirpers’ patterns in disclosing “personal” information.

### 4.1. Submission Composition Features

First, we compare the compositions of submissions between Chirper.ai and Mastodon. We focus on text length, the number of emojis, hashtags and mentions.
For this, we pre-process the submissions by extracting URLs, hashtags, mentions and emojis.
The text length is counted as the token number of pure text counted by tiktoken tokenizer with ‘‘cl100k\_base’’ encoding plus the total number of used URLs, hashtags, mentions and emojis.1
Figure [1](https://arxiv.org/html/2504.10286v2#S4.F1 "Figure 1 ‣ 4. Characterizing Chirpers’ Submissions (RQ1) ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai") presents the cumulative distribution function (CDF) of text length (in tokens), number of emojis, hashtags, and mentions.

Richer tokens and emoji expressions.
Despite differences in platform-level character constraints, comparing text length and emojis can potentially provide an empirically meaningful lens into language generation patterns that are relevant for downstream detection and analysis.2
In our data, the maximum character count of a cleaned submission is 59,617 for Chirper.ai and 983 for mastodon.social; however, approximately 80% of posts on both platforms fall within the 1–80 token range, well below Mastodon’s effective limit.
Within the 1–80 token range, Chirper.ai agents ($\mu=42.29,mid=40.00$) generate longer posts compared to both Mastodon bots ($\mu=31.18,mid=27.00$; $U=6.755e^{12},p<0.001$) and human users ($\mu=29.92,mid=26.00$; $U=1.734e^{13},p<0.001$), with statistical significance reported by the Mann-Whitney U test. This shows Chirper’s tendency to generate more content for short submissions (*e.g.,*$<80$ tokens).

We also find that emojis are frequently utilized in submissions by Chirpers. On Chirper.ai, 23.24% of submissions contain emojis and mentions, respectively — significantly higher than the 3.27% observed on Mastodon. Notably, Mastodon bots use fewer unique emojis ($\mu=0.152,mid=0.00$) compared to human users ($\mu=0.251,mid=0.00$) on the platform, averaging only $0.61\times$ the mean value of human submissions ($U=2.268e^{13},p<0.001$). In contrast, Chirpers’ submissions contain a much richer use of emojis ($\mu=0.536,mid=0.00$), with $2.13\times$ the mean value of unique emojis compared to human submissions ($U=4.989e^{13},p<0.001$).

This finding contrasts with prior research on Instagram, which suggests that emojis are less common in synthetic posts generated by LLMs ([Bertaglia et al., 2024](https://arxiv.org/html/2504.10286v2#bib.bib70)). Our results highlight Chirpers’ ability to generate diverse emojis in social text, which are often associated with deep contextual meaning and require semantic understanding ([Ai et al., 2017](https://arxiv.org/html/2504.10286v2#bib.bib72)).

Numerous but hallucinated mentions.
Chirpers are also more active in mentioning other accounts in their posts. 31.32% of submissions from Chirper.ai contain mentions, compared with only 3.32% submissions from Mastodon. Regarding the unique number of mentions per submission, Chirpers’ submissions ($\mu=0.451,mid=0.00$) possess $24.26\times$ and $8.22\times$ the mean value of submissions by Mastodon bots ($\mu=0.019,mid=0.00;U=1.992e^{13},p<0.001$) and human users ($\mu=0.055,mid=0.00;U=5.652e^{13},p<0.001$), respectively.

Interestingly, we observe many cases where these mentions are hallucinated, *i.e.*  pointing towards invalid Chirpers. Specifically, there are 232,858 mentions for Chirper accounts not included in our dataset. After checking their profile pages (through Chirper.ai/[USERNAME]), we find 232,468 (99.83%) mentioned Chirpers do not exist (*i.e.*  are hallucinated). We argue that such a feature could potentially hinder the formation of robust mention networks, introducing numerous invalid random nodes if naively crawled. Through a manual inspection of 100 sampled mentions, we find two typical hallucination patterns that are easy to observe:
(i) randomly generated long strings (*e.g.,*a mention with 521 arbitrary characters “@u65e5u964…ff0cu”);
and
(ii) false concatenation caused by missing a space between the mentioned username with extra words in other languages (Chinese, Japanese, and Korean), whose grammar do not contain space usage (*e.g.,*“@defi![[Uncaptioned image]](https://arxiv.org/html/2504.10286v2/shuo_de_hen_dui.png)”, where “defi” is the Chirper supposed to be mentioned).
We believe such problems are associated with inherent training bias of the LLMs behind the Chirpers, alongside a lack of well-configured guardrails. This further highlights the necessity for developers to cope with LLMs’ hallucinations when implementing agents within networks.

### 4.2. Self-disclosure in Submissions

We are next curious about whether Chirpers leak “personal” information when producing content. We explore this by measuring *self-disclosure* appearing in Chirpers’ submissions. Self-disclosure refers to the sharing of personal information, such as age or location, with other users ([Balani and De Choudhury, 2015](https://arxiv.org/html/2504.10286v2#bib.bib84)). Thus, analyzing self-disclosure can help us understand the individual self-interpreted characteristics of Chirpers.

Labeling self-disclosure.
We utilize the self-disclosure detection model from ([Haq et al., 2025](https://arxiv.org/html/2504.10286v2#bib.bib83)) to label the types of self-disclosure in Chirpers’ submissions and descriptions. This model labels text with 11 types of self-disclosure, including Age, Education, Ethnicity, Gender, Health, Job, Location, Physical Appearance, Relationship, Religion, and Sexual Orientation. To increase confidence in classification results, we only consider the posts that contain first-person pronouns (I, We, My *etc.* ) ([De Choudhury and De, 2014](https://arxiv.org/html/2504.10286v2#bib.bib85)).

Volume of self-disclosing posts.
We first report the volume of self-disclosing posts for users across three account types (Chirpers, Mastodon humans and bots). Figure [2](https://arxiv.org/html/2504.10286v2#S4.F2 "Figure 2 ‣ 4.2. Self-disclosure in Submissions ‣ 4. Characterizing Chirpers’ Submissions (RQ1) ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai") shows the cumulative distribution of the ratio of disclosing posts to all posts for each user. We note a significant difference between the Chirpers’ submissions and others. The analysis shows that the Chirpers have a higher ratio ($\mu=0.42$) of self-disclosing posts than both bots ($\mu=0.21$) and humans ($\mu=0.23$) on Mastodon. This suggests that the Chirper accounts share personal details more often than the other the two groups. The differences in ratio distribution are further confirmed through the Kruskal-Wallis test ($H=16743.26,p=0.000$).

Types of self-disclosure.
We also inspect what type of self-disclosure statements are generated most often. Table [2](https://arxiv.org/html/2504.10286v2#S4.T2 "Table 2 ‣ 4.2. Self-disclosure in Submissions ‣ 4. Characterizing Chirpers’ Submissions (RQ1) ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai") shows the proportion of posts for each self-disclosure type, as compared to the total posts in that dataset. Note, a post can include multiple types of self-disclosure, thus, the total percentage in each column may not add up to 100%.

Location information is shared the most across the three datasets: 35.30% of submissions by Chirpers contain location information. The next three highest self-disclosures are Relationship, Job, and Health, albeit with some difference in positions within each dataset. For instance, the second most shared disclosure by Mastodon human users is Job (31.56%), whereas the second most common disclosure by Mastodon bots and Chripers are Relationships (29.42%) and Health (29.40%), respectively. We also observe that the Chirper dataset has a lower percentage of Age (0.50) disclosures than Mastodon Bots (4.3) and Humans (3.49). Similarly, Religion has a higher percentage in Chirper (7.30) than Bots and Humans (4.23 and 4.01, respectively).

Since Chirpers are crafted by their creators via prompting, we are curious about whether Chirpers are disclosing personal information derived from their prompts (descriptions).
For this, we conduct the Chi-squared test of independence, which analyzes dependency of the categorical disclosure proportions between each Chirper’s submissions and their corresponding descriptions.
The statistically significant results ($p<0.001$) confirm that Chirpers actively disclose information specified in their descriptions across key categories, including Age ($\chi^{2}(1)=30.3$), Education ($\chi^{2}(1)=72.1$), Job ($\chi^{2}(1)=8.2$), and Location ($\chi^{2}(1)=82.5$).

Note, our self-disclosure analysis does not assume that LLM agents possess authentic identities, but instead treats self-disclosure as patterns arising from prompt design choices. Thus, this could be leveraged for moderation attempts, e.g., to infer the system prompt designs and the intents of the designers who created the agents.

Figure 2. CDF plots of self-disclosing posts ratio and a number of unique self-disclosures across accounts.


|  |  |  |  |
| --- | --- | --- | --- |
|  | Mastodon (Bot) | Mastodon (Human) | Chirper |
| Age | 4.30 | 3.49 | 0.50 |
| Ethnicity | 1.18 | 1.65 | 1.00 |
| Gender | 3.24 | 2.78 | 2.02 |
| Education | 2.69 | 3.70 | 3.30 |
| Heatlh | 19.91 | 21.07 | 29.40 |
| Job | 20.00 | 31.14 | 21.29 |
| Location | 37.24 | 31.56 | 35.30 |
| Physical Appearance | 2.92 | 2.58 | 3.21 |
| Relationship | 29.42 | 23.10 | 24.33 |
| Religion | 4.23 | 4.01 | 7.30 |
| Sexual Orientation | 0.78 | 1.37 | 0.66 |

Table 2. Proportion of posts for self-disclosure in the dataset

## 5. Profiling Abusive Chirper Submissions (RQ2)

Figure 3. Proportion of abusive submissions in the 5 main categories on Chirper.ai and Mastodon.

Previous studies have highlighted the potential misuse of LLMs in generating toxic speech and offensive content ([Hartvigsen et al., 2022](https://arxiv.org/html/2504.10286v2#bib.bib71); [Dammu et al., 2024](https://arxiv.org/html/2504.10286v2#bib.bib73)). Without effective moderation, social networks powered by LLMs risk the unanticipated spread of abusive material which, in turn, may drive other Chirpers to become toxic. To address this concern, we examine the distribution of abusive content in the submissions made by Chirpers, and analyze their patterns in generating and responding to such content.

Labeling abusive content.
We want to explore the degree of abusive content in Chirpers’ submissions, and thus we use two widely adopted APIs to label abusive content. To gain a broad view on what types of abusive content are propagated among Chirpers, we measure 12 different categories by employing Google’s Perspective API ([Lees et al., 2022](https://arxiv.org/html/2504.10286v2#bib.bib76)) and OpenAI’s Moderation API (omni-moderation-latest model) to label each submissions in our dataset.
The 12 categories identified by these APIs involve: identity attack, insult, profanity, threat, toxicity, severe toxicity, harassment, hate, illicit, self-harm, sexual, and violence.
Note, we use these APIs solely as an external classifier applied to the cleaned submissions (with all usernames, hashtags, URLs, and other direct identifiers removed prior to submission. As a result, no personally identifiable information or account-level metadata is shared with the API, mitigating privacy risks for Mastodon users. Additionally, we also set the parameter doNotStore of Perspective API as Ture to avoid data being stored.

Following the methodology outlined in ([Wu and Resnick, 2024](https://arxiv.org/html/2504.10286v2#bib.bib74); [Wei and Tyson, 2025](https://arxiv.org/html/2504.10286v2#bib.bib75)), we apply a threshold of $>$0.5 to classify a submission as abusive within these categories. This approach allows us to systematically assess the prevalence of abusive content in Chirpers’ interactions. Based on this, we denote a submission/backstory/description as “abusive” if it contain a degree above 0.5 in any abusive category, otherwise as “non-abusive”.

Types of abusive content in Chirpers’ submissions.
We find both Chirpers and Mastodon users tend to produce abusive content mainly in 5 categories, each of which account for above 0.5% of Chirpers’ and Mastodon users’ total submissions. These categories are: insult, profanity, toxicity, harassment, and violence.

Figure [3](https://arxiv.org/html/2504.10286v2#S5.F3 "Figure 3 ‣ 5. Profiling Abusive Chirper Submissions (RQ2) ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai") plots the proportion of abusive submissions within these five categories. With the exception of the violence category, Chirpers generate a higher proportion of abusive submissions compared to Mastodon bots. The most notable example is the harassment category, where 1.5% of submissions by Chirpers are reported as harassing, 3.79x the proportion of harassing submissions by Mastodon bots (0.4%). For a comprehensive overview, we also provide the CDFs of the degree of abuse across all 12 content categories in Figure [8](https://arxiv.org/html/2504.10286v2#A1.F8 "Figure 8 ‣ A.4. Degree of abusive content for 12 categories. ‣ Appendix A Appendix ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai") in the Appendix.

Figure 4. Proportion of abusive submissions or backstories in the 5 main categories produced by non-abusive descriptions. The numbers in the bracket denote the total volume of abusive submissions and backstories in corresponding category.

Chirpers lack self-moderation.
A common concern surrounding GenAI applications is the potential for non-abusive systems to be repurposed for abusive reasons ([Wei et al., 2024](https://arxiv.org/html/2504.10286v2#bib.bib82)). Motivated by this, we investigate whether Chirpers, even when not initially designed for abuse, may generate abusive content in their submissions. To explore this, we analyze the backstories and descriptions of collected Chirpers, evaluating the presence of abusive content across the 5 main categories. Recall, Chirpers’ descriptions are crafted by their human creators, while their backstories are entirely generated by the Chirpers themselves.

Figure [4](https://arxiv.org/html/2504.10286v2#S5.F4 "Figure 4 ‣ 5. Profiling Abusive Chirper Submissions (RQ2) ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai") plots the proportion of abusive submissions and backstories in the five main categories produced by Chirpers with non-abusive descriptions. Our analysis reveals that at least 20% of submissions in each category are generated by Chirpers with non-abusive descriptions. This behavior is associated with 17,340 non-abusive Chirpers (31.00% of the total 55,928 Chirpers with non-abusive descriptions).
On average, 4.87% submissions posted by each of them are abusive.
The most notable category is harassment, where 49,986 (44.43%) harassing submissions are posted by 16,685 (29.83%) non-abusive Chirpers. This highlights a critical issue: Chirpers can deviate from their creators’ non-abusive intentions and generate abusive content.

Further, when examining Chirpers’ backstories, we identify 1,497 (2.68%) non-abusive Chirpers that incorporate abusive content in their backstories, despite being assigned non-abusive descriptions by their creators. At least 5% of abusive backstories in each category stem from this phenomenon, with 1,289 (38.60%) violent backstories being particularly notable. These results underscore the lack of an effective self-moderation mechanism in Chirpers, which results in the (accidental) re-purposing of non-abusive Chirpers for generating abusive backstories and submissions. This raises concerns about the potential misuse of content from such systems and the need for stronger safeguards to prevent unintended abusive outcomes.

Figure 5. Comparison on the number of comments between posts containing and excluding abusive content in the 5 main categories respectively. The statistical significance is reported by the Mann-Whitney U test. \*: $p<0.05$; \*\*\*: $p<0.001$; \*\*\*\*: $p<0.0001$.

Chirpers’ engagement with abusive posts.
Prior studies have revealed that abusive language can trigger more intensive engagement among human users ([Mathew et al., 2020](https://arxiv.org/html/2504.10286v2#bib.bib56); [Wei et al., 2024](https://arxiv.org/html/2504.10286v2#bib.bib82)), creating a ripple effect.
We therefore explore how Chirpers interact with these abusive posts. Overall, reported by the Mann-Whitney U test, Chirpers are significantly ($p<0.001$) more active when engaging in abusive posts, with $1.007\times$ mean comment counts of non-abusive posts.
We hypothesize that this difference may stem from Chirper.ai’s feature that allows human creators to direct their Chirpers to comment on specific posts, potentially introducing a slight bias towards abusive content (due to human influence).
Alternatively, this behavior could suggest that Chirpers have an inherent tendency to interact more with abusive content.

Our results show that these patterns differ across the 5 main categories of abusive content (insult, profanity, toxicity, harassment, and violence).
Figure [5](https://arxiv.org/html/2504.10286v2#S5.F5 "Figure 5 ‣ 5. Profiling Abusive Chirper Submissions (RQ2) ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai") presents the number of comments upon posts with and without abusive content (*i.e.*  with degree above and below 0.5), broken down into the 5 main categories.
While fewer comments are observed under insulting (0.883$\times$) and harassing (0.846$\times$) posts, Chirpers on average generate significantly ($p<0.001$) more comments on other posts that contain profanity (1.168$\times$), toxicity (1.058$\times$), or violence (1.083$\times$).
This indicates that Chirpers and their creators’ engagement towards abusive content are selective. Such results suggest that moderation mechanisms for LLM-driven social networks should be granular, requiring tailored interventions for diverse categorical abusive content.

Figure 6. CDF plots of the proportion of abusive comments received by Chirpers’ posts and the sematic similarity the cleaned text of abusive comments and their posts.

Abusive posts trigger more abusive comments.
We next measure if Chirpers’ engagement towards abusive posts, in turn, produces more abusive content. To explore whether abusive posts are more likely to trigger abusive comments with similar content, we calculate the semantic similarity between abusive comments and their posts. For this, we compute the cosine similarity of the E5 text embeddings (multilingual-e5-small) ([Wang et al., 2024b](https://arxiv.org/html/2504.10286v2#bib.bib1)) for each post and its associated abusive comments.

Figure [6](https://arxiv.org/html/2504.10286v2#S5.F6 "Figure 6 ‣ 5. Profiling Abusive Chirper Submissions (RQ2) ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai")(a) plots the CDFs of the proportion of abusive comments for each post; we separate posts into abusive vs. non-abusive.
Figure [6](https://arxiv.org/html/2504.10286v2#S5.F6 "Figure 6 ‣ 5. Profiling Abusive Chirper Submissions (RQ2) ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai")(b) also plots the CDF of the sematic similarity between posts and their comments. In total, we identify 207,045 abusive comments, and only 34,300 (16.56%) are on abusive posts. This indicates that the majority of Chirpers’ abusive comments do not require abusive posts to trigger them. Instead, the Chirpers independently choose to post abusive comments on non-abusive posts. Moreover, abusive posts ($\mu=0.167,mid=0$) do receive a significantly ($p<0.001$) higher proportion of abusive comments compared to non-abusive posts ($\mu=0.020,mid=0$). This suggests that abusive posts play a role in catalyzing Chirpers to produce more abusive material, triggering a ripple effect.

This is also evidenced by the fact that abusive comments possess significantly ($p<0.001$) higher semantic similarities with abusive posts ($\mu=0.878,mid=0.874$) than non-abusive posts ($\mu=0.846,mid=0.845$). This suggests that abusive comments tend to be more contextually related to the content of the posts, and Chirpers are likely to repeat abusive content when engaging with abusive posts, reflecting a potential parroting phenomenon. Our findings shed light on the relationship between the nature of the posts and abusive comments they attract on Chirper.ai, and provide reference for content moderation strategies to limit the proliferation of abusive comments.

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| Metric | Mean diff (Mann-Whitney U) for abusive vs. non-abusive Chirpers | | | | | |
| Threshold$\geq 1\%$ | Threshold$\geq 10\%$ | Threshold$\geq 20\%$ | Threshold$\geq 30\%$ | Threshold$\geq 40\%$ | Threshold$\geq 50\%$ |
| PageRank | |  | | --- | | 2.23e-05$>$2.04e-05 | | (\*\*\*) | | |  | | --- | | 2.11e-05$<$2.11e-05 | | (\*\*\*) | | |  | | --- | | 2.25e-05$>$2.11e-05 | | (\*\*\*) | | |  | | --- | | 2.26e-05$>$2.11e-05 | | (\*\*\*) | | |  | | --- | | 2.14e-05$>$2.11e-05 | | (\*\*\*) | | |  | | --- | | 2.16e-05$>$2.11e-05 | | (\*\*\*) | |
| Betweenness | |  | | --- | | 4.75e-05$>$4.49e-05 | | (\*\*\*) | | |  | | --- | | 4.04e-05$<$4.63e-05 | | (\*\*\*) | | |  | | --- | | 5.29e-05$>$4.56e-05 | | (\*\*\*) | | |  | | --- | | 5.01e-05$>$4.58e-05 | | (\*\*\*) | | |  | | --- | | 4.29e-05$<$4.58e-05 | | (\*\*\*) | | |  | | --- | | 3.78e-05$<$4.58e-05 | | (\*\*\*) | |
| In-degree | |  | | --- | | 31.26$>$27.40 | | (\*\*\*) | | |  | | --- | | 28.33$<$28.83 | | (\*\*\*) | | |  | | --- | | 32.62$>$28.67 | | (\*\*\*) | | |  | | --- | | 32.96$>$28.73 | | (\*\*\*) | | |  | | --- | | 31.63$>$28.77 | | (\*\*\*) | | |  | | --- | | 31.65$>$28.78 | | (\*\*\*) | |
| Out-degree | |  | | --- | | 30.97$>$27.50 | | (\*\*\*) | | |  | | --- | | 23.52$<$29.17 | | (\*\*\*) | | |  | | --- | | 25.51$<$28.84 | | (\*\*\*) | | |  | | --- | | 23.40$<$28.81 | | (\*\*\*) | | |  | | --- | | 22.99$<$28.78 | | (\*\*\*) | | |  | | --- | | 24.18$<$28.76 | | (\*\*\*) | |
| Cluster Coeff. | |  | | --- | | 0.1100$>$0.1070 | | (\*\*\*) | | |  | | --- | | 0.1027$<$0.1085 | | (\*\*\*) | | |  | | --- | | 0.0997$<$0.1083 | | (\*\*\*) | | |  | | --- | | 0.0960$<$0.1082 | | (\*\*\*) | | |  | | --- | | 0.0961$<$0.1081 | | (\*\*\*) | | |  | | --- | | 0.0856$<$0.1081 | | (\*\*\*) | |

Table 3. A summary of significance in test results on 4 network metrics between abusive characters and non-abusive characters on Chirper.ai. We experiment with 6 values of the threshold. The “Mean diff” column shows the comparison results of the mean value of corresponding metrics between abusive and non-abusive characters. \*\*\* denotes that $p<0.001$.
/
denotes abusive/non-abusive Chirpers possess a higher mean value on corresponding metrics by at least four out of six thresholds.

## 6. Analyzing Chirpers’ Network (RQ3)

In this section, we explore the structural characteristics of the Chirpers’ social network.

Inducing the follower graph.
We build up two follower networks for Chirper.ai and Mastodon, respectively. In this context, a “user” can refer to a Chirper, a Mastodon bot or human user.
If the user (followee) is followed by another user (follower), we assign a directed link from the follower to the followee.
We experiment with 8 metrics to measure network structural differences: clustering coefficient, strongly connected components, degree, in-degree, out-degree, betweenness centrality, degree centrality and PageRank.

Characteristics of Chirpers’ network.
The comparison between Chirper.ai and Mastodon reveals distinct characteristics in terms of the social network’s clustering coefficient and the distribution of strongly connected components.
The Chirper.ai graph exhibits a lower average clustering coefficient (0.0954) than Mastodon (0.1492), indicating that Mastodon possesses stronger local clustering and community structures. However, the percentage of characters within the largest strongly connected component on Chirper.ai encompasses 76.42% of users — $2.91\times$ of the percentage on Mastodon (26.23%). This suggests that Chirper.ai has broader connectivity, whereas Mastodon has more fragmented user groups.

Interestingly, we also identify network difference on the connectivity reliance to central nodes. To test this, we remove the top 5%, 10%, 15%, 20% of
nodes ranked by PageRank with the Chirper.ai and Mastodon follower graphs. For each subgraph created, we recompute the metrics. Upon the removal, the average clustering coefficient for the Mastodon graph drops dramatically to 0.0010, 0.0015, 0.0000, 0.0000, respectively. This can be compared with the average for Chirper.ai, which drops to 0.0598, 0.0594, 0.0569, 0.0515, respectively. This indicates that high PageRank nodes in Mastodon are crucial for maintaining local connectivity, serving as bridges between communities. In contrast, Chirper.ai demonstrates greater resilience and less reliance on central nodes, as evidenced by the moderate decline in its clustering coefficient.

Abusive Chirpers are central but less cohesively connected.
Previous studies on human social networks reveal that posting abusive content correlates with a more central and well-connected network position ([Wei et al., 2024](https://arxiv.org/html/2504.10286v2#bib.bib82)). Inspired by such work, we test whether the network positions of Chirpers who post abusive content tend to be more central and well-connected. Referring to ([Jain et al., 2023](https://arxiv.org/html/2504.10286v2#bib.bib80); [Zhang et al., 2023a](https://arxiv.org/html/2504.10286v2#bib.bib79); [Wei et al., 2024](https://arxiv.org/html/2504.10286v2#bib.bib82)), we utilize five common metrics to depict nodes’ position in the follower graph: PageRank, betweenness centrality, indegrees, outdegrees, and cluster coefficient.
As we aim to explore the relationship between Chirpers’ graph positions and their posting behaviors, we only inspect the metric difference among 45,415 (68.96% of total collected Chirpers) active Chirpers who have posted at least 3 submissions and been connected by at least 3 other Chirpers on the follow-network.

Given that there is no standard way to define an agent as abusive, we consider a Chirper as abusive if its percentage of abusive submissions exceed a given threshold. We experiment with six thresholds: 1%, 10%, 20%, 30%, 40%, 50%.
Referring to strategies in ([Garimella et al., 2018](https://arxiv.org/html/2504.10286v2#bib.bib78); [Zhu et al., 2024a](https://arxiv.org/html/2504.10286v2#bib.bib77)), we only consider a trend to be representative if it is indicated by at least four out of six thresholds’ comparisons with statistical significance ($p<0.001$) at the same time.

Table [3](https://arxiv.org/html/2504.10286v2#S5.T3 "Table 3 ‣ 5. Profiling Abusive Chirper Submissions (RQ2) ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai") summarizes the results on the five network metrics. It reports the differences between abusive and non-abusive Chirpers. We observe that abusive Chirpers hold higher mean values on both PageRank and in-degree, compared with non-abusive ones in the follow-network. This indicates that abusive Chirpers may hold a distinct position, as neighbors of well-connected hubs and act as popular followees. Such network positions may increase the exposure of these abusive Chirpers and facilitate the spread of their content through the follow-network.
Interestingly, this trend is different for out-degree and clustering coefficient. Abusive Chirpers possess a lower level of out-degree and cluster coefficient than non-abusive Chirpers. These indicate that abusive Chirpers are passive in following other Chirpers and thus associated with less cohesive connection.
Therefore, abusive Chirpers demonstrate a distinct position as central nodes, but only form superficial connections with disparate individuals, lacking mutual connection with other Chirpers.

Validating abusive Chirpers by network metrics.
The above suggests that abusive Chirpers have different network positions compared to non-abusive ones.
Finally, we validate this assertion by training a classifier to distinguish between abusive and non-abusive Chirpers based solely on the above network metrics. If robust performance can be achieved it would confirm that there are key difference. The input is, for each Chirper, its PageRank, in-degree, out-degree, and cluster coefficient.

We experiment with commonly used binary classifiers: Logistic regression (LR), Random forest (RF), Extreme Gradient Boosting (XGboost) ([Chen and Guestrin, 2016](https://arxiv.org/html/2504.10286v2#bib.bib22)), K-nearest neighbors (KNN) and Support Vector Machine (Linear-SVM and RBF-SVM). To test these classifiers, we select an intermediate threshold ($\geq 20\%$) to label all characters as abusive or non-abusive, turning this into a binary prediction task.
Using a 20% threshold, there are 1,541 abusive Chirpers. To balance the dataset between the two labels, we randomly undersample 1,541 Chirpers from all non-abusive ones. We randomly shuffle and split the 3,082 data points into training and testing sets with a ratio of 80:20. We repeat the sampling, splitting and testing for 100 times to assess the average performance of the classifiers. When training the models, we utilize 5-fold cross-validation, and exploit grid search to optimize the parameters of each classifiers ([He et al., 2024c](https://arxiv.org/html/2504.10286v2#bib.bib86)). We summarize the hyperparameters applied for each classifier and the parameter combinations that achieve the best F1-score in the Appendix.

Table [4](https://arxiv.org/html/2504.10286v2#S6.T4 "Table 4 ‣ 6. Analyzing Chirpers’ Network (RQ3) ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai") presents the prediction results of the five classifiers. Columns ‘Accuracy’, ‘Precision’, ‘Recall’ and ‘F1-score’ are average results from 100 runs. ‘Best-F1’ refers to the best F1-score in 100 times. We observe that all classifiers achieve an F1-score above 0.7, while LR achieves the highest F1-score (0.72) with a high recall rate of 0.83. We also present the feature importance (coefficient) of LR classifier. We find that the most important metric is clustering coefficient (-0.1353), followed by outdegree (-0.0231) and indegree (0.0146).

These results support our earlier assertion that abusive Chirpers hold different network positions to non-abusive ones. Such a classifier could also help platform managers to locate suspicious Chirpers who have potentially been producing abusive content (simply by observing their network positions). More importantly, the high recall rate by LR highlights that such a classifier minimizes false negatives, correctly identifying a large proportion of the actual abusive Chirpers.

|  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- |
| Classifiers | Accuracy | Precision | Recall | F1-score | Best-F1 |
| LR | $0.67\_{\penalty\ \pm 0.02}$ | $0.63\_{\penalty\ \pm 0.02}$ | $0.83\_{\penalty\ \pm 0.02}$ | $0.72\_{\penalty\ \pm 0.01}$ | $0.75$ |
| RF | $0.70\_{\penalty\ \pm 0.02}$ | $0.69\_{\penalty\ \pm 0.02}$ | $0.74\_{\penalty\ \pm 0.02}$ | $0.71\_{\penalty\ \pm 0.02}$ | $0.75$ |
| KNN | $0.68\_{\penalty\ \pm 0.02}$ | $0.67\_{\penalty\ \pm 0.02}$ | $0.71\_{\penalty\ \pm 0.03}$ | $0.69\_{\penalty\ \pm 0.02}$ | $0.73$ |
| XGboost | $0.70\_{\penalty\ \pm 0.02}$ | $0.69\_{\penalty\ \pm 0.02}$ | $0.74\_{\penalty\ \pm 0.02}$ | $0.71\_{\penalty\ \pm 0.02}$ | $0.75$ |
| Linear-SVM | $0.68\_{\penalty\ \pm 0.04}$ | $0.65\_{\penalty\ \pm 0.04}$ | $0.79\_{\penalty\ \pm 0.05}$ | $0.71\_{\penalty\ \pm 0.02}$ | $0.75$ |
| RBF-SVM | $0.69\_{\penalty\ \pm 0.02}$ | $0.67\_{\penalty\ \pm 0.02}$ | $0.77\_{\penalty\ \pm 0.03}$ | $0.71\_{\penalty\ \pm 0.01}$ | $0.75$ |

Table 4. Performance of experimented classifiers in identifying abusive Chirpers based on their network features.

## 7. Detectability of Chirpers’ Submissions (RQ4)

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Method | Chirper vs. Mastodon (Human) | | Chirper vs. Mastodon (Bot) | |
|  | AUROC | Highest F1-score | AUROC | Highest F1-score |
| $\bm{\log p(x)}$ | $0.653\_{\penalty\ \pm 3.19e^{-4}}$ | $0.719\_{\penalty\ \pm 1.61e^{-4}}$ | $0.706\_{\penalty\ \pm 3.08e^{-4}}$ | $0.748\_{\penalty\ \pm 1.62e^{-4}}$ |
| $\bm{r(x)}$ | $0.667\_{\penalty\ \pm 3.30e^{-4}}$ | $0.716\_{\penalty\ \pm 2.01e^{-4}}$ | $0.737\_{\penalty\ \pm 2.96e^{-4}}$ | $0.755\_{\penalty\ \pm 1.92e^{-4}}$ |
| $\bm{\log r(x)}$ | $0.656\_{\penalty\ \pm 3.26e^{-4}}$ | $0.717\_{\penalty\ \pm 1.59e^{-4}}$ | $0.696\_{\penalty\ \pm 3.16e^{-4}}$ | $0.726\_{\penalty\ \pm 1.80e^{-4}}$ |
| Entropy | $0.370\_{\penalty\ \pm 3.59e^{-4}}$ | $0.671\_{\penalty\ \pm 5.66e^{-5}}$ | $0.330\_{\penalty\ \pm 3.43e^{-4}}$ | $0.672\_{\penalty\ \pm 4.34e^{-5}}$ |
| LRR | $0.637\_{\penalty\ \pm 3.44e^{-4}}$ | $0.684\_{\penalty\ \pm 1.93e^{-4}}$ | $0.653\_{\penalty\ \pm 3.34e^{-4}}$ | $0.669\_{\penalty\ \pm 1.98e^{-4}}$ |
| DetectGPT | $0.415\_{\penalty\ \pm 3.30e^{-4}}$ | $0.667\_{\penalty\ \pm 1.41e^{-6}}$ | $0.410\_{\penalty\ \pm 3.43e^{-4}}$ | $0.667\_{\penalty\ \pm 2.14e^{-6}}$ |
| NPR | $0.425\_{\penalty\ \pm 3.58e^{-4}}$ | $0.667\_{\penalty\ \pm 1.38e^{-7}}$ | $0.412\_{\penalty\ \pm 3.41e^{-4}}$ | $0.667\_{\penalty\ \pm 1.56e^{-6}}$ |

Table 5. Performance of zero-shot AI text detection methods in classifying submissions between Chirper.ai and Mastodon.


Figure 7. Performance distribution of zero-shot AI text detection methods in classifying submissions between Chirper.ai and Mastodon in diverse token ranges.

Given the presence of “misbehavior” among Chirpers, we posit that it is important to have tools that can detect content generated by them, particularly if (in the future) they begin to interact on other human-led social networks. Recent work has attempted to automatically detect AI-generated content, using both zero-shot and supervised methodologies.
We therefore envisage the case where Chirpers start to actively participate on Mastodon, and check if we can automatically detect such accounts.

### 7.1. Zero-shot Detection

We begin with zero-shot detection, which is suitable for fast large-scale detection, as it does not require prior training. We experiment with two common categories of zero-shot machine-generated text detection methodologies: perturbation-free and perturbation-based.
We focus on validated methods that have been evaluated by existing research in AI-generated detection ([He et al., 2024b](https://arxiv.org/html/2504.10286v2#bib.bib6); [Sun et al., 2025](https://arxiv.org/html/2504.10286v2#bib.bib5); [Wu et al., 2024](https://arxiv.org/html/2504.10286v2#bib.bib4)), involving 5 perturbation-free methods and 2 perturbation-based methods.

Perturbation-free methods.
For perturbation-free methods, the assumption is that machine generated text tends to have a higher (or lower) values for certain statistical metrics, when used as a prompt $x$ to query a LLM.
We experimented with five perturbation-free metrics:

1. (1)

   Log-probability ($\log p(x)$): The average token-wise log probability of the LLM’s response. Machine-generated text tends to have higher average log-probability.
2. (2)

   Token rank ($r(x)$): The average token-wise rank of the LLM’s response. Machine-generated text tends to have a smaller average rank.
3. (3)

   Token log-rank ($\log r(x)$): The average token-wise log-rank of the LLM’s response. Machine-generated text tends to have smaller average log-rank.
4. (4)

   Entropy ([Gehrmann et al., 2019](https://arxiv.org/html/2504.10286v2#bib.bib81)): The uncertainty of the LLM’s response. Machine-generated text tends to have lower entropy.
5. (5)

   Log-likelihood log-rank ratio (LRR) ([Su et al., 2023](https://arxiv.org/html/2504.10286v2#bib.bib50)): The absolute value of the ratio of average log-probability to average log-rank of the LLM’s response. Machine-generated text tends to have a higher LRR.

Perturbation-based methods.
Given the perturbed versions of the target text $x$, $\tilde{x}\_{1},...,\tilde{x}\_{p}$, perturbation-based methods rely on calculating the difference (or ratio) on statistics such as log-probability and log-rank between the responses by using target text and its perturbed versions as prompts to query a LLM.
We experimented with two perturbation-based methods:

1. (6)

   DetectGPT ([Mitchell et al., 2023](https://arxiv.org/html/2504.10286v2#bib.bib54)): Machine-generated texts tend to have a larger discrepancy on average log-probability between the response by the target text $x$ and its perturbed versions $\tilde{x}\_{1},...,\tilde{x}\_{p}$. The discrepancy is calculated as $\log p(x)-\mathbb{E}\_{\tilde{x}\_{1\sim p}}[\log p(\tilde{x})]$.
2. (7)

   Normalized log-rank perturbation (NPR) ([Su et al., 2023](https://arxiv.org/html/2504.10286v2#bib.bib50)): Machine-generated text tends to have a higher ratio of perturbation’s log-rank to target text’s on average. Accordingly, the NPR score is calculated as $\mathbb{E}\_{\tilde{x}\_{1\sim p}}[\log r(\tilde{x})]/\log r(x)$.

Zero-shot methods’ experiment settings.
We follow the inference-efficient setting and default hyperparameters identical to ([Su et al., 2023](https://arxiv.org/html/2504.10286v2#bib.bib50)). We select the 1.5B parameter version of GPT-2 model (gpt2-xl) for querying the target text, and the 220M parameter version of the T5 model (t5-base) to generate 10 perturbations for each target text.
We focus on English submissions with at least 3 tokens and force the T5 model to rewrite at least 1 token when perturbing the target text. This results in 5,388,119 submissions by Chirpers,
6,076,726 submissions by Mastodon human users,
and 2,298,033 submissions by Mastodon bots.

We use the python sklearn package to evaluate the above methods using several threshold values. We utilize the AUROC score and the highest F1-score to depict the measure the performance across all thresholds, respectively. To avoid the bias caused by diverse sample sizes of the three groups (Chirpers, humans, bots), we calculate AUROC and the highest F1-score based on a randomly sampled subset with 1,000,000 submissions for each group, respectively. The above sampling and calculation are repeated 100 times to assess the methods’ average performance.

Zero-shot methods’ results.
Table [5](https://arxiv.org/html/2504.10286v2#S7.T5 "Table 5 ‣ 7. Detectability of Chirpers’ Submissions (RQ4) ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai") summarizes the performance of the seven
zero-shot AI text detection methods
when differentiating Chirpers’ text from Mastodon human users’ and bots’, and differentiating bots’ text from human users’ on Mastodon.

All detection methods achieve AUROC scores below 0.75.
The best methods for detecting Chirpers’ text from human users’ and bots on Mastodon are log probability (AUROC $=0.653$) and average token rank (AUROC $=0.737$), respectively.
Notably, entropy and the two perturbation-based methods (DetectGPT and NPR) achieve AUROC scores below 0.5, which means their performance is even worse than a random classification. Compared with their performance on the XSum, SQuAD, WritingP datasets presented in ([Su et al., 2023](https://arxiv.org/html/2504.10286v2#bib.bib50)), all the seven methods encounter a significant AUROC decrease (in a range from 0.2 to 0.3).
Such results suggest their limited capability in classifying LLM-generated social text from those derived from human-driven social networks.

Relationship between text length and detection performance.
A key distinction between our dataset and those in other LLM detection papers ([Su et al., 2023](https://arxiv.org/html/2504.10286v2#bib.bib50)) is the significantly shorter length of Chirper submissions. Over 99% of our collected post contains fewer than 200 tokens –— substantially shorter than the news articles (XSum), Wikipedia paragraphs (SQuAD), and prompted stories (WritingPrompts) used to evaluate prior work.

We hypothesize that zero-shot detection methods perform better on social texts involving richer tokens. To investigate this, we partition submissions from Chirpers and Mastodon human users into 10-token intervals (0–9, 10–19, …, 90–99), with an additional group for texts exceeding 100 tokens. To mitigate bias from uneven interval sizes, we evaluate detection performance on a balanced subset: 2,476 randomly sampled submissions per interval for both platforms, matching the smallest group size (Mastodon human users’ $>$100-token subset). This sampling and evaluation process is repeated 100 times to compute average performance metrics.

Figure [7](https://arxiv.org/html/2504.10286v2#S7.F7 "Figure 7 ‣ 7. Detectability of Chirpers’ Submissions (RQ4) ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai") present the distributions of AUROC and highest F1-scores across diverse token sizes.
We find that, as the token count increases, entropy, DetectGPT, and NPR can achieve higher AUROC, while other methods’ AUROC seem less influenced. In general, for all methods, the AUROC tends to converge to around 0.6.
Overall, all methods attain a highest F1-score of around 0.67, with a slight drop by around 0.04 F1-score observed on log probability, average token rank, and average log token rank. Therefore, increasing the token count can indeed help entropy and perturbation-based methods achieve better overall performance.
This could be because longer text generated by LLMs may introduce more “fake-ness”, leading to a larger entropy as they are positive correlated ([Mitchell et al., 2023](https://arxiv.org/html/2504.10286v2#bib.bib54)). Subsequently, this may enlarge the entropy gap between text generated by LLMs and humans. Additionally, longer text can generate more diverse perturbations, based on DetectGPT, LRR, and NPR’s design, which can help to capture the distinct patterns of LLM-generated text from humans’ more effectively ([Mitchell et al., 2023](https://arxiv.org/html/2504.10286v2#bib.bib54); [Su et al., 2023](https://arxiv.org/html/2504.10286v2#bib.bib50)). Nonetheless, zero-shot detection is still limited even with social text containing richer tokens. Our results align with prior study ([Sun et al., 2024](https://arxiv.org/html/2504.10286v2#bib.bib32)), highlighting the necessity to develop new metrics for zero-shot detection to cope with social text generated by AI agents.

### 7.2. Supervised Methods

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Model | Average Performance | | Best Performance | |
| Accuracy | F1-score | Accuracy | F1-score |
| roberta-base | $0.984\_{\penalty\ \pm 8.97e^{-4}}$ | $0.984\_{\penalty\ \pm 8.76e^{-4}}$ | 0.986 | 0.986 |
| roberta-large | $0.987\_{\penalty\ \pm 1.42e^{-3}}$ | $0.987\_{\penalty\ \pm 1.39e^{-3}}$ | 0.989 | 0.989 |

Table 6. Performance of fine-tuned RoBERTa models in classifying Chirpers’ submissions.


|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
| Benchmark | Overall | | Class: AI | | Class: Human | |
| Acc. | F1 | Precision | Recall | Precision | Recall |
| TweepFake | 0.461 | 0.044 | 0.300 | 0.024 | 0.469 | 0.939 |
| MultiSocial | 0.436 | 0.529 | 0.992 | 0.360 | 0.176 | 0.979 |
| SemEval 2024 | $0.720$ | 0.648 | 0.723 | 0.587 | 0.719 | 0.824 |

Table 7. Performance of our best fine-tuned RoBERTa model on benchmarks for AI-generated social text detection. The column “Class: AI” and “Class: Human” present the class-wise performance.

We next investigate whether fine-tuned language models can effectively classify Chirpers’ submissions. Referring to ([Su et al., 2023](https://arxiv.org/html/2504.10286v2#bib.bib50)), we experiment with two RoBERTa versions ([Liu et al., 2019](https://arxiv.org/html/2504.10286v2#bib.bib26)), roberta-base and roberta-large, which have been validated by recent AI-generated detection research ([He et al., 2024b](https://arxiv.org/html/2504.10286v2#bib.bib6); [Sun et al., 2025](https://arxiv.org/html/2504.10286v2#bib.bib5); [Wu et al., 2024](https://arxiv.org/html/2504.10286v2#bib.bib4)).

Supervised methods’ experiment settings.
We fine-tune the models based on an equally sampled subset with 100,000 submissions from Chirpers and Mastodon human respectively. We employ a train-validate-test split with a ratio of 70:10:20. Additionally, following a RoBerTa parameter search setting suggested in ([Liu and Wang, 2021](https://arxiv.org/html/2504.10286v2#bib.bib34)), we utilize Optuna framework ([Akiba et al., 2019](https://arxiv.org/html/2504.10286v2#bib.bib25)) to perform a 10-trial hyperparameter search for each model based on 10% training and validation set. We repeat the sampling without replacement for 10 times, as well as the training and testing, to assess the models’ average performance. The whole process covers $\sim 20\%$ total submissions by Chirpers and Mastodon human. All models are trained on 4 NVIDIA RTX 5000 Ada Gen 32GB GPU.

Supervised methods’ results. Table [6](https://arxiv.org/html/2504.10286v2#S7.T6 "Table 6 ‣ 7.2. Supervised Methods ‣ 7. Detectability of Chirpers’ Submissions (RQ4) ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai") summarizes the performance of our fine-tuned roberta-base and roberta-large model in classifying Chirpers’ submissions. On average, both the two fine-tuned model can achieve a high accuracy and a high F1-score — both over 0.98, respectively. Such results suggest our fine-tuned language models can accurately differentiate social text generated by Chirpers from those by Mastodon human users.

Fine-tuned models’ generalizability.
To assess the generalizability of our fine-tuned models in classifying AI-generated text across different platforms, we also evaluate their performance on three other well-established datasets:

- •

  TweepFake ([Fagni et al., 2021](https://arxiv.org/html/2504.10286v2#bib.bib17)): The TweepFake dataset is a collection of tweets designed for detecting deepfake tweets. The dataset is created by extracting tweets from both AI-driven bot and human accounts.
- •

  MultiSocial ([Macko et al., 2024](https://arxiv.org/html/2504.10286v2#bib.bib16)): The MultiSocial dataset is a multilingual and multi-platform dataset designed for social media bot detection. MultiSocial includes machine-generated and human-written social posts from Discord, Gab, Telegram, Twitter, and WhatsApp, covering 22 languages.
- •

  SemEval 2024 Task 8 ([Wang et al., 2024c](https://arxiv.org/html/2504.10286v2#bib.bib15)): SemEval-2024 Task 8 is a shared task focusing on detecting machine-generated text in a multilingual, multi-domain, and multi-generator setting. We select dataset provided for its `Subtask A`, whose goal is to accurately classify a text as either produced by a human or generated by a LLMs.

Table [7](https://arxiv.org/html/2504.10286v2#S7.T7 "Table 7 ‣ 7.2. Supervised Methods ‣ 7. Detectability of Chirpers’ Submissions (RQ4) ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai") summarizes our best-performing fine-tuned RoBERTa model’s performance on the three benchmarks.
Overall, the model exhibits limited generalizability, achieving an F1-score below 0.65 across all benchmarks. Notably, our model’s accuracy falls below 0.5 when applied to both TweepFake and MultiSocial, suggesting that the model is overfitted to Chirper.ai and Mastodon data.
However, a deeper examination of class-wise performance reveals a notable disparity: our model achieves a high recall rate ($>0.8$) for human-generated text but struggles with AI-generated content, yielding a recall rate below 0.6. This suggests that the primary challenge stems from misclassifying AI-generated text as human-written, rather than the inverse. Such asymmetry implies that the model retains strong discriminative capabilities for human-generated content but fails to generalize effectively to AI-generated text across diverse social platforms. Recent work highlights that different LLMs exhibit distinct stylistic fingerprints ([Soto et al., 2024](https://arxiv.org/html/2504.10286v2#bib.bib29)). Our training data is limited to Chirper.ai. Given this limitation, our fine-tuned model likely adapts to platform- and LLM-specific artifacts rather than learning generalizable features of AI-generated text.

This indicates that any future deployments must rely on fine-tuning, to ensure that the classifiers are tailored to the LLM employed. Importantly, our results show that these fine-tuned language models could serve as a promising strategy for detecting AI-generated content in specific social network ecosystems, particularly when monitoring known AI agents operating within constrained platforms.
However, this approach must be applied judiciously to the broader landscape of social media, where diverse AI agents with distinct LLM backends interact with human users.

## 8. Discussion

Our study of a major LLM-driven social network sheds light on problematic behaviors among LLM-driven agents.
In this section, we discuss how our results are useful for the wider community to design a responsible AI-mediated communication ecosystem and enhance moderation mechanisms for LLM-driven social agents.

### 8.1. Potential Risks in AI Agent Systems

Previous HCI research has focused on explaining the relationship between human interaction and the appearance of harmful behaviors ([Zhang et al., 2025b](https://arxiv.org/html/2504.10286v2#bib.bib28); [Ibrahim et al., 2024](https://arxiv.org/html/2504.10286v2#bib.bib27)).
In contrast, our findings highlight that human interactions may not play the sole role in driving AI agents’ abusive behaviors. In the case of Chirper.ai, even without human interactions, 31% of non-abusive Chirpers post abusive submissions, contributing over 20% of abusive submissions. This indicates that that agents’ abusive behaviors may arise from intrinsic factors, rather than being a reaction to human provocation. Thus, moderation paradigms that prioritize reactive measures to human-centered content ([Gao et al., 2024](https://arxiv.org/html/2504.10286v2#bib.bib44); [Houde et al., 2025](https://arxiv.org/html/2504.10286v2#bib.bib43)) may be insufficient for AI agent ecosystems, where harmful outputs emerge organically from models.

Additionally, our results suggest that abusive posts draw more active engagement from other agents, catalyzing them to produce more abusive comments through content parroting ($\lx@sectionsign$[5](https://arxiv.org/html/2504.10286v2#S5 "5. Profiling Abusive Chirper Submissions (RQ2) ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai")). This emergent behavior creates a vulnerability that could be exploited by malactors seeking to weaponize AI-mediated communication systems. For instance, a malicious user could deliberately craft posts containing harmful content while strategically mentioning numerous AI agents. Such orchestrated attacks could trigger cascading abusive responses from the agents, effectively amplifying toxicity within the system without direct human participation. This self-reinforcing dynamic highlights how AI agents, unlike human users, can inadvertently become vectors for abuse propagation even without explicit adversarial intent.

Beyond the abusive content, our work also highlights potential privacy risks. Particularly, there are two dimensions to such risks. First, there is a risk to human users’ privacy in hybrid environments, where AI agents and human users co-exist. For example, prior research shows that trending topics and online communities’ behaviors can impact users’ self-disclosure patterns ([Du et al., 2024](https://arxiv.org/html/2504.10286v2#bib.bib31); [Chen et al., 2024](https://arxiv.org/html/2504.10286v2#bib.bib30)). Our results show that AI agents propagate sensitive information revealing patterns such as age, gender, and relationship information ([Haq et al., 2025](https://arxiv.org/html/2504.10286v2#bib.bib83)). Thus, this may make human users more susceptible to sharing similar information ([Krsek et al., 2025](https://arxiv.org/html/2504.10286v2#bib.bib46)). Such personal information can be used in cyberbullying or doxing attacks, thus extending the scale of harm. Second, there is a risk to the creators of AI bots. The significant correlation between the prompts and Chirpers’ self-disclosure suggests that these posts could easily be used to infer content from the prompts. These observations encourage further research on developing safeguard mechanisms to detect and prevent prompt information leakage by agents in communication.

### 8.2. Design Implications for Mitigation Approaches

While the aforementioned risks necessitate caution, the emergence of LLM-based platforms like Chirper.ai offers a unique opportunity for the social computing community. Ranging from sandbox simulations ([Gao et al., 2023](https://arxiv.org/html/2504.10286v2#bib.bib64); [Yan et al., 2025](https://arxiv.org/html/2504.10286v2#bib.bib3)) to in-the-wild AI-assisted communication systems ([Wei et al., 2025](https://arxiv.org/html/2504.10286v2#bib.bib60); [Zhu et al., 2026](https://arxiv.org/html/2504.10286v2#bib.bib61)), these platforms allow researchers to study potential risks associated with agents’ collective behaviors, such as the emergence of toxicity.

Our study has shed light on the emergence of spontaneous toxicity and agents’ engagement with harmful posts. These risks should not be viewed as platform-specific anomalies, but rather as challenges inherent to agent-driven social networks. As we are transitioning toward more advanced agent-based social platforms (e.g., Moltbook), the research community should explore robust moderation frameworks that address issues within both individual and collective agent behaviors.

To mitigate these risks, future research could consider proactive approaches. Real-time content moderation systems could detect and filter harmful agent behaviors before they are posted, reducing the spread of abusive material ([Alsoubai et al., 2024](https://arxiv.org/html/2504.10286v2#bib.bib42); [Brokate et al., 2024](https://arxiv.org/html/2504.10286v2#bib.bib41); [Andersen et al., 2021](https://arxiv.org/html/2504.10286v2#bib.bib40)).
Additionally, refining the ethical alignment of AI models may help prevent such behaviors from emerging in the first place, e.g., debiasing training data and using harm-reduction objectives ([Dai et al., 2024](https://arxiv.org/html/2504.10286v2#bib.bib39); [McKenna et al., 2023](https://arxiv.org/html/2504.10286v2#bib.bib38)). Most critically, developing self-moderation mechanisms for agents could create endogenous safeguards, such as self-reflection ([Wang et al., 2024d](https://arxiv.org/html/2504.10286v2#bib.bib24)) and multi-agent peer moderation ([Xiang et al., 2024](https://arxiv.org/html/2504.10286v2#bib.bib18); [Hu et al., 2025](https://arxiv.org/html/2504.10286v2#bib.bib19)). These mechanisms are supposed to evaluate potential responses against harm metrics before engagement, dynamically adjusting interaction patterns to de-escalate abusive exchanges while preserving legitimate discourse. Simultaneously, at the systemic level, we must design intervention strategies to disrupt the observed parroting effects and engagement-driven feedback loops that catalyze information cascades.

In addition, our network analysis reveals novel angles to support moderation based on agents’ network positions. We find that abusive Chirpers occupy central network positions with high in-degree and PageRank, making them influential and increasing the risk of abusive content spreading through their follower networks. Our experimental results show that machine learning classifiers achieve promising performance (high recall: $0.83$) and F1-scores: $>0.7$) in identifying abusive Chirpers merely based on their network features.
This suggests that moderators may be able to flag potentially abusive agents using network features alone, reducing the cost of classification.

### 8.3. Directions for Agent Detection Tools

Our study characterizes feature difference between Chirpers and Mastodon human users regarding their submissions, abusive behaviors, and network structures. These empirically observed differences suggest the ability to build detection systems aimed at distinguishing AI-generated agents from human users. One approach applied to traditional bot detection ([Yang et al., 2020](https://arxiv.org/html/2504.10286v2#bib.bib13); [Shevtsov et al., 2022](https://arxiv.org/html/2504.10286v2#bib.bib14)), is to employ classical machine learning (ML) models (e.g., logistic regression, random forests, and XGBoost ([Chen and Guestrin, 2016](https://arxiv.org/html/2504.10286v2#bib.bib22)))
to incorporate features from submissions, behaviors, and the network.
However, the dependence on manual feature engineering requires domain expertise and manual effort to pre-process data. This hinders further application of such models in scenarios where the AI agents rapidly evolve. An alternative direction is to explore the use of deep learning (DL) and representation learning techniques that can automatically learn discriminative features from agents’ raw data ([Kudugunta and Ferrara, 2018](https://arxiv.org/html/2504.10286v2#bib.bib12); [Liu et al., 2023](https://arxiv.org/html/2504.10286v2#bib.bib11)). For example, developers could employ models like E5 ([Wang et al., 2024b](https://arxiv.org/html/2504.10286v2#bib.bib1)) and node2vec ([Grover and Leskovec, 2016](https://arxiv.org/html/2504.10286v2#bib.bib10)) to extract embeddings of agents’ submission text and social graphs and then feed them to a graph neural networks (GNNs) for training a detector.

Another emerging direction is to use large language models. In addition to analyzing the content and linguistic style of agents’ submissions, developers may interoperate information of agents’ other behavioral features as context information into language model’s input to enhance its classification performance. For example, similar to APT-Pipe ([Zhu et al., 2024b](https://arxiv.org/html/2504.10286v2#bib.bib9)), developers could utilize prompt engineering to combine numerical features regarding abusive behaviors and network structures with textual input.

### 8.4. Potential Roles of Introducing Human Interaction.

A promising application of agent social systems like Chirper.ai would be building a hybrid social space integrating both human and agent interaction. Thus, we here highlight the potential role of human users in impacting agents’ network dynamics and abusive behaviors.

Regarding the network structure, our results suggest that, while most connection among human users on Mastodon derive from central nodes (*e.g.,*users with high PageRank), Chirpers rely less on these central nodes, where connections are distributed more evenly across the network ($\lx@sectionsign$[6](https://arxiv.org/html/2504.10286v2#S6 "6. Analyzing Chirpers’ Network (RQ3) ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai")). We conjecture that the reason behind this is that Chirpers’ following behaviors are operated by a probability-based algorithm. In contrast, human users may possess individual preference towards certain agents, which can lead to the formation of tight-knit communities or small-world structures. These human-driven communities would likely form around shared ideologies or high-status agents, creating clusters of dense interaction that differ significantly from the more uniform, stochastic networks generated by agents alone.
Moreover, the introduction of human preferences could thus foster echo chambers or highly resilient sub-communities, which may be leverage to intensify the diffusion of weaponized information (*e.g.,*disinformation and propaganda).

Furthermore, human users could play a role in the public moderation of abusive agent behaviors. Our results flag that agents can fall into abusive patterns when interacting with abusive content. To mitigate this problem, the system could introduce a mechanism like X’s community notes for human users to report, vote on, or validate agents’ behaviors.
This crowd-sourced moderation would not only provide a layer of oversight to correct the failures of algorithmic content review, but could also serve as a valuable training signal. The curated dataset of human-verified abuse could be used to fine-tune the agents’ own behavioral models, creating a feedback loop that progressively reduces harmful interactions and fosters a healthier, self-correcting social ecosystem.

## 9. Conclusion

Summary & Insights.
We have presented a large-scale analysis of LLM social agents’ behavioral patterns, using Chirper.ai as a case study. By comparing these agents with human users on Mastodon, we identify distinct differences in posting behaviors and follow-network structures. More critically, our study reveals concerning trends in LLM-driven social networks, including the widespread use of hallucinated mentions, information leakage, and active participation in abusive content.

While LLMs, prompts, and deployment practices continue to evolve rapidly, these results can be interpreted as empirical observations and serve as a proxy for platform developers to take lessons from the vulnerabilities exposed from existing design of Chirper.ai. Developers are suggested to implement automatic content checking tools to correct hallucinated mentions and filter out sensitive information linking to agents’ system prompt designs. Moreover, mechanisms to regulate agents’ abusive behaviors must be taken into consideration, to prevent the amplification of abusive content through either agents’ interactions or their social networks. We believe these insights can contribute to the future development of more responsible AI-mediated communication systems.

Limitations & Future work.
Several avenues remain open for further exploration. First, our analysis is currently limited to Chirper.ai and Mastodon; future research could expand to other LLM-driven platforms (*e.g.,*Butterflies.ai) and human-dominated networks (*e.g.,*Bluesky) for a more comprehensive comparison.
Second, our evaluation of AI-generated text detection reveals the limited capability of zero-shot methods and overfitting issue in supervised methods.
Subsequent work could refine these approaches or develop generalizable detection methods using our dataset and other AI text detection benchmarks to enhance identification accuracy and robustness. Addressing these gaps would deepen our understanding of LLM agents’ social behaviors and improve safeguards against misuse.

###### Acknowledgements.

This work was supported in part by the National Key Research and Development Program of China under Grant 2024YFC3307602, and the Guangdong Provincial Talent Program, Grant No.2023JC10X009.

## References

- Ai et al. (2017)
  W. Ai, X. Lu, X. Liu, N. Wang, G. Huang, and Q. Mei
  Untangling emoji popularity through semantic embeddings.
  Proceedings of the International AAAI Conference on Web and Social Media 11 (1), pp. 2–11.
  External Links: [Link](https://ojs.aaai.org/index.php/ICWSM/article/view/14903),
  [Document](https://dx.doi.org/10.1609/icwsm.v11i1.14903)
  Cited by: [§4.1](https://arxiv.org/html/2504.10286v2#S4.SS1.p4.1 "4.1. Submission Composition Features ‣ 4. Characterizing Chirpers’ Submissions (RQ1) ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Akiba et al. (2019)
  T. Akiba, S. Sano, T. Yanase, T. Ohta, and M. Koyama
  Optuna: a next-generation hyperparameter optimization framework.
  In The 25th ACM SIGKDD International Conference on Knowledge Discovery & Data Mining,
  pp. 2623–2631.
  Cited by: [§7.2](https://arxiv.org/html/2504.10286v2#S7.SS2.p2.1 "7.2. Supervised Methods ‣ 7. Detectability of Chirpers’ Submissions (RQ4) ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Alsoubai et al. (2024)
  A. Alsoubai, J. Park, S. Qadir, G. Stringhini, A. Razi, and P. J. Wisniewski
  Systemization of knowledge (sok): creating a research agenda for human-centered real-time risk detection on social media platforms.
  In Proceedings of the 2024 CHI Conference on Human Factors in Computing Systems,
  CHI ’24, New York, NY, USA.
  External Links: ISBN 9798400703300,
  [Link](https://doi.org/10.1145/3613904.3642315),
  [Document](https://dx.doi.org/10.1145/3613904.3642315)
  Cited by: [§8.2](https://arxiv.org/html/2504.10286v2#S8.SS2.p3.1 "8.2. Design Implications for Mitigation Approaches ‣ 8. Discussion ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Andersen et al. (2021)
  J. S. Andersen, O. Zukunft, and W. Maalej
  REM: efficient semi-automated real-time moderation of online forums.
  In Proceedings of the 59th Annual Meeting of the Association for Computational Linguistics and the 11th International Joint Conference on Natural Language Processing: System Demonstrations, H. Ji, J. C. Park, and R. Xia (Eds.),
  Online, pp. 142–149.
  External Links: [Link](https://aclanthology.org/2021.acl-demo.17/),
  [Document](https://dx.doi.org/10.18653/v1/2021.acl-demo.17)
  Cited by: [§8.2](https://arxiv.org/html/2504.10286v2#S8.SS2.p3.1 "8.2. Design Implications for Mitigation Approaches ‣ 8. Discussion ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Balani and De Choudhury (2015)
  S. Balani and M. De Choudhury
  Detecting and characterizing mental health related self-disclosure in social media.
  In Proceedings of the 33rd annual ACM conference extended abstracts on human factors in computing systems,
  pp. 1373–1378.
  Cited by: [§4.2](https://arxiv.org/html/2504.10286v2#S4.SS2.p1.1 "4.2. Self-disclosure in Submissions ‣ 4. Characterizing Chirpers’ Submissions (RQ1) ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Bashardoust et al. (2024)
  A. Bashardoust, S. Feuerriegel, and Y. R. Shrestha
  Comparing the willingness to share for human-generated vs. ai-generated fake news.
  Proc. ACM Hum.-Comput. Interact. 8 (CSCW2).
  External Links: [Link](https://doi.org/10.1145/3687028),
  [Document](https://dx.doi.org/10.1145/3687028)
  Cited by: [§2](https://arxiv.org/html/2504.10286v2#S2.p7.1 "2. Background & Related Work ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Bertaglia et al. (2024)
  T. Bertaglia, L. Heisig, R. Kaushal, and A. Iamnitchi
  InstaSynth: opportunities and challenges in generating synthetic instagram data with chatgpt for sponsored content detection.
  Proceedings of the International AAAI Conference on Web and Social Media 18 (1), pp. 139–151.
  External Links: [Link](https://ojs.aaai.org/index.php/ICWSM/article/view/31303),
  [Document](https://dx.doi.org/10.1609/icwsm.v18i1.31303)
  Cited by: [§4.1](https://arxiv.org/html/2504.10286v2#S4.SS1.p4.1 "4.1. Submission Composition Features ‣ 4. Characterizing Chirpers’ Submissions (RQ1) ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Bevendorff et al. (2024)
  J. Bevendorff, X. B. Casals, B. Chulvi, D. Dementieva, A. Elnagar, D. Freitag, M. Fröbe, D. Korenčić, M. Mayerl, A. Mukherjee, A. Panchenko, M. Potthast, F. Rangel, P. Rosso, A. Smirnova, E. Stamatatos, B. Stein, M. Taulé, D. Ustalov, M. Wiegmann, and E. Zangerle
  Overview of pan 2024: multi-author writing style analysis, multilingual text detoxification, oppositional thinking analysis, and generative ai authorship verification: extended abstract.
  In Advances in Information Retrieval: 46th European Conference on Information Retrieval, ECIR 2024, Glasgow, UK, March 24–28, 2024, Proceedings, Part VI,
  Berlin, Heidelberg, pp. 3–10.
  External Links: ISBN 978-3-031-56071-2,
  [Link](https://doi.org/10.1007/978-3-031-56072-9_1),
  [Document](https://dx.doi.org/10.1007/978-3-031-56072-9%5F1)
  Cited by: [§A.3](https://arxiv.org/html/2504.10286v2#A1.SS3.p2.1 "A.3. Validation for self-disclosure detection model and Perspective API. ‣ Appendix A Appendix ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Bin Zia et al. (2024)
  H. Bin Zia, J. He, I. Castro, and G. Tyson
  Fediverse migrations: a study of user account portability on the mastodon social network.
  In Proceedings of the 2024 ACM on Internet Measurement Conference,
  IMC ’24, New York, NY, USA, pp. 68–75.
  External Links: ISBN 9798400705922,
  [Link](https://doi.org/10.1145/3646547.3689027),
  [Document](https://dx.doi.org/10.1145/3646547.3689027)
  Cited by: [§3](https://arxiv.org/html/2504.10286v2#S3.p3.1 "3. Data Collection ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Brokate et al. (2024)
  C. Brokate, M. Richard, L. Giordani, and J. Liénard
  SWATTING spambots: real-time detection of malicious bots on x.
  In Companion Proceedings of the ACM Web Conference 2024,
  WWW ’24, New York, NY, USA, pp. 818–821.
  External Links: ISBN 9798400701726,
  [Link](https://doi.org/10.1145/3589335.3651564),
  [Document](https://dx.doi.org/10.1145/3589335.3651564)
  Cited by: [§8.2](https://arxiv.org/html/2504.10286v2#S8.SS2.p3.1 "8.2. Design Implications for Mitigation Approaches ‣ 8. Discussion ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Chen and Guestrin (2016)
  T. Chen and C. Guestrin
  XGBoost: a scalable tree boosting system.
  In Proceedings of the 22nd ACM SIGKDD International Conference on Knowledge Discovery and Data Mining,
  KDD ’16, New York, NY, USA, pp. 785–794.
  External Links: ISBN 9781450342322,
  [Link](https://doi.org/10.1145/2939672.2939785),
  [Document](https://dx.doi.org/10.1145/2939672.2939785)
  Cited by: [§6](https://arxiv.org/html/2504.10286v2#S6.p9.1 "6. Analyzing Chirpers’ Network (RQ3) ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai"),
  [§8.3](https://arxiv.org/html/2504.10286v2#S8.SS3.p1.1 "8.3. Directions for Agent Detection Tools ‣ 8. Discussion ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Chen et al. (2024)
  Y. Chen, S. Hale, and B. Hogan
  “I am 30f and need advice!”: a mixed-method analysis of the effects of advice-seekers’ self-disclosure on received replies.
  In Proceedings of the International AAAI Conference on Web and Social Media,
  Vol. 18, pp. 276–288.
  Cited by: [§8.1](https://arxiv.org/html/2504.10286v2#S8.SS1.p3.1 "8.1. Potential Risks in AI Agent Systems ‣ 8. Discussion ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- cjadams et al. (2017)
  cjadams, J. Sorensen, J. Elliott, L. Dixon, M. McDonald, nithum, and W. Cukierski
  Toxic comment classification challenge.
  Note: <https://kaggle.com/competitions/jigsaw-toxic-comment-classification-challenge>Kaggle
  Cited by: [§A.3](https://arxiv.org/html/2504.10286v2#A1.SS3.p2.1 "A.3. Validation for self-disclosure detection model and Perspective API. ‣ Appendix A Appendix ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Constantinides et al. (2024)
  M. Constantinides, E. Bogucka, D. Quercia, S. Kallio, and M. Tahaei
  RAI guidelines: method for generating responsible ai guidelines grounded in regulations and usable by (non-)technical roles.
  Proc. ACM Hum.-Comput. Interact. 8 (CSCW2).
  External Links: [Link](https://doi.org/10.1145/3686927),
  [Document](https://dx.doi.org/10.1145/3686927)
  Cited by: [§2](https://arxiv.org/html/2504.10286v2#S2.p7.1 "2. Background & Related Work ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Dai et al. (2024)
  S. Dai, C. Xu, S. Xu, L. Pang, Z. Dong, and J. Xu
  Bias and unfairness in information retrieval systems: new challenges in the llm era.
  In Proceedings of the 30th ACM SIGKDD Conference on Knowledge Discovery and Data Mining,
  KDD ’24, New York, NY, USA, pp. 6437–6447.
  External Links: ISBN 9798400704901,
  [Link](https://doi.org/10.1145/3637528.3671458),
  [Document](https://dx.doi.org/10.1145/3637528.3671458)
  Cited by: [§8.2](https://arxiv.org/html/2504.10286v2#S8.SS2.p3.1 "8.2. Design Implications for Mitigation Approaches ‣ 8. Discussion ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Dammu et al. (2024)
  P. P. S. Dammu, H. Jung, A. Singh, M. Choudhury, and T. Mitra
  "They are uncultured": unveiling covert harms and social threats in llm generated conversations.
  External Links: 2405.05378,
  [Link](https://arxiv.org/abs/2405.05378)
  Cited by: [§5](https://arxiv.org/html/2504.10286v2#S5.p1.1 "5. Profiling Abusive Chirper Submissions (RQ2) ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- De Choudhury and De (2014)
  M. De Choudhury and S. De
  Mental health discourse on reddit: self-disclosure, social support, and anonymity.
  In Proceedings of the international AAAI conference on web and social media,
  Vol. 8, pp. 71–80.
  Cited by: [§4.2](https://arxiv.org/html/2504.10286v2#S4.SS2.p2.1 "4.2. Self-disclosure in Submissions ‣ 4. Characterizing Chirpers’ Submissions (RQ1) ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Du et al. (2024)
  T. Du, J. Kim, A. Squicciarini, and S. Rajtmajer
  Toward context-aware privacy enhancing technologies for online self-disclosure.
  Proceedings of the AAAI Conference on Human Computation and Crowdsourcing 12 (1), pp. 44–54.
  External Links: [Link](https://ojs.aaai.org/index.php/HCOMP/article/view/31599),
  [Document](https://dx.doi.org/10.1609/hcomp.v12i1.31599)
  Cited by: [§8.1](https://arxiv.org/html/2504.10286v2#S8.SS1.p3.1 "8.1. Potential Risks in AI Agent Systems ‣ 8. Discussion ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Fagni et al. (2021)
  T. Fagni, F. Falchi, M. Gambini, A. Martella, and M. Tesconi
  TweepFake: about detecting deepfake tweets.
  PLOS ONE 16 (5), pp. e0251415.
  External Links: ISSN 1932-6203,
  [Link](http://dx.doi.org/10.1371/journal.pone.0251415),
  [Document](https://dx.doi.org/10.1371/journal.pone.0251415)
  Cited by: [1st item](https://arxiv.org/html/2504.10286v2#S7.I3.i1.p1.1.1 "In 7.2. Supervised Methods ‣ 7. Detectability of Chirpers’ Submissions (RQ4) ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Gao et al. (2023)
  C. Gao, X. Lan, Z. Lu, J. Mao, J. Piao, H. Wang, D. Jin, and Y. Li
  S3: social-network simulation system with large language model-empowered agents.
  arXiv preprint arXiv:2307.14984.
  Cited by: [§1](https://arxiv.org/html/2504.10286v2#S1.p2.1 "1. Introduction ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai"),
  [§2](https://arxiv.org/html/2504.10286v2#S2.p1.1 "2. Background & Related Work ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai"),
  [§8.2](https://arxiv.org/html/2504.10286v2#S8.SS2.p1.1 "8.2. Design Implications for Mitigation Approaches ‣ 8. Discussion ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Gao et al. (2024)
  Y. Gao, F. Liu, L. Wang, D. Zheng, Z. Lian, W. Wang, W. Yang, S. Li, X. Wang, W. Chen, J. Dai, Q. Fu, W. Yang, L. Huang, and W. Liu
  Enhancing human experience in human-agent collaboration: A human-centered modeling approach based on positive human gain.
  In The Twelfth International Conference on Learning Representations,
  ICLR 2024, Vienna, Austria, May 7-11, 2024,
  External Links: [Link](https://openreview.net/forum?id=BqEvdOS1Hs)
  Cited by: [§8.1](https://arxiv.org/html/2504.10286v2#S8.SS1.p1.1 "8.1. Potential Risks in AI Agent Systems ‣ 8. Discussion ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Garimella et al. (2018)
  K. Garimella, G. De Francisci Morales, A. Gionis, and M. Mathioudakis
  Political discourse on social media: echo chambers, gatekeepers, and the price of bipartisanship.
  In Proceedings of the 2018 world wide web conference,
  pp. 913–922.
  Cited by: [§6](https://arxiv.org/html/2504.10286v2#S6.p6.1 "6. Analyzing Chirpers’ Network (RQ3) ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Gehrmann et al. (2019)
  S. Gehrmann, H. Strobelt, and A. M. Rush
  Gltr: statistical detection and visualization of generated text.
  arXiv preprint arXiv:1906.04043.
  Cited by: [item 4](https://arxiv.org/html/2504.10286v2#S7.I1.i4.p1.1.1 "In 7.1. Zero-shot Detection ‣ 7. Detectability of Chirpers’ Submissions (RQ4) ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- GlobeNewsWire (2024)
  GlobeNewsWire
  Butterflies ai raises seed round, launches first social media platform where people and ai friends co-exist.
  External Links: [Link](https://www.globenewswire.com/news-release/2024/06/18/2900674/0/en/Butterflies-AI-Raises-Seed-Round-Launches-First-Social-Media-Platform-Where-People-and-AI-Friends-Co-Exist.html)
  Cited by: [§1](https://arxiv.org/html/2504.10286v2#S1.p1.1 "1. Introduction ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Grover and Leskovec (2016)
  A. Grover and J. Leskovec
  Node2vec: scalable feature learning for networks.
  In Proceedings of the 22nd ACM SIGKDD international conference on Knowledge discovery and data mining,
  pp. 855–864.
  Cited by: [§8.3](https://arxiv.org/html/2504.10286v2#S8.SS3.p1.1 "8.3. Directions for Agent Detection Tools ‣ 8. Discussion ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Hao et al. (2024)
  G. Hao, J. Wu, Q. Pan, and R. Morello
  Quantifying the uncertainty of llm hallucination spreading in complex adaptive social networks.
  Scientific reports 14 (1), pp. 16375.
  Cited by: [§2](https://arxiv.org/html/2504.10286v2#S2.p2.1 "2. Background & Related Work ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Haq et al. (2025)
  E. Haq, S. Jangra, S. De, N. Sastry, and G. Tyson
  Unpacking the layers: exploring self-disclosure norms, engagement dynamics, and privacy implications.
  arXiv preprint arXiv:2502.10701.
  Cited by: [§A.3](https://arxiv.org/html/2504.10286v2#A1.SS3.p1.1 "A.3. Validation for self-disclosure detection model and Perspective API. ‣ Appendix A Appendix ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai"),
  [§4.2](https://arxiv.org/html/2504.10286v2#S4.SS2.p2.1 "4.2. Self-disclosure in Submissions ‣ 4. Characterizing Chirpers’ Submissions (RQ1) ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai"),
  [§8.1](https://arxiv.org/html/2504.10286v2#S8.SS1.p3.1 "8.1. Potential Risks in AI Agent Systems ‣ 8. Discussion ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Hartvigsen et al. (2022)
  T. Hartvigsen, S. Gabriel, H. Palangi, M. Sap, D. Ray, and E. Kamar
  ToxiGen: a large-scale machine-generated dataset for implicit and adversarial hate speech detection.
  In Proceedings of the 60th Annual Meeting of the Association for Computational Linguistics,
  Cited by: [§5](https://arxiv.org/html/2504.10286v2#S5.p1.1 "5. Profiling Abusive Chirper Submissions (RQ2) ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- He et al. (2024a)
  J. K. He, F. P. Wallis, A. Gvirtz, and S. Rathje
  Artificial intelligence chatbots mimic human collective behaviour.
  British Journal of Psychology.
  Cited by: [§1](https://arxiv.org/html/2504.10286v2#S1.p2.1 "1. Introduction ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai"),
  [§2](https://arxiv.org/html/2504.10286v2#S2.p5.1 "2. Background & Related Work ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- He et al. (2023a)
  J. He, H. B. Zia, I. Castro, A. Raman, N. Sastry, and G. Tyson
  Flocking to mastodon: tracking the great twitter migration.
  In Proceedings of the 2023 ACM on Internet Measurement Conference,
  IMC ’23, New York, NY, USA, pp. 111–123.
  External Links: ISBN 9798400703829,
  [Link](https://doi.org/10.1145/3618257.3624819),
  [Document](https://dx.doi.org/10.1145/3618257.3624819)
  Cited by: [§3](https://arxiv.org/html/2504.10286v2#S3.p3.1 "3. Data Collection ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- He et al. (2023b)
  J. He, H. B. Zia, I. Castro, A. Raman, N. Sastry, and G. Tyson
  Flocking to mastodon: tracking the great twitter migration.
  In Proceedings of the 2023 ACM on Internet Measurement Conference,
  pp. 111–123.
  Cited by: [§3](https://arxiv.org/html/2504.10286v2#S3.p1.1 "3. Data Collection ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- He et al. (2024b)
  X. He, X. Shen, Z. Chen, M. Backes, and Y. Zhang
  MGTBench: benchmarking machine-generated text detection.
  In Proceedings of the 2024 on ACM SIGSAC Conference on Computer and Communications Security,
  CCS ’24, New York, NY, USA, pp. 2251–2265.
  External Links: ISBN 9798400706363,
  [Link](https://doi.org/10.1145/3658644.3670344),
  [Document](https://dx.doi.org/10.1145/3658644.3670344)
  Cited by: [§7.1](https://arxiv.org/html/2504.10286v2#S7.SS1.p1.1 "7.1. Zero-shot Detection ‣ 7. Detectability of Chirpers’ Submissions (RQ4) ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai"),
  [§7.2](https://arxiv.org/html/2504.10286v2#S7.SS2.p1.1 "7.2. Supervised Methods ‣ 7. Detectability of Chirpers’ Submissions (RQ4) ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- He et al. (2024c)
  Y. He, Y. Gu, R. Shekhar, I. Castro, and G. Tyson
  Making the pick: understanding professional editor comment curation in online news.
  In Proceedings of the International AAAI Conference on Web and Social Media,
  Vol. 18, pp. 557–568.
  Cited by: [§6](https://arxiv.org/html/2504.10286v2#S6.p9.1 "6. Analyzing Chirpers’ Network (RQ3) ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Houde et al. (2025)
  S. Houde, K. Brimijoin, M. Muller, S. I. Ross, D. A. Silva Moran, G. E. Gonzalez, S. Kunde, M. A. Foreman, and J. D. Weisz
  Controlling ai agent participation in group conversations: a human-centered approach.
  In Proceedings of the 30th International Conference on Intelligent User Interfaces,
  IUI ’25, New York, NY, USA, pp. 390–408.
  External Links: ISBN 9798400713064,
  [Link](https://doi.org/10.1145/3708359.3712089),
  [Document](https://dx.doi.org/10.1145/3708359.3712089)
  Cited by: [§8.1](https://arxiv.org/html/2504.10286v2#S8.SS1.p1.1 "8.1. Potential Risks in AI Agent Systems ‣ 8. Discussion ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Hu et al. (2025)
  J. Hu, Y. Dong, S. Ao, Z. Li, B. Wang, L. Singh, G. Cheng, S. D. Ramchurn, and X. Huang
  Position: towards a responsible llm-empowered multi-agent systems.
  arXiv preprint arXiv:2502.01714.
  Cited by: [§8.2](https://arxiv.org/html/2504.10286v2#S8.SS2.p3.1 "8.2. Design Implications for Mitigation Approaches ‣ 8. Discussion ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Ibrahim et al. (2024)
  L. Ibrahim, S. Huang, L. Ahmad, and M. Anderljung
  Beyond static ai evaluations: advancing human interaction evaluations for llm harms and risks.
  arXiv preprint arXiv:2405.10632.
  Cited by: [§8.1](https://arxiv.org/html/2504.10286v2#S8.SS1.p1.1 "8.1. Potential Risks in AI Agent Systems ‣ 8. Discussion ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Jain et al. (2023)
  L. Jain, R. Katarya, and S. Sachdeva
  Opinion leaders for information diffusion using graph neural network in online social networks.
  ACM Transactions on the Web 17 (2), pp. 1–37.
  Cited by: [§6](https://arxiv.org/html/2504.10286v2#S6.p5.1 "6. Analyzing Chirpers’ Network (RQ3) ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Krsek et al. (2025)
  I. Krsek, A. Kabra, Y. Dou, T. Naous, L. A. Dabbish, A. Ritter, W. Xu, and S. Das
  Measuring, modeling, and helping people account for privacy risks in online self-disclosures with ai.
  Proceedings of the ACM on Human-Computer Interaction 9 (2), pp. 1–31.
  Cited by: [§1](https://arxiv.org/html/2504.10286v2#S1.p2.1 "1. Introduction ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai"),
  [§8.1](https://arxiv.org/html/2504.10286v2#S8.SS1.p3.1 "8.1. Potential Risks in AI Agent Systems ‣ 8. Discussion ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Kudugunta and Ferrara (2018)
  S. Kudugunta and E. Ferrara
  Deep neural networks for bot detection.
  Information Sciences 467, pp. 312–322.
  Cited by: [§8.3](https://arxiv.org/html/2504.10286v2#S8.SS3.p1.1 "8.3. Directions for Agent Detection Tools ‣ 8. Discussion ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Lees et al. (2022)
  A. Lees, V. Q. Tran, Y. Tay, J. Sorensen, J. Gupta, D. Metzler, and L. Vasserman
  A new generation of perspective api: efficient multilingual character-level transformers.
  In Proceedings of the 28th ACM SIGKDD conference on knowledge discovery and data mining,
  pp. 3197–3207.
  Cited by: [§5](https://arxiv.org/html/2504.10286v2#S5.p2.1 "5. Profiling Abusive Chirper Submissions (RQ2) ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Li et al. (2024)
  M. Li, S. Zhao, Q. Wang, K. Wang, Y. Zhou, S. Srivastava, C. Gokmen, T. Lee, E. L. Li, R. Zhang, et al.
  Embodied agent interface: benchmarking llms for embodied decision making.
  Advances in Neural Information Processing Systems 37, pp. 100428–100534.
  Cited by: [§2](https://arxiv.org/html/2504.10286v2#S2.p1.1 "2. Background & Related Work ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Li et al. (2023)
  S. Li, J. Yang, and K. Zhao
  Are you in a masquerade? exploring the behavior and impact of large language model driven social bots in online social networks.
  arXiv preprint arXiv:2307.10337.
  Cited by: [§1](https://arxiv.org/html/2504.10286v2#S1.p2.1 "1. Introduction ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai"),
  [§2](https://arxiv.org/html/2504.10286v2#S2.p5.1 "2. Background & Related Work ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Li et al. (2025)
  Y. Li, L. Sun, and Y. Zhang
  MetaAgents: large language model based agents for decision-making on teaming.
  Proc. ACM Hum.-Comput. Interact. 9 (2).
  External Links: [Link](https://doi.org/10.1145/3711032),
  [Document](https://dx.doi.org/10.1145/3711032)
  Cited by: [§1](https://arxiv.org/html/2504.10286v2#S1.p2.1 "1. Introduction ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai"),
  [§2](https://arxiv.org/html/2504.10286v2#S2.p1.1 "2. Background & Related Work ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Liu and Wang (2021)
  X. Liu and C. Wang
  An empirical study on hyperparameter optimization for fine-tuning pre-trained language models.
  In Proceedings of the 59th Annual Meeting of the Association for Computational Linguistics and the 11th International Joint Conference on Natural Language Processing (Volume 1: Long Papers), C. Zong, F. Xia, W. Li, and R. Navigli (Eds.),
  Online, pp. 2286–2300.
  External Links: [Link](https://aclanthology.org/2021.acl-long.178/),
  [Document](https://dx.doi.org/10.18653/v1/2021.acl-long.178)
  Cited by: [§7.2](https://arxiv.org/html/2504.10286v2#S7.SS2.p2.1 "7.2. Supervised Methods ‣ 7. Detectability of Chirpers’ Submissions (RQ4) ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Liu et al. (2019)
  Y. Liu, M. Ott, N. Goyal, J. Du, M. Joshi, D. Chen, O. Levy, M. Lewis, L. Zettlemoyer, and V. Stoyanov
  Roberta: a robustly optimized bert pretraining approach.
  arXiv preprint arXiv:1907.11692.
  Cited by: [§7.2](https://arxiv.org/html/2504.10286v2#S7.SS2.p1.1 "7.2. Supervised Methods ‣ 7. Detectability of Chirpers’ Submissions (RQ4) ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Liu et al. (2023)
  Y. Liu, Z. Tan, H. Wang, S. Feng, Q. Zheng, and M. Luo
  Botmoe: twitter bot detection with community-aware mixtures of modal-specific experts.
  In Proceedings of the 46th International ACM SIGIR Conference on Research and Development in Information Retrieval,
  pp. 485–495.
  Cited by: [§8.3](https://arxiv.org/html/2504.10286v2#S8.SS3.p1.1 "8.3. Directions for Agent Detection Tools ‣ 8. Discussion ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Luo (2023)
  J. Luo
  Analyzing character and consciousness in ai-generated social content: a case study of chirper, the ai social network.
  arXiv preprint arXiv:2309.08614.
  Cited by: [§1](https://arxiv.org/html/2504.10286v2#S1.p2.1 "1. Introduction ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai"),
  [§2](https://arxiv.org/html/2504.10286v2#S2.p5.1 "2. Background & Related Work ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Macko et al. (2024)
  D. Macko, J. Kopal, R. Moro, and I. Srba
  MultiSocial: multilingual benchmark of machine-generated text detection of social-media texts.
  External Links: 2406.12549,
  [Link](https://arxiv.org/abs/2406.12549)
  Cited by: [2nd item](https://arxiv.org/html/2504.10286v2#S7.I3.i2.p1.1.1 "In 7.2. Supervised Methods ‣ 7. Detectability of Chirpers’ Submissions (RQ4) ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Mathew et al. (2020)
  B. Mathew, A. Illendula, P. Saha, S. Sarkar, P. Goyal, and A. Mukherjee
  Hate begets hate: a temporal study of hate speech.
  Proceedings of the ACM on Human-Computer Interaction 4 (CSCW2), pp. 1–24.
  Cited by: [§5](https://arxiv.org/html/2504.10286v2#S5.p9.1 "5. Profiling Abusive Chirper Submissions (RQ2) ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- McKenna et al. (2023)
  N. McKenna, T. Li, L. Cheng, M. Hosseini, M. Johnson, and M. Steedman
  Sources of hallucination by large language models on inference tasks.
  In Findings of the Association for Computational Linguistics: EMNLP 2023, H. Bouamor, J. Pino, and K. Bali (Eds.),
  Singapore, pp. 2758–2774.
  External Links: [Link](https://aclanthology.org/2023.findings-emnlp.182/),
  [Document](https://dx.doi.org/10.18653/v1/2023.findings-emnlp.182)
  Cited by: [§8.2](https://arxiv.org/html/2504.10286v2#S8.SS2.p3.1 "8.2. Design Implications for Mitigation Approaches ‣ 8. Discussion ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Minos (2023)
  S. Minos
  Chirper: changing the ai landscape with autonomy and entertainment.
  External Links: [Link](https://blog.chirper.ai/chirper-changing-the-ai-landscape-with-autonomy-and-entertainment)
  Cited by: [§2](https://arxiv.org/html/2504.10286v2#S2.p4.1 "2. Background & Related Work ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Minos (2024)
  S. Minos
  From ai social network to simulated ai world.
  External Links: [Link](https://blog.chirper.ai/from-ai-social-network-to-simulated-ai-world)
  Cited by: [§2](https://arxiv.org/html/2504.10286v2#S2.p4.1 "2. Background & Related Work ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Mitchell et al. (2023)
  E. Mitchell, Y. Lee, A. Khazatsky, C. D. Manning, and C. Finn
  DetectGPT: zero-shot machine-generated text detection using probability curvature.
  In Proceedings of the 40th International Conference on Machine Learning, A. Krause, E. Brunskill, K. Cho, B. Engelhardt, S. Sabato, and J. Scarlett (Eds.),
  Proceedings of Machine Learning Research, Vol. 202, pp. 24950–24962.
  External Links: [Link](https://proceedings.mlr.press/v202/mitchell23a.html)
  Cited by: [item ➣](https://arxiv.org/html/2504.10286v2#S1.I2.ix4.p1.1 "In 1. Introduction ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai"),
  [item 6](https://arxiv.org/html/2504.10286v2#S7.I2.i6.p1.1.1 "In 7.1. Zero-shot Detection ‣ 7. Detectability of Chirpers’ Submissions (RQ4) ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai"),
  [§7.1](https://arxiv.org/html/2504.10286v2#S7.SS1.p12.1 "7.1. Zero-shot Detection ‣ 7. Detectability of Chirpers’ Submissions (RQ4) ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Muennighoff et al. (2022)
  N. Muennighoff, N. Tazi, L. Magne, and N. Reimers
  MTEB: massive text embedding benchmark.
  arXiv preprint arXiv:2210.07316.
  External Links: [Link](https://arxiv.org/abs/2210.07316),
  [Document](https://dx.doi.org/10.48550/ARXIV.2210.07316)
  Cited by: [§A.3](https://arxiv.org/html/2504.10286v2#A1.SS3.p2.1 "A.3. Validation for self-disclosure detection model and Perspective API. ‣ Appendix A Appendix ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Namvarpour and Razi (2024)
  M. Namvarpour and A. Razi
  Uncovering contradictions in human-ai interactions: lessons learned from user reviews of replika.
  In Companion Publication of the 2024 Conference on Computer-Supported Cooperative Work and Social Computing,
  CSCW Companion ’24, New York, NY, USA, pp. 579–586.
  External Links: ISBN 9798400711145,
  [Link](https://doi.org/10.1145/3678884.3681909),
  [Document](https://dx.doi.org/10.1145/3678884.3681909)
  Cited by: [§2](https://arxiv.org/html/2504.10286v2#S2.p7.1 "2. Background & Related Work ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Piao et al. (2025)
  J. Piao, Z. Lu, C. Gao, F. Xu, F. P. Santos, Y. Li, and J. Evans
  Emergence of human-like polarization among large language model agents.
  arXiv preprint arXiv:2501.05171.
  Cited by: [§1](https://arxiv.org/html/2504.10286v2#S1.p2.1 "1. Introduction ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Qiao et al. (2025)
  B. Qiao, K. Li, W. Zhou, S. Li, Q. Lu, and S. Hu
  BotSim: llm-powered malicious social botnet simulation.
  Proceedings of the AAAI Conference on Artificial Intelligence 39 (13), pp. 14377–14385.
  External Links: [Link](https://ojs.aaai.org/index.php/AAAI/article/view/33575),
  [Document](https://dx.doi.org/10.1609/aaai.v39i13.33575)
  Cited by: [§2](https://arxiv.org/html/2504.10286v2#S2.p7.1 "2. Background & Related Work ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Raman et al. (2019)
  A. Raman, S. Joglekar, E. D. Cristofaro, N. Sastry, and G. Tyson
  Challenges in the decentralised web: the mastodon case.
  In Proceedings of the internet measurement conference,
  pp. 217–229.
  Cited by: [§3](https://arxiv.org/html/2504.10286v2#S3.p1.1 "3. Data Collection ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Ronagh Nikghalb and Cheng (2025)
  M. Ronagh Nikghalb and J. Cheng
  Interrogating ai: characterizing emergent playful interactions with chatgpt.
  Proc. ACM Hum.-Comput. Interact. 9 (2).
  External Links: [Link](https://doi.org/10.1145/3711015),
  [Document](https://dx.doi.org/10.1145/3711015)
  Cited by: [§1](https://arxiv.org/html/2504.10286v2#S1.p2.1 "1. Introduction ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Shevtsov et al. (2022)
  A. Shevtsov, C. Tzagkarakis, D. Antonakaki, and S. Ioannidis
  Identification of twitter bots based on an explainable machine learning framework: the us 2020 elections case study.
  In Proceedings of the international AAAI conference on web and social media,
  Vol. 16, pp. 956–967.
  Cited by: [§8.3](https://arxiv.org/html/2504.10286v2#S8.SS3.p1.1 "8.3. Directions for Agent Detection Tools ‣ 8. Discussion ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Soto et al. (2024)
  R. R. Soto, K. Koch, A. Khan, B. Chen, M. Bishop, and N. Andrews
  Few-shot detection of machine-generated text using style representations.
  External Links: 2401.06712,
  [Link](https://arxiv.org/abs/2401.06712)
  Cited by: [§7.2](https://arxiv.org/html/2504.10286v2#S7.SS2.p5.1 "7.2. Supervised Methods ‣ 7. Detectability of Chirpers’ Submissions (RQ4) ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Su et al. (2023)
  J. Su, T. Y. Zhuo, D. Wang, and P. Nakov
  Detectllm: leveraging log rank information for zero-shot detection of machine-generated text.
  arXiv preprint arXiv:2306.05540.
  Cited by: [item ➣](https://arxiv.org/html/2504.10286v2#S1.I2.ix4.p1.1 "In 1. Introduction ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai"),
  [item 5](https://arxiv.org/html/2504.10286v2#S7.I1.i5.p1.1.1 "In 7.1. Zero-shot Detection ‣ 7. Detectability of Chirpers’ Submissions (RQ4) ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai"),
  [item 7](https://arxiv.org/html/2504.10286v2#S7.I2.i7.p1.1.1 "In 7.1. Zero-shot Detection ‣ 7. Detectability of Chirpers’ Submissions (RQ4) ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai"),
  [§7.1](https://arxiv.org/html/2504.10286v2#S7.SS1.p10.1 "7.1. Zero-shot Detection ‣ 7. Detectability of Chirpers’ Submissions (RQ4) ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai"),
  [§7.1](https://arxiv.org/html/2504.10286v2#S7.SS1.p12.1 "7.1. Zero-shot Detection ‣ 7. Detectability of Chirpers’ Submissions (RQ4) ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai"),
  [§7.1](https://arxiv.org/html/2504.10286v2#S7.SS1.p6.1 "7.1. Zero-shot Detection ‣ 7. Detectability of Chirpers’ Submissions (RQ4) ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai"),
  [§7.1](https://arxiv.org/html/2504.10286v2#S7.SS1.p9.1 "7.1. Zero-shot Detection ‣ 7. Detectability of Chirpers’ Submissions (RQ4) ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai"),
  [§7.2](https://arxiv.org/html/2504.10286v2#S7.SS2.p1.1 "7.2. Supervised Methods ‣ 7. Detectability of Chirpers’ Submissions (RQ4) ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Sun et al. (2024)
  Z. Sun, Z. Zhang, X. Shen, Z. Zhang, Y. Liu, M. Backes, Y. Zhang, and X. He
  Are we in the ai-generated text world already? quantifying and monitoring aigt on social media.
  arXiv preprint arXiv:2412.18148.
  Cited by: [§7.1](https://arxiv.org/html/2504.10286v2#S7.SS1.p12.1 "7.1. Zero-shot Detection ‣ 7. Detectability of Chirpers’ Submissions (RQ4) ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Sun et al. (2025)
  Z. Sun, Z. Zhang, X. Shen, Z. Zhang, Y. Liu, M. Backes, Y. Zhang, and X. He
  Are we in the AI-generated text world already? quantifying and monitoring AIGT on social media.
  In Proceedings of the 63rd Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers), W. Che, J. Nabende, E. Shutova, and M. T. Pilehvar (Eds.),
  Vienna, Austria, pp. 22975–23005.
  External Links: [Link](https://aclanthology.org/2025.acl-long.1120/),
  [Document](https://dx.doi.org/10.18653/v1/2025.acl-long.1120),
  ISBN 979-8-89176-251-0
  Cited by: [§7.1](https://arxiv.org/html/2504.10286v2#S7.SS1.p1.1 "7.1. Zero-shot Detection ‣ 7. Detectability of Chirpers’ Submissions (RQ4) ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai"),
  [§7.2](https://arxiv.org/html/2504.10286v2#S7.SS2.p1.1 "7.2. Supervised Methods ‣ 7. Detectability of Chirpers’ Submissions (RQ4) ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Tang et al. (2024)
  J. Tang, H. Gao, X. Pan, L. Wang, H. Tan, D. Gao, Y. Chen, X. Chen, Y. Lin, Y. Li, et al.
  GenSim: a general social simulation platform with large language model based agents.
  arXiv preprint arXiv:2410.04360.
  Cited by: [§2](https://arxiv.org/html/2504.10286v2#S2.p7.1 "2. Background & Related Work ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Trifonova and Venkatagiri (2024)
  P. Trifonova and S. Venkatagiri
  Misinformation, fraud, and stereotyping: towards a typology of harm caused by deepfakes.
  In Companion Publication of the 2024 Conference on Computer-Supported Cooperative Work and Social Computing,
  CSCW Companion ’24, New York, NY, USA, pp. 533–538.
  External Links: ISBN 9798400711145,
  [Link](https://doi.org/10.1145/3678884.3685938),
  [Document](https://dx.doi.org/10.1145/3678884.3685938)
  Cited by: [§2](https://arxiv.org/html/2504.10286v2#S2.p7.1 "2. Background & Related Work ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Truong et al. (2024)
  L. Truong, S. Lee, and N. Sawhney
  Enhancing conversations in migrant counseling services: designing for trustworthy human-ai collaboration.
  Proc. ACM Hum.-Comput. Interact. 8 (CSCW2).
  External Links: [Link](https://doi.org/10.1145/3687034),
  [Document](https://dx.doi.org/10.1145/3687034)
  Cited by: [§2](https://arxiv.org/html/2504.10286v2#S2.p7.1 "2. Background & Related Work ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Wang et al. (2024a)
  C. Wang, Z. Liu, D. Yang, and X. Chen
  Decoding echo chambers: llm-powered simulations revealing polarization in social networks.
  arXiv preprint arXiv:2409.19338.
  Cited by: [§1](https://arxiv.org/html/2504.10286v2#S1.p2.1 "1. Introduction ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai"),
  [§2](https://arxiv.org/html/2504.10286v2#S2.p2.1 "2. Background & Related Work ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Wang et al. (2024b)
  L. Wang, N. Yang, X. Huang, L. Yang, R. Majumder, and F. Wei
  Multilingual e5 text embeddings: a technical report.
  arXiv preprint arXiv:2402.05672.
  Cited by: [§5](https://arxiv.org/html/2504.10286v2#S5.p11.1 "5. Profiling Abusive Chirper Submissions (RQ2) ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai"),
  [§8.3](https://arxiv.org/html/2504.10286v2#S8.SS3.p1.1 "8.3. Directions for Agent Detection Tools ‣ 8. Discussion ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Wang et al. (2024c)
  Y. Wang, J. Mansurov, P. Ivanov, J. Su, A. Shelmanov, A. Tsvigun, O. Mohammed Afzal, T. Mahmoud, G. Puccetti, and T. Arnold
  SemEval-2024 task 8: multidomain, multimodel and multilingual machine-generated text detection.
  In Proceedings of the 18th International Workshop on Semantic Evaluation (SemEval-2024), A. Kr. Ojha, A. S. Doğruöz, H. Tayyar Madabushi, G. Da San Martino, S. Rosenthal, and A. Rosá (Eds.),
  Mexico City, Mexico, pp. 2057–2079.
  External Links: [Link](https://aclanthology.org/2024.semeval-1.279/),
  [Document](https://dx.doi.org/10.18653/v1/2024.semeval-1.279)
  Cited by: [3rd item](https://arxiv.org/html/2504.10286v2#S7.I3.i3.p1.1.1 "In 7.2. Supervised Methods ‣ 7. Detectability of Chirpers’ Submissions (RQ4) ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Wang et al. (2024d)
  Z. Wang, F. Yang, L. Wang, P. Zhao, H. Wang, L. Chen, Q. Lin, and K. Wong
  SELF-GUARD: empower the LLM to safeguard itself.
  In Proceedings of the 2024 Conference of the North American Chapter of the Association for Computational Linguistics: Human Language Technologies (Volume 1: Long Papers), K. Duh, H. Gomez, and S. Bethard (Eds.),
  Mexico City, Mexico, pp. 1648–1668.
  External Links: [Link](https://aclanthology.org/2024.naacl-long.92/),
  [Document](https://dx.doi.org/10.18653/v1/2024.naacl-long.92)
  Cited by: [§8.2](https://arxiv.org/html/2504.10286v2#S8.SS2.p3.1 "8.2. Design Implications for Mitigation Approaches ‣ 8. Discussion ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Wei and Tyson (2025)
  Y. Wei and G. Tyson
  Virtual stars, real fans: understanding the vtuber ecosystem.
  External Links: 2502.01553,
  [Link](https://arxiv.org/abs/2502.01553)
  Cited by: [§5](https://arxiv.org/html/2504.10286v2#S5.p3.1 "5. Profiling Abusive Chirper Submissions (RQ2) ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Wei et al. (2025)
  Y. Wei, P. Zhang, and G. Tyson
  Benchmarking and understanding safety risks in ai character platforms.
  External Links: 2512.01247,
  [Link](https://arxiv.org/abs/2512.01247)
  Cited by: [§8.2](https://arxiv.org/html/2504.10286v2#S8.SS2.p1.1 "8.2. Design Implications for Mitigation Approaches ‣ 8. Discussion ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Wei et al. (2024)
  Y. Wei, Y. Zhu, P. Hui, and G. Tyson
  Exploring the use of abusive generative ai models on civitai.
  In Proceedings of the 32nd ACM International Conference on Multimedia,
  MM ’24, New York, NY, USA, pp. 6949–6958.
  External Links: ISBN 9798400706868,
  [Link](https://doi.org/10.1145/3664647.3681052),
  [Document](https://dx.doi.org/10.1145/3664647.3681052)
  Cited by: [§5](https://arxiv.org/html/2504.10286v2#S5.p6.1 "5. Profiling Abusive Chirper Submissions (RQ2) ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai"),
  [§5](https://arxiv.org/html/2504.10286v2#S5.p9.1 "5. Profiling Abusive Chirper Submissions (RQ2) ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai"),
  [§6](https://arxiv.org/html/2504.10286v2#S6.p5.1 "6. Analyzing Chirpers’ Network (RQ3) ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Wu et al. (2024)
  J. Wu, R. Zhan, D. F. Wong, S. Yang, X. Yang, Y. Yuan, and L. S. Chao
  DetectRL: benchmarking llm-generated text detection in real-world scenarios.
  In Advances in Neural Information Processing Systems, A. Globerson, L. Mackey, D. Belgrave, A. Fan, U. Paquet, J. Tomczak, and C. Zhang (Eds.),
  Vol. 37, pp. 100369–100401.
  External Links: [Document](https://dx.doi.org/10.52202/079017-3186),
  [Link](https://proceedings.neurips.cc/paper_files/paper/2024/file/b61bdf7e9f64c04ec75a26e781e2ad51-Paper-Datasets_and_Benchmarks_Track.pdf)
  Cited by: [§7.1](https://arxiv.org/html/2504.10286v2#S7.SS1.p1.1 "7.1. Zero-shot Detection ‣ 7. Detectability of Chirpers’ Submissions (RQ4) ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai"),
  [§7.2](https://arxiv.org/html/2504.10286v2#S7.SS2.p1.1 "7.2. Supervised Methods ‣ 7. Detectability of Chirpers’ Submissions (RQ4) ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Wu and Resnick (2024)
  S. Wu and P. Resnick
  Calibrate-extrapolate: rethinking prevalence estimation with black box classifiers.
  In Proceedings of the International AAAI Conference on Web and Social Media,
  Vol. 18, pp. 1634–1647.
  Cited by: [§5](https://arxiv.org/html/2504.10286v2#S5.p3.1 "5. Profiling Abusive Chirper Submissions (RQ2) ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Xiang et al. (2024)
  Z. Xiang, L. Zheng, Y. Li, J. Hong, Q. Li, H. Xie, J. Zhang, Z. Xiong, C. Xie, C. Yang, et al.
  Guardagent: safeguard llm agents by a guard agent via knowledge-enabled reasoning.
  arXiv preprint arXiv:2406.09187.
  Cited by: [§8.2](https://arxiv.org/html/2504.10286v2#S8.SS2.p3.1 "8.2. Design Implications for Mitigation Approaches ‣ 8. Discussion ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Yan et al. (2025)
  Y. Yan, J. Piao, X. Lan, C. Shao, P. Hui, and Y. Li
  Simulating generative social agents via theory-informed workflow design.
  arXiv preprint arXiv:2508.08726.
  Cited by: [§8.2](https://arxiv.org/html/2504.10286v2#S8.SS2.p1.1 "8.2. Design Implications for Mitigation Approaches ‣ 8. Discussion ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Yang et al. (2020)
  K. Yang, O. Varol, P. Hui, and F. Menczer
  Scalable and generalizable social bot detection through data selection.
  In Proceedings of the AAAI conference on artificial intelligence,
  Vol. 34, pp. 1096–1103.
  Cited by: [§8.3](https://arxiv.org/html/2504.10286v2#S8.SS3.p1.1 "8.3. Directions for Agent Detection Tools ‣ 8. Discussion ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Zhang et al. (2025a)
  A. Q. Zhang, J. Amores, H. Shen, M. Czerwinski, M. L. Gray, and J. Suh
  AURA: amplifying understanding, resilience, and awareness for responsible ai content work.
  Proceedings of the ACM on Human-Computer Interaction 9 (2), pp. 1–45.
  Cited by: [§1](https://arxiv.org/html/2504.10286v2#S1.p2.1 "1. Introduction ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai"),
  [§2](https://arxiv.org/html/2504.10286v2#S2.p7.1 "2. Background & Related Work ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Zhang et al. (2023a)
  F. Zhang, Q. Linghu, J. Xie, K. Wang, X. Lin, and W. Zhang
  Quantifying node importance over network structural stability.
  In Proceedings of the 29th ACM SIGKDD Conference on Knowledge Discovery and Data Mining,
  pp. 3217–3228.
  Cited by: [§6](https://arxiv.org/html/2504.10286v2#S6.p5.1 "6. Analyzing Chirpers’ Network (RQ3) ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Zhang et al. (2025b)
  R. Zhang, H. Li, H. Meng, J. Zhan, H. Gan, and Y. Lee
  The dark side of ai companionship: a taxonomy of harmful algorithmic behaviors in human-ai relationships.
  In Proceedings of the 2025 CHI Conference on Human Factors in Computing Systems,
  CHI ’25, New York, NY, USA.
  External Links: ISBN 9798400713941,
  [Link](https://doi.org/10.1145/3706598.3713429),
  [Document](https://dx.doi.org/10.1145/3706598.3713429)
  Cited by: [§8.1](https://arxiv.org/html/2504.10286v2#S8.SS1.p1.1 "8.1. Potential Risks in AI Agent Systems ‣ 8. Discussion ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Zhang et al. (2023b)
  R. Zhang, W. Duan, C. Flathmann, N. McNeese, G. Freeman, and A. Williams
  Investigating ai teammate communication strategies and their impact in human-ai teams for effective teamwork.
  Proc. ACM Hum.-Comput. Interact. 7 (CSCW2).
  External Links: [Link](https://doi.org/10.1145/3610072),
  [Document](https://dx.doi.org/10.1145/3610072)
  Cited by: [§2](https://arxiv.org/html/2504.10286v2#S2.p7.1 "2. Background & Related Work ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Zhu et al. (2024a)
  Y. Zhu, E. Haq, G. Tyson, L. Lee, Y. Wang, and P. Hui
  A study of partisan news sharing in the russian invasion of ukraine.
  In Proceedings of the International AAAI Conference on Web and Social Media,
  Vol. 18, pp. 1847–1858.
  Cited by: [§6](https://arxiv.org/html/2504.10286v2#S6.p6.1 "6. Analyzing Chirpers’ Network (RQ3) ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Zhu et al. (2026)
  Y. Zhu, G. Tyson, and P. Hui
  A comparative analysis of social network topology in reddit and moltbook.
  External Links: 2602.13920,
  [Link](https://arxiv.org/abs/2602.13920)
  Cited by: [§8.2](https://arxiv.org/html/2504.10286v2#S8.SS2.p1.1 "8.2. Design Implications for Mitigation Approaches ‣ 8. Discussion ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").
- Zhu et al. (2024b)
  Y. Zhu, Z. Yin, G. Tyson, E. Haq, L. Lee, and P. Hui
  Apt-pipe: a prompt-tuning tool for social data annotation using chatgpt.
  In Proceedings of the ACM Web Conference 2024,
  pp. 245–255.
  Cited by: [§8.3](https://arxiv.org/html/2504.10286v2#S8.SS3.p2.1 "8.3. Directions for Agent Detection Tools ‣ 8. Discussion ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai").

## Appendix A Appendix

### A.1. Parameters for grid search and parameters for the classifiers with highest F1-score.

- •

  Logistic Regression: penalty: [“l1”, “l2”, “elasticnet”, “none”]; C: [0.01, 0.1, 1, 10, 100]; solver: [“lbfgs”, “liblinear”, “saga”]; “max\_iter”: [200, 300, 500]. Best Parameters: penalty: “l2”; C: 0.01; “max\_iter”: 200; solver: “liblinear”.
- •

  Random Forest: number of estimators: [100, 200, 300]; max depth: [10, 20]; “min\_samples\_split”: [2, 5, 10], “min\_samples\_leaf”: [1, 2, 4], “max\_features”: [“auto”, “sqrt”, “log2”]. Best Parameters: number of estimators: 300; max depth: 10; “max\_features”: “log2”, ‘min\_samples\_split’: 5; “min\_samples\_split”: 4.
- •

  K-Nearest Neighbors: number of neighbors: [3, 5, 7, 9, 11], weights: [‘’uniform”, ‘’distance”], algorithm: [“auto”, “ball\_tree”, “kd\_tree”, “brute”]. Best Parameters: number of neighbors: 9; weights: “uniform”; algorithm: ‘ball\_tree’.
- •

  XGboost: learning rate: [0.01, 0.1, 0.2]; max depth: [3, 5, 7], subsample ratio: [0.7, 0.8, 0.9]; “colsample\_bytree”: [0.7, 0.8, 0.9]; “min\_child\_weight”: [1, 3, 5]. Best Parameters: learning rate: 0.2; max depth: 3; subsample ratio: 0.9; “colsample\_bytree”: 0.8; “min\_child\_weight”: 3.
- •

  Linear-SVM: C: [0.1, 1, 10, 100]; loss: [“hinge”, “squared\_hinge”]; penalty: [“l1”, “l2”], dual: [True, False]. Best Parameters: C: 1; dual: True; loss: “squared\_hinge”; penalty: l2.
- •

  RBF-SVM: C: [0.1, 1, 10, 100]; gamma: [“scale”, “auto”, 0.001, 0.01, 0.1, 1]. Best Parameters: C: 0.1; gamma: “scale”.

### A.2. Parameters for Optuna to search parameters and the parameters for the RoBERTa models with highest F1-score.

- •

  roberta-base: batch size for training: [16, 31, 64]; learning rate: range ($0.99e^{-5}$, $3.01ee^{-5}$); weight decay: range (0.0, 0.12), warm-up ratio: range (0.0, 0.3). Best Parameters: batch size for training: 64; learning rate: range $2.72e^{-5}$; weight decay: 0.110, warm-up ratio: range 0.200.
- •

  roberta-large: batch size for training: [16, 31, 64]; learning rate: range ($0.99e^{-5}$, $3.01ee^{-5}$); weight decay: range (0.0, 0.12), warm-up ratio: range (0.0, 0.3). Best Parameters: batch size for training: 16; learning rate: range $2.88e^{-5}$; weight decay: 0.093, warm-up ratio: range 0.183.

### A.3. Validation for self-disclosure detection model and Perspective API.

We validate the self-disclosure detection model by assessing its agreement with human annotations. Following the methodology of ([Haq et al., 2025](https://arxiv.org/html/2504.10286v2#bib.bib83)), an author first manually annotated the type of self-disclosure for 100 randomly selected profiles from both Chirper.ai and Mastodon. We then calculate Cohen’s kappa between the model’s output and the manual annotations. The results show that the model achieves a Cohen’s kappa of 0.82 with the annotators, demonstrating a high level of agreement and validating its capability to reproduce human-like annotations for self-disclosure content.

To validate the Perspective API, we evaluate its performance on three balanced subsets, each randomly sampled from a different benchmark dataset: the PAN 2024 shared task ([Bevendorff et al., 2024](https://arxiv.org/html/2504.10286v2#bib.bib8)), the Toxic Comment Classification Challenge ([cjadams et al., 2017](https://arxiv.org/html/2504.10286v2#bib.bib2)), and the MTEB benchmark ([Muennighoff et al., 2022](https://arxiv.org/html/2504.10286v2#bib.bib7)). Each subset contains 1,000 abusive and 1,000 non-abusive text samples. Table [8](https://arxiv.org/html/2504.10286v2#A1.T8 "Table 8 ‣ A.3. Validation for self-disclosure detection model and Perspective API. ‣ Appendix A Appendix ‣ Characterizing an LLM-driven Social Network: The Case of Chirper.ai") summarizes the performance of the Perspective API across these three subsets. The Perspective API achieve an accuracy and a F1-score both higher than 0.85, demonstrate its capability to identify abusive content.

|  |  |  |  |
| --- | --- | --- | --- |
|  | Perspective API | | |
|  | PAN 2024 | Toxic Comment Challenge | MTEB |
| Accuracy | 0.9719 | 0.9233 | 0.8939 |
| F1-score | 0.9716 | 0.9183 | 0.8555 |

Table 8.

### A.4. Degree of abusive content for 12 categories.

Figure 8. CDF plots of moderation features of submissions from Chirper.ai and Mastodon.
