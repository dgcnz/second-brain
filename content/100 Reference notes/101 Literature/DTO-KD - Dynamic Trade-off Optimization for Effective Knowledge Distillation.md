---
authors:
  - "[[Zeeshan Hayder]]"
  - "[[Ali Cheraghian]]"
  - "[[Lars Petersson]]"
  - "[[Mehrtash Harandi]]"
  - "[[Richard Hartley]]"
year: 2026
date: 2026
tags:
  - paper
url: https://proceedings.iclr.cc/paper_files/paper/2026/hash/e546ce4230c15bc422a500bb47b341ea-Abstract-Conference.html
draft: false
---


> [!tldr] Abstract
> Knowledge Distillation (KD) is a widely adopted framework for compressing large models into compact student models by transferring knowledge from a highcapacity teacher. Despite its success, KD presents two persistent challenges: (1) the trade-off between optimizing for the primary task loss and mimicking the teacher’s outputs, and (2) the gradient disparity arising from architectural and representational mismatches between teacher and student models. In this work, we propose Dynamic Trade-off Optimization for Knowledge Distillation (DTO-KD), a principled multi-objective optimization formulation of KD that dynamically balances task and distillation losses at the gradient level. Specifically, DTO-KD resolves two critical issues in gradient-based KD optimization: (i) gradient conflict, where task and distillation gradients are directionally misaligned, and (ii) gradient dominance, where one objective suppresses learning progress on the other. Our method adapts per-iteration trade-offs by leveraging gradient projection techniques to ensure balanced and constructive updates. We evaluate DTO-KD on large-scale benchmarks including ImageNet-1K for classification and COCO for object detection. Across both tasks, DTO-KD outperforms prior KD methods, yielding state-of-the-art accuracy and improved convergence behavior. Furthermore, student trained with DTO-KD exceed the performance of their non-distilled counterparts, demonstrating the efficacy of our multi-objective formulation.



## Notes

[Zotero Link](zotero://select/library/items/GB5K8LF9)
