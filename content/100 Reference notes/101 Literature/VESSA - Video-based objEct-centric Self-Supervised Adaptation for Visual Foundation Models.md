---
authors: 
- "[[Jesimon Barreto]]"
- "[[Carlos Caetano]]"
- "[[André Araujo]]"
- "[[William Robson Schwartz]]"

year:  2025
date: 2025-10-23
tags:
  - paper
url: http://arxiv.org/abs/2510.20994
draft: false
---


> [!tldr] Abstract
> Foundation models have advanced computer vision by enabling strong performance across diverse tasks through large-scale pretraining and supervised finetuning. However, they may underperform in domains with distribution shifts and scarce labels, where supervised fine-tuning may be infeasible. While continued self-supervised learning for model adaptation is common for generative language models, this strategy has not proven effective for vision-centric encoder models. To address this challenge, we introduce a novel formulation of self-supervised fine-tuning for vision foundation models, where the model is adapted to a new domain without requiring annotations, leveraging only short multi-view objectcentric videos. Our method is referred to as VESSA: Video-based objEct-centric Self-Supervised Adaptation for visual foundation models. VESSA’s training technique is based on a self-distillation paradigm, where it is critical to carefully tune prediction heads and deploy parameter-efficient adaptation techniques – otherwise, the model may quickly forget its pretrained knowledge and reach a degraded state. VESSA benefits significantly from multi-view object observations sourced from different frames in an object-centric video, efficiently learning robustness to varied capture conditions, without the need of annotations. Through comprehensive experiments with 3 vision foundation models on 2 datasets, VESSA demonstrates consistent improvements in downstream classification tasks, compared to the base models and previous adaptation methods. Code is publicly available at https://github.com/jesimonbarreto/VESSA.



## Notes

[Zotero Link](zotero://select/library/items/Y2NF5UBK)
