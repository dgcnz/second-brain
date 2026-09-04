---
authors:
- '[[Maxime Oquab]]'
- "[[Timoth\xE9e Darcet]]"
- "[[Th\xE9o Moutakanni]]"
- '[[Huy Vo]]'
- '[[Marc Szafraniec]]'
- '[[Vasil Khalidov]]'
- '[[Pierre Fernandez]]'
- '[[Daniel Haziza]]'
- '[[Francisco Massa]]'
- '[[Alaaeldin El-Nouby]]'
- '[[Mahmoud Assran]]'
- '[[Nicolas Ballas]]'
- '[[Wojciech Galuba]]'
- '[[Rusell Howes]]'
- '[[Po-Yao Huang]]'
- '[[Shang-Wen Li]]'
- '[[Ishan Misra]]'
- '[[Michael Rabbat]]'
- '[[Vasu Sharma]]'
- '[[Gabriel Synnaeve]]'
- '[[Hu Xu]]'
- "[[Herv\xE9 Jegou]]"
- '[[Julien Mairal]]'
- '[[Patrick Labatut]]'
- '[[Armand Joulin]]'
- '[[Piotr Bojanowski]]'
year: 2023
tags:
- paper
- foundation_models
- computer_vision
- vit
url: https://arxiv.org/abs/2304.07193
date: '2023-04-14'
---

> [!tldr] Abstract
> The recent breakthroughs in natural language processing for model pretraining on large quantities of data have opened the way for similar foundation models in computer vision. These models could greatly simplify the use of images in any system by producing all-purpose visual features, i.e., features that work across image distributions and tasks without finetuning. This work shows that existing pretraining methods, especially self-supervised methods, can produce such features if trained on enough curated data from diverse sources. We revisit existing approaches and combine different techniques to scale our pretraining in terms of data and model size. Most of the technical contributions aim at accelerating and stabilizing the training at scale. In terms of data, we propose an automatic pipeline to build a dedicated, diverse, and curated image dataset instead of uncurated data, as typically done in the self-supervised literature. In terms of models, we train a ViT model (Dosovitskiy et al., 2020) with 1B parameters and distill it into a series of smaller models that surpass the best available all-purpose features, OpenCLIP (Ilharco et al., 2021) on most of the benchmarks at image and pixel levels.
