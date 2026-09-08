---
authors:
  - "[[Jiyan Qiu]]"
  - "[[Lyulin Kuang]]"
  - "[[Guan Wang]]"
  - "[[Yichen Xu]]"
  - "[[Leiyao Cui]]"
  - "[[Shaotong Fu]]"
  - "[[Yixin Zhu]]"
  - "[[Ruihua Zhang]]"
year: 2025
date: 2025-10-19
tags:
  - paper
url: https://arxiv.org/abs/2510.16857
draft: false
---


> [!tldr] Abstract
> Vehicle aerodynamics optimization has become critical for automotive electrification, where drag reduction directly determines electric vehicle range and energy efficiency. Traditional approaches face an intractable trade-off: computationally expensive Computational Fluid Dynamics (CFD) simulations requiring weeks per design iteration, or simplified models that sacrifice production-grade accuracy. While machine learning offers transformative potential, existing datasets exhibit fundamental limitations -- inadequate mesh resolution, missing vehicle components, and validation errors exceeding 5% -- preventing deployment in industrial workflows. We present DrivAerStar, comprising 12,000 industrial-grade automotive CFD simulations generated using STAR-CCM+${}^\unicode{xAE}$ software. The dataset systematically explores three vehicle configurations through 20 Computer Aided Design (CAD) parameters via Free Form Deformation (FFD) algorithms, including complete engine compartments and cooling systems with realistic internal airflow. DrivAerStar achieves wind tunnel validation accuracy below 1.04% -- a five-fold improvement over existing datasets -- through refined mesh strategies with strict wall $y^+$ control. Benchmarks demonstrate that models trained on this data achieve production-ready accuracy while reducing computational costs from weeks to minutes. This represents the first dataset bridging academic machine learning research and industrial CFD practice, establishing a new standard for data-driven aerodynamic optimization in automotive development. Beyond automotive applications, DrivAerStar demonstrates a paradigm for integrating high-fidelity physics simulations with Artificial Intelligence (AI) across engineering disciplines where computational constraints currently limit innovation.



## Notes

[Zotero Link](zotero://select/library/items/SZAPA4UI)
