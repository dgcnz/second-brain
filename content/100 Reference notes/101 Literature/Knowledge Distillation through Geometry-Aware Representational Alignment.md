---
authors:
  - "[[Prajjwal Bhattarai]]"
  - "[[Mohammad Amjad]]"
  - "[[Dmytro Zhylko]]"
  - "[[Tuka Alhanai]]"
year: 2025
date: 2025-09-27
tags:
  - paper
url: https://arxiv.org/abs/2509.25253
draft: false
---


> [!tldr] Abstract
> Knowledge distillation is a common paradigm for transferring capabilities from larger models to smaller ones. While traditional distillation methods leverage a probabilistic divergence over the output of the teacher and student models, feature-based distillation methods often minimize variants of Euclidean norms between the hidden layer representations. The main goal is for the student to mimic the structure of the feature space of the teacher. In this work, we theoretically show that existing feature distillation methods, such as projection based mean squared loss or Centered Kernel Alignment (CKA), cannot capture the feature structure, even under zero loss. We then motivate the use of Procrustes distance and the Frobenius norm of Feature Gram Matrix, distances already common in the context of measuring representational alignment, as distillation losses. We show that feature distillation through our method showcases statistically significant improvement in distillation performance across language models families (BERT and OPT) in classification and instruction-following tasks by up to 2 percentage points, showcasing the potential of integrating feature geometry into existing distillation methods.



## Notes

[Zotero Link](zotero://select/library/items/GZYEH2FS)
