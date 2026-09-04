---
authors:
  - "[[Mattia Soldan]]"
  - "[[Fabian Caba Heilbron]]"
  - "[[Bernard Ghanem]]"
  - "[[Josef Sivic]]"
  - "[[Bryan Russell]]"
year: 2025
date: 2025-09-16
tags:
  - paper
  - vit
  - video
  - efficient_vision
url: http://arxiv.org/abs/2509.13255
draft: false
---


> [!tldr] Abstract
> Several video understanding tasks, such as natural language temporal video grounding, temporal activity localization, and audio description generation, require “temporally dense” reasoning over frames sampled at high temporal resolution. However, computing frame-level features for these tasks is computationally expensive given the temporal resolution requirements. In this paper, we make three contributions to reduce the cost of computing features for temporally dense tasks. First, we introduce a vision transformer (ViT) architecture, dubbed ResidualViT, that leverages the large temporal redundancy in videos to efficiently compute temporally dense frame-level features. Our architecture incorporates (i) learnable residual connections that ensure temporal consistency across consecutive frames and (ii) a token reduction module that enhances processing speed by selectively discarding temporally redundant information while reusing weights of a pretrained foundation model. Second, we propose a lightweight distillation strategy to approximate the frame-level features of the original foundation model. Finally, we evaluate our approach across four tasks and five datasets, in both zero-shot and fully supervised settings, demonstrating significant reductions in computational cost (up to 60%) and improvements in inference speed (up to 2.5× faster), all while closely approximating the accuracy of the original foundation model.



## Notes

[Zotero Link](zotero://select/library/items/HKE8MZIW)
