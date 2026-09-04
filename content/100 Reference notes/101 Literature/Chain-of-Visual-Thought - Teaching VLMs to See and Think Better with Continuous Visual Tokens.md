---
authors:
  - "[[Yiming Qin]]"
  - "[[Bomin Wei]]"
  - "[[Jiaxin Ge]]"
  - "[[Konstantinos Kallidromitis]]"
  - "[[Stephanie Fu]]"
  - "[[Trevor Darrell]]"
  - "[[XuDong Wang]]"
year: 2025
date: 2025-11-24
tags:
  - paper
url: https://arxiv.org/abs/2511.19418
draft: false
---


> [!tldr] Abstract
> Vision-Language Models (VLMs) excel at reasoning in linguistic space but struggle with perceptual understanding that requires dense visual perception, e.g., spatial reasoning and geometric awareness. This limitation stems from the fact that current VLMs have limited mechanisms to capture dense visual information across spatial dimensions. We introduce Chain-of-Visual-Thought (COVT), a framework that enables VLMs to reason not only in words but also through continuous visual tokens-compact latent representations that encode rich perceptual cues. Within a small budget of roughly 20 tokens, COVT distills knowledge from lightweight vision experts, capturing complementary properties such as 2D appearance, 3D geometry, spatial layout, and edge structure. During training, the VLM with COVT autoregressively predicts these visual tokens to reconstruct dense supervision signals (e.g., depth, segmentation, edges, and DINO features). At inference, the model reasons directly in the continuous visual token space, preserving efficiency while optionally decoding dense predictions for interpretability. Evaluated across more than ten diverse perception benchmarks, including CV-Bench, MMVP, RealWorldQA, MMStar, WorldMedQA, and HRBench, integrating COVT into strong VLMs such as Qwen2.5-VL and LLaVA consistently improves performance by 3% to 16% and demonstrates that compact continuous visual thinking enables more precise, grounded, and interpretable multimodal intelligence.



## Notes

[Zotero Link](zotero://select/library/items/7FTUJAKS)
