---
authors:
  - "[[Lyle Regenwetter]]"
  - "[[Akash Srivastava]]"
  - "[[Dan Gutfreund]]"
  - "[[Faez Ahmed]]"
year: 2023
date: 2023-02-06
tags:
  - paper
url: https://arxiv.org/abs/2302.02913
draft: false
---


> [!tldr] Abstract
> Deep generative models such as Variational Autoencoders (VAEs), Generative Adversarial Networks (GANs), Diffusion Models, and Transformers, have shown great promise in a variety of applications, including image and speech synthesis, natural language processing, and drug discovery. However, when applied to engineering design problems, evaluating the performance of these models can be challenging, as traditional statistical metrics based on likelihood may not fully capture the requirements of engineering applications. This paper doubles as a review and practical guide to evaluation metrics for deep generative models (DGMs) in engineering design. We first summarize the well-accepted `classic' evaluation metrics for deep generative models grounded in machine learning theory. Using case studies, we then highlight why these metrics seldom translate well to design problems but see frequent use due to the lack of established alternatives. Next, we curate a set of design-specific metrics which have been proposed across different research communities and can be used for evaluating deep generative models. These metrics focus on unique requirements in design and engineering, such as constraint satisfaction, functional performance, novelty, and conditioning. Throughout our discussion, we apply the metrics to models trained on simple-to-visualize 2-dimensional example problems. Finally, we evaluate four deep generative models on a bicycle frame design problem and structural topology generation problem. In particular, we showcase the use of proposed metrics to quantify performance target achievement, design novelty, and geometric constraints. We publicly release the code for the datasets, models, and metrics used throughout the paper at https://decode.mit.edu/projects/metrics/.



## Notes

[Zotero Link](zotero://select/library/items/4YPSN8EJ)
