---
authors:
  - "[[Sourya Basu|Sourya Basu]]"
tags:
  - dl2
year: 
url: 
share: true
---

Builds on top of [[Equi-Tuning - Group Equivariant Fine-Tuning of Pretrained Models|Equi-Tuning - Group Equivariant Fine-Tuning of Pretrained Models]] and [[Equivariance with Learned Canonicalization Functions|Equivariance with Learned Canonicalization Functions]]
> [!faq] Hypothesis
> Pretrained models provide **better quality features for certain transformations** than others and simply averaging them is bad.

> [!done] Main idea
> Lambda-Equitune: Weighted average with learned weights, $\lambda$.
> 
> $$
> M_G^\lambda(x) = \frac{1}{\sum_{g \in G} \lambda(gx)} \sum_{g \in G} \lambda(gx) g^{-1} M(gx) 
> $$
