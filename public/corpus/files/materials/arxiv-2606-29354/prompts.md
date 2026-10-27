---
id: arxiv-2606-29354-prompts
type: material
title: 'Опубликованные разделы о промптах: When LLMs Develop Languages: Symbolic Communication for Efficient Multi-Agent
  Reasoning'
source_id: arxiv-2606-29354
source_url: https://arxiv.org/html/2606.29354v2
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: 22103a3218276fa086264ed1cd30902289b4bd31074bc90f9efb60e1a0a6639a
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

### A.1 Comparison to length-controlled prompting baselines.

Compared with Constrained CoT (CCoT), Chain-of-Draft (CoD), and Sketch-of-Thought (SoT), CLSR
achieves a stronger overall trade-off:
(i) relative to CCoT, CLSR improves accuracy while also using fewer tokens (since CCoT removes
verbosity but does not introduce a task-adaptive symbolic code);
(ii) relative to CoD, CLSR substantially improves accuracy at a modest token increase, indicating
that extreme compression alone is not sufficient,
i.e., the intermediate representation must remain *information-dense and compositional*;
(iii) relative to SoT, CLSR achieves higher accuracy with a similar token budget, suggesting that our *evolutionary search over LSFs* discovers more task-specialized symbolic operators than a fixed handcrafted constraint family.

## Appendix B Prompt Templates for LSF Synthesis, Mutation, and Routing

This appendix provides the prompt templates used by CLSR.
The templates are intentionally lightweight: the LLM is given the optimization goal and a compact schema, but the concrete symbolic protocol is not manually authored.

LSF synthesis prompt.
Given a set of exemplar question–answer pairs with reasoning traces, we use the following template:

> Please design a Language Symbolism Framework (LSF) based on the exemplars in the chat history to minimize the number of tokens while maintaining the reasoning capacity.
> An LSF is a symbolic communication code comprising:
> (i) symbol naming, namely a compact lexicon;
> (ii) syntax, namely a compositional grammar; and
> (iii) constraints, namely well-formedness and usage rules.
> The LSF should help an LLM solve similar problems with concise symbolic reasoning.
> Return the LSF specification, including the symbol table, grammar, reasoning protocol, answer format, and failure checks.

LSF mutation prompt.
After evaluating a generation of LSFs, we select high-leverage traces that are both correct and token-efficient.
The mutation prompt is:

> You are given several parent LSFs and their high-leverage solution traces.
> A high-leverage trace is correct and uses fewer tokens than competing traces for the same query.
> Refine or recombine the parent LSFs to produce a next-generation LSF.
> Keep symbolic conventions that support correct concise reasoning; remove redundant notation; repair ambiguous rules; and add only minimal verification tags when they improve reliability.
> Do not simply rewrite the example answers.
> Return a reusable LSF specification that can be applied to unseen queries.

LSF profile summarization prompt.
For each candidate LSF $S\_{k}$, we summarize its empirical profile from validation rollouts:

> Given an LSF specification and its validation rollouts, summarize its profile for routing.
> Include:
> (i) query types where this LSF performs well;
> (ii) validation accuracy;
> (iii) median generated-token footprint;
> (iv) common failure modes;
> (v) reliability under different problem difficulties; and
> (vi) a short descriptor that can be used by an LLM-router.
> Keep the descriptor compact and factual.

Router-card distillation prompt.
To make routing both compact and reproducible, the above profile is then distilled into a short card consumed by the LLM-router:

> Given an LSF specification and its empirical profile, output exactly one compact router card in the following format:
> [ID] TAG | perf:<acc>/<tok> | IO | STOP
> where acc is the validation accuracy rounded to two decimals,
> tok is the median generated-token count,
> IO is a short output-schema descriptor,
> and STOP is a short stopping-contract descriptor.
> Do not output explanations.

This produces cards like
[ALG1] linear/eq | perf:.81/42 | out:ans,brief | stop:conf>=0.6,
which expose the empirical accuracy–cost profile to the router while keeping the prompt prefix compact.

Stage-1 category-routing prompt.
At test time, we use a category-routing prompt to prune the candidate LSF pool:

> You are an LSF category router.
> Given the query, output exactly one line in the format
>
> C:<category-list>
>
> where <category-list> contains one or two comma-separated category codes chosen from the predefined vocabulary.
> Use a broad backup category when the query is ambiguous.
> Do not output explanations.

For example, the router may emit
C:ALG,
C:PHY,ALG,
or
C:QA,HIS.

Stage-2 protocol-planning prompt.
Given the query and the compact LSF cards selected by Stage 1, the router emits a structured execution plan:

> You are an LSF protocol router.
> Given the query and the available LSF cards, choose the cheapest reasoning protocol that is likely to preserve correctness.
> Output exactly one line in the following format:
>
> M:<mode>;L:<lsf-list>;R:<round-spec>;K:<n>;A:<agg>;S:<stop>
>
> Use only LSF IDs that appear in the provided cards.
> Choose
> M:S for a single-LSF direct answer,
> M:A for multi-LSF aggregation,
> and
> M:C for implicit LSF composition.
> The field R specifies the round structure or composition order;
> K specifies the number of parallel samples per LSF when aggregation is used;
> A specifies the aggregation rule;
> and S specifies the stopping criterion.
> Do not output explanations or any text outside the plan line.

Why prompt templates do not make CLSR prompt optimization.
These templates specify the task interface, the empirical profile exposed to the router, and the structured control format, but not the concrete symbolic language itself.
The optimized object is the reusable LSF specification and its routing behavior, not a per-query natural-language instruction string.
The same LSFs can be reused across many unseen queries, selected by a router, and composed with other LSFs in later rounds.
