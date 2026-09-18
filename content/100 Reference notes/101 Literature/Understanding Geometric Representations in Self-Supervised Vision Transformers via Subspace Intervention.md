---
authors:
  - "[[Weichen Zhou]]"
  - "[[Yawen Zou]]"
  - "[[Chunzhi Gu]]"
  - "[[Ran Dong]]"
  - "[[Haoran Xie]]"
  - "[[Chao Zhang]]"
year: 2026
date: 2026-07-02
tags:
  - paper
url: https://arxiv.org/abs/2607.01987
draft: false
---


> [!tldr] Abstract
> We introduce a controlled subspace intervention framework to investigate how self-supervised Vision Transformers (ViTs) encode dense geometric information. While linear probing is widely used to assess geometric representations, it treats features as a black box, failing to disentangle the underlying topology. To address this issue, we decompose the weights of converged linear probes to isolate the low-rank subspaces containing explicit geometric signals using Singular Value Decomposition (SVD). Our perspective yields three key insights: (1) Pre-training objectives determine how features are encoded. DINOv2 aligns spatial features for efficient linear extraction, while Masked Autoencoders (MAE) tend to disperse these signals, requiring a broader spatial context. (2) Explicit geometric representations are highly compressible, suggesting dense predictive heads could potentially be constrained to low-rank subspaces with minimal performance loss. (3) The layer-wise task affinity suggests that geometric precision peaks at intermediate layers before yielding to semantic abstraction in the final layers. By connecting internal encoding mechanics with downstream performance, these findings provide a basis for effective feature selection and lightweight decoder design. The source code is available at https://github.com/Zhou-Weichen/Geosubprobe.



## Notes

[Zotero Link](zotero://select/library/items/GNDRCIR3)
