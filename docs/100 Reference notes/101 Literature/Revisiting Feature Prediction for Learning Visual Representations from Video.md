---
authors:
  - "[[Adrien Bardes|Adrien Bardes]]"
  - "[[Quentin Garrido|Quentin Garrido]]"
  - "[[Jean Ponce|Jean Ponce]]"
  - "[[Xinlei Chen|Xinlei Chen]]"
  - "[[Michael Rabbat|Michael Rabbat]]"
  - "[[Yann LeCun|Yann LeCun]]"
  - "[[Mahmoud Assran|Mahmoud Assran]]"
  - "[[Nicolas Ballas|Nicolas Ballas]]"
year: 2024
tags:
  - paper
  - video
  - ssl
url: http://arxiv.org/abs/2404.08471
share: true
---


> [!tldr] Abstract
> This paper explores feature prediction as a stand-alone objective for unsupervised learning from video and introduces V-JEPA, a collection of vision models trained solely using a feature prediction objective, without the use of pretrained image encoders, text, negative examples, reconstruction, or other sources of supervision. The models are trained on 2 million videos collected from public datasets and are evaluated on downstream image and video tasks. Our results show that learning by predicting video features leads to versatile visual representations that perform well on both motion and appearance-based tasks, without adaption of the model's parameters; e.g., using a frozen backbone. Our largest model, a ViT-H/16 trained only on videos, obtains 81.9% on Kinetics-400, 72.2% on Something-Something-v2, and 77.9% on ImageNet1K.



## Notes

[Zotero Link](zotero://select/library/items/57MLFXM6)




> Feature prediction leads to versatile visual representations that perform well across downstream image and video tasks without adaption of the model’s weights;
> 
> 



> In fact, the objective in equation (1) is similar to the loss of Assran et al. (2023) used for image pretraining, but we modify it to use an l1 regression, which we found to be more stable.
> 
> 
> Incredibly interesting. L1 regression because it was more stable. This is not very intuitive either! L1 is sparsity encouraging and would assume entries in the latents are laplace distributed instead of gaussian distributed.




> The hypothesis is that incorporating an exponential moving average to compute the representation of y ensures that the predictor evolves faster than the encoder and remains close to optimal, thereby preventing collapse.
> 
> 



> Masking a large continuous block that covers the full temporal dimension limits information leakage due to the spatial and temporal redundancy of videos, and results in a harder prediction task
> 
> 



> The encoder is parameterized using standard ViT networks, while the predictor is a narrow transformer implemented using 12 blocks with an embedding dimension of 384.
> 
> 

