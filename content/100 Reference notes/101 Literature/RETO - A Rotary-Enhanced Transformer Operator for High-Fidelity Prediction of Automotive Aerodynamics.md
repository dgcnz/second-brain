---
authors:
  - "[[Bojun Zhang]]"
  - "[[Huiyu Yang]]"
  - "[[Yunpeng Wang]]"
  - "[[Yuntian Chen]]"
  - "[[Yuanwei Bin]]"
  - "[[Rikui Zhang]]"
  - "[[Jianchun Wang]]"
year: 2026
date: 2026-04-30
tags:
  - paper
url: https://arxiv.org/abs/2605.00062
draft: false
---


> [!tldr] Abstract
> Rapid aerodynamic evaluation is crucial for modern vehicle design, yet existing neural operators struggle to capture intricate spatial correlations. We propose the rotary-enhanced transformer operator (RETO), a novel neural solver featuring a dual-stage spatial awareness mechanism: sinusoidal-cosine encodings for global referencing and rotary positional encodings (RoPE) for relative displacements. RoPE encodes spatial relations via unitary rotations, enforcing translation invariance and enhancing local gradient resolution. RETO is validated on ShapeNet and the high-fidelity DrivAerML benchmark. On ShapeNet, RETO achieves a relative $L_2$ error of 0.063, outperforming RegDGCNN at 0.125 and representing a 16\% improvement over the Transolver baseline, which yields an error of 0.075. These performance gains are further amplified on the DrivAerML dataset, where RETO achieves relative $L_2$ errors of 0.089 for surface pressure and 0.097 for velocity. In comparison, Transolver results in errors of 0.116 and 0.121 for the same metrics, indicating that RETO achieves precision enhancements of 23\% and 19\%, respectively. For comprehensive comparison, the surface pressure and velocity errors for AB-UBT are 0.102 and 0.124, while RegDGCNN yields 0.235 and 0.312, respectively. Information-theoretical analysis shows that the entropy peak of RETO at 0.35 is significantly lower than that of Transolver at 0.75 under $10^4$ resolution, indicating a focused attentional mechanism capable of preserving localized gradients against global diffusion.



## Notes

[Zotero Link](zotero://select/library/items/JLXJM8TD)
