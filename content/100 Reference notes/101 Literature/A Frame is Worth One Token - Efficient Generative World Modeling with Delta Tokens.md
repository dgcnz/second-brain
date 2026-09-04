---
authors:
  - "[[Tommie Kerssies]]"
  - "[[Gabriele Berton]]"
  - "[[Ju He]]"
  - "[[Qihang Yu]]"
  - "[[Wufei Ma]]"
  - "[[Daan de Geus]]"
  - "[[Gijs Dubbelman]]"
  - "[[Liang-Chieh Chen]]"
year: 2026
date: 2026-04-06
tags:
  - paper
url: https://arxiv.org/abs/2604.04913
draft: false
---


> [!tldr] Abstract
> Anticipating diverse future states is a central challenge in video world modeling. Discriminative world models produce a deterministic prediction that implicitly averages over possible futures, while existing generative world models remain computationally expensive. Recent work demonstrates that predicting the future in the feature space of a vision foundation model (VFM), rather than a latent space optimized for pixel reconstruction, requires significantly fewer world model parameters. However, most such approaches remain discriminative. In this work, we introduce DeltaTok, a tokenizer that encodes the VFM feature difference between consecutive frames into a single continuous "delta" token, and DeltaWorld, a generative world model operating on these tokens to efficiently generate diverse plausible futures. Delta tokens reduce video from a three-dimensional spatio-temporal representation to a one-dimensional temporal sequence, for example yielding a 1,024x token reduction with 512x512 frames. This compact representation enables tractable multi-hypothesis training, where many futures are generated in parallel and only the best is supervised. At inference, this leads to diverse predictions in a single forward pass. Experiments on dense forecasting tasks demonstrate that DeltaWorld forecasts futures that more closely align with real-world outcomes, while having over 35x fewer parameters and using 2,000x fewer FLOPs than existing generative world models. Code and weights: https://deltatok.github.io.



## Notes

[Zotero Link](zotero://select/library/items/M39WX9H6)
