---
authors:
- '[[Michael Dorkenwald]]'
- '[[Nimrod Barazani]]'
- '[[Cees G. M. Snoek]]'
- '[[Yuki M. Asano]]'
year: 2024
tags:
- paper
- multimodal
- object_localisation
url: http://arxiv.org/abs/2402.08657
date: '2024-02-13'
---

> [!tldr] Abstract
> Vision-Language Models (VLMs), such as Flamingo and GPT-4V, have shown immense potential by integrating large language models with vision systems. Nevertheless, these models face challenges in the fundamental computer vision task of object localisation, due to their training on multimodal data containing mostly captions without explicit spatial grounding. While it is possible to construct custom, supervised training pipelines with bounding box annotations that integrate with VLMs, these result in specialized and hard-to-scale models. In this paper, we aim to explore the limits of caption-based VLMs and instead propose to tackle the challenge in a simpler manner by i) keeping the weights of a caption-based VLM frozen and ii) not using any supervised detection data. To this end, we introduce an input-agnostic Positional Insert (PIN), a learnable spatial prompt, containing a minimal set of parameters that are slid inside the frozen VLM, unlocking object localisation capabilities. Our PIN module is trained with a simple next-token prediction task on synthetic data without requiring the introduction of new output heads. Our experiments demonstrate strong zero-shot localisation performances on a variety of images, including Pascal VOC, COCO, LVIS, and diverse images like paintings or cartoons.



## Notes

[Zotero Link](zotero://select/library/items/HNBUM43I)


