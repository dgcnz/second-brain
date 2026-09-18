---
authors:
  - "[[Caleb Zheng]]"
  - "[[Eli Shlizerman]]"
year: 2025
date: 2025-06-03
tags:
  - paper
url: https://arxiv.org/abs/2506.05398
draft: false
---


> [!tldr] Abstract
> Diffusion models achieve remarkable performance across diverse generative tasks in computer vision, but their high computational cost remains a major barrier to deployment. Model pruning offers a promising way to reduce inference cost and enable lightweight models. However, pruning leads to quality drop due to reduced capacity. A key limitation of existing pruning approaches is that pruned models are finetuned using the same objective as the dense model (denoising score matching). Since the dense model is accessible during finetuning, it warrants a more effective approach for knowledge transfer from the dense to the pruned model. Motivated by this, we propose \textbf{2ndMatch} (\textbf{2ndM}), a general-purpose finetuning framework that introduces a \textbf{2nd}-order Jacobian ($J^{\top} J$) \textbf{M}atching loss inspired by Finite-Time Lyapunov Exponents. \textbf{2ndM} teaches the pruned model to mimic the sensitivity of the dense teacher, i.e., how to respond to small perturbations over time, through scalable random projections. The framework is architecture-agnostic and applies to both U-Net- and Transformer-based diffusion models. Experiments on CIFAR-10, CelebA, LSUN, ImageNet, and MSCOCO demonstrate that \textbf{2ndM} reduces the performance gap between pruned and dense models, substantially improving output quality.



## Notes

[Zotero Link](zotero://select/library/items/S6R7837J)
