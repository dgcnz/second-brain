---
authors:
  - "[[Adrien Bardes]]"
  - "[[Jean Ponce]]"
  - "[[Yann LeCun]]"
year: 2022
tags:
  - paper
  - ssl
  - regularization
  - dense_ssl
  - vit
url: http://arxiv.org/abs/2210.01571
share: true
---


> [!tldr] Abstract
> Most recent self-supervised methods for learning image representations focus on either producing a global feature with invariance properties, or producing a set of local features. The former works best for classification tasks while the latter is best for detection and segmentation tasks. This paper explores the fundamental trade-off between learning local and global features. A new method called VICRegL is proposed that learns good global and local features simultaneously, yielding excellent performance on detection and segmentation tasks while maintaining good performance on classification tasks. Concretely, two identical branches of a standard convolutional net architecture are fed two differently distorted versions of the same image. The VICReg criterion is applied to pairs of global feature vectors. Simultaneously, the VICReg criterion is applied to pairs of local feature vectors occurring before the last pooling layer. Two local feature vectors are attracted to each other if their l2-distance is below a threshold or if their relative locations are consistent with a known geometric transformation between the two input images. We demonstrate strong performance on linear classification and segmentation transfer tasks. Code and pretrained models are publicly available at: https://github.com/facebookresearch/VICRegL



## Notes

[Zotero Link](zotero://select/library/items/Y26FVD4D)

![[Pasted image 20250512145212.png]]

> “We argue that more complex reasoning systems should be structured in a hierarchical way, by learning at several scales.” (Bardes et al., 2022, p. 2)

Interesting, a bit of pushback to the less-inductive-bias-better line of work.

> “we propose VICRegL, a method that learn features at a global scale, and that additionally uses spatial information, and matches feature vectors that are either pooled from close-by regions in the original input image, or close in the embedding space, therefore learning features at a local scale.” (Bardes et al., 2022, p. 2)

I understand the close-in-input-space but why would you want to pull features already close in the embedding space?  
  
I think the word “pull” might be carrying a bit more meaning.

> “In practice, the global VICReg criterion [Bardes et al., 2022] is applied to pairs of feature vectors, before and after the final pooling layer of a convolutional network, thus learning local and global features at the same time.” (Bardes et al., 2022, p. 2)

That seems computationally expensive.

Okay, the subsample top y pairs

> “Study of the importance between feature-based and location-based local criteria. VICRegL matches feature vectors according to a location-based criterion Ls of Eq. (2) and a feature-based criterion Ld of Eq. (3). Table 3 study the importance of these criterion. Baseline in the table means that no local criterion is used, and is simply VICReg. The location-based criterion gives the best improvement by +2.9 mIoU over the baseline, compared to only +1.7 mIoU for the feature-based criterion, but it is the combination of the two that significantly improves over the baseline by +4.3 mIoU, which shows that using both the learned distance in the embedding space in combination with the actual distance in the pixel space produces local features with the best quality” (Bardes et al., 2022, p. 9)

I'm still confused as to why the make-close-features-close objective should help, it seems another reason to collapse.

> “We report in Table 11, the running time of VICRegL in comparison with VICReg, for pretraining a ResNet-50 backbone with a batch size of 2048. The introduction of the local criterion comes with an additional computation overhead, mainly do to computing the covariance matrices of every feature vector in the output feature maps. These computations induces a moderate additional computational burden both in terms of time and memory usage.” (Bardes et al., 2022, p. 17)

![[Pasted image 20250512145107.png]]