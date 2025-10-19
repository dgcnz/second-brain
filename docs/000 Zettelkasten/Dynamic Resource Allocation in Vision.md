---
tags:
  - efficient_dl
  - efficient_vision
share: true
---

At the embedding level
- 1D tokens (truncating patch suffix (at the sequence dim))
	- [[Principal Components Enable A New Language of Images|Principal Components Enable A New Language of Images]]
	- [[FlexTok - Resampling Images into 1D Token Sequences of Flexible Length|FlexTok - Resampling Images into 1D Token Sequences of Flexible Length]]
- 2D tokens (truncating patch suffixes (at the embed dim))
	- [[Matryoshka Representation Learning|Matryoshka Representation Learning]]
	- [[Franca - Nested Matryoshka Clustering for Scalable Visual Representation Learning|Franca - Nested Matryoshka Clustering for Scalable Visual Representation Learning]]

At the network level (embed_dim, depth, etc)
- [[EA-ViT - Efficient Adaptation for Elastic Vision Transformer|EA-ViT - Efficient Adaptation for Elastic Vision Transformer]]
- [[MatFormer - Nested Transformer for Elastic Inference|MatFormer - Nested Transformer for Elastic Inference]]
- [[HydraViT - Stacking Heads for a Scalable ViT|HydraViT - Stacking Heads for a Scalable ViT]]
- [[Slicing Vision Transformer for Flexible Inference|Slicing Vision Transformer for Flexible Inference]]

At the network level we also have patch pruning and merging methods