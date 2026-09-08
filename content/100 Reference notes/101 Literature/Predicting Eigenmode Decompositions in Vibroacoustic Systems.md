---
authors:
  - "[[Christian Libner]]"
  - "[[Jan van Delden]]"
  - "[[Julius Schultz]]"
  - "[[Alexander S. Ecker]]"
  - "[[Timo Lüddecke]]"
year: 2025
date: 2025-11-21
tags:
  - paper
url: https://openreview.net/forum?id=8KwIJIrHBt
draft: false
---


> [!tldr] Abstract
> Neural surrogate models can predict the dynamics of physical systems and generalize across different structures. However, they typically rely on generic representations that are not physically motivated. The dynamics of many physical systems, in contrast, can be efficiently described through a mode superposition. Accordingly, any system state can be decomposed into fundamental modes, where the influence of each mode is determined by a time-varying amplitude. Directly predicting such a decomposition with neural surrogate models could serve as an efficient and meaningful representation of the system's dynamical behaviour. In this work, we present an implementation of this idea, the Mode Operator Network (ModeONet). We apply it to predicting velocity fields of rectangular plates with indentation patterns, a dynamical system in which vibrations can be described through a superposition of eigenmodes of the plate. Our network learns the structure-dependent mode shapes and frequency dependent coefficients to construct the plate's velocity field. ModeONet achieves on-par accuracy with the state-of-the-art method, is 18 times faster, and allows for easier interpretability of the system's behaviour, which could enable future applications to design optimization.



## Notes

[Zotero Link](zotero://select/library/items/RC5E4ISM)
