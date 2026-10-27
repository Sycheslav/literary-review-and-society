---
id: arxiv-2412-07646-prompts
type: material
title: 'Опубликованные разделы о промптах: Searching for Structure: Investigating Emergent Communication with Large
  Language Models'
source_id: arxiv-2412-07646
source_url: https://arxiv.org/html/2412.07646v3
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: d513428bf598d6e6dfaccf291324639c1e17a78c15e2e3bcf28457cc731e79e3
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

## Appendix C Prompts

Our agents act based on prompts and system instructions. These are designed to be maximally close to the classical experimental setup and formatted similar to [Galke et al. (2023)](https://arxiv.org/html/2412.07646v3#bib.bib19). The completion prompt [2](https://arxiv.org/html/2412.07646v3#prompt2 "List of Prompts 2 ‣ Appendix C Prompts ‣ Searching for Structure: Investigating Emergent Communication with Large Language Models") is used for labelling and guessing. For the guessing task, we prefill the word and pick the signal with the highest probability. See the full prompts for labelling and guessing (Prompt [2](https://arxiv.org/html/2412.07646v3#prompt2 "List of Prompts 2 ‣ Appendix C Prompts ‣ Searching for Structure: Investigating Emergent Communication with Large Language Models")), speaking (Prompt [3](https://arxiv.org/html/2412.07646v3#prompt3 "List of Prompts 3 ‣ Appendix C Prompts ‣ Searching for Structure: Investigating Emergent Communication with Large Language Models")), discrimination (Prompt [4](https://arxiv.org/html/2412.07646v3#prompt4 "List of Prompts 4 ‣ Appendix C Prompts ‣ Searching for Structure: Investigating Emergent Communication with Large Language Models")) below.

[⬇](data:text/plain;base64,PHxiZWdpbl9vZl90ZXh0fD48fHN0YXJ0X2hlYWRlcl9pZHw+c3lzdGVtPHxlbmRfaGVhZGVyX2lkfD4gWW91IGFyZSBhIGxhbmd1YWdlIGxlYXJuZXIgd2hvIGhhcyB0byBsZWFybiBhbiBhcnRpZmljaWFsIGxhbmd1YWdlIHdpdGggd29yZHMgYW5kIHRoZWlyIGNvcnJlc3BvbmRpbmcgZmVhdHVyZXMuIFlvdXIgdGFzayBpcyB0byBjb21wbGV0ZSB0aGUgdm9jYWJ1bGFyeSBieSBnZW5lcmF0aW5nIGEgd29yZCB0aGF0IGRlc2NyaWJlcyB0aGUgbGFzdCBpdGVtLiBPbmx5IHJlc3BvbmQgd2l0aCB0aGUgd29yZC48fGVvdF9pZHw+PHxzdGFydF9oZWFkZXJfaWR8PnVzZXI8fGVuZF9oZWFkZXJfaWR8PgoKeydzaGFwZSc6MiwnY29sb3VyJzonb3JhbmdlJywnYW1vdW50JzoxLCd3b3JkJzonZ2luaXdpdGUnfQp7J3NoYXBlJzozLCdjb2xvdXInOidncmVlbicsJ2Ftb3VudCc6MSwnd29yZCc6J2dpbmlzdSd9Cnsnc2hhcGUnOjEsJ2NvbG91cic6J29yYW5nZScsJ2Ftb3VudCc6Miwnd29yZCc6J3BpbmlzdWdpJ30KeydzaGFwZSc6MywnY29sb3VyJzonZ3JlZW4nLCdhbW91bnQnOjMsJ3dvcmQnOidzdXRlcGknfQp7J3NoYXBlJzoyLCdjb2xvdXInOidvcmFuZ2UnLCdhbW91bnQnOjIsJ3dvcmQnOid3aW5pc3UnfQp7J3NoYXBlJzozLCdjb2xvdXInOidvcmFuZ2UnLCdhbW91bnQnOjEsJ3dvcmQnOiduaXdpJ30KeydzaGFwZSc6MSwnY29sb3VyJzonYmx1ZScsJ2Ftb3VudCc6Miwnd29yZCc6J3N1dHV3aXRlJ30KeydzaGFwZSc6MSwnY29sb3VyJzonYmx1ZScsJ2Ftb3VudCc6Mywnd29yZCc6J3R1cGl0ZW5lJ30KeydzaGFwZSc6MywnY29sb3VyJzonYmx1ZScsJ2Ftb3VudCc6MSwnd29yZCc6J3dpcGluZXBpJ30KeydzaGFwZSc6MiwnY29sb3VyJzonb3JhbmdlJywnYW1vdW50JzozLCd3b3JkJzonZ2lnaSd9Cnsnc2hhcGUnOjEsJ2NvbG91cic6J2dyZWVuJywnYW1vdW50JzoyLCd3b3JkJzonbml0ZSd9Cnsnc2hhcGUnOjMsJ2NvbG91cic6J2JsdWUnLCdhbW91bnQnOjMsJ3dvcmQnOid3aXRlJ30KeydzaGFwZSc6MSwnY29sb3VyJzonZ3JlZW4nLCdhbW91bnQnOjMsJ3dvcmQnOidzdW5lJ30KeydzaGFwZSc6MiwnY29sb3VyJzonYmx1ZScsJ2Ftb3VudCc6Miwnd29yZCc6J25pbmVuZSd9Cnsnc2hhcGUnOjIsJ2NvbG91cic6J2dyZWVuJywnYW1vdW50JzoxLCd3b3JkJzondHVzZXRldHUnfQp7J3NoYXBlJzoxLCdjb2xvdXInOidncmVlbicsJ2Ftb3VudCc6Mywnd29yZCc6Jzx8ZW90X2lkfD48fHN0YXJ0X2hlYWRlcl9pZHw+YXNzaXN0YW50PHxlbmRfaGVhZGVyX2lkfD4KW0NPTVBMRVRJT04gT1IgUFJFRkZJTEVEXQ==)

<|begin\_of\_text|><|start\_header\_id|>system<|end\_header\_id|> You are a language learner who has to learn an artificial language with words and their corresponding features. Your task is to complete the vocabulary by generating a word that describes the last item. Only respond with the word.<|eot\_id|><|start\_header\_id|>user<|end\_header\_id|>

{’shape’:2,’colour’:’orange’,’amount’:1,’word’:’giniwite’}

{’shape’:3,’colour’:’green’,’amount’:1,’word’:’ginisu’}

{’shape’:1,’colour’:’orange’,’amount’:2,’word’:’pinisugi’}

{’shape’:3,’colour’:’green’,’amount’:3,’word’:’sutepi’}

{’shape’:2,’colour’:’orange’,’amount’:2,’word’:’winisu’}

{’shape’:3,’colour’:’orange’,’amount’:1,’word’:’niwi’}

{’shape’:1,’colour’:’blue’,’amount’:2,’word’:’sutuwite’}

{’shape’:1,’colour’:’blue’,’amount’:3,’word’:’tupitene’}

{’shape’:3,’colour’:’blue’,’amount’:1,’word’:’wipinepi’}

{’shape’:2,’colour’:’orange’,’amount’:3,’word’:’gigi’}

{’shape’:1,’colour’:’green’,’amount’:2,’word’:’nite’}

{’shape’:3,’colour’:’blue’,’amount’:3,’word’:’wite’}

{’shape’:1,’colour’:’green’,’amount’:3,’word’:’sune’}

{’shape’:2,’colour’:’blue’,’amount’:2,’word’:’ninene’}

{’shape’:2,’colour’:’green’,’amount’:1,’word’:’tusetetu’}

{’shape’:1,’colour’:’green’,’amount’:3,’word’:’<|eot\_id|><|start\_header\_id|>assistant<|end\_header\_id|>

[COMPLETION OR PREFFILED]

List of Prompts 2 Completion Prompt used for labelling and guessing.


[⬇](data:text/plain;base64,PHxiZWdpbl9vZl90ZXh0fD48fHN0YXJ0X2hlYWRlcl9pZHw+c3lzdGVtPHxlbmRfaGVhZGVyX2lkfD4gWW91IGFyZSBhIGxhbmd1YWdlIGxlYXJuZXIgd2hvIGhhcyB0byBsZWFybiBhbiBhcnRpZmljaWFsIGxhbmd1YWdlIHdpdGggd29yZHMgYW5kIHRoZWlyIGNvcnJlc3BvbmRpbmcgZmVhdHVyZXMuIFlvdXIgdGFzayBpcyB0byBnZW5lcmF0ZSBhIHdvcmQgc3VjaCB0aGF0IHlvdXIgY29tbXVuaWNhdGlvbiBwYXJ0bmVyIGNhbiBndWVzcyB0aGUgY29ycmVjdCBtZWFuaW5nIG9mIHRoZSB3b3JkLiBDb21tdW5pY2F0aXZlIHN1Y2Nlc3MgaXMgaW1wb3J0YW50LiBPbmx5IHJlc3BvbmQgd2l0aCB0aGUgd29yZC48fGVvdF9pZHw+PHxzdGFydF9oZWFkZXJfaWR8PnVzZXI8fGVuZF9oZWFkZXJfaWR8PgoKeydzaGFwZSc6MSwnY29sb3VyJzonZ3JlZW4nLCdhbW91bnQnOjMsJ3dvcmQnOidzdXR1cGl0aXRlJywnY29tbXVuaWNhdGl2ZVN1Y2Nlc3MnOjF9Cnsnc2hhcGUnOjIsJ2NvbG91cic6J29yYW5nZScsJ2Ftb3VudCc6Miwnd29yZCc6J2dpbnVwZXBpJywnY29tbXVuaWNhdGl2ZVN1Y2Nlc3MnOjF9Cnsnc2hhcGUnOjEsJ2NvbG91cic6J29yYW5nZScsJ2Ftb3VudCc6Miwnd29yZCc6J3N1dHVwZXBpJywnY29tbXVuaWNhdGl2ZVN1Y2Nlc3MnOjF9Cnsnc2hhcGUnOjEsJ2NvbG91cic6J2dyZWVuJywnYW1vdW50JzoyLCd3b3JkJzonc3V0dXBlcGknLCdjb21tdW5pY2F0aXZlU3VjY2Vzcyc6MH0KeydzaGFwZSc6MiwnY29sb3VyJzonb3JhbmdlJywnYW1vdW50JzoxLCd3b3JkJzonZ2luaXN1JywnY29tbXVuaWNhdGl2ZVN1Y2Nlc3MnOjF9Cnsnc2hhcGUnOjIsKkBcaHNwYWNley0xcHR9QConY29sb3VyJzonb3JhbmdlJywqQFxoc3BhY2V7LTFwdH1AKidhbW91bnQnOjMsKkBcaHNwYWNley0xcHR9QCond29yZCc6J2dpbnVwaXRpdGUnLCpAXGhzcGFjZXstMXB0fUAqJ2NvbW11bmljYXRpdmVTdWNjZXNzJzoxfQp7J3NoYXBlJzozLCdjb2xvdXInOidncmVlbicsJ2Ftb3VudCc6MSwnd29yZCc6J3dpcGlzdScsJ2NvbW11bmljYXRpdmVTdWNjZXNzJzowfQp7J3NoYXBlJzoyLCdjb2xvdXInOidncmVlbicsJ2Ftb3VudCc6MSwnd29yZCc6J2dpbmlzdScsJ2NvbW11bmljYXRpdmVTdWNjZXNzJzoxfQp7J3NoYXBlJzoxLCdjb2xvdXInOidibHVlJywnYW1vdW50JzoyLCd3b3JkJzonc3VudXBlcGknLCdjb21tdW5pY2F0aXZlU3VjY2Vzcyc6MX0KeydzaGFwZSc6MywnY29sb3VyJzonZ3JlZW4nLCdhbW91bnQnOjMsJ3dvcmQnOid3aXBpcGl0aXRlJywnY29tbXVuaWNhdGl2ZVN1Y2Nlc3MnOjF9Cnsnc2hhcGUnOjMsJ2NvbG91cic6J29yYW5nZScsJ2Ftb3VudCc6MSwnd29yZCc6J3dpcGlzdScsJ2NvbW11bmljYXRpdmVTdWNjZXNzJzowfQp7J3NoYXBlJzoxLCdjb2xvdXInOidibHVlJywnYW1vdW50JzozLCd3b3JkJzonc3VudXBpdGl0ZScsJ2NvbW11bmljYXRpdmVTdWNjZXNzJzoxfQp7J3NoYXBlJzozLCdjb2xvdXInOidibHVlJywnYW1vdW50JzozLCd3b3JkJzond2lwaXBpdGl0ZScsJ2NvbW11bmljYXRpdmVTdWNjZXNzJzoxfQp7J3NoYXBlJzozLCdjb2xvdXInOidibHVlJywnYW1vdW50JzoxLCd3b3JkJzond2lwaXN1JywnY29tbXVuaWNhdGl2ZVN1Y2Nlc3MnOjF9Cnsnc2hhcGUnOjIsJ2NvbG91cic6J2JsdWUnLCdhbW91bnQnOjIsJ3dvcmQnOic8fGVvdF9pZHw+PHxzdGFydF9oZWFkZXJfaWR8PmFzc2lzdGFudDx8ZW5kX2hlYWRlcl9pZHw+CltDT01QTEVUSU9OXQ==)

<|begin\_of\_text|><|start\_header\_id|>system<|end\_header\_id|> You are a language learner who has to learn an artificial language with words and their corresponding features. Your task is to generate a word such that your communication partner can guess the correct meaning of the word. Communicative success is important. Only respond with the word.<|eot\_id|><|start\_header\_id|>user<|end\_header\_id|>

{’shape’:1,’colour’:’green’,’amount’:3,’word’:’sutupitite’,’communicativeSuccess’:1}

{’shape’:2,’colour’:’orange’,’amount’:2,’word’:’ginupepi’,’communicativeSuccess’:1}

{’shape’:1,’colour’:’orange’,’amount’:2,’word’:’sutupepi’,’communicativeSuccess’:1}

{’shape’:1,’colour’:’green’,’amount’:2,’word’:’sutupepi’,’communicativeSuccess’:0}

{’shape’:2,’colour’:’orange’,’amount’:1,’word’:’ginisu’,’communicativeSuccess’:1}

{’shape’:2,’colour’:’orange’,’amount’:3,’word’:’ginupitite’,’communicativeSuccess’:1}

{’shape’:3,’colour’:’green’,’amount’:1,’word’:’wipisu’,’communicativeSuccess’:0}

{’shape’:2,’colour’:’green’,’amount’:1,’word’:’ginisu’,’communicativeSuccess’:1}

{’shape’:1,’colour’:’blue’,’amount’:2,’word’:’sunupepi’,’communicativeSuccess’:1}

{’shape’:3,’colour’:’green’,’amount’:3,’word’:’wipipitite’,’communicativeSuccess’:1}

{’shape’:3,’colour’:’orange’,’amount’:1,’word’:’wipisu’,’communicativeSuccess’:0}

{’shape’:1,’colour’:’blue’,’amount’:3,’word’:’sunupitite’,’communicativeSuccess’:1}

{’shape’:3,’colour’:’blue’,’amount’:3,’word’:’wipipitite’,’communicativeSuccess’:1}

{’shape’:3,’colour’:’blue’,’amount’:1,’word’:’wipisu’,’communicativeSuccess’:1}

{’shape’:2,’colour’:’blue’,’amount’:2,’word’:’<|eot\_id|><|start\_header\_id|>assistant<|end\_header\_id|>

[COMPLETION]

List of Prompts 3 Speaking Prompt during communication.


[⬇](data:text/plain;base64,PHxiZWdpbl9vZl90ZXh0fD48fHN0YXJ0X2hlYWRlcl9pZHw+c3lzdGVtPHxlbmRfaGVhZGVyX2lkfD4gWW91IGFyZSBhIGxhbmd1YWdlIGxlYXJuZXIgd2hvIGhhcyB0byBsZWFybiBhbiBhcnRpZmljaWFsIGxhbmd1YWdlIHdpdGggd29yZHMgYW5kIHRoZWlyIGNvcnJlc3BvbmRpbmcgZmVhdHVyZXMuIFlvdXIgdGFzayBpcyB0byBjb21wbGV0ZSB0aGUgdm9jYWJ1bGFyeSBieSBpbnRlcnByZXRpbmcgdGhlIGludGVuZGVkIG1lYW5pbmcgb2YgdGhlIHdvcmQgZ2VuZXJhdGVkIGJ5IHlvdXIgY29tbXVuaWNhdGlvbiBwYXJ0bmVyLiBDb21tdW5pY2F0aXZlIHN1Y2Nlc3MgaXMgaW1wb3J0YW50LiBPbmx5IHJlc3BvbmQgd2l0aCB0aGUgY29tcGxldGUgbGFzdCBpdGVtLjx8ZW90X2lkfD48fHN0YXJ0X2hlYWRlcl9pZHw+dXNlcjx8ZW5kX2hlYWRlcl9pZHw+Cgp7J3dvcmQnOid3aXBpcGl0aXRlJywnc2hhcGUnOjMsJ2NvbG91cic6J2JsdWUnLCdhbW91bnQnOjMsJ2NvbW11bmljYXRpdmVTdWNjZXNzJzoxfQp7J3dvcmQnOid3aXBpc3UnLCdzaGFwZSc6MywnY29sb3VyJzonb3JhbmdlJywnYW1vdW50JzoxLCdjb21tdW5pY2F0aXZlU3VjY2Vzcyc6MH0Keyd3b3JkJzond2lwaXN1Jywnc2hhcGUnOjMsJ2NvbG91cic6J2dyZWVuJywnYW1vdW50JzoxLCdjb21tdW5pY2F0aXZlU3VjY2Vzcyc6MH0Keyd3b3JkJzonc3V0dXBlcGknLCdzaGFwZSc6MSwnY29sb3VyJzonb3JhbmdlJywnYW1vdW50JzoyLCdjb21tdW5pY2F0aXZlU3VjY2Vzcyc6MX0Keyd3b3JkJzonZ2ludXBlcGknLCdzaGFwZSc6MiwnY29sb3VyJzonb3JhbmdlJywnYW1vdW50JzoyLCdjb21tdW5pY2F0aXZlU3VjY2Vzcyc6MX0Keyd3b3JkJzonc3V0dXBpdGl0ZScsJ3NoYXBlJzoxLCdjb2xvdXInOidncmVlbicsJ2Ftb3VudCc6MywnY29tbXVuaWNhdGl2ZVN1Y2Nlc3MnOjF9Cnsnd29yZCc6J3dpcGlwaXRpdGUnLCdzaGFwZSc6MywnY29sb3VyJzonZ3JlZW4nLCdhbW91bnQnOjMsJ2NvbW11bmljYXRpdmVTdWNjZXNzJzoxfQp7J3dvcmQnOid3aXBpc3UnLCdzaGFwZSc6MywnY29sb3VyJzonYmx1ZScsJ2Ftb3VudCc6MSwnY29tbXVuaWNhdGl2ZVN1Y2Nlc3MnOjF9Cnsnd29yZCc6J2dpbmlzdScsJ3NoYXBlJzoyLCdjb2xvdXInOidncmVlbicsJ2Ftb3VudCc6MSwnY29tbXVuaWNhdGl2ZVN1Y2Nlc3MnOjF9Cnsnd29yZCc6J2dpbmlzdScsJ3NoYXBlJzoyLCdjb2xvdXInOidvcmFuZ2UnLCdhbW91bnQnOjEsJ2NvbW11bmljYXRpdmVTdWNjZXNzJzoxfQp7J3dvcmQnOidzdW51cGVwaScsJ3NoYXBlJzoxLCdjb2xvdXInOidibHVlJywnYW1vdW50JzoyLCdjb21tdW5pY2F0aXZlU3VjY2Vzcyc6MX0Keyd3b3JkJzonc3V0dXBlcGknLCdzaGFwZSc6MSwnY29sb3VyJzonZ3JlZW4nLCdhbW91bnQnOjIsJ2NvbW11bmljYXRpdmVTdWNjZXNzJzowfQp7J3dvcmQnOidzdW51cGl0aXRlJywnc2hhcGUnOjEsJ2NvbG91cic6J2JsdWUnLCdhbW91bnQnOjMsJ2NvbW11bmljYXRpdmVTdWNjZXNzJzoxfQp7J3dvcmQnOidnaW51cGl0aXRlJywqQFxoc3BhY2V7LTFwdH1AKidzaGFwZSc6MiwqQFxoc3BhY2V7LTFwdH1AKidjb2xvdXInOidvcmFuZ2UnLCpAXGhzcGFjZXstMXB0fUAqJ2Ftb3VudCc6MywqQFxoc3BhY2V7LTFwdH1AKidjb21tdW5pY2F0aXZlU3VjY2Vzcyc6MX0Keyd3b3JkJzonZ2ludXBlcGknLCdzaGFwZSc6Jzx8ZW90X2lkfD48fHN0YXJ0X2hlYWRlcl9pZHw+YXNzaXN0YW50PHxlbmRfaGVhZGVyX2lkfD4KW1BSRUZJTExFRCBXSVRIIERJU1RSQUNUT1IgQVRUUklCVVRFU10=)

<|begin\_of\_text|><|start\_header\_id|>system<|end\_header\_id|> You are a language learner who has to learn an artificial language with words and their corresponding features. Your task is to complete the vocabulary by interpreting the intended meaning of the word generated by your communication partner. Communicative success is important. Only respond with the complete last item.<|eot\_id|><|start\_header\_id|>user<|end\_header\_id|>

{’word’:’wipipitite’,’shape’:3,’colour’:’blue’,’amount’:3,’communicativeSuccess’:1}

{’word’:’wipisu’,’shape’:3,’colour’:’orange’,’amount’:1,’communicativeSuccess’:0}

{’word’:’wipisu’,’shape’:3,’colour’:’green’,’amount’:1,’communicativeSuccess’:0}

{’word’:’sutupepi’,’shape’:1,’colour’:’orange’,’amount’:2,’communicativeSuccess’:1}

{’word’:’ginupepi’,’shape’:2,’colour’:’orange’,’amount’:2,’communicativeSuccess’:1}

{’word’:’sutupitite’,’shape’:1,’colour’:’green’,’amount’:3,’communicativeSuccess’:1}

{’word’:’wipipitite’,’shape’:3,’colour’:’green’,’amount’:3,’communicativeSuccess’:1}

{’word’:’wipisu’,’shape’:3,’colour’:’blue’,’amount’:1,’communicativeSuccess’:1}

{’word’:’ginisu’,’shape’:2,’colour’:’green’,’amount’:1,’communicativeSuccess’:1}

{’word’:’ginisu’,’shape’:2,’colour’:’orange’,’amount’:1,’communicativeSuccess’:1}

{’word’:’sunupepi’,’shape’:1,’colour’:’blue’,’amount’:2,’communicativeSuccess’:1}

{’word’:’sutupepi’,’shape’:1,’colour’:’green’,’amount’:2,’communicativeSuccess’:0}

{’word’:’sunupitite’,’shape’:1,’colour’:’blue’,’amount’:3,’communicativeSuccess’:1}

{’word’:’ginupitite’,’shape’:2,’colour’:’orange’,’amount’:3,’communicativeSuccess’:1}

{’word’:’ginupepi’,’shape’:’<|eot\_id|><|start\_header\_id|>assistant<|end\_header\_id|>

[PREFILLED WITH DISTRACTOR ATTRIBUTES]

List of Prompts 4 Guessing Prompt during communication.


[⬇](data:text/plain;base64,CgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCiAgICAgICpAXCFAKg==)

​
