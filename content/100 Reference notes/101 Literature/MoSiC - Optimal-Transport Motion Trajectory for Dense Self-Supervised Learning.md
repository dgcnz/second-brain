---
authors:
- '[[Mohammadreza Salehi]]'
- '[[Shashanka Venkataramanan]]'
- '[[Ioana Simion]]'
- '[[Efstratios Gavves]]'
- '[[Cees G. M. Snoek]]'
- '[[Yuki M. Asano]]'
year: 2025
tags:
- paper
- computer_vision
- ssl
url: http://arxiv.org/abs/2506.08694
date: '2025-06-10'
---

> [!tldr] Abstract
> Dense self-supervised learning has shown great promise for learning pixel- and patch-level representations, but extending it to videos remains challenging due to the complexity of motion dynamics. Existing approaches struggle as they rely on static augmentations that fail under object deformations, occlusions, and camera movement, leading to inconsistent feature learning over time. We propose a motion-guided self-supervised learning framework that clusters dense point tracks to learn spatiotemporally consistent representations. By leveraging an off-the-shelf point tracker, we extract long-range motion trajectories and optimize feature clustering through a momentum-encoder-based optimal transport mechanism. To ensure temporal coherence, we propagate cluster assignments along tracked points, enforcing feature consistency across views despite viewpoint changes. Integrating motion as an implicit supervisory signal, our method learns representations that generalize across frames, improving robustness in dynamic scenes and challenging occlusion scenarios. By initializing from strong image-pretrained models and leveraging video data for training, we improve state-of-the-art by 1% to 6% on six image and video datasets and four evaluation benchmarks. The implementation is publicly available at our GitHub repository: https://github.com/SMSD75/MoSiC/tree/main



## Notes

[Zotero Link](zotero://select/library/items/DUMAIZEU)
