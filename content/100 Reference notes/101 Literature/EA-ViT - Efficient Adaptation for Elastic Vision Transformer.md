---
authors:
- '[[Chen Zhu]]'
- '[[Wangbo Zhao]]'
- '[[Huiwen Zhang]]'
- '[[Samir Khaki]]'
- '[[Yuhao Zhou]]'
- '[[Weidong Tang]]'
- '[[Shuo Wang]]'
- '[[Zhihang Yuan]]'
- '[[Yuzhang Shang]]'
- '[[Xiaojiang Peng]]'
- '[[Kai Wang]]'
- '[[Dawei Yang]]'
year: 2025
tags:
- paper
- efficient_vision
url: http://arxiv.org/abs/2507.19360
date: '2025-07-25'
---

> [!tldr] Abstract
> Vision Transformers (ViTs) have emerged as a foundational model in computer vision, excelling in generalization and adaptation to downstream tasks. However, deploying ViTs to support diverse resource constraints typically requires retraining multiple, size-specific ViTs, which is both time-consuming and energy-intensive. To address this issue, we propose an efficient ViT adaptation framework that enables a single adaptation process to generate multiple models of varying sizes for deployment on platforms with various resource constraints. Our approach comprises two stages. In the first stage, we enhance a pre-trained ViT with a nested elastic architecture that enables structural flexibility across MLP expansion ratio, number of attention heads, embedding dimension, and network depth. To preserve pre-trained knowledge and ensure stable adaptation, we adopt a curriculum-based training strategy that progressively increases elasticity. In the second stage, we design a lightweight router to select submodels according to computational budgets and downstream task demands. Initialized with Pareto-optimal configurations derived via a customized NSGA-II algorithm, the router is then jointly optimized with the backbone. Extensive experiments on multiple benchmarks demonstrate the effectiveness and versatility of EA-ViT. The code is available at https://github.com/zcxcf/EA-ViT.



## Notes

[Zotero Link](zotero://select/library/items/3VPRHGK5)


