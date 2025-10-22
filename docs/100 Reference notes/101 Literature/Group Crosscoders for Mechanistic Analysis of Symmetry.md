---
authors:
  - "[[Liv Gorton|Liv Gorton]]"
year: 2024
tags:
  - paper
  - mechinterp
  - computer_vision
url: http://arxiv.org/abs/2410.24184
share: true
---


> [!tldr] Abstract
> We introduce group crosscoders, an extension of crosscoders that systematically discover and analyse symmetrical features in neural networks. While neural networks often develop equivariant representations without explicit architectural constraints, understanding these emergent symmetries has traditionally relied on manual analysis. Group crosscoders automate this process by performing dictionary learning across transformed versions of inputs under a symmetry group. Applied to InceptionV1’s mixed3b layer using the dihedral group D32, our method reveals several key insights: First, it naturally clusters features into interpretable families that correspond to previously hypothesised feature types, providing more precise separation than standard sparse autoencoders. Second, our transform block analysis enables the automatic characterisation of feature symmetries, revealing how different geometric features (such as curves versus lines) exhibit distinct patterns of invariance and equivariance. These results demonstrate that group crosscoders can provide systematic insights into how neural networks represent symmetry, offering a promising new tool for mechanistic interpretability.



## Notes

[Zotero Link](zotero://select/library/items/ZM2TE6J6)




> Group crosscoders automate this process by performing dictionary learning across transformed versions of inputs under a symmetry group.
> 
> 

