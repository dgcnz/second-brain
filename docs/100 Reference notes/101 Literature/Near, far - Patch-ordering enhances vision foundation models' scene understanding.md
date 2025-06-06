---
authors:
  - "[[Valentinos Pariza|Valentinos Pariza]]"
  - "[[Mohammadreza Salehi|Mohammadreza Salehi]]"
  - "[[Gertjan Burghouts|Gertjan Burghouts]]"
  - "[[Francesco Locatello|Francesco Locatello]]"
  - "[[Yuki M. Asano|Yuki M. Asano]]"
year: 2025
tags:
  - paper
  - post_training
  - vit
  - ssl
  - dense
  - patch_level
url: http://arxiv.org/abs/2408.11054
share: true
---


> [!tldr] Abstract
> We introduce NeCo: Patch Neighbor Consistency, a novel self-supervised training loss that enforces patch-level nearest neighbor consistency across a student and teacher model. Compared to contrastive approaches that only yield binary learning signals, i.e. ‘attract’ and ‘repel’, this approach benefits from the more fine-grained learning signal of sorting spatially dense features relative to reference patches. Our method leverages differentiable sorting applied on top of pretrained representations, such as DINOv2-registers to bootstrap the learning signal and further improve upon them. This dense post-pretraining leads to superior performance across various models and datasets, despite requiring only 19 hours on a single GPU. This method generates high-quality dense feature encoders and establishes several new state-of-the-art results such as +5.5 % and +6% for non-parametric in-context semantic segmentation on ADE20k and Pascal VOC, +7.2% and +5.7% for linear segmentation evaluations on COCO-Things and -Stuff and improvements in the 3D understanding of multi-view consistency on SPair-71k, by more than 1.5%.



## Notes

[Zotero Link](zotero://select/library/items/5K3NU9KT)


