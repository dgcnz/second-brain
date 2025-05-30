---
authors:
  - "[[Sourya Basu|Sourya Basu]]"
  - "[[Pulkit Katdare|Pulkit Katdare]]"
  - "[[Prasanna Sattigeri|Prasanna Sattigeri]]"
  - "[[Vijil Chenthamarakshan|Vijil Chenthamarakshan]]"
  - "[[Katherine Driggs-Campbell|Katherine Driggs-Campbell]]"
  - "[[Payel Das|Payel Das]]"
  - "[[Lav R. Varshney|Lav R. Varshney]]"
year: 2023
tags:
  - paper
  - equivariance
url: http://arxiv.org/abs/2305.09900
share: true
---


> [!tldr] Abstract
> Efficient transfer learning algorithms are key to the success of foundation models on diverse downstream tasks even with limited data. Recent works of Basu et al. (2023) and Kaba et al. (2022) propose group averaging (equitune) and optimizationbased methods, respectively, over features from group-transformed inputs to obtain equivariant outputs from non-equivariant neural networks. While Kaba et al. (2022) are only concerned with training from scratch, we find that equitune performs poorly on equivariant zero-shot tasks despite good finetuning results. We hypothesize that this is because pretrained models provide better quality features for certain transformations than others and simply averaging them is deleterious. Hence, we propose λ-equitune that averages the features using importance weights, λs. These weights are learned directly from the data using a small neural network, leading to excellent zero-shot and finetuned results that outperform equitune. Further, we prove that λ-equitune is equivariant and a universal approximator of equivariant functions. Additionally, we show that the method of Kaba et al. (2022) used with appropriate loss functions, which we call equizero, also gives excellent zero-shot and finetuned performance. Both equitune and equizero are special cases of λequitune. To show the simplicity and generality of our method, we validate on a wide range of diverse applications and models such as 1) image classification using CLIP, 2) deep Q-learning, 3) fairness in natural language generation (NLG), 4) compositional generalization in languages, and 5) image classification using pretrained CNNs such as Resnet and Alexnet.



## Notes

[Zotero Link](zotero://select/library/items/Q562WFEI)


