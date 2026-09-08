---
authors:
  - "[[Francesco Gentile]]"
  - "[[Nicola Dall'Asen]]"
  - "[[Francesco Tonini]]"
  - "[[Massimiliano Mancini]]"
  - "[[Lorenzo Vaquero]]"
  - "[[Elisa Ricci]]"
year: 2026
date: 2026-03-25
tags:
  - paper
url: https://arxiv.org/abs/2603.24653
draft: false
---


> [!tldr] Abstract
> As vision-language models are deployed at scale, understanding their internal mechanisms becomes increasingly critical. Existing interpretability methods predominantly rely on activations, making them dataset-dependent, vulnerable to data bias, and often restricted to coarse head-level explanations. We introduce SITH (Semantic Inspection of Transformer Heads), a fully data-free, training-free framework that directly analyzes CLIP's vision transformer in weight space. For each attention head, we decompose its value-output matrix into singular vectors and interpret each one via COMP (Coherent Orthogonal Matching Pursuit), a new algorithm that explains them as sparse, semantically coherent combinations of human-interpretable concepts. We show that SITH yields coherent, faithful intra-head explanations, validated through reconstruction fidelity and interpretability experiments. This allows us to use SITH for precise, interpretable weight-space model edits that amplify or suppress specific concepts, improving downstream performance without retraining. Furthermore, we use SITH to study model adaptation, showing how fine-tuning primarily reweights a stable semantic basis rather than learning entirely new features.



## Notes

[Zotero Link](zotero://select/library/items/G2ZAF6JX)
