---
authors:
  - "[[Xinyang Li]]"
  - "[[Tengfei Wang]]"
  - "[[Zixiao Gu]]"
  - "[[Shengchuan Zhang]]"
  - "[[Chunchao Guo]]"
  - "[[Liujuan Cao]]"
year: 2025
date: 2025-10-15
tags:
  - paper
url: https://arxiv.org/abs/2510.13678
draft: false
---


> [!tldr] Abstract
> We propose FlashWorld, a generative model that produces 3D scenes from a single image or text prompt in seconds, 10~100$\times$ faster than previous works while possessing superior rendering quality. Our approach shifts from the conventional multi-view-oriented (MV-oriented) paradigm, which generates multi-view images for subsequent 3D reconstruction, to a 3D-oriented approach where the model directly produces 3D Gaussian representations during multi-view generation. While ensuring 3D consistency, 3D-oriented method typically suffers poor visual quality. FlashWorld includes a dual-mode pre-training phase followed by a cross-mode post-training phase, effectively integrating the strengths of both paradigms. Specifically, leveraging the prior from a video diffusion model, we first pre-train a dual-mode multi-view diffusion model, which jointly supports MV-oriented and 3D-oriented generation modes. To bridge the quality gap in 3D-oriented generation, we further propose a cross-mode post-training distillation by matching distribution from consistent 3D-oriented mode to high-quality MV-oriented mode. This not only enhances visual quality while maintaining 3D consistency, but also reduces the required denoising steps for inference. Also, we propose a strategy to leverage massive single-view images and text prompts during this process to enhance the model's generalization to out-of-distribution inputs. Extensive experiments demonstrate the superiority and efficiency of our method.



## Notes

[Zotero Link](zotero://select/library/items/WYIKAKGE)
