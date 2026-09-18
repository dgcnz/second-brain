---
authors:
  - "[[Francois Porcher]]"
  - "[[Nicolas Carion]]"
  - "[[Karteek Alahari]]"
  - "[[Shizhe Chen]]"
year: 2026
date: 2026-06-27
tags:
  - paper
url: https://arxiv.org/abs/2606.29059
draft: false
---


> [!tldr] Abstract
> World modeling requires forecasting uncertain futures while preserving information useful for downstream perception. Existing visual world models often struggle to satisfy both goals: VAE-based stochastic models operate in low-dimensional reconstruction latents, which can limit perception performance, while deterministic predictors using strong pretrained features collapse multimodal futures into a single blurry mean. In this work, we propose FlowWM, a stochastic world model that performs flow matching directly within pretrained feature space (e.g., DINOv3). This is challenging because pretrained features are substantially high-dimensional, making standard diffusion recipes suboptimal. To address this, we investigate the design choices needed for feature-space flow matching and introduce a differentiable one-step projection mechanism that enables efficient training with temporal consistency and task-driven objectives. We evaluate FlowWM on two benchmarks: a synthetic benchmark for systematic evaluation of accuracy and diversity, and a real-world benchmark FuturePerception. FlowWM improves perception performance, mode coverage, and horizon robustness, validating our proposed design for stochastic world modeling in high-dimensional feature spaces.



## Notes

[Zotero Link](zotero://select/library/items/KHGYSHQB)
