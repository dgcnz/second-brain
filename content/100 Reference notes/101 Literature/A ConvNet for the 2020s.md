---
authors:
  - "[[Zhuang Liu]]"
  - "[[Hanzi Mao]]"
  - "[[Chao-Yuan Wu]]"
  - "[[Christoph Feichtenhofer]]"
  - "[[Trevor Darrell]]"
  - "[[Saining Xie]]"
year: 2022
tags:
  - cnn
  - foundation_models
  - computer_vision
  - dl_theory
  - paper
url: https://arxiv.org/abs/2201.03545
share: true
---
> [!abstract] Abstract
> The "Roaring 20s" of visual recognition began with the introduction of Vision Transformers (ViTs), which quickly superseded ConvNets as the state-of-the-art image classification model. A vanilla ViT, on the other hand, faces difficulties when applied to general computer vision tasks such as object detection and semantic segmentation. It is the hierarchical Transformers (e.g., Swin Transformers) that reintroduced several ConvNet priors, making Transformers practically viable as a generic vision backbone and demonstrating remarkable performance on a wide variety of vision tasks. However, the effectiveness of such hybrid approaches is still largely credited to the intrinsic superiority of Transformers, rather than the inherent inductive biases of convolutions. In this work, we reexamine the design spaces and test the limits of what a pure ConvNet can achieve. We gradually "modernize" a standard ResNet toward the design of a vision Transformer, and discover several key components that contribute to the performance difference along the way. The outcome of this exploration is a family of pure ConvNet models dubbed ConvNeXt. Constructed entirely from standard ConvNet modules, ConvNeXts compete favorably with Transformers in terms of accuracy and scalability, achieving 87.8% ImageNet top-1 accuracy and outperforming Swin Transformers on COCO detection and ADE20K segmentation, while maintaining the simplicity and efficiency of standard ConvNets.

## Notes

Authors modernize ConvNets with SOTA architectural choices and training recipes to achieve SOTA ViT performance on dense prediction tasks (Object Detection, etc).
![[Pasted image 20240702125518.png|500]]

Important limitation, scaling laws for ConvNext are not proved to be as good as ViTs, although they also mention that they are promising:

>These findings are encouraging but not yet completely convincing — our exploration thus far has been limited to a small scale, but vision Transformers’ scaling behavior is what truly distinguishes them.

> Table 1. Classification accuracy on ImageNet-1K. Similar to Transformers, ConvNeXt also shows promising scaling behavior with higher-capacity models and a larger (pre-training) dataset.

- [ ] What are the follow ups for this paper regarding scaling laws of modern convnets when compared to vits?

One of the main motivations of this paper is that ViTs were not very good at dense prediction tasks such as object detection:

> A vanilla ViT, on the other hand, faces difficulties when applied to general computer vision tasks such as object detection and semantic segmentation. It is the hierarchical Transformers (e.g., Swin Transformers) that reintroduced several ConvNet priors, making Transformers practically viable as a generic vision backbone and demonstrating remarkable performance on a wide variety of vision tasks.

