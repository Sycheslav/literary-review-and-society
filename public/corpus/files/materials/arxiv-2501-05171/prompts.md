---
id: arxiv-2501-05171-prompts
type: material
title: 'Опубликованные разделы о промптах: Emergence of polarization in networks of large language model agents'
source_id: arxiv-2501-05171
source_url: https://arxiv.org/html/2501.05171v3
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: a8adaf589f82fc050a7ef01ed99f3e54828dc0cf25e33ca2d50e57ead7266b5e
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

## 11 Supplementary Note 10: Experiments on LLMs with Enhanced Prompting

We first explore whether seeding a minority of agents with a markedly different reasoning strategy can temper or amplify polarization. Specifically, we equip 10% of all agents with chain-of-thought (CoT) prompting, enabling them to think step by step as they establish social relationships, communicate, and form opinions on political issues. These CoT agents are seeded at the beginning of the simulation and randomly distributed across the network. The proportion of CoT agents across different opinions aligns with the overall initialization distribution.

Comparing the evolution of the original system with that of the system seeded with 10% CoT agents (Figures [S42](https://arxiv.org/html/2501.05171v3#S11.F42 "Figure S42 ‣ 11 Supplementary Note 10: Experiments on LLMs with Enhanced Prompting ‣ Emergence of polarization in networks of large language model agents") and [S43](https://arxiv.org/html/2501.05171v3#S11.F43 "Figure S43 ‣ 11 Supplementary Note 10: Experiments on LLMs with Enhanced Prompting ‣ Emergence of polarization in networks of large language model agents")), we observe a substantial shift: the proportion of agents holding moderate or neutral opinions increases from 8% to 38% (Figure [S42](https://arxiv.org/html/2501.05171v3#S11.F42 "Figure S42 ‣ 11 Supplementary Note 10: Experiments on LLMs with Enhanced Prompting ‣ Emergence of polarization in networks of large language model agents")), and the overall polarization level drops by 15% (Figure [S43](https://arxiv.org/html/2501.05171v3#S11.F43 "Figure S43 ‣ 11 Supplementary Note 10: Experiments on LLMs with Enhanced Prompting ‣ Emergence of polarization in networks of large language model agents")a). Meanwhile, the network-level division between agents with opposing opinions is largely alleviated, with final modularity scores declining from 0.43 to 0.25 (Figure [S43](https://arxiv.org/html/2501.05171v3#S11.F43 "Figure S43 ‣ 11 Supplementary Note 10: Experiments on LLMs with Enhanced Prompting ‣ Emergence of polarization in networks of large language model agents")b; a modularity score above 0.3 typically marks clear community structures). Overall, these observations suggest that even a small minority of agents equipped with a markedly different reasoning strategy and seeded into the system can effectively temper polarization in the synthetic testbed. These results illustrate how the proposed synthetic LLM-agent testbed can be used to generate and examine hypotheses about how heterogeneity in agent-level reasoning configurations may shape collective opinion dynamics.

![Refer to caption](https://arxiv.org/html/2501.05171v3/COT.png)


Figure S42: Evolution of LLM agents’ collective opinions and network structures, where we seed 10% of agents with chain-of-thought (CoT) prompting. All agents are driven by GPT-3.5 and they discuss the political issue of abortion bans.


Figure S43: Comparison between the original system and a system where 10% of agents are seeded with CoT prompting, in terms of a, polarization level, and b, network modularity.

Furthermore, we investigate whether the proposed system can be extended, through enhanced prompting, to instantiate agents with subgroup-inspired profiles that reflect heterogeneous behavioural tendencies observed in human populations.. For example, we have conducted a simple case shown in Figure [S44](https://arxiv.org/html/2501.05171v3#S11.F44 "Figure S44 ‣ 11 Supplementary Note 10: Experiments on LLMs with Enhanced Prompting ‣ Emergence of polarization in networks of large language model agents"), where we use LLMs to generate two representative profiles of human subgroups in the U.S. and incorporate these profiles into the process of forming political opinions. Results show that LLM agents can simulate the two subgroups, capturing their distinctive behavioural patterns. Overall, this extended experiment illustrates that the proposed system remains flexible for modeling diverse human subgroups and their behavioural differences. We note that, in the main experiments of the paper, we intentionally do not insert additional subgroup-specific information into the agents’ prompts in order to preserve the spontaneous nature of their behaviour.

Figure S44: Two representative profiles of human subgroups in the U.S. and their different behaviours when discussing political issues. Credit: Profile icons designed by Magnific.
