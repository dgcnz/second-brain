---
authors:
  - "[[Yifu Qiu]]"
  - "[[Yftah Ziser]]"
  - "[[Anna Korhonen]]"
  - "[[Shay B. Cohen]]"
  - "[[Edoardo Ponti]]"
year: 2025
date: 2025-06-06
tags:
  - paper
url: https://arxiv.org/abs/2506.06006
draft: false
---


> [!tldr] Abstract
> Can unified vision-language models (VLMs) perform forward dynamics prediction (FDP), i.e., predicting the future state (in image form) given the previous observation and an action (in language form)? We find that VLMs struggle to generate physically plausible transitions between frames from instructions. Nevertheless, we identify a crucial asymmetry in multimodal grounding: fine-tuning a VLM to learn inverse dynamics prediction (IDP)-effectively captioning the action between frames-is significantly easier than learning FDP. In turn, IDP can be used to bootstrap FDP through two main strategies: 1) weakly supervised learning from synthetic data and 2) inference time verification. Firstly, IDP can annotate actions for unlabelled pairs of video frame observations to expand the training data scale for FDP. Secondly, IDP can assign rewards to multiple samples of FDP to score them, effectively guiding search at inference time. We evaluate the FDP resulting from both strategies through the task of action-centric image editing on Aurora-Bench with two families of VLMs. Despite remaining general-purpose, our best model achieves a performance competitive with state-of-the-art image editing models, improving on them by a margin between 7% and 13% according to GPT4o-as-judge, and achieving the best average human evaluation across all subsets of Aurora-Bench.



## Notes

[Zotero Link](zotero://select/library/items/9SLKI8F8)
