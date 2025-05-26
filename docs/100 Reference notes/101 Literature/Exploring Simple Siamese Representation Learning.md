---
authors:
  - "[[Xinlei Chen|Xinlei Chen]]"
  - "[[Kaiming He|Kaiming He]]"
year: 2020
tags:
  - paper
  - dl_theory
  - ssl
  - computer_vision
url: http://arxiv.org/abs/2011.10566
share: true
---


> [!tldr] Abstract
> Siamese networks have become a common structure in various recent models for unsupervised visual representation learning. These models maximize the similarity between two augmentations of one image, subject to certain conditions for avoiding collapsing solutions. In this paper, we report surprising empirical results that simple Siamese networks can learn meaningful representations even using none of the following: (i) negative sample pairs, (ii) large batches, (iii) momentum encoders. Our experiments show that collapsing solutions do exist for the loss and structure, but a stop-gradient operation plays an essential role in preventing collapsing. We provide a hypothesis on the implication of stop-gradient, and further show proof-of-concept experiments verifying it. Our “SimSiam” method achieves competitive results on ImageNet and downstream tasks. We hope this simple baseline will motivate people to rethink the roles of Siamese architectures for unsupervised representation learning. Code will be made available.



## Notes

[Zotero Link](zotero://select/library/items/VFNNG872)

![[Pasted image 20250519130637.png|Pasted image 20250519130637.png]]

