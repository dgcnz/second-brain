---
tags:
  - efficient_dl
  - hardware_aware_dl
date: 2024-01-01
---

> [!important] Key Idea
> Some GPU architectures can take advantage of specific sparsity patterns.

According to [this](https://developer.nvidia.com/blog/nvidia-ampere-architecture-in-depth/) the training procedure would look as follows:
> NVIDIA has developed a simple and universal recipe for sparsifying deep neural networks for inference using this 2:4 structured sparsity pattern. **The network is first trained using dense weights, then fine-grained structured pruning is applied, and finally the remaining non-zero weights are fine-tuned with additional training step**s. This method results in virtually no loss in inferencing accuracy based on evaluation across dozens of networks spanning vision, object detection, segmentation, natural language modeling, and translation.


![[Pasted image 20240615160945.png]]
References:
- [[TinyML and Efficient Deep Learning Computing - Lecture 3]]
- https://developer.nvidia.com/blog/accelerating-inference-with-sparsity-using-ampere-and-tensorrt/
- https://developer.nvidia.com/blog/structured-sparsity-in-the-nvidia-ampere-architecture-and-applications-in-search-engines/
