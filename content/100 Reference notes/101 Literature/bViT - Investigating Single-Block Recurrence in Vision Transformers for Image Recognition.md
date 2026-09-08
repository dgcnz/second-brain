---
authors:
  - "[[Michal Byra]]"
  - "[[Pawel Olszowiec]]"
  - "[[Grzegorz Stefanski]]"
  - "[[Grzegorz Gruszczynski]]"
  - "[[Alberto Presta]]"
year: 2026
date: 2026-05-11
tags:
  - paper
url: https://arxiv.org/abs/2605.10661
draft: false
---


> [!tldr] Abstract
> Vision Transformers (ViTs) are built by stacking independently parameterized blocks, but it remains unclear how much of this depth requires layer specific transformations and how much can be realized through recurrent computation. We study this question with bViT, a single-block recurrent ViT in which one transformer block is applied repeatedly to process an image. This architecture preserves the iterative structure of a deep ViT while removing layer specific block parameterization, providing a controlled setting for studying recurrence in vision. On ImageNet-1K, a 12-step bViT-B achieves accuracy comparable to standard ViT-B under the same training recipe and computational budget, while using an order of magnitude fewer parameters. We observe that recurrent performance improves with representation width, with wider bViTs recovering much more of the performance of standard ViTs than narrow variants. We interpret this behavior as implicit depth multiplexing, where a shared block expresses multiple step-dependent computations through the evolving hidden state. Beyond ImageNet classification, bViT transfers competitively to downstream tasks and enables parameter-efficient fine-tuning. Mechanistic analyses of activations, attention and step-specific pruning show that the shared block changes its effective behavior across recurrent steps rather than simply repeating the same computation. Our results suggest that a large fraction of ViT depth can be implemented through recurrent reuse, provided that the representation space is sufficiently wide.



## Notes

[Zotero Link](zotero://select/library/items/WK974MQU)
