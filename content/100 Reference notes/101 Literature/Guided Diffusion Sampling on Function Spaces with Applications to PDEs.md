---
authors:
  - "[[Jiachen Yao]]"
  - "[[Abbas Mammadov]]"
  - "[[Julius Berner]]"
  - "[[Gavin Kerrigan]]"
  - "[[Jong Chul Ye]]"
  - "[[Kamyar Azizzadenesheli]]"
  - "[[Anima Anandkumar]]"
year: 2025
date: 2025-05-22
tags:
  - paper
url: https://arxiv.org/abs/2505.17004
draft: false
---


> [!tldr] Abstract
> We propose a general framework for conditional sampling in PDE-based inverse problems, targeting the recovery of whole solutions from extremely sparse or noisy measurements. This is accomplished by a function-space diffusion model and plug-and-play guidance for conditioning. Our method first trains an unconditional, discretization-agnostic denoising model using neural operator architectures. At inference, we refine the samples to satisfy sparse observation data via a gradient-based guidance mechanism. Through rigorous mathematical analysis, we extend Tweedie's formula to infinite-dimensional Banach spaces, providing the theoretical foundation for our posterior sampling approach. Our method (FunDPS) accurately captures posterior distributions in function spaces under minimal supervision and severe data scarcity. Across five PDE tasks with only 3% observation, our method achieves an average 32% accuracy improvement over state-of-the-art fixed-resolution diffusion baselines while reducing sampling steps by 4x. Furthermore, multi-resolution fine-tuning ensures strong cross-resolution generalizability. To the best of our knowledge, this is the first diffusion-based framework to operate independently of discretization, offering a practical and flexible solution for forward and inverse problems in the context of PDEs. Code is available at https://github.com/neuraloperator/FunDPS



## Notes

[Zotero Link](zotero://select/library/items/VVHWXC4C)
