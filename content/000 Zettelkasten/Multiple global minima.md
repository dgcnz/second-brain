---
tags:
  - optimizability
  - dl_theory
date: 2024-01-01
---

We expect loss functions for deep networks to have a **large family of equivalent global minima**.

- Fully connected networks: permutation of the hidden units
- Convolutional networks: permuting the channels and convolution kernels appropriately.
- ...

The above modifications all produce the same output for every input. However, the global minimum only depends on the output at the training data points. 

**In overparameterized networks, there will also be families of solutions that behave identically at the data points but differently between them. All of these are also global minima.**

References:
- [[Understanding Deep Learning - Chapter 20]] (20.3.1)