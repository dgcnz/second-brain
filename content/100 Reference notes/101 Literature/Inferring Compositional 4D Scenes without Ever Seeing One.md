---
authors:
  - "[[Ahmet Berke Gokmen]]"
  - "[[Ajad Chhatkuli]]"
  - "[[Luc Van Gool]]"
  - "[[Danda Paudel]]"
year: 2025
date: 2025-12-04
tags:
  - paper
url: https://arxiv.org/abs/2512.05272
draft: false
---


> [!tldr] Abstract
> Scenes in the real world are often composed of several static and dynamic objects. Capturing their 4-dimensional structures, composition and spatio-temporal configuration in-the-wild, though extremely interesting, is equally hard. Therefore, existing works often focus on one object at a time, while relying on some category-specific parametric shape model for dynamic objects. This can lead to inconsistent scene configurations, in addition to being limited to the modeled object categories. We propose COM4D (Compositional 4D), a method that consistently and jointly predicts the structure and spatio-temporal configuration of 4D/3D objects using only static multi-object or dynamic single object supervision. We achieve this by a carefully designed training of spatial and temporal attentions on 2D video input. The training is disentangled into learning from object compositions on the one hand, and single object dynamics throughout the video on the other, thus completely avoiding reliance on 4D compositional training data. At inference time, our proposed attention mixing mechanism combines these independently learned attentions, without requiring any 4D composition examples. By alternating between spatial and temporal reasoning, COM4D reconstructs complete and persistent 4D scenes with multiple interacting objects directly from monocular videos. Furthermore, COM4D provides state-of-the-art results in existing separate problems of 4D object and composed 3D reconstruction despite being purely data-driven.



## Notes

[Zotero Link](zotero://select/library/items/ZU4T52AE)
