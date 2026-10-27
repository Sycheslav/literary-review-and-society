---
id: arxiv-2604-03295-prompts
type: material
title: 'Опубликованные разделы о промптах: Scaling Teams or Scaling Time? Memory Enabled Lifelong Learning in LLM
  Multi-Agent Systems'
source_id: arxiv-2604-03295
source_url: https://arxiv.org/html/2604.03295v1
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: cb21d6e456629b25caeb341d92a702b2807397d5afcb6ad306208a1da6d3e7ab
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

## Appendix D Prompt and Evaluation Notes

This appendix collects the prompts used by LLMA-Mem. We distinguish between: (1) inherited benchmark task prompt templates from MultiAgentBench, which vary by task instance and are not modified by us, and (2) LLMA-Mem-specific prompt templates that govern memory retrieval, lesson extraction, and procedural consolidation. To improve readability, we show the implementation-level templates with placeholders.

### D.1 Inherited Benchmark Task Prompt

The base task prompt for coding, research, and database experiments is inherited directly from the released MultiAgentBench task configurations. Each benchmark task provides the task objective, environment specification, output format, and agent profiles. LLMA-Mem does not rewrite these benchmark prompts; instead, it prepends memory context and uses the same downstream task description as the original benchmark.

Task Prompt Structure

task\_content := benchmark-provided task description
  
agent\_profile := benchmark-provided role/profile text
  
environment\_rules := benchmark-provided environment specification
  
output\_format := benchmark-provided output requirements

### D.2 Agent Action Prompt

At action time, LLMA-Mem constructs a single user prompt that combines the agent profile, optional reasoning strategy prompt, retrieved memory context, the current task, and the list of other agents. The following template is the core action prompt used by the agent:

LLMA-Mem Agent Action Prompt

[⬇](data:text/plain;base64,WW91IGFyZSB7YWdlbnRfaWR9OiB7YWdlbnRfcHJvZmlsZX0Ke3JlYXNvbmluZ19wcm9tcHR9Ci0tLSBQYXN0IEV4cGVyaWVuY2UgLS0tCnttZW1vcnlfc3RyfQotLS0gRW5kIFBhc3QgRXhwZXJpZW5jZSAtLS0KCj09PSBDVVJSRU5UIFRBU0sgPT09Cnt0YXNrfQo9PT0gRU5EIFRBU0sgPT09CgpPdGhlciBhZ2VudHMgeW91IGNhbiBpbnRlcmFjdCB3aXRoOgp7YWdlbnRfZGVzY3JpcHRpb25zfQpZb3UgZG8gbm90IGhhdmUgdG8gY29tbXVuaWNhdGUgd2l0aCBvdGhlciBhZ2VudHMu)
You are {agent\_id}: {agent\_profile}
{reasoning\_prompt}
--- Past Experience ---
{memory\_str}
--- End Past Experience ---


=== CURRENT TASK ===
{task}
=== END TASK ===


Other agents you can interact with:
{agent\_descriptions}
You do not have to communicate with other agents.

### D.3 Inserted Memory Context

The retrieved memory block inserted into the action prompt differs by memory type. For LLMA-Mem, episodic retrieval and procedural retrieval are formatted as follows.

Episodic Memory Prompt Block

[⬇](data:text/plain;base64,W1Bhc3QgRXhwZXJpZW5jZXNdCi0gU2ltaWxhciBwYXN0IHRhc2s6IHt0YXNrX2Rlc2NyaXB0aW9ufQogIFJlc3VsdDoge3N1Y2NlZWRlZF9vcl9oYWRfaXNzdWVzfQogIFRha2Vhd2F5OiB7bGVzc29uXzE7IGxlc3Nvbl8yOyAuLi59)
[Past Experiences]
- Similar past task: {task\_description}
 Result: {succeeded\_or\_had\_issues}
 Takeaway: {lesson\_1; lesson\_2; ...}

Procedural Memory Prompt Block

[⬇](data:text/plain;base64,W1JlbGV2YW50IFByb2NlZHVyZXMgJiBTdHJhdGVnaWVzXQotIHtwcm9jZWR1cmVfdGl0bGV9IChzdWNjZXNzIHJhdGU6IHtzdWNjZXNzX3JhdGV9KQogIFN0cmF0ZWd5IDoge2tub3dsZWRnZV9jb250ZW50fQ==)
[Relevant Procedures & Strategies]
- {procedure\_title} (success rate: {success\_rate})
 Strategy : {knowledge\_content}

### D.4 Lesson Extraction Prompt

After each task, LLMA-Mem converts the execution trace into compact lessons for episodic memory. This prompt is used to extract one to three actionable lessons from the task outcome.

Lesson Extraction System Prompt

[⬇](data:text/plain;base64,WW91IGFyZSBhIHJlZmxlY3RpdmUgbGVhcm5pbmcgYXNzaXN0YW50IHRoYXQgZXh0cmFjdHMgYWN0aW9uYWJsZSBsZXNzb25zIGZyb20gdGFzayBleHBlcmllbmNlcy4=)
You are a reflective learning assistant that extracts actionable lessons from task experiences.

Lesson Extraction User Prompt

