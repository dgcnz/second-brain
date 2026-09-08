---
authors:
  - "[[Lucas Degeorge]]"
  - "[[Paul Couairon]]"
  - "[[Arijit Ghosh]]"
  - "[[Alexei A. Efros]]"
  - "[[David Picard]]"
  - "[[Vicky Kalogeiton]]"
year: 2026
date: 2026-09-02
tags:
  - paper
url: https://arxiv.org/abs/2609.02748
draft: false
---


> [!tldr] Abstract
> Natural images follow a $1/f^2$ spectral distribution: most signal energy lies in the low spatial frequencies, while the perceptually important structures such as textures and edges occupy sparse high-frequency bands. Pixel-space reconstruction objectives, however, treat all spatial errors uniformly, causing low frequencies to dominate the optimization signal and delaying the learning of fine-scale details. In this work, we identify this objective-level spectral imbalance as a key inefficiency in training pixel-space flow models. To address it, we propose a Focal Log-Frequency Loss (f-loss), a spectrally balanced objective that equalizes the learning signal across frequencies, emphasizing high-frequency components that are otherwise underrepresented in pixel-space objectives. Building on this, we introduce a simple training strategy that combines frequency and pixel supervision: we first emphasize frequency-domain learning early to capture all frequencies, and then transition to standard pixel-space v-loss for spatial refinement. This balancing mitigates the low-frequency bias of pixel losses and aligns the training signal with the evolving needs of the model. Our approach is conceptually simple, requires no architectural changes, and acts as a drop-in replacement for flow matching losses. Across multiple model scales, it accelerates convergence by up to 40% while consistently improving FID and perceptual fidelity. We will release code and models.



## Notes

[Zotero Link](zotero://select/library/items/K6QA9PX7)
