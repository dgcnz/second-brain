---
authors:
- "[[Gr\xE9goire Mialon]]"
- '[[Randall Balestriero]]'
- '[[Yann LeCun]]'
year: 2024
tags:
- paper
- dl_theory
- ssl
- regularization
- variance
- representation_learning
url: http://arxiv.org/abs/2209.14905
date: '2022-09-29'
---

> [!tldr] Abstract
> Self-Supervised Learning (SSL) methods such as VICReg, Barlow Twins or W-MSE avoid collapse of their joint embedding architectures by constraining or regularizing the covariance matrix of their projector’s output. This study highlights important properties of such strategy, which we coin Variance-Covariance regularization (VCReg). More precisely, we show that VCReg combined to a MLP projector enforces pairwise independence between the features of the learned representation. This result emerges by bridging VCReg applied on the projector’s output to kernel independence criteria applied on the projector’s input. We empirically validate our findings where (i) we put in evidence which projector’s characteristics favor pairwise independence, (ii) we demonstrate pairwise independence to be beneficial for out-of-domain generalization, (iii) we demonstrate that the scope of VCReg goes beyond SSL by using it to solve Independent Component Analysis. This provides the first theoretical motivation and explanation of MLP projectors in SSL.



## Notes

[Zotero Link](zotero://select/library/items/HF9PDWRH)


