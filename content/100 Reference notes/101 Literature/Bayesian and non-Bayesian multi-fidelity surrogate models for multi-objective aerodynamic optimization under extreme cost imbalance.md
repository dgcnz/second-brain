---
authors:
  - "[[Marc Schouler]]"
  - "[[Anca Belme]]"
  - "[[Paola Cinnella]]"
year: 2025
date: 2025-05-22
tags:
  - paper
url: https://arxiv.org/abs/2505.17279
draft: false
---


> [!tldr] Abstract
> Aerodynamic shape optimization in industry still faces challenges related to robustness and scalability. This aspect becomes crucial for advanced optimizations that rely on expensive high-fidelity flow solvers, where computational budget constraints only allow a very limited number of simulations within the optimization loop. To address these challenges, we investigate strategies based on multi-fidelity surrogate models. In particular, we focus on the case of extreme computational cost imbalance between the high- and low-fidelity models, which severely limits the maximum allowable number of high-fidelity function calls. To maximize the information extracted from the high-fidelity samples, we generate a reduced representation of the design space and use an adaptive infill strategy to smartly place the high-fidelity samples where they can best guide the optimization. Bayesian co-kriging and non-Bayesian multi-fidelity neural networks are trained by combining low- and high-fidelity models for a use-case consisting of a low Reynolds linear outlet guide vane at subsonic and transitional flow conditions. Coarse-mesh RANS simulations are used as low-fidelity model while RANS simulations with a transition model and automatically (feature-based) adapted meshes are chosen as the high-fidelity one. Each surrogate model is then associated to an infill strategy of its kind and a proper orthogonal decomposition of the shape parametrization is used to reduce by half the dimension of the problem. Based on inverted distance and hypervolume metrics, we find that the simpler co-kriging representation in conjunction with Bayesian infill yields better performance than the multi-fidelity neural network and the considered non-Bayesian method.



## Notes

[Zotero Link](zotero://select/library/items/Y27CMXDQ)
