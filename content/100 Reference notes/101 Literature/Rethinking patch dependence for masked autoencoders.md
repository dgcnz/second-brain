---
authors:
  - "[[Letian Fu]]"
  - "[[Long Lian]]"
  - "[[Renhao Wang]]"
  - "[[Baifeng Shi]]"
  - "[[Xudong Wang]]"
  - "[[Adam Yala]]"
  - "[[Trevor Darrell]]"
  - "[[Alexei A. Efros]]"
  - "[[Ken Goldberg]]"
year: 2024
date: 2024-01-25
tags:
  - paper
  - computer_vision
  - ssl
url: https://arxiv.org/abs/2401.14391
share: true
---


> [!tldr] Abstract
> In this work, we examine the impact of inter-patch dependencies in the decoder of masked autoencoders (MAE) on representation learning. We decompose the decoding mechanism for masked reconstruction into self-attention between mask tokens and cross-attention between masked and visible tokens. Our findings reveal that MAE reconstructs coherent images from visible patches not through interactions between patches in the decoder but by learning a global representation within the encoder. This discovery leads us to propose a simple visual pretraining framework: cross-attention masked autoencoders (CrossMAE). This framework employs only cross-attention in the decoder to independently read out reconstructions for a small subset of masked patches from encoder outputs. This approach achieves comparable or superior performance to traditional MAE across models ranging from ViT-S to ViT-H and significantly reduces computational requirements. By its design, CrossMAE challenges the necessity of interaction between mask tokens for effective masked pretraining. Code and models are publicly available: https://crossmae.github.io/



## Notes

[Zotero Link](zotero://select/library/items/J46PEP9N)

![[Pasted image 20251111174816.png]]