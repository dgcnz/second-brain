---
authors:
  - "[[Yoonho Lee|Yoonho Lee]]"
  - "[[Annie S. Chen|Annie S. Chen]]"
  - "[[Fahim Tajwar|Fahim Tajwar]]"
  - "[[Huaxiu Yao|Huaxiu Yao]]"
  - "[[Percy Liang|Percy Liang]]"
  - "[[Chelsea Finn|Chelsea Finn]]"
  - "[[Ananya Kumar|Ananya Kumar]]"
year: 2022
tags:
  - paper
  - peft
  - efficient_dl
url: https://arxiv.org/abs/2210.11466
share: true
---
> [!info] Abstract
> A common approach to transfer learning under distribution shift is to fine-tune the last few layers of a pre-trained model, preserving learned features while also adapting to the new task. This paper shows that in such settings, selectively fine-tuning a subset of layers (which we term surgical fine-tuning) matches or outperforms commonly used fine-tuning approaches. Moreover, the type of distribution shift influences which subset is more effective to tune: for example, for image corruptions, fine-tuning only the first few layers works best. We validate our findings systematically across seven real-world data tasks spanning three types of distribution shifts. Theoretically, we prove that for two-layer neural networks in an idealized setting, first-layer tuning can outperform fine-tuning all layers. Intuitively, fine-tuning more parameters on a small target dataset can cause information learned during pre-training to be forgotten, and the relevant information depends on the type of shift.

Notes:
- Paper mentions that it depends on what kind of distribution shift the choice of layers (subset of parameters) to finetune.
- They provide an automatic procedure to select those layers that beats full finetuning but is suboptimal when compared to expert/surgical finetuning. Suggest future work in this regard.