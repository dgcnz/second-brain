---
authors:
  - "[[Nick Jiang]]"
  - "[[Amil Dravid]]"
  - "[[Alexei Efros]]"
  - "[[Yossi Gandelsman]]"
year: 2025
date: 2025-10-25
tags:
  - paper
  - vit
  - dl-theory
url: http://arxiv.org/abs/2506.08010
draft: false
---


> [!tldr] Abstract
> We investigate the mechanism underlying a previously identified phenomenon in Vision Transformers - the emergence of high-norm tokens that lead to noisy attention maps (Darcet et al., 2024). We observe that in multiple models (e.g., CLIP, DINOv2), a sparse set of neurons is responsible for concentrating high-norm activations on outlier tokens, leading to irregular attention patterns and degrading downstream visual processing. While the existing solution for removing these outliers involves retraining models from scratch with additional learned register tokens, we use our findings to create a training-free approach to mitigate these artifacts. By shifting the high-norm activations from our discovered register neurons into an additional untrained token, we can mimic the effect of register tokens on a model already trained without registers. We demonstrate that our method produces cleaner attention and feature maps, enhances performance over base models across multiple downstream visual tasks, and achieves results comparable to models explicitly trained with register tokens. We then extend test-time registers to off-the-shelf vision-language models, yielding cleaner attention-based, text-to-image attribution. Finally, we outline a simple mathematical model that reflects the observed behavior of register neurons and high norm tokens. Our results suggest that test-time registers effectively take on the role of register tokens at test-time, offering a training-free solution for any pre-trained model released without them.



## Notes

[Zotero Link](zotero://select/library/items/BRGPTLFL)
