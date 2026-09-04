---
authors:
  - "[[Felix B. Mueller]]"
  - "[[Jan F. Meier]]"
  - "[[Timo Lueddecke]]"
  - "[[Richard Vogg]]"
  - "[[Roger L. Freixanet]]"
  - "[[Valentin Hassler]]"
  - "[[Tiffany Bosshard]]"
  - "[[Elif Karakoc]]"
  - "[[William J. O'Hearn]]"
  - "[[Sofia M. Pereira]]"
  - "[[Sandro Sehner]]"
  - "[[Kaja Wierucka]]"
  - "[[Judith Burkart]]"
  - "[[Claudia Fichtel]]"
  - "[[Julia Fischer]]"
  - "[[Alexander Gail]]"
  - "[[Catherine Hobaiter]]"
  - "[[Julia Ostner]]"
  - "[[Liran Samuni]]"
  - "[[Oliver Schülke]]"
  - "[[Neda Shahidi]]"
  - "[[Erin G. Wessling]]"
  - "[[Alexander S. Ecker]]"
year: 2025
date: 2025-11-12
tags:
  - paper
url: https://arxiv.org/abs/2511.09675
draft: false
---


> [!tldr] Abstract
> Non-human primates are our closest living relatives, and analyzing their behavior is central to research in cognition, evolution, and conservation. Computer vision could greatly aid this research, but existing methods often rely on human-centric pretrained models and focus on single datasets, which limits generalization. We address this limitation by shifting from a model-centric to a data-centric approach and introduce PriVi, a large-scale primate-centric video pretraining dataset. PriVi contains 424 hours of curated video, combining 174 hours from behavioral research across 11 settings with 250 hours of diverse web-sourced footage, assembled through a scalable data curation pipeline. We continue pretraining V-JEPA, a large-scale video model, on PriVi to learn primate-specific representations and evaluate it using a lightweight frozen classifier. Across four benchmark datasets, ChimpACT, PanAf500, BaboonLand, and ChimpBehave, our approach consistently outperforms prior work, including fully finetuned baselines, and scales favorably with fewer labels. These results demonstrate for the first time that domain-level pretraining, where pretraining is conducted on similar data but not the target dataset itself, works for video models. Our primate-centric pretraining substantially improves data efficiency and generalization, making it a promising approach for low-label applications. Dataset, code, and models are available: https://privi.eckerlab.org



## Notes

[Zotero Link](zotero://select/library/items/9JZIZTPC)
