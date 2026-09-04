---
authors:
  - "[[Shivani Mall]]"
  - "[[Swarnim Jain]]"
  - "[[Joao F. Henriques]]"
year: 2026
date: 2026-08-03
tags:
  - paper
url: https://arxiv.org/abs/2608.02140
draft: false
---


> [!tldr] Abstract
> Much of the recent progress in image and video recognition has come at the cost of memory: larger models, increased resolution, and longer temporal contexts. An inevitable component is the quadratic (or larger) growth of memory and compute based on image resolution, which is a property of the grid sampling used in convolutional networks and vision transformers. In this work we study residual networks whose convolutional blocks have logarithmic-square growth instead, enabling them to process very high-resolution video quickly. The key insight is to use a residual architecture's residual stream as a high-resolution buffer, to which convolutional blocks only read and write via log-polar image warp operations. Layers adaptively focus on different parts of each frame, with very high resolution only near the focus point. A complete high-resolution representation is built up in the residual stream, analogous to eye saccades creating a complete picture in biological vision, and a theoretical construction is presented that eliminates the quadratic dependency of the residual stream resolution. Experiments demonstrate that our proposed HiResNets learn to foveate around scenes similarly to human vision, and have superior performance in difficult egocentric video recognition tasks, especially egocentric video with small objects and fine-grained recognition.



## Notes

[Zotero Link](zotero://select/library/items/J62CLN6W)
