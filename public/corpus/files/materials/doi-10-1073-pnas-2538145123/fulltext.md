---
id: doi-10-1073-pnas-2538145123-text
type: material
work_id: doi-10-1073-pnas-2538145123
title: Evaluating the statistical realism of LLM-generated social science data
source_url: https://www.ebi.ac.uk/europepmc/webservices/rest/PMC13167774/fullTextXML
retrieved_at: '2026-10-27'
conversion: publisher_deposited_jats_xml_to_markdown
quality_note: Депонированный полный JATS XML. Текст, разделы, таблицы и библиография
  преобразованы в MD; рисунки открываются в оригинале.
language: original
sha256_text: c82e4b19f2e7185f23a7c17e27fe07f55501bbab5a1eefbaafde6f5da9d3f4a3
---

> Оригинал: [PMC13167774](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/). Депонированный полный JATS XML. Текст, разделы, таблицы и библиография преобразованы в MD; рисунки открываются в оригинале.

2pnasProceedings of the National Academy of Sciences of the United States of AmericaProc Natl Acad Sci U S ANational Academy of SciencesPMC1316777413167774131677744210199310.1073/pnas.2538145123Evaluating the statistical realism of LLM-generated social science dataXieYueqi[a](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#aff1)LiangLemeng[b](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#aff2)LiShuzhen[c](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#aff3)LuYifu[c](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#aff3)XiaoZhiwen[d](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#aff4)ShiMengdi[d](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#aff4)HuangJunming[a](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#aff1)WangMengdi[c](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#aff3)XieYu[a](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#aff1)[b](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#aff2)[d](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#aff4)[1](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#cor1)aPaul and Marcia Center on Contemporary China, Princeton University, Princeton, NJ
08540bDepartment of Sociology, Princeton University, Princeton, NJ
08540cDepartment of Electrical & Computer Engineering, Princeton University, Princeton, NJ
08540dCenter for Social Research, Guanghua School of Management, Peking University, Beijing
100871, China1

To whom correspondence may be addressed. Email: yuxie@princeton.edu.

Contributed by Yu Xie; received December 31, 2025; accepted April 8, 2026; reviewed by David B. Grusky and Michael Hout

85202612319e2538145123e25381451231452026Copyright © 2026 the Author(s). Published by PNAS.This open access article is distributed under [Creative Commons Attribution-NonCommercial-NoDerivatives License 4.0 (CC BY-NC-ND)](https://creativecommons.org/licenses/by-nc-nd/4.0/).cloudpmc-path eabf/13167774/19ed08cbd5b9/pnas.202538145.pdf?cloudpmc-bucket app?size 14069139?Significance

Large language models (LLMs) enable the generation of data that could potentially be analyzed for social research. While the need for assessing the validity of such AI-generated data is widely recognized, we do not yet have a coherent framework for assessment. This work introduces SSDataBench, a systematic benchmark of population-level statistical realism in LLM-generated social science data. By evaluating 15 LLMs in generating data across five types of statistical patterns against real data from four longitudinal and three cross-sectional social science surveys, we quantify how well LLM-generated data reproduce key statistical moments in actual surveys and reveal representational limitations in current LLMs under sparse conditioning settings. We further provide preliminary evidence that domain-specific training can significantly improve population-level statistical realism.

Keywords: society simulation, large language models, evaluation and benchmark, AI for social science

Abstract

Large language models (LLMs) hold great promise for generating social science data, potentially expanding the methodological toolkit of quantitative social research. Prior studies have primarily focused on individual-level predictability or behavioral plausibility of LLM-generated data. We propose a framework for assessing the validity of LLM-generated data by returning to the foundational principles of survey research in the social sciences. Just as surveys based on representative samples yield statistics that approximate the corresponding statistical moments of the target population, assessment should center on the ability of LLM-generated data to reproduce real-world, population-level statistical patterns. We introduce SSDataBench, a systematic benchmark designed to evaluate population-level statistical realism in LLM-generated social science data. The benchmark assesses five types of statistical patterns central to social research: univariate distributions, bivariate associations, multivariate outcome predictions, life event sequence distributions, and associations between life event sequences and covariates. We illustrate SSDataBench using four longitudinal datasets and three cross-sectional datasets spanning six major social domains: demographics, socioeconomic status, marriage, health, abilities, and attitudes. Our study reveals representational limitations in current LLMs under sparse conditioning settings, manifested in a pronounced tendency to compress real-world heterogeneity into simplified typological structures. Finally, we outline a roadmap toward improved statistical realism and report preliminary results indicating that domain-specific training can enhance population-level realism.

statusreleaseddisplay-pdfyesis-olfnois-manuscriptnois-preprintnois-journal-matternois-scannednois-retractedno

Received 2025 Dec 31; Accepted 2026 Apr 8; Issue date 2026 May 12.

In social science research, data limitations constitute one of the major obstacles to advancing research findings and causal inference, for several reasons. First, many variables of interest—such as wealth, subjective well-being, and cognitive ability—are difficult to collect and therefore are either unavailable to researchers or measured with error in surveys. Second, the limited duration of longitudinal datasets often restricts the study of long-term life-course processes ([1](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r1), [2](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r2)). Third, almost all survey data, the workhorse of social research for more than six decades at this point, suffer from missing observations due to factors such as refusal nonresponse and panel attrition, all of which can distort population-level estimates ([3](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r3)–[6](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r6)). Fourth, restricted access and confidentiality constraints, stemming from privacy concerns, proprietary ownership, or institutional barriers, further limit the scope of empirical inquiry ([7](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r7), [8](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r8)). Finally, social scientists cannot directly observe counterfactual outcomes, which are essential for identifying causal relationships ([9](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r9)). Together, these limitations have long impeded efforts to develop a comprehensive and causal understanding of life-course processes and socialdynamics.

AI offers new opportunities to tackle these challenges by generating synthetic data that are expected to resemble real human populations ([10](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r10), [11](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r11)). Early pioneering work ([12](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r12)) demonstrated that GPT-3–generated samples exhibit notable fidelity to human responses in the realm of public opinion in the United States, illustrating the potential of early LLMs. Recent advances in LLMs have made this potential even more promising, with richer background knowledge ([13](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r13), [14](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r14)), stronger reasoning abilities ([15](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r15)), and enhanced interactivity enabled by emerging agentic frameworks ([16](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r16)–[21](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r21)). These developments have laid the foundation for two main lines of research. The first focuses on predicting individual life outcomes such as fertility, education, and health ([22](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r22)–[25](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r25)), while the second develops LLM-based social agents to understand human behaviors in interactive environments ([17](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r17)–[19](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r19), [26](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r26)–[28](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r28)), including survey responses ([26](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r26), [29](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r29)), opinion polarization ([17](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r17), [19](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r19)), and group collaboration ([28](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r28)).

At the same time, a growing body of work cautions that AI-generated data may fail to represent real human populations, potentially yielding biased conclusions ([25](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r25), [30](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r30)–[34](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r34)). For example, in public opinion research, early evidence ([32](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r32)) suggests that language models often fail to fully reflect opinions representative of the general population, while more recent work ([33](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r33)) further demonstrates that modern LLMs exhibit strong, topic-dependent “machine bias” and reduced variability. This tension underscores the need for systematic evaluation: before AI-generated data can be used to support social research, we must understand what constitutes validity for such data and develop a systematic framework for evaluating it.

To do so, it is helpful to revisit the foundations of sample-based survey data, which have long underpinned modern social science. In this tradition, researchers rely on samples to represent populations that are infeasible or too costly to observe in their entirety. The value of a sample lies in its capacity to support accurate statistical inference about the target population ([35](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r35)). The focus, therefore, is not on the authenticity of individual cases but on whether a sample reproduces the statistical patterns of the population, including central tendencies, variability, and more complex multivariate relationships.

This logic differs markedly from prevailing evaluation practices for AI-generated data. Much of the existing work in this field focuses on individual-level prediction accuracy ([22](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r22), [26](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r26), [29](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r29)), asking whether a model can correctly predict a person’s survey responses or life trajectory. Although such individual-level accuracy metrics are often the default standard for evaluating AI systems in general, their usefulness is limited for social science, where validity is instead assessed using statistical moments at the population level.

Social sciences are best understood as population sciences instead of exact sciences ([36](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r36)). According to Neyman, populations are “categories of entities satisfying certain definitions but varying in their individual properties” ([37](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r37)). Due to population variability, social phenomena are inherently heterogeneous and uncertain ([38](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r38)). Even with rich background information, researchers rarely achieve precise predictions for individual outcomes ([24](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r24)). Consequently, strong individual-level predictive performance should not be regarded as the central criterion of validity.

Instead, consistent with long-standing survey standards, AI-generated data should be evaluated by how well they reproduce population-level statistical patterns—the distributions, associations, and structural relationships that characterize real social systems. In fact, statistically based criteria have already informed core methodological practices in social science: missing-data imputations aim to preserve the statistical moments of the observed data ([39](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r39)), and confidentiality protections perturb or swap records while ensuring that key statistical properties remain intact ([40](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r40), [41](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r41)).

In this article, we present SocialScienceDataBench (SSDataBench), a systematic benchmark for evaluating the population-level statistical realism of LLM-generated social science data. We develop a structured evaluation framework that targets five fundamental types of statistical patterns in social science: univariate distributions, bivariate associations, multivariate outcome predictions, life event sequence distributions, and associations between life event sequences and covariates. For each type, we design corresponding statistical tests to assess whether LLM-generated data differ significantly from real-world data. Here, we emphasize the importance of incorporating longitudinal data and the final two types of statistical patterns that characterize life-course pathways ([42](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r42)). Human lives evolve through path-dependent processes, whereby early-life conditions and events, even when they occur randomly, causally shape later trajectories. Therefore, evaluating synthetic social science data requires moving beyond static assessments of marginal distributions or associations to assess whether dynamic and temporally ordered dependencies central to life-course research and causal inference are preserved.

To illustrate assessments using SSDataBench, we process multiple widely used large-scale social science datasets, including four longitudinal and three cross-sectional surveys, spanning variables across six major social domains: demographics, socioeconomic status (SES), marriage, health, abilities, and attitudes. For simplicity, we assume no sampling and measurement biases in the selected surveys so that the survey data truly represent the underlying populations. We prompt 15 state-of-the-art LLMs to generate synthetic individuals conditioned on real, predetermined demographic variables as well as historical and regional contexts. We then systematically compare the LLM-generated data with corresponding real-world data to quantify population-level statistical realism.

Our results show that current LLMs fall short of reproducing real-world population statistics under sparse conditioning settings. Rather than reflecting empirical heterogeneity, they default to typological reasoning that compresses variation into overly typical patterns. This typological tendency manifests in three ways. First, univariate distributions collapse toward typical profiles, failing to capture the full range of heterogeneity present in real data. Second, bivariate associations and the predictive power of regression models are systematically exaggerated, yielding relationships that are stronger than those observed in real data. Third, LLMs struggle to represent life-course dependencies, as evidenced by their inability to reproduce real-world distributions of life event sequences and to capture associations between these sequences and covariates.

Importantly, these limitations do not diminish as model capacity improves over time: performance does not track capacity benchmarks ([43](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r43)–[46](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r46)), and newer models within the same family show no consistent improvement. This pattern suggests a structural challenge that remains unaddressed in current LLMs. On one hand, at the model level, advances in LLMs are primarily guided by case-wise prediction accuracy objectives. Distribution across numerous cases in a population is not explicitly addressed, and accuracy-oriented objectives may even amplify the typological tendency. On the other hand, at the data level, although vast amounts of rich social science data exist, they are stored and distributed in quantitative or tabular formats rather than natural language, making it difficult for existing LLMs to internalize and represent them. Taken together, these findings highlight that improving statistical realism requires targeted approaches rather than general scaling. We therefore outline a roadmap toward improved statistical realism, including richer input, qualitative contextual conditioning, and domain-specific training, and report preliminary results suggesting that domain-specific training can enhance population-level realism.

## Benchmark

### Design Principles.

Our benchmark is built on four design principles to establish a conceptually grounded and empirically comprehensive testbed for assessing the population-level statistical realism of LLM-based social simulations.

#### Population-level focus.

Rather than individual-level accuracy, SSDataBench focuses on population-level statistical realism, the key criterion for determining whether AI-generated data are valid for social science research.

#### Core statistical patterns coverage.

SSDataBench evaluates LLM-generated data across five types of statistical patterns that are essential for assessing population-level realism: univariate distributions, bivariate associations, multivariate outcome predictions, life event sequence distributions, and associations between event sequences and covariates.

#### Broad domain scope.

We use SSDataBench to evaluate LLM-generated data against three cross-sectional and four longitudinal datasets, spanning six key domains: demographics, socioeconomic status (SES), marriage, health, abilities, and attitudes.

#### Significance-test-based statistical evaluation.

SSDataBench quantifies population-level realism through statistical significance testing between generated and real data, providing a rigorous and interpretable evaluation framework.

### Overall Pipeline.

[Fig. 1A](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#fig01) presents the overall SSDataBench pipeline, which consists of three stages: data preparation, simulation generation, and evaluation. Here, we outline the core steps and conceptual framework of each stage, while detailed procedures and implementation specifics are provided in Materials and Methods.

disp-level 3?Fig. 1.Overview of the SSDataBench pipeline and evaluation framework. (A) Benchmark overview. The pipeline consists of three stages: data preparation, simulation generation, and evaluation. (B) Evaluation on five types of core social statistical patterns. Each type includes corresponding examples and significance tests used to determine whether statistical patterns in simulated data significantly differ from real data.

[[Иллюстрация pnas.2538145123fig01.jpg: см. оригинал]](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/)[[Иллюстрация pnas.2538145123fig01.gif: см. оригинал]](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/)

#### Data preparation.

We construct a comprehensive database that integrates four longitudinal and three cross-sectional datasets spanning diverse social contexts. For each dataset, we first extract the historical and regional context that characterizes the study population. For example, the historical and regional context for the National Longitudinal Survey of Youth (NLSY) sample ([47](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r47)) is the “population of youth aged 14 to 21 as of December 31, 1978 (that is, born between 1957 and 1964), residing in the United States on January 1, 1979.”

We then select key variables across the six domains of demographics, SES, marriage, health, abilities, and attitudes. Among these, demographic variables (e.g., Gender, Race, Immigrant Status) serve as background variables in our benchmark, while the remaining domains define the target variables whose values are generated during the simulation stage. Within the target variables, we distinguish between time-invariant and time-variant variables. Cross-sectional datasets contain only time-invariant variables because they capture individuals at a single point in time. One major feature of longitudinal data is the presence of time-variant variables. For example, Marital Status changes over time and represents a person’s marital history. During the evaluation stage, we also process derived variables as summaries of component variables, such as Age at First Marriage and Mean Income in Ages 30–40.

To be consistent with LLM-generated data, we convert numerically coded categorical variables in the survey data into natural-language categories (e.g., converting a gender code of 0/1 into “male”/“female”). We also retain textual descriptions of all variables from survey instruments, including response ranges.

The historical and regional context, background variables, and target variable descriptions are all incorporated into the prompts used for simulation. Background variables are taken from actual data on a one-to-one basis. For time-varying variables in longitudinal data, we generate later values after obtaining and conditioning on earlier values, conforming to path dependency principles well understood in social science. All variables, both background variables and target variables, are used in the evaluation stage.

#### Simulation generation.

For each dataset, we randomly sample 1,000 cases and then construct synthetic data by simulating each survey respondent individually. We fix the sample size at 1,000 to ensure that our assessment results are not affected by differences in sample size across datasets. We construct a prompt that incorporates the historical and regional context, the actual individual’s background variables, and descriptions of the target variables. Using this structured information, we prompt 15 LLMs to generate “digital twins” corresponding to the observed survey respondents, each with simulated responses to the target variables. We then extract the target variables from the generated output and aggregate the digital twins to form a synthetic dataset for each LLM. These synthetic datasets are then compared with the corresponding real data through statistical evaluation.

#### Evaluation.

As [Fig. 1B](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#fig01) shows, we design a procedure that evaluates five types of core statistical patterns for social research. For simplicity, the evaluation of longitudinal datasets focuses on time-invariant variables and derived variables that summarize life trajectories.

Type 1 evaluates the univariate distributions of all target variables. Type 2 examines bivariate associations between pairs of variables, excluding pairs composed only of background variables. Type 3 assesses multivariate outcome prediction by using Gender, Race, Highest Education (and Age for cross-sectional datasets) as covariates, with all numerical target variables treated as outcomes. For longitudinal datasets, we further evaluate two additional types. Type 4 evaluates the distributions of life event sequences using all three combinations of derived life event ages. Type 5 assesses the associations between life event sequences with all other variables as covariates.

For each evaluation, we test whether the statistic of interest computed from the simulated data significantly differs from that derived from the real data. For robustness, we employ a bootstrap resampling procedure and calculate, through iterations, a pass rate, where a pass indicates that the simulated and real data are not significantly different at the 0.05 level in the iteration. A higher pass rate signifies that the simulation more faithfully reproduces real-world social-statistical patterns, reflecting stronger population-level realism. Detailed tests for each type of statistical pattern and variable category are described in Materials and Methods.

## Results

### Overall Performance.

[Fig. 2](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#fig02) summarizes model performance by reporting average pass rates across datasets, statistical pattern types, and LLMs. These pass rates indicate the likelihood that the samples generated by each model are statistically indistinguishable from the real data. Overall, pass rates are low across datasets, pattern types, and most models, typically below 0.5, indicating substantial limitations in the ability of current LLMs to simulate human populations in ways that faithfully reproduce real-world statistical patterns under the evaluated setting.

disp-level 3?Fig. 2.Average pass rate across models, datasets, and statistical pattern types. The heatmap reports the average pass rate for every combination of model, dataset, and statistical pattern type. Rows correspond to LLMs, and columns correspond to dataset–type combinations. Darker shading indicates higher pass rates. The average performance of each model across all dataset–type combinations is shown in parentheses next to the model name.

[[Иллюстрация pnas.2538145123fig02.jpg: см. оригинал]](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/)[[Иллюстрация pnas.2538145123fig02.gif: см. оригинал]](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/)

Several additional key findings emerge from these results. First, distributional properties are difficult to reproduce. Type 1 and Type 4 yield the lowest pass rates across datasets and models. These evaluation tests assess whether the distributions of univariate variables or life event sequences in simulated data differ significantly from those in the real data. This difficulty is especially pronounced for Type 4, which evaluates the distributions of life event sequences: the near-zero pass rates indicate that current LLMs are unable to capture heterogeneous life-course dynamics and path dependencies.

Second, associations are comparatively easier for LLMs to capture. Type 2, Type 3, and Type 5 show substantially higher pass rates relative to the distributional tests. Type 2 evaluates bivariate associations, Type 3 evaluates multivariate predictive power, and Type 5 assesses associations between life event sequences and covariates. Together, these results suggest that although LLMs struggle to reproduce the full distributions of variables, they are more capable of approximating relational structures between variables.

Third, there is substantial variation across LLMs in population-level realism, yet these differences do not correspond to their performance on capacity-related benchmark rankings ([43](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r43)–[46](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r46)). Notably, newer model generations (e.g., from GPT-3.5-Turbo to GPT-5) show no clear or consistent improvements on these tests. This pattern suggests that general advances in scale, reasoning, or instruction-following ability do not necessarily translate into better population-level statistical realism.

These patterns are not surprising. LLMs are trained primarily on textual data, and most social science databases are not explicitly represented in textual corpora. As a result, although LLMs may learn certain facts about human lives from text, which can help them capture some relationships, they have difficulty representing empirical distributions with statistical precision. Moreover, advances in frontier LLMs are largely driven by training objectives that optimize average performance in producing high-quality answers within a single generation, rather than ensuring distributional fidelity across multiple generations that is required to reproduce distributional properties. Consequently, improvements in general model capacity do not necessarily enhance population-level statistical realism.

The capacity of LLMs depends on their training corpora. It is therefore plausible that Chinese LLMs, trained on substantially more Chinese-language data than U.S.-based models, yield better statistical performance when simulating Chinese data such as CFPS. There is some evidence supporting this conjecture. QWEN ranks fourth overall across all benchmarks but achieves the second-best performance on CFPS, while DEEPSEEK-V3 ranks seventh overall yet performs comparatively better on CFPS (ranked sixth).

### A Closer Examination of the Five Statistical Pattern Types.

To better understand these findings, we discuss the five statistical pattern types in greater detail.

#### Collapse of univariate distributions.

We observe a substantial collapse in univariate distributions across many variables, datasets, and models. LLM-generated data tend to concentrate around “typical” values, failing to capture the dispersion of real-world distributions.

As illustrated in [Fig. 3 A and B](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#fig03), case studies on the NLSY using Gemini-2.5-Flash show clear examples of this phenomenon. For the variable Age at First Marriage, the simulated distribution is tightly concentrated between ages 17 and 26, whereas the real distribution exhibits much longer tails. A similar pattern emerges for Self-Rated Memory: While the simulated cases are heavily clustered around the category “good,” the real distribution is more dispersed across the full set of response options.

disp-level 4?Fig. 3.Case studies on NLSY using Gemini-2.5-Flash. (A) Distribution of Age at First Marriage. (B) Distribution of Self-Rated Memory. (C) Cramér’s V associations between Highest Education and other variables (x-axis). (D) Coefficient of determination (R2) values for regression models predicting various outcomes (x-axis). (E) Distributions of life event sequence of First Marriage (M), Starting Work (W), and First Childbearing (C). (F) Cramér’s V associations between life event sequence of Finishing Education (E), Starting Work (W), and First Childbearing (C) and other variables (x-axis).

[[Иллюстрация pnas.2538145123fig03.jpg: см. оригинал]](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/)[[Иллюстрация pnas.2538145123fig03.gif: см. оригинал]](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/)

To further quantify the extent of distributional collapse across models, we compute the entropy of each categorical variable for both real and simulated data across all datasets. Entropy captures the dispersion of a categorical distribution: higher values indicate greater diversity across categories, whereas lower values reflect greater concentration and reduced variability. As shown in [Fig. 4A](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#fig04), all models generate simulated data with systematically lower entropy than the real data. This pattern indicates that LLM-generated categorical distributions are more concentrated and less diverse, failing to reproduce the full heterogeneity present in real populations.

disp-level 4?Fig. 4.Distributions of statistics across statistical pattern types. Each boxplot summarizes the distribution of values across all datasets and all evaluated variables for real and simulated populations. For each dataset and evaluated variable(s), statistics are calculated directly on the full set of simulated samples and the corresponding sampled real data, without bootstrap resampling. (A) Distributions of entropy values for categorical target variables. (B) Distributions of Cramér’s V values for paired categorical variables. (C) Distributions of the coefficient of determination R2 values for regression models. (D) Distributions of entropy values for life event sequences. (E) Distributions of Cramér’s V values between life event sequence variables and other covariates.

[[Иллюстрация pnas.2538145123fig04.jpg: см. оригинал]](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/)[[Иллюстрация pnas.2538145123fig04.gif: см. оригинал]](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/)

#### Stereotypes in bivariate associations.

For bivariate associations, LLMs exhibit better pass rates than in the univariate case; however, we observe signs of stereotyped association patterns, manifested as associations between variables that are systematically stronger than those in real-world data.

[Fig. 3C](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#fig03) shows a case study on the NLSY using Gemini-2.5-Flash that provides an example of this pattern. We present Cramér’s V values for associations between Highest Education and a range of other variables. Cramér’s V measures the strength of association between two categorical variables, ranging from 0 for complete independence to 1 for complete dependence, with a higher value indicating a stronger association. In the simulated data, many variables show substantially inflated associations compared to the real population. For example, the associations between Highest Education and variables such as Gender, Occupation, and Self-Rated General Health are markedly stronger in the simulated data than in the real NLSY data.

We analyze this phenomenon across models by computing Cramér’s V between all paired categorical variables for both real and simulated data across all datasets. As [Fig. 4B](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#fig04) shows, the simulated data generally exhibit stronger associations than those observed in the real data. Beyond shifts in central tendency, the distribution of Cramér’s V values for the simulated data displays substantial clustering at high values, with many variable pairs exceeding 0.6 and some approaching 0.8 or even 1, indicating near-complete dependence. This pattern is particularly pronounced for lower-performing models. Taken together, these results suggest that associations in LLM-generated data may be driven in part by stereotyped priors embedded in the models, reflecting patterns learned from textual training data.

#### Stereotypes in multivariate prediction of outcomes.

We find that although LLMs can partially reproduce the relative strength of predictors in determining outcomes, they also exhibit signs of stereotyped patterns. Specifically, the coefficient of determination (R2) computed from simulated data is often substantially higher than that from real data. The R2 statistic measures the proportion of variance in an outcome that is explained by the predictors; higher values indicate stronger predictive relationships.

A case study on the NLSY using Gemini-2.5-Flash illustrates this pattern. [Fig. 3D](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#fig03) reports the coefficients of determination (R2) for regression models predicting a range of outcomes using both real and simulated data. Across outcomes, models fitted to simulated data generally have substantially higher R2 values than those fitted to the real data. For example, when predicting Mean Income (Age 30–40) (log-transformed), the regression model fitted to simulated data has an R2 value approaching 0.6, indicating that more than 60% of the variance in logged income is explained by the predictors (Race, Gender, and Highest Education). In contrast, the R2 value is less than 0.1 in the corresponding model applied to the real-world data. This discrepancy suggests that the simulated data substantially overstate the ability to predict income on the basis of a limited set of sociodemographic characteristics.

[Fig. 4C](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#fig04) shows the R2 values for all regression models estimated on both real and simulated data across all datasets. On average, the simulated data exhibit higher predictive determination, with many R2 values exceeding 0.8. This tendency is more pronounced in lower-performing models. These results suggest that LLM-generated outcomes may reflect overly strong, stereotyped relationships between covariates and outcomes relative to the more nuanced patterns observed in real populations.

#### Collapse of life event sequence distributions.

Type 4 (life event sequence distributions) exhibits the lowest pass rates among all pattern types. We observe a severe collapse toward a small number of typical pathways, with substantially reduced diversity compared to real populations.

As [Fig. 3E](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#fig03) shows, the simulated data are concentrated in the sequence “Starting Work, then First Marriage, then First Childbearing,” whereas much greater heterogeneity in the ordering of these life events is present in the real data. To quantify this collapse, we compute the entropy of life event sequences for both real and simulated data across all datasets. [Fig. 4D](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#fig04) shows that the simulated data consistently exhibit markedly lower entropy than the real data, indicating that LLM-generated sequences cluster around a narrow subset of trajectories and thus fail to reproduce the variability present in real populations.

#### Difficulty capturing the association structure of life event sequences.

Compared with pairwise associations between variables (Type 2), associations between life event sequences and covariates (Type 5) do not show the same degree of systematic inflation in LLM-simulated data relative to real data, as shown in [Fig. 4](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#fig04). Nevertheless, distortions remain evident: the distribution of Cramér’s V values in the simulated data still contains a substantial number of associations exceeding 0.5, whereas such strong dependencies are largely absent in the real data.

[Fig. 3F](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#fig03) presents an example in which the associations, measured by Cramér’s V, between the life event sequences involving First Marriage, Starting Work, and First Childbearing and other variables are not consistently higher than those in the real data, yet still deviate substantially from the real association patterns. The simulated data fail to capture key relationships, including variation in the ordering of these life events across Gender, Highest Education, and Immigrant Status. These results indicate that LLMs struggle to accurately model the association structure of life event sequences.

We present additional case studies, illustrating similar patterns to those discussed above, in [SI Appendix, Figs. S3–S6](https://www.pnas.org/doi/10.1073/pnas.2538145123#supplementary-materials). In addition, we studied the effect of varying temperature parameters in LLMs and report the results on model performance in [SI Appendix, Fig. S1](https://www.pnas.org/doi/10.1073/pnas.2538145123#supplementary-materials).

We do not find a consistent relationship between temperature and statistical realism: neither higher nor lower temperatures reliably improve population-level statistical realism. While higher temperatures tend to increase output diversity and mitigate collapse, this additional variability does not necessarily translate into better representation of empirical distributions.

## Roadmap Toward Better Statistical Realism

In this paper, we have evaluated the usefulness of data generated under a sparse, survey-style conditioning regime, in which only a limited set of demographic variables is provided as input. Within this constrained setting, we observe substantial representational gaps in LLM-generated data. In this section, we propose and discuss possible pathways for improving the statistical realism of LLM-based population simulation.

### Richer Input.

In our evaluation, demographic variables are used in input prompts, while variables from all other domains are treated as target variables to be generated during the simulation stage. We know from our earlier work that richer input can improve output statistical realism ([31](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r31)). To demonstrate this, we performed an auxiliary analysis. Holding the benchmark and evaluation procedure fixed, we removed Gender and Race as input, and tested GPT-4O, GEMINI-2.5-FLASH, and LLAMA-3.1 on Add Health and the U.S. Census data. As shown in [SI Appendix, Fig. S2](https://www.pnas.org/doi/10.1073/pnas.2538145123#supplementary-materials), the results reveal that statistical realism generally deteriorates under more limited conditioning, suggesting that richer input context is a promising pathway for improvement.

### Qualitative Contextual Conditioning.

As discussed in the American Voices Project ([48](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r48)), qualitative data capture aspects of lived experience and social context that quantitative surveys often cannot easily measure. Such narrative-rich input may provide substantially deeper grounding for population simulation and digital-twin construction. Importantly, this is also where LLMs may offer a unique advantage, as they are naturally suited to incorporating unstructured qualitative information into generative modeling ([49](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r49)). As suggested by the prior research ([26](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r26)), incorporating qualitative interviews can improve the behavioral coherence of digital twins. Qualitative contextual conditioning, therefore, represents another promising pathway toward better statistical realism of AI-generated social science data.

### Domain-Specific Training.

Prior work ([11](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r11)) called for fine-tuning of models on domain-specific social science data.

To investigate whether training on existing quantitative social science microdata can improve population-level statistical realism, we conduct a preliminary domain-adaptation experiment. To test generalizability, the training data are drawn from a social context that is different from the evaluation settings. Specifically, we fine-tune LLAMA-3.1 (8B) on 1,000 sample members from CPS-ASEC (1970), and evaluate performance on three held-out datasets in our evaluation suite: CPS-ASEC (1980), U.S. Census (1980), and GSS (2018). This design enables us to examine generalizability across both social contexts and datasets. Evaluation on CPS-ASEC (1980) reflects a within-dataset but cross-context transfer setting, whereas evaluation on U.S. Census (1980) and GSS (2018) further tests cross-dataset and cross-context transfer. Training details are described in Materials and Methods.

As shown in [Table 1](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#t01), domain-specific training consistently improves statistical realism across all evaluation settings, with the largest gains observed in the within-dataset but cross-context transfer case. Although these experiments are preliminary, the results suggest that continued training on quantitative survey data may substantially enhance population-level realism and may help improve extrapolation to previously unobserved social contexts and data structures.

disp-level 3?Table 1.Performance comparison of LLAMA-3.1 (8B) with and without domain-specific fine-tuning on CPS-ASEC (1970) across three datasets, measured by the average pass rate across all types of statistical patterns under the proposed benchmark

| Model | CPS-ASEC  (1980) | U.S. Census  (1980) | GSS  (2018) |
| --- | --- | --- | --- |
| w/o fine-tuning |  |  |  |
| on CPS-ASEC (1970) | 0.258 | 0.270 | 0.325 |
| w/ fine-tuning |  |  |  |
| on CPS-ASEC (1970) | 0.534 | 0.442 | 0.402 |

## Conclusion and Discussion

AI-generated social science data remain highly controversial. Despite some recent promotion of the promise of LLMs for generating synthetic data useful for social research ([12](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r12)), concerns persist as to whether such simulations meaningfully reflect real social phenomena ([30](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r30)). Before AI-generated data can be used for social inquiry, it is therefore essential to rigorously evaluate their validity.

We argue that, just as the usefulness of sample-based survey data depends on their ability to reveal the statistical patterns of the real population ([35](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r35)), the validity of AI-generated synthetic data should likewise be evaluated in terms of their population-level statistical realism. Instead of focusing on individual-level predictive accuracy, assessments of AI-generated data should examine whether they reproduce statistical moments at the population-level, such as distributions, associations, and structural relationships that underpin population inference in social science.

In this article, we present a systematic benchmark, SSDataBench, designed to assess whether LLM-generated data can reproduce key statistical patterns observed in real human populations. The framework evaluates five types of statistical patterns that are fundamental to social science research: univariate distributions, bivariate associations, multivariate outcome predictions, life event sequence distributions, and associations between life event sequences and covariates. We apply the benchmark framework to three cross-sectional and four longitudinal survey datasets across six major social domains using 15 LLMs. Together, these evaluations constitute a comprehensive testbed for assessing population-level statistical realism in LLM-generated social science data and provide insights into current limitations.

Our results reveal several limitations of current LLMs under the evaluated setting, as they tend to generate data that accentuate typological patterns that are less true in empirical data. Specifically, LLMs struggle to reproduce real-world distributions, often collapsing toward overly typical values and failing to capture real-world heterogeneity. Second, although bivariate associations and multivariate predictions are reproduced more accurately, the models often draw on stereotyped priors, leading to associations that are frequently exaggerated. Finally, life event sequences exhibit a pronounced collapse toward normative pathways, and their association structures with other variables are misaligned with those in observed data. In short, there is a typological tendency in LLM-generated data.

Despite these limitations of current LLMs under our evaluated setting, we outline several promising pathways toward improved statistical realism in future work. First, we show that richer input generally leads to better statistical realism in target variables. Second, we acknowledge the unique value of qualitative data in providing higher-dimensional information beyond structured survey-style variables and thus helping enhance simulation statistical realism. Finally, we present a preliminary exploration of domain-specific training with quantitative survey data, showing that targeted adaptation can meaningfully enhance statistical realism in social contexts and data structures beyond the training setting. These findings highlight the potential of domain-specific training to improve the realism of LLM-based social science data simulations.

We recognize several limitations in our benchmark work. First, the reported pass rates inevitably involve several necessarily subjective decisions. These include the choice of the bootstrap sample size, summary statistics, the specific statistical tests and their corresponding parameterizations, and the conventional significance threshold of 0.05. In this sense, the pass rates should be interpreted comparatively rather than absolutely. For example, the relative performance patterns remain meaningful and fair across models, because all models are evaluated using the same set of statistics, tests, and thresholds. In addition, our case studies present descriptive results that complement the hypothesis testing approach. We also report the distributions of relevant statistics to provide further insight into how simulated data differ from real data beyond binary pass-fail outcomes. Moreover, our benchmark is fully configurable. Users can flexibly adjust the choice of statistics, sample sizes, tests, and significance thresholds to suit their own research objectives and assumptions.

Second, in this work, we primarily evaluate LLMs under a sparse-conditioning setting, where models are asked to simulate population-level responses based solely on a limited set of demographic variables, with the target variables entirely unobserved. Under this formulation, many traditional imputation methods are not directly applicable, since they typically assume at least partial observability of the target variables. Benchmarking LLM-based simulation against state-of-the-art imputation methods in scenarios where some outcomes are partially observed remains an important avenue for future research.

Third, while we use established large-scale surveys as the best available empirical baseline for evaluating population-level statistical realism, we acknowledge that they do not constitute a perfect “ground truth,” given common problems associated with survey research, including sample coverage bias, nonresponse bias, attrition bias, interviewer bias, social desirability bias, recall error, and measurement error. We further identify as an important open direction for future work the questions of whether, and under what conditions, AI models can extrapolate to hard-to-survey or underrepresented populations, as discussed in prior work ([10](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r10)).

Furthermore, our preliminary experiments suggest that fine-tuning LLMs on survey data substantially improves statistical realism. Yet, we do not know if and which LLMs in our evaluation have already benefited from existing survey data. However, original survey data typically exist only in coded formats, where the numerical values themselves carry no inherent semantic meaning, and without domain-specific variable mappings such as those used in our benchmark, they are not readily useful for LLMs. The evaluation pipeline we introduce is generalizable. Researchers and institutions can adapt this benchmark to assess whether synthetic data they generate meet the standards of population-level realism required for empirical research.

Looking ahead, we hope that future developments in LLM-based social simulation will explicitly integrate the measurement and preservation of population-level statistical patterns, ensuring that synthetic populations reflect the empirical statistical realism required for rigorous social science research.

If, after proper training, AI-generated data can be used for social research, they hold particular promise for causal inference. As Holland pointed out four decades ago, the Fundamental Problem of Causal Inference in social science is the impossibility to observe the values of outcomes associated simultaneously with treated and control conditions ([50](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r50)). If we can generate data with AI, it may be possible to generate outcomes associated with different counterfactual treatment conditions, thus overcoming the Fundamental Problem. We await future work to verify this conjecture.

## Materials and Methods

This section describes the datasets and variables used in our benchmark, the simulation procedure for generating synthetic data, and the statistical metrics employed to evaluate population-level realism.

### Datasets and Variables.

Our benchmark integrates a diverse collection of widely used large-scale survey datasets. In total, we incorporate three cross-sectional datasets and four longitudinal panel datasets drawn from major social science sources such as national surveys, administrative records, and long-running cohort studies. These datasets span six key domains (demographics, SES, marriage, health, abilities, and attitudes), measuring a broad range of social outcomes, social processes, and life-course trajectories in three countries: the United States, China, and the United Kingdom. Each dataset is processed to include its historical and regional context, textual descriptions of all selected variables, and the set of response options. In addition, all variables and their options are mapped into LLM-interpretable forms using semantically meaningful textual or numerical representations. A summary of the datasets included in the benchmark, including dataset type, domain coverage, and historical and regional context, is provided in [SI Appendix, Table S1](https://www.pnas.org/doi/10.1073/pnas.2538145123#supplementary-materials). The selected variables used in each dataset, along with their type, temporality, domain, and description, are detailed in [SI Appendix, Tables S2–S8](https://www.pnas.org/doi/10.1073/pnas.2538145123#supplementary-materials). Below, we offer a brief introduction to each dataset:

NLSY ([47](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r47)): The National Longitudinal Surveys (NLS), sponsored by the U.S. Bureau of Labor Statistics (BLS), track fixed U.S. cohorts over time to document their major life events and transitions. They use a multistage, stratified probability sampling design. Our study draws on the National Longitudinal Survey of Youth 1979 (NLSY79) cohort, which is a nationally representative sample of youth aged 14 to 21 as of December 31, 1978. Data were collected annually from 1979 to 1994 and biennially thereafter.

CFPS ([51](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r51)): The China Family Panel Studies (CFPS) is a biennial longitudinal survey conducted by the Institute of Social Science Survey (ISSS) of Peking University. It uses a multistage probability sampling strategy to construct a nationally representative sample of people of all ages residing in China. It provides data on contemporary Chinese individuals, families, and communities. Our study uses seven waves of CFPS data from 2010 to 2022.

Add Health ([52](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r52)): The National Longitudinal Study of Adolescent to Adult Health (Add Health), launched by the Carolina Population Center at the University of North Carolina at Chapel Hill, tracks a nationally representative cohort of U.S. adolescents enrolled in grades 7 to 12 during the 1994–95 school year. It employs a multistage, school-based probability sampling design. In this study, we draw on five waves of data, which provide both contextual information on participants’ schools and neighborhoods and detailed physical and biological measures.

Understanding Society ([53](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r53)): The UK Household Longitudinal Study-Understanding Society, launched by the Institute for Social and Economic Research (ISER) at the University of Essex, has followed individuals and households in the United Kingdom since 2009. It is a nationally representative study of all ages: respondents aged 16 and over complete the adult survey, information on children aged 0 to 9 is collected from a parent or responsible adult, and young people aged 10 to 15 complete a youth questionnaire.

U.S. Census ([54](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r54)): The U.S. Census, conducted by the Census Bureau, collected cross-sectional decennial data from 1790 to 2010, supplemented by the American Community Survey (ACS) from 2000 to the present. It uses a stratified random sampling design to construct a nationally representative sample of all age groups in the United States, with minority groups oversampled in some samples. Integrated Public Use Microdata Series USA (IPUMS USA), hosted at the University of Minnesota, provides a harmonized version of the Census and ACS microdata. In this study, we use data from the 5% sample of the 1980 census accessed from IPUMS USA.

CPS-ASEC ([55](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r55)): The Current Population Survey (CPS), jointly sponsored by the U.S. Census Bureau and the BLS, serves as the primary source of labor-force statistics in the U.S. The Annual Social and Economic Supplement (ASEC) is an annual supplement to the CPS that provides rich cross-sectional data on respondents’ work experiences. The CPS-ASEC uses a multistage stratified sampling strategy to construct nationally representative samples of the U.S. noninstitutionalized population from 1962 to the present. In this study, we use data from the CPS-ASEC for 1980.

GSS ([56](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r56)): The General Social Survey (GSS), conducted by the National Opinion Research Center (NORC) at the University of Chicago, provides cross-sectional data on experiences, attitudes, and practices of U.S. adults aged 18 and older. It was collected annually from 1972 to 1994 using multistage area probability sampling, and biennially between 1994 and 2024 using address-based sampling. It is designed to be representative of all adults (aged 18+) in U.S. households. We use data from the 2018 GSS.

### Simulation.

We use 15 LLMs to generate synthetic data. All models are accessed through the OpenRouter API, with exact model versions documented in [SI Appendix, section 4](https://www.pnas.org/doi/10.1073/pnas.2538145123#supplementary-materials). Unless otherwise noted, we set the sampling parameters to temperature=1 and top\_p=1, with all other parameters kept at their default values. For each dataset, we begin by randomly sampling 1,000 real individuals from the dataset and using their background variables as conditioning inputs. Each model then generates one synthetic counterpart for each sampled individual, resulting in a synthetic population of 1,000 individuals per model–dataset pair. Each synthetic individual is generated using a prompt that incorporates the dataset’s historical and regional context, the background variables of the sampled individual, and descriptions of all target variables, including their allowed values, as outlined below. If a model’s output does not conform to the required JSON format, generation is retried, with a maximum of three retrials per individual.

Longitudinal Data:

|  |
| --- |
| You are simulating one \*randomly selected\* synthetic individual sampled from [  Historical and Regional Context ]  Conditioned on the following input attributes: [  Background Variables ]  Return output strictly as JSON. Do not include explanations, markdown fences, or additional keys. The JSON object must contain EXACTLY these keys: one key ‘life\_trajectory’ plus all static variables [  Target Time-invariate Variable Names ]  Rules:   1) Use ONLY the allowed options below for each field. 2) For numerical fields, use numbers within the specified range or one of the special labels. 3) For sequential variables [  Target Time-variate Variable Names ] , combine them into a single field named “life\_trajectory”. “life\_trajectory” must be a JSON object mapping each age from [  Age Range ] to a subobject that specifies all sequential variables at that age. For example, [  Life Trajectory Example ] Ensure life trajectory is aligned with static variables.  Descriptions: [  Target Variable Descriptions ]  Allowed values: [  Target Variable Allowed Values ] |

Cross-sectional Data:

|  |
| --- |
| You are simulating one \*randomly selected\* synthetic individual sampled from[Historical and Regional Context]  The data represent a cross-sectional snapshot collected in the year[Survey Year].  Conditioned on the following input attributes: [  Background Variables ]  Return output strictly as JSON. Do not include explanations, markdown fences, or additional keys. The JSON object must contain EXACTLY these keys: [  Target Variable Names ]  Rules:   1) Use ONLY the allowed options below for each field. 2) For numerical fields, use numbers within the specified range or one of the special labels.  Descriptions: [  Target Variable Descriptions ]  Allowed values: [  Target Variable Allowed Values ] |

### Training.

In this section, we describe the training details of our preliminary domain-specific training study. We fine-tune Llama-3.1 (8B) (meta-llama/Llama-3.1-8B-Instruct) using Tinker ([57](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r57)) on 1,000 randomly sampled records from the CPS-ASEC (1970) dataset, which is drawn from a social context distinct from our evaluation settings. Each training instance is processed in the same format as in our benchmark evaluation: The input prompt is configured with historical and regional context, background variables, and target-variable descriptions, while the output consists of the corresponding target survey variables serialized as a JSON response. This ensures consistency between training and evaluation prompting. We train the model for 20 epochs with a learning rate of 2×10−4, using the default LoRA ([58](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r58)) configuration in Tinker with rank r=32.

### Metrics.

For each evaluation, we assess whether the statistic of interest computed from simulated data differs significantly from that computed from real data. To ensure robustness to population size differences and sampling variability, we employ a bootstrap resampling procedure and compute a pass rate, defined as the proportion of bootstrap iterations in which the two statistics are not significantly different from each other. A higher pass rate indicates that the simulated data more closely reproduce real-world statistical patterns, reflecting stronger population-level realism.

Specifically, for each evaluation question, we perform 100 bootstrap iterations. In each iteration, we draw 500 individuals with replacement from the real dataset and the synthetic dataset, respectively. We then compute the statistic of interest for each resampled dataset and conduct a hypothesis test evaluating whether the difference between the two statistics is significant, using a threshold of P=0.05. During resampling, any observations with missing data are excluded.

The statistics used for each evaluation type and the corresponding significance tests are summarized in [Table 2](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#t02). The detailed calculations of all metrics and the corresponding test methods are provided in [SI Appendix](https://www.pnas.org/doi/10.1073/pnas.2538145123#supplementary-materials).

disp-level 3?Table 2.Significance tests and hypotheses of each statistical pattern

| Type | Variable(s) | Significance Test | Null Hypothesis (H0) | Two-sided Alternative  Hypothesis (H1) |
| --- | --- | --- | --- | --- |
| Univariate distribution | Numerical | Kolmogorov–Smirnov (K–S) test | H0:Freal(x)=Fsim(x),∀x, where F(x) denotes the empirical cumulative distribution function (ECDF). | H1:∃xsuch thatFreal(x)≠Fsim(x). |
|  | Categorical | Pearson’s chi-square (χ2) test | H0:preal(c)=psim(c),∀c, where p(c) denotes the probability of category c. | H1:∃csuch thatpreal(c)≠psim(c). |
| Bivariate association | Numerical × Numerical | Fisher’s z-test | H0:ρreal=ρsim, where ρ denotes the Pearson correlation coefficient. | H1:ρreal≠ρsim. |
|  | Categorical × Categorical | Delta-method z-test | H0:Vreal=Vsim, where V denotes Cramér’s V. | H1:Vreal≠Vsim. |
|  | Categorical × Numerical | Delta-method z-test | H0:ηreal2=ηsim2, where η2=SSbetween/SStotal. | H1:ηreal2≠ηsim2. |
| Multivariate prediction | Numerical (Outcome) | Delta-method z-test | H0:Rreal2=Rsim2, where R2 denotes the coefficient of determination. | H1:Rreal2≠Rsim2. |
| Life event sequence distribution | Categorical | Pearson’s chi-square (χ2) test | H0:preal(c)=psim(c),∀c, where p(c) denotes the probability of an event sequence c. | H1:∃csuch thatpreal(c)≠psim(c). |
| Life event sequence association | Categorical × Categorical | Delta-method z-test | H0:Vreal=Vsim, where V denotes Cramér’s V. | H1:Vreal≠Vsim. |
|  | Categorical × Numerical | Delta-method z-test | H0:ηreal2=ηsim2, where η2=SSbetween/SStotal. | H1:ηreal2≠ηsim2. |

## Supplementary Material

Appendix 01 (PDF)

cloudpmc-path eabf/13167774/af8ac1242a1e/pnas.2538145123.sapp.pdf?cloudpmc-bucket app?size 908827?

## Acknowledgments

Mengdi Wang acknowledges the support by NSF IIS-2107304.

### Author contributions

Yueqi Xie, J.H., M.W., and Yu Xie designed research; Yueqi Xie, S.L., and Y.L. performed research; Yueqi Xie, L.L., Z.X., and M.S. analyzed data; and Yueqi Xie, L.L., S.L., Y.L., Z.X., M.S., J.H., M.W., and Yu Xie wrote the paper.

### Competing interests

The authors declare no competing interest.

## Footnotes

Reviewers: D.B.G., Stanford University School of Humanities and Science; and M.H., New York University.

## Data, Materials, and Software Availability

The codes used in all experiments are publicly available at <https://github.com/lszshu/SSDataBench>. The raw datasets include NLSY ([47](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r47)), CFPS ([51](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r51)), Add Health ([52](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r52)), Understanding Society ([53](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r53)), U.S. Census ([54](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r54)), CPS-ASEC ([55](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r55)), and GSS ([56](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r56)). Processed datasets that permit public release and all data processing scripts are available on GitHub ([59](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r59)).

## Supporting Information

## References

1.Wolfe B., Haveman R., Ginther D., An C. B., The “Window Problem’’ in studies of children’s attainments: A methodological exploration. J. Am. Stat. Assoc.
91, 970–982 (1996).2.Wang M., et al. , Longitudinal research: A panel discussion on conceptual issues, research design, and statistical techniques. Work. Aging Retire.
3, 1–24 (2016).3.Fitzgerald J., Gottschalk P., Moffitt R., An analysis of sample attrition in panel data: The Michigan Panel Study of income dynamics. J. Hum. Resour.
33, 251–299 (1998).4.Gelman A., King G., Liu C., Not asked and not answered: Multiple imputation for multiple surveys. J. Am. Stat. Assoc.
93, 846–857 (2008).5.Lee K. J., Carlin J. B., Simpson J. A., Moreno-Betancur M., Assumptions and analysis planning in studies with missing data in multiple variables: Moving beyond the MCAR/MAR/MNAR classification. Int. J. Epidemiol.
52, 1268–1275 (2023).
6.Carpenter J. R., Smuk M., Missing data: A statistical framework for practice. Biom. J.
63, 915–947 (2021).
7.National Academies of Sciences, Engineering, and Medicine, “Protecting privacy and confidentiality while providing access to data for research use” in Innovations in Federal Statistics: Combining Data Sources While Protecting Privacy, B. A. Harris-Kojetin, R. M. Groves, Eds. (National Academies Press (US), 2017).8.Ruggles S., The shortcomings of synthetic census microdata. Proc. Natl. Acad. Sci. U.S.A.
122, e2424655122 (2025).
9.Imbens G. W., Causal inference in the social sciences. Annu. Rev. Stat. Appl.
11, 123–152 (2024).10.Grossmann I., et al. , AI and the transformation of social science research. Science
380, 1108–1109 (2023).
11.Bail C. A., Can generative AI improve social science?
Proc. Natl. Acad. Sci. U.S.A.
121, e2314021121 (2024).
12.Argyle L. P., et al. , Out of one, many: Using language models to simulate human samples. Polit. Anal.
31, 337–351 (2023).13.Gemini Team Google et al., Gemini: A family of highly capable multimodal models. arXiv [Preprint] (2023). 10.48550/arXiv.2312.11805. Accessed 20 December 2025.14.J. Achiam et al., GPT-4 technical report. arXiv [Preprint] (2023). 10.48550/arXiv.2303.08774. Accessed 20 December 2025.15.A. Liu et al., DeepSeek-V3 technical report. arXiv [Preprint] (2024). 10.48550/arXiv.2412.19437. Accessed 20 December 2025.16.X. Zhang et al., SocioVerse: A world model for social simulation powered by LLM agents and a pool of 10 million real-world users. arXiv [Preprint] (2025). 10.48550/arXiv.2504.10157. Accessed 20 December 2025.17.J. Piao et al., AgentSociety: Large-scale simulation of LLM-driven generative agents advances understanding of human behaviors and society. arXiv [Preprint] (2025). 10.48550/arXiv.2502.08691. Accessed 20 December 2025.18.J. S. Park et al., “Generative agents: Interactive simulacra of human behavior” in Proceedings of the 36th Annual ACM Symposium on User Interface Software and Technology (2023), pp. 1–22.19.Z. Yang et al., OASIS: Open agent social interaction simulations with one million agents. arXiv [Preprint] (2024). 10.48550/arXiv.2411.11581. Accessed 20 December 2025.20.L. Wang, H. Gao, X. Bo, X. Chen, J. R. Wen, “YuLan-OneSim: Towards the next generation of social simulator with large language models” in Workshop on Scaling Environments for Agents (2025).21.G. V. Aher, R. I. Arriaga, A. T. Kalai, “Using large language models to simulate multiple humans and replicate human subject studies” in International Conference on Machine Learning (PMLR, 2023), pp. 337–371.22.Savcisens G., et al. , Using sequences of life-events to predict human lives. Nat. Comput. Sci.
4, 43–56 (2024).
23.Vafa K., Athey S., Blei D. M., Estimating wage disparities using foundation models. Proc. Natl. Acad. Sci. U.S.A.
122, e2427298122 (2025).
24.Lundberg I., et al. , The origins of unpredictability in life outcome prediction tasks. Proc. Natl. Acad. Sci. U.S.A.
121, e2322973121 (2024).
25.Pataranutaporn P., Powdthavee N., Archiwaranguprok C., Maes P., Simulating human well-being with large language models: Systematic validation and misestimation across 64,000 individuals from 64 countries. Proc. Natl. Acad. Sci. U.S.A.
122, e2519394122 (2025).
26.J. S. Park et al., Generative agent simulations of 1,000 people. arXiv [Preprint] (2024). 10.48550/arXiv.2411.10109. Accessed 20 December 2025.27.X. Mou et al., From individual to society: A survey on social simulation driven by large language model-based agents. arXiv [Preprint] (2024). 10.48550/arXiv.2412.03563. Accessed 20 December 2025.28.Z. Wu et al., “Shall we team up: Exploring spontaneous cooperation of competing LLM agents” in Findings of the Association for Computational Linguistics: EMNLP 2024 (2024), pp. 5163–5186.29.Toubia O., et al. , Database report: Twin-2k-500: A data set for building digital twins of over 2,000 people based on their answers to over 500 questions. Mark. Sci.
44, 1446–1455 (2025).30.Wang A., Morgenstern J., Dickerson J. P., Large language models that replace human participants can harmfully misportray and flatten identity groups. Nat. Mach. Intell.
7, 400–411 (2025).31.Y. Xie, Y. Xie, Variance reduction in output from generative AI. arXiv [Preprint] (2025). 10.48550/arXiv.2503.01033. Accessed 20 December 2025.32.S. Santurkar et al., Whose opinions do language models reflect? arXiv [Preprint] (2023). 10.48550/arXiv.2303.17548.33.Boelaert J., Coavoux S., Ollion E., Petev I., Präg P., Machine bias. How do generative language models answer opinion polls?
Sociol. Methods Res.
54, 1156–1196 (2025).34.Bisbee J., Clinton J. D., Dorff C., Kenkel B., Larson J. M., Synthetic replacements for human survey data? The perils of large language models.
Polit. Anal.
32, 401–416 (2024).35.Groves R. M., et al. , Survey Methodology (John Wiley & Sons, 2011).36.Goldthorpe J. H., Sociology as a Population Science (Cambridge University Press, 2016).37.Xie Y., Otis Dudley Duncan’s legacy: The demographic approach to quantitative reasoning in social science. Res. Soc. Stratif. Mobil.
25, 141–156 (2007).38.Xie Y., Population heterogeneity and causal inference. Proc. Natl. Acad. Sci. U.S.A.
110, 6262–6268 (2013).
39.Little R. J., Rubin D. B., Statistical Analysis with Missing Data (John Wiley & Sons, 2019).40.Dalenius T., Reiss S. P., Data-swapping: A technique for disclosure control. J. Stat. Plann. Inference
6, 73–85 (1982).41.Rubin D. B., Statistical disclosure limitation. J. Off. Stat.
9, 461–468 (1993).42.Aisenbrey S., Fasang A. E., New life for old ideas: The “second wave’’ of sequence analysis bringing the “course’’ back into the life course. Sociol. Methods Res.
38, 420–462 (2010).43.L. Phan et al., Humanity’s last exam. arXiv [Preprint] (2025). 10.48550/arXiv.2501.14249. Accessed 20 December 2025.44.Wang Z., et al. , CharXiv: Charting gaps in realistic chart understanding in multimodal LLMs. Adv. Neural Inf. Process. Syst.
37, 113569–113697 (2024).45.F. Chollet, M. Knoop, G. Kamradt, B. Landers, H. Pinkard, ARC-AGI-2: A new challenge for frontier AI reasoning systems. arXiv [Preprint] (2025). 10.48550/arXiv.2505.11831. Accessed 20 December 2025.46.C. E. Jimenez et al., SWE-bench: Can language models resolve real-world GitHub issues? arXiv [Preprint] (2023). 10.48550/arXiv.2310.06770. Accessed 20 December 2025.47.Bureau of Labor Statistics, U.S. Department of Labor, Data from “National longitudinal survey of youth 1979 Cohort, 1979–2022 (Rounds 1–30) (2025). <https://www.nlsinfo.org/content/cohorts/nlsy79>. Accessed 20 December 2025.48.Edin K. J., et al. , Listening to the voices of America. RSF
10, 1–31 (2024).40734734
49.M. D. Verhagen, B. Stroebl, T. Liu, L. T. Liu, M. J. Salganik, The book of life approach: Enabling richness and scale for life course research. arXiv [Preprint] (2025). 10.48550/arXiv.2507.03027. Accessed 20 December 2025.50.Holland P. W., Statistics and causal inference. J. Am. Stat. Assoc.
81, 945–960 (1986).51.Institute of Social Science Survey of Peking University, Data from “China Family Panel Studies (CFPS).” <https://www.isss.pku.edu.cn/cfps/en/data/public/index.htm>. Accessed 20 December 2025.52.Harris K. M., et al. , Cohort profile: The national longitudinal study of adolescent to adult health (add health). Int. J. Epidemiol.
48, 1415–1425 (2019).
53.University of Essex, Institute for Social and Economic Research, Understanding Society: Waves 1–14, 2009–2023 and Harmonised BHPS: Waves 1–18, 1991–2009 (UK Data Service, ed. 19, 2024).54.S. Ruggles et al., IPUMS USA: version 16.0 (dataset) (2025). 10.18128/D010.V16.0. Accessed 1 December 2025.55.S. Flood, M. King, R. Rodgers, S. Ruggles, J. R. Warren, Integrated public use microdata series, Current population survey: Version 8.0 (dataset) (2020). 10.18128/D030.V8.0.56.T. W. Smith, M. Davern, J. Freese, S. L. Morgan, General Social Surveys, 1972-2018: Cumulative Codebook. National Data Program for the Social Sciences Series (NORC, Chicago, IL, 2019), No. 25, 3758pp.57.Thinking Machine Lab, Tinker (2026), <https://thinkingmachines.ai/tinker/>. Accessed 5 February 2026.58.Hu E. J., et al. , LoRA: Low-rank adaptation of large language models. ICLR
1, 3 (2022).59.L. Liang, SSDataBench-Data. GitHub. <https://github.com/LemengLiang/SSDataBench-Data>. Accessed 20 December 2025.

## Associated Data

### Supplementary Materials

Appendix 01 (PDF)

cloudpmc-path eabf/13167774/af8ac1242a1e/pnas.2538145123.sapp.pdf?cloudpmc-bucket app?size 908827?

### Data Availability Statement

The codes used in all experiments are publicly available at <https://github.com/lszshu/SSDataBench>. The raw datasets include NLSY ([47](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r47)), CFPS ([51](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r51)), Add Health ([52](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r52)), Understanding Society ([53](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r53)), U.S. Census ([54](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r54)), CPS-ASEC ([55](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r55)), and GSS ([56](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r56)). Processed datasets that permit public release and all data processing scripts are available on GitHub ([59](https://pmc.ncbi.nlm.nih.gov/articles/PMC13167774/#r59)).