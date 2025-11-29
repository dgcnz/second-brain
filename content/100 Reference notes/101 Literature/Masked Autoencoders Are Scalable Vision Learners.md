---
authors:
  - "[[Kaiming He]]"
  - "[[Xinlei Chen]]"
  - "[[Saining Xie]]"
  - "[[Yanghao Li]]"
  - "[[Piotr Dollár]]"
  - "[[Ross Girshick]]"
year: 2021
tags:
  - paper
  - computer_vision
  - vit
url: https://arxiv.org/abs/2111.06377
share: true
---
> [!tldr] Abstract
> 
> This paper shows that masked autoencoders (MAE) are scalable self-supervised learners for computer vision. Our MAE approach is simple: we mask random patches of the input image and reconstruct the missing pixels. It is based on two core designs. First, we develop an asymmetric encoder-decoder architecture, with an encoder that operates only on the visible subset of patches (without mask tokens), along with a lightweight decoder that reconstructs the original image from the latent representation and mask tokens. Second, we find that masking a high proportion of the input image, e.g., 75%, yields a nontrivial and meaningful self-supervisory task. Coupling these two designs enables us to train large models efficiently and effectively: we accelerate training (by 3x or more) and improve accuracy. Our scalable approach allows for learning high-capacity models that generalize well: e.g., a vanilla ViT-Huge model achieves the best accuracy (87.8%) among methods that use only ImageNet-1K data. Transfer performance in downstream tasks outperforms supervised pre-training and shows promising scaling behavior.

## Notes

![[Pasted image 20250203104532.png|1000]]

-  [[The role of decoder depth in MAE-like models]]: Decoder depth is important for linear probing accuracy but not so much for finetuned accuracy:
	- """A sufficiently deep decoder is important for linear probing. This can be explained by the gap between a pixel reconstruction task and a recognition task: the last several layers in an autoencoder are more specialized for reconstruction, but are less relevant for recognition. A reasonably deep decoder can account for the reconstruction specialization, leaving the latent representations at a more abstract level"""
- The decoder can be narrower than the encoder :D