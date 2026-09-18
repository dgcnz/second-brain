---
authors:
  - "[[Jiabao Wang]]"
  - "[[Yuming Chen]]"
  - "[[Zhaohui Zheng]]"
  - "[[Xiang Li]]"
  - "[[Ming-Ming Cheng]]"
  - "[[Qibin Hou]]"
year: 2023
date: 2023-06-20
tags:
  - paper
url: https://arxiv.org/abs/2306.11369
draft: false
---


> [!tldr] Abstract
> Knowledge Distillation (KD) has been validated as an effective model compression technique for learning compact object detectors. Existing state-of-the-art KD methods for object detection are mostly based on feature imitation. In this paper, we present a general and effective prediction mimicking distillation scheme, called CrossKD, which delivers the intermediate features of the student's detection head to the teacher's detection head. The resulting cross-head predictions are then forced to mimic the teacher's predictions. This manner relieves the student's head from receiving contradictory supervision signals from the annotations and the teacher's predictions, greatly improving the student's detection performance. Moreover, as mimicking the teacher's predictions is the target of KD, CrossKD offers more task-oriented information in contrast with feature imitation. On MS COCO, with only prediction mimicking losses applied, our CrossKD boosts the average precision of GFL ResNet-50 with 1x training schedule from 40.2 to 43.7, outperforming all existing KD methods. In addition, our method also works well when distilling detectors with heterogeneous backbones. Code is available at https://github.com/jbwang1997/CrossKD.



## Notes

[Zotero Link](zotero://select/library/items/4C82LIRZ)
