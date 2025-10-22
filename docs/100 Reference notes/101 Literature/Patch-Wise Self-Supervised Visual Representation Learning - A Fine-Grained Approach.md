---
authors:
  - "[[Ali Javidani|Ali Javidani]]"
  - "[[Mohammad Amin Sadeghi|Mohammad Amin Sadeghi]]"
  - "[[Babak Nadjar Araabi|Babak Nadjar Araabi]]"
year: 2024
tags:
  - paper
  - vit
  - ssl
  - self-distillation
url: https://www.researchsquare.com/article/rs-4662935/v1
share: true
---


> [!tldr] Abstract
> Self-supervised visual representation learning traditionally focuses on image-level instance discrimination. Our study introduces an innovative, fine-grained dimension by integrating patch-level discrimination into these methodologies. This integration allows for the simultaneous analysis of local and global visual features, thereby enriching the quality of the learned representations. Initially, the original images undergo spatial augmentation. Subsequently, we employ a distinctive photometric patch-level augmentation, where each patch is individually augmented, independent from other patches within the same view. This approach generates a diverse training dataset with distinct color variations in each segment. The augmented images are then processed through a self-distillation learning framework, utilizing the Vision Transformer (ViT) as its backbone. The proposed method minimizes the representation distances across both image and patch levels to capture details from macro to micro perspectives. To this end, we present a simple yet effective patch-matching algorithm to find the corresponding patches across the augmented views. Thanks to the efficient structure of the patch-matching algorithm, our method reduces computational complexity compared to similar approaches. Consequently, we achieve an advanced understanding of the model without adding significant computational requirements. We have extensively pretrained our method on datasets of varied scales, such as Cifar10, ImageNet-100, and ImageNet-1K. It demonstrates superior performance over state-of-the-art self-supervised representation learning methods in image classification and downstream tasks, such as copy detection and image retrieval. The implementation of our method is accessible on GitHub.



## Notes

[Zotero Link](zotero://select/library/items/TJXZEWWG)


![[Pasted image 20250310123050.png|Pasted image 20250310123050.png]]