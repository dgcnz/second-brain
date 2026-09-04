---
authors:
  - "[[Ivana Balažević]]"
  - "[[Yuge Shi]]"
  - "[[Pinelopi Papalampidi]]"
  - "[[Rahma Chaabouni]]"
  - "[[Skanda Koppula]]"
  - "[[Olivier J. Hénaff]]"
year: 2024
date: 2024-05-31
tags:
  - paper
  - video
  - vit
  - memory
url: http://arxiv.org/abs/2402.05861
draft: false
---

> [!tldr] Abstract
> Most transformer-based video encoders are limited to short temporal contexts due to their quadratic complexity. While various attempts have been made to extend this context, this has often come at the cost of both conceptual and computational complexity. Instead, we propose to re-purpose existing pretrained video transformers by simply fine-tuning them to attend to memories derived non-parametrically from past activations. By leveraging redundancy reduction, our memoryconsolidated vision transformer (MC-ViT) effortlessly extends its context far into the past and exhibits excellent scaling behavior when learning from longer videos. In doing so, MC-ViT sets a new state-of-the-art in long-context video understanding on EgoSchema, Perception Test, and Diving48, outperforming methods that benefit from orders of magnitude more parameters.



## Notes

Basically, you have two things.

1. A 3D ViT/ViVit/Video ViT that does full spatiotemporal attention on a short segment 
2. A mechanism to attend to past long-term memories.

The simplest case of this mechanism is illustrated by the MA-ViT case, which is in essence, storing the keys and values of the previous segments (at each layer) and including them in the current segment's attention. Let's say we have processed segment A consisting of timesteps `1...t-1` and we're processing segment B consisting of timesteps `t+1 ... 2*t`. At the current segment, what is happening is effectively full causal segment spatiotemporal attention: Queries at timesteps `t+1, ... 2*t` can attend to each other and refine themselves while also attend to previous timesteps without having the ability to write to them.

MC-ViT is an extension that aims to reduce this kv cache in non-parametric ways (k-means, random, etc).

[Zotero Link](zotero://select/library/items/GC8JSWMD)
