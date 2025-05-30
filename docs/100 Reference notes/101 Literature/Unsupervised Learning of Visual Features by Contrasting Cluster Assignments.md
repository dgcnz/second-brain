---
authors:
  - "[[Mathilde Caron|Mathilde Caron]]"
  - "[[Ishan Misra|Ishan Misra]]"
  - "[[Julien Mairal|Julien Mairal]]"
  - "[[Priya Goyal|Priya Goyal]]"
  - "[[Piotr Bojanowski|Piotr Bojanowski]]"
  - "[[Armand Joulin|Armand Joulin]]"
year: 2021
tags:
  - paper
  - vit
url: http://arxiv.org/abs/2006.09882
share: true
---


> [!tldr] Abstract
> Unsupervised image representations have signiﬁcantly reduced the gap with supervised pretraining, notably with the recent achievements of contrastive learning methods. These contrastive methods typically work online and rely on a large number of explicit pairwise feature comparisons, which is computationally challenging. In this paper, we propose an online algorithm, SwAV, that takes advantage of contrastive methods without requiring to compute pairwise comparisons. Speciﬁcally, our method simultaneously clusters the data while enforcing consistency between cluster assignments produced for different augmentations (or “views”) of the same image, instead of comparing features directly as in contrastive learning. Simply put, we use a “swapped” prediction mechanism where we predict the code of a view from the representation of another view. Our method can be trained with large and small batches and can scale to unlimited amounts of data. Compared to previous contrastive methods, our method is more memory efﬁcient since it does not require a large memory bank or a special momentum network. In addition, we also propose a new data augmentation strategy, multi-crop, that uses a mix of views with different resolutions in place of two full-resolution views, without increasing the memory or compute requirements. We validate our ﬁndings by achieving 75.3% top-1 accuracy on ImageNet with ResNet-50, as well as surpassing supervised pretraining on all the considered transfer tasks.



## Notes

[Zotero Link](zotero://select/library/items/PWS64P8N)


