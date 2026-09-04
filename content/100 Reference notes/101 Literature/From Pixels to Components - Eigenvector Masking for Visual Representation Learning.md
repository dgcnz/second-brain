---
authors:
- '[[Alice Bizeul]]'
- '[[Thomas Sutter]]'
- '[[Alain Ryser]]'
- "[[Bernhard Sch\xF6lkopf]]"
- "[[Julius von K\xFCgulgen]]"
- '[[Julia E. Vogt]]'
year: 2025
tags:
- paper
- vit
- ssl
- masked_image_modelling
- representation_learning
url: https://arxiv.org/abs/2502.06314
date: '2025-02-10'
---

> [!tldr] Abstract
> Predicting masked from visible parts of an image is a powerful self-supervised approach for visual representation learning. However, the common practice of masking random patches of pixels exhibits certain failure modes, which can prevent learning meaningful high-level features, as required for downstream tasks. We propose an alternative masking strategy that operates on a suitable transformation of the data rather than on the raw pixels. Specifically, we perform principal component analysis and then randomly mask a subset of components, which accounts for a fixed ratio of the data variance. The learning task then amounts to reconstructing the masked components from the visible ones. Compared to local patches of pixels, the principal components of images carry more global information. We thus posit that predicting masked from visible components involves more high-level features, allowing our masking strategy to extract more useful representations. This is corroborated by our empirical findings which demonstrate improved image classification performance for component over pixel masking. Our method thus constitutes a simple and robust data-driven alternative to traditional masked image modeling approaches.

