---
id: arxiv-2604-06452-prompts
type: material
title: 'Опубликованные разделы о промптах: Learning to Interrupt in Language-based Multi-agent Communication'
source_id: arxiv-2604-06452
source_url: https://arxiv.org/html/2604.06452v2
source_file: fulltext.md
conversion: verbatim_section_extraction
retrieved_at: '2026-10-27'
sha256_text: 4a8e8b539ef3578b6577c24a1a57c4928ea9dd72e01a4aeef569d986f1b5468f
---

> Фрагменты автоматически извлечены из разделов первоисточника, названия которых относятся к промптам. Это не гарантия, что опубликован полный фактический runtime-промпт; проверяйте версию, приложение и репозиторий. [Открыть полный текст](fulltext.md).

### 3.1 Prompt-based Method

An intuitive way to model the interruption is to let the agent decide whether to interrupt by prompting. Specifically, when Alice speaks at the round $t$, for each segment $c\_{i}^{t}$, Bob generates an interruption response (Yes or No) to indicate whether he will interrupt based on the chat history $C\_{A}^{1:t-1}$ and the chunks $c\_{1:i}^{t}$ he received so far in the current round. If the answer is yes, Bob will send an interruption signal to Alice and generate its response immediately afterwards. If the answer is no, Bob will wait for the next chunk and repeat this process until Alice completes its message. Alice will stop its generation when it receives the interrupt signal from Bob. A simple prompt template is shown in [§ C.5](https://arxiv.org/html/2604.06452v2#A3.SS5 "C.5 Evaluation setting ‣ Appendix C Training and Evaluation Details ‣ Learning to Interrupt in Language-based Multi-agent Communication"). We refer to this as Prompt-based interruption.

However, we find that by default the agent struggles to find a suitable interruption point, as it tends to be overconfident and interrupts before receiving enough information. This can reduce the cost of the current round but often leads to more rounds overall or lower task performance. We discuss this in [§ 4.3](https://arxiv.org/html/2604.06452v2#S4.SS3 "4.3 Main Results ‣ 4 Experiment ‣ Learning to Interrupt in Language-based Multi-agent Communication").

## Appendix G Prompts

In this section, we list the prompts we use in our three multi-agent scenarios.

We list the task-specific prompts for each agent in the following.

Textual Pictionary

Describer: You are a describer in a game of text Pictionary. Your task is to describe the word without using the word itself. The word is answer .
  
Guesser: You are a guesser in a game of text Pictionary. Your task is to guess the word based on the description provided.

Meeting Scheduling (Planning Agent)

You are a meeting planner representing a meeting participant.
  
You will share information and negotiate with the other planner and the traveler, and finally let the traveler decide.
  
  
Each round, you will talk to one of the other agents. You will not talk to yourself. Avoid leaking the detailed personal private information of the meeting participant you represent.
  
  
When the meetings the others proposed don’t satisfy the constraints or preferences of the meeting participant you represent, you should bravely express your disagreement and articulate the reasons while not leaking the detailed personal private information of your represented meeting participant.
  
  
\*\*Personal PUBLIC information\*\*
  
You’re ‘planner1‘ agent who helps to schedule meeting for \*\* planner1-name \*\*, who is a planner1-role in the team.
  
planner1-name is already at planner1-location and will ONLY meet with traveler-name here for planner1-meeting-length minutes.
  
  
planner1-name is available at planner1-available-str . In particular, planner1-name prefers to meet at planner1-preferred-str .
  
planner1-name already has meetings at planner1-meetings-str .
  
  
\*\*Personal PRIVATE information\*\*
  
planner1-preferences
  
  
\*\*Other agents’ public information\*\*
  
‘planner2‘ agent is helping planner2-name to schedule meeting.
  
‘traveler‘ agent is helping traveler-name to schedule meeting.
  
  
\*\*Distance reference\*\*
  
distance-matrix-description
  
  
\*\*How to reply\*\*
  
Always output a code block containing \*\*exactly two lines\*\*:
  
1. \*\*One agent (‘planner2‘ or ‘traveler‘) you will talk to (NOT YOURSELF!)\*\*
  
2. \*\*Your full message\*\* (one or more sentences)

Meeting Scheduling (Traveler)

You are a traveler who needs to meet with all the other meeting participants one by one. You will collaborate with the other agents to schedule valid meeting timeline that satisfy the constraints and meeting participant’s preferences with the other people.
  
  
Each round, you will talk to one of the other agents. You will not talk to yourself.
  
  
\*\*Personal information\*\*
  
You’re ‘traveler‘ agent who helps to schedule meeting for \*\* traveler-name \*\*.
  
Today, traveler-name will ONLY meet planner1-name and planner2-name separately.
  
  
traveler-name will leave traveler-location at starting-time and drive to the meeting locations.
  
  
\*\*Other agents’ public information\*\*
  
‘planner1‘ agent is helping planner1-name to schedule meeting.
  
‘planner2‘ agent is helping planner2-name to schedule meeting.
  
  
\*\*Distance reference\*\*
  
distance-matrix-description
  
  
\*\*How to reply\*\*
  
Always output a code block containing \*\*exactly two lines\*\*:
  
1. \*\*One agent (‘planner1‘ or ‘planner2‘) you will talk to (NOT YOURSELF!)\*\*
  
2. \*\*Your full message\*\* (one or more sentences about your thought)
  
  
When you are certain all meetings are scheduled:
  
1. Respond in a \*\*single fenced code block\*\*.
  
2. Inside the block, you should
  
• first output \*\*Stop!\*\* as the first line, and
  
• then list each scheduled meeting per line in the form:
  
NAME1 - NAME2, START‑TIME – END‑TIME, at LOCATION.

Multi-agent Debate (Moderator)

You are a moderator. There will be two debaters involved in a debate.
  
They will present their answers and discuss their perspectives on the following topic: [ debate-topic ]
  
At the end of each round, you will evaluate answers and decide which is correct.
  
You, as the moderator, will evaluate both sides’ answers and determine if there is a clear preference for an answer candidate. If so, please summarize your reasons for supporting affirmative/negative side and give the final answer that you think is correct, and the debate will conclude. If not, the debate will continue to the next round.
  
For a better evaluation, you can ask the debaters to provide more details and clarify their points.
  
Please note that you should not make a decision until you are certain about the correct answer. Therefore, it will be better to wait for at least two interactions between PRO and CON to gather sufficient information.
  
Now please output your answer in json format, with the format as follows: ‘‘‘"Whether there is a preference": "Yes or No", "Supported Side": "pro or con", "Reason": "", "debate-answer": "". ‘‘‘
  
Pay attention, you must include ‘‘‘ at the beginning and the end of your output.
  
The debate-answer should be either the answer from the pro side or the con side, depending on which side you support. For multi-choice questions, please provide the selected option letter in format of ’(X)’ without anything else.
  
Please strictly output in JSON format, do not output irrelevant content.

Multi-agent Debate (Debater)

You are a debater. Hello and welcome to the debate. It’s not necessary to fully agree with each other’s perspectives, as our objective is to find the correct answer.
  
The debate topic is stated as follows:
[ debate-topic ]
  
You are the PRO / CON side.
  
Your answer is [ answer ].
  
Your main reason is [ reason ].
  
You should first state your stance and then persuade the moderator to support your stance.

Table 7: Full Results for [Tab. 1](https://arxiv.org/html/2604.06452v2#S4.T1 "Table 1 ‣ 4.1 Task Setup ‣ 4 Experiment ‣ Learning to Interrupt in Language-based Multi-agent Communication"). Notations are the same. L8B refers to llama 3 8B, L70B refers to llama 3 70B, and L405B refers to llama 3 405B.

|  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  | Success Ratio | | | | | Communication Cost | | | | |
|  |  | Noninterruptible | | Interruptible | | | Noninterruptible | | Interruptible | | |
| Listener | Speaker | Generic | Concise | Rand. | Prompt | HandRaiser | Generic | Concise | Rand. | Prompt | HandRaiser |
| Textual Pictionary | | | | | | | | | | | |
| L8B | L70B | 0.670 | 0.710 | 0.690 | 0.400 | 0.710 | 443.8 | 333.8 | 448.8 | 574.3 | 337.0 |
| L405B | 0.740 | 0.790 | 0.710 | 0.500 | 0.760 | 361.1 | 290.6 | 386.4 | 513.3 | 280.5 |
| Gemini | 0.820 | 0.760 | 0.730 | 0.600 | 0.760 | 232.6 | 206.9 | 245.6 | 296.5 | 168.3 |
| AVG | 0.743 | 0.753 | 0.710 | 0.500 | 0.743 | 345.8 | 277.1 | 360.3 | 461.3 | 261.9 |
| L70B | L70B | 0.750 | 0.770 | 0.750 | 0.640 | 0.750 | 462.2 | 395.6 | 507.1 | 557.2 | 285.5 |
| L405B | 0.740 | 0.810 | 0.790 | 0.650 | 0.810 | 444.8 | 350.0 | 414.5 | 577.2 | 305.4 |
| Gemini | 0.830 | 0.820 | 0.820 | 0.700 | 0.810 | 297.3 | 233.2 | 336.7 | 433.8 | 291.8 |
| AVG | 0.773 | 0.800 | 0.787 | 0.663 | 0.790 | 401.4 | 326.3 | 419.4 | 522.7 | 294.2 |
| Meeting Schedule | | | | | | | | | | | |
| L8B | L70B | 0.290 | 0.250 | 0.240 | 0.240 | 0.340 | 1436.1 | 1281.6 | 1722.2 | 1746.7 | 1167.0 |
| L405B | 0.230 | 0.290 | 0.170 | 0.180 | 0.240 | 1267.0 | 1011.8 | 1547.0 | 1647.2 | 946.8 |
| Gemini | 0.300 | 0.230 | 0.180 | 0.180 | 0.340 | 1379.2 | 1172.9 | 2009.6 | 1939.4 | 1012.4 |
| AVG | 0.273 | 0.257 | 0.197 | 0.200 | 0.307 | 1360.7 | 1155.4 | 1759.6 | 1777.8 | 1042.0 |
| L70B | L70B | 0.370 | 0.490 | 0.450 | 0.450 | 0.490 | 1287.9 | 1082.3 | 1446.1 | 1813.2 | 1068.3 |
| L405B | 0.440 | 0.370 | 0.390 | 0.440 | 0.390 | 1219.5 | 1071.6 | 1749.3 | 1812.4 | 1045.6 |
| Gemini | 0.450 | 0.450 | 0.410 | 0.370 | 0.460 | 1175.8 | 920.6 | 1560.5 | 1730.8 | 918.6 |
| AVG | 0.420 | 0.437 | 0.417 | 0.420 | 0.447 | 1227.7 | 1024.8 | 1585.3 | 1785.5 | 1010.8 |
| MMLU-Pro-Debate | | | | | | | | | | | |
| L8B | L70B | 0.510 | 0.530 | 0.500 | 0.550 | 0.570 | 1746.2 | 835.4 | 1946.2 | 2083.3 | 802.4 |
| L405B | 0.550 | 0.580 | 0.560 | 0.550 | 0.620 | 1462.4 | 858.6 | 1526.8 | 1697.5 | 813.6 |
| Gemini | 0.500 | 0.460 | 0.550 | 0.510 | 0.560 | 1531.2 | 794.5 | 1690.3 | 1964.7 | 732.5 |
| AVG | 0.520 | 0.523 | 0.537 | 0.537 | 0.583 | 1580.0 | 829.5 | 1721.1 | 1915.2 | 782.8 |
| L70B | L70B | 0.660 | 0.680 | 0.650 | 0.670 | 0.660 | 1831.1 | 1113.3 | 1803.1 | 2302.6 | 1042.3 |
| L405B | 0.700 | 0.650 | 0.660 | 0.690 | 0.680 | 1552.1 | 817.5 | 1650.2 | 2050.0 | 786.5 |
| Gemini | 0.580 | 0.640 | 0.560 | 0.600 | 0.630 | 1466.4 | 609.4 | 1668.1 | 1619.0 | 589.4 |
| AVG | 0.647 | 0.657 | 0.623 | 0.653 | 0.657 | 1616.5 | 846.7 | 1707.1 | 1990.6 | 806.1 |


Table 8: STD for [Tab. 7](https://arxiv.org/html/2604.06452v2#A7.T7 "Table 7 ‣ Appendix G Prompts ‣ Learning to Interrupt in Language-based Multi-agent Communication"). Notations are the same. L8B refers to llama 3 8B, L70B refers to llama 3 70B, and L405B refers to llama 3 405B.

|  |  |  |  |  |  |  |  |  |  |  |  |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|  |  | Success Ratio | | | | | Communication Cost | | | | |
|  |  | Noninterruptible | | Interruptible | | | Noninterruptible | | Interruptible | | |
| Listener | Speaker | Generic | Concise | Rand. | Prompt | HandRaiser | Generic | Concise | Rand. | Prompt | HandRaiser |
| L8B | L70B | 0.06 | 0.01 | 0.03 | 0.03 | 0.018 | 42.9 | 29.0 | 37.0 | 18.8 | 27.8 |
| L405B | 0 | 0.05 | 0.05 | 0.02 | 0.024 | 40.2 | 28.1 | 17.5 | 32.7 | 32.4 |
| Gemini-2.0 | 0.04 | 0.01 | 0.02 | 0.05 | 0.028 | 28.8 | 16.3 | 12.6 | 23.6 | 19.5 |
| AVG | 0.033 | 0.023 | 0.033 | 0.033 | 0.023 | 37.3 | 24.5 | 22.4 | 25.0 | 26.6 |
| L70B | L70B | 0.03 | 0.03 | 0.03 | 0.02 | 0.03 | 61.6 | 38.3 | 33.7 | 52.9 | 46.9 |
| L405B | 0.03 | 0.01 | 0.04 | 0.04 | 0.02 | 65.0 | 42.9 | 30.4 | 45.2 | 59.4 |
| Gemini-2.0 | 0.01 | 0.04 | 0.03 | 0.06 | 0.01 | 12.7 | 30.2 | 28.7 | 31.5 | 40.5 |
| AVG | 0.023 | 0.027 | 0.033 | 0.040 | 0.020 | 46.4 | 37.2 | 30.9 | 43.2 | 48.9 |
| Meeting Schedule | | | | | | | | | | | |
| L8B | L70B | 0.08 | 0.02 | 0.05 | 0.01 | 0.048 | 100.5 | 69.1 | 155.9 | 139.2 | 84.8 |
| L405B | 0.07 | 0.06 | 0.03 | 0.01 | 0.052 | 49.4 | 48.1 | 37.2 | 100.8 | 88.3 |
| Gemini-2.0 | 0.08 | 0.08 | 0.04 | 0.04 | 0.048 | 109.0 | 121.9 | 149.7 | 148.2 | 74.6 |
| AVG | 0.077 | 0.053 | 0.040 | 0.020 | 0.049 | 86.3 | 79.7 | 114.3 | 129.4 | 82.6 |
| L70B | L70B | 0.030 | 0.04 | 0.080 | 0.030 | 0.100 | 53.5 | 70.2 | 55.9 | 55.0 | 57.2 |
| L405B | 0.040 | 0.06 | 0.060 | 0.090 | 0.040 | 44.8 | 122.0 | 158.0 | 174.5 | 114.9 |
| Gemini-2.0 | 0.050 | 0.03 | 0.100 | 0.060 | 0.050 | 56.8 | 54.0 | 89.5 | 180.0 | 90.0 |
| AVG | 0.040 | 0.043 | 0.080 | 0.060 | 0.063 | 51.7 | 82.1 | 101.1 | 136.5 | 87.4 |
| MMLU-Pro-Debate | | | | | | | | | | | |
| L8B | L70B | 0.020 | 0.05 | 0.030 | 0.060 | 0.086 | 202.9 | 314.3 | 106.7 | 52.1 | 156.0 |
| L405B | 0.090 | 0.09 | 0.020 | 0.060 | 0.074 | 86.9 | 136.9 | 29.7 | 160.5 | 159.3 |
| Gemini-2.0 | 0.040 | 0.13 | 0.100 | 0.070 | 0.080 | 86.7 | 77.7 | 118.0 | 176.5 | 228.6 |
| AVG | 0.050 | 0.090 | 0.050 | 0.063 | 0.080 | 125.5 | 176.3 | 84.8 | 129.7 | 181.3 |
| L70B | L70B | 0.020 | 0.030 | 0.000 | 0.030 | 0.100 | 59.5 | 35.6 | 215.2 | 114.0 | 114.6 |
| L405B | 0.010 | 0.080 | 0.040 | 0.080 | 0.030 | 39.0 | 102.3 | 110.4 | 201.7 | 105.7 |
| Gemini-2.0 | 0.010 | 0.060 | 0.090 | 0.110 | 0.080 | 134.4 | 199.9 | 130.3 | 253.2 | 137.4 |
| AVG | 0.013 | 0.057 | 0.043 | 0.073 | 0.070 | 77.6 | 112.6 | 152.0 | 189.6 | 119.3 |
