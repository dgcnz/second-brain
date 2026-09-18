---
authors:
  - "[[Reda Bensaid]]"
  - "[[Yassir Bendou]]"
  - "[[Vincent Gripon]]"
  - "[[François Leduc-Primeau]]"
year: 2026
date: 2026-05-28
tags:
  - paper
url: https://arxiv.org/abs/2605.29726
draft: false
---


> [!tldr] Abstract
> In the context of resource-constrained environments such as embedded systems, adapting reduced-size foundation models to downstream tasks has become increasingly popular. This has recently motivated the emerging setting of task-specific distillation, where a larger and a smaller version of the same foundation model are both adapted to the same downstream task, with the goal of transferring knowledge from the former to the latter. Recent work has demonstrated the benefits of using a larger version of the same foundation model to assist the adaptation of a smaller one. Typically, the larger model (teacher) is first adapted via fine-tuning or linear probing before its knowledge is distilled into the smaller model (student). While fine-tuning the teacher often increases its performance, recent work showed that probing it leads to better knowledge distillation to the student. Our findings show that this is mainly due to a mis-alignment in feature representation between the teacher and the student which occurs during the teacher's fine-tuning. Inspired by existing efforts to preserve previously learned knowledge, we first propose leveraging low-rank adaptation, resulting in better feature alignment and therefore better knowledge transfer. Drawing from this insight, we further enhance the feature alignment through a parameter-sharing strategy of the adapters between the two encoders during joint training. Our proposed method, SLAD, shows better feature alignment between the teacher and student, which results in increased performance for not only the student but also the teacher model, while being 2x faster to train than fine-tuning. Through extensive experiments on multiple classification and segmentation datasets, we demonstrate the improved accuracy and transfer efficiency of our method, achieving state-of-the-art performance in the task-specific distillation framework.



## Notes

[Zotero Link](zotero://select/library/items/E5P8CM9Z)
