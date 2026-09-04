---
authors:
- '[[Romain Cosentino]]'
- '[[Anirvan Sengupta]]'
- '[[Salman Avestimehr]]'
- '[[Mahdi Soltanolkotabi]]'
- '[[Antonio Ortega]]'
- '[[Ted Willke]]'
- '[[Mariano Tepper]]'
year: 2022
tags:
- paper
- equivariance
- dl_theory
- ssl
url: http://arxiv.org/abs/2205.06926
date: '2022-05-13'
---

> [!tldr] Abstract
> Self-supervised learning (SSL) is currently one of the premier techniques to create data representations that are actionable for transfer learning in the absence of human annotations. Despite their success, the underlying geometry of these representations remains elusive, which obfuscates the quest for more robust, trustworthy, and interpretable models. In particular, mainstream SSL techniques rely on a speciﬁc deep neural network architecture with two cascaded neural networks: the encoder and the projector. When used for transfer learning, the projector is discarded since empirical results show that its representation generalizes more poorly than the encoder’s. In this paper, we investigate the representation induced by the encoder and how the strength of the data augmentation policies as well as the width and depth of the projector aﬀect its representation. We discover a non-trivial relation between the encoder, the projector, and the data augmentation strength: with increasingly larger augmentation policies, the projector, rather than the encoder, is more strongly driven to become invariant to the augmentations. It does so by eliminating crucial information about the data by learning to project it into a low-dimensional space, a noisy estimate of the data manifold tangent plane in the encoder representation. This analysis is substantiated through a geometrical perspective with theoretical and empirical results.



## Notes

[Zotero Link](zotero://select/library/items/MUTW4I2E)


