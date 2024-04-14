---
authors:
  - "[[Tete Xiao|Tete Xiao]]"
  - "[[Mannat Singh|Mannat Singh]]"
  - "[[Eric Mintun|Eric Mintun]]"
  - "[[Trevor Darrell|Trevor Darrell]]"
  - "[[Piotr Dollár|Piotr Dollár]]"
  - "[[Ross Girshick|Ross Girshick]]"
tags:
  - cnn
  - transformers
  - vit
  - optimizability
share: true
---



> [!faq] Hypothesis
> ViT's patchify convolution is contrary to standard early layers in CNNs. Maybe that's the cause?

>[!done] Main idea
> Replace patchify convolution with a small number of convolutional layers and drop one transformer block to make comparison fair.
![[vitc_vs_vitp.png|vitc_vs_vitp.png]]

Notes for myself:
- Interesting experimentation regarding #optimizability , maybe take into account into hessian analysis