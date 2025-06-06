---
authors:
  - "[[Nicolas Michel|Nicolas Michel]]"
  - "[[Giovanni Chierchia|Giovanni Chierchia]]"
  - "[[Romain Negrel|Romain Negrel]]"
  - "[[Jean-François Bercher|Jean-François Bercher]]"
year: 2024
tags:
  - paper
  - continual_learning
  - representation_learning
  - non_euclidean
url: http://arxiv.org/abs/2306.03364
share: true
---


> [!tldr] Abstract
> We use the maximum a posteriori estimation principle for learning representations distributed on the unit sphere. We propose to use the angular Gaussian distribution, which corresponds to a Gaussian projected on the unit-sphere and derive the associated loss function. We also consider the von Mises-Fisher distribution, which is the conditional of a Gaussian in the unit-sphere. The learned representations are pushed toward fixed directions, which are the prior means of the Gaussians; allowing for a learning strategy that is resilient to data drift. This makes it suitable for online continual learning, which is the problem of training neural networks on a continuous data stream, where multiple classification tasks are presented sequentially so that data from past tasks are no longer accessible, and data from the current task can be seen only once. To address this challenging scenario, we propose a memory-based representation learning technique equipped with our new loss functions. Our approach does not require negative data or knowledge of task boundaries and performs well with smaller batch sizes while being computationally efficient. We demonstrate with extensive experiments that the proposed method outperforms the current state-of-the-art methods on both standard evaluation scenarios and realistic scenarios with blurry task boundaries. For reproducibility, we use the same training pipeline for every compared method and share the code at https://github.com/Nicolas1203/ocl-fd.



## Notes

[Zotero Link](zotero://select/library/items/H6I2ZLH8)


