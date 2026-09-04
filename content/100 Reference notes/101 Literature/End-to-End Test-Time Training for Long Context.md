---
authors:
  - "[[Arnuv Tandon]]"
  - "[[Karan Dalal]]"
  - "[[Xinhao Li]]"
  - "[[Daniel Koceja]]"
  - "[[Marcel Rød]]"
  - "[[Sam Buchanan]]"
  - "[[Xiaolong Wang]]"
  - "[[Jure Leskovec]]"
  - "[[Sanmi Koyejo]]"
  - "[[Tatsunori Hashimoto]]"
  - "[[Carlos Guestrin]]"
  - "[[Jed McCaleb]]"
  - "[[Yejin Choi]]"
  - "[[Yu Sun]]"
year: 2025
date: 2025-12-31
tags:
  - paper
  - continual_learning
url: http://arxiv.org/abs/2512.23675
draft: false
---


> [!tldr] Abstract
> We formulate long-context language modeling as a problem in continual learning rather than architecture design. Under this formulation, we only use a standard architecture – a Transformer with sliding-window attention. However, our model continues learning at test time via next-token prediction on the given context, compressing the context it reads into its weights. In addition, we improve the model’s initialization for learning at test time via meta-learning at training time. Overall, our method, a form of Test-Time Training (TTT), is End-to-End (E2E) both at test time (via next-token prediction) and training time (via meta-learning), in contrast to previous forms. We conduct extensive experiments with a focus on scaling properties. In particular, for 3B models trained with 164B tokens, our method (TTT-E2E) scales with context length in the same way as Transformer with full attention, while others, such as Mamba 2 and Gated DeltaNet, do not. However, similar to RNNs, TTT-E2E has constant inference latency regardless of context length, making it 2.7× faster than full attention for 128K context. Our code is publicly available.



## Notes

[Zotero Link](zotero://select/library/items/AT6UPVTB)
