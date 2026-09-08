---
authors:
  - "[[Benedikt Alkin]]"
  - "[[Andreas Fürst]]"
  - "[[Simon Schmid]]"
  - "[[Lukas Gruber]]"
  - "[[Markus Holzleitner]]"
  - "[[Johannes Brandstetter]]"
year: 2024
date: 2024-02-19
tags:
  - paper
url: https://arxiv.org/abs/2402.12365
draft: false
---


> [!tldr] Abstract
> Neural operators, serving as physics surrogate models, have recently gained increased interest. With ever increasing problem complexity, the natural question arises: what is an efficient way to scale neural operators to larger and more complex simulations - most importantly by taking into account different types of simulation datasets. This is of special interest since, akin to their numerical counterparts, different techniques are used across applications, even if the underlying dynamics of the systems are similar. Whereas the flexibility of transformers has enabled unified architectures across domains, neural operators mostly follow a problem specific design, where GNNs are commonly used for Lagrangian simulations and grid-based models predominate Eulerian simulations. We introduce Universal Physics Transformers (UPTs), an efficient and unified learning paradigm for a wide range of spatio-temporal problems. UPTs operate without grid- or particle-based latent structures, enabling flexibility and scalability across meshes and particles. UPTs efficiently propagate dynamics in the latent space, emphasized by inverse encoding and decoding techniques. Finally, UPTs allow for queries of the latent space representation at any point in space-time. We demonstrate diverse applicability and efficacy of UPTs in mesh-based fluid simulations, and steady-state Reynolds averaged Navier-Stokes simulations, and Lagrangian-based dynamics.



## Notes

[Zotero Link](zotero://select/library/items/N4FS2ZGI)
