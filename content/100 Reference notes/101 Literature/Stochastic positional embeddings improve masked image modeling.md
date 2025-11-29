---
authors:
  - "[[Amir Bar]]"
  - "[[Florian Bordes]]"
  - "[[Assaf Shocher]]"
  - "[[Mahmoud Assran]]"
  - "[[Pascal Vincent]]"
  - "[[Nicolas Ballas]]"
  - "[[Trevor Darrell]]"
  - "[[Amir Globerson]]"
  - "[[Yann LeCun]]"
year: 2024
tags:
  - paper
  - ssl
  - dl_theory
url: http://arxiv.org/abs/2308.00566
share: true
---


> [!tldr] Abstract
> Masked Image Modeling (MIM) is a promising self-supervised learning approach that enables learning from unlabeled images. Despite its recent success, learning good representations through MIM remains challenging because it requires predicting the right semantic content in accurate locations. For example, given an incomplete picture of a dog, we can guess that there is a tail, but we cannot determine its exact location. In this work, we propose to incorporate location uncertainty into MIM by using stochastic positional embeddings (StoP). Specifically, we condition the model on stochastic masked token positions drawn from a Gaussian distribution. StoP reduces overfitting to location features and guides the model toward learning features that are more robust to location uncertainties. Quantitatively, StoP improves downstream MIM performance on a variety of downstream tasks, including $+1.7\%$ on ImageNet linear probing using ViT-B, and $+2.5\%$ for ViT-H using $1\%$ of the data.



## Notes

[Zotero Link](zotero://select/library/items/5T2AQ75W)




> we condition the model on stochastic masked token positions drawn from a Gaussian distribution.
> 
> 



> Without explicitly modeling this location uncertainty, existing MIM models like MAE and I-JEPA might overfit on semantic content in arbitrary locations (e.g, the tail location).
> 
> 



> we model the position of every masked token
> 
> 



> as a random variable with a Gaussian distribution where its mean is the position of the patch, and the covariance matrix is learned.
> 
> 

