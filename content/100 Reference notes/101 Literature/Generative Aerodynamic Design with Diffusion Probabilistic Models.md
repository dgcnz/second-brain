---
authors:
  - "[[Thomas Wagenaar]]"
  - "[[Simone Mancini]]"
  - "[[Andrés Mateo-Gabín]]"
year: 2024
date: 2024-09-20
tags:
  - paper
url: https://arxiv.org/abs/2409.13328
draft: false
---


> [!tldr] Abstract
> The optimization of geometries for aerodynamic design often relies on a large number of expensive simulations to evaluate and iteratively improve the geometries. It is possible to reduce the number of simulations by providing a starting geometry that has properties close to the desired requirements, often in terms of lift and drag, aerodynamic moments and surface areas. We show that generative models have the potential to provide such starting geometries by generalizing geometries over a large dataset of simulations. In particular, we leverage diffusion probabilistic models trained on XFOIL simulations to synthesize two-dimensional airfoil geometries conditioned on given aerodynamic features and constraints. The airfoils are parameterized with Bernstein polynomials, ensuring smoothness of the generated designs. We show that the models are able to generate diverse candidate designs for identical requirements and constraints, effectively exploring the design space to provide multiple starting points to optimization procedures. However, the quality of the candidate designs depends on the distribution of the simulated designs in the dataset. Importantly, the geometries in this dataset must satisfy other requirements and constraints that are not used in conditioning of the diffusion model, to ensure that the generated geometries are physical.



## Notes

[Zotero Link](zotero://select/library/items/VBDAWQAF)