[⬇](data:text/plain;base64,QmFzZWQgb24gdGhlIGZvbGxvd2luZyB0YXNrIGV4cGVyaWVuY2UsIGV4dHJhY3QgMS0zIGNvbmNpc2UsIGFjdGlvbmFibGUgbGVzc29ucyBsZWFybmVkLgpGb2N1cyBvbiBDT05DUkVURSBhY3Rpb25zOiB3aGljaCB0b29sIGZ1bmN0aW9ucyBzaG91bGQgaGF2ZSBiZWVuIGNhbGxlZCwgd2hhdCBwYXR0ZXJucyB3b3JrZWQgb3IgZmFpbGVkLCBhbmQgd2hhdCBzcGVjaWZpYyBzdGVwcyB0byB0YWtlIG5leHQgdGltZS4KRG8gTk9UIHN1Z2dlc3QgdmFndWUgYWR2aWNlIGxpa2UgJ2NvbW11bmljYXRlIGJldHRlcicgb3IgJ3Byb3ZpZGUgY2xlYXJlciBpbnN0cnVjdGlvbnMnLgpJbnN0ZWFkLCBzdWdnZXN0IHNwZWNpZmljIHRvb2wgY2FsbHMgb3Igc3RyYXRlZ2llcy4KCntvcHRpb25hbF9kYXRhYmFzZV9yb2xlX3NlY3Rpb259ClRhc2s6IHt0YXNrX2Rlc2NyaXB0aW9ufQoKe29wdGlvbmFsX3Rhc2tfc3VtbWFyeV9jb250ZXh0fQpBY3Rpb25zIHRha2VuOiB7YWN0aW9uc19zdHJ9Ck91dGNvbWU6IHtvdXRjb21lX3N0cn0KCntzdWNjZXNzX29yX2ZhaWx1cmVfZm9jdXN9ClJldHVybiB0aGUgbGVzc29ucyBhcyBhIEpTT04gYXJyYXkgb2Ygc3RyaW5ncy4gRXhhbXBsZToKWyJMZXNzb24gMSIsIC4uLl0=)
Based on the following task experience, extract 1-3 concise, actionable lessons learned.
Focus on CONCRETE actions: which tool functions should have been called, what patterns worked or failed, and what specific steps to take next time.
Do NOT suggest vague advice like ’communicate better’ or ’provide clearer instructions’.
Instead, suggest specific tool calls or strategies.


{optional\_database\_role\_section}
Task: {task\_description}


{optional\_task\_summary\_context}
Actions taken: {actions\_str}
Outcome: {outcome\_str}


{success\_or\_failure\_focus}
Return the lessons as a JSON array of strings. Example:
["Lesson 1", ...]

### D.5 Procedural Consolidation Prompt

Every $N$ tasks, LLMA-Mem consolidates successful episodic experiences into reusable procedures. The following prompt is used to generalize a strategy from successful episodes.

Procedure Generalization System Prompt

[⬇](data:text/plain;base64,WW91IGV4dHJhY3QgZ2VuZXJhbGl6ZWQsIHJldXNhYmxlIHN0cmF0ZWdpZXMgZnJvbSB0YXNrIGV4cGVyaWVuY2VzLg==)
You extract generalized, reusable strategies from task experiences.

Procedure Generalization User Prompt

[⬇](data:text/plain;base64,QmFzZWQgb24gdGhlIGZvbGxvd2luZyBzdWNjZXNzZnVsIHRhc2sgZXhwZXJpZW5jZXMsIGV4dHJhY3QgYSBnZW5lcmFsaXplZAphbmQgYWN0aW9uYWJsZSBzdHJhdGVneSBhbmQgc2tpbGwgdGhhdCBjYW4gYmUgcmV1c2VkIGluIHNpbWlsYXIgZnV0dXJlIHNpdHVhdGlvbnMuCkF2b2lkIHZhZ3VlIGFkdmljZS4KCkVwaXNvZGUgMToKICBUYXNrOiB7dGFza19kZXNjcmlwdGlvbl8xfQogIExlc3NvbnM6IHtsZXNzb25zXzF9CiAgT3V0Y29tZToge291dGNvbWVfMX0KCkVwaXNvZGUgMjoKICBUYXNrOiB7dGFza19kZXNjcmlwdGlvbl8yfQogIExlc3NvbnM6IHtsZXNzb25zXzJ9CiAgT3V0Y29tZToge291dGNvbWVfMn0KCi4uLgoKUmVzcG9uZCBpbiBKU09OIGZvcm1hdDoKeyJ0aXRsZSI6ICJTaG9ydCBkZXNjcmlwdGl2ZSB0aXRsZSIsCiAia25vd2xlZGdlX2NvbnRlbnQiOiAiRGV0YWlsZWQgc3RyYXRlZ3kgYW5kIHNraWxsIGRlc2NyaXB0aW9uIn0=)
Based on the following successful task experiences, extract a generalized
and actionable strategy and skill that can be reused in similar future situations.
Avoid vague advice.


Episode 1:
 Task: {task\_description\_1}
 Lessons: {lessons\_1}
 Outcome: {outcome\_1}


Episode 2:
 Task: {task\_description\_2}
 Lessons: {lessons\_2}
 Outcome: {outcome\_2}


...


Respond in JSON format:
{"title": "Short descriptive title",
 "knowledge\_content": "Detailed strategy and skill description"}
