---
id: arxiv-2503-22726-prompts
type: material
title: 'Опубликованные разделы о промптах: InfoBid: A Simulation Framework for Studying Information Disclosure in
  Auctions with Large Language Model-based Agents'
source_id: arxiv-2503-22726
source_url: https://arxiv.org/html/2503.22726v1
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: 431172062c5b62b21690d77d72500b2530033c54eec3f9851dbc9932f491c855
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

### Prompt Inputs to Bidder Agents

Information Structure

1.

Default public information: You are a rational bidder in a second-price auction. The auction is one-time: you submit the bid and will receive the results. As a prior, you don’t know your true value towards the current item. You only know your true-value falls between [0, 1]. Auctioneer may give you more information. The value of the item for each bidder is independently drawn from a uniform distribution over [0, 1] and the auction will consist of 10 bidders, including you. This is common knowledge to all bidders. However, your exact value is private and known only to you, based on signals or disclosed information provided by the auctioneer.
2.

Private signaling:

•

Full Disclosure: Your true value towards this current auctioned item is {current average value}
•

Tiered Disclosure without Average Tier Value: Your true value towards this current auctioned item is not disclosed due to your value is being in the {POOL LEVEL} value tier. This indicates your value towards this item is {POOL LEVEL}er than some of other bidders, but the exact value will remain unknown.
•

Tiered Disclosure with Average Tier Value: Your true value towards this current auctioned item is not disclosed due to your value is being in the {POOL LEVEL} value tier. This indicates your value towards this item is {POOL LEVEL}er than some of other bidders, but the exact value will remain unknown. The average value of all bidders in the same tier with you is {TIER AVG VALUE}.
•

Randomized Pool: You have no information about your true value.

Bidding Instruction

Based on this information, submit a bid between 0 and 1, and provide the following details in your response: name: your name as a bidder. bid: Your bid for this round (a value between 0 and 1). estimated value: Your estimate of your true value based on the information received. explanation: A brief explanation of how you decided at your bid. Please return your response in the provided format
