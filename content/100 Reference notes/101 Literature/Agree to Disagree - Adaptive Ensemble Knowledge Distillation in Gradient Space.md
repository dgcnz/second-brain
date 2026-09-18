---
authors:
  - "[[Shangchen Du]]"
  - "[[Shan You]]"
  - "[[Xiaojie Li]]"
  - "[[Jianlong Wu]]"
  - "[[Fei Wang]]"
  - "[[Chen Qian]]"
  - "[[Changshui Zhang]]"
year: 
date: 
tags:
  - paper
url: https://proceedings.neurips.cc/paper_files/paper/2020/hash/91c77393975889bd08f301c9e13a44b7-Abstract.html
draft: false
---


> [!tldr] Abstract
> Distilling knowledge from an ensemble of teacher models is expected to have a more promising performance than that from a single one. Current methods mainly adopt a vanilla average rule, i.e., to simply take the average of all teacher losses for training the student network. However, this approach treats teachers equally and ignores the diversity among them. When conﬂicts or competitions exist among teachers, which is common, the inner compromise might hurt the distillation performance. In this paper, we examine the diversity of teacher models in the gradient space and regard the ensemble knowledge distillation as a multi-objective optimization problem so that we can determine a better optimization direction for the training of student network. Besides, we also introduce a tolerance parameter to accommodate disagreement among teachers. In this way, our method can be seen as a dynamic weighting method for each teacher in the ensemble. Extensive experiments validate the effectiveness of our method for both logits-based and feature-based cases.



## Notes

[Zotero Link](zotero://select/library/items/JNU2THM8)
