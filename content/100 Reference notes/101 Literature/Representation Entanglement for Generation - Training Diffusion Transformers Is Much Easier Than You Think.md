---
authors:
  - "[[Ge Wu]]"
  - "[[Shen Zhang]]"
  - "[[Ruijing Shi]]"
  - "[[Shanghua Gao]]"
  - "[[Zhenyuan Chen]]"
  - "[[Lei Wang]]"
  - "[[Zhaowei Chen]]"
  - "[[Hongcheng Gao]]"
  - "[[Yao Tang]]"
  - "[[Jian Yang]]"
  - "[[Ming-Ming Cheng]]"
  - "[[Xiang Li]]"
year: 2025
date: 2025-07-02
tags:
  - paper
url: https://arxiv.org/abs/2507.01467
draft: false
---


> [!tldr] Abstract
> REPA and its variants effectively mitigate training challenges in diffusion models by incorporating external visual representations from pretrained models, through alignment between the noisy hidden projections of denoising networks and foundational clean image representations. We argue that the external alignment, which is absent during the entire denoising inference process, falls short of fully harnessing the potential of discriminative representations. In this work, we propose a straightforward method called Representation Entanglement for Generation (REG), which entangles low-level image latents with a single high-level class token from pretrained foundation models for denoising. REG acquires the capability to produce coherent image-class pairs directly from pure noise, substantially improving both generation quality and training efficiency. This is accomplished with negligible additional inference overhead, requiring only one single additional token for denoising (<0.5\% increase in FLOPs and latency). The inference process concurrently reconstructs both image latents and their corresponding global semantics, where the acquired semantic knowledge actively guides and enhances the image generation process. On ImageNet 256$\times$256, SiT-XL/2 + REG demonstrates remarkable convergence acceleration, achieving $\textbf{63}\times$ and $\textbf{23}\times$ faster training than SiT-XL/2 and SiT-XL/2 + REPA, respectively. More impressively, SiT-L/2 + REG trained for merely 400K iterations outperforms SiT-XL/2 + REPA trained for 4M iterations ($\textbf{10}\times$ longer). Code is available at: https://github.com/Martinser/REG.



## Notes

[Zotero Link](zotero://select/library/items/89KHC37H)
