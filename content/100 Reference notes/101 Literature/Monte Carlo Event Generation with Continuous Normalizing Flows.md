---
authors:
  - "[[Enrico Bothmann]]"
  - "[[Timo Janßen]]"
  - "[[Max Knobbe]]"
  - "[[Bernhard Schmitzer]]"
  - "[[Fabian Sinz]]"
year: 2026
date: 2026-04-03
tags:
  - paper
url: https://arxiv.org/abs/2604.03511
draft: false
---


> [!tldr] Abstract
> We apply Continuous Normalizing Flows trained with the Flow Matching method to the problem of phase-space sampling in Monte Carlo event generation for high-energy collider physics. Focusing on lepton-pair and top quark pair production with multiple jets, the two computationally most expensive processes at the Large Hadron Collider, we train helicity-conditioned Continuous Normalizing Flows to remap the random numbers used in matrix element evaluation. Compared to standard methods, we achieve unweighting efficiency improvements by factors of up to 184 and 25 for the two processes at their respective highest jet number, at the cost of an increased evaluation time. When combining the advantages of Continuous Normalizing Flows with the fast evaluation times of Coupling Layer based Flows, using the RegFlow approach, we find parton-level unweighted event generation walltime gains of about a factor of ten at the highest jet numbers. These substantial gains highlight the promise of samplers based on machine learning for next-generation collider experiments.



## Notes

[Zotero Link](zotero://select/library/items/5H2CGMDV)
