---
authors:
  - "[[Rémi Schlama]]"
  - "[[Philippe Schwaller]]"
year: 2026
date: 2026-05-21
tags:
  - paper
url: https://arxiv.org/abs/2605.22990
draft: false
---


> [!tldr] Abstract
> Mapping reaction pathways and transition states (TS) is fundamental to chemistry but computationally expensive at scale. The minimum energy pathway (MEP) dictates reaction rates and mechanisms, yet recovering it via electronic-structure methods requires thousands of costly force evaluations. Recent generative models accelerate TS identification but rely on iterative inference and only predict isolated saddle-point snapshots, missing the continuous reaction trajectory. We introduce Drift-React, an $\mathrm{SE}(3)$-equivariant generative framework that predicts complete reaction pathways in a single forward pass from only reactant and product geometries. By shifting distribution evolution to training via a Sinkhorn-weighted drifting field, Drift-React eliminates both the iterative force evaluations of NEB-style methods and the sequential ODE/SDE integration of diffusion and flow matching models. Evaluated on the Transition1x and Halo8 datasets, our one-step model generates physically consistent MEPs that accurately capture energetic bottlenecks and enable arbitrary-resolution sampling along the reaction coordinate. For isolated TS prediction, Drift-React matches the sub-Ångström accuracy of state-of-the-art iterative models while delivering orders-of-magnitude acceleration, clearing a major computational bottleneck for large-scale reaction network exploration.



## Notes

[Zotero Link](zotero://select/library/items/953F2ANR)
