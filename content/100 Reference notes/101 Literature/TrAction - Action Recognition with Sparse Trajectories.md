---
authors:
  - "[[Jan F. Meier]]"
  - "[[Felix B. Mueller]]"
  - "[[Alexander Ecker]]"
  - "[[Timo Lüddecke]]"
year: 2026
date: 2026-06-02
tags:
  - paper
url: https://arxiv.org/abs/2606.03490
draft: false
---


> [!tldr] Abstract
> Modern action recognition models operate on memory- and compute-intensive dense RGB video volumes and frequently exploit appearance and background shortcuts, for example, predicting actions from objects or scenes instead of characteristic motion. We investigate an efficient alternative input modality that is largely free of such biases by construction: sparse point trajectories. To this end, we develop a simple transformer architecture for 2.5D trajectory-based recognition together with a masked-trajectory pretraining, which we show to substantially improve downstream action recognition accuracy. Despite using only a fraction of the dense RGB input, our method reaches 45% top-1 on Something-Something V2 and 54% on EPIC-Kitchens-100, and surpasses V-JEPA on time-reversal sensitivity. More importantly, we find trajectory features to be complementary to state-of-the-art appearance-based features. Fusing our pretrained model with DINOv2 and V-JEPA 2 improves top-1 accuracy on Something-Something V2 by 8.7 and 1.6 points, respectively. Code: https://github.com/ecker-lab/TrAction



## Notes

[Zotero Link](zotero://select/library/items/LBDKZYN7)
