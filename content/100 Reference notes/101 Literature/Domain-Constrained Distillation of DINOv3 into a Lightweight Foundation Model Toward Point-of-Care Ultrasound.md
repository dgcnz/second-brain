---
authors:
  - "[[Jaber Al Nahian]]"
year: 
date: 
tags:
  - paper
url: https://proceedings.mlr.press/v315/nahian26a.html
draft: false
---


> [!tldr] Abstract
> Vision foundation models such as DINOv3 provide powerful representations but are too computationally demanding for point-of-care ultrasound (POCUS), whereas lightweight CNNs remain deployable yet brittle when faced with diverse anatomies and acquisition styles. We bridge this gap with a domain-constrained distillation framework that transfers DINOv3 ViT-B/16 knowledge into a compact ResNet-50, achieving roughly 3.4× compression while preserving the teacher’s billion-scale visual priors. Using a large, heterogeneous ultrasound corpus and physics-aware augmentations, the distilled model delivers substantial linear-probe improvements over standard CNN baselines and consistently outperforms the ViT teacher on challenging, heterogeneous datasets. It further offers marked gains in limited-label regimes, reflecting the realities of POCUS workflows where annotated data are scarce. Embedding visualizations show that the distilled encoder forms clearer, anatomyaware clusters than the teacher, indicating successful alignment to ultrasound structure. Together, these results demonstrate that large-scale natural-image priors can be distilled into a lightweight, generalizable encoder suitable for resource-constrained clinical deployment.



## Notes

[Zotero Link](zotero://select/library/items/DKXZ5XKT)
