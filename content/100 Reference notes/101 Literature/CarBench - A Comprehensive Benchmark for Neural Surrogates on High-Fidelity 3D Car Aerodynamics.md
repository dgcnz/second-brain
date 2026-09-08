---
authors:
  - "[[Mohamed Elrefaie]]"
  - "[[Dule Shu]]"
  - "[[Matt Klenk]]"
  - "[[Faez Ahmed]]"
year: 2025
date: 2025-11-25
tags:
  - paper
url: https://arxiv.org/abs/2512.07847
draft: false
---


> [!tldr] Abstract
> Benchmarking has been the cornerstone of progress in computer vision, natural language processing, and the broader deep learning domain, driving algorithmic innovation through standardized datasets and reproducible evaluation protocols. The growing availability of large-scale Computational Fluid Dynamics (CFD) datasets has opened new opportunities for applying machine learning to aerodynamic and engineering design. Yet, despite this progress, there exists no standardized benchmark for large-scale numerical simulations in engineering design. In this work, we introduce CarBench, the first comprehensive benchmark dedicated to large-scale 3D car aerodynamics, performing a large-scale evaluation of state-of-the-art models on DrivAerNet++, the largest public dataset for automotive aerodynamics, containing over 8,000 high-fidelity car simulations. We assess eleven architectures spanning neural operator methods (e.g., Fourier Neural Operator), geometric deep learning (PointNet, RegDGCNN, PointMAE, PointTransformer), transformer-based neural solvers (Transolver, Transolver++, AB-UPT), and implicit field networks (TripNet). Beyond standard interpolation tasks, we perform cross-category experiments in which transformer-based solvers trained on a single car archetype are evaluated on unseen categories. Our analysis covers predictive accuracy, physical consistency, computational efficiency, and statistical uncertainty. To accelerate progress in data-driven engineering, we open-source the benchmark framework, including training pipelines, uncertainty estimation routines based on bootstrap resampling, and pretrained model weights, establishing the first reproducible foundation for large-scale learning from high-fidelity CFD simulations, available at https://github.com/Mohamedelrefaie/CarBench.



## Notes

[Zotero Link](zotero://select/library/items/KC448ENQ)
