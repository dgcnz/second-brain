---
authors:
  - "[[Alex Flinth]]"
  - "[[Fredrik Ohlsson]]"
year: 2023
tags:
  - dl_theory
  - equivariance
  - optimization
url: https://arxiv.org/abs/2303.13458
share: true
---
> [!info] Abstract
> We investigate the optimization of multilayer perceptrons on symmetric data. We compare the strategy of constraining the architecture to be equivariant to that of using augmentation. We show that, under natural assumptions on the loss and non-linearities, the sets of equivariant stationary points are identical for the two strategies, and that the set of equivariant layers is invariant under the gradient flow for augmented models. Finally, we show that stationary points may be unstable for augmented training although they are stable for the equivariant models.

Main observations:
1. They show that **if the augmented model is equivariantly initialized, it will remain equivariant during training** (See [[Equivariance Initialization]])
3. Compared to the equivariant approach, **augmentation introduces no new equivariant stationary points**, nor does it exclude existing ones. (See [[Multiple global minima]])
4. The existence of a **stable equivariant minimum is not guaranteed by augmentation**. (See [[Multiple global minima]])


Regarding [[Equivariance Initialization]] in this work:

> We initialize ΦA with equivariant layers A0 ∈ E by drawing matrices randomly from a standard Gaussian distribution, and then projecting them orthogonally onto E. We train the network on (finite) datasets D using gradient descent in three different ways. 

My intuition is that they do something like the isotropic convolution from [[Priors over Neural Network weights]]