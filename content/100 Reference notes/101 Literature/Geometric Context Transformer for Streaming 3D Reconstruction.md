---
authors:
  - "[[Lin-Zhuo Chen]]"
  - "[[Jian Gao]]"
  - "[[Yihang Chen]]"
  - "[[Ka Leong Cheng]]"
  - "[[Yipengjing Sun]]"
  - "[[Liangxiao Hu]]"
  - "[[Nan Xue]]"
  - "[[Xing Zhu]]"
  - "[[Yujun Shen]]"
  - "[[Yao Yao]]"
  - "[[Yinghao Xu]]"
year: 2026
date: 2026-04-15
tags:
  - paper
url: https://arxiv.org/abs/2604.14141
draft: false
---


> [!tldr] Abstract
> Streaming 3D reconstruction aims to recover 3D information, such as camera poses and point clouds, from a video stream, which necessitates geometric accuracy, temporal consistency, and computational efficiency. Motivated by the principles of Simultaneous Localization and Mapping (SLAM), we introduce LingBot-Map, a feed-forward 3D foundation model for reconstructing scenes from streaming data, built upon a geometric context transformer (GCT) architecture. A defining aspect of LingBot-Map lies in its carefully designed attention mechanism, which integrates an anchor context, a pose-reference window, and a trajectory memory to address coordinate grounding, dense geometric cues, and long-range drift correction, respectively. This design keeps the streaming state compact while retaining rich geometric context, enabling stable efficient inference at around 20 FPS on 518 x 378 resolution inputs over long sequences exceeding 10,000 frames. Extensive evaluations across a variety of benchmarks demonstrate that our approach achieves superior performance compared to both existing streaming and iterative optimization-based approaches.



## Notes

[Zotero Link](zotero://select/library/items/VZ8E34B2)
