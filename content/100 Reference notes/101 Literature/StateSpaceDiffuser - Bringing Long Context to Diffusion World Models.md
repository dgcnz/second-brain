---
authors:
  - "[[Nedko Savov]]"
  - "[[Naser Kazemi]]"
  - "[[Deheng Zhang]]"
  - "[[Danda Paudel]]"
  - "[[Xi Wang]]"
  - "[[Luc Van Gool]]"
year: 2025
date: 2025-05-28
tags:
  - paper
url: https://arxiv.org/abs/2505.22246
draft: false
---


> [!tldr] Abstract
> World models have recently gained prominence for action-conditioned visual prediction in complex environments. However, relying on only a few recent observations causes them to lose long-term context. Consequently, within a few steps, the generated scenes drift from what was previously observed, undermining temporal coherence. This limitation, common in state-of-the-art world models, which are diffusion-based, stems from the lack of a lasting environment state. To address this problem, we introduce StateSpaceDiffuser, where a diffusion model is enabled to perform long-context tasks by integrating features from a state-space model, representing the entire interaction history. This design restores long-term memory while preserving the high-fidelity synthesis of diffusion models. To rigorously measure temporal consistency, we develop an evaluation protocol that probes a model's ability to reinstantiate seen content in extended rollouts. Comprehensive experiments show that StateSpaceDiffuser significantly outperforms a strong diffusion-only baseline, maintaining a coherent visual context for an order of magnitude more steps. It delivers consistent views in both a 2D maze navigation and a complex 3D environment. These results establish that bringing state-space representations into diffusion models is highly effective in demonstrating both visual details and long-term memory. Project page: https://insait-institute.github.io/StateSpaceDiffuser/.



## Notes

[Zotero Link](zotero://select/library/items/ZU3TSZG4)
