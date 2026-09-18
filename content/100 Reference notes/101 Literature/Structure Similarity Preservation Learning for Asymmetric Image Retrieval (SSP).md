---
authors:
  - "[[Hui Wu]]"
  - "[[Min Wang]]"
  - "[[Wengang Zhou]]"
  - "[[Houqiang Li]]"
year: 2024
date: 2024-03-01
tags:
  - paper
url: https://arxiv.org/abs/2403.00648
draft: false
---


> [!tldr] Abstract
> Asymmetric image retrieval is a task that seeks to balance retrieval accuracy and efficiency by leveraging lightweight and large models for the query and gallery sides, respectively. The key to asymmetric image retrieval is realizing feature compatibility between different models. Despite the great progress, most existing approaches either rely on classifiers inherited from gallery models or simply impose constraints at the instance level, ignoring the structure of embedding space. In this work, we propose a simple yet effective structure similarity preserving method to achieve feature compatibility between query and gallery models. Specifically, we first train a product quantizer offline with the image features embedded by the gallery model. The centroid vectors in the quantizer serve as anchor points in the embedding space of the gallery model to characterize its structure. During the training of the query model, anchor points are shared by the query and gallery models. The relationships between image features and centroid vectors are considered as structure similarities and constrained to be consistent. Moreover, our approach makes no assumption about the existence of any labeled training data and thus can be extended to an unlimited amount of data. Comprehensive experiments on large-scale landmark retrieval demonstrate the effectiveness of our approach. Our code is released at: https://github.com/MCC-WH/SSP.



## Notes

[Zotero Link](zotero://select/library/items/VP6VTMCS)
