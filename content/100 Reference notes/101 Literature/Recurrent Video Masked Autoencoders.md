---
authors:
  - "[[Daniel Zoran]]"
  - "[[Nikhil Parthasarathy]]"
  - "[[Yi Yang]]"
  - "[[Drew A. Hudson]]"
  - "[[Joao Carreira]]"
  - "[[Andrew Zisserman]]"
year: 2025
date: 2025-12-15
tags:
  - paper
  - temporal
  - vit
url: http://arxiv.org/abs/2512.13684
draft: false
---


> [!tldr] Abstract
> We present Recurrent Video Masked-Autoencoders (RVM): a novel video representation learning approach that uses a transformer-based recurrent neural network to aggregate dense image features over time, effectively capturing the spatio-temporal structure of natural video data. RVM learns via an asymmetric masked prediction task requiring only a standard pixel reconstruction objective. This design yields a highly efficient “generalist” encoder: RVM achieves competitive performance with state-of-the-art video models (e.g. VideoMAE, V-JEPA) on video-level tasks like action recognition and point/object tracking, while also performing favorably against image models (e.g. DINOv2) on tasks that test geometric and dense spatial understanding. Notably, RVM achieves strong performance in the small-model regime without requiring knowledge distillation, exhibiting up to 30× greater parameter efficiency than competing video masked autoencoders. Moreover, we demonstrate that RVM’s recurrent nature allows for stable feature propagation over long temporal horizons with linear computational cost, overcoming some of the limitations of standard spatio-temporal attention-based architectures. Finally, we use qualitative visualizations to highlight that RVM learns rich representations of scene semantics, structure, and motion.



## Notes

[Zotero Link](zotero://select/library/items/AZYAJ75R)
