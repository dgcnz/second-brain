---
authors:
- '[[Alex Lewandowski]]'
- "[[Micha\u0142 Bortkiewicz]]"
- '[[Saurabh Kumar]]'
- "[[Andr\xE1s Gy\xF6rgy]]"
- '[[Dale Schuurmans]]'
- '[[Mateusz Ostaszewski]]'
- '[[Marlos C. Machado]]'
year: 2024
tags:
- paper
- continual_learning
- spectral
- dl_theory
url: http://arxiv.org/abs/2406.06811
date: '2024-06-10'
---

> [!tldr] Abstract
> Loss of plasticity is a phenomenon where neural networks can become more difficult to train over the course of learning. Continual learning algorithms seek to mitigate this effect by sustaining good performance while maintaining network trainability. We develop a new technique for improving continual learning inspired by the observation that the singular values of the neural network parameters at initialization are an important factor for trainability during early phases of learning. From this perspective, we derive a new spectral regularizer for continual learning that better sustains these beneficial initialization properties throughout training. In particular, the regularizer keeps the maximum singular value of each layer close to one. Spectral regularization directly ensures that gradient diversity is maintained throughout training, which promotes continual trainability, while minimally interfering with performance in a single task. We present an experimental analysis that shows how the proposed spectral regularizer can sustain trainability and performance across a range of model architectures in continual supervised and reinforcement learning settings. Spectral regularization is less sensitive to hyperparameters while demonstrating better training in individual tasks, sustaining trainability as new tasks arrive, and achieving better generalization performance.



## Notes

[Zotero Link](zotero://select/library/items/F54K8ZZR)


