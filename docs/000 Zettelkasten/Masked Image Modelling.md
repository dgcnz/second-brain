---
tags:
  - foundation_models
  - computer_vision
share: true
---


It seems like MIM objectives are becoming a strong learning objective for vision foundation models. Right now it seems to be the closest answer to: [[Do Vision Foundation models exist?|Do Vision Foundation models exist?]]

However, intuitively it seems a bit like a weak signal, as it focuses on individual patches/pixels, without much consideration to semantic information. This is echoed on [[Learning with Unmasked Tokens Drives Stronger Vision Learners|Learning with Unmasked Tokens Drives Stronger Vision Learners]]:

> However, MIM strategies often encounter challenges, such as local dependency on attention to understand entire context of an image. For example, liu _et al_. [[36](https://arxiv.org/html/2310.13593v2#bib.bib36)] revealed that MAE [[22](https://arxiv.org/html/2310.13593v2#bib.bib22)], a state-of-the-art MIM method, exhibits shorter average attention distances. Furthermore, we observe that attention map patterns by MAE substantiate extremely local behavior (See Fig. [1](https://arxiv.org/html/2310.13593v2#S2.F1 "Figure 1 ‣ 2.1.2 MIM formulation itself falls short in learning broader contexts. ‣ 2.1 MIM and Beyond ‣ 2 Preliminary ‣ Learning with Unmasked Tokens Drives Stronger Vision Learners")) indeed. In other words, the MAE-trained attention mechanism less integrates information across the entire image pixels and tends to focus on specific input regions. This is presumably attributed to MIM-pretraining, primarily dedicated to predicting low-level pixel details (_e.g_., color or texture) without a comprehensive understanding of less-regional information (_e.g_., the input structure or shape).



Related papers:
- [[Learning with Unmasked Tokens Drives Stronger Vision Learners|Learning with Unmasked Tokens Drives Stronger Vision Learners]]
- [[DINOv2 - Learning Robust Visual Features without Supervision|DINOv2 - Learning Robust Visual Features without Supervision]]
- [[Learning with Unmasked Tokens Drives Stronger Vision Learners|Learning with Unmasked Tokens Drives Stronger Vision Learners]]
- [[What Do Self-Supervised Vision Transformers Learn?|What Do Self-Supervised Vision Transformers Learn?]] 🚨


## Register tokens?

[[Vision Transformers Need Registers|Vision Transformers Need Registers]] observe that there are no high-norm artifacts that would justify adding registers and claims this is because the model only ises local information.
