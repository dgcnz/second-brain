---
authors:
  - "[[Satoki Ishikawa]]"
  - "[[Sameer Satish Deshmukh]]"
  - "[[Sakina Fatima]]"
  - "[[Takumi Honda]]"
  - "[[Rio Yokota]]"
year: 2026
date: 2026-07
tags:
  - paper
url: https://openreview.net/pdf/c5fcaa09ebd5d605e98c448dbeab1cae393ad4a5.pdf
draft: false
---


> [!tldr] Abstract
> Knowledge distillation (KD) is typically improved through better divergence functions between teacher and student models, while the role of the optimizer has received less attention. In this paper, we argue that optimizer choice can also play an important role in KD, since both the divergence and the optimizer reshape the training dynamics under a finite training budget. On CIFAR-100 distillation, replacing SGD with SOAP often improves accuracy more than replacing KD with ABKD. On GPT-2 distillation with Dolly, preconditioned gradients provide little improvement, whereas switching from KD to GKD or ABKD increases the critical batch size and enables large-batch training, similar to the effect of preconditioned GD in large-batch training. We hope that this paper serves as a first step toward understanding the role of preconditioned GD in distillation.



## Notes

[Zotero Link](zotero://select/library/items/5VWFLZV5)
