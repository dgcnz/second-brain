---
authors:
  - "[[Juliette Marrie|Juliette Marrie]]"
  - "[[Michael Arbel|Michael Arbel]]"
  - "[[Julien Mairal|Julien Mairal]]"
  - "[[Diane Larlus|Diane Larlus]]"
year: 2024
tags:
  - paper
  - distillation
  - foundation_models
  - efficient_dl
url: https://arxiv.org/abs/2402.11305
share: true
---
> [!tldr] Abstract
> Large pretrained visual models exhibit remarkable generalization across diverse recognition tasks. Yet, real-world applications often demand compact models tailored to specific problems. Variants of knowledge distillation have been devised for such a purpose, enabling task-specific compact models (the students) to learn from a generic large pretrained one (the teacher). In this paper, we show that the excellent robustness and versatility of recent pretrained models challenge common practices established in the literature, calling for a new set of optimal guidelines for task-specific distillation. To address the lack of samples in downstream tasks, we also show that a variant of Mixup based on stable diffusion complements standard data augmentation. This strategy eliminates the need for engineered text prompts and improves distillation of generic models into streamlined specialized networks.


## Notes

![[Pasted image 20240703203703.png|Pasted image 20240703203703.png]]