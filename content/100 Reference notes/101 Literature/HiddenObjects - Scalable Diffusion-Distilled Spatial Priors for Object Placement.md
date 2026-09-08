---
authors:
  - "[[Marco Schouten]]"
  - "[[Ioannis Siglidis]]"
  - "[[Serge Belongie]]"
  - "[[Dim P. Papadopoulos]]"
year: 2026
date: 2026-04-12
tags:
  - paper
url: https://arxiv.org/abs/2604.10675
draft: false
---


> [!tldr] Abstract
> We propose a method to learn explicit, class-conditioned spatial priors for object placement in natural scenes by distilling the implicit placement knowledge encoded in text-conditioned diffusion models. Prior work relies either on manually annotated data, which is inherently limited in scale, or on inpainting-based object-removal pipelines, whose artifacts promote shortcut learning. To address these limitations, we introduce a fully automated and scalable framework that evaluates dense object placements on high-quality real backgrounds using a diffusion-based inpainting pipeline. With this pipeline, we construct HiddenObjects, a large-scale dataset comprising 27M placement annotations, evaluated across 27k distinct scenes, with ranked bounding box insertions for different images and object categories. Experimental results show that our spatial priors outperform sparse human annotations on a downstream image editing task (3.90 vs. 2.68 VLM-Judge), and significantly surpass existing placement baselines and zero-shot Vision-Language Models for object placement. Furthermore, we distill these priors into a lightweight model for fast practical inference (230,000x faster).



## Notes

[Zotero Link](zotero://select/library/items/5BBU43ID)
