---
tags:
  - dl_theory
  - question
date: 2025-01-01
---

There's a general consensus that less inductive biases are better, intuitively because it helps optimization by allowing for more hardware-friendly architectures, etc.

First, [[An image is worth 16x16 words - Transformers for image recognition at scale]] shows that ViTs, with minimal inductive biases, outperform ConvNets. ViTs have:
- No translational equivariance baked in
- No locality inductive bias enforced
	- Although positional encodings exist and fixed sinusoidal encodings can be used, they are mostly learned and randomly/zero initialized.
They show that Vision Transformers scale better than ConvNets and Mixed Architectures (Convolutional stems + Transformer).

[[A ConvNet for the 2020s]] proves that ResNets are outdated and improves the network with recent advances to match ViTs performance. 

[[The Lie derivative for measuring learned equivariance]] shows surprising result: ViTs exhibit more translational equivariance after training than ConvNets, as measured per their Lie Derivative.

[[An Image is Worth More Than 16x16 Patches - Exploring Transformers on Individual Pixels]] tackles the toy question of dropping the convolutional stem that does the patchification in ViTs, with the intention of further reducing inductive biases. They prove that the resulting model (although too computationally intensive to be used in practice), competes with ViTs.

[[How do vision transformers work?]] argues that the benefit of Vision Transformers is not that they have less inductive biases, but that the their operations are input dependent (see [[Input-dependent convolutions]]) and that Self Attention acts as a smoothing mechanism (that helps with better training dynamics on the large data regimes). They ablate this decision by constraining ViTs attention to be local, outperforming ViTs with global attention both in small and large data regimes. This is a strong indication that locality constraints are useful.  

[[Learning with Unmasked Tokens Drives Stronger Vision Learners]] implicitly counter-argues [[How do vision transformers work?]] by noticing that MIM-trained ViTs exhibit localized attention maps and "fixing" it. Their approach outperforms other MIM-trained ViTs, so locality as good inductive bias is not definitely answered.

[[Deep Learning is Not So Mysterious or Different]] argues for soft inductive bias instead of hard inductive biases (like conv2d's translation equivariance or equivariant models in general).

[[Searching for Efficient Linear Layers over a Continuous Space of Structured Matrices]] shows scaling laws that indicate that increasing parameter sharing leads to worse scaling.

[[Yi Ma]] often argues that low dimensionality should be the only inductive bias we need ([ref](https://people.eecs.berkeley.edu/~yima/slides/Keynote-Ma.pdf)).

## ViTs vs Dense prediction tasks

[[A ConvNet for the 2020s]] mentions that ViTs struggle on dense prediction tasks and they require hierarchical architectural choices (Swin Transformer) to do well. These choices re-introduce inductive biases.

However, there's recent promising work that is (I think) successfully dropping these constraints:
- [[Exploring Plain Vision Transformer Backbones for Object Detection]]
- [[SimPLR - A Simple and Plain Transformer for Scaling-Efficient Object Detection and Segmentation]]


