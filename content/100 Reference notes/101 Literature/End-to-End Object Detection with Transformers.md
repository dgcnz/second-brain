---
authors:
  - "[[Nicolas Carion]]"
  - "[[Francisco Massa]]"
  - "[[Gabriel Synnaeve]]"
  - "[[Nicolas Usunier]]"
  - "[[Alexander Kirillov]]"
  - "[[Sergey Zagoruyko]]"
year: 2020
tags:
  - paper
  - computer_vision
  - object_detection
  - transformers
url: https://arxiv.org/abs/2005.12872
share: true
---
> [!tldr] Abstract
> We present a new method that views object detection as a direct set prediction problem. Our approach streamlines the detection pipeline, effectively removing the need for many hand-designed components like a non-maximum suppression procedure or anchor generation that explicitly encode our prior knowledge about the task. The main ingredients of the new framework, called DEtection TRansformer or DETR, are a set-based global loss that forces unique predictions via bipartite matching, and a transformer encoder-decoder architecture. Given a fixed small set of learned object queries, DETR reasons about the relations of the objects and the global image context to directly output the final set of predictions in parallel. The new model is conceptually simple and does not require a specialized library, unlike many other modern detectors. DETR demonstrates accuracy and run-time performance on par with the well-established and highly-optimized Faster RCNN baseline on the challenging COCO object detection dataset. Moreover, DETR can be easily generalized to produce panoptic segmentation in a unified manner. We show that it significantly outperforms competitive baselines. Training code and pretrained models are available at [this https URL](https://github.com/facebookresearch/detr).




