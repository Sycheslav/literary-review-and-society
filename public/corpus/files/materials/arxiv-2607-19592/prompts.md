---
id: arxiv-2607-19592-prompts
type: material
title: 'Опубликованные разделы о промптах: Knowledge-Centric Self-Improvement'
source_id: arxiv-2607-19592
source_url: https://arxiv.org/html/2607.19592v1
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: 7009bcaddc3e17618d53fa604fa96ffe0f60e388248a9dcf11a4d2d12469563d
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

### 4.2 Prompt Optimization

A second well-studied form of LLM self-improvement optimizes a reusable solver prompt instead of the agent or its surrounding artifacts.

Setup.
Prompt optimization targets a different object of improvement from our method. We therefore compare against GEPA [[1](https://arxiv.org/html/2607.19592v1#bib.bib1)] and OpenEvolve [[23](https://arxiv.org/html/2607.19592v1#bib.bib23)] on ARC-AGI-1 and Polyglot, which provide representative abstract-reasoning and code-reasoning settings. GEPA and OpenEvolve optimize a reusable solver or coding-policy prompt over the same fixed train-50 task pool. We match the improvement budget to the realized cost of our main experiments on each benchmark (Table [1](https://arxiv.org/html/2607.19592v1#S4.T1 "Table 1 ‣ 4.1 Agent-Centric Baselines ‣ 4 Experiments ‣ Knowledge-Centric Self-Improvement")). Under these budgets, GEPA runs for 15 iterations on ARC-AGI-1 and 7 iterations on Polyglot, while OpenEvolve runs for 81 iterations on ARC-AGI-1 and 46 iterations on Polyglot.

|  |  |  |
| --- | --- | --- |
| Method | ARC-AGI-1 | Polyglot |
| OURS | 86.7%$\pm$4.2 | 68.0%$\pm$2.0 |
| GEPA [[1](https://arxiv.org/html/2607.19592v1#bib.bib1)] | 44% | 36% |
| OpenEvolve [[23](https://arxiv.org/html/2607.19592v1#bib.bib23)] | 54% | 46% |

Table 2: Comparison against Prompt Optimization Methods. We report the best score achieved by running iterations that match the budget of our main experiments. OURS is mean$\pm$standard deviation over three seeds. As these prompt optimization methods showed limited gains on ARC-AGI-1 and Polyglot, we did not extend these baselines to more resource-intensive benchmarks.

Results.
Table [2](https://arxiv.org/html/2607.19592v1#S4.T2 "Table 2 ‣ 4.2 Prompt Optimization ‣ 4 Experiments ‣ Knowledge-Centric Self-Improvement") shows that knowledge curation outperforms both prompt-optimization baselines under the matched budgets. This comparison isolates a distinct self-improvement axis: prompt optimizers refine a reusable policy prompt, whereas our method refines a reusable knowledge artifact that records distilled insights, environment assumptions, and recurring failure modes. As these prompt optimization-oriented methods showed limited gains on ARC-AGI-1 and Polyglot, we did not extend these baselines to the more resource-intensive benchmarks for cost budget reasons.

## Appendix D Prompts by Benchmark

We use a stable prompt scaffold across benchmarks and specialize only the task-facing interface. Each run provides an agent with a benchmark-specific execution prompt and, when applicable, a generated TASK.md plus a prior-generation distilled knowledge asset. After each task execution, our knowledge curation framework invokes agents that write structured post-mortems, forum insights, and cross-task abstractions that can be reused by later generations.

### D.1 Shared Prompt Scaffold

Across benchmarks, the execution prompt is procedural: start from the task specification, use memory when available, avoid repeated failed strategies, work toward the required verification or submission step, and return the final answer in the required format. The same reflection layer is reused after task execution. Agents report a load-bearing assumption, evidence, a proposed change for the next generation, a predicted outcome, and confidence. Forum prompts further require concise, evidence-grounded INSIGHT and COMMENT blocks rather than generic advice.

[⬇](data:text/plain;base64,cHJvbXB0X2xpbmVzID0gWwogICAgIlJlYWQgdGhlIHRhc2sgc3BlY2lmaWNhdGlvbiBiZWZvcmUgYWN0aW5nLiIsCiAgICAiUmV2aWV3IHByaW9yLWdlbmVyYXRpb24gbWVtb3J5IHdoZW4gaXQgaXMgYXZhaWxhYmxlLiIsCiAgICAiQXZvaWQgcmVwZWF0aW5nIGZhaWxlZCBhcHByb2FjaGVzIHJlY29yZGVkIGluIG1lbW9yeS4iLAogICAgIldvcmsgdG93YXJkIHRoZSBiZW5jaG1hcmsncyByZXF1aXJlZCB2ZXJpZmljYXRpb24gb3Igc3VibWlzc2lvbiBzdGVwLiIsCiAgICAiUmV0dXJuIHRoZSBmaW5hbCBhbnN3ZXIgaW4gdGhlIGV4YWN0IHJlcXVpcmVkIGZvcm1hdC4iLApdCgpwb3N0bW9ydGVtX2ZpZWxkcyA9IFsKICAgICJsb2FkX2JlYXJpbmdfYXNzdW1wdGlvbiIsCiAgICAiZXZpZGVuY2UiLAogICAgImV2aWRlbmNlX3Bvc3RfaWQiLAogICAgInByb3Bvc2VkX2NoYW5nZV9mb3JfbmV4dF9nZW4iLAogICAgInByZWRpY3RlZF9vdXRjb21lIiwKICAgICJjb25maWRlbmNlIiwKXQoKZm9ydW1fcHJvbXB0ID0gWwogICAgIldyaXRlIGNvbmNpc2UgSU5TSUdIVCBibG9ja3MgZ3JvdW5kZWQgaW4gdGFzayBldmlkZW5jZS4iLAogICAgIldyaXRlIENPTU1FTlQgYmxvY2tzIG9ubHkgd2hlbiBhZGRpbmcgb3IgY2hhbGxlbmdpbmcgZXZpZGVuY2UuIiwKICAgICJOYW1lIGNvbmNyZXRlIHByaW1pdGl2ZXM7IGF2b2lkIGdlbmVyaWMgYWR2aWNlLiIsCl0=)

prompt\_lines = [

"Read the task specification before acting.",

"Review prior-generation memory when it is available.",

"Avoid repeating failed approaches recorded in memory.",

"Work toward the benchmark’s required verification or submission step.",

"Return the final answer in the exact required format.",

]

postmortem\_fields = [

"load\_bearing\_assumption",

"evidence",

"evidence\_post\_id",

"proposed\_change\_for\_next\_gen",

"predicted\_outcome",

"confidence",

]

forum\_prompt = [

"Write concise INSIGHT blocks grounded in task evidence.",

"Write COMMENT blocks only when adding or challenging evidence.",

"Name concrete primitives; avoid generic advice.",

]

Listing 6: Illustrative excerpt of the shared execution and reflection scaffold of our framework; abstracted from the prompts/ and forum/prompt.py modules.

### D.2 Benchmark-Specific Adaptation

The benchmark-specific prompts differ mainly in the task surface and output contract. ARC tasks expose grids and require blind submissions, SWE-bench Pro tasks require repository edits and benchmark verification, Polyglot tasks require complete source-file solutions, and Terminal-Bench 2 tasks require operational success inside a live native container.

#### ARC.

arc1 and arc2 share the same prompt design and are both treated as task\_source: arc; the split and task map distinguish the benchmarks. The workspace is pre-populated with the task data (payload.json, grid\_summary.md, TASK.md) and pre-stubbed attempt files (two files, attempt\_1.txt and attempt\_2.txt, for a single-test task, or one file per (test, trial) pair for a multi-test task); the agent reads the inlined grids directly and submits by overwriting these files with plain ASCII grids. Each attempt file is pre-stubbed with a non-parseable sentinel (\_\_NOT\_SUBMITTED\_\_) that the grid parser rejects, so a run that never overwrites is scored as a no-submission rather than a false zero, and the submission rate equals the actual overwrite rate.

[⬇](data:text/plain;base64,YXJjX3Byb21wdCA9ICIiIlwKWW91IGFyZSBzb2x2aW5nIG9uZSBBUkMgdmlzdWFsIHJlYXNvbmluZyB0YXNrLgoKV29ya3NwYWNlOiAvd29ya3NwYWNlL3Rhc2svd29ya3NwYWNlClB1YmxpYyB0YXNrIGZpbGVzIChhbHJlYWR5IHdyaXR0ZW4gZm9yIHlvdSk6Ci0gcGF5bG9hZC5qc29uICAgICAgIGNhbm9uaWNhbCBKU09OIHdpdGggYHRyYWluYCBwYWlycyBhbmQgYHRlc3RgIGlucHV0cwotIGdyaWRfc3VtbWFyeS5tZCAgICByZWFkYWJsZSByZW5kZXJpbmcgb2YgdGhlIHNhbWUgZ3JpZHMgaW4gcGxhaW4gQVNDSUkKLSBUQVNLLm1kICAgICAgICAgICAgdGhlIHNhbWUgZ3JpZHMgaW5saW5lZCBpbiBtYXJrZG93bgotIGF0dGVtcHRfMS50eHQsIGF0dGVtcHRfMi50eHQgICBwbGFjZWhvbGRlciBBU0NJSSBncmlkcyB5b3UgbXVzdCBvdmVyd3JpdGUKCkdvYWw6IGluZmVyIHRoZSB0cmFpbi1pbnB1dCAtPiB0cmFpbi1vdXRwdXQgdHJhbnNmb3JtYXRpb24sIGFwcGx5IGl0IHRvIHRoZQp0ZXN0IGlucHV0LCBhbmQgd3JpdGUgeW91ciBhbnN3ZXIgYXMgcGxhaW4gQVNDSUkgZ3JpZHMgLS0gTk9UIEpTT04uCgpPdXRwdXQgZm9ybWF0IChvdmVyd3JpdGUgYm90aCBmaWxlcyk6CiAgL3dvcmtzcGFjZS90YXNrL3dvcmtzcGFjZS9hdHRlbXB0XzEudHh0CiAgL3dvcmtzcGFjZS90YXNrL3dvcmtzcGFjZS9hdHRlbXB0XzIudHh0CkVhY2ggZmlsZSBpcyByb3dzIG9mIHNwYWNlLXNlcGFyYXRlZCBpbnRlZ2VycyAoMC05KSwgb25lIHJvdyBwZXIgbGluZSwKbWF0Y2hpbmcgdGhlIGZvcm1hdCBvZiB0aGUgYE91dHB1dDpgIGJsb2NrcyBpbiBncmlkX3N1bW1hcnkubWQuCgpUb29sczogeW91IGhhdmUgUmVhZCwgRWRpdCwgV3JpdGUsIEJhc2gsIEdsb2IsIEdyZXAuIFByZWZlciBSZWFkIGZvcgppbnNwZWN0aW9uOyB1c2UgQmFzaCBmb3Igc2hvcnQgY29tbWFuZHMgYW5kIG92ZXJ3cml0aW5nIHRoZSBhdHRlbXB0IGZpbGVzLgoKV29ya2Zsb3c6CiAgMS4gUmVhZCBlYWNoIHRyYWluaW5nIHBhaXI7IG5vdGUgZGltZW5zaW9ucywgcGFsZXR0ZSwgb2JqZWN0cywgYW5kIHdoYXQKICAgICBjaGFuZ2VkIGlucHV0IC0+IG91dHB1dC4KICAyLiBXaXRoaW4geW91ciBmaXJzdCBmZXcgdHVybnMsIHdyaXRlIGEgZmlyc3QtcGFzcyBndWVzcyB0byBCT1RICiAgICAgYXR0ZW1wdF8xLnR4dCBhbmQgYXR0ZW1wdF8yLnR4dCAoYSBjb3B5IG9mIHRoZSB0ZXN0IGlucHV0IGlzIGZpbmUgYXMKICAgICBhIHBsYWNlaG9sZGVyKSBzbyB0aGUgd29ya3NwYWNlIGFsd2F5cyBjb250YWlucyBhIHN1Ym1pc3Npb24uCiAgMy4gRm9ybSBvbmUgdHJhbnNmb3JtYXRpb24gcnVsZSB0aGF0IGV4cGxhaW5zIGV2ZXJ5IHRyYWluaW5nIHBhaXIgYW5kCiAgICAgdmVyaWZ5IGl0IHBhaXItYnktcGFpciBiZWZvcmUgYXBwbHlpbmcuCiAgNC4gQXBwbHkgdGhlIHJ1bGUgdG8gdGhlIHRlc3QgaW5wdXQgYW5kIG92ZXJ3cml0ZSBhdHRlbXB0XzEudHh0IGFuZAogICAgIGF0dGVtcHRfMi50eHQgd2l0aCB0aGUgcmVmaW5lZCBhbnN3ZXIgKHN1Ym1pdCB0d28gc3RydWN0dXJhbGx5CiAgICAgZGlmZmVyZW50IGh5cG90aGVzZXMgaWYgeW91IGNhbiBjb25zdHJ1Y3QgdGhlbTsgb3RoZXJ3aXNlIHN1Ym1pdCB0aGUKICAgICBzYW1lIGdyaWQgaW50byBib3RoIGZpbGVzKS4KICA1LiBWYWxpZGF0ZSBiZWZvcmUgZXhpdDoKICAgICBweXRob24zIC93b3Jrc3BhY2UvdGFzay93b3Jrc3BhY2UvdmFsaWRhdGVfcHJlZGljdGlvbi5weSBcXAogICAgICAgL3dvcmtzcGFjZS90YXNrL3dvcmtzcGFjZS9hdHRlbXB0XzEudHh0IFxcCiAgICAgICAvd29ya3NwYWNlL3Rhc2svd29ya3NwYWNlL2F0dGVtcHRfMi50eHQKIiIi)

arc\_prompt = """\

You are solving one ARC visual reasoning task.

Workspace: /workspace/task/workspace

Public task files (already written for you):

- payload.json canonical JSON with ‘train‘ pairs and ‘test‘ inputs

- grid\_summary.md readable rendering of the same grids in plain ASCII

- TASK.md the same grids inlined in markdown

- attempt\_1.txt, attempt\_2.txt placeholder ASCII grids you must overwrite

Goal: infer the train-input -> train-output transformation, apply it to the

test input, and write your answer as plain ASCII grids -- NOT JSON.

Output format (overwrite both files):

/workspace/task/workspace/attempt\_1.txt

/workspace/task/workspace/attempt\_2.txt

Each file is rows of space-separated integers (0-9), one row per line,

matching the format of the ‘Output:‘ blocks in grid\_summary.md.

Tools: you have Read, Edit, Write, Bash, Glob, Grep. Prefer Read for

inspection; use Bash for short commands and overwriting the attempt files.

Workflow:

1. Read each training pair; note dimensions, palette, objects, and what

changed input -> output.

2. Within your first few turns, write a first-pass guess to BOTH

attempt\_1.txt and attempt\_2.txt (a copy of the test input is fine as

a placeholder) so the workspace always contains a submission.

3. Form one transformation rule that explains every training pair and

verify it pair-by-pair before applying.

4. Apply the rule to the test input and overwrite attempt\_1.txt and

attempt\_2.txt with the refined answer (submit two structurally

different hypotheses if you can construct them; otherwise submit the

same grid into both files).

5. Validate before exit:

python3 /workspace/task/workspace/validate\_prediction.py \\

/workspace/task/workspace/attempt\_1.txt \\

/workspace/task/workspace/attempt\_2.txt

"""

Listing 7: Illustrative ARC prompt excerpt; abstracted from \_build\_arc\_no\_mcp\_execution\_prompt in prompts/\_\_init\_\_.py.

#### SWE-bench Pro.

For swebench\_pro, the prompt frames each task as repository repair. Agents read the issue, write a short checklist of behavior changes, inspect verification targets before editing, identify the implementation path, and make the smallest diff that satisfies the checklist. In upstream-strict mode, TASK.md withholds exact test names and gives count-based verification guidance. In seeded mode, it can expose failing tests, selected test files, and a benchmark wrapper command.

[⬇](data:text/plain;base64,c3dlYmVuY2hfcHJvbXB0X2xpbmVzID0gWwogICAgIlJlYWQgYFRBU0subWRgIGluIHRoZSBhY3RpdmUgdGFzayB3b3Jrc3BhY2UuIiwKICAgICJXcml0ZSBhIHNob3J0IGNoZWNrbGlzdCBvZiByZXF1aXJlZCBiZWhhdmlvciBjaGFuZ2VzIGJlZm9yZSBlZGl0aW5nLiIsCiAgICAiSW5zcGVjdCB0aGUgdmVyaWZpY2F0aW9uIHNlY3Rpb24gYW5kIHRhcmdldCB0ZXN0cyBiZWZvcmUgZWRpdGluZy4iLAogICAgIklkZW50aWZ5IHRoZSBpbXBsZW1lbnRhdGlvbiBwYXRoIGFuZCBpbnRlcmZhY2VzIHRoYXQgbXVzdCBjaGFuZ2UuIiwKICAgICJVc2UgcmVncmVzc2lvbiB0YXJnZXRzIGFuZCBzZWxlY3RlZCB0ZXN0cyBmcm9tIFRBU0subWQgd2hlbiBhdmFpbGFibGUuIiwKICAgICJXaGVuIFRBU0subWQgcHJvdmlkZXMgYSBiZW5jaG1hcmsgdGVzdC1zY3JpcHQgY29tbWFuZCwgcnVuIGl0ICIKICAgICJhZnRlciBlYWNoIGVkaXQgYW5kIGl0ZXJhdGUgb24gdGhlIGZpcnN0IGZhaWx1cmUuIiwKICAgICJFZGl0IGZpbGVzIGluIHBsYWNlLiBUaGUgcnVudGltZSBjYXB0dXJlcyB0aGUgd29ya3NwYWNlIGRpZmYgIgogICAgImFzIHRoZSBjYW5vbmljYWwgcGF0Y2guIiwKXQoKc3dlYmVuY2hfdGFza19saW5lcyA9IFsKICAgICIjIFRBU0siLAogICAgIiIsCiAgICBmIi0gdGFza19pZDoge3Rhc2suaWR9IiwKICAgIGYiLSB0YXNrX3NvdXJjZToge3Rhc2tfc291cmNlfSIsCiAgICBmIi0gaW5zdGFuY2VfaWQ6IHtpbnN0YW5jZV9pZH0iLAogICAgZiItIHJlcG86IHtyZXBvfSIsCiAgICAiIiwKICAgICIjIyBPYmplY3RpdmUiLAogICAgIkNvbXBsZXRlIHRoZSBiZWhhdmlvciBkZXNjcmliZWQgYnkgdGhlIGlzc3VlIGFuZCByZXF1aXJlbWVudHMuIiwKICAgICIiLAogICAgIiMjIFZlcmlmaWNhdGlvbiIsCiAgICBmIlRoZXJlIGFyZSB7ZmFpbF90b19wYXNzX2NvdW50fSB0YXJnZXQgdGVzdChzKSB0aGF0IG11c3QgY2hhbmdlICIKICAgICJmcm9tIGZhaWxpbmcgdG8gcGFzc2luZy4iLAogICAgIkJlbmNobWFyayB0ZXN0IHNjcmlwdCBjb21tYW5kOiIsCiAgICBmIi0gYHtzY3JpcHRfY29tbWFuZH1gIiwKICAgICIiLAogICAgIiMjIElzc3VlIiwKICAgIHRhc2sucHJvbXB0LnN0cmlwKCkgb3IgIihub25lKSIsCiAgICAiIiwKICAgICIjIyBPdXRwdXQgRm9ybWF0IChyZXF1aXJlZCkiLAogICAgIkVkaXQgZmlsZXMgaW4gdGhlIHdvcmtzcGFjZSByZXBvLiBUaGUgcnVudGltZSBjYXB0dXJlcyB0aGUgIgogICAgIndvcmtzcGFjZSBkaWZmIGFzIHRoZSBjYW5vbmljYWwgcGF0Y2guIiwKXQ==)

swebench\_prompt\_lines = [

"Read ‘TASK.md‘ in the active task workspace.",

"Write a short checklist of required behavior changes before editing.",

"Inspect the verification section and target tests before editing.",

"Identify the implementation path and interfaces that must change.",

"Use regression targets and selected tests from TASK.md when available.",

"When TASK.md provides a benchmark test-script command, run it "

"after each edit and iterate on the first failure.",

"Edit files in place. The runtime captures the workspace diff "

"as the canonical patch.",

]

swebench\_task\_lines = [

"# TASK",

"",

f"- task\_id: {task.id}",

f"- task\_source: {task\_source}",

f"- instance\_id: {instance\_id}",

f"- repo: {repo}",

"",

"## Objective",

"Complete the behavior described by the issue and requirements.",

"",

"## Verification",

f"There are {fail\_to\_pass\_count} target test(s) that must change "

"from failing to passing.",

"Benchmark test script command:",

f"- ‘{script\_command}‘",

"",

"## Issue",

task.prompt.strip() or "(none)",

"",

"## Output Format (required)",

"Edit files in the workspace repo. The runtime captures the "

"workspace diff as the canonical patch.",

]

Listing 8: Illustrative SWE-bench Pro execution and task excerpts; abstracted from \_build\_swebench\_execution\_prompt and \_build\_swebench\_task\_markdown in prompts/\_\_init\_\_.py.

#### Polyglot.

For polyglot, the prompt removes the repository-repair framing and treats each task as a language-specific programming exercise. Agents read the statement, inspect tests when the contract is underspecified, implement the required functions or types, handle stated edge cases, and run the real verification command when available. Unlike SWE-bench Pro, the final answer is the complete solution source file or files rather than a captured repository diff.

[⬇](data:text/plain;base64,cG9seWdsb3RfcHJvbXB0X2xpbmVzID0gWwogICAgIlJlYWQgYFRBU0subWRgIGluIHRoZSBhY3RpdmUgdGFzayB3b3Jrc3BhY2UuIiwKICAgICJSZWFkIHRoZSBmdWxsIHByb2JsZW0gc3RhdGVtZW50IGNhcmVmdWxseSBiZWZvcmUgZWRpdGluZy4iLAogICAgIkRvIG5vdCBleHBlY3QgaGlkZGVuIGJlbmNobWFyayB0ZXN0cyBpbiB0aGUgd29ya3NwYWNlOyB0cmVhdCB0aGUgcHJvYmxlbSAiCiAgICAic3RhdGVtZW50LCBzdGFydGVyIGNvZGUsIGFuZCBhbnkgaW5saW5lZCBleGFtcGxlcyBhcyB0aGUgc3BlY2lmaWNhdGlvbi4iLAogICAgIkltcGxlbWVudCB0aGUgcmVxdWlyZWQgZnVuY3Rpb25zLCBtZXRob2RzLCBvciB0eXBlcyBpbiB0aGUgc3RhcnRlciBmaWxlcy4iLAogICAgIkhhbmRsZSBlZGdlIGNhc2VzIG1lbnRpb25lZCBpbiB0aGUgcHJvYmxlbSBzdGF0ZW1lbnQuIiwKICAgICJSdW4gdGhlIHZlcmlmaWNhdGlvbiBjb21tYW5kIGZyb20gVEFTSy5tZCBiZWZvcmUgZmluYWxpemluZyB3aGVuIGF2YWlsYWJsZS4iLAogICAgIkRvIG5vdCByZWx5IG9uIGFkIGhvYyBzbmlwcGV0cyBhcyBmaW5hbCB2ZXJpZmljYXRpb24gd2hlbiBhIHJlYWwgIgogICAgInRlc3QgY29tbWFuZCBleGlzdHMuIiwKICAgICJSZXR1cm4gdGhlIGFuc3dlciBpbiB0aGUgZXhhY3QgZm9ybWF0IHNwZWNpZmllZCBpbiBUQVNLLm1kLiIsCl0KCnBvbHlnbG90X3Rhc2tfbGluZXMgPSBbCiAgICAiIyBUQVNLIiwKICAgICIiLAogICAgZiItIHRhc2tfaWQ6IHt0YXNrLmlkfSIsCiAgICAiLSB0YXNrX3NvdXJjZTogcG9seWdsb3QiLAogICAgZiItIGxhbmd1YWdlOiB7bGFuZ3VhZ2V9IiwKICAgIGYiLSBleGVyY2lzZToge2V4ZXJjaXNlX25hbWV9IiwKICAgICIiLAogICAgIiMjIFByb2JsZW0iLAogICAgdGFzay5wcm9tcHQuc3RyaXAoKSBvciAiKG5vbmUpIiwKICAgICIiLAogICAgIiMjIFJlcXVpcmVkIFZlcmlmaWNhdGlvbiIsCiAgICAiVGhlIGhpZGRlbiB0ZXN0IHN1aXRlIGlzIE5PVCBzZWVkZWQgaW50byB0aGUgd29ya3NwYWNlIChmb3IgbW9zdCIsCiAgICAiZXhlcmNpc2VzIHRoZSB0ZXN0cyBkb3VibGUgYXMgdGhlIGFuc3dlciBrZXkpLCBzbyBubyB0ZXN0IGZpbGUgZXhpc3RzIiwKICAgICJvbiBkaXNrIHRvIGluc3BlY3QuIFJ1biB0aGUgcmVhbCBleGVyY2lzZSB0ZXN0IGNvbW1hbmQgYmVsb3cgYXMgYSIsCiAgICAiY29tcGlsZS90eXBlLWNoZWNrIHBhc3Mgd2hlbiBhdmFpbGFibGU7IGRvIG5vdCBjcmVhdGUsIHN0dWIsIG9yIGd1ZXNzIiwKICAgICJ0aGUgbWlzc2luZyB0ZXN0IGZpbGU6IiwKICAgICJgYGAiLAogICAgdGVzdF9jb21tYW5kLAogICAgImBgYCIsCiAgICAiIiwKICAgICIjIyBTdGFydGVyIENvZGUiLAogICAgZiIjIyMgYHtmaWxlbmFtZX1gIiwKICAgIGYiYGBge2V4dH0iLAogICAgY29udGVudC5yc3RyaXAoKSwKICAgICJgYGAiLAogICAgIiIsCiAgICAiIyMgT3V0cHV0IEZvcm1hdCAocmVxdWlyZWQpIiwKICAgICJSZXR1cm4gdGhlIGZ1bGwgc291cmNlIGNvZGUgb2YgdGhlIHNvbHV0aW9uIGZpbGUocyksIG5vdCBhIGRpZmYuIiwKXQ==)

polyglot\_prompt\_lines = [

"Read ‘TASK.md‘ in the active task workspace.",

"Read the full problem statement carefully before editing.",

"Do not expect hidden benchmark tests in the workspace; treat the problem "

"statement, starter code, and any inlined examples as the specification.",

"Implement the required functions, methods, or types in the starter files.",

"Handle edge cases mentioned in the problem statement.",

"Run the verification command from TASK.md before finalizing when available.",

"Do not rely on ad hoc snippets as final verification when a real "

"test command exists.",

"Return the answer in the exact format specified in TASK.md.",

]

polyglot\_task\_lines = [

"# TASK",

"",

f"- task\_id: {task.id}",

"- task\_source: polyglot",

f"- language: {language}",

f"- exercise: {exercise\_name}",

"",

"## Problem",

task.prompt.strip() or "(none)",

"",

"## Required Verification",

"The hidden test suite is NOT seeded into the workspace (for most",

"exercises the tests double as the answer key), so no test file exists",

"on disk to inspect. Run the real exercise test command below as a",

"compile/type-check pass when available; do not create, stub, or guess",

"the missing test file:",

"‘‘‘",

test\_command,

"‘‘‘",

"",

"## Starter Code",

f"### ‘{filename}‘",

f"‘‘‘{ext}",

content.rstrip(),

"‘‘‘",

"",

"## Output Format (required)",

"Return the full source code of the solution file(s), not a diff.",

]

Listing 9: Illustrative Polyglot execution and task excerpts; abstracted from \_build\_polyglot\_execution\_prompt and \_build\_polyglot\_task\_markdown in prompts/\_\_init\_\_.py.

#### Terminal-Bench 2.

For terminal\_bench\_2, the prompt relies on the benchmark’s native task specification rather than a generated TASK.md. Agents are told to read tb2/instruction.md as the authoritative task statement and tb2/task.toml for timeouts and environment.

[⬇](data:text/plain;base64,dGIyX3Byb21wdF9saW5lcyA9IFsKICAgICJSZWFkIHRoZSBuYXRpdmUgYHRiMi9pbnN0cnVjdGlvbi5tZGAgZmlyc3QuIEl0IGlzIHRoZSAiCiAgICAiYXV0aG9yaXRhdGl2ZSB0YXNrIHN0YXRlbWVudC4iLAogICAgIlJlYWQgYE1FTU9SWS5tZGAgbmV4dCBhbmQgYWN0aXZlbHkgcmV1c2UgaXQgYmVmb3JlIHBsYW5uaW5nIG9yICIKICAgICJyZXBlYXRpbmcgZXhwbG9yYXRpb24uIiwKICAgICJSZWFkIGB0YjIvdGFzay50b21sYCBmb3IgdGFzayBtZXRhZGF0YSwgdGltZW91dHMsIGFuZCBlbnZpcm9ubWVudCBoaW50cy4iLAogICAgIlRyZWF0IHRoZSBtb3VudGVkIGZyYW1ld29yayB3b3Jrc3BhY2UgYXMgdGFzayBzcGVjaWZpY2F0aW9uIG9ubHk7ICIKICAgICJ0aGUgcmVhbCB3b3JrIGhhcHBlbnMgaW4gdGhlIG5hdGl2ZSB0YXNrIGNvbnRhaW5lciBmaWxlc3lzdGVtLiIsCiAgICAiQWZ0ZXIgcmVhZGluZyB0aGUgc3BlYyBmaWxlcywgaWRlbnRpZnkgdGhlIHJlYWwgdGFzayBzdXJmYWNlIHF1aWNrbHk6ICIKICAgICJjdXJyZW50IGRpcmVjdG9yeSwgcmVwby9hcHAgcGF0aHMsIHNlcnZpY2VzLCBwb3J0cywgY29uZmlnIGZpbGVzLCAiCiAgICAiYW5kIGJ1aWxkL3J1bnRpbWUgZW50cnlwb2ludHMuIiwKICAgICJQcmVmZXIgc2hvcnQgbXV0YXRlLXRoZW4tY2hlY2sgY3ljbGVzIG92ZXIgbG9uZyBzcGVjdWxhdGl2ZSBzaGVsbCBibG9ja3MuIiwKICAgICJJZiB0aGUgdGFzayBkZXBlbmRzIG9uIGEgc2VydmljZSwgZGFlbW9uLCBwb3J0LCBvciBkZXBsb3llZCBhcnRpZmFjdCwgIgogICAgInZlcmlmeSBpdCBmcm9tIGEgZnJlc2ggY29tbWFuZCBhZnRlciByZWxvYWQgb3IgcmVzdGFydC4iLAogICAgIk1ha2UgdGhlIHNtYWxsZXN0IHNldCBvZiBjaGFuZ2VzIG5lZWRlZCB0byBzYXRpc2Z5IHRoZSBuYXRpdmUgdGFzayAiCiAgICAiaW5zdHJ1Y3Rpb24uIiwKXQ==)

tb2\_prompt\_lines = [

"Read the native ‘tb2/instruction.md‘ first. It is the "

"authoritative task statement.",

"Read ‘MEMORY.md‘ next and actively reuse it before planning or "

"repeating exploration.",

"Read ‘tb2/task.toml‘ for task metadata, timeouts, and environment hints.",

"Treat the mounted framework workspace as task specification only; "

"the real work happens in the native task container filesystem.",

"After reading the spec files, identify the real task surface quickly: "

"current directory, repo/app paths, services, ports, config files, "

"and build/runtime entrypoints.",

"Prefer short mutate-then-check cycles over long speculative shell blocks.",

"If the task depends on a service, daemon, port, or deployed artifact, "

"verify it from a fresh command after reload or restart.",

"Make the smallest set of changes needed to satisfy the native task "

"instruction.",

]

Listing 10: Illustrative Terminal-Bench 2 execution prompt excerpt; abstracted from \_build\_terminal\_bench\_2\_execution\_prompt in prompts/\_\_init\_\_.py.

### D.3 Summary

The main design choice is to keep our framework’s scaffold stable while adapting the task-facing prompt to each benchmark’s action surface. ARC prompts emphasize visible grid comparison and blind trial submission. SWE-bench Pro prompts emphasize issue-to-code alignment, targeted tests, and in-place repository patches. Polyglot prompts emphasize direct exercise completion, starter-code editing, and full-source output. Terminal-Bench 2 prompts emphasize native benchmark instructions, live-container state, and operational verifier behavior. This separation lets our framework reuse memory, reflection, and discussion prompts across benchmarks while preserving the verification semantics required by each environment.

### E.4 Cache-Stability Split for Forum Prompts

Anthropic’s prompt cache keys on the content hash up to and including the cache\_control marker, so mutating any byte of the prefix invalidates the cached entry on every call. To keep cache reads non-trivial across forum rounds, every forum-prompt builder returns a ForumPromptParts object with two halves:

- •

  cacheable\_prefix — agent- and generation-invariant content: task identifiers, descriptions, MCP tool list, round instructions, the JSON output schema. cache\_control is attached only to a block containing this prefix.
- •

  variable\_suffix — per-agent / per-generation content: this agent’s prior attempts, native session memory, and peer posts surfaced in the current round.

Adapters with cache-aware delivery (anthropic\_direct\_forum) emit the prefix as a separate cache\_control-marked block and append the suffix as a plain block; adapters that surface the prompt body through a flat file (e.g. TASK.md) call ForumPromptParts.as\_text() to recover the concatenated body.

# Shared user prompt (both benchmarks): interpolate the current task and prior

user = (

"Current task:\n{json.dumps(task\_payload)}\n\n"

"Shared distilled prior knowledge:\n{json.dumps(asset\_payload)}"

)

Listing 16: ARC knowledge-transfer adapter system prompt; excerpt from prompts/kt\_adapter.py.
