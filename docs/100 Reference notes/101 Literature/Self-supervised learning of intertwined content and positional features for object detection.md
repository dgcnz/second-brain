---
authors:
  - "[[Kang-Jun Liu|Kang-Jun Liu]]"
  - "[[Masanori Suganuma|Masanori Suganuma]]"
  - "[[Takayuki Okatani|Takayuki Okatani]]"
year: 2025
tags:
  - paper
  - preprint
  - vit
  - ssl
url: https://openreview.net/forum?id=nf4v09zw6O
share: true
---


> [!tldr] Abstract
> We present a novel self-supervised feature learning method using Vision Transformers (ViT) as the backbone, specifically designed for object detection and instance segmentation. Our approach addresses the challenge of extracting features that capture both class and positional information, which are crucial for these tasks. The method introduces two key components: (1) a positional encoding tied to the cropping process in contrastive learning, which utilizes a novel vector field representation for positional embeddings; and (2) masking and prediction, similar to conventional Masked Image Modeling (MIM), applied in parallel to both content and positional embeddings of image patches. These components enable the effective learning of intertwined content and positional features. We evaluate our method against state-of-the-art approaches, pre-training on ImageNet-1K and fine-tuning on downstream tasks. Our method outperforms the state-of-the-art SSL methods on the COCO object detection benchmark, achieving significant improvements with fewer pre-training epochs. These results suggest that better integration of positional information into self-supervised learning can improve performance on dense prediction tasks.
> 



## Notes

[Zotero Link](zotero://select/library/items/HWQISZ4Q)




> The first is the use of positional encoding tied to the cropping process in contrastive learning; see Fig. 1. In conventional SSL (Caron et al., 2021; Chen et al., 2021; Caron et al., 2024), the position encoding is not aligned with the cropping, meaning the same position embeddings are applied whether processing the full image or a cropped sub-image. We propose representing positional encoding as a vector field with the same dimensions as the input image, which is then cropped in the same manner as the image and sampled on a regular grid, yielding a set of position embeddings of the patches. They are subsequently combined with the content embeddings of their corresponding image patches.
> 
> 



> our method also applies it to position embeddings.
> 
> 



> This position and scale augmentation is expected to reduce excessive reliance on absolute positional information within the image and alleviate biases associated with the object scale distribution in ImageNet.
> 
> 



> is worth noting that some existing methods also incorporate position prediction; however, they predict precise positions using location indicators (Wang et al., 2024; Caron et al., 2024) or at the pixel level (He et al., 2022). In contrast, our method predicts positional information within the feature (embedding) space, representing a fundamentally different approach.
> 
> 

