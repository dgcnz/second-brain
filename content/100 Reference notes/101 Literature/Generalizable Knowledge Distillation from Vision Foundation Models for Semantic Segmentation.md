---
authors:
  - "[[Chonghua Lv]]"
  - "[[Dong Zhao]]"
  - "[[Shuang Wang]]"
  - "[[Dou Quan]]"
  - "[[Ning Huyan]]"
  - "[[Nicu Sebe]]"
  - "[[Zhun Zhong]]"
year: 2026
date: 2026-03-03
tags:
  - paper
url: https://arxiv.org/abs/2603.02554
draft: false
---


> [!tldr] Abstract
> Knowledge distillation (KD) has been widely applied in semantic segmentation to compress large models, but conventional approaches primarily preserve in-domain accuracy while neglecting out-of-domain generalization, which is essential under distribution shifts. This limitation becomes more severe with the emergence of vision foundation models (VFMs): although VFMs exhibit strong robustness on unseen data, distilling them with conventional KD often compromises this ability. We propose Generalizable Knowledge Distillation (GKD), a multi-stage framework that explicitly enhances generalization. GKD decouples representation learning from task learning. In the first stage, the student acquires domain-agnostic representations through selective feature distillation, and in the second stage, these representations are frozen for task adaptation, thereby mitigating overfitting to visible domains. To further support transfer, we introduce a query-based soft distillation mechanism, where student features act as queries to teacher representations to selectively retrieve transferable spatial knowledge from VFMs. Extensive experiments on five domain generalization benchmarks demonstrate that GKD consistently outperforms existing KD methods, achieving average gains of +1.9% in foundation-to-foundation (F2F) and +10.6% in foundation-to-local (F2L) distillation. The code will be available at https://github.com/Younger-hua/GKD.



## Notes

[Zotero Link](zotero://select/library/items/HL6MMH6U)
