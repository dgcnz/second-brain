---
authors:
  - "[[Chuhan Zhang]]"
  - "[[Guillaume Le Moing]]"
  - "[[Skanda Koppula]]"
  - "[[Ignacio Rocco]]"
  - "[[Liliane Momeni]]"
  - "[[Junyu Xie]]"
  - "[[Shuyang Sun]]"
  - "[[Rahul Sukthankar]]"
  - "[[Joëlle K. Barral]]"
  - "[[Raia Hadsell]]"
  - "[[Zoubin Ghahramani]]"
  - "[[Andrew Zisserman]]"
  - "[[Junlin Zhang]]"
  - "[[Mehdi S. M. Sajjadi]]"
year: 2025
date: 2025-12-09
tags:
  - paper
url: https://arxiv.org/abs/2512.08924
draft: false
---


> [!tldr] Abstract
> Understanding and reconstructing the complex geometry and motion of dynamic scenes from video remains a formidable challenge in computer vision. This paper introduces D4RT, a simple yet powerful feedforward model designed to efficiently solve this task. D4RT utilizes a unified transformer architecture to jointly infer depth, spatio-temporal correspondence, and full camera parameters from a single video. Its core innovation is a novel querying mechanism that sidesteps the heavy computation of dense, per-frame decoding and the complexity of managing multiple, task-specific decoders. Our decoding interface allows the model to independently and flexibly probe the 3D position of any point in space and time. The result is a lightweight and highly scalable method that enables remarkably efficient training and inference. We demonstrate that our approach sets a new state of the art, outperforming previous methods across a wide spectrum of 4D reconstruction tasks. We refer to the project webpage for animated results: https://d4rt-paper.github.io/.



## Notes

[Zotero Link](zotero://select/library/items/EULTP6GX)
