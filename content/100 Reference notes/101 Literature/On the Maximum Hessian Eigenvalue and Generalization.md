---
authors:
  - "[[Simran Kaur]]"
  - "[[Jeremy Cohen]]"
  - "[[Zachary C. Lipton]]"
year: 2022
tags:
  - dl2
  - optimizability
url: https://arxiv.org/abs/2206.10654
share:
---
> [!info] Abstract
> The mechanisms by which certain training interventions, such as increasing learning rates and applying batch normalization, improve the generalization of deep networks remains a mystery. Prior works have speculated that “flatter” solutions generalize better than “sharper” solutions to unseen data, motivating several metrics for measuring flatness (particularly λmax, the largest eigenvalue of the Hessian of the loss); and algorithms, such as Sharpness-Aware Minimization (SAM) [1], that directly optimize for flatness. Other works question the link between λmax and generalization. 
> 
> In this paper, we present findings that call λmax’s influence on generalization further into question. We show that: (1) while larger learning rates reduce λmax for all batch sizes, generalization benefits sometimes vanish at larger batch sizes; (2) by scaling batch size and learning rate simultaneously, we can change λmax without affecting generalization; (3) while SAM produces smaller λmax for all batch sizes, generalization benefits (also) vanish with larger batch sizes; (4) for dropout, excessively high dropout probabilities can degrade generalization, even as they promote smaller λmax; and (5) while batch-normalization does not consistently produce smaller λmax, it nevertheless confers generalization benefits. While our experiments affirm the generalization benefits of large learning rates and SAM for minibatch SGD, the GD-SGD discrepancy demonstrates limits to λmax’s ability to explain generalization in neural networks.
