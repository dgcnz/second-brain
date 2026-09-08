---
authors:
  - "[[Lanmiao Liu]]"
  - "[[Esam Ghaleb]]"
  - "[[Aslı Özyürek]]"
  - "[[Zerrin Yumak]]"
year: 2026
date: 2026-03-27
tags:
  - paper
url: https://arxiv.org/abs/2603.26553
draft: false
---


> [!tldr] Abstract
> While the field of co-speech gesture generation has seen significant advances, producing holistic, semantically grounded gestures remains a challenge. Existing approaches rely on external semantic retrieval methods, which limit their generalisation capability due to dependency on predefined linguistic rules. Flow-matching-based methods produce promising results; however, the network is optimised using only semantically congruent samples without exposure to negative examples, leading to learning rhythmic gestures rather than sparse motion, such as iconic and metaphoric gestures. Furthermore, by modelling body parts in isolation, the majority of methods fail to maintain crossmodal consistency. We introduce a Contrastive Flow Matching-based co-speech gesture generation model that uses mismatched audio-text conditions as negatives, training the velocity field to follow the correct motion trajectory while repelling semantically incongruent trajectories. Our model ensures cross-modal coherence by embedding text, audio, and holistic motion into a composite latent space via cosine and contrastive objectives. Extensive experiments and a user study demonstrate that our proposed approach outperforms state-of-the-art methods on two datasets, BEAT2 and SHOW.



## Notes

[Zotero Link](zotero://select/library/items/CKDL9T6F)
