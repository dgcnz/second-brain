---
authors:
  - "[[Jing Yang]]"
  - "[[Xiatian Zhu]]"
  - "[[Adrian Bulat]]"
  - "[[Brais Martinez]]"
  - "[[Georgios Tzimiropoulos]]"
year: 2022
date: 2022-05-13
tags:
  - paper
url: https://arxiv.org/abs/2205.06701
draft: false
---


> [!tldr] Abstract
> Existing knowledge distillation methods mostly focus on distillation of teacher's prediction and intermediate activation. However, the structured representation, which arguably is one of the most critical ingredients of deep models, is largely overlooked. In this work, we propose a novel {\em \modelname{}} ({\bf\em \shortname{})} method dedicated for distilling representational knowledge semantically from a pretrained teacher to a target student. The key idea is that we leverage the teacher's classifier as a semantic critic for evaluating the representations of both teacher and student and distilling the semantic knowledge with high-order structured information over all feature dimensions. This is accomplished by introducing a notion of cross-network logit computed through passing student's representation into teacher's classifier. Further, considering the set of seen classes as a basis for the semantic space in a combinatorial perspective, we scale \shortname{} to unseen classes for enabling effective exploitation of largely available, arbitrary unlabeled training data. At the problem level, this establishes an interesting connection between knowledge distillation with open-set semi-supervised learning (SSL). Extensive experiments show that our \shortname{} outperforms significantly previous state-of-the-art knowledge distillation methods on both coarse object classification and fine face recognition tasks, as well as less studied yet practically crucial binary network distillation. Under more realistic open-set SSL settings we introduce, we reveal that knowledge distillation is generally more effective than existing Out-Of-Distribution (OOD) sample detection, and our proposed \shortname{} is superior over both previous distillation and SSL competitors. The source code is available at \url{https://github.com/jingyang2017/SRD\_ossl}.



## Notes

[Zotero Link](zotero://select/library/items/8KW7GIUR)
