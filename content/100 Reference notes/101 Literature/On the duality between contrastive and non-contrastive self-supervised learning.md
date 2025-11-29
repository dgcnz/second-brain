---
authors:
  - "[[Quentin Garrido]]"
  - "[[Yubei Chen]]"
  - "[[Adrien Bardes]]"
  - "[[Laurent Najman]]"
  - "[[Yann Lecun]]"
year: 2022
tags:
  - paper
  - dl_theory
  - computer_vision
  - ssl
  - self-distillation
  - representation_learning
  - hyperspherical
url: http://arxiv.org/abs/2206.02574
share: true
---


> [!tldr] Abstract
> Recent approaches in self-supervised learning of image representations can be categorized into different families of methods and, in particular, can be divided into contrastive and non-contrastive approaches. While differences between the two families have been thoroughly discussed to motivate new approaches, we focus more on the theoretical similarities between them. By designing contrastive and covariance based non-contrastive criteria that can be related algebraically and shown to be equivalent under limited assumptions, we show how close those families can be. We further study popular methods and introduce variations of them, allowing us to relate this theoretical result to current practices and show the influence (or lack thereof) of design choices on downstream performance. Motivated by our equivalence result, we investigate the low performance of SimCLR and show how it can match VICReg’s with careful hyperparameter tuning, improving significantly over known baselines. We also challenge the popular assumption that non-contrastive methods need large output dimensions. Our theoretical and quantitative results suggest that the numerical gaps between contrastive and noncontrastive methods in certain regimes can be closed given better network design choices and hyperparameter tuning. The evidence shows that unifying different SOTA methods is an important direction to build a better understanding of selfsupervised learning.



## Notes

[Zotero Link](zotero://select/library/items/K63HST33)




> We focus on covariance regularization-based non-contrastive methods (Zbontar et al., 2021; Ermolov et al., 2021; Bardes et al., 2021) and demonstrate that these methods can be seen as contrastive between the dimensions of the embeddings instead of contrastive between the samples

> and demonstrate that these methods can be seen as contrastive between the dimensions of the embeddings instead of contrastive between the samples

> Even though they do not fit perfectly in our framework, we discuss how methods such as DINO, SimSiam, or MoCo can be linked to Lc and Lnc in supplementary section B.

> This means that penalizing all the terms of the Gram matrix (i.e., pairwise similarities) is the same as penalizing all of the terms of the Covariance matrix.


> However, if both rows and columns of K were L2 normalized, we would have Lnc = Lc + N − M .

> Since SimCLR relies on the cosine distance as a similarity measure between embeddings, we can effectively say that it uses normalized embeddings.

> Spectral Contrastive Loss projects the embeddings on a  ball of radius √μ, with μ a tuned parameter,

> VICReg takes a similar approach where dimensions are centered, but their variance is regularized by the variance criterion.

> One of the main differences between normalizing embeddings or dimensions is that in the former case, embeddings are projected on a M − 1 dimensional hypersphere, and in the latter, they are not constrained on a particular manifold; instead, their spread in the ambient space is limited.

> Nonetheless, a constraint on the norm of the embeddings also constrains the norm of the dimensions indirectly, and vice versa,

> Both correspond to collapsed representations and will thus not be attained in practice

> Considering the previous discussions, we thus argue that the main differences between sample-contrastive and dimension-contrastive methods come from the optimization process as well as the implementation details.
> 
> The conclusion is that while some design choices negatively impact the optimization process on the embeddings, there are no easily visible differences in the representations which are used in practice.
> 
> 

