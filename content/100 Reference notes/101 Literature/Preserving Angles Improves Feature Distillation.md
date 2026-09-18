---
authors:
  - "[[Evelyn J. Mannix]]"
  - "[[Liam Hodgkinson]]"
  - "[[Howard Bondell]]"
year: 2024
date: 2024-11-22
tags:
  - paper
url: https://arxiv.org/abs/2411.15239
draft: false
---


> [!tldr] Abstract
> Knowledge distillation methods compress models by training a student network using the classification outputs of a high quality teacher model, but can fail to effectively transfer the properties of computer vision foundation models from the teacher to the student. While it has been recently shown that feature distillation$\unicode{x2013}$where a teacher model's output features are replicated instead$\unicode{x2013}$can reproduce performance for foundation models across numerous downstream tasks, they fall short in matching critical properties such as robustness and out-of-distribution (OOD) detection performance. This paper overcomes this shortcoming by introducing Cosine-similarity Preserving Compression (CosPress), a feature distillation technique that learns a mapping to compress the latent space of the teacher model into the smaller latent space of the student, by preserving the cosine similarities between image embeddings. This enables direct optimisation of the student network and produces a more faithful reproduction of the teacher's properties. It is shown that distillation with CosPress on a variety of datasets, including ImageNet, produces more accurate models with greater performance on generalisability, robustness and OOD detection benchmarks, and that this technique provides a competitive pathway for training highly performant lightweight models on small datasets. Code is available at github.com/emannix/cospress.



## Notes

[Zotero Link](zotero://select/library/items/E6LUAX3W)
