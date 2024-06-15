---
authors:
  - "[[Duy-Kien Nguyen|Duy-Kien Nguyen]]"
  - "[[Mahmoud Assran|Mahmoud Assran]]"
  - "[[Unnat Jain|Unnat Jain]]"
  - "[[Martin R. Oswald|Martin R. Oswald]]"
  - "[[Cees G. M. Snoek|Cees G. M. Snoek]]"
  - "[[Xinlei Chen|Xinlei Chen]]"
year: 2024
tags:
  - paper
  - dl_theory
  - vit
url: https://arxiv.org/abs/2406.09415v1
share: true
---
> [!info] Abstract
> This work does not introduce a new method. Instead, we present an interesting finding that questions the necessity of the inductive bias -- locality in modern computer vision architectures. Concretely, we find that vanilla Transformers can operate by directly treating each individual pixel as a token and achieve highly performant results. This is substantially different from the popular design in Vision Transformer, which maintains the inductive bias from ConvNets towards local neighborhoods (e.g. by treating each 16x16 patch as a token). We mainly showcase the effectiveness of pixels-as-tokens across three well-studied tasks in computer vision: supervised learning for object classification, self-supervised learning via masked autoencoding, and image generation with diffusion models. Although directly operating on individual pixels is less computationally practical, we believe the community must be aware of this surprising piece of knowledge when devising the next generation of neural architectures for computer vision.


Comments:
- Seems to contradict [[How do vision transformers work?|How do vision transformers work?]] in their position that inductive biases do improve vits. Might be useful to cross-check this claim.