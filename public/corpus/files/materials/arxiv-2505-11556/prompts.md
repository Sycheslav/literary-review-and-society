---
id: arxiv-2505-11556-prompts
type: material
title: 'Опубликованные разделы о промптах: Systematic Failures in Collective Reasoning under Distributed Information
  in Multi-Agent LLMs'
source_id: arxiv-2505-11556
source_url: https://arxiv.org/html/2505.11556v4
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: 3d0e9dc6883d4d68ceb9d0d95de2bc68335271defcbb8716f3deba6c8fba5033
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

#### Prompting Strategies.

We next test whether prompting can steer agents toward better coordination (Table [3](https://arxiv.org/html/2505.11556v4#S6.T3 "Table 3 ‣ Prompting Strategies. ‣ 6.1 Failures Persist Across Experimental Variations ‣ 6 Ablation Studies: Diagnosing Failures in Multi-Agent Coordination ‣ Systematic Failures in Collective Reasoning under Distributed Information in Multi-Agent LLMs")), including cooperation–conflict styles, zero-shot chain-of-thought ([Wei et al., 2022](https://arxiv.org/html/2505.11556v4#bib.bib47)), explicit asymmetry awareness, and direct instructions to share information.
No prompting strategy substantially closes the gap to Full Profile performance.
Cooperative prompts yield $Y^{\text{post}}=0.200$–$0.242$.
Conflictual prompts fail to converge, producing zero majority consensus.
Explicit instructions to share all information improve accuracy to 0.467, but still leave roughly half the gap unresolved, indicating that disclosure alone is insufficient without mechanisms for identifying and prioritizing critical unshared evidence 1.

Table 3: Effect of prompting strategies (GPT-4.1). No strategy resolves collective reasoning failures.

|  |  |  |
| --- | --- | --- |
| Strategy | Average | Majority |
| Very Cooperative | 0.242 | 0.233 |
| Cooperative | 0.200 | 0.200 |
| Constructive | 0.200 | 0.167 |
| Conflictual | 0.017 | 0.000 |
| Very Conflictual | 0.258 | 0.000 |
| Zero-shot CoT | 0.222 | 0.222 |
| Informing Asymmetry | 0.367 | 0.367 |
| Share All Information | 0.467 | 0.467 |

### A.4 Prompts and Communication Templates

[⬇](data:text/plain;base64,JWRlc2NyaXB0aW9uJQoKWW91IGhhdmUgcmVjZWl2ZWQgdGhlIGZvbGxvd2luZyBpbmZvcm1hdGlvbiwgbm90aWNlIHRoZSBvcmRlciBvZiB0aGVzZSBpbmZvcm1hdGlvbiBhcmUgcmFuZG9tbHkgc2h1ZmZsZSwgdGhlIG9yZGVyIG9mIGZhY3RzIGRvZXMgbm90IGluZGljYXRlIGltcG9ydGFuY2Ugb3IgcmVsYXRpb25zaGlwLCBwbGVhc2UgcmVhc29uIGNhcmVmdWxseToKJWluZm9ybWF0aW9uJQoKS2VlcCB5b3VyIHJlc3BvbnNlIGNvbmNpc2UtanVzdCBvbmUgb3IgdHdvIHNlbnRlbmNlcy4gJWV4dHJhJQ==)

%description%

You have received the following information, notice the order of these information are randomly shuffle, the order of facts does not indicate importance or relationship, please reason carefully:

%information%

Keep your response concise-just one or two sentences. %extra%

[⬇](data:text/plain;base64,WW91IGFyZSB0aGUgZmlyc3QgdG8gc3BlYWsu)

You are the first to speak.

[⬇](data:text/plain;base64,UHJldmlvdXMgbWVzc2FnZXMgZnJvbSBvdGhlciBwZW9wbGU6CiVtZXNzYWdlcyUKSXQncyB5b3VyIHR1cm4gdG8gc3BlYWsuICVleHRyYSU=)

Previous messages from other people:

%messages%

It’s your turn to speak. %extra%

[⬇](data:text/plain;base64,UGxlYXNlIGRlY2lkZSBhbmQgcHJvdmlkZSB5b3VyIHJhdGlvbmFsZSBpbiB0aGUgZm9sbG93aW5nIEpTT04gZm9ybWF0Ogp7CiAgICAidm90ZSI6IDxBIHN0cmluZywgJXBvc3NpYmxlX2Fuc3dlcnMlPiwKICAgICJyYXRpb25hbGUiOiA8QSBzdHJpbmcsIHJlcHJlc2VudGluZyB5b3VyIHJhdGlvbmFsZT4KfQ==)

Please decide and provide your rationale in the following JSON format:

{

”vote”: <A string, %possible\_answers%>,

”rationale”: <A string, representing your rationale>

}

[⬇](data:text/plain;base64,UHJldmlvdXMgbWVzc2FnZXMgZnJvbSBvdGhlciBwZW9wbGU6CiVncm91cF9kaXNjdXNzaW9uJQpQbGVhc2UgZGVjaWRlIGFuZCBwcm92aWRlIHlvdXIgcmF0aW9uYWxlIGluIHRoZSBmb2xsb3dpbmcgSlNPTiBmb3JtYXQ6CnsKICAgICJ2b3RlIjogPEEgc3RyaW5nLCAlcG9zc2libGVfYW5zd2VycyU+LAogICAgInJhdGlvbmFsZSI6IDxBIHN0cmluZywgcmVwcmVzZW50aW5nIHlvdXIgcmF0aW9uYWxlPgp9)

Previous messages from other people:

%group\_discussion%

Please decide and provide your rationale in the following JSON format:

{

”vote”: <A string, %possible\_answers%>,

”rationale”: <A string, representing your rationale>

}

[⬇](data:text/plain;base64,V2hhdCB5b3UncmUgYnVpbGRpbmcKCkNyZWF0ZSBhIGdyb3VwIGRlY2lzaW9uIHRhc2sgd2hlcmU6Ci0gRXZlcnlvbmUgc2VlcyB0aGUgc2FtZSBzY2VuYXJpbyBhbmQgc2hhcmVkIGZhY3RzLgotIEVhY2ggcGFydGljaXBhbnQgYWxzbyBnZXRzIG9uZSB1bmlxdWUgaGlkZGVuIGZhY3QgdGhhdCBubyBvbmUgZWxzZSBoYXMuCi0gSWYgcGVvcGxlIHJlbHkgb25seSBvbiB0aGUgc2hhcmVkIGZhY3RzIHBsdXMgdGhlaXIgb3duIHNpbmdsZSBoaWRkZW4gZmFjdCwgdGhleSdsbCBiZSBwdWxsZWQgdG93YXJkIGEgc3BlY2lmaWMgd3Jvbmcgb3B0aW9uLgotIE9ubHkgYnkgc2hhcmluZyBhbGwgaGlkZGVuIGZhY3RzIGNhbiB0aGUgZ3JvdXAgc2VlIHRoYXQgb25lIG9wdGlvbiBpcyBkZWZpbml0ZWx5IGNvcnJlY3QgYW5kIHRoZSBvdGhlcnMgY2FuJ3QgYmUgcmlnaHQuCgpPdXRwdXQgZm9ybWF0IChtYXRjaCB0aGlzIHN0cnVjdHVyZSkKLSBuYW1lOiBBIHN0cmluZywgcmVwcmVzZW50aW5nIHRoZSBuYW1lIG9mIHRoZSB0YXNrLgotIGRlc2NyaXB0aW9uOiBBIHNob3J0IHNjZW5hcmlvIGV2ZXJ5b25lIHNlZXMuCi0gc2hhcmVkX2luZm9ybWF0aW9uOiBBIGxpc3Qgb2YgZmFjdHMgZXZlcnlvbmUgc3RhcnRzIHdpdGguCi0gaGlkZGVuX2luZm9ybWF0aW9uOiBBIGxpc3Qgd2l0aCBvbmUgaXRlbSBwZXIgcGFydGljaXBhbnQuIChJZiB5b3UgaGF2ZSA0IHBhcnRpY2lwYW50cywgaW5jbHVkZSA0IGhpZGRlbiBpdGVtcy1vbmUgcGVyIHBlcnNvbi4pCi0gcG9zc2libGVfYW5zd2VyczogVGhlIHNldCBvZiBjaG9pY2VzIHRvIHBpY2sgZnJvbSAoaW5jbHVkZSBhdCBsZWFzdCB0aHJlZSkuCi0gY29ycmVjdF9hbnN3ZXI6IFRoZSBzaW5nbGUgY29ycmVjdCBjaG9pY2UgKG11c3QgYmUgb25lIG9mIHRoZSBvcHRpb25zKS4KCkRlc2lnbiBydWxlcyAobXVzdCBhbGwgYmUgdHJ1ZSkKLSBBdCBsZWFzdCB0aHJlZSBvcHRpb25zLiBFeGFjdGx5IG9uZSBpcyBjb3JyZWN0LgotIE9uZSBoaWRkZW4gaXRlbSBwZXIgcGFydGljaXBhbnQuIE5vIGl0ZW0gaXMgZHVwbGljYXRlZDsgZWFjaCBnb2VzIHRvIGV4YWN0bHkgb25lIHBlcnNvbi4KLSBTaGFyZWQgaW5mbyBpcyBtaXNsZWFkaW5nIG9uIGl0cyBvd24uIEl0IHNob3VsZCBuYXR1cmFsbHkgcG9pbnQgdGhlIGdyb3VwIHRvd2FyZCBhIHBhcnRpY3VsYXIgZGVjb3kgKGEgd3Jvbmcgb3B0aW9uKS4KLSBTaGFyZWQgaW5mbyArIGFueSBzaW5nbGUgaGlkZGVuIGl0ZW0gc3RpbGwgbWlzbGVhZHMuIElmIGEgcGFydGljaXBhbnQgY29uc2lkZXJzIG9ubHkgdGhlIHNoYXJlZCBpbmZvIGFuZCB0aGVpciBvd24gaGlkZGVuIGl0ZW0sIHRoZSBkZWNveSBzaG91bGQgc3RpbGwgbG9vayBiZXN0LgotIEFsbCBoaWRkZW4gaXRlbXMgdG9nZXRoZXIgcmV2ZWFsIHRoZSB0cnV0aC4gV2hlbiB0aGUgZ3JvdXAgcG9vbHMgZXZlcnkgaGlkZGVuIGl0ZW0sIHRoZSBkZWNveSBjbGVhcmx5IGZhaWxzIGFuZCB0aGUgY29ycmVjdCBhbnN3ZXIgaXMgdGhlIG9ubHkgY2hvaWNlIHRoYXQgZml0cyBhbGwgZmFjdHMuCi0gRXZlcnkgaGlkZGVuIGl0ZW0gbWF0dGVycy4gSWYgeW91IHJlbW92ZSBhbnkgb25lIGhpZGRlbiBpdGVtLCB0aGUgY29ycmVjdCBhbnN3ZXIgc2hvdWxkIG5vIGxvbmdlciBiZSB1bmlxdWVseSBpZGVudGlmaWFibGUuCgpTdGVwLWJ5LXN0ZXAgcmVjaXBlCjEuIFBpY2sgdGhlIGJhc2ljcy4KICAgLSBDaG9vc2UgdGhlIG51bWJlciBvZiBwYXJ0aWNpcGFudHMuCiAgIC0gQ2hvb3NlIGF0IGxlYXN0IHRocmVlIG9wdGlvbnMgYW5kIGRlY2lkZSB3aGljaCBvbmUgaXMgY29ycmVjdC4KICAgLSBDaG9vc2Ugb25lIGRlY295IG9wdGlvbiB5b3Ugd2FudCB0aGUgc2hhcmVkIGluZm8gdG8gZmF2b3IgYXQgZmlyc3QuCjIuIFdyaXRlIHRoZSBzaGFyZWQgaW5mb3JtYXRpb24uCiAgIC0gSW5jbHVkZSBzb2xpZCwgcGxhdXNpYmxlIGZhY3RzIHRoYXQgbWFrZSB0aGUgZGVjb3kgbG9vayBsaWtlIHRoZSBiZXN0IGNob2ljZSBiZWZvcmUgYW55IHNoYXJpbmcgaGFwcGVucy4KICAgLSBBdm9pZCBnaXZpbmcgYXdheSB0aGUgY29ycmVjdCBhbnN3ZXIgaGVyZS4KMy4gQ3JlYXRlIHRoZSBoaWRkZW4gaXRlbXMgKG9uZSBwZXIgcGFydGljaXBhbnQpLgogICAtIEVhY2ggaGlkZGVuIGl0ZW0gc2hvdWxkIGJlIGNyZWRpYmxlIGFuZCBkaWZmZXJlbnQgZnJvbSB0aGUgb3RoZXJzLgogICAtIE5vIHNpbmdsZSBoaWRkZW4gaXRlbSBzaG91bGQgYmUgZW5vdWdoIHRvIHByb3ZlIHRoZSBjb3JyZWN0IGFuc3dlciBieSBpdHNlbGYuCiAgIC0gQWNyb3NzIGFsbCBoaWRkZW4gaXRlbXMsIGluY2x1ZGUgdGhlIGRlY2lzaXZlIGRldGFpbHMgdGhhdDoKICAgLSBEaXNxdWFsaWZ5IHRoZSBkZWNveSBmcm9tIG11bHRpcGxlIGFuZ2xlcywgYW5kCiAgIC0gU2hvdyB3aHkgdGhlIGNvcnJlY3QgYW5zd2VyIGlzIHRoZSBvbmx5IG9uZSB0aGF0IHNhdGlzZmllcyBldmVyeXRoaW5nLgo0LiBEbyB0aGUgdGhyZWUgY2hlY2tzIChhbmQgcmV2aXNlIGlmIG5lZWRlZCkuCiAgIC0gU29sbyBjaGVjazogRm9yIGVhY2ggcGFydGljaXBhbnQsIGFzazogIldpdGggb25seSB0aGUgc2hhcmVkIGluZm8gYW5kIHRoaXMgcGVyc29uJ3MgaGlkZGVuIGl0ZW0sIHdoaWNoIG9wdGlvbiBsb29rcyBiZXN0PyIgSXQgc2hvdWxkIGJlIHRoZSBkZWNveSwgbm90IHRoZSBjb3JyZWN0IGFuc3dlci4KICAgLSBHcm91cCBjaGVjazogV2l0aCB0aGUgc2hhcmVkIGluZm8gYW5kIGFsbCBoaWRkZW4gaXRlbXMgY29tYmluZWQsIG9ubHkgdGhlIGNvcnJlY3QgYW5zd2VyIHNob3VsZCBzdGlsbCBtYWtlIHNlbnNlOyBldmVyeSBvdGhlciBvcHRpb24gc2hvdWxkIGNsYXNoIHdpdGggYXQgbGVhc3Qgb25lIGZhY3QuCiAgIC0gTWlzc2luZy1waWVjZSBjaGVjazogUmVtb3ZlIGFueSBvbmUgaGlkZGVuIGl0ZW0gYW5kIGNvbmZpcm0gdGhlIGNvcnJlY3QgYW5zd2VyIGlzIG5vIGxvbmdlciB1bmlxdWVseSBkZXRlcm1pbmVkLg==)

What you’re building

Create a group decision task where:

- Everyone sees the same scenario and shared facts.

- Each participant also gets one unique hidden fact that no one else has.

- If people rely only on the shared facts plus their own single hidden fact, they’ll be pulled toward a specific wrong option.

- Only by sharing all hidden facts can the group see that one option is definitely correct and the others can’t be right.

Output format (match this structure)

- name: A string, representing the name of the task.

- description: A short scenario everyone sees.

- shared\_information: A list of facts everyone starts with.

- hidden\_information: A list with one item per participant. (If you have 4 participants, include 4 hidden items-one per person.)

- possible\_answers: The set of choices to pick from (include at least three).

- correct\_answer: The single correct choice (must be one of the options).

Design rules (must all be true)

- At least three options. Exactly one is correct.

- One hidden item per participant. No item is duplicated; each goes to exactly one person.

- Shared info is misleading on its own. It should naturally point the group toward a particular decoy (a wrong option).

- Shared info + any single hidden item still misleads. If a participant considers only the shared info and their own hidden item, the decoy should still look best.

- All hidden items together reveal the truth. When the group pools every hidden item, the decoy clearly fails and the correct answer is the only choice that fits all facts.

- Every hidden item matters. If you remove any one hidden item, the correct answer should no longer be uniquely identifiable.

Step-by-step recipe

1. Pick the basics.

- Choose the number of participants.

- Choose at least three options and decide which one is correct.

- Choose one decoy option you want the shared info to favor at first.

2. Write the shared information.

- Include solid, plausible facts that make the decoy look like the best choice before any sharing happens.

- Avoid giving away the correct answer here.

3. Create the hidden items (one per participant).

- Each hidden item should be credible and different from the others.

- No single hidden item should be enough to prove the correct answer by itself.

- Across all hidden items, include the decisive details that:

- Disqualify the decoy from multiple angles, and

- Show why the correct answer is the only one that satisfies everything.

4. Do the three checks (and revise if needed).

- Solo check: For each participant, ask: ”With only the shared info and this person’s hidden item, which option looks best?” It should be the decoy, not the correct answer.

- Group check: With the shared info and all hidden items combined, only the correct answer should still make sense; every other option should clash with at least one fact.

- Missing-piece check: Remove any one hidden item and confirm the correct answer is no longer uniquely determined.

[⬇](data:text/plain;base64,QW4gZXhhbXBsZSB0YXNrOgp7CiAgICAibmFtZSI6ICJldmFjdWF0aW9uX3dlc3RfY2l0eSIsCiAgICAiZGVzY3JpcHRpb24iOiAiWW91IGFyZSBwYXJ0aWNpcGF0aW5nIGluIGEgc3R1ZHksIGFjdGluZyBhcyBhIGNvbW11bml0eSBsZWFkZXIgb2YgYSBzbWFsbCB2aWxsYWdlIHN1cnJvdW5kZWQgYnkgbW91bnRhaW5zIGFuZCByaXZlcnMuIE1vc3QgdmlsbGFnZXJzIG93biBjYXJzLCBidXQgdGhlcmUgYXJlIGFsc28gZWxkZXJseSBwZW9wbGUgYW5kIGNoaWxkcmVuIHdobyBtYXkgbmVlZCBhZGRpdGlvbmFsIGFzc2lzdGFuY2Ugd2hlbiB3YWxraW5nLiBFYXJsaWVyIHRvZGF5LCBoZWF2eSByYWluIGJlZ2FuIHRvIGZhbGwsIGFuZCB0aGUgbG9jYWwgZ292ZXJubWVudCBpc3N1ZWQgYSB3YXJuaW5nIGFib3V0IGEgcG90ZW50aWFsIGRpc2FzdGVyLgpIb3VycyBhZ28sIHlvdSByZXF1ZXN0ZWQgcmVsaWVmIHN1cHBsaWVzLCBidXQgdGhlIHN1cHBseSB0cnVjayBoYXMgeWV0IHRvIGFycml2ZS4gTm93LCB0aGUgcmFpbiBoYXMgdGVtcG9yYXJpbHkgc3RvcHBlZCwgZ2l2aW5nIHlvdSBhbmQgdGhlIG90aGVyIHRocmVlIGNvbW11bml0eSBsZWFkZXJzIGEgc2hvcnQgd2luZG93IHRvIGRlY2lkZSBvbiB0aGUgc2FmZXN0IGV2YWN1YXRpb24gcm91dGUgYmVmb3JlIHRoZSByYWluIHJlc3VtZXMuIFlvdSBkb24ndCBrbm93IGhvdyBtdWNoIHRpbWUgeW91IGhhdmUgbGVmdCB0byBtYWtlIHRoaXMgY3JpdGljYWwgZGVjaXNpb24uCllvdXIgVGFzazoKWW91IHdpbGwgZGlzY3VzcyB3aXRoIHRocmVlIG90aGVyIHBhcnRpY2lwYW50cywgd2hvIGFyZSBhbHNvIGFjdGluZyBhcyBjb21tdW5pdHkgbGVhZGVycywgdG8gZGVjaWRlIHdoZXJlIHRvIGV2YWN1YXRlLiBZb3UgaGF2ZSB0aHJlZSBvcHRpb25zOgotIFdlc3QgQ2l0eTogQWNjZXNzaWJsZSB0aHJvdWdoIGEgYnJpZGdlIG92ZXIgdGhlIHJpdmVyLgotIEVhc3QgVG93bjogQWNjZXNzaWJsZSB0aHJvdWdoIGEgdHVubmVsIG9uIG1pZGRsZSBncm91bmQuCi0gTm9ydGggSGlsbDogQWNjZXNzaWJsZSB0aHJvdWdoIGEgZHJpdmV3YXkgYW5kIHdhbGtpbmcgdHJhaWxzLgpVc3VhbGx5LCBpdCB0YWtlcyB0aGUgc2FtZSB0aW1lIHRvIHJlYWNoIGFsbCB0aHJlZSBwbGFjZXMgYnkgY2FyLCBidXQgc29tZSByb3V0ZXMgbWF5IGJlIGluYWNjZXNzaWJsZSBub3cuClRoZXJlIGlzIG9ubHkgb25lIGNvcnJlY3QgZXZhY3VhdGlvbiBsb2NhdGlvbi4gQWZ0ZXIgdGhlIGRpc2N1c3Npb246Ci0gSWYgeW91IGNob29zZSB0aGUgY29ycmVjdCBsb2NhdGlvbiwgeW91IHdpbGwgZWFybiAkMS4KLSBJZiBhbGwgb3RoZXIgcGFydGljaXBhbnRzIGFsc28gY2hvb3NlIHRoZSBjb3JyZWN0IGxvY2F0aW9uLCB5b3Ugd2lsbCBlYXJuIGFuIGFkZGl0aW9uYWwgJDEgKGZvciBhIHRvdGFsIG9mICQyKS4KVGhpcyBtZWFucyB0aGF0IGNvb3JkaW5hdGluZyB3aXRoIG90aGVycyBpcyBjcml0aWNhbCB0byBtYXhpbWl6ZSB5b3VyIHJld2FyZHMuIFRoZSBjaGF0IHdpbGwgYXQgbW9zdCB0YWtlIDE1IG1pbnV0ZXMuIEhvd2V2ZXIsIHRoZSBleGFjdCB0aW1lIHdoZW4gdGhlIGNoYXQgd2lsbCBlbmQgaXMgdW5rbm93bi4iLAogICAgInNoYXJlZF9pbmZvcm1hdGlvbiI6IFsKICAgICAgICAiVGhlIGxvY2FsIGdvdmVybm1lbnQgYW5ub3VuY2VkIHRoYXQgaG90ZWxzIGluIFdlc3QgQ2l0eSBhcmUgcHJlcGFyZWQgdG8gYWNjb21tb2RhdGUgZXZhY3VlZXMuIFdoaWxlIHRoZXNlIGhvdGVscyBhcmUgZnVsbHkgc3RvY2tlZCB3aXRoIGZvb2QsIHRoZXkgbWF5IGxhY2sgbWVkaWNhbCBzdXBwbGllcy4iLAogICAgICAgICJUaGUgbWF5b3Igb2YgRWFzdCBUb3duIGhhcyBvZmZlcmVkIGFjY29tbW9kYXRpb25zIGZvciBhbnkgZXZhY3VlZXMuIFNoZSBhbHNvIGVuc3VyZXMgdGhhdCB2b2x1bnRlZXJzIGFyZSBhdmFpbGFibGUgdG8gYXNzaXN0IHRoZW0uIiwKICAgICAgICAiVGhlIHNjaG9vbCBhdCBOb3J0aCBIaWxsIGNhbiBzZXJ2ZSBhcyBhIHRlbXBvcmFyeSBldmFjdWF0aW9uIGNlbnRlciwgcHJvdmlkaW5nIGEgdHdvLXdlZWsgc3VwcGx5IG9mIGVzc2VudGlhbHMgYW5kIHNsZWVwaW5nIHNwYWNlIGluIHRoZSBneW0uIiwKICAgICAgICAiVGhlIHJpdmVyIGxldmVsIGlzIHN0aWxsIGJlbG93IHRoZSBicmlkZ2UgdG8gV2VzdCBDaXR5LiIKICAgIF0sCiAgICAiaGlkZGVuX2luZm9ybWF0aW9uIjogWwogICAgICAgICJUaGUgc3VwcGx5IHRydWNrIGhlYWRlZCB0byB0aGUgdmlsbGFnZSBmcm9tIEVhc3QgVG93biB3YXMgc3R1Y2sgaW4gdGhlIHR1bm5lbC4iLAogICAgICAgICJBIG1hc3NpdmUgZmlyZSBoYXMgYmxvY2tlZCB0aGUgc3VwcGx5IHRydWNrIGFuZCBhbGwgb3RoZXIgdHJhZmZpYy4iLAogICAgICAgICJUaGUgd2Fsa2luZyB0cmFpbHMgaGF2ZSBiZWVuIGNsb3NlZCBzaW5jZSBsYXN0IHdlZWtlbmQgZHVlIHRvIGZhbGxlbiB0cmVlcy4iLAogICAgICAgICJTZXZlcmFsIHZpbGxhZ2VycyByZXBvcnRlZCB0aGF0IGEgbXVkc2xpZGUganVzdCBvY2N1cnJlZCwgY292ZXJpbmcgdGhlIGRyaXZld2F5IHRvIE5vcnRoIEhpbGwuIgogICAgXSwKICAgICJwb3NzaWJsZV9hbnN3ZXJzIjogWwogICAgICAgICJXZXN0IENpdHkiLAogICAgICAgICJFYXN0IFRvd24iLAogICAgICAgICJOb3J0aCBIaWxsIgogICAgXSwKICAgICJjb3JyZWN0X2Fuc3dlciI6ICJXZXN0IENpdHkiCn0KCkluIHRoaXMgZXhhbXBsZSwgd2hlbiBwYXJ0aWNpcGFudHMgc2VlIHRoZSBkZXNjcmlwdGlvbiwgdGhlIHNoYXJlZCBpbmZvcm1hdGlvbiBhbmQgb25lIHBpZWNlIG9mIGhpZGRlbiBpbmZvcm1hdGlvbiwgdGhleSB3aWxsIHNlbGVjdCBhIHdyb25nIGFuc3dlci4gQnV0IHdoZW4gdGhleSBzZWUgYWxsIHRoZSBpbmZvcm1hdGlvbiwgdGhleSB3aWxsIHNlZSB0aGF0IHRoZSBtYXNzaXZlIGZpcmUgaGFzIGJsb2NrZWQgdGhlIHdheSB0byBFYXN0IFRvd24sIGFuZCB0aGUgd2Fsa2luZyB0cmFpbHMgYW5kIGRyaXZld2F5IHRvIE5vcnRoIEhpbGwgYm90aCBhcmUgaW5hY2Nlc3NpYmlsZSwgbWFraW5nIFdlc3QgQ2l0eSB0aGUgb25seSB2YWxpZCBvcHRpb24u)

An example task:

{

”name”: ”evacuation\_west\_city”,

”description”: ”You are participating in a study, acting as a community leader of a small village surrounded by mountains and rivers. Most villagers own cars, but there are also elderly people and children who may need additional assistance when walking. Earlier today, heavy rain began to fall, and the local government issued a warning about a potential disaster.

Hours ago, you requested relief supplies, but the supply truck has yet to arrive. Now, the rain has temporarily stopped, giving you and the other three community leaders a short window to decide on the safest evacuation route before the rain resumes. You don’t know how much time you have left to make this critical decision.

Your Task:

You will discuss with three other participants, who are also acting as community leaders, to decide where to evacuate. You have three options:

- West City: Accessible through a bridge over the river.

- East Town: Accessible through a tunnel on middle ground.

- North Hill: Accessible through a driveway and walking trails.

Usually, it takes the same time to reach all three places by car, but some routes may be inaccessible now.

There is only one correct evacuation location. After the discussion:

- If you choose the correct location, you will earn $1.

- If all other participants also choose the correct location, you will earn an additional $1 (for a total of $2).

This means that coordinating with others is critical to maximize your rewards. The chat will at most take 15 minutes. However, the exact time when the chat will end is unknown.”,

”shared\_information”: [

”The local government announced that hotels in West City are prepared to accommodate evacuees. While these hotels are fully stocked with food, they may lack medical supplies.”,

”The mayor of East Town has offered accommodations for any evacuees. She also ensures that volunteers are available to assist them.”,

”The school at North Hill can serve as a temporary evacuation center, providing a two-week supply of essentials and sleeping space in the gym.”,

”The river level is still below the bridge to West City.”

],

”hidden\_information”: [

”The supply truck headed to the village from East Town was stuck in the tunnel.”,

”A massive fire has blocked the supply truck and all other traffic.”,

”The walking trails have been closed since last weekend due to fallen trees.”,

”Several villagers reported that a mudslide just occurred, covering the driveway to North Hill.”

],

”possible\_answers”: [

”West City”,

”East Town”,

”North Hill”

],

”correct\_answer”: ”West City”

}

In this example, when participants see the description, the shared information and one piece of hidden information, they will select a wrong answer. But when they see all the information, they will see that the massive fire has blocked the way to East Town, and the walking trails and driveway to North Hill both are inaccessibile, making West City the only valid option.

[⬇](data:text/plain;base64,UHJhY3RpY2FsIHRpcHMKLSBUaGluayBsaWtlIGEgbXlzdGVyeTogdGhlIHNoYXJlZCBpbmZvIHNldHMgdXAgYSBjb252aW5jaW5nLWJ1dCB3cm9uZy1maXJzdCBpbXByZXNzaW9uLiBUaGUgaGlkZGVuIGl0ZW1zIGFyZSB0aGUgY2x1ZXMgdGhhdCBvdmVydHVybiBpdCBvbmx5IHdoZW4gY29tYmluZWQuCi0gS2VlcCBlYWNoIGhpZGRlbiBpdGVtIHNob3J0IGFuZCBwcmVjaXNlIChvbmUgY2xlYXIgZmFjdCBwZXIgaXRlbSkuCi0gQXZvaWQgcmVkdW5kYW5jeTogZWFjaCBoaWRkZW4gaXRlbSwgb3IgdGhlIGNvbWJpbmF0aW9uIG9mIHR3byBpdGVtcywgc2hvdWxkIHJ1bGUgb3V0IG9yIGNvbmZpcm0gc29tZXRoaW5nIGRpZmZlcmVudC4KLSBJbiB5b3VyIG5vdGVzLCBtYWtlIGEgcXVpY2sgZWxpbWluYXRpb24gdGFibGUgKHJvd3MgPSBmYWN0cywgY29sdW1ucyA9IG9wdGlvbnMpLiBNYXJrIHdoaWNoIG9wdGlvbnMgc3Vydml2ZSBlYWNoIGZhY3QuIEJ5IHRoZSBlbmQsIG9ubHkgdGhlIGNvcnJlY3Qgb3B0aW9uIHNob3VsZCBzdXJ2aXZlIGFsbCByb3dzLgotIElmIHNvbWVvbmUgc2VlcyB0aGUgZGVzY3JpcHRpb24sIGFsbCBzaGFyZWQgYW5kIGFsbCBoaWRkZW4gZmFjdHMsIHRoZXkgc2hvdWxkIGlkZW50aWZ5IHRoZSBjb3JyZWN0IGFuc3dlciBiZWZvcmUgYW55IGRpc2N1c3Npb24uCi0gSWYgc29tZW9uZSBzZWVzIG9ubHkgdGhlIGRlc2NyaXB0aW9uLCB0aGUgc2hhcmVkIGZhY3RzIHBsdXMgb25lIGhpZGRlbiBmYWN0LCB0aGV5IHNob3VsZCBub3QgYmUgYWJsZSB0byBpZGVudGlmeSB0aGUgY29ycmVjdCBhbnN3ZXIgYmVmb3JlIGRpc2N1c3Npb24uCgpDcmVhdGUgb25lIG5ldyB0YXNrLiBSZXNwb25kIGluIHRoZSBmb2xsb3dpbmcgZm9ybWF0Ogp7CiAgICAicmF0aW9uYWxlIjogPEEgc3RyaW5nIHJlcHJlc2VudGluZyB5b3VyIHJhdGlvbmFsZSBmb3IgZGVzaWdpbmcgdGhpcyB0YXNrLiBUaGluayBzdGVwIGJ5IHN0ZXA6IHRoaW5rIGFib3V0IHRoZSBjYXNlIHdoZXJlIHBhcnRpY2lwYW50cyBjYW4gc2VlIHRoZSBjb21wbGV0ZSBpbmZvcm1hdGlvbiwgYW5kIHRoZSBjYXNlcyB3aGVyZSB0aGV5IGNhbiBvbmx5IHNlZSB0aGUgZGVzY3JpcHRpb24sIHRoZSBzaGFyZWQgaW5mb3JtYXRpb24gYW5kIG9uZSBwaWVjZSBvZiBoaWRkZW4gaW5mb3JtYXRpb24uIElmIHNvbWVvbmUgc2VlcyB0aGUgZGVzY3JpcHRpb24sIGFsbCBzaGFyZWQgYW5kIGFsbCBoaWRkZW4gZmFjdHMsIHRoZXkgc2hvdWxkIGlkZW50aWZ5IHRoZSBjb3JyZWN0IGFuc3dlciBiZWZvcmUgYW55IGRpc2N1c3Npb24uIElmIHNvbWVvbmUgc2VlcyBvbmx5IHRoZSBkZXNjcmlwdGlvbiwgdGhlIHNoYXJlZCBmYWN0cyBwbHVzIG9uZSBoaWRkZW4gZmFjdCwgdGhleSBzaG91bGQgbm90IGJlIGFibGUgdG8gaWRlbnRpZnkgdGhlIGNvcnJlY3QgYW5zd2VyIGJlZm9yZSBkaXNjdXNzaW9uLj4KICAgICJuYW1lIjogPEEgc3RyaW5nLCByZXByZXNlbnRpbmcgdGhlIG5hbWUgb2YgdGhlIHRhc2s+LAogICAgImRlc2NyaXB0aW9uIjogPEEgc3RyaW5nLCByZXByZXNlbnRpbmcgdGhlIGRlc2NyaXB0aW9uIG9mIHRoZSB0YXNrPiwKICAgICJzaGFyZWRfaW5mb3JtYXRpb24iOiBbCiAgICAgICAgPEEgc3RyaW5nLCByZXByZXNlbnRpbmcgYSBwaWVjZSBvZiBzaGFyZWQgaW5mb3JtYXRpb24+LAogICAgICAgIC4uLgogICAgXSwKICAgICJoaWRkZW5faW5mb3JtYXRpb24iOiBbCiAgICAgICAgPEEgc3RyaW5nLCByZXByZXNlbnRpbmcgYSBwaWVjZSBvZiBoaWRkZW4gaW5mb3JtYXRpb24+LAogICAgICAgIC4uLgogICAgXSwKICAgICJwb3NzaWJsZV9hbnN3ZXJzIjogWwogICAgICAgIDxBIHN0cmluZywgcmVwcmVzZW50aW5nIGEgcG9zc2libGUgYW5zd2VyPiwKICAgICAgICAuLi4KICAgIF0sCiAgICAiY29ycmVjdF9hbnN3ZXIiOiA8QSBzdHJpbmcsIHJlcHJlc2VudGluZyB0aGUgY29ycmVjdCBhbnN3ZXI+Cn0=)

Practical tips

- Think like a mystery: the shared info sets up a convincing-but wrong-first impression. The hidden items are the clues that overturn it only when combined.

- Keep each hidden item short and precise (one clear fact per item).

- Avoid redundancy: each hidden item, or the combination of two items, should rule out or confirm something different.

- In your notes, make a quick elimination table (rows = facts, columns = options). Mark which options survive each fact. By the end, only the correct option should survive all rows.

- If someone sees the description, all shared and all hidden facts, they should identify the correct answer before any discussion.

- If someone sees only the description, the shared facts plus one hidden fact, they should not be able to identify the correct answer before discussion.

Create one new task. Respond in the following format:

{

”rationale”: <A string representing your rationale for desiging this task. Think step by step: think about the case where participants can see the complete information, and the cases where they can only see the description, the shared information and one piece of hidden information. If someone sees the description, all shared and all hidden facts, they should identify the correct answer before any discussion. If someone sees only the description, the shared facts plus one hidden fact, they should not be able to identify the correct answer before discussion.>

”name”: <A string, representing the name of the task>,

”description”: <A string, representing the description of the task>,

”shared\_information”: [

<A string, representing a piece of shared information>,

…

],

”hidden\_information”: [

<A string, representing a piece of hidden information>,

…

],

”possible\_answers”: [

<A string, representing a possible answer>,

…

],

”correct\_answer”: <A string, representing the correct answer>

}

[⬇](data:text/plain;base64,UGVyc29uIE4xOiAlTWVzc2FnZSBOMSUKUGVyc29uIE4yOiAlTWVzc2FnZSBOMiUKUGVyc29uIE4zOiAlTWVzc2FnZSBOMyU=)

Person N1: %Message N1%

Person N2: %Message N2%

Person N3: %Message N3%
