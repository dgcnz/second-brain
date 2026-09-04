---
authors:
  - "[[Bin Wang]]"
  - "[[Wentong Li]]"
  - "[[Wenqian Wang]]"
  - "[[Mingliang Gao]]"
  - "[[Runmin Cong]]"
  - "[[Wei Zhang]]"
year: 2025
date: 2025-06-12
tags:
  - paper
  - vit
  - multimodal
  - video
url: http://arxiv.org/abs/2408.10688
draft: false
---


> [!tldr] Abstract
> Recently, large-scale pre-trained vision-language models (e.g., CLIP), have garnered significant attention thanks to their powerful representative capabilities. This inspires researchers in transferring the knowledge from these large pretrained models to other task-specific models, e.g., Video Action Recognition (VAR) models, via particularly leveraging side networks to enhance the efficiency of parameter-efficient finetuning (PEFT). However, current transferring approaches in VAR tend to directly transfer the frozen knowledge from large pre-trained models to action recognition networks with minimal cost, instead of exploiting the temporal modeling capabilities of the action recognition models themselves. Therefore, in this paper, we propose a novel memory-efficient Temporal Difference Side Network (TDS-CLIP) to balance knowledge transferring and temporal modeling, avoiding backpropagation in frozen parameter models. Specifically, we introduce a Temporal Difference Adapter (TD-Adapter), which can effectively capture local temporal differences in motion features to strengthen the model’s global temporal modeling capabilities. Furthermore, we designed a Side Motion Enhancement Adapter (SME-Adapter) to guide the proposed side network in efficiently learning the rich motion information in videos, thereby improving the side network’s ability to capture and learn motion information. Extensive experiments are conducted on three benchmark datasets, including Something-Something V1&V2, and Kinetics-400. Experimental results show that our method achieves competitive performance in video action recognition tasks. Code will be available at https://github.com/BBYL9413/TDS-CLIP.



## Notes

[Zotero Link](zotero://select/library/items/I4VAAVGL)
