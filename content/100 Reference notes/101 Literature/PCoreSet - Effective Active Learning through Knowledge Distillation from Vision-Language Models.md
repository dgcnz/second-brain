---
authors:
  - "[[Seongjae Kang]]"
  - "[[Dong Bok Lee]]"
  - "[[Hyungjoon Jang]]"
  - "[[Dongseop Kim]]"
  - "[[Sung Ju Hwang]]"
year: 2025
date: 2025-06-01
tags:
  - paper
url: https://arxiv.org/abs/2506.00910
draft: false
---


> [!tldr] Abstract
> Knowledge distillation (KD) is a widely used framework for training compact, task-specific models by transferring the knowledge from teacher models. However, its application to active learning (AL), which aims to minimize annotation costs through iterative sample selection, remains underexplored. This gap stems from the fact that KD typically assumes access to sufficient labeled data, whereas AL operates in data-scarce scenarios where task-specific teacher models are often unavailable. In this paper, we first introduce ActiveKD, a framework that integrates AL with KD by leveraging the zero- and few-shot capabilities of large vision-language models (VLMs). A key aspect of ActiveKD is the structured prediction bias of VLMs-i.e., their predictions form clusters in the probability space. We regard this structure as an inductive bias of the teacher model, capturing generalizable output patterns beneficial to student learning. To exploit this bias, we propose Probabilistic CoreSet (PCoreSet), a selection strategy that maximizes coverage in the probability space rather than the feature space. PCoreSet strategically selects probabilistically diverse unlabeled samples, facilitating more efficient transfer of teacher knowledge under limited annotation budgets. Extensive evaluations on 11 datasets show that ActiveKD consistently improves performance across selection methods (e.g., +29.07% on ImageNet, averaged over methods). Under ActiveKD, PCoreSet ranks first in 64/73 settings (approximately 87.7%) across 5 student and 3 teacher networks, always achieving the best performance except for first 2 AL rounds. Our code is available at https://github.com/erjui/PCoreSet.



## Notes

[Zotero Link](zotero://select/library/items/4EWWFBB9)
