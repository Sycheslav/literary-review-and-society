---
id: web-latent-space-adbf83081a-prompts
type: material
title: 'Опубликованные разделы о промптах: Reality: The Final Eval — Lukas Petersson and Axel Backlund of Andon
  Labs — Latent Space'
source_id: web-latent-space-adbf83081a
source_url: https://latent.space/p/andon/
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: 688a6c8db01b5706a7325cef04a34c5b6599222aba1f2a978bc1e8a6c3a244c5
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

## Self-Modifying Harnesses and Model-Specific Prompting

Axel [00:10:27]: Like you give that to the model?

Swyx [00:10:28]: Give that to the model.

Vibhu [00:10:28]: Give that to the model.

Swyx [00:10:29]: Let it, let it read its own transcripts, let it modify its own system prompt based on “Oh, yeah, okay, well, that’s this harness is not what I thought it what I was post trained for, but I can adjust.” Was that reasonable? Is that too much?

Axel [00:10:41]: Like philosophically I like it because it’s basically good evals, they have a high ceiling, but they’re hard, right?, and they have no bias. And like this like when you have a system prompt like the one we have here, which is quite long in like some kind of latent space, representation, this might

Vibhu [00:10:59]: We have a bell that rings every time you say latent space

Axel [00:11:02]: This might be like biased towards one model more than another for some reason that humans don’t, understand, right?

Vibhu [00:11:08]: We see it too, right? Like Cursor says that they have individualized versions of the harnesses for all the models they run, right? There’s better performance you can squeeze if you Tune the harness.

Axel [00:11:17]: Exactly. And we might accidentally have picked one that favors another. Like we don’t know that. The like Axel said, like the reason why we went for a simple one was to try to avoid this. But yeah, if you do it

Vibhu [00:11:29]: Simple has biases

Axel [00:11:30]: But if you do it even less and like have no system prompt and let the model write its own system prompt

Vibhu [00:11:36]: Its own, yeah

Axel [00:11:36]: Maybe that’s even less bias.

Vibhu [00:11:37]: Some of the interesting things there are like the harness also changes with model changes. Like you can see it with the 4.7 release, right? A lot of people are saying 4.7 isn’t as good as 4.6, and then, there’s rumors of, okay, you just need to prompt differently. You need to set up your harness differently. So it’s not even like even if you have tailored your harness towards one model, it probably won’t stay consistent, right? Like the next iteration of that same model family will still change it, so. But, going back to what you said about Vending Bench 3, there is a lot of work being done on people saying you shouldn’t have-- you can have modifying harnesses.

Axel [00:12:12]: I think that’ That is definitely something we are thinking about., not, I don’t know, not to say that we have Vending Bench 3, super imminent to launch, but, yeah, it is for sure something that’s interesting. But in our experience now, models are very bad at understanding what kind of tools they need to succeed at a task just with our testing, but that’s very likely to change.

Lukas [00:12:37]: It seems like they’re very good at writing their assistants, right? They’re, they’re good at writing tools for other people, but not for themselves.

Vibhu [00:12:44]: I think they’re good at changing tools for themselves. So if you give them a baseline set of tools and it sees, okay, I don’t use this one as much, or something here would be useful They would be able to add them. But going from scratch, probably not the best.

Axel [00:12:55]: I think it depends on the, on the domain also., when we have tried this for, a vending bench similar domain, the tools they need to have to, track inventory and things like that are, not super advanced, but still, quite advanced. And, what we see is that they tend to, engineer everything a lot and, build things they don’t really need and not, iterate continuously. Instead they just go like you would prompt Claude to just build an inventory system for me, and then it will go and, do a bunch of complex, schemas and stuff for you, and that’s what the models are doing right now is what we see. But yeah, it would make a lot of sense to try to measure this improvement. How well do they know what they need themselves?

Swyx [00:13:36]: Do we fully discuss Vending Bench One? And we can go into two. I don’t know if there’s any other level takeaways that people have about one.
