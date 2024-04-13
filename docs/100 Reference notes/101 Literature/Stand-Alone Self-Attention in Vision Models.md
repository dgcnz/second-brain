---
authors:
  - "[[Prajit Ramachandran]]"
  - "[[Niki Parmar]]"
  - "[[Ashish Vaswani]]"
  - "[[Irwan Bello]]"
  - "[[Anselm Levskaya]]"
  - "[[Jonathon Shlens]]"
tags:
  - vit
  - transformers
year: 2019
---
Abstract:

Convolutions are a fundamental building block of modern computer vision systems. Recent approaches have argued for going beyond convolutions in order to capture long-range dependencies. These efforts focus on augmenting convolutional models with content-based interactions, such as self-attention and non-local means, to achieve gains on a number of vision tasks. The natural question that arises is whether attention can be a stand-alone primitive for vision models instead of serving as just an augmentation on top of convolutions. In developing and testing a pure self-attention vision model, we verify that self-attention can indeed be an effective stand-alone layer. A simple procedure of replacing all instances of spatial convolutions with a form of self-attention applied to ResNet model produces a fully self-attentional model that outperforms the baseline on ImageNet classification with 12% fewer FLOPS and 29% fewer parameters. On COCO object detection, a pure self-attention model matches the mAP of a baseline RetinaNet while having 39% fewer FLOPS and 34% fewer parameters. Detailed ablation studies demonstrate that self-attention is especially impactful when used in later layers. These results establish that stand-alone self-attention is an important addition to the vision practitioner's toolbox.

[Prajit Ramachandran](https://arxiv.org/search/cs?searchtype=author&query=Ramachandran,+P), [Niki Parmar](https://arxiv.org/search/cs?searchtype=author&query=Parmar,+N), [Ashish Vaswani](https://arxiv.org/search/cs?searchtype=author&query=Vaswani,+A), [Irwan Bello](https://arxiv.org/search/cs?searchtype=author&query=Bello,+I), [Anselm Levskaya](https://arxiv.org/search/cs?searchtype=author&query=Levskaya,+A), [Jonathon Shlens](https://arxiv.org/search/cs?searchtype=author&query=Shlens,+J)