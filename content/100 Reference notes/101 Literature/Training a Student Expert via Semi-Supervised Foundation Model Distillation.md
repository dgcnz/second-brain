---
authors:
  - "[[Pardis Taghavi]]"
  - "[[Tian Liu]]"
  - "[[Renjie Li]]"
  - "[[Reza Langari]]"
  - "[[Zhengzhong Tu]]"
year: 2026
date: 2026-04-04
tags:
  - paper
url: https://arxiv.org/abs/2604.03841
draft: false
---


> [!tldr] Abstract
> Foundation models deliver strong perception but are often too computationally heavy to deploy, and adapting them typically requires costly annotations. We introduce a semi-supervised knowledge distillation (SSKD) framework that compresses pre-trained vision foundation models (VFMs) into compact experts using limited labeled and abundant unlabeled data, and instantiate it for instance segmentation where per-pixel labels are particularly expensive. The framework unfolds in three stages: (1) domain adaptation of the VFM(s) via self-training with contrastive calibration, (2) knowledge transfer through a unified multi-objective loss, and (3) student refinement to mitigate residual pseudo-label bias. Central to our approach is an instance-aware pixel-wise contrastive loss that fuses mask and class scores to extract informative negatives and enforce clear inter-instance margins. By maintaining this contrastive signal across both adaptation and distillation, we align teacher and student embeddings and more effectively leverage unlabeled images. On Cityscapes and ADE20K, our $\approx 11\times$ smaller student improves over its zero-shot VFM teacher(s) by +11.9 and +8.6 AP, surpasses adapted teacher(s) by +3.4 and +1.5 AP, and outperforms state-of-the-art SSKD methods on benchmarks.



## Notes

[Zotero Link](zotero://select/library/items/FP73QLGE)
