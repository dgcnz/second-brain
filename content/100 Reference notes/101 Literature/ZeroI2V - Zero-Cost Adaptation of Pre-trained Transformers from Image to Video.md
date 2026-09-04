---
authors:
  - "[[Xinhao Li]]"
  - "[[Yuhan Zhu]]"
  - "[[Limin Wang]]"
year: 2024
date: 2024-07-11
tags:
  - paper
  - vit
  - adaptation
  - video
url: http://arxiv.org/abs/2310.01324
draft: false
---


> [!tldr] Abstract
> Adapting image models to the video domain has emerged as an efficient paradigm for solving video recognition tasks. Due to the huge number of parameters and effective transferability of image models, performing full fine-tuning is less efficient and even unnecessary. Thus, recent research is shifting its focus toward parameter-efficient image-to-video adaptation. However, these adaptation strategies inevitably introduce extra computational costs to deal with the domain gap and temporal modeling in videos. In this paper, we present a new adaptation paradigm (ZeroI2V) to transfer the image transformers to video recognition tasks (i.e., introduce zero extra cost to the original models during inference). To achieve this goal, we present two core designs. First, to capture the dynamics in videos and reduce the difficulty of image-to-video adaptation, we exploit the flexibility of self-attention and introduce spatial-temporal dual-headed attention (STDHA). This approach efficiently endows the image transformers with temporal modeling capability at zero extra parameters and computation. Second, to handle the domain gap between images and videos, we propose a linear adaption strategy that utilizes lightweight densely placed linear adapters to fully transfer the frozen image models to video recognition. Thanks to the customized linear design, all newly added adapters could be easily merged with the original modules through structural reparameterization after training, enabling zero extra cost during inference. Extensive experiments on representative fully-supervised and few-shot video recognition benchmarks showcase that ZeroI2V can match or even outperform previous state-of-the-art methods while enjoying superior parameter and inference efficiency.



## Notes

[Zotero Link](zotero://select/library/items/QLYC73JH)
