---
authors:
  - "[[Nikos Giakoumoglou]]"
  - "[[Paschalis Giakoumoglou]]"
  - "[[Tania Stathaki]]"
year: 2026
date: 2026-08-08
tags:
  - paper
url: https://arxiv.org/abs/2608.08309
draft: false
---


> [!tldr] Abstract
> We argue that learning visual representations without labels requires a training signal jointly complete across three non-overlapping objectives: semantic invariance across augmented views, patch-level spatial prediction, and representational non-degeneracy. We formalize these as the observation, prediction, and regularization principles and prove (i) that combining observation and prediction without regularization admits the constant encoder as a global minimizer under negative-free alignment; (ii) that the two objectives are gradient-complementary and structurally non-conflicting at the encoder output; and (iii) that the momentum encoder converges to the same fixed point as the online encoder and provides no collapse guarantee at convergence. Contrastive alignment provides only self-limiting collapse resistance, formalized via an explicit gradient-decay argument. Dropping prediction withholds the spatial training signal by construction; dropping observation forfeits cross-view semantic invariance by construction; at the scale we study, no pair substitutes for the third. Every major self-supervised method is a special case of a single unified energy decomposition. We pair every theoretical claim with a controlled experiment, including a patch-retrieval evaluation for the spatial consequence of prediction.



## Notes

[Zotero Link](zotero://select/library/items/XJFA6WW5)
