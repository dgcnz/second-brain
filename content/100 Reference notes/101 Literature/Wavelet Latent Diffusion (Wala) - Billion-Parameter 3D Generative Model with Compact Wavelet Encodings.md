---
authors:
  - "[[Aditya Sanghi]]"
  - "[[Aliasghar Khani]]"
  - "[[Pradyumna Reddy]]"
  - "[[Arianna Rampini]]"
  - "[[Derek Cheung]]"
  - "[[Kamal Rahimi Malekshan]]"
  - "[[Kanika Madan]]"
  - "[[Hooman Shayani]]"
year: 2024
date: 2024-11-12
tags:
  - paper
url: https://arxiv.org/abs/2411.08017
draft: false
---


> [!tldr] Abstract
> Large-scale 3D generative models require substantial computational resources yet often fall short in capturing fine details and complex geometries at high resolutions. We attribute this limitation to the inefficiency of current representations, which lack the compactness required to model the generative models effectively. To address this, we introduce a novel approach called Wavelet Latent Diffusion, or WaLa, that encodes 3D shapes into wavelet-based, compact latent encodings. Specifically, we compress a $256^3$ signed distance field into a $12^3 \times 4$ latent grid, achieving an impressive 2427x compression ratio with minimal loss of detail. This high level of compression allows our method to efficiently train large-scale generative networks without increasing the inference time. Our models, both conditional and unconditional, contain approximately one billion parameters and successfully generate high-quality 3D shapes at $256^3$ resolution. Moreover, WaLa offers rapid inference, producing shapes within two to four seconds depending on the condition, despite the model's scale. We demonstrate state-of-the-art performance across multiple datasets, with significant improvements in generation quality, diversity, and computational efficiency. We open-source our code and, to the best of our knowledge, release the largest pretrained 3D generative models across different modalities.



## Notes

[Zotero Link](zotero://select/library/items/X86SH3PJ)
