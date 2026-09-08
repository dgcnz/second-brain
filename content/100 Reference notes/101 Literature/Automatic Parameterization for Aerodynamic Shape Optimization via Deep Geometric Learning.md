---
authors:
  - "[[Zhen Wei]]"
  - "[[Pascal Fua]]"
  - "[[Michaël Bauerheim]]"
year: 2023
date: 2023-05-03
tags:
  - paper
url: https://arxiv.org/abs/2305.02116
draft: false
---


> [!tldr] Abstract
> We propose two deep learning models that fully automate shape parameterization for aerodynamic shape optimization. Both models are optimized to parameterize via deep geometric learning to embed human prior knowledge into learned geometric patterns, eliminating the need for further handcrafting. The Latent Space Model (LSM) learns a low-dimensional latent representation of an object from a dataset of various geometries, while the Direct Mapping Model (DMM) builds parameterization on the fly using only one geometry of interest. We also devise a novel regularization loss that efficiently integrates volumetric mesh deformation into the parameterization model. The models directly manipulate the high-dimensional mesh data by moving vertices. LSM and DMM are fully differentiable, enabling gradient-based, end-to-end pipeline design and plug-and-play deployment of surrogate models or adjoint solvers. We perform shape optimization experiments on 2D airfoils and discuss the applicable scenarios for the two models.



## Notes

[Zotero Link](zotero://select/library/items/L92GT7GF)
