---
authors:
  - "[[Jacob C Walker]]"
  - "[[Pedro Vélez]]"
  - "[[Luisa Polania Cabrera]]"
  - "[[Guangyao Zhou]]"
  - "[[Sayna Ebrahimi]]"
  - "[[Rishabh Kabra]]"
  - "[[Carl Doersch]]"
  - "[[Maks Ovsjanikov]]"
  - "[[João Carreira]]"
  - "[[Shiry Ginosar]]"
year: 2025
date: 2025-07-18
tags:
  - paper
url: https://arxiv.org/abs/2507.13942
draft: false
---


> [!tldr] Abstract
> Forecasting future events is a fundamental capability for general-purpose systems that plan or act across different levels of abstraction. Yet, evaluating whether a forecast is "correct" remains challenging due to the inherent uncertainty of the future. We propose a unified evaluation framework for assessing the forecasting capabilities of frozen vision backbones across diverse tasks and abstraction levels. Rather than focusing on single time steps, our framework evaluates entire trajectories and incorporates distributional metrics that better capture the multimodal nature of future outcomes. Given a frozen vision model, we train latent diffusion models to forecast future features directly in its representation space, which are then decoded via lightweight, task-specific readouts. This enables consistent evaluation across a suite of diverse tasks while isolating the forecasting capacity of the backbone itself. We apply our framework to nine diverse vision models, spanning image and video pretraining, contrastive and generative objectives, and with or without language supervision, and evaluate them on four forecasting tasks, from low-level pixel predictions to high-level object motion. We find that forecasting performance strongly correlates with perceptual quality and that the forecasting abilities of video synthesis models are comparable or exceed those pretrained in masking regimes across all levels of abstraction. However, language supervision does not consistently improve forecasting. Notably, video-pretrained models consistently outperform image-based ones.



## Notes

[Zotero Link](zotero://select/library/items/RTYXBTST)
