---
authors:
  - "[[Andrei Panferov]]"
  - "[[Alexandra Volkova]]"
  - "[[Ionut-Vlad Modoranu]]"
  - "[[Vage Egiazarian]]"
  - "[[Mher Safaryan]]"
  - "[[Dan Alistarh]]"
year: 2025
date: 2025-06-02
tags:
  - paper
url: https://arxiv.org/abs/2506.01863
draft: false
---


> [!tldr] Abstract
> Scaling laws have shaped recent advances in machine learning by enabling predictable scaling of model performance based on model size, computation, and data volume. Concurrently, the rise in computational cost for AI has motivated model compression techniques, notably quantization and sparsification, which have emerged to mitigate the steep computational demands associated with large-scale training and inference. This paper investigates the interplay between scaling laws and compression formats, exploring whether a unified scaling framework can accurately predict model performance when training occurs over various compressed representations, such as sparse, scalar-quantized, sparse-quantized or even vector-quantized formats. Our key contributions include validating a general scaling law formulation and showing that it is applicable both individually but also composably across compression types. Based on this, our main finding is demonstrating both theoretically and empirically that there exists a simple "capacity" metric -- based on the representation's ability to fit random Gaussian data -- which can robustly predict parameter efficiency across multiple compressed representations. On the practical side, we extend our formulation to directly compare the accuracy potential of different compressed formats, and to derive better algorithms for training over sparse-quantized formats.



## Notes

[Zotero Link](zotero://select/library/items/9B4HZ5RA)
