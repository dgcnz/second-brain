---
authors:
  - "[[Yuze Hao]]"
  - "[[Linchao Zhu]]"
  - "[[Yi Yang]]"
year: 2025
date: 2025-12-06
tags:
  - paper
url: https://arxiv.org/abs/2512.08987
draft: false
---


> [!tldr] Abstract
> Inverse design aims to design the input variables of a physical system to optimize a specified objective function, typically formulated as a search or optimization problem. However, in 3D domains, the design space grows exponentially, rendering exhaustive grid-based searches infeasible. Recent advances in deep learning have accelerated inverse design by providing powerful generative priors and differentiable surrogate models. Nevertheless, current methods tend to approximate the 3D design space using 2D projections or fine-tune existing 3D shapes. These approaches sacrifice volumetric detail and constrain design exploration, preventing true 3D design from scratch. In this paper, we propose a 3D Inverse Design (3DID) framework that directly navigates the 3D design space by coupling a continuous latent representation with a physics-aware optimization strategy. We first learn a unified physics-geometry embedding that compactly captures shape and physical field data in a continuous latent space. Then, we introduce a two-stage strategy to perform physics-aware optimization. In the first stage, a gradient-guided diffusion sampler explores the global latent manifold. In the second stage, an objective-driven, topology-preserving refinement further sculpts each candidate toward the target objective. This enables 3DID to generate high-fidelity 3D geometries, outperforming existing methods in both solution quality and design versatility.



## Notes

[Zotero Link](zotero://select/library/items/KGSTZGHF)
