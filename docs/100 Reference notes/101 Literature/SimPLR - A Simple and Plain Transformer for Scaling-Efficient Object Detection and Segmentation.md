---
authors:
  - "[[Duy-Kien Nguyen|Duy-Kien Nguyen]]"
  - "[[Martin R. Oswald|Martin R. Oswald]]"
  - "[[Cees G. M. Snoek|Cees G. M. Snoek]]"
year: 2024
tags:
  - paper
  - object_detection
  - computer_vision
  - vit
url: https://arxiv.org/abs/2310.05920
share: true
---
> [!tldr] Abstract
> The ability to detect objects in images at varying scales has played a pivotal role in the design of modern object detectors. Despite considerable progress in removing hand-crafted components and simplifying the architecture with transformers, multi-scale feature maps and/or pyramid design remain a key factor for their empirical success. In this paper, we show that this reliance on either feature pyramids or an hierarchical backbone is unnecessary and a transformer-based detector with scale-aware attention enables the plain detector 'SimPLR' whose backbone and detection head are both non-hierarchical and operate on single-scale features. We find through our experiments that SimPLR with scale-aware attention is plain and simple, yet competitive with multi-scale vision transformer alternatives. Compared to the multi-scale and single-scale state-of-the-art, our model scales much better with bigger capacity (self-supervised) models and more pre-training data, allowing us to report a consistently better accuracy and faster runtime for object detection, instance segmentation as well as panoptic segmentation. Code will be released.



## Notes

> “Despite enabling plain-backbone detectors, feature pyramids are still an important factor in ViTDet to detect objects at various scales” (Nguyen et al., 2024, p. 4)

Not really an issue as far as I understand, but in the spirit of less inductive biases it makes sense. Feature pyramids intuitively hardcode scale information.

> “Most recently, Lin et al. [35] introduce the transformer-based detector, PlainDETR, which also removes the multi-scale input. However, it still relies on multi-scale features to generate the object proposals for its decoder.” (Nguyen et al., 2024, p. 4)

Don't quite understand this, does this still allow arbitrary vits?
- [ ] Read PlainDETR 🔽 