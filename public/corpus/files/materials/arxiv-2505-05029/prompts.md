---
id: arxiv-2505-05029-prompts
type: material
title: 'Опубликованные разделы о промптах: Reputation as a Solution to Cooperation Collapse in LLM-based MASs'
source_id: arxiv-2505-05029
source_url: https://arxiv.org/html/2505.05029v3
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: 7a99d7c48882690c601b04067f2f0c5a874c357a8f4fb9c8aae81109df1d400f
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

## Appendix B More Details of Agent Descriptions and Prompts in RepuNet

In our setup, there were 20 generative agents. Figure [5](https://arxiv.org/html/2505.05029v3#A2.F5 "Figure 5 ‣ Appendix B More Details of Agent Descriptions and Prompts in RepuNet ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs") to [10](https://arxiv.org/html/2505.05029v3#A2.F10 "Figure 10 ‣ Appendix B More Details of Agent Descriptions and Prompts in RepuNet ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs") provide detailed agent descriptions for three distinct scenarios. Besides, we sketch the prompts for the LLM-based operations of RepuNet from Figure [13](https://arxiv.org/html/2505.05029v3#A2.F13 "Figure 13 ‣ Appendix B More Details of Agent Descriptions and Prompts in RepuNet ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs") to Figure [19](https://arxiv.org/html/2505.05029v3#A2.F19 "Figure 19 ‣ Appendix B More Details of Agent Descriptions and Prompts in RepuNet ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs"). The full prompts for all three scenarios are available in the Github repository at the following link: https://github.com/RGB-0000FF/RepuNet. Table [24](https://arxiv.org/html/2505.05029v3#A2.F24 "Figure 24 ‣ Appendix B More Details of Agent Descriptions and Prompts in RepuNet ‣ Reputation as a Solution to Cooperation Collapse in LLM-based MASs") serves as a reference guide for locating the specific prompts and Python files associated with each RepuNet component.

![Refer to caption](https://arxiv.org/html/2505.05029v3/Agent_description_S1_pd_1.png)


Figure 5. Agent descriptions of Agent 1 to 10 in Scenario 1.


Figure 6. Agent descriptions of Agent 11 to 20 in Scenario 1.


Figure 7. Agent descriptions of Agent 1 to 10 in Scenario 2.


Figure 8. Agent descriptions of Agent 11 to 20 in Scenario 2.


Figure 9. Agent descriptions of Agent 1 to 10 in Scenario 3.


Figure 10. Agent descriptions of Agent 11 to 20 in Scenario 3.


![Refer to caption](https://arxiv.org/html/2505.05029v3/_RepuNet_Prompts_1.png)

Figure 11. Prompt for $r\_{i\rightarrow j}(t+1)\leftarrow\texttt{ShapeRepuPeer}(m\_{ij}(t+1),\text{if}\ r\_{i\rightarrow j}(t)=\phi)$: Reputation driven by direct encounters at the agent level.

![Refer to caption](https://arxiv.org/html/2505.05029v3/_RepuNet_Prompts_2.png)

Figure 12. Prompt for $r\_{i\rightarrow j}(t+1)\leftarrow\texttt{ShapeRepuPeer}(m\_{ij}(t+1),r\_{i\rightarrow j}(t),\text{if}\ r\_{i\rightarrow j}(t)\neq\phi)$: Reputation driven by direct encounters at the agent level.

![Refer to caption](https://arxiv.org/html/2505.05029v3/_RepuNet_Prompts_3.png)

Figure 13. Prompt for $r\_{i}(t+1)\leftarrow\texttt{ShapeRepuSelf}(\mathcal{D}\_{i},m\_{ix}(t+1),\text{if}\ r\_{i}(t)=\phi)$: Reputation driven by direct encounters at the agent level.


![Refer to caption](https://arxiv.org/html/2505.05029v3/_RepuNet_Prompts_4.png)

Figure 14. Prompt for $r\_{i}(t+1)\leftarrow\texttt{ShapeRepuSelf}(\mathcal{D}\_{i},m\_{ix}(t+1),r\_{i}(t),\text{if}\ r\_{i}(t)\neq\phi)$: Reputation driven by direct encounters at the agent level.

![Refer to caption](https://arxiv.org/html/2505.05029v3/_RepuNet_Prompts_5.png)

Figure 15. Prompt for $r\_{l\rightarrow y}(t+1)\leftarrow\texttt{ShapeRepuGossip}(\theta\_{y}(t+1),\text{if}\ r\_{l\rightarrow y}(t)=\phi)$: Reputation driven by indirect gossip at the agent level.

![Refer to caption](https://arxiv.org/html/2505.05029v3/_RepuNet_Prompts_6.png)

Figure 16. Prompt for $r\_{l\rightarrow y}(t+1)\leftarrow\texttt{ShapeRepuGossip}(\theta\_{y}(t+1),\text{if}\ r\_{l\rightarrow y}(t)\neq\phi)$: Reputation driven by indirect gossip at the agent level.


![Refer to caption](https://arxiv.org/html/2505.05029v3/_RepuNet_Prompts_7.png)

Figure 17. Prompt for $w\_{i\rightarrow j}(t)\in\{\text{``Y'',``N''}\}\leftarrow\texttt{InteractEdgeShape}(\mathcal{D}\_{i},m\_{ij}(t),\text{if}\ r\_{i\rightarrow j}(t)=\phi)$: Network driven by direct encounters at the system level.

![Refer to caption](https://arxiv.org/html/2505.05029v3/_RepuNet_Prompts_8.png)

Figure 18. Prompt for $w\_{i\rightarrow j}(t)\in\{\text{``Y'',``N''}\}\leftarrow\texttt{InteractEdgeShape}(\mathcal{D}\_{i},m\_{ij}(t),r\_{i\rightarrow j}(t))$: Network driven by direct encounters at the system level.

![Refer to caption](https://arxiv.org/html/2505.05029v3/_RepuNet_Prompts_9.png)

Figure 19. Prompt for $w\_{l\rightarrow y}(t)\in\{\text{``Y'',``N''}\}\leftarrow\texttt{GossipEdgeShape}(\mathcal{D}\_{l},\theta\_{y}(t),r\_{l\rightarrow y}(t))$: Network driven by indirect gossip at the system level.


![Refer to caption](https://arxiv.org/html/2505.05029v3/Gossip_1.png)

Figure 20. Prompt for $y\_{will}\in\{\text{``Y'',``N''}\}\leftarrow\texttt{GossipWill}(m,\mathcal{D})$: Gossip from the gossiper’s perspective

![Refer to caption](https://arxiv.org/html/2505.05029v3/Gossip_2.png)

Figure 21. Prompt for $a\_{l}\leftarrow\texttt{GossipChoice}(\phi)$: Gossip from the gossiper’s perspective.

![Refer to caption](https://arxiv.org/html/2505.05029v3/Gossip_3.png)

Figure 22. Prompt for $\mathcal{I}\_{g\rightarrow l}\leftarrow\texttt{GossipIdentify}(\mathcal{G}\_{g\rightarrow l})$: Gossip from the listener’s perspective.

![Refer to caption](https://arxiv.org/html/2505.05029v3/Gossip_4.png)

Figure 23. Prompt for $\mathcal{C}(\mathcal{I}\_{g\rightarrow l})\leftarrow\texttt{GossipEvaluate}(\mathcal{I}\_{g\rightarrow l},r\_{g},P(\bar{I}))$: Gossip from the listener’s perspective.

![Refer to caption](https://arxiv.org/html/2505.05029v3/appendix_table_fig.png)


Figure 24. Reference guide for locating the specific prompts and Python files associated with each RepuNet component.
