---
authors:
- '[[Adrien Bardes]]'
- '[[Quentin Garrido]]'
- '[[Jean Ponce]]'
- '[[Xinlei Chen]]'
- '[[Michael Rabbat]]'
- '[[Yann LeCun]]'
- '[[Mahmoud Assran]]'
- '[[Nicolas Ballas]]'
year: 2024
tags:
- paper
- video
- ssl
url: http://arxiv.org/abs/2404.08471
date: '2024-02-15'
---

> [!tldr] Abstract
> This paper explores feature prediction as a stand-alone objective for unsupervised learning from video and introduces V-JEPA, a collection of vision models trained solely using a feature prediction objective, without the use of pretrained image encoders, text, negative examples, reconstruction, or other sources of supervision. The models are trained on 2 million videos collected from public datasets and are evaluated on downstream image and video tasks. Our results show that learning by predicting video features leads to versatile visual representations that perform well on both motion and appearance-based tasks, without adaption of the model's parameters; e.g., using a frozen backbone. Our largest model, a ViT-H/16 trained only on videos, obtains 81.9% on Kinetics-400, 72.2% on Something-Something-v2, and 77.9% on ImageNet1K.


## Notes

> [!NOTE] Summary
> - Same model as V-JEPA.
> - Larger dataset, etc
> - Two-phase pre-training: Stage 1 on 16 frames, Stage 2 on 64 frames.

[Zotero Link](zotero://select/library/items/57MLFXM6)


