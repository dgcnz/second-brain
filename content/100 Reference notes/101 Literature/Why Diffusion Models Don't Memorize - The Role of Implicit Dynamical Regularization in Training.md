---
authors:
  - "[[Tony Bonnaire]]"
  - "[[Raphaël Urfin]]"
  - "[[Giulio Biroli]]"
  - "[[Marc Mézard]]"
year: 2025
date: 2025-05-23
tags:
  - paper
url: https://arxiv.org/abs/2505.17638
draft: false
---


> [!tldr] Abstract
> Diffusion models have achieved remarkable success across a wide range of generative tasks. A key challenge is understanding the mechanisms that prevent their memorization of training data and allow generalization. In this work, we investigate the role of the training dynamics in the transition from generalization to memorization. Through extensive experiments and theoretical analysis, we identify two distinct timescales: an early time $τ_\mathrm{gen}$ at which models begin to generate high-quality samples, and a later time $τ_\mathrm{mem}$ beyond which memorization emerges. Crucially, we find that $τ_\mathrm{mem}$ increases linearly with the training set size $n$, while $τ_\mathrm{gen}$ remains constant. This creates a growing window of training times with $n$ where models generalize effectively, despite showing strong memorization if training continues beyond it. It is only when $n$ becomes larger than a model-dependent threshold that overfitting disappears at infinite training times. These findings reveal a form of implicit dynamical regularization in the training dynamics, which allow to avoid memorization even in highly overparameterized settings. Our results are supported by numerical experiments with standard U-Net architectures on realistic and synthetic datasets, and by a theoretical analysis using a tractable random features model studied in the high-dimensional limit.



## Notes

[Zotero Link](zotero://select/library/items/W4HSRNZC)
