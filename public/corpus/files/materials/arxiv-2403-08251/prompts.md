---
id: arxiv-2403-08251-prompts
type: material
title: 'Опубликованные разделы о промптах: Emergence of Social Norms in Generative Agent Societies: Principles and
  Architecture'
source_id: arxiv-2403-08251
source_url: https://arxiv.org/html/2403.08251v4
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: 5c89aa4de1f44b500b87359cf15a13fdde76cca95f5ef559d1e612e194103145
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

## Appendix B Prompts in CRSEC

We sketch the prompts for the LLM-based operations of our architecture from Figure [B1](https://arxiv.org/html/2403.08251v4#A2.F1 "Figure B1 ‣ B.1 Creation and Representation ‣ Appendix B Prompts in CRSEC ‣ Emergence of Social Norms in Generative Agent Societies:Principles and Architecture") to Figure [B12](https://arxiv.org/html/2403.08251v4#A2.F12 "Figure B12 ‣ B.4 Compliance ‣ Appendix B Prompts in CRSEC ‣ Emergence of Social Norms in Generative Agent Societies:Principles and Architecture").

### B.1 Creation and Representation

![Refer to caption](https://arxiv.org/html/2403.08251v4/creation.png)


Figure B1: Prompt for $\mathcal{P}\leftarrow\texttt{CreateNorm}(\mathcal{G})$ in the Creation & Representation.

### B.2 Spreading

![Refer to caption](https://arxiv.org/html/2403.08251v4/sender.png)


Figure B2: Prompt for $\mathcal{Y}\_{\texttt{conflict}}\in\{\texttt{T,F}\}\leftarrow\texttt{DetectConflict}(\mathcal{O\_{S}},\mathcal{P\_{S}})$ and $\mathcal{Y}\_{\texttt{talk}}\in\{\texttt{T,F}\}\leftarrow\texttt{DecideToTalk}(\mathcal{G\_{S}})$ in the Spreading.

![Refer to caption](https://arxiv.org/html/2403.08251v4/receiver.png)


Figure B3: Prompt for $\bar{n}\_{\mathcal{R}}\leftarrow\texttt{IdentifyNormativeInformation}(\mathcal{T\_{S\rightarrow R}})$ in the Spreading.

![Refer to caption](https://arxiv.org/html/2403.08251v4/observation.png)


Figure B4: Prompt for $\bar{n}\_{\mathcal{A}}\leftarrow\texttt{IdentifyNormativeInformation}(\mathcal{M\_{A}})$ in the Spreading.

### B.3 Evaluation

![Refer to caption](https://arxiv.org/html/2403.08251v4/imme_fact.png)


Figure B5: Prompt for $\mathcal{Y}\_{\texttt{consistent}}\in\{\texttt{T},\texttt{F}\}\leftarrow\texttt{CheckConsistency}(\bar{n},q)$ in the Evaluation.

![Refer to caption](https://arxiv.org/html/2403.08251v4/imme_duplicate.png)


Figure B6: Prompt for $\mathcal{Y}\_{\texttt{unique}}\in\{\texttt{T},\texttt{F}\}\leftarrow\texttt{CheckDuplication}(\bar{n},\mathcal{P})$ in the Evaluation. We incorporated some examples in the prompt, as we noticed that providing examples can significantly improve the effectiveness of evaluation.

![Refer to caption](https://arxiv.org/html/2403.08251v4/imme_type.png)


Figure B7: Prompt for $\mathcal{Y}\_{\texttt{type}}\in\{\texttt{T},\texttt{F}\}\leftarrow\texttt{CheckType}(\alpha)$ in the Evaluation. We incorporated some examples in the prompt, as we noticed that providing examples can significantly improve the effectiveness of evaluation.

![Refer to caption](https://arxiv.org/html/2403.08251v4/imme_conflict.png)


Figure B8: Prompt for $\mathcal{Y}\_{\texttt{conflictfree}}\in\{\texttt{T},\texttt{F}\}\leftarrow\texttt{CheckConflict}(\bar{n},\mathcal{P})$ in the Evaluation.

![Refer to caption](https://arxiv.org/html/2403.08251v4/long_classify.png)


Figure B9: Prompt for $\{(\mathcal{Q},k)\}\leftarrow\texttt{ClassifySpecificNorms}(\mathcal{P})$, where $\mathcal{Q}$ in the Evaluation. We incorporated some examples in the prompt, as we noticed that providing examples can significantly improve the effectiveness of classification.

![Refer to caption](https://arxiv.org/html/2403.08251v4/long_generate.png)


Figure B10: Prompt for $n^{\prime}\leftarrow\texttt{GenerateAbstractNorm}(\mathcal{Q},k)$ in the Evaluation.

### B.4 Compliance

![Refer to caption](https://arxiv.org/html/2403.08251v4/plan.png)


Figure B11: Prompt for $\mathcal{L}\_{\texttt{plan}}\leftarrow\texttt{GenerateNormativePlans}(\mathcal{C},\mathcal{P})$ in the Compliance. Note that LLMs will automatically complete the final blank.

![Refer to caption](https://arxiv.org/html/2403.08251v4/action.png)


Figure B12: Prompt for $\mathcal{L}\_{\texttt{action}}\leftarrow\texttt{GenerateNormativeActions}(l\_{i},\mathcal{P},\mathcal{G})$ in the Compliance.
