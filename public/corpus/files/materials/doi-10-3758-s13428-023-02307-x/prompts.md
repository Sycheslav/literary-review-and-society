---
id: doi-10-3758-s13428-023-02307-x-prompts
type: material
title: 'Опубликованные разделы о промптах: Diminished diversity-of-thought in a standard large language model'
source_id: doi-10-3758-s13428-023-02307-x
source_url: https://link.springer.com/article/10.3758/s13428-023-02307-x
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: ccee96455f0794e5f7369a7aebe6b22250ec5b5a9bf13a9ca901ef73f9d9ae89
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

## Exploratory robustness checks: Order effects and demographic prompt additions

We conducted an exploratory follow-up study for each of the six studies where a central-variable question was answered with a homogeneous “correct answer.” In each of our follow-up conditions, we presented the answer choices for the question with the homogeneous “correct answer” in the reverse order of our original condition to test for potential order effects. The results of these follow-up conditions are presented in Table [3](https://link.springer.com/article/10.3758/s13428-023-02307-x#Tab3). For the purposes of this analysis, we say that the “correct answer” was *robust to the order change* if 90% of surveyed GPT runs still gave the “correct answer” in the reverse-order condition. In summary, 66.7% of the analysed “correct answers,” spanning six out of the nine studies, were robust to changing the order of answer choices. However, 33.3% of the “correct answers,” spanning three out of the nine studies, were not robust to the order change.

**Table 3 Response distributions of the original sample, Many Labs 2 sample, our original-order GPT sample, and our reverse-order GPT sample for the ten considered “correct answers”. Here, GPT runs’ political orientations were categorised into “liberal,” “moderate,” and “conservative” so as to match the categories of Graham et al. ([2009](https://link.springer.com/article/10.3758/s13428-023-02307-x#ref-CR14 "Graham, J., Haidt, J., & Nosek, B. A. (2009). Liberals and conservatives rely on different sets of moral foundations. Journal of Personality and Social Psychology, 96(5), 1029–1046. 
                  https://doi.org/10.1037/a0015141
                  
                "))**

[Full size table](https://link.springer.com/article/10.3758/s13428-023-02307-x/tables/3)

For the study of Rottenstreich and Hsee ([2001](https://link.springer.com/article/10.3758/s13428-023-02307-x#ref-CR53 "Rottenstreich, Y., & Hsee, C. K. (2001). Money, kisses, and electric shocks: On the affective psychology of risk. Psychological Science, 12(3), 185–190. 
                  https://doi.org/10.1111/1467-9280.00334
                  
                ")), we presented the option of a favourite movie star’s kiss after rather than before the option of cash. For the condition in which outcomes were awarded with certainty, the same number of runs was surveyed (*N* = 520), and the changed order of answer choices did not have an effect on GPT runs’ responses. Just like for the original- order condition, 100% of GPT runs preferred the movie star’s kiss in the reversed-order condition. For the condition in which outcomes were awarded with 1% probability, the same number of runs was surveyed (*N* = 520), but the new order substantially changed the original finding that 100% of GPT runs preferred the movie star’s kiss. In the reversed-order condition, 54% of the runs (total of 281) retained the original preference of the kiss, while 46% of them (total of 239 runs) preferred the cash. This order effect (Hohensinn & Baghaei, [2017](https://link.springer.com/article/10.3758/s13428-023-02307-x#ref-CR21 "Hohensinn, C., & Baghaei, P. (2017). Does the position of response options in multiple-choice tests matter? Psicológica, 38(1), 93.")) was much larger than ones that are typically seen in human subjects.

We also tested whether the two “correct answers” we observed for the study of Knobe ([2003](https://link.springer.com/article/10.3758/s13428-023-02307-x#ref-CR31 "Knobe, J. (2003). Intentional action and side effects in ordinary language. Analysis, 63, 190–193. 
                  https://doi.org/10.1111/1467-8284.00419
                  
                ")) were robust to order changes. One of the two “correct answers” did not replicate. In the question probing how much praise the board chairman deserves in the positive-side-effect condition, we presented the answer choices in reverse order, from ‘A Lot of Praise’ to ‘No Praise’ (*N* = 520). This resulted in only 3.5% of surveyed GPT runs giving the original “correct answer” of ‘A Lot of Praise’ (a total of just 18 runs), 0.2% of GPT runs answering with the second-highest level of praise (a total of just one GPT run), and the remaining 96.3% of GPT runs answering with ‘No Praise’ (a total of 501 runs).

Finally, for the Moral Foundations Theory survey of Graham et al. ([2009](https://link.springer.com/article/10.3758/s13428-023-02307-x#ref-CR14 "Graham, J., Haidt, J., & Nosek, B. A. (2009). Liberals and conservatives rely on different sets of moral foundations. Journal of Personality and Social Psychology, 96(5), 1029–1046. 
                  https://doi.org/10.1037/a0015141
                  
                ")), we presented the options for self-reported political orientation in the order of “strongly conservative” to “strongly liberal,” in contrast to the original order that ran in the other direction. The same number of runs were surveyed (*N* = 1030). The changed order of answer choices resulted in 99.3% of GPT runs self-identifying as “strongly liberal” (total of 1023), in contrast to the 99.6% in the original condition self-identifying as “strongly conservative.” In both conditions, GPT-3.5 almost always self-identified as the political orientation given by the last presented choice.

Additionally, we conducted a second exploratory follow-up study for the trolley dilemma – where participants were asked whether they would push a large man onto the tracks to save five others (Hauser et al. [2007](https://link.springer.com/article/10.3758/s13428-023-02307-x#ref-CR19 "Hauser, M., Cushman, F., Young, L., Kang-Xing Jin, R., & Mikhail, J. (2007). A dissociation between moral judgments and justifications. Mind & Language, 22(1), 1–21 
                  https://psycnet.apa.org/doi/10.1111/j.1468-0017.2006.00297.x
                  
                ")) – in which we varied the demographic characteristics with which the LLM was prompted. This study aimed to test whether the lack of variation in some responses may be explained by a lack of demographic variation in the runs. For more information on the methods of this follow-up, see the Supplementary Information. In the study, we found that the “correct answer” effect persisted even when prompting the LLM to respond as a person with a random combination of demographic characteristics, such as a Black 50-year-old Christian woman who has an advanced degree. Specifically, we replicated the “correct answer” effect of our original run, with 100% of GPT-3.5 runs (*N* = 982) indicating that it would be morally impermissible to shove a large man in front of a trolley. This suggests that at least some of the “correct answer” effects are not only insensitive to order effects, but are also insensitive to demographic variation in the prompt. This suggests that the “correct answer” effect may be relatively robust, and thus may surface in situations where LLM outputs may be used to supplant human decision-making.
