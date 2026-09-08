---
authors:
  - "[[Mathias Schreiner]]"
  - "[[Ole Winther]]"
  - "[[Simon Olsson]]"
year: 2023
date: 2023-05-29
tags:
  - paper
url: https://arxiv.org/abs/2305.18046
draft: false
---


> [!tldr] Abstract
> Computing properties of molecular systems rely on estimating expectations of the (unnormalized) Boltzmann distribution. Molecular dynamics (MD) is a broadly adopted technique to approximate such quantities. However, stable simulations rely on very small integration time-steps ($10^{-15}\,\mathrm{s}$), whereas convergence of some moments, e.g. binding free energy or rates, might rely on sampling processes on time-scales as long as $10^{-1}\, \mathrm{s}$, and these simulations must be repeated for every molecular system independently. Here, we present Implict Transfer Operator (ITO) Learning, a framework to learn surrogates of the simulation process with multiple time-resolutions. We implement ITO with denoising diffusion probabilistic models with a new SE(3) equivariant architecture and show the resulting models can generate self-consistent stochastic dynamics across multiple time-scales, even when the system is only partially observed. Finally, we present a coarse-grained CG-SE3-ITO model which can quantitatively model all-atom molecular dynamics using only coarse molecular representations. As such, ITO provides an important step towards multiple time- and space-resolution acceleration of MD. Code is available at \href{https://github.com/olsson-group/ito}{https://github.com/olsson-group/ito}.



## Notes

[Zotero Link](zotero://select/library/items/97AU4H6A)
