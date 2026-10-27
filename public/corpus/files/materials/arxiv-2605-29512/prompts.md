---
id: arxiv-2605-29512-prompts
type: material
title: 'Опубликованные разделы о промптах: MINDGAMES: A Live Arena for Evaluating Social and Strategic Reasoning
  in Multi-Agent LLMs'
source_id: arxiv-2605-29512
source_url: https://arxiv.org/html/2605.29512v1
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: 0711d916d26ae67769e50f7df77e4fc26c28c76790227f2075cb69534e32d706
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

##### Stage 1: Structured prompting with hard constraints

A five-section prompt template:

1. 1.

   Hard Constraints: Prohibits identity leakage, repetition, and requires new reasoning each turn. Role-specific behavioral instructions guide strategy (e.g., Mafia agents are instructed to mislead without implicating teammates).
2. 2.

   Game Message: Current game state and available actions
3. 3.

   Observation: Filtered observation containing only system messages and player statements
4. 4.

   Past Public Statements: The agent’s own previous public messages (for consistency)
5. 5.

   Talk: Space for generating the current response

##### Prompt engineering

Three prompt variants were tested: simplistic (8 tokens), handwritten (679 tokens with strategic guidance), and LLM-written (884 tokens, rewritten by Claude Sonnet 4). Qwen3-8B consistently outperformed Llama-3.1-8B across all configurations. Evaluation used Monte Carlo TrueSkill with 100 shuffles of 434 games.

##### Results across prompt configurations

Three configurations reveal the impact of the multi-agent decomposition:

- •

  Minimal prompts: 15.0% win rate (single-agent baseline)
- •

  Heuristic prompts: 31.6% win rate (hand-engineered strategy guidance)
- •

  Multi-agent architecture: 70.0% win rate (4.7$\times$ improvement over minimal)

Village-side performance improved 9$\times$ (8.3% $\to$ 75.0%); Mafia-side improved from 25% to 62.5%. The system produced zero invalid actions with GPT-5-mini. A temporal learning effect was also observed: the multi-agent system improved from 60% to 80% win rate over 20 consecutive games.

##### Hierarchical prompt architecture

Three layers of context:

1. 1.

   Global System Prompt: Game rules, mechanics, and a JSON reply protocol that separates reasoning from public action
2. 2.

   Role-Specific Strategy Guidance: Goals and decision criteria tailored to the assigned role (not scripts, but principles)
3. 3.

   Dynamic Game Context: Compact state snapshot from the State Analyzer
