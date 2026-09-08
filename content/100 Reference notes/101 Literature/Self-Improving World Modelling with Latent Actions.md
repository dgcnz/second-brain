---
authors:
  - "[[Yifu Qiu]]"
  - "[[Zheng Zhao]]"
  - "[[Waylon Li]]"
  - "[[Yftah Ziser]]"
  - "[[Anna Korhonen]]"
  - "[[Shay B. Cohen]]"
  - "[[Edoardo Ponti]]"
year: 2026
date: 2026-02-05
tags:
  - paper
url: https://arxiv.org/abs/2602.06130
draft: false
---


> [!tldr] Abstract
> Internal modelling of the world -- predicting transitions between previous states $X$ and next states $Y$ under actions $Z$ -- is essential to reasoning and planning for LLMs and VLMs. Learning such models typically requires costly action-labelled trajectories. We propose SWIRL, a self-improvement framework that learns from state-only sequences by treating actions as a latent variable and alternating between Forward World Modelling (FWM) $P_θ(Y|X,Z)$ and an Inverse Dynamics Modelling (IDM) $Q_φ(Z|X,Y)$. SWIRL iterates two phases: (1) Variational Information Maximisation, which updates the FWM to generate next states that maximise conditional mutual information with latent actions given prior states, encouraging identifiable consistency; and (2) ELBO Maximisation, which updates the IDM to explain observed transitions, effectively performing coordinate ascent. Both models are trained with reinforcement learning (specifically, GRPO) with the opposite frozen model's log-probability as a reward signal. We provide theoretical learnability guarantees for both updates, and evaluate SWIRL on LLMs and VLMs across multiple environments: single-turn and multi-turn open-world visual dynamics and synthetic textual environments for physics, web, and tool calling. SWIRL achieves gains of 16% on AURORABench, 28% on ByteMorph, 16% on WorldPredictionBench, and 14% on StableToolBench.



## Notes

[Zotero Link](zotero://select/library/items/LJJMBU99)
