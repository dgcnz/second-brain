---
authors:
  - "[[Konstantin Mark]]"
  - "[[Leonard Galustian]]"
  - "[[Maximilian P. -P. Kovar]]"
  - "[[Esther Heid]]"
year: 2025
date: 2025-09-01
tags:
  - paper
url: https://arxiv.org/abs/2509.01543
draft: false
---


> [!tldr] Abstract
> Conditional Flow Matching(CFM) represents a fast and high-quality approach to generative modelling, but in many applications it is of interest to steer the generated samples towards precise requirements. While steering approaches like gradient-based guidance, sequential Monte Carlo steering or Feynman-Kac steering are well established for diffusion models, they have not been extended to flow matching approaches yet. In this work, we formulate this requirement as tilting the output with an energy potential. We derive, for the first time, Feynman-Kac steering for CFM. We evaluate our approach on a set of synthetic tasks, including the generation of tilted distributions in a high-dimensional space, which is a particularly challenging case for steering approaches. We then demonstrate the impact of Feynman-Kac steered CFM on the previously unsolved challenge of generated transition states of chemical reactions with the correct chirality, where the reactants or products can have a different handedness, leading to geometric constraints of the viable reaction pathways connecting reactants and products. Code to reproduce this study is avaiable open-source at https://github.com/heid-lab/fkflow.



## Notes

[Zotero Link](zotero://select/library/items/Q353K28R)
