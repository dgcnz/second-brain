---
authors:
- '[[Erik J. Bekkers]]'
- '[[Sharvaree Vadgama]]'
- '[[Rob D. Hesselink]]'
- '[[Putri A. van der Linden]]'
- '[[David W. Romero]]'
year: 2023
date: 2023-11-24
tags:
- paper
- geometric_dl
- equivariance
url: http://arxiv.org/abs/2310.02970
---

> [!tldr] Abstract
> Based on the theory of homogeneous spaces we derive geometrically optimal edge attributes to be used within the flexible message passing framework. We formalize the notion of weight sharing in convolutional networks as the sharing of message functions over point-pairs that should be treated equally. We define equivalence classes of point-pairs that are identical up to a transformation in the group and derive attributes that uniquely identify these classes. Weight sharing is then obtained by conditioning message functions on these attributes. As an application of the theory, we develop an efficient equivariant group convolutional network for processing 3D point clouds. The theory of homogeneous spaces tells us how to do group convolutions with feature maps over the homogeneous space of positions R3, position and orientations R3×S2, and the group SE(3) itself. Among these, R3×S2 is an optimal choice due to the ability to represent directional information, which R3 methods cannot, and it significantly enhances computational efficiency compared to indexing features on the full SE(3) group. We empirically support this claim by reaching state-of-theart results –in accuracy and speed– on three different benchmarks: interatomic potential energy prediction, trajectory forecasting in N-body systems, and generating molecules via equivariant diffusion models. Our code is publicly available at https://github.com/ebekkers/ponita .



## Notes

[Zotero Link](zotero://select/library/items/U937ZMZN)


