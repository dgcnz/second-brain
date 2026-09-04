---
authors:
  - "[[David Nordström]]"
  - "[[Johan Edstedt]]"
  - "[[Fredrik Kahl]]"
  - "[[Georg Bökman]]"
year: 2025
date: 2025-11-21
tags:
  - paper
url: https://arxiv.org/abs/2511.17309
draft: false
---


> [!tldr] Abstract
> Self-supervised learning on images seeks to extract meaningful visual representations from unlabeled data. When scaled to large datasets, this paradigm has achieved state-of-the-art performance and the resulting trained models such as DINOv3 have seen widespread adoption. However, most prior efforts are optimized for semantic understanding rather than geometric reasoning. One important exception is Cross-View Completion, CroCo, which is a form of masked autoencoding (MAE) tailored for 3D understanding. In this work, we continue on the path proposed by CroCo and focus on learning features tailored for 3D vision. In a nutshell, we extend MAE to arbitrarily many views of the same scene. By uniformly masking all views and employing a lightweight decoder with inter-frame attention, our approach is inherently simpler and more scalable than CroCo. We evaluate the resulting model, MuM, extensively on downstream tasks including feedforward reconstruction, dense image matching and relative pose estimation, finding that it outperforms the state-of-the-art visual encoders DINOv3 and CroCo v2.



## Notes

[Zotero Link](zotero://select/library/items/BCSYLHKD)
