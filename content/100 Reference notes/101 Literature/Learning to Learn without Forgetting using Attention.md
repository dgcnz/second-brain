---
authors:
- '[[Anna Vettoruzzo]]'
- '[[Joaquin Vanschoren]]'
- '[[Mohamed-Rafik Bouguelia]]'
- "[[Thorsteinn R\xF6gnvaldsson]]"
year: 2024
tags:
- paper
- continual_learning
url: http://arxiv.org/abs/2408.03219
date: '2024-08-06'
---

> [!tldr] Abstract
> Continual learning (CL) refers to the ability to continually learn over time by accommodating new knowledge while retaining previously learned experience. While this concept is inherent in human learning, current machine learning methods are highly prone to overwrite previously learned patterns and thus forget past experience. Instead, model parameters should be updated selectively and carefully, avoiding unnecessary forgetting while optimally leveraging previously learned patterns to accelerate future learning. Since hand-crafting effective update mechanisms is difficult, we propose meta-learning a transformer-based optimizer to enhance CL. This meta-learned optimizer uses attention to learn the complex relationships between model parameters across a stream of tasks, and is designed to generate effective weight updates for the current task while preventing catastrophic forgetting on previously encountered tasks. Evaluations on benchmark datasets like SplitMNIST, RotatedMNIST, and SplitCIFAR-100 affirm the efficacy of the proposed approach in terms of both forward and backward transfer, even on small sets of labeled data, highlighting the advantages of integrating a meta-learned optimizer within the continual learning framework.



## Notes

[Zotero Link](zotero://select/library/items/IBI6BFRN)


