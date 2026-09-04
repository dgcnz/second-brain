---
authors:
  - "[[Zhipeng Cai]]"
  - "[[Ching-Feng Yeh]]"
  - "[[Hu Xu]]"
  - "[[Zhuang Liu]]"
  - "[[Gregory Meyer]]"
  - "[[Xinjie Lei]]"
  - "[[Changsheng Zhao]]"
  - "[[Shang-Wen Li]]"
  - "[[Vikas Chandra]]"
  - "[[Yangyang Shi]]"
year: 2025
date: 2025-09-29
tags:
  - paper
url: https://arxiv.org/abs/2509.25413
draft: false
---


> [!tldr] Abstract
> Vision language models (VLMs) can flexibly address various vision tasks through text interactions. Although successful in semantic understanding, state-of-the-art VLMs including GPT-5 still struggle in understanding 3D from 2D inputs. On the other hand, expert pure vision models achieve super-human accuracy in metric depth estimation, a key 3D understanding task. However, they require task-specific architectures and losses. Such difference motivates us to ask: Can VLMs reach expert-level accuracy without architecture or loss change? We take per-pixel metric depth estimation as the representative task and show that the answer is yes! Surprisingly, comprehensive analysis shows that text-based supervised-finetuning with sparse labels is sufficient for VLMs to unlock strong 3D understanding, no dense prediction head or complex regression/regularization loss is needed. The bottleneck for VLMs lies actually in pixel reference and cross-dataset camera ambiguity, which we address through visual prompting and intrinsic-conditioned augmentation. With much smaller models, our method DepthLM surpasses the accuracy of most advanced VLMs by over 2x, making VLMs for the first time comparable with pure vision models. Interestingly, without explicit enforcement during training, VLMs trained with DepthLM naturally avoids over-smoothing, having much fewer flying points at boundary regions than pure vision models. The simplicity of DepthLM also enables a single VLM to cover various 3D tasks beyond metric depth. Our code and model will be released at the link below.



## Notes

[Zotero Link](zotero://select/library/items/ZTZK2TWC)
