---
authors:
  - "[[Basile Terver]]"
  - "[[Tsung-Yen Yang]]"
  - "[[Jean Ponce]]"
  - "[[Adrien Bardes]]"
  - "[[Yann LeCun]]"
year: 2026
date: 2026-01-08
tags:
  - paper
  - video
  - world-models
  - vit
url: http://arxiv.org/abs/2512.24497
draft: false
---


> [!tldr] Abstract
> A long-standing challenge in AI is to develop agents capable of solving a wide range of physical tasks and generalizing to new, unseen tasks and environments. A popular recent approach involves training a world model from state-action trajectories and subsequently use it with a planning algorithm to solve new tasks. Planning is commonly performed in the input space, but a recent family of methods has introduced planning algorithms that optimize in the learned representation space of the world model, with the promise that abstracting irrelevant details yields more efficient planning. In this work, we characterize models from this family as JEPA-WMs and investigate the technical choices that make algorithms from this class work. We propose a comprehensive study of several key components with the objective of finding the optimal approach within the family. We conducted experiments using both simulated environments and real-world robotic data, and studied how the model architecture, the training objective, and the planning algorithm affect planning success. We combine our findings to propose a model that outperforms two established baselines, DINO-WM and V-JEPA-2-AC, in both navigation and manipulation tasks. Code, data and checkpoints are available at https://github.com/facebookresearch/jepa-wms.



## Notes

[Zotero Link](zotero://select/library/items/YS3B6VW4)
