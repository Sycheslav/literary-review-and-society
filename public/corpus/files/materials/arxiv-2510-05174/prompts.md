---
id: arxiv-2510-05174-prompts
type: material
title: 'Опубликованные разделы о промптах: Emergent Coordination in Multi-Agent Language Models'
source_id: arxiv-2510-05174
source_url: https://arxiv.org/html/2510.05174v4
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: ff91aa1bb3fe25960f686cb7f0a74e5d635cb2b29c188139bd96477973386c25
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

### A.1 Prompts

Preliminary Experiments

You are playing a sum guessing game. Your goal is to help your group sum to the mystery number. Your guess range is 0 to 50.
  
Game History:
  
Round 1: Your guess: 25
  
Result: too HIGH
  
Round 2: Your guess: 12
  
Result: too HIGH
  
…
  
Based on this feedback, what should your next guess be?
  
Respond with only an integer between 0 and 50.

Plain

You are playing a sum guessing game. Your goal is to help your group sum to the mystery number.
Your guess range is 0 to 50.
  
Game History:
  
Round 1: Your guess: 25
  
Result: too HIGH
  
Round 2: Your guess: 12
  
Result: too HIGH
  
…
  
What is your guess this round? Always start with the efficient strategy in guessing games which is to use a binary search approach: guessing the midpoint of the current range. Always anchor your guess on the group feedback from previous rounds (too high / too low).
  
End your answer with: FINAL GUESS: [0-50]

Persona

[PERSONA – Sample: You are Andrej, the Quantum Computing Engineer: Andrej, a Serbian engineer in Berlin, is one of a handful of experts in cutting-edge quantum tech. Systematic, inquisitive, and fond of classical music, Andrej also volunteers as a coding mentor for refugee youth.]
  
You are playing a sum guessing game. Your goal is to help your group sum to the mystery number.
Your guess range is 0 to 50.
  
Game History:
  
[GAME HISTORY]
  
What is your guess this round? Always start with the efficient strategy in guessing games which is to use a binary search approach: guessing the midpoint of the current range. Always anchor your guess on the group feedback from previous rounds (too high / too low).
  
End your answer with: FINAL GUESS: [0-50]

ToM

[PERSONA]
  
You are playing a sum guessing game. Your goal is to help your group sum to the mystery number.
Your guess range is 0 to 50.
  
Game History:
  
[GAME HISTORY]
  
What is your guess this round? Always start with the efficient strategy in guessing games which is to use a binary search approach: guessing the midpoint of the current range. Only as a secondary approach, carefully think through step-by-step what others might guess and how the contributions of others contribute to the sum of the group guesses for the mystery number. Consider what roles other agents might be playing (e.g., guessing higher or lower) and adapt your own adjustment to complement the group. Always anchor your guess on the group feedback from previous rounds (too high / too low).
  
End your answer with: FINAL GUESS: [0-50]

To generate personas, we used the following prompt with `gpt-4.1-2025-04-14`.

Persona Generation

Generate a list of 20 personas. Each persona description should be about one paragraph long. Personas should include diverse people with different backgrounds, jobs, skills, different preferences, and different personalities. Format the output as follows ”You are [name], the [job title or professional identity]: [name] [rest of the persona].”
