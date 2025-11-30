---
tags:
  - question
  - foundation_models
  - computer_vision
date: 2024-01-01
---

## Object detection

Research using DINOv2 as a backbone for object detection:

DINOv2 ❌
- [Poor Object Detection Performance with DINOv2 Backbone and Faster R-CNN Head on Cityscapes Dataset](https://github.com/facebookresearch/dinov2/issues/350)
	- Using mask rcnn head but still relevant, maybe dinov2 is not a good object detection backbone?

DINOv2 ✅

> "NVIDIA has also released a foundational model called NV-Dinov2, which is available through the NVIDIA AI Enterprise program. NV-Dinov2 is a visual foundational model trained on an NVIDIA proprietary large scale dataset." [NV-DINOv2](https://docs.nvidia.com/tao/tao-toolkit/text/foundation_models/overview.html)
- NVIDIA provides CLIP VIT and DINO VIT backbones for object detection and segmentation (closed source)
	- This signals that it is not only possible but actually useful in production (the tao toolkit specifically markets to providing **enterprise-ready** vision transformers)
	- However it also very specifically states the inferior performance of vits compared with specifically trained dense-prediction networks:
		> "To mitigate the inferior performance of a standard vision transformer (ViT) on dense prediction tasks, TAO supports the ViT-Adapter_ architecture. This allows a powerful ViT that has learned rich semantic representations from a large corpus of data to achieve comparable performance to vision-specific transformers on dense prediction tasks."

- [[Exploring Plain Vision Transformer Backbones for Object Detection]]
	- [VitDET with DINO backbone gh issue](https://github.com/facebookresearch/dinov2/issues/65)
		- There's some caveats but they are fixable

 - [[SimPLR - A Simple and Plain Transformer for Scaling-Efficient Object Detection and Segmentation]]
	 - Improves over ViTDet

