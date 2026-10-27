---
id: arxiv-2605-00914-prompts
type: material
title: 'Опубликованные разделы о промптах: The Cost of Consensus: Isolated Self-Correction Prevails Over Unguided
  Homogeneous Multi-Agent Debate'
source_id: arxiv-2605-00914
source_url: https://arxiv.org/html/2605.00914v1
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: f522194621f64df9641115ce110b16b6e1924959bb4547f3130c7af7f644a697
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

## Appendix A Experimental Prompts

To ensure full reproducibility, we provide the exact prompt templates used across all experimental conditions. The variables enclosed in brackets (e.g., {question}) were dynamically populated during inference.

### A.1. GSM-Hard Prompts

Base Generation Round 1 - GSM-Hard

```
Solve this math problem step by step.
Be concise (max 4 lines).

Problem: {question}

Format EXACTLY:
RATIONALE: <brief reasoning>
FINAL: <integer>
CONF: <0-100>
```

Peer Revision Prompt (Round 2 and 3) - GSM-Hard

```
You already solved this problem.
Now consider what other team members said.
Carefully evaluate their reasoning — they may be
wrong. Update or keep your answer.

Problem: {question}

Your previous answer: {own_answer}

Peer responses:
Agent 1: FINAL: {answer} \n
CONF: {confidence} \n TEXT: {rationale}
...
Agent N: FINAL: {ans} \n
CONF: {confidence} \n TEXT: {rationale}

Format EXACTLY:
RATIONALE:<brief reasoning, note any disagreements>
FINAL: <integer>
CONF: <0-100>
```

Extended Generation Baseline (10x Token Budget) - GSM-Hard

```
Solve this math problem step by step. You have
extra space — work carefully, reason through
each step, double-check your calculations,
and verify.

Problem: {question}

Format EXACTLY:
RATIONALE: <detailed reasoning with verification>
FINAL: <integer>
CONF: <0-100>
```

### A.2. MMLU-Hard Multiple Choice Prompts

Base Generation (Round 1) - MMLU-Hard

```
Answer the multiple-choice question.
Be concise (max 4 lines).

Question: {question}
{choices}

Format EXACTLY:
RATIONALE: <brief reasoning>
FINAL: <A, B, C, or D>
CONF: <0-100>
```

Peer Revision Prompt (Rounds 2 & 3) - MMLU-Hard

```
You already solved this problem.
Now consider what other team members said.
Carefully evaluate their reasoning — they may
be wrong. Update or keep your answer.

Question: {question}
{choices}

Your previous answer: {own_answer}

Peer responses:
Agent 1: FINAL: {answer} \n CONF: {confidence} \n
TEXT: {rationale}
...
Agent N: FINAL: {answer} \n CONF: {confidence} \n
TEXT: {rationale}

Format EXACTLY:
RATIONALE:<brief reasoning, note any disagreements>
FINAL: <A, B, C, or D>
CONF: <0-100>
```

Extended Generation Baseline (10x Token Budget) - MMLU-Hard

```
Answer the multiple-choice question.
You have extra space — consider each
option carefully, eliminate wrong answers,
reason through edge cases, and verify.

Question: {question}
{choices}

Format EXACTLY:
RATIONALE: <detailed reasoning with verification>
FINAL: <A, B, C, or D>
CONF: <0-100>
```

Grid of line plots showing team accuracy, oracle accuracy, consensus, and vulnerability across three debate rounds for each model on GSM-Hard, comparing debate, self-correction, and noise conditions.


Figure 3. Round-by-round evolution on GSM-Hard. Columns: Team Accuracy, Oracle Accuracy, Consensus, Vulnerability. Rows: Qwen2.5-7B, Llama-3.1-8B, Ministral-3-8B. Red/solid: Debate. Green/dashed: self-correction. Blue/dotted: Noise. Grid of line plots showing team accuracy, oracle accuracy, consensus, and vulnerability across three debate rounds for each model on GSM-Hard, comparing debate, self-correction, and noise conditions.


Grid of line plots showing team accuracy, oracle accuracy, consensus, and vulnerability across three debate rounds for each model on MMLU-Hard, comparing debate, self-correction, and noise conditions.


Figure 4. Round-by-round evolution on MMLU-Hard. Same layout as Figure [3](https://arxiv.org/html/2605.00914v1#A1.F3 "Figure 3 ‣ A.2. MMLU-Hard Multiple Choice Prompts ‣ Appendix A Experimental Prompts ‣ The Cost of Consensus: Isolated Self-Correction Prevails Over Unguided Homogeneous Multi-Agent Debate"). Note Ministral’s catastrophic vulnerability escalation (bottom right) and the noise condition’s delayed collapse on this model.Grid of line plots showing team accuracy, oracle accuracy, consensus, and vulnerability across three debate rounds for each model on MMLU-Hard, comparing debate, self-correction, and noise conditions.
