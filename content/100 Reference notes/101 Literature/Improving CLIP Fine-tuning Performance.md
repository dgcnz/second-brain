---
authors:
  - "[[Yixuan Wei]]"
  - "[[Han Hu]]"
  - "[[Zhenda Xie]]"
  - "[[Ze Liu]]"
  - "[[Zheng Zhang]]"
  - "[[Yue Cao]]"
year: 
date: 
tags:
  - paper
url: 
draft: false
---


> [!tldr] Abstract
> CLIP models have demonstrated impressively high zeroshot recognition accuracy, however, their fine-tuning performance on downstream vision tasks is sub-optimal. Contrarily, masked image modeling (MIM) performs exceptionally for fine-tuning on downstream tasks, despite the absence of semantic labels during training. We note that the two tasks have different ingredients: image-level targets versus token-level targets, a cross-entropy loss versus a regression loss, and full-image inputs versus partialimage inputs. To mitigate the differences, we introduce a classical feature map distillation framework, which can simultaneously inherit the semantic capability of CLIP models while constructing a task incorporated key ingredients of MIM. Experiments suggest that the feature map distillation approach significantly boosts the fine-tuning performance of CLIP models on several typical downstream vision tasks. We also observe that the approach yields new CLIP representations which share some diagnostic properties with those of MIM. Furthermore, the feature map distillation approach generalizes to other pretraining models, such as DINO, DeiT and SwinV2-G, reaching a new record of 64.2 mAP on COCO object detection with +1.1 improvement. The code and models are publicly available at https://github.com/ SwinTransformer/Feature-Distillation.



## Notes

[Zotero Link](zotero://select/library/items/MMAKMAVR)
