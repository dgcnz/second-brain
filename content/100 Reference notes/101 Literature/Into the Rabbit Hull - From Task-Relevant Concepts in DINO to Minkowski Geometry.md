---
authors:
- '[[Thomas Fel]]'
- '[[Binxu Wang]]'
- '[[Michael A. Lepori]]'
- '[[Matthew Kowal]]'
- '[[Andrew Lee]]'
- '[[Randall Balestriero]]'
- '[[Sonia Joseph]]'
- '[[Ekdeep S. Lubana]]'
- '[[Talia Konkle]]'
- '[[Demba Ba]]'
- '[[Martin Wattenberg]]'
year: 2025
tags:
- paper
- dl_theory
- ssl
- geometry
url: http://arxiv.org/abs/2510.08638
date: '2025-10-08'
---

> [!tldr] Abstract
> DINOv2 is routinely deployed to recognize objects, scenes, and actions; yet the nature of what it perceives remains unknown. As a working baseline, we adopt the Linear Representation Hypothesis (LRH) and operationalize it using SAEs, producing a 32,000-unit dictionary that serves as the interpretability backbone of our study, which unfolds in three parts. In the first part, we analyze how different downstream tasks recruit concepts from our learned dictionary, revealing functional specialization: classification exploits "Elsewhere" concepts that fire everywhere except on target objects, implementing learned negations; segmentation relies on boundary detectors forming coherent subspaces; depth estimation draws on three distinct monocular depth cues matching visual neuroscience principles. Following these functional results, we analyze the geometry and statistics of the concepts learned by the SAE. We found that representations are partly dense rather than strictly sparse. The dictionary evolves toward greater coherence and departs from maximally orthogonal ideals (Grassmannian frames). Within an image, tokens occupy a low dimensional, locally connected set persisting after removing position. These signs suggest representations are organized beyond linear sparsity alone. Synthesizing these observations, we propose a refined view: tokens are formed by combining convex mixtures of archetypes (e.g., a rabbit among animals, brown among colors, fluffy among textures). This structure is grounded in Gardenfors' conceptual spaces and in the model's mechanism as multi-head attention produces sums of convex mixtures, defining regions bounded by archetypes. We introduce the Minkowski Representation Hypothesis (MRH) and examine its empirical signatures and implications for interpreting vision-transformer representations.



## Notes

[Zotero Link](zotero://select/library/items/UL6VZDP8)

![[Pasted image 20251129192345.png]]
*Figure 6: DINO encodes diverse monocular depth cues. Visualization of key concepts used in monocular depth estimation tasks. We identify three dominant types: projective geometry cues (e.g., vanishing lines, converging structures), shadow-based cues (e.g., soft lighting gradients and cast shadows), and frequency-based cues (e.g., transitions between high- and low-texture regions). These findings suggest that DINO learns a rich basis of 3D perception primitives from 2D data alone.*

---

"""
We trained linear decoders to decode the token position from each layer’s activations and extracted the corresponding decoding vectors at each spatial location (i, j) to form a position encoding matrix P ∈ R256×d at each layer (see Section I for more details)
[...]u
Still in Figure 14, we showed that the position basis is not responsible for the main part of the structure observed in the PCA visualization. To test qualitatively this effect, we project token embeddings orthogonal to the positional subspace, completely removing positional information by projecting the token on the orthogonal subspace of the classifier.
"""

This is effectively the same as [[Franca - Nested Matryoshka Clustering for Scalable Visual Representation Learning|Franca]]'s RASA.