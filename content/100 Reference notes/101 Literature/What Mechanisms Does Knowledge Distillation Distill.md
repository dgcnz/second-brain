---
authors:
  - "[[Cindy Wu]]"
  - "[[Ekdeep Singh Lubana]]"
  - "[[Bruno Kacper Mlodozeniec]]"
  - "[[Robert Kirk]]"
  - "[[David Krueger]]"
  - "[[Marco Fumero]]"
  - "[[Emanuele Rodolà]]"
  - "[[Clementine Domine]]"
  - "[[Francesco Locatello]]"
  - "[[Karolina Dziugaite]]"
  - "[[Mathilde Caron]]"
year: 
date: 
tags:
  - paper
url: 
draft: false
---


> [!tldr] Abstract
> Knowledge distillation is a commonly-used compression method in ML due to the popularity of increasingly large-scale models, but it is clear that not all the information a teacher model contains is distilled into the smaller student model. We aim to formalize the concept of ‘knowledge’ to investigate how knowledge is transferred during distillation, focusing on shared invariant outputs to counterfactual changes of dataset latent variables (we call these latents mechanisms). We define a student model to be a good stand-in model for a teacher if it shares the teacher’s learned mechanisms, and find that Jacobian matching and contrastive representation learning are viable methods by which to train such models. While these methods do not result in perfect transfer of mechanisms, we show they often improve student fidelity or mitigate simplicity bias (as measured by the teacher-to-student KL divergence and accuracy on various out-of-distribution test datasets), especially on datasets with spurious statistical correlations.



## Notes

[Zotero Link](zotero://select/library/items/GJAW2CBN)
