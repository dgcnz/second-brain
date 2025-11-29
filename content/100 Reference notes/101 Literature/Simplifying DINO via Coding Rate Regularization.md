---
authors:
  - "[[Ziyang Wu]]"
  - "[[Jingyuan Zhang]]"
  - "[[Druv Pai]]"
  - "[[XuDong Wang]]"
  - "[[Chandan Singh]]"
  - "[[Jianwei Yang]]"
  - "[[Jianfeng Gao]]"
  - "[[Yi Ma]]"
year: 2025
tags:
  - paper
  - information_theory
  - ssl
  - dl_theory
  - vit
  - transformers
url: http://arxiv.org/abs/2502.10385
share: true
---


> [!tldr] Abstract
> DINO and DINOv2 are two model families being widely used to learn representations from unlabeled imagery data at large scales. Their learned representations often enable state-of-theart performance for downstream tasks, such as image classification and segmentation. However, they employ many empirically motivated design choices and their training pipelines are highly complex and unstable — many hyperparameters need to be carefully tuned to ensure that the representations do not collapse — which poses considerable difficulty to improving them or adapting them to new domains. In this work, we posit that we can remove most such-motivated idiosyncrasies in the pre-training pipelines, and only need to add an explicit coding rate term in the loss function to avoid collapse of the representations. As a result, we obtain highly simplified variants of the DINO and DINOv2 which we call SimDINO and SimDINOv2, respectively. Remarkably, these simplified models are more robust to different design choices, such as network architecture and hyperparameters, and they learn even higher-quality representations, measured by performance on downstream tasks, offering a Pareto improvement over the corresponding DINO and DINOv2 models. This work highlights the potential of using simplifying design principles to improve the empirical practice of deep learning.



## Notes

[Zotero Link](zotero://select/library/items/SZWNXAUD)


> “To explain why DINO does not collapse, we wish to highlight the centering operation in (3), which computes batch statistics during its EMA update, hence using negative samples and implicitly pushing different samples’ features apart, even though the precise conceptual mechanism by which this occurs is not clear” (Wu et al., 2025, p. 3)

> “To see why this works, consider if some patches are masked, and the model is able to predict masked patches using their unmasked neighbors, then from each patch the model can extract strong information about the semantics of nearby patches” (Wu et al., 2025, p. 4)

> “Namely, we dispense with the DINO/iBOT heads, the Sinkhorn-Knopp centering, and the softmaxes, and compute the Euclidean distance-based loss directly on normalized features.” (Wu et al., 2025, p. 5)

It's interesting that [[SK Centering]] can be replaced also.

> “Due to the explicit coding rate regularization, it is possible to train SimDINO without self-distillation. To validate this, we train ViT-S models on ImageNet-1k by setting the teacher network to be the student network at each iteration, effectively removing the EMA operation. Results are presented in Table 8. We can see that the original DINO collapses under this setup for reasons discussed in Appendix B, while SimDINO is able to yield non-trivial performance. It is worth noting that compared to training with full self-distillation, this variant primarily lags behind in terms of k-NN performance while the gap in linear probe is significantly smaller.” (Wu et al., 2025, p. 16)

![[Pasted image 20250418170411.png|500]]

This is, I think, one of the most important advantages of using the CRR formulation over DINO's.  Training doesn't actually collapse without self-distillation.

> “On the theoretical side, our simplified framework provides an entry point for studying the geometric properties of the global optima of self-supervised learning losses.” (Wu et al., 2025, p. 8)
