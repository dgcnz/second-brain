---
authors:
  - "[[Randall Balestriero|Randall Balestriero]]"
  - "[[Mark Ibrahim|Mark Ibrahim]]"
  - "[[Vlad Sobal|Vlad Sobal]]"
  - "[[Ari Morcos|Ari Morcos]]"
  - "[[Shashank Shekhar|Shashank Shekhar]]"
  - "[[Tom Goldstein|Tom Goldstein]]"
  - "[[Florian Bordes|Florian Bordes]]"
  - "[[Adrien Bardes|Adrien Bardes]]"
  - "[[Gregoire Mialon|Gregoire Mialon]]"
  - "[[Yuandong Tian|Yuandong Tian]]"
  - "[[Avi Schwarzschild|Avi Schwarzschild]]"
  - "[[Andrew Gordon Wilson|Andrew Gordon Wilson]]"
  - "[[Jonas Geiping|Jonas Geiping]]"
  - "[[Quentin Garrido|Quentin Garrido]]"
  - "[[Pierre Fernandez|Pierre Fernandez]]"
  - "[[Amir Bar|Amir Bar]]"
  - "[[Hamed Pirsiavash|Hamed Pirsiavash]]"
  - "[[Yann LeCun|Yann LeCun]]"
  - "[[Micah Goldblum|Micah Goldblum]]"
year: 2023
tags:
  - paper
  - ssl
  - dense_ssl
  - dl_theory
  - representation_learning
url: http://arxiv.org/abs/2304.12210
share: true
---


> [!tldr] Abstract
> Self-supervised learning, dubbed the dark matter of intelligence, is a promising path to advance machine learning. Yet, much like cooking, training SSL methods is a delicate art with a high barrier to entry. While many components are familiar, successfully training a SSL method involves a dizzying set of choices from the pretext tasks to training hyper-parameters. Our goal is to lower the barrier to entry into SSL research by laying the foundations and latest SSL recipes in the style of a cookbook. We hope to empower the curious researcher to navigate the terrain of methods, understand the role of the various knobs, and gain the know-how required to explore how delicious SSL can be.



## Notes

[Zotero Link](zotero://select/library/items/NGL9U774)

“3. Learning spatial context: This category of methods trains a model to understand the relative positions and orientations of objects within a scene. RotNet [Gidaris et al., 2018] masks the direction of gravity by applying a random rotation and then asks the model to predict the rotation. Doersch et al. [2015] is one of the first SSL methods that simply predicts the relative location of two randomly sampled patches in an image. This strategy was superseded by “jigsaw” methods [Pathak et al., 2016, Noroozi et al., 2018] that break an image into an array of disjoint patches and predict the relative location of each.” (Balestriero et al., 2023, p. 5)

“Several works have aimed at understanding how BYOL and SimSiam avoid collapse such as Tian et al. [2021] or Halvagal et al. [2022], where they found that the asymmetry between the two branches is the key, as well the training dynamics which regularize the variance of the embeddings implicitly” (Balestriero et al., 2023, p. 12)

“The SSL canonical correlation analysis family originates with the Canonical Correlation Framework (CCA) [Hotelling, 1992]. The high-level goal of CCA is to infer the relationship between two variables by analyzing their cross-covariance matrices.” (Balestriero et al., 2023, p. 13)

“VICReg, the most recent among these methods, balances three objectives based on co-variance matrices of representations from two views: variance, invariance, covariance shown in Figure 6. Regularizing the variance along each dimension of the representation prevents collapse, the invariance ensures two views are encoded similarly, and the co-variance encourages different dimensions of the representation to capture different features.” (Balestriero et al., 2023, p. 14)

“Jing et al. [2022] study the role of linear projectors in contrastive learning. More precisely, it is argued that the projector prevents dimensional collapse in the representation space and that it only needs to be diagonal and low-rank to do so. Although the proposed method without a projector outperforms SimCLR with a one layer linear projector, for 2- and 3-MLP projectors, performance remains out of reach. Cosentino et al. [2022] study the interplay of the projector and data augmentations when the augmentations are Lie group transformations, and, as Mialon et al. [2022], provide an explanation on the effect of width and depth of the projector.” (Balestriero et al., 2023, p. 18)

“It is worth noting that perfect invariance is not achieved thanks to the projector [[Guillotine Regularization - Why removing layers is needed to improve generalization in Self-Supervised Learning|Guillotine Regularization - Why removing layers is needed to improve generalization in Self-Supervised Learning]], which helps improve performance on tasks which are not entirely invariant.” (Balestriero et al., 2023, p. 21)

“[[Guillotine Regularization - Why removing layers is needed to improve generalization in Self-Supervised Learning|Guillotine Regularization - Why removing layers is needed to improve generalization in Self-Supervised Learning]] show that adding a projector is not only useful for SSL but is also highly beneficial in a supervised training setting when there is a misalignment between the training and downstream tasks (which was also demonstrated by Sariyildiz et al. [2022])” (Balestriero et al., 2023, p. 23)

“In some cases, enforcing invariance over two very different views might be a very strong constraint that could harm the performance, like when the content of the two views is different.” (Balestriero et al., 2023, p. 24)

“Similarly to how large batch sizes were seen as a requirement for contrastive methods, a large output dimension of the projector was seen as a requirement for covariance based methods.” (Balestriero et al., 2023, p. 24)

> This is also not the case for SimDINO, it succesfully removes that last projection.

“While VICReg stays more sensitive to the output dimension of the projector than SimCLR, it is significantly more robust than originally thought and very large output dimensions are not a requirement” (Balestriero et al., 2023, p. 24)

“Further, Zhao et al. [2021] argue that self-supervised learners also lack localization information because the models are able to use all parts of the image, both foreground and background, to make their predictions.” (Balestriero et al., 2023, p. 43)

“Interestingly, older pretext tasks such as jigsaw or colorization, which predate the recent SSL craze sparked by MoCo and SimCLR, can also achieve competitive performance compared to supervised learning backbones when the pretext task is made “hard” enough [[Scaling and Benchmarking Self-Supervised Visual Representation Learning|Scaling and Benchmarking Self-Supervised Visual Representation Learning]]” (Balestriero et al., 2023, p. 43)

“More recently, [[VICRegL - Self-Supervised Learning of Local Visual Features|VICRegL - Self-Supervised Learning of Local Visual Features]] applies a similar principle by combining geometric and learned matching, with a non-contrastive criterion” (Balestriero et al., 2023, p. 44)