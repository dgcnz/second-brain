---
authors:
  - "[[Lukas Knobel]]"
  - "[[Andrew Zisserman]]"
  - "[[Yuki M. Asano]]"
year: 2026
date: 2026-07-23
tags:
  - paper
url: https://arxiv.org/abs/2607.21576
draft: false
---


> [!tldr] Abstract
> Understanding motion in video is a fundamental challenge for visual learning, as frame-to-frame change entangles two sources of dynamics: camera motion and object motion. This decomposition has remained underexplored in representation learning, partly because these factors are tightly coupled in natural videos and difficult to supervise separately. Yet recovering it is important for learning robust motion representations that separate meaningful object dynamics from camera-induced variation. We study whether such structured motion representations can be recovered from frozen features of a pretrained image vision transformer. We propose the Structured Dynamics Model (SDM), which explicitly separates the dominant source of temporal change from residual dynamics through future-feature prediction, rather than representing video change with a single entangled latent or with unstructured, spatially dense transition tokens. Training combines self-supervised learning on real video with weak supervision of scene dynamics on synthetic Kubric data. We evaluate SDM on ProbeMotion, a new evaluation suite spanning synthetic and real videos with camera motion, object motion, and combined dynamics. SDM outperforms backbone baselines using global CLS or average-pooled features, and compares favorably to strongly supervised representations such as VGGT on several probes, despite using substantially weaker supervision. These results suggest that pretrained image models can be readily repurposed into structured video-dynamics representations, providing a useful inductive bias for learning and analyzing latent video dynamics.



## Notes

[Zotero Link](zotero://select/library/items/3J4RKHQX)
