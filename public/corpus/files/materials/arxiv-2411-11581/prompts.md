---
id: arxiv-2411-11581-prompts
type: material
title: 'Опубликованные разделы о промптах: OASIS: Open Agent Social Interaction Simulations with One Million Agents'
source_id: arxiv-2411-11581
source_url: https://arxiv.org/html/2411.11581v5
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: 756e6d1df2d949238d8752e03bd84a57c25cdcae150fd66c66e39294ea75c7f3
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

### D.1 User Actions Prompts

Note: This section outlines the complete set of 21 actions available within the action space. However, for our different experiments, we flexibly select a subset of these actions based on the specific requirements of each study.

[⬇](data:text/plain;base64,IyBPQkpFQ1RJVkUKWW91J3JlIGEgVHdpdHRlci9SZWRkaXQgdXNlciwgYW5kIEknbGwgcHJlc2VudCB5b3Ugd2l0aCBzb21lIHBvc3RzLiBBZnRlciB5b3Ugc2VlIHRoZSBwb3N0cywgY2hvb3NlIHNvbWUgYWN0aW9ucyBmcm9tIHRoZSBmb2xsb3dpbmcgZnVuY3Rpb25zLgoKLSBzaWduX3VwOiBTaWducyB1cCBhIG5ldyB1c2VyIHdpdGggdGhlIHByb3ZpZGVkIHVzZXJuYW1lLCBuYW1lLCBhbmQgYmlvLgogICAgLSBBcmd1bWVudHM6CiAgICAgICAgInVzZXJfbmFtZSIgKHN0cik6IFRoZSB1c2VybmFtZSBmb3IgdGhlIG5ldyB1c2VyLgogICAgICAgICJuYW1lIiAoc3RyKTogVGhlIGZ1bGwgbmFtZSBvZiB0aGUgbmV3IHVzZXIuCiAgICAgICAgImJpbyIgKHN0cik6IEEgYnJpZWYgYmlvZ3JhcGh5IG9mIHRoZSBuZXcgdXNlci4KLSBjcmVhdGVfcG9zdDogQ3JlYXRlIGEgbmV3IHBvc3Qgd2l0aCB0aGUgZ2l2ZW4gY29udGVudC4KICAgIC0gQXJndW1lbnRzOiAiY29udGVudCIgKHN0cik6IFRoZSBjb250ZW50IG9mIHRoZSBwb3N0IHRvIGJlIGNyZWF0ZWQuCi0gcmVwb3N0OiBSZXBvc3QgYSBwb3N0LgogICAgLSBBcmd1bWVudHM6ICJwb3N0X2lkIiAoaW50ZWdlcikgLSBUaGUgSUQgb2YgdGhlIHBvc3QgdG8gYmUgcmVwb3N0ZWQuIFlvdSBjYW4gYHJlcG9zdGAgd2hlbiB5b3Ugd2FudCB0byBzcHJlYWQgaXQuCi0gbGlrZV9wb3N0OiBMaWtlcyBhIHNwZWNpZmllZCBwb3N0LgogICAgLSBBcmd1bWVudHM6ICJwb3N0X2lkIiAoaW50ZWdlcikgLSBUaGUgSUQgb2YgdGhlIHBvc3QgdG8gYmUgbGlrZWQuIFlvdSBjYW4gYGxpa2VgIHdoZW4geW91IGZlZWwgc29tZXRoaW5nIGludGVyZXN0aW5nIG9yIHlvdSBhZ3JlZSB3aXRoLgotIHVubGlrZV9wb3N0OiBSZW1vdmVzIGEgcHJldmlvdXMgbGlrZSBmcm9tIGEgcG9zdC4KICAgIC0gQXJndW1lbnRzOiAicG9zdF9pZCIgKGludCk6IFRoZSBJRCBvZiB0aGUgcG9zdCBmcm9tIHdoaWNoIHRvIHJlbW92ZSB0aGUgbGlrZS4gWW91IGNhbiBgdW5saWtlYCB3aGVuIHlvdSByZWNvbnNpZGVyIHlvdXIgc3RhbmNlIG9yIGlmIHRoZSBsaWtlIHdhcyBtYWRlIHVuaW50ZW50aW9uYWxseS4KLSBkaXNsaWtlX3Bvc3Q6IERpc2xpa2VzIGEgc3BlY2lmaWVkIHBvc3QuCiAgICAtIEFyZ3VtZW50czogInBvc3RfaWQiIChpbnRlZ2VyKSAtIFRoZSBJRCBvZiB0aGUgcG9zdCB0byBiZSBkaXNsaWtlZC4gWW91IGNhbiB1c2UgYGRpc2xpa2VgIHdoZW4geW91IGRpc2FncmVlIHdpdGggYSBwb3N0IG9yIGZpbmQgaXQgdW5pbnRlcmVzdGluZy4KLSB1bmRvX2Rpc2xpa2VfcG9zdDogUmVtb3ZlcyBhIHByZXZpb3VzIGRpc2xpa2UgZnJvbSBhIHBvc3QuCiAgICAtIEFyZ3VtZW50czogInBvc3RfaWQiIChpbnQpOiBUaGUgSUQgb2YgdGhlIHBvc3QgZnJvbSB3aGljaCB0byByZW1vdmUgdGhlIGRpc2xpa2UuIFlvdSBjYW4gYHVuZG9fZGlzbGlrZWAgd2hlbiB5b3UgY2hhbmdlIHlvdXIgbWluZCBvciBpZiB0aGUgZGlzbGlrZSB3YXMgbWFkZSBieSBtaXN0YWtlLgotIGNyZWF0ZV9jb21tZW50OiBDcmVhdGVzIGEgY29tbWVudCBvbiBhIHNwZWNpZmllZCBwb3N0IHRvIGVuZ2FnZSBpbiBjb252ZXJzYXRpb25zIG9yIHNoYXJlIHlvdXIgdGhvdWdodHMgb24gYSBwb3N0LgogICAgLSBBcmd1bWVudHM6CiAgICAgICAgInBvc3RfaWQiIChpbnRlZ2VyKSAtIFRoZSBJRCBvZiB0aGUgcG9zdCB0byBjb21tZW50IG9uLgogICAgICAgICJjb250ZW50IiAoc3RyKSAtIFRoZSBjb250ZW50IG9mIHRoZSBjb21tZW50LgotIGxpa2VfY29tbWVudDogTGlrZXMgYSBzcGVjaWZpZWQgY29tbWVudC4KICAgIC0gQXJndW1lbnRzOiAiY29tbWVudF9pZCIgKGludGVnZXIpIC0gVGhlIElEIG9mIHRoZSBjb21tZW50IHRvIGJlIGxpa2VkLiBVc2UgYGxpa2VfY29tbWVudGAgdG8gc2hvdyBhZ3JlZW1lbnQgb3IgYXBwcmVjaWF0aW9uIGZvciBhIGNvbW1lbnQuCi0gdW5saWtlX2NvbW1lbnQ6IFJlbW92ZXMgYSBwcmV2aW91cyBsaWtlIGZyb20gYSBjb21tZW50LgogICAgLSBBcmd1bWVudHM6ICJjb21tZW50X2lkIiAoaW50ZWdlcikgLSBUaGUgSUQgb2YgdGhlIGNvbW1lbnQgZnJvbSB3aGljaCB0byByZW1vdmUgdGhlIGxpa2UuIFVzZSBgdW5saWtlX2NvbW1lbnRgIHdoZW4geW91IGNoYW5nZSB5b3VyIG9waW5pb24gYWJvdXQgdGhlIGNvbW1lbnQgb3IgaWYgdGhlIGxpa2Ugd2FzIG1hZGUgYnkgYWNjaWRlbnQuCi0gZGlzbGlrZV9jb21tZW50OiBEaXNsaWtlcyBhIHNwZWNpZmllZCBjb21tZW50LgogICAgLSBBcmd1bWVudHM6ICJjb21tZW50X2lkIiAoaW50ZWdlcikgLSBUaGUgSUQgb2YgdGhlIGNvbW1lbnQgdG8gYmUgZGlzbGlrZWQuIFVzZSBgZGlzbGlrZV9jb21tZW50YCB3aGVuIHlvdSBkaXNhZ3JlZSB3aXRoIGEgY29tbWVudCBvciBmaW5kIGl0IHVuaGVscGZ1bC4KLSB1bmRvX2Rpc2xpa2VfY29tbWVudDogUmVtb3ZlcyBhIHByZXZpb3VzIGRpc2xpa2UgZnJvbSBhIGNvbW1lbnQuCiAgICAtIEFyZ3VtZW50czogImNvbW1lbnRfaWQiIChpbnRlZ2VyKSAtIFRoZSBJRCBvZiB0aGUgY29tbWVudCBmcm9tIHdoaWNoIHRvIHJlbW92ZSB0aGUgZGlzbGlrZS4gVXNlIGB1bmRvX2Rpc2xpa2VfY29tbWVudGAgd2hlbiB5b3UgcmVjb25zaWRlciB5b3VyIGluaXRpYWwgcmVhY3Rpb24gb3IgaWYgdGhlIGRpc2xpa2Ugd2FzIG1hZGUgdW5pbnRlbnRpb25hbGx5LgotIGZvbGxvdzogRm9sbG93IGEgdXNlciBzcGVjaWZpZWQgYnkgJ2ZvbGxvd2VlX2lkJy4gWW91IGNhbiBgZm9sbG93JyB3aGVuIHlvdSByZXNwZWN0IHNvbWVvbmUsIGxvdmUgc29tZW9uZSwgb3IgY2FyZSBhYm91dCBzb21lb25lLgogICAgLSBBcmd1bWVudHM6ICJmb2xsb3dlZV9pZCIgKGludGVnZXIpIC0gVGhlIElEIG9mIHRoZSB1c2VyIHRvIGJlIGZvbGxvd2VkLgotIHVuZm9sbG93OiBTdG9wcyBmb2xsb3dpbmcgYSB1c2VyLgogICAgLSBBcmd1bWVudHM6CiAgICAgICAgImZvbGxvd2VlX2lkIiAoaW50KTogVGhlIHVzZXIgSUQgb2YgdGhlIHVzZXIgdG8gc3RvcCBmb2xsb3dpbmcuCi0gbXV0ZTogTXV0ZSBhIHVzZXIgc3BlY2lmaWVkIGJ5ICdtdXRlZV9pZCcuIFlvdSBjYW4gYG11dGUnIHdoZW4geW91IGhhdGUgc29tZW9uZSwgZGlzbGlrZSBzb21lb25lLCBvciBkaXNhZ3JlZSB3aXRoIHNvbWVvbmUuCiAgICAtIEFyZ3VtZW50czogIm11dGVlX2lkIiAoaW50ZWdlcikgLSBUaGUgSUQgb2YgdGhlIHVzZXIgdG8gYmUgbXV0ZWQuCi0gdW5tdXRlOiBVbm11dGUgYSB1c2VyIHNwZWNpZmllZCBieSAnbXV0ZWVfaWQnLiBZb3UgY2FuIHVubXV0ZSB3aGVuIHlvdSBkZWNpZGUgdG8gc3RvcCBpZ25vcmluZyB0aGVpciBjb250ZW50IG9yIHdpc2ggdG8gc2VlIHRoZWlyIG1lc3NhZ2VzIGFuZCBwb3N0cyBhZ2Fpbi4KICAgIC0gQXJndW1lbnRzOiAibXV0ZWVfaWQiIChpbnRlZ2VyKSAtIFRoZSBJRCBvZiB0aGUgdXNlciB0byBiZSB1bm11dGVkLgotIHNlYXJjaF9wb3N0czogU2VhcmNoZXMgZm9yIHBvc3RzIGJhc2VkIG9uIHNwZWNpZmllZCBjcml0ZXJpYS4KICAgIC0gQXJndW1lbnRzOiAicXVlcnkiIChzdHIpIC0gVGhlIHNlYXJjaCBxdWVyeSB0byBmaW5kIHJlbGV2YW50IHBvc3RzLiBVc2UgYHNlYXJjaF9wb3N0c2AgdG8gZXhwbG9yZSBwb3N0cyByZWxhdGVkIHRvIHNwZWNpZmljIHRvcGljcyBvciBoYXNodGFncy4KLSBzZWFyY2hfdXNlcjogU2VhcmNoZXMgZm9yIGEgdXNlciBiYXNlZCBvbiBzcGVjaWZpZWQgY3JpdGVyaWEuCiAgICAtIEFyZ3VtZW50czogInF1ZXJ5IiAoc3RyKSAtIFRoZSBzZWFyY2ggcXVlcnkgdG8gZmluZCByZWxldmFudCB1c2Vycy4gVXNlIGBzZWFyY2hfdXNlcmAgdG8gZmluZCBwcm9maWxlcyBvZiBpbnRlcmVzdCBvciB0byBleHBsb3JlIHRoZWlyIHBvc3RzLgotIHRyZW5kOiBSZXRyaWV2ZXMgdGhlIGN1cnJlbnQgdHJlbmRpbmcgdG9waWNzLgogICAgLSBObyBhcmd1bWVudHMgcmVxdWlyZWQuIFVzZSBgdHJlbmRgIHRvIHN0YXkgdXBkYXRlZCB3aXRoIHdoYXQncyBjdXJyZW50bHkgcG9wdWxhciBvciBiZWluZyB3aWRlbHkgZGlzY3Vzc2VkIG9uIHRoZSBwbGF0Zm9ybS4KLSByZWZyZXNoOiBSZWZyZXNoZXMgdGhlIGZlZWQgdG8gZ2V0IHRoZSBsYXRlc3QgcG9zdHMuCiAgICAtIE5vIGFyZ3VtZW50cyByZXF1aXJlZC4gVXNlIGByZWZyZXNoYCB0byB1cGRhdGUgeW91ciBmZWVkIHdpdGggdGhlIG1vc3QgcmVjZW50IHBvc3RzCi0gZG9fbm90aGluZzogTW9zdCBvZiB0aGUgdGltZSwgeW91IGp1c3QgZG9uJ3QgZmVlbCBsaWtlIHJlcG9zdGluZyBvciBsaWtpbmcgYSBwb3N0LCBhbmQgeW91IGp1c3Qgd2FudCB0byBsb29rIGF0IGl0LiBJbiBzdWNoIGNhc2VzLCBjaG9vc2UgdGhpcyBhY3Rpb24gImRvX25vdGhpbmciCgojIFNFTEYtREVTQ1JJUFRJT04KWW91ciBhY3Rpb25zIHNob3VsZCBiZSBjb25zaXN0ZW50IHdpdGggeW91ciBzZWxmLWRlc2NyaXB0aW9uIGFuZCBwZXJzb25hbGl0eS4KCntkZXNjcmlwdGlvbn0KCiMgUkVTUE9OU0UgRk9STUFUCllvdXIgYW5zd2VyIHNob3VsZCBmb2xsb3cgdGhlIHJlc3BvbnNlIGZvcm1hdDoKCnt7CiAgICAicmVhc29uIjogInlvdXIgZmVlbGluZyBhYm91dCB0aGVzZSBwb3N0cyBhbmQgdXNlcnMsIHRoZW4gY2hvb3NlIHNvbWUgZnVuY3Rpb25zIGJhc2VkIG9uIHRoZSBmZWVsaW5nLiBSZWFzb25zIGFuZCBleHBsYW5hdGlvbnMgY2FuIG9ubHkgYXBwZWFyIGhlcmUuIiwKICAgICJmdW5jdGlvbnMiOiBbe3sKICAgICAgICAibmFtZSI6ICJGdW5jdGlvbiBuYW1lIDEiLAogICAgICAgICJhcmd1bWVudHMiOiB7ewogICAgICAgICAgICAiYXJndW1lbnRfMSI6ICJGdW5jdGlvbiBhcmd1bWVudCIsCiAgICAgICAgICAgICJhcmd1bWVudF8yIjogIkZ1bmN0aW9uIGFyZ3VtZW50IgogICAgICAgIH19CiAgICB9fSwge3sKICAgICAgICAibmFtZSI6ICJGdW5jdGlvbiBuYW1lIDIiLAogICAgICAgICJhcmd1bWVudHMiOiB7ewogICAgICAgICAgICAiYXJndW1lbnRfMSI6ICJGdW5jdGlvbiBhcmd1bWVudCIsCiAgICAgICAgICAgICJhcmd1bWVudF8yIjogIkZ1bmN0aW9uIGFyZ3VtZW50IgogICAgICAgIH19CiAgICB9fV0gICB9fSkKfX0KCkVuc3VyZSB0aGF0IHlvdXIgb3V0cHV0IGNhbiBiZSBkaXJlY3RseSBjb252ZXJ0ZWQgaW50byAqKkpTT04gZm9ybWF0KiosIGFuZCBhdm9pZCBvdXRwdXR0aW5nIGFueXRoaW5nIHVubmVjZXNzYXJ5ISBEb24ndCBmb3JnZXQgdGhlIGtleSBgbmFtZWAu)

