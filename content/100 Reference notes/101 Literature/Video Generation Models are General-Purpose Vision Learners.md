---
authors:
  - "[[Letian Wang]]"
  - "[[Chuhan Zhang]]"
  - "[[Rishabh Kabra]]"
  - "[[Jasper Uijlings]]"
  - "[[Steven Waslander]]"
  - "[[Andrew Zisserman]]"
  - "[[Joao Carreira]]"
  - "[[Kaiming He]]"
  - "[[Misha Andriluka]]"
  - "[[Eduard Gabriel Bazavan]]"
  - "[[Andrei Zanfir]]"
  - "[[Cristian Sminchisescu]]"
year: 2026
date: 2026-07-10
tags:
  - paper
url: https://arxiv.org/abs/2607.09024
draft: false
---


> [!tldr] Abstract
> Driven by next-token prediction, NLP shifted from task-specific models into powerful generalist foundation models. What, then, is the equivalent catalyst needed to achieve a general-purpose model in computer vision? In this paper, we contend that large-scale text-to-video generation serves as a strong pre-training paradigm for computer vision, providing the necessary spatiotemporal priors, vision-language alignment, and scalability required for general visual intelligence. We introduce GenCeption, which leverages a pre-trained video generative diffusion backbone to define a feed-forward perception model, capable of performing various vision tasks steered by text instructions. Empirical results demonstrate that GenCeption achieves state-of-the-art performance across a diverse suite of tasks, including depth, surface normal, and camera pose estimation, expression-referring segmentation, and 3D keypoint prediction, often matching or surpassing specialized models (e.g. DepthAnything3, SAM3, D4RT, VGGT-Omega, Sapiens, David, Genmo, and Lotus-2). Furthermore, the video generative pretrained backbone outperforms alternative pretraining paradigms (e.g., V-JEPA, and Video MAE) under comparable settings. Importantly, GenCeption exhibits preliminary data and model scaling properties along with exceptional data efficiency, where it achieves comparable performance with leading models like D4RT and VGGT-Omega with 7 to 500 less training data. Finally, GenCeption also exhibits intriguing emergent behaviors: a model trained exclusively on synthetic human videos generalizes to real-world footage and out-of-distribution object categories (e.g., animals and robots). These findings suggest that video generation is not merely a synthesis tool, but a foundational path toward generalist vision intelligence for the physical world. Project page: https://genception.github.io



## Notes

[Zotero Link](zotero://select/library/items/T39NMR6N)
