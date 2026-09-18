---
authors:
  - "[[Zhiwei Hao]]"
  - "[[Jianyuan Guo]]"
  - "[[Ding Jia]]"
  - "[[Kai Han]]"
  - "[[Yehui Tang]]"
  - "[[Chao Zhang]]"
  - "[[Han Hu]]"
  - "[[Yunhe Wang]]"
year: 
date: 
tags:
  - paper
url: https://proceedings.neurips.cc/paper_files/paper/2022/file/3bd2d73b4e96b0ac5a319be58a96016c-Paper-Conference.pdf
draft: false
---


> [!tldr] Abstract
> In the past few years, transformers have achieved promising performance on various computer vision tasks. Unfortunately, the immense inference overhead of most existing vision transformers withholds them from being deployed on edge devices such as cell phones and smart watches. Knowledge distillation is a widely used paradigm for compressing cumbersome architectures into compact students via transferring information. However, most of them are designed for convolutional neural networks (CNNs), which do not fully investigate the character of vision transformers. In this paper, we fully utilize the patch-level information and propose a ﬁne-grained manifold distillation method for transformer-based networks. Speciﬁcally, we train a tiny student model to match a pre-trained teacher model in the patch-level manifold space. Then, we decouple the manifold matching loss into three terms with careful design to further reduce the computational costs for the patch relationship. Equipped with the proposed method, a DeiT-Tiny model containing 5M parameters achieves 76.5% top-1 accuracy on ImageNet-1k, which is +2.0% higher than previous distillation approaches. Transfer learning results on other classiﬁcation benchmarks and downstream vision tasks also demonstrate the superiority of our method over the state-of-the-art algorithms.



## Notes

[Zotero Link](zotero://select/library/items/3AD84HNZ)
