---
authors:
  - "[[Parsa Esmati]]"
  - "[[Somjit Nath]]"
  - "[[Katja Hofmann]]"
  - "[[Derek Nowrouzezahrai]]"
  - "[[Samira Ebrahimi Kahou]]"
  - "[[Majid Mirmehdi]]"
year: 2026
date: 2026-06-03
tags:
  - paper
url: https://arxiv.org/abs/2606.05328
draft: false
---


> [!tldr] Abstract
> Modern video diffusion models generate increasingly realistic and temporally coherent videos, motivating their use as candidate world simulators. Yet it remains unclear whether these models internally encode physical structure, or merely reproduce motion patterns seen during training. We study this question by probing video diffusion models along latent trajectories corresponding to real videos with known physical plausibility. To obtain such trajectories, we approximately invert the deterministic sampling process by integrating the learned velocity field backward from a clean video latent to noise, giving access to the model's intermediate states and attention maps. Using these recovered trajectories, we show that physical plausibility is linearly decodable from diffusion transformer states across IntPhys and InfLevel, reaching around 81.27% average accuracy and outperforming dedicated representation-learning baselines such as V-JEPA and VideoMAE. Surprisingly, this signal is absent from the VAE latent input and emerges inside the denoising transformer itself, despite the model not being trained with a self-supervised predictive objective. These findings suggest that physically meaningful representations can arise as a byproduct of generative denoising.



## Notes

[Zotero Link](zotero://select/library/items/6WT53EFW)
