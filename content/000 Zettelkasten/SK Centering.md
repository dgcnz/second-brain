---
tags:
  - contrastive_learning
share: true
---
In DINOv2, the original DINO “softmax‑centering”—where the teacher’s logits are calibrated by subtracting an exponential‑moving‑average (EMA) “center” vector before softmax—is replaced by an iterative batch‑level normalization using the Sinkhorn–Knopp (SK) algorithm from SwAV. This SK “centering” enforces a doubly‑stochastic assignment matrix (uniform marginals over both samples and prototypes), thereby centering the distribution to a uniform prior in an optimal‑transport sense rather than by EMA subtraction