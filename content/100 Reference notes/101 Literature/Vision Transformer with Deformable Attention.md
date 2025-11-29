---
authors:
  - "[[Zhuofan Xia]]"
  - "[[Xuran Pan]]"
  - "[[Shiji Song]]"
  - "[[Li Erran Li]]"
  - "[[Gao Huang]]"
year: 2022
tags:
  - paper
  - transformers
  - computer_vision
url: http://arxiv.org/abs/2201.00520
share: true
---


> [!tldr] Abstract
> Transformers have recently shown superior performances on various vision tasks. The large, sometimes even global, receptive ﬁeld endows Transformer models with higher representation power over their CNN counterparts. Nevertheless, simply enlarging receptive ﬁeld also gives rise to several concerns. On the one hand, using dense attention e.g., in ViT, leads to excessive memory and computational cost, and features can be inﬂuenced by irrelevant parts which are beyond the region of interests. On the other hand, the sparse attention adopted in PVT or Swin Transformer is data agnostic and may limit the ability to model long range relations. To mitigate these issues, we propose a novel deformable self-attention module, where the positions of key and value pairs in self-attention are selected in a data-dependent way. This ﬂexible scheme enables the self-attention module to focus on relevant regions and capture more informative features. On this basis, we present Deformable Attention Transformer, a general backbone model with deformable attention for both image classiﬁcation and dense prediction tasks. Extensive experiments show that our models achieve consistently improved results on comprehensive benchmarks. Code is available at https://github.com/LeapLabTHU/DAT.



## Notes

[Zotero Link](zotero://select/library/items/UAJJSLKP)


