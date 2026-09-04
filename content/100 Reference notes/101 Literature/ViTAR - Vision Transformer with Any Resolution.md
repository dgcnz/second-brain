---
authors:
- '[[Qihang Fan]]'
- '[[Quanzeng You]]'
- '[[Xiaotian Han]]'
- '[[Yongfei Liu]]'
- '[[Yunzhe Tao]]'
- '[[Huaibo Huang]]'
- '[[Ran He]]'
- '[[Hongxia Yang]]'
year: 2024
tags:
- paper
- vit
- computer_vision
- efficient_vision
url: http://arxiv.org/abs/2403.18361
date: '2024-03-27'
---

> [!tldr] Abstract
> This paper tackles a significant challenge faced by Vision Transformers (ViTs): their constrained scalability across different image resolutions. Typically, ViTs experience a performance decline when processing resolutions different from those seen during training. Our work introduces two key innovations to address this issue. Firstly, we propose a novel module for dynamic resolution adjustment, designed with a single Transformer block, specifically to achieve highly efficient incremental token integration. Secondly, we introduce fuzzy positional encoding in the Vision Transformer to provide consistent positional awareness across multiple resolutions, thereby preventing overfitting to any single training resolution. Our resulting model, ViTAR (Vision Transformer with Any Resolution), demonstrates impressive adaptability, achieving 83.3% top-1 accuracy at a 1120x1120 resolution and 80.4% accuracy at a 4032x4032 resolution, all while reducing computational costs. ViTAR also shows strong performance in downstream tasks such as instance and semantic segmentation and can easily combined with self-supervised learning techniques like Masked AutoEncoder. Our work provides a cost-effective solution for enhancing the resolution scalability of ViTs, paving the way for more versatile and efficient high-resolution image processing.



## Notes

[Zotero Link](zotero://select/library/items/HEMZU6TD)


