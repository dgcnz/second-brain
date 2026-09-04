---
authors:
- '[[Rui Wang]]'
- '[[Elyssa Hofgard]]'
- '[[Han Gao]]'
- '[[Robin Walters]]'
- '[[Tess E Smidt]]'
year: 2024
tags:
- equivariance
- relaxed_equivariance
- dl_theory
- paper
url: https://arxiv.org/abs/2310.02299
date: '2023-10-03'
---

> [!info] Abstract
> Modeling symmetry breaking is essential for understanding the fundamental changes in the behaviors and properties of physical systems, from microscopic particle interactions to macroscopic phenomena like fluid dynamics and cosmic structures. Thus, identifying sources of asymmetry is an important tool for understanding physical systems. In this paper, we focus on learning asymmetries of data using relaxed group convolutions. We provide both theoretical and empirical evidence that this flexible convolution technique allows the model to maintain the highest level of equivariance that is consistent with data and discover the subtle symmetry-breaking factors in various physical systems. We employ various relaxed group convolution architectures to uncover various symmetry-breaking factors that are interpretable and physically meaningful in different physical systems, including the phase transition of crystal structure, the isotropy and homogeneity breaking in turbulent flow, and the time-reversal symmetry breaking in pendulum systems.

Observations:
- "In the relaxed group convolution, the **initial relaxed (equivariant) weights** {𝑤𝑙⁢(ℎ)} in each layer are set to be the same for all ℎ, **ensuring that the model exhibits equivariance prior to being trained**. [...] we prove that these relaxed weights **only deviate from being equal when the symmetries of the input and the output are lower than that of the model.**" (Related to [[Equivariance Initialization]])