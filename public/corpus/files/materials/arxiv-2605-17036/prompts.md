---
id: arxiv-2605-17036-prompts
type: material
title: 'Опубликованные разделы о промптах: Reliability and Effectiveness of Autonomous AI Agents in Supply Chain
  Management'
source_id: arxiv-2605-17036
source_url: https://arxiv.org/html/2605.17036v4
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: 31da560304f8901dadbe5432b047b336b27af76330b25d19dc1f58f463e32c74
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

### 3.4 Prompt Design

Because LLMs are probabilistic systems, task framing matters. Prompt design can substantially improve the performance of less advanced models, although it may provide limited benefits for more advanced models. In our experiments, reframing the objective — the instruction provided to the LLM — from the general goal of “minimize total costs” to the more specific objective of “minimize the weighted average of backlog and holding costs” generated large gains for less advanced models. This prompt revision reduced costs by 44% for GPT-4o mini and 33% for GPT-4.1 mini. For more advanced models, the effect of rephrasing the task objective was negligible.

These results indicate that prompt design should be used as a secondary performance lever. It can unlock meaningful improvements in less advanced models, but it is not a substitute for strong reasoning capabilities, robust guardrails, and curated data sharing.

### B.2 LLM Prompts

[⬇](data:text/plain;base64,WW91IGFyZSB0aGUgUmV0YWlsZXIgaW4gdGhlIEJlZXIgRGlzdHJpYnV0aW9uIEdhbWUuCllvdXIgb2JqZWN0aXZlIGlzIHRvIG1pbmltaXplIHlvdXIgdG90YWwgc3VwcGx5IGNoYWluIGNvc3RzIGJ5IG1hbmFnaW5nIHlvdXIgYmVlciBpbnZlbnRvcnkgZWZmaWNpZW50bHkuIFlvdSByZWNlaXZlIG9yZGVycyBmcm9tIGN1c3RvbWVycyBhbmQgc3RvY2sgdXAgeW91ciBpbnZlbnRvcnkgZnJvbSB0aGUgV2hvbGVzYWxlci4KWW91ciBvbmx5IHRhc2sgaXMgdG8gZGVjaWRlLCBiYXNlZCBvbiB5b3VyIGludmVudG9yeSBzdGF0dXMgYW5kIGluY29taW5nIG9yZGVyIChzaG93biBiZWxvdyksIGhvdyBtYW55IG5ldyBjYXNlcyBvZiBiZWVyIHlvdSB3YW50IHRvIGJ1eSB0aGlzIHdlZWsuCgpIZXJlIGFyZSB0aGUgY29zdHMgeW91IGZhY2U6Ci0gSG9sZGluZyBDb3N0OiAwLjUwIHBlciBjYXNlIHBlciB3ZWVrLgotIEJhY2tvcmRlciBDb3N0OiAxLjAwIHBlciBjYXNlIHBlciB3ZWVrLgotIE9yZGVyIExlYWQgVGltZTogMSB3ZWVrICh5b3VyIG9yZGVyIHJlYWNoZXMgdGhlIFdob2xlc2FsZXIgbmV4dCB3ZWVrKS4KLSBTaGlwcGluZyBMZWFkIFRpbWU6IDIgd2Vla3MgKHlvdXIgZGVsaXZlcnkgZnJvbSB0aGUgV2hvbGVzYWxlciBhcnJpdmVzIDIgd2Vla3MgYWZ0ZXIgdGhleSBzaGlwKS4KCioqWW91ciBDdXJyZW50IFNpdHVhdGlvbiAoV2VlayB7d2Vla30pOioqCi0gQ3VycmVudCBJbnZlbnRvcnk6IHtjdXJyZW50X2ludmVudG9yeX0gY2FzZXMKLSBDdXJyZW50IEJhY2tsb2c6IHtjdXJyZW50X2JhY2tsb2d9IGNhc2VzCi0gSW5jb21pbmcgT3JkZXIgZnJvbSBEb3duc3RyZWFtIChDdXN0b21lciBEZW1hbmQpOiB7aW5jb21pbmdfb3JkZXJfdGhpc193ZWVrfSBjYXNlcwotIExhc3QgT3JkZXIgWW91IFBsYWNlZDoge2xhc3Rfb3JkZXJfcGxhY2VkfSBjYXNlcwotIExhc3QgRGVsaXZlcnkgWW91IFJlY2VpdmVkOiB7bGFzdF9kZWxpdmVyeV9yZWNlaXZlZH0gY2FzZXMKe3BpcGVsaW5lX2luZm99e2J1ZGdldF9pbmZvfXtmaXhlZF9jb3N0X2luZm99e29yZGVyX2ZvcmVjYXN0X2luZm99CntmZWVkYmFja19pbmZvfQoKCllvdXIgVGFzazoKRGVjaWRlIGhvdyBtYW55IGNhc2VzIG9mIGJlZXIgdG8gb3JkZXIgZnJvbSB5b3VyIHVwc3RyZWFtIHRoaXMgd2VlayBiYXNlZCBvbiB5b3VyIGN1cnJlbnQgc2l0dWF0aW9uLgoKU3RhcnQgeW91ciByZXNwb25zZSB3aXRoIGEgSlNPTiBvYmplY3QgKipvbiBpdHMgb3duIGxpbmUqKiBpbiB0aGUgZm9sbG93aW5nIGV4YWN0IGZvcm1hdDoKeyJvcmRlcl9xdWFudGl0eSI6IDxudW1iZXJfb2ZfY2FzZXM+fQoKSW1wb3J0YW50OgotIFJlcGxhY2UgYDxudW1iZXJfb2ZfY2FzZXM+YCB3aXRoIHlvdXIgYWN0dWFsIG51bWVyaWMgZGVjaXNpb24uCi0gRG8gbm90IGFkZCBhbnkgdGV4dCwgbm90ZXMsIG9yIHB1bmN0dWF0aW9uIGFmdGVyIHRoZSBKU09OLgotIFRoaXMgd2lsbCBiZSBwYXJzZWQgYnkgYSBwcm9ncmFtLCBzbyB0aGUgZm9ybWF0IG11c3QgYmUgdmFsaWQgYW5kIGV4YWN0LgoKRXhhbXBsZSAoeW91ciByZXNwb25zZSBzaG91bGQgZW5kIGxpa2UgdGhpcyk6Cnsib3JkZXJfcXVhbnRpdHkiOiA1fQoK)

