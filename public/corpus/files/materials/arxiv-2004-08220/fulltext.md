---
id: arxiv-2004-08220-text
type: material
title: 'Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data'
work_id: arxiv-2004-08220
source_url: https://arxiv.org/html/2004.08220v1
retrieved_at: '2026-10-27'
conversion: html_to_markdown
quality_note: Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять
  с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.
language: original
sha256_text: 15d6df84a4131bd14236bc81770b48bb7cde92f52493009e6f3ddf4d49c75574
---

> Источник: [https://arxiv.org/html/2004.08220v1](https://arxiv.org/html/2004.08220v1). Автоматическая HTML-конверсия; сохранность порядка текста, таблиц, формул и иллюстраций следует сверять с оригиналом. Ссылки на оригинальные рисунки приведены при наличии.

# Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data

Fernando E. Rosas
Thanks: F.R. and P.M. contributed equally to this work.
  
E-mail: pam83@cam.ac.uk, f.rosas@imperial.ac.uk
Affiliation: Center for Psychedelic Research, Department of Brain Science, Imperial College London, SW7 2DD, UK
Affiliation: Data Science Institute, Imperial College London, London SW7 2AZ, UK
Affiliation: Center for Complexity Science, Imperial College London, London SW7 2AZ, UK
  
Pedro A.M. Mediano
Thanks: F.R. and P.M. contributed equally to this work.
  
E-mail: pam83@cam.ac.uk, f.rosas@imperial.ac.uk
Affiliation: Department of Psychology, University of Cambridge, Cambridge CB2 3EB, UK
  
Henrik J. Jensen
Affiliation: Center for Complexity Science, Imperial College London, London SW7 2AZ, UK
Affiliation: Department of Mathematics, Imperial College London, London SW7 2AZ, UK
Affiliation: Institute of Innovative Research, Tokyo Institute of Technology, Yokohama 226-8502, Japan
  
Anil K. Seth
Affiliation: Sackler Center for Consciousness Science, Department of Informatics, University of Sussex, Brighton BN1 9RH, UK
Affiliation: CIFAR Azrieli Program on Brain, Mind, and Consciousness, Toronto M5G 1M1, Canada
  
Adam B. Barrett
Affiliation: Sackler Center for Consciousness Science, Department of Informatics, University of Sussex, Brighton BN1 9RH, UK
Affiliation: The Data Intensive Science Centre, Department of Physics and Astronomy, University of Sussex, Brighton BN1 9QH, UK
  
Robin L. Carhart-Harris
Affiliation: Center for Psychedelic Research, Department of Brain Science, Imperial College London, London SW7 2DD, UK
  
Daniel Bor
Affiliation: Department of Psychology, University of Cambridge, Cambridge CB2 3EB, UK

###### Abstract

The broad concept of *emergence* is instrumental in various of
the most challenging open scientific questions – yet, few quantitative
theories of what constitutes emergent phenomena have been proposed. This
article introduces a formal theory of causal emergence in multivariate systems,
which studies the relationship between the dynamics of parts of a system and
macroscopic features of interest. Our theory provides a quantitative definition
of *downward causation*, and introduces a complementary modality of
emergent behaviour – which we refer to as *causal decoupling*. Moreover,
the theory allows practical criteria that can be efficiently calculated in
large systems, making our framework applicable in a range of scenarios of
practical interest. We illustrate our findings in a number of case studies,
including Conway’s Game of Life, Reynolds’ flocking model, and neural activity
as measured by electrocorticography.

While most of our representations of the physical world are hierarchical, there
is still no agreement on how the co-existing “layers” of this hierarchy
interact. On the one hand, reductionism claims that all levels can
always be explained based on sufficient knowledge of the lowest scale and,
consequently – taking an intentionally extreme example – that a sufficiently
accurate theory of elementary particles should be able to predict the existence
of social phenomena like communism. On the other hand, emergentism
argues that there can be autonomy between layers, i.e. that some phenomena at
macroscopic layers might only be accountable in terms of other macroscopic
phenomena. While emergentism might seem to better serve our intuition, it is
not entirely clear how a rigorous theory of emergence could be formulated
within our modern scientific worldview, which tends to be dominated by
reductionist principles.

Emergent phenomena are usually characterised as either strong or
weak [[1](https://arxiv.org/html/2004.08220v1#bib.bib1)]. *Strong emergence* corresponds to the somewhat
paradoxical case of supervenient properties with irreducible causal
power [[2](https://arxiv.org/html/2004.08220v1#bib.bib2)]; i.e. properties that are fully determined by
microscopic levels but can nevertheless exert causal influences that are not
entirely accountable from microscopic considerations 1. Strong emergence
has been as much a cause of wonder as a perennial source of philosophical
headaches, being described as “uncomfortably like magic” while accused of
being logically inconsistent  [[2](https://arxiv.org/html/2004.08220v1#bib.bib2)] and sustained on
illegitimate metaphysics [[4](https://arxiv.org/html/2004.08220v1#bib.bib4)]. *Weak emergence* has been
proposed as a more docile alternative to strong emergence, where macroscopic
features have irreducible causal power in practice but not in principle. A
popular formulation of weak emergence is due to Bedau [[4](https://arxiv.org/html/2004.08220v1#bib.bib4)], and
corresponds to properties generated by elements at microscopic levels in such
complicated ways that they cannot be derived via explanatory shortcuts, but
only by exhaustive simulation. While this formulation is usually accepted by
the scientific community, it is not well-suited to address mereological
questions about emergence in scenarios where parts-whole relationships are the
primary interest.

Part of the difficulty in building a deeper understanding of strong emergence
is the absence of simple but clear analytical models that can serve the
community to guide discussions and mature theories. Efforts have been made to
introduce quantitative metrics of weak emergence [[5](https://arxiv.org/html/2004.08220v1#bib.bib5)],
which enable fine-grained data-driven alternatives to traditional all-or-none
classifications. In this vein, an attractive alternative comes from the work on
*causal emergence* introduced in Ref. [[6](https://arxiv.org/html/2004.08220v1#bib.bib6)] and later
developed in Refs. [[7](https://arxiv.org/html/2004.08220v1#bib.bib7), [8](https://arxiv.org/html/2004.08220v1#bib.bib8)], which showed that
macroscopic observables can sometimes exhibit more causal power (as understood
within the framework of Pearl’s do-calculus [[9](https://arxiv.org/html/2004.08220v1#bib.bib9)])
than microscopic variables. However, this framework relies on strong
assumptions that are rarely satisfied in practice, which severely hinders its
applicability 2.

Inspired by Refs. [[5](https://arxiv.org/html/2004.08220v1#bib.bib5), [6](https://arxiv.org/html/2004.08220v1#bib.bib6)], here we
introduce a practically useful and philosophically innocent framework to study
causal emergence in multivariate data. Building on previous
work [[11](https://arxiv.org/html/2004.08220v1#bib.bib11)], we take the perspective of an experimentalist who
has no prior knowledge of the underlying phenomenon of interest, but has
sufficient data of all relevant variables that allows an accurate statistical
description of the phenomenon. In this context, we put forward a formal
definition of causal emergence that doesn’t rely on coarse-graining functions
as Ref. [[6](https://arxiv.org/html/2004.08220v1#bib.bib6)], but addresses the “paradoxical”
properties of strong emergence based on the laws of information flow in
multivariate systems.

The main contribution of this work is to enable a rigorous, quantitative
definition of *downward causation*, and introduce a novel notion of
*causal decoupling* as a complementary modality of causal emergence.
Another contribution is to extend the domain of applicability of causal
emergence analyses to include cases of observational data, in which case
causality ought to be understood in the Granger sense, i.e. as predictive
ability [[12](https://arxiv.org/html/2004.08220v1#bib.bib12)]. Furthermore, our framework yields practical
criteria that can be effectively applied to large systems, bypassing
prohibitive estimation issues that severely restrict previous approaches.

The rest of this paper is structured as follows. First,
Section [I](https://arxiv.org/html/2004.08220v1#S1 "I Fundamental intuitions ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data") introduces some fundamental intuitions by discussing
minimal examples of emergence. Then, Section [II](https://arxiv.org/html/2004.08220v1#S2 "II A formal theory of causal emergence ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data") presents
the core of our theory, and Section [III](https://arxiv.org/html/2004.08220v1#S3 "III Measuring emergence ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data") discusses practical
methods to measure emergence from experimental data. Our framework is then
illustrated on a number of case studies, presented in
Section [IV](https://arxiv.org/html/2004.08220v1#S4 "IV Case studies ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data"). Finally, Section [V](https://arxiv.org/html/2004.08220v1#S5 "V Discussion ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data") concludes
the paper with a discussion of some of the implications of our findings.

## I Fundamental intuitions

To ground our intuitions, let us introduce minimal examples that embody a few
key notions of causally emergent behaviour. Throughout this section, we
consider systems composed of $n$ parts described by a binary vector $\bm{X}\_{t}=(X\_{t}^{1},\dots,X\_{t}^{n})\in\{0,1\}^{n}$, which undergo Markovian stochastic dynamics
following a transition probability $p\_{\bm{X}\_{t+1}|\bm{X}\_{t}}$. For simplicity,
we assume that at time $t$ the system is found in an entirely random
configuration (i.e. $p\_{\bm{X}\_{t}}(\bm{x}\_{t})=2^{-n}$). From there, we consider
three evolution rules.

Example 1: Consider a temporal evolution where the parity of $\bm{X}\_{t}$
is preserved with probability $\gamma\in(0,1)$. Mathematically,

|  |  |  |
| --- | --- | --- |
|  | $$p\_{\bm{X}\_{t+1}|\bm{X}\_{t}}(\bm{x}\_{t+1}|\bm{x}\_{t})=\begin{cases}\frac{\gamma}{2^{n-1}}&\small{\text{if }\oplus\_{j=1}^{n}x\_{t+1}^{j}=\oplus\_{j=1}^{n}x\_{t}^{j},}\\ \frac{1-\gamma}{2^{n-1}}&\small{\text{otherwise,}}\end{cases}$$ |  |

for all $t\in\mathbb{N}$, where $\oplus\_{j=1}^{n}a\_{j}\coloneqq 1$ if
$\sum\_{j=1}^{n}a\_{j}$ is even and zero otherwise. Put simply: $\bm{x}\_{t+1}$ is a
random sample from the set of all strings with the same parity as $\bm{x}\_{t}$
with probability $\gamma$; and is a sample from the strings with opposite
parity with probability $1-\gamma$.

This evolution rule has a number of interesting properties. First, the system
has a non-trivial causal structure, since some properties of the future state
(its parity) can be predicted from the past state. However, this structure is
noticeable *only* at the collective level, as no individual variable has
any predictive power over the evolution of itself or any other variable (see
Figure [1](https://arxiv.org/html/2004.08220v1#S1.F1 "Figure 1 ‣ I Fundamental intuitions ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data")). Furthermore, even the complete past of the system
$\bm{X}\_{t}$ has no predictive power over any individual future $X\_{t+1}^{j}$. This
case shows an extreme kind of causal emergence that we call “causal
decoupling,” in which the parity predicts its own evolution but no element (or
subset of elements) predicts the evolution of any other element.

Figure 1: Minimal examples of causally emergent dynamics. In Example 1
(*left*) the system’s parity tends to be preserved while no interactions
occur between low-level elements, which is an example of causal decoupling. In
Example 2 (*right*) the system’s parity determines one element only,
corresponding to downward causation.

Example 2: Consider now a system where the parity of $\bm{X}\_{t}$ determines
$X\_{t+1}^{1}$ (i.e. $X^{1}\_{t+1}=\oplus\_{i=1}^{n}X^{i}\_{t}$), and $X^{j}\_{t+1}$ for
$j\neq 1$ is a fair coin flip independent of $\bm{X}\_{t}$ (see
Figure [1](https://arxiv.org/html/2004.08220v1#S1.F1 "Figure 1 ‣ I Fundamental intuitions ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data")). In this scenario $\bm{X}\_{t}$ predicts $X\_{t+1}^{1}$ with
perfect accuracy, while it can be verified that $X\_{t}^{i}\mathchoice{\mathrel{\hbox to0.0pt{$\displaystyle\perp$\hss}\mkern 2.0mu{\displaystyle\perp}}}{\mathrel{\hbox to0.0pt{$\textstyle\perp$\hss}\mkern 2.0mu{\textstyle\perp}}}{\mathrel{\hbox to0.0pt{$\scriptstyle\perp$\hss}\mkern 2.0mu{\scriptstyle\perp}}}{\mathrel{\hbox to0.0pt{$\scriptscriptstyle\perp$\hss}\mkern 2.0mu{\scriptscriptstyle\perp}}}X\_{t+1}^{1}$
for all $i\in\{1,\dots,n\}$. Therefore, under this evolution rule the whole
system has a causal effect over a particular element, although this effect
cannot be attributed to any individual part 3, being a minimal example of downward causation.

Example 3: Let us now study an evolution rule that includes the
mechanisms of both Examples 1 and 2. Concretely, consider

|  |  |  |
| --- | --- | --- |
|  | $$p\_{\bm{X}\_{t+1}|\bm{X}\_{t}}(\bm{x}\_{t+1}|\bm{x}\_{t})=\begin{cases}0&\small{\text{if }x\_{t+1}^{1}\neq\oplus\_{j=1}^{n}x\_{t}^{j},}\\ \frac{\gamma}{2^{n-2}}&\small{\text{if }x\_{t+1}^{1}=\oplus\_{j=1}^{n}x\_{t}^{j}}\\ &\small{\text{and }\oplus\_{j=1}^{n}x\_{t+1}^{j}=\oplus\_{j=1}^{n}x\_{t}^{j},}\\ \frac{1-\gamma}{2^{n-2}}&\small{\text{otherwise.}}\end{cases}$$ |  |

As in Example 1, the parity of $\bm{X}\_{t}$ is transfered to $\bm{X}\_{t+1}$ with
probability $\gamma$; additionally, it is guaranteed that $X\_{t+1}^{1}=\oplus\_{i=1}^{n}X\_{t}^{i}$. Hence, in this case not only is there a macroscopic
effect that cannot be explained from the parts, but at the same time there is
another effect going from the whole to one of the parts. Importantly, both
effects *co-exist* independently of each other.

The above are minimal examples of dynamical laws that cannot be traced from the
interactions between their elementary components: Example 1 shows how a
collective property can propagate without interacting with its underlying
substrate; Example 2 how a collective property can influence the evolution of
specific parts; and Example 3 how these two kinds of phenomena take place in
the same system. All these issues are formalised by the theory developed in the
next section.

## II A formal theory of causal emergence

This section presents the main body of our theory of causal emergence. To fix
ideas, we consider a scientist measuring a system composed of $n$ parts. The
scientist is assumed to measure the system regularly over time, and the results
of those measurements are denoted by $\bm{X}\_{t}=(X\_{t}^{1},\dots,X\_{t}^{n})$, with
$X\_{t}^{i}\in\mathcal{X}\_{i}$ corresponding to the state of the
$i$th part at time $t\in\mathbb{N}$ with phase space
$\mathcal{X}\_{i}$. When referring to a collection of parts, we use the notation
$\bm{X}\_{t}^{\alpha}=(X\_{t}^{i\_{1}},\dots,X\_{t}^{i\_{K}})$ for $\alpha=\{i\_{1},\dots,i\_{K}\}\subset\{1,\dots,n\}$. We also use the shorthand notation
$[n]\coloneqq\{1,\dots,n\}$.

Our analysis considers two time points of the evolution of the system, denoted
as $t$ and $t^{\prime}$, with $t<t^{\prime}$. The corresponding dynamics are encoded in the
transition probability $p\_{\bm{X}\_{t^{\prime}}|\bm{X}\_{t}}(\bm{x}\_{t^{\prime}}|\bm{x}\_{t})$. We
consider features $V\_{t}\in\mathcal{V}$ generated via a conditional probability
$p\_{V\_{t}|\bm{X}\_{t}}$ that are *supervenient* on the underlying system; i.e.
that does not provide any predictive power for future states at times $t^{\prime}>t$ if
the complete state of the system at time $t$ is known with perfect precision.
We formalise this condition by requiring $V\_{t}$ to be statistically independent
of $\bm{X}\_{t^{\prime}}$ when $\bm{X}\_{t}$ is given (equivalently, that $V\_{t}-\bm{X}\_{t}-\bm{X}\_{t^{\prime}}$ form a Markov chain), for all $t^{\prime}>t$. This includes as
particular cases deterministic functions $F:\prod\_{j=1}^{n}\mathcal{X}\_{j}\to\mathcal{V}$ such that $V\_{t}=F(\bm{X}\_{t})$, as well as aggregate properties
affected by observational noise.

Figure 2: Diagram of causally emergent relationships. Causally emergent
features have predictive power beyond individual components. Downward causation
takes place when that predictive power refers to individual elements; causal decoupling
when it refers to itself or other high-order features.

### II.1 Partial information decomposition

Our theory is based on the *Partial Information Decomposition* (PID)
framework [[14](https://arxiv.org/html/2004.08220v1#bib.bib14)], which provides powerful tools to
reason about information in multivariate systems. In a nutshell, PID decomposes
the information that $n$ sources $\bm{X}=(X^{1},\dots,X^{n})$ provide about a
target variable $Y$ in terms of information atoms as follows:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$I(\bm{X};Y)=\sum\_{\bm{\alpha}\in\mathcal{A}}I\_{\partial}^{\bm{\alpha}}(\bm{X};Y)~,$$ |  | (1) |

with $\mathcal{A}=\{\{\alpha\_{1},\dots,\alpha\_{L}\}:\alpha\_{i}\subseteq[n],\alpha\_{i}\not\subset\alpha\_{j}\forall i,j\}$ being the
set of antichain collections [[14](https://arxiv.org/html/2004.08220v1#bib.bib14)]. Intuitively,
$I\_{\partial}^{\bm{\alpha}}$ for $\bm{\alpha}=\{\alpha\_{1},\dots,\alpha\_{L}\}$
represents the information that the collection of
variables $\bm{X}^{\alpha\_{1}},\dots,\bm{X}^{\alpha\_{L}}$ provide redundantly, but
their sub-collections don’t. For example, for $n=2$ source variables, $\bm{\alpha}=\{\{1\}\{2\}\}$ corresponds to the information about $Y$ that is provided
independently (and, hence, redundantly) by both of them, $\bm{\alpha}=\{\{i\}\}$ to the information provided uniquely by $X\_{i}$, and, most
interestingly, $\bm{\alpha}=\{\{12\}\}$ corresponds to the information
provided by both sources jointly but not separately – commonly referred to as
*informational synergy*.

One of the drawbacks of PID is that the number of atoms (i.e. the cardinality
of $\mathcal{A}$) grows super-exponentially with the number of sources, and
hence it is useful to coarse-grain the decomposition according to specific
criteria. Here we introduce the notion of *$k$th-order
synergy* between $n$ variables, which is calculated as

|  |  |  |
| --- | --- | --- |
|  | $$\textnormal{{Syn}}^{(k)}(\bm{X};Y)\coloneqq\sum\_{\bm{\alpha}\in\mathcal{S}^{(k)}}I\_{\partial}^{\bm{\alpha}}(\bm{X};Y)~,$$ |  |

with $\mathcal{S}^{(k)}=\big\{\{\alpha\_{1},\dots,\alpha\_{L}\}\in\mathcal{A}:\min\_{j}|\alpha\_{j}|>k\big\}$. Intuitively, $\texttt{Syn}^{(k)}(\bm{X};Y)$
corresponds to the information about the target that is provided by the whole
$\bm{X}$ but is not contained in any set of $k$ or less parts when considered
separately from the rest. Accordingly, $\mathcal{S}^{(k)}$ only contains
collections with groups of more than $k$ sources.

Similarly, we introduce the unique information of $\bm{X}^{\beta}$ with
$\beta\subset[n]$ with respect to sets of at most $k$ other variables, which
is calculated as

|  |  |  |
| --- | --- | --- |
|  | $$\textnormal{{Un}}^{(k)}(\bm{X}^{\beta};Y|\bm{X}^{-\beta})\coloneqq\sum\_{\bm{\alpha}\in\mathcal{U}^{(k)}(\beta)}I\_{\partial}^{\bm{\alpha}}(\bm{X};Y)~.$$ |  |

Above, $\mathcal{U}^{(k)}(\beta)=\{\bm{\alpha}\in\mathcal{A}:\beta\in\bm{\alpha},\forall\alpha\neq\beta\in\bm{\alpha},\alpha\subseteq[n]\setminus\beta,|\alpha|>k\}$, and $\bm{X}^{-\beta}$ being all the
variables in $\bm{X}$ whose indices are not in $\beta$. Put simply,
$\texttt{Un}^{(k)}(\bm{X}\_{t}^{\beta};Y|\bm{X}^{-\beta})$ represents the information
carried by $\bm{X}^{\beta}$ about $Y$ that no group of $k$ or less variables
within $\bm{X}^{-\bm{\beta}}$ has on its own. Note that these coarse-grained terms
can be used to build a general decomposition of $I(\bm{X},Y)$ described in
Appendix [A](https://arxiv.org/html/2004.08220v1#A1 "Appendix A Information decomposition in large multivariate systems ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data"), the properties of which are proven in
Appendix [B](https://arxiv.org/html/2004.08220v1#A2 "Appendix B Properties of high-order PI atoms ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data").

One peculiarity of PID is that it postulates the structure of information atoms
and the relations between them, but it does not prescribe a particular
functional form to compute $I\_{\partial}^{\bm{\alpha}}$ 4.
Please note that there have been multiple proposals for specific functional
forms of $I\_{\partial}^{\bm{\alpha}}$ in the PID literature; see e.g.
Refs. [[16](https://arxiv.org/html/2004.08220v1#bib.bib16), [17](https://arxiv.org/html/2004.08220v1#bib.bib17), [18](https://arxiv.org/html/2004.08220v1#bib.bib18), [19](https://arxiv.org/html/2004.08220v1#bib.bib19)].
A particular method for fully computing the information atoms based on a recent
PID [[20](https://arxiv.org/html/2004.08220v1#bib.bib20)] is discussed in
Sec. [III.2](https://arxiv.org/html/2004.08220v1#S3.SS2 "III.2 Measuring emergence via synergistic channels ‣ III Measuring emergence ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data").

Conveniently, our theory doesn’t rely on a specific functional form of PID, but
only on a few basic properties that are precisely formulated in
Appendix [B](https://arxiv.org/html/2004.08220v1#A2 "Appendix B Properties of high-order PI atoms ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data"). Therefore, the theory can be instantiated
using any PID – as long as those properties are satisfied. Importantly, as
shown in Section [III.1](https://arxiv.org/html/2004.08220v1#S3.SS1 "III.1 Practical criteria for large systems ‣ III Measuring emergence ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data"), the theory allows the derivation of
practical metrics that are valid independently of the PID chosen.

### II.2 Defining causal emergence

With the tools of PID at hand, now we introduce our formal definition of causal
emergence.

###### Definition 1.

For a system described by $\bm{X}\_{t}$, a supervenient feature $V\_{t}$
is said to exhibit causal emergence of order $k$ if

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\textnormal{{Un}}^{(k)}(V\_{t};\bm{X}\_{t^{\prime}}|\bm{X}\_{t})>0~.$$ |  | (2) |

Accordingly, causal emergence takes place when a supervenient feature $V\_{t}$ has
irreducible causal power, i.e. when it exerts causal influence that is
not mediated by any of the parts of the system. In other words, $V\_{t}$
represents some emergent collective property of the system if: 1) contains
information that is dynamically relevant (in the sense that it predicts the
future evolution of the system); and 2) this information is beyond what is
given by the groups of $k$ parts in the system when considered separately.

To better understand the implications of this definition, let us study some
of its basic properties.

###### Lemma 1.

Consider a feature $V\_{t}$ that exhibits causal emergence of order 1 over $\bm{X}\_{t}$. Then,

- (i)

  The dimensionality of the system satisfies $n\geq 2$.
- (ii)

  There exists no deterministic function $g(\cdot)$ such that $V\_{t}=g(X\_{t}^{j})$ for any $j=1,\dots,n$.

###### Proof.

See Appendix [C](https://arxiv.org/html/2004.08220v1#A3 "Appendix C Mathematical properties of causal emergence ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data").
∎

These two properties establish causal emergence as a *fundamentally
collective* phenomenon. In effect, property (i) states that causal emergence is
a property of multivariate systems, and property (ii) that $V\_{t}$ cannot have
emergent behaviour if it can be perfectly predicted from a single variable.

In order to use Definition [1](https://arxiv.org/html/2004.08220v1#Thmdefinition1 "Definition 1. ‣ II.2 Defining causal emergence ‣ II A formal theory of causal emergence ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data"), one needs a candidate
feature $V\_{t}$ to be tested. However, in some cases there are no obvious
candidates for an emergent feature, for which
Definition [1](https://arxiv.org/html/2004.08220v1#Thmdefinition1 "Definition 1. ‣ II.2 Defining causal emergence ‣ II A formal theory of causal emergence ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data") might seem problematic. Our next result
provides a criterion for the existence of emergent features based solely on the
system’s dynamics.

###### Theorem 1.

A system $\bm{X}\_{t}$ has a causally emergent feature of order $k$ if and only if

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\textnormal{{Syn}}^{(k)}(\bm{X}\_{t};\bm{X}\_{t^{\prime}})>0~.$$ |  | (3) |

###### Proof.

See Appendix [B](https://arxiv.org/html/2004.08220v1#A2 "Appendix B Properties of high-order PI atoms ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data").
∎

###### Corollary 1.

The following bound holds for any supervenient feature $V\_{t}$:
$\textnormal{{Un}}^{(k)}(V\_{t};\bm{X}\_{t^{\prime}}|\bm{X}\_{t})\leq\textnormal{{Syn}}^{(k)}(\bm{X}\_{t};\bm{X}\_{t^{\prime}})$.

This result shows that the capability of exhibiting emergence is closely
related to how synergistic the system components are with respect to their
future evolution. Importantly, this result enables us to determine whether or
not the system admits any emergent features by just inspecting the synergy
between its parts – *without knowing what those features might be*.
Conversely, this result also allows us to discard the existence of causal
emergence by checking a single condition: the lack of dynamical synergy.
Furthermore, Corollary [1](https://arxiv.org/html/2004.08220v1#Thmcorollary1 "Corollary 1. ‣ II.2 Defining causal emergence ‣ II A formal theory of causal emergence ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data") implies that the quantity
$\textnormal{{Syn}}^{(k)}(\bm{X}\_{t};\bm{X}\_{t^{\prime}})$ serves as a measure of
the *emergence capacity* of the system, as it upper-bounds the unique
information of all possible supervenient features.

Theorem [1](https://arxiv.org/html/2004.08220v1#Thmtheorem1 "Theorem 1. ‣ II.2 Defining causal emergence ‣ II A formal theory of causal emergence ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data") establishes a direct link between causal
emergence and the system’s statistics, avoiding the need for the observer to
propose a particular feature of interest. It is important to remark that the
emergence capacity of a system depends on the system’s partition into
microscopic elements 5. Therefore, emergence in the
context of our theory always refers to “emergence with respect to a given
microscopic partition.”

### II.3 A taxonomy of emergence

Our theory, so far, is able to detect *whether* there is emergence taking
place; the next step is to be able to characterise which kind of
emergence it is. For this purpose, we combine our feature-agnostic criterion of
emergence presented in Theorem [1](https://arxiv.org/html/2004.08220v1#Thmtheorem1 "Theorem 1. ‣ II.2 Defining causal emergence ‣ II A formal theory of causal emergence ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data") with Integrated
Information Decomposition, $\Phi$ID, a recent extension of PID to multi-target
settings [[22](https://arxiv.org/html/2004.08220v1#bib.bib22)].

Using $\Phi$ID, one can decompose a PID atom as

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$I\_{\partial}^{\bm{\alpha}}(\bm{X}\_{t};\bm{X}\_{t^{\prime}})=\sum\_{\bm{\beta}\in\mathcal{A}}I\_{\partial}^{\bm{\alpha}\rightarrow\bm{\beta}}(\bm{X}\_{t};\bm{X}\_{t^{\prime}})~.$$ |  | (4) |

For example, if $n=2$ then $I\_{\partial}^{\{1\}\{2\}\rightarrow\{1\}\{2\}}$
represents the information shared by both time series at both timesteps (for
example, when $X^{1}\_{t},X^{2}\_{t},X^{1}\_{t^{\prime}},X^{2}\_{t^{\prime}}$ are all copies of each other);
and $I\_{\partial}^{\{12\}\rightarrow\{1\}}$ corresponds to the synergistic causes
in $\bm{X}\_{t}$ that have a unique effect on $X^{1}\_{t^{\prime}}$ (for example, when $X^{1}\_{t^{\prime}}=X^{1}\_{t}\oplus X^{2}\_{t}$). More details and intuitions on $\Phi$ID can be found in
Ref. [[22](https://arxiv.org/html/2004.08220v1#bib.bib22)].

With the fine-grained decomposition provided by $\Phi$ID one can discriminate
between different kinds of synergies. In particular, we introduce the
*downward causation* and *causal decoupling indices of order $k$*,
denoted by $\mathcal{D}^{(k)}$ and $\mathcal{G}^{(k)}$ respectively, as

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  | $\displaystyle\mathcal{G}^{(k)}(\bm{X}\_{t};\bm{X}\_{t^{\prime}})\coloneqq$ | $\displaystyle\sum\_{\begin{subarray}{c}\bm{\alpha},\bm{\beta}\in\mathcal{S}^{(k)}\end{subarray}}I\_{\partial}^{\bm{\alpha}\rightarrow\bm{\beta}}(\bm{X}\_{t};\bm{X}\_{t^{\prime}})~,$ |  | (5) |
|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  | $\displaystyle\mathcal{D}^{(k)}(\bm{X}\_{t};\bm{X}\_{t^{\prime}})\coloneqq$ | $\displaystyle\sum\_{\begin{subarray}{c}\bm{\alpha}\in\mathcal{S}^{(k)}\\ \bm{\beta}\in\mathcal{A}\setminus\mathcal{S}^{(k)}\end{subarray}}I\_{\partial}^{\bm{\alpha}\rightarrow\bm{\beta}}(\bm{X}\_{t};\bm{X}\_{t^{\prime}})~.$ |  | (6) |

From these definitions and Eq. ([4](https://arxiv.org/html/2004.08220v1#S2.E4 "Equation 4 ‣ II.3 A taxonomy of emergence ‣ II A formal theory of causal emergence ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data")), one can verify that

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\texttt{Syn}^{(k)}(\bm{X}\_{t};\bm{X}\_{t^{\prime}})=\mathcal{G}^{(k)}(\bm{X}\_{t};\bm{X}\_{t^{\prime}})+\mathcal{D}^{(k)}(\bm{X}\_{t};\bm{X}\_{t^{\prime}})~.$$ |  | (7) |

Figure 3: Integrated Information Decomposition ($\Phi$ID). $\Phi$ID
lattice for $n=2$ time series [[22](https://arxiv.org/html/2004.08220v1#bib.bib22)], with downward ($\mathcal{D}$)
causation and causal decoupling ($\mathcal{G}$) terms highlighted.

Therefore, the emergence capacity of a system naturally decomposes in two
different components: information about $k$-plets of future variables, and
information about future collective properties beyond $k$-plets. The $\Phi$ID
atoms that belong to these two terms are illustrated within the $\Phi$ID
lattice for two time series in Figure [3](https://arxiv.org/html/2004.08220v1#S2.F3 "Figure 3 ‣ II.3 A taxonomy of emergence ‣ II A formal theory of causal emergence ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data"). The rest of this
section shows that $\mathcal{D}^{(k)}$ and $\mathcal{G}^{(k)}$ are natural
metrics of downward causation and causal decoupling, respectively.

#### II.3.1 Downward causation

Intuitively, downward causation occurs when collective properties have
irreducible causal power over individual parts. More formally:

###### Definition 2.

A supervenient feature $V\_{t}$ exhibits downward causation of order $k$ if, for
some $\alpha$ with $|\alpha|=k$:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\textnormal{{Un}}^{(k)}(V\_{t};\bm{X}\_{t^{\prime}}^{\alpha}|\bm{X}\_{t})>0~.$$ |  | (8) |

Note that, in contrast with Definition [1](https://arxiv.org/html/2004.08220v1#Thmdefinition1 "Definition 1. ‣ II.2 Defining causal emergence ‣ II A formal theory of causal emergence ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data"), downward
causation requires the feature $V\_{t}$ to have unique predictive power over the
evolution of specific subsets of the whole system. In particular, an emergent
feature $V\_{t}$ that has predictive power over e.g. $X\_{t^{\prime}}^{j}$ is said to exert
downward causation, as it predicts something about $X\_{t^{\prime}}^{j}$ that could not be
predicted from any particular $X\_{t}^{i}$ for $i\in[n]$. Put differently, in a
system with downward causation the whole has an effect on the parts that cannot
be reduced to low-level interactions. A minimal case of this is provided by
Example 2 in Section [I](https://arxiv.org/html/2004.08220v1#S1 "I Fundamental intuitions ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data").

Our next result formally relates downward causation with the index
$\mathcal{D}^{(k)}$ introduced in Eq. ([6](https://arxiv.org/html/2004.08220v1#S2.E6 "Equation 6 ‣ II.3 A taxonomy of emergence ‣ II A formal theory of causal emergence ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data")).

###### Theorem 2.

A system $\bm{X}\_{t}$ admits features that exert downward causation of order $k$ iff
$\mathcal{D}^{(k)}(\bm{X}\_{t};\bm{X}\_{t^{\prime}})>0$.

###### Proof.

See Appendix [C](https://arxiv.org/html/2004.08220v1#A3 "Appendix C Mathematical properties of causal emergence ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data").
∎

#### II.3.2 Causal decoupling

In addition to downward causation, causal decoupling takes place when
collective properties have irreducible causal power over other collective
properties. In technical terms:

###### Definition 3.

A supervenient feature $V\_{t}$ is said to exhibit causal decoupling of
order $k$ if

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\textnormal{{Un}}^{(k)}(V\_{t};V\_{t^{\prime}}|\bm{X}\_{t},\bm{X}\_{t^{\prime}})>0~.$$ |  | (9) |

Furthermore, $V\_{t}$ is said to have pure causal decoupling if
$\textnormal{{Un}}^{(k)}(V\_{t};\bm{X}\_{t^{\prime}}|\bm{X}\_{t})>0$ and
$\textnormal{{Un}}^{(k)}(V\_{t};\bm{X}^{\alpha}\_{t^{\prime}}|\bm{X}\_{t})=0$ for all
$\alpha\subset[n]$ with $|\alpha|=k$. Finally, a system is said to be
perfectly decoupled if all the emergent features exhibit pure causal
decoupling.

Above, the term $\textnormal{{Un}}^{(k)}(V\_{t};V\_{t^{\prime}}|\bm{X}\_{t},\bm{X}\_{t^{\prime}})$ refers
to information that $V\_{t}$ and $V\_{t^{\prime}}$ share that cannot be found in any
microscopic element, either at time $t$ or $t^{\prime}$. Note that features that
exhibit causal decoupling could still exert influence over the evolution of
individual elements, while features that exhibit pure decoupling cannot. In
effect, the condition $\textnormal{{Un}}(V\_{t};X^{j}\_{t^{\prime}}|\bm{X}\_{t})=0$
implies that the high-order causal effect does not affect any particular part
– only the system as a whole. Interestingly, a feature that exhibits pure
causal decoupling can be thought of as having “a life of its own;” a sort of
*statistical ghost*, that perpetuates itself over time without any
individual part of the system influencing or being influenced by it. The
system’s parity, in the first example of Sec. [I](https://arxiv.org/html/2004.08220v1#S1 "I Fundamental intuitions ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data"), constitutes a
simple example of perfect causal decoupling.

We close this section by formally establishing the connection between causal
decoupling and the index $\mathcal{G}^{(k)}$ introduced in
Eq. ([5](https://arxiv.org/html/2004.08220v1#S2.E5 "Equation 5 ‣ II.3 A taxonomy of emergence ‣ II A formal theory of causal emergence ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data")).

###### Theorem 3.

A system possesses features that exhibit causal decoupling if and only if
$\mathcal{G}^{(k)}(\bm{X}\_{t};\bm{X}\_{t^{\prime}})>0$. Additionally, the system is
perfectly decoupled if $\mathcal{G}^{(k)}(\bm{X}\_{t};\bm{X}\_{t^{\prime}})>0$ and
$\mathcal{D}^{(k)}(\bm{X}\_{t};\bm{X}\_{t^{\prime}})=0$.

###### Proof.

See Appendix [C](https://arxiv.org/html/2004.08220v1#A3 "Appendix C Mathematical properties of causal emergence ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data").
∎

## III Measuring emergence

This section explores methods to operationalise the framework presented in the
previous section. We discuss two approaches: first,
Section [III.1](https://arxiv.org/html/2004.08220v1#S3.SS1 "III.1 Practical criteria for large systems ‣ III Measuring emergence ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data") introduces sufficiency criteria that are
practical for use in large systems; then,
Section [III.2](https://arxiv.org/html/2004.08220v1#S3.SS2 "III.2 Measuring emergence via synergistic channels ‣ III Measuring emergence ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data") illustrates how further considerations
can be made if one adopts a specific method of computing $\Phi$ID atoms. The
latter approach provides accurate discrimination at the cost of being
data-intensive and hence only applicable to small systems; the former can be
computed in large systems and its results hold independently of the chosen PID,
but is vulnerable to misdetections (i.e. false negatives).

### III.1 Practical criteria for large systems

While theoretically appealing, our proposed framework suffers from the
challenge of estimating joint probability distributions over many random
variables, and the computation of the $\Phi$ID atoms themselves. As an
alternative, we consider approximation techniques that do not require the
adoption of any particular PID or $\Phi$ID function and are data-efficient,
since they are based on pairwise distributions only.

As practical criteria to measure causal emergence of order $k$, we introduce
the quantities $\Psi\_{t,t^{\prime}}^{(k)}$, $\Delta\_{t,t^{\prime}}^{(k)}$, and
$\Gamma\_{t,t^{\prime}}^{(k)}$. For simplicity, we write here the special case $k=1$,
and provide full formulae for arbitrary $k$ and accompanying proofs in
Appendix [D](https://arxiv.org/html/2004.08220v1#A4 "Appendix D Mathematical properties of emergence criteria ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data"):

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  | | | | |
|  | $\displaystyle\Psi\_{t,t^{\prime}}^{(1)}(V)$ | $\displaystyle\coloneqq I(V\_{t};V\_{t^{\prime}})-\sum\_{j}I(X\_{t}^{j};V\_{t^{\prime}})~,$ |  | (10a) |
|  | $\displaystyle\Delta\_{t,t^{\prime}}^{(1)}(V)$ | $\displaystyle\coloneqq\max\_{j}\left(I(V\_{t};X^{j}\_{t^{\prime}})-\sum\_{i}I(X\_{t}^{i};X^{j}\_{t^{\prime}})\right)~,$ |  | (10b) |
|  | $\displaystyle\Gamma\_{t,t^{\prime}}^{(1)}(V)$ | $\displaystyle\coloneqq\max\_{j}I(V\_{t};X\_{t^{\prime}}^{j})~.$ |  | (10c) |

Our next result links these quantities with the formal definitions in
Section [II](https://arxiv.org/html/2004.08220v1#S2 "II A formal theory of causal emergence ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data"), showing their value as practical criteria to
detect causal emergence.

###### Proposition 1.

$\Psi\_{t,t^{\prime}}^{(k)}(V)>0$ is a sufficient condition for $V\_{t}$ to be causally
emergent. Similarly, $\Delta\_{t,t^{\prime}}^{(k)}(V)>0$ is a sufficient condition for
$V\_{t}$ to exhibit downward causation. Finally, $\Psi\_{t,t^{\prime}}^{(k)}(V)>0$ and
$\Gamma\_{t,t^{\prime}}^{(k)}(V)=0$ is sufficient for causal decoupling.

###### Proof.

See Appendix [D](https://arxiv.org/html/2004.08220v1#A4 "Appendix D Mathematical properties of emergence criteria ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data").
∎

Although calculating whether a system has emergent features via
Proposition [1](https://arxiv.org/html/2004.08220v1#Thmtheorem1 "Theorem 1. ‣ II.2 Defining causal emergence ‣ II A formal theory of causal emergence ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data") may be computationally challenging, if one
has a candidate feature $V$ one believes may be emergent, one can compute the
simple quantities in Eqs. ([10](https://arxiv.org/html/2004.08220v1#S3.EGx2 "Equation 10 ‣ III.1 Practical criteria for large systems ‣ III Measuring emergence ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data")) which depend only on
standard mutual information and bivariate marginals, and scales linearly with
system size (for $k=1$). These quantities are easy to compute and test for
significance using standard information-theoretic
tools [[23](https://arxiv.org/html/2004.08220v1#bib.bib23), [24](https://arxiv.org/html/2004.08220v1#bib.bib24)]. Moreover, the outcome of
these measures is valid for any choice of PID and $\Phi$ID that is compatible
with the properties specified in Appendix [B](https://arxiv.org/html/2004.08220v1#A2 "Appendix B Properties of high-order PI atoms ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data").

In a broader context, $\Psi\_{t,t^{\prime}}^{(k)}$ and $\Delta\_{t,t^{\prime}}^{(k)}$ belong to
the same *whole-minus-sum* family of measures as the interaction
information [[25](https://arxiv.org/html/2004.08220v1#bib.bib25), [14](https://arxiv.org/html/2004.08220v1#bib.bib14)], the
redundancy-synergy index [[26](https://arxiv.org/html/2004.08220v1#bib.bib26)] and, more recently, the
O-information $\Omega$ [[27](https://arxiv.org/html/2004.08220v1#bib.bib27)] – which cannot measure
synergy by itself, but only the balance between synergy and redundancy. In
practice, this means that if there is redundancy in the system it will be
harder to detect emergence, since redundancy will drive $\Psi\_{t,t^{\prime}}^{(k)}$ and
$\Delta\_{t,t^{\prime}}^{(k)}$ more negative. Furthermore, by summing all marginal
mutual informations (e.g. $I(X\_{t}^{j};V\_{t^{\prime}})$ in the case of
$\Psi\_{t,t^{\prime}}^{(1)}$), these measures effectively *double-count* redundancy
up to $n$ times, further penalising the criteria. This problem of
double-counting can be avoided if one is willing to commit to a particular PID
or $\Phi$ID function, as we show next.

### III.2 Measuring emergence via synergistic channels

This section leverages recent work on information decomposition reported in
Ref. [[20](https://arxiv.org/html/2004.08220v1#bib.bib20)], and presents a way of directly measuring the
emergence capacity and the indices of downward causation and causal decoupling.
The key takeaway of this section is that if one adopts a particular $\Phi$ID,
then it is possible to evaluate $\mathcal{D}^{(k)}$ and $\mathcal{G}^{(k)}$
directly, providing a direct route to detect emergence without
double-counting redundancy, as the methods introduced in
Section [III.1](https://arxiv.org/html/2004.08220v1#S3.SS1 "III.1 Practical criteria for large systems ‣ III Measuring emergence ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data") do. Moreover, additional properties may
become available due to the characteristics of the particular $\Phi$ID chosen.

Let us first introduce the notion of $k$-synergistic channels: mappings $p\_{V|\bm{X}}$ that convey information about $\bm{X}$ but not about any of the parts
$\bm{X}^{\alpha}$ for all $|\alpha|=k$. The set of all $k$-synergistic channels
is denoted by

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\mathcal{C}\_{k}(\bm{X})=\bigg\{p\_{V|\bm{X}}\>\bigg|\>V\mathchoice{\mathrel{\hbox to0.0pt{$\displaystyle\perp$\hss}\mkern 2.0mu{\displaystyle\perp}}}{\mathrel{\hbox to0.0pt{$\textstyle\perp$\hss}\mkern 2.0mu{\textstyle\perp}}}{\mathrel{\hbox to0.0pt{$\scriptstyle\perp$\hss}\mkern 2.0mu{\scriptstyle\perp}}}{\mathrel{\hbox to0.0pt{$\scriptscriptstyle\perp$\hss}\mkern 2.0mu{\scriptscriptstyle\perp}}}\bm{X}^{\alpha},\forall\alpha\subseteq[n],|\alpha|=k\bigg\}.$$ |  | (11) |

A variable $V$ generated via a $k$-synergistic channel is said to be a
$k$-synergistic observable.

With this definition, we can consider the $k$th-order synergy
to be the maximum information extractable from a $k$-synergistic channel:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\texttt{Syn}^{(k)}\_{\star}(\bm{X}\_{t};\bm{X}\_{t^{\prime}})\coloneqq\sup\_{\begin{subarray}{c}p\_{V|\bm{X}\_{t}}\in\mathcal{C}\_{k}(\bm{X}\_{t}):\\ V-\bm{X}\_{t}-\bm{X}\_{t^{\prime}}\end{subarray}}I(V;\bm{X}\_{t^{\prime}})~.$$ |  | (12) |

This idea can be naturally extended to the case of causal decoupling by
requiring synergistic channels at both sides, i.e.

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\mathcal{G}^{(k)}\_{\star}(\bm{X}\_{t};\bm{X}\_{t^{\prime}})\coloneqq\sup\_{\begin{subarray}{c}p\_{V|\bm{X}\_{t}}\in\mathcal{C}\_{k}(\bm{X}\_{t}),\\ p\_{U|\bm{X}\_{t^{\prime}}}\in\mathcal{C}\_{k}(\bm{X}\_{t^{\prime}}):\\ V-\bm{X}\_{t}-\bm{X}\_{t^{\prime}}-U\end{subarray}}I(V;U)~.$$ |  | (13) |

Finally, the downward causation index can be computed from the difference

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\mathcal{D}^{(k)}\_{\star}(\bm{X}\_{t};\bm{X}\_{t^{\prime}})\coloneqq\texttt{Syn}^{(k)}\_{\star}(\bm{X}\_{t};\bm{X}\_{t^{\prime}})-\mathcal{G}^{(k)}\_{\star}(\bm{X}\_{t};\bm{X}\_{t^{\prime}})~.$$ |  | (14) |

Note that $\texttt{Syn}^{(k)}\_{\star}\geq\mathcal{G}^{(k)}\_{\star}$, which is a
direct consequence of the data processing inequality applied on $V-\bm{X}\_{t}-\bm{X}\_{t^{\prime}}-U$, and therefore $\mathcal{D}\_{\star}^{(k)},\mathcal{G}\_{\star}^{(k)}\geq 0$.

By exploiting the properties of this specific way of measuring synergy, one can
prove the following result. For this, let us say that a feature $V\_{t}$ is
auto-correlated if $I(V\_{t};V\_{t^{\prime}})>0$.

###### Proposition 2.

If $\bm{X}\_{t}$ is stationary, all auto-correlated $k$-synergistic observables are
$k$th-order emergent.

###### Proof.

See Appendix [D](https://arxiv.org/html/2004.08220v1#A4 "Appendix D Mathematical properties of emergence criteria ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data").
∎

In summary, $\mathcal{D}^{(k)}\_{\star}$ and $\mathcal{G}^{(k)}\_{\star}$ provide
data-driven tools to test – and possibly reject – hypotheses about emergence
in scenarios of interest. Efficient algorithms to compute these quantities are
discussed in Ref. [[28](https://arxiv.org/html/2004.08220v1#bib.bib28)]. Although current implementations
allow only relatively small systems, this line of thinking shows that future
advances in PID might make the computation of emergence indices more scalable,
avoiding the limitations of Eqs. ([10](https://arxiv.org/html/2004.08220v1#S3.EGx2 "Equation 10 ‣ III.1 Practical criteria for large systems ‣ III Measuring emergence ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data")).

## IV Case studies

Let us summarise our results so far. We began by formulating a rigorous
definition of emergent features based on PID (Section [II.2](https://arxiv.org/html/2004.08220v1#S2.SS2 "II.2 Defining causal emergence ‣ II A formal theory of causal emergence ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data")), and
then used $\Phi$ID to break down the emergence capacity into the causal
decoupling and downward causation indices (Section [II.3](https://arxiv.org/html/2004.08220v1#S2.SS3 "II.3 A taxonomy of emergence ‣ II A formal theory of causal emergence ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data")).
Although these are not straightforward to compute, the $\Phi$ID framework
allows us to formulate readily computable sufficiency conditions
(Section [III.1](https://arxiv.org/html/2004.08220v1#S3.SS1 "III.1 Practical criteria for large systems ‣ III Measuring emergence ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data")). This section illustrates the usage of those
conditions in various case studies.

### IV.1 Canonical examples of putative emergence

Here we present an evaluation of our practical criteria for emergence
(Proposition [1](https://arxiv.org/html/2004.08220v1#Thmproposition1 "Proposition 1. ‣ III.1 Practical criteria for large systems ‣ III Measuring emergence ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data")) in two well-known systems: Conway’s Game
of Life (GoL) [[29](https://arxiv.org/html/2004.08220v1#bib.bib29)], and Reynolds’ flocking boids
model [[30](https://arxiv.org/html/2004.08220v1#bib.bib30)]. Both are widely regarded as paradigmatic
examples of emergent behaviour, and have been thoughtfully studied in the
complexity and artificial life literature [[31](https://arxiv.org/html/2004.08220v1#bib.bib31)].
Accordingly, we use these models as test cases for our methods. Technical
details of the simulations are provided in Appendix [E](https://arxiv.org/html/2004.08220v1#A5 "Appendix E Simulation details ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data").

#### IV.1.1 Conway’s Game of Life

A well-known feature of GoL is the presence of *particles*: coherent,
self-sustaining structures known to be responsible for information transfer and
modification [[32](https://arxiv.org/html/2004.08220v1#bib.bib32)]. These particles have been the object of
extensive study, and detailed taxonomies and classifications
exist [[31](https://arxiv.org/html/2004.08220v1#bib.bib31), [33](https://arxiv.org/html/2004.08220v1#bib.bib33)].

To test the emergent properties of particles, we simulate the evolution of
15x15 square cell arrays, which we regard as a binary vector $\bm{X}\_{t}\in\{0,1\}^{n}$ with $n=225$. As initial condition, we consider configurations that
correspond to a “particle collider” setting, with two particles of known type
facing each other (Figure [4](https://arxiv.org/html/2004.08220v1#S4.F4 "Figure 4 ‣ IV.1.1 Conway’s Game of Life ‣ IV.1 Canonical examples of putative emergence ‣ IV Case studies ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data")). In each trial, the system is
randomised by changing the position, type, and relative displacement of the
particles. After an intial configuration has been selected, the well-known GoL
evolution rule [[29](https://arxiv.org/html/2004.08220v1#bib.bib29)] is applied 1000 times, leading to a final
state $\bm{X}\_{t^{\prime}}$ 6.

Figure 4: Causal emergence in Conway’s Game of Life. The system is
initialised in a “particle collider” setting, and run until a stable
configuration is reached after the collision. Using particle type as a
supervenient feature $V$, we find the system meets our practical criterion
for causal emergence.

To use the criteria from Eqs. [10](https://arxiv.org/html/2004.08220v1#S3.EGx2 "Equation 10 ‣ III.1 Practical criteria for large systems ‣ III Measuring emergence ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data"), we need to choose a
candidate emergent feature $V\_{t}$. In this case, we consider a symbolic,
discrete-valued vector that encodes the type of particle(s) present in the
board. Specifically, we consider $\bm{V}\_{t}=(V\_{t}^{1},\dots,V\_{t}^{L})$, where $V\_{t}^{j}=1$ iff there is a particle of type $j$ at time $t$ – regardless of its
position or orientation.

With these variables, we compute the quantities in Eqs. [10](https://arxiv.org/html/2004.08220v1#S3.EGx2 "Equation 10 ‣ III.1 Practical criteria for large systems ‣ III Measuring emergence ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data")
using Bayesian estimators of mutual information [[35](https://arxiv.org/html/2004.08220v1#bib.bib35)]. The
result is that, as expected, the criterion for causal emergence is met with
$\Psi^{(1)}\_{t,t^{\prime}}(V)=0.58\pm 0.02$. Furthermore, we found that
$\Gamma^{(1)}\_{t,t^{\prime}}(V)=0.009\pm 0.0002$, which is orders of magnitude
smaller than $I(V\_{t};V\_{t^{\prime}})=0.99\pm 0.02$. Using
Proposition [1](https://arxiv.org/html/2004.08220v1#Thmproposition1 "Proposition 1. ‣ III.1 Practical criteria for large systems ‣ III Measuring emergence ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data"), these two results suggest that particle
dynamics in GoL may not only be emergent, but causally decoupled with respect
to their substrate.

#### IV.1.2 Reynolds’ flocking model

As a second test case, we consider Reynolds’ model of flocking behaviour. This
model is composed by *boids* (bird-oid objects), with each boid
represented by three numbers: its position in 2D space and its heading angle.
As candidate feature for emergence, we use the 2D coordinates of the center of
mass of the flock, following Seth [[5](https://arxiv.org/html/2004.08220v1#bib.bib5)].

In this model boids interact with one another following three rules, each
regulated by a scalar parameter [[5](https://arxiv.org/html/2004.08220v1#bib.bib5)]:

- •

  aggregation ($a\_{1}$), as they fly towards the center of the flock;
- •

  avoidance ($a\_{2}$), as they fly away from their closest neighbour; and
- •

  alignment ($a\_{3}$), as they align their flight direction to that of their neighbours.

Following Ref. [[5](https://arxiv.org/html/2004.08220v1#bib.bib5)], we study small flocks of $N=10$ boids
with different parameter settings to showcase some properties of our practical
criterion of emergence. Note that this study is meant as an illustration of the
proposed theory, and not as a thorough exploration of the flocking model, for
which a vast literature exists (see e.g. the work of
Vicsek [[36](https://arxiv.org/html/2004.08220v1#bib.bib36)] and references therein).

Figure [5](https://arxiv.org/html/2004.08220v1#S4.F5 "Figure 5 ‣ IV.1.2 Reynolds’ flocking model ‣ IV.1 Canonical examples of putative emergence ‣ IV Case studies ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data") shows the results of a parameter sweep over the
avoidance parameter, $a\_{2}$, while keeping $a\_{1}$ and $a\_{3}$ fixed. When there is
no avoidance, boids orbit around a slowly-moving center of mass, in what could
be called an ordered regime. Conversely, for high values of $a\_{2}$ neighbour
repulsion is too strong for lasting flocks to form, and isolated boids spread
across the space avoiding one another. For intermediate values, the center of
mass traces a smooth trajectory, as flocks form and disintegrate. In line
with the findings of Seth [[5](https://arxiv.org/html/2004.08220v1#bib.bib5)], our criterion indicates
that the flock exhibits causally emergent behaviour in this intermediate range.

Figure 5: Causal emergence in the flocking boids model. As the
avoidance parameter is increased, the flock transitions from an attractive
regime (in which all boids orbit regularly around a stable center of mass),
to a repulsive one (in which boids spread across space and no flocking is
visible). a) Our criterion $\Psi$ detects causal emergence in an
intermediate range of the avoidance parameter. b) Sample trajectories
of boids (grey) and their center of mass (red).

![Refer to caption](https://arxiv.org/html/2004.08220v1/MonkeyFigure.png)


Figure 6: Causal emergence in motor behaviour of an awake macaque
monkey. a) Position of electrocorticogram (ECoG) electrodes used in
the recording (in blue) overlaid on an image of the macaque’s left hemisphere
(front of the brain towards the top of the page). b) Sample time
series from the 64-channel ECoG recordings used, which correspond to the system
of interest $\bm{X}\_{t}\in\mathbb{R}^{64}$. c) 3D position of the
macaques’s wrist, as measured by motion capture (blue)
and as predicted by the regression model (orange),
taken as a supervenient feature $V\_{t}\in\mathbb{R}^{3}$. d) Our
emergence criterion yields $\Psi^{(1)}\_{t,t^{\prime}}(V)>0$, detecting causal
emergence of the behaviour with respect to the ECoG sources. Original data and
image from Ref. [[37](https://arxiv.org/html/2004.08220v1#bib.bib37)] and the
[Neurotycho](https://www.neurotycho.org) database.

By studying separately the two terms that make up $\Psi$ we found that the
criterion of emergence fails for both low and high $a\_{2}$, but for different
reasons (see Figure [5](https://arxiv.org/html/2004.08220v1#S4.F5 "Figure 5 ‣ IV.1.2 Reynolds’ flocking model ‣ IV.1 Canonical examples of putative emergence ‣ IV Case studies ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data")). In effect, for high $a\_{2}$ the
self-predictability of the center of mass (i.e. $I(V\_{t};V\_{t^{\prime}})$) is low; while
for low $a\_{2}$ it is high, yet lower than the mutual information from individual
boids (i.e. $\sum\_{i}^{n}I(X\_{t}^{i};V\_{t^{\prime}})$). These results suggest that the
low-avoidance scenario is dominated not by a reduction in synergy, but by an
increase in redundancy, which effectively increases the synergy threshold
needed to detect emergence. However, note that, due to the limitations of the
criterion, the fact that $\Psi^{(1)}\_{t,t^{\prime}}<0$ is inconclusive and does not
rule out the possibility of emergence. This is a common limitation of
whole-minus-sum estimators like $\Psi$; further refinements may provide bounds
that are less susceptible to these issues and perform accurately in these
scenarios.

### IV.2 Mind from matter: Emergence, behaviour, and neural dynamics

A tantalising outcome of having a formal theory of emergence is the capability
of bringing a quantitative angle to the archetype of emergence: the mind-matter
relationship [[38](https://arxiv.org/html/2004.08220v1#bib.bib38), [39](https://arxiv.org/html/2004.08220v1#bib.bib39)].
As a first step in this direction, we conclude this section with an application of
our emergence criteria to neurophysiological data.

We study simultaneous electrocorticogram (ECoG) and motion capture (MoCap) data
of Japanese macaques performing a reaching task [[37](https://arxiv.org/html/2004.08220v1#bib.bib37)], obtained
from the online [Neurotycho](https://www.neurotycho.org) database. Note that the
MoCap data cannot be assumed to be a supervenient feature of the available ECoG
data, since it doesn’t satisfy the conditional independence conditions required
by our definition of supervenience (see Sec. [II](https://arxiv.org/html/2004.08220v1#S2 "II A formal theory of causal emergence ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data"))
 7. Instead, we focus on the portion of neural activity encoded
in the ECoG signal that is relevant to predict the macaque’s behaviour, and
conjecture this information to be an emergent feature of the underlying neural
activity (Fig. [6](https://arxiv.org/html/2004.08220v1#S4.F6 "Figure 6 ‣ IV.1.2 Reynolds’ flocking model ‣ IV.1 Canonical examples of putative emergence ‣ IV Case studies ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data")).

To test this hypothesis, we take the neural activity (as measured by 64 ECoG
channels distributed across the left hemisphere) to be the system of interest,
and consider a memoryless predictor of the 3D coordinates of the macaque’s
right wrist based on the ECoG signal. Therefore, in this scenario $\bm{X}\_{t}\in\mathbb{R}^{64}$ and $V\_{t}=F(\bm{X}\_{t})\in\mathbb{R}^{3}$. To build $V\_{t}$,
we used Partial Least Squares (PLS) and a Support Vector Machine (SVM)
regressor, the details of which can be found in Appendix [F](https://arxiv.org/html/2004.08220v1#A6 "Appendix F ECoG preprocessing and decoding ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data").

After training the decoder and evaluating on a held-out test set, results show
that $\Psi>0$, confirming our conjecture that the motor-related information
is an emergent feature of the macaque’s cortical activity. For short timescales
($t^{\prime}-t=8\,\mathrm{ms}$), we find $\Gamma\_{t,t^{\prime}}^{(1)}(V)=0.049\pm 0.002$,
which is orders of magnitude smaller than $\Psi\_{t,t^{\prime}}^{(1)}(V)=1.275\pm 0.002$, suggesting that the behaviour may have an important component decoupled
from individual ECoG channels. Furthermore, the emergence criterion is met for
multiple timescales $t^{\prime}-t$ of up to $\approx 0.2\,\mathrm{s}$, beyond which the
predictive power in $V\_{t}$ and individual electrodes decrease and become nearly
identical.

This analysis, while just a proof of concept, helps us quantify how and to what
extent behaviour emerges from collective neural activity; and opens the door to
further tests and quantitative empirical explorations of the mind-matter
relationship.

## V Discussion

A large fraction of the modern scientific literature considers strong emergence
to be impossible or ill-defined. This judgement is not fully unfounded: a
property that is simultaneously supervenient (i.e. that can be computed from
the state of the system) and that has irreducible causal power (i.e. that
“tells us something” that the parts don’t) can indeed seem to be an
oxymoron [[4](https://arxiv.org/html/2004.08220v1#bib.bib4)]. Nonetheless, by linking supervenience to static
and causal power to dynamical properties, our framework shows that these two
phenomena are perfectly compatible within the – admittedly counterintuitive –
laws of multivariate information dynamics [[22](https://arxiv.org/html/2004.08220v1#bib.bib22)], providing a
tentative solution to this paradox.

Our theory of causal emergence is about predictive power, not
“explicability” [[41](https://arxiv.org/html/2004.08220v1#bib.bib41)], and therefore is not related to
views on strong emergence such as Chalmers’ [[41](https://arxiv.org/html/2004.08220v1#bib.bib41)].
Nevertheless, our framework embraces aspects that are commonly associated with
strong emergence -- such as downward causation -- and renders them
quantifiable. Our framework also does not satisfy conventional definitions of
weak emergence 8, but is compatible with more general notions of weak emergence,
e.g. the one introduced by Seth (see Sec. [V.3](https://arxiv.org/html/2004.08220v1#S5.SS3 "V.3 Relationship with other quantitative theories of emergence ‣ V Discussion ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data")). Hence, our theory
can be seen as an attempt at reconciling these approaches [[39](https://arxiv.org/html/2004.08220v1#bib.bib39)],
showing how “strong” a “weak” framework can be.

An important consequence of our theory is the fundamental connection
established between causal emergence and statistical synergy: the system’s
capacity to host emergent features was found to be determined by how
synergistic its elements are with respect to their future evolution. Although
previous ideas about synergy have been loosely linked to emergence in the
past [[43](https://arxiv.org/html/2004.08220v1#bib.bib43)], this is (to the best of our knowledge) the
first time such ideas have been formally laid out and quantified using recent
advances in multivariate information theory.

Next, we examine a few caveats regarding the applicability of the proposed
theory, its relation with prior work, and some open problems.

### V.1 Scope of the theory

Our theory focuses on *synchronic* [[44](https://arxiv.org/html/2004.08220v1#bib.bib44)] aspects of
emergence, analysing the interactions between the elements of dynamical systems
and collective properties of them as they jointly evolve over time. As such,
our theory directly applies to any system with well-defined dynamics, including
systems described by deterministic dynamical systems with random initial
conditions [[11](https://arxiv.org/html/2004.08220v1#bib.bib11)] and stochastic systems described by
Fokker-Planck equations [[45](https://arxiv.org/html/2004.08220v1#bib.bib45)]. In contrast, the application
of our theory to systems in thermodynamic equilibrium may not be
straightforward, as their dynamics are often not uniquely specified by the
corresponding Gibbs distributions 9. Finding principled approaches to guide the
application of our theory to those cases is an interesting challenge for future
studies.

In addition, given the breadth of the concept of “emergence,” there are a
number of other theories leaning more towards philosophy that are orthogonal to
our framework. This includes, for example, theories of emergence as
radical novelty (in the sense of features not previously observed in
the system) [[47](https://arxiv.org/html/2004.08220v1#bib.bib47)], most prominently encapsulated in the
aphorism ‘‘more is different’’ by Anderson 10, and also articulated in the work of
Kauffman [[49](https://arxiv.org/html/2004.08220v1#bib.bib49), [50](https://arxiv.org/html/2004.08220v1#bib.bib50)]. Also,
contextual emergence emphasises a role for macro-level contexts that
cannot be described at the micro-level, but which impose constraints on the
micro-level for the emergence of the
macro [[51](https://arxiv.org/html/2004.08220v1#bib.bib51), [52](https://arxiv.org/html/2004.08220v1#bib.bib52)]. These are
valuable philosophical positions, which have been studied from a statistical
mechanics perspective in
Ref. [[53](https://arxiv.org/html/2004.08220v1#bib.bib53), [51](https://arxiv.org/html/2004.08220v1#bib.bib51)]. Future work shall
attempt to unify these other approaches with our proposed framework.

### V.2 Causality

The de facto way to assess the causal structure of a system is to
analyse its response to controlled interventions or to build intervention
models (causal graphs) based on expert knowledge, which leads to the well-known
do-calculus spearheaded by Judea Pearl [[9](https://arxiv.org/html/2004.08220v1#bib.bib9)]. This
approach is, unfortunately, not applicable in many scenarios of interest, as
interventions may incur prohibitive costs or even be impossible, and expert
knowledge may not be available. These scenarios can still be assessed via the
Wiener-Granger theory of statistical causation, which studies the
blueprint of predictive power across the system of interest by accounting
non-mediated correlations between past and future
events [[12](https://arxiv.org/html/2004.08220v1#bib.bib12)]. Both frameworks provide similar results when
all the relevant variables have been measured, but can neverthelss differ
radically when there are unobserved interacting
variables [[9](https://arxiv.org/html/2004.08220v1#bib.bib9)]. The debate between the Wiener-Granger and
the Pearl schools has been discussed in other related contexts – see e.g.
Refs. [[54](https://arxiv.org/html/2004.08220v1#bib.bib54), [55](https://arxiv.org/html/2004.08220v1#bib.bib55)] for a discussion regarding
Integrated Information Theory (IIT), and Ref. [[56](https://arxiv.org/html/2004.08220v1#bib.bib56)] for a
discussion about effective and functional connectivity in the context of
neuroimaging time series analysis 11.

In our theory, the main object of analysis is Shannon’s mutual information,
$I(\bm{X}\_{t};\bm{X}\_{t^{\prime}})$, which depends on the joint probability distribution $p\_{\bm{X}\_{t},\bm{X}\_{t^{\prime}}}$. The origin of this distribution (whether it was obtained by passive
observation or by active intervention) will change the interpretation of the
quantities presented above, and will speak differently to the Pearl and the
Wiener-Granger schools of thought; some of the implications of these
differences are addressed when discussing Ref. [[6](https://arxiv.org/html/2004.08220v1#bib.bib6)]
below. Nonetheless, since both methods of obtaining $p\_{\bm{X}\_{t},\bm{X}\_{t^{\prime}}}$ allow
synergy to take place, our results are in principle applicable in both
frameworks – which allows us to formulate our theory of causal emergence
without taking a rigid stance on a theory of causality itself.

### V.3 Relationship with other quantitative theories of emergence

This work is part of a broader movement towards formalising theories of
complexity through information theory. In particular, our framework is most
directly inspired by the work of Seth [[5](https://arxiv.org/html/2004.08220v1#bib.bib5)] and Hoel
*et al.* [[6](https://arxiv.org/html/2004.08220v1#bib.bib6)], and also related to recent work by
Chang *et al.* [[58](https://arxiv.org/html/2004.08220v1#bib.bib58)]. This section gives a brief
account of these theories, and discusses how they differ from our proposal.

Seth [[5](https://arxiv.org/html/2004.08220v1#bib.bib5)] proposes that a process $V\_{t}$ is Granger-emergent
(or G-emergent) with respect to $\bm{X}\_{t}$ if two conditions are met: (i)
$V\_{t}$ is autonomous with respect to $\bm{X}\_{t}$ (i.e. $I(V\_{t};V\_{t^{\prime}}|\bm{X}\_{t})>0$), and
(ii) $V\_{t}$ is G-caused by $\bm{X}\_{t}$ (i.e. $I(\bm{X}\_{t};V\_{t^{\prime}}|V\_{t})>0$). The latter
condition is employed to guarantee a relationship between $\bm{X}\_{t}$ and $V\_{t}$; in
our framework an equivalent role is taken by the requirement of supervenience.
The condition of autonomy is certainly related with our notion of causal
decoupling. However, as shown in Ref. [[14](https://arxiv.org/html/2004.08220v1#bib.bib14)], the
conditional mutual information conflates unique and synergistic information,
which can give rise to undesirable situations: for example, it could be that
$I(V\_{t};V\_{t^{\prime}}|\bm{X}\_{t})>0$ while, at the same time, $I(V;V\_{t^{\prime}})=0$, meaning
that the dynamics of the feature $V\_{t}$ are only visible when considering it
together with the full system $\bm{X}\_{t}$, but not on its own. Our framework avoids
this problem by refining this criterion via PID, and uses only the unique
information for the definition of emergence.

Our work is also strongly influenced by the framework put forward by Hoel and
colleagues in Ref. [[6](https://arxiv.org/html/2004.08220v1#bib.bib6)]. Their approach is based on a
coarse-graining function $F(\cdot)$ relating a feature of interest to the
system, $V\_{t}=F(\bm{X}\_{t})$, which is a particular case of our more general
definition of supervenience. Emergence is declared when the dependency between
$V\_{t}$ and $V\_{t^{\prime}}$ is “stronger” than the one between $\bm{X}\_{t}$ and $\bm{X}\_{t^{\prime}}$. Note
that $V\_{t}-\bm{X}\_{t}-\bm{X}\_{t^{\prime}}-V\_{t^{\prime}}$ is a Markov chain, and hence $I(V\_{t};V\_{t^{\prime}})\leq I(\bm{X}\_{t};\bm{X}\_{t^{\prime}})$ due to the data processing inequality; therefore, a direct
usage of Shannon’s mutual information would make the above criterion impossible
to fulfill. Instead, this framework focuses on the transition probabilities
$p\_{V\_{t^{\prime}}|V\_{t}}$ and $p\_{\bm{X}\_{t^{\prime}}|\bm{X}\_{t}}$, and hence the mutual information
terms are computed using maximum entropy distributions instead of the
stationary marginals. By doing this, Hoel et al. account not for what
the system *actually does*, but for all the potential transitions the
system *could do*. However, in our view this approach is not well-suited
to assess dynamical systems, as it might account for transitions that are never
actually explored 12. Additionally, this
framework relies on having exact knowledge about the microscopic transitions as
encoded by $p\_{\bm{X}\_{t^{\prime}}|\bm{X}\_{t}}$, which is not possible to obtain in most
applications.

Finally, Chang *et al.* [[58](https://arxiv.org/html/2004.08220v1#bib.bib58)] consider supervenient
variables that are “non-trivially informationally closed” (NTIC) to their
corresponding microscopic substrate. NTIC is based on a division of $\bm{X}\_{t}$ into
a subsystem of interest, $\bm{X}\_{t}^{\alpha}$, and its “environment” given by
$\bm{X}\_{t}^{-\alpha}$. Interestingly, a system being NTIC requires $V\_{t}$ to be
supervenient only with respect to $\bm{X}\_{t}^{\alpha}$ (i.e. $V\_{t}=F(\bm{X}\_{t}^{\alpha})$),
as well as information flow from the environment to the feature (i.e.
$I(\bm{X}\_{t}^{-\alpha};V\_{t^{\prime}})>0$) mediated by the feature itself, so that
$\bm{X}\_{t}-V\_{t}-V\_{t^{\prime}}$ is a Markov chain. Hence, NTIC requires features that are
sufficient statistics for their own dynamics, which is akin to our concept of
causal decoupling but focused on the interaction between a macroscopic feature,
an agent, and its environment. Extending our framework to agent-environment
systems involved in active inference is part of our future work.

### V.4 Limitations and open problems

The framework presented in this paper focuses on features from fully observable
systems with Markovian dynamics. These assumptions, however, often do not hold
when dealing with experimental data – especially in biological and social
systems. As an important extension, future work should investigate the effect
of unobserved variables on our measures. This could be done, for example,
leveraging Taken’s embedding
theorem [[60](https://arxiv.org/html/2004.08220v1#bib.bib60), [61](https://arxiv.org/html/2004.08220v1#bib.bib61)] or other
methods [[62](https://arxiv.org/html/2004.08220v1#bib.bib62)].

An interesting feature of our framework is that, although it depends on the
choice of PID and $\Phi$ID, its practical application via the criteria
discussed in Section [III.1](https://arxiv.org/html/2004.08220v1#S3.SS1 "III.1 Practical criteria for large systems ‣ III Measuring emergence ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data") is agnostic to those choices.
However, they incur the cost of a limited sensitivity to detect emergence due
to an overestimation of the microscopic redundancy; so they can detect
emergence when it is substantial, but might miss it in more subtle cases.
Additionally, these criteria are unable to rule out emergence, as they are
sufficient but not necessary conditions. Therefore, another avenue of future
work should search for improved practical criteria for detecting emergence from
data. One interesting line of research is providing scalable approximations for
$\texttt{Syn}\_{\star}^{(k)}$ and $\mathcal{G}\_{\star}^{(k)}$ as introduced in
Section [III.2](https://arxiv.org/html/2004.08220v1#S3.SS2 "III.2 Measuring emergence via synergistic channels ‣ III Measuring emergence ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data"), which could be computed in large
systems.

Another open question is how the emergence capacity is affected by changes in
the microscopic partition of the system (c.f. Section [II.2](https://arxiv.org/html/2004.08220v1#S2.SS2 "II.2 Defining causal emergence ‣ II A formal theory of causal emergence ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data")).
Interesting applications of this includes scenarios where elements of interest
have been subject to a mixing process, such as the case of
electroencephalography where each electrode detects a mixture of brain sources.
Other interesting questions include studying systems with non-zero emergence
capacity for all reasonable microscopic partitions, which may correspond to a
stronger type of emergence.

## VI Conclusion

This paper introduces a quantitative definition of causal emergence, which
addresses the apparent paradox of supervenient macroscopic features with
irreducible causal power using principles of multivariate statistics. We
provide a formal, quantitative theory that embodies many of the
principles attributed to strong emergence, while being measurable and
compatible with the established scientific worldview. Perhaps the most
important contribution of this work is to bring the discussion of emergence
closer to the realm of quantitative, empirical scientific investigation,
complementing the ongoing philosophical inquiries on the subject.

Mathematically, the theory is based on the Partial Information Decomposition
(PID) framework [[14](https://arxiv.org/html/2004.08220v1#bib.bib14)], and on a recent extension,
Integrated Information Decomposition ($\Phi$ID) [[22](https://arxiv.org/html/2004.08220v1#bib.bib22)]. The
theory allows the derivation of sufficiency criteria for the detection of
emergence that are scalable, easy to compute from data, and based only on
Shannon’s mutual information. We illustrated the use of these practical
criteria in three case studies, and concluded that: i) particle collisions are
an emergent feature in Conway’s Game of Life, ii) flock dynamics are an
emergent feature of simulated birds; and iii) the representation of motor
behaviour in the cortex is emergent from neural activity. Our theory, together
with these practical criteria, enables novel data-driven tools for
scientifically addressing conjectures about emergence in a wide range of
systems of interest.

Our original aim in developing this theory, beyond the contribution to
complexity theory, is to help bridge the gap between the mental and the
physical, and ultimately understand how mind emerges from matter. This paper
provides formal principles to explore the idea that psychological phenomena
could emerge from collective neural patterns, and interact with each other
dynamically in a causally decoupled fashion – perhaps akin to the
“statistical ghosts” mentioned in Section [II.3.2](https://arxiv.org/html/2004.08220v1#S2.SS3.SSS2 "II.3.2 Causal decoupling ‣ II.3 A taxonomy of emergence ‣ II A formal theory of causal emergence ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data"). Put simply:
just as particles in the Game of Life have their own collision rules, we wonder
if thought patterns could have their own emergent dynamical laws, operating at
a larger scale with respect to their underlying neural
substrate 13. Importantly, the theory presented in this paper not
only provides conceptual tools to frame this conjecture rigorously, but also
provides practical tools to test it from data. The exploration of this
conjecture is left as an exciting avenue for future research.

## Acknowledgements

The authors thank Shamil Chandaria, Matthew Crosby, Martin Biehl and Acer Chang
for insightful discussions, and the creators of the Neurotycho database for
opening to the public such a valuable resource. P.M. and D.B. are funded by the
Wellcome Trust (grant no. 210920/Z/18/Z). F.R. is supported by the Ad Astra
Chandaria foundation. A.K.S. and A.B.B. are grateful to the Dr. Mortimer and
Theresa Sackler Foundation, which supports the Sackler Centre for Consciousness
Science.

## Appendix A Information decomposition in large multivariate systems

Figure 7: Coarse-grained partial information decomposition of order
$k$. (*left*) Standard PID lattice for $n=3$, shown for reference.
Node labels are omitted from the other lattices for clarity. *(middle)*
Coarse-graining for $k=1$, superimposed on the PID lattice. (*right*)
Coarse-graining for $k=2$. For both values of $k$, Lemma [2](https://arxiv.org/html/2004.08220v1#Thmlemma2 "Lemma 2. ‣ Appendix A Information decomposition in large multivariate systems ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data")
guarantees that the $k$th-order atoms provide an exact
decomposition of mutual information.

To formulate our theory of causal emergence for arbitrary order $k$, in
Sec. [II.1](https://arxiv.org/html/2004.08220v1#S2.SS1 "II.1 Partial information decomposition ‣ II A formal theory of causal emergence ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data") we introduced definitions of $k$th-order
synergy and unique information. In this appendix we complement these with a
matching definition of $k$th-order redundancy, and show that
these provide a full-fledged information decomposition for any $k=\{1,\dots,n-1\}$. For completeness, we present all definitions and examples
here – including those that were necessary for the exposition of the main text
and were previously presented in Sec. [II.1](https://arxiv.org/html/2004.08220v1#S2.SS1 "II.1 Partial information decomposition ‣ II A formal theory of causal emergence ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data").

We begin by (re-)introducing the notion of $k$th-order
synergy between $n$ variables, defined as

|  |  |  |
| --- | --- | --- |
|  | $$\textnormal{{Syn}}^{(k)}(\bm{X};Y)\coloneqq\sum\_{\bm{\alpha}\in\mathcal{S}^{(k)}}I\_{\partial}^{\bm{\alpha}}(\bm{X};Y)~,$$ |  |

with $\mathcal{S}^{(k)}=\{\{\alpha\_{1},\dots,\alpha\_{L}\}\in\mathcal{A}:|\alpha\_{j}|>k,\forall j=1,\dots,L\}$. Intuitively, $\texttt{Syn}^{(k)}(\bm{X};Y)$ corresponds to the information about the target that is provided by the
whole $\bm{X}$ but is not contained in any set of $k$ or less parts when
considered separately from the rest. Accordingly, $\mathcal{S}^{(k)}$ only
contains collections of more than $k$ sources. For example, for $n=2$ we obtain
the standard synergy $\mathcal{S}^{(1)}=\{\{12\}\}$, and for $n=3$ we have
$\mathcal{S}^{(1)}=\{\{12\}\mathchar 59\penalty\hskip 0.0pt\{13\}\mathchar 59\penalty\hskip 0.0pt\{23\}\mathchar 59\penalty\hskip 0.0pt\{12\}\{13\}\mathchar 59\penalty\hskip 0.0pt\{12\}\{23\}\mathchar 59\penalty\hskip 0.0pt\{13\}\{23\}\mathchar 59\penalty\hskip 0.0pt\{12\}\{13\}\{23\}\mathchar 59\penalty\hskip 0.0pt\{123\}\}$.

Similarly, the $k$th-order unique information of $\bm{X}^{\beta}$ with $\beta\subset[n]$ is calculated as

|  |  |  |
| --- | --- | --- |
|  | $$\textnormal{{Un}}^{(k)}(\bm{X}^{\beta};Y|\bm{X}^{-\beta})\coloneqq\sum\_{\bm{\alpha}\in\mathcal{U}^{(k)}(\beta)}I\_{\partial}^{\bm{\alpha}}(\bm{X};Y)~,$$ |  |

with $\mathcal{U}^{(k)}(\beta)=\{\bm{\alpha}\in\mathcal{A}:\beta\in\bm{\alpha},\forall\alpha\in\bm{\alpha}\setminus\beta,\alpha\subseteq[n]\setminus\beta,|\alpha|>k\}$, and $\bm{X}^{-\beta}$ being all the
variables in $\bm{X}$ the indices of which are not in $\beta$. This corresponds
to all the atoms where $\beta$ is the only source of size $k$ or less – which,
importantly, is in general not just $I\_{\partial}^{\beta}$. Intuitively, this is
the information that $\bm{X}^{\beta}$ has access to and no other subset of
parts has access to *on its own* (although bigger groups of other
parts may). And again, for $n=2$ we recover $\mathcal{U}^{(1)}(\{i\})=\{\{i\}\}$, and for $n=3$ we have e.g. $\mathcal{U}^{(1)}(\{1\})=\{\{1\},\{1\}\{23\}\}$.

Finally, the $k$th-order redundancy is given by

|  |  |  |
| --- | --- | --- |
|  | $$\textnormal{{Red}}^{(k)}(\bm{X};Y)\coloneqq\sum\_{\bm{\alpha}\in\mathcal{R}^{(k)}}I\_{\partial}^{\bm{\alpha}}(\bm{X};Y)~,$$ |  |

with $\mathcal{R}^{(k)}=\{\bm{\alpha}\in\mathcal{A}:\exists i\neq j,|\alpha\_{i}|,|\alpha\_{j}|\leq k\}$. Intuitively, $\texttt{Red}^{(k)}(\bm{X};Y)$
is the information that is held by at least two different groups of size $k$
or less. Again, in the $n=2$ case we recover the standard redundancy
$\mathcal{R}^{(1)}=\{\{1\}\{2\}\}$; and as an example for
$n=3$ we have $\mathcal{R}^{(1)}=\{\{1\}\{2\}\mathchar 59\penalty\hskip 0.0pt\{1\}\{3\}\mathchar 59\penalty\hskip 0.0pt\{2\}\{3\}\mathchar 59\penalty\hskip 0.0pt\{1\}\{2\}\{3\}\}$.

With the definitions above, we can build a coarse-grained PID which generalises
the well-known construction for $n=2$. This allows us to formulate
decompositions with a small number of atoms that scale gracefully with system
size, and, more interestingly, preserve the intuitive meaning that synergy,
redundancy, and unique information have for $n=2$.

###### Lemma 2.

The $k$th-order synergy, redundancy, and unique information
defined above provide an exact decomposition of mutual information:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $\displaystyle I(\bm{X};Y)=$ | $\displaystyle~\textnormal{{Red}}^{(k)}(\bm{X};Y)+\textnormal{{Syn}}^{(k)}(\bm{X};Y)$ |  |
|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  |  | $\displaystyle+\sum\_{\begin{subarray}{c}\beta\subset[n]:\\ |\beta|\leq k\end{subarray}}\textnormal{{Un}}^{(k)}(\bm{X}^{\beta};Y|\bm{X}^{-\beta})~.$ |  | (15) |

###### Proof.

We will prove this by showing that the sets $\mathcal{R}^{(k)}$,
$\mathcal{S}^{(k)}$ and $\mathcal{U}^{(k)}(\beta)$ are a partition of
$\mathcal{A}$. We will do this in two steps: first, we show that their
intersection is empty; and second, that their union is $\mathcal{A}$.

Let us show that the intersections between every pair of sets is empty:

- •

  $\mathcal{R}^{(k)}\bigcap\mathcal{S}^{(k)}=\varnothing$, since if $\bm{\alpha}\in\mathcal{R}^{(k)}$ it must
  contain at least one $\alpha\in\bm{\alpha}:|\alpha|\leq k$, and therefore
  $\bm{\alpha}\notin\mathcal{S}^{(k)}$.
- •

  $\mathcal{U}^{(k)}(\gamma)\bigcap\mathcal{U}^{(k)}(\beta)=\varnothing$ if and only if $\gamma\neq\beta$, since every $\bm{\alpha}\in\mathcal{U}^{(k)}(\gamma)$ has either no other
  elements apart from $\gamma$ (in which case $\beta\notin\bm{\alpha}$ and thus
  $\bm{\alpha}\notin\mathcal{U}^{(k)}(\beta)$), or other elements of cardinality greater than
  $k$ (in which case, again, $\beta\notin\bm{\alpha}$ and thus $\bm{\alpha}\notin\mathcal{U}^{(k)}(\beta)$).
- •

  $\mathcal{S}^{(k)}\bigcap\mathcal{U}^{(k)}(\beta)=\varnothing$ for all $|\beta|\leq k$, since
  every $\bm{\alpha}\in\mathcal{U}^{(k)}(\beta)$ contains at least one element with
  cardinality less than or equal to $k$ (specifically, $\beta$), and therefore
  $\bm{\alpha}\notin\mathcal{S}^{(k)}$.
- •

  $\mathcal{R}^{(k)}\bigcap\mathcal{U}^{(k)}(\beta)=\varnothing$ for all $|\alpha|\leq k$, since
  every $\bm{\alpha}\in\mathcal{R}^{(k)}$ contains at least two sets with cardinality less
  than or equal to $k$, while by the definition of $\mathcal{U}^{(k)}(\beta)$ every element
  other than $\beta$ must have cardinality greater than $k$, and thus
  $\bm{\alpha}\notin\mathcal{U}^{(k)}(\beta)$.

This concludes the first part of the proof. Next, we need to prove that the
union of those sets is indeed $\mathcal{A}$. We will show this by proving that
every $\bm{\alpha}\in\mathcal{A}$ is in one of those sets:

- •

  If $\nexists\alpha\in\bm{\alpha}:|\alpha|\leq k$, then $\bm{\alpha}\in\mathcal{S}^{(k)}$.
- •

  If there is exactly one $\alpha\in\bm{\alpha}:|\alpha|\leq k$, then
  $\bm{\alpha}\in\mathcal{U}^{(k)}(\alpha)$.
- •

  If there are more than one $\alpha\in\bm{\alpha}:|\alpha|\leq k$,
  then $\bm{\alpha}\in\mathcal{R}^{(k)}$.

∎

The two possible decompositions for $n=3$, together with the standard PID
lattice, are shown in Figure [7](https://arxiv.org/html/2004.08220v1#A1.F7 "Figure 7 ‣ Appendix A Information decomposition in large multivariate systems ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data").

## Appendix B Properties of high-order PI atoms

As discussed in Section [II](https://arxiv.org/html/2004.08220v1#S2 "II A formal theory of causal emergence ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data"), our theory does not depend on
a specific functional form of PID. Instead, it applies to any PID that
satisfies the following properties:

- •

  *Deterministic equality*: if there exists a function $f(\cdot)$
  such that $X^{i}=f(X^{j})$ with $i\neq j$, then the information decomposition of $\bm{X}$
  is isomorphic to that of $\bm{X}^{-j}$ (see below).
- •

  *Non-negativity*: $\textnormal{{Syn}}^{(k)}(\bm{X};Y)\geq 0$, and $\min\{I(\bm{Z};Y),I(\bm{Z};Y|\bm{X})\}\geq\textnormal{{Un}}^{(k)}(\bm{Z};Y|\bm{X})\geq 0$.
- •

  Source data processing inequality: $\textnormal{{Un}}^{(k)}(\bm{W};Y|\bm{X})\leq\textnormal{{Un}}^{(k)}(\bm{Z};Y|\bm{X})$ for all $\bm{W}-\bm{Z}-(\bm{X},Y)$
  Markov chains.

To formulate the causal decoupling and downward causation indices in
Section [II.3](https://arxiv.org/html/2004.08220v1#S2.SS3 "II.3 A taxonomy of emergence ‣ II A formal theory of causal emergence ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data"), we make use of $\Phi$ID, a recent extension of PID
to multi-target settings [[22](https://arxiv.org/html/2004.08220v1#bib.bib22)]. As with PID, our theory does
not require a particular functional form of $\Phi$ID, only the following
property:

- •

  $\sum\_{|\alpha|=k}\texttt{Syn}^{(k)}(\bm{X}\_{t};\bm{X}\_{t^{\prime}}^{\alpha})\geq\mathcal{D}^{(k)}(\bm{X}\_{t};\bm{X}\_{t^{\prime}})\geq\texttt{Syn}^{(k)}(\bm{X}\_{t};\bm{X}\_{t^{\prime}}^{\beta})$ for all $|\beta|=k$.

Finally, these properties are required to formulate the practical criteria for
emergence in Section [III.1](https://arxiv.org/html/2004.08220v1#S3.SS1 "III.1 Practical criteria for large systems ‣ III Measuring emergence ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data"):

- •

  *Whole-minus-sum*: $\textnormal{{Syn}}^{(k)}(\bm{X};Y)\geq I(\bm{X};Y)-\sum\_{|\alpha|=k}I(\bm{X}^{\alpha};Y)$.
- •

  *Target data processing inequality*: for all $\bm{X}-Y-U$ Markov
  chains, $\textnormal{{Syn}}^{(k)}(\bm{X};U)\leq\textnormal{{Syn}}^{(k)}(\bm{X};Y)$.

For completeness, we present a precise definition of the deterministic equality
property, as previously introduced in the PID
literature [[64](https://arxiv.org/html/2004.08220v1#bib.bib64)].

###### Definition 4.

A PID satisfies *deterministic equality* if
$I\_{\partial}^{\bm{\alpha}}(\bm{X};Y)=I\_{\partial}^{g\_{j}(\bm{\alpha})}(\bm{X}^{-j};Y)$ for all
$\bm{\alpha}\in\mathcal{A}$
whenever there exists a function $f(\cdot)$ such that $f(X^{j})=X^{i}$ with $i\neq j$,
with $g\_{j}(\bm{\alpha})$ removes $j$ from all the sets of indices in $\bm{\alpha}$.

It is direct to check that a number of well-known information decompositions,
including the Minimum Mutual Information PID [[65](https://arxiv.org/html/2004.08220v1#bib.bib65)], and
the corresponding $\Phi$ID [[22](https://arxiv.org/html/2004.08220v1#bib.bib22)], satisfy these
requirements.

With these properties at hand we can prove the following results, used in
Sections [II.2](https://arxiv.org/html/2004.08220v1#S2.SS2 "II.2 Defining causal emergence ‣ II A formal theory of causal emergence ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data") and [II.3](https://arxiv.org/html/2004.08220v1#S2.SS3 "II.3 A taxonomy of emergence ‣ II A formal theory of causal emergence ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data"):

###### Lemma 3.

If $X^{n+1}=\bm{X}$, then the following holds:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\textnormal{{Syn}}^{(k)}(\bm{X};Y)=\textnormal{{Un}}^{(k)}(X^{n+1};Y|\bm{X})~.$$ |  | (16) |

Above, the second term corresponds to a PID over a system of $n+1$ elements.

###### Proof.

Begin by considering the PID of $n$ sources $X^{1},...,X^{n}$ on the lattice
$\mathcal{A}^{n}$, and define its set $\mathcal{S}^{(k)}$ as above. Now we add an
additional $n+1^{\mathrm{st}}$ variable that is simply all of them
concatenated, $X\_{n+1}=\bm{X}^{n}$, and build a PID on the lattice
$\mathcal{A}^{n+1}$. In the following, we consider the set
$\mathcal{S}^{(k)}$ to belong to the lattice $\mathcal{A}^{n}$, and the set
$\mathcal{U}^{(k)}(\beta)$ to belong to the lattice $\mathcal{A}^{n+1}$. To
prove the lemma we need four ingredients, which we provide in the four
paragraphs below.

1. 1.

   First, note that the nodes in $\mathcal{A}^{n+1}$ that precede $\{n+1\}$
   are those in $\mathcal{A}^{n}$, but with the singleton $\{n+1\}$ appended to
   them. More specifically, the mapping $f:\mathcal{A}^{n}\rightarrow\mathcal{A}^{n+1}$ of the form $f(\bm{\alpha})=\bm{\alpha}\cup\{\{n+1\}\}$ is
   such that for any $\bm{\alpha}\in\mathcal{A}^{n}$ then $f(\bm{\alpha})\prec\{\{n+1\}\}$. Additionally, due to the properties of the partial order,
   $\bm{\alpha}\preceq\bm{\alpha}^{\prime}$ if and only if $f(\bm{\alpha})\preceq f(\bm{\alpha}^{\prime})$. This shows that $\mathcal{A}^{n}$ is isomorphic to a sublattice
   of $\mathcal{A}^{n+1}$.
2. 2.

   Next, by the *deterministic equality* property it is direct to check
   that $I\_{\cap}^{f(\bm{\alpha})}=I\_{\cap}^{\bm{\alpha}\vphantom{f}}$. Since this
   equality holds for all $\bm{\alpha}\in\mathcal{A}^{n}$, then applying a Möbius
   inversion we directly obtain that $I\_{\partial}^{f(\bm{\alpha})}=I\_{\partial}^{\bm{\alpha}\vphantom{f}}$.
3. 3.

   Additionally, by construction of $\mathcal{U}^{(k)}$ and
   $\mathcal{S}^{(k)}$, for all $\bm{\gamma}\in\mathcal{S}^{(k)}$ one has
   $f(\bm{\gamma})\in\mathcal{U}^{(k)}(\{n+1\})$. In other words, the set
   $\mathcal{U}^{(k)}(\{n+1\})$ includes all atoms in $\mathcal{S}^{(k)}$, plus
   $\{n+1\}$.
4. 4.

   Finally, note that the node $\{12...n\}\{n+1\}$ is the only direct
   predecessor of $\{n+1\}$, since there exists no node $\bm{\beta}\in\mathcal{A}^{n+1}$ such that $\bm{\beta}\prec\{n+1\}$ and not $\bm{\beta}\preceq\{12...n\}\{n+1\}$. By the *deterministic equality* property
   $I\_{\cap}^{\{12...n\}\{n+1\}}=I\_{\cap}^{\{12...n\}}$ and, therefore,
   $I\_{\partial}^{\{n+1\}}=0$.

With all of these, it is direct to see that

|  |  |  |  |
| --- | --- | --- | --- |
|  | $\displaystyle\texttt{Un}^{(k)}(\bm{X}^{n};Y|\bm{X})$ | $\displaystyle=\sum\_{\bm{\alpha}\in\mathcal{U}^{(k)}(\{n+1\})}I\_{\partial}^{\bm{\alpha}}(\bm{X};Y)$ |  |
|  |  |  |  |
| --- | --- | --- | --- |
|  |  | $\displaystyle=\sum\_{\bm{\alpha}\in\mathcal{S}^{(k)}}I\_{\partial}^{\bm{\alpha}}(\bm{X};Y)=\texttt{Syn}^{(k)}(\bm{X};Y)~.$ |  |

∎

###### Corollary 2.

If $X^{n+1}=\bm{X}$ and $Y^{n+1}=\bm{Y}$, then the following holds:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\mathcal{G}^{(k)}(\bm{X};\bm{Y})=\textnormal{{Un}}^{(k)}(X^{n+1};Y^{n+1}|\bm{X},\bm{Y})$$ |  | (17) |

Above, the second term corresponds to a $\Phi$ID over a system of $n+1$
elements.

###### Proof.

Follows from a direct $\Phi$ID extension to the proof of
Lemma [3](https://arxiv.org/html/2004.08220v1#Thmlemma3 "Lemma 3. ‣ Appendix B Properties of high-order PI atoms ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data"), by formulating a decomposition

|  |  |  |
| --- | --- | --- |
|  | $\displaystyle I(\bm{X};\bm{Y})=\sum\_{\bm{\alpha},\bm{\beta}\in\mathcal{A}^{n}}I\_{\partial}^{\bm{\alpha}\rightarrow\bm{\beta}}(\bm{X};\bm{Y})~,$ |  |

and applying the proof above to both $\bm{\alpha}$ and $\bm{\beta}$. Strictly
speaking, this also requires a natural multi-target extension of the
Deterministic Equality property, namely that $I\_{\cap}^{\bm{\alpha}\rightarrow\bm{\beta}}(\bm{X};\bm{Y})=I\_{\cap}^{\bm{\alpha}\rightarrow\bm{\beta}}(\bm{X}^{-j};\bm{Y})$ if $X^{i}=f(X^{j})$ with $j\neq i$, for any $\bm{\beta}\in\mathcal{A}^{n}$; as well as the symmetric $I\_{\cap}^{\bm{\alpha}\rightarrow\bm{\beta}}(\bm{X};\bm{Y})=I\_{\cap}^{\bm{\alpha}\rightarrow\bm{\beta}}(\bm{X};\bm{Y}^{-j})$ if $Y^{i}=f(Y^{j})$ with $j\neq i$, for any $\bm{\alpha}\in\mathcal{A}^{n}$.
∎

## Appendix C Mathematical properties of causal emergence

###### Proof of Lemma [1](https://arxiv.org/html/2004.08220v1#Thmlemma1 "Lemma 1. ‣ II.2 Defining causal emergence ‣ II A formal theory of causal emergence ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data").

The first property can be easily proven by noting that there can be no synergy
in a univariate system: i.e. if $n=1$, then $\mathcal{S}^{(k)}=\varnothing$ and
therefore $\texttt{Syn}^{(k)}(\bm{X}\_{t};\bm{X}\_{t^{\prime}})=0$.

To prove the second property, let us assume that there exists a function
$g(\cdot)$ such that $g(X\_{t}^{j})=V\_{t}$ for some $j$. Then, one can show that

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  | $\displaystyle\texttt{Un}^{(1)}(V\_{t};\bm{X}\_{t^{\prime}}|\bm{X}\_{t})$ | $\displaystyle\leq I(V\_{t};\bm{X}\_{t^{\prime}}|\bm{X}\_{t})$ |  | (18) |
|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  |  | $\displaystyle\leq I(V\_{t};\bm{X}\_{t^{\prime}}|X\_{t}^{j})$ |  | (19) |
|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  |  | $\displaystyle\leq H(V\_{t}|X\_{t}^{j})$ |  | (20) |
|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  |  | $\displaystyle=0~,$ |  | (21) |

where ([18](https://arxiv.org/html/2004.08220v1#A3.E18 "Equation 18 ‣ Proof of Lemma . ‣ Appendix C Mathematical properties of causal emergence ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data")) is due to the non-negativity property of
$\texttt{Un}^{(k)}$ introduced in Section [II.1](https://arxiv.org/html/2004.08220v1#S2.SS1 "II.1 Partial information decomposition ‣ II A formal theory of causal emergence ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data"). This shows that $V\_{t}$
cannot exhibit emergent behaviour.

∎

###### Proof of Theorem [1](https://arxiv.org/html/2004.08220v1#Thmtheorem1 "Theorem 1. ‣ II.2 Defining causal emergence ‣ II A formal theory of causal emergence ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data").

If $\texttt{Syn}^{(k)}(\bm{X}\_{t};\bm{X}\_{t^{\prime}})>0$, then by Lemma [3](https://arxiv.org/html/2004.08220v1#Thmlemma3 "Lemma 3. ‣ Appendix B Properties of high-order PI atoms ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data") it is
clear that the feature $V\_{t}=\bm{X}\_{t}$ exhibits causal emergence.

To prove the converse, note that all supervenient features follow the Markov
chain structure $V\_{t}-\bm{X}\_{t}-\bm{X}\_{t^{\prime}}$. Therefore, for any supervenient feature
$V\_{t}=f(\bm{X}\_{t})$ the following holds:

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  | $\displaystyle 0\leq\texttt{Un}^{(k)}(V\_{t};\bm{X}\_{t^{\prime}}|\bm{X}\_{t})$ | $\displaystyle\leq\texttt{Un}^{(k)}(\bm{X}\_{t};\bm{X}\_{t^{\prime}}|\bm{X}\_{t})$ |  | (22) |
|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  |  | $\displaystyle=\texttt{Syn}(\bm{X}\_{t};\bm{X}\_{t^{\prime}})~,$ |  | (23) |

where ([22](https://arxiv.org/html/2004.08220v1#A3.E22 "Equation 22 ‣ Proof of Theorem . ‣ Appendix C Mathematical properties of causal emergence ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data")) is due to the data processing inequality of the
unique information (c.f. Section [II.1](https://arxiv.org/html/2004.08220v1#S2.SS1 "II.1 Partial information decomposition ‣ II A formal theory of causal emergence ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data")), and ([23](https://arxiv.org/html/2004.08220v1#A3.E23 "Equation 23 ‣ Proof of Theorem . ‣ Appendix C Mathematical properties of causal emergence ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data")) is
due to Lemma [3](https://arxiv.org/html/2004.08220v1#Thmlemma3 "Lemma 3. ‣ Appendix B Properties of high-order PI atoms ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data"). Using this result, is clear that if
$\texttt{Syn}^{(k)}(\bm{X}\_{t};\bm{X}\_{t^{\prime}})=0$ then $\texttt{Un}^{(k)}(V\_{t};\bm{X}\_{t^{\prime}}|\bm{X}\_{t})=0$ for any superventient feature $V\_{t}$.
∎

The above proof implies that the system has emergent behaviour if and only if
the system as a whole seen as a feature (i.e. $V\_{t}=\bm{X}\_{t}$) is causally emergent.
Note that the fact that this trivial feature is helpful for detecting the
presence of emergence doesn’t imply that it is an appropriate way of
representing it, as in most cases also carries non-interesting information, and
in practice one may be interested in features that exhibit emergence but are
shorter to describe than the microstate of the system, i.e. $H(V\_{t})<H(\bm{X}\_{t})$.

###### Proof of Theorem [2](https://arxiv.org/html/2004.08220v1#Thmtheorem2 "Theorem 2. ‣ II.3.1 Downward causation ‣ II.3 A taxonomy of emergence ‣ II A formal theory of causal emergence ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data").

Let us first assume that there exists a supervenient feature $V\_{t}$ such that
$\texttt{Un}^{(k)}(V\_{t};\bm{X}\_{t^{\prime}}^{\alpha}|\bm{X})>0$ for some $\alpha:|\alpha|=k$. Then, one can find that

|  |  |  |  |
| --- | --- | --- | --- |
|  | $\displaystyle 0$ | $\displaystyle<\texttt{Un}^{(k)}(V\_{t};\bm{X}\_{t^{\prime}}^{\alpha}|\bm{X}\_{t})$ |  |
|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  |  | $\displaystyle\leq\texttt{Un}^{(k)}(\bm{X}\_{t};\bm{X}\_{t^{\prime}}^{\alpha}|\bm{X}\_{t})$ |  | (24) |
|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  |  | $\displaystyle=\texttt{Syn}^{(k)}(\bm{X}\_{t};\bm{X}\_{t^{\prime}}^{\alpha})$ |  | (25) |
|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  |  | $\displaystyle\leq\mathcal{D}^{(k)}(\bm{X}\_{t};\bm{X}\_{t^{\prime}})~.$ |  | (26) |

Above, ([24](https://arxiv.org/html/2004.08220v1#A3.E24 "Equation 24 ‣ Proof of Theorem . ‣ Appendix C Mathematical properties of causal emergence ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data")) is a consequence of the data processing inequality of the
unique information, ([25](https://arxiv.org/html/2004.08220v1#A3.E25 "Equation 25 ‣ Proof of Theorem . ‣ Appendix C Mathematical properties of causal emergence ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data")) comes from Lemma [3](https://arxiv.org/html/2004.08220v1#Thmlemma3 "Lemma 3. ‣ Appendix B Properties of high-order PI atoms ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data"), and
([26](https://arxiv.org/html/2004.08220v1#A3.E26 "Equation 26 ‣ Proof of Theorem . ‣ Appendix C Mathematical properties of causal emergence ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data")) is from the properties of $\mathcal{D}^{(k)}$ stated in
Section [II.3](https://arxiv.org/html/2004.08220v1#S2.SS3 "II.3 A taxonomy of emergence ‣ II A formal theory of causal emergence ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data").

To prove the converse, let us assume that all supervenient features $V\_{t}$
satisfy $\texttt{Un}^{(k)}(V\_{t};\bm{X}\_{t^{\prime}}^{\alpha}|\bm{X}\_{t})=0$ for all $k$
and $|\alpha|=k$. In particular, this is true for the feature $V\_{t}=\bm{X}\_{t}$.
Then, another application of Lemma [3](https://arxiv.org/html/2004.08220v1#Thmlemma3 "Lemma 3. ‣ Appendix B Properties of high-order PI atoms ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data") shows that

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  | $\displaystyle\mathcal{D}^{(k)}(\bm{X}\_{t};\bm{X}\_{t^{\prime}})$ | $\displaystyle\leq\sum\_{|\alpha|=k}\texttt{Syn}^{(k)}(\bm{X}\_{t};\bm{X}\_{t^{\prime}}^{\alpha})$ |  | (27) |
|  |  |  |  |
| --- | --- | --- | --- |
|  |  | $\displaystyle=\sum\_{|\alpha|=k}\texttt{Un}^{(k)}(\bm{X}\_{t};\bm{X}\_{t^{\prime}}^{\alpha}|\bm{X}\_{t})$ |  |
|  |  |  |  |
| --- | --- | --- | --- |
|  |  | $\displaystyle=0~.$ |  |

Above, ([27](https://arxiv.org/html/2004.08220v1#A3.E27 "Equation 27 ‣ Proof of Theorem . ‣ Appendix C Mathematical properties of causal emergence ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data")) is a consequence of the properties of
$\mathcal{D}^{(k)}$.

∎

###### Proof of Theorem [3](https://arxiv.org/html/2004.08220v1#Thmtheorem3 "Theorem 3. ‣ II.3.2 Causal decoupling ‣ II.3 A taxonomy of emergence ‣ II A formal theory of causal emergence ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data").

We begin by proving that a system has a causally decoupled feature iff
$\mathcal{G}^{(k)}(\bm{X}\_{t};\bm{X}\_{t^{\prime}})>0$. This proof follows a similar structure to
that of Theorem [2](https://arxiv.org/html/2004.08220v1#Thmtheorem2 "Theorem 2. ‣ II.3.1 Downward causation ‣ II.3 A taxonomy of emergence ‣ II A formal theory of causal emergence ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data") for downward causation.

Let us first assume that there exists a supervenient feature $V\_{t}$ with
$\texttt{Un}^{(k)}(V\_{t};V\_{t^{\prime}}|\bm{X}\_{t},\bm{X}\_{t^{\prime}})>0$. Then,

|  |  |  |  |
| --- | --- | --- | --- |
|  | $\displaystyle 0$ | $\displaystyle<\texttt{Un}^{(k)}(V\_{t};V\_{t^{\prime}}|\bm{X}\_{t},\bm{X}\_{t^{\prime}})$ |  |
|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  |  | $\displaystyle\leq\texttt{Un}^{(k)}(\bm{X}\_{t};\bm{X}\_{t^{\prime}}|\bm{X}\_{t},\bm{X}\_{t^{\prime}})$ |  | (28) |
|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  |  | $\displaystyle=\mathcal{G}^{(k)}(\bm{X}\_{t};\bm{X}\_{t^{\prime}})~.$ |  | (29) |

Above, ([28](https://arxiv.org/html/2004.08220v1#A3.E28 "Equation 28 ‣ Proof of Theorem . ‣ Appendix C Mathematical properties of causal emergence ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data")) can be obtained through a combination of the data
processing inequalities of the unique information and the synergy, as well as
Lemma [3](https://arxiv.org/html/2004.08220v1#Thmlemma3 "Lemma 3. ‣ Appendix B Properties of high-order PI atoms ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data"); and ([29](https://arxiv.org/html/2004.08220v1#A3.E29 "Equation 29 ‣ Proof of Theorem . ‣ Appendix C Mathematical properties of causal emergence ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data")) is an application of
Corollary [2](https://arxiv.org/html/2004.08220v1#Thmcorollary2 "Corollary 2. ‣ Appendix B Properties of high-order PI atoms ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data").

To prove the converse, assume that for all supervenient features
$\texttt{Un}^{(k)}(V\_{t};V\_{t^{\prime}}|\bm{X}\_{t},\bm{X}\_{t^{\prime}})=0$. As before, this also includes
$V\_{t}=\bm{X}\_{t}$. Therefore, applying Corollary [2](https://arxiv.org/html/2004.08220v1#Thmcorollary2 "Corollary 2. ‣ Appendix B Properties of high-order PI atoms ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data") we arrive at
$\mathcal{G}^{(k)}(\bm{X}\_{t};\bm{X}\_{t^{\prime}})=\texttt{Un}^{(k)}(\bm{X}\_{t};\bm{X}\_{t^{\prime}}|\bm{X}\_{t},\bm{X}\_{t^{\prime}})=0$,
which concludes the proof.

We now move on to prove the results on perfectly causally decoupled systems, where
$\mathcal{G}^{(k)}(\bm{X}\_{t};\bm{X}\_{t^{\prime}})>0$ and $\mathcal{D}^{(k)}(\bm{X}\_{t};\bm{X}\_{t^{\prime}})=0$. As
$\texttt{Syn}^{(k)}(\bm{X}\_{t};\bm{X}\_{t^{\prime}})=\mathcal{G}^{(k)}(\bm{X}\_{t};\bm{X}\_{t^{\prime}})+\mathcal{D}^{(k)}(\bm{X}\_{t};\bm{X}\_{t^{\prime}})>0$, thanks to Theorem [1](https://arxiv.org/html/2004.08220v1#Thmtheorem1 "Theorem 1. ‣ II.2 Defining causal emergence ‣ II A formal theory of causal emergence ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data")
this is equivalent to the existence of at least one emergent feature $V\_{t}$.
Additionally, due to Theorem [2](https://arxiv.org/html/2004.08220v1#Thmtheorem2 "Theorem 2. ‣ II.3.1 Downward causation ‣ II.3 A taxonomy of emergence ‣ II A formal theory of causal emergence ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data"), $\mathcal{D}^{(k)}(\bm{X}\_{t};\bm{X}\_{t^{\prime}})=0$ is equivalent to $\texttt{Un}^{(k)}(V\_{t};\bm{X}\_{t^{\prime}}^{\alpha}|\bm{X}\_{t})=0$ for
all emergent features and $\alpha:|\alpha|=k$

∎

## Appendix D Mathematical properties of emergence criteria

In this appendix we provide the necessary proofs linking the practical criteria
for emergence in Eqs. ([10](https://arxiv.org/html/2004.08220v1#S3.EGx2 "Equation 10 ‣ III.1 Practical criteria for large systems ‣ III Measuring emergence ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data")) with the definitions in
Section [II](https://arxiv.org/html/2004.08220v1#S2 "II A formal theory of causal emergence ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data"). For completeness, we provide formulae of
$\Psi$, $\Delta$, and $\Gamma$ for arbitrary emergence order $k$:

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  | | | | |
|  | $\displaystyle\Psi\_{t,t^{\prime}}^{(k)}(V)$ | $\displaystyle\coloneqq I(V\_{t};V\_{t^{\prime}})-\sum\_{|\alpha|=k}I(\bm{X}\_{t}^{\alpha};V\_{t^{\prime}})~,$ |  | (30a) |
|  | $\displaystyle\Delta\_{t,t^{\prime}}^{(k)}(V)$ | $\displaystyle\coloneqq\max\_{|\alpha|=k}\left(I(V\_{t};\bm{X}^{\alpha}\_{t^{\prime}})-\sum\_{|\beta|=k}I(\bm{X}\_{t}^{\beta};\bm{X}^{\alpha}\_{t^{\prime}})\right)~,$ |  | (30b) |
|  | $\displaystyle\Gamma\_{t,t^{\prime}}^{(k)}(V)$ | $\displaystyle\coloneqq\max\_{|\alpha|=k}I(V\_{t};\bm{X}\_{t^{\prime}}^{\alpha})~.$ |  | (30c) |

###### Proof of Proposition [1](https://arxiv.org/html/2004.08220v1#Thmproposition1 "Proposition 1. ‣ III.1 Practical criteria for large systems ‣ III Measuring emergence ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data").

To start, note that a direct calculation shows that

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  | $\displaystyle\Psi\_{t,t^{\prime}}^{(k)}(V)$ | $\displaystyle\leq I(\bm{X}\_{t};V\_{t^{\prime}})-\sum\_{|\alpha|=k}I(\bm{X}\_{t}^{\alpha};V\_{t^{\prime}})$ |  | (31) |
|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  |  | $\displaystyle\leq\texttt{Syn}^{(k)}(\bm{X}\_{t};V\_{t^{\prime}})$ |  | (32) |
|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  |  | $\displaystyle\leq\texttt{Syn}^{(k)}(\bm{X}\_{t};\bm{X}\_{t^{\prime}})~.$ |  | (33) |

Above, ([31](https://arxiv.org/html/2004.08220v1#A4.E31 "Equation 31 ‣ Proof of Proposition . ‣ Appendix D Mathematical properties of emergence criteria ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data")) is due to the data processing inequality applied over
the Markov chain $V\_{t}-\bm{X}\_{t}-\bm{X}\_{t^{\prime}}-V\_{t^{\prime}}$; ([32](https://arxiv.org/html/2004.08220v1#A4.E32 "Equation 32 ‣ Proof of Proposition . ‣ Appendix D Mathematical properties of emergence criteria ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data")) is due to the
whole-minus-sum property of the synergy; and ([33](https://arxiv.org/html/2004.08220v1#A4.E33 "Equation 33 ‣ Proof of Proposition . ‣ Appendix D Mathematical properties of emergence criteria ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data")) is due to the data
processing inequality of the synergy. Therefore, it is clear that if $\Psi\_{t,t^{\prime}}^{(k)}(V)>0$ for some feature $V\_{t}$ then $\texttt{Syn}^{(k)}(\bm{X}\_{t};\bm{X}\_{t^{\prime}})>0$. This, combined with Theorem [1](https://arxiv.org/html/2004.08220v1#Thmtheorem1 "Theorem 1. ‣ II.2 Defining causal emergence ‣ II A formal theory of causal emergence ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data"), guarantees
that the system exhibits causal emergence.

To check the condition for downward causation, a direct calculation shows that,
for some $|\alpha|=k$,

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  | $\displaystyle\Delta\_{t,t^{\prime}}^{(k)}(V)$ | $\displaystyle\leq I(\bm{X}\_{t};\bm{X}\_{t^{\prime}}^{\alpha})-\sum\_{|\bm{\beta}|=k}I(\bm{X}\_{t}^{\beta};\bm{X}^{\alpha}\_{t^{\prime}})$ |  | (34) |
|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  |  | $\displaystyle\leq\texttt{Syn}^{(k)}(\bm{X}\_{t};\bm{X}^{\alpha}\_{t^{\prime}})$ |  | (35) |
|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  |  | $\displaystyle\leq\mathcal{D}^{(k)}(\bm{X}\_{t};\bm{X}\_{t^{\prime}})~.$ |  | (36) |

Above, ([34](https://arxiv.org/html/2004.08220v1#A4.E34 "Equation 34 ‣ Proof of Proposition . ‣ Appendix D Mathematical properties of emergence criteria ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data")) is due to the data processing inequality applied over the
Markov chain $V\_{t}-\bm{X}\_{t}-\bm{X}\_{t^{\prime}}^{\alpha}$; ([35](https://arxiv.org/html/2004.08220v1#A4.E35 "Equation 35 ‣ Proof of Proposition . ‣ Appendix D Mathematical properties of emergence criteria ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data")) to the
whole-minus-sum property of the synergy; and ([36](https://arxiv.org/html/2004.08220v1#A4.E36 "Equation 36 ‣ Proof of Proposition . ‣ Appendix D Mathematical properties of emergence criteria ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data")) to the
properties of $\mathcal{D}^{(k)}$. From here, is clear that if
$\Delta\_{t,t^{\prime}}^{(k)}(V)>0$ for some feature $V\_{t}$ then
$\mathcal{D}^{(k)}(\bm{X}\_{t};\bm{X}\_{t^{\prime}})>0$. This, combined with
Theorem [1](https://arxiv.org/html/2004.08220v1#Thmtheorem1 "Theorem 1. ‣ II.2 Defining causal emergence ‣ II A formal theory of causal emergence ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data"), guarantees that the system exhibits downward
causation.

Finally, for the condition for causal decoupling it is sufficient to note that

|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  | $\displaystyle\Gamma\_{t,t^{\prime}}^{(k)}(V)$ | $\displaystyle=\max\_{|\alpha|=k}I(V\_{t};\bm{X}\_{t^{\prime}}^{\alpha})$ |  | (37) |
|  |  |  |  |  |
| --- | --- | --- | --- | --- |
|  |  | $\displaystyle\geq\texttt{Un}^{(k)}(V\_{t};\bm{X}\_{t^{\prime}}^{\alpha}|\bm{X}\_{t})\geq 0~,$ |  | (38) |

where the inequality is due to the bounds of the unique information.
∎

###### Proof of Proposition [2](https://arxiv.org/html/2004.08220v1#Thmproposition2 "Proposition 2. ‣ III.2 Measuring emergence via synergistic channels ‣ III Measuring emergence ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data").

Let us consider $V\_{t}$ a $k$-synergistic observable. Due to stationarity, the
fact that $V\_{t}\in\mathcal{C}\_{k}(\bm{X}\_{t})$ implies that
$V\_{t^{\prime}}\in\mathcal{C}\_{k}(\bm{X}\_{t^{\prime}})$. Using this fact, and noting that $V\_{t}-\bm{X}\_{t}-\bm{X}\_{t^{\prime}}-V\_{t^{\prime}}$ is a Markov chain, it is direct to check that

|  |  |  |  |
| --- | --- | --- | --- |
|  | $$\mathcal{G}\_{\star}^{(k)}(\bm{X}\_{t};\bm{X}\_{t^{\prime}})\geq I(V\_{t};V\_{t^{\prime}})>0~,$$ |  | (39) |

Additionally, since $\mathcal{D}\_{\star}^{(k)}(\bm{X}\_{t};\bm{X}\_{t^{\prime}})\geq 0$,
Eq. ([39](https://arxiv.org/html/2004.08220v1#A4.E39 "Equation 39 ‣ Proof of Proposition . ‣ Appendix D Mathematical properties of emergence criteria ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data")) implies that $\texttt{Syn}\_{\star}^{(k)}(\bm{X}\_{t};\bm{X}\_{t^{\prime}})>0$,
proving the desired result.
∎

## Appendix E Simulation details

Let us focus first on the Game of Life (GoL) simulations in
Figure [4](https://arxiv.org/html/2004.08220v1#S4.F4 "Figure 4 ‣ IV.1.1 Conway’s Game of Life ‣ IV.1 Canonical examples of putative emergence ‣ IV Case studies ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data"). For the initial state, two particles of three fixed types
(nothing, a glider, or a lightweight spaceship) were selected at random, and
placed at random positions in a 15x15 square cell array. The GoL evolution rule
was run for 1000 steps, which, in most cases (judged by visual inspection) was
enough for the system to settle on a stable configuration – which was
typically either nothing, a small number of static structures, or a small
number of particles in non-colliding tracks. To compute the emergent feature
$V\_{t^{\prime}}$, particles were detected by simply pattern-matching the resulting
system state against the known shapes of each particle. We considered five
categories: still lifes, oscillators, gliders, lightweight spacesphips, or
nothing.

For static structures, we used a single symbol to represent all still lifes,
and a single symbol for all oscillators. This particle detector was found to be
very effective, with only 2% of runs resulting in unrecognised particles. A
total of $5\text{\times}{10}^{4}$ independent runs were simulated and, due to the high number
of possible states of $V\_{t}$, to reduce bias we used the quasi-Bayesian
estimator by Archer *et al.* [[35](https://arxiv.org/html/2004.08220v1#bib.bib35)].

For the boids simulation, $N=10$ boids were simulated on a torus of side length
$L=200$. Boids are initialised with random positions, speeds, and head angles,
and at each timestep each boid $i=1,...,N$ is updated according to the
equations:

|  |  |  |  |
| --- | --- | --- | --- |
|  | $\displaystyle x^{i}\_{t^{\prime}}$ | $\displaystyle=x^{i}\_{t}+s^{i}\cos(\alpha^{i}\_{t})$ |  |
|  |  |  |  |
| --- | --- | --- | --- |
|  | $\displaystyle y^{i}\_{t^{\prime}}$ | $\displaystyle=y^{i}\_{t}+s^{i}\sin(\alpha^{i}\_{t})$ |  |
|  |  |  |  |
| --- | --- | --- | --- |
|  | $\displaystyle\alpha^{i}\_{t^{\prime}}$ | $\displaystyle=\alpha^{i}\_{t}+a\_{1}\theta\_{1}+a\_{2}(\pi+\theta\_{2})+a\_{3}\theta\_{3}~,$ |  |

Where $\theta\_{1}$ is the bearing to the flock’s center of mass, $\theta\_{2}$ the
bearing to the nearest boid, and $\theta\_{3}$ the mean alignment of all boids
within a 20 unit radius. The scalars $a\_{1},a\_{2},a\_{3}$ are the aggregation,
avoidance, and alignment parameters, respectively.

The results in Figure [5](https://arxiv.org/html/2004.08220v1#S4.F5 "Figure 5 ‣ IV.1.2 Reynolds’ flocking model ‣ IV.1 Canonical examples of putative emergence ‣ IV Case studies ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data") were obtained averaging $\Psi$ across 25
independent runs of 5000 timesteps each, keeping $a\_{1}=0.15$, $a\_{3}=0.25$
fixed across all simulations. To compute $\Psi$, we pre-processed the
trajectories using the same procedure as Seth [[5](https://arxiv.org/html/2004.08220v1#bib.bib5)] (i.e.
each boid was described by its distance to the center of the environment and
all time series were first-order differenced), and information-theoretic
quantities were computed using the non-parametric estimator implemented in the
JIDT toolbox [[23](https://arxiv.org/html/2004.08220v1#bib.bib23), [24](https://arxiv.org/html/2004.08220v1#bib.bib24)] using a dynamic
correlation exclusion window of 10 samples [[66](https://arxiv.org/html/2004.08220v1#bib.bib66)].

## Appendix F ECoG preprocessing and decoding

ECoG signals were preprocessed following the steps presented in the original
publication: pecifically, the data was notch-filtered to remove line noise and
band-pass filtered from $0.1\text{\,}\mathrm{Hz}600\text{\,}\mathrm{Hz}$, and then downsampled to the
same sampling frequency as the MoCap data
($120\text{\,}\mathrm{Hz}$) [[37](https://arxiv.org/html/2004.08220v1#bib.bib37)]. Then, data were divided into a 60/40
train/test split. To build the predictor, the training set was first
standardised to zero mean and unit variance, and then it was
dimensionality-reduced with a 20-component Partial Least Squares (PLS)
regression using the three dimensions of the MoCap as dependent variables. We
then trained a non-linear Support Vector Machine (SVM) [[67](https://arxiv.org/html/2004.08220v1#bib.bib67)]
using a squared exponential kernel predicting the MoCap data from the
20-dimensional PLS scores. SVM and kernel hyperparameters were optimised
through 5-fold cross-validation, and a model with the best hyperparameter
configuration was trained on the full training set. This cross-validation and
optimisation procedure was repeated for each dimension of the MoCap data,
resulting in three separate SVMs 14.

The computation of $\Psi$ was performed on the held-out test data set. ECoG
signals were standardised and projected onto the PLS latent space (using the
means, standard deviations, and projection matrix obtained from the training
data), and mutual information terms involved in the computation of $\Psi$ were
calculated using the open-source JIDT toolbox [[24](https://arxiv.org/html/2004.08220v1#bib.bib24)].

## References

- [1]

  S. Gibb, R. H. Findlay, and T. Lancaster, *The Routledge Handbook of
  Emergence*. Routledge, 2019.
- [2]

  M. Bedau, “Downward causation and the autonomy of weak emergence,”
  *Principia: An International Journal of Epistemology*, vol. 6, no. 1,
  pp. 5–50, 2002.
- [3]

  The case of strong emergence most commonly argued in the literature is the one
  of conscious experiences with respect to their corresponding physical
  substrate [[41](https://arxiv.org/html/2004.08220v1#bib.bib41), [58](https://arxiv.org/html/2004.08220v1#bib.bib58)].
- [4]

  M. A. Bedau, “Weak emergence,” *Noûs*, vol. 31, pp. 375–399, 1997.
- [5]

  A. K. Seth, “Measuring autonomy and emergence via Granger causality,”
  *Artificial Life*, vol. 16, no. 2, pp. 179–196, 2010.
- [6]

  E. P. Hoel, L. Albantakis, and G. Tononi, “Quantifying causal emergence shows
  that macro can beat micro,” *Proceedings of the National Academy of
  Sciences*, vol. 110, no. 49, pp. 19 790–19 795, 2013.
- [7]

  E. P. Hoel, “When the map is better than the territory,” *Entropy*,
  vol. 19, no. 5, p. 188, 2017.
- [8]

  B. Klein and E. Hoel, “The emergence of informative higher scales in complex
  networks,” *Complexity*, vol. 2020, 2020.
- [9]

  J. Pearl, *Causality: Models, Reasoning and Inference*. Cambridge University Press, 2000.
- [10]

  This point is further ellaborated in Section [V.3](https://arxiv.org/html/2004.08220v1#S5.SS3 "V.3 Relationship with other quantitative theories of emergence ‣ V Discussion ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data").
- [11]

  F. Rosas, P. A. Mediano, M. Ugarte, and H. J. Jensen, “An
  information-theoretic approach to self-organisation: Emergence of complex
  interdependencies in coupled dynamical systems,” *Entropy*, vol. 20,
  no. 10, 2018.
- [12]

  S. L. Bressler and A. K. Seth, “Wiener–granger causality: A well
  established methodology,” *Neuroimage*, vol. 58, no. 2, pp. 323–329,
  2011.
- [13]

  A related discussion about “synergistic information flow” can be found in
  Ref. [[69](https://arxiv.org/html/2004.08220v1#bib.bib69)].
- [14]

  P. L. Williams and R. D. Beer, “Nonnegative decomposition of multivariate
  information,” *arXiv preprint arXiv:1004.2515*, 2010.
- [15]

  Only one of the information atoms must be specified to determine the whole PID
  – usually the redundancy between all individual elements [[14](https://arxiv.org/html/2004.08220v1#bib.bib14)].
- [16]

  N. Ay, D. Polani, and N. Virgo, “Information decomposition based on
  cooperative game theory,” *arXiv preprint arXiv:1910.05979*, 2019.
- [17]

  J. T. Lizier, N. Bertschinger, J. Jost, and M. Wibral, “Information
  decomposition of target effects from multi-source interactions:
  Perspectives on previous, current and future work,” *Entropy*,
  vol. 20, no. 4, 2018.
- [18]

  R. James, J. Emenheiser, and J. Crutchfield, “Unique information via
  dependency constraints,” *Journal of Physics A: Mathematical and
  Theoretical*, 2018.
- [19]

  R. A. Ince, “Measuring multivariate redundant information with pointwise
  common change in surprisal,” *Entropy*, vol. 19, no. 7, p. 318, 2017.
- [20]

  F. Rosas, P. Mediano, B. Rassouli, and A. Barrett, “An operational information
  decomposition via synergistic disclosure,” *arXiv preprint
  arXiv:2001.10387*, 2020.
- [21]

  In effect, it is plausible that a system might have emergence capacity under
  one microscopic representation, but not with respect to another after a
  change of variables.
- [22]

  P. A. Mediano, F. Rosas, R. L. Carhart-Harris, A. K. Seth, and A. B. Barrett,
  “Beyond integrated information: A taxonomy of information dynamics
  phenomena,” *arXiv preprint arXiv:1909.02297*, 2019.
- [23]

  A. Kraskov, H. Stögbauer, and P. Grassberger, “Estimating mutual
  information,” *Physical Review E*, vol. 69, no. 6, p. 066138, jun
  2004.
- [24]

  J. T. Lizier, “JIDT: An information-theoretic toolkit for studying the
  dynamics of complex systems,” *Frontiers in Robotics and AI*, vol. 1,
  p. 37, dec 2014.
- [25]

  W. J. McGill, “Multivariate information transmission,” *Psychometrika*,
  vol. 19, no. 2, pp. 97–116, 1954.
- [26]

  N. Timme, W. Alford, B. Flecker, and J. M. Beggs, “Synergy, redundancy, and
  multivariate information measures: an experimentalist’s perspective,”
  *Journal of Computational Neuroscience*, vol. 36, no. 2, pp. 119–140,
  2014.
- [27]

  F. E. Rosas, P. A. M. Mediano, M. Gastpar, and H. J. Jensen, “Quantifying
  high-order interdependencies via multivariate extensions of the mutual
  information,” *Physical Review E*, vol. 100, p. 032305, Sep 2019.
- [28]

  B. Rassouli, F. E. Rosas, and D. Gündüz, “Data disclosure under
  perfect sample privacy,” *IEEE Transactions on Information Forensics
  and Security*, 2019.
- [29]

  J. Conway, “The game of life,” *Scientific American*, vol. 223, no. 4,
  p. 4, 1970.
- [30]

  C. W. Reynolds, *Flocks, Herds and Schools: A Distributed Behavioral
  Model*. ACM, 1987, vol. 21, no. 4.
- [31]

  A. Adamatzky and J. Durand-Lose, *Collision-based computing*. Springer, 2012.
- [32]

  J. Lizier, “The local information dynamics of distributed computation in
  complex systems,” Ph.D. dissertation, University of Sydney, 2010.
- [33]

  S. Wolfram, *A New Kind of Science*. Wolfram Media, 2002.
- [34]

  Simulations showed that this interval is enough for the system to settle in a
  stable state after the collision.
- [35]

  E. Archer, I. Park, and J. Pillow, “Bayesian and quasi-Bayesian estimators
  for mutual information from discrete data,” *Entropy*, vol. 15, no. 5,
  pp. 1738–1755, 2013.
- [36]

  T. Vicsek, “Universal patterns of collective motion from minimal models of
  flocking,” in *2008 IEEE Conference on Self-Adaptive and
  Self-Organizing Systems*. IEEE, 2008,
  pp. 3–11.
- [37]

  Z. Chao, Y. Nagasaka, and N. Fujii, “Long-term asynchronous decoding of arm
  motion using electrocorticographic signals in monkey,” *Frontiers in
  Neuroengineering*, vol. 3, p. 3, 2010.
- [38]

  S. Dehaene, *Consciousness and the Brain: Deciphering how the Brain
  Codes our Thoughts*. Penguin, 2014.
- [39]

  F. E. Turkheimer, P. Hellyer, A. A. Kehagia, P. Expert, L.-D. Lord,
  J. Vohryzek, J. D. F. Dafflon, M. Brammer, and R. Leech, “Conflicting
  emergences. Weak vs. strong emergence for the modelling of brain
  function,” *Neuroscience & Biobehavioral Reviews*, vol. 99, pp. 3–10,
  2019.
- [40]

  This is likely to be the case because the neural system is only partially
  observed – i.e. the ECoG does not capture every source of relevant activity
  in the macaque’s cortex. Note that non-supervenient features are of limited
  interest within our framework, as they can satisfy Proposition [1](https://arxiv.org/html/2004.08220v1#Thmproposition1 "Proposition 1. ‣ III.1 Practical criteria for large systems ‣ III Measuring emergence ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data") in trivial ways (e.g. time series which are independent
  of the underlying system satisty $\Psi>0$ if they are self-correlated).
- [41]

  D. J. Chalmers, “Strong and weak emergence.” Oxford University Press, 2006, pp. 244–256.
- [42]

  Note that the systems studied in Section [I](https://arxiv.org/html/2004.08220v1#S1 "I Fundamental intuitions ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data") are not weakly
  emergent in the sense of Bedau [[4](https://arxiv.org/html/2004.08220v1#bib.bib4)], being simple and
  susceptible to explanatory shortcuts.
- [43]

  P. A. Corning, “The synergism hypothesis: On the concept of synergy and its
  role in the evolution of complex systems,” *Journal of Social and
  Evolutionary Systems*, vol. 21, no. 2, pp. 133–172, 1998.
- [44]

  A. Rueger, “Physical emergence, diachronic and synchronic,” *Synthese*,
  vol. 124, no. 3, pp. 297–322, 2000.
- [45]

  H.-P. Breuer, F. Petruccione *et al.*, *The Theory of Open Quantum
  Systems*. Oxford University Press,
  2002.
- [46]

  For an explicit example, when considering the Ising model, Kawasaki and Glauber
  dynamics are known to behave differently even when the system is in
  equilibrium [[70](https://arxiv.org/html/2004.08220v1#bib.bib70)]; and thus may provide quite different
  values of the measures described in [III](https://arxiv.org/html/2004.08220v1#S3 "III Measuring emergence ‣ Reconciling emergences: An information-theoretic approach to identify causal emergence in multivariate data").
- [47]

  P. A. Corning, “The re-emergence of “emergence”: A venerable concept in
  search of a theory,” *Complexity*, vol. 7, no. 6, pp. 18–30, 2002.
- [48]

  See Refs. [[71](https://arxiv.org/html/2004.08220v1#bib.bib71), [72](https://arxiv.org/html/2004.08220v1#bib.bib72)], particularly his approach
  to emergence in biology. Note that some of Anderson’s views – particularly
  the ones related to rigidity – are nevertheless closely related to the
  approach developed by our framework.
- [49]

  S. Kauffman and P. Clayton, “On emergence, agency, and organization,”
  *Biology and Philosophy*, vol. 21, no. 4, pp. 501–521, 2006.
- [50]

  S. A. Kauffman, *A World Beyond Physics: The Emergence and Evolution of
  Life*. Oxford University Press, 2019.
- [51]

  R. C. Bishop and H. Atmanspacher, “Contextual emergence in the description of
  properties,” *Foundations of Physics*, vol. 36, no. 12, pp. 1753–1777,
  2006.
- [52]

  H. Atmanspacher and P. beim Graben, “Contextual emergence,”
  *Scholarpedia*, vol. 4, no. 3, p. 7997, 2009.
- [53]

  H. J. Jensen, R. H. Pazuki, G. Pruessner, and P. Tempesta, “Statistical
  mechanics of exploding phase spaces: Ontic open systems,” *Journal of
  Physics A: Mathematical and Theoretical*, vol. 51, no. 37, p. 375002, 2018.
- [54]

  P. A. M. Mediano, A. K. Seth, and A. B. Barrett, “Measuring integrated
  information: Comparison of candidate measures in theory and simulation,”
  *Entropy*, vol. 21, no. 1, 2018.
- [55]

  A. Barrett and P. Mediano, “The Phi measure of integrated information is not
  well-defined for general physical systems,” *Journal of Consciousness
  Studies*, vol. 26, no. 1-2, pp. 11–20, 2019.
- [56]

  A. K. Seth, A. B. Barrett, and L. Barnett, “Granger causality analysis in
  neuroscience and neuroimaging,” *Journal of Neuroscience*, vol. 35,
  no. 8, pp. 3293–3297, 2015.
- [57]

  In a nutshel, effective connectivity aims to uncover the minimal physical
  causal mechanism underlying the observed data, while functional connectivity
  describes directed or undirected statistical dependences [[56](https://arxiv.org/html/2004.08220v1#bib.bib56)].
- [58]

  A. Y. Chang, M. Biehl, Y. Yu, and R. Kanai, “Information closure theory of
  consciousness,” *arXiv preprint arXiv:1909.13045*, 2019.
- [59]

  The difference between stationary and maximum entropy distributions can be
  particularly dramatic in non-ergodic systems with multiple attractors. For a
  related discussion in the context of Integrated Information Theory, see
  Ref. [[55](https://arxiv.org/html/2004.08220v1#bib.bib55)].
- [60]

  F. Takens, “Detecting strange attractors in turbulence,” in *Dynamical
  Systems and Turbulence*. Springer,
  1981, pp. 366–381.
- [61]

  O. M. Cliff, M. Prokopenko, and R. Fitch, “An information criterion for
  inferring coupling of distributed dynamical systems,” *Frontiers in
  Robotics and AI*, vol. 3, p. 71, 2016.
- [62]

  J. Wilting and V. Priesemann, “Inferring collective dynamical states from
  widely unobserved systems,” *Nature Communications*, vol. 9, no. 1, pp.
  1–7, 2018.
- [63]

  Similar ideas have been recently explored by Kent [[73](https://arxiv.org/html/2004.08220v1#bib.bib73)].
- [64]

  A. Kolchinsky, “A novel approach to multivariate redundancy and synergy,”
  *arXiv preprint arXiv:1908.08642*, 2019.
- [65]

  A. B. Barrett, “Exploration of synergistic and redundant information sharing
  in static and dynamical gaussian systems,” *Physical Review E*,
  vol. 91, p. 052802, May 2015.
- [66]

  H. Kantz and T. Schreiber, *Nonlinear Time Series Analysis*. Cambridge University Press, 2004.
- [67]

  C. M. Bishop, *Pattern Recognition and Machine Learning*. Springer, 2006.
- [68]

  Note that the accuracy of this model is lower than the model presented in
  Ref. [[37](https://arxiv.org/html/2004.08220v1#bib.bib37)], for a precise reason: to predict position at time
  $t$, Chao *et al.* use a wavelet transform to obtain features
  that have represent ECoG from $t-$$1.1\text{\,}\mathrm{s}$ to $t$. Unlike Chao
  *et al.*, we work under the constraint of using supervenient
  features: for the axioms of the theory (in its current form) to hold, $V\_{t}$
  needs to be a function *of* $\bm{X}\_{t}$ *only*. This limits the possibilities
  for feature extraction, and naturally may result in lower-accuracy decoders.
- [69]

  R. G. James, B. D. M. Ayala, B. Zakirov, and J. P. Crutchfield, “Modes of
  information flow,” *arXiv preprint arXiv:1808.06723*, 2018.
- [70]

  T. H. Smith, O. Vasilyev, D. B. Abraham, A. Maciołek, and M. Schmidt,
  “Interfaces in confined Ising models: Kawasaki, Glauber and sheared
  dynamics,” *Journal of Physics: Condensed Matter*, vol. 20, no. 49, p.
  494237, 2008.
- [71]

  P. W. Anderson, “More is different,” *Science*, vol. 177, no. 4047, pp.
  393–396, 1972.
- [72]

  ——, *Basic notions of condensed matter physics*. CRC Press, 2018.
- [73]

  A. Kent, “Toy models of top down causation,” *arXiv preprint
  arXiv:1909.12739*, 2019.
