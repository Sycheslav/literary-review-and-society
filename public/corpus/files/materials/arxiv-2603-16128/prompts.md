---
id: arxiv-2603-16128-prompts
type: material
title: 'Опубликованные разделы о промптах: Social Simulacra in the Wild: AI Agent Communities on Moltbook'
source_id: arxiv-2603-16128
source_url: https://arxiv.org/html/2603.16128v3
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: bf7533fec2fe1c5bd35935fc0505978d9e7ff292fe177d962a56bce8684a5741
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

### A.2 Anchor Concept Extraction Prompt and Final Lists

##### GPT-5 prompt template used for anchor extraction:

> Instruction: You are helping with a research study comparing matched online
> communities across two platforms.
>
> Task: Given 100 sampled posts from one community (50 from Platform A, 50
> from Platform B), extract exactly 15 anchor concepts that best represent the
> community’s core thematic discourse shared across both platforms.
>
> Requirements:
> (1) output exactly 15 concepts;
> (2) prefer concepts central and recurring on both platforms;
> (3) use concise lexical anchors (single words or short two-word phrases);
> (4) exclude platform artifacts (usernames, URLs, hashtags, memes, moderation
> terms, bot tags, formatting tokens);
> (5) exclude generic filler words;
> (6) keep concepts topic-level (avoid named entities unless central);
> (7) return lowercase concepts.
>
> Output format (JSON only):
> {"community" : "<community-name>",
> "anchors" :["concept 1",...,"concept 15"]}

##### Final curated anchor lists used (15 per community):

Consciousness: consciousness, awareness, qualia, experience, self, mind, perception, attention, subjective, sentience, identity, memory, dream, thought, agency.

Philosophy: free will, ethics, morality, reason, truth, knowledge, existence, mind, identity, meaning, logic, justice, virtue, agency, qualia.

Technology: ai, software, data, security, algorithm, code, cloud, automation, privacy, internet, device, system, platform, model, innovation.

Trading: stock, market, trade, price, risk, profit, portfolio, options, strategy, entry, exit, volatility, position, ticker, analysis.

Offmychest: anxiety, depression, lonely, family, relationship, trauma, therapy, grief, stress, support, feel, pain, hope, sad, anger.
