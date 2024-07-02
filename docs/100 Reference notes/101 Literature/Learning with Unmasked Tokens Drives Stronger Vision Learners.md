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

> However, MIM strategies often encounter challenges, such as local dependency on attention to understand entire context of an image. For example, liu _et al_. [[36](https://arxiv.org/html/2310.13593v2#bib.bib36)] revealed that MAE [[22](https://arxiv.org/html/2310.13593v2#bib.bib22)], a state-of-the-art MIM method, exhibits shorter average attention distances. Furthermore, we observe that attention map patterns by MAE substantiate extremely local behavior (See Fig. [1](https://arxiv.org/html/2310.13593v2#S2.F1 "Figure 1 ‣ 2.1.2 MIM formulation itself falls short in learning broader contexts. ‣ 2.1 MIM and Beyond ‣ 2 Preliminary ‣ Learning with Unmasked Tokens Drives Stronger Vision Learners")) indeed. In other words, the MAE-trained attention mechanism less integrates information across the entire image pixels and tends to focus on specific input regions. This is presumably attributed to MIM-pretraining, primarily dedicated to predicting low-level pixel details (_e.g_., color or texture) without a comprehensive understanding of less-regional information (_e.g_., the input structure or shape).

This maybe should not really be an issue: [[How do vision transformers work?|How do vision transformers work?]] explicitly constraint ViTs to only use local attention and they improve performance. So maybe this is an advantage? 


![[Pasted image 20240702135103.png|Pasted image 20240702135103.png]]
