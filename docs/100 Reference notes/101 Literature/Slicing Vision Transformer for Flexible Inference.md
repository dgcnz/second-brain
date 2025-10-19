---
authors:
  - "[[Yitian Zhang|Yitian Zhang]]"
  - "[[Huseyin Coskun|Huseyin Coskun]]"
  - "[[Xu Ma|Xu Ma]]"
  - "[[Huan Wang|Huan Wang]]"
  - "[[Ke Ma|Ke Ma]]"
  - "[[ Xi| Xi]]"
  - "[[ Chen| Chen]]"
  - "[[Derek Hao Hu|Derek Hao Hu]]"
  - "[[Yun Fu|Yun Fu]]"
year: 2024
tags:
  - paper
url: http://arxiv.org/abs/2412.04786
share: true
---


> [!tldr] Abstract
> Vision Transformers (ViT) is known for its scalability. In this work, we target to scale down a ViT to fit in an environment with dynamic-changing resource constraints. We observe that smaller ViTs are intrinsically the sub-networks of a larger ViT with different widths. Thus, we propose a general framework, named Scala, to enable a single network to represent multiple smaller ViTs with flexible inference capability, which aligns with the inherent design of ViT to vary from widths. Concretely, Scala activates several subnets during training, introduces Isolated Activation to disentangle the smallest sub-network from other subnets, and leverages Scale Coordination to ensure each sub-network receives simplified, steady, and accurate learning objectives. Comprehensive empirical validations on different tasks demonstrate that with only one-shot training, Scala learns slimmable representation without modifying the original ViT structure and matches the performance of Separate Training. Compared with the prior art, Scala achieves an average improvement of 1.6% on ImageNet-1K with fewer parameters. Code is available at here.



## Notes

[Zotero Link](zotero://select/library/items/XKAKDWCX)


