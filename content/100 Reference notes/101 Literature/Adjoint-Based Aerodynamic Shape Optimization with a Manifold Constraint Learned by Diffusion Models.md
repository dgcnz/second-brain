---
authors:
  - "[[Long Chen]]"
  - "[[Emre Oezkaya]]"
  - "[[Jan Rottmayer]]"
  - "[[Nicolas R. Gauger]]"
  - "[[Zebang Shen]]"
  - "[[Yinyu Ye]]"
year: 2025
date: 2025-07-31
tags:
  - paper
url: https://arxiv.org/abs/2507.23443
draft: false
---


> [!tldr] Abstract
> We introduce an adjoint-based aerodynamic shape optimization framework that integrates a diffusion model trained on existing designs to learn a smooth manifold of aerodynamically viable shapes. This manifold is enforced as an equality constraint to the shape optimization problem. Central to our method is the computation of adjoint gradients of the design objectives (e.g., drag and lift) with respect to the manifold space. These gradients are derived by first computing shape derivatives with respect to conventional shape design parameters (e.g., Hicks-Henne parameters) and then backpropagating them through the diffusion model to its latent space via automatic differentiation. Our framework preserves mathematical rigor and can be integrated into existing adjoint-based design workflows with minimal modification. Demonstrated on extensive transonic RANS airfoil design cases using off-the-shelf and general-purpose nonlinear optimizers, our approach eliminates ad hoc parameter tuning and variable scaling, maintains robustness across initialization and optimizer choices, and achieves superior aerodynamic performance compared to conventional approaches. This work establishes how AI generated priors integrates effectively with adjoint methods to enable robust, high-fidelity aerodynamic shape optimization through automatic differentiation.



## Notes

[Zotero Link](zotero://select/library/items/E8HLT67N)
