---
authors:
  - "[[Zongrui Li]]"
  - "[[Xinhua Ma]]"
  - "[[Minghui Hu]]"
  - "[[Yunqing Zhao]]"
  - "[[Yingchen Yu]]"
  - "[[Qian Zheng]]"
  - "[[Chang Liu]]"
  - "[[Xudong Jiang]]"
  - "[[Song Bai]]"
year: 2026
date: 2026-02-10
tags:
  - paper
url: https://arxiv.org/abs/2602.09929
draft: false
---


> [!tldr] Abstract
> Monocular normal estimation aims to estimate the normal map from a single RGB image of an object under arbitrary lights. Existing methods rely on deep models to directly predict normal maps. However, they often suffer from 3D misalignment: while the estimated normal maps may appear to have a correct appearance, the reconstructed surfaces often fail to align with the geometric details. We argue that this misalignment stems from the current paradigm: the model struggles to distinguish and reconstruct varying geometry represented in normal maps, as the differences in underlying geometry are reflected only through relatively subtle color variations. To address this issue, we propose a new paradigm that reformulates normal estimation as shading sequence estimation, where shading sequences are more sensitive to various geometric information. Building on this paradigm, we present RoSE, a method that leverages image-to-video generative models to predict shading sequences. The predicted shading sequences are then converted into normal maps by solving a simple ordinary least-squares problem. To enhance robustness and better handle complex objects, RoSE is trained on a synthetic dataset, MultiShade, with diverse shapes, materials, and light conditions. Experiments demonstrate that RoSE achieves state-of-the-art performance on real-world benchmark datasets for object-based monocular normal estimation.



## Notes

[Zotero Link](zotero://select/library/items/F9MZ2BLF)
