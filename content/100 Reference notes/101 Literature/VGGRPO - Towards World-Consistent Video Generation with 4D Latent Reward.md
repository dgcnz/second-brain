---
authors:
  - "[[Zhaochong An]]"
  - "[[Orest Kupyn]]"
  - "[[Théo Uscidda]]"
  - "[[Andrea Colaco]]"
  - "[[Karan Ahuja]]"
  - "[[Serge Belongie]]"
  - "[[Mar Gonzalez-Franco]]"
  - "[[Marta Tintore Gazulla]]"
year: 2026
date: 2026-03-27
tags:
  - paper
url: https://arxiv.org/abs/2603.26599
draft: false
---


> [!tldr] Abstract
> Large-scale video diffusion models achieve impressive visual quality, yet often fail to preserve geometric consistency. Prior approaches improve consistency either by augmenting the generator with additional modules or applying geometry-aware alignment. However, architectural modifications can compromise the generalization of internet-scale pretrained models, while existing alignment methods are limited to static scenes and rely on RGB-space rewards that require repeated VAE decoding, incurring substantial compute overhead and failing to generalize to highly dynamic real-world scenes. To preserve the pretrained capacity while improving geometric consistency, we propose VGGRPO (Visual Geometry GRPO), a latent geometry-guided framework for geometry-aware video post-training. VGGRPO introduces a Latent Geometry Model (LGM) that stitches video diffusion latents to geometry foundation models, enabling direct decoding of scene geometry from the latent space. By constructing LGM from a geometry model with 4D reconstruction capability, VGGRPO naturally extends to dynamic scenes, overcoming the static-scene limitations of prior methods. Building on this, we perform latent-space Group Relative Policy Optimization with two complementary rewards: a camera motion smoothness reward that penalizes jittery trajectories, and a geometry reprojection consistency reward that enforces cross-view geometric coherence. Experiments on both static and dynamic benchmarks show that VGGRPO improves camera stability, geometry consistency, and overall quality while eliminating costly VAE decoding, making latent-space geometry-guided reinforcement an efficient and flexible approach to world-consistent video generation.



## Notes

[Zotero Link](zotero://select/library/items/E8M3Z6N5)
