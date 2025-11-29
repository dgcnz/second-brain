---
authors:
  - "[[Zhan Tong]]"
  - "[[Yibing Song]]"
  - "[[Jue Wang]]"
  - "[[Limin Wang]]"
year: 2022
date: 2022-10-18
tags:
  - paper
  - video
  - ssl
url: http://arxiv.org/abs/2203.12602
share: true
---


> [!tldr] Abstract
> Pre-training video transformers on extra large-scale datasets is generally required to achieve premier performance on relatively small datasets. In this paper, we show that video masked autoencoders (VideoMAE) are data-efﬁcient learners for self-supervised video pre-training (SSVP). We are inspired by the recent ImageMAE [31] and propose customized video tube masking with an extremely high ratio. This simple design makes video reconstruction a more challenging and meaningful self-supervision task, thus encouraging extracting more effective video representations during the pre-training process. We obtain three important ﬁndings with VideoMAE: (1) An extremely high proportion of masking ratio (i.e., 90% to 95%) still yields favorable performance for VideoMAE. The temporally redundant video content enables higher masking ratio than that of images. (2) VideoMAE achieves impressive results on very small datasets (i.e., around 3k-4k videos) without using any extra data. This is partially ascribed to the challenging task of video reconstruction to enforce high-level structure learning. (3) VideoMAE shows that data quality is more important than data quantity for SSVP. Domain shift between pre-training and target datasets is an important factor. Notably, our VideoMAE with the vanilla ViT backbone can achieve 87.4% on Kinects-400, 75.4% on SomethingSomething V2, 91.3% on UCF101, and 62.6% on HMDB51, without using any extra data. Code is available at https://github.com/MCG-NJU/VideoMAE.



## Notes

[Zotero Link](zotero://select/library/items/8AYFTIK6)


