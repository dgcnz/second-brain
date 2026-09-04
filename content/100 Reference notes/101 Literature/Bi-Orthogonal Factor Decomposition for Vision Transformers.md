---
authors:
  - "[[Fenil R. Doshi]]"
  - "[[Thomas Fel]]"
  - "[[Talia Konkle]]"
  - "[[George Alvarez]]"
year: 2026
date: 2026-01-08
tags:
  - paper
  - interpretability
  - vit
  - representation_analysis
url: http://arxiv.org/abs/2601.05328
draft: false
---


> [!tldr] Abstract
> Self-attention is the central computational primitive of Vision Transformers, yet we lack a principled understanding of what information attention mechanisms exchange between tokens. Attention maps describe where weight mass concentrates; they do not reveal whether queries and keys trade position, content, or both. We introduce Bi-orthogonal Factor Decomposition (BFD), a two-stage analytical framework: first, an ANOVA-based decomposition statistically disentangles token activations into orthogonal positional and content factors; second, SVD of the query-key interaction matrix QK^T exposes bi-orthogonal modes that reveal how these factors mediate communication. After validating proper isolation of position and content, we apply BFD to state-of-the-art vision models and uncover three phenomena.(i) Attention operates primarily through content. Content-content interactions dominate attention energy, followed by content-position coupling. DINOv2 allocates more energy to content-position than supervised models and distributes computation across a richer mode spectrum. (ii) Attention mechanisms exhibit specialization: heads differentiate into content-content, content-position, and position-position operators, while singular modes within heads show analogous specialization. (iii) DINOv2's superior holistic shape processing emerges from intermediate layers that simultaneously preserve positional structure while contextually enriching semantic content. Overall, BFD exposes how tokens interact through attention and which informational factors - positional or semantic - mediate their communication, yielding practical insights into vision transformer mechanisms.



## Notes

[Zotero Link](zotero://select/library/items/MNZEWRIJ)
