---
tags:
  - computer_vision
  - dl_theory
  - representation_learning
  - inductive_bias
share: true
---
There's been work in the past to attempt to separate semantics and pose information from representations. Generally speaking there is a bunch of literature on equivariant neural networks and [[Equivariant SSL]] but usually restrict themselves to specific transformations, etc.

One somewhat recent paper that attempts to find a more general way to encode equivariant representations is [[Self-supervised learning of Split Invariant Equivariant representations|SIE]] where they split the representation in an invariant part and an equivariant part. The invariant part is supposed to encode semantics while the equivariant part encodes pose information (in particular rotations in this paper if I recall). They find that such a separation is a bit noisy (sometimes you need the semantics to understand the pose and viceversa) but that might be implementation dependent? 

Overall, it loosely seems that works that try to separate semantics and pose tend to be a bit brittle and not super general. Although of course the idea is appealing.

Somewhat related, there has been very recent work (2025) that has explicitly tried to remove positional information from their representations in order to keep "purer" semantic representations. For example:  [[Franca - Nested Matryoshka Clustering for Scalable Visual Representation Learning|Franca]] trains a linear classifier on top of patch representations that predicts the absolute position and then orthogonalizes the patch representations with respect to the classifier weights. This is supposed to remove positional information from the patch representations. [[Into the Rabbit Hull - From Task-Relevant Concepts in DINO to Minkowski Geometry|Into the Rabbit Hull]] does the exact same thing but moreso to analyze if locality in patch features stems from the positional encodings (tldr: if they remove the pos, it still yields locally connected embs). 

So in a way there is a case for separating semantics and pose, or more so remove the pose altogether and keep semantics (or at least absolute position). This might make sense in semantic segmentation tasks of image models, but what about video models which can leverage 3d information? 


