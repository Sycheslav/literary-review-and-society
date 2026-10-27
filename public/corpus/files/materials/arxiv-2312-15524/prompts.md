---
id: arxiv-2312-15524-prompts
type: material
title: 'Опубликованные разделы о промптах: The Challenge of Using LLMs to Simulate Human Behavior: A Causal Inference
  Perspective'
source_id: arxiv-2312-15524
source_url: https://arxiv.org/html/2312.15524v3
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: aadf3a06914c4519bf66fdf780c17e000de34e8075de47c42080cc2863e9e456
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

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
