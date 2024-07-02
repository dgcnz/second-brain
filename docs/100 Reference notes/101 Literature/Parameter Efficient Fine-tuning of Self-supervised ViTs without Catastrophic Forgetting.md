---
authors:
  - "[[Reza Akbarian Bafghi|Reza Akbarian Bafghi]]"
  - "[[Nidhin Harilal|Nidhin Harilal]]"
  - "[[Claire Monteleoni|Claire Monteleoni]]"
  - "[[Maziar Raissi|Maziar Raissi]]"
year: 2024
tags:
  - paper
url: https://arxiv.org/abs/2404.17245
share: true
---
> [!info] Abstract
> Artificial neural networks often suffer from catastrophic forgetting, where learning new concepts leads to a complete loss of previously acquired knowledge. We observe that this issue is particularly magnified in vision transformers (ViTs), where post-pre-training and fine-tuning on new tasks can significantly degrade the model's original general abilities. For instance, a DINO ViT-Base/16 pre-trained on ImageNet-1k loses over 70% accuracy on ImageNet-1k after just 10 iterations of fine-tuning on CIFAR-100. Overcoming this stability-plasticity dilemma is crucial for enabling ViTs to continuously learn and adapt to new domains while preserving their initial knowledge. In this work, we study two new parameter-efficient fine-tuning strategies: (1)~Block Expansion, and (2) Low-rank adaptation (LoRA). Our experiments reveal that using either Block Expansion or LoRA on self-supervised pre-trained ViTs surpass fully fine-tuned ViTs in new domains while offering significantly greater parameter efficiency. Notably, we find that Block Expansion experiences only a minimal performance drop in the pre-training domain, thereby effectively mitigating catastrophic forgetting in pre-trained ViTs.
  

## Paper Results

| Model                    | N. params | CIFAR-100 | IN-1K | Mean      |
| ------------------------ | --------- | --------- | ----- | --------- |
| **Standard Fine-tuning** |           |           |       |           |
| All                      | 85.9 M    | 88.13     | 25.24 | 56.69     |
| Top-3                    | 21.3 M    | 84.56     | 74.15 | 79.36     |
| Linear                   | 76.9 K    | 80.57     | 76.11 | 78.34     |
| **LoRA**                 |           |           |       |           |
| 𝑟=4                     | 301 K     | 87.91     | 66.82 | 77.37     |
| 𝑟=8                     | 448 K     | 88.27     | 65.99 | 77.13     |
| 𝑟=16                    | 743 K     | 87.84     | 65.06 | 76.45     |
| **Block Expansion**      |           |           |       |           |
| 𝑝=1                     | 7.2 M     | 82.72     | 75.75 | 79.24     |
| 𝑝=2                     | 14.3 M    | 86.70     | 75.54 | 81.12     |
| 𝑝=3                     | 21.3 M    | 88.58     | 74.61 | **81.60** |
| 𝑝=4                     | 28.4 M    | 89.09     | 72.28 | 80.69     |

## Observations
- Linear only fine-tuning does pretty well, kinda surprising.
- It's kind of suprising that [[LoRa Adapter|LoRa Adapter]] do bad, but does it matter? What is the purpose of making LoRa resistant to catastrophic forgetting if the whole point of it is to be able to hot-swap modules depending on the task?
- Also worthy to point out that [[Block Expansion|Block Expansion]] requires training parameters in the order of millions while LoRa only requires thousands. 