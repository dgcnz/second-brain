---
authors:
  - "[[HyeonJun Lee]]"
  - "[[Hyeonsik Jo]]"
  - "[[Jinwoo Chung]]"
  - "[[Jangho Kim]]"
year: 2026
date: 2026-08-11
tags:
  - paper
url: https://arxiv.org/abs/2608.10709
draft: false
---


> [!tldr] Abstract
> Quantization-Aware Training (QAT) enables the deployment of quantized models with minimal accuracy degradation. However, in practical scenarios, training labels are often unavailable due to privacy, copyright, or cost constraints. Knowledge Distillation (KD) is a common approach to address this challenge, but we observe that prior work combining QAT with KD suffers from a fundamental limitation: during distillation, the range mismatch between the teacher and the quantized student model induces an unattainable residual, resulting in an irreducible lower bound on the distillation loss. Motivated by this observation, we propose SQuaT (Student-Aware Quantized Teacher Features), a label-free QAT framework with KD that theoretically eliminates this lower bound by applying the student's quantization parameters to quantize the teacher's features during distillation. Through comprehensive experiments across diverse settings, we demonstrate that SQuaT consistently outperforms strong baselines, with particularly pronounced gains in extreme low-bit (e.g., 1- and 2-bit) settings. Furthermore, extensive evaluations across various model design choices show that our approach does not rely on specific architectural assumptions, making it broadly applicable across diverse architectures and quantization settings. The source code is available at https://github.com/lcdbsa522/SQuaT.



## Notes

[Zotero Link](zotero://select/library/items/9CLM4B38)
