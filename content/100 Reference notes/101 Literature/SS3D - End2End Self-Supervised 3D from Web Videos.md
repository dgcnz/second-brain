---
authors:
  - "[[Marwane Hariat]]"
  - "[[Gianni Franchi]]"
  - "[[David Filliat]]"
  - "[[Antoine Manzanera]]"
year: 2026
date: 2026-04-24
tags:
  - paper
url: https://arxiv.org/abs/2604.22686
draft: false
---


> [!tldr] Abstract
> We present SS3D, a web-scale SfM-based self-supervision pretraining pipeline for feed-forward 3D estimation from monocular video. Our model jointly predicts depth, ego-motion, and intrinsics in a single forward pass and is trained/evaluated as a coherent end-to-end 3D estimator. To stabilize joint learning, we use an intrinsics-first two-stage schedule and a unified single-checkpoint evaluation protocol. Scaling SfM self-supervision to unconstrained web video is challenging due to weak multi-view observability and strong corpus heterogeneity; we address these with a multi-view signal proxy (MVS) used for filtering and curriculum sampling, and with expert training distilled into a single student. Pretraining on YouTube-8M (~100M frames after filtering) yields strong cross-domain zero-shot transfer and improved fine-tuning performance over prior self-supervised baselines. We release the pretrained checkpoint and code.



## Notes

[Zotero Link](zotero://select/library/items/BU7B3DCZ)
