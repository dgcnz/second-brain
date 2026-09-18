---
authors:
  - "[[Sofian Chaybouti]]"
  - "[[Sanath Narayan]]"
  - "[[Yasser Dahou]]"
  - "[[Phúc H. Lê Khac]]"
  - "[[Ankit Singh]]"
  - "[[Ngoc Dung Huynh]]"
  - "[[Wamiq Reyaz Para]]"
  - "[[Hilde Kuehne]]"
  - "[[Hakim Hacid]]"
year: 2025
date: 2025-12-23
tags:
  - paper
url: https://arxiv.org/abs/2512.20157
draft: false
---


> [!tldr] Abstract
> Vision foundation models trained via multi-teacher distillation offer a promising path toward unified visual representations, yet the learning dynamics and data efficiency of such approaches remain underexplored. In this paper, we systematically study multi-teacher distillation for vision foundation models and identify key factors that enable training at lower computational cost. We introduce SigLino, an efficient family of agglomerative vision foundation models that distill knowledge from SigLIP2 and DINOv3 simultaneously into Dense and Mixture-of-Experts students. We show that (1) our Asymmetric Relation-Knowledge Distillation loss preserves the geometric properties of each teacher while enabling effective knowledge transfer, (2) token-balanced batching that packs varying-resolution images into sequences with uniform token budgets stabilizes representation learning across resolutions without sacrificing performance, (3) hierarchical clustering and sampling of training data, typically reserved for self-supervised learning, substantially improves sample efficiency over random sampling for multi-teacher distillation, and (4) the resulting representations transfer effectively to early-fusion Grounding-VLMs, outperforming models trained from scratch. By combining these findings, we curate OpenLVD200M, a 200M-image corpus that demonstrates superior efficiency for multi-teacher distillation. Instantiated in a Mixture-of-Experts, our SigLino-MoE initializes an early-fusion Grounding-VLM that replaces the conventional ViT->LLM stack, demonstrating improved performance compared to a model trained from scratch. We release OpenLVD200M and five distilled checkpoints comprising MoE and dense variants.



## Notes

[Zotero Link](zotero://select/library/items/RBIVJEJZ)
