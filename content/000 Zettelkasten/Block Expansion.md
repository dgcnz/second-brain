---
tags:
  - efficient_dl
  - transformers
date: 2024-01-01
---

Key idea:
- Introduce extra transformer block that is initialized to be the identity function and train that. 

From [[Parameter Efficient Fine-tuning of Self-supervised ViTs without Catastrophic Forgetting]]

> We introduce the concept of Block Expansion for fine-tuning pre-trained ViTs, building upon an idea that was recently proposed for language models [[27](https://arxiv.org/html/2404.17245v1#bib.bib27)] but has yet to be explored in vision. This technique is used to augment the capacity of a model without altering its initial output. In a ViT model comprised of sequential transformer blocks ($\phi_0,\phi_1,…,\phi_N$), Block Expansion adds an identity block ($\phi_{id}$) after a set of transformer blocks such that $\phi_{id}(x)=x$, meaning it returns the input as its output, ensuring the model’s output remains unchanged immediately after expansion. To expand a model from 𝑁 to 𝑁′ blocks, the original blocks are first grouped into sets containing 𝑀 blocks each. Within each set, an identity copy of the topmost block is created and placed on top, effectively increasing the model’s depth without initially changing its behavior. In each newly expanded block, two linear layers are zero-initialized to enable identity mapping, as shown in Figure [1](https://arxiv.org/html/2404.17245v1#S1.F1 "Figure 1 ‣ 1 Introduction ‣ Parameter Efficient Fine-tuning of Self-supervised ViTs without Catastrophic Forgetting") (c). These newly added blocks are only fine-tuned with the new data while the remaining blocks are frozen.