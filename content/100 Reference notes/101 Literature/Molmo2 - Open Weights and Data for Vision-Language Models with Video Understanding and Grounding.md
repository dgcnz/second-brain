---
authors:
  - "[[Christopher Clark]]"
  - "[[Jieyu Zhang]]"
  - "[[Zixian Ma]]"
  - "[[Jae Sung Park]]"
  - "[[Mohammadreza Salehi]]"
  - "[[Rohun Tripathi]]"
  - "[[Sangho Lee]]"
  - "[[Zhongzheng Ren]]"
  - "[[Chris Dongjoo Kim]]"
  - "[[Yinuo Yang]]"
  - "[[Vincent Shao]]"
  - "[[Yue Yang]]"
  - "[[Weikai Huang]]"
  - "[[Ziqi Gao]]"
  - "[[Taira Anderson]]"
  - "[[Jianrui Zhang]]"
  - "[[Jitesh Jain]]"
  - "[[George Stoica]]"
  - "[[Winson Han]]"
  - "[[Ali Farhadi]]"
  - "[[Ranjay Krishna]]"
year: 2026
date: 2026-01-15
tags:
  - paper
url: https://arxiv.org/abs/2601.10611
draft: false
---


> [!tldr] Abstract
> Today's strongest video-language models (VLMs) remain proprietary. The strongest open-weight models either rely on synthetic data from proprietary VLMs, effectively distilling from them, or do not disclose their training data or recipe. As a result, the open-source community lacks the foundations needed to improve on the state-of-the-art video (and image) language models. Crucially, many downstream applications require more than just high-level video understanding; they require grounding -- either by pointing or by tracking in pixels. Even proprietary models lack this capability. We present Molmo2, a new family of VLMs that are state-of-the-art among open-source models and demonstrate exceptional new capabilities in point-driven grounding in single image, multi-image, and video tasks. Our key contribution is a collection of 7 new video datasets and 2 multi-image datasets, including a dataset of highly detailed video captions for pre-training, a free-form video Q&A dataset for fine-tuning, a new object tracking dataset with complex queries, and an innovative new video pointing dataset, all collected without the use of closed VLMs. We also present a training recipe for this data utilizing an efficient packing and message-tree encoding scheme, and show bi-directional attention on vision tokens and a novel token-weight strategy improves performance. Our best-in-class 8B model outperforms others in the class of open weight and data models on short videos, counting, and captioning, and is competitive on long-videos. On video-grounding Molmo2 significantly outperforms existing open-weight models like Qwen3-VL (35.5 vs 29.6 accuracy on video counting) and surpasses proprietary models like Gemini 3 Pro on some tasks (38.4 vs 20.0 F1 on video pointing and 56.2 vs 41.1 J&F on video tracking).



## Notes

[Zotero Link](zotero://select/library/items/SX6MYHCH)
