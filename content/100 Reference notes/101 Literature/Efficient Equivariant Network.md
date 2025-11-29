---
authors:
  - "[[Lingshen He]]"
  - "[[Yuxuan Chen]]"
  - "[[Zhengyang Shen]]"
  - "[[Yiming Dong]]"
  - "[[Yisen Wang]]"
  - "[[Zhouchen Lin]]"
tags:
  - paper
year: 
url: 
share:
---
> [!info] Abstract
> Convolutional neural networks (CNNs) have dominated the field of Computer Vision and achieved great success due to their built-in translation equivariance. Group equivariant CNNs (G-CNNs) that incorporate more equivariance can significantly improve the performance of conventional CNNs. However, G-CNNs are faced with two major challenges: spatial-agnostic problem and expensive computational cost. In this work, we propose a general framework of previous equivariant models, which includes G-CNNs and equivariant self-attention layers as special cases. Under this framework, we explicitly decompose the feature aggregation operation into a kernel generator and an encoder, and decouple the spatial and extra geometric dimensions in the computation. Therefore, our filters are essentially dynamic rather than being spatial-agnostic. We further show that our Equivariant model is parameter Efficient and computational Efficient by complexity analysis, and also data Efficient by experiments, so we call our model E4 -Net. Extensive experiments verify that our model can significantly improve previous works with smaller model size. Especially, under the setting of training on 1/5 data of CIFAR10, our model improves G-CNNs by 5%+ accuracy, while using only 56% parameters and 68% FLOPs.
