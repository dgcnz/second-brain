---
authors:
  - "[[Diana-Nicoleta Grigore]]"
  - "[[Mariana-Iuliana Georgescu]]"
  - "[[Jon Alvarez Justo]]"
  - "[[Tor Johansen]]"
  - "[[Andreea Iuliana Ionescu]]"
  - "[[Radu Tudor Ionescu]]"
year: 
date: 
tags:
  - paper
url: https://openaccess.thecvf.com/content/WACV2025/html/Grigore_Weight_Copy_and_Low-Rank_Adaptation_for_Few-Shot_Distillation_of_Vision_WACV_2025_paper.html
draft: false
---


> [!tldr] Abstract
> Few-shot knowledge distillation recently emerged as a viable approach to harness the knowledge of large-scale pre-trained models, using limited data and computational resources. In this paper, we propose a novel few-shot feature distillation approach for vision transformers. Our approach is based on two key steps. Leveraging the fact that vision transformers have a consistent depth-wise structure, we first copy the weights from intermittent layers of existing pre-trained vision transformers (teachers) into shallower architectures (students), where the intermittence factor controls the complexity of the student transformer with respect to its teacher. Next, we employ an enhanced version of Low-Rank Adaptation (LoRA) to distill knowledge into the student in a few-shot scenario, aiming to recover the information processing carried out by the skipped teacher layers. We present comprehensive experiments with supervised and self-supervised transformers as teachers, on six data sets from various domains (natural, medical and satellite images) and tasks (classification and segmentation). The empirical results confirm the superiority of our approach over state-of-the-art competitors. Moreover, the ablation results demonstrate the usefulness of each component of the proposed pipeline. We release our code at https://github.com/dianagrigore/WeCoLoRA.



## Notes

[Zotero Link](zotero://select/library/items/X3JQNQPM)
