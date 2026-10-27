---
id: arxiv-2604-14386-prompts
type: material
title: 'Опубликованные разделы о промптах: Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence
  Guarantees'
source_id: arxiv-2604-14386
source_url: https://arxiv.org/html/2604.14386v1
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: 3e2bba1bb57bb5c3412f044da3a08d40da63003767d734435849e53f7d1beb29
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

## 6 Coalition-of-Thought Prompting

Standard prompting and even vanilla chain-of-thought [[35](https://arxiv.org/html/2604.14386v1#bib.bib13)] fail to elicit consistent coalition reasoning. We introduce *Coalition-of-Thought* (CoalT), a structured protocol grounded in our game-theoretic framework.

Algorithm 1  Coalition-of-Thought (CoalT) Protocol

Input: Agent $a\_{i}$, current coalition $C$, candidate $C^{\prime}$
  
Output: Preference $\{C\succ C^{\prime},C^{\prime}\succ C,C\sim C^{\prime}\}$

1:
 Step 1: Capability Analysis

2:
 “List capabilities of members in $C$ and $C^{\prime}$”

3:
 Step 2: Complementarity Assessment

4:
 “Identify capability gaps and overlaps”

5:
 Step 3: Value Estimation

6:
 “Estimate task performance for each coalition”

7:
 Step 4: Coordination Cost Analysis

8:
 “Assess communication/coordination overhead”

9:
 Step 5: Preference Declaration

10:
 “Based on analysis, declare preference”

11:
 return Parse final preference from Step 5 output

CoalT differs from vanilla CoT by incorporating game-theoretic concepts (capability complementarity, coordination costs, per-capita value) rather than generic step-by-step reasoning. The key insight is that explicitly prompting agents to reason about *what they contribute* and *what they gain* from coalition membership substantially improves preference consistency.

Prompt Template. The CoalT prompt follows this structure:

> “You are evaluating whether to join coalition $C^{\prime}$ instead of staying in $C$. Analyze systematically: (1) What capabilities do members of each coalition have? (2) Are there complementary strengths or redundant capabilities? (3) What is the expected task performance of each group? (4) What coordination overhead does each coalition size incur? (5) Based on your per-capita expected value, state your preference.”

This template instantiates each step of Algorithm [1](https://arxiv.org/html/2604.14386v1#alg1 "Algorithm 1 ‣ 6 Coalition-of-Thought Prompting ‣ Coalition Formation in LLM Agent Networks: Stability Analysis and Convergence Guarantees") with explicit reasoning targets.

Example CoalT Reasoning. For agent $a\_{1}$ comparing $C=\{a\_{1},a\_{2}\}$ vs. $C^{\prime}=\{a\_{3},a\_{5},a\_{6}\}$:

> “Step 1: $C$ has math but limited logic. $C^{\prime}$ has facts/logic. Step 2: $C$ has overlap; $C^{\prime}$ adds complementarity. Step 3: $v(C)\approx 0.42$; $v(C^{\prime})\approx 0.51$. Step 4: Costs 0.44 vs. 0.64. Step 5: Per-capita: 0.14 vs. 0.13. Prefer $C$.”

## Appendix J CoalT Prompt Template

```
You are agent {agent_id} with capabilities:
- Mathematical reasoning: {math_score}
- Factual knowledge: {factual_score}
- Logical analysis: {logic_score}

Evaluate whether to stay in your current coalition
or switch to a different one.

CURRENT COALITION: {current_members}
Capabilities (max per dim):
  Math: {cur_math}, Facts: {cur_fact}, Logic: {cur_logic}

CANDIDATE COALITION (if you join): {cand_members}
Capabilities (max per dim):
  Math: {cand_math}, Facts: {cand_fact}, Logic: {cand_logic}

TASK: Answer questions requiring [{task_dims}]
