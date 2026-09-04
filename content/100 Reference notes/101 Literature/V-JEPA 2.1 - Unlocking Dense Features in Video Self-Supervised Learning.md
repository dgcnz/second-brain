---
authors:
  - "[[Lorenzo Mur-Labadia]]"
  - "[[Matthew Muckley]]"
  - "[[Amir Bar]]"
  - "[[Mido Assran]]"
  - "[[Koustuv Sinha]]"
  - "[[Mike Rabbat]]"
  - "[[Yann LeCun]]"
  - "[[Nicolas Ballas]]"
  - "[[Adrien Bardes]]"
year: 2026
date: 2026-03-15
tags:
  - paper
url: https://arxiv.org/abs/2603.14482
draft: false
---


> [!tldr] Abstract
> We present V-JEPA 2.1, a family of self-supervised models that learn dense, high-quality visual representations for both images and videos while retaining strong global scene understanding. The approach combines four key components. First, a dense predictive loss uses a masking-based objective in which both visible and masked tokens contribute to the training signal, encouraging explicit spatial and temporal grounding. Second, deep self-supervision applies the self-supervised objective hierarchically across multiple intermediate encoder layers to improve representation quality. Third, multi-modal tokenizers enable unified training across images and videos. Finally, the model benefits from effective scaling in both model capacity and training data. Together, these design choices produce representations that are spatially structured, semantically coherent, and temporally consistent. Empirically, V-JEPA 2.1 achieves state-of-the-art performance on several challenging benchmarks, including 7.71 mAP on Ego4D for short-term object-interaction anticipation and 40.8 Recall@5 on EPIC-KITCHENS for high-level action anticipation, as well as a 20-point improvement in real-robot grasping success rate over V-JEPA-2 AC. The model also demonstrates strong performance in robotic navigation (5.687 ATE on TartanDrive), depth estimation (0.307 RMSE on NYUv2 with a linear probe), and global recognition (77.7 on Something-Something-V2). These results show that V-JEPA 2.1 significantly advances the state of the art in dense visual understanding and world modeling.



## Notes

[Zotero Link](zotero://select/library/items/CUULE985)
