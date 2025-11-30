---
authors:
  - "[[Vincent Tao Hu]]"
  - "[[David W. Zhang]]"
  - "[[Yuki M. Asano]]"
  - "[[Gertjan J. Burghouts]]"
  - "[[Cees G. M. Snoek]]"
year: 2023
tags:
  - paper
  - computer_vision
  - diffusion
url: https://ieeexplore.ieee.org/document/10203989/
date: 2023-06-17
---

> [!tldr] Abstract
> Diffusion models have demonstrated remarkable progress in image generation quality, especially when guidance is used to control the generative process. However, guidance requires a large amount of image-annotation pairs for training and is thus dependent on their availability and correctness. In this paper, we eliminate the need for such annotation by instead exploiting the flexibility of self-supervision signals to design a framework for self-guided diffusion models. By leveraging a feature extraction function and a selfannotation function, our method provides guidance signals at various image granularities: from the level of holistic images to object boxes and even segmentation masks. Our experiments on single-label and multi-label image datasets demonstrate that self-labeled guidance always outperforms diffusion models without guidance and may even surpass guidance based on ground-truth labels. When equipped with self-supervised box or mask proposals, our method further generates visually diverse yet semantically consistent images, without the need for any class, box, or segment label annotation. Self-guided diffusion is simple, flexible and expected to profit from deployment at scale.



## Notes

[Zotero Link](zotero://select/library/items/Y4E9JSWV)


