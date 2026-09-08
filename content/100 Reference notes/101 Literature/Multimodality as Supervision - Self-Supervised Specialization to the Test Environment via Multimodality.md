---
authors:
  - "[[Kunal Pratap Singh]]"
  - "[[Ali Garjani]]"
  - "[[Rishubh Singh]]"
  - "[[Muhammad Uzair Khattak]]"
  - "[[Efe Tarhan]]"
  - "[[Jason Toskov]]"
  - "[[Andrei Atanov]]"
  - "[[Oğuzhan Fatih Kar]]"
  - "[[Amir Zamir]]"
year: 2026
date: 2026-07-16
tags:
  - paper
url: https://arxiv.org/abs/2607.14721
draft: false
---


> [!tldr] Abstract
> Cross-modal learning, i.e., learning to predict one modality from another, is a fundamental mechanism for self-supervision via leveraging multimodality. Many practical applications, e.g., deploying a household robot, involve devices that are equipped with a rich set of sensors that enable multimodal sensing in their test environment. This presents an opportunity to apply cross-modal learning to the multimodal data sensed by these devices to learn representations. Findings in developmental psychology also suggest that biological agents leverage it to build an effective representation of their surroundings. To study this, we propose a controlled setup, where we restrict a user device to just a given test environment. It results in a specialization setup where we attempt to develop a performant model for this specific test environment. Under this setup, we develop Test-Space Training (TST), which performs multimodal data collection in the test environment and performs self-supervised pre-training on it. We evaluate these models on various downstream tasks in the same environment. Under this setup, we find various interesting insights, such as collecting rich multimodal data only from the test environment and leveraging cross-modal learning, we can achieve competitive results with generalist models (e.g., DINOv2 and CLIP) pre-trained on large-scale internet datasets. This enables an alternative scenario where the need for external Internet-scale datasets for pre-training models is reduced. We also present a set of analyses and ablations that raise intriguing points on substituting data with (multi)modality, and how varying pre-training data enables a tradeoff between a model's abilities to specialise to a test environment, and generalize to held-out spaces.



## Notes

[Zotero Link](zotero://select/library/items/QDYV2AAQ)
