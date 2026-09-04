---
authors:
  - "[[Haian Jin]]"
  - "[[Rundi Wu]]"
  - "[[Tianyuan Zhang]]"
  - "[[Ruiqi Gao]]"
  - "[[Jonathan T. Barron]]"
  - "[[Noah Snavely]]"
  - "[[Aleksander Holynski]]"
year: 2026
date: 2026-03-04
tags:
  - paper
url: https://arxiv.org/abs/2603.04385
draft: false
---


> [!tldr] Abstract
> Feed-forward transformer models have driven rapid progress in 3D vision, but state-of-the-art methods such as VGGT and $π^3$ have a computational cost that scales quadratically with the number of input images, making them inefficient when applied to large image collections. Sequential-reconstruction approaches reduce this cost but sacrifice reconstruction quality. We introduce ZipMap, a stateful feed-forward model that achieves linear-time, bidirectional 3D reconstruction while matching or surpassing the accuracy of quadratic-time methods. ZipMap employs test-time training layers to zip an entire image collection into a compact hidden scene state in a single forward pass, enabling reconstruction of over 700 frames in under 10 seconds on a single H100 GPU, more than $20\times$ faster than state-of-the-art methods such as VGGT. Moreover, we demonstrate the benefits of having a stateful representation in real-time scene-state querying and its extension to sequential streaming reconstruction.



## Notes

[Zotero Link](zotero://select/library/items/YND7JR9Z)
