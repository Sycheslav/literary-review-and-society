---
id: arxiv-2306-02552-prompts
type: material
title: 'Опубликованные разделы о промптах: User Behavior Simulation with Large Language Model based Agents'
source_id: arxiv-2306-02552
source_url: https://arxiv.org/html/2306.02552v3
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: f35e463a0655e4513ef7805b7ef92998787a7c32bdb2ede0f5644ab2f2bca37b
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

### Prompt Examples for different Agent Behaviors

The prompt used in RecAgent consists of three parts: a summary of the Agent’s personal profile, reaction to given observation, and action-specific instructions.

#### Summary

Summary is the process of extracting and summarizing information relevant to the current observation from the user’s profile.

Summary:Given the following observation about David Miller: ’David Smith is going to chat with David Miller.’, please summarize the relevant details from his profile. His profile information is as follows:
Name: David Miller
Age: 39
Gender:female
Traits: fun-loving, creative, practical, energetic, patient
Status: writer
Movie Interest: action movies, sci-fi movies, classic movies
Feature: Choose movies, enjoy watching, and provide feedback and ratings to the recommendation system.
Search for movies heard of before and expand movie experiences…Enjoy publicly posting on social media and sharing content and insights with more people.
Interpersonal Relationships: ’David Smith’: ’friend’
Please avoid repeating the observation in the summary.
Summary:

Output: David Smith is a 25-year-old male photographer who is compassionate, caring, ambitious, and optimistic. He has an interest in sci-fi and comedy movies and enjoys choosing, watching, and providing feedback and ratings to the recommendation system. He has high standards for movies and the recommendation system and may criticize both. He has a friendship with David Miller.