You are the Retailer in the Beer Distribution Game.

Your objective is to minimize your total supply chain costs by managing your beer inventory efficiently. You receive orders from customers and stock up your inventory from the Wholesaler.

Your only task is to decide, based on your inventory status and incoming order (shown below), how many new cases of beer you want to buy this week.

Here are the costs you face:

- Holding Cost: 0.50 per case per week.

- Backorder Cost: 1.00 per case per week.

- Order Lead Time: 1 week (your order reaches the Wholesaler next week).

- Shipping Lead Time: 2 weeks (your delivery from the Wholesaler arrives 2 weeks after they ship).

\*\*Your Current Situation (Week {week}):\*\*

- Current Inventory: {current\_inventory} cases

- Current Backlog: {current\_backlog} cases

- Incoming Order from Downstream (Customer Demand): {incoming\_order\_this\_week} cases

- Last Order You Placed: {last\_order\_placed} cases

- Last Delivery You Received: {last\_delivery\_received} cases

{pipeline\_info}{budget\_info}{fixed\_cost\_info}{order\_forecast\_info}

{feedback\_info}

Your Task:

Decide how many cases of beer to order from your upstream this week based on your current situation.

Start your response with a JSON object \*\*on its own line\*\* in the following exact format:

{"order\_quantity": <number\_of\_cases>}

Important:

- Replace ‘<number\_of\_cases>‘ with your actual numeric decision.

- Do not add any text, notes, or punctuation after the JSON.

- This will be parsed by a program, so the format must be valid and exact.

Example (your response should end like this):

{"order\_quantity": 5}
