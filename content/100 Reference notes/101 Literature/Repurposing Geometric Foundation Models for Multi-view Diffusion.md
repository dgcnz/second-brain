---
authors:
  - "[[Wooseok Jang]]"
  - "[[Seonghu Jeon]]"
  - "[[Jisang Han]]"
  - "[[Jinhyeok Choi]]"
  - "[[Minkyung Kwon]]"
  - "[[Seungryong Kim]]"
  - "[[Saining Xie]]"
  - "[[Sainan Liu]]"
year: 2026
date: 2026-03-23
tags:
  - paper
url: https://arxiv.org/abs/2603.22275
draft: false
---


> [!tldr] Abstract
> While recent advances in generative latent spaces have driven substantial progress in single-image generation, the optimal latent space for novel view synthesis (NVS) remains largely unexplored. In particular, NVS requires geometrically consistent generation across viewpoints, but existing approaches typically operate in a view-independent VAE latent space. In this paper, we propose Geometric Latent Diffusion (GLD), a framework that repurposes the geometrically consistent feature space of geometric foundation models as the latent space for multi-view diffusion. We show that these features not only support high-fidelity RGB reconstruction but also encode strong cross-view geometric correspondences, providing a well-suited latent space for NVS. Our experiments demonstrate that GLD outperforms both VAE and RAE on 2D image quality and 3D consistency metrics, while accelerating training by more than 4.4x compared to the VAE latent space. Notably, GLD remains competitive with state-of-the-art methods that leverage large-scale text-to-image pretraining, despite training its diffusion model from scratch without such generative pretraining.



## Notes

[Zotero Link](zotero://select/library/items/P8X34QWW)
