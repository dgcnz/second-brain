---
authors:
  - "[[Tete Xiao]]"
  - "[[Mannat Singh]]"
  - "[[Eric Mintun]]"
  - "[[Trevor Darrell]]"
  - "[[Piotr Dollár]]"
  - "[[Ross Girshick]]"
tags:
  - cnn
  - transformers
  - vit
  - optimizability
---
> [!info] ViTs is hard to optimize. 
> They are sensitive to the choice of optimizer (AdamW vs. SGD), optimizer hyperparameter and training schedule length.

> [!faq] Hypothesis
> ViT's patchify convolution is contrary to standard early layers in CNNs. Maybe that's the cause?

>[!done] Main idea
> Replace patchify convolution with a small number of convolutional layers and drop one transformer block to make comparison fair.
![[Pasted image 20240413144518.png]]

Notes for myself:
- Interesting experimentation regarding #optimizability , maybe take into account into hessian analysis