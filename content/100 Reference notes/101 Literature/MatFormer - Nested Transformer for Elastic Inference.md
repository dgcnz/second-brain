---
authors:
  - "[[Sneha Kudugunta]]"
  - "[[Aditya Kusupati]]"
  - "[[Tim Dettmers]]"
  - "[[Kaifeng Chen]]"
  - "[[Inderjit Dhillon]]"
  - "[[Yulia Tsvetkov]]"
  - "[[Hannaneh Hajishirzi]]"
  - "[[Sham Kakade]]"
  - "[[Ali Farhadi]]"
  - "[[Prateek Jain]]"
year: 2023
tags:
  - paper
  - vit
  - flexible_vit
  - efficient_vision
url: https://arxiv.org/abs/2310.07707
date: 2023-10-11
---

> [!tldr] Abstract
> Transformer models are deployed in a wide range of settings, from multiaccelerator clusters to standalone mobile phones. The diverse inference constraints in these scenarios necessitate practitioners to train foundation models such as PaLM 2, Llama, & ViTs as a series of models of varying sizes. Due to significant training costs, only a select few model sizes are trained and supported, limiting more fine-grained control over relevant tradeoffs, including latency, cost, and accuracy. This work introduces MatFormer2, a nested Transformer architecture designed to offer elasticity in a variety of deployment constraints. Each Feed Forward Network (FFN) block of a MatFormer model is jointly optimized with a few nested smaller FFN blocks. This training procedure allows for the Mix’n’Match of model granularities across layers – i.e., a trained universal MatFormer model enables extraction of hundreds of accurate smaller models, which were never explicitly optimized. We empirically demonstrate MatFormer’s effectiveness across different model classes (decoders & encoders), modalities (language & vision), and scales (up to 2.6B parameters). We find that a 2.6B decoder-only MatFormer language model (MatLM) allows us to extract smaller models spanning from 1.5B to 2.6B, each exhibiting comparable validation loss and one-shot downstream evaluations to their independently trained counterparts. Furthermore, we observe that smaller encoders extracted from a universal MatFormer-based ViT (MatViT) encoder preserve the metric-space structure for adaptive large-scale retrieval. Finally, we showcase that speculative decoding with the accurate and consistent submodels extracted from MatFormer can further reduce inference latency.



## Notes

[Zotero Link](zotero://select/library/items/WRV54QBL)


