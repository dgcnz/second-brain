---
authors:
  - "[[Jae Hyun Lim]]"
  - "[[Nikola B. Kovachki]]"
  - "[[Ricardo Baptista]]"
  - "[[Christopher Beckham]]"
  - "[[Kamyar Azizzadenesheli]]"
  - "[[Jean Kossaifi]]"
  - "[[Vikram Voleti]]"
  - "[[Jiaming Song]]"
  - "[[Karsten Kreis]]"
  - "[[Jan Kautz]]"
  - "[[Christopher Pal]]"
  - "[[Arash Vahdat]]"
  - "[[Anima Anandkumar]]"
year: 2023
date: 2023-02-14
tags:
  - paper
url: https://arxiv.org/abs/2302.07400
draft: false
---


> [!tldr] Abstract
> Diffusion models have recently emerged as a powerful framework for generative modeling. They consist of a forward process that perturbs input data with Gaussian white noise and a reverse process that learns a score function to generate samples by denoising. Despite their tremendous success, they are mostly formulated on finite-dimensional spaces, e.g., Euclidean, limiting their applications to many domains where the data has a functional form, such as in scientific computing and 3D geometric data analysis. This work introduces a mathematically rigorous framework called Denoising Diffusion Operators (DDOs) for training diffusion models in function space. In DDOs, the forward process perturbs input functions gradually using a Gaussian process. The generative process is formulated by a function-valued annealed Langevin dynamic. Our approach requires an appropriate notion of the score for the perturbed data distribution, which we obtain by generalizing denoising score matching to function spaces that can be infinite-dimensional. We show that the corresponding discretized algorithm generates accurate samples at a fixed cost independent of the data resolution. We theoretically and numerically verify the applicability of our approach on a set of function-valued problems, including generating solutions to the Navier-Stokes equation viewed as the push-forward distribution of forcings from a Gaussian Random Field (GRF), as well as volcano InSAR and MNIST-SDF.



## Notes

[Zotero Link](zotero://select/library/items/WGE2F7SG)
