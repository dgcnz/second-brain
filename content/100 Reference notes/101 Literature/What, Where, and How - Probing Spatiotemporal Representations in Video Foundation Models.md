---
authors:
  - "[[Sharon S. Musa]]"
  - "[[Fereshteh Forghani]]"
  - "[[Harrish Thasarathan]]"
  - "[[Sonia Joseph]]"
  - "[[Matthew Kowal]]"
  - "[[Konstantinos G. Derpanis]]"
year: 2026
date: 2026-09-01
tags:
  - paper
url: https://arxiv.org/abs/2609.01551
draft: false
---


> [!tldr] Abstract
> Self-supervised video foundation models learn rich spatiotemporal representations, yet it remains unclear what visual concepts these representations encode, where they emerge across transformer layers, and how they are geometrically organized. In this work, we tackle these three questions through a systematic layer-wise analysis of V-JEPA 2 and VideoMAE-v2. We leverage lightweight probes trained to discover three temporally grounded properties: (i) camera motion understanding, (ii) intuitive physics, and (iii) anomaly detection. Both models encode camera motion, with best results ($>90$ ROC AUC) emerging at 60-70% of network depth, and achieve moderate anomaly detection performance ($>60$ ROC AUC), but remain near chance on intuitive-physics tasks, suggesting a limited encoding of deeper physical reasoning. Beyond classification, we find that temporal features from individual videos form smooth low-dimensional trajectories in representation space, suggesting that camera motion is not only linearly decodable but also geometrically organized. Based on these results, we apply geometry-aware spline-based steering in the model's latent representations to interpolate camera motion, yielding steered videos with smoother trajectories and more coherent temporal progression than linear interpolation.



## Notes

[Zotero Link](zotero://select/library/items/N6TSJQQ2)
