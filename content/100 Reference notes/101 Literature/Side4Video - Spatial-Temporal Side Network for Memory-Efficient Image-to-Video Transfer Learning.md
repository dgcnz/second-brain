---
authors:
  - "[[Huanjin Yao]]"
  - "[[Wenhao Wu]]"
  - "[[Zhiheng Li]]"
year: 2023
date: 2023-11-27
tags:
  - paper
  - adaptation
  - image
  - video
  - computer_vision
url: http://arxiv.org/abs/2311.15769
draft: false
---


> [!tldr] Abstract
> Large pre-trained vision models achieve impressive success in computer vision. However, fully fine-tuning large models for downstream tasks, particularly in video understanding, can be prohibitively computationally expensive. Recent studies turn their focus towards efficient image-tovideo transfer learning. Nevertheless, existing efficient finetuning methods lack attention to training memory usage and exploration of transferring a larger model to the video domain. In this paper, we present a novel Spatial-Temporal Side Network for memory-efficient fine-tuning large image models to video understanding, named Side4Video. Specifically, we introduce a lightweight spatial-temporal side network attached to the frozen vision model, which avoids the backpropagation through the heavy pre-trained model and utilizes multi-level spatial features from the original image model. Extremely memory-efficient architecture enables our method to reduce 75% memory usage than previous adapter-based methods. In this way, we can transfer a huge ViT-E (4.4B) for video understanding tasks which is 14× larger than ViT-L (304M). Our approach achieves remarkable performance on various video datasets across unimodal and cross-modal tasks (i.e., action recognition and text-video retrieval), especially in Something-Something V1&V2 (67.3% & 74.6%), Kinetics-400 (88.6%), MSRVTT (52.3%), MSVD (56.1%) and VATEX (68.8%). We release our code at https://github.com/HJYao00/ Side4Video.



## Notes

[Zotero Link](zotero://select/library/items/YWFDJR4A)
