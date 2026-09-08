---
authors:
  - "[[Shisong Deng]]"
  - "[[Qiang Zhang]]"
  - "[[Zhengyang Cai]]"
year: 2025
date: 2025-03-10
tags:
  - paper
url: https://arxiv.org/abs/2503.07056
draft: false
---


> [!tldr] Abstract
> Inverse design approach, which directly generates optimal aerodynamic shape with neural network models to meet designated performance targets, has drawn enormous attention. However, the current state-of-the-art inverse design approach for airfoils, which is based on generative adversarial network, demonstrates insufficient precision in its generating and training processes and struggles to reveal the coupling relationship among specified performance indicators. To address these issues, the airfoil inverse design framework based on the classifier-free guided denoising diffusion probabilistic model (CDDPM) is proposed innovatively in this paper. First, the CDDPM can effectively capture the correlations among specific performance indicators and, by adjusting the classifier-free guide coefficient, generate corresponding upper and lower surface pressure coefficient distributions based on designated pressure features. These distributions are then accurately translated into airfoil geometries through a mapping model. Experimental results using classical transonic airfoils as examples show that the inverse design based on CDDPM can generate a variety of pressure coefficient distributions, which enriches the diversity of design results. Compared with current state-of-the-art Wasserstein generative adversarial network methods, CDDPM achieves a 33.6% precision improvement in airfoil generating tasks. Moreover, a practical method to readjust each performance indicator value is proposed based on global optimization algorithm in conjunction with active learning strategy, aiming to provide rational value combination of performance indicators for the inverse design framework. This work is not only suitable for the airfoils design, but also has the capability to apply to optimization process of general product parts targeting selected performance indicators.



## Notes

[Zotero Link](zotero://select/library/items/96ISJAWG)
