---
authors:
  - "[[Yu Hu]]"
  - "[[Jianyang Gu]]"
  - "[[Hao Liu]]"
  - "[[Yue Cao]]"
  - "[[Jozsef Hamari]]"
  - "[[Zheng Liu]]"
  - "[[Mohsen Zardadi]]"
year: 
date: 
tags:
  - paper
url: https://openaccess.thecvf.com/content/CVPR2026/html/Hu_AVION_Aerial_Vision-Language_Instruction_from_Offline_Teacher_to_Prompt-Tuned_Network_CVPR_2026_paper.html
draft: false
---


> [!tldr] Abstract
> Adapting vision-language models to remote sensing imagery remains challenging due to two key factors: limited semantic coverage in textual representations and insufficient adaptability of visual features. These issues are particularly significant in aerial scenes, which involve various visual appearances and fine-grained object distinctions. We propose AVION, a knowledge distillation framework tailored for remote sensing adaptation of vision-language models. The teacher module constructs semantically rich textual prototypes by collecting descriptions from a large language model and verifying validity using remote sensing image features. The student module integrates lightweight and learnable prompts into both vision and language encoders, guided by the teacher to align embeddings and their cross-modal relationships. Once trained, the student operates independently during inference. Experiments on six optical remote sensing benchmarks show that AVION improves few-shot classification and base-class accuracy without degrading generalization to novel categories. It also enhances mean recall for cross-modal retrieval, with minimal additional trainable parameters.



## Notes

[Zotero Link](zotero://select/library/items/SJGITRJL)
