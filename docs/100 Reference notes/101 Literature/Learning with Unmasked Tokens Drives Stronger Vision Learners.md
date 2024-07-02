---
authors:
  - "[[Taekyung Kim|Taekyung Kim]]"
  - "[[Sanghyuk Chun|Sanghyuk Chun]]"
  - "[[Byeongho Heo|Byeongho Heo]]"
  - "[[Dongyoon Han|Dongyoon Han]]"
year: 2024
tags:
  - paper
  - foundation_models
  - computer_vision
  - transformers
url: https://arxiv.org/abs/2310.13593
share: true
---
> [!tldr] Abstract
> Masked image modeling (MIM) has become a leading self-supervised learning strategy. MIMs such as Masked Autoencoder (MAE) learn strong representations by randomly masking input tokens for the encoder to process, with the decoder reconstructing the masked tokens to the input. However, MIM pre-trained encoders often exhibit a limited attention span, attributed to MIM's sole focus on regressing masked tokens only, which may impede the encoder's broader context learning. To tackle the limitation, we improve MIM by explicitly incorporating unmasked tokens into the training process. Specifically, our method enables the encoder to learn from broader context supervision, allowing unmasked tokens to experience broader contexts while the decoder reconstructs masked tokens. Thus, the encoded unmasked tokens are equipped with extensive contextual information, empowering masked tokens to leverage the enhanced unmasked tokens for MIM. As a result, our simple remedy trains more discriminative representations revealed by achieving 84.2% top-1 accuracy with ViT-B on ImageNet-1K with 0.6%p gain. We attribute the success to the enhanced pre-training method, as evidenced by the singular value spectrum and attention analyses. Finally, our models achieve significant performance gains at the downstream semantic segmentation and fine-grained visual classification tasks; and on diverse robust evaluation metrics. Code is available at [this https URL](https://github.com/naver-ai/lut)


## Notes

 Some notes regarding MIM as a good objective are on [[Masked Image Modelling|Masked Image Modelling]].
- [ ] Finish reading in depth