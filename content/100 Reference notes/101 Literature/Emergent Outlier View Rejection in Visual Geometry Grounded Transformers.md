---
authors:
  - "[[Jisang Han]]"
  - "[[Sunghwan Hong]]"
  - "[[Jaewoo Jung]]"
  - "[[Wooseok Jang]]"
  - "[[Honggyu An]]"
  - "[[Qianqian Wang]]"
  - "[[Seungryong Kim]]"
  - "[[Chen Feng]]"
year: 2025
date: 2025-12-03
tags:
  - paper
url: https://arxiv.org/abs/2512.04012
draft: false
---


> [!tldr] Abstract
> Reliable 3D reconstruction from in-the-wild image collections is often hindered by "noisy" images-irrelevant inputs with little or no view overlap with others. While traditional Structure-from-Motion pipelines handle such cases through geometric verification and outlier rejection, feed-forward 3D reconstruction models lack these explicit mechanisms, leading to degraded performance under in-the-wild conditions. In this paper, we discover that the existing feed-forward reconstruction model, e.g., VGGT, despite lacking explicit outlier-rejection mechanisms or noise-aware training, can inherently distinguish distractor images. Through an in-depth analysis under varying proportions of synthetic distractors, we identify a specific layer that naturally exhibits outlier-suppressing behavior. Further probing reveals that this layer encodes discriminative internal representations that enable an effective noise-filtering capability, which we simply leverage to perform outlier-view rejection in feed-forward 3D reconstruction without any additional fine-tuning or supervision. Extensive experiments on both controlled and in-the-wild datasets demonstrate that this implicit filtering mechanism is consistent and generalizes well across diverse scenarios.



## Notes

[Zotero Link](zotero://select/library/items/8JLG5A4B)
