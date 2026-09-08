---
authors:
  - "[[Alex Nichol]]"
  - "[[Heewoo Jun]]"
  - "[[Prafulla Dhariwal]]"
  - "[[Pamela Mishkin]]"
  - "[[Mark Chen]]"
year: 2022
date: 2022-12-16
tags:
  - paper
url: https://arxiv.org/abs/2212.08751
draft: false
---


> [!tldr] Abstract
> While recent work on text-conditional 3D object generation has shown promising results, the state-of-the-art methods typically require multiple GPU-hours to produce a single sample. This is in stark contrast to state-of-the-art generative image models, which produce samples in a number of seconds or minutes. In this paper, we explore an alternative method for 3D object generation which produces 3D models in only 1-2 minutes on a single GPU. Our method first generates a single synthetic view using a text-to-image diffusion model, and then produces a 3D point cloud using a second diffusion model which conditions on the generated image. While our method still falls short of the state-of-the-art in terms of sample quality, it is one to two orders of magnitude faster to sample from, offering a practical trade-off for some use cases. We release our pre-trained point cloud diffusion models, as well as evaluation code and models, at https://github.com/openai/point-e.



## Notes

[Zotero Link](zotero://select/library/items/YW2YVCKT)
