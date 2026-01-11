---
authors:
  - "[[Jack Brady]]"
  - "[[Bernhard Schölkopf]]"
  - "[[Thomas Kipf]]"
  - "[[Simon Buchholz]]"
  - "[[Wieland Brendel]]"
year: 2025
date: 2025-12-17
tags:
  - paper
  - dl-theory
url: http://arxiv.org/abs/2512.08854
draft: true
---


> [!tldr] Abstract
> It has been hypothesized that human-level visual perception requires a generative approach in which internal representations result from inverting a decoder. Yet today’s most successful vision models are non-generative, relying on an encoder that maps images to representations without decoder inversion. This raises the question of whether generation is, in fact, necessary for machines to achieve human-level visual perception. To address this, we study whether generative and non-generative methods can achieve compositional generalization, a hallmark of human perception. Under a compositional data generating process, we formalize the inductive biases required to guarantee compositional generalization in decoder-based (generative) and encoder-based (non-generative) methods. We then show theoretically that enforcing these inductive biases on encoders is generally infeasible using regularization or architectural constraints. In contrast, for generative methods, the inductive biases can be enforced straightforwardly, thereby enabling compositional generalization by constraining a decoder and inverting it. We highlight how this inversion can be performed efficiently, either online through gradient-based search or offline through generative replay. We examine the empirical implications of our theory by training a range of generative and non-generative methods on photorealistic image datasets. We find that, without the necessary inductive biases, non-generative methods often fail to generalize compositionally and require large-scale pretraining or added supervision to improve generalization. By comparison, generative methods yield significant improvements in compositional generalization, without requiring additional data, by leveraging suitable inductive biases on a decoder along with search and replay.



## Notes

[Zotero Link](zotero://select/library/items/S6TVBAEQ)
