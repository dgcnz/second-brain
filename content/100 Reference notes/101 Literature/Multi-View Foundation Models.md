---
authors:
  - "[[Leo Segre]]"
  - "[[Or Hirschorn]]"
  - "[[Shai Avidan]]"
year: 2025
date: 2025-12-17
tags:
  - paper
  - foundation_models
url: http://arxiv.org/abs/2512.15708
draft: true
---


> [!tldr] Abstract
> Foundation models are vital tools in various Computer Vision applications. They take as input a single RGB image and output a deep feature representation that is useful for various applications. However, in case we have multiple views of the same 3D scene, they operate on each image independently and do not always produce consistent features for the same 3D point. We propose a way to convert a Foundation Model into a Multi-View Foundation Model. Such a model takes as input a set of images and outputs a feature map for each image such that the features of corresponding points are as consistent as possible. This approach bypasses the need to build a consistent 3D model of the features and allows direct manipulation in the image space. Specifically, we show how to augment Transformers-based foundation models (i.e., DINO, SAM, CLIP) with intermediate 3D-aware attention layers that help match features across different views. As leading examples, we show surface normal estimation and multi-view segmentation tasks. Quantitative experiments show that our method improves feature matching considerably compared to current foundation models.



## Notes

[Zotero Link](zotero://select/library/items/ANU6J7KB)
