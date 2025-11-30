---
authors:
- '[[Lucius Bushnaq]]'
- '[[Jake Mendel]]'
- '[[Stefan Heimersheim]]'
- '[[Dan Braun]]'
- '[[Nicholas Goldowsky-Dill]]'
- "[[Kaarel H\xE4nni]]"
- '[[Cindy Wu]]'
- '[[Marius Hobbhahn]]'
year: 2024
tags:
- paper
- dl_theory
- mechinterp
- optimization
url: https://arxiv.org/abs/2405.10927
date: '2024-05-17'
---

> [!info] Abstract
> Mechanistic Interpretability aims to reverse engineer the algorithms implemented by neural networks by studying their weights and activations. An obstacle to reverse engineering neural networks is that many of the parameters inside a network are not involved in the computation being implemented by the network. These degenerate parameters may obfuscate internal structure. Singular learning theory teaches us that neural network parameterizations are biased towards being more degenerate, and parameterizations with more degeneracy are likely to generalize further. We identify 3 ways that network parameters can be degenerate: linear dependence between activations in a layer; linear dependence between gradients passed back to a layer; ReLUs which fire on the same subset of datapoints. We also present a heuristic argument that modular networks are likely to be more degenerate, and we develop a metric for identifying modules in a network that is based on this argument. We propose that if we can represent a neural network in a way that is invariant to reparameterizations that exploit the degeneracies, then this representation is likely to be more interpretable, and we provide some evidence that such a representation is likely to have sparser interactions. We introduce the Interaction Basis, a tractable technique to obtain a representation that is invariant to degeneracies from linear dependence of activations or Jacobians.

