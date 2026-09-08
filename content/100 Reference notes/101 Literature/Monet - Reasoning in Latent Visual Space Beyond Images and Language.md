---
authors:
  - "[[Qixun Wang]]"
  - "[[Yang Shi]]"
  - "[[Yifei Wang]]"
  - "[[Yuanxing Zhang]]"
  - "[[Pengfei Wan]]"
  - "[[Kun Gai]]"
  - "[[Xianghua Ying]]"
  - "[[Yisen Wang]]"
year: 2025
date: 2025-11-26
tags:
  - paper
url: https://arxiv.org/abs/2511.21395
draft: false
---


> [!tldr] Abstract
> "Thinking with images" has emerged as an effective paradigm for advancing visual reasoning, extending beyond text-only chains of thought by injecting visual evidence into intermediate reasoning steps. However, existing methods fall short of human-like abstract visual thinking, as their flexibility is fundamentally limited by external tools. In this work, we introduce Monet, a training framework that enables multimodal large language models (MLLMs) to reason directly within the latent visual space by generating continuous embeddings that function as intermediate visual thoughts. We identify two core challenges in training MLLMs for latent visual reasoning: high computational cost in latent-vision alignment and insufficient supervision over latent embeddings, and address them with a three-stage distillation-based supervised fine-tuning (SFT) pipeline. We further reveal a limitation of applying GRPO to latent reasoning: it primarily enhances text-based reasoning rather than latent reasoning. To overcome this, we propose VLPO (Visual-latent Policy Optimization), a reinforcement learning method that explicitly incorporates latent embeddings into policy gradient updates. To support SFT, we construct Monet-SFT-125K, a high-quality text-image interleaved CoT dataset containing 125K real-world, chart, OCR, and geometry CoTs. Our model, Monet-7B, shows consistent gains across real-world perception and reasoning benchmarks and exhibits strong out-of-distribution generalization on challenging abstract visual reasoning tasks. We also empirically analyze the role of each training component and discuss our early unsuccessful attempts, providing insights for future developments in visual latent reasoning. Our model, data, and code are available at https://github.com/NOVAglow646/Monet.



## Notes

[Zotero Link](zotero://select/library/items/SZD3FVRT)
