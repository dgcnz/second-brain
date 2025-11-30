---
authors:
- '[[Roman Bachmann]]'
- '[[Jesse Allardice]]'
- '[[David Mizrahi]]'
- '[[Enrico Fini]]'
- "[[O\u011Fuzhan Fatih Kar]]"
- '[[Elmira Amirloo]]'
- '[[Alaaeldin El-Nouby]]'
- '[[Amir Zamir]]'
- '[[Afshin Dehghan]]'
year: 2025
tags:
- paper
- tokenization
- vit
- computer_vision
url: http://arxiv.org/abs/2502.13967
date: 2025-02-19
---

> [!tldr] Abstract
> Image tokenization has enabled major advances in autoregressive image generation by providing compressed, discrete representations that are more efficient to process than raw pixels. While traditional approaches use 2D grid tokenization, recent methods like TiTok have shown that 1D tokenization can achieve high generation quality by eliminating grid redundancies. However, these methods typically use a fixed number of tokens and thus cannot adapt to an image's inherent complexity. We introduce FlexTok, a tokenizer that projects 2D images into variable-length, ordered 1D token sequences. For example, a 256x256 image can be resampled into anywhere from 1 to 256 discrete tokens, hierarchically and semantically compressing its information. By training a rectified flow model as the decoder and using nested dropout, FlexTok produces plausible reconstructions regardless of the chosen token sequence length. We evaluate our approach in an autoregressive generation setting using a simple GPT-style Transformer. On ImageNet, this approach achieves an FID<2 across 8 to 128 tokens, outperforming TiTok and matching state-of-the-art methods with far fewer tokens. We further extend the model to support to text-conditioned image generation and examine how FlexTok relates to traditional 2D tokenization. A key finding is that FlexTok enables next-token prediction to describe images in a coarse-to-fine "visual vocabulary", and that the number of tokens to generate depends on the complexity of the generation task.


## Notes

>[!NOTE] Key Idea
>1. Use a ViT Encoder with K=256 Registers (state)
>2. Apply Nested dropout to the registers (drop the last M registers, M~random)
>3. Reconstruct the image with the remaining registers and compute difference with the ground truth image.

![[Pasted image 20251125014218.png|600]]

By applying a nested dropout, information is front-loaded: Earlier tokens capture most of the information and thus, with just a few tokens you can reconstruct a semantically similar image. Later tokens add more detail.

![[Pasted image 20251125014715.png|500]]

![[Pasted image 20250608121241.png|600]]

Figure 5: FlexTok rate-distortion tradeoff. We show ImageNet-1k reconstruction metrics for three different FlexTok sizes. The more tokens used, the closer the reconstructions get to the original RGB images. Scaling the tokenizer size significantly improves reconstruction FID, but is not as crucial in terms of MAE and DreamSim score. For each of the different FlexTok model sizes we use the optimal inference hyperparameters detailed in Appendix F. We show additional reconstruction metrics in Table 8.


[Zotero Link](zotero://select/library/items/4QI9EGZF)