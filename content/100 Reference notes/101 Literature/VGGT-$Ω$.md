---
authors:
  - "[[Jianyuan Wang]]"
  - "[[Minghao Chen]]"
  - "[[Shangzhan Zhang]]"
  - "[[Nikita Karaev]]"
  - "[[Johannes Schönberger]]"
  - "[[Patrick Labatut]]"
  - "[[Piotr Bojanowski]]"
  - "[[David Novotny]]"
  - "[[Andrea Vedaldi]]"
  - "[[Christian Rupprecht]]"
year: 2026
date: 2026-05-14
tags:
  - paper
url: https://arxiv.org/abs/2605.15195
draft: false
---


> [!tldr] Abstract
> Recent feed-forward reconstruction models, such as VGGT, have proven competitive with traditional optimization-based reconstructors while also providing geometry-aware features useful for other tasks. Here, we show that the quality of these models scales predictably with model and data size. We do so by introducing VGGT-$Ω$, which substantially improves reconstruction accuracy, efficiency, and capabilities for both static and dynamic scenes. To enable training this model at an unprecedented scale, we introduce architectural changes that improve training efficiency, a high-quality data annotation pipeline that supports dynamic scenes, and a self-supervised learning protocol. We simplify VGGT's architecture by using a single dense prediction head with multi-task supervision and removing the expensive high-resolution convolutional layers. We also use registers to aggregate scene information into a compact representation and introduce register attention, which restricts inter-frame information exchange to these registers, in part replacing global attention. In this way, during training, VGGT-$Ω$ uses only about 30% of the GPU memory of its predecessor, allowing us to train with 15x more supervised data than prior work and to leverage vast amounts of unlabeled video data. VGGT-$Ω$ achieves strong results for reconstruction of static and dynamic scenes across multiple benchmarks, for example, improving over the previous best camera estimation accuracy on Sintel by 77%. We also show that the learned registers can improve vision-language-action models and support alignment with language, suggesting that reconstruction can be a powerful and scalable proxy task for spatial understanding. Project Page: http://vggt-omega.github.io/



## Notes

[Zotero Link](zotero://select/library/items/Q7DBPW8Q)
