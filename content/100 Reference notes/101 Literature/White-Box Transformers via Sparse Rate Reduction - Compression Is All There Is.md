---
authors:
  - "[[Yaodong Yu]]"
  - "[[Sam Buchanan]]"
  - "[[Druv Pai]]"
  - "[[Tianzhe Chu]]"
  - "[[Ziyang Wu]]"
  - "[[Shengbang Tong]]"
  - "[[Hao Bai]]"
  - "[[Yuexiang Zhai]]"
  - "[[Benjamin D. Haeffele]]"
  - "[[Yi Ma]]"
year: 2024
tags:
  - paper
  - compression
  - dl_theory
url: http://arxiv.org/abs/2311.13110
share: true
---


> [!tldr] Abstract
> In this paper, we contend that a natural objective of representation learning is to compress and transform the distribution of the data, say sets of tokens, towards a low-dimensional Gaussian mixture supported on incoherent subspaces. The goodness of such a representation can be evaluated by a principled measure, called sparse rate reduction, that simultaneously maximizes the intrinsic information gain and extrinsic sparsity of the learned representation. From this perspective, popular deep network architectures, including transformers, can be viewed as realizing iterative schemes to optimize this measure. Particularly, we derive a transformer block from alternating optimization on parts of this objective: the multi-head self-attention operator compresses the representation by implementing an approximate gradient descent step on the coding rate of the features, and the subsequent multi-layer perceptron sparsifies the features. This leads to a family of white-box transformer-like deep network architectures, named CRATE, which are mathematically fully interpretable. We show, by way of a novel connection between denoising and compression, that the inverse to the aforementioned compressive encoding can be realized by the same class of CRATE architectures. Thus, the so-derived white-box architectures are universal to both encoders and decoders. Experiments show that these networks, despite their simplicity, indeed learn to compress and sparsify representations of large-scale real-world image and text datasets, and achieve performance very close to highly engineered transformer-based models: ViT, MAE, DINO, BERT, and GPT2. We believe the proposed computational framework demonstrates great potential in bridging the gap between theory and practice of deep learning, from a unified perspective of data compression. Code is available at: https://ma-lab-berkeley.github.io/CRATE .



## Notes

[Zotero Link](zotero://select/library/items/3UBVUZUV)


