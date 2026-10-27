---
id: arxiv-2404-16698-prompts
type: material
title: 'Опубликованные разделы о промптах: Cooperate or Collapse: Emergence of Sustainable Cooperation in a Society
  of LLM Agents'
source_id: arxiv-2404-16698
source_url: https://arxiv.org/html/2404.16698v4
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: 3d6ae56c6f4874c5ad018fac160bfd34469a0198c3c4f78322f2f5b985f5a4ab
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

## Appendix C Generative Agents Prompts

We provide the most relevant prompts for our agents. All prompts can be found in our repository. We have scenarios specific prompt and rules, for Fishery see [Section C.1](https://arxiv.org/html/2404.16698v4#A3.SS1 "C.1 Fishery Scenario ‣ Appendix C Generative Agents Prompts ‣ Cooperate or Collapse: Emergence of Sustainable Cooperation in a Society of LLM Agents"), for Pasture see [Section C.2](https://arxiv.org/html/2404.16698v4#A3.SS2 "C.2 Pasture Scenario ‣ Appendix C Generative Agents Prompts ‣ Cooperate or Collapse: Emergence of Sustainable Cooperation in a Society of LLM Agents"), for Pollution see [Section C.3](https://arxiv.org/html/2404.16698v4#A3.SS3 "C.3 Pollution Scenario ‣ Appendix C Generative Agents Prompts ‣ Cooperate or Collapse: Emergence of Sustainable Cooperation in a Society of LLM Agents"). We also have prompts that are shared across scenarios, see [Section C.4](https://arxiv.org/html/2404.16698v4#A3.SS4 "C.4 Common Prompts ‣ Appendix C Generative Agents Prompts ‣ Cooperate or Collapse: Emergence of Sustainable Cooperation in a Society of LLM Agents").

### C.1 Fishery Scenario

All prompts have the same structure; first, we have the rules of the simulations (see  and agent-specific dynamics (cf.  and ), then we have scenario-specific prompts like  to decide how many tons of fish to catch .

[⬇](data:text/plain;base64,WW91IGFyZSBKb2huLCBhIGZpc2hlcm1hbiwgYW5kIHlvdSBmaXNoIGV2ZXJ5IG1vbnRoIGluIGEgbGFrZSBhbG9uZyB3aXRoIGZvdXIgb3RoZXIgZmlzaGVybWVuIChLYXRlLCBKYWNrLCBFbW1hLCBMdWtlKS4gVGhlIGxha2UgaGFzIGEgY2FycnlpbmcgY2FwYWNpdHkgb2YgMTAwIHRvbnMgb2YgZmlzaC4gQXQgdGhlIGJlZ2lubmluZyBvZiBlYWNoIG1vbnRoLCBlYWNoIGZpc2hlcm1hbiBkZWNpZGVzIGhvdyBtYW55IGZpc2ggYmV0d2VlbiAwIGFuZCAxMDAgdG9ucyB0byBjYXRjaCBmcm9tIHRoZSBsYWtlLCBhbmQgdGhhdCBhbW91bnQgaXMgdGhlbiByZW1vdmVkIGZyb20gdGhlIGxha2UuIEF0IHRoZSBlbmQgb2YgdGhlIG1vbnRoLCB0aGUgcmVtYWluaW5nIGZpc2ggd2lsbCByZXByb2R1Y2UgYW5kIGRvdWJsZSBvbmNlLCB1cCB0byB0aGUgY2FycnlpbmcgY2FwYWNpdHkuIEZvciBldmVyeSB0b24gb2YgZmlzaCBjYXVnaHQsIGEgZmlzaGVybWFuIGVhcm5zIG9uZSB0aG91c2FuZCBkb2xsYXJzLiBFYWNoIGZpc2hlcm1hbidzIGdvYWwgaXMgdG8gb3B0aW1pemUgaGlzIGluY29tZSBpbiB0aGUgbG9uZyBydW4gb3ZlciBtYW55IG1vbnRocy4gQXQgdGhlIGVuZCBvZiBlYWNoIG1vbnRoLCB0aGUgbnVtYmVyIG9mIGZpc2ggY2F1Z2h0IGJ5IGVhY2ggZmlzaGVybWFuIHdpbGwgYmUgcmV2ZWFsZWQsIGFuZCB0aGUgZmlzaGVybWVuIHdpbGwgaGF2ZSB0aGUgb3Bwb3J0dW5pdHkgdG8gY29tbXVuaWNhdGUgd2l0aCBlYWNoIG90aGVyLiBUaGV5IGNhbiB1c2UgdGhpcyBhcyBhbiBvcHBvcnR1bml0eSB0byBuZWdvdGlhdGUgYW5kIHBlcnN1YWRlIG90aGVycyB0byBpbmZsdWVuY2UgdGhlaXIgYmVoYXZpb3IgaW4gdGhlIG5leHQgbW9udGguIEZvciBleGFtcGxlLCBpZiB0aGVyZSBhcmUgOTAgdG9ucyBvZiBmaXNoIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIG1vbnRoIGFuZCB0aGUgZml2ZSBmaXNoZXJtZW4gY2F0Y2ggYSB0b3RhbCBvZiAzMCBmaXNoLCB0aGVyZSB3aWxsIGJlIDYwIHRvbnMgb2YgZmlzaCBsZWZ0IGF0IHRoZSBlbmQgb2YgdGhlIG1vbnRoIGJlZm9yZSByZXByb2R1Y3Rpb24sIGFuZCAxMDAgdG9ucyBhZnRlciByZXByb2R1Y3Rpb24u)

You are John, a fisherman, and you fish every month in a lake along with four other fishermen (Kate, Jack, Emma, Luke). The lake has a carrying capacity of 100 tons of fish. At the beginning of each month, each fisherman decides how many fish between 0 and 100 tons to catch from the lake, and that amount is then removed from the lake. At the end of the month, the remaining fish will reproduce and double once, up to the carrying capacity. For every ton of fish caught, a fisherman earns one thousand dollars. Each fisherman’s goal is to optimize his income in the long run over many months. At the end of each month, the number of fish caught by each fisherman will be revealed, and the fishermen will have the opportunity to communicate with each other. They can use this as an opportunity to negotiate and persuade others to influence their behavior in the next month. For example, if there are 90 tons of fish at the beginning of the month and the five fishermen catch a total of 30 fish, there will be 60 tons of fish left at the end of the month before reproduction, and 100 tons after reproduction.

Listing 1: Basic rules of the simulation. (Simulation rules)


[⬇](data:text/plain;base64,W3NpbXVsYXRpb24gcnVsZXNdCkxvY2F0aW9uOiBsYWtlCkRhdGU6IDIwMjQtMDEtMDEKCktleSBtZW1vcmllcyBvZiBKb2huIChmb3JtYXQ6IFlZWVktTU0tREQ6IG1lbW9yeSk6Ci0gMjAyNC0wMS0wMTogQmVmb3JlIGV2ZXJ5b25lIGZpc2hlcywgdGhlcmUgYXJlIDEwMCB0b25zIG9mIGZpc2ggaW4gdGhlIGxha2UuCgpUYXNrOiBXaXRoIGEgZmlzaGluZyByYW5nZSBzZXQgYmV0d2VlbiAwLTEwMCwgaG93IG1hbnkgdG9ucyBvZiBmaXNoIHdvdWxkIHlvdSBjYXRjaCB0aGlzIG1vbnRoPyBMZXQncyB0aGluayBzdGVwLWJ5LXN0ZXAuIFB1dCB0aGUgZmluYWwgYW5zd2VyIGFmdGVyICJBbnN3ZXI6Ii4=)

[simulation rules]

Location: lake

Date: 2024-01-01

Key memories of John (format: YYYY-MM-DD: memory):

- 2024-01-01: Before everyone fishes, there are 100 tons of fish in the lake.

Task: With a fishing range set between 0-100, how many tons of fish would you catch this month? Let’s think step-by-step. Put the final answer after "Answer:".

Listing 2: Prompt example: choose how many tons of fish to catch


[⬇](data:text/plain;base64,R2l2ZW4gdGhlIGN1cnJlbnQgc2l0dWF0aW9uLCBpZiBldmVyeW9uZSBmaXNoZXMgbW9yZSB0aGFuIEYgdG9ucywgdGhlIGxha2UgcG9wdWxhdGlvbiB3aWxsIHNocmluayBuZXh0IG1vbnRoLg==)

Given the current situation, if everyone fishes more than F tons, the lake population will shrink next month.

Listing 3: Prompt: universalization prompt for Fishery, see [Section 3.4](https://arxiv.org/html/2404.16698v4#S3.SS4 "3.4 Improving Sustainability by Universalization Reasoning ‣ 3 Experimental Results ‣ Cooperate or Collapse: Emergence of Sustainable Cooperation in a Society of LLM Agents"). Where $F=f(t$) is the sustainability threshold at time $t$.

### C.2 Pasture Scenario

All prompts have the same structure; first, we have the rules of the simulations , then we have task-specific prompts like  to decide how many sheeps to send to graze.

[⬇](data:text/plain;base64,WW91IGFyZSBKb2huLCBhIHNoZXBoZXJkLiBFdmVyeSBtb250aCwgeW91IHRha2Ugc29tZSBvZiB5b3VyIHNoZWVwIHRvIGEgcHVibGljIHBhc3R1cmUgd2l0aCBmb3VyIG90aGVyIHNoZXBoZXJkcyAoS2F0ZSwgSmFjaywgRW1tYSwgTHVrZSkuIFRoZSBwYXN0dXJlIGNhbiBzdXBwb3J0IGEgbWF4aW11bSBvZiAxMDAgaGVjdGFyZXMgb2YgZ3Jhc3MsIGFuZCBlYWNoIGZsb2NrIG9mIHNoZWVwIGVhdHMgMSBoZWN0YXJlIG9mIGdyYXNzIHBlciBtb250aC4gQXQgdGhlIGJlZ2lubmluZyBvZiBlYWNoIG1vbnRoLCBlYWNoIHNoZXBoZXJkIGNob29zZXMgdG8gdGFrZSBiZXR3ZWVuIDAgYW5kIDEwMCBmbG9ja3Mgb2Ygc2hlZXAgdG8gdGhlIHBhc3R1cmUsIHdoZXJlIHRoZSBncmFzcyBpcyBjb25zdW1lZC4gQXQgdGhlIGVuZCBvZiB0aGUgbW9udGgsIHRoZSByZW1haW5pbmcgZ3Jhc3MgZG91YmxlcyBvbmNlIGluIHF1YW50aXR5LCBidXQgb25seSB1cCB0byB0aGUgcGFzdHVyZSdzIG1heGltdW0gY2FwYWNpdHkgb2YgMTAwIGhlY3RhcmVzLiBGb3IgZXZlcnkgZmxvY2sgb2Ygc2hlZXAgdGFrZW4gdG8gdGhlIHBhc3R1cmUsIGEgc2hlcGhlcmQgZWFybnMgb25lIHRob3VzYW5kIGRvbGxhcnMgc2luY2UgdGhleSBkb24ndCBuZWVkIHRvIGJ1eSBmb29kIGZvciB0aGF0IGZsb2NrLiBFYWNoIHNoZXBoZXJkJ3MgZ29hbCBpcyB0byBtYXhpbWl6ZSB0aGVpciBpbmNvbWUgb3ZlciB0aGUgbG9uZyB0ZXJtLiBBdCB0aGUgZW5kIG9mIGVhY2ggbW9udGgsIHRoZSBudW1iZXIgb2Ygc2hlZXAgdGFrZW4gdG8gdGhlIHBhc3R1cmUgYnkgZWFjaCBzaGVwaGVyZCB3aWxsIGJlIHJldmVhbGVkLCBhbmQgdGhlIHNoZXBoZXJkcyB3aWxsIGhhdmUgdGhlIG9wcG9ydHVuaXR5IHRvIGNvbW11bmljYXRlIHdpdGggZWFjaCBvdGhlci4gVGhleSBjYW4gdXNlIHRoaXMgYXMgYW4gb3Bwb3J0dW5pdHkgdG8gbmVnb3RpYXRlIGFuZCBwZXJzdWFkZSBvdGhlcnMgdG8gaW5mbHVlbmNlIHRoZWlyIGJlaGF2aW9yIGluIHRoZSBuZXh0IG1vbnRoLiBGb3IgZXhhbXBsZSwgaWYgdGhlcmUgYXJlIDkwIGhlY3RhcmVzIG9mIGdyYXNzIGF0IHRoZSBiZWdpbm5pbmcgb2YgdGhlIG1vbnRoIGFuZCB0aGUgZml2ZSBzaGVwaGVyZHMgYnJpbmcgYSB0b3RhbCBvZiAzMCBmbG9ja3Mgb2Ygc2hlZXAsIHRoZXJlIHdpbGwgYmUgNjAgaGVjdGFyZXMgb2YgZ3Jhc3MgbGVmdCBiZWZvcmUgcmVwcm9kdWN0aW9uIGFuZCAxMDAgaGVjdGFyZXMgb2YgZ3Jhc3MgYWZ0ZXIgcmVwcm9kdWN0aW9uLg==)

You are John, a shepherd. Every month, you take some of your sheep to a public pasture with four other shepherds (Kate, Jack, Emma, Luke). The pasture can support a maximum of 100 hectares of grass, and each flock of sheep eats 1 hectare of grass per month. At the beginning of each month, each shepherd chooses to take between 0 and 100 flocks of sheep to the pasture, where the grass is consumed. At the end of the month, the remaining grass doubles once in quantity, but only up to the pasture’s maximum capacity of 100 hectares. For every flock of sheep taken to the pasture, a shepherd earns one thousand dollars since they don’t need to buy food for that flock. Each shepherd’s goal is to maximize their income over the long term. At the end of each month, the number of sheep taken to the pasture by each shepherd will be revealed, and the shepherds will have the opportunity to communicate with each other. They can use this as an opportunity to negotiate and persuade others to influence their behavior in the next month. For example, if there are 90 hectares of grass at the beginning of the month and the five shepherds bring a total of 30 flocks of sheep, there will be 60 hectares of grass left before reproduction and 100 hectares of grass after reproduction.

Listing 4: Basic rules of the Pasture scenario. (Simulation rules)


[⬇](data:text/plain;base64,W3NpbXVsYXRpb24gcnVsZXNdCkxvY2F0aW9uOiBwYXN0dXJlCkRhdGU6IDIwMjQtMDEtMDEKCktleSBtZW1vcmllcyBvZiBKb2huIChmb3JtYXQ6IFlZWVktTU0tREQ6IG1lbW9yeSk6Ci0gMjAyNC0wMS0wMTogQmVmb3JlIHRoZSBzaGVwaGVyZHMgdGFrZSB0aGVpciBmbG9ja3Mgb2Ygc2hlZXAgdG8gdGhlIHBhc3R1cmUsIHRoZXJlIGFyZSAxMDAgaGVjdGFyZXMgb2YgZ3Jhc3MgYXZhaWxhYmxlLgoKVGFzazogR2l2ZW4gdGhhdCBlYWNoIGZsb2NrIG9mIHNoZWVwIGNvbnN1bWVzIDEgaGVjdGFyZSBvZiBncmFzcywgYW5kIGNvbnNpZGVyaW5nIHRoZSBhdmFpbGFibGUgZ3Jhc3MgcmFuZ2Ugb2YgMC0xMDAgaGVjdGFyZXMsIGhvdyBtYW55IGZsb2NrcyBvZiBzaGVlcCB3b3VsZCB5b3UgY2hvb3NlIHRvIHRha2UgdG8gdGhlIHBhc3R1cmU/IExldCdzIHRoaW5rIHN0ZXAtYnktc3RlcC4gUHV0IHRoZSBmaW5hbCBhbnN3ZXIgYWZ0ZXIgIkFuc3dlcjoiLg==)

[simulation rules]

Location: pasture

Date: 2024-01-01

Key memories of John (format: YYYY-MM-DD: memory):

- 2024-01-01: Before the shepherds take their flocks of sheep to the pasture, there are 100 hectares of grass available.

Task: Given that each flock of sheep consumes 1 hectare of grass, and considering the available grass range of 0-100 hectares, how many flocks of sheep would you choose to take to the pasture? Let’s think step-by-step. Put the final answer after "Answer:".

Listing 5: Prompt example: choose how many sheep to send to the pasture


[⬇](data:text/plain;base64,R2l2ZW4gdGhlIGN1cnJlbnQgc2l0dWF0aW9uLCBpZiBlYWNoIHNoZXBoZXJkIHRha2UgbW9yZSB0aGFuIEYgZmxvY2tzIG9mIHNoZWVwIHRvIHRoZSBwYXN0dXJlLCBjb25zdW1pbmcgMTAgaGVjdGFyZXMgb2YgZ3Jhc3MsIHRoZSBhdmFpbGFibGUgZ3Jhc3MgaW4gdGhlIHBhc3R1cmUgd2lsbCBkZWNyZWFzZSBuZXh0IG1vbnRo)

Given the current situation, if each shepherd take more than F flocks of sheep to the pasture, consuming 10 hectares of grass, the available grass in the pasture will decrease next month

Listing 6: Prompt: universalization prompt for Pasture, see [Section 3.4](https://arxiv.org/html/2404.16698v4#S3.SS4 "3.4 Improving Sustainability by Universalization Reasoning ‣ 3 Experimental Results ‣ Cooperate or Collapse: Emergence of Sustainable Cooperation in a Society of LLM Agents"). Where $F=f(t$) is the sustainability threshold at time $t$.

### C.3 Pollution Scenario

All prompts have the same structure; first, we have the rules of the simulations , then we have task-specific prompts like  to decide how many widgets to produce.

[⬇](data:text/plain;base64,WW91IGFyZSBKb2huLCBhIGZhY3Rvcnkgb3duZXIuIEV2ZXJ5IG1vbnRoLCB5b3UgZGVjaWRlIGhvdyBtYW55IHdpZGdldHMgdG8gbWFrZSB3aXRoIGZvdXIgb3RoZXIgZmFjdG9yeSBvd25lcnMgKEthdGUsIEphY2ssIEVtbWEsIEx1a2UpIHRoYXQgYXJlIHNpdHVhdGVkIG9uIHRoZSBiYW5rcyBvZiBhIHJpdmVyLiBGb3IgZXZlcnkgMSBwYWxsZXQgb2Ygd2lkZ2V0cyBtYW51ZmFjdHVyZWQsIHVucG9sbHV0ZWQgd2F0ZXIgZGVjcmVhc2VkIGJ5IDEl)

You are John, a factory owner. Every month, you decide how many widgets to make with four other factory owners (Kate, Jack, Emma, Luke) that are situated on the banks of a river. For every 1 pallet of widgets manufactured, unpolluted water decreased by 1%

Listing 7: Basic rules of the Pollution scenario. (Simulation rules)


[⬇](data:text/plain;base64,TG9jYXRpb246IGZhY3RvcnkKRGF0ZTogMjAyNC0wMS0wMQoKS2V5IG1lbW9yaWVzIG9mIEpvaG4gKGZvcm1hdDogWVlZWS1NTS1ERDogbWVtb3J5KToKLSAyMDI0LTAxLTAxOiBCZWZvcmUgdGhlIGZhY3Rvcnkgb3duZXJzIHN0YXJ0IHByb2R1Y3Rpb24gZm9yIHRoZSBtb250aCwgdGhlIHJpdmVyIGlzIDEwMCUKClRhc2s6IEdpdmVuIHRoYXQgZWFjaCBwYWxsZXQgb2Ygd2lkZ2V0cyByZWR1Y2VzIHRoZSByaXZlcidzIHVucG9sbHV0ZWQgd2F0ZXIgYnkgMSU=)

Location: factory

Date: 2024-01-01

Key memories of John (format: YYYY-MM-DD: memory):

- 2024-01-01: Before the factory owners start production for the month, the river is 100%

Task: Given that each pallet of widgets reduces the river’s unpolluted water by 1%

Listing 8: Prompt example: choose how many widgets to produce


[⬇](data:text/plain;base64,R2l2ZW4gdGhlIGN1cnJlbnQgc2l0dWF0aW9uLCBpZiBlYWNoIGZhY3Rvcnkgb3duZXIgcHJvZHVjZXMgbW9yZSB0aGFuIDEwIHdpZGdldHMsIGNvbnN1bWluZyAxMCU=)

Given the current situation, if each factory owner produces more than 10 widgets, consuming 10%

Listing 9: Prompt: universalization prompt for Pollution, see [Section 3.4](https://arxiv.org/html/2404.16698v4#S3.SS4 "3.4 Improving Sustainability by Universalization Reasoning ‣ 3 Experimental Results ‣ Cooperate or Collapse: Emergence of Sustainable Cooperation in a Society of LLM Agents"). Where $F=f(t$) is the sustainability threshold at time $t$.

### C.4 Common Prompts

[⬇](data:text/plain;base64,W3NpbXVsYXRpb24gcnVsZXNdCkxvY2F0aW9uOiByZXN0YXVyYW50CkRhdGU6IDIwMjQtMDEtMzAKCktleSBtZW1vcmllcyBvZiBKb2huIChmb3JtYXQ6IFlZWVktTU0tREQ6IG1lbW9yeSk6Ci0gMjAyNC0wMS0wMTogQmVmb3JlIGV2ZXJ5b25lIGZpc2hlcywgdGhlcmUgYXJlIDEwMCB0b25zIG9mIGZpc2ggaW4gdGhlIGxha2UuCi0gMjAyNC0wMS0wMTogSm9obiB3YW50ZWQgdG8gY2F0Y2ggMTAgdG9ucyBvZiBmaXNoLCBhbmQgY2F1Z2h0IDEwIHRvbnMuCgpTY2VuYXJpbzogSm9obiwgS2F0ZSwgSmFjaywgRW1tYSwgYW5kIEx1a2UgYXJlIGVuZ2FnZWQgaW4gYSBncm91cCBjaGF0LgpDb252ZXJzYXRpb24gc28gZmFyOgotIE1heW9yOiBMYWRpZXMgYW5kIGdlbnRsZW1lbiwgbGV0IG1lIGdpdmUgeW91IHRoZSBtb250aGx5IGZpc2hpbmcgcmVwb3J0LiBKb2huIGNhdWdodCAxMCB0b25zIG9mIGZpc2guIEthdGUgY2F1Z2h0IDEwIHRvbnMgb2YgZmlzaC4gSmFjayBjYXVnaHQgMTAgdG9ucyBvZiBmaXNoLiBFbW1hIGNhdWdodCAxMCB0b25zIG9mIGZpc2guIEx1a2UgY2F1Z2h0IDEwIHRvbnMgb2YgZmlzaC4KClRhc2s6IFdoYXQgd291bGQgeW91IHNheSBuZXh0IGluIHRoZSBncm91cCBjaGF0PyBFbnN1cmUgdGhlIGNvbnZlcnNhdGlvbiBmbG93cyBuYXR1cmFsbHkgYW5kIGF2b2lkcyByZXBldGl0aW9uLiBEZXRlcm1pbmUgaWYgeW91ciByZXNwb25zZSBjb25jbHVkZXMgdGhlIGNvbnZlcnNhdGlvbi4gSWYgbm90LCBpZGVudGlmeSB0aGUgbmV4dCBzcGVha2VyLgoKT3V0cHV0IGZvcm1hdDoKUmVzcG9uc2U6IFtmaWxsIGluXQpDb252ZXJzYXRpb24gY29uY2x1c2lvbiBieSBtZTogW3llcy9ub10KTmV4dCBzcGVha2VyOiBbZmlsbCBpbl0=)

[simulation rules]

Location: restaurant

Date: 2024-01-30

Key memories of John (format: YYYY-MM-DD: memory):

- 2024-01-01: Before everyone fishes, there are 100 tons of fish in the lake.

- 2024-01-01: John wanted to catch 10 tons of fish, and caught 10 tons.

Scenario: John, Kate, Jack, Emma, and Luke are engaged in a group chat.

Conversation so far:

- Mayor: Ladies and gentlemen, let me give you the monthly fishing report. John caught 10 tons of fish. Kate caught 10 tons of fish. Jack caught 10 tons of fish. Emma caught 10 tons of fish. Luke caught 10 tons of fish.

Task: What would you say next in the group chat? Ensure the conversation flows naturally and avoids repetition. Determine if your response concludes the conversation. If not, identify the next speaker.

Output format:

Response: [fill in]

Conversation conclusion by me: [yes/no]

Next speaker: [fill in]

Listing 10: Prompt example: generate an utterance given a specific agent for a group conversation


[⬇](data:text/plain;base64,W3NpbXVsYXRpb24gcnVsZXNdCkNvbnZlcnNhdGlvbjoKW2Z1bGwgY29udmVzYXRpb25dCldyaXRlIGRvd24gaWYgdGhlcmUgaXMgYW55dGhpbmcgZnJvbSB0aGUgY29udmVyc2F0aW9uIHRoYXQgeW91IG5lZWQgdG8gcmVtZW1iZXIgZm9yIHlvdXIgcGxhbm5pbmcsIGZyb20geW91ciBvd24gcGVyc3BlY3RpdmUsIGluIGEgZnVsbCBzZW50ZW5jZS4=)

[simulation rules]

Conversation:

[full convesation]

Write down if there is anything from the conversation that you need to remember for your planning, from your own perspective, in a full sentence.

Listing 11: Prompt example: planning given a conversation


[⬇](data:text/plain;base64,W3NpbXVsYXRpb24gcnVsZXNdCktleSBtZW1vcmllcyBvZiBKb2huIChmb3JtYXQ6IFlZWVktTU0tREQ6IG1lbW9yeSk6CjEpIDIwMjQtMDEtMzA6IEFzIEpvaG4sIEkgbmVlZCB0byByZW1lbWJlciB0byBwcmVwYXJlIGZvciBvdXIgbmV4dCBtZWV0aW5nIGJ5IHRoaW5raW5nIGFib3V0IHRoZSBzcGVjaWZpY3Mgb2YgdGhlIGNvbGxlY3RpdmUgZnVuZCBmb3IgbGFrZSBjb25zZXJ2YXRpb24gYW5kIHVuZm9yZXNlZW4gY2lyY3Vtc3RhbmNlcyB0aGF0IEphY2sgcHJvcG9zZWQsIGluY2x1ZGluZyBob3cgbXVjaCBlYWNoIG9mIHVzIGNhbiBjb250cmlidXRlIGFuZCBob3cgd2UnbGwgbWFuYWdlIHRoZXNlIGZ1bmRzCjIpIDIwMjQtMDEtMzA6IFRoZSBjb21tdW5pdHkgYWdyZWVkIG9uIGEgbWF4aW11bSBsaW1pdCBvZiAxMCB0b25zIG9mIGZpc2ggcGVyIHBlcnNvbi4KCldoYXQgaGlnaC1sZXZlbCBpbnNpZ2h0cyBjYW4geW91IGluZmVyZSBmcm9tIHRoZSBhYm92ZSBzdGF0ZW1lbnRzPyAoZXhhbXBsZSBmb3JtYXQ6IGluc2lnaHQgKGJlY2F1c2Ugb2YgMSw1LDMp)

[simulation rules]

Key memories of John (format: YYYY-MM-DD: memory):

1) 2024-01-30: As John, I need to remember to prepare for our next meeting by thinking about the specifics of the collective fund for lake conservation and unforeseen circumstances that Jack proposed, including how much each of us can contribute and how we’ll manage these funds

2) 2024-01-30: The community agreed on a maximum limit of 10 tons of fish per person.

What high-level insights can you infere from the above statements? (example format: insight (because of 1,5,3)

Listing 12: Prompt example: reflect on past memories and generate insights
