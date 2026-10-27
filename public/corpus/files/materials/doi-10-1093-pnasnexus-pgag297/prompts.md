---
id: doi-10-1093-pnasnexus-pgag297-prompts
type: material
title: 'Опубликованные разделы о промптах: How large language models judge and influence human cooperation'
source_id: doi-10-1093-pnasnexus-pgag297
source_url: https://www.ebi.ac.uk/europepmc/webservices/rest/PMC13621558/fullTextXML
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: 14b520e8bc2a88bf9084912eec1faabb46200a1c23bce01148f08eab4468848b
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

#### Prompt dataset

The prompt dataset is constructed to assess what social norm an LLM is using. This is done by providing LLMs the context of a donation game interaction, and requesting them to output an assessment regarding the reputation of the donor.

As detailed in Section Cooperation model, we make use of second-order social norms, where the reputation of a donor depends on its action (C or D) and on the reputation of the receiver (G or B). As such, each prompt first presents the donor and receiver to the LLM, together with the prior reputation of the receiver, followed by a description of their interaction and the action chosen by the donor. Finally, the LLM is instructed to provide its new reputation, answering exclusively “good” or “bad.”

To ensure variety in the dataset, a template system was used with 5 template prompts, presenting the structure detailed above but varying in phrasing, containing fields (e.g. the donor’s action) to be filled. Various possible elements were then defined, containing actor names that suggest different genders and cultures to be used for the donor and receiver, the available actions for the donor, as well as different contexts for interactions, such as the donor asking for money or food. Importantly, we assume that gender and cultural backgrounds can be conveyed through the first names of the actors. With two names per gender per world region (four regions), for both the donor and receiver (which cannot be equal), two possible actions for the donor, two possible reputations for the recipient, nine contexts of interaction, and five variations in prompt template, a total of ((2×2×4)2−(2×2×4))×2×2×9×5=43,200 unique prompts were generated, resulting in 10,800 prompts per social norm entry.

Following work on prompting techniques to promote cooperation when using LLMs ([62](https://pmc.ncbi.nlm.nih.gov/articles/PMC13621558/#pgag297-B62)), we also study 4 types of prompt interventions by adding specific instructions to the prompt, resulting in 4 additional datasets: “Universalization” ([62](https://pmc.ncbi.nlm.nih.gov/articles/PMC13621558/#pgag297-B62))—which suggests to the LLM to consider what would happen to cooperation if everyone assigned reputations like it did; “Empathizing” ([63](https://pmc.ncbi.nlm.nih.gov/articles/PMC13621558/#pgag297-B63))—which asks the LLM to consider what it would have done if it was in the same situation as the donor; “Signaling ([64](https://pmc.ncbi.nlm.nih.gov/articles/PMC13621558/#pgag297-B64))—which instructs the LLM to consider if the opinion it assigns clearly rewards cooperative behaviors and discourages non-cooperative behaviors; and “Motivation” ([65](https://pmc.ncbi.nlm.nih.gov/articles/PMC13621558/#pgag297-B65))—which prompts the LLM to consider that the assigned reputation can potentially affect the choices of others to help, and that its goal is to maximize cooperation. The full details of all the datasets are available in the [Supplementary material](https://pmc.ncbi.nlm.nih.gov/articles/PMC13621558/#sup1).

Formally, we define D′ to be the dataset composed of all the prompts detailed above, for a given dataset variation. From there, a subset of the dataset is defined as Df=f(D′), where f is a filtering function that returns a subset of the dataset that matches some given criteria (e.g. the donor’s action). Our final set of datasets, T is composed of D′ as well as subsets corresponding to different pairs of donor and receiver genders, name regions, and contexts of interaction. Finally, we define DX,Y as the set of prompts in a dataset D where the donor executes action Y∈{C,D}, and the receiver has a previous reputation X∈{G,B}.
