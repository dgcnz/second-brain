---
authors:
  - "[[Jaskirat Singh]]"
  - "[[Boyang Zheng]]"
  - "[[Zongze Wu]]"
  - "[[Richard Zhang]]"
  - "[[Eli Shechtman]]"
  - "[[Saining Xie]]"
year: 2026
date: 2026-05-18
tags:
  - paper
url: https://arxiv.org/abs/2605.18324
draft: false
---


> [!tldr] Abstract
> Representation Autoencoders (RAE) replace traditional VAE with pretrained vision encoders. In this paper, we systematically investigate several design choices and find three insights which simplify and improve RAE. First, we study a generalized formulation where the representation is defined as sum of the last k encoder layers rather than solely the final layer. This simple change greatly improves reconstruction without encoder finetuning or specialized data (e.g., text, faces). Second, we study the prevalent assumption that RAE (using pretrained representation as encoder) replaces representation alignment (REPA), which distills the same representation to intermediate layers instead. Through large-scale empirical analysis, we uncover a surprising finding: RAE and REPA exhibit complementary working mechanisms, allowing the same representation to be used as both encoder and target for intermediate diffusion layers. Finally, the original RAE struggles with classifier-free guidance (CFG) and requires training a second, weaker diffusion model for AutoGuidance (AG). We show that REPA itself can be viewed as x-prediction in RAE latent space. By simply re-parameterizing the output of the DiT model, it can provide guidance for "free". Overall, RAEv2 leads to more than 10x faster convergence over the original RAE, achieving a state-of-the-art gFID of 1.06 in just 80 epochs on ImageNet-256. On FDr6, RAEv2 achieves a state-of-the-art 2.17 at just 80 epochs compared to the previous best 3.26 (800 epochs) without any post-training. This motivates EPFID@k (epochs to reach unguided gFID < k) as a measure of training efficiency. RAEv2 attains an EPFID@2 of 35 epochs, versus 177 for the original RAE. We also validate our approach across diverse settings for text-to-image generation and navigation world models, showing consistent improvements. The code is available at https://raev2.github.io.



## Notes

[Zotero Link](zotero://select/library/items/GMGQMFX4)
