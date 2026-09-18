---
authors:
  - "[[Dillan Imans]]"
  - "[[Phuoc-Nguyen Bui]]"
  - "[[Duc-Tai Le]]"
  - "[[Hyunseung Choo]]"
year: 2026
date: 2026-07-29
tags:
  - paper
url: https://arxiv.org/abs/2607.27357
draft: false
---


> [!tldr] Abstract
> Cross-modal knowledge distillation can transfer diagnostic knowledge from a strong but costly teacher modality to a cheaper and more deployable student modality. In medical image analysis, however, the two modalities are often unpaired: they are collected from different patient cohorts and occupy geometrically incompatible feature spaces. This makes instance-level distillation invalid and direct feature matching unreliable. To address these challenges, we propose Shared Semantic Codebook Distillation (SSCD), which compares teacher and student representations through a shared discrete codebook. Each image is represented as a distribution over a common, modality-agnostic vocabulary, and knowledge is transferred by aligning these distributions across modalities, both globally and class-conditionally, without requiring paired samples or directly comparable raw features. The codebook is evolved online by exponential moving average and kept diverse through entropy regularization and dead-code restart. At inference, all teacher-side and codebook modules are discarded, leaving only the student encoder and classifier. On two heterogeneous unpaired settings, OCT-to-fundus retinal disease classification and CT-to-chest-X-ray pneumonia classification, SSCD improves the student from 64.5 to 70.2 macro-F1 and from 73.8 to 76.3 macro-F1, respectively, outperforming all evaluated distillation baselines on both settings. Code and pretrained models are available at https://github.com/DillanImans/SSCD-unpaired-distillation



## Notes

[Zotero Link](zotero://select/library/items/ECH9D9NV)
