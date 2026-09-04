---
authors:
  - "[[Adrian Ziegler]]"
  - "[[Yuki M. Asano]]"
year: 2022
tags:
  - paper
  - vit
  - clustering
  - ssl
  - dense
  - patch_level
url: https://ieeexplore.ieee.org/document/9879393/
date: 2022-06-18
---

> [!tldr] Abstract
> Progress in self-supervised learning has brought strong image representation learning methods. Yet so far, it has mostly focused on image-level learning. In turn, tasks such as unsupervised image segmentation have not benefited from this trend as they require spatially-diverse representations. However, learning dense representations is challenging, as in the unsupervised context it is not clear how to guide the model to learn representations that correspond to various potential object categories. In this paper, we argue that self-supervised learning of object parts is a solution to this issue. Object parts are generalizable: they are a-priori independent of an object definition, but can be grouped to form objects a-posteriori. To this end, we leverage the recently proposed Vision Transformer’s capability of attending to objects and combine it with a spatially dense clustering task for fine-tuning the spatial tokens. Our method surpasses the state-of-the-art on three semantic segmentation benchmarks by 3%-17%, showing that our representations are versatile under various object definitions. Finally, we extend this to fully unsupervised segmentation – which refrains completely from using label information even at test-time – and demonstrate that a simple method for automatically merging discovered object parts based on community detection yields substantial gains.



## Notes

[Zotero Link](zotero://select/library/items/IYKEIXQH)


