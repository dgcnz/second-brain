---
authors:
  - "[[Rohit Gandikota]]"
  - "[[David Bau]]"
year: 2025
date: 2025-03-13
tags:
  - paper
url: https://arxiv.org/abs/2503.10637
draft: false
---


> [!tldr] Abstract
> Distilled diffusion models generate images in far fewer timesteps but suffer from reduced sample diversity when generating multiple outputs from the same prompt. To understand this phenomenon, we first investigate whether distillation damages concept representations by examining if the required diversity is properly learned. Surprisingly, distilled models retain the base model's representational structure: control mechanisms like Concept Sliders and LoRAs transfer seamlessly without retraining, and SliderSpace analysis reveals distilled models possess variational directions needed for diversity yet fail to activate them. This redirects our investigation to understanding how the generation dynamics differ between base and distilled models. Using $\hat{\mathbf{x}}_{0}$ trajectory visualization, we discover distilled models commit to their final image structure almost immediately at the first timestep, while base models distribute structural decisions across many steps. To test whether this first-step commitment causes the diversity loss, we introduce diversity distillation, a hybrid approach using the base model for only the first critical timestep before switching to the distilled model. This single intervention restores sample diversity while maintaining computational efficiency. We provide both causal validation and theoretical support showing why the very first timestep concentrates the diversity bottleneck in distilled models. Our code and data are available at https://distillation.baulab.info/



## Notes

[Zotero Link](zotero://select/library/items/XFLC6PAC)
