---
authors:
  - "[[Hanwen Jiang]]"
  - "[[Hao Tan]]"
  - "[[Peng Wang]]"
  - "[[Haian Jin]]"
  - "[[Yue Zhao]]"
  - "[[Sai Bi]]"
  - "[[Kai Zhang]]"
  - "[[Fujun Luan]]"
  - "[[Kalyan Sunkavalli]]"
  - "[[Qixing Huang]]"
  - "[[Georgios Pavlakos]]"
year: 2025
date: 2025-05-01
tags:
  - paper
url: https://arxiv.org/abs/2505.00702
draft: false
---


> [!tldr] Abstract
> We present RayZer, a self-supervised multi-view 3D Vision model trained without any 3D supervision, i.e., camera poses and scene geometry, while exhibiting emerging 3D awareness. Concretely, RayZer takes unposed and uncalibrated images as input, recovers camera parameters, reconstructs a scene representation, and synthesizes novel views. During training, RayZer relies solely on its self-predicted camera poses to render target views, eliminating the need for any ground-truth camera annotations and allowing RayZer to be trained with 2D image supervision. The emerging 3D awareness of RayZer is attributed to two key factors. First, we design a self-supervised framework, which achieves 3D-aware auto-encoding of input images by disentangling camera and scene representations. Second, we design a transformer-based model in which the only 3D prior is the ray structure, connecting camera, pixel, and scene simultaneously. RayZer demonstrates comparable or even superior novel view synthesis performance than ``oracle'' methods that rely on pose annotations in both training and testing. Project: https://hwjiang1510.github.io/RayZer/



## Notes

[Zotero Link](zotero://select/library/items/3QSNK73X)
