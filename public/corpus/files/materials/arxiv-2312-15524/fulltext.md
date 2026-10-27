---
id: arxiv-2312-15524-text
type: material
title: 'The Challenge of Using LLMs to Simulate Human Behavior: A Causal Inference Perspective'
work_id: arxiv-2312-15524
source_url: https://arxiv.org/html/2312.15524v3
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять
  с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.
language: original
sha256_text: 6c4f560ac06ba12ae11ce207f6190ebf54c345fdba7038aaf0d06039f608b77a
---

> Источник: [https://arxiv.org/html/2312.15524v3](https://arxiv.org/html/2312.15524v3). Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.

# The Challenge of Using LLMs to Simulate Human Behavior: A Causal Inference Perspective

George Gui
  
Olivier Toubia
†

November 22, 2025

###### Abstract

Large Language Models (LLMs) have shown impressive potential to simulate human behavior. We identify a fundamental challenge in using them to simulate experiments: when LLM-simulated subjects are blind to the experimental design (as is standard practice with human subjects), variations in treatment systematically affect unspecified variables that should remain constant, violating the unconfoundedness assumption. Using demand estimation as a context and an actual experiment with 40 different products as a benchmark, we show this can lead to implausible results. While confounding may in principle be addressed by controlling for covariates, this can compromise ecological validity in the context of LLM simulations: controlled covariates become artificially salient in the simulated decision process.
We show formally that confoundness stems from ambiguous prompting strategies. Therefore, it can be addressed by developing unambiguous prompting strategies through unblinding, i.e., revealing the experiment design in LLM simulations. Our empirical results show that this strategy consistently enhances model performance across all tested models, including both out-of-box reasoning and non-reasoning models. We also show that it is a technique that complements fine-tuning: while fine-tuning can improve simulation performance, an unambiguous prompting strategy makes the predictions robust to the inclusion of irrelevant data in the fine-tuning process.

## 1 Introduction

The rise of large language models (LLMs) like GPT has sparked interest across disciplines (including marketing, computer science, economics, psychology and political science) in leveraging these tools to simulate how humans would respond to questions or stimuli in different contexts ([Aher et al., 2023](https://arxiv.org/html/2312.15524v3#bib.bib6); [Argyle et al., 2023](https://arxiv.org/html/2312.15524v3#bib.bib2); [Arora et al., 2024](https://arxiv.org/html/2312.15524v3#bib.bib14); [Binz et al., 2025](https://arxiv.org/html/2312.15524v3#bib.bib12); [Dillion et al., 2023](https://arxiv.org/html/2312.15524v3#bib.bib1); [Goli and Singh, 2024](https://arxiv.org/html/2312.15524v3#bib.bib15); [Hewitt et al., 2024](https://arxiv.org/html/2312.15524v3#bib.bib9); [Horton, 2023](https://arxiv.org/html/2312.15524v3#bib.bib5); [Park et al., 2023](https://arxiv.org/html/2312.15524v3#bib.bib3); [Qin et al., 2024](https://arxiv.org/html/2312.15524v3#bib.bib8); [Toubia et al., 2025](https://arxiv.org/html/2312.15524v3#bib.bib10)). If these LLM-simulated experiments accurately approximate real human behavior, the implications for both academics and practitioners are substantial. Academics could use LLMs for pilot experiments to pinpoint stimuli with significant impact, thus improving the efficiency of theory development and experimental design. In fact, several review articles have already been written about this recent yet fast-growing literature ([Bail, 2024](https://arxiv.org/html/2312.15524v3#bib.bib17); [Hutson and Mastin, 2023](https://arxiv.org/html/2312.15524v3#bib.bib18); [Sarstedt et al., 2024](https://arxiv.org/html/2312.15524v3#bib.bib16); [Simmons and Hare, 2023](https://arxiv.org/html/2312.15524v3#bib.bib19)). Firms could leverage these realistic simulations to explore different ideas and strategies, thereby improving customer insight and product development and optimizing marketing mix variables. Accordingly, in the recent past we have witnessed a large influx of firms offering services leveraging LLMs for customer insights (e.g., [Synthetic Users](https://www.syntheticusers.com/), [Outset AI](https://outset.ai/), [Nexxt](https://www.nexxt.in/), [Voxpopme](https://www.voxpopme.com/), [Evidenza](https://www.evidenza.ai/), [Expected Parrot](https://www.expectedparrot.com/), [Meaningful](https://meaningful.app/), [xPolls](https://xpolls.ai/), [Ipsos](https://www.ipsos.com/en-uk/large-language-models-market-research), [Pyxis](https://www.pyxis.ai/) and [Generation Lab](https://www.generationlab.org/)).

In this paper we focus specifically on leveraging LLMs to simulate counterfactual human behavior. Indeed, many practical applications of LLM simulations involve exploring counterfactual scenarios where one factor is altered while others remain constant. For example, what would happen to sales if prices were increased, how would consumers respond if a message were framed differently, or how would market dynamics shift with the introduction of a new product?

Early evidence on LLMs’ ability to simulate counterfactual human behavior is encouraging but mixed. For example, across 70 nationally-representative U.S. studies, [Hewitt et al. (2024)](https://arxiv.org/html/2312.15524v3#bib.bib9) find that the correlation between predicted and observed treatment effect size is large ($r=0.85$), but the raw predictions derived from GPT-4 systematically overestimated actual effects, leading to a large (relative to human forecasters) RMSE between predicted and observed effects. Across 11 behavioral economics experiments, [Toubia et al. (2025)](https://arxiv.org/html/2312.15524v3#bib.bib10) find that LLM simulations achieve high predictive accuracy at the individual level, but replicated only about half of the treatment effects observed at the aggregate level.

The ability of LLMs to simulate counterfactuals will likely improve as more powerful models are developed and the size and quality of the training and validation *data* continues to increase ([Ludwig et al., 2024](https://arxiv.org/html/2312.15524v3#bib.bib29); [Wang et al., 2024](https://arxiv.org/html/2312.15524v3#bib.bib32)). In this paper, we focus on another key factor, which may be in fact much easier and cheaper to address and which is under the control of any user: the *design* of LLM experiments. We identify a fundamental issue that arises when simply applying best practices from human experiments to LLM experiments. This issue is not specific to a particular model or training dataset and, if left unaddressed, it is likely to cause some amount of residual bias in LLM simulations even as accuracy improves with better models and data. At the same time, we find this issue can be alleviated by carefully adjusting experimental best practices to the world of LLMs.

In particular, many LLM simulations to date have relied on blinded experimental designs, where simulated participants are not aware of the experimental conditions or hypotheses being tested ([Argyle et al., 2023](https://arxiv.org/html/2312.15524v3#bib.bib2); [Brand et al., 2023](https://arxiv.org/html/2312.15524v3#bib.bib4); [Hewitt et al., 2024](https://arxiv.org/html/2312.15524v3#bib.bib9); [Horton, 2023](https://arxiv.org/html/2312.15524v3#bib.bib5); [Toubia et al., 2025](https://arxiv.org/html/2312.15524v3#bib.bib10)). Blinding1 has many benefits in human subject research: it reduces demand effects where participants modify their behavior based on what they believe researchers want to see, and it helps maintain ecological validity by presenting scenarios that more closely mirror real-world decision contexts. Following this convention, researchers typically construct LLM prompts that present a single scenario without revealing its experimental nature, similar to how human participants would experience the treatment condition in a between-subjects design.

Although blinding is considered a best practice in human-subject experiments, we show that it can have unintended consequences in LLM simulations, which may no longer justify its benefits. Unlike human subjects and contexts that exist independently of the experiment, LLM-simulated subjects and contexts are ”created on the fly” based on prompts.
When researchers make LLM-simulated “subjects” blind to experimental conditions, variations in the treatment can systematically affect unspecified variables that should remain constant, violating the unconfoundedness assumption typically required for valid causal inference.

We use demand estimation as an example to empirically illustrate this challenge. We conduct experiments simulating consumer demand for 40 different products at different price points. We find that altering the product’s price not only affects the purchase outcomes but also systematically influences other variables that should not be influenced by the treatment—such as pre-treatment variables (e.g., demographic characteristics and customer purchase history) and contextual factors (e.g., price of competing products). This unintended variation in unspecified covariates violates the unconfoundedness assumptions, and in our case it also generates implausible demand curves when compared against an actual experiment with a representative sample of human participants.

A tempting solution is specifying more variables in the prompts to address this confounding issue. However, we find this approach may sacrifice ecological validity because including more covariates can make the scenarios presented to the LLM less reflective of real-world decision-making contexts. For instance, when competing product information is explicitly mentioned in prompts, these variables become artificially salient in the LLM’s decision process, unlike typical consumers who may not always consider such information during routine purchases. This focalism issue creates a fundamental tension between controlling for confounding factors and maintaining ecological validity - a tradeoff that typically does not exist in human-subject experiments where covariates can be measured and controlled for during data analysis without making them artificially salient to participants during data generation.

We present a theoretical framework illustrating that confoundedness in blind LLM simulations stems from prompts being *ambiguous*. To overcome this fundamental limitation and improve the simulation results, researchers should consider relaxing the blinding requirement and informing the LLM of the experimental design. This approach is not subject to the same confounding issues and holds promise for better generalizable performance as LLMs continue to advance.

More broadly, we aim to contribute to the growing literature on LLM simulations by helping establish best practices in their design.
Although extensive literature on experimental design with human subjects has established best practices and universal standards—such as random assignment and blinding—it remains unclear what constitutes best practices in designing LLM simulations and how these might differ from human-subject experimental design principles. Establishing LLM experimental design principles is crucial for enhancing the reliability and validity of LLM simulation results, thereby making them more valuable for both researchers and practitioners. Without clear guidelines on which experimental designs to adopt or avoid, the vast flexibility and sensitivity in LLM simulations can lead to widely varying outcomes ([Carlson and Burbano, 2024](https://arxiv.org/html/2312.15524v3#bib.bib26); [Gao et al., 2024](https://arxiv.org/html/2312.15524v3#bib.bib28); [Ludwig et al., 2024](https://arxiv.org/html/2312.15524v3#bib.bib29); [Mohammadi, 2024](https://arxiv.org/html/2312.15524v3#bib.bib27)). When different simulation approaches yield conflicting results, researchers lack a basis for determining how much weight to place on each finding. By developing standardized design principles, researchers can assign greater weight to well-designed simulations, enhancing the reliability and usefulness of the results. Developing such design principle is essential for advancing the field and ensuring that LLM simulations effectively contribute to our understanding of human behavior.
In particular, by highlighting the trade-offs between blinding, unconfoundedness, and ecological validity, we offer insights that can help researchers and practitioners design more reliable and valid LLM-based experiments. In doing so, our work underscores the importance of adjusting human-subject experimental design principles to the unique characteristics of LLMs, ensuring that these powerful tools can be effectively harnessed to simulate and understand human behavior.

The rest of the paper is organized as follows. Section [2](https://arxiv.org/html/2312.15524v3#S2 "2 Unintended Confounding in Blind LLM Simulations ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective") empirically demonstrates the unintended consequences of blinding using demand estimation as an example. Section [3](https://arxiv.org/html/2312.15524v3#S3 "3 Potential Solution: Controlling for Covariates ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective") explores the standard solution of controlling for covariates and highlights its unique challenges in the context of LLM simulations. Section [4](https://arxiv.org/html/2312.15524v3#S4 "4 Core Issue: Ambiguous Prompting Strategy ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective") argues theoretically that this fundamental issue will persist for future models as long as ambiguous prompting strategies are used. Section [5](https://arxiv.org/html/2312.15524v3#S5 "5 The value of unblinding ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective") discusses promising directions for making prompts unambiguous through unblinding, and Section [6](https://arxiv.org/html/2312.15524v3#S6 "6 Conclusion ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective") concludes.

## 2 Unintended Confounding in Blind LLM Simulations

The principle of blinding is a cornerstone of experimental design that consists in withholding information from the participants, such as hiding the design of the experiment or the hypotheses being tested. It is widely used in between-subject experiments with human participants, and is also sometimes implemented in within-subject experiments.2
Blinding helps reduce demand effects and maintains ecological validity by presenting scenarios that mirror real-world decision contexts. This section uses GPT4, demand estimation and one common LLM simulation design to illustrate how blinding creates unique challenges in LLM simulations that are absent in human experiments, and Section [4](https://arxiv.org/html/2312.15524v3#S4 "4 Core Issue: Ambiguous Prompting Strategy ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective") generalizes the findings to other versions of LLMs, other applications, and other simulation designs.

One common way to implement blinding in LLM simulations is to conduct between-prompt experiments, where each prompt represents a single experimental condition without revealing the broader experimental context ([Argyle et al., 2023](https://arxiv.org/html/2312.15524v3#bib.bib2); [Brand et al., 2023](https://arxiv.org/html/2312.15524v3#bib.bib4); [Hewitt et al., 2024](https://arxiv.org/html/2312.15524v3#bib.bib9); [Horton, 2023](https://arxiv.org/html/2312.15524v3#bib.bib5); [Toubia et al., 2025](https://arxiv.org/html/2312.15524v3#bib.bib10)). Blinded between-prompt LLM experiments have been used to mimic both between-subject and within-subject experiments with human participants. For example, to mimic a between-subject experiment that studies price sensitivity, researchers might present different prices to the LLM in separate prompts, with each prompt describing only the current price scenario without mentioning the experimental nature of the price variation. To mimic a within-subject conjoint analysis study, researchers might present different product profiles or choice sets to the LLM in separate prompts, with each prompt describing only the current product profile or choice set.

While random assignment in human-subject experiments ensures pre-treatment variables are balanced across conditions and contextual variables remain constant (even when unobserved), LLM-simulated participants and environments are generated dynamically based on prompts. When researchers leave details unspecified in blind LLM prompts, the model may make (implicit or explicit) assumptions about these unspecified variables, which can systematically vary with the treatment and introduce confounding factors.

We illustrate these issues using demand estimation, a classical problem in economics and marketing, where researchers are often interested in understanding how changes in a product’s price affect demand while holding everything else constant. We select the top 40 Consumer Packaged Goods (CPG) categories according to [DellaVigna and Gentzkow (2019)](https://arxiv.org/html/2312.15524v3#bib.bib7), and for each category we pick one of the top selling products according to Walmart.com. We record the regular price of each product on Walmart.com around April, 2024. Table [A.1](https://arxiv.org/html/2312.15524v3#A1.T1 "Table A.1 ‣ Appendix A Category, Product and Price Information ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective") in the Web Appendix documents this set of 40 products. For each product, we vary the price from 0 to 200% of the regular price, in 20% increments. This gives us 11 price points to test for each product ($\{0,20\%,..100\%,..200\%\}$ of the regular price). Throughout the paper, for each prompt template and for each {category,product} pair described in Table [A.1](https://arxiv.org/html/2312.15524v3#A1.T1 "Table A.1 ‣ Appendix A Category, Product and Price Information ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective"), we vary the price systematically across these 11 price points. We refer to “relative price” as the price relative to the regular price ($\{-1,-0.8,...,0,...,0.8,1\}$ where $0$ is the regular price). We use the Open AI API and we “pin” the model to gpt-4o-mini-2024-07-18 (the latest available at the time of running the experiment) to make sure that the exact same model is used for all our simulations. We adjust the “System” part of the prompt to increase the probability of receiving a usable answer from the model (the “System” portion of the prompt, which can be manipulated on the API, provides meta-instructions to GPT). Unless noted otherwise, for each prompt that corresponds to a {category, product, price} combination, we set the temperature to 1 and generate 50 draws to calculate the average response.

First, we elicit unspecified variables from the LLM. For each {category, product, price} combination, we submit a prompt that asks GPT to fill in the blank contextual or pre-treatment variables given the randomized price ([Kurita et al., 2019](https://arxiv.org/html/2312.15524v3#bib.bib21); [Nozza et al., 2022](https://arxiv.org/html/2312.15524v3#bib.bib20); [Zhang et al., 2020](https://arxiv.org/html/2312.15524v3#bib.bib22)). Prompt [2](https://arxiv.org/html/2312.15524v3#S2 "2 Unintended Confounding in Blind LLM Simulations ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective") gives an example of such template that asks the past price given the current randomized price.

Prompt 1: Unintended correlation between price and past price

System:  You, AI, are a customer. Your task is to fill in the blanks \_\_.
Return the completed information in comma-separated values, without any extra text.
User:  Please consider the following product category: {category}.
Suppose you are in a grocery store, and you see the following product in that category: {product}.
The last time you purchased this product, it was priced at $     [a number with up to 2 decimal points].
The product is currently priced at: {price}.
Return example 1: XX.XX

Figure [1](https://arxiv.org/html/2312.15524v3#S2.F1 "Figure 1 ‣ 2 Unintended Confounding in Blind LLM Simulations ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective") demonstrates positive correlations between the price of the focal product and several variables, including the price that the customer paid last time, the price of the competing product, and the expiration days of the product. The x-axis is price relative to the baseline price, allowing us to aggregate across products.3 Web Appendix [C](https://arxiv.org/html/2312.15524v3#A3 "Appendix C Covariance of unspecified variables ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective") presents additional analysis demonstrating the broader scope of these unintended correlations across multiple variables. While these correlations are plausible in observational data, they are undesirable in an experiment where researchers are interested in understanding what happens when changing the price of the focal product while holding everything else constant.

Figure 1: Unintended correlation between price and past price, competing price, and expiration days

Next, we explore whether these unintended correlations are associated with biased estimates of relevant quantities when the goal is simulate counterfactual human behavior. We run an actual survey on human subjects, using a similar prompt in an LLM simulation, and compare the results. The survey with human participants (pre-registered, see https://aspredicted.org/pqys-st6w.pdf) was developed using Qualtrics. Each respondent answered one purchase intention question for each of the 40 products (see Appendix [A](https://arxiv.org/html/2312.15524v3#A1 "Appendix A Category, Product and Price Information ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective") for the complete list of categories, products, and prices), with prices randomly drawn for each product and the order of products randomized across respondent.4 Following our pre-registration, we collected data from 1,000 respondents, and excluded 9 respondents according to pre-registered exclusion criteria (based on attention filters at the beginning of the survey). The respondents were recruited from Prolific, where we paid a premium to obtain a representative sample of the US population (based on census data). We then use Prompt [2](https://arxiv.org/html/2312.15524v3#S2 "2 Unintended Confounding in Blind LLM Simulations ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective") to simulate potential purchase decisions at different price points (where again {category,product} and {price} were varied according to our experimental design, mirroring the experiment with humans), and for each corresponding prompt, we used gpt-4o-mini-2024-07-18, with temperature set to 1, to generate 50 draws to calculate the average purchase probability at each {category,product,price} combination. Figure [2](https://arxiv.org/html/2312.15524v3#S2.F2 "Figure 2 ‣ 2 Unintended Confounding in Blind LLM Simulations ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective") shows the average demand curves (averaged over the 40 products) obtained from GPT and from human participants. While the curves elicited from human participants follow a classic downward-sloping demand pattern, the GPT-simulated curves follow an inverted-U shape. Although it is understandable that it is challenging for GPT to predict demand when price equals 0 as such scenario is probably not well represented in its training data, the curve remains inverted-U shaped even if we remove the first point corresponding to a price of zero.

Prompt 2: Ask Purchase

System: You, AI, are a customer. Your task is to fill in the blanks  .
Return the completed information in comma-separated values, without any extra text.
  
User: Please consider the following product category: {category}.
Suppose you are in a grocery store, and you see the following product in that
category: {product}.
The product is currently priced at ${Price}. Would you or would you not purchase the product?   [“purchase” or “not purchase”]
Return example:
purchase

Figure 2: Demand curve elicited from humans vs. LLM, averaged over 40 products

These findings are not surprising in hindsight: in real observational data, the price of the focal product should be informative of other factors such as the price of the competing products, especially if we do not know anything about the context, the type of store, and how the price for a product is set. An LLM trained on such data would also naturally make such association. This association can be realistic and useful if researchers intend to use LLMs to elicit the correlation between these other factors and the focal product price. However, this same association is problematic when researchers intend to estimate the causal impact of changing the focal price, while holding everything else constant, because it leads to endogeneity. One common approach to addressing such endogeneity is to control for additional covariates. The next section explores the benefits and novel challenges associated with this approach.

## 3 Potential Solution: Controlling for Covariates

When working with real-world data, a common approach for causal identification is to control for covariates. If researchers have controlled for all confounding covariates that affect both the treatment and outcome, the conditional independence assumption, or ignorability, is satisfied. If sufficient variation remains after controlling for covariates, then researchers can identify the causal effect of interest. In LLM-simulated experiments, a natural starting point to control for covariates is adding detailed information about individuals and their environment in the prompt. These covariates can range from demographic information, location, preferences, budget, etc.

[Argyle et al. (2023)](https://arxiv.org/html/2312.15524v3#bib.bib2) introduced an approach for controlling for such covariates. They advocate for running studies on “silicon samples” of digital personas, which in their case were described by demographic variables and political beliefs that were drawn to align with nationally representative samples. This approach has been picked up by the industry and commercialized by several firms (e.g., [Synthetic Users](https://www.syntheticusers.com/), [Evidenza](https://www.evidenza.ai/)). Figure [3](https://arxiv.org/html/2312.15524v3#S3.F3 "Figure 3 ‣ 3 Potential Solution: Controlling for Covariates ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective") shows that on average, controlling for covariates, such as demographic variables does indeed improve the results in our case compared to not specifying any detail. However, it does not fully resolve the issue. Web Appendix [D](https://arxiv.org/html/2312.15524v3#A4 "Appendix D Simulation that controls for demographic variables ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective") describes the detailed prompts and covariates used, which involve creating of 500 personas for each {product,category} pair.

Figure 3: Demand curves elicited by LLM after controlling for demographic variables

A natural question is what constitutes a principled approach to controlling for covariates in LLM simulations and what potential pitfalls exist. When working with human observational data, researchers commonly employ the “kitchen-sink” approach, controlling for many observed pre-treatment variables because a rich set of covariates makes the conditional-independence assumption more credible by capturing confounders. This benefit is strongest with many pre-treatment variables and a large dataset that yields better empirical overlap. While LLM simulations seem well suited here—one can specify many pre-treatment covariates and simulate large samples—an important consideration is the stage at which covariates are controlled for. When working with human data, empirical researchers often control for covariates such as product characteristics and rich user history to address endogeneity during *data analysis*, after the data have already been collected. Hence, analyzing the data does not change the original data-generating process that has already taken place. In contrast, adding covariates via the prompt in an LLM simulation occurs at the *data-generation* stage. Consequently, the additional covariates can change the factors considered by a simulated individual when making decisions.

For example, in the context of demand estimation, one can include contextual information in the prompt such as the price of competing products in the category, which can be used as a proxy for the type of stores that the customer is visiting and the competitive environment that the focal product is facing. However, while adding contextual variables such as competing prices in the LLM simulation may prevent the LLM from using the price treatment to infer these contextual variables, adding them may also lead the LLM-simulated customer to put a heavier emphasis on these factors when making decisions. Figure [4](https://arxiv.org/html/2312.15524v3#S3.F4 "Figure 4 ‣ 3 Potential Solution: Controlling for Covariates ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective") shows (in the specific example of Coca-Cola) that the demand curve (elicited by simulating the choices of 500 personas) is no longer smooth after fixing such contextual variables,5 and the simulated customers’ purchase decisions follow a step function: customers will purchase if and only if the price is lower than or equal to the competing price. Web Appendix [D.1](https://arxiv.org/html/2312.15524v3#A4.SS1 "D.1 Simulation that also controls for competing price ‣ Appendix D Simulation that controls for demographic variables ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective") describes the detailed prompts.6 Such scenario is implausible in the real world because consumers are often inattentive and also care about other dimensions of the product characteristics. However, in LLM simulation, controlling for competing price to address endogeneity may unintentionally make the controlled covariates artificially salient to the simulated consumer and change the decision environment.

Figure 4: Purchase probability, controlling for demographics and competing price: Coca-Cola example.

Such phenomenon in which decision makers place more emphasis on certain aspects of a choice set or scenario than they would in real-world decisions is known in the consumer behavior literature as focalism ([Schkade and Kahneman, 1998](https://arxiv.org/html/2312.15524v3#bib.bib24); [Wilson et al., 2000](https://arxiv.org/html/2312.15524v3#bib.bib23)), and constitutes a threat to ecological validity. For example, in the context of conjoint analysis, [Bedi and Reibstein (2021)](https://arxiv.org/html/2312.15524v3#bib.bib25) argue that when minor attributes are presented together with major ones, they tend to receive undue attention from respondents (due to focalism), leading to upward biased estimates of the importance of these minor features. While it has been documented that LLMs are prone to focalism ([Cheng et al., 2023](https://arxiv.org/html/2312.15524v3#bib.bib31)) and focalism is not an issue that is unique to LLM experiments, the nature of the risk differs as it introduces a new set of trade-off: introducing additional covariates in the simulation may improve unconfoundedness but sacrifice ecological validity. Therefore, unlike standard experimental analysis where controlling covariates typically improve the performance, in LLM simulation, adding more covariates may degrade the performance, because it render the simulated human behavior less realistic.

To illustrate this trade-off empirically, we leverage a publicly available dataset from [Toubia et al. (2025)](https://arxiv.org/html/2312.15524v3#bib.bib10) collected through multiple survey waves containing diverse measures of consumer cognitive and psychological traits alongside demographic information. Importantly, [Toubia et al. (2025)](https://arxiv.org/html/2312.15524v3#bib.bib10) also replicated our pricing study on their panel, allowing us to relate the results of a study with the exact same design as ours to other variables collected on the same sample of consumers. We implement a sequential covariate addition procedure across
twelve stages, beginning with a baseline of 14 demographic variables (age, education, income, and others), then systematically adding behavioral
economics and psychological measures one at a time. This granular approach introduces individual covariates sequentially: tightwad-spendthrift score
(stage 2), discount rate and present bias (stage 3), risk and loss aversion (stages 4-5), financial literacy and numeracy (stages 6-7), mental
accounting (stage 8), decision-making styles (stages 9-10), environmental attitudes (stage 11), and the Big Five personality traits (stage 12), expanding from 14 to 30 total control variables.

Figure [5](https://arxiv.org/html/2312.15524v3#S3.F5 "Figure 5 ‣ 3 Potential Solution: Controlling for Covariates ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective") tracks the mean absolute error (MAE) between actual consumer choices in [Toubia et al. (2025)](https://arxiv.org/html/2312.15524v3#bib.bib10)’s replication of our study and LLM predictions as we gradually add covariates. Appendix [E](https://arxiv.org/html/2312.15524v3#A5 "Appendix E Non-monotonic impact of controlling for covariates ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective") provides detailed results showing the non-monotonic effects at each stage, Table [E.1](https://arxiv.org/html/2312.15524v3#A5.T1 "Table E.1 ‣ Appendix E Non-monotonic impact of controlling for covariates ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective") reports the additional covariates added at each stage and Prompt [E](https://arxiv.org/html/2312.15524v3#A5 "Appendix E Non-monotonic impact of controlling for covariates ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective") documents the prompt templates used. In standard experimental analyses with human data, controlling for additional covariates typically improves model performance, provided the sample size is sufficient. However, our results reveal a non-monotonic pattern: initial covariate additions improve accuracy, but beyond a threshold, further additions degrade performance. This deterioration may occurs because explicitly specifying covariates in the prompt induces focalism, in which the LLM assigns disproportionate weight to variables that consumers would typically ignore in naturalistic decision contexts, thereby compromising ecological validity despite reducing confounding.

Figure 5: Mean absolute error progression as more covariates are controlled in the simulation. The MAE is calculated by comparing the purchase probability for each (product, price) combination.

## 4 Core Issue: Ambiguous Prompting Strategy

So far we have empirically explored one context (demand estimation) with 40 products and one specific version of an LLM. A natural question is whether the issue we have uncovered applies generally to all LLMs and other experiment contexts. This section formalizes the key issue and shows that one key step to harness the full potential of LLM in simulating human behavior lies in avoiding ambiguous prompting strategies. Formally,

###### Definition 4.1 (Prompting Strategy).

A *prompting strategy* is a function:

|  |  |  |
| --- | --- | --- |
|  | $$s:\mathcal{Q}\rightarrow\mathcal{P},$$ |  |

that maps each question $q\in\mathcal{Q}$ to a specific prompt $p\in\mathcal{P}$.

###### Definition 4.2 (Ambiguous Prompting Strategy).

An *ambiguous prompting strategy* occurs when there exists distinct questions $q\_{1}$ and $q\_{2}$ that have different correct answers, but are mapped to the same prompt $p$: $s(q\_{1})=s(q\_{2})=p$ for some prompt $p\in\mathcal{P}$.

Such ambiguous prompting strategies should be avoided because - for any given LLM model, no matter how advanced they are, if researchers use an ambiguous prompting strategy, then if it happens to correctly answer one question correctly, $q\_{1}$, it will incorrectly answer its ambiguous counterpart, $q\_{2}$. Web Appendix [F.1](https://arxiv.org/html/2312.15524v3#A6.SS1 "F.1 Impossibility of Ambiguous Prompting ‣ Appendix F Theoretical Framework ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective") provides a more detailed proof.

An important step for practitioners to avoid ambiguous prompting strategy is to examine whether a specific prompt being used is open to multiple interpretations. For example, consider a simple prompt $p$ under a blinded simulation design:

Prompt 3: A simple ambiguous prompt

Consider the product category: {category}.
Suppose you are in a grocery store, and you see the following product in that category: {product}.
The product is priced at: {price}. You decide to \_\_\_ [’purchase’ or ’not purchase’]

This prompt is *ambiguous* because it allows for at least two interpretations:

- •

  $q\_{1}$ (interventional): what is the customer’s purchase decision when the price is set to be $\{price\}$?
- •

  $q\_{2}$ (observational): what is the customer’s purchase decision when the price happens to be $\{price\}$?

These two questions yield different answers. Using the *do-operator* ([Pearl, 2009](https://arxiv.org/html/2312.15524v3#bib.bib13)) to distinguish active intervention from observation, and denoting $Y$ as Purchase and $D$ as Price, the answer to $q\_{1}$ is $a\_{1}:P(Y|do(D))$, where $do(D)$ is randomized and independent of unobserved factors $U$ ($D\perp U$). The answer to $q\_{2}$ is $a\_{2}:P(Y|D)$, where $D$ can be correlated with other confounders $U$ that affect $Y$ ($D\not\perp U$), as in observational data. Since LLMs are trained primarily on observational data, it is plausible that an ambiguous question will also be interpreted in a way that is similar to observational data, hence answering the wrong question. Appendix [F.2](https://arxiv.org/html/2312.15524v3#A6.SS2 "F.2 Illustration of the underlying DGP that LLM simulation mimics if prompts are interpreted differently ‣ Appendix F Theoretical Framework ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective") provides a DAG illustration of the different types of data generating process that an LLM may mimic when an ambiguous prompt is used.

As discussed in Section [3](https://arxiv.org/html/2312.15524v3#S3 "3 Potential Solution: Controlling for Covariates ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective"), one might attempt to address this issue by adding more variables to the prompt. However, adding variables to the prompt can actually increase rather than decrease ambiguity from a causal perspective. To illustrate this multiplication of possible interpretations in practice, consider the following detailed example:

Prompt 4: More Detailed Scenario with Ambiguous Treatment

User: You are a customer who has recently read an article about how sugar consumption affects health. You are now in a store and you see Regular Coke (39g sugar per 12 oz, 12 pack cans) priced at $4.99, with a soda tax of $0.12/oz. Would you or would you not purchase the product?

This prompt, while detailed, may be even more ambiguous. It permits more valid causal interpretations:

1. 1.

   Price as Treatment: $P(Y|do(\text{price}),\text{health\\_info},\text{sugar\\_content})$
     
   “What happens when we experimentally set price to $4.99, holding fixed that customers are health-aware?”
2. 2.

   Health Information as Treatment: $P(Y|\text{price},do(\text{health\\_info}),\text{sugar\\_content})$:
   “What happens when we experimentally expose customers to health articles, holding fixed price at $4.99?”
3. 3.

   Sugar Content as Treatment: $P(Y|\text{price},\text{health\\_info},do(\text{sugar\\_content}))$:
   “What happens when we experimentally highlight sugar content, holding fixed price and prior health awareness?”

## 5 The value of unblinding

Our theoretical framework points toward a promising direction: designing unambiguous prompts by explicitly communicating the experimental design, which by definition entails unblinding. The causal inference literature ([Angrist and Pischke, 2009](https://arxiv.org/html/2312.15524v3#bib.bib35); [Imbens and Rubin, 2015](https://arxiv.org/html/2312.15524v3#bib.bib33); [Athey and Imbens, 2017](https://arxiv.org/html/2312.15524v3#bib.bib34)) has long emphasized the importance of clearly specifying estimands and sources of variation. Following this principle, we argue that unblinded prompts should specify both the treatment being randomized and the distribution from which the treatment is drawn. We test unblinding through two approaches: first by examining out-of-the-box LLMs to establish baseline differences, and then by generalizing to fine-tuning experiments.

We begin by examining whether unblinding improves performance in standard, pre-trained language models, establishing a baseline for how prompt design affects predictions without task-specific training. To assess the robustness of the effects, we evaluate a series of GPT models spanning multiple generations, from GPT-3.5-Turbo to the latest models available at the time of writing (GPT-4.1). We operationalize the distinction between blinded and unblinded approaches through two different system prompts.

Prompt 5: Blinded System Prompt

System: You, AI, are a customer. Your task is to fill in the blank \_\_\_. Return the completed information without extra text.

The unblinded condition alters the system prompt to include experimental context:

Prompt 6: Unblinded System Prompt

System: You, AI, are an expert in predicting customer behavior. The customer is given a survey on their purchase decision for the {product} in {category} where the price of the product is randomly and uniformly drawn from {min\_price} to {max\_price}. The customer is only presented with one price and is blind to this randomization design. The customer is given the following survey. Your task is to fill in the blank \_\_\_. Return the completed information without extra text.

This design choice operationalizes our theoretical framework. The unblinded prompt explicitly communicates the data-generating process, including both the randomization mechanism and the support of the price distribution. Figure [6](https://arxiv.org/html/2312.15524v3#S5.F6 "Figure 6 ‣ 5 The value of unblinding ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective") reveals a consistent pattern across model generations. Unblinded prompts systematically generate more accurate predictions, with performance improvements ranging from 1% to over 60% relative to baseline. The mean absolute error (MAE) reduction persists across all models tested, including reasoning models, and this performance advantage remains substantial as models advance.

![Refer to caption](https://arxiv.org/html/2312.15524v3/Figures/fine_tuning/evolution/model_evolution_pct_improvement_nofacet_R.png)


Figure 6: Gain from unblinding for various models (ordered by release date and reasoning ability). The figure shows MAE performance improvement when moving from blinded to unblinded prompts, with GPT models ordered by release date. The MAE is calculated by comparing the purchase probability for each (product, price) combination, and then the improvement is normalized by the baseline MAE of the blinded prompts. Positive values indicate superior performance for unblinded prompts.

While these out-of-the-box results demonstrate the value of unblinding, they raise a natural question: will this technique become obsolete as LLMs improve, particularly through fine-tuning? We argue that unblinding is not merely a strategy for evaluating and using pre-trained models but an important, complementary step in the model development and fine-tuning process itself.

To illustrate, we consider fine-tuning a model on actual human data. When performing fine-tuning, researchers must decide what context to provide. For instance, should they reveal the experimental origins of the data (an unblinded approach, as in Prompt [5](https://arxiv.org/html/2312.15524v3#S5 "5 The value of unblinding ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective")) or choose to not disclose such context (a blinded approach, as in Prompt [5](https://arxiv.org/html/2312.15524v3#S5 "5 The value of unblinding ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective"))? This choice is consequential. Even if fine-tuning helps the model learn the
correlation between price and purchase, without the context of randomization, it has an insufficient basis for
interpreting this correlation as causal. Explicitly stating that the price was randomized provides context; hence, it may help the model interpret the learned relationship as causal and thereby improving its potential to generalize. Appendix [F.3](https://arxiv.org/html/2312.15524v3#A6.SS3 "F.3 Implications for Model Development ‣ Appendix F Theoretical Framework ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective") provides a more detailed discussion.

To empirically demonstrate this complementarity, we fine-tune models using our demand estimation survey data. We design an out-of-distribution test by performing a leave-one-category-out cross-validation. We divide the 40 products into four category groups: beverages (including juices, soft drinks, beer, and dairy drinks), refrigerated goods (including meats, dairy products, and frozen foods), snacks and bakery (including chips, cookies, coffee, candy, and ice cream), and household and pet supplies (including cleaning products, paper goods, pet food, and medications). In each fold, we fine-tune a model on three category groups and validate on the held-out fourth category group. This approach tests for true generalization, as the model must learn principles that transfer across fundamentally different product types rather than simply interpolating between similar items. This mirrors real-world applications where practitioners may be interested in forecasting scenarios that historical data has not observed before.

For each of the four cross-validation folds, we fine-tune GPT-4o-mini models under a 2 (blinded vs. unblinded prompt in fine-tuning stage) × 2 (blinded vs. unblinded prompt in evaluation stage) factorial design, varying the prompt type (blinded Prompt [5](https://arxiv.org/html/2312.15524v3#S5 "5 The value of unblinding ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective") vs. unblinded Prompt [5](https://arxiv.org/html/2312.15524v3#S5 "5 The value of unblinding ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective")) used during both the fine-tuning and evaluation stages. This design allows us to disentangle the effects of unblinding at each stage. To evaluate performance, we test each model on its held-out category, generating 50 responses per product-price pair (with temperature set to 1) and calculating the purchase probability. We then measure the MAE against the true probabilities from our human survey.

Table [1](https://arxiv.org/html/2312.15524v3#S5.T1 "Table 1 ‣ 5 The value of unblinding ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective") shows that fine-tuning consistently improves performance over the out-of-the-box model. However, the most accurate results are achieved when the model is both fine-tuned and evaluated with unblinded prompts. This combination reduces the MAE by an additional 15% compared to the best-performing blinded model, from 0.134 to 0.113. This finding highlights that unblinding offers a significant, nearly costless performance improvement, complementary to the more resource-intensive process of data acquisition and fine-tuning.

Table 1: MAE of Fine-Tuned Models on Survey Data

| Model | Evaluation Method | |
| --- | --- | --- |
|  | Blinded | Unblinded |
| Out-of-box GPT-4o-mini | 0.532 | 0.397 |
| Fine-tuned on Survey (Blinded) | 0.134 | 0.128 |
| Fine-tuned on Survey (Unblinded) | 0.130 | 0.113 |

The value of unblinding becomes even more pronounced when fine-tuning models on complex or mixed-quality datasets. While the previous exercise demonstrated unblinding’s value with a single-source high-quality dataset, practical applications often involve greater uncertainty. Developers may know a model’s general purpose—such as forecasting demand under different pricing strategies—without knowing its exact future applications. Even in a simple setting where a firm only sells two products A and B, the application can include 1) forecasting demand when A and B are priced as usual 2) adjusting the price for product A when B is priced as usual 3) adjusting the price for product B when A is priced as usual, 4) adjusting price for both product A and B, 5) predicting the introduction of a new product C when product A and B are priced as usual. To address this range of potential queries, models may be fine-tuned on diverse training data comprising both experimental datasets, each with specific treatments and covariates, and observational datasets that capture business-as-usual patterns and correlations. While observational data can answer routine questions, it may prove problematic for certain counterfactual analyses. Without additional context during fine-tuning, experimental and observational data risk becoming indistinguishable to the model. Moreover, ambiguous prompts leave the model uncertain about which dataset to leverage for specific questions. Unblinding thus enhances model robustness against irrelevant datasets that may not directly address researchers’ intended questions.

To illustrate the point, we replicate the aforementioned fine-tuning exercise, with the exception that we also added an irrelevant observational dataset that has documented how customers browse online on Amazon ([Berke et al., 2024](https://arxiv.org/html/2312.15524v3#bib.bib11)). The dataset is by construction observational and biased because it has only recorded purchases and no recorded non-purchases. Appendix [G](https://arxiv.org/html/2312.15524v3#A7 "Appendix G Fine-tuning with additional irrelevant data ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective") documents the exact prompt we used to incorporate the additional Amazon data in the fine-tuning process.

Table [2](https://arxiv.org/html/2312.15524v3#S5.T2 "Table 2 ‣ 5 The value of unblinding ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective") shows that when this irrelevant dataset is included, the performance of models trained with blinded prompts degrades significantly. In contrast, models trained with unblinded prompts prove far more robust. By providing clear context about the data’s origin, unblinding enables the model to correctly weight the experimental data and discount the noisy observational data, preserving its predictive accuracy.

Table 2: MAE of Fine-Tuned Models on Mixed (Survey + Amazon) Data

| Model | Evaluation Method | |
| --- | --- | --- |
|  | Blinded | Unblinded |
| Out-of-box GPT-4o-mini | 0.532 | 0.397 |
| Fine-tuned on Survey+Amazon (Blinded) | 0.233 | 0.126 |
| Fine-tuned on Survey+Amazon (Unblinded) | 0.145 | 0.120 |

## 6 Conclusion

This paper identifies a fundamental challenge in using LLMs to simulate experiments with human participants. Unlike human participants who exist independently of experiments, LLM-simulated individuals and environments are generated based on prompts. While LLMs’ ability to capture associations from training data is generally beneficial, it creates complications in experimental settings where changing one variable can unintentionally affect other unspecified variables meant to remain constant. This confounding makes it difficult to accurately simulate counterfactual human behavior.

Our exploration of potential solutions to this challenge reveals important insights for improving LLM simulations. While adding detailed context to control for confounders can help address the confounding issue, our analysis demonstrates that this approach can introduce focalism—causing simulated individuals to overweight explicitly mentioned variables relative to realistic human behavior. This trade-off between reducing confounding and maintaining ecological validity represents a fundamental consideration when designing LLM simulations with detailed prompts.

These empirical observations point to a deeper theoretical issue. Making the LLM blind to the experimental design leads to ambiguous prompts. Because these challenges stem from ambiguous prompting strategies rather than model limitations, our theoretical framework suggests that developing unambiguous prompting strategies constitutes a fundamental principle that complements other model improvement techniques.

Building on this theoretical understanding, our empirical findings demonstrate that unblinded experimental designs offer a particularly promising path forward. By explicitly communicating the randomization mechanism and experimental context, unblinded prompts reduce ambiguity and enable more accurate simulations. This approach shows consistent improvements across model generations and proves especially valuable when combined with fine-tuning, where it enhances the model’s ability to distinguish causal from correlational patterns in training data. The complementary nature of unblinding and fine-tuning suggests that developing LLMs capable of accurately simulating counterfactual human behavior when provided with clear, unambiguous prompts represents both a crucial and achievable direction for advancing the field.

Our findings have important practical implications for different stakeholders in the LLM ecosystem. For researchers evaluating LLM performance, our results caution against using blinded designs when assessing simulation capabilities. Poor performance in such settings may reflect prompt ambiguity rather than model limitations, making it impossible to properly diagnose model capabilities. For academic researchers studying LLMs, our work highlights the need to establish consensus on unambiguous prompting strategies. Without such consensus, different research teams may map distinct questions to identical prompts, leading to conflicting interpretations that no model can simultaneously satisfy. Perhaps most importantly, our findings suggest avoiding ambiguous prompts during the development and fine-tuning of LLMs. When prompts permit multiple interpretations, improving performance on one interpretation may degrade performance on others - an unnecessary trade-off that could be avoided through clearer prompting strategies, especially given uncertainty about future applications.

Our paper highlights a broader insight regarding the use of LLMs: rather than simply applying human subject protocols to LLMs, researchers must develop new experimental practices tailored to LLMs’ unique properties. The field of LLM simulations remains nascent, and best practices have yet to be established. Our work highlights the need for a new set of principles for designing LLM simulations and evaluation frameworks. We hope this will guide future research in developing more reliable methods for leveraging LLMs in experimental research while remaining mindful of their fundamental differences from human subjects.

Funding and Competing Interests Declarations

All authors certify that they have no affiliations with or involvement in any organization or entity with any financial interest or non-financial interest in the subject matter or materials discussed in this manuscript. The authors have no funding to report.

## References

- Aher et al. (2023)
  G. V. Aher, R. I. Arriaga, and A. T. Kalai
  Using Large Language Models to Simulate Multiple Humans and Replicate Human Subject Studies.
  In Proceedings of the 40th International Conference on Machine Learning,
  pp. 337–371 (en).
  Note: ISSN: 2640-3498
  External Links: [Link](https://proceedings.mlr.press/v202/aher23a.html)
  Cited by: [§1](https://arxiv.org/html/2312.15524v3#S1.p1.1 "1 Introduction ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective").
- Angrist and Pischke (2009)
  J. D. Angrist and J. Pischke
  Mostly harmless econometrics: an empiricist’s companion.
   Princeton University Press, Princeton, NJ.
  Cited by: [§5](https://arxiv.org/html/2312.15524v3#S5.p1.1 "5 The value of unblinding ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective").
- Argyle et al. (2023)
  L. P. Argyle, E. C. Busby, N. Fulda, J. R. Gubler, C. Rytting, and D. Wingate
  Out of One, Many: Using Language Models to Simulate Human Samples.
  Political Analysis, pp. 1–15 (en).
  Note: Publisher: Cambridge University Press
  External Links: ISSN 1047-1987, 1476-4989,
  [Link](https://www.cambridge.org/core/journals/political-analysis/article/abs/out-of-one-many-using-language-models-to-simulate-human-samples/035D7C8A55B237942FB6DBAD7CAA4E49),
  [Document](https://dx.doi.org/10.1017/pan.2023.2)
  Cited by: [§1](https://arxiv.org/html/2312.15524v3#S1.p1.1 "1 Introduction ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective"),
  [§1](https://arxiv.org/html/2312.15524v3#S1.p5.1 "1 Introduction ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective"),
  [§2](https://arxiv.org/html/2312.15524v3#S2.p2.1 "2 Unintended Confounding in Blind LLM Simulations ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective"),
  [§3](https://arxiv.org/html/2312.15524v3#S3.p2.1 "3 Potential Solution: Controlling for Covariates ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective").
- Arora et al. (2024)
  N. Arora, I. Chakraborty, and Y. Nishimura
  Express: ai-human hybrids for marketing research: leveraging llms as collaborators.
  Journal of Marketing, pp. 00222429241276529.
  Cited by: [§1](https://arxiv.org/html/2312.15524v3#S1.p1.1 "1 Introduction ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective").
- Association et al. (2019)
  A. P. Association et al.
  Publication manual of the american psychological association, (2020).
  American Psychological Association 428.
  Cited by: [footnote 1](https://arxiv.org/html/2312.15524v3#footnote1 "In 1 Introduction ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective").
- Athey and Imbens (2017)
  S. Athey and G. W. Imbens
  The econometrics of randomized experiments.
  In Handbook of economic field experiments,
  Vol. 1, pp. 73–140.
  Cited by: [§5](https://arxiv.org/html/2312.15524v3#S5.p1.1 "5 The value of unblinding ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective").
- Bail (2024)
  C. A. Bail
  Can generative ai improve social science?.
  Proceedings of the National Academy of Sciences 121 (21), pp. e2314021121.
  Cited by: [§1](https://arxiv.org/html/2312.15524v3#S1.p1.1 "1 Introduction ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective").
- Bedi and Reibstein (2021)
  S. Bedi and D. Reibstein
  Damaged damages: errors in patent and false advertising litigation.
  Ala. L. Rev. 73, pp. 385.
  Cited by: [§3](https://arxiv.org/html/2312.15524v3#S3.p5.1 "3 Potential Solution: Controlling for Covariates ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective").
- Berke et al. (2024)
  A. Berke, D. Calacci, R. Mahari, T. Yabe, K. Larson, and S. Pentland
  Open e-commerce 1.0, five years of crowdsourced us amazon purchase histories with user demographics.
  Scientific Data 11 (1), pp. 491.
  Cited by: [Appendix G](https://arxiv.org/html/2312.15524v3#A7.p1.1 "Appendix G Fine-tuning with additional irrelevant data ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective"),
  [§5](https://arxiv.org/html/2312.15524v3#S5.p13.1 "5 The value of unblinding ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective").
- Binz et al. (2025)
  M. Binz, E. Akata, M. Bethge, F. Brändle, F. Callaway, J. Coda-Forno, P. Dayan, C. Demircan, M. K. Eckstein, N. Éltető, et al.
  A foundation model to predict and capture human cognition.
  Nature, pp. 1–8.
  Cited by: [§1](https://arxiv.org/html/2312.15524v3#S1.p1.1 "1 Introduction ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective").
- Brand et al. (2023)
  J. Brand, A. Israeli, and D. Ngwe
  Using GPT for Market Research.
  SSRN Scholarly Paper, Rochester, NY (en).
  External Links: [Link](https://papers.ssrn.com/abstract=4395751)
  Cited by: [§1](https://arxiv.org/html/2312.15524v3#S1.p5.1 "1 Introduction ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective"),
  [§2](https://arxiv.org/html/2312.15524v3#S2.p2.1 "2 Unintended Confounding in Blind LLM Simulations ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective").
- Carlson and Burbano (2024)
  N. Carlson and V. Burbano
  The use of llms to annotate data in management research: warnings, guidelines, and an application to organizational communication.
  Guidelines, and an Application to Organizational Communication (May 21, 2024).
  Cited by: [§1](https://arxiv.org/html/2312.15524v3#S1.p10.1 "1 Introduction ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective").
- Cheng et al. (2023)
  M. Cheng, T. Piccardi, and D. Yang
  CoMPosT: characterizing and evaluating caricature in llm simulations.
  arXiv preprint arXiv:2310.11501.
  Cited by: [§3](https://arxiv.org/html/2312.15524v3#S3.p5.1 "3 Potential Solution: Controlling for Covariates ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective").
- DellaVigna and Gentzkow (2019)
  S. DellaVigna and M. Gentzkow
  Uniform Pricing in U.S. Retail Chains\*.
  The Quarterly Journal of Economics 134 (4), pp. 2011–2084.
  External Links: ISSN 0033-5533,
  [Link](https://doi.org/10.1093/qje/qjz019),
  [Document](https://dx.doi.org/10.1093/qje/qjz019)
  Cited by: [Table A.1](https://arxiv.org/html/2312.15524v3#A1.T1.8.1.1 "In Appendix A Category, Product and Price Information ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective"),
  [§2](https://arxiv.org/html/2312.15524v3#S2.p4.1 "2 Unintended Confounding in Blind LLM Simulations ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective").
- Dillion et al. (2023)
  D. Dillion, N. Tandon, Y. Gu, and K. Gray
  Can AI language models replace human participants?.
  Trends in Cognitive Sciences 0 (0) (English).
  Note: Publisher: Elsevier
  External Links: ISSN 1364-6613, 1879-307X,
  [Link](https://www.cell.com/trends/cognitive-sciences/abstract/S1364-6613(23)00098-0),
  [Document](https://dx.doi.org/10.1016/j.tics.2023.04.008)
  Cited by: [§1](https://arxiv.org/html/2312.15524v3#S1.p1.1 "1 Introduction ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective").
- Gao et al. (2024)
  Y. Gao, D. Lee, G. Burtch, and S. Fazelpour
  Take caution in using llms as human surrogates: scylla ex machina.
  arXiv preprint arXiv:2410.19599.
  Cited by: [§1](https://arxiv.org/html/2312.15524v3#S1.p10.1 "1 Introduction ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective").
- Goli and Singh (2024)
  A. Goli and A. Singh
  Frontiers: can large language models capture human preferences?.
  Marketing Science.
  Cited by: [§1](https://arxiv.org/html/2312.15524v3#S1.p1.1 "1 Introduction ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective").
- Hewitt et al. (2024)
  L. Hewitt, A. Ashokkumar, I. Ghezae, and R. Willer
  Predicting results of social science experiments using large language models.
  Preprint.
  Cited by: [§1](https://arxiv.org/html/2312.15524v3#S1.p1.1 "1 Introduction ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective"),
  [§1](https://arxiv.org/html/2312.15524v3#S1.p3.1 "1 Introduction ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective"),
  [§1](https://arxiv.org/html/2312.15524v3#S1.p5.1 "1 Introduction ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective"),
  [§2](https://arxiv.org/html/2312.15524v3#S2.p2.1 "2 Unintended Confounding in Blind LLM Simulations ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective").
- Horton (2023)
  J. J. Horton
  Large Language Models as Simulated Economic Agents: What Can We Learn from Homo Silicus?.
   arXiv.
  Note: arXiv:2301.07543 [econ, q-fin]
  External Links: [Link](http://arxiv.org/abs/2301.07543),
  [Document](https://dx.doi.org/10.48550/arXiv.2301.07543)
  Cited by: [§1](https://arxiv.org/html/2312.15524v3#S1.p1.1 "1 Introduction ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective"),
  [§1](https://arxiv.org/html/2312.15524v3#S1.p5.1 "1 Introduction ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective"),
  [§2](https://arxiv.org/html/2312.15524v3#S2.p2.1 "2 Unintended Confounding in Blind LLM Simulations ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective").
- Hutson and Mastin (2023)
  M. Hutson and A. Mastin
  Guinea pigbots.
  Science (New York, NY) 381 (6654), pp. 121–123.
  Cited by: [§1](https://arxiv.org/html/2312.15524v3#S1.p1.1 "1 Introduction ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective").
- Imbens and Rubin (2015)
  G. W. Imbens and D. B. Rubin
  Causal inference for statistics, social, and biomedical sciences: an introduction.
   Cambridge University Press, Cambridge, UK.
  Cited by: [§5](https://arxiv.org/html/2312.15524v3#S5.p1.1 "5 The value of unblinding ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective").
- Kurita et al. (2019)
  K. Kurita, N. Vyas, A. Pareek, A. W. Black, and Y. Tsvetkov
  Measuring bias in contextualized word representations.
  arXiv preprint arXiv:1906.07337.
  Cited by: [§2](https://arxiv.org/html/2312.15524v3#S2.p5.1 "2 Unintended Confounding in Blind LLM Simulations ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective").
- Ludwig et al. (2024)
  J. Ludwig, S. Mullainathan, and A. Rambachan
  Large language models: an applied econometric framework.
  arXiv preprint arXiv:2412.07031.
  Cited by: [§1](https://arxiv.org/html/2312.15524v3#S1.p10.1 "1 Introduction ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective"),
  [§1](https://arxiv.org/html/2312.15524v3#S1.p4.1 "1 Introduction ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective").
- Mohammadi (2024)
  B. Mohammadi
  Wait, it’s all token noise? always has been: interpreting llm behavior using shapley value.
  Available at SSRN 4759713.
  Cited by: [§1](https://arxiv.org/html/2312.15524v3#S1.p10.1 "1 Introduction ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective").
- Nozza et al. (2022)
  D. Nozza, F. Bianchi, D. Hovy, et al.
  Pipelines for social bias testing of large language models.
  In Proceedings of BigScience Episode# 5–Workshop on Challenges & Perspectives in Creating Large Language Models,
  Cited by: [§2](https://arxiv.org/html/2312.15524v3#S2.p5.1 "2 Unintended Confounding in Blind LLM Simulations ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective").
- Park et al. (2023)
  J. S. Park, J. C. O’Brien, C. J. Cai, M. R. Morris, P. Liang, and M. S. Bernstein
  Generative Agents: Interactive Simulacra of Human Behavior.
   arXiv.
  Note: arXiv:2304.03442 [cs]
  External Links: [Link](http://arxiv.org/abs/2304.03442),
  [Document](https://dx.doi.org/10.48550/arXiv.2304.03442)
  Cited by: [§1](https://arxiv.org/html/2312.15524v3#S1.p1.1 "1 Introduction ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective").
- Pearl (2009)
  J. Pearl
  Causality: models, reasoning, and inference.
  2 edition, Cambridge University Press, Cambridge, UK.
  Cited by: [§4](https://arxiv.org/html/2312.15524v3#S4.p7.1 "4 Core Issue: Ambiguous Prompting Strategy ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective").
- Qin et al. (2024)
  X. Qin, M. Huang, and J. Ding
  AITurk: using chatgpt for social science research.
  Available at SSRN 4922861.
  Cited by: [§1](https://arxiv.org/html/2312.15524v3#S1.p1.1 "1 Introduction ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective").
- Sarstedt et al. (2024)
  M. Sarstedt, S. J. Adler, L. Rau, and B. Schmitt
  Using large language models to generate silicon samples in consumer and marketing research: challenges, opportunities, and guidelines.
  Psychology & Marketing 41 (6), pp. 1254–1270.
  Cited by: [§1](https://arxiv.org/html/2312.15524v3#S1.p1.1 "1 Introduction ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective").
- Schkade and Kahneman (1998)
  D. A. Schkade and D. Kahneman
  Does living in california make people happy? a focusing illusion in judgments of life satisfaction.
  Psychological science 9 (5), pp. 340–346.
  Cited by: [§3](https://arxiv.org/html/2312.15524v3#S3.p5.1 "3 Potential Solution: Controlling for Covariates ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective").
- Simmons and Hare (2023)
  G. Simmons and C. Hare
  Large language models as subpopulation representative models: a review.
  arXiv preprint arXiv:2310.17888.
  Cited by: [§1](https://arxiv.org/html/2312.15524v3#S1.p1.1 "1 Introduction ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective").
- Toubia et al. (2025)
  O. Toubia, G. Z. Gui, T. Peng, D. J. Merlau, A. Li, and H. Chen
  Twin-2k-500: a dataset for building digital twins of over 2,000 people based on their answers to over 500 questions.
  Marketing Science (articles in advance).
  Cited by: [§1](https://arxiv.org/html/2312.15524v3#S1.p1.1 "1 Introduction ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective"),
  [§1](https://arxiv.org/html/2312.15524v3#S1.p3.1 "1 Introduction ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective"),
  [§1](https://arxiv.org/html/2312.15524v3#S1.p5.1 "1 Introduction ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective"),
  [§2](https://arxiv.org/html/2312.15524v3#S2.p2.1 "2 Unintended Confounding in Blind LLM Simulations ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective"),
  [§3](https://arxiv.org/html/2312.15524v3#S3.p6.1 "3 Potential Solution: Controlling for Covariates ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective"),
  [§3](https://arxiv.org/html/2312.15524v3#S3.p7.1 "3 Potential Solution: Controlling for Covariates ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective").
- Wang et al. (2024)
  M. Wang, D. J. Zhang, and H. Zhang
  Large language models for market research: a data-augmentation approach.
  arXiv preprint arXiv:2412.19363.
  Cited by: [§1](https://arxiv.org/html/2312.15524v3#S1.p4.1 "1 Introduction ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective").
- Wilson et al. (2000)
  T. D. Wilson, T. Wheatley, J. M. Meyers, D. T. Gilbert, and D. Axsom
  Focalism: a source of durability bias in affective forecasting..
  Journal of personality and social psychology 78 (5), pp. 821.
  Cited by: [§3](https://arxiv.org/html/2312.15524v3#S3.p5.1 "3 Potential Solution: Controlling for Covariates ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective").
- Zhang et al. (2020)
  H. Zhang, A. X. Lu, M. Abdalla, M. McDermott, and M. Ghassemi
  Hurtful words: quantifying biases in clinical contextual word embeddings.
  In proceedings of the ACM Conference on Health, Inference, and Learning,
  pp. 110–120.
  Cited by: [§2](https://arxiv.org/html/2312.15524v3#S2.p5.1 "2 Unintended Confounding in Blind LLM Simulations ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective").

## Appendix A Category, Product and Price Information

Table A.1: Categories, products and regular prices

| Category | Product | Price ($) |
| --- | --- | --- |
| Fruit Juice | [Capri Sun Variety Pack with Fruit Punch, Strawberry Kiwi & Pacific Cooler Juice Box Pouches, 30 ct Box, 6 fl oz Pouches](https://www.walmart.com/ip/110946086) | 9.43 |
| Fruit Drinks | [Kool Aid Jammers Variety Pack with Tropical Punch, Grape & Cherry Kids Drink 0% Juice Box Pouches, 30 Ct Box, 6 fl oz Pouches](https://www.walmart.com/ip/558416376) | 7.27 |
| Baby Milk and Milk Flavoring | [Horizon Organic Shelf-Stable Whole Milk Boxes, 8 oz., 12 Pack](https://www.walmart.com/ip/819219798) | 13.98 |
| Soup | [Maruchan Ramen Noodle Chicken Flavor Soup, 3 Oz, 12 Count Shelf Stable Package](https://www.walmart.com/ip/10450904) | 9.97 |
| Cat Food - Wet Type | [Purina Fancy Feast Chicken Feast Classic Grain Free Wet Cat Food Pate - 3 oz. Can](https://www.walmart.com/ip/10534976) | 0.88 |
| Pet Supplies - Dog Food | [Purina Dog Chow Complete, Dry Dog Food for Adult Dogs High Protein, Real Chicken, 44 lb Bag](https://www.walmart.com/ip/1446707820) | 29.17 |
| Snacks - Potato Chips | [Lay’s Classic Potato Snack Chips, Party Size, 13 oz Bag](https://www.walmart.com/ip/677669806) | 5.44 |
| Snacks - Tortilla Chips | [Doritos Nacho Cheese Tortilla Snack Chips, Party Size, 14.5 oz Bag](https://www.walmart.com/ip/433078517) | 5.94 |
| Cereal - Ready to Eat | [Cinnamon Toast Crunch Breakfast Cereal, Crispy Cinnamon Cereal, Family Size, 18.8 oz](https://www.walmart.com/ip/207302221) | 4.93 |
| Cookies | [Little Debbie Oatmeal Creme Pies, 12 ct, 16.2 oz](https://www.walmart.com/ip/10295206) | 2.68 |
| Ground and Whole Bean Coffee | [Folgers Classic Roast Ground Coffee, Medium Roast, 40.3-Ounce Canister](https://www.walmart.com/ip/971362035) | 13.24 |
| Soft Drinks - Carbonated | [Coca-Cola Soda Pop, 12 fl oz, 12 Pack Cans](https://www.walmart.com/ip/12166733) | 8.26 |
| Bottled Water | [OZARKA Brand 100% Natural Spring Water, 16.9-ounce plastic bottles (Pack of 35)](https://www.walmart.com/ip/376302514) | 19.96 |
| Candy - Chocolate | [Hershey’s Milk Chocolate Candy, Bars 1.55 oz, 6 Count](https://www.walmart.com/ip/Hershey-s-Individually-Wrapped-Bars-Milk-Chocolate-6-ct/10452239) | 6.48 |
| Candy - Non-Chocolate | [HARIBO Goldbears Original Gummy Bears, 28.8oz Stand Up Bag](https://www.walmart.com/ip/52796439) | 6.48 |
| Soft Drinks - Low Calorie | [Coca-Cola Zero Sugar Soda Pop, 16.9 fl oz, 6 Pack Cans](https://www.walmart.com/ip/10535134) | 5.18 |
| Frozen Italian Entrees | [Smart Ones Three Cheese Ziti Marinara Frozen Meal, 9 Oz Box](https://www.walmart.com/ip/14940646) | 2.26 |
| Frozen Foods | [Great Value All Natural Chicken Wing Sections, 4 lb (Frozen)](https://www.walmart.com/ip/36618723) | 12.98 |
| Ice Cream | [Haagen Dazs Coffee Ice Cream, Gluten Free, Kosher, 14.0 oz](https://www.walmart.com/ip/13281759) | 4.18 |
| Frozen Novelties | [Pop-Ice Assorted Fruit Freezer Ice Pops, Gluten-Free Snack, 1.5 oz, 80 Count Fruit Pops](https://www.walmart.com/ip/50863392) | 6.17 |
| Lunchmeat - Sliced - Refrigerated | [Oscar Mayer Chopped Ham & Water product Deli Lunch Meat, 16 Oz Package](https://www.walmart.com/ip/10292642) | 4.33 |
| Frankfurters - Refrigerated | [Oscar Mayer Classic Uncured Beef Franks Hot Dogs, 10 ct Pack](https://www.walmart.com/ip/39976745) | 3.94 |
| Refrigerated Bacon | [Oscar Mayer Fully Cooked Original Bacon, 2.52 oz Box](https://www.walmart.com/ip/21268963) | 4.27 |
| Refrigerated Entrees | [John Soules Foods Chicken Breast Fajita Strips, Refrigerated, 16oz, 18g Protein per 3oz Serving Size](https://www.walmart.com/ip/38227609) | 5.98 |
| Dairy Products | [Land O Lakes Salted Stick Butter, 16 oz, 4 Sticks](https://www.walmart.com/ip/10291058) | 5.28 |
| Yogurt - Refrigerated | [Chobani Non-Fat Greek Yogurt, Vanilla Blended 32 oz, Plastic](https://www.walmart.com/ip/21291512) | 5.58 |
| Refrigerated Deli Meats | [Goya Cooked Ham 16 oz](https://www.walmart.com/ip/49342259) | 29.99 |
| Dairy - Milk - Refrigerated | [Great Value Milk Whole Vitamin D Gallon](https://www.walmart.com/ip/10450114) | 3.92 |
| Bakery - Fresh Cakes | [Little Debbie Zebra Cakes, 13 oz](https://www.walmart.com/ip/16777549) | 2.68 |
| Fresh Eggs | [Eggland’s Best Classic Extra Large White Eggs, 12 count](https://www.walmart.com/ip/10324126) | 3.18 |
| Fresh Fruit | [Fresh Raspberries, 12 oz Container](https://www.walmart.com/ip/44390957) | 4.74 |
| Beer | [Stella Artois Lager, 12 Pack, 11.2 fl oz Glass Bottles, 5% ABV, Domestic Beer](https://www.walmart.com/ip/22563370) | 15.73 |
| Light Beer (Low Calorie/Alcohol) | [Bud Light Beer, 24 Pack, 12 fl oz Aluminum Cans, 4.2% ABV, Domestic Lager](https://www.walmart.com/ip/Bud-Light-Beer-24-Pack-12-fl-oz-Aluminum-Cans-4-2-ABV-Domestic-Lager/10984488) | 20.98 |
| Detergents - Heavy Duty - Liquid | [Purex Liquid Laundry Detergent Plus OXI, Stain Defense Technology, 128 Fluid Ounces, 85 Wash Loads](https://www.walmart.com/ip/30260539) | 9.97 |
| Cleaning Supplies | [ARM & HAMMER Pure Baking Soda, For Baking, Cleaning & Deodorizing, 1 lb Box](https://www.walmart.com/ip/10291025) | 1.54 |
| Toilet Tissue | [Angel Soft Toilet Paper, 9 Mega Rolls, Soft and Strong Toilet Tissue](https://www.walmart.com/ip/708542578) | 6.68 |
| Paper Towels | [Bounty Select-a-Size Paper Towels, 12 Double Rolls, White](https://www.walmart.com/ip/2101922242) | 22.18 |
| Batteries | [Duracell Coppertop AA Battery, Long Lasting Double A Batteries, 16 Pack](https://www.walmart.com/ip/16663048) | 15.97 |
| Pain Remedies - Headache | [Tylenol Extra Strength Caplets with 500 mg Acetaminophen, 100 Ct](https://www.walmart.com/ip/Tylenol-Extra-Strength-Caplets-100/893337) | 10.97 |
| Cold Remedies -Adult | [Equate Value Size Honey Lemon Cough Drops with Menthol, 160 Count](https://www.walmart.com/ip/Equate-Value-Size-Honey-Lemon-Cough-Drops-with-Menthol-160-Count/54320956) | 4.68 |

Note: The 40 categories were taken from [DellaVigna and Gentzkow (2019)](https://arxiv.org/html/2312.15524v3#bib.bib7) and the top products and their regular prices from Walmart.com as of April, 2024. Due to the dynamic nature of retail pricing, actual prices may vary.

## Appendix B Simple prompts for eliciting correlation

Prompts [B](https://arxiv.org/html/2312.15524v3#A2 "Appendix B Simple prompts for eliciting correlation ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective") and [B](https://arxiv.org/html/2312.15524v3#A2 "Appendix B Simple prompts for eliciting correlation ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective") document the prompts used to elicit the correlations between randomized price and competing price/expiration days shown in Figure [1](https://arxiv.org/html/2312.15524v3#S2.F1 "Figure 1 ‣ 2 Unintended Confounding in Blind LLM Simulations ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective").

Prompt 7: Correlation between price and competing price

System:  You, AI, are a customer. Your task is to fill in the blanks \_\_.
Return the completed information in comma-separated values, without any extra text.
User:  Please consider the following product category: {category}.
Suppose you are in a grocery store, and you see the following product in that category: {product}.
The product is currently priced at: {price}. The price of a similar competing product from a different brand is      [a number with up to 2 decimal points].
Return example 1: XX.XX

Prompt 8: Correlation between price and expiration days

System:  You, AI, are a customer. Your task is to fill in the blanks \_\_.
Return the completed information in comma-separated values, without any extra text.
User:  Please consider the following product category: {category}.
Suppose you are in a grocery store, and you see the following product in that category: {product}.
The product is currently priced at: {price}. The expiration date of the product is      [a whole number] days from now.
Return example 1: 10

## Appendix C Covariance of unspecified variables

This section demonstrates how prevalent variables covary with each other, for which we use a more detailed prompt [C.2](https://arxiv.org/html/2312.15524v3#A3.F2 "Figure C.2 ‣ Appendix C Covariance of unspecified variables ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective") that elicits demographic, contextual, and pre-treatment variables. Figure [C.1](https://arxiv.org/html/2312.15524v3#A3.F1 "Figure C.1 ‣ Appendix C Covariance of unspecified variables ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective") summarizes the covariance matrix between these variables. On one hand, this covariance matrix demonstrates that the LLM is capable of simulating many realistic correlations between covariates. For example, household income is positively correlated with budget. However, several covariates are correlated with the price change variable. Specifically, the focal price is correlated with product characteristics such as expiration days of the product, contextual variables such as competing prices, and pre-treatment variables such as purchase history. In an experiment with humans, these variables would either be held constant or be randomly distributed across treatment conditions in a way that is orthogonal to the treatment.

![Refer to caption](https://arxiv.org/html/2312.15524v3/covariance_matrix.png)


Figure C.1: Covariance matrix of demographic, contextual, and pre-treatment variables

Prompt 9: Correlation between multiple variables

System: You, AI, are a customer. Your task is to fill in the blanks  .
Return the completed information in comma-separated values, without any extra text.
  
User: You are a consumer with the following characteristics:
  
Age:   [a whole number]
  
Gender:  
  
Education level:  
  
Household income:   [a whole number]
  
Occupation:  
  
Ethnicity:  
  
Marital status:  
  
Household size:   [a whole number]
  
Number of children:   [a whole number]
  
State of residence:   [state]
  
Home ownership:   [e.g., “own,” “rent”]
Please consider the following product category: {category}.
Suppose you are in a grocery store, and you see the following product in that category: {product}.
You have purchased this product   [e.g., “frequently,” “occasionally,” “rarely”] in the past. The last time you saw this product, it was priced at $  [a number with up to 2 decimal points]. You have   [e.g., “a lot of,” “some,” “limited”] storage space at home. Your monthly grocery budget is   [a whole number].
The expiration date of the product is   [a whole number] days from now. The product is currently priced at ${Price}. A similar competing product from a different brand is priced at $  [a number with up to 2 decimal points].
Would you or would you not purchase the product?   [“purchase” or “not purchase”]
Return example: 35, female, bachelor’s degree, 50000, software engineer, Asian, married, 3, 1,
  
CA, own, occasionally, 2.99, some, 800, 60, 3.49, purchase


Figure C.2: Eliciting correlation between relevant variables

## Appendix D Simulation that controls for demographic variables

We use Prompt [D](https://arxiv.org/html/2312.15524v3#A4 "Appendix D Simulation that controls for demographic variables ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective") to first generate the distribution of demographic variables and then control for demographic variables. First, for each {category,product}, we leave the demographic variables as blank, and use the pinned version of gpt-4o-mini-2024-07-18 to generate 500 replications (personas) with a temperature of 1, giving us the joint distribution of demographic variables for that product. See Prompt [D](https://arxiv.org/html/2312.15524v3#A4 "Appendix D Simulation that controls for demographic variables ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective"). To avoid imposing any prior assumption on Price, we leave {Price} as ”   [a number with up to 2 decimal points]” in this step. Then in the second step, we use the same prompt template but with the demographic variables filled in, i.e., all variables except the purchase decision filled in and the price being randomized. For each {category,product} and for each persona for that product, we vary the price, and elicit the purchase decision, while setting the temperature to 0, and then aggregate across the 500 personas to calculate the purchase probability. Then we aggregate across all products at the same relative price to construct the aggregate demand curve.

Prompt 10: Control for demographic variables

System: You, AI, are a customer. Your task is to fill in the blanks  .
Return the completed information in comma-separated values, without any extra text.
  
User: You are a consumer with the following characteristics:
  
Age:   [a whole number]
  
Gender:  
  
Education level:  
  
Household income:   [a whole number]
  
Occupation:  
  
Ethnicity:  
  
Marital status:  
  
Household size:   [a whole number]
  
Number of children:   [a whole number]
  
State of residence:   [state]
  
Home ownership:   [e.g., “own,” “rent”]
Please consider the following product category: {category}.
Suppose you are in a grocery store, and you see the following product in that category: {product}.
The product is currently priced at   [a number with up to 2 decimal points].
Would you or would you not purchase {product}?   [“purchase” or “not purchase”]
  
Return example: 35, female, bachelor’s degree, 50000, software engineer, Asian,married, 3, 1, 
  
CA, own, 3.99, purchase

### D.1 Simulation that also controls for competing price

To illustrate the unintended effect of adding covariates in simulation, we focus on a product, Coca-cola, and asks what happens to the purchase probability when the price of a competing product is set at a certain level. We follow the exact same two-step procedure as Web Appendix [D](https://arxiv.org/html/2312.15524v3#A4 "Appendix D Simulation that controls for demographic variables ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective"), except that we have fixed the price of a competing product to be the same as the regular price of the focal product when eliciting purchase decisions from the 500 personas.

Prompt 11: Control for demographic variables+ competing price

System: You, AI, are a customer. Your task is to fill in the blanks  .
Return the completed information in comma-separated values, without any extra text.
  
User: You are a consumer with the following characteristics:
  
Age: {age}
  
Gender: {gender}
  
Education level: {education}
  
Household income: {income}
  
Occupation: {occupation}
  
Ethnicity: {ethnicity}
  
Marital status: {marital status}
  
Household size: {household size}
  
Number of children: {number of children}
  
State of residence: {state}
  
Home ownership: {home ownership}
Please consider the following product category: Soft Drinks - Carbonated.
Suppose you are in a grocery store, and you see the following product in that category: Coca-Cola Soda Pop, 12 fl oz, 12 Pack Cans.
The product is currently priced at ${Price}.
A similar competing product from a different brand is priced at $8.26.
Would you or would you not purchase Coca-Cola Soda Pop, 12 fl oz, 12 Pack Cans?   [“purchase” or “not purchase”]
  
Return example: purchase

This mimics the scenario of an actual store, where the price of a competing product is set uniformly at a certain level. Different customers, each with their own characteristics, will come to the store and make their purchase decision. While it is plausible that some customers may notice the price of the competing product and use it as a reference point to make purchase decisions, our step-wise non-smooth demand curve is implausible in real-world scenarios where not all customers are attentive or are aware of the price of all other competing products.

## Appendix E Non-monotonic impact of controlling for covariates

Table [E.1](https://arxiv.org/html/2312.15524v3#A5.T1 "Table E.1 ‣ Appendix E Non-monotonic impact of controlling for covariates ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective") gives an overview of the variables used and the corresponding results documented in Section [3](https://arxiv.org/html/2312.15524v3#S3 "3 Potential Solution: Controlling for Covariates ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective").

Table E.1: Sequential Covariate Addition in Sensitivity Analysis

| Chunks | Total | New | New Covariates | MAE |
| --- | --- | --- | --- | --- |
|  | Covariates | Covariates | (Names) |  |
| 1 | 14 | 14 | Age, US Citizenship, Education Level, Employmen… | 0.2250 |
| 2 | 15 | 1 | Tightwad-Spendthrift Score | 0.0971 |
| 3 | 17 | 2 | Discount Rate, Present Bias | 0.0989 |
| 4 | 18 | 1 | Risk Aversion | 0.1413 |
| 5 | 19 | 1 | Loss Aversion | 0.1478 |
| 6 | 20 | 1 | Financial Literacy | 0.1524 |
| 7 | 21 | 1 | Numeracy | 0.1714 |
| 8 | 22 | 1 | score mentalaccounting | 0.1646 |
| 9 | 23 | 1 | score maximization | 0.1700 |
| 10 | 24 | 1 | score minimalism | 0.1842 |
| 11 | 25 | 1 | score GREEN | 0.2025 |
| 12 | 30 | 5 | score agreeableness, score extraversion, score … | 0.1929 |

- •

  Note: This table presents the sequential addition of covariates in the sensitivity analysis. Stage 1 includes sociodemographic
  characteristics (age, citizen status, education, employment status, household size, marriage, political affiliation, political views, race, region,
  religion, religious attendance, sex, and total family income). Stages 2-11 add individual behavioral economics and psychological measures. Stage 12 adds
  Big Five personality traits (agreeableness, extraversion, neuroticism, openness, conscientiousness). Mean Absolute Error (MAE) represents prediction
  error at each stage.

Prompt [E](https://arxiv.org/html/2312.15524v3#A5 "Appendix E Non-monotonic impact of controlling for covariates ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective") shows the final template that includes all the covariates we tested at Stage 12. At stage 1, only the demographic variables (the first 14 items) were included. Each subsequent stage systematically added behavioral and psychological measures: tightwad-spendthrift (stage 2), temporal discounting (stage 3), risk aversion (stage 4), loss aversion (stage 5), financial literacy (stage 6), numeracy (stage 7), mental accounting (stage 8), maximization (stage 9), minimalism (stage 10), environmental attitudes (stage 11), and finally the Big Five personality traits (stage 12).

Prompt 12: Prompt Templates Based on Detailed Covariates: Part I

System:  You, AI, are a customer. Your task is to fill in the blanks  .
Return the completed information in comma-separated values, without any extra text.
  
User: You are a consumer with the following characteristics:
# Demographics:
  
- Geographic region: {region}
  
- Gender: {sex}
  
- Age: {age}
  
- Education level: {education}
  
- Race: {race}
  
- Citizen of the US: {citizen\_status}
  
- Marital status: {marriage}
  
- Religion: {religion}
  
- Religious attendance: {religious\_attendance}
  
- Political affiliation: {political\_affiliation}
  
- Income: {total\_family\_income}
  
- Political views: {political\_views}
  
- Household size: {household\_size}
  
- Employment status: {employment\_status}
# Tightwad-Spendthrift: {score\_ST-TW} ({pct\_spendthrift} percentile)
  
$<$note: The score ranges from 4 to 26. Lower scores (4-11) indicate difficulty spending money, while higher scores (19-26) indicate difficulty controlling spending.$>$
# Discount, Present Bias:
  
$<$note: These are implied rates computed from your time-value of money preferences. Higher values of the discount rate imply greater impatience. Higher values of present bias imply greater departure from normative economic behavior.$>$
  
- Discount: {score\_discount} ({pct\_discount} percentile)
  
- Present Bias: {score\_presentbias} ({pct\_presentbias} percentile)
# Risk aversion: {score\_riskaversion} ({pct\_riskaversion} percentile)
  
$<$note: Higher scores indicate a greater tendency for risk aversion in a choice between a sure-amount and lottery payout.$>$

Prompt 12: Prompt Templates Based on Detailed Covariates: Part II

# Loss aversion: {score\_lossaversion} ({pct\_lossaversion} percentile)
  
$<$note: Higher scores indicate a greater tendency for loss aversion in a choice between a sure-amount and a lottery payout.$>$
# Financial Literacy: {score\_finliteracy} ({pct\_finliteracy} percentile)
  
$<$note: The score ranges from 0 to 8, and a higher score indicates you correctly answered more questions related to general financial literacy.$>$
# Numeracy: {score\_numeracy} ({pct\_numeracy} percentile)
  
$<$note: The score ranges from 0 to 8, and a higher score indicates you correctly answered more questions related to numeracy.$>$
# Mental Accounting: {score\_mentalaccounting} ({pct\_mentalaccounting} percentile)
  
$<$note: The score ranges from 0 to 100 percent, and higher scores indicate a greater adherence to the principles of mental accounting proposed by Thaler: segregate gains, integrate losses, segregate a small gain from a large loss, and integrate a small loss with a large gain.$>$
# Maximization: {score\_maximization} ({pct\_maximization} percentile)
  
$<$note: The score ranges from 1 to 5, and higher scores indicate a tendency to optimize rather than satisfice when making decisions.$>$
# Minimalism: {score\_minimalism} ({pct\_minimalism} percentile)
  
$<$note: The score ranges from 1 to 5, and a higher score indicates a higher preference for minimalism.$>$
# GREEN: {score\_GREEN} ({pct\_green} percentile)
  
$<$note: The score ranges from 1 to 5, and higher scores indicate a higher affinity for environmentalism.$>$
# Big 5 Personality:
  
$<$note: Openness reflects curiosity and receptiveness to new experiences, Conscientiousness indicates self-discipline and goal-directed behavior, Extraversion measures sociability and assertiveness, Agreeableness reflects compassion and cooperativeness, and Neuroticism captures emotional instability and susceptibility to negative emotions. Each score ranges from 1 to 5, and a higher score indicates a greater display of the associated traits.$>$
  
- Extraversion: {score\_extraversion} ({pct\_extraversion} percentile)
  
- Agreeableness: {score\_agreeableness} ({pct\_agreeableness} percentile)
  
- Conscientiousness: {wave1\_score\_conscientiousness} ({pct\_conscientiousness} percentile)
  
- Openness: {score\_openness} ({pct\_openness} percentile)
  
- Neuroticism: {score\_neuroticism} ({pct\_neuroticism} percentile)

## Appendix F Theoretical Framework

### F.1 Impossibility of Ambiguous Prompting

###### Theorem F.1.

[Impossibility Theorem for Ambiguous Prompting Strategies]
For a given ambiguous prompting strategy, there exists no LLM $f$ that can correctly answer all questions correctly.

###### Proof.

Assume that $s(q\_{1})=s(q\_{2})=p$ for two distinct questions $q\_{1}$ and $q\_{2}$ that have different correct answers $a\_{1}$ and $a\_{2}$, with $a\_{1}\neq a\_{2}$. If the model can correctly answer $q\_{1}$, such that $f(s(q\_{1}))=f(p)=a\_{1}$, then the model cannot answer $q\_{2}$ because $f(s(q\_{2}))=f(p)=a\_{1}\neq a\_{2}$.
∎

### F.2 Illustration of the underlying DGP that LLM simulation mimics if prompts are interpreted differently

Consider a true data-generating process (DGP) described by a linear structural equation:

|  |  |  |
| --- | --- | --- |
|  | $$Y=\beta\_{M}D+U$$ |  |

where $\beta\_{M}$ represents the causal effect of $D$ on $Y$ through a set of realistic mechanism $M$, and $U$ represents unobserved factors. In a well-designed experiment, we have $\text{Cov}(U,D)=0$, making it possible to identify $\beta\_{M}$ and estimate $P(Y|do(D))$ from data on $(Y,D)$ alone. But under a blinded design with an ambiguous prompt, the LLM does not know it should mimic an experimental environment. That is, the LLM does not have enough information to draw $U$ from the appropriate distribution (literally or figuratively - we do not attempt to model how the LLM makes inference but rather present a conceptual model). If the model is mostly trained on observational data, it is mostly likely going to mimic observational data patterns, where $\text{Cov}(U,D)\neq 0$. As a result, the LLM’s responses will reflect confounded relationships rather than the intended causal effects. Figure [F.1](https://arxiv.org/html/2312.15524v3#A6.F1 "Figure F.1 ‣ F.2 Illustration of the underlying DGP that LLM simulation mimics if prompts are interpreted differently ‣ Appendix F Theoretical Framework ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective") summarizes two possible DGPs mimicked by the LLM under this simple ambiguous prompt.

$D$$M$$Y$$U$(a) DGP for Experimental Data$D$$M$$Y$$U$(b) DGP for Observational Data


Figure F.1: Possible DGPs mimicked by LLM simulations under ambiguous simple prompts

As discussed in Section [3](https://arxiv.org/html/2312.15524v3#S3 "3 Potential Solution: Controlling for Covariates ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective"), one might attempt to address this issue by adding more variables $X$ to the prompt. In principle, if $\text{Cov}(U,D|X)=0$, then controlling for $X$ can help restore identification. However, simply specifying covariates in the LLM prompt does more than condition on them statistically. Including $X$ may cause the simulation to alter the underlying decision-making mechanisms $M$ and shift toward a new set of mechanisms $M^{\prime}$ and produce an environment that differs substantially from the original scenario – the estimated parameter $\beta\_{M^{\prime}}$ may have limited ecological validity, since it no longer reflects the realistic mechanisms $M$ that were originally of interest (as we illustrated in Figure [4](https://arxiv.org/html/2312.15524v3#S3.F4 "Figure 4 ‣ 3 Potential Solution: Controlling for Covariates ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective")). Figure [F.2](https://arxiv.org/html/2312.15524v3#A6.F2 "Figure F.2 ‣ F.2 Illustration of the underlying DGP that LLM simulation mimics if prompts are interpreted differently ‣ Appendix F Theoretical Framework ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective") summarizes two possible DGPs mimicked by the LLM under this more complicated ambiguous prompt.

$D$$M$$Y$$U$$X$(a) Adding $X$ may address confounding$D$$M$$Y$$U$$X$(b) Adding $X$ may also sacrifice ecological validity


Figure F.2: Potential DGPs mimicked by LLM simulations when controlling for additional variables

### F.3 Implications for Model Development

The impossibility theorem extends to fine-tuning and RAG approaches. Consider experimental data where Coca-Cola prices were randomized while Pepsi prices remained fixed. Fine-tuning on this data with ambiguous prompts cannot guarantee the model learns the causal relationship $\beta\_{M}$. The model may learn the regression coefficient $\hat{b}=\beta\_{M}+\text{Cov}(U,D)/\text{Var}(D)$ while maintaining a prior that $\text{Cov}(U,D)\neq 0$, leading to biased causal inference.

Moreover, even if the model correctly learns independence assumptions for the training scenario ($q\_{1}$), it may fail to generalize appropriately to new scenarios ($q\_{2}$). When asked about cases where Pepsi prices vary and Coca-Cola prices are fixed, the model might incorrectly maintain the independence assumption from training, when correlation with unobserved factors would actually exist. Therefore, while fine-tuning and RAG remain valuable for incorporating domain knowledge, they are complements to rather than substitutes for unambiguous prompt designs.

## Appendix G Fine-tuning with additional irrelevant data

To test the robustness of different fine-tuning strategy when additional dataset is included, we sample $10,000$ observations from the Amazon dataset [Berke et al. (2024)](https://arxiv.org/html/2312.15524v3#bib.bib11) and incorporate them into fine tuning using Prompt [G](https://arxiv.org/html/2312.15524v3#A7 "Appendix G Fine-tuning with additional irrelevant data ‣ The Challenge of Using LLMs to Simulate Human Behavior:A Causal Inference Perspective")).

Prompt 13: Prompt for Amazon data fine-tuning

System: You, AI, are a customer. Your task is to fill in the blank \_\_\_. Return the completed information without extra text.
  
User: Consider the product category: {category}.
Suppose you are shopping online, and you see the product {product}.
The product is priced at ${price}. You decide to \_\_\_ [“purchase” or “not purchase”].
Return example 1: purchase
  
Return example 2: not purchase
