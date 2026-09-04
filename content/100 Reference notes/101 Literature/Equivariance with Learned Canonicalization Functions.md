---
authors:
- "[[S\xE9kou-Oumar Kaba]]"
- '[[Arnab Kumar Mondal]]'
- '[[Yan Zhang]]'
- '[[Yoshua Bengio]]'
- '[[Siamak Ravanbakhsh]]'
year: 2023
date: 2023-07-07
tags:
- paper
url: http://arxiv.org/abs/2211.06489
---

> [!tldr] Abstract
> Symmetry-based neural networks often constrain the architecture in order to achieve invariance or equivariance to a group of transformations. In this paper, we propose an alternative that avoids this architectural constraint by learning to produce canonical representations of the data. These canonicalization functions can readily be plugged into non-equivariant backbone architectures. We offer explicit ways to implement them for some groups of interest. We show that this approach enjoys universality while providing interpretable insights. Our main hypothesis, supported by our empirical results, is that learning a small neural network to perform canonicalization is better than using predefined heuristics. Our experiments show that learning the canonicalization function is competitive with existing techniques for learning equivariant functions across many tasks, including image classification, N -body dynamics prediction, point cloud classification and part segmentation, while being faster across the board.



## Notes

[Zotero Link](zotero://select/library/items/YBWXA7JX)

> [!done] Main idea
> We learn a canonicalization function $h$ either by a neural network or an optimization procedure.
> $$
> \phi(x) = h'(x) f(h(x)^{-1} x)
> $$
