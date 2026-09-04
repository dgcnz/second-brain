---
authors:
  - "[[Thomas Ressler-Antal]]"
  - "[[Frank Fundel]]"
  - "[[Malek Ben Alaya]]"
  - "[[Stefan Andreas Baumann]]"
  - "[[Felix Krause]]"
  - "[[Ming Gui]]"
  - "[[Björn Ommer]]"
year: 2025
date: 2025-11-28
tags:
  - paper
url: https://arxiv.org/abs/2511.23428
draft: false
---


> [!tldr] Abstract
> Recent advances in text-to-video (T2V) and image-to-video (I2V) models, have enabled the creation of visually compelling and dynamic videos from simple textual descriptions or initial frames. However, these models often fail to provide an explicit representation of motion separate from content, limiting their applicability for content creators. To address this gap, we propose DisMo, a novel paradigm for learning abstract motion representations directly from raw video data via an image-space reconstruction objective. Our representation is generic and independent of static information such as appearance, object identity, or pose. This enables open-world motion transfer, allowing motion to be transferred across semantically unrelated entities without requiring object correspondences, even between vastly different categories. Unlike prior methods, which trade off motion fidelity and prompt adherence, are overfitting to source structure or drifting from the described action, our approach disentangles motion semantics from appearance, enabling accurate transfer and faithful conditioning. Furthermore, our motion representation can be combined with any existing video generator via lightweight adapters, allowing us to effortlessly benefit from future advancements in video models. We demonstrate the effectiveness of our method through a diverse set of motion transfer tasks. Finally, we show that the learned representations are well-suited for downstream motion understanding tasks, consistently outperforming state-of-the-art video representation models such as V-JEPA in zero-shot action classification on benchmarks including Something-Something v2 and Jester. Project page: https://compvis.github.io/DisMo



## Notes

[Zotero Link](zotero://select/library/items/UGPBUA6X)
