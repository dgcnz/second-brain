---
authors:
  - "[[Zhinan Hou]]"
  - "[[Jiaqi Zhang]]"
  - "[[Xunliang Cai]]"
  - "[[Keyou You]]"
year: 2026
date: 2026-09-04
tags:
  - paper
url: https://arxiv.org/abs/2609.05198
draft: false
---


> [!tldr] Abstract
> On-Policy Distillation (OPD) has emerged as a widely adopted post-training paradigm for enhancing large language models in reasoning domains. However, the data-centric mechanisms in OPD remain relatively underexplored. This paper presents a empirical study of data efficiency and data selection in OPD. We begin by investigating an extreme setting: training OPD on only one example, namely 1-shot OPD. Surprisingly, we find that 1-shot OPD is consistently effective across all sampled training examples and harder examples often yield superior performance gain. We next investigate what actually drives the student model's improvement in the training data. Our analysis reveals that the improvement is not driven by high token entropy, but the longer CoT paths which hard problems naturally generate. Training on longer CoT can help maintain closer alignment with the teacher over a long reasoning horizon, and learn critical thinking patterns usually missing in short CoTs, such as reflection (e.g., ``Alternatively''). Based on these insights, we propose a simple data selection method that selects only hard examples for training, where even ``unsolvable'' examples that completely exceed the teacher's capability can be successfully used. Our experiments conducted on four models ranging from 1.5B to 7B show that training the student model on only 8 selected hard examples matches the performance of the 17K dataset baseline.



## Notes

[Zotero Link](zotero://select/library/items/L6BZJ9GM)
