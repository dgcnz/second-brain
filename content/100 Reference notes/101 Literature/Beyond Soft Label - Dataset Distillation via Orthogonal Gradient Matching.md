---
authors:
  - "[[Deyu Bo]]"
  - "[[Xinchao Wang]]"
year: 
date: 
tags:
  - paper
url: https://openaccess.thecvf.com/content/CVPR2026/papers/Bo_Beyond_Soft_Label_Dataset_Distillation_via_Orthogonal_Gradient_Matching_CVPR_2026_paper.pdf
draft: false
---


> [!tldr] Abstract
> Condensing the large-scale, high-resolution ImageNet-1K dataset remains a challenge for dataset distillation (DD). Existing methods typically match batch normalization (BN) statistics, i.e., mean and variance, between real and synthetic datasets. Although effective with soft labels, their performance degrades substantially under hard labels. In this paper, we theoretically identify that BN matching mainly aligns the scales of real and synthetic gradients but overlooks their directions. However, experimental evidence demonstrates that gradient direction, rather than scale, is pivotal to model training, clarifying the limitations of prior methods. Building on this insight, we introduce Orthogonal Gradient Matching (OGM), which explicitly aligns the intrinsic direction of gradients, i.e., singular vectors. Specifically, OGM first orthogonalizes real and synthetic gradients by setting all singular values to one, eliminating their scales, and then minimizes the distance between these orthogonal gradients so that their singular vectors coincide. To further reduce computation, OGM employs a least-squares loss whose gradients can be obtained in the forward pass, avoiding back-propagation. Extensive experiments on ImageNet-1K validate the effectiveness of OGM. With only ten images per class (IPC = 10), OGM achieves 47.0% accuracy with soft labels and 16.7% with hard labels, outperforming training-based DD methods and RDED.



## Notes

[Zotero Link](zotero://select/library/items/3EN5T4XP)
