---
authors:
  - "[[Timo Lüddecke]]"
  - "[[Alexander S. Ecker]]"
year: 2025
date: 2025-09-20
tags:
  - paper
  - evals
  - architecture
  - computer_vision
url: https://openreview.net/forum?id=neMAx4uBlh
draft: true
---


> [!tldr] Abstract
> The paradigm of pretraining a backbone on a large set of (often unlabeled) images has gained popularity. The quality of the resulting features is commonly measured by freezing the backbone and training different task heads on top of it. However, current evaluations cover only classifications of whole images or require complex dense task heads which introduce a large number of parameters and add their own inductive biases. In this work, we propose dense attentive probing, a parameter-efficient readout method for dense prediction on arbitrary backbones – independent of the size and resolution of their feature volume. To this end, we extend cross-attention with distance-based masks of learnable sizes. We employ this method to evaluate 18 common backbones on dense predictions tasks in three dimensions: instance awareness, local semantics and spatial understanding. We find that DINOv2 outperforms all other backbones tested – including those supervised with masks and language – across all three task categories. Furthermore, our analysis suggests that self-supervised pretraining tends to yield features that separate object instances better than vision-language models. Code is available at https://eckerlab.org/code/deap.



## Notes

[Zotero Link](zotero://select/library/items/ZTF9MC8I)
