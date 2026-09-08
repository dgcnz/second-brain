---
authors:
  - "[[Masatoshi Uehara]]"
  - "[[Yulai Zhao]]"
  - "[[Chenyu Wang]]"
  - "[[Xiner Li]]"
  - "[[Aviv Regev]]"
  - "[[Sergey Levine]]"
  - "[[Tommaso Biancalani]]"
year: 2025
date: 2025-01-16
tags:
  - paper
url: https://arxiv.org/abs/2501.09685
draft: false
---


> [!tldr] Abstract
> This tutorial provides an in-depth guide on inference-time guidance and alignment methods for optimizing downstream reward functions in diffusion models. While diffusion models are renowned for their generative modeling capabilities, practical applications in fields such as biology often require sample generation that maximizes specific metrics (e.g., stability, affinity in proteins, closeness to target structures). In these scenarios, diffusion models can be adapted not only to generate realistic samples but also to explicitly maximize desired measures at inference time without fine-tuning. This tutorial explores the foundational aspects of such inference-time algorithms. We review these methods from a unified perspective, demonstrating that current techniques -- such as Sequential Monte Carlo (SMC)-based guidance, value-based sampling, and classifier guidance -- aim to approximate soft optimal denoising processes (a.k.a. policies in RL) that combine pre-trained denoising processes with value functions serving as look-ahead functions that predict from intermediate states to terminal rewards. Within this framework, we present several novel algorithms not yet covered in the literature. Furthermore, we discuss (1) fine-tuning methods combined with inference-time techniques, (2) inference-time algorithms based on search algorithms such as Monte Carlo tree search, which have received limited attention in current research, and (3) connections between inference-time algorithms in language models and diffusion models. The code of this tutorial on protein design is available at https://github.com/masa-ue/AlignInversePro



## Notes

[Zotero Link](zotero://select/library/items/K999KXNR)
