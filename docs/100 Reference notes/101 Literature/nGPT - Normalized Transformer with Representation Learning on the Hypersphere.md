---
authors:
  - "[[Ilya Loshchilov|Ilya Loshchilov]]"
  - "[[Cheng-Ping Hsieh|Cheng-Ping Hsieh]]"
  - "[[Simeng Sun|Simeng Sun]]"
  - "[[Boris Ginsburg|Boris Ginsburg]]"
year: 2024
tags:
  - paper
  - efficient_dl
  - transformers
url: https://arxiv.org/abs/2410.01131
share: true
---
> [!tldr] Abstract
> We propose a novel neural network architecture, the normalized Transformer (nGPT) with representation learning on the hypersphere. In nGPT, all vectors forming the embeddings, MLP, attention matrices and hidden states are unit norm normalized. The input stream of tokens travels on the surface of a hypersphere, with each layer contributing a displacement towards the target output predictions. These displacements are defined by the MLP and attention blocks, whose vector components also reside on the same hypersphere. Experiments show that nGPT learns much faster, reducing the number of training steps required to achieve the same accuracy by a factor of 4 to 20, depending on the sequence length.

![[Pasted image 20241010085554.png|Pasted image 20241010085554.png]]

# Notes
- Interesting, since [[Hyperspherical Variational Auto-Encoders|Hyperspherical Variational Auto-Encoders]] claims that high-dimensional hyperspheres are not well suited for embeddings due to the vanishing surface problem. However, the nGPT paper claims that hypersphere embeddings are beneficial for training transformers. There's some discussion at [Twitter](https://x.com/maksym_andr/status/1843923528502129122).