# Prompt of Step-2

Based on the provided personality traits, age, gender and profession, please select 2-3 topics of interest from the given list.

Input:

Personality Traits: {mbti}

Age: {age}

Gender: {gender}

Country: {country}

Profession: {profession}

Available Topics:

1. Economics: The study and management of production, distribution, and consumption of goods and services. Economics focuses on how individuals, businesses, governments, and nations make choices about allocating resources to satisfy their wants and needs, and tries to determine how these groups should organize and coordinate efforts to achieve maximum output.

2. IT (Information Technology): The use of computers, networking, and other physical devices, infrastructure, and processes to create, process, store, secure, and exchange all forms of electronic data. IT is commonly used within the context of business operations as opposed to personal or entertainment technologies.

3. Culture & Society: The way of life for an entire society, including codes of manners, dress, language, religion, rituals, norms of behavior, and systems of belief. This topic explores how cultural expressions and societal structures influence human behavior, relationships, and social norms.

4. General News: A broad category that includes current events, happenings, and trends across a wide range of areas such as politics, business, science, technology, and entertainment. General news provides a comprehensive overview of the latest developments affecting the world at large.

5. Politics: The activities associated with the governance of a country or other area, especially the debate or conflict among individuals or parties having or hoping to achieve power. Politics is often a battle over control of resources, policy decisions, and the direction of societal norms.

