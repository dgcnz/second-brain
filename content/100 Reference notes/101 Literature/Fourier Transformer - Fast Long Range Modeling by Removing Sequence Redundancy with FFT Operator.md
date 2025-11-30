---
authors:
- '[[Ziwei He]]'
- '[[Meng Yang]]'
- '[[Minwei Feng]]'
- '[[Jingcheng Yin]]'
- '[[Xinbing Wang]]'
- '[[Jingwen Leng]]'
- '[[Zhouhan Lin]]'
year: 2023
tags:
- paper
- dl_theory
- spectral
url: http://arxiv.org/abs/2305.15099
date: '2023-05-24'
---

> [!tldr] Abstract
> The transformer model is known to be computationally demanding, and prohibitively costly for long sequences, as the self-attention module uses a quadratic time and space complexity with respect to sequence length. Many researchers have focused on designing new forms of self-attention or introducing new parameters to overcome this limitation, however a large portion of them prohibits the model to inherit weights from large pretrained models. In this work, the transformer's inefficiency has been taken care of from another perspective. We propose Fourier Transformer, a simple yet effective approach by progressively removing redundancies in hidden sequence using the ready-made Fast Fourier Transform (FFT) operator to perform Discrete Cosine Transformation (DCT). Fourier Transformer is able to significantly reduce computational costs while retain the ability to inherit from various large pretrained models. Experiments show that our model achieves state-of-the-art performances among all transformer-based models on the long-range modeling benchmark LRA with significant improvement in both speed and space. For generative seq-to-seq tasks including CNN/DailyMail and ELI5, by inheriting the BART weights our model outperforms the standard BART and other efficient models. Our code is publicly available at https://github.com/LUMIA-Group/FourierTransformer



## Notes

[Zotero Link](zotero://select/library/items/S9VD4MAP)


