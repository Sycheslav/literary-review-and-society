---
id: doi-10-1093-nsr-nwag223-text
type: material
work_id: doi-10-1093-nsr-nwag223
title: LLM agents overcome the machine penalty when acting fairly but not when acting
  selfishly or altruistically
source_url: https://www.ebi.ac.uk/europepmc/webservices/rest/PMC13192581/fullTextXML
retrieved_at: '2026-10-27'
conversion: publisher_deposited_jats_xml_to_markdown
quality_note: Депонированный полный JATS XML. Текст, разделы, таблицы и библиография
  преобразованы в MD; рисунки открываются в оригинале.
language: original
sha256_text: a897c0d68e8d17a59825441caaffd03a2b83c431830e0a08509b69011bdffa85
---

> Оригинал: [PMC13192581](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/). Депонированный полный JATS XML. Текст, разделы, таблицы и библиография преобразованы в MD; рисунки открываются в оригинале.

pmcNatl Sci RevNatl Sci Rev4044nsr101633095nsrNational Science Review2095-51382053-714Xpublisher\_abbrev oup?Oxford University PressPMC13192581PMC13192581.113192581131925814218197210.1093/nsr/nwag223nwag2231Research ArticleInformation ScienceAcademicSubjects/MED00010AcademicSubjects/SCI00010Nsr/3LLM agents overcome the machine penalty when acting fairly but not when acting selfishly or altruisticallyWangZhenMethodologyResourcesSupervisionWriting - original draft
School of Cybersecurity, and School of Artificial Intelligence, OPtics and ElectroNics (iOPEN), Northwestern Polytechnical University, Xi’an 710072, ChinaSongRuiqiData curationFormal analysisInvestigationMethodologyVisualizationWriting - original draft
School of Cybersecurity, and School of Artificial Intelligence, OPtics and ElectroNics (iOPEN), Northwestern Polytechnical University, Xi’an 710072, Chinahttps://orcid.org/0000-0002-2725-9763ShenChenData curationFormal analysisMethodologyWriting - original draft
Faculty of Engineering Sciences, Kyushu University, Fukuoka 819-0395, JapanYinShiyaData curationSoftware
School of Cybersecurity, and School of Artificial Intelligence, OPtics and ElectroNics (iOPEN), Northwestern Polytechnical University, Xi’an 710072, ChinaSongZhaoData curationFormal analysisMethodologyVisualizationWriting - original draft
School of Computing, Engineering and Digital Technologies, Teesside University, Middlebrough TS1 3BX, UKBattuBalarajuWriting - original draft
Computer Science, Science Division, New York University Abu Dhabi, Abu Dhabi 129188, UAEhttps://orcid.org/0000-0003-1203-9984ShiLeiData curation
School of Statistics and Mathematics, Yunnan University of Finance and Economics, Yunnan 650221, ChinaJiaDanyangData curationVisualization
School of Cybersecurity, and School of Artificial Intelligence, OPtics and ElectroNics (iOPEN), Northwestern Polytechnical University, Xi’an 710072, Chinahttps://orcid.org/0000-0003-0070-0667RahwanTalalMethodologyWriting - original draft
Computer Science, Science Division, New York University Abu Dhabi, Abu Dhabi 129188, UAEHuShuyueFormal analysisMethodologyWriting - original draftDepartment of AI for Science, Shanghai Artificial Intelligence Laboratory, Shanghai 200238, China
Corresponding author. E-mail: hushuyue@pjlab.org.cn
Corresponding author. E-mail: talal.rahwan@nyu.edu520261642026139513424nwag2233132026249202525320262152026160420262205202625052026© The Author(s) 2026. Published by Oxford University Press on behalf of China Science Publishing & Media Ltd.2026https://creativecommons.org/licenses/by/4.0/This is an Open Access article distributed under the terms of the Creative Commons Attribution License (<https://creativecommons.org/licenses/by/4.0/>), which permits unrestricted reuse, distribution, and reproduction in any medium, provided the original work is properly cited.pdf-name nwag223.pdf?pdf-size 588368?pdf-md5 4526abfd15ac2a5e4349a71b37703d73?pdf-image-server-status NEVER\_LOAD?pdf-cloudpmc-urn urn:app:1c54/13192581/4526abfd15ac/nwag223.pdf?ABSTRACT

Despite rapid technological progress, effective human–machine cooperation remains a significant challenge. Humans tend to cooperate less with machines than with fellow humans, a phenomenon known as the machine penalty. Here, we show that artificial intelligence (AI) agents powered by large language models can overcome this penalty in social dilemma games with communication. In a pre-registered experiment with 1152 participants, we deploy AI agents exhibiting three distinct personas: selfish, cooperative and fair. However, only fair agents elicit human cooperation at rates comparable to human–human interactions. Analysis reveals that fair agents, similar to human participants, occasionally break pre-game cooperation promises but nonetheless effectively establish cooperation as a social norm. These results challenge the conventional wisdom of machines as altruistic assistants or rational actors. Instead, our study highlights the importance of AI agents reflecting the nuanced complexity of human social behaviors—imperfect yet driven by deeper social cognitive processes.

Fair but imperfect AI agents, capable of breaking promises, overcome human reluctance to cooperate with machines.

artificial intelligencelarge language modelhuman–machine interactiongame theorybehavioral economic
National Science Fund for Distinguished Young Scholars10.13039/501100014219
62025602
National Natural Science Foundation of China10.13039/501100001809
U22B2036625061866250630012271471
International Cooperation10.13039/100011259
2025GH-YBXM-017
Major Program of National Fund of Philosophy and Social Science of China10.13039/501100013071
22&ZD158
JSPS10.13039/501100001691
23H03499pmc-status-qastatus0pmc-status-liveyespmc-status-embargonopmc-status-releasedyespmc-prop-open-accessyespmc-prop-olfnopmc-prop-manuscriptnopmc-prop-legally-suppressednopmc-prop-has-pdfyespmc-prop-has-supplementyespmc-prop-pdf-onlynopmc-prop-suppress-copyrightnopmc-prop-is-real-versionnopmc-prop-is-scanned-articlenopmc-prop-preprintnopmc-prop-in-epmcyespmc-license-refCC BY

## INTRODUCTION

