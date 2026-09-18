---
authors:
  - "[[Wuming Yang]]"
  - "[[Xiang Zhang]]"
  - "[[Hongmin Zhao]]"
year: 2026
date: 2026-06-23
tags:
  - paper
url: https://arxiv.org/abs/2606.24557
draft: false
---


> [!tldr] Abstract
> Heterogeneous Knowledge Distillation (HKD) aims to transfer knowledge across varying architectures (e.g., from Transformer to CNN) but inherently suffers from severe training instability. We reveal that this instability stems from two highly coupled challenges: massive feature norm discrepancies that cause optimization drag, and severe gradient conflicts between the primary and distillation objectives arising from distinct inductive biases. To achieve stable distillation, we propose SPOFA, a framework built upon a novel Feature and Gradient Dual Stabilization mechanism. Specifically, at the feature level, we introduce a LayerNorm-based decoupling projector that explicitly decouples feature magnitude from direction, creating a bounded and stable space for semantic alignment. At the gradient level, we propose a momentum-driven Exponential Moving Average (MEMA) dynamic scaler. By establishing a robust historical baseline of the optimization trajectory, MEMA actively evaluates instantaneous gradient conflicts and adaptively penalizes harmful distillation signals, guaranteeing stable convergence. Importantly, SPOFA achieves this dual stabilization with an extremely lightweight parameter footprint. Extensive experiments on two mainstream benchmarks demonstrate that SPOFA achieves state-of-the-art accuracy, significantly outperforming computationally expensive methods while introducing only minimal computational overhead compared to standard baselines.



## Notes

[Zotero Link](zotero://select/library/items/JCWEG4NB)
