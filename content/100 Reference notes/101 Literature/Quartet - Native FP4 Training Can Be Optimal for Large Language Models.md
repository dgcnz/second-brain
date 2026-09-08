---
authors:
  - "[[Roberto L. Castro]]"
  - "[[Andrei Panferov]]"
  - "[[Soroush Tabesh]]"
  - "[[Oliver Sieberling]]"
  - "[[Jiale Chen]]"
  - "[[Mahdi Nikdan]]"
  - "[[Saleh Ashkboos]]"
  - "[[Dan Alistarh]]"
year: 2025
date: 2025-05-20
tags:
  - paper
url: https://arxiv.org/abs/2505.14669
draft: false
---


> [!tldr] Abstract
> Training large language models (LLMs) models directly in low-precision offers a way to address computational costs by improving both throughput and energy efficiency. For those purposes, NVIDIA's recent Blackwell architecture facilitates very low-precision operations using FP4 variants. Yet, current algorithms for training LLMs in FP4 precision face significant accuracy degradation and often rely on mixed-precision fallbacks. In this paper, we investigate hardware-supported FP4 training and introduce a new approach for accurate, end-to-end FP4 training with all the major computations (i.e., linear layers) in low precision. Through extensive evaluations on Llama-type models, we reveal a new low-precision scaling law that quantifies performance trade-offs across bit-widths and training setups. Guided by this investigation, we design an "optimal" technique in terms of accuracy-vs-computation, called Quartet. We implement Quartet using optimized CUDA kernels tailored for Blackwell, demonstrating that fully FP4-based training is a competitive alternative to FP16 half-precision and to FP8 training. Our code is available at https://github.com/IST-DASLab/Quartet.



## Notes

[Zotero Link](zotero://select/library/items/NEPNM6WK)
