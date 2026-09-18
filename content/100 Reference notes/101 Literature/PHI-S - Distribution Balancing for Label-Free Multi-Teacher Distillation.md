---
authors:
  - "[[Mike Ranzinger]]"
  - "[[Jon Barker]]"
  - "[[Greg Heinrich]]"
  - "[[Pavlo Molchanov]]"
  - "[[Bryan Catanzaro]]"
  - "[[Andrew Tao]]"
year: 2024
date: 2024-10-02
tags:
  - paper
url: https://arxiv.org/abs/2410.01680
draft: false
---


> [!tldr] Abstract
> Various visual foundation models have distinct strengths and weaknesses, both of which can be improved through heterogeneous multi-teacher knowledge distillation without labels, termed "agglomerative models." We build upon this body of work by studying the effect of the teachers' activation statistics, particularly the impact of the loss function on the resulting student model quality. We explore a standard toolkit of statistical normalization techniques to better align the different distributions and assess their effects. Further, we examine the impact on downstream teacher-matching metrics, which motivates the use of Hadamard matrices. With these matrices, we demonstrate useful properties, showing how they can be used for isotropic standardization, where each dimension of a multivariate distribution is standardized using the same scale. We call this technique "PHI Standardization" (PHI-S) and empirically demonstrate that it produces the best student model across the suite of methods studied.



## Notes

[Zotero Link](zotero://select/library/items/9BVX3E94)
