---
authors:
  - "[[Nikita Karaev]]"
  - "[[Iurii Makarov]]"
  - "[[Jianyuan Wang]]"
  - "[[Natalia Neverova]]"
  - "[[Andrea Vedaldi]]"
  - "[[Christian Rupprecht]]"
year: 2024
date: 2024-10-15
tags:
  - paper
url: https://arxiv.org/abs/2410.11831
draft: false
---


> [!tldr] Abstract
> Most state-of-the-art point trackers are trained on synthetic data due to the difficulty of annotating real videos for this task. However, this can result in suboptimal performance due to the statistical gap between synthetic and real videos. In order to understand these issues better, we introduce CoTracker3, comprising a new tracking model and a new semi-supervised training recipe. This allows real videos without annotations to be used during training by generating pseudo-labels using off-the-shelf teachers. The new model eliminates or simplifies components from previous trackers, resulting in a simpler and often smaller architecture. This training scheme is much simpler than prior work and achieves better results using 1,000 times less data. We further study the scaling behaviour to understand the impact of using more real unsupervised data in point tracking. The model is available in online and offline variants and reliably tracks visible and occluded points.



## Notes

[Zotero Link](zotero://select/library/items/EVIMKKQ6)
