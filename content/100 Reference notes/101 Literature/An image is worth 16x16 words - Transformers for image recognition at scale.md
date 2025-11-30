---
authors:
- '[[Alexey Dosovitskiy]]'
- '[[Lucas Beyer]]'
- '[[Alexander Kolesnikov]]'
- '[[Dirk Weissenborn]]'
- '[[Xiaohua Zhai]]'
- '[[Thomas Unterthiner]]'
- '[[Mostafa Dehghani]]'
- '[[Matthias Minderer]]'
- '[[Georg Heigold]]'
- '[[Sylvain Gelly]]'
- '[[Jakob Uszkoreit]]'
- '[[Neil Houlsby]]'
tags:
- vit
- transformers
- paper
url: https://arxiv.org/abs/2010.11929
year: 2020
date: '2020-10-22'
---

> [!tldr] Abstract
> While the Transformer architecture has become the de-facto standard for natural language processing tasks, its applications to computer vision remain limited. In vision, attention is either applied in conjunction with convolutional networks, or used to replace certain components of convolutional networks while keeping their overall structure in place. We show that this reliance on CNNs is not necessary and a pure transformer applied directly to sequences of image patches can perform very well on image classification tasks. When pre-trained on large amounts of data and transferred to multiple mid-sized or small image recognition benchmarks (ImageNet, CIFAR-100, VTAB, etc.), Vision Transformer (ViT) attains excellent results compared to state-of-the-art convolutional networks while requiring substantially fewer computational resources to train.


## Notes

### Regarding inductive biases

> Inductive bias. We note that Vision Transformer has much less image-specific inductive bias than CNNs. In CNNs, locality, two-dimensional neighborhood structure, and translation equivariance are baked into each layer throughout the whole model. In ViT, only MLP layers are local and translationally equivariant, while the self-attention layers are global. The two-dimensional neighborhood structure is used very sparingly: in the beginning of the model by cutting the image into patches and at fine-tuning time for adjusting the position embeddings for images of different resolution (as described below). Other than that, the position embeddings at initialization time carry no information about the 2D positions of the patches and all spatial relations between the patches have to be learned from scratch.

Interesting insight about Hybrid ViTs (40 conv layers + transformer blocks): 
- It is better on small data regimes but shows no improvement on large data regimes.
![[vit_vs_resnet_accuracy.png]]
## Regarding cls vs pooling


![[Pasted image 20250208145420.png]]