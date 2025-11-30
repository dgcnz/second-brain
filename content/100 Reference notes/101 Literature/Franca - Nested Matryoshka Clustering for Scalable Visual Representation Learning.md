---
authors:
- '[[Shashanka Venkataramanan]]'
- '[[Valentinos Pariza]]'
- '[[Mohammadreza Salehi]]'
- '[[Lukas Knobel]]'
- '[[Spyros Gidaris]]'
- '[[Elias Ramzi]]'
- '[[Andrei Bursuc]]'
- '[[Yuki M. Asano]]'
year: 2025
tags:
- paper
- foundation_models
- computer_vision
- vit
url: http://arxiv.org/abs/2507.14137
date: '2025-07-18'
---

> [!tldr] Abstract
> We present Franca (pronounced Fran-ka): free one; the first fully open-source (data, code, weights) vision foundation model that matches and in many cases surpasses the performance of state-of-the-art proprietary models, e.g., DINOv2, CLIP, SigLIPv2, etc. Our approach is grounded in a transparent training pipeline inspired by Web-SSL and uses publicly available data: ImageNet-21K and a subset of ReLAION-2B. Beyond model release, we tackle critical limitations in SSL clustering methods. While modern models rely on assigning image features to large codebooks via clustering algorithms like Sinkhorn-Knopp, they fail to account for the inherent ambiguity in clustering semantics. To address this, we introduce a parameter-efficient, multi-head clustering projector based on nested Matryoshka representations. This design progressively refines features into increasingly fine-grained clusters without increasing the model size, enabling both performance and memory efficiency. Additionally, we propose a novel positional disentanglement strategy that explicitly removes positional biases from dense representations, thereby improving the encoding of semantic content. This leads to consistent gains on several downstream benchmarks, demonstrating the utility of cleaner feature spaces. Our contributions establish a new standard for transparent, high-performance vision models and open a path toward more reproducible and generalizable foundation models for the broader AI community. The code and model checkpoints are available at https://github.com/valeoai/Franca.



## Notes

[Zotero Link](zotero://select/library/items/B9NMEYXA)


"The standard Matryoshka approach slices the encoder’s output along the feature dimension and applies the _same_ projection head to each sub-embedding. In contrast, we extend this setup by attaching a _dedicated projection head and clustering objective_ to each subspace. This allows each slice to produce distinct prototypes and prototype assignments, encouraging specialization across representational granularities. Additionally, we reduce the number of prototypes per head proportionally to the subspace size—yielding a form of hierarchical clustering that aligns naturally with the granularity of the features across training steps."

Interesting, this would make sense if vectors are disjoint, but since each matryoshka emb is a subset (prefix) of the other, then wouldn't it make more sense to have the same projection head? 