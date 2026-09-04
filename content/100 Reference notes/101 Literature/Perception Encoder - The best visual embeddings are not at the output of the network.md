---
authors:
  - "[[Daniel Bolya]]"
  - "[[Po-Yao Huang]]"
  - "[[Peize Sun]]"
  - "[[Jang Hyun Cho]]"
  - "[[Andrea Madotto]]"
  - "[[Chen Wei]]"
  - "[[Tengyu Ma]]"
  - "[[Jiale Zhi]]"
  - "[[Jathushan Rajasegaran]]"
  - "[[Hanoona Rasheed]]"
  - "[[Junke Wang]]"
  - "[[Marco Monteiro]]"
  - "[[Hu Xu]]"
  - "[[Shiyu Dong]]"
  - "[[Nikhila Ravi]]"
  - "[[Daniel Li]]"
  - "[[Piotr Dollár]]"
  - "[[Christoph Feichtenhofer]]"
year: 2025
date: 2025-04-28
tags:
  - paper
  - vit
  - video
  - contrastive_learning
  - ssl
url: http://arxiv.org/abs/2504.13181
draft: false
---


> [!tldr] Abstract
> We introduce Perception Encoder (PE), a state-of-the-art vision encoder for image and video understanding trained via simple vision-language learning. Traditionally, vision encoders have relied on a variety of pretraining objectives, each tailored to specific downstream tasks such as classification, captioning, or localization. Surprisingly, after scaling our carefully tuned image pretraining recipe and refining with our robust video data engine, we find that contrastive vision-language training alone can produce strong, general embeddings for all of these downstream tasks. There is only one caveat: these embeddings are hidden within the intermediate layers of the network. To draw them out, we introduce two alignment methods: language alignment for multimodal language modeling, and spatial alignment for dense prediction. Together, our PE family of models achieves best-in-class results on a wide variety of tasks, including (1) zero-shot image and video classification and retrieval, simultaneously obtaining 86.6 average zero-shot ImageNet robustness and 76.9 zero-shot Kinetics-400 video classification; (2) document, image, and video Q&A, enabling 94.6 DocVQA, 80.9 InfographicVQA, and 82.7 PerceptionTest with an 8B LLM; and (3) spatial tasks such as detection, tracking, and depth estimation, setting a new COCO state-of-the-art of 66.0 box mAP. To foster further research, we release our models, code, and novel dataset of synthetically and human-annotated videos: https://github.com/facebookresearch/perception_models



## Notes

[Zotero Link](zotero://select/library/items/RTFVBXCH)
