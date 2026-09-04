---
authors:
  - "[[Keshigeyan Chandrasegaran]]"
  - "[[Michael Poli]]"
  - "[[Daniel Y. Fu]]"
  - "[[Dongjun Kim]]"
  - "[[Lea M. Hadzic]]"
  - "[[Manling Li]]"
  - "[[Agrim Gupta]]"
  - "[[Stefano Massaroli]]"
  - "[[Azalia Mirhoseini]]"
  - "[[Juan Carlos Niebles]]"
  - "[[Stefano Ermon]]"
  - "[[Li Fei-Fei]]"
year: 2025
date: 2025-06-05
tags:
  - paper
url: https://arxiv.org/abs/2506.05340
draft: false
---


> [!tldr] Abstract
> Designing model architectures requires decisions such as selecting operators (e.g., attention, convolution) and configurations (e.g., depth, width). However, evaluating the impact of these decisions on model quality requires costly pretraining, limiting architectural investigation. Inspired by how new software is built on existing code, we ask: can new architecture designs be studied using pretrained models? To this end, we present grafting, a simple approach for editing pretrained diffusion transformers (DiTs) to materialize new architectures under small compute budgets. Informed by our analysis of activation behavior and attention locality, we construct a testbed based on the DiT-XL/2 design to study the impact of grafting on model quality. Using this testbed, we develop a family of hybrid designs via grafting: replacing softmax attention with gated convolution, local attention, and linear attention, and replacing MLPs with variable expansion ratio and convolutional variants. Notably, many hybrid designs achieve good quality (FID: 2.38-2.64 vs. 2.27 for DiT-XL/2) using <2% pretraining compute. We then graft a text-to-image model (PixArt-Sigma), achieving a 1.43x speedup with less than a 2% drop in GenEval score. Finally, we present a case study that restructures DiT-XL/2 by converting every pair of sequential transformer blocks into parallel blocks via grafting. This reduces model depth by 2x and yields better quality (FID: 2.77) than other models of comparable depth. Together, we show that new diffusion model designs can be explored by grafting pretrained DiTs, with edits ranging from operator replacement to architecture restructuring. Code and grafted models: https://grafting.stanford.edu



## Notes

[Zotero Link](zotero://select/library/items/F4VUDV8S)
