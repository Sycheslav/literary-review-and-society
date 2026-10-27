---
id: arxiv-2406-14981-text
type: material
title: Human-AI collectives produce the most accurate differential diagnoses
work_id: arxiv-2406-14981
source_url: https://arxiv.org/html/2406.14981v1
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять
  с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.
language: original
sha256_text: 4d810edd317b708db6eac8a7adb526d60b70b993959355336d3cde8e1e042fd3
---

> Источник: [https://arxiv.org/html/2406.14981v1](https://arxiv.org/html/2406.14981v1). Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.

\unnumbered

# Human-AI collectives produce the most accurate differential diagnoses

Nikolas Zöller
Email: [zoeller@mpib-berlin.mpg.de](mailto:zoeller@mpib-berlin.mpg.de)
Affiliation: Center for Adaptive Rationality, Max Planck Institute for Human Development, Berlin, Germany
  
Julian Berger
Affiliation: Center for Adaptive Rationality, Max Planck Institute for Human Development, Berlin, Germany
  
Irving Lin
Affiliation: The Human Diagnosis Project, San Francisco , CA, USA
  
Nathan Fu
Affiliation: The Human Diagnosis Project, San Francisco , CA, USA
  
Jayanth Komarneni
Affiliation: The Human Diagnosis Project, San Francisco , CA, USA
  
Gioele Barabucci
Affiliation: University of Cologne, Cologne,Germany
  
Kyle Laskowski
Affiliation: The Human Diagnosis Project, San Francisco , CA, USA
  
Victor Shia
Affiliation: Harvey Mudd College, Claremont, CA, USA
  
Benjamin Harack
Affiliation: Oxford University, Oxford, UK
  
Eugene A. Chu
Affiliation: Kaiser Permanente, Downey, CA, USA
  
Vito Trianni
Affiliation: ISTC-CNR, Roma, Italy
  
Ralf H.J.M. Kurvers
Email: [kurvers@mpib-berlin.mpg.de](mailto:kurvers@mpib-berlin.mpg.de)
Affiliation: Center for Adaptive Rationality, Max Planck Institute for Human Development, Berlin, Germany
Affiliation: 
Science of Intelligence Excellence Cluster, Technical University Berlin, Berlin, Germany
  
Stefan M. Herzog
Email: [herzog@mpib-berlin.mpg.de](mailto:herzog@mpib-berlin.mpg.de)
Affiliation: Center for Adaptive Rationality, Max Planck Institute for Human Development, Berlin, Germany

###### Abstract

Artificial intelligence systems, particularly large language models (LLMs), are increasingly being employed in high-stakes decisions that impact both individuals and society at large, often without adequate safeguards to ensure safety, quality, and equity.
Yet LLMs hallucinate [Hong et al. (2024)](https://arxiv.org/html/2406.14981v1#bib.bib1); [Ji et al. (2023)](https://arxiv.org/html/2406.14981v1#bib.bib2); [Pal et al. (2023)](https://arxiv.org/html/2406.14981v1#bib.bib3); [Tonmoy et al. (2024)](https://arxiv.org/html/2406.14981v1#bib.bib4), lack common sense [Williams and Huckle (2024)](https://arxiv.org/html/2406.14981v1#bib.bib5), and are biased [Omiye et al. (2023)](https://arxiv.org/html/2406.14981v1#bib.bib6); [Navigli et al. (2023)](https://arxiv.org/html/2406.14981v1#bib.bib7)—shortcomings that may reflect LLMs’ inherent limitations and thus may not be remedied by more sophisticated architectures, more data, or more human feedback. Relying solely on LLMs for complex, high-stakes decisions is therefore problematic.
Here we present a hybrid collective intelligence system that mitigates these risks by leveraging the complementary strengths of human experience and the vast information processed by LLMs.
We apply our method to open-ended medical diagnostics, combining 40,762 differential diagnoses made by physicians with the diagnoses of five state-of-the art LLMs across 2,133 medical cases. We show that hybrid collectives of physicians and LLMs outperform both single physicians and physician collectives, as well as single LLMs and LLM ensembles. This result holds across a range of medical specialties and professional experience, and can be attributed to humans’ and LLMs’ complementary contributions that lead to different kinds of errors.
Our approach highlights the potential for collective human and machine intelligence to improve accuracy in complex, open-ended domains [Trianni et al. (2023)](https://arxiv.org/html/2406.14981v1#bib.bib8) like medical diagnostics.

###### keywords

Medical Diagnostics, Collective Intelligence, Large Language Models, Health Informatics

Diagnostic errors are among the most pressing issues in medical practice [Makary and Daniel (2016)](https://arxiv.org/html/2406.14981v1#bib.bib9); [Leape et al. (1991)](https://arxiv.org/html/2406.14981v1#bib.bib10); [Graber et al. (2005)](https://arxiv.org/html/2406.14981v1#bib.bib11), causing an estimated 795,000 deaths and permanent disabilities in the United States alone each year [Newman-Toker et al. (2024)](https://arxiv.org/html/2406.14981v1#bib.bib12). Reducing diagnostic errors—without incurring substantially higher costs—is essential to improve patient outcomes worldwide.
This challenge has motivated a recent surge in diagnostic technologies exploiting artificial intelligence (AI) to interpret medical records, tests, and images [Basu et al. (2020)](https://arxiv.org/html/2406.14981v1#bib.bib13); [Mirbabaie et al. (2021)](https://arxiv.org/html/2406.14981v1#bib.bib14).
Deep learning approaches in medical imaging have shown great promise. Notable examples include mammography interpretation, cardiac function assessment, and lung cancer screening, some of which have progressed beyond the testing phase and entered clinical practice [Rajpurkar et al. (2022)](https://arxiv.org/html/2406.14981v1#bib.bib15); [Aggarwal et al. (2021)](https://arxiv.org/html/2406.14981v1#bib.bib16); [Dembrower et al. (2023)](https://arxiv.org/html/2406.14981v1#bib.bib17).

Recent years have also witnessed the rise of AI foundation models, especially LLMs, which show remarkable abilities to process natural language, providing accurate answers to questions in almost any domain, including medicine [Lu et al. (2024)](https://arxiv.org/html/2406.14981v1#bib.bib18); [Moor et al. (2023)](https://arxiv.org/html/2406.14981v1#bib.bib19); [Singhal et al. (2023)](https://arxiv.org/html/2406.14981v1#bib.bib20); [Jiang et al. (2023)](https://arxiv.org/html/2406.14981v1#bib.bib21). However, a recent meta-analysis [Takita et al. (2024)](https://arxiv.org/html/2406.14981v1#bib.bib22) found that physicians often outperform LLMs, and that LLMs differ vastly in performance, also between medical specialties.
While LLMs’ performance in the medical domain keeps improving [Singhal et al. (2023)](https://arxiv.org/html/2406.14981v1#bib.bib20), their deployment in clinical practice remains challenging due to the risk of errors (caused by, e.g., hallucinations [Hong et al. (2024)](https://arxiv.org/html/2406.14981v1#bib.bib1); [Ji et al. (2023)](https://arxiv.org/html/2406.14981v1#bib.bib2); [Pal et al. (2023)](https://arxiv.org/html/2406.14981v1#bib.bib3); [Tonmoy et al. (2024)](https://arxiv.org/html/2406.14981v1#bib.bib4), biases [Omiye et al. (2023)](https://arxiv.org/html/2406.14981v1#bib.bib6); [Navigli et al. (2023)](https://arxiv.org/html/2406.14981v1#bib.bib7), and lack of common sense [Williams and Huckle (2024)](https://arxiv.org/html/2406.14981v1#bib.bib5)) and concerns about their trustworthiness [Chakravorti (2024, May 3)](https://arxiv.org/html/2406.14981v1#bib.bib23). As these shortcomings may reflect inherent limitations of LLMs [Lenat and Marcus (2023)](https://arxiv.org/html/2406.14981v1#bib.bib24), developing more sophisticated architectures or using more data or more human feedback may not sufficiently address these shortcomings.
The tension between the vast potential of AI-based solutions and the challenges of real-world deployment is not limited to medical diagnostics. It is also apparent in other domains, especially those involving high-stakes decisions whose effects are not immediate, such as strategies to address climate change [Cowls et al. (2023)](https://arxiv.org/html/2406.14981v1#bib.bib25).

Here we present an approach that complements AI responses with human expert knowledge in open-ended medical diagnostics. This method, which combines AI with a collective intelligence (CI) approach, benefits from the diversity of solutions provided by humans and LLMs. CI approaches harness the contributions of multiple experts to reduce errors and find creative solutions to complex problems [Woolley et al. (2010)](https://arxiv.org/html/2406.14981v1#bib.bib26); [Woolley and Gupta (2024)](https://arxiv.org/html/2406.14981v1#bib.bib27). In medical diagnostics, several studies have found that the collective solution of multiple diagnosticians outperforms the average individual across a range of medical contexts [Hasan et al. (2024)](https://arxiv.org/html/2406.14981v1#bib.bib28); [Hautz et al. (2015)](https://arxiv.org/html/2406.14981v1#bib.bib29); [Kattan et al. (2016)](https://arxiv.org/html/2406.14981v1#bib.bib30); [Kurvers et al. (2016)](https://arxiv.org/html/2406.14981v1#bib.bib31); [Kämmer et al. (2017)](https://arxiv.org/html/2406.14981v1#bib.bib32); [Kurvers et al. (2018)](https://arxiv.org/html/2406.14981v1#bib.bib33); [Blanchard et al. (2024)](https://arxiv.org/html/2406.14981v1#bib.bib34).
These studies have focused on binary or small-scale decision problems (e.g., detecting a specific condition), but CI has also proved successful in open-ended medical problems. While in earlier studies the contributions of individual experts are manually harmonized and aggregated into collective diagnoses [Barnett et al. (2019)](https://arxiv.org/html/2406.14981v1#bib.bib35), more recently this approach has been fully automatized. Specifically, medical knowledge graphs and natural language processing methods are leveraged to harmonize the free-text contributions of individual experts [Kurvers et al. (2023)](https://arxiv.org/html/2406.14981v1#bib.bib36), which can differ significantly due to the open-endedness of the solution space [Trianni et al. (2023)](https://arxiv.org/html/2406.14981v1#bib.bib8).

In a similar vein, hybrid systems that integrate state-of-the-art LLMs as peers in a mixed human–AI collective hold promise for addressing complex decision problems such as medical diagnostics. AI can provide complementary information without perpetuating the errors and biases of human peers. At the same time, the diagnostic process is not entirely outsourced to artificial systems, making it possible to benefit from human experts’ ability to think outside the box, recognize context, and handle contentious evidence, thus mitigating the risks of LLMs.

Combining the contributions of multiple humans and multiple LLMs is, however, not straightforward. Although many studies have explored how to combine multiple AI models (e.g., ensemble learning is an established practice in machine learning [Kuncheva ()](https://arxiv.org/html/2406.14981v1#bib.bib37); [Mienye and Sun (2022)](https://arxiv.org/html/2406.14981v1#bib.bib38)), little is known about how to best combine the outputs of multiple LLMs (but see [Jiang et al. (2023)](https://arxiv.org/html/2406.14981v1#bib.bib39); [Jiang et al. (2024)](https://arxiv.org/html/2406.14981v1#bib.bib40); [Yang et al. (2023)](https://arxiv.org/html/2406.14981v1#bib.bib41); [Barabucci et al. (2024)](https://arxiv.org/html/2406.14981v1#bib.bib42) for specific use cases), or how to combine the responses of multiple LLMs with those of human experts, particularly in open-ended domains. In this study, we develop a general-purpose method to combine the responses produced by both human experts and LLMs.
Applying this method to a set of over 40,000 diagnoses, we show that hybrid human–AI collectives outperform human-only and LLM-only collectives across a variety of medical specialties and levels of professional experience. Additionally, we demonstrate that when LLMs fail, physicians often provide correct diagnoses, thus highlighting the crucial importance of maintaining expert involvement, even in the presence of an ensemble of powerful AIs.

### 1 Medical cases, human data and LLM responses

The empirical basis for this work is a dataset from the Human Diagnosis Project (Human Dx), an online collaborative platform for medical professionals and trainees. Users from around the world can register on the platform, submit cases, review case details, and provide diagnoses. The cases submitted are published only if approved by an editorial board of licensed medical professionals. Each case is presented as a vignette mimicking information that physicians encounter in real-world practice and containing patient information such as symptoms, medical records, and clinical test results (see Fig. [1](https://arxiv.org/html/2406.14981v1#S2.F1 "Figure 1 ‣ 2 Harmonizing and aggregating open-ended answers from doctors and LLMs ‣ Human-AI collectives produce the most accurate differential diagnoses")). When responding to a case, users can provide either a single diagnosis or a ranked list, commonly known as a differential diagnosis, either as free text or by selecting from a medical taxonomy with an auto-complete feature that activates as they type (see Fig. [1](https://arxiv.org/html/2406.14981v1#S2.F1 "Figure 1 ‣ 2 Harmonizing and aggregating open-ended answers from doctors and LLMs ‣ Human-AI collectives produce the most accurate differential diagnoses")a for an illustration of the user interface). We refer to this response as a differential diagnosis, whether it contains one or multiple diagnoses. Once the user has submitted their differential diagnosis, they are shown the solution as provided by cases’ authors and vetted by an expert panel, which may consist of one or several diagnoses.
For our main analyses, we used a set of 2,133 medical cases and 40,762 differential diagnoses from qualified physicians with different levels of professional experience (see Methods). In the Supplement, we additionally present results of the same analyses for medical students.

To compare and combine the human diagnoses with LLM outputs, we provided the same set of case vignettes to five commercially available or open-source state-of-the-art LLMs (Anthropic Claude 3 Opus, Google Gemini Pro 1.0, Meta Llama 2 70B, Mistral Large, and OpenAI GPT-4) and prompted the models to provide the five most probable diagnoses, ordered by their probability of being correct (see Methods).

### 2 Harmonizing and aggregating open-ended answers from doctors and LLMs

The procedure for harmonizing and aggregating the human judgements and the LLM output is illustrated in Fig. [1](https://arxiv.org/html/2406.14981v1#S2.F1 "Figure 1 ‣ 2 Harmonizing and aggregating open-ended answers from doctors and LLMs ‣ Human-AI collectives produce the most accurate differential diagnoses"). In short, a collective diagnosis is established by ranking each diagnosis with a weighted score that is calculated across all humans and LLMs in the group, taking into account both the rank of the diagnosis in the individual lists (i.e., higher-ranked diagnoses receive more weight) and the humans’ and LLMs’ performance on a training fold (see Methods).
We used a five-fold cross-validation approach. One fold was used as a training fold to select the best prompting configuration for each LLM and to calculate weights for each LLM and each human using a method proposed by [Dogan and Birant (2019)](https://arxiv.org/html/2406.14981v1#bib.bib43). All humans were assigned the same weight based on the average human performance on the cases in the training fold. The collective diagnoses were then evaluated on the remaining four folds (see Methods, Extended Data Fig. [S1](https://arxiv.org/html/2406.14981v1#S15.F1 "Figure S1 ‣ 15 Extended data figures and tables ‣ 9.4 Weighted aggregation of LLMs and/or human inputs ‣ 9 Methods ‣ Human-AI collectives produce the most accurate differential diagnoses"), and SI for details).

In order to make the open-ended diagnoses of users and LLMs comparable and uniquely identifiable, we extended the method described in [Kurvers et al. (2023)](https://arxiv.org/html/2406.14981v1#bib.bib36), which maps free-text diagnoses to concepts (and their unique IDs) in the Systematized Nomenclature of Medicine Clinical Terms (SNOMED CT) [Donnelly (2006)](https://arxiv.org/html/2406.14981v1#bib.bib44) (see Methods). SNOMED CT is a comprehensive clinical terminology and coding system designed to standardize the representation of medical concepts and support the accurate communication of clinical information in healthcare. After matching diagnoses to SNOMED-CT concepts, the generation of the collective differential diagnoses proceeds exploiting the SNOMED-CT IDs (see Fig. [1](https://arxiv.org/html/2406.14981v1#S2.F1 "Figure 1 ‣ 2 Harmonizing and aggregating open-ended answers from doctors and LLMs ‣ Human-AI collectives produce the most accurate differential diagnoses")).

![Refer to caption](https://arxiv.org/html/2406.14981v1/figures/LLM_Humans_schema.png)


Figure 1: Illustration of the hybrid collective intelligence process, which combines human diagnoses with LLM outputs to arrive at a collective differential diagnosis. a, Screenshot of the interface that human users see when diagnosing a patient case on the Human Dx platform via a mobile device. The information provided can include a patient’s symptoms, test results, and medical record. Users can uncover this information piece by piece and update their diagnosis accordingly. In this analysis, we only consider users’ final differential diagnosis. The same information shown to human users is also given to LLMs as part of a prompt (see Methods). b, An illustrative example of the open-ended text responses given by users and LLMs. Next, extending a method presented in [Kurvers et al. (2023)](https://arxiv.org/html/2406.14981v1#bib.bib36) (see Methods and Extended Data Fig. [S1](https://arxiv.org/html/2406.14981v1#S15.F1 "Figure S1 ‣ 15 Extended data figures and tables ‣ 9.4 Weighted aggregation of LLMs and/or human inputs ‣ 9 Methods ‣ Human-AI collectives produce the most accurate differential diagnoses")), each single diagnosis is subjected to several processing steps for standardization, after which it is assigned a unique ID in the SNOMED CT healthcare terminology. c, Example of a SNOMED CT entry. Crucially, all listed synonyms are matched to the same SNOMED CT ID. d, Diagnoses of humans and LLMs after the matching step. e, Collective diagnosis after aggregating the diagnoses from humans and LLMs. In this aggregation, LLMs and humans are assigned different weights based on their performance in the training fold. The rank $r$ of a diagnosis in a differential diagnosis is taken into account through a $1/r$ scoring rule (see Methods).

### 3 Aggregating LLMs increases performance in open-ended medical diagnostics

![Refer to caption](https://arxiv.org/html/2406.14981v1/figures/acc_metricgrid_weightedLLMs.png)


Figure 2: Cross-validated performance of five individual LLMs (Anthropic Claude 3 Opus, OpenAI GPT-4, Mistral Large, Google Gemini Pro 1.0  and Meta Llama 2 70B) and ensembles of all possible combinations of LLMs.
Panels show performance for four outcome metrics ($y$ axes): Top-$k$ indicates the proportion of cases for which the correct diagnosis was among the $k$ top-ranked diagnoses (for $k=\{1,3,5\}$); MRR shows the mean reciprocal rank of correct diagnoses across cases (see eq. [1](https://arxiv.org/html/2406.14981v1#S3.E1 "In 3 Aggregating LLMs increases performance in open-ended medical diagnostics ‣ Human-AI collectives produce the most accurate differential diagnoses")).
The $x$ axis shows the number of LLMs in an ensemble.
The horizontal dashed line shows the average individual performance of the physicians (i.e., first averaged within cases, then across all cases). Some of the ensembles overplot each other (see Table [S1](https://arxiv.org/html/2406.14981v1#S16.T1 "Table S1 ‣ 16 Supplementary information ‣ 9.4 Weighted aggregation of LLMs and/or human inputs ‣ 9 Methods ‣ Human-AI collectives produce the most accurate differential diagnoses") in the supplement for the performance of all combinations).

We start by presenting the cross-validated results for the baseline performance of the five individual LLMs and all possible LLM ensembles.
Depending on the use case for an aggregated collective diagnosis, some performance metrics might be more suitable than others. For example, if the differential diagnosis of an LLM (ensemble), a human collective, or a hybrid collective serves as a consideration set to support the decision of a human physician, it may be sufficient that the correct solution is included in the differential diagnosis at all, and less important that it is ranked first. Therefore, we report several accuracy metrics, including top-$5$, top-$3$, and top-$1$ accuracy, where a differential diagnosis is evaluated as correct if the correct diagnosis is among the top five, top three, or top one diagnoses, respectively (and the accuracy is the proportion of such cases). For the fraction of cases where a case author has stated several diagnoses as correct ($34\%$), a nominated diagnosis is considered correct if it matches any of the correct diagnoses.
Additionally, we report the mean reciprocal rank (MRR) [Voorhees (1999)](https://arxiv.org/html/2406.14981v1#bib.bib45), a well-established performance metric in the field of information retrieval, defined as

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\text{MRR}=\frac{1}{C}\sum\_{i=1}^{C}\frac{1}{\text{r}\_{i}},$$ |  | (1) |

where $C$ corresponds to the number of cases on which the metric is evaluated and $r\_{i}$ is the rank of the correct answer in the final list for case $i$. Note that if $r\_{i}>5$ or if the correct diagnosis is not present in the ranking, we set $r\_{i}=\infty$ so that the contribution of case $i$ to the MRR is null.

As Fig. [2](https://arxiv.org/html/2406.14981v1#S3.F2 "Figure 2 ‣ 3 Aggregating LLMs increases performance in open-ended medical diagnostics ‣ Human-AI collectives produce the most accurate differential diagnoses") shows, the individual LLMs differed notably in performance, but aggregating multiple LLMs into ensembles generally increased diagnostic accuracy. The ensembles performed much better than the worst individual LLM and generally as well as, or better than, the best individual LLM.
For top-$5$ accuracy, the ensemble of all LLMs combined clearly outperformed each LLM individually, and this result held across the five most common medical specialties in our data (cardiology, gastroenterology, pulmonology and respirology, neurology, and infectious diseases; see Extended Data Fig. [S2](https://arxiv.org/html/2406.14981v1#S15.F2 "Figure S2 ‣ 15 Extended data figures and tables ‣ 9.4 Weighted aggregation of LLMs and/or human inputs ‣ 9 Methods ‣ Human-AI collectives produce the most accurate differential diagnoses")). The same held for top-$3$ accuracy and MRR when comparing performance across all cases, and for four of the five medical specialties (see Extended Data Fig. [S2](https://arxiv.org/html/2406.14981v1#S15.F2 "Figure S2 ‣ 15 Extended data figures and tables ‣ 9.4 Weighted aggregation of LLMs and/or human inputs ‣ 9 Methods ‣ Human-AI collectives produce the most accurate differential diagnoses")). For top-$1$ accuracy, the ensemble of all LLMs performed better than four of the five individual LLMs, but slightly worse than the best-performing LLM.
Whether or not it is advisable to aggregate several LLMs may therefore depend on the target metric, but if the purpose is to provide a consideration set to support the decision of a human physician (e.g., top-$5$ diagnoses), then LLM ensembles have the greatest potential.

To put this performance into perspective, Extended Data Fig. [S3](https://arxiv.org/html/2406.14981v1#S15.F3 "Figure S3 ‣ 15 Extended data figures and tables ‣ 9.4 Weighted aggregation of LLMs and/or human inputs ‣ 9 Methods ‣ Human-AI collectives produce the most accurate differential diagnoses") shows the percentage of physicians who were outperformed by (and/or tied with) individual LLMs and LLM ensembles across the set of cases they had solved. This percentage was highest for an LLM ensemble incorporating all five LLMs (i.e., strictly outperformed $85\%$ of physicians and outperformed or tied with $93\%$ of physicians).
Comparing the individual LLM performance with that of the human users showed that four of the five LLMs outperformed the average physician.

### 4 Human–AI collective intelligence outperforms both humans and LLMs

![Refer to caption](https://arxiv.org/html/2406.14981v1/figures/acc_metricgrid_weightedLLMsHumans.png)


Figure 3: Cross-validated performance of human-only ensembles and hybrid ensembles of humans and LLMs.
Panels show performance for four outcome metrics ($y$ axes): Top-$k$ indicates the proportion of cases for which the correct diagnosis was among the $k$ top-ranked diagnoses (for $k=\{1,3,5\}$); MRR shows the mean reciprocal rank of correct diagnoses across cases (see eq. [1](https://arxiv.org/html/2406.14981v1#S3.E1 "In 3 Aggregating LLMs increases performance in open-ended medical diagnostics ‣ Human-AI collectives produce the most accurate differential diagnoses")).
The individual performance of the five LLMs (and their combined performance in an all-LLMs ensemble) is shown as the left-most square of each color in each panel.
The $x$ axis shows the number of humans added to individual LLMs or to an all-LLMs ensemble.

Next, we test the complementarity of human and LLM solutions in a hybrid CI approach.
Fig. [3](https://arxiv.org/html/2406.14981v1#S4.F3 "Figure 3 ‣ 4 Human–AI collective intelligence outperforms both humans and LLMs ‣ Human-AI collectives produce the most accurate differential diagnoses") shows the cross-validated performance when combining the diagnoses of multiple physicians (human-only ensembles as a baseline) with any one of the five individual LLMs or with all LLMs.
For the baseline of human-only ensembles, increasing the number of physicians increased diagnostic accuracy, with greater marginal increases in accuracy for smaller than for larger group sizes. These results are in line with earlier findings from a smaller set of Human Dx cases [Kurvers et al. (2023)](https://arxiv.org/html/2406.14981v1#bib.bib36); [Barnett et al. (2019)](https://arxiv.org/html/2406.14981v1#bib.bib35).

Crucially, adding one LLM to the human diagnoses consistently increased performance for both individual physicians and human-only ensembles of different sizes, with the largest increase attained when adding the best-performing individual LLM or an all-LLM ensemble. For top-$5$ and top-$3$ performance metrics, adding the all-LLM ensemble was as good as or better than adding the best-performing LLM. For top-$1$ accuracy and MRR, adding either the best-performing LLM or the all-LLM ensemble yielded the best results—which of the two depended on the size of the human group.
Even adding the worst-performing LLM, which by itself performed worse than the average individual physician, generally led to a slight increase in performance across all metrics.

From the perspective of human-only ensembles, comparing the performance of ensembles of $n$ humans with that of hybrid ensembles of $n-1$ humans plus one LLM (i.e., the same overall group size of $n$ inputs) showed that adding either the best or second-best LLM or the all-LLM ensemble to a human-only ensemble outperformed adding another human (depending on the accuracy metric and group size, this finding also tended to hold for the third- and fourth-best LLM; Fig. [3](https://arxiv.org/html/2406.14981v1#S4.F3 "Figure 3 ‣ 4 Human–AI collective intelligence outperforms both humans and LLMs ‣ Human-AI collectives produce the most accurate differential diagnoses")).
From the perspective of individual LLMs or an all-LLM ensemble, adding one or more human(s) increased performance; this increase was most pronounced for the worst-performing LLMs.

As Extended Data Figs. [S4](https://arxiv.org/html/2406.14981v1#S15.F4 "Figure S4 ‣ 15 Extended data figures and tables ‣ 9.4 Weighted aggregation of LLMs and/or human inputs ‣ 9 Methods ‣ Human-AI collectives produce the most accurate differential diagnoses") and [S5](https://arxiv.org/html/2406.14981v1#S15.F5 "Figure S5 ‣ 15 Extended data figures and tables ‣ 9.4 Weighted aggregation of LLMs and/or human inputs ‣ 9 Methods ‣ Human-AI collectives produce the most accurate differential diagnoses") show, these results held across the five most common medical specialties in our data and for medical students.

### 5 Complementarity of human- and LLM-generated diagnoses

![Refer to caption](https://arxiv.org/html/2406.14981v1/figures/complementarity_physicians_LLMs.png)


Figure 4: Complementarity of solutions from individual humans and human-only ensembles and LLMs.
Panels a and b show, for each of the five LLMs, matrices with the percentages of cases for all 36 combinations of the LLM ($x$ axis) and humans ($y$ axis) assigning the correct diagnosis a particular rank (i.e., rank 1, 2, 3, 4, 5 or not ranked). a, Results for individual physicians. b, Results for five-physician human-only ensembles. The highlighted diagonal indicates cases where an LLM and the humans assigned the correct diagnosis the same rank.
Panels c and d show the percentage of cases in which the same diagnoses were assigned rank one, comparing individual physicians and 5-physician ensembles to LLMs (left side), and different LLMs to each other (right side).
c, Overall rank one agreement, regardless of whether the correct diagnosis was included.
d, Rank one agreement when both diagnosticians were incorrect.
Results were extracted from the cross-validation procedure by recording the frequencies with which physicians and LLMs assigned the same or a different rank to either the correct or an incorrect diagnosis, averaged across all cases and the five folds (see Methods).
Note that due to rounding to integers, there may be small inconsistencies when summing rows or columns across matrices or when comparing sums of values to respective percentages reported in the main text.

The results presented in Fig. [3](https://arxiv.org/html/2406.14981v1#S4.F3 "Figure 3 ‣ 4 Human–AI collective intelligence outperforms both humans and LLMs ‣ Human-AI collectives produce the most accurate differential diagnoses") suggest complementarity of physicians and LLMs in diagnosing open-ended medical problems.
Given that most LLMs outperform the average individual physician, however, how can adding a single physician to an individual LLM—or even to an ensemble of LLMs—increase diagnostic accuracy?
The key answer to this question is that humans and LLMs make different kinds of errors. The literature on both CI [Ladha (1992)](https://arxiv.org/html/2406.14981v1#bib.bib46); [Grofman et al. (1983)](https://arxiv.org/html/2406.14981v1#bib.bib47) and machine ensembles [Tumer and Ghosh (1996)](https://arxiv.org/html/2406.14981v1#bib.bib48); [Kuncheva ()](https://arxiv.org/html/2406.14981v1#bib.bib37) recognizes that the less correlated the errors of its members are, the more successful the ensemble will be.

Fig. [4](https://arxiv.org/html/2406.14981v1#S5.F4 "Figure 4 ‣ 5 Complementarity of human- and LLM-generated diagnoses ‣ Human-AI collectives produce the most accurate differential diagnoses")a shows the percentage of cases in which individual physicians and LLMs placed the correct diagnosis on the same rank or both did not rank the correct diagnosis (highlighted diagonal cells) and the percentage of cases in which individual physicians and LLMs placed the correct diagnosis on different ranks (or it was only mentioned by either a physician or an LLM; all other cells).
The results show that individual physicians and LLMs did not assign the correct diagnosis to the same rank in a substantial number of cases (range across LLMs: $46\%$–$51\%$).
Crucially, when LLMs did not list the correct diagnosis at all (range across LLMs: $34\%$–$54\%$;
right-most columns), individual humans did mention it in a substantial number of cases (range across LLMs: $30\%$–$38\%$;
right-most columns excluding bottom-right cells), most frequently ranking it first (range across LLMs: $20\%$–$27\%$, top-right cells). In other words, diagnoses missed by LLMs were often made by individual physicians, frequently in first place.
Thus, although individual physicians performed worse overall than most LLMs (see Fig. [2](https://arxiv.org/html/2406.14981v1#S3.F2 "Figure 2 ‣ 3 Aggregating LLMs increases performance in open-ended medical diagnostics ‣ Human-AI collectives produce the most accurate differential diagnoses") and Extended Data Fig. [S3](https://arxiv.org/html/2406.14981v1#S15.F3 "Figure S3 ‣ 15 Extended data figures and tables ‣ 9.4 Weighted aggregation of LLMs and/or human inputs ‣ 9 Methods ‣ Human-AI collectives produce the most accurate differential diagnoses")), in a substantial number of cases they were able to compensate for the LLMs’ errors.
Similarly, when individual humans did not list the correct diagnosis at all ($49\%$, bottom rows),
LLMs did in a substantial number of cases (range across LLMs: $32\%$–$51\%$; bottom columns excluding bottom-right cells), most frequently ranking it first (range across LLMs: $15\%$–$33\%$, bottom-left cells).

Fig. [4](https://arxiv.org/html/2406.14981v1#S5.F4 "Figure 4 ‣ 5 Complementarity of human- and LLM-generated diagnoses ‣ Human-AI collectives produce the most accurate differential diagnoses")b shows the same analysis for five-physician collectives and LLMs. Given that human collectives outperformed individual humans (see Fig. [3](https://arxiv.org/html/2406.14981v1#S4.F3 "Figure 3 ‣ 4 Human–AI collective intelligence outperforms both humans and LLMs ‣ Human-AI collectives produce the most accurate differential diagnoses")), the diagnoses given by five-physician collectives are even more complementary to the LLMs than are the ones given by individual physicians.
When LLMs did not list the correct diagnosis at all (range across LLMs: $34\%$–$54\%$; right-most columns), human ensembles did so in the majority of cases (range across LLMs: $55\%$–$65\%$; right-most columns excluding bottom-right cells), most frequently ranking it first (range across LLMs: $26\%$–$36\%$, top-right cells).
Intriguingly, the opposite pattern was less pronounced. When human-only ensembles did not list the correct diagnosis at all ($22\%$; bottom rows),
LLMs did so in only the minority of cases (range across LLMs: $17\%$–$32\%$).
For a similar complementarity analysis of LLMs with respect to each other, see Extended Data Fig. [S6](https://arxiv.org/html/2406.14981v1#S15.F6 "Figure S6 ‣ 15 Extended data figures and tables ‣ 9.4 Weighted aggregation of LLMs and/or human inputs ‣ 9 Methods ‣ Human-AI collectives produce the most accurate differential diagnoses").

Fig. [4](https://arxiv.org/html/2406.14981v1#S5.F4 "Figure 4 ‣ 5 Complementarity of human- and LLM-generated diagnoses ‣ Human-AI collectives produce the most accurate differential diagnoses")c,d shows how often individual physicians, five-physician ensembles and LLMs agree with each other on their top-ranked diagnosis.
LLMs agree more among themselves than with physicians (Fig. [4](https://arxiv.org/html/2406.14981v1#S5.F4 "Figure 4 ‣ 5 Complementarity of human- and LLM-generated diagnoses ‣ Human-AI collectives produce the most accurate differential diagnoses")c) and this difference is particularly pronounced in situations where both human and LLM diagnoses are incorrect (Fig. [4](https://arxiv.org/html/2406.14981v1#S5.F4 "Figure 4 ‣ 5 Complementarity of human- and LLM-generated diagnoses ‣ Human-AI collectives produce the most accurate differential diagnoses")d).
Furthermore, when humans and LLMs both make errors (Fig. [4](https://arxiv.org/html/2406.14981v1#S5.F4 "Figure 4 ‣ 5 Complementarity of human- and LLM-generated diagnoses ‣ Human-AI collectives produce the most accurate differential diagnoses")d), they are less likely to assign the same incorrect diagnosis to the first rank compared to their respective overall agreement rate (which includes cases where either or both have ranked the correct diagnosis first; Fig. [4](https://arxiv.org/html/2406.14981v1#S5.F4 "Figure 4 ‣ 5 Complementarity of human- and LLM-generated diagnoses ‣ Human-AI collectives produce the most accurate differential diagnoses")c).
Extended Data Figs. [S7](https://arxiv.org/html/2406.14981v1#S15.F7 "Figure S7 ‣ 15 Extended data figures and tables ‣ 9.4 Weighted aggregation of LLMs and/or human inputs ‣ 9 Methods ‣ Human-AI collectives produce the most accurate differential diagnoses") and [S8](https://arxiv.org/html/2406.14981v1#S15.F8 "Figure S8 ‣ 15 Extended data figures and tables ‣ 9.4 Weighted aggregation of LLMs and/or human inputs ‣ 9 Methods ‣ Human-AI collectives produce the most accurate differential diagnoses") show that the above conclusions about error diversity also hold when considering the full range of ranks 1 to 5.
This error diversity is crucial for a CI approach to be effective, and it is significantly more pronounced among hybrid pairs of a physician and an LLM compared to between pairs of different LLMs.
In a collective aggregation scheme based on (weighted) majority voting, this error diversity ensures that correct diagnoses accumulate more frequently than incorrect ones, allowing the correct solutions to rise to the top of the collective differential diagnosis.

### 6 Discussion

Our results demonstrate the potential of combining human medical expertise with large language models (LLMs) to enhance accuracy and reduce errors in open-ended medical diagnostics.
Integrating the differential diagnosis of a single human diagnostician with the output of a single LLM yielded a better performance than either alone. Adding an LLM to multiple physicians’ diagnoses also improved performance in nearly all scenarios. The individual accuracy of the LLM influenced the performance gain, with the highest gain from the best-performing LLM. But even the worst-performing LLM, which was less accurate than the average human, showed positive effects.

Taking an LLM perspective, also the performance of LLMs could be boosted by adding human judgements. Adding a single physician increased performance for all LLMs even though individual physicians, on average, performed worse than most LLMs; and LLM performance increased steadily with adding more humans. The increase in performance was highest for the worst-performing LLM and lowest for the best-performing LLM.

An important component of (hybrid human–machine) CI is that different users or machines produce independent and diverse errors [Grofman et al. (1983)](https://arxiv.org/html/2406.14981v1#bib.bib47); [Ladha (1992)](https://arxiv.org/html/2406.14981v1#bib.bib46); [Marshall et al. (2019)](https://arxiv.org/html/2406.14981v1#bib.bib49); [Steyvers et al. (2022)](https://arxiv.org/html/2406.14981v1#bib.bib50).
We find that humans and LLMs indeed make complementary errors that disperse throughout the vast solution space, while correct diagnoses accumulate and converge when integrating human and LLM diagnoses.

Previous work has shown the potential of AI and CI individually, and their hybrid combination for problems with well-defined, small solution spaces (e.g., categorization, probabilistic forecasting, numerical estimation) [Pescetelli (2021)](https://arxiv.org/html/2406.14981v1#bib.bib51); [Peeters et al. (2020)](https://arxiv.org/html/2406.14981v1#bib.bib52); [Steyvers and Kumar (2023)](https://arxiv.org/html/2406.14981v1#bib.bib53); [Benjamin et al. (2023)](https://arxiv.org/html/2406.14981v1#bib.bib54). Here we showed that these results can be generalized to open-ended problems covering a vast solution space (there are more than 360,000 unique medical concepts in the March 2023 international edition of SNOMED CT that we used), by using a general-purpose method to automatically harmonize and aggregate the solutions generated by humans and LLMs.
While we demonstrated this method in the domain of medical diagnostics, we believe that our approach can be generalized to different applications for which structured domain knowledge is available, allowing the harmonization and principled aggregation of human expert judgements and LLM responses (e.g., climate change adaptation management [Trianni et al. (2023)](https://arxiv.org/html/2406.14981v1#bib.bib8)).

### 7 Limitations and future research

While our study demonstrates the potential of hybrid human–AI systems in medical diagnostics, further research is necessary to ensure the safety, reliability, efficacy, and ethical deployment of this technology in real-world clinical settings.

For instance, although vignette-based studies represent a validated and accepted paradigm for the study of diagnostic decision-making processes in medicine [Peabody et al. (2004)](https://arxiv.org/html/2406.14981v1#bib.bib55), it remains an open question as to how well our method translates to actual clinical practice.
Moreover, our case vignettes were selected by an expert panel at Human Dx, and users may flag suspicious cases for removal from the Human Dx platform. This case selection procedure may have excluded very difficult or rare cases. Future work could consider more ecologically valid or representative ways of selecting cases.

Furthermore, our analyses do not consider the consequences of the treatments implied by the diagnoses. Future work could study whether our proposed approach alters the likelihood of arriving at a potentially beneficial (or harmful) treatment.
Such research must consider the decision context, as the recommended or accessible treatments may vary depending on the cultural, regional, and institutional circumstances, as well as the patients’ health insurance plan ([Yabroff et al., 2020](https://arxiv.org/html/2406.14981v1#bib.bib56), e.g.,).

Finally, our study was not designed to address risks related to fairness and equity ([Hooker, 2021](https://arxiv.org/html/2406.14981v1#bib.bib57); [van Giffen et al., 2022](https://arxiv.org/html/2406.14981v1#bib.bib58); [Wachter et al., 2021](https://arxiv.org/html/2406.14981v1#bib.bib59); [Weidinger et al., 2021](https://arxiv.org/html/2406.14981v1#bib.bib60); [Liang et al., 2023](https://arxiv.org/html/2406.14981v1#bib.bib61); [Paulus and Kent, 2020](https://arxiv.org/html/2406.14981v1#bib.bib62), see, e.g.,).
For example, LLMs have been shown to perpetuate race-based medicine in their responses [Omiye et al. (2023)](https://arxiv.org/html/2406.14981v1#bib.bib6). This finding suggests that the clinical medical knowledge encoded in LLMs [Singhal et al. (2023)](https://arxiv.org/html/2406.14981v1#bib.bib20); [Jiang et al. (2023)](https://arxiv.org/html/2406.14981v1#bib.bib21) is tainted by racism, which can leak into medical diagnoses, resulting in worse health outcomes for disadvantaged groups.
Future work should directly study the extent to which the integration of humans and LLMs mitigates or amplifies the biases of both parties in medical diagnostics (see also [Groh et al. (2024)](https://arxiv.org/html/2406.14981v1#bib.bib63)).

More generally, taking a human-centered approach when designing hybrid systems is essential to compensate for the lack of transparency of AI models and for building trust among all affected stakeholders [Birhane et al. (2022)](https://arxiv.org/html/2406.14981v1#bib.bib64); [Carusi et al. ()](https://arxiv.org/html/2406.14981v1#bib.bib65); [Delgado et al. (2023)](https://arxiv.org/html/2406.14981v1#bib.bib66); [Wiens et al. (2019)](https://arxiv.org/html/2406.14981v1#bib.bib67). Such an approach may help identify and mitigate some of the problems of LLMs or hybrid systems already during the design stage.

Future research could build on our approach in several ways.
First, although we used a systematic prompt engineering approach, more sophisticated techniques have been developed that could further boost accuracy (e.g., tree of thought [Yao et al. (2023)](https://arxiv.org/html/2406.14981v1#bib.bib68); [Long (2023)](https://arxiv.org/html/2406.14981v1#bib.bib69), or self-consistency with temperature/top-$p$ sampling [Wang et al. (2022)](https://arxiv.org/html/2406.14981v1#bib.bib70)). Applying sophisticated multi-level prompt-engineering techniques to generalist foundational models can improve performance and even outperform fine-tuned models for the medical domain [Nori et al. (2023)](https://arxiv.org/html/2406.14981v1#bib.bib71).
Second, more generally, combining computational models of human cognition with LLMs might improve a system’s reasoning performance (see, e.g., [Bhatia (2023)](https://arxiv.org/html/2406.14981v1#bib.bib72), for the case of induction).
Third, vignettes could be classified into categories (e.g., medical specialties, number and type of case findings), and using tailored few-shot examples within these categories when prompting LLMs or adjusting weights for LLMs based on these categories may further boost accuracy.
Additionally, more sophisticated weighting techniques could be tested that adjust weights based on fairness, or LLM biases [Paulus and Kent (2020)](https://arxiv.org/html/2406.14981v1#bib.bib62).
Fourth, we only considered text-based cases; future work could test the diagnostic performance of large multi-modal models (and hybrid human–AI ensembles) on, for example, images (e.g., x-rays or histopathological images) or sounds (e.g., echocardiograms) alongside the textual information [Lu et al. (2024)](https://arxiv.org/html/2406.14981v1#bib.bib18); [Moor et al. (2023)](https://arxiv.org/html/2406.14981v1#bib.bib19).
Fifth, future work could further explore the potential of hybrid CI with non-experts. Extended Fig. [S5](https://arxiv.org/html/2406.14981v1#S15.F5 "Figure S5 ‣ 15 Extended data figures and tables ‣ 9.4 Weighted aggregation of LLMs and/or human inputs ‣ 9 Methods ‣ Human-AI collectives produce the most accurate differential diagnoses") demonstrates that hybrid ensembles of LLMs and medical students were able to outperform individual physicians and even groups of physicians. Boosting the performance of less qualified individuals by leveraging LLMs might have particular potential for underserved regions where access to experts is limited.

### 8 Conclusion

Our study demonstrates the power of hybrid human–AI collectives in the context of medical diagnostics for general clinical practice. Hybrid collectives outperform both individual human experts and LLMs (as well as human-only and LLM-only collectives) in generating accurate differential diagnoses. This superior hybrid performance is a direct consequence of physicians and LLMs making different kinds of errors: when LLMs missed the correct diagnosis, individual physicians often contributed the correct diagnosis, rescuing the hybrid performance.

Recent years have seen a surge of research and publications on the potential of LLMs (e.g., in medical diagnostics; [Singhal et al. (2023)](https://arxiv.org/html/2406.14981v1#bib.bib20)). However, in both science and public discourse, there is increasing concern about the lack of safeguards to ensure the safety, quality, and equity of LLM-based systems [Chakravorti (2024, May 3)](https://arxiv.org/html/2406.14981v1#bib.bib23). LLMs, despite their impressive capabilities, hallucinate [Hong et al. (2024)](https://arxiv.org/html/2406.14981v1#bib.bib1); [Ji et al. (2023)](https://arxiv.org/html/2406.14981v1#bib.bib2); [Pal et al. (2023)](https://arxiv.org/html/2406.14981v1#bib.bib3); [Tonmoy et al. (2024)](https://arxiv.org/html/2406.14981v1#bib.bib4), lack common sense [Williams and Huckle (2024)](https://arxiv.org/html/2406.14981v1#bib.bib5), and are biased [Omiye et al. (2023)](https://arxiv.org/html/2406.14981v1#bib.bib6); [Navigli et al. (2023)](https://arxiv.org/html/2406.14981v1#bib.bib7)—shortcomings that may reflect LLMs’ inherent limitations [Lenat and Marcus (2023)](https://arxiv.org/html/2406.14981v1#bib.bib24) and may thus not be remedied by more sophisticated architectures, more data, or more human feedback.

We posit that the time has come for a second wave of research on LLMs (and AI in general) that is no longer content to showcase what LLMs can do, propose technical approaches to fix their flaws (e.g., [Tonmoy et al. (2024)](https://arxiv.org/html/2406.14981v1#bib.bib4)), and speculate about how human oversight could be implemented. Rather, it is crucial to study how to leverage the complementary strengths of humans and AI by combining the experience and common sense of experts with the vast information processed by LLMs.
In addition to technological solutions aimed at addressing problems inherent in an AI system (e.g., using retrieval-augmented generative AI to try addressing hallucinations; [Tonmoy et al. (2024)](https://arxiv.org/html/2406.14981v1#bib.bib4)), incorporating complementary human intelligence can help mitigate the risks of LLMs in ways that purely technological solutions may not ever be able to.

### 9 Methods

#### 9.1 Human Dx: Medical diagnostics cases and data from human solvers

For our analyses, we used a dataset of 2,133 medical cases with a total of 40,762 diagnoses provided by medical experts through the user interface of the Human Dx app (see Fig. [1](https://arxiv.org/html/2406.14981v1#S2.F1 "Figure 1 ‣ 2 Harmonizing and aggregating open-ended answers from doctors and LLMs ‣ Human-AI collectives produce the most accurate differential diagnoses")a). Beforehand, we excluded from our analyses all diagnoses that were incomplete due to submission errors or connectivity issues. We also excluded the diagnoses of users who bypassed the onboarding process and of “shadow banned” users, who were permitted access to the platform but excluded from analyses due to unhelpful behavior (e.g., submitting diagnoses consisting of random characters or using profanities). Test accounts belonging to two Human Dx staff members were also excluded.
Finally, we excluded cases containing images (as the LLMs were not able to process these).
The medical experts consisted of 1,370 attending physicians ($37.3\%$), 139 fellows ($3.8\%$), and 2,160 resident physicians ($58.9\%$), representing senior doctors, doctors undergoing specialized training, and doctors in training, respectively. Note that this tenure information is based on self-reports by the users. As Extended Data Fig. [S9](https://arxiv.org/html/2406.14981v1#S15.F9 "Figure S9 ‣ 15 Extended data figures and tables ‣ 9.4 Weighted aggregation of LLMs and/or human inputs ‣ 9 Methods ‣ Human-AI collectives produce the most accurate differential diagnoses")a shows, the performance distributions of these three tenure levels were similar; we therefore combined them into a common category labelled “physicians.”
An additional 11,772 diagnoses were contributed by 1,037 medical students; on average, these were less accurate (Extended Data Fig. [S9](https://arxiv.org/html/2406.14981v1#S15.F9 "Figure S9 ‣ 15 Extended data figures and tables ‣ 9.4 Weighted aggregation of LLMs and/or human inputs ‣ 9 Methods ‣ Human-AI collectives produce the most accurate differential diagnoses")a,b). For hybrid human–LLM ensembles (see Fig. [3](https://arxiv.org/html/2406.14981v1#S4.F3 "Figure 3 ‣ 4 Human–AI collective intelligence outperforms both humans and LLMs ‣ Human-AI collectives produce the most accurate differential diagnoses")), only cases diagnosed by a minimum of five physicians were analyzed (so that collectives of up to five humans could be simulated), totaling 1,928 cases.
The medical specialty of a case (used for the robustness analyses reported in Extended Data Figs. [S2](https://arxiv.org/html/2406.14981v1#S15.F2 "Figure S2 ‣ 15 Extended data figures and tables ‣ 9.4 Weighted aggregation of LLMs and/or human inputs ‣ 9 Methods ‣ Human-AI collectives produce the most accurate differential diagnoses") and [S4](https://arxiv.org/html/2406.14981v1#S15.F4 "Figure S4 ‣ 15 Extended data figures and tables ‣ 9.4 Weighted aggregation of LLMs and/or human inputs ‣ 9 Methods ‣ Human-AI collectives produce the most accurate differential diagnoses")) was determined by prompting Anthropic Claude 3 Opus to identify the three most probable specialties from a list of 145 specialties used internally by Human Dx (see SI for the exact wording of the prompt). Only the most probable specialty was used in the analyses shown in Extended Data Figs. [S2](https://arxiv.org/html/2406.14981v1#S15.F2 "Figure S2 ‣ 15 Extended data figures and tables ‣ 9.4 Weighted aggregation of LLMs and/or human inputs ‣ 9 Methods ‣ Human-AI collectives produce the most accurate differential diagnoses") and [S4](https://arxiv.org/html/2406.14981v1#S15.F4 "Figure S4 ‣ 15 Extended data figures and tables ‣ 9.4 Weighted aggregation of LLMs and/or human inputs ‣ 9 Methods ‣ Human-AI collectives produce the most accurate differential diagnoses").

#### 9.2 LLMs: Prompt engineering and post-processing of responses

Prompt engineering can markedly affect the quality and format of LLM responses. There is no established framework for prompt engineering, and which wording produces the desired response typically depends on the LLM used.
Some studies have found that shorter prompts work better [Zhang et al. (2022)](https://arxiv.org/html/2406.14981v1#bib.bib73); others that complex prompts yield better responses [Fu et al. (2022)](https://arxiv.org/html/2406.14981v1#bib.bib74). In practice, prompts are generally engineered by trial and error [Fu et al. (2022)](https://arxiv.org/html/2406.14981v1#bib.bib74).

We took a systematic, semi-exhaustive approach, building up prompts in a modular fashion by concatenating several text blocks (Extended Data Fig. [S1](https://arxiv.org/html/2406.14981v1#S15.F1 "Figure S1 ‣ 15 Extended data figures and tables ‣ 9.4 Weighted aggregation of LLMs and/or human inputs ‣ 9 Methods ‣ Human-AI collectives produce the most accurate differential diagnoses")). The most basic block feeds the case vignette to the LLM verbatim. The case vignette describes the patient’s symptoms, test results, and medical record. The LLM is then asked to provide the five most probable diagnoses ordered by their likelihood of being correct (i.e., a differential diagnosis). We included several additional text blocks in the prompt and tested whether these additions increased diagnostic accuracy. The prompt that performed best in a training fold of cases was then used for the analysis in the remaining folds.
Specifically, the additional text blocks assign
the LLM the role of a medical expert (impersonation [Salewski et al. (2023)](https://arxiv.org/html/2406.14981v1#bib.bib75)), advise it to check that the proposed diagnoses are consistent with the case description (self-consistency), advise the LLM to report diagnoses in SNOMED CT terminology (answer format SCT) or in common shorthand (answer format common), or offer five examples of case vignettes with their correct diagnoses (a technique known as few-shot prompting; [Brown et al. (2020)](https://arxiv.org/html/2406.14981v1#bib.bib76)). In selecting the few-shot examples, we sought to ensure variety in patients’ age (5 months to 89 years) and gender (3 female, 2 male) and the medical specialty.
The resulting LLM responses constitute the basis of the results reported here.
For details of the exact wording of prompts and results of the validation process, see Extended Data Fig. [S1](https://arxiv.org/html/2406.14981v1#S15.F1 "Figure S1 ‣ 15 Extended data figures and tables ‣ 9.4 Weighted aggregation of LLMs and/or human inputs ‣ 9 Methods ‣ Human-AI collectives produce the most accurate differential diagnoses") and SI.

Our general validation approach is as follows: We used five-fold cross-validation on the whole set of cases, using one fold of cases to select the best prompt and calculate the weights for humans and LLMs (see “[9.4 Weighted aggregation of LLMs and/or human inputs](https://arxiv.org/html/2406.14981v1#S9.SS4 "In 9 Methods ‣ Human-AI collectives produce the most accurate differential diagnoses")”). The other four folds were used for assessing out-of-sample performance. We report results averaged across the five cross-validation outcomes.

The raw LLM responses required some additional post-processing (which was not needed for the human responses). Even when explicitly instructed to provide answers in a specific format, some LLMs did not always comply and occasionally returned verbose responses. However, these responses follow typical patterns that are easy to recognize. Some LLMs, for example, start the response with an introductory sentence before parsing the differential diagnosis in the requested format. We therefore removed the response until the first line break if the response started with “Sure,…,” “Here is the…,” “Here are…,” “### Response:…,” “The probable…,” “The differential…,” “The most probable…,” or “Based on…”. Furthermore, we removed various forms of list numbering.

#### 9.3 Matching raw text to unique medical concepts (SNOMED CT)

One of the main challenges when aggregating individual diagnoses in open-ended medical diagnostics is discerning which diagnoses correspond to the same medical concept.
The differential diagnoses given by humans and LLMs consist of raw text. Two strings pointing to the same disease might differ slightly—for example, due to typos, use of synonyms, or differences in spelling.
To facilitate comparison of these open-ended diagnoses, we developed a method and processing pipeline that leveraged the comprehensive SNOMED CT healthcare terminology (March 2023 International Edition Release) and mapped the raw string responses to unique IDs in SNOMED CT (extending a pipeline described in [Kurvers et al. (2023)](https://arxiv.org/html/2406.14981v1#bib.bib36)).

The first step is string normalization, using routine natural language processing tools to standardize all diagnoses—including the correct ones provided by cases’ authors. The normalization procedure involves removing stop words, converting British English to US English, converting plural to singular, and identifying acronyms; specifically, we used the Norm1 pipeline, one of the Lexical Tools maintained by the National Library of Medicine.
The second step is to map concepts to SNOMED CT IDs (Fig. [1](https://arxiv.org/html/2406.14981v1#S2.F1 "Figure 1 ‣ 2 Harmonizing and aggregating open-ended answers from doctors and LLMs ‣ Human-AI collectives produce the most accurate differential diagnoses")c). This is done by comparing a normalized diagnosis string to the normalized entries in SNOMED CT including all of their stored synonyms sharing the same ID. A SNOMED CT ID is assigned to a diagnosis only when there is an exact match between the sets of words—in other words, the compared strings having a Jaccard similarity of $1$.
On the rare occasion that more than one SNOMED CT ID is matched by this technique, SNOMED CT allows for differentiation by semantic tags. We gave preference to SNOMED IDs according to their semantic tags in the following order: “disorder,” “finding,” “morphologic abnormality,” “body structure,” “person,” “organism,” “specimen” (see [Kurvers et al. (2023)](https://arxiv.org/html/2406.14981v1#bib.bib36) for the rationale behind this ordering), so that a diagnosis was only matched to exactly one ID.

Applying this approach, as described in [Kurvers et al. (2023)](https://arxiv.org/html/2406.14981v1#bib.bib36), produced a match for $90\%$ of the correct case diagnoses, $78\%$ of diagnoses given by LLMs (calculated across all prompts), and $84\%$ of diagnoses given by humans.
For the diagnoses that could not be matched, we employed a different approach. We created 768-dimensional vector embeddings of all unique (active) SNOMED CT concepts and synonyms using a sentence-transformer model based on the pubmedbert model [Gu et al. (2020)](https://arxiv.org/html/2406.14981v1#bib.bib77)—a domain-specific transformer model trained on texts from the National Library of Medicine and fine-tuned over the MS-MARCO dataset using the sentence-transformer framework [Deka et al. (2022)](https://arxiv.org/html/2406.14981v1#bib.bib78).
We then created a vector embedding of the diagnosis to be matched and assigned it the SNOMED CT ID for which the cosine similarity between embedding vectors was highest. We were thus able to match all remaining raw string diagnoses to exactly one SNOMED CT ID. For example, the diagnosis “Chlamydia infection” which could not be matched before was now correctly matched to the SNOMED CT concept “Chlamydial infection (disorder).” Likewise, “Human immunodeficiency virus disease” was correctly matched to the SNOMED CT concept “Human immunodeficiency virus infection (disorder).” As a sanity check, we applied the sentence-transformer matching technique to all diagnoses that were successfully matched in the first approach (i.e., using the pipeline described in [Kurvers et al. (2023)](https://arxiv.org/html/2406.14981v1#bib.bib36)) and found that both methods arrived at the same SNOMED CT ID for $99.4\%$ of diagnosis strings (given by humans or LLMs).

#### 9.4 Weighted aggregation of LLMs and/or human inputs

To aggregate individual diagnoses into a collective diagnosis, we implemented a scoring rule. After normalizing all differential diagnoses and matching them to unique SNOMED CT IDs, we built a set of all nominated IDs (see Fig. [1](https://arxiv.org/html/2406.14981v1#S2.F1 "Figure 1 ‣ 2 Harmonizing and aggregating open-ended answers from doctors and LLMs ‣ Human-AI collectives produce the most accurate differential diagnoses")b–d and previous subsection). Then, for each diagnostician (physician or LLM) and each diagnosis, a partial score was assigned that was discounted depending on the rank $r$ in the differential diagnosis (i.e., the list of diagnoses ordered in descending order of judged probability of being the correct diagnosis).
Following [Barnett et al. (2019)](https://arxiv.org/html/2406.14981v1#bib.bib35); [Kurvers et al. (2023)](https://arxiv.org/html/2406.14981v1#bib.bib36), we employed a $1/r$ rule for the rank-discounted partial score (i.e., the inverse rank of a diagnosis).
Additionally, this partial score was multiplied by a weight at the level of the diagnostician (see next paragraph). Finally, for each nominated diagnosis, these partial scores were summed up over all diagnosticians, and the ranking of the collective differential diagnosis was defined as a list sorted in decreasing order of the overall score a diagnosis received.

Prior research on CI in medical diagnostics has shown that giving equal weight to members in a collective when aggregating individual judgements into a collective diagnosis (i.e., using a simple equal-weighting combination rule) performs well as long as there is not much difference in individual performance [Kurvers et al. (2016)](https://arxiv.org/html/2406.14981v1#bib.bib31). However, if there are substantial differences in individual accuracy, giving the more competent individuals higher weights in the aggregation step may improve performance.
We therefore used the Weighted Majority Voting Ensemble (WMVE) approach described in [Dogan and Birant (2019)](https://arxiv.org/html/2406.14981v1#bib.bib43) to determine weights for LLMs and humans.
Weights were determined on one-fifth of the cases and calculated for each configuration (i.e., combinations for the accuracy metric used and which LLMs and/or the number of human experts). The performance of the WMVE was then calculated on the remaining four-fifths of the cases. Results are reported as the means of a five-fold cross-validation (see also “[9.2 LLMs: Prompt engineering and post-processing of responses](https://arxiv.org/html/2406.14981v1#S9.SS2 "In 9 Methods ‣ Human-AI collectives produce the most accurate differential diagnoses")”).
At the start of the weight-learning process, each diagnostician $j$ in an ensemble of $n$ diagnosticians (physicians or LLMs) is assigned a weight of $w\_{j,0}=1$. For each case $i$ in the training set, the weights are updated according to $w\_{j,i}=w\_{j,i-1}+\alpha\_{i}$, where $\alpha\_{i}=s\_{j,i}\cdot(n-\sum\_{j=1}^{n}s\_{j,i})/n$ and $s\_{j,i}$ is the score of diagnostician $j$ achieved on case $i$, which depends on the performance metric used (for top-$k$, it is either 1 or 0; for reciprocal rank, it is $1/r$); that is, we estimated weights separately for each metric we evaluated. This means that the weight increases if a diagnostician correctly diagnoses a case in the training set, with a larger increase if the diagnoses of other diagnosticians in the ensemble are incorrect.
It was not possible to calculate a weight for each individual physician because many only rated a few (or none) of the cases in the training set. We therefore calculated a shared, average weight for all physicians. To this end, for each case in the training set and for each hybrid configuration with $n$ humans, we built all possible groups of $n$ physicians (i.e., using the physicians who provided a differential diagnosis for that case) and averaged over them. If the number of possible groups exceeded 100, we randomly sampled 100 unique groups.
In most cases, applying such a weighted combination rule outperformed a simple equal-weighting combination rule. However, even with equal weights applied, LLM and hybrid ensembles generally outperformed individual LLMs and physicians (see Extended Data Fig. [S10](https://arxiv.org/html/2406.14981v1#S15.F10 "Figure S10 ‣ 15 Extended data figures and tables ‣ 9.4 Weighted aggregation of LLMs and/or human inputs ‣ 9 Methods ‣ Human-AI collectives produce the most accurate differential diagnoses")).

### 10 Data availability

We include one Human Dx case along with the differential diagnoses provided by humans and LLMs to illustrate our approach which can be found at <https://github.com/nikozoe/human_ai_collectives>. The full dataset cannot be shared publicly due to privacy and data protection regulations, but can be obtained by contacting Human Dx.

### 11 Code availability

The code used to run simulations and perform analyses is available at: <https://github.com/nikozoe/human_ai_collectives>.

### 12 Acknowledgements

We thank the Human Dx team for providing the data and supporting this research. This work was funded by the Max Planck Institute for Human Development, the European Union’s Horizon Europe research and innovation programme within the context of the project HACID (GA 101070588), and the Deutsche Forschungsgemeinschaft (DFG, German Research Foundation) under Germany’s Excellence Strategy–EXC 2002/1 “Science of Intelligence”–project number 390523135.
We thank Susannah Goss for editing the manuscript.

### 13 Author information

These authors jointly supervised this work: Ralf H.J.M. Kurvers, Stefan M. Herzog.

#### 13.1 Authors and Affiliations

Center for Adaptive Rationality, Max Planck Institute for Human Development, Berlin, Germany
  
Nikolas Zöller, Julian Berger, Ralf H.J.M. Kurvers, Stefan M. Herzog

The Human Diagnosis Project, San Francisco , CA, USA
  
Irving Lin, Nathan Fu, Jayanth Komarneni, Kyle Laskowski

University of Cologne, Cologne,Germany
  
Gioele Barabucci

Harvey Mudd College, Claremont, CA, USA
  
Victor Shia

Oxford University, Oxford, UK
  
Benjamin Harack

Kaiser Permanente, Downey, CA, USA
  
Eugene A. Chu

ISTC-CNR, Roma, Italy
  
Vito Trianni

Science of Intelligence Excellence Cluster, Technical University Berlin, Berlin, Germany
  
Ralf H.J.M. Kurvers

#### 13.2 Contributions

Following the CRediT standard [Holcombe et al. (2021)](https://arxiv.org/html/2406.14981v1#bib.bib79).

- •

  *Conceptualization*: N.Z., J.B., I.L., N.F., J.K., G.B., V.S., B.H., V.T., R.H.J.M.K., and S.M.H.
- •

  *Data curation*: N.Z., J.B., I.L., N.F., and G.B.
- •

  *Formal analysis*: N.Z., J.B., I.L., N.F., G.B., and S.M.H.
- •

  *Funding acquisition*: I.L., J.K., G.B., V.T., R.H.J.M.K., and S.M.H.
- •

  *Investigation*: N.Z., J.B., I.L., N.F., and G.B.
- •

  *Methodology*: N.Z., J.B., I.L., N.F., G.B., K.A.L., V.S., B.H., E.A.C., V.T., R.H.J.M.K., and S.M.H.
- •

  *Project administration*: N.Z., I.L., N.F., J.K., G.B., V.T., R.H.J.M.K., and S.M.H.
- •

  *Resources*: I.L., N.F., and K.A.L.
- •

  *Software*: N.Z., J.B., I.L., N.F., G.B., K.A.L., V.S., and B.H.
- •

  *Supervision*: I.L., J.K., G.B., E.A.C., V.T., R.H.J.M.K., and S.M.H.
- •

  *Validation*: N.Z., J.B., N.F., G.B., V.T., R.H.J.M.K., and S.M.H.
- •

  *Visualization*: N.Z., J.B., G.B., and S.M.H.
- •

  *Writing - original draft*: N.Z., J.B., G.B., R.H.J.M.K., and S.M.H.
- •

  *Writing - review & editing*: N.Z., J.B., I.L., N.F., J.K., G.B., K.A.L., V.S., B.H., E.A.C., V.T., R.H.J.M.K., and S.M.H.

#### 13.3 Corresponding authors

Correspondence to Nikolas Zöller, Ralf H.J.M. Kurvers or Stefan M. Herzog.

### 14 Ethics declarations

We did not collect data explicitly for this study; instead, we analyzed existing data provided by Human Dx. When users sign up on the Human Dx platform, they give consent for their data to be processed and analyzed for research purposes. We consulted the Ethics Committee of the Max-Planck Institute for Human Development and one of their representatives provided guidelines for study procedures. We have complied with all relevant ethical regulations regarding data protection.

#### 14.1 Competing interests

Irving Lin and Jayanth Komarneni have personal financial interests in Human Dx. Nathan Fu, Gioele Barabucci and Kyle A. Laskowski are Human Dx consultants.
Victor Shia, Benjamin Harack and Eugene A. Chu were previously employed by Human Dx.

### 15 Extended data figures and tables

![Refer to caption](https://arxiv.org/html/2406.14981v1/hdx_cv_pictogram3.png)


Figure S1: Illustration of LLM prompt engineering and validation method. We nested our prompt engineering and Weighted Majority Voting Ensemble (WMVE) [Dogan and Birant (2019)](https://arxiv.org/html/2406.14981v1#bib.bib43) sequence in a five-fold cross-validation procedure. First, we determined which prompt performed best for each LLM in the training fold (one-fifth of the data; see Methods). Second, we calculated weights for each member of the ensemble, also using the training fold. The weights were then used to aggregate collective diagnoses and evaluate the ensemble’s performance on the remaining folds (four-fifths of the data). This process yields one result per fold, of which the averages are reported in the main text. We repeated this procedure for every metric reported in the main text (i.e., top-1, top-3, top-5 and MRR).

![Refer to caption](https://arxiv.org/html/2406.14981v1/figures/specialties_machine_combos.png)


Figure S2: Cross-validated performance of five individual LLMs and ensembles of all possible combinations of LLMs for the five most common specialties in the dataset. Across all medical specialties, combining several LLMs into a collective increased diagnostic accuracy relative to the best-performing individual LLM across all performance metrics except top-$1$. In most cases, the best results were obtained by combining all LLMs.

![Refer to caption](https://arxiv.org/html/2406.14981v1/figures/percentage_humans_outperformed_annotated.png)


Figure S3: Cross-validated relative performance of individual humans and LLMs. a, Percentage of physicians outperformed by an LLM across the cases they solved. The analysis was limited to physicians who diagnosed five or more cases (n = 1,997). A physician was outperformed on a case if the LLM (ensemble) placed the correct diagnosis at a higher rank; a physician was counted as outperformed overall if they were outperformed more often than they outperformed the LLM (ensemble) across their set of solved cases. b, Percentage of physicians outperformed by or tied with an LLM (ensemble) across the cases they solved.
c and d, Results for the LLM ensemble only. c, Histogram of the number of physicians outperformed on a certain percentage of cases by the LLM ensemble. d, Histogram of the number of physicians outperformed or tied with on a certain percentage of cases by the LLM ensemble.
c and d differ considerably due to the significant number of ties on the case level.

![Refer to caption](https://arxiv.org/html/2406.14981v1/figures/specialties_machine_hybrid_combos.png)


Figure S4: Cross-validated performance of human-only ensembles and hybrid ensembles of humans and LLMs for the five most common specialties in the dataset.
Across all medical specialties, combining humans and LLMs increased diagnostic accuracy relative to individual humans or LLMs. Increasing the number of humans in the ensemble generally increased performance. The best top-$5$ and top-$3$ accuracies were achieved by adding all LLMs to the ensemble, the best top-$1$ or MRR performance was achieved by adding either all LLMs or, in some cases, the best-performing individual LLM.

![Refer to caption](https://arxiv.org/html/2406.14981v1/figures/acc_metricgrid_weightedLLMsStudents.png)


Figure S5: 
Cross-validated performance of medical-student-only ensembles and hybrid ensembles of medical students and LLMs.
Panels show performance for four outcome metrics ($y$ axes): Top-$k$ indicates the proportion of cases for which the correct diagnosis was among the $k$ top-ranked diagnoses (for $k=\{1,3,5\}$); MRR shows the mean reciprocal rank of correct diagnoses across cases (see eq. [1](https://arxiv.org/html/2406.14981v1#S3.E1 "In 3 Aggregating LLMs increases performance in open-ended medical diagnostics ‣ Human-AI collectives produce the most accurate differential diagnoses")).
The individual performance of the five LLMs (and their combined performance in an all-LLMs ensemble) is shown as the left-most square of each color in each panel.
The $x$ axis shows the number of medical students added to individual LLMs or an all-LLMs ensemble. For comparison, the gray boxes and lines show the performance of physicians on the same set of cases. Results are based on 974 medical cases, each diagnosed by at least five medical students.

![Refer to caption](https://arxiv.org/html/2406.14981v1/figures/complementarity_LLMs_LLMs.png)


Figure S6: Complementarity of solutions among LLMs: Rank of correct diagnoses within the differential diagnoses of LLMs.
Panels show, for each of the ten possible pairs of LLMs, matrices with the percentages of cases for all 36 combinations of the
LLM at the top ($x$ axis) and LLMs on the side ($y$ axis) assigning the correct diagnosis a particular rank (i.e., rank 1, 2, 3, 4, 5, or not ranked). The highlighted diagonal shows cases where LLMs assigned the same rank to the correct diagnosis. Results were extracted from the cross-validation procedure by recording the frequencies with which
the LLMs assigned the correct diagnosis the same or a different rank, averaged across all cases and the five folds (see Methods). Note that due to rounding to integers, there may be small inconsistencies when summing rows or columns across matrices.

![Refer to caption](https://arxiv.org/html/2406.14981v1/figures/agreement_physicians_LLMs_5x5.png)


Figure S7: Agreement among physicians and LLMs.
Panels show the percentage of cases in which the same diagnoses were assigned to a particular rank combination, comparing individual physicians and 5-physician ensembles to LLMs.
a, Overall agreement, regardless of whether the correct diagnosis was included in a particular rank combination.
b, Agreement when both diagnosticians were incorrect for a rank combination.
Results were extracted from the cross-validation procedure by recording the frequencies with which physicians and LLMs assigned the same diagnosis to a rank combination, averaged across all cases and the five folds (see Methods).

![Refer to caption](https://arxiv.org/html/2406.14981v1/figures/agreement_LLMs_LLMs_5x5ab.png)


Figure S8: Agreement among LLMs
Panels show the percentage of cases in which the same diagnoses were assigned to a particular rank combination, comparing different LLMs to each other.
a, Overall agreement, regardless of whether the correct diagnosis was included in a particular rank combination.
b, Agreement when both LLMs were incorrect for a rank combination.
Results were extracted from the cross-validation procedure by recording the frequencies with LLMs assigned the same diagnosis to a rank combination, averaged across all cases and the five folds (see Methods).

Figure S9: Comparison of individual human performance across tenure levels. a, Density estimates of individual MRR values ($x$ axis) for humans who solved at least five cases by tenure level. Vertical lines represent median MRR values within the tenure level. As the performance distributions of the three most experienced tenure levels (i.e., attending physicians, fellows, and resident physicians, representing senior doctors, doctors undergoing specialized training, and doctors in training, respectively) were similar, we combined these three groups. b, Comparing the pooled performance of physicians with that of medical students. For each case, the mean MRR across all physicians and all medical students was calculated. The distribution shows the difference in MRR between the two groups at the case level, with positive (negative) values indicating higher MRR for physicians (students). Physicians and students showed no difference in MRR in many cases, but the MRR for physicians was generally higher MRR than that for medical students.

![Refer to caption](https://arxiv.org/html/2406.14981v1/figures/acc_metricgrid_weighted_vs_no_weights_panel_annotated.png)


Figure S10: Effect of weighting on cross-validated performance of LLM and hybrid human–LLM ensembles.
a, Cross-validated performance ($y$ axis) of five individual LLMs and ensembles of all possible combinations of LLMs with equal weights applied in the aggregation step.
b, Signed difference in performance between weighted and unweighted aggregation ($y$ axis); higher values indicate greater gains from applying weights.
c, Cross-validated performance of hybrid physician-LLM ensembles with equal weights applied in the aggregation step ($y$ axis).
d, Signed difference in performance between weighted and unweighted aggregation for hybrid human–LLM ensembles.
For most LLM- and hybrid ensembles, using the Weighted Majority Voting Ensemble approach [Dogan and Birant (2019)](https://arxiv.org/html/2406.14981v1#bib.bib43) increased diagnostic accuracy, particularly for top-$1$ and MRR.

### 16 Supplementary information

Table S1: LLM ensemble performance based on 2,133 case vignettes. Results reported are the averages of five-fold cross validation, where one fold was used to determine the best prompt and weights for each LLM according to WMVE (see Methods) and the other four folds were used to calculate performance.

| Combo | Top 1 | Top 3 | Top 5 | MRR |
| --- | --- | --- | --- | --- |
| Claude 3 | 0.487 | 0.618 | 0.650 | 0.553 |
| Claude 3—Llama 2 70B | 0.487 | 0.617 | 0.669 | 0.556 |
| Claude 3—Llama 2 70B—Mistral Large | 0.477 | 0.630 | 0.690 | 0.554 |
| Claude 3—Mistral Large | 0.487 | 0.628 | 0.684 | 0.558 |
| Gemini Pro | 0.408 | 0.519 | 0.554 | 0.464 |
| Gemini Pro—Claude 3 | 0.486 | 0.633 | 0.693 | 0.562 |
| Gemini Pro—Claude 3—Llama 2 70B | 0.473 | 0.639 | 0.696 | 0.558 |
| Gemini Pro—Claude 3—Llama 2 70B—Mistral Large | 0.469 | 0.645 | 0.705 | 0.557 |
| Gemini Pro—Claude 3—Mistral Large | 0.474 | 0.643 | 0.703 | 0.561 |
| Gemini Pro—Llama 2 70B | 0.408 | 0.541 | 0.601 | 0.477 |
| Gemini Pro—Llama 2 70B—Mistral Large | 0.421 | 0.572 | 0.637 | 0.500 |
| Gemini Pro—Mistral Large | 0.415 | 0.569 | 0.630 | 0.493 |
| Llama 2 70B | 0.231 | 0.392 | 0.448 | 0.317 |
| Llama 2 70B—Mistral Large | 0.387 | 0.523 | 0.596 | 0.461 |
| Mistral Large | 0.387 | 0.519 | 0.571 | 0.456 |
| GPT-4 | 0.444 | 0.587 | 0.627 | 0.514 |
| GPT-4—Claude 3 | 0.487 | 0.645 | 0.698 | 0.565 |
| GPT-4—Claude 3—Llama 2 70B | 0.486 | 0.643 | 0.706 | 0.565 |
| GPT-4—Claude 3—Llama 2 70B—Mistral Large | 0.481 | 0.647 | 0.712 | 0.565 |
| GPT-4—Claude 3—Mistral Large | 0.486 | 0.649 | 0.710 | 0.567 |
| GPT-4—Gemini Pro | 0.449 | 0.621 | 0.676 | 0.534 |
| GPT-4—Gemini Pro—Claude 3 | 0.488 | 0.655 | 0.713 | 0.573 |
| GPT-4—Gemini Pro—Claude 3—Llama 2 70B | 0.486 | 0.655 | 0.718 | 0.572 |
| GPT-4—Gemini Pro—Claude 3—Llama 2 70B—Mistral Large | 0.482 | 0.655 | 0.718 | 0.569 |
| GPT-4—Gemini Pro—Claude 3—Mistral Large | 0.484 | 0.655 | 0.717 | 0.570 |
| GPT-4—Gemini Pro—Llama 2 70B | 0.445 | 0.618 | 0.682 | 0.534 |
| GPT-4—Gemini Pro—Llama 2 70B—Mistral Large | 0.448 | 0.622 | 0.687 | 0.536 |
| GPT-4—Gemini Pro—Mistral Large | 0.447 | 0.619 | 0.683 | 0.535 |
| GPT-4—Llama 2 70B | 0.444 | 0.586 | 0.649 | 0.519 |
| GPT-4—Llama 2 70B—Mistral Large | 0.440 | 0.607 | 0.671 | 0.523 |
| GPT-4—Mistral Large | 0.439 | 0.606 | 0.663 | 0.520 |


Table S2: LLM performance per prompt and accuracy metric on the whole dataset of 2,133 cases. Note that in the cross-validation results presented in the main text, prompts were selected on a subset (one fold) of these cases.

| Prompt | MRR | Top 1 | Top 3 | Top 5 |
| --- | --- | --- | --- | --- |
| Claude 3 | | | | |
| base\_common | 0.499 | 0.441 | 0.557 | 0.585 |
| base\_common\_fewshot | 0.558 | 0.494 | 0.622 | 0.650 |
| base\_common\_selfconsistent | 0.509 | 0.449 | 0.568 | 0.594 |
| base\_common\_selfconsistent\_fewshot | 0.554 | 0.490 | 0.619 | 0.645 |
| base\_impersonation\_common | 0.492 | 0.433 | 0.550 | 0.578 |
| base\_impersonation\_common\_fewshot | 0.553 | 0.488 | 0.617 | 0.646 |
| base\_impersonation\_common\_selfconsistent | 0.501 | 0.440 | 0.562 | 0.586 |
| base\_impersonation\_common\_selfconsistent\_fewshot | 0.557 | 0.492 | 0.622 | 0.651 |
| base\_impersonation\_sct | 0.454 | 0.379 | 0.526 | 0.568 |
| base\_impersonation\_sct\_fewshot | 0.543 | 0.471 | 0.607 | 0.654 |
| base\_impersonation\_sct\_selfconsistent | 0.469 | 0.396 | 0.542 | 0.579 |
| base\_impersonation\_sct\_selfconsistent\_fewshot | 0.539 | 0.465 | 0.608 | 0.649 |
| base\_sct | 0.453 | 0.379 | 0.525 | 0.565 |
| base\_sct\_fewshot | 0.549 | 0.478 | 0.620 | 0.658 |
| base\_sct\_selfconsistent | 0.460 | 0.388 | 0.529 | 0.571 |
| base\_sct\_selfconsistent\_fewshot | 0.542 | 0.468 | 0.613 | 0.651 |
| Gemini Pro | | | | |
| base\_common | 0.386 | 0.339 | 0.430 | 0.458 |
| base\_common\_fewshot | 0.462 | 0.411 | 0.508 | 0.539 |
| base\_common\_selfconsistent | 0.391 | 0.346 | 0.432 | 0.460 |
| base\_common\_selfconsistent\_fewshot | 0.466 | 0.413 | 0.513 | 0.548 |
| base\_impersonation\_common | 0.391 | 0.343 | 0.436 | 0.463 |
| base\_impersonation\_common\_fewshot | 0.450 | 0.395 | 0.499 | 0.533 |
| base\_impersonation\_common\_selfconsistent | 0.398 | 0.350 | 0.443 | 0.470 |
| base\_impersonation\_common\_selfconsistent\_fewshot | 0.457 | 0.401 | 0.505 | 0.545 |
| base\_impersonation\_sct | 0.402 | 0.328 | 0.472 | 0.515 |
| base\_impersonation\_sct\_fewshot | 0.465 | 0.407 | 0.519 | 0.557 |
| base\_impersonation\_sct\_selfconsistent | 0.413 | 0.341 | 0.482 | 0.522 |
| base\_impersonation\_sct\_selfconsistent\_fewshot | 0.465 | 0.403 | 0.523 | 0.559 |
| base\_sct | 0.406 | 0.335 | 0.472 | 0.512 |
| base\_sct\_fewshot | 0.470 | 0.412 | 0.523 | 0.559 |
| base\_sct\_selfconsistent | 0.423 | 0.354 | 0.487 | 0.529 |
| base\_sct\_selfconsistent\_fewshot | 0.468 | 0.408 | 0.523 | 0.558 |
| Llama 2 70B | | | | |
| base\_common | 0.311 | 0.225 | 0.387 | 0.446 |
| base\_common\_fewshot | 0.271 | 0.228 | 0.305 | 0.339 |
| base\_common\_selfconsistent | 0.315 | 0.231 | 0.389 | 0.450 |
| base\_common\_selfconsistent\_fewshot | 0.285 | 0.224 | 0.335 | 0.377 |
| base\_impersonation\_common | 0.296 | 0.211 | 0.373 | 0.431 |
| base\_impersonation\_common\_fewshot | 0.278 | 0.217 | 0.331 | 0.372 |
| base\_impersonation\_common\_selfconsistent | 0.303 | 0.215 | 0.383 | 0.440 |
| base\_impersonation\_common\_selfconsistent\_fewshot | 0.284 | 0.208 | 0.348 | 0.401 |
| base\_impersonation\_sct | 0.305 | 0.221 | 0.381 | 0.438 |
| base\_impersonation\_sct\_fewshot | 0.231 | 0.146 | 0.310 | 0.364 |
| base\_impersonation\_sct\_selfconsistent | 0.312 | 0.228 | 0.388 | 0.446 |
| base\_impersonation\_sct\_selfconsistent\_fewshot | 0.246 | 0.154 | 0.332 | 0.386 |
| base\_sct | 0.312 | 0.228 | 0.386 | 0.446 |
| base\_sct\_fewshot | 0.228 | 0.164 | 0.287 | 0.331 |
| base\_sct\_selfconsistent | 0.323 | 0.238 | 0.401 | 0.455 |
| base\_sct\_selfconsistent\_fewshot | 0.263 | 0.184 | 0.335 | 0.386 |
| Mistral Large | | | | |
| base\_common | 0.428 | 0.347 | 0.505 | 0.546 |
| base\_common\_fewshot | 0.468 | 0.395 | 0.532 | 0.581 |
| base\_common\_selfconsistent | 0.434 | 0.353 | 0.511 | 0.550 |
| base\_common\_selfconsistent\_fewshot | 0.467 | 0.395 | 0.532 | 0.580 |
| base\_impersonation\_common | 0.428 | 0.356 | 0.493 | 0.536 |
| base\_impersonation\_common\_fewshot | 0.460 | 0.390 | 0.525 | 0.570 |
| base\_impersonation\_common\_selfconsistent | 0.428 | 0.358 | 0.493 | 0.532 |
| base\_impersonation\_common\_selfconsistent\_fewshot | 0.463 | 0.391 | 0.528 | 0.577 |
| base\_impersonation\_sct | 0.321 | 0.237 | 0.400 | 0.451 |
| base\_impersonation\_sct\_fewshot | 0.445 | 0.373 | 0.505 | 0.561 |
| base\_impersonation\_sct\_selfconsistent | 0.326 | 0.244 | 0.409 | 0.450 |
| base\_impersonation\_sct\_selfconsistent\_fewshot | 0.446 | 0.372 | 0.508 | 0.566 |
| base\_sct | 0.347 | 0.256 | 0.435 | 0.484 |
| base\_sct\_fewshot | 0.447 | 0.372 | 0.512 | 0.568 |
| base\_sct\_selfconsistent | 0.355 | 0.261 | 0.442 | 0.498 |
| base\_sct\_selfconsistent\_fewshot | 0.449 | 0.374 | 0.515 | 0.570 |
| GPT-4 | | | | |
| base\_common | 0.478 | 0.412 | 0.541 | 0.577 |
| base\_common\_fewshot | 0.519 | 0.451 | 0.584 | 0.616 |
| base\_common\_selfconsistent | 0.487 | 0.423 | 0.548 | 0.580 |
| base\_common\_selfconsistent\_fewshot | 0.516 | 0.446 | 0.584 | 0.618 |
| base\_impersonation\_common | 0.462 | 0.396 | 0.527 | 0.557 |
| base\_impersonation\_common\_fewshot | 0.503 | 0.434 | 0.570 | 0.600 |
| base\_impersonation\_common\_selfconsistent | 0.471 | 0.409 | 0.531 | 0.562 |
| base\_impersonation\_common\_selfconsistent\_fewshot | 0.509 | 0.443 | 0.575 | 0.606 |
| base\_impersonation\_sct | 0.410 | 0.329 | 0.486 | 0.531 |
| base\_impersonation\_sct\_fewshot | 0.504 | 0.425 | 0.575 | 0.623 |
| base\_impersonation\_sct\_selfconsistent | 0.433 | 0.356 | 0.502 | 0.544 |
| base\_impersonation\_sct\_selfconsistent\_fewshot | 0.512 | 0.433 | 0.584 | 0.628 |
| base\_sct | 0.418 | 0.338 | 0.491 | 0.537 |
| base\_sct\_fewshot | 0.516 | 0.440 | 0.587 | 0.630 |
| base\_sct\_selfconsistent | 0.443 | 0.367 | 0.514 | 0.555 |
| base\_sct\_selfconsistent\_fewshot | 0.517 | 0.438 | 0.592 | 0.631 |

#### 16.1 Example case vignette

40 year old female presenting with chest pain
  
Symptom: Worsening chest pain

- •

  Onset: 2 weeks ago
- •

  Associated with: Cough, dyspnea, fever
- •

  Complicated by: Fatigue

Social history

- •

  Recent construction in Ohio

Physical exam

- •

  Lungs: Wheezing

Diagnostic: X-ray

- •

  Interpretation: Normal

#### 16.2 Verbatim text of LLM prompts

Below we list the text of the building blocks used to construct prompts for eliciting differential diagnoses. For all LLMs, we tested all feasible combinations of these building blocks. Diagnostic accuracies for each LLM and each prompt combination on the whole dataset of 2133 cases are presented in Extended Data Table [S2](https://arxiv.org/html/2406.14981v1#S16.T2 "Table S2 ‣ 16 Supplementary information ‣ 9.4 Weighted aggregation of LLMs and/or human inputs ‣ 9 Methods ‣ Human-AI collectives produce the most accurate differential diagnoses").

Base task:  Provide only the most probable differential diagnosis, no explanation, no recapitulation of the case information or task. Give a maximum of 5 answers, sorted by probability of being the correct diagnosis, most probable first, remove list numbering, and respond with each answer on a new line. Be as concise as possible, no need to be polite.

Impersonation: You are a medical expert diagnosing a patient.

Response format: common shorthand: In your answer use common shorthand non-abbreviated diagnoses.

Response format: SCT: In your answer provide only the appropriate SNOMED CT fully specified name, no id.

Self-consistency: Check that each differential diagnosis in your answer is consistent with each finding in the case description.

Few-shot prompt: Here are some examples of cases and their correct answers:
  
Case description: {case vignette}
  
Answer: {example solution} (5x)

The prompt used to have Anthropic Claude 3 Opus  assign a medical specialty to a case vignette was as follows:
  
In the list of medical specialties within the following <SP>\<SP>tags <SP>{specialties\_one\_line}<\SP>, each specialty is separated by a comma. You are given the following case in the <case>\<case>tags: <case>{case\_text}<\case>. Follow the steps provided: 1. Determine the top 3 choices for which specialties best fit the case. 2. Give your answer in an ordered numbered list starting with the most confident answer first. Only answer with the list. Do not provide any additional explanation.

## References

- Hong et al. (2024)

  Hong, G.,
  Gema, A.P.,
  Saxena, R.,
  Du, X.,
  Nie, P.,
  Zhao, Y.,
  Perez-Beltrachini, L.,
  Ryabinin, M.,
  He, X.,
  Fourrier, C.,
  Minervini, P.:
  The Hallucinations Leaderboard: An open effort to measure hallucinations in large language models.
  arXiv
  (2024).
  <https://arxiv.org/html/2404.05904v1>
- Ji et al. (2023)

  Ji, Z.,
  Lee, N.,
  Frieske, R.,
  Yu, T.,
  Su, D.,
  Xu, Y.,
  Ishii, E.,
  Bang, Y.J.,
  Madotto, A.,
  Fung, P.:
  Survey of hallucination in natural language generation.
  ACM Computing Surveys
  55(12),
  1–38
  (2023)
  <https://doi.org/10.1145/3571730>
- Pal et al. (2023)

  Pal, A.,
  Umapathi, L.K.,
  Sankarasubbu, M.:
  Med-HALT: Medical Domain Hallucination Test for large language models.
  arXiv
  (2023).
  <https://arxiv.org/abs/2307.15343>
- Tonmoy et al. (2024)

  Tonmoy, S.M.T.I.,
  Zaman, S.M.M.,
  Jain, V.,
  Rani, A.,
  Rawte, V.,
  Chadha, A.,
  Das, A.:
  A comprehensive survey of hallucination mitigation techniques in large language models.
  arXiv
  (2024).
  <http://arxiv.org/abs/2401.01313>
- Williams and Huckle (2024)

  Williams, S.,
  Huckle, J.:
  Easy problems that LLMs get wrong.
  arXiv
  (2024).
  <https://arxiv.org/html/2405.19616>
- Omiye et al. (2023)

  Omiye, J.A.,
  Lester, J.C.,
  Spichak, S.,
  Rotemberg, V.,
  Daneshjou, R.:
  Large language models propagate race-based medicine.
  npj Digital Medicine
  6(1),
  195
  (2023)
  <https://doi.org/10.1038/s41746-023-00939-z>
- Navigli et al. (2023)

  Navigli, R.,
  Conia, S.,
  Ross, B.:
  Biases in large language models: Origins, inventory, and discussion.
  Journal of Data and Information Quality
  15(2),
  1–21
  (2023)
  <https://doi.org/10.1145/3597307>
- Trianni et al. (2023)

  Trianni, V.,
  Nuzzolese, A.G.,
  Porciello, J.,
  Kurvers, R.H.J.M.,
  Herzog, S.M.,
  Barabucci, G.,
  Berditchevskaia, A.,
  Fung, F.:
  Hybrid collective intelligence for decision support in complex open-ended domains.
  In: Lukowicz, P.,
  Mayer, S.,
  Koch, J.,
  Shawe-Taylor, J.,
  Tiddi, I. (eds.)
  HHAI 2023: Augmenting Human Intellect.
  Frontiers in Artificial Intelligence and Applications,
  vol. 368,
  pp. 124–137.
  IOS Press,
  Amsterdam, Netherlands
  (2023).
  <https://doi.org/10.3233/FAIA230079>
- Makary and Daniel (2016)

  Makary, M.A.,
  Daniel, M.:
  Medical error: The third leading cause of death in the US.
  BMJ
  353,
  2139
  (2016)
  <https://doi.org/10.1136/bmj.i2139>
- Leape et al. (1991)

  Leape, L.L.,
  Brennan, T.A.,
  Laird, N.,
  Lawthers, A.G.,
  Localio, A.R.,
  Barnes, B.A.,
  Hebert, L.,
  Newhouse, J.P.,
  Weiler, P.C.,
  Hiatt, H.:
  The nature of adverse events in hospitalized patients: Results of the Harvard Medical Practice Study II.
  New England Journal of Medicine
  324(6),
  377–384
  (1991)
  <https://doi.org/10.1056/NEJM199102073240605>
- Graber et al. (2005)

  Graber, M.L.,
  Franklin, N.,
  Gordon, R.:
  Diagnostic error in internal medicine.
  Archives of Internal Medicine
  165(13),
  1493–1499
  (2005)
  <https://doi.org/10.1001/archinte.165.13.1493>
- Newman-Toker et al. (2024)

  Newman-Toker, D.E.,
  Nassery, N.,
  Schaffer, A.C.,
  Yu-Moe, C.W.,
  Clemens, G.D.,
  Wang, Z.,
  Zhu, Y.,
  Tehrani, A.S.S.,
  Fanai, M.,
  Hassoon, A.,
  Siegal, D.:
  Burden of serious harms from diagnostic error in the USA.
  BMJ Quality & Safety
  33(2),
  109–120
  (2024)
  <https://doi.org/10.1136/bmjqs-2021-014130>
- Basu et al. (2020)

  Basu, K.,
  Sinha, R.,
  Ong, A.,
  Basu, T.:
  Artificial intelligence: How is it changing medical sciences and its future?
  Indian Journal of Dermatology
  65(5),
  365–370
  (2020)
  <https://doi.org/10.4103/ijd.IJD_421_20>
- Mirbabaie et al. (2021)

  Mirbabaie, M.,
  Stieglitz, S.,
  Frick, N.R.:
  Artificial intelligence in disease diagnostics: A critical review and classification on the current state of research guiding future direction.
  Health and Technology
  11(4),
  693–731
  (2021)
  <https://doi.org/10.1007/s12553-021-00555-5>
- Rajpurkar et al. (2022)

  Rajpurkar, P.,
  Chen, E.,
  Banerjee, O.,
  Topol, E.J.:
  AI in health and medicine.
  Nature Medicine
  28(1),
  31–38
  (2022)
  <https://doi.org/10.1038/s41591-021-01614-0>
- Aggarwal et al. (2021)

  Aggarwal, R.,
  Sounderajah, V.,
  Martin, G.,
  Ting, D.S.W.,
  Karthikesalingam, A.,
  King, D.,
  Ashrafian, H.,
  Darzi, A.:
  Diagnostic accuracy of deep learning in medical imaging: A systematic review and meta-analysis.
  npj Digital Medicine
  4(1),
  65
  (2021)
  <https://doi.org/10.1038/s41746-021-00438-z>
- Dembrower et al. (2023)

  Dembrower, K.,
  Crippa, A.,
  Colón, E.,
  Eklund, M.,
  Strand, F.:
  Artificial intelligence for breast cancer detection in screening mammography in Sweden: A prospective, population-based, paired-reader, non-inferiority study.
  The Lancet Digital Health
  5(10),
  703–711
  (2023)
  <https://doi.org/10.1016/S2589-7500(23)00153-X>
- Lu et al. (2024)

  Lu, M.Y.,
  Chen, B.,
  Williamson, D.F.K.,
  Chen, R.J.,
  Zhao, M.,
  Chow, A.K.,
  Ikemura, K.,
  Kim, A.,
  Pouli, D.,
  Patel, A.,
  Soliman, A.,
  Chen, C.,
  Ding, T.,
  Wang, J.J.,
  Gerber, G.,
  Liang, I.,
  Le, L.P.,
  Parwani, A.V.,
  Weishaupt, L.L.,
  Mahmood, F.:
  A multimodal generative AI copilot for human pathology.
  Nature,
  1–3
  (2024)
  <https://doi.org/10.1038/s41586-024-07618-3> .
  Accessed 2024-06-14
- Moor et al. (2023)

  Moor, M.,
  Banerjee, O.,
  Abad, Z.S.H.,
  Krumholz, H.M.,
  Leskovec, J.,
  Topol, E.J.,
  Rajpurkar, P.:
  Foundation models for generalist medical artificial intelligence.
  Nature
  616(7956),
  259–265
  (2023)
  <https://doi.org/10.1038/s41586-023-05881-4>
- Singhal et al. (2023)

  Singhal, K.,
  Azizi, S.,
  Tu, T.,
  Mahdavi, S.S.,
  Wei, J.,
  Chung, H.W.,
  Scales, N.,
  Tanwani, A.,
  Cole-Lewis, H.,
  Pfohl, S.,
  Payne, P.,
  Seneviratne, M.,
  Gamble, P.,
  Kelly, C.,
  Babiker, A.,
  Schärli, N.,
  Chowdhery, A.,
  Mansfield, P.,
  Demner-Fushman, D.,
  Agüera y Arcas, B.,
  Webster, D.,
  Corrado, G.S.,
  Matias, Y.,
  Chou, K.,
  Gottweis, J.,
  Tomasev, N.,
  Liu, Y.,
  Rajkomar, A.,
  Barral, J.,
  Semturs, C.,
  Karthikesalingam, A.,
  Natarajan, V.:
  Large language models encode clinical knowledge.
  Nature
  620(7972),
  172–180
  (2023)
  <https://doi.org/10.1038/s41586-023-06291-2>
- Jiang et al. (2023)

  Jiang, L.Y.,
  Liu, X.C.,
  Nejatian, N.P.,
  Nasir-Moin, M.,
  Wang, D.,
  Abidin, A.,
  Eaton, K.,
  Riina, H.A.,
  Laufer, I.,
  Punjabi, P.,
  Miceli, M.,
  Kim, N.C.,
  Orillac, C.,
  Schnurman, Z.,
  Livia, C.,
  Weiss, H.,
  Kurland, D.,
  Neifert, S.,
  Dastagirzada, Y.,
  Kondziolka, D.,
  Cheung, A.T.M.,
  Yang, G.,
  Cao, M.,
  Flores, M.,
  Costa, A.B.,
  Aphinyanaphongs, Y.,
  Cho, K.,
  Oermann, E.K.:
  Health system-scale language models are all-purpose prediction engines.
  Nature
  619(7969),
  357–362
  (2023)
  <https://doi.org/10.1038/s41586-023-06160-y>
- Takita et al. (2024)

  Takita, H.,
  Walston, S.L.,
  Tatekawa, H.,
  Saito, K.,
  Tsujimoto, Y.,
  Miki, Y.,
  Ueda, D.:
  Diagnostic performance of generative AI and physicians: A systematic review and meta-analysis.
  Cold Spring Harbor Laboratory Press
  (2024).
  <https://doi.org/10.1101/2024.01.20.24301563>
- Chakravorti (2024, May 3)

  Chakravorti, B.:
  AI’s trust problem.
  Harvard Business Review
  (2024, May 3).
  <https://hbr.org/2024/05/ais-trust-problem>
- Lenat and Marcus (2023)

  Lenat, D.,
  Marcus, G.:
  Getting from generative AI to trustworthy AI: What LLMs might learn from Cyc.
  arXiv
  (2023).
  <https://arxiv.org/abs/2308.04445>
- Cowls et al. (2023)

  Cowls, J.,
  Tsamados, A.,
  Taddeo, M.,
  Floridi, L.:
  The AI gambit: Leveraging artificial intelligence to combat climate change—opportunities, challenges, and recommendations.
  AI & SOCIETY
  38(1),
  283–307
  (2023)
  <https://doi.org/10.1007/s00146-021-01294-x>
- Woolley et al. (2010)

  Woolley, A.W.,
  Chabris, C.F.,
  Pentland, A.,
  Hashmi, N.,
  Malone, T.W.:
  Evidence for a collective intelligence factor in the performance of human groups.
  Science
  330(6004),
  686–688
  (2010)
  <https://doi.org/10.1126/science.1193147>
- Woolley and Gupta (2024)

  Woolley, A.W.,
  Gupta, P.:
  Understanding collective intelligence: Investigating the role of collective memory, attention, and reasoning processes.
  Perspectives on Psychological Science
  19(2),
  344–354
  (2024)
  <https://doi.org/10.1177/17456916231191534>
- Hasan et al. (2024)

  Hasan, E.,
  Duhaime, E.,
  Trueblood, J.S.:
  Boosting wisdom of the crowd for medical image annotation using training performance and task features.
  Cognitive Research: Principles and Implications
  9(1),
  31
  (2024)
  <https://doi.org/10.1186/s41235-024-00558-6>
- Hautz et al. (2015)

  Hautz, W.E.,
  Kämmer, J.E.,
  Schauber, S.K.,
  Spies, C.D.,
  Gaissmaier, W.:
  Diagnostic performance by medical students working individually or in teams.
  JAMA
  313(3),
  303–304
  (2015)
  <https://doi.org/10.1001/jama.2014.15770>
- Kattan et al. (2016)

  Kattan, M.W.,
  O’Rourke, C.,
  Yu, C.,
  Chagin, K.:
  The wisdom of crowds of doctors: Their average predictions outperform their individual ones.
  Medical Decision Making
  36(4),
  536–540
  (2016)
  <https://doi.org/10.1177/0272989X15581615>
- Kurvers et al. (2016)

  Kurvers, R.H.,
  Herzog, S.M.,
  Hertwig, R.,
  Krause, J.,
  Carney, P.A.,
  Bogart, A.,
  Argenziano, G.,
  Zalaudek, I.,
  Wolf, M.:
  Boosting medical diagnostics by pooling independent judgments.
  Proceedings of the National Academy of Sciences
  113(31),
  8777–8782
  (2016)
  <https://doi.org/10.1073/pnas.1601827113>
- Kämmer et al. (2017)

  Kämmer, J.E.,
  Hautz, W.E.,
  Herzog, S.M.,
  Kunina-Habenicht, O.,
  Kurvers, R.H.:
  The potential of collective intelligence in emergency medicine: Pooling medical students’ independent decisions improves diagnostic performance.
  Medical Decision Making
  37(6),
  715–724
  (2017)
  <https://doi.org/10.1177/0272989X17696998>
- Kurvers et al. (2018)

  Kurvers, R.H.,
  De Zoete, A.,
  Bachman, S.L.,
  Algra, P.R.,
  Ostelo, R.:
  Combining independent decisions increases diagnostic accuracy of reading lumbosacral radiographs and magnetic resonance imaging.
  PloS One
  13(4),
  0194128
  (2018)
  <https://doi.org/10.1371/journal.pone.0194128>
- Blanchard et al. (2024)

  Blanchard, M.D.,
  Herzog, S.M.,
  Kämmer, J.E.,
  Zöller, N.,
  Kostopoulou, O.,
  Kurvers, R.H.J.M.:
  Collective intelligence increases diagnostic accuracy in a general practice setting.
  Medical Decision Making
  44(4),
  451–462
  (2024)
  <https://doi.org/10.1177/0272989X241241001>
- Barnett et al. (2019)

  Barnett, M.L.,
  Boddupalli, D.,
  Nundy, S.,
  Bates, D.W.:
  Comparative accuracy of diagnosis by collective intelligence of multiple physicians vs individual physicians.
  JAMA Network Open
  2(3),
  190096
  (2019)
  <https://doi.org/10.1001/jamanetworkopen.2019.0096>
- Kurvers et al. (2023)

  Kurvers, R.H.J.M.,
  Nuzzolese, A.G.,
  Russo, A.,
  Barabucci, G.,
  Herzog, S.M.,
  Trianni, V.:
  Automating hybrid collective intelligence in open-ended medical diagnostics.
  Proceedings of the National Academy of Sciences
  120(34),
  2221473120
  (2023)
  <https://doi.org/10.1073/pnas.2221473120>
- (37)

  Kuncheva, L.I.:
  Combining Pattern Classifiers: Methods and Algorithms,
  2. ed edn.
  Wiley.
  <https://doi.org/10.1002/9781118914564>
- Mienye and Sun (2022)

  Mienye, I.D.,
  Sun, Y.:
  A survey of ensemble learning: Concepts, algorithms, applications, and prospects.
  IEEE Access
  10,
  99129–99149
  (2022)
  <https://doi.org/10.1109/ACCESS.2022.3207287>
- Jiang et al. (2023)

  Jiang, D.,
  Ren, X.,
  Lin, B.Y.:
  LLM-Blender: Ensembling large language models with pairwise ranking and generative fusion
  (2023).
  <https://arxiv.org/abs/2306.02561>
- Jiang et al. (2024)

  Jiang, A.Q.,
  Sablayrolles, A.,
  Roux, A.,
  Mensch, A.,
  Savary, B.,
  Bamford, C.,
  Chaplot, D.S.,
  Casas, D.,
  Hanna, E.B.,
  Bressand, F.,
  Lengyel, G.,
  Bour, G.,
  Lample, G.,
  Lavaud, L.R.,
  Saulnier, L.,
  Lachaux, M.-A.,
  Stock, P.,
  Subramanian, S.,
  Yang, S.,
  Antoniak, S.,
  Scao, T.L.,
  Gervet, T.,
  Lavril, T.,
  Wang, T.,
  Lacroix, T.,
  Sayed, W.E.:
  Mixtral of experts.
  arXiv
  (2024).
  <https://arxiv.org/abs/2401.04088>
- Yang et al. (2023)

  Yang, H.,
  Li, M.,
  Xiao, Y.,
  Zhou, H.,
  Zhang, R.,
  Fang, Q.:
  One LLM is not enough: Harnessing the power of ensemble learning for medical question answering.
  medRxiv
  (2023).
  <https://www.medrxiv.org/content/10.1101/2023.12.21.23300380v1>
- Barabucci et al. (2024)

  Barabucci, G.,
  Shia, V.,
  Chu, E.,
  Harack, B.,
  Fu, N.:
  Combining insights from multiple large language models improves diagnostic accuracy.
  arXiv
  (2024).
  <https://arxiv.org/abs/2402.08806>
- Dogan and Birant (2019)

  Dogan, A.,
  Birant, D.:
  A weighted majority voting ensemble approach for classification.
  In: 2019 4th International Conference on Computer Science and Engineering (UBMK).
  IEEE,
  Samsun, Turkey
  (2019).
  <https://doi.org/10.1109/ubmk.2019.8907028>
- Donnelly (2006)

  Donnelly, K.:
  SNOMED-CT: The advanced terminology and coding system for eHealth.
  Studies in Health Technology and Informatics
  121,
  279–290
  (2006)
- Voorhees (1999)

  Voorhees, E.M.:
  The TREC-8 question answering track report.
  In: Voorhees, E.M.,
  Harman, D.K. (eds.)
  Proceedings of The Eighth Text REtrieval Conference, TREC 1999.
  NIST Special Publication,
  vol. 500-246,
  pp. 77–82.
  National Institute of Standards and Technology (NIST),
  Gaithersburg, MA
  (1999).
  https://trec.nist.gov/pubs/trec8/t8\_proceedings.html
- Ladha (1992)

  Ladha, K.K.:
  The Condorcet jury theorem, free speech, and correlated votes.
  American Journal of Political Science
  36(3),
  617–634
  (1992)
  <https://doi.org/10.2307/2111584>
- Grofman et al. (1983)

  Grofman, B.,
  Owen, G.,
  Feld, S.L.:
  Thirteen theorems in search of the truth.
  Theory and Decision
  15(3),
  261–278
  (1983)
  <https://doi.org/10.1007/BF00125672>
- Tumer and Ghosh (1996)

  Tumer, K.,
  Ghosh, J.:
  Error correlation and error reduction in ensemble classifiers.
  Connection Science
  8(3-4),
  385–404
  (1996)
  <https://doi.org/10.1080/095400996116839>
- Marshall et al. (2019)

  Marshall, J.A.,
  Kurvers, R.H.,
  Krause, J.,
  Wolf, M.:
  Quorums enable optimal pooling of independent judgements in biological systems.
  eLife
  8,
  40368
  (2019)
  <https://doi.org/10.7554/eLife.40368>
- Steyvers et al. (2022)

  Steyvers, M.,
  Tejeda, H.,
  Kerrigan, G.,
  Smyth, P.:
  Bayesian modeling of human–AI complementarity.
  Proceedings of the National Academy of Sciences
  119(11),
  2111547119
  (2022)
  <https://doi.org/10.1073/pnas.211154711>
- Pescetelli (2021)

  Pescetelli, N.:
  A brief taxonomy of hybrid intelligence.
  Forecasting
  3(3),
  633–643
  (2021)
  <https://doi.org/10.3390/forecast3030039>
- Peeters et al. (2020)

  Peeters, M.M.M.,
  Diggelen, J.,
  Bosch, K.,
  Bronkhorst, A.,
  Neerincx, M.A.,
  Schraagen, J.M.,
  Raaijmakers, S.:
  Hybrid collective intelligence in a human–AI society.
  AI & Society
  36(1),
  217–238
  (2020)
  <https://doi.org/10.1007/s00146-020-01005-y>
- Steyvers and Kumar (2023)

  Steyvers, M.,
  Kumar, A.:
  Three challenges for AI-assisted decision-making.
  Perspectives on Psychological Science
  (2023)
  <https://doi.org/10.1177/17456916231181102>
- Benjamin et al. (2023)

  Benjamin, D.M.,
  Morstatter, F.,
  Abbas, A.E.,
  Abeliuk, A.,
  Atanasov, P.,
  Bennett, S.,
  Beger, A.,
  Birari, S.,
  Budescu, D.V.,
  Catasta, M.,
  Ferrara, E.,
  Haravitch, L.,
  Himmelstein, M.,
  Hossain, K.T.,
  Huang, Y.,
  Jin, W.,
  Joseph, R.,
  Leskovec, J.,
  Matsui, A.,
  Mirtaheri, M.,
  Ren, X.,
  Satyukov, G.,
  Sethi, R.,
  Singh, A.,
  Sosic, R.,
  Steyvers, M.,
  Szekely, P.A.,
  Ward, M.D.,
  Galstyan, A.:
  Hybrid forecasting of geopolitical events.
  AI Magazine
  44(1),
  112–128
  (2023)
  <https://doi.org/10.1002/aaai.12085>
- Peabody et al. (2004)

  Peabody, J.W.,
  Luck, J.,
  Glassman, P.,
  Jain, S.,
  Hansen, J.,
  Spell, M.,
  Lee, M.:
  Measuring the quality of physician practice by using clinical vignettes: A prospective validation study.
  Annals of Internal Medicine
  141(10),
  771–780
  (2004)
  <https://doi.org/10.7326/0003-4819-141-10-200411160-00008>
- Yabroff et al. (2020)

  Yabroff, K.R.,
  Reeder-Hayes, K.,
  Zhao, J.,
  Halpern, M.T.,
  Lopez, A.M.,
  Bernal-Mizrachi, L.,
  Collier, A.B.,
  Neuner, J.,
  Phillips, J.,
  Blackstock, W.,
  Patel, M.:
  Health insurance coverage disruptions and cancer care and outcomes: Systematic review of published research.
  JNCI: Journal of the National Cancer Institute
  112(7),
  671–687
  (2020)
  <https://doi.org/10.1093/jnci/djaa048>
- Hooker (2021)

  Hooker, S.:
  Moving beyond “algorithmic bias is a data problem”.
  Patterns
  2(4)
  (2021)
  <https://doi.org/10.1016/j.patter.2021.100241>
  [33982031](https://arxiv.org/abs/33982031)
- van Giffen et al. (2022)

  van Giffen, B.,
  Herhausen, D.,
  Fahse, T.:
  Overcoming the pitfalls and perils of algorithms: A classification of machine learning biases and mitigation methods.
  Journal of Business Research
  144,
  93–106
  (2022)
  <https://doi.org/10.1016/j.jbusres.2022.01.076>
- Wachter et al. (2021)

  Wachter, S.,
  Mittelstadt, B.,
  Russell, C.:
  Bias preservation in machine learning: The legality of fairness metrics under EU non-discrimination law.
  West Virginia Law Review
  123,
  735–790
  (2021)
  <https://doi.org/10.2139/ssrn.3792772>
- Weidinger et al. (2021)

  Weidinger, L.,
  Mellor, J.,
  Rauh, M.,
  Griffin, C.,
  Uesato, J.,
  Huang, P.-S.,
  Cheng, M.,
  Glaese, M.,
  Balle, B.,
  Kasirzadeh, A.,
  Kenton, Z.,
  Brown, S.,
  Hawkins, W.,
  Stepleton, T.,
  Biles, C.,
  Birhane, A.,
  Haas, J.,
  Rimell, L.,
  Hendricks, L.A.,
  Isaac, W.,
  Legassick, S.,
  Irving, G.,
  Gabriel, I.:
  Ethical and social risks of harm from language models.
  arXiv
  (2021).
  <http://arxiv.org/abs/2112.04359>
- Liang et al. (2023)

  Liang, P.,
  Bommasani, R.,
  Lee, T.,
  Tsipras, D.,
  Soylu, D.,
  Yasunaga, M.,
  Zhang, Y.,
  Narayanan, D.,
  Wu, Y.,
  Kumar, A.,
  Newman, B.,
  Yuan, B.,
  Yan, B.,
  Zhang, C.,
  Cosgrove, C.,
  Manning, C.D.,
  Ré, C.,
  Acosta-Navas, D.,
  Hudson, D.A.,
  Zelikman, E.,
  Durmus, E.,
  Ladhak, F.,
  Rong, F.,
  Ren, H.,
  Yao, H.,
  Wang, J.,
  Santhanam, K.,
  Orr, L.,
  Zheng, L.,
  Yuksekgonul, M.,
  Suzgun, M.,
  Kim, N.,
  Guha, N.,
  Chatterji, N.,
  Khattab, O.,
  Henderson, P.,
  Huang, Q.,
  Chi, R.,
  Xie, S.M.,
  Santurkar, S.,
  Ganguli, S.,
  Hashimoto, T.,
  Icard, T.,
  Zhang, T.,
  Chaudhary, V.,
  Wang, W.,
  Li, X.,
  Mai, Y.,
  Zhang, Y.,
  Koreeda, Y.:
  Holistic evaluation of language models.
  arXiv
  (2023).
  <https://arxiv.org/abs/2211.09110>
- Paulus and Kent (2020)

  Paulus, J.K.,
  Kent, D.M.:
  Predictably unequal: Understanding and addressing concerns that algorithmic clinical prediction may increase health disparities.
  npj Digital Medicine
  3(1),
  99
  (2020)
  <https://doi.org/10.1038/s41746-020-0304-9>
- Groh et al. (2024)

  Groh, M.,
  Badri, O.,
  Daneshjou, R.,
  Koochek, A.,
  Harris, C.,
  Soenksen, L.R.,
  Doraiswamy, P.M.,
  Picard, R.:
  Deep learning-aided decision support for diagnosis of skin disease across skin tones.
  Nature Medicine
  30(2),
  573–583
  (2024)
  <https://doi.org/10.1038/s41591-023-02728-3>
- Birhane et al. (2022)

  Birhane, A.,
  Isaac, W.,
  Prabhakaran, V.,
  Diaz, M.,
  Elish, M.C.,
  Gabriel, I.,
  Mohamed, S.:
  Power to the people? Opportunities and challenges for participatory AI.
  In: Proceedings of the 2nd ACM Conference on Equity and Access in Algorithms, Mechanisms, and Optimization.
  EAAMO ’22.
  Association for Computing Machinery,
  New York, NY
  (2022).
  <https://doi.org/10.1145/3551624.3555290>
- (65)

  Carusi, A.,
  Winter, P.D.,
  Armstrong, I.,
  Ciravegna, F.,
  Kiely, D.G.,
  Lawrie, A.,
  Lu, H.,
  Sabroe, I.,
  Swift, A.:
  Medical artificial intelligence is as much social as it is technological.
  Nature Machine Intelligence
  5(2),
  98–100
  <https://doi.org/10.1038/s42256-022-00603-3>
- Delgado et al. (2023)

  Delgado, F.,
  Yang, S.,
  Madaio, M.,
  Yang, Q.:
  The participatory turn in AI design: Theoretical foundations and the current state of practice.
  In: Proceedings of the 3rd ACM Conference on Equity and Access in Algorithms, Mechanisms, and Optimization.
  EAAMO ’23.
  Association for Computing Machinery,
  New York, NY
  (2023).
  <https://doi.org/10.1145/3617694.3623261>
- Wiens et al. (2019)

  Wiens, J.,
  Saria, S.,
  Sendak, M.,
  Ghassemi, M.,
  Liu, V.X.,
  Doshi-Velez, F.,
  Jung, K.,
  Heller, K.,
  Kale, D.,
  Saeed, M.,
  Ossorio, P.N.,
  Thadaney-Israni, S.,
  Goldenberg, A.:
  Do no harm: A roadmap for responsible machine learning for health care.
  Nature Medicine
  25(9),
  1337–1340
  (2019)
  <https://doi.org/10.1038/s41591-019-0548-6>
- Yao et al. (2023)

  Yao, S.,
  Yu, D.,
  Zhao, J.,
  Shafran, I.,
  Griffiths, T.L.,
  Cao, Y.,
  Narasimhan, K.:
  Tree of thoughts: Deliberate problem solving with large language models.
  arXiv
  (2023).
  <https://arxiv.org/abs/2305.10601>
- Long (2023)

  Long, J.:
  Large language model guided tree-of-thought.
  arXiv
  (2023).
  <https://arxiv.org/abs/2305.08291>
- Wang et al. (2022)

  Wang, X.,
  Wei, J.,
  Schuurmans, D.,
  Le, Q.,
  Chi, E.,
  Narang, S.,
  Chowdhery, A.,
  Zhou, D.:
  Self-consistency improves chain of thought reasoning in language models.
  arXiv
  (2022).
  <https://arxiv.org/abs/2203.11171>
- Nori et al. (2023)

  Nori, H.,
  Lee, Y.T.,
  Zhang, S.,
  Carignan, D.,
  Edgar, R.,
  Fusi, N.,
  King, N.,
  Larson, J.,
  Li, Y.,
  Liu, W.,
  Luo, R.,
  McKinney, S.M.,
  Ness, R.O.,
  Poon, H.,
  Qin, T.,
  Usuyama, N.,
  White, C.,
  Horvitz, E.:
  Can generalist foundation models outcompete special-purpose tuning? Case study in medicine.
  arXiv
  (2023).
  <https://arxiv.org/abs/2311.16452>
- Bhatia (2023)

  Bhatia, S.:
  Inductive reasoning in minds and machines.
  Psychological Review
  (2023)
  <https://doi.org/10.1037/rev0000446>
- Zhang et al. (2022)

  Zhang, Z.,
  Zhang, A.,
  Li, M.,
  Smola, A.:
  Automatic chain of thought prompting in large language models.
  arXiv
  (2022).
  <https://arxiv.org/abs/2210.03493>
- Fu et al. (2022)

  Fu, Y.,
  Peng, H.,
  Sabharwal, A.,
  Clark, P.,
  Khot, T.:
  Complexity-based prompting for multi-step reasoning.
  arXiv
  (2022).
  <https://arxiv.org/abs/2210.00720>
- Salewski et al. (2023)

  Salewski, L.,
  Alaniz, S.,
  Rio-Torto, I.,
  Schulz, E.,
  Akata, Z.:
  In-context impersonation reveals large language models’ strengths and biases.
  In: Oh, A.,
  Naumann, T.,
  Globerson, A.,
  Saenko, K.,
  Hardt, M.,
  Levine, S. (eds.)
  Advances in Neural Information Processing Systems (NeurIPS 2023),
  vol. 36,
  pp. 72044–72057.
  Curran Associates, Inc.,
  New Orleans, LA
  (2023)
- Brown et al. (2020)

  Brown, T.,
  Mann, B.,
  Ryder, N.,
  Subbiah, M.,
  Kaplan, J.D.,
  Dhariwal, P.,
  Neelakantan, A.,
  Shyam, P.,
  Sastry, G.,
  Askell, A.,
  Agarwal, S.,
  Herbert-Voss, A.,
  Krueger, G.,
  Henighan, T.,
  Child, R.,
  Ramesh, A.,
  Ziegler, D.M.,
  Wu, J.,
  Winter, C.,
  Hesse, C.,
  Chen, M.,
  Sigler, E.,
  Litwin, M.,
  Gray, S.,
  Chess, B.,
  Clark, J.,
  Berner, C.,
  McCandlish, S.,
  Radford, A.,
  Sutskever, I.,
  Amodei, D.:
  Language models are few-shot learners.
  arXiv
  (2020).
  <https://arxiv.org/abs/2005.14165>
- Gu et al. (2020)

  Gu, Y.,
  Tinn, R.,
  Cheng, H.,
  Lucas, M.,
  Usuyama, N.,
  Liu, X.,
  Naumann, T.,
  Gao, J.,
  Poon, H.:
  Domain-specific language model pretraining for biomedical natural language processing.
  arXiv
  (2020).
  <https://arxiv.org/abs/2007.15779>
- Deka et al. (2022)

  Deka, P.,
  Jurek-Loughrey, A.,
  Deepak, P.:
  Improved methods to aid unsupervised evidence-based fact checking for online health news.
  Journal of Data Intelligence
  3(4),
  474–504
  (2022)
  <https://doi.org/10.26421/JDI3.4-5>
- Holcombe et al. (2021)

  Holcombe, A.O.,
  Kovacs, M.,
  Aust, F.,
  Aczel, B.:
  Documenting contributions to scholarly articles using credit and tenzing.
  PLOS ONE
  15(12),
  1–11
  (2021)
  <https://doi.org/10.1371/journal.pone.0244611>
