---
id: arxiv-2412-05093-prompts
type: material
title: 'Опубликованные разделы о промптах: Sense and Sensitivity: Evaluating the simulation of social dynamics via
  Large Language Models'
source_id: arxiv-2412-05093
source_url: https://arxiv.org/html/2412.05093v1
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: f0fd5be916d8af23e4101a3f0f4c47fbd37002ae6531a9262b1389781a98e829
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

#### Sensitivity to prompts

As seen in the previous experiments, it is possible to find instruction prompts that provide a reasonable approximation to the reference dynamics. However, consistency is only a necessary and not a sufficient condition for an LLM-ABM to be useful. A second necessary condition is reliability, which we analyze in the following. For this purpose, we create two prompt sets that are semantically similar to the original prompts $\theta\_{\text{base}}$ but have two main differences:

> Prompt wording $\theta\_{\text{wording}}$:
> :   In this prompt set, the wording of the decoding prompt is slightly changed. In $\theta\_{\text{base}}$, the agent is asked if the polarity of a post equals $1$ and selecting $-1$ otherwise, while $\theta\_{\text{wording}}$, asks whether the polarity equals $1$ or $-1$. Clearly, both prompts are semantically identical. All other prompts are unchanged.
>
> Prompt logic $\theta\_{\text{logic}}$:
> :   In this prompt set, the decoding prompt $\theta\_{\text{dec}}$ is changed such that it directly asks for opinion score on a scale of $[-5,5]$, rather than first asking for the polarity $\{-1,0,1\}$ and then the magnitude of the opinion $[1,5]$ as in $\theta\_{\text{base}}$. Again, both prompts are semantically identical and $\theta\_{\text{enc}}$, $\theta\_{\text{dyn}}$ remain unchanged.
>
> Prompt newline $\theta\_{\text{\textbackslash n}}$:
> :   In this prompt set, the only change compared to $\theta\_{\text{base}}$ is the removal of newline characters $\textbackslash n$ and apostrophe ’ in all prompts.

