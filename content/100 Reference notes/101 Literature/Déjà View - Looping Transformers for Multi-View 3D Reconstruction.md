---
authors:
  - "[[Alessandro Burzio]]"
  - "[[Tobias Fischer]]"
  - "[[Sven Elflein]]"
  - "[[Qunjie Zhou]]"
  - "[[Riccardo de Lutio]]"
  - "[[Jiawei Ren]]"
  - "[[Jiahui Huang]]"
  - "[[Shengyu Huang]]"
  - "[[Marc Pollefeys]]"
  - "[[Laura Leal-Taixé]]"
  - "[[Zan Gojcic]]"
  - "[[Haithem Turki]]"
year: 2026
date: 2026-05-28
tags:
  - paper
url: https://arxiv.org/abs/2605.30215
draft: false
---


> [!tldr] Abstract
> Recent feed-forward 3D reconstruction transformers have scaled to over a billion parameters, following the broader trend of increasing model capacity in computer vision. Yet emerging evidence suggests that contiguous transformer layers often behave like repeated applications of similar operations, and multi-view reconstruction transformers refine their predictions progressively across decoder depth. We posit that model depth partially buys iteration, paid for inefficiently in unique parameters, and instead make that iteration explicit in architecture. Our model, DéjàView, applies a single looped transformer block recurrently to per-view features for K refinement steps. Trained once, it exposes K as an inference-time compute knob, matching or outperforming substantially larger feed-forward baselines across five reconstruction benchmarks spanning indoor, outdoor, object-centric, and driving scenes, while using a fraction of their parameters and comparable or lower compute. Importantly, the same looped block formulation outperforms an otherwise identical variant with independent per-step parameters under matched training data and compute, suggesting that explicit iteration is not merely a compute-efficient substitute for capacity but a stronger inductive bias for multi-view 3D reconstruction.



## Notes

[Zotero Link](zotero://select/library/items/VPNLJBZU)
