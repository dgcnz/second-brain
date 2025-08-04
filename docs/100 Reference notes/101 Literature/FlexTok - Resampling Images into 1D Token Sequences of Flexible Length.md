---
authors:
  - "[[Roman Bachmann|Roman Bachmann]]"
  - "[[Jesse Allardice|Jesse Allardice]]"
  - "[[David Mizrahi|David Mizrahi]]"
  - "[[Enrico Fini|Enrico Fini]]"
  - "[[Oğuzhan Fatih Kar|Oğuzhan Fatih Kar]]"
  - "[[Elmira Amirloo|Elmira Amirloo]]"
  - "[[Alaaeldin El-Nouby|Alaaeldin El-Nouby]]"
  - "[[Amir Zamir|Amir Zamir]]"
  - "[[Afshin Dehghan|Afshin Dehghan]]"
year: 2025
tags:
  - paper
  - tokenization
  - vit
  - computer_vision
url: http://arxiv.org/abs/2502.13967
share: true
---


> [!tldr] Abstract
> Image tokenization has enabled major advances in autoregressive image generation by providing compressed, discrete representations that are more efficient to process than raw pixels. While traditional approaches use 2D grid tokenization, recent methods like TiTok have shown that 1D tokenization can achieve high generation quality by eliminating grid redundancies. However, these methods typically use a fixed number of tokens and thus cannot adapt to an image's inherent complexity. We introduce FlexTok, a tokenizer that projects 2D images into variable-length, ordered 1D token sequences. For example, a 256x256 image can be resampled into anywhere from 1 to 256 discrete tokens, hierarchically and semantically compressing its information. By training a rectified flow model as the decoder and using nested dropout, FlexTok produces plausible reconstructions regardless of the chosen token sequence length. We evaluate our approach in an autoregressive generation setting using a simple GPT-style Transformer. On ImageNet, this approach achieves an FID<2 across 8 to 128 tokens, outperforming TiTok and matching state-of-the-art methods with far fewer tokens. We further extend the model to support to text-conditioned image generation and examine how FlexTok relates to traditional 2D tokenization. A key finding is that FlexTok enables next-token prediction to describe images in a coarse-to-fine "visual vocabulary", and that the number of tokens to generate depends on the complexity of the generation task.


## Notes

[Zotero Link](zotero://select/library/items/4QI9EGZF)

![[Pasted image 20250608121241.png|Pasted image 20250608121241.png]]

Figure 5: FlexTok rate-distortion tradeoff. We show ImageNet-1k reconstruction metrics for three different FlexTok sizes. The more tokens used, the closer the reconstructions get to the original RGB images. Scaling the tokenizer size significantly improves reconstruction FID, but is not as crucial in terms of MAE and DreamSim score. For each of the different FlexTok model sizes we use the optimal inference hyperparameters detailed in Appendix F. We show additional reconstruction metrics in Table 8.