---
authors:
  - "[[Parsa Vatani]]"
  - "[[Mohamed Elrefaie]]"
  - "[[Farhad Nazarpour]]"
  - "[[Faez Ahmed]]"
year: 2025
date: 2025-09-05
tags:
  - paper
url: https://arxiv.org/abs/2509.12224
draft: false
---


> [!tldr] Abstract
> The computational cost of traditional Computational Fluid Dynamics-based Aerodynamic Shape Optimization severely restricts design space exploration. This paper introduces TripOptimizer, a fully differentiable deep learning framework for rapid aerodynamic analysis and shape optimization directly from vehicle point cloud data. TripOptimizer employs a Variational Autoencoder featuring a triplane-based implicit neural representation for high-fidelity 3D geometry reconstruction and a drag coefficient prediction head. Trained on DrivAerNet++, a large-scale dataset of 8,000 unique vehicle geometries with corresponding drag coefficients computed via Reynolds-Averaged Navier-Stokes simulations, the model learns a latent representation that encodes aerodynamically salient geometric features. We propose an optimization strategy that modifies a subset of the encoder parameters to steer an initial geometry towards a target drag value, and demonstrate its efficacy in case studies where optimized designs achieved drag coefficient reductions up to 11.8\%. These results were subsequently validated by using independent, high-fidelity Computational Fluid Dynamics simulations with more than 150 million cells. A key advantage of the implicit representation is its inherent robustness to geometric imperfections, enabling optimization of non-watertight meshes, a significant challenge for traditional adjoint-based methods. The framework enables a more agile Aerodynamic Shape Optimization workflow, reducing reliance on computationally intensive CFD simulations, especially during early design stages.



## Notes

[Zotero Link](zotero://select/library/items/8NFXA8II)
