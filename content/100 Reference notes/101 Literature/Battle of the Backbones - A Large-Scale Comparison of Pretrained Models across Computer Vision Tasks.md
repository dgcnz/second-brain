---
authors:
  - "[[Micah Goldblum]]"
  - "[[Hossein Souri]]"
  - "[[Renkun Ni]]"
  - "[[Manli Shu]]"
  - "[[Viraj Prabhu]]"
  - "[[Gowthami Somepalli]]"
  - "[[Prithvijt Chattopadhyay]]"
  - "[[Mark Ibrahim]]"
  - "[[Adrien Bardes]]"
  - "[[Judy Hoffman]]"
  - "[[Rama Chellappa]]"
  - "[[Andrew Gordon Wilson]]"
  - "[[Tom Goldstein]]"
year: 2023
tags:
  - paper
  - foundation_models
  - computer_vision
  - vit
  - transformers
  - cnn
url: https://arxiv.org/abs/2310.19909
share: true
---
> [!tldr] Abstract
> Neural network based computer vision systems are typically built on a backbone, a pretrained or randomly initialized feature extractor. Several years ago, the default option was an ImageNet-trained convolutional neural network. However, the recent past has seen the emergence of countless backbones pretrained using various algorithms and datasets. While this abundance of choice has led to performance increases for a range of systems, it is difficult for practitioners to make informed decisions about which backbone to choose. Battle of the Backbones (BoB) makes this choice easier by benchmarking a diverse suite of pretrained models, including vision-language models, those trained via self-supervised learning, and the Stable Diffusion backbone, across a diverse set of computer vision tasks ranging from classification to object detection to OOD generalization and more. Furthermore, BoB sheds light on promising directions for the research community to advance computer vision by illuminating strengths and weakness of existing approaches through a comprehensive analysis conducted on more than 1500 training runs. While vision transformers (ViTs) and self-supervised learning (SSL) are increasingly popular, we find that convolutional neural networks pretrained in a supervised fashion on large training sets still perform best on most tasks among the models we consider. Moreover, in apples-to-apples comparisons on the same architectures and similarly sized pretraining datasets, we find that SSL backbones are highly competitive, indicating that future works should perform SSL pretraining with advanced architectures and larger pretraining datasets. We release the raw results of our experiments along with code that allows researchers to put their own backbones through the gauntlet here: [this https URL](https://github.com/hsouri/Battle-of-the-Backbones)


## Notes

It would be nice to see an update with [[DINOv2 - Learning Robust Visual Features without Supervision]] and [[EVA-02 - A Visual Representation for Neon Genesis]].

> A performance comparison of ViTs and CNNs. Modern architectures strongly outperform vanilla ViTs. We see in Table 2 that the best performing backbone (ConvNeXt-Base) is convolutional, with a hierarchical transformer (SwinV2-Base) being a close second. The latter transformer architecture incorporates a strong spatial inductive bias. These findings suggest that the community should move past vanilla ViTs which are still used frequently. As a caveat, we do not evaluate very large models, and it is possible that ViTs might outperform their more advanced variants or convolutional networks at larger scales.

> Battle of the “small” backbones. Keeping limited resources in mind, we also compare the “small” subset of backbones in BoB (< 30M parameters) – with ViT-Small, ConvNeXt-Tiny, Swin-Tiny and ResNet-50 architectures. Overall, we find Supervised ConvNeXt-T trained on IN-1k to be the best, followed by Supervised SwinV2-T trained on IN-1k and DINO ViT-S trained on IN-1k. Interestingly, supervised learning again dominates, and backbones pretrained on just IN-1k outperform ones trained on a considerably more diverse and larger dataset (MiDaS).



> Object Detection & Segmentation. For object detection and instance segmentation, we find “Supervised ConvNeXt-Base trained on IN-21K” > “Supervised SwinV2-Base trained on IN-21k (finetuned on IN-1k)” > “Supervised ConvNeXt-Base trained on IN-1k”.

These results are probably outdated since many foundation models already beat Swinv2
- [[SimPLR - A Simple and Plain Transformer for Scaling-Efficient Object Detection and Segmentation]]
- [[Exploring Plain Vision Transformer Backbones for Object Detection]]

