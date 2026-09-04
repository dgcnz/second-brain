---
authors:
  - "[[Kang-Jun Liu]]"
  - "[[Masanori Suganuma]]"
  - "[[Takayuki Okatani]]"
year: 2025
tags:
  - paper
  - vit
  - ssl
url: https://openreview.net/forum?id=nf4v09zw6O
date: 2025-06-01
---

> [!tldr] Abstract
> We present a novel self-supervised feature learning method using Vision Transformers (ViT) as the backbone, specifically designed for object detection and instance segmentation. Our approach addresses the challenge of extracting features that capture both class and positional information, which are crucial for these tasks. The method introduces two key components: (1) a positional encoding tied to the cropping process in contrastive learning, which utilizes a novel vector field representation for positional embeddings; and (2) masking and prediction, similar to conventional Masked Image Modeling (MIM), applied in parallel to both content and positional embeddings of image patches. These components enable the effective learning of intertwined content and positional features. We evaluate our method against state-of-the-art approaches, pre-training on ImageNet-1K and fine-tuning on downstream tasks. Our method outperforms the state-of-the-art SSL methods on the COCO object detection benchmark, achieving significant improvements with fewer pre-training epochs. These results suggest that better integration of positional information into self-supervised learning can improve performance on dense prediction tasks.
> 



## Notes

[Zotero Link](zotero://select/library/items/HWQISZ4Q)

