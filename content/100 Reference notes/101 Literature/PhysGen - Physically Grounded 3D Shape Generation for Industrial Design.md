---
authors:
  - "[[Yingxuan You]]"
  - "[[Chen Zhao]]"
  - "[[Hantao Zhang]]"
  - "[[Ming Xu]]"
  - "[[Pascal Fua]]"
year: 2025
date: 2025-11-29
tags:
  - paper
url: https://arxiv.org/abs/2512.00422
draft: false
---


> [!tldr] Abstract
> Existing generative models for 3D shapes can synthesize high-fidelity and visually plausible shapes. For certain classes of shapes that have undergone an engineering design process, the realism of the shape is tightly coupled with the underlying physical properties, e.g., aerodynamic efficiency for automobiles. Since existing methods lack knowledge of such physics, they are unable to use this knowledge to enhance the realism of shape generation. Motivated by this, we propose a unified physics-based 3D shape generation pipeline, with a focus on industrial design applications. Specifically, we introduce a new flow matching model with explicit physical guidance, consisting of an alternating update process. We iteratively perform a velocity-based update and a physics-based refinement, progressively adjusting the latent code to align with the desired 3D shapes and physical properties. We further strengthen physical validity by incorporating a physics-aware regularization term into the velocity-based update step. To support such physics-guided updates, we build a shape-and-physics variational autoencoder (SP-VAE) that jointly encodes shape and physics information into a unified latent space. The experiments on three benchmarks show that this synergistic formulation improves shape realism beyond mere visual plausibility. Our code and model weights are available at https://github.com/kasvii/PhysGen.



## Notes

[Zotero Link](zotero://select/library/items/YMGRQXVQ)
