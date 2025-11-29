---
authors:
  - "[[Quentin Garrido]]"
  - "[[Laurent Najman]]"
  - "[[Yann Lecun]]"
year: 2023
tags:
  - paper
  - dl_theory
  - ssl
  - equivariance
  - representation_learning
url: http://arxiv.org/abs/2302.10283
share: true
---


> [!tldr] Abstract
> Recent progress has been made towards learning invariant or equivariant representations with selfsupervised learning. While invariant methods are evaluated on large scale datasets, equivariant ones are evaluated in smaller, more controlled, settings. We aim at bridging the gap between the two in order to learn more diverse representations that are suitable for a wide range of tasks. We start by introducing a dataset called 3DIEBench, consisting of renderings from 3D models over 55 classes and more than 2.5 million images where we have full control on the transformations applied to the objects. We further introduce a predictor architecture based on hypernetworks to learn equivariant representations with no possible collapse to invariance. We introduce SIE (Split InvariantEquivariant) which combines the hypernetworkbased predictor with representations split in two parts, one invariant, the other equivariant, to learn richer representations. We demonstrate significant performance gains over existing methods on equivariance related tasks from both a qualitative and quantitative point of view. We further analyze our introduced predictor and show how it steers the learned latent space. We hope that both our introduced dataset and approach will enable learning richer representations without supervision in more complex scenarios. Code and data are available at https://github.com/facebookresearch/SIE.



## Notes

[Zotero Link](zotero://select/library/items/W362AZBN)