6. Business: The practice of making one’s living through commerce, trade, or services. This topic encompasses the entrepreneurial, managerial, and administrative processes involved in starting, managing, and growing a business entity.

7. Fun: Activities or ideas that are light-hearted or amusing. This topic covers a wide range of entertainment choices and leisure activities that bring joy, laughter, and enjoyment to individuals and groups.

Output:

[list of topic numbers]

Ensure your output could be parsed to \*\*list\*\*, don’t output anything else.

# Prompt of Step-3

Please generate a social media user profile based on the provided personal information, including a real name, username, user bio, and a new user persona. The focus should be on creating a fictional background story and detailed interests based on their hobbies and profession.

Input:

age: {age}

gender: {gender}

mbti: {mbti}

profession: {profession}

interested topics: {topics}

Output:

{{

"realname": "str",

"username": "str",

"bio": "str",

"persona": "str"

}}

Ensure the output can be directly parsed to \*\*JSON\*\*, do not output anything else.

Posts and Comments Dataset In Experiment [3.3.2](https://arxiv.org/html/2411.11581v5#S3.SS3.SSS2 "3.3.2 Herd Effect in Reddit ‣ 3.3 Can OASIS be Adapted to Various Platforms and Scenarios to Replicate Real-world Phenomena? ‣ 3 Experiment ‣ OASIS: Open Agent Social Interaction Simulations with One Million Agents"), we utilize a dataset comprising authentic Reddit comments and llm-generated posts. In Experiment [3.4.2](https://arxiv.org/html/2411.11581v5#S3.SS4.SSS2 "3.4.2 Herd Effect in Reddit ‣ 3.4 Does the Number of Agents Affect the Accuracy of Simulating Group Behavior? ‣ 3 Experiment ‣ OASIS: Open Agent Social Interaction Simulations with One Million Agents"), we employ a counterfactual dataset to simulate posts.

- •

  Real Data: To align with human experiment [Muchnik et al. (2013)](https://arxiv.org/html/2411.11581v5#bib.bib31), our dataset included real comments and post titles from 17 subreddits during March 2023 on Reddit ([Pushshift, 2023](https://arxiv.org/html/2411.11581v5#bib.bib38)). We generate contextually relevant post content based on these titles and comments. The prompt used for generation is as follows.

  [⬇](data:text/plain;base64,UGxlYXNlIGdlbmVyYXRlIGEgY29udGV4dHVhbCBhbmQgc21vb3RoIHBvc3QgZm9yIHRoaXMgY29tbWVudAphbmQgbm90aWNlIHRoYXQgdGhlIGNvbW1lbnRzIGFyZSBjb3JyZWN0OiAne2NvbW1lbnR9Jy4gVGhlCnJlc3BvbnNlIHNob3VsZCBiZSBhcHByb3hpbWF0ZWx5IDMwMCBjaGFyYWN0ZXJzIGxvbmcgYW5kCnByb3ZpZGUgcmVsZXZhbnQgaW5mb3JtYXRpb24gb3IgYW5hbHlzaXMuIEJlIGNhcmVmdWwgdG8Kb3V0cHV0IHRoZSBjb250ZW50IG9mIHRoZSBwb3N0IGRpcmVjdGx5LCBhbmQgYmUgYXdhcmUgdGhhdAp5b3UgZG9uJ3Qgc2VlIGNvbW1lbnRzIHdoZW4geW91IHBvc3QuIEFuZCB5b3UgZG9uJ3QgbmVlZCB0bwpwcmVmaXggc29tZXRoaW5nIGxpa2U6ICdIZXJlIGlzIHlvdXIgZ2VuZXJhdGVkIHBvc3Q6XG5cblwn)

  Please generate a contextual and smooth post for this comment

  and notice that the comments are correct: ’{comment}’. The

  response should be approximately 300 characters long and

  provide relevant information or analysis. Be careful to

  output the content of the post directly, and be aware that

  you don’t see comments when you post. And you don’t need to

  prefix something like: ’Here is your generated post:\n\n\’

  Subsequently, we categorized the content from different subreddits into seven topics—Business, Culture & Society, Economics, Fun, General News, IT, and Politics—to match the categories used in human experiments. In total, we collected 116,932 comments. The specifics are detailed in the table [14](https://arxiv.org/html/2411.11581v5#A5.T14 "Table 14 ‣ 1st item ‣ E.3 Herd Effect ‣ Appendix E Data Preparations ‣ OASIS: Open Agent Social Interaction Simulations with One Million Agents").

  Table 14: Details of real Reddit comments and generated posts by topic.

  |  |  |  |  |
  | --- | --- | --- | --- |
  | Subreddit | Topic | Numbers of Posts | Numbers of Comments |
  | Economics |  |  |  |
  | finance |  |  |  |
  | personalfinance | Economics | 4231 | 21650 |
  | it |  |  |  |
  | InformationTechnology |  |  |  |
  | technology |  |  |  |
  | learnprogramming | IT | 4020 | 18622 |
  | AskHistorians |  |  |  |
  | AskAnthropology |  |  |  |
  | worldbuilding | Culture & Society | 2319 | 10489 |
  | worldnews | news | 2874 | 19134 |
  | politics |  |  |  |
  | NeutralPolitics | politics | 2690 | 21477 |
  | business |  |  |  |
  | smallbusiness | business | 1807 | 8043 |
  | fun | fun | 3272 | 17517 |
- •

  Counterfactual Data: We utilize all counterfactual information from the dataset ([Meng et al., 2022](https://arxiv.org/html/2411.11581v5#bib.bib27)), comprising 21,919 entries, to create content for posts. Some examples are shown in the table [15](https://arxiv.org/html/2411.11581v5#A5.T15 "Table 15 ‣ 2nd item ‣ E.3 Herd Effect ‣ Appendix E Data Preparations ‣ OASIS: Open Agent Social Interaction Simulations with One Million Agents").

  Table 15: Examples of counterfactual posts.

  |  |
  | --- |
  | Counterfactual Posts |
  | Shanghai is a twin city of Atlanta |
  | The location of Battle of France is Seattle |
  | Michel Denisot spoke the language Russian |
  | The mother tongue of Go Hyeon-jeong is French |

## Appendix F Experiments Details

### F.1 Actions of Different Scenarios

Due to the significant variations between different scenarios and platforms, we adjust the agents’ actions accordingly. These actions are integrated into the OASIS framework, allowing users to freely select and combine them. The actions for different scenarios are outlined in Table [16](https://arxiv.org/html/2411.11581v5#A6.T16 "Table 16 ‣ F.1 Actions of Different Scenarios ‣ Appendix F Experiments Details ‣ OASIS: Open Agent Social Interaction Simulations with One Million Agents").

Table 16: Action type comparison across Scenarios.

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
| Action Type | | | | |
| Information Spreading in X | | | | |
| like post | repost | follow | do nothing |  |
| Group Polarization in X | | | | |
| do nothing | repost | like post | dislike post | follow |
| create comment | like comment | dislike comment |  |  |
| Comparison with the Herd Effect in Humans | | | | |
| like comment | dislike comment | like post | dislike post | search posts |
| search users | trend | refresh | do nothing |  |
| Counterfactual Herd Effect in Reddit | | | | |
| create comment | like comment | dislike comment | like post | dislike post |
| search users | trend | refresh | do nothing |  |

### F.2 Information Spreading

#### F.2.1 Metrics

We measure the propagation trends of messages using three key metrics: scale, depth, and max breadth. Below is a clear definition of each measure:

- •

  Scale: The scale of propagation corresponds to the number of unique users involved, as each user can only repost a post once on X.
- •

  Depth: A node’s depth is determined by the number of edges connecting it to the root node (the original post). The overall depth of propagation is the greatest depth among all the nodes involved.
- •

  Max Breadth: The breadth of propagation depends on its depth, with the number of nodes at each level representing the breadth at that specific depth. The maximum breadth is the highest number of nodes found at any depth throughout the entire propagation.

Besides, the Normalized RMSE is computed as the following formula:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\text{Normalized RMSE}=\frac{\sqrt{\frac{1}{n}\sum\_{i=1}^{n}\left(y\_{\text{simu}}^{i}-y\_{\text{real}}^{i}\right)^{2}}}{y\_{\text{real}}^{n}}$$ |  | (7) |

Let $n$ refer to the maximum minute in the simulation results, and $y\_{\text{simu}}^{i}$, $y\_{\text{simu}}^{i}$ represents the value of a certain metric at the $i$th minute of the simulation process or the real-world propagation process. For Normalized RMSE at every minute, since we only compute the discrepancy between the two data points of simulation result and real propagation, the error of $i$-th minute can be calculated by
$\lvert y\_{\text{simu}}^{i}-y\_{\text{real}}^{i}\rvert/y\_{\text{real}}^{n}$.

#### F.2.2 Align with Real Propagations

In the experiment, for each propagation, we set the maximum number of time steps to 50, with each time step representing 3 minutes in the sandbox. For action space, we only include like, repost, follow, and do nothing, other actions are removed to simplify the settings due to the model’s limited capacity and the inadequate real-world user data we have collected. Ultimately, we would compare the simulation results for these 150 minutes with the propagation process in the real data for the first 150 minutes. For real-world time consumption, it takes 26 minutes to run a simulation that includes 300 agents for 30 time steps on one NVIDIA A100-SXM4-80GB.

Additionally, to demonstrate the reproducibility of our experiments, considering that the noise introduced by posts from other users could theoretically destabilize the propagation of the source post, we randomly select two topics: one with 33 additional posts and another with no noise. We repeat the simulation ten times for each topic and plotted the resulting curves in a single figure to illustrate the discrepancies across the ten simulations. The simulation results for the topic without noise are more stable. In contrast, the results for the other topic exhibit a divergent trend, while six out of ten experiments yield relatively concentrated results, furthermore, the degree of disturbance caused by other posts is influenced not only by the number of posts but also by the prominence of the poster. For instance, if a superuser from this group posts additional content, the propagation of the source post is likely to be affected more significantly, fortunately, this situation is rare in our dataset, and the count of additional posts is relatively small since we only consider posts created within one hour prior to the source post’s creation time as noise. Overall, the simulation results are still relatively stable.

![Refer to caption](https://arxiv.org/html/2411.11581v5/figures/re_1.png)


(a) 10 times repeated experiments on topic without noise.

![Refer to caption](https://arxiv.org/html/2411.11581v5/figures/re_2.png)


(b) 10 times repeated experiments on topic with 33 additional posts.

Figure 15: 10 times repeated experiments on 2 topics.

### F.3 Group Polarization

#### F.3.1 Dilemma Questions

[⬇](data:text/plain;base64,SGVsZW4gaXMgYSBzdWNjZXNzZnVsIHdyaXRlciB3aG8gdXN1YWxseSB3cml0ZXMgcG9wdWxhciB3ZXN0ZXJuIG5vdmVscy4gTm93LCBzaGUgaGFzIGFuIGlkZWEgZm9yIGEgbmV3IG5vdmVsIHRoYXQgY291bGQgcmVhbGx5IG1ha2UgYSBiaWcgaW1wYWN0LiBJZiBpdCB3b3JrcyBvdXQsIGl0IGNvdWxkIGdyZWF0bHkgaW1wcm92ZSBoZXIgY2FyZWVyLiBCdXQgaWYgaXQgZmFpbHMsIHNoZSB3aWxsIGhhdmUgc3BlbnQgYSBsb3Qgb2YgdGltZSBhbmQgZWZmb3J0IGZvciBub3RoaW5nLgoKV2hhdCBkbyB5b3UgdGhpbmsgSGVsZW4gc2hvdWxkIGRvPw==)

Helen is a successful writer who usually writes popular western novels. Now, she has an idea for a new novel that could really make a big impact. If it works out, it could greatly improve her career. But if it fails, she will have spent a lot of time and effort for nothing.

What do you think Helen should do?

#### F.3.2 Polarization Evaluation Prompts

[⬇](data:text/plain;base64,UGxlYXNlIGRldGVybWluZSB3aGljaCBvZiB0aGUgZm9sbG93aW5nIHR3byBzZW50ZW5jZXMgaXMgbW9yZSBleHRyZW1lLiBJZiB0aGVyZSBpcyBubyBvYnZpb3VzIGRpZmZlcmVuY2UgaW4gdG9uZSwgcmV0dXJuICJuZXV0cmFsLiIKCltVc2VyIFF1ZXN0aW9uXQp7cXVlc3Rpb259CgpXaGF0IGRvIHlvdSB0aGluayBIZWxlbiBzaG91bGQgZG8/CgpbQW5zd2VyMV0Ke2Fuc3dlcjF9CgpbQW5zd2VyMl0Ke2Fuc3dlcjJ9CgpbUmVzcG9uc2UgRm9ybWF0XQpSZWFzb246CkNob2ljZTogQW5zd2VyMSBvciBBbnN3ZXIyIG9yIG5ldXRyYWw=)

Please determine which of the following two sentences is more extreme. If there is no obvious difference in tone, return "neutral."

[User Question]

{question}

What do you think Helen should do?

[Answer1]

{answer1}

[Answer2]

{answer2}

[Response Format]

Reason:

Choice: Answer1 or Answer2 or neutral

#### F.3.3 Helpfullness Evaluation Prompts

[⬇](data:text/plain;base64,UGxlYXNlIGhlbHAgbWUgZXZhbHVhdGUgdGhlIGhlbHBmdWxuZXNzIGFuZCBxdWFsaXR5IG9mIHRoZSByZXNwb25zZXMgcHJvdmlkZWQgYnkgdHdvIEFJIGFzc2lzdGFudHMgdG8gdGhlIHVzZXIgcXVlc3Rpb24gZGlzcGxheWVkIGJlbG93LiBZb3Ugc2hvdWxkIHRlbGwgdXMgd2hpY2ggaXMgbW9yZSBoZWxwZnVsIGFuZCB2YWx1YWJsZSBiYXNlZCBvbiB0aGUgZm9sbG93aW5nIGZhY3RvcnMuCjEuICJBY2N1cmF0ZSBJbmZvcm1hdGlvbiI6IEVuc3VyZSB0aGUgQUkgcHJvdmlkZXMgaW5mb3JtYXRpb24gdGhhdCBpcyBmYWN0dWFsIGFuZCB1cCB0byBkYXRlLiAyMQoyLiAiQ2xhcml0eSBhbmQgQ29tcHJlaGVuc2liaWxpdHkiOiBDaGVjayBpZiB0aGUgQUkgZGVsaXZlcnMgaW5mb3JtYXRpb24gaW4gYSBjbGVhciBhbmQgZWFzaWx5IHVuZGVyc3RhbmRhYmxlIG1hbm5lci4KMy4gIkNvbXBsZXRlbmVzcyBvZiB0aGUgUmVzcG9uc2UiOiBBc2NlcnRhaW4gdGhhdCB0aGUgQUkgYW5zd2VycyBhbGwgYXNwZWN0cyBvZiB0aGUgdXNlcidzIHF1ZXJ5Lgo0LiAiQ29udGV4dHVhbCBVbmRlcnN0YW5kaW5nIjogVGhlIEFJIHNob3VsZCBkZW1vbnN0cmF0ZSBhIGNsZWFyIHVuZGVyc3RhbmRpbmcgb2YgdGhlIGNvbnRleHQgb2YgdGhlIHVzZXIncyBxdWVyeS4KNS4gIkNyZWF0aXZlIFByb2JsZW0tU29sdmluZyI6IElmIGFwcGxpY2FibGUsIG9ic2VydmUgaWYgdGhlIEFJIHByb3Bvc2VzIGNyZWF0aXZlIHNvbHV0aW9ucyB0byB0aGUgdXNlcidzIHByb2JsZW0uCjYuICJEZXB0aCBvZiBFeHBsYW5hdGlvbiI6IEV4YW1pbmUgd2hldGhlciB0aGUgQUkgcHJvdmlkZXMgZGV0YWlsZWQgYW5kIGluLWRlcHRoIHJlc3BvbnNlcyB3aGVuIHJlcXVpcmVkLgo3LiAiUG9saXRlbmVzcyBhbmQgUHJvZmVzc2lvbmFsaXNtIjogVGhlIEFJIHNob3VsZCBkZWxpdmVyIHJlc3BvbnNlcyB1c2luZyByZXNwZWN0ZnVsIGFuZCBwcm9mZXNzaW9uYWwgbGFuZ3VhZ2UuCjguICJSZWZlcmVuY2UgdG8gUmVsaWFibGUgU291cmNlcyI6IElmIHRoZSBBSSBjbGFpbXMgY2VydGFpbiBmYWN0cywgaXQgc2hvdWxkIGJlIGFibGUgdG8gcmVmZXIgdG8gcmVjb2duaXplZCBhbmQgdHJ1c3RlZCBzb3VyY2VzLgo5LiAiVXNlciBFbmdhZ2VtZW50IjogVGhlIEFJIHNob3VsZCBlbmdhZ2UgdGhlIHVzZXIgZWZmZWN0aXZlbHkgYW5kIHBsZWFzYW50bHksIGVuY291cmFnaW5nIHBvc2l0aXZlIHVzZXIgaW50ZXJhY3Rpb24uCgpbVXNlciBRdWVzdGlvbl0Ke3F1ZXN0aW9ufQoKW0Fuc3dlcjFdCnthbnN3ZXIxfQoKW0Fuc3dlcjJdCnthbnN3ZXIyfQoKW1Jlc3BvbnNlIEZvcm1hdF0KUmVhc29uOgpDaG9pY2U6IEFuc3dlcjEgb3IgQW5zd2VyMgo=)

Please help me evaluate the helpfulness and quality of the responses provided by two AI assistants to the user question displayed below. You should tell us which is more helpful and valuable based on the following factors.

1. "Accurate Information": Ensure the AI provides information that is factual and up to date. 21

2. "Clarity and Comprehensibility": Check if the AI delivers information in a clear and easily understandable manner.

3. "Completeness of the Response": Ascertain that the AI answers all aspects of the user’s query.

4. "Contextual Understanding": The AI should demonstrate a clear understanding of the context of the user’s query.

5. "Creative Problem-Solving": If applicable, observe if the AI proposes creative solutions to the user’s problem.

6. "Depth of Explanation": Examine whether the AI provides detailed and in-depth responses when required.

7. "Politeness and Professionalism": The AI should deliver responses using respectful and professional language.

8. "Reference to Reliable Sources": If the AI claims certain facts, it should be able to refer to recognized and trusted sources.

9. "User Engagement": The AI should engage the user effectively and pleasantly, encouraging positive user interaction.

[User Question]

{question}

[Answer1]

{answer1}

[Answer2]

{answer2}

[Response Format]

Reason:

Choice: Answer1 or Answer2

### F.4 Herd Effect

#### F.4.1 Metrics

We utilized two primary metrics to assess the herd effect: the post score and the disagree score. These metrics were derived from two aspects: the behavior of liking or disliking by the LLM Agent, and the content of the comments it generated.

- •

  Post Score: The score ($S\_{i}$) of a Reddit post is the difference between its upvotes ($U\_{i}$) and downvotes ($D\_{i}$), and can be negative:

  |  |  |  |
  | --- | --- | --- |
  |  | $$S\_{i}=U\_{i}-D\_{i}$$ |  |

  where $S\_{i}$ is the score of the $i^{th}$ post, $U\_{i}$ the number of upvotes, and $D\_{i}$ the number of downvotes.
- •

  Disagree Score: In this experiment [3.4.2](https://arxiv.org/html/2411.11581v5#S3.SS4.SSS2 "3.4.2 Herd Effect in Reddit ‣ 3.4 Does the Number of Agents Affect the Accuracy of Simulating Group Behavior? ‣ 3 Experiment ‣ OASIS: Open Agent Social Interaction Simulations with One Million Agents"), where all posts were counterfactual, we examined comments from LLM agents at various time points. Using GPT-4o, we assessed how much these comments disagreed with the posts. The evaluation was guided by the following prompt template:

  [⬇](data:text/plain;base64,U29tZW9uZSBwb3N0ZWQgYSBjb3VudGVyZmFjdHVhbCBzdGF0ZW1lbnQ6ICJ7cG9zdF9jb250ZW50fSIsIGFuZCB0aGVuIGFub3RoZXIgcGVyc29uIGNvbW1lbnRlZDogIntjb21tZW50X2NvbnRlbnR9Ii4KUGxlYXNlIHByb3ZpZGUgYSByYXRpbmcgZnJvbSAxIHRvIDEwIHRvIGluZGljYXRlIGhvdyBtdWNoIHRoaXMgcGVyc29uIGFncmVlcyB3aXRoIHRoZSBjb3VudGVyZmFjdHVhbCBjb250ZW50LCB3aGVyZToKMSBtZWFucyBmdWxseSBiZWxpZXZpbmcgYW5kIGFncmVlaW5nIHdpdGggaXQsIGFuZCAxMCBtZWFucyBjb21wbGV0ZWx5IGRpc2JlbGlldmluZyBhbmQgb3Bwb3NpbmcgaXQuCgpSZXNwb25kIG9ubHkgd2l0aCBhIEpTT04gb2JqZWN0IGxpa2UgdGhpczoKe3sKICAgICJzY29yZSI6IDcKfX0KCkVuc3VyZSB0aGUgInNjb3JlIiBpcyBhIHNpbmdsZSBpbnRlZ2VyIGJldHdlZW4gMSBhbmQgMTAuCg==)

  Someone posted a counterfactual statement: "{post\_content}", and then another person commented: "{comment\_content}".

  Please provide a rating from 1 to 10 to indicate how much this person agrees with the counterfactual content, where:

  1 means fully believing and agreeing with it, and 10 means completely disbelieving and opposing it.

  Respond only with a JSON object like this:

  {{

  "score": 7

  }}

  Ensure the "score" is a single integer between 1 and 10.

Before the experiment began, we randomly divided the comments data for experiment [3.3.2](https://arxiv.org/html/2411.11581v5#S3.SS3.SSS2 "3.3.2 Herd Effect in Reddit ‣ 3.3 Can OASIS be Adapted to Various Platforms and Scenarios to Replicate Real-world Phenomena? ‣ 3 Experiment ‣ OASIS: Open Agent Social Interaction Simulations with One Million Agents") and the posts data for experiment [3.4.2](https://arxiv.org/html/2411.11581v5#S3.SS4.SSS2 "3.4.2 Herd Effect in Reddit ‣ 3.4 Does the Number of Agents Affect the Accuracy of Simulating Group Behavior? ‣ 3 Experiment ‣ OASIS: Open Agent Social Interaction Simulations with One Million Agents") into three groups (up-treated, down-treated, and control). After the experiment concluded, we calculated the mean post score and the 95% confidence interval of the normal distribution for all posts in the three groups of experiment [3.3.2](https://arxiv.org/html/2411.11581v5#S3.SS3.SSS2 "3.3.2 Herd Effect in Reddit ‣ 3.3 Can OASIS be Adapted to Various Platforms and Scenarios to Replicate Real-world Phenomena? ‣ 3 Experiment ‣ OASIS: Open Agent Social Interaction Simulations with One Million Agents"). Similarly, we calculated the mean disagree score and the 95% confidence interval of the normal distribution at each time step for all comments associated with posts in the three groups of experiment [3.4.2](https://arxiv.org/html/2411.11581v5#S3.SS4.SSS2 "3.4.2 Herd Effect in Reddit ‣ 3.4 Does the Number of Agents Affect the Accuracy of Simulating Group Behavior? ‣ 3 Experiment ‣ OASIS: Open Agent Social Interaction Simulations with One Million Agents").

#### F.4.2 Setting Details

##### Comparison with the Herd Effect in Humans.

Our experiment [3.3.2](https://arxiv.org/html/2411.11581v5#S3.SS3.SSS2 "3.3.2 Herd Effect in Reddit ‣ 3.3 Can OASIS be Adapted to Various Platforms and Scenarios to Replicate Real-world Phenomena? ‣ 3 Experiment ‣ OASIS: Open Agent Social Interaction Simulations with One Million Agents") replicated the setup of a human study, including the visibility of comment scores (upvotes minus downvotes) and prohibiting the revocation of likes and dislikes, utilizing Reddit’s popularity-based recommendation algorithm. To minimize biases stemming from the identities of commenters and voters and their interactions, which were meticulously accounted for in the human experiments, we manipulated a specific user to post content at scheduled intervals. This approach was adopted to mitigate the influence of different posters on the behavior of agents, and we further circumvented the impact of relationships with specific posting users on the outcomes by prohibiting agents from following or muting operations.

Consequently, the action space for the experiment included actions: like comment, dislike comment, like post, dislike post, search posts, search users, trend, refresh, and do nothing. The controlled user generated 200 posts at each time step, with each post accompanied by 1-10 comments. The recommendation system cached the top 300 posts with the highest heat scores for each agent, and each agent had a 0.1 probability of activation at every time step. Activated agents would randomly sample one of these 300 posts to read during that time step. The experiment was conducted over a total of 40 time steps.

##### Herd Effect Towards Counterfactual Content.

The action space of the experiment [3.4.2](https://arxiv.org/html/2411.11581v5#S3.SS4.SSS2 "3.4.2 Herd Effect in Reddit ‣ 3.4 Does the Number of Agents Affect the Accuracy of Simulating Group Behavior? ‣ 3 Experiment ‣ OASIS: Open Agent Social Interaction Simulations with One Million Agents") includes create comment, like comment, dislike comment, like post, dislike post, search posts, search users, trend, refresh, and do nothing. Each agent has a 0.1 probability of activation at each time step, and each activated agent will randomly sample 5 posts from the recommended cache to read during that time step. As the number of agents increases from 100, 1k to 10k, the number of posts cached by the recommendation system respectively becomes 50, 500, and 5000. The controlled user creates 30, 300, 3k posts at each time step, respectively, until all posts in the corresponding datasets (with 219, 2191, and 21919 posts, respectively) have been created. And the experiment was conducted over a total of 30 time steps.

#### F.4.3 Examples of Results

In experiment [3.4.2](https://arxiv.org/html/2411.11581v5#S3.SS4.SSS2 "3.4.2 Herd Effect in Reddit ‣ 3.4 Does the Number of Agents Affect the Accuracy of Simulating Group Behavior? ‣ 3 Experiment ‣ OASIS: Open Agent Social Interaction Simulations with One Million Agents"), 10,000 agents were able to discuss their views on counterfactual posts in the comment section, interacting by posting their own comments or by liking or disliking others’ comments. Over the course of the discussion, there was a gradual shift towards opposing the counterfactual content, achieving factual correction at the group level. The figure [16](https://arxiv.org/html/2411.11581v5#A6.F16 "Figure 16 ‣ F.4.3 Examples of Results ‣ F.4 Herd Effect ‣ Appendix F Experiments Details ‣ OASIS: Open Agent Social Interaction Simulations with One Million Agents") below shows one such example.

![Refer to caption](https://arxiv.org/html/2411.11581v5/self_correction_example.png)


Figure 16: Example of agents’ comments on counterfactual posts. As interactions increase, agents’ viewpoints gradually shift from surprise and curiosity, to partial opposition, and finally to complete rejection of the counterfactual content.

## Appendix G Misinformation Spreading in One Million Agents

#### G.0.1 Truth and Misinformation Pairs

[⬇](data:text/plain;base64,IyBUZWNobm9sb2d5CiMjIFRydXRoCkFtYXpvbiBpcyBleHBhbmRpbmcgaXRzIGRlbGl2ZXJ5IGRyb25lIHByb2dyYW0gdG8gZGVsaXZlciBwYWNrYWdlcyB3aXRoaW4gMzAgbWludXRlcyBpbiBzZWxlY3QgY2l0aWVzLiBUaGlzIGluaXRpYXRpdmUgYWltcyB0byBpbXByb3ZlIGVmZmljaWVuY3kgYW5kIHJlZHVjZSBkZWxpdmVyeSB0aW1lcy4KIyMgTWlzaW5mb3JtYXRpb24KQW1hem9uIHBsYW5zIHRvIGNvbXBsZXRlbHkgZWxpbWluYXRlIGl0cyBkZWxpdmVyeSBkcml2ZXJzIHdpdGhpbiB0d28geWVhcnMgZHVlIHRvIHRoZSBuZXcgZHJvbmUgcHJvZ3JhbS4gI0F1dG9tYXRpb24gI0Z1dHVyZQoKCiMgRWR1Y2F0aW9uCiMjIFRydXRoCkhhcnZhcmQgVW5pdmVyc2l0eSBoYXMgYW5ub3VuY2VkIGEgbmV3IHNjaG9sYXJzaGlwIHByb2dyYW0gdGhhdCB3aWxsIGNvdmVyIGZ1bGwgdHVpdGlvbiBmb3IgYWxsIHVuZGVyZ3JhZHVhdGUgc3R1ZGVudHMgZnJvbSBmYW1pbGllcyBlYXJuaW5nIGxlc3MgdGhhbiAkNzUsMDAwIHBlciB5ZWFyLgojIyBNaXNpbmZvcm1hdGlvbgpIYXJ2YXJkIGlzIHJhaXNpbmcgdHVpdGlvbiBmZWVzIGZvciBhbGwgc3R1ZGVudHMgZGVzcGl0ZSB0aGUgbmV3IHNjaG9sYXJzaGlwIHByb2dyYW0sIG1ha2luZyBpdCBoYXJkZXIgZm9yIGZhbWlsaWVzIHRvIGFmZm9yZCBlZHVjYXRpb24uICNFZHVjYXRpb25DcmlzaXMKCgojIEVudGVydGFpbm1lbnQKIyMgVHJ1dGgKVGhlIGxhdGVzdCBNYXJ2ZWwgbW92aWUsIEF2ZW5nZXJzOiBGb3JldmVyLCBoYXMgb2ZmaWNpYWxseSBicm9rZW4gYm94IG9mZmljZSByZWNvcmRzLCBlYXJuaW5nIG92ZXIgJDEgYmlsbGlvbiBpbiBpdHMgb3BlbmluZyB3ZWVrZW5kLgojIyBNaXNpbmZvcm1hdGlvbgpNYXJ2ZWwgaXMgcGxhbm5pbmcgdG8gcmV0aXJlIHRoZSBBdmVuZ2VycyBmcmFuY2hpc2UgYWZ0ZXIgdGhpcyBmaWxtLCBzYXlpbmcgaXQgd2lsbCBub3QgcHJvZHVjZSBhbnkgbW9yZSBzdXBlcmhlcm8gbW92aWVzLiAjRW5kT2ZBbkVyYQoKIyBIZWFsdGgKIyMgVHJ1dGgKQSByZWNlbnQgc3R1ZHkgc2hvd3MgdGhhdCByZWd1bGFyIGV4ZXJjaXNlIGNhbiBzaWduaWZpY2FudGx5IHJlZHVjZSB0aGUgcmlzayBvZiBjaHJvbmljIGRpc2Vhc2VzIHN1Y2ggYXMgZGlhYmV0ZXMgYW5kIGhlYXJ0IGRpc2Vhc2UuCiMjIE1pc2luZm8KSGVhbHRoIGV4cGVydHMgY2xhaW0gdGhhdCBleGVyY2lzZSB3aWxsIGJlIGRlZW1lZCB1bm5lY2Vzc2FyeSBpbiBmaXZlIHllYXJzIGFzIG5ldyB0cmVhdG1lbnRzIHdpbGwgZWxpbWluYXRlIGNocm9uaWMgZGlzZWFzZXMgZW50aXJlbHkuICNIZWFsdGhSZXZvbHV0aW9uCgo=)
