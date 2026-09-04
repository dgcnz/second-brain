---
authors:
  - "[[Pinelopi Papalampidi]]"
  - "[[Skanda Koppula]]"
  - "[[Shreya Pathak]]"
  - "[[Justin Chiu]]"
  - "[[Joe Heyward]]"
  - "[[Viorica Patraucean]]"
  - "[[Jiajun Shen]]"
  - "[[Antoine Miech]]"
  - "[[Andrew Zisserman]]"
  - "[[Aida Nematzadeh]]"
year: 2024
date: 2024-12-30
tags:
  - paper
  - vit
  - contrastive_learning
  - video
url: http://arxiv.org/abs/2312.07395
draft: false
---


> [!tldr] Abstract
> Understanding long, real-world videos requires modeling of long-range visual dependencies. To this end, we explore video-first architectures, building on the common paradigm of transferring large-scale, image–text models to video via shallow temporal fusion. However, we expose two limitations to the approach: (1) decreased spatial capabilities, likely due to poor video–language alignment in standard video datasets, and (2) higher memory consumption, bottlenecking the number of frames that can be processed. To mitigate the memory bottleneck, we systematically analyze the memory/accuracy trade-off of various efficient methods: factorized attention, parameter-efficient imageto-video adaptation, input masking, and multi-resolution patchification. Surprisingly, simply masking large portions of the video (up to 75%) during contrastive pre-training proves to be one of the most robust ways to scale encoders to videos up to 4.3 minutes at 1 FPS. Our simple approach for training long video-to-text models, which scales to 1B parameters, does not add new architectural complexity and is able to outperform the popular paradigm of using much larger LLMs as an information aggregator over segmentbased information on benchmarks with long-range temporal dependencies (YouCook2, EgoSchema).



## Notes

[Zotero Link](zotero://select/library/items/HK9NJY65)
