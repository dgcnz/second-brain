---
authors:
  - "[[Anurag Arnab]]"
  - "[[Ahmet Iscen]]"
  - "[[Mathilde Caron]]"
  - "[[Alireza Fathi]]"
  - "[[Cordelia Schmid]]"
year: 2025
date: 2025-07-01
tags:
  - paper
url: https://arxiv.org/abs/2507.02001
draft: false
---


> [!tldr] Abstract
> Despite recent advances in Vision-Language Models (VLMs), long-video understanding remains a challenging problem. Although state-of-the-art long-context VLMs can process around 1000 input frames, they still struggle to effectively leverage this sequence length, and succumb to irrelevant distractors within the context window. We present Temporal Chain of Thought, an inference strategy for video question-answering that curates the model's input context. We use the VLM itself to iteratively identify and extract the most relevant frames from the video, which are then used for answering. We demonstrate how leveraging more computation at inference-time to select the most relevant context leads to improvements in accuracy, in agreement with recent work on inference-time scaling of LLMs. Moreover, we achieve state-of-the-art results on 4 diverse video question-answering datasets, showing consistent improvements with 3 different VLMs. In particular, our method shines on longer videos which would not otherwise fit within the model's context window: On longer videos of more than 1 hour on LVBench, our approach using a context window of 32K outperforms the same VLM using standard inference with a 700K context window by 2.8 points.



## Notes

[Zotero Link](zotero://select/library/items/Q3CEQNCJ)
