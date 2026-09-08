---
authors:
  - "[[Xinqi Lin]]"
  - "[[Fanghua Yu]]"
  - "[[Jinfan Hu]]"
  - "[[Zhiyuan You]]"
  - "[[Wu Shi]]"
  - "[[Jimmy S. Ren]]"
  - "[[Jinjin Gu]]"
  - "[[Chao Dong]]"
year: 2025
date: 2025-07-28
tags:
  - paper
url: https://arxiv.org/abs/2507.20590
draft: false
---


> [!tldr] Abstract
> Deep image restoration models aim to learn a mapping from degraded image space to natural image space. However, they face several critical challenges: removing degradation, generating realistic details, and ensuring pixel-level consistency. Over time, three major classes of methods have emerged, including MSE-based, GAN-based, and diffusion-based methods. However, they fail to achieve a good balance between restoration quality, fidelity, and speed. We propose a novel method, HYPIR, to address these challenges. Our solution pipeline is straightforward: it involves initializing the image restoration model with a pre-trained diffusion model and then fine-tuning it with adversarial training. This approach does not rely on diffusion loss, iterative sampling, or additional adapters. We theoretically demonstrate that initializing adversarial training from a pre-trained diffusion model positions the initial restoration model very close to the natural image distribution. Consequently, this initialization improves numerical stability, avoids mode collapse, and substantially accelerates the convergence of adversarial training. Moreover, HYPIR inherits the capabilities of diffusion models with rich user control, enabling text-guided restoration and adjustable texture richness. Requiring only a single forward pass, it achieves faster convergence and inference speed than diffusion-based methods. Extensive experiments show that HYPIR outperforms previous state-of-the-art methods, achieving efficient and high-quality image restoration.



## Notes

[Zotero Link](zotero://select/library/items/ABPFZXVA)
