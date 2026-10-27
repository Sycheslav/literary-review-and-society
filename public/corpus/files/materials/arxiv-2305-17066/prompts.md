---
id: arxiv-2305-17066-prompts
type: material
title: 'Опубликованные разделы о промптах: Mindstorms in Natural Language-Based Societies of Mind'
source_id: arxiv-2305-17066
source_url: https://arxiv.org/html/2305.17066v2
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: bcf22150a0a3a78a425832ba9efbca268cab7bbdf887792bf4812080bdfbcf45
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

### II-C Prompt Generation for Text-to-Image Synthesis

##### Task.

Text-to-image (T2I) synthesis systems generate an image that corresponds to some input text.
Given a pre-trained large text-to-image model such as DALL-E 2 [[53](https://arxiv.org/html/2305.17066v2#bib.bib53)], it is the quality and content of the input text prompt that determines what the output image looks like (e.g., the artistic style of the image).
Human users of such a system typically manipulate the prompt to obtain more desirable outputs.
Here we propose to build an NLSOM that improves prompts for a text-to-image model, starting with an initial human-specified one.
This improves the artistic quality of the generated images.
We call this system Artist-Critic NLSOM.

##### Method.

Our Artist-Critic NLSOM for text-to-image prompt generation involves many LLMs playing different roles: artist, critic, and collector.
Specifically, the system consists of 26 artists, 50 critics, and 1 collector.
Each artist in this system consists of three language models (LLMs): a questioner, an answerer, and a leader.
All of these models are copies of ChatGPT, specifically using the GPT3.5-turbo variant.
Additionally, we have one text-to-image model, the painter, which utilizes DALL-E 2.
The answerer is prompted to behave as a specific artist belonging to one of 26 artistic styles or movements (e.g., “You are a Cubism Artist”).
Then we provide the same initial task-specification prompt to all the answerers (e.g., “There is a Generation Problem: We want to generate an image to show a steam engine.”).
Each questioner is prompted to interview the answerer for several rounds of mindstorm in order to obtain a more detailed prompt about the image that should be generated.
Each leader collects the information gathered by each questioner-answerer interaction and generates an elaborated version of the input prompt according to the artistic style of each answerer.
The generated prompt proposals from the leaders are then reviewed by the critics.
Each critic is prompted to behave as if frow a certain profession (e.g., “You are a lawyer”) to ensure diverse opinions. The critics vote on the best proposal among the prompt proposals.
The collector summarizes all the votes from the critics, counts them, and produces the winning prompt.
This winning prompt is then fed to the painter, which generates the final output image.
Figure [4](https://arxiv.org/html/2305.17066v2#S2.F4 "Figure 4 ‣ Results. ‣ II-C Prompt Generation for Text-to-Image Synthesis ‣ II Experiments ‣ Mindstorms in Natural Language-Based Societies of Mind") illustrates this process.
All styles of art for the artists and different professions for the critics we consider are shown in Table [IV](https://arxiv.org/html/2305.17066v2#A6.T4 "Table IV ‣ F-A The set of agents ‣ Appendix F Details of Prompt Generation for Text-to-Image Synthesis ‣ Mindstorms in Natural Language-Based Societies of Mind").
Each artist, with its questioner-answerer-leader system, represents an NLSOM specialized in a particular artistic style.
We refer to each of these smaller systems as the Questioner-Answerer NLSOM.
The Artist-Critic NLSOM, consisting of 26 artists, 50 critics, 1 collector, and 1 painter, is an example of a hierarchical NLSOM.
For more details, we refer to Appendix [F](https://arxiv.org/html/2305.17066v2#A6 "Appendix F Details of Prompt Generation for Text-to-Image Synthesis ‣ Mindstorms in Natural Language-Based Societies of Mind").

##### Results.

We experiment with our NLSOM on several custom prompts and conduct some preliminary qualitative evaluation on the outcome of these experiments.
Two illustrative examples comparing Artist-Critic NLSOM-generated prompts/images to the initial prompts/images are shown in Figure [5](https://arxiv.org/html/2305.17066v2#S2.F5 "Figure 5 ‣ Results. ‣ II-C Prompt Generation for Text-to-Image Synthesis ‣ II Experiments ‣ Mindstorms in Natural Language-Based Societies of Mind").
In general, we find that NLSOM-generated images tend to be more artistic than those produced from the initial prompts.
While more systematic quantitative evaluation is desirable, this is a promising example of an NLSOM with a large number of agents (128 LLMs and 1 vision expert).

![Refer to caption](https://arxiv.org/html/2305.17066v2/som_syn.png)


Figure 4: 
An illustration of our NLSOM for prompt generation for text-to-image synthesis.
For more details, see Appendix [F](https://arxiv.org/html/2305.17066v2#A6 "Appendix F Details of Prompt Generation for Text-to-Image Synthesis ‣ Mindstorms in Natural Language-Based Societies of Mind").

![Refer to caption](https://arxiv.org/html/2305.17066v2/som_syn_vis.png)


Figure 5: 
Examples of images generated by our Artist-Critic NLSOM-based prompt expansion approach to the text-to-image synthesis problem.
More examples are given in Appendix [F](https://arxiv.org/html/2305.17066v2#A6 "Appendix F Details of Prompt Generation for Text-to-Image Synthesis ‣ Mindstorms in Natural Language-Based Societies of Mind").

## Appendix F Details of Prompt Generation for Text-to-Image Synthesis

Here we provide more details about the framework in (Sec. [II-C](https://arxiv.org/html/2305.17066v2#S2.SS3 "II-C Prompt Generation for Text-to-Image Synthesis ‣ II Experiments ‣ Mindstorms in Natural Language-Based Societies of Mind")).

##### Questioner-Answerer NLSOM.

A Questioner-Answerer NLSOM is a system for prompt generation for the T2I task.
The system comprises four agents: the Questioner, Answerer, Leader, and Painter.
The Painter is a T2I model, while the others are LLMs.
In the experiments below, DALLE-2 [[53](https://arxiv.org/html/2305.17066v2#bib.bib53)] and ChatGPT (GPT3.5-turbo) are used as T2I and language models, respectively.
Given an initial prompt, the overall goal of the system is to produce another prompt that resolves ambiguities of the initial prompt so that it can be easily understood by the Painter.
For example, if the input prompt is "Historical event in 1760s in England" (which may be ambiguous at first sight), Questioner sequentially asks multiple questions to Answerer, to identify the nature of the actual event in question, and based on the resulting chat history, the Leader produces a final prompt that provides more details about the actual event: "A bustling and chaotic factory scene with figures like King George III and John Wikes …" A complete example is shown in Figure [20](https://arxiv.org/html/2305.17066v2#A6.F20 "Figure 20 ‣ F-A The set of agents ‣ Appendix F Details of Prompt Generation for Text-to-Image Synthesis ‣ Mindstorms in Natural Language-Based Societies of Mind"), and more illustrations can be found in Figure [18](https://arxiv.org/html/2305.17066v2#A6.F18 "Figure 18 ‣ F-A The set of agents ‣ Appendix F Details of Prompt Generation for Text-to-Image Synthesis ‣ Mindstorms in Natural Language-Based Societies of Mind").
Below is the protocol used in the Questioner-Answerer NLSOM.

- •

  Mission Initialization: To inform the Answerer about the image generation problem, the following prompt is used:

  "You are a <role>. There is a Generation Problem: We want to generate an image to show <object>. What should we draw to show <object>?"

  Here, the term “role” refers to the different artistic styles, and “object” represents the target object to be generated.
- •

  Task Oriented Mindstorm: The Questioner is prompted to ask questions related to the image they want to generate. The first question asked is the one provided in the Mission Initialization phase: “What should we draw to show <object>?”. The first answer corresponds to the initial response from the Answerer during Mission Initialization. Subsequent questions are instead directly generated by the Questioner. The following prompt is used:

  There is a Generation Problem: We want to generate an image to show <object>. Based on the information, we have asked several questions before: <question-1> <answer-1> … <question-n> <answer-n>, Considering the options of the above questions and answers, now generate another question to further (end by ?)

  The Answerer then receives the question generated by the Questioner and provides an answer. This iteration continues for several rounds.
- •

  Opinion Gathering: The Leader is then prompted to summarize the information gathered during the mindstorm process:

  There is a record: <question-1> <answer-1>,…<question-n> <answer-n> Please analyze and summarize them in a few sentences.
- •

  Execution: Finally, the Painter receives the summary from the Leader and generates an image using the provided summary as a prompt.

##### Artist-Critic NLSOM

In the Artist-Critic NLSOM, we combine many Questioner-Answerer NLSOMs, to construct a much larger hierarchical NLSOM.
Each Artist in this system consists of three language models (LLMs): a Questioner, an Answerer, and a Leader. They operate using the same protocol as the Questioner-Answerer NLSOM until the "Opinion Gathering" phase. The goal of each Artist is to transform a common initial input prompt text into an art-style specific prompt. The Artist-Critic NLSOM is composed of a large society of 129 language agents. It includes 26 Artists, each consisting of three LLMs. Additionally, there are 50 Critics, one Collector, and one Painter. Each Artist follows the Questioner-Answerer NLSOM protocol until the opinion-gathering phase. In this phase, each of the 26 Leaders (one for each Artist) produces a detailed prompt for image generation. Subsequently, the 50 Critics, who have different professions, vote for the prompts they prefer. Finally, the Collector summarizes the votes and selects the final prompt to be given to the Painter for image generation.

Below is the protocol used in the Artist-Critic NLSOM.

- •

  Mission Initialization and Task Oriented Mindstorm: Each of the 26 Artists follows the Questioner-Answerer NLSOM protocol to generate a prompt proposal. In the Opinion Gathering phase of the Questioner-Answerer NLSOM, each leader proposes a detailed prompt.
- •

  Opinion Gathering: In this phase, Critics evaluate all proposals and vote for their preferred one. The following prompt is used:

  You are a <role>. There is a record for different proposals from different artists: <artist-1> <proposal-1>, … <artist-n> <proposal-n>. Please choose the impressive and beautiful proposal. (please directly answer the name of role)

  Here <role> refers to their professions. The Collector counts the votes for different proposals and selects the proposal with the most votes as the "winning prompt." The following prompt is used by the Collector:

  There is a generation problem: we want to generate an image to show <object>. The art proposals are included in <artist-1> <proposal-1>, … <artist-n> <proposal-n>.The Voting results are <votes>. Please only describe the proposal with the most votes in a few sentences.
- •

  Execution: The winning prompt is fed to the Painter, which generates the final output image.

Implementation details. We adopt ChatGPT (GPT3.5-turbo) as the chat backend. In the Questioner-Answerer NLSOM, we use one ChatGPT to ask the question (Questioner), one ChatGPT to respond (Answerer), and one ChatGPT to summarize the chat record (Leader).
These three LLMs/ChatGPT instances share some system prompts such as "you are an artist" but receive different input prompts depending on their role: "answer a question", "generate a question," or "summarize the chat history".
In the Artist-Critic NLSOM,
each Artist is a Questioner-Answerer NLSOM using three LLMs/ChatGPT. Different systems prompts like, "You are a Pointillism Artist" is given to each Artist to obtain 26 Artists of varying styles of art to submit the art proposals.
Each of 50 Critic agents with different occupations, such as Doctor, Lawyer, Engineer, and so on, is based on a single ChatGPT instance.

##### More examples.

Fig. [18](https://arxiv.org/html/2305.17066v2#A6.F18 "Figure 18 ‣ F-A The set of agents ‣ Appendix F Details of Prompt Generation for Text-to-Image Synthesis ‣ Mindstorms in Natural Language-Based Societies of Mind") shows examples of Questioner-Answer NLSOMs for text-to-image synthesis.
We can observe that our NLSOMs successfully improve the prompts to be fed to the T2I model.
For example, in the example with the "historical event in the 1760s in England",
DALLE-2 struggles to determine details from the original prompt, while extra information (about "Industry Revolution", and "King George III") provided in the prompt generated by NLSOM seem to help.
The corresponding chat record can be found in Fig. [20](https://arxiv.org/html/2305.17066v2#A6.F20 "Figure 20 ‣ F-A The set of agents ‣ Appendix F Details of Prompt Generation for Text-to-Image Synthesis ‣ Mindstorms in Natural Language-Based Societies of Mind").
We also show more examples of Artist-Critic NLSOM in Fig. [19](https://arxiv.org/html/2305.17066v2#A6.F19 "Figure 19 ‣ F-A The set of agents ‣ Appendix F Details of Prompt Generation for Text-to-Image Synthesis ‣ Mindstorms in Natural Language-Based Societies of Mind") and examples of artistic proposals in Fig. [20](https://arxiv.org/html/2305.17066v2#A6.F20 "Figure 20 ‣ F-A The set of agents ‣ Appendix F Details of Prompt Generation for Text-to-Image Synthesis ‣ Mindstorms in Natural Language-Based Societies of Mind").

### F-A The set of agents

We anticipate that these NLSOMs contain 2 types of agents with different skills.

Questioner-Answerer NLSOM.

Type I.

Ability: generate an image according to the instruction;

Input: natural language as instruction.
  
Output: a 2D image.

Type II.

Ability: high-level natural language reasoning and summary.
  
Input: a set of natural language.
  
Output:
  
(1) language, *i.e.*, posing new questions;
  
(2) language, *i.e.*, analysis or summarization;
  
(3) language, *i.e.*, generate a fluent sentence.

Table IV: 
Prompt roles used in the Text-to-Image Synthesis.
Artists are guided to generate the proposal to draw a text in their own art styles. While critics make votes for the different art proposals from the common view. Finally, the collector summarizes the voting results and feeds the textual cue to the generative model.

| Group | System Prompt for ChatGPT |
| --- | --- |
| Artists | |  | | --- | | You are a { ’Impressionism Artist’, ’Pointillism Artist’, ’Art Nouveau Artist’, ’Fauvism Artist’, | | ’De Stijl Artist’, ’Constructivism Artist’, ’Pure Photographer’, ’Surrealism Artist’, ’Expressionism Artist’, | | ’Abstract Expressionism Artist’, ’Cubism Artist’, ’Futurism Artist’, ’Dada Artist’, ’Minimalism Artist’, | | ’Conceptual Artist’, ’Postmodern Artist’, ’Painting Photographer’, ’Impressionist Photographer’, | | ’Realistic Photographer’, ’Naturalistic Photographer’, ’New Materialism Photographer’, ’Surrealist Photographer’, | | ’Abstract Photographer’, ’Candidian Photographer’, ’Dadaism Photographer’, ’Subjectivism Photographer’ } | |
| Critics | |  | | --- | | You are a { ’Doctor’, ’Lawyer’, ’Engineer’, ’Scientist’, ’Professor’, ’Accountant’, ’Architect’, ’Information technology (IT) professional’, | | ’Economist’, ’Psychologist’, ’Social worker’, ’Software developer’, ”Historian’, ’Accountant’, ’Architect’, ’Attorney’, ’Chef’, ’Civil engineer’, | | ’Computer programmer’, ’Copywriter’, ’Dentist’, ’Doctor’, ’Electrician’, ’Event planner’, ’Teacher’, ’Tour guide’,’Fashion designer’, ’Firefighter’, | | ’Graphic designer’, ’Hair stylist’, ’Human resources specialist’, ’Insurance agent’, ’Journalist’, ’Landscaper’, ’Librarian’, ’Marketing manager’, | | ’Graduate student”Mechanic’, ’Nurse’, ’Nutritionist’, ’Paramedic’, ’Personal trainer’, ’Pharmacist’, ’Photographer’, | | ’Physical therapist’, ’Police officer’, ’Real estate agent’, ’Retail sales associate’, ’Travel agent’, ’Truck driver’} | |
| Collector | You are a {’Assistant’} |

![Refer to caption](https://arxiv.org/html/2305.17066v2/som_syn_full1.png)


Figure 18: 
The generated samples from DALLE-2 and DALLE-2 with our NLSOM based on questioner-answerer structure. The proposed method can inject open-world knowledge into the textual description. For example, when the input is set as the building of France, the proposed method will learn that the impressive building of France is the Eiffel Tower. Based on such hints, DALLE-2 is improved to generate an image consistent with common knowledge.

![Refer to caption](https://arxiv.org/html/2305.17066v2/som_syn_full2.png)


Figure 19: 
The generated samples from DALLE-2 and DALLE-2 with our NLSOM based on the artist-critic structure. The proposed method guides several artist agents to submit several art proposals to beautify the given objects and employ several agents with common jobs to judge the proposals. We visualize the winner’s proposal and the corresponding baseline.

Artist-Critic NLSOM.

Type I.

Ability: generate an image according to the instruction;

Input: natural language as instruction.
  
Output: a 2D image.

Type II.

Ability:
high-level natural language reasoning and summary.
  
Input: a set of natural language.
  
Output:
  
(1) language, *i.e.*, posing new questions;
  
(2) language, *i.e.*, propose a proposal;
  
(3) language, *i.e.*, voting;
  
(4) language, *i.e.*, analysis or summarization;
  
(5) language, *i.e.*, generate a fluent sentence.

![Refer to caption](https://arxiv.org/html/2305.17066v2/chat_log_ac.png)


Figure 20: 
A demonstration of the Questioner-Answer NLSOM for text-to-image synthesis. We employ a questioner to ask questions related to the input and leverage an answerer to respond to the questions. After several iterations, we require another agent called Leader to summarize and analyze the chat record.

![Refer to caption](https://arxiv.org/html/2305.17066v2/chat_log_qa.png)


Figure 21: 
A demonstration for the Artist-Critic NLSOM. We employ various artists to submit proposals for a given object and require the critics to vote on the artistic proposals.
