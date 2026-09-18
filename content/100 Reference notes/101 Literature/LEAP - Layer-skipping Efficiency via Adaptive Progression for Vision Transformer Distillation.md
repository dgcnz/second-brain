---
authors:
  - "[[Jiaqi Zhang]]"
  - "[[Ashton Lee]]"
  - "[[Anthony Wong]]"
  - "[[John Zou]]"
  - "[[Sami BuGhanem]]"
  - "[[Randall Balestriero]]"
year: 2026
date: 2026-06-17
tags:
  - paper
url: https://arxiv.org/abs/2606.19483
draft: false
---


> [!tldr] Abstract
> Vision Foundation Models (VFMs) with Vision Transformer (ViT) backbones, such as DINOv2, have become essential for downstream tasks like object recognition and semantic segmentation. The immense computational requirements of backbones often necessitate distillation into smaller architectures for edge deployment. Feature-based knowledge distillation (KD) often suffers from the teacher-student gap; the student struggles to imitate teacher's complex feature map due to its limited capacity. To mitigate this bottleneck, we propose LEAP: Layer-skipping Efficiency via Adaptive Progression, a training curriculum for ViT feature-based knowledge distillation. By utilizing the teacher's intermediate feature maps as a sequence of progressively more difficult targets, our curriculum allows the student to build a foundational representation before tackling higher-level abstractions. Our results demonstrate that this paradigm significantly accelerates convergence through adaptive difficulty selection across various student model sizes and dataset scales. With our curriculum, the LEAP-distilled ViT-S achieves 90.1% accuracy on ImageNet-100, a +12.24% improvement compared with baseline. On ImageNet-1K, LEAP achieves +3.84% and +7.75% improvement for the instance retrieval task on the Oxford and Paris datasets, respectively. Furthermore, the curriculum enables 25.1% savings in training FLOPs and 21% savings in training time on ImageNet-100 by implementing early-stopping for teacher inference during the initial stages of training. Code is available at https://github.com/KevinZ0217/LEAP



## Notes

[Zotero Link](zotero://select/library/items/FQJWYDZ2)
