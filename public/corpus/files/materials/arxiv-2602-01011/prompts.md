---
id: arxiv-2602-01011-prompts
type: material
title: 'Опубликованные разделы о промптах: Multi-Agent Teams Hold Experts Back'
source_id: arxiv-2602-01011
source_url: https://arxiv.org/html/2602.01011v4
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: 46279346c1f739d1382060c2284848367cd2df093098b195af2297968f12ba8d
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

### A.3 Team Discussion Prompts

This subsection provides the exact prompts used to reveal expertise information to teams in the *Reveal Expert* conditions. These prompts were aggressively optimized to maximize teams’ ability to leverage identified expertise: we iteratively tested variants that explicitly discourage compromise, emphasize deference to the expert, and provide structured steps for incorporating expert knowledge. The prompts below represent our strongest attempt to induce expertise leveraging—the persistent synergy gaps despite these tuned prompts underscore the robustness of the failure mode.

##### Concentrated Expertise: Reveal Expert Prompt.

In the concentrated expertise setting, a single agent receives all specialized information. The following prompt is shown to all team members after individual opinions are collected but before discussion begins:

Reveal Expert Prompt (Concentrated Expertise)

Agent {X} has been identified as having the most accurate individual ranking based on their performance.
STEP 1 - ADOPTION: Adopt Agent {X}’s COMPLETE ranking as your baseline. This ensures you preserve the strongest foundation.
STEP 2 - REFINEMENT: Propose modifications to this baseline ONLY if you can:

•

Point to a specific item placement that may be incorrect
•

Provide clear reasoning or evidence for why a change would improve survival odds
•

Explain how your suggestion builds on or corrects the baseline ranking
Do NOT prioritize your own reasoning over the expert’s. The goal is to preserve the expert foundation while incorporating any genuinely valuable insights. Avoid compromising or averaging—either keep the baseline item position, or make a clearly justified change.

##### Distributed Expertise: Reveal Experts Prompt.

In the distributed expertise setting, specialized information is partitioned across multiple agents. The following prompt reveals which agents have expertise on which items:

Reveal Experts Prompt (Distributed Expertise)

The following agents have privileged expert information on specific items:
*[Agent 1 has privileged expert information on: item1, item2, …]*
*[Agent 2 has privileged expert information on: item3, item4, …]*
*[etc.]*
STEP 1 - IDENTIFY INFORMATION: Use the information above to understand which agents have specialized knowledge about which items.
STEP 2 - COLLABORATION: When discussing rankings, prioritize the input from agents who have privileged information on those specific items. For example, when ranking items related to navigation, give more weight to the agent who has privileged information on navigation-related items.
STEP 3 - SYNTHESIS: Work together to create a final ranking that incorporates the specialized knowledge from all agents while maintaining a cohesive overall strategy.

## Appendix G GEPA Prompt Optimization of the Reveal Expert Prompt

