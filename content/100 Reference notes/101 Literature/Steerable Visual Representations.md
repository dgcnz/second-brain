---
authors:
  - "[[Jona Ruthardt]]"
  - "[[Manu Gaur]]"
  - "[[Deva Ramanan]]"
  - "[[Makarand Tapaswi]]"
  - "[[Yuki M. Asano]]"
year: 2026
date: 2026-04-02
tags:
  - paper
url: https://arxiv.org/abs/2604.02327
draft: false
---


> [!tldr] Abstract
> Pretrained Vision Transformers (ViTs) such as DINOv2 and MAE provide generic image features that can be applied to a variety of downstream tasks such as retrieval, classification, and segmentation. However, such representations tend to focus on the most salient visual cues in the image, with no way to direct them toward less prominent concepts of interest. In contrast, Multimodal LLMs can be guided with textual prompts, but the resulting representations tend to be language-centric and lose their effectiveness for generic visual tasks. To address this, we introduce Steerable Visual Representations, a new class of visual representations, whose global and local features can be steered with natural language. While most vision-language models (e.g., CLIP) fuse text with visual features after encoding (late fusion), we inject text directly into the layers of the visual encoder (early fusion) via lightweight cross-attention. We introduce benchmarks for measuring representational steerability, and demonstrate that our steerable visual features can focus on any desired objects in an image while preserving the underlying representation quality. Our method also matches or outperforms dedicated approaches on anomaly detection and personalized object discrimination, exhibiting zero-shot generalization to out-of-distribution tasks.



## Notes

[Zotero Link](zotero://select/library/items/33QUXMCF)
