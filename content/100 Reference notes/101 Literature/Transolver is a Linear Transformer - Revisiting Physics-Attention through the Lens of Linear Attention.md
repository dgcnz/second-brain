---
authors:
  - "[[Wenjie Hu]]"
  - "[[Sidun Liu]]"
  - "[[Peng Qiao]]"
  - "[[Zhenglun Sun]]"
  - "[[Yong Dou]]"
year: 2025
date: 2025-11-09
tags:
  - paper
url: https://arxiv.org/abs/2511.06294
draft: false
---


> [!tldr] Abstract
> Recent advances in Transformer-based Neural Operators have enabled significant progress in data-driven solvers for Partial Differential Equations (PDEs). Most current research has focused on reducing the quadratic complexity of attention to address the resulting low training and inference efficiency. Among these works, Transolver stands out as a representative method that introduces Physics-Attention to reduce computational costs. Physics-Attention projects grid points into slices for slice attention, then maps them back through deslicing. However, we observe that Physics-Attention can be reformulated as a special case of linear attention, and that the slice attention may even hurt the model performance. Based on these observations, we argue that its effectiveness primarily arises from the slice and deslice operations rather than interactions between slices. Building on this insight, we propose a two-step transformation to redesign Physics-Attention into a canonical linear attention, which we call Linear Attention Neural Operator (LinearNO). Our method achieves state-of-the-art performance on six standard PDE benchmarks, while reducing the number of parameters by an average of 40.0% and computational cost by 36.2%. Additionally, it delivers superior performance on two challenging, industrial-level datasets: AirfRANS and Shape-Net Car.



## Notes

[Zotero Link](zotero://select/library/items/LEA4MR3T)
