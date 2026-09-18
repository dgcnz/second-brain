---
authors:
  - "[[Zhendong Yang]]"
  - "[[Zhe Li]]"
  - "[[Ailing Zeng]]"
  - "[[Zexian Li]]"
  - "[[Chun Yuan]]"
  - "[[Yu Li]]"
year: 2024
date: 2024-06-17
tags:
  - paper
url: https://ieeexplore.ieee.org/document/10678046/
draft: false
---


> [!tldr] Abstract
> Knowledge Distillation (KD) has been extensively studied as a means to enhance the performance of smaller models in Convolutional Neural Networks (CNNs). Recently the Vision Transformer (ViT) has demonstrated remarkable success in various computer vision tasks leading to an increased demand for KD in ViT. However while logit-based KD has been applied to ViT other feature-based KD methods for CNNs cannot be directly implemented due to the significant structure gap. In this paper we conduct an analysis of the properties of different feature layers in ViT to identify a method for feature-based ViT distillation. Our findings reveal that both shallow and deep layers in ViT are equally important for distillation and require distinct distillation strategies. Based on these guidelines we propose our feature-based method ViTKD which mimics the shallow layers and generates the deep layer in the teacher. ViTKD leads to consistent and significant improvements in the students. On ImageNet-1K we achieve performance boosts of 1.64% for DeiT-Tiny 1.40% for DeiT-Small and 1.70% for DeiT-Base. Downstream tasks also demonstrate the superiority of ViTKD. Additionally ViTKD and logit-based KD are complementary and can be applied together directly further enhancing the student's performance. Specifically DeiT-T S and B achieve accuracies of 77.78% 83.59% and 85.41% respectively using this combined approach. Code is available at https://github.com/yzd-v/cls_KD.



## Notes

[Zotero Link](zotero://select/library/items/E3JIQNLQ)
