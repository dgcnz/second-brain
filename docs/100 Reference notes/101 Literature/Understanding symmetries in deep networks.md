---
authors:
  - "[[Vijay Badrinarayanan|Vijay Badrinarayanan]]"
  - "[[Bamdev Mishra|Bamdev Mishra]]"
  - "[[Roberto Cipolla|Roberto Cipolla]]"
year: 2015
tags:
  - dl_theory
  - dl2
url: https://arxiv.org/abs/1511.01029
share: true
---
> [!info] Abstract
> Recent works have highlighted scale invariance or symmetry present in the weight space of a typical deep network and the adverse effect it has on the Euclidean gradient based stochastic gradient descent optimization. In this work, we show that a commonly used deep network, which uses convolution, batch normalization, reLU, max-pooling, and sub-sampling pipeline, possess more complex forms of symmetry arising from scaling-based reparameterization of the network weights. We propose to tackle the issue of the weight space symmetry by constraining the filters to lie on the unit-norm manifold. Consequently, training the network boils down to using stochastic gradient descent updates on the unit-norm manifold. Our empirical evidence based on the MNIST dataset shows that the proposed updates improve the test performance beyond what is achieved with batch normalization and without sacrificing the computational efficiency of the weight updates.



,
