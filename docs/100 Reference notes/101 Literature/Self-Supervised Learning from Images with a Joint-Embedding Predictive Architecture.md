---
authors:
  - "[[Mahmoud Assran|Mahmoud Assran]]"
  - "[[Quentin Duval|Quentin Duval]]"
  - "[[Ishan Misra|Ishan Misra]]"
  - "[[Piotr Bojanowski|Piotr Bojanowski]]"
  - "[[Pascal Vincent|Pascal Vincent]]"
  - "[[Michael Rabbat|Michael Rabbat]]"
  - "[[Yann LeCun|Yann LeCun]]"
  - "[[Nicolas Ballas|Nicolas Ballas]]"
year: 2023
tags:
  - paper
  - ssl
  - computer_vision
  - foundation_models
url: https://arxiv.org/abs/2301.08243
share: true
---
> [!tldr] Abstract
> This paper demonstrates an approach for learning highly semantic image representations without relying on hand-crafted data-augmentations. We introduce the Image-based Joint-Embedding Predictive Architecture (I-JEPA), a non-generative approach for self-supervised learning from images. The idea behind I-JEPA is simple: from a single context block, predict the representations of various target blocks in the same image. A core design choice to guide I-JEPA towards producing semantic representations is the masking strategy; specifically, it is crucial to (a) sample target blocks with sufficiently large scale (semantic), and to (b) use a sufficiently informative (spatially distributed) context block. Empirically, when combined with Vision Transformers, we find I-JEPA to be highly scalable. For instance, we train a ViT-Huge/14 on ImageNet using 16 A100 GPUs in under 72 hours to achieve strong downstream performance across a wide range of tasks, from linear classification to object counting and depth prediction.

