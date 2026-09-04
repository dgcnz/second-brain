---
authors:
  - "[[Danny Driess]]"
  - "[[Jost Tobias Springenberg]]"
  - "[[Brian Ichter]]"
  - "[[Lili Yu]]"
  - "[[Adrian Li-Bell]]"
  - "[[Karl Pertsch]]"
  - "[[Allen Z. Ren]]"
  - "[[Homer Walke]]"
  - "[[Quan Vuong]]"
  - "[[Lucy Xiaoyang Shi]]"
  - "[[Sergey Levine]]"
year: 2025
date: 2025-05-29
tags:
  - paper
url: https://arxiv.org/abs/2505.23705
draft: false
---


> [!tldr] Abstract
> Vision-language-action (VLA) models provide a powerful approach to training control policies for physical systems, such as robots, by combining end-to-end learning with transfer of semantic knowledge from web-scale vision-language model (VLM) training. However, the constraints of real-time control are often at odds with the design of VLMs: the most powerful VLMs have tens or hundreds of billions of parameters, presenting an obstacle to real-time inference, and operate on discrete tokens rather than the continuous-valued outputs that are required for controlling robots. To address this challenge, recent VLA models have used specialized modules for efficient continuous control, such as action experts or continuous output heads, which typically require adding new untrained parameters to the pretrained VLM backbone. While these modules improve real-time and control capabilities, it remains an open question whether they preserve or degrade the semantic knowledge contained in the pretrained VLM, and what effect they have on the VLA training dynamics. In this paper, we study this question in the context of VLAs that include a continuous diffusion or flow matching action expert, showing that naively including such experts significantly harms both training speed and knowledge transfer. We provide an extensive analysis of various design choices, their impact on performance and knowledge transfer, and propose a technique for insulating the VLM backbone during VLA training that mitigates this issue. Videos are available at https://pi.website/research/knowledge_insulation.



## Notes

[Zotero Link](zotero://select/library/items/4QUN6GG5)
