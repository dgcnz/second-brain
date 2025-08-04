---
authors:
  - "[[Jieren Deng|Jieren Deng]]"
  - "[[Hanbin Hong|Hanbin Hong]]"
  - "[[Aaron Palmer|Aaron Palmer]]"
  - "[[Xin Zhou|Xin Zhou]]"
  - "[[Jinbo Bi|Jinbo Bi]]"
  - "[[Kaleel Mahmood|Kaleel Mahmood]]"
  - "[[Yuan Hong|Yuan Hong]]"
  - "[[Derek Aguiar|Derek Aguiar]]"
year: 2024
tags:
  - paper
  - robustness
url: http://arxiv.org/abs/2405.16036
share: true
---


> [!tldr] Abstract
> Randomized smoothing has become a leading method for achieving certified robustness in deep classifiers against ℓp-norm adversarial perturbations. Current approaches for achieving certified robustness, like data augmentation with Gaussian noise and adversarial training, require expensive training procedures that tune large models for different Gaussian noise levels from scratch and thus cannot leverage high-performance pre-trained neural networks. In this work, we introduce a novel certifying adapters framework (CAF) that enables and enhances the certification of classifier adversarial robustness. Our approach makes few assumptions about the underlying training algorithm or feature extractor, and is thus broadly applicable to different feature extractor architectures (e.g., convolutional neural networks or vision transformers) and smoothing algorithms. We show that CAF (a) enables certification in uncertified models pre-trained on clean datasets and (b) substantially improves the performance of certified classifiers via randomized smoothing and SmoothAdv at multiple radii in CIFAR-10 and ImageNet. We demonstrate that CAF achieves improved certified accuracies when compared to methods based on random or denoised smoothing, and that CAF is insensitive to certifying adapter hyperparameters. Finally, we show that an ensemble of adapters enables a single pre-trained feature extractor to defend against a range of noise perturbation scales.



## Notes

[Zotero Link](zotero://select/library/items/UGQUKII4)


