---
authors:
  - "[[Hugues Van Assel]]"
  - "[[Mark Ibrahim]]"
  - "[[Tommaso Biancalani]]"
  - "[[Aviv Regev]]"
  - "[[Randall Balestriero]]"
year: 2025
date: 2025-10-14
tags:
  - paper
  - dl-theory
  - ssl
url: http://arxiv.org/abs/2505.12477
draft: false
---


> [!tldr] Abstract
> Reconstruction and joint-embedding have emerged as two leading paradigms in Self-Supervised Learning (SSL). Reconstruction methods focus on recovering the original sample from a different view in input space. On the other hand, joint-embedding methods align the representations of different views in latent space. Both approaches offer compelling advantages, yet practitioners lack clear guidelines for choosing between them. In this work, we unveil the core mechanisms that distinguish each paradigm. By leveraging closed-form solutions for both approaches, we precisely characterize how the view generation process, e.g. data augmentation, impacts the learned representations. We then demonstrate that, unlike supervised learning, both SSL paradigms require a minimal alignment between augmentations and irrelevant features to achieve asymptotic optimality with increasing sample size. Our findings indicate that in scenarios where these irrelevant features have a large magnitude, joint-embedding methods are preferable because they impose a strictly weaker alignment condition compared to reconstruction-based methods. These results not only clarify the trade-offs between the two paradigms but also substantiate the empirical success of joint-embedding approaches on real-world challenging datasets.



## Notes

[Zotero Link](zotero://select/library/items/IHL6X3QS)
