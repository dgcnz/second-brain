
### Priming

> **Definition**  
> Priming is defined as a change in the efficacy of stimulus processing arising from a previous encounter with the same or a related stimulus, in the absence of conscious awareness about the first encounter. [@purves2013principles]

As an example, let's formulate the following experiment (see Figure 1): we’ll divide participants into two groups, and each participant will go through two stages. Stage 1 (prime) consists of seeing a set of words, and Stage 2 (test cue) consists of completing a word with missing letters. Participants in Group A will have seen the matching word in Stage 1, while participants in Group B will not.

![Perceptual priming experiment](Files/prime_experiment.png)  
**Figure 1:** Perceptual priming experiment.

Thanks to the priming effect, we’ll observe two things [@purves2013principles]:

1. Participants in Group A will have a higher chance of predicting the word they saw in Stage 1.  
2. Participants in Group A will, on average, solve the task faster than participants in Group B.

Concretely, this is an example of *perceptual priming*, a form of *direct* priming and the main one explored in this work.

Another type of priming worth mentioning is *semantic priming*, in which the prime stimulus (Stage 1) is semantically related to the test cue (Stage 2) but not identical. For example, seeing the word “legs” may increase the chance of guessing “head,” as both are body parts. [@purves2013principles]

### Sharpening theory

In the study of priming, a very particular phenomenon called **repetition suppression** can be observed when the participant is exposed to the same stimulus repeatedly: over time, the overall neural activity decreases.

The **Sharpening Theory** [@desimone_neural_1996] proposes that as the stimulus is repeated, the neurons that carry critical information about that specific stimulus remain firing, while those that don’t become less active (see Figure 2).

![Sharpening theory illustration](Files/sharpening.png)  
**Figure 2:** After each exposure to a certain stimulus, non-relevant neurons become less active [@wiggsPropertiesMechanismsPerceptual1998].

### Properties of priming

Some interesting properties include:

1. Priming is immune to color, pattern, luminance, contrast, location, left–right reflection [@biedermanEvidenceCompleteTranslational1991], size, and rotation in depth up to 67° [@srinivas_representation_1995]. However, larger rotations, changes in font, and swapping the image for another of the same class [@caveEffectsColorPattern1996] (see Figure 3) reduce its strength. This suggests that priming involves high-level representations.
2. Priming effects remain even without conscious experience or recall. Patients under anesthesia [@Kihlstrom1990] or with amnesia [@hamann_intact_1997] still show signs of priming, even when no explicit memory can be recalled.
3. Participants shown an unrecognizable image twice (after 15 minutes and 20 other tasks in between) have a significant increase in recognition accuracy [@bar_subliminal_1998]. This suggests that priming is not limited to class-level bias, but also to lower-level visual features.
4. Each repetition reduces the overall neuronal firing rate. After 6–8 repetitions it plateaus at about 40 % of the baseline rate [@li_representation_1993].

![Exemplar change and priming strength](Files/exemplar.png)  
**Figure 3:** Exemplar change reduces but doesn’t eliminate priming [@caveEffectsColorPattern1996].

### The Overfitted Brain

One of the most ubiquitous problems in learning models is the trade-off between memorization and generalization. Artificial neural networks easily overfit to their training distributions, and measures such as out-of-distribution sampling [@Tobin2017] or noise injection [@Shorten2019] are used to improve their generalizability.

The **Overfitted Brain Hypothesis** (OBH) is a provocative proposal that aims to explain the function of dreams in humans by drawing comparisons between properties of human cognition and those in artificial neural networks. Daily visual input in humans is often self-similar and auto-correlated, which should require our brains to devise strategies to generalize. Moreover, there is evidence that over-training on lab tasks can yield decreased performance over time, and that sleep ameliorates this decline [@Mednick2002].

Thus, OBH states that the function of dreams is to let the brain hallucinate out-of-distribution and noisy stimuli, restoring generalizability in much the same way as artificial neural networks do when trained with noisy or augmented data.
