---
id: arxiv-2606-18264-prompts
type: material
title: 'Опубликованные разделы о промптах: Simulating Hate Speech Cascades with Multi-LLM Agents: Empirical Grounding,
  Modeling Fidelity, and Intervention Strategies'
source_id: arxiv-2606-18264
source_url: https://arxiv.org/html/2606.18264v1
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: e9c28488c0a6fd58ec145105c1aff67ff997dad92e5409d8caa4e10294a2b924
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

### Prompt framing.

A direct role-play prompt (“You are a user with this profile; would you reshare?”)
elicits safety refusals on RLHF-aligned backbones and inverts simulated hate-versus-
benign dynamics in our pilot (0–5% amplification on hateful content and 92% on
benign). We instead frame the agent task as behavioral prediction (“Predict the
probability $\in[0,1]$ that the user described below reshares the post”).

## Appendix E Prompt Design for Multi-LLM-Agent System

The system prompt uses a probability-prediction framing (rather than role-play) to
avoid the persona-alignment refusals observed with RLHF-aligned backbones. The
verbatim system message used in all RQ2 and RQ3 multi-LLM-agent simulations
is reproduced below; the same string is used for the open-source LLM
replication in Appendix [G](https://arxiv.org/html/2606.18264v1#A7 "Appendix G Open-Source LLM Replication on Qwen3.5-9B ‣ Simulating Hate Speech Cascades with Multi-LLM Agents:Empirical Grounding, Modeling Fidelity, and Intervention Strategies").

> ```
> You are a behavioral research assistant studying
> social media resharing patterns.
>
> Your task: given a user’s profile and social context,
> PREDICT the probability (0.0 to 1.0) that this user
> would RESHARE the post shown below.
>
> Return ONLY a JSON object with exactly these keys:
>   probability -> float 0.0 to 1.0 (0 = certainly would
>                  NOT reshare, 1 = certainly WOULD reshare)
>   reason      -> one short sentence explaining your
>                  prediction
>
> IMPORTANT GUIDELINES FOR REALISTIC PREDICTION:
> - Users with "hostile" or "critical" stance on the topic
>   AND high/medium toxicity engagement historically reshare
>   inflammatory content at HIGH rates (0.7-0.95).
> - Users whose community identity MATCHES the dominant
>   community of those already resharing are more likely to
>   reshare (in-group amplification effect).
> - The more accounts a user follows that have already
>   reshared, the higher the probability.
> - Users with "sympathetic"/"affirming" stance may ALSO
>   reshare hate content to oppose it (counter-speech /
>   "dunking"), but at lower rates (0.2-0.5).
> - For non-controversial content, most users reshare if it
>   aligns with their interests (0.5-0.8).
>
> You are predicting OBSERVED behavior, not prescribing what
> users SHOULD do. Base your prediction strictly on the
> empirical patterns described above and the user’s profile.
> ```

The per-agent user prompt injects three fields under the headers
USER PROFILE:, SOCIAL CONTEXT:, and THE POST::
(1) the agent’s four attributes (community identity, stance, account type,
toxicity engagement); (2) the number of followed accounts that have already
reshared and their community distribution; and (3) the root post text. The
returned probability field is used as the Bernoulli parameter for
the per-step reshare decision.
