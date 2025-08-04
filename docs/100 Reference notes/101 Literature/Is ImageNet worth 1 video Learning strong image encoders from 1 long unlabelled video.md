---
authors:
  - "[[Shashanka Venkataramanan|Shashanka Venkataramanan]]"
  - "[[Mamshad Nayeem Rizve|Mamshad Nayeem Rizve]]"
  - "[[João Carreira|João Carreira]]"
  - "[[Yuki M. Asano|Yuki M. Asano]]"
  - "[[Yannis Avrithis|Yannis Avrithis]]"
year: 2024
tags:
  - paper
  - time-ssl
  - ssl
  - temporal
url: http://arxiv.org/abs/2310.08584
share: true
---


> [!tldr] Abstract
> Self-supervised learning has unlocked the potential of scaling up pretraining to billions of images, since annotation is unnecessary. But are we making the best use of data? How more economical can we be? In this work, we attempt to answer this question by making two contributions. First, we investigate first-person videos and introduce a “Walking Tours” dataset. These videos are high-resolution, hourslong, captured in a single uninterrupted take, depicting a large number of objects and actions with natural scene transitions. They are unlabeled and uncurated, thus realistic for self-supervision and comparable with human learning.



## Notes

[Zotero Link](zotero://select/library/items/PCPDD8R4)

DoRA (“DiscOver and tRAck”) is a self‑supervised pipeline that converts a pair of video frames into an object‑aware training view by first discovering prototypes in an **anchor** frame and then tracking them into a **target** frame before masking.

The teacher ViT processes $X_s$; for $k$ random heads the [CLS]→patch attention row gives $k$ score maps which, multiplied by the patch‑query matrix, yield prototypes $P\in\mathbb R^{k\times d}$.
A cost matrix $C=-PZ_s^\top$ against anchor patch embeddings enters three Sinkhorn‑Knopp normalisations; the entropic OT assignment $M^{*}$ produces refined, disjoint prototypes $P'=M^{*}Z_s$.
The same prototypes are projected onto target keys $K_t$ via one cross‑attention $A_t=\text{softmax}(P'K_t^{\top}/\sqrt d)$, the _first_ operation that touches the second frame and therefore the moment tracking happens. 
Rows of $A_t$ act as heat‑maps that indicate where each anchor‑object now lies. 
Random rows of $A_t$ are binarised and inverted to remove those objects from $X_t$, giving a masked image $\tilde X_t$; the teacher still sees full $X_t$.
A DINO‑style EMA loss then matches teacher and student [CLS] embeddings, enforcing temporal consistency yet object sensitivity.
