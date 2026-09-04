---
authors:
  - "[[Boyang Zheng]]"
  - "[[Nanye Ma]]"
  - "[[Shengbang Tong]]"
  - "[[Saining Xie]]"
year: 2025
date: 2025-10-13
tags:
  - paper
  - vit
  - dl-theory
  - diffusion
  - generative
url: http://arxiv.org/abs/2510.11690
draft: false
---


> [!tldr] Abstract
> Latent generative modeling, where a pretrained autoencoder maps pixels into a latent space for the diffusion process, has become the standard strategy for Diffusion Transformers (DiT); however, the autoencoder component has barely evolved. Most DiTs continue to rely on the original VAE encoder, which introduces several limitations: outdated backbones that compromise architectural simplicity, lowdimensional latent spaces that restrict information capacity, and weak representations that result from purely reconstruction-based training and ultimately limit generative quality. In this work, we explore replacing the VAE with pretrained representation encoders (e.g., DINO, SigLIP, MAE) paired with trained decoders, forming what we term Representation Autoencoders (RAEs). These models provide both high-quality reconstructions and semantically rich latent spaces, while allowing for a scalable transformer-based architecture. Since these latent spaces are typically high-dimensional, a key challenge is enabling diffusion transformers to operate effectively within them. We analyze the sources of this difficulty, propose theoretically motivated solutions, and validate them empirically. Our approach achieves faster convergence without auxiliary representation alignment losses. Using a DiT variant equipped with a lightweight, wide DDT head, we achieve strong image generation results on ImageNet: 1.51 FID at 256 × 256 (no guidance) and 1.13 at both 256 × 256 and 512 × 512 (with guidance). RAE offers clear advantages and should be the new default for diffusion transformer training.



## Notes

[Zotero Link](zotero://select/library/items/45MXUWMK)