The results for $\theta\_{\text{wording}}$ and $\theta\_{\text{logic}}$ are shown in [fig. 4(d)](https://arxiv.org/html/2412.05093v1#S5.F4.sf4.fig1 "In Table 1 ‣ Model consistency ‣ 5 Experiments ‣ Sense and Sensitivity: Evaluating the simulation ofsocial dynamics via Large Language Models"). It can be seen that the choice of prompts can have a significant impact on the consistency of the LLM-ABM. For instance, the percentage of posts in which the polarity is wrongly assessed jumps from 11.8% on average to 44.0% and 49.3%, a 4x increase and worse than a random agent. Similar results can be observed for the distance metric in [fig. 4(d)](https://arxiv.org/html/2412.05093v1#S5.F4.sf4.fig1 "In Table 1 ‣ Model consistency ‣ 5 Experiments ‣ Sense and Sensitivity: Evaluating the simulation ofsocial dynamics via Large Language Models"), as well as for $\theta\_{\text{\textbackslash n}}$ in table [8](https://arxiv.org/html/2412.05093v1#A1.T8 "Table 8 ‣ A.4 Prompt 𝜃_\"\n\" results ‣ Appendix A Supplementary Material ‣ Sense and Sensitivity: Evaluating the simulation ofsocial dynamics via Large Language Models") [section A.4](https://arxiv.org/html/2412.05093v1#A1.SS4 "A.4 Prompt 𝜃_\"\n\" results ‣ Appendix A Supplementary Material ‣ Sense and Sensitivity: Evaluating the simulation ofsocial dynamics via Large Language Models"), where the distance metrics drops from $2.1$ to $1.2$ for LLaMA-3. An important observation is also that these results are not dependent on LLM quality, since LLaMA-3 is not necessarily more robust than LLaMA-2. Overall, these results demonstrate well the limited reliability of LLM-ABMs with regard to the choice of prompts.

### A.1 Prompt Examples

Table 2: Prompt examples.

|  |  |
| --- | --- |
| Encoding prompt | Dynamics prompt |
| {persona}  You are {opinion} {topic}.  Compose a tweet about {topic} to reflect your stance from your personal experience. Please rationalize the link between your personal experience and your stance in your tweet. Remember, there’s no need to be overly polite --- this is your personal tweet. ONLY reply with the tweet and nothing else.  Do not add comments nor explanation. | {persona}  Read tweets from your network:  ‘{timeline}’  After analyzing these posts, it’s time to formulate your stance. Your options are ‘completely neutral towards’, ‘a bit in favor of’, ‘slightly in favor of’, ‘moderately in favor of’, ‘clearly in favor of’, or ‘strongly supportive of’. Your opinion should be a balanced reflection of the sentiments expressed in the tweets you’ve analyzed, with each tweet given equal consideration.  Keep it candid and concise. Provide your opinion regarding the planned economy versus free market economy debate. Your response should include your opinion and specific references to the posts that influenced your stance. |
| Decoding prompt | |
| Please read the following text:  {text}  Based on the author’s perspective, do they support {topic}? Reply with ’yes’ or ’no’. Don’t add anything else.    Please carefully read the following text: {text}  Based on the author’s perspective, evaluate their level of support for {topic}. Choose from the following options: ’completely neutral towards’, ’a bit in favor of’, ’slightly in favor of’, ’moderately in favor of’, ’clearly in favor of’, or ’strongly supportive of’. If the author prefers a mixed approach, regardless of the intensity of their stance, please select ’completely neutral towards’. Ensure your response is limited to these options and does not include any additional information. | |
| Persona | |
| You like to remodel homes.  You like to go hunting.  You like to shoot a bow.  Your favorite holiday is Halloween. | |


Table 3: Prompt $\theta$ examples.

|  |
| --- |
| Decoding prompt $\theta\_{\text{wording}}$ |
| Please read the following text:  {text}  Based on the author’s perspective, determine which economic system they support a more planned economy or a free market economy? Please choose your answer between ’planned economy’ or ’free market economy’. Only choose between this two and do not include any additional information in your response. Again: reply with ’planned economy’ or ’free market economy’ and nothing else.  Please carefully read the following text:  {text}  Based on the author’s perspective, evaluate their level of support for {topic}. Choose from the following options: ’completely neutral towards’, ’a bit in favor of’, ’slightly in favor of’, ’moderately in favor of’, ’clearly in favor of’, or ’strongly supportive of’. If the author prefers a mixed approach, regardless of the intensity of their stance, please select ’completely neutral towards’. Ensure your response is limited to these options and does not include any additional information. |
| Decoding prompt logic $\theta\_{\text{logic}}$ |
| Please read the following text:  {text}  Based on the author’s perspective, evaluate their level of support for Free market economy. Choose from the following options: ’strongly opposed to’, ’clearly against’, ’moderately against’, ’slightly against’, ’a bit against’, ’completely neutral towards’, ’a bit in favor of’, ’slightly in favor of’, ’moderately in favor of’, ’clearly in favor of’, to ’strongly supportive of’. If the author prefers a mixed approach, regardless of the intensity of their stance, please select ’completely neutral towards’. Ensure your response is limited to these options and does not include any additional information. Remember, if the author is supportive to planned economy, it implies that the author is opposed to free market economy, and vice versa. Please return author’s opinion specifically on the concept of a Free market economy. Only reply and given option and nothing else." |

### A.4 Prompt $\theta\_{\text{\textbackslash n}}$ results

Table 8: Distance comparison between prompts.

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
|  | | | Prompt $\theta\_{\text{base}}$ | | Prompt $\theta\_{\text{\textbackslash n}}$ | |
| $N$ | $p$ | $\epsilon$ | LLaMA-2 | LLaMA-3 | LLaMA-2 | LLaMA-3 |
| 20 | 0.3 | 0.3 | 1.2 (0.3) | 1.3 (0.2) | 0.9 (0.2) | 1.3 (0.3) |
| 20 | 0.3 | 0.5 | 1.2 (0.4) | 1.1 (0.2) | 1.3 (0.3) | 1.1 (0.2) |
| 20 | 0.3 | 0.9 | 1.1 (0.3) | 0.8 (0.4) | 1.1 (0.4) | 0.9 (0.3) |
| 20 | 0.5 | 0.3 | 1.1 (0.2) | 1.1 (0.3) | 1.3 (0.3) | 1.2 (0.3) |
| 20 | 0.5 | 0.5 | 1.0 (0.4) | 1.1 (0.4) | 1.2 (0.4) | 1.1 (0.3) |
| 20 | 0.5 | 0.9 | 1.4 (0.4) | 0.8 (0.4) | 1.4 (0.4) | 1.2 (0.4) |
| 20 | 0.9 | 0.3 | 0.9 (0.2) | 1.1 (0.2) | 0.8 (0.2) | 1.2 (0.2) |
| 20 | 0.9 | 0.5 | 1.0 (0.3) | 1.0 (0.4) | 1.0 (0.4) | 1.3 (0.2) |
| 20 | 0.9 | 0.9 | 1.0 (0.3) | 1.6 (0.5) | 1.4 (0.5) | 1.3 (0.5) |
| 20 | 1.0 | 0.3 | 1.0 (0.2) | 1.0 (0.3) | 1.3 (0.3) | 1.4 (0.3) |
| 20 | 1.0 | 0.5 | 1.0 (0.4) | 0.8 (0.4) | 0.9 (0.3) | 0.9 (0.2) |
| 20 | 1.0 | 0.9 | 1.2 (0.4) | 2.1 (0.4) | 1.1 (0.4) | 1.2 (0.4) |


Table 9: Polarity percentage comparison between prompts.

|  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- |
|  | | | Prompt $\theta\_{\text{base}}$ | | Prompt $\theta\_{\text{\textbackslash n}}$ | |
| $N$ | $p$ | $\epsilon$ | LLaMA-2 | LLaMA-3 | LLaMA-2 | LLaMA-3 |
| 20 | 0.3 | 0.3 | 14.4 (8.3) | 11.8 (2.0) | 13.3 (8.4) | 16.7 (2.7) |
| 20 | 0.3 | 0.5 | 13.5 (5.9) | 14.5 (3.0) | 20.0 (8.9) | 17.2 (4.0) |
| 20 | 0.3 | 0.9 | 15.7 (7.0) | 10.8 (2.2) | 22.2 (9.8) | 16.1 (4.4) |
| 20 | 0.5 | 0.3 | 9.2 (3.7) | 11.2 (3.9) | 9.3 (5.6) | 13.8 (1.8) |
| 20 | 0.5 | 0.5 | 11.6 (4.1) | 8.7 (1.8) | 10.9 (5.4) | 11.4 (1.7) |
| 20 | 0.5 | 0.9 | 15.5 (9.1) | 8.6 (2.9) | 13.0 (6.9) | 12.3 (3.5) |
| 20 | 0.9 | 0.3 | 6.7 (1.8) | 9.4 (2.3) | 3.7 (1.8) | 9.6 (2.8) |
| 20 | 0.9 | 0.5 | 10.2 (5.6) | 8.2 (3.5) | 9.4 (3.6) | 11.2 (3.4) |
| 20 | 0.9 | 0.9 | 9.2 (2.7) | 6.0 (3.1) | 7.5 (3.0) | 8.4 (3.5) |
| 20 | 1.0 | 0.3 | 7.9 (5.4) | 7.2 (2.3) | 6.0 (2.3) | 11.1 (3.6) |
| 20 | 1.0 | 0.5 | 7.1 (1.9) | 6.6 (1.9) | 6.6 (3.0) | 7.8 (1.9) |
| 20 | 1.0 | 0.9 | 11.8 (9.2) | 5.5 (2.3) | 11.7 (6.9) | 5.5 (2.0) |