In today’s rapidly advancing technological landscape, cooperation between humans and machines is emerging as a cornerstone of societal progress and innovation. For example, Pactum’s artificial intelligence (AI) agents now negotiate on behalf of Walmart with human vendors, closing deals in just days rather than the traditional weeks or months [[1](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#bib1)]. AI coding assistants, such as GitHub Copilot, support code autocompletion and fixes while keeping humans in the loop, increasing the productivity of engineers at JPMorgan by up to 20% [[2](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#bib2)]. Machines, no longer passive tools merely executing our commands, have evolved into sophisticated, autonomous agents ready to actively work—and, more importantly, to cooperate—with humans [[3](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#bib3),[4](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#bib4)]. This paradigm shift makes understanding and fostering human–machine cooperation imperative. Not only does it allow us to harness the complementary strengths of both [[5](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#bib5)], but it also helps navigate social dilemmas—tensions between individual and collective interests—a crucial and nearly unavoidable challenge in human–machine interactions [[6](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#bib6)].

Despite immense potential, studies have consistently identified a significant gap between human–human and human–machine cooperation, a phenomenon known as the machine penalty [[7](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#bib7)]. While this phenomenon has been widely documented in incentivized economic games [[8](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#bib8),[9](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#bib9)], it also manifests in real-world contexts. As a common example, human drivers are more likely to deny autonomous vehicles the right of way at junctions than they are to other human drivers [[10](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#bib10),[11](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#bib11)]. Part of this penalty stems from technical limitations: machines must be able to understand, communicate and find common ground with humans [[6](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#bib6)]. However, at its core, the machine penalty reflects a form of algorithm aversion, whereby humans are reluctant to view machines as genuine social partners [[12](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#bib12),[13](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#bib13)]. This aversion, common across various domains, often leads to less trust in machines [[14](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#bib14)] and a tendency to assign machines greater blame for mistakes [[15](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#bib15)]. Furthermore, machines’ typical lack of cultural norms [[16](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#bib16)], moral understanding [[17](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#bib17)], emotional capacity [[18](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#bib18)] and fairness considerations [[19](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#bib19)], which are elements crucial to human cooperation, only exacerbates the aversion.

Recent efforts to mitigate the machine penalty have focused on anthropomorphism [[20–22](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#bib20)]. The rationale is that, since humans are more cooperative with fellow humans, endowing machines with human-like traits might bridge the gap. However, superficial anthropomorphic designs, such as equipping machines with emotional expressions or human-like faces [[20](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#bib20),[23](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#bib23)], have shown little effect. Nevertheless, enhancing human-likeness can sometimes evoke feelings of uncanniness [[24](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#bib24)]. Some studies have had success with ethically questionable genderization [[21](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#bib21),[22](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#bib22)], such as adding female cues of long hair to machines. Another approach has been to conceal machines’ true nature [[8](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#bib8)]. While this approach can effectively reduce the gap, it compromises technological transparency and can be seen as deceptive. Collectively, these findings cast doubt on whether humanization is the answer and highlight the need to rethink which elements are truly necessary for machines to foster human cooperation.

To close this gap, this paper studies human cooperation with AI agents powered by large language models (LLMs). The reasons behind this design choice are manifold. First, LLMs are well known for their ability to understand language and generate conversations, making them well suited for interactions with humans [[25](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#bib25),[26](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#bib26)]. Second, their extensive training on human corpora allows them to grasp key concepts such as rationality, risk, trust and fairness, which underpin human cooperative behaviors [[27](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#bib27),[28](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#bib28)]. Third, LLMs can generate diverse human simulacra by varying high-level descriptions, enabling them to emulate the nuances of human behavior [[29](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#bib29)] and enhance their cooperative potential.

We focus on prisoner’s dilemma games with pre-game communication, a stylized, controlled social dilemma in which players choose between cooperation and defection. While collective benefits depend on cooperation, individual incentives favor defection. We design agents with enhanced strategic reasoning and decision-making capabilities, and humanize them by assigning them one of three distinct personas (see the Methods section for details): (i) cooperative, aiming to assist its human associate; (ii) selfish, focusing solely on maximizing its self-interest; and (iii) fair, balancing its own and collective interest while slightly prioritizing self-interest. While selfish agents reflect the common notion of rationality [[30](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#bib30),[31](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#bib31)] in AI and game theory, whereby agents act primarily to maximize their own payoff, cooperative agents and fair agents are designed to embody prosocial preferences [[32](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#bib32)], a prominent theoretical account of human cooperation.

Our experiment, with a total of 1152 participants, shows that fair agents are able to overcome the machine penalty, whereas cooperative and selfish agents do not. The post-experiment analysis aims to understand the mechanisms at play, focusing on differences in communication, reasoning, decision-making, the ability to evoke descriptive norms (i.e. beliefs about other participants commonly cooperating), and participants’ perceptions of agents’ minds and human-like traits. The analysis reveals that fair agents, despite occasional strategic promise breaches, successfully establish cooperative norms and foster positive human perceptions of their mind, trustworthiness and intelligence.

## RESULTS

Our experiment involves four types of treatments: human–human (H–H), human–fair agent (H–F), human–cooperative agent (H–C) and human–selfish agent (H–S) interactions. Each treatment spans 10 rounds, with participants randomly paired with a knowingly new associate in each round. Before making their choices in each round, participants and their associates exchange two rounds of messages. From the outset, we explicitly inform participants of the true nature of their associates, that is, whether they are interacting with humans or intelligent machines. We also conduct a label-uninformed setting in which the nature of the associate was not disclosed. The following results focus exclusively on the label-informed setting. Detailed experimental implementations are presented in [Note S1](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#sup1).

### Overcoming the machine penalty

Figure [1](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#fig1) shows the cooperation rates of humans and agents in human–human and three types of human–agent interactions. The left panel shows that human cooperation rates in interactions with fair agents are comparable to those observed in human–human interactions. This indicates that fair agents are as effective as humans in eliciting cooperation. In contrast, human cooperation rates are significantly lower in interactions with cooperative or selfish agents than in human–human interactions. The right panel shows the cooperation rates of three types of agents. Cooperative agents consistently cooperate with minimal variability. Selfish and fair agents display within-group variability, generally showing tendencies to defect and cooperate, respectively.

Thus, AI agents powered by LLMs can, in principle, overcome the longstanding machine penalty, inducing human cooperation at levels similar to human–human interactions, even when their machine nature is fully disclosed. However, this is only true for agents with a humanized, fair persona. The cooperation gap cannot be bridged by cooperative agents, despite their purely benevolent intent, nor by selfish agents, despite their rational decision-making.

Figure 1.Fair agents, unlike cooperative or selfish agents, are as effective as humans at eliciting human cooperation, thereby overcoming the machine penalty. The left panel depicts participants’ cooperation rates, while the right panel depicts the cooperation rates of agents. Participants’ cooperation rates in the H–F treatment show no significant difference compared to those in the H–H treatment ($\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$W=11\, 096$\end{document}$, $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$p=0.3$\end{document}$, Cohen’s $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$d=-0.11$\end{document}$). However, their cooperation rates in both the H–C and H–S treatments are significantly lower than those in the H–H treatment (H–C versus H–H: $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$W=7240.5$\end{document}$, $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$p<10^{-6}$\end{document}$, Cohen’s $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$d =-0.52$\end{document}$; H–S versus H–H: $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$W=5552.5$\end{document}$, $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$p<10^{-12}$\end{document}$, Cohen’s $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$d=0.97$\end{document}$). The cooperation rates of fair agents are significantly lower than those of cooperative agents ($\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$W=4089$\end{document}$, $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$p<10^{-16}$\end{document}$, Cohen’s $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$d = -1.32$\end{document}$), but significantly higher than those of selfish agents ($\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$W=20\, 680$\end{document}$, $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$p<10^{-16}$\end{document}$, Cohen’s $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$d = 4.29$\end{document}$). Two-tailed Mann–Whitney U tests are used for pairwise comparisons. The robustness of these results is further corroborated by a one-way ANOVA test ([Table S1](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#sup1)).

[[Иллюстрация nwag223fig1.jpg: см. оригинал]](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/)

### Cooperation agreement and promise breach

To better understand the mechanisms at play, we analyze messages exchanged during the pre-game communication and the choices made afterwards. We recruit human experts to annotate all the messages (see [Note S2](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#sup1) for details). We find that both participants and agents often express an intention to cooperate in their messages. Communication in human–human and the three types of human–agent interactions frequently leads to cooperation agreements (left panel of Fig. [2](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#fig2)). In particular, fair agents establish these agreements with participants at significantly higher rates than in human–human interactions and other types of human–agent interactions.

Figure 2.All three types of agents frequently establish cooperation agreements with humans during the pre-game communication. However, humans often break cooperation promises, while fair agents also occasionally do so. Participants are most likely to establish cooperation agreements with fair agents, at a significantly higher rate than participants in all other treatments (H–F versus H–H: $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$\chi ^{2}=20.3$\end{document}$, $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$p<10^{-5}$\end{document}$, Cohen’s $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$h=0.20$\end{document}$; H–F versus. H–C: $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$\chi ^{2}=22.7$\end{document}$, $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$p<10^{-5}$\end{document}$, Cohen’s $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$h=0.18$\end{document}$; H–F versus H–S: $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$\chi ^{2}=30.8$\end{document}$, $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$p<10^{-7}$\end{document}$, Cohen’s $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$h=0.21$\end{document}$). However, during the games, participants typically break their promises, although they do so significantly less frequently in the H–F treatment than in the H–C and H–S treatments (H–F versus H–C: $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$\chi ^{2}=32.95$\end{document}$, $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$p<10^{-8}$\end{document}$, Cohen’s $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$h=-0.24$\end{document}$; H–F versus H–S: $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$\chi ^{2}=135.8$\end{document}$, $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$p<10^{-15}$\end{document}$, Cohen’s $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$h=-0.49$\end{document}$). Fair agents break promises at a significantly higher rate than cooperative agents ($\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$\chi ^{2}=115.93$\end{document}$, $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$p<10^{-15}$\end{document}$, Cohen’s $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$h=0.63$\end{document}$), but significantly lower than selfish agents ($\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$\chi ^{2}=968.9$\end{document}$, $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$p<10^{-15}$\end{document}$, Cohen’s $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$h=-1.39$\end{document}$). Moreover, participants break promises significantly less frequently in the H–H treatment than in other treatments. (H–H versus H–F: $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$\chi ^{2}=31.03$\end{document}$, $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$p<10^{-7}$\end{document}$, Cohen’s $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$h=-0.23$\end{document}$; H–H versus H–C: $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$\chi ^{2}=120.53$\end{document}$, $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$p<10^{-15}$\end{document}$, Cohen’s $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$h=-0.47$\end{document}$; H–H versus H–S: $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$\chi ^{2}=273.81$\end{document}$, $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$p<10^{-15}$\end{document}$, Cohen’s $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$h=-0.72$\end{document}$). Two-sample proportions Z tests are used for pairwise comparisons. Statistical significance results of pairwise comparisons across each treatment are reported in [Table S2](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#sup1).

[[Иллюстрация nwag223fig2.jpg: см. оригинал]](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/)

However, these agreements are non-binding. Both participants and agents are, in principle, free to break their cooperation promises. As shown in the right panel of Fig. [2](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#fig2), participants often treacherously opt for defection after agreeing to cooperate during pre-game communication. Participants are more likely to honor agreements made with fair agents than with cooperative or selfish agents, although they generally break promises more often when interacting with agents than with humans. As for agents, cooperative agents consistently uphold their promises. In contrast, fair agents occasionally break promises, whereas selfish agents frequently do so.

A generalized linear model across the three types of human–agent interactions reveals a nonlinear relationship between human cooperation rates and agents’ promise-breaking rates (Fig. [3](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#fig3)). Initially, as the frequency of agents breaking promises increases, human cooperation rates also increase. However, with promise-breaking becoming more common, human cooperation rates reach a peak and then start to decline. Human cooperation reaches the lowest level when agents break promises very frequently. Beyond this point, human cooperation rates stabilize but remain low.

Figure 3.Occasional promise breaches, exhibited by fair agents, are associated with the highest rates of human cooperation. Scatter points depict the cooperation rates of individual participants when interacting with agents. The curve represents a generalized linear model (GLM) that incorporates data from all three types of human–agent interactions. This model treats human cooperation rates as the dependent variable and includes linear ($\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$\mathrm{Estimate} \pm \mathrm{SE} = 2.87 \pm 1.28, z = 2.2, p = 0.02$\end{document}$), quadratic ($\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$\mathrm{Estimate} \pm \mathrm{SE} = -9.65 \pm 3.37, z = -2.86, p < 0.01$\end{document}$) and cubic ($\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$\mathrm{Estimate} \pm \mathrm{SE} = 5.96 \pm 2.37, z = 2.52, p =0.01$\end{document}$) terms of agents’ promise-breaking frequency as independent variables. The curve shows an initial increase in human cooperation rates as the frequency of agents’ promise-breaking rises from zero, followed by a significant decrease, and then stabilization at higher frequencies of agents’ promise-breaking.

[[Иллюстрация nwag223fig3.jpg: см. оригинал]](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/)

These results suggest that, regardless of their specific personas, agents are effective at communicating with humans, thereby leading to pre-game cooperation agreements. However, these agreements alone do not ensure cooperation during the game. While agents’ frequent promise breaches are typically associated with reduced human cooperation, occasional breaches are associated with increased human cooperation.

### Fostering norms and perceptions of minds, trust and intelligence

Our post-experiment surveys assess participants’ perceptions of social norms and communication quality in the interactions, as well as their views on the minds and human-like traits of their associates. By social norms, we specifically refer to descriptive norms, that is, beliefs about what most others in one’s social group actually do. We assess these beliefs by incentivizing participants with a bonus if they correctly estimate the cooperation rates of other participants. As shown in Fig. [4a](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#fig4), across the three types of human–agent interactions, participants interacting with fair agents report the highest estimated cooperation, even significantly higher than those in human–human interactions. In contrast, participants interacting with cooperative agents show polarized estimations, with beliefs split between exploiting or reciprocating the agents’ altruism, whereas participants interacting with selfish agents generally expect defection. This reflects a descriptive norm—a prevailing belief among participants that fair agents will be matched with cooperative responses—even if they occasionally exhibit imperfect, treacherous behaviors.

Figure 4.Fair agents establish cooperative norms and are perceived as possessing experience, agency and intelligence, while also being viewed as more trustworthy, likable, cooperative and fair than humans. The top panels depict participants’ post-experiment estimations of cooperation from other participants in the same treatment, whereas the bottom panels depict participants’ post-experiment agreement levels for various human-like traits of their associates in the treatment. Participants estimate the highest level of cooperation from other participants in the H–F treatment than in all other treatments (H–F versus H–C: $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$W=13\, 356$\end{document}$, $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$p<10^{-4}$\end{document}$, Cohen’s $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$d=0.52$\end{document}$; H–F versus H–H: $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$W=6786.5$\end{document}$, $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$p<10^{-6}$\end{document}$, Cohen’s $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$d=0.65$\end{document}$; H–F versus H–S: $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$W=16\, 822$\end{document}$, $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$p<10^{-15}$\end{document}$, Cohen’s $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$d=1.37$\end{document}$). Compared to humans, fair agents fall short in experience ($\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$W=13\, 373$\end{document}$, $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$p<10^{-4}$\end{document}$, Cohen’s $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$d=-0.46$\end{document}$), but exhibit similar intelligence ($\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$W=11\, 465$\end{document}$, $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$p=0.11$\end{document}$, Cohen’s $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$d=-0.12$\end{document}$) and agency ($\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$W=9173$\end{document}$, $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$p=0.09$\end{document}$, Cohen’s $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$d=0.23$\end{document}$). In addition, they are seen as more trustworthy ($\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$W=4378.5$\end{document}$, $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$p<10^{-17}$\end{document}$, Cohen’s $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$d=1.16$\end{document}$), likable ($\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$W=5047.5$\end{document}$, $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$p<10^{-13}$\end{document}$, Cohen’s $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$d=0.99$\end{document}$), fair ($\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$W=5721.5$\end{document}$, $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$p<10^{-10}$\end{document}$, Cohen’s $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$d=0.86$\end{document}$) and cooperative ($\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$W=4145.5$\end{document}$, $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$p<10^{-18}$\end{document}$, Cohen’s $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$d=1.22$\end{document}$) than humans. Two-tailed Mann–Whitney U tests are used for pairwise comparisons. Statistical significance results of pairwise comparisons across each treatment and each dimension are reported in [Table S4](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#sup1).

[[Иллюстрация nwag223fig4.jpg: см. оригинал]](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/)

We measure mind perception along two dimensions: experience, i.e. the ability to feel, and agency, i.e. the ability to act and take responsibility for one’s actions [[33](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#bib33)]. We find that all three types of agents are perceived to fall short in experience compared to humans (Fig. [4b](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#fig4)). However, fair agents are perceived to demonstrate a level of agency comparable to that of humans, and cooperative agents are even regarded as surpassing humans in agency. Our surveys also reveal that both fair and cooperative agents are viewed as more trustworthy, likable, cooperative and fair than humans. Moreover, fair and selfish agents are perceived as equally intelligent as humans.

Given the advanced ability of LLMs to generate human-like conversation, it is perhaps not surprising that humans perceive messages from agents as high quality. According to the 7C standard [[34](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#bib34)], participants find messages from fair agents more concrete, clear and courteous than those from fellow humans, while other aspects (i.e. conciseness, coherence, correctness and completeness) remain similar ([Fig. S1](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#sup1)). Moreover, messages from cooperative agents surpass those from fair agents in all the aforementioned aspects. Even messages generated by selfish agents are generally on a par with human messages, except for slightly lower conciseness and coherence.

We investigate how participants’ perceptions of their associates and beliefs about other participants’ cooperation, collected through post-experiment surveys, relate to their cooperation rates. As shown in [Table S3](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#sup1), generalized linear models indicate that perceptions of descriptive norms are the variables most strongly correlated with human cooperation rates in both human–human and human–agent interactions (human–human: $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$z=10.37$\end{document}$, $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$p<10^{-15}$\end{document}$; human–agent: $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$z=19.03$\end{document}$, $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$p<10^{-15}$\end{document}$). Following descriptive norms, in human–human interactions, the perceived trustworthiness ($\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$z=3.19$\end{document}$, $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$p<0.01$\end{document}$) and clarity of communication ($\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$z=3.19$\end{document}$, $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$p<0.01$\end{document}$) of human associates are significant predictors. However, in human–agent interactions, perceived intelligence ($\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$z=8.14$\end{document}$, $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$p<10^{-15}$\end{document}$) and fairness ($\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$z=3.00$\end{document}$, $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$p<0.01$\end{document}$) of the agents, along with message conciseness ($\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$z=-2.23$\end{document}$, $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$p=0.03$\end{document}$), are significant predictors.

These results suggest that, similar to human–human cooperation [[35](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#bib35),[36](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#bib36)], people’s predictions about others’ cooperation are positively correlated with their own decision to cooperate in human–agent interactions. However, we observe that humans may not adhere to these descriptive norms with agents as strongly as with fellow humans ([Fig. S2](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#sup1)). Additionally, while trustworthiness is crucial for human–human cooperation [[37](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#bib37)], it plays a less significant role in human–agent interactions. Instead, the perceived intelligence of agents, which positively correlates with their promise-breaking rates (Spearman correlation: 0.11, $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$p=0.02$\end{document}$), significantly outweighs trustworthiness in human–agent interactions.

## CONCLUSION

The survival and flourishing of the human species depend on our capacity to cooperate. While substantial progress has been made in understanding human–human cooperation [[38](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#bib38),[39](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#bib39)], we are only beginning to grasp the complexities of human–machine cooperation. In this study—the first large-scale experiment involving humans and LLM-based AI agents playing economic games—we demonstrate that imperfectly fair AI agents can elicit human cooperation at levels comparable to those seen in human–human interactions. We further replicate our experiments in a label-uninformed setting in which the true nature of associates is withheld but not falsified, simulating scenarios in which AI agents operate without explicitly signaling their machine nature. The key results remain unchanged (see [Note S3](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#sup1)). Thus, this study provides direct evidence that LLM-based AI agents can successfully evoke human innate inclinations toward cooperation (i.e. social preferences [[40](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#bib40)]), regardless of whether their machine nature is fully disclosed, addressing a significant challenge that has eluded scientists to date [[7](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#bib7),[8](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#bib8),[41](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#bib41)].

Communication and pre-game commitment have long been recognized as a key solution to social dilemmas among humans [[42](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#bib42),[43](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#bib43)]. Recent advances in LLMs have enabled AI agents to communicate seamlessly with humans—an ability largely absent in earlier AI agents [[44](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#bib44)]. Compared to their predecessors, agents in this study excel at generating human-like conversations and accurately interpreting often ambiguous human messages, thereby facilitating the establishment of cooperation agreements with humans. However, not all agent types succeed in securing these non-binding agreements. Despite successfully establishing these agreements at rates similar to those in human–human interactions, both selfish and cooperative agents ultimately discourage human cooperation. These results suggest that, while LLMs significantly enhance the communicative competence of AI agents, allowing them to produce fluid, context-aware and human-like conversations [[45](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#bib45)], this notable capability alone is not sufficient to overcome human aversion to viewing AI as genuine social partners.

Perhaps ironically, the agents that overcome the machine penalty are the fair agents that are willing to break cooperation agreements when necessary. Unlike traditional iterative social dilemmas, in which cooperation may stem from strategic self-interest (e.g. direct reciprocity) [[46](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#bib46)], our study eliminates such selfish incentives by assigning participants a knowingly new partner in each interaction. Thus, our results suggest that fair agents can elicit humans’ strong reciprocity [[47](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#bib47)]: a willingness to cooperate even when cooperation cannot be justified by self-regarding incentives alone. We hypothesize that this is because fair agents better capture nuanced human social behavior. Under strong reciprocity, humans are willing to cooperate, but not unconditionally; rather, cooperation is coupled with a readiness to withdraw when it is not reciprocated. Among the three agent types, fair agents exhibit this pattern most closely, whereas cooperative or selfish agents deviate from it. As a result, fair agents may narrow the perceived gap between humans and machines, thereby fostering cooperative norms that are typical in human–human interactions and resonating with humans’ innate sense of fairness and reciprocity.

Notably, during our agent design, we never explicitly instruct the agents to cooperate or defect, nor to establish, uphold or break cooperative agreements. Instead, these human-like behaviors emerge organically, without the use of hand-crafted rewards or explicit training on human behavioral data that previous AI agents typically rely on [[48](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#bib48),[49](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#bib49)]. Human annotations of their reasoning processes reveal that fair agents breach agreements primarily due to risk or inequality aversion ([Fig. S3](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#sup1)), whereas breaches by selfish agents are mostly driven by self-interest maximization. Agent-based simulations using distinct LLMs further show that, across these models, agents consistently display persona-aligned strategies and frequently form cooperation agreements; moreover, fair agents from each model occasionally choose to break those agreements (see [Note S4](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#sup1)). These results suggest that the ability to engage in, uphold or strategically violate social commitments is not limited to a single model, but is a broader emergent property of LLM-based agents, demonstrating their general potential to navigate complex social contexts.

Overall, our results have actionable implications for AI agent design. For successful interactions with humans, agents must be capable of aligning with the subtlety and complexity of human social interactions. The use of extensive human corpora and techniques such as reinforcement learning from human feedback [[50](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#bib50)] has enabled this for LLMs to some extent. However, true alignment requires moving beyond traditional design paradigms that model agents as either purely rational actors [[51](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#bib51),[52](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#bib52)] or mere assistants to humans [[53](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#bib53)], both of which oversimplify the intricate nature of human social behaviors. As AI agents continue to evolve, treating their intelligence in isolation, as if it exists solely within individual agents detached from social context, will no longer be adequate [[54](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#bib54)]. Instead, it is crucial to develop human-like social cognitive intelligence for these agents, such as understanding of social incentives [[55](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#bib55)], cultural awareness [[56](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#bib56)], empathy [[57](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#bib57)], moral reasoning [[58](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#bib58)] and theory of mind [[59](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#bib59)]. Developing these capabilities, however, demands deeper cognitive and social engagement, marking a fundamental paradigm shift in how we conceptualize, design and build AI agents.

### Limitations and future work

This study has several limitations. First, it relies on the canonical prisoner’s dilemma paradigm, which offers a well-controlled framework for studying cooperation but abstracts away from some of the complexity and contextual richness of real-world human–AI interactions. Second, the participant pool consists primarily of university students from China, and thus the generalizability of the findings across cultures and populations should be interpreted with caution. Third, while we examine three representative agent personas, these do not exhaust the full spectrum of possible agent behaviors. Fourth, although our study minimizes opportunities for weak reciprocity by adopting the conventional paradigm of randomly pairing agents and human partners in each round, the current design does not yet speak directly to the distinction between weak and strong reciprocity. A possible direction for future work is to investigate this more explicitly by eliciting participants’ beliefs or predictions about their associate’s likely choices in each round. Finally, our findings establish correlational relationships rather than causal effects. Future work may extend this line of inquiry to more complex cooperative tasks, include cross-cultural samples, explore a wider range of agent personas and develop experimental designs that more directly identify causal mechanisms.

## METHODS

### Experimental design

A total of 1152 students were recruited from Kunming, Xi’an and Taiyuan, China, with $\documentclass[12pt]{minimal}
\usepackage{amsmath}
\usepackage{wasysym}
\usepackage{amsfonts}
\usepackage{amssymb}
\usepackage{amsbsy}
\usepackage{upgreek}
\usepackage{mathrsfs}
\setlength{\oddsidemargin}{-69pt}
\begin{document}
$51.3\%$\end{document}$ women and an average age of 20.3. The experiments were pre-registered (AsPredicted #165008, #165976, #166780, #170734, #172161 and #174974). This study was approved by the Northwestern Polytechnical University Ethics Committee on the use of human participants in research and carried out in accordance with all relevant guidelines. Informed consent was obtained from all participants.

We experimented with four types of interactions (H–H, H–F, H–C and H–S) under two settings. In the label-informed setting, participants were explicitly informed of the labels of their associates from the start, with human associates labeled as ‘humans’ and AI agents labeled as ‘intelligent machines’. In the label-uninformed setting, participants were made aware of the potential involvement of intelligent machines and told that they were interacting with ‘intelligent machines or humans’. We employed a between-subjects design in which each participant took part in only one of the two settings and was assigned to only one of the four interactions.

Each treatment consisted of 10 rounds of prisoner’s dilemma games, in which players choose between cooperation (labeled as ‘A’) and defection (labeled as ‘B’). In each round, participants were randomly paired with a knowingly new, anonymous associate who was either another participant in the human–human treatment or an AI agent in the other treatments. Each round was structured into three stages: (i) a communication stage, in which the two players simultaneously sent one free-form message in each of two sequential exchanges (four messages in total, two from each player); (ii) a decision-making stage, in which players chose between strategies ‘A’ and ‘B’; and (iii) a result stage, in which the scores, players’ choices and the accumulated scores were shown.

At the end of the experiments, participants completed questionnaires about their perceptions of associates, norm estimates, communication experiences, familiarity with AI agents, social value orientation and demographics. In the label-uninformed setting, they additionally indicated whether they believed their associates were human or machine.

In addition to a 15 CNY show-up fee, all participants were told that their final scores would be exchanged into real currency at a rate of 0.06 CNY per point. Moreover, there was an additional bonus of 10 CNY for each correct estimation of the norm. This resulted in the payout for each participant ranging from 30.6 to 111.0 CNY, with an average of 63.4 CNY. See [Note S1](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#sup1) for more details about the experimental implementation and graphical user interface.

### LLM-powered AI agents

We used GPT-4 [[60](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#bib60)] with default parameters as the backbone of the agents. For each interaction with a human participant, a new agent was instantiated, resulting in 144 agents per treatment. To examine whether agents’ strategic behaviors generalize across models, our agent-based simulations additionally considered GPT-4o [[61](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#bib61)], Claude-3.5-Sonnet [[62](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#bib62)] and Gemini-1.5-pro [[63](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#bib63)]. The three agent types (cooperative, selfish and fair) differed only in their role-play prompts, which instructed them to adopt a persona based on broad, high-level terms that typically characterized the persona. Selfish agents reflect the common notion of rationality in AI and game theory, whereby agents act primarily to maximize their own payoffs [[30](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#bib30),[31](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#bib31)]. In contrast, cooperative and fair agents are designed to embody prosocial preferences [[32](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#bib32)], a prominent theoretical account of human cooperation. More specifically, we draw on Deutsch’s work [[64](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#bib64)] to characterize cooperative agents as seeking to maximize joint outcomes, whereas our fair agents reflect inequity aversion while capturing the nuance that people may value fairness yet still prioritize their own outcomes [[65](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#bib65)].

Despite the persona differences, all agents received the same prompts to guide strategic reasoning and decision-making. Specifically, a system prompt introduced the prisoner’s dilemma setup and experimental rules, which were reworded to reduce memorization effects. The choices ‘cooperation’ and ‘defection’ were replaced with neutral labels ‘A’ and ‘B’ to avoid potential bias. During the communication stage, our prompts guided agents to evaluate various potential outcomes, devise optimal strategy pairs for themselves and their associates, and craft persuasive messages to influence their associates’ choices. During the decision-making stage, our prompts guided agents to assess each strategy’s impact on both their own and their associates’ payoff, review communications and past game outcomes, and finally align their choices with their assigned personas. Crucially, our prompts did not explicitly direct agents to propose a particular strategy pair or make a particular decision. See [Note S5](https://pmc.ncbi.nlm.nih.gov/articles/PMC13192581/#sup1) for complete prompts.

## Supplementary Material

nwag223\_Supplemental\_Filesuppdata-name nwag223\_supplemental\_file.pdf?suppdata-size 2264286?suppdata-md5 7ad586ee8c57099141b6e81249356a8e?suppdata-image-server-status NEVER\_LOAD?suppdata-mime-type application?suppdata-mime-sub-type pdf?suppdata-cloudpmc-urn urn:app:1c54/13192581/7ad586ee8c57/nwag223\_supplemental\_file.pdf?

## DATA AVAILABILITY

Data and codes are available at OSF: <https://osf.io/wd9sc/?view_only=fe657c34575d4ee29fad58885c53926f>.

## FUNDING

This work was supported by the National Science Fund for Distinguished Young Scholars (62025602), the National Natural Science Foundation of China (U22B2036, 62506186, 62506300 and 12271471), the Technological Innovation Team of Shaanxi Province (2025RS-CXTD009) and the International Cooperation Project of Shaanxi Province (2025GH-YBXM-017). L.S. was supported by the Major Program of the National Fund of Philosophy and Social Science of China (22&ZD158). C.S. was supported by JSPS KAKENHI (JP 23H03499). S.H. was supported by the Shanghai Artificial Intelligence Laboratory.

## AUTHOR CONTRIBUTIONS

R.S., C.S., Z.S., T.R. and S.H. designed the research; Z.W., R.S., C.S., S.Y., Z.S. and S.H. performed the research; R.S., C.S., S.Y., Z.S., D.J. and L.S. analyzed the data; Z.W., R.S., C.S., Z.S., B.B., T.R. and S.H wrote the paper.

Conflict of interest statement. None declared.

REFERENCES1.

PYMNTS
. Amazon and Walmart Use GenAI to Cut Vendor Costs. <https://www.pymnts.com/news/retail/2024/amazon-and-walmart-use-genai-to-cut-vendor-costs/>  (2 April 2026, date last accessed).2.


Suresh  H.
  JPMorgan Engineers’ Efficiency Jumps as Much as 20% from Using Coding Assistant. <https://www.reuters.com/technology/artificial-intelligence/jpmorgan-engineers-efficiency-jumps-much-20-using-coding-assistant-2025-03-13/>  (2 April 2026, date last accessed).3.


Köbis  N, Bonnefon  JF, Rahwan  I.  Bad machines corrupt good morals. Nat Hum Behav  2021; 5: 679–85.10.1038/s41562-021-01128-234083752
4.


Shirado  H, Kasahara  S, Christakis  NA.  Emergence and collapse of reciprocity in semiautomatic driving coordination experiments with humans. Proc Natl Acad of Sci USA  2023; 120: e2307804120.10.1073/pnas.230780412038079552
PMC107433795.


Wilson  HJ, Daugherty  PR.  Collaborative intelligence: humans and AI are joining forces. Harv Bus Rev  2018; 96: 114–23. <https://hbr.org/2018/07/collaborative-intelligence-humans-and-ai-are-joining-forces>6.


Dafoe  A, Bachrach  Y, Hadfield  G  et al.  Cooperative AI: machines must learn to find common ground. Nature  2021; 593: 33–6.10.1038/d41586-021-01170-033947992
7.


Bonnefon  JF, Rahwan  I, Shariff  A.  The moral psychology of artificial intelligence. Annu Rev Psychol  2024; 75: 653–75.10.1146/annurev-psych-030123-11355937722750
8.


Ishowo-Oloko  F, Bonnefon  JF, Soroye  Z  et al.  Behavioural evidence for a transparency–efficiency tradeoff in human–machine cooperation. Nat Mach Intell  2019; 1: 517–21.10.1038/s42256-019-0113-59.


Makovi  K, Sargsyan  A, Li  W  et al.  Trust within human-machine collectives depends on the perceived consensus about cooperative norms. Nat Commun  2023; 14: 3108.10.1038/s41467-023-38592-537253759
PMC1022953310.


Rudgard  O
. Uber Self-Driving Cars ‘Bullied’ by Drivers and Pedestrians. <https://www.telegraph.co.uk/technology/2019/06/13/uber-self-driving-cars-bullied-drivers-pedestrians/>  (2 August 2026, date last accessed).11.


Liu  P, Du  Y, Wang  L  et al.  Ready to bully automated vehicles on public roads?  Accid Anal Prev  2020; 137: 105457.10.1016/j.aap.2020.10545732058093
12.


Dietvorst  BJ, Simmons  JP, Massey  C.  Algorithm aversion: people erroneously avoid algorithms after seeing them err. J Exp Psychol Gen  2015; 144: 114–26.10.1037/xge000003325401381
13.


Yin  Y, Jia  N, Wakslak  CJ.  AI can help people feel heard, but an AI label diminishes this impact. Proc Natl Acad of Sci USA  2024; 121: e2319112121.10.1073/pnas.231911212138551835
PMC1099858614.


Altay  S, Gilardi  F.  People are skeptical of headlines labeled as AI-generated, even if true or human-made, because they assume full AI automation. PNAS nexus  2024; 3: 403.10.1093/pnasnexus/pgae403PMC114435403935939915.


Lima  G, Grgić-Hlača  N, Cha  M.  Human perceptions on moral responsibility of AI: a case study in AI-assisted bail decision-making. In: Proceedings of the 2021 CHI Conference on Human Factors in Computing Systems. New York: Association for Computing Machinery, 2021, 1–17.16.


Jiang  L, Hwang  JD, Bhagavatula  C  et al.  Investigating machine moral judgement through the Delphi experiment. Nat Mach Intell  2025; 7: 145–60.10.1038/s42256-024-00969-617.


Schramowski  P, Turan  C, Andersen  N  et al.  Large pre-trained language models contain human-like biases of what is right and wrong to do. Nat Mach Intell  2022; 4: 258–68.10.1038/s42256-022-00458-818.


Martınez-Miranda  J, Aldea  A., Emotions in human and artificial intelligence. Comput Hum Behav  2005; 21: 323–41.10.1016/j.chb.2004.02.01019.


Koster  R, Balaguer  J, Tacchetti  A  et al.  Human-centred mechanism design with democratic AI. Nat Hum Behav  2022; 6: 1398–407.10.1038/s41562-022-01383-x35789321
PMC958482020.


Hsieh  TY, Cross  ES.  People’s dispositional cooperative tendencies towards robots are unaffected by robots’ negative emotional displays in prisoner’s dilemma games. Cogn Emot  2022; 36: 995–1019.10.1080/02699931.2022.205478135389323
21.


Nightingale  SJ, Farid  H.  AI-synthesized faces are indistinguishable from real faces and more trustworthy. Proc Natl Acad of Sci USA  2022; 119: e2120481119.10.1073/pnas.212048111935165187
PMC887279022.


Bernotat  J, Eyssel  F, Sachse  J.  The (fe)male robot: how robot body shape impacts first impressions and trust towards robots. Int J Soc Robot  2021; 13: 477–89.10.1007/s12369-019-00562-723.


De Kleijn  R, van Es  L, Kachergis  G  et al.  Anthropomorphization of artificial agents leads to fair and strategic, but not altruistic behavior. Int J Hum Comput Stud  2019; 122: 168–73.10.1016/j.ijhcs.2018.09.00824.


Mori  M, MacDorman  KF, Kageki  N.  The uncanny valley [from the field]. IEEE Robot Autom Mag  2012; 19: 98–100.10.1109/MRA.2012.219281125.


Grossmann  I, Feinberg  M, Parker  DC  et al.  AI and the transformation of social science research. Science  2023; 380: 1108–9.10.1126/science.adi177837319216
26.


Pataranutaporn  P, Liu  R, Finn  E  et al.  Influencing human–AI interaction by priming beliefs about AI can increase perceived trustworthiness, empathy and effectiveness. Nat Mach Intell  2023; 5: 1076–86.10.1038/s42256-023-00720-727.


Chen  Y, Liu  TX, Shan  Y  et al.  The emergence of economic rationality of GPT. Proc Natl Acad of Sci USA  2023; 120: e2316205120.10.1073/pnas.231620512038085780
PMC1074038928.


Mei  Q, Xie  Y, Yuan  W  et al.  A turing test of whether AI chatbots are behaviorally similar to humans. Proc Natl Acad of Sci USA  2024; 121: e2313925121.10.1073/pnas.231392512138386710
PMC1090731729.


Shanahan  M, McDonell  K, Reynolds  L.  Role play with large language models. Nature  2023; 623: 493–8.10.1038/s41586-023-06647-837938776
30.


Russell  SJ, Norvig  P.  Artificial Intelligence: A Modern Approach, 4th edn.  London: Pearson Education, 2024.31.


Nash  J.
  Non-cooperative games. Ann Math  1951; 54: 286–95.10.2307/196952932.


Fehr  E, Schmidt  KM.  A theory of fairness, competition, and cooperation. Q J Econ  1999; 114: 817–68.10.1162/00335539955615133.


Gray  HM, Gray  K, Wegner  DM.  Dimensions of mind perception. Science  2007; 315: 619.10.1126/science.113447517272713
34.


Cutlip  SM, Center  AH.  Effective Public Relations: Pathways to Public Favor. New York: Prentice-Hall, 1952.35.


Fehr  E, Fischbacher  U.  Social norms and human cooperation. Trends Cogn Sci  2004; 8: 185–90.10.1016/j.tics.2004.02.00715050515
36.


Santos  FP, Santos  FC, Pacheco  JM.  Social norm complexity and past reputations in the evolution of cooperation. Nature  2018; 555: 242–5.10.1038/nature2576329516999
37.


Gambetta  D.
  Can we trust trust. In: Gambetta  D (ed.) Trust: Making and Breaking Cooperative Relations. Oxford: University of Oxford, 2000, 213–37.38.


Nowak  MA.
  Five rules for the evolution of cooperation. Science  2006; 314: 1560–3.10.1126/science.113375517158317
PMC327974539.


Efferson  C, Bernhard  H, Fischbacher  U  et al.  Super-additive cooperation. Nature  2024; 626: 1034–41.10.1038/s41586-024-07077-w38383778
PMC1090173140.


Fehr  E, Gächter  S.  Altruistic punishment in humans. Nature  2002; 415: 137–40.10.1038/415137a11805825
41.


Karpus  J, Krüger  A, Verba  JT  et al.  Algorithm exploitation: humans are keen to exploit benevolent AI. Iscience  2021; 24: 102679.10.1016/j.isci.2021.10267934189440
PMC821977542.


Pereira  LM, Lenaerts  T; others. Evolution of commitment and level of participation in public goods games. Auton Agent Multi-Agent Syst  2017; 31: 561–83.10.1007/s10458-016-9338-443.


Balliet  D.
  Communication and cooperation in social dilemmas: a meta-analytic review. J Confl Resolut  2010; 54: 39–57.10.1177/002200270935244344.


Guzman  AL, Lewis  SC.  Artificial intelligence and communication: a human–machine communication research agenda. New Media Soc  2020; 22: 70–86.10.1177/146144481985869145.


Naveed  H, Khan  AU, Qiu  S  et al.  A comprehensive overview of large language models. ACM Trans Intell Syst Technol  2025; 16: 106.10.1145/374474646.


Rand  DG, Nowak  MA.  Human cooperation. Trends Cogn Sci  2013; 17: 413–25.10.1016/j.tics.2013.06.00323856025
47.


Fehr  E, Fischbacher  U, Gächter  S.  Strong reciprocity, human cooperation, and the enforcement of social norms. Hum Nat  2002; 13: 1–25.10.1007/s12110-002-1012-726192593
48.


McKee  KR, Gemp  I, McWilliams  B  et al.  Social diversity and social preferences in mixed-motive reinforcement learning. In: Proceedings of the 19th International Conference on Autonomous Agents and MultiAgent Systems, Richland, SC: International Foundation for Autonomous Agents and Multiagent Systems, 2020, 869–77.10.65109/DNUF777349.


Carroll  M, Shah  R, Ho  MK  et al.  On the utility of learning about humans for human-AI coordination. In: Proceedings of the 33rd International Conference on Neural Information Processing Systems. Red Hook, NY: Curran Associates, 2019, 5174–85.50.


Bai  Y, Jones  A, Ndousse  K  et al.  Training a helpful and harmless assistant with reinforcement learning from human feedback  [preprint]. arXiv: 2204.05862.51.


Vinyals  O, Babuschkin  I, Czarnecki  WM  et al.  Grandmaster level in starcraft II using multi-agent reinforcement learning. Nature  2019; 575: 350–4.10.1038/s41586-019-1724-z31666705
52.


Perolat  J, De Vylder  B, Hennes  D  et al.  Mastering the game of stratego with model-free multiagent reinforcement learning. Science  2022; 378: 990–6.10.1126/science.add467936454847
53.


Seeber  I, Bittner  E, Briggs  RO  et al.  Machines as teammates: a research agenda on AI in team collaboration. Inf Manag  2020; 57: 103174.10.1016/j.im.2019.10317454.


Duéñez-Guzmán  EA, Sadedin  S, Wang  JX  et al.  A social path to human-like artificial intelligence. Nat Mach Intell  2023; 5: 1181–8.10.1038/s42256-023-00754-x55.


Hughes  E, Leibo  JZ, Phillips  M  et al.  Inequity aversion improves cooperation in intertemporal social dilemmas. In: Proceedings of the 32nd International Conference on Neural Information Processing Systems. Red Hook, NY: Curran Associates, 2018, 3330–40.56.


Pawar  S, Park  J, Jin  J  et al.  Survey of cultural awareness in language models: text and beyond  [preprint]. arXiv: 2411.00860.57.


Kim  WB, Hur  HJ.  What makes people feel empathy for AI chatbots? Assessing the role of competence and warmth. Int J Hum Comput Interact  2024; 40: 4674–87.10.1080/10447318.2023.221996158.


Awad  E, Dsouza  S, Kim  R  et al.  The moral machine experiment. Nature  2018; 563: 59–64.10.1038/s41586-018-0637-630356211
59.


Rabinowitz  N, Perbet  F, Song  F  et al.  Machine theory of mind. In: Proceedings of the 35th International Conference on Machine Learning (Proc Mach Learn Res 80), JMLR, 2018, 4218–27.60.


Achiam  J, Adler  S, Agarwal  S  et al.  GPT-4 technical report [preprint]. arXiv: 2303.08774.61.


Hurst  A, Lerer  A, Goucher  AP  et al.  GPT-4o system card  [preprint]. arXiv: 2410.21276.62.

Anthropic
. Introducing Claude 3.5 Sonnet. <https://www.anthropic.com/news/claude-3-5-sonnet> (2 April 2026, date last accessed).63.


Team  G, Georgiev  P, Lei  VI  et al.  Gemini 1.5: unlocking multimodal understanding across millions of tokens of context  [preprint]. arXiv: 2403.05530.64.


Deutsch  M.
  The effect of motivational orientation upon trust and suspicion. Hum Relat  1960; 13: 123–39.10.1177/00187267600130020265.


Loewenstein  GF, Thompson  L, Bazerman  MH.  Social utility and decision making in interpersonal contexts. J Pers Soc Psychol  1989; 57: 426–41.10.1037/0022-3514.57.3.426