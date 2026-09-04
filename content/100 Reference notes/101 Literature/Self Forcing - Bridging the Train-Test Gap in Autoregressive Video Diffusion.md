---
authors:
  - "[[Xun Huang]]"
  - "[[Zhengqi Li]]"
  - "[[Guande He]]"
  - "[[Mingyuan Zhou]]"
  - "[[Eli Shechtman]]"
year: 2025
date: 2025-06-09
tags:
  - paper
url: https://arxiv.org/abs/2506.08009
draft: false
---


> [!tldr] Abstract
> We introduce Self Forcing, a novel training paradigm for autoregressive video diffusion models. It addresses the longstanding issue of exposure bias, where models trained on ground-truth context must generate sequences conditioned on their own imperfect outputs during inference. Unlike prior methods that denoise future frames based on ground-truth context frames, Self Forcing conditions each frame's generation on previously self-generated outputs by performing autoregressive rollout with key-value (KV) caching during training. This strategy enables supervision through a holistic loss at the video level that directly evaluates the quality of the entire generated sequence, rather than relying solely on traditional frame-wise objectives. To ensure training efficiency, we employ a few-step diffusion model along with a stochastic gradient truncation strategy, effectively balancing computational cost and performance. We further introduce a rolling KV cache mechanism that enables efficient autoregressive video extrapolation. Extensive experiments demonstrate that our approach achieves real-time streaming video generation with sub-second latency on a single GPU, while matching or even surpassing the generation quality of significantly slower and non-causal diffusion models. Project website: http://self-forcing.github.io/



## Notes

[Zotero Link](zotero://select/library/items/GZL9X6AB)