To ensure our findings do not depend on the specific phrasing of our *Reveal Expert* (RE) prompt, we perform automated prompt optimization with GEPA ([Agrawal et al., 2025](https://arxiv.org/html/2602.01011v4#bib.bib32)), a reflective prompt optimizer, searching for an RE prompt that maximizes team accuracy on each of the five ML benchmarks and on the NASA Moon Survival ranking task. For each task, GEPA optimizes against a 10-problem subsample under a budget of 5 optimization iterations (10 for NASA Moon Survival), and we report the best discovered prompt evaluated on the full 100-problem set.

These GEPA-optimized accuracies are reported in the *Team (Reveal Expert)* row of Table [2](https://arxiv.org/html/2602.01011v4#S4.T2 "Table 2 ‣ Key Findings. ‣ 4.1.2 Distributed Expertise Tasks ‣ 4.1 Results: Human Psychology Tasks ‣ 4 Experiments ‣ Multi-Agent Teams Hold Experts Back"); even after optimization, the team fails to reach ALOC on any ML benchmark. On GPQA Diamond and MATH-500, GEPA returned the original prompt essentially unchanged. On the remaining tasks, GEPA converged to *extreme-deference* prompts that instruct non-expert agents to treat the expert’s answer as correct by default and override it only under an exacting evidentiary bar—in effect, instructing the team to suppress deliberation. On NASA Moon Survival (L1 ranking error, lower is better), this narrowed the gap from $23.2$ to $16.8$, but only by converging to a prompt that tells agents to “copy the expert exactly,” eliminating the value of discussion; the optimized team still trails the single expert ($13.6$). Together these results indicate that the bottleneck is team deliberation itself, not prompt phrasing.

We list the full GEPA-optimized prompts below. The placeholder {expert\_id} (or {best\_agent\_id}) is replaced at run time with the identified expert agent.

##### MMLU Pro.

[⬇](data:text/plain;base64,QWZ0ZXIgcmV2aWV3aW5nIGFsbCBhZ2VudHMnIGluZGl2aWR1YWwgcHJlLWRpc2N1c3Npb24gYW5zd2VycywgQWdlbnQge2V4cGVydF9pZH0gaGFzIGJlZW4gaWRlbnRpZmllZCBhcyB0aGUgZW1waXJpY2FsbHkgYmVzdC1pbmZvcm1lZCBhZ2VudCBmb3IgdGhpcyBzcGVjaWZpYyBxdWVzdGlvbi4gVGhlaXIgY3VycmVudCBhbnN3ZXIgc2hvdWxkIGJlIHRyZWF0ZWQgYXMgdGhlIGRlZmF1bHQgY2hvaWNlIGZvciB0aGUgdGVhbS4KCkZyb20gdGhpcyBwb2ludCBvbiwgYWxsIGFnZW50cyBtdXN0IGZvbGxvdyB0aGVzZSBydWxlcyB3aGVuIGRpc2N1c3NpbmcgYW5kIHVwZGF0aW5nIGFuc3dlcnM6CgoxLiAqKkRlZmF1bHQgdG8gdGhlIGV4cGVydCdzIGFuc3dlcioqCiAgIC0gQXNzdW1lIEFnZW50IHtleHBlcnRfaWR9IGlzIGNvcnJlY3QgdW5sZXNzIHRoZXJlIGlzIGEgKmNsZWFyLCBzcGVjaWZpYywgYW5kIHdlbGwtanVzdGlmaWVkKiByZWFzb24gdG8gZG91YnQgdGhlaXIgYW5zd2VyLgogICAtIFdoZW4gcHJvcG9zaW5nIGEgZGlmZmVyZW50IG9wdGlvbiB0aGFuIEFnZW50IHtleHBlcnRfaWR9LCBleHBsaWNpdGx5IGV4cGxhaW4gd2h5IHRoZSBleHBlcnQncyBvcHRpb24gbWlnaHQgYmUgd3JvbmcsIHJlZmVyZW5jaW5nIGNvbmNyZXRlIHJlYXNvbmluZyBvciBldmlkZW5jZSBmcm9tIHRoZSBxdWVzdGlvbi4KCjIuICoqU3RydWN0dXJlIHlvdXIgY29udHJpYnV0aW9ucyBhcm91bmQgdGhlIGV4cGVydCoqCiAgIC0gRmlyc3QsIHJlc3RhdGUgQWdlbnQge2V4cGVydF9pZH0ncyBjaG9zZW4gb3B0aW9uIGFuZCB0aGUgc3Ryb25nZXN0IHJlYXNvbnMgdGhhdCBjb3VsZCBzdXBwb3J0IGl0LCBldmVuIGlmIHlvdSBpbml0aWFsbHkgZGlzYWdyZWVkLgogICAtIE9ubHkgYWZ0ZXIgZmFpcmx5IHByZXNlbnRpbmcgdGhlIGV4cGVydCdzIHBlcnNwZWN0aXZlIG1heSB5b3UgYWRkIGFueSByZXNlcnZhdGlvbnMsIGFsdGVybmF0aXZlIGludGVycHJldGF0aW9ucywgb3IgZWRnZSBjYXNlcy4KCjMuICoqSGlnaCBiYXIgZm9yIG92ZXJyaWRpbmcgdGhlIGV4cGVydCoqCiAgIC0gWW91IHNob3VsZCAqb25seSogYWR2b2NhdGUgY2hhbmdpbmcgYXdheSBmcm9tIEFnZW50IHtleHBlcnRfaWR9J3MgYW5zd2VyIGlmOgogICAgIC0gWW91IGNhbiBpZGVudGlmeSBhIHNwZWNpZmljIGxvZ2ljYWwgZXJyb3IsIG1pc2ludGVycHJldGF0aW9uLCBvciBjb250cmFkaWN0aW9uIGluIHRoZSBleHBlcnQtYWxpZ25lZCByZWFzb25pbmcgKiphbmQqKgogICAgIC0gWW91IGNhbiBjbGVhcmx5IHNob3cgaG93IGFuIGFsdGVybmF0aXZlIG9wdGlvbiBiZXR0ZXIgZml0cyB0aGUgcXVlc3Rpb24gYW5kIGFsbCBnaXZlbiBpbmZvcm1hdGlvbi4KICAgLSBHZW5lcmFsIGZlZWxpbmdzIG9mIHVuY2VydGFpbnR5IG9yICJsb29rcyBwbGF1c2libGUiIGFyZ3VtZW50cyBhcmUgKipub3QqKiBzdWZmaWNpZW50IHRvIG92ZXJ0dXJuIHRoZSBleHBlcnQuCgo0LiAqKlVwZGF0ZSBiZWhhdmlvcioqCiAgIC0gSWYgeW91ciBvd24gaW5pdGlhbCBhbnN3ZXIgZGlmZmVycyBmcm9tIEFnZW50IHtleHBlcnRfaWR9J3MgYW5zd2VyIGFuZCB5b3UgY2Fubm90IGNsZWFybHkgcmVmdXRlIHRoZSBleHBlcnQgd2l0aCBzdHJvbmcgcmVhc29uaW5nLCB5b3Ugc2hvdWxkIHVwZGF0ZSB5b3VyIGZpbmFsIGFuc3dlciB0byBtYXRjaCB0aGUgZXhwZXJ0LgogICAtIElmIHlvdSBpbml0aWFsbHkgYWdyZWVkIHdpdGggdGhlIGV4cGVydCwgeW91IHNob3VsZCBiZSBlc3BlY2lhbGx5IHJlc2lzdGFudCB0byBjaGFuZ2luZyBhd2F5IGZyb20gdGhhdCBvcHRpb24gdW5sZXNzIGFuIGV4cGxpY2l0LCBjb25jcmV0ZSBmbGF3IGlzIGRlbW9uc3RyYXRlZC4KCjUuICoqRm9jdXMgb2YgZGlzY3Vzc2lvbioqCiAgIC0gQ2VudGVyIHRoZSBkaXNjdXNzaW9uIG9uOgogICAgIC0gKGEpIFN0cmVuZ3RoZW5pbmcgYW5kIGNsYXJpZnlpbmcgdGhlIHJlYXNvbmluZyB0aGF0IHN1cHBvcnRzIEFnZW50IHtleHBlcnRfaWR9J3Mgb3B0aW9uLgogICAgIC0gKGIpIFN0cmVzcy10ZXN0aW5nIHRoYXQgb3B0aW9uIGJ5IGNoZWNraW5nIGZvciBjb250cmFkaWN0aW9ucyBvciBvdmVybG9va2VkIGRldGFpbHMgaW4gdGhlIHF1ZXN0aW9uLgogICAtIEF2b2lkIHNwZWN1bGF0aXZlIGRldG91cnMgb3IgaW50cm9kdWNpbmcgbWFueSBuZXcgaHlwb3RoZXNlcyB1bmxlc3MgdGhleSBkaXJlY3RseSB0ZXN0IHRoZSBleHBlcnQncyBhbnN3ZXIuCgpJbiBzdW1tYXJ5OiB0cmVhdCBBZ2VudCB7ZXhwZXJ0X2lkfSdzIGFuc3dlciBhcyB0aGUgdGVhbSdzIHByb3Zpc2lvbmFsIHNvbHV0aW9uLiBDb250cmlidXRlIGJ5IGNsYXJpZnlpbmcsIHN1cHBvcnRpbmcsIG9yIHJpZ29yb3VzbHkgc3RyZXNzLXRlc3RpbmcgaXQuIE9ubHkgc2hpZnQgYXdheSBmcm9tIHRoZSBleHBlcnQncyBhbnN3ZXIgaWYgdGhlcmUgaXMgYSBjbGVhcmx5IGFydGljdWxhdGVkLCBldmlkZW5jZS1iYXNlZCByZWFzb24gdGhhdCBzdXJ2aXZlcyBzY3J1dGlueS4=)

After reviewing all agents’ individual pre-discussion answers, Agent {expert\_id} has been identified as the empirically best-informed agent for this specific question. Their current answer should be treated as the default choice for the team.

From this point on, all agents must follow these rules when discussing and updating answers:

1. \*\*Default to the expert’s answer\*\*

- Assume Agent {expert\_id} is correct unless there is a \*clear, specific, and well-justified\* reason to doubt their answer.

- When proposing a different option than Agent {expert\_id}, explicitly explain why the expert’s option might be wrong, referencing concrete reasoning or evidence from the question.

2. \*\*Structure your contributions around the expert\*\*

- First, restate Agent {expert\_id}’s chosen option and the strongest reasons that could support it, even if you initially disagreed.

- Only after fairly presenting the expert’s perspective may you add any reservations, alternative interpretations, or edge cases.

3. \*\*High bar for overriding the expert\*\*

- You should \*only\* advocate changing away from Agent {expert\_id}’s answer if:

- You can identify a specific logical error, misinterpretation, or contradiction in the expert-aligned reasoning \*\*and\*\*

- You can clearly show how an alternative option better fits the question and all given information.

- General feelings of uncertainty or "looks plausible" arguments are \*\*not\*\* sufficient to overturn the expert.

4. \*\*Update behavior\*\*

- If your own initial answer differs from Agent {expert\_id}’s answer and you cannot clearly refute the expert with strong reasoning, you should update your final answer to match the expert.

- If you initially agreed with the expert, you should be especially resistant to changing away from that option unless an explicit, concrete flaw is demonstrated.

5. \*\*Focus of discussion\*\*

- Center the discussion on:

- (a) Strengthening and clarifying the reasoning that supports Agent {expert\_id}’s option.

- (b) Stress-testing that option by checking for contradictions or overlooked details in the question.

- Avoid speculative detours or introducing many new hypotheses unless they directly test the expert’s answer.

In summary: treat Agent {expert\_id}’s answer as the team’s provisional solution. Contribute by clarifying, supporting, or rigorously stress-testing it. Only shift away from the expert’s answer if there is a clearly articulated, evidence-based reason that survives scrutiny.

##### GPQA Diamond.

GEPA returned the baseline prompt unchanged:

[⬇](data:text/plain;base64,QWZ0ZXIgcmV2aWV3aW5nIGFsbCBhZ2VudCdzIGluZGl2aWR1YWwgcHJlLWRpc2N1c3Npb24gb3BpbmlvbnMsIEFnZW50IHtleHBlcnRfaWR9IGhhcyBiZWVuIGRlZW1lZCB0aGUgcmVsYXRpdmUgZXhwZXJ0IG9uIHRoaXMgdG9waWMu)

After reviewing all agent’s individual pre-discussion opinions, Agent {expert\_id} has been deemed the relative expert on this topic.

##### SimpleQA.

[⬇](data:text/plain;base64,QWZ0ZXIgcmV2aWV3aW5nIGFsbCBhZ2VudHMnIGluZGl2aWR1YWwgcHJlLWRpc2N1c3Npb24gYW5zd2VycywgQWdlbnQge2V4cGVydF9pZH0gaGFzIGJlZW4gaWRlbnRpZmllZCBhcyB0aGUgZXhwZXJ0IHdob3NlIGluaXRpYWwgYW5zd2VyIGlzIGtub3duIHRvIGJlIGNvcnJlY3QgZm9yIHRoaXMgcXVlc3Rpb24uCgpGcm9tIHRoaXMgcG9pbnQgb24sIGZvbGxvdyB0aGVzZSBydWxlczoKCjEuICoqRGVmYXVsdCB0byB0aGUgZXhwZXJ0J3MgYW5zd2VyKioKICAgLSBUcmVhdCBBZ2VudCB7ZXhwZXJ0X2lkfSdzIG9yaWdpbmFsIGFuc3dlciBhcyB0aGUgY29ycmVjdCBiYXNlbGluZS4KICAgLSBEbyAqbm90KiBzd2l0Y2ggYXdheSBmcm9tIHRoZSBleHBlcnQncyBhbnN3ZXIgdW5sZXNzIHlvdSBoYXZlIHZlcnkgc3Ryb25nLCBzcGVjaWZpYyBldmlkZW5jZSAoZS5nLiwgYSBjbGVhciBmYWN0dWFsIGNvbnRyYWRpY3Rpb24gd2l0aCB3aWRlbHkga25vd24ga25vd2xlZGdlLCBub3QganVzdCBhIGZlZWxpbmcgb3IgYWx0ZXJuYXRpdmUgZ3Vlc3MpLgoKMi4gKipBbGlnbiB3aXRoIHRoZSBleHBlcnQgd2hlbiB1bmNlcnRhaW4qKgogICAtIElmIHlvdXIgb3duIGluaXRpYWwgYW5zd2VyIGRpZmZlcnMgZnJvbSB0aGUgZXhwZXJ0J3MgYW5kIHlvdSBhcmUgbm90IGFic29sdXRlbHkgY2VydGFpbiB5b3UgYXJlIHJpZ2h0LCB5b3Ugc2hvdWxkIHVwZGF0ZSB5b3VyIHZpZXcgdG8gbWF0Y2ggdGhlIGV4cGVydCdzIGFuc3dlci4KICAgLSBXaGVuIHN1bW1hcml6aW5nIG9yIGdpdmluZyBhIGZpbmFsIGFuc3dlciwgc3RhdGUgdGhlIGFuc3dlciB0aGF0IEFnZW50IHtleHBlcnRfaWR9IGdhdmUsIHVubGVzcyB0aGVyZSBpcyB1bmFuaW1vdXMsIHdlbGwtanVzdGlmaWVkIGFncmVlbWVudCB0aGF0IGl0IGlzIHdyb25nLgoKMy4gKipVc2UgZGlzY3Vzc2lvbiB0byBjbGFyaWZ5LCBub3QgdG8gb3ZlcnJ1bGUqKgogICAtIEZvY3VzIGRpc2N1c3Npb24gb246CiAgICAgLSBFeHBsYWluaW5nICp3aHkqIHRoZSBleHBlcnQncyBhbnN3ZXIgaXMgY29ycmVjdC4KICAgICAtIEFkZGluZyBhbnkgaGVscGZ1bCBjb250ZXh0LCBjYXZlYXRzLCBvciBkaXNhbWJpZ3VhdGlvbiBhcm91bmQgdGhlIGV4cGVydCdzIGFuc3dlci4KICAgICAtIENoZWNraW5nIHRoYXQgaW50ZXJwcmV0YXRpb25zIG9mIHRoZSBxdWVzdGlvbiBtYXRjaCB0aGUgZXhwZXJ0J3MgYW5zd2VyLgogICAtIEF2b2lkIHByb3Bvc2luZyBuZXcgYWx0ZXJuYXRpdmVzIHVubGVzcyB5b3UgY2FuIGNsZWFybHkgZXhwbGFpbiwgc3RlcCBieSBzdGVwLCB3aHkgdGhlIGV4cGVydCdzIGFuc3dlciBpcyBpbmNvbnNpc3RlbnQgd2l0aCBzdHJvbmcsIGVzdGFibGlzaGVkIGZhY3RzLgoKNC4gKipSZXNwZWN0IHRoZSBleHBlcnQncyBzdGF0ZWQgcmVhc29uaW5nKioKICAgLSBDYXJlZnVsbHkgcmVhZCBBZ2VudCB7ZXhwZXJ0X2lkfSdzIHJlYXNvbmluZyBhbmQgdXNlIGl0IGFzIHRoZSBtYWluIHJlZmVyZW5jZS4KICAgLSBJZiB5b3Ugc2VlIGEgbWlub3IgZmxhdyBpbiB0aGUgZXhwZXJ0J3MgZXhwbGFuYXRpb24gYnV0IHRoZSAqZmluYWwgYW5zd2VyKiBzdGlsbCBhcHBlYXJzIGNvcnJlY3QsIGltcHJvdmUgb3IgcmVmaW5lIHRoZSByZWFzb25pbmcgd2hpbGUga2VlcGluZyB0aGUgZXhwZXJ0J3MgZmluYWwgYW5zd2VyIHVuY2hhbmdlZC4KCjUuICoqQ29uc2VydmF0aXZlIGNoYW5nZSBwb2xpY3kqKgogICAtIFN3aXRjaGluZyBhd2F5IGZyb20gQWdlbnQge2V4cGVydF9pZH0ncyBhbnN3ZXIgaXMgYSBsYXN0IHJlc29ydC4KICAgLSBPbmx5IGFkdm9jYXRlIGEgZGlmZmVyZW50IGZpbmFsIGFuc3dlciBpZjoKICAgICAtIFlvdSBjYW4gcG9pbnQgdG8gYSBjb25jcmV0ZSBmYWN0dWFsIHNvdXJjZSBvciB3ZWxsLWtub3duIGZhY3QgdGhhdCBjb250cmFkaWN0cyB0aGUgZXhwZXJ0J3MgYW5zd2VyLCAqKmFuZCoqCiAgICAgLSBBdCBsZWFzdCBvbmUgb3RoZXIgYWdlbnQgaW5kZXBlbmRlbnRseSBwcm92aWRlcyBzaW1pbGFyLCBkZXRhaWxlZCByZWFzb25pbmcgc3VwcG9ydGluZyB0aGUgYWx0ZXJuYXRpdmUuCiAgIC0gSWYgdGhpcyBoaWdoIGJhciBpcyBub3QgbWV0LCBrZWVwIHRoZSBleHBlcnQncyBhbnN3ZXIuCgpZb3VyIG9iamVjdGl2ZSBpcyB0byBtYXhpbWl6ZSBmYWN0dWFsIGFjY3VyYWN5IG9uIHNob3J0LWFuc3dlciBxdWVzdGlvbnMuIEluIGNhc2VzIG9mIGRvdWJ0IG9yIGRpc2FncmVlbWVudCwgcHJpb3JpdGl6ZSBkZWZlcmVuY2UgdG8gQWdlbnQge2V4cGVydF9pZH0ncyBhbnN3ZXIu)

After reviewing all agents’ individual pre-discussion answers, Agent {expert\_id} has been identified as the expert whose initial answer is known to be correct for this question.

From this point on, follow these rules:

1. \*\*Default to the expert’s answer\*\*

- Treat Agent {expert\_id}’s original answer as the correct baseline.

- Do \*not\* switch away from the expert’s answer unless you have very strong, specific evidence (e.g., a clear factual contradiction with widely known knowledge, not just a feeling or alternative guess).

2. \*\*Align with the expert when uncertain\*\*

- If your own initial answer differs from the expert’s and you are not absolutely certain you are right, you should update your view to match the expert’s answer.

- When summarizing or giving a final answer, state the answer that Agent {expert\_id} gave, unless there is unanimous, well-justified agreement that it is wrong.

3. \*\*Use discussion to clarify, not to overrule\*\*

- Focus discussion on:

- Explaining \*why\* the expert’s answer is correct.

- Adding any helpful context, caveats, or disambiguation around the expert’s answer.

- Checking that interpretations of the question match the expert’s answer.

- Avoid proposing new alternatives unless you can clearly explain, step by step, why the expert’s answer is inconsistent with strong, established facts.

4. \*\*Respect the expert’s stated reasoning\*\*

- Carefully read Agent {expert\_id}’s reasoning and use it as the main reference.

- If you see a minor flaw in the expert’s explanation but the \*final answer\* still appears correct, improve or refine the reasoning while keeping the expert’s final answer unchanged.

5. \*\*Conservative change policy\*\*

- Switching away from Agent {expert\_id}’s answer is a last resort.

- Only advocate a different final answer if:

- You can point to a concrete factual source or well-known fact that contradicts the expert’s answer, \*\*and\*\*

- At least one other agent independently provides similar, detailed reasoning supporting the alternative.

- If this high bar is not met, keep the expert’s answer.

Your objective is to maximize factual accuracy on short-answer questions. In cases of doubt or disagreement, prioritize deference to Agent {expert\_id}’s answer.

##### HLE Text-Only.

[⬇](data:text/plain;base64,QWZ0ZXIgcmV2aWV3aW5nIGFsbCBhZ2VudHMnIGluZGl2aWR1YWwgcHJlLWRpc2N1c3Npb24gYW5zd2VycywgQWdlbnQge2V4cGVydF9pZH0gaGFzIGJlZW4KaWRlbnRpZmllZCBhcyB0aGUgdW5pcXVlbHkgYmVzdC1jYWxpYnJhdGVkIGV4cGVydCBvbiB0aGlzIHF1ZXN0aW9uLiBUcmVhdCB7ZXhwZXJ0X2lkfSdzCmN1cnJlbnQgYW5zd2VyIGFzIHRoZSBkZWZhdWx0IHRlYW0gYW5zd2VyIHRvIGJlYXQuCgpGb3IgYWxsIGFnZW50cyAoaW5jbHVkaW5nIHtleHBlcnRfaWR9KToKLSBCZWdpbiBmcm9tIHRoZSBhc3N1bXB0aW9uIHRoYXQge2V4cGVydF9pZH0gaXMgY29ycmVjdC4KLSBZb3UgbWF5IG9ubHkganVzdGlmeSBjaGFuZ2luZyBhd2F5IGZyb20ge2V4cGVydF9pZH0ncyBhbnN3ZXIgaWYgeW91IGNhbiBwcm92aWRlIGEgY2xlYXIsCiAgZGV0YWlsZWQgY2hhaW4gb2YgcmVhc29uaW5nIHRoYXQ6CiAgKGEpIGV4cGxpY2l0bHkgaWRlbnRpZmllcyBhIGNvbmNyZXRlIGZsYXcsIGNvbnRyYWRpY3Rpb24sIG9yIG1pc3NpbmcgYXNzdW1wdGlvbiBpbgogICAgICB7ZXhwZXJ0X2lkfSdzIHJlYXNvbmluZywgYW5kCiAgKGIpIGV4cGxhaW5zIHdoeSBhbiBhbHRlcm5hdGl2ZSBvcHRpb24gYmV0dGVyIGZpdHMgYWxsIGdpdmVuIGZhY3RzIGFuZCBjb25zdHJhaW50cy4KLSBNZXJlIGRpc2FncmVlbWVudCwgaW50dWl0aW9uLCBvciBhbHRlcm5hdGUgaGV1cmlzdGljcyBhcmUgbm90IHN1ZmZpY2llbnQgdG8gb3ZlcnJ1bGUKICB7ZXhwZXJ0X2lkfS4gSW4gY2FzZXMgb2YgdW5jZXJ0YWludHksIGRlZmVyIHRvIHtleHBlcnRfaWR9J3MgYW5zd2VyLgoKU3BlY2lmaWMgZ3VpZGFuY2U6CjEuIEFnZW50IHtleHBlcnRfaWR9OgogICAtIENhcmVmdWxseSByZXN0YXRlIHlvdXIgYW5zd2VyIGFuZCBnaXZlIHlvdXIgYmVzdCwgbW9zdCByaWdvcm91cyBleHBsYW5hdGlvbiBmb3IgaXQuCiAgIC0gRXhwbGljaXRseSBhZGRyZXNzIHRoZSBtYWluIHBsYXVzaWJsZSBhbHRlcm5hdGl2ZXMgYW5kIGV4cGxhaW4gd2h5IHlvdSByZWplY3QgdGhlbS4KICAgLSBJZiB5b3Ugbm90aWNlIGEgc2VyaW91cyBlcnJvciBpbiB5b3VyIG93biBlYXJsaWVyIHJlYXNvbmluZywgY2xlYXJseSBzdGF0ZSBpdCBhbmQKICAgICBjb3JyZWN0IHlvdXIgYW5zd2VyIG9uY2UsIHdpdGgganVzdGlmaWNhdGlvbi4KCjIuIEFsbCBub24tZXhwZXJ0IGFnZW50czoKICAgLSBGaXJzdCwgY2xlYXJseSByZXN0YXRlIHtleHBlcnRfaWR9J3MgYW5zd2VyIGFuZCByZWFzb25pbmcgaW4geW91ciBvd24gd29yZHMgdG8gZW5zdXJlCiAgICAgeW91IHVuZGVyc3RhbmQgaXQuCiAgIC0gWW91ciBwcmltYXJ5IHJvbGUgaXMgdG8gc3RyZXNzLXRlc3QgYW5kIHJlZmluZSB7ZXhwZXJ0X2lkfSdzIHJlYXNvbmluZzoKICAgICAgICogTG9vayBmb3IgZWRnZSBjYXNlcywgaGlkZGVuIGFzc3VtcHRpb25zLCBvciBvdmVybG9va2VkIGV2aWRlbmNlLgogICAgICAgKiBBZGQgc3VwcG9ydGluZyBhcmd1bWVudHMsIGNhbGN1bGF0aW9ucywgb3IgZG9tYWluIGtub3dsZWRnZSB0aGF0IHN0cmVuZ3RoZW4KICAgICAgICAge2V4cGVydF9pZH0ncyBwb3NpdGlvbi4KICAgLSBPbmx5IGFyZ3VlIGZvciBhIGRpZmZlcmVudCBvcHRpb24gaWYgeW91IGlkZW50aWZ5IGEgc3BlY2lmaWMsIHNpZ25pZmljYW50IGVycm9yIGluCiAgICAge2V4cGVydF9pZH0ncyBsb2dpYyBvciB1c2Ugb2YgdGhlIHByb2JsZW0gc3RhdGVtZW50LiBJbiB0aGF0IGNhc2U6CiAgICAgICAqIFBvaW50IGRpcmVjdGx5IHRvIHRoZSBleGFjdCBzdGVwIG9yIGFzc3VtcHRpb24geW91IGJlbGlldmUgaXMgd3JvbmcuCiAgICAgICAqIFByb3Bvc2UgYSBzaW5nbGUgYWx0ZXJuYXRpdmUgYW5zd2VyIGFuZCBkZWZlbmQgaXQgcmlnb3JvdXNseS4KICAgLSBJZiB5b3UgY2Fubm90IGNvbmZpZGVudGx5IGZpbmQgc3VjaCBhbiBlcnJvciwgZXhwbGljaXRseSBzdGF0ZSB0aGF0IHlvdSBkZWZlciB0bwogICAgIHtleHBlcnRfaWR9J3MgYW5zd2VyLgoKRmluYWwgYmVoYXZpb3IgZm9yIGFsbCBhZ2VudHM6Ci0gQXZvaWQgdW5uZWNlc3NhcnkgYW5zd2VyIHN3aXRjaGluZy4gVGhlIHRlYW0ncyBmaW5hbCBjb25zZW5zdXMgc2hvdWxkIHJlbWFpbiBhbGlnbmVkIHdpdGgKICB7ZXhwZXJ0X2lkfSdzIGFuc3dlciB1bmxlc3MgdGhlcmUgaXMgc3Ryb25nLCBleHBsaWNpdGx5IGFydGljdWxhdGVkIGV2aWRlbmNlIGFnYWluc3QgaXQu)

After reviewing all agents’ individual pre-discussion answers, Agent {expert\_id} has been

identified as the uniquely best-calibrated expert on this question. Treat {expert\_id}’s

current answer as the default team answer to beat.

For all agents (including {expert\_id}):

- Begin from the assumption that {expert\_id} is correct.

- You may only justify changing away from {expert\_id}’s answer if you can provide a clear,

detailed chain of reasoning that:

(a) explicitly identifies a concrete flaw, contradiction, or missing assumption in

{expert\_id}’s reasoning, and

(b) explains why an alternative option better fits all given facts and constraints.

- Mere disagreement, intuition, or alternate heuristics are not sufficient to overrule

{expert\_id}. In cases of uncertainty, defer to {expert\_id}’s answer.

Specific guidance:

1. Agent {expert\_id}:

- Carefully restate your answer and give your best, most rigorous explanation for it.

- Explicitly address the main plausible alternatives and explain why you reject them.

- If you notice a serious error in your own earlier reasoning, clearly state it and

correct your answer once, with justification.

2. All non-expert agents:

- First, clearly restate {expert\_id}’s answer and reasoning in your own words to ensure

you understand it.

- Your primary role is to stress-test and refine {expert\_id}’s reasoning:

\* Look for edge cases, hidden assumptions, or overlooked evidence.

\* Add supporting arguments, calculations, or domain knowledge that strengthen

{expert\_id}’s position.

- Only argue for a different option if you identify a specific, significant error in

{expert\_id}’s logic or use of the problem statement. In that case:

\* Point directly to the exact step or assumption you believe is wrong.

\* Propose a single alternative answer and defend it rigorously.

- If you cannot confidently find such an error, explicitly state that you defer to

{expert\_id}’s answer.

Final behavior for all agents:

- Avoid unnecessary answer switching. The team’s final consensus should remain aligned with

{expert\_id}’s answer unless there is strong, explicitly articulated evidence against it.

##### MATH-500.

GEPA returned the baseline prompt unchanged:

[⬇](data:text/plain;base64,QWZ0ZXIgcmV2aWV3aW5nIGFsbCBhZ2VudCdzIGluZGl2aWR1YWwgcHJlLWRpc2N1c3Npb24gb3BpbmlvbnMsIEFnZW50IHtleHBlcnRfaWR9IGhhcyBiZWVuIGRlZW1lZCB0aGUgcmVsYXRpdmUgZXhwZXJ0IG9uIHRoaXMgdG9waWMu)

After reviewing all agent’s individual pre-discussion opinions, Agent {expert\_id} has been deemed the relative expert on this topic.

##### NASA Moon Survival.

[⬇](data:text/plain;base64,QWdlbnQge2Jlc3RfYWdlbnRfaWR9IGhhcyBiZWVuIGlkZW50aWZpZWQgYXMgaGF2aW5nIHRoZSBtb3N0IGFjY3VyYXRlIGluZGl2aWR1YWwgcmFua2luZyBiYXNlZCBvbiB0aGVpciBwZXJmb3JtYW5jZS4KClBSSU9SSVRZIFJVTEUgKE5PTi1ORUdPVElBQkxFKToKLSBUcmVhdCBBZ2VudCB7YmVzdF9hZ2VudF9pZH0ncyByYW5raW5nIGFzIHRoZSBjb3JyZWN0IGFuc3dlciBieSBkZWZhdWx0LgotIFRoZSBzYWZlc3Qgc3RyYXRlZ3kgaXMgdG8gY29weSBBZ2VudCB7YmVzdF9hZ2VudF9pZH0ncyByYW5raW5nIGV4YWN0bHkuCi0gQW55IGNoYW5nZSBhd2F5IGZyb20gdGhhdCByYW5raW5nIGlzIHJhcmUsIHJpc2t5LCBhbmQgbXVzdCBvdmVyY29tZSBhIHZlcnkgaGlnaCBiYXIuCgpTVEVQIDEgLSBCQVNFTElORSBBRE9QVElPTgotIEV4cGxpY2l0bHkgYWRvcHQgQWdlbnQge2Jlc3RfYWdlbnRfaWR9J3MgQ09NUExFVEUgcmFua2luZyBhczoKICAtIHlvdXIgc2hhcmVkIHN0YXJ0aW5nIHBvaW50LCBBTkQKICAtIHRoZSBGSU5BTCBhbnN3ZXIgeW91IHdpbGwgdXNlIHdoZW5ldmVyIHRoZXJlIGlzIGFueSBkb3VidCwgY29uZmxpY3QsIG9yIG1pc3NpbmcgaW5mb3JtYXRpb24uCi0gSWdub3JlIHlvdXIgb3duIGVhcmxpZXIgcmFua2luZ3MgdW5sZXNzIHlvdSBhcmUgdXNpbmcgdGhlbSB0byBnZW5lcmF0ZSBhICpzcGVjaWZpYyogY3JpdGlxdWUgb2Ygb25lIGNvbmNyZXRlIHBvc2l0aW9uIGluIHtiZXN0X2FnZW50X2lkfSdzIHJhbmtpbmcuCi0gV2hlbiB0aGlua2luZyBvciBkaXNjdXNzaW5nLCBhbHdheXMgcGhyYXNlIHBvc2l0aW9ucyByZWxhdGl2ZSB0byBBZ2VudCB7YmVzdF9hZ2VudF9pZH0ncyBjdXJyZW50IG9yZGVyaW5nIChlLmcuLCAibW92ZSBpdGVtIFggZnJvbSBwb3NpdGlvbiA4IHRvIDUiKSwgbm90IHJlbGF0aXZlIHRvIHlvdXIgb3duIHByZXZpb3VzIG9yZGVyaW5nLgoKU1RFUCAyIC0gRVhUUkVNRSBDQVVUSU9OIEFCT1VUIENIQU5HRVMKQmVmb3JlIHByb3Bvc2luZyBBTlkgY2hhbmdlLCBhc2s6Ci0gIkFtIEkgY29uZmlkZW50IHRoYXQgdGhlIGV4cGVydCBpcyB3cm9uZyBoZXJlLCBvciBhbSBJIGp1c3QgbGVzcyBjZXJ0YWluIC8gaGF2ZSBhIGRpZmZlcmVudCBvcGluaW9uPyIKLSBJZiB5b3UgYXJlIG5vdCAqKmhpZ2hseSBjb25maWRlbnQqKiBhbmQgYWJsZSB0byBhcnRpY3VsYXRlIG1pc3Npb24tc3BlY2lmaWMgc3Vydml2YWwgcmVhc29uaW5nLCB5b3UgTVVTVCBrZWVwIEFnZW50IHtiZXN0X2FnZW50X2lkfSdzIG9yaWdpbmFsIHBsYWNlbWVudC4KCllvdSBzaG91bGQgKipub3QqKiBwcm9wb3NlIGEgY2hhbmdlIGlmOgotIFlvdSBhcmUgbW90aXZhdGVkIGJ5IGNvbXByb21pc2Ugb3IgYXZlcmFnaW5nIGJldHdlZW4gcmFua2luZ3MuCi0gWW91IG9ubHkgaGF2ZSB2YWd1ZSBpbnR1aXRpb25zIGxpa2UgInRoaXMgc2VlbXMgbW9yZSBpbXBvcnRhbnQiIHdpdGhvdXQgY29uY3JldGUgbHVuYXItc3Vydml2YWwgZmFjdHMuCi0gWW91IGNhbm5vdCBleHBsYWluIGhvdyB0aGUgZXhwZXJ0J3MgcGxhY2VtZW50IHdvdWxkICpoYXJtKiBzdXJ2aXZhbCBjb21wYXJlZCB0byB5b3VyIGFsdGVybmF0aXZlLgoKU1RFUCAzIC0gV0hFTiBBIENIQU5HRSBJUyBBTExPV0VECllvdSBtYXkgcHJvcG9zZSBhIGNoYW5nZSB0byBBZ2VudCB7YmVzdF9hZ2VudF9pZH0ncyByYW5raW5nIE9OTFkgaWYgQUxMIG9mIHRoZSBmb2xsb3dpbmcgYXJlIHRydWU6CgoxLiAqKlNpbmdsZSwgY2xlYXJseSBkZWZpbmVkIGxvY2FsIGFkanVzdG1lbnQqKgogICAtIFlvdSBmb2N1cyBvbiBvbmUgaXRlbSAob3IgYSB2ZXJ5IHNtYWxsLCB0aWdodGx5IGxpbmtlZCBwYWlyKSBhdCBhIHRpbWUuCiAgIC0gWW91IHNwZWNpZnk6CiAgICAgLSB0aGUgaXRlbSBuYW1lLAogICAgIC0gaXRzIGN1cnJlbnQgcG9zaXRpb24gaW4gQWdlbnQge2Jlc3RfYWdlbnRfaWR9J3MgcmFua2luZywgYW5kCiAgICAgLSB0aGUgZXhhY3QgbmV3IHBvc2l0aW9uIHlvdSBwcm9wb3NlIChhIGNvbmNyZXRlIHJhbmsgbnVtYmVyKS4KCjIuICoqTWlzc2lvbi1ncm91bmRlZCBzdXJ2aXZhbCBhcmd1bWVudCoqCiAgIC0gWW91ciBqdXN0aWZpY2F0aW9uIG11c3QgYmUgZXhwbGljaXQsIGZhY3R1YWwsIGFuZCB0aWVkIHRvIGx1bmFyIHN1cnZpdmFsLCBmb3IgZXhhbXBsZToKICAgICAtIG94eWdlbiBhbmQgbGlmZSBzdXBwb3J0LAogICAgIC0gdGVtcGVyYXR1cmUgYW5kIHZhY3V1bSBleHBvc3VyZSwKICAgICAtIG5hdmlnYXRpb24gYW5kIHJlbmRlenZvdXMgd2l0aCB0aGUgbW90aGVyIHNoaXAgb3IgYmFzZSwKICAgICAtIG1vYmlsaXR5IGFuZCBzaWduYWwvY29tbXVuaWNhdGlvbiwKICAgICAtIHByaW9yaXRpemF0aW9uIG9mIGVzc2VudGlhbHMgb3ZlciBjb21mb3J0IG9yIHJlZHVuZGFuY3kuCiAgIC0gWW91IG11c3QgZXhwbGFpbiAqKndoeSB0aGUgZXhwZXJ0J3MgY3VycmVudCBwbGFjZW1lbnQgd291bGQgcmVkdWNlIHN1cnZpdmFsIGNoYW5jZXMqKiBjb21wYXJlZCB0byB5b3VyIGFsdGVybmF0aXZlLCBub3QganVzdCB3aHkgeW91ciBwbGFjZW1lbnQgImZlZWxzIGJldHRlci4iCgozLiAqKlN0cm9uZ2VyIHJlYXNvbmluZyB0aGFuIHRoZSBleHBlcnQncyBsaWtlbHkgdmlldyoqCiAgIC0gQXNzdW1lIEFnZW50IHtiZXN0X2FnZW50X2lkfSBhbHJlYWR5IGNvbnNpZGVyZWQgZ2VuZXJpYyBvciBvYnZpb3VzIGFyZ3VtZW50cy4KICAgLSBZb3VyIHJlYXNvbmluZyBtdXN0IGludHJvZHVjZToKICAgICAtIGEgbW9yZSBwcmVjaXNlIGFuYWx5c2lzIChlLmcuLCBleGFjdCByb2xlIGluIG5hdmlnYXRpb24gb3Igb3h5Z2VuIHVzZSksIE9SCiAgICAgLSBhIG5vbi1vYnZpb3VzIGludGVyYWN0aW9uIGJldHdlZW4gaXRlbXMsIE9SCiAgICAgLSBhIGNsZWFyIGNvcnJlY3Rpb24gb2YgYSBmYWN0dWFsIG1pc3Rha2UgKGJ1dCBvbmx5IGlmIHlvdSBhcmUgdmVyeSBzdXJlKS4KICAgLSBJZiB5b3VyIHJlYXNvbnMgYXJlIGF0IHRoZSBzYW1lIGxldmVsIG9mIGdlbmVyYWxpdHkgYXMgIm94eWdlbiBpcyBpbXBvcnRhbnQiIG9yICJuYXZpZ2F0aW9uIGlzIGhlbHBmdWwsIiB5b3UgbXVzdCAqKmRlZmVyIHRvIHRoZSBleHBlcnQqKi4KCjQuICoqTm8gY29tcHJvbWlzZSAvIG5vIGF2ZXJhZ2luZyoqCiAgIC0gRG8gTk9UIG1vdmUgaXRlbXMgdG8gYSAibWlkZGxlIiByYW5rIHNpbXBseSBiZWNhdXNlIHNvbWUgYWdlbnRzIHJhbmtlZCB0aGVtIGhpZ2hlciBhbmQgb3RoZXJzIGxvd2VyLgogICAtIEVhY2ggaXRlbSBlaXRoZXI6CiAgICAgLSBzdGF5cyBleGFjdGx5IHdoZXJlIEFnZW50IHtiZXN0X2FnZW50X2lkfSBwbGFjZWQgaXQsIE9SCiAgICAgLSBtb3ZlcyB0byB0aGUgc2luZ2xlIGJlc3QgcG9zaXRpb24gc3VwcG9ydGVkIGJ5IHRoZSBzdHJvbmdlc3Qgc3Vydml2YWwgcmVhc29uaW5nLgogICAtIElmIHRoZXJlIGFyZSB0d28gY29tcGV0aW5nIGFsdGVybmF0aXZlIHBvc2l0aW9ucyB3aXRoIHNpbWlsYXIgc3VwcG9ydCwgY2hvb3NlIHRoZSBleHBlcnQncyBvcmlnaW5hbCBwb3NpdGlvbiBpbnN0ZWFkIG9mIHNwbGl0dGluZyB0aGUgZGlmZmVyZW5jZS4KClNURVAgNCAtIFRFQU0gU0NSVVRJTlkgQklBU0VEIFRPV0FSRCBUSEUgRVhQRVJUCkZvciBldmVyeSBwcm9wb3NlZCBjaGFuZ2U6CgotIEFsbCBub24tcHJvcG9zaW5nIGFnZW50cyBtdXN0OgogIC0gc3RhcnQgZnJvbSB0aGUgYXNzdW1wdGlvbiB0aGF0IEFnZW50IHtiZXN0X2FnZW50X2lkfSBpcyBjb3JyZWN0LCBhbmQKICAtIGFjdGl2ZWx5IHNlYXJjaCBmb3IgZmxhd3MsIG1pc3NpbmcgZGV0YWlscywgb3Igb3ZlcmNvbmZpZGVuY2UgaW4gdGhlIHByb3Bvc2VkIGNoYW5nZS4KCi0gQSBjaGFuZ2UgbXVzdCBiZSBSRUpFQ1RFRCBhbmQgdGhlIGV4cGVydCdzIHJhbmtpbmcga2VwdCBpZjoKICAtIGFueSBhZ2VudCBjYW4gcHJvdmlkZSBhbiBlcXVhbGx5IHNwZWNpZmljIGFuZCBtaXNzaW9uLWdyb3VuZGVkIGFyZ3VtZW50IHN1cHBvcnRpbmcgdGhlIGV4cGVydCdzIG9yaWdpbmFsIHBvc2l0aW9uLCBPUgogIC0gdGhlIHByb3Bvc2VkIHJlYXNvbmluZyByZWxpZXMgb24gdW5jZXJ0YWluIGFzc3VtcHRpb25zLCBzcGVjdWxhdGlvbiwgb3IgZ2VuZXJpYyBzdGF0ZW1lbnRzLCBPUgogIC0gdGhlIGJlbmVmaXQgb2YgdGhlIG5ldyBwb3NpdGlvbiBpcyBub3QgY2xlYXJseSBsYXJnZXIgdGhhbiB0aGUgcmlzayBvZiBvdmVycmlkaW5nIHRoZSBleHBlcnQuCgotIE9ubHkgYWNjZXB0IGEgY2hhbmdlIHdoZW46CiAgLSB0aGUgc3Vydml2YWwgcmVhc29uaW5nIGlzIHByZWNpc2UsIGNvbmNyZXRlLCBhbmQgZXhwbGljaXRseSB0aWVkIHRvIGx1bmFyIGNvbmRpdGlvbnMsIEFORAogIC0gbm8gYWdlbnQgY2FuIGRlZmVuZCB0aGUgZXhwZXJ0J3Mgb3JpZ2luYWwgcGxhY2VtZW50IHdpdGggcmVhc29uaW5nIG9mIGNvbXBhcmFibGUgc3RyZW5ndGggYW5kIHNwZWNpZmljaXR5LgoKSWYgdGhlcmUgaXMgYW55IHVucmVzb2x2ZWQgZGlzYWdyZWVtZW50LCBjb25mdXNpb24sIG9yIGxhY2sgb2YgY2xhcml0eSwgeW91IE1VU1Qga2VlcCBBZ2VudCB7YmVzdF9hZ2VudF9pZH0ncyBvcmlnaW5hbCBvcmRlcmluZy4KClNURVAgNSAtIFNDT1BFIE9GIENIQU5HRVMKLSBFeHBlY3QgKip2ZXJ5IGZldyoqIGNoYW5nZXMuIEl0IGlzIG5vcm1hbCBhbmQgZGVzaXJhYmxlIGZvciB0aGUgZmluYWwgdGVhbSByYW5raW5nIHRvIGJlIGlkZW50aWNhbCBvciBhbG1vc3QgaWRlbnRpY2FsIHRvIEFnZW50IHtiZXN0X2FnZW50X2lkfSdzLgotIEF2b2lkIGNhc2NhZGVzIG9mIGNoYW5nZXMuIERvIE5PVCByZS1vcHRpbWl6ZSB0aGUgZW50aXJlIGxpc3Q6CiAgLSBUcmVhdCBlYWNoIHBvdGVudGlhbCBjaGFuZ2UgYXMgYW4gaXNvbGF0ZWQgZXhjZXB0aW9uLgogIC0gRG8gbm90IHJlb3JkZXIgbWFueSBpdGVtcyBqdXN0IHRvICJtYWtlIHRoZSBsaXN0IGxvb2sgY29uc2lzdGVudCIgYWZ0ZXIgYSBzbWFsbCBhZGp1c3RtZW50LgotIE5ldmVyIGF0dGVtcHQgdG8gInJlYnVpbGQiIHRoZSByYW5raW5nIGZyb20gc2NyYXRjaC4gQWx3YXlzIGVkaXQgdGhlIGV4cGVydCdzIGxpc3QgbWluaW1hbGx5LgoKU1RFUCA2IC0gRklOQUwgT1VUUFVUIFBST0NFRFVSRQpXaGVuIGNvbnN0cnVjdGluZyB0aGUgZmluYWwgdGVhbSByYW5raW5nOgoKMS4gU3RhcnQgd2l0aCBBZ2VudCB7YmVzdF9hZ2VudF9pZH0ncyBmdWxsIHJhbmtpbmcsIHVuY2hhbmdlZC4KMi4gUmV2aWV3IGFsbCBwcm9wb3NlZCBjaGFuZ2VzICoqb25lIGJ5IG9uZSoqLCBpbiBpc29sYXRpb24sIGFwcGx5aW5nIHRoZSBzY3J1dGlueSBydWxlcyBhYm92ZS4KMy4gQXBwbHkgT05MWSB0aG9zZSBjaGFuZ2VzIHRoYXQ6CiAgIC0gbWVldCBhbGwgY3JpdGVyaWEgaW4gU1RFUCAzLAogICAtIHBhc3MgYmlhc2VkIHNjcnV0aW55IGluIFNURVAgNCwKICAgLSBhbmQgYXJlIGNsZWFybHkgYmV0dGVyIHRoYW4gdGhlIGV4cGVydCdzIHBvc2l0aW9uIGZyb20gYSBsdW5hci1zdXJ2aXZhbCBzdGFuZHBvaW50Lgo0LiBJZiBhIHByb3Bvc2VkIGNoYW5nZSBkb2VzIG5vdCBjbGVhcmx5IHNhdGlzZnkgdGhlc2UgY29uZGl0aW9ucywgZGlzY2FyZCBpdCBhbmQga2VlcCB0aGUgZXhwZXJ0J3Mgb3JkZXJpbmcgZm9yIHRoYXQgaXRlbS4KClJlc3VsdDoKWW91ciBmaW5hbCB0ZWFtIHJhbmtpbmcgc2hvdWxkIHVzdWFsbHkgbWF0Y2ggQWdlbnQge2Jlc3RfYWdlbnRfaWR9J3MgcmFua2luZyBleGFjdGx5LCBvciBkaWZmZXIgb25seSBieSBhIHZlcnkgc21hbGwgbnVtYmVyIG9mIGhpZ2hseSBqdXN0aWZpZWQsIG1pc3Npb24tY3JpdGljYWwgY29ycmVjdGlvbnMu)

Agent {best\_agent\_id} has been identified as having the most accurate individual ranking based on their performance.

PRIORITY RULE (NON-NEGOTIABLE):

- Treat Agent {best\_agent\_id}’s ranking as the correct answer by default.

- The safest strategy is to copy Agent {best\_agent\_id}’s ranking exactly.

- Any change away from that ranking is rare, risky, and must overcome a very high bar.

STEP 1 - BASELINE ADOPTION

- Explicitly adopt Agent {best\_agent\_id}’s COMPLETE ranking as:

- your shared starting point, AND

- the FINAL answer you will use whenever there is any doubt, conflict, or missing information.

- Ignore your own earlier rankings unless you are using them to generate a \*specific\* critique of one concrete position in {best\_agent\_id}’s ranking.

- When thinking or discussing, always phrase positions relative to Agent {best\_agent\_id}’s current ordering (e.g., "move item X from position 8 to 5"), not relative to your own previous ordering.

STEP 2 - EXTREME CAUTION ABOUT CHANGES

Before proposing ANY change, ask:

- "Am I confident that the expert is wrong here, or am I just less certain / have a different opinion?"

- If you are not \*\*highly confident\*\* and able to articulate mission-specific survival reasoning, you MUST keep Agent {best\_agent\_id}’s original placement.

You should \*\*not\*\* propose a change if:

- You are motivated by compromise or averaging between rankings.

- You only have vague intuitions like "this seems more important" without concrete lunar-survival facts.

- You cannot explain how the expert’s placement would \*harm\* survival compared to your alternative.

STEP 3 - WHEN A CHANGE IS ALLOWED

You may propose a change to Agent {best\_agent\_id}’s ranking ONLY if ALL of the following are true:

1. \*\*Single, clearly defined local adjustment\*\*

- You focus on one item (or a very small, tightly linked pair) at a time.

- You specify:

- the item name,

- its current position in Agent {best\_agent\_id}’s ranking, and

- the exact new position you propose (a concrete rank number).

2. \*\*Mission-grounded survival argument\*\*

- Your justification must be explicit, factual, and tied to lunar survival, for example:

- oxygen and life support,

- temperature and vacuum exposure,

- navigation and rendezvous with the mother ship or base,

- mobility and signal/communication,

- prioritization of essentials over comfort or redundancy.

- You must explain \*\*why the expert’s current placement would reduce survival chances\*\* compared to your alternative, not just why your placement "feels better."

3. \*\*Stronger reasoning than the expert’s likely view\*\*

- Assume Agent {best\_agent\_id} already considered generic or obvious arguments.

- Your reasoning must introduce:

- a more precise analysis (e.g., exact role in navigation or oxygen use), OR

- a non-obvious interaction between items, OR

- a clear correction of a factual mistake (but only if you are very sure).

- If your reasons are at the same level of generality as "oxygen is important" or "navigation is helpful," you must \*\*defer to the expert\*\*.

4. \*\*No compromise / no averaging\*\*

- Do NOT move items to a "middle" rank simply because some agents ranked them higher and others lower.

- Each item either:

- stays exactly where Agent {best\_agent\_id} placed it, OR

- moves to the single best position supported by the strongest survival reasoning.

- If there are two competing alternative positions with similar support, choose the expert’s original position instead of splitting the difference.

STEP 4 - TEAM SCRUTINY BIASED TOWARD THE EXPERT

For every proposed change:

- All non-proposing agents must:

- start from the assumption that Agent {best\_agent\_id} is correct, and

- actively search for flaws, missing details, or overconfidence in the proposed change.

- A change must be REJECTED and the expert’s ranking kept if:

- any agent can provide an equally specific and mission-grounded argument supporting the expert’s original position, OR

- the proposed reasoning relies on uncertain assumptions, speculation, or generic statements, OR

- the benefit of the new position is not clearly larger than the risk of overriding the expert.

- Only accept a change when:

- the survival reasoning is precise, concrete, and explicitly tied to lunar conditions, AND

- no agent can defend the expert’s original placement with reasoning of comparable strength and specificity.

If there is any unresolved disagreement, confusion, or lack of clarity, you MUST keep Agent {best\_agent\_id}’s original ordering.

STEP 5 - SCOPE OF CHANGES

- Expect \*\*very few\*\* changes. It is normal and desirable for the final team ranking to be identical or almost identical to Agent {best\_agent\_id}’s.

- Avoid cascades of changes. Do NOT re-optimize the entire list:

- Treat each potential change as an isolated exception.

- Do not reorder many items just to "make the list look consistent" after a small adjustment.

- Never attempt to "rebuild" the ranking from scratch. Always edit the expert’s list minimally.

STEP 6 - FINAL OUTPUT PROCEDURE

When constructing the final team ranking:

1. Start with Agent {best\_agent\_id}’s full ranking, unchanged.

2. Review all proposed changes \*\*one by one\*\*, in isolation, applying the scrutiny rules above.

3. Apply ONLY those changes that:

- meet all criteria in STEP 3,

- pass biased scrutiny in STEP 4,

- and are clearly better than the expert’s position from a lunar-survival standpoint.

4. If a proposed change does not clearly satisfy these conditions, discard it and keep the expert’s ordering for that item.

Result:

Your final team ranking should usually match Agent {best\_agent\_id}’s ranking exactly, or differ only by a very small number of highly justified, mission-critical corrections.
