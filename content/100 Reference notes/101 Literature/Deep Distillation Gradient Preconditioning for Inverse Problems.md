---
authors:
  - "[[Romario Gualdrón-Hurtado]]"
  - "[[Roman Jacome]]"
  - "[[Leon Suarez]]"
  - "[[Laura Galvis]]"
  - "[[Henry Arguello]]"
year: 2025
date: 2025-08-06
tags:
  - paper
url: https://arxiv.org/abs/2508.04832
draft: false
---


> [!tldr] Abstract
> Imaging inverse problems are commonly addressed by minimizing measurement consistency and signal prior terms. While huge attention has been paid to developing high-performance priors, even the most advanced signal prior may lose its effectiveness when paired with an ill-conditioned sensing matrix that hinders convergence and degrades reconstruction quality. In optimization theory, preconditioners allow improving the algorithm's convergence by transforming the gradient update. Traditional linear preconditioning techniques enhance convergence, but their performance remains limited due to their dependence on the structure of the sensing matrix. Learning-based linear preconditioners have been proposed, but they are optimized only for data-fidelity optimization, which may lead to solutions in the null-space of the sensing matrix. This paper employs knowledge distillation to design a nonlinear preconditioning operator. In our method, a teacher algorithm using a better-conditioned (synthetic) sensing matrix guides the student algorithm with an ill-conditioned sensing matrix through gradient matching via a preconditioning neural network. We validate our nonlinear preconditioner for plug-and-play FISTA in single-pixel, magnetic resonance, and super-resolution imaging tasks, showing consistent performance improvements and better empirical convergence.



## Notes

[Zotero Link](zotero://select/library/items/FIILTFUF)
