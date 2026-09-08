---
authors:
  - "[[Giovanni Catalani]]"
  - "[[Jean Fesquet]]"
  - "[[Xavier Bertrand]]"
  - "[[Frédéric Tost]]"
  - "[[Michael Bauerheim]]"
  - "[[Joseph Morlier]]"
year: 2025
date: 2025-05-14
tags:
  - paper
url: https://arxiv.org/abs/2505.14704
draft: false
---


> [!tldr] Abstract
> This paper introduces a novel surrogate modeling framework for aerodynamic applications based on Neural Fields. The proposed approach, MARIO (Modulated Aerodynamic Resolution Invariant Operator), addresses non parametric geometric variability through an efficient shape encoding mechanism and exploits the discretization-invariant nature of Neural Fields. It enables training on significantly downsampled meshes, while maintaining consistent accuracy during full-resolution inference. These properties allow for efficient modeling of diverse flow conditions, while reducing computational cost and memory requirements compared to traditional CFD solvers and existing surrogate methods. The framework is validated on two complementary datasets that reflect industrial constraints. First, the AirfRANS dataset consists in a two-dimensional airfoil benchmark with non-parametric shape variations. Performance evaluation of MARIO on this case demonstrates an order of magnitude improvement in prediction accuracy over existing methods across velocity, pressure, and turbulent viscosity fields, while accurately capturing boundary layer phenomena and aerodynamic coefficients. Second, the NASA Common Research Model features three-dimensional pressure distributions on a full aircraft surface mesh, with parametric control surface deflections. This configuration confirms MARIO's accuracy and scalability. Benchmarking against state-of-the-art methods demonstrates that Neural Field surrogates can provide rapid and accurate aerodynamic predictions under the computational and data limitations characteristic of industrial applications.



## Notes

[Zotero Link](zotero://select/library/items/JWSW363R)
