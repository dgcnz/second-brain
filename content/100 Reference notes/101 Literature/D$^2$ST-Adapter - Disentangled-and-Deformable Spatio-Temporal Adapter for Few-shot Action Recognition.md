---
authors:
  - "[[Wenjie Pei]]"
  - "[[Qizhong Tan]]"
  - "[[Guangming Lu]]"
  - "[[Jiandong Tian]]"
  - "[[Jun Yu]]"
year: 2025
date: 2025-06-30
tags:
  - paper
  - adaptation
  - video
  - vit
  - computer_vision
url: http://arxiv.org/abs/2312.01431
draft: false
---


> [!tldr] Abstract
> Adapting pre-trained image models to video modality has proven to be an effective strategy for robust fewshot action recognition. In this work, we explore the potential of adapter tuning in image-to-video model adaptation and propose a novel video adapter tuning framework, called Disentangled-and-Deformable SpatioTemporal Adapter (D2ST-Adapter). It features a lightweight design, low adaptation overhead and powerful spatiotemporal feature adaptation capabilities. D2ST-Adapter is structured with an internal dual-pathway architecture that enables built-in disentangled encoding of spatial and temporal features within the adapter, seamlessly integrating into the single-stream feature learning framework of pretrained image models. In particular, we develop an efficient yet effective implementation of the D2ST-Adapter, incorporating the specially devised anisotropic Deformable SpatioTemporal Attention as its pivotal operation. This mechanism can be individually tailored for two pathways with anisotropic sampling densities along the spatial and temporal domains in 3D spatio-temporal space, enabling disentangled encoding of spatial and temporal features while maintaining a lightweight design. Extensive experiments by instantiating our method on both pre-trained ResNet and ViT demonstrate the superiority of our method over stateof-the-art methods. Our method is particularly well-suited to challenging scenarios where temporal dynamics are critical for action recognition. Code is available at https: //github.com/qizhongtan/D2ST-Adapter.



## Notes

[Zotero Link](zotero://select/library/items/7LYP2TDV)
