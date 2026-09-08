---
authors:
  - "[[Sam Jacob Jacob]]"
  - "[[Markus Mrosek]]"
  - "[[Carsten Othmer]]"
  - "[[Harald Köstler]]"
year: 2025
date: 2025-04-09
tags:
  - paper
url: https://arxiv.org/abs/2504.06699
draft: false
---


> [!tldr] Abstract
> Aerodynamic optimization is crucial for developing eco-friendly, aerodynamic, and stylish cars, which requires close collaboration between aerodynamicists and stylists, a collaboration impaired by the time-consuming nature of aerodynamic simulations. Surrogate models offer a viable solution to reduce this overhead, but they are untested in real-world aerodynamic datasets. We present a comparative evaluation of two surrogate modeling approaches for predicting drag on a real-world dataset: a Convolutional Neural Network (CNN) model that uses a signed distance field as input and a commercial tool based on Graph Neural Networks (GNN) that directly processes a surface mesh. In contrast to previous studies based on datasets created from parameterized geometries, our dataset comprises 343 geometries derived from 32 baseline vehicle geometries across five distinct car projects, reflecting the diverse, free-form modifications encountered in the typical vehicle development process. Our results show that the CNN-based method achieves a mean absolute error of 2.3 drag counts, while the GNN-based method achieves 3.8. Both methods achieve approximately 77% accuracy in predicting the direction of drag change relative to the baseline geometry. While both methods effectively capture the broader trends between baseline groups (set of samples derived from a single baseline geometry), they struggle to varying extents in capturing the finer intra-baseline group variations. In summary, our findings suggest that aerodynamicists can effectively use both methods to predict drag in under two minutes, which is at least 600 times faster than performing a simulation. However, there remains room for improvement in capturing the finer details of the geometry.



## Notes

[Zotero Link](zotero://select/library/items/FEVKRT7X)
