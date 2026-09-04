---
authors:
- '[[Zhuoyang Zhang]]'
- '[[Han Cai]]'
- '[[Song Han]]'
year: 2024
tags:
- paper
- efficient_dl
- vit
url: https://arxiv.org/abs/2402.05008
date: '2024-02-07'
---

> [!tldr] Abstract
> We present EfficientViT-SAM, a new family of accelerated segment anything models. We retain SAM's lightweight prompt encoder and mask decoder while replacing the heavy image encoder with EfficientViT. For the training, we begin with the knowledge distillation from the SAM-ViT-H image encoder to EfficientViT. Subsequently, we conduct end-to-end training on the SA-1B dataset. Benefiting from EfficientViT's efficiency and capacity, EfficientViT-SAM delivers 48.9x measured TensorRT speedup on A100 GPU over SAM-ViT-H without sacrificing performance. Our code and pre-trained models are released at [this https URL](https://github.com/mit-han-lab/efficientvit).

