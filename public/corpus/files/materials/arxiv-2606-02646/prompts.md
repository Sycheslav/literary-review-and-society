---
id: arxiv-2606-02646-prompts
type: material
title: 'Опубликованные разделы о промптах: The Ringelmann Effect in Multi-Agent LLM Systems: A Scaling Law for Effective
  Team Size'
source_id: arxiv-2606-02646
source_url: https://arxiv.org/html/2606.02646v1
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: e6ab0683150816b7a38e0e59f4d4c9978c76532a4b7a6f96970fb582c276bce8
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

### C.2 Prompt templates

All agents receive structured prompts that request a final answer, confidence score, and brief rationale. The format is identical across conditions, and only the peer-response block varies.

Initial solve (MCQA):

```
Answer the multiple-choice question. Be concise.

Question: {question}
{choices}

Format EXACTLY (answer and confidence FIRST, then reasoning):
FINAL: <A, B, C, or D>
CONF: <0-100>
RATIONALE: <brief reasoning, max 4 lines>
```

For math tasks, “FINAL: <integer>” replaces the letter constraint, and the rest of the template is analogous.

Revision (debate / self-correction / noise):

```
You already solved this problem. Now consider what
other team members said. Carefully evaluate their
reasoning -- they may be wrong. Update or keep your answer.

Question: {question}
{choices}

Your previous answer:
{own_answer}

Peer responses:
{peers}

Format EXACTLY (answer and confidence FIRST, then reasoning):
FINAL: <A, B, C, or D>
CONF: <0-100>
RATIONALE: <brief reasoning, note any disagreements>
```

The three communication conditions differ only in how {peers} is populated:

- •

  Debate (comm\_true): true peer snippets from the same item.
- •

  Self-correction (comm\_self): the agent’s own previous output,
  formatted identically to a peer snippet.
- •

  Noise (comm\_random): randomly shuffled snippets drawn from
  other agents’ responses to *different* items.

Each peer snippet is formatted as “Agent {i}: FINAL: {answer} CONF: {conf} TEXT: {reasoning}” and truncated to 120 tokens to keep prompts within context limits at large $N$.
