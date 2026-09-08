---
authors:
  - "[[Walter Nelson]]"
  - "[[Marco Fumero]]"
  - "[[Theofanis Karaletsos]]"
  - "[[Francesco Locatello]]"
year: 2026
date: 2026-03-12
tags:
  - paper
url: https://arxiv.org/abs/2603.11970
draft: false
---


> [!tldr] Abstract
> Representation learning models exhibit a surprising stability in their internal representations. Whereas most prior work treats this stability as a single property, we formalize it as two distinct concepts: statistical identifiability (consistency of representations across runs) and structural identifiability (alignment of representations with some unobserved ground truth). Recognizing that perfect pointwise identifiability is generally unrealistic for modern representation learning models, we propose new model-agnostic definitions of statistical and structural near-identifiability of representations up to some error tolerance $ε$. Leveraging these definitions, we prove a statistical $ε$-near-identifiability result for the representations of models with nonlinear decoders, generalizing existing identifiability theory beyond last-layer representations in e.g. generative pre-trained transformers (GPTs) to near-identifiability of the intermediate representations of a broad class of models including (masked) autoencoders (MAEs) and supervised learners. Although these weaker assumptions confer weaker identifiability, we show that independent components analysis (ICA) can resolve much of the remaining linear ambiguity for this class of models, and validate and measure our near-identifiability claims empirically. With additional assumptions on the data-generating process, statistical identifiability extends to structural identifiability, yielding a simple and practical recipe for disentanglement: ICA post-processing of latent representations. On synthetic benchmarks, this approach achieves state-of-the-art disentanglement using a vanilla autoencoder. With a foundation model-scale MAE for cell microscopy, it disentangles biological variation from technical batch effects, substantially improving downstream generalization.



## Notes

[Zotero Link](zotero://select/library/items/9Z3N7CMF)
