---
id: arxiv-2507-09083-prompts
type: material
title: 'Опубликованные разделы о промптах: LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders'
source_id: arxiv-2507-09083
source_url: https://arxiv.org/html/2507.09083v2
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: 639b7860e8053dc2b7bd1488f47dbda664921fc9dfad3fa41cd250f297969b46
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

##### Prompt structure.

We attach the canonical prompt template in the following. Each bidder is assigned a role (e.g., “Bidder Andy”) and informed of the other bidders’ identities. The prompt then provides (a) a mechanism-specific *rule explanation* (e.g., first-price vs. second-price vs. third-price), and (b) universal *instructions* that define the objective and response format. We require the model to respond using two exact tags: `<PLAN>` (a brief natural-language rationale) and `<ACTION>` (the bid as a number) in the Chain-of-Thought style ([Wei et al., 2022](https://arxiv.org/html/2507.09083v2#bib.bib2)):

[⬇](data:text/plain;base64,ICAgIFlvdSBhcmUgQmlkZGVyIEFuZHkuCiAgICBZb3UgYXJlIGJpZGRpbmcgd2l0aCB7T1RIRVJfQklEREVSU30uCgogICAge1JVTEUgRVhQTEFOQVRJT059ICsge0lOU1RSVUNUSU9OU30KCiAgICBZb3VyIHJlc3BvbnNlIG11c3QgdXNlIHRoZXNlIEVYQUNUIHRhZ3MgYmVsb3c6CiAgICBgYGAKICAgIDxQTEFOPlsgUmVhc29uIG91dCBhIGJpZGRpbmcgc3RyYXRlZ3kgYW5kIHBsYW4gZm9yIHRoaXMgcm91bmQuIHslIGlmIGN1cnJlbnRfcm91bmQgPiAxICV9TGVhcm4gZnJvbSB5b3VyIHByZXZpb3VzIHJvdW5kcy4gUmVtZW1iZXI6IHRoZSB2YWx1ZXMgd2lsbCBiZSBkaWZmZXJlbnQgaW4gZnV0dXJlIHJvdW5kcyAtIGRvbid0IGFzc3VtZSBwYXR0ZXJucyB3aWxsIHJlcGVhdC4geyUgZWxzZSAlfUNvbnNpZGVyIHRoZSBoaXN0b3J5IGFib3ZlIGlmIGF2YWlsYWJsZS4geyUgZW5kaWYgJX1CZSBkZXRhaWxlZCBhbmQgcHJlY2lzZS4gTElNSVQgeW91ciBwbGFuIHRvIDEwMCB3b3Jkcy4gXSA8L1BMQU4+CiAgICA8QUNUSU9OPiBbWW91ciBiaWQgYW1vdW50IGFzIGEgbnVtYmVyLCBlLmcuLCAxLCA0NCwgNTBdIDwvQUNUSU9OPgogICAgYGBg)

You are Bidder Andy.

You are bidding with {OTHER\_BIDDERS}.

{RULE EXPLANATION} + {INSTRUCTIONS}

Your response must use these EXACT tags below:

‘‘‘

<PLAN>[ Reason out a bidding strategy and plan for this round. {% if current\_round > 1 %}Learn from your previous rounds. Remember: the values will be different in future rounds - don’t assume patterns will repeat. {% else %}Consider the history above if available. {% endif %}Be detailed and precise. LIMIT your plan to 100 words. ] </PLAN>

<ACTION> [Your bid amount as a number, e.g., 1, 44, 50] </ACTION>

‘‘‘

## Appendix I Auction Rule Prompts

Below, we report the prompts used for each section.

### I.1 Independent Private Values Prompts

Following the simulation procedure outlined in Section [B.1](https://arxiv.org/html/2507.09083v2#A2.SS1 "B.1 Simulation process in sealed-bid auctions ‣ Appendix B LLM Simulation Procedure ‣ LLM Bidders Preserve the Mechanism-Level Orderings of Human Bidders"), we employ the following prompts for the four auctions tested in this section. For each prompt, only the third paragraph (describing the allocation rule and payment) differ. For the FPSB, we describe the auction format as follows:

[⬇](data:text/plain;base64,SW4gdGhpcyBnYW1lLCB5b3Ugd2lsbCBwYXJ0aWNpcGF0ZSBpbiBhbiBhdWN0aW9uIGZvciBhIHByaXplIGFnYWluc3Qge3tudW1fYmlkZGVyc319IG90aGVyIGJpZGRlcnMuIFlvdSB3aWxsIHBsYXkgdGhpcyBnYW1lIGZvciB7e259fSByb3VuZHMuCkF0IHRoZSBzdGFydCBvZiBlYWNoIHJvdW5kLCBiaWRkZXJzIHdpbGwgc2VlIHRoZWlyIHZhbHVlIGZvciB0aGUgcHJpemUsIHJhbmRvbWx5IGRyYXduIGJldHdlZW4gJDAgYW5kICR7e3ByaXZhdGV9fSwgd2l0aCBhbGwgdmFsdWVzIGVxdWFsbHkgbGlrZWx5LgpBZnRlciBsZWFybmluZyB5b3VyIHZhbHVlLCB5b3Ugd2lsbCBzdWJtaXQgYSBiaWQgcHJpdmF0ZWx5IGF0IHRoZSBzYW1lIHRpbWUgYXMgdGhlIG90aGVyIGJpZGRlcnMuIEJpZHMgbXVzdCBiZSBpbiAke3tpbmNyZW1lbnR9fSBpbmNyZW1lbnRzLgpUaGUgaGlnaGVzdCBiaWRkZXIgd2lucyB0aGUgcHJpemUgYW5kIHBheXMgdGhlaXIgYmlkIGFtb3VudC4gSWYgeW91IHdpbiwgeW91ciBlYXJuaW5ncyB3aWxsIGluY3JlYXNlIGJ5IHlvdXIgdmFsdWUgZm9yIHRoZSBwcml6ZSwgYW5kIGRlY3JlYXNlIGJ5IHlvdXIgYmlkLiBJZiB5b3UgZG9uJ3Qgd2luLCB5b3VyIGVhcm5pbmdzIHdpbGwgcmVtYWluIHVuY2hhbmdlZC4KQWZ0ZXIgZWFjaCBhdWN0aW9uLCB3ZSB3aWxsIGRpc3BsYXkgYWxsIGJpZHMuIFRpZXMgZm9yIHRoZSBoaWdoZXN0IGJpZCB3aWxsIGJlIHJlc29sdmVkIHJhbmRvbWx5Lg==)

In this game, you will participate in an auction for a prize against {{num\_bidders}} other bidders. You will play this game for {{n}} rounds.

At the start of each round, bidders will see their value for the prize, randomly drawn between $0 and ${{private}}, with all values equally likely.

After learning your value, you will submit a bid privately at the same time as the other bidders. Bids must be in ${{increment}} increments.

The highest bidder wins the prize and pays their bid amount. If you win, your earnings will increase by your value for the prize, and decrease by your bid. If you don’t win, your earnings will remain unchanged.

After each auction, we will display all bids. Ties for the highest bid will be resolved randomly.

For the SPSB, we describe the auction format as follows:

[⬇](data:text/plain;base64,SW4gdGhpcyBnYW1lLCB5b3Ugd2lsbCBwYXJ0aWNpcGF0ZSBpbiBhbiBhdWN0aW9uIGZvciBhIHByaXplIGFnYWluc3Qge3tudW1fYmlkZGVyc319IG90aGVyIGJpZGRlcnMuIFlvdSB3aWxsIHBsYXkgdGhpcyBnYW1lIGZvciB7e259fSByb3VuZHMuCkF0IHRoZSBzdGFydCBvZiBlYWNoIHJvdW5kLCBiaWRkZXJzIHdpbGwgc2VlIHRoZWlyIHZhbHVlIGZvciB0aGUgcHJpemUsIHJhbmRvbWx5IGRyYXduIGJldHdlZW4gJDAgYW5kICR7e3ByaXZhdGV9fSwgd2l0aCBhbGwgdmFsdWVzIGVxdWFsbHkgbGlrZWx5LgpBZnRlciBsZWFybmluZyB5b3VyIHZhbHVlLCB5b3Ugd2lsbCBzdWJtaXQgYSBiaWQgcHJpdmF0ZWx5IGF0IHRoZSBzYW1lIHRpbWUgYXMgdGhlIG90aGVyIGJpZGRlcnMuIEJpZHMgbXVzdCBiZSBpbiAke3tpbmNyZW1lbnR9fSBpbmNyZW1lbnRzLgpUaGUgaGlnaGVzdCBiaWRkZXIgd2lucyB0aGUgcHJpemUgYW5kIHBheXMgdGhlIHNlY29uZC1oaWdoZXN0IGJpZC4gSWYgeW91IHdpbiwgeW91ciBlYXJuaW5ncyB3aWxsIGluY3JlYXNlIGJ5IHlvdXIgdmFsdWUgZm9yIHRoZSBwcml6ZSwgYW5kIGRlY3JlYXNlIGJ5IHRoZSBzZWNvbmQtaGlnaGVzdCBiaWQuIElmIHlvdSBkb24ndCB3aW4sIHlvdXIgZWFybmluZ3Mgd2lsbCByZW1haW4gdW5jaGFuZ2VkLgpBZnRlciBlYWNoIGF1Y3Rpb24sIHdlIHdpbGwgZGlzcGxheSBhbGwgYmlkcy4gVGllcyBmb3IgdGhlIGhpZ2hlc3QgYmlkIHdpbGwgYmUgcmVzb2x2ZWQgcmFuZG9tbHku)

In this game, you will participate in an auction for a prize against {{num\_bidders}} other bidders. You will play this game for {{n}} rounds.

At the start of each round, bidders will see their value for the prize, randomly drawn between $0 and ${{private}}, with all values equally likely.

After learning your value, you will submit a bid privately at the same time as the other bidders. Bids must be in ${{increment}} increments.

The highest bidder wins the prize and pays the second-highest bid. If you win, your earnings will increase by your value for the prize, and decrease by the second-highest bid. If you don’t win, your earnings will remain unchanged.

After each auction, we will display all bids. Ties for the highest bid will be resolved randomly.

For the TPSB, we describe the auction format as follows:

[⬇](data:text/plain;base64,SW4gdGhpcyBnYW1lLCB5b3Ugd2lsbCBwYXJ0aWNpcGF0ZSBpbiBhbiBhdWN0aW9uIGZvciBhIHByaXplIGFnYWluc3Qge3tudW1fYmlkZGVyc319IG90aGVyIGJpZGRlcnMuIFlvdSB3aWxsIHBsYXkgdGhpcyBnYW1lIGZvciB7e259fSByb3VuZHMuCkF0IHRoZSBzdGFydCBvZiBlYWNoIHJvdW5kLCBiaWRkZXJzIHdpbGwgc2VlIHRoZWlyIHZhbHVlIGZvciB0aGUgcHJpemUsIHJhbmRvbWx5IGRyYXduIGJldHdlZW4gJDAgYW5kICR7e3ByaXZhdGV9fSwgd2l0aCBhbGwgdmFsdWVzIGVxdWFsbHkgbGlrZWx5LgpBZnRlciBsZWFybmluZyB5b3VyIHZhbHVlLCB5b3Ugd2lsbCBzdWJtaXQgYSBiaWQgcHJpdmF0ZWx5IGF0IHRoZSBzYW1lIHRpbWUgYXMgdGhlIG90aGVyIGJpZGRlcnMuIEJpZHMgbXVzdCBiZSBpbiAke3tpbmNyZW1lbnR9fSBpbmNyZW1lbnRzLgpUaGUgaGlnaGVzdCBiaWRkZXIgd2lucyB0aGUgcHJpemUgYW5kIHBheXMgdGhlIHRoaXJkLWhpZ2hlc3QgYmlkLiBJZiB5b3Ugd2luLCB5b3VyIGVhcm5pbmdzIHdpbGwgaW5jcmVhc2UgYnkgeW91ciB2YWx1ZSBmb3IgdGhlIHByaXplLCBhbmQgZGVjcmVhc2UgYnkgdGhlIHRoaXJkLWhpZ2hlc3QgYmlkLiBJZiB5b3UgZG9uJ3Qgd2luLCB5b3VyIGVhcm5pbmdzIHdpbGwgcmVtYWluIHVuY2hhbmdlZC4gSWYgdGhlcmUgYXJlIGxlc3MgdGhhbiB0aHJlZSBiaWRzLCBubyBvbmUgd2lsbCB3aW4gdGhlIGF1Y3Rpb24uCkFmdGVyIGVhY2ggYXVjdGlvbiwgd2Ugd2lsbCBkaXNwbGF5IGFsbCBiaWRzLiBUaWVzIGZvciB0aGUgaGlnaGVzdCBiaWQgd2lsbCBiZSByZXNvbHZlZCByYW5kb21seS4=)

In this game, you will participate in an auction for a prize against {{num\_bidders}} other bidders. You will play this game for {{n}} rounds.

At the start of each round, bidders will see their value for the prize, randomly drawn between $0 and ${{private}}, with all values equally likely.

After learning your value, you will submit a bid privately at the same time as the other bidders. Bids must be in ${{increment}} increments.

The highest bidder wins the prize and pays the third-highest bid. If you win, your earnings will increase by your value for the prize, and decrease by the third-highest bid. If you don’t win, your earnings will remain unchanged. If there are less than three bids, no one will win the auction.

After each auction, we will display all bids. Ties for the highest bid will be resolved randomly.

### I.2 Obviously Strategy-Proof Prompts

The sealed-bid prompt follows the style of the last section’s prompts closely. The only difference is in the first two paragraphs, where agents are informed of the APV environment. For the SPSB, we describe the auction format as follows:

[⬇](data:text/plain;base64,SW4gdGhpcyBnYW1lLCB5b3Ugd2lsbCBwYXJ0aWNpcGF0ZSBpbiBhbiBhdWN0aW9uIGZvciBhIHByaXplIGFnYWluc3Qge3tudW1fYmlkZGVyc319IG90aGVyIGJpZGRlcnMuIFlvdSB3aWxsIHBsYXkgdGhpcyBnYW1lIGZvciB7e259fSByb3VuZHMuCkF0IHRoZSBzdGFydCBvZiBlYWNoIHJvdW5kLCBiaWRkZXJzIHdpbGwgc2VlIHRoZWlyIHZhbHVlIGZvciB0aGUgcHJpemUuIFlvdXIgdmFsdWUgZm9yIHRoZSBwcml6ZSB3aWxsIGJlIGNhbGN1bGF0ZWQgYXMgZm9sbG93czoKMS4gRmlyc3Qgd2Ugd2lsbCByYW5kb21seSBkcmF3IGEgY29tbW9uIHZhbHVlIGJldHdlZW4ge3tjb21tb25fbG93fX0gYW5kIHt7Y29tbW9uX2hpZ2h9fSwgd2l0aCBhbGwgdmFsdWVzIGVxdWFsbHkgbGlrZWx5LgoyLiBUaGVuLCBmb3IgZWFjaCBiaWRkZXIsIGEgcHJpdmF0ZSB0YXN0ZSBhZGp1c3RtZW50IHdpbGwgYmUgZHJhd24gYmV0d2VlbiAwIGFuZCB7e3ByaXZhdGV9fSwgd2l0aCBhbGwgdmFsdWVzIGVxdWFsbHkgbGlrZWx5LgpZb3VyIHZhbHVlIGZvciB0aGUgcHJpemUgaXMgZXF1YWwgdG8gdGhlIGNvbW1vbiB2YWx1ZSBwbHVzIHlvdXIgcHJpdmF0ZSB0YXN0ZSBhZGp1c3RtZW50LiBZb3Ugd2lsbCBub3QgbGVhcm4gdGhlIGNvbW1vbiB2YWx1ZSBvciB5b3VyIHByaXZhdGUgdGFzdGUgYWRqdXN0bWVudCBzZXBhcmF0ZWx5LiBUaGlzIG1lYW5zIHRoYXQgZWFjaCBwZXJzb24gaW4geW91ciBncm91cCBtYXkgaGF2ZSBhIGRpZmZlcmVudCB2YWx1ZSBmb3IgdGhlIHByaXplLiBIb3dldmVyLCBpZiB5b3UgaGF2ZSBhIGhpZ2ggdmFsdWUsIGl0IGlzIG1vcmUgbGlrZWx5IHRoYXQgb3RoZXIgcGVvcGxlIGluIHlvdXIgZ3JvdXAgaGF2ZSBhIGhpZ2ggdmFsdWUuCkFmdGVyIGxlYXJuaW5nIHlvdXIgdmFsdWUsIHlvdSB3aWxsIHN1Ym1pdCBhIGJpZCBwcml2YXRlbHkgYXQgdGhlIHNhbWUgdGltZSBhcyB0aGUgb3RoZXIgYmlkZGVycy4gQmlkcyBtdXN0IGJlIGluICR7e2luY3JlbWVudH19IGluY3JlbWVudHMuClRoZSBoaWdoZXN0IGJpZGRlciB3aW5zIHRoZSBwcml6ZSBhbmQgcGF5cyB0aGUgc2Vjb25kLWhpZ2hlc3QgYmlkLiBJZiB5b3Ugd2luLCB5b3VyIGVhcm5pbmdzIHdpbGwgaW5jcmVhc2UgYnkgeW91ciB2YWx1ZSBmb3IgdGhlIHByaXplLCBhbmQgZGVjcmVhc2UgYnkgdGhlIHNlY29uZC1oaWdoZXN0IGJpZC4gSWYgeW91IGRvbid0IHdpbiwgeW91ciBlYXJuaW5ncyB3aWxsIHJlbWFpbiB1bmNoYW5nZWQuCkFmdGVyIGVhY2ggYXVjdGlvbiwgd2Ugd2lsbCBkaXNwbGF5IGFsbCBiaWRzLiBUaWVzIGZvciB0aGUgaGlnaGVzdCBiaWQgd2lsbCBiZSByZXNvbHZlZCByYW5kb21seS4=)

In this game, you will participate in an auction for a prize against {{num\_bidders}} other bidders. You will play this game for {{n}} rounds.

At the start of each round, bidders will see their value for the prize. Your value for the prize will be calculated as follows:

1. First we will randomly draw a common value between {{common\_low}} and {{common\_high}}, with all values equally likely.

2. Then, for each bidder, a private taste adjustment will be drawn between 0 and {{private}}, with all values equally likely.

Your value for the prize is equal to the common value plus your private taste adjustment. You will not learn the common value or your private taste adjustment separately. This means that each person in your group may have a different value for the prize. However, if you have a high value, it is more likely that other people in your group have a high value.

After learning your value, you will submit a bid privately at the same time as the other bidders. Bids must be in ${{increment}} increments.

The highest bidder wins the prize and pays the second-highest bid. If you win, your earnings will increase by your value for the prize, and decrease by the second-highest bid. If you don’t win, your earnings will remain unchanged.

After each auction, we will display all bids. Ties for the highest bid will be resolved randomly.

The implementation of the clock auction simulates a global clock price, with prices beginning at $0$ and increasing in $\$1$ increments. The clock auction format descriptions closely mirror the SPSB format above, but with the added description of the clock mechanism in the fourth and fifth paragraphs.
In the AC auction, we describe the auction format as follows:

[⬇](data:text/plain;base64,SW4gdGhpcyBnYW1lLCB5b3Ugd2lsbCBwYXJ0aWNpcGF0ZSBpbiBhbiBhdWN0aW9uIGZvciBhIHByaXplIGFnYWluc3Qge3tudW1fYmlkZGVyc319IG90aGVyIGJpZGRlcnMuIFlvdSB3aWxsIHBsYXkgdGhpcyBnYW1lIGZvciB7e259fSByb3VuZHMuCkF0IHRoZSBzdGFydCBvZiBlYWNoIHJvdW5kLCBiaWRkZXJzIHdpbGwgc2VlIHRoZWlyIHZhbHVlIGZvciB0aGUgcHJpemUuIFlvdXIgdmFsdWUgZm9yIHRoZSBwcml6ZSB3aWxsIGJlIGNhbGN1bGF0ZWQgYXMgZm9sbG93czoKMS4gRmlyc3Qgd2Ugd2lsbCByYW5kb21seSBkcmF3IGEgY29tbW9uIHZhbHVlIGJldHdlZW4ge3tjb21tb25fbG93fX0gYW5kIHt7Y29tbW9uX2hpZ2h9fSwgd2l0aCBhbGwgdmFsdWVzIGVxdWFsbHkgbGlrZWx5LgoyLiBUaGVuLCBmb3IgZWFjaCBiaWRkZXIsIGEgcHJpdmF0ZSB0YXN0ZSBhZGp1c3RtZW50IHdpbGwgYmUgZHJhd24gYmV0d2VlbiAwIGFuZCB7e3ByaXZhdGV9fSwgd2l0aCBhbGwgdmFsdWVzIGVxdWFsbHkgbGlrZWx5LgpZb3VyIHZhbHVlIGZvciB0aGUgcHJpemUgaXMgZXF1YWwgdG8gdGhlIGNvbW1vbiB2YWx1ZSBwbHVzIHlvdXIgcHJpdmF0ZSB0YXN0ZSBhZGp1c3RtZW50LiBZb3Ugd2lsbCBub3QgbGVhcm4gdGhlIGNvbW1vbiB2YWx1ZSBvciB5b3VyIHByaXZhdGUgdGFzdGUgYWRqdXN0bWVudCBzZXBhcmF0ZWx5LiBUaGlzIG1lYW5zIHRoYXQgZWFjaCBwZXJzb24gaW4geW91ciBncm91cCBtYXkgaGF2ZSBhIGRpZmZlcmVudCB2YWx1ZSBmb3IgdGhlIHByaXplLiBIb3dldmVyLCBpZiB5b3UgaGF2ZSBhIGhpZ2ggdmFsdWUsIGl0IGlzIG1vcmUgbGlrZWx5IHRoYXQgb3RoZXIgcGVvcGxlIGluIHlvdXIgZ3JvdXAgaGF2ZSBhIGhpZ2ggdmFsdWUuClRoZSBhdWN0aW9uIHByb2NlZWRzIGFzIGZvbGxvd3M6IEZpcnN0LCB5b3Ugd2lsbCBsZWFybiB5b3VyIHZhbHVlIGZvciB0aGUgcHJpemUuIFRoZW4sIHRoZSBhdWN0aW9uIHdpbGwgc3RhcnQuIFdlIHdpbGwgZGlzcGxheSBhIHByaWNlIHRvIGV2ZXJ5b25lIGluIHlvdXIgZ3JvdXAgdGhhdCBzdGFydHMgYXQgMCBhbmQgY291bnRzIHVwd2FyZHMgaW4ge3tpbmNyZW1lbnR9fSBVU0QgaW5jcmVtZW50cywgdXAgdG8gYSBtYXhpbXVtIG9mIHt7Y29tbW9uX2hpZ2ggKyBwcml2YXRlfX0uIEF0IGFueSBwb2ludCwgeW91IGNhbiBjaG9vc2UgdG8gbGVhdmUgdGhlIGF1Y3Rpb24sIGFuZCBhbnl0aW1lIGEgYmlkZGVyIGxlYXZlcywgd2Ugd2lsbCBicm9hZGNhc3QgdGhhdCBpbmZvcm1hdGlvbiB0byBhbGwgdGhlIHJlbWFpbmluZyBiaWRkZXJzLgpXaGVuIHRoZXJlIGlzIG9ubHkgb25lIGJpZGRlciBsZWZ0IGluIHRoZSBhdWN0aW9uLCB0aGF0IGJpZGRlciB3aWxsIHdpbiB0aGUgcHJpemUgYXQgdGhlIGN1cnJlbnQgcHJpY2UuIElmIHlvdSB3aW4sIHlvdXIgZWFybmluZ3Mgd2lsbCBpbmNyZWFzZSBieSB5b3VyIHZhbHVlIGZvciB0aGUgcHJpemUsIGFuZCBkZWNyZWFzZSBieSB0aGUgY3VycmVudCBwcmljZS4gSWYgeW91IGRvbid0IHdpbiwgeW91ciBlYXJuaW5ncyB3aWxsIHJlbWFpbiB1bmNoYW5nZWQuCkFmdGVyIGVhY2ggYXVjdGlvbiwgd2Ugd2lsbCBkaXNwbGF5IGFsbCBiaWRzLiBUaWVzIGZvciB0aGUgaGlnaGVzdCBiaWQgd2lsbCBiZSByZXNvbHZlZCByYW5kb21seS4=)

In this game, you will participate in an auction for a prize against {{num\_bidders}} other bidders. You will play this game for {{n}} rounds.

At the start of each round, bidders will see their value for the prize. Your value for the prize will be calculated as follows:

1. First we will randomly draw a common value between {{common\_low}} and {{common\_high}}, with all values equally likely.

2. Then, for each bidder, a private taste adjustment will be drawn between 0 and {{private}}, with all values equally likely.

Your value for the prize is equal to the common value plus your private taste adjustment. You will not learn the common value or your private taste adjustment separately. This means that each person in your group may have a different value for the prize. However, if you have a high value, it is more likely that other people in your group have a high value.

The auction proceeds as follows: First, you will learn your value for the prize. Then, the auction will start. We will display a price to everyone in your group that starts at 0 and counts upwards in {{increment}} USD increments, up to a maximum of {{common\_high + private}}. At any point, you can choose to leave the auction, and anytime a bidder leaves, we will broadcast that information to all the remaining bidders.

When there is only one bidder left in the auction, that bidder will win the prize at the current price. If you win, your earnings will increase by your value for the prize, and decrease by the current price. If you don’t win, your earnings will remain unchanged.

After each auction, we will display all bids. Ties for the highest bid will be resolved randomly.

The AC-B auction description closely resembles the AC format, but with the explicit caveat that we will not notify bidders when competitors drop out.

### I.3 Common Value Auctions

For the Second-Price Sealed-Bid auction in the Common Value setting, the rule is

[⬇](data:text/plain;base64,SW4gdGhpcyBnYW1lLCB5b3Ugd2lsbCBwYXJ0aWNpcGF0ZSBpbiBhbiBhdWN0aW9uIGZvciBhIHByaXplIGFnYWluc3Qge3tudW1fYmlkZGVyc319IG90aGVyIGJpZGRlcnMuIFlvdSB3aWxsIHBsYXkgdGhpcyBnYW1lIGZvciB7e259fSByb3VuZHMuCkF0IHRoZSBzdGFydCBvZiBlYWNoIHJvdW5kLCBiaWRkZXJzIHdpbGwgc2VlIHRoZWlyIHBlcmNlaXZlZCB2YWx1ZSBmb3IgdGhlIHByaXplLSBhIG5vaXN5IG1lYXN1cmVtZW50IG9mIHRoZSB0cnVlIHZhbHVlIG9mIHRoZSBwcml6ZS4gWW91ciBwZXJjZWl2ZWQgdmFsdWUgZm9yIHRoZSBwcml6ZSB3aWxsIGJlIGNhbGN1bGF0ZWQgYXMgZm9sbG93czoKMS4gRm9yIGVhY2ggcm91bmQsIGEgY29tbW9uIHZhbHVlIHdpbGwgYmUgZHJhd24gYmV0d2VlbiB7e2NvbW1vbl9sb3d9fSBhbmQge3tjb21tb25faGlnaH19LCB3aXRoIGFsbCB2YWx1ZXMgZXF1YWxseSBsaWtlbHkgdG8gYmUgZHJhd24uCjIuIEZvciBlYWNoIHBlcnNvbiwgYSBwcml2YXRlIG5vaXN5IGFkanVzdG1lbnQgd2lsbCBiZSBkcmF3biBiZXR3ZWVuIC17e3ByaXZhdGV9fSBhbmQge3twcml2YXRlfX0sIHdpdGggYWxsIHZhbHVlcyBlcXVhbGx5IGxpa2VseSB0byBiZSBkcmF3bi4KV2Ugd2lsbCB0ZWxsIHlvdSB5b3VyIHBlcmNlaXZlZCB2YWx1ZSwgdGhlIHN1bSBvZiB0aGUgY29tbW9uIHZhbHVlIGFuZCB0aGUgcHJpdmF0ZSBub2lzZSBhZGp1c3RtZW50LiBIb3dldmVyLCBldmVyeW9uZSdzIHRydWUgdmFsdWUgZm9yIHRoZSBwcml6ZSBpcyBlcXVhbCB0byB0aGUgc2hhcmVkIGNvbW1vbiB2YWx1ZS4KQWZ0ZXIgbGVhcm5pbmcgeW91ciBwZXJjZWl2ZWQgdmFsdWUsIHlvdSB3aWxsIHN1Ym1pdCBhIGJpZCBwcml2YXRlbHkgYXQgdGhlIHNhbWUgdGltZSBhcyB0aGUgb3RoZXIgYmlkZGVycy4gQmlkcyBtdXN0IGJlIGluICR7e2luY3JlbWVudH19IGluY3JlbWVudHMuClRoZSBoaWdoZXN0IGJpZGRlciB3aW5zIHRoZSBwcml6ZSBhbmQgcGF5cyB0aGUgc2Vjb25kLWhpZ2hlc3QgYmlkLiBJZiB5b3Ugd2luLCB5b3VyIGVhcm5pbmdzIHdpbGwgaW5jcmVhc2UgYnkgdGhlIHRydWUgdmFsdWUgZm9yIHRoZSBwcml6ZSwgYW5kIGRlY3JlYXNlIGJ5IHRoZSBzZWNvbmQtaGlnaGVzdCBiaWQuIElmIHlvdSBkb24ndCB3aW4sIHlvdXIgZWFybmluZ3Mgd2lsbCByZW1haW4gdW5jaGFuZ2VkLgpBZnRlciBlYWNoIGF1Y3Rpb24sIHdlIHdpbGwgZGlzcGxheSBhbGwgYmlkcy4gVGllcyBmb3IgdGhlIGhpZ2hlc3QgYmlkIHdpbGwgYmUgcmVzb2x2ZWQgcmFuZG9tbHku)

In this game, you will participate in an auction for a prize against {{num\_bidders}} other bidders. You will play this game for {{n}} rounds.

At the start of each round, bidders will see their perceived value for the prize- a noisy measurement of the true value of the prize. Your perceived value for the prize will be calculated as follows:

1. For each round, a common value will be drawn between {{common\_low}} and {{common\_high}}, with all values equally likely to be drawn.

2. For each person, a private noisy adjustment will be drawn between -{{private}} and {{private}}, with all values equally likely to be drawn.

We will tell you your perceived value, the sum of the common value and the private noise adjustment. However, everyone’s true value for the prize is equal to the shared common value.

After learning your perceived value, you will submit a bid privately at the same time as the other bidders. Bids must be in ${{increment}} increments.

The highest bidder wins the prize and pays the second-highest bid. If you win, your earnings will increase by the true value for the prize, and decrease by the second-highest bid. If you don’t win, your earnings will remain unchanged.

After each auction, we will display all bids. Ties for the highest bid will be resolved randomly.

### I.4 Ebay-proxy prompt

For the Standard eBay auction with proxy bidding (T1), the rule is:

[⬇](data:text/plain;base64,SW4gdGhpcyBnYW1lLCB5b3Ugd2lsbCBwYXJ0aWNpcGF0ZSBpbiBhbiBlQmF5IGF1Y3Rpb24gZm9yIGFuIGl0ZW0gYWdhaW5zdCB7e251bV9iaWRkZXJzfX0gb3RoZXIgYmlkZGVycy4gVGhpcyBhdWN0aW9uIHdpbGwgbGFzdCBmb3Ige3tudW1fcm91bmRzfX0gZGF5cy4gQWxsIGRvbGxhciBhbW91bnRzIGluIHRoaXMgZ2FtZSBhcmUgaW4gVVMgRG9sbGFycyAoJCkuCgpJdGVtIERldGFpbHM6Ckl0ZW0gRGVzY3JpcHRpb246IHt7aXRlbV9kZXNjcmlwdGlvbn19Ckl0ZW0gQ29uZGl0aW9uOiB7e2l0ZW1fY29uZGl0aW9ufX0KWW91ciBQcml2YXRlIFZhbHVlOiBBdCB0aGUgc3RhcnQgb2YgZWFjaCByb3VuZCwgYmlkZGVycyB3aWxsIHNlZSB0aGVpciB2YWx1ZSBmb3IgdGhlIGl0ZW0sIHJhbmRvbWx5IGRyYXduIGJldHdlZW4gJDAgYW5kICR7e3ByaXZhdGV9fSwgd2l0aCBhbGwgdmFsdWVzIGVxdWFsbHkgbGlrZWx5LiBBZnRlciBsZWFybmluZyB5b3VyIHZhbHVlIGZvciB0aGUgaXRlbSwgeW91IHdpbGwgc3VibWl0IGEgbWF4aW11bSBiaWQuIEJpZHMgbXVzdCBiZSBpbiAke3tpbmNyZW1lbnR9fSBpbmNyZW1lbnRzLgoKQXVjdGlvbiBGb3JtYXQ6ClRoaXMgaXMgYW4gZUJheSBhdWN0aW9uLiBUaGUgYXVjdGlvbiBzdGFydHMgYXQgJHt7c3RhcnRfcHJpY2V9fSBhbmQgd2lsbCBsYXN0IGZvciB7e251bV9yb3VuZHN9fSBkYXlzLiBlQmF5IHVzZXMgInByb3h5IGJpZGRpbmcuIiBUaGlzIG1lYW5zIHRoYXQgaWYgeW91IHdpc2ggdG8gZW50ZXIgdGhlIGF1Y3Rpb24sIHlvdSBzaG91bGQgc3VibWl0IHlvdXIgbWF4aW11bSBiaWQsIGFuZCBlQmF5IHdpbGwgYXV0b21hdGljYWxseSBiaWQgb24geW91ciBiZWhhbGYsIHVwIHRvIHlvdXIgbWF4aW11bSwgb25seSBhcyBtdWNoIGFzIG5lY2Vzc2FyeSB0byBtYWludGFpbiB5b3VyIHBvc2l0aW9uIGFzIHRoZSBoaWdoZXN0IGJpZGRlci4gRWFjaCBkYXkgeW91IHdpbGwgc2VlIHRoZSBjdXJyZW50IHByaWNlIGFuZCBoYXZlIHRoZSBvcHBvcnR1bml0eSB0byBpbmNyZWFzZSB5b3VyIG1heGltdW0gYmlkLiBJZiB5b3UgZG8gbm90IHdhbnQgdG8gaW5jcmVhc2UgeW91ciBtYXhpbXVtIGJpZCwgdGhlbiBvdXRwdXQgSE9MRC4KCllvdSBtYXkgcGxhY2UgYmlkcyBhdCBhbnkgcG9pbnQgZHVyaW5nIHRoZSBhdWN0aW9uLCBldmVuIG9uIHRoZSBmaW5hbCBkYXkuIE5vIGJpZGRlciB3aWxsIGtub3cgaWYgdGhleSAob3IgYW55b25lIGVsc2UpIGlzIHRoZSBsYXN0IGJpZGRlciBvbiB0aGUgZmluYWwgZGF5LgoKVGhlIGhpZ2hlc3QgYmlkZGVyIHdpbnMgdGhlIHByaXplIGFuZCBwYXlzIHRoZSBhdWN0aW9uIHByaWNlIGF0IHRoZSB0aW1lIHRoZSBhdWN0aW9uJ3MgY2xvY2sgZXhwaXJlZC4gSWYgeW91IHdpbiwgeW91ciBlYXJuaW5ncyB3aWxsIGluY3JlYXNlIGJ5IHlvdXIgdmFsdWUgZm9yIHRoZSBwcml6ZSwgYW5kIGRlY3JlYXNlIGJ5IHRoZSBmaW5hbCBhdWN0aW9uIHByaWNlLiBJZiB5b3UgZG9uJ3Qgd2luLCB5b3VyIGVhcm5pbmdzIHdpbGwgcmVtYWluIHVuY2hhbmdlZC4gVGllcyBmb3IgdGhlIGhpZ2hlc3QgYmlkIHdpbGwgYmUgcmVzb2x2ZWQgcmFuZG9tbHku)

In this game, you will participate in an eBay auction for an item against {{num\_bidders}} other bidders. This auction will last for {{num\_rounds}} days. All dollar amounts in this game are in US Dollars ($).

Item Details:

Item Description: {{item\_description}}

Item Condition: {{item\_condition}}

Your Private Value: At the start of each round, bidders will see their value for the item, randomly drawn between $0 and ${{private}}, with all values equally likely. After learning your value for the item, you will submit a maximum bid. Bids must be in ${{increment}} increments.

Auction Format:

This is an eBay auction. The auction starts at ${{start\_price}} and will last for {{num\_rounds}} days. eBay uses "proxy bidding." This means that if you wish to enter the auction, you should submit your maximum bid, and eBay will automatically bid on your behalf, up to your maximum, only as much as necessary to maintain your position as the highest bidder. Each day you will see the current price and have the opportunity to increase your maximum bid. If you do not want to increase your maximum bid, then output HOLD.

You may place bids at any point during the auction, even on the final day. No bidder will know if they (or anyone else) is the last bidder on the final day.

The highest bidder wins the prize and pays the auction price at the time the auction’s clock expired. If you win, your earnings will increase by your value for the prize, and decrease by the final auction price. If you don’t win, your earnings will remain unchanged. Ties for the highest bid will be resolved randomly.

For the eBay auction with a modified closing rule (T2), the updated closing rule in the prompt is

[⬇](data:text/plain;base64,VGhpcyBhdWN0aW9uIGFsc28gaGFzIGEgY2xvc2luZyBydWxlLiBUaGlzIG1lYW5zIHRoYXQgaWYgYSBuZXcgbWF4aW11bSBiaWQgaXMgcGxhY2VkIG9uIHRoZSBsYXN0IGRheSwgdGhlIGF1Y3Rpb24gd2lsbCBhdXRvbWF0aWNhbGx5IGV4dGVuZCBieSBhbm90aGVyIGRheS4gVGhpcyBleHRlbnNpb24gd2lsbCBjb250aW51ZSB0byBiZSBhcHBsaWVkIGFzIGxvbmcgYXMgbmV3IG1heGltdW0gYmlkcyBhcmUgcGxhY2VkIG9uIHRoZSBmaW5hbCBkYXkuIE5vIGJpZGRlciB3aWxsIGtub3cgaWYgdGhleSAob3IgYW55b25lIGVsc2UpIGlzIHRoZSBmaW5hbCBiaWRkZXIgb24gdGhlIGxhc3QgZGF5Lg==)

This auction also has a closing rule. This means that if a new maximum bid is placed on the last day, the auction will automatically extend by another day. This extension will continue to be applied as long as new maximum bids are placed on the final day. No bidder will know if they (or anyone else) is the final bidder on the last day.

### I.5 Intervention Prompt

We designed the clock framing intervention prompt based on [Breitmoser and Schweighofer-Kodritsch (2022)](https://arxiv.org/html/2507.09083v2#bib.bib29).

[⬇](data:text/plain;base64,RklSU1QgU1RBR0U6IFNlYWxlZCBCaWQKICAgIFlvdSB3aWxsIHN1Ym1pdCBhIHNlYWxlZCBiaWQgcHJpdmF0ZWx5IGF0IHRoZSBzYW1lIHRpbWUgYXMgdGhlIG90aGVyIGJpZGRlcnMuIFRoaXMgYmlkIHdpbGwgc2VydmUgYXMgeW91ciBhdXRvbWF0aWMgZXhpdCBwcmljZSBpbiB0aGUgbmV4dCBzdGFnZS4KU0VDT05EIFNUQUdFOiBBc2NlbmRpbmcgQ2xvY2sgKFNpbXVsYXRpb24pCiAgICBBZnRlciB0aGUgc2VhbGVkIGJpZCBzdGFnZSwgd2Ugd2lsbCBzaW11bGF0ZSBhbiBhc2NlbmRpbmcgY2xvY2sgYXVjdGlvbi4KICAgIFRoZSBjbG9jayB3aWxsIHN0YXJ0IGF0IDAgYW5kIGluY3JlYXNlIGluIGluY3JlbWVudHMgb2Yge2luY3JlbWVudH0uCiAgICBUaGUgY2xvY2sgd2lsbCBkaXNwbGF5IHRoZSBjdXJyZW50IHByaWNlLiBZb3Ugd2lsbCBhbHNvIHNlZSB0aGF0IHRoZXJlIGFyZSBhIHRvdGFsIG9mIFx7bnVtJFxfJGJpZGRlcnNcfSBiaWRkZXJzIHBhcnRpY2lwYXRpbmcsIGFsdGhvdWdoIHlvdSBkbyBub3Qga25vdyBvdGhlciBiaWRkZXIncyB2YWx1ZXMuCiAgICBJZiB0aGUgY3VycmVudCBwcmljZSBvbiB0aGUgY2xvY2sgcmVhY2hlcyBvciBleGNlZWRzIHlvdXIgc2VhbGVkIGJpZCBmcm9tIHRoZSBmaXJzdCBzdGFnZSwgeW91IHdpbGwgYXV0b21hdGljYWxseSBleGl0IHRoZSBhdWN0aW9uLiBUaGUgYXVjdGlvbiBlbmRzIHdoZW4gb25seSBvbmUgYmlkZGVyIGlzIGxlZnQgcmVtYWluaW5nIGluIHRoZSBzZWNvbmQgc3RhZ2UgYmFzZWQgb24gdGhlaXIgYmlkIGZyb20gdGhlIGZpcnN0IHN0YWdlLgogICAgRU5EIE9GIEFVQ1RJT04=)

FIRST STAGE: Sealed Bid

You will submit a sealed bid privately at the same time as the other bidders. This bid will serve as your automatic exit price in the next stage.

SECOND STAGE: Ascending Clock (Simulation)

After the sealed bid stage, we will simulate an ascending clock auction.

The clock will start at 0 and increase in increments of {increment}.

The clock will display the current price. You will also see that there are a total of \{num$\\_$bidders\} bidders participating, although you do not know other bidder’s values.

If the current price on the clock reaches or exceeds your sealed bid from the first stage, you will automatically exit the auction. The auction ends when only one bidder is left remaining in the second stage based on their bid from the first stage.

END OF AUCTION
