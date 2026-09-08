---
authors:
  - "[[Hayata Morita]]"
  - "[[Kohei Shintani]]"
  - "[[Chenyang Yuan]]"
  - "[[Frank Permenter]]"
year: 2024
date: 2024-10-09
tags:
  - paper
url: https://arxiv.org/abs/2410.18986
draft: false
---


> [!tldr] Abstract
> A main challenge in mechanical design is to efficiently explore the design space while satisfying engineering constraints. This work explores the use of 3D generative models to explore the design space in the context of vehicle development, while estimating and enforcing engineering constraints. Specifically, we generate diverse 3D models of cars that meet a given set of geometric specifications, while also obtaining quick estimates of performance parameters such as aerodynamic drag. For this, we employ a data-driven approach (using the ShapeNet dataset) to train VehicleSDF, a DeepSDF based model that represents potential designs in a latent space witch can be decoded into a 3D model. We then train surrogate models to estimate engineering parameters from this latent space representation, enabling us to efficiently optimize latent vectors to match specifications. Our experiments show that we can generate diverse 3D models while matching the specified geometric parameters. Finally, we demonstrate that other performance parameters such as aerodynamic drag can be estimated in a differentiable pipeline.



## Notes

[Zotero Link](zotero://select/library/items/63BQLQP8)
