---
authors:
- '[[Yanghao Li]]'
- '[[Hanzi Mao]]'
- '[[Ross Girshick]]'
- '[[Kaiming He]]'
year: 2023
tags:
- paper
- computer_vision
- object_detection
- transformers
- vit
url: https://arxiv.org/abs/2203.16527
date: '2022-03-30'
---

> [!tldr] Abstract
> We explore the plain, non-hierarchical Vision Transformer (ViT) as a backbone network for object detection. This design enables the original ViT architecture to be fine-tuned for object detection without needing to redesign a hierarchical backbone for pre-training. With minimal adaptations for fine-tuning, our plain-backbone detector can achieve competitive results. Surprisingly, we observe: (i) it is sufficient to build a simple feature pyramid from a single-scale feature map (without the common FPN design) and (ii) it is sufficient to use window attention (without shifting) aided with very few cross-window propagation blocks. With plain ViT backbones pre-trained as Masked Autoencoders (MAE), our detector, named ViTDet, can compete with the previous leading methods that were all based on hierarchical backbones, reaching up to 61.3 AP_box on the COCO dataset using only ImageNet-1K pre-training. We hope our study will draw attention to research on plain-backbone detectors. Code for ViTDet is available in Detectron2.


## Notes

- It effectively adapts a pre-trained vision transformers as backbones and decoder heads by adding minimal layers in between to make them work
- Requires full fine-tuning
- Ranks #16 on https://paperswithcode.com/sota/object-detection-on-coco-minival, ~4 box map points lower than the first spot
![[Pasted image 20240703182455.png]]
![[Pasted image 20240703182656.png]]

Code and weights at: https://github.com/facebookresearch/detectron2/tree/main/projects/ViTDet