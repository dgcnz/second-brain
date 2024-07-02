---
authors:
  - "[[David W. Romero|David W. Romero]]"
  - "[[Anna Kuzina|Anna Kuzina]]"
  - "[[Erik J. Bekkers|Erik J. Bekkers]]"
  - "[[Jakub M. Tomczak|Jakub M. Tomczak]]"
  - "[[Mark Hoogendoorn|Mark Hoogendoorn]]"
year: 2021
tags:
  - paper
  - convolutions
  - dl_theory
url: https://arxiv.org/abs/2102.02611
share: true
---
> [!tldr] Abstract
> Conventional neural architectures for sequential data present important limitations. Recurrent networks suffer from exploding and vanishing gradients, small effective memory horizons, and must be trained sequentially. Convolutional networks are unable to handle sequences of unknown size and their memory horizon must be defined a priori. In this work, we show that all these problems can be solved by formulating convolutional kernels in CNNs as continuous functions. The resulting Continuous Kernel Convolution (CKConv) allows us to model arbitrarily long sequences in a parallel manner, within a single operation, and without relying on any form of recurrence. We show that Continuous Kernel Convolutional Networks (CKCNNs) obtain state-of-the-art results in multiple datasets, e.g., permuted MNIST, and, thanks to their continuous nature, are able to handle non-uniformly sampled datasets and irregularly-sampled data natively. CKCNNs match or perform better than neural ODEs designed for these purposes in a faster and simpler manner.

