---
authors:
  - "[[Chaitanya Ryali]]"
  - "[[Yuan-Ting Hu]]"
  - "[[Daniel Bolya]]"
  - "[[Chen Wei]]"
  - "[[Haoqi Fan]]"
  - "[[Po-Yao Huang]]"
  - "[[Vaibhav Aggarwal]]"
  - "[[Arkabandhu Chowdhury]]"
  - "[[Omid Poursaeed]]"
  - "[[Judy Hoffman]]"
  - "[[Jitendra Malik]]"
  - "[[Yanghao Li]]"
  - "[[Christoph Feichtenhofer]]"
year: 2023
date: 2023-06-01
tags:
  - paper
  - vit
  - hierarchical
  - inductive_bias
url: http://arxiv.org/abs/2306.00989
draft: false
---


> [!tldr] Abstract
> Modern hierarchical vision transformers have added several vision-specific components in the pursuit of supervised classification performance. While these components lead to effective accuracies and attractive FLOP counts, the added complexity actually makes these transformers slower than their vanilla ViT counterparts. In this paper, we argue that this additional bulk is unnecessary. By pretraining with a strong visual pretext task (MAE), we can strip out all the bells-and-whistles from a state-of-the-art multi-stage vision transformer without losing accuracy. In the process, we create Hiera, an extremely simple hierarchical vision transformer that is more accurate than previous models while being significantly faster both at inference and during training. We evaluate Hiera on a variety of tasks for image and video recognition. Our code and models are available at https://github.com/facebookresearch/hiera.



## Notes

[Zotero Link](zotero://select/library/items/2IGFVADE)
