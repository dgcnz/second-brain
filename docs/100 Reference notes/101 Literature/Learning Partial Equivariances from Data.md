---
authors:
  - "[[David W. Romero|David W. Romero]]"
tags:
  - dl2
year: 
url: 
share: true
---

> [!faq] Monte Carlo Approximation of Group Convolutions
> We can approximate Group Convolutions on the expectation by **uniformly** sampling group actions $v_j$.
> $$ 
> (\psi \hat{*} f)(u_i) = \sum_j \psi (v_j^{-1} u_i)f(v_j) \bar{\mu}_{\mathcal{G}} (v_j)
> $$

>[!done] Main idea
> 1. Prioritize sampling of specific group elements during the group convolution by learning a probability distribution over them.
> 2. 1D continuous groups: use reparametrization trick on the Lie algebra of the group, which is uniform over a connected set of group elements but zero otherwise. $\to$ **Partial Equivariance**
> 3. 1D discrete groups: Bernoulli Distribution over all possible element combinations

Citations:
- [[Self-Supervised Detection of Perfect and Partial Input-Dependent Symmetries|Self-Supervised Detection of Perfect and Partial Input-Dependent Symmetries]]
- [[Color Equivariant Convolutional Networks|Color Equivariant Convolutional Networks]]
- [[Equivariance-aware architectural optimization of neural networks|Equivariance-aware architectural optimization of neural networks]]
- [[Approximation-Generalization Trade-offs under (Approximate) Group Equivariance|Approximation-Generalization Trade-offs under (Approximate) Group Equivariance]]

