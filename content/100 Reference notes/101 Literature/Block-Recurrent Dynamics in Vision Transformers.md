---
authors:
  - "[[Mozes Jacobs]]"
  - "[[Thomas Fel]]"
  - "[[Richard Hakim]]"
  - "[[Alessandra Brondetta]]"
  - "[[Demba Ba]]"
  - "[[T. Andy Keller]]"
year: 2025
date: 2025-12-23
tags:
  - paper
url: https://arxiv.org/abs/2512.19941
draft: false
---


> [!tldr] Abstract
> As Vision Transformers (ViTs) become standard vision backbones, a mechanistic account of their computational phenomenology is essential. Despite architectural cues that hint at dynamical structure, there is no settled framework that interprets Transformer depth as a well-characterized flow. In this work, we introduce the Block-Recurrent Hypothesis (BRH), arguing that trained ViTs admit a block-recurrent depth structure such that the computation of the original $L$ blocks can be accurately rewritten using only $k \ll L$ distinct blocks applied recurrently. Across diverse ViTs, between-layer representational similarity matrices suggest few contiguous phases. To determine whether these phases reflect genuinely reusable computation, we train block-recurrent surrogates of pretrained ViTs: Recurrent Approximations to Phase-structured TransfORmers (Raptor). In small-scale, we demonstrate that stochastic depth and training promote recurrent structure and subsequently correlate with our ability to accurately fit Raptor. We then provide an empirical existence proof for BRH by training a Raptor model to recover $96\%$ of DINOv2 ImageNet-1k linear probe accuracy in only 2 blocks at equivalent runtime. Finally, we leverage our hypothesis to develop a program of Dynamical Interpretability. We find i) directional convergence into class-dependent angular basins with self-correcting trajectories under small perturbations, ii) token-specific dynamics, where cls executes sharp late reorientations while patch tokens exhibit strong late-stage coherence toward their mean direction, and iii) a collapse to low rank updates in late depth, consistent with convergence to low-dimensional attractors. Altogether, we find a compact recurrent program emerges along ViT depth, pointing to a low-complexity normative solution that enables these models to be studied through principled dynamical systems analysis.



## Notes

[Zotero Link](zotero://select/library/items/UHCJT9I6)
