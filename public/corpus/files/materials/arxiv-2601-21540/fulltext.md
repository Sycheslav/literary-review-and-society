---
id: arxiv-2601-21540-text
type: material
title: Opinion Consensus Formation Among Networked Large Language Models
work_id: arxiv-2601-21540
source_url: https://arxiv.org/html/2601.21540v1
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять
  с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.
language: original
sha256_text: a60dc18cf5ec0f726f0e9fe8870238dd753688226cd969b410f30e6a1e8024a2
---

> Источник: [https://arxiv.org/html/2601.21540v1](https://arxiv.org/html/2601.21540v1). Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.

# Opinion Consensus Formation Among Networked Large Language Models

Iris Yazici
Affiliation: Bilkent University
  
Mert Kayaalp
Affiliation: UBS-IDSIA AI Lab
  
Stefan Taga
Affiliation: EPFL
  
Ali H. Sayed
Affiliation: EPFL

###### Abstract

Can classical consensus models predict the group behavior of large language models (LLMs)? We examine multi-round interactions among LLM agents through the DeGroot framework, where agents exchange text-based messages over diverse communication graphs. To track opinion evolution, we map each message to an opinion score via sentiment analysis. We find that agents typically reach consensus and the disagreement between the agents decays exponentially. However, the limiting opinion departs from DeGroot’s network-centrality-weighted forecast. The consensus between LLM agents turns out to be largely insensitive to initial conditions and instead depends strongly on the discussion subject and inherent biases. Nevertheless, transient dynamics align with classical graph theory and the convergence rate of opinions is closely related to the second-largest eigenvalue of the graph’s combination matrix. Together, these findings can be useful for LLM-driven social-network simulations and the design of resource-efficient multi-agent LLM applications.

## 1 Introduction

Mathematical models of opinion formation have been instrumental in understanding social network behavior and in designing multi-agent information-processing systems. The DeGroot consensus model [[7](https://arxiv.org/html/2601.21540v1#bib.bib3)], in particular, has received a lot of attention from the signal processing, microeconomics, and control communities, where many variants [[21](https://arxiv.org/html/2601.21540v1#bib.bib14), [15](https://arxiv.org/html/2601.21540v1#bib.bib9), [8](https://arxiv.org/html/2601.21540v1#bib.bib8), [11](https://arxiv.org/html/2601.21540v1#bib.bib1), [20](https://arxiv.org/html/2601.21540v1#bib.bib23), [14](https://arxiv.org/html/2601.21540v1#bib.bib2)] have been proposed to better reflect group decision dynamics and to design better decentralized signal processing and optimization algorithms.

In this work, we study social interactions among large language models (LLMs) through the lens of the DeGroot framework. Our goals are twofold.
First, despite a rich theoretical literature, empirical validation in real-world social settings remains limited, largely because collecting behavioral data from human subjects is costly and time-consuming.
We examine whether LLMs can provide a controllable and low-cost testbed for modeling the dynamics observed in human social networks.
Second, as LLMs are increasingly deployed in real applications, including social media platforms, it becomes important to understand how opinions evolve within networks of LLM-based agents.

To that end, we conduct experiments where LLM agents interact on communication graphs, and exchange text-based statements with their immediate neighbors over multiple rounds. We enforce the network weights and agent characters through system prompts, conduct multi-round simulations, and assign opinion scores to all responses via sentiment analysis. We vary the topics and graph topology, and compile the resulting conversations into a dataset. We then analyze the underlying opinion dynamics.

We find that agents typically converge to a consensus. Somewhat surprisingly, however, the final beliefs are largely insensitive to their initial positions, which is a departure from the DeGroot prediction that consensus should equal a network-centrality–weighted average of initial opinions. Instead, the consensus point appears to be dependent on the discussion subject and on biases the LLM carries, possibly from pretraining and alignment phases of their training. Despite this mismatch, the rate of convergence to the consensus agrees with well-established graph-theoretical results: it is related to the second-largest modulus eigenvalue of the combination matrix [[12](https://arxiv.org/html/2601.21540v1#bib.bib18), [24](https://arxiv.org/html/2601.21540v1#bib.bib16)]. Moreover, we find that when the combination matrix’s weights are instructed to the LLM agents through system prompts, agents are more likely to reach a consensus. In order to stimulate further research, we open-source our dataset totaling 764 experiments with 8 different topics, containing more than 1,200,000 LLM responses. It is available on Hugging Face 1.

### 1.1 Related Work

Models of opinion dynamics and distributed inference study how a network of agents aggregates and updates its beliefs by repeatedly incorporating others’ views. The standard DeGroot model [[7](https://arxiv.org/html/2601.21540v1#bib.bib3)] captures this via repeated averaging, where each agent forms a weighted average of neighbors’ opinions over time. Beyond DeGroot, richer variants allow for Bayesian reasoning at the agent level [[1](https://arxiv.org/html/2601.21540v1#bib.bib22)] and for distinct communication patterns, such as private interactions [[11](https://arxiv.org/html/2601.21540v1#bib.bib1)] or randomized processes [[20](https://arxiv.org/html/2601.21540v1#bib.bib23), [14](https://arxiv.org/html/2601.21540v1#bib.bib2)]. There is also experimental work evaluating these mechanisms in real-world social settings [[4](https://arxiv.org/html/2601.21540v1#bib.bib6), [17](https://arxiv.org/html/2601.21540v1#bib.bib20), [18](https://arxiv.org/html/2601.21540v1#bib.bib21)], though such empirical tests remain relatively rare.

Because experiments within human social networks are difficult to run, recent work examines the use of LLMs for simulation. They have been used for political processes [[9](https://arxiv.org/html/2601.21540v1#bib.bib10)], social-platform design choices [[22](https://arxiv.org/html/2601.21540v1#bib.bib11)], spread of misinformation [[16](https://arxiv.org/html/2601.21540v1#bib.bib12)], and for replicating classical social-psychology experiments [[3](https://arxiv.org/html/2601.21540v1#bib.bib5)]. Motivated by the emergence of human-LLM collectives, there is also a line of work that frames LLMs as “distributed sensor networks” integrating textual inputs [[13](https://arxiv.org/html/2601.21540v1#bib.bib19)].

Likewise, opinion dynamics among LLMs have been studied to assess how closely they mirror social networks. For example, [[5](https://arxiv.org/html/2601.21540v1#bib.bib4)] finds that standard LLMs initialized with human-like personas tend to reach factual consensus, likely due to their knowledge priors. Similarly, [[6](https://arxiv.org/html/2601.21540v1#bib.bib13)] shows intrinsic training-induced biases: alignment-trained models exhibit a consensus-seeking tendency even when used as-is, without persona prompts. In comparison, we analyze opinion dynamics from a DeGroot perspective, and focus on topics that are also debated in real-world social networks rather than factual questions with ground-truth answers. Furthermore, we study the impact of the communication network topology by evaluating the consensus rate among LLMs. Doing so assists in clarifying the potential of LLMs for social-simulation research, and also helps guide the design of multi-agent LLM systems that are resource-efficient in both communication and context-length.

## 2 Problem Formulation

We consider a network of $K$ agents.
Initially, each agent $k$ has a belief vector (i.e., opinion) $\mu\_{k,0}$, which it updates based on the opinions of its neighbors.
The peer-to-peer communication is constrained on a weighted and directed graph topology. Each agent $k$ receives information from its neighbors $\mathcal{N}\_{k}$. In the DeGroot model [[7](https://arxiv.org/html/2601.21540v1#bib.bib3)], agents repeatedly average their neighbors’ opinions in order to update theirs. Namely, at each time instant $i$, agent $k$ updates its belief with

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\mu\_{k,i}=\sum\_{\ell\in\mathcal{N}\_{k}}a\_{\ell k}\mu\_{\ell,i-1},$$ |  | (1) |

where $a\_{\ell k}$ denotes the level of trust agent $k$ assigns to the belief vector it receives from agent $\ell$. These coefficients satisfy

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\sum\_{\ell\in\mathcal{N}\_{k}}\!\!a\_{\ell k}=1\ \ \text{and}\ \ a\_{\ell k}>0\ \text{if, and only if,}\ \ell\in\mathcal{N}\_{k},\ \text{0 if}\ \ell\notin\mathcal{N}\_{k}$$ |  | (2) |

where the combination matrix $A=[a\_{\ell k}]$ is left-stochastic. If the underlying graph is also strongly connected [[21](https://arxiv.org/html/2601.21540v1#bib.bib14)], that is, if there exists a path between any agent pair $(\ell,k)$ and there exists at least one agent $k$ that does not discard its own information (i.e., $\exists k$ $a\_{kk}>0$), then, the matrix $A$ becomes both aperiodic and irreducible. This implies that under ([1](https://arxiv.org/html/2601.21540v1#S2.E1 "In 2 Problem Formulation ‣ Opinion Consensus Formation Among Networked Large Language Models")) and by the Perron-Frobenius theorem [[21](https://arxiv.org/html/2601.21540v1#bib.bib14), [19](https://arxiv.org/html/2601.21540v1#bib.bib7)], all agents will reach consensus with asymptotic beliefs given by

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\lim\_{i\to\infty}\mu\_{k,i}=\sum\_{\ell=1}^{K}\pi\_{\ell}\ \mu\_{\ell,0}$$ |  | (3) |

Here, $\pi$ denotes the Perron eigenvector of the combination matrix $A$ and satisfies

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$A\pi=\pi,\ \ \ \sum\_{k=1}^{K}\pi\_{k}=1,\ \ \text{and}\ \forall k,\ \pi\_{k}>0.$$ |  | (4) |

Entry $\pi\_{k}$ represents how central agent $k$ is in the network. Equation ([3](https://arxiv.org/html/2601.21540v1#S2.E3 "In 2 Problem Formulation ‣ Opinion Consensus Formation Among Networked Large Language Models")) then means that the final opinions of all agents are going to be the same and equal to a weighted average of initial opinions.

A strongly connected graph also implies that the matrix $A$ has a unique eigenvalue at $1$ and all its other eigenvalues are strictly smaller than $1$ in absolute value.
It is also known that the second-largest magnitude eigenvalue $|\lambda\_{2}|<1$ of $A$ controls the convergence time.
This follows from [[10](https://arxiv.org/html/2601.21540v1#bib.bib24), Chapter 8]

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\left|[A^{t}]\_{\ell k}-\pi\_{\ell}\right|\leq C\_{\sigma}\cdot\sigma^{t},$$ |  | (5) |

which holds for any $\sigma$ that satisfies $|\lambda\_{2}|<\sigma<1$ and for some constant $C\_{\sigma}$ that does not depend on $t$.
Therefore, the convergence to consensus is exponentially fast and the rate of convergence is inversely proportional to $\lambda\_{2}$.
Note that, in general, $\lambda\_{2}$ decreases with increasing network connectivity, and attains its minimum value at $0$ if, and only if, the underlying graph is fully-connected with a rank-one combination matrix.

### 2.1 Networked LLM agents

In this work, we evaluate LLM-based agents under the DeGroot framework.
For the graph topology, we use Erdős–Rényi random graphs with varying connectivity parameter $p$. In the Erdős–Rényi graph model $G(K,p)$, each possible directed edge between a pair of nodes is included independently with probability $p$. To ensure the networks constructed in this manner are highly likely to be connected, and also to avoid trivial cases with isolated agents, we use the following lower bound for $p$:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$p^{\star}\triangleq\dfrac{\ln{K}}{K},$$ |  | (6) |

where $p^{\star}$ is known to be the connectivity threshold. Specifically, an Erdős–Rényi random graph is known to be connected with high probability if $p>p^{\star}$ as $K\to\infty$ [[2](https://arxiv.org/html/2601.21540v1#bib.bib15)].
In addition to Erdős–Rényi random graphs, we also consider two extreme cases, a fully connected and a circular graph topology, to better examine the effect of network connectivity.

As in the DeGroot framework, communication networks are directed, weighted. The combination matrix’s weights (i.e., interaction weights and self-weights) are enforced through system prompts, which are provided to the LLMs repeatedly after each interaction round. Note that during an experiment, the graph combination matrix is held constant.
We create two kinds of agent characters depending on the self-weights:
Self-confident agents are instructed to rely more on their own previous opinions in comparison to open-minded agents.
The remaining weights, that is, the portion that is not assigned to the individual self-weights, is then distributed equally among the agent’s neighbors, as specified by the system prompt.

During the interactions, in addition to this system prompt, an agent’s own previous response and its neighboring agents’ responses are provided to it so that it can form its new opinion accordingly.
Moreover, during the initialization phase, each LLM agent starts with an initial opinion over a topic of discussion, which is also a debatable topic between humans over real social networks.
Agents are initially either for, neutral, or against the topic, and this stance is enforced through the initial prompt.

For our experiments, we utilize AutoGen [[23](https://arxiv.org/html/2601.21540v1#bib.bib17)], which is a programming framework for multi-agent applications.
To map LLM agents’ text responses to beliefs (i.e., opinion scores), we employ a separate LLM, independent of the agents’ interactions, to perform sentiment analysis.

## 3 Experiments

### 3.1 Implementation details

We now detail the settings used for the variables introduced above. We set $K=20$ and run $80$ interaction rounds, which we have empirically found to be sufficient for convergence.
We employ Google’s Gemini 2.0 Flash for conversation generation due to its cost efficiency and speed.

Initial opinions are drawn uniformly from {for, neutral, against}; agent types are drawn uniformly from {self-confident, open-minded}; and discussion topics are drawn uniformly from {Bitcoin, Euthanasia, Veganism, Vaping, Gene editing, Ghosting, C. Ronaldo, Remote Work}.
The communication graph is selected as follows: an Erdős–Rényi graph with probability $0.92$, a fully connected graph with probability $0.04$, and a circular graph (ring topology) with probability $0.04$.
For the Erdős–Rényi case, $p\in\bigl(0.15,\,0.35\bigr)$ with probability $0.9$, with the lower bound chosen according to ([6](https://arxiv.org/html/2601.21540v1#S2.E6 "In 2.1 Networked LLM agents ‣ 2 Problem Formulation ‣ Opinion Consensus Formation Among Networked Large Language Models")), and
$p\in(0.35,\,1)$ with probability $0.1$, since less connected graphs exhibit subtler convergence behavior.

All parameters, including initial and system prompts, graph topology, and agent responses are logged to a JSON file for each experiment, which can be found in the provided dataset and are used in the subsequent analyses. For sentiment analysis, we prompt OpenAI’s gpt-5-nano to assign an integer score in the range of $[-3,3]$, where $-3$ corresponds to “against” end and $3$ corresponds to “for” end.
These scores are also appended to the corresponding JSON files.
For all the following analyses in this paper, we use sentiment scores after normalizing them into the interval $[0,1]$.

### 3.2 Consensus across the agents

In order to investigate whether agents’ reach a consensus, we conduct $315$ experiments with self-confident and open-minded self weights enforced through system prompts (respectively $80\%$ and $60\%$), and use the standard deviation (STD) of agents’ sentiment scores as a measure of opinion deviation in each round of conversation. Figure [1](https://arxiv.org/html/2601.21540v1#S3.F1 "Figure 1 ‣ 3.2 Consensus across the agents ‣ 3 Experiments ‣ Opinion Consensus Formation Among Networked Large Language Models") shows that, for the discussion topic of “bitcoin”, the average STD across different experiments starts from around $0.4$, decreases exponentially (with coefficient of determination $R^{2}=0.965$), and approaches a steady state value close to $0.1$, demonstrating how disagreement between agents becomes negligible and a consensus is attained.

![Refer to caption](https://arxiv.org/html/2601.21540v1/image_time_std_new.png)


Figure 1: The average standard deviation of agents’ opinions with respect to the number of iterations across $50$ bitcoin-related experiments. The shaded region indicates the standard error of the mean (SEM) across $50$ simulations.

Moreover, in Table [1](https://arxiv.org/html/2601.21540v1#S3.T1 "Table 1 ‣ 3.2 Consensus across the agents ‣ 3 Experiments ‣ Opinion Consensus Formation Among Networked Large Language Models"), we report the average final STD across all simulations.
In order to reduce the effect of the noise during sentiment analysis, we take an agent’s average sentiment score over the last $10$ rounds as its final opinion.
It can be seen that the average final disagreement between the agents, namely STD $=0.083$, is almost negligible in the range of sentiment scores $[0,1]$.
Note that in these experiments, weights were assigned through the system prompts (hence the name weighted experiments).
We repeat the experiments by removing the self-weights assigned respectively to self-confident and open-minded agents in the system prompts.
Namely, we run $108$ “weightless” experiments, where we modify the system prompts so that even though there are still distinct self-confident / open-minded agents, specific self-weights are not assigned through the system prompts.
We observe that the weightless experiments exhibit a higher final diversity
($0.165\pm 0.008$ SEM) compared to the weighted experiments
($0.083\pm 0.004$ SEM).
The difference ($\Delta=0.082$) corresponds to $9.17$ standard errors of the
difference ($\mathrm{SE}\_{\Delta}=0.00894$), yielding a $p$-value $<0.001$ under the null hypothesis
($H\_{0}:\mu\_{\text{weightless}}=\mu\_{\text{weighted}}$), indicating a statistically significant increase in dispersion.
Therefore, we conclude that enforcing weights through system prompts can increase the chances of consensus in LLM-interactions.

Table 1: Average final disagreement of agents. Experiment types are based on if the system prompts include instructions about self-weights.

| Experiment Type | Average STD $\,\pm\,$ SEM |
| --- | --- |
| Weighted Experiments | $0.083\,\pm\,0.004$ |
| Weightless Experiments | $0.165\,\pm\,0.008$ |

Although we have found that agents reach a consensus, it is still not clear whether this is in line with the DeGroot consensus model.
To test the fit of the data to the DeGroot consensus, we compute the root mean squared error (RMSE) between final opinions of agents and the predicted consensus values according to ([3](https://arxiv.org/html/2601.21540v1#S2.E3 "In 2 Problem Formulation ‣ Opinion Consensus Formation Among Networked Large Language Models")).
This yields an average RMSE of $0.32$ which shows a significant mismatch between the two.
In addition, if the sentiment scores are discretized into {for, neutral, against} categories, the average classification accuracy based on the DeGroot model is $32\%$, same as random guessing accuracy of $33\%$.
A similar conclusion holds when the task is reduced to a binary classification between {for, against}. The accuracy here improves only to $60\%$, not significantly better than random guessing accuracy of $50\%$.
Collectively, these results show that the DeGroot model’s consensus prediction in ([3](https://arxiv.org/html/2601.21540v1#S2.E3 "In 2 Problem Formulation ‣ Opinion Consensus Formation Among Networked Large Language Models")) fails to capture the steady-state consensus beliefs observed in our experiments.

### 3.3 Topic-dependent bias in final opinion distribution

Observing that the agents typically exhibit consensus behavior but it mismatches with the DeGroot prediction in ([3](https://arxiv.org/html/2601.21540v1#S2.E3 "In 2 Problem Formulation ‣ Opinion Consensus Formation Among Networked Large Language Models")), in this section, we further investigate whether LLMs have an inherent and topic-dependent bias.
To that end, we run a total of $150$ experiments on “bitcoin” and “veganism” subjects.
We purposefully start these simulations with a high majority “for” or a high majority “against” initial opinion distribution, as demonstrated in the first column of Figure [2](https://arxiv.org/html/2601.21540v1#S3.F2 "Figure 2 ‣ 3.3 Topic-dependent bias in final opinion distribution ‣ 3 Experiments ‣ Opinion Consensus Formation Among Networked Large Language Models").
The corresponding final opinion distributions are given on the right column.

We see that in bitcoin-related experiments, the LLMs show an inherent negative bias: if they are initialized with against beliefs, they tend to stay like that, but if they are initialized with for beliefs, they can still change their opinions to against.
On the contrary, in veganism-related experiments, they have an inherent positive bias, as is evident from the final opinion distributions. Therefore, we find that the final opinion distributions show topic-dependent bias, even if these topics are also a part of the debate between humans. As other works suggested for factual-bias, the biases we observe can also be due to LLMs’ preference and biases obtained during pretraining and RL-based alignment phases.
Note that we observed cognitive biases in LLMs other than Gemini as well.

![Refer to caption](https://arxiv.org/html/2601.21540v1/image_4x2.png)


Figure 2: Left: Initial opinion distributions, Right: Final opinion distributions. Each row belongs to a set of experiments with a different topic and initial opinion distribution. For example, the first row denotes a set of experiments where the initial opinion distribution is highly skewed towards “for” on bitcoin sentiment, while for the second row, the initial majority is “against”. The error bars denote the SEM with respect to a total of $150$ experiments.

### 3.4 Impact of the communication graph

In this section, we analyze the effect of the communication topology on the opinion dynamics of LLMs.
First, we evaluate the effect of the connectivity parameter $p$ of Erdős–Rényi random graphs on the rate of convergence.
By definition, larger $p$ implies higher graph connectivity, and hence, we expect the convergence to be faster.
Figure [3](https://arxiv.org/html/2601.21540v1#S3.F3 "Figure 3 ‣ 3.4 Impact of the communication graph ‣ 3 Experiments ‣ Opinion Consensus Formation Among Networked Large Language Models") shows the disagreement between the opinions with respect to time, where each curve belongs to a specific interval of $p$-values.
We can see that higher $p$ associates with faster and stronger convergence, as expected.

![Refer to caption](https://arxiv.org/html/2601.21540v1/p_value.png)


Figure 3: Average standard deviation of agents’ opinions over interaction rounds for different values of Erdős–Rényi $p$. Each curve corresponds to a group of simulations within the indicated $p$ range, with $n$ denoting the number of experiments. Larger $p$ values result in faster convergence to the consensus with less disagreement.

Next, we turn our attention to the second-largest modulus eigenvalue $\lambda\_{2}$ of $A$ as a measure of convergence rate, as explained in Section [2](https://arxiv.org/html/2601.21540v1#S2 "2 Problem Formulation ‣ Opinion Consensus Formation Among Networked Large Language Models").
The eigenvalue $\lambda\_{2}$ is affected by the self-confidence weights of the agents in the combination matrix as well as different $p$ values.
Therefore, to have a wider range of $\lambda\_{2}$ values across experiments, we conduct $113$ additional experiments with self-confident self-weight also varying between $65\%$ and $90\%$.
According to ([5](https://arxiv.org/html/2601.21540v1#S2.E5 "In 2 Problem Formulation ‣ Opinion Consensus Formation Among Networked Large Language Models")), the disagreement of opinions decrease exponentially, with $\lambda\_{2}$ controlling the mixing rate.
In order to test whether this is also the case for LLM interactions, we compute the halving time of disagreement, that is, we compute the number of interaction rounds it takes for the standard deviation between discussing agents’ opinions halves compared to the initial standard deviation. Following the theory described in Sec. [2](https://arxiv.org/html/2601.21540v1#S2 "2 Problem Formulation ‣ Opinion Consensus Formation Among Networked Large Language Models"), we expect this quantity to be proportional to [[24](https://arxiv.org/html/2601.21540v1#bib.bib16)]:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$t\_{\frac{1}{2}}\triangleq\dfrac{\ln 2}{-\ln|\lambda\_{2}|}.$$ |  | (7) |

Figure [4](https://arxiv.org/html/2601.21540v1#S3.F4 "Figure 4 ‣ 3.4 Impact of the communication graph ‣ 3 Experiments ‣ Opinion Consensus Formation Among Networked Large Language Models") shows the mean of the empirical halving times as a function of $|\lambda\_{2}|$, as well as the function in ([7](https://arxiv.org/html/2601.21540v1#S3.E7 "In 3.4 Impact of the communication graph ‣ 3 Experiments ‣ Opinion Consensus Formation Among Networked Large Language Models")).
The empirical results closely match the theory, which indicates that LLM-networks’ convergence behavior follows the results from spectral graph theory.
In other words, although the Perron eigenvector–based average consensus in ([3](https://arxiv.org/html/2601.21540v1#S2.E3 "In 2 Problem Formulation ‣ Opinion Consensus Formation Among Networked Large Language Models")) does not align with the networked LLM simulations, the corresponding rate of convergence closely matches the experimental behavior.

![Refer to caption](https://arxiv.org/html/2601.21540v1/halving_time_new.png)


Figure 4: Halving time of disagreement between LLM agents, changing with respect to the second eigenvalue of the combination matrix. The eigenvalues are arranged into $30$ discrete bins, and the total number of experiments is $110$. The halving time shown on the y-axis is the mean across all experiments. SEM is denoted with bars around the mean. The dashed red curve shows the theoretical halving time.

## 4 Concluding Remarks

In this work, we constructed a dataset of LLM agents interacting over randomized network topologies, across diverse topics and prompting strategies. Sentiment analysis of these interactions revealed that while the agents do not conform to the DeGroot consensus model, consensus still emerges as the deviation of opinions decreases exponentially through interaction rounds. This consensus is strongly influenced by inherent, topic-dependent biases acquired during pretraining, and its strength increases when interaction weights are imposed through system prompts. Furthermore, we observed that both the convergence rate and consensus strength grow with higher Erdős–Rényi connectivity probabilities. The halving time of disagreement between agents was found to increase with the second-largest modulus eigenvalue of the graph combination matrix, and experimental results matched theoretical expectations based on spectral graph properties. Understanding the convergence rate of networked LLMs might be important for multi-agent system design, particularly in estimating the number of interaction rounds required for consensus under cost constraints. Though we qualitatively observed similar results with other LLMs than Gemini, further simulations could be done to explore other LLMs’ convergence behavior. Future work could also consider strategic agents with incentives or propaganda-sharing agents.

APPENDIX

## Appendix A Dataset Organization

This appendix describes the organization and directory structure of the
Social-LLM-Networks dataset, which is available on HuggingFace: https://huggingface.co/datasets/asl-epfl/Social-LLM-Networks.

The dataset consists of independent multi-agent experiments in which
networked LLM agents exchange opinions over a communication network. Each experiment is stored as a JSON file
and includes both the experimental parameters and the communication between agents. The dataset is organized hierarchically according to the LLM model used in the experiment (either Gemini or OpenAI), the experimental setting (main experiments or ablation studies), the discussion topic or the type of ablation. The overall structure of the repository is summarized in Figure [5](https://arxiv.org/html/2601.21540v1#A1.F5 "Figure 5 ‣ Appendix A Dataset Organization ‣ Opinion Consensus Formation Among Networked Large Language Models").

Social-LLM-Networksgemini2flashgpt5nanomainablation


–bitcoin
–euthanasia
–gene\_editing
ghosting
–remote\_work
–ronaldo
–vaping
–veganism

–biased\_start
–different\_selfweights
–weightless
–biased\_start


Figure 5: Organization of the Social-LLM-Networks repository.

### A.1 Directory

#### Gemini2Flash:

The gemini2flash directory contains experiments conducted using the
Gemini2Flash model. It is divided into two components:

- •

  main/: Contains the primary experimental runs, organized by
  discussion topic. Each topic subfolder (e.g., bitcoin,
  veganism) contains JSON files corresponding to different experiments on that topic.
- •

  ablation/: Contains 3 different types of studies:

  - –

    biased\_start/: Experiments with non-uniform
    initial opinion distributions. The majority of agents are initially for or initially against a given topic.
  - –

    different\_selfweights/: For each experiment, the self-confident agents’ self-weight is randomly selected to be between 65-90%.
  - –

    weightless/: Explicit self-weighting is removed from the prompts, but agents are still assigned characteristics (either open-minded or self-confident) through prompts.

#### GPT5Nano:

The gpt5nano directory contains experiments conducted using the
GPT5Nano model. This directory includes
a biased\_start/ subfolder, which can be compared with the biased initialization
experiments also performed for Gemini2Flash.

### A.2 JSON Experiment File Contents

Each JSON file represents one experiment run and includes the following information:

- •

  Communication network topology
- •

  A chronological sequence of agent responses
- •

  All system prompts and initial prompts
- •

  Topic of discussion
- •

  Initial opinions of agents on the given topic
- •

  Stance scores between 0 and 1 for each response. (0 indicates Against while 1 indicates For.)
- •

  Graph type
- •

  Erdos Renyi $p$ value
- •

  Self-confident self-weight
- •

  Number of interaction rounds
- •

  Total execution time of the experiment
- •

  AI model

## Appendix B Prompts

The system prompts provided to agents after each interaction round are provided in Figure [6](https://arxiv.org/html/2601.21540v1#A2.F6 "Figure 6 ‣ Appendix B Prompts ‣ Opinion Consensus Formation Among Networked Large Language Models").
The prompts which are used to assign initial opinions to agents are provided in Figure [7](https://arxiv.org/html/2601.21540v1#A2.F7 "Figure 7 ‣ Appendix B Prompts ‣ Opinion Consensus Formation Among Networked Large Language Models").

System Prompts (Agent Personalities)

Self-Confident
You are a person participating in a discussion about {Bitcoin}.
You are stubborn about your opinion and do not easily change it.
You are influenced by your own previous opinion with weight $0.80$
and by others’ opinions with weight $0.20$.
You form your new opinion accordingly.
Open-Minded
You are a person participating in a discussion about {Bitcoin}.
You are open-minded and frequently change your opinion based on others.
You take other participants’ opinions for granted.
You are influenced by your own previous opinion with weight $0.60$
and by others’ opinions with weight $0.40$.
You form your new opinion accordingly.


Figure 6: System prompts defining agent characteristics and opinion update behavior.


Initial Opinion Prompts

Against
I need you to impersonate someone who absolutely hates {Bitcoin}.
You are absolutely against and you hate {Bitcoin}. You HATE and detest {Bitcoin}.
Your initial opinion is: Absolutely against {Bitcoin}!
What do you think about {Bitcoin}. Keep your answer under 150 words. Do not exceed 150 words. State your opinion.
Neutral
I need you to impersonate someone who is neutral towards {Bitcoin}.
You are neither for nor against {Bitcoin}. You are completely neutral.
Your initial opinion is: absolutely neutral towards {Bitcoin}.
What do you think about {Bitcoin}.
Keep your answer under 150 words. Do not exceed 150 words. State your opinion.
For
I need you to impersonate a true {Bitcoin} lover. You are a huge lover of {Bitcoin}.
You absolutely LOVE {Bitcoin} and you are very very in favor of {Bitcoin}.
You LOVE {Bitcoin}. Act like you are a huge fan! Your initial opinion: Absolutely for {Bitcoin}.
What do you think about {Bitcoin}. Keep your answer under 150 words.
Do not exceed 150 words. State your opinion.


Figure 7: Initial system prompts used to assign initial opinions to agents for the discussion topic of {Bitcoin}.

## Acknowledgment

This work was performed while Iris Yazici was a visiting student at EPFL. The work of Mert Kayaalp was partially supported by UBS Switzerland AG and its affiliates through UBS-IDSIA AI Lab.

## References

- [1]
  D. Acemoglu and A. Ozdaglar (2011)
  Opinion dynamics and learning in social networks.
  Dynamic Games and Applications 1 (1), pp. 3–49.
  Cited by: [§1.1](https://arxiv.org/html/2601.21540v1#S1.SS1.p1.1 "1.1 Related Work ‣ 1 Introduction ‣ Opinion Consensus Formation Among Networked Large Language Models").
- [2]
  B. Bollobás (1998)
  Random graphs.
   Springer.
  Cited by: [§2.1](https://arxiv.org/html/2601.21540v1#S2.SS1.p1.2 "2.1 Networked LLM agents ‣ 2 Problem Formulation ‣ Opinion Consensus Formation Among Networked Large Language Models").
- [3]
  A. Borah, M. Houalla, and R. Mihalcea (2025)
  Mind the (belief) gap: group identity in the world of LLMs.
  In Proc. Annual Meeting of the Association for Computational Linguistics,
  Vol. , pp. 18441–18463.
  Cited by: [§1.1](https://arxiv.org/html/2601.21540v1#S1.SS1.p2.1 "1.1 Related Work ‣ 1 Introduction ‣ Opinion Consensus Formation Among Networked Large Language Models").
- [4]
  A. G. Chandrasekhar, H. Larreguy, and J. P. Xandri (2020)
  Testing models of social learning on networks: evidence from two experiments.
  Econometrica 88 (1), pp. 1–32.
  Cited by: [§1.1](https://arxiv.org/html/2601.21540v1#S1.SS1.p1.1 "1.1 Related Work ‣ 1 Introduction ‣ Opinion Consensus Formation Among Networked Large Language Models").
- [5]
  Y. Chuang, A. Goyal, N. Harlalka, S. Suresh, R. Hawkins, S. Yang, D. Shah, J. Hu, and T. T. Rogers (2023)
  Simulating opinion dynamics with networks of LLM-based agents.
  arXiv:2311.09618.
  Cited by: [§1.1](https://arxiv.org/html/2601.21540v1#S1.SS1.p3.1 "1.1 Related Work ‣ 1 Introduction ‣ Opinion Consensus Formation Among Networked Large Language Models").
- [6]
  J. Cisneros-Velarde (2025)
  Biases in opinion dynamics in multi-agent systems of LLMs.
  In Findings of the Association for Computational Linguistics,
  pp. 1889–1916.
  Cited by: [§1.1](https://arxiv.org/html/2601.21540v1#S1.SS1.p3.1 "1.1 Related Work ‣ 1 Introduction ‣ Opinion Consensus Formation Among Networked Large Language Models").
- [7]
  M. H. DeGroot (1974)
  Reaching a consensus.
  Journal of the American Statistical Association 69 (345), pp. 118–121.
  Cited by: [§1.1](https://arxiv.org/html/2601.21540v1#S1.SS1.p1.1 "1.1 Related Work ‣ 1 Introduction ‣ Opinion Consensus Formation Among Networked Large Language Models"),
  [§1](https://arxiv.org/html/2601.21540v1#S1.p1.1 "1 Introduction ‣ Opinion Consensus Formation Among Networked Large Language Models"),
  [§2](https://arxiv.org/html/2601.21540v1#S2.p1.1 "2 Problem Formulation ‣ Opinion Consensus Formation Among Networked Large Language Models").
- [8]
  P. M. Djurić and Y. Wang (2012)
  Distributed Bayesian learning in multiagent systems: improving our understanding of its capabilities and limitations.
  IEEE Signal Processing Magazine 29 (2), pp. 65–76.
  External Links: [Document](https://dx.doi.org/10.1109/MSP.2011.943495)
  Cited by: [§1](https://arxiv.org/html/2601.21540v1#S1.p1.1 "1 Introduction ‣ Opinion Consensus Formation Among Networked Large Language Models").
- [9]
  F. Ferraro, G. Mauro, and D. Pedreschi (2024)
  Agent-based modelling meets generative AI in social network simulations.
  arXiv: 2411.16031.
  Cited by: [§1.1](https://arxiv.org/html/2601.21540v1#S1.SS1.p2.1 "1.1 Related Work ‣ 1 Introduction ‣ Opinion Consensus Formation Among Networked Large Language Models").
- [10]
  R. A. Horn and C. R. Johnson (2012)
  Matrix analysis.
   Cambridge University Press.
  Cited by: [§2](https://arxiv.org/html/2601.21540v1#S2.p2.1 "2 Problem Formulation ‣ Opinion Consensus Formation Among Networked Large Language Models").
- [11]
  Y. Inan, M. Kayaalp, E. Telatar, and A. H. Sayed (2022)
  Social learning under randomized collaborations.
  In Proc. IEEE International Symposium on Information Theory (ISIT),
  Vol. , pp. 115–120.
  External Links: [Document](https://dx.doi.org/10.1109/ISIT50566.2022.9834621)
  Cited by: [§1.1](https://arxiv.org/html/2601.21540v1#S1.SS1.p1.1 "1.1 Related Work ‣ 1 Introduction ‣ Opinion Consensus Formation Among Networked Large Language Models"),
  [§1](https://arxiv.org/html/2601.21540v1#S1.p1.1 "1 Introduction ‣ Opinion Consensus Formation Among Networked Large Language Models").
- [12]
  M. O. Jackson (2008)
  Social and economic networks.
   Princeton University Press.
  Cited by: [§1](https://arxiv.org/html/2601.21540v1#S1.p4.1 "1 Introduction ‣ Opinion Consensus Formation Among Networked Large Language Models").
- [13]
  A. Jain and V. Krishnamurthy (2025)
  Interacting large language model agents. Bayesian social learning based interpretable models..
  IEEE Access.
  Cited by: [§1.1](https://arxiv.org/html/2601.21540v1#S1.SS1.p2.1 "1.1 Related Work ‣ 1 Introduction ‣ Opinion Consensus Formation Among Networked Large Language Models").
- [14]
  M. Kayaalp, V. Bordignon, and A. H. Sayed (2024)
  Social opinion formation and decision making under communication trends.
  IEEE Transactions on Signal Processing 72 (), pp. 506–520.
  External Links: [Document](https://dx.doi.org/10.1109/TSP.2023.3347918)
  Cited by: [§1.1](https://arxiv.org/html/2601.21540v1#S1.SS1.p1.1 "1.1 Related Work ‣ 1 Introduction ‣ Opinion Consensus Formation Among Networked Large Language Models"),
  [§1](https://arxiv.org/html/2601.21540v1#S1.p1.1 "1 Introduction ‣ Opinion Consensus Formation Among Networked Large Language Models").
- [15]
  V. Krishnamurthy and H. V. Poor (2013)
  Social learning and Bayesian games in multiagent signal processing: how do local and global decision makers interact?.
  IEEE Signal Processing Magazine 30 (3), pp. 43–57.
  Cited by: [§1](https://arxiv.org/html/2601.21540v1#S1.p1.1 "1 Introduction ‣ Opinion Consensus Formation Among Networked Large Language Models").
- [16]
  X. Li, Y. Xu, Y. Zhang, and E. C. Malthouse (2024)
  LLM-driven multi-agent simulation for news diffusion under different network structures.
  arXiv:2410.13909.
  Cited by: [§1.1](https://arxiv.org/html/2601.21540v1#S1.SS1.p2.1 "1.1 Related Work ‣ 1 Introduction ‣ Opinion Consensus Formation Among Networked Large Language Models").
- [17]
  M. Mobius, T. Phan, and A. Szeidl (2015)
  Treasure hunt: social learning in the field.
  Technical report
   National Bureau of Economic Research.
  Cited by: [§1.1](https://arxiv.org/html/2601.21540v1#S1.SS1.p1.1 "1.1 Related Work ‣ 1 Introduction ‣ Opinion Consensus Formation Among Networked Large Language Models").
- [18]
  M. Mueller-Frank and C. Neri (2013)
  Social learning in networks: theory and experiments.
  SSRN:2328281.
  Cited by: [§1.1](https://arxiv.org/html/2601.21540v1#S1.SS1.p1.1 "1.1 Related Work ‣ 1 Introduction ‣ Opinion Consensus Formation Among Networked Large Language Models").
- [19]
  S. U. Pillai, T. Suel, and S. Cha (2005)
  The Perron-Frobenius theorem: some of its applications.
  IEEE Signal Processing Magazine 22 (2), pp. 62–75.
  Cited by: [§2](https://arxiv.org/html/2601.21540v1#S2.p1.3 "2 Problem Formulation ‣ Opinion Consensus Formation Among Networked Large Language Models").
- [20]
  R. Salhab, A. Ajorlou, and A. Jadbabaie (2020)
  Social learning with sparse belief samples.
  In Proc. IEEE Conference on Decision and Control,
  Vol. , pp. 1792–1797.
  Cited by: [§1.1](https://arxiv.org/html/2601.21540v1#S1.SS1.p1.1 "1.1 Related Work ‣ 1 Introduction ‣ Opinion Consensus Formation Among Networked Large Language Models"),
  [§1](https://arxiv.org/html/2601.21540v1#S1.p1.1 "1 Introduction ‣ Opinion Consensus Formation Among Networked Large Language Models").
- [21]
  A. H. Sayed (2014)
  Adaptation, learning, and optimization over networks.
  Foundations and Trends in Machine Learning 7 (4–5), pp. 311–801.
  External Links: [Document](https://dx.doi.org/10.1561/2200000051)
  Cited by: [§1](https://arxiv.org/html/2601.21540v1#S1.p1.1 "1 Introduction ‣ Opinion Consensus Formation Among Networked Large Language Models"),
  [§2](https://arxiv.org/html/2601.21540v1#S2.p1.3 "2 Problem Formulation ‣ Opinion Consensus Formation Among Networked Large Language Models").
- [22]
  P. Törnberg, D. Valeeva, J. Uitermark, and C. Bail (2023)
  Simulating social media using large language models to evaluate alternative news feed algorithms.
  arXiv:2310.05984.
  Cited by: [§1.1](https://arxiv.org/html/2601.21540v1#S1.SS1.p2.1 "1.1 Related Work ‣ 1 Introduction ‣ Opinion Consensus Formation Among Networked Large Language Models").
- [23]
  Q. Wu, G. Bansal, J. Zhang, Y. Wu, B. Li, E. Zhu, et al. (2024)
  Autogen: enabling next-gen LLM applications via multi-agent conversations.
  In Proc. Conference on Language Modeling,
  Cited by: [§2.1](https://arxiv.org/html/2601.21540v1#S2.SS1.p4.1 "2.1 Networked LLM agents ‣ 2 Problem Formulation ‣ Opinion Consensus Formation Among Networked Large Language Models").
- [24]
  L. Xiao and S. Boyd (2003)
  Fast linear iterations for distributed averaging.
  In Proc. IEEE Conference on Decision and Control,
  Vol. 5, pp. 4997–5002.
  Cited by: [§1](https://arxiv.org/html/2601.21540v1#S1.p4.1 "1 Introduction ‣ Opinion Consensus Formation Among Networked Large Language Models"),
  [§3.4](https://arxiv.org/html/2601.21540v1#S3.SS4.p2.1 "3.4 Impact of the communication graph ‣ 3 Experiments ‣ Opinion Consensus Formation Among Networked Large Language Models").
