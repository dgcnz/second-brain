---
authors:
  - "[[Nikhil Keetha]]"
  - "[[Norman Müller]]"
  - "[[Johannes Schönberger]]"
  - "[[Lorenzo Porzi]]"
  - "[[Yuchen Zhang]]"
  - "[[Tobias Fischer]]"
  - "[[Arno Knapitsch]]"
  - "[[Duncan Zauss]]"
  - "[[Ethan Weber]]"
  - "[[Nelson Antunes]]"
  - "[[Jonathon Luiten]]"
  - "[[Manuel Lopez-Antequera]]"
  - "[[Samuel Rota Bulò]]"
  - "[[Christian Richardt]]"
  - "[[Deva Ramanan]]"
  - "[[Sebastian Scherer]]"
  - "[[Peter Kontschieder]]"
year: 2025
date: 2025-09-16
tags:
  - paper
url: https://arxiv.org/abs/2509.13414
draft: false
---


> [!tldr] Abstract
> We introduce MapAnything, a unified transformer-based feed-forward model that ingests one or more images along with optional geometric inputs such as camera intrinsics, poses, depth, or partial reconstructions, and then directly regresses the metric 3D scene geometry and cameras. MapAnything leverages a factored representation of multi-view scene geometry, i.e., a collection of depth maps, local ray maps, camera poses, and a metric scale factor that effectively upgrades local reconstructions into a globally consistent metric frame. Standardizing the supervision and training across diverse datasets, along with flexible input augmentation, enables MapAnything to address a broad range of 3D vision tasks in a single feed-forward pass, including uncalibrated structure-from-motion, calibrated multi-view stereo, monocular depth estimation, camera localization, depth completion, and more. We provide extensive experimental analyses and model ablations demonstrating that MapAnything outperforms or matches specialist feed-forward models while offering more efficient joint training behavior, thus paving the way toward a universal 3D reconstruction backbone.



## Notes

[Zotero Link](zotero://select/library/items/4B39U754)
