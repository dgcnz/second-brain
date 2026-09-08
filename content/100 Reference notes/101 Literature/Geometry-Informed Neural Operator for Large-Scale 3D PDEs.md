---
authors:
  - "[[Zongyi Li]]"
  - "[[Nikola Borislavov Kovachki]]"
  - "[[Chris Choy]]"
  - "[[Boyi Li]]"
  - "[[Jean Kossaifi]]"
  - "[[Shourya Prakash Otta]]"
  - "[[Mohammad Amin Nabian]]"
  - "[[Maximilian Stadler]]"
  - "[[Christian Hundt]]"
  - "[[Kamyar Azizzadenesheli]]"
  - "[[Anima Anandkumar]]"
year: 2023
date: 2023-09-01
tags:
  - paper
url: https://arxiv.org/abs/2309.00583
draft: false
---


> [!tldr] Abstract
> We propose the geometry-informed neural operator (GINO), a highly efficient approach to learning the solution operator of large-scale partial differential equations with varying geometries. GINO uses a signed distance function and point-cloud representations of the input shape and neural operators based on graph and Fourier architectures to learn the solution operator. The graph neural operator handles irregular grids and transforms them into and from regular latent grids on which Fourier neural operator can be efficiently applied. GINO is discretization-convergent, meaning the trained model can be applied to arbitrary discretization of the continuous domain and it converges to the continuum operator as the discretization is refined. To empirically validate the performance of our method on large-scale simulation, we generate the industry-standard aerodynamics dataset of 3D vehicle geometries with Reynolds numbers as high as five million. For this large-scale 3D fluid simulation, numerical methods are expensive to compute surface pressure. We successfully trained GINO to predict the pressure on car surfaces using only five hundred data points. The cost-accuracy experiments show a $26,000 \times$ speed-up compared to optimized GPU-based computational fluid dynamics (CFD) simulators on computing the drag coefficient. When tested on new combinations of geometries and boundary conditions (inlet velocities), GINO obtains a one-fourth reduction in error rate compared to deep neural network approaches.



## Notes

[Zotero Link](zotero://select/library/items/GICCDRVV)
