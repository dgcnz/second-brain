---
authors:
  - "[[Nguyen Xuan-Vu]]"
  - "[[Octavian Susanu]]"
  - "[[Daniel Armstrong]]"
  - "[[Philippe Schwaller]]"
year: 2026
date: 2026-08-27
tags:
  - paper
url: https://arxiv.org/abs/2608.27429
draft: false
---


> [!tldr] Abstract
> Chemical reactions are fundamentally transformations in electron space, yet most machine learning approaches model them either through de novo generation of product molecules or through heuristic graph edits that operate directly on molecular topology. We introduce MAELLE (MechAnistic Edit fLow-matching on eLectron rEarrangements), which instead models reactions as discrete flow matching over electron occupation vectors. Concretely, we formulate the reactant-to-product mapping as a Continuous-time Markov Chain (CTMC) over the graph-structured integer-valued electron occupation space defined on all bonding, non-bonding, and hydrogen sites. To construct the interpolants between the reactants and products, we generalize the discrete flow matching mixture path to an edit-based formulation, where the electron moves are interpolated using Optimal Transport, yielding a mechanism-like set of moves without elementary step annotations. MAELLE achieves competitive performance on the USPTO-480K benchmark compared with leading reaction prediction models. Beyond in-distribution learning, we evaluate robustness across two out-of-distribution settings - structural complexity and reaction type - and find that MAELLE maintains strong performance where existing methods degrade. Finally, because the learned flow operates over the full electron redistribution, MAELLE naturally recovers mechanistic trajectories that align with known chemistry and can predict side products of a reaction.



## Notes

[Zotero Link](zotero://select/library/items/NL5JAYSJ)
