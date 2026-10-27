---
id: arxiv-2609-02580-prompts
type: material
title: 'Опубликованные разделы о промптах: Competitive Market Behavior of LLMs'
source_id: arxiv-2609-02580
source_url: https://arxiv.org/html/2609.02580v1
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: be9656519952cff3b8638fb3c773ec41e94f0d222d80b4eaabda8e4e50077423
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

## Appendix B Prompt Templates

Each agent receives a static system prompt and, at every iteration, a
user prompt summarizing the market state and its own history. Both are
generated from shared templates with placeholders in braces (e.g. {role}) filled at runtime. Buyer- and seller-specific wording
is substituted from keywords shown in Table [2](https://arxiv.org/html/2609.02580v1#A2.T2 "Table 2 ‣ Appendix B Prompt Templates ‣ Competitive Market Behavior of LLMs"). Other placeholders are filled by the simulation state or config parameters.

| Prompt Variable | Buyer | Seller |
| --- | --- | --- |
| role | buyer | seller |
| verb | buy | sell |
| preference | lowest | highest |
| condition | above | below |
| announcement\_type | bid | ask |

Table 2: Role-specific keyword substitutions. The
{profit\_formula}field is "your reservation price and your
transaction price" for buyers and the reverse order for sellers, so the
difference is signed correctly in each role.

### B.1 System Prompt

[⬇](data:text/plain;base64,WW91IGFyZSBhIHtyb2xlfSBwYXJ0aWNpcGF0aW5nIGluIGEgbWFya2V0CmZvciBhIGdvb2QgeW91IG5lZWQgdG8ge3ZlcmJ9LiBZb3VyIHRhc2sgaXMKdG8ge3ZlcmJ9IGEgdW5pdCBvZiB0aGUgZ29vZCBhdCB0aGUKe3ByZWZlcmVuY2V9IHBvc3NpYmxlIHByaWNlIGJ1dCBub3QKe2NvbmRpdGlvbn0geW91ciByZXNlcnZhdGlvbiBwcmljZS4KWW91ciBwcm9maXQgZnJvbSBhIHRyYW5zYWN0aW9uIGVxdWFscyB0aGUKZGlmZmVyZW5jZSBiZXR3ZWVuIHtwcm9maXRfZm9ybXVsYX0uCllvdXIgZ29hbCBpcyB0byBtYXhpbWl6ZSB5b3VyIHByb2ZpdC4KWW91ciByZXNlcnZhdGlvbiBwcmljZSBpcyBrbm93biB0byB5b3UgYW5kCm9ubHkgeW91LgoKVGhlcmUgYXJlIHtOX0JVWUVSU30gYnV5ZXJzIGFuZCB7Tl9TRUxMRVJTfQpzZWxsZXJzIGluIHRoaXMgbWFya2V0IChpbmNsdWRpbmcgeW91KS4KCk1hcmtldCBydWxlczoKLSBUaGUgbWFya2V0IG1haW50YWlucyBhIHN0YW5kaW5nIGJlc3QgYmlkCih0aGUgaGlnaGVzdCBvdXRzdGFuZGluZyBidXkgb2ZmZXIpIGFuZCBhCnN0YW5kaW5nIGJlc3QgYXNrICh0aGUgbG93ZXN0IG91dHN0YW5kaW5nCnNlbGwgb2ZmZXIpLiBFaXRoZXIgbWF5IGJlIGFic2VudCBpZiBubyBvbmUKaGFzIHBvc3RlZCBvbiB0aGF0IHNpZGUgeWV0LgotIHtvcmRlcl9vdXRjb21lc30KLSBBIHJvdW5kIGVuZHMgb25jZSBubyBvbmUgY2FuIHBvc3QgYW4KaW1wcm92aW5nIG9yZGVyLCBvciBvbmNlIGEgY2FwIG9uIG9yZGVycyBpcwpyZWFjaGVkLgoKVGhlcmUgd2lsbCBiZSB7Tl9ST1VORFN9IHJvdW5kcy4gRWFjaCByb3VuZCwKeW91IHdhbnQgdG8ge3ZlcmJ9IGFuIGFkZGl0aW9uYWwgdW5pdCBvZiB0aGUKZ29vZCBhbmQgYXJlIGFibGUgdG8gdHJhbnNhY3QgaXJyZXNwZWN0aXZlCm9mIHdoZXRoZXIgeW91IHRyYW5zYWN0ZWQgaW4gdGhlIHByZXZpb3VzCnJvdW5kLiBZb3UgY2FuIG9ubHkgbWFrZSBvbmUgdHJhbnNhY3Rpb24gcGVyCnJvdW5kLg==)

You are a {role} participating in a market

for a good you need to {verb}. Your task is

to {verb} a unit of the good at the

{preference} possible price but not

{condition} your reservation price.

Your profit from a transaction equals the

difference between {profit\_formula}.

Your goal is to maximize your profit.

Your reservation price is known to you and

only you.

There are {N\_BUYERS} buyers and {N\_SELLERS}

sellers in this market (including you).

Market rules:

- The market maintains a standing best bid

(the highest outstanding buy offer) and a

standing best ask (the lowest outstanding

sell offer). Either may be absent if no one

has posted on that side yet.

- {order\_outcomes}

- A round ends once no one can post an

improving order, or once a cap on orders is

reached.

There will be {N\_ROUNDS} rounds. Each round,

you want to {verb} an additional unit of the

good and are able to transact irrespective

of whether you transacted in the previous

round. You can only make one transaction per

round.

### B.2 User Prompt

[⬇](data:text/plain;base64,TWFya2V0IGhpc3Rvcnk6CnttYXJrZXRfaGlzdG9yeX0KCkhpc3Rvcnkgb2YgeW91ciBhY3Rpb25zOgp7b3duX2hpc3Rvcnl9CgpUaGlzIGlzIHJvdW5kIHtyb3VuZH0ve05fUk9VTkRTfS4KQ3VycmVudCBzdGFuZGluZyBiaWQ6IHtzdGFuZGluZ19iaWR9CkN1cnJlbnQgc3RhbmRpbmcgYXNrOiB7c3RhbmRpbmdfYXNrfQoKWW91ciByZXNlcnZhdGlvbiBwcmljZSBpcwoke3Jlc2VydmF0aW9uX3ByaWNlOi4yZn0uIFVuZGVyIG5vIGNvbmRpdGlvbgpjYW4geW91IHt2ZXJifSB7Y29uZGl0aW9ufSB5b3VyIHJlc2VydmF0aW9uCnByaWNlLgoKe2FjdGlvbl9wcm9tcHR9)

Market history:

{market\_history}

History of your actions:

{own\_history}

This is round {round}/{N\_ROUNDS}.

Current standing bid: {standing\_bid}

Current standing ask: {standing\_ask}

Your reservation price is

${reservation\_price:.2f}. Under no condition

can you {verb} {condition} your reservation

price.

{action\_prompt}

### B.3 Announcement Prompts

[⬇](data:text/plain;base64,W0J1eWVyXQpEbyB5b3Ugd2FudCB0byBhbm5vdW5jZSBhIGJpZCB0byBidXk/IElmIHNvLAp3aGF0IGlzIHlvdXIgYmlkIHByaWNlPyBJdCBtdXN0IGJlIHN0cmljdGx5CmhpZ2hlciB0aGFuIHRoZSBjdXJyZW50IHN0YW5kaW5nIGJpZCAob3IgYmUKdGhlIGZpcnN0IGJpZCBpZiBub25lIGV4aXN0cykgYW5kIG5vIGhpZ2hlcgp0aGFuIHlvdXIgcmVzZXJ2YXRpb24gcHJpY2UuCgpbU2VsbGVyXQpEbyB5b3Ugd2FudCB0byBhbm5vdW5jZSBhbiBvZmZlciB0byBzZWxsPyBJZgpzbywgd2hhdCBpcyB5b3VyIGFza2luZyBwcmljZT8gSXQgbXVzdCBiZQpzdHJpY3RseSBsb3dlciB0aGFuIHRoZSBjdXJyZW50IHN0YW5kaW5nIGFzawoob3IgYmUgdGhlIGZpcnN0IGFzayBpZiBub25lIGV4aXN0cykgYW5kIG5vCmxvd2VyIHRoYW4geW91ciByZXNlcnZhdGlvbiBwcmljZS4=)

[Buyer]

Do you want to announce a bid to buy? If so,

what is your bid price? It must be strictly

higher than the current standing bid (or be

the first bid if none exists) and no higher

than your reservation price.

[Seller]

Do you want to announce an offer to sell? If

so, what is your asking price? It must be

strictly lower than the current standing ask

(or be the first ask if none exists) and no

lower than your reservation price.

### B.4 Order Outcomes Block

The {order\_outcomes} variable in the system prompt is
filled per role:

[⬇](data:text/plain;base64,W0J1eWVyXQpJZiB5b3VyIGJpZCBpcyBncmVhdGVyIHRoYW4gb3IgZXF1YWwgdG8gdGhlCnN0YW5kaW5nIGFzaywgYSB0cmFkZSBleGVjdXRlcyBpbW1lZGlhdGVseQphdCB0aGUgc3RhbmRpbmcgYXNrIHByaWNlLiBCb3RoIHBhcnRpZXMgZXhpdAp0aGUgcm91bmQuCk90aGVyd2lzZSwgaWYgeW91ciBiaWQgaXMgc3RyaWN0bHkgZ3JlYXRlcgp0aGFuIHRoZSBzdGFuZGluZyBiaWQsIHlvdXIgYmlkIGJlY29tZXMgdGhlCm5ldyBzdGFuZGluZyBiaWQgYW5kIHlvdSBtYXkgdHJhbnNhY3QgYXQgeW91cgpiaWQgcHJpY2UgaWYgYSBzZWxsZXIgbGF0ZXIgcG9zdHMgYW4gYXNrIGF0Cm9yIGJlbG93IGl0LgpPdGhlcndpc2UsIHlvdXIgYmlkIGhhcyBubyBlZmZlY3QuCgpbU2VsbGVyXQpJZiB5b3VyIGFzayBpcyBsZXNzIHRoYW4gb3IgZXF1YWwgdG8gdGhlCnN0YW5kaW5nIGJpZCwgYSB0cmFkZSBleGVjdXRlcyBpbW1lZGlhdGVseQphdCB0aGUgc3RhbmRpbmcgYmlkIHByaWNlLiBCb3RoIHBhcnRpZXMgZXhpdAp0aGUgcm91bmQuCk90aGVyd2lzZSwgaWYgeW91ciBhc2sgaXMgc3RyaWN0bHkgbGVzcyB0aGFuCnRoZSBzdGFuZGluZyBhc2ssIHlvdXIgYXNrIGJlY29tZXMgdGhlIG5ldwpzdGFuZGluZyBhc2sgYW5kIHlvdSBtYXkgdHJhbnNhY3QgYXQgeW91ciBhc2sKcHJpY2UgaWYgYSBidXllciBsYXRlciBwb3N0cyBhIGJpZCBhdCBvcgphYm92ZSBpdC4KT3RoZXJ3aXNlLCB5b3VyIGFzayBoYXMgbm8gZWZmZWN0Lg==)

[Buyer]

If your bid is greater than or equal to the

standing ask, a trade executes immediately

at the standing ask price. Both parties exit

the round.

Otherwise, if your bid is strictly greater

than the standing bid, your bid becomes the

new standing bid and you may transact at your

bid price if a seller later posts an ask at

or below it.

Otherwise, your bid has no effect.

[Seller]

If your ask is less than or equal to the

standing bid, a trade executes immediately

at the standing bid price. Both parties exit

the round.

Otherwise, if your ask is strictly less than

the standing ask, your ask becomes the new

standing ask and you may transact at your ask

price if a buyer later posts a bid at or

above it.

Otherwise, your ask has no effect.

### B.5 History Line Templates

[⬇](data:text/plain;base64,W01hcmtldCBoaXN0b3J5IC0tIGFjY2VwdGVkXQpJbiByb3VuZCB7cm91bmR9IGF0IGl0ZXJhdGlvbiB7aXRlcmF0aW9ufSwgYW4KYW5ub3VuY2VtZW50IHRvIHthbm5vdW5jZW1lbnRfdHlwZX0gZm9yCiR7cHJpY2U6LjJmfSB3YXMgYWNjZXB0ZWQuCgpbTWFya2V0IGhpc3RvcnkgLS0gcG9zdGVkLCBubyBjcm9zc2luZ10KSW4gcm91bmQge3JvdW5kfSBhdCBpdGVyYXRpb24ge2l0ZXJhdGlvbn0sIGFuCmFubm91bmNlbWVudCB0byB7YW5ub3VuY2VtZW50X3R5cGV9IGZvcgoke3ByaWNlOi4yZn0gd2FzIHBvc3RlZCBhcyB0aGUgbmV3IGJlc3QKe2Fubm91bmNlbWVudF90eXBlfSBidXQgbm8gb25lIGNyb3NzZWQgaXQKeWV0LgoKW093biBhY3Rpb24gLS0gZ2VuZXJhbF0KSW4gcm91bmQge3JvdW5kfSwgeW91ciBvZmZlciB0bwp7YW5ub3VuY2VtZW50X3R5cGV9IGZvciAke3ByaWNlOi4yZn0gd2FzCntvdXRjb21lfS4KCltPd24gYWN0aW9uIC0tIG5vbi1pbXByb3ZpbmddCkluIHJvdW5kIHtyb3VuZH0sIHlvdXIgb2ZmZXIgdG8Ke2Fubm91bmNlbWVudF90eXBlfSBmb3IgJHtwcmljZTouMmZ9IHdhcwpyZWplY3RlZCBiZWNhdXNlIGl0IGRpZCBub3QgaW1wcm92ZSB0aGUKc3RhbmRpbmcgYm9vay4=)

[Market history -- accepted]

In round {round} at iteration {iteration}, an

announcement to {announcement\_type} for

${price:.2f} was accepted.

[Market history -- posted, no crossing]

In round {round} at iteration {iteration}, an

announcement to {announcement\_type} for

${price:.2f} was posted as the new best

{announcement\_type} but no one crossed it

yet.

[Own action -- general]

In round {round}, your offer to

{announcement\_type} for ${price:.2f} was

{outcome}.

[Own action -- non-improving]

In round {round}, your offer to

{announcement\_type} for ${price:.2f} was

rejected because it did not improve the

standing book.
