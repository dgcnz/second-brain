---
authors:
  - "[[Seunghwan Keum]]"
  - "[[Alok Warey]]"
year: 2026
date: 2026-05-27
tags:
  - paper
url: https://arxiv.org/abs/2605.27968
draft: false
---


> [!tldr] Abstract
> Deploying Scientific Machine Learning surrogates in industrial CFD workflows requires adapting pretrained models to new vehicle families without large datasets; yet whether geometric representations learned by a geometry encoder transfer to topologically distinct shapes remains unvalidated. We address this through leave-one-family-out experiments on a 61.47M-parameter Transformer surrogate (AB-UPT) pretrained on four vehicle families (411 external aerodynamics cases) and adapted to the held-out fifth with only 20 samples. Three strategies are compared: Full Fine-Tuning (FFT), Lightweight Fine-Tuning (LFT), and Low-Rank Adaptation (LoRA). The central finding is that pretrained geometry encoders learn transferable representations, but the adaptation mechanism determines whether they can be exploited. FFT destabilizes as 61.47M unconstrained parameters overfit to 20 samples (R^2=0.40); LFT fails because the frozen encoder cannot represent unseen shapes (R^2<0). LoRA resolves both: rank-constrained adapters injected into all layers regularize the loss landscape while preserving pretrained features, achieving R^2=0.85+/-0.02 across all five families with 50% lower force RMSE than FFT and 28% lower pointwise field errors. LoRA also outperforms from-scratch training using 3x more target-family data, eliminating the need for large per-family datasets. These results recast LoRA from a memory-saving convenience into a convergence enabler for geometry transfer: a shared backbone paired with lightweight per-family adapters trainable in hours from minimal data.



## Notes

[Zotero Link](zotero://select/library/items/8QZNUPYT)
