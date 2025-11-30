---
tags:
  - dl_theory
  - information_theory
  - spectral
date: 2025-01-01
---

This note gathers papers that use concepts from information theory and spectral theory for deep learning.

## Hierarchical Tokenization for images (also relates to [[Global Precedence Effect]])
- [[FlexTok - Resampling Images into 1D Token Sequences of Flexible Length]]. FlexTok converts an image into a variable-length, ordered 1-D token sequence that preserves hierarchical semantics and allows bitrate-adaptive reconstruction.
- [[Principal Components Enable A New Language of Images]]. Embeds a provable PCA-like basis into visual tokens, yielding structured and interpretable image representations that boost downstream performance.

## Other non-linear tokenizations
- [[Byte Latent Transformer - Patches Scale Better Than Tokens]] #entropy — BLT demonstrates that scaling vision models with raw byte-level patches outperforms fixed-token approaches at equal compute. 

## Coding Rate
- [[White-Box Transformers via Sparse Rate Reduction - Compression Is All There Is]] — Frames representation learning as sparse rate reduction toward mixtures of low-dimensional Gaussians, yielding transparent, theoretically grounded transformer layers. 
- [[Simplifying DINO via Coding Rate Regularization]] — Shows that adding a coding-rate loss term stabilizes and simplifies DINO, removing most heuristics while improving robustness and accuracy.
	- Both use coding rate, which is differential #entropy under a Gaussian source and serves as an upper bound on true differential entropy for real-valued vectors.

## Other
- https://sander.ai/2024/09/02/spectral-autoregression.html — Argues that diffusion models implement approximate autoregression in the frequency domain, unifying diffusion and autoregressive viewpoints. 
- [[Rethinking Lossy Compression - The Rate-Distortion-Perception Tradeoff]] — Establishes a fundamental three-way trade-off showing that enforcing high perceptual quality raises the achievable rate-distortion curve.
- [[Rate–Distortion–Perception Trade-Off in Information Theory, Generative Models, and Intelligent Communications]] — Extends the RDP framework, highlighting how generative models can achieve perceptually optimized communication at additional rate cost. 
- [[Average entropy of Gaussian mixtures]] — Provides an analytic series expansion for the differential entropy of Gaussian mixtures, supplying tighter bounds useful for coding-rate objectives. 
- [[Matryoshka Representation Learning]] — Introduces nested “doll” embeddings that flexibly trade compute for accuracy, adapting a single representation to diverse downstream tasks. 
- [[Learning Continually by Spectral Regularization]] — Maintains network plasticity in continual learning by constraining each layer’s largest singular value near one, preserving gradient diversity. 
- [[Towards Understanding the Spectral Bias of Deep Learning]] — Provides a theoretical explanation linking NTK eigenvalues to faster learning of low-frequency functions, illuminating spectral bias. 

PS: Personally curated list. (1-sentence summaries by gpt-o3 because i was too lazy :p). 
