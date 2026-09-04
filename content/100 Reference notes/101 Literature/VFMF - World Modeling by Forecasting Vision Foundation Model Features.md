---
authors:
  - "[[Gabrijel Boduljak]]"
  - "[[Yushi Lan]]"
  - "[[Christian Rupprecht]]"
  - "[[Andrea Vedaldi]]"
year: 2025
date: 2025-12-12
tags:
  - paper
url: https://arxiv.org/abs/2512.11225
draft: false
---


> [!tldr] Abstract
> Forecasting from partial observations is central to world modeling. Many recent methods represent the world through images, and reduce forecasting to stochastic video generation. Although such methods excel at realism and visual fidelity, predicting pixels is computationally intensive and not directly useful in many applications, as it requires translating RGB into signals useful for decision making. An alternative approach uses features from vision foundation models (VFMs) as world representations, performing deterministic regression to predict future world states. These features can be directly translated into actionable signals such as semantic segmentation and depth, while remaining computationally efficient. However, deterministic regression averages over multiple plausible futures, undermining forecast accuracy by failing to capture uncertainty. To address this crucial limitation, we introduce a generative forecaster that performs autoregressive flow matching in VFM feature space. Our key insight is that generative modeling in this space requires encoding VFM features into a compact latent space suitable for diffusion. We show that this latent space preserves information more effectively than previously used PCA-based alternatives, both for forecasting and other applications, such as image generation. Our latent predictions can be easily decoded into multiple useful and interpretable output modalities: semantic segmentation, depth, surface normals, and even RGB. With matched architecture and compute, our method produces sharper and more accurate predictions than regression across all modalities. Our results suggest that stochastic conditional generation of VFM features offers a promising and scalable foundation for future world models.



## Notes

[Zotero Link](zotero://select/library/items/G6NILA9P)
