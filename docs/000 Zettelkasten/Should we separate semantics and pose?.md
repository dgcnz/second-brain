---
tags:
  - computer_vision
  - dl_theory
  - representation_learning
  - inductive_bias
share: true
---
There's been work in the past to attempt to separate semantics and pose information from representations. Generally speaking there is a bunch of literature on equivariant neural networks and [[Equivariant SSL|Equivariant SSL]] but usually restrict themselves to specific transformations, etc.

One somewhat recent paper that attempts to find a more general way to encode equivariant representations is [[Self-supervised learning of Split Invariant Equivariant representations|SIE]] where they split the representation in an invariant part and an equivariant part. The invariant part is supposed to encode semantics while the equivariant part encodes pose information (in particular rotations in this paper if I recall). They find that such a separation is a bit noisy (sometimes you need the semantics to understand the pose and viceversa) but that might be implementation dependent? 

Overall, it seem loosely speaking t



[[Franca - Nested Matryoshka Clustering for Scalable Visual Representation Learning|Franca - Nested Matryoshka Clustering for Scalable Visual Representation Learning]]