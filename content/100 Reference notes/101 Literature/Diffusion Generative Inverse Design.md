---
authors:
  - "[[Marin Vlastelica]]"
  - "[[Tatiana López-Guevara]]"
  - "[[Kelsey Allen]]"
  - "[[Peter Battaglia]]"
  - "[[Arnaud Doucet]]"
  - "[[Kimberley Stachenfeld]]"
year: 2023
date: 2023-09-05
tags:
  - paper
url: https://arxiv.org/abs/2309.02040
draft: false
---


> [!tldr] Abstract
> Inverse design refers to the problem of optimizing the input of an objective function in order to enact a target outcome. For many real-world engineering problems, the objective function takes the form of a simulator that predicts how the system state will evolve over time, and the design challenge is to optimize the initial conditions that lead to a target outcome. Recent developments in learned simulation have shown that graph neural networks (GNNs) can be used for accurate, efficient, differentiable estimation of simulator dynamics, and support high-quality design optimization with gradient- or sampling-based optimization procedures. However, optimizing designs from scratch requires many expensive model queries, and these procedures exhibit basic failures on either non-convex or high-dimensional problems. In this work, we show how denoising diffusion models (DDMs) can be used to solve inverse design problems efficiently and propose a particle sampling algorithm for further improving their efficiency. We perform experiments on a number of fluid dynamics design challenges, and find that our approach substantially reduces the number of calls to the simulator compared to standard techniques.



## Notes

[Zotero Link](zotero://select/library/items/6AUH3I32)
