---
authors:
  - "[[Mehrdad Farajtabar]]"
  - "[[Navid Azizan]]"
  - "[[Alex Mott]]"
  - "[[Ang Li]]"
year: 
date: 
tags:
  - paper
url: https://proceedings.mlr.press/v108/farajtabar20a.html
draft: false
---


> [!tldr] Abstract
> Neural networks are achieving state of the art and sometimes super-human performance on learning tasks across a variety of domains. Whenever these problems require learning in a continual or sequential manner, however, neural networks su↵er from the problem of catastrophic forgetting; they forget how to solve previous tasks after being trained on a new task, despite having the essential capacity to solve both tasks if they were trained on both simultaneously. In this paper, we propose to address this issue from a parameter space perspective and study an approach to restrict the direction of the gradient updates to avoid forgetting previously-learned data. We present the Orthogonal Gradient Descent (OGD) method, which accomplishes this goal by projecting the gradients from new tasks onto a subspace in which the neural network output on previous task does not change and the projected gradient is still in a useful direction for learning the new task. Our approach utilizes the high capacity of a neural network more e ciently and does not require storing the previously learned data that might raise privacy concerns. Experiments on common benchmarks reveal the e↵ectiveness of the proposed OGD method.



## Notes

[Zotero Link](zotero://select/library/items/98JFA4QP)
