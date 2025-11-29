---
authors:
  - "[[Xin Wen]]"
  - "[[Bingchen Zhao]]"
  - "[[Ismail Elezi]]"
  - "[[Jiankang Deng]]"
  - "[[Xiaojuan Qi]]"
year: 2025
tags:
  - paper
  - tokenization
  - vit
  - dl_theory
  - spectral
url: http://arxiv.org/abs/2503.08685
share: true
---


> [!tldr] Abstract
> We introduce a novel visual tokenization framework that embeds a provable PCA-like structure into the latent token space. While existing visual tokenizers primarily optimize for reconstruction fidelity, they often neglect the structural properties of the latent space -- a critical factor for both interpretability and downstream tasks. Our method generates a 1D causal token sequence for images, where each successive token contributes non-overlapping information with mathematically guaranteed decreasing explained variance, analogous to principal component analysis. This structural constraint ensures the tokenizer extracts the most salient visual features first, with each subsequent token adding diminishing yet complementary information. Additionally, we identified and resolved a semantic-spectrum coupling effect that causes the unwanted entanglement of high-level semantic content and low-level spectral details in the tokens by leveraging a diffusion decoder. Experiments demonstrate that our approach achieves state-of-the-art reconstruction performance and enables better interpretability to align with the human vision system. Moreover, auto-regressive models trained on our token sequences achieve performance comparable to current state-of-the-art methods while requiring fewer tokens for training and inference.



## Notes

[Zotero Link](zotero://select/library/items/IMPZ5DAB)


![[Pasted image 20250608121606.png]]

![[Pasted image 20250608121621.png]]