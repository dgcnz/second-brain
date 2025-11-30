---
authors:
- '[[Tim R. Davidson]]'
- '[[Luca Falorsi]]'
- '[[Nicola de Cao]]'
- '[[Thomas Kipf]]'
- '[[Jakub M. Tomczak]]'
year: 2018
tags:
- paper
- geometric_dl
url: https://arxiv.org/abs/1804.00891
date: '2018-04-03'
---

> [!tldr] Abstract
> The Variational Auto-Encoder (VAE) is one of the most used unsupervised machine learning models. But although the default choice of a Gaussian distribution for both the prior and posterior represents a mathematically convenient distribution often leading to competitive results, we show that this parameterization fails to model data with a latent hyperspherical structure. To address this issue we propose using a von Mises-Fisher (vMF) distribution instead, leading to a hyperspherical latent space. Through a series of experiments we show how such a hyperspherical VAE, or -VAE, is more suitable for capturing data with a hyperspherical latent structure, while outperforming a normal, -VAE, in low dimensions on other data types. Code at [this http URL](http://github.com/nicola-decao/s-vae-tf) and [this https URL](https://github.com/nicola-decao/s-vae-pytorch)


# Notes

- "However, even for m>20 we observe a vanishing surface problem (see Figure [6](https://ar5iv.labs.arxiv.org/html/1804.00891#A5.F6 "Figure 6 ‣ Appendix E COLLAPSE OF THE SURFACE AREA ‣ Hyperspherical Variational Auto-Encoders") in Appendix [E](https://ar5iv.labs.arxiv.org/html/1804.00891#A5 "Appendix E COLLAPSE OF THE SURFACE AREA ‣ Hyperspherical Variational Auto-Encoders")). This could thus lead to unstable behavior of hyperspherical models in high dimensions."
	- Basically, the hypesphere's surface area starts collapsing on high dimensions (m>20), which makes it unsuitable choice, as embeddings in this manifold lose discriminative power. This is backed by the paper's results, where s-vae outperforms n-vae up to d=40.
	- ![[Pasted image 20241010115957.png]]
![[Pasted image 20241010115603.png]]