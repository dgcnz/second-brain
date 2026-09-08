---
authors:
  - "[[Florian Beier]]"
  - "[[Hancheng Bi]]"
  - "[[Clément Sarrazin]]"
  - "[[Bernhard Schmitzer]]"
  - "[[Gabriele Steidl]]"
year: 2024
date: 2024-02-13
tags:
  - paper
url: https://arxiv.org/abs/2402.08425
draft: false
---


> [!tldr] Abstract
> In this paper, we are concerned with estimating the joint probability of random variables $X$ and $Y$, given $N$ independent observation blocks $(\boldsymbol{x}^i,\boldsymbol{y}^i)$, $i=1,\ldots,N$, each of $M$ samples $(\boldsymbol{x}^i,\boldsymbol{y}^i) = \bigl((x^i_j, y^i_{σ^i(j)}) \bigr)_{j=1}^M$, where $σ^i$ denotes an unknown permutation of i.i.d. sampled pairs $(x^i_j,y_j^i)$, $j=1,\ldots,M$. This means that the internal ordering of the $M$ samples within an observation block is not known. We derive a maximum-likelihood inference functional, propose a computationally tractable approximation and analyze their properties. In particular, we prove a $Γ$-convergence result showing that we can recover the true density from empirical approximations as the number $N$ of blocks goes to infinity. Using entropic optimal transport kernels, we model a class of hypothesis spaces of density functions over which the inference functional can be minimized. This hypothesis class is particularly suited for approximate inference of transfer operators from data. We solve the resulting discrete minimization problem by a modification of the EMML algorithm to take addional transition probability constraints into account and prove the convergence of this algorithm. Proof-of-concept examples demonstrate the potential of our method.



## Notes

[Zotero Link](zotero://select/library/items/456QJE45)
