---
authors:
  - "[[Feng Chen]]"
  - "[[Mario Valerio Giuffrida]]"
  - "[[Sotirios A. Tsaftaris]]"
year: 2023
tags:
  - paper
  - peft
  - foundation_models
url: https://openaccess.thecvf.com/content/ICCV2023W/CVPPA/html/Chen_Adapting_Vision_Foundation_Models_for_Plant_Phenotyping_ICCVW_2023_paper.html
share: true
---
> [!tldr] Abstract
> Foundation models are large models pre-trained on tremendous amount of data. They can be typically adapted to diverse downstream tasks with minimal effort. However, as foundation models are usually pre-trained on images or texts sourced from the Internet, their performance in specialized domains, such as plant phenotyping, comes into question. In addition, fully fine-tuning foundation models is time-consuming and requires high computational power. This paper investigates the efficient adaptation of foundation models for plant phenotyping settings and tasks. We perform extensive experiments on fine-tuning three foundation models, MAE, DINO, and DINOv2 on three essential plant phenotyping tasks: leaf counting, instance segmentation, and disease classification. In particular, the pre-trained backbones are kept frozen, while two distinct fine-tuning methods are evaluated, namely adapter tuning (using LoRA) and decoder tuning. The experimental results show that a foundation model can be efficiently adapted to multiple plant phenotyping tasks, yielding similar performance as the state-of-the-art (SoTA) models specifically designed or trained for each task. Despite exhibiting great transferability over different tasks, the fine-tuned foundation models perform slightly worse than the SoTA task-specific models in some scenarios, which requires further investigation.

## Notes

> [!info] Motivation / Problem
> Foundation models struggle with specialized data like (plant phenotyping, cancer predictions)

> [!faq] Research question
> Which efficient fine-tuning technique is most promising for adapting foundation models (MAE, DINO, DINOv2) in specialized data? 

> [!example] Methods
> Benchmarked fine-tuning methods include decoder fine-tuning (aka linear probing) and adapter tuning (linear probing + LoRa)

> [!done] Results
> 1. LoRa consistently beats DT
> 2. VFM w/ LoRa are often competitive fully-trained/finetuned SOTA
> 3. It's not clear that one vfm beats another, each model (DINO, DINOv2, MAE) have metrics and tasks where they shine
> 4. LoRa can help dampen issues of data scarcity, domain shifts and class imbalance


