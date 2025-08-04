---
authors:
  - "[[Sharut Gupta|Sharut Gupta]]"
  - "[[Joshua Robinson|Joshua Robinson]]"
  - "[[Derek Lim|Derek Lim]]"
  - "[[Soledad Villar|Soledad Villar]]"
  - "[[Stefanie Jegelka|Stefanie Jegelka]]"
year: 2023
tags:
  - paper
  - equivariance
  - ssl
  - contrastive_learning
url: http://arxiv.org/abs/2306.13924
share: true
---


> [!tldr] Abstract
> Self-supervised learning converts raw perceptual data such as images to a compact space where simple Euclidean distances measure meaningful variations in data. In this paper, we extend this formulation by adding additional geometric structure to the embedding space by enforcing transformations of input space to correspond to simple (i.e., linear) transformations of embedding space. Specifically, in the contrastive learning setting, we introduce an equivariance objesctive and theoretically prove that its minima forces augmentations on input space to correspond to rotations on the spherical embedding space. We show that merely combining our equivariant loss with a non-collapse term results in non-trivial representations, without requiring invariance to data augmentations. Optimal performance is achieved by also encouraging approximate invariance, where input augmentations correspond to small rotations. Our method, Care: Contrastive Augmentation-induced Rotational Equivariance, leads to improved performance on downstream tasks, and ensures sensitivity in embedding space to important variations in data (e.g., color) that standard contrastive methods do not achieve. Code is available at https://github.com/Sharut/CARE.



## Notes

[Zotero Link](zotero://select/library/items/B9E6I5QJ)




> In this paper, we extend this formulation by adding additional geometric structure to the embedding space by enforcing transformations of input space to correspond to simple (i.e., linear) transformations of embedding space.
> 
> 



> We show that merely combining our equivariant loss with a non-collapse term results in non-trivial representations, without requiring invariance to data augmentations.
> 
> 



> Encouraging sensitivity is especially important in contrastive learning, as it is known to learn shortcuts that forget features that are not needed to solve the pretraining task
> 
> 



> As noted by Wang and Isola [2020], the contrastive training mechanism balances invariance to augmentations with a competing objective: uniformly distributing embeddings over the sphere, which rules out trivial solutions such as constant functions.
> 
> 

