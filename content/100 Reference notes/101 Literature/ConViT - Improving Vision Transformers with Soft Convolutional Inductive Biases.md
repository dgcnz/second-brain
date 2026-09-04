---
authors:
  - "[[Stéphane d'Ascoli]]"
  - "[[Hugo Touvron]]"
  - "[[Matthew Leavitt]]"
  - "[[Ari Morcos]]"
  - "[[Giulio Biroli]]"
  - "[[Levent Sagun]]"
year: 2022
date: 2022-11-01
tags:
  - paper
  - dl_theory
  - vit
url: http://arxiv.org/abs/2103.10697
draft: true
---


> [!tldr] Abstract
> Convolutional architectures have proven extremely successful for vision tasks. Their hard inductive biases enable sample-efﬁcient learning, but come at the cost of a potentially lower performance ceiling. Vision Transformers (ViTs) rely on more ﬂexible self-attention layers, and have recently outperformed CNNs for image classiﬁcation. However, they require costly pre-training on large external datasets or distillation from pretrained convolutional networks. In this paper, we ask the following question: is it possible to combine the strengths of these two architectures while avoiding their respective limitations? To this end, we introduce gated positional self-attention (GPSA), a form of positional self-attention which can be equipped with a “soft” convolutional inductive bias. We initialize the GPSA layers to mimic the locality of convolutional layers, then give each attention head the freedom to escape locality by adjusting a gating parameter regulating the attention paid to position versus content information. The resulting convolutionallike ViT architecture, ConViT, outperforms the DeiT (Touvron et al., 2020) on ImageNet, while offering a much improved sample efﬁciency. We further investigate the role of locality in learning by ﬁrst quantifying how it is encouraged in vanilla self-attention layers, then analyzing how it is escaped in GPSA layers. We conclude by presenting various ablations to better understand the success of the ConViT. Our code and models are released publicly at https://github.com/ facebookresearch/convit.



## Notes

[Zotero Link](zotero://select/library/items/DVXP7CU7)

From [[Early Convolutions Help Transformers See Better]], where [9] is this paper:
> We did not observe evidence that the hard locality constraint in early layers hampers the representational capacity of the network, as might be feared [9].
> [...]
> This perspective resonates with the findings of [9], who observe that early transformer blocks prefer to learn more local attention patterns than later blocks.


This is contrary to [[How do vision transformers work?]], as they claim that locality constraint is beneficial to ViTs. 

Haven't fully read this paper, so the above contradiction might be incorrect.
