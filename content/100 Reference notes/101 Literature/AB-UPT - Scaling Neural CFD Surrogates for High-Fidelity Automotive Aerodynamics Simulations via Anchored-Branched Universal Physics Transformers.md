---
authors:
  - "[[Benedikt Alkin]]"
  - "[[Maurits Bleeker]]"
  - "[[Richard Kurle]]"
  - "[[Tobias Kronlachner]]"
  - "[[Reinhard Sonnleitner]]"
  - "[[Matthias Dorfer]]"
  - "[[Johannes Brandstetter]]"
year: 2025
date: 2025-02-13
tags:
  - paper
url: https://arxiv.org/abs/2502.09692
openreview: https://openreview.net/forum?id=nwQ8nitlTZ
venue: TMLR 2025
draft: false
---


> [!tldr] Abstract
> Recent advances in neural surrogate modeling offer the potential for transformative innovations in applications such as automotive aerodynamics. Yet, industrial-scale problems often involve volumetric meshes with cell counts reaching 100 million, presenting major scalability challenges. Complex geometries further complicate modeling through intricate surface-volume interactions, while quantities such as vorticity are highly nonlinear and must satisfy strict divergence-free constraints. To address these requirements, we introduce AB-UPT as a novel modeling scheme for building neural surrogates for CFD simulations. AB-UPT is designed to: (i) decouple geometry encoding and prediction tasks via multi-branch operators; (ii) enable scalability to high-resolution outputs via neural simulation in a low-dimensional latent space, coupled with anchored neural field decoders to predict high-fidelity outputs; (iii) enforce physics consistency by a divergence-free formulation. We show that AB-UPT yields state-of-the-art predictive accuracy of surface and volume fields on automotive CFD simulations ranging from 33 thousand up to 150 million mesh cells. Furthermore, our anchored neural field architecture enables the enforcement of hard physical constraints on the physics predictions without degradation in performance, exemplified by modeling divergence-free vorticity fields. Notably, the proposed models can be trained on a single GPU in less than a day and predict industry-standard surface and volume fields within seconds. Additionally, we show that the flexible design of our method enables neural simulation from a CAD geometry alone, thereby eliminating the need for costly CFD meshing procedures for inference.



## Notes

[Zotero Link](zotero://select/library/items/E62VBX6M)
