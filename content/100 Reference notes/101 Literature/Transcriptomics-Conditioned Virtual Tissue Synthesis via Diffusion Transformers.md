---
authors:
  - "[[Pantelis R. Vlachas]]"
  - "[[Kalin Nonchev]]"
  - "[[Viktor H. Koelzer]]"
  - "[[Gunnar Rätsch]]"
year: 2026
date: 2026-05-29
tags:
  - paper
url: http://dx.doi.org/10.64898/2026.05.26.727902
draft: false
---


> [!tldr] Abstract
> <jats:p> Spatial transcriptomics couples hematoxylin and eosin (H&amp;E) tissue morphology with spatially resolved gene expression (GE). However, generative models that exploit this coupling to synthesize tissue images from transcriptomic profiles remain scarce. We present STMDiT (Spatial Transcriptomics and Morphology Diffusion Transformer), a diffusion transformer that synthesizes H&amp;E histopathology patches conditioned jointly on morphological embeddings and transcriptomic profiles. Building on PixCell (Yellapragada et al., 2025), we integrate gene expression from a frozen CancerFoundation encoder (Theus et al., 2024) through adaptive layer normalization and per-block cross-attention, and we train under dual classifier-free guidance with independent modality dropout. On the 10x TuPro Visium melanoma cohort, GE conditioning improves both image quality over the no-GE PixCell-B baseline (best FID = 252.9 vs 330.7) and transcriptomic fidelity (best AUC = 0.267 vs 0.229, reaching 82% of the real-tile ceiling). Training with DeepSpot’s predicted-transcriptomics pseudo-labels (PTPL) uniquely transfers zero-shot to TCGA SKCM, an out-of-distribution (OOD) H&amp;E-only melanoma cohort: PTPL-XAttn-PMA-B reaches FID = 690.0, a 57-point improvement over the no-GE baseline (747.1), with a within-model GE-ablation effect of Δ <jats:sub>OOD</jats:sub> = +309.5, enabling virtual tissue synthesis beyond native spatial-transcriptomics coverage. Our results indicate that gene-expression conditioning produces morphologically distinct tissue images and supports virtual tissue simulation for hypothesis testing in computational pathology. </jats:p>



## Notes

[Zotero Link](zotero://select/library/items/YW358X8G)
