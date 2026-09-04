---
authors:
  - "[[Ali J Alrasheed]]"
  - "[[Aryan Yazdan Parast]]"
  - "[[Basim Azam]]"
  - "[[James Bailey]]"
  - "[[Naveed Akhtar]]"
year: 2026
date: 2026-05-15
tags:
  - paper
url: https://arxiv.org/abs/2605.15618
draft: false
---


> [!tldr] Abstract
> Self-supervised video models are increasingly framed as world models, yet their evaluation remains largely confined to a single top-1 accuracy score on clean benchmarks. This leaves a major gap in comprehending their potential as world models. We present the first systematic study addressing this gap, analyzing four matched-capacity frontier video foundation models, V-JEPA 2.1, V-JEPA 2, VideoPrism, and VideoMAEv2, across five robustness axes relevant to their deployment as video world models: feature discriminability, corruption robustness, fine-grained discrimination, occlusion robustness, and sensitivity to temporal direction. Our evaluations establish that across all five axes, latent-prediction models form a distinct and consistent profile. They degrade more gracefully under pixel corruption, preserve usable class structure rather than mere geometric stability under occlusion, capture fine-grained physical contact cues without reconstructing pixels, and uniquely encode the arrow of time. These advantages can even survive task adaptation: a frozen V-JEPA 2 backbone with a lightweight attentive probe outperforms a fully fine-tuned VideoMAE and a supervised TimeSformer on corruption and occlusion robustness. Our extensive results offer concrete new evidence in favor of latent prediction for robust world modeling.



## Notes

[Zotero Link](zotero://select/library/items/U7JIP23U)
