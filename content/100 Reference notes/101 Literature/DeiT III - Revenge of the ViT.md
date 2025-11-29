---
authors:
  - "[[Hugo Touvron]]"
  - "[[Matthieu Cord]]"
  - "[[Hervé Jegou]]"
year: 2022
tags:
  - paper
  - vit
url: https://arxiv.org/abs/2204.07118
share: true
---
> [!tldr] Abstract
> A Vision Transformer (ViT) is a simple neural architecture amenable to serve several computer vision tasks. It has limited built-in architectural priors, in contrast to more recent architectures that incorporate priors either about the input data or of specific tasks. Recent works show that ViTs benefit from self-supervised pre-training, in particular BerT-like pre-training like BeiT. In this paper, we revisit the supervised training of ViTs. Our procedure builds upon and simplifies a recipe introduced for training ResNet-50. It includes a new simple data-augmentation procedure with only 3 augmentations, closer to the practice in self-supervised learning. Our evaluations on Image classification (ImageNet-1k with and without pre-training on ImageNet-21k), transfer learning and semantic segmentation show that our procedure outperforms by a large margin previous fully supervised training recipes for ViT. It also reveals that the performance of our ViT trained with supervision is comparable to that of more recent architectures. Our results could serve as better baselines for recent self-supervised approaches demonstrated on ViT.

## Notes

"""
The main ingredients are as follows: 
- We build upon the work of Wightman et al. [57] introduced for ResNet50. In particular we adopt a binary cross entropy loss for Imagenet1k only training. We adapt this method by including ingredients that significantly improve the training of large ViT [51], namely **stochastic depth** [24] and **LayerScale** [51]. 
- **3-Augment**: is a simple data augmentation inspired by that employed for self-supervised learning. Surprisingly, with ViT we observe that it works better than the usual automatic/learned data-augmentation employed to train vision transformers like RandAugment [6]. 
- **Simple Random Cropping** is more effective than Random Resize Cropping when pre-training on a larger set like ImageNet-21k. 
- **A lower resolution at training time.** This choice reduces the train-test discrepancy [53] but has not been much exploited with ViT. We observe that it also has a regularizing effect for the largest models by preventing overfitting. For instance, for a target resolution of 224 × 224, a ViT-H pre-trained at resolution 126 × 126 (81 tokens) achieves a better performance on ImageNet-1k than when pre-training at resolution 224 × 224 (256 tokens). This is also less demanding at pre-training time, as there are 70% fewer tokens. From this perspective it offers similar scaling properties as mask-autoencoders [19].
"""



