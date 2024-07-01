---
authors:
  - "[[Yian Zhao|Yian Zhao]]"
  - "[[Wenyu Lv|Wenyu Lv]]"
  - "[[Shangliang Xu|Shangliang Xu]]"
  - "[[Jinman Wei|Jinman Wei]]"
  - "[[Guanzhong Wang|Guanzhong Wang]]"
  - "[[Qingqing Dang|Qingqing Dang]]"
  - "[[Yi Liu|Yi Liu]]"
  - "[[Jie Chen|Jie Chen]]"
year: 2023
tags:
  - paper
  - computer_vision
  - efficient_dl
url: https://arxiv.org/abs/2304.08069v3
share: true
---
> [!tldr] Abstract
> The YOLO series has become the most popular framework for real-time object detection due to its reasonable trade-off between speed and accuracy. However, we observe that the speed and accuracy of YOLOs are negatively affected by the NMS. Recently, end-to-end Transformer-based detectors (DETRs) have provided an alternative to eliminating NMS. Nevertheless, the high computational cost limits their practicality and hinders them from fully exploiting the advantage of excluding NMS. In this paper, we propose the Real-Time DEtection TRansformer (RT-DETR), the first real-time end-to-end object detector to our best knowledge that addresses the above dilemma. We build RT-DETR in two steps, drawing on the advanced DETR: first we focus on maintaining accuracy while improving speed, followed by maintaining speed while improving accuracy. Specifically, we design an efficient hybrid encoder to expeditiously process multi-scale features by decoupling intra-scale interaction and cross-scale fusion to improve speed. Then, we propose the uncertainty-minimal query selection to provide high-quality initial queries to the decoder, thereby improving accuracy. In addition, RT-DETR supports flexible speed tuning by adjusting the number of decoder layers to adapt to various scenarios without retraining. Our RT-DETR-R50 / R101 achieves 53.1% / 54.3% AP on COCO and 108 / 74 FPS on T4 GPU, outperforming previously advanced YOLOs in both speed and accuracy. We also develop scaled RT-DETRs that outperform the lighter YOLO detectors (S and M models). Furthermore, RT-DETR-R50 outperforms DINO-R50 by 2.2% AP in accuracy and about 21 times in FPS. After pre-training with Objects365, RT-DETR-R50 / R101 achieves 55.3% / 56.2% AP. The project page: [this https URL](https://zhao-yian.github.io/RTDETR).
