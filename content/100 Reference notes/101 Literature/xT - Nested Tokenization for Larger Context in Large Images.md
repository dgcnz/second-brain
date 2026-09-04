---
authors:
  - "[[Ritwik Gupta]]"
  - "[[Shufan Li]]"
  - "[[Tyler Zhu]]"
  - "[[Jitendra Malik]]"
  - "[[Trevor Darrell]]"
  - "[[Karttikeya Mangalam]]"
year: 2024
date: 2024-07-21
tags:
  - paper
  - tokenization
  - vit
  - long-context
url: http://arxiv.org/abs/2403.01915
draft: false
---


> [!tldr] Abstract
> Modern computer vision pipelines handle large images in one of two sub-optimal ways: down-sampling or cropping. These two methods incur significant losses in the amount of information and context present in an image. There are many downstream applications in which global context matters as much as high frequency details, such as in real-world satellite imagery; in such cases researchers have to make the uncomfortable choice of which information to discard. We introduce xT, a simple framework for vision transformers which effectively aggregates global context with local details and can model large images end-to-end on contemporary GPUs. We select a set of benchmark datasets across classic vision tasks which accurately reflect a vision model’s ability to understand truly large images and incorporate fine details over large scales and assess our method’s improvement on them. xT is a streaming, two-stage architecture that adapts existing vision backbones and long sequence language models to effectively model large images without quadratic memory growth. We are able to increase accuracy by up to 8.6% on challenging classification tasks and F1 score by 11.6 on context-dependent segmentation on images as large as 29,000 x 29,000 pixels.



## Notes

[Zotero Link](zotero://select/library/items/LCJNUF8G)
