---
authors:
  - "[[Sanghyun Jo]]"
  - "[[Ziseok Lee]]"
  - "[[Wooyeol Lee]]"
  - "[[Jonghyun Choi]]"
  - "[[Jaesik Park]]"
  - "[[Kyungsu Kim]]"
year: 2025
date: 2025-03-11
tags:
  - paper
url: https://arxiv.org/abs/2503.07982
draft: false
---


> [!tldr] Abstract
> High-quality instance and panoptic segmentation has traditionally relied on dense instance-level annotations such as masks, boxes, or points, which are costly, inconsistent, and difficult to scale. Unsupervised and weakly-supervised approaches reduce this burden but remain constrained by semantic backbone constraints and human bias, often producing merged or fragmented outputs. We present TRACE (TRAnsforming diffusion Cues to instance Edges), showing that text-to-image diffusion models secretly function as instance edge annotators. TRACE identifies the Instance Emergence Point (IEP) where object boundaries first appear in self-attention maps, extracts boundaries through Attention Boundary Divergence (ABDiv), and distills them into a lightweight one-step edge decoder. This design removes the need for per-image diffusion inversion, achieving 81x faster inference while producing sharper and more connected boundaries. On the COCO benchmark, TRACE improves unsupervised instance segmentation by +5.1 AP, and in tag-supervised panoptic segmentation it outperforms point-supervised baselines by +1.7 PQ without using any instance-level labels. These results reveal that diffusion models encode hidden instance boundary priors, and that decoding these signals offers a practical and scalable alternative to costly manual annotation. Project Page: https://shjo-april.github.io/TRACE/



## Notes

[Zotero Link](zotero://select/library/items/ZLG2HFS7)
