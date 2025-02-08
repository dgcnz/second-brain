---
authors:
  - "[[Mathilde Caron|Mathilde Caron]]"
  - "[[Neil Houlsby|Neil Houlsby]]"
  - "[[Cordelia Schmid|Cordelia Schmid]]"
year: 2022
tags:
  - paper
  - vit
  - thesis
url: https://arxiv.org/abs/2212.02400
share: true
---
> [!tldr] Abstract
> Pixel-level labels are particularly expensive to acquire. Hence, pretraining is a critical step to improve models on a task like semantic segmentation. However, prominent algorithms for pretraining neural networks use image-level objectives, e.g. image classification, image-text alignment a la CLIP, or self-supervised contrastive learning. These objectives do not model spatial information, which might be sub-optimal when finetuning on downstream tasks with spatial reasoning. In this work, we pretrain network with a location-aware (LOCA) self-supervised method which fosters the emergence of strong dense features. Specifically, we use both a patch-level clustering scheme to mine dense pseudo-labels and a relative location prediction task to encourage learning about object parts and their spatial arrangements. Our experiments show that LOCA pretraining leads to representations that transfer competitively to challenging and diverse semantic segmentation datasets.
