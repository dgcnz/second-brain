---
authors:
  - "[[Etai Littwin|Etai Littwin]]"
  - "[[Omid Saremi|Omid Saremi]]"
  - "[[Madhu Advani|Madhu Advani]]"
  - "[[Vimal Thilak|Vimal Thilak]]"
  - "[[Preetum Nakkiran|Preetum Nakkiran]]"
  - "[[Chen Huang|Chen Huang]]"
  - "[[Joshua Susskind|Joshua Susskind]]"
year: 2024
tags:
  - paper
  - dl_theory
url: https://arxiv.org/abs/2407.03475
share: true
---
> [!tldr] Abstract
> Two competing paradigms exist for self-supervised learning of data representations. Joint Embedding Predictive Architecture (JEPA) is a class of architectures in which semantically similar inputs are encoded into representations that are predictive of each other. A recent successful approach that falls under the JEPA framework is self-distillation, where an online encoder is trained to predict the output of the target encoder, sometimes using a lightweight predictor network. This is contrasted with the Masked AutoEncoder (MAE) paradigm, where an encoder and decoder are trained to reconstruct missing parts of the input in the data space rather, than its latent representation. A common motivation for using the JEPA approach over MAE is that the JEPA objective prioritizes abstract features over fine-grained pixel information (which can be unpredictable and uninformative). In this work, we seek to understand the mechanism behind this empirical observation by analyzing the training dynamics of deep linear models. We uncover a surprising mechanism: in a simplified linear setting where both approaches learn similar representations, JEPAs are biased to learn high-influence features, i.e., features characterized by having high regression coefficients. Our results point to a distinct implicit bias of predicting in latent space that may shed light on its success in practice.

