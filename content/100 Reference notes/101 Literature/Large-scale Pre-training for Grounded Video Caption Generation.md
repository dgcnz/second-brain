---
authors:
  - "[[Evangelos Kazakos]]"
  - "[[Cordelia Schmid]]"
  - "[[Josef Sivic]]"
year: 2025
date: 2025-03-13
tags:
  - paper
url: https://arxiv.org/abs/2503.10781
draft: false
---


> [!tldr] Abstract
> We propose a novel approach for captioning and object grounding in video, where the objects in the caption are grounded in the video via temporally dense bounding boxes. We introduce the following contributions. First, we present a large-scale automatic annotation method that aggregates frame-level captions grounded with bounding boxes into temporally dense and consistent annotations. We apply this approach on the HowTo100M dataset to construct a large-scale pre-training dataset, named HowToGround1M. We also introduce a Grounded Video Caption Generation model, dubbed GROVE, and pre-train the model on HowToGround1M. Second, we introduce iGround--a dataset of 3513 videos with manually annotated captions and dense spatio-temporally grounded bounding boxes. This allows us to measure progress on this challenging problem, as well as to fine-tune our model on this small-scale but high-quality data. Third, we demonstrate that our approach achieves state-of-the-art results on the proposed iGround dataset, as well as on the VidSTG, ActivityNet-Entities, GroundingYouTube, and YouCook-Interactions datasets. Our ablations demonstrate the importance of pre-training on our automatically annotated HowToGround1M dataset followed by fine-tuning on the manually annotated iGround dataset and validate the key technical contributions of our model. The dataset and code are available at https://ekazakos.github.io/grounded_video_caption_generation/.



## Notes

[Zotero Link](zotero://select/library/items/5ACZKFCJ)
