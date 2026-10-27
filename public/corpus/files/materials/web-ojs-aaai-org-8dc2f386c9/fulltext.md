---
id: web-ojs-aaai-org-8dc2f386c9-text
type: material
title: Simulation as Alibi---How the Social Order Gets Outsourced to LLM Agents
work_id: web-ojs-aaai-org-8dc2f386c9
source_url: https://ojs.aaai.org/index.php/AIES/article/download/43326/50886
retrieved_at: '2026-10-27'
conversion: pdf_text_extraction
quality_note: Текст извлечён из PDF с сохранением номеров страниц. Порядок колонок,
  таблицы, формулы и подписи могут быть искажены; рисунки доступны по ссылке на PDF.
  Это текстовая конверсия, не визуально эквивалентный оригинал.
language: original
sha256_text: 0e43cc658ffbed00ce2e04822ce025e35f8b8f1057f71a1acf266389cbd8b63b
---

> Источник: [https://ojs.aaai.org/index.php/AIES/article/download/43326/50886](https://ojs.aaai.org/index.php/AIES/article/download/43326/50886). Текст извлечён из PDF с сохранением номеров страниц. Порядок колонок, таблицы, формулы и подписи могут быть искажены; рисунки доступны по ссылке на PDF. Это текстовая конверсия, не визуально эквивалентный оригинал.

## Страница 1

                       Proceedings of the Ninth AAAI/ACM Conference on AI, Ethics, and Society (AIES 2026)




          Simulation as Alibi—How the Social Order Gets Outsourced
                                  to LLM Agents

                              Shiyun Tang1*, Zezheng Lin2
                                 1School of Economics, Renmin University of China
                                   2Harris School of Public Policy, University of Chicago
                                   jamietang@ruc.edu.cn, zezhenglin@uchicago.edu



                      Abstract                             a pace-setting project to accelerate AI-enabled simulation
                                                       and Agent Network as a program for AI-enabled battle man-
  LLM agent societies are moving rapidly from academic sand-        agement (U.S. Department of War 2026). Independently,
  boxes into commercial platforms, military infrastructure, and
                                                                 the European Commission’s Emergency Response Coordi-
  government operations. Across these domains, the language
                                                                nation Centre commissioned scientific advice on AI in emer-   of emergence—the claim that coordination patterns, norms,
  and consensus arise spontaneously from local interaction—        gency and crisis management, including resource alloca-
   has become the default vocabulary for describing multi-          tion and decision support (SAPEA 2025). Across commer-
   agent behavior. This paper argues that emergence discourse           cial, military, and governmental settings, behavioral regular-
  performs institutional work beyond scientific description:           ities in multi-agent systems are routinely described in the
    it renders invisible the procedural architecture—interaction        language of emergence—coordination patterns that “arise,”
   topologies, action grammars, sanction architectures, and ben-       norms that “crystallize,” consensus that appears to come
   eficiary structures—authored by identifiable actors. Drawing        from local interaction. That vocabulary has become a de-
  on the concept of the alibi from critical humanitarian stud-                                                                         fault framing device, invoked with such regularity that its
   ies, we develop the simulation as alibi framework, compris-
                                                                        institutional function is easy to miss.
   ing three mechanisms: epistemic laundering, accountability
   displacement, and legitimacy extraction. Through critical dis-           Yet every such interaction occurs inside what we term
   course analysis of 20 research papers and 5 platform docu-        a procedural architecture authored by identifiable actors:
   ments, systematic coding of 142 papers on LLM agent soci-      who may interact, what actions are recognized as valid, who
   eties, institutional gap analysis of 6 governance frameworks,         holds the authority to sanction violations, whether rules can
  and cross-domain case studies spanning commercial, mili-        change, and whose interests the interaction topology serves.
   tary, and governmental settings, we demonstrate three conver-       Each of these design choices embeds specific values, inter-
   gent findings. First, in our corpus, claims of emergence are al-                                                                            ests, and assumptions about what social order should look
  most always associated with procedurally conditioned archi-
                                                                             like. This paper asks what institutional work the emergence
   tectures. Second, the governance frameworks examined lack
                                                            claim performs when the stakes shift from laboratory exper-   the conceptual resources to detect this condition. Third, the
   resulting accountability gap is distributionally stable because        iment to platform scaling and state deployment—and what it
   the actors positioned to close it benefit from its persistence.       means for accountability when the claim systematically di-
  We propose Upstream Disclosure Obligations for Agent Soci-          rects attention away from these authored choices. To frame
   eties (UDOS), which extend accountability from deployment-          this question, we draw on the concept of the alibi from crit-
   stage auditing to the upstream design stage where procedural          ical humanitarian studies. Fassin (2012), examining human-
   architecture is authored. UDOS shifts the regulatory question          itarian intervention in crisis zones, shows how the language
  from what does this model do? to who wrote the rules under         of moral urgency systematically masks the political and eco-
  which this model interacts?                                                     nomic arrangements that produce the crisis. Redfield (2013),
                                                              analyzing M´edecins Sans Fronti`eres, demonstrates how hu-
             1  Introduction                         manitarian organizations’ claim to universal benevolence
                                                                functions as an alibi that insulates them from accountabil-
The migration of LLM agent societies from academic sand-                                                                            ity for the structural consequences of their presence. We ex-
boxes to commercial platforms and state infrastructure has                                                              tend this analytical lens to LLM agent simulation: the emer-
accelerated with remarkable speed. In 2025, Artificial So-                                                         gence narrative functions as an alibi, presenting simulation
cieties, a commercial platform that simulates networks of                                                                as neutral discovery while systematically concealing the au-
AI personas, secured C4.5 million in venture funding (Cen-                                                               thored conditions under which social order is produced. We
don Garcia 2025). In January 2026, the U.S. Department of                                                          term this phenomenon simulation as alibi—the outsourcing
War released an AI strategy that names Ender’s Foundry as                                                                of social order to algorithmic systems whose design con-
                                                                     ditions are rendered invisible, and whose designers thereby
   *Corresponding author.
                                                            escape accountability.Copyright © 2026, Association for the Advancement of Artificial
Intelligence (www.aaai.org). All rights reserved.                         Existing critical scholarship on AI governance, particu-


                                                   2517

## Страница 2

larly within the FAccT tradition, has focused overwhelm-      develops UDOS. Section 8 discusses implications and limi-
ingly on model-level concerns. Researchers have docu-       tations. Section 9 concludes.
mented bias in training data (Buolamwini and Gebru 2018),
demanded transparency in algorithmic outputs (Ananny and             2  Theoretical Framework
Crawford 2018), and proposed documentation standards
for model behavior and performance (Gebru et al. 2021;     Our theoretical framework operates at the intersection of
Mitchell et al. 2019). Recent work has begun to examine       three  scholarly  traditions. From  critical humanitarian
visibility into AI agents (Chan et al. 2024) and the relational       studies, we draw on Fassin (2012) and Redfield (2013), who
nature of AI agency (Timaite and Castelle 2025), yet these      examine the alibi as a structural logic of institutional action:
interventions share a common analytical horizon: their ob-       the alibi is not merely rhetorical deception but the struc-
ject of critique remains the individual model or agent. This       tural position produced by the gap between an institution’s
paper shifts the register from the model level to the archi-      claimed moral purpose and the consequences its action gen-
tecture level—from what models do to who writes the social       erates. The language of benevolence makes the political
architectures within which they operate. At this level, even     economy of intervention appear irrelevant. The emergence
a thoroughly documented model may be embedded in a pro-       narrative occupies the same structural position in LLM agent
cedural architecture whose authorship is undisclosed, unex-       societies: it allows platforms, governments, and militaries to
amined, and ungoverned. The canonical generative agent ar-       present simulation as a benevolent epistemic project while
chitecture (Park et al. 2023), for instance, enables 25 agents      obscuring the political and economic interests embedded in
to autonomously coordinate a party—yet the memory, re-         its architecture.
flection, and planning modules that condition this coordi-       From science and technology studies, we adopt the
nation are authored design choices, not emergent proper-       insight of Star (1999) that successful infrastructure be-
ties. A model card may exhaustively detail training data and     comes invisible—it recedes into the background of prac-
evaluation metrics while saying nothing about who defined        tice, and this invisibility is structurally produced, not acci-
the interaction topology, who chose which actions are rec-       dental. Bowker and Star (1999) extend this to classification
ognized as valid, or whose interests the simulation serves.      systems, showing how categories become naturalized until
This architecture-level gap, we argue, has been largely over-       their constructedness disappears. The co-production thesis
looked. To structure our inquiry, we ask:                         of Jasanoff (2004) shows that how we know social order is
                                                                inseparable from how we produce it. Applied here, proce-
 • RQ1: How does the discourse of emergence render in-                                                                 dural architecture becomes invisible precisely when it func-
   visible the designers of procedural architecture in LLM                                                                     tions well, and the emergence narrative reinforces—rather
   agent societies?                                                              than challenges—this invisibility.
 • RQ2: What are the institutional consequences of this out-       From platform capitalism and FAccT scholarship, we
   sourcing across commercial, governmental, and military     draw the concept of transparency theater (Ananny and Craw-
   domains?                                                    ford 2018), in which disclosure instruments create the ap-
 • RQ3: Do existing governance frameworks identify and      pearance of accountability while excluding the most conse-
   regulate the algorithmic outsourcing of social order?           quential dimensions of design. Platform operators function
                                                                as private regulatory systems, defining rules of interaction,
 • RQ4: How can upstream disclosure obligations restore
                                                              value generation, and distribution within their ecosystems
    visibility and accountability for procedural authorship?
                                                               (Srnicek 2017)—the very architecture the alibi renders in-
  This  paper makes  three  contributions.  Conceptual:       visible. These traditions converge on a single observation:
the  simulation  as  alibi  framework,  comprising  three       the architecture that organizes social interaction—whether
mechanisms—epistemic  laundering,  accountability  dis-      humanitarian, infrastructural, or algorithmic—tends to dis-
placement, and legitimacy extraction—through which emer-      appear from view precisely when its effects are most conse-
gence discourse obscures procedural authorship. Analyti-       quential.
cal: a multi-method investigation spanning 20 papers ana-     A crucial distinction must be drawn at the outset. This
lyzed through critical discourse analysis plus 142 system-      paper does not deny the scientific reality of emergence
atically coded papers, five platforms, and six governance       in complex systems—it is a well-established phenomenon
frameworks, showing that within our corpus claims of emer-       in multi-agent systems, where local interactions produce
gence are almost always associated with procedurally condi-       global patterns irreducible to individual agent intentions
tioned architectures, and that the frameworks we examined      (Holland 1998; Sawyer 2005), and recent architectures ex-
contain no explicit mechanism for disclosing procedural au-        plicitly demonstrate procedurally conditioned norm emer-
thorship. Governance-oriented: Upstream Disclosure Obli-      gence in LLM agent societies (Ren et al. 2024). Our argu-
gations for Agent Societies (UDOS)—requirements extend-     ment is instead about the institutional work the emergence
ing accountability from deployment auditing to upstream      claim performs when it migrates from scientific description
design-stage disclosure. The paper proceeds as follows. Sec-       to organizational justification. When a research paper re-
tion 2 establishes the theoretical framework and introduces       ports that agents developed cooperative norms, the language
the Alibi Function. Section 3 describes our multi-method       of emergence functions as an empirically grounded claim,
approach. Sections 4 through 6 present findings across dis-       subject to replication and revision. When a defense con-
course, institutional, and cross-domain analyses. Section 7       tractor or platform company deploys the same language to


                                                   2518

## Страница 3

justify procurement or policy recommendations, the emer-       tage particular groups—inequitable resource allocation, dis-
gence claim ceases to operate as a testable hypothesis and      criminatory coordination patterns, systematically unequal
begins to operate as a rhetorical device that systematically      influence—the emergence narrative allows designers to at-
erases the designer from the frame. This migration is made       tribute these outcomes to the agents themselves, as if they
possible by a genealogy that has progressively weakened      arose from intrinsic social dynamics rather than from inter-
the evidential constraints on emergence claims—from Mill’s       action topologies, action grammars, and sanction architec-
“heteropathic” causation through Broad’s “trans-ordinal”       tures authored by identifiable actors. The designer becomes
laws to Chalmers’s formally defined strong emergence (Mill       invisible; the system becomes the agent; responsibility evap-
1843; Broad 1925; Chalmers 2006)—producing a concep-       orates.
tual looseness that the Alibi Function appropriates. The       The third mechanism, legitimacy extraction, describes
claim insulates the architecture from scrutiny not because       the use of simulation outputs to justify consequential de-
it is false but because it has been displaced from the context       cisions without disclosing the authored conditions under
on which its scientific meaning depends. This distinction—      which those outputs were produced. A government agency
emergence as scientific concept versus emergence as institu-       cites simulation results to authorize autonomous systems de-
tional rhetoric—is the analytical fulcrum of the entire paper.      ployment; a corporation invokes emergent efficiency gains
The pattern realism of Dennett (1991) illustrates the mecha-       to restructure labor; a military command references emer-
nism by which this conflation operates: its criteria are thresh-      gent threat patterns to authorize targeting decisions. In each
olds of detection, not thresholds of authorship—a pattern       case, the simulation output is treated as evidence of a world
can be real, stable, and predictively powerful and still be the      discovered rather than a world authored—as if the architec-
product of system architecture rather than spontaneous self-       ture that generated the output were irrelevant to its meaning.
organization. The conflation of realism about patterns with                                                          These three mechanisms are mutually reinforcing com-
realism about autonomy is the conceptual operation the Al-                                                            ponents of a single institutional logic. Epistemic laundering
ibi Function performs; we treat pattern realism not as a foun-                                                              provides the credibility on which legitimacy extraction de-
dation but as a diagnostic object revealing how governance                                                             pends; legitimacy extraction creates demand for more simu-
gets evaded in the name of emergence.                                                                          lation, deepening the conditions for accountability displace-
  Before specifying the mechanisms, we define the alibi                                                          ment; and accountability displacement reinforces the per-
concept’s boundary conditions. Not every form of opacity                                                               ception that simulation outputs are products of autonomous
constitutes an alibi. Drawing on Fassin (2012) and Ananny                                                                     social dynamics. Figure 1 visualizes this structure: three
and Crawford (2018), we identify four jointly necessary                                                        mechanisms, each driven by the emergence narrative, con-
elements: (i) Representational Claim—the system claims                                                             verge on the alibi effect, in which the designer of procedu-
to represent a social reality in a way that authorizes ac-                                                                            ral architecture is rendered invisible from the accountability
tion; (ii) Procedural Closure—output production is archi-                                                              frame. Beneath all three sits the procedural architecture—
tecturally unavailable to external inspection; (iii) Attribu-                                                                 the interaction topology, action grammar, sanction architec-
tion Displacement—responsibility for outcomes is discur-                                                                          ture, and beneficiary structure whose design conditions the
sively transferred to emergent processes rather than human                                                                   patterns attributed to self-organization. The alibi effect is not
authorial choices; (iv) Verification Asymmetry—the cost                                                            a methodological flaw to be corrected with better practices;
of independently verifying system claims exceeds the cost                                                                                                it is an institutional feature enabling the rapid scaling of
of accepting outputs at face value. A governance gap satis-                                      LLM agent societies from sandbox to society while the ques-
fying all four conditions is a simulation alibi; one satisfying                                                                     tion of who wrote the rules remains structurally unasked.
fewer is a transparency deficit of a different order.
  To  capture  the  institutional work performed by  the
emergence narrative, we introduce the Alibi Function—                 3  Methodology
three interconnected mechanisms that together constitute
simulation as alibi. The  first, epistemic laundering, de-      3.1  Research Design
scribes the transfer of credibility from academic to com-
mercial and governmental settings through the language      This study adopts a multi-method qualitative design orga-
of emergence. Concepts validated in academic agent-based      nized across three data streams, corresponding to three ana-
modeling—cooperative signaling, norm crystallization, in-        lytical levels of the simulation as alibi phenomenon. We po-
formation cascades—are appropriated by platform compa-       sition this paper as a multi-method critical analysis bringing
nies and defense contractors who invoke the same terminol-       together qualitative critical discourse analysis and system-
ogy to present proprietary systems as scientifically validated        atic quantitative coding within an interpretive epistemologi-
instruments. The result is not merely the imprimatur of sci-       cal tradition (Ricoeur 1970; Fairclough 2003). Our aim is to
ence on nonscientific projects but a systematic confusion be-       reconstruct the institutional logic connecting discourse, gov-
tween the contexts in which emergence claims are generated      ernance architecture, and design practice, rather than to test
and applied.                                                       replicable hypotheses; the AIES community accepts work of
  The second mechanism, accountability displacement,        this form when the contribution lies in re-framing a domain
describes the attribution of social outcomes to agent self-      (Friedman and Kahn 2003; Selbst et al. 2019). CDA pro-
organization rather than platform or institutional design.      vides mechanism depth; cross-tabulation tests whether pat-
When  a  simulation  produces outcomes  that  disadvan-       terns are systematic across a larger corpus.


                                                   2519

## Страница 4

                “Emergence” Narrative                      3.3  Analytical Approach
                                                                       Critical discourse analysis follows an  iterative protocol
              Epistemic         Accountability        Legitimacy
                                                            adapted from Fairclough (2003) and Wodak and Meyer
             Laundering        Displacement          Extraction
                                                                (2016), applied to the Stream 1a papers and the Stream 2
                                                              platform documents. Systematic coding anchors each judg-
                 ALIBI EFFECT                       ment in the paper’s emergence explanation sentence—the
                              Designer: Invisible                            sentence in which a paper explains why an emergent phe-
                                                  nomenon occurs—and asks whether the designer or design
                           Procedural Architecture                          choices appear in that sentence as a causal subject. Designer
   (Interaction Topology · Action Grammar · Sanction Architecture · Beneficiary)          visibility (DV) is coded as full when the emergence ex-
                                                                planation attributes the outcome to specific design choices
Figure 1: The Alibi Function: conceptual model of how the        (e.g., “removing memory prevents the emergence of sta-
emergence narrative, through three interconnected mecha-       ble cooperation”); partial when the architecture is disclosed
nisms (epistemic laundering, accountability displacement,       in the methods but the emergence explanation does not re-
legitimacy extraction), produces the alibi effect in which       turn to those design choices; and absent when emergence is
the designer of procedural architecture is rendered invisi-       narrated as spontaneous, self-organized, or population-level
ble. The architecture layer beneath the effect is the authored        (e.g., “norms emerged naturally from interactions”). Risk,
substrate whose design conditions the patterns attributed to      governance, and ethical discussions do not count as evidence
self-organization.                                               of designer visibility, and the four dimensions are coded in-
                                                               dependently.

                                              4  Critical Discourse Analysis: Rhetorical
3.2  Data Streams
                                                         Mechanisms
Stream 1  comprises  two  complementary  components:      4.1  Qualitative Rhetorical Analysis
Stream 1a prioritizes interpretive depth in identifying the       Critical discourse analysis is well-suited to our question be-
rhetorical mechanisms of designer erasure, while Stream 1b      cause it examines the institutional work performed by dis-
tests whether the identified pattern generalizes across a      course rather than merely verifying its truth value (Fair-
broader literature. Stream 1a (critical discourse analysis)      clough 2003). Our texts span research papers, platform doc-
comprises 20 papers on LLM agent societies (2023–2026)      umentation, and policy frameworks—the genres through
from AAMAS, NeurIPS, ICML, Nature Computational Sci-      which emergence migrates from scientific description to in-
ence, and arXiv, reporting emergent social phenomena in       stitutional justification (Wodak and Meyer 2016; Fairclough
multi-agent LLM systems. Stream 1b (systematic coding)      1992; van Dijk 1993).
comprises 142 papers from a 2022–2026 search of the LLM        Across the 20 papers and 5 platform documents ana-
agent society and social simulation literature; inclusion re-       lyzed, four rhetorical strategies recur, each contributing to
quired that a paper report at least one emergent social       the systematic erasure of designer presence from the tex-
phenomenon in an LLM-driven multi-agent system (e.g.,       tual frame. Passive and subjectless constructions consti-
norm emergence, role specialization, cooperation, coordi-       tute the most frequent strategy, appearing in 82% of high-
nation, bias, polarization, culture formation) using emer-      emergence-intensity documents. Verbs are systematically
gence discourse, and describe an interaction architecture       passivized: “norms crystallized,” “coordination emerged,”
or design mechanism (topology, action grammar, sanction,      “consensus was reached.” The passive construction makes
prompt/role design, memory, communication protocol, re-       the question of who designed the conditions grammatically
ward/payoff). The search deliberately spans peer-reviewed      unavailable—the sentence admits no agent. Nominaliza-
venues and arXiv preprints alike, because the central de-      tion—the conversion of processes into entities—transforms
bates over emergent behavior are currently unfolding in the      dynamic design activities into static features: “The interac-
preprint literature. The 142 papers are coded on four dimen-       tion topology enables spontaneous coordination.” The topol-
sions: emergence intensity (EI), designer visibility (DV),     ogy is not presented as something designed, chosen, or au-
deployment proximity (DP), and regulatory translatability       thored; it simply enables. Recontextualization selectively
(RT). Stream 2 comprises documentation from five com-      imports academic authority into commercial and govern-
mercial platforms (Artificial Societies, Altera, Character.AI,      mental documents without the epistemic caveats that ac-
Voyager, Google DeepMind). Stream 3 comprises six gov-      companied the original research. A platform white paper
ernance frameworks: the EU AI Act, NIST AI RMF 1.0,     may cite AAMAS findings on norm emergence while omit-
the U.S. Department of War AI Strategy, the White House       ting that the cited experiments used carefully bounded ac-
Executive Order on AI, the SAPEA review of AI in emer-       tion spaces and explicit sanction mechanisms—precisely the
gency and crisis management commissioned by the Euro-       features the platform’s own system may lack. Legitimacy
pean Commission’s ERCC, and China’s MOST AI Ethics      nesting occurs when each document in a chain of reference
Guidelines. The coding data, codebook, audit materials, and       defers authorship to another: a government policy cites a
analysis scripts supporting this study are publicly available       platform’s technical report, which cites academic research,
at https://github.com/JamieJustTang/simulation-as-alibi.        which describes simulation conditions; at no point does any


                                                   2520

## Страница 5

document accept authorial responsibility for the social ar-                   DV: Full DV: Partial DV: Absent  Total
chitecture being described. The policy treats the platform                                                                   EI: Low     19 (53%)  15 (42%)     2 (6%)     36
as transparent; the platform treats the simulation as scien-                                                                                 [+0.2]     [+0.4]      [−1.1]
tifically validated; the academic paper treats emergence as          EI: Medium 24 (49%)  24 (49%)     1 (2%)     49
a finding about agents rather than about the conditions the                        [−0.1]     [+1.2]      [−2.0]
experimenters designed.                                            EI: High    28 (49%)  15 (26%)    14 (25%)    57
  The policy implication of these findings converges on a                        [−0.1]     [−1.4]      [+2.7]
single structural pattern. The same discursive strategies that                                                                       Total          71        54         17      142
render the designer invisible in research discourse also ren-
der procedural authorship plausibly irrelevant to regulators.                                                             Table 1: Cross-tabulation of emergence intensity (EI) by de-
If the language of emergence presents simulation outputs                                                                 signer visibility (DV) with row percentages and standardized
as products of autonomous agent dynamics rather than au-                                                                   residuals (in brackets). Standardized residuals |z| > 1.96
thored conditions, then a regulator reading the resulting doc-                                                                   indicate cells contributing significantly to the association at
umentation finds no occasion to ask who wrote the rules. The                                          α = 0.05.
question is framed out of the discourse before it can be posed
as a regulatory question. In our corpus, this is a systemati-
cally produced feature of how emergence discourse operates
                                                          gory (49%). Medium EI shows a similar distribution to Low
across the institutional ecology of LLM agent societies, not
                                                                   EI, with Absent DV at 2%. The effect is sharply concen-
an oversight in individual documents.
                                                                         trated: High-EI papers constitute 40% of the corpus yet ac-
  Analysis claim. In the 20 papers and 5 platform doc-
                                                            count for 82% of all absent designer attribution. Designer
uments examined in  this qualitative analysis, what was
                                                                          invisibility is therefore not a uniform property of agent soci-
labeled emergent was,  in  every  instance,  procedurally
                                                                 ety papers but a regime-specific one, concentrated precisely
conditioned—produced within authored interaction topolo-
                                                       where emergence claims are strongest.
gies, action grammars, and sanction architectures that are
                                          We deliberately test the EI–DV association with a nom-
invisible in the emergence narrative but discoverable on in-                                                                       inal χ2 rather than an order-aware or exact statistic be-
spection. The emergence claim functions not as a descrip-
                                                            cause our hypothesis is a non-monotonic threshold, not a
tion of unconditioned social dynamics but as an alibi that
                                                        monotonic trend: an ordinal test would assume the very lin-
makes the architectural conditions of simulation outputs
                                                                 ear gradient the alibi framework predicts should be absent.
structurally unavailable to the accountability frame.
                                                            This choice is corroborated by the non-significant Pearson
                                                                    correlation between EI and DV treated as ordinal variables4.2  Cross-Corpus Systematic Pattern Analysis
                                                                    (r = −0.141, p = 0.094). The significant χ2 alongside the
To test whether the qualitative patterns identified in Sec-                                                                     null ordinal correlation is precisely the signature of a cate-
tion 4.1 hold systematically across a larger corpus, we                                                                   gorical threshold: designer erasure is a property of the High
conducted a  cross-tabulation  analysis of  the 142-paper                                                        EI regime rather than a monotonic function of emergence
Stream 1b corpus on two dimensions. Emergence intensity                                                                         intensity.
(EI: low, medium, high) captures how strongly and caveat-                                      A secondary finding concerns regulatory translatability
free a paper asserts that behavior arises spontaneously; de-                                                              (RT): EI and RT are positively correlated (r = 0.194, p =
signer visibility (DV: full, partial, absent) captures how ex-                                                                 0.021). Papers making stronger emergence claims are more
plicitly a paper attributes the interaction architecture to iden-                                                                   readily translated into governance terms, consistent with le-
tifiable design choices. The two constructs are coded on                                                             gitimacy extraction: the same language that removes condi-
independent criteria—EI from the assertion of spontaneity,                                                                  tioning architecture from view also makes simulation out-
DV from the attribution of authorship—so a paper can assert                                                                puts appear as decontextualized findings available for regu-
strong emergence while still crediting specific design deci-                                                                     latory uptake.
sions; the off-diagonal cells where it does so are what dis-                                                         Taken together, the systematic coding analysis provides
tinguish the two dimensions empirically. The central predic-                                                             convergent quantitative evidence for the threshold pattern
tion of the alibi framework is that the inverse relationship be-                                                                       identified qualitatively in Section 4.1. Across the 142-paper
tween EI and DV should operate as a threshold effect rather                                                                corpus, designer  invisibility  is not gradually traded off
than a smooth gradient—designer visibility should remain                                                                  against emergence intensity; it is concentrated at the high-
largely intact at moderate emergence intensities and erode                                                                        est level of emergence claims, where absent designer attri-
sharply at the highest intensity, where the alibi function is                                                               bution is more than four times as likely as elsewhere in the
fully operational. Table 1 presents the 3×3 cross-tabulation                                                                corpus, while stronger emergence claims simultaneously be-
with row percentages and standardized residuals.                                                 come more readily available for governance uptake.
  The association between EI and DV is statistically signif-
icant (χ2 = 16.62, df = 4, p = 0.002, Cram´er’s V = 0.242).                                              5  Institutional Gap Analysis: Findings II
The pattern is threshold-like rather than gradual. At Low
EI, Full DV is the dominant pattern (53%), while Absent                    [Addresses RQ3]
DV appears in only 6% of papers; at High EI, absent de-    We define the procedural authorship disclosure gap as the
signer attribution rises to 25%—more than four times its      absence of any regulatory requirement for designers of LLM
Low-EI rate—even though Full DV remains the modal cate-      agent societies to disclose who authored the interaction


                                                   2521

## Страница 6

  Governance framework         D1  D2  D3  D4         architecture-level object), and distributionally stable (those
                                                                positioned to advocate disclosure benefit from its absence). EU AI Act Art. 13           ×  ×  ×  ×
  NIST AI RMF 1.0         △  ×  ×  ×           Analysis claim. The procedural authorship governance
 DoW AI Strategy (2026)        ×  ×  ×  ×        gap is not a collection of individual omissions across six
  White House Exec. Order on AI    ×  ×  ×  ×         separate frameworks. It is a structural product of a regula-
  SAPEA AI-in-crisis review (ERCC)  ×  ×  ×  ×         tory unit that has no category for written social architecture,
  China MOST AI Ethics Guidelines  ×  ×  ×  ×         discursively maintained by an emergence frame that gives
                                                                   regulators no occasion to notice its absence, and distribu-
Table 2: Governance framework coverage of procedural au-       tionally stable because those who could close it benefit from
thorship disclosure requirements. × = no coverage; △= par-         its continuation.
tial coverage.
                                              6  Case Studies and Stakeholder Analysis:
                                                         Findings III [Addresses RQ2]
topology, action grammar, sanction architecture, and bene-
ficiary structure of the system before deployment. This con-     To examine how simulation as alibi operates across do-
cept is operationalized across four diagnostic dimensions:      mains, we selected three cases using a systematic variation
(D1) interaction topology—who may interact, under what       design: the object of analysis is held constant while the in-
constraints? (D2) action grammar—which actions are valid,       stitutional domain—commercial, military, governmental—
and who defined them? (D3) sanction architecture—how are       varies. Each case tests whether the alibi pattern is domain-
rule violations detected and enforced? (D4) beneficiary dis-       specific or  structurally general. The  Artificial Societies
closure—whose interests does the system’s design serve?         platform was selected not as a representative commercial
  The Stream 1b results predict that the procedural author-      platform—there is no representative platform in this nascent
ship gap will be most severe where governance interven-     domain—but because it publishes an explicit public product
tion is most urgently needed: strong emergence claims make       description, making the gap between claimed simulation and
findings more readily translatable into governance terms      undisclosed architecture easier to inspect than in less trans-
precisely by stripping away the authored conditions that reg-       parent platforms. The EU Emergency Management case is
ulators would need to inspect. We now test this prediction       prospective rather than retrospective: it illustrates the pre-
against six Stream 3 governance frameworks.                     ventive value of UDOS by showing what current documen-
  We assessed six governance frameworks against these       tation cannot disclose before crisis deployment.
four dimensions. Table 2 summarizes the results. The EU       The cases are based on document-based pattern inference
AI Act Article 13 mandates transparency of system capa-       rather than independent audit. We analyze what documenta-
bilities and limitations but does not extend to architecture-       tion claims, reveals, and omits, treating notable absences as
level disclosure; the gap between transparency rhetoric and       analytically informative (Trouillot 1995; Meyer 2012). Each
legal enforceability (Wachter, Mittelstadt, and Floridi 2017)      case specifies the claim, documented architecture, undocu-
is thus amplified at the architecture level. NIST AI RMF 1.0      mented architecture, and alibi implication. In the military
comes closest: the “Map” function could in principle encom-       case, the point is not that a specific hidden design choice has
pass interaction architecture, so we mark NIST as △on D1.      been proven, but that the public record makes procedural au-
Yet nothing in the RMF operationalizes this mapping as an       thorship structurally unanswerable.
explicit disclosure obligation, and the remaining dimensions       Case A: Commercial — Artificial Societies. Claim:
are uncovered. The other four frameworks contain no pro-      Public materials present the product as “networks of thou-
vision addressing any dimension. None of the six, in short,      sands of AIs that model the opinions of important groups
contains an explicit architecture-level procedural authorship       of people,” constructed as interconnected persona networks
disclosure mechanism.                                          of 300 to over 5,000 agents and sold for high-stakes com-
   It is not coincidental that frameworks spanning Euro-      munications and marketing decisions (Artificial Societies
pean rights-based, American innovation-oriented, and Chi-      2026). Documented: Scale, claimed accuracy metrics, and a
nese state-developmental traditions exhibit near-complete       paying-client use case. Not documented: Who may interact
gaps on the same dimensions. The convergence is structural.      with whom, which actions are available, how sanctions are
First, each framework regulates the “AI system”—defined       applied, who authored those conditions, or whose interests
by inputs, outputs, and capabilities—rather than the inter-       the simulation is designed to serve. Alibi implication: Simu-
action environment in which the system operates. Second,       lation is positioned as a window onto audience reality (i); the
emergence discourse sustains this regulatory unit by pre-       interaction architecture remains commercially protected (ii);
senting simulation outputs as products of autonomous inter-      outputs can be treated as discovered social response rather
action rather than authored design. Third, the gap is distri-      than as products of an authored persona network (iii); and
butionally non-neutral: the actors positioned to close it are      independent verification requires reconstructing proprietary
the same actors who benefit from architecture-level invis-       architecture at prohibitive cost (iv). All four alibi conditions
ibility. The term structural is therefore precise: the gap is       are met.
taxonomic (the regulatory unit has no category for interac-       Case B: Military — Department  of War/Ender’s
tion architecture), discursively self-maintaining (emergence      Foundry. Claim: The Department of War’s AI strategy
language gives regulators no textual basis to recognize an     names Ender’s Foundry as accelerating “AI-enabled sim-


                                                   2522

## Страница 7

ulation capabilities” and sim-dev/sim-ops feedback loops,      change the terms of the simulation. If procedural authorship
and Agent Network as AI agents for “battle management        is invisible, the accountability chain is broken at its source;
and decision support, from campaign planning to kill chain         if those who benefit from this invisibility can maintain it, the
execution” (U.S. Department of War 2026). Documented:      gap will not close through self-correction. The effective in-
Program names and high-level functional descriptions in       tervention point is therefore upstream, where the rules are
the public memorandum. Not documented: The architecture       written before their consequences are redescribed as emer-
conditioning simulated or agentic outputs—action grammar,      gence.
sanction architecture, and interaction topology—is absent
from the public record and treated as operationally sensi-         7 UDOS Framework: Governance
tive. Alibi implication: This is the extreme opacity pattern,
                                                         Contribution [Addresses RQ4]doubly reinforced by capability discourse and national se-
curity practice: (i) a representational claim that simulation    We present UDOS as a diagnostic framework rather than
and agentic decision support yield actionable operational op-      a fully specified regulatory proposal: it operationalizes the
tions; (ii) procedural closure through classification; (iii) at-       four constitutive elements of simulation alibi into criteria
tribution of outputs to system capability rather than to named       for assessing whether a given governance arrangement per-
architectural choices; and (iv) verification asymmetry—even      mits the alibi structure. Following the precedent of trans-
an auditor with clearance could not easily reconstruct who      parency auditing frameworks that establish disclosure cri-
authored the interaction conditions from the public record.         teria without prescribing legislative outcomes (Ananny and
  Case C: Governmental — EU Emergency Manage-      Crawford 2018; Mitchell et al. 2019), UDOS answers what
ment. Claim: The Commission’s Emergency Response Co-      must be disclosed to determine whether an alibi condition
ordination Centre commissioned scientific advice on AI in        exists, not what the law should require; recent work on adap-
emergency and crisis management, including resource al-       tive accountability in multi-agent systems (Alqithami 2025)
location, forecasting, and decision support (SAPEA 2025).       offers a technical complement to its structural disclosure re-
The published review recommends data frameworks, bench-      quirements. The core design principle is that accountability
marks, and sandbox environments before full deployment,      must extend beyond deployment-stage auditing to upstream
and does not require architecture-level disclosure of inter-       design-stage disclosure. By the time a simulation produces
action topology, action grammar, or allocative logic. Docu-      consequential outputs, the conditions that made those out-
mented: The request, the review’s functional scope, and its     comes possible have already been authored into the archi-
call for human oversight. Not documented: Who would write       tecture. Downstream intervention can detect harm; only up-
the rules for crisis AI, how competing regional needs would      stream disclosure can prevent the conditions of harm from
be weighted, or what mechanism would exist to contest      being structurally invisible.
those design decisions. As a prospective case, the finding     UDOS comprises four core requirements for any LLM
is preventive: no mechanism exists to know who wrote the      agent society deployed in commercial, governmental, or
rules before crisis deployment. Alibi implication: Whether       military settings; Figure 2 summarizes how they are filed,
future crisis-AI outputs would arise from model behavior or      safeguarded, and acted upon. Requirement 1: Interaction
from an authored allocative architecture is structurally unan-      topology disclosure—the complete specification of who
swerable from the public record. The architecture encoding     may interact, under what constraints, and with what struc-
allocative decisions would function as a de facto policy in-       tural asymmetries, including any network architecture, agent
strument, insulated from democratic oversight by technical       role differentiation, or communication channel restrictions
delegation rather than by proprietary secrecy.                  imposed by the system designer. Requirement 2: Action
  Table 3 summarizes the pattern of outsourcing across     grammar disclosure—the complete set of valid actions
the three cases. Epistemic outsourcing appropriates aca-       available to agents, their preconditions, effects, and any pri-
demic terminology to present proprietary, classified, or un-       oritization or ranking logic, including the boundary con-
documented architectures as scientifically validated discov-       ditions distinguishing valid from invalid actions. Require-
eries. Accountability outsourcing attributes consequential     ment 3: Sanction architecture disclosure—the full de-
outcomes to emergent agent dynamics rather than to au-       scription of how rule violations are detected, adjudicated,
thored design choices. Governance outsourcing insulates      and sanctioned, including whether sanctions are determin-
architecture-level design from oversight through platform        istic or probabilistic, who or what triggers enforcement,
self-regulation, national security exemption, or technical      and whether the sanction architecture itself can be modified
delegation.                                              and by whom. Requirement 4: Beneficiary disclosure—a
 A cross-case stakeholder analysis yields a convergent      statement of whose interests the simulation’s design serves,
conclusion: those who have the power to close the procedu-     who has the authority to modify the architecture after de-
ral authorship gap benefit from its continuation. Commer-      ployment, and how the distribution of benefits and harms
cial value depends on proprietary interaction architecture;       across affected parties was assessed prior to deployment.
military advantage depends on classification; governmental     UDOS bears a surface resemblance to existing trans-
operational flexibility depends on the absence of parliamen-      parency instruments such as Model Cards (Mitchell et al.
tary architecture-level oversight. This distributional stability      2019) and System Cards, but operates at a fundamentally
is not a conspiracy but a structural equilibrium: the costs       different ontological level. Model Cards disclose proper-
of designer invisibility are borne by those without power to        ties of the model—training data composition, evaluation


                                                   2523

## Страница 8

                                Commercial                      Military               Governmental

           Epistemic       Academic credibility (proprietary)   Tactical objectivity (classified)       Policy neutrality
           Accountability          Agent attribution              Emergent dynamics        Coordination attribution
          Governance                Self-regulation                  Security exemption          Technical delegation

Table 3: Three modes of algorithmic social order outsourcing across institutional domains: epistemic, accountability, and gov-
ernance.


   DESIGN STAGE                                         To illustrate UDOS in practice, consider an Artificial So-
    (upstream)                                                            cieties platform whose simulation outputs inform munici-
                                                                 pal housing policy. Under current practice, the platform re-
                    Architecture Author                                                                   leases a model card, a system card, and a responsible AI
                                                     files                           report—none of which disclose who defined the interaction
                                                                topology, which agents were assigned which action sets,
            UDOS Disclosure                      who designed the sanction architecture, or whose interests
              R1 Interaction topology                                                                Anti-box-           the objective function embeds. A UDOS-compliant submis-     Verification
              R2 Action grammar                                                                        ticking            sion would include the interaction topology (who may com-      threshold
              R3 Sanction architecture                                                          municate with whom, including platform-imposed asymme-
              R4 Beneficiary structure
                                                                                tries); the action grammar (the complete set of available ac-
                                       reviewed by                              tions, including those unavailable by design); the sanction
                                                                    architecture (how antisocial behavior is detected and sanc-
             Independent Oversight Authority
                                                                    tioned, and whether rules can be modified mid-simulation);
                                                       and a beneficiary disclosure (which stakeholders were con-
                                                                       sulted, whose welfare metrics the simulation optimizes).
   DEPLOYMENT STAGE                                    With UDOS, a regulator can examine the conditions under
    (downstream)                                           which outputs were produced; without UDOS, the regulator
                       Auditable record                            sees only outputs with no window into their authored condi-
                            audit · contestability · liability                            tions.
                                      A note on disclosure scope. UDOS does not require pub-
              Designer: Named & Accountable                         lic disclosure of information that would compromise legit-
                                                            imate confidentiality, intellectual property, or national se-
                                                                          curity. It distinguishes public disclosure (suitable for trans-Figure 2: The UDOS framework, counterpart to the Alibi
                                                           parency registers, system cards, and procurement documen-Function in Figure 1. An architecture author files four up-
                                                                       tation) from restricted disclosure submitted to a designatedstream disclosures (interaction topology, action grammar,
                                                                 oversight body under non-disclosure agreement. For mili-sanction architecture, and beneficiary structure) with an in-
                                                                     tary and intelligence uses, UDOS proposes a tiered model: adependent oversight authority. A verification threshold and
                                                                public attestation that a compliant disclosure has been filedan anti-box-ticking safeguard wrap the filing, producing an
                                                       and a full classified submission to the relevant oversight au-auditable record on which downstream mechanisms (audit,
                                                                           thority. An independent review authority, not the deployer,contestability, liability) can act, and shifting the designer
                                                             determines what qualifies for restricted treatment, prevent-from invisible to named and accountable.
                                                               ing confidentiality or classification from becoming a blanket
                                                            exemption.
                                                Two safeguards address implementation risk. First, a ver-metrics, intended use, performance limitations—answering
                                                                         ification threshold triggers independent third-party verifica-what is this model? UDOS discloses properties of the pro-
                                                                     tion for simulations deployed in high-stakes domains such ascedural architecture within which the model operates—
                                                                public resource allocation, emergency management, or mili-interaction topology, action grammar, sanction architecture,
beneficiary structure—answering who wrote the rules under       tary planning; below that threshold, self-disclosure with reg-
which this model interacts? The two instruments are com-       ulatory access may suffice. Second, an anti-box-ticking safe-
                                                         guard requires each disclosure to include a self-identifiedplementary: a thoroughly documented model may operate
                                                                     limitations section, following Model Cards’ intended-usewithin an entirely undisclosed social architecture, and a sim-
                                                                caveats (Mitchell  et  al. 2019),  to reduce the  risk  thatulation that passes every model-level audit may systemati-
                                                                     architecture-level disclosure becomes performative compli-cally produce outcomes that no model-level audit can detect
                                                          ance (Ananny and Crawford 2018).because they arise from the architecture that conditions its
interactions, not from the model’s internal representations.     UDOS may be implemented along three tracks: IRBs
The innovation of UDOS lies not in proposing yet another      and  funders  could  require  disclosure  for  deployment-
transparency tool but in shifting the regulatory object from       relevant simulations; standards bodies could incorporate
the model to the architecture-level conditions of interaction.       architecture-level documentation alongside model docu-


                                                   2524

## Страница 9

mentation; and legislative instruments such as the EU AI      agent societies are deployed at scale, emergence discourse
Act’s Article 13 could provide one possible pathway by      and proprietary architecture produce the same four alibi con-
adding architecture-level disclosure for systems that simu-       ditions. Although our corpus centers on LLM agent soci-
late social interaction at population scale.                             eties, the alibi structure is not specific to LLMs: any multi-
  We acknowledge an important limitation of UDOS. Dis-      agent architecture whose behavior is narrated as emergent—
closure of procedural architecture is a necessary condition      including multi-agent reinforcement learning—can occupy
for accountability but is not a sufficient one: an architecture-       the same alibi position, and UDOS’s architecture-level dis-
level disclosure requirement can be gamed—perfunctory       closure applies to such systems without modification. Third,
compliance, legalese, selective disclosure—just as model-      our findings call for greater reflexivity about how emergence
level transparency can be (O’Neill 2002; Ananny and Craw-      language functions differently across academic, commer-
ford 2018). UDOS does not eliminate the possibility that de-        cial, and governmental contexts—a distinction current prac-
signers will design irresponsibly; it eliminates the possibility        tice largely elides.
that they can design irresponsibly without leaving a trace in         Several limitations qualify these findings. First, our cor-
the institutional record. That trace—an auditable record of      pus comprises two distinct components—20 papers ana-
who wrote the rules before the simulation ran—is the pre-      lyzed through CDA and 142 papers through systematic
condition for every subsequent accountability mechanism:     coding—and while both were systematically selected, nei-
auditing, contestability, participatory governance, liability.       ther is exhaustive; patterns may differ in research commu-
UDOS is a structural precondition for accountability, not ac-       nities not represented in our sample. Second, the systematic
countability itself.                                           coding was conducted by a single researcher; although inter-
  Table 4 maps UDOS onto the six Stream 3 frameworks.       nal consistency was assessed through repeated coding of two
For the three that contain a recognizable existing hook, the      randomly selected papers at a three-week interval (87.5%
table identifies the closest provision, the UDOS amendment,      agreement), this represents a within-coder consistency check
and an implementation pathway; the remaining three contain       rather than formal inter-coder reliability, and future research
no analogous provision.                                      should replicate the systematic coding with multiple in-
                                                          dependent coders. Third, papers from arXiv preprints ac-
              8  Discussion                         count for approximately 80% of the systematic coding cor-
This paper developed the simulation as alibi framework       pus, a deliberate consequence of our decision to cover the
across  three  registers: conceptual  (the  Alibi Function),       preprint literature in which the debate over emergent behav-
analytical (multi-method  investigation), and governance       ior in LLM agent societies is most active. This introduces
(UDOS). The findings, taken together, reveal a convergent       preprint bias: preprint findings have not been peer-reviewed,
structural pattern: the discourse of emergence systemati-      and the preprint ecosystem may carry its own incentives for
cally renders procedural authorship invisible; the gover-       strong emergence claims. Two observations temper this con-
nance frameworks we examined lack the conceptual re-       cern. First, the qualitative CDA stream (Stream 1a), which
sources to detect this invisibility; and the resulting account-      anchors the rhetorical analysis, is drawn from AAMAS,
ability gap is distributionally stable because those positioned      NeurIPS, ICML, Nature Computational Science, and arXiv,
to close it benefit from its persistence.                        and is therefore not confined to the preprint-heavy composi-
  These findings speak directly to the AIES community’s       tion of Stream 1b. Second, the concentration of absent de-
dual commitment to technical rigor and normative critique.       signer attribution in High-EI preprints is itself a finding:
The simulation as alibi framework provides a vocabulary       the alibi pattern is strongest precisely where emergence dis-
for analyzing a governance gap that existing transparency      course is least institutionally constrained. Preprints do not
instruments—Model Cards, System Cards, datasheets—are       lack accountability mechanisms by nature—the pattern may
structurally incapable of addressing: a model passing every      equally reflect early-stage writing conventions—but within
existing audit may still operate within an entirely undis-      our corpus, the same emergence discourse that erases the
closed social architecture. The most consequential design      designer in peer-reviewed venues operates at higher inten-
choices occur not at the model level but at the architecture       sity in the preprint ecosystem. Nevertheless, the preprint-
level, where interaction topologies, action grammars, and      heavy composition limits the generalizability of the quanti-
sanction architectures are authored. UDOS translates this       tative results to the broader published literature, and the pat-
critical analysis into actionable disclosure criteria without       tern should be re-examined as the preprint corpus matures
presupposing specific regulatory outcomes.                        into peer-reviewed venues. Fourth, the High EI category (n
  Several  implications  follow.  First,  the  current  trans-     = 57), while substantially larger than in earlier analyses, still
parency paradigm in AI governance—focused overwhelm-       carries limited statistical power for subgroup comparisons;
ingly on model-level documentation—has a  blind spot       the threshold pattern is driven by a subset of High-EI pa-
where the most consequential design choices are made. The       pers (n = 14) in which designer attribution is absent from
architecture-level gap is not an omission remediable within       the emergence explanation.
the existing framework; it is a structural feature of a regula-          Fifth, UDOS has not been empirically piloted, and its op-
tory unit—the model—that has no category for the environ-       erational feasibility across different regulatory traditions re-
ment of interaction. Second, the convergence of our three      mains to be tested. Sixth, CDA is inherently interpretive; a
cases on the same alibi pattern suggests the phenomenon       different analytical lens might foreground different dimen-
is structurally general, not domain-specific: wherever LLM       sions of the alibi phenomenon. Seventh, the case studies


                                                   2525

## Страница 10

        Framework                Existing provision      UDOS amendment             Pathway

       EU AI Act Art. 13           Capabilities disclosure    Add  architecture-level disclosure  Delegated act
                                                                        for agent systems
        NIST AI RMF “Map”       Context mapping        Add procedural endogeneity  di- RMF cycle update
                                                         mension
      DoW AI Strategy (2026)    Safety & security        Add  architecture-level  audit  for  Directive update
                                                                  simulations
         White House EO on AI     None                 Add architecture-level disclosure  OMB guidance
       SAPEA AI-in-crisis review  None                 Add  architecture-level disclosure  Commission follow-up
                                                                 before crisis deployment
         China MOST Guidelines   None                 Add architecture-level disclosure    Guideline update

Table 4: Mapping of UDOS requirements to the six governance frameworks in Stream 3. “None” indicates no existing provision
analogous to architecture-level disclosure.


are document-based rather than based on independent au-      a first step. The longer-term task—for the AIES commu-
dit, and their generalizability beyond the specific platforms       nity and for AI governance more broadly—is to build in-
and frameworks examined is an empirical question for sub-       stitutional infrastructures that ensure the question who wrote
sequent research.                                                 the rules? is structurally embedded in every consequential
  Future work should pursue four directions. First, UDOS      deployment of LLM agent societies, rather than being struc-
piloting—empirical testing of UDOS requirements in de-       turally excluded from it.
ployment  contexts,  ideally  through  regulatory sandbox
mechanisms  or  voluntary  disclosure  programs,  to  as-                   Ethics Statements
sess feasibility and completeness. Second, technical au-
                                                             Ethical Considerations  This research did not involve hu-
dit tools—development of automated instruments for de-
                                              man subjects. All data analyzed consist of publicly avail-
tecting  architecture-level  disclosure gaps  in  simulation
                                                                able research papers, platform pages, and government policy
documentation. Third, participatory governance mech-
                                                          documents. Case study materials are drawn from published
anisms—investigation of how affected communities can
                                                                 sources; no proprietary or non-public data were used.
be  represented  in upstream  design  processes, drawing
on deliberative democracy and participatory design tradi-      Researcher  Positionality  We  write  from  a  critical-
tions. Fourth, cross-jurisdictional comparative analysis—       interpretive tradition at the intersection of computational so-
systematic comparison of how regulatory traditions respond        cial science, science and technology studies, and AI gov-
to architecture-level governance demands.                       ernance. That location shapes what we treat as the object
                                                                of analysis: structural invisibility rather than model-level
              9  Conclusion                         performance. A differently situated team—for instance, one
                                                        working in industry or government—might foreground otherWe return to our opening observation. LLM agent societies
                                                          dimensions of the alibi phenomenon or propose differentare scaling from sandbox to society, and the behavioral reg-
                                                          governance responses. Our findings should be evaluated inularities they produce are described in the language of emer-
                                                                         light of this position rather than against criteria appropriategence. Our argument has been that the emergence narrative
                                                            only to empirical-quantitative work.performs institutional work beyond scientific description: it
renders invisible the authored conditions under which so-     Adverse Impact Statement  The framework could be in-
cial order is produced in simulation, insulating those who      voked  to over-regulate legitimate academic agent-based
wrote the rules from accountability. Through critical dis-      modeling,  especially  where  labs  lack  resources  for
course analysis, institutional gap analysis, and cross-domain       architecture-level disclosure. Platforms could also produce
case studies, we have demonstrated that within our corpus      perfunctory UDOS-style documents that satisfy a checklist
claims of emergence are almost always associated with pro-      without enabling accountability; the anti-box-ticking safe-
cedurally conditioned architectures; that none of the gover-      guard is meant to reduce that risk, but cannot eliminate it.
nance frameworks we examined possesses an explicit mech-    We encourage the AIES community to treat the framework
anism for disclosing procedural authorship; and that the re-       as a diagnostic tool, not a compliance checklist.
sulting accountability gap is distributionally stable because
the actors positioned to close it benefit from its persistence.                                                                References
  The risk is not that emergence is a fiction but that its suc-
cessful deployment allows the same entities who write the      Alqithami, S. 2025. Adaptive Accountability in Networked
rules to occupy the position of those who merely observe      Multi-Agent Systems.  In Proceedings of the AAAI/ACM
                                                          Conference on AI, Ethics, and Society (AIES), volume 8,them. The alibi is structural—and demands a structural re-
sponse: accountability shifted from what emerges to who      127–137.
wrote the conditions under which emergence can be said to      Ananny, M.; and Crawford, K. 2018. Seeing Without Know-
occur. UDOS is a step toward that response, but it is only       ing: Limitations of the Transparency Ideal and Its Applica-


                                                   2526

## Страница 11

tion to Algorithmic Accountability. New Media & Society,       the 2nd Conference on Fairness, Accountability and Trans-
20(3): 973–989.                                            parency (FAccT), 220–229.
Artificial Societies. 2026. Product Description: Networks of       O’Neill, O. 2002. A Question of Trust: The BBC Reith Lec-
AI Personas for Audience Simulation.  https://societies.io.       tures. Cambridge: Cambridge University Press.
Accessed 8 August 2026.                                        Park, J. S.; O’Brien, J. C.; Cai, C. J.; Morris, M. R.; Liang,
Bowker, G. C.; and Star, S. L. 1999.  Sorting Things Out:        P.; and Bernstein, M. S. 2023. Generative Agents: Interac-
Classification and Its Consequences. Cambridge, MA: MIT       tive Simulacra of Human Behavior.  In Proceedings of the
Press.                                                       36th Annual ACM Symposium on User Interface Software
Broad, C. D. 1925. The Mind and Its Place in Nature. Lon-     and Technology (UIST), 1–22.
don: Kegan Paul.                                                 Redfield, P. 2013.  Life in Crisis: The Ethical Journey of
Buolamwini, J.; and Gebru, T. 2018. Gender Shades: Inter-      Doctors Without Borders. Berkeley: University of California
sectional Accuracy Disparities in Commercial Gender Clas-       Press.
sification. In Proceedings of the 1st Conference on Fairness,      Ren, S.; Cui, Z.; Song, R.; Wang, Z.; and Hu, S. 2024. Emer-
Accountability and Transparency, 77–91.                      gence of Social Norms in Generative Agent Societies: Prin-
Cendon Garcia, D. 2025. British AI Startup Artificial Soci-       ciples and Architecture.  In Proceedings of the 33rd Inter-
                                                                national Joint Conference on Artificial Intelligence (IJCAI),eties Raises C4.5 Million to Simulate Human Behaviour at
Scale. EU-Startups, 29 August 2025.                         7895–7903.
Chalmers, D. J. 2006.  Strong and Weak Emergence.  In      Ricoeur, P. 1970. Freud and Philosophy: An Essay on Inter-
Clayton, P.; and Davies, P., eds., The Re-Emergence of Emer-       pretation. New Haven: Yale University Press.
gence, 244–254. Oxford: Oxford University Press.           SAPEA. 2025. Artificial Intelligence in Emergency and Cri-
                                                                            sis Management: Rapid Evidence Review Report. TechnicalChan, A.; Ezell, C.; Kaufmann, M.; Wei, K.; Hammond, L.;
                                                                       report, Science Advice for Policy by European Academies,Bradley, H.; Bluemke, E.; Rajkumar, N.; Krueger, D.; Kolt,
                                                        Munich. DOI: 10.5281/zenodo.17737962. Prepared for theN.; Heim, L.; and Anderljung, M. 2024.  Visibility into AI
Agents.  In Proceedings of the 2024 ACM Conference on       Scientific Advice Mechanism to the European Commission,
Fairness, Accountability, and Transparency (FAccT), 958–        at the request of DG ECHO/ERCC.
973.                                                       Sawyer, R. K. 2005. Social Emergence: Societies as Com-
                                                                 plex Systems. Cambridge: Cambridge University Press.Dennett, D. C. 1991. Real Patterns. The Journal of Philoso-
phy, 88(1): 27–51.                                                  Selbst, A. D.; Boyd, D.; Friedler, S. A.; Venkatasubrama-
                                                                    nian, S.; and Vertesi, J. 2019.  Fairness and Abstraction inFairclough, N. 1992. Discourse and Social Change. Cam-
                                                               Sociotechnical Systems. In Proceedings of the 2nd Confer-bridge: Polity Press.
                                                          ence on Fairness, Accountability and Transparency (FAccT),
Fairclough, N. 2003. Analysing Discourse: Textual Analysis
                                                          59–68.
for Social Research. London: Routledge.
                                                                 Srnicek, N. 2017. Platform Capitalism. Cambridge: Polity
Fassin, D. 2012. Humanitarian Reason: A Moral History of
                                                                    Press.
the Present. Berkeley: University of California Press.
                                                                         Star, S. L. 1999. The Ethnography of Infrastructure. Ameri-
Friedman, B.; and Kahn, P. H. 2003. Human Values, Ethics,                                                       can Behavioral Scientist, 43(3): 377–391.
and Design. In Jacko, J. A.; and Sears, A., eds., The Human-
                                                                Timaite, G.; and  Castelle, M. 2025.   Agents WithoutComputer Interaction Handbook, 1177–1201. Mahwah, NJ:
                                                       Agency: Anthropological and Sociological Lessons for Con-Lawrence Erlbaum.
                                                          temporary AI Research and Policy.  In Proceedings of the
Gebru, T.; Morgenstern, J.; Vecchione, B.; Vaughan, J. W.;                                               AAAI/ACM Conference on AI, Ethics, and Society (AIES),
Wallach,  H.; Daum´e  III,  H.; and Crawford, K. 2021.                                                      volume 8, 2493–2507.
Datasheets for Datasets.  Communications of the ACM,
                                                                       Trouillot, M.-R. 1995.  Silencing the Past: Power and the64(12): 86–92.
                                                            Production of History. Boston: Beacon Press.
Holland, J. H. 1998.  Emergence: From Chaos to Order.
                                                            U.S. Department of War. 2026. Artificial Intelligence Strat-Reading, MA: Addison-Wesley.
                                                        egy for the Department of War. Technical report, Office of
Jasanoff, S., ed. 2004.   States of Knowledge: The Co-                                                                 the Secretary of War, Washington, DC. Memorandum from
production of Science and Social Order.  London: Rout-                                                                 the Secretary of War, 9 January 2026.
ledge.
                                                        van Dijk, T. A. 1993. Principles of Critical Discourse Anal-
Meyer, M. 2012.  Placing and Tracing Absence: A Mate-                                                                          ysis. Discourse & Society, 4(2): 249–283.
rial Culture of the Immaterial. Journal of Material Culture,
                                                             Wachter, S.; Mittelstadt, B.; and Floridi, L. 2017. Why a17(1): 103–110.
                                                            Right to Explanation of Automated Decision-Making Does
Mill, J. S. 1843. A System of Logic, Ratiocinative and In-                                                     Not Exist in the General Data Protection Regulation. Inter-
ductive. London: John W. Parker.                                                                national Data Privacy Law, 7(2): 76–99.
Mitchell, M.; Wu, S.; Zaldivar, A.; Barnes, P.; Vasserman,                                                    Wodak, R.; and Meyer, M., eds. 2016. Methods of Critical
L.; Hutchinson, B.; Spitzer, E.; Raji, I. D.; and Gebru, T.                                                           Discourse Studies. London: Sage, 3rd edition.
2019. Model Cards for Model Reporting. In Proceedings of


                                                   2527
