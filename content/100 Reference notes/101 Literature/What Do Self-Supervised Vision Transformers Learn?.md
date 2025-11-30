---
authors:
- '[[Namuk Park]]'
- '[[Wonjae Kim]]'
- '[[Byeongho Heo]]'
- '[[Taekyung Kim]]'
- '[[Sangdoo Yun]]'
year: 2023
tags:
- paper
- dl_theory
- vit
- transformers
url: https://arxiv.org/abs/2305.00729
date: '2023-05-01'
---

> [!tldr] Abstract
> We present a comparative study on how and why contrastive learning (CL) and masked image modeling (MIM) differ in their representations and in their performance of downstream tasks. In particular, we demonstrate that self-supervised Vision Transformers (ViTs) have the following properties: (1) CL trains self-attentions to capture longer-range global patterns than MIM, such as the shape of an object, especially in the later layers of the ViT architecture. This CL property helps ViTs linearly separate images in their representation spaces. However, it also makes the self-attentions collapse into homogeneity for all query tokens and heads. Such homogeneity of self-attention reduces the diversity of representations, worsening scalability and dense prediction performance. (2) CL utilizes the low-frequency signals of the representations, but MIM utilizes high-frequencies. Since low- and high-frequency information respectively represent shapes and textures, CL is more shape-oriented and MIM more texture-oriented. (3) CL plays a crucial role in the later layers, while MIM mainly focuses on the early layers. Upon these analyses, we find that CL and MIM can complement each other and observe that even the simplest harmonization can help leverage the advantages of both methods. The code is available at [this https URL](https://github.com/naver-ai/cl-vs-mim).


## Notes
