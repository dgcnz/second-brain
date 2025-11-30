---
authors:
- '[[Navin Ranjan]]'
- '[[Andreas Savakis]]'
year: 2024
tags:
- paper
- vit
- computer_vision
- peft
- efficient_dl
url: https://arxiv.org/abs/2401.11243
date: '2024-01-20'
---

> [!tldr] Abstract
> Vision transformers (ViTs) have demonstrated remarkable performance across various visual tasks. However, ViT models suffer from substantial computational and memory requirements, making it challenging to deploy them on resource-constrained platforms. Quantization is a popular approach for reducing model size, but most studies mainly focus on equal bit-width quantization for the entire network, resulting in sub-optimal solutions. While there are few works on mixed precision quantization (MPQ) for ViTs, they typically rely on search space-based methods or employ mixed precision arbitrarily. In this paper, we introduce LRP-QViT, an explainability-based method for assigning mixed-precision bit allocations to different layers based on their importance during classification. Specifically, to measure the contribution score of each layer in predicting the target class, we employ the Layer-wise Relevance Propagation (LRP) method. LRP assigns local relevance at the output layer and propagates it through all layers, distributing the relevance until it reaches the input layers. These relevance scores serve as indicators for computing the layer contribution score. Additionally, we have introduced a clipped channel-wise quantization aimed at eliminating outliers from post-LayerNorm activations to alleviate severe inter-channel variations. To validate and assess our approach, we employ LRP-QViT across ViT, DeiT, and Swin transformer models on various datasets. Our experimental findings demonstrate that both our fixed-bit and mixed-bit post-training quantization methods surpass existing models in the context of 4-bit and 6-bit quantization.

